
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


public class TaskScript : ImplTaskScript, ITaskScript
{
  public void Init(ApplicationInfo app, IDBConfiguration cfg, Dictionary<string, object> taskInfo, string arg)
  {
    Debugger.Break();
  Erp.Base.ScriptInterface.ErpScriptObject _erp = new Erp.Base.ScriptInterface.ErpScriptObject(app, cfg);
    string ids = taskInfo["QS:ID"].C2Str();
    string mode = taskInfo["QS:mode"].C2Str();
    
    
    
    
    
var ent = new ErpEntity("tbl_VA_employeeinformation",ids, cfg);
ent.LoadEntity();
ent.LoadEntity("currentstatus");
//ent.LazyLoadEntity();//Data will be loaded only when first field is accessed.

    
    
    
    
    
    /* var LayoutID="";
    
     try{
        if(!Fn.IsEmpty(User.Rel("hiringlocation_fid")["location_fc"].C2Str()))     
          LayoutID=User.Rel("hiringlocation_fid")["location_fc"].C2Str();
        else
          LayoutID=Settings.Appsettings["employeeinfoformtag"].C2Str();
      }
      catch(Exception e)
      {
        LayoutID=Settings.Appsettings["employeeinfoformtag"].C2Str();
      }*/
    
 string FormCode = taskInfo["QS:FormCode"].C2Str();
    if(Fn.IsEmpty(FormCode))
      FormCode = "Layout_Employeeinfo_hrms_Copy";

    //HttpContext.Current.Server.Transfer("~/main/main.aspx?1&EID=tbl_VA_employeeinformation&_fc=" + FormCode + "&mode=" + mode + "&_pt=E&_notools=1&_notitle=1&_ns=1&_theme=orangeDarkTheme&&ID=" + ids);
    
    if(ent["currentstatus"].ToString()!="Cancelled")    
    HttpContext.Current.Server.Transfer("~/main/main.aspx?1&EID=tbl_VA_employeeinformation&_fc="+FormCode+"&mode=" + mode + "&_pt=E&_notools=1&_notitle=1&_ns=1&_theme=orangeDarkTheme&&ID=" + ids);
 
  
  }
  
  public  Dictionary<string, object> Execute()
  {
    Dictionary<string, object> newdic= new Dictionary<string, object>();
    newdic["KeepSession"]=true;
    return newdic;
  }
}

//Dll Directory:E:\Shailesh\Thread Apps\CodeBase