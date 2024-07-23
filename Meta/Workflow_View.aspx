<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="Workflow_View.aspx.cs" Inherits="SensysErp.Meta.Workflow_View" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">

       

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
         .app:before
        {
             font-family: fontawesome !important;
            content:"\f1b3";
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
            <asp:Panel ID="pnl1" runat="server" style="margin-bottom: 10px;">
                <asp:TextBox Visible="false"  ID="txtEntity" runat="server" ReadOnly="true"></asp:TextBox>
                            <div id="tvCtrEnt">
                                <telerik:RadTreeView ID="tvEntity"  runat="server" OnClientNodeClicked="selectEntity"  >
                                    <Nodes>
                                    </Nodes>
                                      <WebServiceSettings Path="Workflow_View.aspx" Method="GetChildNode"></WebServiceSettings>
                                </telerik:RadTreeView>
                            </div>
                     <telerik:RadDropDownTree Skin="Silk" ID="rddEntity" EnableFiltering="true"  AutoPostBack="true" runat="server" Style="margin-top: 10px; margin-bottom: 10px" Width="400px" OnClientEntryAdding="OnClientEntryAdding" DefaultValue="all" DefaultMessage="Select Entity" ExpandNodeOnSingleClick="true">
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
                             <asp:HiddenField ID="hdnEntitytext" runat="server" />
                <asp:Button ID="btnRefresh" runat="server" style="display:none" OnClick="btnRefresh_Click" />

            </asp:Panel>
            <asp:Panel ID="pnl2" runat="server">
            <telerik:RadGrid ID="dgData" runat="server" AllowPaging="False" AllowSorting="True"
                AutoGenerateColumns="False" GridLines="None" GroupingEnabled="False"
                Skin="Vista" Width="95%" SkinID="NoScroll" OnNeedDataSource="dgData_NeedDataSource"
                AllowFilteringByColumn="false">
                <PagerStyle Mode="NextPrevAndNumeric" PageButtonCount="5" PagerTextFormat="Change page: {4} &amp;nbsp;({0}/{1})&amp;nbsp;&amp;nbsp;Total records : {5}" />
                <MasterTableView ClientDataKeyNames="Workflow_Pid" CommandItemDisplay="Bottom"
                    TableLayout="Fixed">
                    <RowIndicatorColumn Visible="false">
                        <HeaderStyle Width="20px" />
                    </RowIndicatorColumn>
                    <ExpandCollapseColumn>
                        <HeaderStyle Width="20px" />
                    </ExpandCollapseColumn>
                    <Columns>
                         <telerik:GridBoundColumn DataField="WorkflowName" HeaderText="Workflow Name"
                            UniqueName="WorkflowName">
                        </telerik:GridBoundColumn>
                         <telerik:GridBoundColumn DataField="WorkflowType" HeaderText="Workflow Type"
                            UniqueName="column2">
                        </telerik:GridBoundColumn>
                        <telerik:GridBoundColumn DataField="Description" HeaderText="Description"
                            UniqueName="Description">
                        </telerik:GridBoundColumn>
                         <telerik:GridBoundColumn DataField="entityname" HeaderText="Entity"
                            UniqueName="entityname">
                        </telerik:GridBoundColumn>

                        <telerik:GridCheckBoxColumn DataField="OnDemand" HeaderText="On Demand" UniqueName="OnDemand"></telerik:GridCheckBoxColumn>
                        <telerik:GridCheckBoxColumn DataField="TriggerOnCreate" HeaderText="Trigger On Create" UniqueName="TriggerOnCreate"></telerik:GridCheckBoxColumn>
                        <telerik:GridCheckBoxColumn DataField="TriggerOnUpdate" HeaderText="Trigger On Update" UniqueName="TriggerOnUpdate"></telerik:GridCheckBoxColumn>
                        <telerik:GridCheckBoxColumn DataField="TriggerOnDelete" HeaderText="TriggerOnDelete" UniqueName="TriggerOnDelete"></telerik:GridCheckBoxColumn>
                        <%--<telerik:GridCheckBoxColumn DataField="IsDeactivated" HeaderText="Is Deactivated" UniqueName="IsDeactivated"></telerik:GridCheckBoxColumn>--%>
                        <telerik:GridTemplateColumn DataField="IsDeactivated" HeaderText="Active" UniqueName="IsDeactivated1"><HeaderStyle Width="8%" />
                        <ItemTemplate><input id='<%# "chk1"+Eval("Workflow_Pid") %>' onclick='<%# "return SaveRecord(this,\""+HelperLib.Conversion.C.Str(Eval("Workflow_Pid"))+"\");"%>' class="Deactivate" <%# HelperLib.Conversion.C.Str(Eval("Status")).ToLower() %> type="checkbox" /></ItemTemplate>
                        </telerik:GridTemplateColumn>

                    </Columns>
                    <CommandItemTemplate>
                        <telerik:RadToolBar ID="RadToolBar1" runat="server" Skin="Vista" Width="100%" OnButtonClick="RadToolBar1_ButtonClick"
                            OnClientButtonClicking="onToolBarClientButtonClicking">
                            <CollapseAnimation Duration="200" Type="OutQuint" />
                            <Items>
                                <telerik:RadToolBarButton CommandName="A" Visible='<%# AllowDataEntry("ADD") %>'  ImageUrl="~/images/AddRecord.gif"
                                    Text="Add">
                                </telerik:RadToolBarButton>
                                <telerik:RadToolBarButton CommandName="E"   Visible='<%# AllowDataEntry("EDIT") %>' 
                                    ImageUrl="~/images/Edit.gif" Text="Edit">
                                </telerik:RadToolBarButton>
                                <telerik:RadToolBarButton CommandName="V"  
                                    ImageUrl="~/images/Icon.gif" Text="View">
                                </telerik:RadToolBarButton>
                                <telerik:RadToolBarButton CommandName="D"  Visible='<%# AllowDataEntry("DELETE") %>' 
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
                    <Scrolling AllowScroll="False" UseStaticHeaders="True" />
                    <Resizing AllowColumnResize="True" />
                </ClientSettings>
            </telerik:RadGrid>
                <br /><br /><br />
                </asp:Panel>
        </ContentTemplate>
    </asp:UpdatePanel>

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
            }
        })
    </script>

    <script type="text/javascript">
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
            if (mode == "A") {
                window.open('Workflow_Add.aspx?PageType=A');
            }
            else if (mode == "E" || mode == "V" || mode == "D" ) {
                var id = RadGrid_GetDataKey("<%= dgData.ClientID %>");
                if (id == null)
                    return false;
                if (mode == "D")
                    return confirm('Do you wish to delete this record?');
                window.open("Workflow_Add.aspx?PageType=" + mode + "&ID=" + id);
            }
        return false;
        }

        function SaveRecord(chk, buttonPid) {
            if (confirm("Do you want to save record ?")) {
                var data = new Object();

                data["Type"] = "SetDeactivate";
                data["@ID"] = buttonPid;
                data["@Value"] = !$(chk).checked();
                PageMethods.Execute(data);
                updateRenderList();
            }
            else
                $(chk).checked(!$(chk).checked());
        }


        function pageLoad() {
            $(".Deactivate").CheckBoxX();
            if ($("#tvCtrEnt").exists()) {
                $("#<%=txtEntity.ClientID %>").on("click", function (e) {
                    toggleEntityTree(e.target); e.stopPropagation();
                })
                $(document).on("click", function () { $("#tvCtrEnt").hide(); })
                $("#tvCtrEnt").on("click", function (e) { e.stopPropagation(); });
            }
            
        }

        if ($("#tvCtrEnt").exists()) {
            $("#<%=txtEntity.ClientID %>").on("click", function (e) {
                toggleEntityTree(e.target); e.stopPropagation();
            })
            $(document).on("click", function () { $("#tvCtrEnt").hide(); })
            $("#tvCtrEnt").on("click", function (e) { e.stopPropagation(); });
        }

        function toggleEntityTree(txt) {
            $(txt).next().show();
        }

        function selectEntity(sender, args) {

             var t = $("#<%=txtEntity.ClientID %>");
             var n = args.get_node();

             if (n.get_level() < 2 && n.get_value() != "All")
                 return;
             if (n.get_value() == "All") {
                 //t.val("");
                 //t.removeAttr("entityid");
                 t.val(n.get_text());
                 $("#<%=hdnEntityID.ClientID %>").val(n.get_value());
                 $("#<%=hdnEntitytext.ClientID %>").val(n.get_text());
             }
             else {
                 t.val("");
                 t.val(n.get_text());
                 $("#<%=hdnEntityID.ClientID %>").val(n.get_value());
                 $("#<%=hdnEntitytext.ClientID %>").val(n.get_text());
            }
            $("#tvCtrEnt").hide();
            $("#<%=btnRefresh.ClientID%>").click();
            
        }
        

        function OnClientEntryAdding(sender, eventArgs) {
            if (eventArgs.get_entry().get_value() == "all") {
                $("#<%=hdnEntityID.ClientID%>").val(eventArgs.get_entry().get_value());
                $("#<%=hdnEntitytext.ClientID%>").val('all');
                $("#<%=btnRefresh.ClientID%>").click();
            }
            else if (eventArgs.get_node().get_level() == 0) {
                $("#<%=hdnEntityID.ClientID%>").val(eventArgs.get_entry().get_value());
                $("#<%=hdnEntitytext.ClientID%>").val('app');
                $("#<%=btnRefresh.ClientID%>").click();
            }
            else if (eventArgs.get_node().get_level() == 1) {
                $("#<%=hdnEntityID.ClientID%>").val(eventArgs.get_entry().get_value());
                $("#<%=hdnEntitytext.ClientID%>").val('module');
                $("#<%=btnRefresh.ClientID%>").click();
            }
            else if (eventArgs.get_node().get_level() == 2) {
                $("#<%=hdnEntityID.ClientID%>").val(eventArgs.get_entry().get_value());
                $("#<%=hdnEntitytext.ClientID%>").val('entity');
                $("#<%=btnRefresh.ClientID%>").click();
            }
            $find("<%=rddEntity.ClientID%>").closeDropDown();
        }
         

    </script>

   
</asp:Content>


