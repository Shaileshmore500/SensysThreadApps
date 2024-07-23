<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="CustomButtons_View.aspx.cs" Inherits="SensysErp.Meta.CustomButtons_View" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">

      
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
            <table>
                <tr>
                    <td>
                        <telerik:RadGrid ID="dgData" runat="server" AllowPaging="False" AllowSorting="True"
                            AutoGenerateColumns="False" GridLines="None" GroupingEnabled="False"
                            Skin="Vista" Height="350px" Width="95%" OnNeedDataSource="dgData_NeedDataSource"
                            AllowFilteringByColumn="false" EnableLinqExpressions="false">
                            <PagerStyle Mode="NextPrevAndNumeric" PageButtonCount="5" PagerTextFormat="Change page: {4} &amp;nbsp;({0}/{1})&amp;nbsp;&amp;nbsp;Total records : {5}" />
                            <MasterTableView ClientDataKeyNames="ActionButton_Pid" CommandItemDisplay="Bottom"
                                TableLayout="Fixed">
                                <RowIndicatorColumn Visible="false">
                                    <HeaderStyle Width="20px" />
                                </RowIndicatorColumn>
                                <ExpandCollapseColumn>
                                    <HeaderStyle Width="20px" />
                                </ExpandCollapseColumn>
                                <Columns>
                                    <telerik:GridTemplateColumn DataField="ButtonText" HeaderText="Button" UniqueName="unText"><ItemTemplate><span class='<%# ErpModel.Globals.AppManager.IsCurrentOwnerItem(Container.DataItem)?"DevMode":"" %>'><%# Eval("ButtonText").ToString()%></span></ItemTemplate></telerik:GridTemplateColumn>
                                    <telerik:GridBoundColumn DataField="action" HeaderText="Action" UniqueName="unAction"></telerik:GridBoundColumn>
                                    <telerik:GridCheckBoxColumn DataField="Systemdefined" HeaderText="System Defined" UniqueName="UnSystem"></telerik:GridCheckBoxColumn>
                                    <telerik:GridTemplateColumn DataField="IsDeactivated" HeaderText="Active" UniqueName="IsDeactivated1"><ItemTemplate><input id='<%# "chk1"+Eval("ActionButton_Pid") %>' onclick='<%# "return SaveRecord(this,\""+HelperLib.Conversion.C.Str(Eval("ActionButton_Pid"))+"\");"%>' class="Deactivate" <%# HelperLib.Conversion.C.Str(Eval("Status")).ToLower() %> type="checkbox" /></ItemTemplate></telerik:GridTemplateColumn>
                                </Columns>
                                <CommandItemTemplate>
                                    <telerik:RadToolBar ID="RadToolBar1" runat="server" Skin="Vista" Width="100%" OnButtonClick="RadToolBar1_ButtonClick"
                                        OnClientButtonClicking="onToolBarClientButtonClicking">
                                        <CollapseAnimation Duration="200" Type="OutQuint" />
                                        <Items>
                                            <telerik:RadToolBarButton Visible='<%# AllowDataEntry("ADD") %>' CommandName="A" ImageUrl="~/images/AddRecord.gif"
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
                                            <telerik:RadToolBarButton CommandName="C" ImageUrl="~/images/Cancel.gif"
                                                Text="Close">
                                            </telerik:RadToolBarButton>
                                        </Items>
                                    </telerik:RadToolBar>
                                </CommandItemTemplate>
                            </MasterTableView>
                            <ClientSettings AllowGroupExpandCollapse="False" AllowKeyboardNavigation="True">
                                <Scrolling AllowScroll="True" ScrollHeight="180px" UseStaticHeaders="True" />
                                <Resizing AllowColumnResize="True" />
                            </ClientSettings>
                        </telerik:RadGrid>
                    </td>
                </tr>
            </table>
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
        // $(".ddd").CheckBoxX();
        
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
                text = "Add Custom Buttons"
            else if (mode == "E")
                text = "Edit Custom Buttons";
            else if (mode == "D")
                text = "Delete";
            else if (mode == "V");
            text = "View Custom Buttons";

            var newurl = "";

            if (mode == "A") {
                window.open("CustomButtons_Add.aspx?PageType=A&Module=" + $.QS("Module") + "&EID=" + $.QS("EID") + "&App=" + $.QS("App"));
            }
            else if (mode == "E" || mode == "V" || mode == "D") {
                var id = RadGrid_GetDataKey("<%= dgData.ClientID %>");
                if (id == null)
                    return false;

                if (mode == "D")
                    return confirm('Do you wish to delete this record?');
                window.open("CustomButtons_Add.aspx?PageType=" + mode + "&Module=" + $.QS("Module") + "&EID=" + $.QS("EID") + "&App=" + $.QS("App") + "&ID=" + id);
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
        }
        else
            $(chk).checked(!$(chk).checked());
    }

    function pageLoad() {
        $(".Deactivate").CheckBoxX();
    }
    </script>
</asp:Content>


