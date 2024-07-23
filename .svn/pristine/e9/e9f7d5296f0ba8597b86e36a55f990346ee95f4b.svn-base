<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="Layout_View.aspx.cs" Inherits="SensysErp.Meta.Layout_View" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">

        //window.title="title"
       

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

            <telerik:RadGrid ID="dgData" SkinID="NoScroll" runat="server" AllowPaging="False" AllowSorting="True"
                AutoGenerateColumns="False" GridLines="None" GroupingEnabled="False"
                Skin="Vista"  Width="95%" OnNeedDataSource="dgData_NeedDataSource"
                AllowFilteringByColumn="false">
                <PagerStyle Mode="NextPrevAndNumeric" PageButtonCount="5" PagerTextFormat="Change page: {4} &amp;nbsp;({0}/{1})&amp;nbsp;&amp;nbsp;Total records : {5}" />
                <MasterTableView ClientDataKeyNames="layout_pid,StaticLayout,IsDependent,ParentLayoutID,layouttype,Responsive" CommandItemDisplay="Bottom"
                    TableLayout="Fixed">
                    <RowIndicatorColumn Visible="false">
                        <HeaderStyle Width="20px" />
                    </RowIndicatorColumn>
                    <ExpandCollapseColumn>
                        <HeaderStyle Width="20px" />
                    </ExpandCollapseColumn>
                    <Columns>
                        <telerik:GridTemplateColumn HeaderText="" HeaderStyle-Width="30px" AllowFiltering="false" AllowSorting="false" UniqueName="launch">
                            <ItemTemplate><span title="Launch Page" onclick="launchForm(this)" class="launch"></span></ItemTemplate>
                        </telerik:GridTemplateColumn>
                        <telerik:GridTemplateColumn DataField="layoutname" HeaderText="Title" UniqueName="column">
                            <ItemTemplate><span onclick="editLayout(this)" class='lnk <%# ErpModel.Globals.AppManager.IsCurrentOwnerItem(Container.DataItem)?"DevMode":"" %>'><%# Eval("layoutname").ToString()%></span></ItemTemplate>
                        </telerik:GridTemplateColumn>
                        <telerik:GridBoundColumn DataField="LayoutTag" ItemStyle-CssClass="colCode" HeaderText="Code" UniqueName="LayoutTag"></telerik:GridBoundColumn>
                        <telerik:GridBoundColumn DataField="Description" HeaderText="Description" UniqueName="Description"></telerik:GridBoundColumn>
                        <telerik:GridBoundColumn DataField="layouttype" ItemStyle-CssClass="colType"  HeaderText="Layout Type" UniqueName="layouttype"></telerik:GridBoundColumn>
                        <telerik:GridCheckBoxColumn DataField="IsHidden" HeaderText="IsHidden" UniqueName="IsHidden"></telerik:GridCheckBoxColumn>
                        <telerik:GridCheckBoxColumn DataField="Systemdefined" HeaderText="System Defined" UniqueName="UnSystem"></telerik:GridCheckBoxColumn>
                        <telerik:GridTemplateColumn DataField="IsDeactivated" HeaderText="Active" UniqueName="IsDeactivated1">
                            <ItemTemplate><input id='<%# "chk1"+Eval("Layout_Pid") %>' onclick='<%# "return SaveRecord(this,\""+HelperLib.Conversion.C.Str(Eval("Layout_Pid"))+"\");"%>' class="Deactivate" <%# HelperLib.Conversion.C.Str(Eval("Status")).ToLower() %> type="checkbox" /></ItemTemplate>
                        </telerik:GridTemplateColumn>
                        <telerik:GridBoundColumn DataField="modifiedDate" DataFormatString="{0:dd/MM/yyyy}" HeaderText="Modified On" UniqueName="modifiedDate"></telerik:GridBoundColumn>
                    </Columns>
                    <CommandItemTemplate>
                        <telerik:RadToolBar ID="RadToolBar1" runat="server" Skin="Vista" Width="100%" OnButtonClick="RadToolBar1_ButtonClick"
                            OnClientButtonClicking="onToolBarClientButtonClicking">
                            <CollapseAnimation Duration="200" Type="OutQuint" />
                            <Items>                               
                                <telerik:RadToolBarButton CommandName="A" Visible='<%# (AllowDataEntry("ADD") && (LayoutType == "Control" || LayoutType == "Filters" ))|| LayoutType == "SecurityFilter" %>' ImageUrl="~/images/AddRecord.gif"
                                    Text="Add">
                                </telerik:RadToolBarButton>
                                <telerik:RadToolBarSplitButton EnableDefaultButton="false" CommandName="A" Value="A"
                                    ImageUrl="~/images/AddRecord.gif" Text="Add" Visible='<%# AllowDataEntry("ADD") && LayoutType != "Filters" && LayoutType != "SecurityFilter" &&  LayoutType != "Control"  %>'>
                                    <Buttons>
                                        <telerik:RadToolBarButton CommandName="AS" ImageUrl="~/images/AddRecord.gif"
                                            Text='<%# LayoutType == "Grid" ? "Add Static View" : "Add Static Layout" %>'>
                                        </telerik:RadToolBarButton>
                                        <telerik:RadToolBarButton CommandName="MD" ImageUrl="~/images/AddRecord.gif"
                                            Text='Make Duplicate'>
                                        </telerik:RadToolBarButton>
                                        <telerik:RadToolBarButton CommandName="MDP" ImageUrl="~/images/AddRecord.gif"
                                            Text='Make Dependent'>
                                        </telerik:RadToolBarButton>
                                        <telerik:RadToolBarButton Visible='<%# LayoutType == "Grid" %>' CommandName="LV" ImageUrl="~/images/AddRecord.gif"
                                            Text='Add LookUp View'>
                                        </telerik:RadToolBarButton>
                                        <telerik:RadToolBarButton CommandName="R" ImageUrl="~/images/AddRecord.gif"
                                            Text='Add Responsive Layout'>
                                        </telerik:RadToolBarButton>
                                    </Buttons>
                                </telerik:RadToolBarSplitButton>

                                 <telerik:RadToolBarButton CommandName="Default" Visible='<%# AllowDataEntry("ADD") && (LayoutType == "Grid"||LayoutType == "Item")%>'
                                    ImageUrl="~/images/AddRecord.gif" Text="Create Default Template">
                                </telerik:RadToolBarButton>

                                <telerik:RadToolBarButton CommandName="E" Visible='<%# AllowDataEntry("EDIT")|| LayoutType == "SecurityFilter" %>'
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
                    <Scrolling AllowScroll="False" ScrollHeight="180px" UseStaticHeaders="True" />
                    <Resizing AllowColumnResize="True" />
                </ClientSettings>
            </telerik:RadGrid>
            <br /><br /><br />
        </ContentTemplate>
    </asp:UpdatePanel>
    <style>
         .launch:before {
            font-family: fontawesome;
    content: "\f08e";
    font-size: 18px;
    display: block;
    margin: 5px;
    color: #9e0bc4;
    cursor: pointer;
         }
        .lnk {
            text-decoration: underline;
    font-weight: bold;
    color: #0ba5c4;
     cursor: pointer;
        }
        .rgSelectedRow .lnk {
            color:#FFF;
        }
     </style>
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

        function launchForm(a) {
            a = $(a);
            var url = "";
            var code = a.closest("tr").find(".colCode").text();
            code = $.isEmpty(code) ? "" : code
            var type = a.closest("tr").find(".colType").text();
            if ($.QS("lt") == "Item") {
                if (type.indexOf("Resp")>-1)
                    url = "../main/main.aspx?1&EID=" + $.QS("EID") + "&_fc=" + code + "&_pt=A"
                else
                    url = "../main/ui.aspx?1&EID=" + $.QS("EID") + "&_pt=A&_fc=" + code
            }
            else {
                if (type.indexOf("Resp")>-1)
                    url = "../main/main.aspx?1&EID=" + $.QS("EID") + "&_fc=" + code + "&_pt=G";
                else if (type.indexOf("Look")>-1)
                    url = "../main/list.aspx?1&EID=" + $.QS("EID") + "&_fc=" + code
                else
                    url = "../main/view.aspx?EID=" + $.QS("EID") + "&_fc=" + code
            }



            window.open(url)
        }
        function editLayout(a) {
            a = $(a);
            var grid = $find("<%= dgData.ClientID %>").get_masterTableView();
            grid.clearSelectedItems();
            var ind = a.closest(".rgRow,.rgAltRow").attr("id").split('__')[1];
            if (ind > -1) {
                grid.selectItem(ind);
                OpenWindow("E")
            }
        }
        function OpenWindow(mode) {
            var text = "";
            if (mode == "Default")
                return confirm('Do you wish to create default template?');
            if ($.QS("lt") == "Item") {
                if (mode == "A" || mode == "R")
                    text = "Add Application";
                else if (mode == "AS")
                    text = "Add Static Layout";
                else if (mode == "MD")
                    text = "Make Duplicate Layout";
                else if (mode == "MDP")
                    text = "Make Dependent Layout";

                else if (mode == "E")
                    text = "Edit Application";
                else if (mode == "D")
                    text = "Delete";               
                else {
                    mode = "V";
                    text = "View Application";
                }

                var newurl = "";
                
                if (mode == "A") {
                    window.open("layout.aspx?Module=" + $.QS("Module") + "&EID=" + $.QS("EID"));
                }
                else if (mode == "R") {
                    window.open("uidesigner.aspx?_mo=i&Module=" + $.QS("Module") + "&EID=" + $.QS("EID"));
                }
                else if (mode == "AS") {

                    window.open("StaticLayOut_Add.aspx?PageType=" + mode + "&Module=" + $.QS("Module") + "&EID=" + $.QS("EID") + "&FromLayout=1&LayoutType=Item");
                }
                else if (mode == "E" || mode == "V" || mode == "D" || mode == "MD" || mode == "MDP" || mode == "P") {
                    var id = RadGrid_GetDataKey("<%= dgData.ClientID %>");
                    var isResponsive = RadGrid_MultipleDataKey("<%= dgData.ClientID %>", "Responsive") / 1;
                    if (id == null) {
                        return false;
                    }
                    if (mode == "D")
                        return confirm('Do you wish to delete this record?');
                    
                    var isStatic = (RadGrid_MultipleDataKey("<%= dgData.ClientID %>", "StaticLayout") == "True");
                    var isDependent = (RadGrid_MultipleDataKey("<%= dgData.ClientID %>", "IsDependent") == "True");
                    if (mode == "MD") {
                        if (isDependent) {
                            alert("You can not create duplicate of dependent layout");
                            return false;
                        }

                        if (isStatic) {
                            window.open("StaticLayOut_Add.aspx?Module=" + $.QS("Module") + "&EID=" + $.QS("EID") + "&RefID=" + id + "&ID=&FromLayout=1&LayoutType=Item&PageType=" + mode);
                        }
                        else {
                            window.open((isResponsive != 1 ? "Layout.aspx" : "uidesigner.aspx") + "?Module=" + $.QS("Module") + "&EID=" + $.QS("EID") + "&ID=&RefID=" + id);
                        }
                    }
                    else if (mode == "MDP") {
                        if (isStatic) {
                            alert("You can not create dependent of static layout");
                            return false;
                        }
                        else if (isDependent) {
                            alert("You can not create dependent of dependent layout");
                            return false;
                        }

                        window.open((isResponsive != 1 ? "Layout.aspx" : "uidesigner.aspx") + "?Module=" + $.QS("Module") + "&EID=" + $.QS("EID") + "&ID=&RefID=" + id + "&PageType=" + mode);
                    }
                    else {
                        if (isStatic)
                            window.open("StaticLayOut_Add.aspx?Module=" + $.QS("Module") + "&EID=" + $.QS("EID") + "&ID=" + id + "&FromLayout=1&LayoutType=Item&PageType=" + mode);
                        else
                            window.open((isResponsive != 1 ? "Layout.aspx" : "uidesigner.aspx") + "?Module=" + $.QS("Module") + "&EID=" + $.QS("EID") + "&ID=" + id);
                    }
                }

    }
    else if ($.QS("lt") == "Control") {

        var newurl = "";
        if (mode == "A") {
            window.open("InterfaceDesigner.aspx?m=Control");
        }
        else if (mode == "E" || mode == "V" || mode == "D") {
            var id = RadGrid_GetDataKey("<%= dgData.ClientID %>");
            if (id == null)
                return false;
            if (mode == "D")
                return confirm('Do you wish to delete this record?');
            window.open("InterfaceDesigner.aspx?PageType=E&m=Control&id=" + id);
        }

}
else if ($.QS("lt") == "Grid") {
    if (mode == "A" || mode == "R")
        text = "Add View"
    else if (mode == "AS")
        text = "Add Static View"
    else if (mode == "MD")
        text = "Make Duplicate View"
    else if (mode == "LV")
        text = "Make Lookup view";
    else if (mode == "MDP")
        text = "Make Dependent View"
    else if (mode == "E")
        text = "Edit View";
    else if (mode == "D")
        text = "Delete";
    else if (mode == "T")
        text = "Translate View";
    else {
        mode = "V";
        text = "Preview View";
    }
    var newurl = "";
    if (mode == "A") {
        window.open("Layout_Grid.aspx?Module=" + $.QS("Module") + "&EID=" + $.QS("EID") + "&TableName=" + $.QS("TableName") + "&PageType=" + mode);
    }
    else if (mode == "R") {
        window.open("uidesigner.aspx?_mo=g&Module=" + $.QS("Module") + "&EID=" + $.QS("EID"));
    }
    else if (mode == "LV") {
        window.open("Layout_Grid.aspx?Module=" + $.QS("Module") + "&EID=" + $.QS("EID") + "&TableName=" + $.QS("TableName") + "&PageType=" + mode + "&Islookup=1");
    }
    else if (mode == "AS") {

        window.open("StaticLayOut_Add.aspx?PageType=" + mode + "&Module=" + $.QS("Module") + "&EID=" + $.QS("EID") + "&FromLayout=0&LayoutType=" + $.QS("lt"));
    }
    else if (mode == "E" || mode == "V" || mode == "D" || mode == "MD" || mode == "MDP") {
        var id = RadGrid_GetDataKey("<%= dgData.ClientID %>");

        if (id == null)
            return false;
        if (mode == "D")
            return confirm('Do you wish to delete this record?');
        var isStatic = (RadGrid_MultipleDataKey("<%= dgData.ClientID %>", "StaticLayout") == "True");
        var isDependent = (mode == "E" || mode == "V" ? false : (RadGrid_MultipleDataKey("<%= dgData.ClientID %>", "IsDependent") == "True"));
        var parentID = RadGrid_MultipleDataKey("<%= dgData.ClientID %>", "ParentLayoutID");
        var layouttype = RadGrid_MultipleDataKey("<%= dgData.ClientID %>", "layouttype");
        var isResponsive = RadGrid_MultipleDataKey("<%= dgData.ClientID %>", "Responsive")/1;
        if (mode == "MD") {
            if (isDependent) {
                alert("You can not create duplicate of dependent view");
                return false;
            }

            else {
                if (isStatic)
                    window.open("StaticLayOut_Add.aspx?Module=" + $.QS("Module") + "&EID=" + $.QS("EID") + "&RefID=" + id + "&FromLayout=0&LayoutType=" + $.QS("lt") + "&PageType=" + mode);
                else if (layouttype == "Lookup View")
                    window.open("Layout_Grid.aspx?Module=" + $.QS("Module") + "&EID=" + $.QS("EID") + "&RefID=" + id + "&TableName=" + $.QS("TableName") + "&PageType=LV&Islookup=1");
                else
                    window.open((isResponsive != 1 ? "Layout_Grid.aspx" : "uidesigner.aspx") + "?Module=" + $.QS("Module") + "&EID=" + $.QS("EID") + "&RefID=" + id + "&TableName=" + $.QS("TableName") + "&PageType=" + mode);
            }
        }
        else if (mode == "MDP") {
            if (isStatic) {
                alert("You can not create dependent of static view");
                return false;
            }
            else if (isDependent) {
                alert("You can not create dependent of dependent view");
                return false;
            }
            else if (layouttype == "Lookup View") {
                alert("You can not create dependent of lookup view");
                return false;
            }
            else
                window.open((isResponsive != 1 ? "Layout_Grid.aspx" : "uidesigner.aspx") + "?Module=" + $.QS("Module") + "&EID=" + $.QS("EID") + "&RefID=" + id + "&TableName=" + $.QS("TableName") + "&PageType=" + mode);
        }
        else {
            if (isStatic)
                window.open("StaticLayOut_Add.aspx?Module=" + $.QS("Module") + "&EID=" + $.QS("EID") + "&ID=" + id + "&FromLayout=0&LayoutType=" + $.QS("lt") + "&PageType=" + mode);
            else
                window.open((isResponsive != 1 ? "Layout_Grid.aspx" : "uidesigner.aspx") + "?Module=" + $.QS("Module") + "&EID=" + $.QS("EID") + "&ID=" + id + "&TableName=" + $.QS("TableName") + "&PageType=" + mode);
        }
    }
    else if (mode == "T") {
        var id = RadGrid_GetDataKey("<%= dgData.ClientID %>");
            if (id == null)
                return false;
            window.open("i18Data_View.aspx?LID=" + id + "&PageCall=View&resource=View");
        }
}
else if ($.QS("lt") == "Filters" || $.QS("lt") == "SecurityFilter") {
    if (mode == "A")
        text = "Add Filters"
    else if (mode == "E")
        text = "Edit Filters";
    else if (mode == "D")
        text = "Delete";
    else {
        mode = "V";
        text = "Preview Filters";
    }
    var newurl = "";
    if (mode == "A") {
        window.open("Filters_Add.aspx?Module=" + $.QS("Module") + "&EID=" + $.QS("EID") + "&TableName=" + $.QS("TableName") + "&PageType=" + mode + "&PageCall=" + $.QS("lt"));
    }
    else if (mode == "E" || mode == "V" || mode == "D") {
        var id = RadGrid_GetDataKey("<%= dgData.ClientID %>");
        if (id == null)
            return false;
        if (mode == "D")
            return confirm('Do you wish to delete this record?');
        window.open("Filters_Add.aspx?Module=" + $.QS("Module") + "&EID=" + $.QS("EID") + "&ID=" + id + "&TableName=" + $.QS("TableName") + "&PageType=" + mode + "&PageCall=" + $.QS("lt"));
    }
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


