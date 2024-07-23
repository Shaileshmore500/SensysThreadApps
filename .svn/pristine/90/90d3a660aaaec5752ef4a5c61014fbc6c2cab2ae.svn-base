<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="AutoGenerateCode_View.aspx.cs" Inherits="SensysErp.Meta.AutoGenerateCode_View" %>

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
            
          

            <asp:Panel ID="pnl2" runat="server">


                  

                         <telerik:RadGrid ID="dgData" runat="server" AllowPaging="False" AllowSorting="True"
                AutoGenerateColumns="False" GridLines="None" GroupingEnabled="False"
                Skin="Vista" Height="350px" Width="95%" OnNeedDataSource="dgData_NeedDataSource"
                AllowFilteringByColumn="false" >
                <PagerStyle Mode="NextPrevAndNumeric" PageButtonCount="5" PagerTextFormat="Change page: {4} &amp;nbsp;({0}/{1})&amp;nbsp;&amp;nbsp;Total records : {5}" />
                <MasterTableView ClientDataKeyNames="AutoCodes_Pid" CommandItemDisplay="Bottom"
                    TableLayout="Fixed">
                    <RowIndicatorColumn Visible="false">
                        <HeaderStyle Width="20px" />
                    </RowIndicatorColumn>
                    <ExpandCollapseColumn>
                        <HeaderStyle Width="20px" />
                    </ExpandCollapseColumn>
                    <Columns>

                        <telerik:GridBoundColumn DataField="displayName" HeaderText="Entity"
                            UniqueName="displayName">
                        </telerik:GridBoundColumn>

                         <telerik:GridBoundColumn DataField="FieldName" HeaderText="Field Name"
                            UniqueName="FieldName">
                        </telerik:GridBoundColumn>

                         <telerik:GridCheckBoxColumn DataField="DisableAutoCode" HeaderText="Disable Auto Code "
                            UniqueName="DisableAutoCode">
                        </telerik:GridCheckBoxColumn>

                        <telerik:GridTemplateColumn DataField="IsDeactivated" HeaderText="Active" UniqueName="IsDeactivated"><HeaderStyle Width="8%" />
                        <ItemTemplate><input id='<%# "chk1"+Eval("AutoCodes_Pid") %>' onclick='<%# "return SaveRecordAutoCode(this,\""+HelperLib.Conversion.C.Str(Eval("AutoCodes_Pid"))+"\");"%>' class="Deactivate" <%# HelperLib.Conversion.C.Str(Eval("Status")).ToLower() %> type="checkbox" /></ItemTemplate>
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
                text = "Add Auto Generate Code"
            else if (mode == "E")
                text = "Edit Auto Generate Code";
            else if (mode == "D")
                text = "Delete";
            else {
                mode = "V";
                text = "View Auto Generate Code ";
            }
            var newurl = "";
            if (mode == "A") {
                window.open('../main/view.aspx?EID=tbl_SYS_Config&_fc=AutoGen_Add&_pt=V');
            }
            else if (mode == "E" || mode == "V" || mode == "D" ) {
                var id = RadGrid_GetDataKey("<%= dgData.ClientID %>");
                if (id == null)
                    return false;
                if (mode == "D")
                    return confirm('Do you wish to delete this record?');
                window.open("../main/view.aspx?EID=tbl_SYS_Config&_fc=AutoGen_Add&_pt=V&PageType=" + mode + "&ID=" + id);
            }
        return false;
        }


        function SaveRecordAutoCode(chk, buttonPid) {
            
            if (confirm("Do you want to save record ?")) {
                var data = new Object();

                data["Type"] = "SetDeactivateAutoGenerateCode";
                data["@ID"] = buttonPid;
                data["@Value"] = !$(chk).checked();
                PageMethods.Execute(data);
               
            }
            else
                $(chk).checked(!$(chk).checked());
        }

        function pageLoad() {
            $(".Deactivate").CheckBoxX();


        }
         

    </script>

   
</asp:Content>


