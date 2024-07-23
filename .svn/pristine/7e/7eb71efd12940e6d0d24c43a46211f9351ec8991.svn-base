<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="ServiceAvailability.aspx.cs" Inherits="SensysErp.Meta.ServiceAvailability" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <title>Access Control</title>
    <script type="text/javascript">

        //window.title="title"

        var permissionKeys = [];
    </script>

    <style type="text/css">
        html, body, form
        {
            height: 100%;
        }

        .listname
        {
            padding-left: 7px;
            margin-bottom: 5px;
            margin-top: 5px;
        }

        .srno
        {
            margin-left: 50px;
            width: 10px !important;
            display: inline;
        }


        .Control
        {
            margin-left: 30px;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel Style="height: 100%" ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
            <table style="display: none">
                <tr>
                    <td>
                        <asp:Label ID="lblRole" runat="server" Text="User Role for Access Control"></asp:Label>
                        <telerik:RadComboBox ID="rcbRole" runat="server" AutoPostBack="true" OnSelectedIndexChanged="rcbRole_SelectedIndexChanged"></telerik:RadComboBox>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="padding-top: 7px;"></td>
                </tr>
            </table>
            <div style="height: 100%; width: 97%;">
                <telerik:RadTabStrip ID="tabAccessControl" runat="server" MultiPageID="MultiAccessPage" OnClientTabSelected="ClientTabSelected">
                    <Tabs>
                        <telerik:RadTab runat="server" PageViewID="PageRights" Text="Entity Permissions" Selected="true" Value="page"></telerik:RadTab>
                        <telerik:RadTab runat="server" PageViewID="UserRights" Text="Special Permissions" Value="settings"></telerik:RadTab>
                        <telerik:RadTab runat="server" PageViewID="MenuRights" Text="Menu Access" Value="menu"></telerik:RadTab>
                    </Tabs>
                </telerik:RadTabStrip>
                
                <telerik:RadMultiPage Height="95%" SelectedIndex="0" ID="MultiAccessPage" runat="server">
                    <telerik:RadPageView Selected="true" ID="PageRights" runat="server">
                        <telerik:RadTreeList AllowLoadOnDemand="false" ID="rtlPage" Width="100%" runat="server" SkinID="NoPosBackTreeList"
                            DataKeyNames="entity_Pid" AllowPaging="false" ParentDataKeyNames="parentid" ClientSettings-Selecting-AllowItemSelection="false"
                            AutoGenerateColumns="false" AllowSorting="false" Skin="Vista" Style="overflow: auto">
                            <Columns>
                                <telerik:TreeListTemplateColumn HeaderStyle-Width="30px" UniqueName="asd">
                                    <ItemTemplate>
                                        <asp:CheckBox ID="chkView" entity_pid='<%# Eval("entity_pid") %>' CssClass='<%#  "entChk "+Eval("AppFID").ToString() +" "+Eval("ModFID").ToString()  %>' Checked='<%# !HelperLib.Conversion.C.IsBlank(Eval("EntityPermissions_Pid")) %>' runat="server" />

                                    </ItemTemplate>

                                </telerik:TreeListTemplateColumn>
                                <telerik:TreeListTemplateColumn DataField="displayname" UniqueName="DisplayName"
                                    HeaderText="Entity">
                                    <ItemTemplate>
                                        <asp:Label ID="lblEntity" runat="server" entity_pid='<%# Eval("entity_pid") %>' Text='<%# HelperLib.Conversion.C.Str(Eval("displayname")) %>' CssClass='<%# "ent-title "+HelperLib.Extensions.BaseExtensions.C2Str(Eval("css")) %>'></asp:Label>
                                    </ItemTemplate>
                                    <HeaderStyle Width="40%" />
                                </telerik:TreeListTemplateColumn>
                                <telerik:TreeListTemplateColumn Display="false">
                                    <ItemTemplate>
                                        <asp:DropDownList ID="ddl" DataTextField="layoutname" DataValueField="layout_pid" DataSource='<%#getData(Eval("entity_pid"),"") %>' CssClass="ddlScope" runat="server">
                                            <asp:ListItem Value="123" Text="Custom Filter 1"></asp:ListItem>
                                            <asp:ListItem Value="565" Text="Custom Filter 2"></asp:ListItem>
                                        </asp:DropDownList>
                                    </ItemTemplate>
                                    <HeaderStyle Width="10%" />
                                </telerik:TreeListTemplateColumn>

                                <telerik:TreeListTemplateColumn ItemStyle-CssClass="tdctr" UniqueName="UnView"
                                    HeaderText="View Rights">
                                    <ItemTemplate>
                                        <div class="cellCtr" title='<%#GetAccessInfo(Eval("ViewRightsFilter"),"Tooltip") %>'>
                                            <span class='<%#GetAccessInfo(Eval("ViewRightsFilter"),"CSS") %>'><span class="icon"></span></span>
                                            <span val='<%#Eval("ViewRightsFilter").ToString() %>' class="accessTitle viewrights"><%#GetAccessInfo(Eval("ViewRightsFilter"),"Title") %></span>

                                        </div>
                                    </ItemTemplate>
                                    <HeaderStyle Width="140px" />
                                </telerik:TreeListTemplateColumn>
                                <telerik:TreeListTemplateColumn ItemStyle-CssClass="tdctr" UniqueName="UnAdd"
                                    HeaderText="Add Rights">
                                    <ItemTemplate>
                                        <div class="cellCtr" title='<%#GetAccessInfo(Eval("AddRightsFilter"),"Tooltip") %>'>
                                            <span class='<%#GetAccessInfo(Eval("AddRightsFilter"),"CSS") %>'><span class="icon"></span></span>
                                            <span val='<%#Eval("AddRightsFilter").ToString() %>' class="accessTitle addrights"><%#GetAccessInfo(Eval("AddRightsFilter"),"Title") %></span>

                                        </div>
                                    </ItemTemplate>
                                    <HeaderStyle Width="140px" />
                                </telerik:TreeListTemplateColumn>
                                <telerik:TreeListTemplateColumn ItemStyle-CssClass="tdctr" UniqueName="UnEdit"
                                    HeaderText="Edit Rights">
                                    <ItemTemplate>
                                        <div class="cellCtr" title='<%#GetAccessInfo(Eval("EditRightsFilter"),"Tooltip") %>'>
                                            <span class='<%#GetAccessInfo(Eval("EditRightsFilter"),"CSS") %>'><span class="icon"></span></span>
                                            <span val='<%#Eval("EditRightsFilter").ToString() %>' class="accessTitle editrights"><%#GetAccessInfo(Eval("EditRightsFilter"),"Title") %></span>

                                        </div>
                                    </ItemTemplate>
                                    <HeaderStyle Width="140px" />
                                </telerik:TreeListTemplateColumn>
                                <telerik:TreeListTemplateColumn ItemStyle-CssClass="tdctr" UniqueName="UnDelete"
                                    HeaderText="Delete Rights">
                                    <ItemTemplate>
                                        <div class="cellCtr" title='<%#GetAccessInfo(Eval("DeleteRightsFilter"),"Tooltip") %>'>
                                            <span class='<%#GetAccessInfo(Eval("DeleteRightsFilter"),"CSS") %>'><span class="icon"></span></span>
                                            <span val='<%#Eval("DeleteRightsFilter").ToString() %>' class="accessTitle deleterights"><%#GetAccessInfo(Eval("DeleteRightsFilter"),"Title") %></span>
                                        </div>
                                    </ItemTemplate>
                                    <HeaderStyle Width="140px" />
                                </telerik:TreeListTemplateColumn>
                            </Columns>
                        </telerik:RadTreeList>
                        
                        <br />
                        <br /><div class="cmdPanel" style="margin-bottom:30px"><asp:LinkButton ID="btnPage" CssClass="cmdBtn cmdSave"  runat="server" Text="Save" OnClientClick="return SavePageRights()" /></div>
                    </telerik:RadPageView>

                    <telerik:RadPageView ID="UserRights" Height="90%" Width="100%" runat="server">
                        <iframe id="iframeSettings" style="height:100%;width:100%" frameborder="0"></iframe>
                    </telerik:RadPageView>
                    <telerik:RadPageView Height="90%" Width="100%" ID="MenRights" runat="server">
                        <iframe id="iframeMenu" style="height:100%;width:100%" frameborder="0"></iframe>
                    </telerik:RadPageView>
                </telerik:RadMultiPage>
                
            </div>

            <div class="roleMenu" id="RoleMenu" style="display: none">
                <div title="User cannot perform the action on this entity" val="No Access">
                    <span class="iconCtr icon-NoAccess"><span class="icon"></span></span>
                    <span class="accessTitle">No Access</span>
                </div>
                <div title="User can perform action on this entity only if his User Scope allows it." val="User Scope">
                    <span class="iconCtr icon-UserScope"><span class="icon"></span></span>
                    <span class="accessTitle">User Scope</span>
                </div>
                <div title="User can perform the action on this entity only for those records which belong to his company" val="My Company">
                    <span class="iconCtr icon-MyCompany"><span class="icon"></span></span>
                    <span class="accessTitle">My Company</span>
                </div>
                <div title="User can perform the action on this entity only for those records which belong to his company and all companies below his company" val="All Company Below">
                    <span class="iconCtr icon-AllCompanyBelow"><span class="icon"></span></span>
                    <span class="accessTitle">Child Companies</span>
                </div>
                <div title="User can perform the action on this entity with unrestricted access" val="All Companies">
                    <span class="iconCtr icon-AllCompanies"><span class="icon"></span></span>
                    <span class="accessTitle">All Companies</span>
                </div>
            </div>
        </ContentTemplate>
    </asp:UpdatePanel>

    <style>
        .RadTreeList
        {
            overflow: initial !important;
        }

        .tdctr
        {
            cursor: pointer;
            overflow: visible !important;
        }

            .tdctr:hover
            {
                background-color: #FDFDC4;
            }

        .cellCtr
        {
            height: 100%;
            width: 100%;
            position: relative;
            overflow: visible;
        }

        .accessTitle
        {
            vertical-align: middle;
            line-height: 15px;
        }

        .cellCtr > .accessTitle
        {
            vertical-align: middle;
            line-height: 15px;
            text-overflow: ellipsis;
            display: inline-block;
            width: 90px;
            white-space: nowrap;
            overflow: hidden;
        }

        .roleMenu
        {
            position: absolute;
            background-color: #FFF;
            border: solid 2px #EBEBEB;
            z-index: 1;
            box-shadow: 2px 3px 10px #747474;
            min-width: 165px;
            max-width: 250px;
        }

            .roleMenu div
            {
                padding: 3px 8px;
                border-bottom: solid 1px #E9E9E9;
            }
                .roleMenu div:last-child
                {
                    border-bottom:none;
                }
                .roleMenu div:hover
                {
                    transition: all 0.35s ease-in-out !important;
                    -webkit-transition: all 0.35s ease-in-out !important;
                    -moz-transition: all 0.35s ease-in-out !important;
                    color: #FFF;
                    background-color: #F02020;
                }

                    .roleMenu div:hover .accessTitle, .roleMenu div:hover .iconCtr
                    {
                        color: #FFF !important;
                    }

            .roleMenu .accessTitle
            {
            }

        .iconCtr
        {
            height: 18px;
            width: 18px;
            font-family: fontawesome;
            display: inline-block;
            vertical-align: middle;
        }

            .iconCtr .icon
            {
                display: inline-block;
            }

            .iconCtr.icon-NoAccess
            {
                color: #D80000;
            }

                .iconCtr.icon-NoAccess .icon:after
                {
                    content: "\f05e";
                    font-size: 14px;
                    display: inline-block;
                    margin-top: 2px;
                }

            .iconCtr.icon-Filter
            {
                color: #005CFF;
            }

                .iconCtr.icon-Filter .icon:after
                {
                    content: "\f0b0";
                    font-size: 14px;
                    display: inline-block;
                    margin-top: 2px;
                }

            .iconCtr.icon-MyCompany
            {
                color: #00C42F;
            }

                .iconCtr.icon-MyCompany .icon:after
                {
                    content: "\f1b2";
                    font-size: 14px;
                    display: inline-block;
                    margin-top: 2px;
                }

            .iconCtr.icon-AllCompanies
            {
                color: #752424;
            }

                .iconCtr.icon-AllCompanies:before
                {
                    content: "\f0e8";
                    font-size: 12px;
                    display: inline-block;
                    margin-top: 0px;
                }

                .iconCtr.icon-AllCompanies .icon
                {
                    display: block;
                    margin-top: -6px;
                }

                    .iconCtr.icon-AllCompanies .icon:before
                    {
                        content: "\f141";
                        font-size: 16px;
                        line-height: 0px;
                        margin-left: 0px;
                        display: inline-block;
                        margin-top: 1px;
                    }

            .iconCtr.icon-AllCompanyBelow
            {
                color: #8100E6;
            }

                .iconCtr.icon-AllCompanyBelow .icon:after
                {
                    content: "\f0e8";
                    font-size: 14px;
                    display: inline-block;
                    margin-top: 2px;
                }



            .iconCtr.icon-UserScope
            {
                color: #000;
            }

                .iconCtr.icon-UserScope .icon:after
                {
                    content: "\f007";
                    font-size: 14px;
                    display: inline-block;
                    margin-top: 2px;
                }




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

        .RadTreeList_Default .isEntity
        {
            font-weight: bold;
        }
    </style>
    <script type="text/javascript">


        $("#ctl00_ContentPlaceHolder1_rtlPage").find(".isEntity").parent().parent().addClass("entRow");
        $("#ctl00_ContentPlaceHolder1_rtlPage").on("click", ".entChk", function (e) { toggleRights($(e.target)) });
        $("#ctl00_ContentPlaceHolder1_rtlPage").on("click", ".tdctr,.cellCtr", function (e) { e.stopPropagation(); if (currMenu) currMenu.hide(); showScopeDdl($(this)) });

        //tdctr
        function toggleRights(chk, fromParent) {
            if (chk.checked()) {
                chk.closest("TR").find(".cellCtr>.accessTitle").html("User Scope").attr("val", "User Scope").prev().attr("class", "iconCtr icon-UserScope").parent().attr("title", "User Scope");
            }
            else
                chk.closest("TR").find(".cellCtr>.accessTitle").html("").attr("val", "").prev().attr("class", "iconCtr");
            if (!fromParent)
                $("#ctl00_ContentPlaceHolder1_rtlPage").find(".entChk." + chk.parent().attr("entity_pid")).each(function () { if (chk.checked() && $(this).node(0).checked()) return true; toggleRights($(this).node(0).checked(chk.checked()), true); });
        }
        var currMenu = null;
        function showScopeDdl(td) {
            td = $(td); td = (td.hasClass("tdctr") ? td : td.closest("TD"));
            if (td.closest("TR").find(".isEntity").exists() && !td.closest("TR").find(".entChk").node(0).checked()) {
                alert("Enable the entity before continuing.")
                return;
            }
            var menu = td.find(".roleMenu");
            if (!menu.exists()) {
                var ddl = td.closest("TR").find(".ddlScope");
                menu = $("#RoleMenu").clone().attr("id", "");
                ddl.children().each(function () {
                    var item = $("<div title='User can perform the action on this entity if the filter returns a result' filter='1' val='" + $(this).val() + "'><span class='iconCtr icon-Filter'><span class='icon'></span></span><span class='accessTitle'>" + $(this).text() + "</span></div>")
                    menu.append(item);
                })
                td.find(".cellCtr").append(menu);
                menu.on("click", "div", function (e) {
                    e.stopPropagation();
                    toggleAccess($(this), $(this).closest(".cellCtr"));
                    $(this).parent().hide();
                })
            }
            currMenu = menu;
            menu.show().position({
                my: "left top",
                at: "left bottom",
                of: td,
                collision: "fit fit"
            });
            $(document).one("click", function () {
                menu.hide();
            });

        }

        function toggleAccess(btn, item, fromParent) {
            item.children(".accessTitle")
                         .html(btn.find('.accessTitle').html())
                         .attr("val", btn.attr("val"))
                         .prev().attr("class", btn.children(".iconCtr").attr("class"))
                         .parent().attr("title", (btn.attr("filter") == "1" ? btn.find('.accessTitle').html() : btn.attr('title')));
            if (!fromParent) {
                var action = item.children(".accessTitle").attr("class").Trim().split(' ')[1].Trim();
                var chk = item.closest("TR").find(".entChk").node(0);
                $("#ctl00_ContentPlaceHolder1_rtlPage").find(".entChk." + chk.parent().attr("entity_pid")).each(function () { if (!$(this).node(0).checked()) return true; toggleAccess(btn, $(this).closest("TR").find(".accessTitle." + action).parent(), true); });
            }

        }


        function LoadCustomSettings(forced) {
            if ($.isEmpty($("#iframeSettings").attr('src')) || forced)
                $("#iframeSettings").attr('src', "CustomSettings.aspx?_ns=1&cat=Role&id=" + $.QS("UserRole"));
        }

        function LoadMenuRights(forced) {
            if ($.isEmpty($("#iframeMenu").attr('src')) || forced)
                $("#iframeMenu").attr('src', "../Meta/MenuDesigner.aspx?m=role&r=" + $.QS("UserRole"));
        }


        function ClientTabSelected(sender, args) {
            var tab = args.get_tab().get_value();
            if (tab == "settings")
                LoadCustomSettings();
            else if (tab == "menu")
                LoadMenuRights();
        }

        var dgPer;

        function pageLoad() {
        }


        function toggleChildren(chk) {
            chk = $(chk);
            var eid = chk.parent().attr("entity_pid");
            $("." + chk.parent().attr("class").Trim() + "." + eid + ">input").checked(chk.checked());
        }


        var savingPageData = false;
        function SavePageRights() {
            if (savingPageData) {
                alert("Server busy. Please try again.");
                return false;
            }
            
            var rtl = $find("<%= rtlPage.ClientID %>");
            var arrRights = [];
            rtl.forEachDataItem(function () {
                if ($(this.get_element()).find(".isEntity").ID() != undefined) {
                    var rightControl = $(this.get_element());
                    if (!rightControl.find(".entChk").node(0).checked())
                        return true;
                    var right = {};
                    right.AddRights = $.defaultVal(rightControl.find(".addrights").attr("val"), "");
                    right.EditRights = $.defaultVal(rightControl.find(".editrights").attr("val"), "");
                    right.ViewRights = $.defaultVal(rightControl.find(".viewrights").attr("val"), "");
                    right.DeleteRights = $.defaultVal(rightControl.find(".deleterights").attr("val"), "");
                    right.EntityID = rightControl.find(".isEntity").attr("entity_pid");
                    right.UserRole = $.QS("UserRole");
                    arrRights.push(right);
                }
            });
            savingPageData = true;
            var rightData = new Object();
            rightData["Type"] = "SavePageRights";
            $.Notify("Saving...");
            PageMethods.SavePageRights(rightData, arrRights, OnPageRightSuccess, OnPageRightError);
            return false;
        }

        function OnPageRightSuccess(result) {
            $.Notify(false);
            savingPageData = false;
            //if (result)
            //    alert('Access Rights saved Successfully.');
        }

        function OnPageRightError(result) {
            $.Notify(false);
            savingPageData = false;
            $.Notify({ Message: "Error Occured.", NotifyOnly: true });
            //if (result)
            //    alert('Error in saving access rights.');
        }






        function OnCompanyRightSuccess(result) {
            savingCompanyData = false;
            if (result)
                alert('Company Rights saved Successfully.');
        }

        function OnCompanyRightError(result) {
            savingCompanyData = false;
            if (result)
                alert('Error in saving company rights.');
        }

    </script>

</asp:Content>


