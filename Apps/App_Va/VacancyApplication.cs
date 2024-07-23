using Erp.Common;
using Erp.Base.ScriptInterface;
using ErpModel.Core;
using HelperLib.DAL;
using HelperLib.Extensions;
using System;
using System.Collections.Generic;
using System.Data;
using System.Net.Http;
using System.Threading.Tasks;
using HelperLib.Conversion;
using Newtonsoft.Json;
using System.Linq;
using System.IO;
using System.Xml;
using Erp.Base.Security;

//using System.Web.Hosting;



namespace App_Va.Apps.App_Va
{

    public class API_Verification : ImplEntityScript, IEntityScript
    {
        Erp.Common.ApplicationInfo _app;
        IDBConfiguration _cfg;

        string jsonData = "";
        DataTable dt_wf = new DataTable();
        DataTable dt_company = new DataTable();
        DataTable dt_configuration = new DataTable();
        Dictionary<string, object> dic_data = new Dictionary<string, object>();
        string apistatuscode = "";
        string api_reference_id = "";
        string createdBy_User_Fid = "";
        bool isTokenExpired = false;
        bool enableEqialVerification = false;
        
        public void Init(ApplicationInfo app, IDBConfiguration cfg)
        {
            try
            {
                _app = app; _cfg = cfg;


                //Load Configuration
                VacancyHelper vh = new VacancyHelper();
                dt_configuration = vh.getConfiguration(Erp);

                if (Erp.Action == "LOAD" || Erp.Action == "SAVE")
                {
                    addLog(Erp.Action + " Started......................" + DateTime.Now.ToShortDateString() + ": " + DateTime.Now.ToShortTimeString());
                    addLog("  Logged user id : " + _app.CurrentUserID);


                    if (Erp.Action == "LOAD" && Erp.FormCode == "View_OnboardingHRMSWF")
                    {
                        if (dt_configuration.Rows.Count > 0 && !Fn.IsEmpty(dt_configuration.Rows[0]["layoutid"].C2Str()))
                        {
                            Erp.SetParam("window", "LayoutID", dt_configuration.Rows[0]["layoutid"].C2Str());
                        }
                        else
                        {
                            Erp.SetParam("window", "LayoutID", Fn.CStr(Settings.Appsettings["employeeinfoformtag"]));

                        }


                        



                    }
                    else
                    {
                        if (!Fn.IsEmpty(Erp.RecordID))
                        {

                            var sql = @"
--[tbl_steps]
select top 1 setting_xml from tbl_AP_wfsteps 
where stepnumber = (select top 1 level from tbl_AP_wfprocessinstances
left join tbl_AP_wfprocessmovement on currentmovementfid=wfprocessmovement_pid
left join tbl_AP_wfprocess on wfprocessfid=wfprocess_pid
where wfprocesscode='c616f4e1-394b-459d-8526-81c880d096a6' and _recordid=@ID and tbl_AP_wfprocess.active=1
)+1;

--[tbl_wf]
select i.isfinalaccept as isfinalaccept ,m.level as level,m.action as action,m.senderid as senderid,r.receiverid  as receiverid from tbl_AP_wfprocessinstances i
left join tbl_AP_wfprocessmovement m on currentmovementfid=wfprocessmovement_pid
left join tbl_AP_wfprocessrecievers r on r.processmovementfid=i.currentmovementfid
where i._recordid=@ID
--[tbl_company]
select top 1 isnull(isverifyemployeebyequal ,0) as isverifyemployeebyequal from tbl_core_company
where Company_Pid=@Users.CompanyID



";

                            var err = "";
                            DataSet ds = Erp.ExecuteSql<DataSet>(sql,
                                              new Dictionary<string, object>() {
                            { "@ID", Erp.RecordID }

                                              }, out err);

                            if (ds != null)
                            {
                                //dt_configuration= ds.Tables["tbl_configuration"];
                                dt_wf = ds.Tables["tbl_wf"];
                                dt_company = ds.Tables["tbl_company"];
                            }
                            enableEqialVerification = (dt_configuration != null && dt_configuration.Rows.Count > 0 && dt_configuration.Rows[0]["isverifyemployeebyequal"].C2Bool()).C2Bool(); //dt_company.Rows[0]["isverifyemployeebyequal"].C2Bool();




                            // if (dt_configuration.Rows.Count > 0 && !Fn.IsEmpty(dt_configuration.Rows[0]["layoutid"].C2Str()) && dt_configuration.Rows[0]["layoutid"].C2Str()== "Layout_Employeeinfo_hrms_Copy")
                            if(Erp.FormCode== "Layout_Employeeinfo_hrms_Copy")
                            {
                                Erp.SetParam("window", "allowed_experience_month_boundaries", dt_configuration != null && dt_configuration.Rows.Count > 0 ? dt_configuration.Rows[0]["allowed_experience_month_boundaries"] : 0);

                            }
                           


                            

                            addLog("Check Equal Varification :" + enableEqialVerification);

                            if (ds != null && ds.Tables["tbl_steps"].Rows.Count > 0)
                            {
                                jsonData = ds.Tables["tbl_steps"].Rows[0]["setting_xml"].C2Str();
                                if (!Fn.IsEmpty(jsonData))
                                    dic_data = JsonConvert.DeserializeObject<Dictionary<string, object>>(jsonData);
                            }




                            var ent = new ErpEntity("tbl_VA_employeeinformation", Erp.RecordID, _cfg);
                            //ent.LoadEntity();
                            ent.LoadEntity("api_reference_id,apistatuscode,createdBy_User_Fid,tokeninitializetime");
                            api_reference_id = ent["api_reference_id"].C2Str();
                            apistatuscode = ent["apistatuscode"].C2Str();
                            createdBy_User_Fid = ent["createdBy_User_Fid"].C2Str();
                            DateTime tokeninitializetime = ent["tokeninitializetime"].C2Date();
                            DateTime dm = DateTime.Now;
                            //checking token expired or not for data fetching 
                            isTokenExpired = (dm - tokeninitializetime).TotalHours > 24;
                            isTokenExpired = ent["tokeninitializetime"].ToString() == "" && false;

                            addLog("Checking Api Status mode=" + Erp.GetProp("mode").C2Str() + " apistatuscode=" + apistatuscode);

                            if (Erp.GetProp("mode").C2Str() == "_EmpID" && Fn.IsEmpty(apistatuscode) && !enableEqialVerification)
                            {
                                apistatuscode = "2";
                                isTokenExpired = false;
                                api_reference_id = "123";
                            }

                            if (dt_wf != null && dt_wf.Rows.Count > 0)
                                addLog("WF checking: Receiver ID : " + dt_wf.Rows[0]["receiverid"].C2Str());
                            else
                                addLog("WF is null");
                            if (Erp.Action == "SAVE" && dt_wf.Rows.Count > 0 && Erp.GetProp("mode").C2Str() == "_EmpID" && dt_wf.Rows.Count > 0 && dt_wf.Rows[0]["receiverid"].C2Str() == _app.CurrentUserID && apistatuscode == "1")
                            {
                                var ent2 = new ErpEntity("tbl_VA_employeeinformation", Erp.RecordID, _cfg);
                                ent2["apistatuscode"] = "2";
                                ent2.ModifiedBy = _app.CurrentUserID;
                                ent2.CompanyID = _app.CompanyID;
                                ent2.MetaData = _app.MetaData;
                                //ent.DisableAutoCalculation=true;
                                bool success = ent2.Save();
                                Erp.SetDisplay("html_EmployeeSubmit", true);
                            }
                            if (Erp.LayoutMode == "E" && dt_wf != null && dt_wf.Rows.Count > 0 && Erp.GetProp("mode").C2Str() == "_EmpID")
                            {
                                Erp.SetEnable("ColumnPanel51", true);
                                // Erp.SetEnable("ColumnPanel55", false);
                            }
                            if (Erp.LayoutMode == "E" && dt_wf != null && dt_wf.Rows.Count == 0 && Erp.GetProp("mode").C2Str() != "_EmpID")
                            {
                                Erp.SetEnable("ColumnPanel51", true);
                                Erp.SetEnable("ColumnPanel44", true);
                                Erp.SetEnable("ColumnPanel50", true);
                                Erp.SetEnable("ColumnPanel46", true);
                                // Erp.SetEnable("ColumnPanel55", false);
                            }
                        }

                    }
                }
            }catch(Exception e)
            {
                addLog("exception in init method " + e.Message);
            }

        }
        public bool OnEntitySaving()
        {
            return true;
        }

        public void LayoutCreated(IEntityRenderer renderer)
        {

            //            if (Erp.LayoutMode == "A" && !Fn.IsEmpty(Erp.GetProp("tilesid").C2Str()))
            //            {
            //                string sql = @"select top 1 ctcfromrange,ctctorange,branch_fid,designation_fid,department_fid,region_fid,employeereporting_fid,employeecategory_fid,employeeothermaster1_fid
            //,employeeothermaster2_fid
            //,employeeothermaster3_fid
            //,employeeothermaster4_fid
            //,employeeothermaster5_fid
            //,employeeothermaster6_fid
            //,employeeothermaster7_fid
            //,employeeothermaster8_fid
            //,employeeothermaster9_fid
            //,employeeothermaster10_fid
            //,employeeothermaster11_fid
            //,employeeothermaster12_fid
            //,employeeothermaster13_fid
            //,employeeothermaster14_fid
            //,employeeothermaster15_fid
            //,employeeothermaster16_fid
            //,employeeothermaster17_fid
            //,employeeothermaster18_fid



            //from tbl_TP_positioncode where positioncode_pid=@posID";
            //                string err = "";
            //                DataTable tbl_pos = Erp.ExecuteSql<DataTable>(sql,
            //                                                         new Dictionary<string, object>() {
            //                                             {
            //                                               "@posID", Erp.GetProp("tilesid").C2Str()}
            //                                                         }
            //                                                         , out err);
            //                if (tbl_pos != null && tbl_pos.Rows.Count > 0)
            //                {
            //                    //Erp.SetFieldValue("@reportinghead", tbl_pos.Rows[0]["employeereporting_fid"].C2Str());
            //                    //Erp.SetFieldValue("@category_fid", tbl_pos.Rows[0]["employeecategory_fid"].C2Str());
            //                    //Erp.SetFieldValue("@employeeothermaster3_fid", tbl_pos.Rows[0]["employeeothermaster3_fid"].C2Str());
            //                    //Erp.SetFieldValue("@employeeothermaster5_fid", tbl_pos.Rows[0]["employeeothermaster5_fid"].C2Str());
            //                    //Erp.SetFieldValue("@employeeothermaster6_fid", tbl_pos.Rows[0]["employeeothermaster6_fid"].C2Str());
            //                    //Erp.SetFieldValue("@employeeothermaster11_fid", tbl_pos.Rows[0]["employeeothermaster11_fid"].C2Str());
            //                    //Erp.SetFieldValue("@lastdrawnssalary", tbl_pos.Rows[0]["ctcfromrange"].C2Dbl());
            //                    //Erp.SetFieldValue("@ctc", tbl_pos.Rows[0]["ctctorange"].C2Dbl());
            //                    //Erp.SetFieldValue("@position_fid", Erp.GetProp("tilesid").C2Str());

            //                }
            //            }
        }
        public bool DisableControl(string htmlId, string fieldName)
        {

            string[] html_ids = {"html_lastmonthsal","html_ToatalWorkExp","chk_fresher","chk_experience", "html_reportinghead" , "html_category", "html_ref","date_scheduledate","date_expecteddateofconfirmation",
                "html_EmployeeType" ,"html_StaffOrientation", "html_Subject","html_EmploymentType", "html_Division","html_monthlysal","html_prevEPFno"};
            string[] basic_htmlids = { "html_phone", "sel_bloodgroup", "html_emptitle", "html_Fname", "html_aadhar", "html_pan", "html_dob", "html_age", "html_Mname", "html_spousename", "html_gender", "html_maritalstatus", "html_bloodgroup", "html_aadharname", "html_phone", "html_Email" };

            string[] html_ids1 = {"html_lastmonthsal","html_ToatalWorkExp", "html_reportinghead" , "html_category", "html_ref","date_scheduledate","date_expecteddateofconfirmation",
                "html_EmployeeType" ,"html_StaffOrientation", "html_Subject","html_EmploymentType", "html_Division","html_monthlysal","html_loc","html_branch","html_dep","html_grade","html_des","html_state","html_Ric"};
            if (Erp.FormCode == "Layout_Employeeinformation_madhavbaug")
                html_ids = html_ids1;
            if (Erp.FormCode == "Layout_Employeeinformation_madhavbaug" && html_ids.Contains(htmlId) && Erp.GetProp("mode").C2Str() == "_EmpID")
                return true;
            if (htmlId == "html_phone" && dt_wf != null && dt_wf.Rows.Count > 0)
                return true;
            if (dt_wf != null && dt_wf.Rows.Count > 0 && html_ids.Contains(htmlId) && dt_wf.Rows[0]["action"].C2Str() != "reject")
                return true;
            if (htmlId == "html_Email" && Erp.GetProp("mode").C2Str() == "_EmpID")
                return true;
            if (dt_wf.Rows.Count > 0 && basic_htmlids.Contains(htmlId) && dt_wf.Rows[0]["action"].C2Str() != "reject" && Erp.GetProp("mode").C2Str() != "_EmpID")
                return true;
            if (Erp.FormCode == "Layout_Employeeinformation_madhavbaug" && (htmlId == "chk_fresher" || htmlId == "chk_experience"))
                return false;
            //if (Erp.GetProp("mode") == "_appr")
            //{

            //    string[] a = {
            //"tab_addressinfo-tabLink",
            //"TabPanel5-tabLink",
            //"TabPanel6-tabLink",
            //"TabPanel7-tabLink",
            //"TabPanel8-tabLink",
            //"TabPanel9-tabLink",
            //"TabPanel10-tabLink",
            //"TabPanel11-tabLink",
            //"TabPanel12-tabLink"
            //    };
            //    if (a.Contains(htmlId))
            //        return true;
            //}
            //else if(Erp.GetProp("mode") == "principle")
            //{
            //    string[] arr = {
            //    "tab_categoryinfo-tabLink",
            //    "tab_addressinfo-tabLink",
            //    "TabPanel5-tabLink",
            //    "TabPanel6-tabLink",
            //    "TabPanel7-tabLink",
            //    "TabPanel8-tabLink",
            //    "TabPanel9-tabLink",
            //    "TabPanel10-tabLink",
            //    "TabPanel11-tabLink",
            //    "TabPanel12-tabLink",
            //    "tab_HR-tabLink" };
            //    if (arr.Contains(htmlId))
            //        return true;

            //}
            return false;
        }
        public bool HideControl(string htmlId, string fieldName)
        {


            if (Erp.FormCode == "View_OnboardingHRMSWF")
            {
                if (htmlId == "btn_cancelapplication" && (!C.Eq(Erp.GetProp("mode"), "draft") && !C.Eq(Erp.GetProp("mode"), "cancel") && !C.Eq(Erp.GetProp("mode"), "_appr")))
                    return true;

                if ((htmlId == "btn_add" || htmlId == "btn_edit" || htmlId == "btn_delete" || htmlId == "btn_verify" || htmlId == "btn_takeaction") && (C.Eq(Erp.GetProp("mode"), "submitted") || C.Eq(Erp.GetProp("mode"), "cancel")))
                    return true;
                if ((htmlId == "btn_takeaction") && C.Eq(Erp.GetProp("mode"), "draft"))
                    return true;
                if ((htmlId == "btn_add" || htmlId == "btn_edit" || htmlId == "btn_delete" || htmlId == "btn_verify" || htmlId == "btn_takeaction") && C.Eq(Erp.GetProp("mode"), "accepted"))
                    return true;
                if ((htmlId == "btn_add" || htmlId == "btn_edit" || htmlId == "btn_delete" || htmlId == "btn_verify") && C.Eq(Erp.GetProp("mode"), "_appr"))
                    return true;
                if ((htmlId == "btn_add" || htmlId == "btn_delete" || htmlId == "btn_takeaction") && C.Eq(Erp.GetProp("mode"), "rejected"))
                    return true;

                if (htmlId == "btn_add")
                {
                    string err1 = "";
                    var CheckingApp = new global::Erp.Base.Security.RegistrationInfo();
                    var isPositionConfigInstalled = CheckingApp.AppIsValid("App_TP") && Erp.ExecuteSql<bool>("select top 1 1 from tbl_TP_positioncode", null, out err1);


                    if (isPositionConfigInstalled)
                        return true;
                    else
                        return false;

                    //Erp.ShowMessage(isHrmthread.C2Str(),"error");
                }
            }



            if (apistatuscode == "1" && isTokenExpired && Erp.GetProp("mode").C2Str() == "_EmpID")
            {
                if (htmlId == "pnl_informationPanel")
                    return true;
                else if (htmlId == "pnl_approval")
                    return true;
                else if (htmlId == "div_alreadysubmitted")
                    return true;
                else
                    return false;



                //if(htmlId!= "MainPanel")
                //return true;
            }




            if (htmlId == "btn_hr_save" && Erp.LayoutMode == "E" && dt_wf.Rows[0]["isfinalaccept"].C2Bool() && (dt_configuration != null && dt_configuration.Rows.Count > 0 && dt_configuration.Rows[0]["isenableeditinginwf"].C2Bool()))
                return false;
            else if (htmlId == "btn_hr_save")
                return true;


            //Erp.GetProp("mode").C2Str() != "_EmpID" &&
            //if wf not initiated and logged user not created  by then hide
            if (htmlId == "MainPanel" &&
                ((Erp.LayoutMode == "E" && dt_wf.Rows.Count > 0 && dt_wf.Rows[0]["receiverid"].C2Str() != _app.CurrentUserID && dt_wf.Rows[0]["action"].C2Str() != "reject" && !dt_wf.Rows[0]["isfinalaccept"].C2Bool())
                || (dt_configuration != null && dt_configuration.Rows.Count > 0 && !dt_configuration.Rows[0]["isenableeditinginwf"].C2Bool())))
            {

                var _s = "Layout mode=" + Erp.LayoutMode + "  Receiver ID" + dt_wf.Rows[0]["receiverid"].C2Str() + "  currentUserID=" + _app.CurrentUserID + "  action=" + dt_wf.Rows[0]["action"].C2Str() + " isfinalaccept=" + dt_wf.Rows[0]["isfinalaccept"].C2Bool() + " isenableeditinginwf" + dt_configuration.Rows[0]["isenableeditinginwf"].C2Bool();
                addLog("Main Panel hide condition data : " + _s);
                addLog("Main Panel hide condition " + (Erp.LayoutMode == "E" && dt_wf.Rows.Count > 0 && dt_wf.Rows[0]["receiverid"].C2Str() != _app.CurrentUserID && dt_wf.Rows[0]["action"].C2Str() != "reject" && !dt_wf.Rows[0]["isfinalaccept"].C2Bool()).C2Bool() + "  " + (dt_configuration != null && dt_configuration.Rows.Count > 0 && !dt_configuration.Rows[0]["isenableeditinginwf"].C2Bool()).C2Bool());
                return true;
            }

            else if (htmlId == "div_alreadysubmitted" &&
                (Erp.GetProp("mode").C2Str() != "_EmpID"
                || (Erp.GetProp("mode").C2Str() != "_EmpID" && apistatuscode == "3")
                || (Erp.GetProp("mode").C2Str() == "_EmpID" && apistatuscode != "3")))//&& (apistatuscode != "3" ||(dt_wf.Rows[0]["receiverid"].C2Str() == _app.CurrentUserID && apistatuscode != "3")))//&& ((Erp.LayoutMode != "E") || (Erp.GetProp("mode").C2Str() != "_EmpID") || ((dt_wf.Rows.Count > 0 && dt_wf.Rows[0]["receiverid"].C2Str() == _app.CurrentUserID && apistatuscode != "3") || dt_wf.Rows.Count <= 0 || apistatuscode != "")))
                return true;
            else if (htmlId == "HeaderPanel" && Erp.GetProp("mode").C2Str() == "_EmpID")
                return true;
            else if (htmlId == "pnl_approval" && ((Erp.LayoutMode != "E" && dt_wf.Rows.Count > 0 && dt_wf.Rows[0]["receiverid"].C2Str() != _app.CurrentUserID) || Erp.GetProp("mode").C2Str() == "_EmpID" || Erp.LayoutMode == "A" || dt_wf.Rows.Count <= 0))
                return true;
            else if (htmlId == "pnl_takeaction" && (Erp.GetProp("mode").C2Str() == "_EmpID" || dt_wf.Rows.Count > 0 && dt_wf.Rows[0]["receiverid"].C2Str() != _app.CurrentUserID))
                return true;

            if (dic_data.ContainsKey(htmlId) && dt_wf.Rows[0]["action"].C2Str() != "reject")
            {

                return !dic_data[htmlId].C2Bool();
            }
            if (htmlId == "Button30")
                return dic_data.ContainsKey("TabPanel12") ? !dic_data["TabPanel12"].C2Bool() : false;
            else if (htmlId == "tab_HR")
            {
                //if (dic_data.ContainsKey("tab_HR"))
                // return !dic_data["tab_HR"].C2Bool();
            }
            else if (htmlId == "html_positionInfo" && Erp.GetProp("mode").C2Str() == "_EmpID")
                return true;

            else if ((htmlId == "pnl_verificationPanel" && Erp.LayoutMode != "E") ||
                (htmlId == "pnl_verificationPanel" && dt_wf.Rows.Count > 0 && dt_wf.Rows[0]["action"].C2Str() == "reject") ||
                (htmlId == "pnl_verificationPanel" && !Fn.IsEmpty(api_reference_id) && dt_wf.Rows.Count > 0 && (Erp.GetProp("mode") == "_EmpID")) || (htmlId == "pnl_verificationPanel" && !enableEqialVerification))
                return true;

            else if ((htmlId == "pnl_verificationPanel") && ((dt_wf.Rows.Count <= 0) || (dt_wf.Rows.Count > 0 && Erp.GetProp("mode") != "_EmpID") || (htmlId == "pnl_verificationPanel" && !enableEqialVerification)))
                return true;

            else if (htmlId == "div_success" && ((Erp.LayoutMode != "E") || (dt_wf.Rows.Count > 0 && Erp.GetProp("mode") != "_EmpID" && dt_wf.Rows[0]["receiverid"] != _app.CurrentUserID)))
                return true;

            else if (htmlId == "html_EmployeeSubmit" && apistatuscode != "2" && apistatuscode != "1" && dt_wf.Rows.Count > 0 && Erp.GetProp("mode") != "_EmpID" && dt_wf.Rows[0]["receiverid"] != _app.CurrentUserID)
                return true;

            else if (htmlId == "pnl_informationPanel" && Erp.LayoutMode == "E" && dt_wf.Rows.Count > 0 && dt_wf.Rows[0]["action"].C2Str() != "reject" && ((Fn.IsEmpty(api_reference_id) && dt_wf.Rows.Count > 0 && Erp.GetProp("mode") == "_EmpID") || ((apistatuscode == "3" || apistatuscode == "") && Erp.GetProp("mode") == "_EmpID")))
                return true;

            else if (htmlId == "html_aadharname" && Fn.IsEmpty(apistatuscode))
                return true;

            if (Erp.GetProp("mode") == "_EmpID" && (C.Eq(htmlId, "btn_Next")))
                return false;


            if (dt_wf.Rows.Count <= 0)
            {
                if (C.Eq(htmlId, "tab_categoryinfo") || C.Eq(htmlId, "tab_addressinfo") || C.Eq(htmlId, "TabPanel5") || C.Eq(htmlId, "TabPanel6") || C.Eq(htmlId, "TabPanel7") || C.Eq(htmlId, "TabPanel8") || C.Eq(htmlId, "TabPanel9") || C.Eq(htmlId, "TabPanel10") || C.Eq(htmlId, "TabPanel11") || C.Eq(htmlId, "TabPanel12") || C.Eq(htmlId, "tab_HR"))
                    return true;
                if (htmlId == "btn_Next")
                    return true;
                if (htmlId == "pnl_takeaction")
                    return true;
            }
            else if (dt_wf.Rows[0]["action"].C2Str() == "reject" && (C.Eq(htmlId, "btn_Next") || C.Eq(htmlId, "tab_categoryinfo") || C.Eq(htmlId, "tab_addressinfo") || C.Eq(htmlId, "TabPanel5") || C.Eq(htmlId, "TabPanel6") || C.Eq(htmlId, "TabPanel7") || C.Eq(htmlId, "TabPanel8") || C.Eq(htmlId, "TabPanel9") || C.Eq(htmlId, "TabPanel10") || C.Eq(htmlId, "TabPanel11") || C.Eq(htmlId, "TabPanel12") || C.Eq(htmlId, "tab_HR")))
                return true;
            else if (htmlId == "btn_Next" && dt_wf.Rows.Count > 0 && dt_wf.Rows[0]["level"].C2Int() < 1)
                return true;
            //changed for button next being invisible by default for candidate view

            else if (dt_wf.Rows.Count > 0)
            {
                if ((C.Eq(htmlId, "html_Save") || C.Eq(htmlId, "html_Cancel")) && dt_wf.Rows[0]["action"].C2Str() != "reject")
                    return true;
                //if (htmlId == "pnl_takeaction" && (dt_wf.Rows[0]["level"].C2Str() == "1" || dt_wf.Rows[0]["action"].C2Str() == "reject"))
                if (htmlId == "pnl_takeaction" && (Erp.GetProp("mode") == "_EmpID" || dt_wf.Rows[0]["action"].C2Str() == "reject"))
                    return true;
            }




            if ((htmlId == "btn_Save" || htmlId == "btn_cancel" || htmlId == "html_EmployeeSubmit") && Erp.GetProp("mode") != "_EmpID")
                return true;
            if (Erp.GetProp("mode") == "_appr")
            {
                if (htmlId == "pnl_takeaction")
                    return false;
                if (htmlId == "html_Submit" || htmlId == "html_Save" || htmlId == "html_Cancel")
                    return true;

            }







            return false;

        }
        public bool ControlCreating(string htmlId, XmlNode node)
        {
            if (Erp.GetProp("mode") == "rejected" && htmlId == "btn_verify")
            {
                node.Attributes["Label"].Value = "Re-Submit";
            }
            return true;
        }

        public void GetGridSql(ref string sql, string htmlId, XmlNode node, XmlNode relNode)
        {
            if (Erp.FormCode == "View_OnboardingHRMSWF")
            {
                if (htmlId == "dgData" && C.Eq(Erp.GetProp("mode"), "submitted"))
                    sql = sql.Replace("--where", "and currentstatus is not null and tbl_VA_employeeinformation.[createdBy_User_Fid]=@Users.UserID");
                else if (htmlId == "dgData" && C.Eq(Erp.GetProp("mode"), "cancel"))
                    sql = sql.Replace("--where", "and currentstatus is not null and tbl_VA_employeeinformation.[createdBy_User_Fid]=@Users.UserID and isnull(isempdataposted,0)=0 and  currentstatus <> 'Cancelled'");
                else if (htmlId == "dgData" && C.Eq(Erp.GetProp("mode"), "draft"))
                    sql = sql.Replace("--where", "and (currentstatus is null or currentstatus = '' and (reportstatus = 'Principle')) and tbl_VA_employeeinformation.[createdBy_User_Fid]=@Users.UserID");
                else if (htmlId == "dgData" && C.Eq(Erp.GetProp("mode"), "rejected"))
                {
                    sql = sql.Replace("--joins", @" join tbl_AP_wfprocessinstances on _recordid=employeeinformation_pid
and (tbl_AP_wfprocessinstances.IsDeleted is NULL or tbl_AP_wfprocessinstances.IsDeleted=0) and (tbl_AP_wfprocessinstances.IsDeactivated is NULL or tbl_AP_wfprocessinstances.IsDeactivated=0)
join tbl_AP_wfprocessmovement on wfprocessmovement_pid=currentmovementfid and [action] = 'reject' and tbl_AP_wfprocessmovement.processinstancesfid=wfprocessinstances_pid 
and (tbl_AP_wfprocessmovement.IsDeleted is NULL or tbl_AP_wfprocessmovement.IsDeleted=0) and (tbl_AP_wfprocessmovement.IsDeactivated is NULL or tbl_AP_wfprocessmovement.IsDeactivated=0)
");
                    sql = sql.Replace("--where", "and  tbl_VA_employeeinformation.[createdBy_User_Fid] = @Users.UserID");
                }
                else if (htmlId == "dgData" && C.Eq(Erp.GetProp("mode"), "accepted"))
                {
                    sql = sql.Replace("--joins", @" join tbl_AP_wfprocessinstances on _recordid=employeeinformation_pid
and (tbl_AP_wfprocessinstances.IsDeleted is NULL or tbl_AP_wfprocessinstances.IsDeleted=0) and (tbl_AP_wfprocessinstances.IsDeactivated is NULL or tbl_AP_wfprocessinstances.IsDeactivated=0)
join tbl_AP_wfprocessmovement on wfprocessmovement_pid=currentmovementfid and [action] = 'accept' and tbl_AP_wfprocessmovement.processinstancesfid=wfprocessinstances_pid 
and (tbl_AP_wfprocessmovement.IsDeleted is NULL or tbl_AP_wfprocessmovement.IsDeleted=0) and (tbl_AP_wfprocessmovement.IsDeactivated is NULL or tbl_AP_wfprocessmovement.IsDeactivated=0)
");

                    sql = sql.Replace("--where", "and  tbl_VA_employeeinformation.[createdBy_User_Fid]=@Users.UserID");


                }
                else if (htmlId == "dgData" && C.Eq(Erp.GetProp("mode"), "_appr"))
                {

                    sql = sql.Replace("--joins", @" join tbl_AP_wfprocessinstances on _recordid=employeeinformation_pid
and (tbl_AP_wfprocessinstances.IsDeleted is NULL or tbl_AP_wfprocessinstances.IsDeleted=0) and (tbl_AP_wfprocessinstances.IsDeactivated is NULL or tbl_AP_wfprocessinstances.IsDeactivated=0)

 join tbl_AP_wfprocessmovement on wfprocessmovement_pid=currentmovementfid and [action] = 'submit' and tbl_AP_wfprocessmovement.processinstancesfid=wfprocessinstances_pid 
and (tbl_AP_wfprocessmovement.IsDeleted is NULL or tbl_AP_wfprocessmovement.IsDeleted=0) and (tbl_AP_wfprocessmovement.IsDeactivated is NULL or tbl_AP_wfprocessmovement.IsDeactivated=0)

 join tbl_AP_wfprocessrecievers on processmovementfid =currentmovementfid and tbl_AP_wfprocessrecievers.processinstancesfid=wfprocessinstances_pid
and (tbl_AP_wfprocessrecievers.IsDeleted is NULL or tbl_AP_wfprocessrecievers.IsDeleted=0) and (tbl_AP_wfprocessrecievers.IsDeactivated is NULL or tbl_AP_wfprocessrecievers.IsDeactivated=0)
and tbl_AP_wfprocessrecievers.[receiverid]=@Users.UserID");
                    sql = sql.Replace("--where", "and  currentstatus <> 'Cancelled' ");
                }
                else if (htmlId == "dgData" && C.Eq(Erp.GetProp("mode"), "CR"))
                {


                    sql = sql.Replace("--joins", @" join tbl_AP_wfprocessinstances on _recordid=employeeinformation_pid and isfinalaccept ");

                    sql = sql.Replace("--where", "and  tbl_VA_employeeinformation.[createdBy_User_Fid]=@Users.UserID ");


                }
                else if (htmlId == "dgData" && C.Eq(Erp.GetProp("mode"), "CR"))
                {




                    sql = sql.Replace("--where", "and  tbl_VA_employeeinformation.[createdBy_User_Fid]=@Users.UserID and tbl_VA_employeeinformation.isempdataposted");


                }
            }
        }


        public void OnEntitySaved(string error)
        {
            if (error.IsBlank())
            {
                if (Erp.LayoutMode == "A")
                {
                    var PosID = Erp.GetProp("tilesid").C2Str();
                    if (!Fn.IsEmpty(PosID))
                    {
                        var ent = new ErpEntity("tbl_TP_positioncode", PosID, _cfg);
                        ent["positionaction_fid"] = "INPROGRESS";
                        ent.ModifiedBy = _app.CurrentUserID;
                        ent.CompanyID = _app.CompanyID;
                        ent.MetaData = _app.MetaData;
                        //ent.DisableAutoCalculation=true;
                        bool success = ent.Save();
                    }
                    //ent.EvaluateCalculatedFields();
                }
            }
        }

        public void ExecuteCommand(string sender, Dictionary<string, object> args)
        {
            try
            {
                addLog("In Execute Command with sender " + sender);


                if (sender == "submit")
                {

                    string status = args.Get("status").C2Str();
                    string recids = args.Get("recid").C2Str();
                    string rec_array = recids;
                    string err = "";

                    string currentLoggedInUser = _app.CurrentUserID;



                    #region checking current user has authority to initiate WF or not

                    var _err = "";
                    var currentReceiverID = Erp.ExecuteSql<string>(@"select top 1 isnull(receiverid ,'') as receiverid from tbl_AP_wfprocessinstances
join tbl_AP_wfprocessmovement m on currentmovementfid = wfprocessmovement_pid 
join tbl_AP_wfprocessrecievers r on r.processmovementfid = m.wfprocessmovement_pid and r.processinstancesfid = wfprocessinstances_pid where _recordid =@_recid"
                                                                , new Dictionary<string, object>()
                                                                {
                                                                    {"@_recid", recids}
                                                                }, out _err
                                                                );

                    addLog("currentLoggedInUser=" + currentLoggedInUser);
                    addLog("currentReceiverID" + currentReceiverID);
                    addLog("condition" + (currentReceiverID != currentLoggedInUser));
                    if (currentReceiverID != null && currentReceiverID != currentLoggedInUser)
                    {
                        addLog("UnAuthorised user Access");
                        Erp.ExecuteScript("Erp.ShowDialog({title:'Take Action',message:'You Do Not Have Sufficient Privilege to Take this action',iconText:''},'OK',function(cmd){Erp.CloseWindow();$('#MainPanel').hide();});");

                        args["isWFFailed"] = "1";
                        addLog("WF Failed ");
                        return;
                    }
                    #endregion

                    addLog("Authorised user Access");
                    addLog("recids= " + recids);
                    string EmployeeID = "";
                    //ds.Tables["dt_employee"].Rows[0]["employee_pid"].C2Str()==""?"":ds.Tables["dt_employee"].Rows[0]["employee_pid"].C2Str();
                    //StringBuilder sql = new StringBuilder();
                    string sqlquery = "";
                    if (recids != "" || recids != null)
                    {

                        Dictionary<string, object> Notification = new Dictionary<string, object>() {
          {
            "EntityID","tbl_VA_employeeinformation"}
          ,
          {
            "RecordID",rec_array}
          ,
          {
            "UserID",""},
                        { "levelremarks",Erp.GetFieldValue("html_app_remark").C2Str()
                        }
          ,
          {
            "Title","On-Boarding Form Approval Request <br> Employee: [Field.firstname]"}
          ,
          {
            "Message","Please take action on the On-Boarding Form Approval Request for Employee: [Field.firstname]"}
          ,
          {
            "Image",""}
          ,
          {
            "Action","<Action><Type>VIEWFORM</Type><Responsive>1</Responsive><Entity>tbl_VA_employeeinformation</Entity><Form>View_OnboardingHRMSWF</Form><RecordID>"+rec_array+"</RecordID><RefreshGrid>0</RefreshGrid><GlobalButton>0</GlobalButton><Title></Title><Parameter>mode=_appr</Parameter><Location>Self</Location></Action>"}
        };

                        Dictionary<string, object> Data = new Dictionary<string, object>() {{ "levelremarks",Erp.GetFieldValue("html_app_remark").C2Str()
                        } };


                        var ProcessInstance = global::Erp.Base.ScriptInterface.Script.LoadDynamic("APP_AP.DLL", "App_Ap.Apps.App_Ap.WorkFlowProcess", out err);
                        //WorkFlowActions ProcessInstance = new WorkFlowActions(_app, _cfg);
                        ProcessInstance.App = _app;
                        ProcessInstance.Cfg = _cfg;
                        //string currentMovementID = ProcessInstance.ProcessWorkFlow("c616f4e1-394b-459d-8526-81c880d096a6", "tbl_VA_employeeinformation", rec_array, _app.CurrentUserID, status, Notification, EmployeeID);

                        Dictionary<string, object> currentMovementID = ProcessInstance.ProcessWorkFlow("c616f4e1-394b-459d-8526-81c880d096a6", "tbl_VA_employeeinformation", rec_array, _app.CurrentUserID, status, Data);  //added by vishwajeet date 30-10-2023.             

                        if (currentMovementID.ContainsKey("Message") && !Fn.Contains(currentMovementID["Message"], "Configuration"))
                        {
                            sqlquery = "Update tbl_VA_employeeinformation set currentstatus='" + currentMovementID["MovementID"] + "',submitteddate=getdate() where employeeinformation_pid='" + rec_array + "' ;";
                            //                        sqlquery += @"declare @wflevel varchar(20);
                            //set @wflevel=(select m.level as level  
                            //from tbl_AP_wfprocessinstances i
                            //left join tbl_AP_wfprocessmovement m on currentmovementfid=wfprocessmovement_pid
                            //left join tbl_AP_wfprocessrecievers r on r.processmovementfid=i.currentmovementfid
                            //where i._recordid='" + rec_array + @"' )
                            //if (@wflevel='2')
                            //begin
                            // update tbl_VA_employeeinformation set apistatuscode=3 where employeeinformation_pid='" + rec_array + @"'
                            //end;";

                        }
                        if (dt_configuration != null && dt_configuration.Rows.Count > 0 && dt_configuration.Rows[0]["enableappointmentletter"].C2Bool() && status == "accept" && currentMovementID.ContainsKey("IsLastLevel") && currentMovementID["IsLastLevel"].C2Bool())
                        {
                            string appointmentqry = @"select top 1 isnull(emailaddress,'') as emailaddress,isnull(campusemailid,'') as campusemailaddress from tbl_VA_employeeinformation
join tbl_AP_wfprocessinstances on employeeinformation_pid=_recordid
join tbl_AP_wfprocessrecievers on tbl_AP_wfprocessrecievers.processinstancesfid=wfprocessinstances_pid
where employeeinformation_pid=@PID and isfinalaccept = 1 and action = 'Accept' and currentmovementfid = @movementID";

                            DataTable dt_appointmentresult = Erp.ExecuteSql<DataTable>(appointmentqry,
                                                                                               new Dictionary<string, object>() {
                                                 {
                                                   "@PID", Erp.RecordID.C2Str()},{"@movementID", currentMovementID["MovementID"].C2Str()}

                                                                                               }
                                                                                               , out err);

                            if (dt_appointmentresult != null && dt_appointmentresult.Rows.Count > 0)
                            {
                                var appointmentemail = dt_appointmentresult.Rows[0]["emailaddress"] + "," + dt_appointmentresult.Rows[0]["campusemailaddress"];
                                appointmentemail = appointmentemail.Trim(',');


                                #region new code for generate Appointment Letter

                                string file = "";

                                var qs = new System.Collections.Specialized.NameValueCollection();
                                qs["ID"] = recids;// Erp.RecordID.C2Str();
                                                  //qs["Rpttype"] = "Printwithstamp";
                                var rpt = new Erp.Base.Reporting.ErpReport(_cfg);
                                rpt.MetaData = _app.GetMetaData(_cfg, "tbl_VA_employeeinformation");
                                rpt.ReportID = dt_configuration.Rows[0]["appointmentletterid"].C2Str() == "" ? "48fd81a9-a26f-4195-93b7-594f6e8412a5" : dt_configuration.Rows[0]["appointmentletterid"].C2Str();
                                rpt.QS = qs;
                                rpt.AppUrl = _app.AbsoluteUrl;
                                rpt.AppInfo = _app;
                                rpt.CompanyIds = _app.CompanyID.C2Str();
                                string Filename = "AppointmentLetter";
                                file = Path.Combine(_app.TempDirectory, Filename + ".pdf");
                                Erp.SetSessionData("Rpt_invoice", "");
                                File.WriteAllBytes(file, rpt.ExportReport("PDF", null));


                                #endregion





                                var Appointmentletterstatus = Erp.SendMail(new Dictionary<string, object>(){
                                    {
                                      "UserID",""}
                                    ,
                                    {
                                      "RecordID",Erp.RecordID.C2Str()}
                                    ,
                                    {
                                      "EmailConfigCode","default"}
                                    ,
                                    {
                                      "EntityID","tbl_VA_employeeinformation"}
                                    ,
                                    {
                                      "TemplateID",dt_configuration.Rows.Count>0 && dt_configuration.Rows[0]["appointmentlettertemplateid"].C2Str()!=""?dt_configuration.Rows[0]["appointmentlettertemplateid"].C2Str():"df59b7d5-f4a3-48a8-9c3c-e48a5eeb68ec"}
                                    ,
                                    {
                                      "EmailSubject","Employee On-Boarding Form"}
                                    ,
                                    {
                                      "EmailTo",appointmentemail},{"Attachments",file}
                                    ,
                                    {
                                      "ForceSend",true}
                         });
                            }

                        }

                        if (status == "reject")
                        {
                            if (dt_configuration != null && dt_configuration.Rows.Count > 0 && dt_configuration.Rows[0]["enablerejectedemailintimation"].C2Bool())
                            {
//                                string rejectedemailqry = @"select  isnull(emailaddress,'') as emailid, isnull(campusemailid,'') as campusemailid   ,isnull(remarks,'') as remark from tbl_VA_employeeinformation 
//join tbl_AP_wfprocessinstances on employeeinformation_pid = _recordid
//join tbl_AP_wfprocessrecievers on tbl_AP_wfprocessrecievers.processinstancesfid=wfprocessinstances_pid
//where employeeinformation_pid=@PID and currentmovementfid = @movementID and action = 'reject'";

                                string rejectedemailqry = @"select  isnull(emailaddress,'') as emailid, isnull(campusemailid,'') as campusemailid   ,isnull(remarks,'') as remark from tbl_VA_employeeinformation 
left join tbl_AP_wfprocessinstances on employeeinformation_pid = _recordid
left join tbl_AP_wfprocessrecievers on tbl_AP_wfprocessrecievers.processmovementfid=currentmovementfid
left join tbl_AP_wfprocessmovement on currentmovementfid=wfprocessmovement_pid
where employeeinformation_pid=@PID and currentmovementfid = @movementID and tbl_AP_wfprocessmovement.action = 'reject'";

                                DataTable dtrejectedemailresult = Erp.ExecuteSql<DataTable>(rejectedemailqry,
                                                                                               new Dictionary<string, object>() {
                                                 {
                                                   "@PID", Erp.RecordID.C2Str()},{"@movementID", currentMovementID["MovementID"].C2Str()}

                                                                                               }
                                                                                               , out err);
                                string str_emails = "";
                                if (dtrejectedemailresult != null && dtrejectedemailresult.Rows.Count > 0)
                                    str_emails = dtrejectedemailresult.Rows[0]["emailid"].C2Str() + "," + dtrejectedemailresult.Rows[0]["campusemailid"].C2Str();

                                var rejectedemailstatus = Erp.SendMail(new Dictionary<string, object>(){
                                    {
                                      "UserID",""}
                                    ,
                                    {
                                      "RecordID",Erp.RecordID.C2Str()}
                                    ,
                                    {
                                      "EmailConfigCode","default"}
                                    ,
                                    {
                                      "EntityID","tbl_VA_employeeinformation"}
                                    ,
                                    {
                                      "TemplateID",dt_configuration.Rows.Count>0 && dt_configuration.Rows[0]["rejectedemailtemplateid"].C2Str()!=""?dt_configuration.Rows[0]["rejectedemailtemplateid"].C2Str():"df59b7d5-f4a3-48a8-9c3c-e48a5eeb68ec"}
                                    ,
                                    {
                                      "EmailSubject","Employee On-Boarding Form"}
                                    ,
                                    {
                                        "EmailTo",str_emails.TrimEnd(',')
                                    //  "EmailTo",dtrejectedemailresult.Rows.Count>0 && dtrejectedemailresult.Rows[0]["emailid"].C2Str() != ""? dtrejectedemailresult.Rows[0]["emailid"].C2Str() : ""
                                    }
                                    ,
                                    {
                                      "TOKEN:userremark",Erp.GetFieldValue("html_app_remark").C2Str()
                                        //dtrejectedemailresult.Rows.Count>0 && dtrejectedemailresult.Rows[0]["remark"].C2Str() != ""? dtrejectedemailresult.Rows[0]["remark"].C2Str() : "" 
                                    }
                                    ,
                                    {
                                      "ForceSend",true}
                         });
                            }

                            sqlquery += @"Update tbl_VA_employeeinformation set apistatuscode='' ,
 api_reference_id=''  where employeeinformation_pid='" + rec_array + @"'";



                        }

                        //if (!Fn.Contains(currentMovementID, "Configration"))
                        //sql.Append(";update tbl_VA_employeeinformation set currentstatus=@currentMovementID where employeeinformation_pid=@rec_array");
                        //sqlquery = @"update tbl_VA_employeeinformation set currentstatus=@currentMovementID where employeeinformation_pid=@rec_array";

                        string result = Erp.ExecuteSql<string>(sqlquery,
                                                               new Dictionary<string, object>() {
                                                 {
                                                   "@ID", 1 }

                                                               }
                                                               , out err);

                        /* string result2 = Erp.ExecuteSql<string>(sql.ToString(),
                                                                new Dictionary<string, object>() {
                                                                  {
                                                                    "@ID", 1 },
                                                                  {"@currentMovementID",currentMovementID},

                                                                  {"@rec_array",rec_array}
                                                                }
                                                                , out err);*/
                        string sql1 = "";
                        string err1 = "";
                        //                    sql1 = @"select emailaddress from tbl_VA_employeeinformation
                        //join tbl_AP_wfprocessmovement on wfprocessmovement_pid = currentstatus
                        //where (level = '1' and action = 'submit') and 
                        //employeeinformation_pid ='" + rec_array + "'";
                        sql1 = @"select top 1 isnull(emailaddress,'') as emailaddress,isnull(campusemailid,'') as campusemailaddress from tbl_VA_employeeinformation
join tbl_AP_wfprocessinstances on employeeinformation_pid=_recordid and currentmovementfid=tbl_VA_employeeinformation.currentstatus
join tbl_AP_wfprocessrecievers on wfprocessinstances_pid=processinstancesfid and tbl_AP_wfprocessrecievers.processmovementfid=currentmovementfid
where employeeinformation_pid=@ID and isnull((
select parent_key from tbl_sys_users_roleassignment
where parent_key=receiverid and child_key in (select UserRole_Pid from tbl_sys_userrole where userRoleCode='TA-E')
),'')!=''";
                        DataTable dtresult1 = Erp.ExecuteSql<DataTable>(sql1,
                                                              new Dictionary<string, object>() {
                                                {
                                                  "@ID", rec_array }
                                                              }
                                                              , out err1);




                        if (dtresult1 != null && dtresult1.Rows.Count > 0)
                        {
                            var email = dtresult1.Rows[0]["emailaddress"] + "," + dtresult1.Rows[0]["campusemailaddress"];
                            email = email.Trim(',');



                            #region for Calculate salarystructure

                            if (dt_configuration != null && dt_configuration.Rows.Count > 0 && dt_configuration.Rows[0]["iscalculatesalarystructure"].C2Bool())
                            {

                                var sql = @"select top 1 isnull(tbl_salaryheads.salaryheadcode,'E_BS') as salaryheadformonthlysalary  from tbl_core_company
left join tbl_salaryheads on salaryhead_pid=salaryheadformonthlysalary
where Company_Pid=@Users.CompanyID";

                                String head = Erp.ExecuteSql<String>(sql,
                                                                         new Dictionary<string, object>() {
                                             {
                                               "@posID", Erp.GetProp("tilesid").C2Str()}
                                                                         }
                                                                         , out err);



                                args["salaryheadformonthlysalary"] = head;
                                args["rec_ID"] = recids;
                                SalaryStructureDetails salaryStructureDetails = new SalaryStructureDetails();
                                salaryStructureDetails.calculateSalaryStructure(args, _app, _cfg, Erp);

                                // create Download path 
                                //string downloadpath = Erp.Base.Utils.GetDownloadPath(_app.TempDirectory, "LogFile.txt","application/text" , @"Report  is being created. Please wait....");//,true,true);
                            }

                            #endregion

                            #region new code for generate offer letter

                            string file = "";
                            if (dt_configuration != null && dt_configuration.Rows.Count > 0 && dt_configuration.Rows[0]["isofferlettersendinmail"].C2Bool())
                            {
                                var qs = new System.Collections.Specialized.NameValueCollection();
                                qs["ID"] = recids;// Erp.RecordID.C2Str();
                                //qs["Rpttype"] = "Printwithstamp";
                                var rpt = new Erp.Base.Reporting.ErpReport(_cfg);
                                rpt.MetaData = _app.GetMetaData(_cfg, "tbl_VA_employeeinformation");
                                rpt.ReportID = dt_configuration.Rows[0]["offerlettertemplateid"].C2Str() == "" ? "1147caeb-6b5a-4ec5-9591-836c3ba785f9" : dt_configuration.Rows[0]["offerlettertemplateid"].C2Str();
                                rpt.QS = qs;
                                rpt.AppUrl = _app.AbsoluteUrl;
                                rpt.AppInfo = _app;
                                rpt.CompanyIds = _app.CompanyID.C2Str();
                                string Filename = "OfferLetter";
                                file = Path.Combine(_app.TempDirectory, Filename + Guid.NewGuid().ToString()+ ".pdf");
                                Erp.SetSessionData("Rpt_invoice", "");
                                File.WriteAllBytes(file, rpt.ExportReport("PDF", null));
                            }

                            #endregion

                            string temp = global::Erp.Base.Security.Util.GetUserTempAuthToken("", "TA-E", "").C2Str();
                            string id = recids;// Erp.RecordID.C2Str() == "" ? Erp.Grid.GetRecordID("dgData").C2Str() : Erp.RecordID.C2Str();
                            string FormCode = "";// Fn.CStr(Settings.Appsettings["employeeinfoformtag"]);

                            if (dt_configuration.Rows.Count > 0 && !Fn.IsEmpty(dt_configuration.Rows[0]["layoutid"].C2Str()))
                                FormCode = dt_configuration.Rows[0]["layoutid"].C2Str();
                            else
                                FormCode = Settings.Appsettings["employeeinfoformtag"].C2Str();

                            ////Add Guide on Candidate Onboarding Form Filling.mp4 in mail attachment 
                            ///
                            addLog("Erp.FormCode=" + Erp.FormCode);
                            if (FormCode == "Layout_Employeeinformation_madhavbaug")
                            {
                                addLog("in send video block");
                                //var _file = Path.Combine(_app.StorageDirectory, "CandidateOnboardingFormFillingGuidance.mp4");
                                var _file = Path.Combine(_app.InstallDirectory, "Apps/App_VA/document/CandidateOnboardingFormFillingGuidance.mp4");

                                //File.WriteAllBytes(_file,File.ReadAllBytes(Path.Combine(Erp.ApplicationPath ,"\\Apps\\App_VA\\document\\EPF%20Concent%20Form.docx")));
                                //file += file == "" ? Erp.ApplicationPath + "/Apps/App_VA/document/Guide%20on%20Candidate%20Onboarding%20Form%20Filling.mp4" : "," + Erp.ApplicationPath + "/Apps/App_VA/document/Guide%20on%20Candidate%20Onboarding%20Form%20Filling.mp4";
                                file += file != "" ? "," + _file : _file;
                                addLog("video file name is "+ file);
                                // file = _file;
                               
                            }


                            


                            string link = Erp.ApplicationPath + "main/exec.aspx?_TaskScriptID=ab063f18-b1c9-4719-980f-c7c480b14e43&ID=" + id + "&_pt=E&&mode=_EmpID&Title=Pending&_rspv=1&_t1=Pending&_tmpauth=" + temp + "&FormCode=" + FormCode;

                            var emailstatus = Erp.SendMail(new Dictionary<string, object>()
                        {
                                    {
                                      "UserID",""}
                                    ,
                                    {
                                      "RecordID",rec_array}
                                    ,
                                    {
                                      "EmailConfigCode","default"}
                                    ,
                                    {
                                      "EntityID","tbl_VA_employeeinformation"}
                                    ,
                                    {
                                      "TemplateID",dt_configuration.Rows.Count>0 && dt_configuration.Rows[0]["emailtemplateid"].C2Str()!=""?dt_configuration.Rows[0]["emailtemplateid"].C2Str():"1a97b5e5-bc91-4634-8663-dc8ee26b7759"}
                                    ,
                                    {
                                      "EmailSubject","Employee On-Boarding Form"}
                                    ,
                                    {
                                      "EmailTo",email}
                                    ,
                                    {
                                      "TOKEN:tempuserdetails",link}
                                    ,
                                    {
                                      "TOKEN:RecArray",id},
                                                    {"Attachments",file}
                                    ,
                                    {
                                      "ForceSend",true},{"DoNotDeleteAttachment",true}
                         });

                        }
                    }
                }
                else
                {
                    addLog("in Equal Process with sender " + sender);

                    var task = Task.Run(async () =>
                    {
                        if (sender == "init")
                        {
                            //get token and init transaction
                            await getToken(args);

                        }
                        else if (sender == "fetch" || sender == "initfetch")
                        {
                            //var idempotency_id = args["idempotency_id"].C2Str();
                            await fetchData(args);

                        }


                    });

                    // Wait for the asynchronous work to complete
                    task.Wait();
                }
            }
            catch (Exception e)
            {
                addLog("Exception in execute command" + e.Message);

            }
        }

        private async Task fetchData(Dictionary<string, object> args)
        {
            addLog("in fetchData method ");
            bool isfetchdata = false;
            DataTable dt = getURLData("FETCH");
            if (dt == null && dt.Rows.Count <= 0)
                return;
            string username, password, api_key;
            username = dt.Rows[0]["username"].C2Str();
            password = dt.Rows[0]["password"].C2Str();
            api_key = dt.Rows[0]["apikey"].C2Str();
            int _count = 0;
            while (!isfetchdata)
            {
                addLog("in while fetch method with count: " + _count);
                //await Task.Delay(1000);
                try
                {
                    var ent = new ErpEntity("tbl_VA_employeeinformation", Erp.RecordID, _cfg);
                    //ent.LoadEntity();
                    ent.LoadEntity("api_reference_id,apistatuscode,createdBy_User_Fid,aadhaarcardno");
                    var idempotency_id = ent["api_reference_id"].C2Str();
                    var adharNo = ent["aadhaarcardno"].C2Str();
                    if (Fn.IsEmpty(idempotency_id))
                    {
                        idempotency_id = args.Get("idempotency_id").C2Str();
                    }

                    HttpClient client = new HttpClient();
                    HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Post, api_key);
                    request.Headers.Add("Authorization", password);

                    //HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Post, "https://api.test.equal.in/business/transaction/data/fetch");
                    //request.Headers.Add("Authorization", "Basic ZXF1YWwuYnVzaW5lc3MuNmI4NThjYzMtNTU0ZC00M2ZiLTliMmItYzIzZDdlNmFhYTNlIzBmMDcyM2I4LTdkMTMtNGMwMC1iMmIyLTU2MjY1YWU1YjdkNjpPeXo4R2Q5d3VRX01jMGs3bDJnS1ZmbTUzcEZZY0JiMk1mYWZZUGhZRF9PQ05tOGNRZkdCbUdfbzdMdkR6WXlpSGx3Nm03R2NFWXozZ2dSbUVKTFRRdz09");
                    request.Headers.Add("User-Agent", "PostmanRuntime/7.33.0");
                    request.Headers.Add("Accept", "application/json");

                    string jsonPayload = $"\"{idempotency_id.Replace(" ", "")}\"";
                    var content = new StringContent(jsonPayload, null, "application/json");
                    request.Content = content;
                    //"70445bc4-0f3d-410e-b94b-ee466177cbf2"
                    //        StatusCode: 400, ReasonPhrase: 'Bad Request', Version: 1.1, Content: System.Net.Http.StreamContent, Headers:
                    //            {
                    //            Connection: keep - alive
                    //  apigw - requestid: NqenxgVRBcwEPKw =
                    //    vary: Origin
                    //    vary: Access - Control - Request - Method
                    //  vary: Access - Control - Request - Headers
                    //  Date: Tue, 31 Oct 2023 11:00:01 GMT
                    //  Content - Length: 138
                    //  Content - Type: application / json
                    //}



                    var response = await client.SendAsync(request);
                    //Dictionary<string, object> dic_data = new Dictionary<string, object>();

                    isfetchdata = response.IsSuccessStatusCode;

                    addLog("isfetchdata" + isfetchdata);

                    var data = await response.Content.ReadAsStringAsync();
                    args["data"] = data;
                    args["adharNo"] = adharNo;


                }
                catch (Exception e)
                {
                    addLog("Exception in fetchData with count " + _count + " and message is " + e.Message);
                }

                _count++;
            }
        }

        // this method create token and init transaction
        private async Task getToken(Dictionary<string, object> args)
        {
            try
            {
                addLog("in getToken method");
                // Simulate an asynchronous operation with a delay

                DataTable dt = getURLData("INIT");
                if (dt == null || dt.Rows.Count <= 0)
                    return;


                string username = dt.Rows[0]["username"].C2Str();
                string password = dt.Rows[0]["password"].C2Str();
                string api_key = dt.Rows[0]["apikey"].C2Str();
                string instanceID = dt.Rows[0]["instanceid"].C2Str();
                string CallBackURL = dt.Rows[0]["callbackurl"].C2Str();


                await Task.Delay(1000);
                var client = new HttpClient();
                var request = new HttpRequestMessage(HttpMethod.Post, api_key);
                request.Headers.Add("Authorization", password);
                //var request = new HttpRequestMessage(HttpMethod.Post, "https://api.test.equal.in/business/ie/transaction/init");
                //request.Headers.Add("Authorization", "Basic ZXF1YWwuYnVzaW5lc3MuNmI4NThjYzMtNTU0ZC00M2ZiLTliMmItYzIzZDdlNmFhYTNlIzBmMDcyM2I4LTdkMTMtNGMwMC1iMmIyLTU2MjY1YWU1YjdkNjpPeXo4R2Q5d3VRX01jMGs3bDJnS1ZmbTUzcEZZY0JiMk1mYWZZUGhZRF9PQ05tOGNRZkdCbUdfbzdMdkR6WXlpSGx3Nm03R2NFWXozZ2dSbUVKTFRRdz09");
                request.Headers.Add("User-Agent", "PostmanRuntime/7.33.0");

                var idempotencyId = Guid.NewGuid(); // Replace this with your actual dynamic value
                var gatewayInstanceId = instanceID;
                var callbackUrl = CallBackURL;

                addLog("idempotencyId : " + idempotencyId);
                addLog("gatewayInstanceId : " + gatewayInstanceId);






                //var gatewayInstanceId = "gateway.equal.814c4bbc-8d7d-439f-9cd1-ec3a1895308b";
                //var callbackUrl = "https://webhook.site/61769ed6-8e32-4e9d-999d-5c7e7727c121";
                var jsonString = $"{{\"idempotency_id\": \"{idempotencyId}\", \"gateway_instance_id\": \"{gatewayInstanceId}\", \"keys\": [{{\"key_id\":[\"AADHAAR\"], \"units_of_identity\": [] }}, {{\"key_id\":[\"PAN\"], \"units_of_identity\": [] }}, {{\"key_id\":[\"BANK_ACCOUNT\"], \"units_of_identity\": [] }}, {{\"key_id\":[\"DRIVING_LICENCE\"], \"units_of_identity\": [] }}], \"callback_url\": \"{callbackUrl}\" }}";
                var content = new StringContent(jsonString + 120, null, "application/json");
                request.Content = content;
                var response = await client.SendAsync(request);
                //response.EnsureSuccessStatusCode();
                //var token = response.RequestMessage.Headers.Authorization.ToString();
                Dictionary<string, object> dic_data = new Dictionary<string, object>();

                addLog("response : statuscode" + response.IsSuccessStatusCode);
                addLog("response : status" + response.StatusCode);




                if (response.IsSuccessStatusCode)
                {
                    //update api_reference_id and stauts	 when verified user
                    /*
                    var ent = new ErpEntity("tbl_VA_employeeinformation", Erp.RecordID, _cfg);
                    ent["api_reference_id"] = idempotencyId;
                    ent["apistatuscode"] = "1";
                    ent.ModifiedBy = _app.CurrentUserID;
                    ent.CompanyID = _app.CompanyID;
                    ent.MetaData = _app.MetaData;
                    //ent.DisableAutoCalculation=true;
                    bool success = ent.Save();
                    args["status"] = success;
                    //ent.EvaluateCalculatedFields();
                    */
                    var data = await response.Content.ReadAsStringAsync();
                    dic_data = Newtonsoft.Json.JsonConvert.DeserializeObject<Dictionary<string, object>>(data);

                    if (!Fn.IsEmpty(dic_data) && dic_data.Count > 0)
                    {
                        args["token"] = dic_data["token"].ToString();
                        args["idempotency_id"] = idempotencyId;
                    }


                }

            }
            catch (Exception e)
            {
                addLog("Exception in getToken Method" + e.Message);
            }
        }

        private DataTable getURLData(string type)
        {

            string err = "";
            var dt = Erp.ExecuteSql<DataTable>("select * from tbl_VA_apiconfiguration where type=@type ",
                                      new Dictionary<string, object>() {
                            { "@type", type}
                                      }, out err);

            return dt;
        }

        /*
        private void GetToken()
        {
            try
            {

                //var client = new HttpClient();
                //var request = new HttpRequestMessage(HttpMethod.Post, "https://api.test.equal.in/business/ie/transaction/init");
                //request.Headers.Add("Authorization", "Basic ZXF1YWwuYnVzaW5lc3MuNmI4NThjYzMtNTU0ZC00M2ZiLTliMmItYzIzZDdlNmFhYTNlIzBmMDcyM2I4LTdkMTMtNGMwMC1iMmIyLTU2MjY1YWU1YjdkNjpPeXo4R2Q5d3VRX01jMGs3bDJnS1ZmbTUzcEZZY0JiMk1mYWZZUGhZRF9PQ05tOGNRZkdCbUdfbzdMdkR6WXlpSGx3Nm03R2NFWXozZ2dSbUVKTFRRdz09");
                //var content = new StringContent("{\r\n\"idempotency_id\": \"8d0951d8-6412-48cf-acd6-1234567\",\r\n\"gateway_instance_id\": \"gateway.equal.814c4bbc-8d7d-439f-9cd1-ec3a1895308b\",\r\n\"keys\": [\r\n{\r\n\"key_id\":[\"AADHAAR\"],\r\n\"units_of_identity\": []\r\n},\r\n{\r\n\"key_id\":[\"PAN\"],\r\n\"units_of_identity\": []\r\n},\r\n{\r\n\"key_id\":[\"BANK_ACCOUNT\"],\r\n\"units_of_identity\": []\r\n},\r\n{\r\n\"key_id\":[\"DRIVING_LICENCE\"],\r\n\"units_of_identity\": []\r\n}\r\n],\r\n\"callback_url\": \"https://webhook.site/61769ed6-8e32-4e9d-999d-5c7e7727c121\"\r\n}", null, "application/json");
                //request.Content = content;
                //var response = client.SendAsync(request).Result;
                ////response.EnsureSuccessStatusCode();
                ////Console.WriteLine( response.Content.ReadAsStringAsync());





                var jsonData = "{\r\n\"idempotency_id\": \"8d0951d8-6412-48cf-acd6-1234567\",\r\n\"gateway_instance_id\": \"gateway.equal.814c4bbc-8d7d-439f-9cd1-ec3a1895308b\",\r\n\"keys\": [\r\n{\r\n\"key_id\":[\"AADHAAR\"],\r\n\"units_of_identity\": []\r\n},\r\n{\r\n\"key_id\":[\"PAN\"],\r\n\"units_of_identity\": []\r\n},\r\n{\r\n\"key_id\":[\"BANK_ACCOUNT\"],\r\n\"units_of_identity\": []\r\n},\r\n{\r\n\"key_id\":[\"DRIVING_LICENCE\"],\r\n\"units_of_identity\": []\r\n}\r\n],\r\n\"callback_url\": \"https://webhook.site/61769ed6-8e32-4e9d-999d-5c7e7727c121\"\r\n}";
                string apiUrl = "https://api.test.equal.in/business/ie/transaction/init";
                using (HttpClient httpClient = new HttpClient())
                {
                    StringContent jsonContent = new StringContent(jsonData, null, "application/json");
                    httpClient.DefaultRequestHeaders.Add("Authorization", "Basic ZXF1YWwuYnVzaW5lc3MuNmI4NThjYzMtNTU0ZC00M2ZiLTliMmItYzIzZDdlNmFhYTNlIzBmMDcyM2I4LTdkMTMtNGMwMC1iMmIyLTU2MjY1YWU1YjdkNjpPeXo4R2Q5d3VRX01jMGs3bDJnS1ZmbTUzcEZZY0JiMk1mYWZZUGhZRF9PQ05tOGNRZkdCbUdfbzdMdkR6WXlpSGx3Nm03R2NFWXozZ2dSbUVKTFRRdz09");
                    httpClient.DefaultRequestHeaders.Add("Connection", "keep-alive");
                    HttpResponseMessage response = httpClient.PostAsync(apiUrl, jsonContent).Result;

                    if (response.IsSuccessStatusCode)
                    {
                        string strresponse = response.Content.ReadAsStringAsync().Result;

                    }
                    else
                    {
                        var code = response.StatusCode;

                    }
                }



                    //    //Start
                    //    var client1 = new HttpClient();
                    //    var request = new HttpRequestMessage(HttpMethod.Post, "https://api.test.equal.in/business/ie/transaction/init");
                    //    request.Headers.Add("Authorization", "Basic ZXF1YWwuYnVzaW5lc3MuNmI4NThjYzMtNTU0ZC00M2ZiLT9ZHYItYzIzZDdlNmFhYTNlIzBmMDcyM2I4LTdkMTMtNGMwMC1iMmIyLTU2MjY1YWU1YjdkNjpPeXo4R2Q5d3VRX01jMGs7WbDJnS1ZmbTUzcEZZY0JiMk1mYWZZUGhZRF9PQ05tOGNRZkdCbUdfbzdMdkR6WXlpSGx3Nm07R2NFWXozZ2dSbUVKTFRRdz09");
                    //    var content = new StringContent("{\r\n\"idempotency_id\": \"dsf53245345\",\r\n\"gateway_instance_id\": \"gateway.equal.814c4bbc-8d7d-439f-9cd1-ec3a1895308b\",\r\n\"keys\": [\r\n{\r\n\"key_id\":[\"AADHAAR\"],\r\n\"units_of_identity\": []\r\n},\r\n{\r\n\"key_id\":[\"PAN\"],\r\n\"units_of_identity\": []\r\n},\r\n{\r\n\"key_id\":[\"BANK_ACCOUNT\"],\r\n\"units_of_identity\": []\r\n},\r\n{\r\n\"key_id\":[\"DRIVING_LICENCE\"],\r\n\"units_of_identity\": []\r\n}\r\n],\r\n\"callback_url\": \"https://webhook.site/61769ed6-8e32-4e9d-999d-5c7e7727c121\"\r\n}", null, "application/json");
                    //    request.Content = content;

                    //    var response1 = client1.Send(request);
                    //    if (response.IsSuccessStatusCode)
                    //    {
                    //        var responseContent = response.Content.ReadAsStringAsync().Result;
                    //        Console.WriteLine(responseContent);
                    //    }

                    //    //End

                    //}

                }
            catch (Exception e)
            {

            }


        }
        */

        public void addLog(string data)
        {
           File.AppendAllText(Path.Combine(_app.TempDirectory, "Log.txt"), data+ "\r\n-----------------------------------------------------\r\n");
        }
    }

}