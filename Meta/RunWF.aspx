<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="RunWF.aspx.cs" Async="true"  Inherits="SensysErp.Meta.RunWF" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
  
    
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/modernizr.js")%>

        <%# HelperLib.Web.WebResources.GetResource("~/css/normalize.css")%>
        <%# HelperLib.Web.WebResources.GetResource("~/fonts/font.css")%>       
        <%# HelperLib.Web.WebResources.GetResource("~/css/CustomControl/CustomControl.css")%>
      
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/System.js")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery-ui-1.10.3.custom.min.js")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jqHelper.js")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/UiHelper.js")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CustomControls.js")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/moment.min.js")%>
    <style>
        .header
        {
            font-family: nunitolight;
            font-size: 20px;
            color: #9C0000;
            margin-bottom: 5px;
            display: block;
        }

        .item
        {
            font-family: nunitoregular;
            font-size: 12px;
            border: solid 1px #CECECE;
            padding-right: 5px;
            padding-bottom: 32px;
            background-color: #F8F8F8;
            margin-bottom: 5px;
        }

            .item .title
            {
                font-family: nunitobold;
                display: block;
                text-decoration: underline;
                font-size: 15px;
                color: #F00;
                margin-left: 5px;
                text-transform: uppercase;
                margin-top: 3px;
            }

            .item .desc
            {
                display: block;
                padding-left: 20px;
                color: #5A4444;
            }

            .item .btn
            {
                float: right;
            }

        .NoRecord
        {
            font-family: nunitolight;
            font-size: 20px;
            color: #C45959;
            font-style: italic;
        }

        #lblMsg
        {
            width: 100%;
            display: block;
            text-align: center;
            font-family: nunitoregular;
            background-color: #E1FCB7;
            color: #002000;
            font-size: 13px;
            border: solid 1px #008000;
            border-radius: 5px;
            margin: 8px 0;
            padding: 5px 0;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
           <%= HelperLib.Web.WebResources.GetResource("~/css/base.css")%>
        <div>
            <asp:Label runat="server" ID="lblTitle" CssClass="header" Text="List of applicable workflows for selected record:"></asp:Label>
            <asp:Label runat="server" ID="lblMsg" Visible="false" CssClass="msg" Text="Workflow Process Initiated"></asp:Label>
            <asp:Repeater ID="rptWF" runat="server">

                <ItemTemplate>
                    <div class="item">
                        <span class="title"><%# Eval("WorkflowName").ToString() %></span>
                        <span class="desc"><%# Eval("Description").ToString() %></span>
                        <asp:Button ID="btnRun" CssClass="btn ActionButton GreenButton" runat="server" OnClientClick="$('#lblMsg').hide();return confirm('Do you wish to continue?')" OnClick="ExecWF" CommandName='<%#Eval("WFScenario_Pid").ToString() %>' wfid='<%#Eval("Workflow_Pid").ToString() %>' Text="Execute" />
                    </div>
                </ItemTemplate>

            </asp:Repeater>


        </div>
    </form>
</body>
</html>
