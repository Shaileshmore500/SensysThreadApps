if (typeof Erp == "undefined")
    window.Erp = {};
var LayoutID = "";
var IsDependent = false;
Erp.ScriptEditors = {};
Erp.Designer = {};
Erp.Designer.LayoutType = "Item";
Erp.Designer.FieldList = [];
Erp.Designer.Collections = {};
Erp.Controls = {};
Erp.Designer.PropertyEditor = {};
Erp.Designer._toggleStates = {};
Erp.Designer._currentHighlightedNode = null;
Erp.Designer.Toolbox = {};
Erp.Designer.DragDrop = {};
Erp.Designer.Utils = {};

Erp.Designer.PropertyEditor.Default = function (opt) {
    this.options = opt;
}
Erp.Designer.PropertyEditor.Default.prototype.RenderItem = function (property, data,store,disabled,ctr) {
    var d = $("<input type='text'/>");
    if (this.options && this.options.placeholder)
        d.attr("placeholder", this.options.placeholder)
    if (property.readOnly)
        d.attr("readonly", "readonly");
    if (disabled)
        d.attr("disabled", "disabled");
    if (data)
        d.val(data);
    Erp.Designer.PropertyEditor.TriggerChange(this, d, "change");
    return d;
}
Erp.Designer.PropertyEditor.TriggerChange = function (editor, el, event) {
    el.on(event, { editor: editor },
        function (e) {
            if (typeof e.data.editor.onChange == "function" && e.data.editor.onChange(e.data.editor, $(this), e) === false)
                return;
            var v = null;
            if (editor.editorData)
                v = editor.data;
            else
                v = ($(this).attr("type") == "checkbox" ? $(this).checked() : $(this).val());
            var r = el.closest(".PropertyList").attr("refctl");
            var ctl = r ? $("#" + r) : Erp.Designer.GetSelectedControls();
            Erp.Designer.DataStore.SetData(ctl, e.data.editor.property, v);
        });   
}
Erp.Designer.PropertyEditor.Default.prototype.Serialize = undefined;//implemented in child class

Erp.Designer.PropertyEditor.Numeric = function (min, max) {
    this.min = min;
    this.max = max;
}
Erp.Designer.PropertyEditor.Numeric.prototype = Object.create(Erp.Designer.PropertyEditor.Default);
Erp.Designer.PropertyEditor.Numeric.prototype.RenderItem = function (property, data, store, disabled,ctr) {
    var d = $("<input type='number' " + (!isNaN(this.min) ? "min='" + this.min + "'" : "") + " " + (!isNaN(this.max) ? "max='" + this.max + "'" : "") + "/>");
    if (property.readOnly)
        d.attr("readonly", "readonly");
    if (disabled)
        d.attr("disabled", "disabled");
    if (!isNaN(data))
        d.val(data);
    Erp.Designer.PropertyEditor.TriggerChange(this, d, "change");
    return d;
}

Erp.Designer.PropertyEditor.Unit = function () {
  
}
Erp.Designer.PropertyEditor.Unit.prototype = Object.create(Erp.Designer.PropertyEditor.Default);
Erp.Designer.PropertyEditor.Unit.prototype.RenderItem = function (property, data, store, disabled, ctr) {
    var d = $("<input type='text'/>");
    d.on("input", function (e) {
        var v = $(this).val(); if ($.isEmpty(v)) return; var f = parseFloat(v);
        if (f == NaN || (isNaN(v) && f > 0 && (v.indexOf("%") < 1 || !$.isEmpty(v.split('%')[1]))))
            $(this).val("0");
    })
    if (property.readOnly)
        d.attr("readonly", "readonly");
    if (disabled)
        d.attr("disabled", "disabled");
    if (data)
        d.val(data);
    Erp.Designer.PropertyEditor.TriggerChange(this, d, "change");
    return d;
}

Erp.Designer.PropertyEditor.MultiLine = function (opt) {
    this.options = opt;
}
Erp.Designer.PropertyEditor.MultiLine.prototype = Object.create(Erp.Designer.PropertyEditor.Default);
Erp.Designer.PropertyEditor.MultiLine.prototype.RenderItem = function (property, data, store, disabled, ctr) {
    ctr.addClass("multiline");
    var d = $("<textarea rows=5></textarea>");
    if (this.options && this.options.placeholder)
        d.attr("placeholder", this.options.placeholder)
    if (property.readOnly)
        d.attr("readonly", "readonly");
    if (disabled)
        d.attr("disabled", "disabled");
    d.val(data);
    var b = Erp.Designer._toggleStates["p_"+property.name];   
    ctr.addClass(b == true ? "exp" : "");
    ctr.children(".lhs").on("click", { name: "p_" + property.name }, function (e) {
        $(this).parent().toggleClass("exp");
        if ($(this).parent().hasClass("exp")) {
            Erp.Designer._toggleStates[e.data.name] = true;
        }
        else {           
            delete Erp.Designer._toggleStates[e.data.name];
        }
    });
    Erp.Designer.PropertyEditor.TriggerChange(this, d, "change");
    return d;
}

Erp.Designer.PropertyEditor.Select = function (data,label,value,preSeed) {
    this.items = ($.isArray(data) ? data : []);
    this.label = $.defaultVal(label, "label");
    this.value = $.defaultVal(value, "value");
    this.preSeed = preSeed;
}
Erp.Designer.PropertyEditor.Select.prototype.RenderItem = function (property, data, store, disabled) {
    var d = $("<select></select>");
    if ($.isArray(this.preSeed)) {
        for (var i = 0; i < this.preSeed.length; i++) {
            var o = this.preSeed[i];
            if (o.hasOwnProperty("label"))
                d.append("<option value='" + o.value + "'>" + o.label + "</option>");
            else
                d.append("<option>" + o + "</option>");
        }
    }
    for (var i = 0; i < this.items.length; i++) {
        var o = this.items[i];
        if (o.hasOwnProperty(this.label))
            d.append("<option value='" + o[this.value] + "'>" + o[this.label] + "</option>");
        else
            d.append("<option>" + o + "</option>");
    }
    if (property.readOnly)
        d.attr("disabled", "disabled");
    if (disabled)
        d.attr("disabled", "disabled");
    if (data)
        d.val(data);
    Erp.Designer.PropertyEditor.TriggerChange(this, d, "change"); 
    
    return d;
}


Erp.Designer.PropertyEditor.MultiSelect = function (data,label,value,preSeed) {
    this.items = ($.isArray(data) ? data : []);
    this.label = $.defaultVal(label, "label");
    this.value = $.defaultVal(value, "value");
    this.preSeed = preSeed;
}

Erp.Designer.PropertyEditor.MultiSelect.prototype.RenderItem = function (property, data, store, disabled) {
    var div = $("<div></div>");
    var d = $("<input value='Please Select' readonly type='text'/>");
    d.NewID("mu-");
    if (disabled)
        d.attr("disabled", "disabled");
    if (!$.isArray(data))
        data=[];
    div.append(d);
    var d2 = $("<div style='display:none;width: 150px;background: #ffffff;white-space: normal;position: absolute;left: 124px;z-index: 100;border: 1px solid gray;box-shadow: rgb(126, 126, 126) 0px 0px 5px;padding: 6px;'></div>");
    d2.NewID("mulist-");
    if ($.isArray(this.preSeed)) {
        for (var i = 0; i < this.preSeed.length; i++) {
            var o = this.preSeed[i];
            if (o.hasOwnProperty("label"))
                d2.append("<label style='display:block' class='small' value='" + o.value + "'><input "+(data.filter(function(a){return a==o.value }).length>0?"checked":"")+" type='checkbox' /><span style='display:inline'>" + o.label + "</span></label>");
            else
                d2.append("<label style='display:block' class='small' ><input type='checkbox' "+(data.filter(function(a){return a==o }).length>0?"checked":"")+"/><span style='display:inline'>" + o + "</span></label>");
        }
    }
    for (var i = 0; i < this.items.length; i++) {
        var o = this.items[i];
        if (o.hasOwnProperty(this.label)){
            var __v= o[this.value];
            d2.append("<label style='display:block' class='small'  value='" +__v + "'><input type='checkbox' "+(data.filter(function(a){return a==__v  }).length>0?"checked":"")+"/><span style='display:inline'>" + o[this.label] + "</span></label>");
        }
        else
            d2.append("<label style='display:block' class='small' ><input type='checkbox' "+(data.filter(function(a){return a==o }).length>0?"checked":"")+"/><span style='display:inline'>" + o + "</span></label>");
    }

    div.append(d2);
    

    d2.on("click","label", { property: property, editor: this, data: data, store:store },function(e){
        e.stopPropagation();
        var chk=$(this).parent().find("input:checked");
        var _arr=[];
        chk.each(function(){_arr.push($(this).parent().attr("value"));});
        var all=_arr.filter(function(a){return a=="ALL" }).length>0;
        if(all)
            $(this).parent().find("input").each(function(){$(this).checked(true);if($(this).parent().attr("value")!="ALL")$(this).setEnable(false);});
        else
            $(this).parent().find("input").setEnable(true)
        e.data.store[e.data.property.name]=(all?["ALL"]:_arr);

    });

    d2.find("label[value='ALL']").find("input:checked").parent().parent().find("input").each(function(){$(this).checked(true);if($(this).parent().attr("value")!="ALL")$(this).setEnable(false);})

    d.on("click", function (e) {
        $(this).closest(".rhs").css("overflow", "initial").closest(".subCtr").css("overflow", "initial");
        window.setTimeout(function (a) {
            $("#" + a).show().css("width",$("#" + a).closest(".prop-item").outerWidth()- $("#" + a).closest(".prop-item").children(".lhs").outerWidth()-2);
            $(document).one("click", { id: a }, function (e) { $("#" + e.data.id).hide(); });
        }, 50, $(this).next().attr("id"));
        
    })

    
    return div;
}

Erp.Designer.PropertyEditor.PickList = function (data, label, value, meta) {
    this.editorData = true;
    this.items = ($.isArray(data) ? data : []);
    this.label = $.defaultVal(label, "label");
    this.value = $.defaultVal(value, "value");
    this.browseMeta = meta != null;
    if (this.browseMeta) {
        this.objectType = "Choose" + meta.mode;
        this.entityId = meta.eid;
    }
}
Erp.Designer.PropertyEditor.PickList.prototype.RenderItem = function (property, data, store, disabled) {
    this.data = null;
    var d = $("<a>Collection</a>");
    if (property.readOnly)
        d.attr("disabled", "disabled");
    if (disabled)
        d.attr("disabled", "disabled");
    d.on("click", { property: property, editor: this, data: data }, function (e) {
        var pnl = $("<div class='formSettings' style='position:absolute;width:350px;'><div style='margin-bottom: 5px;'><select class='browser-default _s' style='display: inline-block;width: 262px;padding:5px;height: initial;'></select><a class='mdl-button small GreyButton BlueColor _add'>Add</a></div><div style='border: solid 1px #d8d8d8;height: 200px;overflow: auto;box-shadow: inset 0 0 10px #f3f3f3;' class='_listCtr'></div><div style='text-align: right;margin-top: 5px;'><a class='mdl-button small GreyButton RedColor _cancel'>Cancel</a><a class='mdl-button small GreyButton GreenColor _ok'>Save</a></div></div>")
        var ddl = pnl.find("select");
        var edt = e.data.editor;
        if (edt.browseMeta) {
            var t = Erp.Designer.PropertyEditor.BrowseMeta.prototype.RenderItem.call(edt, e.data.property, ""); t.addClass("_s txt browser-default");
            t.css("padding", "6px").css("width", "262px")
            ddl.replaceWith(t);
            ddl = t;
        }
        for (var i = 0; i < edt.items.length; i++) {
            var o = edt.items[i];
            if (o.hasOwnProperty(edt.label))
                ddl.append("<option value='" + o[edt.value] + "'>" + o[edt.label] + "</option>");
            else
                ddl.append("<option>" + o + "</option>");
        }
        
        pnl.NewID("multi-");
        function addItem(isMeta, dd, item) {            
            if (item == undefined) {
                if ($.isEmpty(dd.val()))
                    return;
                if (isMeta)
                    item = { resources_pid: ddl.attr("val"), resourcename: ddl.val(), entityPath: ddl.attr("fp1"), path: ddl.attr("fp"), fieldInfo: ddl.attr("infoid")  };
                else
                    item = { resources_pid: ddl.val(), resourcename: ddl.selectedItem().text() };
            }
            var ctr = dd.closest(".formSettings").find("._listCtr");
            if (!isMeta && ctr.find("[value=" + item.resources_pid + "]").length > 0)
                return;
            ctr.append("<span title='" + (isMeta ?item.path : "") + "' value='" + item.resources_pid + "' " + (isMeta ? ("ep='" + item.entityPath + "' infoid='" + item.fieldInfo + "' " ): "") + " class='list-item' style='padding-right: 20px;'><span style='cursor:move' class='reorderIcon'></span><span class='_t'>" + item.resourcename + "</span><span class='closeIcon' onclick='$(this).parent().remove()' style='position:absolute;right:0;'></span></span>");
        }
        var data = e.data.data;
        if (edt.data)
            data = edt.data;
        if ($.isArray(data)) {
            for (var i = 0; i < data.length; i++) {                
                addItem(edt.browseMeta, ddl, edt.browseMeta ? data[i] : Erp.Designer.Utils.Filter(e.data.editor.items, "resources_pid", data[i]));
            }
        }
        ddl.val("");
        pnl.find("._add").on("click", { isMeta: edt.browseMeta }, function (e) { addItem(e.data.isMeta, $(this).parent().children("._s")); $(this).parent().children("._s").val(""); })
        pnl.find("._ok").on("click", { editor: edt }, function (e) {
            var ctr = $(this).closest(".formSettings").find("._listCtr");
            var arr = []; ctr.children().each(function () {
                if (e.data.editor.browseMeta)
                    arr.push({ resources_pid: $(this).attr("value"), resourcename: $(this).find("._t").text(), entityPath: $(this).attr("ep"),fieldInfo: $(this).attr("infoid"), path: $(this).attr("title") });
                else
                    arr.push($(this).attr("value"));
            });
            e.data.editor.data = arr;
            ctr = ctr.closest(".formSettings");
            ctr.trigger("change");
            ctr.HideModal(); ctr.remove();
           
        });
        pnl.find("._cancel").on("click", function () { var ctr = $(this).closest(".formSettings"); ctr.HideModal(); ctr.remove(); });
        pnl.find("._listCtr").sortable({ handle: ".reorderIcon" });
        Erp.Designer.PropertyEditor.TriggerChange(edt, pnl, "change");
        $(document.body).append(pnl);
        pnl.ShowModal({ maxTop: 150 });

    });
    
    
   
    return d;
}

Erp.Designer.PropertyEditor.AutoComplete = function (data, onPopulating) {
    this.items = ($.isArray(data) ? data : []);
    this.onPopulating = onPopulating;
}
Erp.Designer.PropertyEditor.AutoComplete.prototype.RenderItem = function (property, data, store, disabled) {
    var div = $("<div></div>");
    var d = $("<input type='text'/>");
    d.NewID("au-");
    if (property.readOnly)
        d.attr("disabled", "disabled");
    if (disabled)
        d.attr("disabled", "disabled");
    if (data)
        d.val(data);
    div.append(d);
    if (!property.readOnly && !disabled) {
        var sel = $("<select multiple='1' style='position:absolute;display:none;right:0;top:25px;z-index: 10;border: solid 1px #888888;box-shadow: 0px 1px 5px grey;height: 100px;'></select>");
        sel.NewID("sel-");
        var arr = this.items;
        if (typeof this.onPopulating == "function") {
            arr = this.onPopulating(property, data, store);
        }
        for (var i = 0; i < arr.length; i++) {
            var o = arr[i];
            if (o.hasOwnProperty("label"))
                sel.append("<option value='" + o.value + "'>" + o.label + "</option>");
            else
                sel.append("<option>" + o + "</option>");
        }
        div.append(sel);
        sel.on("click", function (e) { e.stopPropagation(); })
        sel.on("change", function () { $(this).prev().val($(this).hide().val()).trigger("change");})
    }
    d.on("click", function (e) {
        $(this).closest(".rhs").css("overflow", "initial").closest(".subCtr").css("overflow", "initial");
        window.setTimeout(function (a) {
            $("#" + a).show().prop("selectedIndex", -1).css("width",$("#" + a).closest(".prop-item").outerWidth()- $("#" + a).closest(".prop-item").children(".lhs").outerWidth()-2);
            $(document).one("click", { id: a }, function (e) { $("#" + e.data.id).hide(); });
        }, 50, $(this).next().attr("id"));
        
    })
    Erp.Designer.PropertyEditor.TriggerChange(this, d, "change");
    return div;
}

Erp.Designer.PropertyEditor.Check = function (data) {
    this.default = (data === true);
}
Erp.Designer.PropertyEditor.Check.prototype.RenderItem = function (property, data, store, disabled) {
    var id = $.NewID("pchk-");
    var d = $("<label class='small'><input " + (data == true ? "checked" : "") + " id='" + id + "' type='checkbox'><span></span></label>");
    if (property.readOnly)
        d.find("input").attr("disabled", "disabled");
    if (disabled)
        d.find("input").attr("disabled", "disabled");
    Erp.Designer.PropertyEditor.TriggerChange(this, d.find("input"), "change");
    return d;
}

Erp.Designer.PropertyEditor.ColorPicker = function () {
}
Erp.Designer.PropertyEditor.ColorPicker.prototype.RenderItem = function (property, data, store, disabled) {
    var d = $("<input style='padding: 3px !important;background-color: rgb(236, 236, 236);color: rgb(0, 0, 0);font-size: 11px !important;line-height: 11px;width: 60px !important;' type='text'/>");

    if (property.readOnly)
        d.attr("readonly", "readonly");
    if (disabled)
        d.attr("disabled", "disabled");
    if (data)
        d.val(data);
    d.simpleColorPicker({id:"__editorColorPicker"});
    Erp.Designer.PropertyEditor.TriggerChange(this, d, "change");
    return d;
}

Erp.Designer.PropertyEditor.Icon = function () {
}
Erp.Designer.PropertyEditor.Icon.prototype.RenderItem = function (property, data, store, disabled) {
    var d = $("<a><i class='fa'>" + (data ? data : "") + "</i>&nbsp;Choose Icon</a>");
    d.NewID("pa-");
    d.on("click", { property: property }, function (e) {
        var p = $(document.body).ShowPopup({ url: "Icons.html?fn=__selectIcon", showClose: false,maxTop: 100, height: 350, width: 510, reuse: true, title: "Choose Icon", enableDrag: true, enableResize: true });
        p.data("currentProp", e.data.property);
        p.data("currentLink", $(this).attr("id"));
        Erp.Designer.PropertyEditor["__currentIconWin"] = p.attr("id");
    });
    return d;
}
function __selectIcon(i) {
    var p = $("#" + Erp.Designer.PropertyEditor["__currentIconWin"]);
    var prop = p.data("currentProp");
    if (prop && typeof prop.editor.onChange == "function" && prop.editor.onChange(prop.editor, i, p) === false)
        return;
    Erp.Designer.DataStore.SetData(Erp.Designer.GetSelectedControls(), prop.name, i);
    $("#" + p.data("currentLink")).html("<i class='fa'>" + i + "</i>&nbsp;Please Select");
    p.RemovePopup();
}

Erp.Designer.PropertyEditor.BrowseMeta = function (objectType,entityId,withPath) {
    this.objectType = "Choose" + objectType;
    this.entityId = entityId;
    this.withPath = withPath;
}
Erp.Designer.PropertyEditor.BrowseMeta.prototype.RenderItem = function (property, data, store, disabled) {
    var d = $("<input type='text'/>");
    if (property.readOnly)
        d.attr("disabled", "disabled");
    if (disabled)
        d.attr("disabled", "disabled");
    d.NewID("pt-");
    d.val(data);
    d.on("click", { property: property, type: this.objectType, eid: this.entityId }, function (e) {
        var rhs=$(this).closest(".rhs");
        rhs.css("overflow", "initial");
        if (!$(this).next().hasClass("_p")) {
            $(this).after('<div class="_p" style="position: absolute;display: none;background-color:#FFF;border:solid 1px #BABABA;z-index:10;box-shadow: 2px 2px 5px #555;width: 250px;height: 275px;overflow: hidden;">' +
                        '<iframe style="height: 100%; width: 100%" scrolling="no" frameborder="0" src="fieldbrowser.aspx?mode=' + e.data.type + (e.data.type=="ChooseField" ? "&EID=" + e.data.eid : "") + '&nobg=1&fn=__selectEntity"></iframe>' +
                     '</div>');
            $(this).next().NewID("mbr-");
        }
        var p = $(this).next();
        if (p.isVisible())
            p.hide();
        else {
            e.stopPropagation();           
            p.show().position({ my: "left top", at: "left bottom", of: rhs.length > 0 ? rhs : $(this) });
            p.data("currentProp", e.data.property);
            p.data("currentLink", $(this).attr("id"));
            Erp.Designer.PropertyEditor["__currentEditorBrowser"] = p.attr("id");
            $(document).one("click", { id: p.attr("id") }, function (e) { $("#" + e.data.id).hide(); });
        }
       
    });
    return d;
}
function __selectEntity(d, v, fp, fp1,id) {
    if (v == "None")
        v = "";
    if (fp)
        fp = fp.Trim(["\\]", "["]);
    var p = $("#" + Erp.Designer.PropertyEditor["__currentEditorBrowser"]);
    var prop = p.data("currentProp");
    if (prop && typeof prop.editor.onChange == "function" && prop.editor.onChange(prop.editor, v, p) === false)
        return;
    if (prop.editor instanceof Erp.Designer.PropertyEditor.PickList) {
        $("#" + p.data("currentLink")).val(d).attr("fp1", fp1).attr("fp", fp).attr("val", v).attr("infoid", id);
    }
    else {
        var pval = (prop.editor.withPath ? fp : v);
        Erp.Designer.DataStore.SetData(Erp.Designer.GetSelectedControls(), prop.name, pval);
        $("#" + p.data("currentLink")).val(pval);
    }
    p.hide();
}

Erp.Designer.PropertyEditor.FileBrowser = function (ext, isFile) {
    this.Extension = $.defaultVal(ext, "Image");
    this.IsFilePath = (isFile == true);
}
Erp.Designer.PropertyEditor.FileBrowser.prototype.RenderItem = function (property, data, store, disabled) {
    var d = $("<div><input style='box-sizing: border-box;padding-right: 20px !important;' type='text'/><input style='margin: 1px 0 0 -20px !important;padding: 0px 5px !important;font-size: 14px;font-weight: bold;' type='button' value='...'/></div>");
    if (property.readOnly)
        d.children().attr("disabled", "disabled");
    if (disabled)
        d.children().attr("disabled", "disabled");
    d.NewID("ib-");
    d.children().eq(0).val(data);
   
    d.children().eq(1).on("click", { property: property,editor:this }, function (e) {
        var p = $(document.body).ShowPopup({ url: "HtmlResources_View.aspx?PageType=" + e.data.editor.Extension + "&fn=__selectFile" + (e.data.editor.IsFilePath ? "&file=1" : ""), showClose: false, maxTop: 100, height: 450, width: 750, reuse: true, title: "Choose " + (e.data.editor.Extension == "Image" ? "Image" : "File"), enableDrag: true, enableResize: true });
        Erp.Designer.PropertyEditor["__currentImageurl"] = $(this).parent().attr("id");
        Erp.Designer.PropertyEditor["__currentImagePop"] = p.attr("id");
    });
    Erp.Designer.PropertyEditor.TriggerChange(this, d.children().eq(0), "change");
    return d;
}
function __selectFile(i) {
    var p = $("#" + Erp.Designer.PropertyEditor["__currentImagePop"]);
    var t = $("#" + Erp.Designer.PropertyEditor["__currentImageurl"]).children().eq(0);
    t.val(i);
    t.trigger("change")
    p.RemovePopup();
}

Erp.Designer.PropertyEditor.VisibilityManager = function () {
    this.editorData = true;
}
Erp.Designer.PropertyEditor.VisibilityManager.prototype.RenderItem = function (property, data, store, disabled) {
    var d = $("<a>Manage Visibility</a>");
    if (property.readOnly)
        d.attr("disabled", "disabled");
    if (disabled)
        d.attr("disabled", "disabled");
    var elId = store.Name;
    d.on("click", { property: property, editor: this, data: data, elId: elId,store:store }, function (e) {
        var elId = e.data.elId;
        var pnlId = elId + "_" + property.name.replace(/\W/g, '');
        var pnl = $("#" + pnlId);
        if (pnl.exists()) {
            pnl.ShowModal({ maxTop: 150 });
            pnl.find("._listCtr").empty();
            loadData(pnl, e.data.store[e.data.property.name]);
            return;
        }
        pnl = $("<div class='formSettings' style='position:absolute;width:600px;min-width:475px;min-height:300px'>" +
                "<div style='margin-bottom: 5px;'>" +
                "<Select class='_state browser-default' style='display: inline-block;width: 160px;margin-right: 10px;padding: 5px;height: initial;box-sizing: border-box;font-size: 14px;'><option value=''>Please Select</option><option meta='<b>Server Hidden</b>' value='ServerHidden'>Server Hidden</option><option meta='<b>Client Hidden</b>' value='Hidden'>Client Hidden</option><option value='Collapsed'>Collapsed</option><option value='Disabled'>Disabled</option><option meta='<b>Visible</b> only ' value='Visible'>Visible</option><option meta='<b>Enabled</b> only ' value='Enabled'>Enabled</option></Select>" +
                "<Select class='_mode browser-default' style='display: inline-block;width: 160px;margin-right: 10px;padding: 5px;height: initial;box-sizing: border-box;font-size: 14px;'><option value=''>Any Mode</option><option value='Add'>Add Mode</option><option value='Edit'>Edit Mode</option><option value='Readonly'>View Mode</option><option meta='User with <b>Add Rights</b>' value='Add-Rights'>Add Rights</option><option  meta='User with <b>Edit Rights</b>' value='Edit-Rights'>Edit Rights</option><option  meta='User with <b>Delete Rights</b>' value='Delete-Rights'>Delete Rights</option><option  meta='User with <b>Add</b> or <b>Edit</b> Rights' value='Add,Edit-Rights'>Add or Edit Rights</option><option meta='User with <b>Add</b> or <b>Edit</b> or <b>Delete</b> Rights' value='Add,Edit,Delete-Rights'>Add or Edit or Delete Rights</option><option meta='User with <b>View Rights</b>' value='View-Rights'>View Rights</option></Select>" +
                "<Select class='_device browser-default' style='display: inline-block;width: 160px;margin-right: 10px;padding: 5px;height: initial;box-sizing: border-box;font-size: 14px;'><option meta='<b>Any</b> Device' value=''>Any Device</option><option  meta='<b>Desktop</b> Devices' value='Desktop'>Desktop</option><option meta='<b>Mobile</b> Devices'  value='Mobile'>Mobile</option></Select>" +
                "<a class='mdl-button small GreyButton BlueColor _add'>Add</a></div>" +
                "<div style='border: solid 1px #d8d8d8;height: 200px;overflow: auto;box-shadow: inset 0 0 10px #f3f3f3;' class='_listCtr'></div>" +
                "<div style='text-align: right;margin-top: 5px;'><a class='mdl-button small GreyButton RedColor _cancel'>Cancel</a><a class='mdl-button small GreyButton GreenColor _ok'>Ok</a></div>" +
                "</div>")
        pnl.attr("id", pnlId);
        var edt = e.data.editor;
        loadData(pnl,e.data.store[e.data.property.name]);
        function loadData(p, arr) {
            arr = $.defaultVal(arr, []);
            for (var i = 0; i < arr.length; i++)
                addItem(p, arr[i]);
            p.find("._state").val(""); p.find("._mode").val(""); p.find("._device").val("");
        }
        function addItem(ctr, obj) {
            var dd_s = ctr.find("._state"), dd_m = ctr.find("._mode"), dd_d = ctr.find("._device");
            if (obj) {
                dd_s.val(obj.Type); dd_m.val(obj.Mode); dd_d.val(obj.Device);
            }
            var val = (dd_s.val() + "|" + dd_m.val() + "|" + dd_d.val());
            var lst = ctr.find("._listCtr");
            if (dd_s.val() == "" || lst.children("[val='" + val + "']").length > 0)
                return;
            lst.append("<span val='" + val + "' class='list-item' style='padding-right: 20px;'>" + ($.defaultVal(dd_s.selectedItem().attr("meta"), "<b>" + dd_s.selectedItem().text() + "</b>") + " for " + $.defaultVal(dd_m.selectedItem().attr("meta"), "<b>" + dd_m.selectedItem().text() + "</b>") + " on " + $.defaultVal(dd_d.selectedItem().attr("meta"), "<b>" + dd_d.selectedItem().text() + "</b>")) + "<span class='closeIcon' style='position:absolute;right:0;'></span></span>");
        }

    
        pnl.find("._add").on("click", function (e) { addItem($(this).closest(".formSettings")); })
        pnl.find("._ok").on("click", { editor: edt, elId: e.data.elId }, function (e) {
            var ctr = $(this).closest(".formSettings").find("._listCtr");
            var arr = [];
            ctr.children().each(function () { var val = $(this).attr("val").split('|'); arr.push({ Type: val[0], Mode: val[1], Device: val[2] }); });
            e.data.editor.data = arr;
            ctr = ctr.closest(".formSettings");
            ctr.trigger("change");
            ctr.HideModal();

        });
        pnl.find("._cancel").on("click",function (e) { $(this).closest(".formSettings").HideModal(); })
        pnl.on("click", ".closeIcon", function (e) {
            e.stopPropagation();
            $(this).parent().remove();
        });
        Erp.Designer.PropertyEditor.TriggerChange(edt, pnl, "change");
        $(document.body).append(pnl);
        pnl.draggable();
        pnl.resizable();
        pnl.ShowModal({ maxTop: 150 });

    });



    return d;
}
Erp.Designer.PropertyEditor.VisibilityManager.prototype.Serialize = function (property, arr, store) {
    if (!arr || !$.isArray(arr))
        return "";
    var xml=[];
    for (var i = 0; i < arr.length; i++)
        xml.push("<State Type=\"" + arr[i].Type + "\" Mode=\"" + arr[i].Mode + "\" Device=\"" + arr[i].Device + "\" />");
    return xml.join('');
}

Erp.Designer.PropertyEditor.Button = function (label, onClick) {
    this.onClick = onClick;
    this.label = $.defaultVal(label, "label");
}
Erp.Designer.PropertyEditor.Button.prototype.RenderItem = function (property, data, store, disabled) {
    var d = $("<a>" + this.label + "</a>");
    if (property.readOnly)
        d.attr("disabled", "disabled");
    if (disabled)
        d.attr("disabled", "disabled");
    d.on("click", { property: property, editor: this, store: store }, this.onClick);

    return d;
}


Erp.Designer.PropertyEditor.Action = function () {
    this.editorData = true;
} 
Erp.Designer.PropertyEditor.Action.prototype.RenderItem = function (property, data, store, disabled) {
    var d = $("<a>Configure</a>");
    d.NewID("pa-");
    this.data = "";
    d.on("click", { property: property, editor: this, data: data, store: store }, function (e) {
        var edt = e.data.editor;

        var p = $(document.body).ShowPopup({ url: "urlhelper.aspx?cb=1", maxTop: 100, height: 410, width: 800, reuse: true, title: "Configure Action", enableDrag: true, enableResize: true });
        if (p.children(".btnPanel").exists()) {
            var d = (edt.data ? edt.data : e.data.data);
            d = (d ? JSON.parse(d) : null);
            p.find("iframe")[0].contentWindow.loadData(d);
            return;
        }
        p.find("iframe").attr("scrolling", "no").on("load", { data: e.data.data }, function (e) {
            if (!$(this).attr("src"))
                return;
            $(this)[0].contentWindow.loadData(e.data.data ? JSON.parse(e.data.data) : null);
        });
        p.css("padding-bottom", "30px");
        var btnSave = $('<input type="button" class="mdl-button small GreyButton GreenColor" value="Save"/>');
        var btnCancel = $('<input type="button" class="mdl-button small GreyButton RedColor" style="margin-left:5px" value="Cancel"/>');
        var cmd = $("<span class='row btnPanel' style='position:absolute;bottom:3px;left:0;right:5px;text-align: right;border-top: solid 1px #E0E0E0;padding-top: 3px;padding-right: 5px;'></span>")
        cmd.append(btnCancel)
        cmd.append(btnSave)
        p.append(cmd);
        btnCancel.on("click", { id: p.ID() }, function (e) { $("#" + e.data.id).RemovePopup(); })
        btnSave.on("click", { id: p.ID(), editor: edt }, function (e) {
            var ifr = $("#" + e.data.id).children("iframe");
            var d = "";
            if (ifr.exists() && ifr[0].contentWindow)
                d = ifr[0].contentWindow.saveUrl();
            d = (d && $.defaultVal(d.Action, "NONE") != "NONE" ? JSON.stringify(d) : "");

            $("#" + e.data.id).RemovePopup();
            e.data.editor.data = d;
            $("#" + e.data.id).trigger("change");
        });
        Erp.Designer.PropertyEditor.TriggerChange(edt, p, "change");


    });

    return d;
}


Erp.Designer.PropertyEditor.GridColumnMerge = function () {
 
}
Erp.Designer.PropertyEditor.GridColumnMerge.prototype.RenderItem = function (property, data, store, disabled) {
    var d = $("<a>Manage Column Groups</a>");
    if (property.readOnly)
        d.attr("disabled", "disabled");
    if (disabled)
        d.attr("disabled", "disabled");
    var gridId = store.Name;
    d.on("click", { property: property, editor: this, data: data, gridId: gridId }, function (e) {
        var pnlId = gridId + "_" + property.name.replace(/\W/g, '');
        var pnl = $("#" + pnlId);
        if (pnl.exists()) {
            pnl.ShowModal({ maxTop: 150 })
            return;
        }
        pnl = $("<div class='formSettings' style='position:absolute;width:600px;min-width:475px;min-height:300px'><div style='width:325px'>" +
                "<div style='margin-bottom: 5px;'><a class='mdl-button small GreyButton BlueColor _add'>Add Column Group</a></div>" +
                "<div style='border: solid 1px #d8d8d8;height: 200px;overflow: auto;box-shadow: inset 0 0 10px #f3f3f3;' class='_listCtr'></div>" +
                "<div style='text-align: right;margin-top: 5px;'><a class='mdl-button small GreyButton GreenColor _ok'>Ok</a></div>" +
                "</div>" +
                "<div class='PropertyList' style='position:absolute;left: 350px;right: 12px;top:54px;bottom:53px;border: solid 1px #e6e6e6;overflow-x: hidden;overflow-y: auto'></div>" +
                "</div>")
        pnl.attr("id", pnlId);
        var edt = e.data.editor;      
        function addItem(ctr, gid, gr) {
            if (!gr)
                gr = Erp.Designer.AppendControl($("<div control-type='GridColumnGroup'></div>"), $("#" + gid).children(".gridColumnGroup").addClass("allEdge"), null);
            ctr.append("<span val='" + gr.ID() + "' class='list-item' style='padding-right: 20px;'>New Group<span class='closeIcon' style='position:absolute;right:0;'></span></span>");
        }
        
        $("#" + gridId).children(".gridColumnGroup").children(".erp-GridColumnGroup").each(function () { addItem(pnl.find("._listCtr"), gridId, $(this)); })
        pnl.find("._add").on("click", { gridId: e.data.gridId }, function (e) { addItem($(this).closest(".formSettings").find("._listCtr"), e.data.gridId); })
        pnl.find("._ok").on("click", { editor: edt, gridId: e.data.gridId }, function (e) {
            $("#" + e.data.gridId).children(".gridColumnGroup").removeClass("allEdge")
            var ctr = $(this).closest(".formSettings").find("._listCtr");           
            ctr = ctr.closest(".formSettings");
            ctr.trigger("change");
            ctr.HideModal();

        });
        pnl.find("._listCtr").sortable({ handle: ".reorderIcon" });
        pnl.on("click", ".list-item,.closeIcon", function (e) {
            e.stopPropagation();
            var pl = $(this).closest(".formSettings").children(".PropertyList").show();
            if ($(this).hasClass("closeIcon")) {
                Erp.Designer.DeleteFields($("#" + $(this).parent().attr("val")), pl);
                $(this).parent().remove();
                return;
            }
            $(this).parent().children().removeClass("selected");
            $(this).addClass("selected");
            pl.attr("refctl", $(this).attr("val"));
            Erp.Controls.GridColumnGroup.LoadPropertyEditor(Erp.Designer.DataStore.GetData($("#" + $(this).attr("val"))), false,pl);
        });
        Erp.Designer.PropertyEditor.TriggerChange(edt, pnl, "change");
        $(document.body).append(pnl);
        pnl.draggable();      
        pnl.resizable();
        pnl.ShowModal({ maxTop: 150 });

    });



    return d;
}

Erp.Designer.PropertyEditor.Filter = function (isSubquery) {
    this.editorData = true;
    this.isSubquery = isSubquery;
}
Erp.Designer.PropertyEditor.Filter.prototype.RenderItem = function (property, data, store, disabled) {
    var d = $("<a>Set Criteria</a>");
    d.NewID("pa-");
    d.on("click", { property: property, editor: this, data: data, store: store }, function (e) {
        var edt = e.data.editor;
        var dic = new Object();
        var eid = (e.data.store.Type == "ChildGrid" && e.data.property.name == "Filter" ? e.data.store.Id : $.QS("EID"));
        if ($.isEmpty(eid)) {
            alert('Please select entity');
            return;
        }
        dic["Type"] = "ShowEntityFilter"; dic["EID"] =eid ; dic["SID"] = (e.data.store.Name + e.data.property.name); dic["_key"] = ((edt.isSubquery ? "subxmldata" : "filterData") + dic["SID"]); dic["srno"] = ""; dic["ParamCheck"] = ""; dic["SubMode"] = "E"; dic["PageType"] = "E"; dic["NoTitle"] = (edt.isSubquery == true); dic[edt.isSubquery ? "SubQuery" : "xml"] = (e.data.data ? $.defaultVal(e.data.data, "").Trim('"') : "");
        PageMethods.SetFilterSession(dic, function () {
            var p = $(document.body).ShowPopup({
                url: "../Meta/Filters_Add.aspx?PageMode=" + (edt.isSubquery ? "subquery" : "Settings") + "&" + (edt.isSubquery ? "PrID" : "EID") + "=" + $.QS("EID") + "&SID=" + dic["SID"] + "&Hidebutton=1&ShowFilterBtn=1&ReturnXml=1",
                showClose: false, maxTop: 100, height: 475, width: 795, reuse: true, title: "Apply Filter", enableDrag: true, enableResize: true
            });
            if (p.children(".btnPanel").exists())
                return;
            p.css("padding-bottom", "30px");
            var btnSave = $('<input type="button" class="mdl-button small GreyButton GreenColor" value="Save"/>');
            var btnCancel = $('<input type="button" class="mdl-button small GreyButton RedColor" style="margin-left:5px" value="Cancel"/>');
            var cmd = $("<span class='row btnPanel' style='position:absolute;bottom:3px;left:0;right:5px;text-align: right;border-top: solid 1px #E0E0E0;padding-top: 3px;padding-right: 5px;'></span>")
            cmd.append(btnCancel)
            cmd.append(btnSave)
            p.append(cmd);
            btnCancel.on("click", { id: p.ID() }, function (e) { $("#" + e.data.id).RemovePopup(); })
            btnSave.on("click", { id: p.ID(), editor: edt }, function (e) {
                var ifr = $("#" + e.data.id).children("iframe");
                var xml = "";
                if (ifr.exists() && ifr[0].contentWindow)
                    xml = ifr[0].contentWindow.createXml();
                if (xml === false)
                    return;

                $("#" + e.data.id).RemovePopup();
                e.data.editor.data = xml;
                $("#" + e.data.id).trigger("change");
            });
            Erp.Designer.PropertyEditor.TriggerChange(edt, p, "change");
        });

    });

    return d;
}


Erp.Designer.PropertyEditor.ViewList = function () {
    this.editorData = true;
}
Erp.Designer.PropertyEditor.ViewList.prototype.RenderItem = function (property, data, store, disabled) {
    var d = $("<a>Select View</a>");
    if (property.readOnly)
        d.attr("disabled", "disabled");
    if (disabled)
        d.attr("disabled", "disabled");
    var gridId = store.Name;
    d.on("click", { property: property, editor: this, data: data, gridId: gridId, store: store }, function (e) {
        var gridId = e.data.gridId;
        if (Fn.IsEmpty(e.data.store.Id)) {
            alert("Please select Entity");
            return;
        }
        var pnlId = gridId + "_" + property.name.replace(/\W/g, '');
        var pnl = $("#" + pnlId);
        var exists = false;
        if (!pnl.exists()) {
            pnl = $("<div class='formSettings' style='position:absolute;min-width:475px;min-height:300px'><div style='width:430px'>" +
                    "<div style='margin-bottom: 5px;'><select style='width: 100%;display: inline-block;padding: 5px;height: initial;box-sizing: border-box;font-size: 14px;' class='browser-default'><option>asdasd</option></select></div>" +
                    "<div style='border: solid 1px #d8d8d8;height: 200px;overflow: auto;box-shadow: inset 0 0 10px #f3f3f3;' class='_listCtr'></div>" +
                    "<div style='text-align: right;margin-top: 5px;'><label class='small' style='float:left'><input class='_reset' type='checkbox'/><span></span>Reset All Columns And Apply</label><a class='mdl-button small GreyButton RedColor _cancel'>Cancel</a><a class='mdl-button small GreyButton GreenColor _ok'>Ok</a></div>" +
                    "</div>")
            pnl.attr("id", pnlId);
        }
        else
            exists = true;
        var edt = e.data.editor;
        var ddl = pnl.find("select");

        if (Fn.IsEmpty(pnl.data("CurrentEntity")) || !Fn.Eq(pnl.data("CurrentEntity"), e.data.store.Id)) {
            var ctr = pnl.find("._listCtr");
            ctr.empty();
            ddl.empty();
            ddl.append("<option value=''>Loading...</option>")

            PageMethods.LoadViewList(e.data.store.Id, function (arr) {
                arr = eval(arr)
                pnl.data("CurrentEntity", e.data.store.Id);
                pnl.data("ViewData", arr);
                ddl.empty();
                ddl.append("<option value=''>Please Select</option>")
                for (var i = 0; i < arr.length; i++) {
                    ddl.append("<option value='" + arr[i].ViewID + "'>" + arr[i].ViewName + "</option>");
                }
                ddl.val("");
                if (!Fn.IsEmpty(e.data.store.ViewID)) {
                    ddl.val(e.data.store.ViewID);
                    loadCols(gridId, e.data.store.ViewID, true);
                    pnl.data("ViewID", e.data.store.ViewID);
                }
            });
        }
        else {
            if (!Fn.IsEmpty(e.data.store.ViewID)) {
                ddl.val(e.data.store.ViewID);
                loadCols(gridId, e.data.store.ViewID, true);
                pnl.data("ViewID", e.data.store.ViewID);
            }
        }
        if (exists) {
            pnl.ShowModal({ maxTop: 150 });
            return;
        }
        ddl.on("change", { gridId: gridId }, function () { loadCols(e.data.gridId, $(this).val(), false); })

        function loadCols(gridId, vid, load) {
            var pnl = $("#" + gridId + "_ViewID");
            var viewData = Erp.Designer.Utils.Filter(pnl.data("ViewData"), "ViewID", vid);
            var grid = $("#" + e.data.gridId).find(".col-ctr");
            var ctr = pnl.find("._listCtr");
            ctr.empty();
            for (var i = 0; i < viewData.Cols.length; i++) {
                var cl = grid.children("[colid='" + viewData.Cols[i].HtmlID + "']");
                if(cl.length==0)cl = grid.children("[colid='" + viewData.Cols[i].Name + "']");
                ctr.append("<span colid='" + viewData.Cols[i].HtmlID + "' entitypath='" + viewData.Cols[i].EntityPath + "' wd='" + viewData.Cols[i].Width + "' class='list-item' style='padding-right: 20px;'><label class='small'><input " + (!load || (cl.length > 0 && !cl.hasClass("hidden")) ? "checked" : "") + " type='checkbox'><span style='vertical-align: middle;padding-left: 26px;margin-left: 5px;height: 20px;'></span></label><span class='_t'>" + viewData.Cols[i].Title + "</span></span>");
            }
        }

        $("#" + gridId).children(".gridColumnGroup").children(".erp-GridColumnGroup").each(function () { addItem(pnl.find("._listCtr"), gridId, $(this)); })
        pnl.find("._cancel").on("click", { gridId: e.data.gridId }, function (e) { $(this).closest(".formSettings").HideModal(); })
        pnl.find("._ok").on("click", { id: pnl.ID(), editor: edt, gridId: e.data.gridId, viewId: e.data.data }, function (e) {
            var grid = $("#" + e.data.gridId).find(".col-ctr");
            var ctr = $(this).closest(".formSettings");
            ctr = ctr.closest(".formSettings");
            var chk = ctr.find("input");
            var selViewid = ctr.find("select").val();
            if ($(this).parent().find("._reset").checked() || !Fn.Eq(ctr.data("ViewID"), selViewid)) {
                grid.empty();
                grid.append("<div class='colChk'><label class='hdr'></label><label class='itm'></label><label class='itm'></label><label class='itm'></label><label class='ftr'></label></div>");
            }
            chk.each(function () {
                if ($(this).hasClass("_reset"))
                    return true;
                var col = $(this).closest(".list-item");
                var c = grid.children("[colid='" + col.attr("colid") + "']");
                if (c.length > 0)
                    c.removeClass("hidden").addClass($(this).checked() ? '' : ' hidden');
                else
                    grid.append('<div style="width:' + col.attr("wd") + (col.attr("wd").indexOf("%") > 0 ? "" : "px") + '" colid="' + col.attr("colid") + '" entitypath="' + col.attr("entitypath") + '" class="erp-GridColumn' + (col.attr("wd").indexOf("%") > 0 ? " pc" : " px") + ($(this).checked() ? '' : ' hidden') + '"><label class="hdr" style="margin-bottom: 0px;">' + col.find("._t").text() + '<a class="close" title="Remove Column" href="javascript:void(0)" onclick="$(this).closest(\'.erp-GridColumn\').addClass(\'hidden\');">&times;</a></label><label class="itm"></label><label class="itm"></label><label class="itm"></label><label class="ftr"></label></div>');
            });
            grid.children(".px").resizable({
                handles: "e", stop: function (event, ui) {
                }
            });

            ctr.HideModal();
            e.data.editor.data = selViewid;
            $("#" + e.data.id).trigger("change");

        });


        Erp.Designer.PropertyEditor.TriggerChange(edt, pnl, "change");
        $(document.body).append(pnl);
        pnl.draggable();
        pnl.resizable();
        pnl.ShowModal({ maxTop: 150 });

    });



    return d;
}


Erp.Designer.PropertyEditor.SourceEditor = function (mode) {
    this.editorData = true;
    var m = $.defaultVal(mode, "HTML");//CSS,JS,HTML,SQL
    if (m == "HTML")
        m = "text/html";
    else if (m == "CSS")
        m = "text/css";
    else if (m == "SQL")
        m = "text/x-sql";
    else if (m == "CSHARP")
        m = "text/x-csharp";
    else if (m == "JS")
        m = "JS";
    else if (m == "XML")
        m = "application/xml";
    else if (m == "CSS")
        m = "text/css";
    this.Mode = m;
}
Erp.Designer.PropertyEditor.SourceEditor.prototype.RenderItem = function (property, data, store, disabled) {
    var d = $("<a>HTML Content</a>");
    if (property.readOnly)
        d.attr("disabled", "disabled");
    if (disabled)
        d.attr("disabled", "disabled");
    var ctlId = store.Name;
    d.on("click", { property: property, editor: this, data: data, ctlId: ctlId, store: store }, function (e) {
        var ctlId = e.data.ctlId;       
        var pnlId = ctlId + "_" + e.data.property.name.replace(/\W/g, '');
        var pnl = $("#" + pnlId);
        var exists = false;
        if (!pnl.exists()) {
            pnl = $("<div class='formSettings' style='position:absolute;min-width:475px;min-height:300px;height:400px;width:600px'><div class='cm-ctr' style='height:100%;box-sizing:border-box;padding-bottom:30px'><textarea></textarea></div>" +
                    "<div style='text-align: right;margin-top: -30px;'><a class='mdl-button small GreyButton RedColor _cancel'>Cancel</a><a class='mdl-button small GreyButton GreenColor _ok'>Ok</a></div>" +
                    "</div>")
            pnl.attr("id", pnlId);
            var srcEditor = CodeMirror.fromTextArea(pnl.find("textarea")[0], {
                addModeClass: true,
                matchBrackets: true,
                lineNumbers: true,
                autoCloseTags: true,
                autoCloseBrackets: true,
                extraKeys: {
                    "Ctrl-Space": "autocomplete", "'.'": function (cm) {
                        setTimeout(function () { cm.execCommand("autocomplete"); }, 100);
                        throw CodeMirror.Pass; // tell CodeMirror we didn't handle the key 
                    },
                    "Ctrl-Q": function (cm) { cm.foldCode(cm.getCursor()); }
                },
                lineWrapping: false,
                minFoldSize: 1,
                foldGutter: true,
                gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                mode: e.data.editor.Mode == "JS" ? { name: "javascript", globalVars: false } : e.data.editor.Mode
            });
            pnl.data("srcEditor", srcEditor)
        }
        else
            exists = true;

        
        var srcEditor = pnl.data("srcEditor");
        srcEditor.setValue($.defaultVal(e.data.store[e.data.property.name],""));       
        CodeMirror.commands["selectAll"](srcEditor);
        var range = { from: srcEditor.getCursor(true), to: srcEditor.getCursor(false) }
        srcEditor.autoFormatRange(range.from, range.to);
        srcEditor.setCursor(0);

        if (exists) {
            pnl.ShowModal({ maxTop: 150 });
            srcEditor.refresh();
            return;
        }
        pnl.find("._cancel").on("click", { ctlId: ctlId }, function (e) { $(this).closest(".formSettings").HideModal(); })
        pnl.find("._ok").on("click", { id: pnl.ID(), editor: e.data.editor, ctlId: ctlId }, function (e) {
        
            var fs = $(this).closest(".formSettings");
            fs.HideModal();
            var srcEditor = fs.data("srcEditor");
            e.data.editor.data = srcEditor.getValue();
            $("#" + e.data.id).trigger("change");

        });
       
        Erp.Designer.PropertyEditor.TriggerChange(e.data.editor, pnl, "change");
        $(document.body).append(pnl);
        pnl.draggable();
        pnl.resizable();
        pnl.children(".cm-ctr").on("mousedown", function (e) { e.stopPropagation(); });
        pnl.ShowModal({ maxTop: 150 });
        srcEditor.refresh();
    });



    return d;
}

Erp.Designer.Property = function (opt) {
    if (typeof opt == "string")
        opt = { "name": opt };
    this.category = opt.category;
    this.subCategory = opt.subCategory;
    this.canGroup = opt.canGroup;
    this.readOnly = opt.readOnly;
    this.displayOnly = opt.displayOnly;
    this.hidden = opt.hidden;
    this.noEncode = opt.noEncode;
    this.arrayItems = opt.arrayItems;
    this.requireOverride = opt.requireOverride;
    this.disableIfDatabound = opt.disableIfDatabound;
    this.name = opt.name;
    this.defaultValue = opt.defaultValue;
    this.label = $.defaultVal(opt.label, this.name);
    this.tooltip = $.defaultVal(opt.tooltip, this.label);
    this.editor = (opt.editor ? opt.editor : new Erp.Designer.PropertyEditor.Default());
    this.editor.property = this.name;
    if (typeof opt.onChange == "function")
        this.editor.onChange = opt.onChange;
    if (typeof opt.onSerialize == "function")
        this.onSerialize = opt.onSerialize;
}
Erp.Designer.Property.Serialize = function (data, list, childProps) {
    if(!data)
        return "";
    var xml = [];
    childProps = $.isArray(childProps) ? childProps : [""];
    for (var x = 0; x < childProps.length; x++) {
        var cp = childProps[x];
       
        var _xml = [];
        var ix = "";
        for (var i = 0; i < list.length; i++) {
            var p = list[i];
            if ($.isEmpty(cp) && p.name.indexOf(".") > -1)
                continue;
            if (!$.isEmpty(cp) && p.name.indexOf(cp + ".") < 0)
                continue;
            if (!this.IsGridBased && p.subCategory == "Width" && this.Type !="Fab")
                continue;
            var val = data[p.name];
            if (p.displayOnly || typeof val == "undefined")
                continue;
            if (!$.isEmpty(cp) && p.arrayItems)
                _xml.push(' IsArray="1" ');
           
            if (typeof p.editor.Serialize == "function") {
                var v = p.editor.Serialize(p, val, data);
                if (!$.isEmpty(cp) && p.name == (cp + "."))
                    ix = $.defaultVal(v, "");
                else if (v != null)
                    _xml.push(" " + ($.isEmpty(cp) ? p.name : p.name.split('.')[1]) + "=\"" + $.encodeXml(v) + "\" ");
            }
            else if (!$.isEmpty(cp) && p.name == (cp + "."))
                ix = (p.noEncode ? val : $.encodeXml(val, false));
            else if (p.requireOverride && !$.isEmpty(data["DatasourceID"])) {
                if (val && val.override)
                    _xml.push(" " + ($.isEmpty(cp) ? p.name : p.name.split('.')[1]) + "=\"" + $.encodeXml((p.requireOverride ? val.final : val), true) + "\" ");
            }
            else
                _xml.push(" " + ($.isEmpty(cp) ? p.name : p.name.split('.')[1]) + "=\"" + $.encodeXml(val, true) + "\" ");
        }
        var xm = _xml.join('');
        if ($.isEmpty(xm) && $.isEmpty(cp))
            continue;
        if (!$.isEmpty(cp))
            xml.push("<" + cp);
        xml.push(xm);
        if (!$.isEmpty(cp))
            xml.push(">" + ix + "</" + cp + ">");
    }
    return xml.join('')
}


Erp.Designer.FormLayout = function () {

    function onPropChange(ed, el, ev) {
     
        switch (ed.property) {
            case "Script": {
                $("#PropertyList").find(".prop-item[prop=DllPath]").setDisplay(el.val() == "Ext")
                $("#PropertyList").find(".prop-item[prop=ClassName]").setDisplay(el.val()=="Ext")
                break;
            }
            case "ShowHeader": {
                $("#editor-content").children("header").setDisplay(el.checked())
                break;
            }
            case "ShowLeftPane": {
                $("#"+(Erp.Designer.LayoutType == "Grid"?"dgData":"MainPanel")).removeClass("showLP").addClass(el.checked() ? "showLP" : "");
                if(!$("#main_leftPane").exists())
                    $("#MainPanel").append('<div id="main_leftPane" control-type="LeftPane" class="ctr erp-control leftPane"></div>')
                if(Erp.Designer.LayoutType != "Grid")
                    $("#Fab-Main").parent().removeClass("showLP").addClass(el.checked() ? "showLP" : "")
                break;
            }
            case "ShowRightPane": {
                $("#"+(Erp.Designer.LayoutType == "Grid"?"dgData":"MainPanel")).removeClass("showRP").addClass(el.checked() ? "showRP" : "");
                if(!$("#main_rightPane").exists())
                    $("#MainPanel").append('<div id="main_rightPane" control-type="RightPane" class="ctr erp-control rightPane"></div>')
                if(Erp.Designer.LayoutType != "Grid")
                    $("#Fab-Main").parent().removeClass("showRP").addClass(el.checked() ? "showRP" : "")
                break;
            }
            case "ShowFooter": {
                $("#editor-content").children("footer").setDisplay(el.checked())
                break;
            }
            case "ShowFAB": {
                $("#editor-content").children(".fixed-action-bar,.fixed-action-btn").setDisplay(el.checked())
                break;
            }
            case "FormStyleVersion": {
                $("#RAD_SPLITTER_PANE_CONTENT_rpContainer").removeClass("form-v1 form-v2").addClass("form-"+el.val())
                break;
            }
            default:
                break;
        }
    }
    this.PropertyList = [
        new Erp.Designer.Property({ name: "Type", readOnly: true, displayOnly: true }),
        new Erp.Designer.Property({ name: "Name", hidden: true }),
        new Erp.Designer.Property({ name: "LayoutName", title: "Layout Name" }),
        new Erp.Designer.Property({ name: "LayoutKey", title: "Key" }),
        new Erp.Designer.Property({ name: "LayoutDescription", title: "Description", editor: new Erp.Designer.PropertyEditor.MultiLine()}),
        new Erp.Designer.Property({ name: "ResourceVersion", title: "Resource Version" }),
        new Erp.Designer.Property({ category: "Behaviour", name: "FormStyleVersion", label: "Form Style Version", editor: new Erp.Designer.PropertyEditor.Select([{ label: "V1", value: "v1" }, { label: "V2", value: "v2" }]), onChange: onPropChange }),
        new Erp.Designer.Property({ category: "Behaviour", name: "MobileForm", label: "Mobile Only Layout", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ category: "Behaviour", name: "FullScreen", label: "Full Screen Mode",tooltip:"Enabling full screen will hide home screen. Current page will act as home screen", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ category: "Behaviour", name: "ShowHeader", label: "Show Header", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ category: "Behaviour", name: "ShowFAB", label: "Show FAB", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ category: "Behaviour", name: "ShowFooter", label: "Show Footer", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ category: "Behaviour", name: "ShowLeftPane", label: "Show Left Pane", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ category: "Behaviour", name: "ShowRightPane", label: "Show Right Pane", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        //new Erp.Designer.Property({ category: "Behaviour", name: "CompactLayout", label: "Compact Layout", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),

        new Erp.Designer.Property({ category: "Settings", name: "HtmlTemplate", title: "Html Template", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Select(Erp.Designer.Collections.Templates, "resourcename", "resources_pid") }),
        new Erp.Designer.Property({ category: "Settings", name: "StyleSheets", title: "Css", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.PickList(Erp.Designer.Collections.StyleSheets, "resourcename", "resources_pid") }),
        new Erp.Designer.Property({ category: "Settings", name: "ClientScripts", title: "Client Script", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.PickList(Erp.Designer.Collections.ClientScripts, "resourcename", "resources_pid") }),
        new Erp.Designer.Property({ category: "Settings", subCategory: "Server Script", name: "Script", title: "Script", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Select(Erp.Designer.Collections.ServerScripts, "resourcename", "resources_pid") }),
        new Erp.Designer.Property({ category: "Settings", subCategory: "Server Script", name: "DllPath", title: "Dll Path", editor: new Erp.Designer.PropertyEditor.FileBrowser('dll', true) }),
        new Erp.Designer.Property({ category: "Settings", subCategory: "Server Script", name: "ClassName", title: "Class Name" }),
        new Erp.Designer.Property({ canGroup: true, category: "Events", name: "OnInit", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Events", name: "OnBeforeLoad", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Events", name: "OnLoad", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Events", name: "OnLoadComplete", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Events", name: "OnSave", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Events", name: "OnSaveSuccess", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Events", name: "OnSaveError", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Events", name: "OnWfComplete", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Events", name: "OnClose", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Events", name: "OnResize", onChange: onPropChange })
    ];
    Erp.Designer.ToggleCategoryByName("Server Script", true, true);
    this.Type = "FormLayout";
    this.DisplayName = "FormLayout";
    this.HideInToolbar = true;
    id = "editor-container";
    if (!Erp.Designer.DataStore[id])
        Erp.Designer.DataStore[id] = { Name: id, HtmlID: id, Type: this.Type };
}
Erp.Designer.FormLayout.prototype.LoadPropertyEditor = function (data, multi) {
    Erp.Controls.Control.LoadPropertyEditor.call(this, data, multi);
    $("#PropertyList").find(".prop-item[prop=DllPath]").setDisplay(data && data["Script"]=="Ext")
    $("#PropertyList").find(".prop-item[prop=ClassName]").setDisplay(data && data["Script"] == "Ext")
}
Erp.Designer.FormLayout.prototype.GetObject = function (el) {
    return this;
}
Erp.Designer.FormLayout.prototype.GetProperty = function (p) {
    return Erp.Designer.Utils.Filter(this.PropertyList, "name", p);
}

Erp.Designer.Control = function () {

    function onPropChange(ed, el, ev, ctl) {
        var ctl = ctl ? ctl : Erp.Designer.GetSelectedControls();
        switch (ed.property) {
            case "HtmlID": {
                if ($.isEmpty(el.val())) {
                    //alert("Html ID cannot be blank.")
                    //return false;
                    return true;
                }
                var found = false;
                $("#editor-content").find(".erp-control").each(function () {
                    var ds = Erp.Designer.DataStore.GetData($(this).ID());
                    if (ds && ds.HtmlID == el.val()) {
                        found = true;
                        return false;
                    }
                })
                if (found) {
                    alert("Another control with same Html ID already exists.")
                    return false;
                }
                Erp.Designer.Update("Modified", ctl, el.val());
            }
            case "Small":
            case "Medium":
            case "Large":
            case "XLarge":
                {
                    ctl.each(function () {
                        var c = $(this);
                        var p = ed.property.substring(0, 1).toLowerCase();
                        p=(p=="x"?"xl":p);
                        for (var i = 0; i <= 199; i++){
                            c.removeClass(p + i);
                        }
                        c.addClass(p + (el.val() / 1 < 1 ? 1 : el.val()));
                    });
                    break;
                }
            case "CssClass": {
                ctl.each(function () {
                    var c = $(this);
                    var cls = Erp.Designer.getControlObject(c);
                    var data = Erp.Designer.DataStore.GetData(c);
                    c.attr("class", cls.GetBaseCssClasses(data) + " " + cls.CssClass(data, c) + " " + el.val());
                    c.addClass("ctl-selected");
                });
                break;
            }
            case "Style": {
                ctl.each(function () {
                    var c = $(this);
                    var data = Erp.Designer.DataStore.GetData(c);

                    if (!$.isEmpty(data["Style"])) {
                        var arr = data["Style"].split(';');
                        for (var i = 0; i < arr.length; i++) {
                            var css = arr[i];
                            if (css.indexOf(":") < 0)
                                continue;
                            c.css(css.split(':')[0], "");
                        }
                    }
                    var s = c.attr("style");
                    s += ";" + el.val();
                    c.attr("style", s);
                });

                break;
            }           
            case "ElementStates.":
                {                  
                    ctl.removeClass("ctl-hidden").addClass($.isArray(ed.data) && ed.data.length > 0 ? "ctl-hidden" : "");
                    break;
                }
            case "DisabledAdd":
            case "DisabledEdit":
                {
                    ctl.each(function () {
                        var c = $(this);
                        var data = Erp.Designer.DataStore.GetData(c);
                        c.removeClass("ctl-disabled");
                        if (el.checked()
                            || (ed.property != "DisabledAdd" && data["DisabledAdd"])
                            || (ed.property != "DisabledEdit" && data["DisabledEdit"])
                            )
                            c.addClass("ctl-disabled");
                    });
                    break;
                }
            case "Icon":
                {
                    var isCtr = this.IsContainer;
                    ctl.each(function () {
                        var c = $(this);
                        var ic = null;
                        if (isCtr)
                            ic = c.children().eq(0).find("i").eq(0);
                        else
                            ic = c.find("i").eq(0);
                        ic.html(el);
                        var cls = Erp.Designer.getControlObject($(this));
                        if (cls.Type == "Field" || cls.IsFormField)
                            ic.removeClass("prefix").addClass(el != "" ? "prefix" : "");
                    });
                    break;
                }
            case "BgColor":
                {
                    ctl.css("background-color", el.val());
                    break;
                }
            case "BgImage":
                {
                    ctl.css("background-image", ($.isEmpty(el.val()) ? "" : "url(" + el.val().replace("%APPROOT%", AppRootPath) + ")"));
                    break;
                }
            case "BgRepeat":
                {
                    ctl.css("background-repeat", el.val().toLowerCase());
                    break;
                }
            case "BgPosition":
                {
                    ctl.css("background-position", el.val().toLowerCase());
                    break;
                }
            case "BgSizing":
                {
                    ctl.css("background-size", el.val());
                    break;
                }
            case "Height":
                {
                    ctl.each(function () {
                        var c = $(this);
                        var cls = Erp.Designer.getControlObject($(this));
                        var ctr = $();
                        if (cls.IsContainer)
                            ctr = cls.GetContainer($(this));
                        if (ctr.length == 0)
                            ctr = $(this);
                        var h = (el.val().toLowerCase() == "fitcontent" ? "" : el.val());
                        ctr.css("height", h);
                        if ($.isEmpty(h))
                            ctr.css("overflow", "");
                        else
                            ctr.css("overflow", "auto");
                    });

                    break;
                }
            case "BoxModel":
                {
                    ctl.css("display", el.val());
                    break;
                }
            case "Position":
            case "Top":
            case "Left":
            case "Bottom":
            case "Right":
                {
                    ctl.css(ed.property.toLowerCase(), el.val());
                    break;
                }
            case "FontFamily":
                {
                    ctl.each(function () {
                        var c = $(this);
                        var cls = Erp.Designer.getControlObject($(this));
                        (cls.IsContainer ? cls.GetContainer(c) : c).css("font-family", el.val());
                    });
                    break;
                }
            case "FontSize":
                {
                    ctl.each(function () {
                        var c = $(this);
                        var cls = Erp.Designer.getControlObject($(this));
                        (cls.IsContainer ? cls.GetContainer(c) : c).css("font-size", el.val() + (el.val() / 1 > 0 ? "px" : ""));
                    });
                    break;
                }
            case "FontColor":
                {
                    ctl.each(function () {
                        var c = $(this);
                        var cls = Erp.Designer.getControlObject($(this));
                        (cls.IsContainer ? cls.GetContainer(c) : c).css("color", el.val());
                    });
                    break;
                }
            case "FontItalic":
                {
                    ctl.each(function () {
                        var c = $(this);
                        var cls = Erp.Designer.getControlObject($(this));
                        (cls.IsContainer ? cls.GetContainer(c) : c).css("font-style", el.checked() ? "italic" : "");
                    });
                    break;
                }
            case "FontWeight":
                {
                    ctl.each(function () {
                        var c = $(this);
                        var cls = Erp.Designer.getControlObject($(this));
                        (cls.IsContainer ? cls.GetContainer(c) : c).css("font-weight", el.val());
                    });
                    break;
                }
            case "TextDecoration":
                {
                    ctl.each(function () {
                        var c = $(this);
                        var cls = Erp.Designer.getControlObject($(this));
                        (cls.IsContainer ? cls.GetContainer(c) : c).css("text-decoration", el.val());
                    });
                    break;
                }
            case "HorizontalAlign":
                {
                    ctl.each(function () {
                        var c = $(this);
                        var cls = Erp.Designer.getControlObject($(this));
                        (cls.IsContainer ? cls.GetContainer(c) : c).css("text-align", el.val());
                    });
                    break;
                }
            case "VerticalAlign":
                {
                    ctl.css("vertical-align", el.val());
                    break;
                }
            case "OnLoad":
            case "OnRender":
            case "OnSave":
            case "OnValid":
            case "OnChange":
            case "OnClick":
                {
                    if (!$.isEmpty(el.val()))
                        ctl.addClass("hasEvent");
                    else {
                        ctl.each(function () {
                            var c = $(this);
                            var d = Erp.Designer.DataStore.GetData(c);
                            c.removeClass("hasEvent");
                            if ((ed.property != "OnLoad" && !$.isEmpty(d["OnLoad"])) || (ed.property != "OnRender" && !$.isEmpty(d["OnRender"])) || (ed.property != "OnSave" && !$.isEmpty(d["OnSave"]))
                                || (ed.property != "OnValid" && !$.isEmpty(d["OnValid"])) || (ed.property != "OnChange" && !$.isEmpty(d["OnChange"])) || (ed.property != "OnClick" && !$.isEmpty(d["OnClick"])))
                                c.addClass("hasEvent");
                        })
                    }
                    break;
                }
            default:
                break;
        }
    }

    this.PropertyList = [
        new Erp.Designer.Property({ name: "Type", readOnly: true, displayOnly: true }),
        new Erp.Designer.Property({ name: "Name", hidden: true }),
        new Erp.Designer.Property({ name: "HtmlID", label: "Html ID", onChange: onPropChange }),
        new Erp.Designer.Property("Tag"),
        new Erp.Designer.Property({ name: "Attributes", editor: new Erp.Designer.PropertyEditor.MultiLine() }),
        new Erp.Designer.Property({ canGroup: true, category: "Visibility", label: "Visiblity", name: "ElementStates.", noEncode: true,arrayItems:true, onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.VisibilityManager() }),
        new Erp.Designer.Property({ canGroup: true, category: "Visibility", name: "GridSelectionVisibility", label: "Grid Selection Visibility", editor: new Erp.Designer.PropertyEditor.Select([{ label: "Default", value: "" }, { label: "Always", value: "_all" }, { label: "Show On Single Selection", value: "_soss" }, { label: "Show On Multi-Selection", value: "_soms" }, { label: "Show On Any Selection", value: "_soas" }, { label: "Hide On Any Selection", value: "_hoas" }]), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Appearance", defaultValue: 6, subCategory: "Width", name: "Small", label: "Small <=600px", tooltip:"Upto 600px", editor: new Erp.Designer.PropertyEditor.Numeric(1, 12), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Appearance", defaultValue: 6, subCategory: "Width", name: "Medium", label: "Medium <=992px",tooltip:"Upto 992px", editor: new Erp.Designer.PropertyEditor.Numeric(1, 12), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Appearance", defaultValue: 4, subCategory: "Width", name: "Large", label: "Large <=1200px",tooltip:"Upto 1200px", editor: new Erp.Designer.PropertyEditor.Numeric(1, 12), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Appearance", defaultValue: 3, subCategory: "Width", name: "XLarge", label: "Extra Large > 1200px",tooltip:"Above 1200px", editor: new Erp.Designer.PropertyEditor.Numeric(1, 12), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Appearance", name: "Height", label: "Height", editor: new Erp.Designer.PropertyEditor.AutoComplete(["FitContent"]), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Appearance", name: "BoxModel", label: "Box-Model", editor: new Erp.Designer.PropertyEditor.AutoComplete(["inline", "block", "inline-block"]), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Appearance", name: "HorizontalAlign", label: "Horizontal Align", editor: new Erp.Designer.PropertyEditor.AutoComplete(["inherit", "left", "right", "center"]), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Appearance", name: "VerticalAlign", label: "Vertical Align", editor: new Erp.Designer.PropertyEditor.AutoComplete(["inherit", "baseline", "sub", "super", "top", "text-top", "middle", "bottom", "text-bottom"]), onChange: onPropChange }),

        new Erp.Designer.Property({ canGroup: true, category: "Appearance", subCategory: "Font-Style", name: "FontFamily", label: "Font Family", editor: new Erp.Designer.PropertyEditor.AutoComplete(["Inherit", "Arial", "Verdana", "Roboto", "Sans-serif", "Monospace", "OpenSans", "ArchivoNarrow", "NunitoRegular", "NunitoLight", "NunitoBold", "FontAwesome"]), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Appearance", subCategory: "Font-Style", name: "FontSize", label: "Size", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Appearance", subCategory: "Font-Style", name: "FontColor", label: "Color", editor: new Erp.Designer.PropertyEditor.ColorPicker(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Appearance", subCategory: "Font-Style", name: "FontItalic", label: "Italic", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Appearance", subCategory: "Font-Style", name: "FontWeight", label: "Weight", editor: new Erp.Designer.PropertyEditor.AutoComplete([{ label: "Inherit", value: "inherit" }, { label: "Thin", value: "200" }, { label: "Light", value: "300" }, { label: "Medium", value: "500" }, { label: "Bold", value: "bold" }]), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Appearance", subCategory: "Font-Style", name: "TextDecoration", label: "Text Decoration", editor: new Erp.Designer.PropertyEditor.AutoComplete(["Inherit", "none", "underline", "line-through", "overline"]), onChange: onPropChange }),

        new Erp.Designer.Property({ canGroup: true, category: "Appearance", subCategory: "Background", name: "BgColor", label: "Background Color", editor: new Erp.Designer.PropertyEditor.ColorPicker(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Appearance", subCategory: "Background", name: "BgImage", label: "Background Image", editor: new Erp.Designer.PropertyEditor.FileBrowser(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Appearance", subCategory: "Background", name: "BgSizing", label: "Background Sizing", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Select([{ label: "None", value: "" }, { label: "Fit", value: "contain" }, { label: "Fill", value: "cover" }]) }),
        new Erp.Designer.Property({ canGroup: true, category: "Appearance", subCategory: "Background", name: "BgRepeat", label: "Background Repeat", editor: new Erp.Designer.PropertyEditor.AutoComplete(["Repeat", "Repeat-X", "Repeat-Y", "No-Repeat"]), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Appearance", subCategory: "Background", name: "BgPosition", label: "Background Position", editor: new Erp.Designer.PropertyEditor.AutoComplete(["Left Top", "Left Center", "Left Bottom", "Right Top", "Right Center", "Right Bottom", "Center Top", "Center Center", "Center Bottom"]), onChange: onPropChange }),

        new Erp.Designer.Property({ canGroup: true, category: "Location", name: "Position", editor: new Erp.Designer.PropertyEditor.AutoComplete(["Static", "Relative", "Absolute", "Fixed"]), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Location", name: "Top", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Location", name: "Left", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Location", name: "Bottom", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Location", name: "Right", onChange: onPropChange }),

        new Erp.Designer.Property({ canGroup: true, category: "Appearance", name: "Icon", label: "Icon", editor: new Erp.Designer.PropertyEditor.Icon(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Appearance", name: "CssClass", label: "Css Class", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Appearance", name: "Style", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.MultiLine() }),

        new Erp.Designer.Property({ canGroup: true, category: "Events", name: "OnClick", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Events", name: "OnChange", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Events", name: "OnLoad", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Events", name: "OnSave", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Events", name: "OnValid", onChange: onPropChange }),

        new Erp.Designer.Property({ canGroup: true, disableIfDatabound: true, category: "Datasource", name: "Datasource" }),
        new Erp.Designer.Property({ canGroup: true, readOnly: true, category: "Datasource", name: "DatasourceID" }),
        new Erp.Designer.Property({ canGroup: true, disableIfDatabound: true, category: "Datasource", name: "DataMember" })

    ];
    this.ChildProps = ["ElementStates"];
    Erp.Designer.ToggleCategoryByName("Appearance", false, false);
    Erp.Designer.ToggleCategoryByName("Location", false, false);
    this.Type = "Control";
    this.SerializedType = "";
    this.DisplayName = "Control";
    this.HideInToolbar = false;
    this.IsContainer = false;
    this.IsGridBased = true;
    this.DisableDragging = false;
    this.CssClass = function (store, el) { return ""; };
    this.HighlightEdges = "T,R,B,L";
    this.GetContent = function (el) {
        return $("<div></div>");
    }

}
Erp.Designer.Control.prototype.GetObject = function (el) {
    return this;
}
Erp.Designer.Control.prototype.setDefaultWidth = function (s, m, l, xl) {
    this.GetProperty("Small").defaultValue = s;
    this.GetProperty("Medium").defaultValue = m;
    this.GetProperty("Large").defaultValue = l;
    this.GetProperty("XLarge").defaultValue = xl?xl:l;
}
Erp.Designer.Control.prototype.RenderControl = function (el,refNode,idPrefix) {
    var id = $.NewID($.defaultVal(idPrefix, $.defaultVal(this.DisplayName, this.Type)));
    var store = this.CreateDataStore(id);
    var c = this.GetContent(el, id, store, refNode);
    if (c === null)
        return null;
    if ($.isEmpty(c.attr("id")))
        c.attr("id", id);
    if ($.isEmpty(c.attr("control-type")))
        c.attr("control-type", this.Type);
    c.addClass(this.GetBaseCssClasses(store) + " " + $.defaultVal(this.CssClass(store, el),""));
    //this.ControlLoaded(c,true);
    return c;
}
Erp.Designer.Control.prototype.CreateDataStore = function (id) {
    if (Erp.Designer.DataStore.hasOwnProperty(id)) {
        console.error('Control with same name exists');
        return;
    }
    Erp.Designer.DataStore[id] = { Name: id, HtmlID: id, Type: this.Type };
    var store = Erp.Designer.DataStore[id];  
    for (var i = 0; i < this.PropertyList.length; i++) {
        var p = this.PropertyList[i];
        if (!this.IsGridBased && p.subCategory == "Width")
            continue;
        if (typeof p.defaultValue != "undefined")
            store[p.name] = p.defaultValue;
    }
    return store;
}
Erp.Designer.Control.prototype.GetBaseCssClasses = function (store) {
    return "erp-control erp-" + this.Type + " " + (this.IsContainer ? "erp-container" : "") + (this.IsGridBased ? (" col "
        + "s" + $.defaultVal(store["Small"], 1)
        + " m" + $.defaultVal(store["Medium"], 1)
      + " l" + $.defaultVal(store["Large"], 1)) : "");
}
Erp.Designer.Control.prototype.GetProperty = function (p) {
    return Erp.Designer.Utils.Filter(this.PropertyList, "name", p);
}
Erp.Designer.Control.prototype.SetPropertyValue = function (el, prop, val) {
    var ds = Erp.Designer.DataStore.GetData(el);
    ds[prop] = val;
    var pr = this.GetProperty(prop).editor;
    if (typeof pr.onChange == "function") {
        var e;
        if (typeof val == "boolean") {
            e = $("<input type='checkbox' />");
            e.checked(val)
        }
        else if (pr instanceof Erp.Designer.PropertyEditor.Icon) {
            e = val;
        }
        else {
            e = $("<input type='text' />");
            e.val(val)
        }
        pr.onChange(pr, e, null, el);
    }
}
Erp.Designer.Control.prototype.RemoveProperty = function (p) {
    p = "," + p + ",";
    for (var i = this.PropertyList.length - 1; i >= 0; i--) {
        if (p.indexOf("," + this.PropertyList[i].name + ",") > -1)
            this.PropertyList.splice(i, 1);
    }
}
Erp.Designer.Control.prototype.RemoveCategory = function (p) {
    p = "," + p + ",";
    for (var i = this.PropertyList.length - 1; i >= 0; i--) {
        if (p.indexOf("," + this.PropertyList[i].category + ",") > -1)
            this.PropertyList.splice(i, 1);
    }
}
Erp.Designer.Control.prototype.RemoveSubCategory = function (p) {
    p = "," + p + ",";
    for (var i = this.PropertyList.length - 1; i >= 0; i--) {
        if (p.indexOf("," + this.PropertyList[i].subCategory + ",") > -1)
            this.PropertyList.splice(i, 1);
    }
}
Erp.Designer.Control.prototype.LoadPropertyEditor = function (data,multi,proplistCtr) {
    if ($.isArray(data))
        data = data[0];
    if (!data)
        data = {};
    var list = proplistCtr ? proplistCtr : $("#PropertyList").children("._inner");
    list.empty();
    for (var i = 0; i < this.PropertyList.length; i++) {
        var p = this.PropertyList[i];
        if (p.hidden)
            continue;
        if (multi && !p.canGroup)
            continue;
        if (!this.IsGridBased && p.subCategory == "Width" && this.Type !="Fab")
            continue;
        var div = $("<div prop='" + p.name + "' class='prop-item'><span title='" + $.defaultVal(p.tooltip, p.label) + "' class='lhs'>" + p.label + "</span><span class='rhs'></span></div>");

        var val = (data ? data[p.name] : "");
        var disabled = false;
        if (p.requireOverride && !$.isEmpty(data["DatasourceID"])) {
            var chk = $("<input class='ovr' title='Override default'  type='checkbox' />");
            div.children(".lhs").attr("title", p.label).append(chk);
            chk.on("click", function (e) {
                e.stopPropagation();
                var d = $(this).closest(".prop-item");
                var r = d.children(".rhs").find("input,textarea");
                r.setEnable($(this).checked());
                Erp.Designer.DataStore.SetData(Erp.Designer.GetSelectedControls(), d.attr("prop"), { override: $(this).checked(), final: r.val() });                
                r.trigger("change");
            });
            if (val && val.override) {
                val = val.final;
                chk.checked(true);
            }
            else {
                disabled = true;
                val = val.initial;
            }
        }
        if (p.disableIfDatabound && data && !$.isEmpty(data["DatasourceID"]))
            disabled = true;
        var ctl = p.editor.RenderItem(p, val, data, disabled, div);
        
        div.children(".rhs").append(ctl);
       
        if (p.category == "Events") {
            div.on("dblclick", { val: val, data: data, prop: p }, function (e) {
                var pn = e.data.prop.name;
                var fn ="",args="";
                if(e.data.data.Type=="FormLayout"){
                    fn = "function Layout_" + pn + "("+ (pn=="OnSave"?"data":"");
                    e.data.data[pn] = "Layout_" + pn ;
                    $(this).find(".rhs").find("input").val("Layout_" + pn);
                }
                else{
                    fn=e.data.data[pn] ? e.data.data[pn] : e.data.data.HtmlID.Replace("-", "_") + "_" + e.data.prop.label.Replace(" ", "").substring(2);
                    if (!e.data.data[pn]) {
                        e.data.data[pn] = fn;
                        $(this).find(".rhs").find("input").val(fn);
                        $("#"+e.data.data.Name).addClass("hasEvent")
                    }
                    fn = "function " + fn + "("                    
                    args = "elem,data,field";
                    if (pn == "OnClick") {
                        if (e.data.data.Type == "Menu")
                            args = "elem,args,menuItem";
                        else
                            args = "elem";
                    }
                    if (e.data.data.Type == "Grid" || e.data.data.Type == "ChildGrid") {
                        args = "gridId,args";
                        if (pn == "OnGridButtonClick")
                            args = "gridId,btn,action";
                    }
                    else if (e.data.data.Type == "Repeater") {
                        args = "repeaterId,args";
                    }
                }
                $("#toolbar").find(".script").trigger("click");
                $("#ifrExprEditor")[0].contentWindow.createOrHighlight(fn, "\n" + fn + args + "){\n}\n");
            })
        }

        var c="cat_"+$.defaultVal(p.category, "General").replace(/\W/g, '')
        var cat = list.children("." + c);
        if (cat.length == 0) {
            var b = Erp.Designer._toggleStates[c];
            cat = $("<div class='" + c + "'><span onclick='Erp.Designer.ToggleCategory(event,$(this))' class='cat" + (b ? " coll" : "") + "' >" + $.defaultVal(p.category, "General") + "</span><div class='catCtr' style='" + (b ? "display:none" : "") + "'></div></div>");
            list.append(cat);
        }
        if (!$.isEmpty(p.subCategory)) {
            var sc = "subcat_" + p.subCategory.replace(/\W/g, '');
            var sub = cat.children(".catCtr").children("." + sc);
            if (sub.length == 0) {
                var b = Erp.Designer._toggleStates[sc];
                sub = $("<div class='" + sc + "'><span onclick='Erp.Designer.ToggleCategory(event,$(this))' class='subcat" + (b ? " exp" : "") + "' >" + p.subCategory + "</span><div  class='subCtr' style='" + (!b ? "display:none" : "") + "'></div></div>");
                cat.children(".catCtr").append(sub);               
            }
            sub.children("div").append(div);
        }
        else
            cat.children(".catCtr").append(div);
    }  
}
Erp.Designer.Control.prototype.Serialize = function (n) {
    var xml = [];
    xml.push("<" + $.defaultVal(this.SerializedType, this.Type) + " ");
    var data = Erp.Designer.DataStore.GetData(n);
    if (data && !$.isEmpty(data["Datasource"]) && !$.isEmpty(data["DatasourceID"]))
        xml.push(" _IsDatabound=\"1\" ");
    xml.push(Erp.Designer.Property.Serialize.call(this, data, this.PropertyList, null));
    xml.push(">");
    xml.push(Erp.Designer.Property.Serialize.call(this, data, this.PropertyList, this.ChildProps));
    xml.push(this.SerializeContents(n));
    xml.push("</" + $.defaultVal(this.SerializedType, this.Type) + ">");
    return xml.join('');
}

Erp.Designer.Control.prototype.SerializeContents = function (n) {
    var xml = [];
    if (this.IsContainer) {
        xml.push("<Content>");
        xml.push(Erp.Designer._serializeItems(this.GetContainer(n).children()));
        xml.push("</Content>");
    }
    return xml.join('');
}
Erp.Designer.Control.prototype.GetContainer = function (refEl, elAtPoint, dragEl) {
    if(this.IsContainer){
        if(elAtPoint && elAtPoint.hasClass("ctr"))
            return elAtPoint;
        return refEl.children(".ctr").first();
    }
    return null;
}
Erp.Designer.Control.prototype.HasInlineContent = function (refEl, elAtPoint) {  
    return false;
}
Erp.Designer.Control.prototype.AllowDrag = function (elAtPoint) {
    return true;
}
Erp.Designer.Control.prototype.AllowDrop = function (dragObj,dragEl,refEl,elAtPoint) {
    if (this.IsContainer && elAtPoint.hasClass("ctr"))
        return true;
}
Erp.Designer.Control.prototype.AllowSiblings = function (dragObj, dragEl, refEl, elAtPoint) {
    return true;
}
Erp.Designer.Control.prototype.ValidDropZone = function (dragEl, refEl, refObj, elAtPoint) {
    return true;
}

Erp.Designer.Control.prototype.AppendControl = function (dragObj, field, refEl,elAtPoint) {
    var wrap = $("<div class='row ctr'></div>");
    if (elAtPoint.hasClass("allEdge")) {
        var ctr = this.GetContainer(refEl, elAtPoint);
        ctr.append(dragObj.IsGridBased && !this.HasInlineContent(refEl, elAtPoint) ? wrap.append(field) : field);
    }
    else if (refEl.hasClass("leftEdge")) {
        (dragObj.IsGridBased || dragObj.Type =="Button"|| dragObj.Type =="SplitButton"|| dragObj.Type =="MenuItem" || Erp.Designer.getControlObject(refEl.parent().closest(".erp-control")).HasInlineContent(refEl, elAtPoint) ? refEl : refEl.parent()).before(this.IsContainer && !dragObj.IsGridBased && !this.HasInlineContent(refEl, elAtPoint) ? wrap.append(field) : field);//!dragObj.IsGridBased checked so that 2 colum panels in one line possible
    }
    else if (refEl.hasClass("rightEdge")) {
        (dragObj.IsGridBased || dragObj.Type == "Button"|| dragObj.Type =="SplitButton"|| dragObj.Type =="MenuItem"  || Erp.Designer.getControlObject(refEl.parent().closest(".erp-control")).HasInlineContent(refEl, elAtPoint) ? refEl : refEl.parent()).after(this.IsContainer && !dragObj.IsGridBased && !this.HasInlineContent(refEl, elAtPoint) ? wrap.append(field) : field);//!dragObj.IsGridBased checked so that 2 colum panels in one line possible
    }
    else {
        var p = (this.IsGridBased && (refEl.parent().hasClass("row") || refEl.parent().hasClass("default-ctr")) ? refEl.parent() : refEl);
        if (refEl.hasClass("topEdge"))
            p.before(dragObj.IsGridBased && !Erp.Designer.getControlObject(p.parent().closest(".erp-control")).HasInlineContent(refEl, elAtPoint) ? wrap.append(field) : field);//closest includes self.so parent.closest
        else if (refEl.hasClass("bottomEdge"))
            p.after(dragObj.IsGridBased && !Erp.Designer.getControlObject(p.parent().closest(".erp-control")).HasInlineContent(refEl, elAtPoint) ? wrap.append(field) : field);
    }

}
Erp.Designer.Control.prototype.Refresh = function (el) { }
Erp.Designer.Control.prototype.ControlLoaded = function (el, fromEditor) { }



Erp.Designer.ToggleCategory = function (e, a) {
    if (a.hasClass("subcat")) {
        a.toggleClass("exp");
        a.next().slideToggle("slow", function () {
            if ($(this).isVisible()) $(this).css("overflow", "");
        });
        var p = a.parent().attr("class");
        if (a.hasClass("exp")) Erp.Designer._toggleStates[p] = true; else delete Erp.Designer._toggleStates[p];
    }
    else if (a.hasClass("cat")) {
        a.toggleClass("coll");
        a.next().slideToggle("slow", function () {
            if ($(this).isVisible()) $(this).css("overflow", "");
        });
        var p =a.parent().attr("class");
        if (a.hasClass("coll")) Erp.Designer._toggleStates[p] = true; else delete Erp.Designer._toggleStates[p];
    }
}
Erp.Designer.ToggleCategoryByName = function (name, isSubCat, expand) {
    var c = "";
    if (!isSubCat) {
        c = "cat_" + $.defaultVal(name, "General").replace(/\W/g, '');
        if (expand)
            delete Erp.Designer._toggleStates[c];
        else
            Erp.Designer._toggleStates[c] = true;
    }
    else {
        c = "subcat_" + name.replace(/\W/g, '');
        if (expand)
            Erp.Designer._toggleStates[c] = true;
        else
            delete Erp.Designer._toggleStates[c];
        
    }

}

Erp.Designer.DefaultCtr = function () {
    this.Type = "DefaultCtr";
    this.DisplayName = "DefaultCtr";
    this.HideInToolbar = true;
    this.IsContainer = true;
    this.IsGridBased = false;
}
Erp.Designer.DefaultCtr.prototype = Object.create(Erp.Designer.Control.prototype);
Erp.Designer.DefaultCtr.prototype.GetContainer = function (refEl, elAtPoint) {
    return refEl;
}
Erp.Designer.DefaultCtr.prototype.HasInlineContent = function (refEl, elAtPoint) {
    return true;
}
Erp.Designer.Field = function () {
    Erp.Designer.Control.call(this);
    function onPropChange(ed, el, ev) {
        var ctl = Erp.Designer.GetSelectedControls();
        switch (ed.property) {
            case "Label":
                {
                    ctl.each(function () {
                        var c = $(this);
                        var d = Erp.Designer.DataStore.GetData(c)["Label"];
                        if (d && d.hasOwnProperty("initial")) {
                            if (c.hasClass("file-field"))
                                c.find(".file-path").attr("placeholder", d.override ? el.val() : d.initial);
                            else if (c.hasClass("erp-Checkbox"))
                                c.children("label").children("span").html(d.override ? el.val() : d.initial);
                            else
                                c.children("label").html(d.override ? el.val() : d.initial);
                        }
                        else {
                            if (c.hasClass("erp-Radiobutton") || c.hasClass("erp-Checkbox"))
                                c.children("label").children("span").html(el.val());
                            else
                                c.children("label").html(el.val());
                        }
                    });
                    break;
                }
            case "Tooltip":
                {
                    ctl.each(function () {
                        var c = $(this);
                        var d = Erp.Designer.DataStore.GetData(c)["Label"];
                        if (d && d.hasOwnProperty("initial")) {
                            c.attr("title", d.override ? el.val() : d.initial);
                        }
                        else
                            c.attr("title", el.val());

                    });
                    break;
                }
            case "Placeholder":
                {
                    ctl.find("input,textarea").attr("placeholder",el.val()).next().removeClass("active").addClass($.isEmpty(el.val())?"":"active");
                    break;
                }
            case "Mandatory": {
                ctl.removeClass("mandatory");
                if (el.checked())
                    ctl.addClass("mandatory");
                break;
            }
            default: break
        }
    }
    this.PropertyList.splice(4, 0,
        new Erp.Designer.Property({ canGroup: true, name: "Label", requireOverride: true, onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, name: "Tooltip", requireOverride: true, onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, name: "Placeholder", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, name: "Mandatory", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property("DefaultValue")
    );
    this.Type = "Field";
    this.DisplayName = "Field";

    this.CssClass = function (store,el) {
        var cls = Erp.Controls[store.Type];
        return cls.CssClass(store,el);
    };    
    this.SetStoreData = function (el, id, store) {
        if (!el.attr("fid"))
            return;
        var fld = Erp.Designer.Utils.Filter(Erp.Designer.FieldList, "ID", el.attr("fid"));
        var dt = fld.DataType.toLowerCase();
        var t = this.getFormControlType(dt);
        var cls = Erp.Controls[t];
        store["Label"] = { initial: fld.DisplayName };
        store["Datasource"] = $.QS("EID");
        store["DatasourceID"] = fld.ID;
        store["DataMember"] = fld.FieldName;
        store["Tooltip"] = { initial: fld.ToolTip };
        var setLbl=true;
        if (t == "Text") {
            store["TextMode"] = "Text";
            if (dt == "multiline")
                store["TextMode"] = "MultiLine";
            else if (dt == "password")
                store["TextMode"] = "Password";
            else if (dt == "password")
                store["TextMode"] = "RichText";
        }
        else if (t == "Number") {
            store["NumberType"] = "Number";
            if (dt == "decimal")
                store["TextMode"] = "Decimal";
            else if (dt == "currency")
                store["TextMode"] = "Currency";
            else if (dt == "percent")
                store["TextMode"] = "Percent";
        }
        else if (t == "Date") {
            store["DateType"] = "Date";
            if (dt == "Date")
                store["DateType"] = "Date";
            else if (dt == "datetime")
                store["DateType"] = "DateTime";
            else if (dt == "time")
                store["DateType"] = "Time";
        }
        else if (t == "Select") {
            if (dt == "multiselect" || dt == "mixedmultiselect")
                store["Multiple"] = true;
            if(!$.isEmpty(fld["LookupTable"]))
                store["Table"] = fld["LookupTable"];
        }
        else if (t == "Checkbox") {           
            if (!$.isEmpty(fld["Yes"]) && !$.isEmpty(fld["No"])) {
                store["ToggleMode"] = true;
                store["OnLabel"] = fld["Yes"];
                store["OffLabel"] = fld["No"];
                setLbl = false;
            }
        }
        store.Type = t;
        //var ctl = cls.GetContent(el, id, store);
        
        //ctl.attr("control-type", t);
        //if (setLbl)
        //    ctl.children("label").html(fld.DisplayName);
        //ctl.attr("title", fld.ToolTip);
        //return ctl;        
    }


}
Erp.Designer.Field.prototype = Object.create(Erp.Designer.Control.prototype);
Erp.Designer.Field.prototype.GetObject = function (el) {
    if (!el.attr("fid"))
        return this;
    var fld = Erp.Designer.Utils.Filter(Erp.Designer.FieldList, "ID", el.attr("fid"));
    var dt = fld.DataType.toLowerCase();
    var t = this.getFormControlType(dt);
    return Erp.Controls[t];
}
Erp.Designer.Field.prototype.getFormControlType = function (type) {
    type = type.toLowerCase();
    switch (type) {
        case "text":
        case "multiline":
        case "richtext":
        case "autogenerated":
        case "email":
        case "phone":
        case "password":
        case "url":
        case "regex":
        case "formula":
            return "Text";

        case "number":
        case "decimal":
        case "currency":
        case "percent":
        case "calculated":
        case "sortorder":
            return "Number";

        case "date":
        case "datetime":
        case "time":
            return "Date";

        case "singleselect":
        case "multiselect":
        case "mixedselect":
        case "mixedmultiselect":
        case "status":
        case "priority":
            return "Select";

        case "checkbox":
            return "Checkbox";

        case "image":
        case "documents":
            return "FileUpload";

        case "imgpreview":
            return "Image";

        case "docpreview":
            return "Button";

        default:
            return "Text";
    }
}


Erp.Designer.Repeater = function () {
    Erp.Designer.Control.call(this);
    function onPropChange(ed, el, ev, ctl) {
        var ctl = ctl ? ctl : Erp.Designer.GetSelectedControls();
        switch (ed.property) {
            case "HeaderTemplate":
            case "ItemTemplate":
            case "FooterTemplate":
                {
                    ctl.each(function () {
                        var c = $(this);
                        var data = Erp.Designer.DataStore.GetData(c);
                        var str = "";
                        if (!data.EnableTemplate)
                            return true;
                        if (ed.property == "HeaderTemplate")
                            str += el.data("srcEditor").getValue();
                        else
                            str += $.defaultVal(data.HeaderTemplate, "");                        
                        if (ed.property == "ItemTemplate")
                            str += el.data("srcEditor").getValue();
                        else
                            str += $.defaultVal(data.ItemTemplate, "");
                        if (ed.property == "FooterTemplate")
                            str += el.data("srcEditor").getValue();
                        else
                            str += $.defaultVal(data.FooterTemplate, "");                     

                        Erp.Designer.Repeater.SetContent($(this), str);
                    })
                    break;
                }
            case "EnableTemplate": {
                ctl.each(function () {
                    var c = $(this);
                    var ds = Erp.Designer.DataStore.GetData(c);
                    c.children(".shadow").setDisplay(el.checked());
                    c.children(".ctr").setDisplay(!el.checked());
                    Erp.Designer.Repeater.SetContent(c, el.checked() ? $.defaultVal(ds.HeaderTemplate, "") + $.defaultVal(ds.ItemTemplate, "") + $.defaultVal(ds.FooterTemplate, "") : "");
                });
                $("#PropertyList").find(".prop-item[prop=HeaderTemplate]").setDisplay(el.checked())
                $("#PropertyList").find(".prop-item[prop=ItemTemplate]").setDisplay(el.checked())
                $("#PropertyList").find(".prop-item[prop=FooterTemplate]").setDisplay(el.checked())
                break;
            }
            case "ShowSearchBox":{
                ctl.each(function () {
                    var c = $(this);
                    var ds = Erp.Designer.DataStore.GetData(c);
                    c.find(".rpt-search").remove();                  
                    if(el.checked()){
                        c.find(".rpt-pager.top").prepend(Erp.Designer.Repeater.GetSearchBoxHtml());
                    }
                    
                });    
                break;
            }            
            case "PagerStyle": {
                ctl.each(function () {
                    var c = $(this);
                    var ds = Erp.Designer.DataStore.GetData(c);
                    c.find(".pg-cmd-ctr").remove();                   
                    if(el.val()=="bottom")
                        c.find(".rpt-pager.bottom").append(Erp.Designer.Repeater.GetPagerHtml());                    
                    else if(el.val()=="top"){
                        var s=c.find(".rpt-sort-ctr");
                        if(s.length >0)s.before(Erp.Designer.Repeater.GetPagerHtml());
                        else c.find(".rpt-pager.top").append(Erp.Designer.Repeater.GetPagerHtml());
                    }
                    
                });   
                break;
            }
            case "SortKey": {
                ctl.each(function () {
                    var c = $(this);                 
                    c.find(".rpt-sort-ctr").remove(); 
                    c.find(".rpt-pager.top").removeClass("_s");
                    if(!Fn.IsEmpty(el.val()))
                        c.find(".rpt-pager.top").addClass("_s").append(Erp.Designer.Repeater.GetSortHtml(el.val()));
                    
                });   
                break;
            }
            default: break
        }
    }
    this.RemoveCategory("Datasource");
    this.RemoveCategory("Events");
    this.PropertyList.splice(4, 0,
        new Erp.Designer.Property({ canGroup: true, category: "Datasource", name: "DataBindOnLoad", label: "DataBind On Load", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),

        new Erp.Designer.Property({ canGroup: true, category: "Behaviour", name: "EnableAdd", label: "Enable Add", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Behaviour", name: "EnableSave", label: "Enable Save", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),

        new Erp.Designer.Property({ canGroup: true, category: "Behaviour", name: "ShowSearchBox", label: "Show SearchBox", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Behaviour", name: "EnablePaging", label: "Enable Paging", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Behaviour", name: "PageSize", defaultValue:"30", editor: new Erp.Designer.PropertyEditor.Numeric()}),
        new Erp.Designer.Property({ canGroup: true, category: "Behaviour", name: "PagerStyle", label: "Pager Style", editor: new Erp.Designer.PropertyEditor.Select([{ label: "Custom", value: "" }, { label: "Bottom", value: "bottom" }, { label: "Top", value: "top" }]), onChange: onPropChange }),
        new Erp.Designer.Property({ category: "Behaviour", label: "Sort Columns", name: "SortKey", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.MultiLine({ placeholder: "[{'text':'DisplayName1','value':'ColumnName1'},{'text':'DisplayName2','value':'ColumnName2'}]" }) }),

        new Erp.Designer.Property({ canGroup: true, category: "Draggable", name: "AllowDrag", label: "Allow Reordering", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Draggable", name: "AllowDrop", label: "Allow Dropping To this Repeater", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        

        new Erp.Designer.Property({ canGroup: true, category: "Datasource", name: "Datasource", label: "DataSource", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Datasource", name: "Condition", label: "Condition", onChange: onPropChange }),
        new Erp.Designer.Property({ category: "Datasource", name: "EntityID", label: "Entity", editor: new Erp.Designer.PropertyEditor.BrowseMeta("Entity") }),
        new Erp.Designer.Property({ canGroup: true, category: "Datasource", name: "IDColumn", label: "Id Column", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Datasource", name: "ParentColumn", label: "ParentColumn", onChange: onPropChange }),

        new Erp.Designer.Property({ canGroup: true, category: "Template", name: "DisableRenderTag", label: "Do Not Render Outer Tag", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Template", name: "EnableTemplate", label: "Enable Template", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Template", name: "HeaderTemplate", label: "HeaderTemplate", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.SourceEditor("HTML") }),
        new Erp.Designer.Property({ canGroup: true, category: "Template", name: "ItemTemplate", label: "ItemTemplate", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.SourceEditor("HTML") }),
        new Erp.Designer.Property({ canGroup: true, category: "Template", name: "FooterTemplate", label: "FooterTemplate", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.SourceEditor("HTML") }),

        new Erp.Designer.Property({ canGroup: true, name: "OnRepeaterCommand", category: "Events" }),
        new Erp.Designer.Property({ canGroup: true, name: "OnParameterRequesting", category: "Events" }),
        new Erp.Designer.Property({ canGroup: true, name: "OnRepeaterDataBound", category: "Events" }),
        new Erp.Designer.Property({ canGroup: true, name: "OnItemDeleted", category: "Events" }),
        new Erp.Designer.Property({ canGroup: true, name: "OnItemSaving", category: "Events" }),
        new Erp.Designer.Property({ canGroup: true, name: "OnRepeaterSaving", category: "Events" }),
        new Erp.Designer.Property({ canGroup: true, name: "OnSaveComplete", category: "Events" }),
        new Erp.Designer.Property({ canGroup: true, name: "OnItemDataBound", category: "Events" }),

        new Erp.Designer.Property({ canGroup: true, name: "OnItemDragBegin", category: "Events" }),
        new Erp.Designer.Property({ canGroup: true, name: "OnItemDragging", category: "Events" }),
        new Erp.Designer.Property({ canGroup: true, name: "OnItemDropping", category: "Events" }),
        new Erp.Designer.Property({ canGroup: true, name: "OnItemDropped", category: "Events" }),
        new Erp.Designer.Property({ canGroup: true, name: "OnItemDragCompleted", category: "Events" })
    );
    this.Type = "Repeater";
    this.DisplayName = "Repeater";
    this.IsContainer = true;
    this.IsGridBased = false;
   
    this.RemoveProperty("Small,Medium,Large,Icon,HorizontalAlign");
    this.GetContent = function (el, id, store) {
        return $('<div><div class="rpt-pager top"></div><div class="ctr"></div><div class="shadow"></div><div class="rpt-pager bottom"></div></div>');
    }
    
}
Erp.Designer.Repeater.prototype = Object.create(Erp.Designer.Control.prototype);
Erp.Designer.Repeater.prototype.HasInlineContent = function (refEl, elAtPoint) {
    return false;
}
Erp.Designer.Repeater.prototype.ControlLoaded = function (el, fromEditor) {
    if (el.children(".shadow").data("sha") == 1)
        return;
    var root = el.children(".shadow")[0].attachShadow({ mode: 'open' });
    el.children(".shadow").data("sha", 1);
    root.innerHTML = "<style id='__documentstyle'></style><link href='../Css/materialize.min.css' type='text/css' rel='stylesheet' /><div id='__documentContent'></div>";
    if (!fromEditor) {//from load
        var ds = Erp.Designer.DataStore.GetData(el);
        this.Refresh(el);
        Erp.Designer.Repeater.SetContent(el, ds.EnableTemplate ? $.defaultVal(ds.HeaderTemplate, "") + $.defaultVal(ds.ItemTemplate, "") + $.defaultVal(ds.FooterTemplate, "") : "");
    }
}
Erp.Designer.Repeater.prototype.Refresh = function (el) {
    var shadow = el.children(".shadow")[0].shadowRoot;
    if (!shadow)
        return;
    var style = shadow.querySelector("#__documentstyle");
    if (style)
        style.innerHTML = Erp.ScriptEditors["txtCss"].getValue();
}
Erp.Designer.Repeater.SetContent = function (el, html) {
    
    var shadow = el.children(".shadow")[0].shadowRoot;
    var cnt = shadow.querySelector("#__documentContent");
    var arr = null;//$.defaultVal(html, "").match(/\[@ID:.*?\]/g);
    if (arr)
        for (var i = 0; i < arr.length; i++) {
            var id = arr[i].split(':')[1].split(']')[0];
            var ds = Erp.Designer.DataStore.GetDataByName(id);
            if (ds) {
                if (ds.Type == "Repeater" && ds.EnableTemplate)
                    html = html.replace(arr[i], $.defaultVal(ds.HeaderTemplate, "") + $.defaultVal(ds.ItemTemplate, "") + $.defaultVal(ds.FooterTemplate, ""))
                else
                    html = html.replace(arr[i], $("#" + ds.Name)[0].outerHTML)
            }
        }
    cnt.innerHTML = html;
}
Erp.Designer.Repeater.prototype.LoadPropertyEditor = function (data, multi) {
    Erp.Controls.Control.LoadPropertyEditor.call(this, data, multi);
    $("#PropertyList").find(".prop-item[prop=HeaderTemplate]").setDisplay(data && data["EnableTemplate"] == true)
    $("#PropertyList").find(".prop-item[prop=ItemTemplate]").setDisplay(data && data["EnableTemplate"] == true)
    $("#PropertyList").find(".prop-item[prop=FooterTemplate]").setDisplay(data && data["EnableTemplate"] == true)
}
Erp.Designer.Repeater.GetPagerHtml=function(){
    return "  <div class=\"pg-cmd-ctr\">"+
                        "  <div class=\"pg-cmd\">"+
                        "    <a tag=\"first\" class=\"pg-first\"></a>"+
                        "    <a tag=\"prev\" class=\"pg-prev\"></a>"+
                        "    <div class=\"pg-number\"><input type=\"tel\" value=\"999\" class=\"pgNum\"><span class=\"pgTotal\">/99999</span></div>"+
                        "    <a tag=\"next\" class=\"pg-next\"></a>"+
                        "    <a tag=\"last\" class=\"pg-last\"></a>"+
                        "    <span class=\"pg-info\">99-199 of 999</span>"+
                        "  </div>"+"  </div>";
}
Erp.Designer.Repeater.GetSearchBoxHtml=function(){
    return "<div class=\"rpt-search\">"+
                "<input placeholder=\"Search\" class=\"rpt-search-txt\" type=\"text\">"+
                "<a href=\"javascript:void(0)\" class=\"rpt-search-btn\"></a>"+
            "</div>";
}
Erp.Designer.Repeater.GetSortHtml=function(arrStr){
    var arr=eval(arrStr)
    if(!$.isArray(arr))
        return "";
    arrhtml="<div class=\"rpt-sort-keys\">"
    for(var i=0;i<arr.length;i++){
        if((arr[i].value.indexOf(" asc")<0 && arr[i].value.indexOf(" desc")<0) || arr[i].value.indexOf(" asc")>0)
            arrhtml+="<span val=\""+arr[i].value+ (arr[i].value.indexOf(" asc") > 0 ? "" : " asc")+"\" class=\"rpt-sort-key asc\">"+arr[i].text + (arr[i].value.indexOf(" asc") > 0 ? "" : " Asc") + "</span>";
        if((arr[i].value.indexOf(" asc")<0 && arr[i].value.indexOf(" desc")<0) || arr[i].value.indexOf(" desc")>0)
            arrhtml+="<span val=\""+arr[i].value + (arr[i].value.indexOf(" desc") > 0 ? "" : " desc")+"\" class=\"rpt-sort-key desc\">"+arr[i].text + (arr[i].value.indexOf(" desc") > 0 ? "" : " Desc") + "</span>";
    }
    arrhtml+="</div>"
    return "<div  tabindex=\"-1\" class=\"rpt-sort-ctr\">"+              
                "<a href=\"javascript:void(0)\" class=\"rpt-sort-btn\"></a>"+
                arrhtml+
            "</div>";
}
Erp.Designer.InlinePanel = function () {
    Erp.Designer.Control.call(this);
    function onPropChange(ed, el, ev, ctl) {
        var ctl = ctl ? ctl : Erp.Designer.GetSelectedControls();
        switch (ed.property) {
            case "ContentAlign":
                {
                    ctl.css("text-align", el.val());
                    break;
                }            
            default: break
        }
    }
    this.PropertyList.splice(4, 0,
        new Erp.Designer.Property({ canGroup: true, category: "Behaviour", name: "ContentAlign", label: "Content Align", editor: new Erp.Designer.PropertyEditor.AutoComplete(["Left", "Right" ,"Center"]), onChange: onPropChange })
    );
    this.Type = "InlinePanel";
    this.DisplayName = "Flow Panel";
    this.IsContainer = true;
    this.IsGridBased = false;
    this.RemoveProperty("Small,Medium,Large,Icon,HorizontalAlign");
    this.GetContent = function (el, id, store) {
        return $('<div><div class="inline ctr"></div></div>');
    }
}
Erp.Designer.InlinePanel.prototype = Object.create(Erp.Designer.Control.prototype);
Erp.Designer.InlinePanel.prototype.HasInlineContent = function (refEl, elAtPoint) {
    return true;
}

Erp.Designer.Panel = function () {
    Erp.Designer.Control.call(this);
    function onPropChange(ed, el, ev) {
        var ctl = Erp.Designer.GetSelectedControls();
        switch (ed.property) {
            case "Label":
                {
                    ctl.each(function () { var c = $(this); c.children(".panel-header").find(".title").children("span").html(el.val()); })
                    break;
                }
            case "Description":
                {
                    ctl.each(function () { var c = $(this); c.children(".panel-header").find(".desc").html(el.val()); })
                    break;
                }
            case "Height":
                {
                    ctl.each(function () { var c = $(this); c.css("height", (el.val() / 1 > 0 ? (el.val() + "px") : el.val()));})
                    break;
                }
            case "NoBorder":
                {
                    ctl.each(function () { var c = $(this); c.removeClass("noBorder").addClass(el.checked() ? "noBorder" : ""); })
                    break;
                }
            case "ShowFooter":
                {
                    ctl.each(function () { var c = $(this); c.removeClass("showFooter").addClass(el.checked() ? "showFooter" : "");
                        if(c.find(".panel-footer").length==0)c.append("<div class='panel-footer ctr'></div>");})
                    break;
                }
            case "NoTitle":
                {
                    ctl.each(function () { var c = $(this); c.removeClass("noTitle").addClass(el.checked() ? "noTitle" : ""); })
                    break;
                }
            case "TitleStyle":
                {
                    ctl.each(function () { var c = $(this); c.removeClass("detail").addClass(el.val()); })
                    break;
                }
            default: break
        }
    }
    this.PropertyList.splice(4, 0,
        new Erp.Designer.Property({ canGroup: true, name: "NoTitle", label: "No Title", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, name: "TitleStyle", label: "Panel Style", editor: new Erp.Designer.PropertyEditor.Select([{ label: "Grouping Panel", value: "" }, { label: "Detail Panel", value: "detail" }]), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, name: "Label", onChange: onPropChange }),        
        new Erp.Designer.Property({ canGroup: true, name: "Description", onChange: onPropChange }),        
        new Erp.Designer.Property({ canGroup: true, name: "NoBorder", category: "Appearance", label: "No Border", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, name: "ShowFooter", label: "Show Footer", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange })
        
    );
    this.Type = "Panel";
    this.DisplayName = "Column Panel";
    this.IsContainer = true;
    this.IsGridBased = true;
    this.setDefaultWidth(12, 12,6,6);   
    this.CssClass = function (store,el) { var cls="";
        if(store["NoBorder"])
            cls+=" noBorder";
        if(store["NoTitle"])
            cls+=" noTitle";
        if(store["TitleStyle"])
            cls+=" "+store["TitleStyle"];      
        return cls;
    };
    this.GetContent = function (el, id, store) {
        store["Label"] = "New Panel";
        //store["NoTitle"] = true;
        //store["NoBorder"] = true;  
        store["TitleStyle"] = "detail";
        return $('<div class="detail"><div class="panel-header"><span class="title"><i class="fa"></i><span>New Panel</span></span><span class="desc"></span></div>' +
                '<div class="ctr"></div></div>');
    }
}
Erp.Designer.Panel.prototype = Object.create(Erp.Designer.Control.prototype);
Erp.Designer.Panel.prototype.SerializeContents = function (n) {
    var xml = [];
    xml.push("<Content>");
    xml.push(Erp.Designer._serializeItems(this.GetContainer(n).children()));
    xml.push("</Content>");
    xml.push("<PanelFooter>");
    xml.push(Erp.Designer._serializeItems(n.children(".panel-footer").children()));
    xml.push("</PanelFooter>");
    return xml.join('');
}


Erp.Designer.TabPanel = function () {
    Erp.Designer.Control.call(this);
    function onPropChange(ed, el, ev) {
        var ctl = Erp.Designer.GetSelectedControls();
        switch (ed.property) {
            case "Label":
                {
                    ctl.each(function () { var c = $(this); c.children("ul").find("span").html(el.val()); })
                    break;
                }          
            default: break
        }
    }
    this.PropertyList.splice(4, 0,
        new Erp.Designer.Property({ canGroup: true, name: "Label",  onChange: onPropChange }),
        new Erp.Designer.Property({ category: "Behaviour", name: "Active", label: "Active Tab", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange })
    );
    this.Type = "TabPanel";
    this.DisplayName = "Tab Panel";
    this.IsContainer = true;
    this.IsGridBased = false;
    this.RemoveProperty("Small,Medium,Large");
    this.HighlightEdges = "T,B";
    this.GetContent = function (el, id, store) {
        store["Label"] = "New Tab";
        return $('<div>'+
                    '<ul class="tabs z-depth-1">'+
                        '<li class="tab"><a class="waves-effect"><i class="fa"></i><span>New Tab</span></a></li>' +
                     '</ul>' +
                    '<div class="ctr tab-ctr"></div></div>');
       
    }
}
Erp.Designer.TabPanel.prototype = Object.create(Erp.Designer.Control.prototype);
Erp.Designer.TabPanel.prototype.Serialize = function (n) {
    var xml = [];
    if (!n.prev().hasClass("erp-TabPanel"))
        xml.push("<TabContainer>");
    xml.push(Erp.Designer.Control.prototype.Serialize.call(this, n));
    if (!n.next().hasClass("erp-TabPanel"))
        xml.push("</TabContainer>");
    return xml.join('');
}

Erp.Designer.CollapsiblePanel = function () {
    Erp.Designer.Control.call(this);
    function onPropChange(ed, el, ev) {
        var ctl = Erp.Designer.GetSelectedControls();
        switch (ed.property) {
            case "Label":
                {
                    ctl.each(function () { var c = $(this); c.children(".collapsible-header").find("span").html(el.val()); })
                    break;
                }
            case "CollapsibleType":
                {
                    ctl.removeClass("lite").addClass(el.val() == "Default" ? "" : "lite");
                    break;
                }
            default: break
        }
    }
    this.PropertyList.splice(4, 0,
        new Erp.Designer.Property({ canGroup: true, name: "Label", onChange: onPropChange }),
        new Erp.Designer.Property({ category: "Behaviour", name: "Active", label: "Active Pane", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Behaviour", name: "CollapsibleMode", label: "Collapsible Mode", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Select([{ label: "Default", value: "" }, { label: "Accordion", value: "Accordion" }, { label: "Popout", value: "Popout" }]) }),
        new Erp.Designer.Property({ canGroup: true, category: "Behaviour", name: "CollapsibleType", label: "Collapsible Type", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Select([{ label: "Compact", value: "" }, { label: "Default", value: "Default" }]) })
    );
    this.Type = "CollapsiblePanel";
    this.DisplayName = "Collapsible Panel";
    this.IsContainer = true;
    this.IsGridBased = false;
    this.HighlightEdges = "T,B";
    this.RemoveProperty("Small,Medium,Large");
    this.CssClass = function (store,el) { return "collapsible lite"; };
    this.GetContent = function (el, id, store) {
        store["Label"] = "New Collapsible Panel";
            
        return $('<ul>' +
                    '<div class="collapsible-header active"><i class="fa"></i><span>New Collapsible Panel</span></div>' +
                    '<div class="ctr">' +
                    '</div>' +
                '</ul>');

    }
}
Erp.Designer.CollapsiblePanel.prototype = Object.create(Erp.Designer.Control.prototype);
Erp.Designer.CollapsiblePanel.prototype.Serialize = function (n) {
    var xml = [];
    if (!n.prev().hasClass("erp-CollapsiblePanel"))
        xml.push("<CollapsibleContainer>");
    xml.push(Erp.Designer.Control.prototype.Serialize.call(this, n));
    if (!n.next().hasClass("erp-CollapsiblePanel"))
        xml.push("</CollapsibleContainer>");
    return xml.join('');
}

Erp.Designer.Line = function () {
    Erp.Designer.Control.call(this);
    function onPropChange(ed, el, ev, ctl) {
        var ctl = ctl ? ctl : Erp.Designer.GetSelectedControls();
        switch (ed.property) {
            case "LineStyle":
                {
                    ctl.removeClass("break thin thick").addClass(el.val());
                    break;
                }            
            default: break
        }
    }
    this.PropertyList.splice(4, 0,
        new Erp.Designer.Property({ canGroup: true, name: "LineStyle", category: "Behaviour", label: "LineStyle", editor: new Erp.Designer.PropertyEditor.Select([{ label: "Default", value: "" }, { label: "Line-Break", value: "break" }, { label: "Thin", value: "thin" }, { label: "Thick", value: "thick" }]), onChange: onPropChange }),
    );
    this.Type = "Line";
    this.DisplayName = "Line";
    this.IsFormField = true;
    this.IsContainer = false;
    this.IsGridBased = false;
    this.RemoveProperty("Small,Medium,Large,Icon");
    this.CssClass = function (store, el) { return ""; };
    this.GetContent = function (el, id, store) {       
        return $('<div></div>');
    }
}
Erp.Designer.Line.prototype = Object.create(Erp.Designer.Control.prototype);

Erp.Designer.Spacer = function () {
    Erp.Designer.Control.call(this);
    this.Type = "Spacer";
    this.DisplayName = "Space";
    this.IsFormField = true;
    this.IsContainer = false;
    this.IsGridBased = true;
    this.setDefaultWidth(1, 1, 1,1);
    this.RemoveProperty("Icon");
    this.GetContent = function (el, id, store) {
        return $('<div></div>');
    }
}
Erp.Designer.Spacer.prototype = Object.create(Erp.Designer.Control.prototype);

Erp.Designer.Label = function () {
    Erp.Designer.Control.call(this);
    function onPropChange(ed, el, ev, ctl) {
        var ctl = ctl ? ctl : Erp.Designer.GetSelectedControls();
        switch (ed.property) {
            case "Label":
                {
                    ctl.each(function () {
                        var c = $(this);
                        var d = Erp.Designer.DataStore.GetData(c)["Label"];
                        if (d && d.hasOwnProperty("initial")) {
                            c.children().eq(0).children("span").html(d.override ? el.val() : d.initial);
                        }
                        else
                            c.children().eq(0).children("span").html(el.val());
                    })
                    break;
                }
            case "LabelStyle":
                {
                    var t = el.val();
                    ctl.removeClass("mainHeading subHeading subHeading2 chip caption caption2 body1 body2");
                    if (t == ""|| t == "mainHeading" || t == "subHeading" || t == "subHeading2" || t == "chip" || t == "caption" || t == "caption2" || t == "body1" || t == "body2") {
                        ctl.addClass(t); t = "div";
                    }
                    ctl.addClass("col");
                    if (t == "P") {
                        ctl.removeClass("col");
                    }
                    ctl.children().eq(0).replaceWith(function () {
                        return $("<" + t + " />").append($(this).contents());
                    });
                    break;
                }
            case "FlowText":
                {
                    ctl.removeClass("flow-text").addClass(el.checked() ? "flow-text" : "");
                    break;
                }
            case "TextAlign":
                {
                    ctl.css("text-align", el.val());
                    break;
                }
            default: break
        }
    }
    this.PropertyList.splice(4, 0,
        new Erp.Designer.Property({ canGroup: true, disableIfDatabound: true, category: "Datasource", name: "EntityPath" }),
        new Erp.Designer.Property({ canGroup: true, name: "Tooltip", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, requireOverride: true, name: "Label", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.MultiLine() }),
        new Erp.Designer.Property({ canGroup: true, name: "LabelStyle", category: "Behaviour", label: "LabelStyle", editor: new Erp.Designer.PropertyEditor.Select([{ label: "Default", value: "" }, { label: "MainHeading", value: "mainHeading" }, { label: "SubHeading", value: "subHeading" }, { label: "SubHeading 2", value: "subHeading2" }, { label: "Heading 1", value: "H1" }, { label: "Heading 2", value: "H2" }, { label: "Heading 3", value: "H3" }, { label: "Heading 4", value: "H4" }, { label: "Heading 5", value: "H5" }, { label: "Heading 6", value: "H6" }, { label: "Paragraph", value: "P" }, { label: "BlockQuote", value: "BlockQuote" }, { label: "Caption", value: "caption" }, { label: "Caption 2", value: "caption2" }, { label: "Body", value: "body1" }, { label: "Body 2", value: "body2" }, { label: "Rounded", value: "chip" }]), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, name: "FlowText", category: "Behaviour", label: "Auto Resize Text", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, name: "TextAlign", category: "Appearance", label: "Text Align", editor: new Erp.Designer.PropertyEditor.AutoComplete(["Left", "Center", "Right"]), onChange: onPropChange })
    );
    this.Type = "Label";
    this.DisplayName = "Label";
    this.IsFormField = true;
    this.IsContainer = false;
    this.IsGridBased = true;
    this.setDefaultWidth(3, 3, 3,3);
    this.CssClass = function (store, el) {
        if (store && !$.isEmpty(store["DatasourceID"]))
            return "isDatabound";
    };
    this.GetContent = function (el, id, store) {
        if (el.attr("id") == "rtvRelatedHelper") {
            store["Label"] = { initial: "[" + el.data("@FieldName") + "]" };
            store["Datasource"] = $.QS("EID");
            store["DatasourceID"] = el.data("@FieldID");
            store["DataMember"] = el.data("@FieldName");
            store["EntityPath"] = el.data("@EntityPath");
        }
        else
            store["Label"] = "New Label";
        return $('<div><div><i class="fa"></i><span>' + Erp.Designer.getOverrideData(store["Label"]) + '</span></div></div>');
    }
}
Erp.Designer.Label.prototype = Object.create(Erp.Designer.Control.prototype);
Erp.Designer.Label.prototype.AllowDrop = function (dragObj, dragEl, refEl, elAtPoint) {
    //if (dragEl.attr("id") == "rtvRelatedHelper")
    //    return true;
    return false;
}
Erp.Designer.Label.prototype.GetContainer = function (refEl, elAtPoint, dragEl) {
    if (dragEl.attr("id") == "rtvRelatedHelper")
        return refEl;
    return null;
}

Erp.Designer.UDF = function () {
    Erp.Designer.Control.call(this);
    
    this.Type = "UDF";
    this.DisplayName = "UDF";
    this.IsContainer = false;
    this.IsGridBased = false;
    this.RemoveProperty("Small,Medium,Large,Icon");
    this.HighlightEdges = "T,B";
    this.GetContent = function (el, id, store) {
        return $('<div></div>"');

    }
}
Erp.Designer.UDF.prototype = Object.create(Erp.Designer.Control.prototype);
Erp.Designer.UDF.prototype.SerializeContents = function (n) {
    return "<!--UDF-->";
}

Erp.Designer.Window = function () {
    Erp.Designer.Control.call(this);    
    this.PropertyList.splice(4, 0,
        new Erp.Designer.Property({ canGroup: true, category: "Behaviour", name: "Url" }),
        new Erp.Designer.Property({ canGroup: false, category: "Behaviour", name: "Action", label: "Action", editor: new Erp.Designer.PropertyEditor.Action() })
    );
    this.Type = "Window";
    this.DisplayName = "Window";
    this.IsContainer = false;
    this.IsGridBased = false;
    this.RemoveProperty("Small,Medium,Large,Icon");
    this.HighlightEdges = "T,B";
    this.GetContent = function (el, id, store) {
        return $('<div></div>"');

    }
}
Erp.Designer.Window.prototype = Object.create(Erp.Designer.Control.prototype);

Erp.Designer.PDF = function () {
    Erp.Designer.Control.call(this);
    this.PropertyList.splice(4, 0,
        new Erp.Designer.Property({ disableIfDatabound: true, category: "Datasource", name: "FileFieldId", label: "Document Field", editor: new Erp.Designer.PropertyEditor.BrowseMeta("Field", $.QS("EID")) })
    );
    this.Type = "PDF";
    this.DisplayName = "PDF";
    this.IsContainer = false;
    this.IsGridBased = false;
    this.RemoveProperty("Small,Medium,Large,Icon");
    this.HighlightEdges = "T,B";
    this.GetContent = function (el, id, store) {
        return $('<div></div>"');
    }
}
Erp.Designer.PDF.prototype = Object.create(Erp.Designer.Control.prototype);

Erp.Designer.Document = function () {
    Erp.Designer.Control.call(this);
    this.PropertyList.splice(4, 0,
        new Erp.Designer.Property({ category: "Behaviour", name: "LoadOnDemand", label: "Load On Demand", editor: new Erp.Designer.PropertyEditor.Check() }),
        new Erp.Designer.Property({ disableIfDatabound: true, category: "Datasource", name: "FileFieldId", label:"Document Field", editor: new Erp.Designer.PropertyEditor.BrowseMeta("Field", $.QS("EID")) }),
        new Erp.Designer.Property({  category: "Appearance",name: "Theme", editor: new Erp.Designer.PropertyEditor.AutoComplete([{ "label": "Default", "value": "Default" }, { "label": "DevExpress Style", "value": "DevEx" }, { "label": "iOS", "value": "iOS" }, { "label": "Material", "value": "Material" }, { "label": "Metropolis", "value": "Metropolis" }, { "label": "Metropolis Blue", "value": "MetropolisBlue" }, { "label": "Moderno", "value": "Moderno" }, { "label": "Office 2010 Blue", "value": "Office2010Blue" }, { "label": "Office 2010 Silver", "value": "Office2010Silver" }, { "label": "Office 2003 Blue", "value": "Office2003Blue" }, { "label": "Office 2003 Olive", "value": "Office2003Olive" }, { "label": "Office 2003 Silver", "value": "Office2003Silver" }, { "label": "Aqua", "value": "Aqua" }, { "label": "Black Glass", "value": "BlackGlass" }, { "label": "Glass", "value": "Glass" }, { "label": "Mulberry", "value": "Mulberry" }, { "label": "Plastic Blue", "value": "PlasticBlue" }, { "label": "Red Wine", "value": "RedWine" }, { "label": "Soft Orange", "value": "SoftOrange" }, { "label": "Youthful", "value": "Youthful" }]) })
    );
    this.Type = "Document";
    this.DisplayName = "Document";
    this.IsContainer = false;
    this.IsGridBased = false;
    this.RemoveProperty("Small,Medium,Large,Icon");
    this.HighlightEdges = "T,B";
    this.GetContent = function (el, id, store) {
        return $('<div></div>"');
    }
}
Erp.Designer.Document.prototype = Object.create(Erp.Designer.Control.prototype);


Erp.Designer.Spread = function () {
    Erp.Designer.Control.call(this);
    this.PropertyList.splice(4, 0,
        new Erp.Designer.Property({ category: "Behaviour", name: "LoadOnDemand", label: "Load On Demand", editor: new Erp.Designer.PropertyEditor.Check()}),
        new Erp.Designer.Property({ disableIfDatabound: true, category: "Datasource", name: "FileFieldId", label: "Document Field", editor: new Erp.Designer.PropertyEditor.BrowseMeta("Field", $.QS("EID")) }),
        new Erp.Designer.Property({ category: "Appearance", name: "Theme", editor: new Erp.Designer.PropertyEditor.AutoComplete([{ "label": "Default", "value": "Default" }, { "label": "DevExpress Style", "value": "DevEx" }, { "label": "iOS", "value": "iOS" }, { "label": "Material", "value": "Material" }, { "label": "Metropolis", "value": "Metropolis" }, { "label": "Metropolis Blue", "value": "MetropolisBlue" }, { "label": "Moderno", "value": "Moderno" }, { "label": "Office 2010 Blue", "value": "Office2010Blue" }, { "label": "Office 2010 Silver", "value": "Office2010Silver" }, { "label": "Office 2003 Blue", "value": "Office2003Blue" }, { "label": "Office 2003 Olive", "value": "Office2003Olive" }, { "label": "Office 2003 Silver", "value": "Office2003Silver" }, { "label": "Aqua", "value": "Aqua" }, { "label": "Black Glass", "value": "BlackGlass" }, { "label": "Glass", "value": "Glass" }, { "label": "Mulberry", "value": "Mulberry" }, { "label": "Plastic Blue", "value": "PlasticBlue" }, { "label": "Red Wine", "value": "RedWine" }, { "label": "Soft Orange", "value": "SoftOrange" }, { "label": "Youthful", "value": "Youthful" }]) })
    );
    this.Type = "Spread";
    this.DisplayName = "SpreadSheet";
    this.IsContainer = false;
    this.IsGridBased = false;
    this.RemoveProperty("Small,Medium,Large,Icon");
    this.HighlightEdges = "T,B";
    this.GetContent = function (el, id, store) {
        return $('<div></div>"');
    }
}
Erp.Designer.Spread.prototype = Object.create(Erp.Designer.Control.prototype);

Erp.Designer.HTML = function () {
    Erp.Designer.Control.call(this);
    function onPropChange(ed, el, ev) {
        var ctl = Erp.Designer.GetSelectedControls();
        switch (ed.property) {
            case "Content":
                {
                    ctl.each(function () {
                        var c = $(this);
                        Erp.Designer.HTML.SetContent($(this), el.data("srcEditor").getValue());                       
                    })
                    break;
                }
            default: break
        }
    }
    this.PropertyList.push(
        new Erp.Designer.Property({ canGroup: true, name: "Content", editor: new Erp.Designer.PropertyEditor.SourceEditor("HTML"), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "", name: "DisableOuterTags", label: "Do Not Render Outer Tag", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange })
    );
    this.Type = "HTML";
    this.DisplayName = "HTML Content";
    this.IsContainer = true;
    this.IsGridBased = false;
    this.RemoveProperty("Small,Medium,Large,Icon");
    this.HighlightEdges = "T,B";
    this.GetContent = function (el, id, store) {
        return $('<div><div class="shadow"></div></div>"');

    }
}
Erp.Designer.HTML.prototype = Object.create(Erp.Designer.Control.prototype);
Erp.Designer.HTML.prototype.ControlLoaded = function (el, fromEditor) {
    if (el.children(".shadow").data("sha") == 1)
        return;
    var root = el.children(".shadow")[0].attachShadow({ mode: 'open' });
    el.children(".shadow").data("sha", 1);

    root.innerHTML = "<style id='__documentstyle'></style><link href='../Css/materialize.min.css' type='text/css' rel='stylesheet' /><div id='__documentContent'></div>";
    if (!fromEditor) {//from load
        var ds = Erp.Designer.DataStore.GetData(el);
        this.Refresh(el);
        Erp.Designer.HTML.SetContent(el, ds.Content);
    }
}
Erp.Designer.HTML.prototype.Refresh = function (el) {
    var shadow = el.children(".shadow")[0].shadowRoot;
    if (!shadow)
        return;
    var style = shadow.querySelector("#__documentstyle");
    if (style)
        style.innerHTML = Erp.ScriptEditors["txtCss"].getValue();
}
Erp.Designer.HTML.SetContent = function (el, html) {    
    var shadow = el.children(".shadow")[0].shadowRoot;
    var cnt = shadow.querySelector("#__documentContent");  
    //var arr = $.defaultVal(html,"").match(/\[@ID:.*?\]/g);
    //if (arr)
    //    for (var i = 0; i < arr.length; i++) {
    //        var id = arr[i].split(':')[1].split(']')[0];
    //        var ds = Erp.Designer.DataStore.GetDataByName(id);
    //        if (ds)
    //            html = html.replace(arr[i], $("#" + ds.Name)[0].outerHTML)
    //    }
    cnt.innerHTML = html;
}


Erp.Designer.Menu = function () {
    Erp.Designer.Control.call(this);
    function onPropChange(ed, el, ev) {
        var ctl = Erp.Designer.GetSelectedControls();
        switch (ed.property) {
            case "Label":
                {
                    ctl.each(function () { var c = $(this); c.children("ul").find("span").html(el.val()); })
                    break;
                }
            case "MenuStyle":
                {
                    ctl.each(function () { var c = $(this); c.removeClass("listMenu horizontal").addClass(el.val()); })
                    break;
                }
            default: break
        }
    }
    this.PropertyList.push(
        new Erp.Designer.Property({ canGroup: true, name: "MenuStyle", category: "Behaviour", label: "Menu Style", editor: new Erp.Designer.PropertyEditor.Select([{ label: "Default", value: "" }, { label: "ListItem", value: "listMenu" }, { label: "Horizontal", value: "horizontal" }]), onChange: onPropChange })
    );
    this.Type = "Menu";
    this.DisplayName = "Menu";
    this.IsContainer = true;
    this.IsGridBased = false;
    this.RemoveProperty("Small,Medium,Large,Icon");
    this.HighlightEdges = "T,B";
    this.GetContent = function (el, id, store) {     
        var m = $('<ul class=""><div class="ctr"></div></ul>');      
        return m;
    }
}
Erp.Designer.Menu.prototype = Object.create(Erp.Designer.Control.prototype);
Erp.Designer.Menu.prototype.AllowDrop = function (dragObj, dragEl, refEl, elAtPoint) {
    return (dragObj.Type == "MenuItem");
}
Erp.Designer.Menu.prototype.ControlLoaded = function (el, fromEditor) {
    if (fromEditor) {
        el.addClass("allEdge");
        Erp.Designer.AppendControl($("#specialCtlList").children(".MenuItem"), el);
        el.removeClass("allEdge");
    }
    el.on("click", ".arrow", function (e) {
        e.stopPropagation();
        $(this).closest(".erp-control").toggleClass("expand");
    });
}

Erp.Designer.MenuItem = function () {
    Erp.Designer.Control.call(this);
    function onPropChange(ed, el, ev) {
        var ctl = Erp.Designer.GetSelectedControls();
        switch (ed.property) {
            case "Label":
                {
                    ctl.each(function () { var c = $(this); c.children("a").find("span").eq(0).html(el.val()); })
                    break;
                }
            default: break
        }
    }
    this.PropertyList.push(
        new Erp.Designer.Property({ canGroup: true, name: "Label", onChange: onPropChange }),
        new Erp.Designer.Property({ name: "Value" })
    );
    this.Type = "MenuItem";
    this.DisplayName = "MenuItem";
   
    this.IsContainer = true;
    this.IsGridBased = false;
    this.RemoveProperty("Small,Medium,Large");
    this.HighlightEdges = "T,B,R,L";
    this.GetContent = function (el, id, store) {
        store["Label"] = "New Menu Item";
        return $('<li><a class="waves-effect waves-teal"><i class="fa"></i><span>' + store["Label"] + '</span><span class="arrow"></span></a><div class="menuitem-ctr"><ul></ul></div></li>');

    }
}
Erp.Designer.MenuItem.prototype = Object.create(Erp.Designer.Control.prototype);
Erp.Designer.MenuItem.prototype.GetContainer = function (refEl, elAtPoint) {
    return refEl//.children(".collapsible-body").children("ul");
}
Erp.Designer.MenuItem.prototype.ValidDropZone = function (dragEl, refEl, refObj, elAtPoint) {
    return refObj.Type == "Menu" || refObj.Type == "MenuItem" || (elAtPoint.prop("tagName") == "SPAN" && elAtPoint.parent().parent().attr("control-type") == "MenuItem");
}
Erp.Designer.MenuItem.prototype.AllowDrop = function (dragObj, dragEl, refEl, elAtPoint) {
    return (elAtPoint.prop("tagName")=="SPAN" && dragObj.Type == "MenuItem");
}
Erp.Designer.MenuItem.prototype.AppendControl = function (dragObj, field, refEl, elAtPoint) {
    if (refEl.hasClass("allEdge"))
        refEl.addClass("isparent expand").children(".menuitem-ctr").children("ul").append(field);
    else
        Erp.Designer.Control.prototype.AppendControl.call(this, dragObj, field, refEl, elAtPoint);
}
Erp.Designer.MenuItem.prototype.SerializeContents = function (n) {
    var xml = [];
    xml.push("<Content>");
    xml.push(Erp.Designer._serializeItems(n.children(".menuitem-ctr").children("ul").children()));
    xml.push("</Content>");
    return xml.join('');
}
Erp.Designer.MenuItem.prototype.HasInlineContent = function (refEl, elAtPoint) {
    return true;
}

Erp.Designer.Table = function () {
    Erp.Designer.Control.call(this);
    function onPropChange(ed, el, ev) {
        var ctl = Erp.Designer.GetSelectedControls();
        switch (ed.property) {        
            case "TableBorderStyle":
                {
                    ctl.children("table").removeClass("none allCells allRows allCols tableOutline").addClass(el.val());
                    break;
                }
            case "RowStyle":
                {
                    ctl.children("table").removeClass("striped").addClass(el.val());
                    break;
                }
            case "PercentWidth":
                {
                    ctl.children("table").children("colgroup").children().each(function (i) {
                        var c=$(this);
                        if (i == 0)
                            c.css("width", el.checked() ? 0 : "10px");
                        else
                            c.css("width", el.checked() ? (c.width() + "%") : (c.width() + "px"));
                    });
                    ctl.children("table").removeClass("pc").addClass(el.checked() ? "pc" : "");
                    break;
                }
            case "TD_Width":
                {
                    ctl.children("table").children("colgroup").children("col").eq(ctl.find("._sel").index()).css("width", el.val() + (ctl.children("table").hasClass("pc") ? "%" : "px"));
                    break;
                }
            case "TD_ID":
            case "TD_CssClass":
            case "TR_ID":
            case "TR_CssClass":
                {
                    var c = ctl.find("._sel");
                    if (ed.property.indexOf("TR_") == 0)
                        c = c.parent();
                    c.attr(ed.property.split('_')[1].toLowerCase(), el.val());
                    break;
                }
            default: break
        }
    }
    this.PropertyList.splice(4, 0,
        new Erp.Designer.Property({ canGroup: true, category: "Table Style", name: "TableBorderStyle", label: "Border Style", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Select([{ label: "Default", value: "" }, { label: "None", value: "none" }, { label: "All Cells", value: "allCells" }, { label: "All Rows", value: "allRows" }, { label: "All Columns", value: "allCols" }, { label: "Table Outline", value: "tableOutline" }]) }),
        new Erp.Designer.Property({ canGroup: true, category: "Table Style", name: "RowStyle", label: "Row Style", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Select([{ label: "Default", value: "" }, { label: "Alternating", value: "striped" }]) }),
        new Erp.Designer.Property({ canGroup: true, category: "Table Style", name: "PercentWidth", label: "Percent Width", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Check() }),

        new Erp.Designer.Property({ canGroup: true, category: "Selected Cell", displayOnly: true, name: "TD_ID", label: "Html Id", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Selected Cell", displayOnly: true, name: "TD_CssClass", label: "CssClass", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Selected Cell", displayOnly: true, name: "TD_Width", label: "Column Width", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Numeric() }),
        new Erp.Designer.Property({ canGroup: true, category: "Selected Row", displayOnly: true, name: "TR_ID", label: "Html Id", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Selected Row", displayOnly: true, name: "TR_CssClass", label: "CssClass", onChange: onPropChange })

    );
    this.Type = "Table";
    this.DisplayName = "Table";
    this.IsContainer = true;
    this.IsGridBased = false;
    this.RemoveProperty("Small,Medium,Large,Icon");
    this.HighlightEdges = "T,B";
    this.GetContent = function (el, id, store) {
        var div = $("<div></div>");
        div.append("<span class='ui-title table-title'>Table</span><table cellpadding='0' cellspacing='0' ><colgroup><col style='width:10px'/></colgroup><tbody><tr class='colHeader'><td class='first'><div><a class='addRow' title='Add Row'  href='javascript:void(0)'></a><a class='addCol' title='Add Column'  href='javascript:void(0)'></a></div></td></tr></tbody></table>");
        this.addTableCols(div.children("table"));
        this.addTableCols(div.children("table"));
        this.addTableRows(div.children("table"));
        this.addTableRows(div.children("table"));
        return div;

    }
}
Erp.Designer.Table.prototype = Object.create(Erp.Designer.Control.prototype);

Erp.Designer.Table.prototype.ControlLoaded = function (el) {
    var tbl=el.children("table")
    tbl.selectable({
        distance: 1,
        cancel: "a,.rowHeader,.colHeader",
        filter: ".table-cell",
        start: function (event, ui) {
            var tbl = $(event.target);
            tbl.find("._sel").removeClass("_sel")
        },
        stop: function (event, ui) {
            var tbl = $(event.target);
            tbl.parent().children(".mrgCell").remove();
            var sel = tbl.find(".ui-selected");
            if (sel.length > 1) {
                var lnk = $("<a href='javascript:void(0)' class='mrgCell'>Merge Cells</a>");
                tbl.after(lnk);
                lnk.position({ of: sel.eq(0), my: "left,top", at: "left,top" });
            }
            else if (sel.length == 1 && (sel.attr("colspan") / 1 > 1 || sel.attr("rowspan") / 1 > 1)) {
                var lnk = $("<a href='javascript:void(0)' class='mrgCell _un'>Un-Merge Cells</a>");
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
    this.setTableColResize(td);

    var hnd = Function.createDelegate(this, this.tableAction);
    el.on("click", ".addRow,.addCol,.delRow,.delCol,.mrgCell,.table-cell", function (e) { hnd($(this)); if (!$(this).hasClass("table-cell")) e.stopPropagation(); });
    el.children("table").on("dblclick", ".cell-header", function (e) { e.stopPropagation(); })
}
Erp.Designer.Table.prototype.GetContainer = function (refEl, elAtPoint) {
    if (elAtPoint.hasClass("table-cell"))
        return elAtPoint;
    return null;
}
Erp.Designer.Table.prototype.AllowDrop = function (dragObj, dragEl, refEl, elAtPoint) {
    if (elAtPoint.hasClass("table-cell"))
        return true;
}
Erp.Designer.Table.prototype.HasInlineContent = function (refEl, elAtPoint) {
    if (elAtPoint.hasClass("table-cell"))
        return true;
    return false;
}
Erp.Designer.Table.prototype.SerializeContents = function (n) {
    var xml = [];
    xml.push("<Cols>");
    n.children("TABLE").children("colgroup").children().each(function (i) {
        if (i == 0) return true;
        xml.push("<Col Width=\""+$(this).width()+"\" />");
    });
    xml.push("</Cols>");
    n.children("TABLE").children("TBODY").children("TR").each(function () {
        var tr = $(this);
        if (tr.hasClass("colHeader")) return true;
        xml.push('<TR CssClass="' + $.encodeXml(tr.attr("cssclass"), true) + '" Id="' + $.encodeXml(tr.attr("id"), true) + '" >');
        tr.children(".table-cell").each(function () {
            var n = $(this);
            xml.push('<TD  CssClass="' + $.encodeXml(n.attr("cssclass"), true) + '" Id="' + $.encodeXml(n.attr("id"), true) + '" ' + (n.attr("colspan") / 1 > 1 ? ' ColSpan="' + n.attr("colspan") + '"' : '') + (n.attr("rowspan") / 1 > 1 ? ' RowSpan="' + n.attr("rowspan") + '"' : '') + (n.hasClass("_delCells") ? ' Deleted="1"' : '') + ' >');
            xml.push(Erp.Designer._serializeItems($(this).children()));
            xml.push("</TD>");
        })
        xml.push("</TR>");
    });
    return xml.join('');
}

Erp.Designer.Table.prototype.loadCellProps = function (td) {
    var tbl = td.closest("TABLE");
    tbl.find("TD").removeClass("_sel ui-selectee ui-selected");
    tbl.parent().children(".mrgCell").remove();
    td.addClass("_sel");

    var plist = $("#PropertyList").children("._inner");
    plist.find(".prop-item[prop=TD_ID]").children(".rhs").children("input").val($.defaultVal(td.ID(), ""));
    plist.find(".prop-item[prop=TD_CssClass]").children(".rhs").children("input").val($.defaultVal(td.attr("cssclass"), ""));
    plist.find(".prop-item[prop=TD_Width]").children(".rhs").children("input").val(tbl.children("colgroup").children("col").eq(td.index()).width());

    plist.find(".prop-item[prop=TR_ID]").children(".rhs").children("input").val($.defaultVal(td.parent().ID(), ""));
    plist.find(".prop-item[prop=TR_CssClass]").children(".rhs").children("input").val($.defaultVal(td.parent().attr("cssclass"), ""));
}
Erp.Designer.Table.prototype.tableAction = function (a) {
    a = $(a);
    if (a.hasClass("mrgCell")) {
        if (a.hasClass("_un"))
            this.unmergeCells(a);
        else
            this.mergeCells(a);
        return;
    }
    else if (a.hasClass("table-cell")) {
        var that=this;
        window.setTimeout(function () { that.loadCellProps(a); }, 100);
        return;
    }
    var td = a.closest("td");
    var tr = td.parent();
    var tbl = tr.closest("table");

    if (a.hasClass("addCol")) {
        this.addTableCols(tbl, td);
    }
    else if (a.hasClass("addRow")) {
        this.addTableRows(tbl, tr)
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


}
Erp.Designer.Table.prototype.setTableColResize = function (td) {
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
            //ui.element.closest("table").css("width", w);
            ui.element.css("height", "");           
        }

    });
}
Erp.Designer.Table.prototype.addTableRows = function (tbl, el) {
    var l = tbl.children("colgroup").children().length - 1;
    var tr = [];
    for (var i = 0; i < l; i++)
        tr.push("<td class='table-cell inline'></td>");
    tr = $("<tr>" + tr.join("") + "</tr>");
    if (el)
        el.after(tr);
    else
        tbl.children("tbody").append(tr);
    var td = $("<td class='rowHeader cell-header'><div><a class='delRow' title='Delete Row' href='javascript:void(0)'></a><a class='addRow' title='Add Row' href='javascript:void(0)'></a></div></td>");
    tr.prepend(td);
    //td.node(0).resizable({
    //    handles: "s",
    //    start: function (e, ui) {
    //        ui.element.closest("tr").children().css("height", "");           
    //    }        
    //});
}
Erp.Designer.Table.prototype.addTableCols = function (tbl, el) {

    var tr = tbl.children("tbody").node(0);
    var td = $("<td class='cell-header'><div><a class='delCol' title='Delete Column' href='javascript:void(0)'></a><a title='Add Column' class='addCol' href='javascript:void(0)'></a></div></td>");
    if (el) {
        el.after(td);
        tbl.children("colgroup").node(el.index()).after("<col style='width:150px'/>")
    }
    else {
        tr.append(td);
        tbl.children("colgroup").append("<col style='width:150px'/>")
    }
    this.setTableColResize(td);
    var elIndex = el ? el.index() : -1;
    tbl.children("tbody").children().each(function (ind) {
        if (ind > 0) {
            if (elIndex < 0 || !$(this).node(elIndex).exists())
                $(this).append("<td class='table-cell inline'></td>");
            else
                $(this).node(elIndex).after("<td class='table-cell inline'></td>");

        }
    });

    var w = 0;
    tbl.children("colgroup").children().each(function () { w += parseInt($(this).width()); })
    //tbl.css("width", w)
}
Erp.Designer.Table.prototype.mergeCells = function (a) {
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
}
Erp.Designer.Table.prototype.unmergeCells = function (a) {
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
}



Erp.Designer.Text = function () {
    Erp.Designer.Field.call(this);
    function onPropChange(ed, el, ev) {
        var ctl = Erp.Designer.GetSelectedControls();
        switch (ed.property) {            
            case "TextMode": {
                ctl.find("input,textarea").remove();
                if (el.val() == "MultiLine" || el.val() == "RichText")
                    ctl.find("i").after("<textarea class='materialize-textarea'></textarea>");
                else
                    ctl.find("i").after("<input type='" + el.val() + "'/>");
                break;
            }
            default: break
        }
    }
    this.PropertyList.splice(4, 0,
        new Erp.Designer.Property({ name: "TextMode", disableIfDatabound: false, category: "Behaviour", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Select([{ label: "Text", value: "Text" }, { label: "MultiLine", value: "MultiLine" }, { label: "RichText", value: "RichText" }, { label: "Password", value: "Password" }, { label: "Email", value: "Email" }, { label: "Url", value: "Url" }, { label: "Phone", value: "tel" }]) }),
        new Erp.Designer.Property({ name: "MaskExpression", label: "Mask Expression", disableIfDatabound: true, category: "Behaviour" })
    );
    this.IsFormField = true;
    this.Type = "Text";
    this.DisplayName = "Text";
    this.CssClass = function (store, el) { return "input-field erp-Field"; };
    this.GetContent = function (el, id, store) {
        Erp.Controls["Field"].SetStoreData.call(this, el, id, store);
        if (store["Label"] == undefined)
            store["Label"] = "New Text Field";
        return $("<div title=\"" + Erp.Designer.getOverrideData(store["Tooltip"]) + "\">" +
        '<i class="fa"></i>' +
        (store["TextMode"] == "MultiLine" || store["TextMode"] == "RichText" ? "<textarea class='materialize-textarea'></textarea>" : "<input type='" + $.defaultVal(store["TextMode"], "Text") + "'/>") +
        "<label>" + Erp.Designer.getOverrideData(store["Label"]) + "</label>" +
        "</div>");
    }
}
Erp.Designer.Text.prototype = Object.create(Erp.Designer.Field.prototype);


Erp.Designer.Number = function () {
    Erp.Designer.Field.call(this);
    function onPropChange(ed, el, ev) {
        var ctl = Erp.Designer.GetSelectedControls();
        switch (ed.property) {                    
            default: break
        }
    }
    this.PropertyList.splice(4, 0,
        new Erp.Designer.Property({ category: "Behaviour", name: "NumberType", disableIfDatabound: true, editor: new Erp.Designer.PropertyEditor.Select([{ label: "Number", value: "Number" }, { label: "Decimal", value: "Decimal" }, { label: "Currency", value: "Currency" }, { label: "Percent", value: "Percent" }]) }),
        new Erp.Designer.Property({ category: "Behaviour", canGroup: true, name: "Rounding", editor: new Erp.Designer.PropertyEditor.Numeric() }),
        new Erp.Designer.Property({ category: "Behaviour", canGroup: true, name: "MinValue", editor: new Erp.Designer.PropertyEditor.Numeric() }),
        new Erp.Designer.Property({ category: "Behaviour", canGroup: true, name: "MaxValue", editor: new Erp.Designer.PropertyEditor.Numeric() }),
        new Erp.Designer.Property({ category: "Behaviour", canGroup: true, name: "Symbol" })
    );
    this.IsFormField = true;
    this.Type = "Number";
    this.DisplayName = "Number";
    this.CssClass = function (store, el) { return "input-field erp-Field"; };
    this.GetContent = function (el, id, store) {
        Erp.Controls["Field"].SetStoreData.call(this, el, id, store);
        if (store["Label"] == undefined)
            store["Label"] = "New Number Field";
        if (store["NumberType"] == undefined)
            store["NumberType"] = "Number";
        return $("<div  title=\"" + Erp.Designer.getOverrideData(store["Tooltip"]) + "\">" +
        '<i class="fa"></i>' +
        "<input type='number'/><label>" + Erp.Designer.getOverrideData(store["Label"]) + "</label>" +
        "</div>");
    }
}
Erp.Designer.Number.prototype = Object.create(Erp.Designer.Field.prototype);


Erp.Designer.Select = function () {
    Erp.Designer.Field.call(this);
    function onPropChange(ed, el, ev) {
        var ctl = Erp.Designer.GetSelectedControls();
        switch (ed.property) {
            case "Label":
                {
                    ctl.each(function () { var c = $(this); c.children("label").html(el.val()); })
                    break;
                }            
            default: break
        }
    }
    this.PropertyList.splice(4, 0,
        new Erp.Designer.Property({ disableIfDatabound: true, category: "Behaviour", name: "Multiple", label: "Multi Select", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ category: "Behaviour", name: "Expanded",tooltip:"Show Options As List For Array Based Lists", label: "Expanded", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ category: "Behaviour", name: "DisableInlineMode", label: "Enforce Legacy Dropdown Mode", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ category: "Behaviour", name: "DisableTextMode", label: "Render values as chip", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ category: "Behaviour", name: "EnableGridMode", label: "Render values as grid", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ disableIfDatabound: true, category: "Datasource", name: "Items", editor: new Erp.Designer.PropertyEditor.MultiLine({ placeholder: "['a','b','c'] or [{text:'a',value:1},{text:'b',value:2}]" }) }),
        new Erp.Designer.Property({ disableIfDatabound: true, category: "Datasource", name: "Table", editor: new Erp.Designer.PropertyEditor.BrowseMeta("Entity") }),
        new Erp.Designer.Property({ category: "Datasource", name: "FormCode", label:"Form Code"  }),
        new Erp.Designer.Property({ category: "Datasource", name: "QuickAddForm", label:"Quick Add Form Code" }),
        new Erp.Designer.Property({ category: "Datasource", name: "DisableQuickAdd", label: "Disable Quick Add", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ category: "Datasource", name: "DisplayMember"})
        
    );
    this.IsFormField = true;
    this.Type = "Select";
    this.DisplayName = "Select";
    this.CssClass = function (store, el) { return "input-field erp-Field"; };
    this.GetContent = function (el, id, store) {
        Erp.Controls["Field"].SetStoreData.call(this, el, id, store);
        if (store["Label"] == undefined)
            store["Label"] = "New Select Field";
        return $("<div  title=\"" + Erp.Designer.getOverrideData(store["Tooltip"]) + "\">" +
                    '<i class="fa"></i>' +
                    '<div class="select-wrapper">'+
                        '<span class="caret">▼</span>'+
                            '<input value="" readonly class="select-dropdown" type="text">'+
                    '</div><label>' + Erp.Designer.getOverrideData(store["Label"]) + '</label>' +
                '</div>');
    }
}
Erp.Designer.Select.prototype = Object.create(Erp.Designer.Field.prototype);


Erp.Designer.Date = function () {
    Erp.Designer.Field.call(this);
    function onPropChange(ed, el, ev) {
        var ctl = Erp.Designer.GetSelectedControls();
        switch (ed.property) {
            case "Label":
                {
                    ctl.each(function () { var c = $(this); c.children("label").html(el.val()); })
                    break;
                }           
            default: break
        }
    }
    this.PropertyList.splice(4, 0,
        new Erp.Designer.Property({ name: "DateType", category: "Behaviour", disableIfDatabound: true, editor: new Erp.Designer.PropertyEditor.Select([{ label: "Date", value: "Date" }, { label: "DateTime", value: "DateTime" }, { label: "Time", value: "Time" }]) }),
        new Erp.Designer.Property({ category: "Behaviour", name: "RelatedDateID" })
    );
    this.IsFormField = true;
    this.Type = "Date";
    this.DisplayName = "Date";
    this.CssClass = function (store, el) { return "input-field erp-Field"; };
    this.GetContent = function (el, id, store) {
        Erp.Controls["Field"].SetStoreData.call(this, el, id, store);
        if (store["Label"] == undefined)
            store["Label"] = "New Date Field";
        return $("<div  title=\"" + Erp.Designer.getOverrideData(store["Tooltip"]) + "\">" +
        '<i class="fa"></i>' +
        "<input type='text'/><label>" + Erp.Designer.getOverrideData(store["Label"]) + "</label>" +
        "</div>");
    }
}
Erp.Designer.Date.prototype = Object.create(Erp.Designer.Field.prototype);


Erp.Designer.Checkbox = function () {
    Erp.Designer.Field.call(this);
    function onPropChange(ed, el, ev) {
        var ctl = Erp.Designer.GetSelectedControls();
        switch (ed.property) {           
            case "NoBorder":
                {
                    ctl.removeClass("no-border").addClass(el.checked() ? "no-border" : "");
                    break;
                }
            case "ToggleMode":
            case "OnLabel":
            case "OffLabel":
                {

                    ctl.each(function () {
                        var c = $(this);

                        var tgl = false;
                        var data = Erp.Designer.DataStore.GetData(c);
                        if (ed.property == "ToggleMode" && el.checked())
                            tgl = true;
                        else if (ed.property != "ToggleMode")
                            tgl = (data["ToggleMode"] == true);
                        if (tgl) {
                            var on = (ed.property == "OnLabel" ? el.val() : $.defaultVal(data["OnLabel"], ""));
                            var off = (ed.property == "OffLabel" ? el.val() : $.defaultVal(data["OffLabel"], ""));
                            c.addClass("switch");
                            c.children("label,input").remove();
                            c.append("<label>" + off + "<input type='checkbox'><span class='lever'></span>" + on + "</label>")
                        }
                        else {
                            c.removeClass("switch");
                            c.children("label,input").remove();
                            c.append('<label class="label"><input id="' + c.attr("id") + '-chk"  type="checkbox"><span>' + $.defaultVal((data["Label"] && data["Label"].hasOwnProperty("initial") ? (data["Label"].override ? data["Label"]["final"] : data["Label"]["initial"]) : data["Label"]), "") + '</span></label>');
                        }
                    })
                    break;
                }
            default: break
        }
    }
    this.PropertyList.splice(4, 0,        
        new Erp.Designer.Property({ canGroup: true, category: "Behaviour", name: "ToggleMode", label: "Toggle Mode", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Behaviour", defaultValue: "On", name: "OnLabel", label: "On Label", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Behaviour", defaultValue: "Off", name: "OffLabel", label: "Off Label", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Appearance", name: "NoBorder", label: "No Underline", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange })
    );
    this.IsFormField = true;
    this.Type = "Checkbox";
    this.DisplayName = "Checkbox";
    this.RemoveProperty("Mandatory");
    this.CssClass = function (store, el) { return "input-box erp-Field" + (store && store["ToggleMode"] == true ? " switch" : "") + (store && store["NoBorder"] == true ? " no-border" : ""); };
    this.GetContent = function (el, id, store) {
        Erp.Controls["Field"].SetStoreData.call(this, el, id, store);
        if (store["Label"] == undefined)
            store["Label"] = "New Checkbox";
        return $("<div   title=\"" + Erp.Designer.getOverrideData(store["Tooltip"]) + "\" class=\"" + (store["ToggleMode"] == true ? "switch" : "") + "\">" +
                    '<i class="fa"></i>'+
                    (store["ToggleMode"]==true?
                    ('<label>' + store["OffLabel"] + '<input type="checkbox"><span class="lever"></span>' + store["OnLabel"] + '</label>') :
                    ('<label class="label" ><input type="Checkbox" id="' + id + '-chk" /><span>' + Erp.Designer.getOverrideData(store["Label"]) + '</span></label>')) +
                    
                '</div>');
    }
}
Erp.Designer.Checkbox.prototype = Object.create(Erp.Designer.Field.prototype);


Erp.Designer.Radiobutton = function () {
    Erp.Designer.Field.call(this);
    function onPropChange(ed, el, ev) {
        var ctl = Erp.Designer.GetSelectedControls();
        switch (ed.property) {           
            case "Group":
                {
                    ctl.find("input[type=radio]").attr("name",el.val()).checked(false);
                    break;
                }
            case "NoBorder":
                {
                    ctl.removeClass("no-border").addClass(el.checked() ? "no-border" : "");
                    break;
                }
            default: break
        }
    }
    this.PropertyList.splice(4, 0,       
        new Erp.Designer.Property({ canGroup: true, category: "Behaviour", name: "Group", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Appearance", name: "NoBorder", label: "No Underline", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange })
    );
    this.IsFormField = true;
    this.Type = "Radiobutton";
    this.DisplayName = "Radiobutton";
    this.RemoveProperty("Mandatory");
    this.CssClass = function (store, el) { return "input-box erp-Field" + (store && store["NoBorder"] == true ? " no-border" : ""); };
    this.GetContent = function (el, id, store) {
        if (store["Label"] == undefined)
            store["Label"] = "New Radiobutton";
        return $('<div>' +
                    '<i class="fa"></i>' +
                    '<label class="label" for="' + id + '-rdo"><input class="with-gap" type="radio" id="' + id + '-rdo" /><span>' + store["Label"] + '</span></label>' +
                '</div>');
    }
}
Erp.Designer.Radiobutton.prototype = Object.create(Erp.Designer.Field.prototype);

Erp.Designer.Image = function () {
    Erp.Designer.Control.call(this);
    function onPropChange(ed, el, ev, ctl) {
        var ctl = ctl ? ctl : Erp.Designer.GetSelectedControls();
        switch (ed.property) {
            case "ImageWidth":
            case "ImageHeight":
            case "ResizeMode":
            case "Circle":
            case "ImageUrl":
                {
                    ctl.each(function () {
                        var c = $(this);
                        var data = Erp.Designer.DataStore.GetData(c);
                        var h = (ed.property == "ImageHeight" ? (el.val() / 1 > 0 ? el.val() : 125) : (data["ImageHeight"] / 1 > 0 ? data["ImageHeight"] : 100));
                        var w = (ed.property == "ImageWidth" ? (el.val() / 1 > 0 ? el.val() : 125) : (data["ImageWidth"] / 1 > 0 ? data["ImageWidth"] : 100));
                        var r = (ed.property == "ResizeMode" ? $.defaultVal(el.val(), "Fit") : $.defaultVal(data["ResizeMode"], "Fit")).toLowerCase();
                        var ci = (ed.property == "Circle" ? el.checked() : (data["Circle"] == true));
                        var img = (ed.property == "ImageUrl" ? el.val() : data["ImageUrl"]);
                        var fs = h;
                        var bs = "";
                        if(ci){
                            var s= Math.max(w, h);w=s;h=s;
                        }
                        if (r == "fit") {
                            fs = Math.min(w, h) * 0.75;
                            bs = "contain";
                        }
                        else if (r == "fill") {
                            fs = Math.min(w, h) * 0.92;
                            bs = "cover";
                        }
                        else if (r == "crop")
                            fs = Math.max(w, h) * 1.2;
                        else if (r == "actual") {
                            h = ""; w = "";
                            fs = "125";
                        }
                        if (!$.isEmpty(img))
                            fs = "";
                        c.children().css({ "border-radius": (ci ? "50%" : ""), "background-image": "", "background-size": bs, "background-position": "center center", "background-repeat": "no-repeat", "height": (h != "" ? h + "px" : ""), "width": (w != "" ? w + "px" : ""), "font-size": (fs != "" ? fs + "px" : ""), "line-height": (h > 0 ? h + "px" : "") });
                        if (r == "actual" && !$.isEmpty(img)) {
                            //if (ed.property == "ImageUrl")
                                c.children().html("<image src=\"" + img.replace("%APPROOT%", AppRootPath) + "\"/>");
                        }
                        else {
                            if ($.isEmpty(img))
                                c.children().html("<div>&#xf03e;</div>");
                            else
                                c.children().css("background-image", "url(" + img.replace("%APPROOT%", AppRootPath) + ")").html("");
                        }
                    });
                    break;
                }            
            default: break
        }
    }
    
    this.PropertyList.splice(4, 0,
        new Erp.Designer.Property({ name: "ImageUrl", disableIfDatabound: true, category: "Image", label: "Image Url", editor: new Erp.Designer.PropertyEditor.FileBrowser(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true,name: "ImageWidth", category: "Image", label: "Image Width", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true,name: "ImageHeight", category: "Image", label: "Image Height", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true,name: "ResizeMode", category: "Image", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Select([{ label: "Fit", value: "" }, { label: "Crop", value: "Crop" }, { label: "Fill", value: "Fill" }, { label: "Actual", value: "Actual" }]) }),
        new Erp.Designer.Property({ canGroup: true, category: "Image", name: "Circle", label: "Rounded Frame", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange })
    );
    
    this.Type = "Image";
    this.DisplayName = "Image";
    this.IsFormField = true;
    this.IsContainer = false;
    this.IsGridBased = false;
    this.RemoveProperty("Icon,Height");
    this.RemoveSubCategory("Background,Width");
    this.CssClass = function (store, el) { return ""; }
    this.GetContent = function (el, id, store) {
        Erp.Controls["Field"].SetStoreData.call(this, el, id, store);
        store["ImageWidth"] = 125; store["ImageHeight"] = 125;
        return $('<div><span style="height:125px;width:125px;line-height: 125px;font-size:85px;"><div>&#xf03e;</div></span></div>');
    }
}
Erp.Designer.Image.prototype = Object.create(Erp.Designer.Field.prototype);

Erp.Designer.FileUpload = function () {
    Erp.Designer.Field.call(this);
    function onPropChange(ed, el, ev) {
        var ctl = Erp.Designer.GetSelectedControls();
        switch (ed.property) {
            case "ButtonLabel":
                {
                    ctl.children(".btn").children("span").html(el.val());
                    break;
                }
            default: break
        }
    }
    this.PropertyList.splice(4, 0,
        new Erp.Designer.Property({ canGroup: true, name: "ButtonLabel", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, name: "FileTypes", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, name: "MaxFileSize", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Numeric() })
    );
    this.IsFormField = true;
    this.Type = "FileUpload";
    this.DisplayName = "FileUpload";
    this.CssClass = function (store, el) { return "file-field input-field"; };
    this.setDefaultWidth(6, 6, 6);
    this.GetContent = function (el, id, store) {
        Erp.Controls["Field"].SetStoreData.call(this, el, id, store);
        if (store["Label"] == undefined) {
            store["Label"] = "Upload File";
        }
        store["Icon"] = "&#xf093;";
        store["ButtonLabel"] = "File";
        return $("<div title=\"" + Erp.Designer.getOverrideData(store["Tooltip"]) + "\">" +                
                '<div class="btn"><i class="fa prefix">' + store["Icon"] + '</i><span>' + store["ButtonLabel"] + '</span><input disabled type="file"></div>' +
                '<div class="file-path-wrapper"><input class="file-path validate" disabled placeholder="' + Erp.Designer.getOverrideData(store["Label"]) + '" type="text"></div>' +
                "</div>");
    }
}
Erp.Designer.FileUpload.prototype = Object.create(Erp.Designer.Field.prototype);


Erp.Designer.Button = function () {
    Erp.Designer.Control.call(this);
    function onPropChange(ed, el, ev,ctl) {
        var ctl = ctl ? ctl : Erp.Designer.GetSelectedControls();
        switch (ed.property) {
            case "Label":
                {
                    ctl.each(function () {
                        var c = $(this);
                        var d = Erp.Designer.DataStore.GetData(c)["Label"];
                        if (d && d.hasOwnProperty("initial")) {
                            c.children("span").html(d.override ? el.val() : d.initial);
                        }
                        else
                            c.children("span").html(el.val());
                        
                        c.removeClass("icoBtn").addClass($.isEmpty(el.val()) ? "icoBtn" : "")
                    });
                    break;
                }
            case "Tooltip":
                {
                    ctl.each(function () {
                        var c = $(this);
                        var d = Erp.Designer.DataStore.GetData(c)["Tooltip"];
                        if (d && d.hasOwnProperty("initial")) {
                            c.attr("title",d.override ? el.val() : d.initial);
                        }
                        else
                            c.attr("title",el.val());
                    });
                    break;
                }
            case "TextBeforeIcon":
                {
                    ctl.each(function () { var c = $(this); c.children("i").removeClass("left right").addClass(el.checked()?"right":"left"); })
                    break;
                }
            case "RenderAsLink":
                {
                    ctl.removeClass("link btn").addClass(el.checked() ? "link" : "btn");
                    break;
                }
            case "Rounded":
                {
                    ctl.removeClass("round").addClass(el.checked() ? "round" : "");
                    break;
                }
            case "ButtonSize":
                {
                    ctl.removeClass("small large").addClass(el.val());
                    break;
                }
            case "ButtonStyle":
                {
                    ctl.removeClass("save cancel accept reject").addClass(el.val());
                    break;
                }
            default: break
        }
    }
    this.PropertyList.splice(4, 0,        
        new Erp.Designer.Property({ requireOverride: true, canGroup: true, name: "Label", onChange: onPropChange }),
        new Erp.Designer.Property({ requireOverride: true, canGroup: true, name: "Tooltip", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: false, category: "Behaviour", name: "Action", label: "Action", editor: new Erp.Designer.PropertyEditor.Action() }),
        new Erp.Designer.Property({ canGroup: false, category: "Behaviour", name: "NavigateUrl", label: "NavigateUrl" }),
        new Erp.Designer.Property({ canGroup: false, category: "Behaviour", name: "Target", label: "Target", editor: new Erp.Designer.PropertyEditor.AutoComplete(["_blank", "_self", "_parent", "_top"]) }),
        new Erp.Designer.Property({ canGroup: true, category: "Behaviour", name: "RenderAsLink", label: "Render As Link", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Behaviour", name: "TextBeforeIcon", label: "Text Before Icon", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Behaviour", name: "Rounded", label: "Rounded", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Behaviour", name: "ButtonSize", label: "Size", editor: new Erp.Designer.PropertyEditor.Select([{ label: "Default", value: "" }, { label: "Small", value: "small" }, { label: "Large", value: "large" }]), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Behaviour", name: "ButtonStyle", label: "ButtonStyle", editor: new Erp.Designer.PropertyEditor.Select([{ label: "Default", value: "" }, { label: "Save", value: "save" }, { label: "Cancel", value: "cancel" }, { label: "Accept", value: "accept" }, { label: "Reject", value: "reject" }]), onChange: onPropChange })
    );
    this.Type = "Button";
    this.DisplayName = "Button";
    this.IsFormField = true;
    this.IsContainer = false;
    this.IsGridBased = false;
    this.HideInToolbar = true;
    this.setDefaultWidth(2, 2, 2);
    this.CssClass = function (store, el) { return "waves-effect waves-light " + (store["RenderAsLink"] ? " link" : " btn") + (store["Rounded"] ? " round" : "") + " " + store["ButtonSize"]+ " "+ $.defaultVal(store["ButtonStyle"],"")+($.isEmpty(Erp.Designer.getOverrideData(store["Label"]))?" icoBtn":""); };
    this.GetContent = function (el, id, store, refNode) {
        if (el.hasClass("ctl-field")) {
            Erp.Controls["Field"].SetStoreData.call(this, el, id, store);
            store["Icon"] = "&#xf0f6;"
            store["RenderAsLink"] = true;
            store["Label"].override = true;
            store["Label"].final = "View File";
        }
        else if (!$.isEmpty(el.attr("fid")) && el.attr("fid") != "BUTTON" && el.hasClass("ctl-btn")) {
            var fld = Erp.Designer.Utils.Filter(Erp.Designer.ButtonList, "ID", el.attr("fid"));
            if(el.attr("fid")=="SAVE"||el.attr("fid")=="SAVECLOSE")
                store["ButtonStyle"]="save";
            else  if(el.attr("fid")=="CANCEL")
                store["ButtonStyle"]="cancel";

            store["Label"] = { initial: fld.DisplayName };
            store["Tooltip"] = { initial: fld.ToolTip }; 
            store["Icon"] = fld.Icon;
            store["DatasourceID"] = fld.ID;

        } else {
            store["Label"] = "New Button";
            store["Icon"] = "&#xf067;";
            if(refNode && refNode.attr("control-type")=="ButtonPanel"){
                store["Rounded"] = true;
                store["ButtonSize"] = "large";
            }

        }
        var sp = $("<span></span>");sp.html(store["Icon"]);    
        store["Icon"] = sp.text();
        return $('<span title="' + Erp.Designer.getOverrideData(store["Tooltip"]) + '"><i class="fa left">' + store["Icon"] + '</i><span>' + Erp.Designer.getOverrideData(store["Label"]) + '</span></span>');
    }
}
Erp.Designer.Button.prototype = Object.create(Erp.Designer.Control.prototype);
Erp.Designer.Button.prototype.Refresh = function (el) {
    var store = Erp.Designer.DataStore.GetData(el);
    if (el.parent().parent().hasClass("btnctr") && el.parent().parent().parent().hasClass("fixed-action-btn")) {
        el.removeClass("waves-effect waves-light btn").addClass("btn-floating");
        el.css("transform", "transform: scaleX(1) scaleY(1) translateY(0px) translateX(0px)");
        el.css("opacity", 1);
        el.closest(".fixed-action-btn").addClass("active");
    }
    else {
        el.removeClass("btn-floating").addClass("waves-effect waves-light " + (store["RenderAsLink"] ? " link" : " btn") + (store["Rounded"] ? " round" : "") + " " + store["ButtonSize"]);
        el.css("transform", "");
    }
}
Erp.Designer.Button.prototype.AppendControl = function (dragObj, field, refEl, elAtPoint) {
    if (refEl.parent().parent().hasClass("btnctr")) {
        if (refEl.hasClass("leftEdge") || refEl.hasClass("topEdge")) {
            refEl.parent().before($("<li></li>").append(field));
        }
        else if (refEl.hasClass("rightEdge") || refEl.hasClass("bottomEdge")) {
            refEl.parent().after($("<li></li>").append(field));
        }
        dragObj.Refresh(field);
    }
    else
        Erp.Designer.Control.prototype.AppendControl.call(this, dragObj, field, refEl, elAtPoint);
}
Erp.Designer.Button.prototype.getFormControlType = function () {
    return "Button";
}

Erp.Designer.Fab = function () {
    Erp.Designer.Control.call(this);
    function onPropChange(ed, el, ev) {
        var ctl = Erp.Designer.GetSelectedControls();
        switch (ed.property) {
            case "RenderAsBar":
                {
                    ctl.removeClass("fixed-action-btn fixed-action-bar col").addClass(el.checked() ? "fixed-action-bar col" : "fixed-action-btn");
                    ctl.find(".erp-Button").each(function () { $(this).css("opacity", ""); var b = Erp.Designer.getControlObject($(this)); b.Refresh($(this)); });
                    ctl.floatingActionButton();
                    break;
                }
           
            
            default: break
        }
    }
    this.PropertyList.splice(4, 0,
        new Erp.Designer.Property({ canGroup: true, category: "Behaviour", name: "RenderAsBar", label: "Render As Bar", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Behaviour", name: "RenderAsFABInMobile", label: "Render As FAB In Mobile", editor: new Erp.Designer.PropertyEditor.Check()})
             
            );
    this.Type = "Fab";
    this.DisplayName = "Fab";
    this.IsContainer = true;
    this.IsGridBased = false;
    this.HideInToolbar = true;
    this.HighlightEdges = "";
    this.RemoveCategory("Datasource");
    this.CssClass = function (store, el) { return "fixed-action-btn horizontal"; };
    this.GetContent = function (el, id, store) {
    }
}
Erp.Designer.Fab.prototype = Object.create(Erp.Designer.Control.prototype);
Erp.Designer.Fab.prototype.HasInlineContent = function (refEl, elAtPoint) {
    return true;
}
Erp.Designer.Fab.prototype.GetContainer = function (refEl, elAtPoint) {
    return refEl.children(".btnctr");
}
Erp.Designer.Fab.prototype.AllowDrop = function (dragObj, dragEl, refEl, elAtPoint) {
    if (dragObj.Type=="Button")
        return true;
}
Erp.Designer.Fab.prototype.AppendControl = function (dragObj, field, refEl, elAtPoint) {
    var ctr = this.GetContainer(refEl);
    ctr.append($("<li></li>").append(field));
}
Erp.Designer.Fab.prototype.SerializeContents = function (n) {
    var xml = [];
    xml.push("<Content>");
    xml.push(Erp.Designer._serializeItems(n.children(".btnctr").find(".erp-control")));
    xml.push("</Content>");  
    return xml.join('');
}


Erp.Designer.SplitButton = function () {
    Erp.Designer.Control.call(this);
    function onPropChange(ed, el, ev) {
        var ctl = Erp.Designer.GetSelectedControls();
        switch (ed.property) {
            case "Label":
                {
                    ctl.children("span").html(el.val());
                    ctl.removeClass("icoBtn").addClass($.isEmpty(el.val()) ? "icoBtn" : "")
                    break;
                }
            case "Tooltip":
                {
                    ctl.attr("title",el.val());                    
                    break;
                }            
            case "RenderAsLink":
                {
                    ctl.removeClass("link btn").addClass(el.checked() ? "link" : "btn");
                    break;
                }
            case "Rounded":
                {
                    ctl.removeClass("round").addClass(el.checked() ? "round" : "");
                    break;
                }
            case "ButtonSize":
                {
                    ctl.removeClass("small large").addClass(el.val());
                    break;
                }
            
            default: break
        }
    }
    this.PropertyList.splice(4, 0,
       new Erp.Designer.Property({ requireOverride: true, canGroup: true, name: "Label", onChange: onPropChange }),
        new Erp.Designer.Property({ requireOverride: true, canGroup: true, name: "Tooltip", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: false, category: "Behaviour", name: "Action", label: "Action", editor: new Erp.Designer.PropertyEditor.Action() }),
        new Erp.Designer.Property({ canGroup: false, category: "Behaviour", name: "NavigateUrl", label: "NavigateUrl" }),
        new Erp.Designer.Property({ canGroup: false, category: "Behaviour", name: "Target", label: "Target", editor: new Erp.Designer.PropertyEditor.AutoComplete(["_blank", "_self", "_parent", "_top"]) }),
        new Erp.Designer.Property({ canGroup: true, category: "Behaviour", name: "Rounded", label: "Rounded", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Behaviour", name: "ButtonSize", label: "Size", editor: new Erp.Designer.PropertyEditor.Select([{ label: "Default", value: "" }, { label: "Small", value: "small" }, { label: "Large", value: "large" }]), onChange: onPropChange })
    );
    this.Type = "SplitButton";
    this.DisplayName = "SplitButton";
    this.IsContainer = true;
    this.IsGridBased = false;
    this.HideInToolbar = false;
    this.HighlightEdges = "";
    this.RemoveCategory("Datasource");
    this.CssClass = function (store, el) {return "waves-effect waves-light erp-Button" + (store["RenderAsLink"] ? " link" : " btn") + (store["Rounded"] ? " round" : "") + " " + store["ButtonSize"]+ ($.isEmpty(Erp.Designer.getOverrideData(store["Label"]))?" icoBtn":""); };
    //this.CssClass = function (store, el) { return "waves-effect waves-light btn erp-Button"; };
    this.GetContent = function (el, id, store) {
        store["Label"] = "New Button";
        store["Icon"] = "&#xf067;";
        var sp = $("<span></span>");sp.html(store["Icon"]);    
        store["Icon"] = sp.text();
        return $('<a title="' + store["Tooltip"]+ '"><i class="fa left">' + store["Icon"] + '</i><span>' + store["Label"] + '</span><i class="arrow"></i><ul class="btnctr"></ul></a>');
    }
}
Erp.Designer.SplitButton.prototype = Object.create(Erp.Designer.Fab.prototype);


Erp.Designer.Header = function () {
    Erp.Designer.Control.call(this);
    function onPropChange(ed, el, ev) {
        var ctl = Erp.Designer.GetSelectedControls();
        switch (ed.property) {
            case "PageTitle":
                {
                    ctl.find(".page-title").children("span").html(el.val());
                    break;
                }
            case "PageIcon":
                {
                    ctl.find(".page-title").children("i").html($.defaultVal(el, "{}"));
                    break;
                }
            case "HideTitle":
                {
                    ctl.find(".page-title").children("span").setDisplay(!el.checked());
                    break;
                }
            case "HideIcon":
                {
                    ctl.find(".page-title").children("i").setDisplay(!el.checked());
                    break;
                }
            case "EnableSideBar":
                {
                    ctl.find("#header-show-side-nav").setDisplay(el.checked());
                    break;
                }
            case "EnableTopBanner":
                {
                    ctl.children(".topBar").setDisplay(el.checked());
                    break;
                }
            case "EnableButtons":
                {
                    ctl.find(".btnCtr").setDisplay(el.checked());
                    break;
                }
            case "EnableTabBar":
                {
                    ctl.children(".tabBar").setDisplay(el.checked());
                    break;
                }
            case "ShowCloseButton":
                {
                    ctl.find(".close").setDisplay(el.checked());
                    break;
                }
            default: break
        }
    }
    this.PropertyList.splice(4, 0,
        new Erp.Designer.Property({ name: "PageTitle", label: "Page Title", onChange: onPropChange }),
        new Erp.Designer.Property({ name: "PageIcon", label: "Page Icon", editor: new Erp.Designer.PropertyEditor.Icon, onChange: onPropChange }),
        new Erp.Designer.Property({ category: "Behaviour", name: "HideTitle", label: "Hide Title", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ category: "Behaviour", name: "HideIcon", label: "Hide Icon", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ category: "Behaviour", name: "EnableSideBar", label: "Enable Side Bar", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ category: "Behaviour", name: "EnableTopBanner", label: "Enable Top Banner", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ category: "Behaviour", name: "EnableTabBar", label: "Enable Tab-Bar", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ category: "Behaviour", name: "EnableButtons", label: "Enable Buttons", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ category: "Behaviour", name: "FixedHeader", label: "Fixed Header", editor: new Erp.Designer.PropertyEditor.Check() }),
        new Erp.Designer.Property({ category: "Behaviour", name: "ShowCloseButton", label: "Show Close Button", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange })
    );
    this.HideInToolbar = true;
    this.Type = "Header";
    this.HighlightEdges = "";
    this.IsContainer = false;
    this.IsGridBased = false;
    this.DisplayName = "Header";
    this.RemoveProperty("Small,Medium,Large,Icon,Datasource,DatasourceID,DataMember");
    this.CssClass = function (store, el) { return ""; };
    this.GetContent = function (el, id, store) {
        store["FixedHeader"] = true;
        store["ShowCloseButton"] = true;
        return $('<header>' +
                    '<ul style="display:none;position: absolute;height: initial;bottom: 0;" class="sidenav sidenav-fixed">' +
                        '<li>'+
                            '<div class="ctr center section">'+
                                
                            '</div>'+
                        '</li>'+                        
                    '</ul>' +
                    '<nav>'+
                        '<div class="nav-wrapper">'+
                            '<a style="float:left;margin-left:20px"><i class="fa">&#xf0c9;</i></a>'+
                            '<a class="page-title"><i class="fa medium valign"></i><span>@PageTitle</span></a>'+
                        '</div>'+
                    '</nav>'+
                '</header>');
    }
}
Erp.Designer.Header.prototype = Object.create(Erp.Designer.Control.prototype);
Erp.Designer.Header.prototype.HasInlineContent = function (refEl, elAtPoint) {
    return true;//elAtPoint.hasClass("inline");
}
Erp.Designer.Header.prototype.GetContainer = function (refEl, elAtPoint) {
    return elAtPoint;
}
Erp.Designer.Header.prototype.AllowDrop = function (dragObj, dragEl, refEl, elAtPoint) {
    if(elAtPoint.hasClass("ctr"))  
        return true;
}
Erp.Designer.Header.prototype.SerializeContents = function (n) {
    var xml = [];

    xml.push("<SideBar>");
    xml.push("<Content>");
    xml.push(Erp.Designer._serializeItems(n.children(".sidenav").children().eq(0).children(".ctr").children()));
    xml.push("</Content>");
    xml.push("</SideBar>");

    xml.push("<TopBar>");
    xml.push("<Content>");
    xml.push(Erp.Designer._serializeItems(n.children(".topBar").children()));
    xml.push("</Content>");
    xml.push("</TopBar>");

    xml.push("<BtnCtr>");
    xml.push("<Content>");
    xml.push(Erp.Designer._serializeItems(n.find(".btnCtr").children()));
    xml.push("</Content>");
    xml.push("</BtnCtr>");

    xml.push("<TabBar>");
    xml.push("<Content>");
    xml.push(Erp.Designer._serializeItems(n.children(".tabBar").children()));
    xml.push("</Content>");
    xml.push("</TabBar>");

    return xml.join('');
}

Erp.Designer.Footer = function () {
    Erp.Designer.Control.call(this);
   
    this.PropertyList.splice(4, 0,
        new Erp.Designer.Property({ category: "Behaviour", name: "FixedFooter", label: "Fixed Footer", editor: new Erp.Designer.PropertyEditor.Check() })
    );
    this.HideInToolbar = true;
    this.Type = "Footer";
    this.IsContainer = true;
    this.IsGridBased = false;
    this.HighlightEdges = "";
    this.DisplayName = "Footer";
    this.RemoveProperty("Small,Medium,Large,Icon,Datasource,DatasourceID,DataMember");
    this.CssClass = function (store, el) { return "page-footer"; };
    this.GetContent = function (el, id, store) {
        store["FixedFooter"] = true;
        return $('<footer></footer>');
    }
}
Erp.Designer.Footer.prototype = Object.create(Erp.Designer.Control.prototype);

Erp.Designer.Main = function () {
    Erp.Designer.Control.call(this);
    this.HideInToolbar = true;
    this.Type = "Main";
    this.IsContainer = true;
    this.IsGridBased = false;
    this.HighlightEdges = "";
    this.DisplayName = "Main";
    this.DisableDragging = true;
    this.RemoveProperty("Small,Medium,Large,Icon,Datasource,DatasourceID,DataMember");
    this.CssClass = function (store, el) { return ""; };
    
}
Erp.Designer.Main.prototype = Object.create(Erp.Designer.Control.prototype);
Erp.Designer.Main.prototype.SerializeContents = function (n) {    
    return Erp.Designer._serializeItems(n.children());
}
Erp.Designer.Main.prototype.GetContainer = function (refEl, elAtPoint) {
    return refEl;
}

Erp.Designer.LeftPane = function () {
    Erp.Designer.Control.call(this);   
  
    this.HideInToolbar = true;
    this.Type = "LeftPane";
    this.IsContainer = true;
    this.IsGridBased = false;
    this.HighlightEdges = "";
    this.DisplayName = "LeftPane";
    this.RemoveProperty("Small,Medium,Large,Icon,Datasource,DatasourceID,DataMember");
    this.CssClass = function (store, el) { return "page-footer"; };
    this.GetContent = function (el, id, store) {       
        return $('');
    }
}
Erp.Designer.LeftPane.prototype = Object.create(Erp.Designer.Control.prototype);
Erp.Designer.LeftPane.prototype.GetContainer = function (refEl, elAtPoint, dragEl) {    
    return refEl;
}
Erp.Designer.RightPane = function () {
    Erp.Designer.Control.call(this);   
  
    this.HideInToolbar = true;
    this.Type = "RightPane";
    this.IsContainer = true;
    this.IsGridBased = false;
    this.HighlightEdges = "";
    this.DisplayName = "RightPane";
    this.RemoveProperty("Small,Medium,Large,Icon,Datasource,DatasourceID,DataMember");
    this.CssClass = function (store, el) { return "page-footer"; };
    this.GetContent = function (el, id, store) {       
        return $('');
    }
}
Erp.Designer.RightPane.prototype = Object.create(Erp.Designer.Control.prototype);
Erp.Designer.RightPane.prototype.GetContainer = function (refEl, elAtPoint, dragEl) {    
    return refEl;
}
Erp.Designer.Grid = function () {
    Erp.Designer.Control.call(this);
    function onPropChange(ed, el, ev) {
        var ctl = Erp.Designer.GetSelectedControls();
        switch (ed.property) {
            case "Label":
                {
                    ctl.each(function () {
                        var c = $(this);
                        var d = Erp.Designer.DataStore.GetData(c);
                        c.children("ul").find("span").html(el.val());
                    })
                    break;
                }
            case "HideSelectColumn":{
                ctl.removeClass("noChk").addClass(el.checked() ? "noChk" : "");
                break;
            }
            case "ShowHeader": {
                ctl.removeClass("noHeader").addClass(!el.checked() ? "noHeader" : "");
                break;
            }
            case "ShowFooter": {
                ctl.removeClass("noFooter").addClass(!el.checked() ? "noFooter" : "");
                break;
            }            
            case "PercentGrid":
                {
                    ctl.find(".col-ctr").children(".erp-GridColumn").each(function (i) {
                        var c = $(this);
                        var ds = Erp.Designer.DataStore.GetData(c);
                        var w = $.defaultVal(ds.Width, 100);
                        //c.css("width", el.checked() ? (w + "%") : (w + "px"));
                    });
                    ctl.removeClass("pc").addClass(el.checked() ? "pc" : "");
                    break;
                }
            default: break
        }
    }
    this.RemoveCategory("Events");
    this.PropertyList.splice(4, 0,
        new Erp.Designer.Property({ canGroup: true, name: "MainGrid", hidden: true }),
        new Erp.Designer.Property({ canGroup: true, hidden: true, name: "Id" }),
        new Erp.Designer.Property({ canGroup: true, name: "HtmlId" }),
        new Erp.Designer.Property({ canGroup: true, category: "Filters", name: "FilterID", label: "Default Filter", editor: new Erp.Designer.PropertyEditor.Select(Erp.Designer.Collections.Filters, "layoutname", "layout_pid", [{ label: "Please Select", value: "" }]) }),
        new Erp.Designer.Property({ canGroup: true, category: "Filters", name: "EnforceFilter", label: "Compulsory Filter", editor: new Erp.Designer.PropertyEditor.Select(Erp.Designer.Collections.Filters, "layoutname", "layout_pid", [{ label: "Please Select", value: "" }]) }),
        new Erp.Designer.Property({ canGroup: true, category: "Filters", name: "DefaultFilter", displayOnly: true, label: "Filter Records", noEncode: true, editor: new Erp.Designer.PropertyEditor.Filter() }),//xml
        new Erp.Designer.Property({ canGroup: true, category: "Filters", name: "ApplicableFilters", displayOnly: true , editor: new Erp.Designer.PropertyEditor.MultiSelect(Erp.Designer.Collections.Filters, "layoutname", "layout_pid", [{ label: "All Filters", value: "ALL" }]) }),//xml
        new Erp.Designer.Property({ canGroup: true, category: "Filters", name: "SearchFilter", label: "Search Query Filter", editor: new Erp.Designer.PropertyEditor.Select(Erp.Designer.Collections.Filters, "layoutname", "layout_pid", [{ label: "Please Select", value: "" }]) }),
        new Erp.Designer.Property({ canGroup: true, category: "Filters", name: "ShowFilter", label: "Show Grid Filter", editor: new Erp.Designer.PropertyEditor.Check() }),
        new Erp.Designer.Property({ canGroup: true, category: "Filters", name: "RenderFilterMode", label: "Filter Mode", editor: new Erp.Designer.PropertyEditor.Check(), editor: new Erp.Designer.PropertyEditor.Select([{ label: "Dropdown", value: "" },{ label: "Tabs", value: "Tabs" },{ label: "None", value: "None" }]) }),
        new Erp.Designer.Property({ canGroup: true, category: "Filters", name: "ExpandAdvancedFilter", label: "Advanced Filter Mode", editor: new Erp.Designer.PropertyEditor.Select([{ label: "Default", value: "0" },{ label: "None", value: "-1" },{ label: "Expanded", value: "1" },{ label: "AlwaysExpanded", value: "2" },{ label: "HideGrid", value: "3" }]) }),
        //new Erp.Designer.Property({ canGroup: true, category: "Filters", name: "AdvancedFilterButtonTitle", label: "Advanced Filter Button" }),
        //new Erp.Designer.Property({ canGroup: true, category: "Filters", name: "AdvancedFilterPreviewTitle", label: "Advanced Filter Preview Button" }),

        new Erp.Designer.Property({ canGroup: true, category: "Settings", name: "ShowHeader", label: "Show Column Header", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Settings", name: "ShowFooter", label: "Show Column Footer", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),

        new Erp.Designer.Property({ canGroup: true, category: "Settings", name: "SpecificWF", label: "Workflow", editor: new Erp.Designer.PropertyEditor.Select(Erp.Designer.Collections.Workflows, "workflowname", "workflow_pid", [{ label: "Please Select", value: "" }]) }),
        new Erp.Designer.Property({ canGroup: true, category: "Settings", name: "Datakeys", displayOnly: true, editor: new Erp.Designer.PropertyEditor.PickList([], "", "", { mode: "Field", eid: $.QS("EID") }) }),//xml
        new Erp.Designer.Property({ canGroup: true, category: "Settings", name: "DisableBind", label: "Disable Databind On Load", editor: new Erp.Designer.PropertyEditor.Check() }),
        new Erp.Designer.Property({ canGroup: true, category: "Settings", name: "EnablePaging", label: "Enable Paging", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Settings", name: "RecordCount", label: "Records Per Page", editor: new Erp.Designer.PropertyEditor.Numeric() }),
        new Erp.Designer.Property({ canGroup: true, category: "Settings", name: "FrozenCount", label: "Frozen Column Count", editor: new Erp.Designer.PropertyEditor.Numeric() }),

        new Erp.Designer.Property({ canGroup: true, category: "Settings", name: "HideMultiSelect", label: "Disable Multiple Selection Of Records", editor: new Erp.Designer.PropertyEditor.Check() }),
        new Erp.Designer.Property({ canGroup: true, category: "Settings", name: "HideSelectColumn", label: "Hide Select Column", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Settings", name: "WrapCell", label: "Wrap Cell Contents", editor: new Erp.Designer.PropertyEditor.Check() }),
        new Erp.Designer.Property({ canGroup: true, category: "Settings", name: "PercentGrid", label: "Grid Width In Percent", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Settings", name: "ShowSetting", label: "Show Grid Export", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Settings", name: "AllowScroll", label: "Allow Scrolling", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Settings", name: "ShowGridlines", label: "Show Gridlines", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Settings", name: "EnableServerCommand", label: "Enable Grid ServerCommand", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),

        new Erp.Designer.Property({ canGroup: true, category: "Grouping", subCategory: "Treeview", name: "EnableTreeview", label: "Show As Treeview", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Grouping", subCategory: "Treeview", name: "TreeLevel", label: "Default No. Of Levels To Display", editor: new Erp.Designer.PropertyEditor.Numeric() }),
        new Erp.Designer.Property({ canGroup: true, category: "Grouping", subCategory: "Treeview", name: "TreeParentColumn", label: "Parent Column (Optional)" }),
        new Erp.Designer.Property({ canGroup: true, category: "Grouping", subCategory: "Grouping", name: "EnableGrouping", label: "Enable Grouping", editor: new Erp.Designer.PropertyEditor.Check(), onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Grouping", subCategory: "Grouping", name: "HideGroupDetails", label: "Hide Details", displayOnly: true, editor: new Erp.Designer.PropertyEditor.Check() }),
        new Erp.Designer.Property({ canGroup: true, category: "Grouping", subCategory: "Grouping", name: "Level", label: "Default No. Of Levels To Display", displayOnly: true, editor: new Erp.Designer.PropertyEditor.Numeric() }),
        new Erp.Designer.Property({ canGroup: true, category: "Grouping", subCategory: "Grouping", name: "GridGroupBtn", label: "Add New Group", displayOnly: true, editor: new Erp.Designer.PropertyEditor.Button("Add Group", addGroup) }),//xml
        new Erp.Designer.Property({ canGroup: true, category: "Grouping", name: "HideMergeDetails", label: "Enable Column Merging", displayOnly: true, editor: new Erp.Designer.PropertyEditor.Check() }),
        new Erp.Designer.Property({ canGroup: true, category: "Grouping", name: "GridColumnGroup", label: "Merge Columns", displayOnly: true, editor: new Erp.Designer.PropertyEditor.GridColumnMerge() }),//xml

        new Erp.Designer.Property({ canGroup: true, category: "Editing", name: "EnableGridEdit", label: "Enable Editing", editor: new Erp.Designer.PropertyEditor.Check() }),
        new Erp.Designer.Property({ canGroup: true, category: "Editing", name: "EnableGridEdit_CellMode", label: "Enable Cell-wise Editing", editor: new Erp.Designer.PropertyEditor.Check() }),
        new Erp.Designer.Property({ canGroup: true, category: "Editing", name: "EnableGridEdit_NewRec", label: "Allow New Rows", editor: new Erp.Designer.PropertyEditor.Check() }),
        new Erp.Designer.Property({ canGroup: true, category: "Editing", name: "GridEdit_DefaultRec", label: "Default No. Of New Rows", editor: new Erp.Designer.PropertyEditor.Numeric() }),
        new Erp.Designer.Property({ canGroup: true, category: "Editing", name: "GridEdit_MaxRec", label: "Max No. Of New Rows", editor: new Erp.Designer.PropertyEditor.Numeric() }),


         new Erp.Designer.Property({ canGroup: true, name: "OnRowClick", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnRowDblClick", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnRowSelected", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnRowAdding", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnRowAdded", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnRowDataBound", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnRowDeleting", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnRowDeleted", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnRowEditing", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnRowValidating", category: "Events" }),
         

         new Erp.Designer.Property({ canGroup: true, name: "OnCellEditing", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnCellChanged", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnCellValidating", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnCellSaving", category: "Events" }),

         new Erp.Designer.Property({ canGroup: true, name: "OnRecordSaving", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnGridSaving", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnSaveComplete", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnGridBinding", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnGridDataBound", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnGridExporting", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnGridAdvancedFilter", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnGridButtonClick", category: "Events" }),
        new Erp.Designer.Property({ canGroup: true, hidden: true, name: "Buttons", displayOnly: true }),
        new Erp.Designer.Property({ canGroup: true, hidden: true, name: "ButtonOrder", displayOnly: true })
    );
    this.ChildProps = ["DefaultFilter", "ApplicableFilters","ElementStates"];
    this.Type = "Grid";
    this.DisplayName = "Grid";
    this.IsContainer = true;
    this.IsGridBased = false;
    this.RemoveProperty("Small,Medium,Large");
    this.HighlightEdges = "T,B";
    this.HideInToolbar = true;
    this.GetContent = function (el, id, store) {
        store["RecordCount"] = 30;
        store["EnablePaging"] =true;
        return $('<div style="height:100px;background:red;">' +
                   '</div>');

    }

    function addGroup(e) {
        var gr = Erp.Designer.AppendControl($("<div control-type='GridGroup'></div>"), $("#" + e.data.store.Name).children(".gridBody").children(".gridGroup").show().addClass("allEdge"), null);
        Erp.Designer.RefreshControl(e.data.store.Name);
    }
}
Erp.Designer.Grid.prototype = Object.create(Erp.Designer.Control.prototype);
Erp.Designer.Grid.prototype.GetContainer = function (refEl, elAtPoint) {
    return elAtPoint;
}
Erp.Designer.Grid.prototype.AllowSiblings = function (dragObj, dragEl, refEl, elAtPoint) {
    var ds = Erp.Designer.DataStore.GetData(refEl);
    return ds.MainGrid != 1;
}
Erp.Designer.Grid.prototype.AllowDrop = function (dragObj, dragEl, refEl, elAtPoint) {
    if (dragObj.Type == "GridColumn" && elAtPoint.hasClass("col-ctr"))
        return true;
    else if (dragObj.Type != "GridColumn" && elAtPoint.hasClass("ctr"))
        return true;
    else
        return false;
}
Erp.Designer.Grid.prototype.AllowDrag = function (el) {
    var ds = Erp.Designer.DataStore.GetData(el);
    return ds.MainGrid != 1;
}
Erp.Designer.Grid.prototype.Refresh = function (el) {
    var store = Erp.Designer.DataStore.GetData(el);
    var colctr = el.children(".gridBody").children(".col-ctr");
    el.children(".gridBody").children(".gridGroup").css("width", Math.min(el.outerWidth() - 2, el.children(".gridBody").children(".col-ctr").children(":last").getPosition().right - 1));
    colctr.find(".hdr").css("margin-bottom", el.children(".gridBody").children(".gridGroup").outerHeight());
    el.children(".gridBody").children(".gridGroup").children().each(function (i) { $(this).css("padding-left", i * 20) });

   
    colctr.children().each(function () { $(this).children(".itm").eq(0).css("min-height", ""); });
    var h = 40;
    colctr.children().each(function () { h = Math.max(h, $(this).children(".itm").eq(0).outerHeight()); });
    h = h < 40 ? 40 : h;
    colctr.children().each(function () { $(this).children(".itm").eq(0).css("min-height", h); });

    if (!el.data("_domevent")) {
        el.data("_domevent", true);
        el.on("DOMSubtreeModified", $.debounce(250, function () {
            var g = $(this);
            Erp.Designer.getControlObject(g).Refresh(g)
        }));
    }
}
Erp.Designer.Grid.prototype.AppendControl = function (dragObj, field, refEl, elAtPoint) {
    if (elAtPoint.hasClass("col-ctr"))
        elAtPoint.append(field);
    else
        Erp.Designer.Control.prototype.AppendControl.call(this, dragObj, field, refEl, elAtPoint);
}
Erp.Designer.Grid.prototype.SerializeContents = function (n) {
    var xml = [];
    var ds = Erp.Designer.DataStore.GetData(n);

    xml.push("<GridHeader>");
    xml.push(Erp.Designer._serializeItems(n.children(".gridHeader").children()));
    xml.push("</GridHeader>");

    xml.push("<GridLeftPane>");
    xml.push(Erp.Designer._serializeItems(n.children(".gridLeftPane").children()));
    xml.push("</GridLeftPane>");

    xml.push("<GridRightPane>");
    xml.push(Erp.Designer._serializeItems(n.children(".gridRightPane").children()));
    xml.push("</GridRightPane>");

    xml.push(Erp.Designer._serializeItems(n.children(".erp-ButtonPanel")));

    xml.push("<ColInfo>");
    xml.push(Erp.Designer._serializeItems(n.children(".gridBody").children(".col-ctr").children()));
    xml.push("</ColInfo>");

    xml.push("<GridGroup Level=\"" + Fn.CInt(ds.Level) + "\" HideGroupDetails=\"" + (ds.HideGroupDetails == true ? 1 : 0) + "\">");
    xml.push(Erp.Designer._serializeItems(n.children(".gridBody").children(".gridGroup").children()));
    xml.push("</GridGroup>");

    xml.push("<GridColumnGroup  HideMergeDetails=\"" + (ds.HideMergeDetails == true ? 1 : 0) + "\">");
    xml.push(Erp.Designer._serializeItems(n.children(".gridColumnGroup").children()));
    xml.push("</GridColumnGroup>");
    xml.push("<Datakeys>");
    if ($.isArray(ds.Datakeys)) {
        for (var i = 0; i < ds.Datakeys.length; i++) {
            xml.push('<Cols Name="' + ds.Datakeys[i].resources_pid + '" EntityPath="' + ds.Datakeys[i].entityPath + '" FieldInfoID="' + ds.Datakeys[i].fieldInfo + '" Title="' + ds.Datakeys[i].resourcename + '" Path="' + ds.Datakeys[i].path + '" IsWFItem="0" WFCode=""  />');
        }
    }
    xml.push("</Datakeys>");

    xml.push("<GridFooter>");
    xml.push(Erp.Designer._serializeItems(n.children(".gridFooter").children()));
    xml.push("</GridFooter>");


    return xml.join('');
}


Erp.Designer.GridColumn = function () {
    Erp.Designer.Control.call(this);
    function onPropChange(ed, el, ev) {
        var ctl = Erp.Designer.GetSelectedControls();
        switch (ed.property) {
            case "Width":
                {
                    var u = (el.val().indexOf("%") > 0 ? el.val() : (Fn.CFlt(el.val()) + "px"));
                    ctl.each(function () { var c = $(this); c.width(u); });
                    Erp.Designer.RefreshControl(ctl.closest(".erp-Grid"));
                    break;
                }
            case "Title":
                {                    
                    ctl.each(function () { var c = $(this); c.find(".hdr").text(el.val()); });
                    break;
                }
            case "TemplateType": {
                var ds = Erp.Designer.DataStore.GetData(ctl.eq(0));               
                if (!$.isEmpty(ds.TemplateType) && !confirm('Any existing template will be cleared. Do you wish to continue?'))
                    return false;
                var ids = [];
              
                ctl.each(function () {
                    var c = $(this);
                    var itm = c.children(".itm").eq(0);                   
                    Erp.Designer.DeleteFields(itm.children(".default-ctr"));
                    itm.removeClass("tmpl").html("");
                    if ($.isEmpty(el.val()))
                        return true;                    
                   
                    itm.addClass("tmpl").html("<div class='inline ctr default-ctr'></div>");
                  
                    var p;
                    var ctr = itm.children(".default-ctr");                    
                    var ctr2;
                    var cls = Erp.Designer.getControlObject("InlinePanel");
                    p = cls.RenderControl($(""), "", c.ID() + "_InlinePanel_");
                    ctr.append(p);
                    cls.ControlLoaded(p, true);
                    cls.SetPropertyValue(p, "HtmlID", "");
                    cls.SetPropertyValue(p, "Style", "padding:8px;");                  
                    ids.push(p.ID());
                    if (el.val() == "Empty")
                        return true;

                    ctr = p.children(".ctr");

                    if (el.val().indexOf("Image")==0) {
                        cls = Erp.Designer.getControlObject("Image");
                        p = cls.RenderControl($(""), "", c.ID() + "_Image_");
                        ctr.append(p);
                        cls.ControlLoaded(p, true);
                        cls.SetPropertyValue(p, "HtmlID", "");
                        cls.SetPropertyValue(p, "Style", "float:left;z-index:10;margin: 0 16px 0 8px;");
                        cls.SetPropertyValue(p, "ImageHeight", 50); cls.SetPropertyValue(p, "ImageWidth", 50); cls.SetPropertyValue(p, "ImageWidth", 50);
                        ids.push(p.ID());
                    }

                    if (el.val().indexOf("Image") == 0) {
                        cls = Erp.Designer.getControlObject("InlinePanel");
                        p = cls.RenderControl($(""), "", c.ID() + "_InlinePanel_");
                        ctr.append(p);
                        cls.ControlLoaded(p, true);
                        cls.SetPropertyValue(p, "HtmlID", "");
                        cls.SetPropertyValue(p, "Style", "width:initial;margin-left:74px");
                        cls.SetPropertyValue(p, "BoxModel", "block");
                        ctr2 = p.children(".ctr");
                        ids.push(p.ID());
                    }
                    else
                        ctr2 = ctr;

                    if (el.val().indexOf("Status") > 0) {
                        cls = Erp.Designer.getControlObject("Label");
                        p = cls.RenderControl($(""), "", c.ID() + "_Label_");
                        ctr.append(p);
                        cls.ControlLoaded(p, true);
                        cls.SetPropertyValue(p, "HtmlID", "");
                        cls.SetPropertyValue(p, "Style", "position:absolute;right:8px;top:8px;z-index:1");
                        cls.SetPropertyValue(p, "LabelStyle", "caption");
                        ids.push(p.ID());
                    }

                    if (el.val().indexOf("1Line") >= 0 || el.val().indexOf("2Line") >= 0 || el.val().indexOf("3Line") >= 0) {
                        cls = Erp.Designer.getControlObject("Button");
                        p = cls.RenderControl($(""), "", c.ID() + "_Button_");
                        ctr2.append(p);
                        cls.ControlLoaded(p, true);
                        cls.SetPropertyValue(p, "HtmlID", "");
                        cls.SetPropertyValue(p, "CssClass", "subHeading2");
                        cls.SetPropertyValue(p, "BoxModel", "inline-block");
                        cls.SetPropertyValue(p, "RenderAsLink", true);
                        cls.SetPropertyValue(p, "Icon", "");
                        cls.SetPropertyValue(p, "OnClick", "__openForm");
                        ids.push(p.ID());
                    }

                    if (el.val().indexOf("2Line") >= 0 || el.val().indexOf("3Line") >= 0) {
                        cls = Erp.Designer.getControlObject("Label");
                        p = cls.RenderControl($(""), "", c.ID() + "_Label_");
                        ctr2.append(p);
                        cls.ControlLoaded(p, true);
                        cls.SetPropertyValue(p, "HtmlID", "");
                        cls.SetPropertyValue(p, "LabelStyle", "caption");
                        cls.SetPropertyValue(p, "BoxModel", "block");
                        ids.push(p.ID());
                    }

                    if (el.val().indexOf("3Line") >= 0) {
                        cls = Erp.Designer.getControlObject("Label");
                        p = cls.RenderControl($(""), "", c.ID() + "_Label_");
                        ctr2.append(p);
                        cls.ControlLoaded(p, true);
                        cls.SetPropertyValue(p, "HtmlID", "");
                        cls.SetPropertyValue(p, "LabelStyle", "caption");
                        cls.SetPropertyValue(p, "BoxModel", "block");
                        ids.push(p.ID());
                    }
                });
                ds.TemplateType = el.val();
                Erp.Designer.Update("Added", ids);
                Erp.Designer.DeselectAll();
                ctl.addClass("ctl-selected");
                Erp.Designer.LoadPropertylist(ctl.eq(0), ctl);
                break;
            }
            default: break
        }
    }
    this.RemoveCategory("Appearance,Location,Events");
    this.PropertyList.splice(4, 0,
        new Erp.Designer.Property({ canGroup: true, name: "ColumnType", displayOnly: true, readOnly: true, editor: new Erp.Designer.PropertyEditor.Select([{ label: "BoundColumn", value: "" }, { label: "Subquery", value: "subquery" }, { label: "Expression", value: "expr" }]) }),
        new Erp.Designer.Property({ canGroup: true, name: "Title", label: "Header Text", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, name: "Prefix", label: "Column Name", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, name: "GroupName", label: "Group Name", editor: new Erp.Designer.PropertyEditor.AutoComplete([], getItems) }),
        new Erp.Designer.Property({ canGroup: true, name: "TemplateType", label: "Template", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Select([{ label: "None", value: "" }, { value: "1Line", label: "1 Line Data" }, { value: "2Line", label: "2 Line Data" }, { value: "3Line", label: "3 Line Data" }, { value: "Image1Line", label: "Image With 1 Line Data" }, { value: "Image2Line", label: "Image With 2 Line Data" }, { value: "Image3Line", label: "Image With 3 Line Data" }, { value: "Image1LineStatus", label: "Image With 1 Line Data And Status" }, { value: "Image2LineStatus", label: "Image With 2 Line Data And Status" }, { value: "Image3LineStatus", label: "Image With 3 Line Data And Status" }, { value: "Empty", label: "Empty" }]) }),

        new Erp.Designer.Property({ canGroup: true, name: "Subquery", category: "Settings", displayOnly: true, noEncode: true, editor: new Erp.Designer.PropertyEditor.Filter(true) }),
        new Erp.Designer.Property({ canGroup: true, name: "Width", label: "Column Width", category: "Settings", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Unit() }),
        new Erp.Designer.Property({ canGroup: true, name: "MobileWidth", label: "Column Width Mobile", category: "Settings", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Unit() }),
        new Erp.Designer.Property({ canGroup: true, name: "EnableColEditing", label: "Enable Editing", category: "Settings", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Check() }),
        new Erp.Designer.Property({ canGroup: true, name: "IsLink", label: "Render As Link", category: "Settings", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Check() }),
        new Erp.Designer.Property({ canGroup: true, name: "Sort", category: "Settings", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Select([{ label: "None", value: "" }, { label: "Asc", value: "Asc" }, { label: "Desc", value: "Desc" }]) }),
        new Erp.Designer.Property({ canGroup: true, name: "ColDataType", category: "Settings", label: "DataType", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Select([{ label: "Default", value: "Default" }, { label: "Text", value: "text" }, { label: "Number", value: "number" }, { label: "Decimal", value: "decimal" }, { label: "Date", value: "date" }, { label: "DateTime", value: "datetime" }, { label: "Time", value: "time" }, { label: "Checkbox", value: "checkbox" }, { label: "SingleSelect", value: "singleselect" }]) }),
        new Erp.Designer.Property({ canGroup: true, name: "Join", label: "Join Operator", category: "Settings", editor: new Erp.Designer.PropertyEditor.Select(["Default", "Inner", "Cross", "Right"]) }),
        new Erp.Designer.Property({ canGroup: true, name: "JoinLogic", label: "Join Logic", category: "Settings", editor: new Erp.Designer.PropertyEditor.MultiLine() }),
        new Erp.Designer.Property({ canGroup: true, name: "FieldLogic", label: "Field Logic", category: "Settings", editor: new Erp.Designer.PropertyEditor.MultiLine() }),
        new Erp.Designer.Property({ canGroup: true, name: "RequiredApp", category: "Settings", label: "Required App/Module" }),

        new Erp.Designer.Property({ canGroup: true, name: "FilterOption", label: "Show Filter", category: "Filter", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Select(["Default", "Always", "Never"]) }),
        new Erp.Designer.Property({ canGroup: true, category: "Filter", name: "FilterLocation", label: "Filter Location", editor: new Erp.Designer.PropertyEditor.Select([{ label: "Advanced-Filter", value: "" }, { label: "Top-Left", value: "Top-Left" }])}),
        new Erp.Designer.Property({ canGroup: true, name: "DisableTextSearch", label: "Disable Text Search", category: "Filter", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Check() }),
        new Erp.Designer.Property({ canGroup: true, category: "Filter", name: "FilterLabel", label: "Filter Label"}),
        new Erp.Designer.Property({ canGroup: true, category: "Filter", name: "FilterIcon", label: "Filter Icon", editor: new Erp.Designer.PropertyEditor.Icon, onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, category: "Filter", name: "FilterFormCode", label: "Lookup Form Code"}),
        new Erp.Designer.Property({ canGroup: true, category: "Filter", name: "FilterEntity", label: "Lookup Entity"}),
        new Erp.Designer.Property({ canGroup: true, category: "Filter", name: "FilterValueList", label: "Lookup Value List", editor: new Erp.Designer.PropertyEditor.MultiLine({ placeholder: "['a','b','c'] or [{text:'a',value:1},{text:'b',value:2}]" })}),
        new Erp.Designer.Property({ canGroup: true, category: "Filter", name: "FilterDisableMultiSelect", label: "Lookup Single selection", editor: new Erp.Designer.PropertyEditor.Check()}),
        new Erp.Designer.Property({ canGroup: true, category: "Filter", name: "FilterEvent", label: "Filter Event"}),
        new Erp.Designer.Property({ canGroup: true, category: "Filter", name: "FilterParameters", label: "Filter Parameters", editor: new Erp.Designer.PropertyEditor.MultiLine({ placeholder: "" })}),

        new Erp.Designer.Property({ canGroup: true, name: "LinkFunction", label: "On Click", category: "Events" }),

        new Erp.Designer.Property({ canGroup: true, name: "EntityPath", category: "Datasource", readOnly: true }),
        new Erp.Designer.Property({ canGroup: true, name: "WFCode", category: "Datasource", readOnly: true }),

        new Erp.Designer.Property({ canGroup: true, name: "HeaderStyle.CssClass", label: "CssClass", category: "Styles", subCategory: "HeaderStyle", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, name: "HeaderStyle.HorizontalAlign", label: "HorizontalAlign", category: "Styles", subCategory: "HeaderStyle", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.AutoComplete(["left", "right", "center"]) }),
        new Erp.Designer.Property({ canGroup: true, name: "HeaderStyle.VerticalAlign", label: "VerticalAlign", category: "Styles", subCategory: "HeaderStyle", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.AutoComplete(["top", "middle", "bottom"]) }),
        new Erp.Designer.Property({ canGroup: true, name: "HeaderStyle.Height", label: "Height", category: "Styles", subCategory: "HeaderStyle", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Numeric() }),


        new Erp.Designer.Property({ canGroup: true, name: "ItemStyle.CssClass", label: "CssClass", category: "Styles", subCategory: "ItemStyle", onChange: onPropChange }),
        new Erp.Designer.Property({ canGroup: true, name: "ItemStyle.HorizontalAlign", label: "HorizontalAlign", category: "Styles", subCategory: "ItemStyle", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.AutoComplete(["left", "right", "center"]) }),
        new Erp.Designer.Property({ canGroup: true, name: "ItemStyle.VerticalAlign", label: "VerticalAlign", category: "Styles", subCategory: "ItemStyle", onChange: onPropChange, onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.AutoComplete(["top", "middle", "bottom"]) }),
        new Erp.Designer.Property({ canGroup: true, name: "ItemStyle.Height", label: "Height", category: "Styles", subCategory: "ItemStyle", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Numeric() }),

        new Erp.Designer.Property({ canGroup: true, name: "Formatting.", category: "Templates", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.MultiLine() }),
        new Erp.Designer.Property({ canGroup: true, name: "ItemTemplate.", category: "Templates", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.MultiLine() }),

        new Erp.Designer.Property({ canGroup: true, name: "EditTemplate.", category: "Templates", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.MultiLine() }),
        new Erp.Designer.Property({ canGroup: true, name: "FooterTemplate.", category: "Templates", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.MultiLine() })

    );
    this.ChildProps = ["ElementStates", "HeaderStyle", "ItemStyle", "Formatting", "ItemTemplate", "EditTemplate", "FooterTemplate"];
    this.GetProperty("Name").displayOnly = true;
    this.Type = "GridColumn";
    this.DisplayName = "GridColumn";
    this.SerializedType = "Cols";
    this.IsContainer = false;
    this.IsGridBased = false;
    this.HideInToolbar = true;
    this.HighlightEdges = "L,R";
    this.GetContent = function (el, id, store, refNode) {        
        if (el.attr("id") == "rtvRelatedHelper") {
            if (el.data("@Value") == "subquery" || el.data("@Value") == "expr") {
                store["Title"] = "New Column";
                store["ColumnType"] = el.data("@Value");
            }
            else {
                if (refNode.attr("control-type") == "Label" || refNode.attr("control-type") == "Button" || refNode.attr("control-type") == "Image") {
                    var ds = Erp.Designer.DataStore.GetData(refNode);
                    if (refNode.attr("control-type") == "Image")
                        ds.ImageUrl = "#=" + el.data("@FieldPath") + "#";
                    else {
                        ds.Label = "#=" + el.data("@FieldPath") + "#";
                        refNode.find("span").html(ds.Label);
                    }
                    return null;
                }
                store["Title"] = el.data("@Label");
                store["Datasource"] = $.QS("EID");
                store["DatasourceID"] = el.data("@FieldID");
                store["DataMember"] = el.data("@FieldName");
                store["EntityPath"] = el.data("@EntityPath");
                if( el.data("@WFCode"))
                    store["WFCode"] = el.data("@WFCode");
            }
        }
        else
            store["Title"] = "New Column";
        store["Prefix"] = id;
        store["Width"] = 75;
        return $("<div style='width:75px'><label class='hdr'>" + store["Title"] + "</label><label class='itm'></label><label class='itm'></label><label class='itm'></label><label class='ftr'></label></div>");
    }
    function getItems(property, data, store) {
        var arr = [];
        $("#" + store.Name).closest(".erp-Grid").children(".gridColumnGroup").children().each(function () { arr.push($(this).ID()); })
        return arr;
    }
}
Erp.Designer.GridColumn.prototype = Object.create(Erp.Designer.Control.prototype);
Erp.Designer.GridColumn.prototype.ValidDropZone = function (dragEl, refEl, refObj, elAtPoint) {
    if (refObj.Type == "Label" || refObj.Type == "Button" || refObj.Type == "Image") {
        return refEl.closest(".itm").length > 0;
            
    }
    return refObj.Type == "GridColumn" || elAtPoint.hasClass("col-ctr");
}
Erp.Designer.GridColumn.prototype.AppendControl = function (dragObj, field, refEl, elAtPoint) {
    if (refEl.hasClass("leftEdge")) {
        refEl.before(field);
    }
    else if (refEl.hasClass("rightEdge") ) {
        refEl.after(field);
    }
}
Erp.Designer.GridColumn.prototype.ControlLoaded = function (el,fromEditor) {
    el.resizable({
        handles: "e", stop: function (event, ui) {
            Erp.Designer.RefreshControl($(event.target).closest(".erp-Grid"));            
            var ds = Erp.Designer.DataStore.GetData($(event.target));
            ds["Width"] = $(event.target).outerWidth();
        }
    });
    var g = el.closest(".erp-Grid");
    if (fromEditor && g.hasClass("pc")) {
        var ds = Erp.Designer.DataStore.GetData(el);
        el.width("15%");
        ds.Width = "15%";
    }

    Erp.Designer.RefreshControl(g);    
}
Erp.Designer.GridColumn.prototype.LoadPropertyEditor = function (data, multi) {
    Erp.Controls.Control.LoadPropertyEditor.call(this, data, multi);
    $("#PropertyList").find(".prop-item[prop='Subquery']").setDisplay(data && data["ColumnType"] == "subquery")
}
Erp.Designer.GridColumn.prototype.Serialize = function (n) {
    var xml = [];
    var data = Erp.Designer.DataStore.GetData(n);
    xml.push("<Cols Type=\"" + $.encodeXml(data.ColumnType, true) + "\" Name=\"" + $.encodeXml(data.DatasourceID, true) + "\" _Name=\"" + $.encodeXml(data.Name, true) + "\" ");

    if (data && !$.isEmpty(data["Datasource"]) && !$.isEmpty(data["DatasourceID"]))
        xml.push(" _IsDatabound=\"1\" ");
    xml.push(Erp.Designer.Property.Serialize.call(this, data, this.PropertyList, null));
    xml.push(">");
    if (!$.isEmpty(data.TemplateType)) {
        xml.push("<ListItem>" + Erp.Designer._serializeItems(n.children(".itm").eq(0).children(".default-ctr").children()) + "</ListItem>");
    }
    xml.push("<Setting Prefix=\"" + $.encodeXml(data.Prefix,true) + "\" ></Setting>");
    xml.push(Erp.Designer.Property.Serialize.call(this, data, this.PropertyList, this.ChildProps));
    xml.push(this.SerializeContents(n));
    if (!$.isEmpty(data.Subquery))
        xml.push(data.Subquery);
    xml.push("</Cols>");
    return xml.join('');
}
Erp.Designer.GridColumn.prototype.AllowSiblings = function (dragObj, dragEl, refEl, elAtPoint) {
    return dragObj.Type == "GridColumn";
}
Erp.Designer.GridColumn.prototype.Refresh = function (el) {
}


Erp.Designer.Button.prototype.AllowDrop = function (dragObj, dragEl, refEl, elAtPoint) {
    if (dragEl.attr("id") == "rtvRelatedHelper")
        return true;
    return false;
}
Erp.Designer.Button.prototype.GetContainer = function (refEl, elAtPoint, dragEl) {
    if (dragEl.attr("id") == "rtvRelatedHelper")
        return refEl;
    return null;
}
Erp.Designer.Image.prototype.AllowDrop = function (dragObj, dragEl, refEl, elAtPoint) {
    if (dragEl.attr("id") == "rtvRelatedHelper")
        return true;
    return false;
}
Erp.Designer.Image.prototype.GetContainer = function (refEl, elAtPoint, dragEl) {
    if (dragEl.attr("id") == "rtvRelatedHelper")
        return refEl;
    return null;
}


Erp.Designer.GridColumnGroup = function () {
    Erp.Designer.Control.call(this);
    function onPropChange(ed, el, ev) {
        var ctl = Erp.Designer.GetSelectedControls();
        switch (ed.property) {
            case "Label1":
                {
                    ctl.each(function () { var c = $(this); c.children("ul").find("span").html(el.val()); })
                    break;
                }
            default: break
        }
    }
    this.PropertyList = [
        new Erp.Designer.Property({ name: "Type", readOnly: true, displayOnly: true }),
        new Erp.Designer.Property({ name: "Name", hidden: true }),
        new Erp.Designer.Property({ name: "HtmlID", label: "Html ID", hidden: true }),
        new Erp.Designer.Property({ canGroup: true, name: "ColumnName", label: "Display Name" }),
        new Erp.Designer.Property({ canGroup: true, name: "ColumnValue", label: "Column Name" }),
        new Erp.Designer.Property({ canGroup: true, name: "ParentColumn", label: "Parent Column", editor: new Erp.Designer.PropertyEditor.AutoComplete([], getItems) }),
        new Erp.Designer.Property({ canGroup: true, name: "Horizontal", label: "Horizontal Align", editor: new Erp.Designer.PropertyEditor.AutoComplete(["left", "right", "center"]) }),
        new Erp.Designer.Property({ canGroup: true, name: "Vertical", label: "Vertical Align", editor: new Erp.Designer.PropertyEditor.AutoComplete(["top", "middle", "bottom"]) }),
        new Erp.Designer.Property({ canGroup: true, name: "Css", label: "CssClass" })
    ];

    this.Type = "GridColumnGroup";
    this.DisplayName = "GridColumnGroup";
    this.SerializedType = "ColumnGroup";
    this.HideInToolbar = true;
    this.DisableDragging = true;
    this.IsContainer = false;
    this.IsGridBased = false;
    this.HighlightEdges = "T,B";
    this.GetContent = function (el, id, store) {
        store["ColumnName"] = "New Column Group";
        store["ColumnValue"] = id;
        return $("<div></div>");
    }
    function getItems(property, data, store) {      
        var arr = [];
        $("#" + store.Name).parent().children().each(function () { if ($(this).ID() == store.Name) return true; arr.push($(this).ID()); })
        return arr;
    }
}
Erp.Designer.GridColumnGroup.prototype = Object.create(Erp.Designer.Control.prototype);
Erp.Designer.GridColumnGroup.prototype.LoadPropertyEditor = function (data, multi,ctr) {
    Erp.Controls.Control.LoadPropertyEditor.call(this, data, multi,ctr);
}


Erp.Designer.GridGroup = function () {
    Erp.Designer.Control.call(this);
    function onPropChange(ed, el, ev) {
        var ctl = Erp.Designer.GetSelectedControls();
        switch (ed.property) {
            case "Label1":
                {
                    ctl.each(function () { var c = $(this); c.children("ul").find("span").html(el.val()); })
                    break;
                }
            default: break
        }
    }
    this.PropertyList = [
        new Erp.Designer.Property({ name: "Type", readOnly: true, displayOnly: true }),
        new Erp.Designer.Property({ name: "Name", hidden: true }),
        new Erp.Designer.Property({ name: "HtmlID", label: "Html ID", hidden: true }),
        new Erp.Designer.Property({ canGroup: true, name: "Field", label: "Field", editor: new Erp.Designer.PropertyEditor.BrowseMeta("Field",$.QS("EID"),true) }),
        new Erp.Designer.Property({ canGroup: true, name: "Sort", editor: new Erp.Designer.PropertyEditor.Select([{ label: "None", value: "" }, { label: "Asc", value: "Asc" }, { label: "Desc", value: "Desc" }]) }),
        new Erp.Designer.Property({ canGroup: true, name: "GroupHeader.", label: "Header Template", editor: new Erp.Designer.PropertyEditor.MultiLine() }),
        new Erp.Designer.Property({ canGroup: true, name: "GroupFooter.", label: "Footer Template", editor: new Erp.Designer.PropertyEditor.MultiLine() })
    ];
    this.ChildProps = ["GroupHeader", "GroupFooter","ElementStates"];
    this.Type = "GridGroup";
    this.DisplayName = "GridGroup";
    this.SerializedType = "Group";
    this.HideInToolbar = true;   
    this.IsContainer = false;
    this.IsGridBased = false;
    this.HighlightEdges = "T,B";
    this.GetContent = function (el, id, store) {
        return $("<div>" + id + "</div>");
    }
   
}
Erp.Designer.GridGroup.prototype = Object.create(Erp.Designer.Control.prototype);
Erp.Designer.GridGroup.prototype.ValidDropZone = function (dragEl, refEl, refObj, elAtPoint) {
    return refObj.Type == "GridGroup";
}
Erp.Designer.GridGroup.prototype.AllowSiblings = function (dragObj, dragEl, refEl, elAtPoint) {
    return dragObj.Type == "GridGroup";
}


Erp.Designer.ChildGrid = function () {
    Erp.Designer.Control.call(this);
    function onPropChange(ed, el, ev) {
        var ctl = Erp.Designer.GetSelectedControls();
        switch (ed.property) {
            case "Id": {
                ctl.each(function () {
                    var c = $(this);
                    var data = Erp.Designer.DataStore.GetData(c);
                    if (!Fn.IsEmpty(data.Id) && !Fn.Eq(data.Id, el)) {
                        if (!confirm('Grid structure will be reset. Do you wish to Continue?'))
                            return false;
                        else {
                            data.ViewID = "";
                            data.Filter = "";
                            $(this).find(".col-ctr").children(".erp-GridColumn").remove();
                        }
                    }                  
                })
                break;
            }
            case "AutoMapping":
                {
                    ctl.each(function () {
                        var c = $(this);
                        var data = Erp.Designer.DataStore.GetData(c);
                        data.ApplyFilter = (el.checked() ? 0 : 1);                      
                        $("#PropertyList").find(".prop-item[prop=Filter]").setDisplay(!el.checked());
                    })
                    break;
                }
            default: break
        }
    }
    this.RemoveCategory("Events");
    this.PropertyList.splice(4, 0,
        new Erp.Designer.Property({ canGroup: true, name: "ChildGrid", hidden: true }),
        new Erp.Designer.Property({ canGroup: true, name: "HtmlId" }),

        new Erp.Designer.Property({ canGroup: true, category: "View", name: "Id", label: "Select Entity", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.BrowseMeta("Entity") }),
        new Erp.Designer.Property({ canGroup: true, category: "View", name: "ViewID", label: "Select View", editor: new Erp.Designer.PropertyEditor.ViewList() }),
        new Erp.Designer.Property({ canGroup: true, category: "View", name: "AutoMapping", label: "Auto Map Fields", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Check() }),
        new Erp.Designer.Property({ canGroup: true, category: "View", name: "ApplyFilter", hidden: true, label: "Map Fields", editor: new Erp.Designer.PropertyEditor.Check() }),
        new Erp.Designer.Property({ canGroup: true, category: "View", name: "Filter", displayOnly: true, label: "Filter Records", noEncode: true, editor: new Erp.Designer.PropertyEditor.Filter() }),//xml

         new Erp.Designer.Property({ canGroup: true, name: "OnRowClick", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnRowDblClick", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnRowSelected", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnRowAdding", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnRowAdded", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnRowDataBound", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnRowDeleting", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnRowDeleted", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnRowEditing", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnRowValidating", category: "Events" }),


         new Erp.Designer.Property({ canGroup: true, name: "OnCellEditing", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnCellChanged", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnCellValidating", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnCellSaving", category: "Events" }),

         new Erp.Designer.Property({ canGroup: true, name: "OnRecordSaving", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnGridSaving", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnSaveComplete", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnGridBinding", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnGridDataBound", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnGridExporting", category: "Events" }),
          new Erp.Designer.Property({ canGroup: true, name: "OnGridAdvancedFilter", category: "Events" }),
         new Erp.Designer.Property({ canGroup: true, name: "OnGridButtonClick", category: "Events" })

    );
    this.HideInToolbar = true;
    this.Type = "ChildGrid";
    this.DisplayName = "Grid";
    this.SerializedType = "Grid";
    this.IsContainer = true;
    this.IsGridBased = false;
    this.RemoveProperty("Small,Medium,Large");
    this.HighlightEdges = "T,B";
    this.GetContent = function (el, id, store) {
        store["ChildGrid"] = 1;
        store["AutoMapping"] = 1;
        if (!$.isEmpty(el.attr("fid")) && !Fn.Eq(el.attr("fid"), "Grid"))
            store["Id"] = el.attr("fid");
        return $('<div style="min-height:100px;"><div class="gridBody"><div class="col-ctr"></div></div></div>');
    }


}
Erp.Designer.ChildGrid.prototype = Object.create(Erp.Designer.Control.prototype);
Erp.Designer.ChildGrid.prototype.ControlLoaded = function (el) {
    el.find(".col-ctr").sortable();
    el.children(".gridBody").children(".col-ctr").children(".px").resizable({
        handles: "e", stop: function (event, ui) {
        }
    });
}
Erp.Designer.ChildGrid.prototype.SerializeContents = function (n) {
    var xml = [];
    var ds = Erp.Designer.DataStore.GetData(n);

    xml.push("<ColInfo>");
    n.children(".gridBody").children(".col-ctr").children(".erp-GridColumn").each(function () {
        var c = $(this);
        xml.push("<Cols Name=\"" + c.attr("colid") + "\" EntityPath=\"" + c.attr("entitypath") + "\" Hidden=\"" + (c.hasClass("hidden") ? 1 : 0) + "\" Width=\"" + c.getStyle("width") + "\" />");
    });
    xml.push("</ColInfo>");
    xml.push($.defaultVal(ds.Filter, ""));
    return xml.join('');
}
Erp.Designer.ChildGrid.prototype.LoadPropertyEditor = function (data, multi) {
    Erp.Controls.Control.LoadPropertyEditor.call(this, data, multi);
    $("#PropertyList").find(".prop-item[prop=Filter]").setDisplay(!Fn.CBool(data["AutoMapping"]));
}



Erp.Designer.ButtonPanel = function () {
    Erp.Designer.InlinePanel.call(this);
    function onPropChange(ed, el, ev) {
        var ctl = Erp.Designer.GetSelectedControls();
        switch (ed.property) {
            case "ShowAdd":
            case "ShowEdit":
            case "ShowView":
            case "ShowDelete":
            case "ShowSaveGrid":
            case "ShowClose":
            case "ShowOnDemand":
            case "ShowApproval":
                {
                    var btnId = ed.property.split('Show')[1];
                    var inf = {};
                    if (ed.property == "ShowAdd") {
                        inf.Id = "ADD"; inf.Tooltip = "Add";inf.Title = ($.isEmpty(Erp.Designer.EntityTitle)?"":("Add "+Erp.Designer.EntityTitle)); inf.Icon = "&#xf067;";
                        inf.Action = '{"Action":"ADDFORM","Entity":"' + $.QS("EID") + '","Responsive":1}';
                    }
                    else if (ed.property == "ShowEdit") {
                        inf.Id = "EDIT"; inf.Tooltip = "Edit";inf.Title = "";  inf.Icon = "&#xf040;";
                        inf.Action = '{"Action":"EDITFORM","Entity":"' + $.QS("EID") + '","Responsive":1}';
                    }
                    else if (ed.property == "ShowView") {
                        inf.Id = "VIEW"; inf.Tooltip = "View";inf.Title = "";  inf.Icon = "&#xf0f6;";
                        inf.Action = '{"Action":"READFORM","Entity":"' + $.QS("EID") + '","Responsive":1}';
                    }
                    else if (ed.property == "ShowDelete") {
                        inf.Id = "DELETE"; inf.Tooltip = "Delete"; inf.Title = ""; inf.Icon = "&#xf014;";
                        inf.Action = '{"Action":"DELETE","Entity":"' + $.QS("EID") + '"}';
                    }
                    else if (ed.property == "ShowSaveGrid") {
                        inf.Id = "GRIDSAVE"; inf.Tooltip = "Save";inf.Title = "";  inf.Icon = "&#xf0c7;";
                    }
                    else if (ed.property == "ShowClose") {
                        inf.Id = "CLOSE"; inf.Tooltip = "Close";inf.Title = "";  inf.Icon = "&#xf00d;";
                        inf.Action = '{"Action":"CLOSE"}';
                    }
                    else if (ed.property == "ShowOnDemand") {
                        inf.Id = "WF"; inf.Tooltip = "Run Workflows"; inf.Title = ""; inf.Icon = "&#xf0ad;";
                    }
                    else if (ed.property == "ShowApproval") {
                        inf.Id = "APPROVAL"; inf.Tooltip = "Take Action"; inf.Title = "Take Action"; inf.Icon = "&#xf046;";
                        inf.Action = '{"Action":"WFAPPROVAL","Entity":"' + $.QS("EID") + '","Responsive":1}';
                    }
                    var sp = $("<span></span>");
                    sp.html(inf.Icon);                    
                    ctl.each(function () {
                        var pnl = $(this).children(".ctr");
                        var btn = null;                        
                        pnl.find(".erp-Button").each(function () { var s = Erp.Designer.DataStore.GetData($(this)); if (Fn.Eq(s.DatasourceID, inf.Id)) { btn = $(this); return false; } });
                        if (el.checked()) {
                            if (!btn) {
                                btn = Erp.Designer.AppendControl($("<div control-type='Button'></div>"), pnl.addClass("allEdge"), null);
                                btn.find("span").html(inf.Title); btn.find("i").html(inf.Icon);
                                btn.addClass(($.isEmpty(inf.Title)?"icoBtn ":"")+ " round large")
                                var s = Erp.Designer.DataStore.GetData(btn);
                                s.DatasourceID = inf.Id;
                                s["Label"] = { initial: inf.Title,override:true,final: inf.Title};
                                s["Tooltip"] = { initial: inf.Tooltip,override:true,final:inf.Tooltip };
                                s["Icon"] = sp.text();
                                s["Rounded"] = true;
                                s["ButtonSize"] = "large";
                                s.Action = inf.Action;
                            }
                        } else {
                            if (btn)
                                Erp.Designer.DeleteFields(btn,$(''));
                        }
                        pnl.removeClass("allEdge");
                    })
                    break;
                }
          
            default: break
        }
    }
    this.PropertyList.splice(4, 0,
        new Erp.Designer.Property({ canGroup: true, name: "ShowAdd", label: "Show Add Button", category: "Configuration", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Check() }),
        new Erp.Designer.Property({ canGroup: true, name: "ShowEdit", label: "Show Edit Button", category: "Configuration", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Check() }),
        new Erp.Designer.Property({ canGroup: true, name: "ShowView", label: "Show View Button", category: "Configuration", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Check() }),
        new Erp.Designer.Property({ canGroup: true, name: "ShowDelete", label: "Show Delete Button", category: "Configuration", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Check() }),        
        new Erp.Designer.Property({ canGroup: true, name: "ShowSaveGrid", label: "Show Save Button", category: "Configuration", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Check() }),
        new Erp.Designer.Property({ canGroup: true, name: "ShowOnDemand", label: "Show On Demand WF Button", category: "Configuration", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Check() }),
        new Erp.Designer.Property({ canGroup: true, name: "ShowApproval", label: "Show Approval Button", category: "Configuration", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Check() }),
        new Erp.Designer.Property({ canGroup: true, name: "ShowClose", label: "Show Close Button", category: "Configuration", onChange: onPropChange, editor: new Erp.Designer.PropertyEditor.Check() }),

    );
    this.Type = "ButtonPanel";
    this.DisplayName = "ButtonPanel";
    this.IsContainer = true;
    this.HideInToolbar = true;
    this.DisableDragging = true;
    this.IsGridBased = false;
    this.HighlightEdges = "";
    this.RemoveProperty("Small,Medium,Large,Icon,HorizontalAlign");
    this.GetContent = function (el, id, store) {
        return $('<div><div class="inline ctr"></div></div>');
    }
}
Erp.Designer.ButtonPanel.prototype = Object.create(Erp.Designer.InlinePanel.prototype);
Erp.Designer.ButtonPanel.prototype.AllowDrag = function (el) {
    return false;
}
Erp.Designer.ButtonPanel.prototype.Refresh = function (el) {
    return false;
}
Erp.Designer.ButtonPanel.prototype.AllowSiblings = function (dragObj, dragEl, refEl, elAtPoint) {
    return false;
}
Erp.Designer.GetSelectedControls = function () {
    return $("#editor-container").hasClass("selected") ? $("#editor-container") : $("#editor-content").find(".ctl-selected");
}
Erp.Designer.LoadPropertylist = function (refctl,list) {
    var c = list ? list : $("#editor-content").find(".ctl-selected");
    if (c.length == 0) {
        Erp.Designer.ClearPropertylist();
        return;
    }
    var type = "", sameType = true;;
    c.each(function (i) {
        if (i == 0) type = $(this).attr("control-type");
        else if (type != $(this).attr("control-type")) { sameType = false; return false; }
    });
    if (!sameType)
        type = "Control";
    Erp.Controls[type].LoadPropertyEditor(Erp.Designer.DataStore.GetData(refctl ? refctl : c.eq(0)), c.length > 1);
}
Erp.Designer.ClearPropertylist = function (propList) {
    if (propList) {
        propList.empty();
        return;
    }
    $("#PropertyList").children("select").prop("selectedIndex", -1)
    $("#PropertyList").children("._inner").empty();
}
Erp.Designer.DeleteFields = function (items,propList) {
    items = (items ? items : Erp.Designer.GetSelectedControls());
    items = items.not(".erp-Header,.erp-Main,.erp-Footer,.fixed-action-btn,.fixed-action-bar,#editor-container,.erp-ButtonPanel");
    var ids = [];
    items.find(".erp-control").each(function () {
        if ($(this).ID() == "editor-container" || $(this).attr("control-type") == "Header" || $(this).attr("control-type") == "Footer" || $(this).attr("control-type") == "Main" || $(this).attr("control-type") == "LeftPane" || $(this).attr("control-type") == "RightPane")
            return true;
        ids.push($(this).ID());
        Erp.Designer.DataStore.RemoveData($(this));
    });
    items.each(function () {
        if ($(this).ID() == "editor-container" || $(this).attr("control-type") == "Header" || $(this).attr("control-type") == "Footer" || $(this).attr("control-type") == "Main")
            return true;
        ids.push($(this).ID());
        Erp.Designer.DataStore.RemoveData($(this));
    });
   
    items.remove();
    Erp.Designer.ClearPropertylist(propList);
    Erp.Designer.Update('Deleted',ids);
}


Erp.Designer.DataStore = {};
Erp.Designer.DataStore.GetData = function (id) {
    if (!id)
        return null;
    if (id instanceof $)
        id = id.attr("id");
    return Erp.Designer.DataStore[id];
}
Erp.Designer.DataStore.GetDataByName = function (id) {
    if (!id)
        return null;
    for (var p in Erp.Designer.DataStore) {
        if (Erp.Designer.DataStore[p].HtmlID == id)
            return Erp.Designer.DataStore[p]
    }
    return null;
}
Erp.Designer.DataStore.SetData = function (ctl,property,value) {
    if (!ctl)
        return null;
    if (!(ctl instanceof $))
        ctl = $("#" + ctl);
    ctl.each(function () {
        var cls = Erp.Designer.getControlObject($(this));       
        if (!cls || cls.GetProperty(property) == null)
            return true;
        if (!cls.IsGridBased && cls.Type !="Fab" && (property == "Small" || property == "Medium" || property == "Large" || property == "XLarge"))
            return true;
        var data = Erp.Designer.DataStore[$(this).attr("id")];
        if (!data)
            return true;
        var prev = data[property];
        if (prev != null && typeof prev != "undefined" && prev.hasOwnProperty("initial")) {
            if (typeof value == "object") {
                data[property] = $.extend(prev, value);
            }
            else if (prev.override)
                prev.final = value;
        }
        else
            data[property] = value;
    });
}

Erp.Designer.DataStore.RemoveData = function (id) {
    if (!id)
        return null;
    if (id instanceof $)
        id = id.attr("id");
    delete Erp.Designer.DataStore[id];
}


Erp.Designer.ControlsList = ["FormLayout", "Control", "DefaultCtr", "Header", "Footer", "Main","LeftPane","RightPane", "Field","Repeater", "Panel", "InlinePanel", "ButtonPanel", "TabPanel", "CollapsiblePanel",
    "HTML", "Menu", "MenuItem", "Table", "UDF", "Window", "PDF", "Document", "Spread", "Text", "Number", "Select", "Date", "Checkbox", "Radiobutton",
    "Label", "Spacer", "Line", "Image", "FileUpload", "Button", "Fab","SplitButton", "Grid", "ChildGrid", "GridColumn", "GridColumnGroup", "GridGroup"
];

Erp.Designer.InitEditor = function () {
    $("#FooterPanel").before($("#Fab-Main").parent().hasClass("row ctr")?$("#Fab-Main").parent():$("#Fab-Main"));
    $('#Fab-Main').floatingActionButton();
    for (var i = 0; i < Erp.Designer.ControlsList.length; i++)
        Erp.Controls[Erp.Designer.ControlsList[i]] = new Erp.Designer[Erp.Designer.ControlsList[i]]();

    Erp.Designer.Toolbox.loadControls();
    $("#editor-container").on("click", function (e) {
        if (window._documentSelecting) {
            _documentSelecting = false;
           return;
        } 
        
        $("#editor-content").focus();
        Erp.Designer.DeselectAll();        
        Erp.Controls.FormLayout.LoadPropertyEditor(Erp.Designer.DataStore.GetData($(this)), false);
        $(this).addClass("selected");
        $("#PropertyList").children("select").val($(this).ID())
        //var p = $find("rspProps");
        //if (p.get_expanded() && !p.get_docked())
        //    $find("Radslidingzone2").CollapsePane("rspProps");
    });
    $("#editor-content").on("click", function (e) {      
        e.stopPropagation();
        $("#editor-content").focus();
        if (window._documentSelecting) {
            _documentSelecting = false;
            return;
        }
        Erp.Designer.DeselectAll();
    });
    $("#editor-content").on("keydown", function (e) {
        //console.log(e);
        if (e.keyCode == 115) {
            var c = $("#editor-content").find(".ctl-selected");
            if (c.length == 0)
                return;
            var p = $find("rspProps");
            if (!p.get_expanded() && !p.get_docked())
                $find("Radslidingzone2").ExpandPane("rspProps");
            else if (p.get_expanded() && !p.get_docked())
                $find("Radslidingzone2").CollapsePane("rspProps");
            Erp.Designer.LoadPropertylist(null, c);
        }
        else if (e.keyCode == 46) {
            var items = Erp.Designer.GetSelectedControls();
            if (items.length>0 && confirm('Delete selected controls?'))
                Erp.Designer.DeleteFields(items);
        }
    })
    $("#editor-content").on("click", ".erp-control", function (e) {
        e.stopPropagation();
        $("#editor-content").focus();
        if (window._documentSelecting) {
            _documentSelecting = false;
            return;
        }
        $("#editor-container").removeClass("selected");
        if (!e.ctrlKey) {
            Erp.Designer.DeselectAll();
        }
        var c = $(this);
        if (!c.hasClass("erp-control"))
            c = c.closest("erp-control");
        $(e.target).focus();
        if (e.ctrlKey)
            $("#editor-container").removeClass("selected");
        if (e.ctrlKey && c.hasClass("ctl-selected")) {
            c.removeClass("ctl-selected");
            Erp.Designer.LoadPropertylist();
            $("#PropertyList").children("select").prop("selectedIndex", -1)
            return;
        }
        c.addClass("ctl-selected");
        c.closest(".row").addClass("selected");
        $("#PropertyList").children("select").val(c.attr("id"))
        Erp.Designer.LoadPropertylist(c);
    });
    $("#editor-content").on("dblclick", ".erp-control", function (e) {
        e.stopPropagation();
        var c = $(this);
        if (!c.hasClass("erp-control"))
            c = c.closest("erp-control");
        $(e.target).focus();        
        var data = Erp.Designer.DataStore.GetData(c);
        var ctlObj = Erp.Designer.getControlObject(c);
        if (ctlObj.GetProperty("OnClick") == null && ctlObj.GetProperty("OnChange") == null)
            return;
        var isChange = Erp.Designer.Utils.IsInputField(data.Type);
        $("#toolbar").find(".script").trigger("click");
        c.addClass("hasEvent")
        var evt = (isChange ? "Change" : "Click");
        var fn = (data["On" + evt] ? data["On" + evt] : (data.HtmlID.Replace("-", "_") + "_" + evt));
        if (!data["On" + evt]) {
            data["On" + evt] = fn;
            Erp.Designer.LoadPropertylist(c);
        }
        fn="function " +fn+"("
        $("#ifrExprEditor")[0].contentWindow.createOrHighlight(fn, "\n" + fn + "elem" + (evt == "Change" ? ",data,field" : (data.Type == "Menu" ? ",args,menuItem" : "")) + "){\n}\n");
    });
    $("#header-show-side-nav").on("click", function (e) {
        e.stopPropagation();
        Erp.Designer.__SidePanel = true;
        $("#header-side-nav").show().height($("#editor-content").innerHeight());
        $("#header-side-nav-overlay").show().height($("#editor-content").innerHeight());
        $("#editor-content").scrollTop(0).css("overflow", "hidden");
    });
    $("#header-side-nav-overlay").on("click", function (e) {
        e.stopPropagation();
        Erp.Designer.__SidePanel = false;
        $("#header-side-nav").hide(); $("#header-side-nav-overlay").hide();
        $("#editor-content").css("overflow", "");
    });
    
    
    $("#fieldList,#specialControls").on("mousedown", ".control-item", function (e) {
        Erp.Designer.Toolbox.highlight($(this));
    });

    $("#PropertyList").children("select").on("change", function () {
        Erp.Designer.HighlightFields($("#"+$(this).val()));
    })

    $("#editor-container").selectable({       
        filter: ".erp-control",
        cancel: "a,input,label",
        selected: function (event, ui) {
            //if (($(event.srcElement).hasClass("ctr") && $.contains(ui.selected, event.srcElement)) )
            //    return;
            //$(ui.selected).addClass("ctl-selected");
        },
        unselected: function (event, ui) { $(ui.unselected).removeClass("ctl-selected"); },
        selecting: function (event, ui) {
            if (_currentSelecting && $.contains(ui.selecting, _currentSelecting))
                return;
            if (Erp.Designer.__SidePanel) {
                var eee = 0;
            }
            if (Erp.Designer.__SidePanel && !$.contains($("#header-side-nav")[0], ui.selecting))
                return;
            $(ui.selecting).addClass("ctl-selected");
            $("#editor-content").children().removeClass("ctl-selected");
        },
        unselecting: function (event, ui) { $(ui.unselecting).removeClass("ctl-selected"); },
        start: function (e) { _documentSelecting = true; _currentSelecting = e.srcElement; $("#editor-container").removeClass("selected"); },
        stop: function (e) {
            $("#editor-content").focus();
            Erp.Designer.LoadPropertylist();
            _currentSelecting = null;
            window.setTimeout(function () { _documentSelecting = false; }, 50);
        },
        delay: 50
    });
    Erp.Designer.DragDrop.makeDraggable($(".erp-control").not("header,footer,main,#Fab-Main"), true);

    Erp.Designer.LoadControlData();
    Erp.Designer.initScriptEditors();
    Erp.Designer.Update('Loaded');

    $("#editor-container").trigger("click");
    //$('select').material_select();
}
Erp.Designer.Toolbox.loadControls = function () {
    var item;
    for (var i = 0; i < Erp.Designer.FieldList.length; i++) {
        var f = Erp.Designer.FieldList[i];
        item = $("<div fid=" + f["ID"] + " control-type='Field' class='control-item ctl-field'>" + f["DisplayName"] + "</div>");
        $("#fieldList").append(item);
    }
    for (var i = 0; i < Erp.Designer.ButtonList.length; i++) {
        var f = Erp.Designer.ButtonList[i];
        item = $("<div control-type='Button' fid=" + f["ID"] + " class='control-item ctl-btn'>" + f["DisplayName"] + "</div>");
        $("#btnList").append(item);
    }
    for (var i = 0; i < Erp.Designer.GridList.length; i++) {
        var f = Erp.Designer.GridList[i];
        item = $("<div fid=" + f["ID"] + " control-type='ChildGrid'  class='control-item ctl-grid'>" + f["DisplayName"] + "</div>");
        $("#gridList").append(item);
    }
    for (var i = 0; i < Erp.Designer.ControlsList.length; i++) {
        var f = Erp.Controls[Erp.Designer.ControlsList[i]];
        if (f.Type == "Control" || f.Type == "Field" || f.HideInToolbar)
            continue;
        var cls = "control-item special " + f.Type + " ";
        item = $("<div control-type='" + f.Type + "' class='" + cls + "' title='" + f.DisplayName + "'><span></span><label>" + f.DisplayName + "</label></div>");
        if (f.IsFormField)
            $("#formCtlList").append(item);      
        else  if (f.Type=="SplitButton")
            $("#btnList").children().eq(0).after(item);      
        else
            $("#specialCtlList").append(item);
    }
    Erp.Designer.DragDrop.makeDraggable($(".control-item"), false);
    $("#fieldList").on("click", ".control-item", function () {
        if (!$(this).hasClass("used"))
            return;
        Erp.Designer.HighlightFields($(this).attr("fid"));
    })
}
Erp.Designer.Toolbox.highlight = function (f) {
    f.parent().children().removeClass("selected"); f.addClass("selected");
}

var oldMouseStart = $.ui.draggable.prototype._mouseDown;
$.ui.draggable.prototype._mouseDown = function (event, overrideHandle, noActivation) {
    var a=this._trigger("beforeStart", event, this._uiHash());
    if (a === false)
        return true;
    oldMouseStart.apply(this, [event, overrideHandle, noActivation]);
};

Erp.Designer.DragDrop.makeDraggable = function (item, fromPage) {    
    if (IsDependent)
        return;
    item.draggable({
        beforeStart: function (e,ui) {
            if ($(e.srcElement).hasClass("ctr"))
                return false;
            var el = $(e.srcElement).closest(".erp-control");
            if (el.length > 0) {
                var refObj = Erp.Designer.getControlObject(el);
                if (!refObj.AllowDrag(el))
                    return false;
            }
        },
        helper: "clone",
        opacity: 0.75,
        appendTo: (fromPage ? "parent" : '#ctlDragContainer'),
        cancel: function (event, ui) { return true;},
        cursorAt: { top: -10, left: -10 },        
        zIndex: 10000,
        start: function (event, ui) {           
            ui.helper.zIndex(10000);
            ui.helper.css("transform", "");
            if ($(event.target).hasClass("erp-control")) {
                $(event.target).css("opacity", "0").show();
            }
            if ($(event.srcElement).hasClass("ctr"))
                $(this).draggable("option", "revert", true);
        },
        drag: function (event, ui) {
            if ($(event.srcElement).hasClass("ctr"))
                $(this).draggable("option", "revert", true);
            Erp.Designer.DragDrop.findValidDropZone(event, ui);
            $(this).draggable("option", "revert", !Erp.Designer.DragDrop.validDrop);
        },
        stop: Erp.Designer.DragDrop.dragStop,
        delay:150
    });

}

Erp.Designer.DragDrop.findValidDropZone = function (e, ui) {
    Erp.Designer.DragDrop.validDrop = false;

    var ptEl = $($.elementFromPoint(e.clientX, e.clientY));
    if (!ptEl.exists())
        return;
   //note if desired element not highlighting do pointer-event none for any overlapping elem
    var refNode = (ptEl.hasClass("row") || ptEl.hasClass("default-ctr") || ptEl.prop("tagName") == "MAIN" || ptEl.hasClass("erp-control") ? ptEl : ptEl.closest(".erp-control"));
    //if (ptEl.hasClass("default-ctr"))
    //    debugger;
    if (refNode.length == 0 || refNode.css("opacity") == "0") {
        Erp.Designer.DragDrop.resetHighlight();
        return;
    }
    var dragNode = $(e.target);
    Erp.Designer.DragDrop.validDrop = true;
    Erp.Designer.DragDrop.resetHighlight();
  
    var ctlObj = Erp.Designer.getControlObject(dragNode);
    var refObj = Erp.Designer.getControlObject(refNode);

   
    if (ctlObj.IsContainer && $.contains(e.target, e.srcElement))
        return;
    if (!ctlObj.ValidDropZone(dragNode, refNode, refObj, ptEl))
        return;
    Erp.Designer._currentHighlightedNode = refNode;  
   
    if (refNode.hasClass("row")) {
        if (refNode.children().length == 0) {
            //refNode.addClass("highlight allEdge");          
        }
        else if (ui.helper[0] != refNode.children().last().get(0)) {
            refNode = refNode.children().last();
            refNode.addClass("highlight rightEdge");
            Erp.Designer._currentHighlightedNode = refNode;
        }
    }
    else if (refObj.AllowDrop(ctlObj, dragNode, refNode, ptEl)) {       
        Erp.Designer._currentHighlightedNode = refObj.GetContainer(refNode, ptEl, dragNode);
        Erp.Designer._currentHighlightedNode.addClass("highlight allEdge");
    }       
    else if (refObj.AllowSiblings(ctlObj, dragNode, refNode, ptEl))
        Erp.Designer.DragDrop.highlightEdge(refNode, dragNode, ctlObj, refObj, e.pageX, e.pageY);
   
}


Erp.Designer.DragDrop.dragStop = function dragStop(event, ui) {

    var el = $(event.target);
    if (!Erp.Designer.DragDrop.validDrop || !Erp.Designer._currentHighlightedNode) {
        Erp.Designer.DragDrop.resetHighlight();
        el.css("opacity", "").show();
        return
    }   
    var refNode=Erp.Designer._currentHighlightedNode;
    refNode = (refNode.hasClass("row") || refNode.hasClass("default-ctr") || refNode.prop("tagName") == "MAIN" || refNode.hasClass("erp-control") ? refNode : refNode.closest(".erp-control"));
    Erp.Designer.AppendControl(el, refNode, event);
    ui.helper.remove();
    Erp.Designer.DragDrop.resetHighlight();
    Erp.Designer._currentHighlightedNode = null;   
}
Erp.Designer.AppendControl = function (el, refNode, event) {
    var ctlObj = Erp.Designer.getControlObject(el);
    var refObj = Erp.Designer.getControlObject(refNode);
    var field = el.css("opacity", "").show();
    var wrapr;
    var reason = "Added";
    var fe = false;
    if (!el.hasClass("erp-control")) {
        fe = true;
        field = ctlObj.RenderControl(el, refNode);
        if (field == null)
            return null;
        if (!ctlObj.DisableDragging)
            Erp.Designer.DragDrop.makeDraggable(field, true);
    }
    else {
        wrapr = field.closest(".row ");
        reason = "Moved";
    }
    var ptEl = event ? $($.elementFromPoint(event.clientX, event.clientY)) : refNode;
    refObj.AppendControl(ctlObj, field, refNode, ptEl);
    
    if (wrapr)
        Erp.Designer.removeEmptyRow(wrapr);

    ctlObj.ControlLoaded(field,fe);
    ctlObj.Refresh(field);
    Erp.Designer.Update(reason, (reason == "Added" ? field : null));
    return field;
    //Materialize.updateTextFields()
}
Erp.Designer.Update = function (reason,ids,newId) {
    $("#fieldList").children().removeClass("used");
    var list = $("#editor-content").find(".erp-control");
    list.each(function () {        
        var n = $(this);
        if ($.isEmpty(n.attr("id")))
            return true;
        var data = Erp.Designer.DataStore.GetData(n);       
        if (data && !$.isEmpty(data["Datasource"]) && !$.isEmpty(data["DatasourceID"])) {
            $("#fieldList").children("[fid='" + data["DatasourceID"] + "']").addClass("used");
        }
        Erp.Designer.RefreshControl($(this))
    });
    Erp.Designer.CreateControlList(list, reason, ids, newId);
}
Erp.Designer.RefreshControl = function (el) {
    el = (typeof el == "string" ? $("#" + el) : el);
    var obj = Erp.Designer.getControlObject(el);
    if (obj)
        obj.Refresh(el);
}
Erp.Designer.CreateControlList = function (list, reason, ids, newId) {
    var ddl = $("#PropertyList").children("select");
    if (reason != "Loaded1") {//check disabled atm
        if (!list) list = $("#editor-content").find(".erp-control");
        var arr = [];
        list.each(function () {
            var n = $(this);
            var data = Erp.Designer.DataStore.GetData(n);
            if (!data)
                return true;
            var s = "";
            if ($(this).hasClass("erp-Header"))
                s = "0001";
            else if ($(this).hasClass("erp-Main"))
                s = "0002";
            else if ($(this).hasClass("erp-Footer"))
                s = "0003";
            else
                s = (reason == "Modified" && data.Name == ids.ID() ? newId : data.HtmlID)
            arr.push({ name: data.Name, id: (reason == "Modified" && data.Name == ids.ID() ? newId : data.HtmlID), type: data.Type, sort: s });
        });
        arr = arr.sort(function (a, b) {
            var aName = a.sort.toLowerCase();
            var bName = b.sort.toLowerCase();
            return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
        });
        var arr2 = ["<option value='editor-container'>FormLayout</option>"];
        $(arr).each(function () {
            var c = Erp.Designer.getControlObject(this.type);
            arr2.push("<option value='" + this.name + "'>" + this.id + " &nbsp;&nbsp;-&nbsp;&nbsp; " + $.defaultVal(c.DisplayName, c.type) + "</option>")
        });
        ddl.html(arr2.join("")).prop("selectedIndex", -1);
        if (reason == "Modified")
            ddl.val(ids.ID());
    }
    else {
        if (ids instanceof $) {
            var ds = Erp.Designer.DataStore.GetData(ids.ID());
            if (reason == "Added") {
                ddl.append("<option value='" + ds.Name + "'>" + ds.HtmlID + " &nbsp;&nbsp;-&nbsp;&nbsp; " + ds.Type + "</option>");
                //ddl.val(ds.Name)
            }
            else {
                var item = ddl.find("[value='" + ds.Name + "']");
                item.html(newId + " &nbsp;&nbsp;-&nbsp;&nbsp; " + ds.Type);
            }
        }
        else if ($.isArray(ids)) {
            for (var i = 0; i < ids.length; i++) {
                ddl.find("[value='" + ids[i] + "']").remove();
            }
            ddl.prop("selectedIndex", -1);
        }
    }
}
Erp.Designer.HighlightFields = function (fid) {
    Erp.Designer.DeselectAll();
    $("#editor-content").focus();
    var ds = Erp.Designer.DataStore;
    arr = $();
    if (fid instanceof $) 
        arr = fid.ID() == "editor-container" ? fid.addClass("selected") : fid.addClass("ctl-selected");
    else {
        for (p in ds) {
            var dsid = ds[p]["DatasourceID"]
            if (dsid == fid) {
                arr = arr.add($("#" + ds[p]["Name"]).addClass("ctl-selected"));
            }
        }
    }
    if (arr.length == 1)
        $("#PropertyList").children("select").val(arr.attr("id"));
    else
        $("#PropertyList").children("select").prop("selectedIndex", -1)
    Erp.Designer.LoadPropertylist(null, arr);
    if (arr.eq(0)[0] && typeof arr.eq(0)[0].scrollIntoView == "function")
        arr.eq(0)[0].scrollIntoView();
}
Erp.Designer.DeselectAll = function (f) {
    $("#editor-content").find(".erp-control").removeClass("ctl-selected");
    $("#editor-content").find(".row").removeClass("selected");
    Erp.Designer.ClearPropertylist();
}
Erp.Designer.removeEmptyRow = function (row) {
    if (row.hasClass("row")) {
        if (row.children().length <= 0)
            row.remove();       
    }
}

Erp.Designer.DragDrop.highlightEdge = function (refNode, dragNode, ctlObj, refObj, x, y) {
    var edgeCss = ["topEdge", "rightEdge", "bottomEdge", "leftEdge"];
    var pos = refNode.getOffset();
    var hEdg = refObj.HighlightEdges;
    if (ctlObj.Type == "GroupingPanel" && refObj.Type != "GroupingPanel") {
        hEdg = "T,B";
    }
    if ($.isEmpty(hEdg)) {
        Erp.Designer.DragDrop.validDrop = false;
        return;
    }
    var t = (hEdg.indexOf("T") > -1 ? y - pos.top : 9999999);
    var r = (hEdg.indexOf("R") > -1 ? pos.right - x : 9999999);
    var d = (hEdg.indexOf("B") > -1 ? pos.bottom - y : 9999999);
    var l = (hEdg.indexOf("L") > -1 ? x - pos.left : 9999999);
    var arr = [t, r, d, l];
    var min = $.inArray(Math.min.apply(window, arr), arr);
    refNode.addClass("highlight " + edgeCss[min]);

}
Erp.Designer.DragDrop.resetHighlight = function () {
    var edgeCss = ["topEdge", "rightEdge", "bottomEdge", "leftEdge"];
    if (Erp.Designer._currentHighlightedNode)
        Erp.Designer._currentHighlightedNode.removeClass("highlight allEdge " + edgeCss.join(' '));
}

Erp.Designer.Utils.Filter = function (list,prop, name) {
    var result = $(list).filter(function () {
        return $.defaultVal(this[prop], "").toUpperCase() == name.toUpperCase();
    });
    return (result && result.length > 0 ? result[0] : null);
}
Erp.Designer.Utils.IsInputField= function (type){
    return type == "Text" || type == "Number" || type == "Select" || type == "Date" || type == "Checkbox" || type == "Radiobutton" || type == "FileUpload";
}

Erp.Designer.getControlObject = function (el) {
    if (typeof el == "string")
        return Erp.Controls[el];
    return (el.attr("control-type") ? Erp.Controls[el.attr("control-type")].GetObject(el) : Erp.Controls["DefaultCtr"]);
}
Erp.Designer.getOverrideData = function (data) {
    if (!data)
        return "";
    if (data.hasOwnProperty("initial")) {
        if (data.override)
            return data.final;
        else
            return data.initial;
    }
    return data;
}

Erp.Designer.Serialize = function () {
    var xml = [];
    var ds = Erp.Designer.DataStore.GetData($("#editor-container"));   
    xml.push("<Layout Version=\"Mobile\" FullScreen=\"" + $.defaultVal(ds.FullScreen, 0) + "\" ShowHeader=\"" + $.defaultVal(ds.ShowHeader, 0) + "\" ShowFooter=\"" + $.defaultVal(ds.ShowFooter, 0) + 
        "\" ShowLeftPane=\"" + $.defaultVal(ds.ShowLeftPane, 0) + "\" ShowRightPane=\"" + $.defaultVal(ds.ShowRightPane, 0) + 
        "\" ShowFAB=\"" + $.defaultVal(ds.ShowFAB, 0) +"\"  FormStyleVersion=\"" + $.defaultVal(ds.FormStyleVersion, 0) +"\"  CompactLayout=\"" + $.defaultVal(ds.CompactLayout, 0) +
        "\" OnInit=\"" + $.defaultVal(ds.OnInit, "") +"\" OnBeforeLoad=\"" + $.defaultVal(ds.OnBeforeLoad, "") +"\" OnLoad=\"" + $.defaultVal(ds.OnLoad, "") +
        "\" OnLoadComplete=\"" + $.defaultVal(ds.OnLoadComplete, "") +"\" OnSave=\"" + $.defaultVal(ds.OnSave, "") +"\" OnSaveSuccess=\"" + $.defaultVal(ds.OnSaveSuccess, "") +
        "\" OnSaveError=\"" + $.defaultVal(ds.OnSaveError, "") +"\" OnWfComplete=\"" + $.defaultVal(ds.OnWfComplete, "") +"\" OnClose=\"" + $.defaultVal(ds.OnClose, "") +
        "\" OnResize=\"" + $.defaultVal(ds.OnResize, "") +
        "\" ScriptId=\"" + $.defaultVal(ds["Script"] == "Ext" ? ds["DllPath"] + "," + ds["ClassName"] : ds["Script"], "") + "\" >");
    xml.push(Erp.Designer._serializeItems($("#editor-content").children("header,main,.erp-Grid,footer").add($("#Fab-Main"))));
    if (!IsDependent) {
        if (Erp.Designer.LayoutType == "Grid") {
            var dsg = Erp.Designer.DataStore.GetData($("#dgData"));
            xml.push("<DefaultFilter>" + $.defaultVal(dsg.DefaultFilter, "") + "</DefaultFilter>");
            var _ar=($.defaultVal(dsg.ApplicableFilters, []));
            var _all=_ar.filter(function(a){return a=="ALL" }).length>0
            xml.push("<ApplicableFilters All=\""+(_all?"1":"0")+"\">");
            if(!_all){
                for(var x=0;x<_ar.length;x++)
                    xml.push("<AF>"+_ar[x]+"</AF>")
            }
            xml.push("</ApplicableFilters>");
        }
        xml.push("<LayoutHtml TemplateID=\"" + $.encodeXml(ds["HtmlTemplate"]) + "\" ></LayoutHtml>");
        var items = ""; $(ds["ClientScripts"]).each(function () { items += "<Item>" + this + "</Item>" });
        var list= $("#ifrExprEditor")[0].contentWindow.VariablesList;
        list = $("#ifrExprEditor")[0].contentWindow.GetVarXml(list);
        xml.push("<LayoutScript><Variables>" + list + "</Variables><External>" + items + "</External><Internal>" + $.encodeXml($("#ifrExprEditor")[0].contentWindow.scriptEditor.getValue()) + "</Internal></LayoutScript>");
        items = ""; $(ds["StyleSheets"]).each(function () { items += "<Item>" + this + "</Item>" });
        xml.push("<LayoutCss><External>" + items + "</External><Internal>" + $.encodeXml(Erp.ScriptEditors["txtCss"].getValue()) + "</Internal></LayoutCss>");
        list = $("#ifrServerExprEditor")[0].contentWindow.VariablesList;
        list = $("#ifrServerExprEditor")[0].contentWindow.GetVarXml(list);
        xml.push("<ServerScript><Variables>" + list + "</Variables><Internal>" + $.encodeXml($("#ifrServerExprEditor")[0].contentWindow.scriptEditor.getValue()) + "</Internal></ServerScript>");
    }
    xml.push("</Layout>");
    return xml.join('');
}

Erp.Designer._serializeItems = function (nodes) {
    var xml = [];
    nodes.each(function () {
        var n = $(this);
        if (n.hasClass("row"))
            xml.push("<Row>" + Erp.Designer._serializeItems(n.children()) + "</Row>");
        else if (n.hasClass("erp-control")) {
            var c = Erp.Designer.getControlObject(n);
            xml.push(c.Serialize(n));
        }
    });
    return xml.join('');
}

Erp.Designer.Save = function () {
    var ds = Erp.Designer.DataStore.GetData($("#editor-container"))
    var saveAs = $("#divSaveAs").isVisible();
    if (saveAs) {
        ds["LayoutName"] = $("#txtSaveAs_Name").val();
        ds["LayoutKey"] = $("#txtSaveAs_Key").val();
        Erp.Designer.ClearPropertylist();
    }
    var data = new Object();
    data["Type"] = "SaveLayout";
    data["@LayoutType"] = Erp.Designer.LayoutType;
    data["@Xml"] = Erp.Designer.Serialize();
    data["@LayoutID"] = (saveAs ? "" : LayoutID);
    data["@ModuleID"] = $.QS("Module");
    data["@EntityID"] = $.QS("EID");
    data["@ResourceVersion"] = $.defaultVal(ds["ResourceVersion"], "0");
    data["@LayoutName"] =  $.defaultVal(ds["LayoutName"], "");
    data["@Description"] = $.defaultVal(ds["LayoutDescription"],"");
    data["@Tag"] = $.defaultVal(ds["LayoutKey"], "");
    data["@RefID"] = (IsDependent ? $.QS("RefID") : "");
    data["@IsDependent"] = IsDependent;
    data["@Responsive"] = 1;
    data["@MobileForm"] = (ds["MobileForm"] == 1 ? 1 : 0);
    var arrRoles = [];
    arrRoles = [];//
   
    var Permission = [];
    var arrPermission =[];  
    data["arrPermission"] = Permission;
    data["arrRoles"] = arrRoles;
    data["au"] = $.QS("_au");
    $.Notify("Saving...");
    PageMethods.Execute(data, arrRoles, Permission, PageMethodSuccess, PageMethodError);
}
Erp.Designer.SaveAs = function () {
    var ds = Erp.Designer.DataStore.GetData($("#editor-container"));
    $("#txtSaveAs_Name").val("Copy Of "+$.defaultVal(ds["LayoutName"], ""))
    $("#divSaveAs").ShowModal();
}
Erp.Designer.Preview = function () {
    var data = new Object();
    data["Type"] = "PreviewLayout";
    data["@Xml"] = Erp.Designer.Serialize();
    
    $.Notify("Please Wait...");
    PageMethods.Execute(data, null, null, PageMethodSuccess, PageMethodError);
}

function PageMethodSuccess(data) {
    $.Notify(false);
    if (data["Type"] == "SaveLayout") {
        LayoutID = data["@LayoutID"];
       
    }
    else if (data["Type"] == "PreviewLayout") {
        window.open("../main/main.aspx?PwM=E&EID=" + $.QS("EID"));
    }
}
function PageMethodError() {
    $.Notify({ Message: "Error Occured.", NotifyOnly: true });
}


Erp.Designer.initScriptEditors = function () {

    if (IsDependent)
        return;

    Erp.ScriptEditors["txtCss"] = CodeMirror.fromTextArea($("#txtCss")[0], {
        mode: 'text/css',
        addModeClass: true,
        extraKeys: { "Ctrl-Space": "autocomplete" },
        autoCloseBrackets: true
    });
}
Erp.Designer.autoFormatEditor = function (ed) {
    if (IsDependent)
        return;
    ed = Erp.ScriptEditors[ed];
    if (!ed)
        return;
    ed.refresh();
    CodeMirror.commands["selectAll"](ed);
    var range = { from: ed.getCursor(true), to: ed.getCursor(false) }
    ed.autoFormatRange(range.from, range.to);
    ed.setCursor(0);
}
Erp.Designer.toggleEditor = function (a) {
    a = $(a);
    if (a.hasClass("selected"))
        return;
    a.parent().children().removeClass("selected")
    $("#divCtr").children(".page1").hide().filter("." + a.attr("class")).show();
    a.addClass("selected")

    if (a.hasClass("css"))
        Erp.Designer.autoFormatEditor("txtCss");
    else if (a.hasClass("designer"))
        Erp.Designer.Update();
}
Erp.Designer.toggleEditorsReadOnly = function (id, chk) {
    $(Erp.ScriptEditors[id].getWrapperElement()).removeClass("codeDisable").addClass((chk ? "" : "codeDisable"));
    Erp.ScriptEditors[id].setOption("readOnly", (chk ? "" : "nocursor"));
}
