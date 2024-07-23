﻿using Erp.Common;
using ErpModel.Core;
using HelperLib.DAL;
using HelperLib.Extensions;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace App_Tp.Apps.App_Tp
{
    public class PositionCodeImporter
    {
        ErpModel.Core.Entity entAutocode = new ErpModel.Core.Entity(LayoutTypes.Item, "tbl_TP_positioncode", "", "");
        //List<string> insertdIds = new List<string> { };

        public string postInsert(ApplicationInfo _app, IDBConfiguration _cfg,DataTable dt)
        {
            try
            {
                Erp.Base.ScriptInterface.ErpScriptObject Erp = new Erp.Base.ScriptInterface.ErpScriptObject(_app, _cfg);
                string error = "";
                HelperLib.Data.LiteSet Metadata = _app.MetaData == null ? _app.GetMetaData(_cfg, "tbl_TP_positioncode") : _app.MetaData;
                Dictionary<string, object> data = new Dictionary<string, object>();

                // string strQuery = "select positioncode_pid from tbl_TP_positioncode where isnull(positioncode,'')=''";
                //DataTable dt = Erp.ExecuteSql<DataTable>(strQuery.ToString(), null, out error);
                if (dt != null && dt.Rows.Count > 0)
                {
                    for (int i = 0; i < dt.Rows.Count; i++)
                    {
                        DataRow dr = dt.Rows[i];

                        entAutocode.ItemID = dr["positioncode_pid"].C2Str();

                        data["@Users_UserID"] = _app.CurrentUserID;
                        data["@Users_CompanyID"] = _app.CompanyID.ToString();
                        data["@ID"] = dr["positioncode_pid"].C2Str();
                        

                        entAutocode.GenerateAutoIncrementCode(data, Metadata);
                    }
                }
            }catch(Exception e)
            {
                return e.Message;
            }
            return "";
        }
        public string preInsert(ApplicationInfo _app, IDBConfiguration _cfg, DataTable dt)
        {
            return "";
        }
    }
}