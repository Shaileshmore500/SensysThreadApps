<%@ Page Language="C#" AutoEventWireup="true" Title="Session Entity" MasterPageFile="~/Meta/MetaMain.Master" ValidateRequest="false" CodeBehind="SessionEntities_Add.aspx.cs" Inherits="SensysErp.Meta.SessionEntities_Add" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">



    <script type="text/javascript">

        //window.title="title"
        document.documentElement.style.overflowX = "hidden"
        document.documentElement.style.overflowY = "hidden"

    </script>

    <style type="text/css">
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
        #tvCtrEnt
        {
            position: absolute;
            display: none;
            width: 224px;
            height: 295px;
            background-color: #fff;
            border: solid 2px #4D4C4C;
            z-index: 10;
            box-shadow: 2px 2px 5px #555;
            overflow-y: auto;
        }

        .DarkTheme #tvCtrEnt
        {
            background-color: #313131;
        }
    </style>

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
                                <asp:Label ID="lblChild" runat="server" Text="Entity"></asp:Label>
                            </td>
                            <td class="td-value">
                                <telerik:RadDropDownTree Skin="Silk" ID="rddEntity" EnableFiltering="true" RenderMode="Lightweight" OnClientDropDownClosing="OnClientDropDownClosing" AutoPostBack="true" runat="server" Width="400px" OnClientEntryAdding="OnClientEntryAdding" DefaultValue="all" DefaultMessage="Select Entity" ExpandNodeOnSingleClick="true">
                                    <DropDownNodeTemplate>
                                        <div class="<%# DataBinder.Eval(Container.DataItem, "cssStyle") %>">
                                            <span>
                                                <%# DataBinder.Eval(Container, "Text") %>
                                            </span>
                                        </div>
                                    </DropDownNodeTemplate>

                                    <FilterSettings Highlight="Matches" EmptyMessage="Type here to find" />
                                </telerik:RadDropDownTree>
                                <asp:HiddenField ID="hdnEntityID" runat="server" />
                            </td>
                        </tr>
                        <tr id="pnlDis" runat="server" class="srcTable">

                            <td class="td-label">
                                <asp:Label ID="Label2" runat="server" Text="Select Form Code"></asp:Label>
                            </td>
                            <td class="td-value">
                                <telerik:RadComboBox ID="rcbFCode" runat="server" OnClientItemsRequesting="OnClientItemsRequesting" Width="205px" EnableLoadOnDemand="true" EnableAutomaticLoadOnDemand="true">
                                    <WebServiceSettings Method="GetTargetFields_FormCode" Path="SessionEntities_Add.aspx" />
                                </telerik:RadComboBox>
                            </td>

                        </tr>
                        <tr>
                            <td class="td-label">
                                <asp:Label ID="lblCode" runat="server" Text="Code"></asp:Label>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtCode" runat="server" Width="200px"> </asp:TextBox>
                                <asp:HiddenField ID="hdnCode" runat="server" />
                            </td>
                        </tr>
                        <tr>
                            <td class="td-label">
                                <asp:Label ID="lblDisplayName" runat="server" Text="Display Name"></asp:Label>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtDisplayName" runat="server" Width="200px" onclick="getValue();"></asp:TextBox>
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
                            <td></td>
                            <td class="td-value">
                                <asp:CheckBox ID="chkMultiselect" runat="server" Text="Multiselect"></asp:CheckBox>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td class="td-value">
                                <asp:CheckBox ID="chkMandatory" runat="server" Text="Mandatory"></asp:CheckBox>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td class="td-value">
                                <asp:CheckBox ID="chkDeactivate" runat="server" Text="Deactivate"></asp:CheckBox>
                            </td>
                        </tr>
                    </table>
                </div>



            </div>
            <div class="cmdPanel">
                <asp:LinkButton ID="btnSubmit" CssClass="cmdBtn cmdSave" runat="server" Text="Save" OnClientClick="return validation();" OnClick="btnSubmit_Click"></asp:LinkButton>
                <a href="javascript:void(0)" class="cmdBtn cmdClose" onclick="closeForm()">Cancel</a>
            </div>
        </ContentTemplate>
    </asp:UpdatePanel>


    <script type="text/javascript">






        function toggleEntityTree(txt) {
            $(txt).next().show();
        }

        //function RefreshParent() {
        //    alert(1);
        //    window.parent.RefreshGrid();
        //    closeForm();
        //    return false;
        //}

        function closeForm() {
            window.close();
            return false;
        }

        function getValue() {
            var displayName = $("#<%=txtDisplayName.ClientID %>").val();
            var code = $("#<%=txtCode.ClientID %>").val();
            if (displayName == "" && $.QS("PageType") != "E") {
                $("#<%=txtDisplayName.ClientID %>").val(code);
            }
        }

        function validation() {
            var Entity = $("#<%=hdnEntityID.ClientID %>").val();
             var code = $("#<%=txtCode.ClientID %>").val();
             var Err = "";
             if (Entity == "")
                 Err += "Please select Entity \r\r";
             if (code == "")
                 Err += "Please select Session Entity Code \r\n";

             if (Err != "") {
                 alert(Err);
                 return false;
             }
         }



         function OnClientItemsRequesting(sender, eventArgs) {
             var context = eventArgs.get_context();
             context["@EntityID"] = $('#<%= hdnEntityID.ClientID %>').val();
             context["Type"] = "LoadFormCodeList";
         }

         function OnClientDropDownClosing(sender, args) {
             sender._autoPostback = false;
         }

         function OnClientEntryAdding(sender, eventArgs) {
             if (eventArgs.get_node().get_level() == 2) {
                 $("#<%=hdnEntityID.ClientID%>").val(eventArgs.get_entry().get_value());
                 $find("<%=rddEntity.ClientID%>").closeDropDown();
           }
          
         }

    </script>


</asp:Content>
