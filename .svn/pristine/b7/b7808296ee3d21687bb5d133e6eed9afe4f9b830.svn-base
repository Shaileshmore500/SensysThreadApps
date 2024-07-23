<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="MessageTemplate_View.aspx.cs" Inherits="SensysErp.Meta.MessageTemplate_View" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">

      
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
        .selectrpt
        {
            font-size: 12px;
            font-family: nunitoregular;
            padding: 3px 0px;
            display: inline-block;
            color: #7E0505 !important;
        }

            .selectrpt:hover
            {
                color: red !important;
            }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <asp:Label ID="lblEntity" runat="server" Visible="false" Text="Select Entity"></asp:Label>
            <telerik:RadComboBox ID="rcbEntity" AutoPostBack="true" Visible="false" OnSelectedIndexChanged="rcbEntity_SelectedIndexChanged" runat="server"></telerik:RadComboBox>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
            <table>
                <tr>
                    <td>
                        <telerik:RadDropDownTree Skin="Silk" ID="rddEntity" EnableFiltering="true" RenderMode="Lightweight" AutoPostBack="true" runat="server" Style="margin-top: 10px; margin-bottom: 10px" Width="50%" OnClientEntryAdding="OnClientEntryAdding" DefaultValue="all" DefaultMessage="Select Entity" ExpandNodeOnSingleClick="true">
                            <DropDownNodeTemplate>
                                <div class="<%# DataBinder.Eval(Container.DataItem, "cssStyle") %>">
                                    <span>
                                        <%# DataBinder.Eval(Container, "Text") %>
                                    </span>
                                </div>
                            </DropDownNodeTemplate>

                            <FilterSettings Highlight="Matches" EmptyMessage="Type here to find" />
                        </telerik:RadDropDownTree>
                        <asp:Button ID="btnNodeClick" runat="server" Style="display: none;" OnClick="btnNodeClick_Click" />
                        <asp:HiddenField ID="hdnNodevalue" runat="server" />
                         <asp:HiddenField ID="hdnModeValue" runat="server" />
                        <telerik:RadGrid ID="dgData" runat="server" AllowPaging="False" AllowSorting="True"
                            AutoGenerateColumns="False" GridLines="None" GroupingEnabled="False"
                            Skin="Vista" Height="350px" Width="95%" OnNeedDataSource="dgData_NeedDataSource"
                            AllowFilteringByColumn="false" EnableLinqExpressions="false">
                            <PagerStyle Mode="NextPrevAndNumeric" PageButtonCount="5" PagerTextFormat="Change page: {4} &amp;nbsp;({0}/{1})&amp;nbsp;&amp;nbsp;Total records : {5}" />
                            <MasterTableView ClientDataKeyNames="LetterTemplates_Pid" CommandItemDisplay="Bottom"
                                TableLayout="Fixed">
                                <RowIndicatorColumn Visible="false">
                                    <HeaderStyle Width="20px" />
                                </RowIndicatorColumn>
                                <ExpandCollapseColumn>
                                    <HeaderStyle Width="20px" />
                                </ExpandCollapseColumn>
                                <Columns>
                                    <telerik:GridTemplateColumn UniqueName="unSelect" Visible="false">
                                        <ItemTemplate><a href="javascript:void(0)" class="selectrpt" pid='<%#Eval("LetterTemplates_Pid") %>' onclick="selectLetter(this)"><%#Eval("LetterName") %></a></ItemTemplate>
                                    </telerik:GridTemplateColumn>
                                    <telerik:GridTemplateColumn DataField="LetterName" HeaderText="Name" UniqueName="unName">
                                        <ItemTemplate><span class='<%# ErpModel.Globals.AppManager.IsCurrentOwnerItem(Container.DataItem)?"DevMode":"" %>'><%# Eval("LetterName").ToString()%></span></ItemTemplate>
                                    </telerik:GridTemplateColumn>
                                    <telerik:GridBoundColumn DataField="LetterCode" HeaderText="Code" UniqueName="unCode">
                                    </telerik:GridBoundColumn>
                                    <telerik:GridBoundColumn DataField="LetterDescription" HeaderText="Description" UniqueName="unDescription">
                                    </telerik:GridBoundColumn>

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
                                            <telerik:RadToolBarButton CommandName="MC"
                                                ImageUrl="~/images/Icon.gif" Text="Make Copy">
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
                text = "Add Message Template"
            else if (mode == "E")
                text = "Edit Message Template";
            else if (mode == "D")
                text = "Delete";
            else if (mode == "V")
             text = "View Message Template";
           else if (mode == "MC")
             text = "Make Copy";

            var newurl = "";
            //var EID = $find("<%= rcbEntity.ClientID %>").get_selectedItem().get_value();
            var EID = $.QS("EID")

            var userModeQS = "";
            if ($.QS("u") == "1") {
                userModeQS = userModeQS + "&u=1";
            }
            var tag=$.defaultVal( $.QS("tag"),  $.QS("ftag"));
            if (mode == "A") {
                window.open("MessageTemplate.aspx?_ns=1&PageType=A&IsMaster=1&EID=" + EID + userModeQS + "&tag=" + tag);
            }
            else if (mode == "E" || mode == "V" || mode == "D" || mode == "MC") {
                var id = RadGrid_GetDataKey("<%= dgData.ClientID %>");
                if (id == null)
                    return false;

                if (mode == "D")
                    return confirm('Do you wish to delete this record?');

                if (mode == "MC")
                    window.open("MessageTemplate.aspx?_ns=1&PageType=" + mode + "&RefID=" + id + "&IsMaster=1&EID=" + EID + userModeQS + "&tag=" + tag);
                else
                    window.open("MessageTemplate.aspx?_ns=1&PageType=" + mode + "&ID=" + id + "&IsMaster=1&EID=" + EID + userModeQS + "&tag=" + tag);
            }
            return false;
        }

        function selectLetter(a) {
            a = $(a);
            parent.setLtrLinkValue(a.attr("pid"), a.html());

        }
        function OnClientEntryAdding(sender, eventArgs) {
            if (eventArgs.get_entry().get_value() == "all") {
                $("#<%=hdnNodevalue.ClientID%>").val(eventArgs.get_entry().get_value());
                $("#<%=hdnModeValue.ClientID%>").val('all');
                $("#<%=btnNodeClick.ClientID%>").click();
            }
            else if (eventArgs.get_node().get_level() == 0 ) {
                $("#<%=hdnNodevalue.ClientID%>").val(eventArgs.get_entry().get_value());
                $("#<%=hdnModeValue.ClientID%>").val('app');
                $("#<%=btnNodeClick.ClientID%>").click();
            }
            else if (eventArgs.get_node().get_level() == 1  ) {
                $("#<%=hdnNodevalue.ClientID%>").val(eventArgs.get_entry().get_value());
                $("#<%=hdnModeValue.ClientID%>").val('module');
                $("#<%=btnNodeClick.ClientID%>").click();
            }
            else if (eventArgs.get_node().get_level() == 2  ) {
                $("#<%=hdnNodevalue.ClientID%>").val(eventArgs.get_entry().get_value());
                $("#<%=hdnModeValue.ClientID%>").val('entity');
                $("#<%=btnNodeClick.ClientID%>").click();
            }
            $find("<%=rddEntity.ClientID%>").closeDropDown();
        }
    </script>
</asp:Content>


