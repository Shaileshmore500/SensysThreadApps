<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Support_ManualRegisteration.aspx.cs"
    Inherits="SensysErp.Meta.Support_ManualRegisteration" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>Sensys Technologies:Manual Registration</title>

    <script type="text/javascript">
//window.resizeTo(476,405)
				         
   window.resizeTo(370,200);
   
   var wleft = (screen.width - 370) / 2;
 var wtop = (screen.height - 190) / 2;
   window.moveTo(wleft,wtop);
    </script>

</head>
<body>
    <form id="form1" runat="server">
    <div style="height: 190px; background-color: #f2f0e4;">
        <table style="text-align: center; background-color: #f2f0e4;">
            <tr>
                <td style="text-align: right">
                    <asp:HyperLink ID="lbnVisit" NavigateUrl="http://reg.SensysIndia.com" runat="server">Visit Website</asp:HyperLink>
                </td>
            </tr>
            <tr>
                <td style="text-align: center">
                    <asp:Label ID="Label1" runat="server" Text="This code is your machine generated code which you have to enter while registering at our website."
                        Width="355px"></asp:Label>
                </td>
            </tr>
            <tr>
                <td style="text-align: center">
                    <asp:TextBox ID="txtMachineCode" runat="server" Width="279px"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td style="text-align: center">
                    <asp:Label ID="Label2" runat="server" Text="Please enter the unlock code you received after registering from our website and press Register button"
                        Width="355px"></asp:Label>
                </td>
            </tr>
            <tr>
                <td style="text-align: center">
                    <asp:TextBox ID="txtSensysCode" runat="server" Width="279px"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td style="text-align: center">
                    <asp:Button ID="btnOk" runat="server" OnClick="btnOk_Click" Style="position: static"
                        Text="Register" Width="75px" SkinID="ToolbarButton" />&nbsp;
                    <asp:Button ID="btnCancel" runat="server" OnClientClick="return GoBack();" Style="position: static"
                        Text="Cancel" Width="75px" SkinID="ToolbarButton" />
                </td>
            </tr>
        </table>
        <input id="hdnClose" runat="server" type="hidden" /></div>

    <script type="text/javascript">
    if(document.getElementById("hdnClose").value=="1")
    {
        alert('Successfully registered.')
        window.opener.SetRegStatus(true);
        window.close();
    }
     else if(document.getElementById("hdnClose").value.indexOf("Error")>-1)
            alert(document.getElementById("hdnClose").value);


        function GoBack() {
            if ($.QS("FromHomePage") == "1") {
                window.open('Support_Register.aspx?FromHome=' + h, '_self');
                return false;
            }
        }
    </script>

    </form>
</body>
</html>
