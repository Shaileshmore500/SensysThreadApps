<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ui2.aspx.cs" Inherits="SensysErp.Main.ui2" %>

<!DOCTYPE html>

<html runat="server" id="htmlDoc" class="docHTML" xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
     <%# QS("_rspv")=="1"?HelperLib.Web.WebResources.GetResource("~/fonts/font.css"):HelperLib.Web.WebResources.GetResource("~/fonts/font1.css")%>     
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/System.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jqHelper.js")%>

     <%# QS("_rspv")!="1"?"":HelperLib.Web.WebResources.GetResource("~/Css/materialize.min.css")%>   
    <%# QS("_rspv")!="1"?"":HelperLib.Web.WebResources.GetResource("~/Scripts/materialize.min.js")%>
<%# QS("_rspv")!="1"?"":HelperLib.Web.WebResources.GetResource("~/Scripts/moment.min.js")%>
</head>
<body class="pg-ui2">
    <form id="form1" runat="server">
         <%= HelperLib.Web.WebResources.GetResource("~/css/base.css")%>
         <%= QS("_rspv")=="1"?"":HelperLib.Web.WebResources.GetResource("~/css/form.css")%>
        <style><%= ErpModel.Globals.Users.CustomTheme%></style>
        <%= Erp.Base.Utils.Utils.GetResourcePath(ErpModel.Globals.AppManager.CurrentAppScriptResource,true)%>
     <%= Erp.Base.Utils.Utils.GetResourcePath(ErpModel.Globals.AppManager.CurrentAppCssResource,true)%>
    <div>
         <div id="navBar" style="display:none" class="navbar-fixed">
                    <nav style="">
                        <div class="nav-wrapper"><a id="header-show-sidenav" class="sidenav-trigger"  style="float: left; margin-left: 20px;display:none"><i class="fa"></i></a>
                            <a id="PageTitleMobile"  class="page-title"><i class="_i fa medium valign"></i><span class="_t"></span></a>
                            <a class="close1" href="javascript:void(0)" onclick="_closeWin()"></a>
                        </div>
                    </nav>
                </div>
        <div id="divCommands" class="themeBorderColor-Light" style="visibility:hidden">
            <span id="PageTitle" class="PageTitle"><span class='_i'></span><span class="_t"></span></span><span id="spnCustomControlCtr"></span>
            <span id="spnWinCmd">
                <a href="javascript:void(0)" style="display: none" onclick="delayClick(event,__winCmd)" title="Bookmark" class="win-cmd active _bk">&#xf097;</a><a
                    href="javascript:void(0)" onclick="delayClick(event,__winCmd)" title="Maximize" style="display:none"  class="win-cmd active _max"> &#xf065;</a><a
                        href="javascript:void(0)" onclick="delayClick(event,__winCmd)" title="Popout" class="win-cmd active"> &#xf08e;</a><a
                            href="javascript:void(0)" onclick="delayClick(event,__winCmd)" title="Refresh" style="line-height: 23px" class="win-cmd active"> &#xf021;</a><a
                                href="javascript:void(0)" onclick="delayClick(event,__winCmd)"
                                title="Close" class="win-cmd active _close">&times;</a>
            </span>
        </div>
         <div id="divIfr" style="position:absolute;"> 
             <iframe ui2="1"  style="width:100%;height:100%" frameborder="0"  runat="server" id="ifr"></iframe></div>
        <div id="ifrCtr">
            <iframe style="height: 100%; width: 100%;" id="ifrDetailsWindow" showtools="1"  frameborder="0"></iframe>
        </div>
    </div>
    </form>
    <style>
          #ifrCtr
        {
            position: absolute;
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 5px;
            background-color: #fff;
            display: none;
           z-index: 99999;
        }
        html.responsive #ifrCtr {
            bottom: 0px;
        }
        .lt-print, .lt-pdf, .lt-doc
        {
            font-size: 25px !important;
            line-height: 45px !important;
            margin: 0 !important;
            width: 45px !important;
        }
        .lt-ctr
        {
            padding: 30px 100px;
            background-color: #e6e6e6;
        }
            .lt-ctr iframe
            {
                box-shadow: 0px 0 12px gray;
            }

        html.responsive {
            background: var(--page-bg);
            overflow: hidden;
        }
        .navbar-fixed nav {
            position: relative;
            /*border-bottom: solid 1px #dedede;*/
        }
        
        .responsive.PopupWin .close1, .responsive.PopupWin .sidenav-trigger {
            display:none;
        }
        #divIfr{
            top:38px;
            left:0;
            right:0;
            bottom:5px
        }
        html.responsive #divIfr {
            top: 38px;
            left: 0;
            right: 0;
            bottom: 0px;
        }

    </style>
    <script>
        IsWrapperPage = true;
        
        $(function () {
            if ($.QS("_meid"))
                $("#spnWinCmd").find("._bk").show();
            $("#<%=ifr.ClientID%>").on("load", function () { checkForTitle(true); });
            if ($.QS("u").toLowerCase().indexOf("render.aspx") == 0) {
                $("#divIfr").addClass("lt-ctr");
                $("#PageTitle").before('<span><a title="Print" onclick="delayClick(event,__winCmd)" href="javascript:void(0)"  class="win-cmd active lt-print">&#xf02f;</a><a title="Export to PDF" href="javascript:void(0)"  onclick="delayClick(event,__winCmd)" class="win-cmd active lt-pdf">&#xf1c1;</a><a title="Export to Word" href="javascript:void(0)"  onclick="delayClick(event,__winCmd)" class="win-cmd active lt-doc">&#xf1c2;</a></span>');
            }
            if (window.frameElement && ($(window.frameElement).attr("ismobile") == "1" || $.QS("_rspv") == "1")) {
                if ($.QS("_dash") == "1")
                    $(document.documentElement).addClass("DashBoard NoPadding");
                $(document.documentElement).addClass("responsive");
                if ($.QS("_dash") != "1")
                    $("#navBar").show();
                $("#divCommands").hide();
                $("#divIfr").css("top", $.QS("_dash") == "1"?"0":"65px");
                if ($.isEmpty($.QS("_t1")))
                    checkForTitle();
                else
                    $("#PageTitleMobile").children("._t").html($.QS("_t1"));
                var ico = ($.QS("_ic1") / 1 > 1 ? "&#x" + ($.QS("_ic1") / 1).toString(16) + ";" : "");
                $("#PageTitleMobile").children("._i").html(ico);
                $('#header-show-sidenav').children('i').on('click', function () { __ShowHomeSideNav(); });
            }
            else if (parent.SysConfigPage || $.QS("_notools") || (window.frameElement && !$(window.frameElement).attr("showtools"))) {
                $("#divCommands").hide();
                $("#divIfr").css("top", 0);
            }
            else {
                if (parent.HomePage || parent.HomePageChild) {
                    window.HomePageChild = true;
                    $("#spnWinCmd").children("._max").show();
                }
                if ($.isEmpty($.QS("_t1")))
                    checkForTitle();
                else
                    $("#PageTitle").children("._t").html($.QS("_t1"));
                var ico = ($.QS("_ic1") / 1 > 1 ? "&#x" + ($.QS("_ic1") / 1).toString(16) + ";" : "");
                $("#PageTitle").children("._i").html(ico);
                $("#divCommands").setVisible(true);
            }
          
            if (window.frameElement && $(window.frameElement).parent().hasClass("Popup") || parent.IsPopupWin) {
                $(document.documentElement).addClass("NoPadding PopupWin");
                window.IsPopupWin = true;
                if (parent.IsPopupWin) {
                    $("#divCommands").find("._close").css({ visibility: "visible", "margin-left": "-15px", "font-size": "28px" });
                }
            }
        })
        function __ShowHomeSideNav() {
            var win = window;
            var trials = 0;
            while (!win.Erp || !win.Erp.MobileHome) {
                win = win.parent;
                trials++;
                if (trials > 20) {
                    return;
                }
            }            
            win.$("#header-show-sidenav").children("i").trigger("click");
        }
        function checkForTitle(noRepeat) {
            var ifr = $("#<%=ifr.ClientID%>")[0];
            if (ifr.contentWindow && ifr.contentWindow.document && ifr.contentWindow.document.title) {
                $("#PageTitle,#PageTitleMobile").children("._t").html(ifr.contentWindow.document.title);
                document.title = ifr.contentWindow.document.title;
                return;
            }
            if (!noRepeat)
                window.setTimeout(checkForTitle, 1000);
        }
       
        function changeTheme(theme) {
            $("#lnkTheme").attr("href", "../Css/" + theme + "/jquery-ui-1.10.3.custom.css?ts=" + (new Date() / 1))
            $(document.documentElement).removeClass("GreyTheme DarkTheme BlueGlossTheme GreenTheme OrangeTheme RedTheme").addClass(theme + "Theme")
            var ifr = $("#<%=ifr.ClientID%>")[0];
            if (ifr.contentWindow && typeof ifr.contentWindow.changeTheme == "function")
                ifr.contentWindow.changeTheme(theme);
        }
        var Erp = {};
        Erp.ResetTheme = function () {
            $(document.documentElement).removeClass("custom-DarkTheme custom-LightTheme _darkBG compact-form");
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
                $(document.documentElement).addClass(theme + (theme.toLowerCase().indexOf("dark") > -1 ? " _darkBG" : ""));
                if (!$.isEmpty(style))
                    $(style).appendTo("body");
            }
            if (Erp.DashBoardPage) {
                $("#dashBoardCtr").children().children(".wdg").each(function () {
                    changeWidgetTheme(theme, $(this), false, style);
                })
            }
            else {
                var ifr = $("#ifrDetailsWindow")[0];
                if (ifr && ifr.contentWindow && ifr.contentWindow.Erp && typeof ifr.contentWindow.Erp.ApplyTheme == "function")
                    ifr.contentWindow.Erp.ApplyTheme(theme, style);
            }
        }
        Erp._CanCloseWindow = function () { return true;}
        function __winCmd(a) {
            var btn = $(a);
            var type = btn.attr("title").toLowerCase();
            if (type == "bookmark") {
                if (btn.data("bk") == "1")
                    return;
                btn.data("bk", "1"); btn.html("&#xf02e;");
                var divBk = (opener ? opener.$("#divBookmarks") : parent.$("#divBookmarks"));
                if (divBk.length > 0) {
                    divBk.find("._nobookdata").remove();
                    divBk = divBk.children("div");                   
                    if (!$.isEmpty($.QS("_meid")) && divBk.find("A[menu='" + $.QS("_meid") + "']").length > 0)
                        return;
                    divBk.append("<a class='bookmark-item _new' refurl=\"" + window.location.href.replace("_meid=", "") + "\" href='javascript:void(0)' menu=\"" + $.QS("_meid") + "\"  ><span class='reorder'></span><span class='menuTxt'>" + $.QS("_t1") + "</span><span class='closeBtn'></span></a>");
                }
                $.ajax({
                    type: "POST",
                    url: AppRootPath + "/core/erpapi.asmx/AddBookmark",
                    data: '{value: ' + JSON.stringify({ "MenuId": $.QS("_meid"), "Title": $.QS("_t1"), "Url": window.location.href.replace("_meid=", "") }) + '}',
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                });                
                
                return;
            }
            else if (type == "popout") {
                window.open(window.location)
            }
            else if (type == "refresh") {
                window.location = window.location;
            }
            else if (type == "close") {
                _closeWin();
            }
            else if (type.indexOf("print") > -1) {
                var ifr = $("#<%=ifr.ClientID%>")[0];
                if (ifr.contentWindow && typeof ifr.contentWindow.exportMergeLetter == "function")
                    ifr.contentWindow.print();
            }
            else if (type.indexOf("pdf") > -1) {
                var ifr = $("#<%=ifr.ClientID%>")[0];
                if (ifr.contentWindow && typeof ifr.contentWindow.exportMergeLetter == "function")
                    ifr.contentWindow.exportMergeLetter("PDF");
            }
            else if (type.indexOf("word") > -1) {
                var ifr = $("#<%=ifr.ClientID%>")[0];
                if (ifr.contentWindow && typeof ifr.contentWindow.exportMergeLetter == "function")
                    ifr.contentWindow.exportMergeLetter("WORD");
            }
            else if (window.HomePage)
                winCmd(a);
            else if (parent && typeof parent.__winCmd == "function")
                parent.__winCmd(a);
        }
        function _closeWin() {
            if (parent.Erp && parent.Erp.MobileHome) {
                $(parent.document.body).removeClass("HideDash");             
            }
            else if (window.frameElement && $(window.frameElement).parent().hasClass("Popup")) {
                $(window.frameElement).parent().prev().remove();
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
        function RefreshParent(close, id) {
            if (window.opener && typeof window.opener.RefreshGrid == "function") {
                window.opener.RefreshGrid(id);
                if (close)
                    _closeWin();
            }            
            else if (window.frameElement && typeof parent.RefreshGrid == "function") {
                if (close)
                    _closeWin();

                if (parent && typeof parent.toggleDetailsForm == "function")
                    window.setTimeout(function () { parent.RefreshGrid(id); }, 800);
                else
                    parent.RefreshGrid(id);
            }
        }
        function toggleDetailsForm(show, url) {
            var ifr = $("#ifrCtr");
            if (show) {
                $("#divCtr").data("scrollTop", $(document.body).scrollTop());
                $("#divCtr").css("opacity", 0.3);
                ifr.node(0).setVisible(false);
                if (ifr.node(0)[0].contentWindow && ifr.node(0)[0].contentWindow.document)
                    $(ifr.node(0)[0].contentWindow.document.body).setVisible(false);
                ifr.stop(true, true).css("top", $(window).height()).show().animate({ top: 0 }, 250, "easeInSine", function () { $(this).node(0).setVisible(true).attr("src", url); $("#divCtr").hide(); })
            }
            else {
                $("#divCtr").show();
                $("#divCtr").css("opacity", "");
                ifr.stop(true, true).animate({ top: ifr.outerHeight() }, 250, "easeInSine", function () { $("#ifrCtr").hide(); $(document.body).scrollTop($.defaultVal($("#divCtr").data("scrollTop"), 0)); })
            }
        }
    </script>
</body>
</html>
