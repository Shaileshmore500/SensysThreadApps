<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="App_Store.aspx.cs" Inherits="SensysErp.Meta.App_Store" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">

        //window.title="title"


    </script>



    <script type="text/javascript">

        var installedApps = [];
        var serviceUrl = "";
        var requiresRestart = false;
    </script>
    <style type="text/css">
        html
        {
            overflow-y: hidden;
            height: 97%;
        }

        body, form
        {
            height: 100%;
        }

        #pnlCtr
        {
            height: 97%;
            width: 98%;
            border: solid 1px gray;
            position: relative;
        }

            #pnlCtr > div
            {
                height: 100%;
                width: 100%;
            }

        .app-item
        {
            float: left;
            margin: 10px;
            border: solid 1px #CCC9C9;
            text-align: center;
            font-family: nunitoregular;
            font-weight: normal;
            position: relative;
            cursor: pointer;
            background-color: #F7F3F3;
            color: #000;
        }

            .app-item.UPDATE
            {
                background: #fee7e6; /* Old browsers */
                background: -moz-linear-gradient(top, #fee7e6 0%, #fee5e2 50%, #ffdbd5 51%, #fee8e4 100%); /* FF3.6+ */
                background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#fee7e6), color-stop(50%,#fee5e2), color-stop(51%,#ffdbd5), color-stop(100%,#fee8e4)); /* Chrome,Safari4+ */
                background: -webkit-linear-gradient(top, #fee7e6 0%,#fee5e2 50%,#ffdbd5 51%,#fee8e4 100%); /* Chrome10+,Safari5.1+ */
                background: -o-linear-gradient(top, #fee7e6 0%,#fee5e2 50%,#ffdbd5 51%,#fee8e4 100%); /* Opera 11.10+ */
                background: -ms-linear-gradient(top, #fee7e6 0%,#fee5e2 50%,#ffdbd5 51%,#fee8e4 100%); /* IE10+ */
                background: linear-gradient(to bottom, #fee7e6 0%,#fee5e2 50%,#ffdbd5 51%,#fee8e4 100%); /* W3C */
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fee7e6', endColorstr='#fee8e4',GradientType=0 ); /* IE6-9 */
            }

                .app-item.UPDATE:hover, .app-item:hover
                {
                    background: #fef8ea; /* Old browsers */
                    background: -moz-linear-gradient(top, #fef8ea 0%, #fef0c8 50%, #ffe9ad 51%, #fef5de 100%); /* FF3.6+ */
                    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#fef8ea), color-stop(50%,#fef0c8), color-stop(51%,#ffe9ad), color-stop(100%,#fef5de)); /* Chrome,Safari4+ */
                    background: -webkit-linear-gradient(top, #fef8ea 0%,#fef0c8 50%,#ffe9ad 51%,#fef5de 100%); /* Chrome10+,Safari5.1+ */
                    background: -o-linear-gradient(top, #fef8ea 0%,#fef0c8 50%,#ffe9ad 51%,#fef5de 100%); /* Opera 11.10+ */
                    background: -ms-linear-gradient(top, #fef8ea 0%,#fef0c8 50%,#ffe9ad 51%,#fef5de 100%); /* IE10+ */
                    background: linear-gradient(to bottom, #fef8ea 0%,#fef0c8 50%,#ffe9ad 51%,#fef5de 100%); /* W3C */
                    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fef8ea', endColorstr='#fef5de',GradientType=0 ); /* IE6-9 */
                }


        .appname
        {
            color: #000;
            font-size: 16px;
            font-family: nunitoregular;
            font-weight: bold;
            white-space: nowrap;
            width: 270px;
            text-overflow: ellipsis;
            overflow-x: hidden;
            display: block;
            text-transform: capitalize;
            margin-top: 3px;
            text-align: left;
        }

        .lbl
        {
            font-size: 12px;
            width: 48px;
            display: inline-block;
            vertical-align: middle;
        }

        .version, .resdate
        {
            vertical-align: middle;
            font-size: 12px;
            font-weight: bold;
            vertical-align: middle;
        }

        .app-item.UPDATE .version
        {
            color: red;
        }

        .detlAppName
        {
            font-family: nunitoregular;
            font-size: 33px;
            white-space: nowrap;
            display: block;
            text-overflow: ellipsis;
            overflow-x: hidden;
            width: 100%;
        }

        .detlVersion
        {
            font-size: 12px;
            font-family: nunitobold;
            color: #000;
        }

        .bullet
        {
            font-family: fontawesome;
            text-decoration: none;
            color: #808080;
            text-shadow: 1px 1px 3px #8A8A8A;
            margin-left: 3px;
            outline: none !important;
        }

            .bullet:before
            {
                content: "\f10c";
            }

            .bullet.active
            {
                color: #FDD100;
                text-shadow: 1px 1px 3px #8C7901;
            }

                .bullet.active:before
                {
                    content: "\f111";
                }

                .bullet.active.imgProg
                {
                    display: inline;
                    background-image: url(../images/loader_small.gif);
                    color: transparent;
                    text-shadow: none;
                    background-repeat: no-repeat;
                    background-position-y: 2px;
                }
    </style>

    <style>
        .tabCtr
        {
            padding: 0;
            height: 27px;
            margin: 0;
            background-color: #F1EEEE;
            margin-right: 34px;
        }

            .tabCtr li
            {
                display: inline-block;
                cursor: pointer;
                text-align: center;
                padding: 4px 10px 4px 10px;
                font-family: nunitoregular;
                font-size: 14px;
                list-style-type: none;
                text-transform: capitalize;
                float: left;
                position: relative;
                margin-left: 1px;
            }


                .tabCtr li.selectedtab, .tabCtr li:hover
                {
                    background-color: #383838;
                    color: #fff;
                }

                    .tabCtr li.selectedtab:after
                    {
                        content: "";
                        display: block;
                        border: solid 10px transparent;
                        border-top-color: #383838;
                        top: 26px;
                        left: 50%;
                        margin-left: -10px;
                        position: absolute;
                        z-index: 10;
                    }

        .DarkTheme #tabCtr
        {
            background-color: #696565;
        }

            .DarkTheme #tabCtr li.selectedtab, .DarkTheme #tabCtr li:hover
            {
                background-color: #F80;
            }

                .DarkTheme #tabCtr li.selectedtab:after
                {
                    border-top-color: #F80;
                }

        .installbtn
        {
            padding: 8px 15px 8px 11px;
            color: #FFF;
            font-size: 16px;
            text-align: center;
            display: inline-block;
            white-space: nowrap;
            cursor: pointer;
            font-family: nunitoregular;
            border-radius: 0;
            background-color: #19961A;
            text-decoration: none;
            text-transform: uppercase;
        }

            .installbtn.Prog
            {
                background-image: url(../images/loader_small.gif);
                color: rgba(0, 0, 0, 0);
                text-shadow: none;
                background-repeat: no-repeat;
                background-position: center center;
            }

            .installbtn:hover
            {
                background-color: #31633F;
                transition: 1s;
            }

            .installbtn._repair:before
            {
                font-family: FontAwesome;
                content: "\f0ad";
                margin-right: 5px;
            }

            .installbtn._install:before
            {
                font-family: FontAwesome;
                content: "\f019";
                margin-right: 5px;
            }

            .installbtn._repair
            {
                background-color: #777573;
            }

                .installbtn._repair:hover
                {
                    background-color: #E85406;
                }

        #btnAppAction
        {
            padding-left: 10px;
            padding-right: 6px;
            border-left: solid 3px #67D647;
            text-decoration: none;
        }

            #btnAppAction._repair
            {
                border-left-color: #A5A4A4;
            }

            #btnAppAction:before
            {
                font-family: FontAwesome;
                content: "\f013";
            }

        .divReqApp:hover
        {
            background-color: rgb(128, 128, 128); /*#ffdcb0;*/
        }

        #divDtls
        {
            font-family: nunitoregular;
        }

            #divDtls > div
            {
                height: 100%;
                font-size: 14px;
                padding: 10px;
                box-sizing: border-box;
                -moz-box-sizing: border-box;
                clear: both;
            }

        .btnSync
        {
            font-size: 18px;
            font-family: nunitoregular;
            color: #FF0678;
            margin-left: 20px;
        }

            .btnSync:before
            {
                font-family: FontAwesome;
                content: "\f079";
                display: inline-block;
                margin-right: 5px;
                font-size: 20px;
                vertical-align: middle;
            }

            .btnSync:hover
            {
                color: red;
            }

        .lblSyncDate
        {
            color: #ABABAB;
            font-style: italic;
            display: block;
            margin-left: 50px;
            font-size: 12px;
            font-family: nunitoregular;
        }

        #divManualInstall
        {
            border-top-style: solid;
            border-top-width: 1px;
            border-top-color: #616161;
            display: none;
            position: absolute;
            bottom: 6px;
            left: 10px;
            right: 10px;
            padding-top: 10px;
        }

        #divRestart
        {
            position: absolute;
            top: 17px;
            left: 20px;
            right: 20px;
            background-color: #FFF4BE;
            padding: 5px;
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            border: solid 1px #FF7E00;
            display: none;
        }



        #divAppActions
        {
            width: 400px;          
        }

            #divManualInstall ._update,
            #divAppActions ._title          
            {
                display: block;
                font-size: 20px;
                font-family: nunitolight;
            }

            #divAppActions a
            {
                display: inline-block;
                margin-left: 20px;
                font-size: 15px;
                outline: none !important;
            }

            #divAppActions ._repair,
            #divAppActions ._update
            {
            }

            #divAppActions ._uninstall
            {
            }
            #divManualInstall ._update:before,
            #divAppActions ._update:before
            {
                font-family: FontAwesome;
                content: "\f019";
                margin-right: 5px;
            }

            #divAppActions ._repair:before
            {
                font-family: FontAwesome;
                content: "\f0ad";
                margin-right: 5px;
            }

            #divAppActions ._uninstall:before
            {
                font-family: FontAwesome;
                content: "\f056";
                margin-right: 5px;
            }
    </style>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <hlp:ActionMessage ID="ActionMessage1" runat="server" />
    <div id="divCtrMain" style="height: 100%; width: 100%; box-sizing: border-box; -moz-box-sizing: border-box">
        <div id="divRestart">
            <span style="font-family: OpenSans; font-size: 28px; color: #A91A00;">Application needs to be restarted to finalise installation of recently installed apps.</span><a class="IconBtn RedButton"
                id="btnRestart" style="float: right; min-width: 175px;" onclick="restartApp(this)" href="javascript:void(0)"><span>&#xf021;</span>Restart Now ...</a>
        </div>
        <ul class="tabCtr" id="tabCtr" style="">
            <li id="tabInstall" onclick="return ShowApps(this,'I')">Installed Apps </li>
            <li id="tabNew" onclick="return ShowApps(this,'N')">New Apps </li>
            <li id="tabLicense" onclick="return ShowApps(this,'Lic')">App Licenses</li>
            <li id="tabSetting" onclick="return ShowApps(this,'S')">Settings </li>           
            <li id="tabRegistration" onclick="return ShowApps(this,'Reg')">Registration Information</li>
            <li id="tabRemote" onclick="return ShowApps(this,'R')">Remote Support</li>
        </ul>
        <div id="pnlCtr" style="">


            <div id="pnlAppList" style="display: none; overflow-y: auto; padding-left: 10px; padding-top: 10px; box-sizing: border-box; -moz-box-sizing: border-box;">
                <div id="divManualInstall">
                    <asp:Panel ID="pnlManual" runat="server">
                        <a class="_update entity-link" style="font-size: 16px;text-decoration: none;cursor: pointer;" onclick='$("#divAppActions").ShowModal({ showClose: true, autoClose: false}).children().hide().filter("._offline,.pClose").show()' href="javascript:void(0)">Install Apps Manually</a>
                    </asp:Panel>
                </div>
                <asp:Repeater ID="rptrStore" runat="server">
                    <ItemTemplate>
                        <div id='div-<%#Eval("resourceid") %>' class='<%# "app-item " + Eval("resclass")+" "+Eval("action")  %>' onclick="return ShowDetails(this)"
                            resid='<%#Eval("resourceid") %>' version='<%#Eval("resversion")%>'
                            action='<%# Eval("action") %>' actionkey='<%# Eval("actionkey") %>' maximg='<%# HelperLib.Conversion.C.Int(Eval("maximg")) %>'>
                            <div>
                                <table>
                                    <tr>
                                        <td style="width: 80px; align-content: center">
                                            <telerik:RadBinaryImage ID="rbiApp" CssClass="iconImg" runat="server" ImageUrl='<%# HelperLib.Conversion.C.Str(Eval("iconurl")) %>' Height="64px" Width="64px" />
                                        </td>
                                        <td style="vertical-align: top; text-align: left">
                                            <span class="appname" title='<%# HelperLib.Conversion.C.StrDBSafe(Eval("resourcename")) %>'>
                                                <%#Eval("resourcename") %>
                                            </span>
                                            <div><span class="lbl">Version : </span><span class="version"><%# HelperLib.Conversion.C.IsBlank(Eval("resversion")) ? "N/A" : Eval("resversion") %></span></div>
                                            <div style="margin-top: 1px"><span class="lbl">Date : </span><span class="resdate"><%# Eval("resdate") %></span></div>
                                            <div class="description" style="height: 70px; width: 180px; overflow-x: auto; display: none"><%# HelperLib.Conversion.C.Str(Eval("resdes")).Length > 200 ? HelperLib.Conversion.C.Str(Eval("resdes")).Substring(0, 130)  + " ..." : HelperLib.Conversion.C.Str(Eval("resdes")) %></div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div style="display: none" class="_hidden">
                                <div class="_detail"><%# HelperLib.Conversion.C.Str(Eval("resDetails")) %></div>
                                <div class="_log"><%# HelperLib.Conversion.C.Str(Eval("versionlog")) %></div>
                                <div class="_tag"><%# HelperLib.Conversion.C.Str(Eval("tag")) %></div>
                                <div class="_req"><%# HelperLib.Conversion.C.Str(Eval("RequiredResources")) %></div>
                                <div class="__req"><%# HelperLib.Conversion.C.Str(Eval("_RequiredResources")) %></div>
                            </div>
                        </div>
                    </ItemTemplate>
                    <FooterTemplate>
                    </FooterTemplate>
                </asp:Repeater>
            </div>
            <div id="pnlSettings" style="display: none;">
                <div id="pnlSettingsSync" style="border-bottom: solid 1px #DBDBDB; padding-bottom: 8px; padding-top: 5px;">
                    <a href="javascript:void(0)" class="btnSync" onclick="syncSettings(this)">Synchronise Settings From Server</a>
                    <span class="lblSyncDate">Last synced on :
                        <asp:Label ID="lblSyncDate" runat="server"></asp:Label></span>
                </div>
                <iframe id="ifrSettings" frameborder="0" style="height: 85%; width: 100%"></iframe>
            </div>
             <div id="pnlAppLicense" style="display: none">
                  <iframe id="ifrAppLic" frameborder="0" style="height: 100%; width: 100%" ></iframe>
                </div>
            <div id="pnlReg" style="display: none">
                <iframe id="ifrLic" frameborder="0" style="height: 100%; width: 100%" src="../System/Support_RegisterCompany.aspx"></iframe>

            </div>
            <div id="pnlRemote" style="display: none">
                <iframe id="ifrRemote" frameborder="0" style="height: 100%; width: 100%"></iframe>

            </div>
        </div>
    </div>

    <asp:Panel ID="pnlAppDetails" runat="server" Width="1000px" Style="background-color: #fff; color: #000; box-shadow: 2px 2px 5px #2F2F2F; padding: 3px; display: none; border: 2px solid #8C8C8C;" CssClass="pnlDetails">
        <div style="border-bottom: solid 1px #D4D4D4; margin-bottom: 10px;">
            <span style="vertical-align: middle; height: 75px; width: 75px; display: inline-block; text-align: center;">
                <telerik:RadBinaryImage ID="imgApp" runat="server" Height="64px" Width="64px" /></span>
            <span style="display: inline-block; width: 730px; margin-left: 10px; vertical-align: middle;">
                <span id="spnappname" class="detlAppName"></span>
                <span style="font-size: 11px; font-family: nunitoregular; color: #696868;">&nbsp;&nbsp;&nbsp;Version : <span id="spnVersion" class="detlVersion"></span>&nbsp;&nbsp;&nbsp;Date : <span id="spnDate" class="detlVersion"></span></span></span>
            <span style="float: right; margin-top: 10px; margin-right: 20px;"><a id="btnInstall" style="width: 95px" onclick="return DownloadApp(this)" href="javascript:void(0)" class="installbtn"></a><a id="btnAppAction" class="installbtn" onclick="showActionDlg(this)" href="javascript:void(0)"></a></span>
        </div>
        <ul class="tabCtr" style="margin-left: 10px; margin-right: 15px" id="tabCtr2">
            <li onclick="return ShowTabs('Des',this)">General</li>
            <li id="tabDtl" onclick="return ShowTabs('Dtl',this)">Details</li>
            <li id="tabCL" onclick="return ShowTabs('Log',this)">Change Logs</li>
            <li id="tabPreReq" onclick="return ShowTabs('Pre',this)">Prerequisites</li>
        </ul>
        <div id="divDtls" style="height: 350px;">
            <div id="divGeneral">
                <div id="divShots" style="text-align: center; width: 650px; float: left">
                    <span style="margin-top: -10px; display: block; margin-bottom: 10px;" id="bulletCtr">
                        <a class="bullet" href="javascript:void(0)" onclick="ShowScreenShots(this, 1)"></a>
                        <a class="bullet" href="javascript:void(0)" onclick="ShowScreenShots(this, 2)"></a>
                        <a class="bullet" href="javascript:void(0)" onclick="ShowScreenShots(this, 3)"></a>
                        <a class="bullet" href="javascript:void(0)" onclick="ShowScreenShots(this, 4)"></a>
                        <a class="bullet" href="javascript:void(0)" onclick="ShowScreenShots(this, 5)"></a></span>
                    <div id="divScreens" style="height: 300px; text-align: center; overflow: hidden;">
                        <telerik:RadBinaryImage onclick="window.open($(this).attr('src'))" ID="rbiScreenShots" runat="server" ToolTip="Click To View In New Window" Style="height: 100%; cursor: pointer" />
                    </div>
                </div>
                <div id="divDes" style="float: left; background-color: #fff; margin-top: -37px; padding-top: 5px; overflow-y: auto; height: 350px; width: 315px; font-size: 14px; border-left: solid 1px #C3C3C3; padding-left: 10px;">
                </div>
            </div>
            <div id="divDetails" style="overflow: auto;">
            </div>
            <div id="divTag" style="overflow: auto;"></div>
            <div id="divLog" style="overflow: auto;"></div>
            <div id="divRequired" style="display: none; margin-left: 20px; margin-right: 20px; padding-top: 15px; height: 80%; overflow-y: auto">
            </div>
            <div id="div_Required" style="display: none">
            </div>
        </div>
    </asp:Panel>
    <div id="divAppActions" style="display: none" class="formSettings">
        <span class="_update _title">Update</span>
        <a class="_update mdl-button BlueColor" action="UPDATE" href="javascript:void(0)" onclick="DownloadApp(this)">Update App And Keep My Customisations</a>
        <a class="_update mdl-button BlueColor" action="UPDATEOVERWRITE" href="javascript:void(0)" onclick="DownloadApp(this)">Update App And Overwrite Customisations If Any</a>
        <span class="_repair _title">Repair</span>
        <a class="_repair mdl-button BlueColor" action="REPAIR" href="javascript:void(0)" onclick="DownloadApp(this)">Repair App And Keep My Customisations</a>
        <a class="_repair mdl-button BlueColor" action="REPAIROVERWRITE" href="javascript:void(0)" onclick="DownloadApp(this)">Repair App And Overwrite Customisations If Any</a>
        <span style="margin-top: 15px; padding-top: 15px; border-top: solid 1px #D0CDCD;" class="_uninstall _title">Uninstall</span>
        <a class="_uninstall mdl-button RedColor" action="DELETEWITHDATA" href="javascript:void(0)" onclick="DownloadApp(this)">Uninstall App Along With Data</a>
        <a class="_uninstall mdl-button RedColor" action="CLEARDATA" href="javascript:void(0)" onclick="DownloadApp(this)">Clear App Data Only, Do Not Uninstall</a>
        <div style="display: none;margin-top: -10px;" class="_offline">
            <span class="_update _title">Install Apps Manually</span>
            <label for="chkOverwrite" style="display: block;    margin-left: 40px;    margin-top: 10px;">Overwrite changes if any <input type="checkbox" id="chkOverwrite"  /></label>
            <telerik:RadAsyncUpload 
                Style=" text-align: left; display: inline-block; vertical-align: middle;margin-left: 40px;margin-top: 10px;" ID="fileUpload" runat="server" DisablePlugins="true"
                TemporaryFolder="~/temp" AllowedFileExtensions="app,lic" MaxFileInputsCount="1" OnClientFileUploading="OnClientFileUploading" OnClientValidationFailed="onValidationFail" OnClientFileUploaded="onClientFileUploaded"
                HttpHandlerUrl="~/Main/AsyncUploader.ashx" MultipleFileSelection="Disabled">
            </telerik:RadAsyncUpload>
            
        </div>
    </div>

    <iframe id="ifrRestart" style="display: none"></iframe>
    <script type="text/javascript">

        var tab = "";
        $(function () {
            ShowApps($("#tabInstall")[0], "I");
            $("#chkOverwrite").CheckBoxX();
            $("#ifrSettings").attr("src", "../system/customsettings.aspx?cat=Security&id=<%=ErpModel.Globals.Users.CompanyGUID%>");
            if (requiresRestart)
                showRestart();
            $("#<%= rbiScreenShots.ClientID %>").error(function () { $(this).show().attr("src", "../images/noimg.png"); });
            $("#<%= rbiScreenShots.ClientID %>").on("load", function () { $(this).show(); $("#bulletCtr").children(".bullet").removeClass("imgProg"); });
        });

        function pageLoad() {
        }
        var _appInstalled = true;
        function ShowApps(btn, mode) {
            $("#tabCtr").children().removeClass("selectedtab");
            $(btn).addClass("selectedtab");
            $("#pnlCtr").children().hide();
            if (mode == "I") {
                $("#pnlAppList").show().css("height", "90%").children(".installed").show();
                $("#pnlAppList").show().children(".new").hide();
                $("#divManualInstall").show();
            }
            else if (mode == "N") {
                $("#pnlAppList").css("height", "").show().children(".installed").hide();
                $("#pnlAppList").show().children(".new").show();
                $("#divManualInstall").hide();
            }
            else if (mode == "S") {
                $("#pnlSettings").show();
            }
            else if (mode == "Reg") {
                $("#pnlReg").show(); 
            }
            else if (mode == "Lic") {
                $("#pnlAppLicense").show();
                if (_appInstalled) {
                    _appInstalled = false;
                    $("#ifrAppLic").attr("src", "../main/main.aspx?1&EID=c.0rfSodKv0pzSkNKa0pDSnNKA0qzSrdKl0qrSpA==&_fc=c.0oLSs9Kz0o%2FSitKg0qbSrdKw0qbSsA%3D%3D&_pt=A&_rspv=1&_reloadCache=1");
                }
            }
            else if (mode == "R") {
                if ($.isEmpty($("#ifrRemote").attr("src")))
                    $("#ifrRemote").attr("src", "../system/support_chat.aspx");
                $("#pnlRemote").show();
            }
            return false;
        }

        var ResID = "", ResName = "", ResVersion = "", ResKey = "", ResAction = "";
        var divcurrentApp = null;
        function ShowDetails(divA) {

            divA = $(divA);
            divcurrentApp = divA;
            var pnl = $("#<%= pnlAppDetails.ClientID %>");
            pnl.ShowModal({
                showClose: true, onClose: function () {
                    if ($("#btnInstall").hasClass("Prog") || $("#btnAppAction").hasClass("Prog")) {
                        alert('Please wait for process to complete.');
                        return false;
                    }
                }
            });
            ResID = divA.attr("resid");
            ResName = divA.find(".appname").text().Trim();
            ResKey = divA.attr("actionkey");
            ResVersion = divA.attr("version");
            ResAction = divA.attr("action");
            $("#btnInstall").attr("class", "installbtn " + (ResAction == "COREAPP" || ResAction == "REPAIR" ? "_repair" : "_install")).html(getButtonText(ResAction)).attr("action", ResAction);
            $("#btnAppAction").attr("class", "installbtn " + (ResAction == "COREAPP" || ResAction == "REPAIR" ? "_repair" : "_install")).setDisplay(ResAction != "INSTALL" && ResAction != "ACTIVATE");
            $("#spnappname").html(divA.find(".appname").html()).attr("title", divA.find(".appname").text().Trim());
            $("#spnVersion").html(divA.find(".version").html());
            $("#spnDate").html(divA.find(".resdate").html());
            $("#divDes").html(divA.find(".description").html());
            $("#divDetails").html(divA.find("._detail").html());
            $("#divLog").html(divA.find("._log").html());
            $("#divRequired").html(divA.find("._req").html());
            $("#div_Required").html(divA.find(".__req").html());

            $("#tabDtl").setDisplay(!$.isEmpty($("#divDetails").html()));
            $("#tabCL").setDisplay(!$.isEmpty($("#divLog").html()))
            $("#tabPreReq").setDisplay(!$.isEmpty($("#divRequired").html()))

            var maxImg = divA.attr("maximg") / 1;
            $("#bulletCtr").children().each(function (i) { $(this).setDisplay(i < maxImg); })
            var iconurl = divA.attr("iconurl");
            $("#<%= imgApp.ClientID %>").attr("src", divA.find(".iconImg").attr("src"));
            ShowTabs('Des', $("#tabCtr2").children(":first"));
            $("#<%= rbiScreenShots.ClientID %>").hide();
            ShowScreenShots($("#bulletCtr").children(".bullet:first"), maxImg == 0 ? 0 : 1);

        }

        function ShowRequiredApp(ctl) {
            var id = $(ctl).attr('requiredId');
            $(ctl).closest('.pnlDetails').HideModal();
            var divApp = $("#div-" + id);
            ShowDetails(divApp);
            return false;
        }

        function getButtonText(action) {
            if (action == "COREAPP")
                return "Repair";
            else if (action == "INSTALL")
                return "Install";
            else if (action == "ACTIVATE")
                return "Install";
            else if (action == "UPDATE")
                return "Update";
            else if (action == "REPAIR")
                return "Repair";
        }

        function showActionDlg(a) {
            if ($("#btnInstall").hasClass("Prog") || $("#btnAppAction").hasClass("Prog"))
                return;
            a = $(a);
            var action = ResAction;
            if (action == "INSTALL" || action == "ACTIVATE")
                return;
            var div = $("#divAppActions");
            div.ShowModal({ showClose: false, autoClose: true }).position({
                my: "right top",
                at: "right bottom",
                of: a,
                collision: "none none"
            });
            div.children("._repair,._update,._offline").hide();

            div.children("._uninstall").setDisplay(action != "COREAPP");
            if (action == "COREAPP" || action == "REPAIR") {
                div.children("._repair").show();
            }
            else if (action == "UPDATE") {
                div.children("._update").show();
            }
        }

        function HideDetails() {
            $("#<%= pnlAppDetails.ClientID %>").HideModal();
        }

        function ShowScreenShots(ctl, no) {
            var src = "";
            var img = $("#<%= rbiScreenShots.ClientID %>").show()
            if (ResID == "CORE")
                src = "../images/core.jpg";
            else if (no == 0)
                src = "../images/noimg.png";
            else
                src = serviceUrl + "ResourceScreenShotHandler.ashx?id=" + ResID + "&no=" + no;
            if (img.attr("src") == src)
                return;
            $("#bulletCtr").children(".bullet").removeClass("active");
            $(ctl).addClass("active imgProg");
            img.attr("src", src);
        }

        function ShowTabs(selTab, ctl) {
            $(ctl).parent().children().removeClass("selectedtab");
            $(ctl).addClass("selectedtab");

            $("#divDtls > div").hide();

            if (selTab == "Des") {
                $("#divGeneral").show();
            }
            else if (selTab == "Dtl") {
                $("#divDetails").show();
            }
            else if (selTab == "Log") {
                $("#divLog").show();
            }
            else if (selTab == "Pre") {
                $("#divRequired").show().find(".iconImg").each(function () { if ($.isEmpty($(this).attr("src"))) $(this).attr("src", $(this).attr("src1")); });

            }

        }


        function syncSettings(a) {
            $.Notify("Synchronising...")
            PageMethods.SyncSettings(function (r) {
                $("#ifrSettings").attr("src", $("#ifrSettings").attr("src"));
                $.Notify(false);
                if (r) {
                    var t = new moment(new Date());
                    $("#<%=lblSyncDate.ClientID%>").html(t.format(Users.ShortDateTimeFormat_MOM));
                    actMessage("Settings successfully synced from server.", "success", 20);
                }
                else
                    actMessage("There was an error in syncing settings. Please try again later.", "alert", 20);
            })
        }
        function DownloadApp(ctl) {
            if ($("#btnInstall").hasClass("Prog") || $("#btnAppAction").hasClass("Prog"))
                return;
            ctl = $(ctl);
            var action=ctl.attr("action");
            
            if ($("#btnAppAction").isVisible() && !confirm(getWarningText(action) + 'Do You Wish To Continue?'))
                return;
            if ($("#divAppActions").isVisible()) {
                $("#divAppActions").HideModal();
                $("#btnAppAction").addClass("Prog");
            }
            else
                $("#btnInstall").addClass("Prog");

            var d = $("#<%= pnlAppDetails.ClientID %>").getOffset();
            var ht = $("#<%= pnlAppDetails.ClientID %>").height() / 2;
            var app = new Object();
            app["ResourceID"] = ResID;
            app["ResourceName"] = ResName;
            app["ResourceKey"] = ResKey;
            app["Action"] =action;
            app["ResourceVersion"] = ResVersion;
            app["Required"] = $("#div_Required").html();
            app["au"] = $.QS("_au");
            PageMethods.InstallApp(app, onSuccess, onError);
            return false;
        }
        function getWarningText(action) {
            if (action == "UPDATEOVERWRITE" || action == "REPAIROVERWRITE")
                return "App Will Be Updated.\nAll Existing Customisations Will Be Deleted For This App.\n";
            else if (action == "DELETEKEEPDATA")
                return "Selected App Will Be Uninstalled\nAny Data If Existing Will not Be Deleted.\n";
            else if (action == "DELETEWITHDATA")
                return "Selected App Will Be Uninstalled Along With All Data.\n";
            else if (action == "CLEARDATA")
                return " All Data In The Selected App Will Be Deleted.\n";
            return "";
        }
        function onSuccess(result) {
            _appInstalled = true;
            $("#btnAppAction,#btnInstall").removeClass("Prog");
            if (result["RestartApp"])
                showRestart();
            if (result["Conflict"] == true)
                window.open('DataBase_Verify_Conflicts.aspx');
            else
                actMessage(result["Message"], result["Success"] ? "success" : "alert", $("#pnlAppList").offset().top);
            if (result["Success"]) {
                if (result["UserAction"] == "DELETEWITHDATA") {
                    HideDetails();
                    divcurrentApp.hide().removeClass("installed").addClass("new");
                    divcurrentApp.attr("action", result["NewResAction"]);
                    divcurrentApp.attr("actionkey", result["NewResActionKey"]);
                }
                else if (result["UserAction"] == "INSTALL") {
                    HideDetails();
                    divcurrentApp.hide().removeClass("new").addClass("installed");
                    divcurrentApp.attr("action", result["NewResAction"]);
                    divcurrentApp.attr("actionkey", result["NewResActionKey"]);
                }
                else {
                    HideDetails();
                    divcurrentApp.attr("class", "app-item installed REPAIR");
                }
            }
        }

        function onError(result) {
            $("#btnAppAction,#btnInstall").removeClass("Prog");
            alert(result["Message"]);
        }

        function onClientFileUploaded(sender, args) {
            var inf = args.get_fileInfo();
            var ext = inf.FileType;
            if (ext == "LIC") {
                var t = new moment(new Date());
                $("#<%=lblSyncDate.ClientID%>").html(t.format(Users.ShortDateTimeFormat_MOM));
                actMessage(inf["Message"], inf["Success"] ? "success" : "alert", $("#pnlAppList").offset().top);
            }
            else {
                onSuccess(inf);
                $("#divAppActions").HideModal();
            }
            sender.deleteAllFileInputs();
        }
        function OnClientFileUploading(sender, args) {
            var ext = args.get_fileName().split('.');
            ext = ext[ext.length - 1].toUpperCase();
            if (ext == "APP" && !confirm("Do you wish to continue installing this app ?")) {
                args.set_cancel(true);
                sender.deleteAllFileInputs();
            }
            else if (ext == "LIC" && !confirm("Do you wish to update settings ?")) {
                args.set_cancel(true);
                sender.deleteAllFileInputs();
            }

            var obj = { Mode: "Install", Overwrite: $("#chkOverwrite").checked() };
            args.set_queryStringParams(obj);
        }

        function onValidationFail(sender, arg) {
            actMessage("File type is not supported.", "alert", 20);
            sender.deleteAllFileInputs();
        }

        function showRestart() {
            if ($("#divRestart").isVisible())
                return;
            $("#divCtrMain").css("padding-top", "62px");
            $("#divRestart").slideToggle();
        }
        function restartApp(a) {
            if (!confirm("Application will be restarted.\nAny unsaved changes will be lost.\nAny users currently using the application will be logged out.\nThis action can be performed later if you want.\nDo you wish to restart the Application?"))
                return;
            a = $(a);
            if (a.hasClass("prog"))
                return;
            a.addClass("prog");
            $.Notify("");
            PageMethods.GetToken(function (r) {
                $("#ifrRestart").attr("src", "../system/restart.aspx?TK=" + r);
            });
        }
        var _restartCount = 0;
        function onRestartComplete(UserAuthenticated, RestartFailed) {

            if (RestartFailed && UserAuthenticated && _restartCount < 5) {
                _restartCount++;
                PageMethods.GetToken(function (r) {
                    $("#ifrRestart").attr("src", "../system/restart.aspx?TK=" + r);
                });
                return;
            }

            if (!UserAuthenticated)
                parent.location = "../system/login.aspx";
            else {
                $("#btnRestart").removeClass("prog");
                $("#divCtrMain").css("padding-top", "");
                $("#divRestart").hide();
                actMessage(RestartFailed ? "There was an issue in finalising the installation<br/>Please try later" : "Application Restarted Succesfully", RestartFailed ? "alert" : "success", 20);
                $.Notify(false);
                _restartCount = 0;
            }
        }
    </script>

</asp:Content>
