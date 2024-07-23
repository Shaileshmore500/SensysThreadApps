var PropertyEditorList = [];
var currentHoveredConnection = null;
var currentlyDragging = null;
var UsedActivities = [];
var WFVariables = [];
var WFFormulaes = [];
var WFConnections = [];
var WorkflowType = "";
var OnDemandWF = false;
var validDropZoneCtr = null;
var trackingMode = false;
var trackStates = "";
var debugData = [];
var WorkflowTrackingData = {};

var DataTypes = [
    { Type: "String", Text: "", Title: "" },
    { Type: "Int32", Text: "", Title: "" },
    { Type: "Boolean", Text: "", Title: "" },
    { Type: "DateTime", Text: "", Title: "" },
    { Type: "Double", Text: "", Title: "" },
    { Type: "Byte", Text: "", Title: "" },
    { Type: "ErpEntity", Text: "", Title: "" },
    { Type: "List", Text: "", Title: "" },
];

var DefnList = [];


var StartStage = {
    Name: "StartWF",
    Text: "Start",
    Title: "Start",
    Type: "Item",
    Inputs: [],
    Outputs: [],
    Category: "H",
    Location: {X:50,Y:50}
};
var StopStage = {
    Name: "StopWF",
    Text: "Stop",
    Title: "Stop",
    Type: "Item",
    Inputs: [],
    Outputs: [],
    Category: "H",
    Location: {X:450,Y:50}
};

function GetPropEditor(propName) {
    propName = (propName instanceof $ ? propName.attr("id") : propName);
    var result = $(PropertyEditorList).filter(function () {
        return $.defaultVal(this.PropertyName,"").toUpperCase() == propName.toUpperCase();
    });
    return (result && result.length > 0 ? result[0] : null);
}
function GetPropEditorData(propName) {
    var p = GetPropEditor(propName);
    if (p && p instanceof DefaultPropEditor)
        return $("#" + p.ReferenceID).find(".txt").val();
    else
        return (p && !$.isEmpty(p.VarData) ? p.VarData : "");
}
function GetDefn(defnName) {
    var result=$(DefnList).filter(function () {
        return this.Name.toUpperCase() == defnName.toUpperCase();
    });
    return (result && result.length > 0 ? result[0] : null);
}
function GetInputDefn(defn,inputName) {
    var result = $(defn.Inputs).filter(function () {
        return this.Name == inputName;
    });
    return (result && result.length > 0 ? result[0] : null);
}
function GetOutputDefn(defn,outputName) {
    var result = $(defn.Outputs).filter(function () {
        return this.Name == outputName;
    });
    return (result && result.length > 0 ? result[0] : null);
}
function GetVarDefn(varName) {
    if ($.isEmpty(varName))
        return null;
    var defn = null;
    $("#divVariableList").children().each(function () {
        var d = $(this).data("VarDefn");
        if (d.Name  == varName) {
            defn = d;
            return false;
        }

    })
    return defn;
}
function GetVariableList(opt) {
    var arr = [];
    var def = { DataType: "", Name: "" };
    opt = $.extend(def, opt);
    $("#divVariableList").children().each(function () {
        var d = $(this).data("VarDefn");
        if (($.isEmpty(opt.Name) && $.isEmpty(opt.DataType))
                || (!$.isEmpty(opt.Name) && opt.Name.toUpperCase() == d.Name.toUpperCase())
                || (!$.isEmpty(opt.DataType)
                && (
                    opt.DataType.toUpperCase() == d.DataType.toUpperCase() ||
                    opt.DataType.toUpperCase() == "OBJECT" ||
                    opt.DataType.toUpperCase() == "DYNAMIC" ||
                    (opt.DataType.toUpperCase() == "LIST:%" && d.DataType.toUpperCase().indexOf("LIST:") > -1) ||
                    (opt.DataType.toUpperCase() == "SIMPLE" && (d.DataType.toUpperCase() == "STRING" || d.DataType.toUpperCase() == "INT32" || d.DataType.toUpperCase() == "BOOLEAN" || d.DataType.toUpperCase() == "DATETIME" || d.DataType.toUpperCase() == "DOUBLE"))
                   )
                )
           )
            arr.push({ Name: d.Name, DataType: d.DataType, EntityID: d.EntityID ,});

    })
    return arr;
}

function GetLetterList() {
    var list = [];
    $("#tblLetters>TBODY").find("TR").each(function () { list.push({ Name: $(this).node(0).find("A").html(), ID: $(this).attr("ltrid") }); })
    return list;
}


var wfItemOverlays = [["Arrow", { width: 15, length: 15, location: 1, id: "arrow" }]];
var trackConnectorStyle = { strokeStyle: "#F00", lineWidth: 2, outlineColor: "transparent", outlineWidth: 0 };
var defaultConnectorStyle = { strokeStyle: "#5c96bc", lineWidth: 2, outlineColor: "transparent", outlineWidth: 0 };
var selectedConnectorStyle = { strokeStyle: "#24E014", lineWidth: 3, outlineColor: "#EDFFFA", outlineWidth: 0 };
var hoverConnectorStyle = { strokeStyle: "#ff00aa", lineWidth: 3, outlineColor: "#ff00aa", outlineWidth: 0 };

function PopulateWFItems() {    
    for (var i = 0; i < DefnList.length; i++) {
        var defn = DefnList[i];
        var cat = defn.Category;       
        var item = $("<a class='wfItem " + defn.Name + (defn.Disabled ? " wfdisabled" : "")+"' title='" + defn.Title.Replace("'", "\'") + "' href='javascript:void(0)'>" + $.defaultVal(defn.Text, defn.Name) + "</a>");
        item.data("WfType", defn.Name);
        if (defn.Hidden == true)
            item.setDisplay(false);
        $("#divAction_" + cat).append(item);
        if (!defn.Disabled)
            makeDraggable(item);
    }

    var item = $("<a class='wfItem Debug' title='' href='javascript:void(0)'>Debug</a>");
    item.data("WfType", "Debug");
    $("#divAction_A").append(item);
    item.draggable({
        appendTo: $(document.body),
        helper: function (e) {           
            return $("<div class='debugNode'></div>");
        },
        stop: function (e, ui) { return;}
    });
}
function makeDraggable(item) {
    item.draggable({
        appendTo: $(document.body),
        helper: function (e) {
            var defn = $(e.target).data("WfType");
            var h = $("<div class='" + $(e.target).attr("class") + " dragNode'></div>");
            if ($("#divForEachCtr").isVisible())
                h.zIndex("100000");
            h.data("WfType", defn);
            return h;
        },
        stop: dragStop,
        drag: function (e, ui) { currentlyDragging = true;  }
    });
}



function dragStop(event, ui) {
    var foreach = $("#divForEachCtr");
    if (foreach.isVisible() && !validDropZoneCtr)
        return;
    var wfType = $(ui.helper).data("WfType");
    var defn = (wfType == "FORMULA" ? GetDefn("EvalFormula") : GetDefn($(ui.helper).data("WfType")));
    var item = $(ui.helper).clone().NewID(defn.Name).removeClass("dragNode").css("zIndex","");
    if (wfType == "FORMULA") item.addClass("EvalFormula");
    item.css({ top: $(ui.helper).offset().top - $("#divWorkArea").offset().top + $("#divWorkArea").scrollTop(), left: $(ui.helper).offset().left - $("#divWorkArea").offset().left + $("#divWorkArea").scrollLeft() });
    var data = { Name: defn.Name, Text: defn.Text, Title: "", Type: defn.Type };
    if (wfType == "FORMULA") {
        var f = $(event.target).data("WfDefinition");
        data = { Name: defn.Name, Text: f.Name, Title: "", Type: defn.Type, Inputs: { MethodName: '"' + f.Name + '"' } };
    }
    item.data("WfDefinition", data);
    
    if (foreach.isVisible()) {        
        AddToForEach(item,defn);
    }
    else {
        $("#divWorkArea").append(item);
        item.append("<div class='ep'></div>");
        if (defn.Name == "Binary")
            item.append("<div class='ep ep1'></div>");
        makeWFItem(item);
        if (currentlyDragging) {
            currentlyDragging = item;
            reconnectItems();
        }
    }
   
    ShowItemProps(item);
    repositionItem(item);
    currentlyDragging = null;
    currentHoveredConnection = null;
    validDropZoneCtr = null;
}




function AddToForEach(item,defn) {
    var foreach = validDropZoneCtr
    foreach.append(item);
    item.append("<div style='overflow:hidden;height:100%;width:100%'><span class='wTitle'>" + defn.Text + "</span><span style='display:none' class='wAnno'>" + defn.Title + "</span></div>");
    item.css({ top: "", left: "" });
    item.on("dblclick", function () { ShowItemProps($(this)); });
    item.append($('<a class="close" style="position:absolute;right:3px;top:4px" onclick="if(confirm(\'Confirm Deletion\'))$(this).parent().remove()" title="Delete" href="javascript:void(0)">X</a>'))
    foreach.sortable("refresh");
}



function LoadData() {
    jsPlumb.setSuspendDrawing(true);
    LoadWfFormulaes();
    LoadWfVariables();
    LoadWfActivities();
    addDefaultItem();
    LoadConnections();
    jsPlumb.setSuspendDrawing(false, true);
    if (WorkflowTrackingData.HasException) {
        addDebugNode($("#" + WorkflowTrackingData.ExceptionState), WorkflowTrackingData.ExceptionMessage, true);
    }
}

function addDefaultItem() {
    var defn, item;
    defn = StartStage;
    if (!$("#StartStage").exists()) {

        item = $("<div id='StartStage' class='wfItem " + defn.Name + "'></div>");
        
        item.data("WfDefinition", defn);
        item.append("<div class='ep'></div>");
        var l = $.defaultVal( defn.Location,{X:50,Y:50});
        item.css({ top: l.Y, left: l.X, width: "50px" })
        $("#divWorkArea").append(item);
        makeWFItem(item);
        item.find(".wTitle").hide();

    }
    repositionItem($("#StartStage"))
    defn = StopStage;
    if (!$("#StopStage").exists()) {

        item = $("<div id='StopStage' class='wfItem " + defn.Name + "'></div>");       
        item.data("WfDefinition", defn);
        var l = $.defaultVal(defn.Location, { X: 50, Y: 450 });
        item.css({ top: l.Y, left: l.X, width: "50px" })
        $("#divWorkArea").append(item);
        makeWFItem(item);
        item.find(".wTitle").hide();
    }
    repositionItem($("#StopStage"))
}

function LoadWfActivities() {
    for (var i = 0; i < UsedActivities.length; i++) {
        var ua = UsedActivities[i];
        if (!ua)
            continue;
        var defn = GetDefn(ua.Name);
        if (ua.Name == StartStage.Name) {
            StartStage.Location = ua.Location;            
            continue;
        }
        else if (ua.Name == StopStage.Name) {
            StopStage.Location = ua.Location;            
            continue;
        }
        if (!defn)
            continue;
        
        var item = $("<div class='wfItem " + ua.Name + "'></div>"); 
        item.attr("id", ua.HtmlId);
        var data = { Name: ua.Name, Text: ua.Text, Title: ua.Title, Type: defn.Type, Inputs: ua.Inputs, Outputs: ua.Outputs };
        item.data("WfDefinition",data );
        item.append("<div class='ep'></div>");
        if (ua.Name == "Binary")
            item.append("<div class='ep ep1'></div>");
        item.css({ top: ua.Location.Y, left: ua.Location.X, width: ua.Size.W, height: ua.Size.H })
        $("#divWorkArea").append(item);
        if (!$.isEmpty(ua.Debug))
            addDebugNode(item, ua.Debug);
        makeWFItem(item);
        repositionItem(item);
    }
}

function LoadConnections() {
    for (var i = 0; i < WFConnections.length; i++) {
        var c = WFConnections[i];
        if (!c)
            continue;
        var p = { ConditionTitle: c.Title, ConditionFormula: c.Condition };
        if (!$("#" + c.Source).exists() || !$("#" + c.Target).exists())
            continue
        var conn = jsPlumb.connect({ source: c.Source, target: c.Target, overlays: (c.Binary ? binaryOverlays : ($.isEmpty(c.Title) ? wfItemOverlays : decisionOverlays)), parameters: p });
        var lbl = conn.getOverlay("label");
        if (lbl) {
            lbl.setLabel(c.Title);
            $(lbl.getElement()).attr("title", c.Condition);
        }
        if (trackStates.indexOf("," + c.Source + "," + c.Target + ",") > -1)
            conn.setPaintStyle(trackConnectorStyle);
    }
}

var selectedItem = null;
var decisionOverlays = [
    ["Arrow", { width: 15, length: 15, location: 1, id: "arrow" }],
    ["Label", {
        label: "Condition", id: "label", cssClass: "wfLabel", events: {
            dblclick: function (labelOverlay, originalEvent) {
                //window.asd = labelOverlay; window.zxc = originalEvent;
                //asd.data={a:"asd"} also see conn.setParameter 
                //jsPlumb.getAllConnections()[0].getOverlay("label").data

            }
        }
    }]];
var binaryOverlays = [
    ["Arrow", { width: 15, length: 15, location: 1, id: "arrow" }],
    ["Label", {
        label: "", id: "label", cssClass: "binaryLabel"
    }]];


jsPlumb.ready(function () {
    jsPlumb.setContainer($("#divWorkArea"));

    jsPlumb.Defaults.ReattachConnections = true;
    jsPlumb.bind("beforeDrop", function (e) {
        //var c = jsPlumb.getConnections({
        //    source: e.sourceId, target: e.targetId
        //});   

        return e.sourceId != e.targetId;

    });
    //jsPlumb.bind("beforeDetach", function (e) {

    //    return false;

    //});

    jsPlumb.bind("click", function (c) {
        if (!trackingMode) {
            deselectAll();
            c.setPaintStyle(selectedConnectorStyle);
        }
        selectedItem = c;
    });
    jsPlumb.bind("connection", function (info, e) {
       
        deleteOrphans();
        if (e) {
            var defn = $(info.source).data("WfDefinition");
            if (defn) {
                var baseDefn = GetDefn($(info.source).data("WfDefinition").Name);
                if (baseDefn.Type == "Decision" && info.connection.getParameter("ConditionFormula")==undefined) {
                    ShowConditionEditor(info.connection);
                }
                else if (baseDefn.Type == "Binary") {//window.asd=info
                    var conn = jsPlumb.getConnections({ source: info.source });
                    var lbl = "";
                    for (var i = 0; i < conn.length; i++) {
                        if (conn[i].id == info.connection.id)
                            continue;
                        if (conn[i].getOverlay("label"))
                            lbl = conn[i].getOverlay("label").getLabel();
                    }
                    info.connection.getOverlay("label").setLabel(lbl == "False" || $.isEmpty(lbl)  ? "True" : "False");
                }
            }
            
        }
        window.setTimeout(function(){
         
            info.connection.bind("mouseover", function (conn, e) {
                currentHoveredConnection = conn;
                if (currentlyDragging)
                    conn.setPaintStyle(hoverConnectorStyle);
            });
            info.connection.bind("mouseout", function (conn, e) {
                currentHoveredConnection = null;
                if (currentlyDragging)
                    conn.setPaintStyle(defaultConnectorStyle);
            });
            info.connection.bind("mouseup", function (conn, e) {
                reconnectItems();
            });
        },1000);

    });
    jsPlumb.bind("dblclick", function (connection, originalEvent) {
        var lbl = connection.getOverlay("label");
        if (lbl && $(lbl.getElement()).hasClass("wfLabel")) {
            ShowConditionEditor(connection);
            deselectAll();
        }
    });
    //window.setTimeout(function () { LoadData(); }, 1000);
    LoadData();
});

function deleteOrphans() {
    $("._jsPlumb_endpoint").each(function () { if (!$(this).hasClass("_jsPlumb_endpoint_connected")) $(this).remove(); })

}


var currentEditingConnection = null;
function ShowConditionEditor(conn) {
    currentEditingConnection = conn;    
    $("#txtConditionName").val($.defaultVal(conn.getParameter("ConditionTitle"),"Condition"))
    $("#txtCondition").val($.defaultVal(conn.getParameter("ConditionFormula"), ""));
    $("#divConditionEditor").ShowModal();
}

function SaveCondition() {
    var lbl = currentEditingConnection.getOverlay("label");
    lbl.setLabel($("#txtConditionName").val());
    $(lbl.getElement()).attr("title", $("#txtCondition").val());
    currentEditingConnection.setParameter("ConditionTitle", $("#txtConditionName").val());
    currentEditingConnection.setParameter("ConditionFormula", $("#txtCondition").val());
    $("#divConditionEditor").HideModal();
}

function reconnectItems() {
    if (currentHoveredConnection && currentlyDragging) {

        var c = currentHoveredConnection;
        var defn = currentlyDragging.data("WfDefinition").Type;
        var target = currentHoveredConnection.target;
        c.endpoints[1].setElement(currentlyDragging[0]);
        jsPlumb.repaintEverything();
        jsPlumb.connect({
            source: currentlyDragging[0],
            target: target,
            overlays: (defn.Name == "Binary" ? binaryOverlays : (defn.Type == "Decision" ? decisionOverlays : wfItemOverlays))
        });

        currentHoveredConnection = null; currentlyDragging = null;
    }
}

function makeWFItem(item) {

    var defn = item.data("WfDefinition");
    if (defn.Name != StartStage.Name && defn.Name != StopStage.Name)
        item.append("<div style='overflow:hidden;height:100%;width:100%'><span class='wTitle'>" + defn.Text + "</span><span class='wAnno'>" + defn.Title + "</span></div>");
    
    item.on("click", focusItem);
    if (defn.Name != StartStage.Name && defn.Name != StopStage.Name)
        item.on("dblclick", function () { ShowItemProps($(this)); });
    item.on("mousedown", ":not([class^=ep])", function (e) {
        currentlyDragging = null;
        var w = $(e.target).closest(".wfItem");
        var c1 = jsPlumb.getConnections({
            source: w[0]
        });
        var c2 = jsPlumb.getConnections({
            target: w[0]
        });
        if (c1.length <= 0 && c2.length <= 0)
            currentlyDragging = w;
        $(document).one("mouseup", { id: w.attr("id") }, function (e) { repositionItem($("#" + e.data.id)) });
    })
    item.on("mouseup", function (e) { currentlyDragging = null; })
    item.on("mousemove", function (e) {
        //console.log(e)
        if (currentHoveredConnection)
            currentHoveredConnection.setPaintStyle(defaultConnectorStyle);
        currentHoveredConnection = null;
    })
    item.droppable({
        accept: ".Debug",
        hoverClass: "wfDebugHover",
        drop: function (event, ui) {
            addDebugNode($(event.target));
        }
    });
    jsPlumb.draggable(item);
    if (defn.Name != StartStage.Name && defn.Name != StopStage.Name)
        item.resizable({
            aspectRatio: (defn.Name == "Binary" ? 1 / 1 : undefined),
            minHeight: 50,
            minWidth: 50,
            create: function (e, ui) { window.setTimeout(function () { e.target._katavorioDrag.setFilter(".ep,.ui-resizable-handle"); }, 250); },
            stop: function () { jsPlumb.repaintEverything(); }
        });
   if (defn.Name != StopStage.Name)
        jsPlumb.makeSource(item, {
            connectorOverlays:  (defn.Name == "Binary"?binaryOverlays:(defn.Type == "Decision" ? decisionOverlays : wfItemOverlays)),
            connectorStyle: defaultConnectorStyle,
            connector: ["Flowchart", { curviness: 20 }],
            maxConnections: (defn.Name == "Binary"?2:(defn.Type == "Decision" ? -1 : 1)),
            filter: ".ep",
            isSource: true,
            uniqueEndpoint: (defn.Type == "Decision" || defn.Type == "Binary" ? false : true),
            endpoint: "Blank",
            anchor: (defn.Name == "Binary" ? ["Left","Right"] : "Continuous"),
            paintStyle: { width: 35, height: 35, fillStyle: 'Transparent' }
        });

    if (defn.Name != StartStage.Name)
        jsPlumb.makeTarget(item, {
            filter: ".ep",
            isTarget: true,
            connectorStyle: defaultConnectorStyle,
            anchor: (defn.Name == "Binary" ? ["Top", "Bottom"] : "Continuous"),
            paintStyle: { radius: 6, width: 35, height: 35, fillStyle: 'Transparent' }
        });


}

function addDebugNode(item, data,isErr) {
    if (item.children(".debugNode").exists())
        return;
    var d = $("<div class='debugNode'><div>");
    item.append(d);
    if (data && !$.isEmpty(data))
        d.data("debug", data);
    d.on("dblclick", function (e) {
        e.stopPropagation();
        showEditor($(this));
    });
    if (isErr) {
        d.addClass("debugErr");
        d.attr("title", data);
    }
    if (trackingMode) {
        var r = $(debugData).filter(function () { return this.State == item.attr("id"); });
        r = r.length > 0 ? r[0] : null;
        if (r) {
            d.attr("title", r.Debug);
           
        }
    }
    d.on("click", focusItem);
   
}

function repositionItem(item) {
    var pos = item.position();
    var r = pos.left + item.outerWidth() + $("#divWorkArea").scrollLeft(); var b = pos.top + item.outerHeight() + $("#divWorkArea").scrollTop();
    var eR = $("#elemRight"); var eB = $("#elemBottom");
    if (pos.top < 0)
        item.css("top", "5px");
    if (pos.left < 0)
        item.css("left", "5px");

    if (r > $("#divWorkArea").outerWidth() - 50 && r > eR.position().left)
        eR.css("left", r + 100);
    if (b > $("#divWorkArea").outerHeight() - 50 && b > eB.position().top)
        eB.css("top", b+ 100);
}


function deleteSelectedItem() {
    if (trackingMode || $("#divFormulaEditor_ModalBackground").isVisible())
        return;
    if (typeof selectedItem._jsPlumb == "object") {
        if (confirm("Do you wish to delete this connection")) {
            jsPlumb.detach(selectedItem);
            selectedItem = null;
        }
    }
    else if (selectedItem) {
        if (selectedItem.hasClass("debugNode")) {
            if (confirm("Do you wish to delete this debug node?")) {
                selectedItem.remove();
                selectedItem = null;
            }
        }
        else {
            var d = selectedItem.data("WfDefinition");
            if (d.Name == StartStage.Name || d.Name == StopStage.Name)
                return;
            if (confirm("Do you wish to delete this object and all its connections")) {
                jsPlumb.select({ source: selectedItem }).detach();
                jsPlumb.select({ target: selectedItem }).detach();
                selectedItem.remove();
                selectedItem = null;
            }
        }
    }
}

function deselectAll() {  
    $("#divWorkArea").children(".wfItem").removeClass("selected").children(".debugNode").removeClass("selected");
    if (!trackingMode)
        jsPlumb.select().setPaintStyle(defaultConnectorStyle);
    selectedItem = null;
}
function focusItem(e) {   
    var item = $(e.target).hasClass("debugNode") ? $(e.target) : $(e.target).closest(".wfItem");
    deselectAll();
    item.addClass("selected");
    selectedItem = item;
    if (!trackingMode) {
        jsPlumb.select({ source: item }).setPaintStyle(selectedConnectorStyle);
        jsPlumb.select({ target: item }).setPaintStyle(selectedConnectorStyle);
    }
    e.stopPropagation();
}

var currentEditingActivity;
function ShowItemProps(elem) {
    deselectAll();
    currentEditingActivity = (elem.hasClass("wfItem") ? elem : elem.closest(".wfItem"));
    var defn = currentEditingActivity.data("WfDefinition");        
    if (defn.Name == "ForEach") {
        ShowForEachEditor(elem, defn);
        return;
    }
    var ed = $("#divActivityEditor");
    EntityHelper.Reset();
    EntityFieldHelper.Reset();
    $("#divEditorCtr").empty();
    $("#txtActName").val(defn.Text);
    $("#txtActDesc").val(defn.Title);
    LoadPropertyEditor(defn,elem);
    ed.ShowModal().css("top", '75px');

}
var currentForEachActivity;
function ShowForEachEditor(elem, defn) {
    currentForEachActivity = (elem.hasClass("wfItem") ? elem : elem.closest(".wfItem"));
    var ed = $("#divForEachEditor");
    $("#divForEachCtr").empty();
    $("#txtActName_FE").val(defn.Text);
    $("#txtActDesc_FE").val(defn.Title);
    var ddl = $('#ddlForEach').empty();
    var varList = GetVariableList({ DataType: "List:%" });
    $(varList).each(function () { ddl.append("<option>" + this.Name + "</option>") });
    ed.ShowModal().css("top", '75px');
    $("#divForEachEditor_ModalBackground").css({ left: $("#divWorkArea").offset().left, right: 0, width: "", top: $("#divWorkArea").offset().top, bottom: 0, height: "" });
    var data = defn.Inputs ? $.defaultVal(defn.Inputs["IteratorItem"], "\"item\"") : "\"item\"";
    $("#txtForEachVar").val(data);
    data = defn.Inputs ? defn.Inputs["ForEach"] : {};
    ddl.val(data.ForEachList);
    
    if (!$.isArray(data.Conditions) || data.Conditions.length == 0)
        data.Conditions = [{ Expr: "" }];
    

    for (var i = 0; i < data.Conditions.length; i++) {
        AddForEachCondition(data.Conditions[i]);
    }
    

}

function AddForEachCondition(data) {
    
    var ctr = $("<div class='foreachCondCtr'></div>");

    var cond = $("<div class='row foreachExpr'></div>");
    var lbl = $("<span style='width: 90px;color: #000;' class='lbl'>Condition : </span>");
    var input = $('<textarea rows="1" style="border: solid 1px #D5B88D;width: 270px;" class="txt"></textarea>');   
   
    cond.append(lbl);
    cond.append(input);   
    input.val($.defaultVal(data.Expr, ""))
    cond.append('<a class="expr" href="javascript:void(0)" onclick="showEditor($(this))">...</a>');    
    cond.append($('<a class="close" onclick="if(confirm(\'Confirm Deletion\'))$(this).closest(\'.foreachCondCtr\').remove()" title="Delete" href="javascript:void(0)">X</a>'));
    ctr.append(cond);
    var itemCtr = $("<div class='foreachCondItems'></div>");
    ctr.append(itemCtr);    
    $("#divForEachCtr").append(ctr);
    $("#divForEachCtr").sortable("refresh");
    validDropZoneCtr = itemCtr;
    itemCtr.droppable({
        accept: ".wfItem",
        hoverClass: "ForEachCtr-Highlight",
        over: function (event, ui) { validDropZoneCtr = $(event.target); },
        out: function (event, ui) { validDropZoneCtr = null; }
    });
    itemCtr.sortable();

    if ($.isArray(data.WfItems)) {
        for (var i = 0; i < data.WfItems.length; i++) {
            var item=$("<div class='wfItem " + data.WfItems[i].Name + "'></div>");
            item.data("WfDefinition", data.WfItems[i]);
            AddToForEach(item, data.WfItems[i]);
        }
    }
   
    
    validDropZoneCtr = null;
    return ctr;
}

function HidePropEditor(btn) {
    $(btn).closest('.formSettings').HideModal();
    EntityHelper.Reset();
    EntityFieldHelper.Reset();
    PropertyEditorList = [];
}


function LoadPropertyEditor(defn,elem) {
    PropertyEditorList = [];
    var baseDefn = GetDefn(defn.Name);
    var inputs = baseDefn.Inputs;
    var outPuts = baseDefn.Outputs;
    var edt = $("#divEditorCtr");
    edt.append("<div class='inputHeading'>Map Input Variables</div>");
    if (inputs) {
        for (var i = 0; i < inputs.length; i++) {
            var ip = inputs[i];
            if (ip.Hidden == true)
                continue;
            var custom = false;
            var value = (defn.Inputs ? defn.Inputs[ip.Name] : null);
            if ($.isEmpty(value) && !$.isEmpty(ip.DefaultValue))
                value = ip.DefaultValue;
            var prop = (!$.isEmpty(ip.EditorType) && typeof window[ip.EditorType] == "function" ? (custom = true, new window[ip.EditorType](ip, value, defn)) : new DefaultPropEditor(ip, value, defn));
            PropertyEditorList.push(prop);
            
            var item = prop.RenderInputItem().                
                addClass("inputItem " + ip.Name + (custom ? " custom" : "")).
                data("__InputName", ip.Name);
            if (baseDefn.Name.toUpperCase() == "EVALFORMULA")
                item.hide();
            if (baseDefn.Name.toUpperCase() == "DECISION" && ip.Name.toUpperCase() == "STAGENAME" && $.isEmpty(value))
                item.find(".txt").val('"'+elem.attr("id")+'"');
                
            item.NewID("Input");
            prop.ReferenceID = item.attr("id");
            prop.PropertyName = ip.Name;
            edt.append(item);
            onPropertyRendered(prop, item);
        }
    }
    edt.append("<div class='outputHeading'>Map Output Variables</div>");
    if (outPuts) {
        for (var i = 0; i < outPuts.length; i++) {
            var op = outPuts[i];
            if (op.Hidden == true)
                continue;
            if (baseDefn.Name.toUpperCase() == "EVALFORMULA" && op.Name == "Result") {
                var dt = "String";
                $("#divFormulaList").children().each(function () { if ('"' + $(this).contents()[0].nodeValue + '"' == defn.Inputs["MethodName"]) { dt = $(this).data("WfDefinition").DataType; return false; } })
                op.DataType = dt;
            }
            var value = (defn.Outputs ? defn.Outputs[op.Name] : null);
            var prop = new DefaultPropEditor(op,value);            
            edt.append(prop.RenderOutputItem().addClass("outputItem").data("Name", op.Name));
        }
    }
    edt.children(".inputHeading").setDisplay(baseDefn.Name.toUpperCase()!="EVALFORMULA" && edt.children(".inputItem").exists());
    edt.children(".outputHeading").setDisplay(edt.children(".outputItem").exists());
}



function SaveForEachData() {
    var defn = currentForEachActivity.data("WfDefinition");
    defn.Text = $("#txtActName_FE").val();
    defn.Title = $("#txtActDesc_FE").val();
    defn.Inputs = {}; defn.Outputs = {};
   
    var data = {};
    data.Conditions = [];
    data.ForEachList = $('#ddlForEach').val();
    data.IteratorItem = $('#txtForEachVar').val();
    $("#divForEachCtr").children(".foreachCondCtr").each(function () {
        var c = { Expr: $(this).children(".foreachExpr").find(".txt").val() };
        c.WfItems = [];
        $(this).children(".foreachCondItems").find(".wfItem").each(function () {
            c.WfItems.push($(this).data("WfDefinition"));
        });
        data.Conditions.push(c);
    })

    defn.Inputs["ForEach"] = data;

    currentForEachActivity.data("WfDefinition", defn);
    currentForEachActivity.find(".wTitle").html(defn.Text)
    currentForEachActivity.find(".wAnno").html(defn.Title);
    $("#divForEachEditor").HideModal();

}

function SaveActivityData() {
    var defn = currentEditingActivity.data("WfDefinition");
    var baseDefn = GetDefn(defn.Name);
    defn.Text = $("#txtActName").val();
    defn.Title = $("#txtActDesc").val();
    var inp = {};
    for (var p in defn.Inputs) {
        var inputDefn = GetInputDefn(baseDefn, p);
        if (inputDefn.Hidden && inputDefn.DefaultValue == "#UID#" && !$.isEmpty(defn.Inputs[p]))
            inp[p] = defn.Inputs[p];
    }
    defn.Inputs = inp; defn.Outputs = {};

    $(PropertyEditorList).each(function () {
        var value = null;
        var input = $("#" + this.ReferenceID);        
        if (typeof this.SaveData == "function")
            value = this.SaveData(input);
        else
            value = $.defaultVal(this.VarData, "");
        defn.Inputs[this.PropertyName] = value;
    })

    $("#divEditorCtr").children(".outputItem").each(function () {
        var value = $(this).find(".txt").val();
        var name = $(this).data("Name");       
        if (value)
            defn.Outputs[name]=value;
    })
  
    currentEditingActivity.data("WfDefinition", defn);
    currentEditingActivity.find(".wTitle").html(defn.Text)
    currentEditingActivity.find(".wAnno").html(defn.Title);
    $("#divActivityEditor").HideModal();
    PropertyEditorList = [];
}
var guidValues=[]
function SaveXml() {
    guidValues = []
    var xml = [];
    xml.push("<Designer>")
    xml.push("\r\n")
    xml.push("<Nodes>");
    xml.push("\r\n")
    $("#divWorkArea").children(".wfItem").each(function () {
        var w = $(this);
        var defn = w.data("WfDefinition");
        var dbg = $.defaultVal(w.children(".debugNode").data("debug"), "");
        dbg = $.isEmpty(dbg) ? '' : ' Debug="'+$.encodeXml(dbg,true)+'" ';
        xml.push('<Node Name="' + $.encodeXml(defn.Name, true) + '" Text="' + $.encodeXml(defn.Text, true) + '" Title="' + $.encodeXml(defn.Title, true) + '" HtmlId="' + w.attr("id") + '" Height="' + w.height() + '" Width="' + w.width() + '" Top="' + (w.position().top + $("#divWorkArea").scrollTop()) + '" Left="' + (w.position().left + $("#divWorkArea").scrollLeft()) + '"' + dbg + '>');
        xml.push(serializeIO(defn,w));    
        xml.push('</Node>');
        xml.push("\r\n")
    })
    xml.push("</Nodes>")
    xml.push("\r\n")
    xml.push("<Connections>");
    xml.push("\r\n")
    $(jsPlumb.getAllConnections()).each(function () {
        var c = this;
        var lbl = c.getOverlay("label");
        var t = "";
        var bi = false;
        if (lbl && $(lbl.getElement()).hasClass("binaryLabel")) {
            bi = true;
            t = $.encodeXml($.defaultVal(lbl.getLabel(), ""), true);
        }
        else
            t = $.encodeXml($.defaultVal(c.getParameter("ConditionTitle"), ""), true);
        xml.push('<Connection Binary="' + (bi ? 1 : 0) + '" SourceHtmlId="' + c.sourceId + '" Title="' + t + '" TargetHtmlId="' + c.targetId + '" >');
        if (lbl && !bi)
            xml.push($.encodeXml($.defaultVal(c.getParameter("ConditionFormula"), "")));
        $("#divConditionEditor").HideModal();
        xml.push("</Connection>")
        xml.push("\r\n")
    })
    xml.push("</Connections>");
    xml.push("\r\n");

    xml.push("<Variables>");
    xml.push("\r\n")
    $("#divVariableList").children().each(function () {
        var d = $(this).data("VarDefn");
        if (!d || d.IsArgument || d.IsSysDefined)
            return true;
        xml.push('<Variable Name="'+$.encodeXml(d.Name,true)+'" Title="'+$.encodeXml(d.Title,true)+'" EntityID="'+$.encodeXml(d.EntityID,true)+'" DataType="'+$.defaultVal(d.DataType,"String")+'">'+$.encodeXml(d.DefaultValue)+'</Variable>');
        xml.push("\r\n");
    })
    xml.push("</Variables>");
    xml.push("\r\n");

    xml.push("<Formulaes>");
    xml.push("\r\n")
    $("#divFormulaList").children().each(function () {
        var d = $(this).data("WfDefinition");
        if (!d)
            return true;
        xml.push('<Formula Name="' + $.encodeXml(d.Name, true) + '" Description="' + $.encodeXml(d.Description, true) + '" DataType="' + $.encodeXml(d.DataType, true) + '">' + $.encodeXml(d.Script) + '</Formula>');
        xml.push("\r\n");
    })
    xml.push("</Formulaes>");
    xml.push("\r\n");


    xml.push("</Designer>")
    return xml.join("");
}

function serializeIO(defn,elem) {
    var xml = [];
    var baseDefn = GetDefn(defn.Name);
    if (!baseDefn)
        return "";
    xml.push("<Inputs>");
    for (var p in defn.Inputs) {
        var inputDefn = GetInputDefn(baseDefn, p);
        if (!inputDefn || (inputDefn.Hidden && inputDefn.DefaultValue!="#UID#"))
            continue;
        var mapping = " ";
        if (!$.isEmpty(inputDefn.GroupName) && !$.isEmpty(inputDefn.MappedTo))
            mapping = " Group=\"" + $.encodeXml(inputDefn.GroupName, true) + "\" MappedTo=\"" + $.encodeXml(inputDefn.MappedTo, true) + "\" ";
        var value = defn.Inputs[p];        
        if (!$.isEmpty(inputDefn.EditorType) && typeof window[inputDefn.EditorType] == "function" && typeof window[inputDefn.EditorType].SerializeData == "function") {
            var x = window[inputDefn.EditorType].SerializeData(inputDefn, value);
            if (x.indexOf("<Input") == 0) {
                x = "<Input " + mapping + x.substring(6);
                xml.push(x);
            }
        }
        else
            xml.push("<Input " + mapping + " Name=\"" + $.encodeXml(p, true) + "\" >" + $.encodeXml(value) + "</Input>");
        if (value == "#UID#")
            guidValues.push({ Id: elem.attr("id"), Prop: p });
    }
    if ($.isArray(baseDefn.Inputs)) {
        for (var i = 0; i < baseDefn.Inputs.length; i++) {
            var inputDefn = baseDefn.Inputs[i];
            if (!inputDefn.Hidden ||  (inputDefn.DefaultValue=="#UID#" && !$.isEmpty(defn.Inputs[inputDefn.Name] )))
                continue;
            var mapping = " ";
            if (!$.isEmpty(inputDefn.GroupName) && !$.isEmpty(inputDefn.MappedTo))
                mapping = " Group=\"" + $.encodeXml(inputDefn.GroupName, true) + "\" MappedTo=\"" + $.encodeXml(inputDefn.MappedTo, true) + "\" ";

            xml.push("<Input " + mapping + " Name=\"" + $.encodeXml(inputDefn.Name, true) + "\" >" + $.encodeXml(inputDefn.DefaultValue) + "</Input>");
            if (inputDefn.DefaultValue == "#UID#")
                guidValues.push({ Id: elem.attr("id"), Prop: inputDefn.Name });
        }
    }
    xml.push("</Inputs>");

    xml.push("<Outputs>");
    for (var p in defn.Outputs) {
        var outputDefn = GetOutputDefn(baseDefn, p);
        if (!outputDefn || outputDefn.Hidden)
            continue;
        var value = defn.Outputs[p];
        var mapping = " ";
        if (!$.isEmpty(outputDefn.GroupName) && !$.isEmpty(outputDefn.MappedTo))
            mapping = " Group=\"" + $.encodeXml(outputDefn.GroupName, true) + "\" MappedTo=\"" + $.encodeXml(outputDefn.MappedTo, true) + "\" ";
        xml.push("<Output " + mapping + " Name=\"" + $.encodeXml(p, true) + "\" >" + $.encodeXml(value) + "</Output>");
    }
    if ($.isArray(baseDefn.Outputs)) {
        for (var i = 0; i < baseDefn.Outputs.length; i++) {
            var outputDefn = baseDefn.Outputs[i];
            if (!outputDefn.Hidden)
                continue;
            var mapping = " ";
            if (!$.isEmpty(outputDefn.GroupName) && !$.isEmpty(outputDefn.MappedTo))
                mapping = " Group=\"" + $.encodeXml(outputDefn.GroupName, true) + "\" MappedTo=\"" + $.encodeXml(outputDefn.MappedTo, true) + "\" ";
            xml.push("<Output " + mapping + " Name=\"" + $.encodeXml(outputDefn.Name, true) + "\" >" + $.encodeXml(outputDefn.DefaultValue) + "</Output>");
        }
    }
    xml.push("</Outputs>");
    return xml.join("");
}




function createdefaults() {

}


function showEditor(a) {
    currentEditorSource = a.hasClass("debugNode") ? a : a.prev();
    $('#divEditor').show().dock("C", $("body"), true).css("top", 300).zIndex(3600);
    cEditor.focus();
    cEditor.setValue(currentEditorSource.hasClass("debugNode") ? $.defaultVal(currentEditorSource.data("debug"), "") : currentEditorSource.val());
}
function applyEditorValue() {
    if (currentEditorSource.hasClass("debugNode"))
        currentEditorSource.data("debug", cEditor.getValue());
    else
        currentEditorSource.val(cEditor.getValue());
    $('#divEditor').hide();
}


var currentEditorSource,currentEditingVariable;
function ShowVariableEditor(mode, variable) {
    
    $('#divVariableEditor>.row>.GreenButton').show().val(mode == "A" ? "Create Variable" : "Modify Variable");
    
    var wfVar = { Name: "", Title: "", DataType:"", DefaultValue:"" };
    currentEditingVariable = (variable ? (wfVar = variable.data("VarDefn"), variable) : null);
    $("#txtVName").val(wfVar.Name);
    $("#txtVDec").val(wfVar.Title);
    $("#txtVDefault").val(wfVar.DefaultValue);
    $("#cboDataTypes").val(wfVar.DataType.split(':')[0]).trigger("chosen:updated");    
    $("#cboSubDataType").val((wfVar.DataType.indexOf(":") > -1 ? ($("#cboSubDataType").parent().show(), wfVar.DataType.split(':')[1]) : ($("#cboSubDataType").parent().hide(), ""))).trigger("chosen:updated");
    ToggleVarEntityList($("#cboDataTypes"));
    if (wfVar.DataType.toUpperCase() == "ERPENTITY")
        EntityHelper.SelectItem(wfVar.EntityID);
    if (variable)
        $('#divVariableEditor').find(".GreenButton").setDisplay(!wfVar.IsArgument && !wfVar.IsSysDefined)

    $('#divVariableEditor').attr('Mode', mode).ShowModal();
    
}
function ToggleVarEntityList(ddl) {
    var r = ddl.closest(".row").next();
    if (r.hasClass('entityctr')) {
        r.setDisplay((ddl.val().toUpperCase() == "ERPENTITY"), "block");
        r.children('#spnVarEntityCtr').append(EntityHelper.GetEntityList().show());
    }
}
function SaveVariable() {
    var ed = $("#divVariableEditor");
    var list = $("#divVariableList");
    var wfVar = { Name: $("#txtVName").val(), Title: $("#txtVDec").val(), DataType: $("#cboDataTypes").val(), DefaultValue: $("#txtVDefault").val() };
    wfVar.DataType = (wfVar.DataType.toUpperCase() == "LIST" ? wfVar.DataType + ":" + $("#cboSubDataType").val() : wfVar.DataType);
    if (wfVar.DataType.toUpperCase() == "ERPENTITY")
        wfVar.EntityID = EntityHelper.GetValue();
    if (ed.attr("Mode") == "A") {      
        list.append(_createWfVar(wfVar));
    }
    else
        currentEditingVariable.data("VarDefn", wfVar).html(wfVar.Name);
    ed.HideModal();
    $("#divEditor").hide();
}

function _createWfVar(wfVar) {
    var c = "";
    if (!wfVar.IsArgument && !wfVar.IsSysDefined)
        c = "<a href='javascript:void(0)' class='close' style='position:absolute;right:1px;top:4px' onclick='DeleteVariable($(this).parent())'>X</a>";
    var a = $("<span>" + wfVar.Name + c+"</span>");
    a.data("VarDefn", wfVar);
    a.on("dblclick", function () { ShowVariableEditor("E", $(this)); })
    return a;
}
function DeleteVariable(v) {
    if (confirm('Confirm Deletion')) {
        v.remove();
    }
}
function LoadWfVariables() {    
    if (trackingMode) {
        $(document.body).append("<div id='divVariableList' style='display:none'></div>")
    }
    var list = $("#divVariableList");
    for (var i = 0; i < WFVariables.length; i++)
        if (WFVariables[i] && !WFVariables[i].Hidden)
            list.append(_createWfVar(WFVariables[i]));
}


function LoadWfFormulaes() {
    var list = $("#divFormulaList");
    for (var i = 0; i < WFFormulaes.length; i++)
        list.append(_createFormula(WFFormulaes[i]));
}
function ShowFormulaEditor(mode, variable) {
    $('#divFormulaEditor').attr('Mode', mode).ShowModal();
    $('#divFormulaEditor>.row>.GreenButton').val(mode == "A" ? "Create Formula" : "Modify Formula");
    $("#spnFType").html("[Return Type]");
    $("#spnFName").html("[Function Name]");
    $("#txtFrName").val("");
    $("#txtFrDec").val("");
    $("#cboFrDataTypes").val("").trigger("chosen:updated");
    $("#cboFrSubDataType").val("").trigger("chosen:updated");
    $("#cboFrSubDataType").parent().hide();
    frEditor.setValue("return null;");
    var wfVar = null;

    currentEditingVariable = (variable ? (wfVar = variable.data("WfDefinition"), variable) : null);
    if (wfVar) {
        $("#txtFrName").val(wfVar.Name);
        $("#txtFrDec").val(wfVar.Description);
        frEditor.setValue(wfVar.Script);
        var dt = wfVar.DataType;
        $("#cboFrDataTypes").val(dt.split(':')[0]).trigger("chosen:updated");
        $("#cboFrSubDataType").val((dt.indexOf(":") > -1 ? ($("#cboFrSubDataType").parent().show(), dt.split(':')[1]) : ($("#cboFrSubDataType").parent().hide(), ""))).trigger("chosen:updated");
        $("#spnFType").html(getReadableType(wfVar.DataType));
        $("#spnFName").html(wfVar.Name);
    }
}

function getReadableType(type) {
    if (type.indexOf(":")>-1)
        return type.Replace(":", "&lt;") + "&gt;";
    else
        return type;
}
function setFunctionReturnType() {
    var t = $('#cboFrDataTypes').val();
    var sub = (t.toUpperCase() == "LIST" ? $('#cboFrSubDataType').val() : "");
    $('#spnFType').html(t + (sub != "" ? '&lt;' + sub + '&gt;' : ""));
}

function SaveFormula() {
    var ed = $("#divFormulaEditor");
    var wfVar ={Name: $("#txtFrName").val(),Description: $("#txtFrDec").val(),DataType:$("#cboFrDataTypes").val() ,Script:frEditor.getValue()};
    wfVar.DataType = (wfVar.DataType.toUpperCase() == "LIST" ? wfVar.DataType + ":" + $("#cboFrSubDataType").val() : wfVar.DataType);
    if (ed.attr("Mode") == "A") {        
        $("#divFormulaList").append(_createFormula(wfVar));
    }
    else
        currentEditingVariable.data("WfDefinition", wfVar).html(wfVar.Name).attr("title", wfVar.Title);
    ed.HideModal();
}
function _createFormula(defn) {
    var a = $("<span class='wfItem " + defn.Name + "' title='" + defn.Description.Replace("'", "\'") + "' >" + defn.Name + "<a href='javascript:void(0)' class='close' style='position:absolute;right:1px;top:4px' onclick='DeleteVariable($(this).parent())'>X</a></span>");
    a.data("WfDefinition", defn);
    a.data("WfType","FORMULA")
    a.on("dblclick", function () { ShowFormulaEditor("E", $(this)); })    
    makeDraggable(a);
    return a;
}
function DeleteFormula(v) {
    if (confirm('Confirm Deletion')) {
        v.remove();
    }
}
function InvokePropFunc(ref, fn, data) {
    ref = ref ? ref : "";
    var prop = GetPropEditor(ref.split('.')[0]);
    if (ref.split('.').length > 1 && prop && prop[ref.split('.')[1]])
        prop = prop[ref.split('.')[1]];
    if (prop && typeof prop[fn] == "function")
        return prop[fn](data);
}






