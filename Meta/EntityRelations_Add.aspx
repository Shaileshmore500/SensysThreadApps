<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="EntityRelations_Add.aspx.cs" Inherits="SensysErp.Meta.EntityRelations_Add" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

    
    <script type="text/javascript">

        //window.title="title"
        document.documentElement.style.overflowX = "hidden"
        document.documentElement.style.overflowY = "hidden"

    </script>

    <style type="text/css">
        #tvCtrEnt
        {
            position: absolute;
            display: none;
            width: 224px;
            height: 295px;
            background-color: #fff;
            border: solid 2px #4D4C4C;
            z-index: 10;
            box-shadow: 2px 2px 5px #555;
            overflow-y: auto;
        }
        .DarkTheme #tvCtrEnt
        {
            background-color:#313131;
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
                            <asp:Label ID="lblChild" runat="server" Text="Child Key Table"></asp:Label>
                        </td>
                        <td class="td-value">
                            <asp:TextBox ID="txtEntity" runat="server" ReadOnly="true"></asp:TextBox>
                            <div id="tvCtrEnt">
                                <telerik:RadTreeView ID="tvEntity" OnClientNodeClicked="selectEntity" runat="server">
                                </telerik:RadTreeView>
                            </div>
                            <asp:HiddenField ID="hdnEntityID" runat="server" />
                            <%--<telerik:RadComboBox ID="rcbChildTable" runat="server" Visible="false" ></telerik:RadComboBox>--%>
                        </td>
                    </tr>
                    <tr style="display: none">
                        <td class="td-label">
                            <asp:Label ID="lblForeign" runat="server" Text="Foreign Key Table"></asp:Label>
                        </td>
                        <td class="td-value">
                            <asp:Label ID="lblForeignTable" runat="server"></asp:Label>
                        </td>
                    </tr>
                    <tr id="trRelation" runat="server">
                        <td class="td-label">
                            <asp:Label ID="lblRelationType" runat="server" Text="Relationship Type"></asp:Label>
                        </td>
                        <td class="td-value">
                            <asp:RadioButtonList ID="rblRelType" runat="server" RepeatDirection="Horizontal">
                                <asp:ListItem Text="One to One" Value="1to1"></asp:ListItem>
                                <asp:ListItem Selected="True" Text="One To Many" Value="1ToMany"></asp:ListItem>
                                <%--<asp:ListItem Text="Many to Many" Value="2"></asp:ListItem>--%>
                            </asp:RadioButtonList>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td class="td-value">
                            <asp:CheckBox ID="chkCascadeDel" runat="server" Text="Cascade Delete"></asp:CheckBox>
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
                </table>
                <div class="cmdPanel">
                    <asp:LinkButton ID="btnSubmit" CssClass="cmdBtn cmdSave" runat="server" Text="Save" OnClick="btnSubmit_Click"></asp:LinkButton>
                    <a href="javascript:void(0)" class="cmdBtn cmdClose" onclick="closeForm()">Cancel</a>
                </div>
            </div>
        </ContentTemplate>


    </asp:UpdatePanel>

    <script type="text/javascript">

        if ($("#tvCtrEnt").exists()) {
            $("#<%=txtEntity.ClientID %>").on("click", function (e) {
                toggleEntityTree(e.target); e.stopPropagation();
            })
            $(document).on("click", function () { $("#tvCtrEnt").hide(); })
            $("#tvCtrEnt").on("click", function (e) { e.stopPropagation(); });
        }

        function selectEntity(sender, args) {

            var t = $("#<%=txtEntity.ClientID %>");
            var n = args.get_node();

            if (n.get_level() < 2 && n.get_value() != "None")
                return;
            if (n.get_value() == "None") {
                t.val("");
                t.removeAttr("entityid");
            }
            else {
                t.val("");
                t.val(n.get_text());
                $("#<%=hdnEntityID.ClientID %>").val(n.get_value());
            }
            $("#tvCtrEnt").hide();
        }


        function toggleEntityTree(txt) {
            $(txt).next().show();
        }

    </script>
</asp:Content>
