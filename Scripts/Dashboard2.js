function makeGridster1(div) {
    div.gridster({
        widget_selector: ".wdg:not(.noconstraint)",
        widget_base_dimensions: [100, 100],
        autogenerate_stylesheet: true,
        widget_margins: [5, 5],
        shift_widgets_up: false,
        shift_larger_widgets_down: false,
        resize: {
            enabled: true
        },
        collision1: {
            wait_for_mouseup: true
        }
    });
    if (readOnlyMode == 1) {
        var g = div.data("gridster");
        g.disable();
    }
}
function makeGridster(div,readonly) {
    div.gridster({
        widget_selector: ".wdg:not(.noconstraint)",
        widget_base_dimensions: [(readonly ? "auto" : MinWidgetWidth), MinWidgetHeight],
        widget_margins: [WidgetGap / 2, WidgetGap / 2],
        autogenerate_stylesheet: (readonly),
        min_cols: (readonly ? 1 : undefined),
        max_cols: (readonly ? MaxCols : undefined),
        min_rows: 1,
        max_rows: 150,
        shift_widgets_up: false,
        shift_larger_widgets_down: false,
        resize: {
            enabled: !readonly,
            axes:["x","y","both"],
            start: function (e, ui, wdg) {
                wdg.zIndex(20)
                $("#divDrag").show();
            },
            stop: function (e, ui, wdg) {
                wdg.zIndex(2);
                $("#divDrag").hide();
                saveUserLayout();
                if (wdg.data("RefreshOnResize"))
                    refreshWidgetUrl(wdg);
            }
        },
        draggable: {
            start: function (e, ui) {
                $(ui.$helper).zIndex(20);
                $("#divDrag").show();
            },
            stop: function (e, ui) {
                $(ui.$helper).zIndex(2);
                $("#divDrag").hide();
                saveUserLayout();
            }
        },
        collision: {
            wait_for_mouseup: true
        }
    });
    if (readonly) {
        div.addClass("readonly");
        div.data("readonly", true);
        var g = div.data("gridster");
        g.disable();
    }
    else
        div.addClass("editable");
}
function generateWidgetStyleTags() {
    var styles = "";
    var ns = ""; var margin = WidgetGap / 2;
    for (i = 100; i >= 0; i--) {
        styles += (ns + ' [data-col="' + (i + 1) + '"] { left:' +
            ((i * MinWidgetWidth) +
            (i * margin) +
            ((i + 1) * margin)) + 'px; }\n');
    }

    for (i = 100; i >= 0; i--) {
        styles += (ns + ' [data-row="' + (i + 1) + '"] { top:' +
            ((i * MinWidgetHeight) +
            (i * margin) +
            ((i + 1) * margin)) + 'px; }\n');
    }

    for (var y = 1; y <= 100; y++) {
        styles += (ns + ' [data-sizey="' + y + '"] { height:' +
            (y * MinWidgetHeight +
            (y - 1) * (margin * 2)) + 'px; }\n');
    }

    for (var x = 1; x <= 75; x++) {
        styles += (ns + ' [data-sizex="' + x + '"] { width:' +
            (x * MinWidgetWidth +
            (x - 1) * (margin * 2)) + 'px; }\n');
    }
    console.log(styles)
    var d = document;
    var tag = d.createElement('style');
    
    d.getElementsByTagName('head')[0].appendChild(tag);
    tag.setAttribute('type', 'text/css');

    if (tag.styleSheet) {
        tag.styleSheet.cssText = styles;
    } else {
        tag.appendChild(document.createTextNode(styles));
    }
}

function makeWidgetDraggable(w) {
    w.draggable({
        start: function (e, ui) {
            ui.helper.zIndex(20);
            $("#divDrag").show();
        },
        stop: function (e, ui) {
            ui.helper.zIndex(10);
            $("#divDrag").hide();            
            var p = ui.helper.position();
            if (p.top < 0)
                ui.helper.css({ top: 0 });
            if (p.left < 0)
                ui.helper.css({ left: 0 });
            saveUserLayout();
        }
    });
    w.resizable({
        start: function (e, ui) {
            ui.helper.zIndex(20)
            $("#divDrag").show();
        },
        stop: function (e, ui) {
            ui.helper.zIndex(10)
            $("#divDrag").hide();
            saveUserLayout();
            if (ui.helper.data("RefreshOnResize"))
                refreshWidgetUrl(ui.helper);           
        }
    });
}
function Wdg_Close(a) {
    if (!confirm('Do you wish to delete this widget?'))
        return;
    var g = $(a).closest(".gridster").data("gridster");
    var w = $(a).closest(".wdg");
    if (!w.hasClass("noconstraint"))
        g.remove_widget(w);
    else
        w.remove();
    window.setTimeout(function () { saveUserLayout(); }, 1000);
}
function Wdg_Refresh(a) {
    var f = $(a).closest(".wdg").find("iframe");
    f.attr("src", f.attr("src"));
}
function Wdg_Settings(a) {
    a = $(a);
    var wdg = a.closest(".wdg");
    var settings = wdg.data("Settings");
    var divSetting = wdg.children(".wdg-ctr").children(".settingPanel");
    if (!divSetting.exists()) {
        var thm = ['<span title="Default Theme" theme="" class="sysdef"></span>'];
        var pr = parent;
        if (readOnlyMode == 1)
            pr = parent.parent;
        pr.$("#usrMenu").find(".themeList").find("A").each(function () {
            var t = $(this);
            thm.push('<span title="' + t.children("label").html() + '" theme="' + t.attr("theme") + '" style="' + t.children("span").attr("style") + '"></span>');
        });
        divSetting = $("<div class='settingPanel GreyTheme'><div class='_defaultSetting'><span class='row'><span class='lbl'>Choose Theme</span><span class='theme'>" + thm.join('') + "</span></span><span class='row autoRefresh'><span class='lbl'>Auto Refresh</span><input type='checkbox'/><input class='txt' style='display:none' type='text'><span style='display:none;vertical-align:middle;font-size: 12px;'> min</span></span></div><div class='content'></div></div>");
        divSetting.append("<div class='cmd'><a class='mdl-button RedColor' style='float:left' onclick='hideWidgetSetting($(this).closest(\".wdg\"))' href='javascript:void(0)'>Cancel</a><a class='mdl-button BlueColor _preview' onclick='previewWidgetSetting(this)' href='javascript:void(0)'>Preview</a><a onclick='saveWidgetSetting(this)' class='mdl-button GreenColor' href='javascript:void(0)'>Save</a></div>")
        wdg.children(".wdg-ctr").append(divSetting);
        divSetting.children(".content").append(wdg.children("._setting").children());
        var p = divSetting.children("._defaultSetting");
        p.find(".theme").on("click", "span", function () {
            $(this).parent().children().html("").removeAttr("selected");
            $(this).html("&#xf00c;").attr("selected", "1");
            var _wdg = $(this).closest(".wdg");
            changeWidgetTheme($(this).attr("theme"), _wdg, true);
        }).on("change", "span", function () {
            $(this).parent().children().html("").removeAttr("selected");
            $(this).html("&#xf00c;").attr("selected", "1");
        });
        p.find(".autoRefresh").find("input[type=checkbox]").on("change", function () { $(this).closest(".row").find(".txt").val("").setDisplay($(this).checked()).next().setDisplay($(this).checked()); }).CheckBoxX();
        p.find(".autoRefresh").find(".txt").autoNumeric('init',{vMin:'0',mDec :2,aPad :false,aSep :''});
        divSetting.children(".cmd").find("._preview").setDisplay(divSetting.find(".content>div").children().length > 0);

        if (settings) {          
            if (!$.isEmpty(settings.Theme))
                p.find(".theme").children("[theme=" + settings.Theme + "]").trigger("change");
            else
                p.find(".theme").children(".sysdef").trigger("change");

            if (settings.AutoRefresh >= 0.25) {
                p.find(".autoRefresh").find("input[type=checkbox]").checked(true).trigger("change");
                p.find(".autoRefresh").find(".txt").val(settings.AutoRefresh);
            }
        }
        InitWidgetUI(wdg.ID());
    }
    $("#divBg").show();
    if (!Erp.Responsive) {
        $("#spnCallout").css("z-index", "1006").show().position({ my: "middle top-18", at: "middle bottom", of: a });
        divSetting.show().position({ my: "middle top-1", at: "middle bottom", of: "#spnCallout", collision: "fit none" });
        divSetting.hide().toggle("blind");
    }
    else {
        divSetting.show();

        if (divSetting.children(".content").children("div").children().length == 0) {
            divSetting.children(".cmd").find(".GreenColor").hide();
        }
        else
            divSetting.children(".cmd").find(".GreenColor").show();
    }
    wdg.addClass("showSetting")
    $("#divBg").one("click", function () {
        hideWidgetSetting(wdg)
    });

   
}

function hideWidgetSetting(wdg) {
    $("#spnCallout").css("z-index", ""); $("#spnCallout,#divBg").hide(); wdg.removeClass("showSetting"); wdg.find(".settingPanel").hide();
}

function AddWidgetToDashBoard(d, info, delayLoad, readOnly) {
    info = $.extend({
        Col: -1, Row: -1, SizeX: 9, SizeY: 5, Top: 50, Left: 50, Height: 0, Width: 0, DefSizeX: 0, DefSizeY: 0, NoConstraint: 0,
        Col1: -1, Row1: -1, SizeX1: -1, SizeY1: -1,
        Col2: -1, Row2: -1, SizeX2: -1, SizeY2: -1,
        Col3: -1, Row3: -1, SizeX3: -1, SizeY3: -1,
        Settings: {}
    }, info);
    if (info.DefSizeX > 0)
        info.SizeX = Math.ceil(info.DefSizeX / (MinWidgetWidth + WidgetGap));
    if (info.DefSizeY > 0)
        info.SizeY = Math.ceil(info.DefSizeY / (MinWidgetHeight + WidgetGap));
    if (readOnly && BoxWidth > 0) {
        info.SizeX = Fn.Round((info.SizeX / BoxWidth) * MaxCols);
        if (info.Col > 1)
            info.Col = Fn.Round((info.Col / BoxWidth) * MaxCols);

        if (info.SizeX1 > 0 && BoxWidth1 > 0) {
            info.SizeX1 = Fn.Round((info.SizeX1 / BoxWidth1) * MaxCols);
            if (info.Col1 > 1)
                info.Col1 = Fn.Round((info.Col1 / BoxWidth1) * MaxCols);
        }
        if (info.SizeX2 > 0 && BoxWidth2 > 0) {
            info.SizeX2 = Fn.Round((info.SizeX2 / BoxWidth2) * MaxCols);
            if (info.Col2 > 1)
                info.Col2 = Fn.Round((info.Col2 / BoxWidth2) * MaxCols);
        }
        if (info.SizeX3 > 0 && BoxWidth3 > 0) {
            info.SizeX3 = Fn.Round((info.SizeX3 / BoxWidth3) * MaxCols);
            if (info.Col3 > 1)
                info.Col3 = Fn.Round((info.Col3 / BoxWidth3) * MaxCols);
        }
        //if ($(document.documentElement).hasClass("touch")) {
        //    info.SizeX = 12; info.Col = 1;
        //}
    }
    info.Top = info.Top <= 0 ? 0 : info.Top; info.Left = info.Left <= 0 ? 0 : info.Left;
    info.SizeX = info.SizeX <= 0 ? 9 : info.SizeX; info.SizeY = info.SizeY <= 0 ? 5 : info.SizeY;
    if (info.Max / 1 == 1) {
        info.NotResizable = true;
        info.NoConstraint = 0;
        info.SizeX = Math.floor((window.innerWidth + 10 - 40) / (MinWidgetWidth + WidgetGap)); info.SizeY = Math.floor((window.innerHeight + 10 - 55) / (MinWidgetHeight + WidgetGap));
    }
    var action = info.Action;   
    var url = _openWindow(action, null, true);
    url += (url.indexOf("?") > -1 ? "&" : "?") + "_dash=1";
    var wdgUrl = url;
    wdgUrl += getWidgetUrlParams("wdg_" + info.Uid + info.DashId, info.Settings);
    var wdg =
    '<div class="wdg ' + (readOnly ? "readOnly " : "") + (info.NoConstraint > 0 ? "noconstraint" + " " : "") + (info.NotResizable == true ? "noresize" + " " : "") + (info.Trans > 0 ? "trans" + info.Trans + " " : "") + (Erp.Responsive ? "" : (($.isEmpty(info.Settings.Theme) ? DefaultTheme : info.Settings.Theme) + "Theme")) + '" id="wdg_' + info.Uid + info.DashId + '" uid="' + $.defaultVal(info.Uid, "") + '" widgetid=' + info.Id + ' ' + (info.Col > -1 ? 'data-col="' + info.Col + '" data-row="' + info.Row + '" ' : '') + (d == null ? ' data-sizex="' + info.SizeX + '" data-sizey="' + info.SizeY + '"' : '') + '>' +
        '<div class="wdg-ctr">' +
            '<div class="wdg-top">' +
                '<span class="wdg-title"><span class="wdg-ico">' + $.defaultVal(info.Icon, "") + '</span><label>' + $.defaultVal(info.Title, "") + '</label></span>' +
                '<div class="wdg-cmd">' +
                    '<a title="Refresh Widget" onclick="Wdg_Refresh(this)" href="javascript:void(0)" class="refresh mdl-ripple2"></a><a ' +
                    'title="Settings" onclick="Wdg_Settings(this)" href="javascript:void(0)" class="setting mdl-ripple2"></a>' +
                    (readOnly ? '' : '<a title="Close Widget" onclick="Wdg_Close(this)" href="javascript:void(0)" class="wclose  mdl-ripple2"></a>') +
                '</div>' +
            '</div>' +
            '<div ' + (delayLoad ? '' : 'src="' + wdgUrl + '"') + ' class="wdgBody ' + (info.Trans > 1 ? "trans2" : "") + '" ' + (Modernizr.isios ? " scrolling=\"no\" " : "") + ' allowTransparency="allowTransparency"  frameborder="0" style="height: 100%;width: 1px; min-width: 100%"></div>' +
        '</div>' +
        '<div style="display:none" class="_setting"><div>' + $.defaultVal(info.WidgetUi, "") + '</div></div>' +
    '</div>';
    var w = null;
    if (d == null) {
        w = $(wdg);
        if (info.NoConstraint > 0) {
            w.css({ top: info.Top, left: info.Left, height: (info.Height > 0 ? info.Height : (info.SizeY * (MinWidgetHeight + WidgetGap))), width: (info.Width > 0 ? info.Width : (info.SizeX * (MinWidgetWidth + WidgetGap))) });
            makeWidgetDraggable(w);
        }
    }
    else {
        var g = d.data("gridster");
        if (info.NoConstraint > 0) {
            w = $(wdg);
            w.css({ top: 100, left: 100, height: (info.DefSizeY > 0 ? info.DefSizeY : (info.SizeY * (MinWidgetHeight + WidgetGap))), width: (info.DefSizeX > 0 ? info.DefSizeX : (info.SizeX * (MinWidgetWidth + WidgetGap))) });
            d.append(w);
            makeWidgetDraggable(w);
        }
        else {
            w = g.add_widget(wdg, info.SizeX, info.SizeY);
            if (info.Max / 1 == 1)
                g.resize_widget(w, info.SizeX, info.SizeY);
        }
    }
    w.find(".wdgBody").append($("#divctr_" + info.Uid))
    w.data("HasTheme", !$.isEmpty(info.Settings.Theme));
    w.data("Settings", info.Settings);
    if (delayLoad)
        w.data("WidgetUrl", wdgUrl);
    else
        w.data("Loaded", true);
    w.data("BaseUrl", url);
    if (info.RefreshOnResize)
        w.data("RefreshOnResize", true);
    if (info.Max / 1 == 1)
        w.data("MaxSize", true);
    registerForAutoRefresh(w, info.Settings.AutoRefresh);
    if (readOnly || isDesignerMode) {
        if (info.Col1 > 0) {
            w.attr("dev-col1", info.Col1); w.attr("dev-row1", info.Row1); w.attr("dev-sizex1", info.SizeX1); w.attr("dev-sizey1", info.SizeY1);
        }
        if (info.Col2 > 0) {
            w.attr("dev-col2", info.Col2); w.attr("dev-row2", info.Row2); w.attr("dev-sizex2", info.SizeX2); w.attr("dev-sizey2", info.SizeY2);
        }
        if (info.Col3 > 0) {
            w.attr("dev-col3", info.Col3); w.attr("dev-row3", info.Row3); w.attr("dev-sizex3", info.SizeX3); w.attr("dev-sizey3", info.SizeY3);
        }
    }
    return w;
}
function registerForAutoRefresh(w, freq) {
    if (freq >= 0.25) {
        var intr = window.setInterval(function () {
            if (w.data("Loaded") && !w.closest(".gridster").hasClass("hideDash") && !$(parent.document.body).hasClass("HideDash"))
                refreshWidgetUrl(w);
        }, freq / 1.0 * 60 * 1000);
        w.data("IntervalID", intr);
    }
}
function getWidgetUrlParams(uid,settings) {
    var url = $.isEmpty(settings.Theme) ? "" : "&_theme=" + settings.Theme;
    var params = settings.Params;
    var flt = "";
    if (params) {
        for (p in params) {
            if (p.indexOf("#FILTER#") > -1) {
                window.FilterList[uid+p.replace("#FILTER#", "")] = params[p];
                flt += p.replace("#FILTER#", "") + ",";
            }
            else
                url += "&" + p + "=" + encodeURIComponent(params[p]);
        }
    }
    flt = flt.Trim(',');
    if (!$.isEmpty(flt))
        url += "&_dashFilters=" + flt;
    return url;
}

function refreshWidgetUrl(w,sett) {
    var url = w.data("BaseUrl");
    var settings = sett?sett:w.data("Settings");
    url += getWidgetUrlParams(w.ID(),settings);
    w.find("iframe").attr("src", url);
}
function serialiseWidgets() {
    var dash = $("#dashBoardCtr").children(".showDash").eq(0);
    var xml = ["<Dashboard>"];
    dash.children(".wdg").each(function () {
        var w = $(this);
        if (isDesignerMode)
            xml.push('<Widget Title="' + $.encodeXml(w.find(".wdg-title").html(), true) + '" Id="' + w.attr("widgetid") + '" Uid="' + w.attr("uid") + '"' +
                ' Col="' + w.attr("dev-col1") + '" Row="' + w.attr("dev-row1") + '" SizeX="' + w.attr("dev-sizex1") + '" SizeY="' + w.attr("dev-sizey1") + '"' +
                ' Col2="' + $.defaultVal(w.attr("dev-col2"), w.attr("dev-col1")) + '" Row2="' + $.defaultVal(w.attr("dev-row2"), w.attr("dev-row1")) + '" SizeX2="' + $.defaultVal(w.attr("dev-sizex2"), w.attr("dev-sizex1")) + '" SizeY2="' + $.defaultVal(w.attr("dev-sizey2"), w.attr("dev-sizey1")) + '"' +
                ' Col3="' + $.defaultVal(w.attr("dev-col3"), w.attr("dev-col1")) + '" Row3="' + $.defaultVal(w.attr("dev-row3"), w.attr("dev-row1")) + '" SizeX3="' + $.defaultVal(w.attr("dev-sizex3"), w.attr("dev-sizex1")) + '" SizeY3="' + $.defaultVal(w.attr("dev-sizey3"), w.attr("dev-sizey1")) + '"' +
                ' Width="' + w.width() + '" Height="' + w.height() + '" Top="' + w.position().top + '" Left="' + w.position().left + '"></Widget>');
        else
            xml.push('<Widget Title="' + $.encodeXml(w.find(".wdg-title").html(), true) + '" Id="' + w.attr("widgetid") + '" Uid="' + w.attr("uid") + '" Col="' + w.attr("data-col") + '" Row="' + w.attr("data-row") +
    '" SizeX="' + w.attr("data-sizex") + '" SizeY="' + w.attr("data-sizey") + '" Width="' + w.width() + '" Height="' + w.height() + '" Top="' + w.position().top + '" Left="' + w.position().left + '"></Widget>');

    });
    xml.push("</Dashboard>");
    return xml.join("");
}

function changeWidgetTheme(theme, w, forced, style) {
    if (!w.data("HasTheme") || forced) {
        w.removeClass("GreyTheme DarkTheme BlueGlossTheme GreenTheme OrangeTheme RedTheme").addClass($.defaultVal(theme, DefaultTheme) + "Theme")
        if (forced && theme != "")
            w.data("HasTheme", true);
        else if (forced && theme == "")
            w.removeData("HasTheme");
        if (w.data("Loaded")) {
            var ifr = w.find("iframe")[0];
            try {
                if (Erp.Responsive) {
                    if (ifr && ifr.contentWindow && ifr.contentWindow.Erp && typeof ifr.contentWindow.Erp.ApplyTheme == "function")
                        ifr.contentWindow.Erp.ApplyTheme(theme, style);
                }
                else {
                    if (ifr.contentWindow && typeof ifr.contentWindow.changeTheme == "function")
                        ifr.contentWindow.changeTheme($.defaultVal(theme, DefaultTheme));
                }
            }
            catch (err) { }
        }
    }
}

function saveWidgetSetting(a) {
    a = $(a);
    var wdg = a.closest(".wdg");
    var dash = wdg.closest(".gridster");
    var pnl = a.closest(".settingPanel");
    var oldSettings = wdg.data("Settings")
    var settings = _getNewSettings(wdg, pnl);    
    wdg.data("Settings", settings);
    if (Fn.CFlt(oldSettings.AutoRefresh) != Fn.CFlt(settings.AutoRefresh)) {
        if (Fn.CInt(wdg.data("IntervalID")) > 0)
            window.clearInterval(Fn.CInt(wdg.data("IntervalID")));
        if (settings.AutoRefresh > 0)
            registerForAutoRefresh(wdg, settings.AutoRefresh);
    }
    refreshWidgetUrl(wdg);
    var args = {};
    args["Type"] = "User_SaveWidgetSetting";
    args["@Dashboard_Fid"] = readOnlyMode==1 ? $.QS("_dsid") : wdg.closest(".gridster").attr("recid");
    args["@WidgetID"] = wdg.attr("uid");
    args["@WidgetSettings"] = serialiseSettings(settings);
    args["IsMasterSetting"] = (parent.location.pathname.toLowerCase().indexOf("dashboardmaster_add.aspx") > -1);
    if (args["IsMasterSetting"])
        args["@WidgetID"] = wdg.attr("widgetid");
    if (parent.location.pathname.toLowerCase().indexOf("dashboarddesigner_add.aspx") > -1)
        args["@Dashboard_Fid"] = parent.DashboardID;
    PageMethods.Execute(args);
    $("#divBg").trigger("click");
}
function serialiseSettings(s) {
    var xml = ['<Widget Theme="' + s.Theme + '" RefreshTime="' + s.AutoRefresh + '">'];
    var params = s.Params;
    if (params) {
        xml.push("<Params>");
        for (p in params) {
            xml.push('<' + p.replace("#FILTER#", "") + '>' + $.encodeXml(params[p]) + '</' + p.replace("#FILTER#", "") + '>')
        }
        xml.push("</Params>");
    }
    xml.push("</Widget>");
    return xml.join("");
}
function previewWidgetSetting(a) {
    a = $(a);
    var wdg = a.closest(".wdg");
    var pnl = a.closest(".settingPanel");
    var settings = _getNewSettings(wdg, pnl);
    hideWidgetSetting(wdg);
    refreshWidgetUrl(wdg, settings);

}
function _getNewSettings(wdg,pnl) {
    var settings = wdg.data("Settings");
    settings = $.extend(true, {}, settings);
    var p = pnl.children("._defaultSetting");
    var t = p.find(".theme").children("[selected]").attr("theme");
    settings.Theme = $.isEmpty(t) ? "" : t;
    settings.AutoRefresh = Fn.CFlt(p.find(".autoRefresh").find(".txt").val());
    settings.AutoRefresh = (settings.AutoRefresh >= 0.25 ? settings.AutoRefresh : 0);
    settings.Params = readCustomSettings(wdg.ID());
    return settings;
    
}

function resizeMaxWidgets() {
    var x = Math.floor((window.innerWidth + 10 - 40) / (MinWidgetWidth + WidgetGap)); var y = Math.floor((window.innerHeight + 10 - 55) / (MinWidgetHeight + WidgetGap));
    $("#dashBoardCtr>div>.wdg").each(function () {
        var wdg = $(this);
        if (wdg.data("MaxSize")) {
            var g = wdg.closest(".gridster").data("gridster");
            g.resize_widget(wdg, x, y);
        }
    })
}

function switchView(mode,init) {    
    mode = !mode ? $("#ddlDeviceType").val() : mode;
    if (isDesignerMode) {
        $(window.frameElement).css("width", mode == 3 ? 500 : (mode == 2 ? 992 : 1200));
    }
    
    $("#dashBoardCtr").children(".gridster").each(function () {
        $(this).children(".wdg").each(function () {
            var w = $(this);
            if (!w.attr("dev-col1")) {
                w.attr("dev-col1", w.attr("data-col")); w.attr("dev-row1", w.attr("data-row")); w.attr("dev-sizex1", w.attr("data-sizex")); w.attr("dev-sizey1", w.attr("data-sizey"));
            }
            if (!w.attr("dev-col" + mode)) {
                w.attr("dev-col" + mode, w.attr("dev-col1")); w.attr("dev-row" + mode, w.attr("dev-row1")); w.attr("dev-sizex" + mode, w.attr("dev-sizex1")); w.attr("dev-sizey" + mode, w.attr("dev-sizey1"));
            }
            w.attr("data-col", w.attr("dev-col" + mode));
            w.attr("data-row", w.attr("dev-row" + mode));
            w.attr("data-sizex", w.attr("dev-sizex" + mode));
            w.attr("data-sizey", w.attr("dev-sizey" + mode));
            if ((readOnlyMode == 1 || isDesignerMode) && !init) {
                w.removeData('coords');
                w.removeData("row"); w.removeData("col"); w.removeData("sizex"); w.removeData("sizey");
                w.unbind();
            }
        });
        if ((readOnlyMode == 1 || isDesignerMode) && !init) {
            $(this).removeData("gridster");
            $(this).removeData("drag");
            $(this).unbind();
            makeGridster($(this), readOnlyMode == 1);
        }
    });
    
}

function saveDeviceView() {
    if (!isDesignerMode)
        return;
    var mode = $("#ddlDeviceType").val();
    $("#dashBoardCtr").children(".gridster").each(function () {
        $(this).children(".wdg").each(function () {
            var w = $(this);
            w.attr("dev-col" + mode, w.attr("data-col"));
            w.attr("dev-row" + mode, w.attr("data-row"));
            w.attr("dev-sizex" + mode, w.attr("data-sizex"));
            w.attr("dev-sizey" + mode, w.attr("data-sizey"));
        });
    })
}

function setApplicableView(init) {
    var w = $(window.frameElement?window.frameElement:window).outerWidth();
    var m=0;
    if (w < 650)
        m = 3;
    else if (w < 992)
        m = 2;
    else
        m = 1;
    if (window.__currentViewMode != m) {
        window.__currentViewMode = m;
        switchView(m, init);
    }
}