
var EntryInfo = [];
var VariableList = [];
var VariablesList = [];
var DbReferences = [];
function showTab(n, a) {
    $("#divTabs").children("a").removeClass("selected"); $(a).addClass("selected");
    $("#divContents").children().hide();
    $("#divContents").node(n).show();
    if (resetHtml)
        showHtml();

    if (n > 0) {
        if (Editors[n - 1])
            Editors[n - 1].refresh();
        autoFormatEditor(Editors[n - 1]);
        resetHtml = false;
        if (n == 1)
            resetDesigner = true;
    }
    else {
        if (resetDesigner) 
            showDesigner(); 
        
        resetHtml = true;
        resetDesigner = false;
       
        $("#CustomCssStyle").remove();
        $("<style id='CustomCssStyle' type='text/css'>" + Editors[1].getValue() + "</style>").appendTo("head");
        
    }
    
    
}
resetHtml = true;
resetDesigner = false;

function showHtml() {
    var ed = Editors[0];
    var div = $("<div></div>");
    div.append($("#divDesigner").html().Trim());
    div.find(".entry").each(function () {
        var e = $(this);
        var entry = GetEntry(e.attr("id"));
        if (!entry)
            return true;
        var c1 = (entry.Settings ? $.defaultVal(entry.Settings.Css, "") : "");
        c1 = (c1 != "" ? " class=\"" + c1 + "\" " : "");
        var c2 = (entry.Settings ? $.defaultVal(entry.Settings.TitleCss, "") : "");
        c2 = (c2 != "" ? " class=\"" + c2 + "\" " : "");
        var c3 = (entry.Settings ? $.defaultVal(entry.Settings.DescriptionCss, "") : "");
        c3 = (c3 != "" ? " class=\"" + c3 + "\" " : "");
        var html = "<DL " + c1 + " type=\"" + entry.Type + "\" id=\"" + e.attr("id") + "\" variable=\"" + entry.VarName + "\"><DT " + c2 + ">" + entry.Title + "</DT><DD " + c3 + ">" + entry.Description + "</DD></DL>";
        $(this).replaceWith(html);
    });
    ed.setValue(div.html());
}
function autoFormatEditor(ed) {
    if (!ed)
        return;
    CodeMirror.commands["selectAll"](ed);
    var range = { from: ed.getCursor(true), to: ed.getCursor(false) }
    ed.autoFormatRange(range.from, range.to);
    ed.setCursor(0);
}
function showDesigner() {
    var ed = Editors[0];
    var div = $("<div></div>");
    div.append(ed.getValue());;
    div.find("DL").each(function () {
        var e = $(this);
        var entry = GetEntry(e.attr("id"));
        if (!entry)
            return true;
        var e1 = $("#divDesigner").find("#" + e.attr("id"));
        entry.Settings = (entry.Settings ? entry.Settings : {});
        entry.Settings.Css = $.defaultVal(e.attr("class"), "");
        e1.addClass(entry.Settings.Css)
        var t = e.children("DT");
        entry.Title = t.html().Trim();
        entry.Settings.TitleCss = $.defaultVal(t.attr("class"), "");
        e1.find(".spnTitle").addClass(entry.Settings.TitleCss).html(entry.Title);
        t = e.children("DD");
        entry.Settings.DescriptionCss = $.defaultVal(t.attr("class"), "");
        entry.Description = t.html().Trim();
        e1.find(".spnDesc").addClass(entry.Settings.DescriptionCss).html(entry.Description);
        e1.attr("data--Type", entry.Type);
        $(this).replaceWith(e1.outerHTML());
    });
    $("#divDesigner").html(div.html());
    $("#divDesigner").find(".entry").on("dblclick", function () { $(this).hide(); showEditor($(this).data("Type"), $(this)) });
    $("#divDesigner").sortable("refresh");
    syncArray();
}
function syncArray() {
    window. invalids = [];
    $(EntryInfo).each(function (i) { if (! $("#divDesigner").find("#" + this.Name).exists()) invalids.push(this.Name); });
    $(invalids).each(function () { RemoveEntry(this); });
}
function InsertItem() {
    var a = $(this);  
    showEditor(a.attr("class"),null);
    a.parent().hide();
}


function GetEntry(name) {
    var result = $(EntryInfo).filter(function () {
        return this.Name && this.Name.toUpperCase() == name.toUpperCase();
    });
    return (result && result.length > 0 ? result[0] : null);
}
function SaveEntry(type,name, title,description,varName,data) {
    var entry = GetEntry(name)
    if (!entry) {
        entry = {};
        EntryInfo.push(entry);
    }
    else {
        if (entry.Settings) {
            data = $.extend(entry.Settings, data);
        }
    }
    entry.Type = type;
    entry.Name = name;
    entry.Title = title;
    entry.Description = description;
    entry.VarName = varName;
    entry.Settings = data;
}
function RemoveEntry(name) {
    $.each(EntryInfo, function (i) {
        if (EntryInfo[i].Name == name) {
            EntryInfo.splice(i, 1);
            return false;
        }
    });
}





function LoadDesigner() {
    
    $("#divDesigner").find(".___entry").each(function () {
        $(this).replaceWith(loadEntry($(this).attr("id")));
    })
    $("#divDesigner").find(".entry").on("dblclick", function () { $(this).hide(); showEditor($(this).data("Type"), $(this)) });
    $("#divDesigner").sortable("refresh");
}

function loadEntry(id) {
    var entry = GetEntry(id);
    if (!entry)
        return "";
    var type = entry.Type;
    var item = newItem(entry.Type, entry.Name);
    item.find(".spnTitle").html(entry.Title);
    item.find(".spnDesc").html(entry.Description);
    item.find(".spnVar").html($.defaultVal(entry.VarName, "<i>[unmapped]</i>"));
    item.find(".spnId").html(entry.Name);
    if (entry.Settings) {
        item.addClass($.defaultVal(entry.Settings.Css, ""));
        item.find(".spnTitle").addClass($.defaultVal(entry.Settings.TitleCss, ""));
        item.find(".spnDesc").addClass($.defaultVal(entry.Settings.DescriptionCss, ""));
    }
    if (typeof window["render" + type + "Entry"] == "function")
        window["render" + type + "Entry"](item, type,entry.Settings);
    else
        renderTextEntry(item, type, entry.Settings);
    return item;
}










var CurrentEditingItem = null;
function resetEditors() {
    $("#divEditorList").append($("#mainEditor").hide());    
    $("#divEditorList").append($(".subEditors").hide());
    $("#subEditor").empty();
}
function showEditor(type, item) {
    $("#divCmd,#divTabs").hide();

    resetEditors();
    $("#divDesigner").children(".entry").show();
    $("#mainEditor").data("Type",type);
    CurrentEditingItem = item;
    $("#divEditorList").children().hide();
    $("#mainEditor").show();
    $("#txtName").val(type == "Header" || type=="Label"? "Untitled "+type : "Untitled question");
    $("#txtDesc").val("");
    $("#txtDesc").closest(".row").setDisplay(type != "Label");
    
    LoadVarList(type);
    
    if (item) {
        item.hide().before($("#mainEditor"));
        $("#txtName").val(item.find(".spnTitle").html());
        $("#txtDesc").val(item.find(".spnDesc").html());
        $("#ddlVars").val(item.find(".spnVar").html());
    }


    if (typeof window["showSub" + type + "Editor"] == "function")
        window["showSub" + type + "Editor"](type, item);
}

function LoadVarList(type) {
    var ddl = $("#ddlVars");
    ddl.empty();
    ddl.closest(".row").setDisplay(type != "Header" && type != "Label");
   
    ddl.append("<option value=''>Select Workflow Variable</option>");
    $(VariableList).each(function () {
        ddl.append("<option value='"+this.Name+"'>"+this.Name+"</option>");
    })
}
function GenerateNewVarName() {
    var ctr = 0;
    $("#divDesigner>.entry").find(".spnVar").each(function () {
        var v = $(this).html().toLowerCase().replace("variable", "").Trim();
        v = parseInt(v);
        v = isNaN(v) ? 0 : v;
        if (ctr < v)
            ctr = v;
    });
    return "Variable" + (ctr + 1);
}


function CancelEditor() {
    $("#divEditorList").append($("#mainEditor").hide());
    if (CurrentEditingItem)
        CurrentEditingItem.show();
    $("#divCmd,#divTabs").show();
}
function newItem(type,id) {
    var item = $("<div class='entry draggableItem entry-" + type + "' data--Type='" + type + "'></div>");
    if (id)
        item.attr("id", id);
    else
        item.NewID("Entry");
    var t = $("<span class='spnTitle'></span>");
    var i = $("<span class='spnId'></span>");
    var d = $("<span class='spnDesc'></span>");
    var v = $("<span class='spnVar'></span>");
    var c = $("<a title='Delete' href='javascript:void(0)'style='position:absolute;top:1px;right:0' class='close'>X</a>");
    item.append(t);
    item.append(d);
    item.append(v);
    item.append(i);
    item.append(c);
    c.on("click", function () { if (!confirm('Confirm deletion?')) return;var e = $(this).parent(); RemoveEntry(e.attr("id")); e.remove(); })
    item.append($("<div class='ctr'></div>"));
    return item;
}
function SaveEditor() {
    var item = null;
    var type = $("#mainEditor").data("Type");
    if (CurrentEditingItem)
        item = CurrentEditingItem;
    else {
        item = newItem(type)
        $("#divDesigner").append(item);
        $("#divEditorList").children().hide();
        item.on("dblclick", function () { $(this).hide(); showEditor($(this).data("Type"), $(this)) });
        $("#divDesigner").sortable("refresh")
    }
    item.find(".spnId").html(item.attr("id"));
    item.find(".spnTitle").html($("#txtName").val());
    item.find(".spnDesc").html($("#txtDesc").val());
    item.find(".spnVar").html($.defaultVal($("#ddlVars").val(), "<i>[unmapped]</i>"));
    item.data("Type", type);
    
    item.find(".ctr").empty();
    if (typeof window["render" + type + "Entry"] == "function")
        data=window["render" + type + "Entry"](item, type);
    else
        data=renderTextEntry(item, type);
    SaveEntry(type, item.attr("id"), $("#txtName").val(), $("#txtDesc").val(), $("#ddlVars").val(), data);
    item.show();
    resetEditors();
    $("#divCmd,#divTabs").show();
}

function showSubSingleEditor(type, item) {
    var edt = new CommonListEditor(type, item);
    $("#subEditor").append(edt.Render());
}
function showSubMultipleEditor(type, item) {
    var edt = new CommonListEditor(type, item);
    $("#subEditor").append(edt.Render());
}
function showSubListEditor(type, item) {
    var edt = new CommonListEditor(type, item);
    $("#subEditor").append(edt.Render());
}


function CommonListEditor(type, item) {
    this.Type = type;
    var s = item ? GetEntry(item.attr("id")) : null;
    if (s && s.Settings.Items)
        this.Items = s.Settings.Items;
        
}
CommonListEditor.prototype.Render = function () {
    var div = $("<div style='margin-left: 75px;padding-top:5px'><span style='margin-left: 92px;font-size:12px;font-weight:bold;font-style: italic;color: #7C7C7C;'>Text<span style='margin-left:165px'>Value</span></span></div>");
    
    if (this.Items && $.isArray(this.Items)) {
        for (var i = 0; i < this.Items.length; i++)
            div.append(this.AddItem(null, this.Items[i]));
    }
    else
        div.append(this.AddItem());
    var btn = $("<a   class='addNew' href='javascript:void(0)' >Add New</a>");
    var evt = $.proxy(this.AddItem, this);
    btn.on("click", evt);
    div.append(btn);
    return div;
}
CommonListEditor.prototype.AddItem = function (e, data) {
    var div = $("<div class='commonList'></div>");
    var t = null;
    if (this.Type == "Multiple")
        t = $("<input type='checkbox' disabled/>")
    else if (this.Type == "Single")
        t = $("<input type='radio' disabled/>")
    else if (this.Type == "List")
        t = $("<p></p>")

    div.append(t);
    var inputText = $("<input class='txt disp' style='width:175px' type='text'/>");
    var inputValue = $("<input class='txt' style='width:175px;margin-left:15px'type='text'/>");
    var c = $("<a title='Delete' href='javascript:void(0)'  class='close'>X</a>");
    c.on("click", function () { if (!confirm('Confirm deletion?')) return; $(this).parent().remove(); })

    if (data) {
        inputText.val($.defaultVal(data.Text, ""));
        inputValue.val($.defaultVal(data.Value, ""));
    }
    else {
        inputText.val(this.GenerateNewText(div));
    }
    div.append(inputText);
    div.append(inputValue);
    div.append(c);
    if (e) {
        $(e.srcElement).before(div);
    }

    return div;
}
CommonListEditor.prototype.GenerateNewText = function (div) {
    var ctr = 0;
    $("#subEditor").find(".txt").each(function () {
        var v = $(this).val().toLowerCase().replace("option","").Trim();
        v = parseInt(v);
        v = isNaN(v) ? 0 : v;
        if (ctr < v)
            ctr = v;
    });
    return "Option " + (ctr + 1);
}




function showSubScaleEditor(type, item) {
    var edt = new ScaleEditor(type, item);
    $("#subEditor").append(edt.Render());
}

function ScaleEditor(type, item) {
    this.Type = type;
    var s = item ? GetEntry(item.attr("id")) : null;
    if (s && s.Settings)
        this.Settings = s.Settings;

}
ScaleEditor.prototype.Render = function () {
    var div = $("#scaleEditor");
    if (this.Settings) {
        $("#txtScaleMin").val($.defaultVal(this.Settings.MinValue,1));
        $("#txtScaleMax").val($.defaultVal(this.Settings.MaxValue,5));
        $("#txtScaleMinTitle").val($.defaultVal(this.Settings.MinText,""));
        $("#txtScaleMaxTitle").val($.defaultVal(this.Settings.MaxText,""));
    }
    else {
        $("#txtScaleMin").val(1);
        $("#txtScaleMax").val(5);
        $("#txtScaleMinTitle").val("");
        $("#txtScaleMaxTitle").val("");
    }
    return div.show();
}

function showSubDateEditor(type, item) {
    var edt = new DateEditor(type, item);
    $("#subEditor").append(edt.Render());
}

function DateEditor(type, item) {
    this.Type = type;
    var s = item ? GetEntry(item.attr("id")) : null;
    if (s && s.Settings)
        this.Settings = s.Settings;

}
DateEditor.prototype.Render = function () {
    var div = $("#dateEditor");
    if (this.Settings) {
        $("#chkShowDate").checked($.defaultVal(this.Settings.ShowDate, true));
        $("#chkShowTime").checked($.defaultVal(this.Settings.ShowTime, false));
    }
    else {
        $("#chkShowDate").checked(true);
        $("#chkShowTime").checked(false);
    }
    return div.show();
}


function renderLabelEntry(item, type, data) {
    return null;
}
function renderHeaderEntry(item, type,data) {    
    return null;
}
function renderTextEntry(item, type, data) {
    var ctr = item.find(".ctr");
    ctr.append($("<span class='ctl' ></span>"));
    return null;
}

function renderDateEntry(item, type, data) {
    var ctr = item.find(".ctr");
    ctr.append($("<span class='ctl' ></span>"));
    return { ShowDate: $("#chkShowDate").checked(), ShowTime: $("#chkShowTime").checked() };
}

function renderSingleEntry(item, type, data) {
    return renderCommonEntry(item, type, data)
}
function renderMultipleEntry(item, type, data) {
    return renderCommonEntry(item, type, data)
}
function renderListEntry(item, type, data) {
    return renderCommonEntry(item, type, data)
}

function renderCommonEntry(item, type, _data) {
    var result = {};
    var data = (_data ? _data : []);
    var ctr = item.find(".ctr");
    var ddl;
    if (type == "List") {
        ddl = $("<select style='width:200px' ></select>")
        ctr.append(ddl);      
    }
    if (_data) {
        if(data.Items && $.isArray(data.Items))
            $(data.Items).each(function () {
                if (!this || $.isEmpty(this.Text))
                    return true;
                var div = $("<div style='margin-top: 2px;white-space: nowrap;'></div>");
                _addListItem(type, (type == "List" ? ddl : div), this.Text);
                ctr.append((type == "List" ? ddl : div));
            })
    }

    else {

        $("#subEditor").find(".disp").each(function () {

            data.push({ Text: $(this).val() ,Value:$(this).next().val()});

            var div = $("<div style='margin-top: 2px;white-space: nowrap;'></div>");
            _addListItem(type, (type == "List" ? ddl : div), $(this).val());            
            ctr.append((type == "List" ? ddl : div));
        });
    }
    result.Items = data;
    return result;
}
function _addListItem(type, ctr, val) {   
    var t = null;
    if (type == "List") {
        ctr.append($("<option>" + val + "</option>"))
        return true;
    }
    if (type == "Multiple")
        t = $("<input type='checkbox' disabled/>")
    else if (type == "Single")
        t = $("<input type='radio' disabled/>")

    var i = $("<span></span>");
    i.html(val);
    ctr.append(t);
    ctr.append(i);
}

function renderScaleEntry(item, type, data) {
    var ctr = item.find(".ctr");
    var min = $("#txtScaleMin").val()/1;
    var max = $("#txtScaleMax").val()/1;
    var minText = $("#txtScaleMinTitle").val();
    var maxText = $("#txtScaleMaxTitle").val();
    if (data) {
        min = data.MinValue
        max = data.MaxValue
        minText = data.MinText
        maxText = data.MaxText
    }
    if (!$.isEmpty(minText))
        ctr.append($("<span>" + minText + "</span>"))
    for (var i = min; i <= max; i++) {
        var item = $("<span style='display:inline-block;margin-right: 5px;'></span>");
        item.append($("<div>" + i + "</div>"));
        item.append($("<input type='radio' disabled/>"));
        ctr.append(item);
    }
    if (!$.isEmpty(minText))
        ctr.append($("<span>" + maxText + "</span>"))
    //ctr.append($("<div></div>"))
    return { MinValue: min, MaxValue: max, MinText: minText, MaxText: maxText };
}


function CreateXML() {
    var xml = [];
    var variableList = [];
    xml.push("<Interface>");
    if ($.QS("m") == "Control") {
        xml.push("<Html>");
        xml.push($.encodeXml(Editors[0].getValue()));
        xml.push("</Html>");
    }
    else {
        xml.push("<Entries>");
        for (var i = 0; i < EntryInfo.length; i++) {
            var e = EntryInfo[i];
            if (!e)
                continue
            if (!$.isEmpty(e.VarName))
                variableList.push({ Name: e.VarName, Type: e.Type });
            xml.push("<Entry Id=\"" + $.encodeXml(e.Name, true) + "\" Type=\"" + $.encodeXml(e.Type, true) + "\" Variable=\"" + $.encodeXml(e.VarName, true) + "\" >");
            xml.push("<Title>" + $.encodeXml(e.Title) + "</Title>");
            xml.push("<Description>" + $.encodeXml(e.Description) + "</Description>");
            xml.push("<Settings>");
            xml.push(serializeObjectToXml(e.Settings));
            xml.push("</Settings>");
            xml.push("</Entry>");
        }
        xml.push("</Entries>");
        xml.push("<Html>");

        var div = $("<div></div>");
        div.html($("#divDesigner").html());
        div.find(".entry").each(function () { $(this).replaceWith("<div class='___entry' id='" + $(this).attr("id") + "'></div>") })

        xml.push($.encodeXml(div.html().Trim()));

        xml.push("</Html>");
    }

    xml.push("<Css>");
    xml.push($.encodeXml(Editors[1].getValue()));
    xml.push("</Css>");
    xml.push("<Variables>" + getVarXml() + "</Variables>");
    xml.push("<Script>");    
    xml.push($.encodeXml($("#ifrExprEditor")[0].contentWindow.scriptEditor.getValue()));
    xml.push("</Script>");    
    xml.push("</Interface>");

    $("#divDesigner").find("[variable]").each(function () { var v = $(this).attr("variable"); if (!$.isEmpty(v)) variableList.push({ Name: v, Type: "Text" }); });
    return { Xml: xml.join("\n"), Variables: variableList };
}
function getVarXml() {
    VariablesList = $("#ifrExprEditor")[0].contentWindow.VariablesList;
    return $("#ifrExprEditor")[0].contentWindow.GetVarXml(VariablesList);
   
}
function serializeObjectToXml(obj) {
    var xml = [];
    if (obj) {
        for (var p in obj) {
            if (typeof obj[p]=="undefined" || !obj.hasOwnProperty(p))
                continue;
            if ($.isArray(obj[p])) {
                xml.push("<" + p + ">");
                for (var x = 0; x < obj[p].length; x++)
                    xml.push("<Item>" + serializeObjectToXml(obj[p][x]) + "</Item>");
                xml.push("</" + p + ">");
            }
            else {
                xml.push("<" + p + ">" + $.encodeXml(obj[p]) + "</" + p + ">");
            }
        }
    }
    return xml.join("\n");
}