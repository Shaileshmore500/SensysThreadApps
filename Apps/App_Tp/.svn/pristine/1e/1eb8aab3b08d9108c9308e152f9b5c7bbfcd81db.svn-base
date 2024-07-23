using DevExpress.Spreadsheet;
using Erp.Base.ScriptInterface;
using Erp.Common;
using HelperLib.Conversion;
using HelperLib.DAL;
using HelperLib.Extensions;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Diagnostics;
using System.IO;
using System.Text;

namespace App_Tp.Apps.App_Tp
{

    public class TPImporting : ImplEntityScript, IEntityScript
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

            bool status = true;

            //createing data table for store data of excel
            DataTable dt_tp = new DataTable();
            dt_tp.Columns.Add("doc");
            dt_tp.Columns.Add("doe");
            dt_tp.Columns.Add("employee_fid");
            dt_tp.Columns.Add("toentitycode");
            //dt_tp.Columns.Add("toentity_pid");
            dt_tp.Columns.Add("toentity");
            dt_tp.Columns.Add("tovalue");
            dt_tp.Columns.Add("fid"); 
            dt_tp.Columns.Add("company_fid");
            dt_tp.Columns.Add("transferpromotion_pid");
            dt_tp.Columns.Add("createdBy_User_Fid");

            //fields for excel data validation and memory management 
            string DOC = "", DOE = "", EmployeeCode = "", ToEntityCode = "", ToValueCode = "", EntityDefinationId = "", EntityDefinationcode = "";
            string _DOC = "", _DOE = "", _EmployeeCode = "", _ToEntityCode = "", _ToValueCode = "", toentity_fid = "";
            StringBuilder ErrorList = new StringBuilder();
            Dictionary<int, string> dic_EntityDefination = new Dictionary<int, string>();
            Dictionary<string, string> dicConfig = new Dictionary<string, string>();
            DataSet ds = getMasterData();
            if (Fn.IsEmpty(ds) || ds.Tables.Count <= 0)
                return false;


            // code for entity defination dictionary
            DataTable dt_entityDefination = ds.Tables["tbl_entitydefinition"];
            foreach (DataRow dr in dt_entityDefination.Rows)
            {
                dic_EntityDefination.Add(dr["entitydefinition_pid"].C2Int(), dr["entitydefinitioncode"].C2Str());
            }

            foreach (DataRow drconfig in ds.Tables["tbl_TP_config"].Rows)
            {
                if(!dicConfig.ContainsKey(drconfig["toentity_fid"].C2Str() + "|" + drconfig["tovalue"].C2Str()))
                dicConfig.Add(drconfig["toentity_fid"].C2Str()+"|"+ drconfig["tovalue"].C2Str(), drconfig["tovalue"].C2Str());
            }






            Worksheet wkload = wb.Worksheets[sheetName.ToLower()];
            CellRange usedRange = wkload.GetDataRange();
            Dictionary<string, string> dicExcelData = new Dictionary<string, string>();
            for (int i = usedRange.TopRowIndex + 2; i <= usedRange.BottomRowIndex; i++)
            {
                DataRow dr = dt_tp.NewRow();
                dr["company_fid"] = _app.CompanyID;
                dr["transferpromotion_pid"] = Guid.NewGuid();
                dr["createdBy_User_Fid"] = _app.CurrentUserID;
                DOC = ""; DOE = ""; EmployeeCode = ""; ToEntityCode = ""; ToValueCode = "";
                _DOC = ""; _DOE = ""; _EmployeeCode = ""; _ToEntityCode = ""; _ToValueCode = ""; toentity_fid = "";
                  DOC = wkload.Cells[i, 0].Value.C2StrDBSafe();
                DOE = wkload.Cells[i, 1].Value.C2StrDBSafe();
                EmployeeCode = wkload.Cells[i, 2].Value.C2StrDBSafe().Trim();
                ToEntityCode = wkload.Cells[i, 3].Value.C2StrDBSafe().Trim();
                ToValueCode = wkload.Cells[i, 4].Value.C2StrDBSafe().Trim();
                try
                {
                    DataTable _dt = ds.Tables["tbl_" + ToEntityCode];
                }
                catch
                {

                    ErrorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("To Entity Code") + " , \"Error\" : " + C.JsonDataEncode("Invalid To Entity Code...") + " } ,");
                    continue;
                }

                if (Fn.IsEmpty(DOC))
                {
                    ErrorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("Date Of Change") + " , \"Error\" : " + C.JsonDataEncode("Date Of Change is Empty...") + " } ,");
                }
                else
                {
                    dr["doc"] = DOC;
                }
                if (Fn.IsEmpty(DOE))
                {
                    ErrorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("Date Of Effect") + " , \"Error\" : " + C.JsonDataEncode("Date Of Effect is Empty...") + " } ,");
                }
                else
                {
                    dr["doe"] = DOE;
                }
                if (Fn.IsEmpty(EmployeeCode))
                {
                    ErrorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("Employee Code") + " , \"Error\" : " + C.JsonDataEncode("Employee Code is Empty...") + " } ,");
                }
                else
                {
                    if (!Fn.IsEmpty(ToEntityCode))
                    {
                        DataRow drow = ds.Tables["tbl_employee"].SelectSingle("employeecode='" + EmployeeCode + "'");
                        if (drow != null)
                            _EmployeeCode = drow["Employee_pid"].C2Str();
                        if (Fn.IsEmpty(_EmployeeCode))
                            ErrorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("Employee Code") + " , \"Error\" : " + C.JsonDataEncode("Employee  Not Found In DataBase...") + " } ,");
                        else
                            dr["employee_fid"] = _EmployeeCode;
                        

                    }

                }
                if (Fn.IsEmpty(ToEntityCode))
                {
                    ErrorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("To Entity Code") + " , \"Error\" : " + C.JsonDataEncode("To Entity Code is Empty...") + " } ,");
                }
                else
                {
                    DataRow drow = ds.Tables["tbl_entitydefinition"].SelectSingle("entitydefinitioncode='" + ToEntityCode + "'");
                    
                    if (drow != null)
                        _ToEntityCode = drow["entitydefinitioncode"].C2Str();
                   
                    if (Fn.IsEmpty(_ToEntityCode))
                    {
                        ErrorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("To Entity Code") + " , \"Error\" : " + C.JsonDataEncode("To Entity Code is Empty...") + " } ,");
                    }
                    else
                    {
                        dr["toentitycode"] = _ToEntityCode;
                        dr["toentity"] = drow["entitydefinition_pid"];
                        toentity_fid = drow["entitydefinition_pid"].C2Str();
                        DataTable dt_fid = ds.Tables["tbl_" + _ToEntityCode];



                    }
                }
                if (Fn.IsEmpty(ToValueCode))
                {
                    ErrorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("To Value Code") + " , \"Error\" : " + C.JsonDataEncode("To Value Code is Empty...") + " } ,");
                }
                else
                {
                    if (!Fn.IsEmpty(ToEntityCode))
                    {
                        //DataRow drow = ds.Tables["tbl_" + ToEntityCode].SelectSingle(ToEntityCode + "code='" + ToValueCode + "'");       
                        DataRow drow = ds.Tables["tbl_" + ToEntityCode.Trim()].SelectSingle(ToEntityCode.Trim() + "code='" + ToValueCode.Trim() + "' or " + ToEntityCode.Trim() + "name='" + ToValueCode.Trim() + "'");

                        if (drow != null)
                            _ToValueCode = drow[ToEntityCode.Trim() + "_pid"].C2Str();
                        // _ToValueCode = drow1[ToEntityCode + "_pid"].C2Str();
                        if (Fn.IsEmpty(_ToValueCode))
                            ErrorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("To Value Code") + " , \"Error\" : " + C.JsonDataEncode("Invalid To Entity Value...") + " } ,");
                        else
                            dr["tovalue"] = _ToValueCode;


                    }
                }

                if (!dicConfig.ContainsKey(toentity_fid + "|" + _ToValueCode))
                {
                
                    ErrorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("Configuration not found") + " , \"Error\" : " + C.JsonDataEncode("Configuration Not Found For Given Entity: " + ToValueCode) + " } ,");
                }
               else if (dicConfig[toentity_fid + "|" + _ToValueCode] != _ToValueCode)
                {
                    ErrorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("Configuration not found") + " , \"Error\" : " + C.JsonDataEncode("Configuration Not Found For Given Entity: " + ToValueCode) + " } ,");
                }

                if (!Fn.IsEmpty(dr))
                {
                    dt_tp.Rows.Add(dr);
                }    
            }


            

            if (ErrorList.Length > 0)
            {
                args["iserror"] = 1;
                Erp.ExecuteScript("window.importErrors= [" + ErrorList.C2Str().TrimEnd(',') + "]");
                status = false;
                return status;
            }
            if (dt_tp.Rows.Count > 0)
            {
                string _err = insertdata(dt_tp);
                if (!Fn.IsEmpty(_err))
                {

                    args["iserror"] = 2;

                    args["ErrorList"] = _err;
                    status = false;
                }
            }

            return status;

        }
        public string insertdata(DataTable dt)
        {
            var error = "";
            using (SqlConnection con_ = new SqlConnection(_cfg.ConnString))
            using (SqlBulkCopy sqlBulkCopy = new SqlBulkCopy(con_))
            {
                con_.Open();
                sqlBulkCopy.BatchSize = 0;
                sqlBulkCopy.DestinationTableName = "tbl_TP_transferpromotion";
                try
                {
                   
                    foreach (DataColumn dc in dt.Columns)
                    {
                        if (dt.Columns.Contains(dc.C2Str()) && (!"toentitycode,fid".Contains(dc.C2Str())|| dc.C2Str() == "toentity"))
                            sqlBulkCopy.ColumnMappings.Add(dc.C2Str(), dc.C2Str());

                    }
                    sqlBulkCopy.WriteToServer(dt);
                    sqlBulkCopy.Close();
                    

                }
                catch (Exception e)
                {
                    error = e.Message;
                }
                con_.Close();
            }
            return error;
        }

        public DataSet getMasterData()
        {
            string sql = @"
--[tbl_employee]
select employee_pid,employeecode from tbl_employee where company_fid = @Users.CompanyID
--[tbl_branch]
select branch_pid,branchcode,branchname from tbl_branch where company_fid = @Users.CompanyID
--[tbl_department]
select department_pid,departmentcode,departmentname from tbl_department where company_fid = @Users.CompanyID
--[tbl_grade]
select grade_pid,gradecode,gradename from tbl_grade where company_fid = @Users.CompanyID
--[tbl_designation]
select designation_pid,designationcode,designationname from tbl_designation where company_fid = @Users.CompanyID
--[tbl_unit]
select unit_pid,unit_code,unitname from tbl_unit where company_fid = @Users.CompanyID
--[tbl_project]
select project_pid,projectcode,projectname from tbl_project where company_fid = @Users.CompanyID
--[tbl_employeecategory]
select employeecategory_pid,employeecategorycode,employeecategoryname from tbl_employeecategory where company_fid = @Users.CompanyID
--[tbl_division]
select division_pid,divisioncode,divisionname from tbl_division where company_fid = @Users.CompanyID
--[tbl_region]
select region_pid,regioncode,regionname from tbl_region where company_fid = @Users.CompanyID
--[tbl_employeeothermaster1]
select employeeothermaster1_pid,employeeothermaster1code,employeeothermaster1name from tbl_employeeothermaster1 where company_fid = @Users.CompanyID
--[tbl_employeeothermaster2]
select employeeothermaster2_pid,employeeothermaster2code,employeeothermaster2name from tbl_employeeothermaster2 where company_fid = @Users.CompanyID
--[tbl_employeeothermaster3]
select employeeothermaster3_pid,employeeothermaster3code,employeeothermaster3name from tbl_employeeothermaster3 where company_fid = @Users.CompanyID
--[tbl_employeeothermaster4]
select employeeothermaster4_pid,employeeothermaster4code,employeeothermaster4name from tbl_employeeothermaster4 where company_fid = @Users.CompanyID
--[tbl_employeeothermaster5]
select employeeothermaster5_pid,employeeothermaster5code,employeeothermaster5name from tbl_employeeothermaster5 where company_fid = @Users.CompanyID
--[tbl_employeeothermaster6]
select employeeothermaster6_pid,employeeothermaster6code,employeeothermaster6name from tbl_employeeothermaster6 where company_fid = @Users.CompanyID
--[tbl_employeeothermaster7]
select employeeothermaster7_pid,employeeothermaster7code,employeeothermaster7name from tbl_employeeothermaster7 where company_fid = @Users.CompanyID
--[tbl_employeeothermaster8]
select employeeothermaster8_pid,employeeothermaster8code,employeeothermaster8name from tbl_employeeothermaster8 where company_fid = @Users.CompanyID
--[tbl_employeeothermaster9]
select employeeothermaster9_pid,employeeothermaster9code,employeeothermaster9name from tbl_employeeothermaster9 where company_fid = @Users.CompanyID
--[tbl_employeeothermaster10]
select employeeothermaster10_pid,employeeothermaster10code,employeeothermaster10name from tbl_employeeothermaster10 where company_fid = @Users.CompanyID
--[tbl_employeeothermaster11]
select employeeothermaster11_pid,employeeothermaster11code,employeeothermaster11name from tbl_employeeothermaster11 where company_fid = @Users.CompanyID
--[tbl_employeeothermaster12]
select employeeothermaster12_pid,employeeothermaster12code,employeeothermaster12name from tbl_employeeothermaster12 where company_fid = @Users.CompanyID
--[tbl_employeeothermaster13]
select employeeothermaster13_pid,employeeothermaster13code,employeeothermaster13name from tbl_employeeothermaster13 where company_fid = @Users.CompanyID
--[tbl_employeeothermaster14]
select employeeothermaster14_pid,employeeothermaster14code,employeeothermaster14name from tbl_employeeothermaster14 where company_fid = @Users.CompanyID
--[tbl_employeeothermaster15]
select employeeothermaster15_pid,employeeothermaster15code,employeeothermaster15name from tbl_employeeothermaster15 where company_fid = @Users.CompanyID
--[tbl_employeeothermaster16]
select employeeothermaster16_pid,employeeothermaster16code,employeeothermaster16name from tbl_employeeothermaster16 where company_fid = @Users.CompanyID
--[tbl_employeeothermaster17]
select employeeothermaster17_pid,employeeothermaster17code,employeeothermaster17name from tbl_employeeothermaster17 where company_fid = @Users.CompanyID
--[tbl_employeeothermaster18]
select employeeothermaster18_pid,employeeothermaster18code,employeeothermaster18name from tbl_employeeothermaster18 where company_fid = @Users.CompanyID
--[tbl_employeeothermaster19]
select employeeothermaster19_pid,employeeothermaster19code,employeeothermaster19name from tbl_employeeothermaster19 where company_fid = @Users.CompanyID
--[tbl_employeeothermaster20]
select employeeothermaster20_pid,employeeothermaster20code,employeeothermaster20name from tbl_employeeothermaster20 where company_fid = @Users.CompanyID
--[tbl_employeeothermaster21]
select employeeothermaster21_pid,employeeothermaster21code,employeeothermaster21name from tbl_employeeothermaster21 where company_fid = @Users.CompanyID
--[tbl_employeeothermaster22]
select employeeothermaster22_pid,employeeothermaster22code,employeeothermaster22name from tbl_employeeothermaster22 where company_fid = @Users.CompanyID
--[tbl_employeeothermaster23]
select employeeothermaster23_pid,employeeothermaster23code,employeeothermaster23name from tbl_employeeothermaster23 where company_fid = @Users.CompanyID
--[tbl_employeeothermaster24]
select employeeothermaster24_pid,employeeothermaster24code,employeeothermaster24name from tbl_employeeothermaster24 where company_fid = @Users.CompanyID
--[tbl_employeeothermaster25]
select employeeothermaster25_pid,employeeothermaster25code,employeeothermaster25name from tbl_employeeothermaster25 where company_fid = @Users.CompanyID
--[tbl_employeeothermaster26]
select employeeothermaster26_pid,employeeothermaster26code,employeeothermaster26name from tbl_employeeothermaster26 where company_fid = @Users.CompanyID
--[tbl_employeeothermaster27]
select employeeothermaster27_pid,employeeothermaster27code,employeeothermaster27name from tbl_employeeothermaster27 where company_fid = @Users.CompanyID
--[tbl_entitydefinition]
select entitydefinition_pid,entitydefinitioncode,entitydefinitionname from tbl_entitydefinition where company_fid = @Users.CompanyID
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
    }
}