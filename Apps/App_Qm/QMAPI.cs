using App_Qm.Apps.App_Qm;
using Erp.Common;
using ErpModel.Globals;
using HelperLib.Conversion;
using HelperLib.DAL;
using HelperLib.Extensions;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Net;
using System.Net.Http;

using System.Text;
using System.Web;
using System.Web.Http;

namespace RestGetLeadAPIDemo
{

    public class QMController : ApiController
    {
        [HttpPost]
        public IHttpActionResult addNote()
        {
            Dictionary<string, object> args = new Dictionary<string, object>();
            
            HelperLib.DAL.IDBConfiguration cfg = null;
            Erp.Common.ApplicationInfo app = null;

            if (!Erp.Base.Security.Util.AuthenticateRequest(out app, out cfg))
                return Unauthorized();
            Erp.Base.ScriptInterface.ErpScriptObject _erp = new Erp.Base.ScriptInterface.ErpScriptObject(app, cfg);
            byte[] bytearray = null;
            var filename = "";
            if (HttpContext.Current.Request.Files.Count > 0)
            {
                HttpPostedFile file = HttpContext.Current.Request.Files[0];

                 filename = Path.GetFileName(file.FileName);
                //var filepath = Path.Combine(HttpContext.Current.Server.MapPath("~/Apps/App_Qm"),filename);
                //file.SaveAs(filepath);
                if(file!=null && file.ContentLength>0)
                {
                    using (Stream inputStream=file.InputStream)
                    { 
                        using(MemoryStream ms=new MemoryStream())
                        {
                            inputStream.CopyTo(ms);
                             bytearray = ms.ToArray();
                        }
                    
                    }
                }
            
            }
            //var note = HttpContext.Current.Request["note"];
            //var EID = HttpContext.Current.Request["EID"];
            //var ID = HttpContext.Current.Request["ID"];

            args.Add("note", HttpContext.Current.Request["note"]);
            args.Add("EID", HttpContext.Current.Request["EID"]);
            args.Add("ID", HttpContext.Current.Request["ID"]);
            args.Add("attachments", bytearray);
            args.Add("attachments_preview", filename);

            //HttpPostedFileBase file = Request.Files[0];

            NotesHelper notesHelper = new NotesHelper(app, cfg, _erp);
            bool status = notesHelper.addNotes(args);

            if (status)
            {
                return Ok(notesHelper.getNotes(args));
            }
            else
                return BadRequest();
        }
        [HttpPost]
        public IHttpActionResult editNote()
        {
            Dictionary<string, object> args = new Dictionary<string, object>();
            ApplicationInfo app = null; IDBConfiguration cfg = null;
            if (!Erp.Base.Security.Util.AuthenticateRequest(out app, out cfg))
                return Unauthorized();            
            Erp.Base.ScriptInterface.ErpScriptObject _erp = new Erp.Base.ScriptInterface.ErpScriptObject(app, cfg);

            byte[] bytearray = null;
            var filename = "";
            if (HttpContext.Current.Request.Files.Count > 0)
            {
                HttpPostedFile file = HttpContext.Current.Request.Files[0];

                filename = Path.GetFileName(file.FileName);
                //var filepath = Path.Combine(HttpContext.Current.Server.MapPath("~/Apps/App_Qm"),filename);
                //file.SaveAs(filepath);
                if (file != null && file.ContentLength > 0)
                {
                    using (Stream inputStream = file.InputStream)
                    {
                        using (MemoryStream ms = new MemoryStream())
                        {
                            inputStream.CopyTo(ms);
                            bytearray = ms.ToArray();
                        }

                    }
                }

            }


            args.Add("note", HttpContext.Current.Request["note"]);
            args.Add("EID", HttpContext.Current.Request["EID"]);
            args.Add("ID", HttpContext.Current.Request["ID"]);
            args.Add("note_pid", HttpContext.Current.Request["note_pid"]);
            args.Add("attachments", bytearray);
            args.Add("attachments_preview", filename);
            NotesHelper notesHelper = new NotesHelper(app, cfg, _erp);
            bool status = notesHelper.editNotes(args);
            if (status)
            {
                return Ok(notesHelper.getNotes(args));
            }
            else
                return BadRequest();
        }
        [HttpPost]
        public IHttpActionResult showNotes(Dictionary<string, object> args)
        {
            ApplicationInfo app = null; IDBConfiguration cfg = null;
            if (!Erp.Base.Security.Util.AuthenticateRequest(out app, out cfg))
                return Unauthorized();
            Erp.Base.ScriptInterface.ErpScriptObject _erp = new Erp.Base.ScriptInterface.ErpScriptObject(app, cfg);
            NotesHelper notesHelper = new NotesHelper(app, cfg, _erp);
            args.Add("EID", HttpContext.Current.Request["EID"]);
            args.Add("ID", HttpContext.Current.Request["ID"]);
            return Ok(notesHelper.getNotes(args));
        }
        [HttpDelete]
        public IHttpActionResult deleteNotes(Dictionary<string, object> args)
        {
//            Dictionary<string, object> args = new Dictionary<string, object>();

            HelperLib.DAL.IDBConfiguration cfg = null;
            Erp.Common.ApplicationInfo app = null;

            if (!Erp.Base.Security.Util.AuthenticateRequest(out app, out cfg))
                return Unauthorized();
            Erp.Base.ScriptInterface.ErpScriptObject _erp = new Erp.Base.ScriptInterface.ErpScriptObject(app, cfg);
            args.Add("note_pid", HttpContext.Current.Request["note_pid"]);
            NotesHelper notesHelper = new NotesHelper(app, cfg, _erp);
            args.Add("EID", HttpContext.Current.Request["EID"]);
            args.Add("ID", HttpContext.Current.Request["ID"]);
            bool status = notesHelper.deleteNotes(args);
            if (status)
            {
                return Ok(notesHelper.getNotes(args));
            }
            else
                return BadRequest();
        }
        [HttpPost]
        public IHttpActionResult deleteAttachment(Dictionary<string, object> args)
        {
            HelperLib.DAL.IDBConfiguration cfg = null;
            Erp.Common.ApplicationInfo app = null;

            if (!Erp.Base.Security.Util.AuthenticateRequest(out app, out cfg))
                return Unauthorized();
            Erp.Base.ScriptInterface.ErpScriptObject _erp = new Erp.Base.ScriptInterface.ErpScriptObject(app, cfg);

            NotesHelper notesHelper = new NotesHelper(app, cfg, _erp);
            bool status = notesHelper.deleteAttchment(args);
            if (status)
            {
                return Ok(notesHelper.getNotes(args));
            }
            else
                return BadRequest();
        }

    
    }
}