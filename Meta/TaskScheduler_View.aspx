<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="TaskScheduler_View.aspx.cs" Inherits="SensysErp.Meta.TaskScheduler_View" %>

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
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
           
            <asp:Panel ID="pnl2" runat="server">
            <telerik:RadGrid ID="dgData" runat="server" AllowPaging="False" AllowSorting="True"
                AutoGenerateColumns="False" GridLines="None" GroupingEnabled="False"
                Skin="Vista" Width="95%" SkinID="NoScroll" OnNeedDataSource="dgData_NeedDataSource"
                AllowFilteringByColumn="false">
                <PagerStyle Mode="NextPrevAndNumeric" PageButtonCount="5" PagerTextFormat="Change page: {4} &amp;nbsp;({0}/{1})&amp;nbsp;&amp;nbsp;Total records : {5}" />
                <MasterTableView ClientDataKeyNames="ScheduledTask_Pid" CommandItemDisplay="Bottom"
                    TableLayout="Fixed">
                    <RowIndicatorColumn Visible="false">
                        <HeaderStyle Width="20px" />
                    </RowIndicatorColumn>
                    <ExpandCollapseColumn>
                        <HeaderStyle Width="20px" />
                    </ExpandCollapseColumn>
                    <Columns>
                         <telerik:GridBoundColumn DataField="TaskName" HeaderText="Name"
                            UniqueName="TaskName">
                        </telerik:GridBoundColumn>
                         <telerik:GridBoundColumn DataField="TaskDescription" HeaderText="Description"
                            UniqueName="TaskDescription">
                        </telerik:GridBoundColumn>
                        
                        <telerik:GridTemplateColumn DataField="IsDeactivated" HeaderText="Active" UniqueName="IsDeactivated1"><HeaderStyle Width="8%" />
                        <ItemTemplate><input id='<%# "chk1"+Eval("ScheduledTask_Pid") %>' onclick='<%# "return SaveRecord(this,\""+HelperLib.Conversion.C.Str(Eval("ScheduledTask_Pid"))+"\");"%>' class="Deactivate" <%# HelperLib.Conversion.C.Str(Eval("Status")).ToLower() %> type="checkbox" /></ItemTemplate>
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
                window.open('../main/view.aspx?EID=tbl_SYS_Config&_fc=TaskScheduler_Add&_pt=V&PageType=A');
            }
            else if (mode == "E" || mode == "V" || mode == "D" ) {
                var id = RadGrid_GetDataKey("<%= dgData.ClientID %>");
                if (id == null)
                    return false;
                if (mode == "D")
                    return confirm('Do you wish to delete this record?');
                window.open("../main/view.aspx?EID=tbl_SYS_Config&_fc=TaskScheduler_Add&_pt=V&PageType=" + mode + "&ID=" + id);
            }
        return false;
        }

        function SaveRecord(chk, buttonPid) {
            if (confirm("Do you want to save record ?")) {
                var data = new Object();

                data["Type"] = "SetDeactivate";
                data["@ID"] = buttonPid;
                data["@Value"] = $(chk).checked();
                PageMethods.Execute(data);
                updateRenderList();
            }
            else
                $(chk).checked(!$(chk).checked());
        }


        function pageLoad() {
            $(".Deactivate").CheckBoxX();
           
            
        }


    </script>

   
</asp:Content>


