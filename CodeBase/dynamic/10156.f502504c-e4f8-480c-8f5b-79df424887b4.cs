
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


/**/
public class EntityScript : ImplEntityScript, IEntityScript
{
  ApplicationInfo _app; IDBConfiguration _cfg;
  string idsstring="";
  public void Init(ApplicationInfo app, IDBConfiguration cfg)
  {
    _app=app;_cfg=cfg;
    Debugger.Break();
    //if(Erp.Action=="LOAD")
    {
          var sql=@"select positioncode_pid,''as totalposition,'' as cnt from tbl_TP_positioncode where positionaction_fid='open'
union all
Select e.position_fid,count(e.position_fid) as totalposition,livecount+exitcount as cnt from tbl_employee as e 

 left join (
Select position_fid,count(position_fid) as livecount from tbl_employee where position_fid is not null and dateofexit is null
group by position_fid ) as live on live.position_fid=e.position_fid

 left join (
Select position_fid,count(position_fid) as exitcount  from tbl_employee where position_fid is not null and dateofexit is not null
group by position_fid
) as exit1  on exit1.position_fid=e.position_fid

where e.position_fid is not null
group by e.position_fid,livecount,exitcount
having  count(e.position_fid)<>isnull((livecount+exitcount),0)";
      
      
      
string err="";
var dt=Erp.ExecuteSql<DataTable>(sql,
                          new Dictionary<string, object>() { 
                            { "@ID", 1 }
                          },out err);
      
      
      if(dt!=null && dt.Rows.Count>0)
      {
        foreach(DataRow dr in dt.Rows)
        {
          if(!Fn.IsEmpty(dr["positioncode_pid"].ToString()))
            idsstring+="'"+dr["positioncode_pid"].ToString()+"',";              
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
    
     string err="";
    string cond=Erp.GetParam("window","search").C2Str();
    string sql=@"select
--fields
<#
tbl_tp_positioncode.[positioncode_pid] as [tbl_tp_positioncode_positioncode_pid],tbl_tp_positioncode.[positioncode_pid] as [positioncode_pid],
tbl_tp_positioncode.[positioncode] as [positioncode],
tbl_tp_positioncode.[createddate] as [createddate],
tbl_tp_positioncode.[ctcfromrange] as [ctcfromrange],
tbl_tp_positioncode.[ctctorange] as [ctctorange],
tbl_branch_fid.[branchcode] as [branchcode],
tbl_branch_fid.[branchname] as [branchname],
tbl_positionaction_fid.[actionname] as [actionname],
tbl_designation_fid.[designationname] as [designationname],
tbl_designation_fid.[designationcode] as [designationcode],
tbl_department_fid.[departmentcode] as [departmentcode],
tbl_grade_fid.[gradecode] as [gradecode],
tbl_unit_fid.[unit_code] as [unit_code],
tbl_department_fid.[departmentname] as [departmentname]
#>
--from
from tbl_tp_positioncode
--joins

#JOIN#
left join tbl_branch as tbl_branch_fid on tbl_tp_positioncode.[branch_fid]=tbl_branch_fid.[branch_pid]
left join tbl_TP_positionactions as tbl_positionaction_fid on tbl_tp_positioncode.[positionaction_fid]=tbl_positionaction_fid.[positionactions_pid] and (tbl_positionaction_fid.IsDeleted is NULL or tbl_positionaction_fid.IsDeleted=0) and (tbl_positionaction_fid.IsDeactivated is NULL or tbl_positionaction_fid.IsDeactivated=0)
left join tbl_designation as tbl_designation_fid on tbl_tp_positioncode.[designation_fid]=tbl_designation_fid.[designation_pid]
left join tbl_department as tbl_department_fid on tbl_tp_positioncode.[department_fid]=tbl_department_fid.[department_pid]
left join tbl_grade as tbl_grade_fid on tbl_tp_positioncode.[grade_fid]=tbl_grade_fid.[grade_pid]
left join tbl_unit as tbl_unit_fid on tbl_tp_positioncode.[unit_fid]=tbl_unit_fid.[unit_pid]
left join tbl_employeecategory as tbl_employeecategory_fid on tbl_tp_positioncode.[employeecategory_fid]=tbl_employeecategory_fid.[employeecategory_pid]
left join tbl_region as tbl_region_fid on tbl_tp_positioncode.[region_fid]=tbl_region_fid.[region_pid]
left join tbl_division as tbl_division_fid on tbl_tp_positioncode.[division_fid]=tbl_division_fid.[division_pid]
WHERE 1=1
--where
and (tbl_tp_positioncode.IsDeleted is NULL or tbl_tp_positioncode.IsDeleted=0) and (tbl_tp_positioncode.IsDeactivated is NULL or tbl_tp_positioncode.IsDeactivated=0)
--companycheckbegin
and tbl_tp_positioncode.company_fid=@Users.CompanyID
--companycheckend

--SECURITY FILTER BEGIN
and 1=1
--SECURITY FILTER END
and 
tbl_tp_positioncode.[positioncode_pid] IN ("+idsstring.Trim(',')+@") and
(case
when isnull(@des,'')<>'' and isnull(@dep,'')<>'' and tbl_tp_positioncode.[designation_fid] = @des and tbl_tp_positioncode.[department_fid] = @dep then 01
when isnull(@des,'')<>'' and isnull(@dep,'')='' and tbl_tp_positioncode.[designation_fid] = @des then 01
when isnull(@dep,'')<>'' and isnull(@des,'')='' and tbl_tp_positioncode.[department_fid] = @dep then 01
when isnull(@des,'')='' and isnull(@dep,'')='' and 'a'='a' then 01
else 0 end=01)
#FILTER# #SORT#
";
    if(!cond.IsBlank())
      sql=sql.Replace("#FILTER#"," and ( tbl_tp_positioncode.[workflowstatus] LIKE '%'+@search+'%' or tbl_branch_fid.[branchcode] LIKE '%'+@search+'%' or tbl_branch_fid.[branchname] LIKE '%'+@search+'%' or tbl_designation_fid.[designationname] LIKE '%'+@search+'%' or tbl_designation_fid.[designationcode] LIKE '%'+@search+'%' or tbl_department_fid.[departmentname] LIKE '%'+@search+'%' or tbl_department_fid.[departmentcode] LIKE '%'+@search+'%' or tbl_grade_fid.[gradename] LIKE '%'+@search+'%' or tbl_grade_fid.[gradecode] LIKE '%'+@search+'%' or tbl_unit_fid.[unit_code] LIKE '%'+@search+'%' or tbl_unit_fid.[unitname] LIKE '%'+@search+'%' or tbl_employeecategory_fid.[employeecategorycode] LIKE '%'+@search+'%' or tbl_employeecategory_fid.[employeecategoryname] LIKE '%'+@search+'%' or tbl_region_fid.[regionname] LIKE '%'+@search+'%' or tbl_region_fid.[regioncode] LIKE '%'+@search+'%' or tbl_division_fid.[divisioncode] LIKE '%'+@search+'%' or tbl_division_fid.[divisionname] LIKE '%'+@search+'%' or tbl_positionaction_fid.[actionname] LIKE '%'+@search+'%' )");
    
    
    //string sort=Erp.GetParam("window","rpt2sort").C2Str();
    /*if(sort.IsBlank())
      sort="tbl_SYS_Users.[username] ASC";*/
    
    sql=sql.Replace("#SORT#"," #SORT# order by tbl_tp_positioncode.dateofjoiningfromrange desc;");
    
    var dt=Erp.GetPagedData(sql,
                          new Dictionary<string, object>() { 
                            { "@Search",cond },{"@des",Erp.GetParam("window","des").ToString()},{"@dep",Erp.GetParam("window","dep").ToString()}
                            
                          },args["index"].C2Int(),30,out err);
    args["dt"]=dt.ToDictionaryArray();
    
    
  }
}

//Dll Directory:E:\Shailesh\Thread Apps\CodeBase