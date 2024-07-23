<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="DataImportUtility.aspx.cs" Inherits="SensysErp.Meta.DataImportUtility"
    ValidateRequest="false" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

    <script type="text/javascript">

    </script>
    <style>
       
    </style>



</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <%--<asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>--%>
    <div>
        <asp:Wizard ID="ImportWizard" runat="server" ActiveStepIndex="0" Height="475px" Width="910px"
            DisplaySideBar="false" OnNextButtonClick="ImportWizard_NextButtonClick" OnPreviousButtonClick="ImportWizard_PreviousButtonClick">

            <WizardSteps>
                <asp:WizardStep ID="WizardStep_UploadSheet" runat="server" Title="STEP 1 : UPLOAD EXCEL SHEET"
                    StepType="Start">

                    <asp:UpdatePanel ID="UpdatePanel2" runat="server">
                        <ContentTemplate>
                            <div class="div-form">
                                <table class="table-form">
                                    <tr>
                                        <td class="td-label">
                                            <asp:Label ID="lblEntity" runat="server" Text="Select Entity"></asp:Label>
                                        </td>
                                        <td class="td-value">
                                            <telerik:RadDropDownTree ID="ddlEntity" OnClientEntryAdding="OnClientEntryAdding" Skin="Silk" EnableFiltering="true" AutoPostBack="true" runat="server" Style="margin-top: 10px; margin-bottom: 10px" Width="400px" DefaultValue="all" DefaultMessage="Select All" ExpandNodeOnSingleClick="true">
                                                <DropDownNodeTemplate>
                                                    <div class="<%# DataBinder.Eval(Container.DataItem, "cssStyle") %>">
                                                        <span>
                                                            <%# DataBinder.Eval(Container, "Text") %>
                                                        </span>
                                                    </div>
                                                </DropDownNodeTemplate>
                                                <FilterSettings Highlight="Matches" EmptyMessage="Type here to find" />
                                            </telerik:RadDropDownTree>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td class="td-label">

                                            <asp:Label ID="lblMode" runat="server" Text="Select Mode"></asp:Label>
                                        </td>
                                        <td class="td-value">
                                            <telerik:RadComboBox ID="ddlMode" runat="server" Width="200px">
                                                <Items>
                                                    <telerik:RadComboBoxItem Text="Please select" Value="0" />
                                                    <telerik:RadComboBoxItem Text="Add" Value="A" />
                                                    <telerik:RadComboBoxItem Text="Edit" Value="E" />
                                                </Items>
                                            </telerik:RadComboBox>
                                        </td>

                                        <td></td>
                                    </tr>

                                    <tr>
                                        <td class="td-label">
                                            <asp:Label runat="server" Text="Select EXCEL file to upload" ID="lblSelectFile">
                                            </asp:Label>
                                        </td>
                                        <td class="td-value">
                                            <telerik:RadAsyncUpload runat="server" ID="uplFile" TemporaryFolder="~\temp"
                                                MaxFileInputsCount="1" AllowedFileExtensions="xls,xlsx,csv" OnClientValidationFailed="validationFailed"
                                                OnClientFileUploaded="fileUploaded">
                                            </telerik:RadAsyncUpload>
                                        </td>
                                        <td class="td-value">
                                            <asp:Button ID="btnUpload" runat="server" Style="display: none" Text="Upload" OnClick="btnUpload_Click" />
                                        </td>
                                    </tr>
                                    <tr>

                                        <td colspan="3" class="td-label">
                                            <asp:Label ID="lblUploadStatus" runat="server" SkinID="noteLabel"></asp:Label>
                                        </td>
                                    </tr>
                                    <tr id="trSheetNames" runat="server" visible="false">
                                        <td style="width: 200px;" class="td-label">
                                            <asp:Label ID="lblSheetNames" runat="server" Text="Select sheet names">
                                            </asp:Label>
                                        </td>
                                        <td colspan="2" class="td-value">
                                            <telerik:RadComboBox runat="server" ID="cboSheetNames" Width="200px">
                                                <%-- <CollapseAnimation Duration="200" Type="OutQuint" />--%>
                                            </telerik:RadComboBox>
                                        </td>
                                    </tr>
                                    <tfoot>
                                        <asp:Label ID="lblErrorWiz0" runat="server"></asp:Label>
                                    </tfoot>
                                </table>
                        </ContentTemplate>
                    </asp:UpdatePanel>
                </asp:WizardStep>
                <asp:WizardStep ID="WizardStep_MapFields" runat="server" Title="STEP 2 : MAP FIELDS"
                    StepType="Step">
                    <table>
                        <thead style="width: 100%">
                            <asp:Label runat="server" SkinID="boldLabel" ID="Label3" Text="STEP 2 : MAP FIELDS"
                                Width="300px"></asp:Label>
                        </thead>
                    </table>
                    <table style="width: 100%">
                        <%-- <table style="width: 100%">--%>
                        <tr>
                            <td>
                                <asp:CheckBox runat="server" ID="chkFirstRowIsHeader" Enabled="false" Checked="true"
                                    Text="First Row Is Header" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Panel ID="pnlGrid" runat="server">
                                    <telerik:RadGrid ID="dgMapFields" runat="server" AllowPaging="False" AllowSorting="False"
                                        AutoGenerateColumns="False" GridLines="None" GroupingEnabled="False" Skin="Vista"
                                        Width="99%" Height="400px" OnItemDataBound="dgMapFields_ItemDataBound" OnNeedDataSource="dgMapFields_NeedDataSource"
                                        ShowFooter="false" FooterStyle-Font-Bold="true" FooterStyle-Font-Size="Small">
                                        <PagerStyle Mode="NextPrevAndNumeric" PageButtonCount="5" PagerTextFormat="Change page: {4} &amp;nbsp;({0}/{1})&amp;nbsp;&amp;nbsp;Total records : {5}" />
                                        <MasterTableView CommandItemDisplay="Bottom" TableLayout="Fixed">
                                            <RowIndicatorColumn Visible="false">
                                                <HeaderStyle Width="20px" />
                                            </RowIndicatorColumn>
                                            <ExpandCollapseColumn>
                                                <HeaderStyle Width="20px" />
                                            </ExpandCollapseColumn>
                                            <Columns>
                                                <telerik:GridBoundColumn DataField="DisplayName" HeaderText="Map Fields&nbsp" UniqueName="DisplayName">
                                                    <HeaderStyle Width="50%" />
                                                </telerik:GridBoundColumn>
                                                <telerik:GridTemplateColumn HeaderText="Map Field" UniqueName="FieldMapping">                                                    <HeaderStyle Width="50%" />                                                    <ItemTemplate>                                                        <asp:DropDownList ID="ddlExcelFields" runat="server" Width="300px" DataSource='<%#  GetSheetColumnNames() %>' DataTextField="ColumnName" DataValueField="ColumnName"></asp:DropDownList>                                                    </ItemTemplate>                                                </telerik:GridTemplateColumn>
                                                <telerik:GridTemplateColumn HeaderText="Compulsory" Display="false" UniqueName="Compulsory">                                                    <ItemTemplate>                                                        <asp:CheckBox ID="chkCompulsory" runat="server" Checked='<%# HelperLib.Conversion.C.Bool(DataBinder.Eval(Container.DataItem, "mandatory")) %>' />                                                    </ItemTemplate>                                                </telerik:GridTemplateColumn>

                                            </Columns>
                                            <CommandItemTemplate>
                                            </CommandItemTemplate>
                                        </MasterTableView>
                                        <ClientSettings AllowDragToGroup="True" AllowGroupExpandCollapse="False" AllowKeyboardNavigation="True">
                                            <Selecting AllowRowSelect="True" />
                                            <ClientEvents />
                                            <Scrolling AllowScroll="True" ScrollHeight="180px" UseStaticHeaders="True" />
                                            <Resizing AllowColumnResize="True" />
                                        </ClientSettings>
                                    </telerik:RadGrid>
                                </asp:Panel>
                            </td>
                        </tr>
                        <tfoot>
                            <asp:Label ID="lblErrorWiz2" runat="server"></asp:Label>
                        </tfoot>
                    </table>
                </asp:WizardStep>
                <asp:WizardStep ID="WizardStep2" runat="server" Title="STEP 3 :  VALIDATE DATA AND IMPORT"
                    StepType="Finish">
                    <iframe id="Iframe1" name="targetFrame" runat="server" frameborder="0" style="width: 100%; height: 450px"
                        src="DataImportUtility_validator.aspx"></iframe>
                </asp:WizardStep>
            </WizardSteps>
            <StartNavigationTemplate>
                <div style="width: 100%; height: 2px; border-top: solid 1px black;">
                </div>
                <asp:Button ID="StartNextButton" runat="server" CommandName="MoveNext" Text="Next >"
                    OnClientClick="return WizardValidation();" />
                <asp:Button ID="StartCloseButton" runat="server" CommandName="Close" Text="Close"
                    OnClientClick="MDI.Close();return false;" />
            </StartNavigationTemplate>
            <StepStyle VerticalAlign="Top" />
            <SideBarStyle BackColor="#507CD1" VerticalAlign="Top" />
            <NavigationButtonStyle CssClass="defaultButton" />
            <SideBarButtonStyle BackColor="#507CD1" Font-Names="Verdana" ForeColor="White" />
            <HeaderStyle BackColor="#284E98" BorderColor="#EFF3FB" BorderStyle="Solid" Font-Bold="True"
                ForeColor="White" HorizontalAlign="Center" />
            <StepNavigationTemplate>
                <div style="width: 100%; height: 2px; border-top: solid 1px black; text-align: left;">
                    <asp:Label runat="server" ID="lblNavigation" SkinID="watermark"></asp:Label>
                </div>
                <asp:Button ID="StepPreviousButton" runat="server" SkinID="ToolbarButton" CauCausesValidation="False"
                    CommandName="MovePrevious" Text="< Previous" />
                <asp:Button ID="StepNextButton" runat="server" CssClass="StartNextButton" CommandName="MoveNext"
                    Text="Next >" OnClientClick="return ValidateColumnMapping();" />
                <asp:Button ID="StepCloseButton" runat="server" CommandName="Close" Text="Close"
                    OnClientClick="MDI.Close();return false;" />
            </StepNavigationTemplate>
            <FinishNavigationTemplate>
                <div style="width: 100%; height: 2px; border-top: solid 1px black; text-align: left;">
                    <asp:Label runat="server" ID="lblNavigationFinish" SkinID="watermark"></asp:Label>
                </div>
                <asp:Button ID="FinishGotoFirstButton" runat="server" SkinID="ToolbarButton" CauCausesValidation="False"
                    OnClick="btnFinishGotoFirstButton_Click" CommandName="GotoFirst" Text="<< Step 1" />
                <asp:Button ID="StepPreviousButton" runat="server" SkinID="ToolbarButton" CauCausesValidation="False"
                    CommandName="MovePrevious" Text="< Previous" />
                <asp:Button ID="FinishButton" runat="server" CommandName="Finish" Text="Close" OnClientClick="MDI.Close();return false;" />
            </FinishNavigationTemplate>
        </asp:Wizard>
        <asp:HiddenField ID="hdnNodevalue" runat="server" />
        <asp:HiddenField ID="hdnModeValue" runat="server" />
    </div>

    <script type="text/javascript">

        var ajx = Sys.WebForms.PageRequestManager.getInstance();
        ajx.add_pageLoaded(function () {
            if (typeof MDI != "undefined") {

            }
        })

        ajx.add_endRequest(function () {
            if (typeof MDI != "undefined") {

            }
            $("#<%=ImportWizard.ClientID%>").rows(0).css("height", "450px")

        })
    </script>

    <script type="text/javascript">


        function pageLoad() {
            ;
        }

    </script>

    <script type="text/javascript">

        function HandleChange(rdo) {

        }

    </script>

    <script type="text/javascript">

        function NavigateToFirstPage() {
            var wiz = $find('<%=ImportWizard.ClientID%>');
            return false;
        }

        function fileUploaded(sender, args) {
            $get("<%=btnUpload.ClientID %>").click();

        }
        function validationFailed(sender, eventArgs) {
            alert("Please upload files that are of .xls, .xlsx or csv type")
        }
    </script>

    <script type="text/javascript">
        function WizardValidation() {
            var error = "";
            var entity = $('#<%= hdnNodevalue.ClientID %>');
            if ($.defaultVal(entity.val(), '') == "")
                error = error + "\r\n" + " - Please select Entity.";

            var cMode = $find('<%= ddlMode.ClientID %>');
            if (cMode.get_selectedIndex() == 0)
                error = error + "\r\n" + " - Please select Mode.";


            var sheetNames = $find('<%= cboSheetNames.ClientID %>');
            if (sheetNames != null && sheetNames.get_selectedIndex() == 0)
                error = error + "\r\n" + " - Please select Sheet Name";


            if (error.length > 0) {
                alert(error);
                return false;
            }
            else
                return true;
            return false;

        }
    </script>

    <script type="text/javascript">

    </script>

    <script type="text/javascript">
        function onToolBarClientButtonClicking(sender, args) {
            var mode = args.get_item().get_commandName();
            if (mode == "V") {
                return args.set_cancel(!ValidateColumnMapping());
            }
        }

        function ValidateColumnMapping() {
            var grid = $find("<%= dgMapFields.ClientID %>");
            var MasterTable = grid.get_masterTableView();
            var rows = MasterTable.get_dataItems();
            var i = 0;



            var outStr = "";
            for (i = 0; i < rows.length; i++) {
                if ($(MasterTable.getCellByColumnUniqueName(rows[i], "Compulsory")).node(0).checked()) {
                    var cellEntityCbo = $(MasterTable.getCellByColumnUniqueName(rows[i], "FieldMapping")).node(0);
                    var val = cellEntityCbo.val();
                    if (val == "Please Select") {
                        var valName = $(MasterTable.getCellByColumnUniqueName(rows[i], "DisplayName")).html();
                        outStr += "- Please select " + valName.substring(0, valName.indexOf("<")) + "\r\n";
                    }
                }
            }
            if (outStr.length > 0) {
                alert("Map the following fields :\n" + outStr);
                return false;
            }
            else {
                // $get("<%= lblErrorWiz2.ClientID %>").innerHTML = "Fields mapped successfully. Please click next to proceed.";
            }
            return true;
        }

        function StartLoader() {
        }

        //               function StopLoader() {
        //            MDI.StopLoader();
        //        }


        function OnClientEntryAdding(sender, eventArgs) {
            $("#<%=hdnNodevalue.ClientID%>").val(eventArgs.get_entry().get_value());
            $("#<%=hdnModeValue.ClientID%>").val('all');
            $find("<%=ddlEntity.ClientID%>").closeDropDown();

        }
    </script>

</asp:Content>

