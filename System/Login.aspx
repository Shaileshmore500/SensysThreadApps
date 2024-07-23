<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="SensysErp.Meta.Login" %>
<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title></title>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/system.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jqhelper.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/login.css")%>
     <%# HelperLib.Web.WebResources.GetResource("~/fonts/font.css")%>
     <%# HelperLib.Web.WebResources.GetResource("~/css/base.css")%>
    <script type="text/javascript">
        var mac = "", currentAppUrl = "";
        var LoginScreen = true;
        try { window.opener.CloseWin(); } catch (e) { }

        //PageLoader.ImagePos = "TR";
        $(document.documentElement).keydown(function (event) { CheckKeys(event) });
        $(document.documentElement).keypress(function (event) { enter(event) });
        var wleft = (screen.width - 390) / 2;
        var wtop = (screen.height - 440) / 2;
        function CheckKeys(event) {
            if (event.altKey && event.keyCode == 76)//L
                window.open("Server.aspx?mode=EPLog")
            else if (event.altKey && event.keyCode == 69)//e
                window.open("errorlog.htm")
            else if (event.altKey && event.keyCode == 67)//C
                OpenConfig();
            else if (event.altKey && event.keyCode == 82)//R
                window.open("Server.aspx?mode=Restart", "", "menubar=0,resizable=1,status=0,scrollbars=0,width=175,height=100,top=" + wleft + ",left=" + wtop + "");
            else if (event.altKey && event.keyCode == 77)//M
                prompt('', mac);
            else if (event.ctrlKey && event.shiftKey && event.keyCode == 76)//L
                window.open("Server.aspx?mode=SQL", "", "menubar=0,resizable=1,status=0,scrollbars=1,width=800,height=600,top=" + 50 + ",left=" + 50 + "");
            else if (event.ctrlKey && event.shiftKey && event.keyCode == 83)//S
                window.open("Server.aspx?mode=SQLStart", "", "menubar=0,resizable=1,status=0,scrollbars=0,width=175,height=100,top=" + wleft + ",left=" + wtop + "");
            else if (event.ctrlKey && event.shiftKey && event.keyCode == 88)//X
                window.open("Server.aspx?mode=SQLStop", "", "menubar=0,resizable=1,status=0,scrollbars=0,width=175,height=100,top=" + wleft + ",left=" + wtop + "");
        }
       
        function enter(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
                var btn = $("#btnKey,#btnSuper,#btnLogin,#btnSubmitOtp,#btnForgotReset").each(function () { if ($(this).isVisible()) { $(this).click(); return true; } })
            }
        }
    </script>
    <style>
        .login_logo svg {
            height: 50px;
            display: inline-block;
            font-size: inherit !important;
            overflow: visible;
        }
        .login_logo img{
            max-width:120px;
            max-height:120px;
        }
    </style>
</head>
<body class="desktop">
    <form id="form1" runat="server">
    <asp:ScriptManager ID="ScriptManager1" EnablePageMethods="true" runat="server">
    </asp:ScriptManager>
         <div style="visibility:hidden;position:absolute;top:-100px;">
            <input type="text" id="PreventChromeAutocomplete" name="PreventChromeAutocomplete" autocomplete="fake-text" />
            <input type="submit" onclick="return false" value="cancel enter" style="display:none" />
            <input style="display1:none" type="text" name="fakeusernameremembered"/>
            <input style="display1:none" type="password" name="fakepasswordremembered"/>
        </div>
        <asp:Panel runat="server" Visible="false" ID="pnlSw" style="height:100%;width:100%">
            <asp:Label ID="lblSwErr" runat="server"></asp:Label>
        </asp:Panel>
        <asp:Panel runat="server" Visible="false" ID="pnlContainer" style="height:100%;width:100%">
    <div class="divTitle">
        <asp:Label Text="Thread - ERP" CssClass="lblTitle" runat="server" ID="lblTitle">
        </asp:Label>
    </div>
    <div style="text-align: center">
        <div class="login_logo">
                  <asp:Literal ID="ltrAppLogo" runat="server" Mode="PassThrough"></asp:Literal>
            </div>
        <div id="divLoginFrame" class="loginFrame">
            <div id="divLoginFrameBg" class="loginFrameBg">
            </div>
            <div id="divMain" style="position: absolute; top: 35px; left: 35px; width: 300px;
                height: 310px;">
                <div id="divLoginKey" runat="server" style="display1: none; height: 340px" class="loginKey">
                    <div class="row">
                        <span class="rowLabel">Enter Your Key</span>
                        <input id="txtKey"  type="text" class="rowInput" />
                    </div>
                    <a class="loginButton static" id="btnKey" style="position: absolute; top: 2px; right: 1px; width: 80px;"
                        href="javascript:void(0)" onclick="submitKey(this)">Enter</a>
                    <div style="visibility: hidden" class="loginError">
                        <asp:Label ID="lblKeyError" Text="" runat="server"></asp:Label></div>
                </div>
                <div id="divLoginCtr" runat="server" style="display: none;height:213px " class="loginCtr">
                    <div id="divDb" visible="true" runat="server" style="height: 40px; padding-top: 15px;
                        padding-bottom: 5px; margin-bottom: 20px" class="loginEntry">
                        <telerik:radcombobox skinid="CboNoSkin" cssclass="CboDb" dropdowncssclass="CboDb"
                            id="cboDb" width="90%" font-size="14px" skin="Web20" runat="server">
                            <Items>
                               
                            </Items>
                        </telerik:radcombobox>
                        <div style="left: 25px;" class="rowLink">
                        </div>
                        <div style="right: 25px;" class="rowLink">
                        </div>
                    </div>                    
                    <div id="divLoginEntry" runat="server" style="padding-top: 15px;position:relative" class="loginEntry">

                        <div class="row">
                            <span class="rowLabel">Username</span>
                            <input id="txtUser" autocomplete="off" runat="server" type="text" class="rowInput" />
                        </div>
                        <div class="row lastRow">
                            <span class="rowLabel">Password</span>
                            <input id="txtPassword" autocomplete="off" style="padding-right: 42px;" runat="server" type="password" class="rowInput" />
                            <a id="btnForgot" title="Forgot Password ?" style="bottom:11px;"  onclick="showForgotPass()" href="javascript:void(0)"></a>
                        </div>
                        <a class="loginButton static" id="btnLogin" style="position: absolute; left: 165px; margin-top: 18px;"
                            href="javascript:void(0)" onclick="submitForm(this)">Login</a>
                      
                       <span style='<%=HelperLib.Configurator.HCfg.StoreSettings.EnableRedisCache?"":"display:none"%>' class="loginRemember"><input id="chkRemember" type="checkbox" /><label for="chkRemember">Remember Me</label></span>
                        
                    </div>             
                       
                </div>
               
                <div id="divForgotPasswordCtr" style="display: none; " class="loginCtr">
                       <div id="divForgotPassword" style="text-align: left; position: relative; height: 120px;
                        padding-top: 15px; padding-bottom: 5px; margin-bottom: 20px" class="loginEntry">
                        <div class="row">
                            <span class="rowLabel">Username</span>
                            <input id="txtFgtUser" autocomplete="off"  type="text" class="rowInput" />
                        </div>
                         <div class="row">
                            <span class="rowLabel" style="width:160px">Registered Email ID</span>
                            <input id="txtFgtEmail" autocomplete="off" type="text" class="rowInput" />
                        </div>
                             <a class="mdl-button RedColor"  id="A2" style="position: absolute;left:2px;margin-top: 16px;width: 50px;"
                            href="javascript:void(0)" onclick="hideForgotPass(this)">Cancel</a>
                        <a class="mdl-button GreenButton enterIcon" id="btnForgotReset" style="position: absolute;left: 136px;margin-top: 16px;width: 132px;"
                            href="javascript:void(0)" onclick="submitForgotPass(this)">Reset Password</a>
                         </div>
                </div>
                 <div id="divOtpCtr" style="display: none; " class="loginCtr">
                     <span style="color: #000;font-size: 14px;font-family: sans-serif;display: block;text-align: center;margin: 10px 0;background: #fbff00;padding: 5px;border-radius: 10px;"  id="lblOtpTitle">Please enter OTP code</span>
                    <div id="divOtp" runat="server" style="height:45px;padding-bottom: 37px;position: relative;" class="loginEntry">                   
                        <div class="row">
                            <span class="rowLabel">Enter OTP</span>
                            <input id="txtOtp"  type="text" class="rowInput" />
                        </div>
                        <a class="loginButton static" id="btnSubmitOtp" style="position: absolute; top: 2px; right: 1px; width: 80px;"
                            href="javascript:void(0)" onclick="submitOtp(this)">Enter</a>
                        <a class="mdl-button RedColor" id="btnCancelOtp" style="position: absolute;left:2px;margin-top: 16px;width: 50px;" href="javascript:void(0)" onclick="hideOtp(this)">Cancel</a>
                        <a class="mdl-button GreyColor redoIcon" id="btnResendOtp" style="position: absolute;right: 2px;margin-top: 16px;width: 155px;text-align:right" href="javascript:void(0)" onclick="resendOtp(this)">Resend Otp (120)</a>
                        <div style="visibility: hidden;margin-top:65px" class="loginError">
                            <span id="lblOtpErr" ></span></div>
                    </div>
                </div>
                <div id="divLoginProvider" ><asp:Literal ID="ltrLogin" runat="server"></asp:Literal></div>   
                 <div id="lblErrorMainCtr" style="width: 300px; margin: auto;margin-top:50px">
                            <div style="visibility: hidden;" class="loginError">
                                <asp:Label ID="lblErrorMain" Text="" runat="server"></asp:Label>
                            </div>
                    </div>
                <div id="divCompanyCtr" style="display: none; height: 340px" class="loginCtr">
                    <div id="divCompany" style="text-align: left; position: relative; height: 120px;
                        padding-top: 15px; padding-bottom: 5px; margin-bottom: 20px" class="loginEntry">
                        <a class="lnkCfg" onclick="OpenConfig()" href="javascript:void(0)">Configure</a> <span class="ctitle">Choose
                            a company:</span>
                        <telerik:radcombobox style="margin-left: 15px" skinid="CboNoSkin" cssclass="CboDb"
                            dropdowncssclass="CboDb" id="cboCompany" width="90%" font-size="14px" skin="Web20"
                            runat="server">
                            <Items>                                
                            </Items>
                        </telerik:radcombobox>
                        <a id="lnkCompany" class="lnkCompany" href="javascript:void(0)" onclick="showCompanyList()">
                            Manage Companies</a> <a class="loginButton static" id="btnSuper" style="position: absolute; bottom: -8px;
                                right: 15px; width: 80px;" href="javascript:void(0)" onclick="submitCompany(this)">Enter
                            </a>
                    </div>
                </div>
                <div id="divCompListCtr" style="display: none; height: 340px" class="loginCtr">
                    <div id="divCompList" style="text-align: left; height: 275px; position: relative;
                        padding-top: 15px; padding-bottom: 5px; margin-bottom: 20px;" class="loginEntry">
                        <telerik:radtreeview height="240px" runat="server" id="tvComp">
                           
                        </telerik:radtreeview>
                        <div style="border-bottom-style: none; border-top-style: solid; height: 30px" class="row">
                            <a id="A1" class="lnkCompany" style="bottom: 5px" href="javascript:void(0)" onclick="showCompanyPopup()">
                                Add A Company</a> <a class="lnkBack" onclick="goBack()" href="javascript:void(0)"><span
                                    style="font-size: 18px; display: inline-block; margin-right: 1px;">&laquo;</span>Back</a>
                        </div>
                    </div>
                </div>
                <div id="div2f">
                    <iframe style="height: 100%; width: 1px; min-width: 100%"  frameborder="0" ></iframe>
                </div>
            </div>
        </div>
       
    </div>

        </asp:Panel>
    </form>
    
    <style>
        #divLoginProvider > div {
            padding-top:40px;
        }
        .loginFrame {
            height:500px;
        }
        .loginCtr.hideLogin {
            display:none;
        }
        #div2f {
            position:fixed;
            top:0;
            left:0;
            right:0;
            bottom:0;
            display:none;
            background-color:#fff;
            z-index:1500;
        }
        #div2f iframe{

        }
        .show2fa {
            overflow:hidden;
        }
        .show2fa #div2f {
            display:block;
        }
    </style>

    <script type="text/javascript">
        document.title = ("<%=ErpModel.Globals.AppManager.IsService.ToString().ToLower()%>" == "true" ? $.defaultVal($.defaultVal(location.host.split('.')[1], "").toUpperCase(), document.title) : document.title);
        PageMethods.set_path("<%=Page.ResolveClientUrl("~/system/login.aspx")%>");
        function OpenConfig() {
            var wleft1 = (screen.width - 750) / 2;
            var wtop1 = (screen.height - 440) / 2;
            window.open("<%=Page.ResolveClientUrl("~/system/config.aspx")%>", "", "menubar=0,resizable=0,status=0,scrollbars=1,width=750,height=440,top=" + wtop1 + ",left=" + wleft1 + "");
        }
        var dLoginFrame = $("#divLoginFrame");
        var dCompanyCtr = $('#divCompanyCtr');
        var dLoginCtr = $('#divLoginCtr');
        var dCompListCtr = $('#divCompListCtr');
        var dLoginKey = $('#divLoginKey');
        var dCompany = $('#divCompany');
        var txKey = $("#txtKey");
        
        var txUser = $("#txtUser");
        var txPassword = $("#txtPassword");

        window.setTimeout(function () {           
            if ($("#txtKey").val() != "")
                $("#txtKey").focus().click();
            if ($("#txtUser").val() != "") {
                $("#txtUser").focus().click();
                $("#txtPassword").focus().click();
            }
        }, 500);
        
        if ($("#divLoginEntry").isVisible() && $("#divLoginEntry").outerHeight() < 130) {
            $("#divLoginFrameBg").css("height", "185px");
            $("#divLoginProvider").children(0).css("padding-top", "50px");
        }
        var rowLabels = $("#divMain").find(".rowLabel");
        dLoginFrame.find(".rowLabel").on("click", function () { window.clearTimeout(timeout); $(this).addClass("hideLabel").next().focus(); })
        dLoginFrame.find(".rowInput").on("focus", function () { window.clearTimeout(timeout); $(this).prev().addClass("hideLabel"); })
        dLoginFrame.find(".rowInput").on("blur", function () { if ($(this).val() == "") $(this).prev().removeClass("hideLabel"); })

        var timeout = window.setTimeout(checkAC, 250);
       
        
        function checkAC() {
            if (txKey.val() != ""  || txUser.val() != "" || txPassword.val() != "") {
                rowLabels.each(function () { if ($(this).next().val() != "") $(this).addClass("hideLabel"); })
                window.clearTimeout(timeout);
            }
            timeout = window.setTimeout(checkAC, 250);
        }
        function adjustHeight() {
            if (!$("#<%=divDb.ClientID%>").exists()) {
                dLoginFrame.css("height", "280px");
                $("#divLoginFrameBg").css("height", "250px");
                $("#divCompList").css("height", "190px");
                $("#<%=tvComp.ClientID%>").css("height", "155px");

            }
        }
        adjustHeight();
        function LoginResult(parameters) {
            hideProg(parameters["BtnID"]);
            
            if (parameters["RegisterPrompt"] == "1") {
                parameters["Message"] = parameters["Message"] + "<br/><a href='javascript:void(0)' onclick='registerCompany(" + parameters["CompanyID"] + ",\"" + parameters["CompanyCode"] + "\",\"" + parameters["CompanyName"] + "\")' style='color: #0FF;' class='newyear'>Click here to register this company</a>"
            }
            if (parameters["Result"] == "Error") {
                errVibrate(parameters["Ctr"]);
                window.setTimeout(function () { showErrorMsg(parameters["ErrLabel"], parameters["Message"]); }, 450);
                return;
            }
            if (parameters["Type"] == "CheckKey") {
                LoadDbList(parameters["DBList"]);
                showLoginEntry();
                $("#divLoginCtr").removeClass("hideLogin").addClass(parameters["hideLogin"] == "1" ? "hideLogin" : "");
                
                if (!$.isEmpty(parameters["LoginProvider"]))
                    $("#divLoginProvider").html(parameters["LoginProvider"]);
                else
                    $("#divLoginProvider").html("")
                

                if ($("#divLoginFrameBg").outerHeight() < 190) {
                    $("#divLoginProvider").children(0).css("padding-top", "50px");
                }
               
            }
            else if (parameters["Type"] == "AuthenticateUser") {
                var _u = ($.isEmpty(currentAppUrl) ? "<%=Page.ResolveClientUrl("~/main/home.aspx")%>" : currentAppUrl);
                _u = _u + (_u.indexOf("?") > -1 ? "&" : "?") + parameters["Url"];
                if (parameters["ShowMFA"] == true) {
                    window.__successUrl = _u;
                    $("#lblOtpTitle").html(parameters["MFA_Msg"])
                    if (parameters["TOTP"] == true)
                        $("#btnResendOtp").hide().data("totp",true);
                    showOtp();
                    if (parameters["Register2FA"]) {
                        $("#div2f").children("iframe").attr("src", "<%=Page.ResolveClientUrl("~/system/2fa.aspx")%>"); $(document.documentElement).addClass("show2fa");
                    }
                }
                else {                   
                    window.location = _u;
                }
            }
            else if (parameters["Type"] == "AuthenticateSuper") {
                LoadCompanyList(parameters["CompanyList"]);
                showCompany();
            }
            else if (parameters["Type"] == "LoadSuperData") {
                window.location = "<%=Page.ResolveClientUrl("~/main/home.aspx")%>" + parameters["Url"];
            }
            
        }

        function LoginError(error, userContext, methodName) {
            //alert(error);
        }
        var vibCtr = 0, vibSign = "-";
        function errVibrate(id, rcr) {
            var div = $("#" + id);
            if (rcr != true) {
                vibCtr = 0;
                vibSign = "-";
                div.css("left", "-5px");
            }
            if (vibCtr > 2) {
                div.css("left", "0px");
                return;
            }
            vibSign = (vibSign == "-" ? "+" : "-");
            div.animate({ left: vibSign + "=10px" }, 150, function () { errVibrate(id, true) });
            vibCtr++;
        }

        function LoadDbList(dbs) {
            var dbs = dbs.split(',');
            var cbo = $find("<%=cboDb.ClientID %>");
            if (cbo == null)
                return;
            cbo.trackChanges();
            var item = new Telerik.Web.UI.RadComboBoxItem();
            item.set_text("Please Select Database");
            item.set_value("0");
            cbo.get_items().add(item);
            item.select();
            for (var i = 0; i < dbs.length; i++) {
                var d = dbs[i].split('|');
                item = new Telerik.Web.UI.RadComboBoxItem();
                item.set_text(d[0]);
                item.set_value((d.length > 1 ? d[1] : d[0]));
                cbo.get_items().add(item);
            }
            cbo.commitChanges();
            var d = $.QS("dbn");
            if (!$.isEmpty(d)) {
                var item = cbo.findItemByValue(d);
                if (item != null)
                    item.select();
            }
            if (cbo.get_items().get_count() == 2) {
                $("#divDb").hide();
                cbo.get_items().getItem(1).select()
            }
            else
                $("#divDb").show();
        }
        function LoadCompanyList(arr) {
            arr = eval(arr);
            var cbo = $find("<%=cboCompany.ClientID %>");
            var tree = $find("<%=tvComp.ClientID %>");
            cbo.trackChanges();
            tree.trackChanges();
            var item = new Telerik.Web.UI.RadComboBoxItem();
            item.set_text("Please Select Company");
            item.set_value("0");
            cbo.get_items().add(item);
            item.select();
            for (var i = 0; i < arr.length; i++) {
                item = new Telerik.Web.UI.RadComboBoxItem();
                item.set_text(arr[i]["companyname"]);
                item.set_value(arr[i]["companycode"]);
                cbo.get_items().add(item);
                if (i == 0)
                    item.select();
                AddNode(arr[i]["groupid"], arr[i]["groupname"], arr[i]["company_pid"], arr[i]["companycode"], arr[i]["companyname"], tree);
            }
            cbo.commitChanges();
            tree.commitChanges();
        }
        function showProg(id) {
            $((typeof id == "string" ? "#" + id : id)).removeClass("static").addClass("progress");
        }
        function hideProg(id) {
            $((typeof id == "string" ? "#" + id : id)).removeClass("progress").addClass("static")
        }

        function submitKey(a) {
            if ($(a).attr("class").indexOf("progress") > -1)
                return;
            if (txKey.val() == "") {
                showErrorMsg("lblKeyError", "Please enter key");
                return;
            }
            var parameters = {};
            parameters["Ctr"] = "divLoginKey";
            parameters["ErrLabel"] = "lblKeyError";
            parameters["BtnID"] = $(a).attr("id");
            parameters["Type"] = "CheckKey";
            parameters["@Key"] = txKey.val();
            PageMethods.UserLogIN(parameters, LoginResult, LoginError);
            resetErrorMsg(parameters["ErrLabel"]);
            showProg(a);
        }
        function submitForm(a) {
            if ($(a).attr("class").indexOf("progress") > -1)
                return;
           
            if (txUser.val() == "") {
                showErrorMsg("lblErrorMain", "Please enter username");
                return;
            }
            var cbodb = $find("<%=cboDb.ClientID %>");
            if (cbodb && cbodb.get_selectedIndex() <= 0) {
                showErrorMsg("lblErrorMain", "Please select database");
                return;
            }
            var parameters = {};
            parameters["Ctr"] = "divLoginCtr";
            parameters["ErrLabel"] = "lblErrorMain";
            parameters["BtnID"] = $(a).attr("id");
            parameters["UrlCompCode"] = $.defaultVal(window.UrlCompCode, "");
            parameters["Type"] = "AuthenticateUser";
            parameters["RememberMe"] = $("#chkRemember").checked();
            parameters["@LoginPassword"] = txPassword.val();
            parameters["@LoginName"] = txUser.val();
            parameters["MultiDatabaseKey"] = (!$.isEmpty("<%=Key%>") ? "<%=Key%>" : txKey.val());
            parameters["AppCode"] = "<%=AppID%>";
            if (cbodb) {
                parameters["CurrentDatabase"] = cbodb.get_value();
                parameters["CurrentDatabaseName"] = cbodb.get_text();
            }
            PageMethods.UserLogIN(parameters, LoginResult, LoginError);
            resetErrorMsg(parameters["ErrLabel"]);
            showProg(a);
        }
        function submitForgotPass(a) {
            if ($(a).hasClass("spinIcon"))
                return;
            var cbodb = $find("<%=cboDb.ClientID %>");
            if (cbodb && cbodb.get_selectedIndex() <= 0) {
                showErrorMsg("lblErrorMain", "Please select database");
                return;
            }
            PageMethods.ForgotPassword({
                "@email": $("#txtFgtEmail").val(),
                "@username": $("#txtFgtUser").val(),
                "CurrentDatabase": cbodb.get_value(),
                "MultiDatabaseKey": (!$.isEmpty("<%=Key%>") ? "<%=Key%>" : txKey.val())
            }, function (result) {
                $(a).addClass("enterIcon").removeClass("spinIcon");
                showErrorMsg("lblErrorMain", result["message"], result["success"]);
            },
            function () {
                $(a).addClass("enterIcon").removeClass("spinIcon");
                showErrorMsg("lblErrorMain", "Error Occured. Please try later");
            });
            resetErrorMsg("lblErrorMain");
            $(a).removeClass("enterIcon").addClass("spinIcon");
        }
        function submitCompany(a) {
            if ($(a).attr("class").indexOf("progress") > -1)
                return;
            var cboComp = $find("<%=cboCompany.ClientID%>");
            if (cboComp.get_selectedIndex() <= 0) {
                showErrorMsg("lblErrorMain", "Please select company");
                return;
            }
            var parameters = {};
            parameters["Ctr"] = "divCompanyCtr";
            parameters["ErrLabel"] = "lblErrorMain";
            parameters["BtnID"] = $(a).attr("id");
            parameters["Type"] = "LoadSuperData";
            parameters["@CompanyCode"] = cboComp.get_value();            
            PageMethods.UserLogIN(parameters, LoginResult, LoginError);
            resetErrorMsg(parameters["ErrLabel"]);
            showProg(a);
        }
      

        function registerCompany(id, code, name) {
            var newurl = "Support_RegisterCompany.aspx?PageMode=NewComp&CompanyID=" + id + "&CompanyCode=" + escape(code) + "&CompanyName=" + escape(name);
            window.open(newurl, '', "menubar=0,resizable=1,status=0,scrollbars=0,width=472,height=300,top=200,left=200")
        }
        var companyRegistrationSuccesfull = false;
        function registerCompanyFinish() {
            if (companyRegistrationSuccesfull)
                submitCompany($("#btnSuper"));
        }

        function resetErrorMsg(id) {
            var lbl = $("#" + id);
            lbl.html("").parent().setVisible(false).removeClass("loginErrGreen");
        }
        function showErrorMsg(id, msg, success) {
            var lbl = $("#" + id);
            lbl.html(msg);
            if (success == true)
                lbl.parent().addClass("loginErrGreen");
            lbl.parent().setVisible(false).css({ padding: "0px", width: "0px", height: "0px" }).setVisible(true).stop()
            lbl.parent().animate({ width: "92%" }, 350, "easeInExpo", function () { lbl.parent().animate({ padding: "10px", height: lbl.outerHeight() + "px" }, 250, "easeInExpo"); });
        }

        function showLoginEntry() {
            dLoginCtr.show();
            dLoginKey.animate({ height: "43px" }, 550, "easeOutBounce", function () {
                dLoginKey.animate({ top: "-=68px" }, 150, "easeInExpo",
                function () {
                    dLoginCtr.animate({ top: "-=58px" }, 250, "easeInExpo", function () { dLoginKey.hide(); dLoginCtr.css("top", "0px") });
                });
            });
        }
        function showOtp() {
            $("#divLoginProvider").hide();
            $("#lblErrorMainCtr").css("margin-top", "-225px"); resetErrorMsg("lblErrorMain")
            $("#divOtpCtr").show();
            $("#lblOtpTitle").setVisible(true);
            dLoginCtr.stop().animate({ top: "-=" + (dLoginCtr.outerHeight() + 50) + "px" }, 550, "easeInCirc", function () {
            });
            countdownOtp();
            $("#divOtpCtr").stop().animate({ top: "-=" + dLoginCtr.outerHeight() + "px" }, 550, "easeInCirc", function () {
                dLoginCtr.setVisible(false);
            });
        }
        function hideOtp() {
            $("#lblErrorMainCtr").css("margin-top", "0"); resetErrorMsg("lblErrorMain")
            dLoginCtr.setVisible(true);
            dLoginCtr.show();

            dLoginCtr.stop().animate({ top: "+=" + (dLoginCtr.outerHeight() + 50) + "px" }, 550, "easeInCirc", function () {
                $("#divLoginProvider").show();
            });
            $("#divOtpCtr").stop().animate({ top: "+=" + (dLoginCtr.outerHeight()) + "px" }, 550, "easeInCirc", function () { $("#divOtpCtr").hide(); });
        }
        function resendOtp(a) {
            if ($("#btnSubmitOtp").attr("class").indexOf("progress") > -1)
                return;
            if ($(a).hasClass("spinIcon") || $(a).data("intvl")>0)
                return;
            var parameters = {};
            parameters["Type"] = "ResendOtp";
            PageMethods.Mfa(parameters,
                function (result) {
                    $(a).addClass("redoIcon").removeClass("spinIcon");
                    if (result["Result"] == true) {                       
                        countdownOtp();
                    }
                    else {                        
                        hideOtp();
                        showErrorMsg("lblErrorMain", "Error Occured. Please try later");
                    }
                    $("#lblOtpTitle").setVisible(true);
                },
            function () {
                $(a).addClass("redoIcon").removeClass("spinIcon");                
                hideOtp();
                showErrorMsg("lblErrorMain", "Error Occured. Please try later");
            });
            $(a).removeClass("redoIcon").addClass("spinIcon");
            resetErrorMsg("lblErrorMain");
            $("#lblOtpTitle").setVisible(false);
        }
        function submitOtp(a) {
            if ($("#btnSubmitOtp").attr("class").indexOf("progress") > -1)
                return;
            if ($("#btnResendOtp").hasClass("spinIcon"))
                return;
            if ($("#txtOtp").val().length < 3) {
                errVibrate("divOtpCtr");
                showErrorMsg("lblOtpErr", "Invalid OTP", false);
                return;
            }
            var parameters = {};
            parameters["Type"] = "AuthenticateOtp";
            parameters["OTP"] = $("#txtOtp").val();
            PageMethods.Mfa(parameters, function (r) {
                hideProg(a);
                if (r["Result"]) {                    
                    window.location = window.__successUrl;
                }
                else if (r["Reset"]) {
                    hideOtp();
                    showErrorMsg("lblErrorMain", "Error Occured. Please try later");
                }
                else {
                    errVibrate("divOtpCtr");
                    showErrorMsg("lblOtpErr", "Invalid OTP", false);
                }
            }, function () {
                hideProg(a);
            });
            resetErrorMsg("lblErrorMain");
            resetErrorMsg("lblOtpErr");
            showProg(a);
        }

        window._otpintvl = 0;
        function countdownOtp(clear) {
            if (clear) {
                $("#btnResendOtp").removeData("intvl").removeClass("GreyColor").addClass("GreenColor");
                $("#btnResendOtp").html("Resend Otp");
                window.clearInterval(window._otpintvl);
                return;
            }
            if (window._otpintvl > 0) {
                window.clearInterval(window._otpintvl);
            }
            if ($("#btnResendOtp").data("totp")) return;
            var c = 120;
            $("#btnResendOtp").html("Resend Otp in " + c + "s").removeData("intvl").removeClass("GreenColor").addClass("GreyColor");;
            window._otpintvl = window.setInterval(function () {
                var s = $("#btnResendOtp").data("intvl");
                if (s == 0) {
                    countdownOtp(true); return;
                }
                if (!s)
                    s = c;               
                $("#btnResendOtp").html("Resend Otp in " + s-- + "s").removeClass("GreenColor").addClass("GreyColor");
                $("#btnResendOtp").data("intvl",s)
            }, 1000);
        }


        function showForgotPass() {
            $("#divLoginProvider").hide();
            $("#lblErrorMainCtr").css("margin-top", "-225px"); resetErrorMsg("lblErrorMain")
            $("#divForgotPasswordCtr").show();
            dLoginCtr.stop().animate({ top: "-=" + (dLoginCtr.outerHeight()+50) + "px" }, 550, "easeInCirc", function () {
            });
            $("#divForgotPasswordCtr").stop().animate({ top: "-=" + dLoginCtr.outerHeight() + "px" }, 550, "easeInCirc", function () {
                dLoginCtr.setVisible(false);
                //$(this).css("top", "0")
            });
        }

        function hideForgotPass() {
            $("#lblErrorMainCtr").css("margin-top", "0"); resetErrorMsg("lblErrorMain")
            dLoginCtr.setVisible(true);
            dLoginCtr.stop().animate({ top: "+=" + (dLoginCtr.outerHeight() + 50) + "px" }, 550, "easeInCirc", function () {
                $("#divLoginProvider").show();
            });
            $("#divForgotPasswordCtr").stop().animate({ top: "+=" + (dLoginCtr.outerHeight()) + "px" }, 550, "easeInCirc", function () { $("#divForgotPasswordCtr").hide(); });
        }

        function showCompany() {
            dCompanyCtr.show();
            dLoginCtr.stop().animate({ top: "-=" + dLoginCtr.outerHeight() + "px" }, 550, "easeInCirc", function () {
            });
            dCompany.stop().animate({ top: "-=" + dLoginCtr.outerHeight() + "px" }, 550, "easeInCirc", function () { dLoginCtr.hide(); $(this).css("top", "0") });
        }
        
        function showCompanyList() {
            dCompListCtr.stop().css("top", "0px").show();
            dCompanyCtr.stop().css("top", "0px").show();
            dCompanyCtr.stop().animate({ height: "150px" }, 550, "easeOutBounce", function () {
                dCompanyCtr.stop().animate({ top: "-=160px" }, 150, "easeInExpo",
                function () {
                    dCompListCtr.show().stop().animate({ top: "-=58px" }, 250, "easeInExpo", function () { dCompanyCtr.hide(); dCompListCtr.css("top", "0px") });
                });
            });
        }

        function goBack() {
            dCompListCtr.stop().css("top", "0px").show();
            dCompanyCtr.stop().css("top", "0px").show();
            dCompListCtr.css("top", "-" + dCompany.outerHeight() + "px");
            dCompanyCtr.show().css("height", "140px").css("top", "-" + dCompany.outerHeight() + "px");
            dCompListCtr.stop().animate({ top: "300px" }, 1750, "easeOutCirc", function () { dCompListCtr.hide().css("top", "0px") });
            dCompanyCtr.stop().animate({ top: "0px" }, 550, "easeOutCirc", function () { dCompanyCtr.css("height", "340px") });
        }

        function showCompanyPopup() {
            var wleft = (screen.width - 750) / 2;
            var wtop = (screen.height - 400) / 2;
            newurl = "companydetails_add.aspx?PageType=A&FromLogin=1";
            window.open(newurl, "", "height=400,width=750,resizable=yes,status=no,toolbar=no,menubar=no,location=no,scroll=no,top=" + wtop + ",left=" + wleft + "");
        }
        function AddNode(groupID, groupName, compID, compCode, compName, treeView) {
            var fromLogin = true;
            if (!treeView) {
                fromLogin = false;
                treeView = $find("<%=tvComp.ClientID %>");
            }
            if (!fromLogin)
                treeView.trackChanges();

            var node = new Telerik.Web.UI.RadTreeNode();
            node.set_text("[" + compCode + "] " + compName);
            node.set_value(compCode);
            node.set_cssClass("CompanyNode");
            var parent = getGroupNode(groupID, groupName, treeView) || treeView;
            parent.get_nodes().add(node);
            if (parent != treeView && !parent.get_expanded())
                parent.set_expanded(true);
            if (!fromLogin) {
                node.select();
                treeView.commitChanges();
            }

            if (!fromLogin) {
                var cbo = $find("<%=cboCompany.ClientID%>");
                cbo.trackChanges();
                var item = new Telerik.Web.UI.RadComboBoxItem();
                item.set_text(compName);
                item.set_value(compCode);
                cbo.get_items().add(item);
                item.select();
                cbo.commitChanges();
            }

        }
        function getGroupNode(groupID, groupName, treeView) {
            if (groupID / 1 == 0)
                return null;
            var node = treeView.findNodeByValue(groupID);
            if (node)
                return node;
            treeView.trackChanges();
            node = new Telerik.Web.UI.RadTreeNode();
            node.set_text(groupName);
            node.set_value(groupID);
            node.set_cssClass("GroupNode");
            treeView.get_nodes().add(node);
            treeView.commitChanges();
            return node;
        }

        function SocialLoginEvent(a) {
           var cbodb = $find("<%=cboDb.ClientID %>");
            if (cbodb && cbodb.get_selectedIndex() <= 0) {
                showErrorMsg("lblErrorMain", "Please select database");
                return false;
            }
            var u = window.location.origin;
            u += "<%=Request.ApplicationPath%>"; u = u.Trim('/');
            var s = (!$.isEmpty("<%=Key%>") ? "<%=Key%>" : txKey.val()) + "^" + cbodb.get_value() + "~" + cbodb.get_text() + "~" + "<%=AppID%>" + "~D|" + u;
            SocialLogin.SetUserData(s);
        }
    </script>

     <asp:Literal ID="embedContent" runat="server"  Mode="PassThrough"></asp:Literal>
    <script>
        if ($("#lblTitle").text() != "Thread - ERP")
            $("#divMain").append('<span id="lblPowered" style="position: absolute;top:210px;right: 0;color: #fff;font-size: 11px;font-family: sans-serif;display: block;text-align: center;text-shadow: 1px 2px 5px #000;">Powered By Thread-Erp</span>');
        
        window.setInterval(function () {
           if ($("#lblTitle").text() == "Thread - ERP")
                return;
            $("#lblPowered").remove();
            $("#divMain").append('<span id="lblPowered" style="position: absolute;top:210px;right: 0;color: #fff;font-size: 11px;font-family: sans-serif;display: block;text-align: center;text-shadow: 1px 2px 5px #000;">Powered By Thread-Erp</span>');
        }, 3000);
    </script>
</body>
</html>
