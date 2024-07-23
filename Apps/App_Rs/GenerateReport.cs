﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using Erp.Base.ScriptInterface;
using Erp.Common;
using HelperLib.DAL;
using System.Data;
using HelperLib.Extensions;
using System.Text.RegularExpressions;
using System.Text;
using HelperLib.Conversion;
using System.IO.Compression;
using DevExpress.XtraRichEdit;
using DevExpress.XtraRichEdit.API.Native;
using System.Web.UI.WebControls;
using System.Web.UI;
using System.Xml;

//Author:Pravin.Rajput, Shailesh.More
//Verifier:Pravin.Rajput
//Date:05/09/2023
//Remarks:  
namespace App_Rs.Apps.App_Rs
{
    public class GenerateReport : ImplEntityScript, IEntityScript
    {
        ApplicationInfo _app;
        IDBConfiguration _cfg;
        public StringBuilder ErrorList;
        public string filePath = "";
        public bool isLogFile;
        public string configName = "";

        public string configInstanceID;
        Erp.Base.ScriptInterface.ErpScriptObject _erp;
        public void Init(ApplicationInfo app, IDBConfiguration cfg)
        {
            _app = app;
            _cfg = cfg;
            _erp = new Erp.Base.ScriptInterface.ErpScriptObject(_app, _cfg);
        }

        //Comment:
        public void RunReport(string instanceID)
        {
            configInstanceID = instanceID;
            ErrorList = new StringBuilder();
            string error = "";
            Dictionary<string, object> dicParams = new Dictionary<string, object>();
            DataSet ds = _erp.ExecuteSql<DataSet>(@"
--[dt_configurationparameterdetail]
select spparametername,parametervalue from tbl_RS_configurationparameterdetail where generatereport_fid = @instanceID;
--[dt_generatereport]
select configuration_fid from tbl_RS_generatereport where 	generatereport_pid=@instanceID;
"
                                                  ,
                                                  new Dictionary<string, object>() {
                                              {
                                                "@CompanyID", _app.CompanyID }
                                              ,
                                              {
                                                "@instanceID" ,instanceID}
                                                  }
                                                  , out error);
            DataTable dt_details = ds.Tables["dt_configurationparameterdetail"];
            if (ds.Tables["dt_generatereport"].Rows.Count <= 0)
            {
                ErrorList.Append("  {   \"ConfigurationName\" : " + C.JsonDataEncode("") + " , \"Error\" : " + C.JsonDataEncode("Configuration Not found...") + " } ");

                return;
            }
            if (dt_details.Rows.Count > 0)
            {
                for (var i = 0;
                     i < dt_details.Rows.Count;
                     i++)
                {
                    dicParams.Add(dt_details.Rows[i]["spparametername"].C2Str(), dt_details.Rows[i]["parametervalue"]);
                }



            }
            dicParams.Add("@CompanyID", _app.CompanyID.C2Str());
            dicParams.Add("@UserID", _app.CurrentUserID.C2Str());

            generateReport(ds.Tables["dt_generatereport"].Rows[0]["configuration_fid"].C2Str(), dicParams);
        }
        public void generateReport(string configid, Dictionary<string, object> dicParams)
        {
            if (ErrorList == null)
                ErrorList = new StringBuilder();
            Dictionary<string, byte[]> dic_result = GenerateReportBytes(configid, dicParams);
            if ((Fn.IsEmpty(dic_result) || dic_result.Count <= 0) || !Fn.IsEmpty(ErrorList))
            {
                if (Fn.IsEmpty(ErrorList))
                    ErrorList.Append("  {   \"ConfigurationName\" : " + C.JsonDataEncode("") + " , \"Error\" : " + C.JsonDataEncode("Data Not Found For Generate Report....") + " } ");
                return;
            }
            //Load Configuration Data 
            var ent = new ErpEntity("tbl_RS_configuration", configid, _cfg);
            ent.LoadEntity();
            var isSaveDisk = ent["savelocationdisk"].C2Bool();
             configName = ent["configurationtext"].C2Str();
            var isSaveDB = ent["savelocation_db"].C2Bool();
            var isSaveEmail = ent["savelocation_email"].C2Bool();
            var iszip = ent["iszipfile"].C2Bool();
            var folderstructure = Fn.IsEmpty(ent["folderstructure"].C2Str()) ? "" : Path.GetDirectoryName(Path.GetDirectoryName(ent["folderstructure"].C2Str()));
            var emailconfig = ent["emailconfig_fid"];
            var emailids = ent["emailids"];
            var fileExtension = ent["filetype"].C2Str();
            var emailattachments = "";
            var zipFilePath = "";
            var isFromConfig = true;
            var zipFileName = "";
            var reportName = "";



            if (fileExtension == "html")
            {
                //RichEditDocumentServer server = new RichEditDocumentServer();


                //MemoryStream ms = new MemoryStream((byte[])dic_result.Values.First());
                //ms.Position = 0;
                //server.LoadDocument(ms, DocumentFormat.Doc);
                //MemoryStream memoryStream = new MemoryStream();
                //server.Options.Export.Html.EmbedImages = true;
                //server.SaveDocument(memoryStream, DocumentFormat.Html);
                //string html = System.Text.Encoding.UTF8.GetString(memoryStream.ToArray());

                return;
            }





            if (!Fn.IsEmpty(configInstanceID))
            {
                var entInstance = new ErpEntity("tbl_RS_generatereport", configInstanceID, _cfg);
                entInstance.LoadEntity();
                isFromConfig = entInstance["isfromconfig"].C2Bool();
                reportName = entInstance["reportname"].C2Str();

            }

            //set zip file path
            if (isFromConfig && !Fn.IsEmpty(configInstanceID))
                zipFilePath = Fn.IsEmpty(ent["zipfilepath"].C2Str()) ? $"{_app.StorageDirectory}\\BI" : ent["zipfilepath"].C2Str();
            else if (!isFromConfig && !Fn.IsEmpty(configInstanceID))
                zipFilePath = $"{_app.StorageDirectory}\\Folder2\\BI\\{configInstanceID}";
            else
                zipFilePath = Fn.IsEmpty(ent["zipfilepath"].C2Str()) ? $"{_app.StorageDirectory}\\BI" : ent["zipfilepath"].C2Str();

           




            zipFileName = Fn.IsEmpty(ent["zipfilename"].C2Str()) ? configName : ent["zipfilename"].C2Str();
            if (zipFileName.Contains("[@datetime]"))
                zipFileName.Replace("[@datetime]", DateTime.Now.ToString("yyyymmdd HHmmsstt"));

            var isDeleteOriginalFile = ent["isdeleteoriginalfile"].C2Bool();
            try
            {
                if (!Directory.Exists(zipFilePath))
                    Directory.CreateDirectory(zipFilePath);

                //var zipArchive = new ZipArchive(File.Create($"{ zipFilePath }\\{Path.GetFileNameWithoutExtension(zipFileName)}.zip"), ZipArchiveMode.Create);

                if (isSaveEmail || iszip || !isFromConfig || isSaveDB)
                {
                    filePath = GenerateZipFile(zipFilePath, Fn.IsEmpty(reportName) ? zipFileName : reportName, dic_result, iszip);

                }



                foreach (KeyValuePair<string, byte[]> dic in dic_result)
                {
                    byte[] excelBytes = dic.Value;
                    var filepath = dic.Key;
                    if (isSaveDisk || isSaveEmail)
                    {
                        if (!Directory.Exists(Path.GetDirectoryName(dic.Key)))
                        {
                            Directory.CreateDirectory(Path.GetDirectoryName(dic.Key));
                        }

                        File.WriteAllBytes(dic.Key, excelBytes);

                    }

                    if (isDeleteOriginalFile || !isSaveDisk)
                    {
                        if (File.Exists(dic.Key))
                            File.Delete(dic.Key);
                    }




                }
                if (isSaveDB)
                {
                    var entity = new ErpEntity("tbl_RS_reportdata", "", _cfg);
                    entity["reportdata"] = File.ReadAllBytes(filePath);
                    entity["triggereddate"] = Fn.Today();
                    entity["reportdata_preview"] = Path.GetFileName(filePath);
                    if (!Fn.IsEmpty(configInstanceID))
                        entity["generatereport_fid"] = configInstanceID;
                    entity.CreatedBy = _app.CurrentUserID;
                    entity.CompanyID = _app.CompanyID;
                    entity.MetaData = _app.GetMetaData(_cfg, "tbl_RS_reportdata");
                    bool success = entity.Save();
                }


                if (isSaveEmail && !Fn.IsEmpty(emailattachments))
                {
                    //emailconfig = "ea3dd541-ee62-4f11-a878-cb692c7aac20";
                    //emailids = "shmore500@gmail.com,sensys.mayurdalvi@gmail.com";

                    var status = _erp.SendMail(new Dictionary<string, object>() {
                                              {"UserID",_app.CurrentUserID},
                                              {"RecordID","rec1,rec2"},
                                              {"EmailConfigID",emailconfig},
                                              {"TemplateID","055b8da1-8de1-4ee3-8871-4959a9f69739"},
                                              {"EmailBody","This is Generated report"},
                                              {"EmailTo",emailids},
                                              {"EmailCc",""},
                                              {"EmailBcc",""},
                                             { "DoNotDeleteAttachment",true},
                                                //{"Attachments", $"{ zipFilePath }\\{Path.GetFileNameWithoutExtension(zipFileName)}.zip" }
                                                {"Attachments", $"{ filePath }\\{Path.GetFileNameWithoutExtension(zipFileName)}.zip" }
                        ,

                            //zipFilePath+"\\"+ Path.GetFileNameWithoutExtension(zipFileName)+".zip" },
                                              {"ForceSend",true}});
                    //emailconfigid:"ea3dd541-ee62-4f11-a878-cb692c7aac20"

                }
            }
            catch (Exception e)
            {
                ErrorList.Append("  {   \"ConfigurationName\" : " + C.JsonDataEncode(configName) + " , \"Error\" : " + C.JsonDataEncode(e.Message) + " } ");
            }
        }

        // this method return  dictionary of byte array and file path
        public Dictionary<string, byte[]> GenerateReportBytes(string ConfigurationID, Dictionary<string, object> dicParams)
        {
            try
            {
                if (ErrorList == null)
                    ErrorList = new StringBuilder();
                System.Diagnostics.Stopwatch sw = new System.Diagnostics.Stopwatch();
                sw.Start();
                StringBuilder log = new StringBuilder();
                ExportFileHelper exportFileHelper = new ExportFileHelper();
                Dictionary<string, byte[]> dic_ByteData = new Dictionary<string, byte[]>();
                //Workbook workbook;
                //MemoryStream stream;
                Dictionary<string, byte[]> dic_ReportData = new Dictionary<string, byte[]>();
               
                var dssetting = GetConfigDT(ConfigurationID, _erp, _app, _cfg);
                //addToLog("2: Collected Coinfig Data" + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                if (dssetting == null || dssetting.Tables["tbl_config"].Rows.Count == 0)
                {
                    ErrorList.Append("  {   \"ConfigurationName\" : " + C.JsonDataEncode("") + " , \"Error\" : " + C.JsonDataEncode("ConFiguration Not Found...") + " } ");
                    return null;
                }
                var tbl_config = dssetting.Tables["tbl_config"];
                var tbl_configdetails = dssetting.Tables["tbl_configdetails"];
                string spname = tbl_config.Rows[0]["rsspname"].C2Str();
                string outputPath = tbl_config.Rows[0]["folderstructure"].C2Str();
                int dataStratingpos = tbl_config.Rows[0]["datastartingposition"].C2Int();
                var _given_excelByte = tbl_config.Rows[0]["excelattachment"];
                string templateName = tbl_config.Rows[0]["templatename"].C2Str();
                 configName = tbl_config.Rows[0]["configurationtext"].C2Str();
                addToLog("1: New Log Creation Started..." + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                string sheetname = tbl_config.Rows[0]["sheetname"].C2Str();
                string prerequisitespname = tbl_config.Rows[0]["prerequisitespname"].C2Str();
                bool enablecopyinsertrow = tbl_config.Rows[0]["enablecopyinsertrow"].C2Bool();
                bool isCustomeTemplate = tbl_config.Rows[0]["iscustometemplate"].C2Bool();
                string fileExtension = C.DefaultValue(tbl_config.Rows[0]["filetype"].C2Str(), "xls");
                bool isencryptedfile = tbl_config.Rows[0]["isencryptedfile"].C2Bool();
                string password = tbl_config.Rows[0]["filepassword"].C2Str();
                string delimeter = Fn.IsEmpty(tbl_config.Rows[0]["csvdelimeter"].C2Str()) ? "," : tbl_config.Rows[0]["csvdelimeter"].C2Str();
                bool issupresscolumnname = tbl_config.Rows[0]["issupresscolumnname"].C2Bool();
                string filePath = "";
                var actualFilePath = "";
                var dtr = new HelperLib.DAL.MSDataTier(_cfg);

                //if (!Fn.IsEmpty(prerequisitespname))
                //{
                //    //DataTable dt_prerequestedsp = dtr.GetDataTable(prerequisitespname, dicParams);
                //    DataTable dt_prerequestedsp = dtr.GetDataTable(prerequisitespname, null);
                //    if (!Fn.IsEmpty(dtr.ErrorMessage))
                //    {
                //        ErrorList.Append("  {   \"ConfigurationName\" : " + C.JsonDataEncode(configName) + " , \"Error\" : " + C.JsonDataEncode(dtr.ErrorMessage) + " } ");
                //        return null;
                //    }
                //    //else if (dt_prerequestedsp.Rows.Count <= 0)
                //    //{
                //    //    ErrorList.Append("  {   \"ConfigurationName\" : " + C.JsonDataEncode(configName) + " , \"Error\" : " + C.JsonDataEncode("You can not generate report due to security level") + " } ");
                //    //    return null;

                //    //}
                //}
                if (Fn.IsEmpty(outputPath))
                    outputPath = _app.StorageDirectory + "\\Reports";

                if (templateName.Contains("."))
                    filePath = outputPath + "\\" + templateName;
                else
                    filePath = outputPath + "\\" + templateName + "." + fileExtension;
                addToLog("3: String Path Creation done" + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                //FilePath = "E:\\pravin\\ThreadApp\\ThreadApp\\Store\\Reports\\temp_[@@departmentname].xls";

                MatchCollection matches = Regex.Matches(filePath, @"\[(.*?)\]");
                DataTable combinationdt = new DataTable();
                string err = "";
                addToLog("4: Start Collecting Data By Given SP ..." + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                DataTable maindt = dtr.GetDataTable(spname, dicParams);
                addToLog("5: Data Collected By Sp..." + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                if (maindt == null || maindt.Rows.Count == 0)
                {
                    if (!Fn.IsEmpty(dtr.ErrorMessage))
                        ErrorList.Append("  {   \"ConfigurationName\" : " + C.JsonDataEncode(configName) + " , \"Error\" : " + C.JsonDataEncode(dtr.ErrorMessage) + " } ");
                    else
                        ErrorList.Append("  {   \"ConfigurationName\" : " + C.JsonDataEncode(configName) + " , \"Error\" : " + C.JsonDataEncode("Data Not Found in Stored Procedure For Generate Report....") + " } ");
                    return null;
                }
                HashSet<String> set_sortVariable = new HashSet<string>();
                string sortorder = "";
                if (matches.Count > 0)
                {

                    for (var i = 0; i < matches.Count; i++)
                    {
                        var colName = matches[i].Value.C2Str().Replace("[", "").Replace("]", "");
                        //.Replace("@", "");
                        if (colName.Contains("@@"))
                        {
                            set_sortVariable.Add(matches[i].Value.C2Str().Replace("[@@", "").Replace("]", ""));

                            if (!Fn.Contains(sortorder, matches[i].Value.C2Str().Replace("[@@", "").Replace("]", "") + " asc ,"))
                                sortorder += matches[i].Value.C2Str().Replace("[@@", "").Replace("]", "") + " asc ,";
                        }
                        else if (colName.Contains("@"))
                        {
                            if (matches[i].Value.C2Str().Contains("@datetime"))
                            {
                                //  string currentTimestamp = DateTime.Now.ToString("yyyyMMddhhmmssms");
                                //filePath = filePath.Replace(matches[i].Value.C2Str(), DateTime.Now.ToString("yyyyMMddhhmmssms") + "" + i);

                            }
                            else if (maindt.Columns.Contains(colName.Replace("@", "")))
                                filePath = filePath.Replace(matches[i].Value.C2Str(), maindt.Rows[0][colName.Replace("@", "")].C2Str());
                            else if (dicParams.ContainsKey("@" + colName.Replace("@", "")))
                                filePath = filePath.Replace(matches[i].Value.C2Str(), dicParams[matches[i].Value.C2Str().Replace("[", "").Replace("]", "")].C2Str());
                            else
                                filePath = filePath.Replace(matches[i].Value.C2Str(), "");
                        }
                    }
                }
                addToLog("6: Replacing @ and @@ Param Values done ..." + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));


                #region Read Excel or Create Excel
                //this code has been shifted in FileHelper File
                //Byte[] excelBytes = null;


                //if user uploade the excel with configuration details
                //if (!Fn.IsEmpty(_given_excelByte) && isCustomeTemplate)
                //{
                //    excelBytes = (Byte[])_given_excelByte;
                //}
                ////if user not uploade the excel but get configuration details
                //else if (tbl_configdetails.Rows.Count > 0)
                //{
                //    try
                //    {
                //        workbook = new Workbook();
                //        Worksheet worksheet = workbook.Worksheets[0];
                //        if (!issupresscolumnname)
                //        {
                //            for (var _i = 0; _i < tbl_configdetails.Rows.Count; _i++)
                //            {
                //                worksheet.Cells[dataStratingpos - 1, tbl_configdetails.Rows[_i]["columnnumber"].C2Int()].Value = tbl_configdetails.Rows[_i]["displayname"].C2Str();
                //            }
                //        }
                //        using (MemoryStream stream2 = new MemoryStream())
                //        {
                //            stream2.Position = 0;
                //            workbook.SaveDocument(stream2, DocumentFormat.Xls);
                //            excelBytes = stream2.ToArray();
                //        }
                //        addToLog("7:" + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                //    }
                //    catch (Exception e)
                //    {
                //        ErrorList.Append("  {   \"ConfigurationName\" : " + C.JsonDataEncode(configName) + " , \"Error\" : " + C.JsonDataEncode(e) + " } ");
                //    }
                //}

                #endregion
                addToLog("8: Preparing Combination dt Statrted..." + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                DataView dataView = maindt.DefaultView;
                bool iscomdt = true;
                if (set_sortVariable.Count > 0)
                {
                    combinationdt = dataView.ToTable(true, set_sortVariable.ToArray());
                    
                }
                else
                {
                    combinationdt.Columns.Add("dum");
                    DataRow dr = combinationdt.NewRow();
                    dr["dum"] = "dummy";
                    combinationdt.Rows.Add();
                    iscomdt = false;
                }
                addToLog("9: Combination dt Prepared...." + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                maindt.DefaultView.Sort = sortorder.TrimEnd(',');
                addToLog("10: DefaultView Prepared...." + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                addToLog("11: Creating Byte[] Dictionary...." + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));

                if (fileExtension == "csv")
                {
                    dic_ByteData = exportFileHelper.getCSVByte(_app, _cfg, filePath, maindt, combinationdt, matches, iscomdt, delimeter, issupresscolumnname, tbl_configdetails, sw, ErrorList,isLogFile, configName);

                }
                else if (fileExtension == "xls" || fileExtension == "xlsx")
                {
                    dic_ByteData = exportFileHelper.getExcelByte(_app, _cfg, filePath, maindt, combinationdt, tbl_configdetails, tbl_config, matches, iscomdt, sw, ErrorList, isLogFile);

                }





                addToLog("16:" + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                sw.Stop();
                //File.WriteAllText(_app.StorageDirectory + "\\log" + DateTime.Now.ToString("yyyy-MM-dd hhmmsstt") + ".txt", log.C2Str());
                return dic_ByteData;
            }
            catch (Exception e)
            {
                addToLog("17: Fail to Create  Byte Dictionary" + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                ErrorList.Append("  {   \"ConfigurationName\" : " + C.JsonDataEncode("") + " , \"Error\" : " + C.JsonDataEncode(e.Message) + " } ");

            }
            addToLog("18: Fail to Create  Byte Dictionary"  + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
            return null;
        }


        public string GenerateZipFile(string FilePath, string ZipFileName, Dictionary<string, byte[]> Dic_byte,bool iszip)
        {
            try
            {

                if (!Directory.Exists(FilePath))
                {
                    Directory.CreateDirectory(FilePath);
                }
                if (Dic_byte.Count == 1 && !iszip)
                {

                    var fileName = Path.GetFileName(Dic_byte.Keys.ElementAt(0).C2Str());
                    var zipFilePath = Path.Combine(FilePath, fileName);

                    File.WriteAllBytes(zipFilePath, Dic_byte[Dic_byte.Keys.ElementAt(0).C2Str()]);


                    return zipFilePath;

                }
                else
                {
                    //ZipFile.CreateFromDirectory(Path.GetDirectoryName(dic.Key), $"{zipPath}\\{Path.GetFileNameWithoutExtension(dic.Key)}.zip");
                    var zipFilePath = Path.Combine(FilePath, Fn.IsEmpty(ZipFileName) ? "Report" : ZipFileName + DateTime.Now.ToString("yyyymmddHHmmssms") + ".zip");
                    using (var zipArchive = new ZipArchive(File.Create(zipFilePath), ZipArchiveMode.Create))
                    {
                        foreach (var dic in Dic_byte)
                        {
                            var path = Path.Combine(FilePath, Path.GetFileName(dic.Key));
                            File.WriteAllBytes(path, dic.Value); ;
                            zipArchive.CreateEntryFromFile(path, Path.GetFileName(dic.Key));
                            File.Delete(path);
                        }



                    }
                    return zipFilePath;
                }

            }
            catch (Exception e)
            {
                ErrorList.Append("  {   \"ConfigurationName\" : " + C.JsonDataEncode("") + " , \"Error\" : " + C.JsonDataEncode(e.Message) + " } ");
            }


            return "";

        }

        public DataTable convertToHtml(string recid, Dictionary<string, object> dicParams)
        {

            if (ErrorList == null)
                ErrorList = new StringBuilder();
            try
            {


                var dtr = new HelperLib.DAL.MSDataTier(_cfg);
                var dssetting = GetConfigDT(recid, _erp, _app, _cfg);
                //addToLog("2: Collected Coinfig Data" + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                if (dssetting == null || dssetting.Tables["tbl_config"].Rows.Count == 0)
                {
                    ErrorList.Append("  {   \"ConfigurationName\" : " + C.JsonDataEncode("") + " , \"Error\" : " + C.JsonDataEncode("ConFiguration Not Found...") + " } ");
                    return null;
                }
                var tbl_config = dssetting.Tables["tbl_config"];
                var tbl_configdetails = dssetting.Tables["tbl_configdetails"];
                if (tbl_configdetails == null || tbl_configdetails.Rows.Count == 0)
                {
                    ErrorList.Append("  {   \"ConfigurationName\" : " + C.JsonDataEncode("") + " , \"Error\" : " + C.JsonDataEncode("Mapping Not Found...") + " } ");
                    return null;
                }

                Dictionary<string, string> dic_colname = new Dictionary<string, string>();
                DataTable dt_data = new DataTable();
                foreach (DataRow dr in tbl_configdetails.Rows)
                {
                    if (dr["isexported"].C2Bool())
                    {
                        dic_colname.Add(dr["spcolumnnames"].C2Str(), dr["displayname"].C2Str());
                        dt_data.Columns.Add(dr["displayname"].C2Str());
                    }
                }




                string spname = tbl_config.Rows[0]["rsspname"].C2Str();
                DataTable maindt = new DataTable();
                maindt = dtr.GetDataTable(spname, dicParams);
                foreach (DataRow dr in maindt.Rows)
                {
                    DataRow Dr = dt_data.NewRow();
                    foreach (var key in dic_colname)
                    {
                        Dr[key.Value] = dr[key.Key];
                    }
                    dt_data.Rows.Add(Dr);

                }






                return dt_data;
                //using data linq
                var rows = from DataRow row in maindt.Rows
                           select row.ItemArray.Select(field => field.ToString());

                var header = maindt.Columns.Cast<DataColumn>().Select(column => column.ColumnName);

                // Generate HTML using string interpolation
                string htmlTable = $"<table><thead><tr>{string.Join("", header.Select(h => $"<th>{h}</th>"))}</tr></thead><tbody>";

                // Append rows to the HTML table
                htmlTable += string.Join("", rows.Select(r => $"<tr>{string.Join("", r.Select(f => $"<td>{f}</td>"))}</tr>"));

                // Close the table tags
                htmlTable += "</tbody></table>";

                //return htmlTable;


                /*
                // using xml
                maindt.TableName = "DataTable";
                StringWriter sw = new StringWriter();            
                maindt.WriteXml(new HtmlTextWriter(sw));

                // Display the HTML table
                string xmlString = sw.ToString();

                XmlDocument xmlDoc = new XmlDocument();
                xmlDoc.LoadXml(xmlString);

                // Create the HTML table
                StringBuilder htmlTable = new StringBuilder();
                htmlTable.Append( "<table border='1'><tr>");

                // Add column headers
                XmlNodeList rows = xmlDoc.SelectNodes("//DataTable");

                // Check if there are any rows
                if (rows.Count > 0)
                {
                    // Start building the HTML table
                    htmlTable.Append("<table border='1'><tr>");

                    // Add column headers
                    XmlNodeList columns = rows[0].ChildNodes;
                    foreach (XmlNode column in columns)
                    {
                        htmlTable.Append("<th>" + column.Name + "</th>");
                    }

                    htmlTable.Append("</tr>");

                    // Add rows and columns
                    foreach (XmlNode row in rows)
                    {
                        htmlTable.Append("<tr>");

                        foreach (XmlNode column in columns)
                        {
                            string cellValue = row.SelectSingleNode(column.Name)?.InnerText ?? "";
                            htmlTable.Append("<td>" + cellValue + "</td>");
                        }

                        htmlTable.Append("</tr>");
                    }

                    // Close the HTML table
                    htmlTable.Append("</table>");
                }


        */







                //RichEditDocumentServer server = new RichEditDocumentServer();
                //MemoryStream ms = new MemoryStream((byte[])dic_byte.Values.First());
                //ms.Position = 0;
                //server.LoadDocument(ms, DevExpress.XtraRichEdit.DocumentFormat.Doc);
                //MemoryStream memoryStream = new MemoryStream();
                //server.Options.Export.Html.EmbedImages = true;
                //server.SaveDocument(memoryStream, DevExpress.XtraRichEdit.DocumentFormat.Html);
                //string html = System.Text.Encoding.UTF8.GetString(memoryStream.ToArray());
                //StringBuilder sb = new StringBuilder();
                //sb.Append(System.Text.Encoding.UTF8.GetString(memoryStream.ToArray()));

                //MemoryStream m2 = new MemoryStream();
                //MemoryStream m3 = new MemoryStream();
                //server.Options.Export.Html.EmbedImages = true;
                //server.SaveDocument(m2, DocumentFormat.Html);
                //server.SaveDocument(m3, DocumentFormat.PlainText);

                //string html = System.Text.Encoding.UTF8.GetString(m2.ToArray());
                //string plaintxt = System.Text.Encoding.UTF8.GetString(m3.ToArray());


                //using (MemoryStream stream = new MemoryStream((byte[])dic_byte.Values.First()))
                //{
                //    using (RichEditDocumentServer richEditDocumentServer = new RichEditDocumentServer())
                //    {
                //        richEditDocumentServer.LoadDocument(stream, DocumentFormat.Xlsx);

                //        // Export the document to HTML
                //        MemoryStream htmlStream = new MemoryStream();
                //        richEditDocumentServer.ExportToHtml(htmlStream);

                //        // Convert the HTML stream to text
                //        htmlStream.Position = 0;
                //        using (StreamReader reader = new StreamReader(htmlStream))
                //        {
                //            return reader.ReadToEnd();
                //        }
                //    }

                //}

            }
            catch (Exception e) {

                ErrorList.Append("  {   \"ConfigurationName\" : " + C.JsonDataEncode("") + " , \"Error\" : " + C.JsonDataEncode(e.Message) + " } ");

                return new DataTable();
            }
        }





        public void addToLog(string log)
        {
            if(isLogFile)
            File.AppendAllText(_app.TempDirectory + "\\rptlog-"+configName+".txt", log.C2Str() + "\r\n-----------------------------------------------------\r\n");
        }
        //get Configuration dataset
        public DataSet GetConfigDT(string ConfigId, ErpScriptObject _erp, ApplicationInfo _app, IDBConfiguration _cfg)
        {
            string sqlsetting = @"
--[tbl_config]
select tbl_RS_spmaster.spname as rsspname,
(select spname from tbl_RS_spmaster where spmaster_pid=tbl_RS_configuration.prerequisitesp_fid) as prerequisitespname,
tbl_RS_configuration.* from tbl_RS_configuration
left join tbl_RS_spmaster on spmaster_fid=spmaster_pid
WHERE tbl_RS_configuration.company_fid = @CompanyID and configuration_pid=@configurationID;
--[tbl_configdetails]
select * from tbl_RS_configurationdetails     
WHERE company_fid = @CompanyID and configuration_fid=@configurationID
order by columnnumber
";
            string Error = "";
            DataSet DtRs = new DataSet();
            DtRs = _erp.ExecuteSql<DataSet>(sqlsetting, new Dictionary<string, object>() {
        {
          "@CompanyID", _app.CompanyID }
        ,{
          "@configurationID" ,ConfigId}
      }
                                            , out Error);
            return DtRs;
        }
    }
}
