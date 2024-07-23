<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="AuditConfiguration_Add.aspx.cs" Inherits="SensysErp.Meta.AuditConfiguration_Add" ValidateRequest="false" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>


<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">


</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />            
            
            <div class="div-form">
                 <div>
                <asp:LinkButton ID="btnSubmit" CssClass="cmdBtn cmdSave" runat="server" Text="Save Configuration"   OnClientClick="return saveData();"></asp:LinkButton>
                <asp:LinkButton ID="btnClose" class="cmdBtn cmdClose" runat="server" Text="Cancel" OnClientClick="closeForm();"></asp:LinkButton>

                 <asp:LinkButton Visible="false" ID="lnkbtnRecom" CssClass="mdl-button RedButton editIcon" style="float:right" runat="server" Text=" Apply Recommended Permissions" OnClientClick="return RecommendedPermission();" ></asp:LinkButton>
            </div><br />
                <telerik:RadTreeList AllowLoadOnDemand="false" ID="rtlPage" Width="100%" runat="server" SkinID="NoPosBackTreeList"
                            DataKeyNames="entity_Pid" AllowPaging="false" ParentDataKeyNames="parentid" ClientSettings-Selecting-AllowItemSelection="false"
                            AutoGenerateColumns="false" AllowSorting="false" Skin="Vista" Style="overflow: auto">
                            <Columns>
                                <telerik:TreeListTemplateColumn HeaderStyle-Width="30px" UniqueName="asd">
                                    <ItemTemplate>
                                        <asp:CheckBox ID="chkView" entity_pid='<%# HelperLib.Conversion.C.Str(Eval("entity_pid")).ToLower() %>' CssClass='<%#  "entChk "+ (HelperLib.Conversion.C.Bool(Eval("MarkForAudit"))?"Recommended":"")+" "+ Eval("AppFID").ToString().ToLower() +" "+Eval("ModFID").ToString().ToLower()  %>' Checked='<%# HelperLib.Conversion.C.Bool(Eval("EntityChecked")) && !HelperLib.Conversion.C.Bool(Eval("MarkForAudit")) %>' Enabled='<%# !HelperLib.Conversion.C.Bool(Eval("AuditCompulsory")) && !HelperLib.Conversion.C.Bool(Eval("MarkForAudit")) %>'   markaudit='<%# HelperLib.Conversion.C.Bool(Eval("MarkForAudit")) %>'   runat="server" />

                                    </ItemTemplate>

                                </telerik:TreeListTemplateColumn>
                                <telerik:TreeListTemplateColumn DataField="displayname" UniqueName="DisplayName"
                                    HeaderText="Entity">
                                    <ItemTemplate>
                                        <asp:Label ID="lblEntity" runat="server" entity_pid='<%# Eval("entity_pid") %>' Text='<%# HelperLib.Conversion.C.Str(Eval("displayname")) %>' CssClass='<%# "ent-title "+HelperLib.Extensions.BaseExtensions.C2Str(Eval("css")) %>'></asp:Label>
                                    </ItemTemplate>
                                    <HeaderStyle Width="40%" />
                                </telerik:TreeListTemplateColumn>
                            </Columns>
                        </telerik:RadTreeList>
            </div>



           

         


        </ContentTemplate>
    </asp:UpdatePanel>
    <style>

        

         .RadTreeList_Default .rtlA, .RadTreeList_Default .rtlR
        {
            background-color: #EBEBEB;
            color: #696969;
        }

        .RadTreeList_Default .entRow
        {
            background-color: #FFF;
            color: #000;
        }

        .RadTreeList_Default .entRecommended
        {
            background-color: #FFE7A3;
        }

        .RadTreeList_Default .isEntity
        {
            font-weight: bold;
        }
    </style>


    <script type="text/javascript">



    

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

    <script type="text/javascript">
        var entityId = "", entityName = "";

        function pageLoad() {

            $("#<%=rtlPage.ClientID%>").find(".isEntity").parent().parent().addClass("entRow");
            $("#<%=rtlPage.ClientID%>").on("click", ".entChk", function (e) { toggleRights($(e.target)) });
            function toggleRights(chk, fromParent) {
                if (!fromParent)
                    $("#<%=rtlPage.ClientID%>").find(".entChk." + chk.parent().attr("entity_pid")).each(function () { if (chk.checked() && $(this).node(0).checked()) return true; if (!$(this).node(0).prop("disabled")) toggleRights($(this).node(0).checked(chk.checked()), true); });
        }
        }


      
       
        function RecommendedPermission() {
            $("#<%=rtlPage.ClientID%>").find(".Recommended").children().checked(true);
            $("#<%=rtlPage.ClientID%>").find(".Recommended").parent().parent().addClass("entRecommended");
            return false;
           
        }

        function saveData() {
            var rtl = $find("<%= rtlPage.ClientID %>");
            var arrRights = [];
            rtl.forEachDataItem(function () {
                if ($(this.get_element()).find(".isEntity").ID() != undefined) {
                    var rightControl = $(this.get_element());
                    if (rightControl.find(".entChk").node(0).checked())
                        return true;

                    var right = {};

                    right.EntityId = rightControl.find(".isEntity").attr("entity_pid");
                    arrRights.push(right);
                }
            });
            savingPageData = true;
            var rightData = new Object();
            rightData["Type"] = "SaveEntityAudit";
            $.Notify("Saving...");
            PageMethods.SaveEntityAudit(rightData, arrRights, OnPageRightSuccess, OnPageRightError);
            return false;
        }

        function OnPageRightSuccess(result) {
            $.Notify(false);
        }

        function OnPageRightError(result) {
            $.Notify(false);
            $.Notify({ Message: "Error Occured.", NotifyOnly: true });

        }

    </script>




</asp:Content>


