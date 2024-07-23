using Erp.Base.ScriptInterface;
using Erp.Common;
using HelperLib.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml;
using DevExpress.Spreadsheet;
using System.IO;
using HelperLib.Extensions;
using System.Data;
using System.Text;
using HelperLib.Conversion;
using ErpModel.Globals;

namespace App_Awd.Apps.App_Awd
{
    public class AWDExcelImporting : ImplEntityScript, IEntityScript
    {
        ApplicationInfo _app; IDBConfiguration _cfg;
        StringBuilder errorList = new StringBuilder();
        StringBuilder sql = new StringBuilder();
        int a;
        public void Init(ApplicationInfo app, IDBConfiguration cfg)
        {
            _app = app; _cfg = cfg;
            if (Erp.Action == "LOAD")
            {
                //Debugger.Break();
            }
        }



        public void ExecuteCommand(string sender, Dictionary<string, object> args)
        {
            //new DateTime
            if (sender == "upload")
            {
                Workbook workbook = new Workbook();
                bool fileloaded;

                string FileName = Erp.GetParam("window", "filename").C2Str().ToLower();
                string FilePath = Erp.GetParam("window", "filepath").C2Str();
                //bool  IgnoreIfExists = Erp.GetParam("window", "IgnoreIfExists").C2Bool();
                string actualFilePath = Path.Combine(_app.TempDirectory, FilePath);
                if (FileName.Contains("xlsx") || FileName.Contains("xlsm"))
                    fileloaded = workbook.LoadDocument(actualFilePath, DocumentFormat.Xlsx);
                else if (FileName.Contains("xls"))
                    fileloaded = workbook.LoadDocument(actualFilePath, DevExpress.Spreadsheet.DocumentFormat.Xls);
                else
                {
                    Erp.ShowMessage("please select Excel File...", "error");
                    return;
                }
                if (!fileloaded)
                {
                    Erp.ShowMessage("Something Went Wrong When Uploading File! Please Try Again...", "Error");
                    return;
                }
                var err = readExcel(workbook);
                args["err"] = err;
                //args["errorList"] = errorList.;
                Erp.ExecuteScript("window.importErrors= [" + errorList.C2Str().TrimEnd(',') + "]");

            }
            else if (sender == "loaddata")
            {
                string doc_sql = @"select 
--fields

tbl_awd_documents.[documents_pid] as [tbl_awd_documents_documents_pid],tbl_awd_documents.[documents_pid] as [documents_pid],
( case when tbl_awd_documents.[doc] is null then '' else 'getresource.ashx?eid=tbl_awd_documents&fld=doc&id='+cast(tbl_awd_documents.[documents_pid] as varchar(40)) end) as [doc],
( case when tbl_awd_documents.[doc_preview] is null then '' else 'getresource.ashx?eid=tbl_awd_documents&fld=doc_preview&id='+cast(tbl_awd_documents.[documents_pid] as varchar(40)) end) as [doc_preview],
tbl_awd_documents.[attweek_fid] as [attweek_fid],
ext

--from
from tbl_awd_documents
--joins
left join tbl_AWD_attweek as tbl_attweek_fid on tbl_awd_documents.[attweek_fid]=tbl_attweek_fid.[attweek_pid] and (tbl_attweek_fid.IsDeleted is NULL or tbl_attweek_fid.IsDeleted=0) and (tbl_attweek_fid.IsDeactivated is NULL or tbl_attweek_fid.IsDeactivated=0)
outer apply
( select (doc_preview) as [ext] ) as x_ext

WHERE 1=1
--where
and (tbl_awd_documents.IsDeleted is NULL or tbl_awd_documents.IsDeleted=0) and (tbl_awd_documents.IsDeactivated is NULL or tbl_awd_documents.IsDeactivated=0)
--companycheckbegin
and tbl_awd_documents.company_fid=@Users.CompanyID
and tbl_attweek_fid.islockweek=0
--companycheckend

--SECURITY FILTER BEGIN
and 1=1
--SECURITY FILTER END
and (
tbl_attweek_fid.[attweek_pid] =
isnull((select top 1
isnull(sub_tbl_AWD_attweek.[attweek_pid],'') as __subqueryField
from tbl_AWD_attweek as sub_tbl_AWD_attweek

where 1=1
and (
sub_tbl_awd_attweek.[startdate] <= @doa and sub_tbl_awd_attweek.[enddate] >= @doa
)
and sub_tbl_AWD_attweek.company_fid=@Users.CompanyID),'')

)
and employeeothermaster16_fid =(
select top 1 employeeothermaster16_pid from tbl_employeeothermaster16
where emp16_adminuser1 =(
select top 1 employee_pid from  tbl_employee 
left join tbl_user on employee_fid=employee_pid
left join tbl_sys_users on epuser=user_pid
where Users_Pid=@Users.UserID
)
)
;";


                string err = "";
                var dt_doc = Erp.ExecuteSql<DataTable>(doc_sql,
                                          new Dictionary<string, object>() {
                            { "@doa", args.Get("doa").C2Str()}
                                          }, out err);
                args["dt_doc"] = dt_doc.ToDictionaryArray();



                string data_sql = @"
--PAGING
select
<#
tbl_awd_attdatewise.[attdatewise_pid] as [tbl_awd_attdatewise_attdatewise_pid],tbl_awd_attdatewise.[attendancevalue] as [attendancevalue],
tbl_awd_attdatewise.[islatemarkschanged] as [islatemarkschanged],
tbl_awd_attdatewise.[issummaryprepared] as [issummaryprepared],
tbl_awd_attdatewise.[isshift_fidchanged] as [isshift_fidchanged],
tbl_awd_attdatewise.[oldouttime] as [oldouttime],
tbl_awd_attdatewise.[oldintime] as [oldintime],
tbl_awd_attdatewise.[isnewintimechanged] as [isnewintimechanged],
tbl_awd_attdatewise.[isattendancevaluechanged] as [isattendancevaluechanged],
tbl_employee_fid.[mname] as [mname],
tbl_employee_fid.[fname] as [fname],
tbl_employee_fid.[lname] as [lname],
tbl_employee_fid.[employeecode] as [employeecode],
tbl_employee_fid_designation_fid.[designationname] as [designationname],
tbl_awd_attdatewise.[doa] as [doa],
tbl_awd_attdatewise.[newintime] as [newintime],
tbl_awd_attdatewise.[newouttime] as [newouttime],
tbl_awd_attdatewise.[attdatewise_pid] as [attdatewise_pid],
tbl_awd_attdatewise.[shift_fid] as [shift_fid],
tbl_shift_fid.[shift_pid] as [shift_pid],
tbl_shift_fid.[shiftname] as [shiftname],
tbl_attendancetype.[attendancetypedisplayname] as [attendancetypedisplayname],
tbl_attendancetype.[attendancetypename] as [attendancetypename],
tbl_attendancetype.[attendancecategory_fid] as [attendancecategory_fid],
tbl_awd_attdatewise.[islop] as [islop],
tbl_attendancetype.[attendancetypedisplaycode] as [attendancetypedisplaycode],
tbl_attendancetype.[attendancetypecode] as [attendancetypecode],
tbl_awd_attdatewise.[attendancetype] as [attendancetype],
tbl_awd_attdatewise.[remark] as [remark],
tbl_awd_attdatewise.[latemarks] as [latemarks],
[formatnewtime],[formatouttime]
#>
from tbl_awd_attdatewise
#JOIN#
left join tbl_employee as tbl_employee_fid on tbl_awd_attdatewise.[employee_fid]=tbl_employee_fid.[employee_pid]
left join tbl_designation as tbl_employee_fid_designation_fid on tbl_employee_fid.[designation_fid]=tbl_employee_fid_designation_fid.[designation_pid]
left join tbl_shift as tbl_shift_fid on tbl_awd_attdatewise.[shift_fid]=tbl_shift_fid.[shift_pid]
left join tbl_attendancetype as tbl_attendancetype on tbl_awd_attdatewise.[attendancetype]=tbl_attendancetype.[attendancetype_pid]
left join tbl_SYS_Users as tbl_createdBy_User_Fid on tbl_awd_attdatewise.[createdBy_User_Fid]=tbl_createdBy_User_Fid.[users_pid] and (tbl_createdBy_User_Fid.IsDeleted is NULL or tbl_createdBy_User_Fid.IsDeleted=0) and (tbl_createdBy_User_Fid.IsDeactivated is NULL or tbl_createdBy_User_Fid.IsDeactivated=0)
left join tbl_AWD_attweek as tbl_attweek_fid on tbl_awd_attdatewise.[attweek_fid]=tbl_attweek_fid.[attweek_pid] and (tbl_attweek_fid.IsDeleted is NULL or tbl_attweek_fid.IsDeleted=0) and (tbl_attweek_fid.IsDeactivated is NULL or tbl_attweek_fid.IsDeactivated=0)
outer apply
( select isnull((select top 1
FORMAT(sub_tbl_AWD_attdatewise.[newintime], 'HH:mm') as __subqueryField
from tbl_AWD_attdatewise as sub_tbl_AWD_attdatewise

where 1=1
and (
sub_tbl_awd_attdatewise.[attdatewise_pid] = tbl_AWD_attdatewise.[attdatewise_pid]
)
and sub_tbl_AWD_attdatewise.company_fid=@Users.CompanyID),'') as [formatnewtime]
) as x_formatnewtime

outer apply
( select isnull((select top 1
format(sub_tbl_AWD_attdatewise.[newouttime],'HH:mm') as __subqueryField
from tbl_AWD_attdatewise as sub_tbl_AWD_attdatewise

where 1=1
and (
sub_tbl_awd_attdatewise.[attdatewise_pid] = tbl_AWD_attdatewise.[attdatewise_pid]
)
and sub_tbl_AWD_attdatewise.company_fid=@Users.CompanyID),'') as [formatouttime]
) as x_formatouttime

WHERE 1=1

and (tbl_awd_attdatewise.IsDeleted is NULL or tbl_awd_attdatewise.IsDeleted=0) 
and (tbl_awd_attdatewise.IsDeactivated is NULL or tbl_awd_attdatewise.IsDeactivated=0)
and tbl_awd_attdatewise.company_fid=@Users.CompanyID

and (
(
tbl_awd_attdatewise.[doa] = @doa 
and tbl_attweek_fid.employeeothermaster16_fid=(
select top 1 employeeothermaster16_pid from tbl_employeeothermaster16
left join tbl_employee on employee_pid=emp16_adminuser1
left join tbl_user on employee_fid=employee_pid
left join tbl_sys_users on epuser=user_pid
where Users_Pid=@Users.UserID

)


--tbl_createdBy_User_Fid.[Users_pid] = (select top 1 tbl_SYS_Users.[Users_pid] from tbl_SYS_Users as tbl_SYS_Users where tbl_SYS_Users.users_pid=@Users.UserID) 

and (tbl_attweek_fid.[islockweek]=0 or tbl_attweek_fid.[islockweek] is null ) ) or
(case when @mode is null then 01 when tbl_awd_attdatewise.[attdatewise_pid] = @ID then 01 else 0 end)=01



)
 #FILTER# 
/**/
#SORT#
order by tbl_employee_fid.[employeecode] DESC;";



                string cond = Erp.GetParam("window", "search").C2Str();
                if (!cond.IsBlank())
                    data_sql = data_sql.Replace("#FILTER#", " and ( tbl_employee_fid.[fname] LIKE '%'+@search+'%' or tbl_employee_fid.[mname] LIKE '%'+@search+'%' or tbl_employee_fid.[lname] LIKE '%'+@search+'%' or tbl_employee_fid_designation_fid.[designationname] LIKE '%'+@search+'%' or tbl_employee_fid.[employeecode] LIKE '%'+@search+'%' ) #FILTER# ");




                var dt = Erp.GetPagedData(data_sql,
                                      new Dictionary<string, object>() {
                            { "@Search",cond },{ "@doa", args.Get("doa").C2Str()},{"@mode",Erp.GetProp("mode").C2Str() },{"@ID",Erp.GetProp("ID") }
                                      }, args["index"].C2Int(), 30, out err);
                args["dt"] = dt.ToDictionaryArray();





            }

            else if(sender=="createSchedule")
                {
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
                var dt = Erp.ExecuteSql<DataTable>(@"select employeeothermaster16_pid from tbl_employeeothermaster16 where company_fid=@CompanyID",
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
                    var result = Erp.ExecuteSql<int>(@"
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

        public string readExcel(Workbook workbook)
        {
            DataSet ds = getMasterData();
            var doa = Erp.GetFieldValue("dateofatt").C2Str();
            var err = "";
            if (ds == null || ds.Tables.Count <= 0 || ds.Tables["tbl_employee"].Rows.Count <= 0 || ds.Tables["tbl_attendancetype"].Rows.Count <= 0)
            {
                err = "Error Occured! Try Again....";
                return err;
            }
            if (ds.Tables["tbl_AWD_attdatewise"] == null || ds.Tables["tbl_AWD_attdatewise"].Rows.Count <= 0)
            {
                err = "Data Not Fetched For " + DateTime.Parse(doa).ToString("dd-MM-yyyy") + " Date...";
                return err;
            }

            DataTable dt_employee = ds.Tables["tbl_employee"];
            DataTable dt_attendancetype = ds.Tables["tbl_attendancetype"];
            DataTable dt_attdatewise = ds.Tables["tbl_AWD_attdatewise"];


            DataTable dt_Data = new DataTable();
            dt_Data.Columns.Add("employee_fid");
            dt_Data.Columns.Add("latemark");
            dt_Data.Columns.Add("attendancetype_pid");
            dt_Data.Columns.Add("newintime");
            dt_Data.Columns.Add("newouttime");
            dt_Data.Columns.Add("islop");
            dt_Data.Columns.Add("remark");
            //creating dictionary for employee
            Dictionary<string, string> dic_employee = new Dictionary<string, string>();
            for (var i = 0; i < dt_employee.Rows.Count; i++)
            {
                if (!dic_employee.ContainsKey(dt_employee.Rows[i]["employeecode"].C2StrDBSafe()))
                    dic_employee.Add(dt_employee.Rows[i]["employeecode"].C2StrDBSafe(), dt_employee.Rows[i]["employee_pid"].C2StrDBSafe());
            }
            //creating dictionary for attendence
            Dictionary<string, string> attdatewise = new Dictionary<string, string>();

            foreach (DataRow dr in dt_attdatewise.Rows)
            {
                if (!attdatewise.ContainsKey(dr["employeecode"].C2StrDBSafe()))
                    attdatewise.Add(dr["employeecode"].C2StrDBSafe(), dr["attdatewise_pid"].C2StrDBSafe());

            }




            //load workshhet 
            Worksheet worksheet = workbook.Worksheets[0];
            //cheking used cells in loaded worksheet 
            CellRange usedRange = worksheet.GetDataRange();
            for (var i = usedRange.TopRowIndex + 2; i <= usedRange.BottomRowIndex; i++)
            {
                DataRow dr = dt_Data.NewRow();
                string _attendenceType = worksheet.Cells[i, 1].Value.C2StrDBSafe();
                var dr_atttype = dt_attendancetype.SelectSingle("attendancetypecode='" + _attendenceType + "'");
                var attypecode = Fn.IsEmpty(dr_atttype) ? "" : dr_atttype["attendancetypecode"];
                string[] arr_atttype = { "PST", "PSTONPHYMANUAL", "PSTONPHYAUTO", "ABSHD" };
                try
                {
                    var employeeID = "";
                    var attendenceType = "";
                    var employeeCode = worksheet.Cells[i, 0].Value.C2StrDBSafe();

                    if (attdatewise == null || !attdatewise.ContainsKey(employeeCode))
                    {
                        errorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("Employee Code") + " , \"Error\" : " + C.JsonDataEncode("Employee " + employeeCode + " Not Fetched For This Date...") + " } ,");
                        continue;
                    }

                    try
                    {


                        if (Fn.IsEmpty(employeeCode))
                            errorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("Employee Code") + " , \"Error\" : " + C.JsonDataEncode("Null Data Found In Cell...") + " } ,");
                        else if (Fn.IsEmpty(dic_employee[worksheet.Cells[i, 0].Value.C2StrDBSafe()]))
                            errorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("Employee Code") + " , \"Error\" : " + C.JsonDataEncode("Employee " + employeeCode + " Not Found...") + " } ,");
                        else
                            employeeID = dic_employee[worksheet.Cells[i, 0].Value.C2StrDBSafe()];
                    }
                    catch (Exception e)
                    {
                        errorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("Employee Code") + " , \"Error\" : " + C.JsonDataEncode("Employee " + employeeCode + " Not Found...") + " } ,");
                    }


                    attendenceType = dr_atttype["attendancetype_pid"].C2Str();
                    if (Fn.IsEmpty(_attendenceType))
                    {
                        errorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("Attendence Type") + " , \"Error\" : " + C.JsonDataEncode("Null Data Found In Cell..") + " } ,");
                    }
                    else if (Fn.IsEmpty(attendenceType))
                        errorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("Attendence Type") + " , \"Error\" : " + C.JsonDataEncode("Attendence " + _attendenceType + " Type Not Found...") + " } ,");




                    var _intime = worksheet.Cells[i, 2].Value.C2StrDBSafe().Replace(".", ":");
                    var _outtime = worksheet.Cells[i, 3].Value.C2StrDBSafe().Replace(".", ":");
                    //TimeSpan inTime = DateTime.Parse(_intime).TimeOfDay;
                    //TimeSpan outTime = DateTime.Parse(_outtime).TimeOfDay;



                    if (Fn.IsEmpty(_intime) && arr_atttype.Contains(attypecode))
                        errorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("InTime") + " , \"Error\" : " + C.JsonDataEncode("Null Data Found In Cell..") + " } ,");

                    if (Fn.IsEmpty(_outtime) && arr_atttype.Contains(attypecode))
                        errorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("OutTime") + " , \"Error\" : " + C.JsonDataEncode("Null Data Found In Cell..") + " } ,");





                    dr["employee_fid"] = employeeID;
                    dr["latemark"] = worksheet.Cells[i, 4].Value.C2Str();
                    dr["attendancetype_pid"] = attendenceType;
                    dr["newintime"] = Fn.IsEmpty(_intime) ? null : doa + " " + DateTime.Parse(_intime).TimeOfDay;
                    dr["newouttime"] = Fn.IsEmpty(_outtime) ? null : doa + " " + DateTime.Parse(_outtime).TimeOfDay;
                    dr["islop"] = worksheet.Cells[i, 5].Value.C2Bool();
                    dr["remark"] = worksheet.Cells[i, 6].Value.C2Str();

                    dt_Data.Rows.Add(dr);
                }
                catch (Exception e)
                {
                    errorList.Append("  {   \"Row\" : " + C.JsonDataEncode(i + 1) + " , \"Column\" : " + C.JsonDataEncode("Time") + " , \"Error\" : " + C.JsonDataEncode(e.Message) + " } ,");
                }

            }


            if (Fn.IsEmpty(errorList))
            {
                for (var i = 0; i < dt_Data.Rows.Count; i++)
                {




                    sql.Append(@"update tbl_AWD_attdatewise  
set attendancetype = '" + dt_Data.Rows[i]["attendancetype_pid"] + @"', 
newintime =" + (Fn.IsEmpty(dt_Data.Rows[i]["newintime"]) ? "null," : "'" + dt_Data.Rows[i]["newintime"] + @"', ") +
" newouttime = " + (Fn.IsEmpty(dt_Data.Rows[i]["newouttime"]) ? "null," : "'" + dt_Data.Rows[i]["newouttime"] + @"', ") +




" latemarks = '" + dt_Data.Rows[i]["latemark"] + "', " +
"islop = '" + dt_Data.Rows[i]["islop"] + @"' , 
                    remark='" + dt_Data.Rows[i]["remark"] + @"'
                    where employee_fid = '" + dt_Data.Rows[i]["employee_fid"] + "' and doa = @dao; ");

                    if (i > 0 && i % 1000 == 0)
                    {
                        var result = Erp.ExecuteSql<string>(sql.C2Str(),
                                                     new Dictionary<string, object>() {
                                            {
                                              "@dao", Erp.GetFieldValue("dateofatt") }
                                                     }
                                                     , out err);
                        if (!Fn.IsEmpty(err))
                        {
                            return err;
                        }

                    }

                }

                if (!Fn.IsEmpty(sql))
                {

                    var result = Erp.ExecuteSql<string>(sql.C2Str(),
                                                         new Dictionary<string, object>() {
                                            {
                                              "@dao", Erp.GetFieldValue("dateofatt") }
                                                         }
                                                         , out err);

                }



            }
            return err;


        }
        public DataSet getMasterData()
        {
            string sql = @"
--[tbl_employee]
select employee_pid,employeecode from tbl_employee where company_fid=@companyID
--[tbl_attendancetype]
select * from tbl_attendancetype where company_fid=@companyID;
--[tbl_AWD_attdatewise]
select employeecode,attdatewise_pid from tbl_AWD_attdatewise
left join tbl_employee on employee_fid=employee_pid where doa=@doa and tbl_AWD_attdatewise.company_fid=@companyID
and tbl_AWD_attdatewise.createdBy_User_Fid=@Users.UserID
;


";
            string err;
            DataSet ds = Erp.ExecuteSql<DataSet>(sql,
                                                    new Dictionary<string, object>() {
                                            {
                                              "@companyID", _app.CompanyID },
                                            {
                                              "@doa", Erp.GetFieldValue("dateofatt") }
                                                    }
                                                    , out err);
            return ds;

        }

    }
}