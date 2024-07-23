<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="DashboardWidget_View.aspx.cs" Inherits="SensysErp.Meta.DashboardWidget_View" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">

        //window.title="title"
        document.documentElement.style.overflowX = "hidden"
        document.documentElement.style.overflowY = "hidden"

    </script>
    <style>

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
            
          

            <asp:Panel ID="pnl2" runat="server">


                  <telerik:RadTabStrip ID="rtabDashboard" runat="server" MultiPageID="mpDashboard" OnTabClick="rtabDashboard_TabClick">
                    <Tabs>
                        <telerik:RadTab runat="server" PageViewID="dashboardWidget" Text="Widget" Selected="true" Value="Widget"></telerik:RadTab>
                        <telerik:RadTab runat="server"  PageViewID="dashboardMaster" Text="Master" Value="Master"></telerik:RadTab>
                         <telerik:RadTab runat="server"  PageViewID="dashboardMain" Text="Dashboard" Value="Dasboard"></telerik:RadTab>
                    </Tabs>
                </telerik:RadTabStrip>

                     <telerik:RadMultiPage Height="95%"  SelectedIndex="0" ID="mpDashboard" runat="server">
                    <telerik:RadPageView Selected="true" ID="dashboardWidget" runat="server">

                        <telerik:RadDropDownTree ID="RadDropDownTree1" Skin="Silk" EnableFiltering="true" AutoPostBack="true" runat="server" Style="margin-top: 10px; margin-bottom:10px"  Width="400px" OnClientEntryAdding="OnClientEntryAdding"  DefaultValue="all" DefaultMessage="Select All" ExpandNodeOnSingleClick="true">
                             <DropDownNodeTemplate>
                                <div class="<%# DataBinder.Eval(Container.DataItem, "cssStyle") %>">
                                    <span>
                                        <%# DataBinder.Eval(Container, "Text") %>
                                    </span>
                                </div>
                            </DropDownNodeTemplate>
                             <FilterSettings Highlight="Matches" EmptyMessage="Type here to find" />
                        </telerik:RadDropDownTree>
                        <asp:Button ID="btnNodeClick" runat="server" style="display:none;" OnClick="btnNodeClick_Click" />
                        <asp:HiddenField ID="hdnNodevalue" runat="server" />
                         <asp:HiddenField ID="hdnModeValue" runat="server" />

                         <telerik:RadGrid ID="dgDatadashboardWidget" runat="server" AllowPaging="False" AllowSorting="True"
                AutoGenerateColumns="False" GridLines="None" GroupingEnabled="False"
                Skin="Vista" Height="350px" Width="95%" OnNeedDataSource="dgDatadashboardWidget_NeedDataSource"
                AllowFilteringByColumn="false" >
                <PagerStyle Mode="NextPrevAndNumeric" PageButtonCount="5" PagerTextFormat="Change page: {4} &amp;nbsp;({0}/{1})&amp;nbsp;&amp;nbsp;Total records : {5}" />
                <MasterTableView ClientDataKeyNames="Widget_pid" CommandItemDisplay="Bottom"
                    TableLayout="Fixed">
                    <RowIndicatorColumn Visible="false">
                        <HeaderStyle Width="20px" />
                    </RowIndicatorColumn>
                    <ExpandCollapseColumn>
                        <HeaderStyle Width="20px" />
                    </ExpandCollapseColumn>
                    <Columns>
                         <telerik:GridBoundColumn DataField="WidgetTitle" HeaderText="Widget Title"
                            UniqueName="WidgetTitle">
                        </telerik:GridBoundColumn>
                         <telerik:GridBoundColumn DataField="WidgetDescription" HeaderText="Description "
                            UniqueName="WidgetDescription">
                        </telerik:GridBoundColumn>
                          <telerik:GridBoundColumn DataField="Category" HeaderText="Category "
                            UniqueName="Category">
                        </telerik:GridBoundColumn>
                        <telerik:GridTemplateColumn DataField="IsDeactivated" HeaderText="Active" UniqueName="IsDeactivated"><HeaderStyle Width="8%" />
                        <ItemTemplate><input id='<%# "chk1"+Eval("Widget_pid") %>' onclick='<%# "return SaveRecordWidget(this,\""+HelperLib.Conversion.C.Str(Eval("Widget_pid"))+"\");"%>' class="Deactivate" <%# HelperLib.Conversion.C.Str(Eval("Status")).ToLower() %> type="checkbox" /></ItemTemplate>
                        </telerik:GridTemplateColumn>

                    </Columns>
                    <CommandItemTemplate>
                        <telerik:RadToolBar ID="RadToolBar1" runat="server" Skin="Vista" Width="100%" OnButtonClick="RadToolBar1_ButtonClick"
                            OnClientButtonClicking="onToolBarClientButtonClicking">
                            <CollapseAnimation Duration="200" Type="OutQuint" />
                            <Items>
                                <telerik:RadToolBarButton CommandName="A" Visible='<%# AllowWidgets("ADD") %>'  ImageUrl="~/images/AddRecord.gif"
                                    Text="Add">
                                </telerik:RadToolBarButton>
                                <telerik:RadToolBarButton CommandName="E"   Visible='<%# AllowWidgets("EDIT") %>' 
                                    ImageUrl="~/images/Edit.gif" Text="Edit">
                                </telerik:RadToolBarButton>
                                <telerik:RadToolBarButton CommandName="V"  
                                    ImageUrl="~/images/Icon.gif" Text="View">
                                </telerik:RadToolBarButton>
                                <telerik:RadToolBarButton CommandName="D"  Visible='<%# AllowWidgets("DELETE") %>' 
                                    ImageUrl="~/images/delete.gif" Text="Delete">
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
                    </telerik:RadPageView>
                     <telerik:RadPageView Selected="true" ID="dashboardMaster" runat="server">
                         <telerik:RadGrid ID="dgDataDashboardMaster" runat="server" AllowPaging="False" AllowSorting="True"
                AutoGenerateColumns="False" GridLines="None" GroupingEnabled="False"
                Skin="Vista" Height="350px" Width="95%" OnNeedDataSource="dgDataDashboardMaster_NeedDataSource"
                AllowFilteringByColumn="false">
                <PagerStyle Mode="NextPrevAndNumeric" PageButtonCount="5" PagerTextFormat="Change page: {4} &amp;nbsp;({0}/{1})&amp;nbsp;&amp;nbsp;Total records : {5}" />
                <MasterTableView ClientDataKeyNames="DashboardMaster_Pid" CommandItemDisplay="Bottom"
                    TableLayout="Fixed">
                    <RowIndicatorColumn Visible="false">
                        <HeaderStyle Width="20px" />
                    </RowIndicatorColumn>
                    <ExpandCollapseColumn>
                        <HeaderStyle Width="20px" />
                    </ExpandCollapseColumn>
                    <Columns>
                      
                         <telerik:GridBoundColumn DataField="DashboardTitle" HeaderText="Dashboard Title"
                            UniqueName="DashboardTitle">
                        </telerik:GridBoundColumn>

                        <telerik:GridCheckBoxColumn DataField="ispublish" HeaderText="Published"></telerik:GridCheckBoxColumn>

                        <telerik:GridTemplateColumn HeaderText="Publish">
                          <ItemTemplate><asp:LinkButton  ID="lnkPublish" runat="server" Text="Publish" OnClientClick='<%# "return Publish(this,\""+HelperLib.Conversion.C.Str(Eval("DashboardMaster_Pid"))+"\");"%>'></asp:LinkButton></ItemTemplate>
                        </telerik:GridTemplateColumn>
                       
                        <telerik:GridTemplateColumn DataField="IsDeactivated" HeaderText="Active" UniqueName="IsDeactivated"><HeaderStyle Width="8%" />
                        <ItemTemplate><input id='<%# "chk1"+Eval("DashboardMaster_Pid") %>' onclick='<%# "return SaveRecordMaster(this,\""+HelperLib.Conversion.C.Str(Eval("DashboardMaster_Pid"))+"\");"%>' class="Deactivate" <%# HelperLib.Conversion.C.Str(Eval("Status")).ToLower() %> type="checkbox" /></ItemTemplate>
                        </telerik:GridTemplateColumn>
                    </Columns>
                    <CommandItemTemplate>
                        <telerik:RadToolBar ID="RadToolBar2" runat="server" Skin="Vista" Width="100%" OnButtonClick="RadToolBar2_ButtonClick"
                            OnClientButtonClicking="onToolBarClientButtonClicking2">
                            <CollapseAnimation Duration="200" Type="OutQuint" />
                            <Items>
                                <telerik:RadToolBarButton CommandName="A" Visible='<%# ErpModel.Globals.AppManager.InDevelopmentMode %>'  ImageUrl="~/images/AddRecord.gif"
                                    Text="Add">
                                </telerik:RadToolBarButton>
                                <telerik:RadToolBarButton CommandName="E"   Visible='<%#  ErpModel.Globals.AppManager.InDevelopmentMode %>' 
                                    ImageUrl="~/images/Edit.gif" Text="Edit">
                                </telerik:RadToolBarButton>
                                <telerik:RadToolBarButton CommandName="V"  Visible='<%# ErpModel.Globals.AppManager.InDevelopmentMode  %>' 
                                    ImageUrl="~/images/Icon.gif" Text="View">
                                </telerik:RadToolBarButton>
                                <telerik:RadToolBarButton CommandName="D"  Visible='<%# ErpModel.Globals.AppManager.InDevelopmentMode  %>' 
                                    ImageUrl="~/images/delete.gif" Text="Delete">
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
                     </telerik:RadPageView>

                    <telerik:RadPageView Selected="true" ID="dashboardMain" runat="server">
                        <telerik:RadGrid ID="dgDataDashboardMain" runat="server" AllowPaging="False" AllowSorting="True"
                AutoGenerateColumns="False" GridLines="None" GroupingEnabled="False"
                Skin="Vista" Height="350px" Width="95%" OnNeedDataSource="dgDataDashboardMain_NeedDataSource"
                AllowFilteringByColumn="false">
                <PagerStyle Mode="NextPrevAndNumeric" PageButtonCount="5" PagerTextFormat="Change page: {4} &amp;nbsp;({0}/{1})&amp;nbsp;&amp;nbsp;Total records : {5}" />
                <MasterTableView ClientDataKeyNames="Dashboard_Pid" CommandItemDisplay="Bottom"
                    TableLayout="Fixed">
                    <RowIndicatorColumn Visible="false">
                        <HeaderStyle Width="20px" />
                    </RowIndicatorColumn>
                    <ExpandCollapseColumn>
                        <HeaderStyle Width="20px" />
                    </ExpandCollapseColumn>
                    <Columns>
                      
                         <telerik:GridBoundColumn DataField="DisplayName" HeaderText="Display Name"
                            UniqueName="DisplayName">
                        </telerik:GridBoundColumn>

                        <telerik:GridBoundColumn DataField="Description" HeaderText="Description"
                            UniqueName="Description">
                        </telerik:GridBoundColumn>

                        <telerik:GridBoundColumn DataField="DashboardTitle" HeaderText="Master Dashboard"
                            UniqueName="DashboardTitle">
                        </telerik:GridBoundColumn>
                       
                        <telerik:GridTemplateColumn DataField="IsDeactivated" HeaderText="Active" UniqueName="IsDeactivated"><HeaderStyle Width="8%" />
                        <ItemTemplate><input id='<%# "chk1"+Eval("Dashboard_Pid") %>' onclick='<%# "return SaveRecordDashboard(this,\""+HelperLib.Conversion.C.Str(Eval("Dashboard_Pid"))+"\");"%>' class="Deactivate" <%# HelperLib.Conversion.C.Str(Eval("Status")).ToLower() %> type="checkbox" /></ItemTemplate>
                        </telerik:GridTemplateColumn>
                    </Columns>
                    <CommandItemTemplate>
                        <telerik:RadToolBar ID="RadToolBar3" runat="server" Skin="Vista" Width="100%" OnButtonClick="RadToolBar3_ButtonClick"
                            OnClientButtonClicking="onToolBarClientButtonClicking3">
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
            if (mode == "A")
                text = "Add Dashboard Widget";
            else if (mode == "E")
                text = "Edit Dashboard Widget";
            else if (mode == "D")
                text = "Delete";
            else {
                mode = "V";
                text = "View Dashboard Widget";
            }
            var newurl = "";
            if (mode == "A") {
                window.open('Dashboardwidget_Add.aspx?PageType=A');
            }
            else if (mode == "E" || mode == "V" || mode == "D" ) {
                var id = RadGrid_GetDataKey("<%= dgDatadashboardWidget.ClientID %>");
                if (id == null)
                    return false;
                if (mode == "D")
                    return confirm('Do you wish to delete this record?');
                window.open("Dashboardwidget_Add.aspx?PageType=" + mode + "&ID=" + id);
            }
        return false;
        }





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
                text = "Add Dashboard Master";
            else if (mode == "E")
                text = "Edit Dashboard Widget";
            else if (mode == "D")
                text = "Delete";
            else {
                mode = "V";
                text = "View Dashboard Widget";
            }
            var newurl = "";
            if (mode == "A") {
                window.open('DashboardMaster_Add.aspx?PageType=A');
            }
            else if (mode == "E" || mode == "V" || mode == "D") {
                var id = RadGrid_GetDataKey("<%= dgDataDashboardMaster.ClientID %>");
                if (id == null)
                    return false;
                if (mode == "D")
                    return confirm('Do you wish to delete this record?');
                window.open("DashboardMaster_Add.aspx?PageType=" + mode + "&ID=" + id);
            }
        return false;
    }


        function onToolBarClientButtonClicking3(sender, args) {
            var mode = args.get_item().get_commandName();
            if (mode == "C") {
                args.set_cancel(true);
            }
            else
                return args.set_cancel(!OpenWindow3(mode));
        }

        function OpenWindow3(mode) {
            var text = "";
            if (mode == "A")
                text = "Add Dashboard Designer ";
            else if (mode == "E")
                text = "Edit Dashboard Designer";
            else if (mode == "D")
                text = "Delete";
            else {
                mode = "V";
                text = "View Dashboard Designer";
            }
            var newurl = "";
            if (mode == "A") {
                window.open('../main/view.aspx?1&EID=tbl_SYS_Config&_fc=DashboardDesigner_Add&_pt=V&PageType=A');
            }
            else if (mode == "E" || mode == "V" || mode == "D") {
                var id = RadGrid_GetDataKey("<%= dgDataDashboardMain.ClientID %>");
                if (id == null)
                    return false;
                if (mode == "D")
                    return confirm('Do you wish to delete this record?');
                window.open("../main/view.aspx?1&EID=tbl_SYS_Config&_fc=DashboardDesigner_Add&_pt=V&PageType=" + mode + "&ID=" + id);
            }
        return false;
    }



        function SaveRecordWidget(chk, buttonPid) {
            
            if (confirm("Do you want to save record ?")) {
                var data = new Object();

                data["Type"] = "SetDeactivateWidget";
                data["@ID"] = buttonPid;
                data["@Value"] = !$(chk).checked();
                PageMethods.Execute(data);
               
            }
            else
                $(chk).checked(!$(chk).checked());
        }

        function SaveRecordMaster(chk, buttonPid) {
           
            if (confirm("Do you want to save record ?")) {
                var data = new Object();

                data["Type"] = "SetDeactivateMaster";
                data["@ID"] = buttonPid;
                data["@Value"] = !$(chk).checked();
                PageMethods.Execute(data);
                
            }
            else
                $(chk).checked(!$(chk).checked());
        }

        function SaveRecordDashboard(chk, buttonPid) {

            if (confirm("Do you want to save record ?")) {
                var data = new Object();

                data["Type"] = "SetDeactivateDashboard";
                data["@ID"] = buttonPid;
                data["@Value"] = !$(chk).checked();
                PageMethods.Execute(data);

            }
            else
                $(chk).checked(!$(chk).checked());
        }

        function Publish(cntrl,Id)
        {
            window.open("../main/view.aspx?1&EID=tbl_SYS_Config&_fc=DashboardDesigner_Add&_pt=V&PageType=A&MasterFID=" + Id );
            return false;

        }

        function pageLoad() {
            $(".Deactivate").CheckBoxX();
           
            
        }

        

        function RefreshParentGrid()
        {
            alert(1);
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
            $find("<%=RadDropDownTree1.ClientID%>").closeDropDown();
           
        }

       
         

    </script>

   
</asp:Content>


