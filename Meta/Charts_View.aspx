<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="Charts_View.aspx.cs" Inherits="SensysErp.Meta.Charts_View" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">

        //window.title="title"
        document.documentElement.style.overflowX = "hidden"
        document.documentElement.style.overflowY = "hidden"

    </script>
    <style>
        .rtbActive
        {
            width: 168px;
        }
    </style>
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
                <MasterTableView ClientDataKeyNames="layout_pid,StaticLayout,IsDependent,ParentLayoutID,layouttype" CommandItemDisplay="Bottom"
                    TableLayout="Fixed">
                    <RowIndicatorColumn Visible="false">
                        <HeaderStyle Width="20px" />
                    </RowIndicatorColumn>
                    <ExpandCollapseColumn>
                        <HeaderStyle Width="20px" />
                    </ExpandCollapseColumn>
                    <Columns>
                        <telerik:GridTemplateColumn DataField="layoutname" HeaderText="Title" UniqueName="column">
                            <ItemTemplate><span class='<%# ErpModel.Globals.AppManager.IsCurrentOwnerItem(Container.DataItem)?"DevMode":"" %>'><%# Eval("layoutname").ToString()%></span></ItemTemplate>
                        </telerik:GridTemplateColumn>
                        <telerik:GridBoundColumn DataField="LayoutTag" HeaderText="Code" UniqueName="LayoutTag"></telerik:GridBoundColumn>
                        <telerik:GridBoundColumn DataField="Description" HeaderText="Description" UniqueName="Description"></telerik:GridBoundColumn>
                        <telerik:GridBoundColumn DataField="layouttype" HeaderText="Layout Type" UniqueName="layouttype"></telerik:GridBoundColumn>
                        <telerik:GridCheckBoxColumn DataField="IsHidden" HeaderText="IsHidden" UniqueName="IsHidden"></telerik:GridCheckBoxColumn>
                        <telerik:GridCheckBoxColumn DataField="Systemdefined" HeaderText="System Defined" UniqueName="UnSystem"></telerik:GridCheckBoxColumn>
                        <telerik:GridTemplateColumn Visible="false" DataField="IsDeactivated" HeaderText="Active" UniqueName="IsDeactivated1">
                            <ItemTemplate>
                                <input id='<%# "chk1"+Eval("Layout_Pid") %>' onclick='<%# "return SaveRecord(this,\""+HelperLib.Conversion.C.Str(Eval("Layout_Pid"))+"\");"%>' class="Deactivate" <%# HelperLib.Conversion.C.Str(Eval("Status")).ToLower() %> type="checkbox" />
                            </ItemTemplate>
                        </telerik:GridTemplateColumn>
                        <telerik:GridBoundColumn DataField="modifiedDate" DataFormatString="{0:dd/MM/yyyy}" HeaderText="Modified On" UniqueName="modifiedDate"></telerik:GridBoundColumn>
                    </Columns>
                    <CommandItemTemplate>
                        <telerik:RadToolBar ID="RadToolBar1" runat="server" Skin="Vista" Width="100%" OnButtonClick="RadToolBar1_ButtonClick"
                            OnClientButtonClicking="onToolBarClientButtonClicking">
                            <CollapseAnimation Duration="200" Type="OutQuint" />
                            <Items>
                                <telerik:RadToolBarButton CommandName="A" Visible='<%# AllowDataEntry("ADD") %>' ImageUrl="~/images/AddRecord.gif"
                                    Text="Add">
                                </telerik:RadToolBarButton>

                                <telerik:RadToolBarButton CommandName="E" Visible='<%# AllowDataEntry("EDIT")  %>'
                                    ImageUrl="~/images/Edit.gif" Text="Edit">
                                </telerik:RadToolBarButton>
                                <telerik:RadToolBarButton CommandName="V"
                                    ImageUrl="~/images/Icon.gif" Text="View">
                                </telerik:RadToolBarButton>
                                <telerik:RadToolBarButton CommandName="T"
                                    Visible='<%#   LayoutType== "View" %>'
                                    ImageUrl="~/images/Icon.gif" Text="Translation">
                                </telerik:RadToolBarButton>
                                <telerik:RadToolBarButton CommandName="D" Visible='<%# AllowDataEntry("DELETE") %>'
                                    ImageUrl="~/images/delete.gif" Text="Delete">
                                </telerik:RadToolBarButton>
                                <telerik:RadToolBarButton CommandName="P" Visible='<%# LayoutType == "Chart" %>'
                                    ImageUrl="~/images/Edit.gif" Text="View Chart">
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
                text = "Add Chart"
            else if (mode == "E")
                text = "Edit Chart";
            else if (mode == "D")
                text = "Delete";
            else if (mode == "P")
                text = "View Chart";
            else {
                mode = "V";
                text = "Preview Chart";
            }
            var newurl = "";
            if (mode == "A") {
                window.open("GraphDesigner_Add.aspx?PageType=" + mode + "&PageCall=Chart");
            }
            else if (mode == "E" || mode == "V" || mode == "D" || mode == "P") {
                var id = RadGrid_GetDataKey("<%= dgData.ClientID %>");
        if (id == null)
            return false;
        if (mode == "D")
            return confirm('Do you wish to delete this record?');
        if (mode == "P")
            window.open("../Main/Chart.aspx?ID=" + id + "&PageType=" + mode + "&PageCall=Chart");
        else
            window.open("GraphDesigner_Add.aspx?ID=" + id + "&PageType=" + mode + "&PageCall=Chart");
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
                data.push({ Name: rows[i].get_element().cells[0].innerHTML, ID: rows[i].getDataKeyValue("layout_pid") });
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
    </script>
</asp:Content>


