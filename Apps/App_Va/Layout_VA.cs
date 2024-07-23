using Erp.Base.ScriptInterface;
using ErpModel.Core;
using Erp.Common;
using HelperLib.DAL;
using HelperLib.Extensions;
using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Hosting;
using System.Web.UI.WebControls;
using System.Xml;

namespace App_Va.Apps.App_Va
{
    public class Layout_VA : ImplEntityScript, IEntityScript
    {
        Erp.Common.ApplicationInfo _app; IDBConfiguration _cfg;
        Dictionary<string, string> dic_data = new Dictionary<string, string>();
        Dictionary<string, bool> dic_hideControl = new Dictionary<string, bool>();
        Dictionary<string, bool> dic_mandatory = new Dictionary<string, bool>();
        Dictionary<string, string> dic_titles = new Dictionary<string, string>();
        Dictionary<string, string> dic_validationregex = new Dictionary<string, string>();
        public void Init(Erp.Common.ApplicationInfo app, IDBConfiguration cfg)
        {

            _app = app; _cfg = cfg;
            if (Erp.Action == "LOAD")
            {


                string err = "";
                var dt = Erp.ExecuteSql<DataTable>("select * from tbl_VA_configdetails where company_fid=@Users.CompanyID",
                                          new Dictionary<string, object>() {
                            { "@ID", 1 }
                                          }, out err);

                if (dt != null && dt.Rows.Count > 0)
                {
                    foreach (DataRow dr in dt.Rows)
                    {
                        string str_attr = dr["fieldlabel"].C2Str() != "" ? " data-title=" + dr["fieldlabel"].C2Str() : "";
                        str_attr += dr["isvisible"].C2Bool() ? " data-visibility=true" : " data-visibility=false";
                        str_attr += dr["validationregex"].C2Str() != "" ? " data-validation=" + dr["validationregex"].C2Str() : "";
                        str_attr += dr["validationerrormessage"].C2Str() != "" ? " data-error-message=" + dr["validationerrormessage"].C2Str() : "";
                        str_attr += dr["ismandatory"].C2Bool() ? " data-mandatory=true" : " data-mandatory=false";
                        str_attr += " data-modified";
                        //str_attr += dr["dataproperty"].C2Str() != "" ? " data-property=" + dr["dataproperty"].C2Str() : "";

                        dic_hideControl.Add(dr["htmlid"].C2Str(), dr["isvisible"].C2Bool());
                        dic_mandatory.Add(dr["htmlid"].C2Str(), dr["ismandatory"].C2Bool());
                        dic_data.Add(dr["htmlid"].C2Str(), str_attr);
                        if (!Fn.IsEmpty(dr["fieldlabel"].C2Str()))
                            dic_titles.Add(dr["htmlid"].C2Str(), dr["fieldlabel"].C2Str());
                        if (!Fn.IsEmpty(dr["validationregex"].C2Str()))
                            dic_validationregex.Add(dr["htmlid"].C2Str(), dr["validationregex"].C2Str());


                    }
                }





            }
        }
        public bool DisableGlobalScripts()
        {
            return false;
        }

        public bool IsReadOnly()
        {
            return false;
        }

        public void GetGridSql(ref string sql, string htmlId, XmlNode node, XmlNode relNode)
        {
            if (htmlId == "dgData")
            {
                //Debugger.Break();
            }
        }

        public bool OnGridCommand(ref string sql, string htmlId, string command, Dictionary<string, object> args)
        {
            if (htmlId == "dgData")
            {
                //Debugger.Break();
            }
            return true;
        }

        public void ReadFieldValue(ref object value, string htmlId, string fieldName)
        {
        }

        public bool HideControl(string htmlId, string fieldName)
        {
            if (Erp.GetProp("mode").C2Str() != "config")
            {
                if (dic_hideControl.ContainsKey(htmlId) && Erp.GetProp("mode").ToString() != "config")
                    return dic_hideControl[htmlId];
            }
            return false;
        }

        public bool DisableControl(string htmlId, string fieldName)
        {
            return false;
        }

        public bool CannotViewControl(string htmlId, string fieldName)
        {
            return false;
        }

        public bool ControlCreating(string htmlId, XmlNode node)
        {
            //node.Attributes["Attributes"].Value = "[mandatory2=true]";
            //if (htmlId.StartsWith("Text"))
            //{
            //    XmlAttribute attr = node.OwnerDocument.CreateAttribute("Mandatory");
            //    attr.Value = "true";
            //    node.Attributes.SetNamedItem(attr);
            //    node.Attributes["Mandatory"].Value = "true";
            //}



            if (Erp.GetProp("mode").C2Str() == "config")
            {
                //pushing attribute For Rerender the configuration
                if (dic_data.ContainsKey(htmlId))
                {
                    if (node.Attributes["Attributes"] != null)
                        node.Attributes["Attributes"].Value += dic_data[htmlId];
                    else
                    {
                        XmlAttribute attr = node.OwnerDocument.CreateAttribute("Attributes");
                        attr.Value = dic_mandatory[htmlId].C2Str();
                        node.Attributes.SetNamedItem(attr);
                    }
                }


            }
            else
            {
                //pushing mandatory attribute value 
                if (dic_mandatory.ContainsKey(htmlId))
                {
                    if (node.Attributes["Mandatory"] != null)
                        node.Attributes["Mandatory"].Value = dic_mandatory[htmlId].C2Str();
                    else
                    {
                        XmlAttribute attr = node.OwnerDocument.CreateAttribute("Mandatory");
                        attr.Value = dic_mandatory[htmlId].C2Str();
                        node.Attributes.SetNamedItem(attr);
                    }
                }
                if(dic_validationregex.ContainsKey(htmlId))
                {

                    if(node.Attributes["OnValid"]!=null)
                    node.Attributes["OnValid"].Value = "Fields_valid";
                    else
                    {
                        XmlAttribute attr = node.OwnerDocument.CreateAttribute("OnValid");
                        attr.Value = "Fields_valid";
                        node.Attributes.SetNamedItem(attr);
                    }

                }

            }

            #region Pushing Labels
            //Pushing Fields Label
            if (htmlId.StartsWith("Label"))
            {
                var _id = htmlId.Split('_').Length == 2 ? "Field_" + htmlId.Split('_')[1].C2Str() : htmlId;
                if (dic_titles.ContainsKey(_id) && !Fn.IsEmpty(dic_titles[_id].C2Str()))
                    node.Attributes["Label"].Value = dic_titles[_id];
            }
            //Pushing Panel Label
            if (htmlId.StartsWith("Panel_"))
            {
                var _id = htmlId.Split('_').Length == 2 ? "Panel_" + htmlId.Split('_')[1].C2Str() : htmlId;
                if (dic_titles.ContainsKey(_id) && !Fn.IsEmpty(dic_titles[_id].C2Str()))
                    node.Attributes["Label"].Value = dic_titles[_id];

            }
            #endregion




            return true;
        }

        public void ControlCreated(WebControl control)
        {

        }

        public void LayoutCreated(IEntityRenderer renderer)
        {
        }

        public bool OnRepeaterSaving(string repeaterId, List<ErpEntity> entList)
        {
            return true;
        }

        public void OnRepeaterSaved(string repeaterId, List<ErpEntity> entList)
        {

        }

        public bool OnRepeaterItemSaving(string repeaterId, ErpEntity e, List<ErpEntity> entList)
        {
            return true;
        }

        public bool OnEntitySaving()
        {
            return true;
        }

        public void OnEntitySaved(string error)
        {
            if (error.IsBlank())
            {
                //Debugger.Break();
            }
        }

        public void ExecuteCommand(string sender, Dictionary<string, object> args)
        {
            try
            {



                if (sender == "saveconfig")
                {

                    string err = "";

                    //finding config IF-EXIST else Creating
                    var configGUID = Erp.ExecuteSql<string>(@"
declare @configID nvarchar(max);
set @configID = (select configuration_pid from tbl_VA_configuration where company_fid=@Users.CompanyID)
if(isnull(@configID,'')='' )
begin
 set @configID = newid()
insert into tbl_VA_configuration(configuration_pid,configurationname,company_fid)
values(@configID,(select CompanyName from tbl_core_company where Company_Pid=@Users.CompanyID),@Users.CompanyID);
select @configID
end
else
begin
select @configID
end
",
                          new Dictionary<string, object>() {
                            { "@ID", 1 }
                          }, out err);








                    //DataTable for Strore Configuration Details 
                    DataTable dt = new DataTable();
                    dt.Columns.Add("configdetails_pid");
                    dt.Columns.Add("fieldlabel");
                    dt.Columns.Add("isvisible", typeof(bool));
                    dt.Columns.Add("ismandatory", typeof(bool));
                    dt.Columns.Add("validationregex");
                    dt.Columns.Add("validationerrormessage");
                    //dt.Columns.Add("dataproperty");
                    dt.Columns.Add("htmlid");
                    dt.Columns.Add("company_fid");
                    dt.Columns.Add("config_fid");
                    Dictionary<string, string> dic_datatype = new Dictionary<string, string>{
                        { "configdetails_pid","string"},
                        { "fieldlabel","string"},
                        {"isvisible","bool" },
                        {"ismandatory","bool" },
                        { "validationregex","string"},
                        { "validationerrormessage","string"},
                        //{ "dataproperty","string"},
                        { "htmlid","string"}
                    };

                    IEnumerable enumerable = args.Get("data") as IEnumerable;
                    foreach (var elem in enumerable)
                    {
                        DataRow dr = dt.NewRow();
                        dr["configdetails_pid"] = Guid.NewGuid();
                        dr["company_fid"] = _app.CompanyID;
                        dr["config_fid"] = configGUID;
                        foreach (var keyvalue in (Dictionary<string, object>)elem)
                        {
                            if (dic_datatype.ContainsKey(keyvalue.Key))
                            {
                                switch (dic_datatype[keyvalue.Key])
                                {
                                    case "string":
                                        dr[keyvalue.Key] = keyvalue.Value.ToString();
                                        break;
                                    case "bool":
                                        dr[keyvalue.Key] = keyvalue.Value.ToString() == "" ? false : bool.Parse(keyvalue.Value.ToString());
                                        break;
                                    default:
                                        dr[keyvalue.Key] = keyvalue.Value;
                                        break;
                                }

                            }
                            else
                                dr[keyvalue.Key] = keyvalue.Value;
                        }
                        dt.Rows.Add(dr);
                    }

                    //delete insert configuration Details 
                    if (dt != null && dt.Rows.Count > 0)
                    {
                        using (System.Data.SqlClient.SqlConnection con = new System.Data.SqlClient.SqlConnection(_cfg.ConnString))
                        {
                            using (System.Data.SqlClient.SqlBulkCopy sbc = new System.Data.SqlClient.SqlBulkCopy(con))
                            {
                                con.Open();
                                sbc.DestinationTableName = "tbl_VA_configdetails";
                                foreach (DataColumn dc in dt.Columns)
                                {
                                    sbc.ColumnMappings.Add(dc.ColumnName.ToString(), dc.ColumnName.ToString());
                                }
                                var result = Erp.ExecuteSql<string>(@"
delete from tbl_VA_configdetails where config_fid=@configid
",
                    new Dictionary<string, object>() {
                            { "@configid", configGUID }
                    }, out err);

                                sbc.WriteToServer(dt);
                            }
                        }

                    }



                }

            }
            catch (Exception e)
            {
                Erp.ShowMessage(e.Message, "alert");
            }
        }
    }

}