<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="CustomSettings.aspx.cs" Inherits="SensysErp.Meta.CustomSettings" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <title>Configuration</title>
    <%# QS("_rspv")!="1"?"":"<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />"%>   
    <script type="text/javascript">

        //window.title="title"
        document.documentElement.style.overflowX = "hidden"
       // document.documentElement.style.overflowY = "hidden"
        var permissionKeys = [];
        
    </script>
     <%# HelperLib.Web.WebResources.GetResource("~/fonts/font.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/json2.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Fn.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Erp.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/ui.js")%>

    <%# QS("_rspv")!="1"?"":HelperLib.Web.WebResources.GetResource("~/Css/materialize.min.css")%>   
    <%# QS("_rspv")!="1"?"": HelperLib.Web.WebResources.GetResource("~/Scripts/materialize.min.js")%>
    <style type="text/css">
        html, form, body {
            /*background-color:#FFF;
            color:#000;*/
        }
        #divSetting {
            max-width: 800px;
            /*margin: auto;*/
        }
        .lblSection {
            display: block;
            font-family: nunitolight;
            font-size: 24px !important;
            margin-top: 20px;
            vertical-align: middle;            
            padding-top: 25px;
        }

        .lbl-permissions:before {
            content: "\f132";
            font-family: fontawesome;
            font-weight: normal;
            margin-right: 10px;
            font-size: 25px;
            vertical-align: middle;
        }

        .lbl-settings:before {
            font-family: fontawesome;
            content: "\f013";
            font-weight: normal;
            margin-right: 10px;
            font-size: 25px;
            vertical-align: middle;
        }

        .lblSection:first-child {
            margin-top: 6px !important;
            border-top: none !important;
            padding-top: 0 !important;
        }

        .lblTitle {
            display: block;
            clear: both;
            font-size: 17px;
            color: #808080;
            vertical-align: middle;
            text-decoration: underline;
            text-transform: capitalize;
            margin-top: 5px;
        }
        .responsive .lblTitle {
            color: var(--label-color-light);
        }
        .lblSubTitle {
            display: block;
            clear: both;
            font-size: 14px;
            margin-left: 8px;
            color: #808080;
            vertical-align: middle;
            text-decoration: underline;
            text-transform: capitalize;
            margin-top: 5px;
        }
        .responsive .lblSubTitle {
            color: var(--label-color-light);
        }
        .lblTitle1:before {
            content: "\f105";
            font-family: FontAwesome;
            display: inline-block;
            margin-right: 3px;
            text-decoration: none;
        }

        .lblSubTitle1:before {
            content: "\f101";
            font-family: FontAwesome;
            margin-right: 3px;
            display: inline-block;
            text-decoration: none;
        }

        .pnl-item {
            padding: 10px;
            font-size: 12px;
            margin-top: 5px;
            border-bottom: solid 1px #E7E7E7 !important;
        }
        .responsive .pnl-item {
        border-bottom: solid 1px var(--border-color) !important;
        font-size:15px;
        }
            .pnl-item .lbl {
                text-transform: capitalize;
                max-width: 70%;
                display: inline-block;
                white-space: normal;
                vertical-align: top;margin-top: 12px;
            }
        .lbl-srno {
            vertical-align: middle;
            min-width: 10px;
            display: inline-block;
        }

            .lbl-srno:before {
                font-family: fontawesome;
                font-size: 8px;
                content: "\f111";
                margin-top: 6px;
                display: block;
            }

        .lbl-item {
    text-transform: capitalize;
    /*max-width: 70%;*/
    display: inline-block;
    white-space: normal;
    vertical-align: top;
        }
            .lbl-item:before {
                font-family: fontawesome;
                font-weight: 700;
                vertical-align: middle;
                font-size: 6px;
                content: "\f111";
                margin-right: 6px;
            }
        
        .Control {
        }

        .multi-param {
            margin: 5px 5px 0px 15px;
            display: block;
        }
        .simple-param,
        .simple-param1 {
            margin:0;
            margin-left: 8px;
            vertical-align: top;
            display:inline-block;
            float:right;
        }

        
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server"> 
    <script>
        $(document.documentElement).addClass("<%= QS("_rspv")!="1"?"":SensysErp.Utility.Utils.GetRespClasses()%>");
        $(document.body).addClass("pg-settings");
    </script>  
   
    <style><%= ErpModel.Globals.Users.CustomTheme%></style>
     <%= Erp.Base.Utils.Utils.GetResourcePath(ErpModel.Globals.AppManager.CurrentAppScriptResource,"../main/",true)%>
     <%= Erp.Base.Utils.Utils.GetResourcePath(ErpModel.Globals.AppManager.CurrentAppCssResource,"../main/",true)%>
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
            <div id="divSetting">
                <asp:Repeater ID="dgUserPermissions" runat="server">
                    <ItemTemplate>
                        <asp:Label ID="Label1" CssClass='<%#"lblSection default-title "+"lbl-"+HelperLib.Conversion.C.Str(Eval("sectionname")).ToLower() %>' runat="server" Visible='<%#ShowSection(Eval("sectionname")) %>' Text='<%# QS("Title")==""?HelperLib.Conversion.C.Str(Eval("sectionname")):QS("Title")%>'></asp:Label>
                        <asp:Label ID="lblName" CssClass="lblTitle" runat="server" Visible='<%#ShowGroup(Eval("listname")) %>' Text='<%# HelperLib.Conversion.C.Str(Eval("listname"))  %>'></asp:Label>
                        <asp:Label ID="Label2" CssClass="lblSubTitle" runat="server" Visible='<%#ShowSubGroup(Eval("sublistname")) %>' Text='<%# HelperLib.Conversion.C.Str(Eval("sublistname"))  %>'></asp:Label>
                        <asp:Panel ID="pnlSrno" runat="server" CssClass="pnl-item entity default-label">
                            <asp:Label ID="lblsrno" CssClass="lbl-srno entityKey" Visible="false" runat="server" Text1='<%#GetSerialNo(Eval("CategoryID")) + "." %>' ></asp:Label>
                            <asp:Label ID="lblPermissions" CssClass="lbl-item entityKey" runat="server" Text='<%# HelperLib.Conversion.C.Str(Eval("description")) %>'></asp:Label>
                            <span id='<%# "Setting"+ HelperLib.Conversion.C.Str(++cntrlInc)%>' class='<%#"Control "+(HelperLib.Conversion.C.Bool(Eval("iscomplex"))?"multi-param":"simple-param") %>' perid='<%# Eval("Permission_Pid").ToString().ToLower() %>' listname='<%# HelperLib.Conversion.C.Str(Eval("listname")) %>'>
                                <asp:Literal ID="ltlPermissions" runat="server" Mode="PassThrough" Text='<%# LoadCustomSettings(Eval("PermissionCategory"), Eval("ui"), Eval("info"), Eval("isComplex"), Eval("Permission_Pid"), Eval("permissionvalue")) %>'></asp:Literal>
                            </span>
                        </asp:Panel>
                    </ItemTemplate>
                </asp:Repeater>
                
                <div class="cmdPanel" id="cmdPanel" runat="server" style="margin-bottom:30px;margin-top:30px;display:none">
            <a  class="cmdBtn cmdSave"  href="javascript:void(0)" onclick="Erp.SaveData(false)">Save</a>
<span id="btnSave"   class="dgBtn  waves-effect waves-light btn erp-control erp-Button" onclick="Erp.SaveData(false)"><i class="fa left"></i><span>Save</span></span>
                  </div>
            </div>
            
            <div class="filter" id="divFilter" style="padding: 5px 5px 5px 5px; display: none; top: 100px !important">
                <div style="padding-left: 5px; height: 450px; width: 710px; background-color: #EAEBD6">
                    <iframe id="IfrmFilter" style="padding-left: 5px; padding-top: 5px; height: 98%; width: 98%" runat="server"></iframe>
                </div>
            </div>
            <span id="test"></span>
            <asp:HiddenField ID="hdnFilter" runat="server" />
            <br /><br /><br /><br />
        </ContentTemplate>
    </asp:UpdatePanel>
    <style>
        .responsive #divSetting {
            background: var(--bg-color);
    box-shadow: var(--shadow1);
    padding: 25px;
        }
        .cmdPanel .cmdSave{
            display:inline-block;
        }
        .cmdPanel #btnSave{
            display:none;
        }

        .responsive .cmdPanel #btnSave{
            display:inline-block;
        }
        .responsive .cmdPanel .cmdSave{
            display:none;
        }

        .entity
        {
            max-width:none;
            text-indent:0;
            display:block;
        }
        .entity .entityKey
        {
            float:none;
            text-indent:0;
            margin:0;
            padding:0;
        }
            .entity select,.entity input[type="text"]
            {
                padding:5px;               
                border:solid 1px #d6d6d6;
                width:250px;
            }
        .select-wrapper .del {
            top:0;
        }

        .responsive .select-wrapper {
            width:250px;
        }


        .entityValue .chosen-container-multi {
            border: solid 1px #d6d6d6;
            padding:5px;               
        }
        .responsive .entityValue .chosen-container-multi {
            border: solid 1px var(--border-color);
        }
        .entityValue.ui-list {
            width: 250px;
            border: solid 1px #d6d6d6;
        }
        .responsive .pnl-item input[type=text]:not(.browser-default) {
            margin-top:0;
        }
        .entity input.ui-date {
            width: 72px;
        }

        .entity input.ui-number {
            width: 72px;
        }

        .ui-datepicker-trigger {
            vertical-align: middle;
        }
    </style>



    <script type="text/javascript">
        Erp.Touch = $(document.documentElement).hasClass("touch");
        Erp.Responsive=<%=HelperLib.Conversion.C.Bool(QS("_rspv")).ToString().ToLower()%>
        if(Erp.Responsive)
            $(document.body).addClass("responsive")
        var dgPer = $("#divSetting");

     

        $(function () {
            //changeTheme("Grey")
            $("#<%=cmdPanel.ClientID%>").setDisplay($.QS("hideCmd") != "1");
            if ($.QS("noPad") == "1")
                $("#divOuterMain").css("padding", 0);
            Erp.Init();
            Erp.BeginLoadData();
        });

        function InitUI() {
            LoadCustSettings();
            if(!Erp.Responsive){
                $(".simple-param,.val").find("input[type=checkbox]").CheckBoxX();
                $("input[data-autocomplete]").each(
                                            function () {
                                                var arr = eval($(this).data("autocomplete"));
                                                $(this).attr("autocomplete","off");
                                                $(this).autocomplete({
                                                    source: arr,
                                                    minLength: 0
                                                }).on("click", function () { $(this).autocomplete("search", ""); });
                                            });
            }
            else{
                $(".simple-param,.val").find("select").formSelect();       
                $("input[data-autocomplete]").each(
                                           function () {
                                               $(this).NewID("ui_id_")
                                               var arr = eval($(this).data("autocomplete"));
                                               $(this).attr("autocomplete","off");
                                               $(this).wrap("<div class='input-field'></div>")
                                               $(this).autocomplete({
                                                   data: arr ,showAllItems:true                                                
                                               })
                                           });
            }
        }
        



        function LoadCustSettings() {
            for (var i = 0; i < permissionKeys.length; i++) {

                var current_permission = dgPer.find("[perid=" + permissionKeys[i].PermissionID + "]");
                var ke = permissionKeys[i].Key;
                var type = permissionKeys[i].Type.toLowerCase();
                var result = permissionKeys[i].Result;
                var fld = "";
                var perCtl = current_permission.find("[key=" + ke + "]");
                perCtl.NewID("ui_id_");
                if (type == "filter") {
                    $(perCtl).attr('onclick', "return ShowFilter('" + ke + "')");
                    var hidd = $('<input type="hidden" />');
                    $(perCtl).after(hidd);
                    hidd.val(result);
                }
                else if (type == "dbfield") {

                }
                else if (type == "list") {
                    perCtl.attr("fieldtype", "SINGLESELECT");
                    perCtl.attr("eid", permissionKeys[i].Entity);
                    perCtl.attr("fc", permissionKeys[i].Fc);
                    if (!permissionKeys[i].NotSet)
                        perCtl.val("");
                    fld= Erp.CreateField(perCtl);
                    if (Erp.Responsive){
                        fld.GetElement().parent().attr("class","select-wrapper ui-list")
                        fld.GetElement().before('<span class="caret">▼</span>')
                        fld.GetElement().next().remove();
                        fld.GetElement().after('<a title="Clear" href="javascript:void(0)" style="display:none" onclick="__clearSelect(this,event,\'Ddl\')" class="del">×</a>')
                    }

                } else if (type == "multiselect") {
                    perCtl.attr("fieldtype", "MULTISELECT");
                    perCtl.attr("eid", permissionKeys[i].Entity);
                    perCtl.attr("fc", permissionKeys[i].Fc);
                    if (!permissionKeys[i].NotSet)
                        perCtl.val("");
                    fld = Erp.CreateField(perCtl);
                }
                else if (type == "date") {
                    if (Erp.Responsive)
                        perCtl.addClass("ui-date").materialDatepicker({reuse:0,container:'body',yearRange:25,format: "<%= SensysErp.Utility.Utils.MomentDateFormat(ErpModel.Globals.Users.Culture.ShortDateFormat) %>"});
                    else
                        $(perCtl).addClass("ui-date").datepicker({ showOn: "button", buttonImage: "../images/date.png", buttonImageOnly: true, dateFormat: "<%= SensysErp.Utility.Utils.JqDateFormat(ErpModel.Globals.Users.Culture.ShortDateFormat) %>", scrollbar: true, dropdown: false });
                }
                else if (type == "number" && $(perCtl).prop("tagName") == "INPUT") {
                    perCtl.autoNumeric('init', { vMin: '-999999999.99', mDec: 0, aSep: '' }).addClass("ui-number");
                }
                else if (type == "decimal" && $(perCtl).prop("tagName") == "INPUT") {
                    perCtl.autoNumeric('init', { vMin: '-999999999.99', mDec: 2, aSep: '' }).addClass("ui-number");
                }
                else if (type == "bool") {
                    if($(perCtl).parent().hasClass("val")){
                        if($(perCtl).closest(".multi-param").find("input").length==1)
                            $(perCtl).closest(".multi-param").addClass("simple-param");
                        else if($(perCtl).parent().prev().hasClass("lbl"))
                            $(perCtl).parent().css({"float":"right","margin-top":"8px"})
                    }
                    if (Erp.Responsive && ($(perCtl).parent().hasClass("val") || $(perCtl).parent().hasClass("simple-param"))) {
                        var ctr = $("<div id='" + $(perCtl).ID() + "-Ctr' class='erp-Field switch entity entity-field erp-control erp-Checkbox '><label><span class='lever'></span></label></div>");
                        perCtl.after(ctr);
                        ctr.find(".lever").before($(perCtl))
                    }
                }
               
              
                if (permissionKeys[i].NotSet) {
                }
                else {
                    if (type == "bool") {                      
                        $(perCtl).checked(result);
                    }
                    else if (type == "list") {
                        fld.Set(result);
                    }
                    else if (type == "multiselect") {
                        if (result != "") {
                            var ar = result.split(',');
                            var args = [];
                            $(ar).each(function () { args.push({ Id: fld.GetElement().ID(), RecordID: this, EntityID: permissionKeys[i].Entity }); })                          
                            Erp.GetRecordTitleMulti(args, function (r) {
                                if (!r || r.length <= 0)
                                    return;
                                var m = $("#" + r[0].Id).multiSelect();
                                for (var i = 0; i < r.length; i++)
                                    m.addItem({ Text: r[i].Text, RecordID: r[i].RecordID, EntityID: r[i].EntityID });
                            })
                        }
                        
                    }
                    else if (type != "filter" && type != "dbfield") {
                        $(perCtl).val(result);
                    }
                }
    }

   

}

var filtekey = "";

function ShowFilter(key) {
    filtekey = key;
    var data = new Object();
    data["PageType"] = $.QS("PageType");
    data["EID"] = "tbl_employee";   //$.QS("EID")
    data["SID"] = sid;
    data["xml"] = $("[Key=" + filtekey + "]").next().val();
    PageMethods.SetFilterSession(data);
    var url = "../Meta/Layout_Grid.aspx?PageMode=Settings&SID=" + sid;
    $('#<%= IfrmFilter.ClientID %>').attr('src', url);
    $("#divFilter").ShowModal();
    return false;
}

function saveFilterXml(filterXml) {
    hidePopUp();
    $("[Key=" + filtekey + "]").next().val(filterXml);
}

function hidePopUp() {
    $("#divFilter").HideModal();
    return false;
}
Erp.GetFieldValue = function (f) {
    var fld = $("#" + f);
    if ($.defaultVal(fld.attr("type"), "").toLowerCase() == "checkbox")
        return fld.checked();
    else if(fld.hasClass("ui-number"))
        return fld.autoNumeric('get');
    else if (fld.hasClass("ui-date")){
        var m = {};
        if (Erp.Responsive) {
            if ($.isEmpty(fld.val()))
                return null;
            var d = fld.materialDatepicker("getDate");
            m = (!d ? null : moment(d));
        }
        else {
            var d = fld.datepicker("getDate");
            m = (!d ? null : moment(d));
        }
        return m ? m.format("YYYY-MM-DD") : null;
      
    }
    else if (fld.parent().hasClass("ui-list"))
        return $.defaultVal(fld.data("RecordID"), "");
    else if (fld.hasClass("chosen-container-multi")) {
        var arr = [];
        fld.multiSelect().getItems().each(function () { arr.push($(this).data("RecordID")); });
        return arr.join();
    }
    else
        return fld.val();
}
Erp.SetFieldValue = function (f, v) {
    var fld = $("#" + f);
    if ($.defaultVal(fld.attr("type"), "").toLowerCase() == "checkbox")
        fld.checked(v);
    else if (fld.hasClass("ui-number"))
        return fld.autoNumeric('set', !v || isNaN(v) ? "" : v);
    else if (fld.hasClass("ui-date")){
        v = v && typeof v == "string" ? moment(v, "YYYY-MM-DD hh:mm A").toDate() : v;
        if (Erp.Responsive)
            fld.materialDatepicker('setInputDate', v);
        else
            fld.datepicker("setDate", v);
    
    }
    else
        return fld.val(v);
    
}
Erp.SaveData = function () {   
    var refs = [];
    for (var i = 0; i < Erp.OnSave.EventList.length; i++) {
        if (typeof Erp.OnSave.EventList[i] == "function")
            refs = $.union(refs, hasDbReferences(Erp.OnSave.EventList[i], "Save"));
    }
    if (refs.length > 0) {
        evaluateDbReferences(refs, Erp._SaveData);
    }
    else
        Erp._SaveData();
}

Erp._SaveData = function() {
    for (var i = 0; i < Erp.OnSave.EventList.length; i++) {
        if (typeof Erp.OnSave.EventList[i] == "function")
            if (Erp.OnSave.EventList[i]() == false)
                return;
    }
    var userdata = {};
    for (var i = 0; i < permissionKeys.length; i++) {
        var current_permission = dgPer.find("[perid=" + permissionKeys[i].PermissionID + "]");
        var ke = permissionKeys[i].Key.toLowerCase();
        var type = permissionKeys[i].Type.toLowerCase();
        var permID = permissionKeys[i].PermissionID;

        var ctl = current_permission.find("[key=" + ke + "]");

        if (type == "bool")
            userdata[permID] = $.defaultVal(userdata[permID], "") + "<" + ke + ">" + ctl.checked() + "</" + ke + ">";
        else if (type == "filter")
            userdata[permID] = $.defaultVal(userdata[permID], "") + "<" + ke + ">" + ctl.next().val() + "</" + ke + ">";
        else {
            var data = "";
            if (type == "numeric" && ctl.prop("tagName")=="INPUT")
                data = ctl.autoNumeric('get');
            else if (type == "date") {               
                data =  Erp.GetFieldValue(ctl.attr("id"));
            }
            else if (type == "list" || type == "multiselect") {
                data = Erp.GetFieldValue(ctl.attr("id"));

            }
            else
                data = ctl.val();

            userdata[permID] = $.defaultVal(userdata[permID], "") + "<" + ke + ">" + data + "</" + ke + ">";
        }
    }

    var data = new Object();
    data["Type"] = "SaveUserRights";
    data["@Id"] = $.QS("id");
    data["@Category"] = $.QS("cat");
    data["Recommended"] = $.defaultVal($.QS("_r"), "0");
    if ($.QS("hideCmd") != "1")
        $.Notify("Saving...");
    PageMethods.SaveUserRights(data, userdata, PageMethodSuccess, PageMethodError);
    return false;
}
function PageMethodSuccess(result) {

    _delayFunctionListExec(Erp.OnSaveSuccess.EventList, "OnSaveSuccess",
                        function () {
                            $.Notify(false);
                        });
}
function PageMethodError(data) {
    $.Notify(false);
    for (var i = 0; i < Erp.OnSaveError.EventList.length; i++) {
        if (typeof Erp.OnSaveError.EventList[i] == "function")
            _delayFunctionExec(Erp.OnSaveError.EventList[i], "OnSaveError");
    }
}



    </script>

</asp:Content>


