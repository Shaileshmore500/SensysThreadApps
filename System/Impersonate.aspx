<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Impersonate.aspx.cs" Inherits="SensysErp.Meta.Impersonate" %>
<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style>

        #header
        {

        }

    </style>
</head>
<body>
    <form id="form1" runat="server">

          <asp:ScriptManager ID="ScriptManager1" runat="server" EnablePageMethods="true">
        </asp:ScriptManager>
    <div>
        <asp:UpdatePanel Style="height: 100%" ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <asp:Repeater ID="rptUser" runat="server">
                <HeaderTemplate>
                <table style=" border:1px solid #df5015; width:500px" cellpadding="0">
                <tr style="background-color:#df5015; color:White">
                <td colspan="2">
                <b>Impersonate User Name:</b>
                </td>
                </tr>
                </HeaderTemplate>
                <ItemTemplate>
                    <tr  style="background-color:#EBEFF0">
                        <td>
                    <asp:LinkButton ID="lnkUserName" runat="Server" Text='<%# HelperLib.Conversion.C.Str(Eval("username")) %>'></asp:LinkButton>
                      </td>
                        </tr>
                </ItemTemplate>
                <FooterTemplate>
                    </table>
                </FooterTemplate>
            </asp:Repeater>
            </ContentTemplate>
            </asp:UpdatePanel>
    
    </div>
    </form>
</body>
</html>
