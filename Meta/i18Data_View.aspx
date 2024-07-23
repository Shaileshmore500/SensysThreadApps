<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="i18Data_View.aspx.cs" Inherits="SensysErp.Meta.i18Data_View" %>

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
            <table>
                <tr class="lang">
                    <td>
                        <asp:Label ID="lblLanguages" runat="server" Text="Select Language"></asp:Label>
                        <telerik:RadComboBox ID="rcbLanguage" runat="server"  AutoPostBack="false"></telerik:RadComboBox>
                    </td>
                </tr>
                <tr class="App">
                    <td>
                        <asp:Label ID="Label1" runat="server" Text="Select Application"></asp:Label>
                        <telerik:RadComboBox ID="rcbApplication" OnClientSelectedIndexChanged="App_OnClientSelectedIndexChanged"
                             AutoPostBack="false" runat="server"></telerik:RadComboBox>

                    </td>
                </tr>
                <tr class="Module">
                    <td>
                        <asp:Label ID="Label2" runat="server" Text="Select Module"></asp:Label>
                        <telerik:RadComboBox ID="rcbModule" runat="server" 
                            OnClientSelectedIndexChanged="Mod_OnClientSelectedIndexChanged"
                            AutoPostBack="false"
                             OnClientItemsRequesting="Module_OnClientItemsRequesting" EnableLoadOnDemand="true">
                            <WebServiceSettings Method="GetModuleList" Path="i18Data_View.aspx" />
                        </telerik:RadComboBox>
                    </td>
                </tr>
                 <tr class="Entity">
                    <td>
                        <asp:Label ID="Label3" runat="server" Text="Select Table"></asp:Label>
                        <telerik:RadComboBox ID="rcbEntity" runat="server" OnClientItemsRequesting="Entity_OnClientItemsRequesting" EnableLoadOnDemand="true">
                            <WebServiceSettings Method="GetEntityList" Path="i18Data_View.aspx" />
                        </telerik:RadComboBox>
                    </td>
                </tr>
                <tr>
                    <asp:Button ID="btnShow" runat="server" Text="Show Record" OnClick="btnShow_Click" />
                </tr>
                <tr>

                    <td>
                        <telerik:RadGrid ID="dgData" runat="server" AllowPaging="False" AllowSorting="True"
                            AutoGenerateColumns="False" GridLines="None" GroupingEnabled="False"
                            Skin="Vista" Height="350px" Width="95%" OnNeedDataSource="dgData_NeedDataSource"
                            AllowFilteringByColumn="false">
                            <PagerStyle Mode="NextPrevAndNumeric" PageButtonCount="5" PagerTextFormat="Change page: {4} &amp;nbsp;({0}/{1})&amp;nbsp;&amp;nbsp;Total records : {5}" />
                            <MasterTableView ClientDataKeyNames="EntityId,i18NData_pid,i18N_Pid" CommandItemDisplay="Bottom"
                                TableLayout="Fixed">
                                <RowIndicatorColumn Visible="false">
                                    <HeaderStyle Width="20px" />
                                </RowIndicatorColumn>
                                <ExpandCollapseColumn>
                                    <HeaderStyle Width="20px" />
                                </ExpandCollapseColumn>
                                <Columns>
                                    <telerik:GridBoundColumn DataField="Entity" HeaderText="Entity" UniqueName="unEntity">
                                    </telerik:GridBoundColumn>
                                    <telerik:GridBoundColumn DataField="Language" Visible="false" HeaderText="Language" UniqueName="unLanguage">
                                    </telerik:GridBoundColumn>
                                    <telerik:GridTemplateColumn DataField="DisplayName" HeaderText="Translation">
                                        <ItemTemplate>
                                            <asp:TextBox ID="txtDisplayName" Text='<%# Eval("DisplayName")  %>' runat="server"></asp:TextBox>
                                        </ItemTemplate>
                                    </telerik:GridTemplateColumn>
                                    <telerik:GridBoundColumn DataField="ToolTip"  HeaderText="ToolTip" UniqueName="unToolTip">
                                    </telerik:GridBoundColumn>
                                    <telerik:GridTemplateColumn DataField="ToolTipDisplayName"  HeaderText="Translation" UniqueName="unToolDp">
                                        <ItemTemplate>
                                            <asp:TextBox ID="txtToolTipDisplayName" Text='<%# Eval("ToolTipDisplayName")  %>' runat="server"></asp:TextBox>
                                        </ItemTemplate>
                                    </telerik:GridTemplateColumn>
                                </Columns>
                                <CommandItemTemplate>
                                    <telerik:RadToolBar ID="RadToolBar1" runat="server" Skin="Vista" Width="100%" OnButtonClick="RadToolBar1_ButtonClick"
                                        OnClientButtonClicking="onToolBarClientButtonClicking">
                                        <CollapseAnimation Duration="200" Type="OutQuint" />
                                        <Items>
                                            <telerik:RadToolBarButton CommandName="A" ImageUrl="~/images/AddRecord.gif"
                                                Text="Save">
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

        }

        function pageLoad() {
            if ($.QS('resource') == "Application" || $.QS('resource') == "View") {
                $('.App').hide();
                $('.Module').hide();
                $('.Entity').hide();
            }
            else if ($.QS('resource') == "Module") {
                $('.App').show();
                $('.Module').hide();
                $('.Entity').hide();
            }
            else if ($.QS('resource') == "Entities") {
                $('.App').show();
                $('.Module').show();
                $('.Entity').hide();
            }
            else if ($.QS('resource') == "Fields") {
                $('.App').show();
                $('.Module').show();
                $('.Entity').show();
            }
            else if ($.QS('resource') == "ToolTip") {
                $('.App').show();
                $('.Module').show();
                $('.Entity').show();
            }
            else if ($.QS('resource') == "Messages") {
                $('.App').hide();
                $('.Module').hide();
                $('.Entity').hide();
            }
        }


        function Mod_OnClientSelectedIndexChanged(sender, e) {
            $find('<%= rcbModule.ClientID %>').get_items().clear();
            $find('<%= rcbEntity.ClientID %>').get_items().clear();
            $find('<%= rcbEntity.ClientID %>').set_text('');
           
        }

        function App_OnClientSelectedIndexChanged(sender, e) {
            $find('<%= rcbModule.ClientID %>').get_items().clear();
            $find('<%= rcbEntity.ClientID %>').get_items().clear();
            $find('<%= rcbModule.ClientID %>').set_text('');
        }


        function Module_OnClientItemsRequesting(sender, eventArgs) {
            var context = eventArgs.get_context();
            context["@AppId"] = $find('<%= rcbApplication.ClientID %>').get_value();
            context["Type"] = "LoadModuleList";
        }
        function Entity_OnClientItemsRequesting(sender, eventArgs) {
            var context = eventArgs.get_context();
            context["@Module"] = $find('<%= rcbModule.ClientID %>').get_value();
            context["Type"] = "LoadEntityList";
        }
    </script>
</asp:Content>
