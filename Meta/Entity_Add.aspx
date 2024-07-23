<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="Entity_Add.aspx.cs" Inherits="SensysErp.Meta.Entity_Add" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">

        //window.title="title"
        document.documentElement.style.overflowX = "hidden"
        document.documentElement.style.overflowY = "hidden"

    </script>
    <style>
        .document:before
        {
            content: "\f15c";
            font-family: fontawesome;
            margin-right: 3px;
        } 
        .document:hover
        {
            color:red;
        }
        .SpnIcon
        {
            font-family: fontawesome !important;
            display: block !important;
            line-height: 38px !important;
            font-size: 28px !important;
            font-weight: normal !important;
            height: 35px !important;
            width: 35px !important;
            color: #000;
            text-align: center !important;
            text-decoration: none !important;
            border: solid 1px #989898  !important;
        }

            .SpnIcon:hover
            {
                border: solid 1px red !important;
            }
        .DarkTheme .SpnIcon
        {
            color: #fff;
        }
        .divIcons
        {
            width: 550px;
            height: 510px;
            top: 150px;
            overflow: hidden;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
            <asp:Panel ID="divIcons" runat="server" CssClass="formSettings divIcons" Style="display: none;">
                <iframe frameborder="0" src="Icons.html" style="height: 100%; width: 100%"></iframe>
            </asp:Panel>

            <div class="div-form">
                <table class="table-form">
                    <tr>
                        <td class="td-label">
                            <asp:Label ID="lblModuleName" runat="server" Text="Module Name"></asp:Label>
                        </td>
                        <td class="td-value">
                            <telerik:RadComboBox ID="rcbModule" runat="server" Width="200px"></telerik:RadComboBox>
                        </td>
                        <td rowspan="2" style="vertical-align: top">
                            <asp:Panel ID="pnlOwnerApp" runat="server" class="cmdPanel">
                                Owner Application :
                                <asp:Label ID="lblOnwerApp" runat="server"></asp:Label>
                            </asp:Panel>
                            <asp:Panel ID="pnlOwnerMod" runat="server" class="cmdPanel" Style="margin-top: 5px">
                                Owner Module :
                                <asp:Label ID="lblOwnerMod" runat="server"></asp:Label>
                            </asp:Panel>
                        </td>
                    </tr>
                    <tr>
                        <td class="td-label">
                            <asp:Label ID="lblDisName" runat="server" Text="Display Name"></asp:Label>
                        </td>
                        <td class="td-value">
                            <asp:TextBox ID="txtDisName" CssClass="dispname" runat="server" Width="200px" onblur="return ValidateCodeName(0)">
                            </asp:TextBox>
                        </td>
                        <td></td>
                    </tr>
                     
                    <tr>
                        <td class="td-label">
                            <asp:Label ID="lblTblName" runat="server" Text="Table Name"></asp:Label>
                        </td>
                        <td class="td-value">
                            <nobr>
                            <asp:Label ID="lblPrefix" runat="server"></asp:Label>
                            <asp:TextBox ID="txtTableName" runat="server" Width="250px" MaxLength="70" onblur="return ValidateCodeName(1)">
                            </asp:TextBox></nobr>
                        </td>
                        <td></td>
                    </tr>
                    
                    <tr id="div2" style="margin-top: 5px;">
                        <td valign="middle" class="td-label">

                            <a href="javascript:void(0)"  onclick="showIconList()" class="default-link" style="margin-top: 11px;  display: inline-block;" >Choose Icon : </a></td>
                        <td class="td-value"><input maxlength="1" type="text" class="SpnIcon"
                            style="vertical-align: middle; display: inline-block"
                            id="spnIcon" runat="server" value="&#xf040;"/>
                        </td>
                         <td></td>
                    </tr>
                    <tr>
                        <td class="td-label">
                            <asp:Label ID="Label2" runat="server" Text="Plural Name"></asp:Label>
                        </td>
                        <td class="td-value">
                            <asp:TextBox ID="txtPlural" CssClass="dispname" runat="server" Width="200px" >
                            </asp:TextBox>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="td-label">
                            <asp:Label ID="lblSort" runat="server" Text="Sort Order"></asp:Label>
                        </td>
                        <td class="td-value">
                            <telerik:RadNumericTextBox ID="ntxtSort" runat="server" ShowSpinButtons="false" Width="75px"></telerik:RadNumericTextBox>
                        </td>
                        <td></td>
                    </tr>
                    <tr id="trResVersion" runat="server">
                        <td class="td-label">
                            <asp:Label ID="Label1" runat="server" Text="Resource Version"></asp:Label>
                        </td>
                        <td class="td-value">
                            <telerik:RadNumericTextBox ID="txtResVersion" runat="server"></telerik:RadNumericTextBox>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td class="td-value">
                            <asp:CheckBox ID="chkAutoIncrement" runat="server" Text="Set Primary Key as Auto Increment"></asp:CheckBox>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td class="td-value">
                            <asp:CheckBox ID="chkDeactivate" runat="server" Text="Deactivate"></asp:CheckBox>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td class="td-value">
                            <asp:CheckBox ID="chkGlobalEntity" runat="server" Text="Is Global Entity"></asp:CheckBox>
                        </td>
                        <td></td>
                    </tr>
                    <tr style="display: none">
                        <td></td>
                        <td class="td-value">
                            <asp:CheckBox ID="chkSystem" runat="server" Text="Is System Defined"></asp:CheckBox>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td class="td-value">
                            <asp:CheckBox ID="chkSearch"  runat="server" Text="Enable quick search from Home Screen"></asp:CheckBox>
                        </td>
                        <td></td>
                    </tr>
                     <tr>
                        <td></td>
                        <td class="td-value">
                            <asp:CheckBox ID="chkAdd"  runat="server" Text="Enable quick add from Home Screen"></asp:CheckBox>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td class="td-value">
                            <asp:TextBox ID="txtQuickAdd" TextMode="MultiLine"  runat="server" ></asp:TextBox>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td class="td-value">
                            <asp:CheckBox ID="chkAddList"  runat="server" Text="Show Add Button In Lookup List"></asp:CheckBox>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td class="td-value">
                            <asp:CheckBox ID="chkAudit"  runat="server" Text="Disable Auditing"></asp:CheckBox>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td class="td-value">
                            <asp:CheckBox ID="chkAuditComp"  runat="server" Text="Mandatory Audit"></asp:CheckBox>
                        </td>
                        <td></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td class="td-value">
                            <asp:CheckBox ID="chkView" onchange="toggleSql()" runat="server" Text="Bind Data From SQL View"></asp:CheckBox>
                        </td>
                        <td></td>
                    </tr>
                    <tr id="trSql">
                        <td></td>
                        <td class="td-value">
                            <asp:CheckBox ID="chkSql" onchange="toggleSql()" runat="server" Text="Sql Query"></asp:CheckBox>
                        </td>
                        <td></td>
                    </tr>
                    <tr id="trSql2">
                        <td></td>
                        <td colspan="2" class="td-value">
                            <asp:TextBox Rows="8" Width="100%" TextMode="MultiLine" runat="server" ID="txtQuery"></asp:TextBox>
                        </td>
                    </tr>
                    <tr >
                        <td></td>
                        <td colspan="2" class="td-value">
                            <asp:LinkButton ID="lnkDocument" CssClass="entity-link" runat="server" OnClientClick="return ShowDocument();" Text="Documentation"></asp:LinkButton>
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
        function pageLoad() {
            toggleSql();
        }
        function showIconList() {
            $("#<%=divIcons.ClientID %>").ShowModal(4000).css("top", "100px");
        }

        function selectIcon(ico) {
            $("#<%=divIcons.ClientID %>").HideModal();
            $("#<%=spnIcon.ClientID%>").val(ico);
            $("#<%=spnIcon.ClientID%>").focus();
        }
        function toggleSql() {
            $("#trSql").setDisplay($("#<%=chkView.ClientID%>").checked());
            $("#trSql2").setDisplay($("#<%=chkView.ClientID%>").checked() && $("#<%=chkSql.ClientID%>").checked());
        }

        function ValidateCodeName(isfield) {
            var txtTable = $("#<%= txtTableName.ClientID %>");
            var txtDispName = $("#<%= txtDisName.ClientID %>");

            $("#<%= txtDisName.ClientID %>").val(txtDispName.val().RemoveSpecialChars());
            if ($.QS("PageType") == "A") {
                if (isfield == 0)
                    $("#<%= txtTableName.ClientID %>").val(txtDispName.val().RemoveSpecialChars(true).toLowerCase());
                else
                    $("#<%= txtTableName.ClientID %>").val(txtTable.val().RemoveSpecialChars(true).toLowerCase());
            }
            return true;
        }


        function AddEntity(ent, module, app, sysdefined, entName) {
            this.parent.UpdateTree('E', app, module, ent + "|" + entName + "|" + sysdefined);
        }

        function UpdateEntity(ent, enttxt) {
            this.parent.UpdateTree('EU', "", "", ent + "|" + enttxt);
        }

        function ReloadConfig(ent, module) {
            $(window.frameElement).removeAttr('src');
            this.parent.UpdateTree('DE', '', module, ent);
        }

        function ConfirmDeletion() {
            if (!confirm("Do you wish to delete this entity?"))
                return false;
        }

        function ValidateFirstChar() {
            var tblnm_disp = $("#<%= txtDisName.ClientID %>").val();
            var firstcharDisp = tblnm_disp.charCodeAt(0);
            if (!((firstcharDisp >= 65 && firstcharDisp <= 90) || (firstcharDisp >= 97 && firstcharDisp <= 122))) {
                alert('Entity Display Name starts with alphabet letter.');
                return false;
            }

            var tblnm = $("#<%= txtTableName.ClientID %>").val();
            var firstcharCode = tblnm.charCodeAt(0);
            if (!((firstcharCode >= 65 && firstcharCode <= 90) || (firstcharCode >= 97 && firstcharCode <= 122))) {
                alert('Table Name starts with alphabet letter.');
                return false;
            }
        }


        function ShowDocument() {

            window.open("Documentation_Add.aspx?PageType=E&ID=" + $.QS("ID") + "&ModeType=Entity&Hdr=Entity: " + $("#<%= txtDisName.ClientID %>").val());
            return false;
        }

        function GetDocument() {
            return "";
        }
    </script>
</asp:Content>
