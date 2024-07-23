using Erp.Base.ScriptInterface;
using Erp.Common;
using HelperLib.DAL;
using HelperLib.Extensions;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Xml;
using Erp.Base.Utils;


namespace App_Ap.Apps.App_Ap
{
    public class wfprocess
    {
        ApplicationInfo _app; IDBConfiguration _cfg;


        public wfprocess(ApplicationInfo app, IDBConfiguration cfg)
        {
            _app = app; _cfg = cfg;
            
        }

        public string wfprocessrecord(string entid, string recid, string userid, string action)
        {
            var ErpNew = new Erp.Base.ScriptInterface.ErpScriptObject();
            //Erp.Base.ScriptInterface.ErpScriptObject _erp = new Erp.Base.ScriptInterface.ErpScriptObject(app, cfg);
            string err = "";
            string sql = @"declare
	@entityid NvarChar(50),
	@_recordid NvarChar(50);
set @entityid='" + entid + @"'
set	@_recordid='" + recid + @"'
declare @wfprocessmovement_pid nvarchar(500),
@receiver_id nvarchar(500),
@sender_id nvarchar(500),
@action nvarchar(50),
@level int,
@company int,
@wfprocessinstances_pid nvarchar(500),
@actiontaken nvarchar(500),
@wfprocessrecievers_pid nvarchar(500),
@remark nvarchar(500);
set @wfprocessmovement_pid=newid()
set @wfprocessinstances_pid=newid();
set @wfprocessrecievers_pid=newid();
set @receiver_id='" + userid + @"'
set @sender_id='" + userid + @"'
set @actiontaken='success'
set @action='" + action + @"'
set @level=0
set @company='"+ _app.CompanyID + @"';
set @remark='Success'

insert into tbl_AP_wfprocessinstances(company_fid,wfprocessinstances_pid,_recordid,entityid,processfid)values
(@company,@wfprocessinstances_pid,@_recordid,@entityid,(select top 1 wfprocess_pid from tbl_AP_wfprocess));

insert into tbl_AP_wfprocessmovement(company_fid,wfprocessmovement_pid,processinstancesfid,action,level,date,senderid)
values(@company,@wfprocessmovement_pid,(select top 1 wfprocessinstances_pid from tbl_AP_wfprocessinstances where _recordid=@_recordid),@action,0,GETDATE(),@sender_id);
update tbl_AP_wfprocessinstances set currentmovementfid=
(select wfprocessmovement_pid from tbl_AP_wfprocessmovement 
where processinstancesfid= (select top 1 wfprocessinstances_pid from tbl_AP_wfprocessinstances where _recordid=@_recordid))
insert into tbl_AP_wfprocessrecievers (company_fid,wfprocessrecievers_pid,receiverid,processmovementfid,processinstancesfid,actiontaken,actiondate,action,remarks)
values(@company,@wfprocessrecievers_pid,@receiver_id,@wfprocessmovement_pid,@wfprocessinstances_pid,@actiontaken,GETDATE(),@action,@remark)

";
            string result = ErpNew.ExecuteSql<string>(sql,
                                      new Dictionary<string, object>() {
                            { "@ID", 1 }
                                      }, out err);







            return "";
        }

    }
}
