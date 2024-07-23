<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/Default.Master" CodeBehind="StaticLayOut_Add.aspx.cs" Inherits="SensysErp.Meta.StaticLayOut_Add" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
  

     <%# HelperLib.Web.WebResources.GetResource("~/Css/black/jquery-ui-1.10.3.custom.css")%>
   <%# HelperLib.Web.WebResources.GetResource("~/css/layout_grid.css")%>
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
        #divUrlTree
        {
            position: absolute;
            display: none;
            margin-left: 335px;
            width: 290px;
            height: 265px;
            background-color: #FFF;
            border: solid 2px #4D4C4C;
            border-radius: 5px;
            z-index: 10;
            box-shadow: 2px 2px 5px #555;
            overflow-y: auto;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
   
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">

        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
            <telerik:RadTabStrip ID="tabRightsInfo" style="margin-top:17px;margin-left:22px" runat="server" MultiPageID="RadMultiPageRights"
                OnClientTabSelected="OnClientTabSelected1"
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
                Style="margin-left: 22px !important; width: 86% !important;height:380px;border:1px solid #6767A5">
                <telerik:RadPageView ID="pvGeneral" runat="server" Style="padding: 10px 0 0 10px;height:100%">
                    <div class="div-form">
                        <table class="table-form">
                            <tr>
                                <td class="td-label">
                                    <asp:Label ID="lblViewName" Style="vertical-align: top" CssClass="labeltext" runat="server" Text="View Name"></asp:Label>
                                </td>
                                <td class="td-value">
                                    <asp:TextBox ID="txtViewName" Style="vertical-align: top" CssClass="BtnText" runat="server"></asp:TextBox>
                                    <asp:HiddenField ID="hdnReportName" runat="server" />
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
                             <tr >
                        <td></td>
                        <td class="td-value">
                            <asp:LinkButton ID="lnkDocument" CssClass="document" runat="server" OnClientClick="return ShowDocument();" Text="Documentation"></asp:LinkButton>
                        </td>
                    </tr>
                            <tr>
                                <td class="td-label">
                                    <asp:Label ID="lblUrl" Style="vertical-align: top" CssClass="labeltext" runat="server" Text="Enter Url"></asp:Label>
                                </td>
                                <td class="td-value">
                                    <asp:TextBox ID="txtUrl" TextMode="MultiLine" runat="server"></asp:TextBox>
                                    <input type="button" id="btnUrl" value="..." />
                 
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
                        </table>

                    </div>
                </telerik:RadPageView>
                <telerik:RadPageView ID="pvRole" runat="server" Style="padding: 10px 0 0 10px;height:100%">
                    <iframe id="ifrmRole" frameborder="0" style="height: 99%; width: 99%" runat="server"></iframe>
                </telerik:RadPageView>

            </telerik:RadMultiPage>
            <div class="row" style="margin-left:20px;margin-top:3px">
                <input type="button" id="btnSubmit" runat="server" onclick="Save(this)" class="ActionButton GlassButton" value="Save" />
                <input type="button"onclick="closeForm()" class="ActionButton GlassButton" value="Cancel" />
            </div>
   <div id="divUrlTree" style="display:none">
                        <telerik:RadTreeView ID="tvUrl" OnClientNodeClicked="selectUrl" runat="server">
                        </telerik:RadTreeView>
                    </div>
        </ContentTemplate>
    </asp:UpdatePanel>
    <script>

        $(function () {

            $("#tvCtrEnt,#divUrlTree").on("click", function (e) { e.stopPropagation(); });
            $(document).on("click", function (e) { $("#tvCtrEnt,#divUrlTree").hide(); });
            $("#btnUrl").on("click", function (e) { toggleUrlTree(e.target); e.stopPropagation(); })
        });
        function toggleUrlTree(btn) {
            $("#divUrlTree").show().position({ my: "left top", at: "left bottom", of: btn });
        }
        function selectUrl(sender, args) {
            var n = args.get_node();
            if (n.get_attributes().getAttribute("IsFile")) {
                $("#<%=txtUrl.ClientID%>").val(n.get_value());
                $("#divUrlTree").hide();
            }
        }
        function Save(btn) {

            var data = new Object();
            data["Type"] = "SaveStaticRecord";
            data["@EntityId"] = $.QS("EID");
            data["@LayoutId"] = $.QS("ID");
            data["@ModuleId"] = $.QS("Module");
            data["@LayoutName"] = $('#<%= txtViewName.ClientID %>').val();
            data["@Tag"] = $('#<%= txtTag.ClientID %>').val();
            data["@Url"] = $('#<%= txtUrl.ClientID %>').val();
            data["@LayoutType"] = $.QS("LayoutType");
            data["@IsActive"] = 1;
            data["@SystemDefined"] = 1;
            data["@Description"] = $('#<%= txtDesc.ClientID %>').val();
            data["@FromLayout"] = $.QS("FromLayout");
            data["@TableName"] = $.QS("TableName");

            data["@ResourceVersion"] = $.defaultVal($('#<%= txtResVersion.ClientID %>').val(), 0);
            var arrRoles = [];
            arrRoles = [];//
            var arr = $("#<%= ifrmRole.ClientID%>")[0].contentWindow.GetRoles()
            for (var i = 0; i < arr.length; i++) arrRoles.push(arr[i]);
            var Permission = [];
            var arrPermission = $("#<%= ifrmRole.ClientID%>")[0].contentWindow.GetPermission();
            for (var i = 0; i < arrPermission.length; i++) Permission.push(arrPermission[i]);

            data["arrPermission"] = Permission;
            data["arrRoles"] = arrRoles;
            data["au"] = $.QS("_au");
            $.Notify("Saving...");
            PageMethods.Execute(data, arrRoles, Permission, function (result) { $.Notify(false); OnExecuteSuccess(result); }, function (d) { $.Notify({ Message: "Error Occured.", NotifyOnly: true }); });
            layoutId = data["@LayoutId"];
            return false;
        }

        function OnExecuteSuccess(result) {
            //{ ViewID: "10", Type: "TBL_EMPLOYEEQUALIFICATION", ViewName: "Qualification new", Cols: [{ Title: "Qualification new", EntityPath: "", Name: "7", Width: 250 }, { Title: "Description new", EntityPath: "", Name: "8", Width: 200 }, { Title: "Period", EntityPath: "", Name: "9", Width: 150 }] };
            if (result.Success == "Success") {
                RefreshParent(true);
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

        function ShowDocument() {
            window.open("Documentation_Add.aspx?PageType=E&ID=" + $.QS("ID") + "&ModeType=" + $.QS("LayoutType") + "&Hdr=" + $("#<%= txtViewName.ClientID %>").val());
            return false;
        }
    </script>
</asp:Content>


