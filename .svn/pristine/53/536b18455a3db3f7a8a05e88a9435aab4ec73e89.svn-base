<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ui.aspx.cs" Inherits="SensysErp.UI" %>

<!DOCTYPE html>

<html runat="server" id="htmlDoc" class="docHTML" xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/modernizr.js")%>

    <%# HelperLib.Web.WebResources.GetResource("~/css/normalize.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/fonts/font2.css")%>     
    <%#"<link id='lnkTheme' href='../Css/"+(PageTheme != ""?PageTheme:"Grey")+"/jquery-ui-1.10.3.custom.css' rel='stylesheet' type='text/css' />"%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/CustomControl/CustomControl.css")%>
   

    

     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/json2.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/System.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery-ui-1.10.3.custom.min.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jqHelper.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/UiHelper.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CustomControls.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/moment.min.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Erp.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Ui.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Fn.js")%>
    <script>

        $(function () {

            $(document.documentElement).addClass("docHTML");
            $("#pagePanel").on("focus", ".entityInput ", function (event) {

                var i = $(event.target);
                var p = i.closest(".entity-field")
                p.addClass("entity-highlight")
            });
            $("#pagePanel").on("blur", ".entityInput ", function (event) {
                var i = $(event.target);
                var p = i.closest(".entity-field")
                p.removeClass("entity-highlight")
            });
        });

        function changeTheme(theme) {
            $("#lnkTheme").attr("href", "../Css/" + theme + "/jquery-ui-1.10.3.custom.css?ts=" + (new Date() / 1))
            $(document.documentElement).removeClass("GreyTheme DarkTheme BlueGlossTheme GreenTheme OrangeTheme RedTheme").addClass(theme + "Theme")
        }
    </script>
    <style>
        .viewport
        {
            min-width: 400px;
       
            font-size: 11px;
            font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;
              padding: 10px 0 0 20px;
        }
        .DashBoard .viewport {
            min-width: 100px;
        }
        .NoPadding #divCtr
        {
            padding: 0;
            margin:0;
        }
        #pagePanel
        {
             padding:0;
            margin:0;
        }
        .PopupWin #divCtr
        {
            padding: 5px 0 0 10px;
            margin:0;
        }
        form
        {
            padding-top:40px
        }
        .PopupWin form
        {
            padding-top:25px
        }
    </style>
</head>
<body class="docBody" >
    <span id="spnWorking" class="working entity entity-label label-warning"></span>
    <form id="form1"  runat="server">
        <asp:ScriptManager ID="ScriptManager1" runat="server" EnablePageMethods="true">
        </asp:ScriptManager>
      
        <div style="visibility:hidden;position:absolute;top:-100px;">
            <input type="text" id="PreventChromeAutocomplete" name="PreventChromeAutocomplete" autocomplete="fake-text" />
            <input type="submit" onclick="return false" value="cancel enter" style="display:none" />
            <input style="display1:none" type="text" name="fakeusernameremembered"/>
            <input style="display1:none" type="password" name="fakepasswordremembered"/>
        </div>
        
       <%= HelperLib.Web.WebResources.GetResource("~/css/base.css")%>
        <%= HelperLib.Web.WebResources.GetResource("~/css/form.css")%>
        <hlp:ActionMessage ID="ActionMessage1" runat="server" />


        <div  id="divCtr" class="viewport">
              <div id="navBar" style="display:none" class="navbar-fixed">
                    <nav style="">
                        <div class="nav-wrapper"><a id="header-show-sidenav" class="sidenav-trigger" onclick="__ShowHomeSideNav()"   href="javascript:void(0)"  style="float: left; margin-left: 20px;"><i class="fa"></i></a>
                            <a id="PageTitleMobile"  class="page-title"><i class="_i fa medium valign"></i><span class="_t"></span></a>
                            <a class="close2" href="javascript:void(0)" onclick="Erp.CloseWindow()"></a>
                        </div>
                    </nav>
                </div>
             <div id="divCommands" class="themeBorderColor-Light" >
                <span id="PageTitle" class="PageTitle"><span class='_i'></span><span class="_t"></span></span><span id="spnCustomControlCtr"></span>
                 <span id="spnWinCmd">
                     <a href="javascript:void(0)" style="display: none" onclick="delayClick(event,__winCmd)" title="Bookmark" class="win-cmd active _bk">&#xf097;</a><a
                         href="javascript:void(0)" onclick="delayClick(event,__winCmd)" title="Maximize" style="display:none"  class="win-cmd active _max"> &#xf065;</a><a
                             href="javascript:void(0)" onclick="delayClick(event,__winCmd)" title="Popout" class="win-cmd active"> &#xf08e;</a><a
                                 href="javascript:void(0)" onclick="delayClick(event,Erp.RefreshWindow)" style="line-height: 23px" title="Refresh" class="win-cmd active"> &#xf021;</a><a
                                     href="javascript:void(0)" onclick="delayClick(event,Erp.CloseWindow)"
                                     title="Close" class="win-cmd active _close">&times;</a>
                 </span>
            </div>
            <asp:Panel runat="server" Style="display: none" ID="PnlWebControls"></asp:Panel>
            <div id="pagePanel" style="height:100%;width:100%" class="ui-form">
                <asp:Panel runat="server" Visible="false" ID="pnlFrame">
                    <span style="" class="wfTitle">Take Action </span>
                    <iframe runat="server" id="ifrWf" style="width: 99%; height: 53px; background-color: #FFFCDB; border: solid 1px #FFC479; margin-top: 10px;" frameborder="0"></iframe>
                </asp:Panel>
                <asp:Literal runat="server" EnableViewState="false" Mode="PassThrough" ID="MainContainer"></asp:Literal>
                <div id="CmdPanel" runat="server" class="cmdPanel"><a runat="server" visible="false" id="btnSave" href="javascript:void(0)" class="cmdBtn cmdSave" onclick="Erp.SaveData()">Save</a><a href="javascript:void(0)" class="cmdBtn cmdClose" onclick="Erp.CloseWindow()">Cancel</a></div>
            </div>
            
        </div>
        <div id="ifrCtr">
            <iframe style="height: 100%; width: 100%;" id="ifrDetailsWindow" showtools="1"  frameborder="0"></iframe>
        </div>
        <div id="commonFileCtr" class="FormSettings jqModalPopup" style="position: fixed; z-index: 100001; top: 100px; left: 519px; display: none; padding: 15px; border: solid 1px #9a9a9a; width: 285px;">
            <span class="mainHeading" style="margin-bottom: 12px;margin-top: -10px;">Upload File</span><span id="CommonFileUploadField_Parent" style="margin-left: 50px; display: block;"></span>
            <a class="default-link viewFile" target="_blank" href="javascript:void(0)" style="margin: 10px 10px; display: block;">View Uploaded File</a>
            <span  style="font-size:13px;display:none" class="entity entity-label  autoWidth label-warning"><span class="span"><span class="field-icon"></span><span style="word-break: break-word;" class="field-title "></span></span></span>
            <div style="text-align: right">
                <a class="mdl-button small GreenButton btnupload" onclick="_acceptCommonUpload()" href="javascript:void(0)"><span style="font-family:FontAwesome;margin-right:5px">&#xf093;</span>Upload</a>
                <a onclick="_cancelCommonUpload()" href="javascript:void(0)" class="mdl-button small RedButton">Cancel</a>
            </div>
        </div>

    </form>
    <style>
        #ifrCtr
        {
            position: absolute;
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 5px;
            background-color: #fff;
            display: none;
           
        }
        .wfTitle
        {
            font-family: nunitolight;
            font-size: 22px;
            text-decoration: underline;
            margin-top: 10px;
            display: block;
        }

            .wfTitle:before
            {
                content: "\f024";
                font-family: fontawesome;
                display: inline-block;
                margin-right: 5px;
            }

        .dgCmd A.selectX-input
        {
            font-size: 22px;
            font-family: nunitolight;
            color: #A16800;
        }

        .dgCmd .selectX-input:hover, .dgCmd .selectX-input:focus
        {
            background-color: #CFCFCF;
            color: #000 !important;
        }

        .dgCmd .selectX-dropdown A.itemGroup
        {
            color: #FFF;
            font-size: 16px;
            background-color: #FF3838;
        }

        .DarkTheme .dgCmd .selectX-input
        {
            color: #FFFD68;
        }

        .dgCmd .selectX-ctr
        {
            width: 280px;
            margin-top: 5px;
        }
        .grid-filter .grid-adv-filter-btn,
        .grid-filter > div
        {
           display:none;
        }
.RadGrid .rgHeaderWrapper .rgFilterRow
{
	display: none;
}
    </style>
    <script>
        Erp.PageTheme = "<%=PageTheme%>";
        Erp.IsAddEditPage = true;
        if (getQS("_dash") == "1" || getQS("_noPadding") == "1")
            $(document.documentElement).addClass("NoPadding");
        if (getQS("_nobtns") == "1")
            $("#spnWinCmd").hide();
        if (getQS("_notools") == "1") {
            $("#divCommands").hide();
            $("#<%=form1.ClientID%>").css("padding-top", "0");
        }
        if (!Erp.IsCrossOrigin()) {
            if (getQS("_notools") == "1" || (window.frameElement && $(window.frameElement).attr("showtools") != "1")) {
                $("#divCommands").hide();
                $("#<%=form1.ClientID%>").css("padding-top", "0");
            }
            else if (window.frameElement && $(window.frameElement).parent().hasClass("Popup") || parent.IsPopupWin) {
                $(document.documentElement).addClass("NoPadding PopupWin");
                window.IsPopupWin = true;
                if (parent.IsPopupWin || getQS("_qadd") == "1") {
                    $("#divCommands").find("._close").css({ visibility: "visible", "margin-left": "-15px", "font-size": "28px" });
                }
            }
        }
        if (Erp.LayoutMode == "R")
            $("#PageTitle").addClass("Locked");

        $("#headerPanel,#footerPanel").find(".cmdBtn").parent().addClass("cmdPanel");

        $(function () {
            var ht = (window.innerHeight -24- ($(document.documentElement).hasClass("NoPadding") ? 0 : 20));
            $("#divHtmlContainer")
                  .css({
                      "width": window.innerWidth - 24 - ($(document.documentElement).hasClass("NoPadding") ? 0 : 20),
                      "min-height": ($("#divHtmlContainer").data("splitterSizing") == "fix" ? "" : ht),
                      "height": ($("#divHtmlContainer").data("splitterSizing") == "fix" ? ht : "")
                  });
            $("#divHtmlContainer").SplitContainer({ OnResize: function (el) { redrawPageLayout("resize"); } });
        });

        Erp.Init();
        relocateWebControls("<%=PnlWebControls.ClientID%>");
        Erp.BeginLoadData();

        if (window.frameElement && $(window.frameElement).attr("ismobile") == "1") {
            $("#divCommands").hide();
            $("#ifrDetailsWindow").attr("ismobile", 1)
            $('#navBar').show();
            $("#<%=form1.ClientID%>").css("padding-top", "56px");
            $("#PageTitleMobile").html($("#PageTitle").html()).children("._i").addClass("_i fa medium valign")
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

        //$(window).on("resize", $.debounce(250, function () {
        //    redrawPageLayout("resize");
        //}));
        function pageLoad() {
            if (!Erp.LoadDataComplete) {
                Erp.PageLoadSkip = true;
                return;
            }
            Erp.PageLoadSkip = false;
            BindGrids(true);
            for (var i = 0; i < GridList.length; i++) {
                toggleGridFilter(GridList[i].ID, false);
                if (window.$telerik && $telerik.isSafari) {
                    $("#" + GridList[i].ID + "_GridData").on("scroll", function (e) {
                        var id = $(e.srcElement).attr("id").replace("_GridData", "_GridHeader");
                        $("#" + id).scrollLeft($(e.srcElement).scrollLeft());
                    })
                }
            }
            

                    
            Erp.LoadComplete();
        }
        
        Erp.SaveData = function (cl,_flds) {
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
            if (refs.length>0) {               
                evaluateDbReferences(refs, Erp._SaveData,cl);
            }
            else
                Erp._SaveData(cl);
        }
       
        Erp._SaveData = function (cl) {
            if (!Erp.ValidateData())
                return;
            for (var i = 0; i < Erp.OnSave.EventList.length; i++) {
                if (typeof Erp.OnSave.EventList[i] == "function")
                    if (Erp.OnSave.EventList[i]() == false)
                        return;
            }

            var data = Erp._gatherData();
            Erp.HideMessage();
            if ($("#footerPanel").isVisible())
                $.Notify("Saving...");
            Erp.WebApi.SaveData(data, function (r) { PageMethodSuccess(r, cl); }, PageMethodError);
        }
        function PageMethodSuccess(data,cl) {
            $.Notify(false);
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
                        var ifr = (frameElement ? parent.$("#" + getQS("_lookupframe")) : opener.$("#" + getQS("_lookupframe")));
                        ifr = ifr.length > 0 ? ifr[0].contentWindow : null;
                        if (ifr)
                            ifr.Erp.Grid.Refresh("dgData");
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
                   

                    $(Erp.DocEditors).each(function () {
                        var ifr = $("#" + this)[0];
                        if (!ifr)
                            return true;
                        if (!ifr.DocumentArgs)
                            ifr.DocumentArgs = {};
                        ifr.DocumentArgs.RecordID = ItemID;
                        var ed = Erp.Document.GetEditor(this);
                        if (ed && ed.HasUnsavedChanges()) {
                            Erp.Document.Save(this);
                        }
                        else if (ed && ifr.contentWindow && typeof ifr.contentWindow.EditorCallbackComplete == "function") {
                            ifr.DocumentArgs.Action = "Update";
                            ifr.contentWindow.EditorCallbackComplete();
                        }

                    });

                    _delayFunctionListExec(Erp.OnSaveSuccess.EventList, "OnSaveSuccess",
                        function () {
                            RefreshFields(data);
                            refreshParent(typeof cl == "undefined" ? GridList.length <= 0 && Erp.DocEditors.length==0 : cl);
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
            $.Notify(false);
            Erp.ShowMessage(data.get_message(), "error")
            for (var i = 0; i < Erp.OnSaveError.EventList.length; i++) {
                if (typeof Erp.OnSaveError.EventList[i] == "function")
                    _delayFunctionExec(Erp.OnSaveError.EventList[i], "OnSaveError");
            }
        }

        function refreshParentGridWF(data) {
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

        

        function toggleDetailsForm(show, url) {            
            var ifr = $("#ifrCtr");
            if (show) {
                $("#divCtr").data("scrollTop", $(document.body).scrollTop());
                $("#divCtr").css("opacity", 0.3);
                ifr.node(0).setVisible(false);
                if (ifr.node(0)[0].contentWindow && ifr.node(0)[0].contentWindow.document)
                    $(ifr.node(0)[0].contentWindow.document.body).setVisible(false);
                ifr.stop(true, true).css("top", $(window).height()).show().animate({ top: 0 }, 250, "easeInSine", function () { $(this).node(0).setVisible(true).attr("src", url); $("#divCtr").hide(); })
            }
            else {                
                $("#divCtr").show();                
                $("#divCtr").css("opacity", "");
                ifr.stop(true, true).animate({ top: ifr.outerHeight() }, 250, "easeInSine", function () { $("#ifrCtr").hide(); $(document.body).scrollTop($.defaultVal($("#divCtr").data("scrollTop"), 0)); })
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
        function __GridDataBound(r) {
            $("#" + r["GridID"] + "_GridHeader").css("margin-right", ($("#" + r["GridID"] + "_GridData").hasScrollBar() ? "17px" : ""));
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

