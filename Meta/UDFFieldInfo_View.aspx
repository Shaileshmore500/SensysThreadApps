<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="UDFFieldInfo_View.aspx.cs" Inherits="SensysErp.Meta.UDFFieldInfo_View" %>

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
            content: "\f0ce";
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
                     <telerik:RadDropDownTree Skin="Silk" ID="rddEntity" EnableFiltering="true"  AutoPostBack="true" runat="server" Style="margin-top: 10px;" Width="400px" OnClientEntryAdding="OnClientEntryAdding" DefaultValue="all" DefaultMessage="Select Entity" ExpandNodeOnSingleClick="true">
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
                <asp:HiddenField ID="hdnModule" runat="server" />
                <asp:Button ID="btnRefresh" runat="server" style="display:none" OnClick="btnRefresh_Click" />

            </asp:Panel>
            <asp:Panel ID="pnl2" runat="server">
            <telerik:RadGrid ID="dgData" runat="server" AllowPaging="False" AllowSorting="True"
                AutoGenerateColumns="False" GridLines="None" GroupingEnabled="False"
                Skin="Vista" Width="95%" SkinID="NoScroll" OnNeedDataSource="dgData_NeedDataSource"
                AllowFilteringByColumn="false">
                <PagerStyle Mode="NextPrevAndNumeric" PageButtonCount="5" PagerTextFormat="Change page: {4} &amp;nbsp;({0}/{1})&amp;nbsp;&amp;nbsp;Total records : {5}" />
                <MasterTableView ClientDataKeyNames="FieldInfo_Pid" CommandItemDisplay="Bottom"
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

                        <telerik:GridBoundColumn DataField="FieldName" HeaderText="Field Name"
                            UniqueName="FieldName">
                        </telerik:GridBoundColumn>

                        <telerik:GridBoundColumn DataField="Fieldtype" HeaderText="Field Type"
                            UniqueName="Fieldtype">
                        </telerik:GridBoundColumn>


                         <telerik:GridBoundColumn DataField="entityname" HeaderText="Table Name"
                            UniqueName="entityname">
                        </telerik:GridBoundColumn>

                       
                         <telerik:GridBoundColumn DataField="ToolTip" HeaderText="Tool Tip"
                            UniqueName="ToolTip">
                        </telerik:GridBoundColumn>

                        <telerik:GridBoundColumn DataField="IsSysCol" UniqueName="unSysCol" Display="false">
                            </telerik:GridBoundColumn>

                         <telerik:GridBoundColumn DataField="TableName" HeaderText="entityid" Display="false"
                            UniqueName="TableName">
                        </telerik:GridBoundColumn>
                        

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
                text = "Add UDF Field"
            else if (mode == "E")
                text = "Edit UDF Field";
            else if (mode == "D")
                text = "Delete";
            else {
                mode = "V";
                text = "View UDF Field";
            }
            var newurl = "";

            if (mode == "A") {
                var entity = $("#<%=hdnEntityID.ClientID%>").val();
                var module = $("#<%=hdnModule.ClientID%>").val();
                if (entity == "" || entity == "all" ) {
                    alert("Please select the entity");
                    return false;
                }
                window.open('../main/view.aspx?EID=tbl_SYS_Config&_fc=UDFFieldInfo_Add&_pt=V&PageType=A&EntityID=' + entity + '&ModuleID=' + module);
            }
            else if (mode == "E" || mode == "V" || mode == "D" ) {
                var id = RadGrid_GetDataKey("<%= dgData.ClientID %>");
                if (id == null)
                    return false;

                var issys = RadGrid_GetSelectedCellText("<%= dgData.ClientID %>", 5);

                if (mode != "V" && issys == "True") {
                    alert('Cannot edit or  delete this field.');
                    return false;
                }

                if (mode == "D")
                    return confirm('Do you wish to delete this record?');
                window.open("../main/view.aspx?EID=tbl_SYS_Config&_fc=UDFFieldInfo_Add&_pt=V&PageType=" + mode + "&ID=" + id);
            }
        return false;
        }

        //
        function pageLoad() {
              
        }

       

        
        

        function OnClientEntryAdding(sender, eventArgs) {
            if (eventArgs.get_entry().get_value() == "all") {
                $("#<%=hdnEntityID.ClientID%>").val(eventArgs.get_entry().get_value());
                $("#<%=hdnEntitytext.ClientID%>").val('all');
                $("#<%=btnRefresh.ClientID%>").click();
            }
            else if (eventArgs.get_node().get_level() == 2) {
                $("#<%=hdnEntityID.ClientID%>").val(eventArgs.get_entry().get_value());
                $("#<%=hdnModule.ClientID%>").val(eventArgs.get_node().get_parent().get_value()); 
                $("#<%=hdnEntitytext.ClientID%>").val('entity');
                $("#<%=btnRefresh.ClientID%>").click();
            }
            else {
                $("#<%=hdnEntityID.ClientID%>").val("");
            }
            $find("<%=rddEntity.ClientID%>").closeDropDown();
        }
         

    </script>

   
</asp:Content>


