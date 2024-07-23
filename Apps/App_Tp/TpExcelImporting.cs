using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Data;
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

    public class TpExcelImporting : ImplEntityScript, IEntityScript
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
                CheckExcelData(wb, SheetName,args);
            }


        }

        private Boolean CheckExcelData(Workbook wb, string sheetName, Dictionary<string, object> args)
        {

            bool status = true;

            //createing data table for store data of excel
            DataTable dt_tp = new DataTable();
            dt_tp.Columns.Add("doc");
            dt_tp.Columns.Add("doe");
            dt_tp.Columns.Add("employee_id");
            dt_tp.Columns.Add("toentitycode");
            dt_tp.Columns.Add("toentity_pid");
            dt_tp.Columns.Add("tovalue");
            dt_tp.Columns.Add("fid");

            //fields for excel data validation and memory management 
            string DOC = "", DOE = "", EmployeeCode = "", ToEntityCode = "", ToValueCode = "", EntityDefinationId = "", EntityDefinationcode = "";
            string _DOC = "", _DOE = "", _EmployeeCode = "", _ToEntityCode = "", _ToValueCode = "";
            StringBuilder ErrorList = new StringBuilder();
            Dictionary<int, string> dic_EntityDefination = new Dictionary<int, string>();

            DataSet ds = getMasterData();
            if (Fn.IsEmpty(ds) || ds.Tables.Count <= 0)
                return false;


            // code for entity defination dictionary
            DataTable dt_entityDefination = ds.Tables["tbl_entitydefinition"];
            foreach (DataRow dr in dt_entityDefination.Rows)
            {
                dic_EntityDefination.Add(dr["entitydefinition_pid"].C2Int(), dr["entitydefinitioncode"].C2Str());
            }








            Worksheet wkload = wb.Worksheets[sheetName.ToLower()];
            CellRange usedRange = wkload.GetDataRange();
           
            for (int i = usedRange.TopRowIndex + 2; i <= usedRange.BottomRowIndex; i++)
            {
                DataRow dr = dt_tp.NewRow();
                DOC = ""; DOE = ""; EmployeeCode = ""; ToEntityCode = ""; ToValueCode = "";
                _DOC = ""; _DOE = ""; _EmployeeCode = ""; _ToEntityCode = ""; _ToValueCode = "";
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
                        DataRow drow = ds.Tables["tbl_employee"].SelectSingle("employeecode='" + EmployeeCode+"'");
                        if (drow != null)
                            _EmployeeCode = drow["Employee_pid"].C2Str();
                         if (Fn.IsEmpty(_EmployeeCode))
                            ErrorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("Employee Code") + " , \"Error\" : " + C.JsonDataEncode("Employee  Not Found In DataBase...") + " } ,");
                        else
                            dr["employee_id"] = _EmployeeCode;


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
                        dr["toentity_pid"] = drow["entitydefinition_pid"];
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
                        DataRow drow = null;
                        try
                        {
                             drow = ds.Tables["tbl_" + ToEntityCode.Trim()].SelectSingle(ToEntityCode.Trim() + "code='" + ToValueCode.Trim() + "' or " + ToEntityCode.Trim() + "name='" + ToValueCode.Trim() + "'");

                        }
                        catch (Exception e)
                        {
                            
                        }
                        if (drow != null)
                            _ToValueCode = drow[ToEntityCode.Trim()+ "_pid"].C2Str();
                           // _ToValueCode = drow1[ToEntityCode + "_pid"].C2Str();
                        if (Fn.IsEmpty(_ToValueCode))
                            ErrorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("To Value Code") + " , \"Error\" : " + C.JsonDataEncode("Invalid To Entity Value...") + " } ,");
                        else
                            dr["tovalue"] = _ToValueCode;


                    }


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
                string _err= insertdata(dt_tp);
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
            
            StringBuilder str_insertTPERP = new StringBuilder();
            StringBuilder str_insertTPHRM = new StringBuilder();
            StringBuilder str_updateEmp = new StringBuilder();
            StringBuilder str_updateMonth = new StringBuilder();
            //str_updateEmp.Append("update tbl_employee set ");
            //str_updateMonth.Append("update tbl_monthmaster set ");
            string _err = "";
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                DataRow dr_TP = dt.Rows[i];
                str_insertTPERP.Append(@"insert into tbl_TP_transferpromotion(
[company_fid], [transferpromotion_pid], [toentity], [tovalue], [doc], [doe],  [createdDate], [createdBy_User_Fid], [employee_fid])
values(@Users.CompanyID, NEWID()," + dr_TP["toentity_pid"] + @"," + dr_TP["tovalue"] + @",'" + dr_TP["doc"] + @"','" + dr_TP["doe"] + @"',GETDATE(),@Users.UserID," + dr_TP["employee_id"] + ");");


                str_insertTPHRM.Append(@" insert into tbl_transferpromotion(
                [company_fid],[employee_fid], [transferpromotiontype_fid], [fromentity_fid], [toentity_fid], [dateoftransferpromotion], [dateofeffectoftransferpromotion])
values(@Users.CompanyID," + dr_TP["employee_id"] + ",(select top 1 transferpromotiontype_pid from tbl_transferpromotiontype where entitydefinition_fid=" + dr_TP["toentity_pid"] + @"),
ISNULL((select top 1 " + dr_TP["toentitycode"] + @"_fid from tbl_employee where employee_pid=" + dr_TP["employee_id"] + @"),'')," + dr_TP["tovalue"] + @",'" + dr_TP["doc"] + @"','" + dr_TP["doe"] + @"');");

                str_updateEmp.Append("update tbl_employee set " + dr_TP["toentitycode"] + "_fid = " + dr_TP["tovalue"] + " where employee_pid=" + dr_TP["employee_id"] + " and company_fid=@Users.CompanyID;");
                //str_updateMonth.Append("update tbl_monthmaster set " + dr_TP["toentitycode"] + "_fid=" + dr_TP["toentity_pid"] + " where employee_fid=" + dr_TP["employee_id"] + " company_fid=@Users.CompanyID and monthenddate >= '" + dr_TP["doe"] + "' and monthstartdate <= '" + dr_TP["doe"] + "'; ");
                //str_updateMonth.Append("update tbl_monthmaster set " + dr_TP["toentitycode"] + "_fid=" + dr_TP["toentity_pid"] + " where employee_fid=" + dr_TP["employee_id"] + " and company_fid=@Users.CompanyID and month_fid in(select month_pid from tbl_month where  monthenddate >= '" + dr_TP["doe"] + "' and monthstartdate <= '" + dr_TP["doe"] + "');");
                str_updateMonth.Append("update tbl_monthmaster set " + dr_TP["toentitycode"] + "_fid=" + dr_TP["tovalue"] + " where employee_fid=" + dr_TP["employee_id"] + " and company_fid=@Users.CompanyID and month_fid in(select month_pid from tbl_month where  monthenddate >= '" + dr_TP["doe"] + "' and monthstartdate <= '" + dr_TP["doe"] + "');");

                if ((str_insertTPERP.C2Str() + str_insertTPHRM.C2Str() + str_updateEmp.C2Str() + str_updateMonth.C2Str()).Length > 1000)
                
                {

                    string err = "";
                    var resutl = Erp.ExecuteSql<string>(str_insertTPERP.C2Str() + str_insertTPHRM.C2Str() + str_updateEmp.C2Str() + str_updateMonth,
                                                        new Dictionary<string, object>() {
                                          {
                                            "@ID", 1 }
                                                }
                                                        , out err);

                    _err += err;
                    str_insertTPERP = str_insertTPHRM = str_updateEmp = str_updateMonth = new StringBuilder();
                    
                }
            
            }
            
            
            
            if (!Fn.IsEmpty(str_insertTPERP) || !Fn.IsEmpty(str_insertTPHRM) || !Fn.IsEmpty(str_updateEmp) || !Fn.IsEmpty(str_updateMonth))
            {
                string err = "";
                var resutl = Erp.ExecuteSql<string>(str_insertTPERP.C2Str() + str_insertTPHRM.C2Str() + str_updateEmp.C2Str() + str_updateMonth,
                                                    new Dictionary<string, object>() {
                                          {
                                            "@ID", 1 }
                                                }
                                                    , out err);
                _err += err;
            }
            return _err;
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