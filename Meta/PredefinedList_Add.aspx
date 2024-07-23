<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="PredefinedList_Add.aspx.cs" Inherits="SensysErp.Meta.PredefinedList_Add" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">

        //window.title="title"
        document.documentElement.style.overflowX = "hidden"
        document.documentElement.style.overflowY = "hidden"

    </script>

    <style>

        #DivFrame
        {
            display:none;	position: fixed; 	left: 805px; 	z-index: 3500; 	top: 606px; 	border: solid 3px #666; 	border-radius: 8px; 	box-shadow: 2px 2px 5px #525252; 	padding: 20px; 	font-family: nunitoregular; 	font-size: 12px;
        }

    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server" UpdateMode="Conditional">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
              <div class="div-form">
            <table class="table-form">
                <tr>
                    <td class="td-label">
                        <asp:Label ID="lblPreCode" runat="server" Text="Predefined List Code"></asp:Label>
                    </td>
                    <td class="td-value">
                        <asp:TextBox ID="txtPreCode" runat="server" Width="150px">
                        </asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td class="td-label">
                        <asp:Label ID="lblPreTitle" runat="server" Text="Predefined List Title"></asp:Label>
                    </td>
                    <td class="td-value">
                        <asp:TextBox ID="txtPreTitle" runat="server" Width="150px" >
                        </asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td class="td-label">
                        <asp:Label ID="lblPreName" runat="server" Text="Predefined List Description"></asp:Label>
                    </td>
                    <td class="td-value">
                        <asp:TextBox ID="txtPreDes" runat="server" Width="150px" TextMode="MultiLine">
                        </asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td class="td-label">
                        <asp:Label ID="lblParent" runat="server" Text="Parent Resources"></asp:Label>
                    </td>
                    <td class="td-value">
                        <telerik:RadComboBox ID="radcbParent" runat="server" Width="150px">
                        </telerik:RadComboBox>
                      <%--  <asp:DropDownList ID="radcbParent" runat="server" Width="150px" ></asp:DropDownList>--%>
                    </td>
                </tr>
                 <tr>
                    <td colspan="2" class="td-value">
                        <asp:RadioButton ID="rdEnableGrouping" runat="server" Text="Enable Grouping" GroupName="Enable" />
                         <asp:RadioButton ID="rdEnableHierarchy" runat="server" Text="Enable Heirarchy" GroupName="Enable"/>
                         <asp:RadioButton ID="rdEnableNull" runat="server" Text="None" GroupName="Enable" />
                       
                    </td>
                </tr>
                <tr>
                    <td colspan="2" class="td-value">
                        <asp:CheckBox ID="chkShowIcon" runat="server" Text="Show Icon">
                        </asp:CheckBox>
                    </td>
                </tr>
                <tr style="display:none">
                    <td class="td-label"></td>
                    <td class="td-value">
                        <asp:CheckBox ID="chkSystem" runat="server" Text="Is System Defined"></asp:CheckBox>
                    </td>
                </tr>
               <%-- <tr>
                    <td></td>
                    <td>
                        <asp:Button ID="btnItems" runat="server" Text="Add Predefined Values" OnClientClick="return OpenPreValuesWindow()" />
                    </td>
                </tr>--%>
              <%--  <tr>
                    <td colspan="2">
                        <asp:Button ID="btnSubmit" runat="server" Text="Submit" OnClick="btnSubmit_Click" OnClientClick="return CheckValidation()" />
                    </td>
                </tr>--%>
            </table>
                  <div>
                    <asp:LinkButton ID="btnSubmit" CssClass="cmdBtn cmdSave" runat="server" Text="Submit" OnClick="btnSubmit_Click" OnClientClick="return CheckValidation()" ></asp:LinkButton>
                </div>
                  </div>

          
           <div id="divRadTreeList" runat="server" style="width:80%" visible="false">
                 <asp:UpdatePanel ID="pnlTreelist" runat="server" UpdateMode="Conditional" >
                     <ContentTemplate>
                <telerik:RadTreeList AllowLoadOnDemand="false" ID="rtlPreDefListValue" runat="server"
                DataKeyNames="PredDefListValue_Pid" ClientDataKeyNames="PredDefListValue_Pid" AllowPaging="false" ParentDataKeyNames="ParentMain" ClientSettings-Selecting-AllowItemSelection="true"
                AutoGenerateColumns="false" AllowSorting="false" SkinID="NoPosBackTreeList" Skin="Vista" Style="overflow: auto"  ClientSettings-ClientEvents-OnTreeListCreated="TreeListCreated_NP" OnNeedDataSource1="rtlPreDefListValue_NeedDataSource" >
                <Columns>
                    <telerik:TreeListBoundColumn HeaderText="rectype"  DataField="rectype" UniqueName="rectype" Display="false"></telerik:TreeListBoundColumn>
                    <telerik:TreeListBoundColumn HeaderText="Display Text"  DataField="DisplayText" UniqueName="DisplayText"></telerik:TreeListBoundColumn>
                    <telerik:TreeListBoundColumn HeaderText="Info1" DataField="Info1" UniqueName="Info1"></telerik:TreeListBoundColumn>
                    <telerik:TreeListBoundColumn HeaderText="Info2" DataField="Info2" UniqueName="Info2"></telerik:TreeListBoundColumn>
               
                     <telerik:TreeListTemplateColumn  UniqueName="Image"
                        HeaderText="Image">
                        <ItemTemplate>
                            <telerik:RadBinaryImage ID="RadBinaryImage1" runat="server"  Width="20px" Height="20px" ResizeMode="Fit" DataValue='<%# Eval("image") %>' />
                        </ItemTemplate>
                        <HeaderStyle Width="20%" />
                    </telerik:TreeListTemplateColumn>
                    <telerik:TreeListTemplateColumn DataField="SystemDefined" UniqueName="SystemDefined"
                        HeaderText="System Defined">
                        <ItemTemplate>
                            <asp:CheckBox ID="chkSystemDefined" runat="server"
                                Checked='<%# HelperLib.Conversion.C.Bool(Eval("SystemDefined")) %>' />
                        </ItemTemplate>
                        <HeaderStyle Width="20%" />
                    </telerik:TreeListTemplateColumn>
                </Columns>
            </telerik:RadTreeList>
             <telerik:RadToolBar ID="RadToolBar2" runat="server" Skin="Vista" Width="100%" OnClientButtonClicking="onToolBarClientButtonClicking2" OnButtonClick="RadToolBar2_ButtonClick" >
                            <CollapseAnimation Duration="200" Type="OutQuint" />
                            <Items>
                                <telerik:RadToolBarButton CommandName="A" ImageUrl="~/images/AddRecord.gif" Text="Add">
                                </telerik:RadToolBarButton>
                                <telerik:RadToolBarButton CommandName="E" Enabled='<%# rtlPreDefListValue.Items.Count > 0?true:false %>' ImageUrl="~/images/Edit.gif" Text="Edit">
                                </telerik:RadToolBarButton>
                                <telerik:RadToolBarButton CommandName="V" Enabled='<%# rtlPreDefListValue.Items.Count > 0?true:false %>' ImageUrl="~/images/Icon.gif" Text="View">
                                </telerik:RadToolBarButton>
                                <telerik:RadToolBarButton CommandName="D" Enabled='<%# rtlPreDefListValue.Items.Count > 0?true:false %>' ImageUrl="~/images/delete.gif" Text="Delete">
                                </telerik:RadToolBarButton>
                                <telerik:RadToolBarButton CommandName="C" ImageUrl="~/images/Cancel.gif" Text="Close">
                                </telerik:RadToolBarButton>
                            </Items>
                        </telerik:RadToolBar>

                   <asp:HiddenField  ID="hdnId" runat="server" />
            <asp:Button ID="btnHdn" runat="server" style="display:none" OnClick="btnHdn_Click" />
                         </ContentTemplate>
             </asp:UpdatePanel>
            </div>
        
            <%--     <iframe id="frmPredeflistValue" runat="server" visible="false" style="width:100%; height:700px;overflow-y:auto"></iframe>--%>



            <div id="DivFrame" style="display:none;">

                <iframe id="frmPredeflistValue" style="width:600px;height:500px;overflow-y:auto;" ></iframe>
            </div>

        </ContentTemplate>
    </asp:UpdatePanel>

    <script type="text/javascript" >

        function OpenPreValuesWindow()
        {
            window.open("PredefinedListValues_View.aspx?PageType=A&PredefID=" + $.QS("ID"));
            return false;
        }

        function CheckValidation() {

            var error = "";
            var code = $("#<%=txtPreCode.ClientID %>").val();
            var title = $("#<%=txtPreTitle.ClientID %>").val();
            var desc = $("#<%=txtPreDes.ClientID %>").val();
            if (code == "")
                error += "Please Enter the Code. \r\n";
            if(title=="")
                error += "Please Enter the Title. \r\n";
            if (desc == "")
                error += "Please Enter the Description.";

            if (error != "") {
                alert(error)
                return false;
            }
            return true;
        }


        function RefreshParentGrid()
        {
            $("#DivFrame").HideModal();
            window.setTimeout(function () { $("#<%=btnHdn.ClientID %>").click(); }, 1000);
        }

        function ParentCloseWindow() {
            $("#DivFrame").HideModal();
        }

        function onToolBarClientButtonClicking2(sender, args) {
            var mode = args.get_item().get_commandName();
            if (mode == "C") {
                args.set_cancel(true);
            }
            else
                return args.set_cancel(!OpenWindow2(mode));
        }

        function OpenWindow2(mode) {
            var text = "";
            if (mode == "A")
                text = "Add PredefinedList Value"
            else if (mode == "E")
                text = "Edit PredefinedList Value";
            else if (mode == "D")
                text = "Delete";
            else {
                mode = "V";
                text = "View PredefinedList Value";
            }
            var newurl = "";

            var frm = $("#frmPredeflistValue")
            if (mode == "A") {
                var PredefID = $("#<%= hdnId.ClientID %>").val();
                if (PredefID == "")
                    PredefID = $.QS("ID");
               // var frm = $("#frmPredeflistValue");
                var url = "PredefinedListValues_Add.aspx?PageType=A&PredefID=" + PredefID;
                frm.attr('src', url)
                $("#DivFrame").ShowModal();
                //window.open("PredefinedListValues_Add.aspx?PageType=A&PredefID=" + PredefID + "");
            }
            else if (mode == "E" || mode == "V" || mode == "D") {

                var id = RadList_GetDataKey("<%= rtlPreDefListValue.ClientID %>");
                  if (id == null) {
                      alert("No record selected.")
                      return false;
                  }
                  var rectype = RadList_GetCellValue("<%= rtlPreDefListValue.ClientID %>", "rectype");
                if (rectype == "group") {
                    alert("Cannot Edit or Delete this Field.")
                    return false;
                }
                if (mode == "D") {
                    return confirm('Do you wish to delete this record?');
                }
                var PredefID = $("#<%= hdnId.ClientID %>").val();
                if (PredefID == "")
                    PredefID = $.QS("ID");
                var url = "PredefinedListValues_Add.aspx?PageType=" + mode + "&ID=" + id + "&PredefID=" + PredefID;
                frm.attr('src', url)
                $("#DivFrame").ShowModal();
               // window.open("PredefinedListValues_Add.aspx?PageType=" + mode + "&ID=" + id + "&PredefID=" + $.QS("ID") + "");
                 
            }
        return false;
    }
    function RadList_GetDataKey(string) {

        var treelist = $find("<%= rtlPreDefListValue.ClientID %>");
        var selectedItem = treelist.get_selectedItems().length;
        if (selectedItem == 0)
            return null;
        var items = treelist.get_selectedItems();
        var item = items[0];
        var key = item.get_dataKeyValue("PredDefListValue_Pid");
        return key;

    }

    function RadList_GetCellValue(string, string) {
        var treelist = $find("<%= rtlPreDefListValue.ClientID %>");
        var selectedItem = treelist.get_selectedItems().length;
        if (selectedItem == 0)
            return null;

            var items = treelist.get_selectedItems();
            var item = items[0];
            var owner = item.get_owner();
            var value = owner.getCellByColumnUniqueName(item, "rectype").innerText;
            return value
        }
         
    </script>
</asp:Content>
