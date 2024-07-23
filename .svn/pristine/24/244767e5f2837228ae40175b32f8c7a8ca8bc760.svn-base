<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Main.aspx.cs" Inherits="SensysErp.Main.Main" %>

<!DOCTYPE html>

<html runat="server" id="htmlDoc" class="docHTML" xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
     <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/modernizr.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/System.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery-ui-1.10.3.custom.min.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jqHelper.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CustomControls.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/CustomControl/CustomControl.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/fonts/font.css")%>

    <%# HelperLib.Web.WebResources.GetResource("~/Css/bluegloss/jquery-ui-1.10.3.custom.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Css/materialize.min.css")%>   
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/materialize.min.js")%>
 
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/dragend.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/UiHelper.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/moment.min.js")%>       
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Erp.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Ui.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Fn.js")%>
  
    <script>
        Erp.Responsive = true;
        if (!Erp.IsCrossOrigin()) {
            
            if (getQS("_notools") == "1" || (window.frameElement && $(window.frameElement).attr("showtools") != "1")) {
                $("#divCommands").hide();
                $("#<%#form1.ClientID%>").css("padding-top", "0");
            }

            if (window.frameElement && ($(window.frameElement).parent().hasClass("Popup") || parent.IsPopupWin)) {
                $(document.documentElement).addClass("NoPadding PopupWin");
                if ($(document.documentElement).hasClass("form-v2")) {
                    parent.$(window.frameElement).closest(".Popup").find(".pClose").hide()
                    $(document.documentElement).removeClass("NoPadding");
                }
                window.IsPopupWin = true;
                if (parent.IsPopupWin || getQS("_qadd") == "1") {
                    $("#divCommands").find("._close").css({ visibility: "visible", "margin-left": "-15px", "font-size": "28px" });
                }
            }
        }
    </script>
    <style>
        .DashBoard #HeaderPanel{
            display:none;
        }
    </style>

</head>
<body class="responsive pg-main">
    <form id="form1" runat="server">
        <asp:ScriptManager ID="ScriptManager1" runat="server" EnablePageMethods="true">
        </asp:ScriptManager>
       <%= HelperLib.Web.WebResources.GetResource("~/css/base.css")%>
       <%= HelperLib.Web.WebResources.GetResource("~/Css/main.css")%>
       <style><%= ErpModel.Globals.Users.CustomTheme%></style>
       <%= Erp.Base.Utils.Utils.GetResourcePath(ErpModel.Globals.AppManager.CurrentAppScriptResource,true)%>
       <%= Erp.Base.Utils.Utils.GetResourcePath(ErpModel.Globals.AppManager.CurrentAppCssResource,true)%>
        <div style="opacity:0;position:absolute;top:-10000px;"> 
            <input id="txtUsername_for_gac" type="text" value="" name="Username_for_gac">
            <input  type="password"  id="txtPassword_for_gac" name="Password_for_gac"/>            
            <input type="submit" onclick="return false" value="cancel enter" style="display:none" />         
        </div>
        <div id="divCtr" >
            <asp:Panel runat="server" Visible="false" ID="pnlFrame">
                    <span style="" class="wfTitle">Take Action </span>
                    <iframe runat="server" id="ifrWf" style="width: 99%; height: 53px;margin-top: 10px;" frameborder="0"></iframe>
                </asp:Panel>
             <asp:Literal runat="server" EnableViewState="false" Mode="PassThrough" ID="MainContainer"></asp:Literal>
        </div>
        <asp:Panel runat="server" Style="display: none" ID="PnlWebControls"></asp:Panel>
        <div id="ifrCtr">
            <iframe style="height: 100%; width: 1px; min-width: 100%" id="ifrDetailsWindow" ismobile="1"  frameborder="0"></iframe>
        </div>
        <div id="commonFileCtr" style="display: none; padding: 15px;">
           <span id="CommonFileUploadField_Parent" style="margin-top: 20px;display: block;"></span>
            <a class="default-link viewFile" target="_blank" href="javascript:void(0)" style="margin: 10px 10px; display: block;">View Uploaded File</a>
            <span  style="font-size:13px;display:none" class="entity entity-label  autoWidth label-warning"><span class="span"><span class="field-icon"></span><span style="word-break: break-word;" class="field-title "></span></span></span>
            <div style="text-align: right">
                <a class="mdl-button small GreenButton btnupload" onclick="_acceptCommonUpload()" href="javascript:void(0)"><span style="font-family:FontAwesome;margin-right:5px">&#xf093;</span>Upload</a>
                <a onclick="_cancelCommonUpload()" href="javascript:void(0)" class="mdl-button small RedButton">Cancel</a>
            </div>
        </div>
        <asp:Literal runat="server" EnableViewState="false" Mode="PassThrough" ID="CssRender"></asp:Literal>
    </form>
    <style>
        body {
            overscroll-behavior-y:contain;
        }
        html.ios, .ios body {
            height:100%;
             overflow: auto;
    -webkit-overflow-scrolling: touch;
        }
         #ifrCtr
        {
            position: absolute;
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            background-color: #fff;
            display: none;
           overflow:hidden; 
          
        }
        .touch #ifrCtr {
             -webkit-overflow-scrolling: touch;
            overflow-y: scroll;
        }

        .erp-TabPanel {
            display:none;
        }
        .erp-TabPanel.dragend-page {
            display:block;
            height:auto !important;
        }
        .DashBoard #HeaderPanel{
            display:none;
        }
        .DashBoard .responsive .RadGrid {
            box-shadow:none;
        }
        .NoPadding main {
            padding:0;
            padding-top: 8px;
        }

        #pnlFrame {
            border: 1px solid var(--border-color);
            box-shadow: 2px 2px 20px var(--shadow1);
            padding: 5px;
            margin-bottom: 20px;
        }
        .wfTitle {
            font-size: 18px;
        }
        .wfTitle:before {
            content: "\f024";
            font-family: fontawesome;
            display: inline-block;
            margin-right: 5px;
        }
        .PopupWin #header-show-sidenav {
            display:none !important;
        }
        .PopupWin #header-page-title {
            margin-left:10px !important;
        }
    </style>
    <script>

        //$("input:-internal-autofill-selected").val('');
    </script>
    <script>
        if (Modernizr.isios) {
            $(document.documentElement).addClass("ios");
            $("#ifrDetailsWindow").attr("scrolling", "no");
        }
        if (frameElement && frameElement.id == "ifrCustomLauncher")
            $(document.documentElement).addClass("rptLauncher");
        Erp.PageTheme = "<%=PageTheme%>";
        Erp.IsAddEditPage = true;
        Erp.DashBoardMode = (getQS("_dash") == "1");
        
        if (getQS("_dash") == "1" || getQS("_noPadding") == "1")
            $(document.documentElement).addClass("NoPadding");
        if (getQS("_nobtns") == "1")
            $("#spnWinCmd").hide();

        if (getQS("_notools") == "1") {
            $("#divCommands").hide();
            $("#<%=form1.ClientID%>").css("padding-top", "0");
        }
        

        if (Erp.LayoutMode == "R")
            $("#PageTitle").addClass("Locked");
        $()
        $("#headerPanel,#footerPanel").find(".cmdBtn").parent().addClass("cmdPanel");

        if (!$.isEmpty(window.__approvalUrl)) {
            $("#MainPanel").prepend($("#pnlFrame"));
            $("#ifrWf").attr("src", window.__approvalUrl+"&_rspv=1")
        }
        ////$("#ifrDetailsWindow").on("load", function () { Erp.ToggleMobileLoader(false); })

        $(function () {
            //$('.tabs').tabs({ swipeable: false });
            $('.collapsible').each(function () { if ($(this).hasClass("gridfilter"))return true;$(this).collapsible({ accordion: !$(this).hasClass("expandable") }); });
            for (var i = 0; i < GridList.length; i++)
                $("#" + GridList[i].ID + "_GridHeader").on("mousedown", function (e) { e.stopPropagation(); })
            
        });
        $("#ifrDetailsWindow").on("load", function () { Erp.ToggleMobileLoader(false); })
        Erp.Init();
        relocateWebControls("<%=PnlWebControls.ClientID%>");

        var topBanner = $("#nav-topBar");
        var navBar = topBanner.next();
        topBanner.parent().height(topBanner.outerHeight() + topBanner.next().outerHeight())
        if (topBanner.isVisible()) {            
            topBanner.parent().css("overflow", "hidden");
            //topBanner.next().css("top", topBanner.outerHeight())

        }
        else
            navBar.addClass("sticky");

        //if (Erp.Touch && GridList.length > 0 && (Erp.LayoutMode == "G" || Erp.LayoutMode == "RG")) {            
        //    var el = $('#' + GridList[0].ID + '_ctl00_TopPager')
        //    el.width($('#' + GridList[0].ID).outerWidth())
        //    el.addClass('sticky').css("top", $("#HeaderPanel").outerHeight());
        //    el.next().css("margin-top", el.outerHeight()); 
        //}

        if (Erp.Touch && GridList.length > 0 && (Erp.LayoutMode == "G" || Erp.LayoutMode == "RG"))
            $("body").css("padding-bottom","200px")//fix header flickering while scrolling

        Erp.BeginLoadData();

        if (Erp.Touch) {
            for (var i = 0; i < GridList.length; i++)
                $("#" + GridList[i].ID + "_GridData").on("touchstart", function (e) {
                    if ($(this).outerWidth() < $(this).children().eq(0).outerWidth())
                        e.stopPropagation();
                });
        }
      
       
        $(window).scroll(function () {
            if (Modernizr.isios || Erp.DashBoardMode)
                return;
            if (topBanner.isVisible()) {
                if ($(window).scrollTop() > topBanner.outerHeight())
                    navBar.addClass("sticky")
                else
                    navBar.removeClass("sticky")
                //if (!Erp.Touch)
                topBanner.css("transform", "translate(0," + ($(window).scrollTop() * 0.65) + "px)");
            }
            if (Erp.Touch && GridList.length > 0 && (Erp.LayoutMode == "G" || Erp.LayoutMode == "RG")) {
                if ($('#' + GridList[0].ID).hasClass("expandFilter"))
                    return;
                var el = $('#' + GridList[0].ID + '_ctl00_TopPager')
                var hdrHeight = navBar.outerHeight();

                var offTop = el[0].ofTp ? el[0].ofTp : (el[0].ofTp = el[0].offsetTop, el[0].offsetTop);
                //return;
                if ($(window).scrollTop() >= (offTop - hdrHeight)) {
                    el.width(el.outerWidth())
                    el.addClass('sticky').css("top", hdrHeight);
                    el.next().css("margin-top", el.outerHeight());
                }
                else {
                    el.removeClass('sticky');
                    el.next().css("margin-top", "");
                    el.width("100%")
                }
            }
        });
        

        $(window).on("resize", $.debounce(250, function () {           
            redrawPageLayout();
        }));
        function redrawPageLayout() {
            var w = 0; $("#header-nav-wrapper").children().each(function () { if ($(this).attr("id") != "header-page-title") w += $(this).outerWidth(); });
            $("#header-page-title").width($("#header-nav-wrapper").width() - w - 75)
            for (var i = 0; i < GridList.length; i++) {
                if (GridList[i].IsLookup != 1)
                    SetGridWidth(GridList[i].ID);
            }
            resizeGridHeight();
            for (var i = 0; i < Erp.OnResize.EventList.length; i++) {
                if (typeof Erp.OnResize.EventList[i] == "function")
                    Erp.OnResize.EventList[i]();
            }
            
        }
        function resizeGridHeight() {
            if (getQS("_dash") == "1")
                return;
            if (Erp.LayoutMode != "G" && Erp.LayoutMode != "RG")
                return;
            var grid = $(".rgDataDiv");
            if (grid.parent().attr("disablescroll") == "1")
                return;
            //alert($(window).height() - (grid.offset() ? grid.offset().top : 0) - 75)
            grid.css("height", "");
            if (grid.closest(".RadGrid").hasClass("expandFilter"))
                return;
            var gap = 20 + (grid.parent().find(".rgPager").isVisible() ? 32 : 0) + (grid.parent().find(".rgFooter").isVisible() ? 32 : 0);

            grid.css("max-height", $(window).height() - (grid.offset() ? grid.offset().top : 0) - gap - 20);
            grid.css("height",grid.css("max-height"));
            window.setTimeout(function () { if (GridList.length > 0) SetGridWidth(GridList[0].ID) }, 1000);
        }

        function __ShowHomeSideNav() {
            var win = window;
            var trials = 0;
            while (!win.Erp.MobileHome) {
                win = win.parent;
                trials++;
                if (trials > 20)
                    return;
            }
            win.$("#header-show-sidenav").children("i").trigger("click");
        }

        function pageLoad() {
            Erp.ToggleMobileLoader(false);
            if (!Erp.LoadDataComplete) {
                Erp.PageLoadSkip = true;
                return;
            }
            Erp.PageLoadSkip = false;
            BindGrids(true);
            for (var i = 0; i < GridList.length; i++) {
                //toggleGridFilter(GridList[i].ID, false);
                if (window.$telerik && $telerik.isSafari) {
                    $("#" + GridList[i].ID + "_GridData").on("scroll", function (e) {
                        var id = $(e.srcElement).attr("id").replace("_GridData", "_GridHeader");
                        $("#" + id).scrollLeft($(e.srcElement).scrollLeft());
                    })
                }
            }



            Erp.LoadComplete();
            resizeGridHeight();
            
        }
       

        Erp.SaveData = function (cl, _flds) {
            var refs = [];
            if (typeof _flds == "string" && !$.isEmpty(_flds))
                saveSelectedFields = "," + _flds.toLowerCase() + ",";
            else
                saveSelectedFields = "";
            for (var i = 0; i < Erp.FieldInfo.length; i++) {
                var f = Erp.FieldInfo[i];
                if (saveSelectedFields.length > 0) {
                    if (saveSelectedFields.indexOf("," + f.Name.toLowerCase().replace(getQS("EID").toLowerCase() + "_", "") + ",") < 0)
                        continue;
                }
                if (typeof f.OnValid == "function") {
                    refs = $.union(refs, hasDbReferences(f.OnValid, "Valid"));
                }
                if (typeof f.OnSave == "function") {
                    refs = $.union(refs, hasDbReferences(f.OnSave, "FieldSave"));
                }
            }
            for (var i = 0; i < Erp.OnSave.EventList.length; i++) {
                if (typeof Erp.OnSave.EventList[i] == "function")
                    refs = $.union(refs, hasDbReferences(Erp.OnSave.EventList[i], "Save"));
            }
            if (refs.length > 0) {
                evaluateDbReferences(refs, Erp._SaveData, cl);
            }
            else
                Erp._SaveData(cl);
        }

        Erp._SaveData = function (cl) {
            if (!Erp.ValidateData())
                return;
            var _d = {};
            for (var i = 0; i < Erp.OnSave.EventList.length; i++) {
                if (typeof Erp.OnSave.EventList[i] == "function")
                    if (Erp.OnSave.EventList[i](_d) == false)
                        return;
            }
            var data = Erp._gatherData();
            data = $.extend(data, _d);
            Erp.HideMessage();
            //if ($("#footerPanel").isVisible())
            Erp.ShowBusyMessage("Saving...");
            Erp.WebApi.SaveData(data, function (r) { PageMethodSuccess(r, cl); }, PageMethodError);
        }
        function PageMethodSuccess(data, cl) {
            Erp.HideBusyMessage(false);
            if (!data || data.StatusCode == 255) {
                Erp.ShowMessage("Error Occured", "error");
                return;
            }
            if (data["Script"]) {
                try {
                    eval(data["Script"]);
                }
                catch (err) {
                }
            }
            if (data["Type"] == "SaveData") {
                if (data["Success"] == true) {
                    if (getQS("_qadd") == "1") {
                        Erp.CloseWindow();
                        return false;
                    }
                    if (!$.isEmpty(getQS("_lookupframe"))) {
                        var ifr = null;
                        if (getQS("_lookupframe") == "parent")
                            ifr = (frameElement ? parent : opener);
                        else {
                            ifr = (frameElement ? parent.$("#" + getQS("_lookupframe")) : opener.$("#" + getQS("_lookupframe")));
                            ifr = ifr.length > 0 ? ifr[0].contentWindow : null;
                        }
                        if (ifr)
                            ifr.Erp.Grid.Refresh(getQS("_gid") ? getQS("_gid") : "dgData");
                        Erp.CloseWindow();
                        return false;
                    }
                    Erp.FormHash = Erp._getFormHash();
                    ItemID = data["@ID"];
                    Erp.RecordID = ItemID;
                    var obj = eval(data["PKIDLIST"]);
                    if (typeof obj == "object")
                        PkIds = obj;
                    for (var i = 0; i < GridList.length; i++) {
                        $("#" + GridList[i].ID).removeAttr("disabled").parent().removeClass("entity-disabled");
                        $("#" + GridList[i].ID + "_cmd").setEnable(true, true)
                    }

                    var hasDoc = false;
                    $(Erp.DocEditors).each(function () {
                        var ifr = $("#" + this)[0];
                        if (!ifr)
                            return true;
                        if (!ifr.DocumentArgs)
                            ifr.DocumentArgs = {};
                        ifr.DocumentArgs.RecordID = ItemID;
                        var ed = Erp.Document.GetEditor(this);
                        if (ed && ed.HasUnsavedChanges()) {
                            hasDoc = true;
                            Erp.Document.Save(this);
                        }
                        else if (ed && ifr.contentWindow && typeof ifr.contentWindow.EditorCallbackComplete == "function") {
                            hasDoc = true;
                            ifr.DocumentArgs.Action = "Update";
                            ifr.contentWindow.EditorCallbackComplete();
                        }

                    });

                    _delayFunctionListExec(Erp.OnSaveSuccess.EventList, "OnSaveSuccess",
                        function () {
                            RefreshFields(data);
                            refreshParent(typeof cl == "undefined" ? GridList.length <= 0 && !hasDoc : cl);
                        });
                    if (typeof window._triggerAddBtn == "function") {
                        window._triggerAddBtn();
                        window._triggerAddBtn = null;
                    }

                    if (window._triggerAddBtn) {
                        window._triggerAddBtn.trigger("click");
                        window._triggerAddBtn = null;
                    }


                }
                else {
                    Erp.ShowMessage(data["ErrorMessage"], "error")
                }

            }
            //if (data["Script"])
            //    eval(data["Script"]);
        }
        function PageMethodError(data) {
            Erp.HideBusyMessage(false);
            Erp.ShowMessage(data.get_message(), "error")
            for (var i = 0; i < Erp.OnSaveError.EventList.length; i++) {
                if (typeof Erp.OnSaveError.EventList[i] == "function")
                    _delayFunctionExec(Erp.OnSaveError.EventList[i], "OnSaveError");
            }
        }

        function refreshParentGridWF(data) {
            if (Erp.IsCrossOrigin())
                return null;
            if (typeof ParentWin == "object") {
                data["GridID"] = window.RefGrid;
                ParentWin.RefreshGridOnWFComplete(data);
            }
            else if (window.frameElement && !$.isEmpty(window.frameElement.RefGrid)) {
                var win = window.parent;
                if (window.frameElement.ParentWin) {
                    win = window.frameElement.ParentWin;
                    data["GridID"] = window.frameElement.RefGrid;
                }
                win.RefreshGridOnWFComplete(data);
            }
        }
        function refreshParent(close, data) {
            if (Erp.IsCrossOrigin())
                return null;
            if (typeof ParentWin == "object") {
                ParentWin.RefreshGrid(RefGrid);
                if (close)
                    closeForm();
            }
            else if (window.frameElement && !$.isEmpty(window.frameElement.RefGrid)) {
                var win = window.parent;
                if (window.frameElement.ParentWin)
                    win = window.frameElement.ParentWin;
                if ($(window.frameElement).parent().hasClass("Popup"))
                    win.RefreshGrid(window.frameElement.RefGrid);
                else
                    window.setTimeout(function () { win.RefreshGrid(window.frameElement.RefGrid); }, 800);
                if (close)
                    closeForm();

            }
            if (close)
                closeForm();
        }
        function refreshParentFields(data) {
            if (Erp.IsCrossOrigin())
                return null;
            if (typeof ParentWin == "object") {
                ParentWin.RefreshFields(data);
            }
            else if (window.frameElement && typeof parent.RefreshFields != "undefined") {
                var win = window.parent;
                if (window.frameElement.ParentWin)
                    win = window.frameElement.ParentWin;
                win.RefreshFields(data);
            }
        }



        function toggleDetailsForm(show, url,z) {
            var ifr = $("#ifrCtr");
            if (show) {
                $("#divCtr").data("scrollTop", $(document.body).scrollTop());
                $("#divCtr").css("opacity", 0.3);
                ifr.node(0).setVisible(false);
                if (ifr.node(0)[0].contentWindow && ifr.node(0)[0].contentWindow.document)
                    $(ifr.node(0)[0].contentWindow.document.body).setVisible(false);
                ifr.stop(true, true).css("top", $(window).height()).show().animate({ top: 0 }, 250, "easeInSine", function () { $(this).node(0).setVisible(true).attr("src", url); $("#divCtr").hide(); })
                if (z > 100)
                    ifr.css("z-index", z);
                else
                    ifr.css("z-index", "");
            }
            else {
                $("#divCtr").show();
                $("#divCtr").css("opacity", "");
                ifr.stop(true, true).animate({ top: ifr.outerHeight() }, 250, "easeInSine", function () { $("#ifrCtr").hide(); $(document.body).scrollTop($.defaultVal($("#divCtr").data("scrollTop"), 0)); redrawPageLayout(); })
            }
        }

        function refreshForm() {
            var ifr = $("#ifrCtr");
            if (ifr.isVisible()) {
                ifr.node(0).attr("src", ifr.node(0).attr("src"));
            }
            else
                window.location = window.location;
        }
        function popoutForm() {
            var ifr = $("#ifrCtr");
            if (ifr.isVisible()) {
                window.open(ifr.node(0).attr("src"));
            }
            else
                window.open(window.location);
        }
      
    </script>
    <script>
        //select/multiselect

        function gridSelectItem(sender, args) {
            var tr = $(args.get_gridDataItem().get_element());
            var recID = tr.attr("pk");
            var text = __getTitle(args);
            var gridId = $(sender.get_element()).attr("id");
            var keys = _getKeys(tr,gridId);
            var ck = $("#" + gridId).attr("clientkeys").split(',');
            SelectItem(recID, text, keys, tr);
        }
        function __getTitle(args) {
            var cols = args.get_tableView().get_columns();
            var c = null;
            for (var i = 0; i < cols.length; i++) {
                if (cols[i]._oldTitle == "Title") {
                    c = $(args.get_gridDataItem().get_cell(cols[i].get_uniqueName()));
                    break;
                }
            }
            if (!c)
                c = $(args.get_gridDataItem().get_element()).node(1);
            if (c.children(".cell").length > 0)
                return c.children(".cell").text();
            else
                return c.text();
        }
        function _getKeys(tr, gridId) {
            var keys = [];
            var ck = $("#" + gridId).attr("clientkeys").split(',');
            for (var i = 0; i < ck.length; i++)
                if (!$.isEmpty(ck[i]))
                    keys.push(tr.attr(ck[i]));
            return keys;
        }
        function __GridDataBound(r) {
            if ($("#" + r["GridID"]).attr("dropdownmode") != "1")
                return;
            $("#" + r["GridID"]).show();
            $("#" + r["GridID"] + "_GridHeader").parent().show();
            $("#" + r["GridID"] + "_ctl00_Pager").setDisplay(Erp.Grid.GetRowCount(r["GridID"]) > 30);
            var _CurrentFieldId = $("#" + $("#divSearchListCtr").data("CurrentField"));
            if (Erp.Touch || (_CurrentFieldId && _CurrentFieldId.data("FieldType") != "SINGLESELECT" && _CurrentFieldId.data("FieldType") != "SINGLESELECT_TABLE")) {
                if (Erp.Grid.GetRowCount(r["GridID"]) > 15) {
                    $("#" + r["GridID"]).closest(".ifr").addClass("showGridFlt");
                    $("#" + r["GridID"] + "_FltInput").parent().show().closest(".grid-filter").show();
                    if (!Erp.Responsive)
                        $("#" + r["GridID"] + "_GridHeader").find(".rgFilterRow").show();
                }
            }
            else {
                $("#" + r["GridID"]).attr("alwaysHideSrch","1")
                $("#" + r["GridID"] + "_FltInput").closest(".grid-filter").hide();
                $("#" + r["GridID"] + "_GridHeader").find(".rgFilterRow").hide();
            }
            if ($("#" + r["GridID"]).attr("alwaysHideSrch")=="1") {
                $("#" + r["GridID"] + "_FltInput").closest(".grid-filter").hide();
                $("#" + r["GridID"] + "_GridHeader").find(".rgFilterRow").hide();
            }
            var cols = $find(r["GridID"]).get_masterTableView().get_columns();
            for (var i = 0; i < cols.length; i++)
                if (cols[i]._oldTitle == "Title") {
                    _ColTitleIndex = i;
                }
            if ($("#" + r["GridID"]).data("ScheduleGridBinding")) {
                $("#" + r["GridID"]).removeData("ScheduleGridBinding");
                Erp.Grid.Refresh(r["GridID"]);
            }
        }

        function __openLookupForm(btn) {
            btn = $(btn);
            var sid = btn.attr("sid");
            var elc = Erp.Lookup[sid];
            elc = elc ? elc : {};
            var obj = {
                "Action": "ADDFORM", "Entity": btn.attr("eid"), "Form": $.defaultVal($.defaultVal(btn.attr("fc"), elc.Form),"lookup"), "Responsive": 1,
                "Params": _getQsParamsString(true) + ($.isEmpty(elc.FormParams) ? "" : elc.FormParams),
                "Location": "Popup",
                "PopHt": ($.isEmpty(elc.FormHeight) ? "400" : elc.FormHeight), "PopWd": ($.isEmpty(elc.FormWidth) ? "700" : elc.FormWidth),
                zIndex: 5000, showClose: true
            };
            var o = null;
            if (typeof onLookupDialogOpening == "function")
                o = onLookupDialogOpening(obj);
            if (o != null && o != undefined)
                obj = o;
            obj.Params = $.defaultVal(obj.Params, "") + "&_nobtns=1&_lookupframe=parent&_gid=" + btn.attr("gid");
            Erp.OpenWindow(obj);
        }

        var prevlookupSearchText = "";
        function filterSingleSelectGridRecords(txt, gridId) {
            gridId = gridId + "_grid";
            if ($("#" + gridId).data("lookupSearchText") == txt)
                return;
            $("#" + gridId).data("lookupSearchText", txt);
            $("#" + gridId + "_FltList").prop("selectedIndex", 0);
            if ($("#" + gridId).data("GridBinding")) {
                $("#" + gridId).data("ScheduleGridBinding", true);
            }
            else
                Erp.Grid.Refresh(gridId);
        }
        function changeSingleSelectGridRowFocus(up, gridId) {
            gridId = gridId + "_grid";
            var _CurrentFieldId = $("#divSearchListCtr").data("CurrentField");
            if (!_CurrentFieldId)
                return;
            var tr = null;
            var id = $("#" + gridId + "_ctl00").data("currentHighlightRow");
            if (id)
                tr = $("#" + id);
            if (tr == null || tr.length == 0)
                tr = $("#" + gridId + "_ctl00").children("tbody").children(":visible").eq(0);
            else {
                var oldtr = tr;
                oldtr.removeClass("rgHoveredRow rgSelectedRow ");
                tr = up ? tr.prev() : tr.next();
                while (!tr.isVisible()) {
                    var _tr = up ? tr.prev() : tr.next();
                    if (!_tr.exists()) {
                        if (up)
                            _tr = oldtr.parent().children().last();
                        else
                            _tr = oldtr.parent().children().first();
                        //Telerik.Web.UI.Grid.NavigateToPage('dgData_ctl00', up ? "Prev" : 'Next');
                        //break;
                    }
                    tr = _tr;
                }
                if (!tr.isVisible())
                    tr = oldtr;

            }

            if (!tr.exists())
                return;
            tr.addClass("rgHoveredRow");
            $("#" + gridId).scrollTop(tr.offset().top + $("#" + gridId).scrollTop() - $("#" + gridId).outerHeight() + 60);
            $("#" + gridId + "_ctl00").data("currentHighlightRow", tr.attr("id"));
            var txt = $("#" + _CurrentFieldId);
            var t = (tr.cells(_ColTitleIndex).children(".cell").length > 0 ? tr.cells(_ColTitleIndex).children(".cell").text() : tr.cells(_ColTitleIndex).text());
            txt.val(t);
            txt.data("_TmpRecordID", tr.attr("pk"));
            txt.data("_TmpRow", tr);
            txt.data("_TmpText", txt.val());
            txt.data("_TmpKeys", _getKeys(tr, gridId));
        }
    </script>
    <script>
        if (typeof Telerik != "undefined") {
            if (typeof Telerik.Web.UI.GridScrolling != "undefined") {
                Telerik.Web.UI.GridScrolling.prototype.onGridFrozenResized = function () {
                    var e = Telerik.Web.UI.Grid.getScrollBarHeight();
                    if ($telerik.isIE) {
                        ++e;
                    }
                    if (this.gridDataTableWidth != this._owner.GridDataDiv.clientWidth) {
                        this.gridDataTableWidth = this._owner.GridDataDiv.clientWidth;
                        if (this.gridMasterTableWidth > this.gridDataTableWidth) {
                            this._frozenScroll.style.height = e + "px";
                            if (this._owner.GridDataDiv.style.overflowX != null) {
                                this._owner.GridDataDiv.style.overflowX = "hidden";
                            } else {
                                this._frozenScroll.style.marginTop = "-" + e + "px";
                                this._frozenScroll.style.zIndex = 99999;
                                this._frozenScroll.style.position = "relative";
                            }
                            if ((window.netscape)) {
                                this._frozenScroll.style.width = this._owner.GridDataDiv.offsetWidth - e + "px";
                                this._frozenScroll.style.marginRight = e + "px";
                            }
                            if (this._owner.GridHeaderDiv && this._owner.GridDataDiv) {
                                if ((this._owner.GridDataDiv.clientWidth == this._owner.GridDataDiv.offsetWidth)) {
                                    if (typeof (this._frozenScroll.style.overflowX) != "undefined" && typeof (this._frozenScroll.style.overflowY) != "undefined") {
                                        this._frozenScroll.style.overflowX = "auto";
                                        this._frozenScroll.style.overflowY = "hidden";
                                        if (window.netscape) {
                                            this._frozenScroll.style.width = parseInt(this._frozenScroll.style.width, 10) + e + "px";
                                            this._frozenScroll.style.marginRight = 0;
                                        }
                                    }
                                }
                            }
                            if ($telerik.isIE8) {
                                this._frozenScroll.style.overflowX = "scroll";
                            }
                        } else {
                            this._frozenScroll.scrollLeft = 0;
                            this._frozenScroll.style.height = 0;
                            var b = this._owner.get_masterTableView().get_columns();
                            for (var c = this._owner.ClientSettings.Scrolling.FrozenColumnsCount, d = b.length; c < d; c++) {
                                if (!b[c].get_visible()) {
                                    this._owner.get_masterTableView().showColumn(c);
                                }
                            }
                        }
                    }
                }
            }
            if (typeof Telerik.Web.UI.GridSortExpressions != "undefined") {
                Telerik.Web.UI.GridSortExpressions.prototype.toString = function (grid) {
                    var d = [];

                    for (var b = 0, a = this.get_count() ;
                    b < a;
                    b++) {
                        var c = this.getItem(b);
                        var col = getUniqueNameFromField(this.ownerGrid, c.get_fieldName());

                        var tbl = "", fld = col.split('~')[0];
                        if (col.indexOf("!") > -1) {
                            tbl = col.split('!')[0];
                            fld = col.split('!')[1].split('~')[0];// changed _fieldName to _columnUniqueName;
                        }
                        fld = (tbl == "" ? fld : tbl + "." + fld);

                        d[d.length] = String.format("{0} {1}", fld, this.sortOrderAsString(c.get_sortOrder()));
                    } return d.join(",");
                }
            }

            if (typeof Telerik.Web.UI.GridFilterExpression != "undefined") {
                Telerik.Web.UI.GridFilterExpression.prototype.toString = function (g) {
                    var e = "";

                    if (typeof (g) != "undefined") {
                        e = g;
                    }
                    var tbl = "", b = "";
                    if (this._columnUniqueName.indexOf("!") > -1) {
                        tbl = this._columnUniqueName.split('!')[0];
                        b = this._columnUniqueName.split('!')[1].split('~')[0];// changed _fieldName to _columnUniqueName;
                    }
                    else
                        b = this._columnUniqueName.split('~')[0];

                    if (e != "") {
                        b = String.format("{0}.{1}", e, b);
                    } var i = "";
                    if (this._filterFunction != null) {
                        var d = gridFilterSql(tbl, this.get_dataTypeName());
                        var h = Telerik.Web.UI.GridFilterFunction.parse(this._filterFunction);
                        var c = d[h];
                        if (c != null) {
                            if (this._checkListFilterValues && this._checkListFilterValues.length > 0 && h == Telerik.Web.UI.GridFilterFunction.EqualTo) {
                                var i = [];
                                for (var a = 0;
                                a < this._checkListFilterValues.length;
                                a++) {
                                    var f = this.getQuotedValue(this._checkListFilterValues[a]);
                                    i[i.length] = String.format(c, this._fieldName, f, "");
                                } return "(" + i.join(" OR ") + ")";
                            } else {
                                if (h != Telerik.Web.UI.GridFilterFunction.Between && h != Telerik.Web.UI.GridFilterFunction.NotBetween) {
                                    if ((this.get_dataTypeName() == "System.String" || this.get_dataTypeName() == "System.Char") && h == Telerik.Web.UI.GridFilterFunction.Contains || h == Telerik.Web.UI.GridFilterFunction.DoesNotContain || h == Telerik.Web.UI.GridFilterFunction.StartsWith || h == Telerik.Web.UI.GridFilterFunction.EndsWith) {
                                        i = String.format(c, b, this._fieldValue);
                                    } else {
                                        i = String.format(c, b, this.getQuotedValue(this._fieldValue));
                                    }
                                } else {
                                    var j = this._fieldValue.split(" ")[0];
                                    var k = (this._fieldValue.split(" ").length > 0) ? this._fieldValue.split(" ")[1] : "";
                                    i = String.format(c, b, this.getQuotedValue(j), this.getQuotedValue(k));
                                }
                            }
                        }
                    } return i;
                }

                Telerik.Web.UI.GridFilterExpression.prototype.getQuotedValue = function (a) {
                    if (this.get_dataTypeName() == "System.Boolean") {
                        return a === true ? 1 : 0;
                    }
                    if (this.get_dataTypeName() == "System.DateTime") {
                        var arr = a.split(new RegExp([',', ' ', '-', '\\\\', '/'].join('|'), 'g'));
                        if (arr[0].toString().length < 4) {
                            a = (arr[2] ? arr[2] : "1") + "-" + (arr[1] ? arr[1] : "1") + "-" + arr[0];
                        }
                    }
                    if (this.get_dataTypeName() == "System.String" || this.get_dataTypeName() == "System.Char" || this.get_dataTypeName() == "System.DateTime" || this.get_dataTypeName() == "System.TimeSpan" || this.get_dataTypeName() == "System.Guid") {
                        return String.format("N'{0}'", a);
                    } return a;
                }
            }
            if (typeof Telerik.Web.UI.GridScrolling != "undefined") {
                Telerik.Web.UI.GridScrolling.prototype._updateDataDivScrollPos = function (a) {
                    if (!a) {
                        return;
                    } if (!this.isFrozenScroll) {
                        if (this._owner.GridHeaderDiv) {
                            if (a == this._owner.GridHeaderDiv) {
                                if ($telerik.isSafari) {
                                    if (this._owner.GridHeaderDiv.scrollLeft && this._owner.GridHeaderDiv.scrollLeft != this._owner.GridDataDiv.scrollLeft) {
                                        //this._owner.GridDataDiv.scrollLeft = this._owner.GridHeaderDiv.scrollLeft;
                                    }
                                } else {
                                    this._owner.GridDataDiv.scrollLeft = this._owner.GridHeaderDiv.scrollLeft;
                                }
                            } if (a == this._owner.GridDataDiv) {
                                if ($telerik.isSafari) {
                                    if (this._owner.GridHeaderDiv.scrollLeft != this._owner.GridDataDiv.scrollLeft) {
                                        //this._owner.GridHeaderDiv.scrollLeft = this._owner.GridDataDiv.scrollLeft;
                                    }
                                } else {
                                    this._owner.GridHeaderDiv.scrollLeft = this._owner.GridDataDiv.scrollLeft;
                                }
                            }
                        } if (this._owner.GridFooterDiv) {
                            this._owner.GridFooterDiv.scrollLeft = this._owner.GridDataDiv.scrollLeft;
                        }
                    } else {
                        if (this._owner.GridHeaderDiv) {
                            if ($telerik.isSafari) {
                                if (this._owner.GridHeaderDiv.scrollLeft && this._owner.GridHeaderDiv.scrollLeft != this._owner.GridDataDiv.scrollLeft) {
                                    //this._owner.GridHeaderDiv.scrollLeft = this._owner.GridDataDiv.scrollLeft;
                                }
                            } else {
                                this._owner.GridHeaderDiv.scrollLeft = this._owner.GridDataDiv.scrollLeft;
                            }
                        } if (this._owner.GridFooterDiv) {
                            this._owner.GridFooterDiv.scrollLeft = this._owner.GridDataDiv.scrollLeft;
                        }
                    }
                }
            }
        }
        function getUniqueNameFromField(grid, fldName) {
            var cols = grid.get_masterTableView().get_columns();
            for (var i = 0; i < cols.length; i++) {
                if (cols[i].get_dataField() == fldName)
                    return cols[i].get_uniqueName();
            }
        }
        function gridFilterSql(tbl, type) {
            var a = {};
            var col = (tbl == "" ? "{0}" : tbl + ".[{0}]");
            if (type == "System.Boolean")
                col = "isnull(" + col + ",0)";
            a[Telerik.Web.UI.GridFilterFunction.Contains] = col + " LIKE N'%{1}%'";
            a[Telerik.Web.UI.GridFilterFunction.DoesNotContain] = col + " NOT LIKE N'%{1}%'";
            a[Telerik.Web.UI.GridFilterFunction.StartsWith] = col + " LIKE N'{1}%'";
            a[Telerik.Web.UI.GridFilterFunction.EndsWith] = col + " LIKE N'%{1}'";
            a[Telerik.Web.UI.GridFilterFunction.EqualTo] = col + " = {1}";
            a[Telerik.Web.UI.GridFilterFunction.NotEqualTo] = col + " <> {1}";
            a[Telerik.Web.UI.GridFilterFunction.GreaterThan] = col + " > {1}";
            a[Telerik.Web.UI.GridFilterFunction.LessThan] = col + " < {1}";
            a[Telerik.Web.UI.GridFilterFunction.GreaterThanOrEqualTo] = col + " >= {1}";
            a[Telerik.Web.UI.GridFilterFunction.LessThanOrEqualTo] = col + " <= {1}";
            a[Telerik.Web.UI.GridFilterFunction.Between] = "(" + col + " >= {1}) AND (" + col + " <= {2})";
            a[Telerik.Web.UI.GridFilterFunction.NotBetween] = "(" + col + " < {1}) OR (" + col + " > {2})";
            a[Telerik.Web.UI.GridFilterFunction.IsEmpty] = col + " = ''";
            a[Telerik.Web.UI.GridFilterFunction.NotIsEmpty] = col + " <> ''";
            a[Telerik.Web.UI.GridFilterFunction.IsNull] = col + " IS NULL";
            a[Telerik.Web.UI.GridFilterFunction.NotIsNull] = "NOT (" + col + " IS NULL)";
            return a;
        }


    </script>
</body>
</html>
