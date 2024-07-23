<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" ValidateRequest="false" CodeBehind="Notification_Add.aspx.cs" Inherits="SensysErp.Meta.Notification_Add" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

   

    <script type="text/javascript">

        //window.title="title"
       
        var notification = {};
        var groupnotification = {};
        var Template_VarList = [];
        var currentEditor;
    </script>

    <style type="text/css">

        #tvCtrEnt
        {
            position: absolute;
            display: none;
            width: 224px;
            height: 295px;
            background-color: #fff;
            border: solid 2px #4D4C4C;
            z-index: 10;
            box-shadow: 2px 2px 5px #555;
            overflow-y: auto;
        }
        .DarkTheme #tvCtrEnt
        {
            background-color:#313131;
        }
        A.lnkEdt
        {
            color: #00A635;
            text-decoration: none;
            font-size: 14px;
            font-weight: normal;
        }

        .lnkEdt:hover
        {
            color: red;
        }

        .lnkEdt.hasData
        {
            color: red;
        }

        .lnkEdt:before
        {
            content: "\f044";
            font-family: fontawesome;
            margin-right: 3px;
        }

        .notification
        {
        }

        .notificationdata
        {
            border: 1px solid;
            height: 632px;
            overflow-y: auto;
            width:250px;
        }

        .divIcons
        {
            width: 550px !important;
            height: 425px !important;
            top: 150px;
            overflow: hidden;
        }

        .SpnIcon
        {
            font-family: fontawesome !important;
            display: inline-block !important;
            line-height: 38px !important;
            font-size: 28px !important;
            font-weight: normal !important;
            height: 35px !important;
            width: 35px !important;
            color: #000;
            text-align: center !important;
            text-decoration: none !important;
            border: solid 1px #989898 !important;
        }

            .SpnIcon:hover
            {
                border: solid 1px red !important;
            }


            .divDropDown
        {
            position: absolute;
            display: none;
            width: 224px;
            height: 290px;
            background-color: #FFF;
            border: solid 1px #BABABA;
            z-index: 10;
            box-shadow: 2px 2px 5px #555;
        }
            #lblOutput {
    display: inline-block;
    background-color: #E8E8E8;
    color: #008000;
    width: 650px;
    padding: 10px;
    border: solid 1px #808080;
    border-radius: 5px;
    margin: 15px;
    font-size: 15px;
    font-family: monospace;
    white-space: normal;
    word-break: break-word;
    overflow: auto;
    height: 360px;
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
            <asp:Panel ID="pnlCtr" runat="server" Visible="false"></asp:Panel>
            <div class="div-form" id="divMain" runat="server">
                <div id="div1" runat="server">
                    <table class="table-form">
                        <tr>
                            <td>
                                <asp:Label ID="lblName" runat="server" Text="Name"></asp:Label>
                            </td>
                            <td>
                                <asp:TextBox ID="txtName" runat="server"></asp:TextBox>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="lblDescription" runat="server" Text="Description"></asp:Label>
                            </td>
                            <td>
                                <asp:TextBox ID="txtDescription" runat="server" Style="width: 300px" Rows="3" TextMode="MultiLine"></asp:TextBox>
                            </td>
                        </tr>


                        <tr>
                            <td class="td-label">
                                <asp:Label ID="lblChild" runat="server" Text="Entity"></asp:Label>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtEntity" runat="server" ReadOnly="true"></asp:TextBox>
                                <div id="tvCtrEnt">
                                    <telerik:RadTreeView ID="tvEntity" OnClientNodeClicked="selectEntity" runat="server">
                                    </telerik:RadTreeView>
                                </div>
                                <asp:HiddenField ID="hdnEntityID" runat="server" />
                                <asp:HiddenField ID="hdnEntityText" runat="server" />
                                <a id="btnRecordFilter" class="lnkEdt" href="javascript:void(0)" onclick="return OpenRecordFilter('entitytype')">Show Record Filter</a>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" class="td-value">
                                <a id="A1" class="lnkEdt" href="javascript:void(0)" onclick="return OpenRecordFilter('usertype')">Show User Filter</a>
                            </td>
                        </tr>
                        <tr>

                            <td colspan="2" class="td-value">
                                <asp:CheckBox ID="chknotification" runat="server" Text="Notification Mandatory" />
                            </td>
                        </tr>
                       
                        <tr>

                            <td colspan="2" class="td-value">
                                <asp:CheckBox ID="chkDeacivate" runat="server" Text="Deactivate"></asp:CheckBox>
                            </td>
                        </tr>
                        <tr id="trResVersion" runat="server">
                            <td class="td-label">
                                <asp:Label ID="Label1" runat="server" Text="Resource Version"></asp:Label>
                            </td>
                            <td class="td-value">
                                <telerik:RadNumericTextBox ID="txtResVersion" runat="server"></telerik:RadNumericTextBox>
                            </td>
                        </tr>
                    </table>
                </div>

                <asp:Panel ID="pnlNotification" runat="server">
                    <table>
                        <td style="vertical-align: top">
                            <div id="divAcc1">
                                <h3>Notification Details</h3>
                                <div style="height:552px;overflow:auto" class="notification">
                                    <table style="width: 700px">
                                        <tr style="display:none" id="trEntity">
                                           <td class="td-value">
                                               <span><b>Choose Entity :</b></span><br />
                                               <input  onclick="showEntityList(this)" readonly class="txt" style="width:250px" type="text" id="txtEntity" />
                                           <br />
                                                </td>
                                        </tr>
                                        <tr>
                                            <td class="td-value">
                                                <br /><b>
                                                    <asp:Label ID="lblNotificationtitle" runat="server" Text="Notification Title :"></asp:Label></b>
                                                <asp:TextBox ID="txtnotificationtitle" TextMode="MultiLine" Rows="3" runat="server" Width="700px" onfocus="getFocus(this);"></asp:TextBox>
                                                <br />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td-value">
                                                <br /><b>
                                                    <asp:Label ID="lblnotificationMessage" runat="server" Text="Notification Message :"></asp:Label></b>
                                                <telerik:RadEditor ID="edtMessage" SkinID="All" Visible="false" runat="server" ToolbarMode="Default" EditModes="All" Width="700px" Height="350px">
                                                </telerik:RadEditor>
                                                <asp:TextBox ID="txtNotificationBody" runat="server" TextMode="MultiLine" Rows="5" Width="700px" onfocus="getFocus(this);"></asp:TextBox>
                                                <br />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td-value">
                                                <br /><b>
                                                    <asp:Label ID="lblnotificationImage" runat="server" Text="Notification Image :"></asp:Label></b>
                                                <asp:TextBox ID="txtnotificationImage" runat="server" Rows="3" Width="700px" TextMode="MultiLine" onfocus="getFocus(this);"></asp:TextBox>
                                                <br />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span class="lbl" style="width: 115px">
                                                    <input type="checkbox" title="override default icon" onclick='toggleIconDisplay()' id="chkIcon" />
                                                    <a href="javascript:void(0)" onclick="showIconList(this)" style="color: #120CFF;" class="default-link" style="">Choose Icon</a></span>
                                                <input maxlength="1" type="text" class="SpnIcon"
                                                    style="vertical-align: middle; display: inline-block; margin-left: 15px"
                                                    id="spnIcon" runat="server" value="" /><br /></td>
                                        </tr>
                                         <tr>
                                            <td class="td-value">
                                                <b>
                                                    <asp:Label ID="Label2" runat="server" Text="Display Date :"></asp:Label></b><br />
                                                <asp:TextBox ID="txtDisplayDate" runat="server"  Width="250px"  onfocus="getFocus(this);"></asp:TextBox><br /></td>
                                        </tr>
                                        <tr>
                                            <td class="td-value">
                                                <b>
                                                    <asp:Label ID="Label4" runat="server" Text="Trigger Date :"></asp:Label></b><br />
                                                <asp:TextBox ID="txtTriggerDate" runat="server"  Width="250px"  onfocus="getFocus(this);"></asp:TextBox><br /></td>
                                        </tr>
                                        <tr>
                                            <td class="td-value">
                                                <br /><b>
                                                    <asp:Label ID="Label3" runat="server" Text="Expiry Mode :"></asp:Label></b><br />
                                               <asp:DropDownList runat="server" id="ddlExpiry">
                                                   <asp:ListItem Text="" Value=""></asp:ListItem>
                                                   <asp:ListItem Text="None" Value=""></asp:ListItem>
                                                   <asp:ListItem Text="Remove" Value="Remove"></asp:ListItem>
                                                   <asp:ListItem Text="Disable" Value="Disable"></asp:ListItem>
                                               </asp:DropDownList> 
                                                <br />
                                            </td>
                                        </tr>
                                         <tr>
                                            <td class="td-value"><br /><br /><br />
                                                <b>
                                                    <asp:CheckBox ID="chkMobile" onclick="$('.trMobile').setDisplay($(this).checked())" runat="server" Text="Enable Mobile Notifications"></asp:CheckBox></b>
                                            </td>
                                        </tr>
                                        <tr class="trMobile">
                                            <td class="td-value">
                                                <br /><b>
                                                    <asp:Label ID="Label5" runat="server" Text="Related App :"></asp:Label></b><br />
                                               <asp:DropDownList runat="server" id="ddlApplist">
                                               </asp:DropDownList> 
                                                <br />
                                            </td>
                                        </tr>
                                         <tr class="trMobile">
                                            <td class="td-value">
                                                <br /><b>
                                                    <asp:Label ID="Label6" runat="server" Text="Banner Image :"></asp:Label></b>
                                                <asp:TextBox ID="txtBanner" runat="server" Rows="3" Width="700px" TextMode="MultiLine" onfocus="getFocus(this);"></asp:TextBox>
                                                <br />
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <h3>Notification Action</h3>
                                <div style="height:552px;overflow:auto"  id="divifrProps">
                                    <iframe id="ifrProps" src="UrlHelper.aspx?data=notification" scrolling="no" frameborder="0" style="width: 700px; height: 375px"></iframe>
                                </div>
                            </div>
                        </td>
                        <td style="width: 250px; vertical-align: top">
                            <div class="notificationdata">
                                <telerik:RadTreeView ID="rtvList" runat="server" OnClientDoubleClick="OnDoubleClick">
                                    <WebServiceSettings Path="Notification_Add.aspx" Method="GetListNodes"></WebServiceSettings>
                                </telerik:RadTreeView>
                                <a onclick="openScript()" style="font-size: 12px; margin-left: 10px; font-weight: bold; margin-top: 5px; display: inline-block;" href="javascript:void(0)">Insert Script</a>
                            </div>
                        </td>
                    </table>


                </asp:Panel>
                <div class="filter" id="divFilter" style="background-color: #fff; padding: 5px 5px 5px 5px; display: none; top: 25px !important; height: 450px; width: 750px">
                    <iframe id="IfrmFilter" frameborder="0" runat="server" style="height: 98%; width: 98%"></iframe>
                </div>
                <asp:HiddenField ID="hdnRecordFilter" runat="server" />
                <asp:HiddenField ID="hdnUserFilter" runat="server" />
                <asp:HiddenField ID="hdnNotificationAction" runat="server" />
                <asp:HiddenField ID="hdnVars" runat="server" />
                <asp:Button ID="btnLoadEntities" runat="server" OnClick="btnLoadEntities_Click" Style="display: none;" />


            </div>
            <a id="btnGenerate" href="javascript:void(0)" onclick="generateSettings()" class="default-link" style="display:none">Generate</a>
            <span id="lblOutput" style="display:none"></span>
            <span></span>
            <div id="divCmd" class="cmdPanel">
                <asp:LinkButton ID="btnSubmit" CssClass="cmdBtn cmdSave" runat="server" Text="Save" OnClientClick="return validation();" OnClick="btnSubmit_Click"></asp:LinkButton>
                <a href="javascript:void(0)" class="cmdBtn cmdClose" onclick="closeForm()">Cancel</a>
            </div>
            <div id="divIcons" class="formSettings divIcons" style="display: none;">
                <iframe frameborder="0" src="Icons.html" style="height: 100%; width: 100%"></iframe>
            </div>
              <div class="divDropDown" style="width: 300px; height: 290px; overflow: hidden" id="divEntityList">
                    <iframe style="height: 100%; width: 100%" scrolling="no" frameborder="0"></iframe>
                </div>
            
        </ContentTemplate>
    </asp:UpdatePanel>

    <style>
        .notification.ui-widget-content,
        #divifrProps
        {
            background-color: #fff;
            background-image: none;
        }
    </style>
    <script type="text/javascript">

        $(function () {
            $("#divAcc1").accordion({ heightStyle: "content" });
            if ($.QS("PageType") == "WF")
                $("#divCmd").hide();
            if ($.QS("edtr") == "1") {
                $("#trEntity,#btnGenerate").show();
            }
            $("#<%=ddlExpiry.ClientID%>").chosen({ disable_search: true, width: "250px" });
            $('.trMobile').setDisplay($("<%=chkMobile.ClientID%>").checked());
        })
        $(document).click(function (e) {
            var el= $(e.target);
            if ($("#divEntityList").isVisible() && el.prop("tagName") != "INPUT")
                $("#divEntityList").hide();
            
        });
        function selectEntity(sender, args) {
            var t = $("#<%=txtEntity.ClientID %>");
            var n = args.get_node();

            if (n.get_level() < 2 && n.get_value() != "None")
                return;
            if (n.get_value() == "None") {
                t.val("");
                t.removeAttr("entityid");
            }
            else {
                t.val("");
                t.val(n.get_text());
                $("#<%=hdnEntityID.ClientID %>").val(n.get_value());
                $("#<%=hdnEntityText.ClientID %>").val(n.get_text());
                LoadEntityTree();
            }
            $("#tvCtrEnt").hide();


        }
        var currentEntityInput = null;
        function showEntityList(a) {
            currentEntityInput = $(a);
            $("#divEntityList").show().position({ my: "left top", at: "left bottom", collision: "none none", of: $(a) });
            if ($.isEmpty($("#divEntityList").find("iframe").attr("src")))
                $("#divEntityList").find("iframe").attr("src", "fieldbrowser.aspx?mode=ChooseEntity&fn=selectRelEntity");
        }
        function selectRelEntity(txt, val) {
            $("#divEntityList").hide();
            $("#txtEntity").val(txt).attr("entity", val);
            addEntityNode(txt, val);
           }

        function showIconList(a) {
            if (!$(a).prev().checked())
                return;
            $("#divIcons").ShowModal(4000).css("top", "50px");
        }
        function selectIcon(ico) {
            $("#divIcons").HideModal();
            $("#<%=spnIcon.ClientID%>").val(ico);
             $("#<%=spnIcon.ClientID%>").focus();
         }

         function toggleEntityTree(txt) {
             $(txt).next().show();
         }

         //function RefreshParent() {
         //    alert(1);
         //    window.parent.RefreshGrid();
         //    closeForm();
         //    return false;
         //}

         function closeForm() {
             window.close();
             return false;
         }

         function validation() {
             var Name = $("#<%=txtName.ClientID %>").val();
            var Description = $("#<%=txtDescription.ClientID %>").val();
            var Entity = $("#<%=txtEntity.ClientID %>").val();


            var Err = "";
            if (Name == "")
                Err += "Please enter the Name \r\n";
            if (Description == "")
                Err += "Please enter the Description \r\n";
            if (Entity == "")
                Err += "Please select Entity \r\r";


            if (Err != "") {
                alert(Err);
                return false;
            }

            saveXmlData()

        }



        function OnClientItemsRequesting(sender, eventArgs) {
            var context = eventArgs.get_context();
            context["@EntityID"] = $('#<%= hdnEntityID.ClientID %>').val();
             context["Type"] = "LoadFormCodeList";
         }


    </script>

    <script type="text/javascript">


        function pageLoad() {
            $("#<%=edtMessage.ClientID%>").find("iframe").each(function () { $(this.contentWindow.document).on("click", { EditorID: $(this).closest(".RadEditor").attr("id") }, function (e) { currentEditor = e.data.EditorID; }) })
            if ($("#tvCtrEnt").exists()) {
                $("#<%=txtEntity.ClientID %>").on("click", function (e) {
                    toggleEntityTree(e.target); e.stopPropagation();
                })
                $(document).on("click", function () { $("#tvCtrEnt").hide(); })
                $("#tvCtrEnt").on("click", function (e) { e.stopPropagation(); });
            }
           
            if ($.QS("PageType") == "WF")
                loadWFVariables();

            if ($("#<%=spnIcon.ClientID%>").val() != "") {
                $("#chkIcon").checked(true);
            }
            toggleIconDisplay();
            addVariableNode();
            loadVarNode(Template_VarList);
            
        }
        function toggleIconDisplay() {
            $("#chkIcon").closest("TR").prev().setDisplay(!$("#chkIcon").checked());
            $("#chkIcon").closest("TR").find(".default-link,.SpnIcon").setEnable($("#chkIcon").checked(), true)
        }

        function LoadEntityTree() {
            var tree = $find("<%= rtvList.ClientID %>");
            tree.get_nodes().clear();
            tree.trackChanges();
            var node = new Telerik.Web.UI.RadTreeNode();
            node.set_text("Entity Fields");
            node.set_value($("#<%=hdnEntityID.ClientID %>").val());
            node.set_expandMode(3);
            node.get_attributes().setAttribute("IsParent", "1");
            node.get_attributes().setAttribute("ParentTable", $("#<%=hdnEntityID.ClientID %>").val());
            node.get_attributes().setAttribute("EPName", "");
            node.get_attributes().setAttribute("WF", "0");
            tree.get_nodes().add(node);
            tree.commitChanges();
        }
        function addEntityNode(txt,eid) {           
            var tree = $find("<%= rtvList.ClientID %>");
            tree.trackChanges();
            tree.get_nodes().removeAt(1);
            var node = new Telerik.Web.UI.RadTreeNode();
            node.set_text(txt);
            node.get_attributes().setAttribute("IsParent", "1");
            node.get_attributes().setAttribute("ParentTable", eid);
            node.set_expandMode(3);
            node.set_value(eid);
            node.get_attributes().setAttribute("EPName", eid);
            node.get_attributes().setAttribute("WF", "0");            
            tree.get_nodes().add(node);
            tree.commitChanges();
        }
        function addVariableNode() {
            var tree = $find("<%= rtvList.ClientID %>");
            tree.trackChanges();
            var node = new Telerik.Web.UI.RadTreeNode();
            node.set_text("Variables");
            node.get_attributes().setAttribute("IsParent", "1");
            node.get_attributes().setAttribute("ParentTable", "variables");
            node.set_value("variables");
            node.get_attributes().setAttribute("EPName", "variables");
            node.get_attributes().setAttribute("WF", "0");
            node.set_expandMode(0);
            tree.get_nodes().add(node);
            tree.commitChanges();
        }
        function loadWFVariables() {
            var tree = $find("<%= rtvList.ClientID %>");
            tree.get_nodes().clear();
            tree.trackChanges();
            var node = new Telerik.Web.UI.RadTreeNode();
            node.set_text("ReceiverUser");
            node.get_attributes().setAttribute("Receiver", "1");
            node.get_attributes().setAttribute("IsParent", "1");
            node.get_attributes().setAttribute("ParentTable", "tbl_SYS_Users");
            node.set_expandMode(3);
            node.set_value("tbl_SYS_Users");
            node.get_attributes().setAttribute("EPName", "ReceiverUser");
            node.get_attributes().setAttribute("WF", "0");
            node.get_attributes().setAttribute("FieldName", "ReceiverUser");
            node.get_attributes().setAttribute("Parent", "ReceiverUser");
            if ($.QS("edtr") != "1")
                node.get_attributes().setAttribute("RootNode", "1");
            tree.get_nodes().add(node);
            tree.commitChanges();

            var data = (typeof window.parent.GetVariableList == "function" ? window.parent.GetVariableList() : []);
            VariablesList = data;

            if (!VariablesList)
                VariablesList = [];
            for (var x = 0 ; x < VariablesList.length ; x++) {

                if (VariablesList[x]["DataType"] == "Hashtable" || VariablesList[x]["DataType"] == "Byte" || VariablesList[x]["DataType"].indexOf("ist:") > 0)
                    continue;

                if (VariablesList[x]["Hidden"])
                    continue;
                tree.trackChanges();
                node = new Telerik.Web.UI.RadTreeNode();
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
                tree.commitChanges();

            }

        }

        function getFocus(cntrl) {
            currentEditor = $(cntrl).attr("id")

        }



        var Filtertype = "";





        function OpenRecordFilter(type) {
            Filtertype = type;
            var data = new Object();
            data["PageType"] = $.QS("PageType");
            if (type == "usertype") {
                data["EID"] = "tbl_SYS_Users";
                data["xml"] = $("#<%= hdnUserFilter.ClientID %>").val();
            }
            else {
                data["EID"] = $("#<%=hdnEntityID.ClientID %>").val();
                data["xml"] = $("#<%= hdnRecordFilter.ClientID %>").val();
            }
            data["SID"] = sid;
            PageMethods.SetFilterSession(data, function () {
                var url = "../Meta/Filters_Add.aspx?PageMode=Settings&SID=" + sid;
                $('#<%= IfrmFilter.ClientID %>').attr('src', url);
                  $("#divFilter").ShowModal();
            });
          
            return false;
        }

        function hidePopUp() {
            $("#divFilter").HideModal();
            return false;
        }




        function saveFilterXml(filterXml) {
            hidePopUp();


            if (Filtertype == "usertype") {
                $("#<%= hdnUserFilter.ClientID %>").val(filterXml);
            }
            else
                $("#<%= hdnRecordFilter.ClientID %>").val(filterXml);
        }

       

        function OnDoubleClick(sender, eventArgs) {
            var fld = null;
            if (currentEditor.indexOf("###") > -1) {
                if (!$("#" + currentEditor.split('###')[0]).isVisible())
                    return;
            }
            else {
                if (currentEditor != undefined && currentEditor.indexOf("edtMessage") > 0) {
                    if (!$($find("<%= edtMessage.ClientID %>").get_element()).isVisible())
                        return;
                }
                else if (!$("#" + currentEditor).isVisible())
                    return;
            }
            if (currentEditor.indexOf("###") > -1)
                fld = $("#" + currentEditor.split('###')[0])[0].contentWindow.$("#" + currentEditor.split('###')[1]);
            else
                fld = $("#" + currentEditor);
            if (eventArgs.get_node().get_attributes().getAttribute("WF") == "2") {
                var content = "{EXPR:" + eventArgs.get_node().get_attributes().getAttribute("EPName") + ":EXPR}";

                if (currentEditor != undefined && currentEditor.indexOf("edtMessage") > 0) {
                    editor = $find("<%= edtMessage.ClientID %>");
                        editorPaste = true;
                        editor.pasteHtml(content);
                        editorPaste = false;
                }
                return;
            }

            if ($.QS("PageType") == "WF") {
                if (eventArgs.get_node().get_attributes().getAttribute("WF") == "1") {
                    var content = "[WF." + eventArgs.get_node().get_attributes().getAttribute("EPName") + "]";

                    if (currentEditor != undefined && currentEditor.indexOf("edtMessage") > 0) {
                        editor = $find("<%= edtMessage.ClientID %>");
                    editorPaste = true;
                    editor.pasteHtml(content);
                    editorPaste = false;
                }
                else {
                    fld.insertAtCaret(content);
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
            if ($.QS("PageType") == "WF" && $.QS("edtr") != "1")
                newText = "[" + "WF." + currentObject.get_attributes().getAttribute("EPName") + "." + epnamepath + epname + "]";
            else if (currentObject.get_attributes().getAttribute("Receiver") == "1" && $.QS("edtr") == "1")
                newText = "[" + currentObject.get_attributes().getAttribute("EPName") + "." + epnamepath + epname + "]";
            else
                newText = "[FIELD." + epnamepath + epname + "]";

            if (currentEditor != undefined && currentEditor.indexOf("edtMessage") > 0) {
                editor = $find("<%= edtMessage.ClientID %>");
                editorPaste = true;
                editor.pasteHtml(newText);
                editorPaste = false;
            }
            else {
                fld.insertAtCaret(newText);
            }



        }
        function openScript() {
            var type = "WFTemplate";
            window.open('../Meta/ExprEditor.aspx?s=WFTemplate&cmd=1&t=1');
            return false;
        }
        function getscriptxml(t, v, s) {
            Template_VarList = v;
            loadVarNode(Template_VarList);
            if (currentEditor != undefined && currentEditor.indexOf("###") > -1) {
                if (!$("#" + currentEditor.split('###')[0]).isVisible())
                    return;
            }
            else {
                if (currentEditor != undefined && currentEditor.indexOf("edtMessage") > 0) {
                    if (!$($find("<%= edtMessage.ClientID %>").get_element()).isVisible())
                        return;
                }
                else if (!$("#" + currentEditor).isVisible())
                    return;
            }

            var editor = "";
            var edtxt = "";
            if (currentEditor != undefined && currentEditor.indexOf("edtMessage") > 0) {
                editor = $find("<%= edtMessage.ClientID %>");
                editorPaste = true;
                editor.pasteHtml("{EXPR:" + s + ":EXPR}");
                editorPaste = false;
            }
            else {

                if (currentEditor != undefined && currentEditor.indexOf("###") > -1)
                    editor = $("#" + currentEditor.split('###')[0])[0].contentWindow.$("#" + currentEditor.split('###')[1]);
                else
                    editor = $("#" + currentEditor);
            
                editor.insertAtCaret("{EXPR:" + s + ":EXPR}");
            }

            

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
                node.get_attributes().setAttribute("WF", "2");
                varNode.get_nodes().add(node);
            }
        }
        function InitEditor(t) {
            return { VariablesList: Template_VarList, Script: "" };
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

        function saveXmlData() {
            var data = $("#ifrProps")[0].contentWindow.saveUrl();        
            $("#<%=hdnNotificationAction.ClientID%>").val($("#ifrProps")[0].contentWindow.GetUrlXml(data));
            $("#<%=hdnVars.ClientID%>").val(getLetterVarXml());
            
        }

        

        function createXml() {
            var xml = "<Notification>";
            xml += "<NotificationTitle>" + $.encodeXml($("#<%=txtnotificationtitle.ClientID%>").val()) + "</NotificationTitle>"; 
            xml += "<NotificationMessage>" + $.encodeXml($("#<%=txtNotificationBody.ClientID%>").val()) + "</NotificationMessage>";
            //xml += "<NotificationMessage>" + $.encodeXml($find("<%=edtMessage.ClientID%>").get_html()) + "</NotificationMessage>";
            xml += "<NotificationImage>" + ($("#chkIcon").checked() ? $.encodeXml($("#<%=spnIcon.ClientID%>").val().length > 0 ? "&#x" + $("#<%=spnIcon.ClientID%>").val().charCodeAt(0).toString(16) + ";" : "") : $.encodeXml($("#<%=txtnotificationImage.ClientID%>").val())) + "</NotificationImage>";
            xml += "<NotificationAction>" + $("#ifrProps")[0].contentWindow.GetUrlXml($("#ifrProps")[0].contentWindow.saveUrl()) + "</NotificationAction>";
            xml += "<DisplayDate>" + $.encodeXml($("#<%=txtDisplayDate.ClientID%>").val()) + "</DisplayDate>";
            xml += "<TriggerDate>" + $.encodeXml($("#<%=txtTriggerDate.ClientID%>").val()) + "</TriggerDate>"; 
            xml += "<Expiry>" + $.encodeXml($("#<%=ddlExpiry.ClientID%>").val()) + "</Expiry>";

            if ($("#<%=chkMobile.ClientID%>").checked()) {
                xml += "<EnableMobile>" + $.encodeXml($("#<%=chkMobile.ClientID%>").checked() ? 1 : 0) + "</EnableMobile>";
                if (!$.isEmpty($("#<%=ddlApplist.ClientID%>").val()))
                    xml += "<TargetApp>" + $.encodeXml($("#<%=ddlApplist.ClientID%>").val()) + "</TargetApp>";
                if (!$.isEmpty($("#<%=txtBanner.ClientID%>").val()))
                    xml += "<NotificationBanner>" + $.encodeXml($("#<%=txtBanner.ClientID%>").val()) + "</NotificationBanner>";
            }
            xml += "<Variables>" + getLetterVarXml() + "</Variables>";
            xml += "</Notification>";
            return xml;
        }
        function generateSettings() {
            var data = {};
            if (!$.isEmpty($("#txtEntity").attr("entity"))) {
                data["EntityID"] = $("#txtEntity").attr("entity");
                data["RecordID"] = "";
            }
            data["UserID"] = "";
            data["Title"] = $.encodeXml($("#<%=txtnotificationtitle.ClientID%>").val());
            data["Message"] = $.encodeXml($("#<%=txtNotificationBody.ClientID%>").val());
            //data["Message"] = $.encodeXml($find("<%=edtMessage.ClientID%>").get_html());
            data["Image"] = ($("#chkIcon").checked() ? $.encodeXml($("#<%=spnIcon.ClientID%>").val().length > 0 ? "&#x" + $("#<%=spnIcon.ClientID%>").val().charCodeAt(0).toString(16) + ";" : "") : $.encodeXml($("#<%=txtnotificationImage.ClientID%>").val()));
            data["Action"] = $.encodeXml($("#ifrProps")[0].contentWindow.GetUrlXml($("#ifrProps")[0].contentWindow.saveUrl()));
            if (!$.isEmpty($("#<%=ddlExpiry.ClientID%>").val()))
                data["Expiry"] = $.encodeXml($("#<%=ddlExpiry.ClientID%>").val());
            if (!$.isEmpty($("#<%=txtDisplayDate.ClientID%>").val()))
                data["DisplayDate"] = $.encodeXml($("#<%=txtDisplayDate.ClientID%>").val());
            if (!$.isEmpty($("#<%=txtTriggerDate.ClientID%>").val()))
                data["TriggerDate"] = $.encodeXml($("#<%=txtTriggerDate.ClientID%>").val());

            if ($("#<%=chkMobile.ClientID%>").checked()) {
                data["EnableMobile"] = "1";
                if (!$.isEmpty($("#<%=ddlApplist.ClientID%>").val()))
                    data["TargetApp"] = $.encodeXml($("#<%=ddlApplist.ClientID%>").val());
                if (!$.isEmpty($("#<%=txtBanner.ClientID%>").val()))
                    data["Banner"] = $.encodeXml($("#<%=txtBanner.ClientID%>").val());
            }

            if ($.QS("ss") == "1") {
                var s = "new Dictionary&lt;string, object&gt;() {<br/>";
                for (p in data) {
                    s += '{"' + p + '",' + (data[p] === true || data[p] === false ? data[p] : '"' + $.defaultVal(data[p], "").Replace("\"", "\\\"").Replace("\r", "\\r").Replace("\n", "\\n") + '"') + '},<br/>';
                }
                s = s.substring(0, s.length - 6);
                s += "<br/>}"
                $("#lblOutput").html(s).ShowModal({ autoClose: true });
            }
            else
                $("#lblOutput").html(JSON.stringify(data, null, "<br/>")).ShowModal({ autoClose: true });
        }
    </script>

    <script>

      

        function PasteHtmlInEditor(url) {

            editor = $find("<%= edtMessage.ClientID %>");
            editorPaste = true;
            editor.pasteHtml(url);
            editorPaste = false;
        }

    </script>


</asp:Content>
