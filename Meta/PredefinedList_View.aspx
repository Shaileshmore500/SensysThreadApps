<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="PredefinedList_View.aspx.cs" Inherits="SensysErp.Meta.PredefinedList_View" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">

        //window.title="title"
        document.documentElement.style.overflowX = "hidden"
        document.documentElement.style.overflowY = "hidden"

    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
            <telerik:RadGrid ID="dgData" runat="server" AllowPaging="False" AllowSorting="True"
                AutoGenerateColumns="False" GridLines="None" GroupingEnabled="False"
                Skin="Vista" Height="350px" Width="95%" OnNeedDataSource="dgData_NeedDataSource"
                AllowFilteringByColumn="false">
                <PagerStyle Mode="NextPrevAndNumeric" PageButtonCount="5" PagerTextFormat="Change page: {4} &amp;nbsp;({0}/{1})&amp;nbsp;&amp;nbsp;Total records : {5}" />
                <MasterTableView ClientDataKeyNames="PredDefList_Pid" CommandItemDisplay="Bottom"
                    TableLayout="Fixed">
                    <RowIndicatorColumn Visible="false">
                        <HeaderStyle Width="20px" />
                    </RowIndicatorColumn>
                    <ExpandCollapseColumn>
                        <HeaderStyle Width="20px" />
                    </ExpandCollapseColumn>
                    <Columns>
                         <telerik:GridBoundColumn DataField="PredDefList_Pid" HeaderText="Predefined Code"
                            UniqueName="column1">
                        </telerik:GridBoundColumn>
                         <telerik:GridBoundColumn DataField="Title" HeaderText="Predefined Title"
                            UniqueName="column2">
                        </telerik:GridBoundColumn>
                        <telerik:GridBoundColumn DataField="Description" HeaderText="Predefined Description"
                            UniqueName="column3">
                        </telerik:GridBoundColumn>
                        <telerik:GridCheckBoxColumn DataField="EnableGrouping" HeaderText="Enable Grouping" UniqueName="Grouping"></telerik:GridCheckBoxColumn>
                        <telerik:GridCheckBoxColumn DataField="EnableHierarchy" HeaderText="Enable Hierarchy" UniqueName="Hierarchy"></telerik:GridCheckBoxColumn>
                        <telerik:GridCheckBoxColumn DataField="Systemdefined" HeaderText="Is System Defined" UniqueName="UnSystem"></telerik:GridCheckBoxColumn>

                    </Columns>
                    <CommandItemTemplate>
                        <telerik:RadToolBar ID="RadToolBar1" runat="server" Skin="Vista" Width="100%" OnButtonClick="RadToolBar1_ButtonClick"
                            OnClientButtonClicking="onToolBarClientButtonClicking">
                            <CollapseAnimation Duration="200" Type="OutQuint" />
                            <Items>
                                <telerik:RadToolBarButton CommandName="A" ImageUrl="~/images/AddRecord.gif"
                                    Text="Add">
                                </telerik:RadToolBarButton>
                                <telerik:RadToolBarButton CommandName="E"  
                                    ImageUrl="~/images/Edit.gif" Text="Edit">
                                </telerik:RadToolBarButton>
                                <telerik:RadToolBarButton CommandName="V"  
                                    ImageUrl="~/images/Icon.gif" Text="View">
                                </telerik:RadToolBarButton>
                                <telerik:RadToolBarButton CommandName="D"  
                                    ImageUrl="~/images/delete.gif" Text="Delete">
                                </telerik:RadToolBarButton>
                             <%--   <telerik:RadToolBarButton CommandName="I"  
                                    ImageUrl="~/images/Icon.gif" Text="Add List Item">
                                </telerik:RadToolBarButton>--%>
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
                text = "Add Predefined List"
            else if (mode == "E")
                text = "Edit Predefined List";
            else if (mode == "D")
                text = "Delete";
            else if (mode == "I")
                text = "Predefined List Values";
            else {
                mode = "V";
                text = "View Predefined List";
            }
            var newurl = "";
            if (mode == "A") {
                window.open('PredefinedList_Add.aspx?PageType=A');
            }
            else if (mode == "E" || mode == "V" || mode == "D" || mode == "I") {
                var id = RadGrid_GetDataKey("<%= dgData.ClientID %>");
                if (id == null)
                    return false;
                if (mode == "I")
                {
                    

                    window.open("PredefinedListValues_View.aspx?PageType=" + mode + "&PredefID=" + id);
                    return false;
                }
                if (mode == "D")
                    return confirm('Do you wish to delete this record?');
                window.open("PredefinedList_Add.aspx?PageType=" + mode + "&ID=" + id);
            }
        return false;
        }

         

    </script>
</asp:Content>


