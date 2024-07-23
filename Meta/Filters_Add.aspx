<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/Default.Master" CodeBehind="Filters_Add.aspx.cs" Inherits="SensysErp.Meta.Filters_Add" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">

        //window.title="title"
        document.documentElement.style.overflowX = "hidden"
        //document.documentElement.style.overflowY = "hidden"
        var dbCols = [];
        var dbParameters = [];
        var strData = [];
        var cntr1 = 0;
        var i18No = "";
        var Logic = "";
        var dispname = "";
        var entitypath = "";
        var fieldCheck = "";
        var srnoCheck = "";
        var paramCheck = "";
        var EID = "";
        var ArrSortData = [];
        var WFVariablesList = [];
        $(function () {
            $("#tbl").sortable();
        });
        var clientMode = false;
    </script>
    <script>
        $(function () {
            clientMode = (window.parent.location.href.toLowerCase().indexOf("report_viewer.aspx") > -1 || window.parent.parent.location.href.toLowerCase().indexOf("report_viewer.aspx") > -1);

            if (clientMode) {
                if (window.parent.location.href.toLowerCase().indexOf("filters_add.aspx") > -1)
                    $("#btnParams").hide();
                else
                    $("#btnParams,#orderBy,#divLimit").hide();
            }
            $(".fields,.value,.query,.targetfields").tooltip({
                content: function () {
                    return $(this).prop('title');
                },
                position: {
                    my: "left bottom",
                    at: "left top",
                    using: function (position, feedback) {
                        $(this).css(position);
                    }
                }
            });
        });
    </script>
    <style>
        .document:before
        {
            content: "\f15c";
            font-family: fontawesome;
            margin-right: 3px;
        } 
        .document:hover
        {
            color:red;
        }
        .orderLink
        {
            margin-left: 8px;
            color: #3D3636;
        }

            .orderLink:hover
            {
                color: red;
            }

        #divSearchListCtr
        {
            position: absolute;
            z-index: 99999;
            height: 450px;
            width: 450px;
            border: solid 8px #E7E7E7;
            border-radius: 8px;
            color: #000;
            box-shadow: 2px 2px 8px #000;
        }
        #spnSubQryTitle
        {
            display:none;
        }
        .subqueryctr
        {
            background-color: #f7f7f7;
            border: solid 1px #afafaf;
            margin: 3px;
        }
            .subqueryctr #spnSubQryTitle
            {
                display: block;
                color: red;
                margin: 5px 0 10px 6px;
            }
    </style>
    <meta name="viewport" content="width=device-width, user-scalable=yes">
    
<%# HelperLib.Web.WebResources.GetResource("~/Css/bluegloss/jquery-ui-1.10.3.custom.css")%>
<%# HelperLib.Web.WebResources.GetResource("~/css/layout_grid.css")%>
 <%# HelperLib.Web.WebResources.GetResource("~/Scripts/knockout-2.2.1.js")%>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
  
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <span id="spnSubQryTitle" class="mainHeading">Apply subquery conditions</span>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
            <div id="divTitle" runat="server" class="titleBar">
                <asp:Label runat="server" ToolTip="Click to rename" ID="lblTitle" onclick="$(this).hide().next().show().css({'min-width':$(this).outerWidth()+75,width:'250px'}).focus().val($(this).html())" class="title"></asp:Label>
                <input type="text" style="display: none" onblur="$(this).hide().prev().show().html($(this).val());$('#ContentPlaceHolder1_hdnReportName').val($(this).val())" class="title" />
            </div>
            <div id="generalSettings" runat="server" style="width: 100%" class="toolbar">
                <div onclick="showFilterDiv('Save')" id="lbnSave" runat="server" class="toolBtn save">
                    <span>Save</span>
                </div>
                <div onclick="showFilterDiv('SaveAs')" id="lbnSaveAs" runat="server"
                    class="toolBtn saveas">
                    <span>Save As</span>
                </div>
                <div onclick="showFilterDiv('Prop')"
                    class="toolBtn property">
                    <span>Properties</span>
                </div>
                <div
                    class="toolBtn CloseWin">
                    <span>Close</span>
                </div>

            </div>
            <div id="divMainCtr" style="padding: 10px 10px 10px 10px">
                <div id="divPrValue">
                    <div id="DivListTree">
                        <telerik:RadTreeView ID="rtvList" OnClientNodeClicked="SetValueRecords" Style="height: 100% !important; width: 100% !important;" runat="server">
                            <WebServiceSettings Path="Filters_Add.aspx" Method="GetListNodes"></WebServiceSettings>

                            <Nodes>
                                <telerik:RadTreeNode Text="True" IsParent="0" Value="true" Parent="checkbox"></telerik:RadTreeNode>
                                <telerik:RadTreeNode Text="False" IsParent="0" Value="false" Parent="checkbox"></telerik:RadTreeNode>
                                <telerik:RadTreeNode Text="Enter Value" IsParent="0" Value="Input"></telerik:RadTreeNode>
                                <telerik:RadTreeNode Text="Parameters" IsParent="1" Value="Parameters" Parent="parameter"></telerik:RadTreeNode>
                                <telerik:RadTreeNode Text="Expand To Show Values" IsParent="1" IsSessionEntity="0" SessionEntity="" ExpandMode="WebService" Value="Values" Parent="values"></telerik:RadTreeNode>
                                <telerik:RadTreeNode Visible="false" IsParent="1" Text="Expand To Show Fields" IsSessionEntity="0" SessionEntity="" ExpandMode="WebService" Parent="Fields" Value="Fields"></telerik:RadTreeNode>
                                <telerik:RadTreeNode Text="Sub Query" IsParent="0" Value="subquery" Parent="subquery"></telerik:RadTreeNode>
                                <telerik:RadTreeNode Text="Remove Sub Query" IsParent="0" Value="removesubquery" Parent="removesubquery"></telerik:RadTreeNode>
                                <telerik:RadTreeNode Text="Logged In User Info" IsParent="1" Value="tbl_SYS_Users" ExpandMode="WebService" IsSessionEntity="0" SessionEntity="" ParentTable="tbl_SYS_Users" CssClass="tbltree" Parent="UserSession"></telerik:RadTreeNode>
                                <telerik:RadTreeNode Text="Logged in Company Info" IsParent="1" Value="tbl_CORE_Company" ExpandMode="WebService" IsSessionEntity="0" SessionEntity="" ParentTable="tbl_CORE_Company" CssClass="tbltree" Parent="CompanySession"></telerik:RadTreeNode>
                                <telerik:RadTreeNode Visible="false" Text="Parent" IsParent="1" Value="" ExpandMode="WebService" IsSessionEntity="0" SessionEntity="" ParentTable="" CssClass="tbltree" Parent="Parent"></telerik:RadTreeNode>
                                <telerik:RadTreeNode Text="Prev Decision Taker" IsParent="1" Value="tbl_SYS_Users" ParentTable="tbl_SYS_Users" IsSessionEntity="0" SessionEntity="" CssClass="tbltree" Parent="DecisionUser"></telerik:RadTreeNode>
                                <telerik:RadTreeNode Text="Current WF Entity" IsParent="1" Value="WFEntity" IsSessionEntity="0" SessionEntity="" ExpandMode="WebService" ParentTable="WFEntity" CssClass="tbltree" Parent="WFEntity"></telerik:RadTreeNode>
                                <telerik:RadTreeNode Text="Variables" IsParent="1" Value="Variable" Parent="Variable"></telerik:RadTreeNode>
                                <telerik:RadTreeNode Text="Session Entities" IsParent="1" Value="Session" ParentTable="Session" CssClass="tbltree" Parent="Session"></telerik:RadTreeNode>
                            </Nodes>
                        </telerik:RadTreeView>
                    </div>
                </div>
                <div id="divParameter" style="padding: 10px" class="Parameters">
                    <table cellpadding="0">
                        <thead style="color: gray; font-size: 14px; font-family: nunitolight;">
                            <tr>
                                <th style="font-weight: normal;" colspan="2">Parameter Key</th>
                            </tr>
                            <tr>
                                <th colspan="2" style="white-space: nowrap; padding-bottom: 12px">
                                    <asp:TextBox ID="txtPramsName" Style="width: 218px" runat="server" CssClass="ParamKey"></asp:TextBox>
                                    <asp:Button ID="btnAdd" CssClass="btnAddClass" Text="&#xf055;" runat="server" OnClientClick="return addParameter()" />
                                </th>
                            </tr>
                        </thead>
                        <tbody id="tblParameter" class="pr" data-bind="foreach: parameter, visible: parameter().length > 0">
                            <tr>
                                <td>
                                    <asp:TextBox ID="txtParamKey" CssClass="ParamKey" ToolTip="Parameter Key" runat="server" data-bind="value:paramkey,enable:((paramkey != 'ParentID') && (paramkey != 'ID'))"></asp:TextBox>
                                </td>
                                <td>
                                    <div class="close" title="Delete" data-bind="visible: ((paramkey != 'ParentID') && (paramkey != 'ID')), click: $parent.removeParameter">X</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="divReport" runat="server" class="layout">
                    <div class="formSettings" style="display: none; width: 650px" id="divViewDetails">
                        <telerik:RadTabStrip ID="tabRightsInfo" runat="server" MultiPageID="RadMultiPageRights"
                            OnClientTabSelected="OnClientTabSelected" Width="100%" Height="98%"
                            SelectedIndex="0">
                            <Tabs>
                                <telerik:RadTab Text="General" PageViewID="pvGeneral" Value="General">
                                </telerik:RadTab>
                                <telerik:RadTab Text="Role" PageViewID="pvRole" Value="Roles">
                                </telerik:RadTab>
                                <telerik:RadTab Text="Permission" PageViewID="pvRole" Value="Permission">
                                </telerik:RadTab>

                            </Tabs>
                        </telerik:RadTabStrip>
                        <telerik:RadMultiPage ID="RadMultiPageRights" runat="server" SelectedIndex="0"
                            Style="border: solid 1px #898C95 !important; margin-left: -1px !important; width: 100% !important;">
                            <telerik:RadPageView ID="pvGeneral" Style="padding: 10px 0 0 10px" runat="server" Height="410px">
                                <div class="div-form">
                                    <table class="table-form">
                                        <tr>
                                            <td class="td-label">
                                                <asp:Label ID="lblViewName" Style="vertical-align: top" CssClass="labeltext" runat="server" Text="Filter Name"></asp:Label>
                                            </td>
                                            <td class="td-value">
                                                <asp:TextBox ID="txtViewName" Style="vertical-align: top" CssClass="DisplayName1 BtnText" runat="server"></asp:TextBox>
                                                <asp:HiddenField ID="hdnReportName" runat="server" />
                                            </td>
                                        </tr>

                                         <tr>
                                        <td class="td-label">
                                            <asp:Label ID="Label1" Style="vertical-align: top" CssClass="labeltext" runat="server" Text="Code"></asp:Label>
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
                                                <asp:HiddenField ID="hdnDesc" runat="server" />
                                            </td>
                                        </tr>
                                         <tr >
                        <td></td>
                        <td class="td-value">
                            <asp:LinkButton ID="lnkDocument" CssClass="document" runat="server" OnClientClick="return ShowDocument();" Text="Documentation"></asp:LinkButton>
                        </td>
                    </tr>
                                        <tr>
                                            <td colspan="2" id="dndWF" runat="server" class="td-value">
                                                <span>Do Not Show In Grid Filter</span>
                                                <asp:CheckBox ID="chkHidden" data-chk-on="yes" data-chk-off="no" runat="server" />
                                            </td>
                                        </tr>
                                        <tr id="trResVersion" runat="server">
                                            <td class="td-label">
                                                <asp:Label ID="Label3" runat="server" Text="Resource Version"></asp:Label>
                                            </td>
                                            <td class="td-value">
                                                <telerik:RadNumericTextBox ID="txtResVersion" runat="server"></telerik:RadNumericTextBox>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </telerik:RadPageView>
                            <telerik:RadPageView ID="pvRole" runat="server" Height="410px">
                                <iframe id="ifrmRole" frameborder="0" style="height: 99%; width: 99%" runat="server"></iframe>
                            </telerik:RadPageView>

                        </telerik:RadMultiPage>
                        <div class="row" style="text-align: right">
                            <a href="javascript:void(0)" onclick="createXml(this, 'main')" id="btnSave"  runat="server" class="mdl-button GreenButton tickIcon"  >Save</a>
                            <a href="javascript:void(0)" onclick="$('#divViewDetails').HideModal();" class="mdl-button RedButton closeIcon"  >Cancel</a>
                        </div>
                    </div>
                    <div id="divDdl" runat="server">
                        <div>
                            <asp:Label ID="lblTblName" runat="server" Text="Entity"></asp:Label>
                            <asp:DropDownList ID="ddlTable" onchange="LoadFieldsOfSelectedTable(this)" Style="font-style: italic;    width: 300px;    border: 1px solid #ebe7e7;    height: 24px;    font-size: 13px;    margin-left: 31px;" runat="server"></asp:DropDownList>
                            <asp:Label ID="lblSummTar" style="margin-left: 6px;" runat="server" Text="Summary"></asp:Label>
                            <asp:DropDownList runat="server" style="font-style: italic;    border: 1px solid #ebe7e7;    height: 24px;    font-size: 13px;    margin-left: 10px;" ID="ddlSummary">
                            </asp:DropDownList>

                            <asp:CheckBox ID="chkMultiple" runat="server" onchange="enableTargetField(this)" />
                            <asp:Label ID="lblMultiple" runat="server" Text="Allow multiple target fields"></asp:Label>
                        </div>
                        <div style="margin-top:5px;margin-bottom: 5px;">
                            <asp:Label ID="lblTargetField" runat="server" style="vertical-align: top;line-height: 24px;" Text="Target Field"></asp:Label>
                            <asp:DropDownList runat="server" Visible="false" ID="ddlTargetField">
                            </asp:DropDownList>
                            <asp:TextBox ID="txtTargetField" ReadOnly="true" Style="vertical-align: top;display: inline-block;font-style: italic;width: 300px;border: 1px solid #ebe7e7;height: 20px;font-size: 13px;" onfocus=" ShowFilterTree(this,'TargetFields')" class="targetfields" runat="server"></asp:TextBox>
                            <asp:TextBox ID="txtTargetFieldMultiple" Style="width: 465px;    height: 40px;    display: inline-block;    border: 1px solid #ebe7e7;" TextMode="MultiLine" onfocus=" ShowFilterTree(this,'TargetFields')" class="targetfieldsmultiple" runat="server"></asp:TextBox>
                        </div>

                    </div>
                    <div id="divTab" style="padding-top: 4px;">
                        <div class="firsttree" style="display: none">
                            <telerik:RadTreeView ID="tvRelated" CssClass="tree" OnClientNodeClicked="TreeChanged" runat="server">
                                <WebServiceSettings Path="Filters_Add.aspx" Method="GetNodes"></WebServiceSettings>
                                <Nodes>
                                </Nodes>
                            </telerik:RadTreeView>
                        </div>
                        <div id="common"></div>
                        <asp:DropDownList ID="ddlFilters" onchange="FilterDDlChanged(this,'Filter')" CssClass="Filter" Style="font-style: italic; display: none; width: 200px; border: 1px solid #EBE7E7; height: 24px; font-size: 13px;" runat="server">

                            <asp:ListItem Text="" Value="0" Selected="True"></asp:ListItem>

                            <asp:ListItem Text="EqualTo" primarykey isrepeat="0" number string date checkbox txtEnable="1" Value="EqualTo"></asp:ListItem>
                            <asp:ListItem Text="NotEqualTo" primarykey isrepeat="0" number string date checkbox txtEnable="1" Value="NotEqualTo"></asp:ListItem>
                            <asp:ListItem Text="In" primarykey number  isrepeat="0" string date txtEnable="1" Value="In"></asp:ListItem>
                            <asp:ListItem Text="Not In" primarykey number string date isrepeat="0"  txtEnable="1" Value="NotIn"></asp:ListItem>
                            <asp:ListItem Text="Contains" string date txtEnable="1" isrepeat="0"  Value="Contains"></asp:ListItem>
                            <asp:ListItem Text="DoesNotContain" string date txtEnable="1" isrepeat="0"  Value="DoesNotContain"></asp:ListItem>
                            <asp:ListItem Text="StartsWith" string date txtEnable="1" Value="StartsWith" isrepeat="0" ></asp:ListItem>
                            <asp:ListItem Text="EndsWith"  isrepeat="0" string date txtEnable="1" Value="EndsWith"></asp:ListItem>
                            
                            <asp:ListItem Text="GreaterThan" number string date txtEnable="1" isrepeat="0"  Value="GreaterThan"></asp:ListItem>
                            <asp:ListItem Text="GreaterThanOrEqualTo" number string date txtEnable="1" isrepeat="0"  Value="GreaterThanOrEqualTo"></asp:ListItem>
                            <asp:ListItem Text="LessThan" number string date txtEnable="1"  isrepeat="0" Value="LessThan"></asp:ListItem>
                            <asp:ListItem Text="LessThanOrEqualTo" number string date txtEnable="1" isrepeat="0"  Value="LessThanOrEqualTo"></asp:ListItem>

                            <asp:ListItem Text="IsNull" primarykey checkbox number string image date isrepeat="0"  Value="IsNull" txtEnable="0"></asp:ListItem>
                            <asp:ListItem Text="NotIsNull" primarykey checkbox number string image date  isrepeat="0" txtEnable="0" Value="NotIsNull"></asp:ListItem>
                            <asp:ListItem Text="IsEmpty" string date  isrepeat="0" txtEnable="0" Value="IsEmpty"></asp:ListItem>
                            <asp:ListItem Text="NotIsEmpty" string date txtEnable="0" isrepeat="0"  Value="NotIsEmpty"></asp:ListItem>
                            <asp:ListItem Text="IsNullOrEmpty" primarykey checkbox number string image date isrepeat="0"  Value="IsNullOrEmpty" txtEnable="0"></asp:ListItem>
                            <asp:ListItem Text="NotIsNullOrEmpty" primarykey checkbox number string image date  isrepeat="0" txtEnable="0" Value="NotIsNullOrEmpty"></asp:ListItem>

                            <asp:ListItem Text="TODAY" date txtEnable="0" Value="TODAY" isrepeat="1" ></asp:ListItem>
                            <asp:ListItem Text="TOMORROW" date txtEnable="0" Value="TOMORROW" isrepeat="1" ></asp:ListItem>
                            <asp:ListItem Text="YESTERDAY" date txtEnable="0" Value="YESTERDAY" isrepeat="1" ></asp:ListItem>
                            <asp:ListItem Text="NEXT?DAYS" date txtEnable="1" Value="NEXT?DAYS" isrepeat="1" ></asp:ListItem>
                            <asp:ListItem Text="LAST?DAYS" date txtEnable="1" Value="LAST?DAYS" isrepeat="1" ></asp:ListItem>
                            <asp:ListItem Text="NEWERTHAN?DAYS" date txtEnable="1" Value="NEWERTHAN?DAYS" isrepeat="0" ></asp:ListItem>
                            <asp:ListItem Text="OLDERTHAN?DAYS" date txtEnable="1" Value="OLDERTHAN?DAYS" isrepeat="0" ></asp:ListItem>

                            <asp:ListItem Text="THISWEEK" date txtEnable="0" Value="THISWEEK" isrepeat="1" ></asp:ListItem>
                            <asp:ListItem Text="NEXTWEEK" date txtEnable="0" Value="NEXTWEEK" isrepeat="1" ></asp:ListItem>
                            <asp:ListItem Text="LASTWEEK" date txtEnable="0" Value="LASTWEEK" isrepeat="1" ></asp:ListItem>
                            <asp:ListItem Text="NEXT?WEEKS" date txtEnable="1" Value="NEXT?WEEKS"  isrepeat="1" ></asp:ListItem>
                            <asp:ListItem Text="LAST?WEEKS" date txtEnable="1" Value="LAST?WEEKS" isrepeat="1" ></asp:ListItem>
                            <asp:ListItem Text="NEWERTHAN?WEEKS" date txtEnable="1" Value="NEWERTHAN?WEEKS" isrepeat="0" ></asp:ListItem>
                            <asp:ListItem Text="OLDERTHAN?WEEKS" date txtEnable="1" Value="OLDERTHAN?WEEKS" isrepeat="0" ></asp:ListItem>

                            <asp:ListItem Text="THISMONTH" date txtEnable="0" Value="THISMONTH" isrepeat="1" ></asp:ListItem>
                            <asp:ListItem Text="NEXTMONTH" date txtEnable="0" Value="NEXTMONTH" isrepeat="1" ></asp:ListItem>
                            <asp:ListItem Text="LASTMONTH" date txtEnable="0" Value="LASTMONTH" isrepeat="1" ></asp:ListItem>
                            <asp:ListItem Text="NEXT?MONTHS" date txtEnable="1" Value="NEXT?MONTHS" isrepeat="1" ></asp:ListItem>
                            <asp:ListItem Text="LAST?MONTHS" date txtEnable="1" Value="LAST?MONTHS" isrepeat="1" ></asp:ListItem>
                            <asp:ListItem Text="NEWERTHAN?MONTHS" date txtEnable="1" Value="NEWERTHAN?MONTHS" isrepeat="0" ></asp:ListItem>
                            <asp:ListItem Text="OLDERTHAN?MONTHS" date txtEnable="1" Value="OLDERTHAN?MONTHS"  isrepeat="0" ></asp:ListItem>


                            <asp:ListItem Text="THISYEAR" date txtEnable="0" Value="THISYEAR"  isrepeat="0" ></asp:ListItem>
                            <asp:ListItem Text="NEXTYEAR" date txtEnable="0" Value="NEXTYEAR" isrepeat="0" ></asp:ListItem>
                            <asp:ListItem Text="LASTYEAR" date txtEnable="0" Value="LASTYEAR" isrepeat="0" ></asp:ListItem>
                            <asp:ListItem Text="NEXT?YEARS" date txtEnable="1" Value="NEXT?YEARS" isrepeat="0" ></asp:ListItem>
                            <asp:ListItem Text="LAST?YEARS" date txtEnable="1" Value="LAST?YEARS" isrepeat="0" ></asp:ListItem>
                            <asp:ListItem Text="NEWERTHAN?YEARS" date txtEnable="1" Value="NEWERTHAN?YEARS" isrepeat="0" ></asp:ListItem>
                            <asp:ListItem Text="OLDERTHAN?YEARS" date txtEnable="1" Value="OLDERTHAN?YEARS" isrepeat="0" ></asp:ListItem>

                            <asp:ListItem Text="THISHOUR" date txtEnable="0" Value="THISHOUR" isrepeat="0" ></asp:ListItem>
                            <asp:ListItem Text="NEXTHOUR" date txtEnable="0" Value="NEXTHOUR" isrepeat="0" ></asp:ListItem>
                            <asp:ListItem Text="LASTHOUR" date txtEnable="0" Value="LASTHOUR" isrepeat="0" ></asp:ListItem>

                            <asp:ListItem Text="NEXT?MINUTES" date txtEnable="1" Value="NEXT?MINUTES" isrepeat="0" ></asp:ListItem>
                            <asp:ListItem Text="LAST?MINUTES" date txtEnable="1" Value="LAST?MINUTES" isrepeat="0" ></asp:ListItem>
                            <asp:ListItem Text="NEWERTHAN?MINUTES" date txtEnable="1" Value="NEWERTHAN?MINUTES" isrepeat="0" ></asp:ListItem>
                            <asp:ListItem Text="OLDERTHAN?MINUTES" date txtEnable="1" Value="OLDERTHAN?MINUTES" isrepeat="0" ></asp:ListItem>
                        </asp:DropDownList>
                        <div id="divInfo" runat="server">
                            <span class="mainHeading">Filter Data :</span>
                            <span class="headingDetails" style="margin-bottom: 25px">Choose applicable columns for condition.Add expression and values for selected column.Select appropriate values from menu.</span>
                        </div>
                        <table cellspacing="0" cellpadding="0">
                            <thead style="color: gray; font-size: 14px; font-family: nunitolight;">
                                <tr>
                                    <th style="font-weight: normal">Key</th>
                                    <th style="font-weight: normal">Field Name</th>
                                    <th style="font-weight: normal; width: 200px">Expression</th>
                                    <th style="font-weight: normal">Value</th>

                                </tr>
                            </thead>
                            <tbody id="tblFilter" data-bind="foreach: FilterTask, visible: FilterTask().length > 0">
                                <tr>
                                    <td style="display: none">
                                        <asp:DropDownList ID="ddlAndOr" runat="server">
                                            <asp:ListItem Text="AND" Value="and"></asp:ListItem>
                                            <asp:ListItem Text="OR" Value="or"></asp:ListItem>
                                        </asp:DropDownList>
                                    </td>
                                    <td valign="top">
                                        <asp:TextBox ID="txtSrNo" CssClass="srno" runat="server" data-bind="value: SrNo" Style="width: 45px" Enabled="false"></asp:TextBox>
                                    </td>
                                    <td>
                                        <asp:TextBox ID="txtFields" ReadOnly="true" Style="width: 200px" onfocus=" ShowFilterTree(this,'Fields')" class="fields" runat="server" data-bind="value: DispName,attr: { title: Title,EntityPath:EntityPath,FieldType:FieldType,FieldID:Name }"></asp:TextBox>
                                    </td>
                                    <td valign="top" style="width: 200px">
                                        <asp:TextBox ID="txtFilters" Style="width: 200px" onfocus="ShowFilterTree(this,'Filter')" class="filters" data-bind="value: Filter" runat="server"></asp:TextBox>
                                    </td>

                                    <td valign="top" class="tv">
                                        <asp:TextBox CssClass="value" runat="server" data-bind="value: Value,visible:(ValueSrc != 'SubQuery'),enable:$root.RenderControl(Filter,'txt'),attr: {title:ValueTitle,ValueFrom :ValueFrom,ValueSrc :ValueSrc,ValueEntityPath :ValueEntityPath,WFEID:WFEID,WFName:WFName,SessionID:SessionID}"></asp:TextBox>
                                        <a href='javascript:void(0)' id='btnQuery' class='query' subquerymode="" style='color: #F00; font-size: 16px; display: inline; margin-left: 10px; margin-right: 10px; font-family: nunitobold; display: none' data-bind="visible: (ValueSrc == 'SubQuery'), attr: { title: Value }" onclick='return showQuery(this)'>Sub Filter</a>
                                                                                <input id="hdnSubqueryXml" type="hidden" class="hdnsubxml" data-bind="value: SubXml" />
                                        <asp:CheckBox ID="chkDayRepeat" CssClass="chkvalue" runat="server" Text="recurrence" ToolTip="Specified field will repeat in given period." style='color: #F00; font-size: 12px; display: inline; margin-left: 10px; margin-right: 10px; font-family: nunitobold; display: none' data-bind="visible: (isrepeat == '1'), attr: { r_chk: isdayrepeat }  " />
                                        <asp:Button ID="Button1" Text="&#xf0b0;" runat="server" CssClass="value1" OnClientClick="return ShowParamValue(this,'value')"
                                            data-bind="visible: $root.RenderControl(Filter, 'btn')" />
                                       
                                    </td>


                                    <td>
                                        <div class="close" title="Delete" data-bind="click: $parent.removeTask">X</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div id="divLink" runat="server">
                            <a href="javascript:void(0)" id="btnParams" class="params" style="color: #FF4700; font-size: 16px; font-family: nunitolight; margin-top: 25px; display: inline-block;" onclick="return showParameterList(this)">Add Parameters</a>
                        </div>
                        
                        <div style="padding: 10px; border-top: 1px solid #DADADA; margin-top: 30px; width: 645px;" class="format">
                            <asp:Label ID="lblFormat" runat="server" CssClass="filtertext" Style="display: block; font-family: nunitolight; font-weight: normal; text-decoration: underline; font-style: normal;" Text="Modify Condition Logic"></asp:Label>
                            <asp:TextBox ID="txtExprFormat" CssClass="DisplayName1" runat="server" TextMode="MultiLine" Style="width: 654px; height: 54px; margin-top: 8px;"></asp:TextBox>

                        </div>
                        <div id="orderBy" style="padding-top: 10px;margin-left: 10px;">
                            <asp:Label runat="server" style="margin-right: 22px;" Text="Order By" ID="lblOrder"></asp:Label>
                            <div id="multiSort" style="width: 370px; border: 1px solid #ebe7e7"></div>
                        </div>
                        <div id="divLimit" style="padding-top: 10px;margin-left: 10px;">
                             <asp:Label runat="server" Text="Limit Records" ID="Label2"></asp:Label>
                             <asp:TextBox style="text-align: right;width: 50px;border-color: #ebe7e7;" class="value" runat="server"  ID="txtLimit"></asp:TextBox>
                        </div>
                        <asp:HiddenField ID="hdnSql" runat="server" />
                    </div>

                </div>
                <div class="subquery" id="divSubquery">
                    <div style="height: 100%; width: 100%">
                        <iframe id="Iframe1" style="height: 100%; width: 100%" runat="server" frameborder="0"></iframe>
                    </div>
                </div>
                <div id="divSubButtons" style="padding: 10px;padding-left:0;margin-top: 10px;" runat="server">
                    <asp:LinkButton ID="btnSubqury" CssClass="mdl-button GreenButton tickIcon" runat="server" Text="Submit" OnClientClick="return createXml(this,'subquery')" ></asp:LinkButton>
                    <asp:LinkButton ID="btnCancel" CssClass="mdl-button RedButton closeIcon" runat="server" Text="Cancel" OnClientClick="return parent.hidePopUp()" ></asp:LinkButton>
                </div>
                <div id="divShowQuery" style="height: 300px; width: 300px; display: none; border: 1px solid; background-color: #EAEBD6;">
                    <asp:TextBox ID="txtShowQuery" Style="height: 78%; width: 98%" CssClass="showQuery" Enabled="false" runat="server" TextMode="MultiLine"></asp:TextBox>
                    <asp:LinkButton ID="btnEdit" runat="server" CssClass="mdl-button GreenButton tickIcon" Text="Edit" OnClientClick="return btnEdit_onClientClick(this);" ></asp:LinkButton>
                    <asp:LinkButton ID="Button2" runat="server" Text="Cancel" CssClass="mdl-button RedButton closeIcon" OnClientClick="return hideQueryPopUp();" ></asp:LinkButton>
                </div>
        </ContentTemplate>
    </asp:UpdatePanel>
    <script type="text/javascript">

        $("#multiSort").multiSelect({ onItemAdd: addSortItem, onDropDownShowing: showMultiTree });
        function addSortItem(item, obj) {
            if (typeof obj == "object")
                item.find('span').html("<span data-fid='" + $.defaultVal(obj.FID, "") + "' data-entity-path='" + $.defaultVal(obj.EntityPath, "") + "'>" + $.defaultVal(obj.Name, "") + "</span><a href='javascript:void(0)' class='orderLink' onclick='toggle(event,this)'>" + $.defaultVal(obj.Sort, "") + "</a>")
        }
        function showMultiTree() {
            callingDiv = $("#multiSort");
            var divTree = $("#common");
            callingDiv.after($("#common").css({ top: (callingDiv.getOffset().top / 1 + callingDiv.height() / 1), left: callingDiv.getOffset().left }).show().append($('.tree').show()));
        }
        function setSortDataArray() {
            var sortData = $("#multiSort").multiSelect().getItems();
            ArrSortData = [];
            for (var l = 0; l < sortData.length; l++) {
                var sortItem = $(sortData[l]);
                var name = $.defaultVal(sortItem.find('.item').node(0).html(), "");
                var sort = $.defaultVal(sortItem.find('.item').node(1).html(), "");
                var fid = $.defaultVal(sortItem.find('.item').node(0).data("fid"), "");
                var entitypath = $.defaultVal(sortItem.find('.item').node(0).data("entityPath"), "");
                ArrSortData.push({ Name: name, Sort: sort, FID: fid, EntityPath: entitypath });
            }

        }


        $("#<%=chkHidden.ClientID%>").CheckBoxX();
        var callingDiv = "";
        var tbltree = "";
        var ddlSubTableID = "";
        function pageLoad() {
            ddlSubTableID = $("#<%=ddlTable.ClientID%>").val();
            if ($.QS("PageMode").toLowerCase() == "subquery") {               
                toggleTargetField();
                $("#divLimit").hide();
            }
            
            $("#multiSort").multiSelect().refresh(ArrSortData);
            var hiddebutton = $.QS("Hidebutton");
            if (hiddebutton == "1")
                $("#<%=divSubButtons.ClientID%>").hide();

            if (window.frameElement) {
                $("#common, #divPrValue, #divParameter").css("max-height", "380px");
            }
            loadWFVariables();
            ResizeValueTextBox();
            setIsRepeated();

            if (clientMode) {
                var tree = $find("<%= rtvList.ClientID %>");
                var n = tree.findNodeByValue("Values");
                if (n) n.set_visible(false);
                n = tree.findNodeByValue("Session");
                if (n) n.set_visible(false);
            }
        }
        function loadWFVariables() {
            var tree = $find("<%= rtvList.ClientID %>");


            if ($.QS("WF") == "1") {
                var data;
                if ($.QS("PageMode") == "subquery" || $.QS("PageMode") == "Settings") {
                    if (window.parent.WFVarList)//from expreditor
                        WFVariablesList = window.parent.WFVarList;
                    else
                        WFVariablesList = window.parent.parent.GetVariableList();
                }
                else
                    WFVariablesList = window.parent.GetVariableList();

                if (!WFVariablesList)
                    WFVariablesList = [];
                for (var x = 0 ; x < WFVariablesList.length ; x++) {

                    if (WFVariablesList[x]["DataType"] == "Hashtable" || WFVariablesList[x]["DataType"] == "Byte" || WFVariablesList[x]["DataType"].indexOf("ist:") > 0)
                        continue;

                    if (WFVariablesList[x]["Hidden"])
                        continue;
                    tree.trackChanges();
                    var node = new Telerik.Web.UI.RadTreeNode();
                    node.set_text(WFVariablesList[x]["Name"]);

                    if (WFVariablesList[x]["DataType"] == "ErpEntity") {

                        node.get_attributes().setAttribute("IsParent", "1");
                        node.get_attributes().setAttribute("ParentTable", WFVariablesList[x]["EntityID"]);
                        node.get_attributes().setAttribute("WFEID", WFVariablesList[x]["EntityID"]);
                        node.set_expandMode(3);
                        node.set_value(WFVariablesList[x]["EntityID"]);
                        node.get_attributes().setAttribute("EPName", WFVariablesList[x]["Name"]);
                        node.get_attributes().setAttribute("WF", "0");
                    }
                    else {
                        node.get_attributes().setAttribute("IsParent", "0");
                        node.get_attributes().setAttribute("ParentTable", "");
                        node.set_value(WFVariablesList[x]["Name"]);
                        node.get_attributes().setAttribute("EPName", WFVariablesList[x]["Name"]);
                        node.get_attributes().setAttribute("WF", "1");
                    }


                    node.get_attributes().setAttribute("FieldName", WFVariablesList[x]["Name"]);

                    node.get_attributes().setAttribute("Parent", WFVariablesList[x]["Name"]);
                    tree.get_nodes().add(node);
                    tree.commitChanges();
                }
            }
        }
        function showParameterList(cntr) {
            $(cntr).after($(".Parameters").show());
            return false;
        }

        $(document).click(function (e) {
            if ($("#common").isVisible() && !$(e.srcElement).closest("#common").exists() && (!$(e.srcElement).hasClass("fields") && !$(e.srcElement).hasClass("targetfields") && !$(e.srcElement).hasClass("targetfieldsmultiple") && !$(e.srcElement).hasClass("tbltree") && !$(e.srcElement).hasClass("multiSelectCtr"))) {
                $(document.body).append($("#common").hide());
                $(".firsttree").append($(".tree").show());
            }
            else if ($("#divParameter").isVisible() && !$(e.srcElement).closest("#divParameter").exists() && !$(e.srcElement).hasClass("params")) {
                $(document.body).append($(".Parameters").hide());
            }
            else if ($("#divPrValue").isVisible() && !$(e.srcElement).closest("#divPrValue").exists() && (!$(e.srcElement).hasClass("value1"))) {
                $(document.body).append($("#divPrValue").hide());
            }
        });

        function showRecord(sender, eventArgs) {
            if ($.QS("PageMode") == "") {
                if (eventArgs.get_node().get_nodes().get_count() != "0")
                    return;

                if (eventArgs.get_node().get_attributes().getAttribute("IsParent") == "1")
                    return;
            }
            dispname = eventArgs.get_node().get_text();
            var value = eventArgs.get_node().get_value();
            var node = eventArgs.get_node();
            var s = "";
            var title = "";
            var mainParent = "";
            var currentObject = node.get_parent();

            mainParent = $find("<%= tvRelated.ClientID %>").get_nodes().getItem(0).get_text();
            while (currentObject.get_level() > 0) {
                if (s != "") {
                    s = currentObject.get_attributes().getAttribute("FieldName") + ":" + currentObject.get_attributes().getAttribute('ParentTable') + ">" + s;
                    title = currentObject.get_text() + "\\" + title;
                }
                else {
                    s = currentObject.get_attributes().getAttribute("FieldName") + ":" + currentObject.get_attributes().getAttribute('ParentTable');
                    title = currentObject.get_text();
                }
                currentObject = currentObject.get_parent();
            }
            entitypath = s;

            if (title != "")
                title = mainParent + "\\" + title + "\\" + dispname;
            else
                title = mainParent + "\\" + dispname;
            i18No = "#GUID#";
            myModel.addTask(dispname, entitypath, value, title, i18No);
            i18No = "";
        }





        function FilterTask() {
            return { DispName: 'Please Select', Filter: 'Please Select', Value: '', SrNo: '', EntityPath: '', Title: '', FieldType: '', Name: '', ValueFrom: '', ValueSrc: '', SubXml: '', ValueEntityPath: '', ValueTitle: '', WFEID: '', WFName: '', SessionID: '',isdayrepeat :'',isrepeat:'' };
        }

        function FilterTaskListViewModel() {
            // Data

            if (Logic != "") {
                $('#<%= txtExprFormat.ClientID %>').val(Logic);
             
            }
            var self = this;
            self.FilterTask = ko.observableArray(strData);
            // Operations
            self.addTask = function () {
                self.FilterTask.push(new FilterTask());

            };

            self.RenderControl = function (attr, control) {
                if ($.QS("PageMode") != "subquery" && $.QS("PageMode") != "") {
                    if (control == "btn" && $.QS("HideFilterBtn") == "1")
                        return false;
                    else
                        return true;
                }
                else {
                    var ddl = $('#<%= ddlFilters.ClientID %>').find("option[value ^= '" + attr + "']");
                    var isenable = ddl.attr('txtEnable');
                    var value = ddl.val();
                    if (isenable == "0") {
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            }
            self.removeTask = function (FilterTask) {
                var ddlFilter = $(".Filter");
                var ddlFields = $(".tree").parent();
                var filterPrevTxt = ddlFilter.prev();
                var fieldPrevTxt = ddlFields.prev();
                $(document.body).append(ddlFilter.hide());
                if (filterPrevTxt.hasClass('filters'))
                    filterPrevTxt.show();
                if (fieldPrevTxt.hasClass('fields'))
                    fieldPrevTxt.show();
                $(document.body).append($(".tree").hide());
                $(document.body).append($("#common").hide());
                $(".firsttree").append($(".tree").show());
                self.FilterTask.remove(FilterTask);
                var text = "";
                fixSrNo();

                if ($("#tblFilter").children().length == 0)
                    myFilterModel.addTask();
            };
            self.removeAll = function (FilterTask) { self.FilterTask.removeAll(FilterTask); };
        }
        var myFilterModel = new FilterTaskListViewModel();


        ko.applyBindings(myFilterModel, document.getElementById('tblFilter'));
        myFilterModel.addTask();
        format();



        function TreeChanged(sender, eventArgs) {
            if ($.QS("PageMode") == "") {


            }
           
            if (eventArgs.get_node().get_attributes().getAttribute("IsParent") == "1" && $.isEmpty(eventArgs.get_node().get_attributes().getAttribute("FieldID")))
                return;

            dispname = eventArgs.get_node().get_text();
            var txt = "";
            var currentObject = eventArgs.get_node().get_parent();
            var s = "";
            var title = "";
            var entitypath = "";
            var valueId = (eventArgs.get_node().get_attributes().getAttribute("IsParent") == "1" ? eventArgs.get_node().get_attributes().getAttribute("FieldID") : eventArgs.get_node().get_value());
            //debugger

            var value = $.defaultVal(eventArgs.get_node().get_attributes().getAttribute('FieldType'), '');
            var txt_multiple;
            var dateNodeText = eventArgs.get_node().get_text();
            if (dateNodeText == "Created Date" || dateNodeText == "Modified Date")
                value = "datetime";
            var ismultiple = $("#<%= chkMultiple.ClientID %>").checked();
            var applymultiple = false;
            if (callingDiv == "") {
                if (tbltree != "1") {
                    txt = $(".tree").parent().parent().find(".fields");
                    if (txt.hasClass('fields')) {
                        var txtSrNo = txt.closest("TR").find(".srno");
                        if (txtSrNo.val() == "" || txtSrNo.val() == "0") {
                            cntr1++;
                            txtSrNo.val(cntr1);
                        }
                        if (!txt.closest("TR").next().exists())
                            myFilterModel.addTask(dispname, entitypath);
                        if (txtSrNo.val() != "0") {
                            createLogic(txtSrNo.val());
                        }
                        var txtV = txt.closest('TR').find('.value');
                        txtV.val("");
                        txtV.removeAttr("readonly");
                        txtV.focus();
                        txtV.attr('ValueSrc', 'Input')
                        txt.attr('WFEID', '');
                        txt.attr('WFName', '');
                        txt.attr('FieldType', value);
                        txt.attr('FieldID', valueId);
                        applyFormatting(txt, value, 'Replace');

                        var ddlFilter = txt.closest("TR").find(".Filter");
                        var txtFilter = txt.closest("TR").find(".filters");
                        txtFilter.val('EqualTo');
                        if (ddlFilter.exists())
                            txtFilter.show().parent().append(ddlFilter.hide())
                    }
                    else {
                        if(ismultiple)
                            txt = $.defaultVal($(".tree").parent().parent().find(".targetfieldsmultiple"), "");
                        else
                            txt = $.defaultVal($(".tree").parent().parent().find(".targetfields"), "");
                        applymultiple = true;
                    }
                }
                var obj = getEPText(eventArgs.get_node());

                if (applymultiple && ismultiple) {
                    txt.val(txt.val() + obj.FieldText);
                    txt.attr('val', txt.val() + obj.FieldText);
                    txt.attr('title', '');
                    txt.attr('EntityPath', '');
                    txt.attr('TargetType', 'Multiple');
                    tbltree = "";
                    return;
                }
                else {
                    txt.val(dispname);
                    txt.attr('TargetType', 'Single');
                    txt.attr('val', valueId);
                    txt.attr('title', obj.Title);
                    txt.attr('EntityPath', obj.EntityPath);
                    tbltree = "";
                }

                $(document.body).append($(".tree").hide());
                $(document.body).append($("#common").hide());
                $(".firsttree").append($(".tree").show());

            }
            else {
                var obj = getEPText(eventArgs.get_node());
                $("#multiSort").multiSelect().addItem("<span data-fid='" + valueId + "' data-entity-path='" + obj.EntityPath + "'>" + dispname + "</span><a href='javascript:void(0)' class='orderLink' onclick='toggle(event,this)'>Asc</a>")
                $(document.body).append($("#common").hide());
                callingDiv = "";
            }

            //ShowFilterTree(txtFilter, 'filters');

        }
        function toggle(event, link) {
            if (event.stopPropagation) { event.stopPropagation(); } event.cancelBubble = true;
            if ($.defaultVal($(link).html(), "") == "Asc")
                $(link).html("Desc");
            else
                $(link).html("Asc");
        }
        function getEPText(currentObject) {
            var selectedenode = currentObject;
            var ep = "";
            var title = "";
            var WFEID = "";
            var fieldtext = selectedenode.get_attributes().getAttribute("FieldName");
            currentObject = currentObject.get_parent();
            //var wfNode = currentObject.get_treeView().findNodeByValue("WFEntity");
            //if (wfNode)

            while (currentObject.get_level() > 0) {
                var _f = $.defaultVal(currentObject.get_attributes().getAttribute("FieldName"), "");
                var _p = $.defaultVal(currentObject.get_attributes().getAttribute('ParentTable'), "");
                if (_f != "" && _p != "") {
                    if (ep != "") {
                        ep = _f + ":" + _p + ">" + ep;
                    }
                    else {
                        ep = _f + ":" + _p;
                    }
                    fieldtext = _f + "." + fieldtext;
                }
                if (title != "")
                    title = currentObject.get_text() + "\\" + title;

                else
                    title = currentObject.get_text();

                currentObject = currentObject.get_parent();
            }
            WFEID = $.defaultVal(currentObject.get_attributes().getAttribute("WFEID"), "");
            var mainParent = currentObject.get_text();
            if (title != "")
                title = mainParent + "\\" + title + "\\" + selectedenode.get_text();
            else
                title = mainParent + "\\" + selectedenode.get_text();
            fieldtext = "Field." + fieldtext + "";
            return { EntityPath: ep, Title: title, WFEID: WFEID, FieldText: fieldtext };
        }


        function FilterDDlChanged(ddl, mode) {
            ddl = $(ddl); var txt = $(ddl).prev();
            if (mode.toLowerCase() == "fields") {
                if (txt.hasClass("fields"))
                    txt.val(ddl.val());
                if (!txt.closest("TR").next().exists())
                    myFilterModel.addTask();
            }
            else {
                var f = ddl.val().toLowerCase();
                txt.val(ddl.val());
                var txtEnable = ddl.find(':selected').attr('txtEnable');
                var isrepeat = ddl.find(':selected').attr('isrepeat');
                var datatype = txt.closest('TR').find('.fields').attr('FieldType');
                if (txtEnable == "0") {
                    txt.closest('tr').find(".value").setEnable(false);
                    txt.closest('tr').find(".value").removeAttr("readonly");
                    applyFormatting(txt, 'number', 'Replace');
                    txt.closest('tr').find(".value1").hide();
                }
                else {
                    txt.closest('tr').find(".value").setEnable(true);
                    txt.closest('tr').find(".value").removeAttr("readonly");
                    txt.closest('tr').find(".value1").show();
                    if (datatype.toLowerCase() == 'datetime' || datatype.toLowerCase() == 'date') {
                        if (f.contains('?')) {
                            applyFormatting(txt, 'number', 'Replace');
                        }
                        else {
                            applyFormatting(txt, datatype, 'Replace');

                        }
                    }
                    

                }
                if (isrepeat == '1') {
                    txt.closest('tr').find(".value").width(115);
                    txt.closest('tr').find(".chkvalue").show();
                }
                else {
                    txt.closest('tr').find(".value").width(200);
                    txt.closest('tr').find(".chkvalue").node(0).checked(false);
                    txt.closest('tr').find(".chkvalue").hide();
                }
                ResizeValueTextBox();


            }
        }
        function ShowFilterTree(txt, mode) {

            txt = $(txt);
            var ddl = "";
            if (mode.toLowerCase() == "targetfields") {
                ddl = $(".tree");
                txt.after($("#common").css({ top: (txt.getOffset().top / 1 + txt.height() / 1 + 7), left: txt.getOffset().left }).show().append(ddl.show()));
            }
            else {
                if (mode.toLowerCase() == "fields") {
                    ddl = $(".tree");
                }

                else {
                    ddl = $(".Filter");
                    $(document.body).append($(".tree").hide());
                    $(document.body).append($("#common").hide());
                    $(".firsttree").append($(".tree").show());

                    var value = txt.closest('TR').find(".fields").attr('FieldType').toLowerCase();
                    var ftype = "";

                    if (value == "number" || value == "decimal" || value == "calculated" || value == "currency" || value == "percent" || value == "total")
                        ftype = "number";
                    else if (value == "text" || value == "autogenerated" || value == "" || value == "imgpreview" || value == "docpreview" || value == "multiline" || value == "richtext" || value == "time" || value == "email" || value == "phone" ||
                        value == "password" || value == "url" || value == "regex" ||
                        value == "formula" || value == "singleselect" || value == "multiselect" || value == "mixedselect" || value == "mixedmultiselect" || value == "status" || value == "priority")
                        ftype = "string";
                    else if (value == "date" || value == "datetime")
                        ftype = "date";
                    else if (value == "checkbox")
                        ftype = "checkbox";
                    else if (value == "image" || value == "documents")
                        ftype = "image";
                    else if (value == "primarykey")
                        ftype = "primarykey";
                    $('#<%= ddlFilters.ClientID %>').find("option").hide();
                    $('#<%= ddlFilters.ClientID %>').find("option[" + ftype + "]").show();
                }

                var txtOld = ddl.prev();
                if (txtOld.hasClass("fields") || txtOld.hasClass("filters"))
                    txtOld.show();

                if (mode.toLowerCase() == "fields")
                    txt.after($("#common").css({ top: (txt.getOffset().top / 1 + txt.height() / 1 + 7), left: txt.getOffset().left }).show().append(ddl.show()));
                else
                    txt.hide().parent().append(ddl.show());

                if (txt.val() != "") {
                    if (mode.toLowerCase() != "fields")
                        if (txt.val().toLowerCase() != "please select")
                            $(".Filter").val(txt.val())
                        else
                            $(".Filter").val(0);
                }
            }
            return;
        }

        function fixSrNo() {

        }
        function createLogic(srno) {
            var filterLogic = $('#<%= txtExprFormat.ClientID %>');
            if (srnoCheck.indexOf("," + srno + ",") > -1)
                return;
            if (filterLogic.val() != "")
                filterLogic.val(filterLogic.val() + " and " + srno);
            else
                filterLogic.val(srno);
            srnoCheck += "," + srno + ",";
            filterLogic.parent().show();
            return;
        }

        var ReportId;
        var SaveAsReportId = "";
        function OnClientTabSelected(sender, args) {
            var tab = args.get_tab();
            var value = tab.get_value();
            if (value.toLowerCase() == "fields") {
                $(".tree").prev().show();
                $(".firsttree").append($(".tree"));
                $(document.body).append($("#common").hide());
            }
        }

        function raiseErrorsFrames() {
            if (parent && typeof parent.HighlightErrorFrame == "function")
                parent.HighlightErrorFrame(window.frameElement);
        }
        function createXml(btn, mode) {

            if ($.QS("PageMode").toLowerCase() == "subquery") {
                var txtTarget = $("#<%= txtTargetField.ClientID %>");
                var txtTarget_m = $("#<%= txtTargetFieldMultiple.ClientID %>");
                var chk = $("#<%=chkMultiple.ClientID %>").checked();
                var _v="";
                if (chk) 
                    _v = txtTarget_m.val();
                else
                    _v = txtTarget.val();

                if (_v == "") {
                    alert("Please Select Target Field");
                    return false;
                }
            }
            arrColInfo = [];
            var error = "";
            var numberPattern = /\d+/g;
            var result = $('#<%= txtExprFormat.ClientID %>').val().match(numberPattern)
            var remText = " " + $('#<%= txtExprFormat.ClientID %>').val().toUpperCase().Replace("AND", "").Replace("OR", "").Replace("[(]", '').Replace("[)]", '') + " ";
            // $(result).each(function () { remText = remText.Replace(this + " ", ""); });
            if (result != null) {
                for (var i = 0; i < result.length; i++) {
                    remText = remText.Replace(" " + result[i] + " ", "");
                }
                $(result).each(function () { if ($(".srno[value=" + this + "]").length == 0) error += "," + this; })

                if (clientMode) {
                    if (error != "") {
                        //raiseErrorsFrames();
                        if (!confirm("Following Keys are not valid : " + error.Trim(',')+"\nDo you wish to continue?"))
                            return false;
                    }
                    //if (remText.Trim().length > 0) {
                    //    raiseErrorsFrames();
                    //    alert("Syntax error in condition");
                    //    return false;
                    //}
                }
            }
            if (mode && mode.toLowerCase() == "main") {


                var filterInfoXml = "<Filter Limit=\"" + $.encodeXml($('#<%= txtLimit.ClientID %>').val(), true) + "\" Id=\"" + $.QS("EID") + "\" Logic=\"" + $.encodeXml($('#<%= txtExprFormat.ClientID %>').val(), true) + "\" >";
                var ParamsInfoXml = "";

                $("#tblFilter").find('TR').each(function () { filterInfoXml += createFilterXml($(this)) });
                $("#tblParameter").find('TR').each(function () { ParamsInfoXml += createParameterXml($(this)) });

                var sortXml = createSortXml();
                filterInfoXml += sortXml;

                filterInfoXml += "</Filter>";
                ParamsInfoXml = "<Parameters>" + ParamsInfoXml + "</Parameters>";
                
                var finalXml = "<Layout>" + filterInfoXml + ParamsInfoXml + "</Layout>";
                var data = new Object();
                data["Type"] = "SaveGridView";
                data["@LayoutData"] = finalXml;
                data["@EntityId"] = $.QS("EID");
                data["@LayoutId"] = ($('#divViewDetails').data('Mode') == "SaveAs" ? "" : ReportId);
                data["@ModuleId"] = $.QS("Module");
                data["@LayoutName"] = $('#<%= txtViewName.ClientID %>').val();
                data["@Tag"] = $('#<%= txtTag.ClientID %>').val();
                data["@Hidden"] = $('#<%= chkHidden.ClientID %>').checked();
                data["@LayoutType"] = $.QS("PageCall");
                data["@IsActive"] = 1;
                data["@SystemDefined"] = 1;
                data["@Description"] = $('#<%= txtDesc.ClientID %>').val();
                data["@FormLayout"] = $.QS("FromLayout");
                data["@TableName"] = $.QS("TableName");
                data["@ResourceVersion"] = $.defaultVal($('#<%= txtResVersion.ClientID %>').val(), 0);

                var arrRoles = [];
                arrRoles = [];//
                var arr = $("#<%= ifrmRole.ClientID%>")[0].contentWindow.GetRoles ? $("#<%= ifrmRole.ClientID%>")[0].contentWindow.GetRoles() : [];
                for (var i = 0; i < arr.length; i++) arrRoles.push(arr[i]);
                // var arrPermission = [];
                var Permission = [];
                var arrPermission = $("#<%= ifrmRole.ClientID%>")[0].contentWindow.GetPermission ? $("#<%= ifrmRole.ClientID%>")[0].contentWindow.GetPermission() : [];
                for (var i = 0; i < arrPermission.length; i++) Permission.push(arrPermission[i]);

                data["arrPermission"] = Permission;
                data["arrRoles"] = arrRoles;
                data["au"] = $.QS("_au");
                $.Notify("Saving...");
                PageMethods.Execute(data, arrRoles, Permission, function (result) { $.Notify(false); OnExecuteSuccess(result); }, function (d) { $.Notify({ Message: "Error Occured.", NotifyOnly: true }) });
                layoutId = data["@LayoutId"];

            }
            else {
                if ($.QS("PageMode").toLowerCase() == "subquery") {
                    var filterInfoXml = "";
                    var istargettype = $("#<%=chkMultiple.ClientID %>").checked();
                    var targetdata = "";
                    var targettype = "Single";

                    if (istargettype) {
                        targetdata = $.encodeXml($("#<%=txtTargetFieldMultiple.ClientID %>").val(), true);
                        targettype = "Multiple";
                    }
                    else {
                        targetdata = $.encodeXml($("#<%=txtTargetField.ClientID %>").attr('val'), true);
                        targettype = "Single";
                    }

                    var xml = "<Subquery  Table=\"" + $.encodeXml($('#<%= ddlTable.ClientID %>').val(), true) + "\" Target=\"" + targetdata + "\" TargetType=\"" + targettype + "\" EntityPath=\"" + $.encodeXml($("#<%=txtTargetField.ClientID %>").attr('entitypath'), true) + "\" Summary=\"" + $.encodeXml($('#<%= ddlSummary.ClientID %>').val(), true) + "\" Logic=\"" + $.encodeXml($('#<%= txtExprFormat.ClientID %>').val(), true) + "\" >";
                    $(("#tblFilter")).find('TR').each(function () { filterInfoXml += createFilterXml($(this), 'Filter') });
                   
                    var ParamsInfoXml = "";
                    $("#tblParameter").find('TR').each(function () { ParamsInfoXml += createParameterXml($(this)) });
                    ParamsInfoXml = "<Parameters>" + ParamsInfoXml + "</Parameters>";
                    var sortXml = createSortXml();
                    var finalXml = xml + filterInfoXml + sortXml + ParamsInfoXml + "</Subquery>";
                    var subquery = "   ";
                    $("#tblFilter").find('TR').each(function () { subquery += CreateQuery($(this)) });
                    if ($.defaultVal($.QS("ReturnXml"), "") == "1")
                        return finalXml;
                    parent.saveSubXml(finalXml, srno, subquery);
                }
                else if ($.QS("PageMode").toLowerCase() != "") {
                    EID = $.defaultVal($.QS("EID"), EID);
                    var filterInfoXml = "", ParamsInfoXml = "";
                    var xml = "<Filter  Limit=\"" + $.encodeXml($('#<%= txtLimit.ClientID %>').val(), true) + "\"  Id=\"" + EID + "\"  Logic=\"" + $.encodeXml($('#<%= txtExprFormat.ClientID %>').val(), true) + "\" >";
                    $(("#tblFilter")).find('TR').each(function () { filterInfoXml += createFilterXml($(this), 'Filter') });

                    $("#tblParameter").find('TR').each(function () { ParamsInfoXml += createParameterXml($(this)) });
                    ParamsInfoXml = "<Parameters>" + ParamsInfoXml + "</Parameters>";
                    var sortXml = createSortXml();
                    var finalXml = xml + filterInfoXml + sortXml + ParamsInfoXml + "</Filter>";

                    

                    var subquery = "   ";
                    $("#tblFilter").find('TR').each(function () { subquery += CreateQuery($(this)) });

                    if ($.defaultVal($.QS("IsCond"), "") == "1")
                        parent.saveFilterXmlWithQuery(finalXml, subquery);
                    else if ($.defaultVal($.QS("ReturnXml"), "") == "1")
                        return finalXml;
                    else if (parent && typeof parent.saveFilterXml == "function")
                        parent.saveFilterXml(finalXml);

                }
            return false;
        }
        return false;
    }


        function createSortXml() {
            setSortDataArray();
            var sortData = [];
            var sortXml = "";
            sortData = ArrSortData;
            sortXml += "<Sort><ColInfo>";
            if (sortData != undefined) {
                for (var t = 0; t < sortData.length; t++) {
                    sortXml += "<Cols Name=\"" + $.defaultVal(sortData[t]["FID"], "") + "\" EntityPath=\"" + $.defaultVal(sortData[t]["EntityPath"], "") + "\" Sort=\"" + $.defaultVal(sortData[t]["Sort"], "") + "\" fieldtype=\"" + "-999" + "\" />";
                }
            }
            sortXml += "</ColInfo></Sort>";
            return sortXml;
        }

    function OnExecuteSuccess(result) {
        //{ ViewID: "10", Type: "TBL_EMPLOYEEQUALIFICATION", ViewName: "Qualification new", Cols: [{ Title: "Qualification new", EntityPath: "", Name: "7", Width: 250 }, { Title: "Description new", EntityPath: "", Name: "8", Width: 200 }, { Title: "Period", EntityPath: "", Name: "9", Width: 150 }] };
        if (result.Success == "Success") {
            if (result.Type == "SaveGridView") {

                var hdnReportName = $("#<%= hdnReportName.ClientID %>");
                var hdnDesc = $("#<%= hdnDesc.ClientID %>");
                var ReportName = $("#<%= txtViewName.ClientID %>");
                var Desc = $("#<%= txtDesc.ClientID %>");
                hdnDesc.val(Desc.val());
                hdnReportName.val(ReportName.val());
                $("#<%= lblTitle.ClientID %>").html(result["@LayoutName"]);
                ReportId = result["@LayoutId"];

                if ($.QS("FromLayout") == "1") {
                    window.opener.addToViewList({ ViewID: result["@LayoutId"], Type: result["@TableName"], ViewName: result["@LayoutName"], Cols: arrColInfo });
                    window.close();

                }
                else {
                    $('#divViewDetails').HideModal();
                }
                RefreshParent();
            }
        }
        else
            alert(result.ErrorMessage);
    }
    function CreateQuery(tr) {
        var query = "";
        var txtFields = tr.find(".fields");
        var txtExpression = tr.find(".filters");
        var txtValue = tr.find(".value");
        if (txtFields.val().toLowerCase() == "please select" || txtFields.val().toLowerCase() == "")
            return "";
        if (txtExpression.val().toLowerCase() == "please select" || txtExpression.val().toLowerCase() == "")
            return "";
        if (txtValue.attr('ValueSrc') == "")
            return "";
        var expressions = "";
        var operatr = txtExpression.val();

        if ($.defaultVal($.QS("IsCond"), "") == "1") {
            query = "([" + txtFields.val() + "] " + operatr + " [" + txtValue.val() + "])";
            return " and " + query;
        }
        else {
            query = "( [" + txtFields.val() + "] " + operatr + " '" + txtValue.val() + "' )";
            return " and " + query;
        }

    }
    function btnEdit_onClientClick(btnEdit) {
        hideQueryPopUp();
        var btn = $(btnEdit);
        var txtShowQuery = btn.parent().find('.showQuery');

        var data = new Object();
        data["LID"] = $.QS("ID");
        data["srno"] = txtShowQuery.attr('srno');
        data["PageType"] = "E";
        data["PageMode"] = "subquery";
        data["EID"] = $.QS("EID");
        data["SubMode"] = txtShowQuery.attr('SubQueryMode');
        data["SubQuery"] = txtShowQuery.attr('SubQuery');
        var subQ = txtShowQuery.attr('SubQuery');
        if (subQ.indexOf(" Target=\"") > 0) {
            subQ = subQ.substring(0, subQ.indexOf(" Target=\""));
            subQ = subQ.substring(subQ.indexOf("\"")).Trim('"');


        }
        else
            subQ = "";
        data["sid"] = sid;
        data["EID"] = subQ;
        data["ParamCheck"] = paramCheck;
        PageMethods.LoadSubXml(data, OnSucLoadFrame);

        return false;
    }
    //subqury link click
    function showQuery(btnLink) {
        var link = $(btnLink);
        var tr = link.closest('TR');
        var txtValue = tr.find('.value');
        var txtSrNo = tr.find('.srno');
        var subquery = txtValue.val();
        var hiddenfield = txtValue.parent().find('.hdnsubxml');
        var valueSrc = txtValue.attr('ValueSrc');
        var valueFrom = txtValue.attr('ValueFrom');
        var div = $("#divShowQuery");
        var showQueryTxt = div.find(".showQuery");
        showQueryTxt.val(subquery);
        showQueryTxt.attr('ValueSrc', valueSrc);
        showQueryTxt.attr('ValueFrom', valueFrom);
        showQueryTxt.attr('SubQueryMode', link.attr('SubQueryMode'));
        showQueryTxt.attr('SubQuery', hiddenfield.val());
        showQueryTxt.attr('srno', txtSrNo.val());
        var btnEdit = $('#<%= btnEdit.ClientID %>');
        btnEdit.click();
        return false;
    }

    function hideQueryPopUp() {
        $("#divShowQuery").HideModal();
        return false;
    }

    var arrColInfo = [];



    function createFilterXml(row) {
        if ($.isEmpty(row.find(".fields").attr('FieldID')))
            return "";
        var rowxml = '<Condition ';
      
        var n = row.find(".value"); var subxml = ""; var chkrepeat = row.find(".chkvalue").node(0).checked();
        var dataType = row.find(".fields").attr('fieldtype').toLowerCase();

        rowxml += " Name=\"" + $.encodeXml(row.find(".fields").attr('FieldID'), true)
                  + "\" EntityPath=\"" + $.encodeXml(row.find(".fields").attr('EntityPath'), true) + "\"";

        if(chkrepeat)
            rowxml += " Operator=\"" + $.encodeXml(row.find(".filters").val()+"-REPEAT", true) + "\"";
        else
            rowxml += " Operator=\"" + $.encodeXml(row.find(".filters").val(), true) + "\"";

        if (n.attr('ValueSrc') == "Input" || n.attr('ValueSrc') == '') {
            if (dataType == "datetime") {
                var attr = row.find(".filters").val();
                var isenable = $('#<%= ddlFilters.ClientID %>').find("option[value ^= '" + attr + "']").attr('txtEnable');
                var isrepeat = $('#<%= ddlFilters.ClientID %>').find("option[value ^= '" + attr + "']").attr('isrepeat');
                if (isenable == "1") {
                    if (attr.contains("?")) {
                       
                            rowxml += " Value=\"" + $.encodeXml(n.val(), true) + "\"" + " ValueSrc=\"Input\"";
                    }
                    else {
                        var d = n.datetimepicker("getDateTime");
                        d = (!d ? "" : moment(d).format("YYYY-MM-DD hh:mm A"));
                        
                        rowxml += " Value=\"" + $.encodeXml(d, true) + "\"" + " ValueSrc=\"Input\"";
                    }
                }
                else {
                    var d = " ";
                    rowxml += " Value=\"" + $.encodeXml(d, true) + "\"" + " ValueSrc=\"Input\"";
                }
            }
            else if (dataType == "date") {
                var attr = row.find(".filters").val();
                var isenable = $('#<%= ddlFilters.ClientID %>').find("option[value ^= '" + attr + "']").attr('txtEnable');
                var isrepeat = $('#<%= ddlFilters.ClientID %>').find("option[value ^= '" + attr + "']").attr('isrepeat');
                if (isenable == "1") {
                    if (attr.contains("?")) {
                       
                        rowxml += " Value=\"" + $.encodeXml(n.val(), true) + "\"" + " ValueSrc=\"Input\"";
                    }
                    else {
                        var d = n.datepicker("getDate");
                        d = (!d ? "" : moment(d).format("YYYY-MM-DD"));
                       
                        rowxml += " Value=\"" + $.encodeXml(d, true) + "\"" + " ValueSrc=\"Input\"";
                    }
                }
                else {
                    var d = " ";
                    rowxml += " Value=\"" + $.encodeXml(d, true) + "\"" + " ValueSrc=\"Input\"";
                }
            }
            else if (dataType == "time") {
                var d = n.timepicker().getTime();
                d = (!d ? null : moment(d).format("YYYY-MM-DD hh:mm A"));
                rowxml += " Value=\"" + $.encodeXml(d, true) + "\"" + " ValueSrc=\"Input\"";
            }
            else if (dataType == "number" || dataType == "decimal" || dataType == "percent" || dataType == "currency") {
                var d = n.autoNumeric("get");
                rowxml += " Value=\"" + $.encodeXml(d, true) + "\"" + " ValueSrc=\"Input\"";
            }
            else
                rowxml += " Value=\"" + $.encodeXml(n.val(), true) + "\"" + " ValueSrc=\"Input\"";
    }
    else if (n.attr('ValueSrc').toLowerCase() == "subquery") {
        rowxml += " Value=\"" + $.encodeXml(n.val(), true) + "\"" + " ValueSrc=\"" + $.encodeXml(n.attr('ValueSrc'), true) + "\"";
        subxml = n.parent().find(".hdnsubxml").val();
    }
    else if (n.attr('ValueSrc').toLowerCase() == "table" || n.attr('ValueSrc').toLowerCase() == "parent" || n.attr('ValueSrc').toLowerCase() == "companysession" || n.attr('ValueSrc').toLowerCase() == "usersession" || n.attr('ValueSrc').toLowerCase() == "decisionuser") {
        rowxml += " Value=\"" + $.encodeXml(n.attr('ValueFrom'), true) + "\"" + " ValueSrc=\"" + $.encodeXml(n.attr('ValueSrc'), true) + "\" ValueEntityPath=\"" + $.encodeXml(n.attr('ValueEntityPath'), true) + "\" ";

    }
    else
        rowxml += " Value=\"" + $.encodeXml(n.attr('ValueFrom'), true) + "\"" + " ValueSrc=\"" + $.encodeXml(n.attr('ValueSrc'), true) + "\" ValueEntityPath=\"" + $.encodeXml(n.attr('ValueEntityPath'), true) + "\" WFEID=\"" + $.encodeXml(n.attr('WFEID'), true) + "\" ";

    rowxml += " WFName=\"" + $.encodeXml(n.attr('WFName'), true) + "\" ";
    rowxml += " SessionID=\"" + $.encodeXml($.defaultVal(n.attr('SessionID'), ""), true) + "\" ";
    rowxml += " Srno=\"" + row.find(".srno").val() + "\" >"
                + subxml
                + "</Condition>";
    return rowxml;
}

function createParameterXml(row) {
    var rowxml = '<Param ';
    rowxml += " Key=\"" + $.encodeXml(row.find(".ParamKey").val(), true) + "\" />";
    return rowxml;
}





//parameters
function parameter(key) {
    return { paramkey: key };
}
function ParameterViewModel() {

    var self = this;
    if (dbParameters.length <= 0)
        self.parameter = ko.observableArray([]);
    else {
        self.parameter = ko.observableArray(dbParameters);

    }

    self.addParameter = function (key) {
        self.parameter.push(new parameter(key));
    };

    self.removeParameter = function (parameter) {
        self.parameter.remove(parameter);
        window.setTimeout(function () { showParameterList($("#btnParams")[0]); }, 50);
    };
}
var myParamModel = new ParameterViewModel();
ko.applyBindings(myParamModel, document.getElementById('tblParameter'));

function addParameter() {
    if (paramCheck.indexOf("," + $('#<%= txtPramsName.ClientID %>').val() + ",") > -1) {
        alert("Already Exists");
        return false;
    }
    
    paramCheck += "," + $('#<%= txtPramsName.ClientID %>').val() + ",";
    myParamModel.addParameter($('#<%= txtPramsName.ClientID %>').val());
    $('#<%= txtPramsName.ClientID %>').val('');

    return false;
}

function ShowParamValue(cntr, cssclass) {

    $(cntr).parent().append($("#divPrValue").show());
    var tree = $find("<%= rtvList.ClientID %>");
    var txtFilterValue = $(cntr).closest('TR').find(".filters").val();


    var parentnode = tree.findNodeByValue("Parameters");
    if (parentnode != null ) {
        parentnode.get_nodes().clear();
        $("#tblParameter").find('TR').each(function () {

            tree.trackChanges();
            var node = new Telerik.Web.UI.RadTreeNode();
            node.set_text($(this).find(".ParamKey").val());
            node.set_value($(this).find(".ParamKey").val());
            node.get_attributes().setAttribute("Parent", "Parameters");
            parentnode.get_nodes().add(node);
            tree.commitChanges();
        });
    }
    var txtField = $(cntr).closest('TR').find(".fields");
    var fieldType = txtField.attr('FieldType');

    if (fieldType != null && fieldType.toLowerCase() == "primarykey") {
        var valueNode = tree.findNodeByValue("Values");
        tree.trackChanges();
        valueNode.collapse();
        valueNode.get_nodes().clear();
        valueNode.set_expandMode(3);
        valueNode.set_visible(true);
        valueNode.get_attributes().setAttribute("FieldID", txtField.attr('FieldID'));
        tree.commitChanges();
    }
    else {
        var valueNode = tree.findNodeByValue("Values");
        valueNode.set_visible(false);
    }


    if (fieldType != null && fieldType.toLowerCase() == "checkbox") {
        tree.findNodeByValue("true").set_visible(true);
        tree.findNodeByValue("false").set_visible(true);
        tree.findNodeByValue("Input").set_visible(false);
    }
    else {
        tree.findNodeByValue("true").set_visible(false);
        tree.findNodeByValue("false").set_visible(false);
        tree.findNodeByValue("Input").set_visible(true);
    }


    if (txtFilterValue != null && (txtFilterValue.toLowerCase() == "in" || txtFilterValue.toLowerCase() == "notin" || txtFilterValue.toLowerCase() == "equalto" || txtFilterValue.toLowerCase() == "notequalto")) {
        if ($.defaultVal($.QS("IsCond"), "0") == 1)
            tree.findNodeByValue("subquery").set_visible(false);
        else
            tree.findNodeByValue("subquery").set_visible(true);
    }
    else
        tree.findNodeByValue("subquery").set_visible(false);

    var removeQuerynode = tree.findNodeByValue("removesubquery");
    var Querynode = tree.findNodeByValue("subquery");
    var removeQuerylink = $(cntr).closest('TR').find('.query');
    if (removeQuerylink.isVisible()) {
        removeQuerynode.set_visible(true);
        Querynode.set_visible(false);
    }
    else {
        removeQuerynode.set_visible(false);
        Querynode.set_visible(true);
    }



    var variablenode = tree.findNodeByValue("Variable");
    if (variablenode != null) {
        variablenode.get_nodes().clear();
        var variables = "";

        if ($.QS("PageMode") == "subquery")
            variables = this.parent.parent.GetVariableList({ DataType: "Simple" });
        else
            variables = this.parent.GetVariableList({ DataType: "Simple" });
        if (!variables)
            variables = [];
        for (var x = 0 ; x < variables.length ; x++) {
            tree.trackChanges();
            var node = new Telerik.Web.UI.RadTreeNode();
            node.set_text(variables[x]["Name"]);
            node.set_value(variables[x]["Name"]);
            node.get_attributes().setAttribute("Parent", "Variable");
            variablenode.get_nodes().add(node);
            tree.commitChanges();
        }

    }


    return false;
}




function SetValueRecords(sender, eventArgs) {
    //if (eventArgs.get_node().get_attributes().getAttribute("IsParent") == "1")
    //    return;
    if (eventArgs.get_node().get_attributes().getAttribute("IsParent") == "1" && $.isEmpty(eventArgs.get_node().get_attributes().getAttribute("FieldInfoID")))
        return;
    var selectedNode = eventArgs.get_node();
    var valueId = (eventArgs.get_node().get_attributes().getAttribute("IsParent") == "1" ? eventArgs.get_node().get_attributes().getAttribute("FieldInfoID") : eventArgs.get_node().get_value());
    var txt = $("#divPrValue").parent().find(".value");
    txt.removeAttr('title');
    txt.closest('TR').find(".query").hide();
    txt.show();
    if (selectedNode.get_value().toLowerCase() == "input" || selectedNode.get_value().toLowerCase() == "removesubquery") {
        txt.val("");
        txt.removeAttr("readonly");
        txt.focus();
        txt.attr('ValueSrc', 'Input')
        var fieldType = txt.closest('TR').find('.fields').attr('FieldType');
        applyFormatting(txt, fieldType, 'replace');
        $(document.body).append($("#divPrValue").hide());
        return;
    }
    else {
        txt.attr("readonly", "readonly");
        if (txt.closest('TR').find(".hasDatepicker").exists())
            txt.closest('TR').find(".value").removeClass('hasDatepicker');
        if (txt.closest('TR').find(".ui-datepicker-trigger").exists())
            txt.closest('TR').find(".ui-datepicker-trigger").hide();
        if (txt.closest('TR').find(".entity-time").exists())
            txt.closest('TR').find(".entity-time").hide();
    }

    var parentNode = selectedNode;
    while (parentNode.get_level() > 0) {
        parentNode = parentNode.get_parent();
    }

    var parentNodeValue = parentNode.get_attributes().getAttribute("Parent");
    var _s = "";
    if (parentNodeValue != null && parentNodeValue.toLowerCase() == "session") {
        _s = eventArgs.get_node().get_attributes().getAttribute('SessionEntity');
        txt.val(eventArgs.get_node().get_text());
        txt.attr('ValueFrom', valueId);
        txt.attr('ValueSrc', "SessionEntity");

        var obj = getEPText(eventArgs.get_node());
        txt.attr('title', obj.Title);
        txt.attr('ValueEntityPath', obj.EntityPath);
    }
    else if (parentNodeValue != null && parentNodeValue.toLowerCase() == "parameter") {
        txt.val(selectedNode.get_value());
        txt.attr('ValueFrom', selectedNode.get_value());
        txt.attr('ValueSrc', 'Parameter')
    }
    else if (parentNodeValue != null && parentNodeValue.toLowerCase() == "values") {

        var ddlfilter = txt.parent().prev().find(".filters").val().toLowerCase();
        var src = txt.attr("ValueSrc");

        if (src.toLowerCase() != "value")
            txt.val("");
        var valueFrom = "";
        if (ddlfilter == "equalto" || ddlfilter == "notequalto") {
            text = selectedNode.get_text();
            valueFrom = selectedNode.get_value();
            txt.val(text);
            txt.attr('ValueFrom', valueFrom);
            txt.attr('ValueSrc', 'Value');
            $(document.body).append($("#divPrValue").hide());
        }
        else {
            if (txt.val() != "") {
                text = txt.val() + ',' + selectedNode.get_text();
                valueFrom = txt.attr('ValueFrom') + ',' + selectedNode.get_value();
            }
            else {
                text = selectedNode.get_text();
                valueFrom = selectedNode.get_value();
            }
        }
        txt.val(text);
        txt.attr('ValueFrom', valueFrom);
        txt.attr('ValueSrc', 'Value');
        return;

    }
    else if (parentNodeValue.toLowerCase() == "checkbox") {
        var valueFrom = "";
        var text = "";
        text = selectedNode.get_text();
        valueFrom = selectedNode.get_text();
        txt.val(text);
        txt.attr('ValueFrom', valueFrom);
        txt.attr('ValueSrc', 'CheckBox');
    }
    else
        txt.attr('ValueSrc', 'Input');

    if (parentNodeValue.toLowerCase() == "subquery") {
        var srnotxt = txt.closest('TR').find(".srno").val();
        if (srnotxt == "" || srnotxt == "0") {
            alert("Please select field");
            return;
        }

        var data = new Object();
        data["LID"] = $.QS("ID");
        data["srno"] = srnotxt;
        data["PageType"] = "A";
        data["EID"] = $.QS("EID");
        data["SubMode"] = "Add";
        data["PageMode"] = "subquery";
        data["ParamCheck"] = paramCheck;
        data["sid"] = sid;
        PageMethods.LoadSubXml(data, OnSucLoadFrame);

    }
    if (parentNodeValue.toLowerCase() == "table" || parentNodeValue.toLowerCase() == "parent" || parentNodeValue.toLowerCase() == "usersession" || parentNodeValue.toLowerCase() == "companysession" || parentNodeValue.toLowerCase() == "decisionuser") {
        var value = eventArgs.get_node().get_attributes().getAttribute('FieldType');
        txt.attr('FieldType', value);
        txt.attr('FieldID', valueId);
        txt.val(eventArgs.get_node().get_text());
        txt.attr('ValueFrom', valueId);
        txt.attr('ValueSrc', parentNodeValue)
        var obj = getEPText(eventArgs.get_node());
        txt.attr('title', obj.Title);
        txt.attr('ValueEntityPath', obj.EntityPath);
    }

    var iswf = parentNode.get_attributes().getAttribute("WF");
    var wfName = parentNode.get_attributes().getAttribute("EPName");
    if (iswf == 1 || (parentNodeValue != null && parentNodeValue.toLowerCase() == "variable")) {
        txt.val(selectedNode.get_value());
        txt.attr('ValueFrom', selectedNode.get_value());
        txt.attr('ValueSrc', 'Variable')
        txt.attr('WFName', selectedNode.get_value());
    }
    else if (iswf == "0") {
        var value = eventArgs.get_node().get_attributes().getAttribute('FieldType');
        txt.attr('FieldType', value);
        txt.attr('FieldID', valueId);
        txt.val(eventArgs.get_node().get_text());
        txt.attr('ValueFrom', valueId);
        txt.attr('ValueSrc', "WFEntities")
        var obj = getEPText(eventArgs.get_node());
        txt.attr('title', obj.Title);
        txt.attr('ValueEntityPath', obj.EntityPath);
        txt.attr('WFEID', obj.WFEID);
        txt.attr('WFName', wfName);
    }

    else {
        txt.attr('WFName', "");
    }

    txt.attr('SessionID', _s);
    $(document.body).append($("#divPrValue").hide());
}


function OnSucLoadFrame(result) {
    var prID = "";
    if ($("#<%= ddlTable.ClientID %>").isVisible())
        prID = $("#<%= ddlTable.ClientID %>").val();
    else
        prID = $.QS("EID");
    var url = "Filters_Add.aspx?PageMode=subquery&WF=" + $.QS("WF") + "&WFEID=" + $.QS("WFEID") + "&PrID=" + prID + "&SID=" + sid;
    $('#<%= Iframe1.ClientID %>').attr('src', url);
    $("#divSubquery").show();
}



function format() {
    $("#tblFilter").find('TR').each(function () { formatValueCell($(this)) });
}

function formatValueCell(tr) {
    var txtValue = tr.find(".value");
    var datatype = tr.find(".fields").attr('FieldType').toLowerCase();
    applyFormatting(txtValue, datatype, 'Apply');
}



function applyFormatting(txt, datatype, mode) {
    var txtField = "";
    var txtValue = "";
    if (mode.toLowerCase() == "apply") {
        txtValue = txt;
        if (datatype == "date" || datatype == "datetime") {

            var txtFilter = txtValue.parent().closest('TR').find(".filters");
            var btnQuery = txtValue.parent().closest('TR').find("#btnQuery");
            if (btnQuery.isVisible())
                return;
            var attr = txtFilter.val();
            var isenable = $('#<%= ddlFilters.ClientID %>').find("option[value ^= '" + attr + "']").attr('txtEnable');
            if (isenable == "1") {
                if (attr.contains("?"))
                    datatype = "number";
            }
            else {
                datatype = "number";
            }

            var valuesrc = $.defaultVal(txtValue.parent().closest('TR').find(".value").attr('ValueSrc'), '');
            if (valuesrc != '' && valuesrc.toLowerCase() != 'input') {
                datatype = "";
                txtValue.parent().closest('TR').find(".value").attr('readonly', 'readonly');
            }

        }
    }
    else if (mode.toLowerCase() == "replace") {
        txtValue = txt;

        txtField = txt;
        txtValue = txtField.closest('TR').find(".value");
        $(txtValue).val('');
        var btnQuery = txtValue.parent().closest('TR').find("#btnQuery");
        if (btnQuery.isVisible()) {
            btnQuery.hide();
            txtValue.show();
        }

        txtValue.autoNumeric("destroy").datetimepicker("destroy").datepicker("destroy").data("TimePicker") ? txtValue.timepicker("destroy") : ""
        datatype = datatype.toLowerCase();
    }
    if (datatype == "number")
        txtValue.autoNumeric('init', { mDec: 0, aSep: '' });
    else if (datatype == "decimal")
        txtValue.autoNumeric('init', { mDec: 2, aPad: false, aSep: '' });
    else if (datatype == "percent")
        txtValue.autoNumeric('init', { mDec: 2, aPad: false, aSep: '', aSign: ' %', pSign: 's' });
    else if (datatype == "currency")
        txtValue.autoNumeric('init', { mDec: 2, dGroup: 2, aSign: ' Rs.', pSign: 's' });
    else if (datatype == "date") {
        txtValue.datepicker({ showOn: "button", buttonImage: "../images/date.png", buttonImageOnly: true, dateFormat: "<%= SensysErp.Utility.Utils.JqDateFormat(ErpModel.Globals.Users.Culture.ShortDateFormat) %>" });
    }
    else if (datatype == "datetime")
        txtValue.datetimepicker({ showOn: "button", buttonImage: "../images/date.png", buttonImageOnly: true, dateFormat: "<%= SensysErp.Utility.Utils.JqDateFormat(ErpModel.Globals.Users.Culture.ShortDateFormat) %>", scrollbar: true, dropdown: false });
    else if (datatype == "time")
        txtValue.timepicker({ scrollbar: true, dropdown: false });
}


function hidePopUp() {
    $("#divSubquery").hide();
    return false;
}

function LoadFieldsOfSelectedTable(sender, eventargs) {
    if (!$.isEmpty(ddlSubTableID) && ddlSubTableID != $(sender).val()) {
        if (!confirm('All current filters will be removed. Do you wish to Continue?')) {
            $(sender).val(ddlSubTableID)
            return;
        }
        //$("#tblFilter").find("TR").remove();
        myFilterModel.removeAll();
        myFilterModel.addTask();
        $("#<%=txtExprFormat.ClientID%>").val("")
    }

    ddlSubTableID = $(sender).val();
    var data = new Object();
    var data1 = new Object();
    $("#<%= txtTargetField.ClientID %>").val('');
    $("#<%= txtTargetField.ClientID %>").attr('entitypath', '');
    $("#<%= txtTargetField.ClientID %>").attr('val', '');
    data1["Type"] = "LoadFieldInfoTree";
    data1["@TableName"] = $(sender).val();
    data1["EntityText"] = $(sender).selectedItem().text();
    PageMethods.LoadTreeForSubquery(data1, OnSuccessLoadTree);
}
function OnSuccessLoadTree(result) {
    var tree = $find('<%= tvRelated.ClientID %>');
    tree.get_nodes().clear();
    tree.trackChanges();
    if (result != null) {
        for (var i = 0; i < result.length; i++) {

            var node = new Telerik.Web.UI.RadTreeNode();
            node.set_text(result[i].Text);
            node.set_value(result[i].Value);

            node.get_attributes().setAttribute("IsParent", $.defaultVal(result[i].Attributes["IsParent"], ""));
            node.get_attributes().setAttribute("FieldName", $.defaultVal(result[i].Attributes["FieldName"], ""));
            node.get_attributes().setAttribute("Parent", $.defaultVal(result[i].Attributes["Parent"], ""));
            node.get_attributes().setAttribute("ParentTable", $.defaultVal(result[i].Attributes["ParentTable"], ""));


            if ($.defaultVal(result[i].Attributes["IsParent"], "") == "1")
                node.set_expandMode(3);

            if ($.defaultVal(result[i].Attributes["Parent"], "") != "") {
                var parent = $.defaultVal(result[i].Attributes["Parent"], "");
                var targetNode = tree.findNodeByValue(parent);
                targetNode.get_nodes().add(node);
            }
            else
                tree.get_nodes().add(node);

        }
    }
    tree.commitChanges();
}
function OnSuccess(result) {
    try {
        var ddl = $("#<%= ddlTargetField.ClientID %>");
        ddl.find('option').remove();
        if (ddl.options != undefined)
            ddl.options.clear();
        for (var i = 0; i < result.length - 2; i = i + 2) {
            var a = $("<option value='" + result[i] + "' >" + result[i + 1] + "</option>")
            ddl.append(a);
        }
    }
    catch (e) {
        alert(e);
    }
}
function saveSubXml(subqueryXml, srno, subquery) {
    hidePopUp();
    $("#tblFilter").find('TR').each(function () {
        var txtsrno = $(this).find('.srno');
        if (txtsrno.val() == srno) {
            var txtvalue = $(this).find('.value');
            txtvalue.val(subquery);
            txtvalue.attr('ValueFrom', srno);
            txtvalue.attr('ValueSrc', 'SubQuery');
            txtvalue.hide();
            var link = txtvalue.parent().find('.query');
            link.attr('SubQueryMode', 'justAdded');
            link.show();
            link.attr('title', subquery);
            var hdn = txtvalue.parent().find('.hdnsubxml');
            hdn.val(subqueryXml);
            return false;
        }

    });
    return false;
}

function saveFilterData(filterXml) {
    parent.saveFilterXml(filterXml);
    return false;
}



function showFilterDiv(mode) {
    var hdnReportName = $("#<%= hdnReportName.ClientID %>");
    var hdnDesc = $("#<%= hdnDesc.ClientID %>");
    var ReportName = $("#<%= txtViewName.ClientID %>");
    var Desc = $("#<%= txtDesc.ClientID %>");
    ReportName.val(hdnReportName.val());
    Desc.val(hdnDesc.val());
    if (mode == "Save") {
        if (ReportId == "") {

            $('#divViewDetails').data('Mode', 'Save');
            $('#divViewDetails').ShowModal();
        } else {

            $('#divViewDetails').data('Mode', 'Save');
            createXml(null, 'main');
        }
    }
    else if (mode == "SaveAs") {
        ReportName.val('Copy-' + hdnReportName.val());
        Desc.val(hdnDesc.val());
        $('#divViewDetails').data('Mode', 'SaveAs');
        $('#divViewDetails').ShowModal();
    }
    else if (mode == "Prop") {
        $('#divViewDetails').data('Mode', 'Prop');
        $('#divViewDetails').ShowModal();
    }
    return false;
}
function OnClientTabSelected(sender, args) {
    var tab = args.get_tab();
    var value = tab.get_value();
    if (value.toLowerCase() == "roles") {
        $("#<%= ifrmRole.ClientID%>")[0].contentWindow.showDiv('Role');
    }
    else if (value.toLowerCase() == "permission") {
        $("#<%= ifrmRole.ClientID%>")[0].contentWindow.showDiv('Permission');
    }
}



function showSearchList(ctl) {

    var ctr = _initSearchList(ctl);
    var txt = $(ctl.closest('#divPrValue').parent().find('.value'));
    var pos = txt.getOffset();
    ctr.css({ top: pos.bottom + 5, left: pos.left });

    window.setTimeout(function () { ctr.show(); }, 100);
    ctr.data("CurrentField", txt);

    var ddlfilter = txt.parent().prev().find(".filters").val().toLowerCase();
    if (ddlfilter == "equalto" || ddlfilter == "notequalto")
        ctr.data("Multi", false);
    else
        ctr.data("Multi", true);
    $(document.body).append($("#divPrValue").hide());
    return false;
}
function SelectItem(recID, text) {
    var divCtr = $("#divSearchListCtr");
    var fld = $(divCtr.data("CurrentField"));
    if (fld.data("Multi") == true) {
        setTextFromFilter(recID, text, fld);
        divCtr.css("top", fld.getOffset().bottom + 5);
    }
    else {
        setTextFromFilter(recID, text, fld);

    }
}
function addItem(item, data) {
}

function _initSearchList(ctl) {
    var divCtr = $("#divSearchListCtr");
    if (!divCtr.exists()) {
        divCtr = $("<div id='divSearchListCtr'  class='ui-widget-content'><div class='sl-div-top' style='text-align:center'></div><div ></div></div>");
        $(document.body).append(divCtr);
        divCtr.hide();
        $(document).on("click", function () { divCtr.hide(); })
        divCtr.on("click", function (e) { e.stopPropagation(); });
    }
    _loadSearchGrid();
    return divCtr;
}
function _loadSearchGrid() {
    var divCtr = $("#divSearchListCtr");
    var ifrCtr = divCtr.node(1);
    ifrCtr.find("iframe").hide();
    var ifr = "";
    var eid = "";
    if ($.QS("PageMode") == "subquery")
        eid = $("#<%= ddlTable.ClientID %>").val();
    else
        eid = $.QS("EID");
    ifr = ifrCtr.find("#ifr_" + eid);
    if (!ifr.exists()) {
        ifrCtr.append("<iframe id='ifr_" + eid + "' style='width:100%;height:450px' src='../Main/list.aspx?EID=" + eid + "'  frameborder='0'></iframe>");
    }
    else
        ifr.show();
}

function setTextFromFilter(valueFrom, text, ctl) {
    var txt = $(ctl);
    var ddlfilter = txt.parent().prev().find(".filters").val().toLowerCase();
    if (ddlfilter == "equalto" || ddlfilter == "notequalto") {
        txt.val(text);
        txt.attr('ValueFrom', valueFrom);
        txt.attr('ValueSrc', 'Value');
        $("#divSearchListCtr").hide();
    }
    else {
        if (txt.val() != "") {
            text = txt.val() + ',' + text;
            valueFrom = txt.attr('ValueFrom') + ',' + valueFrom;
        }
        else {
            text = text;
            valueFrom = valueFrom;
        }

        txt.val(text);
        txt.attr('ValueFrom', valueFrom);
        txt.attr('ValueSrc', 'Value');
    }
}

function toggleTargetField() {
    var chk = $("#<%= chkMultiple.ClientID %>").checked();
    var _t = $("#<%= txtTargetField.ClientID %>");
    var _tm = $("#<%= txtTargetFieldMultiple.ClientID %>");
    if (chk) {
        _t.hide();
        _tm.show();
    }
    else {
        _t.show();
        _tm.hide();
    }
}

function enableTargetField(chk) {
    var _t = $("#<%= txtTargetField.ClientID %>");
    var _tm = $("#<%= txtTargetFieldMultiple.ClientID %>");

    
    if ($(chk).node(0).checked()) {
        _t.hide();
        _tm.show();
    }
    else {
        _t.show();
        _tm.hide();
    }
}


        function ResizeValueTextBox() {
            var tbl = $("#tblFilter");
            $("#tblFilter").find('td[class=tv]').each(function () {
                var txt = $(this).find(".value");
                var chk = $(this).find(".chkvalue");
                if (chk.isVisible())
                    $(txt).width('98px');
                else
                    $(txt).width('');

            });
        }
        function setIsRepeated() {
            $("#tblFilter").find(".chkvalue[r_chk=1]").each(
                function () {
                    $(this).node(0).checked(true);
                }
                )
            ;
        }
        function ShowDocument() {

            window.open("Documentation_Add.aspx?PageType=E&ID=" + $.QS("ID") + "&ModeType=Filters&Hdr=" + $("#<%= txtViewName.ClientID %>").val());
            return false;
        }
    </script>
</asp:Content>


