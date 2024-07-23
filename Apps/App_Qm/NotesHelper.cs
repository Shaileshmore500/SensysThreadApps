using Erp.Base.ScriptInterface;
using Erp.Common;
using HelperLib.DAL;
using HelperLib.Extensions;
using System;
using System.Collections.Generic;
using System.Data;

namespace App_Qm.Apps.App_Qm
{
	public class NotesHelper
	{
		private IDBConfiguration cfg = null;

		private ApplicationInfo app = null;

		private ErpScriptObject erp = null;

		public NotesHelper(ApplicationInfo _app, IDBConfiguration _cfg, ErpScriptObject _erp)
		{
			this.app = _app;
			this.cfg = _cfg;
			this.erp = _erp;
		}

		public bool addNotes(Dictionary<string, object> args)
		{
			bool result2;
			try
			{
				string notes = args.Get("note").C2Str();
				string relatedtoentity = args.Get("EID").ToString();
				object recordid = args.Get("ID");
				byte[] Attachments = (byte[])args.Get("attachments");
				object Attachments_preview = args.Get("attachments_preview");
				string sql = "insert into tbl_core_notes( Notes_pid,company_fid, Notes, RelatedTo_entity, record_id,createdBy_User_Fid,createdDate,Attachments,Attachments_preview)\r\n                    values(newid(),@companyfid,@notes,@relatedtoentity,@recordid,@createdBy_User_Fid,getdate(),@Attachments,@Attachments_preview)";
				bool flag = Attachments == null;
				if (flag)
				{
					sql = "insert into tbl_core_notes( Notes_pid,company_fid, Notes, RelatedTo_entity, record_id,createdBy_User_Fid,createdDate)\r\n                    values(newid(),@companyfid,@notes,@relatedtoentity,@recordid,@createdBy_User_Fid,getdate())";
				}
				string err = "";
				string result = this.erp.ExecuteSql<string>(sql, new Dictionary<string, object>
				{
					{
						"@companyfid",
						this.app.CompanyID
					},
					{
						"@notes",
						notes
					},
					{
						"@relatedtoentity",
						relatedtoentity
					},
					{
						"@recordid",
						recordid
					},
					{
						"@createdBy_User_Fid",
						this.app.CurrentUserID
					},
					{
						"@Attachments",
						Attachments
					},
					{
						"@Attachments_preview",
						Attachments_preview
					}
				}, out err);
				bool flag2 = !err.IsBlank();
				if (flag2)
				{
					result2 = false;
					return result2;
				}
			}
			catch (Exception Ex_113)
			{
				result2 = false;
				return result2;
			}
			result2 = true;
			return result2;
		}

		public DataTable getNotes(Dictionary<string, object> args)
		{
			DataTable result;
			try
			{
				string relatedtoentity = args.Get("EID").ToString();
				object recordid = args.Get("ID");
				string sql = "select Notes_pid,Notes, convert(varchar,tbl_core_notes.createdDate,3) as createdDate,username from tbl_core_notes \r\nleft join tbl_sys_users on Users_Pid=tbl_core_notes.createdBy_User_Fid\r\n                        where record_id = @recordid and RelatedTo_entity = @relatedtoentity and tbl_core_notes.company_fid=@companyfid ";
				string err = "";
				DataTable dt = this.erp.ExecuteSql<DataTable>(sql, new Dictionary<string, object>
				{
					{
						"@companyfid",
						this.app.CompanyID
					},
					{
						"@relatedtoentity",
						relatedtoentity
					},
					{
						"@recordid",
						recordid
					},
					{
						"@createdBy_User_Fid",
						this.app.CurrentUserID
					}
				}, out err);
				bool flag = !err.IsBlank();
				if (flag)
				{
					result = null;
				}
				else
				{
					result = dt;
				}
			}
			catch (Exception e_A7)
			{
				result = null;
			}
			return result;
		}

		public bool editNotes(Dictionary<string, object> args)
		{
			bool result2;
			try
			{
				string relatedtoentity = args.Get("EID").ToString();
				object recordid = args.Get("ID");
				object note_pid = args.Get("note_pid");
				string notes = args.Get("note").C2Str();
				object Attachments = args.Get("attachments");
				object Attachments_preview = args.Get("attachments_preview");
				string err = "";
				string result = this.erp.ExecuteSql<string>("", new Dictionary<string, object>
				{
					{
						"@companyfid",
						this.app.CompanyID
					},
					{
						"@relatedtoentity",
						relatedtoentity
					},
					{
						"@recordid",
						recordid
					},
					{
						"@createdBy_User_Fid",
						this.app.CurrentUserID
					},
					{
						"@note_pid",
						note_pid
					},
					{
						"@Attachments",
						Attachments
					},
					{
						"@Attachments_preview",
						Attachments_preview
					},
					{
						"@notes",
						notes
					}
				}, out err);
				bool flag = !err.IsBlank();
				if (flag)
				{
					result2 = false;
				}
				else
				{
					result2 = true;
				}
			}
			catch (Exception ex_11A)
			{
				result2 = false;
			}
			return result2;
		}

		public bool deleteAttchment(Dictionary<string, object> args)
		{
			bool result2;
			try
			{
				string relatedtoentity = args.Get("EID").ToString();
				object recordid = args.Get("ID");
				object note_pid = args.Get("note_pid");
				object Attachments = args.Get("attachments");
				object Attachments_preview = args.Get("attachments_preview");
				string err = "";
				string result = this.erp.ExecuteSql<string>("", new Dictionary<string, object>
				{
					{
						"@companyfid",
						this.app.CompanyID
					},
					{
						"@relatedtoentity",
						relatedtoentity
					},
					{
						"@recordid",
						recordid
					},
					{
						"@createdBy_User_Fid",
						this.app.CurrentUserID
					},
					{
						"@note_pid",
						note_pid
					},
					{
						"@Attachments",
						Attachments
					},
					{
						"@Attachments_preview",
						Attachments_preview
					}
				}, out err);
				bool flag = !err.IsBlank();
				if (flag)
				{
					result2 = false;
				}
				else
				{
					result2 = true;
				}
			}
			catch (Exception ex_FA)
			{
				result2 = false;
			}
			return result2;
		}

		public bool deleteNotes(Dictionary<string, object> args)
		{
			bool result2;
			try
			{
				string relatedtoentity = args.Get("EID").ToString();
				object recordid = args.Get("ID");
				object note_pid = args.Get("note_pid");
				string err = "";
				string sql = "\r\ndeclare @iseditable nvarchar(max);\r\nset @iseditable=(select notes_pid from tbl_core_notes where createdBy_User_Fid=@createdBy_User_Fid and RelatedTo_entity=@relatedtoentity \r\nand record_id=@recordid and Notes_pid=@note_pid and company_fid=@companyfid)\r\nif(@iseditable is not null)\r\nbegin\r\ndelete from tbl_core_notes where Notes_pid=@note_pid\r\nend\r\nelse \r\nbegin\r\nselect'no previllage'\r\nend";
				string result = this.erp.ExecuteSql<string>(sql, new Dictionary<string, object>
				{
					{
						"@companyfid",
						this.app.CompanyID
					},
					{
						"@relatedtoentity",
						relatedtoentity
					},
					{
						"@recordid",
						recordid
					},
					{
						"@createdBy_User_Fid",
						this.app.CurrentUserID
					},
					{
						"@note_pid",
						note_pid
					}
				}, out err);
				bool flag = !err.IsBlank();
				if (flag)
				{
					result2 = false;
				}
				else
				{
					bool flag2 = result == "no previllage";
					if (flag2)
					{
						result2 = false;
					}
					else
					{
						result2 = true;
					}
				}
			}
			catch (Exception ex_D8)
			{
				result2 = false;
			}
			return result2;
		}
	}
}
