<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="LogViewer.aspx.cs" Inherits="SensysErp.Meta.LogViewer" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            
            <asp:Panel ID="pnlLogin" runat="server">
                <asp:Label ID="lblTitle" runat="server"></asp:Label><br />
                <asp:TextBox placeholder="username" runat="server" ID="txtUsn"></asp:TextBox><br />
                <asp:TextBox placeholder="password" TextMode="Password"  runat="server" ID="txtPass"></asp:TextBox><br />
                 <asp:Button ID="btnLogin" runat="server" OnClick="btnLogin_Click" Text="Submit" />
            </asp:Panel>
            <asp:Panel ID="pnlErrorlog" runat="server">

                <asp:Button ID="btnView" runat="server" OnClick="btnView_Click" Text="View Log" /><br />
                <asp:TextBox runat="server" ID="txtLog" Style="width: 90%" Rows="50" TextMode="MultiLine"></asp:TextBox>
            </asp:Panel>
        </div>
    </form>
</body>
</html>
