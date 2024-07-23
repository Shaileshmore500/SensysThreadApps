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
using HelperLib.DAL;
using HelperLib.Extensions;
using HelperLib.Conversion;
namespace App_Ap.Apps.App_Ap
{

    public struct actionmaster
    {
        public const string accept = "accept";
        public const string reject = "reject";
        public const string submit = "submit";
        public const string finalapproved = "finalapproved";
    }
    public struct userType
    {
        public const string Current_Stage_Approver = "Current_Stage_Approver";
        public const string Approver = "Approver";
        public const string Submitter = "Submitter";
        public const string Next_Stage_Approver = "Next_Stage_Approver";
        public const string Prev_Stage_Approver = "Previous_Stage_Approver";

    }
    public struct actionType
    {
        public const string Work_Flow_Initiated = "Workflow_Initiated";
        public const string Workflow_Approved = "Workflow_Approved";
        public const string Workflow_Finally_Approved = "Workflow_Finally_Approved";
        public const string Workflow_Declined = "Workflow_Declined";
    }
    public class Layout_WFProcess : ImplEntityScript, IEntityScript
    {
        ApplicationInfo _app; IDBConfiguration _cfg;
        public void Init(ApplicationInfo app, IDBConfiguration cfg)
        {
            _app = app; _cfg = cfg;
            if (Erp.Action == "LOAD")
            {
                //Debugger.Break();
            }

        }

        public bool ControlCreating(string htmlId, XmlNode node)
        {

            if (htmlId == "ifrmUserCriteria")
            {
             
                node.Attributes["Url"].Value = "../Meta/Filters_Add.aspx?PageMode=Settings&Hidebutton=1&ReturnXml=1&ShowFilterBtn=1&EID=tbl_sys_users&SID=" + Erp.UniqueID + "_User" ;
            }
            if (Erp.LayoutMode != "A")
            {
                if (htmlId == "ifrmentryCriteria")
                {
                 node.Attributes["Url"].Value = "../Meta/Filters_Add.aspx?PageMode=Settings&Hidebutton=1&ReturnXml=1&ShowFilterBtn=1&EID=" + Field["entityfid"]+"&SID=" + Erp.UniqueID + "_Entity "+ "";
                }
            }


            return true;
        }


        public void LayoutCreated(IEntityRenderer renderer)
        {
            #region set entity name for loading entity in filter added by vishwajeet Date 12/12/2023.
            ///set entity name for loading entity in filter added by vishwajeet Date 12/12/2023.
            if (Erp.LayoutMode == "E" || Erp.LayoutMode == "V")
            {
                HelperLib.Store.DataStore.Local["filterData" + Erp.UniqueID + "_Entity"] = new Dictionary<string, object>() {
        {
          "PageType", Erp.LayoutMode }
        , {
          "Type", "ShowEntityFilter" }
        , {
          "EID", Erp.GetFieldValue("txt_wf_process_entityfid").C2Str() }
        , {
          "xml", Erp.GetFieldValue("txt_entitycriteria")}
      };
                HelperLib.Store.DataStore.Local["filterData" + Erp.UniqueID + "_User"] = new Dictionary<string, object>() {
        {
          "PageType", Erp.LayoutMode }
        , {
          "Type", "ShowEntityFilter" }
        , {
          "EID", "tbl_SYS_Users" }
        , {
          "xml", Erp.GetFieldValue("txt_usercriteria") }
      };
            }
            #endregion end
            ///

            //Erp.Base.ScriptInterface.ErpScriptObject _Erp = new Erp.Base.ScriptInterface.ErpScriptObject(App, Cfg);
            string err = "";
            string sql = @"
                --[tbl0]      
               --QUERY BEGIN--  
              SELECT '" + actionType.Work_Flow_Initiated + @"' AS [wfactiontype],'" + userType.Submitter + @"' AS [notificationusertype], 0.0 as sortno,
(select top 1 enableemail  from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Work_Flow_Initiated + @"' and notificationusertype='" + userType.Submitter + @"' and wfprocessid=@RecordID) as enableemail,
(select top 1 enablenotification from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Work_Flow_Initiated + @"' and notificationusertype='" + userType.Submitter + @"' and wfprocessid=@RecordID) as enablenotification,
(select top 1 notification_templateid from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Work_Flow_Initiated + @"' and notificationusertype='" + userType.Submitter + @"' and wfprocessid=@RecordID) as notification_templateid,
(select top 1 notificationemail_templateid from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Work_Flow_Initiated + @"' and notificationusertype='" + userType.Submitter + @"' and wfprocessid=@RecordID) as notificationemail_templateid,
(select top 1 Name from tbl_CORE_notificationmaster  cnm inner join tbl_AP_wfstepsnotification wsn on cnm.NotificationMaster_Pid=wsn.notification_templateid
where wsn.wfactiontype='" + actionType.Work_Flow_Initiated + @"' and wsn.notificationusertype='" + userType.Submitter + @"' and wsn.wfprocessid=@RecordID) as notificationname, 
(select top 1 lettername from tbl_CORE_lettertemplates clt inner join tbl_AP_wfstepsnotification wsn on clt.LetterTemplates_Pid=wsn.notificationemail_templateid
where wsn.wfactiontype='" + actionType.Work_Flow_Initiated + @"' and wsn.notificationusertype='" + userType.Submitter + @"' and wsn.wfprocessid=@RecordID) as emailnotificationname,
(select wfstepsnotification_pid from tbl_AP_wfstepsnotification where wfactiontype='" + userType.Submitter + @"' and notificationusertype='" + userType.Submitter + @"' and wfprocessid=@RecordID) as wfstepsnotification_pid
 UNION
 SELECT '" + actionType.Work_Flow_Initiated + @"','" + userType.Approver + @"', 0.1 as sortno,
(select top 1 enableemail  from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Work_Flow_Initiated + @"' and notificationusertype='" + userType.Approver + @"' and wfprocessid=@RecordID) as enableemail,
(select top 1 enablenotification from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Work_Flow_Initiated + @"' and notificationusertype='" + userType.Approver + @"' and wfprocessid=@RecordID) as enablenotification,
(select top 1 notification_templateid from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Work_Flow_Initiated + @"' and notificationusertype='" + userType.Approver + @"' and wfprocessid=@RecordID) as notification_templateid,
(select top 1 notificationemail_templateid from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Work_Flow_Initiated + @"' and notificationusertype='" + userType.Approver + @"' and wfprocessid=@RecordID) as notificationemail_templateid,
(select top 1 Name from tbl_CORE_notificationmaster  cnm inner join tbl_AP_wfstepsnotification wsn on cnm.NotificationMaster_Pid=wsn.notification_templateid
where wsn.wfactiontype='" + actionType.Work_Flow_Initiated + @"' and wsn.notificationusertype='" + userType.Approver + @"' and wsn.wfprocessid=@RecordID) as notificationname, 
(select top 1 lettername from tbl_CORE_lettertemplates clt inner join tbl_AP_wfstepsnotification wsn on clt.LetterTemplates_Pid=wsn.notificationemail_templateid
where wsn.wfactiontype='" + actionType.Work_Flow_Initiated + @"' and wsn.notificationusertype='" + userType.Approver + @"' and wsn.wfprocessid=@RecordID) as emailnotificationname,
(select wfstepsnotification_pid from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Work_Flow_Initiated + @"' and notificationusertype='" + userType.Approver + @"' and wfprocessid=@RecordID) as wfstepsnotification_pid
UNION
SELECT '" + actionType.Workflow_Approved + @"', '" + userType.Current_Stage_Approver + @"', 1.0 as sortno,
(select top 1 enableemail  from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Approved + @"' and notificationusertype='" + userType.Current_Stage_Approver + @"' and wfprocessid=@RecordID) as enableemail,
(select top 1 enablenotification from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Approved + @"' and notificationusertype='" + userType.Current_Stage_Approver + @"' and wfprocessid=@RecordID) as enablenotification,
(select top 1 notification_templateid from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Approved + @"' and notificationusertype='" + userType.Current_Stage_Approver + @"' and wfprocessid=@RecordID) as notification_templateid,
(select top 1 notificationemail_templateid from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Approved + @"' and notificationusertype='" + userType.Current_Stage_Approver + @"' and wfprocessid=@RecordID) as notificationemail_templateid,
(select top 1 Name from tbl_CORE_notificationmaster  cnm inner join tbl_AP_wfstepsnotification wsn on cnm.NotificationMaster_Pid=wsn.notification_templateid
where wsn.wfactiontype='" + actionType.Workflow_Approved + @"' and wsn.notificationusertype='" + userType.Current_Stage_Approver + @"' and wsn.wfprocessid=@RecordID) as notificationname, 
(select top 1 lettername from tbl_CORE_lettertemplates clt inner join tbl_AP_wfstepsnotification wsn on clt.LetterTemplates_Pid=wsn.notificationemail_templateid
where wsn.wfactiontype='" + actionType.Workflow_Approved + @"' and wsn.notificationusertype='" + userType.Current_Stage_Approver + @"' and wsn.wfprocessid=@RecordID) as emailnotificationname,
(select wfstepsnotification_pid from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Approved + @"' and notificationusertype='" + userType.Current_Stage_Approver + @"' and wfprocessid=@RecordID) as wfstepsnotification_pid
UNION
SELECT  '" + actionType.Workflow_Approved + @"', '" + userType.Next_Stage_Approver + @"', 1.1 as sortno,
(select top 1 enableemail  from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Approved + @"' and notificationusertype='" + userType.Next_Stage_Approver + @"' and wfprocessid=@RecordID) as enableemail,
(select top 1 enablenotification from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Approved + @"' and notificationusertype='" + userType.Next_Stage_Approver + @"' and wfprocessid=@RecordID) as enablenotification,
(select top 1 notification_templateid from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Approved + @"' and notificationusertype='" + userType.Next_Stage_Approver + @"' and wfprocessid=@RecordID) as notification_templateid,
(select top 1 notificationemail_templateid from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Approved + @"' and notificationusertype='" + userType.Next_Stage_Approver + @"' and wfprocessid=@RecordID) as notificationemail_templateid,
(select top 1 Name from tbl_CORE_notificationmaster  cnm inner join tbl_AP_wfstepsnotification wsn on cnm.NotificationMaster_Pid=wsn.notification_templateid
where wsn.wfactiontype='" + actionType.Workflow_Approved + @"' and wsn.notificationusertype='" + userType.Next_Stage_Approver + @"' and wsn.wfprocessid=@RecordID) as notificationname, 
(select top 1 lettername from tbl_CORE_lettertemplates clt inner join tbl_AP_wfstepsnotification wsn on clt.LetterTemplates_Pid=wsn.notificationemail_templateid
where wsn.wfactiontype='" + actionType.Workflow_Approved + @"' and wsn.notificationusertype='" + userType.Next_Stage_Approver + @"' and wsn.wfprocessid=@RecordID) as emailnotificationname,
(select wfstepsnotification_pid from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Approved + @"' and notificationusertype='" + userType.Next_Stage_Approver + @"' and wfprocessid=@RecordID) as wfstepsnotification_pid
UNION
SELECT '" + actionType.Workflow_Approved + @"','" + userType.Submitter + @"', 1.2 as sortno,
(select top 1 enableemail  from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Approved + @"' and notificationusertype='" + userType.Submitter + @"' and wfprocessid=@RecordID) as enableemail,
(select top 1 enablenotification from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Approved + @"' and notificationusertype='" + userType.Submitter + @"' and wfprocessid=@RecordID) as enablenotification,
(select top 1 notification_templateid from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Approved + @"' and notificationusertype='" + userType.Submitter + @"' and wfprocessid=@RecordID) as notification_templateid,
(select top 1 notificationemail_templateid from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Approved + @"' and notificationusertype='" + userType.Submitter + @"' and wfprocessid=@RecordID) as notificationemail_templateid,
(select top 1 Name from tbl_CORE_notificationmaster  cnm inner join tbl_AP_wfstepsnotification wsn on cnm.NotificationMaster_Pid=wsn.notification_templateid
where wsn.wfactiontype='" + actionType.Workflow_Approved + @"' and wsn.notificationusertype='" + userType.Submitter + @"' and wsn.wfprocessid=@RecordID) as notificationname, 
(select top 1 lettername from tbl_CORE_lettertemplates clt inner join tbl_AP_wfstepsnotification wsn on clt.LetterTemplates_Pid=wsn.notificationemail_templateid
where wsn.wfactiontype='" + actionType.Workflow_Approved + @"' and wsn.notificationusertype='" + userType.Submitter + @"' and wsn.wfprocessid=@RecordID) as emailnotificationname,
(select wfstepsnotification_pid from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Approved + @"' and notificationusertype='" + userType.Submitter + @"' and wfprocessid=@RecordID) as wfstepsnotification_pid
UNION
SELECT '" + actionType.Workflow_Finally_Approved + @"', '" + userType.Current_Stage_Approver + @"', 2.0 as sortno,
(select top 1 enableemail  from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Finally_Approved + @"'and notificationusertype='" + userType.Current_Stage_Approver + @"' and wfprocessid=@RecordID) as enableemail,
(select top 1 enablenotification from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Finally_Approved + @"' and notificationusertype='" + userType.Current_Stage_Approver + @"' and wfprocessid=@RecordID) as enablenotification,
(select top 1 notification_templateid from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Finally_Approved + @"' and notificationusertype='" + userType.Current_Stage_Approver + @"' and wfprocessid=@RecordID) as notification_templateid,
(select top 1 notificationemail_templateid from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Finally_Approved + @"' and notificationusertype='" + userType.Current_Stage_Approver + @"' and wfprocessid=@RecordID) as notificationemail_templateid,
(select top 1 Name from tbl_CORE_notificationmaster  cnm inner join tbl_AP_wfstepsnotification wsn on cnm.NotificationMaster_Pid=wsn.notification_templateid
where wsn.wfactiontype='" + actionType.Workflow_Finally_Approved + @"' and wsn.notificationusertype='" + userType.Current_Stage_Approver + @"' and wsn.wfprocessid=@RecordID) as notificationname, 
(select top 1 lettername from tbl_CORE_lettertemplates clt inner join tbl_AP_wfstepsnotification wsn on clt.LetterTemplates_Pid=wsn.notificationemail_templateid
where wsn.wfactiontype='" + actionType.Workflow_Finally_Approved + @"' and wsn.notificationusertype='" + userType.Current_Stage_Approver + @"' and wsn.wfprocessid=@RecordID) as emailnotificationname,
(select wfstepsnotification_pid from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Finally_Approved + @"' and notificationusertype='" + userType.Current_Stage_Approver + @"' and wfprocessid=@RecordID) as wfstepsnotification_pid
UNION
SELECT '" + actionType.Workflow_Finally_Approved + @"', '" + userType.Submitter + @"', 2.1 as sortno,
(select top 1 enableemail  from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Finally_Approved + @"' and notificationusertype='" + userType.Submitter + @"' and wfprocessid=@RecordID) as enableemail,
(select top 1 enablenotification from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Finally_Approved + @"' and notificationusertype='" + userType.Submitter + @"' and wfprocessid=@RecordID) as enablenotification,
(select top 1 notification_templateid from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Finally_Approved + @"' and notificationusertype='" + userType.Submitter + @"' and wfprocessid=@RecordID) as notification_templateid,
(select top 1 notificationemail_templateid from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Finally_Approved + @"'and notificationusertype='" + userType.Submitter + @"' and wfprocessid=@RecordID) as notificationemail_templateid,
(select top 1 Name from tbl_CORE_notificationmaster  cnm inner join tbl_AP_wfstepsnotification wsn on cnm.NotificationMaster_Pid=wsn.notification_templateid
where wsn.wfactiontype='" + actionType.Workflow_Finally_Approved + @"' and wsn.notificationusertype='" + userType.Submitter + @"' and wsn.wfprocessid=@RecordID) as notificationname, 
(select top 1 lettername from tbl_CORE_lettertemplates clt inner join tbl_AP_wfstepsnotification wsn on clt.LetterTemplates_Pid=wsn.notificationemail_templateid
where wsn.wfactiontype='" + actionType.Workflow_Finally_Approved + @"' and wsn.notificationusertype='" + userType.Submitter + @"' and wsn.wfprocessid=@RecordID) as emailnotificationname,
(select wfstepsnotification_pid from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Finally_Approved + @"' and notificationusertype='" + userType.Submitter + @"' and wfprocessid=@RecordID) as wfstepsnotification_pid
UNION
SELECT '" + actionType.Workflow_Declined + @"', '" + userType.Current_Stage_Approver + @"', 3.0 as sortno,
(select top 1 enableemail  from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Declined + @"' and notificationusertype='" + userType.Current_Stage_Approver + @"' and wfprocessid=@RecordID) as enableemail,
(select top 1 enablenotification from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Declined + @"' and notificationusertype='" + userType.Current_Stage_Approver + @"' and wfprocessid=@RecordID) as enablenotification,
(select top 1 notification_templateid from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Declined + @"' and notificationusertype='" + userType.Current_Stage_Approver + @"' and wfprocessid=@RecordID) as notification_templateid,
(select top 1 notificationemail_templateid from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Declined + @"' and notificationusertype='" + userType.Current_Stage_Approver + @"' and wfprocessid=@RecordID) as notificationemail_templateid,
(select top 1 Name from tbl_CORE_notificationmaster  cnm inner join tbl_AP_wfstepsnotification wsn on cnm.NotificationMaster_Pid=wsn.notification_templateid
where wsn.wfactiontype='" + actionType.Workflow_Declined + @"' and wsn.notificationusertype='" + userType.Current_Stage_Approver + @"' and wsn.wfprocessid=@RecordID) as notificationname, 
(select top 1 lettername from tbl_CORE_lettertemplates clt inner join tbl_AP_wfstepsnotification wsn on clt.LetterTemplates_Pid=wsn.notificationemail_templateid
where wsn.wfactiontype='" + actionType.Workflow_Declined + @"' and wsn.notificationusertype='" + userType.Current_Stage_Approver + @"' and wsn.wfprocessid=@RecordID) as emailnotificationname,
(select wfstepsnotification_pid from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Declined + @"' and notificationusertype='" + userType.Current_Stage_Approver + @"' and wfprocessid=@RecordID) as wfstepsnotification_pid
UNION
SELECT '" + actionType.Workflow_Declined + @"', '" + userType.Prev_Stage_Approver + @"', 3.1 as sortno,
(select top 1 enableemail  from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Declined + @"' and notificationusertype='" + userType.Prev_Stage_Approver + @"' and wfprocessid=@RecordID) as enableemail,
(select top 1 enablenotification from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Declined + @"' and notificationusertype='" + userType.Prev_Stage_Approver + @"' and wfprocessid=@RecordID) as enablenotification,
(select top 1 notification_templateid from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Declined + @"' and notificationusertype='" + userType.Prev_Stage_Approver + @"' and wfprocessid=@RecordID) as notification_templateid,
(select top 1 notificationemail_templateid from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Declined + @"' and notificationusertype='" + userType.Prev_Stage_Approver + @"' and wfprocessid=@RecordID) as notificationemail_templateid,
(select top 1 Name from tbl_CORE_notificationmaster  cnm inner join tbl_AP_wfstepsnotification wsn on cnm.NotificationMaster_Pid=wsn.notification_templateid
where wsn.wfactiontype='" + actionType.Workflow_Declined + @"' and wsn.notificationusertype='" + userType.Prev_Stage_Approver + @"' and wsn.wfprocessid=@RecordID) as notificationname, 
(select top 1 lettername from tbl_CORE_lettertemplates clt inner join tbl_AP_wfstepsnotification wsn on clt.LetterTemplates_Pid=wsn.notificationemail_templateid
where wsn.wfactiontype='" + actionType.Workflow_Declined + @"' and wsn.notificationusertype='" + userType.Prev_Stage_Approver + @"' and wsn.wfprocessid=@RecordID) as emailnotificationname,
(select wfstepsnotification_pid from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Declined + @"' and notificationusertype='" + userType.Prev_Stage_Approver + @"' and wfprocessid=@RecordID) as wfstepsnotification_pid
UNION
SELECT '" + actionType.Workflow_Declined + @"', '" + userType.Submitter + @"', 3.3 as sortno,
(select top 1 enableemail  from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Declined + @"' and notificationusertype='" + userType.Submitter + @"' and wfprocessid=@RecordID) as enableemail,
(select top 1 enablenotification from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Declined + @"' and notificationusertype='" + userType.Submitter + @"' and wfprocessid=@RecordID) as enablenotification,
(select top 1 notification_templateid from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Declined + @"' and notificationusertype='" + userType.Submitter + @"' and wfprocessid=@RecordID) as notification_templateid,
(select top 1 notificationemail_templateid from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Declined + @"' and notificationusertype='" + userType.Submitter + @"' and wfprocessid=@RecordID) as notificationemail_templateid,
(select top 1 Name from tbl_CORE_notificationmaster  cnm inner join tbl_AP_wfstepsnotification wsn on cnm.NotificationMaster_Pid=wsn.notification_templateid
where wsn.wfactiontype='" + actionType.Workflow_Declined + @"' and wsn.notificationusertype='" + userType.Submitter + @"' and wsn.wfprocessid=@RecordID) as notificationname, 
(select top 1 lettername from tbl_CORE_lettertemplates clt inner join tbl_AP_wfstepsnotification wsn on clt.LetterTemplates_Pid=wsn.notificationemail_templateid
where wsn.wfactiontype='" + actionType.Workflow_Declined + @"' and wsn.notificationusertype='" + userType.Submitter + @"' and wsn.wfprocessid=@RecordID) as emailnotificationname,
(select wfstepsnotification_pid from tbl_AP_wfstepsnotification where wfactiontype='" + actionType.Workflow_Declined + @"' and notificationusertype='" + userType.Submitter + @"' and wfprocessid=@RecordID) as wfstepsnotification_pid
order by sortno asc
              ";
            DataTable result = Erp.ExecuteSql<DataTable>(sql, new Dictionary<string, object>() { { "@RecordID", Erp.RecordID } }, out err);

            if (!err.IsBlank())
                Erp.ShowMessage(err, "error");
            else if (err.IsBlank())
                Erp.ExecuteScript("tbl_wfprocessdata=" + result.ToJSON() + "");
        }

        public void ExecuteCommand(string sender, Dictionary<string, object> args)
        {
            if (sender == "Setentityname")
            {
                #region set entity name for loading entity in filter added by vishwajeet Date 12/12/2023.
                ///set entity name for loading entity in filter added by vishwajeet Date 12/12/2023.
              //  if (Erp.LayoutMode == "A")
              //  {
                    HelperLib.Store.DataStore.Local["filterData" + Erp.UniqueID + "_Entity"] = new Dictionary<string, object>() {
        {
          "PageType", Erp.LayoutMode }
        , {
          "Type", "ShowEntityFilter" }
        , {
          "EID", Erp.GetFieldValue("txt_wf_process_entityfid")}
        , {
          "xml", "" }
      };
                    HelperLib.Store.DataStore.Local["filterData" + Erp.UniqueID + "_User"] = new Dictionary<string, object>() { { "PageType", Erp.LayoutMode }, { "Type", "ShowEntityFilter" }, { "EID", "tbl_SYS_Users" }, { "xml", "" } };
               // }
                #endregion end
                ///
            }


        }
    }

}