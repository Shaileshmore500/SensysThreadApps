
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
  ApplicationInfo _app; IDBConfiguration _cfg;
  public void Init(ApplicationInfo app, IDBConfiguration cfg)
  {
    _app=app;_cfg=cfg;
    if(Erp.Action=="LOAD")
    {
     
      var sql=@"
      select top 1
tbl_acceptedbymeCount.acceptedbyme,tbl_rejectedbymeCount.rejectedbyme,tbl_pendingCount.pendingapproval,tbl_pendingtoonboardCount.pendingtoonboardCount
from tbl_VA_employeeinformation va
outer apply(
select count(ei.employeeinformation_pid) as acceptedbyme
FROM tbl_VA_employeeinformation ei 
left join tbl_AP_wfprocessinstances on ei.employeeinformation_pid=_recordid      

outer apply (
select top 1  receiverid,action from tbl_AP_wfprocessrecievers where processinstancesfid=wfprocessinstances_pid and receiverid=@Users.UserID 
and isnull(isactiontaken,0)=1 and _recordid=employeeinformation_pid order by createddate desc
) as r
where
r.action ='Accept' 
and r.receiverid=@Users.UserID 
and ei.company_fid=@Users.CompanyID 
) as tbl_acceptedbymeCount


outer apply(
select count(ei.employeeinformation_pid) as rejectedbyme
FROM tbl_VA_employeeinformation ei 
left join tbl_AP_wfprocessinstances on ei.employeeinformation_pid=_recordid      
--left join tbl_AP_wfprocessrecievers r  on wfprocessinstances_pid=r.processinstancesfid
outer apply (
select top 1  receiverid,action from tbl_AP_wfprocessrecievers where processinstancesfid=wfprocessinstances_pid and receiverid=@Users.UserID 
and isnull(isactiontaken,0)=1 and _recordid=employeeinformation_pid order by createddate desc
) as r

where
r.action ='Reject' 
and r.receiverid=@Users.UserID 
and ei.company_fid=@Users.CompanyID 
) as tbl_rejectedbymeCount

outer apply(
select count(ei.employeeinformation_pid) as pendingapproval
FROM tbl_VA_employeeinformation ei 
left join tbl_AP_wfprocessinstances  on _recordid = ei.employeeinformation_pid
left join tbl_AP_wfprocessmovement on wfprocessmovement_pid = tbl_AP_wfprocessinstances.currentmovementfid
left join tbl_AP_wfprocessrecievers on processmovementfid = tbl_AP_wfprocessinstances.currentmovementfid 
and tbl_AP_wfprocessrecievers.processinstancesfid = wfprocessinstances_pid
where
tbl_AP_wfprocessmovement.action = 'submit'
AND tbl_AP_wfprocessrecievers.[receiverid]= @Users.UserID
) as tbl_pendingCount

outer apply(
select count(ei.employeeinformation_pid) as pendingtoonboardCount
FROM tbl_VA_employeeinformation ei 
left join tbl_AP_wfprocessinstances  on _recordid = ei.employeeinformation_pid
--left join tbl_AP_wfprocessmovement on wfprocessmovement_pid = tbl_AP_wfprocessinstances.currentmovementfid
--left join tbl_AP_wfprocessrecievers on processmovementfid = tbl_AP_wfprocessinstances.currentmovementfid 
--and tbl_AP_wfprocessrecievers.processinstancesfid = wfprocessinstances_pid
where
isnull(tbl_AP_wfprocessinstances.isfinalaccept,0)=1 and isnull(ei.isempdataposted,0)=0 and ei.[currentstatus] <> 'Cancelled' 
and ei.createdBy_User_Fid=@Users.UserID
--AND tbl_AP_wfprocessrecievers.[receiverid]= @Users.UserID
) as tbl_pendingtoonboardCount
";
      
      
string err="";
var dt=Erp.ExecuteSql<DataTable>(sql,
                          new Dictionary<string, object>() { 
                            { "@ID", 1 }
                          },out err);
      //arr_ppCounter
Erp.ExecuteScript("arr_ppCounter=["+dt.ToJSON()+"]");
      
      BarGraph("");
  getYearData();
      
      
      
      
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
     BarGraph(args.Get("getyear").C2Str());
  }
  
   
  public void BarGraph(string year)
  {
    if(year=="")
    {
       year=DateTime.Now.Year.C2Str();
    }
    
    string sql= "";
    sql=@"
    --[tbl_VA_employeeinformation]
    
  DECLARE @SelectedYear INT = "+year+@";

WITH Months AS (
    SELECT 1 AS month, @SelectedYear AS year UNION ALL
    SELECT 2, @SelectedYear UNION ALL
    SELECT 3, @SelectedYear UNION ALL
    SELECT 4, @SelectedYear UNION ALL
    SELECT 5, @SelectedYear UNION ALL
    SELECT 6, @SelectedYear UNION ALL
    SELECT 7, @SelectedYear UNION ALL
    SELECT 8, @SelectedYear UNION ALL
    SELECT 9, @SelectedYear UNION ALL
    SELECT 10, @SelectedYear UNION ALL
    SELECT 11, @SelectedYear UNION ALL
    SELECT 12, @SelectedYear
)
-- Query to get the count of employees grouped by month
SELECT 
    m.year,
    m.month,
    ISNULL(COUNT(e.posteddate), 0) AS count_of_employees
FROM 
    Months m
LEFT JOIN 
    tbl_VA_employeeinformation e
    ON YEAR(e.posteddate) = m.year AND MONTH(e.posteddate) = m.month
GROUP BY 
    m.year, m.month
ORDER BY 
    m.year, m.month

    ";
   string err="";
    DataSet ds=Erp.ExecuteSql<DataSet>(sql,
               new Dictionary<string, object>() { 
                 { "@ID", "123" }
               },out err);
 
if(ds.Tables[0].Rows.Count>0)
        Erp.ExecuteScript("barGraph="+ds.Tables[0].ToJSON("","","",true,true)+"");
    else
      	Erp.ExecuteScript("barGraph=[]");
      

  }
  
  public void getYearData(){

      string sql=@"SELECT YEAR(posteddate) AS application_year FROM tbl_VA_employeeinformation GROUP BY YEAR(posteddate)";  
    string err="";
var dt=Erp.ExecuteSql<DataTable>(sql,
               new Dictionary<string, object>() { 
                 { "@ID", "123" }
               },out err);
                 Erp.ExecuteScript("years="+dt.ToJSON("","","",true,true)+"");

  }
  
  
}

//Dll Directory:E:\Shailesh\Thread Apps\CodeBase