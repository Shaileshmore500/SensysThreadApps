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
using HelperLib.Conversion;
using HelperLib.Extensions;
namespace App_Ap.Apps.App_Ap
{
    public class WorkFlowProcess
    {
        public ApplicationInfo App;
        public HelperLib.DAL.IDBConfiguration Cfg;
        public WorkFlowProcess()
        {
        }
        public WorkFlowProcess(ApplicationInfo app, HelperLib.DAL.IDBConfiguration cfg)
        {
            App = app;
            Cfg = cfg;
        }

        //wfcode means =wf_prcoessjobrequisition,entityID=tbl_ra_recruitment,userid=gridrecordid select,userID= _app.CurrentUserID,action=status(submit,reject,accept),
        public Dictionary<string, object> ProcessWorkFlow(string wfCode, string entityID, string recordID, string userID, string action, Dictionary<string, object> Data)
        {
            if (Data == null)
                Data = new Dictionary<string, object>();
            var recID = "";
            bool isLastLevel = false;
            Dictionary<string, object> result = new Dictionary<string, object>();//InstanceID,MovementID,Message,Success
            // and action=@accept var act = C.Eq(action, "submit") ? actionType.Work_Flow_Initiated : C.Eq(action, "accept") ? actionType.Workflow_Approved : C.Eq(action, "reject") ? actionType.Workflow_Declined : C.Eq(action, "finalapproved") ? actionType.Workflow_Finally_Approved : "";
            var act = C.Eq(action, actionmaster.submit) ? actionType.Work_Flow_Initiated : C.Eq(action, actionmaster.accept) ? actionType.Workflow_Approved : C.Eq(action, actionmaster.reject) ? actionType.Workflow_Declined : C.Eq(action, actionmaster.finalapproved) ? actionType.Workflow_Finally_Approved : "";
            Erp.Base.ScriptInterface.ErpScriptObject _Erp = new Erp.Base.ScriptInterface.ErpScriptObject(App, Cfg);
            string err = "";
            string ReturnMovementID = "";

            string Sql_GetWFData = @"
--[dt_WFProcess]
select wfp.[company_fid],[wfprocess_pid],[wfprocesscode],[wfprocessname],[entityfid],[description],[active],wfp.[__OwnerInfo],wfp.[createdDate]
      ,wfp.[createdBy_User_Fid],wfp.[modifiedDate],wfp.[modifiedBy_User_Fid],wfp.[OwnerUser_Fid],wfp.[workflow_fid],[wfsteps],[approvalassignmentemailtemplate],[emailconfig],ec.emailid,wfp.entrycriteria,wfp.usercriteria 
	  from tbl_AP_wfprocess wfp
	  left join tbl_core_emailconfig ec on ec.EmailConfig_Pid=wfp.emailconfig  
      where wfprocesscode=@WFcode and entityfid=@EntityID and wfp.company_fid=@CompanyID  order by ISNULL(entrycriteria,1) desc,isnull(usercriteria,1),entrycriteria,usercriteria;
--[dt_Steps]
select ws.[company_fid],ws.[wfsteps_pid],ws.[stepnumber],ws.[stepname],ws.[description],ws.[wfprocessfid],ws.[approvertypefid],ws.[approvercriteria],ws.[__OwnerInfo]
      ,ws.[createdDate],ws.[createdBy_User_Fid],ws.[modifiedDate] ,ws.[modifiedBy_User_Fid],ws.[OwnerUser_Fid],ws.[notifyusers],ws.[approvertypecode],[wfsteps]
	  from tbl_AP_wfsteps ws
join tbl_AP_wfprocess on wfprocessfid=wfprocess_pid 
where wfprocesscode=@WFcode and entityfid=@EntityID and ws.company_fid=@CompanyID
order by stepnumber desc;
--[dt_Instance]
select * from tbl_AP_wfprocessinstances
join tbl_AP_wfprocess on processfid=wfprocess_pid
join tbl_AP_wfprocessmovement on currentmovementfid=wfprocessmovement_pid
where _recordid=@RecordID and entityid=@EntityID and wfprocesscode=@WFcode and entityfid=@EntityID and tbl_AP_wfprocessinstances.company_fid=@CompanyID;
--[dt_WfAppConfig]
select appconfiguration_pid as approvertypecode,key1 as approvertypecodename,longdata1 as approverquery  from tbl_sys_appconfiguration where key2='WFApproverType' and company_fid=@CompanyID;
--[dt_wfprocessmvmt]
select top 1 senderid from tbl_AP_wfprocessmovement wfpm
inner join tbl_AP_wfprocessinstances wfi on wfi.wfprocessinstances_pid=wfpm.processinstancesfid
where _recordid=@RecordID and entityid=@EntityID  order by wfpm.level desc;
";

            if (!Data.ContainsKey("TOKEN:Application_Name"))
                Sql_GetWFData += @"--[dt_displayname]
                                    select dbo.GetEntityTitle(@EntityID,@RecordID)";

            DataSet ds_WF = _Erp.ExecuteSql<DataSet>(Sql_GetWFData,
                                                 new Dictionary<string, object>() {
                                             {
                                               "@RecordID", recordID }

                                             ,
                                             {
                                               "@WFcode", wfCode }
                                             ,{
                                               "@EntityID",entityID} ,
                                                     { "@CompanyID",App.CompanyID},

                                                     {"@action",act },
                                                     {"@accept",actionmaster.accept}
                                                 }


                                                 , out err);


           // DataRow matchingRow = FindDataRowById(ds_WF.Tables["dt_WFProcess"], recordID);
            //if (C.Eq(action, "submit"))
               // matchingRow = FindDataRowById(ds_WF.Tables["dt_WFProcess"], recordID);

            if (ds_WF == null) //|| (matchingRow == null && C.IsEmpty(matchingRow) && C.Eq(action, "submit"))
            {
                result["Message"] = "No Configuration found";
                result["Success"] = false;
                return result;
            }

            if (!Data.ContainsKey("TOKEN:Application_Name") && ds_WF.Tables["dt_displayname"].Rows.Count > 0)
                Data["TOKEN:Application_Name"] = ds_WF.Tables["dt_displayname"].Rows[0][0].C2Str();

            if (Data.Get("TOKEN:Application_Date").IsBlank())
                Data["TOKEN:Application_Date"] = DateTime.Now;

            DataTable dt_Instance = new DataTable();
            DataTable dt_WfData = new DataTable();
            DataTable dt_Steps = new DataTable();
            DataTable dt_stepnotification = new DataTable();
            DataTable dt_wfmvmt = new DataTable();
            string SqlProcessWF = "";
            DataRow Dr_Process = null;
            string WFProcessID = "";

            dt_Instance = ds_WF.Tables["dt_Instance"];
            dt_WfData = ds_WF.Tables["dt_WFProcess"];
            dt_Steps = ds_WF.Tables["dt_Steps"];
            dt_wfmvmt = ds_WF.Tables["dt_wfprocessmvmt"];
            #region author- vishwajeet maurya,  Commited by vishwajeet  date 21-12-2023. parameter change because we will peform mutliple workflow and we will use current ds_wfdata data record . below created new method with same name and parameter but third one datatable parameter changed only .
            // Dr_Process = Get_ApplicableProcessRow(wfCode, entityID, ds_WF);
            #endregion
            Dr_Process = Get_ApplicableProcessRow(wfCode, entityID, ds_WF, recordID);
            if (Dr_Process == null)
            {
                result["Message"] = "No Configuration found";
                result["Success"] = false;
                return result;
            }


            WFProcessID = Dr_Process["wfprocess_pid"].C2Str();
            dt_WfData.DefaultView.RowFilter = "wfprocess_pid='"+ Dr_Process["wfprocess_pid"].C2Str() + "'";
            dt_WfData = dt_WfData.DefaultView.ToTable();
            string InstanceRecordID = "";
            string Insert_MovementRecordID = "";
            string Insert_MovementRecordID1 = "";
            int currentLevel = 0;
            int LastLevel = 0;
            bool InsertReceiver = false;
            if (C.Eq(dt_Instance.Rows.Count, 0))
            {
                InstanceRecordID = Guid.NewGuid().C2Str();
                currentLevel = 0;
                SqlProcessWF = @"insert into tbl_AP_wfprocessinstances(company_fid,wfprocessinstances_pid,_recordid,entityid,processfid,createdDate,createdBy_User_Fid)values
(@company,@InstanceRecordID,@_recordid,@entityid,@WFProcessID,@SYS_NOW,@sender_id);";
                Insert_MovementRecordID1 = Guid.NewGuid().C2Str();
                SqlProcessWF += @"insert into tbl_AP_wfprocessmovement(company_fid,wfprocessmovement_pid,processinstancesfid,action,level,date,senderid,createdDate)
values(@company,@MovementRecordID1,@InstanceRecordID,@action,0,@SYS_NOW,@sender_id,@SYS_NOW);";
                SqlProcessWF += @"update tbl_AP_wfprocessinstances set currentmovementfid=@MovementRecordID1
where wfprocessinstances_pid=@InstanceRecordID;";
                InsertReceiver = true;
                ReturnMovementID = Insert_MovementRecordID1;
            }
            else
            {
                InstanceRecordID = dt_Instance.Rows[0]["wfprocessinstances_pid"].C2Str();
                Insert_MovementRecordID = Guid.NewGuid().C2Str();
                currentLevel = dt_Instance.Rows[0]["level"].C2Int() + 1;
                string currentstatus = "";
                if (currentLevel > 0)
                    currentstatus = dt_Instance.Rows[0]["action"].C2Str();
                if (C.Eq(currentstatus, "reject") && C.Eq(action, "submit"))//when user record is rejected by authoriser and he wants to submit same record again
                {
                    currentLevel = 0;
                    Insert_MovementRecordID1 = Guid.NewGuid().C2Str();
                    SqlProcessWF += @"insert into tbl_AP_wfprocessmovement(company_fid,wfprocessmovement_pid,processinstancesfid,action,level,date,senderid,createdDate)
values(@company,@MovementRecordID1,@InstanceRecordID,@action,0,@SYS_NOW,@sender_id,@SYS_NOW)";
                    SqlProcessWF += @"update tbl_AP_wfprocessinstances set currentmovementfid=@MovementRecordID1
where wfprocessinstances_pid=@InstanceRecordID;";
                    InsertReceiver = true;
                    ReturnMovementID = Insert_MovementRecordID1;
                }
                else
                {
                    DataRow[] drWF = dt_Steps.Select("wfprocessfid='" + WFProcessID + "'");
                    if (drWF != null && drWF.Length > 0)
                        LastLevel = drWF[0]["wfsteps"].C2Int();
                    SqlProcessWF = @"insert into tbl_AP_wfprocessmovement(company_fid,wfprocessmovement_pid,processinstancesfid,action,level,date,senderid,createdDate)
values(@company,@MovementRecordID,@InstanceRecordID,@action,@currentLevel,@SYS_NOW,@sender_id,@SYS_NOW);";
                    SqlProcessWF += @"update tbl_AP_wfprocessinstances set currentmovementfid=@MovementRecordID 
where wfprocessinstances_pid=@InstanceRecordID;";
                    SqlProcessWF += @"update tbl_AP_wfprocessrecievers set actiondate=@SYS_NOW,action=@action,isactiontaken=1,remarks=@levelremarks 
where receiverid=@sender_id and isnull(isactiontaken,0)=0;";
                    InsertReceiver = false;
                    ReturnMovementID = Insert_MovementRecordID;
                    if (currentLevel == LastLevel)
                    {
                        if (C.Eq(action, "accept"))//when authoriser is last level and he accepts the record
                        {
                            InsertReceiver = false;
                            isLastLevel = true;
                            SqlProcessWF += @"update  tbl_AP_wfprocessinstances set isfinalaccept=1 from tbl_AP_wfprocessinstances where  wfprocessinstances_pid=@InstanceRecordID";
                            ReturnMovementID = Insert_MovementRecordID;
                        }
                    }
                    else if (!C.Eq(action, "reject"))//when authoriser is not last level and he accepts the record.new submit record is created by approver which will be recevied by next level authoriser
                    {
                        Insert_MovementRecordID1 = Guid.NewGuid().C2Str();
                        SqlProcessWF += @"insert into tbl_AP_wfprocessmovement(company_fid,wfprocessmovement_pid,processinstancesfid,action,level,date,senderid,createdDate)
values(@company,@MovementRecordID1,@InstanceRecordID,'submit',@currentLevel,@SYS_NOW,@sender_id,@SYS_NOW);";
                        SqlProcessWF += @"update tbl_AP_wfprocessinstances set currentmovementfid=@MovementRecordID1 
where wfprocessinstances_pid=@InstanceRecordID;";
                        InsertReceiver = true;
                        ReturnMovementID = Insert_MovementRecordID1;
                    }
                }
            }
            if (InsertReceiver)
            {
                DataTable dt_Receivers = GetReceiversData(ds_WF, WFProcessID, currentLevel + 1, recordID, App.CurrentUserID, Insert_MovementRecordID1, entityID, userID);
                if (dt_Receivers != null && dt_Receivers.Rows.Count > 0)
                {
                    for (var i = 0; i < dt_Receivers.Rows.Count; i++)
                    {
                        recID = dt_Receivers.Rows[i]["receiverID"].C2Str();
                        SqlProcessWF += @" insert into tbl_AP_wfprocessrecievers
(company_fid, wfprocessrecievers_pid, receiverid, processmovementfid, processinstancesfid,createdDate)
values(@company, NEWID(), '" + dt_Receivers.Rows[i]["receiverID"].C2StrDBSafe() + @"', @MovementRecordID1, @InstanceRecordID,@SYS_NOW)";
                    }

                }

            }

            string resultwf = _Erp.ExecuteSql<string>(SqlProcessWF,
                                                    new Dictionary<string, object>() {
                                                {
                                                  "@InstanceRecordID",InstanceRecordID }
                                                ,{
                                                  "@entityid",entityID}
                                                ,
                                                {
                                                  "@WFProcessID",WFProcessID}
                                                ,{
                                                  "@company",App.CompanyID}
                                                ,
                                                {
                                                  "@MovementRecordID",Insert_MovementRecordID}
                                                ,{
                                                  "@MovementRecordID1",Insert_MovementRecordID1}
                                                ,{
                                                  "@_recordid",recordID}
                                                ,
                                                {
                                                  "@action",action}
                                                ,{
                                                  "@sender_id",userID}
                                                ,{
                                                  "@currentLevel",currentLevel}

                                                   , { "@levelremarks",Data.ContainsKey("levelremarks") ? Data["levelremarks"] : ""}}
                                                    , out err);
            if (C.IsBlank(err))
            {
                #region logical wrote by brijesh sir, wfprocess worked on this logic
                //if currentitem==submitter and action=Work_Flow_Initiated then receiverid=[then user.userid]
                //if currentitem==submitter and action<>Work_Flow_Initiated then find user from movement table where level 0
                //if Approver then dt_Receivers.Rows[i][user]
                //if Current_Stage_Approver then user.userid
                //if Next_Stage_Approver then dt_Receivers.Rows[i][user]
                //if Prev_Stage_Approver then find from movement
                #endregion
                result["MovementID"] = ReturnMovementID;
                result["InstanceID"] = InstanceRecordID;
                result["Success"] = true;
                result["IsLastLevel"] = isLastLevel;

                if (Fn.CBool(isLastLevel))
                    act = actionType.Workflow_Finally_Approved;

                dt_stepnotification = getstepnotificationdata(act, entityID, wfCode, WFProcessID);
                #region checked here if notification send then variable is true other false . means record insert into database sucessfully but notification not sent to user and receiver
                bool isSendNotitication = false;
                #endregion

                string submitter = "", approver = "", next_Stage_Approver = "", prev_Stage_Approver = "";
                if (C.Eq(act, actionType.Work_Flow_Initiated))
                {
                    submitter = Users.UserID;
                    approver = recID.C2Str();
                }
                else  //if (C.Eq(act, actionType.Workflow_Approved))
                {
                    //DataRow[] dr_submitterid = dt_Instance.Select("level=0");
                    //submitter = (dr_submitterid.Length > 0) ? dr_submitterid[0]["senderid"].C2Str() : "";
                    submitter = (dt_Instance.Rows.Count > 0) ? dt_Instance.Rows[0]["createdBy_User_Fid"].C2Str() : "";
                    approver = Users.UserID;
                    next_Stage_Approver = (recID.Length > 0) ? recID.C2Str() : "";
                    prev_Stage_Approver = (dt_wfmvmt.Rows.Count > 0) ? dt_wfmvmt.Rows[0]["senderid"].C2Str() : "";
                }
                string UserVariables = "Submitter:tbl_SYS_Users:" + submitter + "|CurrentApprover:tbl_SYS_Users:" + approver + "|PreviousStageApprover:tbl_SYS_Users:" + prev_Stage_Approver + "|NextStageApprover:tbl_SYS_Users:" + next_Stage_Approver + "";
                //  { "UserVariables","Submitter:tbl_SYS_Users:"+submitter+"|CurrentApprover:tbl_SYS_Users:"+approver+" |PreviousStageApprover:tbl_CORE_Company:"+prev_Stage_Approver+" |NextStageApprover:tbl_CORE_Company:"+prev_Stage_Approver+" "}

                for (int j = 0; j < dt_stepnotification.Rows.Count; j++)
                {
                    var wfstep = dt_stepnotification.Rows[j]["notificationusertype"].C2Str();
                    isSendNotitication = true;
                    var receiverid = "";
                    var usertype = "";
                    string[] checkusertype = new string[] { Fn.ToLowerCase(userType.Next_Stage_Approver), Fn.ToLowerCase(userType.Submitter), Fn.ToLowerCase(userType.Approver), Fn.ToLowerCase(userType.Prev_Stage_Approver), Fn.ToLowerCase(userType.Current_Stage_Approver) };


                    //check usertype here if matched then enter this function otherwise not . added by vishwajeet date 24-08-2023
                    if (checkusertype.Contains(Fn.ToLowerCase(wfstep)))
                    {
                        #region  check usertype here if matched then enter this function otherwise not . added by vishwajeet date 24-08-2023
                        //if (C.Eq(wfstep, Fn.ToLowerCase(userType.Approver)))
                        //    usertype = userType.Approver;

                        //else if (C.Eq(wfstep, Fn.ToLowerCase(userType.Submitter)))
                        //    usertype = userType.Submitter;

                        //else if (C.Eq(wfstep, Fn.ToLowerCase(userType.Current_Stage_Approver)))
                        //    usertype = userType.Current_Stage_Approver;

                        //else if (C.Eq(wfstep, Fn.ToLowerCase(userType.Next_Stage_Approver)))
                        //    usertype = userType.Next_Stage_Approver;

                        //else if (C.Eq(wfstep, Fn.ToLowerCase(userType.Prev_Stage_Approver)))
                        //    usertype = userType.Prev_Stage_Approver;
                        #endregion

                        #region previousid means get previous level of id to take for sending msg and notification. added by vishwajeet date 24-08-2023
                        var previousID = C.Eq(wfstep, Fn.ToLowerCase(userType.Prev_Stage_Approver)) ? dt_wfmvmt.Rows[0]["senderid"].C2Str() : "";
                        #endregion

                        #region get receiver id for sending msg and email on for loop iteration . added by vishwajeet date 24-08-2023.
                        if (C.Eq(act, actionType.Work_Flow_Initiated) && C.Eq(wfstep, Fn.ToLowerCase(userType.Submitter)))
                            receiverid = Users.UserID;

                        else if (!C.Eq(act, actionType.Work_Flow_Initiated) && C.Eq(wfstep, Fn.ToLowerCase(userType.Submitter)))
                        {
                            //DataRow[] dr_submitterid = dt_Instance.Select("level=0");
                            //receiverid = (dr_submitterid.Length > 0) ? dr_submitterid[0]["senderid"].C2Str() : "";
                            receiverid = (dt_Instance.Rows.Count > 0) ? dt_Instance.Rows[0]["createdBy_User_Fid"].C2Str() : "";
                        }

                        else if (C.Eq(wfstep, Fn.ToLowerCase(userType.Approver)) || C.Eq(wfstep, Fn.ToLowerCase(userType.Next_Stage_Approver)))
                            receiverid = recID.C2Str();

                        else if (C.Eq(wfstep, Fn.ToLowerCase(userType.Current_Stage_Approver)))
                            receiverid = Users.UserID;


                        else if (C.Eq(wfstep, userType.Prev_Stage_Approver))
                            receiverid = previousID;
                        #endregion


                        #region in this method get username email and full name of users
                        //DataTable dt_user = getuserdetails(receiverid.C2Str());
                        #endregion
                        var wfsteprow = dt_stepnotification.Rows[j];
                        #region check here email is enable or not 
                        if (Fn.CBool(wfsteprow["enableemail"].C2Bool()))
                        {
                            Dictionary<string, object> Emailconfigdictionary = new Dictionary<string, object>() {
                             {"UserID",receiverid},
                             {"RecordID",recordID},
                             {"EmailConfigID",dt_WfData.Rows[0]["emailconfig"].C2Str()},
                             {"EntityID",entityID},
                             {"TemplateID",wfsteprow["notificationemail_templateid"].C2Str()},
                             {"EmailFromDisplayName",Users.LoginUserFullName},
                             {"EmailTo","[ReceiverUser.Email]"},
                             {"UserVariables",UserVariables },
                             {"ForceSend",false},

                   };
                            foreach (var kv in Data)
                            {
                                Emailconfigdictionary[kv.Key] = kv.Value;
                            }
                            _Erp.SendMail(Emailconfigdictionary);
                        }
                        //[ReceiverUser.fname] [ReceiverUser.mname] [ReceiverUser.lname] [ReceiverUser.Email]
                        #endregion

                        #region check here notfication is enable or not 
                        if (Fn.CBool(wfsteprow["enablenotification"].C2Bool()))
                        {
                            Dictionary<string, object> notificationdic = new Dictionary<string, object>() {
                             {"EntityID","tbl_RA_jobrequisition"},
                             {"RecordID",recordID},
                             {"UserID",receiverid},
                             {"TemplateID",wfsteprow["notification_templateid"].C2Str()},
                             {"UserVariables",UserVariables },
                              {"TriggerDate",DateTime.Now}
                             };
                            foreach (var kv in Data)
                            {
                                notificationdic[kv.Key] = kv.Value;
                            }
                            _Erp.RaiseNotification(notificationdic);

                        }
                        #endregion

                    }
                }
                result["IsSendNotitication"] = isSendNotitication;
                result["Message"] = "";
            }
            else if (!C.IsBlank(err))
            {
                result["Success"] = false;
                result["Message"] = err;
                result["IsLastLevel"] = isLastLevel;
            }
            return result;
        }


        public DataTable GetReceiversData(DataSet ds_WF, string wFProcessID, int Level, string RecordID, string TriggeredEmployeeID, string Insert_MovementRecordID1, string _EntityID, string UserID)
        {
            Erp.Base.ScriptInterface.ErpScriptObject _Erp = new Erp.Base.ScriptInterface.ErpScriptObject(App, Cfg);
            DataTable dt_approverData = new DataTable();
            if (ds_WF.Tables.Count > 0)
            {
                DataTable dt_steps = ds_WF.Tables["dt_Steps"];
                DataTable dt_WfConfig = ds_WF.Tables["dt_WfAppConfig"];
                string ApprovalTypeCode = "";
                string GetTheApproverQuery = "";
                string err = "";
                if ((dt_steps != null && dt_steps.Rows.Count > 0) && (dt_WfConfig != null && dt_WfConfig.Rows.Count > 0))
                {
                    DataRow dr_steps = dt_steps.SelectSingle("stepnumber=" + Level + @" and wfprocessfid='" + wFProcessID + "'");
                    ApprovalTypeCode = dr_steps["approvertypecode"].C2Str();
                    DataRow dr_WfConfig = dt_WfConfig.SelectSingle("approvertypecode='" + ApprovalTypeCode + @"'");
                    GetTheApproverQuery = dr_WfConfig["approverquery"].C2Str();
                }
                if (!Fn.IsEmpty(GetTheApproverQuery))
                {
                    DataTable dt_approvers = _Erp.ExecuteSql<DataTable>(GetTheApproverQuery,
                                                                        new Dictionary<string, object>() {
                                                                {
                                                                  "@RecordID", RecordID }
                                                                        ,{"@TriggeredEmployeeID", TriggeredEmployeeID } ,{"@senderID", UserID } ,{"@EntityID", _EntityID },{"@MovementID", Insert_MovementRecordID1 },{"@CompanyID",App.CompanyID  } }
                                                                        , out err);
                    if (dt_approvers != null && dt_approvers.Rows.Count > 0)
                    {
                        dt_approverData = dt_approvers;
                    }
                }
            }
            return dt_approverData;
        }
        public DataRow Get_ApplicableProcessRow(string WFCode, string EntityID, DataSet ds_WF, string reqrecordID)
        {
            Erp.Base.ScriptInterface.ErpScriptObject Erp = new Erp.Base.ScriptInterface.ErpScriptObject(App, Cfg);
            DataRow Dr_process = null;
            string err = "";
            if (ds_WF.Tables["dt_Instance"] != null && ds_WF.Tables["dt_Instance"].Rows.Count > 0)
            {
                if (!Fn.IsEmpty(ds_WF.Tables["dt_Instance"].Rows[0]["processfid"]))
                {
                    Dr_process = ds_WF.Tables["dt_WFProcess"].SelectSingle("wfprocess_pid='" + ds_WF.Tables["dt_Instance"].Rows[0]["processfid"] + "'");
                }
            }
            else
            {
                #region author vishwajeet date:21-12-2023. commited by vishwajeet. select record from filter_dt_wfdata instead of dt_wfprocess.
                //Dr_process = ds_WF.Tables["dt_WFProcess"].SelectSingle("wfprocesscode='" + WFCode + "'");
                #endregion
                //Dr_process = ds_WF.Tables["Filter_dt_WfData"].SelectSingle("wfprocesscode='" + WFCode + "'");
                Dr_process = ds_WF.Tables["dt_WFProcess"].SelectSingle("wfprocesscode='" + WFCode + "'");
                if(Dr_process==null && Dr_process.Table.Rows.Count<=0)
                {
                    return Dr_process;
                }
                if (ds_WF.Tables["dt_WFProcess"] != null && ds_WF.Tables["dt_WFProcess"].Rows.Count > 0)
                {
                    for (int i = 0; i < ds_WF.Tables["dt_WFProcess"].Rows.Count; i++)
                    {
                        Dr_process = ds_WF.Tables["dt_WFProcess"].Rows[i];
                        bool valid = true;
                        if (!ds_WF.Tables["dt_WFProcess"].Rows[i]["entrycriteria"].C2Str().IsBlank())
                        {
                            if (ds_WF.Tables["dt_WFProcess"].Rows[i]["entityfid"].C2Str() != null && !C.IsBlank(ds_WF.Tables["dt_WFProcess"].Rows[i]["entityfid"].C2Str()))
                            {
                                if(AppManager.DbInfo.Tables["tbl_meta_entities"].Rows.Find(ds_WF.Tables["dt_WFProcess"].Rows[i]["entityfid"].C2Str())== null)
                                {
                                    return null;
                                }
                                string pid = AppManager.DbInfo.Tables["tbl_meta_entities"].Rows.Find(ds_WF.Tables["dt_WFProcess"].Rows[i]["entityfid"].C2Str())["fieldname"].C2Str();
                                string sql = Entity.GetFilterSql(ds_WF.Tables["dt_WFProcess"].Rows[i]["entityfid"].C2Str(), "1", ds_WF.Tables["dt_WFProcess"].Rows[i]["entrycriteria"].C2Str(), null);
                                sql += " and " + pid + "='" + reqrecordID + "'";
                                valid = Erp.ExecuteSql<bool>(sql, null, out err);
                            }
                        }
                        if (valid && !ds_WF.Tables["dt_WFProcess"].Rows[i]["usercriteria"].C2Str().IsBlank())
                        {
                            string sql = Entity.GetFilterSql("tbl_sys_users", "1", ds_WF.Tables["dt_WFProcess"].Rows[i]["usercriteria"].C2Str(), null);
                            sql += "  and Users_pid='" + App.CurrentUserID + "'";
                            valid = Erp.ExecuteSql<bool>(sql, null, out err);
                        }

                        if (valid)
                        {
                            return Dr_process;
                        }
                    }

                }
      
            }
            return Dr_process;
        }

        #region for this method to taking username ,fullname and email . added by vishwajeet date 22-08-2023.
        //public DataTable getuserdetails(string receiverid)
        //{
        //    Erp.Base.ScriptInterface.ErpScriptObject Erp = new Erp.Base.ScriptInterface.ErpScriptObject(App, Cfg);
        //    DataTable dt_usersdata = new DataTable();
        //    string sqluserdata = "", err = "";
        //    sqluserdata = @"select Users_Pid,Email,coalesce(fname, '')+ ' '+ coalesce(mname, '') +' '+coalesce(lname, '') as fullname from tbl_sys_users where Users_Pid=@RecordID";
        //    if (!Fn.IsEmpty(sqluserdata))
        //    {
        //        DataTable dt_users = Erp.ExecuteSql<DataTable>(sqluserdata,
        //                                                            new Dictionary<string, object>() {
        //                                                        {
        //                                                          "@RecordID", receiverid } }
        //                                                            , out err);
        //        if (dt_users != null && dt_users.Rows.Count > 0)
        //        {
        //            dt_usersdata = dt_users;
        //        }
        //    }
        //    return dt_usersdata;

        //}
        #endregion

        #region get data of wfstepnotification from this method and return filter datatable according to wfactiontype .added by vishwajeet date 28-08-2023.
        public DataTable getstepnotificationdata(string wfactiontype, string entityID, string wfCode,string WFProcessID)
        {
            Erp.Base.ScriptInterface.ErpScriptObject Erp = new Erp.Base.ScriptInterface.ErpScriptObject(App, Cfg);
            DataTable dt_stepnotfication = new DataTable();
            string sqlnotficationstep = "", err = "";
            sqlnotficationstep = @"
            --[tbl_workflowstepnotification]
        select wfn.[company_fid], wfn.[wfstepsnotification_pid], wfn.[createdDate], wfn.[createdBy_User_Fid], wfn.[modifiedDate], wfn.[modifiedBy_User_Fid], wfn.[OwnerUser_Fid]
          , [notificationemail_templateid], [notificationusertype], [notification_templateid], [enableemail], [enablenotification], [wfprocessid], [wfactiontype]
        from tbl_AP_wfstepsnotification wfn
        inner join tbl_AP_wfprocess wp on wp.wfprocess_pid= wfn.wfprocessid
        where  wp.wfprocesscode=@WFcode and wp.entityfid=@EntityID and wfactiontype=@action and wfprocessid=@wfprocess_pid and wp.company_fid=@CompanyID ";
            if (!Fn.IsEmpty(sqlnotficationstep))
            {
                DataTable dt_wfstepnotification = Erp.ExecuteSql<DataTable>(sqlnotficationstep,
                                                                    new Dictionary<string, object>() {
                                                                {
                                                                  "@CompanyID", App.CompanyID }, {"@EntityID",entityID },{"@WFcode",wfCode },{"@action",wfactiontype},{"@wfprocess_pid",WFProcessID}
                                                                    }
                                                                    , out err);
                if (dt_wfstepnotification != null && dt_wfstepnotification.Rows.Count > 0)
                {
                    dt_stepnotfication = dt_wfstepnotification;
                }
            }
            return dt_stepnotfication;


        }
        #endregion

        #region added by vishwajeet date 15-12-2023. for checking multiple workflow is applicable then return current row other record.dataTable.Rows[i]["wfprocess_pid"].C2Str()
        public DataRow FindDataRowById(DataTable dataTable, string reqrecordID)
        {
            Erp.Base.ScriptInterface.ErpScriptObject Erp = new Erp.Base.ScriptInterface.ErpScriptObject(App, Cfg);
            string err = "";
            DataRow row = null;
            if (dataTable != null && dataTable.Rows.Count > 0)
            {
                for (int i = 0; i < dataTable.Rows.Count; i++)
                {
                    row = dataTable.Rows[i];
                    bool valid = true;
                    if (!dataTable.Rows[i]["entrycriteria"].C2Str().IsBlank())
                    {
                        if (dataTable.Rows[i]["entityfid"].C2Str() != null && !C.IsBlank(dataTable.Rows[i]["entityfid"].C2Str()))
                        {
                            string pid = AppManager.DbInfo.Tables["tbl_meta_entities"].Rows.Find(dataTable.Rows[i]["entityfid"].C2Str())["fieldname"].C2Str();
                            string sql = Entity.GetFilterSql(dataTable.Rows[i]["entityfid"].C2Str(), "1", dataTable.Rows[i]["entrycriteria"].C2Str(), null);
                            sql += " and "+pid+"='" + reqrecordID + "'";
                            valid = Erp.ExecuteSql<bool>(sql, null, out err);
                        }
                    }
                    if (valid && !dataTable.Rows[i]["usercriteria"].C2Str().IsBlank())
                    {
                        string sql = Entity.GetFilterSql("tbl_sys_users", "1",dataTable.Rows[i]["usercriteria"].C2Str(), null);
                        sql += "  and Users_pid='" + App.CurrentUserID+"'";
                        valid = Erp.ExecuteSql<bool>(sql, null, out err);
                    }
                    //    valid = Entity.GetFilterResult<bool>("tbl_sys_users", App.CurrentUserID, dataTable.Rows[i]["usercriteria"].C2Str(), App.CompanyID, App.CurrentUserID, true, null, Cfg, null);

                    if (valid)
                    {
                        return row;
                    }
                }

            }
            return row;

        }
        #endregion

    }
}
