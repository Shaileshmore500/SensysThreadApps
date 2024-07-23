﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Home.aspx.cs" Inherits="SensysErp.Main.Home" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<!DOCTYPE html>

<html runat="server" id="htmlDoc" xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="-1">
    <meta http-equiv="cache-control" content="no-store">
    <title>Thread-ERP</title>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/modernizr.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/Grey/jquery-ui-1.10.3.custom.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/normalize.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/fonts/font1.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/base.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/CustomControl/CustomControl.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/home.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/form.css")%>

    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/json2.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/System.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery-ui-1.10.3.custom.min.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jqHelper.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/UiHelper.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CustomControls.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/moment.min.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Erp.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Ui.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Fn.js")%>
    <script>
        var UserSetting = {};
        UserSetting.Theme = 'Dark';
        UserSetting.CollapseTop = false;
        UserSetting.CollapseLeft = false;
        UserSetting.Wp = {};
        var HomePage = true;
        var DataModified = false;
        Erp.PageTitle = "Thread-ERP";
        var __scriptPaths = "";
    </script>
    <style>
        html, body, form
        {
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

       
        #ThirdLevel .menuSet
        {
            height: 100%;
            overflow:hidden;
        }
      
    </style>

</head>
<body class="desktop">
    <form id="form1" runat="server">
        <asp:ScriptManager ID="ScriptManager1" runat="server" EnablePageMethods="true">
        </asp:ScriptManager>
         <hlp:ActionMessage ID="ActionMessage1" runat="server" />
        <div id="chromefontbug" style="position:absolute;top:-1000px;left:-1000px;visibility:hidden">
                <span class="menuItemGroup">a</span>
                <span class="verticalTitle">a</span>
                <span class="secondLevelTitle">a</span>
                <span class="menuTxtSmall"><span>a</span></span>
            </div>
         <div style="visibility:hidden;position:absolute;top:-100px;">
            <input type="text" id="PreventChromeAutocomplete" name="PreventChromeAutocomplete" autocomplete="fake-text" />
            <input type="submit" onclick="return false" value="cancel enter" style="display:none" />
            <input style="display1:none" type="text" name="fakeusernameremembered"/>
            <input style="display1:none" type="password" name="fakepasswordremembered"/>
        </div>
         <a href="javascript:void(0)" onclick="$('#moreItems').toggle(); showHoverPanel();" id="moreBtn">&#xf141;</a>
        <div id="moreItems"></div>
         <a class="ScrollBtn" href="javascript:void(0)" style="top:43px;display:none" id="aTop">&#xf0d8;</a>
        <a class="ScrollBtn" href="javascript:void(0)" style="bottom:0px;display:none"id="aBottom">&#xf0d7;</a>
     
        <div style="text-align: center" id="topBar">
            <span style="float: left" id="spnAppTitle"><img src="../images/threadlogo.png?1" /></span>           
            <span id="spnBtn">
                 <a class="dash-list" title="Add Widget" onclick="showWidgetList(this)" href="javascript:void(0)"></a>
                <a class="quick" title="Quick Add & Bookmarks"  onclick="showQuick(this)" href="javascript:void(0)"></a><a 
                    class="search" title="Search Menu/Entities" onclick="showSearch(this)" href="javascript:void(0)"></a><a 
                    id="notifyLink" title="Show Notifications" style="margin-right:6px" onclick="showNotification(this)" href="javascript:void(0)"
                    class="notifications"><span class="_c"></span></a><a style="display:none" title="Recent History" id="btnHistory" runat="server" onclick="" href="javascript:void(0)"
                        class="history"></a>
            </span>
            <span id="imgUserCtr">
            <telerik:RadBinaryImage  Width="50px" Height="50px" onclick="showUserMenu()"
                    ImageUrl="../images/profile.png" ResizeMode="Fit" ID="imgUser"
                    runat="server" AlternateText="" />          </span>
        </div>
        
        <div id="usrMenu" style="display: none; position: absolute; z-index: 120;">
            <div id="usrMenuInner">
                <span style="" id="spnUserCtr1">
                    <span runat="server" id="spnUser"></span>
                    <span runat="server" id="spnRole"></span>
                    <a href="javascript:void(0)" runat="server" id="lnkCompany"  class="lnkCompany">Testing 123</a>
                </span>
                <a href="javascript:void(0)" onclick="showUserProfile()"><span>&#xf013;</span>Options</a>
                <a href="javascript:void(0)" onclick="showPass()"><span>&#xf084;</span>Change Password</a>
                <a onclick="__logout()" href="javascript:void(0)" target="_self"><span>&#xf011;</span>Logout</a>
                <span class="title">Theme </span>
                <div class="themeList">
                    <a href="javascript:void(0)" theme="Grey" onclick="changeTheme(this)"><span style="background-color: EBEBEB; color: #000"></span>
                        <label>Light</label></a>
                    <a href="javascript:void(0)" theme="Dark" onclick="changeTheme(this)"><span style="background-color: #4B4B4B"></span>
                        <label>Dark</label></a>
                    <a href="javascript:void(0)" theme="BlueGloss" onclick="changeTheme(this)"><span style="background-color: #00B8FF"></span>
                        <label>Blue</label></a>
                    <a href="javascript:void(0)" theme="Green" onclick="changeTheme(this)"><span style="background-color: #23971E"></span>
                        <label>Green</label></a>
                    <a href="javascript:void(0)" theme="Orange" onclick="changeTheme(this)"><span style="background-color: #FFA300"></span>
                        <label>Orange</label></a>
                    <a href="javascript:void(0)" theme="Red" onclick="changeTheme(this)"><span style="background-color: #EC0000"></span>
                        <label>Red</label></a>
                </div>
                <span class="title">Wallpaper</span>
                <div class="wp" style="padding-left: 25px; padding-bottom: 10px;">
                    <span style="font-size: 14px;">Custom Wallpaper  </span>
                    <input id="chkWp" onchange="$(this).closest('.wp').children('._ddl').setDisplay($(this).checked())" type="checkbox" />

                    <div style="margin-top: 10px; margin-left: 30px; display: none" class="_ddl">
                        <span>
                            <asp:DropDownList ID="ddlWp" runat="server" onchange="$('#txtExtImg').setDisplay($(this).val()=='EXTURL').focus();UserSetting.Wp.Src=$(this).val();applyWallpaper();"></asp:DropDownList></span>
                        <input id="txtExtImg" style="display: none" value="http://" type="text" />
                    </div>
                    <div style="margin-top: 10px; margin-left: 30px;">
                        <span style="display: inline-block; width: 105px"><span>
                            <select id="ddlWpLayout">
                                <option>Stretch</option>
                                <option>Fit</option>
                                <option>Center</option>
                                <option>Tile</option>
                                <option>None</option>
                            </select></span>
                        </span>
                        <telerik:RadColorPicker OnClientColorPreview="bgColorChange" Style="display: inline-block; vertical-align: middle" runat="server" ID="bgColor" ShowIcon="true" PaletteModes="HSV"
                            KeepInScreenBounds="true">
                        </telerik:RadColorPicker>
                        <a href="javascript:void(0)" onclick="applyWallpaper(this)" style="float: right; margin-right: 35px;" class="mdl-button small GreenColor ">Apply</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div id="divCompList" >
            <span class="_title">Choose an organisation</span>
            <div class="_inner">
            <asp:Literal ID="pnlCompList" Mode="PassThrough" runat="server"></asp:Literal>
                </div>
        </div>
        <a href="javascript:void(0)" onclick="gotoHome()" title="Toggle Home Screen" id="homeButton"></a>
        <asp:Literal EnableViewState="false" ID="menuContent" runat="server" Mode="PassThrough"></asp:Literal>
        <div id="dashCmd" class="dash-cmd">          
        </div>
        <span id="secondLevelTitle" class="secondLevelTitle"></span>
        <div id="divWallpaper">
            <img id="imgWallPaper" style="display: none"  />
        </div>
        <div id="divDashboard">
            <iframe frameborder="0" id="ifrDash" allowtransparency="allowTransparency" src="DashBoard.aspx?my=1"></iframe>
        </div>
        <div style="background-color:transparent" id="ifrCtr">
            <div id="divCommands" style="display:none">
                <a href="javascript:void(0)" onclick="winCmd(this)" title="Back" class="win-cmd">&#xf060;</a><a
                    href="javascript:void(0)" onclick="winCmd(this)" title="Forward" class="win-cmd">&#xf061;</a><a
                        href="javascript:void(0)" onclick="winCmd(this)" title="Refresh" class="win-cmd active"> &#xf021;</a><a
                            href="javascript:void(0)" onclick="winCmd(this)" title="Maximize" class="win-cmd active"> &#xf065;</a><a
                                href="javascript:void(0)" onclick="winCmd(this)" title="Popout" class="win-cmd active"> &#xf08e;</a><a style="display:none"
                                    href="javascript:void(0)" onclick="ToggleDashBoard()" title="Toggle Dashboard" class="win-cmd active"> &#xf0ec;</a>
                <span class="win-title"></span>
            </div>
            <iframe id="ifrView" homepage="1" style="background-color:transparent" showtools="1" allowtransparency="allowTransparency" frameborder="0"></iframe>
        </div>
        <div>
        </div>
        <div id="divNotificationList" style="display: none">
            <span class="_hdr">Notifications</span> <a href="javascript:void(0)" style="display: none" class="_vw">View All</a>
            <div class="_inner">
                <div class="notif-items"></div>
                <div class="notif-history" style="display: none"></div>
            </div>
            <a href="javascript:void(0)" onclick="showNotificationHistory(this)" style1="display:none" class="_vh">Recent</a>
        </div>
        <div id="divSearch" style="display: none">
            <input type="text"  id="txtSearch" autocomplete="off" name="searchbox" />
            <div id="divSearchOption" runat="server" visible="false" style="text-align:right">
                <a id="chk-opt-menu" onclick="toggleSearchOptions(this)" title="Search Menus" href="javascript:void(0)" class="_chk-menu _on"></a>
                <a id="chk_opt_ent" runat="server" title="Search Records" href="javascript:void(0)" onclick="toggleSearchOptions(this)" class="_chk-ent _on"></a></div>
            <div id="divSearchResult">
                <span style="display:none" class="_menutitle">Menu</span>
                <div class="_menu">
                </div>             
                <span style="margin-top: 15px;display:none" class="_enttitle" >Records</span>
                <div class="_ent" ></div>
            </div>
        </div>
        <div id="divQuickAdd" style="display:none">
            <div style="height:100%;overflow-y:auto;overflow-x:hidden"><asp:Literal ID="ltQuickAdd" runat="server" Mode="PassThrough"></asp:Literal>
                <div id="divBookmarks">
                    <span class='bkTitle'>Bookmarks</span>
                    <div>
                        <asp:Literal ID="ltBooks" Text="<span class='_nobookdata'>No bookmarked items found </span>" runat="server" Mode="PassThrough"></asp:Literal>                      
                    </div>
                </div>
            </div>
        </div>
        <div id="divPwd" style="display: none; background-color: #fff" class="formSettings">
            <asp:Literal runat="server" ID="ltrPwdReq" Mode="PassThrough"></asp:Literal>
            <span class="mainHeading" style="color: #000">Change Password</span>
            <span class="row">
                <span class="lbl">Current Password</span>
                <input class="txt" type="password" id="txtOldPass" />
            </span>
            <span class="row">
                <span class="lbl">New Password</span>
                <input class="txt" type="password" id="txtNewPass" />
            </span>
            <span class="row">
                <span class="lbl">Confirm Password</span>
                <input class="txt" type="password" id="txtConfirmPass" />
            </span>
            <label id="lblPwdErr"></label>
            <div style="text-align: right; padding-top: 15px;">
                <a href="javascript:void(0)" onclick="changePassword(this)" class="mdl-button GreenButton">Change Password</a>
                <a href="javascript:void(0)" id="btnCancelPwd" onclick="$('#divPwd').HideModal()" class="mdl-button RedButton">Cancel</a>
            </div>
        </div>
        <asp:Literal ID="ltrLicenses" Mode="PassThrough" runat="server"></asp:Literal>
               
         <div style="background-color1: red" id="hoverHidePnl"></div>

    </form>
    <style>
        #divPwd .txt
        {
            color: #000 !important;
        }

        #divPwd .mainHeading
        {
            font-size: 24px;
            font-family: OpenSans;
            text-decoration: none;
            margin-top: -10px;
            text-shadow: 1px 1px 2px #D5D5D5;
        }

        #divPwd .lbl
        {
            text-shadow: 1px 1px 2px #D5D5D5;
        }
    </style>
    <script>

        function refreshDashBoard(items) {
            if (items == 1) {
                $("#dashCmd").removeClass("open");
                return;
            }
            $("#dashCmd").html(items);           
            
        }

        Erp.Init();
        document.title = ("<%=ErpModel.Globals.AppManager.IsService.ToString().ToLower()%>" == "true" ? $.defaultVal($.defaultVal(location.host.split('.')[1],"").toUpperCase(), Erp.PageTitle) : Erp.PageTitle);
        $(function () {
            $("#dashCmd").on("click", ".dash-item", function () {               
                if (!$(this).parent().hasClass("open")) {                    
                    $(this).parent().addClass("open");
                    $("#ifrDash")[0].contentWindow.editDashList();
                }
                else {
                    $(this).parent().removeClass("open")
                    $("#ifrDash")[0].contentWindow.hideDashList();
                }
            })
            //Erp.WebApi.KeepAlive();
            //if (UserSetting.ResetPassword == 1) {                
            //    showPass(1);
            //}
            $(window).on("resize", $.debounce(250, function () {
                $("#ThirdLevel").children(".menuSet").filter(":visible").slide("refresh");
                if (!$("#homeButton").hasClass("selected")) {
                    var s = $("#SecondLevel").children(".menuSet").filter(":visible");
                    if (s.length > 0)
                        checkkMoreItemsAvl(s);
                }
            }));
            $("#ThirdLevel").on("click", ".menuItemGroup", function () {
                $(this).children(".toggle").toggleClass("down");
                $(this).next().stop().slideToggle("slow", function () {
                    $("#ThirdLevel").children(".menuSet").filter(":visible").slide("refresh");
                });
                $("#ThirdLevel").children(".menuSet").filter(":visible").slide("refresh");
            })
            $("#FirstLevel_Selected").on("click", function () {
                $("#spnBtn").children().removeClass("sel");
                if ($("#FirstLevel").isVisible()) {
                    $(this).removeClass("toggle");
                    $("#FirstLevel,#hoverHidePnl").hide();
                    return;
                }
                var isHome = $("#homeButton").hasClass("selected");
                if (__curentTabData != 0) {
                    var vis = $("#ifrCtr").data("_showifr");
                    var _c = __curentTabData;
                    LoadCurrentTab(__curentTabData);
                    __curentTabData = _c;
                    if (vis) {
                        $("#ifrCtr").show();
                        $("#ifrCtr").data("_showifr", true);
                    }                    
                }

                if ((isHome && $("#FirstLevel").children(".selected").length == 0) || !isHome) {
                    if ($("#FirstLevel").children().length > 1) {
                        $("#FirstLevel").css("display", "flex");
                        $(this).addClass("toggle");
                    }
                    else
                        showSecondLevel($("#FirstLevel").children().eq(0))
                }                
                _verticalCollapse(true, false, $("#divCollapseV"));
                repositionContainer();
                $("#homeButton").removeClass("selected");
                $(document.body).addClass("HideDash");
                if ($("#FirstLevel").isVisible())
                    showHoverPanel();
                else
                    $("#hoverHidePnl").hide();

            })
            //$("#topBar,#SecondLevel").on("mouseover", function () {
            //    $("#hoverHidePnl").css({ top: "", left: "" }).show();              
            //});
            $("#divCollapseV").on("mouseover", function () {
                if (!$("#divCollapseV").hasClass("verticalTitle") || $("#ThirdLevel").find(".menuSet:visible").length == 0)
                    return;
                $("#divCollapseV").data("hover", true);
                _verticalCollapse(false, false, $("#divCollapseV"));
                showHoverPanel();
            });
            $("#usrMenuInner").on("click", function (e) { $find("<%=bgColor.ClientID%>").set_selectedColor(currentBgColor); e.stopPropagation(); });
            
            
            $("#hoverHidePnl").on("mouseover", function () {
                if ($("#divNotificationList").isVisible() || $("#divQuickAdd").isVisible() || $("#divSearch").isVisible() || $("#usrMenu").isVisible() | $("#moreItems").isVisible()) {
                    return;
                }
                if (!$("#divCollapseV").data("hover"))
                    return;
                _verticalCollapse(true, false, $("#divCollapseV"));
                if (!$("#FirstLevel").isVisible())
                    $("#hoverHidePnl").hide();
                repositionContainer();
            }).on("click", function () {
                $("#dashCmd").removeClass("open");
                if ($("#ifrDash")[0].contentWindow && typeof $("#ifrDash")[0].contentWindow.hideDashList == "function")
                    $("#ifrDash")[0].contentWindow.hideDashList();
                $("#divNotificationList,#divSearch,#divQuickAdd,#moreItems").hide();
                $("#spnBtn").children().removeClass("sel");
                if ($("#usrMenu").isVisible()) {
                    $("#usrMenu").hide();
                    $find("<%=bgColor.ClientID%>").set_selectedColor(currentBgColor);
                    if (DataModified)
                        SaveUserSettings();
                }
                $("#FirstLevel").hide(); $("#FirstLevel_Selected").removeClass("toggle")
                $("#divCollapseV").removeData("hover");
                _verticalCollapse(true, false, $("#divCollapseV"));
                $("#hoverHidePnl").hide();
                repositionContainer();
            })
            $(document).on("click", function (e) { if (!$(e.target).hasClass("lnkCompany")) $("#divCompList").hide(); })
            $("#usrMenu .themeList a").each(function () { var theme = '<%=ErpModel.Globals.Users.ThemeName%>'; if ($(this).attr("theme") == theme) $(this).node(0).html("&#xf00c;"); });

            repositionContainer();



            $("#<%=ddlWp.ClientID%>").chosen({ disable_search: true, width: "305px" });
            $("#ddlWpLayout").chosen({ disable_search: true, width: "100px" })
            $("#chkWp").CheckBoxX();


            $("#chkWp").checked(UserSetting.Wp.Custom == true).trigger("change");
            $("#<%=ddlWp.ClientID%>").val(UserSetting.Wp.Src).trigger("change").trigger("chosen:updated");
            $("#ddlWpLayout").val($.defaultVal(UserSetting.Wp.Layout, "Stretch")).trigger("chosen:updated");
            $("#txtExtImg").val($.defaultVal(UserSetting.Wp.Url, "http://")).on("focus", function () { if ($(this).val() == "http://") $(this).val(""); }).on("blur", function () { if ($(this).val() == "") $(this).val("http://"); });
            currentBgColor = $.defaultVal(UserSetting.Wp.BgColor, 'transparent');
            $("#divWallpaper").css("background-color", currentBgColor);
            applyWallpaper();
           
            if (window.opener && window.opener.Erp && window.opener.Erp.MobileHome) {
                //nothing
            }
            else {
                PageMethods.LoadNotification({ Type: "LoadNotification" }, function (arr) { LoadNotifications(arr, $("#divNotificationList").children("._inner").children(".notif-items"), false); })

                window.setInterval(function () {
                    PageMethods.LoadNotification({ Type: "LoadNotification", "@LastChecked": __lastChecked }, function (arr) { LoadNotifications(arr, $("#divNotificationList").children("._inner").children(".notif-items"), false, true); })
                }, 45000);
            }

            var divBk = $("#divBookmarks").children("div");
            divBk.sortable({
                handle: ".reorder",                update: function () {
                    var ids = [];
                    $("#divBookmarks").find("A").each(function () {
                        if ($(this).hasClass("_new"))
                            ids.push("menu:" + $(this).attr("menu"));
                        else
                            ids.push($(this).attr("bkid"));
                    });
                    Erp.WebApi.SortBookmarks(ids);
                }
            });
            divBk.on("click", ".menuTxt", function (e) {
                e.stopPropagation();
                e.preventDefault();
                openQuickAdd($(this).parent());
            })
            divBk.on("click", ".closeBtn", function (e) {
                e.stopPropagation();
                e.preventDefault();
                $(this).parent().remove();
                var bk = ($(this).parent().hasClass("_new") ? "menu:" + $(this).parent().attr("menu") : $(this).parent().attr("bkid"));
                if (bk)
                    Erp.WebApi.RemoveBookmark(bk);
            })

            initMenu();
        });

        function pageLoad() {
            $find("<%=bgColor.ClientID%>").set_selectedColor(currentBgColor);
            Erp.LoadComplete();
            if (window.opener && window.opener.Erp && window.opener.Erp.MobileHome) {
                $("#FirstLevel").find("a[menu='d9450e33-5fe7-4508-8a6e-d6bac5ca15d9']").trigger("click");
                $("#SecondLevel").find("div[menu='c08e10e2-2f46-40e1-9e2f-f5f2d773af4e']").trigger("click");
            }
           
        }
        function showHoverPanel() {
            var vis = $("#divNotificationList").isVisible() || $("#divQuickAdd").isVisible() || $("#divSearch").isVisible() || $("#usrMenu").isVisible();
            $("#hoverHidePnl").css({ top: (vis ? 0 : $("#topBar").outerHeight() + 10), left: (vis || $("#FirstLevel").isVisible()? 0 : 250), right: (vis ? 426 : 0) }).show();
        }
        function showUserMenu(a) {

            $("#hoverHidePnl").trigger("click");
            var list = $("#usrMenu");
            list.show();
            showHoverPanel();
            list.show();
            //$('#usrMenu').show().children().hide().toggle('blind');
        }
        function showQuick(a) {

            $("#hoverHidePnl").trigger("click");
            $(a).addClass("sel")           
            var list = $("#divQuickAdd");
            list.show();
            showHoverPanel();
            list.show();
            //var mx = window.innerHeight - list.offset().top - 80;
            //list.node(0).css("max-height", mx);
        }
        function showWidgetList(a) {
            $("#hoverHidePnl").trigger("click");            
            gotoHome();
            $("#ifrDash")[0].contentWindow.showWidgetList();
            $(a).addClass("sel")
        }
        function openQuickAdd(a) {
            $("#hoverHidePnl").trigger("click");
            $(a).addClass("sel")
            $("#divQuickAdd").hide();
            a = $(a);
            if (a.hasClass("quick-add-item"))
                _openWindow({ "Action": "ADDFORM", "Params": "_qadd=1", "Form": $.defaultVal(a.attr("fc"), "QuickAdd"), "Entity": a.attr("eid") }, a);
            else if (a.data("Action"))
                _openWindow(a.data("Action"),a);
            else
                _openWindow({ "Action": "URL", "Url":  a.attr("refurl") }, a);
        }
        var __indexingDone = false;
        function showSearch(a) {
            if (!__indexingDone) {
                indexMenus();
                $("#txtSearch").on("input", $.debounce(250, function (e) { searchMenu(); }));
                __indexingDone = true;
            }
            $("#hoverHidePnl").trigger("click");
            $(a).addClass("sel")
            var list = $("#divSearch");
            list.show();
            showHoverPanel();
            //list.position({ my: "right top", at: "center bottom", of: $(a) }).css("left", "+=40").css("top", "+=40");
            $("#txtSearch").focus();
            toggleSearchOptions(null);
        }

        

        var menuCollection=[]
        function indexMenus() {
            var menus = $("#FirstLevel,#SecondLevel,#ThirdLevel,#moreItems").find(".menuItem");
            menus.each(function () {
                var m = $(this);
                var t = m.find(".menuTxt").text();
                var tt = t;
                var p = null;
                if (m.attr("level") / 1 > 1) {
                    p = $("#" + m.closest(".menuSet").attr("id").replace("level2_set_", "level2_"));
                    tt = p.find(".menuTxt").text() + "/" + tt;
                    var p1 = {};
                    if (p.parent().attr("id") == "moreItems")
                        p1 = $("#" + p.parent().attr("refset").replace("level1_set_", "level1_"));
                    else
                        p1 = $("#" + p.closest(".menuSet").attr("id").replace("level1_set_", "level1_"));
                    tt = p1.find(".menuTxt").text() + "/" + tt;
                }
                else if (m.attr("level") / 1 == 1 && m.parent().attr("id") == "moreItems") {
                    p = m;
                    var p1 = $("#" + p.parent().attr("refset").replace("level1_set_", "level1_"));
                    tt = p1.find(".menuTxt").text() + "/" + tt;
                }
                else if (m.attr("level") / 1 == 1) {
                    p = m;
                    var p1 = $("#" + p.closest(".menuSet").attr("id").replace("level1_set_", "level1_"));
                    tt = p1.find(".menuTxt").text() + "/" + tt;
                }
                var ic = p ? p.find(".menuIcon").html() : "";
                menuCollection.push({ Id: m.attr("id"), Title: tt, Text: t, Icon: ic, IsLink: m.attr("onclick").indexOf("OpenWin") > -1 });
            });
            menuCollection = menuCollection.sort(function SortByName(a, b) {
                var aName = a.Text.toLowerCase();
                var bName = b.Text.toLowerCase();
                return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
            })
        }
        function toggleSearchOptions(a) {           
            var d = $('#divSearchResult');
            if (a) {
                a = $(a);
                if (a.hasClass("_chk-menu")) {
                    a.toggleClass('_on'); d.children('._menutitle,._menu').setDisplay(a.hasClass('_on'));
                }
                else {
                    a.toggleClass('_on'); d.children('._enttitle,._ent').setDisplay(a.hasClass('_on'));
                }
            }
            var mx = window.innerHeight - $("#divSearchResult").offset().top - 10;
            $("#divSearchResult").css("max-height", mx);
            if (d.children('._menu').isVisible() && d.children('._ent').isVisible())
                d.children("._menu,._ent").css("max-height", (mx - 120) / 2);
            else if (d.children('._menu').isVisible())
                d.children("._menu").css("max-height", (mx - 50));
            else if (d.children('._ent').isVisible())
                d.children("._ent").css("max-height", (mx - 50));
        }
        var __fetchingSearch = false;
        function searchMenu() {
            var chkmenu = (!$("#chk-opt-menu").exists() || $("#chk-opt-menu").hasClass("_on")),
                chkdb = $("#<%= chk_opt_ent.ClientID %>").hasClass("_on");
           
            var val = $("#txtSearch").val().toLowerCase();            
            var ctr1 = $("#divSearchResult").children("._menu").empty();          
            var ctr3 = $("#divSearchResult").children("._ent").empty();
            ctr1.removeClass("_nodata");
            ctr3.removeClass("_nodata");
            ctr1.prev().hide();
            ctr3.prev().hide();
            if (val.length < 1)
                return;
            if (chkmenu) {
                var ctr2 = $("<div></div>");
                ctr1.addClass("_nodata");
                ctr1.prev().show();
                var found = false;
                $(menuCollection).each(function () {
                    var m = this;
                    var i = m.Text.toLowerCase().indexOf(val);
                    if (i < 0)
                        return true;
                    var a = $('<a href="javascript:void(0)" title="' + m.Title + '" class="' + (!m.IsLink ? "_inactive" : "") + '" onclick="Erp.NavigateToMenu($(\'#' + m.Id + '\'))"><span class="_ico">' + ($.isEmpty(m.Icon) ? "" : m.Icon) + '</span>' + m.Text + '</a>');
                    if (i == 0) {
                        ctr1.append(a); found = true;
                    }
                    else if (val.length > 2) {
                        ctr2.append(a); found = true;
                    }
                });
                if (found)
                    ctr1.removeClass("_nodata");
                ctr1.append(ctr2);
            }
            if (chkdb) {
                ctr3.prev().show();
                ctr3.addClass("_nodata");
                if (val.length < 2)
                    return;
                ctr3.addClass("_prog");
                ctr3.removeClass("_nodata");               
                if (__fetchingSearch)
                    return;
                __fetchingSearch = true;
                _searchDb();
            }
        }
        function _searchDb() {
            var val = $("#txtSearch").val().toLowerCase();
            var curr = val;
            var ctr3 = $("#divSearchResult").children("._ent");
            PageMethods.Search(val, $.defaultVal($("#divSearchOption").attr("ents"), ""), function (r) {
                __fetchingSearch = false;
                if (curr != $("#txtSearch").val().toLowerCase()) {//console.log(new Date())
                    ctr3.empty();
                    ctr3.addClass("_prog");
                    __fetchingSearch = true;
                    _searchDb();
                    return;
                }
                ctr3.removeClass("_prog");
                ctr3.addClass("_nodata");
                if (r && r.length > 0) {
                    for (var i = 0; i < r.length; i++) {
                        if (i == 0 || r[i]["__eid"] != r[i - 1]["__eid"])
                            ctr3.append("<span class='_groupName'><span>" + $.defaultVal(r[i]["__eidIcon"],"") + "</span>" + r[i]["__eidTitle"] + "</span>");
                        var a = $('<a href="javascript:void(0)" title="' + r[i]["__recTitle"] + '" class="menu-search-item" onclick=\'_openWindow({"Action":"EDITFORM","Params":"_search=1",  "Form":"SearchResult",  "Entity":"' + r[i]["__eid"] + '",RecordID:"' + r[i]["__pid"] + '"},$(this))\'><span class="_ico"></span>' + r[i]["__recTitle"] + '</a>');
                        ctr3.append(a);
                    }
                    ctr3.removeClass("_nodata");
                }
                else
                    ctr3.addClass("_nodata");
            }, function (r) {
                __fetchingSearch = false;
                ctr3.removeClass("_prog");
                ctr3.addClass("_nodata");
            });
        }
        function showNotification(a) {
            $("#hoverHidePnl").trigger("click");
            if (a)
                $(a).addClass("sel");
            var list = $("#divNotificationList");
            list.show();
            showHoverPanel();
            setNotifScroll(list.children("._inner").children(":visible"));

            $("#divNotificationList").addClass("play");

        }
        function setNotifScroll(list) {
            //var ctr = $("#divNotificationList");
            //ctr.show();
            //if (list.outerHeight() > 500)
            //    ctr.addClass("_scroll");
            //else
            //    ctr.removeClass("_scroll");
            //ctr.position({ my: "right top", at: "center bottom", of: "#notifyLink" }).css("left", "+=45").css("top", "+=20");
        }
        var __lastChecked = "";
        function LoadNotifications(arr, list,recent,latest) {

            for (var i = 0; i < arr.length; i++) {
                var item = arr[i];
                __lastChecked = item["lastchecked"];
                var html = "<div class='notif-item" + ($.isEmpty(item.Color) ? "" : " notif-" + item.Color) + "'>"
                html += "<div class='notif-icon'>"
                if (item.Icon.indexOf("&#x") > -1)
                    html += "<span>" + item.Icon + "</span>";
                else if (!isValidImgUrl(item.Icon))
                    html += "<span>&#xf12a;</span>";
                else
                    html += "<img class='notif-img' src='" + item.Icon.replace("sz=75", "xz=75") + (item.Icon.indexOf("?") > 0 ? "&" : "?") + "sz=40" + "'/>";
                html += "</div>"
                html += "<div class='notif-content'>"
                html += "<div class='notif-title'>" + item.Title + "</div>"
                html += "<div class='notif-date'>" + item.Date + "</div>"
                html += "<div class='notif-msg'>" + item.Message + "</div>";//<a href='javascript:void(0)' onclick='alert(1)'>dfsdf</a>
                html += "</div>"
                html += "<a class='notif-close' onclick='removeNotification(this)' href='javascript:void(0)'>&times;</a>"
                html += "</div>"

                var notif = $(html);                
                notif.data("NotID", item.ID);
                notif.data("Ex", item.ExpiryMode);
                if (recent && (Fn.Eq(item.ExpiryMode, "remove") || Fn.Eq(item.ExpiryMode, "disable"))) {
                }
                else {
                    notif.data("Action", JSON.parse(item.Action));
                    notif.on("click", function (e) {
                        if ($(e.target).prop("tagName") == "A" || $(e.target).hasClass("hasClick"))
                            return;
                        if ($(this).data("Read") && (Fn.Eq($(this).data("Ex"), "remove") || Fn.Eq($(this).data("Ex"), "disable"))) {
                            return;
                        }
                        $(this).data("Read", true);
                        if ($(this).parent().hasClass("notif-items"))
                            PageMethods.Execute({ Type: "MarkAsRead", "@NotID": $(this).data("NotID") });
                        _openWindow($(this).data("Action"));
                        $(this).addClass("visited");
                        $("#divNotificationList").hide();
                    });
                }
                if (latest)
                    list.prepend(notif);
                else
                    list.append(notif);
                if (i < 20)
                    notif.css("transition", "left " + i * 0.15 + "s");
                var ws = notif.children(".notif-content").children(".notif-msg").contents();
                for (var z = ws.length - 1; z >= 0; z--) {
                    if (ws.eq(z).text().trim().length == 0)
                        ws.eq(z).remove();
                    else
                        break;
                }
            }
            if (arr.length > 0) {
                list.children(".notif-noitem").remove();
                if (list.hasClass("notif-items")) {
                    var ctr = parseInt($("#notifyLink").find("._c").html());
                    $("#notifyLink").addClass("_active").find("._c").html((isNaN(ctr) ? 0 : ctr) + arr.length);
                }
            }
            else if (!latest)
                addBlankNotification(list);
            list.find(".notif-img").error(function () {
                $(this).hide().before("<span>&#xf12a;</span>");
            })

            if (latest && arr.length > 0)
                showNotification();
        }

        function isValidImgUrl(str) {
            if ($.isEmpty(str))
                return false;
            return str.indexOf("./") > -1 || str.indexOf("/") == 0 || str.indexOf("www") == 0 || str.indexOf("http") == 0;
        }
        function addBlankNotification(list) {
            if (list.hasClass("notif-history") && list.children().length > 0)
                return;
            list.children(".notif-noitem").remove();
            list.append("<div class='notif-noitem'><span class='notif-icon'>&#xf1f7;</span><span class='notif-title'>No " + (list.hasClass("notif-history") ? "Recent" : "New") + " Notifications Available</span></div>");
        }
        function removeNotification(a) {
            var item = $(a).closest(".notif-item");
            item.css("transition", "");
            item.animate({ left: "-410px" }, 300,
                function () {
                    $(this).css("left", "");
                    var list = $("#divNotificationList");
                    list.children("._inner").children(".notif-history").append(item);
                    list.children("._inner").children(".notif-history").children('.notif-noitem').remove();
                    if (list.hasClass("_scroll") && list.children("._inner").children(".notif-items").outerHeight() <= 500) {
                        list.css("left", "+=20");
                        list.removeClass("_scroll");
                    }
                });
            var ctr = parseInt($("#notifyLink").find("._c").html());
            ctr = isNaN(ctr) ? 0 : ctr - 1;
            $("#notifyLink").removeClass((ctr <= 0 ? "_active" : "")).find("._c").html(ctr);
            if (ctr <= 0)
                addBlankNotification($("#divNotificationList").children("._inner").children(".notif-items"));

            if (!item.data("Read"))
                PageMethods.Execute({ Type: "MarkAsRead", "@NotID": item.data("NotID") });
        }
        function showNotificationHistory(a) {
            if ($(a).html() == "Back") {
                $(a).html("Recent");
                setNotifScroll($("#divNotificationList").children("._inner").children(".notif-history").hide().prev().show());
                return;
            }
            var list = $("#divNotificationList").children("._inner").children(".notif-items").hide().next().show();
            setNotifScroll(list);
            $(a).html("Back");
            if ($(a).data("Loading"))
                return;
            $(a).data("Loading", true);

            var ids = "";
            list.children().each(function () { ids += Fn.CInt($(this).data("NotID")) + ","; });
            PageMethods.LoadNotification({ Type: "LoadRecentNotification", Ids: ids }, function (arr) { LoadNotifications(arr, list,true); setNotifScroll(list); })
        }

        function toggleCompList(a) {
            $(a).focus();
            //$("#divCompList").slideToggle().position({ my: "middle top", at: "middle bottom", collision: "none node", of: $(a) });
            $("#divCompList").ShowModal({ showClose: true, autoClose: true, zindex: 100000 }).css("top", 100);
            $("#divCompList").children("._inner").css("max-height", window.innerHeight - 100 - 80);
        }

        //function updateTimer() {
        //    $('#spnTime').html(moment().format('MMMM Do YYYY, h:mm:ss a'));
        //    window.setTimeout(updateTimer, 1000);
        //}
        //updateTimer();

        function changeTheme(a) {
            $("#usrMenu .themeList a span").html("");
            $(a).node(0).html("&#xf00c;");
            var theme = $(a).attr("theme");
            $(document.documentElement).removeClass("GreyTheme DarkTheme BlueGlossTheme GreenTheme OrangeTheme RedTheme").addClass(theme + "Theme")
            var ifr = $("#ifrView")[0];
            if (ifr && ifr.contentWindow && typeof ifr.contentWindow.changeTheme == "function")
                ifr.contentWindow.changeTheme(theme);
            ifr = $("#ifrDash")[0];
            if (ifr && ifr.contentWindow && typeof ifr.contentWindow.changeTheme == "function")
                ifr.contentWindow.changeTheme(theme);
            UserSetting.Theme = theme;
            if (!UserSetting.Wp.Custom)
                applyWallpaper();
            DataModified = true;

        }
        function applyWallpaper(a) {
            if (a) {
                DataModified = true;
                UserSetting.Wp.Custom = $("#chkWp").checked();
                UserSetting.Wp.Layout = $("#ddlWpLayout").val();
                UserSetting.Wp.Url = $("#txtExtImg").val();
                UserSetting.Wp.Src = $("#<%=ddlWp.ClientID%>").val();
                UserSetting.Wp.BgColor = currentBgColor;
                SaveUserSettings();
            }
            var lt = $.defaultVal(UserSetting.Wp.Layout, "Stretch");
            var imgUrl = UserSetting.Wp.Custom ? (UserSetting.Wp.Src == "EXTURL" ? UserSetting.Wp.Url : ("../wallpaper/" + UserSetting.Wp.Src)) : ("../wallpaper/" + UserSetting.Theme+".jpg?1");
            if (lt == "Stretch" && (!UserSetting.Wp.Custom || UserSetting.Wp.Src != "None")) {
                $("#divWallpaper").css({ "background-image": "none" });
                $("#imgWallPaper").css({ height: "", width: "" }).show().attr("src", imgUrl);
                if (lt == "Stretch")
                    $("#imgWallPaper").css({ height: "100%", width: "100%" });
                
            }
            else {
                $("#imgWallPaper").hide();
                $("#divWallpaper").css({
                    "background-image": (UserSetting.Wp.Custom && UserSetting.Wp.Src == "None" ? "none" : "url(" + imgUrl + ")"),
                    "background-repeat": (lt == "Tile" ? "repeat" : "no-repeat"),
                    "background-position": (lt == "Center" || lt == "Fit" ? "center center" : "0 0"),
                    "background-size": (lt == "Fit" ? "contain" : ""),
                });
            }
            
        }
        var currentBgColor = "";
        function bgColorChange(s, a) {
            currentBgColor = a.get_color();
            $("#" + s.get_id() + "_icon,#divWallpaper").css("background-color", currentBgColor);
        }
       
        function SaveUserSettings() {
            DataModified = false;
            var xml = '<Settings><Wallpaper BgColor="' + UserSetting.Wp.BgColor + '" Custom="' + (UserSetting.Wp.Custom ? 1 : 0) + '" Src="' + $.encodeXml(UserSetting.Wp.Src, true) + '" Url="' + $.encodeXml(UserSetting.Wp.Url, true) + '" Layout="' + UserSetting.Wp.Layout + '" /><Theme>' + UserSetting.Theme + '</Theme><CollapseTopMenu>' + (UserSetting.CollapseTop ? 1 : 0) + '</CollapseTopMenu><CollapseLeftMenu>' + (UserSetting.CollapseLeft ? 1 : 0) + '</CollapseLeftMenu></Settings>';
            PageMethods.Execute({ Type: "SaveSettings", "@xml": xml, Theme: UserSetting.Theme });
            $find("<%=bgColor.ClientID%>").set_selectedColor(currentBgColor);
        }
        function showPass(r) {
            //$("#btnCancelPwd").setDisplay(r != 1);
            //$("#divPwd").ShowModal(1000005);
            Erp.OpenWindow({ "Action": "ADDFORM", "Responsive": 1, "Entity": "tbl_SYS_Users", "Form": "ChangePassword", "Params": "_sc=AVLIr1Q9SqY0wxr0g%2F1TdVxIjQj%2F8C%2FBacDIP48AbIg%3D", "Location": "Popup", "PopHt": "400", "PopWd": "700" });
        }
        function showUserProfile() {
            $("#hoverHidePnl").hide();
            $("#usrMenu").hide();
            Erp.OpenWindow({
                "Action": "EDITFORM", "Entity": "tbl_SYS_Users", "Form": "Personal", "RecordID": Users.UserID,
                "Params": "_notools=1", "Location": "Popup", "PopHt": "400", "PopWd": "800"
            })
        }

        function changePassword() {
            if ($("#txtNewPass").val() != $("#txtConfirmPass").val()) {
                alert('"New" password does not match with "Confirm" Password')
                return;
            }
            PageMethods.Execute({ Type: "ChangePassword", "@OldPassword": $("#txtOldPass").val(), "@NewPassword": $("#txtNewPass").val() }, function (result) {
                if (result["PasswordSet"] / 1 > 0) {
                    $("#divPwd").HideModal();
                    alert('Password has been modified');
                }
                else
                    alert("Password does not match with current password");
            });
        }
    </script>
    <script>
        var __doNotAddToHistory = false;
        var __last2ndLevelBtn = {};
        if (history.pushState) {
            window.onpopstate=function (event) {
                var btn = event.state;
                if (btn && btn.indexOf("|") > -1) {
                    $("#homeButton").removeClass("selected");
                    $(document.body).addClass("HideDash");
                    LoadCurrentTab(btn);
                    $("#ifrCtr").show();
                    repositionContainer();
                    var arr = btn.split('|');
                    lvl = arr[0];
                    if (arr[0] == "0")
                        btn = $("#FirstLevel").find(".menuItem[menu='" + arr[1] + "']");
                    else if (arr[0] == "1")
                        btn = $("#SecondLevel,#moreItems").find(".menuItem[menu='" + arr[1] + "']");
                    if (arr[0] == "3")
                        btn = $("#ThirdLevel").find(".menuItem[menu='" + arr[1] + "']");
                    __doNotAddToHistory = true;
                    btn.click();
                    __doNotAddToHistory = false;
                }
            };

            window.onbeforeunload = function () { return "Do you wish to navigate away from this site?"; };
        }
        
        var winHistory = []; winHistoryPos = 0;
        
        function initMenu() {
            $("#ThirdLevel").prepend($("#secondLevelTitle").hide());
            //$("#ThirdLevel").on("click", function () { hideSecondLevel(); repositionContainer(); })
            LoadCurrentTab();
            gotoHome(true);
          
            //$("#FirstLevel").node(0).addClass("selected").click();
            //window.setTimeout(gotoHome, 1000);
          
            $("#SecondLevel").append($("#moreBtn"));
            //$("#SecondLevel").append($("#rt2"));
            $("#ThirdLevel").append($("#aTop"));
            $("#ThirdLevel").append($("#aBottom"));

        }
        function SaveCurrentTab(btn) {
            if (!btn.attr("menu"))
                return;
            __curentTabData = btn.attr("level") + "|" + btn.attr("menu");
            //return;
            $.DB("CurrentTab_" + Users.UserID, btn.attr("level") + "|" + btn.attr("menu"));
        }
        function LoadCurrentTab(data) {           
            var btn = null; var lvl; var item;
            if (data && data instanceof $) {
                btn = data;
                lvl = btn.attr("level") / 1;
            }
            else {
                item = (data ? data : $.DB("CurrentTab_" + Users.UserID));
                if ($.isEmpty(item))
                    return;
            }
            if (!btn && $.isEmpty(item))
                $("#FirstLevel").node(0).addClass("selected").click();
            else {
                if (!btn) {
                    var arr = item.split('|');
                    lvl = arr[0];
                    if (arr[0] == "0")
                        btn = $("#FirstLevel").find(".menuItem[menu='" + arr[1] + "']");
                    else if (arr[0] == "1")
                        btn = $("#SecondLevel,#moreItems").find(".menuItem[menu='" + arr[1] + "']");
                    if (arr[0] == "3")
                        btn = $("#ThirdLevel").find(".menuItem[menu='" + arr[1] + "']");
                }
                if (btn && btn.exists()) {
                    if (lvl == 0) {
                        btn.addClass("selected");
                        showSecondLevel(btn[0]);
                        var sc = btn.offset().left - btn.parent().outerWidth() - btn.parent().offset().left;
                        if (sc > 0)
                            btn.parent().scrollLeft(sc + 120);
                    }
                    else if (lvl == 1) {
                        var mset = {};
                        if (btn.parent().attr("id") == "moreItems")
                            mset = $("#" + btn.parent().attr("refset"));
                        else
                            mset = btn.closest(".menuSet");
                        mset.parent().children(".menuSet").hide();
                        mset.show();
                        var f = $("#" + mset.attr("id").replace("_set", ""));
                        f.addClass("selected");
                        showSecondLevel(f[0]);
                        showThirdLevel(btn[0]);
                        var sc = btn.offset().left - mset.outerWidth() - mset.offset().left;
                        if (sc > 0)
                            mset.scrollLeft(sc + 120);
                    }
                    else if (lvl == 3) {
                        var mset = btn.closest(".menuSet");
                        btn.parent().show().prev().find(".toggle").removeClass("down");
                        mset.parent().children(".menuSet").hide();
                        mset.show();
                        var s = $("#" + mset.attr("id").replace("_set", ""));
                        var mset1 = s.closest(".menuSet");
                        var f = $("#" + mset1.attr("id").replace("_set", ""));
                        showSecondLevel(f[0]);
                        showThirdLevel(s[0]);
                        btn.addClass("selected");
                        var sc = btn.offset().top - mset.outerHeight() - mset.offset().top;
                        if (sc > 0)
                            mset.scrollTop(sc+30);
                    }
                }
                //else
                    //$("#FirstLevel").node(0).addClass("selected").click();
            }
        }

        var __curentTabData = 0;
        function gotoHome(fromInit) {
            //if ($("#homeButton").hasClass("selected") && __curentTabData) {
            //    $("#homeButton").removeClass("selected");
            //    $(document.body).addClass("HideDash");
            //    var vis = $("#ifrCtr").data("_showifr");
            //    var _c = __curentTabData;
            //    LoadCurrentTab(__curentTabData);
            //    __curentTabData = _c;
            //    if (vis) {
            //        $("#ifrCtr").show();
            //        $("#ifrCtr").data("_showifr", true);
            //    }
            //    if (__curentTabData.indexOf("3|") > -1) {
            //        _verticalCollapse(true, false, $("#divCollapseV"));
            //        repositionContainer();
            //    }
            //}
            //else {
                $("#FirstLevel_Selected").removeClass("toggle");
                var vis = $("#ifrCtr").isVisible();                    
                showSecondLevel($("<span id='level0_' home='1' style='color:#fff;background-color:#D41243;'><span class='menuTxt'>Home</span></span>"));
                $(document.body).removeClass("HideDash");
                //$("#FirstLevel").children().removeClass("selected");
                $("#homeButton").addClass("selected");
                if(vis)
                    $("#ifrCtr").data("_showifr", true);
            //}
            $("#hoverHidePnl").hide().trigger("click");
            //$("#SecondLevel").css({ height: 8, overflow: "hidden" });
            //setSecondLevelTitle($("<span style='color: rgb(255, 255, 255); background-color: rgb(193, 0, 79);'><span class='menuTxt'>Home</span></span>"));
            //_verticalCollapse(true, false, $("#divCollapseV"));
        }
        function ToggleDashBoard() {
            $(document.body).toggleClass("HideDash")
            //$("#divDashboard").show();
            //$("#ifrCtr,#divCommands").show();
        }
        function OpenWin(btn) {
            $("#divCollapseV").data("hover", true);
            $("#homeButton").removeClass("selected");
            btn = $(btn);
            if (checkDataForm())
                return false;

            var lvl = btn.attr("level");
            btn.parent().children(".menuItem").removeClass("selected");
            if (lvl == 3) {
                SaveCurrentTab(btn)
                btn.closest(".menuSet").find(".menuItem").removeClass("selected");
                showHoverPanel();
                $("#divCollapseV").data("hover", true);
                repositionContainer();
            }
            btn.addClass("selected");
            var t = btn.find(".menuTxt").html();
            if (lvl == 0) {
                $("#secondLevelTitle").html(t);
                $("#divCollapseV.verticalTitle").html(t.Replace(" ","&nbsp;"));
            }
            var action = btn.data("Action");
            var loc = $.defaultVal(action.Location, "").toUpperCase();
            _openWindow(action, btn);
            if (!__doNotAddToHistory && history.pushState && loc != "POPUP")
                history.pushState(btn.attr("level") + "|" + btn.attr("menu"), "Test", window.location);
        }
        function checkDataForm() {
            if ($(document.body).hasClass("HideDash") && $("#ifrView").isVisible()) {
                var w = $("#ifrView")[0].contentWindow;
                try {
                    if (!w || !w.Erp)
                        return false;
                }
                catch (e) {
                    return false;
                }
                var fr = w.$("#ifrDetailsWindow");
                var e = null;
                if (fr.isVisible()) {
                    try {
                        if (!fr[0].contentWindow || !fr[0].contentWindow.Erp)
                            return false;
                    } catch (e) {
                        return false;
                    }
                    e = fr[0].contentWindow.Erp;
                }
                else {
                    if (!$(w.document.documentElement).isVisible())
                        return false;
                    e = w.Erp;
                }
                if (!e)
                    return false;
                if ((e.LayoutMode == "A" || e.LayoutMode == "E") && e.FormHash != e._getFormHash())
                    return !confirm('Current changes if any will be lost.\nDo you wish to navigate away from this page?');
            }
            return false;
        }

        function navigateHistory(dir) {
            winHistoryPos += dir;
            var nav = true;
            winHistoryPos = (winHistoryPos < 0 ? (nav = false, 0) : winHistoryPos);
            winHistoryPos = (winHistoryPos > winHistory.length - 1 ? (nav = false, winHistory.length - 1) : winHistoryPos);
            var h = winHistory[winHistoryPos];
            if (h && nav) {
                btn = $("#" + h.id);
                var lvl = btn.attr("level");
                if (lvl == 0) {
                    showSecondLevel(btn[0],true);
                    $("#secondLevelTitle").html(h.title);
                    $("#divCollapseV").html(h.title.Replace(" ","&nbsp;"));
                }
                else if (lvl == 1)
                    showThirdLevel(btn[0],true);

                if (lvl == 1 || lvl == 2) {
                    var mset = btn.closest(".menuSet");
                    mset.parent().children(".menuSet").hide();
                    mset.show();
                }
                else if (lvl == 3) {
                    var mset = btn.closest(".menuSet");
                    mset.parent().children(".menuSet").hide();
                    mset.show();
                    var s = $("#" + mset.attr("id").replace("_set", ""));
                    var mset1 = s.closest(".menuSet");
                    var f = $("#" + mset1.attr("id").replace("_set", ""));
                    showSecondLevel(f[0], true);
                    showThirdLevel(s[0], true);
                }
                btn.parent().children(".menuItem").removeClass("selected");
                if (lvl == 3)
                    btn.closest(".menuSet").find(".menuItem").removeClass("selected");
                btn.addClass("selected");
                _verticalCollapse(true, false, $("#divCollapseV"));
                repositionContainer();
                if (!$.isEmpty(h.src)) {
                    $(document.body).addClass("HideDash");
                    $("#ifrCtr").show();
                    $("#ifrView").show().attr("src", h.src);
                    $("#divCommands").find(".win-title").html(h.title);
                }
            }
            setHistoryStatus();
        }
        function setHistoryStatus() {
            var f = $("#divCommands").find("A[title=Forward]").removeClass("active");
            var b = $("#divCommands").find("A[title=Back]").removeClass("active");
            if (winHistoryPos < winHistory.length - 1 && winHistory.length > 1)
                f.addClass("active");
            if (winHistoryPos > 0 && winHistory.length > 1)
                b.addClass("active");
        }
        function winCmd(_btn,_type) {
            var btn = (_btn ? $(_btn) : null);
            var type = (_type ? _type.toLowerCase() : btn.attr("title").toLowerCase());
            if (type == "back") {
                navigateHistory(-1)
            }
            else if (type == "forward") {
                navigateHistory(1)
            }
            else if (type == "refresh") {
                if ($("#ifrView")[0].contentWindow && typeof $("#ifrView")[0].contentWindow.refreshForm == "function")
                    $("#ifrView")[0].contentWindow.refreshForm();
                else
                    $("#ifrView").attr("src", $("#ifrView").attr("src"));
            }
            else if (type == "maximize" || type == "restore") {
                if ($("#ifrCtr").hasClass("win-maximize")) {
                    if (btn) {
                        btn.attr("title", "Maximize");
                        btn.html("&#xf065;");
                    }
                    $("#ifrCtr").removeClass("win-maximize")
                    //$("#FirstLevel").slide("refresh");
                    //$("#SecondLevel").find(".menuSet:visible").slide("refresh");
                    $("#homeButton").show()
                }
                else {
                    if (btn) {
                        btn.attr("title", "Restore");
                        btn.html("&#xf066;");
                    }
                    $("#ifrCtr").addClass("win-maximize");
                    $("#lt2,#rt2,#homeButton").hide()
                }
            }
            else if (type == "popout") {
                if ($("#ifrView")[0].contentWindow && typeof $("#ifrView")[0].contentWindow.popoutForm == "function")
                    $("#ifrView")[0].contentWindow.popoutForm();
                else
                    window.open($("#ifrView").attr("src"))
            }
        }


        function showSecondLevel(btn, fromHistory) {
            $("#homeButton").removeClass("selected");
            if (!btn)
                return;
            btn = $(btn);
            $("#FirstLevel").hide();
            $("#FirstLevel_Selected").removeClass("toggle");
            //if (!fromHistory && checkDataForm())
            //    return false;
            $(document.body).addClass("HideDash");
            //$("#ifrCtr").hide();
            //$("#ifrCtr").removeData("_showifr");
            
            SaveCurrentTab(btn);
            showHoverPanel();
            btn.parent().children(".menuItem").removeClass("selected");
            btn.addClass("selected");
            var id = btn.attr("id").replace("level1_", "");
            $("#SecondLevel").show();
            $("#ThirdLevel").show().children(".menuSet").hide();
            var mset = $("#SecondLevel").show().children(".menuSet").hide().filter("#level1_set_" + id).show();
            $("#lt2").hide(); $("#rt2").hide();

            if (mset.children().length > 0) {
                if (__last2ndLevelBtn[mset.attr("id")] && $("#" + __last2ndLevelBtn[mset.attr("id")]).exists())
                    showThirdLevel($("#" + __last2ndLevelBtn[mset.attr("id")]), true);
                else
                    showThirdLevel(mset.node(0)[0]);                
            }
            else {
                __last2ndLevelBtn[mset.attr("id")] = null;
                setSecondLevelTitle(null);
                $("#ThirdLevel").hide();
            }
            $("#moreBtn").hide();
            if (!btn.attr("home"))
                checkkMoreItemsAvl(mset);
           
            repositionContainer();
            
        }
        function checkkMoreItemsAvl(mset) {
            
            $("#SecondLevel").css("width", $("#spnBtn").position().left - $("#SecondLevel").position().left - 10);
            var more = $("#moreItems").hide();
            if (more.attr("refSet"))
                $("#" + more.attr("refSet")).append(more.children().removeClass("shift"));
            $("#moreBtn").hide();
            var items = mset.children();
            var mPos = mset.getPosition();
            var found = false;
            for (var i = 0; i < items.length; i++) {
                var itm = items.eq(i);
                if (!found) {
                    var iPos = itm.getPosition();
                    if (iPos.right > mPos.right)
                        found = true;
                }
                if (found)
                    itm.addClass("shift");
            }
            if (found) {
                more.attr("refSet", mset.attr("id")).append(mset.children(".shift"));
                $("#moreBtn").show().css("left", mset.children().last().getPosition().right + 5);
                more.show().position({ my: "right", at: "right", of: $("#moreBtn") }).css("top", $("#topBar").outerHeight()).hide();
            }
           // alert($("#spnBtn").position().left - $("#SecondLevel").position().left - 10)
        }
      
        function setSecondLevelTitle(btn) {
            var t = (btn ? btn.find(".menuTxt").text() : "");
            t = (t == "" ? "&nbsp;" : t);
            var f = null;
            if (btn) {
                if (btn.parent().attr("id") == "moreItems")
                    mset = $("#" + btn.parent().attr("refset"));
                else
                    mset = btn.closest(".menuSet");             
                f = $("#" + mset.attr("id").replace("_set", ""));
            }
            var s = (f ? $.defaultVal(f.attr("style1"), "") : "");
            var sl = $("#secondLevelTitle");
            var sl1 = $("#divCollapseV.verticalTitle");
            sl.show().html(t.Replace(" ","&nbsp;"));
            sl.attr("title", t);
            sl.attr("style", s);
            sl1.html((f ? f.find(".menuTxt").text() : t).Replace(" ", "&nbsp;"));
            sl1.attr("style", s);
        }
        function showThirdLevel(btn, fromHistory) {
            $("#homeButton").removeClass("selected");
            if (!btn)
                return;
            $("#FirstLevel").hide(); $("#FirstLevel_Selected").removeClass("toggle")
            $("#divCollapseV").removeData("hover");
            //if (!fromHistory && checkDataForm())
            //    return false;
            $(document.body).addClass("HideDash");
            //$("#ifrCtr").hide();
            //$("#ifrCtr").removeData("_showifr");
            $("#SecondLevel").show();
            $("#ThirdLevel").show();
            showHoverPanel();
            btn = $(btn);
            SaveCurrentTab(btn);
            __last2ndLevelBtn[btn.closest(".menuSet").attr("id")] = btn.attr("id");
            btn.parent().children(".menuItem").removeClass("selected");
            $("#SecondLevel").children(".menuSet").filter(":visible").children().removeClass("selected");
            $("#moreItems").hide().children().removeClass("selected");
            btn.addClass("selected");
            var id = btn.attr("id").replace("level2_", "");
            var mset = $("#ThirdLevel").children(".menuSet").hide().filter("#level2_set_" + id).show();
            setSecondLevelTitle(btn);
            if (mset.children().length <= 0) {
                _verticalCollapse(true, false, $("#divCollapseV"));
            }
            else {
                //if (!userCollapsed_V)
                _verticalCollapse(false, false, $("#divCollapseV"));

                mset.slide({ direction: "Vertical", disableButton: true, step: 40, movTop: $("#aTop"), movBottom: $("#aBottom") });
            }
            repositionContainer()
        }
        function hideSecondLevel() {
            //$("#SecondLevel").hide();
            repositionContainer();
        }
        function repositionContainer() {
            var tb = $("#topBar");
            var f = $("#FirstLevel");
            var s = $("#SecondLevel");
            var t = $("#ThirdLevel");
            var top = (tb.isVisible() ? tb.outerHeight(true) : 0);
            $("#ifrCtr,#divDashboard,#divWallpaper").css("top", top);
            t.css("top", top);
            $("#ifrCtr,#divDashboard,#divWallpaper").css("left", (t.isVisible() ? t.outerWidth(true) : 0));
        }
        var userCollapsed_V = false;
        function toggleCollapse(d, onLoad) {
            d = $(d);
            if (d.parent().outerWidth() < 75 || $("#divCollapseV").data("hover")) {
                if ($("#ThirdLevel").find(".menuSet:visible").length == 0)
                    return;
                $("#divCollapseV").removeData("hover");
                _verticalCollapse(false, true, d);
                userCollapsed_V = false;
            }
            else {
                _verticalCollapse(true, true, d);
                userCollapsed_V = true;
                if (!onLoad)
                    UserSetting.CollapseLeft = true;
            }
            if ($("#hoverHidePnl").isVisible())
                $("#hoverHidePnl").trigger("mouseover");
           

        }

        function _verticalCollapse(coll, anim, d) {
            if (coll) {
                $("#ThirdLevel").addClass("coll")
                d.addClass("verticalTitle").attr("style", $.defaultVal($("#secondLevelTitle").attr("style"), ""));
                //d.html($("#secondLevelTitle").html());
                d.parent().css("overflow", "hidden");
                if (anim)
                    d.parent().animate({ width: 28 }, 250, repositionContainer);
                else
                    d.parent().css("width", 28);
            }
            else {
                $("#ThirdLevel").removeClass("coll")
                d.removeClass("verticalTitle").attr("style", "");
                //d.html("");
                if (anim)
                    d.parent().animate({ width: 200 }, 250, function () { d.parent().css("overflow", ""); repositionContainer(); });
                else
                    d.parent().css("width", 200).css("overflow", "");
            }

        }

        function __logout() {
            window.onbeforeunload = null;
            window.location.replace('../system/logout.aspx?_u=' + getQS("_u") + '&_c=' + getQS("_c") + '&_ap=' + getQS("_ap") + '&_db=' + getQS("_db") + '&_scr=' + __scriptPaths)
        }
    </script>

    <asp:Literal ID="embedContent" runat="server" Mode="PassThrough"></asp:Literal>
</body>
</html>
