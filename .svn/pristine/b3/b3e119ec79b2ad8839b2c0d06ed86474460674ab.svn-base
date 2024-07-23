<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Support_Register.aspx.cs" Inherits="SensysErp.Meta.Support_Register" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>Registration</title>

    <script type="text/javascript">
//window.resizeTo(476,405)
	document.documentElement.style.overflowX = "hidden"
        document.documentElement.style.overflowY = "hidden"
   			         
   window.resizeTo(625,270);
   
   var wleft = (screen.width - 625) / 2;
 var wtop = (screen.height - 245) / 2;
   window.moveTo(wleft,wtop);
    </script>

</head>
<body style="background-color: #f2f0e4;">
    <form id="form1" runat="server">
    <div style="height: 100%">
        <table style="position: static; background-color: #f2f0e4; height: 100%;">
            <tr>
                <td rowspan="3" style="width: 100px; vertical-align: baseline; background-color: #ffffff;">
                    <asp:Panel ID="Panel2" runat="server" Height="100%" Style="position: static; background-color: #ffffff"
                        Width="180px">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        &nbsp;
                        <asp:Image ID="Image1" runat="server" ImageUrl="~/images/logo.JPG" Style="position: static;" /></asp:Panel>
                </td>
                <td>
                    <asp:Label ID="Label1" runat="server" Style="text-align: center; font-size: 8pt;
                        font-family: Verdana;" Text="Before you start using Thread-Erp, you need to register at our website. This can be done either manually or automatically. Please note that automatic registration requires connection to internet."
                        Width="434px"></asp:Label>
                </td>
            </tr>
            <tr>
                <td style="text-align: center">
                    <asp:Label ID="Label2" runat="server" Text="Please enter your software key here."
                        Width="290px" Style="font-size: 8pt; font-family: Verdana"></asp:Label><br />
                    <asp:TextBox ID="txtKey" runat="server" Style="text-align: center" MaxLength="9"
                        Width="66px"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td style="text-align: center">
                    <table style="margin-left: 38px">
                        <tr>
                            <td style="width: 100px">
                                <asp:Button ID="btnAutoReg" Height="24px" runat="server" OnClick="btnAutoReg_Click"
                                    OnClientClick="return CheckKey();" Text="Automatic Registration" Width="164px"
                                    SkinID="ToolbarButton" />
                            </td>
                            <td style="width: 100px">
                                <asp:Button ID="btnManReg" Height="24px" runat="server" OnClientClick="return CheckKey();"
                                    OnClick="btnManReg_Click" Text="Manual Registration" Width="164px" SkinID="ToolbarButton" />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <asp:Button ID="btnDemo" runat="server" Height="24px" OnClick="btnDemo_Click" Text="Continue in demo mode"
                                    Width="336px" SkinID="ToolbarButton" />
                            </td>
                        </tr>
                    </table>
                    <asp:LinkButton ID="lbnConfig" runat="server" SkinID="dgLinkButton" Style="z-index: 103;
                        left: 546px; position: absolute; bottom: 5px; right: 5px">Configure</asp:LinkButton>
                </td>
            </tr>
        </table>
    </div>
    <input id="hdnErr" runat="server" type="hidden" />
    </form>

    <script type="text/javascript">
    if(document.getElementById("hdnErr").value !="")
        {
        alert(document.getElementById("hdnErr").value)
        document.getElementById("hdnErr").value="";
        }
        
function Config()
    { 

window.open('config.aspx');
return false;
    }  
    
    var txtKey = document.getElementById("txtKey");
    function CheckKey()
    {
    if(txtKey.value==""){
    alert("Please enter software Key.")
    return false;
    }
    else
    return true;
    }
    </script>

</body>
</html>
