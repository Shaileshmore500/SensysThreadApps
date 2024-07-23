<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="RoleAndPermissionSettings.aspx.cs" Inherits="SensysErp.Meta.RoleAndPermissionSettings" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <title>Roles And Permission</title>
    <script type="text/javascript">

        //window.title="title"
        document.documentElement.style.overflowX = "hidden"
       // document.documentElement.style.overflowY = "hidden"
        var permissionKeys = [];
 
    </script>
   

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">   
    <asp:UpdatePanel ID="UpdatePanel1" runat="server" style="padding:0;">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
            <div id="divTree">
            <telerik:RadTreeList AllowLoadOnDemand="false" ID="rtlRolesSetting" Width="99%" runat="server" SkinID="NoPosBackTreeList"
                            DataKeyNames="entity_pid" AllowPaging="false" ParentDataKeyNames="parentid" ClientSettings-Selecting-AllowItemSelection="false"
                            AutoGenerateColumns="false" AllowSorting="false" Skin="Vista" Style="overflow: auto">
                            <Columns>
                                <telerik:TreeListTemplateColumn HeaderStyle-Width="30px" UniqueName="asd">
                                    <ItemTemplate>
                                        <asp:CheckBox ID="chkView" entity_pid='<%# Eval("entity_pid") %>' CssClass='<%#  "entChk "+Eval("AppFID").ToString()+" "+Eval("ModFID").ToString()+" "+Eval("EntFID").ToString() %>' Checked='<%# HelperLib.Conversion.C.Bool(Eval("assessright")) %>'  runat="server" />
                                    </ItemTemplate>

                                </telerik:TreeListTemplateColumn>
                                <telerik:TreeListTemplateColumn DataField="displayname" UniqueName="DisplayName"
                                    HeaderText="">
                                    <ItemTemplate>
                                        <asp:Label ID="lblEntity" runat="server" entity_pid='<%# Eval("entity_pid") %>' Text='<%# HelperLib.Conversion.C.Str(Eval("displayname")) %>' CssClass='<%# "ent-title "+HelperLib.Extensions.BaseExtensions.C2Str(Eval("css")) %>' ></asp:Label>
                                    </ItemTemplate>
                                    <HeaderStyle Width="40%" />
                                </telerik:TreeListTemplateColumn>
                              <telerik:TreeListBoundColumn DataField="layouttag" UniqueName="Code"
                                    HeaderText="Code">                                  
                                    <HeaderStyle Width="30%" />
                                </telerik:TreeListBoundColumn>

                                <telerik:TreeListTemplateColumn ItemStyle-CssClass="tdctr"  UniqueName="UnView"
                                    HeaderText="Permision">
                                    <ItemTemplate>
                                      <asp:LinkButton ID="lnkPermision" runat="server" Visible='<%# (HelperLib.Conversion.C.Str(Eval("Css"))=="isItem" && (QS("type") != "actionbutton") )?true:false %>'  Text="Permission"  CssClass='<%# HelperLib.Conversion.C.IsBlank(Eval("ispermission"))?"PermissionAbsent":"PermissionPresent" %>'  OnClientClick='<%# "return SetPermission(this,\""+HelperLib.Conversion.C.Str(Eval("entity_pid"))+"\");"%>'  ></asp:LinkButton>
                                     </ItemTemplate>
                                    <HeaderStyle Width="100px" />
                                </telerik:TreeListTemplateColumn>
                           
                            </Columns>
                        </telerik:RadTreeList>

             </div>

            <div id="divpermission" class="formSettings" style="display:none">
                 <iframe id="iframePermission" style="height:400px;width:500px" frameborder="0" runat="server"></iframe>
              <div class="cmdPanel" style="margin-bottom:30px">
                  <asp:LinkButton ID="LinkButton1" CssClass="cmdBtn cmdSave"  runat="server" Text="Save" OnClientClick="return SavePermision()"></asp:LinkButton>
                  <asp:LinkButton ID="btnClose" class="cmdBtn cmdClose" runat="server" Text="Cancel"  OnClientClick="return closePopup();"></asp:LinkButton>
              </div>
            </div>

            <div class="cmdPanel" style="margin-bottom:30px">
                <asp:LinkButton ID="btnPage" CssClass="cmdBtn cmdSave"  runat="server" Text="Save" OnClientClick="return SaveRolePermision()" />
            </div>
            <asp:HiddenField ID="hdnResourceId" runat="server" />
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

        .RadTreeList_Default .isItem
        {
            font-weight: bold;
        }

        

        .PermissionPresent 
        {
            color:red !important;
        }

        .divOuterMain
        {
                padding:0 !important;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
        }
        
    </style>

    <script type="text/javascript">


        $("#<%=rtlRolesSetting.ClientID%>").find(".isItem").parent().parent().addClass("entRow");
        $("#<%=rtlRolesSetting.ClientID%>").on("click", ".entChk", function (e) { toggleRights($(e.target)) });
        function toggleRights(chk, fromParent) {
            if (!fromParent)
                $("#<%=rtlRolesSetting.ClientID%>").find(".entChk." + chk.parent().attr("entity_pid")).each(function () { if (chk.checked() && $(this).node(0).checked()) return true; toggleRights($(this).node(0).checked(chk.checked()), true); });
        }


        var ResourceType = "";
        if ($.QS("type") == "widget") {
            ResourceType = "widget";
        }
        else if ($.QS("type") == "report") {
            ResourceType = "Report";
        }
        else if ($.QS("type") == "layout") {
            ResourceType = "item";
        }
        else if ($.QS("type") == "view") {
            ResourceType = "Grid";
        }
        else if ($.QS("type") == "actionbutton") {
            ResourceType = "ActionButton";
        }
        function SaveRolePermision() {
            
            

            var rtl = $find("<%= rtlRolesSetting.ClientID %>");
            var arrRights = [];
            rtl.forEachDataItem(function () {
                if ($(this.get_element()).find(".isItem").ID() != undefined) {
                    var rightControl = $(this.get_element());

                    if ($.QS("type") == "widget") {

                        if (!rightControl.find(".entChk").node(0).checked())
                            return true;
                    }
                    if ($.QS("type") == "actionbutton" || $.QS("type") == "report") {

                        if (rightControl.find(".entChk").node(0).checked())
                            return true;
                    }
                    var right = {};
                    
                    var ResourcesInfo = "0";
                    if (rightControl.find(".entChk").node(0).checked())
                        ResourcesInfo = "1";

                    right.ResourceID = rightControl.find(".isItem").attr("entity_pid");
                    right.UserRole = $.QS("UserRole");
                    right.ResourcesInfo1 = ResourcesInfo;
                    arrRights.push(right);
                }
            });
            savingPageData = true;
            var rightData = new Object();
            rightData["Type"] = "SaveRolePermission";
            rightData["@RoleID"] = $.QS("UserRole");
            rightData["Recommended"] = $.defaultVal($.QS("_r"), "0");
            rightData["@ResourceType"] = ResourceType;
            $.Notify("Saving...");
            PageMethods.SaveRolePermission(rightData, arrRights, OnPageRightSuccess, OnPageRightError);
            return false;
        }

        function OnPageRightSuccess(result) {
            $.Notify(false);
        }

        function OnPageRightError(result) {
            $.Notify(false);
            $.Notify({ Message: "Error Occured.", NotifyOnly: true });
           
        }


        function SetPermission(cntrl,resourceid) {
            $("#<%= hdnResourceId.ClientID%>").val(resourceid);
            //var type = "";
            //if ($.QS("type") == "widget") {
            //    type = "widget";
            //}
            //else if ($.QS("type") == "layout") {
            //    type = "item";
            //}
            $("#<%= iframePermission.ClientID%>").attr('src', "GrantPermission.aspx?RID=" + resourceid + "&_ns=1&RType=" + ResourceType + "&PageType=E&PageCall=Permission");
            $("#divpermission").ShowModal();
            return false;
        }


        function SavePermision() {

           

            var Permission = [];
            var arrPermission = $("#<%= iframePermission.ClientID%>")[0].contentWindow.GetPermission();
            for (var i = 0; i < arrPermission.length; i++) Permission.push(arrPermission[i]);
            var data = new Object();
            data["Type"] = "SavePermission";
            //data["@RoleID"] = $.QS("UserRole");
            data["@ResourceID"] = $("#<%= hdnResourceId.ClientID%>").val();
            data["@ResourceType"] = ResourceType;
            $.Notify("Saving");
            PageMethods.SavePermission(data, Permission, OnPageRightSuccess, OnPageRightError);
            $("#<%= hdnResourceId.ClientID%>").val("");
            $("#divpermission").HideModal();

            return false;
        }

        function closePopup() {
            $("#divpermission").HideModal();
            $("#divpermission").css("display", "none");
            return false;
        }
    </script>
    

</asp:Content>


