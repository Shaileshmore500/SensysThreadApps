<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="AccessControl.aspx.cs" Inherits="SensysErp.Meta.AccessControl" %>

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
        #spnRecom
        {
            position: absolute;
            right: 35px;
            top: 18px;
            z-index: 10;
            background-color: #ffe68a;
            padding-left: 25px;
        }
            #spnRecom:before
            {
                font-family: FontAwesome;
                content: "\f132";
                position: absolute;
                top: 5px;
                left: 7px;
                font-size: 22px;
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
            <span id="spnRecom" >
                <asp:DropDownList onchange="GetRecommended(this)" Width="270px" ID="ddlRecommended" runat="server"></asp:DropDownList>
            </span>
            <div style="height: 100%; width: 97%;">
                <telerik:RadTabStrip ID="tabAccessControl" ScrollChildren="false" runat="server" Style="margin-right:305px" MultiPageID="MultiAccessPage" OnClientTabSelected="ClientTabSelected">
                    <Tabs>
                        <telerik:RadTab runat="server" PageViewID="PageRights" Text="Entity Permissions" Selected="true" Value="page"></telerik:RadTab>
                        <telerik:RadTab runat="server" PageViewID="UserRights" Text="Special Permissions" Value="settings"></telerik:RadTab>
                        <telerik:RadTab runat="server" PageViewID="MenuRights" Text="Menu Access" Value="menu"></telerik:RadTab>
                        <telerik:RadTab runat="server" PageViewID="RolesAndPermissionWidget" Text="Widget" Value="widget"></telerik:RadTab>
                        <telerik:RadTab runat="server" PageViewID="RolesAndPermissionLayout" Text="Layout" Value="layout"></telerik:RadTab>
                        <telerik:RadTab runat="server" PageViewID="RolesAndPermissionView" Text="View" Value="view"></telerik:RadTab>
                        <telerik:RadTab runat="server" PageViewID="RolesAndPermissionReport" Text="Report" Value="report"></telerik:RadTab>
                        <telerik:RadTab runat="server" PageViewID="RolesAndPermissionActionButton" Text="Buttons" Value="actionbutton"></telerik:RadTab>
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
                                        <asp:CheckBox ID="chkView" entity_pid='<%# HelperLib.Conversion.C.Str(Eval("entity_pid")).ToLower() %>' CssClass='<%#  "entChk "+Eval("AppFID").ToString().ToLower() +" "+Eval("ModFID").ToString().ToLower()  %>' Checked='<%# !HelperLib.Conversion.C.IsBlank(Eval("EntityPermissions_Pid")) %>' runat="server" />

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
                                        <div class="cellCtr" val='<%#GetAccessInfo(Eval("ViewRightsFilter"),"VALUE") %>' title='<%#GetAccessInfo(Eval("ViewRightsFilter"),"Tooltip") %>'>
                                            <span class='<%#GetAccessInfo(Eval("ViewRightsFilter"),"CSS") %>'><span class="icon"></span></span>
                                            <span val='<%#Eval("ViewRightsFilter").ToString() %>' class="accessTitle viewrights"><%#GetAccessInfo(Eval("ViewRightsFilter"),"Title") %></span>

                                        </div>
                                    </ItemTemplate>
                                    <HeaderStyle Width="130px" />
                                </telerik:TreeListTemplateColumn>
                                <telerik:TreeListTemplateColumn ItemStyle-CssClass="tdctr" UniqueName="UnAdd"
                                    HeaderText="Add Rights">
                                    <ItemTemplate>
                                        <div class="cellCtr" val='<%#GetAccessInfo(Eval("ViewRightsFilter"),"VALUE") %>' title='<%#GetAccessInfo(Eval("AddRightsFilter"),"Tooltip") %>'>
                                            <span class='<%#GetAccessInfo(Eval("AddRightsFilter"),"CSS") %>'><span class="icon"></span></span>
                                            <span val='<%#Eval("AddRightsFilter").ToString() %>' class="accessTitle addrights"><%#GetAccessInfo(Eval("AddRightsFilter"),"Title") %></span>

                                        </div>
                                    </ItemTemplate>
                                    <HeaderStyle Width="130px" />
                                </telerik:TreeListTemplateColumn>
                                <telerik:TreeListTemplateColumn ItemStyle-CssClass="tdctr" UniqueName="UnEdit"
                                    HeaderText="Edit Rights">
                                    <ItemTemplate>
                                        <div class="cellCtr" val='<%#GetAccessInfo(Eval("ViewRightsFilter"),"VALUE") %>' title='<%#GetAccessInfo(Eval("EditRightsFilter"),"Tooltip") %>'>
                                            <span class='<%#GetAccessInfo(Eval("EditRightsFilter"),"CSS") %>'><span class="icon"></span></span>
                                            <span val='<%#Eval("EditRightsFilter").ToString() %>' class="accessTitle editrights"><%#GetAccessInfo(Eval("EditRightsFilter"),"Title") %></span>

                                        </div>
                                    </ItemTemplate>
                                    <HeaderStyle Width="130px" />
                                </telerik:TreeListTemplateColumn>
                                <telerik:TreeListTemplateColumn ItemStyle-CssClass="tdctr" UniqueName="UnDelete"
                                    HeaderText="Delete Rights">
                                    <ItemTemplate>
                                        <div class="cellCtr" val='<%#GetAccessInfo(Eval("ViewRightsFilter"),"VALUE") %>' title='<%#GetAccessInfo(Eval("DeleteRightsFilter"),"Tooltip") %>'>
                                            <span class='<%#GetAccessInfo(Eval("DeleteRightsFilter"),"CSS") %>'><span class="icon"></span></span>
                                            <span val='<%#Eval("DeleteRightsFilter").ToString() %>' class="accessTitle deleterights"><%#GetAccessInfo(Eval("DeleteRightsFilter"),"Title") %></span>
                                        </div>
                                    </ItemTemplate>
                                    <HeaderStyle Width="130px" />
                                </telerik:TreeListTemplateColumn>
                                <telerik:TreeListTemplateColumn ItemStyle-CssClass="tdctr" UniqueName="UnExport"
                                    HeaderText="Export Rights">
                                    <ItemTemplate>
                                        <div class="cellCtr" val='<%#GetAccessInfo(Eval("ViewRightsFilter"),"VALUE") %>' title='<%#GetAccessInfo(Eval("ExportRightsFilter"),"Tooltip") %>'>
                                            <span class='<%#GetAccessInfo(Eval("ExportRightsFilter"),"CSS") %>'><span class="icon"></span></span>
                                            <span val='<%#Eval("ExportRightsFilter").ToString() %>' class="accessTitle exportrights"><%#GetAccessInfo(Eval("ExportRightsFilter"),"Title") %></span>
                                        </div>
                                    </ItemTemplate>
                                    <HeaderStyle Width="130px" />
                                </telerik:TreeListTemplateColumn>
                            </Columns>
                        </telerik:RadTreeList>
                        
                        <br />
                        <br /><div class="cmdPanel" style="margin-bottom:30px"><asp:LinkButton ID="btnPage" CssClass="cmdBtn cmdSave"  runat="server" Text="Save" OnClientClick="return SavePageRights()" /></div>
                   <span title='scrollenabler' style="visibility:hidden;position:absolute;display:block;height:20px;width:20px;background:red;margin-left: 150%;margin-top:300px"></span>
                        
                         </telerik:RadPageView>

                    <telerik:RadPageView ID="UserRights" Height="90%" Width="100%" runat="server">
                        <iframe id="iframeSettings" style="height:100%;width:100%" frameborder="0"></iframe>
                    </telerik:RadPageView>
                    <telerik:RadPageView Height="90%" Width="100%" ID="MenRights" runat="server">
                        <iframe id="iframeMenu" style="height:100%;width:100%" frameborder="0"></iframe>
                    </telerik:RadPageView>
                    <telerik:RadPageView Height="90%" Width="100%"  ID="RolesAndPermissionWidget" runat="server">
                        <iframe id="iframeRoleAndPermissionWidget" style="height:100%;width:100%;padding:0;" frameborder="0"></iframe>
                    </telerik:RadPageView>
                    <telerik:RadPageView Height="90%" Width="100%" ID="RolesAndPermissionLayout" runat="server">
                        <iframe id="iframeRoleAndPermissionLayout" style="height:100%;width:100%;padding:0;" frameborder="0"></iframe>
                    </telerik:RadPageView>
                    <telerik:RadPageView Height="90%" Width="100%" ID="RolesAndPermissionView" runat="server">
                        <iframe id="iframeRoleAndPermissionView" style="height:100%;width:100%;padding:0;" frameborder="0"></iframe>
                    </telerik:RadPageView>
                     <telerik:RadPageView Height="90%" Width="100%" ID="RolesAndPermissionReport" runat="server">
                        <iframe id="iframeRoleAndPermissionReport" style="height:100%;width:100%;padding:0;" frameborder="0"></iframe>
                    </telerik:RadPageView>
                    <telerik:RadPageView Height="90%" Width="100%" ID="RolesAndPermissionActionButton" runat="server">
                        <iframe id="iframeRoleAndPermissionActionButton" style="height:100%;width:100%;padding:0;" frameborder="0"></iframe>
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
                <div class="_parent" title="User can perform the action based on specified condtions" val="Custom">
                    <span class="iconCtr icon-Custom"><span class="icon"></span></span>
                    <span class="accessTitle">Custom</span>
                    <span class="caret"></span>
                     <div title="" class="_child">
                         <span>Field To Check</span>
                         <input class="txtEntityUserField" type="text"/>
                         <span>Field To Check In User Entity</span>
                         <input class="txtUserField" type="text"/>
                         <label><input class="chkHierarchy" type="checkbox"/>Allow Hierarchial Access</label>
                         <a href="javascript:void(0)" style="float: right;color: #fff;" onclick="saveCustomAccess(this)" class="mdl-button GreenButton" >Save</a>
                    </div>
                </div>
            </div>
            <div class="fieldListPopup" id="entityFieldPopup" style="position: absolute;display: none;background-color:#FFF;border:solid 1px #BABABA;z-index:10;box-shadow: 2px 2px 5px #555;width: 250px;height: 290px;overflow: hidden;">
                <iframe style="height: 100%; width: 100%" scrolling="no" frameborder="0" src=""></iframe>
            </div>
            <div class="fieldListPopup" id="userFieldPopup" style="position: absolute;display: none;background-color:#FFF;border:solid 1px #BABABA;z-index:10;box-shadow: 2px 2px 5px #555;width: 250px;height: 290px;overflow: hidden;">
                <iframe style="height: 100%; width: 100%" scrolling="no" frameborder="0" src="../meta/fieldbrowser.aspx?mode=ChooseField&EID=tbl_sys_users&nobg=1&fn=__selectUserField"></iframe>
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
                .roleMenu>div:last-child
                {
                    border-bottom:none;
                }
                .roleMenu>div:hover
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
            .roleMenu .caret {
                position: absolute;
                right: 5px;
            }
            .roleMenu .caret:before {
                font-family: fontawesome;
                display: inline-block;
                vertical-align: middle;
                content: "\f0da";
            }
            .roleMenu ._parent {
                position:relative;
            }
            .roleMenu ._child {
                color:#000;
                display: none;
                position: absolute;
                padding: 10px;
                background: #fff;
                border: solid 1px gray;
                box-shadow: 2px 2px 5px #000;
                width: 315px;
                left: 162px;
                top: 10px;
            }
            
            .roleMenu ._child span, .roleMenu ._child label {
                display: block;
                font-size: 14px;
                margin: 5px 0 3px 0;
            }
            .roleMenu ._child input[type=text] {
                margin-left: 10px;
    width: 290px;
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
                .iconCtr.icon-Custom
                {
                    color: #ff6c00;
                }

                .iconCtr.icon-Custom .icon:after
                {
                    content: "\f013";
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
        .RadTabStrip_Office2007 .rtsLevel1
        {
            background: transparent;
        }
        .rtsScroll
        {
            width:626px !important;
        }
    </style>
    <script type="text/javascript">


        $("#<%=rtlPage.ClientID%>").find(".isEntity").parent().parent().addClass("entRow");
        $("#<%=rtlPage.ClientID%>").on("click", ".entChk", function (e) { toggleRights($(e.target)) });
        $("#<%=rtlPage.ClientID%>").on("click", ".tdctr,.cellCtr", function (e) { e.stopPropagation(); if (currMenu) currMenu.hide(); showScopeDdl($(this)) });
        $("#<%=ddlRecommended.ClientID%>").SelectX();
        $("#spnRecom").setDisplay($.QS("_r")!="1").find(".selectX-input").html("Apply Recommended Permissions");
     
        //tdctr
        function toggleRights(chk, fromParent) {
            if (chk.checked()) {
                chk.closest("TR").find(".cellCtr>.accessTitle").html("User Scope").attr("val", "User Scope").prev().attr("class", "iconCtr icon-UserScope").parent().attr("title", "User Scope");
            }
            else
                chk.closest("TR").find(".cellCtr>.accessTitle").html("").attr("val", "").prev().attr("class", "iconCtr");
            if (!fromParent)
                $("#<%=rtlPage.ClientID%>").find(".entChk." + chk.parent().attr("entity_pid")).each(function () { if (chk.checked() && $(this).node(0).checked()) return true; toggleRights($(this).node(0).checked(chk.checked()), true); });
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
                });
                var cellCtr = td.find(".cellCtr");
                cellCtr.append(menu);
                menu.find(".txtEntityUserField").on("click", function () {
                    $("#entityFieldPopup,#userFieldPopup").hide();
                    var eid = td.closest("TR").find(".isEntity").attr("entity_pid");
                    if ($("#entityFieldPopup").attr("eid") != eid) {
                        $("#entityFieldPopup").attr("eid", eid);
                        $("#entityFieldPopup").find("iframe").attr("src", "../meta/fieldbrowser.aspx?mode=ChooseField&EID="+eid+"&nobg=1&fn=__selectEntityField");
                    }
                    $("#entityFieldPopup").show().position({ my: "left top", at: "left bottom", of: $(this), collision: "none none" })
                });
                menu.find(".txtUserField").on("click", function () {
                    $("#entityFieldPopup,#userFieldPopup").hide();
                    $("#userFieldPopup").show().position({ my: "left top", at: "left bottom", of: $(this), collision: "none none" })
                });
                if (!$.isEmpty(cellCtr.children(".accessTitle").attr("val"))) {
                    var arr = cellCtr.children(".accessTitle").attr("val").split('|');
                    if (arr.length > 1) {
                        menu.find(".txtEntityUserField").val(arr[1]);
                        menu.find(".txtUserField").val(arr[2]);
                        menu.find(".chkHierarchy").checked(arr[3]=="1");
                    }
                }
                menu.children().on("mouseover", function () {
                    menu.find("._child").hide();
                    if($(this).hasClass("_parent"))
                    $(this).find("._child").show();
                })
                menu.find("._child").on("click", function (e) {
                    if ($(e.target).prop("type") != "text")
                        $("#entityFieldPopup,#userFieldPopup").hide();
                    e.stopPropagation();                   
                })
                menu.on("click", "div", function (e) {
                    e.stopPropagation();
                    toggleAccess($(this), $(this).closest(".cellCtr"));
                    $(this).parent().hide();
                })
                //menu.children("._parent").on("mouse")
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
                $("#entityFieldPopup,#userFieldPopup").hide();
            });

        }
        function __selectEntityField(name, id, path) {
            $("#entityFieldPopup,#userFieldPopup").hide();
            currMenu.find(".txtEntityUserField").val(path.Trim('[').Trim('\\]'));
        }
        function __selectUserField(name, id, path) {
            $("#entityFieldPopup,#userFieldPopup").hide();
            currMenu.find(".txtUserField").val(path.Trim('[').Trim('\\]'));
        }
        function saveCustomAccess(a) {
            a = $(a);
            var td = a.closest(".cellCtr");
            var menu = a.closest("._child");
            var val ="Custom|"+ menu.find(".txtEntityUserField").val() + "|" + menu.find(".txtUserField").val() + "|" + (menu.find(".chkHierarchy").checked() ? 1 : 0)
            td.children(".accessTitle")
                         .html("Custom")
                         .attr("val", val)
                         .prev().attr("class", "iconCtr icon-Custom")
                         .parent().attr("title", "");
            menu.closest(".roleMenu").hide();
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
                $("#<%=rtlPage.ClientID%>").find(".entChk." + chk.parent().attr("entity_pid")).each(function () { if (!$(this).node(0).checked()) return true; toggleAccess(btn, $(this).closest("TR").find(".accessTitle." + action).parent(), true); });
            }

        }
        function toggleAccessFlt(flt, item) {
            var opt = item.closest("TR").find(".ddlScope").find("option[value='" + flt.replace(":","\:") + "']");
            item.children(".accessTitle")
                         .html(opt.text())
                         .attr("val", flt)
                         .prev().attr("class", "iconCtr icon-Filter")
                         .parent().attr("title", opt.text());
        }

        function LoadCustomSettings(forced) {
            if ($.isEmpty($("#iframeSettings").attr('src')) || forced)
                $("#iframeSettings").attr('src', "CustomSettings.aspx?_ns=1&_nowrap=1&cat=Role&id=" + $.QS("UserRole") + ($.QS("_r") == "1" ? "&_r=1" : ""));
        }

        function LoadMenuRights(forced) {
            if ($.isEmpty($("#iframeMenu").attr('src')) || forced)
                $("#iframeMenu").attr('src', "../main/view.aspx?1&_nowrap=1&EID=tbl_SYS_Config&_fc=MenuAccess&_pt=V&m=role&r=" + $.QS("UserRole") + ($.QS("_r") == "1" ? "&_r=1" : ""));
        }


        function ClientTabSelected(sender, args) {
            var tab = args.get_tab().get_value();
            if (tab == "settings")
                LoadCustomSettings();
            else if (tab == "menu") {
                LoadMenuRights(rightsModified);
                rightsModified = false;
            }
            else if (tab == "widget") {
                LoadRoleAndPermisionWidget(tab);
            }
            else if (tab == "layout") {
                LoadRoleAndPermisionLayout(tab);
               
            }
            else if (tab == "view") {
                LoadRoleAndPermisionView(tab);
               
            }
            else if (tab == "report") {
                LoadRoleAndPermisionReport(tab);

            }
            else if (tab == "actionbutton") {
                LoadRoleAndPermisionActionButton(tab);

            }
            filterRecommendedList(tab);
          
        }

        

        function LoadRoleAndPermisionWidget(type) {
            if ($.isEmpty($("#iframeRoleAndPermissionWidget").attr('src')))
                $("#iframeRoleAndPermissionWidget").attr('src', "../main/view.aspx?EID=tbl_SYS_UserRole&_nowrap=1&_fc=RoleAndPermissionSettings&_ns=1&_pt=V&type=" + type + "&UserRole=" + $.QS("UserRole") + ($.QS("_r") == "1" ? "&_r=1" : ""));
        }

        function LoadRoleAndPermisionLayout(type) {
            if ($.isEmpty($("#iframeRoleAndPermissionLayout").attr('src')))
                $("#iframeRoleAndPermissionLayout").attr('src', "../main/view.aspx?EID=tbl_SYS_UserRole&_nowrap=1&_fc=RoleAndPermissionSettings&_ns=1&_pt=V&type=" + type + "&UserRole=" + $.QS("UserRole") + ($.QS("_r") == "1" ? "&_r=1" : ""));
        }

        function LoadRoleAndPermisionView(type) {
            if ($.isEmpty($("#iframeRoleAndPermissionView").attr('src')))
                $("#iframeRoleAndPermissionView").attr('src', "../main/view.aspx?EID=tbl_SYS_UserRole&_nowrap=1&_fc=RoleAndPermissionSettings&_ns=1&_pt=V&type=" + type + "&UserRole=" + $.QS("UserRole") + ($.QS("_r") == "1" ? "&_r=1" : ""));
        }
        function LoadRoleAndPermisionReport(type) {
            if ($.isEmpty($("#iframeRoleAndPermissionReport").attr('src')))
                $("#iframeRoleAndPermissionReport").attr('src', "../main/view.aspx?EID=tbl_SYS_UserRole&_nowrap=1&_fc=RoleAndPermissionSettings&_ns=1&_pt=V&type=" + type + "&UserRole=" + $.QS("UserRole") + ($.QS("_r") == "1" ? "&_r=1" : ""));
        }
        function LoadRoleAndPermisionActionButton(type) {
            if ($.isEmpty($("#iframeRoleAndPermissionActionButton").attr('src')))
                $("#iframeRoleAndPermissionActionButton").attr('src', "../main/view.aspx?EID=tbl_SYS_UserRole&_nowrap=1&_fc=RoleAndPermissionSettings&_ns=1&_pt=V&type=" + type + "&UserRole=" + $.QS("UserRole") + ($.QS("_r") == "1" ? "&_r=1" : ""));
        }
        var dgPer;

        function pageLoad() {
            filterRecommendedList("page");
        }


        function toggleChildren(chk) {
            chk = $(chk);
            var eid = chk.parent().attr("entity_pid");
            $("." + chk.parent().attr("class").Trim() + "." + eid + ">input").checked(chk.checked());
        }


        var savingPageData = false;
        var rightsModified = false;
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
                    right.ExportRights = $.defaultVal(rightControl.find(".exportrights").attr("val"), "");
                    right.EntityID = rightControl.find(".isEntity").attr("entity_pid");
                    right.UserRole = $.QS("UserRole");
                    arrRights.push(right);
                }
            });
            savingPageData = true;
            var rightData = new Object();
            rightData["Type"] = "SavePageRights";
            rightData["@RoleID"] = $.QS("UserRole");
            rightData["Recommended"] = $.defaultVal($.QS("_r"), "0");
            $.Notify("Saving...");
            PageMethods.SavePageRights(rightData, arrRights, OnPageRightSuccess, OnPageRightError);
            return false;
        }

        function OnPageRightSuccess(result) {
            $.Notify(false);
            savingPageData = false;
            rightsModified = true;
            $("#iframeRoleAndPermissionLayout").attr('src','');
            $("#iframeRoleAndPermissionView").attr('src', '');
            $("#iframeRoleAndPermissionReport").attr('src', '');
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


        function GetRecommended() {
            var data = {};
            data["@Role"] = $.QS("UserRole");
            data["@AppID"] = $("#<%=ddlRecommended.ClientID%>").val();
            data["AccessType"] = $find("<%=tabAccessControl.ClientID%>").get_selectedTab().get_value();;
            $.Notify("Applying Recommended Rights...");
            PageMethods.GetRecommended(data, function (r) {
                $.Notify(false);
                console.log(r);
                if (data["AccessType"] == "page") {
                    var chk = $(".entChk");
                    for (var i = 0; i < r.length; i++) {
                        var c = chk.filter("[entity_pid=" + r[i]["Entity_Fid"].toLowerCase() + "]");
                        if (c.length <= 0)
                            continue;
                        c.closest("TR").css("background-color", "#fffdaf");
                        c.children().checked(true);
                        var b = $("#RoleMenu").children("[val='" + r[i]["AddRightsFilter"] + "']");
                        var e = c.closest("TR").find(".addrights").closest(".cellCtr");
                        if (r[i]["AddRightsFilter"].indexOf(":")>0)
                            toggleAccessFlt(r[i]["AddRightsFilter"], e, false);
                        else
                            toggleAccess(b, e, false);

                        b = $("#RoleMenu").children("[val='" + r[i]["DeleteRightsFilter"] + "']");
                        e = c.closest("TR").find(".deleterights").closest(".cellCtr")
                        if (r[i]["DeleteRightsFilter"].indexOf(":") > 0)
                            toggleAccessFlt(r[i]["DeleteRightsFilter"], e, false);
                        else
                            toggleAccess(b, e, false);

                        b = $("#RoleMenu").children("[val='" + r[i]["EditRightsFilter"]+ "']");
                        e = c.closest("TR").find(".editrights").closest(".cellCtr")
                        if (r[i]["EditRightsFilter"].indexOf(":") > 0)
                            toggleAccessFlt(r[i]["EditRightsFilter"], e, false);
                        else
                            toggleAccess(b, e, false);

                        b = $("#RoleMenu").children("[val='" + r[i]["ViewRightsFilter"] + "']");
                        e = c.closest("TR").find(".viewrights").closest(".cellCtr")
                        if (r[i]["ViewRightsFilter"].indexOf(":") > 0)
                            toggleAccessFlt(r[i]["ViewRightsFilter"], e, false);
                        else
                            toggleAccess(b, e, false);
                    }
                }
                else if (data["AccessType"] == "settings") {
                    var w=$("#iframeSettings")[0];
                    if (w.contentWindow && typeof w.contentWindow.$ != "undefined") {
                        var chk = w.contentWindow.$(".simple-param");
                        for (var i = 0; i < r.length; i++) {
                            var c = chk.filter("[perid='" + r[i]["Permission_Fid"] + "']");
                            if (c.length <= 0)
                                continue;
                            c.find("input").checked(true)
                        }
                    }
                }
                else if (data["AccessType"] == "menu") {
                    var w = $("#iframeMenu")[0];
                    if (w.contentWindow && typeof w.contentWindow.$ != "undefined") {
                        var chk = w.contentWindow.$(".menuItem,.menuItemGroup ");
                        for (var i = 0; i < r.length; i++) {
                            var c = chk.filter("[data--menu-i-d='" + r[i]["Menu_Fid"] + "']");
                            if (c.length <= 0)
                                continue;
                            c.removeClass("deactivate").addClass("recom");
                            if (c.parent().hasClass("menuSet") || c.parent().hasClass("menuItemSet"))
                                c.parent().removeClass("deactivate")
                        }
                    }
                }
                else if (data["AccessType"] == "widget") {
                    var w = $("#iframeRoleAndPermissionWidget")[0];
                    if (w.contentWindow && typeof w.contentWindow.$ != "undefined") {
                        var chk = w.contentWindow.$(".entChk");
                        for (var i = 0; i < r.length; i++) {
                            var c = chk.filter("[entity_pid='" + r[i]["ResourceID"].toLowerCase() + "']");
                            if (c.length <= 0)
                                continue;
                            c.closest("TR").css("background-color", "#fffdaf");
                            c.children().checked(true);
                        }
                    }
                }
                else if (data["AccessType"] == "report") {
                    var w = $("#iframeRoleAndPermissionReport")[0];
                    if (w.contentWindow && typeof w.contentWindow.$ != "undefined") {
                        var chk = w.contentWindow.$(".entChk");
                        for (var i = 0; i < r.length; i++) {
                            var c = chk.filter("[entity_pid='" + r[i]["ResourceID"].toLowerCase() + "']");
                            if (c.length <= 0)
                                continue;
                            c.closest("TR").css("background-color", r[i]["ResourceInfo1"] == "1" ? "#fffdaf" : "#ffe6e6");
                            c.children().checked(r[i]["ResourceInfo1"]=="1");
                        }
                    }
                }
                else if (data["AccessType"] == "actionbutton") {
                    var w = $("#iframeRoleAndPermissionActionButton")[0];
                    if (w.contentWindow && typeof w.contentWindow.$ != "undefined") {
                        var chk = w.contentWindow.$(".entChk");
                        for (var i = 0; i < r.length; i++) {
                            var c = chk.filter("[entity_pid='" + r[i]["ResourceID"].toLowerCase() + "']");
                            if (c.length <= 0)
                                continue;
                            c.closest("TR").css("background-color", r[i]["ResourceInfo1"] == "1" ? "#fffdaf" : "#ffe6e6");
                            c.children().checked(r[i]["ResourceInfo1"] == "1");
                        }
                    }
                }
                else if (data["AccessType"] == "layout") {
                    var w = $("#iframeRoleAndPermissionLayout")[0];
                    if (w.contentWindow && typeof w.contentWindow.$ != "undefined") {
                        var chk = w.contentWindow.$(".entChk");
                        for (var i = 0; i < r.length; i++) {
                            var c = chk.filter("[entity_pid='" + r[i]["ResourceID"].toLowerCase() + "']");
                            if (c.length <= 0)
                                continue;
                            c.closest("TR").css("background-color", "#fffdaf");
                            c.children().checked(true);
                        }
                    }
                }
                else if (data["AccessType"] == "view") {
                    var w = $("#iframeRoleAndPermissionView")[0];
                    if (w.contentWindow && typeof w.contentWindow.$ != "undefined") {
                        var chk = w.contentWindow.$(".entChk");
                        for (var i = 0; i < r.length; i++) {
                            var c = chk.filter("[entity_pid='" + r[i]["ResourceID"].toLowerCase() + "']");
                            if (c.length <= 0)
                                continue;
                            c.closest("TR").css("background-color", "#fffdaf");
                            c.children().checked(true);
                        }
                    }
                }
            }, OnPageRightError);
        }

        function filterRecommendedList(tab) {
            tab = (tab == "layout" ? "item" : tab); tab = (tab == "view" ? "grid" : tab);
            $("#<%=ddlRecommended.ClientID%>").children().hide().filter("[accesstype=" + tab + "]").show();
            $("#<%=ddlRecommended.ClientID%>").children().eq(0).show(); 
            $("#<%=ddlRecommended.ClientID%>").prop("selectedIndex", -1);
            $("#<%=ddlRecommended.ClientID%>").SelectX("refresh");
            $("#spnRecom").setDisplay($.QS("_r") != "1").find(".selectX-input").html("Apply Recommended Permissions");
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


