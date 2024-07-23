<%@ Page Language="C#" AutoEventWireup="true" ValidateRequest="false" CodeBehind="Chart.aspx.cs" Inherits="SensysErp.Main.Chart" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>
<!DOCTYPE html>

<html runat="server" id="htmlDoc" class="docHTML" xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
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
    <%# HelperLib.Web.WebResources.GetResource("~/css/normalize.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/fonts/font.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/knockout-2.2.1.js")%>
    <style>
       .DarkTheme .charttools,._darkBG .charttools
        {
           color:#fff ;
        }
        .charttools
        {
            display: inline-block;
            margin-left: 4px;
            font-family: fontawesome;
            font-size: 16px;
            font-weight: normal;
            color: #000;
            text-decoration: none;
            outline: none !important;
            opacity: 0.3;
        }

            .charttools:hover
            {
                opacity: 1;
            }

        .exportpdf:before
        {
            content: "\f1c1";
        }

        .exportimage:before
        {
            content: "\f1c5";
        }
        
        .close:before
        {
            content: "\00d7";
            font-family: monospace;
            color: red;
        }

        .close:hover
        {
        }

        .print:before
        {
            content: "\f02f";
        }

        .refresh:before
        {
            content: "\f021";
        }

        .DarkTheme .charttools,._darkBG  .charttools
        {
            color:#fff !important;
        }
        #ifrCtr
        {
            position: absolute;
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 5px;
            background-color: #fff;
            display: none;
        }
        .lblNoRecord
        {
                color: #808080;
    font-size: 12px;
    font-family: verdana;
    position: absolute;
    top: 44%;
    left: 33%;
    font-style: italic;
        }
    </style>
    <script>
        var arrGroups;
        var attrGroups;
        var actualName;
        var xfield;
        var yfield;
        var sql;
        var lastGroup;
    </script>
</head>

<body class="pg-chart">
    <form id="form1" runat="server">
        <asp:ScriptManager ID="scr" runat="server"></asp:ScriptManager>
           <%= HelperLib.Web.WebResources.GetResource("~/css/base.css")%>
        <%=QS("_rspv")=="1"?HelperLib.Web.WebResources.GetResource("~/css/main.css"): HelperLib.Web.WebResources.GetResource("~/css/form.css")%>
        <style><%= ErpModel.Globals.Users.CustomTheme%></style>
         <%= Erp.Base.Utils.Utils.GetResourcePath(ErpModel.Globals.AppManager.CurrentAppScriptResource,true)%>
        <%= Erp.Base.Utils.Utils.GetResourcePath(ErpModel.Globals.AppManager.CurrentAppCssResource,true)%>
        <div id="divCtr">
            <div style="position: absolute; top: 3px; left: 0; right: 0; z-index: 100">
                <a title="Export to PDF" onclick="exportRadHtmlChart()" href="javascript:void(0)" class="charttools exportpdf"></a>
                <a title="Export to Image" onclick="exportImage()" href="javascript:void(0)" class="charttools exportimage"></a>
                <a title="Print this chart" onclick="printChartOnly()" href="javascript:void(0)" class="charttools print"></a>
                <a title="Close" id="btnCloseChart" onclick="Erp.CloseWindow()" style="display: none; position: absolute; right: 5px; top: -12px; font-size: 42px;" href="javascript:void(0)" class="charttools close"></a>
                <a title="Refresh" onclick="refreshChart()" href="javascript:void(0)" class="charttools refresh"></a>
            </div>
            <telerik:RadClientExportManager runat="server" ID="RadClientExportManager1">
            </telerik:RadClientExportManager>
            <div id="divCustomContainer"></div>
            <div id="htmlChartContainer" style="margin-top: 20px" runat="server">
                <asp:Label ID="lblNoRecord" CssClass="lblNoRecord" Visible="false" runat="server" Text="No Record Found" ></asp:Label>
                <telerik:RadHtmlChart  ID="RadChart1" runat="server"></telerik:RadHtmlChart>
            </div>
            <div id="Div1" style="margin-top: 10px" runat="server">
            </div>

            <asp:Literal ID="ltrScript" runat="server">
          
            </asp:Literal>
        </div>
        <div id="ifrCtr">
            <iframe style="height: 100%; width: 100%;" id="ifrDetailsWindow" frameborder="0"></iframe>
        </div>
    </form>
    <style>
       
    </style>
    <script>
        

        $(window).on("resize", $.debounce(250, function () {
            resizeChart();
        }));

        function resizeChart() {
            $("#<%=RadChart1.ClientID%>").height(window.innerHeight - 50);
            $find("<%=RadChart1.ClientID%>").get_kendoWidget().resize();
        }

        $(function () {
            if (window.frameElement && window.frameElement.id == "ifrDetailsWindow")
                $("#btnCloseChart").show();

            
        })
        function exportRadHtmlChart() {
            $find('<%=RadClientExportManager1.ClientID%>').exportPDF($(".RadHtmlChart"));
        } 
        function exportImage() {
            $find('<%=RadClientExportManager1.ClientID%>').exportImage($(".RadHtmlChart"));
        }
        function toggleDetailsForm(show, url) {
            var ifr = $("#ifrCtr");
            if (show) {
                $("#divCtr").data("scrollTop", $(document.body).scrollTop());
                $("#divCtr").css("opacity", 0.3);
                ifr.node(0).setVisible(false);
                if (ifr.node(0)[0].contentWindow && ifr.node(0)[0].contentWindow.document)
                    $(ifr.node(0)[0].contentWindow.document.body).setVisible(false);
                ifr.stop(true, true).css("top", $(window).height()).show().animate({ top: 0 }, 250, "easeInSine", function () { $(this).node(0).setVisible(true).attr("src", url); $("#divCtr").hide(); })
            }
            else {
                $("#divCtr").show();
                $("#divCtr").css("opacity", "");
                ifr.stop(true, true).animate({ top: ifr.outerHeight() }, 250, "easeInSine", function () { $("#ifrCtr").hide(); $(document.body).scrollTop($.defaultVal($("#divCtr").data("scrollTop"), 0)); })
            }
        }
        function printChartOnly(sender, args) {

            //Get the sibling chart that is to be hidden during printing
            //var allChartContainers = $('.demo-container'),
            //    currChartContainer = $(sender.get_element().parentNode)[0],
            //    siblingChartContainer;
            //if (allChartContainers[0] == currChartContainer) {
            //    siblingChartContainer = allChartContainers[1];
            //}
            //else {
            //    siblingChartContainer = allChartContainers[0];
            //}
            //Add a class to the sibling chart that will hide it when printing the target chart
            // $(siblingChartContainer).addClass('chartToHide');

            //call the browser print() method
            window.print();

            //Remove the class that hides the sibling chart
            //$(siblingChartContainer).removeClass('chartToHide');
        }

        function pageLoad() {
            resizeChart();
        }

        function createChart(charttype, datasource, seriesArray, tooltipTemplate, charttitle) {


            $telerik.$("#htmlChartContainer").kendoChart({
                seriesDefaults: {
                    type: charttype
                },
                title: {
                    text: charttitle
                },
                dataSource: {
                    data: datasource
                },
                tooltip: {
                    visible: true
                , template: tooltipTemplate
                },
                series: seriesArray

            });
        }
        function createChart(charttype, data) {


            $telerik.$("#htmlChartContainer").kendoChart({
                seriesDefaults: {
                    type: charttype.toLowerCase()
                },
                title: {
                    text: data["ChartTitle"]
                },
                dataSource: {
                    data: data["DataSource"]
                },
                tooltip: {
                    visible: true
                , template: data["ToolTipTemplate"]
                },
                series: data["Series"]

            });
        }
        function refreshChart() {
            $find("<%=RadChart1.ClientID%>").repaint();
            resizeChart();
        }

        function PageMethodSuccess(result) {
            $find("RadChart1").set_dataSource(result["chartData"]);
            $find("RadChart1").set_transitions(true);
            refreshChart()
        }
        function PageMethodError() {
        }

    </script>
</body>

</html>
