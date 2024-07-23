<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/Default.Master" CodeBehind="EntityTree.aspx.cs" Inherits="SensysErp.Meta.EntityTree"
    ValidateRequest="false" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
   <%# HelperLib.Web.WebResources.GetResource("~/Css/bluegloss/jquery-ui-1.10.3.custom.css")%>
     <%# HelperLib.Web.WebResources.GetResource("~/css/report.css")%>
    <script type="text/javascript">

        //window.title="title"
        document.documentElement.style.overflowX = "hidden"
        document.documentElement.style.overflowY = "hidden"
        var dbCols = [];
        var dispname = "";
        var entitypath = "";
    </script>



</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />

            <div id="divTree" class="sections">
                <div>
                    <telerik:RadTreeView ID="tvRelated" Style="height: 290px; overflow: auto" CssClass="tree" OnClientDoubleClick="OnClientDoubleClick" OnClientNodeClicked="OnClientNodeClick" runat="server">
                        <WebServiceSettings Path="ReportDesigner.aspx" Method="GetNodes"></WebServiceSettings>
                        <Nodes>
                        </Nodes>
                    </telerik:RadTreeView>
                </div>

            </div>
        </ContentTemplate>
    </asp:UpdatePanel>



    <script type="text/javascript">

        var DoubleClick;
        function OnClientDoubleClick(sender, eventArgs) {
            if (eventArgs.get_node().get_nodes().get_count() != "0")
                return;
            if (eventArgs.get_node().get_attributes().getAttribute("IsParent") == "1")
                return;
            if (parent.DoubleClick) {
                var dispname = eventArgs.get_node().get_text();
                var value = eventArgs.get_node().get_value();
                var node = eventArgs.get_node();
                var mainParent = "";
                var currentObject = node.get_parent();
                var s = "";
                var entitypath = "";
                var title = "";

                mainParent = $find("<%= tvRelated.ClientID %>").get_nodes().getItem(0).get_text();
                while (currentObject.get_level() > 0) {
                    if (s != "") {
                        s = currentObject.get_attributes().getAttribute("FieldName") + ":" + currentObject.get_attributes().getAttribute('ParentTable') + ">" + s;
                        title = currentObject.get_text() + "\\" + title;
                    }
                    else {
                        s = currentObject.get_attributes().getAttribute("FieldName") + ":" + currentObject.get_attributes().getAttribute('ParentTable');
                        title = currentObject.get_text();
                    }
                    currentObject = currentObject.get_parent();
                }
                entitypath = s;
                parent.AddSubreportField(dispname, value, entitypath);
            }
            else
                return;
        }


        function OnClientNodeClick(sender, eventArgs) {
            if (eventArgs.get_node().get_nodes().get_count() != "0")
                return;
            if (eventArgs.get_node().get_attributes().getAttribute("IsParent") == "1")
                return;
            if (!parent.DoubleClick) {
                var dispname = eventArgs.get_node().get_text();
                var value = eventArgs.get_node().get_value();
                var node = eventArgs.get_node();
                var mainParent = "";
                var currentObject = node.get_parent();
                var s = "";
                var entitypath = "";
                var title = "";
                var path = node.get_attributes().getAttribute("FieldName");
                mainParent = $find("<%= tvRelated.ClientID %>").get_nodes().getItem(0).get_text();
                while (currentObject.get_level() > 0) {
                    if (s != "") {
                        s = currentObject.get_attributes().getAttribute("FieldName") + ":" + currentObject.get_attributes().getAttribute('ParentTable') + ">" + s;
                        title = currentObject.get_text() + "\\" + title;
                    }
                    else {
                        s = currentObject.get_attributes().getAttribute("FieldName") + ":" + currentObject.get_attributes().getAttribute('ParentTable');
                        title = currentObject.get_text();
                    }
                    path = currentObject.get_attributes().getAttribute("FieldName") + "." + path;
                    currentObject = currentObject.get_parent();
                }
                entitypath = s;
                if (!$.isEmpty($.QS("fn"))) {
                    parent[$.QS("fn")](dispname, value, entitypath, path);
                    return;
                }
                parent.AddToParameter(dispname, value, entitypath);
            }
            else
                return;
        }
    </script>
</asp:Content>
