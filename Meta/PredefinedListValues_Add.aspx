<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="PredefinedListValues_Add.aspx.cs" Inherits="SensysErp.Meta.PredefinedListValues_Add" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">

        //window.title="title"
       // document.documentElement.style.overflowX = "hidden"
        // document.documentElement.style.overflowY = "hidden"
        window.ht = 500;
        window.wd = 600;
        

    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
              <div class="div-form">
            <table id="tdvalue" class="table-form" >
                <tr>
                    <td class="td-label">
                        <asp:Label ID="lblPredefvalue" runat="server" Text="Predefined Value Text"></asp:Label>
                    </td>
                    <td class="td-value">
                        <asp:TextBox ID="txtPredefvalue" runat="server" Width="125px" MaxLength="70">
                        </asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td valign="top" class="td-label">
                        <asp:Label ID="lblPreInfo" runat="server" Text="Value Information 1"></asp:Label>
                    </td>
                    <td class="td-value">
                        <asp:TextBox ID="txtInfo1" runat="server" Width="125px" TextMode="Multiline"
                            Rows="3">
                        </asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td valign="top" class="td-label">
                        <asp:Label ID="lblInfo2" runat="server" Text="Value Information 2"></asp:Label>
                    </td>
                    <td class="td-value">
                        <asp:TextBox ID="txtInfo2" runat="server" Width="125px" TextMode="Multiline" Rows="3">
                        </asp:TextBox>
                    </td>
                </tr>
                 <tr id="tdGrouping" runat="server" visible="false">
                    <td valign="top" class="td-label">
                        <asp:Label ID="lblGrouping" runat="server" Text="Grouping Column"></asp:Label>
                    </td>
                    <td class="td-value">
                        <telerik:RadComboBox ID="radcbGroupingName" MarkFirstMatch="True" runat="server"
                            Width="150px"  AutoPostBack="False" AllowCustomText="true"></telerik:RadComboBox>
                    </td>
                </tr>
                  <tr id="tdHeirarchy" runat="server" visible="false">
                    <td valign="top" class="td-label">
                        <asp:Label ID="lblParentResources" runat="server" Text="Parent Resources"></asp:Label>
                    </td>
                    <td class="td-value">
                        <telerik:RadComboBox ID="radcbParent" runat="server" Width="150px"></telerik:RadComboBox>
                      <%--  <asp:DropDownList ID="radcbParent"  runat="server" Width="150px"></asp:DropDownList>--%>
                    </td>
                </tr>
                 <tr>
                    <td valign="top" class="td-label">
                        <asp:Label ID="Label1" runat="server" Text="Select small Image"></asp:Label><br/>
                        <asp:label ID="lbl1" runat="server" Text="Select image of 20x20 px">Select image of 20x20 px<br/>(.jpeg,.jpg,.gif,.png,.bmp)</asp:label>
                    </td>
                    <td class="td-value">
                        <telerik:RadBinaryImage Style="padding: 10px !important;" runat="server" Width="20px" Height="20px" ResizeMode="Fit" ID="showsmallImg" AlternateText="" />
                       <telerik:RadAsyncUpload TemporaryFolder="~/temp" ID="radimgUploload1" HttpHandlerUrl = "~/main/AsyncUploader.ashx"  runat="server" OnClientFileUploaded="smallfile"   MaxFileInputsCount="1" ></telerik:RadAsyncUpload>
                    </td>
                </tr>
                 <tr>
                    <td valign="top" class="td-label">
                        <asp:Label ID="Label2" runat="server" Text="Select Image"></asp:Label><br/>
                        <asp:label ID="Label3" runat="server" Text="">(.jpeg,.jpg,.gif,.png,.bmp)</asp:label>
                    </td>
                    <td class="td-value">  
                        <telerik:RadBinaryImage Style="padding: 10px !important;" runat="server" Width="50px" Height="50px"  ResizeMode="Fit" ID="showlargeImg" AlternateText="" />
                         <telerik:RadAsyncUpload TemporaryFolder="~/temp" ID="radimgUploload2" HttpHandlerUrl = "~/main/AsyncUploader.ashx" runat="server"  MaxFileInputsCount="1" OnClientFileUploaded="bigfile"></telerik:RadAsyncUpload>
                       
                    
                    </td>
                </tr>
                <tr style="display:none" >
                    <td class="td-label"></td>
                    <td class="td-value">
                        <asp:CheckBox ID="chkSystem" runat="server" Text="Is System Defined"></asp:CheckBox>
                    </td>
                </tr>
               <%-- <tr>
                    <td colspan="2">
                        <asp:Button ID="btnSubmit" runat="server" Text="Submit" OnClick="btnSubmit_Click" OnClientClick="RefreshParent();" />
                        <asp:Button ID="btnClose" runat="server" Text="Cancel" OnClientClick="CloseWindow();" />
                    </td>
                </tr>--%>
            </table>
                    <div>
                    <asp:LinkButton ID="btnSubmit"  CssClass="cmdBtn cmdSave" runat="server" Text="Submit" OnClick="btnSubmit_Click" OnClientClick="RefreshParent();" ></asp:LinkButton>
                        <asp:LinkButton ID="btnClose" class="cmdBtn cmdClose" runat="server" Text="Cancel" OnClientClick="CloseWindow();" ></asp:LinkButton>
                </div>
                  </div>
            
        </ContentTemplate>
    </asp:UpdatePanel>

    <script type="text/javascript">

        function smallfile(sender, args) {
            $("#ContentPlaceHolder1_showsmallImg").attr("src", "../temp/" + args.get_fileInfo().TempName)
        }

        function bigfile(sender, args)
        {
            $("#ContentPlaceHolder1_showlargeImg").attr("src", "../temp/" + args.get_fileInfo().TempName)
        }

        function RefreshParent() {
            window.parent.RefreshParentGrid();
            return false;
        }

        function CloseWindow() {
            window.parent.ParentCloseWindow();
            return false;
        }

</script>

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
                 CloseWindow();
             }
         })
    </script>

     
</asp:Content>


