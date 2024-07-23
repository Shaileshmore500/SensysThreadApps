﻿function RadGrid_GetDataKey(grid,noAlert,row) {
    var tbl = null;
    if (row == -1)
        return null;
    if (typeof grid == "string")
        tbl = $find(grid);
    else
        tbl = grid;
    if (tbl != null) {
        var master = tbl.get_masterTableView()
        var keys = master.get_clientDataKeyNames();
        var rows = row ? [row] : master.get_selectedItems();
        var id = "";
        if (rows != null && rows.length > 0) {
            if (keys != null && keys.length > 0) {
                for (i = 0; i < rows.length; i++) {
                    id += $.defaultVal(rows[i].getDataKeyValue(keys[0]),"") + ",";
                }
                if (id.length > 0)
                    id = id.substring(0, id.lastIndexOf(','));

                return id;
            }
        }
        else {
            if (typeof noAlert == "undefined" || noAlert == false)
                alert("No record selected.");
        }
    }
    return null;
}

function RadGrid_MultipleDataKey(grid, name, noAlert, row) {
    var tbl = null;
    if (typeof grid == "string")
        tbl = $find(grid);
    else
        tbl = grid;
    if (tbl != null) {
        var master = tbl.get_masterTableView()
        var keys = master.get_clientDataKeyNames();
        var rows = row ? [row] : master.get_selectedItems();
        var id = "";
        if (rows != null && rows.length > 0) {
            if (keys != null && keys.length > 0) {
                for (i = 0; i < rows.length; i++) {
                    id += rows[i].getDataKeyValue(name) + ",";
                }
                if (id.length > 0)
                    id = id.substring(0, id.lastIndexOf(','));

                return id;
            }
        }
        else {
            if (typeof noAlert == "undefined" || noAlert == false)
                alert("No record selected.");
        }
    }
    return null;
}
function RadGrid_MultipleDataKeyByIndex(grid, ind,noAlert,row) {
    var tbl = null;
    if (row == -1)
        return null;
    if (typeof grid == "string")
        tbl = $find(grid);
    else
        tbl = grid;
    if (tbl != null) {
        var master = tbl.get_masterTableView()
        var keys = master.get_clientDataKeyNames();
        var rows = row ? [row] : master.get_selectedItems();
        var id = "";
        if (rows != null && rows.length > 0) {
            if (keys != null && keys.length > 0) {
                for (i = 0; i < rows.length; i++) {
                    id +=  $.defaultVal(rows[i].getDataKeyValue(keys[ind]),"") + ",";
                }
                if (id.length > 0)
                    id = id.substring(0, id.lastIndexOf(','));

                return id;
            }
        }
        else {
            if (typeof noAlert == "undefined" || noAlert == false)
                alert("No record selected.");
        }
    }
    return null;
}



function RadGrid_GetSelectedCellText(grid, index,noAlert,row) {
    var tbl = null;
    if (row == -1)
        return null;
    if (typeof grid == "string")
        tbl = $find(grid);
    else
        tbl = grid;
    if (tbl != null) {
        var master = tbl.get_masterTableView()
        var rows = row ? [row] : master.get_selectedItems();
        var txt = "";
        if (rows != null && rows.length > 0) {
            for (i = 0; i < rows.length; i++) {
                txt += $(rows[i].get_element().cells[index]).text() + ",";
            }
            if (txt.length > 0)
                txt = txt.substring(0, txt.lastIndexOf(','));
            return txt;
        }
        else {
            if (typeof noAlert == "undefined" || noAlert == false)
                alert("No record selected.");
        }
    }
    return null;
}
function RadGrid_GetSelectedCell(grid, index, noAlert, row) {
    var tbl = null;
    if (row == -1)
        return null;
    if (typeof grid == "string")
        tbl = $find(grid);
    else
        tbl = grid;
    if (tbl != null) {
        var master = tbl.get_masterTableView()
        var rows = row ? [row] : master.get_selectedItems();      
        if (rows != null && rows.length > 0) {           
            return $(rows[0].get_element().cells[index]);
        }
        else {
            if (typeof noAlert == "undefined" || noAlert == false)
                alert("No record selected.");
        }
    }
    return null;
}

function GetRadDatePickerTextData(id) {
    var ctl = $find(id)
    if (ctl != null)
        return ctl.get_textBox().value;
    else
        return "";
}

function HasDataRadDatePicker(id) {
    var ctl = $find(id)
    if (ctl != null) {
        var val = ctl.get_textBox().value;
        if (val.length > 0) {
            return true;
        }
        else
            return false;
    }
    else
        return false;
}

function HasDataRadComboBox(id) {
    var ctl = $find(id)
    if (ctl != null) {
        var val = ctl._itemData.length;
        if (val > 0) {
            return true;
        }
        else
            return false;
    }
    else
        return false;
}

function GetTextData(id) {
    var ctl = $find(id)
    if (ctl != null)
        return ctl.get_value();
    else
        return "";
}

function GetComboTextData(id) {
    var ctl = $find(id)
    if (ctl != null)
        return ctl.get_text();
}
function GetComboAttribute(id, key) {
    var ctl = $find(id)
    if (ctl != null)
        return ctl.get_selectedItem().get_attributes().getAttribute(key);
}

function GetBoolData(id) {
    var ctl = $get(id)
    if (ctl != null)
        return ctl.checked;
    else
        return false;
}

function SetTextData(id, data) {
    var ctl = $find(id)
    if (ctl != null && data != null)
        ctl.set_value(data);
}




function SetTextData_ASPX(id, data) {
    var ctl = $("#" + id);
    ctl.val(data);
}


function SetComboData(id, data) {
    var ctl = $find(id)
    if (ctl != null && data != null) {
        var item = ctl.findItemByValue(data);
        if (item)
            item.select();
    }

}

function SetBoolData(id, data) {
    var ctl = $get(id)
    if (ctl != null && data != null)
        ctl.checked = data;
}



function RadGrid_GetSelectedCells(grid, index) {
    var tbl = $find(grid);
    var selectedRows = tbl.get_masterTableView().get_selectedItems();

    var vals = new Array();

    if (selectedRows == null)
        return false;
    for (i = 0; i < selectedRows.length; i++) {
        var rowElement = selectedRows[i].get_element();
        vals[i] = $(rowElement).node(index)[0];

    }

    return vals;

}
/*function RadGrid_GetMultipleDataKey(grid)
{
var tbl = $find(grid);
if(tbl != null)
{
var master=tbl.get_masterTableView()
var keys=master.get_clientDataKeyNames();
var rows=master.get_selectedItems();
var id = "";
if(rows != null && rows.length>0)
{
if(keys != null && keys.length>0)
{
for(i = 0; i < rows.length; i++)
{
id += rows[i].getDataKeyValue(keys[0])+",";
}
if(id.length > 0)
id = id.substring(0, id.lastIndexOf(','));
                
return id;
}
}
else
alert("No record selected.")
}   
return null;
}*/

function RadGrid_Refresh(grid) {
    var tbl = $find(grid);
    if (tbl != null) {
        var master = tbl.get_masterTableView()
        master.cancelAll();
    }
}

function RadDatePicker_Disable(id) {
    var datePicker = $find(id);
    datePicker.get_dateInput().disable();
    $(datePicker.get_popupButton()).setVisible(false);
}

function RadDatePicker_Enable(id) {
    var datePicker = $find(id);
    datePicker.get_dateInput().enable();
    $(datePicker.get_popupButton()).setVisible(true);
}


function Render_RadDatePicker(id, val) {
    var datePicker = $find(id);
    if (datePicker == null)
        return;
    datePicker.set_enabled(val);
    //    if (val) {
    //        datePicker.get_dateInput().enable();
    //        $(datePicker.get_popupButton()).setVisible(true);        
    //    }
    //    else {
    //        datePicker.get_dateInput().disable();
    //        $(datePicker.get_popupButton()).setVisible(false);        
    //    }
}

function Render_RadTextBox(id, val) {
    var radTextBox = $find(id);
    if (radTextBox == null)
        return;
    if (val == true)
        radTextBox.enable();
    else if (val == false)
        radTextBox.disable();
}

function Render_RadComboBox(id, val) {
    var radComboBox = $find(id);
    if (radComboBox == null)
        return;
    if (val == true)
        radComboBox.enable();
    else if (val == false)
        radComboBox.disable();
}

function Render_RadEditor(id, val) {
    var editor = $find(id);
    editor.enableEditing(val);
    editor.set_editable(val);
    if (val == false) editor.get_document().body.style.backgroundColor = "#E5E5E5";
    else editor.get_document().body.style.backgroundColor = "";
}
function ShowControl_Panel(id, val) {
    $("#" + id).setVisible(val);
}

function DisplayControl_Panel(id, val) {
    var panel = $get(id);
    if (val == true) {
        panel.style.display = 'block';
    }
    else if (val == false) {
        panel.style.display = 'none';
    }
}


function ShowControl_RadToolBar(id, val) {
    $("#" + id).setVisible(val);
}

function Render_CheckBox(id, val) {
    $("#" + id).setEnable(val);
}

function Copy_RadTextBox(fromId, toId, val) {
    var fromRadTextBox = $find(fromId);
    var toRadTextBox = $find(toId);
    if (val == true) {
        toRadTextBox.set_value(fromRadTextBox.get_value());
    }
    else if (val == false) {
        toRadTextBox.set_value("");
    }
}

function RadCalendar_Show(sender, eventArgs) {

    var calPopup = $(sender.get_popupContainer());
    var timePopup = null;
    if (typeof sender.get_timePopupContainer != "undefined")
        timePopup = $(sender.get_timePopupContainer());
    var frm = null;
    window.setTimeout(function () {
        if (sender.isPopupVisible()) {
            if ($.isEmpty(calPopup.parent()[0].x)) {
                calPopup.parent()[0].x = calPopup.parent().css("left"); calPopup.parent()[0].y = calPopup.parent().css("top");
            }
            else { calPopup.parent().setPosition(calPopup.parent()[0].x, calPopup.parent()[0].y); }
            frm = calPopup.parent().prev();
            frm.attr("id", calPopup.id + "_ifr");
            calPopup.find("#drgCP").remove();
            var drgCP = $("<div id='drgCP' style='background-color:#688caf;height:3px;width:" + calPopup.outerWidth() + "px;cursor:move;'></div");
            drgCP.insertBefore(calPopup.node(0));
            calPopup.parent().css({ "position": "absolute", "z-index": "29000" });
            drgCP.unbind("mousedown").bind("mousedown", function (event) { event.noBubble(); dragStart(event, calPopup.parent()[0], true, calPopup.parent().offset().left, calPopup.parent().offset().top, function () { calPopup.parent()[0].x = calPopup.parent().css("left"); calPopup.parent()[0].y = calPopup.parent().css("top"); }) });
            frm.setPosition(calPopup.parent().offset().left, calPopup.parent().offset().top).setSize(calPopup.parent().outerHeight(), calPopup.parent().outerWidth()).zIndex(4000);

        }
        else if (sender.isTimePopupVisible()) {
            if ($.isEmpty(timePopup.parent()[0].x)) {
                timePopup.parent()[0].x = timePopup.parent().css("left"); timePopup.parent()[0].y = timePopup.parent().css("top");
            }
            else { timePopup.parent().setPosition(timePopup.parent()[0].x, timePopup.parent()[0].y); }
            frm = timePopup.parent().prev(); frm.attr("id", timePopup.id + "_ifr");
            timePopup.find("#drgTP").remove();
            var drgTP = $("<div id='drgTP' style='background-color:#688caf;height:3px;width:" + timePopup.outerWidth() + "px;cursor:move;'></div");
            drgTP.insertBefore(timePopup.node(0));
            timePopup.parent().css({ "position": "absolute", "z-index": "29000" });
            drgTP.unbind("mousedown").bind("mousedown", function (event) { dragStart(event, timePopup.parent()[0], true, timePopup.parent().offset().left, timePopup.parent().offset().top, function () { timePopup.parent()[0].x = timePopup.parent().css("left"); timePopup.parent()[0].y = timePopup.parent().css("top"); }) });
            frm.setPosition(timePopup.parent().offset().left, timePopup.parent().offset().top).setSize(timePopup.parent().outerHeight(), timePopup.parent().outerWidth()).zIndex(4000);
        }
    }, 100);
}


function RadChk_ClientBlur(sender, args) {
    sender.Hide = true;
    sender.hideDropDown();

}
function RadChk_DropDownClosing(sender, eventArgs) {
    sender.set_text("")
    if (sender.Hide == true) {
        eventArgs.set_cancel(false);
        sender.Hide = false;
    }
    else
        eventArgs.set_cancel(true);

}
function RadChk_DropDownOpening(sender, eventArgs) {
    sender.Hide = false;
}


function GetComboSelectedData(id, attname) {
    var ctl = $find(id)
    if (ctl != null) {

        return ctl.get_selectedItem().get_attributes().getAttribute(attname);
    }
    else
        return "";
}

function GetRadDateDBFormat(id) {
    var d = $find(id).get_selectedDate();
    if (d == null)
        return "";
    else
        return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

function GetRadDateFormat_dmy(id) {
    var d = $find(id).get_selectedDate();
    if (d != null) {
        var curr_date = d.getDate();
        var curr_month = d.getMonth() + 1; //months are zero based 
        var curr_year = d.getFullYear();
        return (curr_date + "-" + curr_month + "-" + curr_year);
    }
    return null;
}

var RadHdnColList = new Object();
var RadGridList = [];
function RadGridLoad(sender, eventArgs) {
    if (sender.MasterTableViewHeader && !$(sender.MasterTableViewHeader.HeaderRow).isVisible())
        return;
    var grid = $(sender.get_element());
    var gridId = grid.attr("id");
    callFilterOnEnter(sender);
    //var st = grid.find(".rgStatus");
    //st.parent().append(st);
    //st.css("border-width", "1px 0 0 1px")
    //SetGridColWidth(gridId);
    SetGridWidth(gridId)
    var t = $("#" + gridId + "_ctl00_Header");
   
    if (RadGridList.toString().indexOf(gridId) < 0)
        RadGridList[RadGridList.length] = gridId;

    RenderSelectAll(grid);

    if (RadHdnColList[gridId + "_Cols"] == null)
        RadHdnColList[gridId + "_Cols"] = "#";
    var lnk = $("<a class='RadCols_lbnPlus' href='javascript:void(0)' id='" + gridId + "_Lnk' onclick='ShowGridCols(this,\"" + gridId + "_Pnl\")' style='position:Absolute;' ></a>");
    var pos = grid.offset()
    lnk.html('(+)').setPosition(pos.left - 16, pos.top);

    var pnl = $("<div id='" + gridId + "_Pnl' class='RadCols_Pnl' style='display:none;position:absolute;left:-1000px'></div>");
    var htm = "<input type='button' onclick='RadGridExport(\"" + gridId + "\",\"Excel\")' class='rgExpXLS' title='Export To Excel'/><input type='button' class='rgExpDOC' onclick='RadGridExport(\"" + gridId + "\",\"Word\")' title='Export To Word'/><input type='button' class='rgExpPDF' onclick='RadGridExport(\"" + gridId + "\",\"Pdf\")' title='Export To PDF'/><input type='button' class='rgExpCSV' onclick='RadGridExport(\"" + gridId + "\",\"Csv\")' title='Export To CSV'/><span style='border-top:solid 1px black;display:block;margin:3px 0 3px 0'/>";
    for (var i = 0; i < sender.get_masterTableView().get_columns().length; i++) {
        var col = sender.get_masterTableView().get_columns()[i];
        if (RadHdnColList[gridId + "_Cols"].indexOf("#") >= 0 && !col.get_visible())
            RadHdnColList[gridId + "_Cols"] += "," + i + ",";
        if (RadHdnColList[gridId + "_Cols"].indexOf("," + i + ",") < 0)
            htm += "<input type='checkbox' onclick='SetColumnVisibility(this," + i + ",\"" + sender.get_id() + "\")' " + (col.get_visible() ? "checked" : "") + " /><span>" + $(col.get_element()).text() + "</span><br/>";
    }
    RadHdnColList[gridId + "_Cols"] = RadHdnColList[gridId + "_Cols"].replace("#", "");
    pnl.html(htm);
    pnl.append($("<span style='border-top:solid 1px black;display:block;margin:3px 0 3px 0'/>"));
    var pnlPage = $("<div id='pnlGridPageSize' style='height:25px;'><div>");
    pnl.append(pnlPage);
    var t = $("#" + sender.get_masterTableView()._data.changePageSizeTextBoxClientID).parent();
    var b = t.next();
    t.next().setClass("ActionButton").css("vertical-align", "middle");
    pnlPage.append(t.prev()); pnlPage.append(t); pnlPage.append(b);
    //$("body").append(lnk);
    //$("body").append(pnl);
    pnl.show();
    pnl[0].wd = pnl.outerWidth();
    pnl[0].ht = pnl.outerHeight();
    pnl[0].scr = false;
    window.setTimeout(
        function () {
            var pos = grid.offset()
            lnk.setPosition(pos.left - 16, pos.top);
            if (pnl.outerHeight() > grid.outerHeight()) {
                pnl[0].wd = pnl.outerWidth() + 20;
                pnl[0].ht = grid.outerHeight() - 10;
                pnl[0].scr = true;
            }
            pnl.setSize("10px", "10px")
        }, 350
    )
    pnl.css("overflow", "hidden").hide();
}
function RadGrid_ColumnResized(s, a) {
    var gridId = (typeof s == "string" ? s : s.get_id());
    SetGridWidth(gridId)
}

function radEnterFilterEvent(m) {
    this.menuItem = m;
    this.get_item = function () { return this.menuItem; };
    this.set_cancel = function () { };
}

function callFilterOnEnter(grid,ctl) {
    var g = $(grid.get_element());    
    if (!ctl)
        ctl = g.find(".rgFilterBox");
    ctl.on("keyup", function (e) {
        if (e.keyCode == "13") {
            var hnd = Function.createDelegate(grid, grid._filterMenuClickingHandler);
            var tbl = grid.get_masterTableView();           
            var op = ($(this).val() == "" ? "NoFilter" : "Contains");
            if (op != "NoFilter") {
                var col = tbl.get_columns()[$(this).closest("TD").index()];
                if (col && col.get_dataType() == "System.DateTime") {
                    op = "EqualTo";
                }
            }
            var me = grid._filterMenu.findItemByText(op);
            me._filterMenu_tableID = tbl.get_id();
            me._filterMenu_column_uniqueName = $(this).attr("alt").split(' ')[1];
            var evt = new radEnterFilterEvent(me);
            grid._onFilterMenuClicking = function () { }
            hnd(grid._filterMenu, evt);
        }
    }
    );
}
function ShowGridTools(gridID) {
    var grid = $("#" + gridID);
    var lbn = $("#" + gridID + "_Lnk");
    var pnl = $("#" + gridID + "_Pnl");
    lbn.show(grid.isVisible());
    var pos = grid.offset();
    lbn.setPosition(pos.left - 16, pos.top);
    pnl.css("overflow", "").css("height", "").css("width", "").show();
    pnl[0].wd = pnl.outerWidth();
    pnl[0].ht = pnl.outerHeight();
    pnl[0].scr = false;
    if (pnl.outerHeight() > grid.outerHeight()) {
        pnl[0].wd = pnl.outerWidth() + 20;
        pnl[0].ht = grid.outerHeight() - 10;
        pnl[0].scr = true;
    }
    pnl.css("overflow", "hidden").setSize("10px", "10px").hide();

}
function SetGridWidth(id) {
    //var thArr = $("#" + id + "_GridHeader").find("th");
    //var colArr = $("#" + id + "_GridHeader").find("col");
    //colArr.each(function (ind) { $(this).css("width", thArr.eq(ind).width() + "px") });
    //$("#" + id + "_GridData").find("col").each(function (ind) { $(this).css("width", colArr.eq(ind).css("width")) });
    if ($("#" + id).hasClass("percentGrid") || $("#" + id + "_ctl00").hasClass("percentGrid")) {
        $("#" + id).css("width", "100%")
        if (!Erp.Responsive) {
            $("#" + id + "_ctl00_Header").children("colgroup").children().each(function (i) { if (i == 0) return true; $(this).css("width", parseInt($(this).css("width")) + "%") });
            $("#" + id + "_ctl00").children("colgroup").children().each(function (i) { if (i == 0) return true; $(this).css("width", parseInt($(this).css("width")) + "%") });
            $("#" + id + "_ctl00_Pager").children("colgroup").children().each(function (i) { if (i == 0) return true; $(this).css("width", parseInt($(this).css("width")) + "%") });
        }
        $("#" + id + "_ctl00_Header").css("width","100%");
        $("#" + id + "_ctl00").css("width", "100%");
        $("#" + id + "_ctl00_Pager").css("width", "100%");
        return;
    }
    var tw = 0;
    $("#" + id + "_ctl00_Header").children("colgroup").children().each(function () {
        if ($(this).attr("style").indexOf("none") < 0) {
            var cw = parseInt($(this).attr("style").split(':')[1]);
            if (cw > 0)
                tw += cw;
            else
                tw += $(this).width();
        }
    });
    if (tw > 10)
        $("#" + id + "_ctl00_Header,#" + id + "_ctl00,#" + id + "_ctl00_Pager,#" + id + "_ctl00_Footer").css("width", tw);
    var dg=$find(id);
    var hasFrozen = (dg ? dg.ClientSettings.Scrolling.FrozenColumnsCount > 0 : false);
    if (hasFrozen){
        var c = Telerik.Web.UI.Grid.getScrollBarHeight();
        $("#" + id + "_Frozen").css({ "height": c, "overflow-x": "auto", "overflow-y": "hidden" }).children().css({ "height": c, "width": tw });
        $("#" + id + "_GridData").css({ "overflow-x": "hidden", "overflow-y": "auto" });
    }

    var w = Math.min($("#" + id + "_GridData").outerWidth(), $("#" + id + "_ctl00").width());
    if (w > 10)
        $("#" + id + "_advFilter,#" + id + "_progBar").width(w);
    if ($.QS("_dash") == "1" || ($(document.documentElement).hasClass("PopupWin") && Erp && Erp.IsViewForm))
        w = $("#" + id + "_ctl00").width();
    if (w > 10)
        $("#" + id + "_ctl00_Pager,#" + id + "_GridFooter").width(w);

    if (($.QS("_dash") == "1" && (Erp.IsViewForm || $("#" + id).hasClass("disablescroll"))) || ($(document.documentElement).hasClass("PopupWin") && Erp && Erp.IsViewForm)) {
        if (w > 10) {
            $("#" + id + "_GridFooter").parent().width(w);
            $("#" + id + "_GridHeader").parent().width(w);
        }
    }

    
}

function ShowGridCols(lnk, id) {
    var pnl = $("#" + id);
    if (pnl.isVisible()) {
        animate(id, null, null, 10, 10, 120, function (p) { $(p).hide(); });
    }
    else {
        pnl.show();
        animate(id, null, null, pnl[0].wd, pnl[0].ht, 120, function (p) {
            if (p.scr)
                $(p).css("overflow-y", "scroll");
        });
    }
    pnl.setPosition((lnk.offsetLeft + 20) + "px", lnk.style.top);    
}
function SetColumnVisibility(chk, ind, id) {
    chk = $(chk).toggleClass("checked");
    var grid = $find(id);

    if (chk.checked()|| chk.hasClass("checked"))
        grid.get_masterTableView().showColumn(ind);
    else
        grid.get_masterTableView().hideColumn(ind);
    //
    if ($("#" + id).hasClass("percentGrid") || $("#" + id + "_ctl00").hasClass("percentGrid"))
        return;
    var w = 0;
    $("#" + id + "_ctl00_Header").children("colgroup").children(":visible").each(function () {
        w += $(this).width();
    });
    $("#" + id + "_ctl00_Header,#" + id + "_ctl00,#" + id + "_ctl00_Pager,#" + id + "_ctl00_Footer").css("width", w);
    SetGridWidth(id);
}




//$(window).bind("beforeunload",function(){RadHelper_BeginRequest();})

function RadHelper_BeginRequest() {
    for (var i = 0; i < RadGridList.length; i++) {
        if ($get(RadGridList[i] + "_Lnk"))
            document.body.removeChild($get(RadGridList[i] + "_Lnk"));
        if ($get(RadGridList[i] + "_Pnl"))
            document.body.removeChild($get(RadGridList[i] + "_Pnl"));
        if ($get(RadGridList[i] + "_ChkAllPnl")) {
            document.body.removeChild($get(RadGridList[i] + "_ChkAllPnl"));
            var grid = $("#" + RadGridList[i])
            var chk = grid.find(".rgCheck").node(0).node(0);//grid.find("#"+RadGridList[i]+"_ctl00_ctl02_ctl01_ClientSelectColumnSelectCheckBox");           
            if (!chk.checked())
                $("#" + RadGridList[i] + "_ChkAllHdn").val("0");
        }
    }
}


function RadGridExport(id, type) {
    id = id.replace(/_/g, "$")
    theForm.__EVENTTARGET.value = id;
    theForm.__EVENTARGUMENT.value = "FireCommand:" + id + "$ctl00;ExportTo" + type + ";";
    theForm.submit();
}

$(document).ready(function () {
    if (typeof Telerik == "undefined" || $.isEmpty(Telerik.Web.UI.RadGrid))
        return;
    Telerik.Web.UI.RadGrid.prototype.AllPagesSelected = function (val) {
        var hdn = $("#" + this.get_id() + "_ChkAllHdn");
        if ($.isEmpty(val)) {
            var chk = $(this.get_element()).find(".rgCheck").node(0).node(0)
            if (!chk.checked())
                hdn.val("0");
            return hdn.val() == "1";
        }
        else if (val == true)
            hdn.val("1");
    }
});

function RenderSelectAll(grid) {
    var gridTotal = grid.find("#spnGridTotalCount");
    if (!gridTotal.exists())
        return;
    var gridId = grid.attr("id");
    var chkAll = grid.find(".rgCheck").node(0).node(0)//grid.find("#"+gridId+"_ctl00_ctl02_ctl01_ClientSelectColumnSelectCheckBox");    
    var pnl = $("<div id='" + gridId + "_ChkAllPnl' class='RadChkAll_Pnl' style='display:none;position:absolute;left:-1000px'></div>");
    pnl.html("<a class='RadChkAll_Pnl selectAll' href='javascript:void(0)' >Click here</a><span></span><a href='javascript:void(0)' onclick='closePnl(this)' title='Hide' style='vertical-align:middle;margin-left:3px' class='tabCommand tabClose'></a>");
    if (!$("#" + gridId + "_ChkAllHdn").exists()) {
        var hdn = $("<input type='hidden' id='" + gridId + "_ChkAllHdn' name='" + gridId + "_ChkAllHdn' value='0'/>")
        grid.append(hdn);
    }
    $("body").append(pnl);
    chkAll.bind("click", function (e) { checkAllRecords(e, gridId, gridTotal.html()); })
    pnl.node(0).bind("click", function (e) { selectAllPages(e, gridId, gridTotal.html()); })
    //    $(document).bind("click",function(e){pnl.hide();})
}
function checkAllRecords(e, gridId, total) {
    e.stopPropagation();
    var chk = $(e.target);
    $find(gridId)._selectAllRows(gridId + "_ctl00", "", e);
    var pnl = $("#" + gridId + "_ChkAllPnl");
    if (chk.checked()) {
        var pos = chk.offset();
        pnl.node(0).html("Click here");
        pnl.node(1).html(" to select all " + total + " records across all pages");
        pnl.zIndex(3000).show().setPosition(pos.left + 19, pos.top);
    }
    else {
        pnl.hide();
        $(".chkSelect").setEnable(true, true);
    }
}
function closePnl(lnk) {
    $(lnk).parent().hide();
}

function selectAllPages(e, gridId, total) {
    e.stopPropagation();
    var lnk = $(e.target);
    var grid = $("#" + gridId);
    var chkAll = grid.find(".rgCheck").node(0).node(0);
    var ev = new Object();
    ev.target = chkAll[0];
    if (lnk.html().indexOf("Deselect") > -1) {
        $(".chkSelect").setEnable(true, true);
        chkAll.checked(false);
        $find(gridId)._selectAllRows(gridId + "_ctl00", "", ev);
        $("#" + gridId + "_ChkAllPnl").hide();
        $("#" + gridId + "_ChkAllHdn").val("0");
    }
    else {
        $(".chkSelect").setEnable(false, true);
        lnk.html("Deselect");
        lnk.next().html(" all " + total + " records");
        chkAll.checked(true);
        $find(gridId)._selectAllRows(gridId + "_ctl00", "", ev);
        $("#" + gridId + "_ChkAllHdn").val("1");
    }
}



function RowDropping(sender, args) {
    window.obj = args;
    var drgRow = $(args.get_draggedItems()[0].get_element());
    var tgtRow = $(args.get_destinationHtmlElement());//alert(tgtRow.outerHTML())
    if (tgtRow.is("td"))
        tgtRow = tgtRow.parent();
    if (drgRow.attr("id") != tgtRow.attr("id")) {
        var p1 = drgRow.prevAll().length;
        var p2 = tgtRow.prevAll().length;
        if (tgtRow.is("tr")) {
            if (p1 < p2)
                tgtRow.after(drgRow);
            else
                tgtRow.before(drgRow);
        }
    }
    args.set_cancel(true);
    CreateReorderSaveButton(sender);
}
function CreateReorderSaveButton(grid) {
    var tbl = $(grid.get_masterTableView().get_element());
    var lnk = $("#" + grid.get_id() + "_reorder");
    if (!lnk.exists()) {
        lnk = $("<a href='javascript:void(0)' id='" + grid.get_id() + "_reorder' onclick='RadGridReOrder(\"" + grid.get_id() + "\",this)' style='position:absolute;height:18px;font-weight:bold;visibility:hidden' class='DockLbn'>Save Ordering</a>");
        tbl.parent().append(lnk);
    }
    lnk.dock('TR', tbl.parent()).hide().setVisible(true).slideDown(250)
}
function RadGridReOrder(id,lnk) {
    var grid = $find(id);
    var values = grid._clientKeyValues
    var master = grid.get_masterTableView()
    var keys = master.get_clientDataKeyNames();
    var rows = $(master.get_element()).find("tr");
    var pids = "";
    for (i = 0; i < rows.length; i++) {
        var c = rows.eq(i).attr("id");
        if ($.isEmpty(c) || c.indexOf("__") < 0)
            continue;
        c = c.split("__")[1];
        pids += values[c][keys[0]] + ",";
    }
    pids = pids.Trim(',');
    if (typeof OnClientReOrder == "function") {
        if (OnClientReOrder(id, pids) === false) {
            $(lnk).hide();
            return;
        }
    }
    var hdn = $("<input type='hidden' id='" + id + "_Reorder' name='" + id + "_Reorder' />");
    $(grid.get_element()).append(hdn);
    hdn.val(pids);
    id = id.replace(/_/g, "$")
    theForm.__EVENTTARGET.value = "ctl00$"+id;
    theForm.__EVENTARGUMENT.value = "FireCommand:ctl00$" + id + "$ctl00;RowDropped;0,ctl00$" + id + ",below,ctl00$" + id + "$ctl00"// "FireCommand:"+id+"$ctl00;ExportTo"+type+";";
    theForm.submit();
}

function showGridProgress(grid, begin) {
    if (typeof grid == "string")
        grid = $find(grid);
    if (!grid)
        return;
    var cmd=$("#"+grid.get_id()+"_cmd");
    var prog = cmd.find(".dgProgress");
    var hdr = $("#" + grid.get_id() + "_GridHeader");   
    prog = prog.find("div").show().removeClass("_hidden");
    if (begin) {
        if (cmd.hasClass("inProgress"))
            return;
        cmd.addClass("inProgress");
        if (Erp && Erp.Responsive) {
            $("#header-progressBar").show();
        }
        else {
            prog.css("width", 0);
            
            prog.stop(true, true);
            prog.node(0).stop(true, true);
            prog.animate({ width: RandomXToY(20, 40) + "%" }, 750, "easeOutQuart").animate({ width: RandomXToY(50, 65) + "%" }, 750, "easeOutQuart").animate({ width: RandomXToY(75, 85) + "%" }, 750, "easeOutQuart")
            prog.node(0).removeData("abortBG")
            prog.node(0).animateBG({ x: "+=1000", timer: 20000, queue: false });
        }
    }
    else {
        cmd.removeClass("inProgress");
        if (Erp && Erp.Responsive) {
            $("#header-progressBar").hide();
            prog.hide()
        }
        else {
            
            prog.node(0).animateBG(null, true);
            prog.stop(true).css("width", "100%").fadeOut();
            window.setTimeout(function () { prog.hide().addClass("_hidden"); }, 1200);
        }
    }
}



function RadGrid_Command(sender, args) {
    args.set_cancel(true);
    var disabled = ($(sender.get_element()).attr("disabled") == "disabled");
    var editMode = ($(sender.get_element()).data("_editModeOn") == true);
    if (disabled) {
        return false;
    }
    if (editMode) {
        return false;
    }    
    var gridId = sender.get_id();    
    var tbl = $("#" + gridId + "_ctl00");
    if (tbl.hasClass("EditGrid") && tbl.children("TBODY").children(".rowChanged").length > 0) {
        Erp.ShowMessage("Please save changes to the grid before continuing.", "alert");
        return false;
    }
    BindGrid(sender, null, args);
}


function BindGrid(grid, info, args, command) {
    if (typeof grid == "string")
        grid = $find(grid);
    var prg = $("#" + grid.get_id() + "_cmd").find(".dgProgress").find("div");
    var cmd = "BindGrid";
    if (typeof command != "undefined")
        cmd = command;

    if (prg.isVisible() && cmd == "Delete") {
        alert("Please wait till grid is loaded.");
        return;
    }
    var elGrid = $(grid.get_element());
    if (elGrid.attr("editModeOn") == "true") {
        return;
    }

    showGridProgress(grid, true);

    var masterTable = grid.get_masterTableView();
    var pkField = elGrid.attr("pkfield");
    var eid = elGrid.attr("entityid");
    var allowPaging = (elGrid.attr("allowpaging") == "1");
    var pageSize = masterTable.get_pageSize();
    var sortExpressions = masterTable.get_sortExpressions();
    sortExpressions.ownerGrid = grid;
    var filterExpressions = masterTable.get_filterExpressions();
    var currentPageIndex = masterTable.get_currentPageIndex();
    var sortExpressionsAsSQL = sortExpressions.toString();
    var filterExpressionsAsSQL = filterExpressions.toString();
    var filterExpressionsAsList = filterExpressions.toList();
    var parameters = { "EntityID": eid, "ParentEntityID": Erp.EntityID, TreeParentKey: elGrid.attr("treeparentkey"), "PKField": pkField, "AllowPaging": allowPaging, "PageIndex": currentPageIndex, "MaxRows": (allowPaging ? pageSize : -1), "Sort": sortExpressionsAsSQL, "Filter": filterExpressionsAsSQL };
    if (!info) {
        info = elGrid.data("Info");
    }

    if (typeof info != "undefined" && info != null) {
        $.extend(parameters, info);
        info.RefreshWfList = false;
        if (command != "Delete" && command != "Export") {
            info["EventData"] = "";//setting blank
            elGrid.data("Info", info);
        }
        if (!$.isEmpty(info["OnBind"]))
            grid.OnBind = info["OnBind"]
    }
    if (command == "Export")
        return parameters;

    if (args && !parameters["EventData"])
        parameters["EventData"] = args.get_commandName();
    prg.setVisible(true);

    //console.log(parameters["EventData"])
    var clientData = null;
    if (cmd == "Filter" || cmd == "Sort" || cmd == "BindGrid") {
        var evt = elGrid.data("ongridbinding");
        if (typeof evt == "function") {
            var s = ReadAdvancedFilter(grid.get_id());
            s = Fn.Filter(s, function (r) { return r.Type == "SEARCH"; });
            clientData = evt(grid.get_id(), { entityId: eid, gridData: window.__gridCache && window.__gridCache[grid.get_id()] ? window.__gridCache[grid.get_id()] : masterTable.get_dataSource(), action: (parameters["EventData"] ? parameters["EventData"] : cmd), gridTextFilter: (s.length > 0 ? s[0]["Value"] : ""), gridFilter: filterExpressionsAsSQL, gridSort: sortExpressionsAsSQL, gridGroup: (elGrid.attr("enablegrouping") == "1" ? $("#" + elGrid.attr("id") + "_hdnGroup").val() : "") });
            if (clientData === false)
                return false;

            if (Erp && Erp.WindowParams) {
                for (p in Erp.WindowParams)
                    parameters["@" + p] = Erp.WindowParams[p];
            }
            if (elGrid.data("__ParamSet")) {
                var data = elGrid.data();
                for (p in data) {
                    if (!p.indexOf("@@") == 0)
                        continue;
                    parameters["@" + p.substring(2)] = data[p];
                }
            }
        }
    }

    elGrid.data("GridBinding", true);
    if (elGrid.attr("custombind") == "1")
        return;
    
    if ($.isArray(clientData) || (elGrid.attr("clientbinding") == "1" && (parameters["EventData"] == "Page" || parameters["EventData"] == "Sort") && window.__gridCache && window.__gridCache[grid.get_id()])) {
        parameters["Command"] = "BindGrid";
        parameters["GridID"] = grid.get_id();
        parameters["Data"] = $.isArray(clientData) ? clientData : [];
   
        if (parameters["EventData"] == "Sort" && sortExpressions.get_count() > 0) {
            parameters["SortExpr"] = sortExpressions.getItem(0).get_fieldName() + " " + (sortExpressions.getItem(0).get_sortOrder() == 2 ? "desc" : "asc");
        }
        BindGridResult(parameters, true);
        elGrid.removeData("GridBinding");
    }
    else
        Erp.WebApi.GridCommand(cmd, grid.get_id(), parameters, BindGridResult, function () { elGrid.removeData("GridBinding"); showGridProgress(grid, false);; });
}
var _radDeleteRows = null;
function RadGrid_Delete(grid, info) {
    if (typeof grid == "string")
        grid = $find(grid);
    var master = grid.get_masterTableView()
    //_radDeleteRows = master.get_selectedItems();
    BindGrid(grid, info, null, "Delete");
}
function RadGrid_RowDataBound(sender, args) {
}
function BindGridResult(result,fromcache) {

    var data = result["Data"];
    var gridId = result["GridID"];
    var grid = $find(gridId);
    if (!grid)
        return;

    var indc = Erp.Grid.GetSelectedRowIndices(gridId);
    if (!indc || !data || data.length ==0 || indc[0] > data.length - 1)
        $("#" + gridId).removeClass("grid-multiselected grid-selected");

    $("#" + gridId + "_ctl00_Footer").css("width", $("#" + gridId + "_ctl00").css("width"));
    $(grid.get_element()).removeData("GridBinding");
    var tableView = grid.get_masterTableView();
    tableView.clearSelectedItems();

    if (result["Command"] == "BindGrid") {
        if (result["___Script"]) {
            eval(result["___Script"]);
            delete result["___Script"];
        }
        if (data) {
            if (!fromcache && window.__gridCache && window.__gridCache[gridId]) {
                window.__gridCache[gridId] = data;
                window.__gridCache[gridId + "_Filtered"] = null;
            }

            if (fromcache || (!result["CustomBind"] && $(grid.get_element()).attr("allowpaging") == "1" && tableView.get_pageSize() < data.length)) {
                $(grid.get_element()).attr("clientbinding", 1);
                var ci = tableView.get_currentPageIndex();
                var ps = tableView.get_pageSize();
                var si = (ci * ps);
                if (fromcache) {
                    if (result["EventData"] != "SearchText")
                        data = window.__gridCache[gridId + "_Filtered"] ? window.__gridCache[gridId + "_Filtered"] : window.__gridCache[gridId];
                    result["TotalRecords"] = data.length;
                    if (result["SortExpr"])
                        Fn.Sort(data, result["SortExpr"]);
                    if (result["EventData"] == "SearchText") {
                        //tableView.set_currentPageIndex(0);
                        window.__gridCache[gridId+"_Filtered"] = data;
                    }
                }
                else {
                    if (!window.__gridCache) window.__gridCache = {};
                    window.__gridCache[gridId] = data;
                }               
                
                data = data.slice((ci * ps), (ci * ps) + ps);
            }

            $(tableView.get_element()).children("tbody").children().removeClass("grid-row groupHeader groupFooter");
            if ($(grid.get_element()).attr("allowpaging") == "0" || result["CustomBind"]) {                
                if ($(grid.get_element()).attr("enablegrouping") == "1") {
                    $(tableView.get_element()).children("tbody").children(".groupHeader,.groupFooter").remove();
                }
                if (tableView.PageSize < data.length) {
                    for (var i = 0; i < data.length - tableView.PageSize; i++)
                        addNewGridRow(gridId, "Bind", true);
                    tableView.PageSize = data.length;
                }
                
            }
            else if ($(grid.get_element()).attr("enablegrouping") == "1") {
                $(tableView.get_element()).children("tbody").children(".groupHeader,.groupFooter").remove();
                var ch = $(tableView.get_element()).children("tbody").children(".rgRow,.rgAltRow");
                var pg = ch.length;
                if (pg < data.length) {
                    for (var i = 0; i < data.length - pg; i++)
                        addNewGridRow(gridId, "Bind", true);
                }
            }
            if ($(grid.get_element()).attr("allowpaging") == "0" || result["CustomBind"]) {
                $(grid.get_element()).attr("allowpaging", 0)
                for (var a = 0; a < tableView._dataItems.length; a++) {
                    if (tableView._dataItems[a]) {
                        tableView._dataItems[a].dispose();
                        tableView._dataItems[a] = null;
                    }
                }
                if (tableView._cachedItems) {
                    for (var a = 0; a < tableView._cachedItems.length; a++) {
                        if (tableView._cachedItems[a]) {
                            tableView._cachedItems[a].dispose();
                            tableView._cachedItems[a] = null;
                        }
                    }
                }
                tableView._dataItems = [];
                tableView._cachedItems = [];
                tableView._dataItemsCreated = false;
            }
            tableView.set_dataSource(data);
            tableView.dataBind();

            if (Erp && Erp.LayoutMode != "L" && $(grid.get_element()).attr("allowpaging") == "0") {
                var hasSort = $(grid.get_element()).attr("enablesortorder") == "1";
                $("#" + gridId + "_ctl00>tbody").children().each(function (i) {
                    var td = $(this).children(":first");
                    if (td.children().length == 0 && !$(this).hasClass("groupHeader") && !$(this).hasClass("groupFooter"))
                        td.html("<a href=\"javascript:void(0)\" class=\"gridSelect\" onclick=\"SelectGridRecord(this)\"></a>");
                    if (hasSort)
                        $(this).children(".sortCell").removeData("__dbValue");
                });
            };
            tableView.__databound = true;
            if ($(grid.get_element()).attr("hidegroupdetails") == "1")
                result["TotalRecords"] = data.length;
            tableView.set_virtualItemCount(result["TotalRecords"]);
            if (result["GridSql"])
                tableView.__gridQuery = result["GridSql"];
            $(tableView.get_element()).find("a.gridSelect").removeClass("checked");
            if (tableView.PageSize < tableView.get_virtualItemCount()) {
                $("#" + gridId + "_ctl00_Pager").find(".rgPagerCell").children().show().filter(".rgAdvPart").hide();
                if ($("#" + gridId + "_spnChkAll").html() == "")
                    $("#" + gridId + "_spnChkAll").attr("rec", result["TotalRecords"]).setVisible(true).html("Click here to select all " + result["TotalRecords"] + " records across all pages");
            }
            else {
                $("#" + gridId + "_ctl00_Pager").find(".rgPager").show();
                $("#" + gridId + "_ctl00_Pager").find(".rgPagerCell").children().hide().filter(".rgInfoPart").show();
                $("#" + gridId).removeClass('allRecords');
                $("#" + gridId + "_spnChkAll").setVisible(false).html("");
            }
            $("#" + gridId).attr("databound", "1");
            //if ($("#" + gridId).attr("custombind") != "1") {
                $("#" + gridId + "_gridFilter").children().setVisible(true);
                //if (Erp.LayoutMode == "G" || Erp.LayoutMode == "RG")
                    //toggleGridFilter(gridId, true);
            //}
            //else
            //    $("#" + gridId + "_dgToggleFilter").hide();
           
            setGridSortOrder(gridId);
            var sel = $find(gridId).get_masterTableView().get_selectedItems();
            if (sel && sel.length > 0) {
                sel = $(sel[0].get_element());
                sel.children(".rgColSelect").find(".gridSelect").addClass("checked");
            }
        }
        if (result["Result"] == "Error") {
            if ($("#" + gridId).attr("dropdownmode") == "1" && result["Message"].indexOf("declare the scalar")) {
            }
            else
                Erp.ShowMessage(result["Message"], result["Result"].toLowerCase());
        }
        if (result["WFList"]) {
            var sel = $("#" + gridId + "_WFFltList").val();
            $("#" + gridId + "_WFFltList").empty().append($(result["WFList"]).html()).val(sel).SelectX("refresh");
        }
        if (Erp && Erp.Responsive)
            resizeGridHeight();
    }
    else if (result["Command"] == "Delete") {
        Erp.ShowMessage(result["Message"], result["Result"].toLowerCase());
        if (typeof Erp != "undefined")
            Erp.RefreshFields(result);
        if (typeof refreshParentFields != "undefined")
            refreshParentFields(result);
        if (typeof Erp != "undefined") {// && tableView.get_pageCount() > 1
            Erp.Grid.Refresh(gridId);
            _radDeleteRows == null;
        }
        else {
            //if (result["Result"] == "Success" & _radDeleteRows != null) {
            //    for (var i = 0; i < _radDeleteRows.length; i++) {
            //        $(_radDeleteRows[i].get_element()).hide();
            //    }
            //    var c = tableView.get_virtualItemCount();
            //    c = c - _radDeleteRows.length; (c = c < 0 ? 0 : c);
            //    var s = $("#" + tableView.get_id() + "DSC");
            //    s.html(parseInt(s.html() / 1) - 1);
            //}
            //_radDeleteRows == null;
        }
        var evt = $("#" + gridId).data("onrowdeleted");
        if (typeof evt == "function")
            evt(gridId, { entityId: $("#" + gridId).attr("entityid"), recordId: result["ID"] });
    }

    showGridProgress(grid, false);
    
    if (result["Command"] != "Delete" && typeof grid.OnBind == "function")
        grid.OnBind(result);
    if (typeof __GridDataBound == "function")
        __GridDataBound(result);
    var evt = $("#" + gridId).data("ongriddatabound");
    if (typeof evt == "function")
        evt(gridId, result);

    evt = $("#" + gridId).data("ongridadvancedfilter");
    if (result["EventData"] == "advancedfilter" && typeof evt == "function")
        evt(gridId, result);

    if (typeof addNewGridRow == "function") {
        addNewGridRow(gridId, "Load");
    }
    if ($("#" + gridId).attr("disablescroll") == "1") {
        $("#" + gridId + "_GridData").css({ "max-height": "none" });
    }
    if (typeof redrawPageLayout == "function") {
        redrawPageLayout();
    }
    SetGridWidth(gridId);
    $("#" + gridId + "_GridData").scrollTop(0);
    if (Erp && (Erp.LayoutMode == "G" || Erp.LayoutMode == "RG")) {
        if (result["EventData"] == "Page") {
            if (typeof $("#" + gridId)[0].scrollIntoView == "function")
                $("#" + gridId + "_GridHeader")[0].scrollIntoView();
            else {
                $(document.documentElement).scrollTop(0)
                $(window).scrollTop(0)
            }
        }
    }
}

function AddNewCombo_Load(sender, args) {
    var list = $(sender.get_dropDownElement());
    var addNew = $("<div class='DdlCmd'><a href='javascript:void(0)' class='add' onclick='_OpenAddNewWindow(\"" + sender.get_id() + "\")' >Add New Item</a></div>")
    addNew.insertBefore(list.node(0));
}

function _OpenAddNewWindow(id) {
    window.CurrentCombo = id
    OpenAddNewWindow(id);
}

function Refresh_AddNewCombo(name, pid, attr) {
    var _cbo = $find(window.CurrentCombo);
    var c = _cbo._uniqueId;
    if (c.indexOf("$") > -1)
        c = c.substring(c.lastIndexOf("$") + 1);

    var dep = _cbo.get_attributes().getAttribute("DependingCombo");
    var ids = (c + "," + ($.isEmpty(dep) ? "" : dep));
    ids = ids.split(',');
    var returnItem = null;
    for (var i = 0; i < ids.length; i++) {
        if ($.isEmpty(ids[i]))
            continue;
        var cbo = (i == 0 ? _cbo : $find(window.CurrentCombo.replace(c, ids[i])));
        if (cbo == null)
            return;
        var item = cbo.findItemByValue(pid);
        var found = true;
        if (item == null) {
            item = new Telerik.Web.UI.RadComboBoxItem();
            found = false;
        }
        item.set_text(name);
        item.set_value(pid);
        if (attr) {
            for (var p in attr) {
                item.get_attributes().setAttribute(p, attr[p]);
            }
        }
        cbo.trackChanges();
        if (!found)
            cbo.get_items().add(item);
        if (i == 0)
            item.select(true);
        cbo.commitChanges();
        if (item.get_selected())
            cbo.set_text(name);
        if (i == 0)
            returnItem = item;
        if (typeof ComboMaster_ItemAdded == "function") {
            cbo.trackChanges();
            ComboMaster_ItemAdded(cbo, item);
            if (i == 0)
                item.select(true);
            cbo.commitChanges();
        }
        var list = $(cbo.get_dropDownElement());
        list.find(".rcbScroll").css("height", "");
    }
    return returnItem;
}
function Remove_AddNewCombo(pid) {

    var _cbo = $find(window.CurrentCombo);
    var c = _cbo._uniqueId;
    if (c.indexOf("$") > -1)
        c = c.substring(c.lastIndexOf("$") + 1);

    var dep = _cbo.get_attributes().getAttribute("DependingCombo");
    var ids = (c + "," + ($.isEmpty(dep) ? "" : dep));
    ids = ids.split(',');
    for (var i = 0; i < ids.length; i++) {
        if ($.isEmpty(ids[i]))
            continue;
        var cbo = (i == 0 ? _cbo : $find(window.CurrentCombo.replace(c, ids[i])));
        if (cbo == null)
            return;
        var item = cbo.findItemByValue(pid);
        if (item == null)
            return;
        cbo.trackChanges();
        cbo.get_items().remove(item);
        cbo.commitChanges();
    }
}

//skinid=txtNumber
function _valNum(textCntrl) {
    if (isNaN($(textCntrl).val()))
        $(textCntrl).val(0);
}


function TreeListCreated_NP(sender) {
    $(sender.get_element()).on("click", ".rtlCollapse,.rtlExpand", function (e) {toggleTreeList(e, $(sender.get_element()).attr("id")); return false;})
}


function toggleTreeList(e, id) {
    var tree = $find(id);
    if (!tree)
        return;
    var btn = $(e.target);
    btn.data("UserClick", true);
    var collapse = btn.hasClass("rtlCollapse");
    var dataItem = tree.get_dataItems()[btn.closest("TR").index()];
    if (collapse)
        btn.setClass("rtlExpand");
    else
        btn.setClass("rtlCollapse");
    _toggleTreeList(collapse, dataItem);
}
function _toggleTreeList(collapse, item) {
    var child = item.get_childItems();
    for (var i = 0; i < child.length; i++) {
        child[i].set_visible(!collapse);
        var btn = $(child[i].get_element()).find(".rtlExpand");
        if (btn.data("UserClick"))
            continue;
        if (collapse)
            btn.setClass("rtlExpand");
        else
            btn.setClass("rtlCollapse");
        _toggleTreeList(collapse, child[i]);

    }

}


function Editor_ClientLoad(editor, args) {
    $(editor.get_element()).find(".reToolbarWrapper").find('ul').eq(1).append("<ul class='reToolbar Default'><li class='reGrip grip_first'>&nbsp;</li><li><a title='Add HTML Template' onclick='openTemplates(\"" + editor.get_id() + "\")'><span class='edtIconBtn'>&#xf121;</span></a></li><li class='reGrip grip_last'>&nbsp;</li></ul>");
    $(editor.get_element()).find(".reToolbarWrapper").find('ul').eq(1).append("<ul class='reToolbar Default'><li class='reGrip grip_first'>&nbsp;</li><li><a title='Add Image From Resources' onclick='openImages(\"" + editor.get_id() + "\")'><span class='edtIconBtn'>&#xf03e;</span></a></li><li class='reGrip grip_last'>&nbsp;</li></ul>");

    window.setTimeout(function () {
        editor.setSize();
    }, 1000);
}

function openTemplates(id) {
    var p = $(document.body).ShowPopup({ url: AppRootPath + "/Meta/HtmlResources_View.aspx?PageType=htmltemplate", maxTop: 100, height: 450, width: 700, reuse: true, title: "Browse Html Templates" });
    p.find("iframe")[0].refEditor = id;
}

function openImages(id) {
    var p=$(document.body).ShowPopup({ url: AppRootPath + "/Meta/HtmlResources_View.aspx?PageType=Image", maxTop: 100, height: 450, width: 700, reuse: true, title: "Browse Images" });
    p.find("iframe")[0].refEditor = id;
}
function PasteHtmlInEditor(url, refEdt) {
    editor = $find(refEdt);
    editorPaste = true;
    editor.pasteHtml(url);
    editorPaste = false;
}