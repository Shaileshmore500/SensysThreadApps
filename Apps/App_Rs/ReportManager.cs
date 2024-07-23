﻿using Erp.Base.ScriptInterface;
using Erp.Common;
using HelperLib.DAL;
using HelperLib.Extensions;
using System;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.Web;
using SensysErp;
using System.Web.UI;
using System.Web.UI.WebControls;
using Erp.Base;
using ErpModel.Globals;
using HelperLib.Conversion;
using HelperLib.Data;
using System.IO;
using System.Xml;
using System.Text.RegularExpressions;
using System.Reflection;
using System.Threading.Tasks;
using Erp.Base.Reporting;
using Erp.Base.Security;
using ErpModel.Core;
using ErpModel.Model;
using System.Text;
using Erp.Base.Utils;

namespace App_Rs.Apps.App_RS
{

    public class ReportManager : ImplEntityScript, IEntityScript
    {
        ApplicationInfo _app; IDBConfiguration _cfg;
        Erp.Base.ScriptInterface.ErpScriptObject Erp;
        public void Init(ApplicationInfo app, IDBConfiguration cfg)
        {
            _app = app; _cfg = cfg;
            Erp = new Erp.Base.ScriptInterface.ErpScriptObject(_app, _cfg);

            if (Erp.Action == "LOAD")
            {

//                string err = "";
//                string validConfigCSV = "";
//                DataTable dt_valid = new DataTable();
//                DataSet ds = Erp.ExecuteSql<DataSet>(@"
//--[dt  from tbl_RS_configuration
//left join tbl_RS_spmaster on spmaster_fid=spmaster_pid where tbl_RS_configuration.company_fid=@User.CompanyID and 	ispermissionsp<>1;
//--[dt_sp]
//select * from tbl_rs_spmaster
//--[dt_configuration_roll]
//select * from tbl_RS_configuration_roles_fid where company_fid=@User.CompanyID;
//--[dt_user_roll]
//select * from tbl_sys_users_roleassignment
//where parent_key=@Users.UserID;
//",
//                                          new Dictionary<string, object>() {
//                            { "@ID", 1 }
//                                          }, out err);
//                DataTable dt_all = ds.Tables["dt_all"];
//                DataTable dt_sp = ds.Tables["dt_sp"];
//                DataTable dt_configuration_roll = ds.Tables["dt_configuration_roll"];
//                DataTable dt_user_roll = ds.Tables["dt_user_roll"];
//                dt_valid = dt_all.Clone();
//                DataRow[] dr_nopermission = dt_all.Select("isnull(sppermission,0)=0 and isnull(rolespermission,0)=0");


//                foreach (DataRow dr in dr_nopermission)
//                {
//                    dt_valid.Rows.Add(dr);
//                    //dt_all.Rows.Remove(dr);
//                }
//                DataRow[] dr_sppermission = dt_all.Select("isnull(sppermission,0)=1");
//                foreach (DataRow dr in dr_sppermission)
//                {
//                    var SpName = dt_sp.Select("spmaster_pid='" + dr["permissionsp_fid"] + "'")[0]["spname"];
//                    var sp_param = dr["spparameter"];
//                    DataTable result = Erp.ExecuteSql<DataTable>("exec " + SpName + " " + sp_param,
//                                                                      new Dictionary<string, object>()
//                                                                      {
//                                                          {
//                                                            "@ID", 1 }
//                                                                      }, out err);
//                    if (result.Rows.Count > 0)
//                    {
//                        dt_valid.Rows.Add(dr);
//                        //dt_all.Rows.Remove(dr);
//                    }
//                }
//                //getting CSV USer Roll
//                var CSVUserRoll = "";
//                if (dt_user_roll != null && dt_user_roll.Rows.Count > 0)
//                {
//                    for (var i = 0; i < dt_user_roll.Rows.Count; i++)
//                    {
//                        CSVUserRoll += "'"+ dt_user_roll.Rows[i]["child_key"] + "',";

//                    }
//                    DataRow[] dr_rollpermission = dt_all.Select("isnull(rolespermission,0)=1");
//                    foreach (DataRow dr in dr_rollpermission)
//                    {  
//                        DataRow[] dr_ = dt_configuration_roll.Select("parent_key='" + dr["configuration_pid"] + "'");
//                        foreach (DataRow _dr in dr_)
//                        {
//                            if(CSVUserRoll.Contains(_dr["child_key"].C2Str()))
//                            {
//                                dt_valid.Rows.Add(dr);
//                            }

//                        }
//                    }
//                }







                //if (dt_all != null && dt_all.Rows.Count > 0)
                //{
                //    for (var i = 0; i < dt_all.Rows.Count; i++)
                //    {

                //        string spname = dt_all.Rows[i]["spname"].C2Str();

                //        string executesp_Sql = "exec " + spname;
                //        DataTable tbl_spData = Erp.ExecuteSql<DataTable>(executesp_Sql,
                //                         new Dictionary<string, object>() {
                //            { "@ID", 1 }
                //                         }, out err);

                //        if (tbl_spData != null && tbl_spData.Rows.Count > 0)
                //        {
                //            validConfigCSV += "'" + dt_all.Rows[i]["spname"].C2Str() + "',";
                //        }

                //    }
                //}







            }
        }
//        public DataTable ValidateCFG(string tag)
//        {
//            string err = "";
//            string validConfigCSV = "";
//            DataTable dt_valid = new DataTable();
//            //dt_valid.Rows.Add("configurationtext");






//            DataSet ds = Erp.ExecuteSql<DataSet>(@"
//--[dt_all]
//select * from tbl_RS_configuration
//left join tbl_RS_spmaster on spmaster_fid=spmaster_pid where tbl_RS_configuration.company_fid=@Users.CompanyID and isnull(ispermissionsp,0)<>1 and allowimmediateprinting=1;
//--[dt_sp]
//select * from tbl_rs_spmaster where company_fid=@Users.CompanyID;
//--[dt_configuration_roll]
//select * from tbl_RS_configuration_roles_fid where company_fid=@Users.CompanyID;
//--[dt_user_roll]
//select * from tbl_sys_users_roleassignment
//where parent_key=@Users.UserID;
//",
//                                      new Dictionary<string, object>() {
//                            { "@ID", 1 }
//                                      }, out err);
//            DataTable dt_all = ds.Tables["dt_all"];
//            DataTable dt_sp = ds.Tables["dt_sp"];
//            DataTable dt_configuration_roll = ds.Tables["dt_configuration_roll"];
//            DataTable dt_user_roll = ds.Tables["dt_user_roll"];
//           dt_valid = dt_all.Clone();
//            DataRow[] dr_nopermission = Fn.IsEmpty(tag)?dt_all.Select("isnull(sppermission,0)=0 and isnull(rolespermission,0)=0"): dt_all.Select("isnull(tag,'')='"+tag+"'");


//            foreach (DataRow dr in dr_nopermission)
//            {
//                DataRow d = dt_valid.NewRow();
//                d.ItemArray = dr.ItemArray;

                
//                dt_valid.Rows.Add(d);
//                dt_all.Rows.Remove(dr);
//            }
//            DataRow[] dr_sppermission = dt_all.Select("isnull(sppermission,0)=1");
//            foreach (DataRow dr in dr_sppermission)
//            {
//                var SpName = dt_sp.Select("spmaster_pid='" + dr["permissionsp_fid"] + "'")[0]["spname"];
//                var sp_param = dr["spparameter"];
//                DataTable result = Erp.ExecuteSql<DataTable>("exec " + SpName ,
//                                                                  new Dictionary<string, object>()
//                                                                  {
//                                                          {
//                                                            "@ID", 1 }
//                                                                  }, out err);
//                if (result!=null && result.Rows.Count > 0)
//                {
//                    DataRow d = dt_valid.NewRow();
//                    d.ItemArray = dr.ItemArray;
//                    dt_valid.Rows.Add(d);
//                    dt_all.Rows.Remove(dr);
//                }
//            }
//            //getting CSV USer Roll
//            var CSVUserRoll = "";
//            if (dt_user_roll != null && dt_user_roll.Rows.Count > 0)
//            {
//                for (var i = 0; i < dt_user_roll.Rows.Count; i++)
//                {
//                    CSVUserRoll += "'" + dt_user_roll.Rows[i]["child_key"] + "',";

//                }
//                DataRow[] dr_rollpermission = dt_all.Select("isnull(rolespermission,0)=1");
//                foreach (DataRow dr in dr_rollpermission)
//                {
//                    DataRow[] dr_ = dt_configuration_roll.Select("parent_key='" + dr["configuration_pid"] + "'");
//                    foreach (DataRow _dr in dr_)
//                    {
//                        if (CSVUserRoll.Contains(_dr["child_key"].C2Str()))
//                        {
//                            DataRow d = dt_valid.NewRow();
//                            d.ItemArray = dr.ItemArray;

//                            dt_valid.Rows.Add(d);

//                        }

//                    }
//                }
//            }

//            return dt_valid;
//        }


    }
}






































