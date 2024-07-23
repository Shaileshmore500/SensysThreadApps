<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Download.aspx.cs" Inherits="SensysErp.Meta.Download" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title></title>
</head>
<body>
    <form id="form1" method="post" runat="server">
        <div>
           <asp:Label runat="server" ID="lblMessage" Text="Your report is being created.Please Wait..."></asp:Label> <br />
            <br />
            <br />
            Please close this window after downloading file.
				<asp:Button ID="Button1" Style="Z-INDEX: 101; LEFT: 40px; POSITION: absolute; TOP: 104px; display1: none" runat="server"
                    Text="Button"></asp:Button>
        </div>
    </form>
    <script type="text/javascript">

       
    </script>
</body>
</html>
