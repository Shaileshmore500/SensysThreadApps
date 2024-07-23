
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


//using App_Va.Apps.App_Va.VacancyHelper;

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
      Debugger.Break();
      
     // VacancyHelper vacancyHelper = new VacancyHelper();
     string err="";
     var VacancyHelper = global::Erp.Base.ScriptInterface.Script.LoadDynamic("APP_VA.DLL", "App_Va.Apps.App_Va.VacancyHelper", out err);
      dt_configuration = VacancyHelper.getConfiguration(Erp);
      
      
      if (Erp.Action == "LOAD" && Erp.FormCode == "Layout_SearchForOnBoardin")
                {
                    if (dt_configuration!= null && dt_configuration.Rows.Count > 0 && !Fn.IsEmpty(dt_configuration.Rows[0]["layoutid"].C2Str()))
                        Erp.SetParam("window", "LayoutID", dt_configuration.Rows[0]["layoutid"].C2Str());
                    else
                        Erp.SetParam("window", "LayoutID", Fn.CStr(Settings.Appsettings["employeeinfoformtag"]));
        
        
      //Debugger.Break();
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
    if(htmlId=="dgData")
    {
      //Debugger.Break();
    }
  }
  public bool OnGridCommand(ref string sql, string htmlId, string command, Dictionary<string, object> args)
  {
    if(htmlId=="dgData")
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
    if(error.IsBlank())
    {
      //Debugger.Break();
    }
  }
  public void ExecuteCommand(string sender, Dictionary<string, object> args)
  {
    if(sender=="getData")
    {
    
    
    var _sql=@"select isfinalaccept,m.action,m.level,r.isactiontaken,u.username,isnull(p.positioncode,'') as positioncode,isnull(e.firstname,'') as firstname,isnull(e.personalmobilenumber,'') as personalmobilenumber,isnull(e.aadhaarcardno,'') as aadhaarcardno,isnull(e.pancardno,'') as pancardno from tbl_AP_wfprocessinstances 
left join tbl_AP_wfprocessmovement m on currentmovementfid=m.wfprocessmovement_pid
left join tbl_AP_wfprocessrecievers r  on currentmovementfid=r.processmovementfid
left join tbl_sys_users u on receiverid=Users_Pid
left join tbl_VA_employeeinformation e on _recordid=e.employeeinformation_pid
left join tbl_TP_positioncode p on e.position_fid=p.positioncode_pid
where _recordid=@ID";
      
      
      string err="";
    DataTable result=Erp.ExecuteSql<DataTable>(_sql,
                                               new Dictionary<string, object>() {
                                                 {
                                                   "@ID", args.Get("ID").C2Str() },
                                                   
                                               }
                                               ,out err); 
    if(result.Rows.Count>0)
      args["data"] = result.ToDictionaryArray();    
    else
      args["data"] ="";
      
      
      
      
      
      
      
      
      
    
    }
    else
    {
    
    
    string Aadhar = args.Get("aadhar").C2Str().Trim();
    string Pan = args.Get("pan").C2Str().Trim();
    string mobile = args.Get("mobile").C2Str().Trim();
    string sql = @"select kyc_number,pan,employee_pid,employeegroupcode as employeeuniquecode,employeeothermaster9name as LOC,employeecode as empID, branchname as presentbranch,designationname as presentdesignation,dateofexit,ticketno from tbl_employee
left join tbl_employeeothermaster9 on employeeothermaster9_fid=employeeothermaster9_pid
left join tbl_designation on designation_fid=designation_pid
left join tbl_branch on branch_fid=branch_pid
left join tbl_employee_kyc on employee_fid=employee_pid
where  (kyc_type='A' and (CASE WHEN ISNULL(@Aadhar, '') <> '' THEN kyc_number ELSE '1' END)
=(CASE WHEN ISNULL(@Aadhar, '') <> '' THEN @Aadhar ELSE '01' end)) or
(CASE WHEN ISNULL(@Pan, '') <> '' THEN pan ELSE '1' END)
=(CASE WHEN ISNULL(@Pan, '') <> '' THEN @Pan ELSE '01' end) 
--or (CASE WHEN ISNULL(@mobile, '') <> '' THEN mobile ELSE '1' END)=(CASE WHEN ISNULL(@mobile, '') <> '' THEN @mobile ELSE '01' end)

";
    string err="";
    DataTable result=Erp.ExecuteSql<DataTable>(sql,
                                               new Dictionary<string, object>() {
                                                 {
                                                   "@ID", 1 },
                                                   {
                                                   "@Aadhar", Aadhar },
                                                 {
                                                   "@Pan", Pan },
                                                 {
                                                   "@mobile", mobile }
                                               }
                                               ,out err); 
    if(result.Rows.Count>0)
    {
      args["EmployeeID"] = result.ToDictionaryArray();
    }
    else
      args["EmployeeID"] ="";
    /*
if(!Fn.IsEmpty(result))
{
args["EmployeeID"] = result.ToDictionaryArray();
}
else
{
Erp.ShowMessage("EmployeeID Not Found!","error");
return;
}*/
  }
}
}

//Dll Directory:E:\Shailesh\Thread Apps\CodeBase