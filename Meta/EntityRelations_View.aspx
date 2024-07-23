<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="EntityRelations_View.aspx.cs" Inherits="SensysErp.Meta.EntityRelations_View" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

   

    <script type="text/javascript">

        //window.title="title"
        document.documentElement.style.overflowX = "hidden"
        document.documentElement.style.overflowY = "hidden"

    </script>

    <style type="text/css">
        #divGrid
        {
            padding: 7px 0 0 7px;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            -ms-box-sizing: border-box;
            box-sizing: border-box;
        }

        #ifrRelation
        {
            position: absolute;
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 5px;
            display: none;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
            <asp:Panel ID="pnlRelationFilter" runat="server">
                <asp:Label ID="lblRelationtype" runat="server" Text="Relation Type"></asp:Label>
                <telerik:RadComboBox ID="rcbRelationFilter" runat="server" AutoPostBack="true"  OnSelectedIndexChanged="rcbRelationFilter_SelectedIndexChanged">
                    <Items>
                        <telerik:RadComboBoxItem Text="All" Value="all" />
                        <telerik:RadComboBoxItem Text="One To Many" Value="1tm" Selected="true" />
                        <telerik:RadComboBoxItem Text="Many To One" Value="mt1" />
                        <telerik:RadComboBoxItem Text="One To One" Value="1t1" />
                        <telerik:RadComboBoxItem Text="Single Select" Value="ss" />
                    </Items>
                </telerik:RadComboBox>
            </asp:Panel>

            <div id="divGrid">
                <telerik:RadGrid ID="dgData" runat="server" AllowPaging="False" AllowSorting="True"
                    AutoGenerateColumns="False" GridLines="None" GroupingEnabled="False"
                    Skin="Vista" Height="350px" Width="95%" OnNeedDataSource="dgData_NeedDataSource"
                    AllowFilteringByColumn="false">
                    <PagerStyle Mode="NextPrevAndNumeric" PageButtonCount="5" PagerTextFormat="Change page: {4} &amp;nbsp;({0}/{1})&amp;nbsp;&amp;nbsp;Total records : {5}" />
                    <MasterTableView ClientDataKeyNames="entityrelation_pid,childtable,SystemDefined" CommandItemDisplay="Bottom"
                        TableLayout="Fixed">
                        <RowIndicatorColumn Visible="false">
                            <HeaderStyle Width="20px" />
                        </RowIndicatorColumn>
                        <ExpandCollapseColumn>
                            <HeaderStyle Width="20px" />
                        </ExpandCollapseColumn>
                        <Columns>
                            <telerik:GridTemplateColumn DataField="ChildtableName" HeaderText="Child Table" UniqueName="unPrimary">
                                <ItemTemplate><span class='<%# ErpModel.Globals.AppManager.IsCurrentOwnerItem(Container.DataItem)?"DevMode":"" %>'><%# Eval("ChildtableName").ToString()%></span></ItemTemplate>
                            </telerik:GridTemplateColumn>
                            <telerik:GridBoundColumn DataField="childkey" HeaderText="Child Key Field" UniqueName="unPrimaryKey">
                            </telerik:GridBoundColumn>
                             <telerik:GridTemplateColumn DataField="Parenttablename" HeaderText="Parent Table" UniqueName="unPrimaryParent">
                                <ItemTemplate><span><%# Eval("Parenttablename").ToString()%></span></ItemTemplate>
                            </telerik:GridTemplateColumn>
                            <telerik:GridBoundColumn DataField="parentkey" HeaderText="Parent Key Field" UniqueName="unPrimaryKeyParent">
                            </telerik:GridBoundColumn>
                            <telerik:GridBoundColumn DataField="reltype" HeaderText="Relation Type" UniqueName="unRel">
                            </telerik:GridBoundColumn>
                            <telerik:GridCheckBoxColumn DataField="Systemdefined" HeaderText="Is System Defined" UniqueName="UnSystem"></telerik:GridCheckBoxColumn>
                        </Columns>
                        <CommandItemTemplate>
                            <telerik:RadToolBar ID="RadToolBar1" runat="server" Skin="Vista" Width="100%" OnButtonClick="RadToolBar1_ButtonClick"
                                OnClientButtonClicking="onToolBarClientButtonClicking">
                                <CollapseAnimation Duration="200" Type="OutQuint" />
                                <Items>
                                    <telerik:RadToolBarButton CommandName="A" Visible='<%# AllowDataEntry("ADD") %>' ImageUrl="~/images/AddRecord.gif"
                                        Text="Add" Enabled='<%# GetFieldCount() %>'>
                                    </telerik:RadToolBarButton>
                                      <telerik:RadToolBarButton CommandName="E" Visible='<%# AllowDataEntry("Edit") %>' 
                                        ImageUrl="~/images/edit.gif" Text="Edit">
                                    </telerik:RadToolBarButton>
                                    <telerik:RadToolBarButton CommandName="V"
                                        ImageUrl="~/images/Icon.gif" Text="View">
                                    </telerik:RadToolBarButton>
                                    <telerik:RadToolBarButton CommandName="D" Visible='<%# AllowDataEntry("DELETE") %>' 
                                        ImageUrl="~/images/delete.gif" Text="Delete">
                                    </telerik:RadToolBarButton>
                                    <telerik:RadToolBarButton CommandName="C" ImageUrl="~/images/Cancel.gif"
                                        Text="Close" Visible="false">
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
            </div>
            <span style="visibility: hidden;" id="spnLocate">&nbsp;</span>
            <div id="ifrRelation">
                <iframe style="height: 100%; width: 100%;" id="ifrEntityRelation" frameborder="0"></iframe>
            </div>
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

        var url = "";

        function OpenWindow(mode) {
            var text = "";
            if (mode == "A")
                text = "Add Entity Relation"
            else if (mode == "E")
                text = "Edit Entity Relation";
            else if (mode == "D")
                text = "Delete";
            else {
                mode = "V";
                text = "View Entity Relation";
            }

            var reltype = $find("<%= rcbRelationFilter.ClientID %>").get_value();
            var newurl = "";
            if (mode == "A") {
                
                if (reltype == "all" || reltype == "1tm" || reltype == "1t1") {

                    url = "EntityRelations_Add.aspx?PageType=A&ModuleID=" + $.QS("ModuleID") + "&EntityID=" + $.QS("EntityID") + "&RelType=" + reltype;
                    var show = true;
                    toggleDetailsForm(show);
                }
                return false;
                //window.open("EntityRelations_Add.aspx?PageType=A&ModuleID=" + $.QS("ModuleID") + "&EntityID=" + $.QS("EntityID"));
            }
            else if (mode == "E" || mode == "V" || mode == "D") {
                var id = RadGrid_GetDataKey("<%= dgData.ClientID %>");
                    if (id == null)
                        return false;
                    if (mode == "D")
                        return confirm('Do you wish to delete this relation?');
                  
                    url = "EntityRelations_Add.aspx?PageType=" + mode + "&ID=" + id + "&ModuleID=" + $.QS("ModuleID") + "&EntityID=" + $.QS("EntityID");
                        var show = true;
                        toggleDetailsForm(show);
                    
                    return false;
                //window.open("EntityRelations_Add.aspx?PageType=" + mode + "&ID=" + id + "&ModuleID=" + $.QS("ModuleID") + "&EntityID=" + $.QS("EntityID"));
                }
            return false;
        }

        function toggleDetailsForm(show) {
            var ifr = $("#ifrRelation");
            if (show) {
                ifr.node(0).attr("src", url);
                $("#divGrid").css("opacity", 0.3);
                if (ifr.node(0)[0].contentWindow && ifr.node(0)[0].contentWindow.document)
                    $(ifr.node(0)[0].contentWindow.document.body).setVisible(false);
                ifr.stop(true, true).css("top", $("#spnLocate").offset().top).show().animate({ top: 0 }, 250, "easeInSine", function () { $("#divGrid").hide(); })
            }
            else {
                $("#divGrid").show();
                $("#divGrid").css("opacity", "");

                ifr.stop(true, true).animate({ top: ifr.outerHeight() }, 250, "easeInSine", function () { ifr.hide(); })
            }
        }
    </script>
</asp:Content>


