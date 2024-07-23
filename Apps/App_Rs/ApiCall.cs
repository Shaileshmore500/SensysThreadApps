
using App_Rs.Apps.App_Rs;
using System;
using System.Collections.Generic;

using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace App_Rs.Apps.App_RS
{
    public class ReportApiController : ApiController
    {
        [HttpGet]
        public  Dictionary<string, object> getReportsByte(string configID, string param)
        
        {

            Dictionary<string, object> dic_param = new Dictionary<string, object>();

            try
            {
                
                if (!Fn.IsEmpty(param) && param != "null")
                {
                    List<Dictionary<string, object>> paramlist = JsonConvert.DeserializeObject<List<Dictionary<string, object>>>(param);

                    foreach (Dictionary<string, object> dic in paramlist)
                    {
                        foreach (var str in dic)
                        {
                            dic_param.Add(str.Key.ToString(), str.Value);
                        }

                    }
                }
            }
            catch (Exception e)
            {
                return new Dictionary<string, object> { { "Error", $"Please check Param...{e.Message }" } };
            }

            //[{"@id":"123"},{"param":"123"},{"ids":"123"}]
            HelperLib.DAL.IDBConfiguration cfg = null;
                Erp.Common.ApplicationInfo app = null;
                if (!Erp.Base.Security.Util.AuthenticateRequest(out app, out cfg))
                    return null;
                GenerateReport generateReport = new GenerateReport();
                dic_param.Add("@CompanyID", app.CompanyID.ToString());
                dic_param.Add("@UserID", app.CurrentUserID.ToString());

                generateReport.Init(app, cfg);
           
            Dictionary<string, byte[]> dic_byte = generateReport.GenerateReportBytes(configID, dic_param);

            Dictionary<string, object> keyValuePairs = new Dictionary<string, object>();
            if(dic_byte!=null && dic_byte.Count>0)
            {
                foreach(var obj in dic_byte)
                {
                    keyValuePairs.Add(obj.Key, obj.Value as object);

                }
            }
            else
            {
                JObject jObject = JObject.Parse(generateReport.ErrorList.ToString());
                string error = "";
                foreach(var obj in jObject)
                {
                    //error+=$"{obj["Error"]},";

                }


                keyValuePairs.Add("Error", error.TrimEnd(',') as object);
            }


            return keyValuePairs;
        }
    }
}