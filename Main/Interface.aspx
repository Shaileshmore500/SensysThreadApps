<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Interface.aspx.cs" Async="true" Inherits="SensysErp.Interface" %>

<!DOCTYPE html>

<html runat="server" id="htmlDoc" class="docHTML" xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <meta name="viewport" content="width=device-width, user-scalable=yes">
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/modernizr.js")%>

    <%# HelperLib.Web.WebResources.GetResource("~/css/normalize.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/fonts/font.css")%>    
    <%# HelperLib.Web.WebResources.GetResource("~/css/CustomControl/CustomControl.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/black/jquery-ui-1.10.3.custom.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/Interface.css")%>
   
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/json2.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/System.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery-ui-1.10.3.custom.min.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jqHelper.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/UiHelper.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CustomControls.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/moment.min.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Erp.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Ui.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Fn.js")%>    
     <%# QS("_rspv")!="1"?"":HelperLib.Web.WebResources.GetResource("~/Css/materialize.min.css")%>   
    <%# QS("_rspv")!="1"?"": HelperLib.Web.WebResources.GetResource("~/Scripts/materialize.min.js")%>

    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Interface.js")%>


   
    <style>
       .NoRecord
        {
            font-family: nunitolight;
            font-size: 20px;
            color: #C45959;
            font-style: italic;
        }
       .wfTitle
        {
            font-family: nunitolight;
            font-size: 22px;
            text-decoration: underline;
            margin-top: 10px;
            display: block;
        }

            .wfTitle:before
            {
                content: "\f024";
                font-family: fontawesome;
                display: inline-block;
                margin-right: 5px;
            }
    </style>
</head>
<body class="docBody">
    <form id="form1" runat="server">
        <asp:ScriptManager ID="ScriptManager1" runat="server" EnablePageMethods="true">
        </asp:ScriptManager>
          <script>
              $(document.documentElement).addClass("<%= QS("_rspv")!="1"?"":("responsive "+SensysErp.Utility.Utils.GetRespClasses())%>");
              $(document.body).addClass("pg-interface");
              if ("<%=QS("_rspv")%>" == "1")
                  Erp.Responsive = true;
        </script> 
        <%= HelperLib.Web.WebResources.GetResource("~/css/base.css")%>
        <%= QS("_rspv")!="1"?HelperLib.Web.WebResources.GetResource("~/css/form.css"): HelperLib.Web.WebResources.GetResource("~/css/main.css")%>
         <style><%= ErpModel.Globals.Users.CustomTheme%></style>
       <%= Erp.Base.Utils.Utils.GetResourcePath(ErpModel.Globals.AppManager.CurrentAppScriptResource,true)%>
       <%= Erp.Base.Utils.Utils.GetResourcePath(ErpModel.Globals.AppManager.CurrentAppCssResource,true)%>
        <hlp:ActionMessage ID="ActionMessage1" runat="server" />
        <asp:Label runat="server" ID="lblMsg" Visible="false" CssClass="NoRecord" ></asp:Label>
        <span style="display:none" id="_wfTitle" class="wfTitle">Take Action </span>
        <div id="divDesigner">

            <asp:Literal runat="server" EnableViewState="false" Mode="PassThrough" ID="MainContainer"></asp:Literal>
            <div id="divCmd" class="cmd"></div>
        </div>
    </form>

    <script>
        PageMethods.set_path("<%=Page.ResolveClientUrl("~/main/interface.aspx")%>");
        $(function () {
            Erp.Init();          
            Erp.BeginLoadData();
        });

     


        

        

        

    </script>

    
</body>
</html>

