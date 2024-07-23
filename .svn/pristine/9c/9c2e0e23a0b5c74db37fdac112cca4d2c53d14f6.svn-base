<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" ValidateRequest="false" CodeBehind="MstUserScope_Add.aspx.cs" Inherits="SensysErp.Meta.MstUserScope_Add" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Erp.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Ui.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Fn.js")%>
    <script type="text/javascript">

        //window.title="title"
        //document.documentElement.style.overflowX = "hidden"
        //document.documentElement.style.overflowY = "hidden"

    </script>


</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
            <div class="div-form" id="divMain">
                <div id="div1" runat="server">
                    <table class="table-form">
                        <tr>
                            <td class="td-label">
                                <asp:Label ID="lblName" runat="server" Text="Name"></asp:Label>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtName" runat="server" Width="150px"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-label">
                                <asp:Label ID="lblScope" runat="server" Text="Scope Type"></asp:Label>
                            </td>
                            <td class="td-value">
                                <telerik:RadComboBox ID="rcbScopeType" OnClientSelectedIndexChanged="OnClientSelectedIndexChanged" runat="server" Width="150px">
                                    <Items>
                                        <telerik:RadComboBoxItem Text="My Company" Value="MY COMPANY" />
                                        <telerik:RadComboBoxItem Text="All Company Below" Value="ALL COMPANY BELOW" />
                                        <telerik:RadComboBoxItem Text="All Companies" Value="ALL COMPANIES" />
                                        <telerik:RadComboBoxItem Text="Custom" Value="CUSTOM" />
                                    </Items>
                                </telerik:RadComboBox>
                            </td>
                        </tr>
                        
                    </table>
                    <div>
                        <telerik:RadTreeList AllowLoadOnDemand="false" ID="rtlScope" runat="server" SkinID="NoPosBackTreeList"
                            DataKeyNames="Company_Pid" AllowPaging="false" ParentDataKeyNames="ParentCompany_Fid" ClientSettings-Selecting-AllowItemSelection="true"
                            AutoGenerateColumns="false" AllowSorting="false" Skin="Vista" Style="overflow: auto">
                            <Columns>
                                 <telerik:TreeListTemplateColumn HeaderStyle-Width="30px" UniqueName="asd">
                                    <ItemTemplate>
                                        <asp:CheckBox ID="chkAccess" CssClass="chkAccess" Enabled='<%# HelperLib.Conversion.C.Int(Eval("UserScopeDetails_Pid")) >=0%>' companyid='<%# Eval("Company_Pid") %>' Checked='<%# !HelperLib.Conversion.C.IsBlank(Eval("UserScopeDetails_Pid"))%>' runat="server" />

                                    </ItemTemplate>

                                </telerik:TreeListTemplateColumn>
                                <telerik:TreeListTemplateColumn DataField="companyname" UniqueName="companyname"
                                    HeaderText="Company Name">
                                    <ItemTemplate>
                                        <asp:Label ID="lblCompany" runat="server" Text='<%# HelperLib.Conversion.C.Str(Eval("CompanyName")) %>'  CssClass='<%# HelperLib.Conversion.C.Str(Eval("RecType")) %>' ></asp:Label>
                                        <asp:Label ID="lblId" runat="server" cid='<%# HelperLib.Conversion.C.Str(Eval("Company_Pid")) %>' CssClass="id"></asp:Label>
                                    </ItemTemplate>
                                    <HeaderStyle Width="50%" />
                                </telerik:TreeListTemplateColumn>
                                <telerik:TreeListTemplateColumn DataField="AddRights" UniqueName="UnAdd"
                                    HeaderText="Add Rights">
                                    <ItemTemplate>
                                        <asp:CheckBox ID="chkAdd" runat="server" Checked='<%# HelperLib.Conversion.C.Bool(Eval("AddRights")) %>' CssClass="addrights" company_pid='<%# Eval("Company_Pid") %>' />
                                    </ItemTemplate>
                                    <HeaderStyle Width="10%" />
                                </telerik:TreeListTemplateColumn>
                                <telerik:TreeListTemplateColumn DataField="EditRights" UniqueName="UnEdit"
                                    HeaderText="Edit Rights">
                                    <ItemTemplate>
                                        <asp:CheckBox ID="chkEdit" runat="server" Checked='<%# HelperLib.Conversion.C.Bool(Eval("EditRights")) %>' CssClass="editrights" company_pid='<%# Eval("Company_Pid") %>' />
                                    </ItemTemplate>
                                    <HeaderStyle Width="10%" />
                                </telerik:TreeListTemplateColumn>
                                 <telerik:TreeListTemplateColumn DataField="ViewRights" UniqueName="UnView"
                                    HeaderText="View Rights">
                                    <ItemTemplate>
                                        <asp:CheckBox ID="chkView" runat="server" Checked='<%# HelperLib.Conversion.C.Bool(Eval("ViewRights")) %>' CssClass="viewrights" company_pid='<%# Eval("company_pid") %>' />
                                    </ItemTemplate>
                                    <HeaderStyle Width="10%" />
                                </telerik:TreeListTemplateColumn>
                                <telerik:TreeListTemplateColumn DataField="DeleteRights" UniqueName="UnDelete"
                                    HeaderText="Delete Rights">
                                    <ItemTemplate>
                                        <asp:CheckBox ID="chkDelete" runat="server" Checked='<%# HelperLib.Conversion.C.Bool(Eval("DeleteRights")) %>' CssClass="deleterights" company_pid='<%# Eval("company_pid") %>' />
                                    </ItemTemplate>
                                    <HeaderStyle Width="10%" />
                                </telerik:TreeListTemplateColumn>
                            </Columns>
                        </telerik:RadTreeList>
                    </div>
                    <div style="padding-top:5px">
                        <asp:LinkButton ID="btnSubmit" runat="server" CssClass="cmdBtn cmdSave" Text="Submit"  OnClientClick="return SaveCompanyRights();"></asp:LinkButton>
                        <a href="javascript:void(0)" class="cmdBtn cmdClose" onclick="closeForm()">Cancel</a>
                    </div>

                </div>

            </div>
        </ContentTemplate>
    </asp:UpdatePanel>
    <script>

        function OnClientSelectedIndexChanged(sender, args) {
            toggleTreeList();
        }

        function pageLoad() {
            toggleTreeList();
        }

        function toggleTreeList() {
            //
            var rtlScope = $("#<%= rtlScope.ClientID %>");
            var scope = $find("<%= rcbScopeType.ClientID %>");
            var val = scope.get_selectedItem().get_value();
            rtlScope.find('.Custom').closest('TR').hide();
            rtlScope.find('.Gen').closest('TR').hide();
            if (val == "CUSTOM") {
                rtlScope.find('.Custom').closest('TR').show();
            }
            else {
                rtlScope.find('.Gen').closest('TR').show();
            }
        }

        function SaveCompanyRights() {
            if ($("#<%= txtName.ClientID %>").val() == "") {
                alert("Please enter name");
                return false;
            }
            var rtl = $find("<%= rtlScope.ClientID %>");
            var arrRights = [];
            rtl.forEachDataItem(function () {
                var compright = $(this.get_element());
                if (compright.isVisible() && compright.find(".chkAccess").node(0).checked()) {
                    var right = {};
                    arrRights.push(right);
                    right.AddRights = compright.find(".addrights").node(0).checked();
                    right.EditRights = compright.find(".editrights").node(0).checked();
                    right.ViewRights = compright.find(".viewrights").node(0).checked();
                    right.DeleteRights = compright.find(".deleterights").node(0).checked();
                    right.CompanyID = compright.find(".id").attr('cid');
                }
                
            });
            var scope = $find("<%= rcbScopeType.ClientID %>");
            var val = scope.get_selectedItem().get_value();
            var rightData = new Object();
            rightData["Type"] = "SaveCompanyRights";
            rightData["@Scope"] = val;
            rightData["@ID"] = $.QS("ID");
            rightData["@Name"] = $("#<%= txtName.ClientID %> ").val();
            PageMethods.SaveCompanyRights(rightData, arrRights, OnCompanyRightSuccess, OnCompanyRightError);
            return false;
        }

        function OnCompanyRightSuccess(result) {
            Erp.RefreshParent(true);
        }

        function OnCompanyRightError(result) {
            if (result)
                alert('Error in saving rights.');
        }
    </script>
</asp:Content>
