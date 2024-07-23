<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="SessionEntities_View.aspx.cs" Inherits="SensysErp.Meta.SessionEntities_View" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">

        //window.title="title"
        //document.documentElement.style.overflowX = "hidden"
        //document.documentElement.style.overflowY = "hidden"

    </script>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
            <table>
                <tr>
                    <td class="td-label">
                        <asp:Label ID="lblApp" runat="server" Text="Application"></asp:Label>
                    </td>
                    <td class="td-value">
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
                        <asp:HiddenField ID="hdnNodevalue" runat="server" />
                        <asp:HiddenField ID="hdnModeValue" runat="server" />
                        <asp:Button ID="btnNodeClick" runat="server" Style="display: none" OnClick="btnNodeClick_Click" />
                    </td>
                </tr>
                <tr></tr>
            </table>
            <telerik:RadGrid ID="dgData" SkinID="NoScroll" runat="server" AllowPaging="False" AllowSorting="True"
                AutoGenerateColumns="False" GridLines="None" GroupingEnabled="False"
                Skin="Vista" Height="350px" Width="95%" OnNeedDataSource="dgData_NeedDataSource"
                AllowFilteringByColumn="false" OnRowDrop="dgData_RowDrop">
                <PagerStyle Mode="NextPrevAndNumeric" PageButtonCount="5" PagerTextFormat="Change page: {4} &amp;nbsp;({0}/{1})&amp;nbsp;&amp;nbsp;Total records : {5}" />
                <MasterTableView ClientDataKeyNames="SessionEntity_Pid" DataKeyNames="SessionEntity_Pid" CommandItemDisplay="Bottom"
                    TableLayout="Fixed">
                    <RowIndicatorColumn Visible="false">
                        <HeaderStyle Width="20px" />
                    </RowIndicatorColumn>
                    <ExpandCollapseColumn>
                        <HeaderStyle Width="20px" />
                    </ExpandCollapseColumn>
                    <Columns>
                        <telerik:GridBoundColumn DataField="SessionEntity_Pid" HeaderText="Code" UniqueName="SessionEntity_Pid">
                            <HeaderStyle Width="20%" />
                        </telerik:GridBoundColumn>
                        <telerik:GridBoundColumn DataField="DisplayName" HeaderText="Display Name" UniqueName="DisplayName">
                            <HeaderStyle Width="20%" />
                        </telerik:GridBoundColumn>
                        <telerik:GridBoundColumn DataField="Entityname" HeaderText="Entity Name" UniqueName="Entityname">
                            <HeaderStyle Width="15%" />
                        </telerik:GridBoundColumn>
                        <telerik:GridBoundColumn DataField="AppName" HeaderText="Application Name" UniqueName="AppName">
                            <HeaderStyle Width="15%" />
                        </telerik:GridBoundColumn>
                        <telerik:GridCheckBoxColumn DataField="MultiSelect" HeaderText="Is MultiSelect" UniqueName="MultiSelect">
                            <HeaderStyle Width="12%" />
                        </telerik:GridCheckBoxColumn>
                        <telerik:GridCheckBoxColumn DataField="Mandatory" HeaderText="Is Mandatory" UniqueName="Mandatory">
                            <HeaderStyle Width="12%" />
                        </telerik:GridCheckBoxColumn>
                        <telerik:GridTemplateColumn DataField="IsDeactivated" HeaderText="Active" UniqueName="IsDeactivated1"><HeaderStyle Width="8%" /><ItemTemplate><input id='<%# "chk1"+Eval("SessionEntity_Pid") %>' onclick='<%# "return SaveRecord(this,\""+HelperLib.Conversion.C.Str(Eval("SessionEntity_Pid"))+"\");"%>' class="Deactivate" <%# HelperLib.Conversion.C.Str(Eval("Status")).ToLower() %> type="checkbox" /></ItemTemplate></telerik:GridTemplateColumn>
                        <telerik:GridBoundColumn DataField="sortorder" HeaderText="sort Order" UniqueName="sortorder">
                            <HeaderStyle Width="10%" />
                        </telerik:GridBoundColumn>
                    </Columns>
                    <CommandItemTemplate>
                        <telerik:RadToolBar ID="RadToolBar1" runat="server" Skin="Vista" Width="100%" OnButtonClick="RadToolBar1_ButtonClick"
                            OnClientButtonClicking="onToolBarClientButtonClicking">
                            <CollapseAnimation Duration="200" Type="OutQuint" />
                            <Items>
                                <telerik:RadToolBarButton CommandName="A" Visible='<%# AllowDataEntry("ADD") %>' ImageUrl="~/images/AddRecord.gif"
                                    Text="Add ">
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
                <ClientSettings AllowDragToGroup="True" AllowRowsDragDrop="True" AllowGroupExpandCollapse="False" AllowKeyboardNavigation="True">
                    <Selecting AllowRowSelect="True" />
                    <ClientEvents OnRowDropping="RowDropping" />
                    <Scrolling AllowScroll="False" ScrollHeight="180px" UseStaticHeaders="True" />
                    <Resizing AllowColumnResize="True" />
                </ClientSettings>
            </telerik:RadGrid>
            <asp:Button ID="hdnbutton" runat="server" OnClick="hdnbutton_Click" Style="display: none;" />
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
                text = "Add Session Entities"
            else if (mode == "E")
                text = "Edit Session Entities";
            else if (mode == "D")
                text = "Delete";
            else {
                mode = "V";
                text = "View Custom Setting";
            }
            var newurl = "";

            if (mode == "A") {
                
                window.open('../main/view.aspx?EID=tbl_SYS_Config&_fc=SessionEntities_Add&_pt=V&PageType=A');
            }
            else if (mode == "E" || mode == "V" || mode == "D") {
                var id = RadGrid_GetDataKey("<%= dgData.ClientID %>");
                    if (id == null)
                        return false;
                    if (mode == "D")
                        return confirm('Do you wish to delete this record?');
                    window.open("../main/view.aspx?EID=tbl_SYS_Config&_fc=SessionEntities_Add&_pt=V&PageType=" + mode + "&ID=" + id);
                }
            return false;
        }

        function updateRenderList() {
            if (typeof parent.updateRenderList != "function")
                return;
            var data = [];
            var master = $find("<%=dgData.ClientID%>").get_masterTableView();
            var rows = master.get_dataItems();
            var id = "";
            if (rows != null && rows.length > 0) {
                for (var i = 0; i < rows.length; i++) {
                    if ($(rows[i].get_element()).find(".Deactivate").checked())
                        data.push({ Name: rows[i].get_element().cells[0].innerHTML, ID: rows[i].getDataKeyValue("SessionEntity_Pid") });
                }
            }
            parent.updateRenderList(data);
        }

        function pageLoad() {
            $(".Deactivate").CheckBoxX();
            updateRenderList();
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

        function OnClientEntryAdding(sender, eventArgs) {
            if (eventArgs.get_entry().get_value() == "all") {
                $("#<%=hdnNodevalue.ClientID%>").val(eventArgs.get_entry().get_value());
                $("#<%=hdnModeValue.ClientID%>").val('all');
                $("#<%=btnNodeClick.ClientID%>").click();
            }
            else if (eventArgs.get_node().get_level() == 0) {
                $("#<%=hdnNodevalue.ClientID%>").val(eventArgs.get_entry().get_value());
                $("#<%=hdnModeValue.ClientID%>").val('app');
                $("#<%=btnNodeClick.ClientID%>").click();
            }
            else if (eventArgs.get_node().get_level() == 1) {
                $("#<%=hdnNodevalue.ClientID%>").val(eventArgs.get_entry().get_value());
                $("#<%=hdnModeValue.ClientID%>").val('module');
                $("#<%=btnNodeClick.ClientID%>").click();
            }
            else if (eventArgs.get_node().get_level() == 2) {
                $("#<%=hdnNodevalue.ClientID%>").val(eventArgs.get_entry().get_value());
                $("#<%=hdnModeValue.ClientID%>").val('entity');
                $("#<%=btnNodeClick.ClientID%>").click();
            }
    $find("<%=rddEntity.ClientID%>").closeDropDown();
        }

    </script>
</asp:Content>
