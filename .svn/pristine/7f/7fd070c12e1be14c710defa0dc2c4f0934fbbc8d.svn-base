<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="Workflowinstance.aspx.cs" Inherits="SensysErp.Main.Workflowinstance" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">

        //window.title="title"
        //document.documentElement.style.overflowX = "hidden"
        //document.documentElement.style.overflowY = "hidden"

    </script>
    <style type="text/css">
        #tvCtrEnt
        {
            position: absolute;
            display: none;
            width: 224px;
            height: 295px;
            background-color:#fff;
            border: solid 2px #4D4C4C;
            z-index: 10;
            box-shadow: 2px 2px 5px #555;
            overflow-y: auto;
        }
        .DarkTheme #tvCtrEnt
        {
            background-color:#000;
        }
        .rgMasterTable .default-link
        {
            font-size:11px;
        }
    </style>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
   
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
            <div style="margin-top: 10px; margin-left: 10px;">
                <asp:Panel ID="pnl1" runat="server" Style="margin-bottom: 10px;">
                    <table>
                        <tr>
                            <td>
                                <asp:TextBox ID="txtEntity" runat="server" ReadOnly="true"></asp:TextBox>
                                <div id="tvCtrEnt">
                                    <telerik:RadTreeView ID="tvEntity" runat="server" OnClientNodeClicked="selectEntity">
                                        <Nodes>
                                        </Nodes>
                                        <WebServiceSettings Path="Workflowinstance.aspx" Method="GetChildNode"></WebServiceSettings>
                                    </telerik:RadTreeView>
                                </div>
                                <asp:HiddenField ID="hdnEntityID" runat="server" />
                                <asp:HiddenField ID="hdnEntitytext" runat="server" />
                                <asp:Button ID="btnRefresh" runat="server" Style="display: none" OnClick="btnRefresh_Click" />
                            </td>
                            <td>

                                <asp:Label ID="lblWorkflow" runat="server" Text="Work Flow"></asp:Label>
                                <telerik:RadComboBox ID="rcbworkFlow" runat="server" OnSelectedIndexChanged="rcbworkFlow_SelectedIndexChanged" AutoPostBack="true"></telerik:RadComboBox>
                            </td>
                        </tr>
                    </table>

                </asp:Panel>
                <asp:Panel ID="pnl2" runat="server">
                    <telerik:RadGrid ID="dgData" runat="server" AllowPaging="False" AllowSorting="True"
                        AutoGenerateColumns="False" GridLines="None" GroupingEnabled="False"
                        Skin="Vista" Height="350px" Width="95%" OnNeedDataSource="dgData_NeedDataSource"
                        AllowFilteringByColumn="false" PageSize="25" AllowMultiRowSelection="true">
                        <PagerStyle Mode="NextPrevAndNumeric" PageButtonCount="5" PagerTextFormat="Change page: {4} &amp;nbsp;({0}/{1})&amp;nbsp;&amp;nbsp;Total records : {5}" />
                        <MasterTableView ClientDataKeyNames="wfid,WorkflowInstances_PID" CommandItemDisplay="Top" AllowPaging="true"
                            TableLayout="Fixed">
                            <RowIndicatorColumn Visible="false">
                                <HeaderStyle Width="20px" />
                            </RowIndicatorColumn>
                            <ExpandCollapseColumn>
                                <HeaderStyle Width="20px" />
                            </ExpandCollapseColumn>
                            <Columns>
                                <telerik:GridClientSelectColumn><HeaderStyle Width="42px" /></telerik:GridClientSelectColumn>
                                 <telerik:GridBoundColumn DataField="wfid" HeaderText="wfid" Display="false" UniqueName="wfid">
                                </telerik:GridBoundColumn>
                                <telerik:GridTemplateColumn DataField="" HeaderStyle-Width="74px" HeaderText="Track WF" UniqueName="track">
                                     <ItemTemplate><a href="javascript:void(0)" onclick='<%#"showTracking("+Eval("WorkflowInstances_PID")+",\""+Eval("WFScenario_fid")+"\")" %>' class="default-link">Track WF</a></ItemTemplate>
                                </telerik:GridTemplateColumn>
                                <telerik:GridBoundColumn DataField="Entityname" HeaderText="Entity Name" UniqueName="Entityname">
                                     <HeaderStyle Width="150px" />
                                </telerik:GridBoundColumn>
                                <telerik:GridTemplateColumn DataField="Entitytitle" HeaderStyle-Width="174px" HeaderText="Entity Title" UniqueName="Entitytitle">
                                     <ItemTemplate><a href="javascript:void(0)" onclick='<%#"showRecord(\""+Eval("EntityID")+"\",\""+Eval("RecordID")+"\")" %>' class="default-link"><%# HelperLib.Conversion.C.IsBlank(Eval("Entitytitle"))?"View":Eval("Entitytitle").ToString() %></a></ItemTemplate>
                                </telerik:GridTemplateColumn>
                                <telerik:GridBoundColumn DataField="WorkflowName" HeaderText="Workflow Name" UniqueName="WorkflowName">
                                    <HeaderStyle Width="135px" />
                                </telerik:GridBoundColumn>
                                <telerik:GridBoundColumn DataField="ScenarioName" HeaderText="Scenario Name" UniqueName="ScenarioName">
                                    <HeaderStyle Width="130px" />
                                </telerik:GridBoundColumn>
                                <telerik:GridBoundColumn DataField="Username" HeaderText="Trigger by User" UniqueName="Username">
                                    <HeaderStyle Width="135px" />
                                </telerik:GridBoundColumn>
                                <telerik:GridBoundColumn DataField="startdate" HeaderText="Start Date" DataFormatString="{0:dd/MM/yyyy hh:mm tt}" UniqueName="startdate">
                                    <HeaderStyle Width="80px" />
                                </telerik:GridBoundColumn>
                                <telerik:GridBoundColumn DataField="enddate" HeaderText="End Date" DataFormatString="{0:dd/MM/yyyy hh:mm tt}" UniqueName="enddate">
                                    <HeaderStyle Width="80px" />
                                </telerik:GridBoundColumn>
                                <telerik:GridBoundColumn DataField="currentstage" HeaderText="Current Stage" UniqueName="currentstage">
                                    <HeaderStyle Width="95px" />
                                </telerik:GridBoundColumn>
                                <telerik:GridBoundColumn DataField="triggercause" HeaderText="Trigger Cause" UniqueName="triggercause">
                                       <HeaderStyle Width="61px" />
                                </telerik:GridBoundColumn>
                                <telerik:GridBoundColumn DataField="parentworkflow" HeaderText="Parent work Flow" UniqueName="parentworkflow">
                                     <HeaderStyle Width="88px" />
                                </telerik:GridBoundColumn>
                                <telerik:GridBoundColumn DataField="notifyparent" HeaderText="Notify Parent" UniqueName="notifyparent">
                                     <HeaderStyle Width="59px" />
                                </telerik:GridBoundColumn>
                                <telerik:GridBoundColumn DataField="iscompleted" HeaderText="Completed" UniqueName="iscompleted">
                                    <HeaderStyle Width="55px" />
                                </telerik:GridBoundColumn>
                                <telerik:GridBoundColumn DataField="workflowsucceded" HeaderText="WorkFlow Succeeded" UniqueName="workflowsucceeded">
                                     <HeaderStyle Width="75px" />
                                </telerik:GridBoundColumn>
                                 <telerik:GridCheckBoxColumn DataField="ExceptionOccured" HeaderText="Exception Occured" UniqueName="ExceptionOccured">
                                     <HeaderStyle Width="72px" />
                                </telerik:GridCheckBoxColumn>
                                <%-- <telerik:GridBoundColumn DataField="ExceptionMessage" HeaderText="Exception Message" UniqueName="ExceptionMessage">
                                     <HeaderStyle Width="72px" />
                                </telerik:GridBoundColumn>--%>
                                <telerik:GridTemplateColumn DataField="ExceptionOccured" HeaderText="Exception Message" UniqueName="ExceptionMessage">
                                    <HeaderStyle Width="72px" />
                                    <ItemTemplate>
                                        <asp:LinkButton ID="lnkErrorMsg" CssClass="errorLink" runat="server" Text='Error' Visible='<%# HelperLib.Conversion.C.Bool(Eval("ExceptionOccured")) %>' ToolTip='<%# HelperLib.Conversion.C.Str(Eval("ExceptionMessage")) %>'></asp:LinkButton>
                                    </ItemTemplate>
                                </telerik:GridTemplateColumn>
                               


                            </Columns>
                            <CommandItemTemplate>
                                <telerik:RadToolBar ID="RadToolBar1" runat="server" Skin="Vista" Width="100%" OnButtonClick="RadToolBar1_ButtonClick"
                                    OnClientButtonClicking="onToolBarClientButtonClicking">
                                    <CollapseAnimation Duration="200" Type="OutQuint" />
                                    <Items>
                                        <telerik:RadToolBarButton CommandName="DT"
                                            ImageUrl="~/images/Icon.gif" Text="Details">
                                        </telerik:RadToolBarButton>
                                        <telerik:RadToolBarButton CommandName="D"
                                            ImageUrl="~/images/delete.gif" Text="Delete">
                                        </telerik:RadToolBarButton>
                                         <telerik:RadToolBarButton CommandName="R"
                                            ImageUrl="~/images/checked.gif" Text="Revive">
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
                            <Scrolling AllowScroll="True" UseStaticHeaders="True" />
                            <Resizing AllowColumnResize="True" />
                        </ClientSettings>
                    </telerik:RadGrid>
                </asp:Panel>
            </div>
        </ContentTemplate>
    </asp:UpdatePanel>
    <style>
        .errorRow
        {
            background-color:#D03333  !important;
        }
            .errorRow TD,.errorRow TD A
            {
                color:#fff !important;
            }
    </style>
    <script type="text/javascript">
        $(window).on("resize", $.debounce(250, function () {
            resizeGridHeight();
        }));

        
        function resizeGridHeight() {
            var grid = $("div.rgDataDiv");
            //alert($(window).height() - (grid.offset() ? grid.offset().top : 0) - 75)
            grid.css("height", "");
            grid.css("max-height", $(window).height() - (grid.offset() ? grid.offset().top : 0) - 75);

        }
        function pageLoad() {
            //$(".Deactivate").CheckBoxX();
            if ($("#tvCtrEnt").exists()) {
                $("#<%=txtEntity.ClientID %>").on("click", function (e) {
                toggleEntityTree(e.target); e.stopPropagation();
            })
            $(document).on("click", function () { $("#tvCtrEnt").hide(); })
            $("#tvCtrEnt").on("click", function (e) { e.stopPropagation(); });
            resizeGridHeight();
            $("#<%=dgData.ClientID%>").find(".errorLink").closest("TR").addClass("errorRow");
        }

    }

    if ($("#tvCtrEnt").exists()) {
        $("#<%=txtEntity.ClientID %>").on("click", function (e) {
                toggleEntityTree(e.target); e.stopPropagation();
            })
            $(document).on("click", function () { $("#tvCtrEnt").hide(); })
            $("#tvCtrEnt").on("click", function (e) { e.stopPropagation(); });
        }

        function toggleEntityTree(txt) {
            $(txt).next().show();
        }

        function selectEntity(sender, args) {

            var t = $("#<%=txtEntity.ClientID %>");
            var n = args.get_node();

            if (n.get_level() < 2 && n.get_value() != "All")
                return;
            if (n.get_value() == "All") {
                t.val(n.get_text());
                $("#<%=hdnEntityID.ClientID %>").val(n.get_value());
                $("#<%=hdnEntitytext.ClientID %>").val(n.get_text());
            }
            else {
                t.val("");
                t.val(n.get_text());
                $("#<%=hdnEntityID.ClientID %>").val(n.get_value());
                 $("#<%=hdnEntitytext.ClientID %>").val(n.get_text());
            }
            $("#tvCtrEnt").hide();
            $("#<%=btnRefresh.ClientID%>").click();

         }


         function onToolBarClientButtonClicking(sender, args) {
             var mode = args.get_item().get_commandName();
             if (mode == "C") {
                 args.set_cancel(true);
                 window.close();
             }
             else
                 return args.set_cancel(!OpenWindow(mode));
         }

         function OpenWindow(mode) {
             var text = "";
             if (mode == "DT")
                 text = "Workflow Instance Detail"

             var newurl = "";

             if (mode == "DT" || mode == "D" || mode == "R") {
                 var Wfid = RadGrid_GetDataKey("<%= dgData.ClientID %>");
            if (Wfid == null)
                return false;
            if (mode == "DT") {
                window.open('Workflowinstance_Detail.aspx?WFID=' + Wfid);
            }
            else {
                if (mode == "D" )
                    return confirm('Do you wish to delete this record?');
                else if (mode == "R")
                    return confirm('Do you wish to restore this record?');
            }

        }
        return false;
         }

        function showRecord(eid, recid) {
            if ($.isEmpty(eid) || $.isEmpty(recid))
                return;
            window.open("ui.aspx?EID=" + eid + "&ID=" + recid + "&_pt=V");
        }

        function showTracking(id, scn) {
            window.open("../Meta/WorkflowDesigner.aspx?PageType=Track&ID=" + scn + "&TrackID=" + id);
        }

    </script>

</asp:Content>
