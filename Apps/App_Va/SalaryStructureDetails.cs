
using Erp.Base.ScriptInterface;
using Erp.Base.Security;
using Erp.Common;
using HelperLib.Conversion;
using HelperLib.DAL;
using HelperLib.Extensions;
using HelperLib.Logging;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace App_Va.Apps.App_Va
{
    public class SalaryStructureDetails : ImplEntityScript, IEntityScript
    {
        ApplicationInfo _app;
        IDBConfiguration _cfg;
        ErpScriptObject Erp;
        public  void calculateSalaryStructure(Dictionary<string, object> args,ApplicationInfo app, IDBConfiguration cfg, ErpScriptObject erp)
        {
            _app = app;
            _cfg = cfg;
            Erp = erp;







            var str_insertsql = @"
--declare @recid varchar(100);
--set @recid='';
declare @ebsamount varchar(100);
set @ebsamount=(select top 1 fixedsalary from tbl_VA_employeeinformation where employeeinformation_pid=@recid)
declare @ct_fid varchar(100)
set @ct_fid=(
select top 1 ct_fid from tbl_VA_employeeinformation
join tbl_TP_positioncode on position_fid=positioncode_pid
where employeeinformation_pid=@recid
)
insert into tbl_salarystructure("+args["salaryheadformonthlysalary"] +@",RA_vacancymovement_fid,RA_candidate_fid,RA_jobvacancy_fid,ct_fid,company_fid,[salarystructuredate],[recalculate],[salaryDOE])
select isnull(@ebsamount,0)*12,isnull(@recid,null),isnull(@recid,null),isnull(@recid,null),isnull(@ct_fid,1),isnull(@Users.CompanyID,null),CAST(GETDATE() AS DATE),1,CAST(GETDATE() AS DATE)
";
            var err = "";
            int result = Erp.ExecuteSql<int>(str_insertsql,
                                 new Dictionary<string, object>() { { "@recid", args["rec_ID"].C2Str() } },
                                 out err);


            if (!err.IsBlank())
            {
                writeLogFile("1" + err);
                writeLogFile("str_insert = " + str_insertsql);
                Erp.ShowMessage(err, "Error");
                return;
            }
            else
            {
                // MakeApiCall();
                args["mode"] = "salarystructure";
                CallAPI(args);

            }

        }

        public void CallAPI(Dictionary<string, object> args)
        {
            writeLogFile("2 API CallMethod");

            //string loggerFilePath = Path.Combine(_app.TempDirectory, "API_URL_" + Guid.NewGuid().ToString() + ".txt");
            string salaryDetails = "", err = "";
            string vmID = args["rec_ID"].C2Str();//Erp.GetProp("_vm").C2Str();
            //string apiUrl = "http://13.126.129.219:8081/Easypay_Sud/view/API_Easypay.aspx";
            string apiUrl = "";
            string mode = args.ContainsKey("mode") ? args.Get("mode").C2Str() : "";
           // if (!apiUrl.IsBlank())
            {
                SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder(_cfg.ConnString);
                // Get the database name
                string databaseName = builder.InitialCatalog;
                writeLogFile("3 "+databaseName);
                string sql = @"
--[tbl_apiconf]
select top 1 apikey from tbl_VA_apiconfiguration where type='post'
                    --[tbl_va]
                    select top 1 isnull(RA_vacancymovement_fid,'')+'|'+isnull(RA_Jobvacancy_fid,'')+'|'+isnull(RA_Candidate_fid,'') as status from tbl_salarystructure where  RA_vacancymovement_fid=@VMID
                    --[tbl_easypaycompany]
                    select top 1 isnull(epcompany,0) as companyid from tbl_core_company where company_pid=@CompanyID
                    ";
                DataSet dt_records = Erp.ExecuteSql<DataSet>(sql,
                                     new Dictionary<string, object>() { { "@VMID", vmID }, { "@CompanyID", _app.CompanyID } }, out err);



                if (!err.IsBlank())
                {
                    writeLogFile("4 "+err);
                    writeLogFile("sql=" + sql);
                    Erp.ShowMessage(err, "Error");
                    return;
                }
                else
                {
                    if(dt_records.Tables["tbl_apiconf"] != null && dt_records.Tables["tbl_apiconf"].Rows.Count>0)
                    apiUrl = dt_records.Tables["tbl_apiconf"].Rows[0]["apikey"].C2Str();
                    if (dt_records.Tables["tbl_va"].Rows.Count > 0 && dt_records.Tables["tbl_easypaycompany"].Rows.Count > 0)
                    {
                        var sucess = dt_records.Tables["tbl_va"].Rows[0]["status"].C2Str();
                        int ep_companyid = dt_records.Tables["tbl_easypaycompany"].Rows[0]["companyid"].C2Int();
                        apiUrl = apiUrl + "?mode=" + mode + "&q=" + C.EncryptUrlSafe("1|" + ep_companyid + "|" + databaseName + "|1|1|" + sucess + "|fromonboarding", "EP URL SALT", "EP URL PWD");
                        writeLogFile("5 encrypted URL : " + apiUrl);
                    }
                }

            }
            {
                using (HttpClient httpClient = new HttpClient())
                {
                    try
                    {
                        // Ensure httpClient is not null before making the request
                        if (httpClient != null)
                        {
                            // Make an HTTP GET request (synchronously)
                            HttpResponseMessage response = httpClient.GetAsync(apiUrl).Result;
                            // Check if the request was successful (status code 200-299)
                            if (response.IsSuccessStatusCode)
                            {
                                // Read and print the content of the response (synchronously)
                                string apiResponse = response.Content.ReadAsStringAsync().Result;


                                if (apiResponse.Contains("SUCCESS"))
                                {
                                    args["message"] = true;
                                    Erp.ShowMessage("Salary Structure Saved Successfully", "success");
                                    writeLogFile("6 Salary Structure Saved Successfully: ");
                                }
                                else
                                {
                                    args["message"] = false;
                                    Erp.ShowMessage("Salary Structure Saved But Salary Not Calculated", "error");
                                    writeLogFile("6 Salary Structure Saved But Salary Not Calculated");
                                }


                            }
                            else
                            {
                                args["message"] = false;
                                Erp.ShowMessage("Api failed to call" + response.IsSuccessStatusCode, "error");
                                writeLogFile("7 Api failed to call" + response.IsSuccessStatusCode);
                            }
                        }
                        else
                        {
                            args["message"] = false;
                            Erp.ShowMessage("Http Client Issue is null", "error");
                            writeLogFile("8 Http Client Issue is null");
                        }
                    }
                    catch (Exception ex)
                    {
                        args["message"] = false;
                        Erp.ShowMessage("Api failed to call" + ex.Message, "error");
                        writeLogFile("9 Api failed to call" + ex.Message);
                    }
                }
            }
        }
    
    
    
    public void writeLogFile(String logData)
        {
            //File.AppendAllText(Path.Combine(_app.TempDirectory, "LogFile.txt"),logData + "\r\n-----------------------------------------------------\r\n");
        }
    
    
    }

}