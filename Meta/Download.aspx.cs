using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Erp.Base.Web;
using HelperLib;
using HelperLib.Conversion;

namespace SensysErp.Meta
{
    public partial class Download : BasePageDefault
    {
        private void Page_Load(object sender, System.EventArgs e)
        {
            // Put user code to initialize the page here
            Response.CacheControl = "no-cache";
           

            if (!C.IsBlank(Request.QueryString["fn"]))
            {
                string[] decr = Erp.Base.Security.Util.DecryptUrl(Request.QueryString["fn"]).Split('|');
                if (decr.Length > 3 && decr[3].Length > 0)
                    lblMessage.Text = decr[3];
            }
        }

        protected void Button1_Click(object sender, System.EventArgs e)
        {
            if (C.IsBlank(Request.QueryString["fn"]) && Request.QueryString["IsFile"] == "0")
            {
                string str = HelperLib.Store.DataStore.Local[Request.QueryString["FileName"]].ToString();
                Response.ClearContent();
                Response.ClearHeaders();
                Response.ContentType = "html/text";
                Response.AddHeader("content-disposition", "attachment;filename=" + Request.QueryString["FileName"]);
                Response.Write(str);
                Response.Flush();
                Response.Close();
                //Session.Remove(Request.QueryString["FileName"]);
            }
            else
            {

                string file = C.Str(Request.QueryString["FileName"]);
lblMessage.Text=file ;//"1,";
                string filename = C.IsBlank(file) ? "" : Path.GetFileName(file);
                if (!C.IsBlank(Request.QueryString["disp"]))
                    filename = Request.QueryString["disp"];

                string ct = C.Str(Request.QueryString["ct"]);
                bool deleteFile = false; bool transmit = false;
                if (!C.IsBlank(Request.QueryString["fn"]))
                {
                    string[] decr = Erp.Base.Security.Util.DecryptUrl(Request.QueryString["fn"]).Split('|');
                    file = decr[0];
                    if (decr.Length > 1)
                        filename = decr[1];
                    if (decr.Length > 2 && decr[2].Length > 0)
                        ct = decr[2];
                    if (decr.Length > 4)
                        deleteFile = C.Bool(decr[4]);
                    if (decr.Length > 5)
                        transmit = C.Bool(decr[5]);
                }
lblMessage.Text="file:"+file ;//"1,";
lblMessage.Text+="1,";
                if (C.IsBlank(file))
                    return;

                if (File.Exists(file))
                {
lblMessage.Text+="2,";
                    Response.ClearContent();
                    Response.ClearHeaders();
                    if (!C.IsBlank(ct))
                        Response.ContentType = ct;
                    Response.ContentType = "application/txt";
                    Response.AddHeader("content-disposition", "attachment;filename=" + filename);
lblMessage.Text+="3,";
                    if (deleteFile)
                    {
lblMessage.Text+="4,";
                        Response.WriteFile(file);
                        Response.Flush();
                        Response.End();
                        System.IO.File.Delete(file);
                    }
                    else
                    {
lblMessage.Text+="5,";
                        if (transmit)
                            Response.TransmitFile(file);
                        else
                            Response.WriteFile(file);
                        Response.Flush();
                        Response.End();
lblMessage.Text+="6,";
                    }
                }
lblMessage.Text+="7";
            }
        }

        #region Web Form Designer generated code
        override protected void OnInit(EventArgs e)
        {
            //
            // CODEGEN: This call is required by the ASP.NET Web Form Designer.
            //
            InitializeComponent();
            base.OnInit(e);
        }

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.Button1.Click += new System.EventHandler(this.Button1_Click);
            this.Load += new System.EventHandler(this.Page_Load);
        }
        #endregion
    }
}