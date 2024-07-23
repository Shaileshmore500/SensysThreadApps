<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="Workflow_Add.aspx.cs" Inherits="SensysErp.Meta.Workflow_Add" ValidateRequest="false" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">


        window.ht = 500;
        window.wd = 600;


    </script>
    <style>
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
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
            <div class="div-form">
                <table id="tdvalue" class="table-form" style="width: 510px;">
                    <tr runat="server" id="trLink" visible="false">
                        <td colspan="2" class="td-label" style="padding-bottom: 30px">
                            <asp:Label ID="Label2" runat="server" Style="font-size: 15px; font-family: nunitobold; text-decoration: underline;" Text="Link To This Workflow"></asp:Label><br />
                            <asp:HyperLink ID="lnkWf" Style="color: #FF00B8; font-family: nunitobold; word-break: break-all;" Target="_blank" runat="server"></asp:HyperLink>
                        </td>
                    </tr>
                    <tr>
                        <td class="td-label">
                            <asp:Label ID="Label1" runat="server" Text="Workflow Code"></asp:Label>
                        </td>
                        <td class="td-value">
                            <asp:TextBox ID="txtWfCode" runat="server" Width="150px" MaxLength="70">
                            </asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td class="td-label">
                            <asp:Label ID="lblWorkflowName" runat="server" Text="Workflow Name"></asp:Label>
                        </td>
                        <td class="td-value">
                            <asp:TextBox ID="txtWorkflowName" runat="server" Width="150px" MaxLength="70">
                            </asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td valign="top" class="td-label">
                            <asp:Label ID="lblWorkFlowDesc" runat="server" Text="Description"></asp:Label>
                        </td>
                        <td class="td-value">
                            <asp:TextBox ID="txtWorkflowDesc" runat="server" Width="250px" TextMode="Multiline" Rows="3">
                            </asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td valign="top" class="td-label">
                            <asp:Label ID="lblWorkflowType" runat="server" Text="Workflow Type"></asp:Label>
                        </td>
                        <td class="td-value">
                            <asp:DropDownList ID="rcbWorkflowType" onchange="toggleDisplay($(this))" runat="server">
                                <Items>
                                    <asp:ListItem Text="Task" Value="Task" />
                                    <asp:ListItem Text="Workflow" Value="Workflow" />
                                    <asp:ListItem Text="Dialogs/Wizards" Value="Dialog" />
                                </Items>
                            </asp:DropDownList>
                        </td>
                    </tr>
                    <tr id="trDlg">
                        <td class="td-label">Bound To Entity</td>
                        <td class="td-value">
                            <asp:CheckBox ID="chkBound" onclick="$('#trEnt').setDisplay($(this).checked())" data-chk-on="yes" data-chk-off="no" runat="server"></asp:CheckBox>
                        </td>
                    </tr>
                    <tr id="trEnt">
                        <td valign="top" class="td-label">
                            <asp:Label ID="lblEntity" runat="server" Text="Entity"></asp:Label>
                        </td>
                        <td class="td-value">
                            <%-- <asp:DropDownList ID="rcbEntity" runat="server"></asp:DropDownList>--%>
                            <div>
                                <telerik:RadDropDownTree Skin="Silk" ID="rddEntity" EnableFiltering="true" RenderMode="Lightweight" AutoPostBack="true" runat="server" Width="400px" OnClientEntryAdding="OnClientEntryAdding" DefaultValue="all" DefaultMessage="Select Entity" ExpandNodeOnSingleClick="true">
                                    <DropDownNodeTemplate>
                                        <div class="<%# DataBinder.Eval(Container.DataItem, "cssStyle") %>">
                                            <span>
                                                <%# DataBinder.Eval(Container, "Text") %>
                                            </span>
                                        </div>
                                    </DropDownNodeTemplate>

                                    <FilterSettings Highlight="Matches" EmptyMessage="Type here to find" />
                                </telerik:RadDropDownTree>
                            </div>
                            <asp:HiddenField ID="hdnEntityID" runat="server" />
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
                <table class="table-form" id="tblWf">

                    <tr>
                        <td class="td-label">On Demand</td>
                        <td class="td-value">
                            <asp:CheckBox ID="chkOnDemand" ondemand="1" data-chk-on="yes" data-chk-off="no" runat="server" onclick="toggleBg($(this))" Text=""></asp:CheckBox>
                        </td>
                    </tr>
                    <tr>
                        <td class="td-label">Is Background Process</td>
                        <td class="td-value">
                            <asp:CheckBox ID="chkIsBackgroundProcess" Checked="true" data-chk-on="yes" data-chk-off="no" onclick="toggleBg($(this))" runat="server"></asp:CheckBox>
                        </td>
                    </tr>
                    <tr class="trbg">
                        <td class="td-label">Trigger On Create</td>
                        <td class="td-value">
                            <asp:CheckBox ID="chkTriggerOnCreate" data-chk-on="yes" data-chk-off="no" runat="server"></asp:CheckBox>
                        </td>
                    </tr>
                    <tr class="trbg">
                        <td class="td-label">Trigger On Update</td>
                        <td class="td-value">
                            <asp:CheckBox ID="chkTriggerOnUpdate" data-chk-on="yes" data-chk-off="no" runat="server"></asp:CheckBox>
                        </td>
                    </tr>
                    <tr class="trbg">
                        <td class="td-label">Trigger On Delete</td>
                        <td class="td-value">
                            <asp:CheckBox ID="chkTriggerOnDelete" data-chk-on="yes" data-chk-off="no" runat="server"></asp:CheckBox>
                        </td>
                    </tr>

                    <tr>
                        <td class="td-label">Single Instance</td>
                        <td class="td-value">
                            <asp:CheckBox ID="chkSingle" data-chk-on="yes" data-chk-off="no" runat="server"></asp:CheckBox>
                        </td>
                    </tr>
                    <tr>
                        <td class="td-label">Single Live Instance</td>
                        <td class="td-value">
                            <asp:CheckBox ID="chkSingleLive" data-chk-on="yes" data-chk-off="no" runat="server"></asp:CheckBox>
                        </td>
                    </tr>
                </table>

                <table class="table-form" id="tblActivate">
                    <tr>
                        <td class="td-label">Is Deactivated</td>
                        <td class="td-value">
                            <asp:CheckBox ID="chkIsDeactivated" data-chk-on="yes" data-chk-off="no" runat="server"></asp:CheckBox>
                        </td>
                    </tr>
                </table>
                <div>
                    <asp:LinkButton ID="btnSubmit" CssClass="cmdBtn cmdSave" runat="server" Text="Submit" OnClick="btnSubmit_Click"></asp:LinkButton>
                    <asp:LinkButton ID="btnClose" class="cmdBtn cmdClose" runat="server" Text="Cancel" OnClientClick="closeForm();"></asp:LinkButton>
                </div>

                <div id="DivGrid" runat="server" visible="false" style="margin-top: 40px;">
                    <telerik:RadGrid ID="dgData" runat="server" AllowPaging="False" AllowSorting="True"
                        AutoGenerateColumns="False" GridLines="None" GroupingEnabled="False"
                        Skin="Vista" Height="350px" Width="95%" OnNeedDataSource="dgData_NeedDataSource"
                        AllowFilteringByColumn="false">
                        <PagerStyle Mode="NextPrevAndNumeric" PageButtonCount="5" PagerTextFormat="Change page: {4} &amp;nbsp;({0}/{1})&amp;nbsp;&amp;nbsp;Total records : {5}" />
                        <MasterTableView ClientDataKeyNames="WFScenario_Pid,parentScenarioId" CommandItemDisplay="Bottom"
                            TableLayout="Fixed">
                            <RowIndicatorColumn Visible="false">
                                <HeaderStyle Width="20px" />
                            </RowIndicatorColumn>
                            <ExpandCollapseColumn>
                                <HeaderStyle Width="20px" />
                            </ExpandCollapseColumn>
                            <Columns>
                                <telerik:GridBoundColumn DataField="ScenarioName" HeaderText="Scenario Name" UniqueName="ScenarioName">
                                    <HeaderStyle Width="30%" />
                                </telerik:GridBoundColumn>
                                <telerik:GridBoundColumn DataField="Description" HeaderText="Description" UniqueName="Description">
                                    <HeaderStyle Width="30%" />
                                </telerik:GridBoundColumn>
                                <telerik:GridCheckBoxColumn DataField="IsValidated" HeaderText="Is Validated" UniqueName="IsValidated">
                                    <HeaderStyle Width="15%" />
                                </telerik:GridCheckBoxColumn>
                                <telerik:GridTemplateColumn DataField="IsDeactivated" HeaderText="Active" UniqueName="IsDeactivated1"><HeaderStyle Width="15%" /><ItemTemplate><input id='<%# "chk1"+Eval("WFScenario_Pid") %>' onclick='<%# "return SaveRecord(this,\""+HelperLib.Conversion.C.Str(Eval("WFScenario_Pid"))+"\");"%>' class="Deactivate" <%# HelperLib.Conversion.C.Str(Eval("Status")).ToLower() %> type="checkbox" /></ItemTemplate></telerik:GridTemplateColumn>
                            </Columns>
                            <CommandItemTemplate>
                                <telerik:RadToolBar ID="RadToolBar1" runat="server" Skin="Vista" Width="100%" OnButtonClick="RadToolBar1_ButtonClick" OnClientButtonClicking="onToolBarClientButtonClicking">
                                    <CollapseAnimation Duration="200" Type="OutQuint" />
                                    <Items>
                                        <telerik:RadToolBarButton CommandName="A" Visible='<%# AllowDataEntry("ADD") %>' ImageUrl="~/images/AddRecord.gif"
                                            Text="Add">
                                        </telerik:RadToolBarButton>
                                        <telerik:RadToolBarButton CommandName="E" Visible='<%# AllowDataEntry("EDIT") %>'
                                            ImageUrl="~/images/Edit.gif" Text="Edit">
                                        </telerik:RadToolBarButton>
                                        <telerik:RadToolBarButton CommandName="V"
                                            ImageUrl="~/images/Icon.gif" Text="View">
                                        </telerik:RadToolBarButton>
                                        <telerik:RadToolBarButton CommandName="D" Visible='<%# AllowDataEntry("DELETE") %>'
                                            ImageUrl="~/images/delete.gif" Text="Delete">
                                        </telerik:RadToolBarButton>
                                        <telerik:RadToolBarButton CommandName="C" ImageUrl="~/images/Cancel.gif"
                                            Text="Close">
                                        </telerik:RadToolBarButton>
                                    </Items>
                                </telerik:RadToolBar>
                            </CommandItemTemplate>
                        </MasterTableView>
                        <ClientSettings AllowDragToGroup="True" AllowGroupExpandCollapse="False" AllowKeyboardNavigation="True">
                            <Selecting AllowRowSelect="True" />
                            <ClientEvents />
                            <Scrolling AllowScroll="True" ScrollHeight="180px" UseStaticHeaders="True" />
                            <Resizing AllowColumnResize="True" />
                        </ClientSettings>
                    </telerik:RadGrid>

                    <asp:HiddenField ID="hdnId" runat="server" />
                </div>
            </div>

        </ContentTemplate>
    </asp:UpdatePanel>

    <script type="text/javascript">

        function smallfile(sender, args) {
            $("#ContentPlaceHolder1_showsmallImg").attr("src", "../temp/" + args.get_fileInfo().TempName)
        }

        function bigfile(sender, args) {
            $("#ContentPlaceHolder1_showlargeImg").attr("src", "../temp/" + args.get_fileInfo().TempName)
        }

        //function RefreshParent() {
        //    window.parent.RefreshParentGrid();
        //    return false;
        //}

        function CloseWindow() {
            window.parent.ParentCloseWindow();
            return false;
        }

        function toggleDisplay(ddl) {
            $("#tblWf").setDisplay(ddl.prop("selectedIndex") / 1 == 1);
            $("#trDlg").setDisplay(ddl.prop("selectedIndex") / 1 == 2);
            $("#trEnt").setDisplay($("#<%=chkBound.ClientID%>").checked() || ddl.prop("selectedIndex") / 1 != 2);
            if (ddl.prop("selectedIndex") == 0) {
                $("#<%=chkIsBackgroundProcess.ClientID%>").checked(false).CheckBoxX("refresh");
                toggleBg($("#<%=chkOnDemand.ClientID%>").checked(true).CheckBoxX("refresh"));
            }
        }

        function GetVariableList(t) {
            return { VariablesList: window[t + "_VarList"], Script: window[t + "_Script"] };
        }
        function toggleBg(chk) {
            if (chk.attr("id") == "<%=chkOnDemand.ClientID%>") {
                $("#<%=chkIsBackgroundProcess.ClientID%>").checked(!chk.checked()).CheckBoxX("refresh");
            }
            else {
                $("#<%=chkOnDemand.ClientID%>").checked(!chk.checked()).CheckBoxX("refresh");
            }

            $("#tblWf").find(".trbg").setDisplay($("#<%=chkIsBackgroundProcess.ClientID%>").checked());
        }



        function onToolBarClientButtonClicking(sender, args) {
            var mode = args.get_item().get_commandName();
            if (mode == "C") {
                args.set_cancel(true);
            }
            else
                return args.set_cancel(!OpenWindow(mode));
        }

        function OpenWindow(mode) {
            var text = "";
            if (mode == "A")
                text = "Add Workflow"
            else if (mode == "E")
                text = "Edit Workflow";
            else if (mode == "D")
                text = "Delete";
            else {
                mode = "V";
                text = "View Workflow";
            }
            var newurl = "";
            var WFID = $.QS("ID") == "" ? $("#<%=hdnId.ClientID %>").val() : $.QS("ID");

            var EID = $("#<%=hdnEntityID.ClientID %>").val();
            if (mode == "A") {

                window.open('WorkflowDesigner.aspx?PageType=A&WFID=' + WFID + "&EID=" + EID);
            }
            else if (mode == "E" || mode == "V" || mode == "D" || mode == "I") {
                var id = RadGrid_GetDataKey("<%= dgData.ClientID %>");
                if (id == null)
                    return false;
                if (mode == "D")
                    return confirm('Do you wish to delete this record?');
                window.open("WorkflowDesigner.aspx?PageType=" + mode + "&WFID=" + WFID + "&EID=" + EID + "&ID=" + id);
            }
        return false;
    }

    </script>

    <script type="text/javascript">

        var ajx = Sys.WebForms.PageRequestManager.getInstance();
        ajx.add_pageLoaded(function () {
            if (typeof MDI != "undefined") {
                //Add user code here
                //alert("load "+MDI.id );             
            }
        })

        ajx.add_endRequest(function () {
            if (typeof MDI != "undefined") {
                //Add user code here
                //alert("load "+MDI.id );   
                CloseWindow();
            }
        })
    </script>

    <script type="text/javascript">



        function selectEntity(sender, args) {

            var t = "";
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
             }

         }


         function toggleEntityTree(txt) {
             $(txt).next().show();
         }


         function pageLoad() {
             $("#<%=dgData.ClientID%>").find(".Deactivate").CheckBoxX();
             $("#tblWf").find("input[type=checkbox]").CheckBoxX();
             $("#tblActivate").find("input[type=checkbox]").CheckBoxX();
             $("#<%=chkBound.ClientID%>").CheckBoxX();
            toggleDisplay($("#<%=rcbWorkflowType.ClientID%>"));
             toggleBg($("#<%=chkOnDemand.ClientID%>"));
         }

         function SaveRecord(chk, buttonPid) {
             if (confirm("Do you want to save record ?")) {
                 var data = new Object();

                 data["Type"] = "SetDeactivateWorkFlowSenerio";
                 data["@ID"] = buttonPid;
                 data["@Value"] = !$(chk).checked();
                 PageMethods.Execute(data);
                 updateRenderList();
             }
             else
                 $(chk).checked(!$(chk).checked());
         }

         function OnClientEntryAdding(sender, eventArgs) {
             if (eventArgs.get_node().get_level() == 2){
                 $("#<%=hdnEntityID.ClientID%>").val(eventArgs.get_entry().get_value());
                 $find("<%=rddEntity.ClientID%>").closeDropDown();
                 }
        }
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
            background-color: #313131;
        }
    </style>


</asp:Content>


