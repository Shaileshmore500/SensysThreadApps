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
using DevExpress.Spreadsheet;
using DevExpress.Docs;
using DevExpress.Utils;

namespace App_Tp.Apps.App_Tp
{

    public class EntityTransfer : ImplEntityScript, IEntityScript
    {
        ApplicationInfo _app; IDBConfiguration _cfg;
        public void Init(ApplicationInfo app, IDBConfiguration cfg)
        {
            _app = app; _cfg = cfg;
            if (Erp.Action == "LOAD")
            {
                Debugger.Break();
            }
        }

        public bool DisableGlobalScripts()
        {
            return false;
        }

        public bool IsReadOnly()
        {
            return false;
        }

        public void GetGridSql(ref string sql, string htmlId, XmlNode node, XmlNode relNode)
        {
            if (htmlId == "dgData")
            {
                //Debugger.Break();
            }
        }

        public bool OnGridCommand(ref string sql, string htmlId, string command, Dictionary<string, object> args)
        {
            if (htmlId == "dgData")
            {
                //Debugger.Break();
            }
            return true;
        }

        public void ReadFieldValue(ref object value, string htmlId, string fieldName)
        {
        }

        public bool HideControl(string htmlId, string fieldName)
        {
            return false;
        }

        public bool DisableControl(string htmlId, string fieldName)
        {
            return false;
        }

        public bool CannotViewControl(string htmlId, string fieldName)
        {
            return false;
        }

        public bool ControlCreating(string htmlId, XmlNode node)
        {
            return true;
        }

        public void ControlCreated(WebControl control)
        {
        }

        public void LayoutCreated(IEntityRenderer renderer)
        {
        }

        public bool OnRepeaterSaving(string repeaterId, List<ErpEntity> entList)
        {
            return true;
        }

        public void OnRepeaterSaved(string repeaterId, List<ErpEntity> entList)
        {

        }

        public bool OnRepeaterItemSaving(string repeaterId, ErpEntity e, List<ErpEntity> entList)
        {
            return true;
        }

        public bool OnEntitySaving()
        {
            return true;
        }

        public void OnEntitySaved(string error)
        {
            if (error.IsBlank())
            {
                //Debugger.Break();
            }
        }

        public void ExecuteCommand(string sender, Dictionary<string, object> args)
        {
            string newRECIDS = "";
            string[] recids = Erp.Grid.GetActualRecords(args.Get("RecordSelection"));

            int rowcount = recids.Length;
            newRECIDS = C.Join(recids, "','", true);
            newRECIDS = "'" + newRECIDS + "'";


            string err = "";
            string result = Erp.ExecuteSql<string>("exec USP_EntityTransfer @entitytranferID,@companyID",
                                         new Dictionary<string, object>() {
                                           {
                                                   "@entitytranferID",newRECIDS},
                                           {
                                                   "@companyID", _app.CompanyID}
                                         }
                                         , out err);            
        }
    }
}
