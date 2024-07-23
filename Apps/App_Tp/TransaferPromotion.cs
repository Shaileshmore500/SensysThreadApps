using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.UI.WebControls;
using System.Xml;
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
using System.Text.RegularExpressions;
namespace App_Tp.Apps.App_Tp
{
    public class TransferRecord : ImplEntityScript, IEntityScript
    {
        ApplicationInfo _app;
        IDBConfiguration _cfg;
        public void Init(ApplicationInfo app, IDBConfiguration cfg)
        {
            _app = app;
            _cfg = cfg;
            Debugger.Break();
        }
        public bool OnGridCommand(ref string sql, string htmlId, string command, Dictionary<string, object> args)
        {

            if (htmlId == "html_drptovalue_grid")
            {

                sql = sql.Replace("branch", Fn.ToLowerCase(args.Get("@tablename").C2Str()).Replace(" ", "").Trim(' '));
                sql = sql.Replace(Fn.ToLowerCase("as [tbl_" + args.Get("@tablename").C2Str().Replace(" ", "").Trim(' ')) + "_" + Fn.ToLowerCase(args.Get("@tablename").C2Str().Replace(" ", "").Trim(' ')) + "name]", Fn.ToLowerCase("as [tbl_branch_branchname]"));
                sql = sql.Replace(" --companycheckbegin", "and " + args.Get("@tablename").C2Str().Replace(" ", "").Trim(' ') + "_pid not in (select top 1 " + args.Get("@tablename").C2Str().Replace(" ", "").Trim(' ') + "_fid from tbl_employee where employee_pid=" + args.Get("@employeeid").C2Int() + ")");
            }
            return true;
        }
        public void LayoutCreated(IEntityRenderer renderer)
        {
            if (Erp.LayoutMode == "A")
            {
                Erp.SetFieldValue("@employee_fid", Erp.GetProp("EmpID").C2Str());
            }
            else
            {
                string tablename = Fn.Replace(Field.Rel("toentity")["entitydefinitioncode"].C2Str(), " ", "").Trim();
                string ToValue = Erp.GetFieldValue("html_txt_toval").C2Str();
                string sql = @"select top 1 " + tablename + "name from tbl_" + tablename + " where " + tablename + "_pid='" + ToValue + "'";
                string err = "";
                var result = Erp.ExecuteSql<string>(sql,
                                                    new Dictionary<string, object>() {
                                            {
                                              "@ID", 1 }
                                                    }
                                                    , out err);
                Erp.SetParam("window", "toval", result);
            }
        }
        public void ExecuteCommand(string sender, Dictionary<string, object> args)
        {
            if (sender == "tp")
                TransferEmployee(args.Get("EntityName").C2Str(), args.Get("EntityValue").C2Str(), args.Get("DOE").C2Str(), args.Get("DOC").C2Str(), args.Get("Employee_fid").C2Str());
        }
        public void TransferEmployee(string EntityName, string EntityValue, string DOE, string DOC, string Employee_fid)
        {
            String sql = "declare  @colname nvarchar(200);";
            DataSet ds = GetConfigdetails(EntityName, EntityValue);
            if (ds == null)
                return;
            DataTable dtConfig = ds.Tables["dt_config"];
            DataTable dtDefination = ds.Tables["dt_entitydefination"];
            string employeeUpdate = "update tbl_employee set ";
            string monthmasterupdate = "update tbl_monthmaster set ";
            string tpinsert = "";
            DataRow row = dtDefination.SelectSingle("entitydefinition_pid=" + EntityName.ToString());
            string columnname2 = row["columnname"].C2Str();
            employeeUpdate += columnname2 + "=" + EntityValue + ",";
            monthmasterupdate += columnname2 + "=" + EntityValue + ",";
            for (int i = 0;
                 i < dtConfig.Rows.Count;
                 i++)
            {
                DataRow dr = dtDefination.SelectSingle("entitydefinition_pid=" + dtConfig.Rows[i]["entity"].ToString());
                string columnname = "";
                columnname = dr["columnname"].C2Str();

                tpinsert += @"insert into tbl_transferpromotion([company_fid], [employee_fid], [transferpromotiontype_fid], [fromentity_fid], [toentity_fid], [dateoftransferpromotion], [dateofeffectoftransferpromotion])
values(@Users.CompanyID, " + Employee_fid + @", (select top 1 transferpromotiontype_pid from tbl_transferpromotiontype where entitydefinition_fid = " + dtConfig.Rows[i]["entity"] + @"),(select " + columnname + @" from tbl_employee where employee_pid=@employeeID)," + dtConfig.Rows[i]["entityvalue"] + @",'" + DOC + "','" + DOE + @"');
            ";


                employeeUpdate += columnname + "=" + dtConfig.Rows[i]["entityvalue"] + ",";
                monthmasterupdate += columnname + "=" + dtConfig.Rows[i]["entityvalue"] + ",";
            }
            /*
        if (dtConfig == null || dtConfig.Rows.Count<=0)
        {
        DataRow row = dtDefination.SelectSingle("entitydefinition_pid=" + EntityName.ToString());
        string columnname = dr["columnname"].C2Str();
        employeeUpdate += columnname + "=" + EntityValue + ",";
        monthmasterupdate += columnname + "=" + EntityValue + ",";
        employeeUpdate = employeeUpdate.TrimEnd(',') + " where employee_pid=@employeeID; ";
        monthmasterupdate = monthmasterupdate.TrimEnd(',') + " where employee_fid=@employeeID; ";
        }
        else
        {
        */
            employeeUpdate = employeeUpdate.TrimEnd(',') + " where employee_pid=@employeeID and company_fid=@Users.CompanyID;";
            monthmasterupdate = monthmasterupdate.TrimEnd(',') + " where employee_fid=@employeeID and  company_fid=@Users.CompanyID and month_fid in(select month_pid from tbl_month where  monthenddate >= '" + DOE + "' and monthstartdate <= '" + DOE + "'); ";
            //}
            sql += @"
declare @tptypeid nvarchar(200);
declare @fromEntity nvarchar(20);
set @tptypeid='" + EntityName + @"';
declare @employeeID nvarchar(20);
set @employeeID='" + Employee_fid + @"'
set @colname =(select (case 
when(entitydefinitioncode ='BRANCH') then 'branch_fid' 
when(entitydefinitioncode ='DEPARTMENT') then 'department_fid' 
when(entitydefinitioncode ='DESIGNATION') then 'designation_fid' 
when(entitydefinitioncode ='DIVISION') then 'division_fid'   
when(entitydefinitioncode ='EMPLOYEECATEGORY') then 'employeecategory_fid'  
when(entitydefinitioncode ='GRADE') then 'grade_fid' 
when(entitydefinitioncode ='PROJECT') then 'project_fid' 
when(entitydefinitioncode ='UNIT') then 'unit_fid' 									
when(entitydefinitioncode ='EmployeeOtherMaster1') then 'EmployeeOtherMaster1_fid'
when(entitydefinitioncode ='EmployeeOtherMaster2') then 'EmployeeOtherMaster2_fid'
when(entitydefinitioncode ='EmployeeOtherMaster3') then 'EmployeeOtherMaster3_fid'
when(entitydefinitioncode ='EmployeeOtherMaster4') then 'EmployeeOtherMaster4_fid'
when(entitydefinitioncode ='EmployeeOtherMaster5') then 'EmployeeOtherMaster5_fid'
when(entitydefinitioncode ='EmployeeOtherMaster6') then 'EmployeeOtherMaster6_fid'
when(entitydefinitioncode ='EmployeeOtherMaster7') then 'EmployeeOtherMaster7_fid'
when(entitydefinitioncode ='EmployeeOtherMaster8') then 'EmployeeOtherMaster8_fid'
when(entitydefinitioncode ='EmployeeOtherMaster9') then 'EmployeeOtherMaster9_fid'
when(entitydefinitioncode ='EmployeeOtherMaster10') then 'EmployeeOtherMaster10_fid'
when(entitydefinitioncode ='EmployeeOtherMaster11') then 'EmployeeOtherMaster11_fid'
when(entitydefinitioncode ='EmployeeOtherMaster12') then 'EmployeeOtherMaster12_fid'
when(entitydefinitioncode ='EmployeeOtherMaster13') then 'EmployeeOtherMaster13_fid'
when(entitydefinitioncode ='EmployeeOtherMaster14') then 'EmployeeOtherMaster14_fid'
when(entitydefinitioncode ='EmployeeOtherMaster15') then 'EmployeeOtherMaster15_fid'
when(entitydefinitioncode ='EmployeeOtherMaster16') then 'EmployeeOtherMaster16_fid'
when(entitydefinitioncode ='EmployeeOtherMaster17') then 'EmployeeOtherMaster17_fid'
when(entitydefinitioncode ='EmployeeOtherMaster18') then 'EmployeeOtherMaster18_fid'    
when(entitydefinitioncode ='EmployeeOtherMaster19') then 'EmployeeOtherMaster19_fid'
when(entitydefinitioncode ='EmployeeOtherMaster20') then 'EmployeeOtherMaster20_fid'
when(entitydefinitioncode ='EmployeeOtherMaster21') then 'EmployeeOtherMaster21_fid'
when(entitydefinitioncode ='EmployeeOtherMaster22') then 'EmployeeOtherMaster22_fid'
when(entitydefinitioncode ='EmployeeOtherMaster23') then 'EmployeeOtherMaster23_fid'
when(entitydefinitioncode ='EmployeeOtherMaster24') then 'EmployeeOtherMaster24_fid'
when(entitydefinitioncode ='EmployeeOtherMaster25') then 'EmployeeOtherMaster25_fid'
when(entitydefinitioncode ='EmployeeOtherMaster26') then 'EmployeeOtherMaster26_fid'
when(entitydefinitioncode ='EmployeeOtherMaster27') then 'EmployeeOtherMaster27_fid' end) 
from tbl_transferpromotiontype 
inner join tbl_entitydefinition on entitydefinition_pid=entitydefinition_fid  
where tbl_transferpromotiontype.company_fid=@Users.CompanyID and tbl_entitydefinition.company_fid=@Users.CompanyID 
and transferpromotiontype_pid= @tptypeid
)
set @fromEntity=(select " + columnname2 + @" from tbl_employee where employee_pid=@employeeID);
--declare @sql nvarchar(max);
--set @sql=N'select @result='+@colname+N' from tbl_employee where employee_pid=@employeeID';
--exec sp_executesql @sql,N'@result nvarchar(100) OUTPUT,@employeeID nvarchar(max)',@result=@fromEntity OUTPUT,@employeeID=@employeeID
";
            sql += @"insert into tbl_transferpromotion([company_fid], [employee_fid], [transferpromotiontype_fid], [fromentity_fid], [toentity_fid], [dateoftransferpromotion], [dateofeffectoftransferpromotion])
values(@Users.CompanyID," + Employee_fid + @",(select top 1 transferpromotiontype_pid from tbl_transferpromotiontype where entitydefinition_fid=" + EntityName + @"),@fromEntity," + EntityValue + @",'" + DOC + "','" + DOE + @"');
";
            string err = "";
            var resutl = Erp.ExecuteSql<string>(sql + tpinsert + employeeUpdate + monthmasterupdate,
                                                new Dictionary<string, object>() {
                                          {
                                            "@ID", 1 }
                                                }
                                                , out err);
        }
        public DataSet GetConfigdetails(string entity, string value)
        {
            string sql = @"
--[dt_entitydefination]
select (case 
when(entitydefinitioncode ='BRANCH') then 'branch_fid' 
when(entitydefinitioncode ='DEPARTMENT') then 'department_fid' 
when(entitydefinitioncode ='DESIGNATION') then 'designation_fid' 
when(entitydefinitioncode ='DIVISION') then 'division_fid'   
when(entitydefinitioncode ='EMPLOYEECATEGORY') then 'employeecategory_fid'  
when(entitydefinitioncode ='GRADE') then 'grade_fid' 
when(entitydefinitioncode ='PROJECT') then 'project_fid' 
when(entitydefinitioncode ='UNIT') then 'unit_fid' 									
when(entitydefinitioncode ='EmployeeOtherMaster1') then 'EmployeeOtherMaster1_fid'
when(entitydefinitioncode ='EmployeeOtherMaster2') then 'EmployeeOtherMaster2_fid'
when(entitydefinitioncode ='EmployeeOtherMaster3') then 'EmployeeOtherMaster3_fid'
when(entitydefinitioncode ='EmployeeOtherMaster4') then 'EmployeeOtherMaster4_fid'
when(entitydefinitioncode ='EmployeeOtherMaster5') then 'EmployeeOtherMaster5_fid'
when(entitydefinitioncode ='EmployeeOtherMaster6') then 'EmployeeOtherMaster6_fid'
when(entitydefinitioncode ='EmployeeOtherMaster7') then 'EmployeeOtherMaster7_fid'
when(entitydefinitioncode ='EmployeeOtherMaster8') then 'EmployeeOtherMaster8_fid'
when(entitydefinitioncode ='EmployeeOtherMaster9') then 'EmployeeOtherMaster9_fid'
when(entitydefinitioncode ='EmployeeOtherMaster10') then 'EmployeeOtherMaster10_fid'
when(entitydefinitioncode ='EmployeeOtherMaster11') then 'EmployeeOtherMaster11_fid'
when(entitydefinitioncode ='EmployeeOtherMaster12') then 'EmployeeOtherMaster12_fid'
when(entitydefinitioncode ='EmployeeOtherMaster13') then 'EmployeeOtherMaster13_fid'
when(entitydefinitioncode ='EmployeeOtherMaster14') then 'EmployeeOtherMaster14_fid'
when(entitydefinitioncode ='EmployeeOtherMaster15') then 'EmployeeOtherMaster15_fid'
when(entitydefinitioncode ='EmployeeOtherMaster16') then 'EmployeeOtherMaster16_fid'
when(entitydefinitioncode ='EmployeeOtherMaster17') then 'EmployeeOtherMaster17_fid'
when(entitydefinitioncode ='EmployeeOtherMaster18') then 'EmployeeOtherMaster18_fid'    
when(entitydefinitioncode ='EmployeeOtherMaster19') then 'EmployeeOtherMaster19_fid'
when(entitydefinitioncode ='EmployeeOtherMaster20') then 'EmployeeOtherMaster20_fid'
when(entitydefinitioncode ='EmployeeOtherMaster21') then 'EmployeeOtherMaster21_fid'
when(entitydefinitioncode ='EmployeeOtherMaster22') then 'EmployeeOtherMaster22_fid'
when(entitydefinitioncode ='EmployeeOtherMaster23') then 'EmployeeOtherMaster23_fid'
when(entitydefinitioncode ='EmployeeOtherMaster24') then 'EmployeeOtherMaster24_fid'
when(entitydefinitioncode ='EmployeeOtherMaster25') then 'EmployeeOtherMaster25_fid'
when(entitydefinitioncode ='EmployeeOtherMaster26') then 'EmployeeOtherMaster26_fid'
when(entitydefinitioncode ='EmployeeOtherMaster27') then 'EmployeeOtherMaster27_fid' end) as columnname ,tbl_entitydefinition.entitydefinition_pid
from tbl_transferpromotiontype 
inner join tbl_entitydefinition on entitydefinition_pid=entitydefinition_fid  
where tbl_transferpromotiontype.company_fid=@Users.CompanyID and tbl_entitydefinition.company_fid=@Users.CompanyID 
--[dt_config]
select configdetails_pid,	config_fid,entity,entityvalue from tbl_TP_config cf
inner join tbl_TP_configdetails on config_pid=config_fid
where cf.toentity_fid='" + entity + @"' and cf.tovalue='" + value + @"';";
            string err = "";
            var ds = Erp.ExecuteSql<DataSet>(sql,
                                             new Dictionary<string, object>() {
                                       {
                                         "@ID", 1 }
                                             }
                                             , out err);
            return ds;
        }

    }
}
