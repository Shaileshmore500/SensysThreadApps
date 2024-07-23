﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Report_Viewer.aspx.cs" Inherits="SensysErp.Main.Report_Viewer" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>
<!DOCTYPE html>

<html runat="server" id="htmlDoc" class="docHTML" xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>Report Viewer</title>

    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/modernizr.js")%>

    <%# HelperLib.Web.WebResources.GetResource("~/css/normalize.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/fonts/font.css")%>
    <%#QS("_rspv")=="1"?"":("<link id='lnkTheme' href='../Css/"+(PageTheme != ""?PageTheme:"Grey")+"/jquery-ui-1.10.3.custom.css' rel='stylesheet' type='text/css' />")%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/CustomControl/CustomControl.css")%>




    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/json2.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/System.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery-ui-1.10.3.custom.min.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jqHelper.js")%>

      <%# QS("_rspv")!="1"?"":HelperLib.Web.WebResources.GetResource("~/Css/materialize.min.css")%>   
    <%# QS("_rspv")!="1"?"":HelperLib.Web.WebResources.GetResource("~/Scripts/materialize.min.js")%>

    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/UiHelper.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CustomControls.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/moment.min.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Erp.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Ui.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Fn.js")%>


    <script>
        
        var sid;
        var eid;
        var arrParamFields = [];
        function changeTheme(theme) {
            $("#lnkTheme").attr("href", "../Css/" + theme + "/jquery-ui-1.10.3.custom.css?ts=" + (new Date() / 1))
            $(document.documentElement).removeClass("GreyTheme DarkTheme BlueGlossTheme GreenTheme OrangeTheme RedTheme").addClass(theme + "Theme")
        }
    </script>
    <style>
        html {
            /*overflow:hidden;*/
        }
            html.touch {
                overflow:initial;
            }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <asp:ScriptManager ID="ScriptManager1" runat="server" EnablePageMethods="true">
        </asp:ScriptManager>

        <%= HelperLib.Web.WebResources.GetResource("~/css/base.css")%>
        <%= HelperLib.Web.WebResources.GetResource( QS("_rspv")!="1"?"~/css/form.css":"~/css/main.css")%>
        <style><%= ErpModel.Globals.Users.CustomTheme%></style>
         <%= Erp.Base.Utils.Utils.GetResourcePath(ErpModel.Globals.AppManager.CurrentAppScriptResource,true)%>
        <%= Erp.Base.Utils.Utils.GetResourcePath(ErpModel.Globals.AppManager.CurrentAppCssResource,true)%>
        <input type="submit" onclick="return false" value="cancel enter" style="display:none" />
        <div id="divMain" style="display: none">
            <asp:Label runat="server" ID="lblCompanies" Text="Select Companies"></asp:Label>
            <telerik:RadComboBox Style="width: 300px" ID="rcbCompanies" runat="server" CheckBoxes="true"></telerik:RadComboBox>
            <asp:Button ID="btnShowReport" runat="server" OnClientClick="return _ShowReport('')" Text="Show Report" />
            <asp:Button ID="btnFilter" OnClientClick="return addFilter()" CssClass="filter" Style="float: right; margin-right: 53px;" runat="server" Text="Filter" />
        </div>
        <div class="filter formSettings" id="divFilter" style="padding: 5px; padding-top: 25px; display: none; background: #fff; width: 780px; height: 450px;">
            <span class="mainHeading" style="position: absolute; top: 0">Apply Report Filter</span>
            <iframe id="IfrmFilter" frameborder="0" style="height: 100%; width: 100%" runat="server"></iframe>
            <asp:HiddenField ID="hdnFilter" runat="server" />
            <asp:HiddenField ID="hdnEid" runat="server" />
        </div>
       
        <div runat="server" visible="false" id="divLauncher" class="detail erp-control erp-Panel erp-container">
            <div class="panel-header">
            <span class="title"><i class="fa">&#xf0ae;</i><span>Report Parameters</span></span><span class="desc">Customise Report Parameters And Generate Report</span></div>
            <div class="ctr">
            <div id="divCustomLauncher"   style="height:265px;" visible="false" runat="server">
                <iframe frameborder="0" style="width: 100%; height: 100%" id="ifrCustomLauncher"></iframe>
            </div>
            <div style="width: 100%; box-sizing: border-box; padding: 20px;overflow-y1:auto;" visible="false" runat="server" id="divLauncher_Params">
                <div id="divLauncher_Field_Ctr"  style=""><asp:Literal ID="ltrParams" runat="server" Mode="PassThrough"></asp:Literal> </div>
            </div>
                </div>   
              <a href="javascript:void(0)" id="btnRun" style="margin-left:10px" class="mdl-button  GreenButton" onclick="_runReport()">Generate Report</a>
            <a onclick="Erp.CloseWindow();" id="btnCancel" class="mdl-button RedButton" href="javascript:void(0)">Cancel</a>   
            <div id="header-progressBar" class="progress" style="display: none;"><div class="indeterminate"></div></div>    
        </div>
       
        <div id="divReportviewer" style="position: absolute; left: 0; right: 0; bottom: 0">
            <iframe id="frmReportviewer" style="height: 100%; width: 100%;" frameborder="0" runat="server"></iframe>
        </div>
    </form>
    <style>
        .noFrame #PageTitle
        {
            font-size: 28px !important;
            margin-left:15px !important;
        }
        .responsive #tblRptParams {
            max-width:500px;
        }
         .responsive #tblRptParams tr{
           border-bottom:none;
        }
        .responsive #tblRptParams td{
           padding:0;
        }
        #PageTitle ._i {
            font-family: FontAwesome;
            margin-right: 8px;
        }
        .responsive #PageTitle {
            font-size: 20px !important;
        }
        #divLauncher .entity-field
        {
            float:none;
        }
        .responsive #divLauncher .entity-field
        {
            float:left;
        }

        #divLauncher {
            padding-bottom: 5px;
            padding-top: 7px;
            /*box-shadow: 0px 6px 9px #d7d7d7;*/
            z-index: 20;
            position: relative;
            background: #fff;
        }
        #divLauncher.coll {
            box-shadow: 0px 6px 9px #d7d7d7;
           
        }

        .responsive #divLauncher {
            background: var(--bg-color);
    width: 50%;
    margin-left: 25px;
    max-width: 800px;
    padding-bottom: 15px !important;
        }
        @media only screen and (max-width: 600px) {
            .responsive #divLauncher {
                width: initial;
                margin-left: 15px;
                margin-right: 15px;
            }
        }

        .responsive #divLauncher.coll {
               border-bottom: solid 1px var(--border-color);
    background: transparent;
    width: 100%;
    padding: 0 !important;
    margin-left: 0;
    max-width: initial;
    box-shadow: 0 5px 5px #d9d9d9;
    border: none;
    /*padding-left: 35px !important;*/
        }
            .responsive #divLauncher.coll > .panel-header,.responsive #divLauncher.coll > .ctr{
                display:none;
            }
        /*#divLauncher.exp {
          margin-top:0px;
            transition:margin 1s;
        }*/
        #divLauncher_Field_Ctr {
            /*min-height:225px;overflow-y:auto;*/
        }
        /*.touch #divLauncher_Field_Ctr {
            min-height:initial;
            height:initial;
            overflow-y:initial;
        }*/
        /*#divLauncher.coll  {
           margin-top:-288px;
            transition:margin 1s;
        }
       .noFrame  #divLauncher.coll  {
           margin-top:-305px;
            transition:margin 1s;
        }*/
       .touch  #divLauncher.coll{
            margin-top:0px !important;
        }
        #divLauncher.coll #PageTitle,  #divLauncher.coll #divLauncher_Params,  #divLauncher.coll #divCustomLauncher  {
          display:none;
        }
        #divLauncher.coll > #btnCancel
        {
            display: none;            
        }

        #divLauncher.exp > #btnCancel
        {
            display: inline-block;            
        }

        #divReportviewer {
            top: 0;
            z-index:10;
            border-top: solid 1px var(--border-color);
        }

            #divReportviewer.exp {
                top: 57px;
                transition: 1s;
            }
            .responsive #divReportviewer.exp {
                top: 50px;
                transition: 1s;
            }
            .noFrame  #divReportviewer.exp {
                top: 40px;
               
            }
            .noFrame.responsive  #divReportviewer.exp {
                top: 50px;
               
            }
            #divReportviewer.coll {
              
            }
              #divReportviewer.coll {
              display:none;
            }
        #btnCancel:before {
            content: "\f00d";
            font-family: fontawesome;
            margin-right: 5px;
            font-size:20px;
        }

        #btnRun._cust:before {
            content: "\f0ae";
            font-family: fontawesome;
            margin-right: 5px;
            font-size:20px;
        }

        #btnRun._gen:before {
            content: "\f02f";
            font-family: fontawesome;
            margin-right: 5px;
            font-size:20px;
        }
        .progress {
            top:initial;
            left: 0;
            bottom: -4px;
        }

        .showProg .progress {
            display:block !important;
        }
    </style>
    <script type="text/javascript">
        Erp.PageTitle = $.QS("Title");
        Erp.Responsive = <%=QS("_rspv") == "1"?"true":"false"%>
        Erp.ReportViewer = true;
        if(Erp.Responsive)
        $(document.documentElement).addClass("responsive");

        if (!window.frameElement)
            $(document.documentElement).addClass("noFrame");

        Erp.Init();
        Erp.BeginLoadData();
        if (getQS("UserInput") == "1") {
            addFilter();
        }

        if ($("#<%=divLauncher.ClientID%>").exists()){
            _showReportParameters();
           
        }


       

        function _showReportParameters() {
            $("#<%=divLauncher.ClientID%>").removeClass("coll").addClass("exp");
            $("#divReportviewer").attr("class", "coll");
            $("#btnRun").attr("class", "mdl-button GreenButton _gen").text("Generate Report");
            resizeLauncherDiv();
        }
        function _hideReportParameters() {           
           
            $("#<%=divLauncher.ClientID%>").removeClass("exp").addClass("coll");
            $("#divReportviewer").attr("class", "exp");
            $("#btnRun").attr("class", "mdl-button GreenButton _cust").text("Customise Report");
        }
        $(window).on("resize", $.debounce(250, function () {           
            resizeLauncherDiv();
        }));
        function resizeLauncherDiv(){
            if( !$("#<%=divLauncher.ClientID%>").hasClass("exp"))
                return;
            //if ($("#divLauncher_Params").exists())
            //    $("#divLauncher_Params").css("max-height", window.innerHeight-$("#divLauncher_Params").offset().top-$("#btnRun").outerHeight()-70)
            if ($("#divCustomLauncher").exists())
                $("#divCustomLauncher").css("height", window.innerHeight-$("#divCustomLauncher").offset().top-$("#btnRun").outerHeight()-70)
        }


        function _runReport() {
            if ($("#<%=divLauncher.ClientID%>").hasClass("coll"))
                _showReportParameters();
            else {
                if ($(document.documentElement).hasClass("showProg"))
                    return;
                var qs = getRptParams();
                if (qs == false)
                    return;
                if (qs.indexOf("&_ExportTo=") < 0)
                    _hideReportParameters();
                window.setTimeout(function () { _ShowReport(qs); }, 1005);
            }
        }
        var isFilterSet = false;
        function addFilter() {
            var data = new Object();
            data["PageType"] = getQS("PageType");
            data["EID"] = $("#<%= hdnEid.ClientID %>").val();
            data["SID"] = sid;
            data["xml"] = $("#<%= hdnFilter.ClientID %>").val();
            if (!isFilterSet) {
                PageMethods.SetFilterSession(data, function () {
                    var url = "../Meta/Filters_Add.aspx?PageMode=report&SID=" + sid;
                    $('#<%= IfrmFilter.ClientID %>').attr('src', url);
                    $("#divFilter").ShowModal();
                    isFilterSet = true;
                });
            }
            else
                $("#divFilter").ShowModal();

            return false;
        }
        function getRptParams() {
            var qs = "";
            if ($("#ifrCustomLauncher").exists()) {
                var result = ($("#ifrCustomLauncher")[0].contentWindow && typeof $("#ifrCustomLauncher")[0].contentWindow.OnReportPrinting == "function" ? $("#ifrCustomLauncher")[0].contentWindow.OnReportPrinting() : null);
                if (result === false)
                    return false;
                if (typeof result == "string")
                    qs += result;

            }
            else if ($("#<%=divLauncher_Params.ClientID%>").exists()) {
                var ifr = $('#<%= frmReportviewer.ClientID %>')[0].contentWindow;
                var hasFn = (ifr && typeof ifr.PrintReport == "function");

                var result = (typeof OnReportPrinting == "function" ? OnReportPrinting() : null);
                if (result === false)
                    return false;
                if (typeof result == "string")
                    qs += result;
                else {
                    
                    for (var i = 0; i < arrParamFields.length; i++) {
                        qs += "&" + arrParamFields[i].p + "=" + encodeURIComponent(Erp.GetFieldValue(arrParamFields[i].id));
                    }
                }
            }
            return $.defaultVal(qs,'');
        }
        function _ShowReport(qs) {
            var s = [];
            var ids = "";
            var cbo = $find("<%= rcbCompanies.ClientID %>");
            if (cbo) {
                s = cbo.get_checkedItems();
                ids = "";
                for (var i = 0; i < s.length; i++) {
                    ids += s[i].get_value() + ",";
                }
            }
            //document.cookie="waitingCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
            var ifr = $('#<%= frmReportviewer.ClientID %>')[0].contentWindow;
            var hasFn = (ifr && typeof ifr.PrintReport == "function");
            if (qs && qs.indexOf("&_ExportTo=") > -1) {
                $(document.documentElement).addClass("showProg");
                //Erp.ToggleMobileLoader(true);
                //window._xx = window.setInterval(function () { if (document.cookie.indexOf("waitingCookie=done") > -1) { Erp.ToggleMobileLoader(false); document.cookie = "waitingCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; window.clearInterval(window._xx); } }, 1000);
            }
            else
                $(document.documentElement).addClass("showProg");
            if (hasFn)
                ifr.PrintReport(ids, $("#<%= hdnFilter.ClientID %>").val(), qs);
            else {
                var coll = GetQSColl();
                var src = "&" + qs.toLowerCase();
                for (var x = 0; x < coll.length; x++) {
                    var k = coll[x].Key.toLowerCase();
                    if (src.indexOf("&" + k + "=") < 0)
                        qs += "&" + coll[x].Key + "=" + coll[x].Value;
                }
                $('#<%= frmReportviewer.ClientID %>').attr("src", "reports.aspx?" + qs)
            }
           
            return false;
        }
        function hidePopUp() {
            $("#divFilter").HideModal();
            return false;
        }
        function saveFilterXml(filterXml) {
            $("#<%= hdnFilter.ClientID %>").val(filterXml);
            hidePopUp();
            var qs = getRptParams();
            if (qs == false)
                return;
            _ShowReport(qs);
        }
    </script>
</body>
</html>
