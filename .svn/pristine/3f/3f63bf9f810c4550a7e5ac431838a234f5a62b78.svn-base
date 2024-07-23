<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Mobile.aspx.cs" Inherits="SensysErp.Main.Mobile" %>

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
        <style><%= ErpModel.Globals.Users.CustomTheme%></style>
        <%= Erp.Base.Utils.Utils.GetResourcePath(ErpModel.Globals.AppManager.CurrentAppScriptResource,true)%>
        <%= Erp.Base.Utils.Utils.GetResourcePath(ErpModel.Globals.AppManager.CurrentAppCssResource,true)%>
        <div style="visibility:hidden;position:absolute;top:-100px;">
            <input type="text" id="PreventChromeAutocomplete" name="PreventChromeAutocomplete" autocomplete="fake-text" />
            <input type="submit" onclick="return false" value="cancel enter" style="display:none" />
            <input style="display1:none" type="text" name="fakeusernameremembered"/>
            <input style="display1:none" type="password" name="fakepasswordremembered"/>
        </div>
        <div id="divHtmlContainer" class="hasSideBar" style="height: 100%">
            <header id="HeaderPanel" class="erp-control erp-Header">
                <ul id="header-sidenav" class="sidenav sidenav-fixed">
                    <li>
                        <div id="divSideBar">
                            <div id="usrPanel">
                                <a id="btnLogout" onclick="parent.logoutApp()" href="javascript:void(0)">Sign Out</a>
                                <div id="Image-1-Ctr" style="display: block; text-align: left" class="erp-control erp-Image">
                                    <span style="height: 70px;width: 70px;border: solid 2px var(--primary-color-light);" class="img-round" id="Image-1_Parent">
                                        <telerik:RadBinaryImage Style="cursor:pointer" Width="70px" Height="70px" onclick="_showUserProfile()"
                                            ImageUrl="../images/profile.png" ResizeMode="Fill" ID="imgUser"
                                            runat="server" AlternateText="" /></span>
                                </div>
                                <div id="lblUserInfo" style="display: block; text-align: left">
                                    <span id="spnUser" onclick="_showUserProfile()" style="font-weight: bold; text-decoration: underline;" runat="server"></span>
                                    <span id="spnRole" runat="server"></span>
                                    <span id="lnkCompany"   runat="server"></span>
                                </div>
                            </div>
                            <a id="menuHome" onclick="_gotoHome()" class="menuItem waves-effect "><i class="menuIcon">&#xf015;</i><span class="menuTxt">Home</span></a>
                            <a id="menuNotification" onclick="_showNotificationPanel()" class="menuItem waves-effect "><i class="menuIcon">&#xf06a;</i><span class="menuTxt">Notifications</span><span class="cntr"></span></a>
                            <a id="menuSearch" onclick="_showSearchPanel()" class="menuItem waves-effect "><i class="menuIcon">&#xf002;</i><span class="menuTxt">Search</span></a>
                            <asp:Literal ID="ltQuickAdd" runat="server" Mode="PassThrough"></asp:Literal>
                            <asp:Literal ID="ltBooks" runat="server" Mode="PassThrough"></asp:Literal>
                            <div class="sep"></div>
                            <a id="lvl1AppBtn" class="menuItem"></a>
                            <asp:Literal EnableViewState="false" ID="menuContent" runat="server" Mode="PassThrough"></asp:Literal>
                            <div class="sep"></div>

                            <a id="A2" onclick="_showUserProfile()" class="menuItem waves-effect "><i class="menuIcon">&#xf007;</i><span class="menuTxt">Your Profile</span></a>
                            <a id="A3" onclick="_showUserSetting(this)" class="menuItem waves-effect "><i class="menuIcon">&#xf013;</i><span class="menuTxt">Settings</span></a>
                            <a id="lnkPwd" onclick="_showUserPwd()" class="menuItem waves-effect "><i class="menuIcon">&#xf084;</i><span class="menuTxt">Change Password</span></a>
                            
                            <a id="menuTheme" style="display1:none" onclick="$(this).toggleClass(&quot;active&quot;).next().toggleClass(&quot;active&quot;)" class="menuItem waves-effect  active" style=""><span class="menuIcon">&#xf1fc;</span><span class="menuTxt">Change Theme</span></a>
                            <div id="divThemeCtr" class="divQl">
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

                               <div style="margin-left: 5px;" class="erp-Field  input-box  no-border entity entity-field erp-control erp-Checkbox noBorder">
                                    <i class="fa"></i><label class="label mdl-ripple2"><input type="Checkbox" onclick="toggleCompact()" id="chkDensity"><span style="    padding-left: 22px;"></span></label>
                                    <label class="_t" for="chkDensity" style=" color: var(--primary-color); text-decoration: underline;">Compact Layout</label></div>
                            </div>
                            <a id="lnkCompany1" runat="server" visible="false" onclick="_toggleCompList(this)" class="menuItem waves-effect "><i class="menuIcon">&#xf1ad;</i><span class="menuTxt">Switch Organisation</span></a>
                            <a id="A4" onclick="parent.logoutApp()" class="menuItem waves-effect "><i class="menuIcon">&#xf011;</i><span class="menuTxt">Sign Out</span></a>
                        </div>
                    </li>
                </ul>
                <div id="header-sidenav-overlay"></div>
                <div class="navbar-fixed">
                    <nav style="">
                        <div class="nav-wrapper">
                            <a id="header-show-sidenav" class="sidenav-trigger" data-target="header-sidenav" style="float: left; margin-left: 20px;"><i class="fa"></i></a>
                            <a style="display: none" id="navBarTitle" class="page-title"><i class="fa medium valign"></i><span></span></a>
                            <input type="text" style="display: none" placeholder="Type To Search" id="txtSearch"  name="searchbox" />
                            <ul  class="right">
                                <li><a class="dropdown-trigger" id="btnNotifOptions" style="display: none" href="#!" data-target="ddlNotifOptions"><i class="fa">&#xf142;</i></a></li>
                                <li runat="server" visible="false" id="divSearchOption"><a class="dropdown-trigger" id="btnFilterOptions" style="display: none" href="#!" data-target="ddlFilterOptions"><i class="fa">&#xf0b0;</i></a></li>
                            </ul>
                            <asp:Literal ID="ltrDashItems" runat="server" Mode="PassThrough"></asp:Literal>
                        </div>
                    </nav>
                    <ul id="ddlNotifOptions" class="dropdown-content">
                        <li><a href="#!" class="_vh" onclick="showNotificationHistory(this)">Show Recent</a></li>
                    </ul>
                    <ul id="ddlFilterOptions" class="dropdown-content">
                        <li id="chk-opt-menu" ><a href="#!" class="_chk-menu _on" onclick="toggleSearchOptions(this)"><i class="fa">&#xf0e8;</i>Find In Menus</a></li>
                        <li id="chk_opt_ent" runat="server"><a href="#!" class="_chk-ent" onclick="toggleSearchOptions(this)"><i class="fa">&#xf1c0;</i>Find In Records</a></li>
                    </ul>
                </div>
            </header>           
            <div id="divDashboard" style="display: block; position: absolute; left: 0; right: 0; bottom: 0; top: 57px;">
                <iframe frameborder="0" id="ifrDash" name="ifrDash" runat="server" style="height: 100%; width: 1px; min-width: 100%" allowtransparency="allowTransparency"></iframe>
            </div>
            <div id="divNotificationCtr" style="display: none; position: absolute; left: 0; right: 0; bottom: 0; top: 57px;">
                <div id="divNotificationList">
                    <div class="_inner">
                        <div class="notif-items"></div>
                        <div class="notif-history" style="display: none"></div>
                    </div>
                </div>
            </div>
            <div id="divSearchCtr" style="display: none; position: absolute; left: 0; right: 0; bottom: 0; top: 57px;">
                <div id="divSearch" style="display: none">
                   
                  
                    <div id="divSearchResult">
                        <span style="display: none" class="_menutitle">Menu</span>
                        <div class="_menu">
                        </div><span style="margin-left: 17px;margin-top: 10px; display: inline-block" class="_entFields"></span>
                        <span style="margin-top: 15px; display: none" class="_enttitle">Records</span>
                        
                        <div class="_ent"></div>
                    </div>
                </div>
            </div>
            <div id="divQuickAdd" style="display:none">
            
        </div>
             <div id="divMain" style="display: none; position: absolute; left: 0; right: 0; bottom: 0; top: 0;">
                <iframe id="ifrView" src="" homepage="1" ismobile="1" allowtranspency="allowTransparency" frameborder="0" style="background-color: transparent; height: 100%; width: 1px; min-width: 100%"></iframe>
            </div>
            
            <div id="divCompList" style="display: none">
               <asp:Literal ID="pnlCompList" Mode="PassThrough" runat="server"></asp:Literal>
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
    </form>
    <style>
        html, body, form {
            height: 100%;
            padding: 0;
            margin: 0;
        }

        body, #divDashboard, #divMain {
            overscroll-behavior-y: contain;
        }

        #divMain, #divDashboard {
            overflow: hidden;
        }

        #divMain, #divDashboard, #divNotificationCtr, #divSearchCtr {
            left: 300px !important;
            display: none;
        }

        .touch._iosdevice #divMain, .touch._iosdevice #divDashboard {
            -webkit-overflow-scrolling: touch;
            overflow-y: scroll;
        }
       .touch #divNotificationCtr, .touch #divSearchCtr {
            -webkit-overflow-scrolling: touch;
            overflow-y: scroll;
        }
        .HideDash header .navbar-fixed {
            display: none;
        }

        .HideDash #divMain {
            display: block;
        }

        .HideDash #divDashboard,.HideDash #divNotificationCtr,.HideDash #divSearchCtr {
            display: none !important;
        }

        @media only screen and (max-width: 1500px) {
            #divMain, #divDashboard, #divNotificationCtr, #divSearchCtr {
                left: 0 !important;
            }
        }

        nav .nav-wrapper a.page-title {
            position: absolute;
            height: 56px;
        }

        #divCompList {
            display: none;
        }

        .menu-container {
            width: 100%;
        }

        #usrPanel {
            background-color: var(--primary-color);
            width: 100%;
            text-align: left;
            color:var(--primary-text-color);
            box-sizing: border-box;
            padding: 15px 0 10px 15px;
            border-bottom: solid 1px var(--border-color);
        }

        #lblUserInfo {
            display: block;
            text-align: left;
            margin: 5px;
            text-transform: capitalize;
        }

            #lblUserInfo > span {
               display: block;
    line-height: 28px;
    font-size: 16px;
    font-family: roboto;
    word-break: break-word;
            }
            #spnUser,
        #lnkCompany.lnkActive {
            cursor:pointer;
            text-decoration: underline;
        }

        #menuNotification .cntr {
            display: none;
        }

        #menuNotification {
            color:var(--border-color-light);
        }

            #menuNotification.active {
                color: var(--value-color);
            }

                #menuNotification.active .cntr {
                    display: block;
                    position: absolute;
                    top: 18px;
                    right: 10px;
                    line-height: 12px;
                    padding: 4px;
                    background: Red;
                    border-radius: 10px;
                    color: #fff;
                    min-width: 25px;
                    font-size: 12px;
                    text-align: center;
                }

        .menuItem {
            display: block;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            padding-left: 5px;
            color:  var(--value-color);
            position: relative;
        }

        #lvl1AppBtn {
            color: var(--primary-color);
        }

        .menuItem .menuTxt {
            margin-left: 4px;
            display: inline-block;
            vertical-align: middle;
            width: 210px;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        #lvl1AppBtn.menuItem .menuTxt {
            font-weight: bold;
        }

        .menuItem .menuIcon, #Level2AppMenu .erp-MenuItem > a > i {
            font-style:normal;
            font-family: fontawesome;
            font-size: 18px;
            margin: 2px 5px !important;
            margin-left: 5px !important;
            vertical-align: middle !important;
            display: inline-block !important;
            width: 25px !important;
            text-align: center;
        }

            #Level2AppMenu .erp-MenuItem > a > i:empty {
                display: none;
            }

        #menuQuick:after,
        #menuTheme:after,
        #lvl1AppBtn:after {
            content: "\f107";
            font-size: 19px;
            font-family: fontawesome;
            margin-right: 5px;
            cursor: pointer;
            position: absolute;
            right: 2px;
            top: 2px;
            font-weight: bold;
        }

        #menuQuick.active:after {
            content: "\f106";
        }

        #Level1AppMenu {
            background: var(--bg-color);
            z-index: 10;
            left: 15px;
            right: 15px;
            width: initial;
            margin-top: -18px;
            border: solid 1px var(--border-color);
            box-shadow: var(--shadow1);
        }

            #Level1AppMenu .menuItem {
                display: block;
                line-height: 25px;
                white-space: normal;
                border-top: solid 1px var(--border-color-light);
                padding: 10px 0;
                color: var(--primary-color);
            }



                #Level1AppMenu .menuItem .menuTxt {
                    margin-left: 4px;
                    display: inline-block;
                    width: 200px;
                    vertical-align: top;
                }

        #Level2AppMenu li.lvl1 > a * {
            vertical-align: middle;
        }

        #Level2AppMenu li.lvl1 > a {
            padding-left: 5px !important;
        }

        #Level2AppMenu li.lvl2 > a {
            padding-left: 36px !important;
        }

        #Level2AppMenu li.lvl3 > a {
            padding-left: 36px !important;
        }

        #Level2AppMenu li.lvl1 > a i {
            margin-right: 9px !important;
        }

        .showlvl1 #Level2AppMenu {
            opacity: 0.15;
        }

        .showlvl1 #Level1AppMenu {
            display: block;
        }

        .showlvl1 #lvl1AppBtn {
            visibility: hidden;
        }

        #Level2AppMenu {
            margin-top: -12px;
        }

        #btnLogout {
            position: absolute;
            right: 10px;
            top: 10px;
            z-index: 10;
            color: var(--primary-text-color);
            font-size: 14px;
            padding: 5px;
            line-height: 18px;
            text-decoration: underline;
        }

            #btnLogout:before {
                content: "\f011";
                font-size: 14px;
                font-family: fontawesome;
                margin-right: 5px;
                display: inline-block;
            }

        #divLoader {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 10;
        }

            #divLoader:before {
                content: "";
                display: block;
                position: absolute;
                top: 56px;
                left: 0;
                bottom: 0;
                right: 0;
                z-index: 1;
                opacity: 0.35;
                background-color: #0c2432;
            }

            #divLoader span {
                font-size: 50px;
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                margin: auto;
                z-index: 10;
                height: 50px;
                width: 50px;
                display: block;
                color: var(--primary-color);
            }

        .showLoader #divLoader {
            display: block !important;
        }

        .showLoader #divMain {
            filter: blur(10px);
        }

        .hasSideBar #divLoader {
            left: 300px !important;
        }

        @media only screen and (max-width: 1500px) {
            .hasSideBar #divLoader {
                left: 0 !important;
            }
        }

        #liDashItems {
            min-width:200px;
            max-width: 60%;
        }

        #trgDashItems {
            text-transform: capitalize;
            line-height: 56px;
            height: 56px;
            font-size: 25px;
            white-space: nowrap;
            outline: none !important;
        }

            #trgDashItems > ._t {
                max-width: 92%;
                display: inline-block;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                vertical-align: top;
            }

            #trgDashItems .caret {
                font-size: 10px;
                margin-left: 6px;
            }

        .dropdown-content {
            width: initial !important;
            min-width: 215px;
            top: 56px !important;
        }

        @media only screen and (max-width: 1500px) {
            #navBarTitle {
                left: 60px;
            }
        }
    </style>
    <style>
        #divNotificationList .notif-item .notif-icon {
            display: inline-block;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
            text-align: center;
            background-color: var(--border-color);
            vertical-align: top;
            position: relative;
            margin-left: 15px;
            margin-right: 15px;
            color: var(--label-color);
        }

            #divNotificationList .notif-item.visited:hover .notif-icon span, #divNotificationList .notif-item .notif-icon span {
                font-family: FontAwesome;
                font-size: 25px;
                font-weight: normal;
                line-height: 40px;
                color: inherit;
            }

            #divNotificationList .notif-item.visited:hover .notif-icon img, #divNotificationList .notif-item .notif-icon img {
                max-height: 40px;
                max-width: 40px;
                margin: auto;
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
            }

        #divNotificationList .notif-item {
            background-color: var(--bg-color-light);
            padding: 18px 5px;
            font-family: nunitoregular;
            cursor: pointer;
            white-space: nowrap;
            border-bottom: solid 1px var(--border-color-light);
            color: var(--label-color);
            position: relative;
            box-sizing: border-box;
        }
            #divNotificationList .notif-item:before{
                background: var(--secondary-color);
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                width:8px;
                opacity:0;
            }
            #divNotificationList .notif-item:hover:before, #divNotificationList .notif-item.visited:before {
                opacity:1;
                transition:0.7s;
            }

            #divNotificationList .notif-item .notif-content {
                vertical-align: top;
                display: inline-block;
                width: 75%;
                margin-left: 5px;
                min-height: 50px;
            }

            #divNotificationList .notif-item .notif-close {
                outline: none !important;
                position: absolute;
                top: 0;
                bottom: 0;
                margin: auto;
                right: 10px;
                font-size: 23px;
                font-family: arial;
                font-weight: bold;
                text-decoration: none;
                height: 20px;
                width: 20px;
                border: solid 1px var(--label-color-lighter);
                border-radius: 50%;
                text-align: center;
                line-height: 20px;
                color: var(--label-color-lighter);
            }
                #divNotificationList .notif-item .notif-close:hover {
                    color: var(--label-color);
                    border-color: var(--label-color);
                }

            #divNotificationList .notif-item .notif-content .notif-title {
                text-transform: capitalize;
                font-size: 14px;
                display: inline-block;
                white-space: normal;
                font-weight: bold;
                color: var(--value-color);
            }

            #divNotificationList .notif-item .notif-content .notif-date {
                font-size: 11px;
                position: absolute;
                left: 80px;
                top: 2px;
                color: var(--label-color-light);
            }

            #divNotificationList .notif-item.visited:hover .notif-content .notif-msg, #divNotificationList .notif-item .notif-content .notif-msg {
                display: block;
                margin-top: 2px;
                margin-left: 10px;
                overflow-x: hidden;
                text-transform: capitalize;
                white-space: normal;
                font-size: 14px;
                color: var(--label-color);
            }
            #divNotificationList .notif-noitem {
    padding: 25px;
    text-align: center;
}
            #divNotificationList .notif-noitem .notif-title {
    text-transform: capitalize;
    font-size: 18px;
    color: #d1d1d1;
}
            #divNotificationList .notif-noitem .notif-icon {
    font-family: FontAwesome;
    font-size: 40px;
    font-weight: normal;
    line-height: 50px;
    color: #d1d1d1;
    display: block;
}
        #divNotificationList .notif-history .notif-close {
            display:none;
        }
    </style>
    <style>

        #txtSearch {
            margin-left: 55px;
            width: 45%;
            color: var(--primary-text-color);
              font-size:20px;
            border-bottom: solid 1px var(--primary-text-color);
            font-weight: normal;
            box-shadow: none;
        }
        #txtSearch::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: var(--primary-text-color);
            font-size:20px;
           font-weight: normal;
        }
        #divSearchResult {
            min-height: 200px;
            text-transform: capitalize;
        }
	#divSearchResult ._menutitle, #divSearchResult ._enttitle
	{
		display: block;
    font-family: Nunitolight;
    font-size: 35px;
    margin: 5px 15px;
    color:var(--label-color-light);
	}
	#divSearchResult ._menutitle:before
	{
		font-family:fontawesome;
		content: "\f0e8";		
		margin-right:7px;
	}
	#divSearchResult ._enttitle:before
	{
		font-family:fontawesome;
		content: "\f1c0";		
		margin-right:7px;
	}
	#divSearchResult ._ent,
	#divSearchResult ._menu
	{
		overflow-y:auto;
		position:relative;
	}
	#divSearchResult ._ent._nodata:after,
	#divSearchResult ._menu._nodata:after,
	._nobookdata
	{
		font-family: Nunitolight;
		content: "No menu items found";
		color: var(--label-color-light);
		display: block;
		text-align: center;
		font-size: 15px;
		font-style: italic;
	}
	#divSearchResult ._ent._nodata:after
	{
		font-family: Nunitolight;
		content: "No records found";
	}
		#divSearchResult ._ent._prog
		{
			min-height: 110px;
			text-align: center;
		}
		#divSearchResult ._ent._prog:before
		{
			position: absolute;
    font-family: fontawesome;
    content: "\f021";
    font-size: 60px;
    color: var(--label-color-lighter);
    margin: auto 50%;
    display: block;
    animation: animSpinner 2s infinite linear;
		}
		

	#divSearchResult ._groupName
	{
		display: block;
    font-size: 20px;
    font-family: Nunitoregular;
    padding: 4px 3px;
    color: var(--label-color-light);
    margin-left: 30px;
    margin-top: 15px;
	}
        #divSearchResult ._groupName:first-child {
             margin-top: 0px;
        }
		#divSearchResult ._groupName span
		{
			font-family: fontawesome;
			margin-right: 5px;
			font-size: 24px;
		}
            #divQuickAdd A,
            #divSearchResult A, #divCompList A {
                display: block;
                font-size: 16px;
                padding: 10px 0px;
                padding-left: 42px;
                border-bottom: solid 1px var(--border-color-light);
                color: var(--label-color);
                text-transform: capitalize;
                text-decoration: none;
                outline: none !important;
                white-space: nowrap;
                text-indent: 0;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        #divQuickAdd A:hover,
        #divSearchResult A:hover,#divCompList A:hover {
            background-color: var(--secondary-color-light);
    color: var(--secondary-text-color);
    transition: background-color 0.25s,color 0.25s;
        }
	#divSearchResult A._inactive
	{
		color:gray;
	}
	#divSearchResult A ._ico
	{
		font-family: fontawesome;
		display: inline-block;
		width: 22px;
	}

        #ddlFilterOptions a {
            color:var(--label-color-light);
            position:relative;
        }
        #ddlFilterOptions a._on {
            color: var(--primary-color);
        }
            #ddlFilterOptions a:hover {
                
            }
            #ddlFilterOptions a._on i:after {
                font-family: fontawesome;
                content: "\f00c";
                font-size: 15px;
                left: 38px;
                top: 4px;
                position: absolute;
            }
    </style>
    <style>
        .divQl {
            max-height:0;
            overflow:hidden;
            padding-left: 14px;
            transition:0.05s;
        }
        .divQl.active {
            max-height:1000px;
            transition:0.35s;
        }
        #menuQuick:after {
            content:"\f107";
        }
         #menuQuick.active:after {
            content:"\f106";
        }
    </style>
    <style>
        .themeColor {
            display: inline-block;
            height: 42px;
            width: 42px;
            border: solid 1px gray;
            border-radius: 50%;
            margin: 10px 12px 0 0;
            cursor: pointer;
            position: relative;
            text-align: center;
            -webkit-tap-highlight-color: rgba(0,0,0,0);
            -webkit-tap-highlight-color: transparent;
            transition: background 0.35s;
            vertical-align: top;
        }
            .themeColor.selected {
                background: #00e795;
            }
            .themeColor:after {
                content: "";
                height: 32px;
                width: 32px;
                background: linear-gradient(67deg, var(--primary-color) 45%, rgba(0,0,0,0) 30%), linear-gradient(118deg, var(--bg-color) 53%, var(--secondary-color) 56%);
                border-radius: 50%;
                display: block;
                margin-top: 4px;
                margin-left: 4px;
                border: solid 1px gray;
            }
        .customTheme:after {
            content: "\f12e";
            font-family: fontawesome;
            color: #000;
            background: #00ffdf;
            text-align: center;
            font-size: 24px;
            line-height: 32px;
            text-indent: 2px;
        }

    </style>
    <script>
        parent.document.title = "<%=ErpModel.Globals.Users.CompanyName%>";
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

            if (typeof parent.showHome == "function")
                parent.showHome();
            $('#header-sidenav').sidenav();
            $(".dropdown-trigger").dropdown();
            window.overlay = $(".sidenav-overlay");
            var m = $("#Level1AppMenu").children(".menuItem");
            //if (m.length == 1)
            var lastUsed= $.DB("CurrentTabMobile_" + Users.UserID);
            if (!$.isEmpty(lastUsed)) {
                lastUsed = m.filter("[menu='" + lastUsed + "']");
                if (lastUsed.length == 0)
                    lastUsed = null;
            }
            if (!lastUsed)
                lastUsed = m.eq(0);
            window.setTimeout(function () {
                lastUsed.trigger("click");
            }, 500);

            var _d = m.eq(0).data("Action");
            if (_d && !$.isEmpty(_d.Action))
                window.delayDashboardLoading = true;

            if (m.length == 1) {
                $("#lvl1AppBtn").hide();
                var li = $("#Level2AppMenu").children().eq(0).children();
                if (li.length == 1)
                    li.eq(0).addClass("expand")
            }
            window.setTimeout(function () {
                if (!window.delayDashboardLoading)
                    loadFirstDashBoard();
            }, 500);
        });
        $("#ifrView").on("load", function () { Erp.ToggleMobileLoader(false); })
        $("#lvl1AppBtn").on("click", function () {
            window.setTimeout(function () {
                $("#divSideBar").addClass("showlvl1");
                $(document).one("click", function () { $("#divSideBar").removeClass("showlvl1"); })
            }, 10);
        })

        $('#Level2AppMenu').on('click', '.isparent', function (e) {
            e.stopPropagation();
            if ($(e.target).parent().hasClass('isparent') || $(e.target).parent().parent().hasClass('isparent') || $(e.target).hasClass('arrow'))
                $(this).closest('.erp-control').toggleClass('expand');
        });
        function LoadCurrentTab(btn) {
            _appMenuAction(btn)
        }
        function _appMenuAction(btn, e, a) {           
            btn = $(btn);
            if (btn.attr("level") / 1 == 0) {
                $.DB("CurrentTabMobile_" + Users.UserID, btn.attr("menu"));
            }
            if (btn.attr("level")/1 > 0 && $("#divSideBar").hasClass("showlvl1"))
                return;
            if (btn.hasClass("isparent"))
                btn.closest('.erp-control').toggleClass('expand');
            e = e || window.event;
            e.stopPropagation();
            if (btn.attr("level") == 0) {
                var id = btn.attr("id").replace("level1_", "");
                var mset = $("#Level2AppMenu").show().children(".menuSet").hide().filter("#level1_set_" + id).show();
                $("#lvl1AppBtn").html(btn.html());
                $("#divSideBar").removeClass("showlvl1");
            }
            else if ($("#Level2AppMenu").hasClass("trans"))
                return;
            var action = (a ? a : btn.data("Action"));
            if (action) {
                _openWindow(action, btn);
                var instance = M.Sidenav.getInstance($('#header-sidenav')[0]);
                if (btn.attr("level") == "0" || btn.hasClass("isparent")) {
                }
                else if (overlay && overlay.isVisible())
                    instance.close();
            }
        }
        if (!$.isEmpty(window.__MobileNotifyAction)) {
            window.delayDashboardLoading = true;
            __OpenMobileNotification(window.__MobileNotifyAction)
        }

        function loadFirstDashBoard() {
            if ($("#ddlDashItems").exists()) {                
                __setSelectedDash(null);
            }
        }
        function __setSelectedDash(a) {
            if (a == null) {
                a = $("#trgDashItems");
            }
            else {
                a = $(a);
                $("#trgDashItems").children().eq(0).html(a.text());
                Erp.SetUserPreference('<%=AppCode.ToUpper()%>_DashID', { dsid: a.attr("dsid") }, function () { });
            }

            $("#ifrDash").attr("src", "dashboard.aspx?_rspv=1&_dsid=" + a.attr("dsid"));

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
        function _hideAll() {
            $(document.body).removeClass("HideDash");            
            $("#liDashItems").parent().hide();           
            $("#divMain,#divDashboard,#navBarTitle,#divCompList,#divNotificationCtr,#btnNotifOptions,#divSearchCtr,#btnFilterOptions,#txtSearch").hide();         
            _hideSideBar();
        }
        function _hideSideBar() {
            var instance = M.Sidenav.getInstance($('#header-sidenav')[0]);
            if (overlay && overlay.isVisible())
                instance.close();
        }
        function _gotoHome() {
            _hideAll();
            $("#liDashItems").parent().show(); $("#divDashboard").show();
            if (window.delayDashboardLoading) {
                window.delayDashboardLoading = false;
                loadFirstDashBoard();
            }
        }

        function _showNotificationPanel() {
            _hideAll();
            $("#navBarTitle").show().children("span").html("Notifications").prev().html("&#xf06a;");
            $("#divNotificationCtr,#btnNotifOptions").show();
        }

        function _showSearchPanel() {
            _hideAll();
            $("#navBarTitle").show().children("span").html("").prev().html("&#xf002;");
            $("#divSearchCtr,#btnFilterOptions,#txtSearch").show();
            showSearch();
        }

        function _toggleCompList() {
            _hideAll();
            $("#navBarTitle").show().children("span").html("Choose organisation").prev().html("&#xf1ad;");
            $("#divCompList").show();
        }

        function openQuickAdd(a) {        
            a = $(a);
            if (a.hasClass("qk"))
                _openWindow({ "Action": "ADDFORM",Responsive:1, "Params": "_qadd=1", "Form": a.attr("fc"), "Entity": a.attr("eid") }, a);
            else if (a.data("Action"))
                _openWindow(a.data("Action"), a);
            else
                _openWindow({ "Action": "URL", "Url": a.attr("refurl") }, a);
            _hideSideBar();
        }


        function _showUserProfile() {
            Erp.OpenWindow({
                "Action": "EDITFORM", Responsive: 1, "Entity": "tbl_SYS_Users", "Form": "Personal", "RecordID": Users.UserID, "Params": "_sc=CUlCFC%2BpLMCNzaki2wmUm1Pd%2F%2FNKMQFGTR87nihkSFE%3D"
            })            _hideSideBar();
        }
        function _showUserPwd() {
            Erp.OpenWindow({
                "Action": "ADDFORM", Responsive: 1, "Entity": "tbl_SYS_Users", "Form": "ChangePassword", "Params": "_sc=AVLIr1Q9SqY0wxr0g%2F1TdVxIjQj%2F8C%2FBacDIP48AbIg%3D"
            })            _hideSideBar();
        }
        function _launchAdminModule() {
            window.open(AppRootPath+"/main/home.aspx")
        }
        function _showUserSetting(btn) {
            _openWindow({
                "Action": "SETTINGS", "Category": "User", "CatId": Users.UserID,
                "Params": "personal=1&_rspv=1"
            }, $(btn));
            _hideSideBar();
        }

        function _switchCompany(a) {a=$(a)
            parent._switchCompany.call(parent,a.attr("href1"));
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
        function showSearch(a) {
            if (!__indexingDone) {
                indexMenus();
                $("#txtSearch").on("input", $.debounce(250, function (e) { searchMenu(); }));
                __indexingDone = true;
            }
            $(a).addClass("sel")
            var list = $("#divSearch");
            list.show();
            //list.position({ my: "right top", at: "center bottom", of: $(a) }).css("left", "+=40").css("top", "+=40");
            $("#txtSearch").focus();
            toggleSearchOptions(null);
        }



        var menuCollection = []
        function indexMenus() {
            var menus = $("#Level2AppMenu").find(".erp-MenuItem");
            menus.each(function () {
                var m = $(this);
                var t = m.children("a").find(".menuTxt").text();
                var tt = t;
                var p = null;
                if (m.attr("level") / 1 > 1) {
                    p = m.closest("li");
                    tt = p.find(".menuTxt").text() + "/" + tt;
                    var p1 = {};
                    p1 = p.closest("li");
                    tt = p1.find(".menuTxt").text() + "/" + tt;
                }               
                //else if (m.attr("level") / 1 == 1) {
                //    p = m;
                //    var p1 = $("#" + p.closest(".menuSet").attr("id").replace("level1_set_", "level1_"));
                //    tt = p1.find(".menuTxt").text() + "/" + tt;
                //}
                var ic = p ? p.find(".fa").text() : "";
                if (m.attr("onclick").indexOf("_appMenuAction") < 0)
                    return true;
                menuCollection.push({ Id: m.attr("id"), Title: tt, Text: t, Icon: ic, IsLink: m.attr("onclick").indexOf("_appMenuAction") > -1 });
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
                        var a = $('<a href="javascript:void(0)" title="' + r[i]["__recTitle"] + '" class="menu-search-item" onclick=\'_openWindow({"Action":"EDITFORM","Params":"_search=1","Responsive":1,  "Form":"SearchResult",  "Entity":"' + r[i]["__eid"] + '",RecordID:"' + r[i]["__pid"] + '"},$(this))\'><span class="_ico"></span>' + r[i]["__recTitle"] + '</a>');
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
                })                _hideSideBar();
            }
        }).find("." + $.defaultVal(("<%=ErpModel.Globals.Users.RspTheme%>".indexOf("custom-") > -1 ? "customTheme" : "<%=ErpModel.Globals.Users.RspTheme%>"), "defaultTheme")).addClass("selected");
        function applyTheme(a,custom) {
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
            $("#divThemeCtr").children().each(function () { cls += $(this).attr("class").split(' ')[1] + " ";})
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
