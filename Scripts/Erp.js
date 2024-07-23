﻿var Erp = {};
Erp.Responsive = false;
Erp.Touch = false;
Erp.LoadDataComplete = false;
Erp.PageTitle = "";
Erp.PageLoadSkip = false;
Erp.FieldInfo = [];
Erp.FieldInfo_Prog = [];
Erp.FieldInfo_Rptr = [];
Erp.WebApi = {}
Erp.Grid = {}
Erp.Grid.__serialize = {};
Erp.Document = {}
Erp.Spread = {}
Erp.Pdf = {}
Erp.WindowParams = {}
Erp.__RefWin = null;
Erp.WidgetMode = false;
Erp.ApplicationPath = "";
Erp.SkipEval = "";
Erp.Eval = "#EVAL#";
Erp.DocEditors = [];
Erp.FormHash = "";
Erp.UniqueID = "";
Erp.PageTheme = "";
Erp.IsDarkTheme = function () {return $(document.documentElement).hasClass("_darkBG") || $.defaultVal(Erp.PageTheme, "").indexOf("Dark") > -1;}
Erp.LayoutMode = "";
Erp.RecordID = "";
Erp.EntityID = "";
Erp.ParentID = "";
Erp.ParentEntityID = "";
Erp.EnablePopoutSelect = false;
Erp.Lookup = {}
var saveSelectedFields = "";
var __prmList = [];
Erp.ShowLogs = false;
Erp.Console = function (data) {
    if (typeof console == "object" && Erp.ShowLogs)
        console.log(data);
}
//Erp.Console = Erp.ShowLogs ? console.log.bind(console) : function () { };


Erp.Field = function (f) {
    this.Info = (typeof f == "string" ? Erp.GetFieldInfo(f) : f);

    this.Get = function () {
        if (!this.Info)
            return null;
        return Erp.GetFieldValue(this.Info);
    }
    this.Set = function (val, recTxt, tbl) {
        if (!this.Info)
            return null;
        __SetFieldValue(this.Info, val, recTxt, tbl);
    }
    this.GetElement = function () {
        if (!this.Info)
            return null;
        var t = this.Info.Type.toLowerCase();
        switch (t) {
            case "editor":
                return $($find(this.Info.ID).get_element());
            default:
                return $("#" + this.Info.ID);
        }
    }
    this.Validate = function () {
        if (!this.Info)
            return null;
        return Erp.ValidateField(this.Info);
    }
    this.SetDisplay = function (b) {
        if (!this.Info)
            return null;
        var el = this.GetElement().closest(".entity").setDisplay(b);
        Erp.RedrawLayout();
        return el;
    }
    this.ToggleDisplay = function (anim) {
        if (!this.Info)
            return null;
        return this.GetElement().closest(".entity").slideToggle(0);
    }
    this.SetVisible = function (b) {
        if (!this.Info)
            return null;
        return this.GetElement().closest(".entity").setVisible(b);
    }
    this.SetEnable = function (b) {
        if (!this.Info)
            return null;
        var e = this.GetElement().closest(".entity");
        e.removeClass("entity-disabled").setEnable(b, "_dis").addClass(!b ? "entity-disabled" : "");
        var t = $.defaultVal(this.Info.Type, "").toUpperCase();
        if (this.GetElement().next().hasClass("chosen-container"))
            $("#" + this.Info.ID).trigger("chosen:updated");
        if (this.GetElement().hasClass("chosen-container")) {
            if (b)
                this.GetElement().removeAttr("disabled");
            else
                this.GetElement().attr("disabled", "disabled");
        }
        return this;
    }
    this.SetLabel = function (v) {
        if (!this.Info)
            return null;
        return this.GetElement().closest(".entity").find(".entityKey").html(v);
    }
    this.GetLabel = function (v) {
        if (!this.Info)
            return "";
        return this.GetElement().closest(".entity").find(".entityKey").html();
    }
    this.SetParam = function (k, v) {
        if (!this.Info)
            return "";
        var arr = arguments;
        if (arr.length < 2)
            return;
        var el = this.GetElement();
        for (var i = 0; i < arr.length; i += 2) {
            el.data("@@" + arr[i], arr[i + 1]);
            __prmList.push(el.attr("id") + ":" + arr[i]);
        }
        el.data("__ParamSet", true);
        return this;
    }
    this.GetParam = function (k) {
        if (!this.Info)
            return "";
        if (typeof k != "string")
            return null;
        return this.GetElement().data("@@" + k);
    }
    this.SetLabelDisplay = function (b) {
        if (!this.Info)
            return null;
        return this.GetElement().closest(".entity").find(".entityKey").setDisplay(b);
    }
    this.Animate = function (ctr, tmr) {
        if (typeof ctr == "undefined" || isNaN(ctr))
            ctr = 1;
        if (!this.Info)
            return null;
        var fld = this.GetElement().closest(".entity");
        if (ctr < 0) {
            fld.removeClass("entity-highlight2");
            return;
        }
        if (ctr % 2 != 0)
            fld.addClass("entity-highlight2");
        else
            fld.removeClass("entity-highlight2");
        ctr--;
        var that = this;
        window.setTimeout(function () { that.Animate(ctr, tmr) }, tmr ? tmr : 650);
    }
    this.RegisterEvent = function (type, fun) {
        Erp.RegisterEvent(this.GetElement(), type, fun);
    }

}
Erp.EventColl = function () {
    this.EventList = [];
    this.Register = function (func) {
        this.EventList.push(func);
    }
}


Erp.OnInit = new Erp.EventColl();
Erp.OnResize = new Erp.EventColl();
Erp.OnBeforeLoad = new Erp.EventColl();
Erp.OnLoad = new Erp.EventColl();
Erp.OnLoadComplete = new Erp.EventColl();
Erp.OnSave = new Erp.EventColl();
Erp.OnSaveSuccess = new Erp.EventColl();
Erp.OnSaveError = new Erp.EventColl();
Erp.OnClose = new Erp.EventColl();
Erp.OnWfComplete = new Erp.EventColl();

Erp.Init = function () {
    Erp.Touch = $(document.documentElement).hasClass("touch");
    Number.prototype.localeFormat = function Number$localeFormat(format) {
        if (!format)
            format = "F";
        if (format[0] == "F" || format[0] == "f") {
            format = "N" + (format.length > 1 ? format.substring(1) : "");
            return this._toFormattedString(format, Sys.CultureInfo.CurrentCulture).Replace(",", "");
        }
        else
            return this._toFormattedString(format, Sys.CultureInfo.CurrentCulture);
    }
    Date.prototype.localeFormat = function Date$localeFormat(format) {      
        var e = Function._validateParams(arguments, [
            { name: "format", type: String }
        ]);
        if (e) throw e;
        if (this.getYear() == 0 && this.getMonth() == 0 && this.getDate() == 1)//1900-01-01
            return "";
        return this._toFormattedString(format, Sys.CultureInfo.CurrentCulture);
    }
    if (Users.Locale == "en-IN" && Sys && Sys.CultureInfo && Sys.CultureInfo.CurrentCulture) {
        Sys.CultureInfo.CurrentCulture.numberFormat.NumberGroupSizes[0] = 3;
        Sys.CultureInfo.CurrentCulture.numberFormat.NumberGroupSizes[1] = 2;
        Sys.CultureInfo.CurrentCulture.numberFormat.NumberGroupSizes[2] = 2;

        Sys.CultureInfo.InvariantCulture.numberFormat.NumberGroupSizes[0] = 3;
        Sys.CultureInfo.InvariantCulture.numberFormat.NumberGroupSizes[1] = 2;
        Sys.CultureInfo.InvariantCulture.numberFormat.NumberGroupSizes[2] = 2;
    }

    if (typeof AppRootPath != undefined)
        Erp.ApplicationPath = AppRootPath;
    if (!Erp.IsCrossOrigin() && window.parent.DashBoardPage == true) {
        Erp.__RefWin = window.parent.parent;
        //if (window.parent.parent.location.pathname.toLowerCase().indexOf("/ui2.aspx") > 0)
        //    Erp.__RefWin = window.parent.parent.parent;
        Erp.WidgetMode = true;
    }
    document.title = Erp.PageTitle;
    if (!Erp.IsCrossOrigin()) {
        if (parent.HomePage || parent.HomePageChild) {
            window.HomePageChild = true;
            $("#spnWinCmd").children("._max").show();
        }
    }
    //__resizeTitle();
    for (var i = 0; i < Erp.OnInit.EventList.length; i++) {
        if (typeof Erp.OnInit.EventList[i] == "function")
            Erp.OnInit.EventList[i]();
        //_delayFunctionExec(Erp.OnInit.EventList[i],"Init");
    }

    if (typeof InitUI == "function")
       InitUI();

    for (var i = 0; i < Erp.OnBeforeLoad.EventList.length; i++) {
        if (typeof Erp.OnBeforeLoad.EventList[i] == "function")
            Erp.OnBeforeLoad.EventList[i]();
    }
    if (!Erp.IsCrossOrigin() && window.frameElement && $(window.frameElement).hasClass("trans2"))
        $(document.documentElement).addClass("trans2");
    if ($("#headerPanel").text().trim() == "")
        $("#headerPanel").hide();
    if (getQS("_meid") && !Erp.HideBookmark)
        $("#spnWinCmd").find("._bk").show();

    $(".unlockRedacted").each(function () {
        var ev = $(this).children(".entityValue");
       var ul=$("<div class='_unlock'><input type='checkbox' title='Edit this field'/><span>###</span></div>");
       ev.append(ul);
       ul.children("input").on("change", function () {
           $(this).closest(".entity").toggleClass("_unlocked");
          
       })
    })

    $(document).on("click", ".pgNum,.pg-first,.pg-prev,.pg-next,.pg-last,.rpt-search-txt,.rpt-search-btn,.rpt-sort-key", function () { Erp.Repeater._repeaterCommand(this); })
    document.addEventListener('mousedown', Erp.Repeater._initDrag);
    document.addEventListener('touchstart', Erp.Repeater._initDrag);
}

var _incr1 = 0;
Erp.RedrawLayout = function () {
    if (typeof Erp._redraw == "undefined") {
        Erp._redraw = $.debounce(250, function () {
            if (typeof redrawPageLayout == "function")
                redrawPageLayout();
        });
    }
    Erp._redraw();
}
Erp.BeginLoadData = function () {
    var refs = [];

    for (var i = 0; i < Erp.FieldInfo.length; i++) {
        var f = Erp.FieldInfo[i];
        if (typeof f.OnLoad == "function") {
            refs = $.union(refs, hasDbReferences(f.OnLoad, "FieldLoad"));
        }
    }
    for (var i = 0; i < Erp.OnLoad.EventList.length; i++) {
        if (typeof Erp.OnLoad.EventList[i] == "function")
            refs = $.union(refs, hasDbReferences(Erp.OnLoad.EventList[i], "Load"));
    }
    for (var i = 0; i < Erp.OnLoadComplete.EventList.length; i++) {
        if (typeof Erp.OnLoadComplete.EventList[i] == "function")
            refs = $.union(refs, hasDbReferences(Erp.OnLoadComplete.EventList[i], "LoadComplete"));
    }    
    if (refs.length > 0) {
        evaluateDbReferences(refs, Erp.LoadData);
    }
    else
        Erp.LoadData();

}

Erp.ResetTheme = function () {
    $(document.documentElement).removeClass("custom-DarkTheme custom-LightTheme _darkBG");
    var arr = $(document.documentElement).attr("class").split(' ');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].indexOf("Theme") > 0)
            $(document.documentElement).removeClass(arr[i]);
    }
}
Erp.ApplyTheme = function (theme, style) {
    if (theme.indexOf("compact-form") > -1) {
        $(document.documentElement).removeClass("compact-form nocompact-form").addClass(theme);
    }
    else {
        Erp.ResetTheme();
        Erp.PageTheme = theme;
        $(document.documentElement).addClass(theme + (theme.toLowerCase().indexOf("dark") > -1 ? " _darkBG" : ""));
        if (!$.isEmpty(style))
            $(style).appendTo("body");
    }
    if (Erp.DashBoardPage) {
        $("#dashBoardCtr").children().children(".wdg").each(function () {
            changeWidgetTheme(theme, $(this), true, style);
        })
    }
    else if (Erp.ReportViewer) {
        var ifr = $("#ifrCustomLauncher")[0];
        if (ifr && ifr.contentWindow && ifr.contentWindow.Erp && typeof ifr.contentWindow.Erp.ApplyTheme == "function")
            ifr.contentWindow.Erp.ApplyTheme(theme, style);
    }
    else {
        var ifr = $("#ifrDetailsWindow")[0];
        if (ifr && ifr.contentWindow && ifr.contentWindow.Erp && typeof ifr.contentWindow.Erp.ApplyTheme == "function")
            ifr.contentWindow.Erp.ApplyTheme(theme, style);
    }
}

Erp.LoadData = function () {
    for (var i = 0; i < Erp.FieldInfo.length; i++) {
        var f = Erp.FieldInfo[i];
        if (typeof f.OnLoad == "function") {
            f.OnLoad($("#" + f.ID), f.Data, Erp.GetField(f));
        }
    }
    Erp.Load();
    Erp.LoadDataComplete = true;
    if (Erp.PageLoadSkip && typeof pageLoad == "function")
        pageLoad();
}
Erp.Load = function () {
    for (var i = 0; i < Erp.OnLoad.EventList.length; i++) {
        if (typeof Erp.OnLoad.EventList[i] == "function")
            Erp.OnLoad.EventList[i]();
    }
}
Erp.LoadComplete = function () {
    for (var i = 0; i < Erp.OnLoadComplete.EventList.length; i++) {
        if (typeof Erp.OnLoadComplete.EventList[i] == "function")
            Erp.OnLoadComplete.EventList[i]();
    }
    Erp.FormHash = Erp._getFormHash();
}
Erp._getFormHash = function () {
    var ar = [];
    for (var i = 0; i < Erp.FieldInfo.length; i++) {
        if (Erp.FieldInfo[i].Type == "Ddl" || Erp.FieldInfo[i].Type == "Mix")
            ar[i] = $("#" + Erp.FieldInfo[i].ID).data("RecordID");
        else if (Erp.FieldInfo[i].Type == "Bool")
            ar[i] = $("#" + Erp.FieldInfo[i].ID).checked();
        else
            ar[i] = $("#" + Erp.FieldInfo[i].ID).val();
    }
    return ar.join();
}
Erp.SetFormHash = function (hsh) {
    FormHash = hsh;//this is different from Erp.FormHash
}
Erp._gatherData = function (cmd, noData) {
    var data = new Object();
    data["Type"] = "SaveData";
    data["@ID"] = $.defaultVal(getQS("ID"), ItemID);
    data["@PID"] = $.defaultVal(getQS("PID"), "");
    data["@EID"] = getQS("EID");
    data["FormHash"] = FormHash;
    data["FormID"] = FormID;
    data["FormTag"] = FormTag;
    data["PageType"] = Erp.LayoutMode;
    data["WFCode"] = $.defaultVal(getQS("_wf"), "");
    data["QS"] = window.location.search;
    data["SaveSelectedFields"] = saveSelectedFields.length > 0;
    for (var i = 0; i < PkIds.length; i++) {
        data["@" + PkIds[i].key] = PkIds[i].val;
    }
    if (typeof noData == "boolean" && noData == true)
        return data;

    for (var i = 0; i < Erp.FieldInfo.length; i++) {
        var f = Erp.FieldInfo[i];      
        if (!cmd) {
            if (saveSelectedFields.length > 0) {
                if (saveSelectedFields.indexOf("," + f.Name.toLowerCase().replace(getQS("EID").toLowerCase() + "_", "") + ",") < 0)
                    continue;
            }
        }
        if (f.Type == "Editor" && f.Disabled)
            continue;
        if ($("#" + f.ID + "-Ctr").hasClass("redacted") && !$("#" + f.ID + "-Ctr").hasClass("_unlocked"))
            continue;
        addParamValues(data, f);
    }
    return data;
}
function addParamValues(data, fld) {
    var n = fld.Name.toLowerCase();
    var t = fld.Type.toLowerCase();
    var v = Erp.GetFieldValue(fld);
    if (t == "preview")
        return;
    switch (t) {
        case "upload":
            var f = $("#" + fld.ID);
            if (!$.isEmpty(v))
                data["@" + n + "_preview"] = f.data("FileName");
            break;
        case "mix":
            data["@" + n + "_entity"] = $("#" + fld.ID).data("EntityID");
            break;
        case "auto":
            data[n + ":Edited"] = $("#" + fld.ID).prev().checked();
            break;
        case "pwd":
            data[n + ":Edited"] = $("#" + fld.ID).prev().checked() || !$("#" + fld.ID).prev().hasClass("_modify");
            break;
        default:
            break;
    }
    if (data.hasOwnProperty("@" + n.Replace("-", "_")))
        data["@id_" +fld.ID] = v;
    else
        data["@" + n.Replace("-", "_")] = v;
}
Erp.Entity = function (entId, recId, ident) {
    this._data = {};
    this._data["__EntityID"] = entId;

    if (recId && recId instanceof Erp.Entity) {
        if (!recId._data["__RecordID"])
            this._data["__RecordID"] = "#TOKEN#:" + recId.Token();
        else
            this._data["__RecordID"] = recId._data["__RecordID"];
    }
    else
        this._data["__RecordID"] = recId;
    if (typeof ident != "undefined")
        this._data["__IDENTIFIER"] = ident;
}
Erp.Entity.prototype.Token = function (v) {
    if (typeof v == "undefined") {
        var t = this._data["__IDENTIFIER"];
        if (!t)
            t = $.NewID("entityToken-");
        this._data["__IDENTIFIER"] = t;
        return t;
    }
    this._data["__IDENTIFIER"] = v;
}
Erp.Entity.prototype.Data = function (k, v) {
    if (typeof k == "undefined")
        return null;
    if (k == "EntityID")
        k = "__EntityID"
    else if (k == "RecordID")
        k = "__RecordID"
    else
        k = k.toLowerCase();

    if (typeof v == "undefined")
        return this._data[k];
    if (v instanceof Erp.Entity) {
        if (!v._data["__RecordID"])
            this._data[k] = "#TOKEN#:" + v.Token();
        else
            this._data[k] = v._data["__RecordID"];
    }
    else
        this._data[k] = v;
}
Erp.Entity.prototype.Save = function (callback) {
    if (typeof callback != "function")
        callback = function () { };
    Erp.SaveEntity([this], function (result) { callback(result.length > 0 ? result[0] : null); });
}
Erp.Entity.prototype.Load = function (cols, callback) {
    if ($.isEmpty(cols))
        return;
    if (typeof callback != "function")
        callback = function () { };
    var that = this;
    Erp.LoadEntity(cols, [this], callback);
}
Erp.LoadEntity = function (cols, entities, callback) {
    if ($.isEmpty(cols))
        return;
    if (!$.isArray(entities))
        return;
    var arr = [];
    for (var i = 0; i < entities.length; i++)
        arr.push(entities[i]._data);
    if (typeof callback != "function")
        callback = function () { };
    Erp.WebApi.LoadEntity(cols, arr, function (result) { for (var i = 0; i < entities.length; i++) __cloneEntityData(entities[i], result[i]); callback(result); });
}

function __cloneEntityData(ent, data) {
    if (!data)
        return;
    for (p in data)
        ent.Data(p, data[p]);
}
Erp.SaveEntity = function (entities, callback) {
    if (!$.isArray(entities) || entities.length == 0) {
        if (typeof callback == "function")
            callback([]);
        return;
    }
    var arr = [];
    for (var i = 0; i < entities.length; i++)
        arr.push(entities[i]._data);
    if (typeof callback != "function")
        callback = function () { };
    Erp.WebApi.SaveEntity(arr, function (result) { callback(result); });
}
Erp.DeleteEntity = function (entities, callback) {   
    if (!$.isArray(entities) || entities.length == 0) {
        if (typeof callback == "function")
            callback([]);
        return;
    }
    var arr = [];
    for (var i = 0; i < entities.length; i++) {
        entities[i]._data["__Mode"] = "Delete";
        arr.push(entities[i]._data);
    }
    if (typeof callback != "function")
        callback = function () { };
    Erp.WebApi.SaveEntity(arr, function (result) { callback(result); });

}
Erp.BatchOperation = function (action, entity, items, target, callback) {
    if (!$.isArray(items))
        return;
    if (typeof callback != "function")
        callback = function () { };
    if (items.length <= 0) {
        Erp.HideBusyMessage();
        return;
    }
    Erp.WebApi.BatchOperation(action, entity._data, items, target, callback);
}


Erp.RaiseError = function (errList) {
    Erp.ClearErrors();
    var arrFields = [];
    for (var i = 0; i < errList.length; i++) {
        var f = Erp.GetFieldInfo(errList[i].id);
        if (!f)
            continue;
        arrFields.push(f.ID);
        var ctr = f.Type == "Editor" ? $("#" + f.ID + "_Parent") : $("#" + f.ID + "-Ctr");
        ctr.removeClass("entity-error").children("._error").remove();
        var s = "<span id='_err_" + errList[i].id + "' class='_error' data-balloon-length='" + (errList[i].error.length > 22 ? "large" : "medium") + "' data-balloon='" + errList[i].error + "' data-balloon-pos='" + (f.Type == "Editor" ? "up" : "down") + "'><span><i>&#xf06a;</i>" + errList[i].error + "</span></span>";
        if (f.Type == "Editor")
            ctr.addClass("entity-error _edt").prepend(s);
        else
            ctr.addClass("entity-error").append(s);
    }

    Erp.ShowMessage(
                {
                    id: "elValidationMsg",
                    displayMode: 2,
                    message: "Please fix all errors.",
                    transitionInMobile: 'flipInX',
                    transitionOutMobile: 'flipOutX',
                    transitionIn: 'flipInX',
                    transitionOut: 'flipOutX',
                    zindex: 1005,
                    layout: 1,
                    theme: (Erp.IsDarkTheme() ? "dark" : "light"),
                    timeout: false,
                    buttons: [
                            ['<button disabled class="prv mdl-ripple2">&#xf060;</button>', __validationNextPrev],
                            ['<button class="nxt mdl-ripple2">&#xf061;</button>', __validationNextPrev, true],
                    ],
                    onClosing: function (instance, toast) {
                        var t = $(toast); var arr = __validnArray; var ind = __validnCurrIndex;
                        if (ind >= 0)
                            $("#_err_" + arr[ind]).removeClass("showtip");
                    }
                }
                , "error");
    window.__validnArray = arrFields; window.__validnCurrIndex = -1;
}

Erp.ClearErrors = function () {
    Erp.HideMessage("elValidationMsg")
    if (!$.isArray(window.__validnArray))
        return;
    var arrFields = window.__validnArray;
    for (var i = 0; i < arrFields.length; i++) {
        var f = Erp.GetFieldInfo(arrFields[i]);
        if (!f)
            continue;
        var ctr = f.Type == "Editor" ? $("#" + f.ID + "_Parent") : $("#" + f.ID + "-Ctr");
        ctr.removeClass("entity-error").children("._error").remove();
    }
}


Erp.ValidateData = function (fields) {
    var err = ""; var isValid = true;
    var arrFields = [];
    if (fields instanceof $ || (typeof fields == "string" && $("#" + fields).exists())) {
        (typeof fields == "string" ? $("#" + fields) : fields).find(".entity-field").each(function () {
            var fld = $(this).find("input,select,textarea");
            if (!fld.exists())
                return true;
            var f;
            fld.each(function () { if ($(this).attr("id")) { f = Erp.GetFieldInfo($(this).attr("id").split('_mstm')[0]); if (f) return false;}})//mstm in multiselect
            if (!f)
                return true;
            var e = __validateField(f);
            if (!$.isEmpty(e)) {
                isValid = false;
                arrFields.push(f.ID);
                if (!Erp.Responsive)
                    err += e;
            }

        })
    }
    else if (fields && $.isArray(fields)) {
        for (var i = 0; i < fields.length; i++) {
            var f = Erp.GetFieldInfo(fields[i]);
            if (!f)
                continue;
            var e = __validateField(f);
            if (!$.isEmpty(e)) {
                isValid = false;
                arrFields.push(f.ID);
                if (!Erp.Responsive)
                    err += e;
            }
        }
    }     
    else {
        for (var i = 0; i < Erp.FieldInfo.length; i++) {
            var f = Erp.FieldInfo[i];
            if (saveSelectedFields.length > 0) {
                if (saveSelectedFields.indexOf("," + f.Name.toLowerCase().replace(getQS("EID").toLowerCase() + "_", "") + ",") < 0)
                    continue;
            }
            var e = __validateField(f);
            if (!$.isEmpty(e)) {
                isValid = false;
                arrFields.push(f.ID);
                if (!Erp.Responsive)
                    err += e;
            }
        }
    }
    if (Erp.Responsive) {
        Erp.HideMessage("elValidationMsg");
        if (!isValid) {
            Erp.ShowMessage(
                {
                    id: "elValidationMsg",
                    displayMode: 2,
                    message: "Please fix all errors.",
                    transitionInMobile: 'flipInX',
                    transitionOutMobile: 'flipOutX',
                    transitionIn: 'flipInX',
                    transitionOut: 'flipOutX',
                    zindex: 1005,
                    layout: 1,
                    theme: (Erp.IsDarkTheme() ? "dark" : "light"),
                    timeout: false,
                    buttons: [
                            ['<button disabled class="prv mdl-ripple2">&#xf060;</button>', __validationNextPrev],
                            ['<button class="nxt mdl-ripple2">&#xf061;</button>', __validationNextPrev, true],
                    ],
                    onClosing: function (instance, toast) {
                        var t = $(toast); var arr = __validnArray; var ind = __validnCurrIndex;
                        if (ind >= 0)
                            $("#_err_" + arr[ind]).removeClass("showtip");
                    }
                }
                , "error");
            window.__validnArray = arrFields; window.__validnCurrIndex = -1;
        }
        return isValid;
    }
    else {
        err = err.Trim();
        if (!$.isEmpty(err)) {
            __showValidationError(err);
            return false;
        }
        else {
            $("#validnErrCtr").hide();
            return true;
        }
    }
}
function __validationNextPrev(instance, toast, btn) {
    var t = $(toast); var arr = __validnArray; var ind = __validnCurrIndex; btn = $(btn);
    $("#_err_" + arr[ind]).removeClass("showtip")
    if (btn.hasClass("nxt")) ind++; else ind--;
    $("#_err_" + arr[ind]).addClass("showtip");
    var el = $("#" + arr[ind])[0];
    if (el) {
        var _t = $(el).closest(".erp-TabPanel");
        if (_t.length > 0)
            $("#" + _t.ID() + "-tabLink").trigger("click");
        else {
            _t = $(el).closest(".collapsible-body");
            if (_t.length > 0 && !_t.parent().hasClass("active"))
                _t.prev().trigger("click");
        }
        el.scrollIntoView({ behavior: "smooth" });
    }
    if (!Erp.Touch)
        $("#" + arr[ind]).focus();
    __validnCurrIndex = ind;
    t.find(".prv").setEnable(ind > 0);
    t.find(".nxt").setEnable(ind < arr.length - 1);
}
function __validateField(f) {
    var ctr = "", err = "";
    if (Erp.Responsive) {
        ctr = f.Type == "Editor" ? $("#" + f.ID + "_Parent") : $("#" + f.ID + "-Ctr");
        ctr.removeClass("entity-error").children("._error").remove();
    }
    else {
        ctr = $("#" + f.ID + "-Ctr");
        ctr.removeClass("entity-error _edt").children(".entityValue").attr("title", "");
    }

    var e = "";
    if (typeof f.OnValid == "function")
        e = f.OnValid($("#" + f.ID), Erp.GetFieldValue(f), Erp.GetField(f));
    else
        e = Erp.ValidateField(f);
    if (!$.isEmpty(e)) {       
        if (Erp.Responsive) {
            var s = "<span id='_err_" + f.ID + "' class='_error' data-balloon-length='" + (e.length > 22 ? "large" : "medium") + "' data-balloon='" + e + "' data-balloon-pos='" + (f.Type == "Editor" ? "up" : "down") + "'><span><i>&#xf06a;</i>" + e + "</span></span>";
            if (f.Type == "Editor")
                ctr.addClass("entity-error _edt").prepend(s);
            else
                ctr.addClass("entity-error").append(s);
            err = e;
        }
        else {
            ctr.addClass("entity-error").children(".entityValue").attr("title", e);
            err = "<li><a onclick='__focusErr(\"" + f.ID + "\")' href='javascript:void(0)'>" + e + "</a></li>";
        }
    }
    return err;
}
function __showValidationError(err) {
    var valCtr = $("#validnErrCtr");
    if (!valCtr.exists()) {
        $(document.body).append("<div id='validnErrCtr'></div>");
        valCtr = $("#validnErrCtr");
        valCtr.draggable();
        valCtr.show().position({ my: "right top", of: $(document.body), at: "right top" }).css("top", "50px");
    }
    valCtr.html("<a class='close' href='javascript:void(0)' onclick='$(this).parent().hide()'>X</a><ul>" + err + "</ul>").show();
}
function __focusErr(id) {
    $("#" + id).focus();
    Erp.GetField(id).Animate(3, 150);
}
Erp.ValidateField = function (f) {
    var fld = (typeof f == "string" ? Erp.GetFieldInfo(f) : f);
    if (fld.Type == "Editor" && fld.Disabled)
        return "";
    var err = "";
    var data = Erp.GetFieldValue(fld, true);
    var title = "";
    if (!Erp.Responsive) {
        title = $.defaultVal($("#" + fld.ID + "-Ctr").children(".entityKey").find(".field-lbl").text(), "");
        title = $.isEmpty(title) ? $("label[for=" + fld.ID + "]").first().text() : title;
        title = $.isEmpty(title) ? 'Field' : '"' + title.Trim(' ').Trim(':') + '"';
    }
    if (fld.Type.toLowerCase() == "auto" && !$("#" + fld.ID).prev().checked())
        return "";
    if (fld.Type.toLowerCase() == "pwd" && $("#" + fld.ID).prev().exists() && !$("#" + fld.ID).prev().checked())
        return "";
    if (fld.Type == "Editor" && fld.Mandatory) {
        if ($("<p>" + data + "</p>").text().Trim() == "")
            err = (Erp.Responsive ? "Field" : title) + " is mandatory";
    }
    else if ($.isEmpty(data) && fld.Mandatory)
        err = (Erp.Responsive ? "Field" : title) + " is mandatory";
    if (!$.isEmpty(data)) {
        if (fld.DataType == "EMAIL" && data.indexOf("@") < 0 && data.indexOf(".") < 0)
            err = (Erp.Responsive ? "In" : (title + " is not a ")) + "valid E-mail address";
    }
    return err;
}
Erp.GetFieldInfo = function (id) {
    var result = $(Erp.FieldInfo).filter(function () {
        if (id.indexOf("@") == 0)
            return "@" + this.Name.toUpperCase() == id.toUpperCase() || "@" + this.Name.toUpperCase() == id.replace("@", "@" + getQS("EID") + "_").toUpperCase();
        else
            return this.ID.toUpperCase() == id.toUpperCase();
    });
    result = (result && result.length > 0 ? result[0] : null);
    if (result != null)
        return result;
    if (Erp.FieldInfo_Prog.length > 0) {
        result = $(Erp.FieldInfo_Prog).filter(function () {
            return this.ID.toUpperCase() == id.toUpperCase();
        });
        result = (result && result.length > 0 ? result[0] : null);
    }
    return result;
}
Erp.GetField = function (f) {
    return new Erp.Field(f)
}
Erp.GetFieldValue = function (f, actual) {
    var fld = (typeof f == "string" ? this.GetFieldInfo(f) : f);
    var t = "";
    if (!fld || fld instanceof $) {
        var el = fld instanceof $ ? fld : $("#" + f);
        if (!el[0]) return "";
        if (el[0].type == "radio" || el[0].type == "checkbox") return el.checked();
        else if ("value" in el[0]) return el.val();
        else return el.text();
    }
    else {
        if (typeof fld.OnSave == "function") {
            return fld.OnSave($("#" + fld.ID), $("#" + fld.ID).val(), Erp.GetField(fld));
        }
        t = $.defaultVal(fld.Type, "").toLowerCase();     
    }
    switch (t) {
        case "editor":
            return $find(fld.ID).get_html();
        case "number":
            if (actual)
                return $("#" + fld.ID).val();
            return Fn.CFlt($.defaultVal($("#" + fld.ID).autoNumeric('get'), null));
        case "date": {
            if (actual)
                return $("#" + fld.ID).val();
            var m = {};
            if (Erp.Responsive) {
                if ($.isEmpty($("#" + fld.ID).val()))
                    return null;
                var d = $("#" + fld.ID).materialDatepicker("getDate");
                m = (!d ? null : moment(d));
            }
            else {
                var d = $("#" + fld.ID).datepicker("getDate");
                m = (!d ? null : moment(d));
            }
            return m ? m.format("YYYY-MM-DD") : null;
        }
        case "datetime": {
            if (actual)
                return $("#" + fld.ID).val();
            var m = {};
            if (Erp.Responsive) {
                if ($.isEmpty($("#" + fld.ID).val()))
                    return null;
                var d = $("#" + fld.ID).materialDateTimepicker("getDateTime");
                m = (!d ? null : moment(d));
            }
            else {
                var d = $("#" + fld.ID).datetimepicker("getDateTime");
                m = (!d ? null : moment(d));
            }
            return m ? m.format("YYYY-MM-DD hh:mm A") : null;
        }
        case "time": {
            if (actual)
                return $("#" + fld.ID).val();
            var m = {};
            if (Erp.Responsive) {
                if ($.isEmpty($("#" + fld.ID).val()))
                    return null;
                var d = !Fn.IsEmpty($("#" + fld.ID).attr("reldateid")) ? Erp.GetFieldValue($("#" + fld.ID).attr("reldateid")) : "";
                if (Fn.IsEmpty(d)) d = Fn.Format(new Date(), "yyyy-MM-dd");
                d=d+" " + $("#" + fld.ID).val();
                m = (!d ? null : moment(d));
            }
            else {
                var d = $("#" + fld.ID).timepicker().getTime();
                m = (!d ? null : moment(d));
            }
            return m ? m.format("YYYY-MM-DD hh:mm A") : null;
        }        
        case "bool":
            return $("#" + fld.ID).checked();
            //case "multi":
            //    return $("#" + fld.ID).val();
        case "preview":
            return $.defaultVal($("#" + fld.ID).attr("href"), $("#" + fld.ID).attr("src"));
        case "upload":
            var f = $("#" + fld.ID);
            if (actual)
                return {
                    url: "getresource.ashx?id=" + Erp.RecordID + "&eid=" + Erp.EntityID + "&fld=" + fld.Name.replace(Erp.EntityID.toLowerCase() + "_", ""),
                    tempUrl: "../temp/" + $.defaultVal(f.data("TempName"), ""),
                    fileName: $.defaultVal(f.data("FileName"), ""),
                    tempName: $.defaultVal(f.data("TempName"), "")
                };
            return $.defaultVal(f.data("TempName"), "");
        case "mix":
        case "ddl":
            return $.defaultVal($("#" + fld.ID).data("RecordID"), "");
        case "multi":
            var items = $("#" + fld.ID).multiSelect().getItems();
            var v = [];
            if (actual)
                items.each(function () { v.push({ Text: $(this).children(".item").text(), RecordID: $(this).data("RecordID") }); });
            else
                items.each(function () { v.push($(this).data("RecordID")); });
            return v;
        case "mixmulti":
            var items = $("#" + fld.ID).multiSelect().getItems();
            var v = [];
            items.each(function () { v.push([$(this).data("EntityID"), $(this).data("RecordID")]); });
            return v;
        case "auto":
            return $("#" + fld.ID).val();
        case "pwd":
            var p = $("#" + fld.ID);
            return p.prev().hasClass("_modify") ? (p.prev().checked() ? p.val() : "") : p.val();
        default: {
            var el = $("#" + fld.ID);
            if (!el[0]) return "";
            if (el[0].type == "radio" || el[0].type == "checkbox") return el.checked();
            else if ("value" in el[0]) return el.val();
            else return el.text();
        }
    }
}
Erp.GetFieldText = function (f) {
    var fld = (typeof f == "string" ? this.GetFieldInfo(f) : f);
    if (!fld)
        return "";
    if (fld.Type == "Bool")
        return $("#" + fld.ID).checked();
    else if (fld.DataType == "SINGLESELECT")
        return $("#" + fld.ID).selectedItem().text();
    else if (fld.DataType == "MULTISELECT") {
        var x = [];
        $("#" + fld.ID).find("option:selected").each(function () { x.push($(this).text()); })
        return x.join(', ');
    }
    else if (fld.DataType == "MULTISELECT_TABLE") {
        var x = [];
        $(Erp.GetFieldValue(fld.ID, true)).each(function () { x.push(this.Text); });
        return x.join(', ');
    }
    return $("#" + fld.ID).val();
}
Erp.SetFieldValue = function (f, v, recTxt, tbl) {
    return __SetFieldValue(f, v, recTxt, tbl)
}
function __SetFieldValue(f, v, recTxt, tbl) {
    if (!f)
        return;
    v = typeof v == "undefined" || v == null ? "" : v;
    var fld = (typeof f == "string" ? Erp.GetFieldInfo(f) : f);
    if (!fld || fld instanceof $) {
        var el = fld instanceof $ ? fld : $("#" + f);
        if (!el[0]) return;
        if (el[0].type == "radio" || el[0].type == "checkbox") return el.checked(v);
        else if ("value" in el[0]) return el.val(v);
        return
    }

    if(!fld && f.indexOf("@")>-1)
        return;
   
    var t = (fld ? fld.Type.toLowerCase() : "");
    var id = (fld ? fld.ID : f);
    if (Erp.Responsive) {
        $("#" + id).closest(".erp-control").find("._lbl").filter("[for='" + id + "']").removeClass("active").addClass($.isEmpty(v) ? "" : "active");
    }
    switch (t) {
        case "editor":
            $find(id).set_html(v);
            return;
        case "number":
            $("#" + id).autoNumeric('set', isNaN(v) ? "" : v);
            return;
        case "date": {
            v = v && typeof v == "string" ? moment(v, "YYYY-MM-DD hh:mm A").toDate() : v;
            if (Erp.Responsive)
                $("#" + id).materialDatepicker('setInputDate', v);
            else
                $("#" + id).datepicker("setDate", v);
            return;
        }
        case "datetime": {
            v = v && typeof v == "string" ? moment(v, "YYYY-MM-DD hh:mm A").toDate() : v;
            if (Erp.Responsive)
                $("#" + id).materialDateTimepicker('setDateTime', v);
            else
                $("#" + id).datetimepicker("setDateTime", v);
            return;
        }
        case "time":
            if (Erp.Responsive)
                $("#" + id).materialTimepicker('setTime', v);
            else
                $("#" + id).timepicker().setTime(v);
            return;
        case "bool":
            $("#" + id).checked(v);
            return;
        case "mix":
        case "ddl":
            {
                var o = {};
                o.Text = recTxt ? recTxt : "";
                o.RecordID = v ? v : "";
                o.EntityID = (t == "ddl" ? $("#" + id).data("Eids") : (tbl ? tbl : ""));
                $("#" + id).data("RecordID", o.RecordID);
                $("#" + id).data("EntityID", o.EntityID);
                $("#" + id).val(o.Text == "     " ? "" : o.Text);
                if (!$.isEmpty(o.Text) && $("#" + id).next().hasClass("del"))
                    $("#" + id).next().setDisplay($("#" + id).attr("readonly"));
                if ($.isEmpty(o.Text) && o.Text != "     " && !$.isEmpty(o.RecordID) && !$.isEmpty(o.EntityID)) {
                    $("#" + id).val("Loading...");
                    Erp.GetRecordTitle(o.RecordID, o.EntityID, function (result) {
                        $("#" + id).val(result);
                        if (!$.isEmpty(result) && $("#" + id).next().hasClass("del"))
                            $("#" + id).next().show();
                    })
                }
                return;
            }
        case "multi":
        case "mixmulti":
            {
                $("#" + id).multiSelect().removeAllItems();
                $("#" + id + "-Ctr").find(".del").hide();
                if ($.isArray(v)) {
                    var m = $("#" + id).multiSelect();
                    var eid = $.defaultVal($("#" + id).data("Eids"), "").split(',')[0];
                    for (var i = 0; i < v.length; i++)
                        m.addItem({ Text: v[i].Text, RecordID: v[i].RecordID, EntityID: $.defaultVal(v[i].EntityID, eid) });
                    if (v.length > 0)
                        $("#" + id + "-Ctr").find(".del").show();
                }
                return;
            }

        default: {
            if (fld.DataType == "MULTISELECT" && typeof v == "string" && !$.isEmpty(v)) {
                var arr = v.split(',');
                v = [];
                for (var i = 0; i < arr.length; i++)
                    v.push(arr[i].Trim());
            }
            $("#" + id).val(v);
            if (fld) {
                if (fld.DataType == "SINGLESELECT" || fld.DataType == "MULTISELECT") {
                    if (Erp.Responsive)
                        $("#" + id).formSelect();
                    else
                        $("#" + id).trigger("chosen:updated");
                }
                else if (Erp.Responsive && fld.DataType == "MULTILINE")
                    M.textareaAutoResize($("#" + id));
               
            }
            return;
        }
    }

}

Erp.SetDateRange = function (id, type, val) {
    var fld = Erp.GetField(id);
    type = $.defaultVal(type, "MIN");
    type = (type != "MIN" ? "maxDate" : "minDate");
    if (fld) {
        if (Erp.Responsive) {
            var instance = M.Datepicker.getInstance(fld.GetElement()[0]);
            val = (val ? (val instanceof Date ? val : Fn.CDate(val)) : null);
            instance.options[type] =val;
            var c = fld.GetElement().data("_cleave");
            if (!c) return;
            if (!val) {
                if (type == "maxDate")
                    c.properties.dateFormatter.dateMax = [];
                else
                    c.properties.dateFormatter.dateMin = [];
            }
            else {
                if (type == "maxDate")
                    c.properties.dateFormatter.dateMax = [val.getDate(), val.getMonth() + 1, val.getFullYear()];
                else
                    c.properties.dateFormatter.dateMin = [val.getDate(), val.getMonth() + 1, val.getFullYear()];
            }
        }
        else
            fld.GetElement().datepicker("option", type, val ? (val instanceof Date ? val : Fn.CDate(val)) : "");
    }
}
Erp.SetTimeRange = function (id, type, val) {
    var fld = Erp.GetField(id);
    type = $.defaultVal(type, "MIN");
    type = (type != "MIN" ? "maxTime" : "minTime");
    if (fld) {
        fld = fld.GetElement();
        if (fld.hasClass("entity-date"))
            fld = fld.next();
        fld.timepicker("option", type, val ? val : (type == "MIN" ? "0" : "11:59 PM"));
    }
}


Erp.DatePicker.SetDateRange = function (id, type, val) {
    Erp.SetDateRange(id, type, val)
}
Erp.DatePicker.SetTimeRange = function (id, type, val) {
    Erp.SetTimeRange(id, type, val)
}
Erp.DatePicker.SetDefaultDate = function (id, val) {
    var fld = Erp.GetField(id);
    if (fld) {
        if (Erp.Responsive) {
            var instance = M.Datepicker.getInstance(fld.GetElement()[0]);
            instance.gotoDate(val instanceof Date ? val : Fn.CDate(val));
        }
    }
}

Erp.Tab = {};
Erp.Tab.Select = function (tabId) {
    var t = $("#" + tabId + "-tabLink");
    if (!t.exists()) return;
    t.trigger("click");
}

Erp.CreateField = function (type, opt) {
    if (!type)
        return;
    if (Erp.Responsive) {
        return Erp.CreateFieldResp(type, opt);
    }
    var refInput = null;
    var fieldType = "TEXT";

    if (type instanceof $) {
        refInput = type;
        fieldType = $.defaultVal(refInput.attr("fieldtype"), "TEXT").toUpperCase();
        refInput.attr("fieldtype", fieldType);
        opt = { Label: $.defaultVal(refInput.attr("label"), ""), Id: $.defaultVal(refInput.attr("editorid"), refInput.attr("id")), Parent: "", ShowBorder: false, Width: refInput.attr("width"), Mandatory: refInput.attr("mandatory") / 1 > 0, Disabled: refInput.attr("disabled") || refInput.attr("disabled") / 1 > 0, Entity: refInput.attr("eid"), FieldID: refInput.attr("fieldid"), FormCode: refInput.attr("fc"), Items: refInput.data("items"), SimpleDdl: (refInput.attr("simpleddl") == "false" ? false : true), Rounding: Fn.CInt($.defaultVal(refInput.attr("round"), "-1")) };
        refInput.attr("id", "");
    }
    else
        fieldType = type ? type.toUpperCase() : "TEXT";

    var subType = "Text";
    opt = $.extend({ Id: "", Parent: "", Label: "", Icon: "",NewLine:false, Class: "", Width: "", ShowBorder: false, Symbol: "", Tooltip: "", Disabled: false, Mandatory: false, Items: null, Rounding: 2, Value: "" }, opt);

    var ctr = null;
    if (opt.Parent instanceof $)
        ctr = opt.Parent;
    else
        ctr = $.isEmpty(opt.Parent) ? $("body") : $("#" + opt.Parent);
    ctr = !ctr.exists() ? $(document.body) : ctr;
    if (ctr.hasClass("groupingPanel"))
        ctr = ctr.children(":first");
    opt.Width = $.isEmpty(opt.Width) || isNaN(opt.Width) ? "" : (parseInt(opt.Width) + "px");
    var id = opt.Id;
    if ($.isEmpty(id) || $("#" + id).exists())
        id = $.NewID("Field-");

    var cls = "";
   
    if (fieldType == "DATE" || fieldType == "DATETIME")
        cls = "entity-date";
    else if (fieldType == "TIME")
        cls = "entity-time";
    else if (fieldType == "CHECKBOX") {
        subType = "Bool";
        opt.ShowBorder = false;
        opt.Class = $.defaultVal(opt.Class, "") + " noHover";   
    }
    if (fieldType == "SINGLESELECT")
        subType = "Ddl";
    else if (fieldType == "MIXEDSELECT")
        subType = "Mix";
    else if (fieldType == "MULTISELECT")
        subType = "Multi";
    else if (fieldType == "MIXEDMULTISELECT")
        subType = "MixMulti";
    else if (fieldType == "NUMBER" || fieldType == "DECIMAL" || fieldType == "CURRENCY" || fieldType == "PERCENT")
        subType = "Number";
    else if (fieldType == "DATE") {
        subType = "Date";
        opt.Width = 0;
    }
    else if (fieldType == "TIME") {
        subType = "Time";
        opt.Width = 0;
    }
    else if (fieldType == "DATETIME") {
        subType = "DateTime";
        opt.Width = 0;
    }
    var str = "";
    if (fieldType == "LABEL") {
        str = $('<span id="' + id + '" style="' + ($.isEmpty(opt.Width) ? '' : 'width:' + opt.Width + ';') + '"  class="entity entity-label autoWidth ' + $.defaultVal(opt.Class, "") + '"><span class="span"><span class="field-icon">' + $.defaultVal(opt.Icon, "") + '</span><span class="field-title ">' + $.defaultVal(opt.Label, "") + '</span></span></span>');
        ctr.append(str);
        return str;
    }
    else if (fieldType == "BUTTON") {
        str = $('<a style="' + ($.isEmpty(opt.Width) ? '' : 'width:' + opt.Width + ';') + '"  class="pageBtn ' + ($.defaultVal(opt.Class, "").indexOf("cmdLink") < 0 ? "cmdBtn " : "") + $.defaultVal(opt.Class, "") + '" id="' + id + '" href="javascript:void(0)" title=""><span>' + $.defaultVal(opt.Icon, "") + '</span>' + $.defaultVal(opt.Label, "") + '</a>');
        ctr.append(str);
        return str;
    }
    else if (fieldType == "MENUITEM" || fieldType == "MENUGROUP") {
        var _ctr = ctr.hasClass("Menu") ? ctr.children(".menu-root") : ctr.children(".menu-ctr");
        if (ctr.hasClass("menu-item") || ctr.hasClass("menu-group")) ctr.addClass("parent");
        if (_ctr.length <= 0) {
            _ctr = $("<div class='" + (ctr.hasClass("Menu") ? "menu-root" : "menu-ctr") + "'></div>");
            ctr.append(_ctr);
        }
        if (fieldType == "MENUITEM")
            str = $("<span class='menu-item " + opt.Class + "' " + ($.isEmpty(opt.Value) ? "" : "value='" + opt.Value + "'") + " id='" + id + "'><span class='menu-icon'>" + opt.Icon + "</span><span class='menu-title'>" + opt.Label + "</span></span>");
        else
            str = $("<span class='menu-group " + opt.Class + "' " + ($.isEmpty(opt.Value) ? "" : "value='" + opt.Value + "'") + " id='" + id + "'><span class='menu-icon'>" + opt.Icon + "</span><span class='menu-title'>" + opt.Label + "</span><a onclick='javascript:void(0)' class='menu-collapse'></a></span>");
        _ctr.append(str);
        return str;
    }
    else if (fieldType == "VERTICALMENU" || fieldType == "HORIZONTALMENU") {
        str = $("<div class='Menu " + (fieldType == "VERTICALMENU" ? "VerticalMenu" : "HorizontalMenu") + "' id='" + id + "'><div class='menu-root'></div></div>");
        _ctr.append(str);
        _initMenu(str);
        return str;
    }
    str =
        '<div id="' + id + '-Ctr" style="" class="entity entity-field ' + ($.isArray(opt.Items) ? 'allowOverflow ' : '') + (opt.ShowBorder ? " showBorders" : "") + (opt.Mandatory ? " mandatory" : "") + (fieldType == "MULTILINE" ? " multiline" : "") + ' ' + $.defaultVal(opt.Class, "") + '">' +
            '<label ' + ($.isEmpty(opt.Label) ? 'style="display:none" ' : '') + ' class="entityKey" ' + ($.isEmpty(opt.Tooltip) ? '' : 'title="' + $.encodeXml(opt.Tooltip, true) + '"') + ' for="' + id + '"><span class="field-icon"></span><span class="field-lbl">' + ($.isEmpty(opt.Label) ? "" : opt.Label + " : ") + '</span></label>' +
                '<span class="entityValue">';
    if (fieldType == "CHECKBOX")
        str += '<div class="entity-check"><input type="checkbox" id="' + id + '"><label class="chk" for="' + id + '"></label></div>';
    else if (fieldType == "MULTILINE" || fieldType == "RICHTEXT")
        str += '<textarea rows="4" id="' + id + '" class="entityInput ui-multi"></textarea>';
    else {
        if ($.isArray(opt.Items) && (fieldType == 'MULTISELECT' || fieldType == 'SINGLESELECT')) {
            subType = "Text"
            str += '<select ' + (fieldType == 'MULTISELECT' ? 'multiple=1' : '') + ' id="' + id + '" class="entityInput ui-text ' + cls + '" ><option></option>';
            for (var i = 0; i < opt.Items.length; i++) {
                var itm = opt.Items[i];
                var v = $.encodeXml(itm.Value != undefined ? itm.Value : (itm.value != undefined ? itm.value : ""), true);
                str += "<option " + (v.length > 0 ? "value=\"" + v + "\"" : "") + " >" + (itm.Text != undefined ? itm.Text : (itm.text != undefined ? itm.text : itm)) + "</option>";
            }
            str += "</select>";
        }
        else
            str += '<' + (fieldType == 'MULTISELECT' || fieldType == 'MIXEDMULTISELECT' ? 'div' : 'input style="' + (fieldType == "DATE" || fieldType == "TIME" || fieldType == "DATETIME" ? "" : ($.isEmpty(opt.Width) ? '' : 'width:' + opt.Width + ';')) + '"  type="' + (fieldType == "PASSWORD" ? "password" : "text") + '" ') + ' id="' + id + '" class="entityInput ui-text ' + cls + '" ' + (fieldType == 'MULTISELECT' || fieldType == 'MIXEDMULTISELECT' ? '></div>' : '/>');
    }
    str += ' </span></div>';
    var fld = $(str);
    var elem = fld.find('#' + id);
    var inf = { DataType: fieldType, Type: subType, ID: id, Name: "", Mandatory: opt.Mandatory };
    Erp.FieldInfo_Prog.push(inf);
    var f = Erp.GetField(inf);
    var refVal = "";
    if (refInput) {
        refVal = refInput.val();
        $(document.body).append(fld);
        $.each(refInput[0].attributes, function () {
            if (this.specified && this.name != "type" && this.name != "id" && this.name != "value" && this.name != "editorid") {
                if (this.name == "onchange" && typeof window[this.value] == "function")
                    f.RegisterEvent("change", window[this.value]);
                else if (this.name == "class")
                    elem.addClass(this.value);
                else
                    elem.attr(this.name, this.value);
            }
        });

        refInput.after(fld);
        if (opt.NewLine)
            refInput.after("<br/>");
        refInput.remove();
    }
    else {
        ctr.append(fld);
        if (opt.NewLine)
            ctr.append("<br/>");
    }

    if ($.isArray(opt.Items) && (fieldType == 'MULTISELECT' || fieldType == 'SINGLESELECT')) {
        if (!opt.SimpleDdl)
            elem.chosen({ disable_search_threshold: 10, width: (opt.Width>0?opt.width:"100%"), placeholder_text_multiple: " " });
    }

    if (!$.isArray(opt.Items) && (fieldType == "SINGLESELECT" || fieldType == "MIXEDSELECT" || fieldType == "MULTISELECT" || fieldType == "MIXEDMULTISELECT")) {
        var ddl = fld.find(".entityInput");
        ddl.data('FieldID', opt.FieldID ? opt.FieldID : ddl.ID());
        ddl.data('Eids', $.defaultVal(opt.Entity, ""));
        ddl.data('LookupCode', $.defaultVal(opt.FormCode, ""));
        ddl.data('FieldType', fieldType);
        ddl.data('Multi', (fieldType == "MULTISELECT" || fieldType == "MIXEDMULTISELECT")); ddl.parent().on('click', function () { showSearchList($(this)); });

        if (fieldType == "MULTISELECT" || fieldType == "MIXEDMULTISELECT")
            ddl.multiSelect({ onItemAdding: onMixSelectItemAdding, onDropDownShowing: showSearchList });
        else {
            ddl.parent().addClass('ui-list');
            ddl.attr("autocomplete", "off").after("<a title='Clear' href='javascript:void(0)' style='display:none' onclick='if(!$(this).prev().isDisabled())$(this).hide().prev().val(\"\").removeData(\"RecordID\").removeData(\"EntityID\").trigger(\"" + (fieldType == "SINGLESELECT" || fieldType == "MIXEDSELECT" ? "selectchange" : "change") + "\");' class='del'>X</a>")
        }
        if (fieldType == "SINGLESELECT" && opt.Entity) {
            enableKeyboardForList(elem);
        }
    }
    else if (fieldType == "NUMBER" || fieldType == "DECIMAL" || fieldType == "CURRENCY" || fieldType == "PERCENT") {
        fld.find(".entityInput").autoNumeric('init', { vMin: -79228162514264337593543950335, vMax: 79228162514264337593543950335, mDec: (fieldType == "NUMBER" ? 0 : opt.Rounding == -1 ? 10 : Fn.CInt(opt.Rounding)), aPad: false, aSep: '', aSign: (fieldType == "PERCENT" ? ' %' : $.defaultVal(opt.Symbol, "")), pSign: 's' });
    }
    else if (fieldType == "DATE") {
        fld.closest(".entity").removeClass("occupy");
        fld.find(".entityInput").datepicker({ onSelect: function () { $(this).trigger('change'); }, dateFormat: Users.ShortDateFormat_JQ });
    }
    else if (fieldType == "TIME") {
        fld.closest(".entity").removeClass("occupy");
        fld.find(".entityInput").timepicker({ change: function () { $(this).trigger('change'); }, scrollbar: true, timeFormat: Users.TimeFormat_JQ });
    }
    else if (fieldType == "DATETIME") {
        fld.closest(".entity").removeClass("occupy");
        fld.find(".entityInput").wrap("<span class='entity-datetime'></span>");
        fld.find(".entityInput").datetimepicker({ onSelect: function () { $(this).trigger('change'); }, change: function () { $(this).prev().trigger('change'); }, dateFormat: Users.ShortDateFormat_JQ, timeFormat: Users.TimeFormat_JQ, scrollbar: true });
    }
    if ($.isArray(opt.Items) && (fieldType == 'MULTISELECT' || fieldType == 'SINGLESELECT')) {
        var el = fld.closest(".entity");
        if (el.hasClass("occupy"))
            el.children(".entityValue").css("width", el.innerWidth() - el.children(".entityKey").outerWidth() - 5);
    }
    if (opt.Disabled)
        f.SetEnable(false);
    if (refVal != "")
        __SetFieldValue(id, refVal);
    return f;
}

Erp.CreateFieldResp = function (type, opt) {
    if (!type)
        return;
    var refInput = null;
    var fieldType = "TEXT";
    var _fieldType = "Text";
    if (type instanceof $) {
        refInput = type;
        fieldType = $.defaultVal(refInput.attr("fieldtype"), "TEXT").toUpperCase();
        _fieldType = $.defaultVal(refInput.attr("fieldtype"), "Text");

        refInput.attr("fieldtype", fieldType);
        opt = { Label: $.defaultVal(refInput.attr("label"), ""), Id: $.defaultVal(refInput.attr("editorid"), refInput.attr("id")), Parent: "", ShowBorder: false, Width: refInput.attr("width"), Mandatory: refInput.attr("mandatory") / 1 > 0, Disabled: refInput.attr("disabled") || refInput.attr("disabled") / 1 > 0, Entity: refInput.attr("eid"), FieldID: refInput.attr("fieldid"), FormCode: refInput.attr("fc"), Items: refInput.data("items"), SimpleDdl: (refInput.attr("simpleddl") == "false" ? false : true), Rounding: Fn.CInt($.defaultVal(refInput.attr("round"), "-1")) };
        refInput.attr("id", "");
    }
    else {
        fieldType = type ? type.toUpperCase() : "TEXT";
        _fieldType = type ? type : "Text";
    }

    var subType = "Text";
    opt = $.extend({ Id: "", Parent: "", Label: "", Icon: "", NewLine: false, Class: "", Width: "", ShowBorder: false, Symbol: "", Tooltip: "", Disabled: false, Mandatory: false, Items: null, Rounding: 2, Value: "",CreateRow:true }, opt);

    var ctr = null;
    if (opt.Parent instanceof $)
        ctr = opt.Parent;
    else
        ctr = $.isEmpty(opt.Parent) ? $("body") : $("#" + opt.Parent);
    ctr = !ctr.exists() ? $(document.body) : ctr;
    if (ctr.hasClass("erp-Panel"))
        ctr = ctr.children(".ctr");
    opt.Width = $.isEmpty(opt.Width) ? "s12 m12 l12" : opt.Width;
    var id = opt.Id;
    if ($.isEmpty(id) || $("#" + id).exists())
        id = $.NewID("Field-");

    var cls = "";
    if (fieldType == "DATE" || fieldType == "TIME" || fieldType == "DATETIME")
        cls += "erp-Date";

    if (fieldType == "CHECKBOX") {
        cls += "erp-Checkbox"
        subType = "Bool";
        opt.ShowBorder = false;
    }
    if (fieldType == "SINGLESELECT") {
        subType = "Ddl";
        cls+=" erp-Select"
    }
    else if (fieldType == "MIXEDSELECT")
        subType = "Mix";
    else if (fieldType == "MULTISELECT")
        subType = "Multi";
    else if (fieldType == "MIXEDMULTISELECT")
        subType = "MixMulti";
    else if (fieldType == "NUMBER" || fieldType == "DECIMAL" || fieldType == "CURRENCY" || fieldType == "PERCENT")
        subType = "Number";
    else if (fieldType == "DATE") {
        subType = "Date";
    }
    else if (fieldType == "TIME") {
        subType = "Time";
    }
    else if (fieldType == "DATETIME") {
        subType = "DateTime";
    }
    var str = "";
    if (fieldType == "LABEL") {
        str = $( '<div class="row ctr"><div id="' + id + '"  class="erp-control erp-Label  col ' + opt.Width + ' ' + $.defaultVal(opt.Class, "") + '"><i class="fa">' + $.defaultVal(opt.Icon, "") + '</i><span>' + $.defaultVal(opt.Label, "") + '</span></div></div>')
        ctr.append(str);
        return str;
    }
    else if (fieldType == "BUTTON") {
        str = $('<span id="' + id + '"  class=" btn-wrapper "><div class="dgBtn erp-control erp-Button  large waves-effect waves-light btn ' + $.defaultVal(opt.Class, "") + '"><i class="fa left">' + $.defaultVal(opt.Icon, "") + '</i><span>' + $.defaultVal(opt.Label, "") + '</span></div></span>');
        ctr.append(str);
        return str;
    }
    else if (fieldType == "MENUITEM" || fieldType == "MENUGROUP") {
        var _ctr = ctr.hasClass("Menu") ? ctr.children(".menu-root") : ctr.children(".menu-ctr");
        if (ctr.hasClass("menu-item") || ctr.hasClass("menu-group")) ctr.addClass("parent");
        if (_ctr.length <= 0) {
            _ctr = $("<div class='" + (ctr.hasClass("Menu") ? "menu-root" : "menu-ctr") + "'></div>");
            ctr.append(_ctr);
        }
        if (fieldType == "MENUITEM")
            str = $("<span class='menu-item " + opt.Class + "' " + ($.isEmpty(opt.Value) ? "" : "value='" + opt.Value + "'") + " id='" + id + "'><span class='menu-icon'>" + opt.Icon + "</span><span class='menu-title'>" + opt.Label + "</span></span>");
        else
            str = $("<span class='menu-group " + opt.Class + "' " + ($.isEmpty(opt.Value) ? "" : "value='" + opt.Value + "'") + " id='" + id + "'><span class='menu-icon'>" + opt.Icon + "</span><span class='menu-title'>" + opt.Label + "</span><a onclick='javascript:void(0)' class='menu-collapse'></a></span>");
        _ctr.append(str);
        return str;
    }
    else if (fieldType == "VERTICALMENU" || fieldType == "HORIZONTALMENU") {
        str = $("<div class='Menu " + (fieldType == "VERTICALMENU" ? "VerticalMenu" : "HorizontalMenu") + "' id='" + id + "'><div class='menu-root'></div></div>");
        _ctr.append(str);
        _initMenu(str);
        return str;
    }
    str = "";
    if (opt.CreateRow)
        str+='<div class="row ctr">'

    str += '<div id="' + id + '-Ctr" class="entity entity-field erp-Field ' + (fieldType == "CHECKBOX" ? "input-box" : "input-field") + ' erp-control erp-' + _fieldType + '  col ' + opt.Width + ' ' + $.defaultVal(opt.Class, "") + ' ' + cls + '">' + ($.isEmpty(opt.Icon) ? "" : ('<i class="fa prefix">' + opt.Icon + '</i>'));

    /*    '<div id="' + id + '-Ctr" style="" class="entity entity-field ' + ($.isArray(opt.Items) ? 'allowOverflow ' : '') + (opt.ShowBorder ? " showBorders" : "") + (opt.Mandatory ? " mandatory" : "") + (fieldType == "MULTILINE" ? " multiline" : "") + ' ' + $.defaultVal(opt.Class, "") + '">' +
            '<label ' + ($.isEmpty(opt.Label) ? 'style="display:none" ' : '') + ' class="entityKey" ' + ($.isEmpty(opt.Tooltip) ? '' : 'title="' + $.encodeXml(opt.Tooltip, true) + '"') + ' for="' + id + '"><span class="field-icon"></span><span class="field-lbl">' + ($.isEmpty(opt.Label) ? "" : opt.Label + " : ") + '</span></label>' +
                '<span class="entityValue">';*/
    if (fieldType == "CHECKBOX")
        str += '<label class="label mdl-ripple2"><input type="Checkbox" id="' + id + '"><span></span></label>';
    else if (fieldType == "MULTILINE" || fieldType == "RICHTEXT")
        str += '<textarea id="' + id + '" class="materialize-textarea"></textarea>';
    else if (fieldType == 'MULTISELECT' || fieldType == 'SINGLESELECT') {
        if ($.isEmpty(opt.Entity)) {
            subType = "Text";
            str += '<select ' + (fieldType == 'MULTISELECT' ? 'multiple=1' : '') + ' id="' + id + '" tabindex="-1"></select>'
        }
        else if (fieldType == 'MULTISELECT') {
            str += '<div class="select-wrapper"><span class="caret">▼</span><input id="' + id + '_mstm" class="select-dropdown" readonly="" type="text" title=""><a title="Clear" style="display:none" href="javascript:void(0)" onclick="__clearSelect(this,event,\'Multi\')" class="del">×</a><a class="chip-trigger" title="Show Items" href="javascript:void(0)" onclick="__showmsitems(this,event)" ></a></div>'
            str += '<div  style="display:none" class="chip-ctr select-input" id="' + id + '"   ></div>'
        }
        else if (fieldType == 'SINGLESELECT')
            str += '<div class="select-wrapper ui-list"><span class="caret">▼</span><input id="' + id + '" class="select-input select-dropdown" autocomplete="off" name="' + id + '-' + ((new Date()) / 1) + '"  value="" title="" type="text" /><a title="Clear" style="display:none" href="javascript:void(0)" onclick="__clearSelect(this,event,&quot;Ddl&quot;)" class="del">×</a></div>';
    }
    else
        str += '<input id="' + id + '" type="' + (subType == "Number" ? "tel" : "text") + '" autocomplete="off" name="' + id + '-' + ((new Date()) / 1) + '"  />';

    str += '<label for="' + id + '" class="' + (fieldType == "CHECKBOX" ? "_t" : "_lbl") + '">' + $.defaultVal(opt.Label, "") + '</label></div>';
    if (opt.CreateRow)
        str += '</div>'

    var fld = $(str);
    var elem = fld.find('#' + id);
    var inf = { DataType: fieldType, Type: subType, ID: id, Name: "", Mandatory: opt.Mandatory };
    Erp.FieldInfo_Prog.push(inf);
    var f = Erp.GetField(inf);
    var refVal = "";
    if (refInput) {
        refVal = refInput.val();
        $(document.body).append(fld);
        $.each(refInput[0].attributes, function () {
            if (this.specified && this.name != "type" && this.name != "id" && this.name != "value" && this.name != "editorid") {
                if (this.name == "onchange" && typeof window[this.value] == "function")
                    f.RegisterEvent("change", window[this.value]);
                else if (this.name == "class")
                    elem.addClass(this.value);
                else
                    elem.attr(this.name, this.value);
            }
        });

        refInput.after(fld);       
        refInput.remove();
    }
    else {
       ctr.append(fld);
        
    }

  

    if (!$.isArray(opt.Items) && (fieldType == "SINGLESELECT" || fieldType == "MIXEDSELECT" || fieldType == "MULTISELECT" || fieldType == "MIXEDMULTISELECT")) {
        var ddl = fld.find(".select-input");
        ddl.data('FieldID', opt.FieldID ? opt.FieldID : ddl.ID());
        ddl.data('Eids', $.defaultVal(opt.Entity, ""));
        ddl.data('LookupCode', $.defaultVal(opt.FormCode, ""));
        ddl.data('FieldType', fieldType);
        ddl.data('Multi', (fieldType == "MULTISELECT" || fieldType == "MIXEDMULTISELECT")); 

        if (fieldType == "MULTISELECT" || fieldType == "MIXEDMULTISELECT")
            ddl.multiSelect({ input: ddl.closest('.erp-Field').find('.select-dropdown'), onItemAdding: onMixSelectItemAdding, onDropDownShowing: showSearchList });
        else {
            ddl.parent().on('click', function () { showSearchList($(this)); });
            ddl.parent().addClass('ui-list');
            //ddl.attr("autocomplete", "off").after("<a title='Clear' href='javascript:void(0)' style='display:none' onclick='if(!$(this).prev().isDisabled())$(this).hide().prev().val(\"\").removeData(\"RecordID\").removeData(\"EntityID\").trigger(\"" + (fieldType == "SINGLESELECT" || fieldType == "MIXEDSELECT" ? "selectchange" : "change") + "\");' class='del'>X</a>")
        }
        if (fieldType == "SINGLESELECT" && opt.Entity) {
            enableKeyboardForList(elem);
        }
    }
    else if (fieldType == "NUMBER" || fieldType == "DECIMAL" || fieldType == "CURRENCY" || fieldType == "PERCENT") {
        elem.autoNumeric('init', { vMin: -79228162514264337593543950335, vMax: 79228162514264337593543950335, mDec: (fieldType == "NUMBER" ? 0 : opt.Rounding == -1 ? 10 : Fn.CInt(opt.Rounding)), aPad: false, aSep: '', aSign: (fieldType == "PERCENT" ? ' %' : $.defaultVal(opt.Symbol, "")), pSign: 's' });
    }
    else if (fieldType == "DATETIME") {
        elem.materialDateTimepicker({ container: 'body', yearRange: 25, dateFormat: Users.ShortDateFormat_MOM, timeFormat: Users.TimeFormat_MOM });
    }
    else if (fieldType == "TIME") {
        elem.simpleTime({ dropdown: false, timeFormat: (Users.TimeFormat.indexOf("HH") >= 0 ? "HH:mm" : undefined) });
        //elem.materialTimepicker({  container: 'body', yearRange: 25, format: Users.TimeFormat_MOM });
    }
    else if (fieldType == "DATE") {
        elem.attr("placeholder", Users.ShortDateFormat).attr("_ph", Users.ShortDateFormat)
        elem.simpleDate({ yearRange: 25, format: Users.ShortDateFormat_MOM });
        //elem.materialDatepicker({  container: 'body', yearRange: 25, format: Users.ShortDateFormat_MOM });
    }
    if ($.isArray(opt.Items) && (fieldType == 'MULTISELECT' || fieldType == 'SINGLESELECT')) {
      Erp.DataBind(id,opt.Items)
    }
    if ($.isArray(opt.Items) && (fieldType == 'MULTISELECT' || fieldType == 'SINGLESELECT')) {
        elem.formSelect();
    }
    if (!$.isEmpty(elem.attr("placeholder")))
        elem.closest(".erp-Field").find("._lbl").addClass("active")
    if (opt.Disabled)
        f.SetEnable(false);
    if (refVal != "")
        __SetFieldValue(id, refVal);
    return f;
}

Erp.CreateChart = function (charttype, data) {
    var ctr;

    data = $.extend({
        ID: "", DataSource: null, Series: [], ToolTipTemplate: "",
        ChartTitle: "", IsToolTip: false, LegendPosition: "bottom"
        , IsYPercentage: false
        , Width: 0
        , Height: 0
        , IsLegend: true

        , ChartTitlePosition: "top"
        , YAxisName: ""
        , XAxisName: ""
        , ShowXAxisLabel: true
        , XLabelRotation: 0
        , IsStack: false
        , SeriesClick: ""


        , TitleFontSize: "9px"
         , YAxisLabelFontSize: "8px"
         , YAxisValueFontSize: "7px"
        , XAxisLabelFontSize: "8px"
        , LegendFontSize: "8px"
        , XAxisValueFontSize: "7px"
        , ToolTipFontSize: "8px"
        , CrossHair: true
        , CrossHairColor: (Erp.IsDarkTheme()? "white" : "black")
        , SeriesLabelFont: "8px"
        , SeriesLabelVisible: false
        , ConnectorWidth: "1px"
        , ConnectorColor: "red"

        , PageTheme: (Erp.IsDarkTheme() ? "MaterialBlack" : "Material")
    }, data);

    if (data.Series) {
        if (typeof data.Series == "string")
            data.Series = eval(data.Series);
    }
    if (typeof $telerik != "undefined" && data.ID instanceof $telerik.$)
        ctr = data.ID;
    else if (data.ID instanceof $)
        ctr = data.ID;
    else if (typeof $telerik != "undefined" && typeof $telerik.$ != "undefined" && typeof $telerik.$.fn.kendoChart != "undefined") {
        ctr = $.isEmpty(data.ID) ? $telerik.$("body") : $telerik.$("#" + data.ID);
        if ($.isEmpty(data.ID))
            return;
    }
    else {
        ctr = $.isEmpty(data.ID) ? $("body") : $("#" + data.ID);
        if ($.isEmpty(data.ID))
            return;
    }

    $(window).on("resize", $.debounce(260, function () {
        ctr.data("kendoChart").resize();
    }));

    ctr.kendoChart({
        theme: data.PageTheme,
        seriesDefaults: {
            type: $.defaultVal(charttype, 'column').toLowerCase()
            , stack: data.IsStack,
            labels:
    {
        visible: data.SeriesLabelVisible,
        font: data.SeriesLabelFont
    },
            connectors: {
                width: data.ConnectorWidth,
                color: data.ConnectorColor
            },
        },
        title: {
            text: data.ChartTitle,
            position: data.ChartTitlePosition,
            font: data.TitleFontSize
        },
        dataSource: {
            data: data.DataSource
        },
        tooltip: {
            visible: data.IsToolTip
        , template: data.ToolTipTemplate,
            font: data.ToolTipFontSize,
            color: "#fff",
            background: "blue"

        },
        legend: {
            visible: data.IsLegend,
            position: data.LegendPosition,
            labels: {
                font: data.LegendFontSize
            }

        },
        valueAxis: {
            labels: {
                format: data.IsYPercentage ? "{0}%" : "{0}",
                font: data.YAxisValueFontSize
            },
            title: {
                text: data.YAxisName,
                font: data.YAxisLabelFontSize
            },
            crosshair: {
                visible: data.CrossHair,
                color: data.CrossHairColor
            },
        },
        categoryAxis: {
            title: {
                text: data.XAxisName,
                font: data.XAxisLabelFontSize
            }
            ,
            labels: {
                visible: data.ShowXAxisLabel,
                rotation: data.XLabelRotation,
                font: data.XAxisValueFontSize
            },
            crosshair: {
                visible: data.CrossHair,
                color: data.CrossHairColor
            }


        },

        series: data.Series,
        seriesClick: data.SeriesClick,

    });
    if (Fn.CInt(data.Width)>0)
        ctr.width(data.Width);   
    if (Fn.CInt(data.height) > 0)
        ctr.height(data.height);

    ctr.data("kendoChart").resize();
    return ctr.data("kendoChart");
}

Erp.RefreshChart = function (id,repaint) {
    var ctr;
    if (typeof $telerik != "undefined" && id instanceof $telerik.$)
        ctr = id;   
    else if (typeof $telerik != "undefined" && typeof $telerik.$ != "undefined" && typeof $telerik.$.fn.kendoChart != "undefined") {
        if (id instanceof $)
            id = id.attr("id");
        ctr = $telerik.$("#" + id);
    }
    else {
        return;
    }
    var c=ctr.data("kendoChart");
    if(!c)
        return;
    
    if (repaint) {
        c.options.transitions = false;
        c.refresh();
        c.options.transitions = true;
    }
    else
        c.resize();
}


//Erp.CreateTable(tbl, [{ name: "col1", title: "col 1", width: 100, onCellRender:function(dr,col){} ,colCss: "",  colStyle: "" },{ name: "col1", title: "col 1", width: 100 }], 
//{id:"",container:"", showSerial:false, tableCss:"", tableStyle:"", rowCss: "", altRowCss: "", rowStyle: "", altRowStyle: "" });

Erp.CreateTable = function (tbl, cols, opt) {
    opt = $.extend({ id: "", container: "", showSerial: false, rowCss: "", altRowCss: "", rowStyle: "", altRowStyle: "" }, opt);
    opt.altRowCss = $.isEmpty(opt.altRowCss) ? opt.rowCss : opt.altRowCss;
    opt.altRowStyle = $.isEmpty(opt.altRowStyle) ? opt.rowStyle : opt.altRowStyle;
    if (!cols && tbl.length > 0) {
        cols = [];
        for (p in tbl[0])
            cols.push({ name: p, title: p, width: 100 });
    }
    var tblCtr = $("<table " + ($.isEmpty(opt.id) ? "" : "id=\"" + opt.id + "\" ") + " " + ($.isEmpty(opt.tableStyle) ? "" : "style=\"" + opt.tableStyle + "\" ") + " class='simple-grid" + ($.isEmpty(opt.tableCss) ? "" : " " + opt.tableCss) + "'></table>");
    var colGrp = "<colgroup>";
    var tbody = [];
    tbody.push("<thead>")
    tbody.push("<tr>")
    if (opt.showSerial == true) {
        tbody.push("<th></th>");
        colGrp += "<col style=\"width:20px\"></col>";
    }
    if (!cols)
        cols = [];
    for (var j = 0; j < cols.length; j++) {
        var col = cols[j];
        colGrp += "<col style=\"width:" + $.defaultVal(col.width, 10) + "px\"></col>";
        var st = $.defaultVal(col.colStyle, "") + (col.width < 0 ? ";display:none" : "");
        tbody.push("<th " + ($.isEmpty(st) ? "" : "style=\"" + st + "\" ") + ($.isEmpty(col.colCss) ? "" : "class=\"" + col.colCss + "\" ") + "  >" + $.defaultVal(col.title, col.name) + "</th>");
    }
    colGrp += "</colgroup>";
    tbody.push("</tr>")
    tbody.push("</thead>");
    tbody.push("<tbody>");
    for (var i = 0; i < tbl.length; i++) {
        var trcss = ($.isEmpty(opt.rowStyle) ? "" : "style=\"" + opt.rowStyle + "\" ") + ($.isEmpty(opt.rowCss) ? "" : "class=\"" + opt.rowCss + "\" ");
        if (i % 2 != 0)
            trcss = ($.isEmpty(opt.altRowStyle) ? "" : "style=\"" + opt.altRowStyle + "\" ") + ($.isEmpty(opt.altRowCss) ? "" : "class=\"" + opt.altRowCss + "\" ");
        tbody.push("<tr " + trcss + " >");
        if (opt.showSerial == true)
            tbody.push("<td>" + (i + 1) + "</td>");
        for (var j = 0; j < cols.length; j++) {
            var col = cols[j];
            var st = $.defaultVal(col.colStyle, "") + (col.width < 0 ? ";display:none" : "");
            var td = "";
            if (typeof col.onCellRender == "function") {
                td = col.onCellRender(tbl[i], col.name);
            }
            if (td == undefined || td == "")
                td = "<td " + ($.isEmpty(st) ? "" : "style=\"" + st + "\" ") + ($.isEmpty(col.colCss) ? "" : "class=\"" + col.colCss + "\" ") + " >" + ($.isEmpty(col.name) ? "" : $.defaultVal(tbl[i][col.name], "")) + "</td>";
            else if (td.indexOf("</td>") < 0)
                td = "<td " + ($.isEmpty(st) ? "" : "style=\"" + st + "\" ") + ($.isEmpty(col.colCss) ? "" : "class=\"" + col.colCss + "\" ") + " >" + td + "</td>";
            tbody.push(td);
        }
        tbody.push("</tr>");
    }
    tbody.push("</tbody>")
    tblCtr.append(colGrp + tbody.join(""));
    if (!$.isEmpty(opt.container)) {
        if (opt.container instanceof $)
            opt.container.append(tblCtr);
        else
            $("#" + opt.container).append(tblCtr);
    }
    return tblCtr;
}

Erp.DataBind = function (id,data) {
    var el =(id instanceof $?id: $("#" + id));
    if (el.prop("tagName") == "SELECT") {
        if ($.isArray(data)) {
            el.empty();
            for (var i = 0; i < data.length; i++) {
                var d = data[i];
                if (!d) continue;
                el.append("<option value=\"" + (d.hasOwnProperty("value") || d.hasOwnProperty("text") ? $.defaultVal(d.value, "") : d) + "\">" + (d.hasOwnProperty("text") || d.hasOwnProperty("value") ? $.defaultVal(d.text, "") : d) + "</option>");
            }
            if (Erp.Responsive)
                el.formSelect();
            else
                el.trigger("chosen:updated");
        }
    }
    else if (el.hasClass("chosen-container-multi")) {
        var arr = $.defaultVal(el.attr("item-val"), "").split(',');
        var arr2 = $.defaultVal(el.attr("item-txt"), "").split(',');
        var arr3 = [];
        if (arr.length > 0 && !$.isEmpty(arr[0])) {
            for (var i = 0; i < arr.length; i++) {
                if ($.isEmpty(arr[i]))
                    continue;
                arr3.push({ Text: $.defaultVal(arr2[i], "").Trim(), RecordID: arr[i].Trim() });
            }
        }
        Erp.SetFieldValue(el.attr("id"), arr3);
    }
    else if (el.hasClass("erp-Menu")) {
        el.empty();
        var ctr = $("<div class='ctr'>");
        el.append(ctr);
        if ($.isArray(data)) {
            for (var i = 0; i < data.length; i++) {
                var d = data[i];
                if (!d || d["pid"]) continue;
                __createMenuItem(d, data, ctr);
                
            }           
        }
    }
}

function __createMenuItem(data, arr, ctr) {
    var el = $('<li val="' + $.defaultVal(data["id"], "") + '" tag="' + $.defaultVal(data["tag"], "") + '" class="erp-control erp-MenuItem ' + $.defaultVal(data["css"], "") + '"><a class="waves-effect waves-teal"><i class="fa">' + $.defaultVal(data["icon"], "") + '</i><span>' +
        $.defaultVal(data["title"], "Menuitem") + '</span><span class="cnt">' + $.defaultVal(data["count"], "") + '</span><span class="arrow"></span></a><div class="menuitem-ctr"><ul></ul></div></li>');
    ctr.append(el);
    if (!data["id"])
        return;
    var ch = Fn.Filter(arr, function (r) { return r.pid == data["id"]; });
    if (ch.length > 0)
        el.addClass("isparent");
    var c = el.find("ul");
    for (var i = 0; i < ch.length; i++) {
        var d = ch[i];
        if (!d) continue;
        __createMenuItem(d, arr, c);
    }
}


Erp.Repeater = {};
Erp.Repeater._Cache = {};
Erp.Repeater._i = 0;
Erp.Repeater._rptrs = {};
Erp.Repeater._refs = {};
Erp.Repeater._inserts = {};
Erp.Repeater._changes = {};
Erp.Repeater._deletes = {};
Erp.Repeater._repeaterCommand = function (el) {
    el = $(el);
    if (el.hasClass("_dis"))
        return;
    var pagerEl=el.closest(".rpt-pager");
    var rptr = pagerEl.attr("rptid");
    var parentToken = pagerEl.attr("token");
    if (Fn.IsEmpty(rptr))
        return;
    var rptObj = Erp.Repeater._rptrs[rptr];
    if (!rptObj)
        return;
    if (el.hasClass("rpt-search-txt")) {
        if (!el[0].hasEvent) {
            el[0].hasEvent = true;
            el.on("keypress", function (e) {
                if(e.keyCode==13)
                    Erp.Repeater._repeaterCommandEx(rptObj, { command: "search", commandEl: $(this), commandArgs: $(this).val(), parentToken: parentToken });
            });
        }
    }
    else if (el.hasClass("rpt-sort-key")) {
        el.closest(".rpt-sort-keys").find(".rpt-sort-key").removeClass("_sel");
        el.addClass("_sel");
        el.closest(".rpt-sort-ctr").blur();       
        Erp.Repeater._repeaterCommandEx(rptObj, { command: "sort", commandEl: el, commandArgs: el.attr("val"), parentToken: parentToken });
    }
    else if (el.hasClass("rpt-search-btn"))
        Erp.Repeater._repeaterCommandEx(rptObj, { command: "search", commandEl: el, commandArgs: el.parent().find("input").val(), parentToken: parentToken });
    else if (el.hasClass("pgNum")) {
        el[0].setSelectionRange(el.val().length, el.val().length);
        if (!el[0].hasEvent) {
            el[0].hasEvent = true;
            el.on("change", function () {
                Erp.Repeater._repeaterCommandEx(rptObj, { command: "page", commandEl: $(this), commandArgs: Erp.Repeater.ApplyPageCommand(rptObj.id, Fn.CInt($(this).val()), parentToken), parentToken: parentToken });
            });
        }
    }
    else
        Erp.Repeater._repeaterCommandEx(rptObj, { command: "page", parentToken: parentToken, commandEl: el, commandArgs: Erp.Repeater.ApplyPageCommand(rptObj.id, el.attr("tag"), parentToken) })

}

Erp.Repeater._repeaterCommandEx = function (rptObj, arg) {
    var data = null;
    if (typeof rptObj.OnRepeaterCommand == "function") {
        data = rptObj.OnRepeaterCommand(rptObj.id, arg);
        if (data === false) return;
        if ($.isArray(data))
            data = Erp.Repeater._registerDataToCache(rptObj, arg.parentToken, data, true);
    }

    var paramData;
    if (!Fn.IsEmpty(rptObj.ds)) {

        if (typeof rptObj.OnParameterRequesting == "function") {
            var pgrEl = $(!arg.parentToken ? ("#" + rptObj.id + "_tpgr,#" + rptObj.id + "_bpgr") : ("#rpt_tpgr-" + arg.parentToken + ",#rpt_bpgr-" + arg.parentToken));
            paramData = rptObj.OnParameterRequesting(rptObj.id, { command: "parameter", parentToken: arg.parentToken, search: pgrEl.find(".rpt-search-txt").val(), sort: pgrEl.find(".rpt-sort-keys").find("._sel").eq(0).attr("val") });
            var pt = arg.parentToken ? Erp.Repeater.GetToken(arg.parentToken) : {};
            if (paramData) {
                paramData = $.extend(pt, paramData, { repeater: rptObj.id });
            }
        }
        if (paramData && paramData.sort)
            paramData["@" + rptObj.ds + ":Sort"] = paramData.sort;

        if (arg.command == "sort") {
            if (paramData)
                paramData["@" + rptObj.ds + ":Sort"] = arg.commandArgs;
            else
                Erp.SetParam(window, rptObj.ds + ":Sort", arg.commandArgs);
        }

        if (arg.command == "page") {
            data = Erp.Repeater._getDataFromCache(rptObj, arg.parentToken, arg.commandArgs)
        }
        else if (arg.command == "sort") {
            data = Erp.Repeater._getDataFromCache(rptObj, arg.parentToken, null, arg.commandArgs)
        }

    }
    if ($.isArray(data))
        Erp.Repeater.__Databind(rptObj.id, arg.parentToken, data, null);
    else if (!Fn.IsEmpty(rptObj.ds))
        Erp.Repeater.Databind(rptObj.id, rptObj.ds, arg.parentToken ? arg.parentToken : null, arg.commandArgs, paramData);
}

Erp.Repeater._initFields = function (tmpl) {
    tmpl.find("._rpt").add(tmpl.filter('._rpt')).each(function () {
        var c = $(this);
        if (c.hasClass("tabs-wrapper")) {
            c.swipeTab();
        }
        else if (c.hasClass("collapsible")) {
            c.collapsible({ accordion: false});
        }
        if ($.isEmpty(c.attr("rpt-fieldid")))
            return true;
        var inf = Fn.First(Erp.FieldInfo_Rptr, function (r) { return r.ID == c.attr("rpt-fieldid") });
        Erp.FieldInfo_Prog.push($.extend({}, inf, { ID: c.attr("id"), Name: c.attr("id") }));
        if (c.attr("rpt-oninit"))
            window[c.attr("rpt-oninit")](c, $.isEmpty(c.attr("rpt-onchange")) ? null : window[c.attr("rpt-onchange")]);

        if (c.prop("tagName") == "INPUT" && (!$.isEmpty(c.val()) || !$.isEmpty(c.attr("placeholder"))))
            c.parent().find("._lbl").addClass("active");
        else if (c.prop("tagName") == "TEXTAREA" && (!$.isEmpty(c.val()) || !$.isEmpty(c.attr("placeholder")))) {
            M.textareaAutoResize(c);
            c.parent().find("._lbl").addClass("active");
        }

    })
}

Erp.Repeater._registerDataToCache = function (rptObj, parentToken, arr, fromCmd) {
    if (arr && $.isArray(arr) && arr.length > 0 && !arr[0].hasOwnProperty("__count"))
        arr[0]["__count"] = arr.length;

    if (arr && $.isArray(arr) && (fromCmd || (arr.length > 0 && Fn.CInt(rptObj.pageSize) > 0 && Fn.CInt(rptObj.pageSize) < arr.length))) {        
        if (fromCmd) {
            if (arr && $.isArray(arr) && arr.length > 0)
                arr[0]["__count"] = arr.length;
            rptObj.totalRecords = arr.length;
            rptObj.totalPages = Math.ceil(rptObj.totalRecords / (rptObj.pageSize == 0 ? 1 : rptObj.pageSize));
            Erp.Repeater.ApplyPageCommand(rptObj.id, 0, parentToken ? parentToken : null);
        }
        if (!Erp.__rptrDataCache) Erp.__rptrDataCache = {};
        Erp.__rptrDataCache[rptObj.id + (parentToken ? "-" + parentToken : "")] = arr;
        arr = arr.slice(0, rptObj.pageSize);
    }
    return arr;
}
Erp.Repeater._getDataFromCache = function (rptObj, parentToken, pg, sort) {
    if (!Erp.__rptrDataCache) return null;
    var arr = Erp.__rptrDataCache[rptObj.id + (parentToken ? "-" + parentToken : "")];
    if (!arr) return null;
    if (sort) {
        Fn.Sort(arr, sort);
        arr = arr.slice(0, rptObj.pageSize);
        Erp.Repeater.ApplyPageCommand(rptObj.id, 0, parentToken ? parentToken : null);
    }
    else {
        var currIndex = Erp.Repeater.ApplyPageCommand(rptObj.id, pg, parentToken ? parentToken : null);
        arr = arr.slice((currIndex * rptObj.pageSize), (currIndex * rptObj.pageSize) + rptObj.pageSize);
    }
    return arr;
}

Erp.Repeater.Databind = function (repeaterId, data, parentToken, pg, _paramData, _arrParams) {
    var rptObj = Erp.Repeater._rptrs[repeaterId];
    if (!rptObj)
        return;
    var _ptk = Erp.Repeater.GetToken(parentToken);
    if (!_ptk) {
        pg = parentToken ? parentToken : pg;
        if (!$.isEmpty(rptObj.parent))
            return;
    }
    if (_ptk)
        rptObj = Erp.Repeater.GetPagerInfo(repeaterId, parentToken)
    if (!data) {
        rptObj.currPageIndex = 0;
        rptObj.totalRecords = 0;
        rptObj.totalPages = 0;
    }
    
    if (rptObj.allowPaging == 1 && typeof data == "string" && getDbRefInfo(data)) {
        pg = { CurrentPageIndex: Erp.Repeater.ApplyPageCommand(repeaterId, pg, _ptk?_ptk.token:null) };
        pg = $.extend({ EnablePaging:true, CurrentPageIndex: Fn.CInt(rptObj.currPageIndex), PageSize: Fn.CInt(rptObj.pageSize) }, pg);
        rptObj.currPageIndex = pg.CurrentPageIndex;
        $("#" + repeaterId + "-ctr" + (parentToken ? "-" + parentToken : "")).addClass("loading");
        Erp.LoadVariable(data, pg, function () {
            $("#" + repeaterId + "-ctr" + (parentToken ? "-" + parentToken : "")).removeClass("loading");
            var arr = window[data];
            arr = Erp.Repeater._registerDataToCache(rptObj, parentToken, arr);

            if (arr && $.isArray(arr) && arr.length > 0 && arr[0].hasOwnProperty("__count")) {
                rptObj.totalRecords = Fn.CInt(arr[0]["__count"])
                rptObj.totalPages = Math.ceil(rptObj.totalRecords / (rptObj.pageSize == 0 ? 1 : rptObj.pageSize));
            }
            else {
                rptObj.totalRecords = 0; rptObj.totalPages = 0;
            }
            Erp.Repeater.__Databind(repeaterId, parentToken, arr, _arrParams);
            if (rptObj.parent)
                window[data] = null;
        }, _paramData);
    }
    else {
        if (rptObj.allowPaging == 1) {
            if (typeof data == "string" && $.isArray(window[data]))
                data = window[data];
            data = Erp.Repeater._registerDataToCache(rptObj, parentToken, data);
            if (data && $.isArray(data) && data.length > 0 && data[0].hasOwnProperty("__count")) {
                rptObj.totalRecords = Fn.CInt(data[0]["__count"])
                rptObj.totalPages = Math.ceil(rptObj.totalRecords / (rptObj.pageSize == 0 ? 1 : rptObj.pageSize));
            }
            else {
                rptObj.totalRecords = 0; rptObj.totalPages = 0;
            }
            if (typeof data == "string")
                data = []
        }
        Erp.Repeater.__Databind(repeaterId, parentToken, data, _arrParams);
    }

}


Erp.Repeater.BindChildRepeaters = function (repeaterId, tokenArray, varName, pg) {
    var rptObj = Erp.Repeater._rptrs[repeaterId];
    if (!rptObj)
        return;
    varName = varName ? varName : rptObj.ds;
    if (!varName) return;
    var pg = { EnablePaging: Fn.CInt(rptObj.allowPaging) == 1, CurrentPageIndex: pg ? Erp.Repeater.ApplyPageCommand(repeaterId, pg, tokenArray[0].token) : 0, PageSize: Fn.CInt(rptObj.pageSize) };
    if (tokenArray) {
        for(var i=0;i<tokenArray.length;i++)
            $("#" + repeaterId + "-ctr" + (tokenArray[i].token ? "-" + tokenArray[i].token : "")).addClass("loading");
    }
    Erp.LoadVariable_Filtered(varName, tokenArray, pg, function (varname, params, result) {
        var _arrParams = {};//set this as null to load each subchild repeater data separately
        for (var i = 0; i < params.length; i++) {
            var arr = result["TABLEDATA$$" + (params[i].token ? params[i].token : i)];
            $("#" + repeaterId + "-ctr" + (params[i].token ? "-" + params[i].token : "")).removeClass("loading");
            //if (!arr || !params[i].token) continue;//alowing parent repeaters also to work 
            if (!arr) continue;
            
            Erp.Repeater.Databind(repeaterId, arr, params[i].token, pg, null, _arrParams);
        }
        
        for (p in _arrParams) {
            if (_arrParams[p] && _arrParams[p].length > 0) {
                var _rptObj = Erp.Repeater._rptrs[p];
                Erp.Repeater.BindChildRepeaters(p, _arrParams[p], _rptObj.ds);
            }
        }
    });
}

Erp.Repeater.__Databind = function (repeaterId, parentToken, data, _arrParams) {
    var rptObj = Erp.Repeater._rptrs[repeaterId];
    if (!rptObj || (!parentToken && !$.isEmpty(rptObj.parent)))
        return;
    var ptk = Erp.Repeater.GetToken(parentToken);
    var tmpl = "";
    var bindSubChild = _arrParams == null;
    _arrParams = _arrParams ? _arrParams : {};
    if (!ptk) {
        $("#" + repeaterId + "-begin").nextUntil("#" + repeaterId + "-end").remove();
        tmpl = Erp.Repeater._Cache[repeaterId + "-loop"](data);
    }
    else {
        $("#rpt-begin-" + ptk.token).nextUntil("#rpt-end-" + ptk.token).remove();
        
        var __srno = 0;
        var arrstr = [];
        for (var i = 0; i < data.length; i++) {
            var $i = data[i]; Erp.Repeater._i++;
            var $c = Erp.Repeater.GetDataContext(parentToken);
            __srno++;
            Erp.Repeater._refs['tk-' + Erp.Repeater._i] = { repeater: repeaterId, index: i, serial: __srno, token: 'tk-' + Erp.Repeater._i, parent: $c, data: $i };
            arrstr.push(Erp.Repeater._Cache[repeaterId]($i, { repeater: repeaterId, index: i, serial: __srno, token: 'tk-' + Erp.Repeater._i, parent: $c, data: $i }));
        }
        tmpl = arrstr.join('');
    }

    if (!Fn.IsEmpty(tmpl)) {
        tmpl = $(tmpl);
        if (!ptk)
            $("#" + repeaterId + "-end").before(tmpl);
        else
            $("#rpt-end-" + ptk.token).before(tmpl);
        Erp.Repeater._initFields(tmpl);

        if (typeof rptObj.OnItemDataBound == "function") {
            var tokens = Erp.Repeater.GetTokens(repeaterId);
            for (var i = 0; i < tokens.length; i++)
                rptObj.OnItemDataBound(repeaterId, { info: rptObj, token: tokens[i].token });
        }
        tmpl.find("._rptbegin").each(function () {           
            var rpt = Erp.Repeater._rptrs[$(this).attr("rptid")];
            if (!rpt)
                return true;
            var childtokens = Erp.Repeater.GetTokens(rpt.id, $(this).attr("token"));
            if (childtokens.length > 0 && typeof rpt.OnItemDataBound == "function") {
               
                for (var i = 0; i < childtokens.length; i++)
                    rpt.OnItemDataBound(rpt.id, { info: rpt, token: childtokens[i].token, parentToken: $(this).attr("token") });
            }

            if (childtokens.length==0 && typeof rpt.OnParameterRequesting == "function" && !$.isEmpty(rpt.ds)) {
                var pt = Erp.Repeater.GetToken($(this).attr("token"));
                var p = rpt.OnParameterRequesting(rpt.id, { command: "parameter", parentToken: $(this).attr("token") });
                if (!_arrParams[rpt.id]) _arrParams[rpt.id] = [];
                if (p) _arrParams[rpt.id].push($.extend(pt, p, { repeater: rpt.id }));
            }

            if (childtokens.length > 0 && typeof rpt.OnRepeaterDataBound == "function") {
                rpt.OnRepeaterDataBound(rpt.id, { info: rpt, parentToken: $(this).attr("token") });
            }
        })       
    }
    if (typeof rptObj.OnRepeaterDataBound == "function") {
        var _o = rptObj.OnRepeaterDataBound(repeaterId, { info: rptObj, parentToken: parentToken });
    }
    var inf = Erp.Repeater.GetPagerInfo(repeaterId, ptk ? ptk.token : null);
    var pgrEl = $(!ptk ? ("#" + repeaterId + "_tpgr,#" + repeaterId + "_bpgr") : ("#rpt_tpgr-" + ptk.token + ",#rpt_bpgr-" + ptk.token));
    if (pgrEl.length > 0) {
        pgrEl.addClass("bound")
        pgrEl.removeClass("hasPages");        
        pgrEl.find(".pg-cmd").find("A").removeClass("_dis").closest(".rpt-pager").addClass(inf.totalPages > 1 ? "hasPages" : "");
        if (inf.currentPageNumber <= 1)
            pgrEl.find(".pg-prev,.pg-first").addClass("_dis");
        if (inf.currentPageNumber == inf.totalPages)
            pgrEl.find(".pg-next,.pg-last").addClass("_dis");

        pgrEl.find(".pg-info").html(inf.startRecord + " to " + inf.endRecord + " of " + inf.totalRecords);
        pgrEl.find(".pgTotal").html(" / "+inf.totalPages);
        pgrEl.find(".pgNum").val(inf.currentPageNumber);
    }
    var tpgr = !ptk ? $("#" + repeaterId + "_tpgr") : $("#rpt_tpgr-" + ptk.token);
    var srch = tpgr.find(".rpt-search");
    if (srch.length > 0) {
        if (tpgr.parent().hasClass("erp-Repeater"))
            tpgr.parent().removeClass("noData");

        tpgr.removeClass("noData").find(".norecords").remove();
        if (!data || !$.isArray(data) || data.length == 0) {
            (tpgr.parent().hasClass("erp-Repeater") ? tpgr.parent() : tpgr).addClass("noData");
            tpgr.append("<div class='norecords'></div>");
        }
    }
    if (($.isEmpty(rptObj.parent) || bindSubChild) && _arrParams) {
        for (p in _arrParams) {
            if (_arrParams[p] && _arrParams[p].length > 0) {
                var _rptObj = Erp.Repeater._rptrs[p];
                Erp.Repeater.BindChildRepeaters(p, _arrParams[p], _rptObj.ds);
            }
        }
    }
}
Erp.Repeater.AddItem = function (repeaterId, token, data, ctx) {
    if (!data)
        data = {};
    var rptObj = Erp.Repeater._rptrs[repeaterId];
    if (!rptObj)
        return;
    var result = [];
    var tk = $.isEmpty(token) ? "" : ("-" + token);
    var rp = $.isEmpty(token) ? repeaterId : "rpt";
    var scr = $.isEmpty(token) ? $("#" + rp + "-end" + tk) : $("." + repeaterId + "-end._rptend").filter("#" + rp + "-end" + tk);
    var isArr = $.isArray(data);
    if (scr.exists()) {
        var sep = scr.prevUntil("#" + rp + "-begin" + tk).filter("." + repeaterId + "-sep");        
        data = $.isArray(data) ? data : [data];
        for (var i = 0; i < data.length; i++) {
            var c = null;
            var tk = "tk-" + (++Erp.Repeater._i);
            result.push(tk);
            if (ctx)
                c = ctx;
            else {
                c = { data: data[i], parent: Erp.Repeater.GetDataContext(token) };               
            }
            c.count = Fn.CInt(data.length); c.index = sep.length + i; c.serial = sep.length + 1 + i;
            c.token = tk; c.repeater = repeaterId;
            Erp.Repeater._refs[tk] = c;
            Erp.Repeater.MarkForInsert(tk);
            var tmpl = $(Erp.Repeater._Cache[repeaterId](data[i], c))
            scr.before(tmpl);            
            Erp.Repeater._initFields(tmpl);
            if (typeof rptObj.OnItemDataBound == "function") {
                var _o = rptObj.OnItemDataBound(repeaterId, { info: rptObj, token:tk });
            }
        }
    }
    return isArr ? result : result[0];
}
Erp.Repeater.InsertItem = function (repeaterId, token, data, ctx) {
    if (!data)
        data = {};
    var rptObj = Erp.Repeater._rptrs[repeaterId];
    if (!rptObj)
        return;
    var result = [];
    var tk = token;
    if ($.isEmpty(token))
        return;
    var rp = repeaterId;
    var scr = $("#rpt-sep-" + tk);
    var isArr = $.isArray(data);
    var pt = Erp.Repeater.GetParentToken(token);
    var pdc = Erp.Repeater.GetDataContext(pt);

    var tk1 = !pt ? "" : ("-" + pt.token);
    var rp = !pt ? repeaterId : "rpt";
    var scr2 = null;
    scr.prevUntil("#" + rp + "-begin" + tk1).each(function () {
        var s = $(this);
        if (s.hasClass(repeaterId + "-sep")) {
            scr2 = s
            return false;
        }
    });
    if (scr2) scr = scr2;
    else scr = $("#" + rp + "-begin" + tk1)


    if (scr.exists()) {       
        data = $.isArray(data) ? data : [data];
        var dc=Erp.Repeater.GetDataContext(token);
        for (var i = 0; i < data.length; i++) {
            var c = null;
            var tk = "tk-" + (++Erp.Repeater._i);
            result.push(tk);
            if (ctx)
                c = ctx;
            else {
                c = { data: data[i], parent: pdc };
            }
            c.count = Fn.CInt(dc.count) + Fn.CInt(data.length);
            c.index = (dc.index + "0") + i; c.serial = (dc.serial + "0") + 1 + i;
            c.token = tk; c.repeater = repeaterId;
            Erp.Repeater._refs[tk] = c;
            Erp.Repeater.MarkForInsert(tk);
            var tmpl = $(Erp.Repeater._Cache[repeaterId](data[i], c))
            scr.after(tmpl);
            Erp.Repeater._initFields(tmpl);
            if (typeof rptObj.OnItemDataBound == "function") {
                var _o = rptObj.OnItemDataBound(repeaterId, { info: rptObj, token: tk });
            }
        }
    }
    return isArr ? result : result[0];
}
Erp.Repeater.DeleteItem = function (tokens, deleteNow, clear) {
    tokens = $.isArray(tokens) ? tokens : [tokens];
    var arr = []; var dic = {};
    for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        if (token && token.hasOwnProperty("token"))
            token = token.token;
        var scr = $("#rpt-sep-" + token);
        if (scr.exists()) {
            var rptObj = Erp.Repeater._rptrs[scr.attr("rptid")];
            if (!rptObj)
                continue;
            if (!$.isArray(dic[rptObj.id]))
                dic[rptObj.id] = [];

            dic[rptObj.id].push(Erp.Repeater.GetToken(token));

            if (deleteNow == true && !$.isEmpty(scr.attr("recid"))) {
                var ent = new Erp.Entity(rptObj.eid, scr.attr("recid"));
                arr.push(ent)
            }
            else if (!clear)
                Erp.Repeater.MarkForDelete(token, { eid: Erp.Repeater._rptrs[scr.attr("rptid")].eid, id: scr.attr("recid") });
            var item = scr.prevUntil("." + scr.attr("class"));
            var coll = $();
            item.each(function () {
                if ($(this).hasClass("_rptbegin"))
                    return false;
                coll.push(this);
            });
            coll.remove();
            scr.remove();
        }
    }

    if (!clear)
        Erp.DeleteEntity(arr, function (r) {
            for (var p in dic) {
                var rptObj = Erp.Repeater._rptrs[p];
                if (typeof rptObj.OnItemDeleted == "function") {
                    rptObj.OnItemDeleted(rptObj.id, { info: rptObj, result: r, tokens: dic[p] });
                }
            }
        });
}
Erp.Repeater.ClearItems = function (repeaterId, parentToken) {
    var rptObj = Erp.Repeater._rptrs[repeaterId];
    if (!rptObj)
        return;
    Erp.Repeater.DeleteItem(Erp.Repeater.GetTokens(repeaterId, parentToken), false, true);
    rptObj.currPageIndex = 0;
    rptObj.totalRecords = 0;
    rptObj.totalPages = 0;
}

Erp.Repeater.GetPagerInfo = function (repeaterId,parentToken) {
    var rptObj = Erp.Repeater._rptrs[repeaterId];
    if (!rptObj || (!parentToken && !$.isEmpty(rptObj.parent)))
        return;
    if (parentToken) {
        if (!Erp.Repeater._rptrchild) Erp.Repeater._rptrchild = {};
        if (!Erp.Repeater._rptrchild[repeaterId + "-" + parentToken])
            Erp.Repeater._rptrchild[repeaterId + "-" + parentToken] = $.extend({
                totalRecords: Fn.CInt(rptObj.totalRecords), pageSize: Fn.CInt(rptObj.pageSize), totalPages: Fn.CInt(rptObj.totalPages),
                currentPageNumber: Fn.CInt(rptObj.currPageIndex) + 1, startRecord: (Fn.CInt(rptObj.currPageIndex) * Fn.CInt(rptObj.pageSize) + 1),
                endRecord: Math.min(Fn.CInt(rptObj.totalRecords), Fn.CInt(rptObj.currPageIndex) * Fn.CInt(rptObj.pageSize) + Fn.CInt(rptObj.pageSize))
            }, rptObj);

        var obj = Erp.Repeater._rptrchild[repeaterId + "-" + parentToken];
        obj.currentPageNumber = Fn.CInt(obj.currPageIndex) + 1;
        obj.startRecord = (Fn.CInt(obj.currPageIndex) * Fn.CInt(obj.pageSize) + 1);
        obj.endRecord = Math.min(Fn.CInt(obj.totalRecords), Fn.CInt(obj.currPageIndex) * Fn.CInt(obj.pageSize) + Fn.CInt(obj.pageSize));
        return obj;
    }
    return {
        totalRecords: Fn.CInt(rptObj.totalRecords), pageSize: Fn.CInt(rptObj.pageSize), totalPages: Fn.CInt(rptObj.totalPages),
        currentPageNumber: Fn.CInt(rptObj.currPageIndex) + 1, startRecord: (Fn.CInt(rptObj.currPageIndex) * Fn.CInt(rptObj.pageSize) + 1),
        endRecord: Math.min(Fn.CInt(rptObj.totalRecords), Fn.CInt(rptObj.currPageIndex) * Fn.CInt(rptObj.pageSize) + Fn.CInt(rptObj.pageSize))
    };
}
Erp.Repeater.ApplyPageCommand = function (repeaterId, pg,parentToken) {
    var rptObj = Erp.Repeater._rptrs[repeaterId];
    if (!rptObj || (!Erp.Repeater.GetToken(parentToken) && !$.isEmpty(rptObj.parent)))
        return 0;
    
    if (!$.isEmpty(rptObj.parent)) {
        rptObj = Erp.Repeater.GetPagerInfo(repeaterId, parentToken);
        if (!rptObj) return;
    }

    if (typeof pg == "string" && ["first", "last", "next", "prev"].indexOf(pg) > -1) {
        if (pg == "first")
            pg = 0;
        else if (pg == "last")
            pg = Math.max(Fn.CInt(rptObj.totalPages) - 1, 0);
        else if (pg == "next")
            pg = Math.min(Fn.CInt(rptObj.currPageIndex) + 1, Math.max(Fn.CInt(rptObj.totalPages) - 1, 0));
        else if (pg == "prev")
            pg = Math.max(Fn.CInt(rptObj.currPageIndex) - 1, 0);
    }
    else if (typeof pg == "string") {
        pg = Math.max(0, Fn.CInt(pg) - 1);
    }
    else if (typeof pg == "number")
        pg = pg;
    else
        pg = 0;
    if (pg >= Fn.CInt(rptObj.totalPages)) pg = Fn.CInt(rptObj.totalPages) - 1;
    if (pg < 0) pg = 0;
    rptObj.currPageIndex = pg;
    return pg;
}

Erp.Repeater.GetDataContext = function (token) {
    return Erp.Repeater._refs[token];
}
Erp.Repeater.GetItem = function (token) {
    var scr = $("#rpt-sep-" + token);
    if (scr.exists()) {
        var item = scr.prevUntil("." + scr.attr("class"));
        var coll = $();
        item.each(function () {
            if ($(this).hasClass("_rptbegin"))
                return false;
            coll=coll.add(this);
        });
        return coll;
    }
    return null;
}
Erp.Repeater.GetToken = function (token) {
    var scr = $("#rpt-sep-" + token);
    if (scr.exists()) {        
        return { id: $.defaultVal(scr.attr("recid"), ""), token: scr.attr("tk"), repeater: scr.attr("rptid") };
    }
    return null;
}
Erp.Repeater.GetParentItem = function (token) {
    var ctx = Erp.Repeater.GetDataContext(token);
    if (!ctx.parent)
        return null;

    return Erp.Repeater.GetItem(ctx.parent.token);
}
Erp.Repeater.GetParentToken = function (token) {
    var ctx = Erp.Repeater.GetDataContext(token);
    if (!ctx || !ctx.parent)
        return null;

    return Erp.Repeater.GetToken(ctx.parent.token);
}
Erp.Repeater.IsFirstItem = function (token) {
    var scr = $("#rpt-sep-" + token);
    if (scr.exists()) {
        var item = scr.prevUntil("." + scr.attr("class"));
        var coll = $();
        var isFirst = false;
        item.each(function () {
            if ($(this).hasClass("_rptbegin"))
                isFirst = true;
        });
        return isFirst;
    }
    return false;
}
Erp.Repeater.IsLastItem = function (token) {
    var scr = $("#rpt-sep-" + token);
    return scr.next().hasClass("_rptend")
}
Erp.Repeater.GetItems = function (repeaterId, token) {
    var tk = $.isEmpty(token) ? "" : ("-" + token);
    var rp = $.isEmpty(token) ? repeaterId : "rpt";
    var scr = $("#" + rp + "-begin" + tk);
    if (scr.exists()) {
        var item = scr.nextUntil("#" + rp + "-end" + tk).filter(":not(." + repeaterId + "-sep)");
        return item;
    }
    return null;
}
Erp.Repeater.GetTokens = function (repeaterId, token) {
    var tk = $.isEmpty(token) ? "" : ("-" + token);
    var rp = $.isEmpty(token) ? repeaterId : "rpt";
    var scr = $("#" + rp + "-begin" + tk);
    var arr = [];
    if (scr.exists()) {
        scr.nextUntil("#" + rp + "-end" + tk).each(function () {
            var s = $(this);
            if (s.hasClass(repeaterId + "-sep"))
                arr.push({ id: $.defaultVal(s.attr("recid"), ""), token: s.attr("tk"), repeater: s.attr("rptid") });
        })
    }
    return arr;
}
Erp.Repeater.GetNextToken = function (token, rptId, parentToken) {    
    var scr = token == "begin" ? $((parentToken ? ("#rpt-begin-" + parentToken) : ("#" + rptId + "-begin"))) : $("#rpt-sep-" + token);
    if (scr.length == 0) return null;
    var repeaterId = scr.attr("rptid");
    var p = token == "begin" ? Erp.Repeater.GetToken(parentToken) : Erp.Repeater.GetParentToken(token);
    var tk = !p ? "" : ("-" + p.token);
    var rp = !p ? repeaterId : "rpt";
    var result = null;
    scr.nextUntil("#" + rp + "-begin" + tk).each(function () {
        var s = $(this);
        if (s.hasClass(repeaterId + "-sep")) {
            result = { id: $.defaultVal(s.attr("recid"), ""), token: s.attr("tk"), repeater: s.attr("rptid") };
            return false;
        }
    });
    return result;
}
Erp.Repeater.GetPrevToken = function (token, rptId, parentToken) {
    var scr = token == "end" ? $((parentToken ? ("#rpt-end-" + parentToken) : ("#" + rptId + "-end"))) : $("#rpt-sep-" + token);
    if (scr.length == 0) return null;
    var repeaterId = scr.attr("rptid");
    var p = token == "end" ? Erp.Repeater.GetToken(parentToken) : Erp.Repeater.GetParentToken(token);
    var tk = !p ? "" : ("-" + p.token);
    var rp = !p ? repeaterId : "rpt";   
    var result = null;
    scr.prevUntil("#" + rp + "-begin" + tk).each(function () {
        var s = $(this);
        if (s.hasClass(repeaterId + "-sep")) {
            result = { id: $.defaultVal(s.attr("recid"), ""), token: s.attr("tk"), repeater: s.attr("rptid") };
            return false;
        }
    });
    return result;
}
Erp.Repeater.GetItemCount = function (repeaterId, token) {
    var tk = $.isEmpty(token) ? "" : ("-" + token);
    var rp = $.isEmpty(token) ? repeaterId : "rpt";
    var scr = $("#" + rp + "-begin" + tk);
    if (scr.exists()) {
        var item = scr.nextUntil("#" + rp + "-end" + tk).filter("." + repeaterId + "-sep");
        return item.length;
    }
    return 0;
}

Erp.Repeater.MarkForInsert = function (token, bit) {
    if (bit != false) {
        if ($("#rpt-sep-" + token).attr("recid")) {
            $("#rpt-sep-" + token).attr("_oldid", $("#rpt-sep-" + token).attr("recid"))
            $("#rpt-sep-" + token).removeAttr("recid");
        }
    }
    else
        $("#rpt-sep-" + token).attr("recid", $("#rpt-sep-" + token).attr("_oldid"));
    Erp.Repeater._inserts[token] = (bit != false);
}
Erp.Repeater.MarkForUpdate = function (token, field) {
    if (field === null) {
        delete Erp.Repeater._changes[token];
        return;
    }
    if (field === true) {
        Erp.Repeater._changes[token] = ["#ALL#"];
        return;
    }
    field = $.isArray(field) ? field : [field];
    if (field.length == 0 || $.isEmpty(field[0]))
        return;
    if (!$.isArray(Erp.Repeater._changes[token]))
        Erp.Repeater._changes[token] = [];
    
    for (var i = 0; i < field.length; i++)
        Erp.Repeater._changes[token].push(field[i]);
    
}
Erp.Repeater.MarkForDelete = function (token, obj) {
    Erp.Repeater._deletes[token] = obj;
}
Erp.Repeater.SaveChanges = function (repeaterId) {
    repeaterId = $.isArray(repeaterId) ? repeaterId : [repeaterId];
    Erp.HideMessage("elValidationMsg");
    var valid = true;
    var arr = [];
    for (var zz = 0; zz < repeaterId.length; zz++) {
        var rptObj = Erp.Repeater._rptrs[repeaterId[zz]];
        if (!rptObj)
            return false;
        var rpts = $("#" + repeaterId[zz] + "-ctr").find("._rptsave");

        rpts.each(function () {
            var r = $(this);
            var di = Erp.Repeater.GetTokens(r.attr("rptid"), r.attr("token"));
            var rpt = Erp.Repeater._rptrs[r.attr("rptid")];
            if (!rpt)
                return true;
            var entityId = rpt.eid;
            $(di).each(function () {
                var sep = this;
                var item = Erp.Repeater.GetItem(sep.token);
                var ctx = Erp.Repeater.GetDataContext(sep.token);
                var ent = new Erp.Entity(entityId, sep.id, sep.token);
                arr.push(ent);
                var changes = ($.isArray(Erp.Repeater._changes[sep.token]) ? Erp.Repeater._changes[sep.token] : []);
                ent.Data("__FromGrid", true);
                ent._data["__RPTRID"] = rptObj.id;
                if (!$.isEmpty(rpt.fid))
                    ent.Data(rpt.fid, $.defaultVal(r.attr("recid"), ("#TOKEN#:" + r.attr("token"))));

                var fields = item.find("." + sep.token);
                fields.each(function () {
                    var f = $(this);

                    if ($.isEmpty(f.attr("rpt-dm")))
                        return true;
                    var v = Erp.GetFieldValue(f.attr("id") ? f.attr("id") : f);
                    var __v = v;
                    var hasChanges = changes[0] == "#ALL#" || changes.indexOf(f.attr("rpt-dm")) >= 0 || Erp.Repeater._inserts[sep.token];
                    if (ctx.data.hasOwnProperty(f.attr("rpt-dm")) && !hasChanges) {
                        var inf = Erp.GetFieldInfo(f.attr("id"));
                        if (!inf) inf = {};
                        var dt = $.defaultVal(inf.Type, "").toLowerCase();
                        if (dt == "datetime" || dt == "date" || dt == "time") {
                            __v = moment(v, "YYYY-MM-DD hh:mm A").toDate();
                            if (moment($.defaultVal(ctx.data[f.attr("rpt-dm")], "")).format("YYYY-MM-DD hh:mm A") != moment(__v).format("YYYY-MM-DD hh:mm A"))
                                hasChanges = true;
                        }
                        else if (dt == "multi") {
                            if ($.isArray(v) && v.join(', ') != $.defaultVal(ctx.data[f.attr("rpt-dm")], ""))
                                hasChanges = true;
                        }
                        else if ($.defaultVal(v, "") != $.defaultVal(ctx.data[f.attr("rpt-dm")], ""))
                            hasChanges = true;
                        if (hasChanges) {
                            if (!$.isArray(Erp.Repeater._changes[sep.token]))
                                Erp.Repeater._changes[sep.token] = [];
                            Erp.Repeater._changes[sep.token].push(f.attr("rpt-dm"))
                        }
                    }
                    if (hasChanges) {
                        ctx.data[f.attr("rpt-dm")] = __v;
                        ent.Data(f.attr("rpt-dm"), v);
                    }
                });


                if (!(($.isArray(Erp.Repeater._changes[sep.token]) && Erp.Repeater._changes[sep.token].length > 0) || Erp.Repeater._inserts[sep.token])) {
                    arr.pop();
                    return true;
                }
                if (typeof rpt.OnItemSaving == "function") {
                    var _o = rpt.OnItemSaving(rpt.id, { info: rpt, token: sep.token, entityId: entityId, entity: ent, entityList: arr, item: item });
                    if (_o === false) {
                        valid = false; return false;
                    }
                    else if (_o === null) {
                        arr.pop(); valid = true; return true;
                    }
                }
                if (!valid)
                    return false;
                fields.each(function () {
                    var f = $(this);
                    if ($.isEmpty(f.attr("rpt-dm")))
                        return true;
                    if (!Erp.ValidateData([f.attr("id")])) {
                        valid = false;
                        return false;
                    }
                });
                if (!valid)
                    return false;

                
                
            });
            if (!valid)
                return false;
        });
    }
    if (!valid)
        return false;

    for (var p in Erp.Repeater._deletes) {
        var d = Erp.Repeater._deletes[p];
        if (!d || $.isEmpty(d.id))
            continue;
        var ent = new Erp.Entity(d.eid, d.id, p);
        ent._data["__Mode"] = "Delete";
        arr.push(ent)
    }

    console.log(arr);
    for (var zz = 0; zz < repeaterId.length; zz++) {
        var rptObj = Erp.Repeater._rptrs[repeaterId[zz]];
        var evt = rptObj.OnRepeaterSaving;
        if (typeof evt == "function" && evt(repeaterId[zz], { info: rptObj, entityList: repeaterId.length == 1 ? arr : Fn.Filter(arr, function (a) { return a._data["__RPTRID"] == repeaterId[zz]; }) }) == false)
            return false;
    }
    Erp.SaveEntity(arr, function (result) { Erp.Repeater._callback(repeaterId, result); });
    return true;
}
Erp.Repeater._callback = function (repeaterId,result) {
    console.log(result);

    if (result && result.length > 0) {
        if (result[0]["___Script"]) {
            eval(result[0]["___Script"]);
        }
        delete result[0]["___Script"];
    }

    for (var zz = 0; zz < repeaterId.length; zz++) {
        var rptObj = Erp.Repeater._rptrs[repeaterId[zz]];
        if (!rptObj)
            return;
        if (result) {
            for (var i = 0; i < result.length; i++) {
                var r = result[i];
                if (!r.Identifier || r.Identifier.indexOf("tk-") < 0)
                    continue;
                var tr = $("#rpt-sep-" + r.Identifier);
                if (tr.length == 0)
                    continue;
                //if (tr.before().hasClass("saveError"))
                //tr.before().remove();
                if (!r.Success) {
                    //tr.before("<span class='saveError' title=\"" + $.encodeXml(r.Message, true) + "\"></span>");
                    continue;
                }

                tr.removeClass("rowChanged").children().removeClass("modified").removeData("__dbValue");
                tr.attr("recid", r.RecordID);
                $("#rpt-begin-" + r.Identifier).attr("recid", r.RecordID);
                delete Erp.Repeater._inserts[r.Identifier]
                delete Erp.Repeater._changes[r.Identifier]
                delete Erp.Repeater._deletes[r.Identifier]
            }
        }
        var evt = rptObj.OnSaveComplete;
        if (typeof evt == "function")
            evt(repeaterId, { info: rptObj, result: repeaterId.length == 1 ? result : Fn.Filter(result, function (a) { return a["__RPTRID"] == repeaterId[zz]; }) });
    }


}

Erp.Repeater.OnItemSaving = function (repeaterId, func) {
    var rpt = Erp.Repeater._rptrs[repeaterId];
    if (!rpt)
        return;
    rpt.OnItemSaving = func;
}
Erp.Repeater.OnRepeaterSaving = function (repeaterId, func) {
    var rpt = Erp.Repeater._rptrs[repeaterId];
    if (!rpt)
        return;
    rpt.OnRepeaterSaving = func;
}
Erp.Repeater.OnSaveComplete = function (repeaterId, func) {
    var rpt = Erp.Repeater._rptrs[repeaterId];
    if (!rpt)
        return;
    rpt.OnSaveComplete = func;
}
Erp.Repeater.OnRepeaterDataBound = function (repeaterId, func) {
    var rpt = Erp.Repeater._rptrs[repeaterId];
    if (!rpt)
        return;
    rpt.OnRepeaterDataBound = func;
}
Erp.Repeater.OnRepeaterCommand = function (repeaterId, func) {
    var rpt = Erp.Repeater._rptrs[repeaterId];
    if (!rpt)
        return;
    rpt.OnRepeaterCommand = func;
}
Erp.Repeater.OnParameterRequesting = function (repeaterId, func) {
    var rpt = Erp.Repeater._rptrs[repeaterId];
    if (!rpt)
        return;
    rpt.OnParameterRequesting = func;
}
Erp.Repeater.OnItemDataBound = function (repeaterId, func) {
    var rpt = Erp.Repeater._rptrs[repeaterId];
    if (!rpt)
        return;
    rpt.OnItemDataBound = func;
}
Erp.Repeater.OnItemDeleted = function (repeaterId, func) {
    var rpt = Erp.Repeater._rptrs[repeaterId];
    if (!rpt)
        return;
    rpt.OnItemDeleted = func;
}

Erp.Repeater.OnItemDragBegin = function (repeaterId, func) {
    var rpt = Erp.Repeater._rptrs[repeaterId];
    if (!rpt)
        return;
    rpt.OnItemDragBegin = func;
}
Erp.Repeater.OnItemDragging = function (repeaterId, func) {
    var rpt = Erp.Repeater._rptrs[repeaterId];
    if (!rpt)
        return;
    rpt.OnItemDragging = func;
}
Erp.Repeater.OnItemDropping = function (repeaterId, func) {
    var rpt = Erp.Repeater._rptrs[repeaterId];
    if (!rpt)
        return;
    rpt.OnItemDropping = func;
}
Erp.Repeater.OnItemDropped = function (repeaterId, func) {
    var rpt = Erp.Repeater._rptrs[repeaterId];
    if (!rpt)
        return;
    rpt.OnItemDropped = func;
}
Erp.Repeater.OnItemDragCompleted = function (repeaterId, func) {
    var rpt = Erp.Repeater._rptrs[repeaterId];
    if (!rpt)
        return;
    rpt.OnItemDragCompleted = func;
}

Erp.Repeater._initDrag = function (event) {
    if ((event.type === 'mousedown' && event.button != 0) || (event.type === 'touchstart' && event.touches.length > 1))
        return;
    var el = $(event.target);
    el = el.hasClass("rpt-draggable") ? el : el.closest(".rpt-draggable");
    if (el.length == 0 || Fn.IsEmpty(el.attr("rpt-tk"))) return;
    var tkn = Erp.Repeater.GetToken(el.attr("rpt-tk"));
    var rptObj = Erp.Repeater._rptrs[tkn.repeater];
    if (!rptObj || rptObj.allowDrag != 1) return;
    event.preventDefault();
    var h = null;
    var tokenList = null;
    if (typeof rptObj.OnItemDragBegin == "function") {
        var _arg = { action: "Begin", fromRepeater: rptObj.id, token: tkn, tokenList: null };
        var _o = rptObj.OnItemDragBegin(rptObj.id, _arg);
        if (_arg.tokenList && $.isArray(_arg.tokenList) && _arg.tokenList.length > 1)
            tokenList = _arg.tokenList;
        if (_o === false) {
            return false;
        }
        else if (_o instanceof $) {
            h = _o;
        }
    }

    if (tokenList) {
        for (var i = 0; i < tokenList.length; i++) {
            Erp.Repeater.GetItem(tokenList[i]).addClass("rpt-dragging");
        }
    }
    else
        Erp.Repeater.GetItem(tkn.token).addClass("rpt-dragging");

    $("#rpt-dragHelper,#rpt-placeholder1,#rpt-placeholder2").remove();
    $(document.body).append("<div id='rpt-dragHelper' class='" + rptObj.id + "-dragHelper'></div>");
    var draggingElement = $("#rpt-dragHelper")[0];

    draggingElement.style.left = '-1000px';
    draggingElement.style.top = '-1000px';
    draggingElement.clientX = Erp.Repeater._getClientX(event); draggingElement.clientY = Erp.Repeater._getClientY(event);
    draggingElement.repeaterId = tkn.repeater; draggingElement.token = tkn.token;
    draggingElement.tokenList = tokenList;
    draggingElement.skip = null; draggingElement.started = null;
    draggingElement.dropMode = null;
    draggingElement.dropModerptid = null;
    draggingElement.dropModeparent = null;
    var _pt = Erp.Repeater.GetParentToken(tkn.token);
    draggingElement.ptk = _pt ? _pt.token : "";
    if (h)
        $(draggingElement).append(h);

    if (event.type === 'touchstart') {
        event.target.addEventListener('touchmove', Erp.Repeater._dragElement);
        event.target.addEventListener('touchend', Erp.Repeater._endDrag);
    } else {
        document.addEventListener('mousemove', Erp.Repeater._dragElement);
        document.addEventListener('mouseup', Erp.Repeater._endDrag);
    }

}
Erp.Repeater._dragElement = function (event) {

    event.preventDefault();
  
    var draggingElement = $("#rpt-dragHelper")[0];
    if (!draggingElement.started) {
        draggingElement.started = true;
        //Erp.Repeater.GetItem(draggingElement.token).addClass("rpt-dragging");
    }
    
    draggingElement.style.left = $(document).scrollLeft() + Erp.Repeater._getClientX(event) + 10 + 'px';
    draggingElement.style.top = $(document).scrollTop() + Erp.Repeater._getClientY(event) + 10 + 'px';
    // pl.hide();
    var scrollSpeed = 5; // Adjust the scrolling speed
    var scrollThreshold = 50; //    
    var el = $($.elementFromPoint(Erp.Repeater._getClientX(event), Erp.Repeater._getClientY(event)));
    //Erp.Console(el);
    if (!el[0]) { Erp.Console("1"); return; };
    if (el.hasClass("rpt-placeholder")) { Erp.Console("1.1"); return; };

    

    var containerScrollParent = Erp.Repeater._findScrollParent(el[0]);
    if (!containerScrollParent) { Erp.Console(el[0]); Erp.Console("2"); return; };
    var containerRect = containerScrollParent.getBoundingClientRect();

    var containerScrollLeft = containerScrollParent.scrollLeft || window.pageXOffset || document.documentElement.scrollLeft;
    var containerScrollTop = containerScrollParent.scrollTop || window.pageYOffset || document.documentElement.scrollTop;

    var cursorX = Erp.Repeater._getClientX(event);
    var cursorY = Erp.Repeater._getClientY(event);
    var scrollX = 0;
    var scrollY = 0;

    if (cursorX >= Math.max(containerRect.left, 0) && cursorX <= Math.max(containerRect.left, 0) + scrollThreshold && containerScrollLeft > 0) {
        // Cursor near the left edge, scroll left
        scrollX = -1;
    } else if (cursorX >= Math.min(containerRect.width + containerRect.left, window.innerWidth) - scrollThreshold && cursorX <= Math.min(containerRect.width + containerRect.left, window.innerWidth)) {
        // Cursor near the right edge, scroll right
        scrollX = 1;
    }

    if (cursorY >= Math.max(containerRect.top, 0) && cursorY <= Math.max(containerRect.top, 0) + scrollThreshold && containerScrollTop > 0) {
        // Cursor near the top edge, scroll up
        scrollY = -1;
    } else if (cursorY >= Math.min(containerRect.height + containerRect.top, window.innerHeight) - scrollThreshold && cursorY <= Math.min(containerRect.height + containerRect.top, window.innerHeight)) {
        // Cursor near the bottom edge, scroll down
        scrollY = 1;
    }

    if (scrollX !== 0) {
        containerScrollParent.scrollLeft += scrollX * scrollSpeed;
    }
    if (scrollY !== 0) {
        containerScrollParent.scrollTop += scrollY * scrollSpeed;
    }


    if (el.hasClass("erp-Repeater") || !el.attr("rpt-tk")) {
        while (el[0]) {
            if (el.hasClass("erp-Repeater") && el.find("." + el.attr("rptid") + "-sep").length == 0) {el = el.attr("rpt-tk") ? $("#rpt-begin-" + el.attr("rpt-tk")) : $("#" + el.attr("rptid") + "-begin"); break; }
            if (el.attr("rpt-tk")) break;
            el = el.parent();
        }
    }
    if (!el.attr("rpt-tk") && !el.hasClass("_rptbegin")) {
        Erp.Console(el[0]); Erp.Console("3");
        if (!el.closest("erp-Repeater").length==0)//to prevent flicker within repeater.placeholder1 should hide only if outside a repeater
            $("#rpt-placeholder1,#rpt-placeholder2").attr("class", "rpt-placeholder init");
        return;
    };

    if (el.attr("rpt-tk") && el.hasClass("erp-Repeater") && el.find("." + el.attr("rptid") + "-sep").length > 0) {//to prevent flickering.placeholder is jumping to parent repeater due to el.attr("rpt-tk").if focussed element is child repeater and has children then returning
        Erp.Console("3.1"); return;
    }
    var tkn = el.hasClass("_rptbegin") ? { token: "begin", repeater: el.attr("rptid") } : Erp.Repeater.GetToken(el.attr("rpt-tk"));
   
    var rptObj = Erp.Repeater._rptrs[tkn.repeater]; 
    if (rptObj.id != draggingElement.repeaterId && rptObj.allowDrop != 1)
    { Erp.Console("4"); $("#rpt-placeholder1,#rpt-placeholder2").attr("class", "rpt-placeholder init"); return; };

    if (draggingElement.dropMode && !Fn.Eq(draggingElement.dropMode, "Default")) {
        var _pl = $("#rpt-placeholder1,#rpt-placeholder2").filter(":not(.init)").eq(0);
        if (draggingElement.dropModerptid == rptObj.id && _pl.attr("rptid") == rptObj.id && $.defaultVal(draggingElement.dropModeparent, "") == $.defaultVal((el.hasClass("erp-Repeater") ? el : el.closest(".erp-Repeater")).attr("rpt-tk"), "")) {
            Erp.Repeater._scrollIntoView($("#rpt-placeholder1,#rpt-placeholder2").filter(":not(.init)").eq(0)[0]);
            Erp.Console("4.1"); return;
        }
    }

    var pl1 = $("#rpt-placeholder1");
    if (pl1.length == 0) {
        $(document.body).append("<div id='rpt-placeholder1' class='rpt-placeholder init'></div>"); pl1 = $("#rpt-placeholder1");
    }
    var pl2 = $("#rpt-placeholder2");
    if (pl2.length == 0) {
        $(document.body).append("<div id='rpt-placeholder2' class='rpt-placeholder init'></div>"); pl2 = $("#rpt-placeholder2");
    }
    pl1.attr("class", "rpt-placeholder init").show(); pl2.attr("class", "rpt-placeholder init").show();
    if (el.hasClass("_rptbegin"))
        el.after(pl1);
    else
        $("#rpt-sep-" + tkn.token).before(pl1);
    pl1.attr("tkn", tkn.token);
    pl1.attr("rptid", tkn.repeater); pl2.attr("rptid", tkn.repeater);
    var _pt = Erp.Repeater.GetParentToken(tkn.token);
    pl1.attr("ptk", _pt ? _pt.token : ""); pl2.attr("ptk", _pt ? _pt.token : "");
    var prev = el.hasClass("_rptbegin") ? null : Erp.Repeater.GetPrevToken(el.attr("rpt-tk"));
    if (prev) {
        $("#rpt-sep-" + prev.token).before(pl2);
        pl2.attr("tkn", prev.token);
    }
    else {
        
        if (el.hasClass("_rptbegin"))
            el.after(pl2);
        else {
            var pt = Erp.Repeater.GetParentToken(tkn.token); 
            if (pt)
                $("#rpt-begin-" + pt.token).after(pl2);
            else
                $("#" + tkn.repeater + "-begin").after(pl2);
        }
        pl2.attr("tkn", "begin");
    }
    if (pl1.attr("tkn") == "begin" && pl1.prev().attr("token")) {
        pl1.attr("ptoken", pl1.prev().attr("token"))
    }
    if (pl2.attr("tkn") == "begin" && pl2.prev().attr("token")) {
        pl2.attr("ptoken", pl2.prev().attr("token"))
    }
    Erp.Console(Erp.Repeater._getClientX(event) + "," + Erp.Repeater._getClientY(event))
    var r1 = pl1[0].getBoundingClientRect(); var r2 = pl2[0].getBoundingClientRect();
    if (draggingElement.token == pl1.attr("tkn")) {
        pl2.attr("class", "rpt-placeholder");
        //pl2.attr("class", "rpt-placeholder init"); //pl2.attr("class", "rpt-placeholder init");
        Erp.Console("pl2")
    }
    else if (draggingElement.token == pl2.attr("tkn")) {
        pl1.attr("class", "rpt-placeholder");
        //pl1.attr("class", "rpt-placeholder init"); //pl2.attr("class", "rpt-placeholder init");
        Erp.Console("pl1")
    }
    else if (Erp.Repeater._distance(Erp.Repeater._getClientX(event), Erp.Repeater._getClientY(event), r1.left, r1.top) <= Erp.Repeater._distance(Erp.Repeater._getClientX(event), Erp.Repeater._getClientY(event), r2.left, r2.top)) {
        pl1.attr("class", "rpt-placeholder");
        Erp.Console("pl1 " + Erp.Repeater._distance(Erp.Repeater._getClientX(event), Erp.Repeater._getClientY(event), r1.left, r1.top) + "," + Erp.Repeater._distance(Erp.Repeater._getClientX(event), Erp.Repeater._getClientY(event), r2.left, r2.top))
    }
    else {
        pl2.attr("class", "rpt-placeholder");
        Erp.Console("pl2 " + Erp.Repeater._distance(Erp.Repeater._getClientX(event), Erp.Repeater._getClientY(event), r1.left, r1.top) + "," + Erp.Repeater._distance(Erp.Repeater._getClientX(event), Erp.Repeater._getClientY(event), r2.left, r2.top))
    }


    var pl = $("#rpt-placeholder1,#rpt-placeholder2").filter(":not(.init)");
    var prev2 = Erp.Repeater.GetPrevToken(draggingElement.token);

    if (!draggingElement.tokenList && draggingElement.token == pl.attr("tkn") || (prev2 && prev2.token == pl.attr("tkn")) || (!prev2 && pl.attr("rptid") == draggingElement.repeaterId && pl.attr("tkn") == "begin" && pl.attr("ptk") == draggingElement.ptk)) {
        Erp.Console("no-change");
        draggingElement.prev = "-1"
        pl.attr("class", "rpt-placeholder init");
    }
    else {
        var scr = pl.attr("tkn") == "begin" ? pl.prev() : $("#rpt-sep-" + pl.attr("tkn"));
        if (scr.hasClass("rpt-placeholder")) scr = scr.prev(); if (scr.hasClass("rpt-placeholder")) scr = scr.prev();
        draggingElement.dropMode = null;
        draggingElement.dropModerptid = null;
        draggingElement.dropModeparent = null;
        

        if (rptObj && typeof rptObj.OnItemDragging == "function") {
            var scrTk = scr.attr("tk") ? scr.attr("tk") : scr.attr("rptid");
            var parentRefToken = (scr.hasClass("_rptbegin") && scr.attr("token") ? Erp.Repeater.GetToken(scr.attr("token")) : Erp.Repeater.GetParentToken(scr.attr("tk")));
            
            if (!draggingElement.prev || draggingElement.prev != scrTk) {
                draggingElement.prev = scrTk;
                draggingElement.skip = null;
                var _arg = { action: "Dragging", dragMode: $.defaultVal(draggingElement.dragMode,"default"), fromRepeater: draggingElement.repeaterId, toRepeater: rptObj.id, token: Erp.Repeater.GetToken(draggingElement.token), tokenList: draggingElement.tokenList, refToken: Erp.Repeater.GetNextToken(pl.attr("tkn") == "begin" ? "begin" : scr.attr("tk"), scr.attr("rptid")), parentRefToken: parentRefToken,dropMode:"default" };
                var _o = rptObj.OnItemDragging(rptObj.id, _arg);
                if (_o === false) {
                    $("#rpt-placeholder1,#rpt-placeholder2").attr("class", "rpt-placeholder init");
                    draggingElement.skip = true;
                }
                draggingElement.dropMode = _arg.dropMode;
                draggingElement.dropModerptid = rptObj.id;
                draggingElement.dropModeparent = parentRefToken ? parentRefToken.token : "";
                
                if (_arg.dropMode == "first") {
                    $("#rpt-placeholder1,#rpt-placeholder2").attr("class", "rpt-placeholder init");
                    if (parentRefToken)
                        $("#rpt-begin-" + parentRefToken.token).after($("#rpt-placeholder1").attr("class", "rpt-placeholder"));
                    else
                        $("#" + rptObj.id + "-begin").after($("#rpt-placeholder1").attr("class", "rpt-placeholder"));

                    $("#rpt-placeholder1").attr("tkn", "begin"); $("#rpt-placeholder1").attr("ptk", parentRefToken ? parentRefToken.token : ""); $("#rpt-placeholder1").attr("ptoken", parentRefToken ? parentRefToken.token : "");                    
                    Erp.Repeater._scrollIntoView($("#rpt-placeholder1")[0]); 

                }
                else if (_arg.dropMode == "last") {
                    $("#rpt-placeholder1,#rpt-placeholder2").attr("class", "rpt-placeholder init");
                    if (parentRefToken)
                        $("#rpt-end-" + parentRefToken.token).before($("#rpt-placeholder1").attr("class", "rpt-placeholder"));
                    else
                        $("#" + rptObj.id + "-end").before($("#rpt-placeholder1").attr("class", "rpt-placeholder"));
                    $("#rpt-placeholder1").attr("tkn", $("#rpt-placeholder1").prev().hasClass("_rptbegin") ? "begin" : $("#rpt-placeholder1").prev().attr("tk")); $("#rpt-placeholder1").attr("ptk", parentRefToken ? parentRefToken.token : ""); $("#rpt-placeholder1").attr("ptoken", parentRefToken ? parentRefToken.token : "");
                    Erp.Repeater._scrollIntoView($("#rpt-placeholder1")[0]);

                }
            }
            if (draggingElement.skip)
                $("#rpt-placeholder1,#rpt-placeholder2").attr("class", "rpt-placeholder init");
        }

    }

    Erp.Console($("#rpt-placeholder1,#rpt-placeholder2").attr("class"))
}
Erp.Repeater._endDrag = function (event) {
    event.preventDefault();
    var draggingElement = $("#rpt-dragHelper")[0];
    if (!draggingElement) return;
    if (Fn.IsEmpty(draggingElement.token)) return;
    var item = Erp.Repeater.GetItem(draggingElement.token).removeClass("rpt-dragging");
    if (draggingElement.tokenList) {
        for (var i = 0; i < draggingElement.tokenList.length; i++) {
            Erp.Repeater.GetItem(draggingElement.tokenList[i]).removeClass("rpt-dragging");
        }
    }   
    var pl = $("#rpt-placeholder1,#rpt-placeholder2").filter(":not(.init)");
    var cancel = false; var scr = null; var handled = false; var success = false; var refToken = null; var parentRefToken = null;
    if (pl.length > 0) {

        var prev = Erp.Repeater.GetPrevToken(draggingElement.token);
        var tkn = Erp.Repeater.GetToken(pl.attr("tkn"));

        var rptObj = Erp.Repeater._rptrs[pl.attr("rptid")];

        if (!draggingElement.tokenList && draggingElement.token == pl.attr("tkn") || (prev && prev.token == pl.attr("tkn"))) {
            //Erp.Console("no-change")

        }
        else {
            cancel = false;
            scr = pl.attr("tkn") == "begin" ? pl.prev() : $("#rpt-sep-" + pl.attr("tkn"));
            if (scr.hasClass("rpt-placeholder")) scr = scr.prev();
            refToken = Erp.Repeater.GetNextToken(pl.attr("tkn") == "begin" ? "begin" : scr.attr("tk"), scr.attr("rptid"));
            parentRefToken = (scr.hasClass("_rptbegin") && scr.attr("token") ? Erp.Repeater.GetToken(scr.attr("token")) : Erp.Repeater.GetParentToken(scr.attr("tk")));
            if (rptObj && typeof rptObj.OnItemDropping == "function") {
                var _o = rptObj.OnItemDropping(rptObj.id, { action: "Dropping", fromRepeater: draggingElement.repeaterId, toRepeater: rptObj.id, tokenList: draggingElement.tokenList, token: Erp.Repeater.GetToken(draggingElement.token), refToken: refToken, parentRefToken: parentRefToken, dropMode: $.defaultVal(draggingElement.dropMode, "default") });
                if (_o === false) {
                    cancel = true;
                }
                else if (_o === true) {
                    handled = true;
                }

            }
            if (!cancel) {
                success = true;
                if (!handled) {
                    if (draggingElement.tokenList) {
                        for (var i = draggingElement.tokenList.length - 1; i >= 0; i--) {
                            if (Fn.Eq(draggingElement.tokenList[i], scr.attr("tk")))
                                continue;
                            var itm = Erp.Repeater.GetItem(draggingElement.tokenList[i]);
                            scr.after($("#rpt-sep-" + draggingElement.tokenList[i]));
                            scr.after(itm);
                            $("#rpt-sep-" + draggingElement.tokenList[i]).attr("rptid", rptObj.id).attr("class", rptObj.id + "-sep");
                            var c = Erp.Repeater.GetDataContext(draggingElement.tokenList[i]); if (c) c.repeater = rptObj.id;
                            var _pt = (scr.hasClass("_rptbegin") && scr.attr("token") ? Erp.Repeater.GetToken(scr.attr("token")) : Erp.Repeater.GetParentToken(scr.attr("tk")))
                            if (_pt && c)
                                c.parent = Erp.Repeater.GetDataContext(_pt.token);
                        }
                    }
                    else {
                        scr.after($("#rpt-sep-" + draggingElement.token));
                        scr.after(item);
                        $("#rpt-sep-" + draggingElement.token).attr("rptid", rptObj.id).attr("class", rptObj.id + "-sep");
                        var c = Erp.Repeater.GetDataContext(draggingElement.token); if (c) c.repeater = rptObj.id;
                        var _pt = (scr.hasClass("_rptbegin") && scr.attr("token") ? Erp.Repeater.GetToken(scr.attr("token")) : Erp.Repeater.GetParentToken(scr.attr("tk")))
                        if (_pt && c)
                            c.parent = Erp.Repeater.GetDataContext(_pt.token);
                    }
                }
                if (rptObj && typeof rptObj.OnItemDropped == "function") {
                    rptObj.OnItemDropped(rptObj.id, { action: "Dropped", fromRepeater: draggingElement.repeaterId, toRepeater: rptObj ? rptObj.id : null, tokenList: draggingElement.tokenList, token: Erp.Repeater.GetToken(draggingElement.token), refToken: refToken, parentRefToken: parentRefToken, success: success, handled: handled, dropMode: $.defaultVal(draggingElement.dropMode,"default") });
                }
            }
        }

    }
    var rptObj2 = Erp.Repeater._rptrs[draggingElement.repeaterId]
    if (rptObj2 && typeof rptObj2.OnItemDragCompleted == "function") {
        rptObj2.OnItemDragCompleted(rptObj2.id, { action: "Completed", fromRepeater: draggingElement.repeaterId, toRepeater: rptObj ? rptObj.id : null, tokenList: draggingElement.tokenList, token: Erp.Repeater.GetToken(draggingElement.token), refToken: scr ? refToken : null, parentRefToken: parentRefToken, success: success, handled: handled, dropMode: $.defaultVal(draggingElement.dropMode, "default") });
    }
    $("#rpt-dragHelper,#rpt-placeholder1,#rpt-placeholder2").remove();

    if (event.type === 'touchend') {
        event.target.removeEventListener('touchmove', Erp.Repeater._dragElement);
        event.target.removeEventListener('touchend', Erp.Repeater._endDrag);
    } else {
        document.removeEventListener('mousemove', Erp.Repeater._dragElement);
        document.removeEventListener('mouseup', Erp.Repeater._endDrag);
    }
}
Erp.Repeater._findScrollParent = function (element) {
    var parent = element;
    if (parent == document.documentElement)
        return parent;
    while (parent) {
        var overflowY = window.getComputedStyle(parent)['overflow-y'];
        var overflowX = window.getComputedStyle(parent)['overflow-x'];

        var hasVerticalScroll = (overflowY === 'scroll' || overflowY === 'auto') && parent.scrollHeight > parent.clientHeight;
        var hasHorizontalScroll = (overflowX === 'scroll' || overflowX === 'auto') && parent.scrollWidth > parent.clientWidth;

        if (hasVerticalScroll || hasHorizontalScroll) {
            return parent;
        }

        parent = parent.parentNode;
        if (parent == document.documentElement)
            return parent;
    }

    return document.documentElement; // No scrollable parent found
}
Erp.Repeater._scrollIntoView = function (element) {
    if (!element) return;
    element.scrollIntoView({ behavior: "instant", block: "center", inline: "nearest" });return
    if (element.getBoundingClientRect().bottom > window.innerHeight) {
        element.scrollIntoView({ behavior: "instant", block: "center", inline: "nearest" });
    }
    if (element.getBoundingClientRect().top < 0) {
        element.scrollIntoView({ behavior: "instant", block: "center", inline: "nearest" });
    }
    if (element.getBoundingClientRect().left > window.innerWidth) {
        element.scrollIntoView({ behavior: "instant", block: "center", inline: "nearest" });
    }
    if (element.getBoundingClientRect().left < 0) {
        element.scrollIntoView({ behavior: "instant", block: "center", inline: "nearest" });
    }
   
}
Erp.Repeater._distance = function (x1, y1, x2, y2) {
    var distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    return distance;
}
Erp.Repeater.previewPlaceholders = function (id, pl) {

    $("#rpt-dragHelper,#rpt-placeholder1,#rpt-placeholder2").remove();
    var arr = Erp.Repeater.GetTokens(id);
    if (arr && arr.length > 0)
        Erp.Repeater.GetItem(arr[0].token).addClass("rpt-dragging")
    $("#" + id + "-begin").after("<div id='rpt-placeholder1' class='rpt-placeholder init'></div>");
    $("#" + id + "-begin").after("<div id='rpt-placeholder2' class='rpt-placeholder'></div>");
    $(document.body).append("<div id='rpt-dragHelper' class='" + id + "-dragHelper'></div>");
    var draggingElement = $("#rpt-dragHelper");
    if (pl instanceof $)
        draggingElement.append(pl);
    var r = $("#rpt-placeholder1")[0].getBoundingClientRect()
    draggingElement[0].style.left = ($(document).scrollLeft() + r.left + 50) + 'px';
    draggingElement[0].style.top = ($(document).scrollTop() + r.top + 50) + 'px';

}

Erp.Repeater._getClientX = function(event) {
    if (event.type === 'touchstart' || event.type === 'touchmove') {
        return event.touches[0].clientX;
    }
    return event.clientX;
}

Erp.Repeater._getClientY = function (event) {
    if (event.type === 'touchstart' || event.type === 'touchmove') {
        return event.touches[0].clientY;
    }
    return event.clientY;
}

Erp.Grid._getGrid = function (gridId) {
    if ($.isEmpty(gridId))
        return null;
    return $find(gridId);
}
Erp.Grid._getGridView = function (gridId) {
    if ($.isEmpty(gridId))
        return null;
    var g = $find(gridId);
    return g ? g.get_masterTableView() : null;
}
Erp.Grid._getDatasource = function (gridId) {
    if ($.isEmpty(gridId))
        return null;
    var g = $find(gridId);
    return g ? g.get_masterTableView().get_dataSource() : null;
}
Erp.Grid._getCol = function (gridId, col) {
    if (col instanceof Telerik.Web.UI.GridColumn)
        return col;
    var g = Erp.Grid._getGridView(gridId);
    if ($.isEmpty(col) || !g)
        return null;

    if (col instanceof $ && (col.prop("tagName") == "TD" || col.prop("tagName") == "TH"))
        col = col.index();
    else if (col && col.nodeType > 0)
        col = $(col).index();

    if (!isNaN(col))
        return g ? g.get_columns()[col / 1] : null;
    else {
        var arr = g.get_columns();
        var res = $(arr).filter(function () { return this.get_uniqueName().split('~')[1] == col; })
        return res.length > 0 ? res[0] : null;
    }
}
Erp.Grid._getColInd = function (gridId, col) {
    var g = typeof gridId == "object" ? gridId : Erp.Grid._getGridView(gridId);
    if (!g)
        return -1;
    if (col instanceof Telerik.Web.UI.GridColumn) {
        var arr = g.get_columns();
        for (var i = 0; i < arr.length; i++) { if (arr[i].get_uniqueName() == col.get_uniqueName()) return i; };
        return -1;
    }
    if (col instanceof $ && (col.prop("tagName") == "TD" || col.prop("tagName") == "TH"))
        col = col.index();
    else if (col && col.nodeType > 0)
        col = $(col).index();

    if (!isNaN(col))
        return col;
    else {
        var arr = g.get_columns();
        for (var i = 0; i < arr.length; i++) { if (arr[i].get_uniqueName().split('~')[1] == col) return i; };
        return -1;
    }
}
Erp.Grid._getRowData = function (gridId, row) {
    var g = typeof gridId == "object" ? gridId : Erp.Grid._getGridView(gridId);
    if (!g)
        return null;
    if (!row && row != 0)
        return null;
    if (!isNaN(row))
        return g ? g.get_dataItems()[row / 1] : null;
    else if ($(row).prop("tagName")) {
        var tr = $(row).closest(".grid-row");
        if (tr.exists())
            return g.get_dataItems()[tr.attr("id").split('__')[1] / 1];
        else
            return -1;
    }
    return -1;
}
Erp.Grid._getRow = function (gridId, row) {
    var g = typeof gridId == "object" ? gridId : Erp.Grid._getGridView(gridId);
    if (!g)
        return null;
    if (row == undefined || row == null) {
        row = g.get_selectedItems()[0];
        if (row)
            return $(row.get_element());
        else {
            row = $("#" + gridId + "_GridData").find(".gridSelect.checked").filter(":visible");
            if (row.length > 0) {
                return row.closest("TR");
            }
        }
        return null;
    }
    if (!row && row != 0)
        return null;
    var tr = $(g.get_element()).children("TBODY").children(".grid-row");   
    if ($(row).prop("tagName")) {
        row = $(row);
        var tr = row.prop("tagName") == "TR" ? row : $(row).closest(".grid-row");
        if (tr.exists())
            return tr;
        else
            return null;
    }
    else if (!isNaN(row))
        return tr.eq(row / 1);
    return null;
}
Erp.Grid.GetSelectedRow = function (gridId) {
    var g = Erp.Grid._getGridView(gridId);
    if (!g)
        return null;
    var row = g.get_selectedItems()[0];
    if (row)
        return $(row.get_element());
    else {
        row = $("#" + gridId + "_GridData").find(".gridSelect.checked").filter(".grid-row");
        if (row.length > 0) {
            return row.closest("TR");
        }
    }
    return null;
}
Erp.Grid.GetParentRow = function (gridId, row) {
    if ($("#" + gridId).attr("enabletreeview") != "1")
        return null;
    var tr = Erp.Grid._getRow(gridId, row);
    if (Fn.CInt(tr.attr("lvl")) <= 0)
        return null;
    var parentpk = tr.attr("parentpk");
    if ($.isEmpty(parentpk))
        return null;
    while (true) {
        if (tr.prev().hasClass("rgNoRecords"))
            tr = tr.prev();
        if (parentpk == tr.prev().attr("pk"))
            break;
        tr = tr.prev();
        if (!tr || !tr.exists()) {
            tr = null;
            break;
        }
    }
    if (!tr)
        return null;
    return tr.prev();
}
Erp.Grid.GetRootParentRow = function (gridId, row) {
    if ($("#" + gridId).attr("enabletreeview") != "1")
        return null;
    var tr = Erp.Grid._getRow(gridId, row);
    if (Fn.CInt(tr.attr("lvl")) <= 0)
        return null;
    var parentpk = tr.attr("parentpk");
    if ($.isEmpty(parentpk))
        return null;
    while (true) {
        if (tr.prev().hasClass("rgNoRecords"))
            tr = tr.prev();
        if (parentpk == tr.prev().attr("pk") && Fn.CInt(tr.prev().attr("lvl")) > 0) {
            parentpk = tr.prev().attr("parentpk");
            tr = tr.prev();
            continue;
        }
        if (parentpk == tr.prev().attr("pk") && Fn.CInt(tr.prev().attr("lvl")) == 0)
            break;
        tr = tr.prev();
        if (!tr || !tr.exists()) {
            tr = null;
            break;
        }
    }
    if (!tr)
        return null;
    return tr.prev();
}
Erp.Grid.GetColumn = function (gridId, col) {
    return Erp.Grid._getCol(gridId, col);
}
Erp.Grid.GetColumns = function (gridId) {
    var g = Erp.Grid._getGridView(gridId);
    if(g)
        return g.get_columns();
    return [];
}
Erp.Grid.GetColumnUniqueName = function (gridId, col) {
    var c = Erp.Grid._getCol(gridId, col);
    if (!c)
        return "";
    return c.get_uniqueName().split('~')[1];
}
Erp.Grid.GetColumnFieldName = function (gridId, col) {
    var c = Erp.Grid._getCol(gridId, col);

    if (!c)
        return "";
    var colName = c.get_uniqueName();
    var fld = $("#" + gridId + "_EditContainer").node(Erp.Grid._getColInd(gridId, col)).attr("fld");
    if (!$.isEmpty(fld))
        return fld;
    if (colName.indexOf("!") > -1)
        return colName.split('!')[1].split('~')[0];
    else
        return colName.split('~')[0];
}


Erp.Grid.FilterColumn = function (gridId, col, value, cond, refresh) {
    var c = Erp.Grid._getCol(gridId, col);
    if (!c)
        return;
    var grid = Erp.Grid._getGridView(gridId);
    var exp = grid.get_filterExpressions().find(c.get_uniqueName());
    if (String(value).toLowerCase() == "nofilter") {
        refresh = cond;
        cond = "NoFilter";
        value = "";
    }

    if (!exp) {
        exp = new Telerik.Web.UI.GridFilterExpression();
        exp.set_columnUniqueName(c.get_uniqueName());
        exp.set_dataTypeName(c.get_dataType());
        exp.set_fieldName(c.get_dataField());
        grid.get_filterExpressions().add(exp);
    }
    exp._prog = true;
    exp.set_fieldValue(value);
    exp.set_filterFunction($.defaultVal(cond, "Contains"));
    if (refresh == false) {
    }
    else
        Erp.Grid.Refresh(gridId);
    var ind = Erp.Grid._getColInd(gridId, col);
    $("#" + gridId + "_advFilter").children("._COLFILTER[index=" + ind + "]").remove();
    if (cond != "NoFilter")
        __addsearchItem(gridId, $("#" + gridId + "_advFilter"), { Type: "COLFILTER", Index: ind }, Erp.Grid.GetHeaderText(gridId, col) + " : " + cond + " " + value);

}
Erp.Grid.Filter = function (gridId, flt, refresh) {
    if (!flt)
        return;
    var item = $("#" + gridId + "_FltList").children("[code='" + flt + "']");
    if (item.length == 0)
        return;
    var ind = item.index();

    var adv = $("#" + gridId + "_cmd").children(".grid-adv-filter");
    adv.find("._FILTER[index=" + ind + "]").remove();
    __addsearchItem(gridId, adv, { Type: "FILTER", Index: ind }, item.text());
    if (item.attr("hid") == "1")
        adv.find("._FILTER[index=" + ind + "]").hide();
    if (refresh == false) {
    }
    else
        Erp.Grid.Refresh(gridId);
}
Erp.Grid.RemoveFilter = function (gridId, flt, refresh) {
    if (!flt)
        return;
    var item = $("#" + gridId + "_FltList").children("[code='" + flt + "']");
    if (item.length == 0)
        return;
    var ind = item.index();

    var adv = $("#" + gridId + "_cmd").children(".grid-adv-filter");
    adv.find("._FILTER[index=" + ind + "]").remove();
    if (refresh == false) {
    }
    else
        Erp.Grid.Refresh(gridId);
}
Erp.Grid.ResetAllFilters = function (gridId, refresh) {
    var grid = Erp.Grid._getGridView(gridId);
    if (!grid)
        return;
    $("#" + gridId + "_cmd").children(".grid-adv-filter").find("._FILTER").remove();
    grid.get_filterExpressions().clear();
    //if (all)
    //    grid.get_filterExpressions().clear();
    //else {
    //    var arr = grid.get_filterExpressions()._array;
    //    for (var i = arr.length - 1; i >= 0; i--) {
    //        if (arr[i]._prog)
    //            arr.splice(i, 1);
    //    }
    //}
    if (refresh == false) {
    }
    else
        Erp.Grid.Refresh(gridId);
}
Erp.Grid.SortColumn = function (gridId, col, dir) {
    var c = Erp.Grid._getCol(gridId, col);
    if (!c)
        return;
    var grid = Erp.Grid._getGridView(gridId);
    dir = $.defaultVal(dir, "").toUpperCase();
    if (dir == "ASC" || dir == "DESC") {
        var s = grid.get_sortExpressions().find(c.get_dataField());
        if (!s) {
            s = new Telerik.Web.UI.GridSortExpression();
            grid.get_sortExpressions().add(s);
        }
        s.set_fieldName(c.get_dataField());
        s.set_sortOrder(dir == "ASC" ? 1 : 2);
    }
    else {
        var arr = grid.get_sortExpressions()._array;
        for (var i = arr.length - 1; i >= 0; i--) {
            if (arr[i].get_fieldName() == c.get_dataField()) {
                arr.splice(i, 1);
                break;
            }
        }
    }
    Erp.Grid.Refresh(gridId);
}
Erp.Grid.DisplayColumn = function (gridId, col, bit) {
    var c = Erp.Grid._getColInd(gridId, col);
    if (c < 0)
        return;
    if (bit)
        Erp.Grid._getGridView(gridId).showColumn(c);
    else
        Erp.Grid._getGridView(gridId).hideColumn(c);
    if ($("#" + gridId + "_ctl00").hasClass("EditGrid")) {
        var editRow = $("<tr>" + $("#" + gridId).data("_NewRowHtml") + "</tr>");
        editRow.children().eq(c).setDisplay(bit == true);
        $("#" + gridId).data("_NewRowHtml", editRow.html());
    }
}
Erp.Grid.ColumnExists = function (gridId, col, bit) {
    var c = Erp.Grid._getColInd(gridId, col);
    return (c >= 0);
}
Erp.Grid.CalculateColumn = function (gridId, col, op, format) {
    var result = 0;
    var ind = Erp.Grid._getColInd(gridId, col);
    if (ind < 0)
        return result;
    op = !op ? "SUM" : op.toUpperCase();
    var rows = Erp.Grid.GetRows(gridId);
    var cnt = 0;
    rows.each(function () {
        var cell = $(this).children().eq(ind);
        if ($(this).hasClass("groupHeader") || $(this).hasClass("groupFooter") || $(this).attr("markfordelete") == "1" || !cell.exists())
            return true;
        //if (!cell.exists())
        //return false;
        cnt++;
        if (op == "SUM" || op == "AVG") {
            if (cell.hasClass("editing")) {
                result += Fn.UnFormatNumber(Erp.GetFieldValue(cell.children(".edtCtr").attr("id") + "-field"));
            }
            else
                result += Fn.UnFormatNumber(cell.text());
        }
    });
    if (op == "AVG")
        result = Fn.Round(result / cnt, 2);
    if (format) {
        var fmt = "";
        var gcol = Erp.Grid._getCol(gridId, col);
        if (gcol && gcol._data && gcol._data.DataFormatString)
            fmt = gcol._data.DataFormatString;
        if (fmt)
            return Fn.Format(result, fmt);
    }
    return result;

}
Erp.Grid.AddColumn = function (gridId, colInfo) {
    var g = Erp.Grid._getGridView(gridId);
    if (!g || !colInfo)
        return;
    var entityId = $("#" + gridId).attr("entityid");
    if (typeof colInfo == "string") {
        colInfo = { HeaderText: colInfo };
    }
    colInfo = $.extend({
        ColumnIndex: -1, ColumnName: "", DataField: "", HeaderText: "", HeaderCss: "", Width: 50, Editable: false, Mandatory: false,
        ItemTemplate: "", ItemCss: "", EditTemplate: "", FooterTemplate: "", FooterCss: "", Formatting: "", DataType: "TEXT", EntityID: "", FormCode: "", Items: null, AllowFilterSort: false
    }, colInfo);
    colInfo.ColumnName = $.defaultVal(colInfo.ColumnName, $.NewID("column-"));
    colInfo.DataField = $.defaultVal(colInfo.DataField, "");
    colInfo.EditTemplate = $.defaultVal(colInfo.DataField, "").trim();
    if ($.isEmpty(colInfo.DataType))
        colInfo.DataType = "TEXT";
    colInfo.DataType = colInfo.DataType.toUpperCase();
    if (colInfo.DataType == "CHECKBOX" && $.isEmpty(colInfo.ItemTemplate))
        colInfo.ItemTemplate = "<span class='aspNetDisabled'><input type='checkbox'/></span>";

    if (!$.isEmpty(colInfo.Formatting)) {
        if (colInfo.DataType == "DATE")
            colInfo.Formatting = "{0:" + Users.LongDateFormat + "}";
        else if (colInfo.DataType == "DATETIME")
            colInfo.Formatting = "{0:" + Users.LongDateFormat + " " + Users.TimeFormat + "}";
        else if (colInfo.DataType == "TIME")
            colInfo.Formatting = "{0:" + Users.TimeFormat + "}";
        else if (colInfo.DataType == "PERCENT")
            colInfo.Formatting = "{0} %";
    }

    var itemCss = $.defaultVal(colInfo.ItemCss, "");
    if (colInfo.Editable == true)
        itemCss += " editableCell";
    if (colInfo.Editable == true && colInfo.DataType == "CHECKBOX")
        itemCss += " enableChk";
    if (colInfo.DataType == "DATE" || colInfo.DataType == "DATETIME" || colInfo.DataType == "TIME")
        itemCss += " __date";
    else if (colInfo.DataType == "STATUS" || colInfo.DataType == "PRIORITY" || colInfo.DataType == "MULTISELECT" || colInfo.DataType == "SINGLESELECT")
        itemCss += " __lookup";
    if (!$.isEmpty(colInfo.Formatting))
        itemCss += " __hasFormat";
    if (colInfo.DataType == "NUMBER" || colInfo.DataType == "DECIMAL")
        itemCss += " rightAlign";

    var unq = entityId + "!" + colInfo.DataField + "~" + colInfo.ColumnName;
   
    var col = {
        "UniqueName": unq, ColumnGroupName: colInfo.ColumnGroupName, "Resizable": true, "Reorderable": true, "Selectable": true, "Groupable": true,
        "ColumnType": "GridBoundColumn", "Editable": false,
        "SortExpression": (colInfo.AllowFilterSort ? entityId + "_" : "") + colInfo.DataField, "DataTypeName": "System.String",
        "FilterListOptions": 0, "CurrentFilterFunction": 0, "CurrentFilterValue": "", "AndCurrnetFilterFunction": 0,
        "AndCurrentFilterValue": "", "Acff": "Contains", "CurrentFilterFunctionName": "NoFilter", "AndCurrentFilterFunctionName": "NoFilter",
        "DataField": (colInfo.AllowFilterSort ? entityId + "_" : "") + colInfo.DataField, "ReadOnly": true, "Display": true
    };
    
    var headerRow = $("#" + gridId + "_ctl00_Header").children("THEAD").children("TR").not(".rgFilterRow");
    var hasGrouping = headerRow.eq(0).hasClass("rgMultiHeaderRow");
    var th = $('<th scope="col" ' + (hasGrouping ? "rowspan=\"" + headerRow.length + "\" " : "") + ' class="rgHeader ' + $.defaultVal(colInfo.HeaderCss, "") + '" abbr="' + colInfo.DataField + '" style="text-align: left;" title="">' + (colInfo.AllowFilterSort ? '<a onclick="Telerik.Web.UI.Grid.Sort($find(\'' + gridId + '_ctl00\'), \'' + col.DataField + '\'); return false;" title="Click here to sort" href="javascript:void(0)">' + colInfo.HeaderText + '</a>' : colInfo.HeaderText) + '</th>');
   
    if (hasGrouping) {
        th.NewID(gridId + "_MultiHeader99");
        $find(gridId).MasterTableViewHeader.MultiHeaderCells.push(th[0]);        
    }
    if ($.isEmpty(colInfo.ColumnGroupName))
        headerRow.eq(0).append(th);
    else {
        var grps = Fn.Filter(GridList, function (a) { return a.ID == gridId; })[0].GroupInfo;
        var gp = Fn.Filter(grps, function (a) { return a.k == colInfo.ColumnGroupName; })[0];
        th.attr("rowspan", headerRow.length - gp.i);
        th.attr("rowspan1", headerRow.length - gp.i);
        headerRow.eq(gp.i).append(th);
        th[0].groupName = gp.k;
        headerRow.eq(gp.i).children().each(function () { if ($(this).attr("rowspan1") / 1 > 0) $(this).attr("rowspan", $(this).attr("rowspan1")); });

        if (!th.prev().isDisplayNone() && th.prev().length > 0 && th[0].groupName == th.prev()[0].groupName) {
            var pc = th.prev()[0].parentCell;
            th[0].parentCell = th.prev()[0].parentCell;
            while (pc) {
                pc.colSpan = pc.colSpan + 1;
                pc = pc.parentCell;
            }
        }
        else {
            var prev = th;
            while (gp.i > 0) {
                var gh = $('<th scope="col"  class="rgHeader" style="text-align: left;" >' + gp.t + '</th>');                
                headerRow.eq(gp.i - 1).append(gh);               
                gh[0].groupName = gp.p;
                prev[0].parentCell = gh[0];
                prev = gh;
                gp = Fn.Filter(grps, function (a) { return a.k == gp.p; })[0];
                if (!gp) break;
                
            }
        }
    }

    var th1 = $('<td style="white-space:nowrap;">' + (colInfo.AllowFilterSort ? '<input name="' + gridId + '$ctl00$ctl02$ctl03$FilterTextBox_' + unq + '" type="text" size="10" id="' + gridId + '_ctl00_ctl02_ctl03_FilterTextBox_' + unq + '" class="rgFilterBox" alt="Filter ' + unq + ' column" onkeypress="if((event.keyCode == 13)) return false;"><input type="submit" name="' + gridId + '$ctl00$ctl02$ctl03$Filter_' + unq + '" value=" " onclick="$find(\'' + gridId + '\')._showFilterMenu(\'' + gridId + '_ctl00\', \'' + unq + '\', event); return false;" id="' + gridId + '_ctl00_ctl02_ctl03_Filter_' + unq + '" title="Filter" class="rgFilter">' : '') + '</td>');
    $("#" + gridId + "_ctl00_Header").children("THEAD").children(".rgFilterRow").append(th1);

    var editRow = null;
    if ($("#" + gridId + "_ctl00").hasClass("EditGrid"))
        editRow = $("<tr>" + $("#" + gridId).data("_NewRowHtml") + "</tr>");

    $("#" + gridId + "_ctl00_Header").children("colgroup").append("<col style=\"width: " + colInfo.Width + "px;\">");
    $("#" + gridId + "_ctl00").children("colgroup").append("<col style=\"width: " + colInfo.Width + "px;\">");

    var tditem = "<td " + (!$.isEmpty(itemCss) ? "class=\"" + itemCss + "\" " : "") + ">" + colInfo.ItemTemplate + "</td>";
    $("#" + gridId + "_ctl00").children("TBODY").children("TR").append(tditem);
    if (editRow)
        editRow.append(tditem);

    $("#" + gridId + "_ctl00_Footer").children("colgroup").append("<col style=\"width: " + colInfo.Width + "px;\">");
    $("#" + gridId + "_ctl00_Footer").children("TBODY").children("TR").append("<td class='" + $.defaultVal(colInfo.FooterCss, "") + "' >" + $.defaultVal(colInfo.FooterTemplate, "") + "</td>");
    $find(gridId + "_ctl00_Header").ColGroup.Cols.push($("#" + gridId + "_ctl00_Header").children("colgroup").children().last()[0]);
    $find(gridId + "_ctl00_Footer").ColGroup.Cols.push($("#" + gridId + "_ctl00_Footer").children("colgroup").children().last()[0]);
    $find(gridId + "_ctl00").ColGroup.Cols.push($("#" + gridId + "_ctl00").children("colgroup").children().last()[0]);
    callFilterOnEnter($find(gridId), th1.children(".rgFilterBox"))
    var newCol = $create(Telerik.Web.UI.GridColumn, {
        _owner: $find(gridId + "_ctl00_Header"),
        _data: col
    }, null, null, th[0]);
    g._cellsByUniqueName[unq] = g._columnsInternal.length;
    Array.add(g._columnsInternal, newCol);
    if (!$.isEmpty(colInfo.ItemTemplate)) {
        var it = $("#" + gridId).data("_NewItemcols");
        if (!it)
            it = [];
        it.push({ ind: g._columnsInternal.length - 1, tmpl: colInfo.ItemTemplate });
        $("#" + gridId).data("_NewItemcols", it);
    }
    newCol._data.DataFormatString = colInfo.Formatting;
    if ($("#" + gridId + "_ctl00").hasClass("EditGrid")) {
        var edt = $("<span fld=\"" + colInfo.DataField + "\"></span>");
        $("#" + gridId + "_EditContainer").append(edt);
        if (colInfo.Editable == true) {
            if (colInfo.EditTemplate.indexOf("<") < 0) {
                colInfo.EditTemplate = "<input type='text' fieldtype='" + colInfo.DataType + "'";
                if (colInfo.Mandatory)
                    colInfo.EditTemplate += " mandatory=\"1\"";
                if (colInfo.EntityID)
                    colInfo.EditTemplate += " eid=\"" + colInfo.EntityID + "\"";
                if (colInfo.FormCode)
                    colInfo.EditTemplate += " fc=\"" + colInfo.FormCode + "\"";
                if ($.isArray(colInfo.Items))
                    colInfo.EditTemplate += " data-items='" + JSON.stringify(colInfo.Items) + "'";
                colInfo.EditTemplate += " />";
            }
            var ctl = $("<span class='edtCtr'>" + colInfo.EditTemplate + "</span>");
            edt.append(ctl);
            ctl.NewID("editor");
            var id = ctl.attr("id");
            __EditGridItems[gridId].push(id);
            _initCellEditor(edt.index(), ctl, $("#" + gridId), headerRow, false);
        }
        else
            __EditGridItems[gridId].push("");
        if (editRow)
            $("#" + gridId).data("_NewRowHtml", editRow.html());
    }
    SetGridWidth(gridId);

    if (hasGrouping) {
        //Erp.Grid.DisplayColumn(gridId, Erp.Grid.GetColumns(gridId).length - 1, false)
        //Erp.Grid.DisplayColumn(gridId, Erp.Grid.GetColumns(gridId).length - 1, true);
        Telerik.Web.UI.Grid.calculateRowSpan($("#" + gridId + "_ctl00_Header")[0], true, true, true)
    }
    //$("#" + gridId + "_ctl00_Footer").css("width", $("#" + gridId + "_ctl00").css("width"));
    
    //if (colInfo.ColumnIndex > 0 && colInfo.ColumnIndex < g.get_columns().length) {
    //    g.reorderColumns(unq, g.get_columns()[colInfo.ColumnIndex].get_uniqueName());
    //}
}

Erp.Grid.GetRecordID = function (gridId, row) {
    var r = Erp.Grid._getRow(gridId, row);
    if (r)
        return $.defaultVal($(r).attr("pk"), "");
    return "";
}
Erp.Grid.GetParamValue = function (gridId, keyInd, row) {
    var r = Erp.Grid._getRow(gridId, row);
    if (isNaN(keyInd) && $.isEmpty(keyInd))
        return "";
    if (r) {
        if (!isNaN(keyInd)) {
            var keys = $.defaultVal($("#" + gridId).attr("clientkeys"), "").split(",");
            if (!keys[keyInd])
                return "";
            return $.defaultVal(r.attr(keys[keyInd]), "");
        }
        else
            return $.defaultVal(r.attr(keyInd.toLowerCase()), "");
    }
    return "";
}

Erp.Grid.GetRecordValue = function (gridId, col, row) {
    var r = Erp.Grid._getRow(gridId, row);
    var ind = Erp.Grid._getColInd(gridId, col);
    if (ind < 0)
        return "";
    if (r) {
        var cell = r.cells(ind);
        var edt = cell.children(".cell");
        if (edt.length > 0)
            return edt.text();
        return cell.text();
    }
    return "";
}
Erp.Grid.GetFooterCell = function (gridId, col, row) {
    if (!isNaN(row))
        row = $("#" + gridId + "_ctl00_Footer").children("TBODY").children().eq(row);
    if (row instanceof $) {
        return row.cells(Erp.Grid._getColInd(gridId, col));
    }
    else
        return null;
}
Erp.Grid.GetRecordCell = function (gridId, col, row) {
    var r = Erp.Grid._getRow(gridId, row);
    var ind = Erp.Grid._getColInd(gridId, col);
    if (ind < 0)
        return null;
    if (r)
        return r.cells(ind);
    return null;
}
Erp.Grid.GetRecordID_Multiple = function (gridId) {
    var g = Erp.Grid._getGridView(gridId);
    var ent = $("#" + gridId).attr("entityid");
    if (!g)
        return null;
    if ($("#" + gridId).hasClass("allRecords"))
        return ["GRIDRESULT:" + g.__gridQuery + ":" + ent];
    var csv = ["ENTITY:" + ent];

    $(g.get_element()).find("a.gridSelect").each(function () {
        if ($(this).hasClass("checked") && !$(this).closest("TR").isDisplayNone()) {
            var pk = $(this).closest("TR").attr("pk");
            if (pk)
                csv.push(pk);
        }
    });
    return csv.length > 1 ? csv : [];
}
Erp.Grid.GetParamValue_Multiple = function (gridId, keyInd, row) {
    var g = Erp.Grid._getGridView(gridId);
    var ent = $("#" + gridId).attr("entityid");
    if (!g)
        return null;
    var keys = $.defaultVal($("#" + gridId).attr("clientkeys1"), "").split(",");
    var keyname = !isNaN(keyInd) ? keys[keyInd] : keyInd;
    if ($.isEmpty(keyname))
        return null;
    if (isNaN(keyInd))
        keyInd = keyInd.toLowerCase();
    if ($("#" + gridId).hasClass("allRecords"))
        return ["GRIDRESULT:" + g.__gridQuery + ":" + ent + ":" + keyname];
    var csv = ["ENTITY:" + ent];
    $(g.get_element()).find("a.gridSelect").each(function () {
        if ($(this).hasClass("checked") && !$(this).closest("TR").isDisplayNone()) {
            var tr = $(this).closest("TR");
            if (!isNaN(keyInd))
                csv.push($.defaultVal(tr.attr(keys[keyInd]), ""));
            else
                csv.push($.defaultVal(tr.attr(keyInd), ""));
        }
    });
    return csv.length > 1 ? csv : [];
}
Erp.Grid.GetRecordValue_Multiple = function (gridId, col, row) {
    var g = Erp.Grid._getGridView(gridId);
    var ent = $("#" + gridId).attr("entityid");
    if (!g)
        return null;
    if ($("#" + gridId).hasClass("allRecords"))
        return ["GRIDRESULT:" + g.__gridQuery + ":" + ent + ":" + Erp.Grid._getCol("dgData", col).get_uniqueName().split('~')[0].replace("!", ".")];
    var csv = ["ENTITY:" + ent];
    $(g.get_element()).find("a.gridSelect").each(function () {
        if ($(this).hasClass("checked") && !$(this).closest("TR").isDisplayNone()) {
            var tr = $(this).closest("TR");
            csv.push(tr.children().eq(Erp.Grid._getColInd(gridId, col)).text());
        }

    });
    return csv.length > 1 ? csv : [];
}

Erp.Grid.RaiseError = function (gridId, col, row, errMsg) {
    var r = row;
    var msg = errMsg;
    if (errMsg == undefined) {
        msg = String(row);
        r = undefined;
    }
    var cell = Erp.Grid.GetRecordCell(gridId, col, r);
    if (!cell)
        return;
    cell.addClass("entity-error").attr("title", msg);
}
Erp.Grid.ClearError = function (gridId, col, row) {
    var cell = Erp.Grid.GetRecordCell(gridId, col, row);
    if (!cell)
        return;
    cell.removeClass("entity-error").removeAttr("title");
}

Erp.Grid.GetRecordID_Filtered = function (gridId) {
    var g = Erp.Grid._getGridView(gridId);
    if (!g)
        return null;
    var ent = $("#" + gridId).attr("entityid");
    return ["GRIDRESULT:" + g.__gridQuery + ":" + ent];
}
Erp.Grid.GetParamValue_Filtered = function (gridId, keyInd, row) {
    var g = Erp.Grid._getGridView(gridId);
    if (!g)
        return null;
    var ent = $("#" + gridId).attr("entityid");
    var keys = $.defaultVal($("#" + gridId).attr("clientkeys1"), "").split(",");
    var keyname = !isNaN(keyInd) ? keys[keyInd] : keyInd;
    return ["GRIDRESULT:" + g.__gridQuery + ":" + ent + ":" + keyname];
}
Erp.Grid.GetRecordValue_Filtered = function (gridId, col, row) {
    var g = Erp.Grid._getGridView(gridId);
    if (!g)
        return null;
    var ent = $("#" + gridId).attr("entityid");
    return ["GRIDRESULT:" + g.__gridQuery + ":" + ent + ":" + Erp.Grid._getCol("dgData", col).get_uniqueName().split('~')[0].replace("!", ".")];
    var csv = [];
}

Erp.Grid.IsEmptyRow = function (gridId, tr, cells) {
    if (typeof cells =="undefined")
        cells = tr.children(".editableCell");
    if (tr.hasClass("newRow") && !tr.attr("pk")) {
        var hasVal = false;
        cells.each(function () {
            var td = $(this);
            var ctl = td.children(".edtCtr");
            if (ctl.hasClass("hasEditor")) {
                var v = Erp.GetFieldValue(ctl.attr("id") + "-field")
                if (v != null && v != undefined && v) {
                    if ($.isArray(v) && (v.length <= 0 || $.isEmpty(v[0])))
                        return true;
                    hasVal = true;
                    return false;
                }
            }
            else if (td.hasClass("__file")) {
                hasVal = !($.isEmpty(td.data("TempName")) && $.isEmpty(td.data("_TempName")));
                return !hasVal;
            }
            else if (!$.isEmpty(td.text())) {
                hasVal = true;
                return false;
            }

        });
        return !hasVal;
    }
    return false;
}
//col can be td
Erp.Grid.GetEditor = function (gridId, col, tr) {
    var cell;
    if (col instanceof $ && col.prop("tagName") == "TD")
        cell = col;
    else {
        var ind = Erp.Grid._getColInd(gridId, col);
        if (ind < 1)
            return "";
        if (typeof tr != undefined && !isNaN(tr)) {
            tr = Erp.Grid._getRow(gridId, tr);
        }
        else if (tr && tr.nodeType > 0) {
            tr = $(tr);
        }
        else if (tr instanceof $ && tr.prop("tagName") == "TR") {
            //tr=tr
        }
        else if (tr == null || $(tr).prop("tagName") != "TR") {
            if (__CurrentEditingRow == undefined || __CurrentEditingRow == null)
                return "";
            tr = __CurrentEditingRow;
        }
        cell = tr.cells(ind);
    }

    if (!cell.hasClass("editableCell"))
        return cell;
    var edt = cell.children(".hasEditor");
    if (edt.length > 0)
        return Erp.GetField(edt.attr("id") + "-field");
    if (cell.parent().hasClass("editingRow")) {
        var ctl = Erp.GetField(__EditGridItems[gridId][cell.index()] + "-field");
        if (ctl && ctl.Info)
            return ctl;
    }
    return cell;
}

Erp.Grid.GetEditorValue = function (gridId, col, tr) {
    var cell;
    if (col instanceof $ && col.prop("tagName") == "TD")
        cell = col;
    else if (col && col.nodeType > 0)
        cell = col;
    else {
        var ind = Erp.Grid._getColInd(gridId, col);
        if (ind < 1)
            return "";
        if (typeof tr != undefined && !isNaN(tr)) {
            tr = Erp.Grid._getRow(gridId, tr);
        }
        else if (tr && tr.nodeType > 0) {
            tr = $(tr);
        }
        else if (tr instanceof $ && tr.prop("tagName") == "TR") {
            //tr=tr
        }
        else if (tr == null || $(tr).prop("tagName") != "TR") {
            if (__CurrentEditingRow)
                tr = __CurrentEditingRow;
            else {
                tr = Erp.Grid._getRow(gridId, null);
                if (!tr)
                    return;
            }
        }
        cell = tr.cells(ind);
    }
    var _col = Erp.Grid._getCol(gridId, cell.index());
    var isNumber=(_col.get_dataType() == "System.Double" || _col.get_dataType() == "System.Decimal" || _col.get_dataType().indexOf("System.Int") > -1);

    if (!cell.hasClass("editableCell")) {
        if (cell.children(".aspNetDisabled").length > 0)
            return cell.find("input").checked();
        var edt = cell.children(".cell");
        var txt = "";
        if (edt.length > 0)
            txt= edt.text();
        else
            txt = cell.text();
        if (isNumber)
            return Fn.UnFormatNumber(txt);
        else
            return txt;
    }
    if (cell.hasClass("enableChk"))
        return cell.find("input").checked();
    else if (cell.hasClass("__file")) {
        return __getUploadCellValue(cell, gridId);
    }
    var edt = cell.children(".hasEditor");
    if (edt.length > 0)
        return Erp.GetFieldValue(edt.attr("id") + "-field");
    var _v = cell.data("__value");
    if (_v != undefined && _v != null)
        return _v;
    edt = cell.children(".cell");
    var txt = "";
    if (edt.length > 0)
        txt= edt.text();
    else
        txt = cell.text();
    var _col = Erp.Grid._getCol(gridId, cell.index());
    if (isNumber)
        return Fn.UnFormatNumber(cell.text());
    else
        return txt;
}

function __getUploadCellValue(td, gridId) {
    var grid = Erp.Grid._getGridView(gridId);
    var cols = grid.get_columns();  
    var dataField = Erp.Grid.GetColumnFieldName(gridId, cols[td.index()]);
    var tmp = $.defaultVal(td.data("_TempName"), td.data("TempName"));
    tmp = (tmp == "FromDB" ? "" : tmp);
    var f = $.defaultVal(td.data("FileName"), "");
    f = (f == "#" ? "" : f);
    return {
        url: "getresource.ashx?id=" + td.parent().attr("pk") + "&eid=" + $("#" + gridId).attr("entityid") + "&fld=" + dataField,
        tempUrl: "../temp/" + tmp,
        fileName: f,
        tempName: tmp
    }
}
//tr can be row or editor value
//col can be td in this case tr is value
Erp.Grid.SetEditorValue = function (gridId, col, tr, val, val2) {
    var cell;
    var _val1 = "", _val2 = "";
    if (col instanceof $ && col.prop("tagName") == "TD") {
        cell = col;
        _val1 = tr;
        _val2 = val;
    }
    else if (col && col.nodeType > 0) {
        cell = col;
        _val1 = tr;
        _val2 = val;
    }
    else {
        var ind = Erp.Grid._getColInd(gridId, col);
        if (ind < 1)
            return;
        if (typeof tr != undefined && !isNaN(tr) && arguments.length > 3) {
            tr = Erp.Grid._getRow(gridId, tr);
            _val1 = val;
            _val2 = val2;
        }
        else if (tr && tr.nodeType > 0) {
            _val1 = val;
            _val2 = val2;
            tr = $(tr);
        }
        else if (tr instanceof $ || tr == null) {
            _val1 = val;
            _val2 = val2;
            if (tr == null)
                tr = __CurrentEditingRow;
        }
        else {
            _val1 = tr;
            _val2 = val;
            if (__CurrentEditingRow == undefined || __CurrentEditingRow == null)
                return;
            tr = __CurrentEditingRow;

        }

        cell = tr.cells(ind);
    }
    if (cell.hasClass("enableChk"))
        return cell.find("input").checked(_val1 == true);
    var edt = cell.children(".hasEditor");
    if (edt.length > 0)
        return Erp.SetFieldValue(edt.attr("id") + "-field", _val1, _val2);
    if (cell.children(".aspNetDisabled").length > 0) {
        return cell.find("input").checked(_val1 == true);
    }

    var f = "";
    if (cell.hasClass("__hasFormat")) {
        var col = Erp.Grid._getCol(gridId, cell.index());
        if (col && col._data && col._data.DataFormatString)
            f = col._data.DataFormatString;
    }

    if (cell.hasClass("__date")) {
        if (_val1 instanceof Date)
            cell.data("__value", _val1);
    }
    else if (cell.hasClass("__lookup")) {
        cell.data("__value", _val1);
        if ($.isEmpty(_val1))
        { }
        else if ($.isEmpty(_val2)) {
            var ctl = $("#" + __EditGridItems[gridId][cell.index()]);
            if (ctl.length <= 0)
                return;
            ctl = $("#" + ctl.attr("id") + "-field");
            if (ctl.length <= 0)
                return;
            if (ctl.prop("tagName") == "SELECT")
                _val2 = ctl.children("[value=" + _val1 + "]").text();
            else {
                var eid = ctl.data("Eids");
                if (!$.isEmpty(eid))
                    Erp.GetRecordTitle(_val1, eid, function (result) {
                        var c = cell.children(".cell");
                        if (c.length <= 0)
                            c = cell;
                        c.html(f != "" ? String.localeFormat(f, result) : result);
                    });
                //return;
            }
        }

    }
    if (!$.isEmpty(_val2))
        _val1 = _val2;
    edt = cell.children(".cell");

    var old = cell.data("__dbValue");
    if (old == undefined || old == null) {
        var dv = (edt.length > 0 ? edt.text() : cell.text());
        if ($.isEmpty(dv))
            dv = "";
        if ($("#" + gridId).data("DisableTracking"))
            dv = _val1;
        cell.data("__dbValue", dv);
        old = dv;
    }

    if (edt.length <= 0) {
        cell.html("<span class='cell'></span>")
        edt = cell.children(".cell");
    }

    if (f != "") {
        edt.html(String.localeFormat(f, _val1));
        if (!cell.hasClass("__date") && !cell.hasClass("__lookup"))
            cell.data("__value", _val1);
    }
    else
        edt.html(_val1);

    if (!$("#" + gridId).data("DisableTracking")) {
        cell.removeClass("modified").addClass(old != edt.text() ? "modified" : "");
        if (cell.parent().removeClass("rowChanged").children(".modified").exists()) {
            cell.parent().addClass("rowChanged");
        }
    }
}

Erp.Grid.GetHeaderCell = function (gridId, col) {
    return $("#" + gridId + "_ctl00_Header").children("thead").children("TR").first().cells(Erp.Grid._getColInd(gridId, col));
}
Erp.Grid.GetHeaderText = function (gridId, col) {
    var cell = Erp.Grid.GetHeaderCell(gridId, col);
    var c = cell.children("a");
    if (c.length > 0) {
        return $.defaultVal(c.filter(".title").text(), c.first().text());
    }
    else
        return cell.text();
}
Erp.Grid.SetHeaderText = function (gridId, col, val) {
    var cell = Erp.Grid.GetHeaderCell(gridId, col);
    var c = cell.children("a");
    if (c.length > 0) {
        if (c.filter(".title").length > 0)
            c.filter(".title").html(val);
        else
            c.first().html(val);
    }
    else
        return cell.html(val);
}
Erp.Grid.SetFooterText = function (gridId, col, row, val) {
    var cell = Erp.Grid.GetFooterCell(gridId, col, row);
    if (!cell)
        return;
    if (cell.hasClass("hasEditor"))
        Erp.SetFieldValue(cell.children().first().attr("id").split("-Ctr")[0], val);
    else if (cell.find(".field-title ").length > 0)
        cell.find(".field-title ").html(val);
    else
        return cell.html(val);
}
Erp.Grid.GetFooterText = function (gridId, col, row) {
    var cell = Erp.Grid.GetFooterCell(gridId, col, row);
    if (!cell)
        return "";
    if (cell.hasClass("hasEditor"))
        return Erp.GetFieldValue(cell.children().first().attr("id").split("-Ctr")[0]);
    else if (cell.find(".field-title ").length > 0)
        return cell.find(".field-title ").html();
    else
        return cell.html();
}
Erp.Grid.SelectRow = function (gridId, row, bit) {
    var r = Erp.Grid._getRow(gridId, row);    
    if (r)
        $find(gridId).get_masterTableView().selectItem(r[0])
        //r.find(".gridSelect").removeClass("checked").addClass(bit ? "checked" : "");
}
Erp.Grid.IsRowSelected = function (gridId, row) {
    var r = Erp.Grid._getRow(gridId, row);
    return r && r.find(".gridSelect").hasClass("checked") && !r.isDisplayNone();
}
Erp.Grid.IsRowSelected_Multiple = function (gridId) {
    return $("#" + gridId).hasClass("allRecords") || $("#" + gridId + "_GridData").find(".gridSelect.checked").filter(".grid-row").length > 1;
}

Erp.Grid.GetRows = function (gridId) {
    return $("#" + gridId + "_ctl00").children("tbody").children(".grid-row");
}
Erp.Grid.GetSelectedRows = function (gridId) {
    var coll = $();
    $("#" + gridId + "_ctl00").children("tbody").children().each(function () {
        var tr = $(this);
        if (tr.isDisplayNone())
            return true;
        if (tr.cells(0).find(".checked,.cancelEditing").length > 0)
            coll.push(tr[0]);
    });
    return coll;
}
Erp.Grid.GetSelectedRowIndices = function (gridId) {
    var g = Erp.Grid._getGridView(gridId);
    var ent = $("#" + gridId).attr("entityid");
    if (!g)
        return null;
   
    var csv = [];

    $(g.get_element()).find("a.gridSelect").each(function () {
        if ($(this).hasClass("checked") && !$(this).closest("TR").isDisplayNone()) {
            csv.push($(this).closest("TR").index());
        }
    });
    return csv;
}
Erp.Grid.AddNewRow = function (gridId, nocheck) {
    return addNewGridRow(gridId, nocheck ? "AddNoCheck" : "Add");
}
Erp.Grid.AddFooterRow = function (gridId) {
    var trFooter = $("#" + gridId + "_ctl00_Footer").find(".rgFooter").last();
    var newFooter = $("<tr class='rgFooter'></tr>");
    trFooter.children().each(function () { var td = $("<td class='edtCtr'></td>"); td.NewID("ftr"); newFooter.append(td); });
    trFooter.after(newFooter);
    newFooter.NewID(gridId + "-ftr-");
    return newFooter;
}
Erp.Grid.GetRowCount = function (gridId) {
    var grid = Erp.Grid._getGridView(gridId);
    if (!grid)
        return 0;
    return grid.__databound ? Fn.CFlt($("#" + grid.get_id() + "DSC").html()) : 0;
}

Erp.Grid.DisplayRow = function (gridId, row,bit) {
    var r = Erp.Grid._getRow(gridId, row);
    if (r)
        $(r).setDisplay(bit);
}
Erp.Grid.DeleteRow = function (gridId, row,markForDelete) {
    var r = Erp.Grid._getRow(gridId, row);
    if (!r)
        return;
    r = $(r);
    var pid = r.attr("pk");
    var evt = $("#" + gridId).data("onrowdeleting");
    if (typeof evt == "function" && evt(gridId, { entityId: $("#" + gridId).attr("entityid"), row: Erp.Grid.GetRecordCell(gridId, 0).parent(), recordId: pid }) === false)
        return;
    evt = $("#" + gridId).data("onrowdeleted");
    if ($.isEmpty(pid)) {
        r.remove();
        if (typeof evt == "function")
            evt(gridId, { entityId: $("#" + gridId).attr("entityid"), recordId: pid });
    }
    else {
        if (markForDelete) {
            r.hide().attr("markfordelete", 1);
            r.find(".gridSelect").removeClass("checked");
        }
        else
            RadGrid_Delete(gridId, { "@ID": pid, "@EID": $("#" + gridId).attr("entityid"), WFCode: $.defaultVal(getQS("_wf"), "") });
    }
}
Erp.Grid.GetRowState = function (gridId, row) {
    var r = Erp.Grid._getRow(gridId, row);
    if (!r)
        return "";
    if ($("#" + gridId + "_ctl00").hasClass("EditGrid") && !r.attr("pk") && Erp.Grid.IsEmptyRow(gridId, r))
        return "EMPTY";
    else if (r.attr("markfordelete")=="1")
        return "DELETED";
    else if (r.hasClass("newRow") && !r.attr("pk"))
        return "NEW";
    else if (r.hasClass("rowChanged"))
        return "MODIFIED";
    else if (r.attr("pk"))
        return "NONE";

}
Erp.Grid.Refresh = function (gridId, serverCommand) {
    if ($("#" + gridId).attr("custombind") == "1")
        return;

    RefreshGrid(gridId);
}
Erp.Grid.BindOnLoad = function (gridId, bit) {
    var g = $(GridList).filter(function () { return this.ID == gridId; });
    if (g && g.length > 0)
        g[0].BindOnload = (bit == true);
}
Erp.Grid.DataBind = function (gridId, ds) {
    var result = {};
    var arr = [];
    if ($.isArray(ds))
        arr = ds;
    else if (ds) {
        if (ds.enableTree) {
            Erp.Grid.EnableTree(gridId, ds.parentField, ds.level);
            arr = (ds.data[0] && ds.data[0].hasOwnProperty("__level") ? ds.data : __getTreedata(ds.data, ds.pkField, ds.parentField, "", 0));
        }
        else
            arr = ds.data;
        if (ds.pkField)
            $("#" + gridId).attr("pkfield", ds.pkField)
    }
    result["Data"] = arr;
    result["GridID"] = gridId;
    result["Command"] = "BindGrid";
    result["EventData"] = "ClientDataBind";
    //result["CustomBind"] = true;
    result["TotalRecords"] = (arr == null ? 0 : arr.length);
    result["GridSql"] = "";
    //$("#" + gridId).attr("custombind", "1");
    if (window.__gridCache) {
        window.__gridCache[gridId] = null;
        window.__gridCache[gridId + "_Filtered"] = null;
    }
    $("#" + gridId).data("GridBinding", true);
    $("#" + gridId).attr("exp_currpage", "1")

    BindGridResult(result);
}
Erp.Grid.SetVisible = function (gridId, bit) {
    if ($("#" + gridId).length == 0)
        return;
    $("#" + gridId + "_Parent").setDisplay(bit);

    if (bit) {
        $("#" + gridId).show();
        Erp.Grid.Repaint(gridId);
    }
}
Erp.Grid.Repaint = function (gridId) {
    if ($("#" + gridId).length == 0)
        return;
    SetGridWidth(gridId);
    if (Erp.LayoutMode == "G" && Erp.LayoutMode == "RG") {
        var grid = $("#"+gridId + "_GridData");
        if (grid.parent().attr("disablescroll") == "1")
            return;
        grid.css("height", "");
        if (grid.closest(".RadGrid").hasClass("expandFilter"))
            return;
        var gap = 20 + (grid.parent().find(".rgPager").isVisible() ? 32 : 0) + (grid.parent().find(".rgFooter").isVisible() ? 32 : 0);
        grid.css("max-height", $(window).height() - (grid.offset() ? grid.offset().top : 0) - gap - 20);
    }
    
    SetGridWidth(gridId)
}

function __getTreedata(data, pkField, parentField, pidValue, level) {
    var tree = [];
    for (var i = 0; i < data.length; i++) {
        var dic = data[i];
        if (!$.isEmpty(pidValue) && $.isEmpty(dic[parentField]))
            continue;
        if (Fn.Eq(dic[parentField], pidValue)) {
            dic["__valid"] = true;
            dic["__level"] = level;
            dic["__parent"] = pidValue;
            tree.push(dic);
            var ch = __getTreedata(data, pkField, parentField, dic[pkField], level + 1);
            dic["__isParent"] = (ch.length > 0);
            tree = tree.concat(ch);
        }
    }
    if (level == 0) {
        for (var i = 0; i < data.length; i++) {
            var dic = data[i];
            if (!dic["__valid"]) {
                dic["__valid"] = true;
                dic["__level"] = 0;
                dic["__parent"] = "";
                dic["__isParent"] = false;
                tree.push(dic);
            }
        }
    }
    return tree;
}
Erp.Grid.EnableTree = function (gridId, parentColumn, level) {
    $("#" + gridId).attr("enabletreeview", "1").attr("treeparentkey", parentColumn).attr("treelevel", Fn.CInt(level));
    $("#" + gridId + "_ctl00").addClass("GridTree");
}

Erp.Grid.EnableGridEditing = function (gridId, bit) {
    if (bit === false) {
        $("#" + gridId).data("DisableInlineEditing", true);
        cancelEditing();
    }
    else
        $("#" + gridId).removeData("DisableInlineEditing");
}
Erp.Grid.EnableGridTracking = function (gridId, bit) {
    if (bit === false) {
        $("#" + gridId).data("DisableTracking", true);
    }
    else
        $("#" + gridId).removeData("DisableTracking");
}
Erp.Grid.ShowGridFilter = function (gridId, bit) {
    $("#" + gridId + "_gridFilter").show().children("div").setDisplay(bit === true);
    $("#" + gridId + "_gridFilter").children(".grid-adv-filter-btn").setDisplay(bit === true);
    $("#" + gridId + "_GridHeader").find(".rgFilterRow").setDisplay(bit === true);
    $("#" + gridId + "_gridFilter").css("width", bit === true ? "" : "auto");
    $("#" + gridId + "_gridFilter").children().setVisible(bit === true);
}
Erp.Grid.ExpandGridFilter = function (gridId, bit) {
    var f= $("#" + gridId + "_advFilterDrop")
    f.removeClass("expand").addClass(bit === true ? "expand" : "");
    if (bit === true) {
        $("#" + gridId + "_advFilter").before(f);
        $("#" + gridId + "_gridFilter").find(".grid-adv-filter-btn").hide();
    }
    else {
        $("#" + gridId + "_FltList").after(f);
        $("#" + gridId + "_gridFilter").find(".grid-adv-filter-btn").show();
    }
}
Erp.Grid.ApplyTopBarFilter = function (gridId) {
    $("#" + gridId + "_advFilter_itemctr").find(".fsearch").trigger("click")
}
Erp.Grid.SaveChanges = function (gridId) {
    if (finishRowEditing(null, gridId) === false) {
        Erp.ShowMessage("Please fix all errors before continuing.", "alert");
        return false;
    }
    if (Erp.LayoutMode == "A" && $.isEmpty(Erp.RecordID)) {
        Erp.SaveData();
        window._triggerAddBtn = function () { Erp.Grid.SaveChanges(gridId); };
        return;
    }
    Erp.HideMessage();
    Erp.Grid._getGrid(gridId).clearSelectedItems();
    var g = $("#" + gridId);
    var grid = Erp.Grid._getGridView(gridId);
    var rows = $("#" + gridId + "_ctl00>tbody").children(".rowChanged");
    var arr = [];
    var cols = grid.get_columns();
    var entityId = g.attr("entityid");
    var parentKey = $.defaultVal(g.attr("parentkey"), "");
    var evt = g.data("onrecordsaving");
    var hasEvt = (typeof evt == "function");
    var cellevt = g.data("oncellsaving");
    var hasCellEvt = (typeof cellevt == "function");
    var abort = false;
    var enablesortorder = g.attr("enablesortorder") == "1";
    var sortordercol = g.attr("sortordercol");
    for (var i = 0; i < rows.length; i++) {
        var tr = rows.eq(i);
        var mods = tr.children(".modified");
        if (mods.length <= 0) {
            tr.removeClass("rowChanged");
            continue;
        }
        var refId = tr.cells(0).NewID("tdSelect").attr("id");
        var ent = new Erp.Entity(entityId, $.defaultVal(tr.attr("pk"), ""), refId);
        ent.Data("__FromGrid", true);
        if (parentKey != "")
            ent.Data(parentKey, Erp.RecordID);
        if (!tr.attr("pk") && enablesortorder)
            ent.Data(sortordercol, Fn.CFlt(tr.children(".sortCell").html()));
        for (var j = 0; j < mods.length; j++) {
            var td = mods.eq(j);
            var colName = Erp.Grid.GetColumnFieldName(gridId, cols[td.index()]);
            var unqName = Erp.Grid.GetColumnUniqueName(gridId, cols[td.index()]);
            if ($.isEmpty(colName))
                continue;
            if (hasCellEvt) {
                var ret = cellevt(gridId, { entityId: entityId, cell: td, dataField: colName, colName: unqName, entity: ent, row: tr, entityList: arr });
                if (ret == false)
                    continue;
            }
            if (td.hasClass("enableChk"))
                ent.Data(colName, td.find("input").checked());
            else if (td.hasClass("__file")) {
                ent.Data(colName, $.defaultVal(td.data("TempName"), ""));
                ent.Data(colName + "_preview", $.defaultVal(td.data("FileName"), ""));
            }
            else if (td.hasClass("sortCell"))
                ent.Data(colName, Fn.CFlt(td.html() / 1));
            else {
                var v = td.data("__value");
                if (td.hasClass("__multilookup") && $.isArray(v)) {
                    var _v = [];
                    for (var i = 0; i < v.length; i++)
                        _v.push(v[i].RecordID);
                    v = _v;
                }

                if (v != undefined) {
                    if (v instanceof Date)
                        ent.Data(colName, moment(v).format("YYYY-MM-DD hh:mm A"));
                    else
                        ent.Data(colName, v);
                }
                else
                    ent.Data(colName, td.children(".cell").html());
            }
        }
        var skip = false;
        if (mods.length == 1 && mods.eq(0).hasClass("sortCell")) {
            ent.Data("__NoCalc", true);
            skip = true;
        }
        tr.children().removeClass("blinkText");
        arr.push(ent);
        if (!skip) {
            tr.children(".expr").each(function () {
                var td = $(this);
                var colName = Erp.Grid.GetColumnFieldName(gridId, cols[td.index()]);
                ent.Data(colName, '#EVAL#');
            });
            if (g.attr("enabletreeview") == "1" && !tr.attr("pk")) {
                ent.Data(g.attr("treeparentkey"), tr.attr("parentpk"));
            }
            if (hasEvt) {
                var ret = evt(gridId, { entityId: entityId, entity: ent, row: tr, entityList: arr });
                if (ret === null) {
                    arr.splice(arr.length - 1);
                    continue;
                }
                else if (ret === false) {
                    abort = true;
                    return false;
                }
            }
        }
    }
    Erp.Console(arr);
    if (abort)
        return false;
    evt = $("#" + gridId).data("ongridsaving");
    if (typeof evt == "function") {
        if (evt(gridId, { entityId: entityId, entityList: arr }) == false)
            return false;
    }
    showGridProgress(gridId, true);
    Erp.SaveEntity(arr, function (result) { gridEditingSaveSuccess(gridId, result); });
    return true;
}
function gridEditingSaveSuccess(gridId, result) {

    Erp.Console(result);
    var g = $("#" + gridId);
    var isTree = (g.attr("enabletreeview") == "1");
    var grid = Erp.Grid._getGridView(gridId);
    var cols = grid.get_columns();
    for (var i = 0; i < result.length; i++) {
        var r = result[i];
        if (!r.Identifier || r.Identifier.indexOf("tdSelect") < 0)
            continue;
        var tr = $("#" + r.Identifier).parent();
        if (tr.prop("tagName") != "TR")
            continue;
        var tdErr = tr.cells(0);
        tdErr.children(".saveError").remove();
        if (!r.Success) {
            tdErr.append("<span class='saveError' title=\"" + $.encodeXml(r.Message, true) + "\"></span>");
            continue;
        }

        tr.removeClass("rowChanged").children().removeClass("modified").removeData("__dbValue");
        tr.attr("pk", r.RecordID);
        if (isTree && r[g.attr("treeparentkey")]) {
            tr.attr("parentpk", r[g.attr("treeparentkey")]);
        }
        tr.children(".expr").each(function () {
            var td = $(this);
            var colName = Erp.Grid.GetColumnFieldName(gridId, cols[td.index()]);
            var c = td.children(".cell");
            var v = r[colName];
            if (td.hasClass("autoGen") && $.isEmpty(v))
                return true;
            if (c.exists())
                c.html(v);
            else
                td.html(v);
            td.addClass("blinkText");
        });
    }

    evt = $("#" + gridId).data("onsavecomplete");
    if (typeof evt == "function") {
        evt(gridId, { entityId: $("#" + gridId).attr("entityid"), result: result });
    }
    showGridProgress(gridId, false);
}
Erp.Grid.ApplyChanges = function (gridId) {
    if (finishRowEditing(null, gridId) === false) {
        Erp.ShowMessage("Please fix all errors before continuing.", "alert");
        return false;
    }
    var rows = $("#" + gridId + "_ctl00>tbody").children(".rowChanged");
    for (var i = 0; i < rows.length; i++) {
        var tr = rows.eq(i);
        var tdErr = tr.cells(0);
        tdErr.children(".saveError").remove();
        tr.removeClass("rowChanged").children().removeClass("modified entity-error").removeData("__dbValue").removeAttr("title");
    }
    return true;
}
Erp.Grid.Export = function (gridId, format, currPage) {
    if (!format || (format.toLowerCase() != "pdf" && format.toLowerCase() != "word" && format.toLowerCase() != "excel" && format.toLowerCase() != "csv"))
        format = "pdf";
    var args = RefreshGrid(gridId, false, true);
    if (!args)
        args = {};
    var arr = null;
    var colInfo = [];
    var dg = Erp.Grid._getGridView(gridId);
    if (!dg)
        return;
    currPage = (!$("#" + gridId).attr("databound") || $("#" + gridId).attr("exp_currpage") || currPage == true);
    var cols = dg.get_columns();
    for (var i = 1; i < cols.length; i++) {
        var c = cols[i];
        if (!c.get_visible())
            continue;
       
        var fmt = "";
        if (c._data && !Fn.IsEmpty(c._data.DataFormatString))
            fmt = c._data.DataFormatString;
        if (fmt.indexOf("<") > -1)
            fmt = "";
        colInfo.push({
            ColumnIndex: i, ColumnName: Erp.Grid.GetColumnUniqueName(gridId, c), FieldName: c.get_dataField(), HeaderText: Erp.Grid.GetHeaderText(gridId, i),
            FooterText: Erp.Grid.GetFooterText(gridId, i, 0), Width: Fn.Round($(c.get_element()).innerWidth(),0),
            HeaderStyle: "font-weight:bold", ItemStyle: "", FooterStyle: "font-weight:bold", Formatting: (currPage ? "" : fmt), Hidden: false
        });
    }
    args["AllowPaging"] = false;
    args["MaxRows"] = -1;

    args["MarginTop"] = 20;
    args["MarginLeft"] = 20;
    args["DocTitle"] = Erp.PageTitle;
    args["ExportCurrentPage"] = currPage;
    var evt = $("#" + gridId).data("ongridexporting");
    if (typeof evt == "function" && evt(gridId, format, colInfo, args) == false) {
        showGridProgress(gridId, false);
        return;
    }

    if (args["ExportCurrentPage"] == true)
        currPage = true;

    if (currPage) {
        arr = []
        var rows = Erp.Grid.GetRows(gridId);
        rows.each(function () {
            var a = [];
            var hasData = false;
            for (var i = 0; i < colInfo.length; i++) {
                var v = $(this).cells(colInfo[i].ColumnIndex).text();
                if (!$.isEmpty(v))
                    hasData = true;
                a.push(v);
            }
            if (hasData)
                arr.push(a);
        })

    }
    Erp.WebApi.ExportGrid(format, arr, colInfo, args, function (r) { window.open("../temp/" + r); showGridProgress(gridId, false); })
}

Erp.Grid.ClearSelection = function (gridId) {
    var tableView = Erp.Grid._getGridView(gridId);
    if (!tableView) return;
    $("#" + gridId).removeClass("grid-multiselected grid-selected");    
    tableView.clearSelectedItems();
    $(tableView.get_element()).find("a.gridSelect").removeClass("checked");
}
Erp.Grid.EnableMultiSelection = function (gridId,bit) {
    Erp.Grid.ClearSelection(gridId);
    if (bit === true) {
        $("#" + gridId).removeAttr("disablemultiselect");
        $("#" + gridId + "_ctl00_Header").removeClass("noMultiSelect");
    }
    else {
        $("#" + gridId).attr("disablemultiselect", "1");
        $("#" + gridId + "_ctl00_Header").addClass("noMultiSelect");
    }
}

Erp.Grid.Serialization = function (id, allow, cols) {
    //allow=> true,ALL,MODIFIED
    Erp.Grid.__serialize[id] = { allow: allow, cols: cols };    
}

Erp.Grid.OnRowClick = function (gridId, func) {
    if (typeof func != "function")
        return;
    $("#" + gridId + "_ctl00").on("click", "td", function () {
        var td = $(this);
        var grid = Erp.Grid._getGridView(gridId);
        var cols = grid.get_columns();
        var dataField = Erp.Grid.GetColumnFieldName(gridId, cols[td.index()]);
        var colName = Erp.Grid.GetColumnUniqueName(gridId, cols[td.index()]);
        
        func(gridId, { entityId: $("#" + gridId).attr("entityid"), row: td.parent(), cell: td, colName: colName, dataField: dataField });
    });
}
Erp.Grid.OnRowDblClick = function (gridId, func) {
    if (typeof func != "function")
        return;
    $("#" + gridId + "_ctl00").on("dblclick", "td", function () {
        var td = $(this);
        var grid = Erp.Grid._getGridView(gridId);
        var cols = grid.get_columns();
        var dataField = Erp.Grid.GetColumnFieldName(gridId, cols[td.index()]);
        var colName = Erp.Grid.GetColumnUniqueName(gridId, cols[td.index()]);
        func(gridId, { entityId: $("#" + gridId).attr("entityid"), row: td.parent(), cell: td, colName: colName, dataField: dataField });
    });
}
Erp.Grid.OnRowSelected = function (gridId, func) {
    Erp.RegisterEvent(gridId, "onrowselected", func);
}
Erp.Grid.OnRowAdding = function (gridId, func) {
    Erp.RegisterEvent(gridId, "onrowadding", func);
}
Erp.Grid.OnRowAdded = function (gridId, func) {
    Erp.RegisterEvent(gridId, "onrowadded", func);
}
Erp.Grid.OnRowEditing = function (gridId, func) {
    Erp.RegisterEvent(gridId, "onrowediting", func);
}
Erp.Grid.OnRowDataBound = function (gridId, func) {
    Erp.RegisterEvent(gridId, "onrowdatabound", func);
}
Erp.Grid.OnCellEditing = function (gridId, func) {
    Erp.RegisterEvent(gridId, "oncellediting", func);
}
Erp.Grid.OnCellChanged = function (gridId, func) {
    Erp.RegisterEvent(gridId, "oncellchanged", func);
}
Erp.Grid.OnCellValidating = function (gridId, func) {
    Erp.RegisterEvent(gridId, "oncellvalidating", func);
}
Erp.Grid.OnRowValidating = function (gridId, func) {
    Erp.RegisterEvent(gridId, "onrowvalidating", func);
}
Erp.Grid.OnRowDeleting = function (gridId, func) {
    Erp.RegisterEvent(gridId, "onrowdeleting", func);
}
Erp.Grid.OnRowDeleted = function (gridId, func) {
    Erp.RegisterEvent(gridId, "onrowdeleted", func);
}
Erp.Grid.OnRecordSaving = function (gridId, func) {
    Erp.RegisterEvent(gridId, "onrecordsaving", func);
}
Erp.Grid.OnCellSaving = function (gridId, func) {
    Erp.RegisterEvent(gridId, "oncellsaving", func);
}
Erp.Grid.OnGridSaving = function (gridId, func) {
    Erp.RegisterEvent(gridId, "ongridsaving", func);
}
Erp.Grid.OnSaveComplete = function (gridId, func) {
    Erp.RegisterEvent(gridId, "onsavecomplete", func);
}
Erp.Grid.OnGridDataBound = function (gridId, func) {
    Erp.RegisterEvent(gridId, "ongriddatabound", func);
}
Erp.Grid.OnGridExporting = function (gridId, func) {
    Erp.RegisterEvent(gridId, "ongridexporting", func);
}
Erp.Grid.OnGridBinding = function (gridId, func) {
    Erp.RegisterEvent(gridId, "ongridbinding", func);
}
Erp.Grid.OnGridAdvancedFilter = function (gridId, func) {
    Erp.RegisterEvent(gridId, "ongridadvancedfilter", func);
}
Erp.Grid.OnGridButtonClick = function (gridId, func) {
    Erp.RegisterEvent(gridId, "ongridbuttonclick", func);
}


Erp.Document.Load = function (editorId, opt, fn) {
    var ifr = $("#" + editorId)[0];
    if ($(ifr).attr("src1")) {
        $(ifr).attr("src", $(ifr).attr("src1"));
        $(ifr).removeAttr("src1");       
    }
    if (!opt)
        return;
    var args = $.extend({ "Action": "Load" }, ifr.DocumentArgs, opt);
    args.Action = "Load"
    if (!opt.Format)
        args.Format = "";
    if (!opt.DocName)
        args.DocName = "";

    ifr.DocumentArgs = args;
    if (typeof fn == "function")
        ifr.cbFn = fn;
    if (ifr && ifr.contentWindow && typeof ifr.contentWindow.EditorCallback == "function") {
        ifr.contentWindow.EditorCallback();
    }
    else if (ifr)
        ifr.loadDoc = true;
}
Erp.Document.Save = function (editorId, opt, fn) {
    var ifr = $("#" + editorId)[0];
    var args = $.extend({ "Action": "Update" }, ifr.DocumentArgs, opt);
    if (ifr && typeof ifr.OnDocumentSaving == "function" && ifr.OnDocumentSaving(args) == false)
        return;
    if (args.AllowInsert)
        args["Action"] = "Upsert";
    else
        args["Action"] = "Update";
    ifr.DocumentArgs = args;
    if (typeof fn == "function")
        ifr.cbFn = fn;
    if (ifr && ifr.contentWindow && typeof ifr.contentWindow.EditorCallback == "function") {
        ifr.contentWindow.EditorCallback();
    }
}
Erp.Document.GetEditor = function (editorId) {
    var ifr = $("#" + editorId)[0];

    if (ifr && ifr.contentWindow) {
        return ifr.contentWindow.Editor;
    }
    return null;
}
Erp.Document.OnInit = function (editorId, fn) {
    var ifr = $("#" + editorId)[0];
    if (!ifr || typeof fn != "function")
        return;
    ifr.OnDocumentInit = fn;
}
Erp.Document.OnDocumentLoaded = function (editorId, fn) {
    var ifr = $("#" + editorId)[0];
    if (!ifr || typeof fn != "function")
        return;
    ifr.OnDocumentLoaded = fn;
}
Erp.Document.OnDocumentSaving = function (editorId, fn) {
    var ifr = $("#" + editorId)[0];
    if (!ifr || typeof fn != "function")
        return;
    ifr.OnDocumentSaving = fn;
}
Erp.Document.OnDocumentSaved = function (editorId, fn) {
    var ifr = $("#" + editorId)[0];
    if (!ifr || typeof fn != "function")
        return;
    ifr.OnDocumentSaved = fn;
}
Erp.Document.ToggleFullScreen = function (editorId, bit) {
    var ifr = $("#" + editorId);
    if (ifr.length <= 0)
        return;
    if (bit && ifr.data("InFullScreen"))
        return;
    if (bit) {
        ifr.css({ "position": "fixed", "top": "0px", "right": "0px", "bottom": "0px", "left": "0px", "z-index": 100000 });
        $("#divCtr").css({ "height": "1px", "overflow": "hidden" });
    }
    else {
        ifr.css({ "position": "", "top": "", "right": "", "bottom": "", "left": "", "z-index": "" });
        $("#divCtr").css({ "height": "", "overflow": "" });
    }
}
Erp.Document.InsertText = function (editorId, text) {
    var ed = Erp.Document.GetEditor(editorId);
    if (ed == null)
        return;
    ed.commands.insertHtml.execute(text)
}
Erp.Document.InsertHyperLink = function (editorId, setting) {
    var ed = Erp.Document.GetEditor(editorId);
    if (ed == null)
        return;
    ed.commands.insertHyperlink.execute(setting)
}
Erp.Document.InsertMergeField = function (editorId, field) {
    var ed = Erp.Document.GetEditor(editorId);
    if (ed == null)
        return;
    ed.commands.createMergeField.execute(field)
    //var win = $("#" + editorId)[0].contentWindow;
    //var manager = ed.core.commandManager;
    //manager.getCommand(win.__aspxRichEdit.RichEditClientCommand.CreateField).execute();
    //manager.getCommand(win.__aspxRichEdit.RichEditClientCommand.InsertText).execute("MERGEFIELD " + field);
}
//https://documentation.devexpress.com/OfficeFileAPI/15329/Word-Processing-Document-API/Examples/Mail-Merge/How-to-Create-a-Master-Detail-Report
Erp.Document.InsertDocVariable = function (editorId, field) {
    var ed = Erp.Document.GetEditor(editorId);
    if (ed == null)
        return;
   
    var f = Fn.ToUpperCase(field);
    if (f == "DATE")
        ed.commands.createDateField.execute()
    else if (f == "TIME")
        ed.commands.createTimeField.execute();
    else if (f == "NUMPAGES")
        ed.commands.createPageCountField.execute()
    else if (f == "PAGE")
        ed.commands.createPageField.execute();
    else {
        ed.commands.createField.execute();
        ed.commands.insertText.execute("DOCVARIABLE " + field)
    }
        
}
Erp.Document.GetText = function (editorId, field) {
    var ed = Erp.Document.GetEditor(editorId);
    if (ed == null)
        return "";   
    return ed.document.activeSubDocument.text;
}

Erp.Pdf.Load = function (opt) {
    Erp.ShowPDF(opt);
}

Erp.Spread.Load = function (editorId, opt, fn) {
    Erp.Document.Load(editorId, opt, fn);
}
Erp.Spread.Save = function (editorId, opt, fn) {
    Erp.Document.Save(editorId, opt, fn);
}
Erp.Spread.GetEditor = function (editorId) {
    return Erp.Document.GetEditor(editorId);
}
Erp.Spread.OnInit = function (editorId, fn) {
    Erp.Document.OnInit(editorId, fn);
}
Erp.Spread.OnDocumentLoaded = function (editorId, fn) {
    Erp.Document.OnDocumentLoaded(editorId, fn)
}
Erp.Spread.OnDocumentSaved = function (editorId, fn) {
    Erp.Document.OnDocumentSaved(editorId, fn);
}
Erp.Spread.ToggleFullScreen = function (editorId, bit) {
    Erp.Document.ToggleFullScreen(editorId, bit);
}



Erp.RefreshParent = function (close, id) {
    if (typeof ParentWin == "object") {
        ParentWin.RefreshGrid(RefGrid);
    }
    else if (window.frameElement && $(window.frameElement).parent().hasClass("Popup")) {
        parent.RefreshGrid(window.frameElement.RefGrid);
    }
    else if (window.frameElement && !$.isEmpty(window.frameElement.RefGrid)) {
        window.setTimeout(function () { parent.RefreshGrid(window.frameElement.RefGrid); }, 800);
    }
    else if (window.opener && typeof window.opener.RefreshGrid == "function") {
        window.opener.RefreshGrid(id);
    }
    else if (window.frameElement && typeof parent.RefreshGrid == "function") {
        if (parent && typeof parent.toggleDetailsForm == "function")
            window.setTimeout(function () { parent.RefreshGrid(id); }, 800);
        else
            parent.RefreshGrid(id);
    }
    if (close)
        Erp.CloseWindow();
}

Erp.RefreshFields = function (data) {
    if (!data)
        return;
    for (var x in data) {
        if (x.indexOf("#REFRESH:") > -1) {
            var f = x.replace("#REFRESH:", "");
            var fld = Erp.GetField(f);
            if (fld && fld.Info) {                
                var el = fld.GetElement();
                if (el && el.closest(".entity").hasClass("redacted"))
                    continue;
                if (data[x] != "###") {
                    fld.Set(data[x]);
                    el.trigger("blur");
                }
                fld.Animate();
            }
        }
    }
}

Erp.ResetFields = function (container) {
    if (!(container instanceof $))
        container = container ? $("#" + container) : $(document.documentElement);
    container.find(".entity-field").each(function () {
        var id = ($(this).ID() + "~").replace("-Ctr~", "");
        var inf = Erp.GetFieldInfo(id);
        if (!inf)
            return true;
        Erp.SetFieldValue(inf, "", "");
    });
}

Erp.OpenWindow = function (url, loc, w, h,t,l) {
    if (typeof url == "string") {
        if ($.isEmpty(url))
            return;
        var f = loc;
        
        if (loc == window) {
            window.location = url;
            return;
        }

        loc = $.isEmpty(loc) ? "NEW" : loc;
        loc = loc.toUpperCase();
        var ifr = $("#ifrDetailsWindow");
        var ifr2 = (loc != "NEW" && loc != "POPUP" ? $("#" + f) : null);

        if (Erp.Responsive && loc == "POPUP") {
            w = w < 20 ? 20 : w; h = h < 20 ? 20 : h;
            var opts = (typeof w == "object" ? w : { height: h, width: w });
            if (opts.height > window.innerHeight - 90 || opts.width > window.innerWidth - 20)
                loc = "SELF";
        }

        if (loc == "NEW") {
            var win = window.open(url);
            win.ParentWin = window;
        }
        else if (loc == "POPUP") {
            w = w < 20 ? 20 : w; h = h < 20 ? 20 : h;
            loc = loc.split('|');
            var opts = (typeof w == "object" ? w : { height: h, width: w});
            opts.url = url;
            var p = $(document.body).ShowPopup(opts);
            p.find("iframe")[0].ParentWin = window;
            return p;
        }
        else if (ifr2.exists()) {
            ifr2.attr("src", url);
        }
        else if (ifr.exists()) {
            toggleDetailsForm(true, url);
            ifr[0].ParentWin = window;
        }
        else
            window.location = url;
    }
    else {
        if (typeof loc == "string")
            $("#" + loc).attr("src", _openWindow(url, null, true));
        else if (loc == window)
            window.location = _openWindow(url, null, true);
        else
            return _openWindow(url);
    }
}
Erp.GetActionUrl = function (url) {
    return _openWindow(url, null, true);
}
Erp.RefreshWindow = function (w) {
    if (typeof w == "string") {
        w = $("#" + w);
        w.attr("src", w.attr("src"));
    }
    else
        window.location = window.location;
}
Erp.NavigateToMenu = function (menuId) {
    if ($.isEmpty(menuId) || typeof LoadCurrentTab != "function")
        return;
    var btn = null;
    if (menuId instanceof $)
        btn = menuId;
    else {
        if (Erp.Responsive)
            btn = $("#FirstLevel,#SecondLevel,#ThirdLevel").find(".menuItem[menu=" + menuId + "]");
        else
            btn = $("#FirstLevel,#SecondLevel,#ThirdLevel").find(".menuItem[menu=" + menuId + "]");
    }
    if (!btn.exists())
        return;
    var data = btn.attr("level") + "|" + btn.attr("menu");
    LoadCurrentTab(data, btn);
    btn.click();
}
Erp._CanCloseWindow = function () {
    for (var i = 0; i < Erp.OnClose.EventList.length; i++) {
        if (typeof Erp.OnClose.EventList[i] == "function")
            if (Erp.OnClose.EventList[i]() == false)
                return false;
    }
    return true;
}
Erp.CloseWindow = function (refreshParent) {
    if (Erp._CanCloseWindow() == false)
        return false;
    if (window.frameElement && parent.Erp && parent.Erp.MobileHome && !$(window.frameElement).parent().hasClass("Popup")) {
        $(parent.document.body).removeClass("HideDash");
        if (parent.delayDashboardLoading)
            parent.loadFirstDashBoard();
    }
    if (refreshParent === true)
        Erp.RefreshParent();
    closeForm();
    if (Erp.Responsive)
        Erp.ToggleMobileLoader(false);
}
Erp.ResizeWindow = function (w,h) {
    if (window.frameElement && $(window.frameElement).parent().hasClass("Popup")) {
        $(window.frameElement).parent().css({ height: h, width: w });
        $(window.frameElement).parent().css("left", "+=" + (w / 2 - parseInt($(window.frameElement).parent().width()) / 2));
    }
    else
        window.resizeTo(w, h);

}
Erp.SaveWindow = function (flds) {
    Erp.SaveData(false, flds);
}
Erp.SaveAndClose = function (flds) {
    Erp.SaveData(true, flds);
}
Erp.SaveContainer = function (container) {
    if (!(container instanceof $))
        container = container ? $("#" + container) : $(document.documentElement);
    var flds = "";
    container.find(".entity-field").each(function () {
        var id = ($(this).ID() + "~").replace("-Ctr~", "");
        var inf = Erp.GetFieldInfo(id);
        if (!inf)
            return true;
        flds += inf.Name.replace(Erp.EntityID.toLowerCase()+"_","") + ",";
    });
    flds=flds.Trim(",");
    if ($.isEmpty(flds))
        return;
    Erp.SaveData(false, flds);
}
Erp._WfComplete = function () {
    for (var i = 0; i < Erp.OnWfComplete.EventList.length; i++) {
        if (typeof Erp.OnWfComplete.EventList[i] == "function")
            Erp.OnWfComplete.EventList[i]();
    }
}
Erp.OpenPopup = function (div, opt) {
    div = $("#" + div);
    if (div.parent().hasClass("entity-row"))
        div.parent().show();
    if (!opt)
        opt = {};
    opt.maxTop =70;
    div.ShowModal(opt);
}
Erp.HidePopup = function (div) {

    $("#" + div).HideModal();
}

Erp.GetPageTitle = function () {
    return Erp.PageTitle;
}
Erp.SetPageTitle = function (title) {
    var t =  $("#PageTitle");      
    Erp.PageTitle = title;
    document.title = Erp.PageTitle;
    if (t.length > 0) {
        var c = t.children("._t");
        if(c.length>0)
            c.html(Erp.PageTitle);
        else
            t.html(Erp.PageTitle);
    }
}
Erp.SetLabel = function (id, val, icon) {
    var lbl = id instanceof $ ? id : $("#" + id);
    if (Erp.Responsive) {
        if (lbl.hasClass("erp-Label")) {
            if (icon || icon == "")
                lbl.find("i").html(icon);
            lbl = lbl.find("span");

        }
        else if ($.defaultVal(lbl.prop("type"),"").toLowerCase() == "checkbox") {
            lbl = lbl.closest(".entity-field").children("._t");
            if (icon || icon == "")
                lbl.closest(".entity-field").children("i").removeClass("prefix").addClass(icon != "" ? "prefix" : "").html(icon).closest(".entity-field").removeClass("hic").addClass(icon != "" ? "hic" : "");
        }
        else if (lbl.parent().hasClass("erp-Field")) {
            lbl = lbl.parent().find("._lbl");
            if (icon || icon == "")
                lbl.parent().find("i").removeClass("prefix").addClass(icon != "" ? "prefix" : "").html(icon).closest(".entity-field").removeClass("hic").addClass(icon != "" ? "hic" : "");
        }
        else if (lbl.parent().hasClass("select-wrapper")) {
            lbl = lbl.parent().parent().find("._lbl");
            if (icon || icon == "")
                lbl.closest(".entity-field").find("i").removeClass("prefix").addClass(icon != "" ? "prefix" : "").html(icon).closest(".entity-field").removeClass("hic").addClass(icon != "" ? "hic" : "");
        }
        lbl.html(val);

        return;
    }
    var t = lbl.find(".field-title,.field-lbl");
    if (t.exists())
        t.html(val);
    else
        lbl.html(val);
}
Erp.GetLabel = function (id) {
    var lbl = $("#" + id);
    var t = lbl.find(".field-title,.field-lbl");
    if (t.exists())
        return t.html();
    else
        return lbl.html();
}
Erp.SetButtonLabel = function (id, val, icon) {
    if (Erp.Responsive) {
        $("#" + id).find("span").eq(0).html(val);
        if (icon)
            $("#" + id).find("i").eq(0).html(icon);
        return;
    }
    var ico = $("#" + id).children("span").html();
    $("#" + id).html("<span>" + ico + "</span>" + val);
}

Erp.RefreshLabels = function (container) {
    if (!(container instanceof $))
        container = container?$("#" + container):$(document.documentElement);
    var flds = "";
    container.find("[lblfor]").each(function () {
        var inf = Erp.GetFieldInfo($(this).attr("lblfor"));
        if (!inf)
            return true;
        Erp.SetLabel($(this), Erp.GetFieldText(inf));
    });
}


Erp.SetMandatory = function (id, m) {
    var fld = Erp.GetFieldInfo(id);
    if (!fld)
        return;
    fld.Mandatory = m;
    $("#" + fld.ID + "-Ctr").removeClass("mandatory").addClass(m ? "mandatory" : "");
}
Erp.SetDisplay = function (id, show) {
    var fld = Erp.GetField(id);
    if (fld.Info)
        fld.SetDisplay(show);
    else {
        var el = $("#" + id);
        if (Erp.Responsive && el.hasClass("erp-TabPanel")) {
            $("#" + id+"-tabLink").setDisplay(show);
            $("#" + id).setDisplay(show).removeClass("dragend-page").addClass(show ? "dragend-page" : "");
            $("#" + id).closest('.tabs-wrapper').swipeTab("refresh");
            return;
        }

        if (el.hasClass("ui-tabs-panel")) {
            var t = $("#" + id).closest(".ui-tabs").children("ul").find("li[aria-controls='" + id + "']");
            t.setDisplay(show);
            if (show) {
                t.children().trigger("click");
            }
            //ui-tabs-panel
            $("#" + id).hide().setDisplay(show && t.hasClass("ui-tabs-active"));
        }
        else if (el.hasClass("ui-accordion-content")) {
            el.closest(".ui-accordion").setDisplay(show);
        }
        else
            el.parent().hasClass("entityValue") ? el.closest(".entity").setDisplay(show) : $("#" + id).setDisplay(show);
        if (el.parent().hasClass("entity-row") && el.parent().children().length == 1)
            el.parent().setDisplay(show);
    }
    Erp.RedrawLayout();
}
Erp.ToggleDisplay = function (id, anim) {
    var fld = Erp.GetField(id);
    var d = (anim == true ? 250 : 0);
    if (fld.Info)
        fld.ToggleDisplay(anim);
    else {
        var el = $("#" + id);
        if (el.hasClass("ui-tabs-panel")) {
            $("#" + id).closest(".ui-tabs").children("ul").find("li[aria-controls='" + id + "']").slideToggle(d);
            $("#" + id).slideToggle(d);
        }
        else if (el.hasClass("ui-accordion-content")) {
            el.closest(".ui-accordion").slideToggle(d);
        }
        else
            el.parent().hasClass("entityValue") ? el.closest(".entity").slideToggle(d) : $("#" + id).slideToggle(d);
    }
}
Erp.SetVisible = function (id, show) {
    var fld = Erp.GetField(id);
    if (fld.Info)
        fld.SetVisible(show);
    else
        $("#" + id).setVisible(show);
}
Erp.SetEnable = function (id, show) {
    var fld = Erp.GetField(id);
    if (fld.Info)
        fld.SetEnable(show);
    else {
        var el = $("#" + id);
        if (el.hasClass("ui-tabs-panel")) {
            el.disableOverlay(!show);
            el.closest(".ui-tabs").tabs(show ? "enable" : "disable", el.index() - 1);
        }
        else if (el.hasClass("ui-accordion-content")) {
            el.disableOverlay(!show);
        }
        else if (el.hasClass("RadGrid")) {
            if (show)
                el.removeAttr("disabled").parent().removeClass("entity-disabled");
            else
                el.attr("disabled", "disabled").parent().addClass("entity-disabled");
            $("#" + id + "_cmd").setEnable(show, true)
        }
        else {
            if (el.prop("tagName") == "DIV" || el.prop("tagName") == "TABLE")
                el.disableOverlay(!show);
            else
                el.parent().hasClass("entityValue") ? el.closest(".entity").removeClass("entity-disabled").setEnable(b, "_dis").addClass(!b ? "entity-disabled" : "") : $("#" + id).setEnable(show, true);
        }
    }
}

Erp.SetParam = function (id, k, v) {
    var arr = arguments;
    if (arr.length < 3)
        return;

    if (id == window) {
        for (var i = 1; i < arr.length; i += 2)
            Erp.WindowParams[arr[i]] = arr[i + 1];
        return;
    }
    var el = null;
    if (id instanceof $)
        el = id;
    else if (id.indexOf("@") == 0) {
        el = Erp.GetField(id);
        if (el)
            el = el.GetElement();
    }
    else
        el = $("#" + id);

    for (var i = 1; i < arr.length; i += 2) {
        el.data("@@" + arr[i], arr[i + 1]);
        __prmList.push(el.attr("id") + ":" + arr[i]);
    }

    el.data("__ParamSet", true);
    return el;
}
Erp.GetParam = function (id, k) {
    if (id == window) {
        return Erp.WindowParams[k];
    }
    var el = null;
    if (id instanceof $)
        el = id;
    else if (id.indexOf("@") == 0) {
        el = Erp.GetField(id);
        if (el)
            el = el.GetElement();
    }
    else
        el = $("#" + id);
    return el.data("@@" + k);
}

Erp.RegisterEvent = function (id, evt, fun) {
    var el = null;
    if (typeof fun != "function")
        return;
    if (typeof id == "string") {
        if (id.indexOf("@") == 0)
            el = Erp.GetField(id).GetElement();
        else
            el = $("#" + id);
    }
    else if (id instanceof $)
        el = id;
    else
        return;
    if (el.exists()) {
        evt = (evt ? evt : "click");
        if (el.hasClass("RadGrid")) {
            if (evt.toUpperCase() == "CHANGE") {
                var g = $(GridList).filter(function () { return this.ID == el.attr("id"); })[0];
                if (g)
                    g.OnBind = function () { onFieldChange(fun, $(this)); };
            }
            else
                el.data(evt.toLowerCase(), fun);
            return;
        }
        else if (el.hasClass("Menu") || el.hasClass("erp-Menu")) {
            $('#' + id).on('click', '.menu-item,.menu-group,.erp-MenuItem', function (e) {
                e.stopPropagation();
                var btn = $(this);
                if (btn.hasClass("menu-item")) {
                    $("#" + id).find(".menu-item").removeClass("menu-selected");
                    btn.addClass("menu-selected");
                }
               
                fun($('#' + id), { id: btn.attr("id"), tag: btn.attr("tag"), value: (btn.hasClass("erp-MenuItem") ? btn.attr("val") : btn.attr("value")) }, btn);
                if (!$(this).hasClass("parent"))
                    $('#' + id).find(".menu-ctr").hide();
            })
            return;
        }

        var clik = $.defaultVal(el.attr("onclick"), "").replace("(this", "(that");
        el.removeAttr("onclick").attr("onclick2", clik);
        var inf = Erp.GetFieldInfo(el.ID());
        if (inf) {
            if (evt.toUpperCase() == "VALID") {
                inf.OnValid = fun;
                return;
            }
            else if (evt.toUpperCase() == "SAVE") {
                inf.OnSave = fun;
                return;
            }
            else if (evt.toUpperCase() == "LOAD") {
                inf.OnLoad = fun;
                return;
            }
            var f = Erp.GetField(el.ID());
            var t = inf.Type.toUpperCase();
            //if (evt.toUpperCase() == "CHANGE" && el.prop("tagName") != "SELECT" && (t == "TEXT" || t == "NUMBER" || t == "DATE" || t == "TIME" || t == "DATETIME"))
            //    evt = "blur";
            if (evt.toUpperCase() == "CHANGE" && t == "DDL") {
                evt = "selectchange";
                el.off(evt).on(evt, function () { onFieldChange(fun, $(this), { RecordID: $(this).data('RecordID'), EntityID: $(this).data('EntityID'), Text: $(this).val(), Keys: $(this).data('Keys'), CurrentRow: $(this).data('CurrentRow') }, f); });
            }
            else
                el.off(evt).on(evt, function () { onFieldChange(fun, $(this), f.Get(), f); });
        }
        else {
            //if (evt.toUpperCase() == "CHANGE" && el.prop("tagName") == "INPUT" && !el.hasClass("ui-list") && $.defaultVal(el.attr("type"), "").toUpperCase() != "CHECKBOX")
            //    evt = "blur";
            el.off(evt).on(evt, function () { onFieldChange(fun, $(this)); });
        }
    }
}


Erp.TriggerEvent = function (id, evt) {
    var el = null;
    if (typeof id == "string") {
        if (id.indexOf("@") == 0)
            el = Erp.GetField(id).GetElement();
        else
            el = $("#" + id);
    }
    else if (id instanceof $)
        el = id;
    else
        return;
    if (el.exists()) {
        evt = (evt ? evt : "change");
        if (el.hasClass("RadGrid")) {
            if (evt.toUpperCase() == "CHANGE") {
                var g = $(GridList).filter(function () { return this.ID == el.attr("id"); })[0];
                if (g)
                    g.OnBind({ GridID: el.attr("id") });
            }
            return;
        }
        var inf = Erp.GetFieldInfo(el.ID());
        if (inf) {
            var f = Erp.GetField(el.ID());
            var t = inf.Type.toUpperCase();
            if (evt.toUpperCase() == "CHANGE" && t == "DDL")
                evt = "selectchange";
        }

        el.trigger(evt.toLowerCase());
    }
}
Erp.ShowBusyMessage = function (msg, bit) {
    if (Erp.__sbms && Erp.__sbms["token"]) {
        return;
    }
    if (typeof bit == "string") {//this is a token not a bit. no other busymessage will be allowed if a token based busymessage is being displayed on screen
        if (!Erp.__sbms)
            Erp.__sbms = {};
        if (Erp.__sbms["token"])
            return;
        Erp.__sbms["token"] = bit;
    }
    //$.Notify({ Message: msg, NotifyOnly: bit == false });
    if (bit != false && $("#elNotifBusyMessage_bg").length==0)
        $(document.body).append('<div id="elNotifBusyMessage_bg" class="iziToast-overlay fadeIn" data-izitoast-ref="1657557407602,1657560224533" style="background: rgba(0, 0, 0, 0.6); z-index: 99998;"></div>');
    iziToast.success({
        id: 'elNotifBusyMessage',
        overlay: false,
        message: $.defaultVal(msg,"Please Wait"),
        position: 'topCenter',
        transitionInMobile: 'flipInX',
        transitionOutMobile: 'flipOutX',
        transitionIn: 'flipInX',
        transitionOut: 'flipOutX',
        timeout: false,
        icon: "spinIcon",
        close: false,
        zindex: 99999,
        backgroundColor: "#ffeac3",
        displayMode: 2,
        drag:false
    });
}
Erp.HideBusyMessage = function (tk) {
    if (Erp.__sbms) {
        if (tk && Erp.__sbms["token"] == tk)
            Erp.__sbms = null;
        else
            return;
    }
    

    $("#elNotifBusyMessage_bg").remove();
    if ($('#elNotifBusyMessage').length > 0)
        iziToast.hide({}, document.querySelector('#elNotifBusyMessage'));
    
}
var __OverrideSystemMessage = null;
Erp.ShowMessage = function (msg, type) {
    if (!msg) return;
    //$(".iziToast-overlay.fadeIn").remove();
    msg = $.extend({
        position: "bottomLeft",
        transitionInMobile: 'flipInX',
        transitionOutMobile: 'flipOutX',
        transitionIn: 'flipInX',
        transitionOut: 'flipOutX',
        zindex: 99999,
        layout: 2,
        timeout: 5001
    }, (typeof msg == "string" ? { message: msg } : msg));
    if (type == "success" || type == "error" || type == "alert")
        msg.theme = "light";
    else
        msg.Theme=(Erp.IsDarkTheme() ? "dark" : "light")
    type = $.defaultVal(type, "show").toLowerCase();
    //type = type != "success" && type != "error" && type != "alert" ? "alert" : type;
    var m = msg.message;
    if (typeof __OverrideSystemMessage == "function")
        m = __OverrideSystemMessage(msg);
    if (m == undefined)
        m = msg;
    msg.message = m;
    if (msg.timeout == 5001 && msg.message.length > 150)
        msg.timeout = 20000;
    else if (msg.timeout == 5001 && msg.message.length > 75)
        msg.timeout = 10000;
    //actMessage(m, type, 20);
    if (type == "alert") type = "warning";
    iziToast[$.defaultVal(type, "success")](msg);
}
Erp.ShowDialog = function (msg, buttons, formId, callback) {
    //$(".iziToast-overlay.fadeIn").remove();
    msg = $.extend({
        message: "",
        title:"",
        position: 'center',
        icon: "ico-question",
        transitionInMobile: 'flipInX',
        transitionOutMobile: 'flipOutX',
        transitionIn: 'flipInX',
        transitionOut: 'flipOutX',
        zindex: 1005,
        layout: 2,
        theme:(Erp.IsDarkTheme()?"dark": "light"),
        timeout: false,
        close: false,
        drag: false,
        overlay: true,
        disableCloseTransition: (typeof formId == "string")
    }, (typeof msg == "string" ? { message: msg } : msg));

    if (typeof formId == "function")
        callback = formId;

    var b = buttons;
    if (typeof b == "string") {
        b = b.split(',');
        buttons = [];
        for (var i = 0; i < b.length; i++)
            if (!$.isEmpty(b[i]))
                buttons.push({ label: b[i].Replace("_", " "), name: b[i] });
    }
    if ($.isArray(buttons)) {
        msg.buttons = [];
        for (var i = 0; i < buttons.length; i++) {
            msg.buttons.push(['<button name="' + buttons[i].name + '" ' + ($.isEmpty(buttons[i].css) ? "" : " class='" + buttons[i].css + "' ") + ' >' +
                ($.isEmpty(buttons[i].icon) ? "" : ("<i>" + buttons[i].icon + "</i>")) + buttons[i].label + '</button>',
                function (btnFn, name) {
                    if (typeof btnFn != "function")
                        return function (instance, toast) { instance.hide({ transitionOut: 'fadeOut' }, toast, name); };
                    return function (instance, toast) {
                        if (btnFn(name, instance, toast) != false)
                            instance.hide({ transitionOut: 'fadeOut' }, toast, name);
                    };
                }(callback, $.defaultVal(buttons[i].name, buttons[i].label))
            ]);
        }
    }
    var embed = typeof formId == "string" ? $("#" + formId) : null;
    if (formId instanceof $)
        embed = formId;

    if (embed && embed.length > 0) {
        msg.onOpening = function (f) {
            return function (instance, toast) {
                $(toast).find(".iziToast-texts").append(embed.show());
            };
        }(formId);

        if (embed.parent().length > 0) {// 0 in case of dynamic jquery object like $('<div>')
            msg.onClosing = function (f) {
                return function (instance, toast) {
                    window.setTimeout(function () { $(document.body).append(embed.hide()); }, instance.disableCloseTransition ? 5 : 1000);
                };
            }(formId);
        }
    }
    msg.class = $.defaultVal(msg.class) + " erpdialog";
    iziToast.show(msg);
}
Erp.HideMessage = function (id,token) {
    //$("#" + "actionMessage1" + "_Div").remove();
    //$("#" + "actionMessage1" + "_Frm").remove();
    if (id && $('#'+id).length > 0)
        iziToast.hide({}, document.querySelector('#'+id));
}
Erp.HideDialog = function (id,token) {
    //$("#" + "actionMessage1" + "_Div").remove();
    //$("#" + "actionMessage1" + "_Frm").remove();
    if (id && $('#' + id).length > 0)
        iziToast.hide(token, document.querySelector('#' + id));
}
Erp.OverrideSystemMessage = function (func) {
    __OverrideSystemMessage = func;
}
Erp.LoadVariable = function (varName, callback, callback2,pvtData) {
    if (typeof varName == "string" && typeof callback == "object" && callback.hasOwnProperty("EnablePaging") && typeof callback2 == "function") {
        var inf = getDbRefInfo(varName);
        if (!inf && typeof callback2 == "function") {
            callback2(varName);
            return null;
        }
        inf.EnablePaging = callback.EnablePaging;
        inf.CurrentPageIndex = callback.CurrentPageIndex;
        inf.PageSize = callback.PageSize;
        callback = callback2;
    }
    else if (typeof callback == "boolean" && callback === true)
        callback = "async:false";
    else if (typeof callback != "function")
        callback = function () { };
    var arr = $.isArray(varName) ? varName : [varName];
    for (var i = 0; i < arr.length; i++) {
        var inf = getDbRefInfo(arr[i]);
        if (inf)
            inf.Loaded = false;
    }
    evaluateDbReferences(arr, callback, varName, pvtData, pvtData ? "pvtData" : "");
}
Erp.LoadVariable_Filtered = function (varName, arrParams, pageInfo, callback) {
    var inf = getDbRefInfo(varName);
    if (!inf) {
        if (typeof pageInfo == "function")
            pageInfo(varName, arrParams);
        else if (typeof callback == "function")
            callback(varName, arrParams);
        return null;
    }
    if (typeof pageInfo == "object" && pageInfo.hasOwnProperty("EnablePaging")) {
        inf.EnablePaging = pageInfo.EnablePaging;
        inf.CurrentPageIndex = pageInfo.CurrentPageIndex;
        inf.PageSize = pageInfo.PageSize;
    }
    var cb = pageInfo;
    if (typeof callback == "function")
        cb = callback
    else if (typeof pageInfo == "function")
        cb = pageInfo;

    if (typeof cb != "function")
        cb = function () { };

    var arr = $.isArray(varName) ? varName : [varName];
    for (var i = 0; i < arr.length; i++) {
        var inf = getDbRefInfo(arr[i]);
        if (inf)
            inf.Loaded = false;
    }
    evaluateDbReferences(arr, cb, varName, arrParams, "GetDbValuesMulti");
}
Erp.GetRecordTitle = function (recId, entId, onSuccess) {
    if ($.isEmpty(recId) || $.isEmpty(entId)) {
        return;
    }
    var data = { Record: recId, Table: entId };

    Erp.WebApi.ExecuteSql("RecordTitle", "", data, function (r) { onSuccess($.defaultVal(r["Data"], "")); });
}
Erp.GetRecordTitleMulti = function (records, onSuccess) {
    if ($.isEmpty(records)) {
        return;
    }
    Erp.WebApi.GetRecordTitleMulti(records, function (r) { onSuccess(r); });
}
Erp.ExecuteTask = function (args, callback) {
    var data = new Object();
    data["Type"] = "ExecWF";
    data["@ID"] = $.defaultVal(args.RecordID, "");
    data["@EID"] = $.defaultVal(args.EntityID, "");
    data["@WFID"] = $.defaultVal(args.TaskID, "");
    for (var p in args) {
        if (p != "TaskID" && p != "RecordID" && p != "EntityID")
            data["DATA:" + p] = args[p];
    }
    var qs = GetQSColl();
    data["QS:ID"] = data["@ID"];
    data["QS:EID"] = data["@EID"];
    for (var x = 0; x < qs.length; x++) {
        var k = qs[x].Key.toLowerCase();
        if (k != "eid" && k != "w" && k != "id" && k != "_pt" && k != "_fc" && k != "_appr" && k != "filter" && k != "defaultfilter")
            data["QS:" + qs[x].Key] = qs[x].Value;
    }
    if (typeof callback != "function")
        callback = function () { };
    Erp.WebApi.ExecuteTask(data, callback);
}
Erp.ExecuteTaskScript = function (scriptID, args, callback) {
    if (!args)
        args = new Object();
    args["QS:ID"] = Erp.RecordID;
    args["QS:EID"] = Erp.EntityID;
    var qs = GetQSColl();
    for (var x = 0; x < qs.length; x++) {
        var k = qs[x].Key.toLowerCase();
        if (k != "eid" && k != "w" && k != "id" && k != "_pt" && k != "_fc" && k != "_appr" && k != "filter" && k != "defaultfilter")
            args["QS:" + qs[x].Key] = qs[x].Value;
    }
    if (typeof callback != "function")
        callback = function () { };
    Erp.WebApi.ExecuteTaskScript(scriptID, args, callback);
}
Erp.RegisterTask = function (data, callback) {
    if (!data)
        return;
    if (typeof callback != "function")
        callback = function () { };
    Erp.WebApi.RegisterTask(data, callback);
}
Erp.RaiseNotification = function (data, callback) {
    if (!data)
        return;
    var obj = $.extend(data, {});
    if (typeof callback != "function")
        callback = function () { };
    var users = ($.isArray(data.UserID) ? data.UserID : [Fn.CStr(data.UserID)]);
    if (users.length == 0 || $.isEmpty(users[0]))
        return callback();
    var records = ($.isArray(data.RecordID) ? data.RecordID : [Fn.CStr(data.RecordID)]);
    obj.RecordID = ""; obj.UserID = "";
    Erp.WebApi.RaiseNotification(users, records, obj, callback);
}

Erp.ServerCommand = function (command, userData, dataOnly, callback) {
    if (!userData)
        userData = {};
    var _do = false;
    if (typeof dataOnly == "boolean")
        _do = dataOnly;
    else if (typeof dataOnly == "function")
        callback = dataOnly;

    if (command instanceof $)
        command = command.attr("id");
    if (typeof callback != "function")
        callback = function () { };
    Erp.WebApi.ServerCommand(command, userData, callback, _do);
    return false;
}
Erp.ExecuteSql = function (sql, format, data, token, onSuccess) {
    if(!data)
	data={};
    data["Format"] = $.defaultVal(format, "");
    Erp.WebApi.ExecuteSql(sql, token, data, onSuccess);
}
Erp.ExecuteBatchSql = function (sql, data, token, onSuccess) {
    Erp.WebApi.ExecuteBatchSql(sql, token, data, onSuccess);
}
Erp.GetActualRecords = function (items, callback) {
    if (!$.isArray(items))
        return;
    if (typeof callback != "function")
        callback = function () { };
    if (items[0].indexOf("GRIDRESULT:") > -1)
        Erp.WebApi.GetActualRecords(items, callback);
    else {
        callback(items.splice(1));
    }
}
Erp.SaveGridSelection = function (items,key,format, callback) {
    if (!$.isArray(items))
        return;
    Erp.WebApi.SaveGridSelection(items, key, format, callback);
}
Erp.ClearGridSelection = function (key, onSuccess, onError) {
    Erp.WebApi.ClearGridSelection(key, onSuccess, onError);
}
Erp.ExportDocument = function (content, format, options) {
    if (!format || (format.toLowerCase() != "pdf" && format.toLowerCase() != "word" && format.toLowerCase() != "excel"))
        format = "pdf";
    if (!options)
        options = {};
    if (typeof options["MarginTop"] == "undefined")
        options["MarginTop"] = 20;
    if (typeof options["MarginLeft"] == "undefined")
        options["MarginLeft"] = 20;
    Erp.WebApi.ExportDocument(format, content, options, function (r) { window.open("../temp/" + r); });
}
Erp.ShowFileUpload = function (opt) {
    opt = $.extend({ fileExt: "", fileSize: null, showLink: false, linkUrl: "", title: "Upload File", parent: "", onUploadComplete: null, onUploadCancel: null }, opt);

    var upl = $find("CommonFileUploadField");
    upl.deleteAllFileInputs();
    if ($.isEmpty(opt.fileExt))
        upl.set_allowedFileExtensions([]);
    else
        upl.set_allowedFileExtensions(opt.fileExt);

    if (Fn.CFlt(opt.fileSize) <= 0)
        upl._maxFileSize = 0;
    else
        upl._maxFileSize = Fn.CInt(opt.fileSize * 1048576);

    if (!$.isEmpty(opt.title))
        $("#commonFileCtr").find(".mainHeading").html(opt.title);
    else
        $("#commonFileCtr").find(".mainHeading").html("Upload File");

    $("#commonFileCtr").attr("class", "FormSettings row");
    $("#commonFileCtr").find(".btnupload").addClass("disabled");
    $("#commonFileCtr").find(".label-warning").hide();
    if (opt.parent instanceof $) {
        opt.parent.append($("#commonFileCtr").css("position", "static").show());
        $("#commonFileCtr").find(".RedButton").hide();
    }
    else if (!$.isEmpty(opt.parent) && $("#" + opt.parent).exists()) {
        $("#" + opt.parent).append($("#commonFileCtr").css("position", "static").show());
        $("#commonFileCtr").find(".RedButton").hide();
    }
    else {
        if (Erp.Responsive) {
            Erp.ShowDialog({ id: "commonFileCtrDlg", title: $.defaultVal(opt.title, "Upload file"), iconText: '&#xf093;' }, '', 'commonFileCtr', function (cmd) { });
        }
        else {
            $(document.body).append($("#commonFileCtr"));
            $("#commonFileCtr").css("position", "fixed").ShowModal({ zindex: 100001 }).position({ my: "center center", at: "center center", of: window });
        }
    }
    if (opt.showLink)
        $("#commonFileCtr").find(".viewFile").attr("href", opt.linkUrl);
    else
        $("#commonFileCtr").find(".viewFile").hide();

    $("#commonFileCtr").data("FromScript", true);
    $("#commonFileCtr").data("ScriptOption", opt);
}
Erp.ShowPDF = function (opt) {
    if (typeof opt == "string")
        opt = { path: opt };
    opt = $.extend({ recordId: "", entityId: "", field: "", path: "", page: 0, window: "" }, opt);
    var p = opt.path;    
 
    if ($.isEmpty(p) && !$.isEmpty(opt.recordId))
        p = "getresource.ashx?id=" + opt.recordId + "&eid=" + opt.entityId + "&fld=" + opt.field;
    var url = AppRootPath + "/scripts/pdf/web/viewer.html?u=" + encodeURIComponent(p) + "#page=" + Fn.CInt(opt.page);
    if (opt.window instanceof $)
        opt.window.attr("src", url);
    else if (!$.isEmpty(opt.window))
        $("#" + opt.window).attr("src", url);
    else
        window.open(url);
}

Erp.SetUserPreference = function (key, value, onSuccess) {
    Erp.WebApi.SetUserPreference(key, value, onSuccess)
}
Erp.UpdateUserPreference = function (key, value, onSuccess) {
    Erp.WebApi.UpdateUserPreference(key, value, onSuccess)
}
Erp.GetUserPreference = function (key, onSuccess) {
    Erp.WebApi.GetUserPreference(key, onSuccess)
}


Erp.IsCrossOrigin = function (p) {
    try {
        var doc = (p ? p : parent).document;
        if (!doc)
            return true;
    } catch (e) {
        return true;
    }
    return false;
}
Erp.__getRootWin = function () {
    if (Erp.IsCrossOrigin())
        return window;
    var win = window;
    var trials = 0;
    while (!win.RootWindow) {
        win = win.parent;
        if (Erp.IsCrossOrigin(win))
            return null;
        trials++;
        if (trials > 20)
            return null;
    }
    return win;
}
Erp.__getHomeWin = function () {
    if (Erp.IsCrossOrigin())
        return null;
    var win = window;
    var trials = 0;
    while (!win.HomePage) {
        win = win.parent;
        if (Erp.IsCrossOrigin(win))
            return null;
        trials++;
        if (trials > 20)
            return null;
    }
    return win;
}
Erp.MobileCommand = function (commandName, data, callback) {
    var win = Erp.__getRootWin();
    if (!win)
        return;
    if (typeof callback == "function") {
        win.__mobileCallback = callback;
        win.__mobileCommandName = commandName;
    }
    if (!data)
        data = {};
    data.Type = commandName;
    win.Native("callback", data);

}
Erp.MobileNotification = function (data, callback) {
    var win = Erp.__getRootWin();
    if (!win)
        return;
    if (typeof callback == "function") {
        win.__mobileCallback = callback;
        win.__mobileCommandName = "MobileNotification";
    }
    if (!data)
        data = {};
    if (typeof data.Action == "object")
        data.Action = JSON.stringify(data.Action);

    data.Type = "MobileNotification";
    win.Native("callback", data);

}
Erp.ToggleMobileLoader = function (bit) {
    var win = Erp.__getHomeWin();
    if (!win)
        return;
    $(win.document.documentElement).removeClass("showLoader").addClass(bit == true ? "showLoader" : "");
}


Erp._isLoginVisible = false;
Erp._loginCallback = [];
Erp.Relogin = function (fn) {
    Erp._loginCallback.push(fn);
    var userData = Users.UserData;
    var usrName = Users.UserName;
    if ($.isEmpty(userData) && parent.Users) {
        userData = parent.Users.UserData;
        usrName = parent.Users.UserName;
    }
    if ($.isEmpty(userData) && opener && opener.Users) {
        userData = opener.Users.UserData;
        usrName = opener.Users.UserName;
    }
    if ($.isEmpty(userData)) {
        window.location = AppRootPath + '/system/error.aspx?Reason=Session Expired'
        return;
    }
    if (Erp._isLoginVisible)
        return;
    Erp._isLoginVisible = true;
    Erp.ShowDialog({ class: 'relogin', zindex: 999999, title: 'Session Expired For ' + usrName, message: '', iconText: '&#xf06a;' },
        [{ label: 'Login', name: 'Login', css: '__btnLogin', icon: "&#xf090;" }], $("<span id='__spnErr'></span><input type='password' id='__txtLoginPwd' placeholder='Password'>"),
        function (cmd, instance, toast) {
            if (cmd == "Login") {
                $("#__spnErr").hide();
                $(toast).addClass("loading");
                $.ajax({
                    crossDomain: true,
                    type: "GET",
                    url: AppRootPath + '/core/erpapi.asmx/AuthenticateUser',
                    data: { userName: "", password: $.defaultVal($("#__txtLoginPwd").val(), ""), companyCode: "", key: "", db: "", userData: userData },
                    contentType: "application/json; charset=utf-8",
                    dataType: "jsonp",
                    success: function (r) {
                        Erp._isLoginVisible = false;
                        $(toast).removeClass("loading");
                        if (r.success) {                            
                            for (var i = 0; i < Erp._loginCallback.length; i++)
                                if (typeof Erp._loginCallback[i] == "function")
                                    Erp._loginCallback[i]();
                            Erp._loginCallback = [];
                            instance.hide({}, toast);
                        }
                        else
                            $("#__spnErr").show().html(r.message);
                    },
                    failure: function (r) {
                        Erp._loginCallback = [];
                        Erp._isLoginVisible = false;
                        $(toast).removeClass("loading");
                        $("#__spnErr").show().html("Error Occured. Please login from home screen");
                    }
                });
                return false;
            }
    });
}

//Erp.BeginProgress()
//Erp.BeginProgress(true)
//Erp.BeginProgress(true,function(){})
//Erp.BeginProgress(true,true)
Erp.BeginProgress = function (showTitle, onChange) {
    var progCtr = $('#__progBarCtr');
    if ($("#__progBarCtr").length == 0) {
        $("body").append("<div id='__progBarCtr' class='progressbar-ctr'><table ><td valign='middle' class='_l'><div class='_index'></div><div class='prog'></div></td><td valign='middle' class='_r'><span>Initializing...</span></td></table></div>");
        progCtr = $('#__progBarCtr');
    }
    else
        $("#__progBarCtr").HideModal();
    if (typeof __ProgressBar == "undefined") {
        window.__ProgressBar = new ProgressBar.Circle(progCtr.find(".prog").eq(0)[0], {
            color: '#ff8f00',
            trailColor: '#e0e0e0',
            strokeWidth: 14,
            trailWidth: 8,
            easing: 'easeInOut',
            duration: 500
        });
    }
    Erp.SetProgress(0, false);
    progCtr.find("._index").html("");
    progCtr.find("._r").setDisplay(showTitle != false).children().html("Initializing...");
    progCtr.ShowModal(9999999).removeClass("jqModalPopup");
    progCtr.position({ my: "center center", at: "center center", of: window });
    if (typeof onChange == "boolean" && onChange == true) {
        __ProgressBar._clientMode = true;
        return;
    }
    __ProgressBar._clientMode = false;
    Erp.WebApi.Poll(Erp.UniqueID, false, 1, function (r) {
        Erp.SetProgress(r.text, (r.percent / 1 > 0 ? r.percent : r.index), r.count);
        if (typeof onChange == "function" && onchange(r) === false) {          
            Erp.EndProgress()
            return false;//close
        }
        if (r.percent >= 100 || (r.count / 1 > 0 && r.count == r.index)) {
            window.setTimeout(function () {              
                Erp.EndProgress()
            }, 200);
            return false;//close
        }

    });
    return progCtr;
}


/*
Erp.SetProgress(0,true);
Erp.SetProgress(50);
Erp.SetProgress("Message 123");
Erp.SetProgress("Message 123",30);
Erp.SetProgress("Message 123",1,3);
Erp.SetProgress(1,3);
*/
Erp.SetProgress = function (a, b, c) {
    var progCtr = $('#__progBarCtr');
    if (typeof a == "number" && (typeof b == "boolean" || typeof b == "undefined")) {
        __ProgressBar.setText(a + " %");
        if (typeof b == "boolean" && b === false)
            __ProgressBar.set(a / 100);
        else
            __ProgressBar.animate(a / 100);
        return
    }
    if (typeof a == "string" && typeof b == "undefined") {
        progCtr.find("._r").children().html(a);
        return;
    }
    if (typeof a == "string") {
        progCtr.find("._r").children().html(a);
    }

    if (typeof a == "number" && typeof b == "undefined") {
        __ProgressBar.setText(a + " %");
        __ProgressBar.animate(a / 100);
    }
    else if (typeof a == "number" && typeof b == "number") {
        progCtr.find("._index").html(a + "/" + b);
        var p = parseInt((a / b) * 100);
        __ProgressBar.setText((p == 100 && a < b ? 99 : p) + " %");
        __ProgressBar.animate(a / b);
    }
    else if (typeof c != "undefined") {
        progCtr.find("._index").html(b + "/" + c);
        var p = parseInt((b / c) * 100);
        __ProgressBar.setText((p == 100 && b < c ? 99 : p) + " %");
        __ProgressBar.animate(b / c);
    }
    else if (typeof b == "number") {
        __ProgressBar.setText(b + " %");
        __ProgressBar.animate(b / 100);
    }
}

Erp.EndProgress = function () {
    $("#__progBarCtr").HideModal();
    if (__ProgressBar._clientMode == false)
        Erp.WebApi.RemoveCacheData(Erp.UniqueID);
}

Erp.LoadResource = function (src, type, fn) {
    if (Fn.IsEmpty(src) || Fn.IsEmpty(type))
        return;
    if (!window.__rescachekeys)
        window.__rescachekeys = {}
    if (window.__rescachekeys[src + type])
        return;
    window.__rescachekeys[src + type] = true;

    if (Fn.Eq(type, "css"))
        $('<link/>', {
            rel: 'stylesheet',
            type: 'text/css',
            href: src
        }).appendTo('head');
    else {
        $.getScript(src, typeof fn == "function" ? fn : null);
    }
}


Erp.WebApi.safeInvoke = function (servicePath, methodName, useGet, params, onSuccess, onFailure, userContext, timeout, enableJsonp, jsonpCallbackParameter) {
    Sys.Net.WebServiceProxy.invoke(servicePath, methodName, useGet, params, function (r) {
        if (r && (r.StatusCode == 255 || (r[0] && r[0].StatusCode == 255)))
            Erp.Relogin(function () {
                Sys.Net.WebServiceProxy.invoke(servicePath, methodName, useGet, params, onSuccess, onFailure, userContext, timeout, enableJsonp, jsonpCallbackParameter);
            });
        else if (typeof onSuccess == "function")
            onSuccess(r);
    }, onFailure, userContext, timeout, enableJsonp, jsonpCallbackParameter);
}

Erp.WebApi.GridCommand = function (command, gridID, data, onSuccess, onError) {
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'GridCommand', false, {
        command: command, gridId: gridID, args: data
    }, onSuccess, typeof onError == "function" ? onError : function () { }, null, 0, true, "callback");
}
Erp.WebApi.ServerCommand = function (command, userData, onComplete, dataOnly) {
    var uiState = Erp._gatherData(true, dataOnly === true);
    var fieldInfo = [];
    if (!dataOnly) {
        for (var i = 0; i < Erp.FieldInfo.length; i++) {
            var f = Erp.FieldInfo[i];
            fieldInfo.push({ "ID": f.ID, "Name": f.Name, "DataType": f.DataType, "Type": f.Type, "Value": null });
        }
        for (var i = 0; i < Erp.FieldInfo_Prog.length; i++) {
            var f = Erp.FieldInfo_Prog[i];
            if ($("#" + f.ID).exists())
                fieldInfo.push({ "ID": f.ID, "Name": $.defaultVal(f.Name, ""), "DataType": $.defaultVal(f.DataType, ""), "Type": $.defaultVal(f.Type, ""), "Value": Erp.GetFieldValue(f.ID) });
        }
    }
    var prmInfo = {};
    //if (!dataOnly) {
        for (var i = 0; i < __prmList.length; i++) {
            var kv = __prmList[i].split(':');
            if (kv.length > 0)
                prmInfo[__prmList[i]] = Erp.GetParam(kv[0], kv[1]);
        }
        if (Erp && Erp.WindowParams) {
            for (p in Erp.WindowParams)
                prmInfo["window:" + p] = Erp.WindowParams[p];
        }
    //}

    if (!dataOnly) {
        for (var i = 0; i < GridList.length; i++) {
            var s = Erp.Grid.__serialize[GridList[i].ID];
            if (s && s.allow === false)
                continue;
            uiState["Grid:" + GridList[i].ID + ":GetRecordID"] = Erp.Grid.GetRecordID(GridList[i].ID);
            uiState["Grid:" + GridList[i].ID + ":GetRecordID_Multiple"] = Erp.Grid.GetRecordID_Multiple(GridList[i].ID);
            uiState["Grid:" + GridList[i].ID + ":GetRecordID_Filtered"] = Erp.Grid.GetRecordID_Filtered(GridList[i].ID);
            var keys = $.defaultVal($("#" + GridList[i].ID).attr("clientkeys"), "").split(",");
            for (var x = 0; x < keys.length; x++) {
                if (!$.isEmpty(keys[x])) {
                    uiState["Grid:" + GridList[i].ID + ":GetParamValue:" + x] = Erp.Grid.GetParamValue(GridList[i].ID, x);
                    uiState["Grid:" + GridList[i].ID + ":GetParamValue_Multiple:" + x] = Erp.Grid.GetParamValue_Multiple(GridList[i].ID, x);
                    uiState["Grid:" + GridList[i].ID + ":GetParamValue_Filtered:" + x] = Erp.Grid.GetParamValue_Filtered(GridList[i].ID, x);
                }
            }
            if (s && s.allow != false && !$.isEmpty(s.cols) && s.cols != false) {
                var scols = (typeof s.cols == "boolean" ? true : "," + s.cols + ",");
                var g = Erp.Grid._getGridView(GridList[i].ID);
                if (!g)
                    continue;
                var cols = g.get_columns();
                var rows = Erp.Grid.GetRows(GridList[i].ID);
                var arr = []; +
                rows.each(function () {
                    if (Erp.Grid.IsEmptyRow(GridList[i].ID, $(this)))
                        return true;
                    if (s.allow == true || s.allow.toUpperCase() == "ALL") {
                    }
                    else if (s.allow.toUpperCase() == "MODIFIED" && $(this).hasClass("rowChanged")) {
                    }
                    else
                        return true;
                    var r = { __RowState: ($(this).hasClass("newRow") && !$(this).attr("pk") ? "NEW" : ($(this).hasClass("rowChanged") ? "MODIFIED" : "")), __Pk: $.defaultVal($(this).attr("pk"), ""), __Selected: Erp.Grid.IsRowSelected(GridList[i].ID, $(this)) };
                    if ($(this).attr("markfordelete") == "1")
                        r.__RowState = "DELETED";
                    for (var x = 0; x < cols.length; x++) {
                        var c = cols[x].get_uniqueName().split('~')[1];
                        if ($.isEmpty(c))
                            continue;
                        if (scols != true && scols.indexOf("," + c + ",") < 0)
                            continue;
                        r[c] = Erp.Grid.GetEditorValue(GridList[i].ID, c, $(this));
                    }
                    arr.push(r);
                });
                var ci = [];
                for (var x = 0; x < cols.length; x++) {
                    var c = cols[x].get_uniqueName().split('~')[1];
                    if ($.isEmpty(c))
                        continue;
                    if (scols != true && scols.indexOf("," + c + ",") < 0)
                        continue;
                    ci.push(c);
                }
                uiState["Grid:" + GridList[i].ID + ":Serialized"] = arr;
                uiState["Grid:" + GridList[i].ID + ":ColInfo"] = ci;
            }
        }

        $("._rptbegin").each(function () {
            var a = Erp.Repeater.GetTokens($(this).attr("rptid"), $(this).attr("token"));
            //for (var i = 0; i < a.length; i++) { var _t = $(this).attr("token"); var c = Erp.Repeater._changes[_t]; a[i].hasChanges = (($.isArray(c) && c.length > 0) || Erp.Repeater._inserts[_t]); }
            uiState["Repeater:" + $(this).attr("rptid") + ":" + $.defaultVal($(this).attr("token"), "")] = JSON.stringify(a);
        });
    }

    uiState["UniqueID"] = Erp.UniqueID;
    Erp.ShowBusyMessage("Please Wait...");
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'ServerCommand', false, {
        command: command, userData: userData, uiState: uiState, fieldInfo: fieldInfo, prms: prmInfo
    }, function (r) {
        Erp.HideBusyMessage(false);
        if (r["___Script"]) {
            eval(r["___Script"]);            
        }
        delete r["___Script"];
        onComplete(command,r);
    }, function (r) { Erp.HideBusyMessage(false); }, null, 0, true, "callback");
}
Erp.WebApi.SaveData = function (data, onSuccess, onError) {
    var fieldInfo = [];
    var prmInfo = {};
    data["UniqueID"] = Erp.UniqueID;
    if (Erp.ScriptingEnabled) {
        for (var i = 0; i < Erp.FieldInfo.length; i++) {
            var f = Erp.FieldInfo[i];
            fieldInfo.push({ "ID": f.ID, "Name": f.Name, "DataType": f.DataType, "Type": f.Type, "Value": null });
        }
        for (var i = 0; i < Erp.FieldInfo_Prog.length; i++) {
            var f = Erp.FieldInfo_Prog[i];
            if ($("#" + f.ID).exists())
                fieldInfo.push({ "ID": f.ID, "Name": $.defaultVal(f.Name, ""), "DataType": $.defaultVal(f.DataType, ""), "Type": $.defaultVal(f.Type, ""), "Value": Erp.GetFieldValue(f.ID) });
        }

        for (var i = 0; i < __prmList.length; i++) {
            var kv = __prmList[i].split(':');
            if (kv.length > 0)
                prmInfo[__prmList[i]] = Erp.GetParam(kv[0], kv[1]);
        }
        if (Erp && Erp.WindowParams) {
            for (p in Erp.WindowParams)
                prmInfo["window:" + p] = Erp.WindowParams[p];
        }
        for (var i = 0; i < GridList.length; i++) {
            var s = Erp.Grid.__serialize[GridList[i].ID];
            if (s && s.allow === false)
                continue;
            data["Grid:" + GridList[i].ID + ":GetRecordID"] = Erp.Grid.GetRecordID(GridList[i].ID);
            data["Grid:" + GridList[i].ID + ":GetRecordID_Multiple"] = Erp.Grid.GetRecordID_Multiple(GridList[i].ID);
            data["Grid:" + GridList[i].ID + ":GetRecordID_Filtered"] = Erp.Grid.GetRecordID_Filtered(GridList[i].ID);
            var keys = $.defaultVal($("#" + GridList[i].ID).attr("clientkeys"), "").split(",");
            for (var x = 0; x < keys.length; x++) {
                if (!$.isEmpty(keys[x])) {
                    data["Grid:" + GridList[i].ID + ":GetParamValue:" + x] = Erp.Grid.GetParamValue(GridList[i].ID, x);
                    data["Grid:" + GridList[i].ID + ":GetParamValue_Multiple:" + x] = Erp.Grid.GetParamValue_Multiple(GridList[i].ID, x);
                    data["Grid:" + GridList[i].ID + ":GetParamValue_Filtered:" + x] = Erp.Grid.GetParamValue_Filtered(GridList[i].ID, x);
                }
            }
            if (s && s.allow != false && !$.isEmpty(s.cols) && s.cols != false) {
                var scols = (typeof s.cols == "boolean" ? true : "," + s.cols + ",");
                var g = Erp.Grid._getGridView(GridList[i].ID);
                if (!g)
                    continue;
                var cols = g.get_columns();
                var rows = Erp.Grid.GetRows(GridList[i].ID);
                var arr = [];
                rows.each(function () {
                    if (Erp.Grid.IsEmptyRow(GridList[i].ID, $(this)))
                        return true;
                    if (s.allow == true || s.allow.toUpperCase() == "ALL") {
                    }                   
                    else if (s.allow.toUpperCase() == "MODIFIED" && $(this).hasClass("rowChanged")) {
                    }
                    else
                        return true;
                    var r = { __RowState: ($(this).hasClass("newRow") && !$(this).attr("pk") ? "NEW" : ($(this).hasClass("rowChanged") ? "MODIFIED" : "")), __Pk: $.defaultVal($(this).attr("pk"), ""), __Selected: Erp.Grid.IsRowSelected(GridList[i].ID, $(this)) };
                    if ($(this).attr("markfordelete") == "1")
                        r.__RowState = "DELETED";
                    for (var x = 0; x < cols.length; x++) {
                        var c = cols[x].get_uniqueName().split('~')[1];
                        if ($.isEmpty(c))
                            continue;
                        if (scols != true && scols.indexOf("," + c + ",") < 0)
                            continue;
                        r[c] = Erp.Grid.GetEditorValue(GridList[i].ID, c, $(this));
                    }
                    arr.push(r);
                });
                var ci = [];
                for (var x = 0; x < cols.length; x++) {
                    var c = cols[x].get_uniqueName().split('~')[1];
                    if ($.isEmpty(c))
                        continue;
                    if (scols != true && scols.indexOf("," + c + ",") < 0)
                        continue;
                    ci.push(c);
                }
                data["Grid:" + GridList[i].ID + ":Serialized"] = arr;
                data["Grid:" + GridList[i].ID + ":ColInfo"] = ci;
            }
        }
    }
    $("._rptbegin").each(function () {
        var a = Erp.Repeater.GetTokens($(this).attr("rptid"), $(this).attr("token"));
        //for (var i = 0; i < a.length; i++) { var _t = $(this).attr("token"); var c = Erp.Repeater._changes[_t]; a[i].hasChanges = (($.isArray(c) && c.length > 0) || Erp.Repeater._inserts[_t]); }
        data["Repeater:" + $(this).attr("rptid") + ":" + $.defaultVal($(this).attr("token"), "")] = JSON.stringify(a);
    });

    
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'SaveData', false, {
        data: data, fieldInfo: fieldInfo, prms: prmInfo
    }, onSuccess, onError, null, 0, true, "callback");
}

Erp.WebApi.SaveEntity = function (entList, onSuccess, onError) {
    if (entList && entList.length == 0 && typeof onSuccess == "function") {
        return onSuccess([]);
    }
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'SaveEntity', false, {
        entList: entList, info: {
            FormHash: FormHash,
            PageType: Erp.LayoutMode,
            FormID: FormID,
            EID: Erp.EntityID,
            "@ID": Erp.RecordID
        }
    }, onSuccess, onError, null, 0, true, "callback");
}
Erp.WebApi.LoadEntity = function (cols, entList, onSuccess, onError) {
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'LoadEntity', false, {
        cols: cols, entList: entList
    }, onSuccess, onError, null, 0, true, "callback");
}
Erp.WebApi.BatchOperation = function (action, entity, items, target, onSuccess, onError) {
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'BatchOperation', false, {
        action: action, entity: entity, items: items, target: target
    }, onSuccess, onError, null, 0, true, "callback");
}
Erp.WebApi.GetActualRecords = function (items, onSuccess, onError) {
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'GetActualRecords', false, {
        items: items
    }, onSuccess, onError, null, 0, true, "callback");
}
Erp.WebApi.SaveGridSelection = function (items, key, format, onSuccess, onError) {
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'SaveRecordsToSession', false, {
        items: items,
        key: key,
        format:(format?format:"")
    }, onSuccess, onError, null, 0, true, "callback");
}
Erp.WebApi.ClearGridSelection = function (key, onSuccess, onError) {
    Erp.WebApi.RemoveSessionData(key, onSuccess, onError);
}
Erp.WebApi.GetDbValues = function (async, dbRefs, data, onSuccess, onError) {
    if (async) {
        Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'GetDbValues', false, {
            dbRefs: dbRefs, data: data
        }, onSuccess, onError, null, 0, true, "callback");
    }
    else {
        $.ajax({
            async: false,
            type: "POST",
            url: AppRootPath + "/core/erpapi.asmx/GetDbValues",
            data: '{dbRefs: ' + JSON.stringify(dbRefs) + ',data:' + JSON.stringify(data) + ' }',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: onSuccess,
            failure: onError
        });
    }
}
Erp.WebApi.GetDbValuesMulti = function (dbRef, data, parameters, onSuccess, onError) {
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'GetDbValuesMulti', false, {
        dbRef: dbRef, parameters: parameters, data: data
    }, onSuccess, onError, null, 0, true, "callback");
}
Erp.WebApi.RegisterTask = function (data, onSuccess, onError) {
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'RegisterTask', false, {
        data: data
    }, onSuccess, onError, null, 0, true, "callback");
}
Erp.WebApi.RaiseNotification = function (users, records, data, onSuccess, onError) {
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'RaiseNotification', false, {
        users: users, records: records, data: data
    }, onSuccess, onError, null, 0, true, "callback");
}
Erp.WebApi.ExecuteTask = function (args, onSuccess, onError) {
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'ExecuteTask', false, {
        args: args
    }, onSuccess, onError, null, 0, true, "callback");
}
Erp.WebApi.ExecuteTaskScript = function (scriptID, args, onSuccess, onError) {
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'ExecuteTaskScript', false, {
        scriptID: scriptID, args: args
    }, onSuccess, onError, null, 0, true, "callback");
}
Erp.WebApi.ExecuteBatchSql = function (sql, token, listArgs, onSuccess, onError) {
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'ExecuteBatchSql', false, {
        sql: sql, token: token, listArgs: listArgs
    }, onSuccess, onError, null, 0, true, "callback");
}
Erp.WebApi.GetRecordTitleMulti = function (args, onSuccess, onError) {
if(!args)
args={};
Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'GetRecordTitleMulti', false, {
    entityIds: args
    }, onSuccess, onError, null, 0, true, "callback");
}
Erp.WebApi.ExecuteSql = function (sql, token, args, onSuccess, onError) {
    if (!args)
        args = {};
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'ExecuteSql', false, {
        sql: sql, token: token, args: args
    }, onSuccess, onError, null, 0, true, "callback");
}
Erp.WebApi._tokenize = function (salt, pwd) {
    $("#txtSqlToken").remove();
    var txt = $("<textarea id='txtSqlToken' style='position:absolute;top:100px;left:100px;height:400px;width:400px;z-index:10000000;background-color:#fff;color:#000'></textarea>");
    $(document.body).append(txt);
    txt.focus();
    txt.on("blur", function () {
        if ($(this).val() == "")
            return;
        Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", '_tokenize', false, {
            sql: $(this).val(), salt: salt, pwd: pwd, args: {}
        }, function (r) { prompt('Token', r); }, null, null, 0, true, "callback");
        $(this).remove();
    })
}

Erp.WebApi.SetSessionData = function (data, onSuccess) {
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'SetSessionData', false, {
        data: data
    }, onSuccess, null, null, 0, true, "callback");
}
Erp.WebApi.GetSessionData = function (data, onSuccess) {
    if (typeof onSuccess != "function")
        onSuccess = function () { };
    if (typeof data == "string")
        Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'GetSessionData', false, {
            key: data
        }, onSuccess, null, null, 0, true, "callback");
    else
        Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'GetSessionDataMulti', false, {
            data: data
        }, onSuccess, null, null, 0, true, "callback");
}
Erp.WebApi.RemoveSessionData = function (data, onSuccess) {
    if (typeof data == "string")
        data = [data];
    else if (!$.isArray(data))
        return;
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'RemoveSessionData', false, {
        keys: data
    }, onSuccess, null, null, 0, true, "callback");
}


Erp.WebApi.SetCacheData = function (data, onSuccess) {  
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'SetCacheData', false, {
        data: data
    }, onSuccess, null, null, 0, true, "callback");
}
Erp.WebApi.GetCacheData = function (data, onSuccess) {
    if (typeof onSuccess != "function")
        onSuccess = function () { };
    if (typeof data == "string")
        Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'GetCacheData', false, {
            key: data
        }, onSuccess, null, null, 0, true, "callback");
    else
        Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'GetCacheDataMulti', false, {
            data: data
        }, onSuccess, null, null, 0, true, "callback");
}
Erp.WebApi.RemoveCacheData = function (data, onSuccess) {
    if (typeof data == "string")
        data = [data];
    else if (!$.isArray(data))
        return;
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'RemoveCacheData', false, {
        keys: data
    }, onSuccess, null, null, 0, true, "callback");
}

Erp.WebApi.SetUserPreference = function (key,value, onSuccess) {
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'SetUserPreference', false, {
        key: key, value: value
    }, onSuccess, null, null, 0, true, "callback");
}
Erp.WebApi.UpdateUserPreference = function (key, value, onSuccess) {
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'UpdateUserPreference', false, {
        key: key, value: value
    }, onSuccess, null, null, 0, true, "callback");
}
Erp.WebApi.GetUserPreference = function (key,onSuccess) {
    if (typeof onSuccess != "function")
        onSuccess = function () { };
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'GetUserPreference', false, {
        key: key,abc:null
    }, onSuccess, null, null, 0, true, "callback");
}


Erp.WebApi.EnableSqlProfiler = function (enable, onSuccess) {
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'EnableSqlProfiler', false, {
        enable: enable
    }, onSuccess, null, null, 0, true, "callback");
    console.log(AppRootPath + "/meta/logviewer.aspx?mode=SQL");
}
//options:{PageSize:"A4",PageOrientation:"Landscape",MarginTop:"50",MarginRight:"",MarginBottom:"",MarginLeft:"50"}
Erp.WebApi.ExportDocument = function (format, content, options, onSuccess) {
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'ExportDocument', false, {
        format: $.defaultVal(format, "PDF"), content: content, options: options ? options : null
    }, onSuccess, null, null, 0, true, "callback");
}
Erp.WebApi.ExportGrid = function (format, arr, colInfo, args, onSuccess) {
    if (!arr)
        Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'ExportGrid', false, {
            format: format, args: args, colInfo: colInfo
        }, onSuccess, null, null, 0, true, "callback");
    else
        Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'ExportArray', false, {
            format: format, data: arr, args: args, colInfo: colInfo
        }, onSuccess, null, null, 0, true, "callback");
}

Erp.WebApi.CanRefreshGrid = function (args, onSuccess) {
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'CanRefreshGrid', false, {
        args: args
    }, onSuccess, null, null, 0, true, "callback");
}

Erp.WebApi.KeepAlive = function () {
    if (typeof window.__TimeStamp == "undefined") {
        window.__TimeStamp = "1";
        window.setInterval(function () { Erp.WebApi.KeepAlive(); }, 300000);
        return;
    }
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'KeepAlive', false, {
    }, function (r) { window.__TimeStamp = r;}, null, null, 0, true, "callback");
}

//Erp.WebApi.Connect("pqr",false,function(r){Erp.Console(r);})
//Erp.WebApi.Connect("pqr", false,3, function (r) { Erp.Console(r); })
Erp.WebApi.Connect = function (key, removeWhenFound, timer, receive) {
    if ($.isEmpty(key))
        return null;    
    var tmr = 0;
    if (typeof timer == "function")
        receive = timer;
    else
        tmr = timer;
    var source = new EventSource(AppRootPath + "/core/erpapi.asmx/__Poll?token=" + key + "&removeWhenFound=" + (removeWhenFound === true ? true : false) + "&timer=" + (tmr / 1 > 0 ? tmr : 0));

    source.addEventListener("open", function (event) {
    }, false);

    source.addEventListener("error", function (event) {
        if (event.eventPhase == EventSource.CLOSED) {
            //source.close();
        }
    }, false);

    source.addEventListener("message", function (event) {
        if (typeof receive != "function")
            return;
        var d = event.data;
        try { d = JSON.parse(d); } catch (e) { }
        if (receive(d, event) === false)
            source.close();
    }, false);

    return source;
}

Erp.WebApi.Poll = function (key, removeWhenFound, timer, receive) {
    if ($.isEmpty(key))
        return null;
    var tmr = 0;
    if (typeof timer == "function")
        receive = timer;
    else
        tmr = timer;
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'Poll', false, {
        token: key, removeWhenFound: (removeWhenFound === true ? true : false)
    }, function (r) {
        if (typeof receive != "function")
            return;
        var d = r;
        try { d = JSON.parse(d); } catch (e) { d = r;}
        if (receive(d) === false)
            return;
        else {
            window.setTimeout(
                Erp.WebApi.Poll
            , 3000, key, removeWhenFound, timer, receive);
        }
    }, null, null, 0, true, "callback");

   
}

Erp.WebApi.TA = function (u, r, d, onSuccess) {
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'TA', false, {
        u: u, r: r, d: d
    }, onSuccess, null, null, 0, true, "callback");
}
Erp.WebApi.TA2 = function (u, c, d, onSuccess) {
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'TA2', false, {
        u: u, c: c, d: d
    }, onSuccess, null, null, 0, true, "callback");
}
Erp.WebApi.BindChart = function (args, arrGroups, attrGroups, actualName, onSuccess, onError) {
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'BindChart', false, {
        args: args, arrGroups: arrGroups, attrGroups: attrGroups, actualName: actualName
    }, onSuccess, onError, null, 0, true, "callback");
}


Erp.WebApi.AddBookmark = function (value, onSuccess) {
    var divBk = (opener ? opener.$("#divBookmarks") : parent.$("#divBookmarks"));
    if (divBk.length > 0) {
        divBk.find("._nobookdata").remove();
        divBk = divBk.children("div");       
        if (!$.isEmpty(value.MenuId) && divBk.find("A[menu='" + value.MenuId + "']").length > 0)
            return;
        divBk.append("<a class='bookmark-item _new' refurl=\"" + value.Url + "\" href='javascript:void(0)' menu=\"" + value.MenuId + "\" ><span class='reorder'></span><span class='menuTxt'>" + value.Title + "</span><span class='closeBtn'></span></a>");
    }
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'AddBookmark', false, {
        value: value
    }, onSuccess, null, null, 0, true, "callback");
}
Erp.WebApi.RemoveBookmark = function (id,onSuccess) {
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'RemoveBookmark', false, {
        id: id
    }, onSuccess, null, null, 0, true, "callback");
}
Erp.WebApi.SortBookmarks = function (ids, onSuccess) {
    Erp.WebApi.safeInvoke(AppRootPath + "/core/erpapi.asmx", 'SortBookmarks', false, {
        ids: ids
    }, onSuccess, null, null, 0, true, "callback");
}
$(function () {
    Date.prototype.toJSON = function (key) {

        return moment(this).format("YYYY-MM-DD hh:mm A");
    };

    Sys.Serialization.JavaScriptSerializer.serialize = function (params) {

        return JSON.stringify(params);
    }
});