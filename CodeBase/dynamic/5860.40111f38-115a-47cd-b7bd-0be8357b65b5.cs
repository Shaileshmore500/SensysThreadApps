
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
 
    
       
   // Erp.ShowMessage(getyear,"alert");


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

      string sql=@"SELECT YEAR(applicationdate) AS application_year FROM tbl_VA_employeeinformation GROUP BY YEAR(applicationdate)";  
    string err="";
var dt=Erp.ExecuteSql<DataTable>(sql,
               new Dictionary<string, object>() { 
                 { "@ID", "123" }
               },out err);
                 Erp.ExecuteScript("years="+dt.ToJSON("","","",true,true)+"");

  }
 
}

//Dll Directory:E:\Shailesh\Thread Apps\CodeBase