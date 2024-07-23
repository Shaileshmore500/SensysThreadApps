﻿using System;
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
using HelperLib.Extensions;
namespace App_Ap.Apps.App_Ap
{
    public class WorkFlowActions
    {
        public ApplicationInfo App;
        public HelperLib.DAL.IDBConfiguration Cfg;
        public WorkFlowActions()
        {
        }
        public WorkFlowActions(ApplicationInfo app, HelperLib.DAL.IDBConfiguration cfg)
        {
            App = app;
            Cfg = cfg;
        }
        public string ProcessWorkFlow(string WFCode, string _EntityID, string _RecordID, string UserID, string Action, Dictionary<string, object> Notification,string TriggerEmployeeID)
        {
            Erp.Base.ScriptInterface.ErpScriptObject _Erp = new Erp.Base.ScriptInterface.ErpScriptObject(App, Cfg);
            string err = "";
            string ReturnMovementID = "";
            string Sql_GetWFData = @"
--[dt_WFProcess]
select * from tbl_AP_wfprocess where wfprocesscode=@WFcode and entityfid=@EntityID and company_fid=@CompanyID ;
--[dt_Steps]
select * from tbl_AP_wfsteps
join tbl_AP_wfprocess on wfprocessfid=wfprocess_pid 
where wfprocesscode=@WFcode and entityfid=@EntityID and tbl_AP_wfsteps.company_fid=@CompanyID
order by stepnumber desc;
--[dt_Instance]
select * from tbl_AP_wfprocessinstances
join tbl_AP_wfprocess on processfid=wfprocess_pid
join tbl_AP_wfprocessmovement on currentmovementfid=wfprocessmovement_pid
where _recordid=@RecordID and entityid=@EntityID and wfprocesscode=@WFcode and entityfid=@EntityID and tbl_AP_wfprocessinstances.company_fid=@CompanyID;
--[dt_WfAppConfig]
select key1 as approvertypecode,longdata1 as approverquery  from tbl_sys_appconfiguration where key2='WFApproverType' and company_fid=@CompanyID;
";
            var ds_WF = _Erp.ExecuteSql<DataSet>(Sql_GetWFData,
                                                 new Dictionary<string, object>() {
                                             {
                                               "@RecordID", _RecordID }
                                             ,
                                             {
                                               "@WFcode", WFCode }
                                             ,{
                                               "@EntityID",_EntityID} ,{ "@CompanyID",App.CompanyID}
                                                 }
                                                 
        
                                                 , out err);
            DataTable dt_Instance = new DataTable();
            DataTable dt_WfData = new DataTable();
            DataTable dt_Steps = new DataTable();
            string SqlProcessWF = "";
            DataRow Dr_Process = null;
            string WFProcessID = "";
            if (ds_WF != null && ds_WF.Tables.Count > 0 && ds_WF.Tables["dt_WFProcess"].Rows.Count > 0)
            {
                dt_Instance = ds_WF.Tables["dt_Instance"];
                dt_WfData = ds_WF.Tables["dt_WFProcess"];
                dt_Steps = ds_WF.Tables["dt_Steps"];
                Dr_Process = Get_ApplicableProcessRow(WFCode, _EntityID, ds_WF);
                if (Dr_Process == null)
                {
                    Notification.Add("WFstatus", "No Configration found");
                    
                    return "No Configration found";
                }
            }
            else
            {
                Notification.Add("WFstatus", "No Configration found");
                
                return "No Configration found";
            }
            WFProcessID = Dr_Process["wfprocess_pid"].C2Str();
            string InstanceRecordID = "";
            string Insert_MovementRecordID = "";
            string Insert_MovementRecordID1 = "";
            int currentLevel = 0;
            int LastLevel = 0;
            bool InsertReceiver = false;
            if (dt_Instance.Rows.Count == 0)
            {
                InstanceRecordID = Guid.NewGuid().C2Str();
                currentLevel = 0;
                SqlProcessWF = @"insert into tbl_AP_wfprocessinstances(company_fid,wfprocessinstances_pid,_recordid,entityid,processfid,createdDate)values
(@company,@InstanceRecordID,@_recordid,@entityid,@WFProcessID,getdate());";
                Insert_MovementRecordID1 = Guid.NewGuid().C2Str();
                SqlProcessWF += @"insert into tbl_AP_wfprocessmovement(company_fid,wfprocessmovement_pid,processinstancesfid,action,level,date,senderid,createdDate)
values(@company,@MovementRecordID1,@InstanceRecordID,@action,0,@SYS_NOW,@sender_id,getdate())";
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
                if (Fn.ToLowerCase(currentstatus) == "reject" && Fn.ToLowerCase(Action) == "submit")
                {
                    currentLevel = 0;
                    Insert_MovementRecordID1 = Guid.NewGuid().C2Str();
                    SqlProcessWF += @"insert into tbl_AP_wfprocessmovement(company_fid,wfprocessmovement_pid,processinstancesfid,action,level,date,senderid,createdDate)
values(@company,@MovementRecordID1,@InstanceRecordID,@action,0,@SYS_NOW,@sender_id,getdate())";
                    SqlProcessWF += @"update tbl_AP_wfprocessinstances set currentmovementfid=@MovementRecordID1
where wfprocessinstances_pid=@InstanceRecordID;";
                    InsertReceiver = true;
                    ReturnMovementID = Insert_MovementRecordID1;
                }
                else
                {
                    LastLevel = dt_Steps.Rows[0]["wfsteps"].C2Int();
                    SqlProcessWF = @"insert into tbl_AP_wfprocessmovement(company_fid,wfprocessmovement_pid,processinstancesfid,action,level,date,senderid,createdDate)
values(@company,@MovementRecordID,@InstanceRecordID,@action,@currentLevel,@SYS_NOW,@sender_id,getdate());";
                    SqlProcessWF += @"update tbl_AP_wfprocessinstances set currentmovementfid=@MovementRecordID 
where wfprocessinstances_pid=@InstanceRecordID;";
                    SqlProcessWF += @"update tbl_AP_wfprocessrecievers set actiondate=@SYS_NOW,action=@action,isactiontaken=1 
where receiverid=@sender_id and isnull(isactiontaken,0)=0;";
                    InsertReceiver = false;
                    ReturnMovementID = Insert_MovementRecordID;
                    if (currentLevel == LastLevel)
                    {
                        if (Fn.ToLowerCase(Action) == "accept")
                        {
                            InsertReceiver = false;
                            SqlProcessWF += @"update  tbl_AP_wfprocessinstances set isfinalaccept=1 from tbl_AP_wfprocessinstances where  wfprocessinstances_pid=@InstanceRecordID";
                            ReturnMovementID = Insert_MovementRecordID;
                        }
                    }
                    else if (Fn.ToLowerCase(Action) != "reject")
                    {
                        Insert_MovementRecordID1 = Guid.NewGuid().C2Str();
                        SqlProcessWF += @"insert into tbl_AP_wfprocessmovement(company_fid,wfprocessmovement_pid,processinstancesfid,action,level,date,senderid,createdDate)
values(@company,@MovementRecordID1,@InstanceRecordID,'submit',@currentLevel,@SYS_NOW,@sender_id,getdate());";
                        SqlProcessWF += @"update tbl_AP_wfprocessinstances set currentmovementfid=@MovementRecordID1 
where wfprocessinstances_pid=@InstanceRecordID;";
                        InsertReceiver = true;
                        ReturnMovementID = Insert_MovementRecordID1;
                    }
                }
            }
            if (InsertReceiver)
            {
                DataTable dt_Receivers = GetReceiversData(ds_WF, WFProcessID, currentLevel + 1,_RecordID,TriggerEmployeeID,Insert_MovementRecordID1,_EntityID,UserID);
                if (dt_Receivers != null && dt_Receivers.Rows.Count > 0)
                {
                    for (var i = 0;
                         i < dt_Receivers.Rows.Count;
                         i++)
                    {
                        SqlProcessWF += @" insert into tbl_AP_wfprocessrecievers
(company_fid, wfprocessrecievers_pid, receiverid, processmovementfid, processinstancesfid,createdDate)
values(@company, NEWID(), '" + dt_Receivers.Rows[i]["receiverID"] + @"', @MovementRecordID1, @InstanceRecordID,getdate())";
                        Notification["UserID"] = dt_Receivers.Rows[i]["receiverID"];
                        _Erp.RaiseNotification(Notification);
                    }
                }
            }
            string result = _Erp.ExecuteSql<string>(SqlProcessWF,
                                                    new Dictionary<string, object>() {
                                                {
                                                  "@InstanceRecordID",InstanceRecordID }
                                                ,{
                                                  "@entityid",_EntityID}
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
                                                  "@_recordid",_RecordID}
                                                ,
                                                {
                                                  "@action",Action}
                                                ,{
                                                  "@sender_id",UserID}
                                                ,{
                                                  "@currentLevel",currentLevel}
                                                    }
                                                    , out err);
            return ReturnMovementID;
        }
        public DataTable GetReceiversData(DataSet ds_WF, string wFProcessID, int Level,string RecordID,string TriggeredEmployeeID, string Insert_MovementRecordID1,string  _EntityID, string UserID)
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
        public DataRow Get_ApplicableProcessRow(string WFCode, string EntityID, DataSet ds_WF)
        {
            DataRow Dr_process = null;
            if (ds_WF.Tables["dt_Instance"] != null && ds_WF.Tables["dt_Instance"].Rows.Count > 0)
            {
                if (!Fn.IsEmpty(ds_WF.Tables["dt_Instance"].Rows[0]["processfid"]))
                {
                    Dr_process = ds_WF.Tables["dt_WFProcess"].SelectSingle("wfprocess_pid='" + ds_WF.Tables["dt_Instance"].Rows[0]["processfid"] + "'");
                }
            }
            else
            {
                Dr_process = ds_WF.Tables["dt_WFProcess"].SelectSingle("wfprocesscode='" + WFCode + "'");
            }
            return Dr_process;
        }
    }
}
