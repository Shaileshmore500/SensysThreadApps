
var EntryInfo=[];
var ActionInfo=[];
var wfCompanyId,wfUserId;
function InitUI() {

    $("#divDesigner").find(".___entry").each(function () {
        $(this).replaceWith(loadEntry($(this).attr("id")));
    })
    if ($.isArray(ActionInfo)) {
        var cmd = $("#divCmd");
        $(ActionInfo).each(function () {
            var cls = this.Name.toLowerCase();
            if (cls.indexOf("reject") > -1)
                cls = "REJECT";
            var b = $("<a class='" + this.Name + " "+cls+"' href=\"javascript:void(0)\" ua=\"" + this.Name + "\" >" + $.encodeXml(this.Title) + "</a>");
            cmd.append(b);
            if (!$.isEmpty(this.Name)) {
                var ua = this.Name;
                var uat = this.Title;
                b.on("click", function () { Erp.SaveData(ua, uat); })
            }
        })
    }
}
Erp.Load = function () {
    for (var i = 0; i < Erp.OnLoad.EventList.length; i++) {
        if (typeof Erp.OnLoad.EventList[i] == "function")
            _delayFunctionExec(Erp.OnLoad.EventList[i], "Load");
    }
}
Erp.LoadData = function () {
    if (window.frameElement && $.QS("d") != "1") {
        if ($.QS("multiAppr") == "1")
            $("#_wfTitle").show();
        else
            $(window.frameElement).css("height", $("#divDesigner").outerHeight(true) + (Erp.Responsive ? 10 : 3));

    }
    for (var i = 0; i < Erp.OnLoad.EventList.length; i++) {
        if (typeof Erp.OnLoad.EventList[i] == "function")
            _delayFunctionExec(Erp.OnLoad.EventList[i], "Load");
    }
}

Erp.SaveData = function (ua, uat) {
    if ($.isArray(ActionInfo) && ActionInfo.length>0) {
        ua = ua ? ua : ActionInfo[0].Name;
        ua = ua ? ua : ActionInfo[0].Title;
    }
    var refs = [];
    for (var i = 0; i < Erp.OnSave.EventList.length; i++) {
        if (typeof Erp.OnSave.EventList[i] == "function")
            refs = $.union(refs, hasDbReferences(Erp.OnSave.EventList[i], "Save"));
    }
    if (refs.length > 0) {
        evaluateDbReferences(refs, Erp._SaveData, ua, uat);
    }
    else
        Erp._SaveData(ua, uat);
}
var _userActionText="";
Erp._SaveData=function(ua,uat) {
    if ($.QS("pw") == "1")
        return;
    for (var i = 0; i < Erp.OnSave.EventList.length; i++) {
        if (typeof Erp.OnSave.EventList[i] == "function")
            if (Erp.OnSave.EventList[i](ua, uat) == false)
                return;
    }

    var error = false;
   
    var entries = $("[variable]");
    //todo : run validation
    var result = {};
    if (!error) {        
        entries.each(function () {
            var e=$(this);
            var varName=e.attr("variable");
            if($.isEmpty(varName))
                return true;
            var type = e.data("Type");
            var info = GetEntry(e.attr("id"));
            if (!info)
                result[varName] = e.val();
            else
                result[varName] = ReadEntryValue(e,info);
        })
    }
    var data = new Object();
    data["Type"] = "SaveData";
    data["WFID"] = $.QS("wfid");
    data["ID"] = "";
    data["EID"] = "";
    if ($.QS("d") != "1") {
        data["ID"] = parent.$.QS("ID");
        data["EID"] = parent.$.QS("EID");
        data["DialogMode"] = false;
        data["MultiApproval"] = ($.QS("multiAppr") == "1");
        if ($.QS("multiAppr") == "1")
            data["WFIDList"] = window.frameElement.WFIDList;
    }
    else {
        data["CS"] = $.QS("cs");
        data["CompID"] = wfCompanyId;
        data["UserId"] = wfUserId;
        data["DialogMode"] = true;
        data["MultiApproval"] = false;
    }
    data["Action"] = ua;
    _userActionText = data["ActionText"] = uat;
    
    if ($.QS("d") != "1") {        
        window.parent.$.Notify("Please Wait...");
    }
    else
        $.Notify("Submitting...");
    PageMethods.SaveData(data, result, PageMethodSuccess);
    
    return result;
}
function PageMethodSuccess(result) {
    
    _delayFunctionListExec(Erp.OnSaveSuccess.EventList, "OnSaveSuccess",
                        function () {
                            if ($.QS("d") == "1")
                                window.location = window.location;
                            else if ($.QS("d") != "1") {
                                                                
                                if ($.QS("multiAppr") == "1") {
                                    window.parent.$.Notify({ Message: "Response Submitted.", NotifyOnly: true });
                                    result["GridID"] = frameElement.RefGrid;
                                    window.parent.RefreshGridOnWFComplete(result);
                                }
                                else {
                                    window.parent.$.Notify(false);
                                    window.parent.refreshParentGridWF(result);
                                    $(window.frameElement).css("height", (parent.Erp.Responsive?"0":"40px")).setVisible(false);
                                    parent.$("#pnlFrame").children(".wfTitle").html("Response Submitted (" + _userActionText + ")<br/><a class='pageBtn cmdLink' style='margin-left: 26px;' href='javascript:void(0)' onclick='Erp.CloseWindow()'>Click To Close</a>");;
                                }

                                parent.Erp._WfComplete();
                                if ($.QS("multiAppr") == "1")
                                    Erp.CloseWindow();
                            }
                        });
}
function PageMethodError(data) {
    $.Notify(false);
    for (var i = 0; i < Erp.OnSaveError.EventList.length; i++) {
        if (typeof Erp.OnSaveError.EventList[i] == "function")
            _delayFunctionExec(Erp.OnSaveError.EventList[i], "OnSaveError");
    }
}

Erp.GetFieldValue = function (f) {
    var fld = $("#" + f);
    if (!fld.exists())
        return "";
    var info = GetEntry(fld.attr("id"));
    if (!info)
        return fld.val();
    return ReadEntryValue(fld, info);
}
Erp.SetFieldValue = function (f, v) {
    var fld = $("#" + f);
    if (!fld.exists())
        return;
    var info = GetEntry(fld.attr("id"));
    if (!info)
        return fld.val(v);
    SetEntryValue(fld, info,v);
}

Erp.OpenWindow = function (url, loc, w, h) {
    if ($.isEmpty(url))
        return;
    loc = $.isEmpty(loc) ? "NEW" : loc;   
    loc = loc.toUpperCase();
    var wnd = $.QS("d") == "1" ? window : parent;
    var ifr = wnd.$("#ifrDetailsWindow");
    if (loc == "NEW") {
        var win = window.open(url);
        win.ParentWin = wnd;
    }
    else if (loc == "POPUP") {
        w = w < 20 ? 20 : w; h = h < 20 ? 20 : h;
        loc = loc.split('|');
        var p = $(wnd.document.body).ShowPopup({ url: url, height: h, width: w });
        p.find("iframe")[0].ParentWin = wnd;
    }
    else if (ifr.exists()) {
        wnd.toggleDetailsForm(true, url);
        ifr[0].ParentWin = wnd;
    }
    else
        wnd.location = url;
}
Erp.CloseWindow = function () {
    if (window.frameElement && $(window.frameElement).parent().hasClass("Popup")) {
        $(window.frameElement).parent().prev().remove();
        $(window.frameElement).parent().remove();
    }
    else if (parent && typeof parent.toggleDetailsForm == "function")
        parent.toggleDetailsForm(false);

    else
        window.close();
}
Erp.SaveWindow = function () {
    Erp.SaveData();
}
Erp.SaveAndClose = function () {
    Erp.SaveData();
}

function GetEntry(name) {
    var result = $(EntryInfo).filter(function () {
        return this.Name && this.Name.toUpperCase() == name.toUpperCase();
    });
    return (result && result.length > 0 ? result[0] : null);
}
function loadEntry(id) {
    var entry = GetEntry(id);
    if (!entry)
        return "";
    var type = entry.Type;
    var item = newItem(entry.Type, entry.Name);
    item.find(".spnTitle").html(entry.Title);
    item.find(".spnDesc").html(entry.Description);
    item.attr("variable",entry.VarName);
    if (entry.Settings) {
        item.addClass($.defaultVal(entry.Settings.Css, ""));
        item.find(".spnTitle").addClass($.defaultVal(entry.Settings.TitleCss, ""));
        item.find(".spnDesc").addClass($.defaultVal(entry.Settings.DescriptionCss, ""));
    }
    if (typeof window["render" + type + "Entry"] == "function")
        window["render" + type + "Entry"](item, type, entry);
    else
        renderTextEntry(item, type, entry);
    return item;
}

function newItem(type, id) {
    var item = $("<div class='entry entry-" + type + "' data--Type='" + type + "'></div>");
    if (Erp.Responsive)
        item.addClass("erp-Field")
    if (id)
        item.attr("id", id);
    else
        item.NewID("Entry");
    var t = $("<span class='spnTitle'></span>");
    var d = $("<span class='spnDesc'></span>");    
    item.append(t);
    item.append(d);   
    item.append($("<div class='ctr'></div>"));
    return item;
}
function renderLabelEntry(item, type, info) {

}
function renderHeaderEntry(item, type, info) {
    
}
function renderTextEntry(item, type, info) {
    var ctr = item.find(".ctr");
    ctr.append($("<input type='text' class='ctl' />"));
    
}
function renderDescriptiveEntry(item, type, info) {
    var ctr = item.find(".ctr");
    ctr.append($("<textarea rows='3' class='ctl' ></textarea>"));
   
}
function renderNumberEntry(item, type, info) {
    var ctr = item.find(".ctr");
    var input = $("<input type='text' class='ctl' />");
    ctr.append(input);
    input.autoNumeric('init',{mDec :2,aPad :false,aSep :''});
}
function renderDateEntry(item, type, info) {
    var ctr = item.find(".ctr");
    var input = $("<input type='text' class='entity-date'  />");
    ctr.append(input);
    var s = info.Settings;
    if (s.ShowTime == true && s.ShowDate == true) {
        if (Erp.Responsive)
            input.addClass("ui-date").materialDateTimepicker({ useParentPicker: true, container: 'body', yearRange: 25, dateFormat: Users.ShortDateFormat_MOM, timeFormat: Users.TimeFormat_MOM });
        else
            input.datetimepicker({ dateFormat: Users.ShortDateFormat_JQ, timeFormat: Users.TimeFormat_JQ, scrollbar: true });
    }
    else if (s.ShowTime == true && s.ShowDate == false) {
        if (Erp.Responsive)
            input.addClass("ui-date").materialTimepicker({ useParentPicker: true, container: 'body', yearRange: 25, format: Users.TimeFormat_MOM });
        else
            input.attr("class", "entity-time").timepicker({ dateFormat: Users.ShortDateFormat_JQ, timeFormat: Users.TimeFormat_JQ, scrollbar: true });
    }
    else {
        if (Erp.Responsive)
            input.addClass("ui-date").materialDatepicker({ useParentPicker: true, container: 'body', yearRange: 25, format: Users.ShortDateFormat_MOM });
        else
            input.datepicker({ dateFormat: Users.ShortDateFormat_JQ, timeFormat: Users.TimeFormat_JQ });
    }
}


function renderSingleEntry(item, type, info) {
    renderCommonEntry(item, type, info)
}
function renderMultipleEntry(item, type, info) {
    renderCommonEntry(item, type, info)
}
function renderListEntry(item, type, info) {
    renderCommonEntry(item, type, info)
}

function renderCommonEntry(item, type, info) {
  
    var ctr = item.find(".ctr");
    var ddl;
    if (type == "List") {
        ddl = $("<select style='width:200px' ></select>")
        ctr.append(ddl);
    }
    var s = info.Settings;
    if (s.Items && $.isArray(s.Items))
        $(s.Items).each(function () {
            if (!this || $.isEmpty(this.Text))
                return true;
            var div = $("<div style='margin-top: 2px;white-space: nowrap;'></div>");
            _addListItem(type, (type == "List" ? ddl : div), this.Text,this.Value, info);
            ctr.append((type == "List" ? ddl : div));
        })

    
}
function _addListItem(type, ctr,txt, val, info) {
    var t = null;
    if (type == "List") {
        ctr.append($("<option value='"+$.defaultVal(val,txt)+"'>" + txt + "</option>"))
        return true;
    }
    if (type == "Multiple")
        t = $("<input value='" + $.defaultVal(val, "") + "' type='checkbox' />")
    else if (type == "Single")
        t = $("<input value='" + $.defaultVal(val, "") + "' type='radio' name='grp_" + info.Name + "'/>")
    
    var i = $("<label class='lbl-item'></label>");
    i.html("<span>"+txt+"</span>");
    i.prepend(t);    
    ctr.append(i);
    if (Erp.Responsive) {
        t.wrap("<label></label>")
        t.after("<span></span>")
    }
}

function renderScaleEntry(item, type, info) {
    var ctr = item.find(".ctr");
    var min = $("#txtScaleMin").val() / 1;
    var max = $("#txtScaleMax").val() / 1;
    var minText = $("#txtScaleMinTitle").val();
    var maxText = $("#txtScaleMaxTitle").val();
    var s = info.Settings;
    min = s.MinValue
    max = s.MaxValue
    minText = s.MinText
    maxText = s.MaxText
    if (!$.isEmpty(minText))
        ctr.append($("<span>" + minText + "</span>"))
    for (var i = min; i <= max; i++) {
        var item = $("<span class='_s' style='display:inline-block;margin-right: 5px;'></span>");
        item.append($("<div>" + i + "</div>"));
        var t = $("<input name='grp_" + info.Name + "' type='radio' />");
        item.append(t);
        ctr.append(item);
        if (Erp.Responsive) {
            t.wrap("<label></label>")
            t.after("<span></span>")
        }
    }
    if (!$.isEmpty(minText))
        ctr.append($("<span>" + maxText + "</span>"))
   
}

function ReadEntryValue(item,info) {
    if (typeof window["read" + info.Type + "EntryValue"] == "function")
        return window["read" + info.Type + "EntryValue"](item, info);
    else
        return readTextEntryValue(item, info);
}
function readTextEntryValue(item, info) {
    return item.find(".ctl").val()
}
function readNumberEntryValue(item, info) {
    var val = item.find(".ctl").val();
    return isNaN(val) || $.isEmpty(val) ? 0 : parseFloat(val);
}
function readDateEntryValue(item, info) {
    var ctl = item.find(".ctr");
    var s = info.Settings;
    if (!s)
        return null;
    try{
        var val = null;
        if (s.ShowTime == true && s.ShowDate == true) {
            var m = {};
            if (Erp.Responsive) {
                var d = null;
                if (!$.isEmpty(ctl.children(".entity-date").eq(0).val()))
                    d = ctl.children(".entity-date").eq(0).materialDateTimepicker("getDateTime");
                m = (!d ? null : moment(d));
            }
            else {
                var d = ctl.children(".entity-date").datetimepicker("getDateTime");
                m = (!d ? null : moment(d));
            }
            val= m ? m.format("YYYY-MM-DD hh:mm A") : null;
        }
        else if (s.ShowTime == true && s.ShowDate == false) {
            var m = {};
            if (Erp.Responsive) {
                var d = null;
                if (!$.isEmpty(ctl.children(".entity-time").eq(0).val()))
                    d = ctl.children(".entity-time").materialTimepicker('getTime');
                m = (!d ? null : moment(d));
            }
            else {
                var d = ctl.children(".entity-time").timepicker().getTime();
                m = (!d ? null : moment(d));
            }
            val = m ? m.format("YYYY-MM-DD hh:mm A") : null;
        }
        else {
            var m = {};
            if (Erp.Responsive) {
                var d = null;
                if (!$.isEmpty(ctl.children(".entity-date").eq(0).val()))
                    d = ctl.children(".entity-date").eq(0).materialDatepicker("getDate");
                m = (!d ? null : moment(d));
            }
            else {
                var d = ctl.children(".entity-date").datepicker("getDate");
                m = (!d ? null : moment(d));
            }
            val = m ? m.format("YYYY-MM-DD") : null;
        }
    }
    catch (err) { val = null;}
   
    return val;
   
}
function readSingleEntryValue(item, info) {
    var ctl = item.find("input:checked");
    if (ctl.exists()) {
        return $.defaultVal(ctl.val(), (Erp.Responsive ?ctl.closest(".lbl-item").children("span").html() : ctl.next().html()));
    }
    return "";
}
function readListEntryValue(item, info) {
    return item.find("select").val();
}
function readMultipleEntryValue(item, info) {
    var ctl = item.find("input:checked");
   
    if (!ctl.exists())
        return "";
    var val = "";
    ctl.each(function () { val += $.defaultVal($(this).val(), (Erp.Responsive ? $(this).closest(".lbl-item").children("span").html() : $(this).next().html())) + ","; })
    return val.Trim(',');
}
function readScaleEntryValue(item, info) {
    var ctl = item.find("input:checked");
    val = 0;
    if (ctl.exists()) {
        val = ctl.closest("._s").find("div").html();
        val = isNaN(parseInt(val)) ? 0 : parseInt(val);
    }
    return val;
}

function SetEntryValue(item, info,value) {
    if (typeof window["set" + info.Type + "EntryValue"] == "function")
        return window["set" + info.Type + "EntryValue"](item, info, value);
    else
        return setTextEntryValue(item, info, value);
}
function setTextEntryValue(item, info, value) {
    return item.find(".ctl").val(value)
}
function setNumberEntryValue(item, info, value) {
    item.find(".ctl").val(Fn.CFlt(value));
}
function setDateEntryValue(item, info, value) {
    if (!value)
        return;    
    var ctl = item.find(".ctr");
    var s = info.Settings;
    if (!s)
        return null;
    if (s.ShowTime == true && s.ShowDate == true) {       
        ctl.children(".entity-date").datetimepicker("setDateTime", value);
    }
    else if (s.ShowTime == true && s.ShowDate == false)
        ctl.children(".entity-time").timepicker().setTime(value);
    else
        ctl.children(".entity-date").datepicker("setDate", value);

   
}
function setSingleEntryValue(item, info, value) {
    value=(value?value.toUpperCase():"");
    item.find("input").checked(false).each(function () { if ($(this).val().toUpperCase() == value || $(this).next().html().toUpperCase() == value) $(this).checked(true); });
}
function setListEntryValue(item, info, value) {
    item.find("select").val(value);
}
function setMultipleEntryValue(item, info, value) {
    value = $.isArray(value) ? value : [value];
    var ctl = item.find("input");
    ctl.checked(false).each(function () {
        for (var i = 0; i < value.length; i++) {
            if ($(this).val().toUpperCase() == value[i].toUpperCase() || $(this).next().html().toUpperCase() == value[i].toUpperCase())
                $(this).checked(true);
        }
    });
}
function setScaleEntryValue(item, info, value) {
    var ctl = item.find("input");
    ctl.checked(false).eq(Fn.CInt(value)).checked(true);    
}