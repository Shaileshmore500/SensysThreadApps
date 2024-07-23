using CsvHelper;
using CsvHelper.Configuration;
using DevExpress.Spreadsheet;
using Erp.Common;
using HelperLib.Conversion;
using HelperLib.DAL;
using HelperLib.Extensions;
using System;
using System.Collections.Generic;
using System.Data;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;
namespace App_Rs.Apps.App_Rs
{
    /// <summary>
    /// Helper class for managing file path and byte array  in the form of a Dictionary.
    /// </summary>
    public class ExportFileHelper
    {
        GenerateReport generateReport;
        Workbook workbook;
        MemoryStream stream;
        Dictionary<string, byte[]> dic;
        /// <summary>
        /// Returns a new  Dictionary containing string filepath and CSV byte array values.
        /// </summary>
        public Dictionary<string, byte[]> getCSVByte(ApplicationInfo app, IDBConfiguration cfg, string filepath, DataTable maindt, DataTable combinationdt, MatchCollection matches, bool iscomdt, string delimeter, bool issupresscolumnname, DataTable dt_details, System.Diagnostics.Stopwatch sw, StringBuilder ErrorList, bool isLogFile, string configName)
        {

            generateReport = new GenerateReport();
            generateReport.isLogFile = isLogFile;
            generateReport.Init(app, cfg);
            generateReport.configName = configName;
            if (Fn.IsEmpty(generateReport.ErrorList))
            {
                generateReport.ErrorList = new StringBuilder();
            }
            generateReport.addToLog("11.0: Creating Csv byte[] dictionary..." + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
            try
            {
                generateReport.addToLog("11.1: ForLoop On Combination dt..." + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                dic = new Dictionary<string, byte[]>();
                for (var j = 0;
                     j < combinationdt.Rows.Count;
                     j++)
                {
                    generateReport.addToLog("11.2." + j + ": Creating dicByte[] for file " + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                    DataTable dt_sorted = maindt.Clone();
                    DataRowView[] dr_sorted = null;
                    if (iscomdt)
                        dr_sorted = maindt.DefaultView.FindRows(combinationdt.Rows[j].ItemArray);
                    else
                    {
                        dr_sorted = maindt.DefaultView.Cast<DataRowView>().ToArray();
                    }
                    generateReport.addToLog("11.2." + j + ": Default View Created  " + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                    var actualFilePath = filepath;
                    for (var k = 0;
                         k < matches.Count;
                         k++)
                    {
                        if (matches[k].Value.Contains("@@"))
                        {
                            actualFilePath = actualFilePath.Replace(matches[k].Value, dr_sorted[0][matches[k].Value.C2Str().Replace("[@@", "").Replace("]", "")].C2Str());
                        }
                        else if (matches[k].Value.ToLower().Contains("@datetime"))
                        {
                            actualFilePath = actualFilePath.Replace(matches[k].Value.C2Str(), DateTime.Now.ToString("yyyyMMddhhmmssms") + "" + j);
                        }
                    }
                    generateReport.addToLog("11.2." + j + ": Replaced @datetime and @@ parameters  " + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                    foreach (DataRowView drv in dr_sorted)
                    {
                        dt_sorted.Rows.Add(drv.Row.ItemArray);
                    }
                    generateReport.addToLog("11.2." + j + ": Sorted dt created... " + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                    using (var memoryStream = new MemoryStream())
                    using (var writer = new StreamWriter(memoryStream))
                    using (var csv = new CsvWriter(writer, new CsvConfiguration(CultureInfo.InvariantCulture)
                    {

                        Delimiter = delimeter,
                        HasHeaderRecord = true // Set to false if you don't want a header row.
                    }
                                                  ))
                    {
                        if (!issupresscolumnname)
                        {
                            //foreach (DataColumn column in dt_sorted.Columns)
                            //{
                            //    csv.WriteField(column.ColumnName);
                            //}

                            for (var i = 0; i < dt_details.Rows.Count; i++)
                            {
                                csv.WriteField(dt_details.Rows[i]["displayname"]);
                            }
                            csv.NextRecord();
                            generateReport.addToLog("11.2." + j + ":  headrer data written in csv template  " + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));



                        }
                        generateReport.addToLog("11.2." + j + ": Start data writting in csv template  " + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                        foreach (DataRow row in dt_sorted.Rows)
                        {
                            if (dt_details.Rows.Count > 0)
                            {
                                foreach (DataRow d in dt_details.Rows)
                                {
                                    if (d["isexported"].C2Bool())
                                        csv.WriteField(row[d["spcolumnnames"].C2Str().Trim()]);
                                }
                            }
                            else
                            {
                                for (int i = 0;
                                     i < dt_sorted.Columns.Count;
                                     i++)
                                {
                                    csv.WriteField(row[i]);
                                }
                            }
                            csv.NextRecord();
                        }
                        writer.Flush();
                        dic.Add(actualFilePath, memoryStream.ToArray());
                        generateReport.addToLog("11.2." + j + ": Data written in cvs template done and convetred in byte[] and added in dic   " + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                    }
                }
                return dic;
            }
            catch (Exception e)
            {
                generateReport.addToLog("11.2." + ": failed to  Data written in cvs template    " + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                generateReport.ErrorList.Append("  {   \"ConfigurationName\" : " + C.JsonDataEncode("") + " , \"Error\" : " + C.JsonDataEncode(e.Message) + " } ");
            }
            return null;
        }
        /// <summary>
        /// Returns a new  Dictionary containing string filepath and Excel byte array values.
        /// </summary>
        public Dictionary<string, byte[]> getExcelByte(ApplicationInfo app, IDBConfiguration cfg, string filepath, DataTable maindt, DataTable combinationdt, DataTable tbl_configdetails, DataTable tbl_config, MatchCollection matches, bool iscomdt, System.Diagnostics.Stopwatch sw, StringBuilder ErrorList, bool isLogFile)
        {
            dic = new Dictionary<string, byte[]>();
            generateReport = new GenerateReport();
            generateReport.isLogFile = isLogFile;
            generateReport.Init(app, cfg);

            List<string> lst_DrGroupingColumns = new List<string>();
            Dictionary<string, Dictionary<string, string>> dic_configDetailSetting = new Dictionary<string, Dictionary<string, string>>();
            Dictionary<string, List<double>> dic_valuesbyGrouping = new Dictionary<string, List<double>>();
            string str_groupsort = "";
            foreach (DataRow dr in tbl_configdetails.Rows)
            {
                if (!Fn.IsEmpty(dr["setting"].C2Str()))
                {
                    if (!dic_configDetailSetting.ContainsKey(dr["spcolumnnames"].C2Str()))
                        dic_configDetailSetting.Add(dr["spcolumnnames"].C2Str(), Newtonsoft.Json.JsonConvert.DeserializeObject<Dictionary<string, string>>(dr["setting"].C2Str()));
                }
                if (dr["isgroupingcolumn"] != null && dr["isgroupingcolumn"].C2Bool())
                {
                    lst_DrGroupingColumns.Add(dr["spcolumnnames"].C2Str());
                    if (dic_configDetailSetting.ContainsKey(dr["spcolumnnames"].C2Str()))
                        str_groupsort += dr["spcolumnnames"].C2Str() + " " + (dic_configDetailSetting[dr["spcolumnnames"].C2Str()]["sel_sort"].C2Str() == "" ? "asc" : dic_configDetailSetting[dr["spcolumnnames"].C2Str()]["sel_sort"].C2Str().ToLower() + ",");
                }


            }
            int dataStratingpos = tbl_config.Rows[0]["datastartingposition"].C2Int();
            int colnamestartingrownumber = tbl_config.Rows[0]["colnamestartingrownumber"].C2Int();
            var _given_excelByte = tbl_config.Rows[0]["excelattachment"];
            string configName = tbl_config.Rows[0]["configurationtext"].C2Str();
            generateReport.configName = configName;
            string sheetname = tbl_config.Rows[0]["sheetname"].C2Str();
            bool enablecopyinsertrow = tbl_config.Rows[0]["enablecopyinsertrow"].C2Bool();
            bool isCustomeTemplate = tbl_config.Rows[0]["iscustometemplate"].C2Bool();
            bool isencryptedfile = tbl_config.Rows[0]["isencryptedfile"].C2Bool();
            string password = tbl_config.Rows[0]["filepassword"].C2Str();
            bool issupresscolumnname = tbl_config.Rows[0]["issupresscolumnname"].C2Bool();
            bool isexportcolumnifnotnull = tbl_config.Rows[0]["isexportcolumnifnotnull"].C2Bool();
            Byte[] excelBytes = null;
            if (generateReport.ErrorList == null)
                generateReport.ErrorList = new StringBuilder();

            generateReport.addToLog("11.0: Creating Excel byte[] dictionary..." + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));

            try
            {
                generateReport.addToLog("11.1:start Writing Headers in excel file and convert in to byte[]" + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                if (tbl_configdetails.Rows.Count <= 0)
                {
                    generateReport.ErrorList.Append("  {   \"ConfigurationName\" : " + C.JsonDataEncode(configName) + " , \"Error\" : " + C.JsonDataEncode("Configuration Details Not Found...") + " } ");
                    return null;
                }
                else if (!Fn.IsEmpty(_given_excelByte) && isCustomeTemplate)
                {
                    excelBytes = (Byte[])_given_excelByte;
                }
                else if (tbl_configdetails.Rows.Count > 0)
                {
                    //if user not uploade the excel but get configuration details write column in excel
                    try
                    {
                        if (!issupresscolumnname)
                        {
                            workbook = new Workbook();
                            Worksheet worksheet = workbook.Worksheets[0];
                            for (var _i = 0;
                                 _i < tbl_configdetails.Rows.Count;
                                 _i++)
                            {
                                if (tbl_configdetails.Rows[_i]["isexported"].C2Bool())
                                    worksheet.Cells[colnamestartingrownumber - 1, tbl_configdetails.Rows[_i]["columnnumber"].C2Int()].Value = tbl_configdetails.Rows[_i]["displayname"].C2Str();
                            }
                            using (MemoryStream stream2 = new MemoryStream())
                            {
                                stream2.Position = 0;
                                workbook.SaveDocument(stream2, DocumentFormat.Xls);
                                excelBytes = stream2.ToArray();
                            }
                        }
                    }
                    catch (Exception e)
                    {
                        generateReport.ErrorList.Append("  {   \"ConfigurationName\" : " + C.JsonDataEncode(configName) + " , \"Error\" : " + C.JsonDataEncode(e.Message) + " } ");
                    }
                }
                generateReport.addToLog("11.2: Write Headers in excel file and converted in to byte[]" + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                // combinationdt contains how many files will be created 
                //find data in main table to save this in file 
                generateReport.addToLog("11.3:forloop on conbination dt..." + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                for (var j = 0; j < combinationdt.Rows.Count; j++)
                {
                    generateReport.addToLog("11.3." + j + ": Creating dicByte[] for file " + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));

                    DataRowView[] sorted_dr = null;
                    if (iscomdt)
                        sorted_dr = maindt.DefaultView.FindRows(combinationdt.Rows[j].ItemArray);
                    else
                    {
                        sorted_dr = maindt.DefaultView.Cast<DataRowView>().ToArray();
                    }
                    generateReport.addToLog("11.3" + j + ": Default view created..." + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                    #region write excel
                    //excelBytes =[];
                    //using (stream = new MemoryStream((Byte[])excelBytes))
                    using (workbook = new Workbook())
                    {
                        if (!Fn.IsEmpty(excelBytes))
                        {
                            stream = new MemoryStream((Byte[])excelBytes);
                            workbook.LoadDocument(stream);
                        }
                        //load worksheet 
                        Worksheet worksheet = null;
                        try
                        {
                            if (Fn.IsEmpty(sheetname) || !isCustomeTemplate)
                                worksheet = workbook.Worksheets[0];
                            else
                                worksheet = workbook.Worksheets[sheetname];
                        }
                        catch (Exception e)
                        {
                            ErrorList.Append("  {   \"ConfigurationName\" : " + C.JsonDataEncode(configName) + " , \"Error\" : " + C.JsonDataEncode("The Sheet Name " + sheetname + " Not Found In Excel ") + " } ");
                        }
                        var actualFilePath = filepath;
                        generateReport.addToLog("11.3" + j + ": Replacing @ from excelsheet..." + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                        //replace the @parameter in excel 
                        for (var i = 0;
                             i < dataStratingpos;
                             i++)
                        {
                            int latUsedColumn = worksheet.GetUsedRange().ColumnCount;
                            for (var _j = 0;
                                 _j < latUsedColumn;
                                 _j++)
                            {
                                var value = worksheet.Cells[i, _j].Value.C2Str();
                                if (!Fn.IsEmpty(value))
                                {
                                    MatchCollection regex = Regex.Matches(value, @"\[(.*?)\]");
                                    if (regex.Count > 0)
                                    {
                                        for (var _i = 0;
                                             _i < regex.Count;
                                             _i++)
                                        {
                                            if (sorted_dr[0].Row.Table.Columns.Contains(regex[_i].Value.C2Str().Replace("[", "").Replace("]", "").Replace("@", "")))
                                            {
                                                try
                                                {
                                                    worksheet.Cells[i, _j].Value = value.Replace(regex[_i].Value, sorted_dr[0][regex[_i].Value.C2Str().Replace("[", "").Replace("]", "").Replace("@", "")].C2Str());
                                                }
                                                catch (Exception e)
                                                {
                                                    ErrorList.Append("  {   \"ConfigurationName\" : " + C.JsonDataEncode(configName) + " , \"Error\" : " + C.JsonDataEncode($"{regex[_i].Value} Not Found In Data Base...") + " } ");
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        }
                        generateReport.addToLog("11.3" + j + ": Replacing @@ from path..." + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                        //replaceing  the @@ from path 
                        for (var k = 0;
                             k < matches.Count;
                             k++)
                        {
                            if (matches[k].Value.Contains("@@"))
                            {
                                actualFilePath = actualFilePath.Replace(matches[k].Value, sorted_dr[0][matches[k].Value.C2Str().Replace("[@@", "").Replace("]", "")].C2Str());
                            }
                            else if (matches[k].Value.ToLower().Contains("@datetime"))
                            {
                                actualFilePath = actualFilePath.Replace(matches[k].Value.C2Str(), DateTime.Now.ToString("yyyyMMddhhmmssms") + "" + j);
                            }

                        }
                        //generateReport.addToLog("12." + j + ":" + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                        generateReport.addToLog("11.3" + j + ": Starting copy paste fotmulae in  sheet ..." + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                        workbook.BeginUpdate();
                        workbook.CalculateFullRebuild();
                        //if (enablecopyinsertrow)
                        {
                            //for copy insert 
                            //worksheet.Rows.Insert(dataStratingpos + 1, sorted_dr.Length, RowFormatMode.None);
                            //CellRange sourceRange = worksheet.Range.FromLTRB(0, dataStratingpos, worksheet.GetUsedRange().ColumnCount, dataStratingpos);
                            //CellRange targetRange = worksheet.Range.FromLTRB(0, dataStratingpos + 1, worksheet.GetUsedRange().ColumnCount, sorted_dr.Length);
                            //targetRange.CopyFrom(sourceRange, PasteSpecial.All);
                            //sourceRange.Copy(targetRange, PasteSpecial.All);


                            worksheet.Rows.Insert(dataStratingpos, sorted_dr.Length, RowFormatMode.None);
                            CellRange sourceRange = worksheet.Range.FromLTRB(0, dataStratingpos - 1, worksheet.GetUsedRange().ColumnCount, dataStratingpos - 1);
                            CellRange targetRange = worksheet.Range.FromLTRB(0, dataStratingpos, worksheet.GetUsedRange().ColumnCount, sorted_dr.Length);
                            targetRange.CopyFrom(sourceRange, PasteSpecial.All);

                        }
                        //generateReport.addToLog("13." + j + ":" + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                        generateReport.addToLog("11.3" + j + ": Start writing sp  data in excel..." + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                        //write the data in worksheet to save and data filterd by dr of combinationdt


                        //if grouping Exists
                        if (lst_DrGroupingColumns != null && lst_DrGroupingColumns.Count > 0)
                        {
                            DataTable dt = maindt.Clone();
                            foreach (DataRowView drv in sorted_dr)
                            {
                                dt.ImportRow(drv.Row);
                            }


                            DataTable group_combinationDt = dt.DefaultView.ToTable(true, lst_DrGroupingColumns.ToArray());


                            //insert column for grouped column and write its header 
                            var str_sort = "";
                            for (var i = 0; i < lst_DrGroupingColumns.Count; i++)
                            {
                                worksheet.Columns.Insert(i);
                                worksheet.Cells[colnamestartingrownumber - 1, i].Value = lst_DrGroupingColumns[i];
                                str_sort += lst_DrGroupingColumns[i] + " asc,";
                            }
                            if (isCustomeTemplate || tbl_configdetails.Rows.Count > 0)
                            {
                                var defaultView = dt.DefaultView;
                                var currentCellRowNumber = 0;
                                defaultView.Sort = str_groupsort.TrimEnd(',');
                                group_combinationDt.DefaultView.Sort = str_groupsort.TrimEnd(',');



                                Dictionary<String, Double> dic_aggregate = new Dictionary<string, double>();
                                string aggregate_dicKey = "";

                                //foreach (DataRowView dataRowView in group_combinationDt.DefaultView)
                                for (var i = 0; i < group_combinationDt.DefaultView.Count; i++)
                                {
                                    var dr = group_combinationDt.DefaultView[i].Row;
                                    var arr_drv = defaultView.FindRows(dr.ItemArray);
                                    //maindt.DefaultView.FindRows(combinationdt.Rows[j].ItemArray);
                                    var index = 0;
                                    bool isnullaggregate_dicKey = false;
                                    var isgroupchange = false;

                                    aggregate_dicKey = "";


                                    //foreach (string spcolname in lst_DrGroupingColumns)
                                    for (var k = 0; k < lst_DrGroupingColumns.Count; k++)
                                    {
                                        string spcolname = lst_DrGroupingColumns[k];
                                        if (isnullaggregate_dicKey)
                                        {
                                            aggregate_dicKey = "";
                                            isnullaggregate_dicKey = false;
                                            currentCellRowNumber++;

                                        }
                                        if (i == 0 || group_combinationDt.DefaultView[i - 1].Row[spcolname].C2Str() != group_combinationDt.DefaultView[i].Row[spcolname].C2Str() || group_combinationDt.DefaultView[i - 1].Row[lst_DrGroupingColumns[0]].C2Str() != group_combinationDt.DefaultView[i].Row[lst_DrGroupingColumns[0]].C2Str() || isgroupchange)
                                        {
                                            worksheet.Cells[(dataStratingpos - 1) + currentCellRowNumber, index].Value = arr_drv[0].Row[spcolname].C2Str();//sorted_dr[_i][spcolname].C2Str();

                                            if (dic_configDetailSetting.ContainsKey(spcolname))
                                            {
                                                if (dic_configDetailSetting[spcolname]["html_bc"].C2Str() != "")
                                                    worksheet.Cells[(dataStratingpos - 1) + currentCellRowNumber, index].FillColor = System.Drawing.ColorTranslator.FromHtml(dic_configDetailSetting[spcolname]["html_bc"].C2Str());
                                                if (dic_configDetailSetting[spcolname]["html_fc"].C2Str() != "")
                                                    worksheet.Cells[(dataStratingpos - 1) + currentCellRowNumber, index].Font.Color = System.Drawing.ColorTranslator.FromHtml(dic_configDetailSetting[spcolname]["html_fc"].C2Str());
                                            }

                                            CellRange rangeToMerge = worksheet.Range.FromLTRB(index, currentCellRowNumber + 1, worksheet.Columns.LastUsedIndex, currentCellRowNumber + 1);
                                            // Merge the cells 
                                            worksheet.MergeCells(rangeToMerge); // Merges with default behavior                                            
                                            currentCellRowNumber++;
                                            isgroupchange = true;
                                        }
                                        aggregate_dicKey += dr[spcolname].C2Str() == "" ? "|#" : "|" + dr[spcolname].C2Str();
                                        index++;

                                    }

                                    foreach (var drv in arr_drv)
                                    {
                                        foreach (DataRow d in tbl_configdetails.Rows)
                                        {
                                            if (d["isexported"].C2Bool())
                                            {
                                                if (drv.Row[d["spcolumnnames"].C2Str()].GetType().Name.ToLower() == "string")
                                                    worksheet.Cells[(dataStratingpos - 1) + currentCellRowNumber, d["columnnumber"].C2Int() + lst_DrGroupingColumns.Count].Value = drv.Row[d["spcolumnnames"].C2Str()].C2Str();
                                                else if (drv.Row[d["spcolumnnames"].C2Str()].GetType().Name.ToLower().Contains("int"))
                                                    worksheet.Cells[(dataStratingpos - 1) + currentCellRowNumber, d["columnnumber"].C2Int() + lst_DrGroupingColumns.Count].Value = drv.Row[d["spcolumnnames"].C2Str()].C2Int();
                                                else if (drv.Row[d["spcolumnnames"].C2Str()].GetType().Name.ToLower().Contains("double"))
                                                    worksheet.Cells[(dataStratingpos - 1) + currentCellRowNumber, d["columnnumber"].C2Int() + lst_DrGroupingColumns.Count].Value = drv.Row[d["spcolumnnames"].C2Str()].C2Dbl();
                                                else
                                                    worksheet.Cells[(dataStratingpos - 1) + currentCellRowNumber, d["columnnumber"].C2Int() + lst_DrGroupingColumns.Count].Value = drv.Row[d["spcolumnnames"].C2Str()].C2Str();

                                                try
                                                {
                                                    if (dic_configDetailSetting.ContainsKey(d["spcolumnnames"].C2Str()))
                                                    {
                                                        if (dic_configDetailSetting[d["spcolumnnames"].C2Str()]["html_bc"].C2Str() != "")
                                                            worksheet.Cells[(dataStratingpos - 1) + currentCellRowNumber, d["columnnumber"].C2Int() + lst_DrGroupingColumns.Count].FillColor = System.Drawing.ColorTranslator.FromHtml(dic_configDetailSetting[d["spcolumnnames"].C2Str()]["html_bc"].C2Str());
                                                        if (dic_configDetailSetting[d["spcolumnnames"].C2Str()]["html_fc"].C2Str() != "")
                                                            worksheet.Cells[(dataStratingpos - 1) + currentCellRowNumber, d["columnnumber"].C2Int() + lst_DrGroupingColumns.Count].Font.Color = System.Drawing.ColorTranslator.FromHtml(dic_configDetailSetting[d["spcolumnnames"].C2Str()]["html_fc"].C2Str());
                                                    }
                                                }
                                                catch (Exception e)
                                                {
                                                    var a = e.Message;
                                                }


                                            }
                                            if (dic_configDetailSetting.ContainsKey(d["spcolumnnames"].C2Str()) && dic_configDetailSetting[d["spcolumnnames"].C2Str()]["sel_agg"].C2Str() == "Sum")
                                            {
                                                if (dic_aggregate.ContainsKey(d["spcolumnnames"].C2Str() + aggregate_dicKey))
                                                    dic_aggregate[d["spcolumnnames"].C2Str() + aggregate_dicKey] += drv.Row[d["spcolumnnames"].C2Str()].C2Flt();
                                                else
                                                    dic_aggregate.Add(d["spcolumnnames"].C2Str() + aggregate_dicKey, drv.Row[d["spcolumnnames"].C2Str()].C2Flt());
                                            }
                                            else if (dic_configDetailSetting.ContainsKey(d["spcolumnnames"].C2Str()) && dic_configDetailSetting[d["spcolumnnames"].C2Str()]["sel_agg"].C2Str() != "")
                                            {
                                                if (dic_valuesbyGrouping.ContainsKey(d["spcolumnnames"].C2Str() + aggregate_dicKey))
                                                    dic_valuesbyGrouping[d["spcolumnnames"].C2Str() + aggregate_dicKey].Add(drv.Row[d["spcolumnnames"].C2Str()].C2Flt());
                                                else
                                                    dic_valuesbyGrouping.Add(d["spcolumnnames"].C2Str() + aggregate_dicKey, new List<double>() { drv.Row[d["spcolumnnames"].C2Str()].C2Flt() });

                                            }
                                        }
                                        currentCellRowNumber++;
                                    }


                                    if (dic_aggregate.Count > 0 || dic_valuesbyGrouping.Count > 0)
                                    {

                                        for (var k = lst_DrGroupingColumns.Count - 1; k >= 0; k--)
                                        {
                                            string spcolname = lst_DrGroupingColumns[k];

                                            if (i == group_combinationDt.DefaultView.Count - 1 || k == lst_DrGroupingColumns.Count - 1 ||
                                                group_combinationDt.DefaultView[i + 1].Row[spcolname].C2Str() != group_combinationDt.DefaultView[i].Row[spcolname].C2Str()
                                                || group_combinationDt.DefaultView[i + 1].Row[lst_DrGroupingColumns[0]].C2Str() != group_combinationDt.DefaultView[i].Row[lst_DrGroupingColumns[0]].C2Str()
                                                )
                                            {
                                                worksheet.Cells[(dataStratingpos - 1) + currentCellRowNumber, k].Value = dic_configDetailSetting.ContainsKey(spcolname) && dic_configDetailSetting[spcolname]["html_lbl"].C2Str() != "" ? dic_configDetailSetting[spcolname]["html_lbl"].C2Str() : "Summary";

                                                bool isincreamentcurrentCellRowNumber = false;
                                                foreach (DataRow d in tbl_configdetails.Rows)
                                                {
                                                    if (d["isexported"].C2Bool())
                                                    {
                                                        if (dic_configDetailSetting.ContainsKey(d["spcolumnnames"].C2Str()) && dic_configDetailSetting[d["spcolumnnames"].C2Str()]["sel_agg"].C2Str() == "Sum")
                                                        {
                                                            string key = d["spcolumnnames"].C2Str();
                                                            for (int l = 0; l <= k; l++)
                                                            {
                                                                key += group_combinationDt.DefaultView[i].Row[lst_DrGroupingColumns[l]].C2Str() == "" ? "|#" : "|" + group_combinationDt.DefaultView[i].Row[lst_DrGroupingColumns[l]];
                                                            }
                                                            double sum = 0;
                                                            foreach (KeyValuePair<string, double> keyValue in dic_aggregate)
                                                            {
                                                                if (keyValue.Key.StartsWith(key))
                                                                {
                                                                    sum += dic_aggregate[keyValue.Key];
                                                                }
                                                            }

                                                            worksheet.Cells[(dataStratingpos - 1) + currentCellRowNumber, d["columnnumber"].C2Int() + lst_DrGroupingColumns.Count].Value = sum;
                                                            worksheet.Cells[(dataStratingpos - 1) + currentCellRowNumber, k].Font.Bold = true;
                                                            if (dic_configDetailSetting[d["spcolumnnames"].C2Str()]["html_gbc"].C2Str() != "")
                                                                worksheet.Cells[(dataStratingpos - 1) + currentCellRowNumber, d["columnnumber"].C2Int() + lst_DrGroupingColumns.Count].FillColor = System.Drawing.ColorTranslator.FromHtml(dic_configDetailSetting[d["spcolumnnames"].C2Str()]["html_gbc"].C2Str());
                                                            if (dic_configDetailSetting[d["spcolumnnames"].C2Str()]["html_gfc"].C2Str() != "")
                                                                worksheet.Cells[(dataStratingpos - 1) + currentCellRowNumber, d["columnnumber"].C2Int() + lst_DrGroupingColumns.Count].Font.Color = System.Drawing.ColorTranslator.FromHtml(dic_configDetailSetting[d["spcolumnnames"].C2Str()]["html_gfc"].C2Str());
                                                            worksheet.Cells[(dataStratingpos - 1) + currentCellRowNumber, d["columnnumber"].C2Int() + lst_DrGroupingColumns.Count].Font.Bold = true;
                                                            isincreamentcurrentCellRowNumber = true;
                                                        }
                                                        else if (dic_configDetailSetting.ContainsKey(d["spcolumnnames"].C2Str()) && dic_configDetailSetting[d["spcolumnnames"].C2Str()]["sel_agg"].C2Str() != "")
                                                        {
                                                            List<double> lst_merge = new List<double>();
                                                            string key = d["spcolumnnames"].C2Str();
                                                            double value = 0;
                                                            for (int l = 0; l <= k; l++)
                                                            {
                                                                key += group_combinationDt.DefaultView[i].Row[lst_DrGroupingColumns[l]].C2Str() == "" ? "|#" : "|" + group_combinationDt.DefaultView[i].Row[lst_DrGroupingColumns[l]];
                                                            }
                                                            double sum = 0;
                                                            foreach (KeyValuePair<string, List<double>> keyValue in dic_valuesbyGrouping)
                                                            {
                                                                if (keyValue.Key.StartsWith(key))
                                                                {
                                                                    lst_merge.AddRange(dic_valuesbyGrouping[keyValue.Key]);
                                                                }
                                                            }

                                                            if (dic_configDetailSetting[d["spcolumnnames"].C2Str()]["sel_agg"].C2Str() == "Min")
                                                                value = lst_merge.Count > 0 ? lst_merge.Min() : 0;
                                                            else if (dic_configDetailSetting[d["spcolumnnames"].C2Str()]["sel_agg"].C2Str() == "Max")
                                                                value = lst_merge.Count > 0 ? lst_merge.Max() : 0;
                                                            else if (dic_configDetailSetting[d["spcolumnnames"].C2Str()]["sel_agg"].C2Str() == "Count")
                                                                value = lst_merge.Count > 0 ? lst_merge.Count : 0;
                                                            worksheet.Cells[(dataStratingpos - 1) + currentCellRowNumber, d["columnnumber"].C2Int() + lst_DrGroupingColumns.Count].Value = value;
                                                            if (dic_configDetailSetting[d["spcolumnnames"].C2Str()]["html_gbc"].C2Str() != "")
                                                                worksheet.Cells[(dataStratingpos - 1) + currentCellRowNumber, d["columnnumber"].C2Int() + lst_DrGroupingColumns.Count].FillColor = System.Drawing.ColorTranslator.FromHtml(dic_configDetailSetting[d["spcolumnnames"].C2Str()]["html_gbc"].C2Str());
                                                            if (dic_configDetailSetting[d["spcolumnnames"].C2Str()]["html_gfc"].C2Str() != "")
                                                                worksheet.Cells[(dataStratingpos - 1) + currentCellRowNumber, d["columnnumber"].C2Int() + lst_DrGroupingColumns.Count].Font.Color = System.Drawing.ColorTranslator.FromHtml(dic_configDetailSetting[d["spcolumnnames"].C2Str()]["html_gfc"].C2Str());
                                                            worksheet.Cells[(dataStratingpos - 1) + currentCellRowNumber, d["columnnumber"].C2Int() + lst_DrGroupingColumns.Count].Font.Bold = true;
                                                            isincreamentcurrentCellRowNumber = true;
                                                        }
                                                    }
                                                }
                                                if (isincreamentcurrentCellRowNumber)
                                                    currentCellRowNumber++;
                                            }
                                        }

                                    }



                                }
                            }

                            //    if (isCustomeTemplate || tbl_configdetails.Rows.Count > 0)
                            //{
                            //    var cellRowNumber = 0;
                            //    for (var _i = 0; _i < sorted_dr.Length; _i++)
                            //    {

                            //        var index = 0;


                            //            foreach (string spcolname in lst_DrGroupingColumns)
                            //            {
                            //                if (_i < sorted_dr.Length-1 && (_i == 0 || sorted_dr[_i][spcolname].C2Str() != sorted_dr[_i + 1][spcolname].C2Str()))
                            //                {
                            //                    worksheet.Cells[(dataStratingpos - 1) + _i, index].Value = sorted_dr[_i][spcolname].C2Str();
                            //                    index++;
                            //                    cellRowNumber++;
                            //                }

                            //            }


                            //        foreach (DataRow d in tbl_configdetails.Rows)
                            //        {
                            //            if (d["isexported"].C2Bool())
                            //                worksheet.Cells[(dataStratingpos - 1)+ cellRowNumber + _i, d["columnnumber"].C2Int()+lst_DrGroupingColumns.Count].Value = sorted_dr[_i][d["spcolumnnames"].C2Str()].C2Str();
                            //        }
                            //    }
                            //}






                        }
                        else
                        {
                            //if no grouping Exists
                            for (var _i = 0; _i < sorted_dr.Length; _i++)
                            {

                                if (isCustomeTemplate || tbl_configdetails.Rows.Count > 0)
                                {
                                    foreach (DataRow d in tbl_configdetails.Rows)
                                    {
                                        if (d["isexported"].C2Bool())
                                        {
                                            //worksheet.Cells[(dataStratingpos  - 1) + _i, d["columnnumber"].C2Int()].Value = sorted_dr[_i][d["spcolumnnames"].C2Str()].C2Str();

                                            if (sorted_dr[_i][d["spcolumnnames"].C2Str()].GetType().Name.ToLower() == "string")
                                                worksheet.Cells[(dataStratingpos - 1) + _i, d["columnnumber"].C2Int()].Value = sorted_dr[_i][d["spcolumnnames"].C2Str()].C2Str();
                                            else if (sorted_dr[_i][d["spcolumnnames"].C2Str()].GetType().Name.ToLower().Contains("int"))
                                                worksheet.Cells[(dataStratingpos - 1) + _i, d["columnnumber"].C2Int()].Value = sorted_dr[_i][d["spcolumnnames"].C2Str()].C2Int();
                                            else if (sorted_dr[_i][d["spcolumnnames"].C2Str()].GetType().Name.ToLower().Contains("double"))
                                                worksheet.Cells[(dataStratingpos - 1) + _i, d["columnnumber"].C2Int()].Value = sorted_dr[_i][d["spcolumnnames"].C2Str()].C2Dbl();
                                            else if (sorted_dr[_i][d["spcolumnnames"].C2Str()].GetType().Name.ToLower().Contains("float"))
                                                worksheet.Cells[(dataStratingpos - 1) + _i, d["columnnumber"].C2Int()].Value = sorted_dr[_i][d["spcolumnnames"].C2Str()].C2Flt();
                                            else
                                                worksheet.Cells[(dataStratingpos - 1) + _i, d["columnnumber"].C2Int()].Value = sorted_dr[_i][d["spcolumnnames"].C2Str()].C2Str();


                                        }
                                    }
                                }
                                //else
                                //{
                                //    for (var _j = 0;
                                //         _j < maindt.Columns.Count;
                                //         _j++)
                                //    {
                                //        worksheet.Cells[dataStratingpos + _i, _j].Value = sorted_dr[_i][maindt.Columns[_j].ColumnName.C2Str()].C2Str();
                                //    }
                                //}
                            }


                        }


                        //generateReport.addToLog("14." + j + ":" + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                        generateReport.addToLog("11.3" + j + ": hiding columns if null..." + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                        //hide column if null

                        if (isexportcolumnifnotnull)
                        {

                            var colcount = worksheet.GetUsedRange().ColumnCount;
                            var rowcount = worksheet.GetDataRange().BottomRowIndex;
                            for (var i = colcount - 1; i >= 0; i--)
                            {
                                bool isEmpty = true;
                                for (var _i = dataStratingpos - 1; _i < rowcount; _i++)
                                {

                                    var abc = worksheet.Cells[_i, i].Value;
                                    if (!Fn.IsEmpty(worksheet.Cells[_i, i].Value) && worksheet.Cells[_i, i].Value.C2Str() != "0")
                                    {
                                        isEmpty = false;
                                        break;

                                    }

                                }
                                if (isEmpty)
                                {
                                    // worksheet.Columns[i].Visible = false;
                                    worksheet.Columns.Remove(i);
                                }

                            }
                        }



                        //add byte[] data in dictionay`
                        generateReport.addToLog("11.3" + j + ": add byte[] data in dictionay" + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                        using (MemoryStream m = new MemoryStream())
                        {
                            //workbook.Calculate();
                            workbook.EndUpdate();
                            if (isencryptedfile)
                                worksheet.Protect(password, WorksheetProtectionPermissions.Default);
                            workbook.SaveDocument(m, DocumentFormat.Xls);
                            //workbook.Worksheets[0].ActiveView.PaperKind = System.Drawing.Printing.PaperKind.A4;
                            //workbook.Worksheets[0].ActiveView.
                            dic.Add(actualFilePath, m.ToArray());
                        }
                        if (!Fn.IsEmpty(stream))
                            stream.Flush();
                        //generateReport.addToLog("15." + j + ":" + sw.ElapsedMilliseconds + " - " + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss tt"));
                    }
                    #endregion
                }
                return dic;
            }
            catch (Exception e)
            {
                generateReport.ErrorList.Append(ErrorList.Append("  {   \"ConfigurationName\" : " + C.JsonDataEncode("") + " , \"Error\" : " + C.JsonDataEncode(e.Message) + " } "));
            }
            return null;
        }



    }
}
