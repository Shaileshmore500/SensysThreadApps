using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Data;
using System.Data.SqlClient;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.UI.WebControls;
using System.Xml;
using Erp.Base;
using Erp.Base.Reporting;
using Erp.Base.ScriptInterface;
using Erp.Base.Security;
using Erp.Common;
using ErpModel.Core;
using ErpModel.Globals;
using ErpModel.Model;
using HelperLib.Configurator;
using HelperLib.Controller;
using HelperLib.Conversion;
using HelperLib.DAL;
using HelperLib.Data;
using HelperLib.Extensions;
using HelperLib.View;
using System.Text.RegularExpressions;
using DevExpress.Spreadsheet;
using DevExpress.Docs;
using DevExpress.Utils;

namespace App_Tp.Apps.App_Tp
{

    public class EntityTransferExcelImporting : ImplEntityScript, IEntityScript
    {


        ApplicationInfo _app;
        IDBConfiguration _cfg;
        public void Init(ApplicationInfo app, IDBConfiguration cfg)
        {
            _app = app;
            _cfg = cfg;
            Debugger.Break();
        }
        public void ExecuteCommand(string sender, Dictionary<string, object> args)
        {

            bool fileloaded;
            Workbook wb = new Workbook();
            string SheetName = "";






            //this code for the read the data from excel nadcheck sheet 
            if (sender == "sheetload")
            {
                string FileName = Erp.GetParam("window", "filename").C2Str().ToLower();
                string FilePath = Erp.GetParam("window", "filepath").C2Str();
                //bool  IgnoreIfExists = Erp.GetParam("window", "IgnoreIfExists").C2Bool();
                string actualFilePath = Path.Combine(_app.TempDirectory, FilePath);
                if (FileName.Contains("xlsx") || FileName.Contains("xlsm"))
                    fileloaded = wb.LoadDocument(actualFilePath, DevExpress.Spreadsheet.DocumentFormat.Xlsx);
                else if (FileName.Contains("xls"))
                    fileloaded = wb.LoadDocument(actualFilePath, DevExpress.Spreadsheet.DocumentFormat.Xls);
                else
                {
                    //Erp.Show_Message("4", "Please Select Excel File");
                    Erp.ShowMessage("please select Excel File...", "error");
                    return;
                }
                if (fileloaded)
                    SheetName = wb.Worksheets[0].Name.C2Str();
                else
                {
                    Erp.ShowMessage("Something Went Wrong When Uploading File! Please Try Again...", "Error");
                    return;
                }
                CheckExcelData(wb, SheetName, args);
            }


        }

        private Boolean CheckExcelData(Workbook wb, string sheetName, Dictionary<string, object> args)
        {
            create_text("1");

            bool status = true;

            //createing data table for store data of excel
            DataTable dt_et = new DataTable();
            dt_et.Columns.Add("oldemployee_fid");
            dt_et.Columns.Add("dateoftransfer");
            dt_et.Columns.Add("newemployeecode");
            dt_et.Columns.Add("branch_fid");
            dt_et.Columns.Add("newdateofjoining");
            dt_et.Columns.Add("company_fid");
            dt_et.Columns.Add("entitytransfer_pid");
            dt_et.Columns.Add("createdBy_User_Fid");

            
            //fields for excel data validation and memory management 
            string oldEmpcode = "", Dot = "", newEmpcode = "", NewEntityCode = "", NewDoj = "";
            string _oldEmpcode = "", _Dot = "", _newEmpcode = "", _NewEntityCode = "", _NewDoj = "";
            StringBuilder ErrorList = new StringBuilder();
           // Dictionary<int, string> dic_EntityDefination = new Dictionary<int, string>();
            Dictionary<string, string> dic_Branch = new Dictionary<string, string>();
            Dictionary<string, string> dicEmployee = new Dictionary<string, string>();
            Dictionary<string, string> dicEntity = new Dictionary<string, string>();
            Dictionary<string, string> dicConfig = new Dictionary<string, string>();
            DataSet ds = getMasterData();
            if (Fn.IsEmpty(ds) || ds.Tables.Count <= 0)
                return false;

            //Review Date : 08/08/2023
            //Review By: Pravin.Rajput
            //Remarks: All variable Name not correct.Many spelling mistake
            foreach (DataRow drconfig in ds.Tables["tbl_TP_config"].Rows)
            {
                if (!dicConfig.ContainsKey(drconfig["toentity_fid"].C2Str() + "|" + drconfig["tovalue"].C2Str()))
                    dicConfig.Add(drconfig["toentity_fid"].C2Str() + "|" + drconfig["tovalue"].C2Str(), drconfig["tovalue"].C2Str());
            }
            foreach (DataRow dremployee in ds.Tables["tbl_employee"].Rows)
            {

                if (!Fn.IsEmpty(dremployee["employeecode"].C2Str()) && !dicEmployee.ContainsKey(dremployee["employeecode"].C2Str()))
                    dicEmployee.Add(dremployee["employeecode"].C2Str(), dremployee["employee_pid"].C2Str());
                
            }
            create_text("2");
            foreach (DataRow drbranch in ds.Tables["tbl_branch"].Rows)
            {

                if (!Fn.IsEmpty(drbranch["branchname"].C2Str().ToLower()) && !dic_Branch.ContainsKey(drbranch["branchname"].C2Str().ToLower()))
                    dic_Branch.Add(drbranch["branchname"].C2Str().ToLower(), drbranch["branch_pid"].C2Str());
            }
            create_text("3");
            foreach (DataRow drentity in ds.Tables["tbl_employee"].Rows)
            {
                if (!Fn.IsEmpty(drentity["employee_pid"].C2Str()) && !dicEntity.ContainsKey(drentity["employee_pid"].C2Str()))
                    dicEntity.Add(drentity["employee_pid"].C2Str(), drentity["branch_fid"].C2Str());
            }
            create_text("4");
                Worksheet wkload = wb.Worksheets[sheetName.ToLower()];
            CellRange usedRange = wkload.GetDataRange();
            Dictionary<string, string> dicExcelData = new Dictionary<string, string>();
            
            for (int i = usedRange.TopRowIndex + 2; i <= usedRange.BottomRowIndex; i++)
            {
                DataRow dr = dt_et.NewRow();
                dr["company_fid"] = _app.CompanyID;
                dr["entitytransfer_pid"] = Guid.NewGuid();
                dr["createdBy_User_Fid"] = _app.CurrentUserID;
                oldEmpcode = ""; Dot = ""; newEmpcode = ""; NewEntityCode = ""; NewDoj = "";
                _oldEmpcode = ""; _Dot = ""; _newEmpcode = ""; _NewEntityCode = ""; _NewDoj = "";

                oldEmpcode = wkload.Cells[i, 0].Value.C2StrDBSafe();
                Dot = wkload.Cells[i, 1].Value.C2StrDBSafe();
                newEmpcode = wkload.Cells[i, 2].Value.C2StrDBSafe().Trim();
                NewEntityCode = wkload.Cells[i, 3].Value.C2StrDBSafe().Trim();
                NewDoj = wkload.Cells[i, 4].Value.C2StrDBSafe().Trim();

                create_text("2"+" "+i+" 1");

                    if (Fn.IsEmpty(oldEmpcode))
                    {
                        ErrorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("Old Employee Code") + " , \"Error\" : " + C.JsonDataEncode("Invalid Old Employee Code") + " } ,");
                    }
                    else
                    {
                        if (!dicEmployee.ContainsKey(oldEmpcode))
                        {

                            ErrorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("Old Employee Code") + " , \"Error\" : " + C.JsonDataEncode("Employee Not Found In DataBase...") + " } ,");



                        }
                        else
                            _oldEmpcode = dicEmployee[oldEmpcode];

                        dr["oldemployee_fid"] = _oldEmpcode;
                       
                    }

                    create_text("2" + " " + i + " 2");

                    
                
                if (Fn.IsEmpty(Dot))
                {
                    ErrorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("Date Of Transaction") + " , \"Error\" : " + C.JsonDataEncode("Date Of Transactiont is Empty...") + " } ,");
                }
                else
                {
                    dr["dateoftransfer"] = Dot;
                }
                if (Fn.IsEmpty(newEmpcode))
                {
                    ErrorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("New Employee Code") + " , \"Error\" : " + C.JsonDataEncode("New Employee Code is Empty...") + " } ,");
                }
                else if (newEmpcode == oldEmpcode)
                {
                    ErrorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("New Employee Code") + " , \"Error\" : " + C.JsonDataEncode("New Employee Code Should Not be same as Old Employeecode...") + " } ,");
                }
                else
                {
                    dr["newemployeecode"] = newEmpcode;
                }


                create_text("2" + " " + i + " 3");




                if (Fn.IsEmpty(NewEntityCode.ToLower()))
                {
                    ErrorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("New Entity") + " , \"Error\" : " + C.JsonDataEncode("Invalid New Entity Code") + " } ,");
                }
                    
                else
                {
                    create_text("2" + " " + i + " 4");
                    if (!dic_Branch.ContainsKey(NewEntityCode.ToLower()))
                    {

                        ErrorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("New Entity") + " , \"Error\" : " + C.JsonDataEncode("Entity Not Found In DataBase...") + " } ,");
                    }
                    else
                    {
                        _NewEntityCode = dic_Branch[NewEntityCode.ToLower()];
                        if (dicEntity.ContainsKey(_oldEmpcode) && dicEntity[_oldEmpcode].C2Str() == _NewEntityCode)
                        {
                            ErrorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("New Entity") + " , \"Error\" : " + C.JsonDataEncode("New Entity should not be the same...") + " } ,");
                        }
                        else
                        {
                            dr["branch_fid"] = _NewEntityCode; 

                        }
                    }
                }
                if (dicExcelData.ContainsKey(_oldEmpcode))
                {
                    ErrorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i+1) + " , \"Column\" : " + C.JsonDataEncode("Duplicate Old Employeecode") + " , \"Error\" : " + C.JsonDataEncode("Duplicate Record in Excel: "+ oldEmpcode) + " } ,");
                    
                }
                else
                {
                    dicExcelData.Add(_oldEmpcode, NewEntityCode.ToLower());
                }
                if (!dicConfig.ContainsValue(_NewEntityCode))
                {
                    ErrorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("Configuration not found") + " , \"Error\" : " + C.JsonDataEncode("Configuration Not Found For Given Entity: " + NewEntityCode.ToLower()) + " } ,");
                }
               


                if (Fn.IsEmpty(NewDoj))
                {
                    ErrorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("New Date of Joining") + " , \"Error\" : " + C.JsonDataEncode("New Date of Joining is Empty...") + " } ,");
                }
                else
                {
                    dr["newdateofjoining"] = NewDoj;
                }


                create_text("2" + " " + i + " 5");
                if (!Fn.IsEmpty(dr))
                {
                    dt_et.Rows.Add(dr);
                }         
            }
            
 
           
            if (ErrorList.Length > 0)
            {
                args["iserror"] = 1;
                Erp.ExecuteScript("window.importErrors= [" + ErrorList.C2Str().TrimEnd(',') + "]");
                status = false;
                return status;
            }
            if (dt_et.Rows.Count > 0)
            {
                string _err = insertdata(dt_et);
                if (!Fn.IsEmpty(_err))
                {

                    args["iserror"] = 2;

                    args["ErrorList"] = _err;
                    status = false;
                }
            }

            return status;

        }
        public string insertdata(DataTable dt)   //Sp Should be place here
        {
            create_text("3");
            string _err = "";
            using (SqlConnection con_ = new SqlConnection(_cfg.ConnString))
            using (SqlBulkCopy sqlBulkCopy = new SqlBulkCopy(con_))
            {
                create_text("4");
                con_.Open();
                sqlBulkCopy.BatchSize = 0;
                sqlBulkCopy.DestinationTableName = "tbl_tp_entitytransfer";
                try
                {
                    create_text("5");
                    foreach (DataColumn dc in dt.Columns)
                    {
                        //if (dt.Columns.Contains(dc.C2Str()) && (!"branch_fid".Contains(dc.C2Str()) || dc.C2Str() == "oldemployee_fid"))
                            sqlBulkCopy.ColumnMappings.Add(dc.C2Str(), dc.C2Str());
                    }
                    create_text("6");
                    sqlBulkCopy.WriteToServer(dt);
                    sqlBulkCopy.Close();
                }
                catch (Exception e)
                {
                    create_text("7");
                    _err = e.Message;
                }
                con_.Close();
            }
            return _err;
        }
            /*StringBuilder str_insertTPEntityERP = new StringBuilder();
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                DataRow dr_et = dt.Rows[i];

                str_insertTPEntityERP.Append(@"insert into tbl_tp_entitytransfer ([company_fid],[entitytransfer_pid],[dateoftransfer],[oldemployee_fid],[newemployeecode],[branch_fid],[newdateofjoining],[currentstatus]) values (@Users.CompanyID,NewID(),'" + dr_et["Dot"] + @"'," + dr_et["oldEmpcode"] + @",'" + dr_et["newEmpcode"] + @"'," + dr_et["NewEntityCode"] + @",'" + dr_et["NewDoj"] + @"','Draft');");

                if (str_insertTPEntityERP.Length > 1000)
                {
                    string err = "";
                    var resutl = Erp.ExecuteSql<string>(str_insertTPEntityERP.C2Str(),
                                                            new Dictionary<string, object>() {
                                          {
                                            "@ID", 1 }
                                                }
                                                            , out err);
                    _err += err;
                    str_insertTPEntityERP = new StringBuilder();
                    //return null;
                }


            }

            if (!Fn.IsEmpty(str_insertTPEntityERP))
            {
                string err = "";
                var resutl = Erp.ExecuteSql<string>(str_insertTPEntityERP.C2Str(),
                                                        new Dictionary<string, object>() {
                                          {
                                            "@ID", 1 }
                                                }
                                                        , out err);
                _err += err;
                //return null;
            }
            return _err;
        }*/


        public DataSet getMasterData()
        {
            string sql = @"
--[tbl_employee]
select employee_pid,employeecode,branch_fid from tbl_employee where company_fid = @Users.CompanyID
--[tbl_branch]
select branch_pid,branchcode,branchname from tbl_branch where company_fid = @Users.CompanyID
--[tbl_TP_config]
select config_pid,toentity_fid,tovalue from tbl_TP_config where company_fid = @Users.CompanyID
";
            string err = "";
            var ds = Erp.ExecuteSql<DataSet>(sql,
                                                new Dictionary<string, object>() {
                                          {
                                            "@ID", 1 }
                                                }
                                                , out err);



            return ds;
        }

        public void create_text(string log)
        {
            //File.AppendAllText(_app.TempDirectory + "\\entitylog.txt", log.C2Str() + "\r\n-----------------------------------------------------\r\n");
        }
    }
     
}