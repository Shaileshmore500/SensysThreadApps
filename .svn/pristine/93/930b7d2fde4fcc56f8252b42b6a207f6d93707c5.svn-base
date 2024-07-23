<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="i18_Add.aspx.cs" Inherits="SensysErp.Meta.i18_Add" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">

        //window.title="title"
        document.documentElement.style.overflowX = "hidden"
        document.documentElement.style.overflowY = "hidden"

    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
            <asp:Panel ID="pnlLangInfo" runat="server">
                <table class="fieldinfo">
                    <tr>
                        <td>
                            <asp:Label ID="lblLanguage" runat="server" Text="Language"></asp:Label>
                        </td>
                        <td>
                            <asp:TextBox ID="txtLanguage" runat="server" Width="125px">
                            </asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblIsDeactivated" runat="server" Text="Is Deactivated"></asp:Label>
                        </td>
                        <td>
                            <asp:CheckBox ID="chkIsDeactivated" runat="server" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Button ID="btnSubmit" runat="server" OnClick="btnSubmit_Click" Text="Submit" />
                        </td>
                        <td></td>
                    </tr>
                </table>
            </asp:Panel>
        </ContentTemplate>
    </asp:UpdatePanel>

    <script type="text/javascript">
    </script>
</asp:Content>
