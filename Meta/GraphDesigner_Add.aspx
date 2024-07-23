<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/Default.Master" CodeBehind="GraphDesigner_Add.aspx.cs" Inherits="SensysErp.Meta.GraphDesigner_Add" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">


    <%# HelperLib.Web.WebResources.GetResource("~/Css/black/jquery-ui-1.10.3.custom.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/layout_grid.css")%>
    <style>
        .entity-check .chk
        {
            top: -4px !important;
        }

        #multiSort_Group .multiSelectCtr .multiSelectItem .item
        {
            cursor: move !important;
        }

        .divAdvTreeSimple
        {
            height: 24px;
            width: 24px;
            color: green;
            font-family: fontawesome;
            font-size: 18px;
            font-weight: normal;
            display: inline-block;
        }

        .field-icon
        {
            font-family: nunitoregular;
            color: #7C7C7C;
            font-family: fontawesome;
            font-weight: normal;
            display: inline-block;
        }

        .field-title
        {
            font-family: nunitoregular;
            margin: 0 5px 0 2px;
            color: #7C7C7C;
            vertical-align: top;
            padding-left: 2px;
        }

        .divAdvTreeSimple:hover
        {
            color: red;
        }

        .eventlbl:before
        {
            content: "\f0e7";
            font-family: fontawesome;
            color: #FF9100;
            display: inline-block;
            vertical-align: middle;
        }
    </style>
    <script>
        $(function () {
            $("#multiSort_Group .multiSelectCtr").sortable({
                placeholder: "ui-state-highlight",
                connectWith: ".search-choice"
            });
            $("#multiSort_Group .multiSelectCtr").disableSelection();
        });
        var arrSortData_Group = [];
        var arrSortData_Order = [];
        var arrSortData_Attr = [];
        var VariablesList = [];
        var sid;
        var complFilterId;
        $(function () {
            $("#divAccord").accordion();
        });
    </script>
    <style>
        .ui-state-highlight
        {
            border: 1px solid green !important;
            height: 1.5em;
            line-height: 1.2em;
        }

        #tvCtrEnt, #tvCtrList
        {
            position: absolute;
            display: none;
            width: 298px;
            height: 295px;
            border: solid 1px #DBD7D7;
            z-index: 10;
            box-shadow: 2px 2px 5px #555;
            overflow-y: auto;
            margin-top: -5px;
            background-color: #FFFFF5;
        }



        .treetxt, .events
        {
            width: 288px;
            padding: 5px;
            font-size: 14px;
            color: #983434;
            margin-bottom: 5px;
            cursor: pointer;
            border: solid 1px #808080;
        }

            .treetxt:hover, .events:hover
            {
                background-color: #FFFFEC;
            }




        #rtvList
        {
            border: solid 1px #808080;
        }

        #divGeneral, #div1, #div2, #div3
        {
            width: 93.5%;
            height: 60%;
            overflow-y: auto;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <asp:UpdatePanel ID="UpdatePanel1" runat="server">

        <ContentTemplate>

            <div id="tvCtrEnt" style="display: none">
                <telerik:RadTreeView ID="tvEntity" OnClientNodeClicked="selectEntity" runat="server">
                </telerik:RadTreeView>
            </div>
            <div id="tvCtrList" style="display: none">
                <telerik:RadTreeView ID="rtvList" runat="server" OnClientNodePopulating="tvItems_NodePopulate" OnClientNodeClicked="fieldClick">
                    <WebServiceSettings Path="ExprEditor.aspx" Method="GetEntityFields"></WebServiceSettings>
                </telerik:RadTreeView>
            </div>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
            <telerik:RadTabStrip ID="tabRightsInfo" Style="margin-top: 17px; margin-left: 22px" runat="server" MultiPageID="RadMultiPageRights"
                OnClientTabSelected="OnClientTabSelected1"
                SelectedIndex="0">
                <Tabs>
                    <telerik:RadTab Text="General" PageViewID="pvGeneral" Value="General">
                    </telerik:RadTab>
                    <telerik:RadTab Text="Script" PageViewID="pvScript" Value="Script">
                    </telerik:RadTab>
                    <telerik:RadTab Text="Filter" PageViewID="pvFilter" Value="Filter">
                    </telerik:RadTab>
                    <telerik:RadTab Text="Compulsory Filter" PageViewID="pvCompulsoryFilter" Value="CompulsoryFilter">
                    </telerik:RadTab>
                    <telerik:RadTab Text="Role" PageViewID="pvRole" Value="Roles">
                    </telerik:RadTab>
                    <telerik:RadTab Text="Permission" PageViewID="pvRole" Value="Permission">
                    </telerik:RadTab>
                </Tabs>
            </telerik:RadTabStrip>
            <telerik:RadMultiPage ID="RadMultiPageRights" runat="server" SelectedIndex="0"
                Style="margin-left: 22px !important; width: 86% !important; border: 1px solid #6767A5">
                <telerik:RadPageView ID="pvGeneral" runat="server" Style="padding: 10px 0 0 10px; height: 600px">
                    <div id="divAccord">
                        <h3>General Information</h3>
                        <div id="divGeneral" class="div-form">
                            <table class="table-form">
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="lblGraphName" Style="vertical-align: top" CssClass="labeltext" runat="server" Text="Graph Name"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtGraphName" Style="vertical-align: top" CssClass="BtnText" runat="server"></asp:TextBox>
                                        <asp:HiddenField ID="hdnGraphName" runat="server" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="Label3" Style="vertical-align: top" CssClass="labeltext" runat="server" Text="Code"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtTag" Style="vertical-align: top" CssClass="BtnText" runat="server"></asp:TextBox>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="lblDesc" Style="vertical-align: top" CssClass="labeltext" runat="server" Text="Description"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtDesc" TextMode="MultiLine" runat="server"></asp:TextBox>
                                    </td>
                                </tr>

                                <tr id="trResVersion" runat="server">
                                    <td class="td-label">
                                        <asp:Label ID="Label1" runat="server" Text="Resource Version"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <telerik:RadNumericTextBox ID="txtResVersion" runat="server"></telerik:RadNumericTextBox>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="Label2" runat="server" Text="Select Chart"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <asp:DropDownList ID="ddlChartType" runat="server">
                                            <asp:ListItem Value="cc">Column Chart</asp:ListItem>
                                            <asp:ListItem Value="bc">Bar Chart</asp:ListItem>
                                            <asp:ListItem Value="lc">Line Chart</asp:ListItem>
                                            <asp:ListItem Value="ac">Area Chart</asp:ListItem>
                                            <asp:ListItem Value="pc">Pie Chart</asp:ListItem>
                                            <asp:ListItem Value="fc">Funnel Chart</asp:ListItem>
                                        </asp:DropDownList>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="Label4" runat="server" Text="Graph Title"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtGraphTitle" runat="server"></asp:TextBox>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <h3>Axis Information</h3>
                        <div id="div1" class="div-form">
                            <table class="table-form">
                                <tr>
                                    <td class="td-value">
                                        <asp:RadioButton ID="rdoEntity" Checked="true" runat="server" Text="From Entity" GroupName="fromSource" />
                                    </td>
                                    <td class="td-value">
                                        <asp:RadioButton ID="rdoView" runat="server" Text="From View/SP" GroupName="fromSource" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="lblEntity" runat="server" Text="Select Entity"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtEntity" TextMode="MultiLine" Rows="3" Columns="3" Width="450px" CssClass="treetxt" onclick="return ShowTree(this,'tvCtrEnt')" runat="server"></asp:TextBox>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="Label5" runat="server" Text="X-Axis"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtXField" Width="450px" CssClass="treetxt " TextMode="MultiLine" onclick="return ShowTree(this,'tvCtrList')" runat="server"></asp:TextBox>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="Label6" runat="server" Text="Y-Axis"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtYField" Width="450px" runat="server" CssClass="treetxt ychartField" TextMode="MultiLine" onclick="return ShowTree(this,'tvCtrList')"></asp:TextBox>

                                        <asp:DropDownList ID="ddlOperator" Width="50px" runat="server">
                                        </asp:DropDownList>
                                        <asp:CheckBox ID="chkStack" runat="server" Text="Is Stacked" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="Label11" runat="server" Text="Y-Axis ToolTip"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtYTooltip" Width="450px" CssClass="treetxt tooltiptree" TextMode="MultiLine" runat="server"></asp:TextBox>
                                        <div class="divAdvTreeSimple" title="Show Field Tree" style="cursor: pointer;" onclick="return ShowTree(this,'tvCtrList','1')">&#xf0c9;</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="Label12" runat="server" Text="X-Axis Group By"></asp:Label>

                                    </td>
                                    <td class="td-value">
                                        <div id="multiSort_Group" style="width: 450px;"></div>
                                        <br />
                                        <span class="span"><span class="field-icon">&#xf129</span><span class="field-title">You can change order of groups</span></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="Label13" runat="server" Text="Order By"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <div id="multiSort_Order" style="width: 450px;"></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="Label24" runat="server" Text="Attributes"></asp:Label>

                                    </td>
                                    <td class="td-value">
                                        <div id="multiSort_Attr" style="width: 450px;"></div>

                                    </td>
                                </tr>
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="Label14" runat="server" Text="Legend"></asp:Label>
                                    </td>
                                    <td class="td-value">

                                        <asp:DropDownList ID="ddlLegendsPosition" runat="server">
                                            <asp:ListItem Value="none">None</asp:ListItem>
                                            <asp:ListItem Value="bottom">Bottom</asp:ListItem>
                                            <asp:ListItem Value="left">Left</asp:ListItem>
                                            <asp:ListItem Value="right">Right</asp:ListItem>
                                            <asp:ListItem Value="top">Top</asp:ListItem>
                                        </asp:DropDownList>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <h3>Appearance Information</h3>
                        <div id="div2" class="div-form">
                            <table class="table-form">



                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="Label7" runat="server" Text="X-Axis Name"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtXName" runat="server"></asp:TextBox>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="Label8" runat="server" Text="X-Axis Name Position"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <asp:DropDownList ID="ddlXPosition" runat="server">
                                            <asp:ListItem Value="none">None</asp:ListItem>
                                            <asp:ListItem Value="bottom">Bottom</asp:ListItem>
                                            <asp:ListItem Value="center">Center</asp:ListItem>
                                            <asp:ListItem Value="left">Left</asp:ListItem>
                                            <asp:ListItem Value="right">Right</asp:ListItem>
                                            <asp:ListItem Value="top">Top</asp:ListItem>
                                        </asp:DropDownList>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="Label9" runat="server" Text="Y-Axis Name"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtYName" runat="server"></asp:TextBox>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="Label10" runat="server" Text="Y-Axis Name Position"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <asp:DropDownList ID="ddlYPosotion" runat="server">
                                            <asp:ListItem Value="none">None</asp:ListItem>
                                            <asp:ListItem Value="bottom">Bottom</asp:ListItem>
                                            <asp:ListItem Value="center">Center</asp:ListItem>
                                            <asp:ListItem Value="left">Left</asp:ListItem>
                                            <asp:ListItem Value="right">Right</asp:ListItem>
                                            <asp:ListItem Value="top">Top</asp:ListItem>
                                        </asp:DropDownList>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="Label15" runat="server" Text="Height"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtHeight" runat="server" Style="width: 55px"></asp:TextBox>
                                        <asp:Label ID="Label18" runat="server" Text="Px"></asp:Label>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="Label16" runat="server" Text="Width"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtWidth" runat="server" Style="width: 55px"></asp:TextBox>
                                        <asp:Label ID="Label17" runat="server" Text="Px"></asp:Label>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="td-label" colspan="2">
                                        <asp:CheckBox ID="chkIsXAxis" runat="server" Text="X Axis LabelsAppearance" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="Label25" runat="server" Text="Rotation Angle"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtRotationAngle" runat="server" Style="width: 55px"></asp:TextBox>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <h3>Graph Events</h3>
                        <div id="div3" class="div-form">
                            <table class="table-form">

                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="Label19" CssClass="eventlbl" runat="server" Text="  OnLoad"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtOnLoad" CssClass="events" runat="server"></asp:TextBox>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="Label20" CssClass="eventlbl" runat="server" Text="  OnSeriesClicked"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtOnSeriesClicked" CssClass="events" runat="server"></asp:TextBox>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="Label21" CssClass="eventlbl" runat="server" Text="  OnLegendItemHovered"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtOnLegendItemHovered" CssClass="events" runat="server"></asp:TextBox>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="Label23" CssClass="eventlbl" runat="server" Text="  OnLegendItemClicked"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtOnLegendItemClicked" CssClass="events" runat="server"></asp:TextBox>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="Label22" CssClass="eventlbl" runat="server" Text="  OnSeriesHovered"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtOnSeriesHovered" CssClass="events" runat="server"></asp:TextBox>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </telerik:RadPageView>
                <telerik:RadPageView ID="pvRole" runat="server" Style="padding: 10px 0 0 10px; height: 600px">
                    <iframe id="ifrmRole" frameborder="0" style="height: 99%; width: 99%" runat="server"></iframe>
                </telerik:RadPageView>
                <telerik:RadPageView ID="pvScript" runat="server" Height="600px">
                    <iframe id="ifrmScript" tabid="Script" style="height: 99%; width: 99%" runat="server"></iframe>
                    <div id="divScript">
                        <asp:TextBox ID="txtScript" CssClass="txtScript" runat="server" Style="display: none"> </asp:TextBox>
                    </div>
                </telerik:RadPageView>
                <telerik:RadPageView ID="pvFilter" runat="server" Height="600px">
                    <iframe id="ifrmReportFilter" tabid="Filter" style="height: 99%; width: 99%" runat="server"></iframe>
                </telerik:RadPageView>
                <telerik:RadPageView ID="pvCompulsoryFilter" runat="server" Height="600px">
                    <iframe id="ifrmCompulsoryFilter" tabid="CompulsoryFilter" style="height: 99%; width: 99%" runat="server"></iframe>
                </telerik:RadPageView>
            </telerik:RadMultiPage>
            <div class="row" style="margin-left: 20px; margin-top: 3px">
                <input type="button" id="btnSubmit" runat="server" onclick="Save(this)" class="ActionButton GlassButton" value="Save" />
                <input type="button" onclick="closeForm()" class="ActionButton GlassButton" value="Cancel" />
            </div>
            <asp:HiddenField ID="hdnFilter" runat="server" />
            <asp:HiddenField ID="hdnCompulsoryFilter" runat="server" />
        </ContentTemplate>
    </asp:UpdatePanel>
    <script>
        $("#multiSort_Group").multiSelect({ onDropDownShowing: showMultiTree_Group });
        $("#multiSort_Order").multiSelect({ onDropDownShowing: showMultiTree_Order });
        $("#multiSort_Attr").multiSelect({ onDropDownShowing: showMultiTree_Attr });


        $(document).click(function (e) {

            if ($("#tvCtrList").isVisible() && !$(e.srcElement).closest("#tvCtrList").exists() && (!$(e.srcElement).hasClass('treetxt') && !$(e.srcElement).hasClass('divAdvTreeSimple') && $(e.srcElement).closest('div').ID() != "multiSort_Group" && $(e.srcElement).closest('div').ID() != "multiSort_Order" && $(e.srcElement).closest('div').ID() != "multiSort_Attr")) {
                $(document.body).append($("#tvCtrList").hide());
            }
            else if ($("#tvCtrEnt").isVisible() && !$(e.srcElement).closest("#tvCtrEnt").exists() && !$(e.srcElement).hasClass('treetxt')) {
                $(document.body).append($("#tvCtrEnt").hide());
            }
        });
        var callingDiv;
        function showMultiTree_Group() {
            callingDiv = $("#multiSort_Group");
            ShowTree(callingDiv, 'tvCtrList');
        }
        function showMultiTree_Order() {
            callingDiv = $("#multiSort_Order");
            ShowTree(callingDiv, 'tvCtrList');
        }
        function showMultiTree_Attr() {
            callingDiv = $("#multiSort_Attr");
            ShowTree(callingDiv, 'tvCtrList');
        }
        function pageLoad() {

            $("#multiSort_Group").multiSelect().refresh(arrSortData_Group);
            $("#multiSort_Order").multiSelect().refresh(arrSortData_Order);
            $("#multiSort_Attr").multiSelect().refresh(arrSortData_Attr);
            if ($.QS("PageType") == "E" || $.QS("PageType") == "V") {
                LoadEntityTree()

            }
        }

        function Save(btn) {

            var data = new Object();
            data["Type"] = "SaveGraphItem";
            data["@LayoutId"] = $.QS("ID");
            data["@LayoutName"] = $('#<%= txtGraphName.ClientID %>').val();
            data["@Tag"] = $('#<%= txtTag.ClientID %>').val();
            data["@LayoutType"] = 'Chart';
            data["@IsActive"] = 1;
            data["@SystemDefined"] = 1;
            data["@Description"] = $('#<%= txtDesc.ClientID %>').val();
            data["@ResourceVersion"] = $.defaultVal($('#<%= txtResVersion.ClientID %>').val(), 0);

            data["@LayoutData"] = GetGraphXml();

            var arrRoles = [];
            arrRoles = [];//
            var arr = $("#<%= ifrmRole.ClientID%>")[0].contentWindow.GetRoles()
            for (var i = 0; i < arr.length; i++) arrRoles.push(arr[i]);
            var Permission = [];
            var arrPermission = $("#<%= ifrmRole.ClientID%>")[0].contentWindow.GetPermission();
            for (var i = 0; i < arrPermission.length; i++) Permission.push(arrPermission[i]);


            data["arrPermission"] = Permission;
            data["arrRoles"] = arrRoles;
            $.Notify("Saving...");
            PageMethods.Execute(data, arrRoles, Permission, function (result) { $.Notify(false); OnExecuteSuccess(result); }, function (d) { $.Notify({ Message: "Error Occured.", NotifyOnly: true }); });
            layoutId = data["@LayoutId"];
            return false;
        }

        function OnExecuteSuccess(result) {
            //{ ViewID: "10", Type: "TBL_EMPLOYEEQUALIFICATION", ViewName: "Qualification new", Cols: [{ Title: "Qualification new", EntityPath: "", Name: "7", Width: 250 }, { Title: "Description new", EntityPath: "", Name: "8", Width: 200 }, { Title: "Period", EntityPath: "", Name: "9", Width: 150 }] };
            if (result.Success == "Success") {
                //RefreshParent(true);
            }
            else
                alert(result.ErrorMessage);
        }
        function OnClientTabSelected1(sender, args) {
            var tab = args.get_tab();
            var value = tab.get_value();
            if (value.toLowerCase() == "roles")
                $("#<%= ifrmRole.ClientID%>")[0].contentWindow.showDiv('Role');

            else if (value.toLowerCase() == "permission")
                $("#<%= ifrmRole.ClientID%>")[0].contentWindow.showDiv('Permission');

    }




    function LoadEntityTree() {
        var tree = $find("<%= rtvList.ClientID %>");
        tree.get_nodes().clear();
        tree.trackChanges();
        var node = new Telerik.Web.UI.RadTreeNode();
        node.set_text($("#<%=txtEntity.ClientID %>").val());
        node.set_value($("#<%=txtEntity.ClientID %>").attr('fieldid'));
        node.get_attributes().setAttribute("ParentTable", $("#<%=txtEntity.ClientID %>").attr('fieldid'));
        node.set_expandMode(3);
        tree.get_nodes().add(node);
        tree.commitChanges();

        OpenRecordFilter(true);

    }

    function tvItems_NodePopulate(sender, args) {
        var node = args.get_node();
        var context = args.get_context();

        context["EntityID"] = node.get_attributes().getAttribute("ParentTable");
    }

    function fieldClick(sender, args) {


        var node = args.get_node();

        if (node.get_level() == 0)
            return;

        var n = node;
        var f = "";
        while (n.get_level() > 0) {
            f = $.defaultVal(n.get_value(), "") + "." + f;
            if (n.get_level() == 0)
                break;
            else
                n = n.get_parent();
        }
        f = f.Trim('.');
        f = "[Field." + f + "]";
        if (callingDiv.ID().indexOf("_Group") > 0)
            $("#multiSort_Group").multiSelect().addItem({ Text: f, FID: f });
        else if (callingDiv.ID().indexOf("_Order") > 0)
            $("#multiSort_Order").multiSelect().addItem({ Text: f, FID: f });
        else if (callingDiv.ID().indexOf("_Attr") > 0)
            $("#multiSort_Attr").multiSelect().addItem({ Text: f, FID: f });
        else if (callingDiv.hasClass("ychartField")) {
            var yValue = callingDiv.val();
            if ($.isEmpty(yValue))
                callingDiv.val(f);
            else
                callingDiv.val(callingDiv.val() + ',' + f);
        }
        else {
            callingDiv.val(callingDiv.val() + f);
        }

    }

    var entityName; var entityId; var crntTxt;
    function selectEntity(sender, args) {
        var t = $("#<%=txtEntity.ClientID %>");
        var n = args.get_node();

        if (n.get_level() < 2)
            return;
        entityId = n.get_value();
        entityName = n.get_text();
        t.val(entityName);
        t.attr('fieldid', entityId);

        LoadEntityTree();
        $("#<%= hdnFilter.ClientID %>").val('');
        $("#<%= hdnCompulsoryFilter.ClientID %>").val('');
        $("#<%=txtXField.ClientID %>").val('');
        $("#<%=txtYField.ClientID %>").val('');
        $("#<%=txtXField.ClientID %>").attr('fieldid', '');
        $("#<%=txtYField.ClientID %>").attr('fieldid', '');
        $("#tvCtrEnt").hide();
    }


    function ShowTree(cntrl, treeid, fromTooltip) {
        var rdoEntity = $("#<%= rdoEntity.ClientID %>");
        var rdoView = $("#<%= rdoView.ClientID %>");
        if (rdoView.checked())
            return;

        fromToolTip = $.defaultVal(fromTooltip, '0');
        if (fromTooltip == "1")
            cntrl = $(cntrl).prev();

        cntrl = $(cntrl);
        crntTxt = cntrl;
        callingDiv = cntrl;
        $("#" + treeid).show().position({
            of: cntrl,
            my: "left top",
            at: "left bottom",
            collision: "none none"
        });

        if (treeid == "tvCtrEnt")
            $("#tvCtrList").hide();
        else if (treeid == "tvCtrList")
            $("#tvCtrEnt").hide();
        return false;
    }

    function GetGroupFieldXml() {
        var group = "<Groups>";
        var sortData = $("#multiSort_Group").multiSelect().getItems();
        for (var l = 0; l < sortData.length; l++) {
            var sortItem = $(sortData[l]);
            var fid = $.encodeXml($.defaultVal(sortItem.data("FID"), ""), true);
            group += " <Cols Name=\"" + fid + "\" />";
        }

        return group + "</Groups>";
    }
    function GetOrderFieldXml() {
        var Orders = "<Orders>";
        var sortData = $("#multiSort_Order").multiSelect().getItems();
        for (var l = 0; l < sortData.length; l++) {
            var sortItem = $(sortData[l]);
            var fid = $.encodeXml($.defaultVal(sortItem.data("FID"), ""), true);
            Orders += " <Cols Name=\"" + fid + "\" />";
        }

        return Orders + "</Orders>";
    }
    function GetAttrFieldXml() {
        var Orders = "<XAttr>";
        var sortData = $("#multiSort_Attr").multiSelect().getItems();
        for (var l = 0; l < sortData.length; l++) {
            var sortItem = $(sortData[l]);
            var fid = $.encodeXml($.defaultVal(sortItem.data("FID"), ""), true);
            Orders += " <Cols Name=\"" + fid + "\" />";
        }

        return Orders + "</XAttr>";
    }
    function GetGraphXml() {
        var rdoEntity = $("#<%= rdoEntity.ClientID %>");
        var rdoView = $("#<%= rdoView.ClientID %>");
        var chkStacked = $("#<%= chkStack.ClientID %>");
        var chartSource = "Entity";
        if (rdoView.checked())
            chartSource = "View";

        var isstacked = "";
        if (chkStacked.checked())
            isstacked = "Stacked";

        var xml = "<Layout>";

        var entID = $.encodeXml($.defaultVal($("#<%=txtEntity.ClientID %>").attr('fieldid'), ''), true);
        if (chartSource == "View")
            entID = $.encodeXml($.defaultVal($("#<%=txtEntity.ClientID %>").val(), ''), true);

        xml += "<Chart Id=\"" + entID + "\" ChartSource=\"" + $.encodeXml(chartSource, true) + "\" Stacked=\"" + $.encodeXml(isstacked, true) + "\" ChartType=\"" + $.encodeXml($.defaultVal($("#<%=ddlChartType.ClientID %>").val(), ''), true) + "\"  ChartTitle=\"" + $.encodeXml($.defaultVal($("#<%=txtGraphTitle.ClientID %>").val(), ''), true) + "\" Height=\"" + $.encodeXml($.defaultVal($("#<%=txtHeight.ClientID %>").val(), ''), true) + "\" Width=\"" + $.encodeXml($.defaultVal($("#<%=txtWidth.ClientID %>").val(), ''), true) + "\"  OnLoad=\"" + $.encodeXml($.defaultVal($("#<%=txtOnLoad.ClientID %>").val(), ''), true) + "\"  OnSeriesClicked=\"" + $.encodeXml($.defaultVal($("#<%=txtOnSeriesClicked.ClientID %>").val(), ''), true) + "\"  OnLegendItemHovered=\"" + $.encodeXml($.defaultVal($("#<%=txtOnLegendItemHovered.ClientID %>").val(), ''), true) + "\"  OnLegendItemClicked=\"" + $.encodeXml($.defaultVal($("#<%=txtOnLegendItemClicked.ClientID %>").val(), ''), true) + "\"  OnSeriesHovered=\"" + $.encodeXml($.defaultVal($("#<%=txtOnSeriesHovered.ClientID %>").val(), ''), true) + "\">";

        xml += "<XAxis Field=\"" + $.encodeXml($.defaultVal($("#<%=txtXField.ClientID %>").val(), ''), true) + "\" Label=\"" + $.encodeXml($.defaultVal($("#<%=txtXName.ClientID %>").val(), ''), true) + "\" /> ";

        xml += "<YAxis Field=\"" + $.encodeXml($.defaultVal($("#<%=txtYField.ClientID %>").val(), ''), true) + "\" Operator=\"" + $.encodeXml($.defaultVal($("#<%=ddlOperator.ClientID %>").val(), ''), true) + "\" Label=\"" + $.encodeXml($.defaultVal($("#<%=txtYName.ClientID %>").val(), ''), true) + "\" ToolTip=\"" + $.encodeXml($.defaultVal($("#<%=txtYTooltip.ClientID %>").val(), ''), true) + "\"/> ";

        xml += GetGroupFieldXml();

        xml += GetOrderFieldXml();

        xml += GetAttrFieldXml();

        xml += "<Appearance>";
        xml += "<XAxis Position=\"" + $.encodeXml($.defaultVal($("#<%=ddlXPosition.ClientID %>").val(), ''), true) + "\" IsXAxis=\"" + $.encodeXml($.defaultVal($("#<%=chkIsXAxis.ClientID %>").checked(), ''), true) + "\"  Angel=\"" + $.encodeXml($.defaultVal($("#<%=txtRotationAngle.ClientID %>").val(), ''), true) + "\"/>";
        xml += "<YAxis Position=\"" + $.encodeXml($.defaultVal($("#<%=ddlYPosotion.ClientID %>").val(), ''), true) + "\" />";
        xml += "<Legends Position=\"" + $.encodeXml($.defaultVal($("#<%=ddlLegendsPosition.ClientID %>").val(), ''), true) + "\" />";
        xml += "</Appearance>";

        xml += "</Chart>";

        xml += GetFilterXml();
        xml += getscriptxml();


        xml += "</Layout>";
        return xml;
    }


    function getVarXml() {
        VariablesList = $('#<%= ifrmScript.ClientID %>')[0].contentWindow.VariablesList;
        if ($.isEmpty(VariablesList))
            return "";
        else
            return $('#<%= ifrmScript.ClientID %>')[0].contentWindow.GetVarXml(VariablesList);
    }



    function GetFilterXml() {
        var iframe = $("#<%= ifrmReportFilter.ClientID %>")[0];
        var filter = "", compulFilter = "";
        if (iframe && iframe.contentWindow && typeof iframe.contentWindow.createXml == "function")
            filter = iframe.contentWindow.createXml(null, "");
        else
            filter = $("#<%= hdnFilter.ClientID %>").val();

    iframe = $("#<%= ifrmCompulsoryFilter.ClientID %>")[0];
        if (iframe.contentWindow && typeof iframe.contentWindow.createXml == "function")
            compulFilter = iframe.contentWindow.createXml(null, "");
        else
            compulFilter = $("#<%= hdnCompulsoryFilter.ClientID %>").val();
        var xml = filter;
        xml += "<CompulsoryFilter>" + compulFilter + "</CompulsoryFilter>";
        return xml;
    }




    //filter and compulsory filter
        function OpenRecordFilter(forceFilter) {

            if ($.isEmpty($('#<%= ifrmReportFilter.ClientID %>').attr('src')) || forceFilter) {
                $('#<%= ifrmScript.ClientID %>').attr('src', "../Meta/ExprEditor.aspx?p=1&eid=" + $.defaultVal($('#<%= txtEntity.ClientID %>').attr('fieldid'), ''));
               
                var data = new Object();
                data["PageType"] = $.QS("PageType");
                data["EID"] = $.defaultVal($('#<%= txtEntity.ClientID %>').attr('fieldid'), '');
                data["SID"] = sid;
                data["xml"] = $("#<%= hdnFilter.ClientID %>").val();
                callingFilter = "MainFilter";
                PageMethods.SetFilterSession(data, function () {
                    var url = "../Meta/Filters_Add.aspx?PageMode=Setting&SID=" + sid + "&Hidebutton=1&ShowFilterBtn=1&ReturnXml=1";
                    $('#<%= ifrmReportFilter.ClientID %>').attr('src', url);
                });



              
                var data = new Object();
                data["PageType"] = $.QS("PageType");
                data["EID"] = $.defaultVal($('#<%= txtEntity.ClientID %>').attr('fieldid'), '');;
                data["SID"] = complFilterId;
                data["xml"] = $("#<%= hdnCompulsoryFilter.ClientID %>").val();
                PageMethods.SetFilterSession(data, function () {
                    url = "../Meta/Filters_Add.aspx?PageMode=Settings&SID=" + complFilterId + "&Hidebutton=1&ShowFilterBtn=1&ReturnXml=1";
                    $('#<%= ifrmCompulsoryFilter.ClientID %>').attr('src', url);
                });
                callingFilter = "CompulsoryFilter";
               
            }
            return false;
        }


        function getscriptxml() {
            var script = "<Script><Variables>" + getVarXml() + "</Variables><Body>";
            if ($('#<%= ifrmScript.ClientID %>')[0].contentWindow.scriptEditor != undefined) {
                script += $.encodeXml($('#<%= ifrmScript.ClientID %>')[0].contentWindow.scriptEditor.getValue());
            }
            script += "</Body>";
            return script + "</Script" + ">";
        }

    </script>
</asp:Content>


