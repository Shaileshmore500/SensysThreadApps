var nodeDragging = false;
var LayoutID = "";
var IsDependent = false;
var dbFields = [], viewList = [];
var splitterFixlayout = '0', splitterResize = '0';
var splitterResizeH, splitterResizeF, splitterResizeL, splitterResizeR;
function setLayout(fromLoad) {
    $("#headerPanel,#middlePanel,#footerPanel").data("splitterSizing", $("#chk5").checked() ? "fix" : "grow");
    $("#middlePanel").data("splitterSizing", $("#chk5").checked() ? "fill" : "grow");
    $("#headerPanel,#middlePanel,#footerPanel,#leftPanel,#centerPanel,#rightPanel").data("splitterResize", "1");// $("#chk6").checked() ? "1" : "0");
    $("#leftPanel,#centerPanel,#rightPanel").css("height", "");
    //$("#pagePanel").removeClass("noResize").addClass($("#chk6").checked() ? "" : "noResize");
    $("#middlePanel").css("min-height", $("#chk5").checked() ? "" : "460px");
    var ht = window.innerHeight - $("#fieldList").getPosition().top;
    $("#pagePanel")
          .css({ "width": window.innerWidth - 22 - $("#fieldList").getPosition().right, "min-height": ($("#chk5").checked() ? "" : ht), "height": ($("#chk5").checked() ? ht : "") });
    if (fromLoad)
        $("#pagePanel").SplitContainer({ SplitterWidth: 3, OnResize: function (el) { redrawPageLayout("resize", el.parent()); } });
    else
        $("#pagePanel").SplitContainer("redraw");
}
function redrawPageLayout(mode, div) {
    var p = $("#pagePanel"), h = $("#headerPanel"), f = $("#footerPanel"), m = $("#middlePanel"), l = $("#leftPanel"), c = $("#centerPanel"), r = $("#rightPanel");
    if (mode == "load") {      
        //m.width(p.innerWidth());
        //if (m.outerWidth() < $(window).width() - $("#fieldList").outerWidth()) {
        //    m.width($(window).width() - $("#fieldList").outerWidth()-6)
        //}
        //c.width(m.innerWidth() - (l.isVisible() ? l.outerWidth() : 0) - (r.isVisible() ? r.outerWidth() : 0) - (c.outerWidth() - c.innerWidth()));
        //p.innerWidth(m.width());
        //h.innerWidth(m.width() - (h.outerWidth() - h.innerWidth()))
        //f.innerWidth(m.width() - (h.outerWidth() - h.innerWidth()))
        //p.innerHeight((h.isVisible() ? h.outerHeight() : 0) + c.outerHeight() + (f.isVisible() ? f.outerHeight() : 0));
        setLayout(true);
        p.children().find(".wrapper").children(":first-child").each(function () { adjustFieldSize($(this)) });



        var tbls = p.children().find(".Table>table")
        tbls.each(function () {
            var w = 0;
            $(this).children("colgroup").children().each(function () { w += parseInt($(this).width()); })
            $(this).css("width", w)
        });

        //$("#divLayout,#divScript,#divCss,#divServerScript").innerHeight(p.innerHeight()); $("#divLayout,#divScript,#divCss,#divServerScript").innerWidth(p.innerWidth());
        var ht = window.innerHeight - $("#fieldList").getPosition().top;        
        $("#fieldList").children(".ui-accordion-content").css({ "max-height": ht - 130, "overflow-y": "auto" });
        
    }
    else if (mode == "contentChanged") {
        $("#pagePanel")
            .SplitContainer("refresh");
        c.find(".wrapper").children(":first-child").each(function () { adjustFieldSize($(this)) });
        h.find(".wrapper").children(":first-child").each(function () { adjustFieldSize($(this)) });
        f.find(".wrapper").children(":first-child").each(function () { adjustFieldSize($(this)) });
        //var heights = [(l.isVisible() ? l.innerHeight() : 0), (c.isVisible() ? c.innerHeight() : 0), (r.isVisible() ? r.innerHeight() : 0)]
        //var max = Math.max.apply(null, heights);
        //m.children().css("min-height", max);
        //p.innerHeight((h.isVisible() ? h.outerHeight() : 0) + c.outerHeight() + (f.isVisible() ? f.outerHeight() : 0));
    }
    else if (mode == "resize") {
        //m.width((l.isVisible() ? l.outerWidth() : 0) + c.outerWidth() + (r.isVisible() ? r.outerWidth() : 0));
        //p.innerWidth(m.width());
        //h.innerWidth(m.width() - (h.outerWidth() - h.innerWidth()));
        //f.innerWidth(m.width() - (h.outerWidth() - h.innerWidth()));
        var ht = window.innerHeight - $("#fieldList").getPosition().top;
        $("#pagePanel")
          .css({ "width": window.innerWidth - 22 - $("#fieldList").getPosition().right, "min-height": ($("#chk5").checked() ? "" : ht), "height": ($("#chk5").checked() ? ht : "") });

        $("#pagePanel")
            .SplitContainer("refresh");
        if (div)
            div.find(".wrapper").children(":first-child").each(function () { adjustFieldSize($(this)) });
        $("#fieldList").children(".ui-accordion-content").css({ "max-height": ht - 130, "overflow-y": "auto" });
    }
    else if (mode == "toggle") {
        //c.width(m.innerWidth() - (l.isVisible() ? l.outerWidth() : 0) - (r.isVisible() ? r.outerWidth() : 0) - (c.outerWidth() - c.innerWidth()));
        //m.width((l.isVisible() ? l.outerWidth() : 0) + c.outerWidth() + (r.isVisible() ? r.outerWidth() : 0));
        //p.innerWidth(m.width());
        //p.innerHeight((h.isVisible() ? h.outerHeight() : 0) + c.outerHeight() + (f.isVisible() ? f.outerHeight() : 0));
        $("#pagePanel")
           .SplitContainer("redraw");
        c.find(".wrapper").children(":first-child").each(function () { adjustFieldSize($(this)) });
    }
}


function makeDraggable(item, fromPage) {
    if (IsDependent)
        return;
    item.draggable({
        helper: "clone",
        opacity: 0.75 ,
        appendTo:(fromPage?"parent":'#fieldListHelper'),
        cancel: ".gridTable",
        cursorAt: { top: -10, left: -10 },
        zIndex: 10000,
        start: function (event, ui) {          
            if(!fromPage)
                activateField($(this));
            nodeDragging=true;  
            ui.helper.zIndex(10000)          
            $("#pagePanel").find(".ui-resizable-handle").hide();
            $(document.body).append($("#divOptionMenu").hide());
            if ($(event.target).data("original"))
                $(event.target).setVisible(false);

        },
        drag: function (event, ui) {
            if ($("#pagePanel").hasClass("FieldSelector"))
                return false;
            highlightItem(event, ui);
            $(this).draggable("option", "revert", !validDrop);
        },
        stop: dragStop

    });
    
}
function toggleSettingPanel(a, id, ctr) {
    a = $(a);
    $("#fieldList,#specialControls,#layoutSettings,#generalSettings").hide();
    a.parent().children("a").removeClass("selected");
    a.addClass("selected");      
    a.parent().children(".save,.preview").setVisible((id != "generalSettings"));
    if (id != "") {
        a.parent().next().hide().next().hide().next().hide();
        $("#" + id).show();
    }
    if (IsDependent)
        return;
    if (ctr) {
        $("html, body, form").css("display", "block");
        $(".page,.page1").hide().filter("#div" + ctr).show();
        autoFormatEditor("txt" + ctr);
    }
    else {
        $("html, body, form").css("display", "");
        $("#fieldList").show();
        $(".page,.page1").hide().filter("#pagePanel").show();
        redrawPageLayout("toggle");
    }
    if (ctr == "Script" || ctr == "ServerScript") {
        var ifr = $("#" + (ctr == "Script" ? "ifrExprEditor" : "ifrServerExprEditor"));
        if (ifr[0] && ifr[0].contentWindow && typeof ifr[0].contentWindow.repaintSplitter == "function")
            ifr[0].contentWindow.repaintSplitter();
    }
}
function autoFormatEditor(ed) {
    if (IsDependent)
        return;
    ed = Editors[ed];
    if (!ed)
        return;
    ed.refresh();
    CodeMirror.commands["selectAll"](ed);
    var range = { from: ed.getCursor(true), to: ed.getCursor(false) }
    ed.autoFormatRange(range.from, range.to);
    ed.setCursor(0);
}
function toggleResizable(enable) {
    //if (IsDependent)
        return;
    if(enable){
        $("#leftPanel").resizable({
            
            helper: "ui-resizable-helper",
            handles: "e",
            stop: function (event, ui) { ui.element.css("height", ""); redrawPageLayout("resize", ui.element); }
        });
        $("#centerPanel").resizable({
           
            helper: "ui-resizable-helper",
            handles: "e",
            stop: function (event, ui) { ui.element.css("height", ""); redrawPageLayout("resize", ui.element); }
        });
        $("#rightPanel").resizable({
           
            handles: "e",
            helper: "ui-resizable-helper",

            stop: function (event, ui) { ui.element.css("height", ""); redrawPageLayout("resize", ui.element); }
        });
    }
    else{
        $("#leftPanel,#centerPanel,#rightPanel").resizable("destroy")
    }
            
}

function dragStop(event, ui) {    
    nodeDragging=false;
    $("#pagePanel").find(".ui-resizable-handle").show();
    if (!validDrop || !currentHighlightedNode) {
        resetHighlight();
        $(event.target).css("visibility","");
        return
    }

    field = createNewField($(event.target));

    var wrapr = field.parent();

    var isField = (field.data("@Behaviour")=="Field");
    if (isField) {
        var wrap = $("<div class='wrapper'></div>");
        if (currentHighlightedNode.hasClass("allEdge"))
            currentHighlightedNode.append(wrap.prepend(field));
        else if (currentHighlightedNode.data("@Object")) {
            var edge = currentHighlightedNode.attr("class");
            if (edge.indexOf("left") > -1) {
                if (rightAligned(currentHighlightedNode) && rightAligned(field))
                    currentHighlightedNode.after(field);
                else
                    currentHighlightedNode.before(field);
            }
            else if (edge.indexOf("right") > -1) {
                if (rightAligned(currentHighlightedNode) && rightAligned(field))
                    currentHighlightedNode.before(field);
                else
                    currentHighlightedNode.after(field);
            }
            else {
                var refNode = currentHighlightedNode;
                if (refNode.data("@Behaviour")=="Field")
                    refNode = currentHighlightedNode.parent();

                if (edge.indexOf("top") > -1)
                    refNode.before(wrap.prepend(field));
                else if (edge.indexOf("bottom") > -1)
                    refNode.after(wrap.prepend(field));
            }
        }
    }
    else {
        if (currentHighlightedNode.hasClass("allEdge"))
            currentHighlightedNode.append(field);
        else {
            var refNode = currentHighlightedNode;
            var edge = currentHighlightedNode.attr("class");
            if (currentHighlightedNode.data("@Behaviour")=="Field")
                refNode = currentHighlightedNode.parent();
            if (edge.indexOf("left") > -1 || edge.indexOf("top") > -1)
                refNode.before(field);
            else if (edge.indexOf("right") > -1 || edge.indexOf("bottom") > -1)
                refNode.after(field);
        }
    }

    if (field.data("@Type") == "GroupingPanel") {
        adjustFieldSize(field);
        adjustFieldSizeMulti(field);
    }
    else if (field.data("@IsContainer"))
        adjustFieldSizeMulti(field);
    else
        adjustFieldSize(field);

    if (field.data("@Type") == "ContentPane")
        field.SplitContainer({ OnResize: function (el) { redrawPageLayout("resize", el.parent()); } });
    else if (field.data("@Type") == "VerticalPane" || field.data("@Type") == "HorizontalPane")
        field.parent().SplitContainer("redraw");

    resetHighlight();
    ui.helper.remove();
    checkWrapperContents(wrapr);
    redrawPageLayout("contentChanged");
}
function rightAligned(item) {
    //var p = item.parent();
    //while (!p.hasClass("page")) {
    //    p = p.parent();
    //    if (!p)
    //        return false;
    //    else if (p.hasClass("rightAlign"))
    //        return true;
    //}
    //return false;
    return item.hasClass("dockRight");
}
function createNewField(field) {
    if (field.data("original")) {
        field.css("visibility","");
        return field;
    }
    var newfield = _createNewField(field);
    newfield.data("original", true);
    _cloneAttr(newfield, field.data())
    makeDraggable(newfield, true);
    //newfield.hover(showOptions, hideOptions);
    //newfield.on("dblclick", function (e) {
    //    e.stopPropagation();
    //    var tgt = $(e.target);
    //    if (tgt.prop("tagName") == "A")
    //        return;
    //    if (!tgt.hasClass("layoutObject")) {
    //        tgt = tgt.closest(".layoutObject");
    //        showOptions(tgt);
    //    }
    //    toggleFieldOptions($("#divOptionMenu").node(0));
    //})
    return newfield;
}
function _createNewField(field) {
    $(document.body).append($("#divOptionMenu").hide());
    var info = _getFieldInfo(field);
    var div;
    if (!info)
        return;
    if (field.data("@IsSpecial")) {
        if (info.Type == "CollapsiblePanel") {
            div = $("<div class='" + field.attr("class") + "'></div>");
            div.append("<div class='cp-header' ><span class='cp-icon'></span><span class='ui-title cp-title'>Collapsible Panel</span></div><div class='ui-content cp-content'></div>");
        }
        else if (info.Type == "TabPanel") {
            div = $("<div class='" + field.attr("class") + "'></div>");
            div.append("<div class='tp-header' ><span class='tp-tab'><span class='ui-title tp-title'>Tab Panel</span></span></div><div class='ui-content tp-content'></div>");
        }
        else if (info.Type == "GroupingPanel") {
            div = $("<div class='" + field.attr("class") + "'></div>");
            div.append("<fieldset class='ui-content gp-content'><legend class='ui-title gp-title'>Grouping Panel</legend></fieldset>");
        }
        else if (info.Type == "ContentPane" || info.Type == "HorizontalPane" || info.Type == "VerticalPane") {
            div = $("<div data-splitter-resizable='1' class='" + field.attr("class") + "'></div>");           
        }
        else if (info.Type == "Window" || info.Type == "Document" || info.Type == "PDF" || info.Type == "Spread") {
            div = $("<div class='" + field.attr("class") + "'></div>");
            div.append("<span class='ui-title'>" + info.Type + "</span>");
        }
        else if (info.Type == "UDF") {
            div = $("<div class='" + field.attr("class") + "'></div>");
            div.append("<span class='ui-title'>" + info.Type + "</span>");
        }
        else if (info.Type == "Label") {
            div = $("<div class='" + field.attr("class") + "'><span class='span'><span class='field-icon'></span><span class='field-title' >" + info.DisplayName + "</span></span></div>");
        }
        else if (info.Type == "Line") {
            div = $("<div class='" + field.attr("class") + "'></div>");
        }
        else if (info.Type == "Table") {
            div = $("<div class='" + field.attr("class") + "'></div>");
            div.append("<span class='ui-title table-title'>Table</span><table cellpadding='0' cellspacing='0' ><colgroup><col style='width:35px'/></colgroup><tbody><tr class='colHeader'><td class='first'><div><a class='addRow' title='Add Row' onclick='tableAction(this)' href='javascript:void(0)'></a><a class='addCol' title='Add Column' onclick='tableAction(this)' href='javascript:void(0)'></a></div></td></tr></tbody></table>");
            _initTable(div.children("table"));
            addTableCols(div.children("table"));
            addTableCols(div.children("table"));
            addTableRows(div.children("table"));
            addTableRows(div.children("table"));
        }
        else if (info.Type == "Menu") {
            div = $("<div class='" + field.attr("class") + " VerticalMenu'><span class='ctx' style='display:none'><a class='addChild' onclick='menuAction(this,event)' href='javascript:void(0)'></a><a onclick='menuAction(this,event)' class='remItem' href='javascript:void(0)'></a></span><a href='javascript:void(0)' onclick='menuAction(this)' class='addItem'></a><div class='menu-root'></div></div>");
            _initMenu(div);

        }
        else {
            div = field.clone().attr("id", "").css("position", "static");
            div.children("span").html(field.attr("title"));
        }
    }
    else {
        var cls=getCssClass(info);
        if (info.Type == "Grid") {
            div = $("<div class='" + field.attr("class") + cls+"'><span class='ui-title'>" + info.DisplayName + "</span></div>");
            var tbl = $("<div class='gridTable'></div>");
            var cols = $(viewList).filter(function () {
                return this.ViewID == info.ViewID;
            });
            cols = (cols && cols.length > 0 ? cols[0].Cols : null);
            createGridCols(tbl, cols);            
            
            div.append(tbl);
            div.data("@FieldProp_ViewID", (cols && cols.length > 0 ? info.ViewID : ""));
        }
        else if (info.Type == "RelatedField") {
            div = $("<div class='special Label RelatedField inlineField'><span class='span'><span class='field-icon'></span><span class='field-title'>" + info.DisplayName + "</span></span></div>");
            div.data("@EntityPath", field.data("@EntityPath"));
        }
        else if (info.Type == "Button") {
            div = $("<div class='special Button inlineField'><span class='field-icon'>" + info.Icon + "</span><span class='field-title'>" + info.DisplayName + "</span></div>");
            div.data("@FieldProp_Icon", $.defaultVal(info.Icon, ""));
        }
        else
            div = $("<div class='field inlineField" + cls + "'><span class='field-icon'></span><span  class='field-title'>" + info.DisplayName + "</span></div>");
    }
    generateUniquieId(div, info.Type);
    div.addClass("layoutObject");
    div.css({ position: "relative", top: "", left: "" });
    div.data("@Type", info.Type);
    div.data("@FieldName", info.ID);
    div.data("@FieldProp_ToolTip", $.defaultVal(info.ToolTip, ""));
    div.data("@FieldProp_Mandatory", $.defaultVal(info.Mandatory,0));
    div.data("@FieldProp_HiddenAdd", $.defaultVal(info.HiddenAdd,0));
    div.data("@FieldProp_DisabledAdd", $.defaultVal(info.DisabledAdd,0));
    div.data("@FieldProp_HiddenEdit", $.defaultVal(info.HiddenEdit,0));
    div.data("@FieldProp_DisabledEdit", $.defaultVal(info.DisabledEdit, 0));
    div.data("@FieldProp_TextAlign", $.defaultVal(info.TextAlign, "Left"));
    div.data("@FieldProp_Dock", $.defaultVal(info.TextAlign, "Left"));
    div.data("@FieldProp_LabelPosition", $.defaultVal(info.LabelPosition, "Default"));
    div.data("@FieldProp_TabPosition", $.defaultVal(info.TabPosition, "Horizontal"));

    return div;
}
function _initMenu(div) {
    div.on("hover", ".menu-item", function () { $(this).append(div.find(".ctx").show()); });
    div.on("dblclick", ".menu-item", function (e) {
        var tgt = $(e.target);
        if (tgt.hasClass("addItem") || tgt.hasClass("addChild") || tgt.hasClass("remItem"))
            return;
        e.stopPropagation();
        $("#divMenuSettings").ShowModal();
        var m = $(this);
        window.currentMenu = $(this);
        $("#txtMenuTitle").val(m.children(".menu-title").html());
        $("#txtMenuValue").val($.defaultVal( m.data("Value"),""));
        $("#txtMenuId").val($.defaultVal(m.attr("id"),""));
        $("#txtMenuCss").val($.defaultVal(m.data("Css"),""));
        $("#txtMenuIcon").val($.defaultVal(m.children(".menu-icon").html(), ""));
        $("#chkMenuGroup").checked(m.hasClass("menu-group"));
    });
}

function menuAction(a,e) {
    a = $(a);
    if (a.hasClass("addItem") || a.hasClass("addChild")) {
        var p = a.hasClass("addItem") ? a.parent() : a.closest(".menu-item");
        var c = a.hasClass("addItem") ? p.children(".menu-root") : p.children(".menu-ctr");
        if (c.length == 0) {
            c = $("<div class='menu-ctr'></div>");
            p.append(c);
            if (a.closest(".menu-item").parent().hasClass("menu-root") && a.closest(".Menu").hasClass("HorizontalMenu"))
                c.show().position({ my: "left top", at: "left bottom+1", of: a.closest(".menu-item") });
            else
                c.show().position({ my: "left top", at: "right top+7", of: a.closest(".menu-item") });
        }
        else {
            if (a.hasClass("addChild")) {
                if (a.closest(".menu-item").parent().hasClass("menu-root") && a.closest(".Menu").hasClass("HorizontalMenu"))
                    c.show().position({ my: "left top", at: "left bottom+1", of: a.closest(".menu-item") });
                else
                    c.show().position({ my: "left top", at: "right top", of: a.closest(".menu-item") });
            }
        }
        var item = $("<span onclick='menuAction(this,event)' class='menu-item'><span class='menu-icon'></span><span class='menu-title'>Menu Item</span></span>");
        if (a.hasClass("addChild"))
            a.closest(".menu-item").addClass("parent");
        c.append(item);
        redrawPageLayout("contentChanged");
    }
    else if (a.hasClass("remItem")) {
        var m = a.closest(".menu-item");
        var p = m.parent();
        a.closest(".Menu").append(a.parent().hide());
        m.remove();
        p.show();        
        redrawPageLayout("contentChanged");
    }
    else if (a.hasClass("menu-item")) {
        
        var c = a.children(".menu-ctr");
        if (typeof __curMenu != "undefined" && __curMenu && __curMenu[0] !=a.parent()[0])
            __curMenu.hide();
        __curMenu = c;
        if (c.length > 0 && c.children().length > 0) {
            if (a.parent().hasClass("menu-root") && a.closest(".Menu").hasClass("HorizontalMenu"))
                c.show().position({ my: "left top", at: "left bottom+1", of: a });
            else
                c.show().position({ my: "left top", at: "right top+15", of: a });
        }
    }
    if(e)
        $.event.fix(e).stopPropagation();
}

function saveMenuSetting() {
    var m = window.currentMenu;
    m.children(".menu-title").html($("#txtMenuTitle").val());
    m.data("Value", $("#txtMenuValue").val());
    m.attr("id",$("#txtMenuId").val());
    m.data("Css",$("#txtMenuCss").val());
    m.children(".menu-icon").html($("#txtMenuIcon").val());
    m.removeClass("menu-group").addClass($("#chkMenuGroup").checked() ? "menu-group" : "");
    $('#divMenuSettings').HideModal();
}
function _initTable(tbl) {    
   
    tbl.selectable({
        distance:1,
        cancel: "a,.rowHeader,.colHeader",
        filter: ".table-cell",
        stop: function (event, ui) {
            var tbl = $(event.target);
            tbl.parent().children(".mrgCell").remove();
            var sel = tbl.find(".ui-selected");
            if (sel.length > 1) {
                var lnk = $("<a onclick='mergeCells(this)' href='javascript:void(0)' class='mrgCell'>Merge Cells</a>");
                tbl.after(lnk);
                lnk.position({ of: sel.eq(0), my: "left,top", at: "left,top" });
            }
            else if (sel.length == 1 && (sel.attr("colspan") / 1 > 1 || sel.attr("rowspan") / 1 > 1)) {
                var lnk = $("<a onclick='unmergeCells(this)' href='javascript:void(0)' class='mrgCell'>Un-Merge Cells</a>");
                tbl.after(lnk);
                lnk.position({ of: sel.eq(0), my: "left,top", at: "left,top" });
            }
        }
    });
    //var td = tbl.children("tbody").find(".rowHeader");    
    //td.resizable({
    //    handles: "s",
    //    start: function (e, ui) {
    //        ui.element.parent().children().css("height", "");
    //    }
    //});
    var td = tbl.children("tbody").node(0).children(":not(.first)");
    setTableColResize(td);
}
function setTableColResize(td) {
    td.node(0).resizable({
        handles: "e",
        helper: "col-resizable-helper",
        start: function (e, ui) {
            $(document.body).children(".col-resizable-helper").css("height", ui.element.closest("table").outerHeight(true));
            var axis = ui.element.data("uiResizable").axis;
            //ui.element.closest("table").find("col").eq(ui.element.closest("td").index()).css("width", "");
            ui.element.append("<span style='width:100%;text-align:center;display:block' id='colWidthInd'></span>")
        },
        resize: function (e, ui) {
            $("#colWidthInd").html(ui.size.width + "px");
        },
        stop: function (e, ui) {
            $("#colWidthInd").remove();
            ui.element.closest("table").find("col").eq(ui.element.closest("td").index()).css("width", ui.size.width);
            ui.element.closest("tr").children().css("width", "");
            ui.element.css("width", "");
            var w = 0;
            ui.element.closest("table").find("col").each(function () { w += parseInt($(this).width()); })
            ui.element.closest("table").css("width", w);
            ui.element.css("height", "");
            adjustFieldSizeMulti(ui.element.closest("table"));
            redrawPageLayout("contentChanged");
        }

    });
}

function addTableRows(tbl,el) {
    var l = tbl.children("colgroup").children().length-1;
    var tr = [];
    for (var i = 0; i < l; i++)
        tr.push("<td class='table-cell'></td>");
    tr = $("<tr>" + tr.join("") + "</tr>");
    if (el)
        el.after(tr);
    else
        tbl.children("tbody").append(tr);
    var td = $("<td class='rowHeader cell-header'><div><a class='delRow' title='Delete Row' onclick='tableAction(this)' href='javascript:void(0)'></a><a class='addRow' title='Add Row' onclick='tableAction(this)' href='javascript:void(0)'></a></div></td>");
    tr.prepend(td);
    //td.node(0).resizable({
    //    handles: "s",
    //    start: function (e, ui) {
    //        ui.element.closest("tr").children().css("height", "");           
    //    }        
    //});
}
function addTableCols(tbl,el) {
    
    var tr = tbl.children("tbody").node(0);
    var td = $("<td class='cell-header'><div><a class='delCol' title='Delete Column' onclick='tableAction(this)' href='javascript:void(0)'></a><a title='Add Column' onclick='tableAction(this)' class='addCol' href='javascript:void(0)'></a></div></td>");
    if (el) {
        el.after(td);
        tbl.children("colgroup").node(el.index()).after("<col style='width:150px'/>")
    }
    else {
        tr.append(td);
        tbl.children("colgroup").append("<col style='width:150px'/>")
    }
    setTableColResize(td);
    var elIndex = el ? el.index() : -1;
    tbl.children("tbody").children().each(function (ind) {
        if (ind > 0) {
            if (elIndex < 0 || !$(this).node(elIndex).exists())
                $(this).append("<td class='table-cell'></td>");
            else
                $(this).node(elIndex).after("<td class='table-cell'></td>");

        }
    });

    var w = 0;
    tbl.children("colgroup").children().each(function () { w += parseInt($(this).width()); })
    tbl.css("width", w)
}

function tableAction(a) {
    a = $(a);
    
    var td = a.closest("td");
    var tr = td.parent();
    var tbl = tr.closest("table");
   
    if (a.hasClass("addCol")) {           
        addTableCols(tbl, td);
    }
    else if (a.hasClass("addRow")) {
        addTableRows(tbl, tr)
    }
    else if (a.hasClass("delRow")) {
        if (confirm('Delete this row?'))
            tr.remove();
    }
    else if (a.hasClass("delCol")) {
        if (!confirm('Delete this column?'))
            return;
        tbl.children("colgroup").node(td.index()).remove();
        tbl.children("tbody").children().each(function (ind) {
            if (ind > 0) {
                $(this).node(td.index()).remove();
            }
        })
        td.remove();
        var w = 0;
        tbl.children("colgroup").children().each(function () { w += parseInt($(this).width()); })
        tbl.css("width", w)
    }

    redrawPageLayout("contentChanged");
}

function mergeCells(a) {
    a = $(a)
    var tbl = a.prev();
    var cell = tbl.find(".ui-selected").eq(0);
    var colspan = 1, rowspan = 1;
    var valid = true;
    var c = cell;
    while (valid) {
        valid = false;
        c = c.next();
        if (c.hasClass("ui-selected")) {
            cell.append(c.children());
            valid = true;
            colspan++;
            c.addClass("_delCells");
        }
    }
    valid = true;
    c = cell;
    while (valid) {
        valid = false;
        c = c.parent().next().node(cell.index());
        if (c.hasClass("ui-selected")) {
            cell.append(c.children());
            valid = true;
            rowspan++;
            c.addClass("_delCells");
            if (colspan > 1) {
                var ci = 0;
                var n = c;
                while (ci < colspan) {
                    n = n.addClass("_delCells");
                    cell.append(n.children());
                    n = n.next();
                    ci++;
                }
            }
        }
    }

    if (colspan > 1)
        cell.attr("colspan", colspan);
    if (rowspan > 1)
        cell.attr("rowspan", rowspan);

    //tbl.find("._delCells").remove();
    a.remove();
    adjustFieldSizeMulti(tbl);
}
function unmergeCells(a) {
    a = $(a)
    var tbl = a.prev();
    var cell = tbl.find(".ui-selected").eq(0);
    var rowSpan = cell.attr("rowspan") / 1;
    var colSpan = cell.attr("colspan") / 1;
    if (colSpan > 1) {
        var ci = 0;
        var n = cell;
        while (ci < colSpan) {
            n = n.removeClass("_delCells").next();
            ci++;
        }
    }
    if (rowSpan > 1) {
        var ri = 0;
        var n = cell;
        while (ri < rowSpan) {
            n = n.removeClass("_delCells").parent().next().node(cell.index());
            if (colSpan > 1) {
                var ci = 0;
                var _n = n;
                while (ci < colSpan) {
                    _n = _n.removeClass("_delCells").next();
                    ci++;
                }
            }
            ri++;
        }
    }
    cell.removeAttr("colspan");
    cell.removeAttr("rowspan");
    a.remove();
    adjustFieldSizeMulti(tbl);
}

function saveTableIds() {
    if ($("#txtCellId").val().Trim() != "") {
        var ctl = $("#" + $("#txtCellId").val())[0];
        if (ctl && ctl != window.currentCell[0]) {
            alert("Another control with same id exists.")
            return;
        }
    }
    if ($("#txtRowId").val().Trim() != "") {
        var ctl = $("#" + $("#txtRowId").val())[0];
        if (ctl && ctl != window.currentCell.closest("tr")[0]) {
            alert("Another control with same id exists.")
            return;
        }
    }
    window.currentCell.attr("id", $("#txtCellId").val().Trim());
    window.currentCell.closest("tr").attr("id", $("#txtRowId").val().Trim());
    window.currentCell.attr("cssclass", $("#txtCellCssClass").val().Trim());
    window.currentCell.closest("TR").attr("cssclass", $("#txtRowCssClass").val().Trim());
    $('#divTableIds').HideModal();
}
function getCssClass(info) {
    var cls = "";
    if (info.Mandatory > 0)
        cls += " mandatory";
    if (info.HiddenAdd > 0 || info.HiddenEdit > 0)
        cls += " ui-hidden";
    if (info.DisabledAdd > 0 || info.DisabledEdit > 0)
        cls += " ui-disabled";
    return cls;
}
function createGridCols(tbl, cols) {
    tbl.empty();
    if (!cols || cols.length <= 0) {
        var tr = $("<div class='noViewError'>Please click on settings and assign a view for this grid.</div>");
        tbl.append(tr);
        return;
    }   
    for (var x = 0; x < 1; x++) {       
        for (var y = 0; y < cols.length; y++) {
            _addGridCols(tbl, cols, cols[y]);
        }
    }
    _makeResizableCols(tbl);
}
function _addGridCols(tbl, cols, cl) {
    var isId = (typeof cl == "string");
    if (isId)
        cl = $(cols).filter(function () { return this.Name == cl; })[0];
    if (!cl)
        return;

    cl.Width = $.defaultVal(cl.Width, 75);
    var th = $("<span data--Name='" + cl.Name + "' data--Entity-Path='" + cl.EntityPath + "' class='gridCell'><span><a style='" + (IsDependent ? "display:none" : "") + "' href='javascript:void(0)'>X</a>" + cl.Title + "</span><span class='widthInd'>" + cl.Width + "</span></span>");
    th.width(cl.Width - 8);
    tbl.append(th);
    return th;
}
function _makeResizableCols(tbl) {
    if (IsDependent) {
        tbl.find("a").attr("title", "Remove Column").on("click", function () { $(this).closest(".gridCell").toggleClass("hideCol"); });
        return;
    }
    tbl.find("a").attr("title", "Remove Column").on("click", function () { $(this).closest(".gridCell").hide().data("Hidden",true); });

    tbl.find(".gridCell").resizable({
        handles: "e",
        resize: function (e, ui) { var th = $(ui.element); th.children(".widthInd").html(th.outerWidth());},
        start: function (e, ui) { var th = $(ui.element); th.children(".widthInd").show(); th.data("startWidth", th.outerWidth(true));},
        stop: function (e, ui) { $(ui.element).children(".widthInd").hide(); }
    });
    
    //tbl.sortable();

    tbl.sortable({
       
        cursor:{top:5},
        placeholder: "reorder-arrow",
        cursor: "move",
        sort: function (event, ui) {           
            var that = $(this);
            ui.placeholder.insertBefore(ui.item);            
            that.children().each(function () {
                if ($(this).hasClass('ui-sortable-helper') || $(this).hasClass('reorder-arrow'))
                    return true;               
                w = $(this).outerWidth();
                var dist = ui.position.left - $(this).position().left,
                    before = dist < w / 2;               
                if (dist > 0 && ui.position.left < $(this).position().left + w) {                 
                    if (before)
                        ui.placeholder.insertBefore($(this));
                    else
                        ui.placeholder.insertAfter($(this));
                    return false;
                }
            });
        },

    });
}
var _globalUID = 0; _globalIDCache = ",";
function generateUniquieId(elem, prefix) {
    var id=prefix+"-"+ ++_globalUID;
    while ($("#" + id).exists() || _globalIDCache.indexOf(id)>-1) {
        id = prefix + "-" + ++_globalUID;
    }
    if (elem)
        elem.attr("id", id);
    else
        _globalIDCache += id+",";
    return id;
}

function _getFieldInfo(field) {
    if (field.data("@RelatedField")) {
        return { DisplayName: (field.hasClass("RelatedField")?"":currentTreeNode.get_text()), Type: "RelatedField" };
    }
    var spl = field.data("@IsSpecial");  
    var result=$(spl?specialFields : dbFields).filter(function () {
        return $(this).attr(spl ? "Type" : "ID") == field.data(spl ? "@Type" : "@FieldName");
    });
    if (result && result.length > 0)
        return result[0];
    else
        null;

}

function _cloneAttr(item, data) {
    for (attr in data) {
        if (attr.startsWith("@"))
            item.data(attr, data[attr]);
    }
}
function resetHighlight() {
    if (currentHighlightedNode)
        currentHighlightedNode.removeClass("allEdge " + edgeCss.toString().Replace(",", " "));
}
var currentHighlightedNode = null;
function highlightItem(e, ui) {
    validDrop = false;
    
    var node = $($.elementFromPoint(e.clientX, e.clientY)); 
    if (!node.exists())
        return;
    var dragNode=$(e.target);
    var isField = dragNode.data("@Behaviour") == "Field"; 
    if (isField)
        validDrop = (node.data("@Object") || node.hasClass("wrapper") || node.hasClass("ui-content")) || node.hasClass("table-cell") || node.hasClass("cell-header");
    else
        validDrop = node.data("@Object") || node.hasClass("ui-content") || node.hasClass("table-cell") || node.hasClass("cell-header") || node.hasClass("ContentPane") || node.hasClass("VerticalPane") || node.hasClass("HorizontalPane");
   
    if (validDrop && node.parent().parent().hasClass("fieldList"))
        validDrop = false;
    if (!validDrop) {
        resetHighlight();
        return;
    }
    else
        resetHighlight();
   
    if (node.hasClass("cell-header"))
        node = node.closest(".Table");
    
    currentHighlightedNode = node;
    if (currentHighlightedNode.hasClass("ContentPane") || currentHighlightedNode.hasClass("VerticalPane") || currentHighlightedNode.hasClass("HorizontalPane")) {
        currentHighlightedNode.addClass("allEdge");
    }
    else if (currentHighlightedNode.data("@Behaviour")=="Field" || currentHighlightedNode.data("@Type")=="Grid" || currentHighlightedNode.data("@IsSpecial"))
        highlightEdge(currentHighlightedNode, dragNode, e.pageX, e.pageY);    
    else if (currentHighlightedNode.hasClass("wrapper")) {
        if (ui.helper[0] != currentHighlightedNode.children().last().get(0)) {
            currentHighlightedNode = currentHighlightedNode.children().last();
            if (currentHighlightedNode.data("@Type") == dragNode.data("@Type"))
                currentHighlightedNode.addClass("rightEdge");
        }
    }
    else if (currentHighlightedNode.data("@IsContainer") || currentHighlightedNode.hasClass("ui-content") || currentHighlightedNode.hasClass("table-cell") )
        currentHighlightedNode.addClass("allEdge");

}
var edgeCss = ["topEdge", "rightEdge", "bottomEdge", "leftEdge"];
function highlightEdge(node, dragNode, x, y) {   
    var pos = node.getOffset();
    var hEdg = node.data("@HighlightEdge"); 
    if (dragNode.data("@Type") == "GroupingPanel" && node.data("@Type") != "GroupingPanel") {       
        hEdg = "T,B";
    }
    
    var t = (hEdg.indexOf("T") > -1 ? y - pos.top : 9999999);
    var r = (hEdg.indexOf("R") > -1 ? pos.right - x : 9999999);
    var d = (hEdg.indexOf("B") > -1 ? pos.bottom - y : 9999999);
    var l = (hEdg.indexOf("L") > -1 ? x - pos.left : 9999999);
    var arr = [t, r, d, l];
    var min = $.inArray(Math.min.apply(window, arr), arr);
    node.addClass(edgeCss[min]);
    
}
function adjustFieldSizeMulti(div) {
    if (div) {
        div.find(".wrapper").children(":first-child").each(function () { adjustFieldSize($(this)) });
    }
}
function checkWrapperContents(wrapr) {
    if (wrapr.hasClass("wrapper")) {
        if (wrapr.children().size() <= 0)
            wrapr.remove();
        else
            adjustFieldSize(wrapr.node(0))
    }
}
function adjustFieldSize(field) {   
   
    if (field.data("@Type") == "Grid" || field.data("@Type") == "Table") {
        return;
    }   
    else if (field.data("@Behaviour") != "Field") {
        adjustSpecialContainerSize(field);
        return;
    }
    
    field.hide().css({ "left": "", "top": ""});
    var w = field.parent().innerWidth();
    field.show();
    var diff = field.outerWidth(true) - field.innerWidth();
    var items = field.parent().children(".inlineField,.GroupingPanel");
    var fCount = items.size();
    var s = field.data("@Size").split('x');
    if (field.data("@Type") != "GroupingPanel" && s[1] > 1)
        field.height(30 * s[1]);

    if (fCount == 1) {
        if (s[0] <= 1)
            fCount = 2;
    }
    if (field.data("@Type") == "GroupingPanel" && fCount == 1) {
        field.removeClass("floatDiv").css("width", "");
        
        return;
    }
    w = w - diff * fCount; w = Math.floor(w, 0);
   
    var t = 0;
    items.each(function (index) {       
        $(this).width(Math.ceil(w / fCount, 0) + "px");
        if (index > 0 && index == items.length - 1)
            $(this).width(w - t - 1 + "px");
        else t += Math.ceil(w / fCount, 0);
        if ($(this).data("@Type") == "GroupingPanel") {
            $(this).addClass("floatDiv");
            adjustFieldSizeMulti($(this));
        }
    })

}
function adjustSpecialContainerSize(ctr) {
    if (ctr.data("@Type") == "Line")
        return;
    ctr.width((ctr.parent().innerWidth() - (ctr.outerWidth(true) - ctr.innerWidth())) + "px")
}



function togglePane(chk, pane) {
    chk = $(chk);   
    
    pane = $("#" + pane + "Panel");
    pane.setDisplay(chk.checked());
    
    redrawPageLayout("toggle", pane);
    adjustFieldSizeMulti(null);
}

function ToggleEditors(id, chk) {
    $(Editors[id].getWrapperElement()).removeClass("codeDisable").addClass((chk ? "" : "codeDisable"));
    Editors[id].setOption("readOnly", (chk ? "" : "nocursor"));
}

function toggleFixPane(chk, pane) {
    return;
    chk = $(chk);
    pane = $("#" + pane + "Panel");
    pane.css("position",(chk.checked()?"fixed":"absolute"));
    
}


function showOptions(el) {
    if (nodeDragging || $("#pagePanel").hasClass("FieldSelector"))
        return;
    var item = el;
    var opt=$("#divOptionMenu");
    item.zIndex(100).append(opt.show().css({ top:2 , left: 2}));
}
function hideOptions() {
    var item = $(this);
    
    item.css("z-index", "");
    $(document.body).append($("#divOptionMenu").hide())
}
var currentEditingField = null;
function toggleFieldOptions(btn) {
    if ($("#pagePanel").hasClass("FieldSelector"))
        return;
    btn = $(btn);
    currentEditingField = btn.closest(".layoutObject");
    if (currentEditingField.data("@Object") === true) {        
        loadFieldSettings();
        $("#divSettings").ShowModal({ minTop: 150 });
    }
}
function loadFieldSettings() {
    $("#divSettingsTab").tabs("option", "active", 0);
    var div = $("#divSettings");
    var f = currentEditingField;
    var info = _getFieldInfo(f);
    resetFieldSettings(div, f);
    if (IsDependent) {
        $("#tabEvents").hide();
        $("#tabRender").hide();
        $("#divFieldOtherProps").hide();
    }
    var title = itemTitle(f);
    $("#spnTitle").html((title == "" && f.data("@Type") == "Field" ? info.DisplayName : title)+($.isEmpty(info.FieldName)?"":" {"+info.FieldName+"}"));
    $("#txtFieldId").val(f.attr("id"));
    $("#txtFieldTitle").setEnable(true, true);
    $("#txtFieldTooltip").setEnable(true, true);
    $("#txtFieldOnLoad").val($.defaultVal(f.data("@FieldProp_OnLoad"), ""));
    $("#txtFieldOnRender").val($.defaultVal(f.data("@FieldProp_OnRender"), ""));
    $("#txtFieldOnSave").val($.defaultVal(f.data("@FieldProp_OnSave"), ""));
    $("#txtFieldOnValid").val($.defaultVal(f.data("@FieldProp_OnValid"), ""));
    $("#txtFieldOnChange").val($.defaultVal(f.data("@FieldProp_OnChange"), ""));
    $("#txtFieldOnClick").val($.defaultVal(f.data("@FieldProp_OnClick"), ""));
    $("#txtCssClass").val($.defaultVal(f.data("@FieldProp_Class"), ""));
    $("#cboVisibility").val($.defaultVal(f.data("@FieldProp_Visibility"), "")).trigger("chosen:updated");
    if (f.data("@Type") == "Spacer" || f.data("@Type") == "Line" ) {       
        $("#chkHiddenFieldAdd").checked(f.data("@FieldProp_HiddenAdd")).closest(".row").setDisplay(true);
        $("#chkHiddenFieldEdit").checked(f.data("@FieldProp_HiddenEdit"));
        if( f.data("@Type") == "Line")
            $("#cboLine").val($.defaultVal(f.data("@FieldProp_LineWidth"), "")).trigger("chosen:updated").closest(".row").setDisplay(true);
    }
    else if (f.data("@Type") == "Label") {
        $("#chkHiddenFieldAdd").checked(f.data("@FieldProp_HiddenAdd")).closest(".row").setDisplay(true);
        $("#chkHiddenFieldEdit").checked(f.data("@FieldProp_HiddenEdit"));       
        $("#txtFieldTitle").val(title).closest(".row").setDisplay(true);
        $("#txtFieldTooltip").val(f.data("@FieldProp_ToolTip")).closest(".row").setDisplay(true);
        $("#cboTextAlign").val(f.data("@FieldProp_TextAlign")).trigger("chosen:updated").closest(".row").setDisplay(true);
        $("#cboDock").val(f.data("@FieldProp_Dock")).trigger("chosen:updated").closest(".row").setDisplay(true);
        $("#cboWidth").val(f.data("@Size").split('x')[0] + "x").trigger("chosen:updated").closest(".row").setDisplay(true);
        $("#ddlRenderList").val($.defaultVal(f.data("@FieldProp_CustomTemplateID"), "")).trigger("chosen:updated");
        $("#chkFieldRender").checked(f.data("@FieldProp_EnableCustomHtml") == true)
        $('#ddlRenderList').parent().setDisplay($("#chkFieldRender").checked());
        $('#txtFieldRender').parent().setDisplay($("#ddlRenderList").prop('selectedIndex') <= 0);
        Editors["txtFieldRender"].setValue($.defaultVal(f.data("@FieldProp_CustomHtml"), ""));        
        applyLabelStyleProps(f);
        $("#chkIcon").hide().checked(true);
        $("#spnIcon").setEnable(true).closest(".row").show();
        $("#spnIcon").val(f.find(".field-icon").html());
        $("#lnkForField").html("Please Select").closest(".row").show();
        var forId = f.data("@FieldProp_LabelFor");
        if (!$.isEmpty(forId)) {
            var tgt = $("#"+forId);
            var inf = _getFieldInfo(tgt);
            $("#lnkForField").html(tgt.attr("id") + (inf ? " <i>[" + inf.DisplayName + "]</i>" : ""));
            $("#lnkForField").data("FieldID", tgt.attr("id"));
            $("#txtFieldTitle").closest(".row").setDisplay(false);
            $("#txtFieldTooltip").closest(".row").setDisplay(false);
        }
       
    }
    else if (f.data("@Type") == "HTML") {
        $("#chkHiddenFieldAdd").checked(f.data("@FieldProp_HiddenAdd")).closest(".row").setDisplay(true);
        $("#chkHiddenFieldEdit").checked(f.data("@FieldProp_HiddenEdit"));
        $("#cboDock").val(f.data("@FieldProp_Dock")).trigger("chosen:updated").closest(".row").setDisplay(true);
        $("#cboWidth").val(f.data("@Size").split('x')[0] + "x").trigger("chosen:updated").closest(".row").setDisplay(true);
        $("#ddlRenderList").val($.defaultVal(f.data("@FieldProp_CustomTemplateID"), "")).trigger("chosen:updated");
        $("#chkFieldRender").checked(true);
        $('#ddlRenderList').parent().setDisplay($("#chkFieldRender").checked());
        $('#txtFieldRender').parent().setDisplay($("#ddlRenderList").prop('selectedIndex') <= 0);
        Editors["txtFieldRender"].setValue($.defaultVal(f.data("@FieldProp_CustomHtml"), ""));        
    }
    else if (f.data("@Type") == "RelatedField") {
        $("#chkHiddenFieldAdd").checked(f.data("@FieldProp_HiddenAdd")).closest(".row").setDisplay(true);
        $("#chkHiddenFieldEdit").checked(f.data("@FieldProp_HiddenEdit"));        
        $("#txtFieldTitle").val(title).closest(".row").setDisplay(true);
        $("#cboTextAlign").val(f.data("@FieldProp_TextAlign")).closest(".row").setDisplay(true);
        $("#cboDock").val(f.data("@FieldProp_Dock")).trigger("chosen:updated").closest(".row").setDisplay(true);
        $("#cboWidth").val(f.data("@Size").split('x')[0] + "x").trigger("chosen:updated").closest(".row").setDisplay(true);
        $("#ddlRenderList").val($.defaultVal(f.data("@FieldProp_CustomTemplateID"), "")).trigger("chosen:updated");
        $("#chkFieldRender").checked(f.data("@FieldProp_EnableCustomHtml") == true)
        $('#ddlRenderList').parent().setDisplay($("#chkFieldRender").checked());
        $('#txtFieldRender').parent().setDisplay($("#ddlRenderList").prop('selectedIndex') <= 0);
        Editors["txtFieldRender"].setValue($.defaultVal(f.data("@FieldProp_CustomHtml"), ""));
        applyLabelStyleProps(f);
        $("#chkIcon").hide().checked(true);
        $("#spnIcon").setEnable(true).closest(".row").show();
        $("#spnIcon").val(f.find(".field-icon").html());
        

    }
    else if (f.data("@Type") == "Grid") {
        $("#chkHiddenFieldAdd").setEnable(f.data("@FieldProp_HiddenAdd") != 2).checked(f.data("@FieldProp_HiddenAdd") == 1 || f.data("@FieldProp_HiddenAdd") == 2).closest(".row").setDisplay(true);
        $("#chkHiddenFieldEdit").setEnable(f.data("@FieldProp_HiddenEdit") != 2).checked(f.data("@FieldProp_HiddenEdit") == 1 || f.data("@FieldProp_HiddenEdit") == 2);
        $("#chkDisableFieldAdd").setEnable(f.data("@FieldProp_DisabledAdd") != 2).checked(f.data("@FieldProp_DisabledAdd") == 1 || f.data("@FieldProp_DisabledAdd") == 2).closest(".row").setDisplay(true);
        $("#chkDisableFieldEdit").setEnable(f.data("@FieldProp_DisabledEdit") != 2).checked(f.data("@FieldProp_DisabledEdit") == 1 || f.data("@FieldProp_DisabledEdit") == 2)
        $("#chkAutoMap").checked(f.data("@FieldProp_ApplyFilter") != true);
        $("#btnMapField").setDisplay(f.data("@FieldProp_ApplyFilter") == true);
        $("#cboHeight").val($.defaultVal(f.data("@FieldProp_CtrHeight"), "")).trigger("chosen:updated").closest(".row").setDisplay(true);
        $("#txtFixHeight").val($.defaultVal(f.data("@FieldProp_CtrFixHeight"), ""));
        $('#txtFixHeightCtr').setDisplay($("#cboHeight").val() == 'Fix');
        var entid = $.defaultVal(f.data("@FieldProp_EntityID"), info.ID);
        entid = entid == "Grid" ? "" : entid;
        $('#btnView').attr('ViewId', $.defaultVal(f.data("@FieldProp_EntityID"), info.ID));
        $("#txtFieldTitle").val(title).closest(".row").setDisplay(true);
        $("#txtGridEnt").closest(".row").setDisplay(true);
        $("#cboViews").closest(".row").setDisplay(true);
        if (!$.isEmpty(entid)) {
            var ddl = $("#cboViews");
            ddl.empty();
            var opt = $("<option>Loading...</option>");
            ddl.append(opt);
            ddl.trigger('chosen:updated');
            $("#txtGridEnt").val("Loading...");
            PageMethods.LoadViewList(entid, function (r) {
                viewList = JSON.parse(r);
                reloadViewList(entid.toUpperCase());
                $("#cboViews").val(f.data("@FieldProp_ViewID")).trigger("chosen:updated");
                reloadColChks(f.data("@FieldProp_ViewID"), f);
                var n = $find("tvEntity").findNodeByValue(entid.toUpperCase());
                $("#txtGridEnt").val(n?n.get_text():entid).attr("entityid", entid);
                $("#txtGridEnt").data("FieldProp_Filter", $.defaultVal(f.data("@FieldProp_Filter"), ""));
            })
            
        }
    }
    else {       
        var f = currentEditingField;
        var info = _getFieldInfo(f);
        $("#chkMandatoryField").setEnable(f.data("@FieldProp_Mandatory") != 2).checked(f.data("@FieldProp_Mandatory") == 1 || f.data("@FieldProp_Mandatory") == 2).closest(".row").setDisplay(f.data("@Type") == "Field");
        $("#chkHiddenFieldAdd").setEnable(f.data("@FieldProp_HiddenAdd") != 2 && !$("#chkMandatoryField").checked()).checked(f.data("@FieldProp_HiddenAdd") == 1 || f.data("@FieldProp_HiddenAdd") == 2).closest(".row").setDisplay(true);
        $("#chkHiddenFieldEdit").setEnable(f.data("@FieldProp_HiddenEdit") != 2).checked(f.data("@FieldProp_HiddenEdit") == 1 || f.data("@FieldProp_HiddenEdit") == 2);
        $("#chkDisableFieldAdd").setEnable(f.data("@FieldProp_DisabledAdd") != 2 && !$("#chkMandatoryField").checked()).checked(f.data("@FieldProp_DisabledAdd") == 1 || f.data("@FieldProp_DisabledAdd") == 2).closest(".row").setDisplay(true);
        $("#chkDisableFieldEdit").setEnable(f.data("@FieldProp_DisabledEdit") != 2).checked(f.data("@FieldProp_DisabledEdit") == 1 || f.data("@FieldProp_DisabledEdit") == 2)
        $("#txtFieldTitle").val(title).closest(".row").setDisplay(true);
        $("#txtFieldTooltip").val(f.data("@FieldProp_ToolTip")).closest(".row").setDisplay(!f.data("@IsContainer"));
        if (f.data("@Type") == "Field") {
            $("#cboDock").val(f.data("@FieldProp_Dock")).trigger("chosen:updated").closest(".row").setDisplay(true);
            $("#cboWidth").val(f.data("@Size").split('x')[0]+"x").trigger("chosen:updated").closest(".row").setDisplay(true);
            $("#cboLabelPosition").val(f.data("@FieldProp_LabelPosition")).trigger("chosen:updated").closest(".row").setDisplay(true);
            $("#spnIcon").setEnable(true).closest(".row").show();
            $("#chkIcon").hide().checked(true);
            $("#spnIcon").val(f.find(".field-icon").html());
            $("#chkFieldTitle").show().checked(f.data("@FieldProp_TitleOR") == true);
            $("#chkFieldTooltip").show().checked(f.data("@FieldProp_ToolTipOR") == true);
            $("#txtFieldTitle").setEnable($("#chkFieldTitle").checked(), true);
            $("#txtFieldTooltip").setEnable($("#chkFieldTooltip").checked(), true);           
            $("#ddlRenderList").val($.defaultVal(f.data("@FieldProp_CustomTemplateID"), "")).trigger("chosen:updated");            
            $("#chkFieldRender").checked(f.data("@FieldProp_EnableCustomHtml") == true)
            $('#ddlRenderList').parent().setDisplay($("#chkFieldRender").checked());
            $("#chkBorders").checked(f.data("@FieldProp_FieldBorders") == 1).closest(".row").setDisplay(true);
            $('#txtFieldRender').parent().setDisplay($("#ddlRenderList").prop('selectedIndex') <= 0);
            Editors["txtFieldRender"].setValue($.defaultVal(f.data("@FieldProp_CustomHtml"), ""));
            $("#txtDefaultValue").val($.defaultVal(f.data("@FieldProp_DefaultValue"), "")).closest(".row").setDisplay(true);
            if (info.DataType.toLowerCase() == "imgpreview") {
                $("#txtDefaultValue").val("").closest(".row").setDisplay(false);
                $("#txtImgHt").val($.defaultVal(f.data("@FieldProp_ImgHt"), 0)).closest(".row").show();
                $("#txtImgWd").val($.defaultVal(f.data("@FieldProp_ImgWd"), 0));
            }
            else if (info.DataType.toLowerCase() == "docpreview") {
                $("#txtDefaultValue").val("").closest(".row").setDisplay(false);
            }
            else if (info.DataType.toLowerCase() == "singleselect" || info.DataType.toLowerCase() == "multiselect") {
                var cbo = $("#cboLookupCode");                
                var codes = $(layoutCodes).filter(function () { return this.Entity == info.LookupTable; });
                cbo.empty();
                cbo.append("<option></option>");
                cbo.append("<option value=''>Default</option>");
                $(codes).each(function () {
                    cbo.append("<option value='"+this.Code+"'>" + this.Code + "</option>");
                })
                cbo.trigger("chosen:updated");
                cbo.val(f.data("@FieldProp_LookupCode")).trigger("chosen:updated").closest(".row").setDisplay(true);

            }
        }
        else if (f.data("@Type") == "GroupingPanel") {
            $("#cboDock").val(f.data("@FieldProp_Dock")).trigger("chosen:updated").closest(".row").setDisplay(true);
            $("#chkBorders").checked(f.data("@FieldProp_NoBorders") != 1).closest(".row").setDisplay(f.data("@Type") == "GroupingPanel");
            $("#cboWidth").val(f.data("@Size").split('x')[0] + "x").trigger("chosen:updated").closest(".row").setDisplay(true);
        }        
        else if (f.data("@Type") == "Window") {
            $("#txtUrl").val($.defaultVal(f.data("@FieldProp_Url"), "")).closest(".row").show();
        }         
        else if (f.data("@Type") == "Document" || f.data("@Type") == "PDF" || f.data("@Type") == "Spread") {
            $("#ddlDocField").val($.defaultVal(f.data("@FieldProp_FileFieldId"), "")).trigger("chosen:updated").closest(".row").show();
        }
        else if (f.data("@Type") == "Table") {
            $("#ddlTableBorder").val($.defaultVal(f.data("@FieldProp_TableBorder"), "allCells")).trigger("chosen:updated").closest(".row").show();
        }
        else if (f.data("@Type") == "Button") {
            //$("#txtFieldTitle").closest(".row").hide();
            //$("#txtFieldTooltip").closest(".row").hide();
            $("#chkFieldTitle").show().checked(f.data("@FieldProp_TitleOR") == true);
            $("#chkFieldTooltip").show().checked(f.data("@FieldProp_ToolTipOR") == true);
            $("#chkIcon").show().checked(f.data("@FieldProp_IconOR") == true);
            $("#txtFieldTitle").setEnable($("#chkFieldTitle").checked(), true);
            $("#txtFieldTooltip").setEnable($("#chkFieldTooltip").checked(), true);
            $("#spnIcon").setEnable($("#chkIcon").checked(), true).closest(".row").show();
            $("#spnIcon").val(f.find(".field-icon").html());
            $("#cboButtonStyle").val($.defaultVal(f.data("@FieldProp_ButtonStyle"), "Button")).trigger("chosen:updated").closest(".row").show();
            $("#cboDock").val($.defaultVal(f.data("@FieldProp_Dock"),"Left")).trigger("chosen:updated").closest(".row").setDisplay(true);
        }
        if ((f.hasClass("container") || f.hasClass("grid") || info.DataType == "RichText" || info.DataType == "Multiline") && !f.hasClass("Table")) {
            $("#cboHeight").val($.defaultVal(f.data("@FieldProp_CtrHeight"), "")).trigger("chosen:updated").closest(".row").setDisplay(true);
            $("#txtFixHeight").val($.defaultVal(f.data("@FieldProp_CtrFixHeight"), ""));
            $('#txtFixHeightCtr').setDisplay($("#cboHeight").val() == 'Fix');
        }
        $("#cboTabPosition").val(f.data("@FieldProp_TabPosition")).trigger("chosen:updated").closest(".row").setDisplay(f.data("@Type") == "TabPanel");

        if (f.data("@Type") == "Menu") {
            $("#txtFieldTitle").closest(".row").hide();
            $("#cboHeight").closest(".row").hide();
            $("#ddlMenuDirection").val(f.hasClass("VerticalMenu") ? "Vertical" : "Horizontal").trigger("chosen:updated").closest(".row").show();
            
        }
        
    }

    if (IsDependent) {
        $("#tabEvents").hide();
        $("#tabRender").hide();
        $("#divFieldOtherProps").hide();
    }
}
function applyLabelStyleProps(f){
    var s=$.defaultVal(f.data("@FieldProp_LabelStyle"),"");
    $("#cboLabelStyle").val(s).trigger("chosen:updated").closest(".row").setDisplay(true);
    $("#cboLabelStyle").trigger("change")
    if(s==""){
        var lbl = f.find(".field-title");
        $("#txtBgColor").val(lbl.getStyle("background-color")).blur();
        $("#txtForeColor").val(lbl.getStyle("color")).blur();
        $("#chkBold").checked(lbl.css("font-weight")=="bold").button( "refresh" );
        $("#chkItalic").checked(lbl.css("font-style")=="italic").button( "refresh" );
        $("#chkUnderline").checked(lbl.css("text-decoration").indexOf("underline")>-1).button( "refresh" );
        $("#cboFontSize").val($.defaultVal(lbl.getStyle("font-size"), "12px")).trigger("chosen:updated");
        $("#cboFontFamily").val($.defaultVal(lbl.css("font-family"), "Verdana")).trigger("chosen:updated");
    }
    var item=$("#cboLabelStyle").selectedItem();    
    if (item && item.attr("fz") == "1")
        $("#cboFontSize").val($.defaultVal(f.find(".field-title").getStyle("font-size"), "12px")).trigger("chosen:updated");
}
function toggleChkAdd(chk) {
    chk = $(chk);
    $('#chkHiddenFieldAdd').setEnable(!chk.checked()).checked((chk.checked() ? false : undefined));
    $('#chkDisableFieldAdd').setEnable(!chk.checked()).checked((chk.checked() ? false : undefined));
   
}

function resetFieldSettings(div,f) {
    viewList = [];
    $("#colList").empty();
    $("#chkMandatoryField").setEnable(true).checked(false).closest(".row").hide();
    $("#chkHiddenFieldAdd").setEnable(true).checked(false).closest(".row").hide();
    $("#chkHiddenFieldEdit").setEnable(true).checked(false);
    $("#chkDisableFieldAdd").setEnable(true).checked(false).closest(".row").hide();
    $("#chkDisableFieldEdit").setEnable(true).checked(false);
    $("#txtGridEnt").val("").removeAttr("entityid").closest(".row").hide();
    $("#btnMapField").hide();
    $("#chkAutoMap").checked(true);
    $("#cboViews").empty().trigger("chosen:updated").closest(".row").hide();
    $("#cboLabelPosition").prop("selectedIndex", 0).trigger("chosen:updated").closest(".row").hide();
    $("#cboTextAlign").prop("selectedIndex", 1).trigger("chosen:updated").closest(".row").hide();
    $("#cboDock").prop("selectedIndex", 1).trigger("chosen:updated").closest(".row").hide();
    $("#cboWidth").val(f.data("@Size").split('x')[0] + "x").trigger("chosen:updated").closest(".row").hide();
    $("#cboHeight").val("").trigger("chosen:updated").closest(".row").hide();
    $('#txtFixHeightCtr').setDisplay(false);
    $("#chkBorders").setEnable(true).checked(false).closest(".row").hide();
    $("#cboTabPosition").prop("selectedIndex", 0).trigger("chosen:updated").closest(".row").hide();
    $("#txtFieldTitle").val("").closest(".row").hide();
    $("#txtFieldTooltip").val("").closest(".row").hide();
    $("#spnIcon").val("").closest(".row").hide();
    $("#txtUrl").val("").closest(".row").hide();
    $("#ddlDocField").prop("selectedIndex", 0).trigger("chosen:updated").closest(".row").hide();
    $("#cboLabelStyle").prop("selectedIndex", 0).trigger("chosen:updated").closest(".row").hide();    
    $("#divLabelFormat").hide();
    $("#txtBgColor").val("").blur();
    $("#txtForeColor").val("").blur();
    $("#chkBold").checked(false).button("refresh");
    $("#chkItalic").checked(false).button("refresh");
    $("#chkUnderline").checked(false).button("refresh");
    $("#cboFontSize").val("12px").trigger("chosen:updated");
    $("#cboFontSize").after($("#cboFontSize_chosen"));
    $("#cboFontFamily").val("Verdana").trigger("chosen:updated");
    $("#txtImgHt").val("").closest(".row").hide();
    $("#txtImgWd").val("");
    $("#ddlTableBorder").prop("selectedIndex", 0).trigger("chosen:updated").closest(".row").hide();
    $("#ddlMenuDirection").prop("selectedIndex", 0).trigger("chosen:updated").closest(".row").hide();
    $("#cboButtonStyle").prop("selectedIndex", 0).trigger("chosen:updated").closest(".row").hide();
    $("#chkFieldTitle").checked(false);
    $("#chkFieldTooltip").checked(false);
    $("#txtDefaultValue").val("").closest(".row").setDisplay(false);
    $("#txtFieldOnLoad").val("").closest(".row").setDisplay(f.data("@Type") == "Field" || f.data("@Type") == "RelatedField");
    $("#txtFieldOnRender").val("").closest(".row").hide();
    $("#txtFieldOnSave").val("").closest(".row").setDisplay(f.data("@Type") == "Field");
    $("#txtFieldOnValid").val("").closest(".row").setDisplay(f.data("@Type") == "Field");
    $("#txtFieldOnChange").val("").closest(".row").setDisplay(f.data("@Type") == "Field" || f.data("@Type")== "Grid");
    $("#txtFieldOnClick").val("").closest(".row").setDisplay(f.data("@Type") != "Field" && f.data("@Type") != "Grid");
    $("#lnkForField").removeData("FieldID").html("Please Select").closest(".row").hide();   
    $("#ddlRenderList").val("").trigger("chosen:updated");
    Editors["txtFieldRender"].setValue("");
    $("#chkFieldRender").checked(f.data("@Type") == "HTML");
    $("#spnChkRender").setDisplay(f.data("@Type") != "HTML");
    $('#cboLookupCode').parent().setDisplay(false);
    $('#cboLookupCode').empty().trigger("chosen:updated");
    $('#ddlRenderList').parent().setDisplay(false);
    $('#txtFieldRender').parent().setDisplay($("#chkFieldRender").checked());
    $("#chkFieldTitle").hide();
    $("#chkFieldTooltip").hide();
    $("#tabEvents").setDisplay((f.data("@Type") != "HTML"));
    $("#tabRender").setDisplay((f.data("@Type") == "Field" || f.data("@Type") == "Label" || f.data("@Type") == "RelatedField" || f.data("@Type") == "HTML"));
    $("#cboVisibility").prop("selectedIndex", 0).trigger("chosen:updated").closest(".row").show();
    $("#cboLine").prop("selectedIndex", 0).trigger("chosen:updated").closest(".row").hide();
}
function reloadViewList(type) {
    var ddl = $("#cboViews");
    ddl.empty();
    $(viewList).each(function () {
        if (this.Type == type) {
            var opt = $("<option value='" + this.ViewID + "'>" + this.ViewName + "</option>");
            ddl.append(opt);
        }
    });
    ddl.prepend($("<option/>"));
    ddl.trigger('chosen:updated');
}
function reloadColChks(id,f) {
    var cols = $(viewList).filter(function () {
        return this.ViewID == id;
    });
    cols = (cols && cols.length > 0 ? cols[0].Cols : null);
    f = (!f ? (currentEditingField && currentEditingField.data("@FieldProp_ViewID") == id ? currentEditingField : null) : f);
    if (cols) {
        var l = $("#colList").empty();
        for (var i = 0; i < cols.length; i++) {
            l.append("<span><input value='" + cols[i].Name + "' type='checkbox' " + (f ? (f.find(".gridTable").children("[data--name=" + cols[i].Name + "]").isVisible() ? "checked" : "") : "checked") + "/><label>" + cols[i].Title + "</label><span><br/>");
        }
    }
}
function saveFieldProperties() {
    var f = currentEditingField;
    if ($("#txtFieldId").val() != currentEditingField.attr("id")) {
        if ($("#" + $("#txtFieldId").val()).exists() && $("#" + $("#txtFieldId").val())[0] != currentEditingField[0]) {
            alert("Another Field with same Html ID exists. Please use another Html ID");
            return false;
        }
        currentEditingField.attr("id", $("#txtFieldId").val());
    }
    var info = _getFieldInfo(f);
    var title = itemTitle(f, $("#txtFieldTitle").val());

    f.removeClass("mandatory");
    f.removeClass("ui-hidden");
    f.removeClass("ui-disabled");
    f.removeClass("rightAlign");
    f.removeClass("dockRight");
    f.removeClass("noBorder");
    f.removeClass("autoWidth");
    f.removeClass("occupy");
    f.data("@FieldProp_Visibility", $("#cboVisibility").val()); 
    f.data("@FieldProp_Class", $("#txtCssClass").val());
    f.data("@FieldProp_TitleOR", $("#chkFieldTitle").checked());
    f.data("@FieldProp_ToolTipOR", $("#chkFieldTooltip").checked());
    if (f.data("@Type") == "Field") {
        f.data("@FieldProp_ToolTip", $("#chkFieldTooltip").checked() ? $("#txtFieldTooltip").val() : $.defaultVal(_getFieldInfo(f).ToolTip, ""));
        f.data("@FieldProp_FieldBorders", $("#chkBorders").checked() ? 1 : 0);
        if (info.DataType.toLowerCase() == "singleselect" || info.DataType.toLowerCase() == "multiselect") {
            f.data("@FieldProp_LookupCode", $("#cboLookupCode").val());
        }
        $("#pagePanel").find("." + f.attr("id")).html(title == "" ? info.DisplayName : title);
        f.data("@FieldProp_Icon", $("#spnIcon").val());
        f.find(".field-icon").html(f.data("@FieldProp_Icon"));
    }
    else if (f.data("@Type") == "Button") {
        f.data("@FieldProp_ToolTip", $("#chkFieldTooltip").checked() ? $("#txtFieldTooltip").val() : $.defaultVal(_getFieldInfo(f).ToolTip, ""));
        f.data("@FieldProp_Icon", $("#chkIcon").checked() ? $("#spnIcon").val() : $.defaultVal(_getFieldInfo(f).Icon, ""));
        f.data("@FieldProp_IconOR", $("#chkIcon").checked());
        f.find(".field-icon").html(f.data("@FieldProp_Icon"));
    }
    else
        f.data("@FieldProp_ToolTip", $("#txtFieldTooltip").val());

    f.data("@FieldProp_Mandatory", (f.data("@FieldProp_Mandatory") == "2" ? 2 : ($("#chkMandatoryField").checked() ? 1 : 0)));
    f.data("@FieldProp_HiddenAdd", (f.data("@FieldProp_HiddenAdd") == "2" ? 2 : ($("#chkHiddenFieldAdd").checked() ? 1 : 0)));
    f.data("@FieldProp_HiddenEdit", (f.data("@FieldProp_HiddenEdit") == "2" ? 2 : ($("#chkHiddenFieldEdit").checked() ? 1 : 0)));
    f.data("@FieldProp_DisabledAdd", (f.data("@FieldProp_DisabledAdd") == "2" ? 2 : ($("#chkDisableFieldAdd").checked() ? 1 : 0)));
    f.data("@FieldProp_DisabledEdit", (f.data("@FieldProp_DisabledEdit") == "2" ? 2 : ($("#chkDisableFieldEdit").checked() ? 1 : 0)));
    f.data("@FieldProp_TextAlign", $("#cboTextAlign").val());
    f.data("@FieldProp_Dock", $("#cboDock").val());
    f.data("@FieldProp_LabelPosition", $("#cboLabelPosition").val());
    f.data("@FieldProp_TabPosition", $("#cboTabPosition").val());
    f.data("@FieldProp_NoBorders", ($("#chkBorders").checked() ? 0 : 1));

    f.data("@FieldProp_OnLoad", $("#txtFieldOnLoad").val());
    f.data("@FieldProp_OnRender", $("#txtFieldOnRender").val());
    f.data("@FieldProp_OnSave", $("#txtFieldOnSave").val());
    f.data("@FieldProp_OnValid", $("#txtFieldOnValid").val());
    f.data("@FieldProp_OnChange", $("#txtFieldOnChange").val());
    f.data("@FieldProp_OnClick", $("#txtFieldOnClick").val());
    f.data("@FieldProp_CustomTemplateID", $("#ddlRenderList").val());
    f.data("@FieldProp_CustomHtml", Editors["txtFieldRender"].getValue());
    f.data("@FieldProp_EnableCustomHtml", $("#chkFieldRender").checked());

    f.data("@FieldProp_DefaultValue", $("#txtDefaultValue").val());
    f.data("@FieldProp_ImgHt", $("#txtImgHt").val());
    f.data("@FieldProp_ImgWd", $("#txtImgWd").val());
    if ($("#cboHeight").closest(".row").isVisible()) {
        f.data("@FieldProp_CtrHeight", $("#cboHeight").val());
        f.data("@FieldProp_CtrFixHeight", $("#txtFixHeight").autoNumeric('get'));
    }
    if ($("#cboWidth").closest(".row").isVisible()) {
        var s = $("#cboWidth").val();
        f.data("@Size",s+f.data("@Size").split('x')[1])
        adjustFieldSize(f);
        if (s == "2x")
            f.addClass("occupy");
        else if (s == "0x")
            f.addClass("autoWidth");
    }
   

    if (f.data("@FieldProp_Mandatory")) 
        f.addClass("mandatory"); 
    if (f.data("@FieldProp_HiddenAdd") / 1 > 0 || f.data("@FieldProp_HiddenEdit") / 1 > 0 || f.data("@FieldProp_Visibility") == "Hidden" || f.data("@FieldProp_Visibility") == "Collapsed")
        f.addClass("ui-hidden"); 
    if (f.data("@FieldProp_DisabledAdd")/1>0 || f.data("@FieldProp_DisabledEdit")/1>0) 
        f.addClass("ui-disabled");    
    if (f.data("@FieldProp_TextAlign")=="Right")
        f.addClass("rightAlign");
    if (f.data("@FieldProp_TextAlign") == "Center")
        f.addClass("centerAlign");
    if (f.data("@FieldProp_Dock") == "Right")
        f.addClass("dockRight");
    if (f.data("@FieldProp_NoBorders")==1)
        f.addClass("noBorder");
    
    
    if (f.data("@Type") == "Grid") {
        if (!IsDependent) {
            var cols;
            if ($.isEmpty(f.data("@FieldProp_ViewID")) && $.isEmpty($("#cboViews").val())) {
                alert("Please choose a view");
                return;
            }
            if (f.data("@FieldProp_ViewID") != $("#cboViews").val()) {
                cols = $(viewList).filter(function () {
                    return this.ViewID == $("#cboViews").val();
                });
                cols = (cols && cols.length > 0 ? cols[0] : null);
                createGridCols(f.find(".gridTable"), cols.Cols);
                f.data("@FieldProp_ViewID", $("#cboViews").val())
            }
            else {
                cols = $(viewList).filter(function () {
                    return this.ViewID == f.data("@FieldProp_ViewID");

                });
                cols = (cols && cols.length > 0 ? cols[0] : null);
            }
            var found = false;
            $("#colList").find("input").each(function () {
                var c = f.find(".gridCell[data--name=" + $(this).attr("value") + "]").setDisplay($(this).checked()).data("Hidden", !$(this).checked());
                if (!c.exists()) {
                    found = true;
                    c = _addGridCols(f.find(".gridTable"), cols.Cols, $(this).attr("value"));
                    c.setDisplay($(this).checked()).data("Hidden", !$(this).checked());
                }
            })
            if (found)
                _makeResizableCols(f.find(".gridTable"));
            f.data("@FieldProp_EntityID",$("#txtGridEnt").attr("entityid"))
            f.data("@FieldProp_Filter", $("#txtGridEnt").data("FieldProp_Filter"));
            f.data("@FieldProp_ApplyFilter", !$("#chkAutoMap").checked());
        }
    }
    if (f.data("@Type") == "Window") {
        f.data("@FieldProp_Url",$("#txtUrl").val());
    }
    if (f.data("@Type") == "Document" || f.data("@Type") == "PDF" || f.data("@Type") == "Spread") {
        f.data("@FieldProp_FileFieldId", $("#ddlDocField").val());
    }
    if (f.data("@Type") == "Table") {
        f.data("@FieldProp_TableBorder", $("#ddlTableBorder").val());
    }
    if (f.data("@Type") == "Menu") {
        f.removeClass("VerticalMenu").removeClass("HorizontalMenu").addClass($("#ddlMenuDirection").val()+"Menu");
    }
    if (f.data("@Type") == "Button") {
        f.data("@FieldProp_ButtonStyle", $("#cboButtonStyle").val());
        f.removeClass("linkBtn");
        if($("#cboButtonStyle").val()=="Link")
            f.addClass("linkBtn");
    }
    if (f.data("@Type") == "Label" || f.data("@Type") == "RelatedField"){
        var s=$("#cboLabelStyle").val();
        f.data("@FieldProp_LabelStyle", s);
        $("#cboLabelStyle").find("option").each(function(){f.removeClass($(this).val());});
        f.addClass(s);
        var style="";
        if (s == "") {
            style += ($("#chkBold").checked() ? "font-weight:bold;" : "");
            style += ($("#chkItalic").checked() ? "font-style:italic;" : "");
            style += ($("#chkUnderline").checked() ? "text-decoration:underline;" : "");
            style += ($("#txtBgColor").val() == "" ? "" : "background-color:" + $("#txtBgColor").val() + ";");
            style += ($("#txtForeColor").val() == "" ? "" : "color:" + $("#txtForeColor").val() + ";");
            style += "font-size:" + $("#cboFontSize").val() + ";"
            style += ($("#cboFontFamily").val() == "Verdana" || $("#cboFontFamily").val() ==""? "" : "font-family:" + $("#cboFontFamily").val() + ";");
          
        }
        var item = $("#cboLabelStyle").selectedItem();
        if (item && item.attr("fz") == "1")
            style = "font-size:" + $("#cboFontSize").val() + ";"
        f.find(".field-title").attr("style", style);
        f.data("@FieldProp_Icon", $("#spnIcon").val());
        f.find(".field-icon").html(f.data("@FieldProp_Icon"));
    }
    if (f.data("@Type") == "Label") {
        var forId = $.defaultVal($("#lnkForField").data("FieldID"), "");
        if (!$.isEmpty(forId)) {
            var tgt = $("#" + forId);
            var inf = _getFieldInfo(tgt);
            itemTitle(f, tgt.data("@FieldProp_TitleOR") == true ? tgt.find(".field-title").html() : inf.DisplayName);
            f.find(".field-title").attr("class", "field-title " + forId);
        }
        else
            f.find(".field-title").attr("class", "field-title");
        f.data("@FieldProp_LabelFor", forId);

    }
    if (f.data("@Type") == "Line")
        f.data("@FieldProp_LineWidth", $("#cboLine").val());

    f.removeClass("hasEvent");
    if (($("#txtFieldOnLoad").val() + $("#txtFieldOnRender").val() + $("#txtFieldOnSave").val() + $("#txtFieldOnValid").val() + $("#txtFieldOnChange").val() + $("#txtFieldOnClick").val()).Trim() != "")
        f.addClass("hasEvent");
    
   
   
    $("#divSettings").HideModal();


}



function PageMethodSuccess(data) {
    $.Notify(false);
    if (data["Type"] == "SaveLayout") {
        if (data["Locked"]) {
            alert("Layout is locked by another user")
            return;
        }
        LayoutID = data["@LayoutID"];
        $("#lblTitle").html($("#txtLayoutTitle").val());
        $('#formProperties').HideModal()
    }
    else if (data["Type"] == "PreviewLayout") {
        window.open("../main/ui.aspx?PwM=E&EID=" + $.QS("EID"));
    }
}
function PageMethodError() {
    $.Notify({ Message: "Error Occured.", NotifyOnly: true });
}

function getLayoutXml() {

    var h = $("#headerPanel"), f = $("#footerPanel"), m = $("#middlePanel"), l = $("#leftPanel"), c = $("#centerPanel"), r = $("#rightPanel");
    var layout = "<Layout Version=\"2\" AllowResizeH=\"" + ($("#chk6").checked() ? 1 : 0) + "\" AllowResizeF=\"" + ($("#chk7").checked() ? 1 : 0) + "\" AllowResizeL=\"" + ($("#chk8").checked() ? 1 : 0) + "\" AllowResizeR=\"" + ($("#chk9").checked() ? 1 : 0) + "\" FixedLayout=\"" + ($("#chk5").checked() ? 1 : 0) + "\" ScriptId=\"" + $.defaultVal(ddlScriptResource.val() == "Ext" ? $("#txtExternalScript").val() + "," + $("#txtExternalScriptClass").val() : ddlScriptResource.val(), "") + "\" >";
    layout += "<Header Sizing=\"" + $.encodeXml(h.data("splitterSizing"), true) + "\" AllowResize=\"" + (h.data("allowResize") ? 1 : 0) + "\" PaneWidth=\"" + $.encodeXml(h.height(), true) + "\" DoNotRender=\"" + !$("#chk1").checked() + "\" >" + _getLayoutXml(h) + "</Header>";
    layout += "<Middle Sizing=\"" + $.encodeXml(m.data("splitterSizing"), true) + "\" AllowResize=\"" + (m.data("allowResize") ? 1 : 0) + "\" PaneWidth=\"" + $.encodeXml(m.height(), true) + "\" >";
    layout += "<Left   Sizing=\"" + $.encodeXml(l.data("splitterSizing"), true) + "\" AllowResize=\"" + (l.data("allowResize") ? 1 : 0) + "\" PaneWidth=\"" + $.encodeXml(l.width(), true) + "\" DoNotRender=\"" + !$("#chk4").checked() + "\" >" + _getLayoutXml(l) + "</Left>";
    layout += "<Center Sizing=\"" + $.encodeXml(c.data("splitterSizing"), true) + "\" AllowResize=\"" + (c.data("allowResize") ? 1 : 0) + "\" PaneWidth=\"" + $.encodeXml(c.width(), true) + "\"  >" + _getLayoutXml(c) + "</Center>";
    layout += "<Right  Sizing=\"" + $.encodeXml(r.data("splitterSizing"), true) + "\" AllowResize=\"" + (r.data("allowResize") ? 1 : 0) + "\" PaneWidth=\"" + $.encodeXml(r.width(), true) + "\" DoNotRender=\"" + !$("#chk3").checked() + "\" >" + _getLayoutXml(r) + "</Right>";
    layout += "</Middle>";
    layout += "<Footer Sizing=\"" + $.encodeXml(f.data("splitterSizing"), true) + "\" AllowResize=\"" + (f.data("allowResize") ? 1 : 0) + "\" PaneWidth=\"" + $.encodeXml(f.height(), true) + "\" DoNotRender=\"" + !$("#chk2").checked() + "\" >" + _getLayoutXml(f) + "</Footer>";
    if (!IsDependent) {
        layout += "<LayoutHtml TemplateID=\"" + $("#ddlTemplates").val() + "\" >" + $.encodeXml(Editors["txtLayout"].getValue()) + "</LayoutHtml>";
        var items = ""; $($("#lboScripts").getSelectionOrder()).each(function () { items += "<Item>" + this + "</Item>" });
        layout += "<LayoutScript><Variables>" + getVarXml('ifrExprEditor') + "</Variables><External>" + items + "</External><Internal>" + $.encodeXml($("#ifrExprEditor")[0].contentWindow.scriptEditor.getValue()) + "</Internal></LayoutScript>";
        items = ""; $($("#lboCss").getSelectionOrder()).each(function () { items += "<Item>" + this + "</Item>" });
        layout += "<LayoutCss><External>" + items + "</External><Internal>" + $.encodeXml(Editors["txtCss"].getValue()) + "</Internal></LayoutCss>";
        layout += "<ServerScript><Variables>" + getVarXml('ifrServerExprEditor') + "</Variables><Internal>" + $.encodeXml($("#ifrServerExprEditor")[0].contentWindow.scriptEditor.getValue()) + "</Internal></ServerScript>";
    }
    layout += "</Layout>";
    return layout;

}
function getscriptxml() {
    return "<Script><Variables>" + getVarXml() + "</Variables><Body>" + $.encodeXml($("#ifrExprEditor")[0].contentWindow.scriptEditor.getValue()) + "</Body></Script>"
}
function _getLayoutXml(node) {
    var xml = "";
    var nodes = node.children();
    nodes.each(function () {
        var n = $(this);        
        if (n.hasClass("wrapper")) {
            xml += "<row>" + _getLayoutXml(n) + "</row>";
        }
        else if (n.data("@Type")=="Field") {            
            xml += '<' + n.data("@Type") + commonXmlAttr(n) + getEventsAttr(n) + ' FieldBorders="' + $.defaultVal(n.data("@FieldProp_FieldBorders"), 0) + '" DefaultValue="' + $.encodeXml(n.data("@FieldProp_DefaultValue"), true) + '" Icon="' + $.encodeXml(n.find(".field-icon").html(), true) + '" >' + getCustomhtml(n) + '</' + n.data("@Type") + ">";
        }
        else if (n.data("@Type") == "Grid" && n.find(".noViewError").length <= 0) {

            xml += '<' + n.data("@Type") + commonXmlAttr(n) + ' ApplyFilter="'+(n.data("@FieldProp_ApplyFilter")?1:0)+'" ViewID="' + n.data("@FieldProp_ViewID") + '" ' + ($.isEmpty(n.data("@FieldProp_OnChange")) ? '' : ' OnChange="' + $.encodeXml(n.data("@FieldProp_OnChange"), true) + '"') + '><ColInfo>';
            n.find(".gridCell").each(function () {
                var th = $(this);
                xml += '<Cols Name="' + th.data("Name") + '" EntityPath="' + $.defaultVal(th.data("EntityPath"), "") + '" Hidden="' + (th.data("Hidden") || th.hasClass("hideCol") ? 1 : 0) + '" Width="' + th.children(".widthInd").html() + '" />';
            })
            xml += '</ColInfo>' + n.data("@FieldProp_Filter") + '</' + n.data("@Type") + '>';
        }
        else if (n.data("@Type")=="Label") {
            xml += '<' + n.data("@Type") + commonXmlAttr(n) + getEventsAttr(n) + ' LabelStyle="' + $.defaultVal(n.data("@FieldProp_LabelStyle"), "") + '" Icon="' + $.encodeXml(n.find(".field-icon").html(), true) + '" LabelCss="' + $.defaultVal(n.find(".field-title").attr("style"), "") + '" LabelFor="' + $.defaultVal(n.data("@FieldProp_LabelFor"), "") + '"  >' + getCustomhtml(n) + '</' + n.data("@Type") + ">";
        }
        else if (n.data("@Type") == "RelatedField") {
            xml += '<' + n.data("@Type") + commonXmlAttr(n) + getEventsAttr(n) + ' EntityPath="' + n.data("@EntityPath") + '" Icon="' + $.encodeXml(n.find(".field-icon").html(), true) + '" LabelStyle="' + $.defaultVal(n.data("@FieldProp_LabelStyle"), "") + '" LabelCss="' + $.defaultVal(n.find(".field-title").attr("style"), "") + '" >' + getCustomhtml(n) + '</' + n.data("@Type") + ">";
        }
        else if (n.data("@Type")=="Spacer") { 
            xml += '<' + n.data("@Type") + '  Id="' + n.data("@FieldName") + getEventsAttr(n) + '" Visibility="' + $.defaultVal(n.data("@FieldProp_Visibility"), "") + '" HtmlId="' + n.attr("id") + '" CssClass="' + $.defaultVal(n.data("@FieldProp_Class"), "") + '"   HiddenAdd="' + n.data("@FieldProp_HiddenAdd") + '"  HiddenEdit="' + n.data("@FieldProp_HiddenEdit") + '" Size="' + n.data("@Size") + '" />';
        }
        else if (n.data("@Type")=="Line") {        
            xml += '<' + n.data("@Type") + ' Id="' + n.data("@FieldName") + getEventsAttr(n) + '"  HtmlId="' + n.attr("id") + '" CssClass="' + $.defaultVal(n.data("@FieldProp_Class"), "") + '" Visibility="' + $.defaultVal(n.data("@FieldProp_Visibility"), "") + '" LineWidth="' + $.defaultVal(n.data("@FieldProp_LineWidth"), "") + '"   HiddenAdd="' + n.data("@FieldProp_HiddenAdd") + '"  HiddenEdit="' + n.data("@FieldProp_HiddenEdit") + '" />';
        }
        else if (n.data("@Type") == "Button") {
            xml += '<' + n.data("@Type") + ' ButtonStyle="' + $.defaultVal(n.data("@FieldProp_ButtonStyle"), "") + '"  IconOR="' + (n.data("@FieldProp_IconOR") == true) +'" Icon="'+$.encodeXml(n.find(".field-icon").html(),true)+'" '  + commonXmlAttr(n) + getEventsAttr(n) + ' />';
        }
        else if (n.data("@Type") == "HTML") {
            xml += '<' + n.data("@Type") + commonXmlAttr(n) +' >' + getCustomhtml(n) + '</' + n.data("@Type") + ">";
        }
        else if (n.data("@Type")=="GroupingPanel") {
            xml += '<' + n.data("@Type") + commonXmlAttr(n) + getEventsAttr(n) + ' NoBorders="' + $.defaultVal(n.data("@FieldProp_NoBorders"), 0) + '" >' + _getLayoutXml(n.children(".ui-content")) + '</' + n.data("@Type") + '>';
        }
        else if (n.data("@Type") == "Menu") {
            xml += '<' + n.data("@Type") + commonXmlAttr(n) + getEventsAttr(n) + ' Direction="' + (n.hasClass("VerticalMenu") ? "Vertical" : "Horizontal") + '" >' + getMenuXml(n.children(".menu-root")) + '</' + n.data("@Type") + '>';
        }
        else if (n.data("@Type") == "Table") {
            var cols = "<Cols>";
            n.children("table").children("colgroup").children().each(function (ind) { if (ind > 0) cols += '<Col Width="' + parseFloat($(this).css("width")) + '" />'; });
            cols += "</Cols>";
            xml += '<' + n.data("@Type") + commonXmlAttr(n) + getEventsAttr(n) + ' TableBorder="'+$.defaultVal(n.data("@FieldProp_TableBorder"),"allCells")+'" >' + cols + _getLayoutXml(n.children("table").children("TBODY")) + '</' + n.data("@Type") + '>';
        }
        else if (n.prop("tagName") == "TR" && !n.hasClass("colHeader")) {
            xml += '<TR CssClass="' + $.encodeXml(n.attr("cssclass"), true) + '" Id="' + $.encodeXml(n.attr("id"), true) + '" Height="' + parseInt(n.children(".rowHeader").getStyle("height")) + '" >' + _getLayoutXml(n) + '</TR>';
        }
        else if (n.prop("tagName") == "TD" && n.hasClass("table-cell")) {
            xml += '<TD CssClass="' + $.encodeXml(n.attr("cssclass"), true) + '" Id="' + $.encodeXml(n.attr("id"), true) + '" ' + (n.attr("colspan") / 1 > 1 ? ' ColSpan="' + n.attr("colspan") + '"' : '') + (n.attr("rowspan") / 1 > 1 ? ' RowSpan="' + n.attr("rowspan") + '"' : '') + (n.hasClass("_delCells") ? ' Deleted="1"' : '') + ' >' + _getLayoutXml(n) + '</TD>';
        }
        else if (n.data("@Type") == "Window") {
            xml += '<' + n.data("@Type") + commonXmlAttr(n) + getEventsAttr(n) + ' Url="' + $.encodeXml($.defaultVal(n.data("@FieldProp_Url"), ""), true) + '" >' + _getLayoutXml(n.children(".ui-content")) + '</' + n.data("@Type") + '>';
        }
        else if (n.data("@Type") == "Document" || n.data("@Type") == "PDF" || n.data("@Type") == "Spread") {
            xml += '<' + n.data("@Type") + commonXmlAttr(n) + getEventsAttr(n) + ' FileFieldId="' + $.encodeXml($.defaultVal(n.data("@FieldProp_FileFieldId"), ""), true) + '" ></' + n.data("@Type") + '>';
        }
        else if (n.data("@Type") == "UDF") {
            xml += '<' + n.data("@Type") + commonXmlAttr(n) + getEventsAttr(n) + ' ><!--UDF--></' + n.data("@Type") + '>';
        }
        else if (n.data("@Type") == "TabPanel") {
            if (!n.prev() || n.prev().data("@Type") != "TabPanel")
                xml += '<TabParent  HtmlId="' + generateUniquieId(null, "TabParent") + '" TabPosition="' + n.data("@FieldProp_TabPosition") + '" >';
            xml += '<' + n.data("@Type") + commonXmlAttr(n) + getEventsAttr(n) + ' >' + _getLayoutXml(n.children(".ui-content")) + '</' + n.data("@Type") + '>';
            if (!n.next() || n.next().data("@Type") != "TabPanel")
                xml += '</TabParent>';
        }
        else if (n.data("@Type") == "CollapsiblePanel") {
            if (!n.prev() || n.prev().data("@Type") != "CollapsiblePanel")
                xml += '<CollapsibleParent  HtmlId="' + generateUniquieId(null, "CollParent") + '">';
            xml += '<' + n.data("@Type") + commonXmlAttr(n) + getEventsAttr(n) + ' >' + _getLayoutXml(n.children(".ui-content")) + '</' + n.data("@Type") + '>';
            if (!n.next() || n.next().data("@Type") != "CollapsiblePanel")
                xml += '</CollapsibleParent>';
        }
        else {
            xml += '<' + n.data("@Type") + commonXmlAttr(n) + getEventsAttr(n) + ' >' + _getLayoutXml(n.children(".ui-content")) + '</' + n.data("@Type") + '>';
        }

    })
    return xml;

}

function getMenuXml(menu) {
    var xml = [];
    if (menu.length == 0)
        return "";
    menu.children(".menu-item").each(function () {
        var m = $(this);
        xml.push("<MenuItem IsGroup=\"" + (m.hasClass("menu-group") ? 1 : 0) + "\" Icon=\"" + $.encodeXml(m.children(".menu-icon").html(), true) + "\" Value=\"" + $.encodeXml(m.data("Value"), true) + "\" Id=\"" + $.encodeXml(m.attr("id"), true) + "\" CssClass=\"" + $.encodeXml(m.data("Css"), true) + "\" Title=\"" + $.encodeXml(m.children(".menu-title").text(), true) + "\" >");
        xml.push(getMenuXml(m.children(".menu-ctr"))); xml.push("</MenuItem>");
    });
    return xml.join("");
}
function commonXmlAttr(n) {
    var inf = {}; 
    if (n.data("@Type") == "Field") 
         inf = _getFieldInfo(n);
    var xml = ' Id="' + (n.data("@Type") == "Grid" ? n.data("@FieldProp_EntityID") : n.data("@FieldName")) +
        '" HtmlId="' + n.attr("id") +
        '" Size="' + n.data("@Size") +
        '" TitleOR="' + (n.data("@FieldProp_TitleOR") == true) +
        '" Title="' + $.encodeXml(itemTitle(n), true) +
        '" ToolTipOR="' + (n.data("@FieldProp_ToolTipOR") == true) +
        '" ToolTip="' + $.encodeXml(n.data("@FieldProp_ToolTip"), true) +
        '" CssClass="' + $.defaultVal(n.data("@FieldProp_Class"), "") +
        '" Visibility="' + $.defaultVal(n.data("@FieldProp_Visibility"), "") +
        '" Mandatory="' + n.data("@FieldProp_Mandatory") +
        '" HiddenAdd="' + n.data("@FieldProp_HiddenAdd") +
        '" DisabledAdd="' + n.data("@FieldProp_DisabledAdd") +
        '" HiddenEdit="' + n.data("@FieldProp_HiddenEdit") +
        '" DisabledEdit="' + n.data("@FieldProp_DisabledEdit") +
        '" TextAlign="' + n.data("@FieldProp_TextAlign") +
        '" Dock="' + $.defaultVal(n.data("@FieldProp_Dock"), "Left") +
        '" LabelPosition="' + n.data("@FieldProp_LabelPosition") +
        '" EnableCustomHtml="' + $.defaultVal(n.data("@FieldProp_EnableCustomHtml"),false) + '" ';
    if (n.hasClass("container") || n.hasClass("grid") || inf.DataType == "RichText" || inf.DataType == "Multiline") {
        xml += ' CtrHeight="' + $.defaultVal(n.data("@FieldProp_CtrHeight"), "") + '" ';
        xml += ' CtrFixHeight="' + $.encodeXml($.defaultVal(n.data("@FieldProp_CtrFixHeight"), ""), true) + '" ';
    }
    if (n.data("@Type") == "Field") {       
        if (inf && inf.DataType == "ImgPreview")
            xml += ' ImgHt="' + $.defaultVal(n.data("@FieldProp_ImgHt"), 0) + '" ImgWd="' + $.defaultVal(n.data("@FieldProp_ImgWd"), 0) + '" ';
        if (inf && (inf.DataType.toLowerCase() == "singleselect" || inf.DataType.toLowerCase() == "multiselect"))
            xml += ' LookupCode="' + $.defaultVal(n.data("@FieldProp_LookupCode"),"") + '" ';
    }
    return xml;
}

function getEventsAttr(n) {
    var xml = ($.isEmpty(n.data("@FieldProp_OnLoad")) ? '' : ' OnLoad="' + $.encodeXml(n.data("@FieldProp_OnLoad"), true) + '"') +
                ($.isEmpty(n.data("@FieldProp_OnRender")) ? '' : ' OnRender="' + $.encodeXml(n.data("@FieldProp_OnRender"), true) + '"') +
                ($.isEmpty(n.data("@FieldProp_OnSave")) ? '' : ' OnSave="' + $.encodeXml(n.data("@FieldProp_OnSave"), true) + '"') +
                ($.isEmpty(n.data("@FieldProp_OnValid")) ? '' : ' OnValid="' + $.encodeXml(n.data("@FieldProp_OnValid"), true) + '"') +
                ($.isEmpty(n.data("@FieldProp_OnChange")) ? '' : ' OnChange="' + $.encodeXml(n.data("@FieldProp_OnChange"), true) + '"') +
                ($.isEmpty(n.data("@FieldProp_OnClick")) ? '' : ' OnClick="' + $.encodeXml(n.data("@FieldProp_OnClick"), true) + '"');
    return xml;
}

function getCustomhtml(n) {
    if (n.data("@FieldProp_EnableCustomHtml"))
        return '<CustomHtml  TemplateID="' + $.encodeXml(n.data("@FieldProp_CustomTemplateID"),true) + '" >' + $.encodeXml(n.data("@FieldProp_CustomHtml")) + '</CustomHtml>'
    return "";
}
function itemTitle(f, title) {
    var t;
    //if (f.data("@Type") == "RelatedField")
    //    return "";
    if (f.data("@Type") == "Table")
        t = f.children(".ui-title");
    else if (f.data("@Behaviour") == "Field" && f.data("@Type") != "GroupingPanel")
        t = f.find(".field-title");
    else if (f.data("@Type") == "Grid")
        t = f.children().filter(".ui-title");
    else {
        if (f.data("@Type") == "GroupingPanel")
            t = f.node(0).node(0);
        else if (f.data("@Type") == "Window")
            t = f.find(".ui-title");
        else {
            t = f.node(0).find(".ui-title");
            t = (t.length > 0 ? t : f.find(".ui-title"));
        }
    }
    if (f.data("@Type") == "Field") {
        if (title || title == "") {
            t.removeClass("blank-title");
            if (!$("#chkFieldTitle").checked())
                title = _getFieldInfo(currentEditingField).DisplayName;
        }
        if (title == "") {
            t.addClass("blank-title");
            title = _getFieldInfo(currentEditingField).DisplayName;
        }
       
    }
    else if (f.data("@Type") == "Button") {
        if (title || title == "") {
            if (!$("#chkFieldTitle").checked())
                title = _getFieldInfo(currentEditingField).DisplayName;
        }
    }
    if (title || title == "") {
        t.text(title);
    }


    return (t && t.exists() && !t.hasClass("blank-title") ? t.text() : "");
}

function getVarXml(id) {
    VariablesList = $("#"+id)[0].contentWindow.VariablesList;
    return $("#"+id)[0].contentWindow.GetVarXml(VariablesList);   
}
function deleteField(btn) {
    var f = $(btn).closest(".layoutObject");

    if (IsDependent) {
       
        f.data("@FieldProp_HiddenAdd", 1);
        f.data("@FieldProp_HiddenEdit", 1);
        f.addClass("ui-hidden");
        return;
    }
    if (!confirm("Delete " + f.data("@Type") + ' "' + f.attr("id") + '" ?'))
        return;
    var opt = $("#divOptionMenu");
    var item = opt.parent();
    var wrapr = item.parent();
    item.remove();
    $(document.body).append(opt.hide());
    checkWrapperContents(wrapr);
}




var specialFields = [
    { DisplayName: "Table", Type: "Table", Size: "2x4", IsContainer: true, HighlightEdge: "T,B" },
    { DisplayName: "Label", Type: "Label", Size: "0x1", IsContainer: false, Behaviour: "Field" },
    //{ DisplayName: "Layout Panel", Type: "ContentPane", Size: "2x2", IsContainer: true, HighlightEdge: "T,B,L,R" },
    //{ DisplayName: "Vertical Panel", Type: "VerticalPane", Size: "2x2", IsContainer: true, HighlightEdge: "R,L" },
    //{ DisplayName: "Horizontal Panel", Type: "HorizontalPane", Size: "2x2", IsContainer: true, HighlightEdge: "T,B" },
    { DisplayName: "Grouping Panel", Type: "GroupingPanel", Size: "2x4", IsContainer: true, HighlightEdge: "T,R,B,L", Behaviour: "Field" },
    { DisplayName: "Tab Panel", Type: "TabPanel", Size: "2x2", IsContainer: true, HighlightEdge: "T,B" },
    { DisplayName: "Collapsible Panel", Type: "CollapsiblePanel",  Size: "2x2", IsContainer: true, HighlightEdge: "T,B" },
    { DisplayName: "Blank Space", Type: "Spacer",  Size: "2x1", IsContainer: false, Behaviour: "Field" },
    { DisplayName: "Line", Type: "Line",  Size: "2x1", IsContainer: false },       
    { DisplayName: "Window", Type: "Window", Size: "2x4", IsContainer: true, HighlightEdge: "T,B" },
    { DisplayName: "PDF Viewer", Type: "PDF", Size: "2x4", IsContainer: true, HighlightEdge: "T,B" },
    { DisplayName: "Document", Type: "Document", Size: "2x4", IsContainer: true, HighlightEdge: "T,B" },
    { DisplayName: "SpreadSheet", Type: "Spread", Size: "2x4", IsContainer: true, HighlightEdge: "T,B" },
    { DisplayName: "HTML Content", Type: "HTML", Size: "1x1", IsContainer: false, HighlightEdge: "T,R,B,L", Behaviour: "Field" },
    { DisplayName: "Menu", Type: "Menu", Size: "2x4", IsContainer: true, HighlightEdge: "T,B" },
    { DisplayName: "UDF", Type: "UDF", Size: "2x4", IsContainer: true, HighlightEdge: "T,B" },
];

function activateField(f){
    f.parent().children().removeClass("selected");f.addClass("selected");
}
function loadFields() {
    var divList = $("#fieldList");
    if (IsDependent) {
       divList.hide();
       $("#pagePanel").css("margin-left", 0);
       
    }
    
    var item;
    for (var i = 0; i < dbFields.length; i++) {
        var f = dbFields[i];
        item = $("<div id=" + f["ID"] + " class='field inlineField'>" + f["DisplayName"] + "</div>");        
       
        item.data("@Type", $.defaultVal(f["Type"], "Field"));
        item.data("@FieldName", f["ID"]);
        item.data("@Size", $.defaultVal(f["Size"], "1x1"));
        item.data("@Behaviour", "Field");
        item.data("@IsField", true);
        item.data("@Object", true);
        item.data("@HighlightEdge", "T,R,B,L");

        if (f["Type"] == "Grid") {            
            item.data("@Behaviour", "");
            item.data("@HighlightEdge", "T,B");
            item.data("@ColInfo", f["Cols"]);
            item.attr("class","grid");
            divList.children("#grd").append(item);
        }
        else if (f["Type"] == "Button") {            
            item.data("@Size", $.defaultVal(f["Size"], "0x1"));
            divList.children("#btns").append(item);
        }
        else
            divList.children("#flds").append(item);
        item.on("click",function(){activateField($(this));})
    }
    for (var i = 0; i < specialFields.length; i++) {
        var f = specialFields[i];
        var cls = "special " + f["Type"] + " ";
        if (f["IsContainer"] == true)
            cls += "container ";
        if (f["Behaviour"] == "Field" && f["Type"] != "GroupingPanel")
            cls += "inlineField ";

        item = $("<div id=" + f["Type"] + " class='" + cls + "' title='" + f["DisplayName"] + "'><span></span></div>");
        item.data("@Type", f["Type"]);
        item.data("@FieldName", f["Type"]);
        item.data("@Size", f["Size"]);
        item.data("@Behaviour", f["Behaviour"]);
        item.data("@IsField",false);
        item.data("@IsContainer", f["IsContainer"]);
        item.data("@IsSpecial", true);
        item.data("@Object", true);
        item.data("@HighlightEdge", ($.isEmpty(f["HighlightEdge"]) ? "T,R,B,L" : f["HighlightEdge"]));
        $("#specialControls").append(item);
    }
    var relatedField = $("<span id='RelatedField' style='display:none'></span>");   
    relatedField.data("@Type", "RelatedField");
    relatedField.data("@RelatedField", true);    
    relatedField.data("@Size", "0x1");
    relatedField.data("@Behaviour", "Field");
    relatedField.data("@IsField", true);
    relatedField.data("@Object", true);
    relatedField.data("@HighlightEdge", "T,R,B,L");
    $("#specialControls").append(relatedField);
}


function showRenderList() {
    $("body").ShowPopup({ url: "Layout_View.aspx?_ns=1&lt=Control", height: 350, width: 550, zIndex: 4000 });
}

function updateRenderList(data) {
    var ddl=$("#ddlRenderList");
    var sel = ddl.val();
    ddl.empty();
    ddl.append("<option value=''>Design New</option>")
    for (var i = 0; i < data.length; i++)
        ddl.append("<option value='" + data[i].ID + "'>" + data[i].Name + "</option>");
    ddl.val(sel);
    ddl.trigger("chosen:updated");
}
