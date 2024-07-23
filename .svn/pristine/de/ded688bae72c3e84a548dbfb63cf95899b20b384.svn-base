<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Projects.aspx.cs" Inherits="SensysErp.Projects.Projects" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <%# HelperLib.Web.WebResources.GetResource("~/fonts/font.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/normalize.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/fonts/font.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/CustomControl/CustomControl.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/base.css")%>

    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/System.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery-ui-1.10.3.custom.min.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jqHelper.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/UiHelper.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CustomControls.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/moment.min.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/modernizr.js")%>
    <style>
        .highlight
        {
            background-color: yellow !important;
            color: red;
        }
        .txtSearch
        {
            border-radius: 5px;
            font-size: 16px !important;
            border: 1px solid;
        }

        .prjLink
        {
            display: block;
            padding: 6px 15px;
            width: 500px;
            background: #45484d;
            text-transform: capitalize;
            border: solid 1px #8B8B8B;
            margin-top: -1px;
            text-decoration: none;
            font-family: Arial, Verdana;
            color: #00E0FF;
        }

            .prjLink:before
            {
                font-family: fontawesome;
                font-size: 50px;
                content: "\f009";
                margin-right: 8px;
                border-right: solid 1px #727272;
                padding-right: 8px;
                vertical-align: middle;
            }

            .prjLink.Modules
            {
                color: #FF0;
            }

                .prjLink.Modules:before
                {
                    content: "\f12e";
                }

            .prjLink.Application
            {
            }

            .prjLink:hover
            {
                background: #1c1e1d;
            }

        .prjDate
        {
            display: block;
            font-size: 11px;
            font-style: italic;
            color: #EEE;
            float: left;
        }

        .prjHeader
        {
            font-size: 20px;
            font-family: Verdana;
            background-color: #000;
            width: 532px;
            display: block;
            color: #FFF;
            padding: 5px 0;
            text-indent: 10px;
        }

        .template
        {
            height: 500px;
            overflow-y: scroll;
            width: 531px;
        }

        .hdr
        {
            font-size: 13px;
            font-weight: bold;
            padding: 3px;
            color: #028000;
        }

        .modLink
        {
            color: #C74608 !important;
            font-size: 12px;
            font-weight: bold;
            cursor: pointer;
            text-decoration: none;
        }

            .modLink:hover
            {
                font-weight: bolder;
                text-decoration: underline;
            }

            .modLink:before
            {
                font-family: fontawesome;
                content: "\f12e";
            }

        .appLink
        {
            color: #004EAF !important;
            font-size: 12px;
            font-weight: bold;
            cursor: pointer;
            text-decoration: none;
        }

            .appLink:hover
            {
                font-weight: bolder;
                text-decoration: underline;
            }

            .appLink:before
            {
                font-family: fontawesome;
                content: "\f009";
            }

        .RadTreeList_Default .rtlHeader
        {
        }
        .spnLock {
             font-family: fontawesome;
            font-size: 20px;
            display: block;
            text-align: center;
            cursor: pointer;
        }
        .lockIcon:before {
            content: "\f023";
            color: #af1b1b;
        }
        .unlockIcon:before {
            content: "\f09c";
            color: #21a700;
        }

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
</head>
<body>
    <form id="form1" runat="server">
        <table>
            <tr>
                <td style="width: 80%; overflow: auto">
                    <div style="text-align: left">
                        <asp:ScriptManager ID="ScrManager" runat="server" EnablePageMethods="true"></asp:ScriptManager>
                        <div style="display: inline-flex">
                            <asp:Label ID="lblProject" CssClass="hdr" runat="server" Text="Select Project File  "></asp:Label>
                            <telerik:RadAsyncUpload ID="uploadProject" runat="server" Skin="Vista" MaxFileInputsCount="1" MultipleFileSelection="Disabled" AllowedFileExtensions=".prj" OnClientFileUploaded="ProjectUpload"></telerik:RadAsyncUpload>
                        </div>
                        <div style="padding: 5px;float:right">
                        <telerik:RadTextBox ID="txtSearch" CssClass="txtSearch" Width="250px" runat="server" EmptyMessage="search"></telerik:RadTextBox>
                        <asp:LinkButton ID="btnMetaSearch" Visible="false" runat="server" CssClass="mdl-button BlueButton" Style="margin-left: 8px; font-size: 12px;" OnClick="btnSearch_Click"> <span style="font-family: FontAwesome;margin-right: 5px;">&#Xf002;</span>Search</asp:LinkButton>
                    </div>
                    </div>
                    
                    <br />
                    <div>


                        <telerik:RadTreeList AllowLoadOnDemand="false" ID="rtlApps" Width="100%" runat="server" SkinID="NoPosBackTreeList"
                            DataKeyNames="childID" AllowPaging="false" ParentDataKeyNames="parentID" ClientSettings-Selecting-AllowItemSelection="false"
                            AutoGenerateColumns="false" AllowSorting="false" Skin="Vista" Style="overflow: auto">
                            <Columns>
                                
                                <telerik:TreeListTemplateColumn DataField="AppName" UniqueName="AppName"
                                    HeaderText="Applications/Modules">
                                    <ItemTemplate>
                                        <asp:LinkButton ID="lblEntity" runat="server" prjtype='<%# Eval("projecttype") %>'
                                            file='<%# Eval("prjFileName") %>'
                                            appid='<%# Eval("AppID") %>'
                                            modid='<%# Eval("ModID") %>'
                                            appname='<%# Eval("AppName") %>'
                                            modname='<%# Eval("ModName") %>'
                                            db='<%# Eval("dbname") %>'
                                            CommandArgument='<%# Eval("cs") %>'
                                            OnClick="PrjLink_Click" OnClientClick="return isValidNode(this)" ischild='<%# Eval("isChild") %>' entity_pid='<%# Eval("childID") %>' CssClass='<%# "ent-title "+HelperLib.Extensions.BaseExtensions.C2Str(Eval("css")) %>' Text='<%# "     "+ HelperLib.Conversion.C.Str(Eval("displayName")) %>'></asp:LinkButton>
                                    </ItemTemplate>
                                    <HeaderStyle Width="25%" />
                                </telerik:TreeListTemplateColumn>
                                <telerik:TreeListTemplateColumn UniqueName="prjLock">
                                    <ItemTemplate>
                                        <span onclick="showPassword(this)" title="Set Project Password" style='<%# HelperLib.Conversion.C.Int(Eval("AppID"))==-999?"display:none":"" %>' class='spnLock <%# HelperLib.Conversion.C.Int(Eval("hasPwd"))==1?"lockIcon":"unlockIcon" %>'></span>
                                    </ItemTemplate>
                                    <HeaderStyle Width="50px" />
                                </telerik:TreeListTemplateColumn>
                                <telerik:TreeListTemplateColumn DataField="prjFileName" UniqueName="prjFileName"
                                    HeaderText="Project File Name">
                                    <ItemTemplate>
                                        <asp:Label ID="lblprjFileName" runat="server" CssClass="prjName" entity_pid='<%# Eval("childID") %>' Text='<%# HelperLib.Conversion.C.Str(Eval("prjFileName")) %>'></asp:Label>
                                    </ItemTemplate>
                                    <HeaderStyle Width="25%" />
                                </telerik:TreeListTemplateColumn>
                                <telerik:TreeListTemplateColumn DataField="DbName" UniqueName="DbName"
                                    HeaderText="Database">
                                    <ItemTemplate>
                                        <asp:Label ID="lblDbName" runat="server" CssClass="dbName" entity_pid='<%# Eval("childID") %>' Text='<%# HelperLib.Conversion.C.Str(Eval("DbName")) %>'></asp:Label>
                                    </ItemTemplate>
                                    <HeaderStyle Width="20%" />
                                </telerik:TreeListTemplateColumn>
                                <telerik:TreeListTemplateColumn DataField="ModifyDate" UniqueName="ModifyDate"
                                    HeaderText="ModifyDate">
                                    <ItemTemplate>
                                        <asp:Label ID="lblModifyDate" runat="server" entity_pid='<%# Eval("childID") %>' Text='<%# HelperLib.Conversion.C.Str(Eval("ModifyDate")) %>'></asp:Label>
                                    </ItemTemplate>
                                    <HeaderStyle Width="10%" />
                                </telerik:TreeListTemplateColumn>
                                <telerik:TreeListTemplateColumn DataField="Version" UniqueName="Version"
                                    HeaderText="Version">
                                    <ItemTemplate>
                                        <asp:Label ID="lblVersion" runat="server" entity_pid='<%# Eval("childID") %>' Text='<%# HelperLib.Conversion.C.Str(Eval("Version")) %>'></asp:Label>
                                    </ItemTemplate>
                                    <HeaderStyle Width="10%" />
                                </telerik:TreeListTemplateColumn>
                                
                            </Columns>
                        </telerik:RadTreeList>
                        <asp:Repeater runat="server" Visible="false" ID="prjList">
                            <HeaderTemplate>
                                <div class="template">
                            </HeaderTemplate>
                            <ItemTemplate>
                                <asp:LinkButton CssClass='<%# "prjLink "+Eval("projecttype") %>'
                                    prjtype='<%# Eval("projecttype") %>'
                                    appid='<%# Eval("AppID") %>'
                                    modid='<%# Eval("ModID") %>'
                                    appname='<%# Eval("AppName") %>'
                                    modname='<%# Eval("ModName") %>'
                                    db='<%# Eval("dbname") %>'
                                    CommandArgument='<%# Eval("cs") %>'
                                    OnClick="PrjLink_Click" runat="server">
                                    <div style="display: inline-block; vertical-align: middle;">
                                        <span style="text-decoration: underline; font-size: 18px;"><%# Eval("ProjectName") %></span><br />
                                        <span style="font-style: italic; font-size: 12px">Application : </span><span style="font-weight: bold"><%# Eval("AppName") %></span>
                                        <asp:Panel Visible='<%# Eval("projecttype").ToString()=="Application" %>' runat="server" ID="pnlver">
                                            <span style="font-style: italic; font-size: 12px;">Version : </span><span><%# HelperLib.Conversion.C.Str(Eval("Version")) == "" ? "NA" : Eval("Version") %></span>
                                        </asp:Panel>
                                        <asp:Panel Visible='<%# Eval("projecttype").ToString()=="Modules" %>' runat="server" ID="pnlMod">
                                            <span style="font-style: italic; font-size: 12px">Module : </span><span style="font-weight: bold"><%# Eval("ModName") %></span>
                                            <span style="font-style: italic; font-size: 12px;">Version : </span><span><%# HelperLib.Conversion.C.Str(Eval("Version")) == "" ? "NA" : Eval("Version") %></span>
                                        </asp:Panel>
                                        <span class="prjDate">Last Modified :<b><%#HelperLib.Conversion.C.Date(Eval("ModifyDate")).ToString("dd-MM-yyyy hh:mm tt") %></b> <span style="margin-left: 50px">Db: <%#Eval("dbname") %></span></span>
                                    </div>
                                </asp:LinkButton>
                            </ItemTemplate>
                            <FooterTemplate>
                                </div>
                            </FooterTemplate>
                        </asp:Repeater>
                    </div>
                </td>
                <td style="width: 20%; vertical-align: top; display: none">
                    <table>
                        <tr>
                            <td>
                                <asp:Label ID="Label1" runat="server" Text="d"></asp:Label>
                            </td>
                            <td>
                                <asp:TextBox ID="txtd" runat="server"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="lbl1" runat="server" Text="c"></asp:Label>
                            </td>
                            <td>
                                <asp:TextBox ID="txtc" runat="server"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="lblThread" runat="server" Text="Select Thread File"></asp:Label>
                            </td>
                            <td>
                                <telerik:RadAsyncUpload ID="RadAsyncUploadThread" runat="server" Skin="Vista" MaxFileInputsCount="1" MultipleFileSelection="Disabled" AllowedFileExtensions=".thr"></telerik:RadAsyncUpload>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Button ID="btnThread" runat="server" OnClientClick="return GetThreadFile()" OnClick="btnThread_Click" Text="Install Project" />
                            </td>
                        </tr>
                    </table>
                    <asp:Button ID="btnUpload" runat="server" OnClick="btnUpload_Click" Style="display: none" />
                </td>
            </tr>
        </table>
        <input type="hidden" runat="server" id="hdnPwd" />
         <div id="divPwd" style="display: none; background-color: #fff" class="formSettings">
            <asp:Literal runat="server" ID="ltrPwdReq" Mode="PassThrough"></asp:Literal>
            <span class="mainHeading" style="color: #000">Set Project Password</span>
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
                <a href="javascript:void(0)" onclick="changePassword(this)" class="mdl-button GreenButton">Set Password</a>
                <a href="javascript:void(0)" id="btnCancelPwd" onclick="$('#divPwd').HideModal()" class="mdl-button RedButton">Cancel</a>
            </div>
        </div>
    </form>
    <script type="text/javascript">
        $("#txtSearch").on("input", $.debounce(250, function (e) { TreeSearch(); }));
        function pageload() {
        }

        function ProjectUpload(sender, args) {
            var f = args.get_fileName();
            if (f.indexOf(".prj") == -1) {
                alert("Please select project file.");
            }
            else {
                $("#<%= btnUpload.ClientID %>").click();
    }
}

function GetThreadFile() {
    return true;
        }

        function isValidNode(link) {
            if ($(link).attr('entity_pid') == "-999")
                return false;
            else {
                $("#hdnPwd").val("");
                if ($(link).closest("TR").find(".spnLock").hasClass("lockIcon")) {
                    var p = prompt("Enter Project Password");
                    if (p == null)
                        return false;
                    $("#hdnPwd").val(p);
                }
                return true;
            }
        }


        function searchTree() {
            var tree = $find("<%= rtlApps.ClientID %>");
            return true;
        }

        function TreeSearch() {
            //rtlApps
            var srchTxt = $("#txtSearch").val();
            if (srchTxt != "") {
                $("#rtlApps").find("table").eq(0).find('tr').removeHighlight();
                $("#rtlApps").find("table").eq(0).find('tr').each(function () {
                    var aLink = $(this).find('.ent-title').eq(0);
                    var prjName = $(this).find('.prjName').eq(0);
                    var dbName = $(this).find('.dbName').eq(0);
                    var isChild = $(this).attr('ischild');
                    var found = false;
                    if (aLink.text().contains(srchTxt) || aLink.text() == srchTxt) {
                        $(this).highlight(srchTxt);
                        aLink.closest('tr').show();
                        found = true;
                    }
                    else if (prjName.text().contains(srchTxt) || prjName.text() == srchTxt) {
                        $(this).highlight(srchTxt);
                        prjName.closest('tr').show();
                        found = true;
                    }
                    else if (dbName.text().contains(srchTxt) || dbName.text() == srchTxt) {
                        $(this).highlight(srchTxt);
                        dbName.closest('tr').show();
                        found = true;
                    }
                    else {
                        $(this).hide();
                        found = false;
                    }

                    if (found == true && $(this).find('.modLink').exists()) {
                        var check = true;
                       // $(this).prev().show();
                    }

                }
                );
            }
            else
                $("#rtlApps").find("table").eq(0).find('tr').show();
        }

        function showPassword(s) {
            if ($(s).closest("TR").find(".ent-title").attr('entity_pid') == "-999")
                return false;
            window.prjFile = $(s).closest("TR").find(".ent-title").attr('file');
            window.currentLockLink = s;
            $("#txtOldPass,#txtNewPass,#txtConfirmPass").val("")
            $("#divPwd").ShowModal(1000005);
        }

        function changePassword() {
            if ($("#txtNewPass").val() != $("#txtConfirmPass").val()) {
                alert('"New" password does not match with "Confirm" Password')
                return;
            }
            PageMethods.Execute({ Type: "ChangePassword", "OldPassword": $("#txtOldPass").val(), "NewPassword": $("#txtNewPass").val(), "File": window.prjFile }, function (result) {
                if (result["Success"]) {
                    $("#divPwd").HideModal();
                    $(window.currentLockLink).removeClass("unlockIcon lockIcon").addClass($("#txtNewPass").val() == "" ? "unlockIcon" : "lockIcon")
                    alert('Password has been modified');
                }
                else
                    alert(result["Error"]);
            });
        }
    </script>
</body>
</html>
