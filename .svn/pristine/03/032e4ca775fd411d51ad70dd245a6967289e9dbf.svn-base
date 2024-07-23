<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="Configuration.aspx.cs" Inherits="SensysErp.Meta.Configuration" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>
<%@ Register TagPrefix="wucAudit" TagName="AuditControl" Src="~/Meta/AuditControl.ascx" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <title>Configuration</title>

    <script type="text/javascript">

        //window.title="title"
        document.documentElement.style.overflowX = "hidden"
        document.documentElement.style.overflowY = "hidden"
        var SysConfigPage = true;
    </script>
    <style>
        html, body, form, .divOuterMain
        {
            height: 100%;
        }

        #ContentPlaceHolder1_pnlDevelop
        {
                padding: 3px 10px;
    background: #676767;
    font-size: 12px;
    font-family: Verdana;
    border: solid 2px #4E4E4E;
    text-transform: capitalize;
    color: #00E0FF;
    z-index: 100;
    height: 18px;
    margin-top: -20px;
        }

     

        #ContentPlaceHolder1_lblDevType
        {
            display: inline-block;
    color: #FFE000;
    font-weight: bold;
    font-size: 13px;
    text-decoration: underline;
    vertical-align: middle;
        }

        #ContentPlaceHolder1_lblOwner
        {
             display: inline-block;
    font-weight: bold;
    font-size: 15px;
    margin-left: 10px;
    vertical-align: middle;
    text-shadow: 2px 2px 2px #000;
    white-space: nowrap;
        }

        .activated
        {
            color: #5FC25B !important;
        }

        .sync
        {
            color: #F00;
            font-family: nunitobold;
            font-size: 15px;
            position: absolute;
            right: 175px;
        }

        .rtLI .highlight
        {
            background-color: yellow !important;
            color: red;
        }
    </style>
    <style>
        .toolbar
        {
            height: 32px;
            left: 0;
            width: 100%;
            white-space: nowrap;
            border: solid 2px #DDD;
            border-left: none;
            border-right: none;
            z-index: -1;
            background: rgb(255,255,255); /* Old browsers */
            background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%); /* FF3.6+ */
            background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,1)), color-stop(47%,rgba(246,246,246,1)), color-stop(100%,rgba(237,237,237,1))); /* Chrome,Safari4+ */
            background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(246,246,246,1) 47%,rgba(237,237,237,1) 100%); /* Chrome10+,Safari5.1+ */
            background: -o-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(246,246,246,1) 47%,rgba(237,237,237,1) 100%); /* Opera 11.10+ */
            background: -ms-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(246,246,246,1) 47%,rgba(237,237,237,1) 100%); /* IE10+ */
            background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(246,246,246,1) 47%,rgba(237,237,237,1) 100%); /* W3C */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ededed',GradientType=0 ); /* IE6-9 */
        }

            .toolbar .toolBtn
            {
                min-width: 75px;
                border-right: solid 2px #E6E4FA;
                margin: 0;
                padding: 4px 10px 5px 8px;
                cursor: pointer;
                display: inline-block;
                vertical-align: top;
                font-size: 13px;
                color: #2D64B6;
                font-family: nunitobold;
                text-decoration: none;
                outline: 0 !important;
            }

                .toolbar .toolBtn:hover
                {
                    background-color: #4559E9; /* Old browsers */
                    -webkit-transition: all 0.15s linear;
                    -moz-transition: all 0.15s linear;
                    transition: all 0.15s linear;
                    color: #FFF;
                }


                .toolbar .toolBtn SPAN:before
                {
                    font-family: fontawesome;
                    font-weight: normal;
                    font-size: 22px;
                    margin-right: 8px;
                    border-right: solid 1px #E4E4E4;
                    padding-right: 7px;
                    text-shadow: 2px 2px 3px #FDFDFD;
                    line-height: 22px;
                }

                .toolbar .toolBtn:hover SPAN:before
                {
                    border-right: solid 1px #6F6BC5;
                    text-shadow: 2px 2px 3px #1C22AF;
                    color: #FFF;
                }

            .toolbar .save SPAN:before
            {
                content: "\f0c7";
            }

        #txtSearch
        {
            width: 100%;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            -ms-box-sizing: border-box;
            box-sizing: border-box;
            border: solid 1px #C0C0C0;
            text-indent: 3px;
            padding: 3px;
            color: #808080 !important;
            font-size: 14px !important;
            font-weight: normal !important;
            font-family: nunitolight !important;
            font-style: italic !important;
            text-transform: capitalize;
            outline: 0;
            border-radius: 10px;
            vertical-align: middle;
            text-align: left;
        }

        .cssAdSearch
        {
            font-size: 14px;
            position: relative;
            right: 10px;
            float: right;
            top: 5px;
            color:#676A79;
            text-decoration:none;
            font-style: italic;
            cursor: pointer;
            font-weight:bold;
            
        }

        .cssAdSearch:hover
        {
            color:green;
        }

        .DarkTheme .cssAdSearch
        {
            color: #A5A5A5 !important;
        }
        .DarkTheme .cssAdSearch:hover
        {
           color: #FFF205 !important;
        }
        
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <hlp:ActionMessage ID="ActionMessage1" runat="server" />
    <asp:Panel Visible="false" runat="server" ID="pnlDevelop">
        <asp:Label ID="lblDevType" Text="" runat="server"></asp:Label>
        <asp:Label ID="lblOwner" Text="" runat="server"></asp:Label>
        <asp:LinkButton ID="btnExitDev" OnClick="btnExitDev_Click" runat="server" Style="color: red; font-weight: bold;float:right" Text="Exit Development Mode"></asp:LinkButton>
    </asp:Panel>
    <asp:Panel ID="pnldd" CssClass="toolbar" Style="width: 100%; display: none" runat="server">
        <asp:LinkButton ID="btnApp" CssClass="toolBtn save" runat="server" OnClientClick="return OpenWindow('A')"><span>Add Application</span></asp:LinkButton><asp:LinkButton
            ID="btnModule" runat="server" CssClass="toolBtn save" OnClientClick="return OpenWindow('M')"><span>Add Module</span></asp:LinkButton><asp:LinkButton
                ID="btnEntity" runat="server" CssClass="toolBtn save" OnClientClick="return OpenWindow('E')"><span>Add Entity</span></asp:LinkButton><asp:LinkButton
                    ID="btnVerifyDB" runat="server" CssClass="toolBtn save" OnClick="btnVerifyDB_Click"><span>Generate Database Structure</span></asp:LinkButton><asp:HyperLink
                        ID="btnMenuDesign" runat="server" Target="_blank" NavigateUrl="~/Meta/MenuDesigner.aspx?m=design" CssClass="toolBtn save"><span>Menu Designer</span></asp:HyperLink><asp:HyperLink
                            ID="HyperLink1" runat="server" Target="_blank" NavigateUrl="~/Meta/Workflow_View.aspx" CssClass="toolBtn save"><span>Workflow Designer</span></asp:HyperLink><asp:LinkButton
                                ID="btnAudit" runat="server" Visible="false" CssClass="toolBtn save" OnClick="btnAudit_Click"><span>Audit</span></asp:LinkButton>
        <a href="javascript:void(0)" id="toggleSync" class="sync" onclick="toggleSync(this)">Database Syncing Paused</a>
    </asp:Panel>
    <asp:Panel ID="pnlsplitter" runat="server" Height="97%">
        <telerik:RadSplitter ID="rSptrConfig" runat="server" Height="100%" Width="100%" BorderWidth="0">
            <telerik:RadPane ID="configNvgPanel" runat="server" Width="225px" Height="100%">
                <div style="margin-top: 3px;">
                    <input type="text" id="txtSearch" placeholder="Type to Search"  />
                    
                </div>
                <div style="width:100%;display:inline-block">
                    <a  class="cssAdSearch" target="frmConfig" href="MetaSearch.aspx">Advanced Search</a>
                </div>
                
                <a class="config-menu _app" href="javascript:void(0)">Application</a>
                <telerik:RadTreeView ID="tvConfiguration" runat="server" Visible="true" OnClientNodeClicked="ClientNodeClicked">
                </telerik:RadTreeView>
                <div id="divConfigLinks" onclick="HideCustomSetting()">
                    <a class="createdb" style="border-top: solid 1px #DBDBDB;" onclick="CreateDBStruct()" href="javascript:void(0)">Generate Database Structure</a>
                    <a class="config-menu _verify" target="frmConfig" href="../main/view.aspx?EID=tbl_SYS_Config&_fc=VerifyDb&_pt=V">Update Core Apps</a>
                    <a class="config-menu _menu" target="_blank" href="../main/view.aspx?EID=tbl_SYS_Config&_fc=Menu&_pt=V&m=design&_notools=1">Menu Designer</a>
                    <a class="config-menu _wf" target="frmConfig" href="Workflow_View.aspx">Workflow Designer</a>
                    <a class="config-menu _rpt" target="frmConfig" href="reports_view.aspx">Reports</a>
                    <a class="config-menu _sess" target="frmConfig" href="../main/view.aspx?EID=tbl_SYS_Config&_fc=SessionEntities_View&_pt=V">Session Entities</a>
                    <a class="config-menu _res" target="frmConfig" href="../Main/View.aspx?EID=tbl_CORE_Resources">Resources</a>
                    <a class="config-menu _role" target="_blank" href="../Main/View.aspx?EID=tbl_SYS_UserRole&_fc=RoleManage">Role Management</a>
                    <a class="config-menu _list" style="display: none" target="frmConfig" href="PredefinedList_View.aspx">Predefined Lists</a>
                    <a class="config-menu _sett" target="frmConfig" href="../main/view.aspx?EID=tbl_SYS_Config&_fc=CustomSetting_View&_pt=V">Settings Master</a>
                    <a class="config-menu _eml" target="frmConfig" href="../Main/View.aspx?EID=tbl_CORE_EmailConfig">Email Config</a>
                    <a class="config-menu _fm" target="frmConfig" href="../Meta/HtmlResources_View.aspx">File Manager</a>
                    <a class="config-menu _dash" target="frmConfig" href="../main/view.aspx?EID=tbl_SYS_Config&_fc=Dash_View&_pt=V">Dashboard</a>
                    <a class="config-menu _autocode" target="frmConfig" href="../main/view.aspx?EID=tbl_SYS_Config&_fc=AutoGen_View&_pt=V">Auto generate Code</a>
                    <a class="config-menu _cht" target="frmConfig" href="../Meta/Charts_View.aspx?lt=Chart">Chart</a>
                    <a class="config-menu _sch" target="frmConfig" href="../main/view.aspx?EID=tbl_SYS_Config&_fc=TaskScheduler_View&_pt=V">Task Scheduler</a>
                    <a class="config-menu _not" target="frmConfig" href="../meta/Notification_View.aspx">Notifications</a>
                </div>
            </telerik:RadPane>
            <telerik:RadSplitBar ID="spliterBar" runat="server" CollapseMode="Forward">
            </telerik:RadSplitBar>

            <telerik:RadPane ID="ConfigViewPanel" runat="server">
                <telerik:RadTabStrip ID="rtabCustomsetting" runat="server" MultiPageID="mpFieldCtr" OnClientTabSelected="ClientTabSelected">
                    <Tabs>
                        <telerik:RadTab runat="server" PageViewID="entityview" Text="General" Value="general"></telerik:RadTab>
                        <telerik:RadTab runat="server" PageViewID="entityview" Text="Field" Selected="true" Value="fields"></telerik:RadTab>
                        <telerik:RadTab runat="server" PageViewID="entityview" Text="Relations" Value="relations"></telerik:RadTab>
                        <telerik:RadTab runat="server" PageViewID="entityview" Text="Views" Value="views"></telerik:RadTab>
                        <telerik:RadTab runat="server" PageViewID="entityview" Text="Filters" Value="filters"></telerik:RadTab>
                        <telerik:RadTab runat="server" PageViewID="entityview" Text="Security Filters " Value="securityfilters"></telerik:RadTab>
                        <telerik:RadTab runat="server" PageViewID="entityview" Text="Layout" Value="layout"></telerik:RadTab>
                        <telerik:RadTab runat="server" PageViewID="entityview" Text="Custom Buttons" Value="customsbuttons"></telerik:RadTab>
                        <telerik:RadTab runat="server" PageViewID="entityview" Text="Merge Letter" Value="mergeletter"></telerik:RadTab>
                        <telerik:RadTab runat="server" PageViewID="entityview" Text="Data" Value="data"></telerik:RadTab>
                    </Tabs>
                </telerik:RadTabStrip>
                <telerik:RadMultiPage Height="95%" SelectedIndex="0" ID="mpFieldCtr" runat="server">
                    <telerik:RadPageView Selected="true" ID="entityview" runat="server">
                        <div id="divLayoutOptions" style="position: static;border: 1px solid #c6c6c6;margin: 5px;box-shadow: none;padding: 2px 5px 0 5px;background: #fafafa;display:none" class="formSettings">
                            <label>Mode :<select id="ddlLayoutType" class="ddl"><option>View</option><option>Layout</option></select></label>
                            <label style="margin-left:25px">Form Code : <input id="txtFormCode" type="text" class="txt"></label>
                            <label style="margin-left:25px">Responsive : <input id="chkResp" type="checkbox"></label>
                            <a class="mdl-button GreenButton" onclick="applyLayoutOptions()" style="margin-left:25px">Apply</a>
                            <span class="fontBtn" onclick="window.open($('#ContentPlaceHolder1_iFrmConfiguration').attr('src'))"><i>&#xf08e;</i></span>
                        </div>
                        <iframe name="frmConfig" id="iFrmConfiguration" runat="server" frameborder="0" src="" style="height: 99.3%; width: 100%"></iframe>
                    </telerik:RadPageView>
                </telerik:RadMultiPage>
            </telerik:RadPane>
        </telerik:RadSplitter>
    </asp:Panel>
    <asp:UpdatePanel ID="UpdatePanel1" Visible="false" runat="server">
        <ContentTemplate>

            <asp:Panel runat="server" ID="pndetails" Visible="false" Height="350px">
                <wucAudit:AuditControl ID="dgAudit" runat="server" />
            </asp:Panel>
        </ContentTemplate>
    </asp:UpdatePanel>
    <style type="text/css">
        .RadTabStrip .rtsLevel1 .rtsTxt, .RadTabStripVertical .rtsLevel1 .rtsTxt
        {
            padding: 0!important;
            font-size: 12px;
            font-family: sans-serif;
        }
        .RadTabStrip .rtsOut, .RadTabStripVertical .rtsOut
        {
            padding-right: 6px;
            display: block;
        }
        .RadTabStrip .rtsIn, .RadTabStripVertical .rtsIn
        {
            padding: 0 2px;
            display: block;
        }
        .RadTabStrip .rtsLink, .RadTabStripVertical .rtsLink
        {
            padding-left: 6px;
        }
        .config-menu
        {
            display: block;
            font-size: 18px;
            padding: 5px 5px;
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            font-family: nunitoregular;
            text-decoration: none;
            outline: 0 !important;
            border-bottom: solid 1px #DBDBDB;
            color: #282828;
            background: #ffffff; /* Old browsers */
            background: -moz-linear-gradient(top, #ffffff 0%, #f7f7f7 50%, #ededed 51%, #fafafa 100%); /* FF3.6+ */
            background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(50%,#f7f7f7), color-stop(51%,#ededed), color-stop(100%,#fafafa)); /* Chrome,Safari4+ */
            background: -webkit-linear-gradient(top, #ffffff 0%,#f7f7f7 50%,#ededed 51%,#fafafa 100%); /* Chrome10+,Safari5.1+ */
            background: -o-linear-gradient(top, #ffffff 0%,#f7f7f7 50%,#ededed 51%,#fafafa 100%); /* Opera 11.10+ */
            background: -ms-linear-gradient(top, #ffffff 0%,#f7f7f7 50%,#ededed 51%,#fafafa 100%); /* IE10+ */
            background: linear-gradient(to bottom, #ffffff 0%,#f7f7f7 50%,#ededed 51%,#fafafa 100%); /* W3C */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#fafafa',GradientType=0 ); /* IE6-9 */
        }

            .config-menu._sel,
            .config-menu:focus,
            .config-menu:hover
            {
                color: #fff;
                background: #606c88; /* Old browsers */
                background: -moz-linear-gradient(top, #606c88 0%, #3f4c6b 100%); /* FF3.6+ */
                background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#606c88), color-stop(100%,#3f4c6b)); /* Chrome,Safari4+ */
                background: -webkit-linear-gradient(top, #606c88 0%,#3f4c6b 100%); /* Chrome10+,Safari5.1+ */
                background: -o-linear-gradient(top, #606c88 0%,#3f4c6b 100%); /* Opera 11.10+ */
                background: -ms-linear-gradient(top, #606c88 0%,#3f4c6b 100%); /* IE10+ */
                background: linear-gradient(to bottom, #606c88 0%,#3f4c6b 100%); /* W3C */
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#606c88', endColorstr='#3f4c6b',GradientType=0 ); /* IE6-9 */
            }

        .DarkTheme .config-menu
        {
            border-bottom: solid 1px #323232;
            color: #DADADA;
            background: #1F1F1F;
        }

            .DarkTheme .config-menu._sel,
            .DarkTheme .config-menu:focus,
            .DarkTheme .config-menu:hover
            {
                color: #000;
                background: #bfd255; /* Old browsers */
                background: -moz-linear-gradient(top, #bfd255 0%, #8eb92a 50%, #72aa00 51%, #9ecb2d 100%); /* FF3.6+ */
                background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#bfd255), color-stop(50%,#8eb92a), color-stop(51%,#72aa00), color-stop(100%,#9ecb2d)); /* Chrome,Safari4+ */
                background: -webkit-linear-gradient(top, #bfd255 0%,#8eb92a 50%,#72aa00 51%,#9ecb2d 100%); /* Chrome10+,Safari5.1+ */
                background: -o-linear-gradient(top, #bfd255 0%,#8eb92a 50%,#72aa00 51%,#9ecb2d 100%); /* Opera 11.10+ */
                background: -ms-linear-gradient(top, #bfd255 0%,#8eb92a 50%,#72aa00 51%,#9ecb2d 100%); /* IE10+ */
                background: linear-gradient(to bottom, #bfd255 0%,#8eb92a 50%,#72aa00 51%,#9ecb2d 100%); /* W3C */
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#bfd255', endColorstr='#9ecb2d',GradientType=0 ); /* IE6-9 */
            }


        .config-menu:before
        {
            font-family: fontawesome;
            content: "\f013";
            display: inline-block;
            margin-right: 6px;
        }

        .config-menu._app:before
        {
            content: "\f1b3";
        }



        .config-menu._verify:before
        {
            content: "\f00a";
        }

        .config-menu._menu:before
        {
            content: "\f0e8";
        }

        .config-menu._wf:before
        {
            content: "\f1e0";
        }

        .config-menu._rpt:before
        {
            content: "\f201";
        }

        .config-menu._sess:before
        {
            content: "\f02e";
        }

        .config-menu._res:before
        {
            content: "\f0f6";
        }
         .config-menu._role:before
        {
            content: "\f132";
        }
        .config-menu._list:before
        {
            content: "\f03a";
        }

        .config-menu._sett:before
        {
            content: "\f0ad";
        }

        .config-menu._eml:before
        {
            content: "\f0e0";
        }      
        .config-menu._fm:before
        {
            content: "\f07c";
        }
        .config-menu._dash:before
        {
            content: "\f12e";
        }
        .config-menu._autocode:before
        {
            content: "\f161";
        }
        .config-menu._cht:before
        {
            content: "\f200";
        }
        .config-menu._sch:before
        {
            content: "\f017";
        }
         .config-menu._not:before
        {
            content: "\f06a";
        }
          .config-menu._fp:before
        {
            content: "\f0c9";
        }

            .config-menu._ae:before
        {
            content: "\f009";
        }


        .createdb
        {
            border-radius: 7px;
            padding: 5px 5px;
            display: block;
            color: #FFF;
            font-size: 15px;
            border: solid 2px #FF7E13 !important;
            background: #ff3019; /* Old browsers */
            background: -moz-linear-gradient(top, #ff3019 0%, #cf0404 100%); /* FF3.6+ */
            background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ff3019), color-stop(100%,#cf0404)); /* Chrome,Safari4+ */
            background: -webkit-linear-gradient(top, #ff3019 0%,#cf0404 100%); /* Chrome10+,Safari5.1+ */
            background: -o-linear-gradient(top, #ff3019 0%,#cf0404 100%); /* Opera 11.10+ */
            background: -ms-linear-gradient(top, #ff3019 0%,#cf0404 100%); /* IE10+ */
            background: linear-gradient(to bottom, #ff3019 0%,#cf0404 100%); /* W3C */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff3019', endColorstr='#cf0404',GradientType=0 ); /* IE6-9 */
            outline: 0 !important;
        }

            .createdb:hover
            {
                border: solid 2px #FFB800 !important;
                background: #d21500; /* Old browsers */
                background: -moz-linear-gradient(top, #d21500 0%, #9d0303 100%); /* FF3.6+ */
                background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#d21500), color-stop(100%,#9d0303)); /* Chrome,Safari4+ */
                background: -webkit-linear-gradient(top, #d21500 0%,#9d0303 100%); /* Chrome10+,Safari5.1+ */
                background: -o-linear-gradient(top, #d21500 0%,#9d0303 100%); /* Opera 11.10+ */
                background: -ms-linear-gradient(top, #d21500 0%,#9d0303 100%); /* IE10+ */
                background: linear-gradient(to bottom, #d21500 0%,#9d0303 100%); /* W3C */
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d21500', endColorstr='#9d0303',GradientType=0 ); /* IE6-9 */
            }

            .createdb:before
            {
                font-family: fontawesome;
                content: "\f0ce";
                display: inline-block;
                margin-right: 6px;
            }

        .newItem
        {
            background-image: none !important;
            background-color: none !important;
            border: none !important;
        }

            .newItem .rtIn
            {
                font-style: italic;
                font-family: nunitobold;
                font-size: 14px;
                background-image: none !important;
                background-color: transparent !important;
                border: none !important;
                padding: 4px 3px 3px !important;
                cursor: pointer;
                color: #676A79;
                padding-left: 8px !important;
                padding-right: 8px !important;
            }

        .DarkTheme .newItem .rtIn
        {
            color: #A5A5A5 !important;
        }

        .newItem .rtIn:before
        {
            content: "\f044";
            font-family: fontawesome;
            display: inline-block;
            margin-right: 3px;
            font-style: normal;
        }

        .newItem.rtHover .rtIn
        {
            color: green;
            text-decoration: underline;
        }


        .DarkTheme .newItem.rtHover .rtIn
        {
            color: #FFF205 !important;
        }

        .DarkTheme .newItem.rtSelected .rtIn,
        .newItem.rtSelected .rtIn
        {
            color: #FFF !important;
            background-color: #0BF !important;
        }

        .rtLI ._app
        {
            font-size: 16px;
        }

            .rtLI ._app .rtIn:before
            {
                content: "\f1b3";
                font-family: fontawesome;
                display: inline-block;
                margin-right: 3px;
                color: #00C5FF;
            }

        .rtLI ._mod
        {
            font-size: 14px;
        }

            .rtLI ._mod .rtIn:before
            {
                content: "\f1b2";
                font-family: fontawesome;
                display: inline-block;
                margin-right: 3px;
                color: #00C5FF;
            }

        .rtLI .DevMode
        {
            color: #B80C0C;
            font-weight: bold;
        }

        .DarkTheme .rtLI .DevMode
        {
            color: #5FC25B;
        }

        .rtLI ._ent .rtIn:before
        {
            content: "\f0ce";
            font-family: fontawesome;
            display: inline-block;
            margin-right: 3px;
            color: #00F;
            font-weight: normal;
        }

        .DarkTheme .rtLI ._app .rtIn:before
        {
            color: #00A5CB;
        }

        .DarkTheme .rtLI ._mod .rtIn:before
        {
            color: #05E2B8;
        }

        .DarkTheme .rtLI ._ent .rtIn:before
        {
            color: #02B1D0;
        }
    </style>
    <script type="text/javascript">

        var ajx = Sys.WebForms.PageRequestManager.getInstance();
        ajx.add_pageLoaded(function () {
            if (typeof MDI != "undefined") {
                //Add user code here
                //alert("load "+MDI.id );             
            }
        })

        ajx.add_endRequest(function () {
            if (typeof MDI != "undefined") {
                //Add user code here
                //alert("load "+MDI.id );             
            }
        })
    </script>

    <script type="text/javascript">
        //$("#divConfigLinks").find("a").each(function () { $(this).attr("href", $(this).attr("href") + ($(this).attr("href").indexOf("?") > -1 ? "" : "?1") + "&_au=" + $.QS("_au")); });
        $("#toggleSync").addClass('<%=ErpModel.Globals.AppManager.DatabaseSyncingPaused?"":"activated"%>').html('<%=ErpModel.Globals.AppManager.DatabaseSyncingPaused?"Database Syncing Paused":"Database Syncing Active"%>');
        var emodule = "";
        var eappcode = "";
        $("#txtSearch").on("input", $.debounce(250, function (e) { TreeSearch(); }));
        function pageLoad() {
            $("#RAD_SPLITTER_PANE_CONTENT_<%=configNvgPanel.ClientID%>").children(".config-menu").on("click", function () { $(this).parent().children(".config-menu").removeClass("_sel"); $(this).addClass("_sel"); })
            $find("<%=rtabCustomsetting.ClientID%>").set_visible(false);
        }

        function OpenWindow(type, node) {

            //node = (node && node.get_level() > 1 ? (node.get_level() == 2 ? node.get_parent() : node.get_parent().get_parent()) : node);
            var modId = (node && node.get_level() == 1 ? node.get_value() : "");
            var appId = (node && node.get_level() == 0 ? node.get_value() : "");
            if (node && node.get_level() > 1) {
                while (node.get_level() > 1) {
                    node = node.get_parent();
                }
                modId = node.get_value();
            }
            appId = (node && node.get_level() == 1 ? node.get_parent().get_value() : appId);
            if (type == "CREATEAPP") {

                var appurl = "Application_Add.aspx?PageType=A";
                $("#<%= iFrmConfiguration.ClientID %>").attr("src", appurl);
            }
            else if (type == "CREATEMOD") {

                var modurl = "Module_Add.aspx?PageType=A&AppCode=" + appId;
                $("#<%= iFrmConfiguration.ClientID %>").attr("src", modurl);
            }
            else if (type == "CREATEENT") {
                if (modId == "") {
                    alert('Please select module');
                    return false;
                }
                var appCode = node.get_attributes().getAttribute("AppCode")
                var eurl = "Entity_Add.aspx?PageType=A&Module=" + modId + "&AppCode=" + appCode;
                $("#<%= iFrmConfiguration.ClientID %>").attr("src", eurl);

            }
    return false;
}

var _entID = "";
var _modID = "";
var _isSysEntity = 0;
var _appID = "";


function ClientNodeClicked(sender, args) {

    var Radtab = $find("<%=rtabCustomsetting.ClientID%>");

    $find("<%=rtabCustomsetting.ClientID%>").set_visible(false);
    $("#divLayoutOptions").hide();
    var parentid = "";
    var tblname = "";

    emodule = "";
    eappcode = "";
    if (args.get_node().get_value() == "CREATEAPP" || args.get_node().get_value() == "CREATEMOD" || args.get_node().get_value() == "CREATEENT") {
        OpenWindow(args.get_node().get_value(), args.get_node());
        return;
    }
    if (args.get_node().get_attributes().getAttribute('IsApp') == "1") {
        parentid = args.get_node().get_value();
        url = "Application_Add.aspx?PageType=E&ID=" + parentid;
        $("#<%= iFrmConfiguration.ClientID %>").attr("src", url);
    }
    else if (args.get_node().get_attributes().getAttribute('IsModule') == "1") {
        emodule = args.get_node().get_value();
        eappcode = args.get_node().get_attributes().getAttribute('AppCode');
        var app = args.get_node().get_attributes().getAttribute('App');
        parentid = args.get_node().get_value();
        url = "Module_Add.aspx?PageType=E&ID=" + parentid + "&App=" + app;
        $("#<%= iFrmConfiguration.ClientID %>").attr("src", url);
    }
    else if (args.get_node().get_attributes().getAttribute('IsEntity') == "1") {
        parentid = args.get_node().get_value();
        url = "Entity_Add.aspx?PageType=E&ID=" + parentid;
        _entID = args.get_node().get_value();
        _modID = args.get_node().get_attributes().getAttribute('Module');
        _isSysEntity = args.get_node().get_attributes().getAttribute('Systemdefined');
        _appID = args.get_node().get_attributes().getAttribute('Application');
        //$("#<%= iFrmConfiguration.ClientID %>").attr("src", url);
        $find("<%=rtabCustomsetting.ClientID%>").set_visible(true);       
        if (currTab == null)
            currTab = Radtab.findTabByValue("fields");
        ClientTabSelected(null, null);
    }
    else {
        if (args.get_node().get_value() == "lang") {
            url = "i18_View.aspx";
            $("#<%= iFrmConfiguration.ClientID %>").attr("src", url);
        }
        else if (args.get_node().get_value() == "langapp") {
            url = "i18Data_View.aspx?resource=Application";
            $("#<%= iFrmConfiguration.ClientID %>").attr("src", url);
        }
        else if (args.get_node().get_value() == "langmodule") {
            url = "i18Data_View.aspx?resource=Module";
            $("#<%= iFrmConfiguration.ClientID %>").attr("src", url);
        }
        else if (args.get_node().get_value() == "langfields") {
            url = "i18Data_View.aspx?resource=Fields";
            $("#<%= iFrmConfiguration.ClientID %>").attr("src", url);
        }
        else if (args.get_node().get_value() == "langEntities") {
            url = "i18Data_View.aspx?resource=Entities";
            $("#<%= iFrmConfiguration.ClientID %>").attr("src", url);
        }
        else if (args.get_node().get_value() == "langmsg") {
            url = "i18Data_View.aspx?resource=Messages";
            $("#<%= iFrmConfiguration.ClientID %>").attr("src", url);
        }

    }
}

function toggleSync(a) {
    a = $(a);
    var d = {};
    a.toggleClass("activated");
    d["Paused"] = !a.hasClass("activated");
    PageMethods.Execute(d);
    a.html((a.hasClass("activated") ? "Database Syncing Active" : "Database Syncing Paused"));
}
function CreateDBStruct() {
    if (!confirm('Do you wish to generate database structure?'))
        return;
    var d = {};
    $.Notify("Processing...")
    PageMethods.CreateDBStructure(d, function (r) { actSuccess(r["Message"], 0); $.Notify(false); }, function () { $.Notify(false); });
}
function UpdateTree(type, app, mod, entity) {
    var treeView = $find("<%= tvConfiguration.ClientID %>");
    treeView.trackChanges();

    if (type == "A") {
        var allid = app.split('|');
        var foundNode = treeView.findNodeByValue(allid[0]);
        if (foundNode == null) {
            //Instantiate a new client node
            var node = new Telerik.Web.UI.RadTreeNode();
            //Set its text
            node.set_text(allid[1]);
            node.set_value(allid[0]);
            node.get_attributes().setAttribute("AppCode", allid[0]);
            node.get_attributes().setAttribute("IsApp", 1);
            node.set_contentCssClass("_app");
            var parent = treeView;
            parent.get_nodes().add(node);
            node.select();

            var newnode = new Telerik.Web.UI.RadTreeNode();
            newnode.set_text("Create New Module");
            newnode.set_value("CREATEMOD");
            newnode.set_contentCssClass("newItem");
            node.get_nodes().add(newnode);
        }
    }
    else if (type == "AU") {
        var appdata = app.split('|');
        var foundNode = treeView.findNodeByValue(appdata[0]);
        if (foundNode != null) {
            foundNode.set_text(appdata[1]);
        }
    }
    else if (type == "M") {
        var appData = app.split('|');
        var foundNode = treeView.findNodeByValue(appData[0]);

        if (foundNode != null) {
            var moddata = mod.split('|');
            //Instantiate a new client node
            var node = new Telerik.Web.UI.RadTreeNode();
            //Set its text
            node.set_text(moddata[1]);
            node.set_value(moddata[0]);
            node.get_attributes().setAttribute("IsModule", 1);
            node.get_attributes().setAttribute("AppCode", appData[1]);
            node.get_attributes().setAttribute("App", appData[0]);
            node.set_contentCssClass("_mod");
            foundNode.get_nodes().add(node);
            foundNode.set_expanded(true);
            node.select();

            var newnode = new Telerik.Web.UI.RadTreeNode();
            newnode.set_text("Create New Entity");
            newnode.set_value("CREATEENT");
            newnode.set_contentCssClass("newItem");
            node.get_nodes().add(newnode);
        }
    }
    else if (type == "MU") {
        var moddata = mod.split('|');
        var foundNode = treeView.findNodeByValue(moddata[0]);
        if (foundNode != null) {
            foundNode.set_text(moddata[1]);
        }
    }
    else if (type == "E") {
        var allid = app;
        var modid = mod;
        var ent = entity.split('|');


        var foundNode = treeView.findNodeByValue(modid);

        if (foundNode != null) {
            //Instantiate a new client node
            var node = new Telerik.Web.UI.RadTreeNode();
            //Set its text
            node.set_text(ent[1]);
            node.set_value(ent[0]);

            if (InDevelopmentMode == 1)
                node.set_contentCssClass("_ent DevMode");
            else
                node.set_contentCssClass("_ent");

            node.get_attributes().setAttribute("IsEntity", 1);
            node.get_attributes().setAttribute("Module", mod);
            foundNode.get_nodes().add(node);
            foundNode.set_expanded(true);
            node.select();

            _entID = node.get_value();
            _modID = mod;
            _isSysEntity = node.get_attributes().getAttribute('Systemdefined');
            _appID = app;
            $find("<%=rtabCustomsetting.ClientID%>").set_visible(true);
            var Radtab = $find("<%=rtabCustomsetting.ClientID%>");
            var tab = Radtab.findTabByValue("general").select();



            //var entityNode = new Telerik.Web.UI.RadTreeNode();
            ////Set its text
            //entityNode.set_text("Fields");
            //entityNode.set_value("Fields");
            //entityNode.get_attributes().setAttribute("Entity", ent[0]);
            //entityNode.get_attributes().setAttribute("Module", modid);
            //entityNode.get_attributes().setAttribute("Application", allid);
            //entityNode.get_attributes().setAttribute("Table", ent[1]);
            //entityNode.get_attributes().setAttribute("Systemdefined", ent[2]);
            //node.get_nodes().add(entityNode);

            //var entityNode1 = new Telerik.Web.UI.RadTreeNode();
            ////Set its text
            //entityNode1.set_text("Relations");
            //entityNode1.set_value("Relations");
            //entityNode1.get_attributes().setAttribute("Entity", ent[0]);
            //entityNode1.get_attributes().setAttribute("Module", modid);
            //entityNode1.get_attributes().setAttribute("Application", allid);
            //entityNode1.get_attributes().setAttribute("Table", ent[1]);
            //entityNode1.get_attributes().setAttribute("Systemdefined", ent[2]);
            //node.get_nodes().add(entityNode1);

            //var entityNode2 = new Telerik.Web.UI.RadTreeNode();
            //entityNode2.set_text("Views");
            //entityNode2.set_value("Grid");
            //entityNode2.get_attributes().setAttribute("Entity", ent[0]);
            //entityNode2.get_attributes().setAttribute("Module", modid);
            //entityNode2.get_attributes().setAttribute("Application", allid);
            //entityNode2.get_attributes().setAttribute("Table", ent[1]);
            //entityNode2.get_attributes().setAttribute("Systemdefined", ent[2]);
            //node.get_nodes().add(entityNode2);

            //var entityNode3 = new Telerik.Web.UI.RadTreeNode();
            //entityNode3.set_text("Filters");
            //entityNode3.set_value("Filters");
            //entityNode3.get_attributes().setAttribute("Entity", ent[0]);
            //entityNode3.get_attributes().setAttribute("Module", modid);
            //entityNode3.get_attributes().setAttribute("Application", allid);
            //entityNode3.get_attributes().setAttribute("Table", ent[1]);
            //entityNode3.get_attributes().setAttribute("Systemdefined", ent[2]);
            //node.get_nodes().add(entityNode3);

            //var entityNode4 = new Telerik.Web.UI.RadTreeNode();
            //entityNode4.set_text("Security Filter");
            //entityNode4.set_value("SecurityFilter");
            //entityNode4.get_attributes().setAttribute("Entity", ent[0]);
            //entityNode4.get_attributes().setAttribute("Module", modid);
            //entityNode4.get_attributes().setAttribute("Application", allid);
            //entityNode4.get_attributes().setAttribute("Table", ent[1]);
            //entityNode4.get_attributes().setAttribute("Systemdefined", ent[2]);
            //node.get_nodes().add(entityNode4);



            //var entityNode6 = new Telerik.Web.UI.RadTreeNode();
            //entityNode6.set_text("Layout");
            //entityNode6.set_value("Item");
            //entityNode6.get_attributes().setAttribute("Entity", ent[0]);
            //entityNode6.get_attributes().setAttribute("Module", modid);
            //entityNode6.get_attributes().setAttribute("Application", allid);
            //entityNode6.get_attributes().setAttribute("Table", ent[1]);
            //entityNode6.get_attributes().setAttribute("Systemdefined", ent[2]);
            //node.get_nodes().add(entityNode6);


            //var entityNode8 = new Telerik.Web.UI.RadTreeNode();
            //entityNode8.set_text("Custom Buttons");
            //entityNode8.set_value("CustomButtons");
            //entityNode8.get_attributes().setAttribute("Entity", ent[0]);
            //entityNode8.get_attributes().setAttribute("Module", modid);
            //entityNode8.get_attributes().setAttribute("Application", allid);
            //entityNode8.get_attributes().setAttribute("Table", ent[1]);
            //entityNode8.get_attributes().setAttribute("Systemdefined", ent[2]);
            //node.get_nodes().add(entityNode8);


            //var entityNode5 = new Telerik.Web.UI.RadTreeNode();
            //entityNode5.set_text("Merge Letters");
            //entityNode5.set_value("Merge");
            //entityNode5.get_attributes().setAttribute("Entity", ent[0]);
            //entityNode5.get_attributes().setAttribute("Module", modid);
            //entityNode5.get_attributes().setAttribute("Application", allid);
            //entityNode5.get_attributes().setAttribute("Table", ent[1]);
            //entityNode5.get_attributes().setAttribute("Systemdefined", ent[2]);
            //node.get_nodes().add(entityNode5);



            //var entityNode7 = new Telerik.Web.UI.RadTreeNode();
            //entityNode7.set_text("Data");
            //entityNode7.set_value("Data");
            //entityNode7.get_attributes().setAttribute("Entity", ent[0]);
            //entityNode7.get_attributes().setAttribute("Module", modid);
            //entityNode7.get_attributes().setAttribute("Application", allid);
            //entityNode7.get_attributes().setAttribute("Table", ent[1]);
            //entityNode7.get_attributes().setAttribute("Systemdefined", ent[2]);
            //node.get_nodes().add(entityNode7);
        }

    }
    else if (type == "EU") {
        var entdata = entity.split('|');
        var foundNode = treeView.findNodeByValue(entdata[0]);
        if (foundNode != null) {
            foundNode.set_text(entdata[1]);
        }
    }
    else if (type == "DE") { //delete entity
        var ent = entity;
        var foundNode = treeView.findNodeByValue(ent);

        if (foundNode != null) {
            foundNode.get_parent().get_nodes().remove(foundNode);
            alert('Entity deleted successfully.');
            $find("<%=rtabCustomsetting.ClientID%>").set_visible(false);
            $("#divLayoutOptions").hide();

        }
    }
    else if (type == "DM") { //delete module
        var foundNode = treeView.findNodeByValue(mod);

        if (foundNode != null) {
            foundNode.get_parent().get_nodes().remove(foundNode);
            alert('Module deleted successfully.');
        }
    }
    else if (type == "DA") {  // delete app
        var foundNode = treeView.findNodeByValue(app);

        if (foundNode != null) {
            foundNode.get_parent().get_nodes().remove(foundNode);
            alert('Application deleted successfully.');
        }
    }

    treeView.commitChanges();
    return false;
}

function TreeSearch() {
    var treeView = $find("<%= tvConfiguration.ClientID %>");

    var arrNodes = new Array();
    var cnt = treeView.get_allNodes().length;

    var srchTxt = $("#txtSearch").val();
    for (var c = 0; c < cnt; c++) {

        var sNode = treeView.get_allNodes()[c];

        var IsEntity = sNode.get_attributes().getAttribute("IsEntity");
        var IsModule = sNode.get_attributes().getAttribute("IsModule");
        var IsApp = sNode.get_attributes().getAttribute("IsApp");
        var EntityItem = sNode.get_attributes().getAttribute("EntityItem");
        var IsVisi = sNode.get_attributes().getAttribute("IsVisi");

        if (EntityItem / 1 == 1)
            continue;
        sNode.set_visible(true);
        var rtin = $(sNode.get_element()).node(0).find(".rtIn").removeHighlight();
        if (srchTxt != "") {
            if (sNode.get_text().contains(srchTxt) || sNode.get_text() == srchTxt || sNode.get_value().contains(srchTxt) || sNode.get_value() == srchTxt) {
                if (IsApp / 1 == 1 || IsModule / 1 == 1 || IsEntity / 1 == 1) {
                    arrNodes.push(sNode);
                    rtin.highlight(srchTxt);
                }
            }
            else
                sNode.set_visible(false);
        }
        else {
            sNode.set_visible(true);
        }
    }

    for (var v = 0; v < arrNodes.length; v++) {

        var sNode = arrNodes[v];
        var IsEntity = sNode.get_attributes().getAttribute("IsEntity");
        var IsModule = sNode.get_attributes().getAttribute("IsModule");
        var IsApp = sNode.get_attributes().getAttribute("IsApp");
        var EntityItem = sNode.get_attributes().getAttribute("EntityItem");

        if (EntityItem / 1 == 1)
            continue;
        if (IsApp / 1 == 1) {
            var childNodes = sNode.get_allNodes();
            for (var aa = 0; aa < childNodes.length; aa++)
                childNodes[aa].set_visible(true);
        }
        else if (IsModule / 1 == 1) {

            sNode.get_parent().set_visible(true);
            sNode.set_expanded(true);
            sNode.get_parent().set_expanded(true);
            var childNodes = sNode.get_allNodes();
            for (var aa = 0; aa < childNodes.length; aa++)
                childNodes[aa].set_visible(true);
        }
        else if (IsEntity / 1 == 1) {
            var parentlvl1 = sNode.get_parent();
            var parentlvl2 = sNode.get_parent().get_parent();

            parentlvl1.set_visible(true);
            parentlvl2.set_visible(true);

            parentlvl1.set_expanded(true);
            parentlvl2.set_expanded(true);

        }
    }

    return false;
}


    </script>


    <script type="text/javascript">


        var currTab = null;

        function ClientTabSelected(sender, args) {

            $("#divLayoutOptions").hide();
            var url = "";
            var tblName = "";
            var tab
            if (args == null)
                tab = currTab.get_value();
            else {
                tab = args.get_tab().get_value();
                currTab = args.get_tab();
            }
            if (tab == "general") {
                url = "Entity_Add.aspx?PageType=E&ID=" + _entID;
                $("#<%= iFrmConfiguration.ClientID %>").attr("src", url);
            }
            else if (tab == "fields") {
                url = "FieldInfo_View.aspx?ModuleID=" + _modID + "&EntityID=" + _entID + "&TableName=" + _entID + "&IsSystemEntity=" + _isSysEntity;
                $("#<%= iFrmConfiguration.ClientID %>").attr("src", url);
            }
            else if (tab == "relations") {
                url = "EntityRelations_View.aspx?EntityID=" + _entID + "&TableName=" + _entID + "&ModuleID=" + _modID + "";
                $("#<%= iFrmConfiguration.ClientID %>").attr("src", url);
            }
            else if (tab == "views") {
                url = "Layout_View.aspx?EID=" + _entID + "&Module=" + _modID + "&TableName=" + _entID + "&lt=Grid"
                $("#<%= iFrmConfiguration.ClientID %>").attr("src", url);
            }
            else if (tab == "filters") {
                url = "Layout_View.aspx?EID=" + _entID + "&Module=" + _modID + "&TableName=" + _entID + "&lt=Filters";
                $("#<%= iFrmConfiguration.ClientID %>").attr("src", url);
            }
            else if (tab == "securityfilters") {
                url = "Layout_View.aspx?EID=" + _entID + "&Module=" + _modID + "&TableName=" + _entID + "&lt=SecurityFilter";
                $("#<%= iFrmConfiguration.ClientID %>").attr("src", url);
            }
            else if (tab == "layout") {
                url = "Layout_View.aspx?EID=" + _entID + "&Module=" + _modID + "&TableName=" + _entID + "&lt=Item";
                $("#<%= iFrmConfiguration.ClientID %>").attr("src", url);
            }
            else if (tab == "customsbuttons") {
                url = "CustomButtons_View.aspx?EID=" + _entID + "&Module=" + _modID + "&App=" + _appID;
                $("#<%= iFrmConfiguration.ClientID %>").attr("src", url);
            }
            else if (tab == "mergeletter") {
                url = "MessageTemplate_View.aspx?mode=M&EID=" + _entID + "&Module=" + _modID;
                $("#<%= iFrmConfiguration.ClientID %>").attr("src", url);
            }
            else if (tab == "data") {
                $("#divLayoutOptions").show();
                applyLayoutOptions();
                
            }

}

        function applyLayoutOptions() {
            var url = "";
            /*if ($("#ddlLayoutType").data("__currentEntity") != _entID) {
                $("#ddlLayoutType").val($.defaultVal($.DataBase("windowoptions_" + _entID + "ddlLayoutType"), "View"));
                $("#chkResp").checked($.DataBase("windowoptions_" + _entID + "chkResp")=="1");
                $("#txtFormCode").val($.defaultVal($.DataBase("windowoptions_" + _entID + "txtFormCode"), ""));
            }
            $("#ddlLayoutType").data("__currentEntity", _entID);
            $.DataBase("windowoptions_" + _entID + "ddlLayoutType", $("#ddlLayoutType").val());
            $.DataBase("windowoptions_" + _entID + "chkResp", $("#chkResp").checked()?"1":"0");
            $.DataBase("windowoptions_" + _entID + "txtFormCode", $("#txtFormCode").val());*/

            if ($("#ddlLayoutType").data("__currentEntity") != _entID) {
                $("#ddlLayoutType").val("View");
                $("#chkResp").checked($.DataBase("windowoptions_" + _entID + "chkResp") == "1");
                $("#txtFormCode").val("");
            }
            $("#ddlLayoutType").data("__currentEntity", _entID);
            $.DataBase("windowoptions_" + _entID + "chkResp", $("#chkResp").checked() ? "1" : "0");

            if (!$("#chkResp").checked()) {
                if ($("#ddlLayoutType").val() == "View")
                    url = "../main/view.aspx?EID=" + _entID + "&_fc=" + $("#txtFormCode").val();
                else
                    url = "../main/ui.aspx?1&EID=" + _entID + "&_pt=A" + "&_fc=" + $("#txtFormCode").val();
            }
            else {
                if ($("#ddlLayoutType").val() == "View")
                    url = "../main/main.aspx?1&EID=" + _entID + "&_fc=" + $("#txtFormCode").val() + "&_pt=G";
                else
                    url = "../main/main.aspx?1&EID=" + _entID + "&_fc=" + $("#txtFormCode").val() + "&_pt=A"
            }
            $("#<%= iFrmConfiguration.ClientID %>").attr("src", url);
        }

function HideCustomSetting() {
    $find("<%=rtabCustomsetting.ClientID%>").set_visible(false);
    $("#divLayoutOptions").hide();
}
    </script>
</asp:Content>


