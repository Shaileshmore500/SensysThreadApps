﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="List.aspx.cs" Inherits="SensysErp.Main.List" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<!DOCTYPE html>

<html runat="server" id="htmlDoc" xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/modernizr.js")%>

    <%# HelperLib.Web.WebResources.GetResource("~/css/normalize.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/fonts/font.css")%>
    <%# QS("_rspv")=="1"?"":("<link id='lnkTheme' href='../Css/"+(PageTheme != ""?PageTheme:"Grey")+"/jquery-ui-1.10.3.custom.css' rel='stylesheet' type='text/css' />")%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/CustomControl/CustomControl.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/json2.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/System.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
    <%# QS("_rspv")=="1"?"":HelperLib.Web.WebResources.GetResource("~/Scripts/jquery-ui-1.10.3.custom.min.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jqHelper.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/UiHelper.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CustomControls.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/moment.min.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Erp.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Ui.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Fn.js")%>

    <script>
        var GridList = [];
        $(function () {

            $(document.documentElement).addClass("docHTML");
        });
    </script>
    <style>
        html, body, form
        {
            height: 100%;
            width: 100%;
            overflow-x: hidden;
        }
            html.touch, .touch body, .touch form {
                overflow-x:initial;
            }

        html.responsive {
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
        }

        .responsive *, .responsive *:before, .responsive *:after {
            -webkit-box-sizing: inherit;
            box-sizing: inherit;
        }

        #divCtr
        {
            padding: 5px;
            margin: 0;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            -ms-box-sizing: border-box;
            box-sizing: border-box;
            height: 96%;
        }

        #ifrCtr
        {
            position: absolute;
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 5px;
            background-color: #fff;
            display: none;
            border-top: solid 2px #B8B8B8;
        }
        #btnLookupFormLauncher
        {
           text-decoration: none;
    position: absolute;
    top: -6px;
    left: 1px;
    font-size: 15px;
    font-family: nunitobold;
    z-index: 100;
    display: inline-block;
    width: 17px;
    height: 21px;
    text-align: center;
    line-height: 26px;
    border-bottom-right-radius: 18px;
    border-bottom-left-radius: 18px;
        }
        #btnLookupFormLauncher:after
        {
            background: #444444;
    width: 145%;
    padding-top: 79%;
    padding-bottom: 70%;
        }

     
        
    </style>

    <script>
        function changeTheme(theme) {
            $("#lnkTheme").attr("href", "../Css/" + theme + "/jquery-ui-1.10.3.custom.css?ts=" + (new Date() / 1))
            $(document.documentElement).removeClass("GreyTheme DarkTheme BlueGlossTheme GreenTheme OrangeTheme RedTheme").addClass(theme + "Theme")
            var ifr = $("#ifrDetailsWindow")[0];
            if (ifr.contentWindow && typeof ifr.contentWindow.changeTheme == "function")
                ifr.contentWindow.changeTheme(theme);
        }
    </script>
</head>
<body class="docBody">
    <span id="spnWorking" class="working entity entity-label label-warning"></span>
    <form id="form1" runat="server">

        <asp:ScriptManager ID="ScriptManager1" runat="server" EnablePageMethods="true">
        </asp:ScriptManager>
        <input type="submit" onclick="return false" value="cancel enter" style="display:none" />
        <%= HelperLib.Web.WebResources.GetResource("~/css/base.css")%>
        <%=QS("_rspv")=="1"?HelperLib.Web.WebResources.GetResource("~/css/main.css"): HelperLib.Web.WebResources.GetResource("~/css/form.css")%>
        <style><%= ErpModel.Globals.Users.CustomTheme%></style>
        <hlp:ActionMessage ID="ActionMessage1" runat="server" />
        <asp:Panel runat="server" Style="display: none" ID="PnlWebControls"></asp:Panel>
        <div id="divCtr" style="" class="ui-form">
            <a href="javascript:void(0)" id="btnLookupFormLauncher" title="Add New Record" class="themeBackColor-Dark themeForeColor-Light contrast  mdl-ripple" style="visibility:hidden" onclick="delayClick(event,openLookupForm)">+</a>
            <asp:Panel ID="pnlGrid" CssClass="ui-content" runat="server" Style="height: 100%;padding-top:2px">
                <asp:Literal runat="server" EnableViewState="false" Mode="PassThrough" ID="MainContainer"></asp:Literal>
                <br />
                <br />  <span style="visibility: hidden;" id="spnLocate">&nbsp;</span>
            </asp:Panel>
            
        </div>
        
      

    </form>
    <style>
        .ContentPane
        {
            height:auto;
        }
        .responsive input[type=text] {
            color:var(--value-color);
        }
        .RadGrid
        {
            display: block;
            width1: 100% !important;
            box-sizing: border-box;
            padding: 0 !important;
            outline: 0 !important;
            border: 0px !important;
        }
        .responsive .RadGrid {
            background: none;
            border:none !important;
        }
        .responsive #dgData_ctl00_TopPager {
            display: none;
        }
        .showGridFlt.responsive #dgData_ctl00_TopPager {
            display: block;
        }
        .rgMasterTable
        {
            width1: 100% !important;
        }

        .rgDataDiv
        {
            overflow: visible !important;
            max-height: none !important;
        }
        .rgWrap.rgInfoPart,
        #dgData_ctl00_ctl03_ctl01_ChangePageSizeLabel,
        #dgData_ctl00_ctl03_ctl01_ChangePageSizeTextBox_wrapper,
        #dgData_ctl00_ctl03_ctl01_ChangePageSizeLinkButton
        {
            display:none  !important;
        }
         .RadGrid_Default.singleCol .rgHeaderWrapper
        {
            visibility:hidden;
        }
          .RadGrid_Default.singleCol .rgHeaderWrapper .rgMasterTable 
        {
           width:100%;
        }
        .RadGrid_Default.singleCol .rgRow td,
        .RadGrid_Default.singleCol .rgAltRow td
         {   
    border-bottom: solid 1px #E8E8E8;
    padding-top: 4px !important;
    padding-bottom: 4px !important;
    font-size: 9pt !important;
}

        .responsive .RadGrid_Default.singleCol .rgRow td,
        .responsive .RadGrid_Default.singleCol .rgAltRow td {
            border-bottom: solid 1px var(--border-color-light);
            padding-top: 1px !important;
            padding-bottom: 1px !important;
        }

        .RadGrid_Default.singleCol .rgHoveredRow td,
        .RadGrid_Default.singleCol .rgHoveredRow td,
        .RadGrid_Default.singleCol .rgSelectedRow td,
        .RadGrid_Default.singleCol .rgSelectedRow td
        {
            border-bottom-color: transparent !important;
        }

        .RadGrid_Default.singleCol .rgRow,
        .RadGrid_Default.singleCol .rgAltRow {
    background: transparent ;
}

        .DarkTheme .RadGrid_Default.singleCol .rgRow td,
        .DarkTheme .RadGrid_Default.singleCol .rgAltRow td
        {
            border-bottom-color: #3C3C3C !important;
        }

        .grid-filter
        {
            display:none;
            margin-left: 0;
            float:none;
            width:99.3%;
        }
        .RadGrid_Default.singleCol .rgMasterTable
        {
            min-width:100% !important;
        }
        .RadGrid_Default.singleCol .dgToggleFilter
        {
            display:none;
        }
        .dgCmd .dgToggleFilter
        {display:none;
            left: initial;
            top: -4px;
            right: -10px;
        }

        .RadGrid.ChildGrid .rgHeaderWrapper .rgFilterRow
        {
            display: none;
        }
        .grid-adv-setting-btn
        {
            display:none;
        }
        .grid-adv-filter
        {
            display:none;
        }
        .grid-filter .grid-adv-filter-btn,
        .grid-filter > div
        {
            visibility: hidden;
        }
        .RadGrid .rgHeaderWrapper .rgFilterRow
        {
            display: none;
        }



        .responsive #btnLookupFormLauncher {
            /*display:none;*/

             text-decoration: none;
            position: fixed;
            top: initial;
            left: initial;
            right: 25px;
            bottom: 25px;
            font-size: 30px;
            font-family: 'Roboto';
            z-index: 100;
            display: inline-block;
            width: 40px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            border-bottom-right-radius: 18px;
            border-bottom-left-radius: 18px;
            background: var(--primary-color);
            border-radius: 50%;
            color: var(--primary-text-color);
        }
        .responsive .RadGrid {
            box-shadow:none;
        }
        .responsive .RadGrid_Default .rgHeader {
            height: 30px;
        }
        .responsive .RadGrid_Default .rgRow td, .responsive .RadGrid_Default .rgAltRow td {
            height: 38px;
            cursor:pointer;
        }
        .responsive .RadGrid_Default .rgHoveredRow, .responsive .RadGrid_Default .rgSelectedRow {
            background-color: var(--secondary-color-lightest) !important;
            color: var(--value-color);
            background: none;
        }
        .responsive .grid-filter > div {
            overflow:initial !important;
            float:none;
        }
            .responsive .grid-filter > div input {
                height: 38px;
                width: 100%;
                font-size: 12px;
                margin-top: -5px;
                margin-bottom: 10px;
                background: var(--bg-color-light);
                border: solid 1px var(--border-color);
            }
        .responsive .grid-filter > div ::placeholder {
            color:  var(--label-color);
            font-size:14px;
        }
            
        .touch .RadGrid div.rgHeaderWrapper {
           overflow:visible !important;
        }
        .touch .RadGrid div.rgHeaderDiv {
           overflow:visible !important;
        }
        .grid-adv-filter-btn {
            display:none !important;
        }

        .pls {
            border-bottom: solid 1px var(--border-color-light);
            padding-top: 4px !important;
            padding-bottom: 4px !important;
            font-size: 9pt !important;
            padding-left: 7px;
            padding-right: 7px;            
            cursor: pointer;
        }
            .pls:hover {
                background: #f1f1f1 !important;
                outline: solid 1px #444444;
                color: #000;
            }
        .responsive .pls {
             height: 38px;
             padding-right: 24px;
            padding-left: 32px;            
            padding-top: 1px !important;
            padding-bottom: 1px !important;
            line-height: 32px;
        }

            .responsive .pls:hover {
                background-color: var(--secondary-color-lightest) !important;
                color: var(--value-color);
                background: none;
                outline:none;
            }

    </style>
    <script>
        function getParentWin() {
            if (frameElement.targetFrameId)
                return parent.$("#" + frameElement.targetFrameId)[0].contentWindow;
            else
                return parent;
        }
        if ($.QS("_ps") == "1") {
            var p = $("<div class='pls'>" + $.defaultVal($.QS("_pst"), "Please Select") + "</div>");
            $("#dgData_GridData").prepend(p);
            p.on("click", function () { getParentWin().SelectItem("", $(this).text(), [], $(this)); });
        }

        if ($.QS("_rspv") == "1") {
            Erp.Responsive = true;
            $(document.documentElement).addClass("responsive");
            
        }
        Erp.IsListPage = true; 
        Erp.PageTheme = "<%=PageTheme%>";
        Erp.Init();
        relocateWebControls("<%=PnlWebControls.ClientID%>");
        Erp.BeginLoadData();
        if ("<%=ErpModel.Security.UserAccess.ShowEntityButton(QS("EID"), "Add").ToString().ToLower()%>" == "false" || getQS("_nobtns") == "1")
            $("#btnLookupFormLauncher").remove();
        else
            $("#btnLookupFormLauncher").setVisible(getQS("_showbtns") == "1" && (frameElement ? getParentWin().Erp.LayoutMode == "A" || getParentWin().Erp.LayoutMode == "E" : opener.Erp.LayoutMode == "A" || opener.Erp.LayoutMode == "E"));
        
        $("#dgData").addClass($("#dgData").attr("singlecol") == "1" ? "singleCol" : "");
        
        function openLookupForm() {
            var obj = { "Action": "ADDFORM", "Entity": getQS("EID"), "Form": ($.isEmpty(Erp.LookupForm) ? "lookup" : Erp.LookupForm), "Responsive": (Erp.Responsive ? 1 : 0), "Params": _getQsParamsString(true) + ($.isEmpty(Erp.LookupFormParams) ? "" : Erp.LookupFormParams), "Location": "Popup", "PopHt": ($.isEmpty(Erp.LookupFormHeight) ? "400" : Erp.LookupFormHeight), "PopWd": ($.isEmpty(Erp.LookupFormWidth) ? "700" : Erp.LookupFormWidth), zIndex: 5000, showClose: !Erp.Responsive };
            var o = null;
            if (typeof onLookupDialogOpening == "function")
                o = onLookupDialogOpening(obj);
            if (o != null && o != undefined)
                obj = o;
            obj.Params = $.defaultVal(obj.Params, "") + "&_nobtns=1&_lookupframe=" + window.frameElement.id;
            getParentWin().Erp.OpenWindow(obj);
        }
        var _ColTitleIndex=1;
        function pageLoad() {            
            if (!Erp.LoadDataComplete) {
                Erp.PageLoadSkip = true;
                return;
            }
            Erp.PageLoadSkip = false;
            resizeGridHeight();
            if ($(window.frameElement).isVisible()) {                
                var id = parent.$("#divSearchListCtr").data("CurrentField");
                if (id && getParentWin().$("#" + id).data("hasInput"))
                    lookupSearchText = getParentWin().$("#" + id).val();
                if (lookupSearchText)
                    $("#dgData_FltList").prop("selectedIndex", 0);
            }
            BindGrids(true);
            prevlookupSearchText = lookupSearchText;
            if (window.$telerik && $telerik.isSafari) {
                $(".rgDataDiv").on("scroll", function (e) {
                    var id = $(e.srcElement).attr("id").replace("_GridData", "_GridHeader");
                    $("#" + id).scrollLeft($(e.srcElement).scrollLeft());
                })
            }
            SetWindowWidth();
            Erp.LoadComplete();
            
        }
        $(window).on("resize", $.debounce(250, function () {
            resizeGridHeight();
        }));
        function resizeGridHeight() {

        }
        var prevlookupSearchText = "";
        function filterSingleSelectGridRecords(txt) {
            if (prevlookupSearchText == txt)
                return;
            else
                prevlookupSearchText = txt; 
            lookupSearchText = txt;
            $("#dgData_FltList").prop("selectedIndex", 0);
            if ($("#dgData").data("GridBinding")) {
                $("#dgData").data("ScheduleGridBinding", true);
            }
            else
                Erp.Grid.Refresh("dgData");
        }
        var alwaysHideSrch = false;
        function __GridDataBound() {            
            $("#dgData_GridHeader").parent().show();
            $(window.frameElement).parent().css("height", $("#spnLocate").offset().top + 15);
            var _CurrentFieldType = parent.$("#divSearchListCtr").data("FieldType");
            if (Erp.Touch || (_CurrentFieldType != "SINGLESELECT" && _CurrentFieldType != "SINGLESELECT_TABLE")) {
                if (Erp.Grid.GetRowCount("dgData") > 15) {
                    $(document.documentElement).addClass("showGridFlt");
                    $("#dgData_FltInput").parent().show().closest(".grid-filter").show();
                    if (!Erp.Responsive)
                        $("#dgData_GridHeader").find(".rgFilterRow").show();
                }
            }
            else {
                alwaysHideSrch = true;
                $("#dgData_FltInput").closest(".grid-filter").hide();
                $("#dgData_GridHeader").find(".rgFilterRow").hide();
            }
            if (alwaysHideSrch) {
                $("#dgData_FltInput").closest(".grid-filter").hide();
                $("#dgData_GridHeader").find(".rgFilterRow").hide();
            }
            var cols = $find("dgData").get_masterTableView().get_columns();
            for (var i = 0; i < cols.length; i++)
                if (cols[i]._oldTitle == "Title") {
                    _ColTitleIndex = i;
                }
            if ($("#dgData").data("ScheduleGridBinding")) {
                $("#dgData").removeData("ScheduleGridBinding");
                Erp.Grid.Refresh("dgData");
            }
        }
        function __clearGridSelection() {
            var id = $("#dgData_ctl00").data("currentHighlightRow");
            if (id) {
                tr = $("#" + id);
                tr.removeClass("rgHoveredRow rgSelectedRow ");
            }
            $("#dgData_ctl00").removeData("currentHighlightRow")
        }
        function changeSingleSelectGridRowFocus(up) {
            var _CurrentFieldId = parent.$("#divSearchListCtr").data("CurrentField");
            if (!_CurrentFieldId)
                return;
            var tr = null;
            var id = $("#dgData_ctl00").data("currentHighlightRow");
            if (id)
                tr = $("#" + id); 
            if (tr == null || tr.length == 0)
                tr = $("#dgData_ctl00").children("tbody").children(":visible").eq(0);
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
                    tr=oldtr;
                
            }
            
            if (!tr.exists())
                return;
            tr.addClass("rgHoveredRow"); 
            $("#form1").scrollTop(tr.offset().top + $("#form1").scrollTop() - $("#form1").outerHeight() + 60);
            $("#dgData_ctl00").data("currentHighlightRow", tr.attr("id"));
            var txt = getParentWin().$("#" + _CurrentFieldId);
            var t = (tr.cells(_ColTitleIndex).children(".cell").length > 0 ? tr.cells(_ColTitleIndex).children(".cell").text() : tr.cells(_ColTitleIndex).text());
            txt.val(t);
            txt.data("_TmpRecordID", tr.attr("pk"));
            txt.data("_TmpRow", tr);
            txt.data("_TmpText", txt.val());
            txt.data("_TmpKeys", _getKeys(tr));
        }
        function _getKeys(tr) {
            var keys = [];
            var ck = $("#dgData").attr("clientkeys").split(',');
            for (var i = 0; i < ck.length; i++)
                if (!$.isEmpty(ck[i]))
                    keys.push(tr.attr(ck[i]));
            return keys;
        }

        function gridSelectItem(sender, args) {
            var tr = $(args.get_gridDataItem().get_element());
            var recID = tr.attr("pk");
            var text = getTitle(args);
            var keys = _getKeys(tr);
            var ck = $("#dgData").attr("clientkeys").split(',');
            if (getQS("wf") == "1") {
                if (typeof getParentWin().InvokePropFunc == "function") {
                    getParentWin().InvokePropFunc(getQS("ref"), getQS("fn"), { RecordID: recID, Title: text });
                }
            }
            else
                getParentWin().SelectItem(recID, text, keys, tr);
        }
        function selectItem(a) {
            a = $(a);
            var row = a.closest("TR");
            var recID = row.attr("pk");
            var text = a.closest("TD").next().html();
            var keys = _getKeys(tr);
            if (getQS("wf") == "1") {
                if (typeof getParentWin().InvokePropFunc == "function") {
                    getParentWin().InvokePropFunc(getQS("ref"), getQS("fn"), { RecordID: recID, Title: text });
                }
            }
            else
                getParentWin().SelectItem(recID, text, keys, row);
        }

        function getTitle(args) {
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

        function SetWindowWidth() {
            var wd = 0;
            var tbl = $("#<%=pnlGrid.ClientID%>").find(".RadGrid>.rgDataDiv>.rgMasterTable");
            var cols = tbl.children("colgroup:first").children("col");
            if (cols.length <= 2) {
                tbl.closest(".RadGrid").css("width", "100%");
                tbl.css("width", "100%");
                tbl.closest(".RadGrid").children(".rgMasterTable").css("width", "100%");
                tbl.closest(".RadGrid").children(".rgHeaderWrapper").hide();
                wd = 290;
            }
            else {
                if (Erp.Touch) {                   
                    return;
                }
                var minW = parseInt($(window.frameElement).closest("#divSearchListCtr").css("min-width"));
                minW = isNaN(minW) || minW - 30 < 290 ? 290 : minW - 30;
                var gc=Erp.Grid.GetColumns("dgData");
                cols.each(function (i) { if (i == 0) return true; if (!gc[i].get_visible()) return true; wd += parseInt($(this).css("width")); });
                if (wd < minW) {
                    tbl.closest(".RadGrid").children(".rgHeaderWrapper").find("colgroup").node(1).css("width", parseInt(tbl.children("colgroup").node(1).css("width")) + minW - wd);
                    tbl.children("colgroup").node(1).css("width", parseInt(tbl.children("colgroup").node(1).css("width")) + minW - wd);
                    wd = minW;
                }
            }

            $(window.frameElement).closest("#divSearchListCtr").css("width", wd + 30);
            $(window.frameElement).attr("windowwidth", wd + 30);

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
