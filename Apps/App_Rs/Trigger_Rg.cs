﻿using Erp.Base.ScriptInterface;
using Erp.Common;
using Erp.Base;
using HelperLib.DAL;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Data;
using System.IO;
using System.Text.RegularExpressions;
using System.Text;
using HelperLib.Extensions;
using HelperLib.Conversion;
using System.Collections;
using DevExpress.Spreadsheet;
using DevExpress.Docs;
using DevExpress.Utils;
using App_Rs.Apps.App_Rs;
using Erp.Base.Utils;
using System.IO.Compression;



namespace App_Rs.Apps.App_RS
{

    public class TriggerReportGen : ImplEntityScript, IEntityScript
    {
        ApplicationInfo _app; IDBConfiguration _cfg;
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

            if (sender == "TriggerRG")
            {



                var parameters = args.Get("param");
                var mode = Erp.GetProp("mode");
                if (args.Get("mode").C2Str() == "preview")
                    mode = "preview";
                //args.Get("isImmediate").C2Bool();
                object anArray = parameters;
                IEnumerable enumerable = anArray as IEnumerable;
                Dictionary<string, object> dict_param = new Dictionary<string, object>();
                var configID = args.Get("rec_id").C2Str();
                if (enumerable != null)
                {
                    foreach (object element in enumerable)
                    {
                        dict_param.Add(((System.Collections.Generic.KeyValuePair<string, object>)element).Key, ((System.Collections.Generic.KeyValuePair<string, object>)element).Value.C2Str());
                    }
                }
                dict_param.Add("@CompanyID", _app.CompanyID.C2Str());
                dict_param.Add("@UserID", _app.CurrentUserID.C2Str());

                GenerateReport generateReport = new GenerateReport();
                generateReport.isLogFile = Erp.GetFieldValue("chk_islogfile").C2Bool();
                generateReport.Init(_app, _cfg);
                if (mode == "immediateprint" || mode == "preview")
                {
                    var ent = new ErpEntity("tbl_RS_configuration", configID, _cfg);
                    ent.LoadEntity();
                    var fileExtension = ent["filetype"].C2Str();
                    var basePath = Path.Combine(_app.StorageDirectory, "BI", "Reports");
                   
                    Dictionary<string, byte[]> dic_byte = new Dictionary<string, byte[]>();
                    if (mode == "preview")
                        fileExtension = "html";
                    if (fileExtension.ToLower() != "html")
                        dic_byte = generateReport.GenerateReportBytes(args.Get("rec_id").C2Str(), dict_param);
                    if (Fn.IsEmpty(dic_byte) && Fn.IsEmpty(generateReport.ErrorList))
                    {
                        generateReport.ErrorList.Append("  {   \"ConfigurationName\" : " + C.JsonDataEncode("") + " , \"Error\" : " + C.JsonDataEncode("Data Not Found in Stored Procedure For Generate Report....") + " } ");



                        //generateReport.ErrorList.Append("  {   \"ConfigurationName\" : " + C.JsonDataEncode("") + " , \"Error\" : " + C.JsonDataEncode("Data Not Found in Stored Procedure For Generate Report....") + " } ");

                    }
                    else if (fileExtension == "html")
                    {

                        //var htmlText= generateReport.convertToHtml(args.Get("rec_id").C2Str(), dict_param);
                        var dt = generateReport.convertToHtml(args.Get("rec_id").C2Str(), dict_param);

                        args["html"] = dt.ToDictionaryArray();
                        // return;
                    }


                    else if (Fn.IsEmpty(generateReport.ErrorList))
                    {
                        //create file for download
                        var zipFilePath = generateReport.GenerateZipFile(basePath, Fn.IsEmpty(Erp.GetFieldValue("html_reportname")) ? "Report" : Erp.GetFieldValue("html_reportname").C2Str(), dic_byte, false);

                        string downloadpath = Utils.GetDownloadPath(zipFilePath, Path.GetFileName(zipFilePath), Path.GetFileName(zipFilePath).Contains(".zip") ? "application/zip" : "application/vnd.ms-excel", @"Report  is being created. Please wait....");//,true,true);
                        args["dp"] = downloadpath;
                        #region create zip file                         
                        /*                         
                         if (!Directory.Exists(basePath))
                        {
                            Directory.CreateDirectory(basePath);
                        }
                        if (dic_byte.Count == 1)
                        {

                            var fileName = Path.GetFileName(dic_byte.Keys.ElementAt(0).C2Str());
                            var filePath = Path.Combine(basePath, fileName);

                            File.WriteAllBytes(filePath, dic_byte[dic_byte.Keys.ElementAt(0).C2Str()]);
                            string downloadpath = Utils.GetDownloadPath(filePath, fileName, "application/vnd.ms-excel", @"Report  is being created. Please wait....");


                            //application/application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
                            //Erp.ExecuteScript("window.Erp.OpenWindow(downloadpath)");

                            args["dp"] = downloadpath;

                        }
                        else
                        {
                            //ZipFile.CreateFromDirectory(Path.GetDirectoryName(dic.Key), $"{zipPath}\\{Path.GetFileNameWithoutExtension(dic.Key)}.zip");
                            var zipFilePath = Path.Combine(basePath, Fn.IsEmpty(Erp.GetFieldValue("html_reportname")) ? "Report" : Erp.GetFieldValue("html_reportname") + DateTime.Now.ToString("yyyymmddHHmmssms") + ".zip");
                            using (var zipArchive = new ZipArchive(File.Create(zipFilePath), ZipArchiveMode.Create))
                            {
                                foreach (var dic in dic_byte)
                                {
                                    File.WriteAllBytes(Path.Combine(basePath, Path.GetFileName(dic.Key)), dic.Value);
                                    zipArchive.CreateEntryFromFile(basePath + Path.DirectorySeparatorChar + Path.GetFileName(dic.Key), Path.GetFileName(dic.Key));

                                }

                                string downloadpath = Utils.GetDownloadPath(zipFilePath, "Report.zip", "application/zip", @"Report  is being created. Please wait....");
                                //Erp.ExecuteScript("window.Erp.OpenWindow(downloadpath)");

                                args["dp"] = downloadpath;

                            }
                        }*/
                        #endregion
                    }




                    //string downloadpath = Utils.GetDownloadPath(Filepath, projectname + "_" + newid + "_Report.xls", "application/vnd.ms-excel", @"Analyze project summary report  is being created. Please wait....");
                    //args["dp"] = downloadpath;

                }
                else
                {
                    generateReport.generateReport(args.Get("rec_id").C2Str(), dict_param);
                    //generateReport.GenerateReportBytes(tbl_config.Rows[k]["configuration_pid"].C2Str(), dict_param);

                }


                StringBuilder sb = generateReport.ErrorList;




                if (sb != null && sb.Length > 0)
                {
                    Erp.ExecuteScript("window.importErrors= [" + sb.C2Str().TrimEnd(',') + "]");

                }

            }
            else if (sender == "deleteScheduler")
            {
                var sql = @"delete  from tbl_RS_configurationparameterdetail where generatereport_fid=@ID
delete from tbl_RS_generatereport where generatereport_pid=@ID";

                string err = "";
                var result = Erp.ExecuteSql<int>(sql,
                                                            new Dictionary<string, object>() {
                                                          {
                                                            "@ID", args.Get("rpt_id")}
                                                            }
                                                            , out err);



                if (Fn.IsEmpty(err))
                {
                    Erp.Base.Scheduling.TaskItem task = new Erp.Base.Scheduling.TaskItem();
                    task.RemoveTaskItem(args.Get("task_id").C2Str(), _cfg);
                }
                else
                {
                    args["err"] = err;
                }
            }
            else if (sender == "validate")
            {

                //ReportManager rm = new ReportManager();
                //rm.Init(_app, _cfg);
                DataTable dt_validCfg = ValidateCFG(Erp.GetProp("tag").C2Str());
                DataTable dt_validInstance = validateReport();
                args["dt_valid"] = dt_validCfg.ToDictionaryArray();
                args["dt_ValidInstance"] = dt_validInstance.ToDictionaryArray();
            }
            else if (sender == "sheetload")
            {
                try
                {
                    // Below code acquiring name of excel file.

                    var FileName = args.Get("filename").C2Str().ToLower();
                    var FilePath = args.Get("filepath").C2Str();

                    getMappingData(args, getByte(FilePath, FileName), "", Erp.GetFieldValue("html_colnamestartingrownumber").C2Int() - 1, args.Get("spname").C2Str(), true);



                }
                catch (Exception Ex)
                {

                }
            }
            else if (sender == "loadData")
            {
                try
                {



                    GenerateReport generateReport = new GenerateReport();

                    var dssetting = generateReport.GetConfigDT(Erp.RecordID, Erp, _app, _cfg);

                    DataTable tbl_config = new DataTable();
                    if (dssetting != null && dssetting.Tables.Count > 0)
                    {
                        tbl_config = dssetting.Tables["tbl_config"];
                    }


                    Byte[] _Given_excelByte = null;
                    if (tbl_config != null && tbl_config.Rows.Count > 0 && !Fn.IsEmpty(tbl_config.Rows[0]["excelattachment"]) && tbl_config.Rows[0]["iscustometemplate"].C2Bool())
                    {

                        _Given_excelByte = (Byte[])tbl_config.Rows[0]["excelattachment"];


                    }
                    getMappingData(args, _Given_excelByte, tbl_config.Rows[0]["sheetname"].C2Str(), tbl_config.Rows[0]["colnamestartingrownumber"].C2Int() - 1, args.Get("spname").C2Str(), true);
                }
                catch (Exception ex)
                {
                    Erp.ShowMessage(ex.Message, "error");

                }
            }
            else if (sender == "getSheetData")
            {
                var FileName = args.Get("filename").C2Str().ToLower();
                var FilePath = args.Get("filepath").C2Str();
                var sheetname = args.Get("sheetname").C2Str();
                if (!Fn.IsEmpty(FileName) && !Fn.IsEmpty(FilePath))
                {
                    Byte[] excelBytes = getByte(FilePath, FileName);
                    getMappingData(args, excelBytes, sheetname, Erp.GetFieldValue("html_colnamestartingrownumber").C2Int() - 1, args.Get("spname").C2Str(), false);

                }
                else
                {

                    GenerateReport generateReport = new GenerateReport();
                    var dssetting = generateReport.GetConfigDT(Erp.RecordID, Erp, _app, _cfg);
                    DataTable tbl_config = new DataTable();
                    if (dssetting != null && dssetting.Tables.Count > 0)
                    {
                        tbl_config = dssetting.Tables["tbl_config"];
                    }

                    if (tbl_config != null && tbl_config.Rows.Count > 0)
                    {

                        var _Given_excelByte = tbl_config.Rows[0]["excelattachment"];
                        if (!_Given_excelByte.IsBlank())
                        {
                            Byte[] excelBytes = (Byte[])_Given_excelByte;
                            getMappingData(args, excelBytes, sheetname, Erp.GetFieldValue("html_colnamestartingrownumber").C2Int() - 1, args.Get("spname").C2Str(), false);


                        }
                    }
                }



            }
            else if (sender == "GetSPColumn")
            {
                getMappingData(args, null, "", Erp.GetFieldValue("html_colnamestartingrownumber").C2Int() - 1, args.Get("spname").C2Str(), false);

            }
            #region not is used 
            /*
            else if (sender == "Mapping")
            {
                try
                {

                    GenerateReport generateReport = new GenerateReport();
                    var dssetting = generateReport.GetConfigDT(Erp.RecordID, Erp, _app, _cfg);
                    string[] columnNames = { };
                    string[] sp_columnnames = { };
                    DataTable tbl_config = new DataTable();
                    if (dssetting != null && dssetting.Tables.Count > 0)
                    {
                        tbl_config = dssetting.Tables["tbl_config"];
                    }


                    string SpName = Erp.GetFieldValue("html_spname").C2Str();
                    if (tbl_config != null && tbl_config.Rows.Count > 0)
                    {

                        var _Given_excelByte = tbl_config.Rows[0]["excelattachment"];
                        if (!_Given_excelByte.IsBlank())
                        {
                            Byte[] excelBytes = (Byte[])_Given_excelByte;





                            int colnamestartingrownumber = tbl_config.Rows[0]["colnamestartingrownumber"].C2Int() - 1;




                            using (MemoryStream stream = new MemoryStream(excelBytes))
                            using (Workbook workbook = new Workbook())
                            {
                                workbook.LoadDocument(stream);



                                Worksheet worksheet = null;
                                if (Fn.IsEmpty(tbl_config.Rows[0]["sheetname"]))
                                    worksheet = workbook.Worksheets[0];
                                else
                                    worksheet = workbook.Worksheets[tbl_config.Rows[0]["sheetname"].C2Str()];



                                Erp.ShowMessage("1.3", "error");
                                int columnCount = worksheet.Columns.LastUsedIndex + 1;

                                // Create an array to store column names

                                columnNames = new string[columnCount];
                                // Retrieve column names
                                for (int columnIndex = 0; columnIndex < columnCount; columnIndex++)
                                {
                                    Cell cell = worksheet.Cells[colnamestartingrownumber, columnIndex];

                                    if (!Fn.IsEmpty(cell.DisplayText.C2Str()))
                                        columnNames[columnIndex] = cell.DisplayText;
                                }
                            }
                        }
                        else
                        {
                            args["ExcelNotFound"] = true;
                        }

                        string err = "";
                        string sp_param = "";
                        //Fn.IsEmpty(Erp.GetFieldValue("html_spparam").C2Str()) ? "" : ", " + Erp.GetFieldValue("html_spparam").C2Str();
                        DataTable result = Erp.ExecuteSql<DataTable>("exec " + SpName + " " + sp_param,
                                                                      new Dictionary<string, object>() {
                                                          {
                                                            "@ID", 1 }
                                                                      }
                                                                      , out err);
                        if (!Fn.IsEmpty(err) && Fn.Contains(err, "Could not find stored procedure"))
                            args["spnotfound"] = true;
                        else
                        {



                            sp_columnnames = new string[result.Columns.Count];
                            for (int i = 0; i < result.Columns.Count; i++)
                            {
                                sp_columnnames[i] = result.Columns[i].ToString();

                            }
                        }


                    }
                    args["spcol"] = sp_columnnames;
                    args["ExcelCol"] = columnNames;


                }
                catch (Exception ex)
                {
                    Erp.ShowMessage(ex.Message, "error");


                }

            }*/
            #endregion
            else if (sender == "deletemapping")
            {

                string err = "";





                var result = Erp.ExecuteSql<int>("delete from tbl_RS_configurationdetails where configuration_fid=@ID",
                                                              new Dictionary<string, object>() {
                                                          {
                                                            "@ID", Erp.RecordID}
                                                              }
                                                              , out err);
            }
            else if (sender == "downloadReport")
            {
                var ent = new ErpEntity("tbl_RS_generatereport", args.Get("id").C2Str(), _cfg);
                ent.LoadEntity();


                var path = ent["filepath"].C2Str();
                string downloadpath = Utils.GetDownloadPath(path, Path.GetFileName(path), Path.GetFileName(path).Contains(".zip") ? "application/zip" : "application/vnd.ms-excel", @"Report  is being created. Please wait....");//,true,true);
                args["downloadpath"] = downloadpath;
                //ent.LoadEntity("field1,field2");
                //ent.LazyLoadEntity();//Data will be loaded only when first field is accessed.

            }
            else if (sender == "getSpParam")
            {
                string spname = args.Get("spname").C2Str();
                // spname = spname.Replace("[", "").Replace("]", "").Trim();
                string sql = @"SELECT m.definition
FROM sys.sql_modules m
JOIN sys.objects o ON m.object_id = o.object_id
WHERE  o.name ='" + spname + @"'
--(select top 1 spname from tbl_RS_configuration where configuration_pid=@config)";
                string err = "";
                string result = Erp.ExecuteSql<string>(sql,
                                                    new Dictionary<string, object>() {
                                                            {
                                                              "@config",  args.Get("configID")}

            }
                                                                      , out err);


                if (!Fn.IsEmpty(result))
                {
                    string pattern = @"--\[COLINFO:(.*?)\]";
                    //@"--%(.*?)%";  // Regex pattern to match the values inside '--%...%'

                    MatchCollection matches = Regex.Matches(result, pattern);

                    Dictionary<string, string> dicSp_param = new Dictionary<string, string>();
                    DataTable dt = new DataTable();
                    dt.Columns.Add("parametertable_fid");
                    dt.Columns.Add("parametertype");
                    dt.Columns.Add("spparametername");
                    dt.Columns.Add("parameter");
                    dt.Columns.Add("formcode");
                    dt.Columns.Add("parametervalue");
                    dt.Columns.Add("dependenton");
                    try
                    {
                        foreach (Match match in matches)
                        {
                            string paramtext = match.Groups[1].Value;
                            var arr_param = paramtext.Split('$');

                            DataRow dr = dt.NewRow();
                            for (var i = 0; i < arr_param.Length; i++)
                            {
                                var data = arr_param[i].Split(':');
                                if (data[0] == "table")
                                    dr["parametertable_fid"] = data[1].Trim();
                                else if (data[0] == "type")
                                    dr["parametertype"] = data[1].Trim();
                                else if (data[0] == "parameter")
                                {
                                    dr["spparametername"] = data[1].Trim();
                                    if (Fn.IsEmpty(dr["parameter"]))
                                        dr["parameter"] = data[1].Trim();
                                }
                                else if (data[0] == "name")
                                    dr["parameter"] = data[1].Trim();
                                else if (data[0] == "formcode")
                                    dr["formcode"] = data[1].Trim();
                                else if (data[0] == "dependenton")
                                    dr["dependenton"] = data[1].Trim();

                            }




                            //dr["parametertable_fid"] = arr_param[0];
                            //dr["parametertype"] = arr_param[1];
                            //dr["spparametername"] = arr_param[2];
                            //dr["parameter"] = arr_param.Length == 3 ? arr_param[2] : arr_param[3];
                            //dr["parametervalue"] = "abc";
                            //dr["formcode"] = arr_param.Length > 4 ? arr_param[4] : "";
                            if (!Fn.IsEmpty(dr))
                                dt.Rows.Add(dr);
                            //sp_param += "null ,";
                            dicSp_param.Add(dr["spparametername"].C2Str(), null);


                        }
                    }
                    catch (Exception e)
                    {
                        Erp.ShowMessage("Please check paramert details in stored procedure...", "error");
                        return;
                    }
                    dicSp_param.Add("@UserID", null);
                    dicSp_param.Add("@CompanyID", null);
                    MSDataTier dtr = new MSDataTier(_cfg);
                    //DataTable dt_ = Erp.ExecuteSql<DataTable>("exec " + spname + " " + sp_param.TrimEnd(','),
                    //                                                  new Dictionary<string, object>() {
                    //                                      {
                    //                                        "@ID", 1 }
                    //                                                  }
                    //                                                  , out err);


                    if (!Fn.IsEmpty(dtr.ErrorMessage))
                        Erp.ShowMessage(dtr.ErrorMessage, "error");

                    args["spParam"] = dt.ToDictionaryArray();
                }

            }
        }
        public bool OnGridCommand(ref string sql, string htmlId, string command, Dictionary<string, object> args)
        {
            if (htmlId == "html_dropdown_grid")
            {
                sql = sql.Replace("tbl_branch", Fn.ToLowerCase(args.Get("@tablename").C2Str()).Replace(" ", "").Trim(' '));
                sql = sql.Replace("[branch_pid]", Fn.ToLowerCase(args.Get("@tablename").C2Str()).Split('_')[1].Replace(" ", "").Trim(' ') + "_pid");
                sql = sql.Replace("[branchname]", Fn.ToLowerCase(args.Get("@tablename").C2Str()).Split('_')[1].Replace(" ", "").Trim(' ') + "name");
                sql = sql.Replace("and ( tbl_branch.branchname like '%'+N''+'%' )", " ");
            }
            return true;
        }


        public void getMappingData(Dictionary<string, object> args, Byte[] _Given_excelByte, string Sheetname, int colnamestartingrownumber, string SpName, bool sheetload)
        {
            try
            {


                //                string[] columnNames = { };
                DataTable columnNames = new DataTable();
                columnNames.Columns.Add("exportcolumnnames");
                columnNames.Columns.Add("columnnumber");



                string[] sp_columnnames = { };

                if (_Given_excelByte != null)
                {
                    Byte[] excelBytes = _Given_excelByte;

                    using (MemoryStream stream = new MemoryStream(excelBytes))
                    using (Workbook workbook = new Workbook())
                    {
                        workbook.LoadDocument(stream);



                        Worksheet worksheet = null;
                        if (Fn.IsEmpty(Sheetname))
                            worksheet = workbook.Worksheets[0];
                        else
                            worksheet = workbook.Worksheets[Sheetname];

                        //get all sheets present in sheet
                        var sheetnamefromexcel = new List<String>();
                        if (sheetload)
                        {
                            for (var _count = 0; _count < workbook.Worksheets.Count; _count++)
                            {
                                sheetnamefromexcel.Add(workbook.Worksheets[_count].Name.C2Str());
                            }
                        }
                        args["sheetlist"] = sheetnamefromexcel;
                        int columnCount = worksheet.Columns.LastUsedIndex + 1;

                        // Create an array to store column names

                        //columnNames = new string[columnCount];
                        // Retrieve column names
                        for (int columnIndex = 0; columnIndex < columnCount; columnIndex++)
                        {
                            DataRow dr = columnNames.NewRow();
                            Cell cell = worksheet.Cells[colnamestartingrownumber, columnIndex];

                            if (!Fn.IsEmpty(cell.DisplayText.C2Str()))
                            {
                                dr["exportcolumnnames"] = cell.DisplayText;
                                dr["columnnumber"] = columnIndex;
                                columnNames.Rows.Add(dr);
                                //columnNames[columnIndex] = cell.DisplayText;
                            }
                        }
                    }
                }
                else
                {
                    args["ExcelNotFound"] = true;
                }

                string err = "";
                var paramtext = "";
                //string paramtext = Fn.IsEmpty(args.Get("spParam").C2Str()) ? "" : args.Get("spParam").C2Str();


                //reading sp
                string sql = @"SELECT m.definition
FROM sys.sql_modules m
JOIN sys.objects o ON m.object_id = o.object_id
WHERE  o.name ='" + SpName + @"'
--(select top 1 spname from tbl_RS_configuration where configuration_pid=@config)";
                //string err = "";
                string result_ = Erp.ExecuteSql<string>(sql,
                                                    new Dictionary<string, object>() {
                                                            {
                                                              "@config",  args.Get("configID")}

            }
                                                                      , out err);


                if (!Fn.IsEmpty(result_))
                {
                    string pattern = @"--\[COLINFO:(.*?)\]";
                    //@"--%(.*?)%";  // Regex pattern to match the values inside '--%...%'

                    MatchCollection matches = Regex.Matches(result_, pattern);


                    DataTable dt = new DataTable();

                    foreach (Match match in matches)
                    {

                        paramtext += "null ,";


                    }
                }
                paramtext = Fn.IsEmpty(paramtext) ? "null,null" : paramtext + "null,null";

                DataTable result = Erp.ExecuteSql<DataTable>("exec " + SpName + " " + paramtext,


                                                          new Dictionary<string, object>() {
                                                          {
                                                            "@ID", 1 }
                                                          }
                                                          , out err);









                if (!Fn.IsEmpty(err) && Fn.Contains(err, "Could not find stored procedure"))
                    args["spnotfound"] = true;
                else if (!Fn.IsEmpty(err))
                {
                    //Erp.ShowMessage(err, "error");
                    args["errorMessage"] = err;

                }
                else
                {



                    sp_columnnames = new string[result.Columns.Count];
                    for (int i = 0; i < result.Columns.Count; i++)
                    {
                        sp_columnnames[i] = result.Columns[i].ToString();

                    }
                }



                args["spcol"] = sp_columnnames;
                args["ExcelCol"] = columnNames.ToDictionaryArray();


            }
            catch (Exception ex)
            {
                Erp.ShowMessage(ex.Message, "error");


            }





        }
        #region not id used
        //public void getMapping(Dictionary<string, object> args)
        //{
        //    try
        //    {



        //        GenerateReport generateReport = new GenerateReport();
        //        //newRG.Init(_app, _cfg, null, "");
        //        var dssetting = generateReport.GetConfigDT(Erp.RecordID, Erp, _app, _cfg);
        //        string[] columnNames = { };
        //        string[] sp_columnnames = { };
        //        DataTable tbl_config = new DataTable();
        //        if (dssetting != null && dssetting.Tables.Count > 0)
        //        {
        //            tbl_config = dssetting.Tables["tbl_config"];
        //        }


        //        string SpName = Erp.GetFieldValue("html_spname").C2Str();
        //        if (tbl_config != null && tbl_config.Rows.Count > 0)
        //        {

        //            var _Given_excelByte = tbl_config.Rows[0]["excelattachment"];
        //            if (!_Given_excelByte.IsBlank())
        //            {


        //                Byte[] excelBytes = (Byte[])_Given_excelByte;
        //                int colnamestartingrownumber = tbl_config.Rows[0]["colnamestartingrownumber"].C2Int() - 1;




        //                using (MemoryStream stream = new MemoryStream(excelBytes))
        //                using (Workbook workbook = new Workbook())
        //                {
        //                    workbook.LoadDocument(stream);



        //                    Worksheet worksheet = null;
        //                    if (Fn.IsEmpty(tbl_config.Rows[0]["sheetname"]))
        //                        worksheet = workbook.Worksheets[0];
        //                    else
        //                        worksheet = workbook.Worksheets[tbl_config.Rows[0]["sheetname"].C2Str()];

        //                    //get all sheets present in sheet
        //                    var sheetnamefromexcel = new List<String>();
        //                    for (var _count = 0; _count < workbook.Worksheets.Count; _count++)
        //                    {
        //                        sheetnamefromexcel.Add(workbook.Worksheets[_count].Name.C2Str());
        //                    }
        //                    args["sheetlist"] = sheetnamefromexcel;
        //                    int columnCount = worksheet.Columns.LastUsedIndex + 1;

        //                    // Create an array to store column names

        //                    columnNames = new string[columnCount];
        //                    // Retrieve column names
        //                    for (int columnIndex = 0; columnIndex < columnCount; columnIndex++)
        //                    {
        //                        Cell cell = worksheet.Cells[colnamestartingrownumber, columnIndex];

        //                        if (!Fn.IsEmpty(cell.DisplayText.C2Str()))
        //                            columnNames[columnIndex] = cell.DisplayText;
        //                    }
        //                }
        //            }
        //            else
        //            {
        //                args["ExcelNotFound"] = true;
        //            }

        //            string err = "";
        //            string sp_param = "";
        //            //Fn.IsEmpty(Erp.GetFieldValue("html_spparam").C2Str()) ? "" : ", " + Erp.GetFieldValue("html_spparam").C2Str();
        //            DataTable result = Erp.ExecuteSql<DataTable>("exec " + SpName + " " + sp_param,
        //                                                          new Dictionary<string, object>() {
        //                                                  {
        //                                                    "@ID", 1 }
        //                                                          }
        //                                                          , out err);
        //            if (!Fn.IsEmpty(err) && Fn.Contains(err, "Could not find stored procedure"))
        //                args["spnotfound"] = true;
        //            else
        //            {



        //                sp_columnnames = new string[result.Columns.Count];
        //                for (int i = 0; i < result.Columns.Count; i++)
        //                {
        //                    sp_columnnames[i] = result.Columns[i].ToString();

        //                }
        //            }


        //        }
        //        args["spcol"] = sp_columnnames;
        //        args["ExcelCol"] = columnNames;


        //    }
        //    catch (Exception ex)
        //    {
        //        Erp.ShowMessage(ex.Message, "error");


        //    }




        //}
        #endregion
        public Byte[] getByte(string FilePath, string FileName)
        {
            Workbook wb = new Workbook();
            var fileloaded = false;
            var filepath = Path.Combine(_app.TempDirectory, FilePath);
            if (FileName.Contains("xlsx") || FileName.Contains("xlsm"))
                fileloaded = wb.LoadDocument(filepath, DevExpress.Spreadsheet.DocumentFormat.Xlsx);
            else if (FileName.Contains("xls"))
                fileloaded = wb.LoadDocument(filepath, DevExpress.Spreadsheet.DocumentFormat.Xls);
            else
            {
                Erp.ShowMessage("Please Attach Excel");
                return null;
            }

            /*{
                var sheetnamefromexcel = new List<string>();

                for (int i = 0; i < wb.Worksheets.Count(); i++)
                {

                    // sheetnamefromexcel.Add("'"+wb.Worksheets[i].Name.C2Str()+"'");
                    sheetnamefromexcel.Add(wb.Worksheets[i].Name.C2Str());

                }
                args["sheetlist"] = sheetnamefromexcel;
            }
            */
            Byte[] _Given_excelByte = null;
            {
                if (fileloaded)
                {

                    using (MemoryStream ms = new MemoryStream())
                    {
                        wb.SaveDocument(ms, DocumentFormat.Xlsx);
                        _Given_excelByte = ms.ToArray();

                    }

                }





            }

            return _Given_excelByte;
        }
        // this method validate the configuration based on permission 
        public DataTable ValidateCFG(string tag)
        {
            string err = "";
            string validConfigCSV = "";
            DataTable dt_valid = new DataTable();
            //dt_valid.Rows.Add("configurationtext");






            DataSet ds = Erp.ExecuteSql<DataSet>(@"
--[dt_all]
select * from tbl_RS_configuration
left join tbl_RS_spmaster on spmaster_fid=spmaster_pid where tbl_RS_configuration.company_fid=@Users.CompanyID and isnull(ispermissionsp,0)<>1 and allowimmediateprinting=1;
--[dt_sp]
select * from tbl_rs_spmaster where company_fid=@Users.CompanyID;
--[dt_configuration_roll]
select * from tbl_RS_configuration_roles_fid where company_fid=@Users.CompanyID;
--[dt_user_roll]
select * from tbl_sys_users_roleassignment
left join tbl_sys_userrole on  UserRole_Pid=child_key
where parent_key=@Users.UserID;
",
                                      new Dictionary<string, object>() {
                            { "@ID", 1 }
                                      }, out err);
            DataTable dt_all = ds.Tables["dt_all"];
            DataTable dt_sp = ds.Tables["dt_sp"];
            DataTable dt_configuration_roll = ds.Tables["dt_configuration_roll"];
            DataTable dt_user_roll = ds.Tables["dt_user_roll"];
            dt_valid = dt_all.Clone();


            var CSVUserRoll = "";
            if (dt_user_roll != null && dt_user_roll.Rows.Count > 0)
            {
                for (var i = 0; i < dt_user_roll.Rows.Count; i++)
                {
                    //getting user roll
                    CSVUserRoll += "'" + dt_user_roll.Rows[i]["child_key"] + "',";
                    if (dt_user_roll.Rows[i]["userRoleCode"].C2Str() == "SA")
                    {
                        //if user is super admin then show him all configuration
                        return dt_all;
                    }

                }
            }




            //select configuration which has no rollpermission or sppermission
            DataRow[] dr_nopermission = Fn.IsEmpty(tag) ? dt_all.Select("isnull(sppermission,0)=0 and isnull(rolespermission,0)=0") : dt_all.Select("isnull(tag,'')='" + tag + "'");


            foreach (DataRow dr in dr_nopermission)
            {
                DataRow d = dt_valid.NewRow();
                d.ItemArray = dr.ItemArray;


                dt_valid.Rows.Add(d);
                dt_all.Rows.Remove(dr);
            }
            DataRow[] dr_sppermission = dt_all.Select("isnull(sppermission,0)=1");
            foreach (DataRow dr in dr_sppermission)
            {
                var SpName = dt_sp.Select("spmaster_pid='" + dr["permissionsp_fid"] + "'")[0]["spname"];
                var sp_param = dr["spparameter"];
                DataTable result = Erp.ExecuteSql<DataTable>("exec " + SpName,
                                                                  new Dictionary<string, object>()
                                                                  {
                                                          {
                                                            "@ID", 1 }
                                                                  }, out err);
                if (result != null && result.Rows.Count > 0)
                {
                    DataRow d = dt_valid.NewRow();
                    d.ItemArray = dr.ItemArray;
                    dt_valid.Rows.Add(d);
                    dt_all.Rows.Remove(dr);
                }
            }
            //getting CSV USer Roll
            //var CSVUserRoll = "";
            if (dt_user_roll != null && dt_user_roll.Rows.Count > 0)
            {
                //for (var i = 0; i < dt_user_roll.Rows.Count; i++)
                //{
                //    CSVUserRoll += "'" + dt_user_roll.Rows[i]["child_key"] + "',";

                //}
                DataRow[] dr_rollpermission = dt_all.Select("isnull(rolespermission,0)=1");
                foreach (DataRow dr in dr_rollpermission)
                {
                    DataRow[] dr_ = dt_configuration_roll.Select("parent_key='" + dr["configuration_pid"] + "'");
                    foreach (DataRow _dr in dr_)
                    {
                        if (CSVUserRoll.Contains(_dr["child_key"].C2Str()))
                        {
                            DataRow d = dt_valid.NewRow();
                            d.ItemArray = dr.ItemArray;

                            dt_valid.Rows.Add(d);

                        }

                    }
                }
            }

            return dt_valid;
        }
        public DataTable validateReport()
        {
            DataTable dtValid = new DataTable();

            string err;
            DataTable dt = Erp.ExecuteSql<DataTable>(@"
select (case when isnull(status,0)=1 then 'Created' when isnull(status , 0)=2 then 'Error Occured' else 'Processing' end)  as ReportStatus,
* from tbl_RS_generatereport
where createdBy_User_Fid=@Users.UserID and isnull(isfromconfig,0) <> 1",
                                      new Dictionary<string, object>() {
                            { "@ID", 1 }
                                      }, out err);
            if (dt == null || dt.Rows.Count <= 0)
                return null;
            dtValid = dt.Clone();

            //select report which has status is 0(pendding) or 2(Error Occured) 
            DataRow[] dr_valid = dt.Select("isnull(status,0)=0 or isnull(status,0)=2");
            DataRow[] dr_reportcrated = dt.Select("isnull(status,0)=1");

            foreach (DataRow dr in dr_reportcrated)
            {
                var instanceID = dr["generatereport_pid"].C2Str();
                if (!Fn.IsEmpty(instanceID))
                {
                    if (Directory.Exists(Path.Combine(_app.StorageDirectory, "Folder2\\BI", instanceID)))
                    {
                        DataRow d = dtValid.NewRow();
                        d.ItemArray = dr.ItemArray;
                        dtValid.Rows.Add(d);
                    }
                }

            }
            foreach (DataRow dr in dr_valid)
            {
                DataRow d = dtValid.NewRow();
                d.ItemArray = dr.ItemArray;
                dtValid.Rows.Add(d);

            }

            return dtValid;
        }
    }


}







































