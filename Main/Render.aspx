<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Render.aspx.cs" Inherits="SensysErp.Main.Render" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style>
        html
        {
            background-color:#fff;
        }

    </style>
      <%# HelperLib.Web.WebResources.GetResource("~/Scripts/json2.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/System.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jqHelper.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/moment.min.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Erp.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Ui.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Fn.js")%>
</head>
<body>
    <form id="form1" runat="server">
         <asp:ScriptManager ID="ScriptManager1" runat="server" EnablePageMethods="true">
        </asp:ScriptManager>
    <div id="divContent">
    <asp:Literal ID="ctr" runat="server" Mode="PassThrough"></asp:Literal>
    </div>
        
    </form>
    <script>
        function exportMergeLetter(format) {
            Erp.ExportDocument($("#divContent").html(), format);
        }

    </script>
</body>
</html>
