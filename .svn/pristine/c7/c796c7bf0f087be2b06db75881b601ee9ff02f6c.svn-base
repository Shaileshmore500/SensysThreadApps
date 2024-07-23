<%@ Page Language="C#" AutoEventWireup="true" ValidateRequest="false" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="MessageTemplate.aspx.cs" Inherits="SensysErp.Meta.MessageTemplate" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">


    <style type="text/css">
        .app:before
        {
            font-family: fontawesome !important;
            content: "\f1b3";
        }

        .module:before
        {
            font-family: fontawesome !important;
            content: "\f1b2";
        }

        .ent:before
        {
            font-family: fontawesome !important;
            content: "\f1c0";
        }

        .ent
        {
            color: #004B80;
            font-weight: bold;
        }

        .module
        {
            color: #008000;
            font-weight: bold;
        }

        .app
        {
            color: #800080;
            font-weight: bold;
        }

        .all
        {
            color: #614402;
            font-weight: bold;
        }

            .all:before
            {
                font-family: fontawesome !important;
                content: "\f0ae";
            }

        #DivListTree
        {
            border: 1px solid;
            width: 246px;
            overflow: auto;
            height: 329px;
        }


        .btnScript
        {
            float: right;
        }

        .reTextArea
        {
            width: 100% !important;
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
            <asp:Panel ID="pnlLetterInfo" runat="server">
                <div class="div-form">
                    <table class="table-form">
                        <tr id="trEntityList" style="displa1y:none">
                            <td class="td-label">
                                <asp:Label ID="lblChild" runat="server" Text="Entity"></asp:Label>
                            </td>
                            <td class="td-value">
                                <telerik:RadDropDownTree Skin="Silk" EnableFiltering="true" ID="rddEntity" AutoPostBack="true" runat="server" Width="400px" OnClientEntryAdding="OnClientEntryAdding" DefaultValue="all" DefaultMessage="Select Entity" ExpandNodeOnSingleClick="true">
                                    <DropDownNodeTemplate>
                                        <div class="<%# DataBinder.Eval(Container.DataItem, "cssStyle") %>">
                                            <span>
                                                <%# DataBinder.Eval(Container, "Text") %>
                                            </span>
                                        </div>
                                    </DropDownNodeTemplate>

                                    <FilterSettings Highlight="Matches" EmptyMessage="Type here to find" />
                                </telerik:RadDropDownTree>
                                <asp:HiddenField ID="hdnEntityID" runat="server" />
                            </td>
                        </tr>
                        <tr>
                            <td class="td-label">
                                <asp:Label ID="lblName" runat="server" Text="Letter Name"></asp:Label>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtName" runat="server" Style="width: 340px"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-label">
                                <asp:Label ID="Label1" runat="server" Text="Letter Code"></asp:Label>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtCode" runat="server" Style="width: 340px"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-label">
                                <asp:Label ID="Label2" runat="server" Text="Letter Description"></asp:Label>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtDesc" runat="server" TextMode="MultiLine" Style="width: 340px" Rows="4"> </asp:TextBox>
                            </td>
                        </tr>
                        <tr id="trResVersion" runat="server">
                            <td class="td-label">
                                <asp:Label ID="Label3" runat="server" Text="Resource Version"></asp:Label>
                            </td>
                            <td class="td-value">
                                <telerik:RadNumericTextBox ID="txtResVersion" runat="server"></telerik:RadNumericTextBox>
                            </td>
                        </tr>
                    </table>
                </div>
            </asp:Panel>
            <div class="div-form">
                <table class="table-form">
                    <tr id="trSubject">
                        <td id="subject" class="td-label">
                            <asp:Label ID="lblSubject" runat="server" Text="Subject"></asp:Label>
                        </td>
                        <td class="td-value">
                            <asp:TextBox ID="txtSubject" Style="margin-left: 28px" Width="541px" Height="90px" TextMode="MultiLine" Rows="3" runat="server"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td id="msg" colspan="2" class="td-value">
                            <table id="tblEdtr">
                                <tr>
                                    <td class="td-value">
                                        <telerik:RadEditor ID="edtMessage" SkinID="All" runat="server" ToolbarMode="Default" EditModes="All" Width="650px" Height="350px">
                                        </telerik:RadEditor>
                                    </td>
                                    <td class="td-value">
                                        <div id="DivListTree">
                                            <telerik:RadTreeView ID="rtvList" OnClientDoubleClick="OnDoubleClick" runat="server">
                                                <WebServiceSettings Path="MessageTemplate.aspx" Method="GetListNodes"></WebServiceSettings>
                                            </telerik:RadTreeView>
                                        </div>
                                        <asp:Button ID="btnScript" CssClass="btnScript ActionButton GreenButton" runat="server" OnClientClick="return openScript()" Text="Add Script" />
                                    </td>
                                </tr>
                            </table>
                        </td>

                    </tr>
                </table>
                <div>
                    <asp:LinkButton ID="btnSave" CssClass="cmdBtn cmdSave" runat="server" OnClientClick="return SaveData()" OnClick="btnSave_Click" Text="Save"></asp:LinkButton>
                    <asp:LinkButton ID="btnCancel" class="cmdBtn cmdClose" runat="server" Text="Cancel" OnClientClick="window.close();return false;"></asp:LinkButton>
                </div>
            </div>

            <asp:HiddenField ID="hdnLetterVar" runat="server" />


        </ContentTemplate>
    </asp:UpdatePanel>
    <style>
        .table-form #tblEdtr TD
        {
            padding: 0;
        }
    </style>
    <script type="text/javascript">
        var currentEditor;
        $("#trEntityList").setDisplay($.isEmpty($.QS("EID")));
        function pageLoad() {
            currentEditor = "<%=edtMessage.ClientID%>"
            $("#<%=edtMessage.ClientID%>").find("iframe").each(function () { $(this.contentWindow.document).on("click", { EditorID: $(this).closest(".RadEditor").attr("id") }, function (e) { currentEditor = e.data.EditorID; }) })
            $("#<%=txtSubject.ClientID %>").on("click", function () { currentEditor = $(this).attr("id") });
            if ($.QS("wf") == "1") {

                $("#trSubject").show();
                loadWFVariables();
              
            }
            loadVarNode(Template_VarList);
            //document.getElementById("ItemPreview").src = "data:image/png;base64," + YourByte;
        }

        function loadWFVariables() {
            var tree = $find("<%= rtvList.ClientID %>");
            tree.get_nodes().clear();


            if ($.QS("wf") == "1") {
                var data = window.opener.GetVariableList();
                VariablesList = data;

                if (!VariablesList)
                    VariablesList = [];
                for (var x = 0 ; x < VariablesList.length ; x++) {

                    if (VariablesList[x]["DataType"] == "Hashtable" || VariablesList[x]["DataType"] == "Byte" || VariablesList[x]["DataType"].indexOf("ist:") > 0)
                        continue;

                    if (VariablesList[x]["Hidden"])
                        continue;
                    tree.trackChanges();
                    var node = new Telerik.Web.UI.RadTreeNode();
                    node.set_text(VariablesList[x]["Name"]);

                    if (VariablesList[x]["DataType"] == "ErpEntity") {

                        node.get_attributes().setAttribute("IsParent", "1");
                        node.get_attributes().setAttribute("ParentTable", VariablesList[x]["EntityID"]);
                        node.set_expandMode(3);
                        node.set_value(VariablesList[x]["EntityID"]);
                        node.get_attributes().setAttribute("EPName", VariablesList[x]["Name"]);
                        node.get_attributes().setAttribute("WF", "0");
                        node.get_attributes().setAttribute("RootNode", "1");
                    }
                    else {
                        node.get_attributes().setAttribute("IsParent", "0");
                        node.get_attributes().setAttribute("ParentTable", "");
                        node.set_value(VariablesList[x]["Name"]);
                        node.get_attributes().setAttribute("EPName", VariablesList[x]["Name"]);
                        node.get_attributes().setAttribute("WF", "1");
                    }


                    node.get_attributes().setAttribute("FieldName", VariablesList[x]["Name"]);

                    node.get_attributes().setAttribute("Parent", VariablesList[x]["Name"]);
                    tree.get_nodes().add(node);
                    

                }

                var node1 = new Telerik.Web.UI.RadTreeNode();
                node1.set_text("Variables");
                node1.set_value("variables");
                node1.get_attributes().setAttribute("IsParent", "1");
                node1.get_attributes().setAttribute("ParentTable", "variables");
                node1.get_attributes().setAttribute("EPName", "");
                node1.get_attributes().setAttribute("WF", "0");
                node1.set_expandMode(0);
                tree.get_nodes().add(node1); 

                tree.commitChanges();
            }
        }

        function SaveData() {

            var xml = getLetterVarXml();
            $("#<%= hdnLetterVar.ClientID %>").val(xml);
            return true;
        }
        function OnDoubleClick(sender, eventArgs) {
            //if ($.QS("PageMode") == "") {
            //    if (eventArgs.get_node().get_nodes().get_count() != "0")
            //        return;

            //    if (eventArgs.get_node().get_attributes().getAttribute("IsParent") == "1")
            //        return;
            //}
            if ($.QS("wf") == "1") {
                if (eventArgs.get_node().get_attributes().getAttribute("WF") == "1") {
                    var content = "[WF." + eventArgs.get_node().get_attributes().getAttribute("EPName") + "]";
                    if (currentEditor != undefined && currentEditor.indexOf("edtMessage") > 0) {
                        editor = $find("<%= edtMessage.ClientID %>");
                        editorPaste = true;
                        editor.pasteHtml(content);
                        editorPaste = false;
                    }
                    else {
                        editor = $("#<%= txtSubject.ClientID %>");
                        editor.insertAtCaret(content);
                    }
                    return
                }
            }

            dispname = eventArgs.get_node().get_text();
            var value = eventArgs.get_node().get_value();
            var epname = eventArgs.get_node().get_attributes().getAttribute("EPName");
            var node = eventArgs.get_node();
            var s = "";
            var title = "";
            var mainParent = "";
            var epnamepath = "";
            var currentObject = node.get_parent();

            mainParent = $find("<%= rtvList.ClientID %>").get_nodes().getItem(0).get_text();
            while (currentObject.get_level() > 0) {
                if (s != "") {
                    s = currentObject.get_attributes().getAttribute("FieldName") + ":" + currentObject.get_attributes().getAttribute('ParentTable') + ">" + s;
                    title = currentObject.get_text() + "\\" + title;
                    epnamepath = currentObject.get_attributes().getAttribute("EPName") + "." + epnamepath;
                }
                else {
                    s = currentObject.get_attributes().getAttribute("FieldName") + ":" + currentObject.get_attributes().getAttribute('ParentTable');
                    title = currentObject.get_text();
                    epnamepath = currentObject.get_attributes().getAttribute("EPName");
                }
                currentObject = currentObject.get_parent();
            }
            entitypath = s;

            if (title != "")
                title = mainParent + "\\" + title + "\\" + dispname;
            else
                title = mainParent + "\\" + dispname;

            var fldFullPath = "[" + value + "#" + entitypath + "]";

            var editor = "";
            var edtxt = "";

            if (value.indexOf("%") != -1)
                edtxt = value;
            else
                edtxt = "<a href='" + fldFullPath + "'>" + "[" + dispname + "]" + "</a>&nbsp;";

            if (epnamepath != "")
                epnamepath += ".";
            var newText = "";
            var userNode = "Field.";
            if ($.QS("u") == "1") {
                if (currentObject.get_level() == 0 && currentObject.get_value() == "tbl_sys_users")
                    userNode = "User.";
            }
            if (currentObject.get_level() == 0 && currentObject.get_value() == "variables")
                newText = "{EXPR:" + value + ":EXPR}";
            else {
                if ($.QS("wf") == "1")
                    newText = "[" + "WF." + currentObject.get_attributes().getAttribute("EPName") + "." + epnamepath + epname + "]";
                else
                    newText = "[" + userNode + "" + epnamepath + epname + "]";
            }
            if (currentEditor != undefined && currentEditor.indexOf("edtMessage") > 0) {
                editor = $find("<%= edtMessage.ClientID %>");
                editorPaste = true;
                editor.pasteHtml(newText);
                editorPaste = false;
            }
            else {
                editor = $("#<%= txtSubject.ClientID %>");

                editor.insertAtCaret(newText);
            }

        }

        function InitEditor(t) {
            return { VariablesList: Template_VarList, Script: "" };
        }
        function refreshLetterGrid(txt, id, ltrid) {
            opener.addNewLetterToGrid(txt, id, ltrid);
            window.close();
        }


        function openScript() {
            var type = "WFTemplate";
            window.open('../Meta/ExprEditor.aspx?EID=' + $.QS("EID") + "&s=WFTemplate&cmd=1&t=1");
            return false;
        }

        function getscriptxml(t, v, s) {
            Template_VarList = v;

            var editor = "";
            var edtxt = "";
            if (currentEditor != undefined && currentEditor.indexOf("edtMessage") > 0) {
                editor = $find("<%= edtMessage.ClientID %>");
                editorPaste = true;
                editor.pasteHtml("{EXPR:" + s + ":EXPR}");
                editorPaste = false;
            }
            else {
                if (s != "") {
                    editor = $("#<%= txtSubject.ClientID %>");
                    editor.insertAtCaret("{EXPR:" + s + ":EXPR}");
                }
            }
            loadVarNode(Template_VarList);

        }

        function loadVarNode(Template_VarList) {
            var tree = $find("<%= rtvList.ClientID %>");
            tree.trackChanges();
            var varNode = tree.findNodeByValue("variables");
            varNode.get_nodes().clear();
            for (var k = 0; k < Template_VarList.length; k++) {
                var node = new Telerik.Web.UI.RadTreeNode();
                node.set_text(Template_VarList[k]["Name"]);
                node.get_attributes().setAttribute("IsParent", "0");
                node.get_attributes().setAttribute("ParentTable", "");
                node.set_value(Template_VarList[k]["Name"]);
                node.get_attributes().setAttribute("EPName", Template_VarList[k]["Name"]);
                node.get_attributes().setAttribute("WF", "1");
                varNode.get_nodes().add(node);
            }
        }
        function getLetterVarXml() {
            var xml = "";
            for (var i = 0; i < Template_VarList.length; i++) {
                var v = Template_VarList[i];
                xml += '<Variable Id="' + $.encodeXml(v.Name, true) + '" OnDemand="' + (v.OnDemand / 1 == 1 ? "1" : "0") + '" Type="' + v.Type + '" ';
                if (v.Type == "Table")
                    xml += ' EntityId="' + $.encodeXml($.defaultVal(v.EntityID, ""), true) + '" ';
                xml += '>';
                if (v.Type == "Table")
                    xml += $.defaultVal(v.Cols, "");
                xml += $.defaultVal(v.Filter, "");
                xml += '</Variable>';
            }
            return xml;
        }
        function OnClientEntryAdding(sender, eventArgs) {
            if (eventArgs.get_node().get_level() == 2 || eventArgs.get_entry().get_value() == "all") {
                $("#<%=hdnEntityID.ClientID%>").val(eventArgs.get_entry().get_value());

            }
            if (eventArgs.get_node().get_level() == 2)
                addNodeToDDl();
        }

        function addNodeToDDl() {
            var tree = $find("<%= rtvList.ClientID %>");
            tree.trackChanges();
            tree.get_nodes().clear();

            var node = new Telerik.Web.UI.RadTreeNode();
            node.set_text("Entity Fields");
            node.set_value($("#<%=hdnEntityID.ClientID %>").val());
            node.set_expandMode(3);
            node.get_attributes().setAttribute("IsParent", "1");
            node.get_attributes().setAttribute("ParentTable", $("#<%=hdnEntityID.ClientID %>").val());
            node.get_attributes().setAttribute("EPName", "");
            node.get_attributes().setAttribute("WF", "0");
            tree.get_nodes().add(node);

            var node1 = new Telerik.Web.UI.RadTreeNode();
            node1.set_text("User");
            node1.set_value("tbl_sys_users");
            node1.set_expandMode(3);
            node1.get_attributes().setAttribute("IsParent", "1");
            node1.get_attributes().setAttribute("ParentTable", "tbl_sys_users");
            node1.get_attributes().setAttribute("EPName", "");
            node1.get_attributes().setAttribute("WF", "0");
            tree.get_nodes().add(node1);
            tree.commitChanges();

            $find("<%= rddEntity.ClientID %>").closeDropDown();
            }


    </script>

</asp:Content>
