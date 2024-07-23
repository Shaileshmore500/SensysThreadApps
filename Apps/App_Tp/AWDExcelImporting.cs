using Erp.Base.ScriptInterface;
using Erp.Common;
using HelperLib.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml;
using DevExpress.Spreadsheet;
using System.IO;
using HelperLib.Extensions;
using System.Data;
using System.Text;
using HelperLib.Conversion;

namespace App_Tp.Apps.App_Tp
{
    public class AWDExcelImporting : ImplEntityScript, IEntityScript
    {
        ApplicationInfo _app; IDBConfiguration _cfg;
        StringBuilder errorList = new StringBuilder();
        StringBuilder sql = new StringBuilder();

        public void Init(ApplicationInfo app, IDBConfiguration cfg)
        {
            _app = app; _cfg = cfg;
            if (Erp.Action == "LOAD")
            {
                //Debugger.Break();
            }
        }



        public void ExecuteCommand(string sender, Dictionary<string, object> args)
        {

            Workbook workbook = new Workbook();
            bool fileloaded;

            string FileName = Erp.GetParam("window", "filename").C2Str().ToLower();
            string FilePath = Erp.GetParam("window", "filepath").C2Str();
            //bool  IgnoreIfExists = Erp.GetParam("window", "IgnoreIfExists").C2Bool();
            string actualFilePath = Path.Combine(_app.TempDirectory, FilePath);
            if (FileName.Contains("xlsx") || FileName.Contains("xlsm"))
                fileloaded = workbook.LoadDocument(actualFilePath, DocumentFormat.Xlsx);
            else if (FileName.Contains("xls"))
                fileloaded = workbook.LoadDocument(actualFilePath, DevExpress.Spreadsheet.DocumentFormat.Xls);
            else
            {
                Erp.ShowMessage("please select Excel File...", "error");
                return;
            }
            if (!fileloaded)
            {
                Erp.ShowMessage("Something Went Wrong When Uploading File! Please Try Again...", "Error");
                return;
            }
            var err= readExcel(workbook);
            args["err"] = err;
            //args["errorList"] = errorList.;
            Erp.ExecuteScript("window.importErrors= [" + errorList.C2Str().TrimEnd(',') + "]");

        }

        public string readExcel(Workbook workbook)
        {
            DataSet ds = getMasterData();
            var doa = Erp.GetFieldValue("dateofatt");
            var err = "";
            if (ds == null || ds.Tables.Count <= 0 || ds.Tables["tbl_employee"].Rows.Count <= 0 || ds.Tables["tbl_attendancetype"].Rows.Count <= 0)
                return null;

            DataTable dt_employee = ds.Tables["tbl_employee"];
            DataTable dt_attendancetype = ds.Tables["tbl_attendancetype"];
            DataTable dt_attdatewise = ds.Tables["tbl_AWD_attdatewise"];


            DataTable dt_Data = new DataTable();
            dt_Data.Columns.Add("employee_fid");
            dt_Data.Columns.Add("latemark");
            dt_Data.Columns.Add("attendancetype_pid");
            dt_Data.Columns.Add("newintime");
            dt_Data.Columns.Add("newouttime");
            dt_Data.Columns.Add("islop");

            //creating dictionary for employee
            Dictionary<string, string> dic_employee = new Dictionary<string, string>();
            for (var i = 0; i < dt_employee.Rows.Count; i++)
            {
                if (!dic_employee.ContainsKey(dt_employee.Rows[i]["employeecode"].C2StrDBSafe()))
                    dic_employee.Add(dt_employee.Rows[i]["employeecode"].C2StrDBSafe(), dt_employee.Rows[i]["employee_pid"].C2StrDBSafe());
            }
            //creating dictionary for attendence
            Dictionary<string, string> dic_attendence = new Dictionary<string, string>();
            
            foreach(DataRow dr in dt_attdatewise.Rows)
            {
                if (!dic_attendence.ContainsKey(dr["employeecode"].C2StrDBSafe()))
                    dic_attendence.Add(dr["employeecode"].C2StrDBSafe(), dr["attdatewise_pid"].C2StrDBSafe());

            }




            //load workshhet 
            Worksheet worksheet = workbook.Worksheets[0];
            //cheking used cells in loaded worksheet 
            CellRange usedRange = worksheet.GetDataRange();
            for (var i = usedRange.TopRowIndex + 2; i <= usedRange.BottomRowIndex; i++)
            {
                DataRow dr = dt_Data.NewRow();
                try
                {
                    var employeeID = "";
                    var attendenceType = "";

                    bool islop = worksheet.Cells[i, 5].Value.C2Bool();
                    var latemark = "";
                    
                    try
                    {


                        if (Fn.IsEmpty(worksheet.Cells[i, 0].Value.C2StrDBSafe()))
                            errorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("Employee Code") + " , \"Error\" : " + C.JsonDataEncode("Null Data Found In Cell...") + " } ,");
                        else if (Fn.IsEmpty(dic_employee[worksheet.Cells[i, 0].Value.C2StrDBSafe()]))
                            errorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("Employee Code") + " , \"Error\" : " + C.JsonDataEncode("Employee Not Found...") + " } ,");
                        else
                            employeeID = dic_employee[worksheet.Cells[i, 0].Value.C2StrDBSafe()];
                    }
                    catch (Exception e)
                    {
                        errorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("Employee Code") + " , \"Error\" : " + C.JsonDataEncode("Employee Not Found...") + " } ,");
                    }

                    string _attendenceType = worksheet.Cells[i, 1].Value.C2StrDBSafe();
                    attendenceType = dt_attendancetype.SelectSingle("attendancetypecode='" + _attendenceType + "'")["attendancetype_pid"].C2Str();
                    if (Fn.IsEmpty(_attendenceType))
                    {
                        errorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("Attendence Type") + " , \"Error\" : " + C.JsonDataEncode("Null Data Found In Cell..") + " } ,");
                    }
                    else if (Fn.IsEmpty(attendenceType))
                        errorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("Attendence Type") + " , \"Error\" : " + C.JsonDataEncode("Attendence Type Not Found...") + " } ,");

                    if (dic_attendence == null || !dic_attendence.ContainsKey(worksheet.Cells[i, 0].Value.C2Str()))
                    {
                        errorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("Employee Code") + " , \"Error\" : " + C.JsonDataEncode("Employee Not Fetched For This Date...") + " } ,");
                        continue;
                    }


                    var _intime = worksheet.Cells[i, 2].Value.C2StrDBSafe();
                    var _outtime = worksheet.Cells[i, 3].Value.C2StrDBSafe();
                    TimeSpan inTime = DateTime.Parse(_intime).TimeOfDay;
                    TimeSpan outTime = DateTime.Parse(_outtime).TimeOfDay;



                    if (Fn.IsEmpty(_intime))
                        errorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("InTime") + " , \"Error\" : " + C.JsonDataEncode("Null Data Found In Cell..") + " } ,");

                    if (Fn.IsEmpty(_outtime))
                        errorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("OutTime") + " , \"Error\" : " + C.JsonDataEncode("Null Data Found In Cell..") + " } ,");


                    latemark = worksheet.Cells[i, 4].Value.C2Str();


                    dr["employee_fid"] = employeeID;
                    dr["latemark"] = latemark;
                    dr["attendancetype_pid"] = attendenceType;
                    dr["newintime"] = doa + " " + inTime;
                    dr["newouttime"] = doa + " " + outTime;
                    dr["islop"] = islop;

                    dt_Data.Rows.Add(dr);
                }
                catch (Exception e)
                {
                    errorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("OutTime") + " , \"Error\" : " + C.JsonDataEncode(e.Message) + " } ,");
                }

            }


            if (Fn.IsEmpty(errorList))
            {
                for (var i = 0; i < dt_Data.Rows.Count; i++)
                {
                    sql.Append(@"
update tbl_AWD_attdatewise
set attendancetype = '" + dt_Data.Rows[i]["attendancetype_pid"] + "', newintime = '" + dt_Data.Rows[i]["newintime"] + "', newouttime = " +
"'" + dt_Data.Rows[i]["newouttime"] + "', latemarks = '" + dt_Data.Rows[i]["latemark"] + "', islop = '" + dt_Data.Rows[i]["islop"] + @"'
where employee_fid = '" + dt_Data.Rows[i]["employee_fid"] + "' and doa = @dao; ");

                    if (i % 1000 == 0)
                    {
                        var result = Erp.ExecuteSql<string>(sql.C2Str(),
                                                     new Dictionary<string, object>() {
                                            {
                                              "@dao", Erp.GetFieldValue("dateofatt") }
                                                     }
                                                     , out err);
                        if (!Fn.IsEmpty(err))
                        {
                            return err;
                        }

                    }

                }

                if (!Fn.IsEmpty(sql))
                {
                    
                    var result = Erp.ExecuteSql<string>(sql.C2Str(),
                                                         new Dictionary<string, object>() {
                                            {
                                              "@dao", Erp.GetFieldValue("dateofatt") }
                                                         }
                                                         , out err);

                }



            }
            return err;


        }
        public DataSet getMasterData()
        {
            string sql = @"
--[tbl_employee]
select employee_pid,employeecode from tbl_employee where company_fid=@companyID
--[tbl_attendancetype]
select * from tbl_attendancetype where company_fid=@companyID;
--[tbl_AWD_attdatewise]
select employeecode,attdatewise_pid from tbl_AWD_attdatewise
left join tbl_employee on employee_fid=employee_pid where doa=@doa and tbl_AWD_attdatewise.company_fid=@companyID;


";
            string err;
            DataSet ds = Erp.ExecuteSql<DataSet>(sql,
                                                    new Dictionary<string, object>() {
                                            {
                                              "@companyID", _app.CompanyID },
                                            {
                                              "@doa", Erp.GetFieldValue("dateofatt") }
                                                    }
                                                    , out err);
            return ds;

        }

    }
}