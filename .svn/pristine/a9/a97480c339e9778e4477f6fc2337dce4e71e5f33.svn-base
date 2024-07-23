<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="DbUpdate.aspx.cs" Inherits="SensysErp.Meta.DbUpdate" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
</head>
<body>
    <form id="form1" runat="server">
          <asp:ScriptManager ID="ScriptManager1" EnablePageMethods="true" runat="server">
    </asp:ScriptManager>
    <div style="    text-align: center;
    padding-top: 150px;
    font-family: verdana;
    font-size: 23px;
    color: #DE3300;
    text-transform: capitalize;">
        <p>System is being updated</p>
        <span  style="vertical-align: middle;">Please wait <img style="vertical-align: middle;" src="../images/prog.gif"/></span>
    <asp:HiddenField ID="hdnPath" runat="server" />
    </div>
    </form>
    <script>
        function pageLoad() {
            PageMethods.VerifyDB($("#<%=hdnPath.ClientID%>").val(),
                function (result) { if (result != "") window.location = result; else alert('Error Occured'); },
                function () { alert('Error Occured'); });
        }

    </script>
</body>
</html>
