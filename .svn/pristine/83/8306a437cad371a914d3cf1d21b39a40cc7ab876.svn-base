<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Support_AutoRegisteration.aspx.cs"
    Inherits="SensysErp.Meta.Support_AutoRegisteration" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>Sensys Technologies:Automatic Registration</title>

    <script type="text/javascript">
//window.resizeTo(476,405)
				         
   window.resizeTo(470,470);   
  var wleft = (screen.width - 470) / 2;
 var wtop = (screen.height - 470) / 2;
   window.moveTo(wleft,wtop);
    </script>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jqhelper.js")%>
</head>
<body>
    <form id="form1" runat="server">
    <div style="height: 470px; width: 670px; background-color: #f2f0e4;">
        <table>
            <tr>
                <td style="text-align: right;">
                    <asp:RadioButton ID="rdoNewUser" runat="server" Style="position: static" Text=" New User"
                        Width="104px" GroupName="user" />
                    <asp:RadioButton ID="rdoExistUser" runat="server" Style="position: static" Text="Existing User"
                        GroupName="user" />
                </td>
            </tr>
            <tr>
                <td id="tdNewUser">
                    <asp:Label ID="Label1" runat="server" Style="position: static" Text="General Information"></asp:Label>
                    <table id="tblNew">
                        <tr>
                            <td>
                                <asp:Label ID="Label2" runat="server" Style="position: static" Text="Company Name*"></asp:Label>
                            </td>
                            <td colspan="3">
                                <asp:TextBox ID="txtCompanyName" runat="server" Style="position: static" Width="342px"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td id="tdContactNew">
                                <asp:Label ID="lblCont" runat="server" Style="position: static" Text="Contact Person*"></asp:Label>
                            </td>
                            <td colspan="3">
                                <asp:TextBox ID="txtContactPerson" runat="server" Style="position: static" Width="342px"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="Label4" runat="server" Style="position: static" Text="Address*"></asp:Label>
                            </td>
                            <td colspan="3">
                                <asp:TextBox ID="txtAddress" runat="server" Style="position: static" Width="342px"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="Label5" runat="server" Style="position: static" Text="City"></asp:Label>
                            </td>
                            <td>
                                <asp:TextBox ID="txtCity" runat="server" Style="position: static"></asp:TextBox>
                            </td>
                            <td>
                                <asp:Label ID="Label6" runat="server" Style="position: static" Text="State"></asp:Label>
                            </td>
                            <td>
                                <asp:TextBox ID="txtState" runat="server" Style="position: static"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="Label7" runat="server" Style="position: static" Text="Pincode"></asp:Label>
                            </td>
                            <td>
                                <asp:TextBox ID="txtPincode" runat="server" Style="position: static"></asp:TextBox>
                            </td>
                            <td>
                                <asp:Label ID="Label8" runat="server" Style="position: static" Text="STD Code" Width="70px"></asp:Label>
                            </td>
                            <td>
                                <asp:TextBox ID="txtSTDCode" runat="server" Style="position: static"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="Label9" runat="server" Style="position: static" Text="Phone1*"></asp:Label>
                            </td>
                            <td>
                                <asp:TextBox ID="txtPhone1" runat="server" Style="position: static"></asp:TextBox>
                            </td>
                            <td>
                                <asp:Label ID="Label10" runat="server" Style="position: static" Text="Phone2"></asp:Label>
                            </td>
                            <td>
                                <asp:TextBox ID="txtPhone2" runat="server" Style="position: static"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="Label11" runat="server" Style="position: static" Text="Mobile"></asp:Label>
                            </td>
                            <td style="height: 26px;">
                                <asp:TextBox ID="txtMobile" runat="server" Style="position: static"></asp:TextBox>
                            </td>
                            <td style="height: 26px">
                                <asp:Label ID="Label12" runat="server" Style="position: static" Text="Fax"></asp:Label>
                            </td>
                            <td style="height: 26px">
                                <asp:TextBox ID="txtFax" runat="server" Style="position: static"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="Label13" runat="server" Style="position: static" Text="Email*"></asp:Label>
                            </td>
                            <td colspan="3">
                                <asp:TextBox ID="txtEmail" runat="server" Style="position: static" Width="342px"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="Label14" runat="server" Style="position: static" Text="Purchase From"></asp:Label>
                            </td>
                            <td>
                                <asp:TextBox ID="txtPurchaseFrom" runat="server" Style="position: static"></asp:TextBox>
                            </td>
                            <td>
                                <asp:Label ID="Label15" runat="server" Style="position: static" Text="Install By"></asp:Label>
                            </td>
                            <td>
                                <asp:TextBox ID="txtInstallBy" runat="server" Style="position: static"></asp:TextBox>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <asp:Label ID="Label16" runat="server" Style="position: static" Text="Login Details"></asp:Label>
                </td>
            </tr>
            <tr>
                <td id="tdExist">
                    <table id="tblOld">
                        <tr>
                            <td id="tdContactOld">
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="Label17" runat="server" Style="position: static" Text="User Name*"></asp:Label>
                            </td>
                            <td>
                                <asp:TextBox ID="txtUserName" runat="server" Style="position: static" ReadOnly="True"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="Label18" runat="server" Style="position: static" Text="Password*"></asp:Label>
                            </td>
                            <td>
                                <asp:TextBox ID="txtPwd" runat="server" Style="position: static" TextMode="Password"></asp:TextBox>
                            </td>
                        </tr>
                        <tr id="trConfirm">
                            <td>
                                <asp:Label ID="Label19" runat="server" Style="position: static" Text="Confirm Password*"
                                    Width="124px"></asp:Label>
                            </td>
                            <td>
                                <asp:TextBox ID="txtConfirmPwd" runat="server" Style="position: static" TextMode="Password"></asp:TextBox>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <asp:Button ID="btnOk" runat="server" OnClientClick="return validateForm()" Style="position: static" Text="Ok" Width="55px"
                        OnClick="btnOk_Click" />
                    <asp:Button ID="btnCancel" runat="server" Style="position: static" Text="Cancel"
                        Width="55px" OnClientClick="return GoBack();" />
                </td>
            </tr>
            <tr>
                <td>
                    <asp:Label ID="lblKey" runat="server"></asp:Label>
                </td>
            </tr>
        </table>
        <input id="hdnClose" runat="server" type="hidden" /></div>
    </form>

    <script type="text/javascript" language="javascript">
        
       
                
        Hide();

        function Hide() {
            if ($("#rdoNewUser").checked()) {
                window.resizeTo(520, 490);
                var wleft = (screen.width - 470) / 2;
                var wtop = (screen.height - 425) / 2;
                window.moveTo(wleft, wtop);
                $("#tdNewUser").show();
                $("#tdContactNew").append($("#lblCont"));
                $("#tdContactNew").next().append($("#txtContactPerson"));
                $("#trConfirm").show();
            }
            else if ($("#rdoExistUser").checked()) {
                window.resizeTo(480, 220);
                var wleft = (screen.width - 480) / 2;
                var wtop = (screen.height - 190) / 2;
                window.moveTo(wleft, wtop);
                $("#tdExist").show();
                $("#tdNewUser").hide();
                $("#tdContactOld").append($("#lblCont"));
                $("#tdContactOld").next().append($("#txtContactPerson"));
                $("#tblOld").show();
                $("#trConfirm").hide();
            }
        }
    
    
        if ($("#hdnClose").val() == "1") {
            alert('Successfully registered.')
            window.opener.SetRegStatus(true);
            window.close();
        }
        else if ($("#hdnClose").val().indexOf("Error") > -1)
            alert($("#hdnClose").val());
   
    
    function GoBack()
    {
        window.open('Support_Register.aspx?FromHome=' + $.QS("FromHomePage"), '_self');
    return false;
    }

    function validateForm() {
        if ($("#rdoNewUser").checked()) {
            if ($("#<%=txtCompanyName.ClientID%>").val() == "")
                return alert("Please enter Company Name") == true;
            if ($("#<%=txtContactPerson.ClientID%>").val() == "")
                return alert("Please enter Contact Person") == true;
            if ($("#<%=txtAddress.ClientID%>").val() == "")
                return alert("Please enter Address") == true;
            if ($("#<%=txtPhone1.ClientID%>").val() == "")
                return alert("Please enter Phone number") == true;
            if ($("#<%=txtEmail.ClientID%>").val() == "")
                return alert("Please enter Email") == true;

            if ($("#<%=txtPwd.ClientID%>").val() == "")
                return alert("Please enter valid password") == true;

            else if ($("#<%=txtPwd.ClientID%>").val() != $("#<%=txtConfirmPwd.ClientID%>").val())
                return alert("Confirm password does not match with password.") == true;
        }

    }
    </script>

</body>
</html>
