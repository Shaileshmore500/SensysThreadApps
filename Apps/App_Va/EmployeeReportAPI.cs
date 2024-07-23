using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Data;
using Erp.Base.ScriptInterface;
using HelperLib.DAL;
using System.Web.Hosting;
using Newtonsoft.Json;
using HelperLib.Extensions;

namespace App_Va.Apps.App_Va
{
    public class EmployeeReport
    {


        public string getEmployeeData(string employeeID,ErpScriptObject Erp)
        {

            var sql = @"
                        --[employeeinformation]
            select employeecode as 'Employee Code',employeetitle as 'Employee Title', firstname as 'First Name',middlename as 'Middle Name',lastname as 'Last Name',
            age as Age,format(dateofbirth, 'dd-mm-yyyy') as 'Date of Birth',spousename as 'Spouse Name',emergencycontactname as 'Emergency Contact Name'
            ,personalmobilenumber as 'Personal Mobile No',emergencycontactnumber as 'Emergency Contact No',whatsappnumber as 'Whatsapp No'
            ,maritalstatus as 'Marital Status',gender as Gender,bloodgroup as 'Blood Group',referencename as 'Reference Name',totalworkexperience as 'Total Work Experience',
            lastdrawnmonthlysalary as 'Last Drawn Monthly Salary',name_aadhaar as 'Aadhar Name',aadhaarcardno as 'Aadhar No',pancardno as 'Pan No',emailaddress as 'Email',
            current_buildingname as 'Current Building Name',current_streetname as 'Current Street Name' ,current_city as 'Current City' ,current_landmark as 'Current Landmark' ,
            current_pincode as 'Current Pincode',native_buildingname as 'Native Building Name',native_streetname as 'Native Street Name',native_city as 'Native City',native_landmark as 'Native Landmark',native_pincode as 'Native Pincode',
            esicno as 'Esic No',ctc as CTC,
            ifsccode as 'Bank IFSC Code',bankaccountnumber as 'Bank Account No',(select bankname from tbl_bank where bank_pid = bankmasterfid) as 'Bank Name',otherbankname as 'Other Bank Name'
             from tbl_VA_employeeinformation where  employeeinformation_pid = @ID;

                        --[familyinfo]
             select familymembername as 'Family Member Name',format(dateofbirth, 'dd-MM-yyyy') as 'Date Of Birth' ,relation as Relation,mobilenumber as 'Mobile No',aadharnumber as 'Aadhar No',
            Gender,Address,familyaadharcard as 'Family Aadhar Card' ,(select tbl_VA_occupationmaster.occupationdescription from tbl_VA_occupationmaster where occupationmaster_pid = occupation_fid) as Occupation
            from tbl_VA_employeeinformationfamilyinformation where employeeinformartion_fid = @ID;

                        --[qualification]
            select (select tbl_VA_degreemaster.degreename from tbl_VA_degreemaster where degreemaster_pid = degree_fid) as 'Degree Name', college_schoolname as 'College/School Name',
            universityname as 'University Name' , percentage_grade_class as 'Percentage', yearofpassing as 'Year Of Passing ',Specialization  ,qualificationcertificate as 'Qualification Certificate',educationtype as 'Education Type'
            from tbl_VA_employeeinformationqualification where employeeinformartion_fid = @ID;

            --[previouscompanydetails]
            select companyname as 'Company Name',companylocation as 'Company Location',format(joiningdate, 'dd-MM-yyyy') as 'Date Of Joining',leftdate as 'Left Date',
            (select reasondescription from tbl_VA_reasonmaster where reasonmaster_pid = reasonforleaving_fid) as 'Reason For Leaving' ,email_hr as 'HR Email' , workexperience as 'Work Experience',
            payslip as 'Pay Slip',relievingletter as 'Relieving Letter',experiencecertificate as 'Experience Certificate',designationscope as 'Designation Scope',basicsalary as 'Basic Salary'
            from tbl_VA_previouscompanydetails where employeeinformartion_fid = @ID;
";

            string err = "";
            var ds = Erp.ExecuteSql<DataSet>(sql,
                                      new Dictionary<string, object>() {
                            { "@ID", employeeID }
                                      }, out err);
            if (ds != null && ds.Tables.Count > 0)
            {
                DataTable employeeinformation = ds.Tables["employeeinformation"];
                DataTable familyinfo = ds.Tables["familyinfo"];
                DataTable qualification = ds.Tables["qualification"];
                DataTable previouscompanydetails = ds.Tables["previouscompanydetails"];

                var dic = employeeinformation.ToDictionaryArray();
                dic[0].Add( "Family Information", familyinfo.ToDictionaryArray() );
                dic[0].Add( "Employee Qualification", qualification.ToDictionaryArray() );
                dic[0].Add("Employee Previous Company Details", previouscompanydetails.ToDictionaryArray() );

                //string json_employeeinformation = JsonConvert.SerializeObject(employeeinformation);
                //string json_familyinfo  = JsonConvert.SerializeObject(familyinfo);
                //string json_qualification = JsonConvert.SerializeObject(qualification);
                //string json_previouscompanydetails = JsonConvert.SerializeObject(previouscompanydetails);


                return JsonConvert.SerializeObject(dic);


            }






            return null;
        }
        public void getAttendenceData(ErpScriptObject Erp)
        {

            var sql = @"select  'count_in' as CI,count(employee_pid) 'dcount' 
        from tbl_attendanceroster ar
        join tbl_employee emp on ar.employee_fid=emp.employee_pid
        join tbl_attendancetype att on ar.attendancetype_fid=att.attendancetype_pid
        join tbl_attendancetimerecord atr on ar.attendance_date_from=atr.attendance_date and emp.employee_pid=atr.employee_fid
                where atr.attendance_date=@date and att.attendancetypedisplaycode='PST' and atr.intime is not null and atr.outtime is null
                and ar.company_fid=@company2

                union all

select  'count_out' as CI,count(employee_pid) 'dcount' 
        from tbl_attendanceroster ar
        join tbl_employee emp on ar.employee_fid=emp.employee_pid
        join tbl_attendancetype att on ar.attendancetype_fid=att.attendancetype_pid
        join tbl_attendancetimerecord atr on ar.attendance_date_from=atr.attendance_date and emp.employee_pid=atr.employee_fid
                where atr.attendance_date=@date and att.attendancetypedisplaycode='PST' and atr.intime is not null and atr.outtime is not null and ar.company_fid=@company2

                union all

select  'Holiday' as CI,count(employee_pid) 'dcount' 
        from tbl_attendanceroster ar
        join tbl_employee emp on ar.employee_fid=emp.employee_pid
        join tbl_attendancetype att on ar.attendancetype_fid=att.attendancetype_pid
        join tbl_attendancetimerecord atr on ar.attendance_date_from=atr.attendance_date and emp.employee_pid=atr.employee_fid
              where atr.attendance_date=@date and att.attendancetypedisplaycode='PHY' and ar.company_fid=@company2

                union all

select  'Leave' as CI,count(employee_pid) 'dcount' 
        from tbl_attendanceroster ar
        join tbl_employee emp on ar.employee_fid=emp.employee_pid
        join tbl_attendancetype att on ar.attendancetype_fid=att.attendancetype_pid
                join tbl_attendancecategory ac on att.attendancecategory_fid=ac.attendancecategory_pid
        join tbl_attendancetimerecord atr on ar.attendance_date_from=atr.attendance_date and emp.employee_pid=atr.employee_fid
               where atr.attendance_date=@date and attendancecategorycode like 'LV%' and ar.company_fid=@company2

                                union all

select  'NotCheckedIn' as CI,count(employee_pid) 'dcount' 
        from tbl_attendanceroster ar
        join tbl_employee emp on ar.employee_fid=emp.employee_pid
        join tbl_attendancetype att on ar.attendancetype_fid=att.attendancetype_pid
        join tbl_attendancetimerecord atr on ar.attendance_date_from=atr.attendance_date and emp.employee_pid=atr.employee_fid
              where atr.attendance_date=@date and att.attendancetypedisplaycode='ABS' and ar.company_fid=@company2
				                               
											   union all

select  'WeeklyOff' as CI,count(employee_pid) 'dcount' 
        from tbl_attendanceroster ar
        join tbl_employee emp on ar.employee_fid=emp.employee_pid
        join tbl_attendancetype att on ar.attendancetype_fid=att.attendancetype_pid
        join tbl_attendancetimerecord atr on ar.attendance_date_from=atr.attendance_date and emp.employee_pid=atr.employee_fid
              where atr.attendance_date=@date and att.attendancetypedisplaycode='WEO' and ar.company_fid=@company2";


            var date = DateTime.Now.ToString("yyyy-MM-dd");
            var Company = "";// _app.CompanyID;
            if (!Fn.IsEmpty(Erp.GetFieldValue("attendencecompany")))
                Company = Erp.GetFieldValue("attendencecompany").ToString();
            if (!Fn.IsEmpty(Erp.GetFieldValue("attendencedate")))
                date = Fn.Format(Erp.GetFieldValue("attendencedate").ToString(), "yyyy-MM-dd");


            string err = "";
            var dt = Erp.ExecuteSql<DataTable>(sql,
                                      new Dictionary<string, object>() {
                            { "@date", "2019-04-01" },{"@company2",Company}
                                      }, out err);



            // Erp.ExecuteScript("data="+dt.ToJSON("","","",true,true)+"");
            Erp.ShowMessage(dt.Rows.Count.ToString(), "alert");
            foreach (DataRow dr in dt.Rows)
            {

                Erp.ExecuteScript("$('#" + dr["CI"] + "').val(" + dr["dcount"] + ");");



            }


        }

    }
}