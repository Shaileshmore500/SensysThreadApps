<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="FieldInfo_Add.aspx.cs" Inherits="SensysErp.Meta.FieldInfo_Add"
    ValidateRequest="false" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

    <%# HelperLib.Web.WebResources.GetResource("~/css/layout_grid.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/knockout-2.2.1.js")%>

    <script type="text/javascript">

        var dbCols = [];
        var dispname = "";
        var entitypath = "";
        var reservedKeywords = ["recordid",
            "entityname",
            "_preview",
            "IsDemoData",
            "IsDeactivated",
            "IsDeleted",
            "IsSystemDefined",
            "createdDate",
            "createdBy_User_Fid",
            "modifiedDate",
            "modifiedBy_User_Fid",
            "IsLocked",
            "OwnerUser_Fid"];
        var arrUniqueData = [];
    </script>

    <style type="text/css">
        .document:before
        {
            content: "\f15c";
            font-family: fontawesome;
            margin-right: 3px;
        }

        .document:hover
        {
            color: red;
        }

        #tvCtrEnt, #divDependency
        {
            position: absolute;
            display: none;
            width: 224px;
            height: 295px;
            background-color: #FAFAFA;
            border: solid 2px #D0D0D0;
            z-index: 10;
            box-shadow: 2px 2px 5px #555;
            overflow-y: auto;
            overflow-x: hidden;
        }

        .DarkTheme #tvCtrEnt, .DarkTheme #divDependency
        {
            background-color: #4D4D4D;
            border: solid 2px #747474;
            box-shadow: 2px 2px 5px #0A0A0A;
        }

        A.lnkEdt
        {
            color: #00A635;
            text-decoration: none;
            font-size: 14px;
            font-weight: normal;
        }

        .lnkEdt:hover
        {
            color: red;
        }

        .lnkEdt.hasData
        {
            color: red;
        }

        .lnkEdt:before
        {
            content: "\f044";
            font-family: fontawesome;
            margin-right: 3px;
        }

        .chkX
        {
            padding-left: 0px !important;
        }

            .chkX > Label
            {
                margin-right: 10px;
                display: inline-block;
                vertical-align: middle;
            }

        .dispBorder
        {
            border-color: red !important;
        }

        .divAdvFilter
        {
            display: none;
        }
    </style>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
            <div class="div-form">
                <div class="cmdPanel" style="font-family: nunitoregular; font-size: 18px; padding: 5px 10px 5px 0px; display: inline-block; margin-bottom: 12px; border-radius: 8px;">
                    <asp:Label ID="lblFieldType" runat="server"></asp:Label>
                    <span style="float: right; color: #7C7C7C; font-size: 12px;">
                        <asp:CheckBox ID="chkDeactivate" CssClass="chkX td-label" runat="server" TextAlign="Left" Text="Deactivate this field" /></span>
                </div>
                <asp:Panel ID="pnlFieldInfo" runat="server">
                    <telerik:RadTabStrip ID="tabAccessControl" runat="server" MultiPageID="mpFieldCtr">
                        <Tabs>
                            <telerik:RadTab runat="server" PageViewID="pvBasic" Text="Field Information" Selected="true" Value="page"></telerik:RadTab>
                            <telerik:RadTab runat="server" PageViewID="pvAdvanced" Text="Advanced Settings" Value="settings"></telerik:RadTab>
                            <telerik:RadTab runat="server" PageViewID="pvRender" Text="Other Settings" Value="menu"></telerik:RadTab>
                        </Tabs>
                    </telerik:RadTabStrip>
                    <br />
                    <telerik:RadMultiPage Height="95%" SelectedIndex="0" ID="mpFieldCtr" runat="server">
                        <telerik:RadPageView Selected="true" ID="pvBasic" runat="server">
                            <div>
                                <h3>General Information</h3>
                                <div class="div-form" style="width: initial; background-color: transparent; background-image: none">
                                    <table class="fieldinfo table-form">
                                        <tr>
                                            <td class="td-label">
                                                <asp:Label ID="lblDisName" runat="server" Text="Display Name"></asp:Label>
                                            </td>
                                            <td class="td-value">
                                                <asp:TextBox ID="txtDisName" runat="server" onblur="return ValidateCodeName(0)">
                                                </asp:TextBox>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td-label">
                                                <asp:Label ID="lblFldName" runat="server" Text="Field Name"></asp:Label>
                                            </td>
                                            <td class="td-value">
                                                <asp:TextBox ID="txtFldName" runat="server" onblur="return ValidateCodeName(1)">
                                                </asp:TextBox>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td-label">
                                                <asp:Label ID="Label8" runat="server" Text="Description"></asp:Label>
                                            </td>
                                            <td class="td-value">
                                                <asp:TextBox ID="txtDescription" Style="width: 515px" Rows="4" TextMode="MultiLine" runat="server">
                                                </asp:TextBox>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td class="td-value">
                                                <asp:LinkButton ID="lnkDocument" CssClass="document" runat="server" OnClientClick="return ShowDocument();" Text="Documentation"></asp:LinkButton>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td-label">
                                                <asp:Label ID="lblTooltip" runat="server" Text="Tool Tip"></asp:Label>
                                            </td>
                                            <td class="td-value">
                                                <asp:TextBox ID="txtToolTip" Style="width: 515px" Rows="4" TextMode="MultiLine" runat="server">
                                                </asp:TextBox>
                                            </td>
                                        </tr>

                                        <tr id="trMandatory">
                                            <td class="td-label">
                                                <asp:Label ID="lblMandatory" runat="server" Text="Mandatory"></asp:Label>
                                            </td>
                                            <td class="td-value">
                                                <telerik:RadComboBox Width="205px" ID="rcbMandatory" runat="server">
                                                    <Items>
                                                        <telerik:RadComboBoxItem Text="No" Value="0" />
                                                        <telerik:RadComboBoxItem Text="Yes" Value="1" />
                                                        <telerik:RadComboBoxItem Text="Yes (System Defined)" Value="2" />
                                                    </Items>
                                                </telerik:RadComboBox>
                                            </td>
                                        </tr>
                                        <tr id="trUnique" runat="server">

                                            <td colspan="2" class="td-value">
                                                <asp:CheckBox ID="chkUnique" CssClass="chkX td-label" onchange="toggleMultiList()" runat="server" TextAlign="Left" Text='Mark this field as "Unique" (Duplicate entry will not be allowed)' />
                                            </td>
                                        </tr>
                                        <tr id="trUnique1" runat="server">
                                            <td colspan="2" class="td-value">
                                                <span class="headingDetails">Choose fields for checking unique</span>
                                                <div id="multiUnique" style="width: 450px; margin-left: 35px;"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" class="td-value">
                                                <asp:CheckBox ID="chkDescript" CssClass="chkX td-label" runat="server" TextAlign="Left" Text='Mark this field as "Descriptive" (Record will be identified and described by this field)' />
                                            </td>
                                        </tr>

                                        <tr style="display: none">
                                            <td></td>
                                            <td class="td-value">
                                                <asp:CheckBox ID="chkSystem" runat="server" Text="Is System defined" />
                                            </td>
                                        </tr>
                                        <tr id="trResVersion" runat="server">
                                            <td class="td-label">
                                                <asp:Label ID="Label2" runat="server" Text="Resource Version"></asp:Label>
                                            </td>
                                            <td class="td-value">
                                                <telerik:RadNumericTextBox ID="txtResVersion" runat="server"></telerik:RadNumericTextBox>
                                            </td>
                                        </tr>

                                    </table>
                                </div>
                            </div>
                            <div>
                                <h3>Field Information</h3>
                                <div class="div-form" style="width: initial; background-color: transparent; background-image: none">
                                    <table id="tblFieldInfo" class="fieldinfo table-form">
                                        <tr id="trType" runat="server">
                                            <td class="td-label">
                                                <asp:Label ID="lblFldType" runat="server" Text="Field Type"></asp:Label>
                                            </td>
                                            <td class="td-value">
                                                <telerik:RadComboBox ID="rcbFieldType" runat="server" AutoPostBack="true" Width="200px" OnSelectedIndexChanged="rcbFieldType_SelectedIndexChanged"></telerik:RadComboBox>
                                            </td>
                                        </tr>
                                        <tr id="trMask" runat="server">
                                            <td class="td-label">
                                                <asp:Label ID="lblmask" runat="server" Text="Masked Text"></asp:Label>
                                            </td>
                                            <td class="td-value">
                                                <asp:TextBox ID="txtMask" runat="server"></asp:TextBox>
                                            </td>
                                        </tr>
                                        <tr id="trPass" runat="server">
                                            <td></td>
                                            <td class="td-value">
                                                <asp:CheckBox ID="chkPasswordEncrypt" CssClass="chkX td-label" runat="server" TextAlign="Left" Text="Encrypt this field." />
                                            </td>
                                        </tr>
                                        <tr id="trSpecified" runat="server">
                                            <td></td>
                                            <td class="td-value">
                                                <asp:RadioButtonList ID="rblSpecified" runat="server" RepeatDirection="Horizontal" onchange="return Specified(this)">
                                                    <asp:ListItem Text="Length Specified" Value="0" Selected="True"></asp:ListItem>
                                                    <asp:ListItem Text="Length not Specified" Value="1"></asp:ListItem>
                                                </asp:RadioButtonList>
                                            </td>
                                        </tr>
                                        <tr id="trDynamic0" runat="server">
                                            <td class="td-label">
                                                <asp:Label ID="Label6" runat="server" Text="Data Type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"></asp:Label>
                                            </td>
                                            <td class="td-value">
                                                <telerik:RadComboBox ID="rcbDynDataType" runat="server" OnClientSelectedIndexChanged="rcbDynDataType_OnClientSelectedIndexChanged">
                                                    <Items>
                                                        <telerik:RadComboBoxItem Text="Text" Value="Text" />
                                                        <telerik:RadComboBoxItem Text="Number" Value="Number" />
                                                        <telerik:RadComboBoxItem Text="Decimal" Value="Decimal" />
                                                        <telerik:RadComboBoxItem Text="Currency" Value="Currency" />
                                                        <telerik:RadComboBoxItem Text="Percent" Value="Percent" />
                                                        <telerik:RadComboBoxItem Text="Date" Value="Date" />
                                                        <telerik:RadComboBoxItem Text="Checkbox" Value="Checkbox" />
                                                    </Items>
                                                </telerik:RadComboBox>
                                            </td>
                                        </tr>
                                        <tr id="trRounding0" runat="server">
                                            <td class="td-label">
                                                <asp:Label ID="lblRounding" runat="server" Text="Rounding Style"></asp:Label>
                                            </td>
                                            <td class="td-value">
                                                <telerik:RadComboBox ID="rcbRounding" runat="server" Width="80px" OnClientSelectedIndexChanged="rcbRounding_OnClientSelectedIndexChanged">
                                                    <Items>
                                                        <telerik:RadComboBoxItem Text="Company Defined" Value="CD" />
                                                        <telerik:RadComboBoxItem Text="Setting Defined" Value="SD" />
                                                        <telerik:RadComboBoxItem Text="No Rounding" Value="-1" />
                                                        <telerik:RadComboBoxItem Text="0" Value="0" />
                                                        <telerik:RadComboBoxItem Text="1" Value="1" />
                                                        <telerik:RadComboBoxItem Text="2" Value="2" />
                                                        <telerik:RadComboBoxItem Text="3" Value="3" />
                                                        <telerik:RadComboBoxItem Text="4" Value="4" />
                                                        <telerik:RadComboBoxItem Text="5" Value="5" />
                                                        <telerik:RadComboBoxItem Text="6" Value="6" />
                                                        <telerik:RadComboBoxItem Text="7" Value="7" />
                                                        <telerik:RadComboBoxItem Text="8" Value="8" />
                                                        <telerik:RadComboBoxItem Text="9" Value="9" />
                                                        <telerik:RadComboBoxItem Text="10" Value="10" />
                                                    </Items>
                                                </telerik:RadComboBox>
                                                <telerik:RadComboBox ID="rcbRoundingType" Width="195px" runat="server">
                                                    <Items>
                                                        <telerik:RadComboBoxItem Text="Rounding Off" Value="R" />
                                                        <telerik:RadComboBoxItem Text="Rounding Off to Next Upper" Value="N" />
                                                        <telerik:RadComboBoxItem Text="Rounding Off to Previous Lower" Value="P" />
                                                    </Items>
                                                </telerik:RadComboBox>
                                                <asp:TextBox ID="txtRoundingSettings" runat="server" Width="250px" ReadOnly="false"></asp:TextBox>
                                            </td>
                                        </tr>
                                        <tr id="fldLenght" runat="server">
                                            <td class="td-label">
                                                <asp:Label ID="lblFieldLength" runat="server" Text="Field Length"></asp:Label>
                                            </td>
                                            <td class="td-value">
                                                <telerik:RadNumericTextBox ID="ntxtFldLength" runat="server" ShowSpinButtons="false" IncrementSettings-Step="1" MinValue="0"
                                                    MaxValue="999999999">
                                                    <NumberFormat DecimalDigits="0" />
                                                </telerik:RadNumericTextBox>
                                            </td>
                                        </tr>
                                        <tr id="trVarchar" runat="server" visible="false">
                                            <td colspan="2" class="td-value">
                                                 <asp:CheckBox ID="chkVarchar" runat="server" CssClass="chkX td-label" TextAlign="Left"  Text="Create Varchar Field"  />                                                
                                            </td>
                                        </tr>
                                        <tr id="trCriteria" runat="server">
                                            <td class="td-label">Criteria </td>
                                            <td>
                                                <table style="margin-top: -7px;">
                                                    <tr>
                                                        <td style="vertical-align: top; padding: 0;" class="td-label">
                                                            <div class="divCriteriaCss">
                                                                <table id="tblCriteria">
                                                                    <tr class="trCriteria">
                                                                        <td class="td-value">
                                                                            <a href="javascript:void(0)" onclick="return LaunchCriteriaFilter(this)" class="default-link" id="crno">Criteria No 1</a>
                                                                        </td>
                                                                        <td>&nbsp;&nbsp;&nbsp;</td>
                                                                        <td class="td-value">
                                                                            <a href="javascript:void(0)" onclick="return LaunchCriteriaCode(this)" class="default-link" id="crcode">Settings</a>
                                                                        </td>
                                                                        <td>
                                                                            <a class="close" title="Delete" href="javascrpt:void(0)" onclick="return CriteriaDelete(this)">X</a>
                                                                        </td>
                                                                        <td>
                                                                            <div class="divCriteriaFilterValue" style="display: none"></div>
                                                                            <div class="divCriteriaCodeValue" style="display: none"></div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                            <a href="javascript:void(0)" onclick="return AddNewCriteria(this)" style="color: #F00; margin-left: 5px; font-size: 15px;" class="default-link">Add New Criteria</a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr id="trCurrency" runat="server">
                                            <td class="td-label">
                                                <asp:Label ID="lblCurrencyList" runat="server" Text="Currency List"></asp:Label>
                                            </td>
                                            <td class="td-value" colspan="4">
                                                <telerik:RadComboBox ID="rcbCurrencyList" Width="205px" runat="server" EmptyMessage="Select Currency" OnClientSelectedIndexChanged="rcbCurrencyList_ClientSelectedIndexChanged">
                                                </telerik:RadComboBox>
                                                <asp:TextBox ID="txtCurrencySetting" runat="server" Width="250px" ReadOnly="false"></asp:TextBox>
                                            </td>
                                        </tr>
                                        <tr id="trCalculate" runat="server">
                                            <td class="td-label">
                                                <asp:Label ID="lblCal" runat="server" Text="Calculation Type"></asp:Label>
                                            </td>
                                            <td class="td-value">
                                                <telerik:RadComboBox Width="205px" ID="rcbCalculation" runat="server"></telerik:RadComboBox>
                                            </td>
                                        </tr>
                                        <tr id="trChkYes" runat="server">
                                            <td class="td-label">
                                                <asp:Label ID="Label4" runat="server" Text="Yes Text"></asp:Label>
                                            </td>
                                            <td class="td-value">
                                                <asp:TextBox ID="txtChkYes" runat="server"></asp:TextBox>
                                            </td>
                                        </tr>
                                        <tr id="trChkNo" runat="server">
                                            <td class="td-label">
                                                <asp:Label ID="Label5" runat="server" Text="No Text"></asp:Label>
                                            </td>
                                            <td class="td-value">
                                                <asp:TextBox ID="txtChkNo" runat="server"></asp:TextBox>
                                            </td>
                                        </tr>
                                        <tr id="MultiOption" runat="server">
                                            <td class="td-label">
                                                <asp:Label ID="lblSource" runat="server" Text="Select Source"></asp:Label>
                                            </td>
                                            <td class="td-value">
                                                <telerik:RadComboBox ID="rcbMultiSourceOption" runat="server" Width="205px" OnClientSelectedIndexChanged="ShowSourceOption">
                                                    <Items>
                                                        <%--<telerik:RadComboBoxItem Text="Select Option" Value="0" />--%>
                                                        <telerik:RadComboBoxItem Text="Table" Value="table" />
                                                        <telerik:RadComboBoxItem Text="Array" Value="array" />
                                                        <%--<telerik:RadComboBoxItem Text="Predefined" Value="predef" />--%>
                                                    </Items>
                                                </telerik:RadComboBox>
                                            </td>
                                        </tr>
                                        <tr id="RenderOption" runat="server">
                                            <td class="td-label">
                                                <asp:Label ID="lblRender" runat="server" Text="Render Mode"></asp:Label>
                                            </td>
                                            <td class="td-value">
                                                <telerik:RadComboBox ID="rcbRenderMode" Width="205px" runat="server">
                                                    <Items>
                                                        <telerik:RadComboBoxItem Text="Dropdown List" Value="dropdown" />
                                                        <telerik:RadComboBoxItem Text="Vertical List" Value="vertical" />
                                                        <telerik:RadComboBoxItem Text="Horizontal List" Value="horizontal" />
                                                    </Items>
                                                </telerik:RadComboBox>
                                            </td>
                                        </tr>
                                        <tr id="trSingleChk">
                                            <td class="td-label"></td>
                                            <td class="td-value">
                                                <asp:CheckBox ID="chkAllowCustomforSingle" runat="server" Text="Allow User to add Items" />
                                            </td>
                                        </tr>
                                        <tr id="pnlSrcTbl0" runat="server" class="srcTable">

                                            <td class="td-label">
                                                <asp:Label ID="lbltbl" runat="server" Text="Select Table"></asp:Label>
                                            </td>
                                            <td class="td-value">
                                                <asp:TextBox ID="txtEntity" runat="server" ReadOnly="true"></asp:TextBox>
                                                <asp:TextBox ID="txtMixEntity" runat="server" ReadOnly="true"></asp:TextBox>
                                                <div id="tvCtrEnt">
                                                    <telerik:RadTreeView ID="tvEntity" OnClientNodeClicked="selectEntity" runat="server" CheckBoxes="true" OnClientNodeChecked="selectEntity">
                                                    </telerik:RadTreeView>
                                                </div>
                                                <%--<telerik:RadComboBox ID="rcbTable" runat="server" OnSelectedIndexChanged="rcbTable_SelectedIndexChanged" AutoPostBack="true" Visible="false">
                                    </telerik:RadComboBox>--%>
                                                <a id="btnRecordFilter" class="lnkEdt" href="javascript:void(0)" onclick="return OpenRecordFilter()">Show Record Filter</a>
                                            </td>

                                        </tr>
                                        <tr class="srcTable" style="display: none">
                                            <td class="td-label" style="display: none">
                                                <asp:Label ID="lbltblField" runat="server" Text="Select Key Field"></asp:Label>
                                            </td>
                                            <td class="td-value" style="display: none">
                                                <telerik:RadComboBox ID="rcbTableField" Width="205px" runat="server">
                                                </telerik:RadComboBox>
                                            </td>
                                        </tr>
                                        <tr id="pnlSrcTbl1" runat="server" class="srcTable">

                                            <td class="td-label">
                                                <asp:Label ID="lblDispField" runat="server" Text="Select Calculate On"></asp:Label>
                                            </td>
                                            <td class="td-value">
                                                <telerik:RadComboBox ID="rcbTableDisplay" Width="205px" runat="server" OnClientItemsRequesting="OnClientItemsRequesting_TableFields" EnableLoadOnDemand="true" EnableVirtualScrolling="true" OnClientSelectedIndexChanged="rcbTableDisplay_OnClientSelectedIndexChanged">
                                                    <WebServiceSettings Method="GetTableFields" Path="FieldInfo_Add.aspx" />
                                                </telerik:RadComboBox>
                                                <asp:HiddenField ID="hdnTblFiled" runat="server" />

                                            </td>

                                        </tr>
                                        <tr id="pnlDis" runat="server" class="srcTable">

                                            <td class="td-label">
                                                <asp:Label ID="Label1" runat="server" Text="Select Form Code"></asp:Label>
                                            </td>
                                            <td class="td-value">
                                                <telerik:RadComboBox ID="rcbFCode" runat="server" OnClientItemsRequesting="OnClientItemsRequesting" Width="205px" EnableLoadOnDemand="true" EnableAutomaticLoadOnDemand="true">
                                                    <WebServiceSettings Method="GetTargetFields_FormCode" Path="FieldInfo_Add.aspx" />
                                                </telerik:RadComboBox>
                                            </td>

                                        </tr>
                                        <tr id="pnlArray1" runat="server" class="srcArray">

                                            <td style="vertical-align: top" class="td-label">
                                                <asp:Label ID="lblList" runat="server" Text="List of Array Items"></asp:Label>
                                            </td>
                                            <td class="td-value">
                                                <telerik:RadListBox ID="rlbArray" runat="server" AllowDelete="true" Width="350px" Height="130px" AllowTransfer="false" AllowReorder="true">
                                                    <ButtonSettings Position="Right" ShowReorder="true" RenderButtonText="true" VerticalAlign="Top" AreaWidth="125px" />
                                                </telerik:RadListBox>
                                            </td>

                                        </tr>
                                        <tr class="srcPredef" id="pnlPredef" runat="server">

                                            <td class="td-label">
                                                <asp:Label ID="lblPredef" runat="server" Text="Predefined List"></asp:Label>
                                            </td>
                                            <td class="td-value">
                                                <telerik:RadComboBox ID="rcbPredef" Width="205px" runat="server">
                                                </telerik:RadComboBox>
                                            </td>

                                        </tr>

                                        <tr id="trDynamic1" runat="server">
                                            <td class="td-label"></td>
                                            <td class="td-value">
                                                <asp:CheckBox ID="chkDynamicAdvanced" runat="server" Text="Advanced" onclick="return ShowAdvancedFilterLink()" />
                                            </td>
                                        </tr>
                                        <tr id="trDynamic2" runat="server">
                                            <td class="td-label">
                                                <asp:Label ID="lblAdv" runat="server" Text="Filter"></asp:Label>
                                            </td>
                                            <td class="td-value">
                                                <div id="divAdvFilter">
                                                    <a id="AdvLink" href="javascript:void(0)" class="lnkEdt" onclick="return LaunchAdvancedFilter(this)">Select Field</a>
                                                </div>
                                                <div id="divSimpleFilter">
                                                    <telerik:RadTextBox ID="txtSimpleFilter" runat="server" Width="388px" TextMode="MultiLine" Height="45px"></telerik:RadTextBox>
                                                    <%--<telerik:RadEditor ID="RadEditor1" runat="server" Skin="Office2007" OnClientPasteHtml="PasteCancel" ToolbarMode="Default" EditModes="Design" Width="450px" Height="27px" ContentFilters="None">
                                                    </telerik:RadEditor>--%>
                                                    <%--<span id="spnDescription"></span>--%>
                                                    <div class="divAdvTreeSimple" title="Show Field Tree" style="cursor: pointer;" onclick="ShowDynamicTree(this, 'Simple')">&#xf0c9;</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr id="trImageFileSize" runat="server" visible="false">
                                            <td class="td-label">
                                                <asp:Label ID="lblMaxFileZise" runat="server" Text="Max File Size"></asp:Label>
                                            </td>
                                            <td class="td-value">
                                                <telerik:RadNumericTextBox ID="txtMaxFileSize" runat="server"></telerik:RadNumericTextBox>
                                                <span>MB</span>

                                            </td>
                                        </tr>

                                        <tr id="trImageFileType" runat="server" visible="false">
                                            <td class="td-label">
                                                <asp:Label ID="lblFileTypes" runat="server" Text="Allowed File Extension"></asp:Label></td>
                                            <td class="td-value">
                                                <asp:TextBox ID="txtFileTypes" runat="server" Style="width: 515px" Rows="4" TextMode="MultiLine" ToolTip="Please enter comma(,) seperated extension eg:jpg,png,txt"></asp:TextBox></td>
                                        </tr>
                                         <tr id="trImageEnableFilesteam" runat="server" visible="false">
                                            <td colspan="2" class="td-value">
                                                 <asp:CheckBox ID="chkEnableFileStream" runat="server" CssClass="chkX td-label" TextAlign="Left"  Text="Enable file stream"  />
                                                &nbsp;&nbsp;<span style="font-family: nunitoregular;" class="infoIcon">Note: use filestream only where avg file size is more than 1 MB</span>
                                            </td>
                                        </tr>
                                        <tr id="trFieldIndex" runat="server" >
                                            <td colspan="2" class="td-value">
                                                 <asp:CheckBox ID="chkFieldIndex" runat="server" CssClass="chkX td-label" TextAlign="Left"  Text="Enable Indexing"  />                                                
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </telerik:RadPageView>
                        <telerik:RadPageView ID="pvAdvanced" runat="server">
                            <table class="fieldinfo table-form">
                                <tr id="reg" runat="server">
                                    <td class="td-label" style="width: 88px">
                                        <asp:Label ID="lblReg" runat="server" Text="Expression"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <a onclick="ShowEditor('Expressions','ex');" class="lnkEdt" href="javascript:void(0)">Edit</a>
                                        <asp:HiddenField ID="hdnExpressions" runat="server" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="td-label" style="width: 88px">
                                        <asp:Label ID="Label3" runat="server" Text="Default Value"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <div>
                                            <a onclick="ShowEditor('DefaultValue','dv');" class="lnkEdt" href="javascript:void(0)">Edit</a>
                                            <asp:CheckBox ID="chkSimpleDefaultValue" onclick="showDefaultTextEntry()" Style="vertical-align: middle" runat="server" Text="Text Input" />
                                        </div>
                                        <asp:TextBox ID="hdnDefaultValue" TextMode="MultiLine" Style="display: none" runat="server" />
                                        <input type="hidden" class="hdn" />
                                    </td>
                                </tr>
                                <tr>
                                    <td style="vertical-align: top" class="td-label">
                                        <asp:Label ID="lblValidation" runat="server" Text="Validation"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <a onclick="ShowEditor('Validations','vl');" class="lnkEdt" href="javascript:void(0)">Edit</a>
                                        <asp:HiddenField ID="hdnValidations" runat="server" />
                                    </td>
                                </tr>
                                <tr>

                                    <td colspan="2" class="td-value">
                                        <asp:CheckBox ID="chkDependent" runat="server" CssClass="chkX td-label" TextAlign="Left" Text="Mark this field as Dependent on another field" onclick="return ShowDependency(this)" />

                                        <a id="btnDependentFilter" style="visibility: hidden" class="lnkEdt" href="javascript:void(0)" onclick="OpenDependentFilter()">Show Filter</a></td>
                                </tr>

                            </table>
                        </telerik:RadPageView>
                        <telerik:RadPageView ID="pvRender" runat="server">
                            <table class="fieldinfo table-form">
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="lblDisabledAdd" runat="server" Text="Disabled on Add"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <telerik:RadComboBox Width="205px" ID="rcbDisabledAdd" runat="server">
                                            <Items>
                                                <telerik:RadComboBoxItem Text="No" Value="" />
                                                <telerik:RadComboBoxItem Text="Yes" Value="Add" />
                                                <telerik:RadComboBoxItem Text="Yes (System Defined)" Value="Sys:Add" />
                                            </Items>
                                        </telerik:RadComboBox>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="lblDisabledEdit" runat="server" Text="Disabled on Edit"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <telerik:RadComboBox Width="205px" ID="rcbDisabledEdit" runat="server">
                                            <Items>
                                                <telerik:RadComboBoxItem Text="No" Value="" />
                                                <telerik:RadComboBoxItem Text="Yes" Value="Edit" />
                                                <telerik:RadComboBoxItem Text="Yes (System Defined)" Value="Sys:Edit" />
                                            </Items>
                                        </telerik:RadComboBox>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="lblHiddenAdd" runat="server" Text="Hidden on Add"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <telerik:RadComboBox Width="205px" ID="rcbHiddenAdd" runat="server">
                                            <Items>
                                                <telerik:RadComboBoxItem Text="No" Value="" />
                                                <telerik:RadComboBoxItem Text="Yes" Value="Add" />
                                                <telerik:RadComboBoxItem Text="Yes (System Defined)" Value="Sys:Add" />
                                            </Items>
                                        </telerik:RadComboBox>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="lblHiddenEdit" runat="server" Text="Hidden on Edit"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <telerik:RadComboBox Width="205px" ID="rcbHiddenEdit" runat="server">
                                            <Items>
                                                <telerik:RadComboBoxItem Text="No" Value="" />
                                                <telerik:RadComboBoxItem Text="Yes" Value="Edit" />
                                                <telerik:RadComboBoxItem Text="Yes (System Defined)" Value="Sys:Edit" />
                                            </Items>
                                        </telerik:RadComboBox>
                                    </td>
                                </tr>
                            </table>
                        </telerik:RadPageView>
                    </telerik:RadMultiPage>
                </asp:Panel>
                <br />
                <div class="cmdPanel">
                    <asp:LinkButton ID="btnSubmit" CssClass="cmdBtn cmdSave" runat="server" Text="Save" OnClick="btnSubmit_Click" OnClientClick="return PageValidation()"></asp:LinkButton>
                    <a href="javascript:void(0)" class="cmdBtn cmdClose" onclick="closeForm()">Cancel</a>
                </div>
            </div>
            <div id="divPopup" class="div-form">
                <table class="table-form">
                    <tr>
                        <td class="td-label">
                            <asp:Label ID="lblItemDis" runat="server" Text="Item Display Text"></asp:Label>
                        </td>
                        <td class="td-value">
                            <asp:TextBox ID="txtItemDisplay" runat="server" onblur="return ChangeArrayValue(this)" MaxLength="250"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td class="td-label">
                            <asp:Label ID="lblItemVal" runat="server" Text="Item Value Text"></asp:Label>
                        </td>
                        <td class="td-value">
                            <asp:TextBox ID="txtItemValue" runat="server" MaxLength="250"></asp:TextBox>
                        </td>
                    </tr>
                </table>
                <div class="cmdPanel">
                    <asp:LinkButton ID="btnSave" CssClass="cmdBtn cmdSave" runat="server" Text="Save" OnClientClick="return addItem()"></asp:LinkButton>
                    <a href="javascript:void(0)" class="cmdBtn cmdClose" onclick="$('#divPopup').HideModal()">Cancel</a>
                </div>
            </div>
            <asp:HiddenField ID="hdnOldFieldLength" runat="server" />
            <asp:HiddenField ID="hdnReset" runat="server" />
            <asp:HiddenField ID="hdnSeriesXml" runat="server" />
            <asp:HiddenField ID="hdnResetText" runat="server" />
            <div id="divTree" class="divTree">
                <telerik:RadTreeView ID="tvRelated" CssClass="tree" OnClientNodeClicking="LoadTreeDatatoControls" OnClientNodeClicked="HideFieldInfoTree" Style="overflow-x: hidden !important; height: 100% !important; width: 100% !important;" runat="server">
                    <WebServiceSettings Path="Layout_Grid.aspx" Method="GetNodes"></WebServiceSettings>
                    <Nodes>
                    </Nodes>
                </telerik:RadTreeView>
            </div>
            <div id="divDynamicTree" class="divTree">
                <telerik:RadTreeView ID="rtvDynamicTree" CssClass="tree" OnClientNodeClicking="GetDynamicTreeNode" OnClientNodeClicked="HideDynamicTree" OnClientNodePopulating="tvItems_NodePopulate" Style="overflow-x: hidden !important; height: 100% !important; width: 100% !important;" runat="server">
                    <WebServiceSettings Path="ExprEditor.aspx" Method="GetEntityFields"></WebServiceSettings>
                    <Nodes>
                    </Nodes>
                </telerik:RadTreeView>
            </div>
            <div id="divSettingsTree" class="divTree">
                <telerik:RadTreeView ID="rtvSettings" CssClass="tree" OnClientNodeClicked="tvSettings_NodeClick" Style="overflow-x: hidden !important; height: 100% !important; width: 100% !important;" runat="server">
                </telerik:RadTreeView>
            </div>
            <div class="filter" id="divFilter" style="background-color: #fff; padding: 5px 5px 5px 5px; display: none; top: 25px !important; height: 450px; width: 750px">
                <iframe id="IfrmFilter" frameborder="0" runat="server" style="height: 98%; width: 98%"></iframe>
            </div>
            <div id="divEditor">
                <iframe id="iFrameEditor" frameborder="0" style="height: 98%; width: 98%"></iframe>
                <a onclick="getscriptxml()" href="javascript:void(0)">Save</a><a onclick="HideEditor()" href="javascript:void(0)">Cancel</a>
            </div>
            <div id="divAutoGenerated" class="divAutoGenerated">
                <table class="table-form">

                    <tr>
                        <td class="td-label" style="vertical-align: middle"><span>Numbering Mode</span></td>
                        <td class="td-label">
                            <asp:RadioButtonList ID="rblSeries" runat="server" RepeatDirection="Horizontal" onchange="return ChangeSimpleSeries()">
                                <asp:ListItem Text="Simple" Value="0" Selected="True"></asp:ListItem>
                                <asp:ListItem Text="Series" Value="1"></asp:ListItem>
                            </asp:RadioButtonList>
                        </td>
                    </tr>
                    <tr id="trNumberStart" runat="server">
                        <td class="td-label">
                            <asp:Label ID="lblNumber" runat="server" Text="Start Number"></asp:Label>
                        </td>
                        <td class="td-value">
                            <telerik:RadNumericTextBox ID="ntxtNumberStart" runat="server" ShowSpinButtons="false" Width="45px"></telerik:RadNumericTextBox>
                        </td>
                    </tr>
                    <tr id="trSeries">
                        <td class="td-label" style="vertical-align: top">Criteria</td>
                        <td>
                            <div class="tblSeries div-form" style="width: 550px">
                                <table style="vertical-align: top">
                                    <thead>
                                        <tr>
                                            <%--<th></th>--%>
                                            <th class="td-label">Series Key</th>
                                            <th class="td-label">Value</th>
                                            <th class="td-label">Start Number</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbl" data-bind="foreach: FilterTask, visible: FilterTask().length > 0">
                                        <tr>
                                            <td class="td-value">
                                                <asp:TextBox ID="txtFieldName" runat="server" ReadOnly="true" onfocus="ShowFieldInfoTree(this, 'Series')" CssClass="seriesField" data-bind="value: FieldName, attr: { title : Title }" Style="width: 130px" epname="abc"></asp:TextBox>
                                            </td>
                                            <td class="td-value">
                                                <asp:TextBox ID="txtSeriesValue" data-bind="value: SeriesValue" CssClass="srsValue" runat="server" Style="width: 130px"></asp:TextBox>
                                            </td>
                                            <td class="td-value">
                                                <asp:TextBox ID="txtSeriesStartNumber" CssClass="srsNumber" data-bind="value: SeriesStart" runat="server" Style="width: 130px"></asp:TextBox>
                                            </td>
                                            <td>
                                                <a class="close" href="javascript:void(0)" title="Delete" data-bind="click: $parent.removeTask">X</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="td-label" colspan="2"><div><label title="To be used if numbering should not be reset" style=" vertical-align: middle" for="chkDoNotReset">Do Not Reset Numbering</label>
                                <input onclick="toggleReset()"  data-chk-off="No" data-chk-on="Yes" style="margin-left: 3px; vertical-align: middle" id="chkDoNotReset" type="checkbox" /></div></td>
                        </tr>
                    <tr id="trResetNumber">
                        <td class="td-label">
                            <asp:Label ID="lblResetNumbering" runat="server" Text="Reset Numbering"></asp:Label>
                        </td>
                        <td class="td-value">
                            <input type="hidden" id="hdnResetId" />                          
                            <asp:TextBox ID="txtReset" onfocus="ShowFieldInfoTree(this, 'Fields')" runat="server" CssClass="LiveTree"></asp:TextBox>
                            <label title="To be used if numbering needs to be reset on year or month change" style="margin-left: 15px; vertical-align: middle" for="chkPrefixChange">Reset On Prefix Change</label><input style="margin-left: 3px; vertical-align: middle" id="chkPrefixChange" type="checkbox" />
                            <label title="To be used if numbering needs to be reset on year or month change" style="margin-left: 15px; vertical-align: middle" for="chkSuffixChange">Reset On Suffix Change</label><input style="margin-left: 3px; vertical-align: middle" id="chkSuffixChange" type="checkbox" />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="td-label">
                            <asp:CheckBox ID="chkPrefill" TextAlign="Left" data-chk-off="No" data-chk-on="Yes" runat="server" Text="Allow prefill characters " onclick="return CheckPrefill()" />
                        </td>
                    </tr>
                    <tr id="trPrefillLen" runat="server">
                        <td class="td-label">
                            <asp:Label ID="lblPrefillLength" runat="server" Text="Prefill Length"></asp:Label>
                        </td>
                        <td class="td-value">
                            <telerik:RadNumericTextBox ID="ntxtPrefillLength" runat="server" ShowSpinButtons="false" Width="45px"></telerik:RadNumericTextBox>
                        </td>
                    </tr>
                    <tr id="trPrefillChar" runat="server">
                        <td class="td-label">
                            <asp:Label ID="lblPrefillChar" runat="server" Text="Prefill Character"></asp:Label>
                        </td>
                        <td class="td-value">
                            <asp:TextBox ID="txtPrefillChar" runat="server" MaxLength="1" Text="0"></asp:TextBox>
                        </td>

                    </tr>
                    <tr>
                        <td class="td-label">
                            <asp:Label ID="lblPrefix" runat="server" Text="Prefix"></asp:Label>
                        </td>
                        <td class="td-value">
                            <%--<telerik:RadEditor ID="edPrefix" runat="server" Skin="Office2007" OnClientPasteHtml="PasteCancel" ToolbarMode="Default" EditModes="Design" Width="450px" Height="27px" ContentFilters="None">
                            </telerik:RadEditor>--%>

                            <telerik:RadTextBox ID="edPrefix" runat="server" Width="388px" TextMode="MultiLine" Height="45px"></telerik:RadTextBox>

                            <div class="divTreeButton" title="Click here to set Prefix" style="cursor: pointer" onclick="ShowFieldInfoTree(this, 'Prefix')">&#xf0c9;</div>
                        </td>
                    </tr>
                    <tr>
                        <td class="td-label">
                            <asp:Label ID="lblsuffix" runat="server" Text="Suffix"></asp:Label>
                        </td>
                        <td class="td-value">
                            <%--<telerik:RadEditor ID="edSuffix" runat="server" Skin="Office2007" ToolbarMode="Default" OnClientPasteHtml="PasteCancel" EditModes="Design" Width="450px" Height="27px" ContentFilters="None">
                            </telerik:RadEditor>--%>

                            <telerik:RadTextBox ID="edSuffix" runat="server" Width="388px" TextMode="MultiLine" Height="45px"></telerik:RadTextBox>

                            <div class="divTreeButton" title="Click here to set Suffix" style="cursor: pointer" onclick="ShowFieldInfoTree(this, 'Suffix')">&#xf0c9;</div>
                        </td>
                    </tr>
                    <tr>
                        <td class="td-label" colspan="2">
                            <asp:CheckBox ID="chkAllowMod" runat="server" TextAlign="Left" data-chk-off="No" data-chk-on="Yes" Text="Allow modifications by user " />
                        </td>
                    </tr>
                </table>
                <br />
                <div class="cmdPanel">
                    <asp:LinkButton ID="lbnCriteriaSubmit" CssClass="cmdBtn cmdSave" runat="server" Text="Save" OnClientClick="return SaveCriteriaCode()"></asp:LinkButton>
                    <a href="javascript:void(0)" class="cmdBtn cmdClose" onclick="$('#divAutoGenerated').HideModal()">Cancel</a>
                </div>
            </div>

            <asp:HiddenField ID="hdnRecordFilter" runat="server" />
            <asp:HiddenField ID="hdnSaveCriteria" runat="server" />
            <asp:HiddenField ID="hdnUniqueKeys" runat="server" />
            <asp:HiddenField ID="hdnEntityID" runat="server" />
            <asp:HiddenField ID="hdnDependentFilter" runat="server" />
            <asp:HiddenField ID="hdnAdvSubQryFilter" runat="server" />
            <asp:HiddenField ID="hdnSingleSelectOldTable" runat="server" />

        </ContentTemplate>
    </asp:UpdatePanel>

    <style type="text/css">
        .reToolbar
        {
            display: none;
        }

        .reModule
        {
            display: none;
        }

        .divTreeButton
        {
            height: 24px;
            width: 24px;
            font-family: fontawesome;
            font-size: 18px;
            font-weight: normal;
            position: absolute;
            right: 197px;
            margin-top: 0px;
            display: inline-block;
            vertical-align: top;
        }

        .divAdvTreeSimple
        {
            height: 24px;
            width: 24px;
            font-family: fontawesome;
            font-size: 18px;
            font-weight: normal;
            display: inline-block;
        }

        .divTree
        {
            display: none;
            position: absolute;
            border: 1px solid #A1A1A1;
            height: 250px;
            width: 250px;
            overflow: auto;
            overflow-x: hidden;
            background-color: #F0F0F0;
            z-index: 100;
            box-shadow: 1px 1px 5px #555;
        }

        .divAutoGenerated
        {
            display: none;
            position: absolute;
            border: 1px solid #8B8B8B;
            width: 700px;
            top: 25px !important;
            padding: 20px;
        }

        .DarkTheme .divTree
        {
            background-color: #414141;
        }

        .RedTheme .divTree
        {
            background-color: #F0ECE8;
        }

        .GreenTheme .divTree
        {
            background-color: #DEF7CB;
        }

        .BlueGlossTheme .divTree
        {
            background-color: #97c9f8;
        }

        .OrangeTheme .divTree
        {
            background-color: #FFE9D5;
        }

        #divPopup
        {
            display: none;
            position: fixed;
            z-index: 3500;
            padding: 20px;
            height: 100px;
            width: 350px;
        }

        #divEditor
        {
            display: none;
            position: absolute;
            z-index: 3500;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #fff;
        }

        .tblSeries
        {
            max-height: 170px;
            overflow-y: auto;
            vertical-align: top;
        }

        #tbl .td-value
        {
            padding: 0 5px;
        }

        .divCriteriaCss
        {
            width: 300px;
            vertical-align: top;
        }

        .Office2007.reWrapper, .Office2007.RadEditor .reContentCell, .Office2007.reColorPicker, .Office2007.reInsertTable, .Office2007.reCustomLinks a:hover
        {
            border: 0;
        }

        .reContentCell iframe
        {
            height: 33px !important;
        }

        .table-form .RadEditor TD
        {
            padding: 0;
        }
    </style>


    <script type="text/javascript">







        String.prototype.RemoveSpecialChars = function (space) {
            var outstring = "";
            for (var a = 0; a < this.length; a++) {
                if ((this[a].charCodeAt() >= 48 && this[a].charCodeAt() <= 57) ||
                    (this[a].charCodeAt() >= 65 && this[a].charCodeAt() <= 90) ||
                    (this[a].charCodeAt() >= 97 && this[a].charCodeAt() <= 122) || this[a].charCodeAt() == 95 || this[a].charCodeAt() == 32) {

                    if (this[a].charCodeAt() == 32 && space)
                        continue;
                    outstring = outstring + this[a];
                }
            }
            return outstring;
        }

        function ValidateCodeName(isFieldName) {

            var txtFldName = $("#<%= txtFldName.ClientID %>");
            var txtDispName = $("#<%= txtDisName.ClientID %>");

            $("#<%= txtDisName.ClientID %>").val(txtDispName.val().RemoveSpecialChars());

            var firstcharDisp = txtDispName.val().charCodeAt(0);
            if (txtDispName.val().length > 0) {
                if (!((firstcharDisp >= 65 && firstcharDisp <= 90) || (firstcharDisp >=95 && firstcharDisp <= 122))) {
                    alert('Field Display Name must start with alphabet.');
                    return false;
                }
            }

            if (($.QS("PageType") == "A" || $.QS("PageType") == "CP")) {
                if (isFieldName == 0)
                    $("#<%= txtFldName.ClientID %>").val(txtDispName.val().RemoveSpecialChars(true).toLowerCase());
                else
                    $("#<%= txtFldName.ClientID %>").val(txtFldName.val().RemoveSpecialChars(true).toLowerCase());

            }

            var firstcharCode = txtFldName.val().charCodeAt(0);
            if (txtFldName.val().length > 0) {
                if (!((firstcharCode >= 65 && firstcharCode <= 90) || (firstcharCode >=95 && firstcharCode <= 122))) {
                    alert('Field Name must start with alphabet.');
                    return false;
                }

                var rk = reservedKeywords.length;
                for (var k = 0; k < rk; k++) {
                    if (reservedKeywords[k].contains("preview")) {
                        if (txtFldName.val().toLowerCase().endsWith(reservedKeywords[k].toLowerCase())) {
                            alert('Field name should not end with _preview.');
                            return false;
                        }
                    }
                    else {
                        if (txtFldName.val().toLowerCase() == reservedKeywords[k].toLowerCase()) {
                            alert('This is reserved keyword.');
                            return false;
                        }
                    }
                }
            }

            return true;
        }



        function pageLoad() {

            $('#<%=pvBasic.ClientID%>> div').accordion({ heightStyle: "content", collapsible: true });

            $("#<%=trUnique1.ClientID%>").setDisplay($("#<%=chkUnique.ClientID%>").checked());
            $("#multiUnique").multiSelect({ onDropDownShowing: showUniqueTree });
            $("#multiUnique").multiSelect().refresh(arrUniqueData);
            $('#<%=chkPrefill.ClientID%>,#<%=chkAllowMod.ClientID%>,#<%=chkUnique.ClientID%>,#<%=chkDescript.ClientID%>,#<%=chkDeactivate.ClientID%>,#<%=chkPasswordEncrypt.ClientID%>,#<%=chkDependent.ClientID%>,#<%=chkEnableFileStream.ClientID%>,#<%=chkFieldIndex.ClientID%>,#<%=chkVarchar.ClientID%>,#chkDoNotReset').CheckBoxX()
            ShowDependency();
            showDefaultTextEntry(true)
            CreateEditButton();
            CreateAddButton();
            ShowSourceOption();
            EnableEdit();
            HighlightScriptLinks();
            var fldType = $.QS("FieldType");

            rcbRounding_OnClientSelectedIndexChanged();
            rcbCurrencyList_ClientSelectedIndexChanged();

            if (fldType.toLowerCase() == "Dynamic".toLowerCase()) {
                rcbDynDataType_OnClientSelectedIndexChanged();
                $('#trMandatory').hide();
                ShowAdvancedFilterLink();

            }

            var _newFieldType = NewFieldType;
            if (_newFieldType.toLowerCase() != fldType.toLowerCase())
                fldType = _newFieldType;

            if (fldType.toLowerCase() == "autogenerated") {
                LoadCriteriaData();
            }

            if (fldType.toLowerCase() == "mixedselect" ||
                fldType.toLowerCase() == "mixedmultiselect" ||
                fldType.toLowerCase() == "calculated") {
                $(".srcTable").show();
                $("#<%= pnlSrcTbl0.ClientID %>").show();
                $("#btnRecordFilter").hide();
            }
            if (fldType.toLowerCase() == "status" ||
                fldType.toLowerCase() == "priority") {
                $(".srcArray").show();
                $("#<%= pnlArray1.ClientID %>").show();
            }

            var isDepen = IsDependent;

            $("#tblFieldInfo").parent().parent().setDisplay($("#tblFieldInfo").find("tr:visible").exists());

            if ($("#tvCtrEnt").exists()) {
               
                $("#<%=txtEntity.ClientID %>").on("click", function (e) {
               
                toggleEntityTree(e.target); e.stopPropagation();
            })

            $("#<%=txtMixEntity.ClientID %>").on("click", function (e) {
                    toggleEntityTree(e.target); e.stopPropagation();
                })

                $(document).on("click", function () { $("#tvCtrEnt").hide(); })
                $("#tvCtrEnt").on("click", function (e) { e.stopPropagation(); });
            }
        }
        
        



        function toggleMultiList() {
            $("#<%=trUnique1.ClientID%>").setDisplay($("#<%=chkUnique.ClientID%>").checked());
            if ($("#<%=chkUnique.ClientID%>").checked() && $("#multiUnique").multiSelect().getItems().length <= 0)
                $("#multiUnique").multiSelect().addItem({ Text: "Company", Value: "company_fid" });
        }


        function toggleDependency(txt) {
            $(txt).next().show();
        }



        function selectEntity(sender, args) {

            if ($.QS("FieldType").toLowerCase() == "singleselect" ||
                $.QS("FieldType").toLowerCase() == "multiselect") {
                $find("<%=rcbFCode.ClientID %>").set_text('');
                $find("<%=rcbFCode.ClientID %>").get_items().clear();

            }

            if ($.QS("FieldType").toLowerCase() == "calculated") {
                $find("<%=rcbTableDisplay.ClientID %>").set_text('');
                $find("<%=rcbTableDisplay.ClientID %>").get_items().clear();
            }

            var t = null;
            var n = args.get_node();

            if (n.get_level() < 2 && n.get_value() != "None")
                return;
            if (n.get_value() == "None") {
                if ($.QS("FieldType").toLowerCase() == "mixedselect" ||
                    $.QS("FieldType").toLowerCase() == "mixedmultiselect")
                    t = $("#<%=txtMixEntity.ClientID %>");
                else
                    t = $("#<%=txtEntity.ClientID %>");
                t.val("");
                t.removeAttr("entityid");
            }
            else {

                if ($.QS("FieldType").toLowerCase() == "mixedselect" ||
                    $.QS("FieldType").toLowerCase() == "mixedmultiselect") {
                    t = $("#<%=txtMixEntity.ClientID %>");
                    var tmpTxt = t.val();
                    if (n.get_checked()) {

                        if (tmpTxt.indexOf(n.get_text()) == -1) {
                            if (tmpTxt == "")
                                t.val(n.get_text());
                            else
                                t.val(tmpTxt + "," + n.get_text());
                            var entIDs = $("#<%=hdnEntityID.ClientID %>").val();
                            if (entIDs == "")
                                entIDs = n.get_value();
                            else
                                entIDs = entIDs + "|" + n.get_value();
                            $("#<%=hdnEntityID.ClientID %>").val(entIDs);
                        }
                    }
                    else {
                        if (tmpTxt.indexOf(n.get_text()) != -1) {
                            tmpTxt = tmpTxt.Replace(n.get_text() + ",", "");
                            tmpTxt = tmpTxt.Replace(n.get_text(), "");
                            t.val(tmpTxt.Trim(','));

                            var entIDs = $("#<%=hdnEntityID.ClientID %>").val();
                            entIDs = entIDs.Replace(n.get_value() + "|", "");
                            $("#<%=hdnEntityID.ClientID %>").val(entIDs);
                        }
                    }
                    return false;
                }
                else {
                    t = $("#<%=txtEntity.ClientID %>");
                    t.val("");
                    t.val(n.get_text());
                    $("#<%=hdnEntityID.ClientID %>").val(n.get_value());

                    if ($.QS("FieldType").toLowerCase() == "singleselect") {
                        $find("<%=rcbFCode.ClientID %>").set_text('');
                        $find("<%= rcbFCode.ClientID %>").get_items().clear();
                    }
                }
            }
            $("#tvCtrEnt").hide();
        }

        function CreateAddButton() {
            var btns = $(".rlbButton");
            var btn = btns.eq(0).clone();
            btns.eq(0).before(btn);
            btn.setClass("rlbButton").find(".rlbButtonText").css("background-image", "none").html("Add").attr("title", "Add New");
            btn.click(function () { ShowPopup('A') });
        }

        function CreateEditButton() {
            var btns = $(".rlbButton");
            var btn = btns.eq(0).clone();
            btns.eq(0).before(btn);//rlbDeleteDisabled rlbDisabled
            btn.setClass("rlbButton rlbDisabled").find(".rlbButtonText").css("background-image", "none").html("Edit").attr("title", "Edit");
            btn.click(function () { ShowPopup('E') });
        }

        function ShowSourceOption() {
            var rcb = $find("<%= rcbMultiSourceOption.ClientID %>");
            var val = "";
            $("#trSingleChk").hide();

            if (rcb != null)
                val = rcb.get_value();

            if (val == "" || val == "0" || val == undefined) {
                $(".srcTable").hide();
                $(".srcArray").hide();
                $(".srcPredef").hide();
            }
            if (val == "table") {
                $(".srcTable").show();
                $(".srcArray").hide();
                $(".srcPredef").hide();
            }
            else if (val == "array") {
                $(".srcTable").hide();
                $(".srcArray").show();
                $(".srcPredef").hide();
                $("#trSingleChk").show();
            }
            else if (val == "predef" || val == "predefined") {
                $(".srcTable").hide();
                $(".srcArray").hide();
                $(".srcPredef").show();
            }
        }

        function ShowPopup(mode) {

            var listBox = $find("<%= rlbArray.ClientID %>");
            var count = listBox.get_items().get_count();
            if (mode == 'E' && count > 0) {
                if (listBox.get_selectedItem() == null)
                    return false;

                $("#divPopup").ShowModal();
                $("#<%= btnSave.ClientID %>").text("Update");
                var itemText = listBox.get_selectedItem().get_text();
                var itemvalue = listBox.get_selectedItem().get_value();
                $("#<%= txtItemDisplay.ClientID %>").val(itemText);
                $("#<%= txtItemValue.ClientID %>").val(itemvalue);

            }
            else if (mode == 'A') {
                $("#divPopup").ShowModal();
                $("#<%= btnSave.ClientID %>").text("Submit");
                $("#<%= txtItemValue.ClientID %>").val("");
                $("#<%= txtItemDisplay.ClientID %>").val("");
            }
        return false;
    }

    function addItem() {
        var btnName = $("#<%= btnSave.ClientID %>").text();

        $("#divPopup").HideModal();
        var listBox = $find("<%= rlbArray.ClientID %>");
        var itemText = $("#<%= txtItemDisplay.ClientID %>").val();
        var itemVal = $("#<%= txtItemValue.ClientID %>").val();
        if (itemVal == "") {
            alert("Please specify the text for the new item.");
            return false;
        }
        if (itemText == "") {
            alert("Please specify the text for the new item.");
            return false;
        }
        if (btnName == "Submit") {
            listBox.trackChanges();
            //Instantiate a new client item
            var item = new Telerik.Web.UI.RadListBoxItem();
            item.set_text(itemText);
            item.set_value(itemVal);
            item.set_selected(true);

            listBox.get_items().add(item);
            item.scrollIntoView();
            listBox.commitChanges();
            EnableEdit();
        }
        else {
            listBox.trackChanges();
            listBox.get_selectedItem().set_text(itemText);
            listBox.get_selectedItem().set_value(itemVal);
            listBox.commitChanges();
        }
        return false;
    }


    function EnableEdit() {

        var listBox = $find("<%= rlbArray.ClientID %>");
        if (listBox != null) {
            var count = listBox.get_items().get_count();
            var btnEdit = $(".rlbButton")[1];
            if (count > 0)
                $(btnEdit).removeClass("rlbButton rlbDisabled").addClass("rlbButton");
            else
                $(btnEdit).removeClass("rlbButton").addClass("rlbButton rlbDisabled");
        }
    }

    function Specified(rbl) {
        var rblstatus = $(ContentPlaceHolder1_rblSpecified_0).checked();
        if (rblstatus) {
            $find("<%= ntxtFldLength.ClientID %>").set_enabled(true);
            $find("<%= ntxtFldLength.ClientID %>").set_value(250);
        }
        else {
            $find("<%= ntxtFldLength.ClientID %>").set_enabled(false);
            $find("<%= ntxtFldLength.ClientID %>").set_value(-1);
        }

        return;
    }

    function CheckPrefill() {
        var chkPre = $("#<%= chkPrefill.ClientID %>");

        $("#<%= trPrefillLen.ClientID %>").hide();
        $("#<%= trPrefillChar.ClientID %>").hide();

        if (chkPre.checked()) {
            $("#<%= trPrefillLen.ClientID %>").show();
            $("#<%= trPrefillChar.ClientID %>").show();
        }
    }

    function showUniqueTree() {
        window.setTimeout(function () {
            $("#multiUnique").after($("#divDynamicTree").show().position({ collision: "none none", my: "left top", at: "left bottom", of: "#multiUnique" }));
        }, 50);
    }
    var currentMode;
    var currentCtl = null;
    function ShowFieldInfoTree(ctl, mode) {
        currentCtl = $(ctl);
        currentMode = mode;
        var trDiv = $("#divTree");
        $(ctl).after(trDiv);
        $("#divTree").show();
        $("#divTree").css("right", "");
        if (mode == "Prefix" || mode == "Suffix") {
            $("#divTree").css("right", "135px");
            var tv = $find("<%= tvRelated.ClientID %>");
            var dateStyle = tv.findNodeByValue("%%");
            if (dateStyle == null) {
                tv.trackChanges();
                //Instantiate a new client node
                var node = new Telerik.Web.UI.RadTreeNode();
                //Set its text
                node.set_text("Date/DateTime Style");
                node.set_value("%%")
                //Add the new node as the child of the selected node or the treeview if no node is selected
                tv.get_nodes().add(node);

                var node_dd = new Telerik.Web.UI.RadTreeNode();
                //Set its text
                node_dd.set_text("dd [e.g. 07]");
                node_dd.set_value("%dd%")
                //Add the new node as the child of the selected node or the treeview if no node is selected
                node.get_nodes().add(node_dd);

                var node_ddd = new Telerik.Web.UI.RadTreeNode();
                //Set its text
                node_ddd.set_text("ddd [e.g. Mon]");
                node_ddd.set_value("%ddd%")
                //Add the new node as the child of the selected node or the treeview if no node is selected
                node.get_nodes().add(node_ddd);

                var node_dddd = new Telerik.Web.UI.RadTreeNode();
                //Set its text
                node_dddd.set_text("dddd [e.g. Monday]");
                node_dddd.set_value("%dddd%")
                //Add the new node as the child of the selected node or the treeview if no node is selected
                node.get_nodes().add(node_dddd);

                var node_MM = new Telerik.Web.UI.RadTreeNode();
                //Set its text
                node_MM.set_text("MM [e.g. 01]");
                node_MM.set_value("%MM%")
                //Add the new node as the child of the selected node or the treeview if no node is selected
                node.get_nodes().add(node_MM);

                var node_MMM = new Telerik.Web.UI.RadTreeNode();
                //Set its text
                node_MMM.set_text("MMM [e.g. Jan]");
                node_MMM.set_value("%MMM%")
                //Add the new node as the child of the selected node or the treeview if no node is selected
                node.get_nodes().add(node_MMM);

                var node_MMMM = new Telerik.Web.UI.RadTreeNode();
                //Set its text
                node_MMMM.set_text("MMMM [e.g. January]");
                node_MMMM.set_value("%MMMM%")
                //Add the new node as the child of the selected node or the treeview if no node is selected
                node.get_nodes().add(node_MMMM);

                var node_yy = new Telerik.Web.UI.RadTreeNode();
                //Set its text
                node_yy.set_text("yy [e.g. 99]");
                node_yy.set_value("%yy%")
                //Add the new node as the child of the selected node or the treeview if no node is selected
                node.get_nodes().add(node_yy);

                var node_yyyy = new Telerik.Web.UI.RadTreeNode();
                //Set its text
                node_yyyy.set_text("yyyy [e.g. 1999]");
                node_yyyy.set_value("%yyyy%")
                //Add the new node as the child of the selected node or the treeview if no node is selected
                node.get_nodes().add(node_yyyy);

                var node_yyyy = new Telerik.Web.UI.RadTreeNode();
                //Set its text
                node_yyyy.set_text("yyyy [e.g. 1999]");
                node_yyyy.set_value("%yyyy%")
                //Add the new node as the child of the selected node or the treeview if no node is selected
                node.get_nodes().add(node_yyyy);

                var node_hh = new Telerik.Web.UI.RadTreeNode();
                //Set its text
                node_hh.set_text("hh [e.g. 01]");
                node_hh.set_value("%hh%")
                //Add the new node as the child of the selected node or the treeview if no node is selected
                node.get_nodes().add(node_hh);

                var node_HH = new Telerik.Web.UI.RadTreeNode();
                //Set its text
                node_HH.set_text("HH [e.g. 13]");
                node_HH.set_value("%HH%")
                //Add the new node as the child of the selected node or the treeview if no node is selected
                node.get_nodes().add(node_HH);

                var node_mm = new Telerik.Web.UI.RadTreeNode();
                //Set its text
                node_mm.set_text("mm [e.g. 59]");
                node_mm.set_value("%mm%")
                //Add the new node as the child of the selected node or the treeview if no node is selected
                node.get_nodes().add(node_mm);

                var node_ss = new Telerik.Web.UI.RadTreeNode();
                //Set its text
                node_ss.set_text("ss [e.g. 55]");
                node_ss.set_value("%ss%")
                //Add the new node as the child of the selected node or the treeview if no node is selected
                node.get_nodes().add(node_ss);

                tv.commitChanges();
            }
        }
        else {
            var tv = $find("<%= tvRelated.ClientID %>");
            var nod = new Telerik.Web.UI.RadTreeNode();

            nod = tv.findNodeByValue("%%");
            if (nod != null) {
                tv.trackChanges();
                tv.get_nodes().remove(nod);
                tv.commitChanges();
            }

        }
        return;
    }

    var editorPaste = false;

    function LoadTreeDatatoControls(sender, eventArgs) {
        if (eventArgs.get_node().get_nodes().get_count() != "0")
            return;
        if (eventArgs.get_node().get_attributes().getAttribute("IsParent") == "1")
            return;


        var node = eventArgs.get_node();
        if (node.get_level() == 0)
            return;

        var n = node;
        var f = "";
        while (n.get_level() > 0) {
            f = n.get_attributes().getAttribute("FieldName") + "." + f;
            if (n.get_level() == 0)
                break;
            else
                n = n.get_parent();
        }
        f = f.Trim('.');
        f = "Field." + f;

        var dispname = eventArgs.get_node().get_text();
        var value = eventArgs.get_node().get_value();
        var node = eventArgs.get_node();
        var s = "";
        var title = "";
        var mainParent = "";
        var currentObject = node.get_parent();
        var entitypath = "";
        if (value.indexOf("%") > -1)
            f = "CDATE(SYSDATE," + value + ")";

        if (currentMode == "Fields") {
            var txtRst = $("#<%= txtReset.ClientID %>");
            txtRst.val((txtRst.val()+"|"+f).Trim('|'));
            txtRst.attr("title", f);

        }
        else if (currentMode == "Prefix") {
            var editor = $find("<%= edPrefix.ClientID %>");
            editor.set_value(editor.get_value() + f);

        }
        else if (currentMode == "Suffix") {
            var editor = $find("<%= edSuffix.ClientID %>");
            editor.set_value(editor.get_value() + f);

        }
        else if (currentMode == "Series") {
            var fieldName = node.get_attributes().getAttribute("FieldName");
            var fieldID = node.get_attributes().getAttribute("FieldID");
            currentCtl.val(f);
            currentCtl.attr('Title', f);
            if (currentCtl.closest("TR").index() == currentCtl.closest("tbody").children().length - 1)
                myFilterModel.addTask();
        }
        else if (currentMode == "Simple") {
            var txtSimple = $("#<%= txtSimpleFilter.ClientID %>");
                txtSimple.val(txtSimple.val() + dispname);
            }
}


function PasteCancel(sender, args) {
    if (!editorPaste)
        args.set_cancel(true);
}

function HideFieldInfoTree(sender, eventArgs) {

    $(document.body).append($("#divTree").hide());
}

function FilterTask() {
    return { FieldID: '', Title: '', FieldName: 'Please Select', EntityPath: '', SeriesValue: '', SeriesStart: '0' };
}

function FilterTaskListViewModel() {
    var self = this;
    self.FilterTask = ko.observableArray(dbCols);
    self.addTask = function () {
        self.FilterTask.push(new FilterTask());
    };

    self.removeTask = function (FilterTask) {
        HideFieldInfoTree();
        self.FilterTask.remove(FilterTask);
        if ($("#tbl").children().length == 0)
            myFilterModel.addTask();
    };
    self.removeAll = function (FilterTask) { self.FilterTask.removeAll(FilterTask); };
    self.rebind = function (arr) {
        HideFieldInfoTree();
        self.removeAll()
        for (var i = 0; i < arr.length; i++)
            self.FilterTask.push(arr[i]);
        self.addTask();
    }

}

function ChangeSimpleSeries() {
    var issimple = $('#ContentPlaceHolder1_rblSeries_0').attr('checked');

    if (issimple) {
        $("#trSeries").hide();
        $("#<%= trNumberStart.ClientID %>").show();
    }
    else if (!issimple) {
        $("#trSeries").show();
        $("#<%= trNumberStart.ClientID %>").hide();
    }
}


function PageValidation() {

    var tblnm_disp = $("#<%= txtDisName.ClientID %>").val();
    var firstcharDisp = tblnm_disp.charCodeAt(0);
    if (!((firstcharDisp >= 65 && firstcharDisp <= 90) || (firstcharDisp >= 95 && firstcharDisp <= 122))) {
        alert('Field Display Name must start with alphabet.');
        return false;
    }

    var tblnm = $("#<%= txtFldName.ClientID %>").val();
    var firstcharCode = tblnm.charCodeAt(0);
    if (!((firstcharCode >= 65 && firstcharCode <= 90) || (firstcharCode >= 95 && firstcharCode <= 122))) {
        alert('Field Name must start with alphabet.');
        return false;
    }
    if (!ValidateCodeName(1))
        return false;

    //var fldType = $.QS("FieldType");

    var fldType = "";
    //if ($.QS("PageType") == "A")
    //    fldType = $.QS("FieldType");
    //else
    fldType = ($find("<%=rcbFieldType.ClientID%>") ? $find("<%=rcbFieldType.ClientID%>").get_selectedItem().get_value() : $.QS("FieldType"));
    //alert(fldType);

    if (fldType.toLowerCase() == "singleselect" ||
        fldType.toLowerCase() == "multiselect") {

        var source = $find("<%= rcbMultiSourceOption.ClientID %>").get_selectedItem().get_value();
        if (source == "table") {
            var enta = $("#<%= txtEntity.ClientID %>").val();
            if (enta == "" || enta == undefined) {
                alert('Please select Entity');
                return false;
            }
        }
    }

    if (fldType.toLowerCase() == "mixedselect" ||
        fldType.toLowerCase() == "mixedmultiselect") {
        var entm = $("#<%= txtMixEntity.ClientID %>").val();
        if (entm == "" || entm == undefined) {
            alert('Please select Entity');
            return false;
        }
    }

    if (fldType.toLowerCase() == "calculated") {
        var enta = $("#<%= txtEntity.ClientID %>").val();
        if (enta == "" || enta == undefined) {
            alert('Please select Entity');
            return false;
        }

        var tblDisp = $find("<%= rcbTableDisplay.ClientID %>")
        if (tblDisp.get_text() == "") {
            alert('Please select calculate on field');
            return false;
        }
    }
    $("#<%= hdnUniqueKeys.ClientID %>").val(GetUniqueKeys());
    if (fldType.toLowerCase() == "autogenerated") {

        var criteria = "";
        $("#tblCriteria").find('TR').each(function () {
            criteria += "<Criteria>" + $(this).find('.divCriteriaFilterValue').val() + "" + $(this).find('.divCriteriaCodeValue').val() + "</Criteria>";
        });

        $("#<%= hdnSaveCriteria.ClientID %>").val(criteria);
    }

}

function CreateSeriesXml(seriesrow) {
    var row = seriesrow;
    var val = row.find(".seriesField").val();
    if ($.isEmpty(val) || val == "Please Select")
        return "";
    var rowxml = " <Series ";
    rowxml += " Key='" + row.find(".seriesField").val() + "'";

    rowxml += " Value='" + row.find(".srsValue").val() + "'";
    rowxml += " StartNumber='" + row.find(".srsNumber").val() + "' >";
    rowxml += " </Series>   ";

    return rowxml;
}

var myFilterModel;


var isDependentFilter = 0;

function OpenRecordFilter() {

    var data = new Object();
    data["PageType"] = $.QS("PageType");
    data["EID"] = $("#<%=hdnEntityID.ClientID %>").val();
    data["SID"] = sid;
    data["xml"] = $("#<%= hdnRecordFilter.ClientID %>").val();
    PageMethods.SetFilterSession(data, function () {
        var url = "../Meta/Filters_Add.aspx?PageMode=Settings&SID=" + sid;
        $('#<%= IfrmFilter.ClientID %>').attr('src', url);
        $("#divFilter").ShowModal();
    });
    return false;
}

function saveFilterXml(filterXml) {
    hidePopUp();

    if (isDependentFilter == 1) {
        $("#<%= hdnDependentFilter.ClientID %>").val(filterXml);
    }
    else {
        if (filterMode == "Criteria") {
            currentFilterDiv.val(filterXml);
        }
        else
            $("#<%= hdnRecordFilter.ClientID %>").val(filterXml);
    }
}

function hidePopUp() {
    $("#divFilter").HideModal();
    return false;
}


function showDefaultTextEntry(load) {
    var chk = $("#<%=chkSimpleDefaultValue.ClientID%>");
    var txt = chk.closest("TD").find("textarea");
    var hdn = chk.closest("TD").find(".hdn");
    chk.closest("TD").find("A").setDisplay(!chk.checked());
    txt.setDisplay(chk.checked());
    if (chk.checked() && txt.val().indexOf("<Script>") > -1) {
        hdn.val(txt.val());
        if (!load)
            txt.val("");
    }
    else if (!chk.checked() && hdn.val().indexOf("<Script>") > -1) {
        txt.val(hdn.val());
    }
}
function ShowEditor(type, q) {
    var ife = $("#iFrameEditor");

    window.open('../Meta/ExprEditor.aspx?EID=' + $.QS("EntityID") + "&s=" + q + "&cmd=1&t=" + type);
    return false;
}

function InitEditor(t) {
    return { VariablesList: window[t + "_VarList"], Script: window[t + "_Script"] };
}
function getscriptxml(t, v, s) {
    window[t + "_VarList"] = v;
    window[t + "_Script"] = s;
    if ($.isEmpty(s))
        $("#ContentPlaceHolder1_hdn" + t).val("")
    else
        $("#ContentPlaceHolder1_hdn" + t).val("<Script><Variables>" + getVarXml(v) + "</Variables><Body>" + $.encodeXml(s) + "</" + "Body>" + "</" + "Script>");
    HighlightScriptLinks();
}
function getVarXml(v) {
    if (!v)
        return "";
    var VariablesList = v;
    var xml = "";
    for (var i = 0; i < VariablesList.length; i++) {
        var v = VariablesList[i];
        xml += '<Variable Id="' + $.encodeXml(v.Name, true) + '" OnDemand="' + (v.OnDemand / 1 == 1 ? "1" : "0") + '" Type="' + v.Type + '" ';
        if (v.Type == "Table")
            xml += ' EntityId="' + $.encodeXml($.defaultVal(v.EntityID, ""), true) + '" ';
        xml += '>';
        if (v.Type == "Table")
            xml += $.defaultVal(v.Cols, "");
        xml += $.defaultVal(v.Filter, "");
        xml += '</Variable>';
    }
    return xml;
}

function HideEditor() {
    $("#divEditor").hide();
}

function HighlightScriptLinks() {
    var hdn = $("#<%=hdnDefaultValue.ClientID%>");
    hdn.closest("TD").find(".lnkEdt").removeClass("hasData").addClass($.isEmpty(hdn.val()) ? "" : "hasData");
    var hdn = $("#<%=hdnExpressions.ClientID%>");
    hdn.closest("TD").find(".lnkEdt").removeClass("hasData").addClass($.isEmpty(hdn.val()) ? "" : "hasData");
    var hdn = $("#<%=hdnValidations.ClientID%>");
    hdn.closest("TD").find(".lnkEdt").removeClass("hasData").addClass($.isEmpty(hdn.val()) ? "" : "hasData");
}
function CloseInfo() {
    if (parent && typeof parent.toggleDetailsForm == "function")
        parent.toggleDetailsForm(false);
}


$(document).click(function (e) {

    if ($("#divTree").isVisible() && !$(e.srcElement).closest("#divTree").exists() && (!$(e.srcElement).hasClass("LiveTree")) && (!$(e.srcElement).hasClass("divTreeButton")) && (!$(e.srcElement).hasClass("seriesField"))) {
        $(document.body).append($("#divTree").hide());
    }
});


function AddNewCriteria(ctl) {
    var len = $("#tblCriteria").find('TR').length;
    var CrCount = $(ctl).prev().find('.trCriteria').length;
    var crClone = $("#tblCriteria tr:first").clone();
    $(crClone).find('#crno').html("Criteria No " + (len + 1));
    $(crClone).find('#crcode').html("Settings");
    $(crClone).find('.divCriteriaCodeValue').val('');
    $("#tblCriteria").append(crClone);
}

var currentFilterDiv;
var filterMode = "";

function LaunchCriteriaFilter(ctl) {
    filterMode = "Criteria";
    currentFilterDiv = $(ctl).closest('tr').find('.divCriteriaFilterValue');

    var data = new Object();
    data["PageType"] = $.QS("PageType");
    data["EID"] = $.QS("EntityID");
    data["SID"] = sid;
    if (currentFilterDiv == null)
        data["xml"] = "";
    else
        data["xml"] = currentFilterDiv.val();
    PageMethods.SetFilterSession(data, function () {
        var url = "../Meta/Filters_Add.aspx?PageMode=Settings&SID=" + sid;
        $('#<%= IfrmFilter.ClientID %>').attr('src', url);
        $("#divFilter").ShowModal();
        return false;
    });
}

var currentCodeDiv;
var crtControl;

function LaunchCriteriaCode(ctl) {
    crtControl = $(ctl);
    currentCodeDiv = $(ctl).closest('tr').find('.divCriteriaCodeValue');

    if (currentCodeDiv.val() != "") {
        var data = new Object();
        data["Data"] = currentCodeDiv.val();
        data["EID"] = $.QS("EntityID");
        $.Notify("Loading...");
        PageMethods.SetCriteriaCode(data, onCriteriaSuccess, onCriteriaError);
        myFilterModel.addTask();
    }
    else {

        $('#ContentPlaceHolder1_rblSeries_0').attr('checked', true);
        $("#trSeries").hide();
        $("#<%= trNumberStart.ClientID %>").show();
        $("#hdnResetId").val((new Date()) / 1);
        $find("<%= ntxtNumberStart.ClientID %>").set_value(0);

        $("#<%= txtReset.ClientID %>").val('');
        $("#<%= chkPrefill.ClientID %>").checked(false);
        $("#chkDoNotReset,#chkPrefixChange,#chkSuffixChange").checked(false);
        toggleReset();
        if (!$("#<%= chkPrefill.ClientID %>").checked()) {
            $("#<%= trPrefillLen.ClientID %>").hide();
            $("#<%= trPrefillChar.ClientID %>").hide();
        }

        $find("<%= edPrefix.ClientID %>").set_value("");
        $find("<%= edSuffix.ClientID %>").set_value("");

        $("#divAutoGenerated").ShowModal();
        myFilterModel.addTask();

    }

    return false;
}

function LoadSeriesXML() {

    ko.applyBindings(myFilterModel, document.getElementById('tbl'));
    myFilterModel.addTask();
}

function onCriteriaSuccess(data) {
    $.Notify(false);
    if (data != null) {

        if (data["SeriesData"].length > 0)
            crtControl.text('Edit Code');

        if (data["Mode"].toLowerCase() == "series") {
            $('#ContentPlaceHolder1_rblSeries_1').attr('checked', true);
            $("#trSeries").show();
            $("#<%= trNumberStart.ClientID %>").hide();
            dbCols = [];
            dbCols = eval(data["SeriesData"]);
            myFilterModel.rebind(dbCols);
        }
        else {
            $('#ContentPlaceHolder1_rblSeries_0').attr('checked', true);
            $("#trSeries").hide();
            $("#<%= trNumberStart.ClientID %>").show();
            $find("<%= ntxtNumberStart.ClientID %>").set_value(data["startFrom"]);
        }

        $("#<%= txtReset.ClientID %>").val(data["ResetText"])
        $("#<%= txtReset.ClientID %>").attr("title", data["ResetTitle"]);

        $("#chkDoNotReset").checked(data["DoNotReset"]);
        $("#chkPrefixChange").checked(data["ResetOnPrefix"]);
        $("#chkSuffixChange").checked(data["ResetOnSuffix"]);
        toggleReset();
        $("#<%= chkPrefill.ClientID %>").checked(data["isPreFill"]);
        $("#<%= chkAllowMod.ClientID %>").checked(data["AllowModification"]);
        if (data["isPreFill"]) {
            $("#<%= trPrefillLen.ClientID %>").show();
            $("#<%= trPrefillChar.ClientID %>").show();
            $find("<%= ntxtPrefillLength.ClientID %>").set_value(data["PreFillLength"]);
            $("#<%= txtPrefillChar.ClientID %>").val(data["PreFillChar"]);
        }
        else {
            $("#<%= trPrefillLen.ClientID %>").hide();
            $("#<%= trPrefillChar.ClientID %>").hide();
        }

        $find("<%= edPrefix.ClientID %>").set_value(data["PrefixData"]);
        $find("<%= edSuffix.ClientID %>").set_value(data["SuffixData"]);

        if (!data["ResetID"])
            $("#hdnResetId").val((new Date()) / 1);
        else
            $("#hdnResetId").val(data["ResetID"]);
    }
    $("#divAutoGenerated").ShowModal();
}

function onCriteriaError(data) {
    $.Notify(false);
}


function SaveCriteriaCode() {
    var codeXMl = "";
    var series = $('#<%=rblSeries.ClientID %> input:checked').val();
    var ntxt = $find("<%= ntxtNumberStart.ClientID %>");
    var chkFill = $("#<%= chkPrefill.ClientID %>").checked();

    var chkAllowMod = $("#<%= chkAllowMod.ClientID %>").checked();

    codeXMl += " <AllowModification Value='" + chkAllowMod + "' /> ";
    //<ResetNumbering Value=""[0fc6f152-9270-41c9-8e50-54bcceb88473#category:tbl_CORE_USER_category]"" /> 
    var seriesXMLtxt = "";
    $("#tbl").find('TR').each(function () { seriesXMLtxt += CreateSeriesXml($(this)) });

    if (series == "0")
        codeXMl += " <StartFrom Mode='Simple' StartNumber='" + $find("<%= ntxtNumberStart.ClientID %>").get_value() + "' >  </StartFrom>";
    else
        codeXMl += " <StartFrom Mode='Series' > " + seriesXMLtxt + " </StartFrom> ";

    var txtReset = $("#<%= txtReset.ClientID %>").val();
    //codeXMl += " <ResetNumbering Value='" + txtReset + "' ResetOnPrefix='" + ($("#chkPrefixChange").checked() ? 1 : 0) + "' ResetOnSuffix='" + ($("#chkSuffixChange").checked() ? 1 : 0) + "'  />";
    codeXMl += " <ResetNumbering Value='" + txtReset + "' ResetID='" + $("#hdnResetId").val() + "' DoNotReset='" + ($("#chkDoNotReset").checked() ? 1 : 0) + "' ResetOnPrefix='" + ($("#chkPrefixChange").checked() && !$("#chkDoNotReset").checked() ? 1 : 0) + "' ResetOnSuffix='" + ($("#chkSuffixChange").checked() && !$("#chkDoNotReset").checked() ? 1 : 0) + "'  />";
    codeXMl += " <Prefill Value='" + chkFill + "' ";
    if (chkFill) {
        var prelend = $find("<%= ntxtPrefillLength.ClientID %>").get_value();
        var fillchar = $("#<%= txtPrefillChar.ClientID %>").val();

        codeXMl += " Length='" + prelend + "' PrefillChar='" + fillchar + "'  /> ";
    }
    else
        codeXMl += " Length='0' PrefillChar='0' /> ";

    var str = "";
    var pfx = $find("<%= edPrefix.ClientID %>").get_value();

    if (pfx != "") {

        str = $("<span>" + $find("<%= edPrefix.ClientID %>").get_value() + "</span>").text();

        $("<span>" + $find("<%= edPrefix.ClientID %>").get_value() + "</span>").find("A").each(function () {
            str = str.replace($(this).text(), $(this).attr("href"));
        });

        codeXMl += " <Prefix Value='" + str + "' />";
    }

    var sfx = $find("<%= edSuffix.ClientID %>").get_value();
    if (sfx != "") {

        str = "";
        str = $("<span>" + $find("<%= edSuffix.ClientID %>").get_value() + "</span>").text()

        $("<span>" + $find("<%= edSuffix.ClientID %>").get_value() + "</span>").find("A").each(function () {
            str = str.replace($(this).text(), $(this).attr("href"));
        });

        codeXMl += " <Suffix Value='" + str + "' />";
    }

    currentCodeDiv.val(codeXMl);
    $("#divAutoGenerated").HideModal();

    return false;
}

        function toggleReset() {
            $("#trResetNumber").setDisplay(!$("#chkDoNotReset").checked());
        }
function CriteriaDelete(ctl) {
    var len = $('.trCriteria').length;

    var delrow = $(ctl).closest('tr');
    if (len == 1) {

    }
    else {
        delrow.remove();
        len = len - 1;
        var crno = 1;
        $("#tblCriteria tr").each(function () {
            $(this).find('#crno').html("Criteria No " + crno);
            crno += 1;
            len -= 1;
        });
    }
}


function LoadCriteriaData() {
    var criteria = "";
    var arrInfo = CriInfo.split('|||');
    myFilterModel = new FilterTaskListViewModel();
    ko.applyBindings(myFilterModel, document.getElementById('tbl'));
    for (var a = 0; a < arrInfo.length; a++) {
        var data = arrInfo[a].split('~');
        if (a == 0) {
            var crFirst = $("#tblCriteria tr:first");
            $(crFirst).find('.divCriteriaFilterValue').val(data[0]);
            $(crFirst).find('.divCriteriaCodeValue').val(data[1]);
        }
        else {
            var crClone = $("#tblCriteria tr:first").clone();
            $(crClone).find('#crno').html("Criteria No " + ((a + 1) + 1));
            $(crClone).find('.divCriteriaFilterValue').val('');
            $(crClone).find('.divCriteriaCodeValue').val('');
            $(crClone).find('.divCriteriaFilterValue').val(data[0]);
            $(crClone).find('.divCriteriaCodeValue').val(data[1]);
            $("#tblCriteria").append(crClone);

        }
    }
}




function toggleEntityTree(txt) {
    if ($.QS("FieldType").toLowerCase() != "mixedselect" &&
            $.QS("FieldType").toLowerCase() != "mixedmultiselect") {
        $("#<%= tvEntity.ClientID %>").find(".rtChk").remove();
}
    $(txt).next().show();
}

function OnClientItemsRequesting(sender, eventArgs) {
    var context = eventArgs.get_context();
    context["@EntityID"] = $('#<%= hdnEntityID.ClientID %>').val();
    context["Type"] = "LoadFormCodeList";
}

function OnClientItemsRequesting_TableFields(sender, eventArgs) {
    var context = eventArgs.get_context();
    context["@EntityID"] = $('#<%= hdnEntityID.ClientID %>').val();
    context["Type"] = "LoadTableFields";
}



function rcbTableDisplay_OnClientSelectedIndexChanged(sender, args) {
    $('#<%= hdnTblFiled.ClientID %>').val(args.get_item().get_value());
}

function ChangeArrayValue(ctl) {
    var itmTxt = $(ctl).val().Replace(" ", "");
    $("#<%= txtItemValue.ClientID %>").val(itmTxt);
    return false;
}

function ShowDependency() {
    var chk = $("#<%=chkDependent.ClientID%>");
    chk.closest("TD").find(".lnkEdt").setVisible(chk.checked());
}

function OpenDependentFilter() {
    isDependentFilter = 1;
    var data = new Object();
    data["PageType"] = $.QS("PageType");
    data["EID"] = "";
    data["SID"] = dsid;
    data["SubQuery"] = $("#<%= hdnDependentFilter.ClientID %>").val();
    data["PageMode"] = "subquery";
    data["srno"] = "";
    data["ParamCheck"] = "";
    data["PageType"] = $.isEmpty(data["SubQuery"]) ? "A" : "E";
    data["SubMode"] = $.isEmpty(data["SubQuery"]) ? "Add" : "E";
    PageMethods.SetDependentFilterSession(data, function () {
        var url = "../Meta/Filters_Add.aspx?PageMode=subquery&SID=" + dsid + "&PrID=" + $.QS("EntityID");
        $('#<%= IfrmFilter.ClientID %>').attr('src', url);
        $("#divFilter").ShowModal();
    });
    return false;
}
function saveSubXml(subqueryXml, srno, subquery) {
    if (isDependentFilter == 1) {
        $("#divFilter").HideModal();
        $("#<%= hdnDependentFilter.ClientID %>").val(subqueryXml);
    }
    else {
        $("#divFilter").HideModal();
        $("#<%= hdnAdvSubQryFilter.ClientID %>").val(subqueryXml);
    }
}




function ShowAdvancedFilterLink() {
    var ctlChk = $("#<%= chkDynamicAdvanced.ClientID %>")
    if ($(ctlChk).checked()) {
        $("#divAdvFilter").show();
        $("#divSimpleFilter").hide();
    }
    else {
        $("#divAdvFilter").hide();
        $("#divSimpleFilter").show();
    }
    return;
}

function LaunchAdvancedFilter(ctlLink) {
    var data = new Object();
    data["PageType"] = $.QS("PageType");
    data["EID"] = "";
    data["SID"] = advancefilterid;
    data["SubQuery"] = $("#<%= hdnAdvSubQryFilter.ClientID %>").val();
    data["PageMode"] = "subquery";
    data["srno"] = "";
    data["ParamCheck"] = "";
    data["PageType"] = $.isEmpty(data["SubQuery"]) ? "A" : "E";
    data["SubMode"] = $.isEmpty(data["SubQuery"]) ? "Add" : "E";
    PageMethods.SetDependentFilterSession(data, function () {
        var url = "../Meta/Filters_Add.aspx?PageMode=subquery&SID=" + advancefilterid + "&PrID=" + $.QS("EntityID");
        $('#<%= IfrmFilter.ClientID %>').attr('src', url);
        $("#divFilter").ShowModal();
    });
    return;
}


function GetDynamicTreeNode(sender, args) {
    if ($("#divDynamicTree").parent().parent().attr("id") == "<%=trUnique1.ClientID%>")
        return;
    var node = args.get_node();
    if (node.get_level() == 0)
        return;

    var n = node;
    var f = "";
    while (n.get_level() > 0) {
        f = n.get_value() + "." + f;
        if (n.get_level() == 0)
            break;
        else
            n = n.get_parent();
    }
    f = f.Trim('.');
    if (n.get_attributes().getAttribute("SessionEntity") == "1") {
        f = "@" + n.get_value() + "." + f + "";
    }
    else if (n.get_value() == "Field" || n.get_value() == "Parent" || n.get_value() == "User" || n.get_value() == "Company") {
        f = "" + n.get_value() + "." + f + "";
    }
    else if (n.get_value() == "FieldAPI") {
        f = node.get_value();
    }
    else if (n.get_value() == "Logical") {
        if (node.get_value() == "If")
            f = "if(EXPR){\n\n}\nelse{\n\n}\n";
        else if (node.get_value() == "While")
            f = "\nwhile(EXPR){\n\n\n}\n";
        else if (node.get_value() == "For")
            f = "\nfor(var i=0;i<1;i++){\n\n\n}\n";
        else
            f = "Fn." + f + (f.indexOf("(") < 0 ? "()" : "");
    }
    else if (n.get_attributes().getAttribute("Prefix") == "Fn") {
        f = "Fn." + f + (f.indexOf("(") < 0 ? "()" : "");
    }
    else if (n.get_attributes().getAttribute("Prefix") == "WF") {
        f = "[WF." + n.get_value() + "." + f + "]";
    }
    else if (n.get_attributes().getAttribute("Prefix") == "WFVar") {
        f = "[WF." + f + "]";
    }

    var txtflt = $("#<%= txtSimpleFilter.ClientID %>");
            f = f.Replace("\\n", "\n");
            txtflt.val(txtflt.val() + f);
        }

        function ShowDynamicTree(ctl, mode) {
            var trDiv = $("#divDynamicTree");
            $(ctl).after(trDiv);
            trDiv.show();
            trDiv.css("right", "");
            return;
        }


        function tvItems_NodePopulate(sender, args) {
            var node = args.get_node();
            var context = args.get_context();

            context["EntityID"] = node.get_attributes().getAttribute("ParentTable");
        }

        function HideDynamicTree(sender, evtargs) {
            if ($("#divDynamicTree").parent().parent().attr("id") == "<%=trUnique1.ClientID%>")
                $("#multiUnique").multiSelect().addItem({ Text: evtargs.get_node().get_text(), Value: evtargs.get_node().get_value() });
        }
        function GetUniqueKeys() {
            if (!$("#<%=chkUnique.ClientID%>").checked())
        return "";
    var datakeys = "<UniqueKeys>";
    var arr = $("#multiUnique").multiSelect().getItems();
    for (var l = 0; l < arr.length; l++) {
        var sortItem = $(arr[l]);
        datakeys += " <Cols Name=\"" + $.encodeXml(sortItem.data("Value"), true) + "\"  />";
    }

    return datakeys + "</UniqueKeys>";
}
$(document).click(function (e) {

    if ($("#divDynamicTree").isVisible() && !$(e.srcElement).closest("#divDynamicTree").exists() && (!$(e.srcElement).hasClass("divAdvTreeSimple"))) {
        $(document.body).append($("#divDynamicTree").hide());
    }
});

function rcbDynDataType_OnClientSelectedIndexChanged(sender, args) {
    var dtype = $find("<%= rcbDynDataType.ClientID %>").get_selectedItem();

            $("#<%= trRounding0.ClientID %>").hide();
            $("#<%= trCurrency.ClientID %>").hide();
            $("#<%= chkDescript.ClientID %>").parent().parent().hide();

            if (dtype.get_value().toLowerCase() == "text") {
                $("#<%= chkDescript.ClientID %>").parent().parent().show();
    }
    else if (dtype.get_value().toLowerCase() == "decimal" ||
        dtype.get_value().toLowerCase() == "percent") {
        $("#<%= trRounding0.ClientID %>").show();
    }
    else if (dtype.get_value().toLowerCase() == "currency") {
        $("#<%= trCurrency.ClientID %>").show();
    }
}


function ClientKeyPressing(ctl) {
    $(ctl).find(ctl00_ContentPlaceHolder1_rcbCurrencyList_Input).val('');
}


function rcbRounding_OnClientSelectedIndexChanged(sender, args) {
    $("#<%= txtRoundingSettings.ClientID %>").hide();
    var rnd = $find("<%= rcbRounding.ClientID %>");
    if (rnd != undefined || rnd != null) {

        $find("<%= rcbRoundingType.ClientID %>").set_visible(false);
        if (rnd.get_selectedItem() != null) {
            if (rnd.get_selectedItem().get_value() == "SD") {

                $("#<%= txtRoundingSettings.ClientID %>").show();
            }

            if (rnd.get_selectedItem().get_value() / 1 >= 0)
                $find("<%= rcbRoundingType.ClientID %>").set_visible(true);
        }
    }
}


function rcbCurrencyList_ClientSelectedIndexChanged(sender, args) {
    $("#<%= txtCurrencySetting.ClientID %>").hide();
    var rnd = $find("<%= rcbCurrencyList.ClientID %>");
    if (rnd != undefined || rnd != null) {
        if (rnd.get_selectedItem()!=null) {
            if (rnd.get_selectedItem().get_value() == "SD") {

                $("#<%= txtCurrencySetting.ClientID %>").show();
            }
        }
    }
}

var aSettingMode = "";

if ($("#divSettingsTree").exists()) {

    var trDiv = $("#divSettingsTree");

    $("#<%=txtRoundingSettings.ClientID %>").on("click", function (e) {
        aSettingMode = "round";
        $(this).after(trDiv.css({ left: $(this).position().left }));
        trDiv.show();
        e.stopPropagation();
    });

    $("#<%=txtCurrencySetting.ClientID %>").on("click", function (e) {
        aSettingMode = "currency";
        $(this).after(trDiv.css({ left: $(this).position().left }));
        trDiv.show();
        e.stopPropagation();
    })

    $(document).on("click", function () { $("#divSettingsTree").hide(); })
    $("#divSettingsTree").on("click", function (e) { e.stopPropagation(); });
}

$(document).click(function (e) {
    if ($("#divSettingsTree").isVisible() && !$(e.srcElement).closest("#divSettingsTree").exists()) {
        $(document.body).append($("#divSettingsTree").hide());
    }
});


function tvSettings_NodeClick(sender, args) {
    var node = args.get_node();
    if (node.get_level() == 0)
        return;

    var n = node;

    if (n.get_attributes().getAttribute("isvalue") != "1")
        return;

    var f = "";
    while (n.get_level() > 0) {
        f = n.get_value() + "." + f;
        if (n.get_level() == 0)
            break;
        else
            n = n.get_parent();
    }
    f = f.Trim('.');
    if (n.get_attributes().getAttribute("IsSetting") == "1") {
        f = "Setting." + n.get_value().replace("SETTING", "").toLowerCase() + "." + f.toLowerCase() + "";
    }
    else if (node.get_attributes().getAttribute("valid") == "1") {
        f = "Setting." + f.replace("APP:", "").toLowerCase();
    }
    if (aSettingMode == "currency") {
        var txtset = $("#<%= txtCurrencySetting.ClientID %>");
                txtset.val('');
                txtset.val(txtset.val() + f);
            }
            if (aSettingMode == "round") {
                var txtset = $("#<%= txtRoundingSettings.ClientID %>");
                txtset.val('');
                txtset.val(txtset.val() + f);
            }

            $("#divSettingsTree").hide();
        }

        function ShowDocument() {

            window.open("Documentation_Add.aspx?PageType=E&ID=" + $.QS("ID") + "&ModeType=FIELDS&Hdr=Field: " + $("#<%= txtDisName.ClientID %>").val());
            return false;
        }
    </script>
</asp:Content>
