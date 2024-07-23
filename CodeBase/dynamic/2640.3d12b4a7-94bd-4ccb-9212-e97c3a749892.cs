
using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.UI.WebControls;
using System.Xml;
using DevExpress.XtraPrinting;
using DevExpress.XtraReports.UI;
using DevExpress.XtraRichEdit;
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


public class EntityScript : ImplEntityScript, IEntityScript
{
  ApplicationInfo _app;
  IDBConfiguration _cfg;
  DataTable dt_configuration =new DataTable();
  public void Init(ApplicationInfo app, IDBConfiguration cfg)
  {
    _app=app;
    _cfg=cfg;
    
    if(Erp.Action=="LOAD")
    {
      Debugger.Break();
      /*      Debugger.Break();
try{
if(!Fn.IsEmpty(User.Rel("hiringlocation_fid")["location_fc"].C2Str()))  
{
Erp.SetParam("window","LayoutID",User.Rel("hiringlocation_fid")["location_fc"].C2Str());
}
else
{
Erp.SetParam("window","LayoutID",Fn.CStr(Settings.Appsettings["employeeinfoformtag"]));
}
}
catch(Exception e)
{
Erp.SetParam("window","LayoutID",Fn.CStr(Settings.Appsettings["employeeinfoformtag"]));
}*/
      Debugger.Break();
      // VacancyHelper vacancyHelper = new VacancyHelper();
      string err="";
      var VacancyHelper = global::Erp.Base.ScriptInterface.Script.LoadDynamic("APP_VA.DLL", "App_Va.Apps.App_Va.VacancyHelper", out err);
      dt_configuration = VacancyHelper.getConfiguration(Erp);
      if (Erp.Action == "LOAD" && Erp.FormCode == "layout_Post_Info")
      {
        if (dt_configuration.Rows.Count > 0)
        {
          if(!Fn.IsEmpty(dt_configuration.Rows[0]["layoutid"].C2Str()))
            Erp.SetParam("window", "LayoutID", dt_configuration.Rows[0]["layoutid"].C2Str());
          if(!Fn.IsEmpty(dt_configuration.Rows[0]["joiningwithindays"].C2Str()))
            Erp.SetParam("window", "JoiningWithinDays", dt_configuration.Rows[0]["joiningwithindays"].C2Str());
        }
        else
          Erp.SetParam("window", "LayoutID", Fn.CStr(Settings.Appsettings["employeeinfoformtag"]));
        //Debugger.Break();
      }
    }
  }
  public bool IsReadOnly()
  {
    return false;
  }
  public void GetGridSql(ref string sql, string htmlId, XmlNode node, XmlNode relNode)
  {
  }
  public void ReadFieldValue(ref object value, string htmlId, string fieldName)
  {
  }
  public bool HideControl(string htmlId, string fieldName)
  {
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
    return true;
  }
  public void ControlCreated(WebControl control)
  {
  }
  public void LayoutCreated(IEntityRenderer renderer)
  {
  }
  public bool OnEntitySaving()
  {
    return true;
  }
  public void OnEntitySaved(string error)
  {
    Debugger.Break();
    string err="";
    string result=Erp.ExecuteSql<string>("exec USP_AddEmployee @ID,@CompanyID ",
                                         new Dictionary<string, object>() {
                                           {
                                             "@ID",Erp.RecordID }
                                           ,{
                                             "@companyID",_app.CompanyID}
                                         }
                                         ,out err);
    if(Fn.IsEmpty(err))
    {
   
      var VacancyHelper = global::Erp.Base.ScriptInterface.Script.LoadDynamic("APP_VA.DLL", "App_Va.Apps.App_Va.VacancyHelper", out err);
      dt_configuration = VacancyHelper.getConfiguration(Erp);
      Erp.ShowMessage("Employee data posted Successfully","success");
      //string FormCode = "";
      // Fn.CStr(Settings.Appsettings["employeeinfoformtag"]);
     /* if (dt_configuration.Rows.Count > 0 && !Fn.IsEmpty(dt_configuration.Rows[0]["layoutid"].C2Str()))
        FormCode = dt_configuration.Rows[0]["layoutid"].C2Str();
      else
        FormCode = Settings.Appsettings["employeeinfoformtag"].C2Str();*/
      
      if (dt_configuration != null && dt_configuration.Rows.Count > 0  && dt_configuration.Rows[0]["enableconfirmationmail"].C2Bool() && !Fn.IsEmpty(dt_configuration.Rows[0]["confirmationemailtemplateid"].C2Str()))
      {
        var str_emails = Erp.GetFieldValue("html_emailaddress").C2Str()+","+Erp.GetFieldValue("html_campusemail").C2Str();
        var emailstatus = Erp.SendMail(new Dictionary<string, object>()
                                       {
                                         {
                                           "UserID",""}
                                         ,
                                         {
                                           "RecordID",Erp.RecordID}
                                         ,
                                         {
                                           "EmailConfigCode","default"}
                                         ,
                                         {
                                           "EntityID","tbl_VA_employeeinformation"}
                                         ,
                                         {
                                           "TemplateID",dt_configuration.Rows[0]["confirmationemailtemplateid"].C2Str()}
                                         ,
                                         {
                                           "EmailSubject","Employee On-Boarding Form"}
                                         ,
                                         {
                                           "EmailTo",str_emails.TrimEnd(',')}
                                         ,
                                           {
                                      "TOKEN:username",Erp.GetFieldValue("html_aadhaarname").C2Str()
                                        
                                    }
                                    ,
                                         {
                                           "ForceSend",true}
                                         ,{
                                           "DoNotDeleteAttachment",true}
                                       }
                                      );
      }
    }
    else
    {
      Erp.ShowMessage(err,"error");
    }
  }
  public void ExecuteCommand(string sender, Dictionary<string, object> args)
  {
  }
}

//Dll Directory:E:\Shailesh\Thread Apps\CodeBase