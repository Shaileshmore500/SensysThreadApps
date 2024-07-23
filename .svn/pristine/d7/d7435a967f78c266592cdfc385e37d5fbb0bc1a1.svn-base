<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="MstCustomSetting_View.aspx.cs" Inherits="SensysErp.Meta.MstCustomSetting_View" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">

        //window.title="title"
      
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
            <asp:Panel ID="pnlCustomSetting" runat="server">
                <telerik:RadTabStrip ID="rtabCustomsetting" runat="server" MultiPageID="mpFieldCtr" OnTabClick="rtabCustomsetting_TabClick">
                    <Tabs>
                        <telerik:RadTab runat="server" PageViewID="customsetting" Text="Setting" Selected="true" Value="setting"></telerik:RadTab>
                        <telerik:RadTab runat="server" PageViewID="customsetting" Text="Permission" Value="permission"></telerik:RadTab>
                    </Tabs>
                </telerik:RadTabStrip>
                
                <telerik:RadMultiPage Height="95%"  SelectedIndex="0" ID="mpFieldCtr" runat="server">
                    <telerik:RadPageView Selected="true" ID="customsetting" runat="server">
                        <telerik:RadComboBox ID="rcbPermissionCategory" runat="server" Style="margin-top:10px;" Width="150px" AutoPostBack="True" OnSelectedIndexChanged="rcbPermissionCategory_SelectedIndexChanged">
                                   <%-- <Items>
                                        <telerik:RadComboBoxItem Value="Company" Text="Company" />
                                        <telerik:RadComboBoxItem Value="Role" Text="Role" />
                                        <telerik:RadComboBoxItem Value="User" Text="User" />
                                        <telerik:RadComboBoxItem Value="allapplication" Text="All Application" />
                                    </Items>--%>
                                </telerik:RadComboBox>
                        <br />

                        <telerik:RadGrid ID="dgData" runat="server" SkinID="NoScroll" AllowPaging="False" AllowSorting="True"
                            AutoGenerateColumns="False" GridLines="None" GroupingEnabled="False"
                            Skin="Vista" Height="350px" Width="95%" OnNeedDataSource="dgData_NeedDataSource"
                            AllowFilteringByColumn="false" Style="margin-top:10px;" OnRowDrop="dgData_RowDrop">
                            <PagerStyle Mode="NextPrevAndNumeric" PageButtonCount="5" PagerTextFormat="Change page: {4} &amp;nbsp;({0}/{1})&amp;nbsp;&amp;nbsp;Total records : {5}" />
                            <MasterTableView ClientDataKeyNames="Permission_Pid" DataKeyNames="Permission_Pid" CommandItemDisplay="Bottom"
                                TableLayout="Fixed">
                                <RowIndicatorColumn Visible="false">
                                    <HeaderStyle Width="20px" />
                                </RowIndicatorColumn>
                                <ExpandCollapseColumn>
                                    <HeaderStyle Width="20px" />
                                </ExpandCollapseColumn>
                                <Columns>
                                    <telerik:GridBoundColumn DataField="Permission_Pid" HeaderText="Code" UniqueName="Code"><HeaderStyle Width="20%" /></telerik:GridBoundColumn>
                                    <telerik:GridBoundColumn DataField="PermissionCategory" HeaderText="Category" UniqueName="Category"><HeaderStyle Width="20%" /></telerik:GridBoundColumn>
                                    <telerik:GridBoundColumn DataField="Description" HeaderText="Description" UniqueName="Description"><HeaderStyle Width="25%" /></telerik:GridBoundColumn>
                                    <telerik:GridBoundColumn DataField="GroupingText" HeaderText="Group" UniqueName="GroupingText"><HeaderStyle Width="20%" /></telerik:GridBoundColumn>
                                    <telerik:GridCheckBoxColumn DataField="IsComplex" HeaderText="Is Multi Parameter" UniqueName="IsComplex"><HeaderStyle Width="5%" /></telerik:GridCheckBoxColumn>
                                    <telerik:GridBoundColumn DataField="sortorder" HeaderText="Sort Order" UniqueName="sortorder"><HeaderStyle Width="10%" /></telerik:GridBoundColumn>

                                </Columns>
                                <CommandItemTemplate>
                                    <telerik:RadToolBar ID="RadToolBar1" runat="server" Skin="Vista" Width="100%" OnButtonClick="RadToolBar1_ButtonClick"
                                        OnClientButtonClicking="onToolBarClientButtonClicking">
                                        <CollapseAnimation Duration="200" Type="OutQuint" />
                                        <Items>
                                            <%--<telerik:RadToolBarButton CommandName="AS" ImageUrl="~/images/AddRecord.gif"
                                                Text="Add Setting">
                                            </telerik:RadToolBarButton>
                                            <telerik:RadToolBarButton CommandName="AP" ImageUrl="~/images/AddRecord.gif"
                                                Text="Add Permission">
                                            </telerik:RadToolBarButton>--%>
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

                    </telerik:RadPageView>
                </telerik:RadMultiPage>

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
            //if (mode == "AS")
            //    text = "Add Custom Setting"
            //else if (mode == "AP")
            //    text = "Add Permission"
            var tab = $find("<%=rtabCustomsetting.ClientID%>");
            var tabvalue = tab.get_selectedTab().get_value();

            if (mode == "A" && tabvalue=="setting")
                text = "Add Custom Setting"
            else if (mode == "A" && tabvalue == "permission")
                text = "Add Permission"
            else if (mode == "E")
                text = "Edit Custom Setting";
            else if (mode == "D")
                text = "Delete";
            else {
                mode = "V";
                text = "View Custom Setting";
            }
            var newurl = "";
            //if (mode == "AS" || mode == "AP") {
            //    window.open('MstCustomSetting_Add.aspx?_ns=1&PageType=A' + (mode == "AS" ? "&st=1" : ""));
            //}
            if (mode == "A") {
                var Permissioncategory = $find("<%=rcbPermissionCategory.ClientID%>").get_value();

                window.open('../main/view.aspx?1&EID=tbl_SYS_Config&_fc=CustomSetting_Add&_pt=V&_ns=1&PageType=A' + (tabvalue == "setting" ? "&st=1" : "") + "&permissioncategory=" + Permissioncategory);
            }
            else if (mode == "E" || mode == "V" || mode == "D") {
                var id = RadGrid_GetDataKey("<%= dgData.ClientID %>");
                if (id == null)
                    return false;
                if (mode == "D")
                    return confirm('Do you wish to delete this record?');
                window.open("../main/view.aspx?1&EID=tbl_SYS_Config&_fc=CustomSetting_Add&_pt=V&_ns=1&PageType=" + mode + "&ID=" + id );
            }
        return false;
    }

    </script>
</asp:Content>
