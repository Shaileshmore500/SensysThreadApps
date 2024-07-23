<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Init.aspx.cs" Inherits="SensysErp.Meta.Init" %>

<!DOCTYPE html>

<html id="htmlDoc" runat="server" xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Log In</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    
    <%--<link rel="icon" href="favicon.png" type="image/x-icon"/>
    <link rel="icon" href="favicon.svg" type="image/svg+xml"/>--%>
    <%--<link rel="icon" href="getresource.ashx?favicon=1&app=hmb&t=1" type="image/svg+xml"/>--%>
    <%--<link rel="icon" href="../Apps/App_Fams/Image/amc.png" type="image/x-icon"/>--%>
    <%# GetAppIcon() %>

    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/modernizr.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/fonts/font.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/system.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jqhelper.js")%>

    <script>
        RootWindow = true;
        currentAppUrl = "";
        MobileLogin = true;
        var __isAuthenticated = false;
    </script>
</head>
<body class="mobile pg-login">
    <style>
        html, body, form {
            height: 100%;
            padding: 0;
            margin: 0;
        }
       
        body {
            font-family: 'Calibri', Arial, sans-serif;
            color: #fff;
            background: linear-gradient(50deg, #ff6e6e 40%, rgba(0,0,0,0) 30%), linear-gradient(67deg, #808080 60%, #ffe468 60%);
        }
        body,#divHome {
            overscroll-behavior-y:contain;
        }  
        .wrap {
            width: 300px;
            position: absolute;
            top: 10%;
            left: 0;
            right: 0;
            margin: auto;
            border-radius: 10px;
            box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.44);
            padding: 20px;
            background: rgba(62, 61, 61, 0.6);
        }

        .divTitle {
            width: 100%;
            padding: 15px 0 30px 0;
        }

            .divTitle .lblTitle {
                font-size: 20px;
                font-weight: normal;
                color: #fff;
                text-align: center;
                display: block;
            }

        .wrap .log_in_box {
            position: relative;
            margin: 18px 0;
        }

        #btnLogin {
            width: 100%;
            height: 40px;
            border: none;
            color: #fff;
            font-size: 14px;
            border-radius: 22px;
            transition: 0.5s;
            cursor: pointer;
            outline: none;
            letter-spacing: 1px;
            text-transform: uppercase;
            -webkit-box-shadow: 0 8px 6px -8px #0000007a;
            -moz-box-shadow: 0 8px 6px -8px #0000007a;
            background: #14c14e;
        }

            #btnLogin:before {
                content: "\f090";
                font-family: FontAwesome;
                margin-right: 5px;
            }

        .form_box {
            width: 100%;
            margin: 0 auto;
            padding: 7px 0;
            background: #ecedf0e8;
            border-radius: 3px;
        }

            .form_box .plea_sel_data {
                width: 100%;
                border: none;
                outline: none;
                background: none;
                font-size: 13px;
            }

        .error {
            font-size: 13px;
            color: #ff8300;
            text-align: center;
            margin: 0 0 12px 0;
            padding: 0;
            display: none;
        }
        .success {
    font-size: 13px;
    color: #5dda37;
    text-align: center;
    margin: 0 0 12px 0;
    padding: 0;
     display: none; 
}

        #divHome {
            z-index: 1;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            overflow: hidden;
            display: none;
            background:#fff;
        }

        .showHome #divHome {
            display:block;
        }
         
        .touch #divHome {
            -webkit-overflow-scrolling: touch;
            /*overflow-y: scroll;*/
        }

        .log_input {
            padding: 14px 0 6px 0;
            width: 100%;
            font-size: 14px;
            border: none;
            border-bottom: 1px solid #fff;
            border-radius: 2px;
            background: none;
            color: #fff;
        }

            .log_input:focus {
                outline: none;
            }

            .log_input + .log_label {
                display: block;
                cursor: text;
                color: #fff;
                transition: .15s ease-out all;
                position: absolute;
                top: 0.8em;
                left: 0em;
                letter-spacing: 0.5px;
                font-size: 14px;
                pointer-events: none;
            }

        .log_label_user:before {
            content: "\f2c0";
            font-family: FontAwesome;
            margin-right: 5px;
        }

        .log_label_pass:before {
            content: "\f13e";
            font-family: FontAwesome;
            margin-right: 5px;
        }

        .log_label_email:before {
            content: "\f003";
            font-family: FontAwesome;
            margin-right: 5px;
        }

        .log_input:focus + .log_label, .log_label.stay {
            top: -0.4em;
            left: 0em;
            font-size: 14px;
            color: #fff;
            transition: .15s ease-out all;
            opacity: 0.5;
        }

        .login_logo {
            text-align: center;
        }

            .login_logo img {
                width: 70px;
                height: 70px;
                border-radius: 50%;
            }
            .login_logo svg {
            height: 70px;
            display: inline-block;
            font-size: inherit !important;
            overflow: visible;
        }
        .forget_pass {
            position: absolute;
            top: 6px;
            right: 0;
            width: 22px;
            height: 22px;
            display: block;
            border-radius: 50%;
            text-align: center;
            background: #fff;
            text-decoration: none;
            line-height: 22px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.88), 0 1px 2px rgba(0, 0, 0, 0.48);
        }

            .forget_pass span {
                font-size: 20px;
                color: #000;
                font-weight: 600;
            }


        .cancel_btn, .reset_btn {
            color: #ddd;
            font-size: 14px;
            text-decoration: none;
            float: left;
        }

        .reset_btn {
            float: right;
        }




        @-webkit-keyframes divHome {
            0% {
                opacity: 0;
                -webkit-transform: scale(0.04) translateY(300%);
                transform: scale(0.04) translateY(300%);
            }

            40% {
                -webkit-transform: scale(0.04) translateY(0);
                transform: scale(0.04) translateY(0);
                transition: ease-out;
            }

            40% {
                -webkit-transform: scale(0.04) translateY(0);
                transform: scale(0.04) translateY(0);
            }

            60% {
                opacity: 1;
                -webkit-transform: scale(0.02) translateY(0px);
                transform: scale(0.02) translateY(0px);
            }

            61% {
                -webkit-transform: scale(0.04);
                transform: scale(0.04);
            }

            99.9% {
                height: 0;
                padding-bottom: 100%;
                border-radius: 100%;
            }

            100% {
                -webkit-transform: scale(2);
                transform: scale(2);
                height: 100%;
                padding-bottom: 0;
                border-radius: 0;
            }
        }
        #imgLoader {
            position:relative;
        }
            #imgLoader:before {
                content: "";
                position: absolute;
                display: block;
                height: 10px;
                width: 10px;
                border-radius: 50%;
                background: #fff;
                margin: auto;
                left: 50%;
                top: 50%;
                -webkit-transform: translate(-50%, -50%);
                -moz-transform: translate(-50%, -50%);
                -ms-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
                visibility:hidden;
            }
            #imgLoader.anim svg {
                visibility:hidden;
            }
            #imgLoader.anim:before {
                visibility: visible;
                content: "";
                position: absolute;
                transition: 0.5s;
                height: 4000px;
                width: 4000px;
                transition-timing-function: ease-out;
                transition-property: height,width;
            }
    </style>
    <form id="form1" runat="server">

        <div id="divHome">
            <iframe id="ifrHost" runat="server" frameborder="0" style="height: 100%; width: 1px; min-width: 100%" src=""></iframe>
        </div>


        <div id="divLogin" class="wrap">
            <div class="login_logo">
                  <asp:Literal ID="ltrAppLogo" runat="server" Mode="PassThrough"></asp:Literal>
            </div>
            <div class="divTitle">
                <asp:Label Text="Thread - ERP" CssClass="lblTitle" runat="server" ID="lblTitle">
                </asp:Label>

            </div>
            <div class="form_box  _ddl">
                <asp:DropDownList ID="ddlDb" class="plea_sel_data" runat="server"></asp:DropDownList>
            </div>

            <div class="log_in_box">
                <input id="txtUser" autocomplete="off" runat="server" type="text" class="log_input" />
                <label class="log_label log_label_user" for="txtUser">User Name</label>
            </div>

            <div class="log_in_box">
                <input id="txtPassword" autocomplete="off" runat="server" type="password" class="log_input" />
                <label class="log_label log_label_pass" for="txtPassword">Password</label>
                <a tabindex="-1" href="javascript:void(0)" class="forget_pass" title="Forgot your password?">
                    <span>?</span>
                </a>
            </div>
            <p id="lblError" class="error">Invalid Username/Password</p>
            <button tabindex="-1" onclick="return loginUser()" href="javascript:void(0)" id="btnLogin">Login</button>
            <p class="img" id="imgLoader" style="width: 100%; height: 40px;margin:0; text-align: center; display: none;">
                <svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                    <g fill="none" fill-rule="evenodd" stroke-width="2">
                        <circle cx="22" cy="22" r="1">
                            <animate attributeName="r" begin="0s" dur="1.8s" values="1;20" calcMode="spline" keyTimes="0;1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite" />
                            <animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1;0" calcMode="spline" keyTimes="0;1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite" />
                        </circle>
                        <circle cx="22" cy="22" r="1">
                            <animate attributeName="r" begin="-0.9s" dur="1.8s" values="1;20" calcMode="spline" keyTimes="0;1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite" />
                            <animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1;0" calcMode="spline" keyTimes="0;1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite" />
                        </circle>
                    </g></svg>
            </p>

            <div id="divLoginProvider">
                <asp:Literal ID="ltrLogin" runat="server"></asp:Literal>
            </div>
            <asp:Literal ID="embedContent" runat="server" Mode="PassThrough"></asp:Literal>


        </div>

        <div id="divForgot" style="display:none;top: -20%;" class="wrap" >
            <div class="log_in_box">
                <input class="log_input" type="text" name="" id="loginusernamef" />
                <label class="log_label log_label_user" for="loginusernamef">User Name</label>
            </div>

            <div class="log_in_box">
                <input class="log_input" type="text" name="" id="registeredemailid" />
                <label class="log_label log_label_email" for="registeredemailid">Registered Email ID</label>
            </div>
            <p id="lblfgtmsg" class="error">Invalid Username/Email ID</p>
            <a class="cancel_btn" href="javascript:;">Cancel</a>
            <a class="reset_btn" onclick="submitForgotPass(this)" href="javascript:void(0)">Reset Password</a>
        </div>

         <div id="divOtpCtr" style="display:none;top: -20%;" class="wrap" >
            <span style="color: #000;font-size: 14px;font-family: sans-serif;display: block;text-align: center;margin: 10px 0;background: #fbff00;padding: 5px;border-radius: 10px;"  id="lblOtpTitle">Please enter OTP code</span>
            <div id="divOtp" runat="server" style="height:45px;padding-bottom: 37px;position: relative;" class="loginEntry">                   
                <div class="log_in_box" style="width:200px">
                    <input id="txtOtp"  type="text" class="log_input" />
                    <span class="log_label">Enter OTP</span>                    
                </div>
                <a class="enterIcon" id="btnSubmitOtp" style="position: absolute; top: 2px; right: 1px; width: 80px;"
                    href="javascript:void(0)" onclick="submitOtp(this)">Enter</a>
                <div style="display: block;clear: both;margin: 10px 0;"  id="lblOtpErr" class="error"></div>
                <a class="cancel_btn" id="btnCancelOtp" style="width: 50px;" href="javascript:void(0)" onclick="hideOtp(this)">Cancel</a>
                <a class="redoIcon" id="btnResendOtp" style="width: 155px;text-align: right;float: right;" href="javascript:void(0)" onclick="resendOtp(this)">Resend Otp (120)</a>
                
            </div>
        </div>
          <div id="div2f">
                    <iframe style="height: 100%; width: 1px; min-width: 100%"  frameborder="0" ></iframe>
                </div>
    </form>

    <style>
        #divLoginProvider {
            margin-top: 12px;
        }

       

        .socialButtons {
            margin: 6px;
            width: 46%;
            display: inline-block;
            border-radius: 22px;
            font-size: 11px;
            padding: 12px 0;
        }

            .socialButtons.Facebook {
                color: #FFF;
                background-color: #4572d2;
                border-color: transparent;
            }

            .socialButtons svg {
                vertical-align: text-bottom;
                color: #FFF;
                margin-right: 6px;
            }

            .socialButtons.Facebook svg * {
                fill: currentColor;
            }



@-webkit-keyframes autofill {
    to {
        color: #fff;
        background: transparent;
    }
}

input:-webkit-autofill {
    -webkit-animation-name: autofill;
    -webkit-animation-fill-mode: both;
}


        @media(max-width: 360px) {
            div.wrap

        {
            width: 75%;
        }

        .socialButtons {
            width: 100%;
            margin-bottom: 10px;
        }

        }

    </style>
    <style>

        #btnSubmitOtp {
            position: absolute;
    top: 0px;
    right: 1px;
    width: 93px;
    line-height: 38px;
    border: none;
    color: #fff;
    font-size: 14px;
    border-radius: 22px;
    transition: 0.5s;
    cursor: pointer;
    outline: none;
    text-align: center;
    text-transform: uppercase;
    -webkit-box-shadow: 0 8px 6px -8px #0000007a;
    -moz-box-shadow: 0 8px 6px -8px #0000007a;
    background: #14c14e;
    text-decoration: none;
        }
            

        #btnResendOtp {
            color: #ddd;
            font-size: 14px;
            text-decoration: none;
            color: #afafaf;
            opacity: 0.85;
        }
            #btnResendOtp.GreenColor {
                color:#abffab;
                opacity:1;
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

.redoIcon:before
{
	content: "\f01e";
	font-family:FontAwesome;
	margin-right:5px;
	display:inline-block;
	cursor:pointer;
    font-style: normal;
}
        .enterIcon:before {
            content: "\f090";
            font-family: FontAwesome;
            margin-right: 5px;
        }

@keyframes animSpinner {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}

.spinIcon:before
{
	content: "\f1ce" !important;
	font-family:FontAwesome;
	margin-right:5px;
	display:inline-block;
	animation: animSpinner 2s infinite linear;
	font-style: normal;
}
    </style>
    <script>
        //$(document.documentElement).keyup(function (event) { enter(event) });
        //function enter(event) {
        //    if (event.keyCode == 13) {
        //        event.preventDefault();
        //        loginUser();
        //    }
        //}

        $(document.documentElement).keypress(function (event) { enter(event) });
        function enter(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
                if ($("#btnSubmitOtp").isVisible())
                    $("#btnSubmitOtp").trigger("click")
                else
                    $("#btnLogin").trigger("click");
            }
        }

        $(document).ready(function () {
            $('.log_input').on('blur', function () {
                if (!$(this).val() == "") {
                    $(this).next().addClass('stay');
                } else {
                    $(this).next().removeClass('stay');
                }
            });





            $(".forget_pass").click(function () {
                $("#divLogin").animate({ 'opacity': '0', 'top': '-90%' }, 'slow');
                $("#divForgot").show().delay(150).animate({ 'opacity': '1', 'top': '15%' }, 'slow');
            });

            $(".cancel_btn").click(function () {
                $("#divLogin").animate({ 'opacity': '1', 'top': '10%' }, 'slow');
                $("#divForgot").hide().animate({ 'opacity': '0', 'top': '-80%' }, 'slow');
            });

        });

    </script>
    <script>
        function showOtp() {
            $("#divLogin").animate({ 'opacity': '0', 'top': '-90%' }, 'slow');
            $("#divOtpCtr").show().delay(150).animate({ 'opacity': '1', 'top': '15%' }, 'slow');
            $("#txtOtp").val("")
            countdownOtp();            
        }
        function hideOtp() {
            $("#divLogin").animate({ 'opacity': '1', 'top': '10%' }, 'slow');
            $("#divOtpCtr").hide().animate({ 'opacity': '0', 'top': '-80%' }, 'slow');
        }
        function resendOtp(a) {
            if ($("#btnSubmitOtp").hasClass("spinIcon"))
                return;
            if ($(a).hasClass("spinIcon") || $(a).data("intvl") > 0)
                return;
           
            $.ajax({
                crossDomain: true,
                type: "GET",
                url: '<%=Page.ResolveClientUrl("~/core/erpapi.asmx")%>/Mfa',
                data: { type: "ResendOtp", otp:""},
                contentType: "application/json; charset=utf-8",
                dataType: "jsonp",
                success: function (r) {
                    $(a).addClass("redoIcon").removeClass("spinIcon");
                    $("#lblOtpErr").hide()
                    if (r["success"] == true) {
                        countdownOtp();
                    }
                    else {
                        hideOtp();
                        $("#lblError").show().html("Error Occured. Please try later");
                    }
                    $("#lblOtpTitle").setVisible(true);

                },
                failure: function (r) {
                    $(a).addClass("redoIcon").removeClass("spinIcon");
                    hideOtp();
                    $("#lblError").show().html("Error Occured. Please try later");
                }
             });
            $(a).removeClass("redoIcon").addClass("spinIcon");          
            $("#lblOtpTitle").setVisible(false);
        }
        function submitOtp(a) {
            if ($("#btnSubmitOtp").hasClass("spinIcon"))
                return;
            if ($("#btnResendOtp").hasClass("spinIcon"))
                return;
            if ($("#txtOtp").val().length < 3) {
                $("#lblOtpErr").show().html("Invalid OTP");
                return;
            }         
            $("#lblOtpErr").hide();
            $("#btnSubmitOtp").addClass("spinIcon")
            $.ajax({
                crossDomain: true,
                type: "GET",
                url: '<%=Page.ResolveClientUrl("~/core/erpapi.asmx")%>/Mfa',
                data: { type: "AuthenticateOtp", otp: $("#txtOtp").val()},
                contentType: "application/json; charset=utf-8",
                dataType: "jsonp",
                success: function (r) {
                   
                    if (r["success"]) {
                        //hideOtp();                        
                        navigateToHome();
                    }
                    else if (r["Reset"]) {
                        $("#btnSubmitOtp").removeClass("spinIcon")
                        hideOtp();
                        $("#lblError").show().html("Error Occured. Please try later");
                    }
                    else {
                        $("#btnSubmitOtp").removeClass("spinIcon")
                        $("#lblOtpErr").show().html("Invalid OTP");
                    }

                },
                failure: function (r) { $("#lblError").show().html("Error Occured. Please try later"); $("#btnSubmitOtp").removeClass("spinIcon"); }
            });
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
                $("#btnResendOtp").data("intvl", s)
            }, 1000);
        }


    </script>
    <script>
        if (Modernizr.isios)
            $("#ifrHost").attr("scrolling", "no").css("overflow-y","scroll");
        $(function () {
            $("#txtUser").val($.defaultVal("<%=ErpModel.Globals.Users.LoginUsername%>", $.defaultVal($.QS("u"), $.QS("usn"))))

            if ($("#ddlDb").children().length == 2 || !$("#ddlDb").isVisible()) {
                $("#ddlDb").closest("._ddl").hide();
            }
            //else
            //    $("#ddlDb").formSelect();
            window.setTimeout(function () {              
                if ($("#txtUser").is(":-webkit-autofill") || $("#txtUser").val()!="")
                    $("#txtUser").next().addClass('stay')
                if ($("#txtPassword").is(":-webkit-autofill") || $("#txtPassword").val() != "")
                    $("#txtPassword").next().addClass('stay')
            }, 100);
        });

        function showHome() {
            $("#imgLoader").show().addClass("anim");

            window.setTimeout(function () {
                $("#btnLogin").show(); $("#imgLoader").hide().removeClass("anim");
                if ($("#btnSubmitOtp").hasClass("spinIcon")) {
                    hideOtp();
                    $("#btnSubmitOtp").removeClass("spinIcon")
                }
                $(document.documentElement).addClass("showHome");
            },600);
        }

        function loginUser() {
            $(document.activeElement).blur();
            var db = $("#ddlDb").val();
            if ($.isEmpty(db)) {
                alert("Please select database");
                return false;
            }
            $("#imgLoader").show();
            $("#lblError,#btnLogin").hide();
            $.ajax({
                crossDomain: true,
                type: "GET",
                url: '<%=Page.ResolveClientUrl("~/core/erpapi.asmx")%>/AuthenticateUser',
                data: { userName: $("#txtUser").val(), password: Crypto["\x65\x6E\x63\x6F\x64\x65"]($("#txtPassword").val(), "\x31\x32\x31\x39"), companyCode: "", key: "<%=Key%>", db: db, KeepSession: true },
                contentType: "application/json; charset=utf-8",
                dataType: "jsonp",
                success: function (r) {
                    if (r["success"] == false) {
                        $("#imgLoader").hide();
                        $("#lblError").html(r["message"]);
                        $("#lblError,#btnLogin").show();
                        return;
                    }
                    var _u = ($.isEmpty(currentAppUrl) ? "<%=Page.ResolveClientUrl("~/main/default.aspx")%>" : currentAppUrl);
                    _u += (_u.indexOf("?") > -1 ? "&" : "?") + '_devid=' + encodeURIComponent($.QS("_devid")) + '&_token=' + encodeURIComponent($.QS("_token")) + '&_os=' + encodeURIComponent($.QS("_os")) + '&_axn=' + encodeURIComponent(window.__MobileNotifyAction ? window.__MobileNotifyAction : "") + '&_ap=<%=HttpUtility.UrlEncode(HelperLib.Conversion.C.Encrypt(AppID, "qs pwd"))%>'
                    window.__successUrl = _u;
                    if (r["ShowMFA"] == true) {
                        $("#imgLoader").hide();
                        $("#btnLogin").show();
                        $("#lblOtpTitle").html(r["MFA_Msg"])
                        if (r["TOTP"] == true)
                            $("#btnResendOtp").hide().data("totp", true);
                        
                        if (r["Register2FA"]) {
                            $("#div2f").children("iframe").attr("src", "<%=Page.ResolveClientUrl("~/system/2fa.aspx")%>"); $(document.documentElement).addClass("show2fa");
                        }
                        else
                            showOtp();
                    }
                    else {
                        navigateToHome();
                    }

                    //$("#imgLoader").hide();

                },
                failure: function (r) { $("#lblError,#btnLogin").show(); $("#imgLoader").hide(); }
            });
            return false;
        }

        function submitForgotPass(a) {
            if ($(a).hasClass("spinIcon"))
                return;
            var db = $("#ddlDb").val();
            if ($.isEmpty(db)) {
                alert("Please select database");
                return false;
            }
            $(a).addClass("spinIcon");
            $("#lblfgtmsg").hide().removeClass("success").addClass("error")
            $.ajax({
                crossDomain: true,
                type: "GET",
                url: '<%=Page.ResolveClientUrl("~/core/erpapi.asmx")%>/ForgotPassword',
                data: { p: $("#registeredemailid").val(), z: $("#loginusernamef").val(), mk: "<%=Key%>", cd: db },
                contentType: "application/json; charset=utf-8",
                dataType: "jsonp",
                success: function (r) {
                    $(a).removeClass("spinIcon");
                    if (r["success"] == true) 
                        $("#lblfgtmsg").addClass("success").removeClass("error")
                    else
                        $("#lblfgtmsg").removeClass("success").addClass("error")
                    $("#lblfgtmsg").show().html(r["message"]);
                },
                failure: function (r) { $(a).removeClass("spinIcon"); $("#lblfgtmsg").show().html("Error occured..."); }
            })

        }

        function navigateToHome() {
            __isAuthenticated = true;
            $(document.documentElement).removeClass("show2fa");
            var db = $("#ddlDb").val();
            $("#imgLoader").show();
            $("#lblError,#btnLogin").hide();
            if (typeof Native == "function")
                Native("callback", { Type: "HideButton", User: $("#txtUser").val(), Db: db });
            if (!$.isEmpty(currentAppUrl))
                showHome();
            
            $("#ifrHost").attr("src", window.__successUrl);
        }
       
        function logoutApp() {
            if (typeof Native == "function")
                Native("callback", { Type: "ShowButton" });
            $(document.documentElement).removeClass("showHome");
            $("#ifrHost")[0].contentWindow.onbeforeunload = null;
            $("#ifrHost").attr("src", "<%=Page.ResolveClientUrl("~/system/logout.aspx")%>?mob=1");
           
            __isAuthenticated = false;
        }
       


        function _switchCompany(url) {
            window.location = (window.location.href.indexOf("?") > -1 ? window.location.href.substring(0, window.location.href.indexOf("?")) : window.location.href) + "?" + url;
        }
        function SocialLoginEvent(a) {
            var db = $("#ddlDb").val();
            if ($.isEmpty(db)) {
                alert("Please select database");
                return false;
            }
            var u = window.location.origin;
            u += "<%=Request.ApplicationPath%>"; u = u.Trim('/');
            var s = "<%=Key%>" + "^" + db + "~" + $("#ddlDb").selectedItem().text() + "~<%=AppID%>~" + encodeURIComponent($.QS("_devid")) + "~" + encodeURIComponent($.QS("_token")) + "~" + encodeURIComponent($.QS("_os")) + "~" + encodeURIComponent(window.__MobileNotifyAction ? window.__MobileNotifyAction : "") + "~M|" + u;
            SocialLogin.SetUserData(s);
        }



        function MobileCallback(commandName,data) {
            if (window.__mobileCommandName == commandName && typeof __mobileCallback == "function") {
                __mobileCallback(commandName, data);
                __mobileCallback = null;
            }
            if (commandName.indexOf("SYS.NOTIFICATIONACTION") > -1) {
                var ifr=$("#ifrHost");
                if (ifr[0].contentWindow && typeof ifr[0].contentWindow.__OpenMobileNotification == "function")
                    ifr[0].contentWindow.__OpenMobileNotification.call(ifr[0].contentWindow,data)
                else {
                    window.__MobileNotifyAction = data;
                }
            }
        }


        function __nativeLoaded() {
            if (typeof Native != "function" && typeof FlutterNative != "object") {
                window.setTimeout(__nativeLoaded, 100);                
                return;
            }
            if (typeof FlutterNative == "object") {
                window.Native = function (type, data) {
                    var message = JSON.stringify(data);
                    FlutterNative.postMessage(message);
                }
            }

            if ($("#divHome").isVisible())
                Native("callback", { Type: "HideButton" });

            Native("callback", { Type: "HideLoader" });
        }
        __nativeLoaded();

        
       
    </script>
    <style>
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active  {
         transition: background-color 5000s;
            -webkit-text-fill-color: #fff !important;
            -webkit-box-shadow: 0 0 0 8px #2d2c2c, 0 0 0 30px #2d2c2c inset !important;
        }

    </style>
</body>

</html>
