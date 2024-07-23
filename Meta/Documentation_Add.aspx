<%@ Page Language="C#" AutoEventWireup="true" ValidateRequest="false" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="Documentation_Add.aspx.cs" Inherits="SensysErp.Meta.Documentation_Add" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">


    <style type="text/css">
        #DivListTree
        {
            width: 280px;
            overflow: auto;
        }

        html,
        body,
        form
        {
            height: 100%;
        }

        .treeSplitter
        {
            overflow: hidden !important;
        }

        #pnlNodeInfo, #divTemplate
        {
            width: 400px;
            padding: 10px;
            border-radius: 12px;
            border: 1px solid #F7CCD4;
            box-shadow: 2px 2px #FFC1C1;
        }

        .btnScript
        {
            float: right;
        }

        .reTextArea
        {
            width: 100% !important;
        }

        .rtIn:before
        {
            content: "\f022";
            font-family: fontawesome;
            margin-right: 3px;
        }

        .rtIn:hover
        {
            color: red;
        }

        .button.GreenButton
        {
            background-color: #106ab8;
            color: #fff;
        }

        .button
        {
            padding: 4px 6px;
            display: inline-block;
            font-family: nunitoregular;
            font-size: 12px;
            overflow: hidden;
            outline: none !important;
            text-transform: capitalize;
            position: relative;
            text-decoration: none;
            margin: 2px;
            border-radius: 2px;
            vertical-align: middle;
            width: 26px;
        }

            .button.GreenButton:hover
            {
                background-color: green;
            }



        .winHdr
        {
            color: #0877D6;
            font-size: 12px;
            text-shadow: 1px 1px 3px #FFF;
            white-space: nowrap;
            font-family: verdana;
            font-weight: bold;
            text-decoration: underline;
        }

        .toolbox
        {
            height: 16px;
            width: 98%;
            font-size: 15px;
            margin-bottom: 3px;
        }

        .toolboxitem
        {
            display: inline-block;
            width: 30px;
            text-align: center;
            background-color: #008BFF;
            color: #FFF;
            cursor: pointer;
        }

            .toolboxitem:hover
            {
                background-color: #FF395C;
            }

        .addtemplate:before
        {
            content: "\f055";
            font-family: fontawesome;
        }

        .expandall:before
        {
            content: "\f0da";
            font-family: fontawesome;
        }

        .collapseall:before
        {
            content: "\f0d9";
            font-family: fontawesome;
        }

        .expandsel:before
        {
            content: "\f101";
            font-family: fontawesome;
        }

        .collapsesel:before
        {
            content: "\f100";
            font-family: fontawesome;
        }

        .clearall:before
        {
            content: "\f12d";
            font-family: fontawesome;
        }

        .clearsel:before
        {
            content: "\f014";
            font-family: fontawesome;
        }

        .refresh:before
        {
            content: "\f021";
            font-family: fontawesome;
        }
    </style>
    <script>
        var VariablesList = [];
        var Template_VarList = [];
    </script>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />

            <asp:Label ID="lblHdr" CssClass="mainHeading" runat="server" Text=""></asp:Label>
            <div style="position: absolute; top: 3px; right: 14px;">

                <asp:LinkButton ID="btnSave" CssClass="cmdBtn cmdSave" runat="server" OnClientClick="return SaveData()" OnClick="btnSave_Click" Text="Save"></asp:LinkButton>
                <asp:LinkButton ID="btnCancel" class="cmdBtn cmdClose" runat="server" Text="Cancel" OnClientClick="window.close();return false;"></asp:LinkButton>
            </div>

            <div id="divCntr" style="height: 95%; width: 97%;">
                <telerik:RadSplitter ID="rsptrMessage" runat="server" Width="100%" Height="100%" BorderWidth="0">
                    <telerik:RadPane ID="ConfigSectionPanel" Width="284px" Style="background-color: yellow; width: 284px !important; height: 541px; overflow: hidden;" runat="server">
                        <div style="padding: 5px; border-bottom: solid 1px #C6C6C6; white-space: nowrap">
                            <div class="toolbox">
                                <div class="toolboxitem addtemplate" onclick="ShowTemplates()" title="Add Sections From Template"></div>
                                <div class="toolboxitem expandall" onclick="treeExpandAllNodes()" title="Expand All Sections"></div>
                                <div class="toolboxitem collapseall" onclick="treeCollapseAllNodes()" title="Collapse All Sections"></div>
                                <div class="toolboxitem expandsel" title="Expand Selected Section"></div>
                                <div class="toolboxitem collapsesel" title="Collapse Selected Section"></div>
                                <div class="toolboxitem clearall" title="Delete All Sections"></div>
                                <div class="toolboxitem clearsel" title="Delete Selected Section"></div>
                                <div class="toolboxitem refresh" title="Refresh"></div>
                            </div>

                        </div>
                        <div id="DivListTree">
                            <asp:LinkButton ID="lnkAddSections" Style="display: none" runat="server" Text="Add Sections" OnClientClick="return AddMainSection()"></asp:LinkButton>

                            <telerik:RadTreeView ID="rtvList" OnClientNodeClicked="OnClientNodeClicked" OnClientContextMenuShowing="OnClientContextMenuShowing" OnClientContextMenuItemClicking="clientMenuClicking" runat="server">
                                <ContextMenus>
                                    <telerik:RadTreeViewContextMenu ID="ctxMenu" runat="server">
                                        <Items>
                                            <telerik:RadMenuItem Value="Add" Text="Add Sub Section">
                                            </telerik:RadMenuItem>
                                            <telerik:RadMenuItem Value="Edit" Text="Edit Sub Section">
                                            </telerik:RadMenuItem>
                                            <telerik:RadMenuItem Value="Delete" Text="Delete">
                                            </telerik:RadMenuItem>
                                        </Items>
                                    </telerik:RadTreeViewContextMenu>
                                </ContextMenus>
                            </telerik:RadTreeView>
                        </div>

                    </telerik:RadPane>
                    <telerik:RadSplitBar ID="spliterBar" runat="server" CollapseMode="Forward">
                    </telerik:RadSplitBar>
                    <telerik:RadPane OnClientResized="rsptrMessageResize" ID="configNvgPanel" CssClass="treeSplitter" runat="server">
                        <telerik:RadEditor Width="100%" ID="edtMessage" EnableResize="false" SkinID="All" runat="server" ToolbarMode="Default" EditModes="All">
                        </telerik:RadEditor>
                    </telerik:RadPane>
                </telerik:RadSplitter>
            </div>
            <div class="div-form" id="divTemplate" style="display: none;">
                <asp:Label ID="lbl1" runat="server" Text="Select Template : "></asp:Label>
                <asp:DropDownList ID="ddlDefaultTemplate" Visible="false" runat="server"></asp:DropDownList>
                <telerik:RadComboBox ID="rcbDefaultTemplate" runat="server" Width="70%" AutoPostBack="false"></telerik:RadComboBox>
                <div style="padding: 5px; float: right;">
                    <asp:LinkButton ID="btnAddTemplate" CssClass="ActionButton GreenButton" runat="server" OnClientClick="$('#divTemplate').HideModal();return true;" OnClick="btnAddTemplate_Click" Text="Add"></asp:LinkButton>
                    <asp:LinkButton CssClass="ActionButton RedButton" ID="LinkButton1" runat="server" OnClientClick="return HideTemplates();"
                        Text="Cancel"></asp:LinkButton>
                </div>
            </div>

            <div class="div-form" id="pnlNodeInfo" style="display: none;">
                <table class="table-form">
                    <tr>
                        <td class="td-label">
                            <span class="lbl">Enter Name</span>
                        </td>
                        <td class="td-value" width="300px">
                            <telerik:RadTextBox Width="300px" EmptyMessage="Enter Name" runat="server"
                                ID="txtSectionName">
                            </telerik:RadTextBox>
                        </td>
                    </tr>
                    <tr>
                        <td class="td-label">
                            <span class="lbl">Style</span>
                        </td>
                        <td class="td-value">
                            <telerik:RadTextBox Width="300px" TextMode="MultiLine" EmptyMessage="Enter Style" runat="server"
                                ID="txtStyle">
                            </telerik:RadTextBox>
                        </td>
                    </tr>
                    <tr>
                        <td class="td-label">
                            <span class="lbl">Css Class</span>
                        </td>
                        <td class="td-value">
                            <telerik:RadComboBox ID="rcbCss" Width="300px" runat="server">
                                <Items>
                                    <telerik:RadComboBoxItem Text="Please select" Value="0" />
                                    <telerik:RadComboBoxItem Text="ABC" Value="ABC" />
                                    <telerik:RadComboBoxItem Text="H1" Value="H1" />
                                    <telerik:RadComboBoxItem Text="H2" Value="H2" />
                                    <telerik:RadComboBoxItem Text="H3" Value="H3" />
                                </Items>
                            </telerik:RadComboBox>
                        </td>
                    </tr>
                    <tr id="MainSection">
                        <td class="td-value">
                            <asp:RadioButton ID="rdoTechnical" runat="server" Text="Technical Documentation" Checked="true" GroupName="section" />
                        </td>
                        <td class="td-value">
                            <asp:RadioButton ID="rdoUser" runat="server" GroupName="section" Text="User Documentation" />
                        </td>
                    </tr>
                </table>
                <div>
                    <asp:LinkButton Style="width: 55px" CssClass="cmdBtn cmdSave" ID="btnSection" runat="server" OnClientClick="return AddNodeToTree()" Text="Save"></asp:LinkButton>
                    <asp:LinkButton Style="width: 55px" CssClass="cmdBtn cmdClose" ID="btnCancelFolder" runat="server" OnClientClick="$('#pnlNodeInfo').HideModal();return false;"
                        Text="Cancel"></asp:LinkButton>
                </div>
            </div>
            <asp:HiddenField ID="hdnXml" runat="server" />


        </ContentTemplate>
    </asp:UpdatePanel>
    <style>
        .table-form #tblEdtr TD
        {
            padding: 0;
        }
        #<%=UpdatePanel1.ClientID%>
        {
            height:100%;
        }
    </style>
    <script type="text/javascript">

        function rsptrMessageResize() {


            var editor = $find("<%=edtMessage.ClientID%>");
            if (editor)
                editor.setSize($("#RAD_SPLITTER_PANE_CONTENT_ctl00_ContentPlaceHolder1_configNvgPanel").innerWidth(), $("#RAD_SPLITTER_PANE_CONTENT_ctl00_ContentPlaceHolder1_configNvgPanel").innerHeight());
            //$find("<%=rsptrMessage.ClientID%>").set_height(height - 70);
            //$find("<%=rsptrMessage.ClientID%>").set_width(width - 320);
            //$find("<%=configNvgPanel.ClientID%>").set_height(height - 70);
            //$find("<%=configNvgPanel.ClientID%>").set_width(width - 320);
            //$find("<%=ConfigSectionPanel.ClientID%>").set_width(282);

        }

        var currentEditor;
        function pageLoad() {
            var width = $(window).width();
            var height = $(window).height();

            rsptrMessageResize()
            currentEditor = "<%=edtMessage.ClientID%>"
        }


        function SaveData() {
            SetEditorsTextToNode();
            getTreeXml();

            return true;
        }
        var currEditedNode = null;

        function OnClientNodeClicked(sender, eventArgs) {
            var editor = $find("<%= edtMessage.ClientID %>");
            SetEditorsTextToNode();

            var node = eventArgs.get_node();
            currEditedNode = node;
            var nodetext = node.get_text();

            var parent = currEditedNode.get_attributes().getAttribute("parent");
            if (parent == "Technical" || parent == "User")
                editor.set_editable(false);
            else
                editor.set_editable(true);

            var newText = node.get_attributes().getAttribute("datacontent");
            if (newText == undefined)
                newText = "";
            if (currentEditor != undefined && currentEditor.indexOf("edtMessage") > 0) {
                editor.set_html(newText);
            }
        }

        function InitEditor() {

        }


        function SetEditorsTextToNode() {
            if (currEditedNode != null) {
                var parent = currEditedNode.get_attributes().getAttribute("parent");
                if (parent == "Technical" || parent == "User")
                    return;
                var editor = $find("<%= edtMessage.ClientID %>");

                var edtrText = editor.get_html();
                if (edtrText == undefined)
                    edtrText = "";
                currEditedNode.get_attributes().setAttribute("datacontent", edtrText);
            }
        }



        var currSectionMode = null; var currSelectedNode = null;
        function getTreeXml() {
            var radtree = $find("<%= rtvList.ClientID %>");
            var nodeXml = "<Sections ModeType=\"" + $.encodeXml($.QS("ModeType"), true) + "\">";
            for (var i = 0; i < radtree.get_nodes().get_count() ; i++) {
                var text = $.encodeXml(radtree.get_nodes().getNode(i).get_text(), true);
                var datacontent = $.encodeXml(radtree.get_nodes().getNode(i).get_attributes().getAttribute("datacontent"));
                var parent = radtree.get_nodes().getNode(i).get_attributes().getAttribute("parent");

                var stylename = $.encodeXml(radtree.get_nodes().getNode(i).get_attributes().getAttribute("stylename"));
                var cssname = $.encodeXml(radtree.get_nodes().getNode(i).get_attributes().getAttribute("cssname"));

                if (parent == "User")
                    nodeXml += "<User Title=\"" + text + "\" Style=\"" + stylename + "\" Css=\"" + cssname + "\" >";
                else if (parent == "Technical")
                    nodeXml += "<Technical Title=\"" + text + "\" Style=\"" + stylename + "\" Css=\"" + cssname + "\" >";
                else
                    nodeXml += "<Section Title=\"" + text + "\" Style=\"" + stylename + "\" Css=\"" + cssname + "\" >";

                nodeXml += "<Content>" + datacontent + "</Content>";

                if (radtree.get_nodes().getNode(i).get_nodes().get_count() > 0) {
                    nodeXml += FindNodeRecursive(radtree.get_nodes().getNode(i));
                }

                if (parent == "User")
                    nodeXml += "</User>";
                else if (parent == "Technical")
                    nodeXml += "</Technical>";
                else
                    nodeXml += "</Section>";

            }
            nodeXml += "</Sections>";
            $("#<%= hdnXml.ClientID %>").val(nodeXml);
        }


        function FindNodeRecursive(node) {
            var nodeXml = "";
            for (var i = 0; i < node.get_nodes().get_count() ; i++) {
                var text = $.encodeXml(node.get_nodes().getNode(i).get_text(), true);
                var datacontent = $.encodeXml(node.get_nodes().getNode(i).get_attributes().getAttribute("datacontent"));
                var stylename = $.encodeXml(node.get_nodes().getNode(i).get_attributes().getAttribute("stylename"));
                var cssname = $.encodeXml(node.get_nodes().getNode(i).get_attributes().getAttribute("cssname"));

                nodeXml += "<Section Title=\"" + text + "\"  Style=\"" + stylename + "\" Css=\"" + cssname + "\">";
                nodeXml += "<Content>" + datacontent + "</Content>";;
                if (node.get_nodes().getNode(i).get_nodes().get_count() > 0) {
                    nodeXml += FindNodeRecursive(node.get_nodes().getNode(i));
                }

                nodeXml += "</Section>";
            }

            return nodeXml;
        }


        function AddNodeToTree() {
            var sectionName = $find("<%=txtSectionName.ClientID %>").get_value();

            var stylename = $find("<%=txtStyle.ClientID %>").get_value();
            var cssname = $find("<%=rcbCss.ClientID %>").get_selectedItem().get_value();

            if (sectionName.Trim() == "") {
                alert("Please specify section name.");
                return false;
            }

            if (currSectionMode == "Edit") {
                currSelectedNode.set_text(sectionName);
                currSelectedNode.get_attributes().setAttribute("stylename", stylename);
                currSelectedNode.get_attributes().setAttribute("cssname", cssname);
            }
            else {
                var radtree = $find("<%= rtvList.ClientID %>");
                radtree.trackChanges();

                var newnode = new Telerik.Web.UI.RadTreeNode();
                newnode.set_text(sectionName);
                newnode.get_attributes().setAttribute("datacontent", "");
                newnode.get_attributes().setAttribute("stylename", stylename);
                newnode.get_attributes().setAttribute("cssname", cssname);
                newnode.set_cssClass("documentnode");

                if (currSectionMode == "AddMain") {
                    var _node;
                    if ($("#<%= rdoTechnical.ClientID %>").checked()) {
                        _node = radtree.findNodeByAttribute("parent", "Technical");
                    }
                    else
                        _node = radtree.findNodeByAttribute("parent", "User");

                    _node.get_nodes().add(newnode);
                }
                else {
                    if (currSelectedNode != null)
                        currSelectedNode.get_nodes().add(newnode);
                    else {
                        radtree.get_nodes().add(newnode);
                    }
                }

                radtree.commitChanges();
            }

            currSelectedNode = null;
            $("#MainSection").hide();
            $("#pnlNodeInfo").HideModal();

            return false;
        }

        function OnClientContextMenuShowing(sender, eventArgs) {
            var treeNode = eventArgs.get_node();
            var parent = treeNode.get_attributes().getAttribute("parent");

            var contextMenu = $find("<%= ctxMenu.ClientID %>");
            if (parent == "User" || parent == "Technical") {
                contextMenu.findItemByValue("Edit").set_visible(false);
                contextMenu.findItemByValue("Delete").set_visible(false);
            }
            else {
                contextMenu.findItemByValue("Edit").set_visible(true);
                contextMenu.findItemByValue("Delete").set_visible(true);
            }


        }
        function clientMenuClicking(sender, args) {
            var SelectedNode = null;
            var menuItem = args.get_menuItem();
            var treeNode = args.get_node();
            menuItem.get_menu().hide();
            var treeView = args;
            var radtree = $find("<%= rtvList.ClientID %>");
            var txtName = $find("<%= txtSectionName.ClientID %>");
            var txtCssClass = $find("<%= rcbCss.ClientID %>");
            var txtStyle = $find("<%= txtStyle.ClientID %>");


            switch (menuItem.get_value()) {
                case "Add":
                    SelectedNode = args.get_node();
                    var id = SelectedNode.get_text();
                    $("#pnlSection").attr('Mode', "Add");
                    txtName.set_value('');
                    txtCssClass.findItemByValue("0").select();
                    txtStyle.set_value('');
                    currSectionMode = "Add";
                    currSelectedNode = SelectedNode;
                    $("#MainSection").hide();
                    $("#pnlNodeInfo").ShowModal();
                    break;
                case "Edit":
                    txtName.set_value('');
                    txtCssClass.findItemByValue("0").select();
                    txtStyle.set_value('');
                    SelectedNode = args.get_node();
                    var id = SelectedNode.get_text();
                    txtName.set_value(SelectedNode.get_text());
                    txtStyle.set_value(SelectedNode.get_attributes().getAttribute("stylename"));
                    var item = txtCssClass.findItemByValue(SelectedNode.get_attributes().getAttribute("cssname"))
                    if (item != null)
                        item.select();
                    else
                        txtCssClass.findItemByValue("0").select();
                    currSectionMode = "Edit";
                    currSelectedNode = SelectedNode;
                    $("#MainSection").hide();
                    $("#pnlNodeInfo").ShowModal();
                    break;
                case "Delete":
                    currSectionMode = "Delete";
                    SelectedNode = args.get_node();
                    currSelectedNode = SelectedNode;
                    var id = SelectedNode.get_text();
                    DeleteNode(id);
                    break;

            }
            return false;
        }

        function DeleteNode(id) {
            var radtree = $find("<%= rtvList.ClientID %>");
            var node = currSelectedNode;
            if (node.get_nodes().get_count() > 0) {
                alert("Delete child sections first .");
                return false;
            }
            else if (confirm("Are you sure, you want to delete this section")) {
                currSelectedNode.get_parent().get_nodes().remove(node);
            }
            currSelectedNode = null;
            return false;
        }

        function AddMainSection() {
            $find("<%= txtSectionName.ClientID %>").set_value('');
            currSectionMode = "AddMain";
            var radtree = $find("<%= rtvList.ClientID %>");
            currSelectedNode = radtree;
            $("#MainSection").show();
            $("#pnlNodeInfo").ShowModal();
            return false;
        }

        function ShowTemplates() {
            $("#divTemplate").ShowModal();
            return false;
        }

        function HideTemplates() {
            $("#divTemplate").HideModal();
            return false;
        }

        function treeExpandAllNodes() {
            var treeView = $find("<%= rtvList.ClientID %>");
            var nodes = treeView.get_allNodes();
            for (var i = 0; i < nodes.length; i++) {

                if (nodes[i].get_nodes() != null) {
                    nodes[i].expand();
                }
            }
        }

        function treeCollapseAllNodes() {
            var treeView = $find("<%= rtvList.ClientID %>");
            var nodes = treeView.get_allNodes();
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i].get_nodes() != null) {
                    nodes[i].collapse();
                }
            }
        }
    </script>

</asp:Content>
