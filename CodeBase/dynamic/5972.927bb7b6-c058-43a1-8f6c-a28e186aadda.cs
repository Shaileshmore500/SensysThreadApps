
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
  DataTable dt_configuration = new DataTable();
  public void Init(ApplicationInfo app, IDBConfiguration cfg)
  {
    _app=app;
    _cfg=cfg;
    if(Erp.Action=="LOAD")
    {
      
           string err="";
     var VacancyHelper = global::Erp.Base.ScriptInterface.Script.LoadDynamic("APP_VA.DLL", "App_Va.Apps.App_Va.VacancyHelper", out err);
      dt_configuration = VacancyHelper.getConfiguration(Erp);    
                    if (dt_configuration.Rows.Count > 0 && !Fn.IsEmpty(dt_configuration.Rows[0]["layoutid"].C2Str()))
                        Erp.SetParam("window", "LayoutID", dt_configuration.Rows[0]["layoutid"].C2Str());
                    else
                        Erp.SetParam("window", "LayoutID", Fn.CStr(Settings.Appsettings["employeeinfoformtag"]));
/*      try{
        if(!Fn.IsEmpty(User.Rel("hiringlocation_fid")["location_fc"].C2Str()))     
          Erp.SetParam("window","LayoutID",User.Rel("hiringlocation_fid")["location_fc"].C2Str());
        else
          Erp.SetParam("window","LayoutID",Fn.CStr(Settings.Appsettings["employeeinfoformtag"]));
      }
      catch(Exception e)
      {
        Erp.SetParam("window","LayoutID",Fn.CStr(Settings.Appsettings["employeeinfoformtag"]));
      }*/
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
    
    if(htmlId=="btn_edit" &&  Erp.GetParam("window","LayoutID").C2Str()!="Layout_Employeeinformation_madhavbaug" && Erp.GetProp("mode").C2Str()!="CR")
    return true;
    
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
  }
  public void ExecuteCommand(string sender, Dictionary<string, object> args)
  {
    Debugger.Break();
    string emprec=args.Get("emprec").C2Str();
    string companyID=args.Get("companyid").C2Str();
    string err="";
    string result=Erp.ExecuteSql<string>("exec USP_AddEmployee @ID,@CompanyID ",
                                         new Dictionary<string, object>() {
                                           {
                                             "@ID",emprec }
                                           ,{
                                             "@companyID",companyID}
                                         }
                                         ,out err);
    if(Fn.IsEmpty(err))
      Erp.ShowMessage("Employee data posted Successfully","success");
    else
      Erp.ShowMessage(err,"error");
    
  }
}

//Dll Directory:E:\Shailesh\Thread Apps\CodeBase