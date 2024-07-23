<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="2fa.aspx.cs" Inherits="SensysErp.Meta._2fa" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title></title>

</head>
<body>
    <form id="form1" runat="server">
        <asp:ScriptManager ID="scr" EnablePageMethods="true" runat="server"></asp:ScriptManager>
        <%= HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
        <%= HelperLib.Web.WebResources.GetResource("~/fonts/font.css")%>
        <%= HelperLib.Web.WebResources.GetResource("~/css/base.css")%>
        <div class="divMain">
            <div class="loader">
                <div class="loader__element"></div>
            </div>
            <div class="divTitle"><span></span>Setup Two Factor Authentication</div>
            <ul style="list-style: decimal;">
                <li>Install an Authenticator APP like Google Authenticator or Microsoft Authenticator on your phone</li>
                <li>
                    <div>Scan the QR code below with the app</div>
                    <telerik:RadBarcode runat="server" ID="RadBarcode1" Type="QRCode" Width="400px" Height="405px">
                    </telerik:RadBarcode>
                    <div style="text-align: center; margin-left: -25px; margin-bottom: 5px; color: #cdcdcd; font-size: 18px;">
                        OR
                    </div>
                    <div onclick="$('.divCode').toggle()" style="color: #cdcdcd; text-align: center; margin-left: -25px; text-decoration: underline; cursor: pointer">
                        Click here if you have problem scanning the QR code.
                    </div>
                    <div class="divCode" style="display: none">
                        <div>Your Secret key is : </div>
                        <asp:Literal ID="lblCode" runat="server"  Mode="PassThrough"></asp:Literal>
                    </div>
                </li>
                <li>Enter the six digit code generated from the authenticator app<br />
                    <div id="lblErr">Invalid OTP</div>
                    <div style="text-align: center; margin-left: -25px; margin-top: 10px;">
                        <span class="txt"></span>
                        <asp:TextBox TextMode="Phone" ID="txtCode" MaxLength="6" runat="server"></asp:TextBox>
                        <a id="btnReg" class="mdl-button">Register</a> <a id="btnCancel" class="mdl-button">Cancel</a>
                    </div>
                </li>
            </ul>
        </div>
        <style>
            html {
                background:#fff;
            }
            .divMain {
                margin: 0 auto;
                max-width: 500px;               
                border: solid 1px white;
                padding: 25px;
                box-shadow: 0 0 15px #c5c5c5;
                font-family: 'Roboto';
                position: relative;
                margin-top: 25px;
            }

            .divTitle {
                font-size: 28px;
                border-bottom: solid 1px #dddddd;
                padding-bottom: 15px;
                margin-bottom: 15px;
            }

                .divTitle span:before {
                    font-family: fontawesome;
                    content: "\f029";
                    margin-right: 10px;
                }

            .RadBarcode {
                display: block !important;
                text-align: center;
                padding: 25px 0;
                margin-left: -25px;
                height: initial !important;
                width: initial !important;
                padding-bottom: 0;
            }

            .divCode {
                padding: 15px 0;
                box-shadow: inset 0 0 15px #fdfdfd;
                text-align: center;
                border: solid 1px #bbbbbb;
                margin-left: -25px;
                margin-top: 10px;
                font-size: 12px;
            }

                .divCode span {
                    background-color: #efffef;
                    display: inline-block;
                    margin-top: 5px;
                    font-weight: bold;
                    font-size: 12px;
                    padding: 5px 3px 5px 3px;
                }

            ul li {
                margin-top: 15px;
            }

            #txtCode {
                font-family: nunitolight;
                letter-spacing: 2px;
                font-size: 28px;
                width: 120px;
                text-align: center;
                margin-top: 10px;
                border: solid 1px #d9d7d7;
            }

            span.txt:before {
                font-family: fontawesome;
                content: "\f00a";
                font-size: 28px;
                color: #dfdfdf;
                margin-right: 8px;
            }

            #btnReg,#btnCancel {
                background-color: #2ac14b;
                font-size: 18px;
                color: #fff;
                display: inline-block;
                vertical-align: top;
                padding: 10px 15px;
                margin-top: 10px;
                cursor: pointer;
                font-family: Roboto;
            }

            #btnCancel {
                background-color: #efefef;  
                color: red;              
            }

            #lblErr {
                color: red;
                text-align: center;
                margin-top: 15px;
                margin-left: -25px;
                font-size: 16px;
                font-weight: bold;
                text-shadow: 0 0 10px #d1a4a4;
                display: none;
            }
        </style>
        <style>
            :root {
                --main-color: #111;
                --loader-color: #4CAF50;
                --back-color: #A5D6A7;
                --time: 1s;
                --size: 3px;
            }

            .loader {
                display:none;
                background-color: var(--main-color);
                overflow: hidden;
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;                
                align-items: center;
                align-content: center;
                justify-content: flex-start;
                z-index: 100000;
            }

            .loading .loader {
                display: flex;
            }

            .loader__element {
                height: var(--size);
                width: 100%;
                background: var(--back-color);
            }

                .loader__element:before {
                    content: '';
                    display: block;
                    background-color: var(--loader-color);
                    height: var(--size);
                    width: 0;
                    animation: getWidth var(--time) ease-in infinite;
                }

            @keyframes getWidth {
                100% {
                    width: 100%;
                }
            }
        </style>
        <script>

            $(document.documentElement).keypress(function (event) { enter(event) });
            function enter(event) {
                if (event.keyCode == 13) {
                    event.preventDefault();
                    $("#btnReg").click();
                }
            }

            $("#btnCancel").on("click", function () {
                if (frameElement && parent.LoginScreen)
                    parent.location = parent.location;
                else if (frameElement && parent.IsWrapperPage) 
                    parent._closeWin();
            })
            $("#btnReg").on("click", function () {
                if ($(document.documentElement).hasClass("loading"))
                    return;
                $("#lblErr").hide();

                if ($("#txtCode").val().length < 3) {
                    $("#lblErr").show();
                    return;
                }
                $(document.documentElement).addClass("loading");
               
                PageMethods.Mfa({ OTP: $("#txtCode").val() }, function (r) {
                    $(document.documentElement).removeClass("loading");
                    if (r["Success"]) {
                        if (frameElement && parent.MobileLogin)
                            parent.navigateToHome();
                        else if (frameElement && parent.LoginScreen)
                            parent.location = parent.__successUrl;
                        else if (frameElement && parent.IsWrapperPage) {
                            parent._closeWin();
                            parent.parent.Erp.ShowMessage('Secret key successfully reset', 'success');
                        }
                    }                   
                    else {
                        $("#lblErr").show()
                    }
                }, function () {
                    $(document.documentElement).addClass("loading");
                });
            })
        </script>
    </form>
</body>
</html>
