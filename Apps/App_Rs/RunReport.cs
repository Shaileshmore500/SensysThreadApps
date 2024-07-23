using App_Rs.Apps.App_Rs;
using DevExpress.Compression;
using DevExpress.Spreadsheet;
using DevExpress.XtraReports.Parameters;
using Erp.Base.ScriptInterface;
using Erp.Base.Security;
using Erp.Common;
using HelperLib.Conversion;
using HelperLib.DAL;
using HelperLib.Extensions;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.IO;

using System.IO.Compression;
using System.IO.Packaging;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;





namespace App_Rs.Apps.App_RS
{
    public class ScheduleRunReport : ImplTaskScript, ITaskScript
    {
        ApplicationInfo _app;
        IDBConfiguration _cfg;
        public StringBuilder ErrorList;
        
        public void Init(ApplicationInfo app, IDBConfiguration cfg, Dictionary<string, object> taskInfo,string args)
        {
            _app = app;
            _cfg = cfg;
            Erp.Base.Scheduling.TaskScheduler.AddJobLog("Started", "1.1");
            GenerateReport RunSchedule = new GenerateReport();
            


            RunSchedule.Init(app, cfg);
            
            RunSchedule.RunReport(taskInfo["recordID"].C2Str());
            //RunSchedule.RunReport(taskInfo["instanceID"].C2Str());

            string error = RunSchedule.ErrorList.C2Str();
            var status = 0;
            var filepath = RunSchedule.filePath;
            if (Fn.IsEmpty(error) && !Fn.IsEmpty(filepath))
            {
                status = 1;
            }
            else
            {
                status = 2;
                
            }
            
            var ent = new ErpEntity("tbl_RS_generatereport", taskInfo["recordID"].C2Str(), _cfg);
            ent["status"] = status;
            ent["error"] = error;
            ent["filepath"] = filepath;
            ent.ModifiedBy = _app.CurrentUserID;
            ent.CompanyID = _app.CompanyID;
            ent.MetaData = _app.GetMetaData(_cfg, "tbl_RS_reportdata");
            //ent.DisableAutoCalculation=true;
            bool success = ent.Save();
            //ent.EvaluateCalculatedFields();



        }


    }
}
