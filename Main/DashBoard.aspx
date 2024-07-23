﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="DashBoard.aspx.cs" Inherits="SensysErp.Main.DashBoard" %>
<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>
<!DOCTYPE html>

<html class="" runat="server" id="htmlDoc" xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
     <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>Dashboard</title>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/modernizr.js")%>

    <%# HelperLib.Web.WebResources.GetResource("~/css/normalize.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/fonts/font.css")%>
    <%# QS("_rspv")=="1"?"":("<link id='lnkTheme' href='../Css/"+ErpModel.Globals.Users.ThemeName+"/jquery-ui-1.10.3.custom.css' rel='stylesheet' type='text/css' />")%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/CustomControl/CustomControl.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/jquery.gridster.css")%>
    <%# Readonly?"":HelperLib.Web.WebResources.GetResource("~/css/WidgetMap"+(QS("_rspv")=="1"?"Resp":"")+".css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/dashboard.css")%>

    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/json2.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/System.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery-ui-1.10.3.custom.min.js")%>

    <%# QS("_rspv")!="1"?"":HelperLib.Web.WebResources.GetResource("~/Css/materialize.min.css")%>   
    <%# QS("_rspv")!="1"?"": HelperLib.Web.WebResources.GetResource("~/Scripts/materialize.min.js")%>

    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jqHelper.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CustomControls.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/moment.min.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Erp.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Ui.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Fn.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.gridster.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/dashboard.js")%>

   
    <script>
        var DashBoardPage = true;
        Erp.DashBoardPage=true;
        var DashboardData = [], WidgetList = [];
      
        FilterList = {};
    </script>
</head>
<body class="pg-dashboard">

    <form id="form1" runat="server">
        <%= HelperLib.Web.WebResources.GetResource("~/css/base.css")%>
        <%= HelperLib.Web.WebResources.GetResource( QS("_rspv")!="1"?"~/css/form.css":"~/css/main.css")%>
        <style><%= ErpModel.Globals.Users.CustomTheme%></style>
        <%= Erp.Base.Utils.Utils.GetResourcePath(ErpModel.Globals.AppManager.CurrentAppScriptResource,true)%>
        <%= Erp.Base.Utils.Utils.GetResourcePath(ErpModel.Globals.AppManager.CurrentAppCssResource,true)%>
          <asp:ScriptManager ID="ScriptManager1" runat="server" EnablePageMethods="true">
        </asp:ScriptManager>
        <asp:Panel ID="pnlWidgets" Visible="false" runat="server">
            <asp:DropDownList ID="ddlWidgets" runat="server"></asp:DropDownList><a href="javascript:void(0)" onclick="addWidget()">add new</a>
        </asp:Panel>
        <div id="navBar" style="display:none" class="navbar-fixed">
                    <nav style="">
                        <div class="nav-wrapper"><a id="header-show-sidenav" class="sidenav-trigger"  style="float: left; margin-left: 20px;"><i class="fa"></i></a>
                            <a id="PageTitleMobile"  class="page-title"><i style="display:none" class="_i fa medium valign"></i><span class="_t"></span></a>
                        </div>
                    </nav>
        </div>
        <div id="dashCmd" style="display:none" class="dash-cmd">
            <div class="_inner">                
            </div>
            <select id="ddlDeviceType" onchange="switchView()"><option value="1">Desktop View</option><option value="2">Tablet View</option><option value="3">Mobile View</option></select>
            <a href="javascript:void(0)" id="dashLeft"></a><a href="javascript:void(0)" id="dashRight"></a></span>
            <a style="margin-left: 10px;" id="dashEdit" class="dash-edit" onclick="editDashList()" href="javascript:void(0)"></a>
            <a class="dash-list" onclick="showWidgetList()" href="javascript:void(0)"></a>
            <a class="dash-flip" onclick="parent.ToggleDashBoard()" style="display:none" href="javascript:void(0)"></a>
        </div>
        <div id="divDashList">
            <div class="content">
                <div id="divDashList_Add" style="display: none">                   
                    <span class="lbl">Choose An Existing Dashboard</span>
                     <asp:DropDownList ID="ddlDashList" runat="server"></asp:DropDownList>
                    
                    <span class="lbl" style="margin-top: 20px; text-align: center; margin-left: -50px; font-size: 22px;">OR</span>
                    <span class="lbl" style="margin-top: 20px;">Create New Dashboard</span>
                    <input class="txt" id="txtDashList" type="text" />
                </div>
                <div id="divDashList_Edit" style="display: none">
                </div>
                <div style="text-align: right; margin-top: 20px;">
                    <a class="mdl-button BlueColor small" style="position: absolute;    left: 10px;    bottom: 17px;" onclick="showDashList()" id="dashNew" href="javascript:void(0)">Add New</a>
                    <a class="mdl-button GreenButton"  style="display:none" onclick="saveDashBoard()" href="javascript:void(0)">Save</a>
                    <a class="mdl-button RedButton" style="display:none" onclick='hideDashList();' href="javascript:void(0)">Cancel</a>
                </div>
            </div>
        </div>
       <div class="dashTitleBar">

       </div>
        <div id="dashBoardCtr" class="">
        </div>        
        <div id="divDrag" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 1000;background-color1:red; background-image: url(../images/transbg.png)"></div>
        <div id="divBg" style="display: none;"></div>
        <span id="spnCallout" style="display: none;"></span>
        <span id="spnSaveUserLayout" style="display: none;">
            <span class="_bg"></span>
            <a href="javascript:void(0)" class="_save" onclick="saveUserLayout()">Save</a><br />
            <a href="javascript:void(0)" class="_cancel" onclick="$('#spnSaveUserLayout').hide()">Cancel</a>
        </span>
       
    </form>
    <style>
        .ui-datepicker.ui-widget-content {
            z-index:1010 !important;
        }
         body {
            overscroll-behavior-y:contain;
        }

        .responsive .modal-overlay {
                z-index: 1010 !important;
        } 
        .responsive .datepicker-modal {
                z-index: 1012 !important;
        }
        .vw:before {
            position: absolute;
            background: #f3f9ff;
            content: "";
            display: block;
            width: 500px;
            top: 0;
            left: 0;
            bottom: 0;
            pointer-events: none;
            border: solid 1px #b7cfd8;
        }
        .vw.vw1:before {
            width:1200px;
        }
         .vw.vw2:before {
            width:992px;
        }
          .vw.vw3:before {
            width:500px;
        }
    </style>
    <script type="text/javascript">
        var DefaultTheme = '<%=ErpModel.Globals.Users.ThemeName%>';
        function changeTheme(theme) {          
            DefaultTheme = theme;
            $("#lnkTheme").attr("href", "../Css/" + theme + "/jquery-ui-1.10.3.custom.css?ts=" + (new Date() / 1))
            $(document.documentElement).removeClass("GreyTheme DarkTheme BlueGlossTheme GreenTheme OrangeTheme RedTheme").addClass(theme + "Theme")
            
            $("#dashBoardCtr").children().children(".wdg").each(function () {
                changeWidgetTheme(theme, $(this));
            })
        }
        Erp.Touch = $(document.documentElement).hasClass("touch");
        var readOnlyMode=<%=Readonly?1:0%>;
        var isDesignerMode=("<%=DesignMode%>"=="Master"||"<%=DesignMode%>"=="Dashboard");
        var BoxWidth=0,BoxWidth1=0,BoxWidth2=0,BoxWidth3=0;
        var MaxCols=12;
        var MinWidgetWidth = 20;
        var MinWidgetHeight = 20;
        var WidgetGap = (readOnlyMode==0?5:10);
        if($.QS("_rspv")=="1"){
            $(document.documentElement).addClass("responsive");
            Erp.Responsive=true;
        }
        if(parent.Erp && parent.Erp.Responsive){
            
            if($.QS("_mo")=="1"){
                $("#navBar").show().find("._t").html($.QS("_t1"));
                $('#header-show-sidenav').children('i').on('click', function () { __ShowHomeSideNav(); });
                $("body").css("padding","0")
                $("#dashBoardCtr").css("top","55px");                 
            }
        }
        function __ShowHomeSideNav() {
            var win = window;
            var trials = 0;
            while (!win.Erp || !win.Erp.MobileHome) {
                win = win.parent;
                trials++;
                if (trials > 20) {
                    return;
                }
            }            
            win.$("#header-show-sidenav").children("i").trigger("click");
        }
        if(readOnlyMode==0)
            $(document.documentElement).addClass("trans")
        else{
            $(document.documentElement).addClass("readOnly")
            if(!Erp.Responsive){
                $(document.documentElement).addClass("themeBackColor-Light")
                //$("#dashBoardCtr").addClass("themeBackColor-Light")
            }
        }
        if(!Erp.Responsive)
            $(document.documentElement).addClass("noResp")

        if(isDesignerMode){
            $("#dashCmd").addClass("opq");
            $("#dashBoardCtr").addClass("vw vw1")
        }

        $(window).on("load",function(){parent.$("#header-progressBar").hide();})

        $(function () {
            if (getQS("my") != "1") {
                $("#dashCmd").children().hide().filter(".dash-list,._inner,#ddlDeviceType").show();
                if(readOnlyMode==0){
                    $("#dashCmd").show();
                    $("#dashBoardCtr").css("top","55px");                    
                }
            }
            
            //$("#dashCmd").children("._inner").slide({ step: 80, movLeft: $("#dashLeft"), movRight: $("#dashRight") });
            //$("#dashCmd").children("._inner").slide("refresh");
            //generateWidgetStyleTags();

            
            
            var found = false;
            for (var i = 0; i < DashboardData.length; i++) {                
                var d = DashboardData[i];
                if (d.Default && found)
                    d.Default = 0;
                else if(d.Default)
                    found = true;

                WidgetGap = 10;
                if(Erp.Responsive)
                {
                    WidgetGap = 50;
                    if(window.innerWidth<600)
                        WidgetGap = 15;
                    else if(window.innerWidth<1010)
                        WidgetGap = 25;
                }
                if(readOnlyMode==1 || d.IsReadonly==1){   
                    WidgetGap = 50;
                    if(window.innerWidth<600)
                        WidgetGap = 15;
                    else if(window.innerWidth<1010)
                        WidgetGap = 25;

                    var rows={},rows1={},rows2={},rows3={};
                    for (var x = 0; x < d.Data.length; x++) {   
                        var w=d.Data[x];
                        rows["r"+w.Row]=(rows["r"+w.Row]?rows["r"+w.Row]:0)+w.SizeX;
                        if(w.SizeX1>0)
                            rows1["r"+w.Row1]=(rows1["r"+w.Row1]?rows1["r"+w.Row1]:0)+w.SizeX1;
                        if(w.SizeX2>0)
                            rows2["r"+w.Row2]=(rows2["r"+w.Row2]?rows2["r"+w.Row2]:0)+w.SizeX2;
                        if(w.SizeX3>0)
                            rows3["r"+w.Row3]=(rows3["r"+w.Row3]?rows3["r"+w.Row3]:0)+w.SizeX3;
                    }      
                    
                    for(p in rows)
                        if(BoxWidth<rows[p])
                            BoxWidth=rows[p];
                    for(p in rows1)
                        if(BoxWidth1<rows1[p])
                            BoxWidth1=rows1[p];
                    for(p in rows2)
                        if(BoxWidth2<rows2[p])
                            BoxWidth2=rows2[p];
                    for(p in rows3)
                        if(BoxWidth3<rows3[p])
                            BoxWidth3=rows3[p];

                }

                var g = $("<div mydash='" + (d.My ? "1" : "0") + "' style='visibility:hidden' recid='"+d.RecID+"' class='gridster' ></div>");
                d.Id = g.NewID("dashboard").attr("id");
                var b = $("<a class='dash-item" + (d.Default ? " sel" : "") + (d.My ? " _my" : "") +"' recid='" + d.RecID + "' default='" + (d.Default ? "1" : "") + "' dashid='" + d.Id + "' mydash='" + (d.My ? "1" : "0") + "' href='javascript:void(0)'>" + d.Title + "</a>");
                b.NewID("dashItem");
                b.data("readonly",(readOnlyMode==1 || d.IsReadonly==1))
                $("#dashCmd").children("._inner").append(b);
              
                $("#dashBoardCtr").append(g);
                
                var arr = d.Data;
                for (var x = 0; x < arr.length; x++) {
                    var wd=AddWidgetToDashBoard(null, arr[x], d.Default ? false : true,(readOnlyMode==1 || d.IsReadonly==1))
                    g.append(wd);
                    var hasSettings = WidgetSettingInfo[wd.attr("id")] && WidgetSettingInfo[wd.attr("id")].Keys.length > 0;
                    if (!hasSettings)
                        wd.addClass("nos");
                }
                if(readOnlyMode==1)
                    setApplicableView(true);
                makeGridster(g,(readOnlyMode==1 || d.IsReadonly==1));
                g.addClass((d.Default ? "showDash" : "hideDash"))
            }
            if (readOnlyMode==0 && typeof parent.refreshDashBoard == "function")
                parent.refreshDashBoard($("#dashCmd").children("._inner").children(".sel").outerHTML());
            window.setTimeout(function () { $("#dashBoardCtr").children().setVisible(true); }, 250);
            $("#<%=ddlDashList.ClientID%>").on("change", function () {
                $("#txtDashList").setEnable($(this).prop("selectedIndex") < 2);
                if ($(this).prop("selectedIndex") > 1)
                    $("#txtDashList").val("");
            })
            $("#divDashList_Edit").sortable({
                items: "._s",
                handle: ".reorder",
                stop: function (event, ui) { $("#divDashList").find(".GreenButton").show(); }
            });
            $("#dashCmd").on("click", ".dash-item", function () { toggleDash($(this)); })
            $("#divDashList_Edit").on("click", ".chk,._chk,.close,.edit,.txt", function (e) {
                e.stopPropagation();
                if ($(this).hasClass("txt") && !$(this).hasClass("edt")) {
                    var d = $("#" + $(this).closest(".row").attr("btnid"));
                    $("#divDashList_Edit").find("._chk").checked(false);
                    $(this).closest(".row").find("._chk").checked(true);                    
                    hideDashList();
                    $("#dashCmd").children("._inner").children().removeClass("sel");
                    d.addClass("sel")
                    saveDashBoard(true);
                    if (readOnlyMode==0 && typeof parent.refreshDashBoard == "function")
                        parent.refreshDashBoard(d.outerHTML());
                    toggleDash(d);
                }
                else if ($(this).hasClass("edit")) {
                    $(this).parent().children(".txt").addClass("edt").removeAttr("readonly").focus();
                    $("#divDashList").find(".GreenButton").show();
                }
                else if ($(this).hasClass("close")) {
                    if (confirm("Do you wish to delete this dashboard?")) {
                        $(this).closest(".row").addClass("_deleted").hide().find("_chk").checked(false);
                        $("#divDashList").find(".GreenButton").show();
                        var chk = $("#divDashList_Edit").find("._chk:checked");
                        if (chk.length == 0)
                            $("#divDashList_Edit").find("._my").find("_chk").checked(true);
                    }
                }
                else if ($(this).hasClass("_chk") || $(this).hasClass("chk")) {
                    $("#divDashList_Edit").find("._chk").checked(false);
                    $(this).closest(".entity-check").find("._chk").checked(true);
                }
            });
            $("#divDashList").on("click", function () {
                if ($("#divDashList_Edit").isVisible()) {
                    $("#divDashList_Edit").find(".edt").removeClass("edt");
                }
            });
            if ($("#dashCmd").children("._inner").children(".sel").length == 0)
                $("#dashCmd").children("._inner").children(".dash-item").trigger("click");
            //$('#spnSaveUserLayout').draggable({ scroll: false }).dragMomentum(); //containment: '#boundary_box'
            
            Erp.Init();
            Erp.BeginLoadData();
            $(window).on("resize", $.debounce(250, function () {
                resizeMaxWidgets();
                if(readOnlyMode==1)
                    setApplicableView();

                for (var i = 0; i < Erp.OnResize.EventList.length; i++) {
                    if (typeof Erp.OnResize.EventList[i] == "function"){
                        Erp.OnResize.EventList[i]();
                    }
                }
            }));
        });
       
        function toggleDash(a) {
            if ($("#" + a.attr("dashid")).hasClass("showDash"))
                return;
            a.parent().children().removeClass("sel")
            a.addClass("sel");
            $("#dashBoardCtr").children().not("#" + a.attr("dashid")).addClass("hideDash").removeClass("showDash");;
            var d = $("#" + a.attr("dashid"));
            d.removeClass("hideDash").addClass("showDash");
            if (!d.data("Loaded")) {
                d.children().each(
                    function () {
                        var w = $(this);
                        if (!$.isEmpty(w.data("WidgetUrl"))) {
                            w.find("iframe").attr("src", w.data("WidgetUrl"));
                            w.removeData("WidgetUrl");
                            w.data("Loaded", true);
                        }
                    }
                    );

            }

        }
        
        
        function showDashList() {
            $("#divDashList_Edit,#divDashList_Add,#dashNew").hide();
            $("#divBg").show().css("height", "").css("width", "");          
            $("#divDashList").show().position({ my: "middle middle", at: "middle middle", of: document.documentElement, collision: "none none" }).css("top", "80px");
            $("#divDashList_Add").hide().toggle("blind");
            $("#divBg").one("click", function () { hideDashList(); })
            $("#divDashList").find(".GreenButton").show();
            $("#<%=ddlDashList.ClientID%>").chosen({ disable_search: true, width: "280px" });
        }
        
       
        function editDashList() {
            $("#dashNew").show();
            $("#divDashList").find(".GreenButton").hide();
            $("#divDashList_Edit,#divDashList_Add").hide();
            var arr = [];
            $("#dashCmd").children("._inner").children().each(function (i) {
                var d = $(this);
                arr.push('<span btnid="' + d.attr("id") + '"  class="row' + (d.attr("mydash")=="1"?" _my":"") + (d.data("readonly")?" readonly ":" _s")+'"><span style="display:none" class="entity-check"><input class="_chk"  id="chkDash_' + i + '" ' + (d.attr("default") == "1" ? "checked" : "") + '  type="checkbox" ><label class="chk" for="chkDash_' + i + '"></label></span><span style="'+(d.data("readonly")?"visibility:hidden":"")+'" class="reorder"></span><input readonly class="txt" type="text" value="' + d.html() + '">' + (d.attr("mydash") == '1'||d.data("readonly")? '' : '<span class="edit"></span><span class="close">&times;</span>') + '</span>');

            })
            $("#divDashList_Edit").html(arr.join(''));           
            $("#divBg").show().css("height", "").css("width", "");
            $("#divDashList").show().css({ top: "-1px",left: "172px"});
            $("#divDashList_Edit").hide().toggle("blind");
            $("#divBg").one("click", function () { hideDashList(); });
        }
        function hideDashList() {
            $("#divDashList,#spnCallout,#divBg").hide();
            if (readOnlyMode==0 && typeof parent.refreshDashBoard == "function")
                parent.refreshDashBoard(1);
        }


        var wdgPopup = null;
        function showWidgetList() {
            wdgPopup = $(document.body).ShowPopup({ url: "../meta/DashboardWidget_List.aspx?mode=" + (getQS("my") == "1" ? "" : "design"), popupClass: "dashlist-ctr", anim: false,height:"70%", maxHeight: 700, width: 150, reuse: true, title: "Add Widgets To Dashboard", });
            wdgPopup.css({ height: "", width: "", right: wdgPopup.offset().left, bottom: 400 }).animate({ top: (screen.height < 1024 ? 20 : 50), left: (screen.height < 1024 ? 15 : 125), height: "700px", right: (screen.height < 1024 ? 15 : 125) });
            var ifr = wdgPopup.find("iframe")[0];
            if (ifr && ifr.contentWindow && typeof ifr.contentWindow.ResetData == "function"){
                ifr.contentWindow.ResetData();
                ifr.contentWindow.checkReadonlyDash()
            }
        }
        function addWidget(w) {
            var d=$("#dashBoardCtr").children(".showDash").eq(0);
            if(d.data("readonly")){
                alert("Dashboard is readonly")
                return;
            }
            for (var i = 0; i < w.length; i++)
                AddWidgetToDashBoard(d, w[i]);
            if (wdgPopup)
                wdgPopup.RemovePopup();
            saveUserLayout();
            Erp.BeginLoadData();//calling events of newly added widgets
        }
       
        function saveUserLayout() {   
            if(isDesignerMode){
                saveDeviceView();
            }
            if (getQS("my") != "1")
                return;
            var xml = serialiseWidgets();
            PageMethods.SaveDashBoard("User_SaveLayout", [{ Id: $("#dashBoardCtr").children(".showDash").eq(0).attr("recid"), Widgets: xml }]);
        }
        function saveDashBoard(fromLink) {
            if ($("#divDashList_Add").isVisible()) {
                var fromMaster = $("#<%=ddlDashList.ClientID%>").prop("selectedIndex") > 1;
                $("#dashBoardCtr").children().addClass("hideDash").removeClass("showDash");
                var d = $("<div class='gridster'></div>");
                d.NewID("dashboard");
                $("#dashBoardCtr").append(d);
                if (!fromMaster) {
                    makeGridster(d);
                    d.addClass("showDash");
                }
                $("#dashCmd").children("._inner").children().removeClass("sel");

                var title = (fromMaster ? $("#<%=ddlDashList.ClientID%>").selectedItem().text() : $("#txtDashList").val());
                var b = $("<a class='dash-item sel' dashid='" + d.attr("id") + "' href='javascript:void(0)'>" + title + "</a>");
                b.NewID();
                $("#dashCmd").children("._inner").append(b);
                if (readOnlyMode==0 && typeof parent.refreshDashBoard == "function")
                    parent.refreshDashBoard(b.outerHTML());
                $.Notify({ NotifyOnly: true, Message: "Saving...", Fixed: true });
                if (fromMaster)
                    PageMethods.LoadDashboard($("#<%=ddlDashList.ClientID%>").val(), function (result) {
                        $.Notify(false);
                        b.attr("recid", result["@NewID"]);
                        d.attr("recid", result["@NewID"]);
                        var dash = JSON.parse(result["WidgetData"]);
                        if (d) {
                            var arr = dash.Data;
                            for (var x = 0; x < arr.length; x++) {
                                d.append(AddWidgetToDashBoard(null, arr[x], false));
                            }
                        }
                        makeGridster(d);
                        d.addClass("showDash");
                        Erp.BeginLoadData();//calling events of newly added widgets
                    }, function () { $.Notify(false); });
                else
                    PageMethods.SaveDashBoard("User_AddDashboard",
                        [{ Fid: (fromMaster ? $("#<%=ddlDashList.ClientID%>").val() : ""), DisplayName: title }],
                        function (result) {
                            $.Notify(false);
                            b.attr("recid", result["NewID"]);
                            d.attr("recid", result["NewID"]);
                        }, function () { $.Notify(false); }
                        );
                }
            else if (fromLink || $("#divDashList_Edit").isVisible()) {
                    var arr = [];
                    var data = [];
                    var cmd = $("#dashCmd").children("._inner");
                   
                    $("#divDashList_Edit").find(".txt").each(function (i) {
                        var r = $(this).closest(".row");
                        var b = $("#" + r.attr("btnid"));
                        if (r.hasClass("_deleted")) {
                            data.push({ Id: b.attr("recid"), Deleted: true });
                            return true;
                        }
                        else
                            data.push({ Id: b.attr("recid"), DisplayName: $(this).val(), SortOrder: i, Default: r.find("._chk").checked() });

                        var di=$("<a id='dashItem_" + i + "' recid='" + b.attr("recid") + "' default='" + (r.find("._chk").checked() ? "1" : "") + "' mydash='" + b.attr("mydash") + "' dashid='" + b.attr("dashid") + "' class='dash-item" + (b.hasClass("sel") ? " sel" : "") + (b.attr("mydash") =="1"? " _my" : "") + "' href='javascript:void(0)'>" + $(this).val() + "</a>");
                        di.data("readonly",r.hasClass("readonly"))
                        arr.push(di);
                    });
                    cmd.empty();
                    for(var x=0;x<arr.length;x++)
                        cmd.append(arr[x]);
                    $("#dashBoardCtr").children().filter(function () { if (!cmd.children("[dashid=" + $(this).attr("id") + "]").exists()) return true; }).remove();

                    if (!cmd.children(".sel").exists()) {
                        var lnk = cmd.children("._my").addClass("sel");
                        if (readOnlyMode==0 && typeof parent.refreshDashBoard == "function")
                            parent.refreshDashBoard(lnk.outerHTML());
                        lnk.trigger("click");
                    }
                    if (!fromLink)
                        $.Notify({ NotifyOnly: true, Message: "Saving...", Fixed: true });
                    PageMethods.SaveDashBoard("User_EditDashboards", data, function () { $.Notify(false); }, function () { $.Notify(false); });
                }
               hideDashList();
                //parent.refreshDashBoard($("#dashCmd").children("._inner").children(".sel").eq(0).outerHTML());
            }
    </script>
    <script>
        var WidgetSettingInfo = {};
        Erp.EventColl = function (type) {
            this.EventList = [];
            this.Type=type;
            this.Register = function (func) {
                var info = WidgetSettingInfo[CurrentWidgetId];
                if (!info[this.Type])
                    info[this.Type] = [];
                info[this.Type].push(func);
                this.EventList.push(func);
            }
        }
       
        var __baseGetParam=Erp.GetParam;
        Erp.GetParam = function (id, k) {
            var s=typeof id=="string"?$("#"+id).data("Settings"):null;
            if(s){
                return s.Params?s.Params[k]:"";
            }
            return __baseGetParam(id, k)
        }


        Erp.OnInit = new Erp.EventColl('OnInit');
        Erp.OnLoad = new Erp.EventColl('OnLoad');
        Erp.OnSave = new Erp.EventColl('OnSave');
        Erp.OnSaveSuccess = new Erp.EventColl('OnSaveSuccess');
        Erp.OnLoadComplete = new Erp.EventColl('OnLoadComplete');
        Erp.OnResize = new Erp.EventColl('OnResize');


        Erp.BeginLoadData = function () {
            var refs = [];
            for (var i = 0; i < Erp.OnResize.EventList.length; i++) {
                if (typeof Erp.OnResize.EventList[i] == "function"){
                    Erp.OnResize.EventList[i]();
                }
            }
         
            for (var i = 0; i < Erp.OnLoad.EventList.length; i++) {
                if (typeof Erp.OnLoad.EventList[i] == "function"){
                    if(Erp.OnLoad.EventList[i].Loaded)
                        continue;
                   
                    refs = $.union(refs, hasDbReferences(Erp.OnLoad.EventList[i], "Load"));
                }
            }
            for (var i = 0; i < Erp.OnLoadComplete.EventList.length; i++) {
                if (typeof Erp.OnLoadComplete.EventList[i] == "function"){
                    if(Erp.OnLoadComplete.EventList[i].Loaded)
                        continue;
                    
                    refs = $.union(refs, hasDbReferences(Erp.OnLoadComplete.EventList[i], "LoadComplete"));
                }
            }
            if (refs.length > 0) {
                evaluateDbReferences(refs, Erp.LoadData);
            }
            else
                Erp.LoadData();

        }
        

        Erp.LoadData = function () {            
            Erp.Load();
            Erp.LoadDataComplete = true;            
        }
        Erp.Load = function () {
            for (var i = 0; i < Erp.OnLoad.EventList.length; i++) {
                if (typeof Erp.OnLoad.EventList[i] == "function" && !Erp.OnLoad.EventList[i].Loaded){
                    Erp.OnLoad.EventList[i].Loaded=true;
                    Erp.OnLoad.EventList[i]();
                }
            }
        }
        Erp.LoadComplete = function () {
            //triggered after load settings
            ////for (var i = 0; i < Erp.OnLoadComplete.EventList.length; i++) {
            ////    if (typeof Erp.OnLoadComplete.EventList[i] == "function" && !Erp.OnLoadComplete.EventList[i].Loaded){
            ////        Erp.OnLoadComplete.EventList[i].Loaded=true;
            ////        Erp.OnLoadComplete.EventList[i]();
            ////    }
            ////}            
        }

        Erp.GetFieldValue = function (f) {
            if (typeof f == "object")
                f = f instanceof $ ? f.attr("id") : f.Id;
            var fld = $("#" + f);
            if ($.defaultVal(fld.attr("type"), "").toLowerCase() == "checkbox")
                return fld.checked();
            else if (fld.hasClass("ui-number"))
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
                return $.defaultVal(fld.data("RecordID"),"");
            else if (fld.next().hasClass("ui-multi")){
                var arr=[];
                fld.next().multiSelect().getItems().each(function(){arr.push($(this).data("RecordID"));});
                return arr.join();
            }
            else
                return fld.val();
        }
        Erp.SetFieldValue = function (f, v) {
            if (typeof f == "object")
                f = f instanceof $ ? f.attr("id") : f.Id;
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

        

        function readCustomSettings(id) {
            var userdata = {};
            var pnlSetting = $("#s_" + id).find(".content");
            var info = WidgetSettingInfo[id];
            var keys = info.Keys;
            
            
            for (var i = 0; i < keys.length; i++) {
                var ke = keys[i].Key.toLowerCase();
                var type = keys[i].Type.toLowerCase();
                var ctl = pnlSetting.find("[key=" + ke + "]");

                if (type == "bool")
                    userdata[ke] = ctl.checked();
                else if (type == "filter")
                    userdata["#FILTER#" + ke] = ctl.next().val();
                else if (type=="list")
                    userdata[ke] = $.defaultVal(ctl.data("RecordID"), "");
                else if (type=="multiselect")
                    userdata[ke] = Erp.GetFieldValue(ctl);
                else {
                    var data = "";
                    if (type == "numeric" && ctl.prop("tagName") == "INPUT")
                        data = ctl.autoNumeric('get');
                    else if (type == "date") {
                        data =  Erp.GetFieldValue(ctl);
                    }
                    else
                        data = ctl.val();

                    userdata[ke] = data;
                }
            }
            if (info.OnSave) {                
                for (var i = 0; i < info.OnSave.length; i++) {
                    if (typeof info.OnSave[i] == "function")
                        if (info.OnSave[i](info,userdata) == false)
                            return false;
                }
            }
            return userdata;
        }

        function InitUI() {
            
        }
        function InitWidgetUI(uid) {
            if (uid) {
                var info = WidgetSettingInfo[uid];
                //if (info.OnInit)
                //    Erp.OnInit.EventList = info.OnInit;
                //if (info.OnLoad)
                //    Erp.OnLoad.EventList = info.OnLoad;
                LoadCustSettings(info.Keys, uid);
                if (info.OnSaveSuccess) {
                    for (var i = 0; i < info.OnLoadComplete.length; i++) {
                        if (typeof info.OnLoadComplete[i] == "function")
                            info.OnLoadComplete[i](info);
                    }
                }
                //Erp.Init();
                //Erp.BeginLoadData();
                
            }
        }

        function ShowFilter(ctl) {
            ctl = $(ctl);
            var data = new Object();
            data["Type"] = "ShowEntityFilter";
            data["EID"] = ctl.data("Entity");
            data["SID"] = ctl.data("Uid") + ctl.data("Key");
            data["xml"] = ctl.next().val();
            if (!ctl.data("FilterSet")) {
                Sys.Net.WebServiceProxy.invoke(AppRootPath + "/core/erpapi.asmx", 'SetFilterSession', false, {
                    data: data
                }, function () {
                    var url = "../Meta/Filters_Add.aspx?PageMode=Settings&EID=" + data["EID"] + "&SID=" + data["SID"] + "&Hidebutton=1&ShowFilterBtn=1&ReturnXml=1";
                    var p = $(document.body).ShowPopup({ url: url, zIndex: 4000, height: 475, width: 795, showClose: false, anim: false, reuse: true })
                    if (!p.children(".row").exists()) {
                        p.css("padding-bottom", "30px");
                        p.data("Uid", ctl.data("Uid"));
                        p.data("Key", ctl.data("Key"));
                        var btnSave = $('<input type="button" class="ActionButton GreenButton" value="Save Mappings"/>');
                        btnSave.on("click", function () {
                            var pop = $(this).closest(".Popup");
                            var ifr = pop.find("iframe");
                            if (ifr.exists() && ifr[0].contentWindow) {
                                $("#hdn" + pop.data("Uid") + pop.data("Key")).val(ifr[0].contentWindow.createXml());
                            }
                            pop.RemovePopup();
                        })

                        var btnCancel = $('<input type="button" class="ActionButton GlassButton RedColor" onclick="$(this).closest(\'.Popup\').RemovePopup()" style="margin-left:5px" value="Cancel"/>');
                        var cmd = $("<span class='row' style='position:absolute;bottom:3px;left:0;right:5px;text-align: right;border-top: solid 1px #E0E0E0;padding-top: 3px;padding-right: 5px;'></span>")
                        cmd.append(btnSave)
                        cmd.append(btnCancel)
                        p.append(cmd);
                    }

                }, function () { }, null, 0, true, "callback");
                ctl.data("FilterSet", true);
            }
           
        }

        function LoadCustSettings(permissionKeys,id) {
            var pnlSetting = $("#s_" + id).find(".content");
            //if(Erp.Responsive)
            //    pnlSetting.find("select").formSelect();
            for (var i = 0; i < permissionKeys.length; i++) {
                var info = permissionKeys[i];
                
                
                var ke = info.Key;
                var type = info.Type.toLowerCase();
                var result = info.Result;

                var perCtl = pnlSetting.find("[key=" + ke + "]");
                perCtl.data('Key', ke);
                perCtl.data('Uid', id);
                var dt = "Text", st = "Text";
                if (type == "filter") {
                    perCtl.attr("href", "javascript:void(0)").attr('onclick', "return ShowFilter(this)");
                    perCtl.data('Entity', $.defaultVal(info.Entity, ""));
                    var hidd = $('<input id="hdn'+id+ke+'" type="hidden" />');
                    perCtl.after(hidd);
                    hidd.val(result);
                }
                else if (type == "list") {
                    var ddl = perCtl;
                    ddl.data('FieldID', (id + ke)); ddl.data('Eids', $.defaultVal(info.Entity, ""));
                    ddl.data('LookupCode', $.defaultVal(info.FormCode, ""));
                    ddl.data('FieldType', "SINGLESELECT_TABLE");
                    ddl.data('Multi', false); ddl.on('click', function () { showSearchList($(this)); });
                    ddl.data('@@_theme',"Grey");
                    ddl.NewID();
                    ddl.attr("autocomplete", "off")
                    if(Erp.Touch)
                        ddl.attr("readonly", "readonly");
                    else
                        enableKeyboardForList(ddl);

                    if (Erp.Responsive){
                        
                        ddl.parent().attr("class","val select-wrapper ui-list")
                        ddl.before('<span class="caret">▼</span>')                        
                        ddl.after('<a title="Clear" href="javascript:void(0)" style="display:none" onclick="__clearSelect(this,event,\'Ddl\')" class="del">×</a>')
                    }
                    else
                        ddl.addClass("ui-list").after("<a title='Clear' href='javascript:void(0)' " + ($.isEmpty(info.RecordTitle) ? "style='display:none'" : "") + " onclick='if(!$(this).prev().isDisabled())$(this).hide().prev().val(\"\").removeData(\"RecordID\").removeData(\"EntityID\").trigger(\"change\");' class='del'>X</a>")
                    if (result != "") {
                        ddl.data('RecordID', result); ddl.data('EntityID', $.defaultVal(info.Entity, ""));
                        ddl.val($.defaultVal(info.RecordTitle, ""));
                    }
                    dt = "SINGLESELECT"; st = "Ddl";
                }
                else if (type == "multiselect") {
                    perCtl.hide().after("<div  class='entityInput ui-text chosen-container chosen-container-multi ui-multi'></div>");
                    var ddl = perCtl.next();
                    ddl.data('FieldID', (id + ke)); ddl.data('Eids', $.defaultVal(info.Entity, ""));
                    ddl.data('LookupCode', $.defaultVal(info.FormCode, ""));
                    ddl.data('Multi', true); 
                    //ddl.on('click', function () { showSearchList($(this)); });
                    var m=ddl.multiSelect({ onItemAdding: onMixSelectItemAdding, onDropDownShowing: showSearchList });
                    ddl.data('@@_theme',"Grey");
                    ddl.NewID().attr("readonly", "readonly").after("<a title='Clear' href='javascript:void(0)' " + ($.isEmpty(info.RecordTitle) ? "style='display:none'" : "") + " onclick='if(!$(this).prev().isDisabled())$(this).hide().prev().val(\"\").removeData(\"RecordID\").removeData(\"EntityID\").trigger(\"change\");' class='del'>X</a>")
                    if (result != "") {
                        var ar=result.split(',');
                        var args=[];
                        $(ar).each(function(){args.push({Id:ddl.ID(),RecordID:this,EntityID:info.Entity});})
                        Erp.GetRecordTitleMulti(args,function(r){
                            if (!r || r.length <= 0)
                                return;
                            var mu = $("#" + r[0].Id).multiSelect();
                            for (var i = 0; i < r.length; i++)
                                mu.addItem({ Text: r[i].Text, RecordID: r[i].RecordID, EntityID:r[i].EntityID });
                        })
                    }
                    dt = "MULTISELECT"; st = "Multi";
                }
                else if (type == "date") {
                    if (Erp.Responsive)
                        perCtl.addClass("ui-date").materialDatepicker({reuse:0,container:'body',yearRange:25,format: "<%= SensysErp.Utility.Utils.MomentDateFormat(ErpModel.Globals.Users.Culture.ShortDateFormat) %>"});
                    else
                        perCtl.addClass("ui-date").datepicker({ showOn: "button", buttonImage: "../images/date.png", buttonImageOnly: true, dateFormat: "<%= SensysErp.Utility.Utils.JqDateFormat(ErpModel.Globals.Users.Culture.ShortDateFormat) %>", scrollbar: true, dropdown: false });
                    dt = "DATE"; st = "Date";
                    if(Erp.Touch)
                        perCtl.attr("readonly","readonly");
                }
                else if (type == "number" && perCtl.prop("tagName") == "INPUT") {
                    perCtl.autoNumeric('init', { vMin: '-999999999.99', mDec: 0, aSep: '' }).addClass("ui-number");
                    dt = "NUMBER"; st = "Number";
                }
                else if (type == "decimal" && perCtl.prop("tagName") == "INPUT") {
                    perCtl.autoNumeric('init', { vMin: '-999999999.99', mDec: 2, aSep: '' }).addClass("ui-number");
                    dt = "DECIMAL"; st = "Number";
                }                
                else {

                }


                if (type == "bool") {
                    dt = "CHECKBOX"; st = "Bool";
                    perCtl.checked(result);
                    if (perCtl.attr("no-switch")!="1"){
                        if (Erp.Responsive) {
                            var ctr = $("<div id='" + perCtl.ID() + "-Ctr' class='erp-Field switch entity entity-field erp-control erp-Checkbox '><label><span class='lever'></span></label></div>");
                            perCtl.after(ctr);
                            ctr.find(".lever").before($(perCtl))
                        }
                        else
                        perCtl.CheckBoxX();
                    }
                }
                else if (type != "filter" && type != "list" && type != "multiselect") {
                    perCtl.val(result);
                }

                var inf = { DataType: dt, Type: st, ID: perCtl.NewID().attr("id"), Name: "" };
                Erp.FieldInfo_Prog.push(inf);
            }
        }



    </script>
</body>
</html>
