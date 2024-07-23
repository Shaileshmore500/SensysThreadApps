using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Erp.Base.Security;
using SensysErp;
namespace App_Qm
{
     [ACL(RequiredApps="App_Qm",
        AuthenticateRequest=false,
        AccessPermissions= Permission.None)]
    public partial class Default1 : BasePage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Response.Write(ErpModel.Globals.AppManager.ApplicationPath);
        }
    }
}