﻿var ItemID = "";
var ParentID = "";
var LayoutID = "";

var PkIds = [];
var mxEntityList = {};
var GridList=[];
var ViewType = "Item";
var FormTag = "";
var FormID = "";
var DbReferences=[];
var FunctionList = [];
var arrfloatingLabels = [];
$.valHooks.text = {};
$.valHooks.text.set = function (el, val) { if ($(el).data('floatingLabel')) { $(el).closest('.entity').children('.entityKey').setDisplay($.isEmpty(val)); }; return undefined; }
_dynWidthEl = [];
function getQS(_0xa1d9x1) { if ($["\x69\x73\x45\x6D\x70\x74\x79"](_0xa1d9x1)) { return "" }; var _0xa1d9x2 = ""; if (_0xa1d9x1["\x74\x6F\x55\x70\x70\x65\x72\x43\x61\x73\x65"]() == "\x49\x44") { return $["\x64\x65\x66\x61\x75\x6C\x74\x56\x61\x6C"](Erp.RecordID, $.QS(_0xa1d9x1)) } else { if (_0xa1d9x1["\x74\x6F\x55\x70\x70\x65\x72\x43\x61\x73\x65"]() == "\x45\x49\x44") { if (!$["\x69\x73\x45\x6D\x70\x74\x79"](Erp.EntityID)) { return Erp["\x45\x6E\x74\x69\x74\x79\x49\x44"] }; return Users["\x53\x4D\x4F"] > 0 ? Crypto["\x64\x65\x63\x6F\x64\x65"]($.QS(_0xa1d9x1), "\x31\x32\x31\x39") : $.QS(_0xa1d9x1) } else { if (_0xa1d9x1["\x74\x6F\x55\x70\x70\x65\x72\x43\x61\x73\x65"]() == "\x5F\x46\x43") { return Users["\x53\x4D\x4F"] > 0 ? Crypto["\x64\x65\x63\x6F\x64\x65"]($.QS(_0xa1d9x1), "\x31\x32\x31\x39") : $.QS(_0xa1d9x1) } else { if (_0xa1d9x1["\x74\x6F\x55\x70\x70\x65\x72\x43\x61\x73\x65"]() == "\x50\x49\x44") { return $["\x64\x65\x66\x61\x75\x6C\x74\x56\x61\x6C"](Erp.ParentID, $.QS(_0xa1d9x1)) } } } }; return $.QS(_0xa1d9x1) }
function __encr(_0x8e75x4) { return Crypto["\x65\x6E\x63\x6F\x64\x65"](_0x8e75x4, "\x31\x32\x31\x39"); }

function _checkValidKeyName(k) {
    if (Erp.MobileHome && k.indexOf("_") == 0)
        return false;
    return k != "relid" &&
    k != "_bseid" &&
    k != "relent" &&
    k != "_sc" &&
    k != "fld" &&
    k != "eid" &&
    k != "_appr" &&
    k != "_pt" &&
    k != "_fc" &&
    k != "_au" &&
    k != "tk" &&
    k != "_dashfilter" &&
    k != "_notools" &&
    k != "_nobtns" &&
    k != "_tmpauth" &&
    k != "_lookupframe" &&
    k != "_search" &&
    k != "_qadd" &&
    k != "_meid" &&
    k != "filter" &&
    k != "defaultfilter";
}
function GetQSColl() {
    var qs = [];
    var str = window.location.href;
    if (str.indexOf("?") < 0)
        return qs;
    str = str.substring(str.indexOf('?') + 1);
    str = str.split('&');
    for (var i = 0; i < str.length; i++) {
        var s = str[i].split('=');
        if ($.isEmpty(s[0]))
            continue;
        var v = s[1];
        if (s[0].toUpperCase() == "EID" || s[0].toUpperCase() == "_FC")
            v = getQS(s[0]);
        if (s.length > 1)
            qs.push({ Key: s[0], Value: v });
    }
    return qs;

}

function redrawPageLayout() {
            var p = $("#pagePanel"), h = $("#headerPanel"), f = $("#footerPanel"), m = $("#middlePanel"), l = $("#leftPanel"), c = $("#centerPanel"), r = $("#rightPanel");
            if (!p.isVisible() || !c.isVisible())
                return;
            if (!m.exists())
                return;

            var ht = (window.innerHeight - 30 - ($(document.documentElement).hasClass("NoPadding") ? 0 : 30));
            if (!Erp.Responsive) {
                $("#divHtmlContainer")
                      .css({
                          "width": window.innerWidth - 30 - ($(document.documentElement).hasClass("NoPadding") ? 0 : 30),
                          "min-height": ($("#divHtmlContainer").data("splitterSizing") == "fix" ? "" : ht),
                          "height": ($("#divHtmlContainer").data("splitterSizing") == "fix" ? ht : "")
                      });
                $("#divHtmlContainer").SplitContainer("refresh");
            }

            $(_dynWidthEl).each(function () {
                var el = $("#" + this).closest(".entity");
                if (el.hasClass("occupy"))
                    el.children(".entityValue").css("width", el.innerWidth() - el.children(".entityKey").outerWidth()-7);
            });

            $(".chosen-container").each(function () {
                var c = $(this).parent(); c.css("display", "inline-block");
                if (c.parent().hasClass("occupy"))
                    c.width("100%")
                else
                    c.width(c.parent().innerWidth() - 5);
            })
            for (var i = 0; i < GridList.length; i++) {
                SetGridWidth(GridList[i].ID);
            }

            for (var i = 0; i < Erp.OnResize.EventList.length; i++) {
                if (typeof Erp.OnResize.EventList[i] == "function")
                    Erp.OnResize.EventList[i]();
            }
            //$(".entityValue").each(function () { var i = $(this); if (i.parent().hasClass("occupy")) { i.node(0).width(i.parent().innerWidth() - i.prev().outerWidth(true) - i.outerWidth(true) + i.innerWidth() - 3); return true; }; i.prev().innerWidth(i.parent().innerWidth() - i.outerWidth(true) - i.prev().outerWidth(true) + i.prev().innerWidth() - 3); });
    }
function relocateWebControls(ctr) {
    var pnlWeb = $("#" + ctr);
    pnlWeb.children().each(
        function () {
            var e = $(this);
            var id = e.attr("_controlid");
            var p = $("#" + id + "_Parent");
            p = p.exists() ? p : $("body");
            p.append(e);
            if (e.hasClass("RadAsyncUpload")) {
                e.find(".ruBrowse").attr("class", "btn");
            }
        }
        )
$(".rgHeaderDiv").node(0).css("width","");
$(".rgDataDiv").node(0).css("width","");
$(".rgDataDiv").css("width", "");
}
$(window).load(function () {
    if (window.Erp && window.Erp.Responsive)
        return;
    redrawPageLayout();           
    window.setTimeout(function () { redrawPageLayout(); }, 100);
    $("#" + arrfloatingLabels.join(",#")).trigger("blur");
    if (arrfloatingLabels.length>0)
        window.setTimeout(function () { $("#" + arrfloatingLabels.join(",#")).trigger("blur"); }, 500);
}
);
function __winCmd(a) {
    var btn = $(a);
    var type = btn.attr("title").toLowerCase();
    if (type == "bookmark") {
        if (btn.data("bk") == "1")
            return;
        btn.data("bk","1");
        Erp.WebApi.AddBookmark({ "MenuId": getQS("_meid"), "Title": getQS("_t1"), "Url": window.location.href.replace("_meid=", "") });
        btn.html("&#xf02e;")
        return;
    }
    else if (type == "popout") {
        if (window.IsPopupWin && Erp._CanCloseWindow() == false)
            return;
        window.open(window.location.href.replace("&_fc=QuickAdd", "&_fc=QuickAddFS").replace("&_qadd=1", ""))
        if (window.IsPopupWin)
            Erp.CloseWindow();
    }
    else if (window.HomePage)
        winCmd(a);
    else if (parent && typeof parent.__winCmd == "function")
        parent.__winCmd(a);

}
function _adjustDynWidth(el) {
    _dynWidthEl.push(el.attr('id'));
}

function onClientFileUploading(sender, args) {
}

function onClientFileUploaded(sender, args) {
    var elem = $(sender.get_element());
    elem.data("TempName", args.get_fileInfo().TempName);
    elem.data("FileName", args.get_fileInfo().FileName);
    elem.trigger("blur");
    if (sender.get_id() == "CommonFileUploadField") {
        $("#commonFileCtr").find(".viewFile").attr("href", "../temp/" + elem.data("TempName"));
        $("#commonFileCtr").find(".btnupload").removeClass("disabled");
        $("#commonFileCtr").find(".label-warning").hide();
    }
}
function onClientFileUploadRemoved(sender, args) {
    var elem = $(sender.get_element());
    elem.removeData("TempName");
    elem.removeData("FileName");
    elem.trigger("blur");
    if (sender.get_id() == "CommonFileUploadField") {
        $("#commonFileCtr").find(".viewFile").attr("href", "javascript:void(0)");
        $("#commonFileCtr").find(".btnupload").addClass("disabled");
        $("#commonFileCtr").find(".label-warning").hide();
    }
}
function onClientValidationFailed(sender, args) {
    var fileExtention = args.get_fileName().substring(args.get_fileName().lastIndexOf('.') + 1, args.get_fileName().length);
    if (args.get_fileName().lastIndexOf('.') != -1) {//this checks if the extension is correct
        if (sender.get_allowedFileExtensions().indexOf(fileExtention) == -1) {
            err = "This file type is not supported.";
        }
        else {
            err = "This file exceeds the maximum allowed size of " + (sender._maxFileSize / 1024) + " KB.";
        }
    }
    else {
        err = "not correct extension.";
    }
    if (sender.get_id() == "CommonFileUploadField") {
        $("#commonFileCtr").find(".label-warning").show().find(".field-title").html(err);
    }
    else {
        if (Erp.Responsive)
            Erp.ShowMessage(
                {
                    id: "elValidationMsg",
                    displayMode: 2,
                    message: err,
                    transitionInMobile: 'flipInX',
                    transitionOutMobile: 'flipOutX',
                    transitionIn: 'flipInX',
                    transitionOut: 'flipOutX',
                    zindex: 1005,
                    layout: 1,
                    theme: "light"
                }
                , "error");
        else
            __showValidationError("<li><a onclick='__focusErr(\"" + sender.get_id() + "\")' href='javascript:void(0)'>" + err + "</a></li>")
    }
}
var lookupSearchText = "";
function BindGrids(pageLoad){
    for (var i = 0; i < GridList.length; i++) {
        $("#" + GridList[i].ID + "_ctl00_Footer").css("width", $("#" + GridList[i].ID + "_ctl00").css("width"));
        var mst = $find(GridList[i].ID).get_masterTableView();      
        var div = $(mst.get_element()).parent();
        div.css("max-height", div.outerHeight());
        div.css("height", "");
        var ls = Erp.IsListPage ? lookupSearchText : $("#" + GridList[i].ID).data("lookupSearchText");
        var opt = {
            "FormTag": FormTag, "EID": $.defaultVal($("#" + GridList[i].ID).attr("entityid"), ""), "@ID": $.defaultVal(getQS("ID"), ItemID), "@PID": $.defaultVal(getQS("PID"), ""),
            "IgnoreSchema": $.defaultVal($("#" + GridList[i].ID).attr("ignsch"), "0"), SQL: $("#" + GridList[i].ID + "_hdnQry").val(), GridGroup: $("#" + GridList[i].ID + "_hdnGroup").val(),
            EnableTreeview: $("#" + GridList[i].ID).attr("enabletreeview") == "1", EnableGrouping: $("#" + GridList[i].ID).attr("enablegrouping") == "1", SQLFilter: $("#" + GridList[i].ID + "_FltList").val(),
            AdvFilter: ls ? [{ Type: "SEARCH", Value: ls, Qry: $("#" + GridList[i].ID + "_FltList").children().eq(0).val() }] : ReadAdvancedFilter(GridList[i].ID),
            WF_FILTER: [$("#" + GridList[i].ID + "_WFFltList").selectedItem().attr("stage"), $("#" + GridList[i].ID + "_WFFltList").val()], DashboardFilter: _getDashFilter(),
            WfCode: $.defaultVal($("#" + GridList[i].ID).attr("wfcode"), ""), WfStage: $.defaultVal(getQS("WFStage"), ""), FormHash: FormHash, PageType: Erp.LayoutMode,
            FormID: FormID, ServerCommand: $("#" + GridList[i].ID).attr("enableservercommand") == "1"
        };
        var el = $("#" + GridList[i].ID);

        if (pageLoad && !GridList[i].BindOnload) {
            mst.set_dataSource([]);
            mst.dataBind();
            mst.set_virtualItemCount(0);
            addNewGridRow(GridList[i].ID, "Load");
            showGridProgress(GridList[i].ID, false);
            SetGridWidth(GridList[i].ID);
            el.data("Info",opt);
            continue;
        }
        if (Erp && Erp.WindowParams) {
            for (p in Erp.WindowParams)
                opt["@" + p] = Erp.WindowParams[p];
        }
        if (el.data("__ParamSet")) {
            var data = el.data();
            for (p in data) {
                if (!p.indexOf("@@") == 0)
                    continue;
                opt["@" + p.substring(2)] = data[p];
            }
        }
        var qs = GetQSColl();
        for (var x = 0; x < qs.length; x++) {
            var k = qs[x].Key.toLowerCase();
            if (_checkValidKeyName(k) && k != "title" && k != "_t1") {
                if (!opt.hasOwnProperty(qs[x].Key))
                    opt[qs[x].Key] = decodeURIComponent(qs[x].Value);
                if (!opt.hasOwnProperty("@" + qs[x].Key))
                    opt["@" + qs[x].Key] = decodeURIComponent(qs[x].Value);
            }

        }
        BindGrid(GridList[i].ID, opt);
    }
}
function RefreshGrid(id,refreshWfList,exportData,eventData){
    for(var i=0;i<GridList.length;i++){
        if (GridList[i].ID == id || $.isEmpty(id)) {
            //if ($("#" + GridList[i].ID).attr("custombind") == "1")
            //    return;
            var ls = Erp.IsListPage ? lookupSearchText : $("#" + GridList[i].ID).data("lookupSearchText");
            var opt = {
                OnBind: GridList[i].OnBind, "FormTag": FormTag, "EID": $.defaultVal($("#" + GridList[i].ID).attr("entityid"), ""), "@ID": $.defaultVal(getQS("ID"), ItemID),
                "@PID": $.defaultVal(getQS("PID"), ""), "IgnoreSchema": $.defaultVal($("#" + GridList[i].ID).attr("ignsch"), "0"), SQL: $("#" + GridList[i].ID + "_hdnQry").val(),
                GridGroup: $("#" + GridList[i].ID + "_hdnGroup").val(), EnableTreeview: $("#" + GridList[i].ID).attr("enabletreeview") == "1",
                EnableGrouping: $("#" + GridList[i].ID).attr("enablegrouping") == "1", SQLFilter: $("#" + GridList[i].ID + "_FltList").val(),
                AdvFilter: ls ? [{ Type: "SEARCH", Value: ls, Qry: $("#" + GridList[i].ID + "_FltList").children().eq(0).val() }] : ReadAdvancedFilter(GridList[i].ID),
                WF_FILTER: [$("#" + GridList[i].ID + "_WFFltList").selectedItem().attr("stage"), $("#" + GridList[i].ID + "_WFFltList").val()],
                DashboardFilter: _getDashFilter(), WfCode: $.defaultVal($("#" + GridList[i].ID).attr("wfcode"), ""), WfStage: $.defaultVal(getQS("WFStage"), ""),
                WfAction: $.defaultVal(getQS("WFAction"), ""), RefreshWfList: (refreshWfList == true), EventData: eventData, FormHash: FormHash, PageType: Erp.LayoutMode,
                FormID: FormID, ServerCommand: $("#" + GridList[i].ID).attr("enableservercommand") == "1"
            };
            var el = $("#" + GridList[i].ID);
            if (Erp && Erp.WindowParams) {
                for (p in Erp.WindowParams)
                    opt["@" + p] = Erp.WindowParams[p];
            }
            if (el.data("__ParamSet")) {
                var data = el.data();
                for (p in data) {
                    if (!p.indexOf("@@") == 0)
                        continue;
                    opt["@" + p.substring(2)] = data[p];
                }
            }

            var qs = GetQSColl();
            for (var x = 0; x < qs.length; x++) {
                var k = qs[x].Key.toLowerCase();
                if (_checkValidKeyName(k) && k != "title" && k != "_t1") {
                    if (!opt.hasOwnProperty(qs[x].Key))
                        opt[qs[x].Key] = decodeURIComponent(qs[x].Value);
                    if (!opt.hasOwnProperty("@" + qs[x].Key))
                        opt["@" + qs[x].Key] = decodeURIComponent(qs[x].Value);
                }

            }


            if (exportData)
                return BindGrid(GridList[i].ID, opt, null, "Export");
            else
                BindGrid(GridList[i].ID, opt);
        }
    }
    
}
function RefreshGridOnWFComplete(args, recur) {
    if (!recur)
        showGridProgress($find(args["GridID"]), true);

    Erp.WebApi.CanRefreshGrid(args, function (result) {
        if (!result)
            return;
        if (result["Abort"] == true)
            RefreshGrid(result["GridID"]);
        else if (result["Refresh"] == false)
            RefreshGridOnWFComplete(result, true);
        else
            RefreshGrid(result["GridID"],true);
    })
}
function _getDashFilter() {
    var flt = $.defaultVal(getQS("_dashFilters"), "").split(',');
    var xml = "";
    if (!$.isEmpty(flt[0])) {
        var id = $(window.frameElement).closest(".wdg").ID() + flt[0];
        xml = $.defaultVal(parent.FilterList[id], "");
    }
    return xml;
}
function RefreshFields(childData) {
    if (typeof childData != "undefined") {
        Erp.RefreshFields(childData);
        if (typeof refreshParentFields != "undefined")
            refreshParentFields(childData)
    }
}
function _getAdvFilterInfo(id) {
    for (var i = 0; i < GridList.length; i++) {
        if (GridList[i].ID == id) {
            return GridList[i].AdvFilter;
        }
    }
    return null;
}

var dateFilters = [
    { T: 'Equal To', V: 'EqualTo', I: 1,Type:"all" },
  { T: 'Not Equal To', V: 'NotEqualTo', I: 1, Type: "all" },
  { T: 'Greater Than', V: 'GreaterThan', I: 1, Type: "num" },
  { T: 'Greater Than Or Equal To', V: 'GreaterThanOrEqualTo', I: 1, Type: "num" },
  { T: 'Less Than', V: 'LessThan', I: 1, Type: "num" },
  { T: 'Less Than Or Equal To', V: 'LessThanOrEqualTo', I: 1, Type: "num" },
  { T: 'Between', V: 'Between', I: 1 },
  { T: 'In List Of Values', V: 'In', I: 1, Type: "text" },
  { T: 'Not In List Of Values', V: 'NotIn', I: 1, Type: "text" },
  { T: 'Contains', I: 1, V: 'Contains', Type: "text" },
  { T: 'Does Not Contain', I: 1, V: 'DoesNotContain', Type: "text" },

  { T: 'Is Null', V: 'IsNull', Type: "all" },
  { T: 'Is Not Null', V: 'NotIsNull', Type: "all" },
  { T: 'Today', V: 'TODAY' },
  { T: 'Tomorrow', V: 'TOMORROW' },
  { T: 'Yesterday', V: 'YESTERDAY' },
  { T: 'Next ? Days', V: 'NEXT?DAYS'},
  { T: 'Last ? Days', V: 'LAST?DAYS' },
  { T: 'Newer Than ? Days', V: 'NEWERTHAN?DAYS' },
  { T: 'Older Than ? Days', V: 'OLDERTHAN?DAYS' },
  { T: 'This Week', V: 'THISWEEK' },
  { T: 'Next Week', V: 'NEXTWEEK' },
  { T: 'Last Week', V: 'LASTWEEK' },
  { T: 'Next ? Weeks', V: 'NEXT?WEEKS' },
  { T: 'Last ? Weeks', V: 'LAST?WEEKS' },
  { T: 'Newer Than ? Weeks', V: 'NEWERTHAN?WEEKS' },
  { T: 'Older Than ? Weeks', V: 'OLDERTHAN?WEEKS' },
  { T: 'This Month', V: 'THISMONTH' },
  { T: 'Next Month', V: 'NEXTMONTH' },
  { T: 'Last Month', V: 'LASTMONTH' },
  { T: 'Next ? Months', V: 'NEXT?MONTHS' },
  { T: 'Last ? Months', V: 'LAST?MONTHS' },
  { T: 'Newer Than ? Months', V: 'NEWERTHAN?MONTHS' },
  { T: 'Older Than ? Months', V: 'OLDERTHAN?MONTHS' },
  { T: 'This Year', V: 'THISYEAR' },
  { T: 'Next Year', V: 'NEXTYEAR' },
  { T: 'Last Year', V: 'LASTYEAR' },
  { T: 'Next ? Years', V: 'NEXT?YEARS' },
  { T: 'Last ? Years', V: 'LAST?YEARS' },
  { T: 'Newer Than ? Years', V: 'NEWERTHAN?YEARS' },
  { T: 'Older Than ? Years', V: 'OLDERTHAN?YEARS' },
  { T: 'This Hour', V: 'THISHOUR' },
  { T: 'Next Hour', V: 'NEXTHOUR' },
  { T: 'Last Hour', V: 'LASTHOUR' },
  { T: 'Next ? Minutes', V: 'NEXT?MINUTES' },
  { T: 'Last ? Minutes', V: 'LAST?MINUTES' },
  { T: 'Newer Than ? Minutes', V: 'NEWERTHAN?MINUTES' },
  { T: 'Older Than ? Minutes', V: 'OLDERTHAN?MINUTES' }
];
var __EditGridItems = {};
var __ValidationGridItems = {};
var __CurrentEditingRow = null, __GridId=null;
function __gridRowDataBound(sender, args) {
    var tr = $(args.get_item().get_element());
    var grid = $(sender.get_element());
    var data = args.get_dataItem();
    tr.addClass("grid-row");
    if (data && data.hasOwnProperty(grid.attr("entityid") + "_" + grid.attr("pkfield")))
        tr.attr("pk", data[grid.attr("entityid") + "_" + grid.attr("pkfield")]);
    else if (data && data.hasOwnProperty(grid.attr("pkfield")))
        tr.attr("pk", data[grid.attr("pkfield")]);
    else
        tr.attr("pk", "");
    var clientKeys = grid.attr("clientkeys");
    clientKeys = clientKeys ? clientKeys.split(',') : [];
    for (var i = 0; i < clientKeys.length; i++)
        if(clientKeys[i])
            tr.attr(clientKeys[i], data[clientKeys[i]]);

    tr.children(".enableChk").find("input").setEnable(true);
    tr.children(".__lookup,.__multi,.__multilookup,.__date,.__hasFormat,.__file").each(function () {
        var td = $(this);
        var c = sender.get_masterTableView().get_columns()[td.index()];
        if (c) {
            if (td.hasClass("__file")) {
                td.data("TempName", "FromDB");
                td.data("FileName", $.defaultVal(data[c.get_dataField()], "#"));
                //td.prepend('<a class="grid-link" target="_blank" href="javascript:void(0)">Upload</a>')
            }
            else if (td.hasClass("__multilookup")) {
                var arr = $.defaultVal(data[c.get_dataField() + "_multilookup"], "").split(',');
                var arr2 = td.text().split(',');
                var arr3 = [];
                if (arr.length > 0 && !$.isEmpty(arr[0])) {
                    for (var i = 0; i < arr.length; i++) {
                        if ($.isEmpty(arr[i]))
                            continue;
                        arr3.push({ Text: $.defaultVal(arr2[i], "").Trim(), RecordID: arr[i].Trim() });
                    }
                }
                td.data("__value", arr3);
            }
            else if (td.hasClass("__multi")) {
                var arr = $.defaultVal(data[c.get_dataField()], "").split(',');
                for (var i = 0; i < arr.length; i++) {
                    if ($.isEmpty(arr[i]))
                        continue;
                    arr[i] = arr[i].Trim();
                }
                td.data("__value", arr);
            }
            else
                td.data("__value", data[c.get_dataField().split("_lookuptitle")[0]]);
        }
    });

    var newcols = grid.data("_NewItemcols");
    if (newcols) {
        for (var i = 0; i < newcols.length; i++)
            tr.cells(newcols[i].ind).html(newcols[i].tmpl);
    }
    var evt = grid.data("onrowdatabound");
    if (typeof evt == "function")
        evt(grid.attr("id"), { entityId: grid.attr("entityid"), row: tr });
    if (grid.attr("enabletreeview") == "1" || grid.attr("enablegrouping") == "1") {
        var maxlvl = Fn.CInt(grid.attr("treelevel"));
        var isParent = (Fn.CInt(data["__isParent"]) > 0 || Fn.CInt(data["__isparent"]) > 0);
        var lvl = Fn.CInt(data["__level"]);
        tr.removeClass("expand");
        if (isParent && lvl < maxlvl)
            tr.addClass("expand");
        if (grid.attr("enablegrouping") == "1" && Fn.CInt(data["__isgroupheader"] == 1)) {
            tr.html("<td " + (grid.attr("hideselectcolumn") == "1" ? "style='display:none'" : "") + " ></td>" + data["__grouptemplate"]);
            if (grid.attr("hidegroupdetails") != "1")
                tr.addClass("groupHeader" + (lvl == 0 ? " firstLvl" : ""));
        }
        if (grid.attr("enablegrouping") == "1" && Fn.CInt(data["__isgroupfooter"] == 1)) {
            tr.html("<td " + (grid.attr("hideselectcolumn") == "1" ? "style='display:none'" : "") + " ></td>" + data["__grouptemplate"]);
            if (grid.attr("hidegroupdetails") != "1")
                tr.addClass("groupFooter" + (lvl == 0 ? " firstLvl" : ""));
        }
        var td = tr.cells(1);

        __setIndent(grid, td, lvl, isParent);
        tr.setDisplay(lvl <= maxlvl);
        tr.attr("parentpk", $.defaultVal(data["__parent"], ""));

    }
}
function __setIndent(grid,td,lvl,isParent) {   
    var indent = "<span class='indent" + (isParent ? " _isparent" : "") + "'>";
    if (lvl > 0) {
        indent += (new Array(lvl + (td.parent().hasClass("groupFooter") ? 0 : 1)).join('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'));
    }
    var t = (td.parent().hasClass("groupFooter") ? "" : "Toggle Child Rows");
    indent += "<a href='javascript:void(0)' class='toggleChild' title='"+t+"' onclick='$.event.fix(event).stopPropagation();if(!$(this).parent().hasClass(\"_isparent\"))return;var tr=$(this).closest(\"TR\");tr.toggleClass(\"expand\");_toggleGridRowChildren(tr,tr.hasClass(\"expand\"))'></a>";
    if (grid.attr("allowaddnewrecords") == "1") {
        indent += "<a class='addChild' title='Add New Child Row' onclick='$.event.fix(event).stopPropagation();addNewGridChildRow($(this).closest(\"TR\"),\"" + grid.attr("id") + "\");' href='javascript:void(0)'></a>";
    }
    indent += "</span>";
    if (!isParent && lvl == 0 && grid.attr("hidegroupdetails") == "1")
        indent = "";
    td.html(indent + "<span class='cell'>" + td.html() + "</span>");
    td.addClass("treeCell");
    td.parent().attr("lvl", lvl);
    
}
function _toggleGridRowChildren(tr,show) {  
    var lvl = Fn.CInt(tr.attr("lvl"));
    while (true) {
        if (tr.next().hasClass("rgNoRecords"))
            tr = tr.next();
        if (Fn.CInt(tr.next().attr("lvl")) <= lvl)
            break;
        tr = tr.next();      
        if (!show)
            tr.setDisplay(show);
        else if (Fn.CInt(tr.attr("lvl")) == lvl + 1)
            tr.setDisplay(show);
        if (show && tr.hasClass("expand") && Fn.CInt(tr.attr("lvl")) == lvl + 1)
            _toggleGridRowChildren(tr, true);
    }
    return tr;
}
var __docEventSet = false;
function initGridSettings(gridId) {   
    var g = $("#" + gridId);
    if (Erp.Responsive) {
        var pgr = $("#" + gridId + "_ctl00_Pager").find(".rgPagerCell");
        pgr.find(".rgArrPart1").children().eq(0).val("\uf100").next().val("\uf104");
        pgr.find(".rgArrPart2").children().eq(0).val("\uf105").next().val("\uf101");
        var hdr = $("#" + gridId + "_ctl00_Header");
        hdr.find(".rgSortAsc").val("\uf176"); hdr.find(".rgSortDesc").val("\uf175");
    }
    window.setTimeout(function () { SetGridWidth(gridId); }, 1000);
    var headerRow = $("#" + gridId + "_ctl00_Header").children("THEAD").children("TR").first();
    var trFooter = $("#" + gridId + "_ctl00_Footer").find(".rgFooter");
    trFooter.NewID(gridId + "-ftr-");
    trFooter.children().each(
      function (i) {
          var ctl = $(this);
          ctl.NewID("ftr");
          _initCellEditor($(this).index(), ctl, g, headerRow,true);
      });
    createFilterList(gridId);
    if (!Erp.Responsive)
        toggleGridFilter(gridId, true);
    if (g.attr("enablesortorder") == "1") {        
        $("#" + gridId + "_ctl00>tbody").sortable({
            cursorAt: { top: -10,left:10 },
            handle: ".sortCell",
            sort: function (event, ui) {
                //console.log(ui.item.attr("lvl") + "-------" + ui.placeholder.prev().attr("lvl"))
                window.__validSort = ($.defaultVal(ui.item.attr("parentpk"), "") == $.defaultVal(ui.placeholder.next().attr("parentpk"), ""));
                ui.placeholder.setDisplay(window.__validSort);
            },           
            update: function (e, ui) {
                
            },
            start: function (event, ui) {
                //console.log(event); console.log(ui);
                window.__dep = null;
                var g = $(event.target).closest(".RadGrid");
                if (g.attr("enabletreeview") == "1") {
                    __dep = $();
                    var r = ui.item.next().next();//next is ui-sortable-placeholder
                    while (Fn.CInt(r.attr("lvl")) > Fn.CInt(ui.item.attr("lvl"))) {
                        __dep = __dep.add(r);
                        r = r.next();
                    }
                }
            },
            stop: function (event, ui) {
                //console.log(event); console.log(ui);
                if (!window.__validSort) {
                    $(this).sortable('cancel');
                    return;
                }
                var g = $(event.target).closest(".RadGrid");
                ui.item.after(window.__dep);
                setGridSortOrder(ui.item.closest(".RadGrid").attr("id"));
            }
        });
        $("#" + gridId + "_dgToggleFilter").hide();
    }
    if (g.attr("showfooter") == "1") {
        $("#" + gridId + "_GridFooter").parent().show();
    }
    if (g.attr("showHeader") == "0") {
        $("#" + gridId + "_GridHeader").parent().hide();
    }
    if (g.attr("showFilter") == "0") {        
        $("#" + gridId + "_dgToggleFilter").hide();
    }
    if (g.attr("expandfilter") == "1") {
        $("#" + gridId).addClass("expandFilter");
    }
    if (g.attr("expandfilter") == "2") {
        $("#" + gridId).addClass("expandFilter alwaysExpandFilter");
    }
    if (g.attr("expandfilter") == "3") {
        $("#" + gridId).addClass("expandFilter alwaysExpandFilter showPreview hideGrid");
    }
    if (g.attr("showSetting") == "0") {
        $("#" + gridId + "_gridFilter").children(".grid-adv-setting-btn").hide();
    }
    if (g.attr("showFilter") == "0" && g.attr("showSetting") == "0")
        $("#" + gridId + "_gridFilter").hide();
    if (g.attr("disablescroll") == "1") {
        $("#" + gridId + "_GridData").css({ "max-height": "none" });
    }    
    var firstRow = $("#" + gridId + "_ctl00").children("TBODY").children("TR").first();
    firstRow.children(".enableChk").find("input").setEnable(true);
    g.data("_NewRowHtml", firstRow.html());


    if (!$("#" + gridId + "_ctl00").hasClass("EditGrid"))
        return;

    if (!__docEventSet) {
        var d = $("<div id='__divGridHighlight' style='top:0;left:0;right:0;bottom:0;position:fixed;z-index:999;display:none'></div>")
        $("body").append(d)
        d.on("click", function (e) { if ($("#divSearchListCtr").isVisible()) return; finishRowEditing(); });//
        __docEventSet = true;
    }
    //g.on("click", function (e) { e.stopPropagation(); });
    
   
    $("#" + gridId + "_GridData").css("margin-top", "-2px");
    $("#" + gridId + "_ctl00").css("margin", "2px 0");
    var arr = [],arr1=[];
    $("#" + gridId + "_EditContainer").children().each(
        function (i) {
            var ctl = $(this).children()
            if (i == 0 || ctl.length == 0) {//select column
                arr.push("");
                return true;
            }
            ctl.NewID("editor");
            var id = ctl.attr("id");
            arr.push(id); 
            _initCellEditor($(this).index(), ctl, g, headerRow, false);
            if ($("#" + id + "-field").attr("mandatory") == "1")
                arr1.push(i);
        });
    __EditGridItems[gridId] = arr;
    __ValidationGridItems[gridId] = arr1;
    $("#" + gridId + "_ctl00").on("click", "td", function (e) {
        var td = $(this);
        var g = td.closest(".RadGrid").attr("id");
        if ($("#" + g).attr("disabled"))
            return true;
        var evt = $("#" + g).data("onrowselected");
        if (typeof evt == "function") {
            evt(g, { entityId: $("#" + g).attr("entityid"), row: td.parent() });
        }
        if (!td.hasClass("editableCell"))
            return true;
        if ($("#" + g).data("DisableInlineEditing"))
            return true;
        if (td.hasClass("enableChk") && $(e.target).prop("tagName") == "INPUT") {
            //editCellBegin(td, g)
            var chk = td.find("input");
            if (td.data("__dbValue") === undefined) {
                td.data("__dbValue", !chk.checked());
            }
            td.removeClass("modified").addClass(td.data("__dbValue") != chk.checked() ? "modified" : "");
            if (td.parent().removeClass("rowChanged").children(".modified").exists()) {
                td.parent().addClass("rowChanged");
            }
        }
        var tr = td.parent();
        if (td.prop("tagName") != "TD")
            td = td.closest("TD");
        
        if (tr.hasClass("editingRow")) {
            if ($("#" + g).attr("enablecellmode") == "1") {
                var ar = $("#" + g).data("EditArray");
                if ($.isArray(ar) && ar.length > 0 && ar[0]!=td.index()) {
                    var prv = $(tr[0].cells[ar[0]]);
                    applyCellValues(gridId, prv, prv.children(".edtCtr"));
                }
            }
            focusCell(td, g);
            if (td.hasClass("enableChk") && $(e.target).prop("tagName") == "INPUT") {
                var chk = td.find("input");
                _gridCellChange(chk, chk.checked(), chk);
            }
            else if (td.hasClass("__file") && $(e.target).prop("tagName") == "A") {
                _showCommonUpload(td,g);
            }
            return true;
        }
        //var d1 = new Date();
        if (!finishRowEditing(__CurrentEditingRow, __GridId))
            return true;
        __GridId = g;
        __CurrentEditingRow = tr;
        //console.log("a" + ((new Date()) - d1));
        //window. d2 = new Date();
        beginRowEditing(__CurrentEditingRow, g, td);
        //console.log("d" + ((new Date()) - d2));
        focusCell(td, g);
        if (td.hasClass("enableChk") && $(e.target).prop("tagName") == "INPUT") {
            var chk = td.find("input");
            _gridCellChange(chk, chk.checked(), chk);
        }
        else if (td.hasClass("__file") && $(e.target).prop("tagName") == "A") {
            _showCommonUpload(td,g);
        }
    });
    $("#" + gridId + "_ctl00").on("keydown", "td", function (e) {
        //console.log(e.keyCode)
        var td = $(this);
        var g = td.closest(".RadGrid").attr("id");
        if ($("#" + g).data("DisableInlineEditing"))
            return true;
        if (td.prop("tagName") != "TD")
            td = td.closest("TD");
        if (!td.parent().hasClass("editingRow"))
            return true;
        var nextTd = null;
        if (e.keyCode == 27) {
            cancelEditing();
            return true;
        }
        else if (e.keyCode == 9) {
            e.stopPropagation();
            e.preventDefault();
            nextTd = findNextEditCell(e.shiftKey, td);
        }
        else if (e.keyCode == 40 && $(e.target).hasClass("ui-multi")) {
            td.find(".expandMultiLine").trigger("click");
        }
        else if (e.keyCode == 13) {//e.keyCode == 38 || e.keyCode == 40 || 
            nextTd = changeRowFocus(e.keyCode == 38 || (e.shiftKey && e.keyCode == 13), td);
            e.preventDefault();
        }
        if (!nextTd)
            return true;
        if (nextTd.parent()[0] == td.parent()[0]) {
            if ($("#" + g).attr("enablecellmode") == "1") {
                td.find("input").blur();
                window.setTimeout(function () {
                    var ar = $("#" + g).data("EditArray");
                    if ($.isArray(ar) && ar.length > 0 && ar[0] != nextTd.index()) {
                        var prv = $(td.parent()[0].cells[ar[0]]);
                        applyCellValues(gridId, prv, prv.children(".edtCtr"));
                    }
                    focusCell(nextTd, g);
                }, 150);
            }
            else
                focusCell(nextTd, g);
        }
        else {

            td.find("input").blur();
            window.setTimeout(function () {
                if (!finishRowEditing(td.parent(), g)) {
                    td.removeClass("focussedCell");
                    focusCell(td,g);
                    return;
                }
                __GridId = g;
                nextTd.trigger("click");
            }, 150);
        }
    });

    
}
function _initCellEditor(index, ctl, g, headerRow, isFooter) {
    if (isFooter && ctl.contents().length == 1) {
        var t = ctl.text();
        if (t.length == 1 && t.charCodeAt(0) == 160)
            ctl.empty();
    }
    if (ctl.length == 0)
        return;
    var gridId = g.attr("id");
    var id = ctl.attr("id");
    var input = ctl.children(":first");
    if (input.length <= 0)
        return;
    var apnd = input.attr("append");
    if (!$.isEmpty(apnd)) {
        var el = apnd.indexOf("@") == 0 ? Erp.GetField(apnd).GetElement() : $("#" + apnd);
        if (el.parent().hasClass("entityValue"))
            input.after(el.closest(".entity"));
        input.remove();
        return;
    }
    var ft = input.attr("fieldtype");
    if ($.isEmpty(ft)) {       
        return;
    }
    ctl.addClass("hasEditor");
    if (!isFooter)//footer not alowed
        input.attr("editorid", id + "-field");
    var fld = Erp.CreateField(input);
    var el = $("#" + fld.Info.ID);
    fld.Info.Name = g.attr("entityid") + "_" +$("#"+gridId+"_EditContainer").node(index).attr("fld");
    fld.Info.ReqForCalc = true;
    fld.Info.GridID = gridId;
    if (!isFooter)
        fld.RegisterEvent("change", _gridCellChange);
    if (ft == "DATETIME" || ft == "DATE")
        el.datepicker("option", "showOn", "").on("click", function () { $(this).datepicker("show"); });
    if (ft == "MULTILINE" || ft == "RICHTEXT") {
        el.attr("rows", 1).after("<a href='javascript:void(0)' onclick='expandMultiLine(this)' class='expandMultiLine'></a>");
        if (!$("#divMultiLineEdit").exists()) {
            $(document.body).append("<div id='divMultiLineEdit'><textarea rows='10'></textarea></div>");
            $("#divMultiLineEdit").find("textarea").on("blur", function () {
                var t = $(this);
                if (!t.isVisible())
                    return;
                $("#" + t.parent().data("_refid")).val(t.val());
                t.val("").parent().hide();
            }).on("keydown", function (e) {

                var t = $(this);
                if (e.keyCode == 9) {
                    t.parent().hide();
                    $("#" + t.parent().data("_refid")).focus().val(t.val());
                    t.parent().removeData("_refid");
                    t.val("");
                    e.preventDefault();
                    e.stopPropagation();
                }
                else if (e.keyCode == 27) {
                    t.parent().hide();
                    $("#" + t.parent().data("_refid")).focus();
                    t.parent().removeData("_refid");
                }
            });
        }
    }

}

function highlightEditingGrid(gridId) {
    $("#" + gridId).css({ "position": "relative", "z-index": 3000 });
    $("#__divGridHighlight").show();
}
function cancelHighlightEditingGrid(gridId) {
    $("#" + gridId).css({ "position": "", "z-index": "" });
    $("#__divGridHighlight").hide();
}
function enableKeyboardForList(txt) {
    //return;
    txt.attr("readonly", "readonly");
    if (Erp.Touch) {        
        return;
    }


    txt.on("focus", function () {
        var t = $(this);
        window.setTimeout(function () { t.removeAttr("readonly"); }, 100);
        if ($.isEmpty(t.attr("actualid")))
            t.attr("actualid", t.attr("id"));
        t.attr("id", "txt" + (new Date()) / 1)
        t.data("_OldRecordID", t.data("RecordID"));
        t.data("_OldText", t.val());
    });
    txt.on("blur", function () {
        var t = $(this);
        t.attr("readonly", "readonly");
        t.attr("id", t.attr("actualid"))
       // $(this).trigger("checkchange");
    });
    txt.on("checkchange", function () {
        var t = $(this);
        var oldid = $.defaultVal(t.data("RecordID"), "");
        if (t.val() == "") {
            t.removeData("RecordID");
            t.data("Keys", []);
            t.removeData("CurrentRow");
            t.next().hide();
        }
        else if (!$.isEmpty(t.data("_TmpRecordID"))) {
            t.data("RecordID", t.data("_TmpRecordID"));
            t.data("Keys", t.data("_TmpKeys"));
            t.data("CurrentRow", t.data("_TmpRow"));
            t.val(t.data("_TmpText"));
            t.next().show();
        }
        else if (!$.isEmpty(t.data("_OldText")))
            t.val(t.data("_OldText"));

        if ($.isEmpty(t.data("RecordID"))) {
            t.val("");            
            t.data("Keys", []);
            t.removeData("CurrentRow");
            t.next().hide();
        }
        if (t.val() == "" && Erp.Responsive)
            t.closest(".erp-Select").find("._lbl").removeClass('active');
        t.removeData("_OldRecordID");
        t.removeData("_OldText");
        t.removeData("_TmpRecordID");
        t.removeData("_TmpText");        
        //$("#divSearchListCtr").removeData("CurrentField").hide().children(".sl-div-ifr").children("iframe").hide();
        if ($.defaultVal(t.data("RecordID"),"") != oldid)      
            t.trigger("selectchange");
    });
    txt.on("keydown", function (e) {       
        var t = $(this);
        if (e.ctrlKey || e.altKey)
            return true;
        var ctr = getSearchlistCtr();
        if (e.keyCode == 27) {
            if (ctr.isVisible())
                e.stopPropagation();
            ctr.hide().children(".sl-div-ifr").children("iframe").hide();
            t.removeData("_TmpRecordID");
            t.removeData("_TmpText");
            t.trigger("checkchange");
            return true;
        }
        if (e.keyCode == 9 || e.keyCode == 13) {            
            if (ctr.isVisible()) {
                if (e.keyCode == 13)
                    e.stopPropagation();
            }
            else
                return true;
            ctr.hide().children(".sl-div-ifr").children("iframe").hide();
            t.trigger("checkchange");
            if (e.keyCode == 13)
                t.focus().select();
            return true;
        }
        if (e.shiftKey || e.keyCode == 39 || e.keyCode == 37)
            return;

        var ifr = getSearchListIframe("ifr_" + t.data("Eids") + t.data("FieldID") + t.data("LookupCode"));
        if (!ifr.exists()) {
            showSearchList(t, true);
            return;
        }        
        ctr.data("CurrentField", t.attr("id"));
        var vis=ifr.isVisible();
        if (!vis)
            showSearchList(t, true);
        if (t.data("InlineMode")) {
            if (vis && (e.keyCode == 38 || e.keyCode == 40)) {
                e.preventDefault();
                changeSingleSelectGridRowFocus(e.keyCode == 38, t.attr("actualid"));
            }
        }
        else {
            ifr = ifr[0];
            if (!ifr || !ifr.contentWindow || typeof ifr.contentWindow.changeSingleSelectGridRowFocus != "function")
                return;
            if (vis && (e.keyCode == 38 || e.keyCode == 40)) {
                e.preventDefault();
                ifr.contentWindow.changeSingleSelectGridRowFocus(e.keyCode == 38);
            }
        }
            
    });
    txt.on("input", $.debounce(250, function (e) {
        var t = $(this);
        t.data("hasInput", true);
        var ifr = getSearchListIframe("ifr_" + t.data("Eids") + t.data("FieldID") + t.data("LookupCode"));
        if (!ifr.isVisible() || !ifr.exists())
            return;
        if (t.data("InlineMode")) {
            filterSingleSelectGridRecords(t.val(), $.defaultVal(t.attr("rpt-fieldid"), t.attr("actualid")));
        }
        else {
            ifr = ifr[0];
            if (ifr && ifr.contentWindow && typeof ifr.contentWindow.filterSingleSelectGridRecords == "function")
                ifr.contentWindow.filterSingleSelectGridRecords(t.val());
        }
    }));
}
function expandMultiLine(a) {
    a = $(a);
    var m = $("#divMultiLineEdit");
    if (m.data("_refid") == a.prev().attr("id")) {
        m.removeData("_refid");
        m.hide();
        return true;
    }
    m.zIndex(3400)
    m.data("_refid", a.prev().attr("id"))
        .show()
        .position({ my: "left top", "at": "left bottom", of: a.prev() })
        .find("textarea").focus().val(a.prev().val());
}
function focusCell(td, gridId) {
    if (td.hasClass("focussedCell"))
        return;    
    var tr = td.parent();
    if (gridId && tr.hasClass("editingRow"))
        editCellBegin(td, gridId);
    tr.children().removeClass("focussedCell");
    td.addClass("focussedCell");
    td.attr("tabindex", 0);
    var ctl = td.children(".hasEditor");
    if (ctl.exists()) {
        Erp.GetField(ctl.attr("id") + "-field").GetElement().focus().select();
    }
    else
        td.find("input").focus().select();
    if (td.children(".edtCtr").children().hasClass("entity-disabled"))
        td.focus();
}
function changeRowFocus(up,td) {
    if (td.prop("tagName") != "TD")
        td = td.closest("TD");
    var tr = td.parent();
    var newTr = up ? tr.prev() : tr.next();
    while (newTr.exists() && !newTr.isVisible()) {
        newTr = up ? newTr.prev() : newTr.next();
    }
    if (newTr.exists() && newTr.isVisible()) {
        return newTr.children().eq(td.index());//.trigger("click");
    }
    return null;
}
function findNextEditCell(left,td) {
    if (td.prop("tagName") != "TD")
        td = td.closest("TD");
    var _td = td;
    while (true) {
        _td = left ? _td.prev() : _td.next();
        if (!_td.exists())
            break;
        if (!_td.isVisible())
            continue;
        if (_td.hasClass("editableCell") && _td.children(".edtCtr").children().hasClass("entity-disabled"))
            continue;
        if (_td.hasClass("editableCell"))
            break;
        
    }
    if (!_td.exists()) {
        var tr = left ? td.parent().prev() : td.parent().next();
        while (tr.exists() && !tr.isVisible()) {
            tr = left ? tr.prev() : tr.next();
        }

        if (tr.exists() && tr.isVisible()) {
            _td = tr.children(".editableCell").filter(left ? ":last" : ":first");
            if (!_td.isVisible() || _td.children(".edtCtr").children().hasClass("entity-disabled"))
                return findNextEditCell(left, _td);
            else
                return _td;
        }
    }
    else
        return _td;
}

function addNewGridChildRow(tr, gridId) {
    if ($.isEmpty(Erp.Grid.GetEditorValue(gridId,1,tr)))
        return;
    var newtr = addNewGridRow(gridId, "Add");
    var grid = $("#" + gridId);
    if (!newtr)
        return;
    if (!tr.hasClass("expand")) {
        tr.addClass("expand")
        _toggleGridRowChildren(tr, true);
    }
    //var lv=Fn.CInt( tr.attr("lvl"));
    //var nxtTr = tr;
    //while (true) {
    //    if (Fn.CInt(nxtTr.next().attr("lvl")) <= lv)
    //        break;
    //    nxtTr = nxtTr.next();
    //}
    //nxtTr.after(newtr);
    tr.after(newtr);
    tr.cells(1).children(".indent").addClass("_isparent");
    var pk = tr.attr("pk");
    if (!pk) {
        pk=tr.cells(0).NewID("tdSelect").attr("id");
        tr.attr("_tk", pk);
        pk = "#TOKEN#:" + pk;
    }
    newtr.cells(1).children(".indent").remove();
    newtr.attr("parentpk", pk);
    __setIndent(grid, newtr.cells(1), Fn.CInt(tr.attr("lvl")) + 1, false);
}
function addNewGridRow(gridId, type, evaluated) {
    var grid = $("#" + gridId);
    var tbl = $("#" + gridId + "_ctl00>tbody");
    var evt = grid.data("onrowadding");
    var valid = true;

    if (type != "Load" && type != "Bind" && type != "AddNoCheck" && typeof evt == "function") {
        if (evaluated != true) {
            if (grid.data("__processing")) {
                //console.log("return")
                return;
            }
            var refs = hasDbReferences(evt, "grid");
            if (refs.length > 0) {
                grid.data("__processing", true);
                evaluateDbReferences(refs, addNewGridRow, gridId, type, true);
                return;
            }

        }
        valid = evt(gridId, { entityId: $("#" + gridId).attr("entityid"), row: tbl.children(":visible").last() });
    }
    if (valid === false)
        return;
    grid.removeData("__processing");

    var ctr = 1;
    if (type == "Load") {
        var totalRec = tbl.children(":visible").length;
        if (grid.attr("allowaddnewrecords") != "1" || (grid.data("_blankRowAdded") == 1 && totalRec > 0))
            return;
        var maxrec = grid.attr("maxnewrecords") / 1;
        maxrec = maxrec >= 1 ? maxrec : 0;
        var defrec = grid.attr("defaultnewrecords") / 1;
        if (maxrec > 0 && totalRec >= maxrec)
            return;
        defrec -= totalRec;
        defrec = defrec < 1 ? 1 : defrec;
        if (maxrec > 0 && defrec + totalRec > maxrec)
            defrec = maxrec - totalRec;

        ctr = defrec;
        grid.data("_blankRowAdded", 1);
    }
    else if (type == "Check"){
        if (grid.attr("allowaddnewrecords") != "1")
            return;
        var maxrec = grid.attr("maxnewrecords") / 1;
        maxrec = maxrec >= 1 ? maxrec : 0;
        if (maxrec > 0 && tbl.children(":visible").length >= maxrec)
            return;
    }

    evt = grid.data("onrowadded");
    var hsEvt = (typeof evt == "function");
    var newRow = null;
    for (var i = 0; i < ctr; i++) {
        newRow = $("<tr class='newRow grid-row'>" + $("#" + gridId).data("_NewRowHtml") + "</tr>");
        tbl.append(newRow);
        newRow.addClass((newRow.prev().hasClass("rgRow") ? "rgAltRow" : "rgRow"));
        var id = (newRow.prev().hasClass("rgNoRecords") ? newRow.prev().prev() : newRow.prev()).attr("id");
        if (!id)
            id = gridId + "_ctl00__0";
        newRow.NewID(id.split("__")[0] + "__");
        if (hsEvt && type != "Load") {
            evt(gridId, { entityId: $("#" + gridId).attr("entityid"), row: newRow });
        }
        if (grid.attr("enabletreeview") == "1") {
            __setIndent(grid, newRow.cells(1), 0, false);
        }
    }
    setGridSortOrder(gridId);
    if ($("#" + gridId + "_ctl00").outerHeight() > $("#" + gridId + "_GridData").outerHeight())// || $("#" + gridId + "_ctl00").outerWidth() > $("#" + gridId + "_GridData").outerWidth())
        $("#" + gridId + "_GridHeader").css("margin-right", "19px");
    else
        $("#" + gridId + "_GridHeader").css("margin-right", "");
    if (type == "Add" || type == "AddNoCheck")
        return newRow;
}

function beginRowEditing(tr, gridId, td) {

    if ($("#" + gridId).attr("disabled"))
        return;
    if (!$("#" + gridId + "_cmd").children(".dgProgress").children().isDisplayNone())
        return;
    var evt = $("#" + gridId).data("onrowediting");
    tr.addClass("editingRow");
    if (typeof evt == "function" && evt(gridId, { entityId: $("#" + gridId).attr("entityid"), row: tr }) === false) {
        return;
        tr.removeClass("editingRow");
    }
    highlightEditingGrid(gridId)
    for (var i = 0; i < DbReferences.length; i++) {
        var d = DbReferences[i];
        var c = d.Columns;
        if (c.indexOf("$.") != 0)
            continue;
        d.Loaded = false;
    }
    $("#" + gridId).data("_editModeOn", true);
    tr.cells(0).children(".gridSelect").attr("class", "cancelEditing").attr("title", "Cancel Editing");
    
    if ($("#" + gridId).attr("enablecellmode") == "1")
        editCellBegin(td, gridId);
    else
        tr.children(".editableCell").each(function () { editCellBegin($(this), gridId); });
    if (!tr.next().isDisplayNone())
        return;
    if (!tr.next().exists() || tr.parent().children(":visible").last().index() == tr.index())
        addNewGridRow(gridId, "Check");

}
var __loadingEditor = false;
function editCellBegin(td, gridId) {    
    if (td.prop("tagName") != "TD")
        td = td.closest("TD");
    if (td.hasClass("editing"))
        return;
    if (!td.hasClass("editableCell"))
        return;
    if (td.hasClass("__file"))
        return;
    if ($("#" + gridId).attr("enablecellmode") == "1") {
        //var edtArray = $("#" + gridId).data("EditArray");
        //if (!edtArray) {
        //    edtArray = [];
        //    $("#" + gridId).data("EditArray", edtArray);
        //}
        //edtArray.push(td.index());
        $("#" + gridId).data("EditArray", [td.index()]);
    }
    if (td.hasClass("enableChk"))
        return;

    td.addClass("editing");
    var id = __EditGridItems[gridId][td.index()];
    if (id == "")
        return;
    var grid = Erp.Grid._getGridView(gridId);
    var cols = grid.get_columns();
    var dataField = Erp.Grid.GetColumnFieldName(gridId, cols[td.index()]);
    var colName = Erp.Grid.GetColumnUniqueName(gridId, cols[td.index()]);

    var ctl = $("#" + id).show();
    var cell = td.children(".cell");
    var v = (cell.length > 0 ? cell.text() : td.text());
    if ($.isEmpty(v))
        v = "";
    var _v = td.data("__value");
    if (td.data("__dbValue") === undefined) {        
        td.data("__dbValue",  v);
    }
    if (!cell.exists()) {
        td.html("<span class='cell'>" + v + "</span>");
    }
    
    _v = (_v != undefined && _v != null ? _v : v);
    var evt = $("#" + gridId).data("oncellediting");
    var r = null;
    if (typeof evt == "function")
        r = evt(gridId, { entityId: $("#" + gridId).attr("entityid"), colName: colName, dataField: dataField, editor: ctl.hasClass("hasEditor") ? Erp.GetField(id + "-field") : ctl, value: _v, text: (v == "" ? "     " : v), cell: td, row: td.parent() });
    if (r === false) {
        td.removeClass("editing");
        return;
    }
    td.append(ctl);
    if (r === true)
        return;
    __loadingEditor = true;
    if (ctl.hasClass("hasEditor")) {
        Erp.SetFieldValue(ctl.attr("id") + "-field", _v, (v == "" ? "     " : v));
    }
    else
        ctl.find("input").val(v);
    __loadingEditor = false; 
}

function finishRowEditing(tr, gridId) {    
    if (!tr) {
        tr = __CurrentEditingRow;
        if (!gridId && tr)
            gridId = tr.closest(".RadGrid").attr("id");
        else if (gridId != __GridId)
            return;
    }
    if (!tr || !tr.hasClass("editingRow"))
        return true;
    var valid = true;
    var evt = $("#" + gridId).data("oncellvalidating");
    var hasEvt = false;
    if (typeof evt == "function")
        hasEvt = true;
    var cellMode = ($("#" + gridId).attr("enablecellmode") == "1");
    var grid = Erp.Grid._getGridView(gridId);
    var cols = grid.get_columns();
    var skip = false;
    var cells = tr.children(".editableCell");
    if (!cellMode)
        cells.removeClass("entity-error").attr("title", "");
    skip = Erp.Grid.IsEmptyRow(gridId, tr, cells);
    //if (tr.hasClass("newRow") && !tr.attr("pk")) {
    //    var hasVal = false;
    //    cells.each(function () {
    //        var td = $(this);
    //        var ctl = td.children(".edtCtr");
    //        if (ctl.hasClass("hasEditor")) {
    //            var v = Erp.GetFieldValue(ctl.attr("id") + "-field")
    //            if (v != null && v != undefined && v) {
    //                if ($.isArray(v) && (v.length <= 0 || $.isEmpty(v[0])))
    //                    return true;
    //                hasVal = true;
    //                return false;
    //            }
    //        }
    //        else if (td.hasClass("__file")) {
    //            hasVal = !($.isEmpty(td.data("TempName")) && $.isEmpty(td.data("_TempName")));
    //            return !hasVal;
    //        }
    //        else if (!$.isEmpty(td.text())) {
    //            hasVal = true;
    //            return false;
    //        }

    //    });
    //    skip = !hasVal;
    //}
    
    if (!skip) {
        if (cellMode) {
            var arr = __ValidationGridItems[gridId];
            cells = $();
            $(arr).each(function () {
                var ind = this;
                var td = $(tr[0].cells[ind]);
                cells = cells.add(td);
            });
        }
        cells.each(function () {
            var td = $(this);
            if (td.hasClass("__file")) {
                var _id = __EditGridItems[gridId][td.index()];
                var _edt = $("#" + _id);
                if (_edt.attr("mandatory")=="1" && $.isEmpty(td.data("_TempName")) && $.isEmpty(td.data("TempName"))) {
                    td.addClass("entity-error").attr("title", "Field is mandatory");
                    valid = false;
                    return true;
                }
            }
            if (td.hasClass("enableChk"))
                return true;
            var ctl = td.children(".edtCtr");
            if (!td.hasClass("__file") && !ctl.hasClass("hasEditor")) {
                if (cellMode && $.isEmpty(td.text())) {
                    td.addClass("entity-error").attr("title", "Field is mandatory");
                    valid = false;
                }
                return true;
            }
            var id = ctl.attr("id");
            var err = "";
            var val = "";
            if (td.hasClass("__file")) {
                val = Erp.Grid.GetEditorValue(gridId,td);
            }
            else {
                var inf = Erp.GetFieldInfo(id + "-field");
                if (!inf)
                    return true;
                err = Erp.ValidateField(inf);
                val = Erp.GetFieldValue(id + "-field");
            }
            
            if (hasEvt && $.isEmpty(err)) {
                var dataField = Erp.Grid.GetColumnFieldName(gridId, cols[td.index()]);
                var colName = Erp.Grid.GetColumnUniqueName(gridId, cols[td.index()]);
               
                err = evt(gridId, { entityId: $("#" + gridId).attr("entityid"), colName: colName, dataField: dataField, editor: Erp.GetField(id + "-field"), value: val, cell: td, row: td.parent() });
            }
            td.removeClass("entity-error").attr("title", "");
            if (!$.isEmpty(err)) {
                td.addClass("entity-error").attr("title", err);
                focusCell(td, gridId);
                valid = false;
            }
        });
    }
    
    if (!valid)
        return false;
    evt = $("#" + gridId).data("onrowvalidating");
    if (typeof evt == "function") {
        var err = evt(gridId, { entityId: $("#" + gridId).attr("entityid"), row: tr });
        if (!$.isEmpty(err)) {
            var tdErr = $(tr[0].cells[0]);
            tdErr.children(".saveError").remove();
            tdErr.append("<span class='saveError' title=\"" + $.encodeXml(err, true) + "\"></span>");
            valid = false;
        }
    }
    if (valid==false)
        return false;
    //return true;
    if (cellMode) {
        var edtArray = $("#" + gridId).data("EditArray");
        var used = {};
        cells = $();
        $(edtArray).each(function () {
            var ind = this;
            if (used["a" + ind])
                return true;
            used["a" + ind] = true;
            var td = $(tr[0].cells[ind]);
            cells = cells.add(td);
        });
        cells.removeClass("entity-error").attr("title", "");
    }
    cells.each(function () {    
        var td = $(this);
        applyCellValues(gridId, td, td.children(".edtCtr"));
    });
    tr.removeClass("editingRow");
    if (tr.removeClass("rowChanged").children(".modified").exists()) {
        tr.addClass("rowChanged");
    }
    var tdErr = $(tr[0].cells[0]);
    tdErr.children(".saveError").remove();
    tdErr.children(".cancelEditing").attr("class", "gridSelect").attr("title", "");
    __CurrentEditingRow = null;
    $("#" + gridId).removeData("_editModeOn").removeData("EditArray");
    if (valid)
        cancelHighlightEditingGrid(gridId);
    
    return valid;
}
function applyCellValues(gridId, td, ctl) {
    td.removeClass("focussedCell");
    if (td.hasClass("enableChk"))
        return true;
    if (td.hasClass("__file")) {
        if (!$.isEmpty(td.data("_TempName"))) {
            td.data("TempName", td.data("_TempName"));
            td.addClass("modified");
            td.removeClass("entity-error").attr("title", "");
            td.removeClass("focussedCell");
            td.removeData("_TempName");
        }
        return true;
    }
    if (!td.hasClass("editing"))
        return true;
    td.removeClass("editing");
    var val = "";
    var isNum = false;
    if (ctl.hasClass("hasEditor")) {
        var inf = Erp.GetFieldInfo(ctl.attr("id") + "-field");
        if (inf) {
            val = Erp.GetFieldValue(inf, inf.DataType == "MULTISELECT" ? true : undefined);
            if (inf.DataType == "SINGLESELECT") {
                td.data("__value", val);
                if (!$.isEmpty(val)) {
                    if (inf.Type == "Text")
                        val = ctl.find("select").selectedItem().text()
                    else
                        val = ctl.find("input").val();
                }
                val = (val == "     " ? "" : val);
            }
            else if (inf.Type == "DateTime" || inf.Type == "Date" || inf.Type == "Time") {
                if (val != null && val !="" && val != undefined)
                    val = moment(val, "YYYY-MM-DD hh:mm A").toDate();
                td.data("__value", val);
            }
            else if (inf.Type == "Number") {
                var inp = ctl.find("input");
                val = inp.data("autoNumeric") ? inp.autoNumeric("get") : ctl.find("input").val();
                isNum = true;
            }            
            else if (inf.Type == "Multi") {
                td.data("__value", val);
                var v = "";
                for (var i = 0; i < val.length; i++) {
                    v += val[i].Text + (i < val.length - 1 ? ", " : "");
                }
                val = v;
            }
            else if (inf.DataType == "MULTISELECT" && inf.Type == "Text") {
                td.data("__value", val);
                var v = "";
                for (var i = 0; i < val.length; i++) {
                    if ($.isEmpty(val[i]))
                        continue;
                    v += val[i] + (i < val.length - 1 ? ", " : "");
                }
                val = v;
            }
        }
    }
    else
        val = ctl.find("input").val();
    $(document.body).append(ctl.hide());
    var old = td.data("__dbValue");
    if (old == undefined || old == null)
        old = "";
    if (val == undefined || val == null)
        val = "";

    if (td.hasClass("__hasFormat")) {
        var col = Erp.Grid._getCol(gridId, td.index());
        if (col && col._data && col._data.DataFormatString) {
            if (!td.hasClass("__date") && !td.hasClass("__lookup"))
                td.data("__value", val);
            if (val)
                val = String.localeFormat(col._data.DataFormatString, isNum ? val / 1 : val);
            td.children(".cell").html(val);
        }
        else
            td.children(".cell").html(val);
    }
    else
        td.children(".cell").html(val);

    td.removeClass("modified").addClass(old != val ? "modified" : "");

    return true;
}

function cancelEditing(a) {
    var tr=null;
    if (a == null)
        tr = __CurrentEditingRow;
    else
        tr = a.parent().parent();
    if (!tr || !tr.hasClass("editingRow"))
        return;
    var gridId = tr.closest(".RadGrid").attr("id");
    $("#" + gridId).removeData("_editModeOn");
    tr.children(".editableCell").each(function () {
        var td = $(this);
        td.removeClass("focussedCell editing");
        if (td.hasClass("enableChk"))
            return true;
        var id = __EditGridItems[gridId][td.index()];
        if (id == "")
            return true;
        var ctl = $("#" + id);
        $(document.body).append(ctl.hide());      
    });
    tr.removeClass("editingRow").children().removeClass("entity-error").first().children(".cancelEditing").attr("class", "gridSelect").attr("title", "");
    if (tr.removeClass("rowChanged").children(".modified").exists()) {
        tr.addClass("rowChanged");
    }   
    __CurrentEditingRow = null;
    __GridId = null;
    Erp.Grid._getGrid(gridId).clearSelectedItems();
    cancelHighlightEditingGrid(gridId)
}

//Erp.RegisterEvent("dgData","oncellchanged",function(a,b){console.log(b);})
function _gridCellChange(ctl, val, fld, evaluated) {
    if (__loadingEditor)
        return;
    var g = ctl.closest(".RadGrid");
    
    var evt = g.data("oncellchanged");
    if (typeof evt != "function")
        return;
    
    
    var gridId = g.attr("id");
    var eid = g.attr("entityid");
    var grid = Erp.Grid._getGridView(gridId);
    var cols = grid.get_columns();
    var td = ctl.closest("TD");
   
    var dataField = Erp.Grid.GetColumnFieldName(gridId, cols[td.index()]);
    var colName = Erp.Grid.GetColumnUniqueName(gridId, cols[td.index()]);
    
    if (typeof evt == "function") {
        if (evaluated != true) {
            if (g.data("__processing")) {              
                return;
            }
            var refs = hasDbReferences(evt, "grid");
            var newRefs=[];
            for (var i = 0; i < refs.length; i++) {
                var d = getDbRefInfo(refs[i]);
                if (!d)
                    continue;
                var c = d.Columns;
                if (c.indexOf("$.") != 0)
                    continue;
                c = c.split('.');
                if (c.length < 2)
                    continue;
                var colinfo = Erp.Grid._getCol(gridId, c[1]);
                if (c[1] == colName || colinfo != null) {
                    if (c[1] != colName && d.Loaded)
                        continue;
                }
                else
                    continue;
                d.EntityId = eid + "." + Erp.Grid.GetColumnFieldName(gridId, colinfo);
                newRefs.push(refs[i]);
            }            
            if (newRefs.length > 0) {
                for (var i = 0; i < Erp.FieldInfo_Prog.length; i++) {
                    if (Erp.FieldInfo_Prog[i].GridID == gridId)
                        Erp.FieldInfo_Prog[i].ReqForCalc = true;
                    else
                        Erp.FieldInfo_Prog[i].ReqForCalc = false;
                }                

                g.data("__processing", true);
                evaluateDbReferences(newRefs, _gridCellChange, ctl, val, fld, true);
                return;
            }

        }
        evt(gridId, { entityId: $("#" + gridId).attr("entityid"), colName: colName, dataField: dataField, editor: fld, value: val, cell: td, row: td.parent() });
    }
    g.removeData("__processing");
    
}

function deleteNewRow(gridId, items) {
    if ($("#" + gridId).hasClass("allRecords"))
        return;
    if (!items)
        items = $("#" + gridId + "_GridData").find(".gridSelect.checked").filter(":visible");
    items.each(function () {
        var tr = $(this).closest("TR");
        if (tr.hasClass("newRow"))
            tr.remove();
    });
    Erp.Grid._getGrid(gridId).clearSelectedItems();

    if ($("#" + gridId + "_ctl00").outerHeight() > $("#" + gridId + "_GridData").outerHeight())// || $("#" + gridId + "_ctl00").outerWidth() > $("#" + gridId + "_GridData").outerWidth())
        $("#" + gridId + "_GridHeader").css("margin-right", "19px");
    else
        $("#" + gridId + "_GridHeader").css("margin-right", "");
}

function setGridSortOrder(gridId) {
    var hasSort = $("#" + gridId).attr("enablesortorder") == "1";
    if (!hasSort)
        return;
    var inc = 0;
    $("#" + gridId + "_ctl00>tbody").children().each(function (i) {

        var tr = $(this);
        if (!tr.isVisible() && Fn.CInt(tr.attr("lvl")) < 1)
            return true;
        inc++;
        var td = tr.children(".sortCell");
        var old = isNaN(td.html() / 1) ? 0 : td.html() / 1;
        if (td.data("__dbValue") === undefined) {
            td.data("__dbValue", old);
        }
        else
            old = td.data("__dbValue");
        if (inc != old && tr.attr("pk"))
            td.addClass("modified").parent().addClass("rowChanged");
        else
            td.removeClass("modified");
        td.html(inc);
    });
}


function _showCommonUpload(td, gridId) {
    currentUploadCell = td;
    var grid = Erp.Grid._getGridView(gridId);
    var cols = grid.get_columns();
    var evt = $("#" + gridId).data("oncellediting");
  
    var dataField = Erp.Grid.GetColumnFieldName(gridId, cols[td.index()]);
    var colName = Erp.Grid.GetColumnUniqueName(gridId, cols[td.index()]);

    var r = null;
    if (typeof evt == "function")
        r = evt(gridId, { entityId: $("#" + gridId).attr("entityid"), colName: colName, dataField: dataField, editor: currentUploadCell.find(".grid-link"), value: __getUploadCellValue(currentUploadCell, gridId), text: "", cell: currentUploadCell, row: currentUploadCell.parent() });
    if (r === false)
        return;

    
    var upl=$find("CommonFileUploadField");
    upl.deleteAllFileInputs();
    var id = __EditGridItems[gridId][td.index()];
    var edt = $("#" + id);
    if ($.isEmpty(edt.attr("files")))
        upl.set_allowedFileExtensions([]);
    else
        upl.set_allowedFileExtensions(edt.attr("files"));
    if ($.isEmpty(edt.attr("filesize")))
        upl._maxFileSize = 0;
    else
        upl._maxFileSize = Fn.CInt(edt.attr("filesize"));
    $("#commonFileCtr").attr("class", "FormSettings");
    $("#commonFileCtr").find(".RedButton").show();
    $("#commonFileCtr").find(".btnupload").addClass("disabled");
    $("#commonFileCtr").find(".label-warning").hide();
    $("#commonFileCtr").find(".mainHeading").html("Upload File");
    $(document.body).append($("#commonFileCtr"));
    $("#commonFileCtr").ShowModal({ zindex: 100001 }).css("position", "fixed").position({ my: "center center", at: "center center", of: window });
    if (td.hasClass("modified"))
        $("#commonFileCtr").find(".viewFile").show().attr("href", "../temp/" + td.data("TempName"))
    else
        $("#commonFileCtr").find(".viewFile").show().attr("href", "getresource.ashx?id=" + td.parent().attr("pk") + "&eid=" + $("#" + gridId).attr("entityid") + "&fld=" + colName)
}
function _cancelCommonUpload() {
    $("#commonFileCtr").HideModal();
    if (Erp.Responsive)
        Erp.HideMessage("commonFileCtrDlg");
    $find("CommonFileUploadField").deleteAllFileInputs();
    currentUploadCell = null;
    if ($("#commonFileCtr").data("FromScript")) {
        var opt = $("#commonFileCtr").data("ScriptOption");
        if (opt && typeof opt.onUploadCancel == "function")
            opt.onUploadCancel(opt);
        $("#commonFileCtr").removeData("FromScript"); $("#commonFileCtr").removeData("ScriptOption");
    }
}
function _acceptCommonUpload() {
    if ($("#commonFileCtr").find(".btnupload").hasClass("disabled")) {
        return;
    }
    
    var elem = $($find("CommonFileUploadField").get_element());
    if ($("#commonFileCtr").data("FromScript")) {
        var opt = $("#commonFileCtr").data("ScriptOption");
        if (opt && typeof opt.onUploadComplete == "function")
            opt.onUploadComplete({ tempName: $.defaultVal(elem.data("TempName"), ""), fileName: $.defaultVal(elem.data("FileName"), ""), tempUrl: "../temp/" + $.defaultVal(elem.data("TempName"), "") },opt);
        $("#commonFileCtr").removeData("FromScript"); $("#commonFileCtr").removeData("ScriptOption");
        if ($("#commonFileCtr").hasClass("jqModalPopup"))
            $("#commonFileCtr").HideModal();
    }
    else if (typeof currentUploadCell != "undefined" && currentUploadCell) {
        $("#commonFileCtr").HideModal();
        currentUploadCell.data("_TempName", $.defaultVal(elem.data("TempName"), ""));
        currentUploadCell.data("FileName", $.defaultVal(elem.data("FileName"), ""));
        var g = currentUploadCell.closest(".RadGrid");        
        _gridCellChange(currentUploadCell.find(".grid-link"), __getUploadCellValue(currentUploadCell, g.ID()), currentUploadCell.find(".grid-link"));
        var cellMode = (g.attr("enablecellmode") == "1");
        if (cellMode)
            applyCellValues(g.attr("id"), currentUploadCell);
        currentUploadCell = null;
    }
    if (Erp.Responsive)
        Erp.HideMessage("commonFileCtrDlg");
    $find("CommonFileUploadField").deleteAllFileInputs();
}



function ReadAdvancedFilter(id) {
    var advFilter = $("#" + id + "_cmd").children(".grid-adv-filter");
    var f = [];
    advFilter.children(".search-item").each(function () {
        //type value fld flt
        var item = $(this);
        if (item.hasClass("_COLFILTER"))
            return true;
        var flt = $(this).data("flt");
        if (flt.Type == "SEARCH") {
            f.push({ Type: "SEARCH", Qry: $("#" + id + "_FltList").children().eq(0).val(), Value: item.children("span").text() });
        }
        else if (flt.Type == "FILTER") {
            f.push({ Type: "FILTER", Qry: $("#" + id + "_FltList").children().eq(flt.Index).val() });
        }
        else {
            f.push(flt);
        }
    });   
    return f;
}
function __addsearchItem(gridId, ctr, inf, txt,hidden) {   
    if (inf.Type == "SEARCH") {
        ctr.find("._" + inf.Type).remove();
        if (txt == "")
            return;
    }
    else if (inf.Type == "FILTER") {
        if (ctr.find("._" + inf.Type+"[index="+inf.Index+"]").length > 0)
            return;
    }
    if (!$.isEmpty(inf.Uid))
        ctr.find("span[fldid=\"" + inf.Uid + "\"]").remove();
    var itm = $("<span fldid=\"" + $.defaultVal(inf.Uid, "") + "\" " + (hidden === true ? "style='display:none'" : "") + "  " + (inf.Type == "FILTER" || inf.Type == "COLFILTER" ? "index='" + inf.Index + "' " : "") + "  class='search-item chip  _" + inf.Type + "'><span>" + txt + "</span><a onclick='$(this).parent().remove()" + (inf.Type == "FILTER" ? ";$(\"#" + gridId + "_advFilterDrop\").children(\"a[val=" + inf.Index + "]\").removeClass(\"checked\")" : "") + ";" + (inf.Type == "COLFILTER" ? "Erp.Grid.FilterColumn(\"" + gridId + "\",\"" + inf.Index + "\",\"NoFilter\")" : "RefreshGrid(\"" + gridId + "\")") + "' class='close'>" + (Erp.Responsive ? "&times;" : "X") + "</a></span>");
    itm.data("flt", inf);
    ctr.append(itm);
}
function createFilterList(gridId) {
    if (Erp.Responsive && typeof $.fn.formSelect=="function") {
        $("#" + gridId + "_WFFltList").formSelect();
        $("#" + gridId + "_WFFltList").closest(".select-wrapper").addClass("approvalFilter");
    }
    else
        $("#" + gridId + "_WFFltList").SelectX();
    var ddl = $("#" + gridId + "_FltList");
    var filter = $("#" + gridId + "_gridFilter");
    var advFilter = $("#" + gridId + "_advFilter");
    var advDropdown = $("#" + gridId + "_advFilterDrop");
    advDropdown.addClass("themeBackColor-Light themeBorderColor-Light")
    var t = $("<span class='grid-adv-filter-title themeForeColor-Dark'>Advanced Filter</span>");
    advDropdown.append(t);
    if (advDropdown.hasClass("expand"))
        t.on("click", function () { $(this).closest(".expand").toggleClass("minimize"); })
    var renderDdl = ($("#" + gridId).attr("renderFilterList") == "1" && $("#" + gridId).attr("showfilter") == "1");
    var fddl = null;
    if (renderDdl) {
        if (Erp.Responsive) {
            fddl = $("<ul class='ulFilter'><li val='-1' class='selected'>Default View</li></ul>");
            $("#" + gridId + "_advFilter").append(fddl);
            fddl.on("click", "li", function () {
                $(this).parent().children().removeClass("selected")
                $(this).addClass("selected");
                fddl.children().each(function () { advFilter.find("._FILTER[index=" + $(this).attr("val") + "]").remove(); })
                var opt = $(this);
                if (opt.attr("val") != "-1")
                    __addsearchItem(gridId, advFilter, { Type: "FILTER", Index: opt.attr("val") }, opt.text(), true);
                else
                    advFilter.find("._FILTER[index=" + opt.attr("val") + "]").remove();
                RefreshGrid(gridId);
            })
        } else {
            fddl = $("<select><option>Please Select</option></select>");
            $("#" + gridId + "_cmd").prepend(fddl);
            fddl.on("change", function () {

                advFilter.find("._FILTER").remove();
                if ($(this).prop("selectedIndex") > 0)
                    __addsearchItem(gridId, advFilter, { Type: "FILTER", Index: $(this).val() }, $(this).selectedItem().text());
                advFilter.find("._FILTER").hide();
                RefreshGrid(gridId);
            })
        }
    }
    var advDdl;
    if (Erp.Responsive && $("#" + gridId).attr("showfilter") == "1") {
        advDdl = $("<select></select>");
        advDdl.prepend('<option val="-1">Default View</option>');
    }
    ddl.children().each(function (i) {
        if (i <= 0) return true;
        
        if ($(this).attr("selected"))
            __addsearchItem(gridId, advFilter, { Type: "FILTER", Index: i }, $(this).text(), Erp.Responsive);
        
        if ($(this).attr("hid") == "1")
            return true;
        if (fddl) {
            if (Erp.Responsive) {
                var li = $("<li  code='" + $(this).attr("code") + "' " + ($(this).attr("selected") ? "selected" : "") + " val='" + i + "'>" + $(this).text() + "</li>")
                fddl.append(li);
                if ($(this).attr("selected")) {
                    fddl.children().removeClass("selected"); li.addClass("selected");
                }
            }
            else
                fddl.append("<option value='" + i + "'>" + $(this).text() + "</option>");
        }
        else {
            if (Erp.Responsive) {
                if (advDdl)
                    advDdl.append("<option code='" + $(this).attr("code") + "' " + ($(this).attr("selected") ? "selected" : "") + " val='" + i + "'>" + $(this).text() + "</option>");
            }
            else {
                var a = $("<a class='grid-adv-filter-link themeForeColor-Dark" + ($(this).attr("selected") ? " checked" : "") + "' code='" + $(this).attr("code") + "' href='javascript:void(0)' val='" + i + "'>" + $(this).text() + "</a>");
                a.on("click", function () {
                    $(this).toggleClass("checked");
                    if ($(this).hasClass("checked"))
                        __addsearchItem(gridId, advFilter, { Type: "FILTER", Index: $(this).attr("val") }, $(this).text());
                    else
                        advFilter.find("._FILTER[index=" + $(this).attr("val") + "]").remove();
                    RefreshGrid(gridId);
                });
                advDropdown.append(a);
            }
        }
    });
    if (Erp.Responsive && advDdl && advDdl.children().length > 1) {
        $("#" + gridId + "_advFilter").append(advDdl);
        //advDdl.prop("selectedIndex", 0)
        if (typeof $.fn.formSelect == "function")
            advDdl.formSelect();
        advDdl.closest(".select-wrapper").addClass("approvalFilter").children("input").css("color", "var(--value-color)");
        advDdl.on("change", function () {
            advDdl.children().each(function () { advFilter.find("._FILTER[index=" + $(this).attr("val") + "]").remove(); })
            var opt = advDdl.selectedItem();
            if (opt.attr("val") != "-1")
                __addsearchItem(gridId, advFilter, { Type: "FILTER", Index: opt.attr("val") }, opt.text(),true);
            else
                advFilter.find("._FILTER[index=" + opt.attr("val") + "]").remove();
            RefreshGrid(gridId);
        })
    }
    if (fddl) {
        if (!Erp.Responsive)
            fddl.SelectX();
        else {
            if (fddl.children().length == 1)
                fddl.hide();
        }
    }
    
    filter.find(".grid-filter-search").on("click", function () {        
        __addsearchItem(gridId, advFilter, {Type:"SEARCH"}, filter.find("input").val())
        RefreshGrid(gridId,null,null,"SearchText");
    });
    
    
    filter.find("input").on("keypress", function (e) {
        if (e.keyCode == "13") {
            e.stopPropagation();
            filter.find(".grid-filter-search").trigger("click");
            $(this).blur();
        }
        
    });
   
   
   
    advDropdown.on("click", function (e) { getSearchlistCtr().hide(); e.stopPropagation(); });
    var advInfo = _getAdvFilterInfo(gridId);
    if (Erp.LayoutMode !="L" && advInfo && advInfo.length > 0) {
        var ddlDateFilters = $("<select style='display:none' class='themeBorderColor-Light themeForeColor-Dark' id='ddlDateFilters'><option dt='all' value=''>Please Select</option></select>");
        $(document.body).append(ddlDateFilters);
       
        for (var i = 0; i < dateFilters.length; i++)
            ddlDateFilters.append("<option dt='" + $.defaultVal(dateFilters[i].Type,"date") + "' value='" + dateFilters[i].V + "' " + (dateFilters[i].I == 1 ? "date='1'" : "") + " " + (dateFilters[i].V.indexOf("?") > -1 ? "input='1'" : "") + " >" + dateFilters[i].T + "</option>");
        var ddlDateRef = ddlDateFilters;
        ddlDateFilters.on("change", function () {
            if (Erp.Responsive)
                ddlDateRef = ddlDateFilters.parent();
            if (ddlDateRef.next().hasClass('op')) {
                var sel = ddlDateFilters.selectedItem();
                ddlDateRef.next().val((sel.val() == '' ? (Erp.Responsive ? "Please Select" : "") : sel.text())).data("cond", ddlDateFilters.val());
                var txt1 = ddlDateFilters.closest(".row").find(".cond");
                txt1.setDisplay(sel.attr("date") == "1");
                ddlDateFilters.closest(".row").find(".cond1").setDisplay(sel.attr("date") == "1");
                ddlDateFilters.closest(".row").find(".cond2").setDisplay(sel.attr("input") == "1");
                ddlDateFilters.closest(".row").find(".cond3").setDisplay(sel.text() == "Between");
               
                if ($(this).val() == "In" || $(this).val() == "NotIn") {
                    txt1.attr("placeholder", "Enter comma separated values");
                    txt1.css("width", txt1.closest(".rhs").innerWidth() - 350);
                }
                else {
                    if (txt1.attr("placeholder") == "Enter comma separated values") {
                        txt1.attr("placeholder", "");
                        txt1.css("width", "");
                    }
                }
                window.setTimeout(function () { ddlDateFilters.closest(".row").find(".cond,.dt1").filter(":visible").eq(0).focus(); }, 10);
            }
        });
       
        if (Erp.Responsive) {
            ddlDateFilters.formSelect().parent().hide();
        }
        var ul;
        if (Erp.Responsive) {
            if ($("#" + gridId).attr("expandfilter") != "-1" && $("#" + gridId).attr("showfilter") != "0") {
                ul = $("<ul class='collapsible expandable gridfilter'></ul>")
                advDropdown.append(ul);
            }
        } 
        for (var i = 0; i < advInfo.length; i++) {
            
            var flt = advInfo[i];

            if (Erp.Responsive) {

                if (flt.Location != "Top-Left" && !ul)
                    continue;
            }

            var rowCtr = $("<div></div>");            
            var row = (Erp.Responsive ? $("<li class='row entityValue'></li>") : $("<div class='row entityValue'></div>"));
            row.NewID();
            rowCtr.attr("id", row.attr("id") + "_ctr");
            if (Erp.Responsive) {
                if (flt.Location != "Top-Left")
                    ul.append(row);
            }
            else {
                rowCtr.append(row);
                advDropdown.append(rowCtr);
            }
            var ico = "";
            if (Erp.Responsive) {
                if (flt.Type == "DATETIME" || flt.Type == "DATE")
                    ico = "<i class='fa'>&#xf073;</i>";
                else if (flt.Type == "CHECKBOX")
                    ico = "<i class='fa'>&#xf00c;</i>";
                else if (flt.Type == "LIST")
                    ico = "<i class='fa'>&#xf03a;</i>";
                else if (flt.Type == "SELECT")
                    ico = "<i class='fa'>&#xf03a;</i>";
                else
                    ico = "<i class='fa'>&#xf292;</i>";
                if (!$.isEmpty(flt.Icon)) {
                    ico = "<i class='fa'>" + flt.Icon + "</i>";
                    
                }
            }
            if (flt.Location != "Top-Left") {
                row.append("<div class='lhs lbl themeForeColor-Dark'>" + ico + flt.Title + "</div>");
                row.append("<div class='rhs'></div>");
                row.data("flt", flt);
            }

            var lhs = row.children(".lhs");
            var rhs = row.children(".rhs");
            if (Erp.Responsive) {
                lhs.addClass("collapsible-header"); rhs.addClass("collapsible-body");                
            }
            if (flt.Location == "Top-Left") {                
                if ($("#" + gridId + "_advFilter_itemctr").length == 0) {
                    $("#" + gridId + "_advFilter").append("<div id='" + gridId + "_advFilter_itemctr' class='grid-adv-filter-items'><div class='row ctr'></div></div>")
                }
                rhs =$("#" + gridId + "_advFilter_itemctr").children(".ctr")
            }

            if (flt.Type == "LIST" && flt.Mode == "SINGLE") {

                var ff = Erp.CreateField('SINGLESELECT', {
                    Class: "fitem", CreateRow: flt.Location != "Top-Left", Label: (flt.Location == "Top-Left" ? flt.Title : ""), Icon: (flt.Location == "Top-Left" ? flt.Icon : ""),
                    Id: "flt_" + gridId + "_" + flt.ColName, Parent: rhs, Entity: flt.Eid, FormCode: flt.FC, Width: (flt.Location == "Top-Left" ? "s4 m4 l3" : "s4 m4 l4")
                });
                if (flt.Location == "Top-Left") {
                    $("#flt_" + gridId + "_" + flt.ColName).closest(".fitem").data("flt", flt);
                    //Erp.RegisterEvent(gridId + "_" + flt.ColName, "onchange", function () { })
                }
               
            }
            else if (flt.Type == "LIST") {

                
                if (Erp.Responsive) {
                    var ff = Erp.CreateField('MULTISELECT', {
                        Class: "fitem", CreateRow: flt.Location != "Top-Left", Label: (flt.Location == "Top-Left" ? flt.Title : ""), Icon: (flt.Location == "Top-Left" ? flt.Icon : ""),
                        Id: "flt_" + gridId + "_" + flt.ColName, Parent: rhs, Entity: flt.Eid, FormCode: flt.FC, Width: (flt.Location == "Top-Left" ? "s4 m4 l3" : "s4 m4 l4")
                    });
                    if (flt.Location == "Top-Left") {
                        $("#flt_" + gridId + "_" + flt.ColName).closest(".fitem").data("flt", flt);
                        //Erp.RegisterEvent(gridId + "_" + flt.ColName, "onchange", function () { })
                    }
                    //if (flt.Location == "Top-Left") {
                    //    var div = $("<div></div>"); rhs.append(div);
                    //    div.addClass("fitem col s12 m10 l6");
                    //    div.data("flt", flt);
                    //    div.append(multi);
                    //    if (!$.isEmpty(flt.Icon))
                    //        div.prepend("<i class='fa prefix'>" + flt.Icon + "</i>");
                    //    div.append("<label for='flt_" + gridId + "_" + flt.ColName + "' class='_lbl active'>" + flt.Title + "</label>");
                    //    div.addClass("entity entity-field erp-Field input-field erp-control erp-Select multiselect")
                    //}
                    //else
                    //    rhs.addClass("entity entity-field erp-Field input-field erp-control erp-Select")
                }
                else {
                    var multi = $("<div></div>");
                    multi.NewID();
                    multi.data('FieldID', flt.FieldID);
                    multi.data('Eids', flt.Eid);
                    multi.data('Multi', true);
                    if (!$.isEmpty(flt.FC))
                        multi.data('LookupCode', flt.FC);

                    multi.on('click', function () { showSearchList($(this)); });
                    multi.multiSelect({ onItemAdding: onMixSelectItemAdding, onDropDownShowing: showSearchList });
                    rhs.append(multi);
                    multi.addClass("themeBorderColor-Light");
                }
            }
            else if (flt.Type == "SELECT") {
                var d = $("<select id='flt_" + gridId + "_" + flt.ColName + "' class='val " + (flt.Mode == "SINGLE" ? "singlemode" : "") + " themeBorderColor-Light themeForeColor-Dark' " + (flt.Mode == "SINGLE" ? "" : "multiple='1'") + " ></select>");
                d.NewID();
                if (flt.Mode == "SINGLE")
                    d.append("<option value=\"--NOTSET\">Not-Set</option>");
                for (var x = 0; x < flt.Items.length; x++) {
                    if(flt.Items[x].hasOwnProperty("text"))
                        d.append("<option value=\"" + flt.Items[x].value + "\">" + flt.Items[x].text + "</option>");
                    else if (flt.Items[x].hasOwnProperty("v"))
                        d.append("<option value=\"" + flt.Items[x].v + "\">" + flt.Items[x].k + "</option>");
                    else
                        d.append("<option value=\"" + flt.Items[x] + "\">" + flt.Items[x] + "</option>");
                }
                rhs.append(d);
                if (Erp.Responsive)
                    d.formSelect();
                else
                    d.chosen({ width: (Erp.Responsive ? "100%" : "200px"), placeholder_text_multiple: " " });
                d.next().addClass("themeBorderColor-Light");
                if (Erp.Responsive) {
                    if (flt.Mode == "SINGLE") {
                        var div = $("<div></div>"); rhs.append(div);
                        div.addClass("fitem col " + (flt.Location == "Top-Left" ? "s4 m4 l3" : "s4 m4 l4"));
                        
                        div.append(d.closest(".select-wrapper"));
                        if (!$.isEmpty(flt.Icon) && flt.Location == "Top-Left")
                            div.prepend("<i class='fa prefix'>" + flt.Icon + "</i>");
                        if (flt.Location == "Top-Left") {
                            div.data("flt", flt);
                            div.append("<label for='flt_" + gridId + "_" + flt.ColName + "' class='_lbl active'>" + flt.Title + "</label>");
                            div.addClass("erp-Field input-field erp-control erp-Select")
                        }
                        else
                            rhs.addClass("clearFix");
                    }
                    else {
                        if (flt.Location == "Top-Left") {
                            var div = $("<div></div>"); rhs.append(div);
                            div.addClass("fitem col s4 m4 l3");
                            div.data("flt", flt);
                            div.append(d.closest(".select-wrapper"));
                            if (!$.isEmpty(flt.Icon))
                                div.prepend("<i class='fa prefix'>" + flt.Icon + "</i>");
                            div.append("<label for='flt_" + gridId + "_" + flt.ColName + "' class='_lbl active'>" + flt.Title + "</label>");
                            div.addClass("erp-Field input-field erp-control erp-Select")
                        }
                        else
                            rhs.addClass("chkList");
                    }
                }
            }
            else if (flt.Location == "Top-Left" && (flt.Type == "DATETIME" || flt.Type == "DATE")) {
                var prm = $.defaultVal(flt.FilterParameters, "").split(',');
                var ulxx = (flt.Mode == "SELECT" ? $("<select id='flt_" + gridId + "_datelist' class='ulFilter'></select>") : $("<ul  id='flt_" + gridId + "_datelist' class='ulFilter'></ul>"));
                ulxx.data("flt", flt); var hasinput = false;
                for (var x = 0; x < prm.length; x++) {
                    if ($.isEmpty(prm[x]))
                        continue;
                    var p1 = prm[x].toUpperCase().split('~')[0] + ":"
                    var ttl = "";
                    if (prm[x].indexOf("~") > 0) ttl = prm[x].split('~')[1];
                    var itm = ddlDateFilters.children().filter(function () { return $(this).val().toUpperCase() == p1.split(':')[0].replace("-REPEAT", ""); });
                    if (itm.length == 0 && p1 != "NONE:" && p1.indexOf("CUSTOM")<0)
                        continue;
                    if (p1 == "BETWEEN:" || p1 == "BETWEEN-REPEAT:") {
                        hasinput = true;
                        Erp.CreateField('DATE', { Class: "fitem betw", CreateRow: false, Label: flt.Title + " - From", Id: "flt_" + gridId + "_" + flt.ColName + "_from", Parent: rhs, Width: "s4 m4 l2" });
                        Erp.CreateField('DATE', { Class: "fitem skip", CreateRow: false, Label: flt.Title + " - To", Id: "flt_" + gridId + "_" + flt.ColName + "_to", Parent: rhs, Width: "s4 m4 l2" })
                        $("#flt_" + gridId + "_" + flt.ColName + "_from").closest(".fitem").data("flt", flt).attr("cond", p1.replace(":", ""));
                        if (prm.length > 1)
                            ulxx.append("<" + (flt.Mode == "SELECT" ? "option" : "li") + " cond='" + p1.replace(":", "") + "'>" + (ttl ? ttl : "Custom") + "</" + (flt.Mode == "SELECT" ? "option" : "li") + ">");
                    }
                    else if (p1 == "EQUALTO:") {
                        hasinput = true;
                        Erp.CreateField('DATE', { Class: "fitem", CreateRow: false, Label: flt.Title, Id: "flt_" + gridId + "_" + flt.ColName + "_eq", Parent: rhs, Width: "s6 m4 l2" })
                        $("#flt_" + gridId + "_" + flt.ColName + "_eq").closest(".fitem").data("flt", flt).attr("cond", "EQUALTO");
                        if (prm.length > 1)
                            ulxx.append("<" + (flt.Mode == "SELECT" ? "option" : "li") + " cond='EQUALTO'>" + (ttl ? ttl : "Custom") + "</" + (flt.Mode == "SELECT" ? "option" : "li") + ">");
                    }
                    else if (p1 == "NONE:")
                        ulxx.append("<" + (flt.Mode == "SELECT" ? "option" : "li") + " cond=\"NONE\"  >" + (ttl ? ttl : "None") + "</" + (flt.Mode == "SELECT" ? "option" : "li") + ">")
                    else
                        ulxx.append("<" + (flt.Mode == "SELECT" ? "option" : "li") + " cond=\"" + p1.split(':')[0] + "\" prm=\"" + p1.split(':')[1] + "\" >" + (ttl ? ttl : itm.text().replace("?", p1.split(':')[1])) + "</" + (flt.Mode == "SELECT" ? "option" : "li") + ">")
                }
                if (ulxx.children().length > 0) {
                    if (hasinput) {
                        $("#flt_" + gridId + "_" + flt.ColName + "_eq").closest(".fitem").before(ulxx);
                        $("#flt_" + gridId + "_" + flt.ColName + "_from").closest(".fitem").hide();
                        $("#flt_" + gridId + "_" + flt.ColName + "_eq").closest(".fitem").hide();
                        $("#flt_" + gridId + "_" + flt.ColName + "_to").closest(".fitem").hide();
                    }
                    else
                        rhs.append(ulxx);
                }
                ulxx.on((flt.Mode == "SELECT" ? "change" : "click"), (flt.Mode == "SELECT" ? "" : "li"), function (_a, _b) {
                    var f = ulxx.data("flt");
                    var opt = (f.Mode == "SELECT" ? $(this).selectedItem() : $(this));
                    $("#flt_" + gridId + "_" + f.ColName + "_eq").closest(".fitem").hide();
                    $("#flt_" + gridId + "_" + f.ColName + "_from").closest(".fitem").hide();
                    $("#flt_" + gridId + "_" + f.ColName + "_to").closest(".fitem").hide();

                    if (f.Mode != "SELECT" && opt.hasClass("back")) {
                        ulxx.children().show();
                        opt.removeClass("back");                      
                        ulxx.closest(".grid-adv-filter-items").find(".fsearch").setDisplay($("#" + gridId + "_advFilter_itemctr").children(".ctr").eq(0).children(".fitem:visible").length > 0);
                        if (!$.isEmpty(opt.attr("prev")))
                            ulxx.children("[cond='" + opt.attr("prev") + "']").trigger("click");
                        return true;
                    }



                    if (opt.attr("cond").indexOf("BETWEEN") >= 0) {
                        opt.attr("prev", ulxx.children(".selected").attr("cond"));
                        ulxx.children().removeClass("selected");
                        ulxx.children().hide(); opt.show().addClass("back");
                        $("#flt_" + gridId + "_" + f.ColName + "_from").closest(".fitem").show();
                        $("#flt_" + gridId + "_" + f.ColName + "_to").closest(".fitem").show();
                        ulxx.closest(".grid-adv-filter-items").find(".fsearch").show();
                    }
                    else if (opt.attr("cond") == "EQUALTO") {
                        opt.attr("prev", ulxx.children(".selected").attr("cond"));
                        ulxx.children().removeClass("selected");
                        ulxx.children().hide(); opt.show().addClass("back");
                        $("#flt_" + gridId + "_" + f.ColName + "_eq").closest(".fitem").show();
                        ulxx.closest(".grid-adv-filter-items").find(".fsearch").show();
                    }
                    else {
                        ulxx.children().removeClass("selected");
                        opt.addClass("selected");                       
                        ulxx.closest(".grid-adv-filter-items").find(".fsearch").setDisplay($("#" + gridId + "_advFilter_itemctr").children(".ctr").eq(0).children(".fitem:visible").length > 0);
                        var inf = { Type: f.Type, Qry: f.Qry, Value: opt.attr("prm"), Uid: "chip_" + gridId + "_" + f.ColName, Fld: f.Field, Cond: opt.attr("cond") };
                        if (opt.attr("cond") == "NONE")
                            advFilter.find("span[fldid=\"" + "chip_" + gridId + "_" + f.ColName + "\"]").remove();
                        else {
                            if (!$.isEmpty(f.FilterEvent) && typeof window[f.FilterEvent] == "function" && window[f.FilterEvent](inf) == false)
                                return true;
                            __addsearchItem(gridId, advFilter, inf, f.Title, true);
                        }
                        if (_b != "NOREFRESH")
                            RefreshGrid(gridId, null, null, "");
                    }
                });
                if (ulxx.children().length > 0) {
                    if (flt.Mode == "SELECT") {
                        var w = ulxx.formSelect().closest(".select-wrapper")
                        w.addClass("entity entity-field erp-Field input-field erp-control erp-SINGLESELECT  col s4 m4 l3 fitem  erp-Select").css("margin-left", "44px");
                        w.prepend("<i style='margin-left: -44px;display: inline-block;float: none;color: var(--label-color);' class='fa prefix'>" + flt.Icon + "</i>");
                        ulxx.trigger("change", "NOREFRESH")
                    }
                    else
                        ulxx.children().eq(0).trigger("click", "NOREFRESH")
                }
            }
            else if (flt.Type == "DATETIME" || flt.Type == "DATE") {
                var op = $("<input class='op themeBorderColor-Light themeForeColor-Dark' readonly type='text'  />");
                op.on("click", function () {
                    if (Erp.Responsive)
                        ddlDateRef = ddlDateFilters.parent();
                    if (ddlDateRef.next().hasClass('op')) ddlDateRef.next().show();
                    $(this).hide().before(ddlDateRef.show()); ddlDateFilters.val($.defaultVal($(this).data("cond"), ''));
                    if (Erp.Responsive)
                        window.setTimeout(function () { $(ddlDateFilters).parent().children(".dropdown-trigger").trigger("click"); }, 10);
                    ddlDateFilters.children().hide().attr("hidden", "1").filter("[dt='all'],[dt='date'],[dt='num']").show().removeAttr("hidden");
                    if (Erp.Responsive)
                        ddlDateFilters.formSelect().closest(".select-wrapper").addClass("datefilter");
                })
                rhs.append(op);
                var c = $("<span class='cond1'></span>");
                if (Erp.Responsive) {
                    c.addClass("entity entity-field erp-Field input-field erp-control erp-Date")
                }
                rhs.append(c.hide());
                var dtm = $("<input class='val entity-date dt1 themeBorderColor-Light themeForeColor-Dark'  type='" + (Erp.Responsive ? "tel" : "text") + "'  />");
                dtm.NewID();
                c.append(dtm);


                if (flt.Type == "DATE") {
                    if (Erp.Responsive) {
                        dtm.attr("placeholder", Users.ShortDateFormat).attr("_ph", Users.ShortDateFormat)
                        dtm.simpleDate({ yearRange: 25, format: Users.ShortDateFormat_MOM });
                    }
                    else
                        dtm.datepicker({ dateFormat: Users.ShortDateFormat_JQ, timeFormat: Users.TimeFormat_JQ, dropdown: false });
                }
                else {                    
                    if (Erp.Responsive) {
                        dtm.attr("readonly","readonly")
                        dtm.materialDateTimepicker({ container: 'main', yearRange: 25, dateFormat: Users.ShortDateFormat_MOM, timeFormat: Users.TimeFormat_MOM });
                    }
                    else {
                        dtm.datetimepicker({ dateFormat: Users.ShortDateFormat_JQ, timeFormat: Users.TimeFormat_JQ, dropdown: false });
                        dtm.next().addClass("themeBorderColor-Light themeForeColor-Dark");
                    }
                }
                c = $("<span class='cond3 themeForeColor-Dark'>&nbsp;&nbsp;And&nbsp;&nbsp;</span>");
                if (Erp.Responsive) {
                    c.addClass("entity entity-field erp-Field input-field erp-control erp-Date")
                }
                rhs.append(c.hide());

                dtm = $("<input class='val entity-date dt2 themeBorderColor-Light themeForeColor-Dark'  type='" + (Erp.Responsive ? "tel" : "text") + "'   />");
                dtm.NewID();
                c.append(dtm)

                if (flt.Type == "DATE") {
                    if (Erp.Responsive) {
                        dtm.attr("placeholder", Users.ShortDateFormat).attr("_ph", Users.ShortDateFormat)
                        dtm.simpleDate({ yearRange: 25, format: Users.ShortDateFormat_MOM });
                    }
                    else
                        dtm.datepicker({ dateFormat: Users.ShortDateFormat_JQ, timeFormat: Users.TimeFormat_JQ, dropdown: false });
                }
                else {
                    if (Erp.Responsive) {
                        dtm.attr("readonly", "readonly")
                        dtm.materialDateTimepicker({ container: 'main', yearRange: 25, dateFormat: Users.ShortDateFormat_MOM, timeFormat: Users.TimeFormat_MOM });
                    }
                    else {
                        dtm.datetimepicker({ dateFormat: Users.ShortDateFormat_JQ, timeFormat: Users.TimeFormat_JQ, dropdown: false });
                        dtm.next().addClass("themeBorderColor-Light themeForeColor-Dark");
                    }
                }
                var d = $("<input class='val cond2 themeBorderColor-Light  themeForeColor-Dark' style='width:70px'  type='text'  />");
                c = $("<span class=''></span>");
                if (Erp.Responsive) {
                    c.addClass("entity entity-field erp-Field input-field erp-control erp-Number")
                }
                rhs.append(c);
                c.append(d.hide())
                if (Erp.Responsive) {
                    op.val("Equal To").data("cond", "EqualTo").next().show();
                }
            }
            else if (flt.Type == "CHECKBOX") {
                var d = $("<select class='cond chk-cond themeBorderColor-Light themeForeColor-Dark' style='width:78px;padding-left:0;margin-left:0;' ></select>");
                d.NewID();
                d.append("<option value=\"\">Not-Set</option>");
                d.append("<option value=\"true\">True</option>");
                d.append("<option value=\"false\">False</option>");
                rhs.append(d);
                if (Erp.Responsive) {
                    d.formSelect();
                    d.closest(".select-wrapper").addClass("datefilter")
                }
                if (flt.Location == "Top-Left") {
                    var div = $("<div></div>"); rhs.append(div);
                    div.addClass("fitem col " + (flt.Location == "Top-Left" ? "s3 m3 l3" : "s4 m4 l4"));
                    div.append(d.closest(".select-wrapper"));
                    if (!$.isEmpty(flt.Icon) && flt.Location == "Top-Left")
                        div.prepend("<i class='fa prefix'>" + flt.Icon + "</i>");
                    if (flt.Location == "Top-Left") {
                        div.append("<label for='flt_" + gridId + "_" + flt.ColName + "' class='_lbl active'>" + flt.Title + "</label>");
                        div.addClass("erp-Field input-field erp-control erp-Select")
                    }
                    div.data("flt", flt)
                }
            }
            else if (flt.Location != "Top-Left") {
                var op = $("<input class='op themeBorderColor-Light themeForeColor-Dark' readonly type='text' dt='" + flt.Type + "'  />");
                
                var isNum = (flt.Type == "NUMBER" || flt.Type == "DECIMAL" || flt.Type == "CALCULATED" || flt.Type == "CURRENCY" || flt.Type == "PERCENT");
                op.on("click", function () {
                    if (Erp.Responsive)
                        ddlDateRef = ddlDateFilters.parent();
                    if (ddlDateRef.next().hasClass('op')) ddlDateRef.next().show();
                    $(this).hide().before(ddlDateRef.show()); ddlDateFilters.val($.defaultVal($(this).data("cond"), ''));
                    if (Erp.Responsive)
                        window.setTimeout(function () { $(ddlDateFilters).parent().children(".dropdown-trigger").trigger("click"); }, 10);
                    var _t = $(this).attr("dt");
                    var isNum = (_t == "NUMBER" || _t == "DECIMAL" || _t == "CALCULATED" || _t == "CURRENCY" || _t == "PERCENT");
                    if (isNum)
                        ddlDateFilters.children().hide().attr("hidden", "1").filter("[dt='all'],[dt='num']").show().removeAttr("hidden");
                    else
                        ddlDateFilters.children().hide().attr("hidden", "1").filter("[dt='all'],[dt='text']").show().removeAttr("hidden");
                    if (Erp.Responsive)
                        ddlDateFilters.formSelect().closest(".select-wrapper").addClass("datefilter");
                })
                rhs.append(op);
                var d = $("<input class='cond themeBorderColor-Light themeForeColor-Dark' />");
                if (isNum) {
                    d.autoNumeric('init', { vMin: -79228162514264337593543950335, vMax: 79228162514264337593543950335, mDec: 10, aPad: false, aSep: '' });
                }
                d.NewID();
                rhs.append(d.hide());
                if (Erp.Responsive) {
                    rhs.addClass("entity entity-field erp-Field input-field erp-control erp-Number");
                    op.val("Equal To").data("cond", "EqualTo").next().show();
                }
                
            }
            
        }
        if (Erp.Responsive) {
            var fitems = $("#" + gridId + "_advFilter_itemctr").children(".ctr").eq(0).children(".fitem")
            if (fitems.length > 0) {
                var btnsrch = $('<a style="margin-left:15px" id="'+gridId+'_applyfilter" class="fsearch search waves-effect waves-light btn" href="javascript:void(0)"><span>Apply Filter</span></a>')
                $("#" + gridId + "_advFilter_itemctr").children(".ctr").append(btnsrch);
                btnsrch.on("click", function () {
                    var _uf = $("#" + gridId + "_advFilter_itemctr").children(".ctr").eq(0).children(".ulFilter").eq(0).children(".selected");
                    if (_uf.length > 0)
                        _uf.trigger("click", "NOREFRESH");
                    fitems.each(function () {
                        if ($(this).hasClass("skip") || !$(this).isVisible()) return true;
                        var f = $(this).data("flt");
                        if (!f) return true;
                        advFilter.find("span[fldid=\"" + "chip_" + gridId + "_" + f.ColName + "\"]").remove();
                        var _vv = "";
                        if (!$.isEmpty($(this).ID())) {
                            var _fid = $(this).ID().substring(0, $(this).ID().length - 4);
                            _vv = Erp.GetFieldValue(_fid);
                            if ($(this).hasClass("betw"))
                                _vv += "|" + Erp.GetFieldValue($(this).next().ID().substring(0, $(this).next().ID().length - 4)) + ($(this).hasClass("erp-DATE")?" 23:59":"");
                            if ($(this).hasClass("erp-SINGLESELECT") && _vv == "")
                                _vv = "--NOTSET";
                        }                       
                        else if ($(this).hasClass("multiselect")) {
                            var items = $(this).find(".chosen-container").multiSelect().getItems();
                            _vv = [];
                            items.each(function () { _vv.push($(this).data("RecordID")); });
                            if (_vv.length == 0) _vv = "--NOTSET";
                        }
                        else if ($(this).hasClass("erp-Select"))
                            _vv = $(this).find("select").val();

                        if ((f.Type == "CHECKBOX" && _vv == "") || _vv == "--NOTSET") {                            
                            return true;
                        }
                        if ((f.Type == "LIST" || f.Type == "SELECT") && !$.isArray(_vv))
                            _vv = [_vv];
                        var inf = { ColName: f.ColName, Grid: gridId, Type: f.Type, Qry: $.defaultVal(f.Qry, ""), Value: _vv, Uid: "chip_" + gridId + "_" + f.ColName, Fld: f.Field, Cond: $.defaultVal($(this).attr("cond"), "") };
                        if (!$.isEmpty(f.FilterEvent) && typeof window[f.FilterEvent] == "function" && window[f.FilterEvent](inf) == false)
                            return true;
                        __addsearchItem(gridId, advFilter, inf, f.Title, true);
                    });
                    RefreshGrid(gridId, null, null, "");
                });
               
               
                var _hid = true;
                fitems.each(function () { if (!$(this).isDisplayNone()) _hid = false; })                
                if (_hid)
                    btnsrch.hide();
            }
        }
        if (Erp.Responsive && ul) {           
            M.Collapsible.init(ul[0], {
                accordion: false,
                onOpenEnd: function (a) {
                    resizeGridHeight();
                    var liColl=$(a)
                    liColl.find(".cond,.dt1").filter(":visible").eq(0).focus();
                },
                onCloseEnd: function () { resizeGridHeight(); }
            });
        }

        if (ul) {
            var row = $("<div class='row' style='text-align:right'></div>");
            var btn = $("<a class='search' href='javascript:void(0)'><span>Apply Filter</span></a>");
            if (Erp.Responsive)
                btn.addClass("waves-effect waves-light btn");
            btn.on("click", function (e, arg) {
                var arr = [];
                var expand = advDropdown.hasClass("expand");
                if (expand) {
                    advDropdown.next().empty();
                    if (!Erp.Responsive)
                        advDropdown.addClass("minimize");
                }
                else
                    ddlDateFilters.val("");
                advDropdown.find(".row").each(function () {
                    var f = $(this).data("flt");
                    var validRow = (f && f.Type == "LIST" && f.Mode == "SINGLE") || $(this).find(".multiSelectItem,.search-choice").length > 0 || (Erp.Responsive && $(this).find(".multiple-select-dropdown").children(".active").length > 0) || !$.isEmpty($(this).find(".op").data("cond")) || ($(this).find(".singlemode").length > 0 && $(this).find(".singlemode").val() != "--NOTSET") || !$.isEmpty($(this).find(".chk-cond").val());
                    if (Erp.Responsive)
                        validRow = validRow && $(this).hasClass("active");

                    if (validRow) {
                        var inf = { Type: f.Type, Qry: f.Qry, Value: "", Uid: $(this).ID() };
                        var txt = "";
                        if (f.Type == "SELECT") {
                            inf.Value = $(this).find("select").val();
                            if ($(this).find(".singlemode").length > 0) {
                                inf.Value = [$(this).find(".singlemode").val()];
                                txt = $(this).find(".singlemode").selectedItem().text()
                            }
                            else {
                                if (Erp.Responsive)
                                    $(this).find(".selected.active").each(function () { txt += $(this).find("label").find("span").text() + ", "; });
                                else
                                    $(this).find(".search-choice").each(function () { txt += $(this).text() + ", "; });
                                if (!expand && !Erp.Responsive) {
                                    $(this).find(".search-choice").remove();
                                    $(this).find("select").prop("selectedIndex", "-1");
                                }
                            }
                        }
                        else if (f.Type == "LIST" && f.Mode == "SINGLE") {
                            txt = $(this).find(".select-input.select-dropdown");
                            inf.Value = [Erp.GetFieldValue(txt.attr("id"))];
                            txt = txt.val();
                        }
                        else if (f.Type == "LIST") {

                            var items = $(this).find(".chosen-container").multiSelect().getItems();
                            var v = [];
                            items.each(function () { v.push($(this).data("RecordID")); });
                            inf.Value = v;

                            $(this).find(".search-choice").each(function () { txt += $(this).text() + ", "; });
                            if (!expand && !Erp.Responsive) {
                                $(this).find(".chosen-container").multiSelect().removeAllItems();
                            }
                        }
                        else if (f.Type == "DATETIME" || f.Type == "DATE") {
                            var d = $(this).find(".cond1,.cond2,.cond3").filter(":visible");
                            inf.Cond = $(this).find(".op").data("cond");
                            txt = $("#ddlDateFilters").find("option[value='" + inf.Cond + "']").text()

                            inf.Fld = f.Field;

                            var v = "";
                            if (d.length > 0) {
                                if (d.hasClass("cond2")) {
                                    txt += "[" + d.val() + "]";
                                    v = d.val();
                                }
                                else {
                                    if (Erp.Responsive)
                                        v = (f.Type == "DATETIME" ? d.find(".dt1").materialDateTimepicker("getDateTime") : d.find(".dt1").materialDatepicker("getDate"));
                                    else
                                        v = (f.Type == "DATETIME" ? d.find(".dt1").datetimepicker("getDateTime") : d.find(".dt1").datepicker("getDate"));
                                    v = (!v ? null : moment(v).format("YYYY-MM-DD hh:mm A"));
                                    txt += " " + (Erp.Responsive ? d.find(".dt1").val() : moment(v).format(Users.ShortDateFormat_MOM));
                                    if (inf.Cond == "Between") {
                                        var v1
                                        if (Erp.Responsive)
                                            v1 = (f.Type == "DATETIME" ? d.find(".dt2").materialDateTimepicker("getDateTime") : d.find(".dt2").materialDatepicker("getDate"));
                                        else
                                            v1 = (f.Type == "DATETIME" ? d.find(".dt2").datetimepicker("getDateTime") : d.find(".dt2").datepicker("getDate"));
                                        v1 = (!v1 ? null : moment(v1).format("YYYY-MM-DD hh:mm A"));
                                        v += "|" + v1;
                                        txt += " And " + (Erp.Responsive ? d.find(".dt2").val() : moment(v1).format(Users.ShortDateFormat_MOM));
                                    }
                                }
                            }
                            else
                                v = "1";
                            inf.Value = v;
                            if (!expand && !Erp.Responsive) {
                                $(this).find(".op,.val").val("");
                                $(this).find(".cond1,.cond3").hide();
                                $("#ddlDateFilters").prop("selectedIndex", "0").trigger("change");
                            }
                        }
                        else {
                            inf.Fld = f.Field;
                            inf.Value = $(this).find(".cond").val();
                            if (f.Type == "CHECKBOX" && inf.Value == "")
                                return true;
                            inf.Cond = $.defaultVal($(this).find(".op").data("cond"), "EqualTo");
                            txt = $.defaultVal($(this).find(".op").val(), "Equal To") + " " + inf.Value;
                            if (!expand && !Erp.Responsive) {
                                $(this).find(".op,.cond").val("").removeData("cond")
                                if (f.Type != "CHECKBOX")
                                    $(this).find(".cond").hide();
                            }
                        }

                        if (!$.isEmpty(f.FilterEvent) && typeof window[f.FilterEvent] == "function" && window[f.FilterEvent](inf) == false) {
                            advFilter.find("span[fldid=\"" + $(this).ID() + "\"]").remove();
                            return true;
                        }
                        __addsearchItem(gridId, advFilter, inf, f.Title + " : " + txt.Trim(' ,'));
                    }
                    else
                        advFilter.find("span[fldid=\"" + $(this).ID() + "\"]").remove();
                })
                var gg = advDropdown.closest(".RadGrid");
                if (Erp.Responsive) {
                    if (!gg.hasClass("alwaysExpandFilter"))
                        gg.removeClass("expandFilter");
                }
                else if (!expand)
                    advDropdown.hide();
                //if (advFilter.isVisible())
                RefreshGrid(gg.attr("id"), null, null, arg ? arg : "advancedfilter");//ddl.trigger("change","advancedfilter");

            })
            row.append(btn);
            if (Erp.Responsive) {
                var canc = $("<a style='float: left;margin-top: 10px;margin-left: 10px;' class='waves-effect waves-teal red-text  btn-flat _cancel' href='javascript:void(0)' >Cancel</a>")
                canc.on("click", function () {
                    if ($("#" + gridId).attr("expandfilter") == "3") {
                        var advevt = $("#" + gridId).data("ongridadvancedfilter");
                        if (typeof advevt == "function")
                            advevt(gridId, { cancel: true });

                    }
                    else {
                        $(this).closest(".RadGrid").removeClass("expandFilter");
                        resizeGridHeight();
                    }
                })
                row.append(canc);
                if ($("#" + gridId).attr("expandfilter") == "3")
                    btn.before("<a style='margin: 10px 15px 30px 0;' class='waves-effect waves-teal red-text  btn-flat _preview' href='javascript:void(0)' onclick='$(this).closest(\".RadGrid\").removeClass(\"hideGrid\");$(this).next().trigger(\"click\",\"preview\")'>Preview Records</a>");
            }
            advDropdown.append(row);
        }
    }
    filter.find(".grid-adv-filter-btn").setDisplay(!advDropdown.hasClass("expand") && advDropdown.children().length > 1).on("click", { gridId: gridId }, function (e) {
        e.stopPropagation();
        if (Erp.Responsive) {
            if (!$("#" + e.data.gridId).hasClass("alwaysExpandFilter"))
                $("#" + e.data.gridId).toggleClass("expandFilter");
            SetGridWidth(e.data.gridId);
            resizeGridHeight();
        }
        else {
            $("#" + e.data.gridId + "_advSettings").hide();
            advDropdown.show().position({
                my: "right top",
                at: "right bottom",
                of: $(this)
            });
            if (advDropdown.offset().left < 0)
                advDropdown.css("left", "0px");
            $(document).one("click", function (e) {
                advDropdown.hide();
            });
        }
    });
    $("#ui-datepicker-div").on("click", function (e) { e.stopPropagation(); });

    
}
function showGridAdvSettings(a, gridId) {
    var advSettings = $("#" + gridId + "_advSettings");
    var tbl = $find(gridId).get_masterTableView();
    if (!advSettings.exists()) {
        var exportable = ($("#" + gridId ).attr("exportable")=="1")
        advSettings = $("<div id='" + gridId + "_advSettings' class='grid-adv-setting-dropdown'></div>")
        $("body").append(advSettings);
        var htm = "";
        if (exportable)
            htm = "<span class='grid-export-links'><a class='rgExp rgExpXLS' exp='EXCEL' title='Export To Excel'></a><a class='rgExp rgExpDOC' exp='WORD' title='Export To Word'></a><a class='rgExp rgExpPDF' exp='PDF' title='Export To PDF'></a><a class='rgExp rgExpCSV' exp='CSV' title='Export To CSV'></a><a class='grid-adv-filter-link' href='javascript:void(0)' style='margin-top: 4px;font-size: 11px;margin-left: 6px' onclick='$(this).toggleClass(\"checked\")'>Export Current Page</a></span>";
        for (var i = 1; i < tbl.get_columns().length; i++) {
            var col = tbl.get_columns()[i];
            var c = $(col.get_element());
            var t = c.text();
            c=c.children("a");
            if (c.length > 0) {
                t = $.defaultVal(c.filter(".title").text(), c.first().text());
            }
            if (!col.get_visible() && $.isEmpty(t))
                continue;
            htm += "<a class='grid-adv-filter-link" + (col.get_visible() ? " checked" : "") + "'  onclick='SetColumnVisibility(this," + i + ",\"" + gridId + "\")' href='javascript:void(0)' >" +t + "</a>";
        }
        advSettings.html(htm);
        advSettings.on("click", function (e) { e.stopPropagation(); });
        if (exportable)
            advSettings.children(".grid-export-links").children(".rgExp").on("click", function () {
                Erp.Grid.Export(gridId, $(this).attr("exp"), $(this).parent().children(".grid-adv-filter-link").hasClass("checked"));
            });
    }
    if(a)
    window.setTimeout(function () {
        advSettings.show().position({
            my: "right top",
            at: "right bottom",
            collision:"none none",
            of: $(a)
        });
        $(document).one("click", function (e) {
            advSettings.hide();
        });
    }, 50);
}

function _exportGridData(elem) {
    Erp.Grid.Export(elem.closest(".RadGrid").ID(), elem.attr("exp"), elem.closest(".btnctr").find("._chkCurrent").find("input").checked());
}

function toggleGridFilter(a, bit) {
    
    if (bit === false || bit === true) {
        if(bit===true && $("#" + a).attr("showFilter") == "0")
            return;
        $("#" + a + "_gridFilter").children("div").setDisplay(bit).prev().setDisplay(bit && !$("#" + a + "_advFilterDrop").hasClass("expand"));
        $("#" + a + "_GridHeader").find(".rgFilterRow").setDisplay(bit);
        if (bit === true)
            $("#" + a + "_gridFilter").css("width", "");
        else
            $("#" + a + "_gridFilter").css("width", "auto");
        return;
    }
    a = $(a);
    var grid = $(a).closest(".RadGrid").attr("id");
    $("#" + grid + "_gridFilter").children("div").toggle().prev().toggle();
    $("#" + grid + "_GridHeader").find(".rgFilterRow").toggle();
    if (getQS("_dash") == "1")
        $("#" + grid + "_FltInput").closest(".grid-filter").toggle();
    if ($("#" + grid + "_gridFilter").css("width") == "auto")
        $("#" + grid + "_gridFilter").css("width", "");
    else
        $("#" + grid + "_gridFilter").css("width", "auto");
    
}
function __clearSelect(a, e, s) {
    e.stopPropagation();
    if ($(a).prev().isDisabled())
        return;
    if (s == "Multi")
        $(a).closest(".erp-Field").children(".chip-ctr").multiSelect().removeAllItems()
    else
        $(a).hide().prev().val("").removeData("RecordID").removeData("EntityID").trigger((s == "Ddl" ? "selectchange" : "change"));
    if (Erp.Responsive) {
        $(a).closest(".erp-Field").find("._lbl").removeClass("active");
    }
}


function __showmsitems(a,e) {
    e.stopPropagation();
    getSearchlistCtr(true).hide();
    $(a).closest(".erp-Field").toggleClass("showChips");
}
function SelectItem(recID, text,arr,row) {
    var divCtr = getSearchlistCtr();
    var fld = $("#" + divCtr.data("CurrentFieldActID"));
    if (fld.data("Multi") == true) {
        fld.multiSelect().addItem({ Text: text, RecordID: recID, EntityID: getddlSearchEntityList().val() });
        fld.parent().find(".del").show();
        if (isParentWinForSelect())
            divCtr.css("top", fld[0].getBoundingClientRect().y + frameElement.getBoundingClientRect().y + fld.outerHeight());
        else if(!fld.hasClass("chip-ctr"))
            divCtr.css("top", fld.getOffset().bottom + 5);
        
        fld.trigger("change");
        if (Erp.Touch || fld.data("EnableGridMode"))
            divCtr.children('.multi-values').show().html((divCtr.children('.multi-values').html() + ", " + text).Trim([',', ' '])).scrollTop(1000);
    }
    else {
        fld.val(text).attr("title", text)
        if (!fld.isDisabled())
            fld.next().show();
        if ($.isArray(arr))
            fld.data("Keys", arr);
        else
            fld.removeData("Keys");
        fld.data("CurrentRow", row);
        fld.data("RecordID", recID);
        fld.data("EntityID", getddlSearchEntityList().val());
        divCtr.hide();
        //if (Erp.Responsive)
            fld.trigger("selectchange");
        //else
            //fld.trigger(fld.attr("readonly") ? "change" : "selectchange");
    }
    if (Erp.Responsive) {
        fld.closest(".erp-Field").find("._lbl").removeClass("active").addClass(text === "" ? "" : "active");
    }
}
function onMixSelectItemAdding(ctl, data, load) {
    //return true;
    var items = ctl.getItems();
    for (var i = 0; i < items.length; i++)
        if (items.eq(i).data("RecordID") == data.RecordID)
            return false;
}
function SelectAllGridRecord(a) {
    a = $(a);
    var gridId = a.closest(".RadGrid").attr("id");
    if ($("#" + gridId).hasClass("allRecords"))
        return;
    a.toggleClass("checked");
    $(Erp.Grid._getGridView(gridId).get_element()).find("a.gridSelect").attr("class", "gridSelect" + (a.hasClass("checked") ? " checked" : ""));
    if (!a.hasClass("checked"))
        Erp.Grid._getGrid(gridId).clearSelectedItems();
}
function toggleGridCheckAll(a) {
    a = $(a);
    var g=a.closest(".RadGrid").toggleClass('allRecords');
    if (g.hasClass("allRecords"))
        a.html("Click to de-select all records");
    else {
        a.html("Click here to select all " + a.attr("rec") + " records across all pages");
        g.find("a.gridSelect").attr("class", "gridSelect");
    }
}

function SelectGridRecord(a, bit) {
    a = $(a);
    if (!a.closest("TR").isVisible())
        return;
    if (a.hasClass("cancelEditing")) {
        cancelEditing(a);
        return;
    }
    var gridId = a.closest(".RadGrid").attr("id");
    if ($("#" + gridId).hasClass("allRecords"))
        return;    
    grid = Erp.Grid._getGridView(gridId);
    var ind = a.closest(".rgRow,.rgAltRow").attr("id").split('__')[1];
    if (ind < 0)
        return;
    if ($("#" + gridId).attr("disablemultiselect") == "1") {
        grid.selectItem(ind);
        return;
    }
    if (bit == false)
        a.removeClass("checked");
    else if (bit == true)
        a.addClass("checked");
    else
        a.toggleClass("checked");
    if (a.hasClass("checked")) {        
        //var prev = grid.get_selectedItems()[0];
        //if (prev)
        //    prev = $(prev.get_element());
        //grid.selectItem(ind);
        //if (prev)
        //    prev.find(".gridSelect").addClass("checked");
    }
    else
        grid.deselectItem(ind);
    _checkGridSelectedStatus(gridId);
}
function _gridSelectItem(sender, args) {
    $("#" + args.get_id()).children().first().find(".gridSelect").addClass("checked");
    _checkGridSelectedStatus(sender.get_id());
}
function _gridDeSelectItem(sender, args) {
    if ($("#" + sender.get_id() + "_GridData").find(".gridSelect.checked").filter(":visible").length < 2) {
        $("#" + args.get_id()).children().first().find(".gridSelect").removeClass("checked");
    }
    _checkGridSelectedStatus(sender.get_id());
}
function _checkGridSelectedStatus(id) {
    var g = $("#" + id);
    if (g.attr("hideselectcolumn") == "1") {
        g.addClass("grid-selected");
        return;
    }
    g.removeClass("grid-multiselected grid-selected");
    var cnt = $("#" + id + "_GridData").find(".gridSelect.checked").filter(":visible").length;
    if (cnt < 1)
        return;
    g.addClass(cnt > 1 ? "grid-multiselected" : "grid-selected");

}

function showSearchList(ctl, nt) {
    if (Modernizr.isios)
        document.activeElement.blur();

    if (ctl.hasClass("entityValue") || ctl.hasClass("select-wrapper"))
        ctl = ctl.children(".entityInput,.select-dropdown");

    if (ctl.attr("disabled") || ctl.closest(".entity").hasClass("entity-disabled"))
        return;
    var slCtr = getSearchlistCtr();
    if (slCtr.isVisible() && (slCtr.data("CurrentFieldActID") == ctl.attr("actualid") || slCtr.data("CurrentFieldActID") == ctl.attr("id"))) {
        slCtr.hide();
        return;
    }
    var ctr = _initSearchList(ctl);
    setSearchlistCtrPos(ctl)
    if (nt)
        ctr.show();
    else
        window.setTimeout(function () { ctr.show(); }, 100);
    ctr.data("CurrentField", ctl.attr("id"));
    ctr.data("CurrentFieldActID", $.defaultVal(ctl.attr("actualid"), ctl.attr("id")));
    var pop = ctl.closest(".jqModalPopup");
    if (pop.length > 0)
        ctr.zIndex(pop.zIndex() + 10);

}

function setSearchlistCtrPos(ctl) {
    var ctr = getSearchlistCtr();
    ctr.show().position({ my: "left top", at: "left bottom", of: ctl.hasClass("chip-ctr") ? ctl.parent().children(".select-wrapper") : ctl, collision: "none none" });
    if (isParentWinForSelect()) {
        ctr.css("top", ctl[0].getBoundingClientRect().y + frameElement.getBoundingClientRect().y + ctl.outerHeight());
        ctr.css("left", ctl[0].getBoundingClientRect().x + frameElement.getBoundingClientRect().x);
    }
}
function getddlSearchEntityList() {
    return getSearchlistCtr().find("#ddlSearchEntityList");
}
function getSearchListIframe(id) {
    return getSearchlistCtr().find("#"+id);
}
function isParentWinForSelect() {
    return Erp.EnablePopoutSelect==true;
}
function getSearchlistCtr(createIfNotExist) {
    var refWin = isParentWinForSelect()?parent:window;
    var divCtr = refWin.$("#divSearchListCtr");
    if (createIfNotExist && !divCtr.exists()) {
        divCtr = refWin.$("<div id='divSearchListCtr' class='ui-widget-content'><div class='sl-div-top' ><select id='ddlSearchEntityList' onchange='_loadSearchGrid($(this))'></select></div><div class='sl-div-ifr'></div><div style=display:none' class='sl-div-loader'></div><div class='multi-values' style='display:none'></div></div>");
        if (Erp.Responsive)
            divCtr.on("click", function (e) { if ($(e.target).attr("id") == "divSearchListCtr") $(this).hide(); })
        refWin.$(refWin.document.body).append(divCtr);
        divCtr.hide();
        refWin.$(refWin.document).on("click", function (e) {
            if (divCtr.isVisible()) {
                if ($(e.target).attr("id") == divCtr.data("CurrentField")) {
                    e.stopPropagation();
                    return true;
                }
                else
                    divCtr.hide();
            }
            if ($(e.target).closest(".showChips").length == 0)
                $(".showChips").removeClass("showChips");
        });
        if (isParentWinForSelect()) {
            $(document).on("click", function (e) {
                if (!divCtr.isVisible())
                    return true;
                if ($(e.target).attr("id") == divCtr.data("CurrentField")) {
                    e.stopPropagation();
                    return true;
                }
                else
                    divCtr.hide();
            })
        }
        divCtr.on("click", function (e) { e.stopPropagation(); });
        //$("#ddlSearchEntityList").chosen({ width:"70%",disable_search_threshold: 10, placeholder_text_single: " Please Select Entity" });
        refWin.$("#ddlSearchEntityList").SelectX();
        divCtr.resizable({
            minHeight: 250,
            minWidth: 250,
            handles: "e",
            start: function () { divCtr.children(".sl-div-loader").show(); },
            stop: function () { divCtr.children(".sl-div-loader").hide(); divCtr.find("iframe:visible").attr("windowwidth", divCtr.css("width")); }
        });

    }
    return divCtr;
}

function _initSearchList(ctl) {
    var divCtr = getSearchlistCtr(true);
    divCtr.children('.multi-values').hide().empty();
    divCtr.data("CurrentField", ctl.attr("id"));
    divCtr.data("FieldType", $.defaultVal(ctl.data("FieldType"),""));
    divCtr.data("CurrentFieldActID", $.defaultVal(ctl.attr("actualid"), ctl.attr("id")));
    divCtr.data("Rpt-Tk", $.defaultVal(ctl.attr("rpt-tk"),""));
    var ddl = getddlSearchEntityList();
    ddl.data("FieldID", ctl.data("FieldID"));
    ddl.data("LookupCode", $.defaultVal(ctl.data("LookupCode"),""));
    ddl.data("InlineMode", ctl.data("InlineMode"));
    var sel = ddl.val();
    ddl.empty();
    ddl.append($("<option value=''>Please Select Entity</option>"));
    var eids = ctl.data("Eids").split(',')
    for (var i = 0; i < eids.length; i++) {
        if (!$.isEmpty(eids[i]))
            ddl.append($("<option value='" + eids[i] + "'>" + $.defaultVal(mxEntityList[eids[i]], eids[i]) + "</option>"));
    }
   
    if (eids.length <= 1) {
        if (eids.length == 1)
            ddl.val(eids[0]);
        divCtr.node(0).hide();
        divCtr.find('.sl-div-ifr').css("top", 0);
        divCtr.children('.sl-div-loader').css("top", 0);
    }
    else {
        divCtr.node(0).show();
        divCtr.find('.sl-div-ifr').css("top", "");
        divCtr.children('.sl-div-loader').css("top","");
    }
    divCtr.children('.sl-div-loader').hide();
    if (!$.isEmpty(sel))
        ddl.val(sel);
    if (ddl.val() == "" && eids.length == 1)
        ddl.val(eids[0]);
    //ddl.trigger("chosen:updated");
    _loadSearchGrid(ddl, ctl);
   
    getddlSearchEntityList().SelectX("refresh");
    //divCtr.css("min-width", ctl.outerWidth())
    divCtr.css("min-width", Math.max(ctl.outerWidth(), 250));

    divCtr.removeClass("popup-ctr");
    if (ctl.data("EnableGridMode"))
        divCtr.addClass("popup-ctr");
    return divCtr;
}

var __docClickSet = false;
function _initMenu(div) {
    div.on("hover", ".menu-item,.menu-group", function (e) {
        a = $(this); 
        e.stopPropagation();
        var c = a.children(".menu-ctr");
        if (typeof __curMenu != "undefined" && __curMenu && __curMenu[0] != a.parent()[0])
            __curMenu.hide();
        __curMenu = c;
        if (c.length > 0 && c.children().length > 0) {
            if (a.parent().hasClass("menu-root") && a.closest(".Menu").hasClass("HorizontalMenu"))
                c.show().position({ my: "left top", at: "left bottom+1", of: a });
            else
                c.show().position({ my: "left top", at: "right top+5", of: a });
        }
    });
    div.on('click', '.menu-collapse,.menu-expand', function (e) {
        e.stopPropagation();
        if ($(this).hasClass("menu-collapse")) {
            var m = $(this).closest(".menu-group").next();
            while (m.hasClass("menu-item"))
                m = m.hide().next();
            $(this).attr("class", "menu-expand");
            Erp.RedrawLayout();
        }
        else if ($(this).hasClass("menu-expand")) {
            var m = $(this).closest(".menu-group").next();
            while (m.hasClass("menu-item"))
                m = m.show().next();
            $(this).attr("class", "menu-collapse");
            Erp.RedrawLayout();
        }
    });
    if (!__docClickSet) {
        __docClickSet = true;
        $(document).on("click", function (e) {
            if (!$(e.target).closest(".menu-item").exists())
                $(".menu-ctr").hide();
        });
    }
}


function _loadSearchGrid(ddl, fld) {
    var inlineMode = ddl.data("InlineMode");    
    var divCtr = getSearchlistCtr();
    var currId = divCtr.data("CurrentFieldActID");
    var tkId = $.defaultVal(divCtr.data("Rpt-Tk"), "");
    var gridId = (tkId.length > 0 ? currId.substring(0, currId.length - tkId.length - 1) : currId) + "_grid";
    var ifrCtr = divCtr.node(1);
    ifrCtr.find(".ifr").hide();
    if ($.isEmpty(ddl.val()))
        return;
    var ifr = ifrCtr.find("#ifr_" + ddl.val() + ddl.data("FieldID") + ddl.data("LookupCode"));
    var src = AppRootPath + "/main/list.aspx?EID=" + ddl.val() + "&Fld=" + ddl.data("FieldID") + (!$.isEmpty(ddl.data("LookupCode")) ? "&_fc=" + ddl.data("LookupCode") : "");
    
    var qs = GetQSColl();
    for (var x = 0; x < qs.length; x++) {
        var k = qs[x].Key.toLowerCase();
        if (_checkValidKeyName(k) && k != "title" && k != "_t1") {
            if (inlineMode && typeof Erp.GetParam(gridId, qs[x].Key) == "undefined")
                Erp.SetParam(gridId, qs[x].Key, qs[x].Value);

            src += "&" + qs[x].Key + "=" + encodeURIComponent(qs[x].Value);
        }
        
    }
    if (Erp.Responsive && src.indexOf("&_rspv=")<0)
        src += "&_rspv=1";
    if (fld) {
        var d = fld.data();
        for (p in d) {
            if (p.indexOf("@@") == 0) {
                src += "&" + p.substring(2) + "=" + encodeURIComponent(d[p]);
                Erp.SetParam(gridId, p.substring(2), d[p]);
            }
        }
    }

    if (!ifr.exists()) {
        var _ifr = null;
        if (inlineMode) {
            _ifr = $("<div class='ifr' id='ifr_" + ddl.val() + ddl.data("FieldID") + ddl.data("LookupCode") + "' src=\"" + src + "\"  ></div>");
            ifrCtr.append(_ifr);
            ifrCtr.css("height","");
            _ifr.append($("#" + gridId + "_Parent").show()); 
            $("#" + gridId).addClass($("#" + gridId).attr("singlecol") == "1" ? "singleCol" : "");
        }
        else {
            _ifr = $("<iframe class='ifr' id='ifr_" + ddl.val() + ddl.data("FieldID") + ddl.data("LookupCode") + "' src=\"" + src + "\"  frameborder='0'></iframe>")
            ifrCtr.append(_ifr);
        }
        divCtr.css("width", 350);

        if (inlineMode) {
            if ($("#" + gridId).attr("showadd")=="1")
                _ifr.append('<a href="javascript:void(0)" sid="' + currId + '" gid="' + gridId + '" eid="' + $("#" + gridId).attr("entityid") + '" fc="' + $("#" + gridId).attr("fc") + '" title="Add New Record" class="btnLookupFormLauncher mdl-ripple" onclick="delayClick(event,__openLookupForm)">+</a>');
            RefreshGrid(gridId);
            divCtr.data("prevFieldID", currId)
        }

        if (!inlineMode && isParentWinForSelect())
            _ifr[0].targetFrameId = frameElement.id;

        if (inlineMode) {
            var wd = 0;
            var tbl = $("#" + gridId + "_ctl00");
            var cols = tbl.children("colgroup:first").children("col");
            if (cols.length <= 2) {              
                wd = fld.parent().outerWidth();
            }
            else {
                if (!Erp.Touch) {

                    var minW = 300;
                    var gc = Erp.Grid.GetColumns(gridId);
                    cols.each(function (i) { if (i == 0) return true; if (!gc[i].get_visible()) return true; wd += parseInt($(this).css("width")); });
                    if (wd < minW) {
                        tbl.closest(".RadGrid").children(".rgHeaderWrapper").find("colgroup").node(1).css("width", parseInt(tbl.children("colgroup").node(1).css("width")) + minW - wd);
                        tbl.children("colgroup").node(1).css("width", parseInt(tbl.children("colgroup").node(1).css("width")) + minW - wd);
                        wd = minW;
                    }
                    wd += 30;
                }
            }
            divCtr.css("width", wd);
            _ifr.attr("windowwidth", wd);
        }
    }
    else {
        if (inlineMode) {
            ifrCtr.css("height","");
            if (ifr.attr("src") != src) {                
                ifr.attr("src", src);
                $("#" + gridId).hide();
                if ($("#" + gridId).data("lookupSearchText") != "" && $("#" + gridId).data("lookupSearchText") != fld.val() && divCtr.data("prevFieldID")!= currId)
                    $("#" + gridId).data("lookupSearchText","")
                RefreshGrid(gridId);
            }
            else if ($("#" + gridId).data("lookupSearchText") != "" && $("#" + gridId).data("lookupSearchText") != fld.val() && divCtr.data("prevFieldID") != currId) {
                $("#" + gridId).data("lookupSearchText", "")
                $("#" + gridId).hide();
                RefreshGrid(gridId);
            }
            divCtr.data("prevFieldID", currId)
            ifr.show();
        }
        else {
            if (ifr.attr("src") != src) {
                if (ifr[0] && ifr[0].contentWindow && ifr[0].contentWindow.$)
                    ifr[0].contentWindow.$("body").hide();
                ifr.attr("src", src);
            }
            ifr.show();
            //if (ifr[0] && ifr[0].contentWindow && typeof ifr[0].contentWindow.__clearGridSelection == "function")
            //    ifr[0].contentWindow.__clearGridSelection();
            if (ifr[0] && ifr[0].contentWindow && typeof ifr[0].contentWindow.__GridDataBound == "function")
                window.setTimeout(function () { ifr[0].contentWindow.__GridDataBound(); }, 105);
        }
       
        if (!$.isEmpty(ifr.attr("windowwidth")))
            divCtr.css("width", ifr.attr("windowwidth"));
        else
            divCtr.css("width", 350);
    }
}
function closeForm() {
    if (window.frameElement && parent.Erp && parent.Erp.MobileHome && !$(window.frameElement).parent().hasClass("Popup")) {
        $(parent.document.body).removeClass("HideDash");
        if (parent.delayDashboardLoading)
            parent.loadFirstDashBoard();
    }
    else if (window.frameElement && $(window.frameElement).parent().hasClass("Popup")) {
        var p = $(window.frameElement).parent().prev();
        if (p.hasClass("_lyr"))
            p.remove();
        $(window.frameElement).parent().remove();
    }
    else if (window.frameElement && $(window.frameElement).attr("ui2")) {
        parent._closeWin();
    }
    else if (window.frameElement && parent.HomePage) {
        $(window.frameElement).parent().hide();
        if ($(window.frameElement).parent().hasClass("win-maximize"))
            parent.winCmd(null, "restore")
    }
    else if (window.frameElement && parent && typeof parent.toggleDetailsForm == "function")
        parent.toggleDetailsForm(false);
    else if (window.frameElement) {
        $(document.documentElement).hide();
        if (window.frameElement.WidgetMode)
            $(parent.document.body).removeClass("HideDash");
    }
    else
        window.close();
}


function GridAction(btn,action) {
    btn = $(btn);
    if (btn.hasClass("disabled"))
        return;
    if (action)
        btn.data("Action",action)
    action = btn.data("Action");    
    if (!action)
        return;

    var gridId = btn.closest(".RadGrid").attr("id");
    var evt = $("#" + gridId).data("ongridbuttonclick");
    if (typeof evt == "function" && evt(gridId, btn, action) === false)
        return false;
        

    _openWindow(action,btn);

    return false;
}
function __openForm(a) {
    a = $(a);
    var gridId = a.closest(".RadGrid").attr("id");
    var grid = Erp.Grid._getGridView(gridId);
    if (!grid)
        return;
    grid.clearSelectedItems();
    var ind = a.closest(".rgRow,.rgAltRow").attr("id").split('__')[1];
    if (ind > -1) {
        grid.selectItem(ind);
        var btn;
        if (Erp.Responsive) {
            btn = $("#" + gridId + "_cmd").find(".dgEdit");
            btn = btn.exists() ? btn : $("#" + gridId + "_cmd").find(".dgView");
        }
        else {
            btn = $("#btn-" + gridId + "-Edit");
            btn = btn.exists() ? btn : $("#btn-" + gridId + "-View");
        }
        if (btn && btn.exists())
            btn.eq(0).trigger("click");
    }
}
function __selectRecord(a,func) {
    a = $(a);
    var gridId = a.closest(".RadGrid").attr("id");
    var grid = Erp.Grid._getGridView(gridId);
    if (!grid)
        return;
    grid.clearSelectedItems();
    var ind = a.closest(".rgRow,.rgAltRow").attr("id").split('__')[1];
    if (ind > -1) {
        grid.selectItem(ind);
    }
    if (!$.isEmpty(func) && typeof window[func] == "function")
        window[func](a);
}
function _getQsParamsString(fromLookup) {
    var qs = GetQSColl();
    var src = "";
    for (var x = 0; x < qs.length; x++) {
        var k = qs[x].Key.toLowerCase();
        if (fromLookup && (k == "id" || k == "fld"))
            continue;
        if (_checkValidKeyName(k))
            src += "&" + qs[x].Key + "=" + qs[x].Value;

    }
    return src;
}
function _openWindow(action, btn, returnUrl, confirmTrue) {
    if (!action || !action.Action)
        return;
    var _enc = false;
   
    if (!action.Encr && !$.isEmpty(action.Entity) && Users.SMO > 0) {
        action.Entity2 = action.Entity;
        action.Entity = __encr(action.Entity);
    }
     
    if (!action.Encr && !$.isEmpty(action.Form) && Users.SMO > 0)
        action.Form = __encr(action.Form);

    action.Encr = true;
    var __eid = $.defaultVal(action.Entity2, action.Entity);
    var global = (action.Global == true);
    var text = "";
    var pid = "";
    var gridID = $.defaultVal(action.GridID,"");
    var gridEntityID = "";
    var grid = null;
    var disabled = false;
    var mainGrid = null;
    var gridMode = false;
    var homePage = false;
    var relatedGrid = false;
    var gridParams = "";
    var multiMode = false;
    var multiKeys = "";
    var arrWFID = null;
    var selectedRows = null;
    var quickAdd = false;
    if (btn) {
        if (btn.hasClass("disabled"))
            return;
        if (btn.hasClass("pageBtn") || Erp.MobileHome || btn.hasClass("menuItem") || btn.hasClass("menu-search-item") || btn.hasClass("quick-add-item") || btn.hasClass("bookmark-item")) {
            if (btn.attr("disabled")) {
                return;
            }
            quickAdd = btn.hasClass("quick-add-item");
            homePage = btn.hasClass("menuItem") || btn.hasClass("menu-search-item") || btn.hasClass("quick-add-item") || btn.hasClass("bookmark-item") || Erp.MobileHome;
            if (btn.hasClass("pageBtn"))
                pid = $.defaultVal(getQS("ID"), ItemID);
        }
        else {
            var dgcmd = btn.closest(".dgCmd");
            if (dgcmd.length > 0) {
                if (dgcmd.hasClass("inProgress")) {
                    return;
                }
                gridMode = true;
                gridID = btn.closest(".dgCmd").attr("id");
                gridID = gridID.substring(0, gridID.length - 4);
                selectedRows = $("#" + gridID + "_GridData").find(".gridSelect.checked").filter(":visible");
                multiMode = $("#" + gridID).hasClass("allRecords") || selectedRows.length > 1;
                multiKeys = Erp.Grid.GetRecordID_Multiple(gridID);
                grid = $find(gridID);
                var el = $(grid.get_element());
                mainGrid = (el.attr("maingrid") == "1");
                relatedGrid = (el.attr("isrelatedgrid") == "1");
                disabled = (el.attr("disabled") == "disabled");
                gridEntityID = el.attr("entityid");
                if (disabled) {
                    return;
                }
                if (finishRowEditing(null, gridID) === false) {
                    Erp.ShowMessage("Please fix all errors before continuing.", "alert");
                    return false;
                }
                if (el.data("__ParamSet")) {
                    var data = el.data();
                    for (p in data) {
                        if (!p.indexOf("@@") == 0)
                            continue;
                        gridParams += "&" + p.substring(2) + "=" + encodeURIComponent(data[p]);
                    }
                }
            }
        }
    }
    else {
        pid = $.defaultVal(getQS("ID"), ItemID);        
    }
    var refreshGrid = (gridMode && action.Refresh == true);
    var mode = action.Action.toUpperCase();
    if (mode == "" || mode == "NONE")
        return;    
    var params = $.defaultVal(action.Params, "");
    var newurl = "";
    if (mode == "CLOSE") {
        Erp.CloseWindow();
        return;
    }
    if (mode == "SAVEGRID") {
        if (!gridMode)
            return;
        Erp.Grid.SaveChanges(gridID);
        return;
    }
    else if (mode == "ADDFORM") {

        if (btn && !mainGrid && btn.hasClass("dgAdd") && Erp.LayoutMode == "A" && $.isEmpty($.defaultVal(getQS("ID"), ItemID))) {
            Erp.SaveData();
            window._triggerAddBtn = btn;
            return;

        }

        newurl = AppRootPath + "/main/" + (action.Responsive == 1 ? "main" : "ui") + ".aspx?1" + ($.isEmpty(action.Entity) ? "" : "&EID=" + action.Entity) + ($.isEmpty(action.Form) ? "" : "&_fc=" + encodeURIComponent(action.Form)) + "&_pt=A";
    }
    else if (mode == "EDITFORM" || mode == "READFORM") {
        if (gridMode && global != true) {
            pid = Erp.Grid.GetRecordID(gridID);
            if (!pid) {
                Erp.ShowMessage("No record selected.", "alert");
                return false;
            }
        }
        else
            pid = action.RecordID;
        newurl = AppRootPath + "/main/" + (action.Responsive == 1 ? "main" : "ui") + ".aspx?1" + ($.isEmpty(pid) ? "" : "&ID=" + pid) + ($.isEmpty(action.Entity) ? "" : "&EID=" + action.Entity) + ($.isEmpty(action.Form) ? "" : "&_fc=" + encodeURIComponent(action.Form)) + "&_pt=" + (mode == "EDITFORM" ? "E" : "V");
    }
    else if (mode == "VIEWFORM" || mode == "READVIEWFORM") {
        if (gridMode && global != true) {
            pid = Erp.Grid.GetRecordID(gridID);
            if (!pid) {
                Erp.ShowMessage("No record selected.", "alert");
                return false;
            }
        }
        else
            pid = action.RecordID;
        newurl = AppRootPath + "/main/" + (action.Responsive == 1 ? "main" : "view") + ".aspx?1" + ($.isEmpty(action.Entity) ? "" : "&EID=" + action.Entity) + ($.isEmpty(action.Form) ? "" : "&_fc=" + encodeURIComponent(action.Form)) + "&_pt=" + (mode == "READVIEWFORM" ? "RG" : (action.Responsive == 1 ? "G" : "V"));
    }
    else if (mode == "DELETE") {
        var evt = $("#" + gridID).data("onrowdeleting");
        var hasEvt = (typeof evt == "function");
        if (multiMode) {
            if (hasEvt) {
                Erp.ShowMessage("Multiple records cannot be deleted. Please choose a single record.", "alert");
                return;
            }
            Erp.ShowDialog({ title: "Please Confirm", icon: "deleteIcon", message: 'Multiple records are selected.<br/>Do you wish to delete all records?' }, "Yes,No", function (_cmd) {
                if (_cmd == "Yes") {
                    var ent = new Erp.Entity(__eid);
                    Erp.ShowBusyMessage("Deleting");
                    var ids = Erp.Grid.GetRecordID_Multiple(gridID);
                    deleteNewRow(gridID, selectedRows);
                    if (ids.length > 0)
                        Erp.BatchOperation("delete", ent, ids, "", function (r) {
                            Erp.HideBusyMessage();
                            if (r[0].TotalRecords == r[0].SuccessCount) {
                                Erp.ShowMessage("Records successfully deleted.", "success");
                                Erp.Grid.Refresh(gridID);
                            }
                            else {
                                Erp.ShowMessage((r[0].SuccessCount <= 0 ? "Records could not be deleted." : "Some records could not be deleted"), (r[0].SuccessCount <= 0 ? "error" : "alert"));
                                Erp.Console(r);
                                if (r[0].SuccessCount > 0)
                                    Erp.Grid.Refresh(gridID);
                            }
                        });
                    else {
                        Erp.HideBusyMessage();
                        addNewGridRow(gridID, "Load");
                    }
                    return;
                }
            });
        }
        else {
            pid = Erp.Grid.GetRecordID(gridID);
            if ($.isEmpty(pid)) {
                Erp.ShowMessage("No record selected.", "alert");
                return false;
            }

            Erp.ShowDialog({title:"Please Confirm",icon:"deleteIcon",message:'Do you wish to delete this record?'}, "Yes,No", function (_cmd) {
                if (_cmd == "Yes") {
                    if (hasEvt && evt(gridID, { entityId: $("#" + gridID).attr("entityid"), row: Erp.Grid.GetRecordCell(gridID, 0).parent(), recordId: pid }) === false)
                        return;
                    deleteNewRow(gridID);
                    evt = $("#" + gridID).data("onrowdeleted");
                    if (pid != "")
                        RadGrid_Delete(gridID, { "@ID": pid, "@EID": __eid, WFCode: $.defaultVal(getQS("_wf"), "") });
                    else {
                        addNewGridRow(gridID, "Load");
                        if (typeof evt == "function")
                            evt(gridID, { entityId: $("#" + gridID).attr("entityid"), recordId: pid });
                    }
                }
            })
        }
        return;
    }
    else if (mode == "WFAPPROVAL") {
        if (gridMode) {
            var arrRecID = [];
            var wfid = "";
            var activewf = "";
            if (multiMode) {
                if (!confirmTrue) {
                    Erp.ShowDialog({ title: "Please Confirm", icon: "exclamationIcon", message: 'Multiple records are selected.<br/>Do you wish to continue?' }, "Yes,No",
                        function (_cmd) { if (_cmd == "Yes") _openWindow(action, btn, returnUrl, true);})
                    return;                    
                }
                if (confirmTrue) {
                    arrRecID = Erp.Grid.GetRecordID_Multiple(gridID);
                    arrWFID = Erp.Grid.GetParamValue_Multiple(gridID, "WFID");
                    pid = (arrRecID[0].indexOf("GRIDRESULT:") > -1 || arrRecID[0].indexOf("ENTITY:") > -1 ? Erp.Grid.GetRecordID(gridID, 0) : arrRecID[0]);
                    wfid = (arrWFID[0].indexOf("GRIDRESULT:") > -1 || arrRecID[0].indexOf("ENTITY:") > -1 ? Erp.Grid.GetParamValue(gridID, "WFID", 0) : arrWFID[0]);
                    activewf = true;
                    action.Location = "POPUP";
                    action.PopHt = 300; action.PopWd = 550;
                }
                else
                    return;
            } else {
                pid = Erp.Grid.GetRecordID(gridID);
                if (!pid) {
                    Erp.ShowMessage("No record selected.", "alert");
                    return false;
                }
                wfid = Erp.Grid.GetParamValue(gridID, "WFID");
                activewf = Erp.Grid.GetParamValue(gridID, "ActiveWf") / 1 > 0;
            }

            if (activewf) {
                if (multiMode)
                    newurl = AppRootPath + "/main/interface.aspx?EID=" + action.Entity + "&ID=" + pid + "&multiAppr=1&wfid=" + wfid;
                else
                    newurl = AppRootPath + "/main/" + (action.Responsive == 1 ? "main" : "ui") + ".aspx?1" + ($.isEmpty(pid) ? "" : "&ID=" + pid) + ($.isEmpty(action.Entity) ? "" : "&EID=" + action.Entity) + ($.isEmpty(action.Form) ? "" : "&_fc=" + encodeURIComponent(action.Form)) + "&_pt=E&_appr=1&wfid=" + wfid;
            }
            else {
                Erp.ShowMessage("Action cannot be taken on this record.", "alert")
                return;
            }
        }
        else {
            var pid = action.RecordID
            if ($.isEmpty(pid) || params.indexOf("wfid=") < 0)
                return false;
            newurl = AppRootPath + "/main/" + (action.Responsive == 1 ? "main" : "ui") + ".aspx?1" + ($.isEmpty(pid) ? "" : "&ID=" + pid) + ($.isEmpty(action.Entity) ? "" : "&EID=" + action.Entity) + ($.isEmpty(action.Form) ? "" : "&_fc=" + encodeURIComponent(action.Form)) + "&_pt=E&_appr=1";

        }

    }
    else if (mode == "WFONDEMAND") {
        if (gridMode) {
            pid = Erp.Grid.GetRecordID(gridID);
            if (!pid) {
                Erp.ShowMessage("No record selected.", "alert");
                return false;
            }
        }
        newurl = "../meta/runwf.aspx?eid=" + (gridEntityID ? gridEntityID : getQS("EID")) + "&id=" + pid;

        var p = $(document.body).ShowPopup({ url: newurl, height: 250, width: 350 }).css({ "padding-top": "3px", top: "25px" });
        p.css("background-color", "#fff");
        return;
    }
    else if (mode == "URL") {
        newurl = action.Url;
    }
    else if (mode == "WFDLG") {        
        if (!confirmTrue) {
            Erp.ShowDialog({ title: "Please Confirm", icon: "exclamationIcon", message: 'Do you wish to continue?' }, "Yes,No",
                function (_cmd) { if (_cmd == "Yes") _openWindow(action, btn, returnUrl, true); })
            return;
        }
        //global not checked here.cos dialogboundtoentity
        if (gridMode) {
            pid = Erp.Grid.GetRecordID(gridID);
            if (!pid) {
                Erp.ShowMessage("No record selected.", "alert");
                return;
            }
        }
        newurl = "../meta/RunWF.aspx?w=" + action.WF + "&eid=" + (gridEntityID ? gridEntityID : getQS("EID")) + "&id=" + pid;

    }
    else if (mode == "RPTFOLDER") {
        newurl = "../meta/reports_view.aspx?1" + ($.isEmpty(action.RptFolder) ? "" : "&fid=" + action.RptFolder) + (action.SubFolder ? "&c=1" : "");
    }
    else if (mode == "RPTLIST") {
        newurl = "../main/reportlist.aspx?_ns=1&" + ($.isEmpty(action.RptFolder) ? "" : "&fid=" + action.RptFolder) + (action.SubFolder ? "&c=1" : "");
    }
    else if (mode == "REPORT") {
        if (gridMode && global != true) {
            pid = Erp.Grid.GetRecordID(gridID);
            if (!pid) {
                Erp.ShowMessage("No record selected.", "alert");
                return;
            }
        }
        newurl = "Report_Viewer.aspx?_ns=1" + ($.isEmpty(action.Rpt) ? "" : "&_ID=" + action.Rpt) + (("&" + params).indexOf("&ID=") > -1 ? "" : "&ID=" + $.defaultVal(pid, ""));

    }
    else if (mode == "CHART") {
        if (gridMode && global != true) {
            pid = Erp.Grid.GetRecordID(gridID);
            if (!pid) {
                Erp.ShowMessage("No record selected.", "alert");
                return;
            }
        }
        newurl = "chart.aspx?1" + ($.isEmpty(action.Chart) ? "" : "&ID=" + action.Chart);

    }
    else if (mode == "DASH") {
        if (gridMode && global != true) {
            pid = Erp.Grid.GetRecordID(gridID);
            if (!pid) {
                Erp.ShowMessage("No record selected.", "alert");
                return;
            }
        }
        newurl = AppRootPath + "/main/dashboard.aspx?1&_mo=1&" + ($.isEmpty(action.Dash) ? "" : "&_dsid=" + action.Dash);

    }
    else if (mode == "SESSION") {
        newurl = "SessionEntity.aspx?x" + ($.isEmpty(action.SessionId) ? "" : "&Id=" + action.SessionId) + ($.isEmpty(action.App) ? "" : "&App=" + action.App) + (action.HideGroup ? "&HideGroup=1" : "");

    }
    else if (mode == "SETTINGS") {
        newurl = "../system/customsettings.aspx?1" + ($.isEmpty(action.Category) ? "" : "&cat=" + action.Category) + "&id=" + action.CatId;

    }
    else if (mode == "MERGE") {
        if (gridMode && global != true) {
            pid = Erp.Grid.GetRecordID(gridID);
            if (!pid) {
                Erp.ShowMessage("No record selected.", "alert");
                return;
            }
        }
        newurl = "Render.aspx?_m=merge&_ns=1&" + ($.isEmpty(action.Ltr) ? "" : "&_lid=" + action.Ltr) + (("&" + params).indexOf("&ID=") > -1 ? "" : "&ID=" + $.defaultVal(pid, ""));
    }
    else if (mode == "WF") {


        if (gridMode && global != true) {
            if (multiMode) {
                if (!confirmTrue) {
                    Erp.ShowDialog({ title: "Please Confirm", icon: "exclamationIcon", message: 'Multiple records are selected.<br/>Do you wish to continue?' }, "Yes,No",
                        function (_cmd) { if (_cmd == "Yes") _openWindow(action, btn, returnUrl, true); })
                    return;
                }
                if (confirmTrue) {
                    pid = Erp.Grid.GetRecordID_Multiple(gridID);
                }
                else
                    return;
            }
            else {
                pid = Erp.Grid.GetRecordID(gridID);
                if (!pid) {
                    Erp.ShowMessage("No record selected.", "alert")
                    return;
                }
                if (!confirmTrue) {
                    Erp.ShowDialog({ title: "Please Confirm", icon: "exclamationIcon", message: 'Do you wish to continue?' }, "Yes,No",
                        function (_cmd) { if (_cmd == "Yes") _openWindow(action, btn, returnUrl, true); })
                    return;
                }
                if (!confirmTrue)              
                    return;
            }
        }

        var data = new Object();
        data["Type"] = "ExecWF";
        data["@ID"] = pid;
        data["@EID"] = (gridEntityID ? gridEntityID : getQS("EID"));
        data["@WFID"] = $.defaultVal(action.WF, "");
        data["Rebind"] = refreshGrid;
        data["GridID"] = gridID;
        data["QS:ID"] = pid;
        data["QS:EID"] = data["@EID"];
        var qs = GetQSColl();
        
        for (var x = 0; x < qs.length; x++) {
            var k = qs[x].Key.toLowerCase();
            if (_checkValidKeyName(k) && k != "w" && k != "id") {
                data["QS:" + qs[x].Key] = qs[x].Value;
            }
        }
        if (!$.isEmpty(params)) {
            if (gridMode && params.indexOf("{") > -1 && params.indexOf("}") > -1) {
                var master = grid.get_masterTableView();
                var rows = master.get_selectedItems();
                if (rows == null || rows.length <= 0) {
                    Erp.ShowMessage("No record selected.", "alert");
                    return;
                }
                var tr = $(rows[0].get_element());
                params = params.Replace("{0}", encodeURIComponent(tr.attr("pk")));
                var clientKeys = $("#" + gridID).attr("clientkeys");
                clientKeys = clientKeys ? clientKeys.split(',') : [];
                for (var i = 0; i < clientKeys.length; i++) {
                    if (clientKeys[i] && params.indexOf("{" + (i + 1) + "}")>-1)
                        params = params.Replace("{" + (i + 1) + "}", encodeURIComponent(tr.attr(clientKeys[i])));
                }
            }
            var str = params.split('&');
            for (var i = 0; i < str.length; i++) {
                var s = str[i].split('=');
                if (s.length > 1)
                    data["QS:" + s[0]] = s[1];
            }
        }
        Erp.WebApi.GridCommand("WF", gridID, data, onWfSuccess);
        showGridProgress(grid, true);
        return;
    }

    if (newurl == "")
        return;
    if (params.indexOf("eval:") > -1) {
        params = params.substring(params.indexOf(":") + 1);
        params = eval(params);
    }
    newurl = newurl + (newurl.indexOf("?") > -1 ? "&" : "?__x") + params.Trim(' ').Trim('&').Trim("?");
    newurl += $.isEmpty(action.Title) ? "" : (newurl.indexOf("&Title=") < 0 ? "&Title=" + encodeURIComponent(action.Title) : "");
    var qs = homePage ? [] : GetQSColl();    
    for (var x = 0; x < qs.length; x++) {
        var k = qs[x].Key.toLowerCase();
        if (_checkValidKeyName(k) && k != "w" && k != "id" && k != "pid" && newurl.toLowerCase().indexOf("&" + k + "=") < 0)
            newurl += "&" + qs[x].Key + "=" + qs[x].Value;
    }
    if (newurl.indexOf("{") > -1 && newurl.indexOf("}") > -1) {
        if (gridMode) {
            var master = grid.get_masterTableView();
            var rows = master.get_selectedItems();
            if (rows == null || rows.length <= 0) {
                Erp.ShowMessage("No record selected.", "alert")
                return;
            }
            
            var tr = $(rows[0].get_element());
            newurl=newurl.Replace("{0}", encodeURIComponent(tr.attr("pk")));
            var clientKeys = $("#" + gridID).attr("clientkeys");
            clientKeys = clientKeys ? clientKeys.split(',') : [];
            for (var i = 0; i < clientKeys.length; i++) {
                if (clientKeys[i] && newurl.indexOf("{" + (i + 1) + "}")>-1)
                    newurl = newurl.Replace("{" + (i + 1) + "}", encodeURIComponent(tr.attr(clientKeys[i])));
            }

            pid = Erp.Grid.GetRecordID(gridID);            
            if (newurl.toLowerCase().indexOf("{id}") > -1)
                newurl = newurl.Replace("{ID}", pid).Replace("{id}", pid).Replace("{Id}", pid);

            if (newurl.indexOf("{") > -1 && newurl.indexOf("}") > -1) {
                Erp.ShowMessage("Invalid number of parameters.", "alert");
                return;
            }
        }
        else {
            newurl = newurl.Replace("{0}", pid)
            if (newurl.toLowerCase().indexOf("{id}") > -1)
                newurl = newurl.Replace("{ID}", pid).Replace("{id}", pid).Replace("{Id}", pid);

        }
    }
    if (newurl.indexOf("~") > -1)
        newurl = newurl.replace("~", "../");
    newurl = newurl.Trim('&').Trim("?");
    if (newurl.indexOf("&PID=") < 0) {
        if (!gridMode || mainGrid) {
            if (!$.isEmpty(getQS("PID")))
                newurl += "&PID=" + getQS("PID");
        }
        else
            newurl += "&" + (relatedGrid ? "RelID" : "PID") + "=" + $.defaultVal(getQS("ID"), ItemID);
        if (relatedGrid)
            newurl += "&RelEnt=" + getQS("EID");
    }
    newurl += gridParams;

    if (Erp.Responsive && newurl.indexOf("&_rspv=") < 0)
        newurl += "&_rspv=1";

    if (returnUrl)
        return newurl;

    var loc = $.defaultVal(action.Location, "").toUpperCase();
    var ph = $.defaultVal(action.PopHt, 400); pw = $.defaultVal(action.PopWd, 700);
    var refWin = Erp.__RefWin ? Erp.__RefWin : window;
    if (refWin.HomePage)
        homePage = true;
    if (homePage) 
        newurl = newurl.replace("&_dash=1", "");

    var n1 = "/" + newurl.toLowerCase(); 
    if (n1.indexOf("/main.aspx") < 0 && n1.indexOf("/ui.aspx") < 0 && n1.indexOf("/view.aspx") < 0 && n1.indexOf("/ui2.aspx") < 0 && n1.indexOf("/list.aspx") < 0 && n1.indexOf("/interface.aspx") < 0 && n1.indexOf("/runwf.aspx") < 0 && n1.indexOf("/dashboard.aspx") < 0) {
        newurl = AppRootPath + "/main/ui2.aspx?u=" + encodeURIComponent(decodeURIComponent(newurl));
        if (Erp.Responsive && newurl.indexOf("&_rspv=") < 0)
            newurl += "&_rspv=1";
        if (!$.isEmpty(action.Title))
            newurl += "&_t1=" + encodeURIComponent(action.Title);
    }
    if (homePage && btn) {
        var ic = Erp.MobileHome ? btn.find("i").text().charCodeAt(0) : btn.find(".menuIcon").text().charCodeAt(0);
        if (newurl.indexOf("&_t1=") < 0)
            newurl += "&_t1=" + encodeURIComponent(btn.find(".menuTxt").text());
        newurl += (ic / 1 > 0 ? "&_ic1=" + ic : "");

        if (btn.attr("menu"))
            newurl += "&_meid=" + btn.attr("menu");
    }
    
    if (quickAdd) {
        ph = 400;
        pw = 575;
    }

    if (Erp.Responsive && (loc == "POPUP" || quickAdd)) {
        if (ph > window.innerHeight - 90 || pw > window.innerWidth - 20)
            loc = "SELF";
    }

    if (loc == "NEW") {
        var win = window.open(newurl);
        if (!$.isEmpty(gridID)) {
            win.ParentWin = window;
            win.RefGrid = gridID;
        }
    }
    else if (loc == "POPUP" || quickAdd) {
        var p = refWin.$(refWin.document.body).ShowPopup($.extend({
            title: "", url: newurl, height: ph, width: pw, showClose: !quickAdd, enableDrag: !quickAdd, enableResize: !quickAdd, anim: !quickAdd,
            onClose: function (pop) {
                var pwin = pop.find("iframe")[0].contentWindow;
                if (pwin && typeof pwin.Erp != "undefined") {
                    if (pwin.Erp._CanCloseWindow() == false)
                        return false;
                }
                return true;
            }, autoClose: false, maxTop: 70,minTop:40, style: "padding:5px"
        }, action));
        var pifr=p.find("iframe");
        pifr.attr("showtools", 1)
        pifr[0].ParentWin = window;
        pifr[0].RefGrid = gridID;
        if(arrWFID)
            pifr[0].WFIDList = arrWFID;
        if (newurl.indexOf("interface.aspx") == 0)
            p.css("background-color", "#fff");
       

        if (quickAdd) {
            p.append("<div class='ui-draglayer'></div>");
            p.resizable({
                minHeight: 50,
                minWidth: 100,
                handles: "nw"
            });
            p.css({ top: "initial", left: "initial", right: 0, bottom: 0 });
        }
        return p;
    }
    else if (loc == "SELF" || loc == "") {
        if (Erp && Erp.Responsive)
            Erp.ToggleMobileLoader(true);
        if (homePage) { 
            $(refWin.document.body).addClass("HideDash");
            var ifrView = refWin.$("#ifrView");
            var t = "";
            if (btn) {
                t = btn.find(".menuTxt").html();
                if (typeof winHistoryPos != "undefined" && ifrView.attr("src") != newurl) {
                    if (winHistoryPos >= 0 && winHistoryPos < winHistory.length - 1)
                        winHistory.splice(winHistoryPos + 1);
                    winHistory.push({ id: btn.attr("id"), src: newurl, title: t })
                    winHistoryPos = winHistory.length - 1;
                    setHistoryStatus();
                }
                try {
                    $(ifrView[0].contentWindow.document.documentElement).hide();
                }
                catch (err) {
                }
            }
            ifrView.show();//.attr("src", newurl);
            ifrView[0].contentWindow.location.replace(newurl)
            ifrView.parent().show();
            //refWin.$("#divCommands").show();
            //refWin.$("#divCommands").find(".win-title").html(t);
            if (!$.isEmpty(gridID)) {
                ifrView[0].ParentWin = window;
                ifrView[0].RefGrid = gridID;
            }
            else {
                ifrView[0].ParentWin = null;
                ifrView[0].RefGrid = null;
            }

            ifrView[0].WidgetMode = Erp.WidgetMode;
        }
        else {
            var ifr = refWin.$("#ifrDetailsWindow");
            if (ifr.exists()) {
                refWin.toggleDetailsForm(true, newurl, (action ? action.zIndex : 0));
                ifr[0].ParentWin = window;
                ifr[0].RefGrid = gridID;
            }
            else {
                window.location = newurl;
            }
        }
    }
}

function onWfSuccess(result) {
    Erp.ShowMessage($.defaultVal(result["Message"],"") + $.defaultVal(result["ExceptionMessage"],""), result["Success"] == true ? "success" : "error");
    if (result["Rebind"] == true) {
        if (result["RebindNow"] == true)
            RefreshGrid(result["GridID"]);
        else
            RefreshGridOnWFComplete(result);
    }
    else
        showGridProgress($find(result["GridID"]), false);
}


function updateReqForCalcStatus(fld) {
    var inf = Erp.GetFieldInfo("@" + fld);
    if (inf)
        inf.ReqForCalc = true;
}
function onFieldChange(fun, a, b, c, d, e, f, g) {
    if (typeof fun == "function") {
        if (a && a instanceof $ && a.prop("tagName") == "A" && a.attr("disabled"))
            return;
        _delayFunctionExec(fun,"Change", a, b, c, d, e, f, g);
    }
}

function _delayFunctionExec(fun, type, a, b, c, d, e, f, g) {
    var refFunc = ((a && a instanceof $ && !$.isEmpty(a.attr("dbfields"))) ? a.attr("dbfields") : "");
    var refs = hasDbReferences(fun, type, false, refFunc);
    if (refs.length > 0) {
        evaluateDbReferences(refs, fun, a, b, c, d, e, f, g);
        return true;
    }
    else {
        var res=fun(a, b, c, d, e, f, g);
        if (a && a instanceof $ && !$.isEmpty(a.attr("onclick2")) && res !=false)
            eval("var that=$('#" + a.attr("id") + "');" + a.attr("onclick2"));
        return false;
    }
}
function _delayFunctionListExec(funs,type,callback) {
    var refs = [];
    for (var i = 0; i < funs.length; i++) {
        if (typeof funs[i] == "function")
            refs = $.union(refs, hasDbReferences(funs[i], "Save"));
    }
    evaluateDbReferences(refs, function () {
        for (var i = 0; i < funs.length; i++) {
            if (typeof funs[i] == "function")
                funs[i]();
        }
        if (typeof callback == "function")
            callback();
    });
}
function hasDbReferences(fun, type,greedy,refFunc) {
    var str = fun.toString() + (refFunc ? refFunc : "");
    var refs = [];
    for (var i = 0; i < FunctionList.length; i++) {
        str = str.Replace(FunctionList[i].Name + "(", FunctionList[i].Refs.join(" "));
    }
    for (var i = 0; i < DbReferences.length; i++) {
        var r = DbReferences[i];
        if (r.OnDemand/1 == 1)
            continue;
        var exists = (greedy === true) || str.indexOf(r.Id) > -1;
        if (exists || r.Columns.indexOf("@") == 0 || r.Columns.indexOf("permission.") == 0 || r.Columns.indexOf("setting.") == 0 || r.Columns.indexOf("parent.") == 0 || r.Columns.indexOf("user.") == 0 || r.Columns.indexOf("company.") == 0 || r.Type == "Table" || r.Type == "Value") {
            if ((r.Columns.indexOf("parent.") > -1 || r.Columns.indexOf("user.") == 0 || r.Columns.indexOf("company.") == 0 || r.Columns.indexOf("@") == 0 || r.Columns.indexOf("permission.") == 0 || r.Columns.indexOf("setting.") == 0) && r.Loaded == true)
                continue;
            if ((r.Type == "Table" || r.Type == "Value") && !r.AlwaysLoad && r.Loaded == true)
                continue;
            if (!exists && r.AlwaysLoad == true)
                continue;           
            //r.Loaded = true;
            refs.push(r.Id);
        }
    }    
    return refs;
}

function evaluateDbReferences(refs, fun, a, b, c, d, e, f, g) {
    var async = true;
    if (fun == "async:false") {
        fun = function () { }
        async = false;
    }
    if (!refs || refs.length <= 0)
        return fun(a, b, c, d, e, f, g);

    var args = [];
    for (var i = 0; i < refs.length; i++) {
        var inf = getDbRefInfo(refs[i]);
        if (inf == null || (inf.Loaded && !inf.AlwaysLoad))
            continue;
        if (inf)
            inf.Loaded = true;
        inf.ObjectResult = true;
        args.push(inf);
    }
    if (args.length == 0) {
        fun(a, b, c, d, e, f, g)
        return;
    }
    var data = {};
    data["@ID"] = $.defaultVal(getQS("ID"), ItemID);
    data["@PID"] = $.defaultVal(getQS("PID"), "");
    data["@EID"] = getQS("EID");
    for (var i = 0; i < Erp.FieldInfo.length; i++) {
        if (Erp.FieldInfo[i].ReqForCalc) {
            data["@" + Erp.FieldInfo[i].Name.toLowerCase()] = Erp.GetFieldValue(Erp.FieldInfo[i]);
        }
    }
    for (var i = 0; i < Erp.FieldInfo_Prog.length; i++) {
        if (Erp.FieldInfo_Prog[i].ReqForCalc) {
            data["@" + Erp.FieldInfo_Prog[i].Name.toLowerCase()] = Erp.GetFieldValue(Erp.FieldInfo_Prog[i]);
        }
    }
    data["QS"] = window.location.search + __getWindowParams();
    if (Erp && Erp.WindowParams) {
        for (p in Erp.WindowParams)
            data["@" + p] = Erp.WindowParams[p];
    }
    $("#spnWorking").show();
    if (c == "pvtData")
        data = $.extend(data, b);
    if (c == "GetDbValuesMulti")
        Erp.WebApi.GetDbValuesMulti(args[0], data, b, function (result) {
            $("#spnWorking").hide();
            var res = fun(a, b, result);
            if (a && a instanceof $ && !$.isEmpty(a.attr("onclick2")) && res != false)
                eval("var that=$('#" + a.attr("id") + "');" + a.attr("onclick2"));
        }, function () { });
    else
        Erp.WebApi.GetDbValues(async, args, data, function (result) {
            $("#spnWorking").hide();
            if (!async)
                result = result.d;
            for (var p in result) {
                if (p.indexOf("TABLEDATA$$") == 0)
                    window[p.replace("TABLEDATA$$", "")] = result[p];//(result[p] ? eval(result[p]) : []);
                else
                    window[p] = result[p];
            }
            var res = fun(a, b, c, d, e, f, g);
            if (a && a instanceof $ && !$.isEmpty(a.attr("onclick2")) && res != false)
                eval("var that=$('#" + a.attr("id") + "');" + a.attr("onclick2"));
        }, function () { });

}
function __getWindowParams() {
    var str = "";
    if (Erp && Erp.WindowParams) {
        for (p in Erp.WindowParams)
            str += "&" + p + "=" + Erp.WindowParams[p];
    }
    return str;
}

function getDbRefInfo(fld) {
    for (var x = 0; x < DbReferences.length; x++)
        if (DbReferences[x].Id == fld)
            return DbReferences[x];
    return null;
}

