<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="ImpersonationDetails.aspx.cs" Inherits="SensysErp.Meta.ImpersonationDetails" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <title>Impersonation</title>

   

    <script type="text/javascript">

        //window.title="title"
       
    </script>
   
    <style type="text/css">
        .admin
        {
            color:red;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel Style="height: 100%" ID="UpdatePanel1" runat="server">
        <ContentTemplate>
             <hlp:ActionMessage ID="ActionMessage1" runat="server" />
         <div id="RadTreeList" runat="server" style="width:80%">

                <telerik:RadTreeList AllowLoadOnDemand="false" ID="rtlImpersonation" runat="server"
                DataKeyNames="NameId" ClientDataKeyNames="NameId" AllowPaging="false" ParentDataKeyNames="parentID" ClientSettings-Selecting-AllowItemSelection="true"
                AutoGenerateColumns="false" AllowSorting="false" Skin="Vista" SkinID="NoPosBackTreeList"  Style="overflow: auto" OnNeedDataSource="rtlImpersonation_NeedDataSource">
                <Columns>

                    <telerik:TreeListBoundColumn DataField="NameId" UniqueName="NameId" HeaderText="NameId" Display="false"></telerik:TreeListBoundColumn>
                     <%--<telerik:TreeListBoundColumn DataField="Name" UniqueName="Name" HeaderText="Name"  ></telerik:TreeListBoundColumn>--%>

                    <telerik:TreeListTemplateColumn DataField="Name" UniqueName="Name"
                        HeaderText="Name">
                        <ItemTemplate>
                            <asp:Label ID="lblName" runat="server" 
                                class='<%# HelperLib.Conversion.C.Str(Eval("usertype"))=="A"?"admin":"" %>'
                                text ='<%# HelperLib.Conversion.C.Str(Eval("Name")) %>'
                                ></asp:Label>
                               
                        </ItemTemplate>
                        <HeaderStyle Width="10%" />
                    </telerik:TreeListTemplateColumn>

                     <telerik:TreeListTemplateColumn DataField="isImpersonate" UniqueName="isImpersonate"
                        HeaderText="Impersonate">
                        <ItemTemplate>
                            <asp:CheckBox ID="chkisImpersonate" runat="server"
                                Checked='<%# HelperLib.Conversion.C.Bool(Eval("isImpersonate")) %>' 
                                Visible='<%# HelperLib.Conversion.C.Str(Eval("rectype"))=="user"?true:false %>'  />
                        </ItemTemplate>
                        <HeaderStyle Width="10%" />
                    </telerik:TreeListTemplateColumn>

                   

                      <telerik:TreeListTemplateColumn DataField="StartDate" UniqueName="StartDate"
                        HeaderText="Start Date">
                        <ItemTemplate>
                           <telerik:RadDatePicker ID="radstartdatetime" runat="server" 
                                DbSelectedDate='<%# Eval("StartDate")%>'
                               Visible='<%# HelperLib.Conversion.C.Str(Eval("rectype"))=="user"?true:false %>' ></telerik:RadDatePicker>
                        </ItemTemplate>
                        <HeaderStyle Width="20%" />
                    </telerik:TreeListTemplateColumn>
                   
                       <telerik:TreeListTemplateColumn DataField="EndDate" UniqueName="EndDate"
                        HeaderText="End Date">
                        <ItemTemplate>
                           <telerik:RadDatePicker ID="radEnddatetime" runat="server"
                              DbSelectedDate='<%# Eval("EndDate")%>'
                               Visible='<%# HelperLib.Conversion.C.Str(Eval("rectype"))=="user"?true:false %>'
                                 ></telerik:RadDatePicker>
                        </ItemTemplate>
                        <HeaderStyle Width="20%" />
                    </telerik:TreeListTemplateColumn>

                      <telerik:TreeListTemplateColumn DataField="Deactivated" UniqueName="Deactivated"
                        HeaderText="Deactivated">
                        <ItemTemplate>
                            <asp:CheckBox ID="chkDeactivated" runat="server"
                                Checked='<%# HelperLib.Conversion.C.Bool(Eval("Deactivated")) %>'
                            Visible='<%# HelperLib.Conversion.C.Str(Eval("rectype"))=="user"?true:false %>' />
                        </ItemTemplate>
                        <HeaderStyle Width="10%" />
                    </telerik:TreeListTemplateColumn>
                </Columns>
                
            </telerik:RadTreeList>
             <telerik:RadToolBar ID="RadToolBar2" runat="server"  Width="100%" Skin="Vista"  OnButtonClick="RadToolBar2_ButtonClick" OnClientButtonClicking="onToolBarClientButtonClicking"  >
                            <CollapseAnimation Duration="200" Type="OutQuint" />
                            <Items>
                                <telerik:RadToolBarButton CommandName="Submit" ImageUrl="~/images/AddRecord.gif" Text="Submit">
                                </telerik:RadToolBarButton>
                                <telerik:RadToolBarButton CommandName="C" ImageUrl="~/images/Cancel.gif" Text="Close">
                                </telerik:RadToolBarButton>
                            </Items>
                        </telerik:RadToolBar>
            </div>
        </ContentTemplate>
    </asp:UpdatePanel>

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
            }
        })
    </script>

  <script type="text/javascript">


      function onToolBarClientButtonClicking(sender, args) {
          var mode = args.get_item().get_commandName();
          if (mode == "C") {
              args.set_cancel(true);
          }
          //else
          //    return args.set_cancel(!OpenWindow2(mode));
      }

  </script>

      

</asp:Content>


