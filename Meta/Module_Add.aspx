<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="Module_Add.aspx.cs" Inherits="SensysErp.Meta.Module_Add" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">

        //window.title="title"
        document.documentElement.style.overflowX = "hidden"
        document.documentElement.style.overflowY = "hidden"

    </script>

    <style type="text/css">
        .dispBorder
        {
            border-color: red !important;
        }

        .document:before
        {
            content: "\f15c";
            font-family: fontawesome;
            margin-right: 3px;
        }

        .document:hover
        {
            color: red;
        }
         #divUrlTree
        {
            position: absolute;
            display: none;
            width: 224px;
            height: 295px;
            background-color: #FFF;
            border: solid 2px #4D4C4C;
            border-radius: 5px;
            z-index: 10;
            margin-left: 103px;
            box-shadow: 2px 2px 5px #555;
            overflow-y: auto;
            margin-left: 335px;
            width: 290px;
            height: 265px;
        }
    </style>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
            <div class="div-form">
                <table class="table-form">
                    <tr>
                        <td class="td-label">
                            <asp:Label ID="lblAppName" runat="server" Text="Application Name"></asp:Label>
                        </td>
                        <td class="td-value">
                            <telerik:RadComboBox ID="rcbApp" runat="server" Width="250px" OnClientSelectedIndexChanged="rcbApp_ClientIncdexChange"></telerik:RadComboBox>
                        </td>
                    </tr>
                    <tr style="display: none">
                        <td class="td-label">
                            <asp:Label ID="lblParentName" runat="server" Text="Parent Module"></asp:Label>
                        </td>
                        <td class="td-value">
                            <telerik:RadComboBox ID="rcbParentModule" runat="server" Width="250px"></telerik:RadComboBox>
                        </td>
                    </tr>
                    <tr>
                        <td class="td-label">
                            <asp:Label ID="lblModCode" runat="server" Text="Module Code"></asp:Label>
                        </td>
                        <td class="td-value">
                            <asp:TextBox ID="txtModCode" runat="server" Width="130px" MaxLength="10" onblur="return ValidateCodeName()">
                            </asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td class="td-label">
                            <asp:Label ID="lblModuleName" runat="server" Text="Module Name"></asp:Label>
                        </td>
                        <td class="td-value">
                            <asp:TextBox ID="txtModuleName" runat="server" Width="250px" onblur="return ValidateCodeName()">
                            </asp:TextBox>

                        </td>
                    </tr>
                    <tr>
                        <td class="td-label">
                            <asp:Label ID="lblSort" runat="server" Text="Sort Order"></asp:Label>
                        </td>
                        <td class="td-value">
                            <telerik:RadNumericTextBox ID="txtSortOrder" runat="server" Width="45px" ShowSpinButtons="false"></telerik:RadNumericTextBox>
                        </td>
                    </tr>
                    <tr>
                        <td valign="top" class="td-label">
                            <asp:Label ID="lblModuleDescription" runat="server" Text="Module Description"></asp:Label>
                        </td>
                        <td class="td-value">
                            <asp:TextBox ID="txtModuleDescription" runat="server" Width="250px" TextMode="Multiline"
                                Rows="3">
                            </asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td class="td-value">
                            <asp:LinkButton ID="lnkDocument" CssClass="document" runat="server" OnClientClick="return ShowDocument();" Text="Documentation"></asp:LinkButton>
                        </td>
                    </tr>
                    <tr id="trResVersion" runat="server">
                        <td class="td-label">
                            <asp:Label ID="Label1" runat="server" Text="Resource Version"></asp:Label>
                        </td>
                        <td class="td-value">
                            <telerik:RadNumericTextBox ID="txtResVersion" runat="server"></telerik:RadNumericTextBox>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td class="td-value">
                            <asp:CheckBox ID="chkDeactivate" runat="server" Text="Deactivate"></asp:CheckBox>
                        </td>
                    </tr>
                    <tr style="display: none">
                        <td></td>
                        <td class="td-value">
                            <asp:CheckBox ID="chkSystem" runat="server" Text="Is System Defined"></asp:CheckBox>
                        </td>
                    </tr>
                    <tr id="trDdl" runat="server" >
                        <td class="td-label"><span style="width: 90px" class="lbl">Attach Script</span>  </td>
                        <td>
                            <asp:DropDownList ID="ddlScriptResource" onchange="toggleScriptPath()" CssClass="ddl" runat="server"></asp:DropDownList>
                        </td>
                    </tr>
                    <tr id="trUrl1" runat="server" style="display: none">
                        <td>

                            <span style="width: 90px"
                                class="lbl">Dll Path: </span></td>
                        <td>
                            <asp:TextBox ID="txtExternalScript" Style="width: 500px" CssClass="txt" runat="server"></asp:TextBox><input type="button" id="btnUrl" value="..." />

                            <div id="divUrlTree">
                                <telerik:RadTreeView ID="tvUrl" OnClientNodeClicked="selectUrl" runat="server">
                                </telerik:RadTreeView>
                            </div>
                        </td>
                    </tr>
                    <tr id="trUrl2" runat="server" style="display: none">
                        <td>
                            <span style="width: 90px"
                                class="lbl">Class Name: </span></td>
                        <td>
                            <asp:TextBox ID="txtExternalScriptClass" Style="width: 500px" CssClass="txt" runat="server"></asp:TextBox></span>
                        </td>
                    </tr>
                </table>
                <div class="cmdPanel">
                    <asp:LinkButton ID="btnSubmit" CssClass="cmdBtn cmdSave" runat="server" Text="Save" OnClientClick="return ValidateFirstChar()" OnClick="btnSubmit_Click"></asp:LinkButton>
                    <asp:LinkButton ID="btnDelete" CssClass="cmdBtn cmdDelete" runat="server" Text="Delete" OnClientClick="return ConfirmDeletion()" OnClick="btnDelete_Click"></asp:LinkButton>
                    <a href="javascript:void(0)" class="cmdBtn cmdClose" onclick="closeForm()" style="display: none">Cancel</a>
                </div>
            </div>
        </ContentTemplate>
    </asp:UpdatePanel>

    <script type="text/javascript">

        String.prototype.RemoveSpecialChars = function (space) {
            var outstring = "";
            for (var a = 0; a < this.length; a++) {
                if ((this[a].charCodeAt() >= 48 && this[a].charCodeAt() <= 57) ||
                    (this[a].charCodeAt() >= 65 && this[a].charCodeAt() <= 90) ||
                    (this[a].charCodeAt() >= 97 && this[a].charCodeAt() <= 122) || this[a].charCodeAt() == 95 || this[a].charCodeAt() == 32) {

                    if (this[a].charCodeAt() == 32 && space)
                        continue;
                    outstring = outstring + this[a];
                }
            }
            return outstring;
        }

        $(function () {
            toggleScriptPath();

            $("#btnUrl").on("click", function (e) { $(e.target).next().show(); e.stopPropagation(); })
            $("#divUrlTree").on("click", function (e) { e.stopPropagation(); });
            $(document).on("click", function (e) {
                if ($(".jqModalBG").isVisible())
                    return;
                $("#divUrlTree").hide();
            });
        });
        function pageLoad() {
            toggleScriptPath();
        }
        function selectUrl(sender, args) {
            var n = args.get_node();
            if (n.get_attributes().getAttribute("IsFile")) {
                $("#<%=txtExternalScript.ClientID%>").val(n.get_value());
                $("#divUrlTree").hide();
            }
        }
        function toggleScriptPath() {
            $("#<%= trUrl1.ClientID %>,#<%= trUrl2.ClientID %>").setDisplay($("#<%=ddlScriptResource.ClientID%>").val() == "Ext")
        }

        function ValidateCodeName() {

            var modcode = $("#<%= txtModCode.ClientID %>");
            var modName = $("#<%= txtModuleName.ClientID %>");

            if ($.QS("PageType") == "A")
                $("#<%= txtModCode.ClientID %>").val(modcode.val().RemoveSpecialChars(true));

            $("#<%= txtModuleName.ClientID %>").val(modName.val().RemoveSpecialChars());

            return true;
        }

        function rcbApp_ClientIncdexChange(sender, args) {
            var ord = $find("<%= rcbApp.ClientID %>").get_selectedItem().get_attributes().getAttribute("moduleOrder");
            if (ord == "0")
                $find("<%= txtSortOrder.ClientID %>").set_value(1);
            else
                $find("<%= txtSortOrder.ClientID %>").set_value((ord / 1) + 1);
        }

        function AddModule(appid, appcode, mod, modtxt) {
            this.parent.UpdateTree('M', appid + '|' + appcode, mod + '|' + modtxt, "");
        }

        function UpdateModule(modid, modtxt) {
            this.parent.UpdateTree('MU', "", modid + '|' + modtxt, "");
        }

        function ReloadConfig(mod) {
            $(window.frameElement).removeAttr('src');
            this.parent.UpdateTree('DM', '', mod, '');
        }

        function ConfirmDeletion() {
            if (!confirm("Do you wish to delete this entity?"))
                return false;
        }

        function ValidateFirstChar() {
            var tblnm_disp = $("#<%= txtModCode.ClientID %>").val();
            var firstcharDisp = tblnm_disp.charCodeAt(0);
            if (!((firstcharDisp >= 65 && firstcharDisp <= 90) || (firstcharDisp >= 97 && firstcharDisp <= 122))) {
                alert('Module Code must be starts with alphabet letter.');
                return false;
            }

            var tblnm = $("#<%= txtModuleName.ClientID %>").val();
            var firstcharCode = tblnm.charCodeAt(0);
            if (!((firstcharCode >= 65 && firstcharCode <= 90) || (firstcharCode >= 97 && firstcharCode <= 122))) {
                alert('Module Name must be starts with alphabet letter.');
                return false;
            }
        }
        function ShowDocument() {

            window.open("Documentation_Add.aspx?PageType=E&ID=" + $.QS("ID") + "&ModeType=Module&Hdr=Module: " + $("#<%= txtModuleName.ClientID %>").val());
            return false;
        }
    </script>
</asp:Content>
