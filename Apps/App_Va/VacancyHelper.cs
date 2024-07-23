using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using Erp.Base.ScriptInterface;

namespace App_Va.Apps.App_Va
{
    public class VacancyHelper
    {
        public  DataTable getConfiguration(ErpScriptObject Erp)
        {
            var sql_configuration = @"
declare @hiringlocation varchar(max);
set @hiringlocation=(select top 1 isnull(location_fc,'') from tbl_sys_users 
join tbl_VA_hiringlocation on hiringlocation_fid=hiringlocation_pid
where Users_Pid=@Users.UserID);
if(@hiringlocation ='' or @hiringlocation is null )
select top 1 * from tbl_VA_configuration where company_fid=@Users.CompanyID
else 
select top 1 * from tbl_VA_configuration
where    configuration_pid=@hiringlocation and company_fid=@Users.CompanyID";


            //                var sql_configuration = @"select top 1 * from tbl_VA_configuration 
            //where  company_fid=@Users.CompanyID and  (case when isnull(@hiringlocation,'')!='' and configuration_pid=@hiringlocation then 01 else 0 end)=01
            //";               
            var err2 = "";
            DataTable dt = Erp.ExecuteSql<DataTable>(sql_configuration,
                              new Dictionary<string, object>()
                              {

                              }, out err2);
            return dt;
        }
    }
}