using Erp.Base.ScriptInterface;
using Erp.Common;
using Erp.Base;
using HelperLib.DAL;
using System;
using System.Collections.Generic;
using HelperLib.Extensions;
using System.IO;
using DevExpress.Spreadsheet;
using System.Data;
using Newtonsoft.Json;
using System.Data.SqlClient;
using System.Text;
using HelperLib.Conversion;
using System.Linq;

namespace App_Dip.Apps.App_Dip
{
    public class DataImporting : ImplEntityScript, IEntityScript
    {
        ApplicationInfo _app; IDBConfiguration _cfg;
        Workbook workbook;
        StringBuilder errorList = new StringBuilder();
        string error = "";
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
            try
            {
                if (sender == "mapping")
                {
                    var filename = args.Get("filename").C2Str();
                    var filepath = args.Get("filepath").C2Str();
                    var status = loadWorkbook(filename, filepath);

                    if (filename.ToLower().Contains("xls") || filename.ToLower().Contains("xlsx"))
                    {
                        var ent = new ErpEntity("tbl_DIP_configuration", Erp.GetFieldValue("sel_configuration").C2Str(), _cfg);
                        ent.LoadEntity();
                        var entityName = ent["entity_fid"].C2Str();
                        args["sheets"] = getSheets();
                        args["dt_ExcelColumn"] = getExcelColumns(workbook.Worksheets[0].Name).ToDictionaryArray();
                        DataSet ds = new DataSet();
                        if(args.Get("mode").C2Str()=="config")
                            ds = getEntityColumn(Erp.GetFieldValue("html_entities").C2Str());
                        else
                            ds = getEntityColumn(entityName);

                        var dt_EntityColumn = ds.Tables["dt_entitycolumns"];
                        //add first record as NA (no value selected)                        
                        DataRow dr = dt_EntityColumn.NewRow();
                        dr["text"] = "NA";
                        dr["value"] = "";
                        if (dt_EntityColumn.Rows.Count > 0)
                            dt_EntityColumn.Rows.InsertAt(dr, 0);
                        args["dt_EntityColumn"] = ds.Tables["dt_entitycolumns"].ToDictionaryArray();
                        args["dt_fieldtype"] = ds.Tables["dt_fieldtype"].ToDictionaryArray();
                    }
                    else
                    {
                        Erp.ShowMessage("Something Went Wrong ! Try Again...");
                    }


                }
                else if (sender == "getChildEntity")
                {
                    var ent = new ErpEntity("tbl_DIP_configuration", Erp.GetFieldValue("sel_configuration").C2Str(), _cfg);
                    ent.LoadEntity();
                    var entityName = "";
                    if (args.Get("mode").C2Str() == "config")
                        entityName = Erp.GetFieldValue("html_entities").C2Str();
                    else
                        entityName = ent["entity_fid"].C2Str();
                    var dt_childEntityColumn = getFidEntityColumn(entityName, args.Get("fieldname").C2Str());

                    DataRow dr = dt_childEntityColumn.NewRow();
                    dr["text"] = "NA";
                    dr["value"] = "";
                    if (dt_childEntityColumn.Rows.Count > 0)
                        dt_childEntityColumn.Rows.InsertAt(dr, 0);


                    args["dt_childEntityColumn"] = dt_childEntityColumn.ToDictionaryArray();




                }
                else if (sender == "loadSheetData")
                {
                    var filename = args.Get("filename").C2Str();
                    var filepath = args.Get("filepath").C2Str();
                    var isLoadWorkBook = loadWorkbook(filename, filepath);
                    if (isLoadWorkBook)
                    {
                        var ent = new ErpEntity("tbl_DIP_configuration", Erp.GetFieldValue("sel_configuration").C2Str(), _cfg);
                        ent.LoadEntity();
                        var entityName = ent["entity_fid"].C2Str();

                        args["dt_ExcelColumn"] = getExcelColumns(args.Get("sheetname").C2Str()).ToDictionaryArray();

                        var ds = getEntityColumn(entityName);
                        var dt_EntityColumn = ds.Tables["dt_entitycolumns"];
                        DataRow dr = dt_EntityColumn.NewRow();
                        dr["text"] = "NA";
                        dr["value"] = "";
                        if (dt_EntityColumn.Rows.Count > 0)
                            dt_EntityColumn.Rows.InsertAt(dr, 0);


                        args["dt_EntityColumn"] = dt_EntityColumn.ToDictionaryArray();
                        args["dt_fieldtype"] = ds.Tables["dt_fieldtype"].ToDictionaryArray();


                    }
                    else
                    {
                        Erp.ShowMessage("Something Went Wrong ! Try Again...");
                    }
                }
                else if (sender == "import")
                {
                    try
                    {
                        //fetching repeater data in json formate and convert it into dictionary sent from client side
                        object obj = args.Get("jsonData");
                        System.Collections.IEnumerable enumerable = obj as System.Collections.IEnumerable;
                        Dictionary<string, string> dic_excelcol_entitycol = new Dictionary<string, string>();
                        Dictionary<string, string> dic_keyval_fidfield = new Dictionary<string, string>();
                        DataTable dt = new DataTable();
                        if (enumerable != null)
                        {
                            foreach (object element in enumerable)
                            {
                                var key = ((System.Collections.Generic.KeyValuePair<string, object>)element).Key.C2Str();
                                var val = ((System.Collections.Generic.KeyValuePair<string, object>)element).Value.C2Str();

                                
                                var arr_val = val.Split('|');
                                if (arr_val.Length >= 2)
                                {
                                    dt.Columns.Add(arr_val[0].C2Str());
                                    dic_keyval_fidfield.Add(arr_val[0],arr_val[1]);
                                    dic_excelcol_entitycol.Add(key, arr_val[0]);
                                }
                                else
                                {
                                    dt.Columns.Add(val);
                                    dic_excelcol_entitycol.Add(key, val);

                                }
                            }
                        }



                        //load configuration
                        var ent = new ErpEntity("tbl_DIP_configuration", Erp.GetFieldValue("sel_configuration").C2Str(), _cfg);
                        ent.LoadEntity();
                        var entityName = ent["entity_fid"].C2Str();
                        var dllName = ent["dllname"].C2Str();
                        var classname = ent["classname"].C2Str();


                        //finding Primary Key OF Table and add colum in dt
                        var sql = @"
--[tbl_pk]
select top 1 FieldName as tbl_pk from tbl_meta_fieldinfo where TableName=@entityName and FieldType='PrimaryKey'
--[tbl_isauto]
SELECT 
    COLUMN_NAME,
    COLUMNPROPERTY(object_id(TABLE_SCHEMA + '.' + TABLE_NAME), COLUMN_NAME, 'IsIdentity') AS IsIdentity
   --, CASE WHEN COLUMNPROPERTY(object_id(TABLE_SCHEMA + '.' + TABLE_NAME), COLUMN_NAME, 'IsIdentity') = 1 THEN 'Yes' ELSE 'No' END AS IsAutoIncrement	
FROM 
    INFORMATION_SCHEMA.COLUMNS
WHERE 
     TABLE_NAME = @entityName and COLUMN_NAME=(select top 1 FieldName from tbl_meta_fieldinfo where TableName=@entityName and FieldType='PrimaryKey')


--[tbl_fieldchecking]
SELECT     
    CASE WHEN EXISTS (SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = @entityName AND COLUMN_NAME = 'createdby_user_fid') THEN '1'ELSE '0'
    END AS iscreatedby_user_fid,
	CASE WHEN EXISTS (SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = @entityName AND COLUMN_NAME = 'createddate') THEN '1' ELSE '0'
    END AS iscreateddate


";
                        string err = "";
                        var ds = Erp.ExecuteSql<DataSet>(sql,
                                                  new Dictionary<string, object>() {
                            { "@entityName", entityName }
                                                  }, out err);

                        string pid = "";
                        if (ds != null && ds.Tables.Count > 0)
                        {
                            if (ds.Tables["tbl_isauto"] != null && ds.Tables["tbl_isauto"].Rows.Count > 0 && !ds.Tables["tbl_isauto"].Rows[0]["IsIdentity"].C2Bool())
                            {
                                pid = ds.Tables["tbl_pk"].Rows[0]["tbl_pk"].C2Str();

                            }  
                        }

                        bool isCreatedDate = ds.Tables["tbl_fieldchecking"].Rows[0]["iscreateddate"].C2Bool();
                        bool iscreatedby_user_fid = ds.Tables["tbl_fieldchecking"].Rows[0]["iscreatedby_user_fid"].C2Bool();



                        if (!Fn.IsEmpty(pid))
                        dt.Columns.Add(pid);
                        dt.Columns.Add("company_fid");
                        if(isCreatedDate)
                        dt.Columns.Add("createdDate");
                        if(iscreatedby_user_fid)
                        dt.Columns.Add("createdBy_User_Fid");



                        var filename = args.Get("filename").C2Str();
                        var filepath = args.Get("filepath").C2Str();
                        var sheetname = args.Get("sheetname").C2Str();
                        var isLoadWorkBook = loadWorkbook(filename, filepath);
                        if (isLoadWorkBook)
                        {
                            Worksheet worksheet = workbook.Worksheets[sheetname];
                            //read the worksheet data and create the DataTable
                            DataTable dt_Data = readWorksheet(worksheet, dt, dic_excelcol_entitycol, pid, isCreatedDate, iscreatedby_user_fid);

                            //Chcking Data Is valid or not 
                            bool isValidDT = validDT(dt_Data, entityName, dic_excelcol_entitycol);




                            if (isValidDT)
                            {
                                //settinf fid values 
                                dt_Data = setFidEntityCoumnsValues(dt_Data, entityName, dic_excelcol_entitycol, dic_keyval_fidfield);

                                if (Fn.IsEmpty(errorList.C2Str()) && Fn.IsEmpty(error))
                                {
                                    var status = writeDataToServer(dt_Data, entityName, dllName, classname) ;
                                    if (!status.IsBlank())
                                    {
                                        error += "\n\n" + status;
                                    }
                                }

                            }

                        }
                        else
                        {
                            Erp.ShowMessage("Something Went Wrong ! Try Again...");
                        }

                    }
                    catch (Exception e)
                    {
                        //error += "\n\n" + e.Message;
                        errorList.Append("  {   \"Row\" : " + C.JsonDataEncode("") + " ,\"type\" : " + C.JsonDataEncode("error") + " , \"Column\" : " + C.JsonDataEncode("") + " , \"Error\" : " + C.JsonDataEncode(e.Message) + " } ,");

                    }

                }
                else if (sender=="entitydata")
                {
                    var ds = getEntityColumn(Erp.GetFieldValue("html_entity_fid").C2Str()==""?args.Get("entityName").C2Str(): Erp.GetFieldValue("html_entity_fid").C2Str());
                    var dt_EntityColumn = ds.Tables["dt_entitycolumns"];
                    DataRow dr = dt_EntityColumn.NewRow();
                    dr["text"] = "NA";
                    dr["value"] = "";
                    if (dt_EntityColumn.Rows.Count > 0)
                        dt_EntityColumn.Rows.InsertAt(dr, 0);
                    args["dt_EntityColumn"] = ds.Tables["dt_entitycolumns"].ToDictionaryArray();
                    args["dt_fieldtype"] = ds.Tables["dt_fieldtype"].ToDictionaryArray();

                    string sql = @"select entity_Pid as value,DisplayName as text from tbl_meta_entities where DisplayName <> '';";

                    string err = "";
                    DataTable result = Erp.ExecuteSql<DataTable>(sql,
                                              new Dictionary<string, object>() {
                            { "@ID", 1 }
                                              }, out err);

                    args["Entity"] = result.ToDictionaryArray();
                }




            }
            catch (Exception e)
            {
                //error += "\n\n" + e.Message;
                errorList.Append("  {   \"Row\" : " + C.JsonDataEncode("") + " ,\"type\" : " + C.JsonDataEncode("error") + " , \"Column\" : " + C.JsonDataEncode("") + " , \"Error\" : " + C.JsonDataEncode(e.Message) + " } ,");
            }

            if (!errorList.IsBlank())
            {

                Erp.ExecuteScript("window.error= [" + errorList.C2Str().TrimEnd(',') + "]");
            }
            else
            {
                Erp.ExecuteScript("window.error= []");

            }
            if (!error.IsBlank())
            {
                args["error"] = error;
            }
        }

        private DataTable getFidEntityColumn(string entityName, string fieldname)
        {
            var sql = @"select fieldname as text , fieldname as value from tbl_meta_fieldinfo where
TableName=(select top 1 LookupTable from tbl_meta_fieldinfo where FieldName=@fieldname and	TableName=@entityName)
and FieldType<>'PrimaryKey'";


            string err = "";
            DataTable dt = Erp.ExecuteSql<DataTable>(sql,
                                      new Dictionary<string, object>() {
                            { "@entityName", entityName },{ "@fieldname",fieldname}
                                      }, out err);



            return dt;
        }


        //this method check table data is valid or not 
        private bool validDT(DataTable dt_Data, string entityName, Dictionary<string, string> dic_excelcol_entitycol)
        {
            bool status = false;

            var sql = @"
--[tbl_mandatory]
select FieldName from tbl_meta_fieldinfo where TableName=@entityName and IsMandatory=1 and FieldType<>'PrimaryKey'
--[tbl_unique]
select FieldName from tbl_meta_fieldinfo where TableName=@entityName and IsUnique=1 and FieldType<>'PrimaryKey'
";

            string err = "";
            DataSet ds = Erp.ExecuteSql<DataSet>(sql,
                                                                      new Dictionary<string, object>() {
                                                          {
                                                            "@entityName", entityName }
                                                                      }
                                                                      , out err);
            var dt_mandatory = new DataTable();
            var dt_unique = new DataTable();
            if (ds != null && ds.Tables.Count > 0)
            {
                dt_mandatory = ds.Tables["tbl_mandatory"];
                dt_unique = ds.Tables["tbl_unique"];
            }
            //checking mandatory fields are empty or not
            if (dt_mandatory != null && dt_mandatory.Rows.Count > 0)
            {

                for (var i = 0; i < dt_mandatory.Rows.Count; i++)
                {
                    var colname = dt_mandatory.Rows[i]["FieldName"].C2Str();
                    //checking the mandatory fileds are present in mapping or not
                    if (dt_Data.Columns.Contains(colname))
                    {
                        //checking mandatory fields are empty or not
                        for (var j = 0; j < dt_Data.Rows.Count; j++)
                        {
                            if (Fn.IsEmpty(dt_Data.Rows[j][colname]))
                            {
                                var excelcolname = dic_excelcol_entitycol.FirstOrDefault(x => x.Value == colname).Key;
                                errorList.Append("  {   \"Row\" : " + C.JsonDataEncode(j + 2) + " ,\"type\" : " + C.JsonDataEncode("mandatory") + " , \"Column\" : " + C.JsonDataEncode(excelcolname) + " , \"Error\" : " + C.JsonDataEncode("Cell Is Empty...") + " } ,");
                            }
                        }

                    }
                    else
                    {
                        errorList.Append("  {   \"Row\" : " + C.JsonDataEncode("") + " ,\"type\" : " + C.JsonDataEncode("error") + " , \"Column\" : " + C.JsonDataEncode("") + " , \"Error\" : " + C.JsonDataEncode(colname + "This Is a Mandatory Column But Not Found In Mapping...") + " } ,");
                    }



                }

            }


            //checking Unique field
            if (dt_unique != null && dt_unique.Rows.Count > 0)
            {

            }





            if (Fn.IsEmpty(errorList))
                status = true;
            return status;
        }


        //this method write thw data to server uising bulkexecute method
        private string writeDataToServer(DataTable dt_Data, string entityName,string dllname,string classname)
        {

            try
            {
                string err; 
                if (!Fn.IsEmpty(dllname) && !Fn.IsEmpty(classname))
                {
                  var dllobject = global::Erp.Base.ScriptInterface.Script.LoadDynamic(dllname, classname, out err);
                    string s = dllobject.preInsert(_app, _cfg, dt_Data);
                    if (!Fn.IsEmpty(s))
                        return "Error In PreInsert Method:" + s;
                        
                }

                using (SqlConnection connection = new SqlConnection(_cfg.ConnString))
                {
                    using (SqlBulkCopy sbc = new SqlBulkCopy(connection, SqlBulkCopyOptions.TableLock, null))
                    {
                        connection.Open();
                        sbc.DestinationTableName = entityName;
                        sbc.BulkCopyTimeout = 0;
                        sbc.BatchSize = 0;
                        foreach (DataColumn dc in dt_Data.Columns)
                        {
                            if (dt_Data.Columns.Contains(dc.ColumnName))
                            {
                                sbc.ColumnMappings.Add(dc.ColumnName.C2Str(), dc.ColumnName.C2Str());
                            }

                        }
                        sbc.WriteToServer(dt_Data);


                    }
                }
                if (!Fn.IsEmpty(dllname) && !Fn.IsEmpty(classname))
                {
                    var dllobject = global::Erp.Base.ScriptInterface.Script.LoadDynamic(dllname, classname, out err);
                    string s = dllobject.postInsert(_app, _cfg, dt_Data);
                    if (!Fn.IsEmpty(s))
                        return "Error In PostInsert Method:" + s;

                }
            }
            catch (Exception e)
            {
                return e.Message;

            }



            return "";
        }

        //this method read excel data Create data table of that data and return it
        private DataTable readWorksheet(Worksheet worksheet, DataTable dt_data, Dictionary<string, string> dic_mapping, string pid ,bool isCreatedDate, bool iscreatedby_user_fid)
        {

            //get used range in worksheet
            CellRange cells = worksheet.GetDataRange();
            int columnCount = worksheet.Columns.LastUsedIndex + 1;
            for (var i = cells.TopRowIndex + 2; i <= cells.BottomRowIndex + 1; i++)
            {
                DataRow dr = dt_data.NewRow();
                for (int columnIndex = 0; columnIndex < columnCount; columnIndex++)
                {
                    Cell cell = worksheet.Cells[i - 1, columnIndex];
                    var excelHead = worksheet.Cells[0, columnIndex].DisplayText.C2Str();
                    if (!Fn.IsEmpty(excelHead))
                    {
                        if (dic_mapping.ContainsKey(excelHead))
                        {
                            var dtHead = dic_mapping[excelHead].C2Str();
                            if (dt_data.Columns.Contains(dtHead.Split('|')[0]))
                            {
                                dr[dtHead.Split('|')[0]] = cell.DisplayText;

                            }
                        }



                    }




                }
                if(!Fn.IsEmpty(pid))
                dr[pid] = Guid.NewGuid();
                dr["company_fid"] = _app.CompanyID;
                if(iscreatedby_user_fid)
                dr["createdBy_User_Fid"] = _app.CurrentUserID;
                if(isCreatedDate)
                dr["createdDate"] = DateTime.Now;
                dt_data.Rows.Add(dr);

            }






            return dt_data;
        }

        //this method returns  the list of all sheets present in excel
        public List<string> getSheets()
        {


            List<string> lst_sheets = new List<string>();

            try
            {
                for (var i = 0; i < workbook.Worksheets.Count; i++)
                {
                    lst_sheets.Add(workbook.Worksheets[i].Name);
                }
                //using (MemoryStream ms = new MemoryStream())
                //{
                //    workbook.SaveDocument(ms, DocumentFormat.Xls);
                //    filebyte = ms.ToArray();
                //}
            }
            catch (Exception e)
            {
                Erp.ShowMessage(e.Message.C2Str(), "error");
                ///errorList.Append("  {   \"Row\" : " + C.JsonDataEncode("") + " ,\"type\" : " + C.JsonDataEncode("error") + " , \"Column\" : " + C.JsonDataEncode("") + " , \"Error\" : " + C.JsonDataEncode(e.Message) + " } ,");
            }


            return lst_sheets;
        }

        //this is common method used for load woorkBook
        public bool loadWorkbook(string name, string path)
        {
            workbook = new Workbook();
            var basepath = Path.Combine(_app.TempDirectory, path);
            var status = false;

            if (name.ToLower().Contains("xlsx"))
            {
                status = workbook.LoadDocument(basepath, DocumentFormat.Xlsx);
            }
            else if (name.ToLower().Contains("xls"))
            {
                status = workbook.LoadDocument(basepath, DocumentFormat.Xls);
            }
            return status;
        }

        //This method returns the dataTable of Excel columns present in given sheet
        public DataTable getExcelColumns(string sheetname)
        {
            Worksheet worksheet = workbook.Worksheets[sheetname];
            DataTable dt = new DataTable();
            dt.Columns.Add("colname");
            for (var i = 0; i <= worksheet.Columns.LastUsedIndex; i++)
            {
                DataRow dr = dt.NewRow();
                Cell cell = worksheet.Cells[0, i];

                if (!Fn.IsEmpty(cell.DisplayText))
                {
                    dr["colname"] = cell.DisplayText;
                    dt.Rows.Add(dr);
                }

            }
            if (dt.Rows.Count <= 0)
            {
                error += "\n\n Column Not Found in Given Excel Sheet At Row Position 1...";


            }
            return dt;
        }

        //this method return the data set of  columns present in Entity and fields type
        public DataSet getEntityColumn(string name)
        {
            var sql = @"
--[dt_entitycolumns]
select fieldname as text , fieldname as value from tbl_meta_fieldinfo where TableName=@Entityname and FieldType<>'PrimaryKey'
--[dt_fieldtype]
select (case when fieldtype ='SingleSelect' and LookupSource='array' then 'Text' else FieldType end) as text , fieldname as value from tbl_meta_fieldinfo where TableName=@Entityname and FieldType<>'PrimaryKey'
";




            //Select COLUMN_NAME as text,COLUMN_NAME as value from INFORMATION_SCHEMA.COLUMNS
            //where TABLE_NAME = @Entityname

            string err = "";
            DataSet ds = Erp.ExecuteSql<DataSet>(sql,
                                                                      new Dictionary<string, object>() {
                                                          {
                                                            "@Entityname", name }
                                                                      }
                                                                      , out err);
            if (ds == null || ds.Tables.Count <= 0 || ds.Tables["dt_entitycolumns"].Rows.Count <= 0)
                error += "\n\n Columns Not Found in Given In Entity...";

            return ds;

        }

        //finding  a Fid Feild values and update in table
        public DataTable setFidEntityCoumnsValues(DataTable dt_data, string entityName, Dictionary<string, string> dic_excelcol_entitycol,Dictionary<string,string> dic_keyval_fidfield)
        {
            try
            {
                //            var sql = @"
                //declare @lookuptablename varchar(max);
                //set @lookuptablename=N'(select LookupTable from tbl_meta_fieldinfo where TableName=@Entityname and LookupSource='table' and FieldType='singleselect')'


                //declare @isFid varchar(max)
                //set @isFid = (select top 1 FieldName from tbl_meta_fieldinfo where TableName = @Entityname and FieldType = 'SingleSelect')
                //if @isFid is not null
                //begin
                //--[tbl_fid]
                //select * from tbl_meta_fieldinfo where TableName = @Entityname and FieldType = 'SingleSelect'
                //  --[tbl_LookupData]
                //select * from @lookuptablename where company_fid = @Users.CompanyID
                //--[tbl_isdiscriptive]
                //select top 1 FieldName from tbl_meta_fieldinfo where TableName=@Entityname

                //end

                //";

                var sql = @"
--[tbl_fid]
declare @isFid varchar(max)
set @isFid = (select top 1 FieldName from tbl_meta_fieldinfo where TableName = @Entityname and FieldType = 'SingleSelect')
if @isFid is not null
begin

select * from tbl_meta_fieldinfo where TableName = @Entityname and FieldType = 'SingleSelect' and LookupSource='table'

end
";


                string err = "";
                DataTable dt2 = Erp.ExecuteSql<DataTable>(sql,
                    new Dictionary<string, object>() {
                                                          {
                                                            "@Entityname", entityName}
                                                                          }
                                                                          , out err);
                DataTable dt_fid = new DataTable();

                if (dt2.Rows.Count > 0)
                {
                    dt_fid = dt2;

                }
                if (dt_fid.Rows.Count > 0)
                {

                    //collecting sql for  all single select tables
                    StringBuilder str_sql = new StringBuilder();
                    for (var j = 0; j < dt_fid.Rows.Count; j++)
                    {
                        if (!dt_data.Columns.Contains(dt_fid.Rows[j]["FieldName"].C2Str()))
                            continue;
                        var lookupTableName = dt_fid.Rows[j]["LookupTable"].C2Str();
                        str_sql.AppendLine("--[tbl_lookup_" + dt_fid.Rows[j]["FieldName"].C2Str() + "]");
                        str_sql.AppendLine(
                            "   select * from " + lookupTableName + "  where company_fid=@Users.CompanyID");

                        str_sql.AppendLine("--[tbl_pid_" + dt_fid.Rows[j]["FieldName"].C2Str() + "]");
                        str_sql.AppendLine(
                            "   select top 1 FieldName from tbl_meta_fieldinfo where TableName = '" + lookupTableName + "' and FieldType = 'PrimaryKey'");
                        str_sql.AppendLine("--[tbl_fid_" + dt_fid.Rows[j]["FieldName"].C2Str() + "]");
                        str_sql.AppendLine("select top 1 FieldName from tbl_meta_fieldinfo where TableName = '" + lookupTableName + "' and IsDescriptive = 1");


                    }

                    DataSet ds_lookupData = Erp.ExecuteSql<DataSet>(str_sql.C2Str(),
                        new Dictionary<string, object>()
                        { }
                                                                              , out err);


                    if (ds_lookupData != null && ds_lookupData.Tables.Count > 0)
                    {
                        for (var j = 0; j < dt_fid.Rows.Count; j++)
                        {
                            if (!dt_data.Columns.Contains(dt_fid.Rows[j]["FieldName"].C2Str()))
                                continue;

                            DataTable dt_lookupData = ds_lookupData.Tables["tbl_lookup_" + dt_fid.Rows[j]["FieldName"]];
                            string pid = ds_lookupData.Tables["tbl_pid_" + dt_fid.Rows[j]["FieldName"]].Rows[0]["FieldName"].C2Str();
                            
                            var val_isdescriptive = ""; 
                            if(dic_keyval_fidfield.ContainsKey(dt_fid.Rows[j]["FieldName"].C2Str()) && !Fn.IsEmpty(dic_keyval_fidfield[dt_fid.Rows[j]["FieldName"].C2Str()]))
                            {
                                val_isdescriptive = dic_keyval_fidfield[dt_fid.Rows[j]["FieldName"].C2Str()];
                            }
                            else 
                            {
                                val_isdescriptive = ds_lookupData.Tables["tbl_fid_" + dt_fid.Rows[j]["FieldName"]].Rows[0]["FieldName"].C2Str();
                            }

                             
                            if (dt_lookupData != null && dt_lookupData.Rows.Count > 0)
                            {
                                for (var i = 0; i < dt_data.Rows.Count; i++)
                                {
                                    //using LINKQ finding the pid from using discriptive field of lookup table 
                                    var val_fid = dt_data.Rows[i][dt_fid.Rows[j]["FieldName"].C2Str()].C2Str();
                                    var dr = dt_lookupData.AsEnumerable()
                                             .Where(
                                        row => row.Field<string>(val_isdescriptive) == val_fid);
                                    //"+dt_data.Rows[i][dt_fid.Rows[j]["FieldName"].C2Str()].C2Str()+"

                                    DataTable dt = new DataTable();
                                    if (dr.Any())
                                    {
                                        dt = dr.CopyToDataTable();
                                    }
                                    var excelcolname = dic_excelcol_entitycol.FirstOrDefault(x => x.Value == dt_fid.Rows[j]["FieldName"].C2Str()).Key;
                                    if (dt == null || dt.Rows.Count <= 0)
                                    {
                                        errorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 2) + " ,\"type\" : " + C.JsonDataEncode("error") + " ,  \"Column\" : " + C.JsonDataEncode(excelcolname) + " , \"Error\" : " + C.JsonDataEncode("'" + dt_data.Rows[i][dt_fid.Rows[j]["FieldName"].C2Str()].C2Str() + "' This Value Not Found In Child Table ") + " } ,");
                                    }
                                    else
                                    {
                                        dt_data.Rows[i][dt_fid.Rows[j]["FieldName"].C2Str()] = dt.Rows[0][pid];
                                    }

                                }
                            }



                        }

                    }



                }

            }
            catch (Exception e)
            {
                error += "\n\n " + e.Message;
            }

            return dt_data;
        }

    }
}