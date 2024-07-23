<%@ Page Language="C#" AutoEventWireup="true" ValidateRequest="false"  CodeBehind="Reports.aspx.cs" Inherits="SensysErp.Main.Reports" %>
<!DOCTYPE html>

<html runat="server" id="htmlDoc" class="docHTML" xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <%# HelperLib.Web.WebResources.GetResource("~/fonts/font.css")%>     
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>

    <script>
        
        function reportLoaded() {
            window.checkInterval = window.setInterval(function () {
                var srch=$(".dxrd-image-search-inactive");
                if (srch.length > 0) {
                    addFilterButton(srch);
                    window.clearInterval(window.checkInterval);
                }
            }, 1000);
            
        }

        function endcallback() {
            parent.$(parent.document.documentElement).removeClass("showProg");
        }
    </script>
</head>
<body>
    <form id="form1" runat="server">
        <input type="submit" onclick="return false" style="display:none" />
      <asp:HiddenField ID="hdnCompIds" runat="server" />
         <asp:HiddenField ID="hdnParameters" runat="server" />
        <asp:HiddenField ID="hdnFilter" Value="DEFAULT" runat="server" />
        <asp:HiddenField ID="hdnReportName" runat="server" />

        <asp:HiddenField ID="hdnReportDesc" runat="server" />
        <asp:Button ID="btnRefresh" runat="server" OnClick="btnrefresh_Click"  style="display:none"/>
        <iframe runat="server" id="ifrDownload" style="display:none"></iframe>       
       <dx:ASPxWebDocumentViewer  ClientSideEvents-Init="reportLoaded" ClientSideEvents-DocumentReady="endcallback" Visible="false"   ClientSideEvents-BeginCallback="reportLoaded"    runat="server" ID="ReportViewer1" EnableViewState="False" />
    <div>
    </div>
    </form>
    <style>
        .dxrd-image-filter:before
        {
            content: "\f0b0";
            font-family: fontawesome;
            font-size: 28px;
            color: #3d3d3d;
            text-align: center;
            width: 100%;
            display: block;
            line-height: 48px;
            cursor:pointer;
        }
        .dxrd-image-filter2:before
        {
            content: "\f0b0";
            font-family: fontawesome;
            font-size: 22px;
            color: #3d3d3d;
            text-align: center;
            cursor: pointer;
            position: absolute;
            left: 12px;
            top: 20px;
        }
        body {
            margin :0;
        }

        .dxrd-preview.dxrd-designer-wrapper {
            background:transparent;
        }

        ._darkBG .dx-designer-viewport .dxd-icon-fill {
            fill: #ffffff;
        }
        ._darkBG .dx-designer-viewport .dxd-back-highlighted.dxd-state-normal:hover:not(.dxd-state-no-hover) {
    background-color: #636363;
}
    </style>
    <script>
        if ($("#ReportViewer1").length <= 0)
            endcallback();

        function PrintReport(compId, filter,params) {
            $("#<%= hdnCompIds.ClientID %>").val(compId);
            $("#<%= hdnFilter.ClientID %>").val(filter);
            $("#<%= hdnParameters.ClientID %>").val(params);
            $("#<%= btnRefresh.ClientID %>").click();
        }

        var filterButtonCreated = false;
        function addFilterButton(b) {
            if (filterButtonCreated)
                return;
            filterButtonCreated = true;
            var f = $("<div title='Filter Records' class='dxrd-tab-item'><div class='dxrd-image-padding dxrd-image-filter'></div></div>");
            f.on("click", parent.addFilter);
            b.parent().after(f);

            b = $(".dxrd-image-search");
            f = $("<div title='Filter Records' class='dxrd-toolbar-item'><div class='dxrd-toolbar-item-image dxrd-image-filter2'></div></div>");
            f.on("click", parent.addFilter);
            b.parent().after(f);
            
        }
        //$(document.documentElement).keypress(function (event) { enter(event) });
        //function enter(event) {
        //    if (event.keyCode == 13) {
        //        event.preventDefault();
        //    }
        //}

        //$(function () { console.log($(".dxrd-image-search-inactive")); })
    </script>
</body>
    
</html>
