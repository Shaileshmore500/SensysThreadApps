using Erp.Base.ScriptInterface;
using Erp.Common;
using ErpModel.Globals;
using HelperLib.DAL;
using HelperLib.Extensions;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace App_Awd.Apps.App_Awd
{
    public class GenerateWeeklyRegister : ImplTaskScript, ITaskScript
    {
        Erp.Base.ScriptInterface.ErpScriptObject _erp;
        ApplicationInfo _app;
        IDBConfiguration _cfg;
        public void Init(ApplicationInfo app, IDBConfiguration cfg, Dictionary<string, object> taskInfo, string arg)
        {
            _app = app;
            _cfg = cfg;
            _erp = new Erp.Base.ScriptInterface.ErpScriptObject(_app, _cfg);

            DateTime firstDateofweek = new DateTime();
            DateTime lastDateofweek = new DateTime();
            //DateTime today = DateTime.ParseExact("24-11-2023","dd-MM-yyyy",System.Globalization.CultureInfo.InvariantCulture);
            DateTime today = DateTime.Now;
            var culture = Users.Culture.CultureInfo;
            var addday = 0;
            /* if (Fn.ToLowerCase(culture.DateTimeFormat.FirstDayOfWeek) == "sunday")
      addday = 1;*/
            var diff = today.DayOfWeek - culture.DateTimeFormat.FirstDayOfWeek;
            if (diff < 0)
                diff += 7;
            firstDateofweek = today.AddDays(-diff + addday).Date;
            lastDateofweek = firstDateofweek.AddDays(6);
            if (firstDateofweek.Day < 25 && lastDateofweek.Day > 25 && today.Day <= 25)
            {
                lastDateofweek = new DateTime(lastDateofweek.Year, lastDateofweek.Month, 25);
                //endDate=new Date(`${now.getMonth()+1}-25-${now.getFullYear()}`)
            }
            else if (firstDateofweek.Day < 25 && today.Day > 25 && lastDateofweek.Day >= 25)
            {
                firstDateofweek = new DateTime(firstDateofweek.Year, firstDateofweek.Month, 26);
                //startDate=new Date(`${now.getMonth()+1}-26-${now.getFullYear()}`);
            }

            var StartDate = firstDateofweek.ToString(Users.Culture.LongDateTimeFormat, Users.Culture.CultureInfo);

            var EndDate = lastDateofweek.ToString(Users.Culture.LongDateTimeFormat, Users.Culture.CultureInfo);




            string err = "";
            var dt = _erp.ExecuteSql<DataTable>(@"select employeeothermaster16_pid from tbl_employeeothermaster16 where company_fid=@CompanyID",
                                        new Dictionary<string, object>() {

                                  {
                                    "@CompanyID",_app.CompanyID}},

                                         out err);
            if (dt == null && dt.Rows.Count <= 0)
                return;

            for (var i = 0; i < dt.Rows.Count; i++)
            {

                string batchid = Guid.NewGuid().C2Str();
                string weekID = Guid.NewGuid().C2Str();
                string loged_user = _app.CurrentUserID;
                var result = _erp.ExecuteSql<int>(@"
declare @stdate Datetime;
set @stdate=@stdat;
declare @eddate Datetime;
set @eddate=@eddat;
declare @ispresent int;
set @ispresent=(select count(*)  from tbl_AWD_attweek where 
startdate >= @stdate and enddate <= @eddate and employeeothermaster16_fid=@employeeothermaster16_fid and company_fid=@CompanyID 
)


if(@ispresent<=0)
begin 
insert into tbl_awd_attweek(attweek_pid,company_fid,startdate,enddate,createdBy_User_Fid,createddate,
employeeothermaster16_fid
) 
values (@weekID,@CompanyID,@stdate,@eddate,@userid,getdate(),@employeeothermaster16_fid);
declare @startdate datetime
create table  #dtable(dtno int ,caldate datetime);
with dates_CTE (date) as (    select @stdate 
Union ALL
select DATEADD(day, 1, date)
from dates_CTE
where date < @eddate
)
insert into #dtable(dtno,caldate)
select row_number() over(order by (select 1)) as dtno,*
from dates_CTE;
select * from #dtable
declare @dtcount int 
,@endtcount int
set @endtcount =(select max(dtno) from #dtable )
set @dtcount=1
while (@dtcount<=@endtcount)
begin
set @startdate =(select  top 1 caldate from #dtable where dtno=@dtcount)
insert into tbl_AWD_attdatewise(
attdatewise_pid,company_fid,employee_fid,doa,attendancetype,attendancevalue,shift_fid,
latemarks,oldintime,newintime,oldouttime,newouttime,createdBy_User_Fid,batchid,attweek_fid)
select NEWID(),tbl_employee.company_fid, employee_pid as employee_fid ,@startdate as doa,attendance.attendancetype_fid as attendancetype,
attendancevalue as attendancevalue,attendance.shift_fid as shift_fid,
latemark.ltmk as latemarks,Intime as oldintime,Intime as newintime,
outtime as oldouttime,outtime as newouttime,@userid,@batchid,@weekID
from tbl_employee 
left join 
(select employee_fid ,attendance_date,min(intime) as Intime,max(outtime) as outtime from tbl_attendancetimerecord
where  attendance_date=@startdate  
group by employee_fid,attendance_date
) as punchtime on punchtime.employee_fid=employee_pid and punchtime.attendance_date=@startdate
outer apply  (select top 1 employee_fid,attendance_date_from,attendancevalue as LTMK from tbl_attendance T
join tbl_attendancetype on attendancetype_fid=attendancetype_pid
where  attendance_date_from= @startdate and t.employee_fid=employee_pid and 
T.attendance_date_from=@startdate and attendancetypecode in ('LTMK')
)  latemark
outer apply  (select top 1 employee_fid,attendance_date_from,attendancevalue ,attendancetype_fid,shift_fid,tbl_attendancetype.attendancetypecode from tbl_attendance T
join tbl_attendancetype on attendancetype_fid=attendancetype_pid
where  attendance_date_from=@startdate and t.employee_fid=employee_pid and 
T.attendance_date_from=@startdate 
)  attendance
left join tbl_employeeothermaster16 on employeeothermaster16_fid=employeeothermaster16_pid

where 

not exists(
select  employee_fid from tbl_AWD_attdatewise b
where b.doa=@startdate and b.employee_fid=employee_pid
)

and tbl_employee.company_fid=@CompanyID
and isnull(dateofexit,'')=''
and employeeothermaster16_fid=@employeeothermaster16_fid
order by doa,employeecode
set @dtcount=@dtcount+1
end
drop table #dtable
end;
",
                                            new Dictionary<string, object>() {
                                  {
                                    "@company",_app.CompanyID}
                                  , {
                                    "@stdat",StartDate}
                                  ,{
                                    "@eddat",EndDate
                                                    }
                                  ,{
                                    "@userid",_app.CurrentUserID}

                                  ,{
                                    "@CompanyID",_app.CompanyID}
                                  ,{
                                    "@batchid",batchid}
                                  ,{
                                    "@weekID",weekID}
                                  ,
                                  {
                                    "@employeeothermaster16_fid",dt.Rows[i]["employeeothermaster16_pid"]}
                                            }
                                            , out err);
            }
        }
    }
}