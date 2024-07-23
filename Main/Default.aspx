<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="SensysErp.Main.Default" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>
<!DOCTYPE html>

<html runat="server" id="htmlDoc" xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/modernizr.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/System.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery-ui-1.10.3.custom.min.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jqHelper.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CustomControls.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/CustomControl/CustomControl.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/fonts/font.css")%>

    <%# HelperLib.Web.WebResources.GetResource("~/Css/bluegloss/jquery-ui-1.10.3.custom.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Css/materialize.min.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/materialize.min.js")%>

    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/dragend.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/UiHelper.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/moment.min.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Erp.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Ui.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Fn.js")%>



    <script>
        Erp.Responsive = true;
        Erp.MobileHome = true;
        HomePage = true;
    </script>
</head>
<body class="mobile pg-mobile responsive">
    <form id="form1" runat="server">
        <asp:ScriptManager ID="ScriptManager1" runat="server" EnablePageMethods="true">
        </asp:ScriptManager>
        <%= HelperLib.Web.WebResources.GetResource("~/css/base.css")%>
        <%= HelperLib.Web.WebResources.GetResource("~/Css/main.css")%>
        <%= HelperLib.Web.WebResources.GetResource("~/Css/newhome.css")%>
        <style><%= ErpModel.Globals.Users.CustomTheme%></style>
        <%= Erp.Base.Utils.Utils.GetResourcePath(ErpModel.Globals.AppManager.CurrentAppScriptResource,true)%>
        <%= Erp.Base.Utils.Utils.GetResourcePath(ErpModel.Globals.AppManager.CurrentAppCssResource,true)%>

        <div style="visibility: hidden; position: absolute; top: -100px;">
            <input type="text" id="PreventChromeAutocomplete" name="PreventChromeAutocomplete" autocomplete="fake-text" />
            <input type="submit" onclick="return false" value="cancel enter" style="display: none" />
            <input style="display1: none" type="text" name="fakeusernameremembered" />
            <input style="display1: none" type="password" name="fakepasswordremembered" />
        </div>
        <div id="divHtmlContainer" class="hasSideBar" style="height: 100%">
            <header id="HeaderPanel" class="erp-control erp-Header">
                <ul id="header-sidenav" class="sidenav sidenav-fixed">
                    <li>
                        <a id="lvl1AppBtn" class="menuItem"></a>
                         <div id="divSideBar-Ctr"><div id="divSideBar"><div id="divSideBar-Mid">

                            <asp:Literal ID="ltrDashItems" runat="server" Mode="PassThrough"></asp:Literal>
                            <asp:Literal EnableViewState="false" ID="menuContent" runat="server" Mode="PassThrough"></asp:Literal>
                            <div class="sep"></div>

                            <a id="A2" onclick="_showUserProfile(this)" class="menuItem waves-effect "><i class="menuIcon">&#xf007;</i><span class="menuTxt">My Profile</span></a>
                            <a id="A3" onclick="_showUserSetting(this)" class="menuItem waves-effect "><i class="menuIcon">&#xf013;</i><span class="menuTxt">Settings</span></a>
                            <a id="lnkPwd" onclick="_showUserPwd(this)" class="menuItem waves-effect "><i class="menuIcon">&#xf084;</i><span class="menuTxt">Change Password</span></a>

                            <a id="menuTheme" style="display1: none" onclick="$(this).toggleClass(&quot;active&quot;).next().toggleClass(&quot;active&quot;)" class="menuItem waves-effect" style=""><span class="menuIcon">&#xf1fc;</span><span class="menuTxt">Change Theme</span></a>
                            <div id="divThemeCtr" class="divTheme  expand-content">
                                <span class="themeColor defaultTheme"></span>
                                <span class="themeColor purpleTheme"></span>
                                <span class="themeColor redTheme"></span>
                                <span class="themeColor greenTheme"></span>
                                <span class="themeColor blueGlossyTheme"></span>
                                <span class="themeColor purpleDarkTheme"></span>
                                <span class="themeColor chocMintDarkTheme"></span>
                                <span class="themeColor darkTheme"></span>
                                <span class="themeColor yellowDarkTheme"></span>
                                <span class="themeColor orangeDarkTheme"></span>
                                <span class="themeColor blueBgDarkTheme"></span>
                                <span class="themeColor redBlackBgDarkTheme"></span>

                                <span cust="<%=customTheme%>" class="themeColor customTheme"></span>

                                <div style="margin-left: 5px;" class="erp-Field chkDensity  input-box  no-border entity entity-field erp-control erp-Checkbox noBorder">
                                    <i class="fa"></i>
                                    <label class="label mdl-ripple2">
                                        <input type="Checkbox" onclick="toggleCompact()" id="chkDensity"><span class="box" title="Compact Layout" style="padding-left: 22px;"></span></label>
                                    <label class="_t" for="chkDensity" style="color:var(--sidemenu-text); text-decoration: underline;">Compact Layout</label>
                                </div>
                            </div>
                            <a id="lnkCompany1" runat="server" visible="false" onclick="_toggleCompList(this)" class="menuItem waves-effect "><i class="menuIcon">&#xf1ad;</i><span class="menuTxt">Switch Organisation</span></a>
                            <a id="A4" onclick="parent.logoutApp()" class="menuItem waves-effect "><i class="menuIcon">&#xf011;</i><span class="menuTxt">Sign Out</span></a>
                        </div></div></div>
                        <div class="clogo-ctr"><div class="clogo-inner">
                            <telerik:RadBinaryImage Style="cursor: pointer" Width="300px" Height="75px"
                                ResizeMode="Fit" ID="imgCompanyLogo"
                                runat="server" AlternateText="" /></div>
                        </div>
                    </li>
                </ul>
                <div id="header-sidenav-overlay"></div>
                <div style="display: none">

                    <a id="menuHome" onclick="_gotoHome()" class="menuItem waves-effect "><i class="menuIcon">&#xf015;</i><span class="menuTxt">Home</span></a>


                    <asp:Literal ID="ltBooks" runat="server" Mode="PassThrough"></asp:Literal>
                    <div class="sep"></div>


                </div>
                <div class="navbar-fixed">
                    <div id="header-progressBar" class="progress" style="display:none;"><div class="indeterminate"></div></div>
                    <nav style="">
                        <div class="nav-wrapper">
                            <a id="header-show-sidenav" data-target="header-sidenav" style="float: left; padding-left: 20px;"></a>
                            <div class="search-box">
                                <input type="text" autocomplete="off" placeholder="Search..." id="txtSearch" name="searchbox" /><a id="btnSearch" href="javascript:void(0)" class=""><i>&#xf002;</i></a>
                                <div id="divSearchCtr" style="display: none; position: absolute;">
                                    <asp:Label runat="server" Text="Search in Menus" ID="lblSearchOption"></asp:Label>

                                    <div id="divSearchResult">
                                        <span style="display: none" class="_menutitle">Menu</span>
                                        <div class="_menu">
                                        </div>
                                        <span style="margin-left: 17px; margin-top: 10px; display: inline-block" class="_entFields"></span>
                                        <span style="margin-top: 0px; display: none" class="_enttitle">Records</span>

                                        <div class="_ent"></div>
                                    </div>
                                </div>
                            </div>
                            <div id="nav_tools" class="nav-tools">
                                <a class="close"></a>

                                <asp:Literal ID="ltQuickAdd" runat="server" Mode="PassThrough"></asp:Literal>
                                <a id="menuNotification" href="javascript:void(0)" onclick="_showNotificationPanel()" style="position: relative"><i>&#xf0a2;</i><span class="cntr"></span></a>

                                <a href="javascript:void(0)" style="height: 42px; width: 42px; border: solid 2px #e2e2e2; vertical-align: middle" class="img-round">
                                    <telerik:RadBinaryImage Style="cursor: pointer" Width="42px" Height="42px" 
                                        ImageUrl="../images/profile.png" ResizeMode="Fit" ID="imgUser"
                                        runat="server" AlternateText="" /></a>
                            </div>


                            <a style="display: none" id="navBarTitle" class="page-title"><i class="fa medium valign"></i><span></span></a>

                            <ul class="right">
                                <li><a class="dropdown-trigger" id="btnNotifOptions" style="display: none" href="#!" data-target="ddlNotifOptions"><i class="fa">&#xf142;</i></a></li>
                                <li runat="server" visible="false" id="divSearchOption"><a class="dropdown-trigger" id="btnFilterOptions" style="display: none" href="#!" data-target="ddlFilterOptions"><i class="fa">&#xf0b0;</i></a></li>
                            </ul>

                        </div>
                    </nav>
                    <ul id="ddlNotifOptions" class="dropdown-content">
                        <li><a href="#!" class="_vh" onclick="showNotificationHistory(this)">Show Recent</a></li>
                    </ul>
                    <ul id="ddlFilterOptions" class="dropdown-content">
                        <li id="chk-opt-menu"><a href="#!" class="_chk-menu _on" onclick="toggleSearchOptions(this)"><i class="fa">&#xf0e8;</i>Find In Menus</a></li>
                        <li id="chk_opt_ent" runat="server"><a href="#!" class="_chk-ent  _on" onclick="toggleSearchOptions(this)"><i class="fa">&#xf1c0;</i>Find In Records</a></li>
                    </ul>
                </div>
            </header>
            <div id="divDashboard" style="display: block; position: absolute; left: 0; right: 0; bottom: 0; top: 57px;">
                <iframe frameborder="0" id="ifrDash" name="ifrDash" runat="server" style="height: 100%; width: 1px; min-width: 100%" allowtransparency="allowTransparency"></iframe>
            </div>
            <div id="divFullMenu" style="display: none; position: absolute; left: 0; right: 0; bottom: 0; top: 57px;">
                <div class="fm-title erp-MenuItem"></div><a class="close" href="javascript:void(0)"></a>
                <div class="column-menu"></div>
                <div class="fp-menu"></div>
            </div>
            <div id="divNotificationCtr" class="pop-list" style="display: none;">
                <div class="pop-header"><span class="pop-title"><i class="fa">&#xf06a;</i><span>Notifications</span><a class="close" href="javascript:void(0)"></a></span> </div>
                <div class="pop-content">
                    <div id="divNotificationList">
                        <div class="_inner">
                            <div class="notif-items"></div>
                            <div class="notif-history" style="display: none"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="usrPanel" style="display: none" class="pop-list">
                <a class="close" href="javascript:void(0)"></a>
                <a href="javascript:void(0)" class="img-round">
                    <img id="imgUser2"  onclick="_showUserProfile()"  src="../images/profile.png" /></a>
                <div id="lblUserInfo" style="display: block; ">
                    <span id="spnUser" onclick="_showUserProfile()" style="font-weight: bold; text-decoration: underline;" runat="server"></span>
                    <span id="spnRole" runat="server"></span>
                    <span id="lnkCompany" runat="server"></span>
                </div>
                <div class="pop-content">
                    <a id="A5" onclick="_showUserSetting(this)"><i class="menuIcon">&#xf013;</i><span class="menuTxt">Settings</span></a>
                    <a id="A6" onclick="_showUserPwd(this)"><i class="menuIcon">&#xf084;</i><span class="menuTxt">Change Password</span></a>
                    <a id="A7" onclick="parent.logoutApp()"><i class="menuIcon">&#xf011;</i><span class="menuTxt">Sign Out</span></a>
                </div>
            </div>

            <div id="divQuickAdd" style="display: none">
            </div>
            <div id="divMain" style="display: none; position: absolute; left: 0; right: 0; bottom: 0; top: 56px;">
                <iframe id="ifrView" src="" homepage="1" ismobile="1" allowtranspency="allowTransparency" frameborder="0" style="background-color: transparent; height: 100%; width: 1px; min-width: 100%"></iframe>
            </div>

            <div id="divCompList" class="pop-list" style="display: none">
                <div class="pop-header"><span class="pop-title"><i class="fa"></i><span>Choose organisation</span><a class="close" href="javascript:void(0)"></a></span> </div>
                <div class="pop-content">
                    <asp:Literal ID="pnlCompList" Mode="PassThrough" runat="server"></asp:Literal>
                </div>
            </div>
            <main>

            </main>

            <asp:Literal ID="embedContent" runat="server" Mode="PassThrough"></asp:Literal>
            <div id="divLoader" style="display: none">
                <div class="navbar-fixed">
                    <nav style="">
                        <div class="nav-wrapper">
                            <a id="A1" class="sidenav-trigger" data-target="header-sidenav" style="float: left; margin-left: 20px;"><i class="fa"></i></a>
                        </div>
                    </nav>
                </div>
                <span class="spinIcon"></span>
            </div>

        </div>
         <asp:Literal ID="ltrLicenses" Mode="PassThrough" runat="server"></asp:Literal>

    </form>
    <div class="sidenav-overlay" id="div-sidenav-overlay" style="display: none; opacity: 1;"></div>

    <script>
        parent.document.title = "<%=ErpModel.Globals.Users.CompanyName%>";
        $(document.documentElement).addClass("form-v2");
        if (Modernizr.isios) {
            $("#ifrView").attr("scrolling", "no");
            $(document.documentElement).addClass("_iosdevice");
            if (typeof parent.Native == "function")
                parent.Native("callback", { Type: "SetCookie", Cookie: __sek });
        }
        if (window.__admn) {
            $("#lnkPwd").after('<a id="A6"  onclick="_launchAdminModule()" class="menuItem waves-effect "><i class="menuIcon">&#xf085;</i><span class="menuTxt">Admin Module</span></a>')
        }
        $(function () {
            if (!parent.__isAuthenticated)
                return;
            if (typeof parent.showHome == "function")
                parent.showHome();
            //$('#header-sidenav').sidenav();

            var isCollapsed = $.DB("MobileSiderBarCollapsed_" + Users.UserID);
           
            if (isCollapsed=="1")
                $(document.documentElement).addClass("sidenav-collapse")
            else if ((window.innerWidth >= 1500 || parent.window.innerWidth >= 1500) || isCollapsed == "0")
                $(document.documentElement).addClass("sidenav-expand")
            else if (window.innerWidth < 1500)
                $(document.documentElement).addClass("sidenav-collapse")

            $("#imgUser2").attr("src", $("#imgUser").attr("src"));
            $("#div-sidenav-overlay").on("click", function () {
                $(document.documentElement).removeClass("sidenav-expand sidenav-collapse");
            });

            $("#divSideBar").on("click", function (e) {
                if ($(e.target).attr("id") != "divSideBar") return;
                if ($("#divSideBar-Ctr").outerWidth() < 100) return;
                $("#divSideBar-Ctr").css("width", "var(--sidenav-min)");
                window.setTimeout(function (params) { $("#divSideBar-Ctr").css("width", "") }, 1500)
            })

            $("#header-show-sidenav").on("click", function () {
               
                if (window.innerWidth >= 1000) {
                    if ($(document.documentElement).hasClass("sidenav-expand")) {
                        $(document.documentElement).removeClass("sidenav-expand").addClass("sidenav-collapse");
                        $.DB("MobileSiderBarCollapsed_" + Users.UserID, "1");
                    }
                    else {
                        $(document.documentElement).removeClass("sidenav-collapse").addClass("sidenav-expand");
                        $.DB("MobileSiderBarCollapsed_" + Users.UserID, "0");
                    }
                }else
                    $(document.documentElement).toggleClass("sidenav-expand");

            });
            $(".dropdown-trigger").dropdown();
            window.overlay = $("#div-sidenav-overlay");
            var m = $("#Level1AppMenu").children(".menuItem");
            //if (m.length == 1)
            var lastUsed = $.DB("CurrentTabMobile_" + Users.UserID);
            if (!$.isEmpty(lastUsed)) {
                lastUsed = m.filter("[menu='" + lastUsed + "']");
                if (lastUsed.length == 0)
                    lastUsed = null;
            }
            if (!lastUsed)
                lastUsed = m.eq(0);

            _appMenuAction(lastUsed, null, null, true);

            var _d = lastUsed.data("Action");
            if (_d && !$.isEmpty(_d.Action))
                window.delayDashboardLoading = true;

            //if (lastUsed.length == 1) {
            //    $("#lvl1AppBtn").hide();
            //    var li = $("#Level2AppMenu").children().eq(0).children();
            //    if (li.length == 1)
            //        li.eq(0).addClass("expand")
            //}
            window.setTimeout(function () {
                if (!window.delayDashboardLoading)
                    loadFirstDashBoard();
            }, 500);
        });
        $("#ifrView").on("load", function () { Erp.ToggleMobileLoader(false); })
        $("#lvl1AppBtn").on("click", function () {
            $("#lvl1AppBtn").toggleClass("active")
            $("#divSideBar-Mid").toggleClass("showlvl1");
            $("#Level1AppMenu").children().show();
            $("#" + $("#lvl1AppBtn").attr("cid")).hide();
            //window.setTimeout(function () {
            //    $("#divSideBar").toggleClass("showlvl1");
            //    $(document).one("click", function () { $("#divSideBar").removeClass("showlvl1"); })
            //}, 10);
        })

        $('#Level2AppMenu').on('click', '.isparent', function (e) {
            e.stopPropagation();
            if ($(e.target).hasClass('menuitem-ctr') || $(e.target)[0].tagName === "UL")
                return;
            if ($(e.target).parent().hasClass('isparent') || $(e.target).parent().parent().hasClass('isparent') || $(e.target).hasClass('arrow')) {
                if ($(this).closest('.erp-control').attr("mmode"))
                    displayFullMenu($(this).closest('.erp-control'));
                else
                    $(this).closest('.erp-control').toggleClass('expand');
            }
        });

        $('#divFullMenu').on('click', '.isparent,.close', function (e) {
            e.stopPropagation();
            if ($(e.target).hasClass('close')) {
                hideFullMenu();
                return;
            }
            if ($(e.target).hasClass('menuitem-ctr') || $(e.target)[0].tagName === "UL")
                return;
            if ($(e.target).parent().hasClass('isparent') || $(e.target).parent().parent().hasClass('isparent') || $(e.target).hasClass('arrow')) {
                $(this).closest('.erp-control').toggleClass('expand');
            }
        });

        $("#nav_tools").children(".close").on("click", function () { _hideAll(); })
        $("#menuQuick").on("click", function () { _showQlPanel(); })
        $("#imgUser").on("click", function () { _showUserPanel(); })
        $("#usrPanel").on("click",".close", function () { $("#usrPanel").HideModal(); })
        

        $("#txtSearch").on("focus", function () { _showSearchPanel(); })
        $("#divSearchResult").on("click", "A", function () {
            _hideAll();
            var a = $(this);
            if (a.hasClass("_mi")) {
                Erp.NavigateToMenu($('#' + a.attr("mid")));
            }
            else if (a.hasClass("_ent")) {
                _openWindow(eval('(' + a.attr("action") + ')'))
            }

        })
        function LoadCurrentTab(arr, btn) {
            var ms = btn.closest(".menuSet");
            if (ms.length > 0) {
                var id = ms.attr("id").replace("level1_set_", "level1_");
                _appMenuAction($("#" + id), null, null, true);
                btn.closest(".lvl2").addClass("expand"); btn.closest(".lvl1").addClass("expand");
            }
            if (typeof btn[0].scrollIntoView == "function")
                btn[0].scrollIntoView();
        }
        function displayFullMenu(a) {
            _hideAll();$(document.body).removeClass("HideDash")
            var mode = a.attr("mmode");
            $("#divFullMenu").show();
            setSelectedItem(a);
           
            if (overlay && overlay.isVisible())
                $(document.documentElement).removeClass("sidenav-expand");
            var b=a.children("a");
            $("#divFullMenu").children(".fm-title").html("<a>"+b.find(".fa").outerHTML() + b.find(".menuTxt").outerHTML()+"</a>")
            $("#divFullMenu").children(".fp-menu,.column-menu").hide();
            var ctr = $("#divFullMenu").children(mode == "fp" ? ".fp-menu" : ".column-menu");
            ctr.css("display", mode == "fp" ? "block" : "flex").children().hide();
            var menu = a.children(".menuitem-ctr");
            if (menu.length == 0)
                menu = ctr.children("[menu='" + a.ID() + "']");
            else {
                menu.attr("menu", a.ID());
                ctr.append(menu);
            }
            menu.show();
        }
        function hideFullMenu(a) {
            if (!a || a.closest("#divFullMenu").length == 0)
                $("#divFullMenu").hide();
        }


        if (history.pushState) {
            window.onpopstate = function (event) {
                if (event.state && event.state.action == "menu") {
                   // var btn = $("#" + event.state.id); console.log(btn)
                    $(document.body).addClass("HideDash");
                }
                else if (event.state && event.state.action == "dash") {
                    // var btn = $("#" + event.state.id); console.log(btn)
                    $(document.body).removeClass("HideDash");
                }
               
            };
            //window.onbeforeunload = function () { return "Do you wish to navigate away from this site?"; };
        }
       
        var currentmenuid = "";
        function _appMenuAction(btn, e, a, fromLoad,fromHistory) {

            btn = $(btn);
            hideFullMenu(btn)
            if (btn.attr("level") / 1 == 0) {
                $.DB("CurrentTabMobile_" + Users.UserID, btn.attr("menu"));
            }
            if (btn.attr("level") / 1 > 0 && $("#divSideBar-Mid").hasClass("showlvl1"))
                return;
            if (btn.hasClass("isparent"))
                btn.closest('.erp-control').toggleClass('expand');
            e = e || window.event;
            if (e)
                e.stopPropagation();
            if (btn.attr("level") == 0) {
                var id = btn.attr("id").replace("level1_", "");
                var mset = $("#Level2AppMenu").show().children(".menuSet").hide().filter("#level1_set_" + id).show();
                $("#lvl1AppBtn").removeClass("noTxt active").html(btn.html()).attr("cid",btn.attr("id"));
                if (btn.find(".big-icon").length > 0)
                    $("#lvl1AppBtn").addClass("noTxt");
                $("#divSideBar-Mid").removeClass("showlvl1");
                $("#ddlDashItems").children().removeClass("selected vis");
                var sel = $("#ddlDashItems").children().hide().filter("[appid=''],[appid='" + btn.attr("app") + "']").addClass("vis").show().eq(0);

                if (sel.length > 0 && !fromLoad && !fromHistory)
                    __setSelectedDash(sel, e != null);
            }
            else if ($("#Level2AppMenu").hasClass("trans"))
                return;
            var action = (a ? a : btn.data("Action"));
            if (action) {
                setSelectedItem(btn);
                _openWindow(action, btn);

               
                if (btn.attr("level") == "0" || btn.hasClass("isparent")) {
                }
                else if (overlay && overlay.isVisible())
                    $(document.documentElement).removeClass("sidenav-expand");

                if (!fromHistory && !fromLoad && history.pushState)
                    history.pushState({ action: "menu", id: btn.attr("id") }, "", "");
            }
            
        }


        if (!$.isEmpty(window.__MobileNotifyAction)) {
            window.delayDashboardLoading = true;
            __OpenMobileNotification(window.__MobileNotifyAction)
        }
        function setSelectedItem(btn) {
            if (!btn)
                return;
            btn = $(btn)
            $("#ddlDashItems,#divSideBar").children().removeClass("selected");
            if (currentmenuid)
                $("#" + currentmenuid).removeClass("selected");
            btn.addClass("selected");
            currentmenuid = btn.attr("id");
        }

        function loadFirstDashBoard() {
            if ($("#ddlDashItems").children().length > 0) {
                var sel = $("#ddlDashItems").children(".vis").eq(0);
                if (sel.length > 0) {
                    $("#ddlDashItems").addClass("expand active");
                    $("#menuDash").addClass("active");

                    __setSelectedDash(sel, false);
                }
            }
        }
        function __setSelectedDash(a, click) {
            _hideAll();
            _showDash()
            a = $(a);
            if ($.isEmpty(a.attr("dsid")))
                return;
            setSelectedItem(a);
            if ($("#ifrDash").attr("dsid") == a.attr("dsid")) {
                if (window.event && ($(window.event.srcElement).hasClass("menuTxt") || $(window.event.srcElement).hasClass("menuItem"))) {

                }
                else
                    return;
            }
            //Erp.SetUserPreference('<%=AppCode.ToUpper()%>_DashID', { dsid: a.attr("dsid") }, function () { });
            
            var url = "dashboard.aspx?_rspv=1&_dsid=" + a.attr("dsid");
            
            if ($("#ifrDash").attr("src") != url || $("#ifrDash").attr("refresh") == "1") {
                $("#header-progressBar").show();
                $("#ifrDash").removeAttr("refresh");
                $("#ifrDash").attr("src", url);
                history.pushState({ action: "dash", id: a.attr("dsid") }, "", "#m=" + (new Date()) / 1);
            }
            else if ($("#ifrDash").attr("src") == url) {
                $("#header-progressBar").hide();                
                $("#ifrDash").attr("refresh", "1");//refreshing dash only on 2nd click of same btn
                window.setTimeout(function () { $("#ifrDash").removeAttr("refresh"); }, 15000);//only refreshing if button pressed within  15sec
            }
            $("#ifrDash").attr("dsid", a.attr("dsid"));
            _hideSideBar();
        }

        function __OpenMobileNotification(action) {
            try {
                var action = JSON.parse(action);
                _openWindow(action);
            }
            catch (ex) { return; }
        }
    </script>
    <script>
        function _hideAll(w) {
            //if (w > 500) {
            //    _hideSideBar();
            //    hideFullMenu();
            //    return;
            //}
            $(document.body).removeClass("ShowSearch");
            $("#divCompList").HideModal();
            $("#divNotificationCtr").HideModal();
            $("#divQlCtr").HideModal();
            $("#divSearchCtr").HideModal();
            $("#usrPanel").HideModal();            
            _hideSideBar();
            hideFullMenu();
        }
        function _hideSideBar() {
            
            if (overlay && overlay.isVisible())
                $(document.documentElement).removeClass("sidenav-expand");
        }
        function _gotoHome() {
            _hideAll();
            $(document.body).removeClass("HideDash ShowSearch");
            $("#divDashboard").show();
            if (window.delayDashboardLoading) {
                window.delayDashboardLoading = false;
                loadFirstDashBoard();
            }
        }

        function _showDash() {
            $(document.body).removeClass("HideDash");
            $("#divMain").hide();
            hideFullMenu()
            $("#divDashboard").show();
        }

        function _showNotificationPanel() {
            _hideAll();
            $("#divNotificationCtr").children(".pop-header").find(".close").one("click", function () { $("#divNotificationCtr").HideModal(); })
            $("#divNotificationCtr").ShowModal({ display: "flex", autoClose: true, zindex: 900 })
        }

        function _showQlPanel() {
            _hideAll();
            $("body").append($("#divQlCtr"));
            $("#divQlCtr").children(".pop-header").find(".close").one("click", function () { $("#divQlCtr").HideModal(); })
            $("#divQlCtr").ShowModal({ display: "flex", autoClose: true, zindex: 900 })
        }

        function _showUserPanel() {
            _hideAll();
            $("#usrPanel").ShowModal({ autoClose: true, zindex: 900, position: "manual", opacity: 0 })
        }

        function _toggleCompList(a) {
            _hideAll();
            setSelectedItem(a);
            if ($("#divCompList").isVisible())
                return;
            $("#divCompList").children(".pop-header").find(".close").one("click", function () { $("#divCompList").HideModal(); })
            $("#divCompList").ShowModal({ display: "flex", autoClose: true, zindex: 900 })
        }

        function openQuickAdd(a) {
            a = $(a);
            if (a.hasClass("qk"))
                _openWindow({ "Action": "ADDFORM", Responsive: 1, "Params": "_qadd=1", "Form": a.attr("fc"), "Entity": a.attr("eid") }, a);
            else if (a.data("Action"))
                _openWindow(a.data("Action"), a);
            else
                _openWindow({ "Action": "URL", "Url": a.attr("refurl") }, a);
            _hideAll();
        }


        function _showUserProfile(a) {
            _hideAll(window.innerWidth);
            setSelectedItem(a)
            Erp.OpenWindow({
                "Action": "EDITFORM", Responsive: 1, "Entity": "tbl_SYS_Users", "Form": "Personal", "RecordID": Users.UserID, "Params": "_sc=CUlCFC%2BpLMCNzaki2wmUm1Pd%2F%2FNKMQFGTR87nihkSFE%3D"
            })
           
        }
        function _showUserPwd(a) {
            _hideAll(window.innerWidth);
            setSelectedItem(a)
            Erp.OpenWindow({
                "Action": "ADDFORM", Responsive: 1, "Entity": "tbl_SYS_Users", "Form": "ChangePassword", "Params": "_sc=AVLIr1Q9SqY0wxr0g%2F1TdVxIjQj%2F8C%2FBacDIP48AbIg%3D"
            })
            
        }
        function _launchAdminModule() {
            window.open(AppRootPath + "/main/home.aspx")
        }
        function _showUserSetting(btn) {
            _hideAll(window.innerWidth);
            setSelectedItem(btn)
            _openWindow({
                "Action": "SETTINGS", "Category": "User", "CatId": Users.UserID,
                "Params": "personal=1&_rspv=1"
            }, $(btn));
            
        }

        function _switchCompany(a) {
            a = $(a)
            parent._switchCompany.call(parent, a.attr("href1"));
        }
    </script>
    <script>


        $(function () {
            PageMethods.LoadNotification({ Type: "LoadNotification" }, function (arr) { LoadNotifications(arr, $("#divNotificationList").children("._inner").children(".notif-items"), false); })
            window.setInterval(function () {
                PageMethods.LoadNotification({ Type: "LoadNotification", "@LastChecked": __lastChecked }, function (arr) { LoadNotifications(arr, $("#divNotificationList").children("._inner").children(".notif-items"), false, true); })
            }, 45000);
        });

        var __lastChecked = "";
        function LoadNotifications(arr, list, recent, latest) {
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
                    notif.on("click", ".notif-content", function (e) {
                        var n = $(this).closest(".notif-item");
                        if ($(e.target).prop("tagName") == "A" || $(e.target).hasClass("hasClick"))
                            return;
                        if (n.data("Read") && (Fn.Eq(n.data("Ex"), "remove") || Fn.Eq(n.data("Ex"), "disable"))) {
                            return;
                        }
                        n.data("Read", true);
                        PageMethods.Execute({ Type: "MarkAsRead", "@NotID": n.data("NotID") });
                        _hideAll();
                        _appMenuAction($(this), null, n.data("Action"));
                        n.addClass("visited");

                    });
                }
                if (latest)
                    list.prepend(notif);
                else
                    list.append(notif);

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
                    var ctr = parseInt($("#menuNotification").find(".cntr").html());
                    $("#menuNotification").addClass("active").find(".cntr").html((isNaN(ctr) ? 0 : ctr) + arr.length);
                }
            }
            else if (!latest)
                addBlankNotification(list);
            list.find(".notif-img").error(function () {
                $(this).hide().before("<span>&#xf12a;</span>");
            })

            ////if (latest && arr.length > 0)
            ////    showNotification();
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
            var list = $("#divNotificationList");
            list.children("._inner").children(".notif-history").append(item);
            list.children("._inner").children(".notif-history").children('.notif-noitem').remove();
            var ctr = parseInt($("#menuNotification").find(".cntr").html());
            ctr = isNaN(ctr) ? 0 : ctr - 1;
            $("#menuNotification").removeClass((ctr <= 0 ? "active" : "")).find(".cntr").html(ctr);
            if (ctr <= 0)
                addBlankNotification($("#divNotificationList").children("._inner").children(".notif-items"));

            if (!item.data("Read"))
                PageMethods.Execute({ Type: "MarkAsRead", "@NotID": item.data("NotID") });
        }
        function showNotificationHistory(a) {
            if ($(a).html() == "Back") {
                $(a).html("Show Recent");
                $("#divNotificationList").children("._inner").children(".notif-history").hide().prev().show()
                return;
            }
            var list = $("#divNotificationList").children("._inner").children(".notif-items").hide().next().show();
            $(a).html("Back");
            if ($(a).data("Loading"))
                return;
            $(a).data("Loading", true);

            var ids = "";
            list.children().each(function () { ids += Fn.CInt($(this).data("NotID")) + ","; });
            PageMethods.LoadNotification({ Type: "LoadRecentNotification", Ids: ids }, function (arr) { LoadNotifications(arr, list, true); })
        }
    </script>
    <script>
        var __indexingDone = false;
        function _showSearchPanel(t) {
            _hideAll();
            if (!__indexingDone) {
                indexMenus();
                $("#txtSearch").on("input", $.debounce(250, function (e) { searchMenu(); }));
                __indexingDone = true;
            }

            $(document.body).addClass("ShowSearch");
            var list = $("#divSearchCtr");
            list.ShowModal({ display: "flex", autoClose: true, zindex: 900, onClose: _hideAll, position: "manual", opacity: 0 });

        }




        var menuCollection = []
        function indexMenus() {
            var menus = $("#Level2AppMenu").find(".erp-MenuItem").add($("#divFullMenu").find(".erp-MenuItem")).add($("#divSideBar").children(".menuItem")).add($("#ddlDashItems").children(".menuItem"));
            menus.each(function () {
                var m = $(this);
                if (m.hasClass("fm-title"))
                    return true;
                var t = m.hasClass("menuItem") ? m.find(".menuTxt").text() : m.children("a").find(".menuTxt").text();
                var tt = t;
                var p = null;
                if (m.attr("level") / 1 > 1) {
                    var isfm=m.closest("#divFullMenu").length > 0;
                    if (isfm && m.attr("level") / 1 == 2)
                        return true;
                    p = m.parent().closest("li");
                    tt = p.find(".menuTxt").eq(0).text() + "/" + tt;
                    var p1 = {};
                    if (isfm)
                        p1 = $("#" + p.closest(".menuitem-ctr").attr("menu"));
                    else
                        p1 = p.parent().closest("li");
                    
                    tt = p1.find(".menuTxt").eq(0).text() + "/" + tt;
                    p1 = $("#" + (isfm ? p1 : p).closest(".menuSet").attr("id").replace("level1_set_", "level1_"));
                    tt = p1.find(".menuTxt").text() + "/" + tt;
                }
                else if (m.attr("level") / 1 == 1) {
                    p = m;
                    var p1 = $("#" + p.closest(".menuSet").attr("id").replace("level1_set_", "level1_"));
                    tt = p1.find(".menuTxt").text() + "/" + tt;
                }
                var ic = p ? p.find(".fa").text() : "";
                
                if (m.attr("onclick").indexOf("_appMenuAction") < 0 && !m.hasClass("menuItem"))
                    return true;
                m.NewID("me_");//if id blank
                menuCollection.push({ Id: m.attr("id"), Title: tt, Text: t, Icon: "", IsLink: m.attr("onclick").indexOf("_appMenuAction") > -1 });
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
                d.children('._menutitle,._menu,._enttitle,._ent,._entFields').hide();
                $("#ddlFilterOptions").find("a").removeClass("_on")
                if (a.hasClass("_chk-menu")) {
                    a.toggleClass('_on'); d.children('._menutitle,._menu').setDisplay(a.hasClass('_on'));
                }
                else {
                    a.toggleClass('_on'); d.children('._enttitle,._ent,._entFields').setDisplay(a.hasClass('_on'));
                    d.children('._entFields').html(a.parent().attr("title"));
                }
            }

        }
        var __fetchingSearch = false;
        function searchMenu() {
            var chkmenu = (!$("#chk-opt-menu").find("a").exists() || $("#chk-opt-menu").find("a").hasClass("_on")),
                chkdb = $("#<%= chk_opt_ent.ClientID %>").find("a").hasClass("_on");

            var val = $("#txtSearch").val().toLowerCase();


            if (val.length < 1)
                return;
            if (chkmenu) {
                var ctr1 = $("#divSearchResult").children("._menu").empty(); ctr1.removeClass("_nodata"); ctr1.prev().hide();
                var ctr2 = $("<div></div>");
                ctr1.addClass("_nodata");
                ctr1.prev().show();
                var found = false;
                $(menuCollection).each(function () {
                    var m = this;
                    var i = m.Text.toLowerCase().indexOf(val);
                    if (i < 0)
                        return true;
                    var a = $('<a href="javascript:void(0)" title="' + m.Title + '" class="_mi ' + (!m.IsLink ? "_inactive" : "") + '" mid="' + m.Id + '"><span class="_ico">' + ($.isEmpty(m.Icon) ? "" : m.Icon) + '</span>' + m.Text + '</a>');
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
                var ctr3 = $("#divSearchResult").children("._ent").empty(); ctr3.removeClass("_nodata"); ctr3.prev().hide();
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
                                ctr3.append("<span class='_groupName'><span>" + $.defaultVal(r[i]["__eidIcon"], "") + "</span>" + r[i]["__eidTitle"] + "</span>");
                            var a = $('<a href="javascript:void(0)" title="' + r[i]["__recTitle"] + '" class="_ent menu-search-item" action=\'{"Action":"EDITFORM","Params":"_search=1","Responsive":1,  "Form":"SearchResult",  "Entity":"' + r[i]["__eid"] + '",RecordID:"' + r[i]["__pid"] + '"}\'><span class="_ico"></span>' + r[i]["__recTitle"] + '</a>');
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

    </script>
    <script>
        $("#chkDensity").checked(<%=ErpModel.Globals.Users.DisplayDensity>0?"true":"false"%>)

        $("#divThemeCtr").on("click", ".themeColor", function () {
            applyTheme($(this));
            if ($(this).hasClass("customTheme")) {
                Erp.OpenWindow({
                    "Action": "ADDFORM", Responsive: 1, "Entity": "tbl_SYS_theme", "Form": "ThemeBuilder", "Params": "_sc=EkUQBkwETSYl2uJcJzwALBLOWfDsWN54Yk3n%2Fd%2FbedQ%3D"
                })
                _hideSideBar();
            }
        }).find("." + $.defaultVal(("<%=ErpModel.Globals.Users.RspTheme%>".indexOf("custom-") > -1 ? "customTheme" : "<%=ErpModel.Globals.Users.RspTheme%>"), "defaultTheme")).addClass("selected");
        function applyTheme(a, custom) {
            var cls = "custom-DarkTheme custom-LightTheme _darkBG ";
            var s = "";
            if (custom) {
                s = "<style type='text/css'> ." + a.style.styleData.Theme + "{ " + a.style.styleTxt + "} </style>";
                $(s).appendTo("body");
                $("#divThemeCtr").find(".customTheme").attr("cust", a.style.styleData.Theme)
            }
            else {
                $("#divThemeCtr").children().removeClass("selected");
                a.addClass("selected");
            }
            $("#divThemeCtr").children().each(function () { cls += $(this).attr("class").split(' ')[1] + " "; })
            $(document.documentElement).removeClass(cls);
            cls = (custom ? a.style.styleData.Theme : a.attr("class").split(' ')[1]);
            if (cls == "customTheme")
                cls = $.defaultVal(a.attr("cust"), "");
            if (cls == "")
                return;
            if (!custom)
                PageMethods.Execute({ Type: "SaveResponsiveTheme", "Theme": cls });

            $(document.documentElement).addClass(cls + (cls.toLowerCase().indexOf("dark") > -1 ? " _darkBG" : ""));
            ifr = $("#ifrDash")[0];
            if (ifr && ifr.contentWindow && ifr.contentWindow.Erp && typeof ifr.contentWindow.Erp.ApplyTheme == "function")
                ifr.contentWindow.Erp.ApplyTheme(cls, s);
            ifr = $("#ifrView")[0];
            if (ifr && ifr.contentWindow && ifr.contentWindow.Erp && typeof ifr.contentWindow.Erp.ApplyTheme == "function")
                ifr.contentWindow.Erp.ApplyTheme(cls, s);
        }

        function toggleCompact() {
            PageMethods.Execute({ Type: "DisplayDensity", "Density": $("#chkDensity").checked() ? 1 : 0, "Mobile": $(document.documentElement).hasClass("touch") });
            ////$(document.documentElement).removeClass("compact-form").addClass($("#chkDensity").checked() ? "compact-form" :"");
            ifr = $("#ifrDash")[0];
            if (ifr && ifr.contentWindow && ifr.contentWindow.Erp && typeof ifr.contentWindow.Erp.ApplyTheme == "function")
                ifr.contentWindow.Erp.ApplyTheme($("#chkDensity").checked() ? "compact-form" : "nocompact-form");
            ifr = $("#ifrView")[0];
            if (ifr && ifr.contentWindow && ifr.contentWindow.Erp && typeof ifr.contentWindow.Erp.ApplyTheme == "function")
                ifr.contentWindow.Erp.ApplyTheme($("#chkDensity").checked() ? "compact-form" : "nocompact-form");
        }
    </script>
</body>
</html>
