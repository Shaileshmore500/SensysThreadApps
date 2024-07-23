function onPropertyRendered(prop, item) {
    var act = prop.ActivityDefn;
    if (act && act.Name == "Entity_Lock") {
        if (prop.PropertyName == "ChangeOwner") {
            item.setDisplay(GetPropEditorData("AllowOwnerAccess") == true);
        }
        else if (prop.PropertyName == "LockOwnerID") {
            item.setDisplay(GetPropEditorData("AllowOwnerAccess") == true && GetPropEditorData("ChangeOwner") == true);
        }
    }
}

function DefaultPropEditor(varDefn, varData, actDefn) {
    this.VarDefn = varDefn;
    this.VarData = varData;
    this.ActivityDefn = actDefn;
}

DefaultPropEditor.prototype.RenderInputItem = function () {
    var div = $("<div class='row'></div>");
    var lbl = $("<span style='min-width: 90px' class='lbl'>" + this.VarDefn.Text + "</span>");
    lbl.attr("title", this.VarDefn.DataType + "," + this.VarDefn.Title);
    var input = $('<textarea rows="1" ' + (this.VarDefn.IsReadonly ? "disabled" : "") + ' class="txt"></textarea>');
    if (!this.VarDefn.IsReadonly) {
        input.on("focus", { Defn: this.VarDefn, ActDefn: this.ActivityDefn, ShowDefaults: true }, this.Autocomplete);
        input.on("blur", this.HideAutocomplete);
    }
    div.append(lbl);
    div.append(input);
    if (!this.VarDefn.IsReadonly)
        div.append('<a class="expr" href="javascript:void(0)" onclick="showEditor($(this))">...</a>');
    if (this.VarData)
        input.val(this.VarData);
    return div;
}
DefaultPropEditor.prototype.RenderOutputItem = function () {

    var div = $("<div class='row'></div>");
    var lbl = $("<span style='min-width: 90px' class='lbl'>" + this.VarDefn.Text + "</span>");
    lbl.attr("title", this.VarDefn.DataType + "," + this.VarDefn.Title);
    var input = $('<input type="text" readonly class="txt" />');
    input.on("focus", { Defn: this.VarDefn, ActDefn: {}, Isoutput: true }, this.Autocomplete);
    input.on("blur", this.HideAutocomplete);
    div.append(lbl);
    div.append(input);
    if (this.VarData)
        input.val(this.VarData);
    return div;
}
DefaultPropEditor.prototype.Autocomplete = function (e) {
    var input = $(e.target);
    var info = e.data.Defn;
    var div = $("#divEditorCtr_AutoPopup");
    if (!info)
        return;
    div = (div.exists() ? div.empty() : $("<div id='divEditorCtr_AutoPopup' class='propsAutoComplete' style='position:absolute'></div>"));
    var vars = GetVariableList({ DataType: info.DataType });
    if (e.data.Isoutput) {
        var a = $("<a href='javascript:void(0)' val=''>N/A</a>");
        div.append(a);
    }
    $(vars).each(function () {
        var a = $("<a href='javascript:void(0)' val='" + this.Name + "'>" + this.Name + "</a>");
        div.append(a);
    });
   
    if (e.data.ShowDefaults) {
        if (info.DataType.toUpperCase() == "BOOLEAN") {
            div.prepend("<a href='javascript:void(0)' val='false'>False</a>");
            div.prepend("<a href='javascript:void(0)' val='true'>True</a>");
        }
        if (info.DataType.toUpperCase() == "DATETIME") {
            div.prepend("<a href='javascript:void(0)' val='DateTime.Now'>Todays Date</a>");
        }
    }

    if (e.data.ActDefn.Name == "SendMail") {
        if (info.Name == "From" || info.Name == "To" || info.Name == "CC" || info.Name == "BCC") {
            div.prepend("<a href='javascript:void(0)' val='CurrentDecisionTaker[\"email\"].C2Str()'>Current Decision Taker Mail ID</a>");
            div.prepend("<a href='javascript:void(0)' val='PreviousDecisionTaker[\"email\"].C2Str()'>Previous Decision Taker Mail ID</a>");
            div.prepend("<a href='javascript:void(0)' val='WFUser[\"email\"].C2Str()'>WFUser Mail ID</a>");
        }
    }
    else if (e.data.ActDefn.Name == "WFMovement") {
        if (info.Name == "Action") {
            div.prepend("<a href='javascript:void(0)' val='\"Reject\"'>Reject</a>");
            div.prepend("<a href='javascript:void(0)' val='\"Accept\"'>Accept</a>");
            div.prepend("<a href='javascript:void(0)' val='\"Submit\"'>Submit</a>");
            div.prepend("<a href='javascript:void(0)' val='\"Close\"'>Close</a>");
            div.prepend("<a href='javascript:void(0)' val='\"Open\"'>Open</a>");
            div.prepend("<a href='javascript:void(0)' val='\"Final\"'>Final</a>");
            div.prepend("<a href='javascript:void(0)' val='\"Draft\"'>Draft</a>");
        }
    }
    div.children().on("mousedown", function () {
        var a = $(this);
        a.parent().hide().parent().children(".txt").val(a.attr("val"));
    });
    input.parent().append(div);
    div.css("min-width", input.outerWidth(true));
    var pos = input.position();
    div.css({ top: pos.top + input.outerHeight(true), left: pos.left }).setDisplay(div.children().length > 0);
    //if (div.isVisible())
    //    $(document).one("click", function () {
    //        $("#divEditorCtr_AutoPopup").remove();
    //    });
    return div;
}
DefaultPropEditor.prototype.HideAutocomplete = function () {
    $("#divEditorCtr_AutoPopup").remove();
}
DefaultPropEditor.prototype.SaveData = function (input) { return input.find(".txt").val(); }

function MultiLine(varDefn, varData, actDefn) {
    this.VarDefn = varDefn;
    this.VarData = varData;
    this.ActivityDefn = actDefn;
}
MultiLine.prototype = Object.create(DefaultPropEditor.prototype);
MultiLine.prototype.RenderInputItem = function () {
    var div = $("<div class='row'></div>");
    var lbl = $("<span style='min-width: 90px' class='lbl'>" + this.VarDefn.Text + "</span>");
    lbl.attr("title", this.VarDefn.DataType + "," + this.VarDefn.Title);
    var input = $('<textarea rows="5" style="height:auto" ' + (this.VarDefn.IsReadonly ? "disabled" : "") + ' class="txt"></textarea>');
    
    div.append(lbl);
    div.append(input);
    if (this.VarData)
        input.val(this.VarData);
    return div;
}


function EntityPickList(varDefn, varData, actDefn) {
    this.VarDefn = varDefn;
    this.VarData = varData;
    this.ActivityDefn = actDefn;
}
EntityPickList.prototype.RenderInputItem = function () {
    var div = $("<div class='row'></div>");
    var lbl = $("<span style='min-width: 90px' class='lbl'>" + this.VarDefn.Text + "</span>");
    lbl.attr("title", this.VarDefn.DataType + "," + this.VarDefn.Title);
    var input = $('<textarea rows="1"  class="txt"></textarea>');
    var evt = $.proxy(this.ShowEntityList, this);   
    input.on("click", this.VarDefn, evt);
    div.append(lbl);
    div.append(input);
    if (this.VarData) { input.val(EntityHelper.GetEntityTitle($.defaultVal(this.VarData, "").Trim('"'))); }
    return div;
}
EntityPickList.prototype.ComboChanged=function (cbo, text, value) {
    cbo.next().val(text);
    this.VarData = value;
}
EntityPickList.prototype.ComboChanging = function (cbo, text, value) {
    if (this.ActivityDefn.Name == "Entity_Create") {
        var eid = GetPropEditorData("FieldMappings");
        eid = (!$.isEmpty(eid) ? eid.EntityID : "");
        var prop = GetPropEditor("FieldMappings");
        if (!$.isEmpty(eid) && eid != value) {
            if (confirm('Changing Entity will delete existing field mappings!\nDo you wish to continue?')) {
                if (prop) prop.VarData = null;
            }
            else
                return false;
        }
    }
    else if (this.ActivityDefn.Name == "Entity_List") {
        
        var prop = GetPropEditor("FilterXML");
        var eid = (prop ? prop.EntityID : "");
        if (!$.isEmpty(eid) && eid != value) {
            if (confirm('Changing Entity will delete existing Filter!\nDo you wish to continue?')) {
                if (prop) prop.VarData = null;
            }
            else
                return false;
        }
    }
    return true;
}
EntityPickList.prototype.ShowEntityList = function (e) {
    var input = $(e.target);
    var cbo = EntityHelper.GetEntityList();
    if (cbo.next().hasClass("txt"))
        cbo.next().show();
    input.hide().before(cbo.show());
    EntityHelper.SelectItem(this.VarData);
    EntityHelper.RegisterItemChange(this.ComboChanged,this);    
    EntityHelper.RegisterItemChanging(this.ComboChanging,this);
    
}
EntityPickList.prototype.SaveData = function () { return "\""+$.defaultVal(this.VarData,"").Trim('"')+"\""; }
EntityPickList.SerializeData = function (defn, value) {
    if (!value)
        return "";

    return "<Input Name=\"" + $.encodeXml(defn.Name, true) + "\" >" + $.encodeXml("\"" + $.defaultVal(value, "").Trim('"') + "\"") + "</Input>";

}

function VariableMapper(varDefn, varData, actDefn) {
    this.VarDefn = varDefn;
    this.VarData = varData;
    this.ActivityDefn = actDefn;
}
VariableMapper.prototype.RenderInputItem = function () {
    var div = $("<div class='divVariableMapperCtr'></div>");
    if (this.VarData && $.isArray(this.VarData)) {
        for (var i = 0; i < this.VarData.length; i++)
            div.append(this.AddNewItem(null, this.VarData[i]));
    }
    div.append(this.AddNewItem());
    var btn = $("<a   class='addNew' href='javascript:void(0)' >Add New</a>");
    var evt = $.proxy(this.AddNewItem, this);
    btn.on("click", evt);
    div.append(btn);
    return div;
}
VariableMapper.prototype.AddNewItem = function (e, data) {
    var div = $("<div class='row'></div>");
    var lhs = $('<input type="text" class="txt lhs"/>');
    lhs.on("focus", this.Autocomplete_Lhs);
    lhs.on("blur", function () { $("#divEditorCtr_AutoPopup").remove(); });

    var rhs = $('<textarea rows="1" class="txt rhs"></textarea>');
    rhs.on("focus", this.Autocomplete_Rhs);
    rhs.on("blur", function () { $("#divEditorCtr_AutoPopup").remove(); });
    div.append(lhs);
    div.append("<span class='eq'>=</span>");
    div.append(rhs);
    div.append('<a class="expr" href="javascript:void(0)" onclick="showEditor($(this))">...</a>');
    var btn = $('<a class="close" title="Delete" href="javascript:void(0)">X</a>')
    div.append(btn);
    var evt = $.proxy(this.RemoveItem, this);
    btn.on("click", evt);
    if (data) {
        lhs.val(data.Lhs);
        rhs.val(data.Rhs);
    }
    if (e) {
        $(e.target).before(div);
    }
    return div;
}
VariableMapper.prototype.RemoveItem = function (e) {
    if (confirm('Do you wish to delete this assignment?'))
        $(e.target).closest('.row').remove();
}
VariableMapper.prototype.Autocomplete_Lhs = function (e) {
    var input = $(e.target);
    var div = $("#divEditorCtr_AutoPopup");
    div = (div.exists() ? div.empty() : $("<div id='divEditorCtr_AutoPopup' class='propsAutoComplete' style='position:absolute'></div>"));
    var vars = GetVariableList();
    $(vars).each(function () {
        var a = $("<a href='javascript:void(0)' val='" + this.Name + "'>" + this.Name + "</a>");
        div.append(a);
    });

    div.children().on("mousedown", function () {
        var a = $(this);
        a.parent().hide().parent().children(".lhs").val(a.attr("val"));
    });
    input.parent().append(div);
    div.css("min-width", input.outerWidth(true));
    var pos = input.position();
    return div.css({ top: pos.top + input.outerHeight(true), left: pos.left }).setDisplay(div.children().length > 0);
}
VariableMapper.prototype.Autocomplete_Rhs = function (e) {
    var input = $(e.target);
    var div = $("#divEditorCtr_AutoPopup");
    div = (div.exists() ? div.empty() : $("<div id='divEditorCtr_AutoPopup' class='propsAutoComplete' style='position:absolute'></div>"));
    var info = GetVarDefn(input.closest(".row").children(".lhs").val());

    var vars = GetVariableList({ DataType: info.DataType });
    $(vars).each(function () {
        if (this.Name != info.Name) {
            var a = $("<a href='javascript:void(0)' val='" + this.Name + "'>" + this.Name + "</a>");
            div.append(a);
        }
    });

    if (info && info.DataType.toUpperCase() == "BOOLEAN") {
        div.prepend("<a href='javascript:void(0)' val='false'>False</a>");
        div.prepend("<a href='javascript:void(0)' val='true'>True</a>");
    }
    if (info && info.DataType.toUpperCase() == "DATETIME") {
        div.prepend("<a href='javascript:void(0)' val='DateTime.Now'>Todays Date</a>");
    }
    div.children().on("mousedown", function () {
        var a = $(this);
        a.parent().hide().parent().children(".rhs").val(a.attr("val"));
    });
    input.parent().append(div);
    div.css("min-width", input.outerWidth(true));
    var pos = input.position();
    return div.css({ top: pos.top + input.outerHeight(true), left: pos.left }).setDisplay(div.children().length > 0);
}
VariableMapper.prototype.SaveData = function (input) {
    var data = [];
    input.children(".row").each(function () {
        if (!$.isEmpty($(this).children(".lhs").val()))
            data.push({ Lhs: $(this).children(".lhs").val(), Rhs: $(this).children(".rhs").val() });
    })
    return data;
}
VariableMapper.SerializeData = function (defn, value) {
    if (!$.isArray(value))
        return "";
    var xml = [];
    xml.push("<Input Name=\"" + $.encodeXml(defn.Name, true) + "\" >");
    for (var i = 0; i < value.length; i++) {
        var obj = value[i];
        xml.push("<Input Name=\"" + $.encodeXml(obj.Lhs, true) + "\" >" + $.encodeXml(obj.Rhs) + "</Input>");
    }
    xml.push("</Input>")
    return xml.join("");

    /*
    Note xml should be in below format for not supported custom editors.
    <EditorResult>parse and create result which will be consumed by WF</EditorResult>
    <EditorInfo>this can be used for rehydrating prop editor when designer is loaded again</EditorInfo>
    eg:
    <EditorResult>new DateTime(2014,12,31)</EditorResult>
    <EditorInfo><Day>31</Day><Month>12</Month><Year>2014</Year></EditorInfo>
    */
}

function FieldPickList(varDefn, varData, actDefn) {
    this.VarDefn = varDefn;
    this.VarData = varData;
    this.ActivityDefn = actDefn;
}
FieldPickList.prototype = Object.create(DefaultPropEditor.prototype);
FieldPickList.prototype.RenderInputItem = function () {
    var div = $("<div class='row'></div>");
    var lbl = $("<span style='min-width: 90px' class='lbl'>" + this.VarDefn.Text + "</span>");
    lbl.attr("title", this.VarDefn.DataType + "," + this.VarDefn.Title);
    var input = $('<textarea rows="1" ' + (this.VarDefn.IsReadonly ? "disabled" : "") + ' class="txt"></textarea>');
    var evt = $.proxy(this.ShowFieldList, this);
    input.on("focus", evt);
    div.append(lbl);
    div.append(input);
    if (!this.VarDefn.IsReadonly)
        div.append('<a class="expr" href="javascript:void(0)" onclick="showEditor($(this))">...</a>');
    if (this.VarData)
        input.val(this.VarData);
    return div;
}
FieldPickList.prototype._GetEntityID = function () {
    var eid = "";
    if (this.ActivityDefn.Name == "WFMovement") {
        var v = $("#divEditorCtr").children(".ReferenceEntity").find(".txt").val();
        v = GetVarDefn(v);
        eid = (v ? v.EntityID : "");
    }
    eid = (eid ? eid.Trim('"') : "")
    return eid;
}
FieldPickList.prototype.FieldSelected = function (list, text, value, fieldName, fieldType) {
    list.closest(".row").children(".txt").val("\"" + fieldName + "\"");
    $("#divEditorCtr_AutoPopup").hide()
}
FieldPickList.prototype.ShowFieldList = function (e) {
    var eid = this._GetEntityID();
    if ($.isEmpty(eid)) {
        alert("Please choose an entity first.")
        return;
    }
    if (!$.isEmpty(this.EntityID) && this.EntityID != eid) {
        this.VarData = null;
    }
    this.EntityID = eid;
    var input = $(e.target);
    var div = $("#divEditorCtr_AutoPopup");
    div = (div.exists() ? div.empty() : $("<div id='divEditorCtr_AutoPopup' class='propsAutoComplete' style='position:absolute;min-height:300px;'></div>"));
    div.append(EntityFieldHelper.GetFieldList().show());
    EntityFieldHelper.LoadFields(this.EntityID, false);
    div.css("min-width", input.outerWidth(true));   
    input.parent().append(div);
    var pos = input.position();
    EntityFieldHelper.RegisterFieldSelected(this.FieldSelected, this);
    return div.css({ top: pos.top + input.outerHeight(true), left: pos.left }).setDisplay(div.children().length > 0);
}

function FieldMapper(varDefn, varData,actDefn) {
    this.VarDefn = varDefn;
    this.VarData = varData;
    this.ActivityDefn = actDefn;
}
FieldMapper.prototype.RenderInputItem = function () {
    var div = $("<div class='row'></div>");
    var lbl = $("<span style='min-width: 90px' class='lbl'>" + this.VarDefn.Text + "</span>");
    lbl.attr("title", this.VarDefn.DataType + "," + this.VarDefn.Title);
    var btn = $('<input type="button"  class="ActionButton GreenButton" value="Map Fields"/>');
    var evt = $.proxy(this.ShowFieldMapper, this);
    btn.on("click", evt);
    div.append(lbl);
    div.append(btn);
    div.data("EntityID", this._GetEntityID());
    return div;
}
FieldMapper.prototype._GetEntityID = function () {
    var eid = "";
    if (this.ActivityDefn.Name == "Entity_Create") {
        eid = GetPropEditorData("CreateEntityID");
    }
    else if (this.ActivityDefn.Name == "Entity_Update") {
        var v = $("#divEditorCtr").children(".ErpEntity").find(".txt").val();
        v = GetVarDefn(v);
        eid = (v ? v.EntityID : "");
    }
    eid = (eid ? eid.Trim('"') : "")
    return eid;
}
FieldMapper.prototype.ShowFieldMapper = function () {

    var eid = this._GetEntityID();
    if ($.isEmpty(eid)) {
        alert("Please choose an entity first.")
        return;
    }
    if (!$.isEmpty(this.EntityID) && this.EntityID != eid) {
        this.VarData = null;       
    }
    this.EntityID = eid;
    this.EntityTitle = EntityHelper.GetEntityTitle(eid);
    $("#divFieldMapper_Ctr").remove();
    var div = $("<div class='formSettings' id='divFieldMapper_Ctr' ><span>Map fields for <b>" + this.EntityTitle + "</b></span></div>");
    $(document.body).append(div);
    var subDiv=$("<div class='sub'></div>")
    div.append(subDiv);
   
    if (this.VarData && $.isArray(this.VarData.Mappings)) {
        for (var i = 0; i < this.VarData.Mappings.length; i++)
            subDiv.append(this.AddNewItem(null, this.VarData.Mappings[i]));
    }
    subDiv.append(this.AddNewItem());
    var btn = $("<a   class='addNew' href='javascript:void(0)' >Add New</a>");
    var evt = $.proxy(this.AddNewItem, this);
    btn.on("click", evt);
    subDiv.append(btn);


    var btnSave = $('<input type="button" class="ActionButton GreenButton" value="Save Mappings"/>');
    evt = $.proxy(this.SaveMappings, this);
    btnSave.on("click", evt);
    var btnCancel = $('<input type="button" onclick="$(this).closest(\'#divFieldMapper_Ctr\').HideModal().remove();" class="ActionButton GlassButton RedColor" style="margin-left:5px" value="Cancel"/>');
    var cmd = $("<span class='row' style='position:absolute;bottom:0;left:0;right:5px;text-align: right;'></span>")
    cmd.append(btnSave)
    cmd.append(btnCancel)
    div.append(cmd);

    div.ShowModal();
}

FieldMapper.prototype.AddNewItem = function (e, data) {
    var div = $("<div class='row'></div>");
    var lhs = $('<input type="text" class="txt lhs"/>');
    var evt = $.proxy(this.ShowFieldList, this);
    lhs.on("focus", evt);
    //lhs.on("blur", function () { $("#divEditorCtr_AutoPopup").remove(); });

    var rhs = $('<textarea rows="1" class="txt rhs"></textarea>');
    rhs.on("focus", this.Autocomplete_Rhs);
    rhs.on("blur", function () { $("#divEditorCtr_AutoPopup").remove(); });
    div.append(lhs);
    div.append("<span class='eq'>=</span>");
    div.append(rhs);
    div.append('<a class="expr" href="javascript:void(0)" onclick="showEditor($(this))">...</a>');
    var btn = $('<a class="close" title="Delete" href="javascript:void(0)">X</a>')
    div.append(btn);
    evt = $.proxy(this.RemoveItem, this);
    btn.on("click", evt);
    if (data) {
        lhs.val(data.Lhs.Text).data("Value",data.Lhs);
        rhs.val(data.Rhs);
    }
    if (e) {
        $(e.target).before(div);
    }
    return div;
}
FieldMapper.prototype.RemoveItem = function (e) {
    if (confirm('Do you wish to delete this mapping?'))
        $(e.target).closest('.row').remove();
}
FieldMapper.prototype.ShowFieldList = function (e) {   
    var input = $(e.target);
    var div = $("#divEditorCtr_AutoPopup");
    div = (div.exists() ? div.empty() : $("<div id='divEditorCtr_AutoPopup' class='propsAutoComplete' style='position:absolute;min-height:300px;'></div>"));
    div.append(EntityFieldHelper.GetFieldList().show());
    EntityFieldHelper.LoadFields(this.EntityID,false);
    div.css("min-width", input.outerWidth(true));
    var pos = input.position();
    input.parent().append(div);
    EntityFieldHelper.RegisterFieldSelected(this.FieldSelected,this);
    return div.css({ top: pos.top + input.outerHeight(true), left: pos.left }).setDisplay(div.children().length > 0);
}
FieldMapper.prototype.Autocomplete_Rhs = function (e) {
    var input = $(e.target);
    EntityFieldHelper.Reset();
    var div = $("#divEditorCtr_AutoPopup");
    div = (div.exists() ? div.empty() : $("<div id='divEditorCtr_AutoPopup' class='propsAutoComplete' style='position:absolute'></div>"));
    var info = GetVarDefn(input.closest(".row").children(".lhs").val());
    var vars = GetVariableList();//{ DataType: info.DataType });
    $(vars).each(function () {       
            var a = $("<a href='javascript:void(0)' val='" + this.Name + "'>" + this.Name + "</a>");
            div.append(a);        
    });
    
    div.children().on("mousedown", function () {
        var a = $(this);
        a.parent().hide().parent().children(".rhs").val(a.attr("val"));
    });
    input.parent().append(div);
    div.css("min-width", input.outerWidth(true));
    var pos = input.position();
    return div.css({ top: pos.top + input.outerHeight(true), left: pos.left }).setDisplay(div.children().length > 0);
}

FieldMapper.prototype.FieldSelected=function(list, text, value,fieldName, fieldType) {
    list.closest(".row").children(".lhs").val(text).data("Value", { Text: text, Value: fieldName, FieldType: fieldType });
    $("#divEditorCtr_AutoPopup").hide()
}
FieldMapper.prototype.SaveMappings = function () {
    var data = [];
    $("#divFieldMapper_Ctr").children(".sub").children(".row").each(function () {
        var val=$(this).children(".lhs").data("Value");
        if (!$.isEmpty(val))
            data.push({ Lhs: val, Rhs: $(this).children(".rhs").val() });
    })
    this.VarData = { Mappings: data, EntityID: this.EntityID };    
    $("#divFieldMapper_Ctr").HideModal();
    
}
FieldMapper.prototype.SaveData = function () { return this.VarData; }
FieldMapper.SerializeData = function (defn, value) {
    if (!value || !$.isArray(value.Mappings))
        return "";
    var xml = [];
    xml.push("<Input Name=\"" + $.encodeXml(defn.Name, true) + "\" EntityID=\"" + $.encodeXml(value.EntityID, true) + "\">");
    for (var i = 0; i < value.Mappings.length; i++) {
        var obj = value.Mappings[i];
        xml.push("<Input Name=\"" + $.encodeXml(obj.Lhs.Value, true) + "\" >" + $.encodeXml(obj.Rhs) + "</Input>");
    }
    xml.push("</Input>")
    return xml.join("");

}


function EntityFilter(varDefn, varData, actDefn) {
    this.VarDefn = varDefn;
    this.VarData = varData;
    this.ActivityDefn = actDefn;
    this.sid = "123123123";
}
EntityFilter.prototype.RenderInputItem = function () {
    var div = $("<div  class='row'></div>");
    var lbl = $("<span style='min-width: 90px' class='lbl'>" + this.VarDefn.Text + "</span>");
    lbl.attr("title", this.VarDefn.DataType + "," + this.VarDefn.Title);
    var btn = $('<input type="button" class="ActionButton GreenButton" value="Filter Entities"/>');
    var evt = $.proxy(this.ShowEntityFilter, this);
    btn.on("click", evt);
    div.append(lbl);
    div.append(btn);
    div.data("EntityID", this._GetEntityID());
    return div;
}
EntityFilter.prototype.ShowEntityFilter = function () {
    var eid = this._GetEntityID();
    if ($.isEmpty(eid)) {
        alert("Please choose an entity first.")
        return;
    }
    this.EntityID = eid;
    this.EntityTitle = EntityHelper.GetEntityTitle(eid);
    var data = new Object();   
    data["Type"] = "ShowEntityFilter"; data["EID"] = eid; data["SID"] = this.sid; data["xml"] = (this.VarData ? $.defaultVal(this.VarData, "").Trim('"') : "");
    var edt = this;
    PageMethods.SetFilterSession(data, function () {
        var url = "../Meta/Filters_Add.aspx?PageMode=Settings&EID=" + eid + "&SID=" + edt.sid + "&Hidebutton=1&WF=1&WFEID=" + $.QS("EID") + "&ShowFilterBtn=1&ReturnXml=1";
        var p = $(document.body).ShowPopup({ url: url, zIndex: 4000, height: 475, width: 760, showClose: false, anim: false })
        p.css("padding-bottom", "30px");
        var btnSave = $('<input type="button" class="ActionButton GreenButton" value="Save Mappings"/>');
        evt = $.proxy(edt.SaveMappings, edt);
        btnSave.on("click", evt);
        var btnCancel = $('<input type="button" class="ActionButton GlassButton RedColor" style="margin-left:5px" value="Cancel"/>');
        evt = $.proxy(function () { $("#" + edt.PopupID).RemovePopup(); }, edt);
        btnCancel.on("click", evt);
        var cmd = $("<span class='row' style='position:absolute;bottom:3px;left:0;right:5px;text-align: right;border-top: solid 1px #E0E0E0;padding-top: 3px;padding-right: 5px;'></span>")
        cmd.append(btnSave)
        cmd.append(btnCancel)
        p.append(cmd);
        edt.PopupID = p.attr("id");
    });
}
EntityFilter.prototype.SaveMappings = function () {
    var ifr = $("#" + this.PopupID).children("iframe");
    var xml="";
    if (ifr.exists() && ifr[0].contentWindow)
        xml = ifr[0].contentWindow.createXml();
    if (xml === false)
        return;
    this.VarData = '"'+xml+'"';   
    $("#" + this.PopupID).RemovePopup();

}
EntityFilter.prototype._GetEntityID = function () {
    var eid = "";
    if (this.VarDefn.Name == "ReportFilter") {
        var p = GetPropEditor("ReportID");
        if (p) {
            eid = $("#" + p.ReferenceID).find(".ddl").selectedItem().attr("eid");
        }
    }
    else
        eid = GetPropEditorData("EntityID");
    eid = (eid ? eid.Trim('"') : "")
    return eid;
}
EntityFilter.prototype.SaveData = function () { return this.VarData; }


function EntityFilter1(varDefn, varData, actDefn) {
    this.VarDefn = varDefn;
    this.VarData = varData;
    this.ActivityDefn = actDefn;
    this.sid = "456456456";
}
EntityFilter1.prototype = Object.create(EntityFilter.prototype);
EntityFilter1.prototype.RenderInputItem = function () {
    var div = EntityFilter.prototype.RenderInputItem.call(this);
    div.find("[type=button]").val("Select Users");
    return div;
}
EntityFilter1.prototype._GetEntityID = function () { return "tbl_SYS_Users"; }

function UserInterface(varDefn, varData, actDefn) {
    this.VarDefn = varDefn;
    this.VarData = (varData ? varData : { LayoutXML: "", UserActions:null});
    this.ActivityDefn = actDefn;
}
UserInterface.prototype.RenderInputItem = function () {
    var ctr = $("<div ></div>");
    var div = $("<div  class='row'></div>");
    var lbl = $("<span style='min-width: 90px' class='lbl'>" + this.VarDefn.Text + "</span>");
    lbl.attr("title", this.VarDefn.DataType + "," + this.VarDefn.Title);
    var btn = $('<input type="button" class="ActionButton GreenButton" value="Interface Designer"/>');
    var evt = $.proxy(this.ShowUI, this);
    btn.on("click", evt);
    div.append(lbl);
    div.append(btn);
    ctr.append(div);

    var uaDiv = $("<div  class='row divVariableMapperCtr '><span class='lbl' style='display:block'>User Actions:</span></div>");
    uaDiv.append($("<span style='margin-left:78px;font-size:12px;font-weight:bold;font-style: italic;color: #7C7C7C;'>Action Name<span style='margin-left:75px'>Value</span></span>"));
    if (this.VarData && $.isArray(this.VarData.UserActions)) {
        for (var i = 0; i < this.VarData.UserActions.length; i++)
            uaDiv.append(this.AddUAItem(null, this.VarData.UserActions[i]));
    }
    else {
        if (this.ActivityDefn.Name == "Decision") {
            uaDiv.append(this.AddUAItem(null, { Text: "Accept", Value: "ACCEPT", RequiresValidation: true }));
            uaDiv.append(this.AddUAItem(null, { Text: "Reject", Value: "REJECT", RequiresValidation: true }));
        }
        else {
            uaDiv.append(this.AddUAItem(null, { Text: "Submit", Value: "SUBMIT", RequiresValidation: true }));
            uaDiv.append(this.AddUAItem(null, { Text: "Cancel", Value: "CANCEL", RequiresValidation: false }));
        }
    }
    var btn = $("<a   class='addNew' href='javascript:void(0)' style='margin-left: 50px;width: 312px;'>Add New</a>");
    var evt = $.proxy(this.AddUAItem, this);
    btn.on("click", evt);
    uaDiv.append(btn);
    ctr.append(uaDiv);    
    return ctr;
}
UserInterface.prototype.AddUAItem = function (e,data) {
    var div = $("<div class='item' style='margin-left:50px;margin-top: 5px;'></div>");
  
    var inputText = $("<input class='txt disp' style='width:135px' type='text'/>");
    var inputValue = $("<input class='txt val' style='width:135px;margin-left:8px'type='text'/>");
    var chk = $("<input type='checkbox' style='vertical-align:middle' title='Validation should be performed when this action is selected'/>");
    var c = $("<a title='Delete' href='javascript:void(0)'  class='close'>X</a>");
    c.on("click", function () { if (!confirm('Confirm deletion?')) return; $(this).parent().remove(); })

    if (data) {
        inputText.val($.defaultVal(data.Text, ""));
        inputValue.val($.defaultVal(data.Value, ""));
        chk.checked(data.RequiresValidation);
    }
   
    div.append(inputText);
    div.append(inputValue);
    div.append(chk);
    div.append(c);
    if (e) {
        $(e.target).before(div);
    }

    return div;
}
UserInterface.prototype.ShowUI = function () {
  
    var data = new Object(); 
    data["Type"] = "ShowUI"; data["Xml"] = (this.VarData ? $.defaultVal(this.VarData.LayoutXML, "") : "");
    var btns = "";
    $("#" + this.ReferenceID).find(".item").each(function () {
        var r = $(this);
        if ($.isEmpty(r.find(".disp").val()))
            return true;
        btns += r.find(".disp").val() +"~~~"+$.defaultVal(r.find(".val").val(), r.find(".disp").val())+ "^^^";
    })
    data["Buttons"] = btns;
    data["Variables"] = JSON.stringify(GetVariableList({DataType:"Simple"}));
    data["ref"] = this.PropertyName;
    PageMethods.SetFilterSession(data, function (result) { window.open("InterfaceDesigner.aspx?eid=" + $.QS("EID") + "&fn=GetUI&ref=" + result["ref"] + "&sid=" + result["sid"]); });
   
}
UserInterface.prototype.GetUI = function (data) {
    if(!data)
        return;
    this.VarData = (this.VarData ? this.VarData : {});
    this.VarData.LayoutXML = data.Xml;
       
}
UserInterface.prototype.SaveData = function (input) {
    
    var arr = [];
    input.find(".item").each(function () {
        var r = $(this);
        if ($.isEmpty(r.find(".disp").val()))
            return true;
        arr.push({ Text: r.find(".disp").val(), Value: $.defaultVal(r.find(".val").val(), r.find(".disp").val()), RequiresValidation: r.find("[type=checkbox]").checked() });
    })
    return { LayoutXML: $.defaultVal(this.VarData.LayoutXML, ""), UserActions: arr };;
}
UserInterface.SerializeData = function (defn, value) {
    if (!value)
        return "";
    var xml = [];
    xml.push("<Input Name=\"" + $.encodeXml(defn.Name, true) + "\" >");
    xml.push("<LayoutXML>" + $.defaultVal(value.LayoutXML, "") + "</LayoutXML>");
    xml.push("<UserActions>");
    var arr = value.UserActions;
    if ($.isArray(arr)) {
        for (var i = 0; i < arr.length; i++) {
            var obj = arr[i];
            xml.push("<Action Text=\"" + $.encodeXml(obj.Text, true) + "\" Value=\"" + $.encodeXml(obj.Value, true) + "\" RequiresValidation=\"" + (obj.RequiresValidation==true) + "\" />");
        }
    }
    xml.push("</UserActions>");
    xml.push("</Input>");
    return xml.join("");

}


function UARuleDesigner(varDefn, varData, actDefn) {
    this.VarDefn = varDefn;
    this.VarData = (varData ? varData : { });
    this.ActivityDefn = actDefn;
}
UARuleDesigner.prototype.RenderInputItem = function () {
    var ctr = $("<div ></div>");
    var div = $("<div  class='row'></div>");
    var lbl = $("<span style='min-width: 90px' class='lbl'>" + this.VarDefn.Text + "</span>");
    lbl.attr("title", this.VarDefn.DataType + "," + this.VarDefn.Title);
    var btn = $('<input type="button" class="ActionButton GreenButton" value="Rule Config"/>');
    var evt = $.proxy(this.ShowCfg, this);
    btn.on("click", evt);
    div.append(lbl);
    div.append(btn);
    ctr.append(div);
   
    return ctr;
}
UARuleDesigner.prototype.ShowCfg = function () {

    var div = $("<div class='formSettings' style='width:350px;padding-bottom: 35px;' ><span style='font-size: 12px;color: #A00;display: block;border-bottom: solid 1px gray;'>The followings settings are applicable when then are more than one Decision Takers/Approvers.</span</div>");
    this.CfgID=div.NewID().attr("id")
    $(document.body).append(div);

    var row = $('<span class="row rule1"><span class="lbl" style="width: 300px;">Approval process is completed when :</span><select style="margin-left: 25px;"><option value="AnyUser">Decision is taken by any one of the Authorisers</option><option value="AllUsers">Decision taken by all the Authorisers</option></select></span>');
    div.append(row);
    row.find("select").on("change", function () { $(this).closest(".row").next().setDisplay($(this).prop("selectedIndex") > 0); }).val($.defaultVal(this.VarData.Rule1, ""));
    row = $('<span class="row rule2" style="display:none"><span class="lbl" style="width: 100%">Final Decision is based on :</span><select style="margin-left: 25px;"><option value="Majority_Of_Any_Decision">Majority Of Any Decision</option><option value="All_Decision_Should_Be_Same">All Decisions Should Be Same</option><option value="Specific_Decision_Occurs">Specific Decision Occurs</option></select></span>');
    div.append(row);
    row.find("select").val($.defaultVal(this.VarData.Rule2, ""));
    row.setDisplay(div.find(".rule1>select").prop("selectedIndex") > 0);
    row = $('<span class="row" ><span class="lbl" style="width: 100%">In case of conflicts or when specific decision is checked then decision is based on below specified order of Actions</span></span>');
    div.append(row);
    var pr = $("<div  id='divDecisionPriority'></div>");
    var actions = $("#divEditorCtr > .UI").find(".item");
    if (this.VarData && $.isArray(this.VarData.DecisionPriority)) {
        var ar = []; var dp = this.VarData.DecisionPriority;
        $(dp).each(function ()
        {
           var n=this;
            actions.each(function ()
            {
                var d = $(this);
                if (d.children('.val').val() == n) {
                    ar.push({ disp: d.children('.disp').val(), val: d.children('.val').val() }); return false;
                }
            })
        })
        actions.each(function () {
            var f = false; var d = $(this);
            $(ar).each(function () { if (d.children('.val').val() == this.val) { f = true; return false; } });
            if(!f)
                ar.push({ disp: d.children('.disp').val(), val: d.children('.val').val() });
        });
        $(ar).each(function () { var d = this; pr.append("<div class='pr' val='" + d.val + "'>" + d.disp + "</div>"); });
    }
    else
        actions.each(function () { var d = $(this); pr.append("<div class='pr' val='" + d.children('.val').val() + "'>" + d.children('.disp').val() + "</div>"); });
    pr.sortable();
    row.append(pr);
    var btnSave = $('<input type="button" class="ActionButton GreenButton" value="Save Settings"/>');
    evt = $.proxy(this.SaveConfig, this);
    btnSave.on("click", evt);
    var btnCancel = $('<input type="button" onclick="$(this).closest(\'.formSettings\').HideModal().remove();" class="ActionButton GlassButton RedColor" style="margin-left:5px" value="Cancel"/>');
    var cmd = $("<span class='row' style='position:absolute;bottom:0;left:0;right:5px;text-align: right;'></span>")
    cmd.append(btnSave)
    cmd.append(btnCancel)
    div.append(cmd);

    div.ShowModal();
}
UARuleDesigner.prototype.SaveConfig = function () {
    var c = $("#" + this.CfgID);
    var pr=[];
    c.find(".pr").each(function(){pr.push($(this).attr("val"));});
    this.VarData = {
        Rule1: c.find(".rule1>select").val(),
        Rule2: c.find(".rule2>select").val(),
        DecisionPriority: pr
    };
    c.HideModal();
}
UARuleDesigner.SerializeData = function (defn, value) {
    if (!value)
        return "";
    var xml = [];
    xml.push("<Input Name=\"" + $.encodeXml(defn.Name, true) + "\" >");
    xml.push("<Rule1>" + $.defaultVal(value.Rule1, "") + "</Rule1>");
    xml.push("<Rule2>" + $.defaultVal(value.Rule2, "") + "</Rule2>");
    xml.push("<DecisionPriority>" + ($.isArray(value.DecisionPriority)?value.DecisionPriority.join("$#$"):"") + "</DecisionPriority>");
    xml.push("</Input>");
    return xml.join("");

}

function CheckBoxEditor(varDefn, varData, actDefn) {
    this.VarDefn = varDefn;
    this.VarData = (varData ? varData :false);
    this.ActivityDefn = actDefn;
}
CheckBoxEditor.prototype.RenderInputItem = function () {
    var div = $("<div class='row'></div>");
    var lbl = $("<span style='min-width: 90px' class='lbl'>" + this.VarDefn.Text + "</span>");
    lbl.attr("title", this.VarDefn.DataType + "," + this.VarDefn.Title);
    var chk = $('<input data-chk-off="No" style="font-size:12px" data-chk-on="Yes" type="checkbox" />');
    var evt = $.proxy(this.Checked, this);
    chk.on("click", evt);
    div.append(lbl);
    div.append(chk);
    chk.checked((this.VarData == true || this.VarData == "true"));
    chk.CheckBoxX();
    return div;
}
CheckBoxEditor.prototype.SaveData = function (input) { return input.find("input").checked(); }
CheckBoxEditor.prototype.Checked = function (e) {
    if (this.ActivityDefn.Name == "Decision" && this.PropertyName== "NotifyUsers") {
        var p = GetPropEditor("Message");
        if (p) {
            $("#" + p.ReferenceID).setDisplay($(e.target).checked());
        }
    }
    else if (this.ActivityDefn.Name == "Entity_Lock") {
        if (this.PropertyName == "AllowOwnerAccess") {
            var p = GetPropEditor("ChangeOwner");
            if (p) {
                $("#" + p.ReferenceID).setDisplay($(e.target).checked()).find("input").checked(false);
            }
            p = GetPropEditor("LockOwnerID");
            if (p) {
                $("#" + p.ReferenceID).setDisplay(false);
            }            
        }
        else if (this.PropertyName == "ChangeOwner") {
            var p = GetPropEditor("LockOwnerID");
            if (p) {
                $("#" + p.ReferenceID).setDisplay($(e.target).checked());
            }            
        }
    }
}





function Dropdown(varDefn, varData, actDefn) {
    this.VarDefn = varDefn;
    this.VarData = (varData ? varData : "");
    this.ActivityDefn = actDefn;
}
Dropdown.prototype.RenderInputItem = function () {
    var div = $("<div class='row'></div>");
    var lbl = $("<span style='min-width: 90px' class='lbl'>" + this.VarDefn.Text + "</span>");
    lbl.attr("title", this.VarDefn.DataType + "," + this.VarDefn.Title);
    var ddl = $('<select class="ddl"></select>');
    if (this.VarDefn.Name == "TemplateID") {
        ddl.append("<option value=''>Please Select A Letter Template</option>")
        var list = GetLetterList();
        $(list).each(function () { ddl.append("<option value='"+this.ID+"'>"+this.Name+"</option>") })
    }
    else if (this.VarDefn.Name == "LetterID") {
        ddl.append("<option value=''>Please Select A Merge Letter</option>")
        $(MergeLetterList).each(function () { ddl.append("<option value='" + this.lettertemplates_pid + "'>" + this.lettername + "</option>") })
    }
    else if (this.VarDefn.Name == "ReportID") {
        ddl.append("<option value=''>Please Select A Report</option>")
        $(ReportList).each(function () { ddl.append("<option eid='" + this.eid + "' value='" + this.pid + "'>" + this.rptname + "</option>") })
    }
    else if (this.VarDefn.Name == "Format") {
        ddl.append("<option value='PDF'>PDF</option>");
        ddl.append("<option value='EXCEL'>Excel</option>");
        ddl.append("<option value='WORD'>Word</option>");
    }
    else if (this.VarDefn.Name == "ReportFormat") {
        ddl.append("<option value='PDF'>PDF</option>");
        ddl.append("<option value='XLSX'>XLSX</option>");
        ddl.append("<option value='XLS'>XLS</option>");
        ddl.append("<option value='CSV'>CSV</option>");
        ddl.append("<option value='RTF'>RTF</option>");
        ddl.append("<option value='DOCX'>DOCX</option>");
        ddl.append("<option value='DOC'>DOC</option>");
        ddl.append("<option value='HTML'>HTML</option>");
        ddl.append("<option value='MHT'>MHT</option>");
        ddl.append("<option value='TXT'>TXT</option>");
        ddl.append("<option value='IMG'>IMG</option>");
    }
    ddl.val($.defaultVal(this.VarData, "").Trim('"'));
    var evt = $.proxy(this.DropdownChange, this);
    ddl.on("change", evt);
    div.append(lbl);
    div.append(ddl);
    ddl.trigger("change");
    return div;
}
Dropdown.prototype.DropdownChange = function (e) {
    if (this.ActivityDefn.Name == "SendMail" || this.ActivityDefn.Name == "SendBatchMail") {
        var p = GetPropEditor("Subject");
        if (p) {
            $("#" + p.ReferenceID).setDisplay($.isEmpty($(e.target).val()));
        }
        p = GetPropEditor("Body");
        if (p) {
            $("#" + p.ReferenceID).setDisplay($.isEmpty($(e.target).val()));
        }
    }
    else if (this.ActivityDefn.Name == "ExportFile") {
        var p = GetPropEditor("Settings");
        if (!p)
            return;
        var fmt = $("#" + this.ReferenceID).find(".ddl").val();
        $("#" + p.ReferenceID).children().hide().filter(".fmt_" + fmt).show();
    }
}
Dropdown.prototype.SaveData = function (input) { input = input ? input : $("#" + this.ReferenceID); return input.find("select").val(); }
Dropdown.SerializeData = function (defn, value) {
    return "<Input Name=\"" + $.encodeXml(defn.Name, true) + "\" >\"" + $.encodeXml($.defaultVal(value, "").Trim('"'), true) + "\"</Input>";
}

function MessageSettings(varDefn, varData, actDefn) {
    this.VarDefn = varDefn;
    this.VarData = (varData ? varData : false);
    this.ActivityDefn = actDefn;
}
MessageSettings.prototype.RenderInputItem = function () {
  
    var div = $("<div  class='row'></div>");
    var lbl = $("<span style='min-width: 90px' class='lbl'>" + this.VarDefn.Text + "</span>");
    lbl.attr("title", this.VarDefn.DataType + "," + this.VarDefn.Title);
    var btn = $('<input type="button" class="ActionButton GreenButton" value="Message Settings"/>');
    var evt = $.proxy(this.ShowMsgSettings, this);
    btn.on("click", evt);
    div.append(lbl);
    div.append(btn);   
    var chk= GetPropEditorData("NotifyUsers");
    div.setDisplay(chk == true);
    return div;
}
MessageSettings.prototype.ShowMsgSettings = function () {
    var div = $("<div class='formSettings' style='width:450px;padding-bottom: 35px;' ></div>");
    this.CtlID = div.NewID().attr("id")
    $(document.body).append(div);

    var row = $('<span class="row" style="display:none"><span class="lbl" >Message Mode :</span><select class="mode ddl" ><option value="Email">E-mail</option><option value="Sms">Sms</option></select></span>');
    div.append(row);

    var ip = { Name: "EmailConfigID", Text: "EmailConfigID", Title: "", DataType: "String", EditorType: "RecordSelector" };
    var prop = new RecordSelector(ip, (this.VarData ? $.defaultVal(this.VarData.ConfigID,null) : ""), this.ActivityDefn);
    //row = $('<span class="row"><span class="lbl" style="width:135px">Choose Configuration :</span><select class="cfg"><option value="1">config 1</option><option value="2">Config 2</option></select></span>');
    div.append(row);
    var item = prop.RenderInputItem().
                addClass("inputItem " + ip.Name ).
                data("__InputName", ip.Name);  
    item.NewID("Input");
    prop.ReferenceID = item.attr("id");
    prop.PropertyName =this.VarDefn.Name+"."+ ip.Name;
    this.EmailConfigID = prop;
    div.append(item);

    ip = { Name: "TemplateID", Text: "TemplateID", Title: "", DataType: "String", EditorType: "Dropdown" };
    prop = new Dropdown(ip, (this.VarData ? $.defaultVal(this.VarData.TemplateID, "") : ""), this.ActivityDefn);
    var item = prop.RenderInputItem().
                addClass("inputItem " + ip.Name).
                data("__InputName", ip.Name);
    item.NewID("Input");
    prop.ReferenceID = item.attr("id");
    prop.PropertyName = this.VarDefn.Name + "." + ip.Name;
    this.TemplateID = prop;
    div.append(item);

    ip = { Name: "From", Text: "From", Title: "", DataType: "String"};
    prop = new DefaultPropEditor(ip, (this.VarData ? $.defaultVal(this.VarData.From, "WFUser[\"email\"].C2Str()") : "WFUser[\"email\"].C2Str()"), this.ActivityDefn);
    var item = prop.RenderInputItem().
                addClass("inputItem " + ip.Name).
                data("__InputName", ip.Name);
    item.NewID("Input");
    prop.ReferenceID = item.attr("id");
    prop.PropertyName = this.VarDefn.Name + "." + ip.Name;
    this.From = item;
    div.append(item);   
   

    ip = { Name: "To", Text: "To", Title: "", DataType: "String" };
    prop = new DefaultPropEditor(ip, (this.VarData ? $.defaultVal(this.VarData.To, "\"Field.Email\"") : "\"Field.Email\""), this.ActivityDefn);
    var item = prop.RenderInputItem().
                addClass("inputItem " + ip.Name).
                data("__InputName", ip.Name);
    item.NewID("Input");
    prop.ReferenceID = item.attr("id");
    prop.PropertyName = this.VarDefn.Name + "." + ip.Name;
    this.To = item;
    div.append(item);

    ip = { Name: "CC", Text: "CC", Title: "", DataType: "String" };
    prop = new DefaultPropEditor(ip, (this.VarData ? $.defaultVal(this.VarData.CC, "") : ""), this.ActivityDefn);
    var item = prop.RenderInputItem().
                addClass("inputItem " + ip.Name).
                data("__InputName", ip.Name);
    item.NewID("Input");
    prop.ReferenceID = item.attr("id");
    prop.PropertyName = this.VarDefn.Name + "." + ip.Name;
    this.CC = item;
    div.append(item);
    
    ip = { Name: "Bcc", Text: "Bcc", Title: "", DataType: "String"};
    prop = new DefaultPropEditor(ip, (this.VarData ? $.defaultVal(this.VarData.Bcc, "") : ""), this.ActivityDefn);
    var item = prop.RenderInputItem().
                addClass("inputItem " + ip.Name).
                data("__InputName", ip.Name);
    item.NewID("Input");
    prop.ReferenceID = item.attr("id");
    prop.PropertyName = this.VarDefn.Name + "." + ip.Name;
    this.Bcc = item;
    div.append(item);

    ip = { Name: "HighPriority", Text: "HighPriority", Title: "", DataType: "String", EditorType: "CheckBoxEditor" };
    prop = new CheckBoxEditor(ip, (this.VarData ? (this.VarData.HighPriority===true) : false), this.ActivityDefn);
    var item = prop.RenderInputItem().
                addClass("inputItem " + ip.Name).
                data("__InputName", ip.Name);
    item.NewID("Input");
    prop.ReferenceID = item.attr("id");
    prop.PropertyName = this.VarDefn.Name + "." + ip.Name;
    this.HighPriority = item;
    div.append(item);


    var btnSave = $('<input type="button" class="ActionButton GreenButton" value="Save Settings"/>');
    evt = $.proxy(this.SaveSettings, this);
    btnSave.on("click", evt);
    var btnCancel = $('<input type="button" onclick="$(this).closest(\'.formSettings\').HideModal().remove();" class="ActionButton GlassButton RedColor" style="margin-left:5px" value="Cancel"/>');
    var cmd = $("<span class='row' style='position:absolute;bottom:0;left:0;right:5px;text-align: right;'></span>")
    cmd.append(btnSave)
    cmd.append(btnCancel)
    div.append(cmd);

    if (this.VarData) {
        var v = this.VarData;
        div.find(".mode").val($.defaultVal(v.Mode, ""));        
    }

    div.ShowModal();

}
MessageSettings.prototype.SaveMsg = function (data) {
    if (!data)
        return;
    this.VarData = (this.VarData ? this.VarData : {});
    this.VarData.MessageText = data.Body;
    this.VarData.MessageSubject = data.Subject;
}
MessageSettings.prototype.GetMsg = function () {
    return this.VarData ? { Body: $.defaultVal(this.VarData.MessageText, ""), Subject: $.defaultVal(this.VarData.MessageSubject, "") } : { Body: "", Subject: "" };
}
MessageSettings.prototype.SaveSettings = function () {    
    var d = $("#" + this.CtlID);
    this.VarData = { Mode: d.find(".mode").val(), ConfigID: this.EmailConfigID.SaveData(), TemplateID: this.TemplateID.SaveData(), From: this.From.find(".txt").val(), To: this.To.find(".txt").val(), CC: this.CC.find(".txt").val(), Bcc: this.Bcc.find(".txt").val(), HighPriority: this.HighPriority.find("input").checked() };
    d.HideModal();
}
MessageSettings.SerializeData = function (defn, value) {
    if (!value)
        return "";
    var xml = [];
    xml.push("<Input Name=\"" + $.encodeXml(defn.Name, true) + "\" >");
    xml.push("<Mode>" + $.defaultVal(value.Mode, "") + "</Mode>");
    xml.push("<ConfigID>" + RecordSelector.SerializeData({ Name: "EmailConfigID"}, value.ConfigID) + "</ConfigID>");
    xml.push("<TemplateID>" + $.defaultVal(value.TemplateID, "") + "</TemplateID>");
    xml.push("<From>" + $.defaultVal(value.From, "") + "</From>");
    xml.push("<To>" + $.defaultVal(value.To, "") + "</To>");
    xml.push("<CC>" + $.defaultVal(value.CC, "") + "</CC>");
    xml.push("<Bcc>" + $.defaultVal(value.Bcc, "") + "</Bcc>");
    xml.push("<HighPriority>" + $.defaultVal(value.HighPriority, false) + "</HighPriority>");

    xml.push("</Input>");
    return xml.join("");

}

function ForEachEditor(varDefn, varData, actDefn) {
    this.VarDefn = varDefn;   
    this.ActivityDefn = actDefn;
}
ForEachEditor.SerializeData = function (defn, value) {
    if (!value)
        return "";
    var xml = [];
    xml.push("<Input Name=\"IteratorItem\">" + $.encodeXml($.defaultVal(value.IteratorItem,"\"item\""), true) + "</Input>");
    xml.push("<Input Name=\"" + $.encodeXml(defn.Name, true) + "\" ForEachList=\"" + $.encodeXml(value.ForEachList, true) + "\" >");
    
    if ($.isArray(value.Conditions)) {
        for (var i = 0; i < value.Conditions.length; i++) {
            var c = value.Conditions[i];
            xml.push("<Condition>");
            xml.push("<Expr>" + $.encodeXml(c.Expr) + "</Expr>");
            xml.push("<WfItems>");
            if ($.isArray(c.WfItems)) {
                for (var x = 0; x < c.WfItems.length; x++) {
                    var itemdefn = c.WfItems[x];
                    xml.push('<Node Name="' + $.encodeXml(itemdefn.Name, true) + '" Text="' + $.encodeXml(itemdefn.Text, true) + '" Title="' + $.encodeXml(itemdefn.Title, true) + '" >');
                    xml.push(serializeIO(itemdefn));
                    xml.push('</Node>');
                }
            }
            xml.push("</WfItems>");
            xml.push("</Condition>");
        }

    }

    xml.push("</Input>");
    return xml.join("");

}


function RecordSelector(varDefn, varData, actDefn) {
    this.VarDefn = varDefn;
    if (typeof varData == "string" && !$.isEmpty(varData))
        this.VarData = { Mode: "Entry", EditorResult: varData };
    else
        this.VarData = (varData ? varData : {});
    this.ActivityDefn = actDefn;
    this.sid = "456456456456";
}
RecordSelector.prototype.RenderInputItem = function () {
    var ctr = $("<div ></div>");
    var div = $("<div  class='row'></div>");
    this.EditorID = div.NewID("RecordSelector").attr("id");
    this.tempData = {};
    this.tempData.EditorResult = this.VarData.EditorResult;
    this.tempData.Mode = this.VarData.Mode;
    this.tempData.Title = this.VarData.Title;

    var lbl = $("<span style='min-width: 90px' class='lbl'>" + this.VarDefn.Text + "</span>");
    lbl.attr("title", this.VarDefn.DataType + "," + this.VarDefn.Title);
    var btns = $('<span class="btns"></span>');
    var b1 = $('<a class="b1" href="javascript:void(0)">Enter Value</a>');
    var b2 = $('<a class="b2" href="javascript:void(0)">Filter</a>');
    var b3 = $('<a class="b3" href="javascript:void(0)">Pick List</a>');
    btns.append(b1); btns.append("<span style='font-weight:bold'>&nbsp;/&nbsp;</span>"); btns.append(b2); btns.append("<span style='font-weight:bold'>&nbsp;/&nbsp;</span>"); btns.append(b3);
    var data = $("<span class='data' style='display:none'></span>");
    div.append(lbl);
    div.append(btns);
    div.append(data);
    ctr.append(div);

    

    var p = $("<span class='b1' style='display:none'></span>");
    data.append(p);
    var input = $('<textarea rows="1" class="txt"></textarea>');
    input.on("focus", { Defn: this.VarDefn, ActDefn: this.ActivityDefn, ShowDefaults: true }, this.Autocomplete);
    input.on("blur", this.HideAutocomplete);   
    p.append(input);
    p.append('<a class="expr" href="javascript:void(0)" onclick="showEditor($(this))">...</a>');

    p = $("<span class='b2' style='display:none'></span>");
    var _b2= $("<a  href='javascript:void(0)'>Select Filter</a>");
    p.append(_b2);
    data.append(p);

    p = $("<span class='b3' style='display:none'></span>");
    var _b3 = $("<a  href='javascript:void(0)'>Please Select</a>");
    p.append(_b3);
    data.append(p);

    b1.on("click", function () {  });
    var evt = $.proxy(this.ShowInput, this);
    b1.on("click", evt);

    evt = $.proxy(this.ShowFilter, this);
    b2.on("click", evt);
    _b2.on("click", evt);

    evt = $.proxy(this.ShowPickList, this);
    b3.on("click", evt);
    _b3.on("click", evt);

    var cl = $('<a class="close" title="Clear Data" href="javascript:void(0)">X</a>');
    data.append(cl);
    evt = $.proxy(this.ResetData, this);
    cl.on("click", evt)

    if (this.VarData.Mode == "Entry") {
        btns.hide(); data.show(); data.children(".b1").show().find("textarea").val($.defaultVal(this.VarData.EditorResult, ""));
    }
    else if (this.VarData.Mode == "Filter") {
        btns.hide(); data.show(); data.children(".b2").show().find("a").html(($.isEmpty(this.VarData.EditorResult) ? "Apply Filter" : "Modify Filter"));
    }
    else if (this.VarData.Mode == "Pick") {
        btns.hide(); data.show(); data.children(".b3").show().find("a").html($.defaultVal(this.VarData.Title, "Please Select"));
    }

    return ctr;
}
RecordSelector.prototype.ResetData = function (e) {
    var c = $(e.target);
    c.parent().children(".b3").find("a").html("Please Select");
    c.parent().children(".b2").find("a").html("Apply Filter");
    c.parent().children(".b1").find(".txt").val("");
    c.parent().hide().prev().show();
    this.tempData = {};
}
RecordSelector.prototype._GetEntityID = function () {
    var eid = "";
    if (this.ActivityDefn.Name == "Entity_Load")
        eid = GetPropEditorData("EntityID").Trim('"');
    else if (this.ActivityDefn.Name == "SendMail" || this.VarDefn.Name == "EmailConfigID")
        eid = "tbl_CORE_EmailConfig";
    else if (this.ActivityDefn.Name == "SendSMS")
        eid = "tbl_CORE_smsconfig";
    else if (this.ActivityDefn.Name == "SaveResourceToFile")
        eid = "tbl_CORE_Resources";
    else if (this.ActivityDefn.Name == "SendNotification" || this.ActivityDefn.Name == "WFMovement" || this.ActivityDefn.Name == "Subflow" || this.ActivityDefn.Name == "Entity_Lock" || this.ActivityDefn.Name == "Entity_ChangeOwner" || this.ActivityDefn.Name == "Decision")
        eid = "tbl_SYS_Users";
    
    return eid;
}
RecordSelector.prototype.Autocomplete = function (e) {
    var input = $(e.target);
    var info = e.data.Defn;
    var div = $("#divEditorCtr_AutoPopup");
    if (!info)
        return;
    div = (div.exists() ? div.empty() : $("<div id='divEditorCtr_AutoPopup' class='propsAutoComplete' style='position:absolute'></div>"));
    var vars = GetVariableList({ DataType: info.DataType });
    if (e.data.Isoutput) {
        var a = $("<a href='javascript:void(0)' val=''>N/A</a>");
        div.append(a);
    }
    $(vars).each(function () {
        var a = $("<a href='javascript:void(0)' val='" + this.Name + "'>" + this.Name + "</a>");
        div.append(a);
    });

    if (e.data.ShowDefaults) {
        if (info.DataType.toUpperCase() == "BOOLEAN") {
            div.prepend("<a href='javascript:void(0)' val='false'>False</a>");
            div.prepend("<a href='javascript:void(0)' val='true'>True</a>");
        }
        if (info.DataType.toUpperCase() == "DATETIME") {
            div.prepend("<a href='javascript:void(0)' val='DateTime.Now'>Todays Date</a>");
        }
    }
    if (e.data.ActDefn.Name == "WFMovement") {
        if (info.Name == "UserID") {
            div.prepend("<a href='javascript:void(0)' val='CurrentDecisionTaker.RecordID'>Current Decision Taker</a>");
            div.prepend("<a href='javascript:void(0)' val='PreviousDecisionTaker.RecordID'>Previous Decision Taker</a>");
            div.prepend("<a href='javascript:void(0)' val='WFUser.RecordID'>WFUser</a>");
        }
    }
    div.children().on("mousedown", function () {
        var a = $(this);
        a.parent().hide().parent().children(".txt").val(a.attr("val"));
    });
    input.parent().append(div);
    div.css("min-width", input.outerWidth(true));
    var pos = input.position();
    div.css({ top: pos.top + input.outerHeight(true), left: pos.left }).setDisplay(div.children().length > 0);
    //if (div.isVisible())
    //    $(document).one("click", function () {
    //        $("#divEditorCtr_AutoPopup").remove();
    //    });
    return div;
}
RecordSelector.prototype.HideAutocomplete = function () {
    $("#divEditorCtr_AutoPopup").remove();
}
RecordSelector.prototype.ShowInput = function (e) {
    var b = $(e.target);
    if (b.hasClass("b1"))
        b.parent().hide().next().show().children("span").hide().filter(".b1").show();
    this.tempData.Mode = "Entry";
}
RecordSelector.prototype.ShowFilter = function (e) {
    var b = $(e.target);
    if (b.hasClass("b2"))
        b.parent().hide().next().show().children("span").hide().filter(".b2").show();
    this.tempData.Mode = "Filter";
    var eid = this._GetEntityID();
    if ($.isEmpty(eid)) {
        alert("Please choose an entity first.")
        return;
    }
    var data = new Object();
    data["Type"] = "ShowEntityFilter"; data["EID"] = eid; data["SID"] = this.sid; data["xml"] = (this.tempData ? $.defaultVal(this.tempData.EditorResult, "").Trim('"') : "");
    var edt = this;
    PageMethods.SetFilterSession(data, function () {
        var url = "../Meta/Filters_Add.aspx?PageMode=Settings&EID=" + eid + "&SID=" + edt.sid + "&Hidebutton=1&WF=1&WFEID=" + $.QS("EID") + "&ShowFilterBtn=1&ReturnXml=1";
        var p = $(document.body).ShowPopup({ url: url, zIndex: 4000, height: 475, width: 760, showClose: false, anim: false })
        p.css("padding-bottom", "30px");
        var btnSave = $('<input type="button" class="ActionButton GreenButton" value="Save Mappings"/>');
        evt = $.proxy(edt.SaveMappings, edt);
        btnSave.on("click", evt);
        var btnCancel = $('<input type="button" class="ActionButton GlassButton RedColor" style="margin-left:5px" value="Cancel"/>');
        evt = $.proxy(function () { $("#" + edt.PopupID).RemovePopup(); }, edt);
        btnCancel.on("click", evt);
        var cmd = $("<span class='row' style='position:absolute;bottom:3px;left:0;right:5px;text-align: right;border-top: solid 1px #E0E0E0;padding-top: 3px;padding-right: 5px;'></span>")
        cmd.append(btnSave)
        cmd.append(btnCancel)
        p.append(cmd);
        edt.PopupID = p.attr("id");
    });
}

RecordSelector.prototype.SaveMappings = function () {
    var ifr = $("#" + this.PopupID).children("iframe");
    var xml = "";
    if (ifr.exists() && ifr[0].contentWindow)
        xml = ifr[0].contentWindow.createXml();
    this.tempData.EditorResult = '"' + xml + '"';
    $("#" + this.PopupID).RemovePopup();
    $("#" + this.EditorID).children(".data").find(".b2").find("a").html(($.isEmpty(xml) ? "Apply Filter" : "Modify Filter"))
}
RecordSelector.prototype.ShowPickList = function (e) {
    var b = $(e.target);
    if (b.hasClass("b3"))
        b.parent().hide().next().show().children("span").hide().filter(".b3").show();
    this.tempData.Mode = "Pick";
    var eid = this._GetEntityID();
   
    if ($.isEmpty(eid)) {
        alert("Please choose an entity first.")
        return;
    }

    var divCtr = $("#divSearchListCtr");
    if (!divCtr.exists()) {
        divCtr = $("<div id='divSearchListCtr' class='ui-widget-content'><div style='top:0' class='sl-div-ifr'></div></div>");
        $(document.body).append(divCtr);
        divCtr.hide();
        $(document).on("click", function () { divCtr.hide(); })
        divCtr.on("click", function (e) { e.stopPropagation(); });
        divCtr.resizable({
            minHeight: 250,
            minWidth: 250
        });

    }
    divCtr.zIndex(4000);
    
    var ifrCtr = divCtr.children(".sl-div-ifr");
    var ifr = ifrCtr.find("iframe");
    if (!ifr.exists()) {
        ifr = $("<iframe   frameborder='0'></iframe>");
        ifrCtr.append(ifr);
    }
    if ($.defaultVal(ifr.attr("src"),"").indexOf("EID=" + eid + "&") < 0)
        ifr.attr("src", "../main/list.aspx?_ns=1&EID=" + eid + "&wf=1&fn=SavePickList&ref=" + this.PropertyName);

    var ctl = $("#"+this.EditorID);
    //var pos = ctl.getOffset();
    divCtr.show().position({ my: "left top", at: "left bottom", of: ctl.children(".data"),collision:"none none" });//.css({ top: pos.bottom + 5, left: pos.left });
    window.setTimeout(function () { divCtr.show(); }, 100);
}
RecordSelector.prototype.SavePickList = function (data) {
    this.tempData.EditorResult = '"' + data.RecordID + '"';
    this.tempData.Title = data.Title;
    $("#" + this.EditorID).children(".data").find(".b3").find("a").html($.defaultVal(data.Title, "Please Select"));
    $("#divSearchListCtr").hide();
}

RecordSelector.prototype.SaveData = function (input) {    
    if ($.isEmpty(this.tempData.Mode) || $("#" + this.EditorID).children(".btns").isVisible())
        return {};
    if (this.tempData.Mode == "Entry") {
        this.tempData.EditorResult = $("#" + this.EditorID).children(".data").children(".b1").show().find("textarea").val();
    }
    return this.tempData;
}
RecordSelector.SerializeData = function (defn, value) {
    
    var xml = [];
    xml.push("<Input Name=\"" + $.encodeXml(defn.Name, true) + "\" >");
    xml.push("<ResultFormat>" + (value.Mode == "Filter" ? "XML" : "TEXT") + "</ResultFormat>");
    xml.push("<EditorResult>" + (value.Mode == "Filter" ? $.defaultVal(value.EditorResult, "") : $.encodeXml(value.EditorResult)) + "</EditorResult>");
    xml.push("<EditorInfo><Mode>" + $.encodeXml(value.Mode) + "</Mode><EID>" + $.encodeXml(value.EID) + "</EID><Title>" + $.encodeXml($.defaultVal(value.Title,"")) + "</Title></EditorInfo>");
    xml.push("</Input>")
    return xml.join("");

}


function NotificationSetting(varDefn, varData, actDefn) {
    this.VarDefn = varDefn;
    this.VarData = varData;
    this.ActivityDefn = actDefn;
    
}
NotificationSetting.prototype.RenderInputItem = function () {
    var div = $("<div  class='row'></div>");
    var lbl = $("<span style='min-width: 90px' class='lbl'>" + this.VarDefn.Text + "</span>");
    lbl.attr("title", this.VarDefn.DataType + "," + this.VarDefn.Title);
    var btn = $('<input type="button" class="ActionButton GreenButton" value="Notification Settings"/>');
    var evt = $.proxy(this.ShowSettings, this);
    btn.on("click", evt);
    div.append(lbl);
    div.append(btn);
    return div;
}
NotificationSetting.prototype.ShowSettings = function () {
   
    var data = new Object();
    data["Type"] = "ShowNotification"; data["sid"] ="789789"; data["xml"] = (this.VarData ? $.defaultVal(this.VarData, "").Trim('"') : "");
    var edt = this;
    PageMethods.SetFilterSession(data, function (result) {
        edt.sid = result["sid"];
        var url = "../Meta/Notification_Add.aspx?PageType=WF&sid=" + result["sid"];
        var p = $(document.body).ShowPopup({ url: url, zIndex: 4000, height: 680, width: 1045, showClose: false, anim: false })
        p.css("padding-bottom", "30px");
        var btnSave = $('<input type="button" class="ActionButton GreenButton" value="Save"/>');
        evt = $.proxy(edt.SaveSettings, edt);
        btnSave.on("click", evt);
        var btnCancel = $('<input type="button" class="ActionButton GlassButton RedColor" style="margin-left:5px" value="Cancel"/>');
        evt = $.proxy(function () { $("#" + edt.PopupID).RemovePopup(); }, edt);
        btnCancel.on("click", evt);
        var cmd = $("<span class='row' style='position:absolute;bottom:3px;left:0;right:5px;text-align: right;border-top: solid 1px #E0E0E0;padding-top: 3px;padding-right: 5px;'></span>")
        cmd.append(btnSave)
        cmd.append(btnCancel)
        p.append(cmd);
        edt.PopupID = p.attr("id");
    });
    
}
NotificationSetting.prototype.SaveSettings = function () {
    var ifr = $("#" + this.PopupID).children("iframe");
    var xml = "";
    if (ifr.exists() && ifr[0].contentWindow)
        xml = ifr[0].contentWindow.createXml();
    if (xml === false)
        return;
    this.VarData = '"' + xml + '"';
    $("#" + this.PopupID).RemovePopup();

}
NotificationSetting.prototype.SaveData = function () { return this.VarData; }

function HtmlContainer(varDefn, varData, actDefn) {
    this.VarDefn = varDefn;
    this.VarData = varData;
    this.ActivityDefn = actDefn;
}
HtmlContainer.prototype.RenderInputItem = function () {
    var div = $("<div  class='row'></div>");
    if (this.VarDefn.Name == "Settings") {
        var p = GetPropEditor("Format");
        var fmt = $("#" + p.ReferenceID).find(".ddl").val();
        var pgs = ["A0", "A1", "A2", "A3", "A4", "A5", "RA0", "RA1", "RA2", "RA3", "RA4", "RA5", "B0", "B1", "B2", "B3", "B4", "B5", "Quarto", "Foolscap", "Executive", "GovernmentLetter", "Letter", "Legal", "Ledger", "Tabloid", "Post", "Crown", "LargePost", "Demy", "Medium", "Royal", "Elephant", "DoubleDemy", "QuadDemy", "STMT", "Folio", "Statement", "Size10x14"];
        //removed "Custom" as its not supported
        div.html("<div class='fmt_PDF lbl'>Page Size : <select class='_input' style='margin-right:25px' key='PageSize'></select><span class='_custompg' style='display:none'>Width : <input class='_input' type='text' style='width:30px;margin-right:8px' key='Width'/>Height : <input style='width:30px' class='_input' type='text' key='Height'/></span><br/><br/>Page Orientation : <select class='_input' key='PageOrientation'><option>Portrait</option><option>Landscape</option></select><br/><br/>Top Margin : <input class='_input' type='text' style='width:30px;margin-right:8px' key='MarginTop'/>Right Margin : <input style='width:30px;margin-right:8px' class='_input' type='text' key='MarginRight'/>Bottom Margin : <input style='width:30px;margin-right:8px' class='_input' type='text' key='MarginBottom'/>Left Margin : <input class='_input' style='width:30px;margin-right:8px' type='text' key='MarginLeft'/></div>");
        var ddl = div.find("._input[key=PageSize]");
        $(pgs).each(function () { ddl.append("<option>" + this + "</option>") });
        ddl.val("A4");
        ddl.on("change", function () { $(this).parent().find("._custompg").setDisplay($(this).val() == "Custom"); })
        div.children().hide().filter(".fmt_" + fmt).show();
        if (this.VarData) {
            for (p in this.VarData) {
                div.find("._input[key=" + p + "]").val(this.VarData[p]);
            }
        }
        ddl.trigger("change");
    }
    return div;
}
HtmlContainer.prototype.SaveData = function () {
    if (this.VarDefn.Name == "Settings") {
        var p = GetPropEditor("Format");
        var fmt = $("#" + p.ReferenceID).find(".ddl").val();
        if (fmt == "PDF" || fmt == "") {
            var obj = {};
            obj["Format"] = "PDF";
            $("#" + this.ReferenceID).find("._input").each(function () {
                obj[$(this).attr("key")] = $(this).val();
            });
            return obj;
        }
        else
            return {};
    }
}
HtmlContainer.SerializeData = function (defn, value) {
    if (defn.Name == "Settings") {
        var xml = [];
        xml.push("<Input Name=\"" + $.encodeXml(defn.Name, true) + "\" >");
        xml.push("<Format>" + value.Format + "</Format>");
        if ($.defaultVal(value.Format, "PDF") == "PDF") {
            xml.push("<PageSize>" + $.defaultVal(value.PageSize, "A4") + "</PageSize>");
            xml.push("<PageOrientation>" + $.defaultVal(value.PageOrientation, "Portrait") + "</PageOrientation>");
            xml.push("<Height>" + Fn.CFlt(value.Height) + "</Height>");
            xml.push("<Width>" + Fn.CFlt(value.Width) + "</Width>");
            xml.push("<MarginBottom>" + Fn.CInt(value.MarginBottom) + "</MarginBottom>");
            xml.push("<MarginLeft>" + Fn.CInt(value.MarginLeft) + "</MarginLeft>");
            xml.push("<MarginRight>" + Fn.CInt(value.MarginRight) + "</MarginRight>");
            xml.push("<MarginTop>" + Fn.CInt(value.MarginTop) + "</MarginTop>");
        }
        xml.push("</Input>")
        return xml.join("");
    }
    
}