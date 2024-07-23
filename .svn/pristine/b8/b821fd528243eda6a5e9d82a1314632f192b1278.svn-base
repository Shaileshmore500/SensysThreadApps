<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="PredefinedListValues_View.aspx.cs" Inherits="SensysErp.Meta.PredefinedListValues_View" %>

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
                <MasterTableView ClientDataKeyNames="PredDefListValue_Pid" CommandItemDisplay="Bottom"
                    TableLayout="Fixed">
                    <RowIndicatorColumn Visible="false">
                        <HeaderStyle Width="20px" />
                    </RowIndicatorColumn>
                    <ExpandCollapseColumn>
                        <HeaderStyle Width="20px" />
                    </ExpandCollapseColumn>
                    <Columns>
                        <telerik:GridBoundColumn DataField="DisplayText" HeaderText="Item Value Text"
                            UniqueName="column">
                        </telerik:GridBoundColumn>
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


     <%--       <telerik:RadTreeList AllowLoadOnDemand="false" ID="rtlPreDefListValue" runat="server"
                DataKeyNames="PredDefListValue_Pid" ClientDataKeyNames="PredDefListValue_Pid" AllowPaging="false" ParentDataKeyNames="ParentMain" ClientSettings-Selecting-AllowItemSelection="true"
                AutoGenerateColumns="false" AllowSorting="false" Skin="Vista" Style="overflow: auto">
                <Columns>
                    <telerik:TreeListBoundColumn HeaderText="rectype"  DataField="rectype" UniqueName="rectype" Display="false"></telerik:TreeListBoundColumn>
                    <telerik:TreeListBoundColumn HeaderText="Display Text"  DataField="DisplayText" UniqueName="DisplayText"></telerik:TreeListBoundColumn>
                    <telerik:TreeListBoundColumn HeaderText="Info1" DataField="Info1" UniqueName="Info1"></telerik:TreeListBoundColumn>
                    <telerik:TreeListBoundColumn HeaderText="Info2" DataField="Info2" UniqueName="Info2"></telerik:TreeListBoundColumn>
                    <telerik:TreeListTemplateColumn DataField="SystemDefined" UniqueName="SystemDefined"
                        HeaderText="System Defined">
                        <ItemTemplate>
                            <asp:CheckBox ID="chkSystemDefined" runat="server"
                                Checked='<%# HelperLib.Conversion.C.Bool(Eval("SystemDefined")) %>' />
                        </ItemTemplate>
                        <HeaderStyle Width="20%" />
                    </telerik:TreeListTemplateColumn>
                </Columns>
                
            </telerik:RadTreeList>
             <telerik:RadToolBar ID="RadToolBar2" runat="server" Skin="Vista" Width="100%" OnClientButtonClicking="onToolBarClientButtonClicking2" OnButtonClick="RadToolBar2_ButtonClick" >
                            <CollapseAnimation Duration="200" Type="OutQuint" />
                            <Items>
                                <telerik:RadToolBarButton CommandName="A" ImageUrl="~/images/AddRecord.gif" Text="Add">
                                </telerik:RadToolBarButton>
                                <telerik:RadToolBarButton CommandName="E"  ImageUrl="~/images/Edit.gif" Text="Edit">
                                </telerik:RadToolBarButton>
                                <telerik:RadToolBarButton CommandName="V"  ImageUrl="~/images/Icon.gif" Text="View">
                                </telerik:RadToolBarButton>
                                <telerik:RadToolBarButton CommandName="D" ImageUrl="~/images/delete.gif" Text="Delete">
                                </telerik:RadToolBarButton>
                                <telerik:RadToolBarButton CommandName="C" ImageUrl="~/images/Cancel.gif" Text="Close">
                                </telerik:RadToolBarButton>
                            </Items>
                        </telerik:RadToolBar>--%>
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
                text = "Add PredefinedList Value"
            else if (mode == "E")
                text = "Edit PredefinedList Value";
            else if (mode == "D")
                text = "Delete";
            else {
                mode = "V";
                text = "View PredefinedList Value";
            }
            var newurl = "";
            if (mode == "A") {
                window.open("PredefinedListValues_Add.aspx?PageType=A&PredefID=" + $.QS("PredefID") + "");
            }
            else if (mode == "E" || mode == "V" || mode == "D") {
                var id = RadGrid_GetDataKey("<%= dgData.ClientID %>");
                if (id == null)
                    return false;
                if (mode == "D")
                    return confirm('Do you wish to delete this record?');
                window.open("PredefinedListValues_Add.aspx?PageType=" + mode + "&ID=" + id + "&PredefID=" + $.QS("PredefID") + "");
            }
        return false;
        }
         </script>


        <%--<script type="text/javascript">

        function onToolBarClientButtonClicking2(sender, args) {
            var mode = args.get_item().get_commandName();
            if (mode == "C") {
                args.set_cancel(true);
            }
            else
                return args.set_cancel(!OpenWindow2(mode));
        }

        function OpenWindow2(mode) {
            var text = "";
            if (mode == "A")
                text = "Add PredefinedList Value"
            else if (mode == "E")
                text = "Edit PredefinedList Value";
            else if (mode == "D")
                text = "Delete";
            else {
                mode = "V";
                text = "View PredefinedList Value";
            }
            var newurl = "";
            if (mode == "A") {
                window.open("PredefinedListValues_Add.aspx?PageType=A&PredefID=" + $.QS("PredefID") + "");
            }
            else if (mode == "E" || mode == "V" || mode == "D") {
               
                var id = RadList_GetDataKey("<%= rtlPreDefListValue.ClientID %>");
                if (id == null) {
                    alert("No record selected.")
                    return false;
                }
                var rectype = RadList_GetCellValue("<%= rtlPreDefListValue.ClientID %>", "rectype");
                if (rectype == "group") {
                    alert("Cannot Edit or Delete this Field.")
                    return false;
                }
                if (mode == "D") {
                    return confirm('Do you wish to delete this record?');
                }
                window.open("PredefinedListValues_Add.aspx?PageType=" + mode + "&ID=" + id + "&PredefID=" + $.QS("PredefID") + "");
            }
        return false;
    }
        function RadList_GetDataKey(string) {
            
            var treelist = $find("<%= rtlPreDefListValue.ClientID %>");
            var items = treelist.get_selectedItems();
            var item = items[0];
            var key = item.get_dataKeyValue("PredDefListValue_Pid");
            return key;

        }

        function RadList_GetCellValue(string, string) {
            var treelist = $find("<%= rtlPreDefListValue.ClientID %>");
            var items = treelist.get_selectedItems();
            var item = items[0];
            var owner = item.get_owner();
            var value = owner.getCellByColumnUniqueName(item, "rectype").innerText;
            return value
        }


    </script>--%>
</asp:Content>


