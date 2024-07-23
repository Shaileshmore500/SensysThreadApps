<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="FieldInfo_View.aspx.cs" Inherits="SensysErp.Meta.FieldInfo_View" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">

        //window.title="title"
        //document.documentElement.style.overflowX = "hidden"
        //document.documentElement.style.overflowY = "hidden"

    </script>
  
    <style type="text/css">
        #divFieldMenuCtr
        {
            display: none;
            z-index: 3500;
            padding: 20px;
            font-family: nunitoregular;
            height: 525px;
            width: 500px;
            top: 25px !important;
            background-color: #444;
        }

        #divBatchFields
        {
            display: none;
            z-index: 3500;
            padding: 20px;
            font-family: nunitoregular;
            height: 450px;
            width: 500px;
            top: 25px !important;
        }

        #divCustomAddress
        {
            display: none;
            z-index: 3500;
            padding: 20px;
            font-family: nunitoregular;
            height: 375px;
            width: 470px;
            top: 25px !important;
        }

        #divCustomName
        {
            display: none;
            z-index: 3500;
            padding: 20px;
            font-family: nunitoregular;
            height: 320px;
            width: 470px;
            top: 25px !important;
        }

        #divSortOrder
        {
            display: none;
            z-index: 3500;
            padding: 20px;
            font-family: nunitoregular;
            height: 100px;
            width: 470px;
            top: 25px !important;
        }

        #divTimeStamp
        {
            display: none;
            z-index: 3500;
            padding: 20px;
            font-family: nunitoregular;
            height: 170px;
            width: 470px;
            top: 25px !important;
        }

        #divStatus
        {
            display: none;
            z-index: 3500;
            padding: 20px;
            font-family: nunitoregular;
            height: 200px;
            width: 470px;
            top: 25px !important;
        }

        #divPriority
        {
            display: none;
            z-index: 3500;
            padding: 20px;
            font-family: nunitoregular;
            height: 170px;
            width: 470px;
            top: 25px !important;
        }

        .lblNote
        {
            font-size: 11px;
            padding-bottom: 2px;
        }

        #divGrid
        {
            padding: 7px 0 0 7px;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            -ms-box-sizing: border-box;
            box-sizing: border-box;
        }

        #ifrAddPage
        {
            position: absolute;
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 5px;
            display: none;
        }

        .tile-Grid
        {
            width: 530px;
            height: 525px;
            color: #FFF;
        }

            .tile-Grid > div
            {
                position: absolute;
                padding: 5px;
                min-height: 20px;
                min-width: 20px;
                box-sizing: border-box;
                -moz-box-sizing: border-box;
                overflow: hidden;
            }

                .tile-Grid > div:before
                {
                    content: "";
                    display: block;
                    position: absolute;
                    z-index: -1;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    visibility: hidden;
                    background-repeat: no-repeat;
                    background-image: -webkit-linear-gradient( top left, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 37%, rgba(255, 255, 255, 0.8) 45%, rgba(255, 255, 255, 0) 50% ), -webkit-linear-gradient( rgba(62, 119, 157, 0), rgba(101, 169, 215, 0) );
                    background-image: -moz-linear-gradient( 0 0, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 37%, rgba(255, 255, 255, 0.8) 45%, rgba(255, 255, 255, 0.0) 50% ), -moz-linear-gradient( rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) );
                    background-image: -o-linear-gradient( 0 0, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 37%, rgba(255, 255, 255, 0.8) 45%, rgba(255, 255, 255, 0.0) 50% ), -o-linear-gradient( rgba(255, 255, 255, 0),rgba(255, 255, 255, 0) );
                    background-image: linear-gradient( 0 0, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 37%, rgba(255, 255, 255, 0.8) 45%, rgba(255, 255, 255, 0.0) 50% ), linear-gradient( rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) );
                    background-position: -100px -100px, 0 0;
                    -moz-background-size: 250% 250%, 100% 100%;
                    background-size: 250% 250%, 100% 100%;
                    -webkit-transition: background-position 0s ease;
                    -moz-transition: background-position 0s ease;
                    -o-transition: background-position 0s ease;
                    transition: background-position 0s ease;
                }

                .tile-Grid > div > div
                {
                    height: 100%;
                    width: 100%;
                    box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    cursor: pointer;
                }

                .tile-Grid > div:hover:before
                {
                    visibility: visible;
                    background-position: 0 0, 0 0;
                    -webkit-transition-duration: 0.75s;
                    -moz-transition-duration: 0.75s;
                    transition-duration: 0.75s;
                }

                .tile-Grid > div:hover > div:before
                {
                    font-size: 160px !important;
                    -webkit-transition: all 0.3s ease;
                    -moz-transition: all 0.3s ease;
                    -o-transition: all 0.3s ease;
                    -ms-transition: all 0.3s ease;
                }

        .tile-Numeric
        {
            width: 150px;
            height: 300px;
        }

        .tile-Text
        {
            width: 500px;
            height: 100px;
        }

        .tile-Datetime
        {
            width: 250px;
            height: 100px;
        }

        .tile-Bool
        {
            width: 100px;
            height: 100px;
        }

        .tile-Select
        {
            width: 150px;
            height: 325px;
        }

        .tile-Image
        {
            width: 200px;
            height: 100px;
        }

        .tile-Special
        {
            width: 200px;
            height: 100px;
        }

        .tile-Custom
        {
            width: 350px;
            height: 125px;
        }

        .tile-Numeric > div
        {
            background-color: #d11141;
            padding-top: 100px;
            padding-left: 15px;
            color: #fff;
        }

            .tile-Numeric > div:before
            {
                font-family: Arial;
                content: "%";
                position: absolute;
                font-size: 130px;
                color: #9D0000;
                top: 0px;
            }

        .tile-Text > div
        {
            background-color: #006EFF;
            padding-top: 21px;
            padding-left: 95px;
            color: #fff;
        }

            .tile-Text > div:before
            {
                font-family: fontawesome;
                content: "\f035";
                position: absolute;
                font-size: 75px;
                color: #1293FF;
                top: 6px;
                left: 15px;
            }



        .tile-Datetime > div
        {
            background-color: #00b159;
            padding-top: 18px;
            padding-left: 75px;
            color: #fff;
        }

            .tile-Datetime > div:before
            {
                font-family: fontawesome;
                content: "\f017";
                position: absolute;
                font-size: 75px;
                color: #008E0D;
                top: 6px;
                left: 15px;
            }

        .tile-Bool > div
        {
            background-color: #ffc425;
            padding-top: 18px;
            padding-left: 8px;
            color: #17130A;
        }

            .tile-Bool > div:before
            {
                font-family: fontawesome;
                content: "\f046";
                position: absolute;
                font-size: 59px;
                color: #FFF270;
                top: 7px;
                left: 38px;
            }

        .tile-Select > div
        {
            background-color: #FF1D77;
            padding-top: 75px;
            padding-left: 5px;
            color: #fff;
        }

            .tile-Select > div:before
            {
                font-family: fontawesome;
                content: "\f0ca";
                position: absolute;
                font-size: 75px;
                color: #FF7EA5;
                top: 7px;
                left: 16px;
            }

        .tile-Image > div
        {
            background-color: #6C00C3;
            padding-left: 65px;
            padding-top: 18px;
            text-align: right;
            color: #fff;
        }

            .tile-Image > div:before
            {
                font-family: fontawesome;
                content: "\f03e";
                position: absolute;
                font-size: 70px;
                color: #4E007B;
                top: 7px;
                left: 16px;
            }

        .tile-Special > div
        {
            background-color: #00D8CC;
            padding-left: 80px;
            padding-top: 16px;
            color: #263A41;
        }

            .tile-Special > div:before
            {
                font-family: fontawesome;
                content: "\f160";
                position: absolute;
                font-size: 82px;
                color: #74FFF4;
                top: 9px;
                left: 19px;
            }

        .tile-Custom > div
        {
            background-color: #FF2E12;
            padding-top: 5px;
            padding-left: 0px;
            text-align: right;
            color: #FFF;
        }

            .tile-Custom > div:before
            {
                font-family: fontawesome;
                content: "\f0ad";
                position: absolute;
                font-size: 82px;
                color: #FF8D47;
                top: 6px;
                left: 29px;
            }

            .tile-Custom > div .fieldLink:first-child
            {
                margin-left: 90px;
            }

        .tile-Grid .fieldLink
        {
            color: inherit;
            font-family: nunitoregular;
            font-size: 16px;
            display: inline-block;
            padding: 5px 5px;
            word-break: break-all;
            position: relative;
            z-index: 5;
            outline: 0 !important;
        }

            .tile-Grid .fieldLink:hover
            {
                border-radius: 5px;
            }

            .tile-Grid .fieldLink:after
            {
                content: "";
                display: inline-block;
                position: absolute;
                top: 0;
                left: 0;
                height: 0;
                width: 0;
                visibility: hidden;
                z-index: -1;
                background-color: #000;
                -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=35)" !important;
                filter: alpha(opacity=35) !important;
                opacity: 0.35;
                border-radius: 5px;
            }

            .tile-Grid .fieldLink:hover:after
            {
                visibility: visible;
                width: 100%;
                height: 100%;
                -webkit-transition: all 0.3s ease;
                -moz-transition: all 0.3s ease;
                -o-transition: all 0.3s ease;
                -ms-transition: all 0.3s ease;
            }

        .no-csstransforms .fieldLink:after
        {
            display: none;
        }

        .tile-Grid .fieldLink:before
        {
            font-family: fontawesome;
            content: "\f192";
            margin-right: 3px;
            display: inline-block;
            font-size: 14px;
            text-decoration: none;
        }

        .ui-tooltip-content
        {
            font-family: nunitobold;
            font-size: 13px;
        }

        .ownermod
        {
            margin-bottom: 3px;
            margin-left: 50%;
            width: 41% !important;
        }

        .ownerHide
        {
            display: none;
        }

        .note
        {
            font-family: Verdana;
            font-size: 11px;
            display: block;
            margin-right: 9% !important;
        }
    </style>

    <style type="text/css">
        .lblEntity
        {
            font-size: 18px;
            font-family: nunitoregular;
            margin-left: 10px;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
            <asp:Label ID="lblEntity" runat="server" CssClass="cmdPanel lblEntity"></asp:Label>
            <div id="divGrid">



                <telerik:RadGrid ID="dgData" SkinID="NoScroll" runat="server" AllowPaging="False" AllowSorting="True"
                    AutoGenerateColumns="False" GridLines="None" GroupingEnabled="False"
                    Skin="Vista" Width="95%" OnNeedDataSource="dgData_NeedDataSource" EnableLinqExpressions="false"
                    AllowFilteringByColumn="false" OnRowDrop="dgData_RowDrop">
                    <PagerStyle Mode="NextPrevAndNumeric" PageButtonCount="5" PagerTextFormat="Change page: {4} &amp;nbsp;({0}/{1})&amp;nbsp;&amp;nbsp;Total records : {5}" />
                    <MasterTableView ClientDataKeyNames="fieldinfo_pid" CommandItemDisplay="Bottom"
                        TableLayout="Fixed">
                        <RowIndicatorColumn Visible="false">
                            <HeaderStyle Width="20px" />
                        </RowIndicatorColumn>
                        <ExpandCollapseColumn>
                            <HeaderStyle Width="20px" />
                        </ExpandCollapseColumn>
                        <Columns>
                             <telerik:GridDragDropColumn HeaderStyle-Width="20px">
                                        </telerik:GridDragDropColumn>
                            <telerik:GridTemplateColumn DataField="displayname" HeaderText="Display Name" UniqueName="unDis">
                                <ItemTemplate><span class='<%# ErpModel.Globals.AppManager.IsCurrentOwnerItem(Container.DataItem)?"DevMode":"" %>'><%# Eval("displayname").ToString()%></span></ItemTemplate>
                            </telerik:GridTemplateColumn>
                            <telerik:GridBoundColumn DataField="FieldName" HeaderText="Field Name" UniqueName="unField">
                            </telerik:GridBoundColumn>
                            <telerik:GridBoundColumn DataField="fieldtype" HeaderText="Field Type" UniqueName="unFType">
                            </telerik:GridBoundColumn>
                            <telerik:GridCheckBoxColumn DataField="Status_m" HeaderText="Is Mandatory" UniqueName="unMand" DataType="System.Boolean"></telerik:GridCheckBoxColumn>
                            <telerik:GridCheckBoxColumn DataField="IsDescriptive" HeaderText="Is Discriptive" UniqueName="unDiscript"></telerik:GridCheckBoxColumn>
                            <telerik:GridCheckBoxColumn DataField="IsUnique" HeaderText="Is Unique" UniqueName="unUnique"></telerik:GridCheckBoxColumn>
                            <telerik:GridTemplateColumn UniqueName="unIndex" HeaderText="Has Index" AllowFiltering="false">
                                <ItemTemplate><input type="checkbox" disabled <%# HelperLib.Conversion.C.Str(Eval("settings")).Contains("<EnableIndexing>1</EnableIndexing>")?"checked":"" %> /></ItemTemplate>
                            </telerik:GridTemplateColumn>
                            <telerik:GridCheckBoxColumn DataField="hasdefaultvalue" UniqueName="unDefaultVal" HeaderText="Has Default Value" DataType="System.Boolean"></telerik:GridCheckBoxColumn>
                            <telerik:GridBoundColumn DataField="field_systemdefined" Display="false" UniqueName="unSystemDefined"></telerik:GridBoundColumn>
                            <telerik:GridBoundColumn DataField="IsDescriptive" UniqueName="unTmp" Display="false">
                            </telerik:GridBoundColumn>
                            <telerik:GridBoundColumn DataField="IsSysCol" UniqueName="unSysCol" Display="false">
                            </telerik:GridBoundColumn>
                            <telerik:GridBoundColumn DataField="sortorder" HeaderText="Sort Order" UniqueName="unSort">
                            </telerik:GridBoundColumn>
                        </Columns>
                        <CommandItemTemplate>
                            <telerik:RadToolBar ID="RadToolBar1" runat="server" Skin="Vista" Width="100%" OnButtonClick="RadToolBar1_ButtonClick"
                                OnClientButtonClicking="onToolBarClientButtonClicking">
                                <CollapseAnimation Duration="200" Type="OutQuint" />
                                <Items>
                                    <telerik:RadToolBarButton  Visible='<%# AllowDataEntry("ADD") %>' CommandName="A" ImageUrl="~/images/AddRecord.gif"
                                        Text="Add">
                                    </telerik:RadToolBarButton>
                                    <telerik:RadToolBarButton Visible='<%# AllowDataEntry("EDIT") %>' CommandName="E"
                                        ImageUrl="~/images/Edit.gif" Text="Edit">
                                    </telerik:RadToolBarButton>
                                    <telerik:RadToolBarButton Visible='<%# AllowDataEntry("ADD") %>' CommandName="CP"
                                        ImageUrl="~/images/Edit.gif" Text="Copy">
                                    </telerik:RadToolBarButton>
                                    <telerik:RadToolBarButton CommandName="V"
                                        ImageUrl="~/images/Icon.gif" Text="View">
                                    </telerik:RadToolBarButton>
                                    <telerik:RadToolBarButton Visible='<%# AllowDataEntry("DELETE") %>' CommandName="D"
                                        ImageUrl="~/images/delete.gif" Text="Delete">
                                    </telerik:RadToolBarButton>
                                </Items>
                            </telerik:RadToolBar>
                        </CommandItemTemplate>
                    </MasterTableView>
                    <ClientSettings AllowDragToGroup="True" AllowRowsDragDrop="True" AllowGroupExpandCollapse="False" AllowKeyboardNavigation="True">
                        <Selecting AllowRowSelect="True" />
                        <ClientEvents OnRowDropping="RowDropping" />
                        <Scrolling AllowScroll="False" ScrollHeight="180px" UseStaticHeaders="True" />
                        <Resizing AllowColumnResize="True" />
                    </ClientSettings>
                </telerik:RadGrid>
                <br />
                <br />
                <span class="note"><span style="font-style: italic">Note</span> : You can drag the rows to change the order of the database fields.</span><br />
                <div id="divFieldMenuCtr" class="div-form">
                    <%--<img src="../Images/Cancel.gif" onclick="return HideFieldPopup()" style="float: right; cursor: pointer; top: 5px" />--%>
                    <div id="tileGrid" style="overflow: hidden" class="tile-Grid">

                        <asp:Repeater ID="fieldListMenu" runat="server">
                            <ItemTemplate>
                                <%# Eval("GroupName").ToString() !=HelperLib.Conversion.C.Str(ViewState["GpName"])?(HelperLib.Conversion.C.IsBlank(ViewState["GpName"])?"":"</div></div>")+"<div class='tile tile-"+Eval("GroupName").ToString()+"'><div>":"" %>
                                <a href="javascript:void(0)" class="fieldLink" title='<%# HelperLib.Conversion.C.Str(Eval("description")) %>' fieldid='<%# HelperLib.Conversion.C.Str(Eval("fieldtypeid")) %>' fieldtype='<%# HelperLib.Conversion.C.Str(Eval("fieldtype")) %>'><%# HelperLib.Conversion.C.IsBlank(Eval("display"))?HelperLib.Conversion.C.Str(Eval("fieldtype")):HelperLib.Conversion.C.Str(Eval("display")) %></a>
                                <%# (ViewState["GpName"]=Eval("GroupName").ToString()) ==""?"":"" %>
                            </ItemTemplate>
                            <FooterTemplate>
                                <%#"</div></div>" %>
                            </FooterTemplate>
                        </asp:Repeater>
                    </div>

                </div>
                <div id="divCustomName" class="div-form">
                    <table class="table-form">
                        <tr>
                            <td></td>
                            <td class="td-label">
                                <asp:Label ID="Label1" runat="server" Text="Display Name"></asp:Label>
                            </td>
                            <td class="td-label">
                                <asp:Label ID="lblFieldCheck" runat="server" Text="Field Name"></asp:Label>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-value">
                                <input id="chkTitle" type="checkbox" runat="server" checked="checked" />
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtTitleD" runat="server" Text="Title" CssClass="speacialchars" mode="d"></asp:TextBox>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtTitle" runat="server" Text="title" CssClass="speacialchars" mode="f"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-value">
                                <input id="chkFName" type="checkbox" runat="server" checked="checked" />
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtFNameD" runat="server" Text="First Name" CssClass="speacialchars" mode="d"></asp:TextBox>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtFName" runat="server" Text="fname" CssClass="speacialchars" mode="f"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-value">
                                <input id="chkMName" type="checkbox" runat="server" checked="checked" />
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtMNameD" runat="server" Text="Middle Name" CssClass="speacialchars" mode="d"></asp:TextBox>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtMName" runat="server" Text="mname" CssClass="speacialchars" mode="f"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-value">
                                <input id="chkLName" type="checkbox" runat="server" checked="checked" />
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtLNameD" runat="server" Text="Last Name" CssClass="speacialchars" mode="d"></asp:TextBox>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtLName" runat="server" Text="lname" CssClass="speacialchars" mode="f"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td class="td-value">
                                <span>Dynamic Field</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-value">
                                <input id="chkfull" type="checkbox" runat="server" checked="checked" />
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtFullNameD" runat="server" Text="Full name" CssClass="speacialchars" mode="d"></asp:TextBox>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtFullName" runat="server" Text="fullname" CssClass="speacialchars" mode="f"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-label" colspan="3">
                                <asp:Label ID="Label4" runat="server" CssClass="lblNote" Text="<b>Note : </b>Checked fields are created with given Field Name and Display Name."></asp:Label>
                            </td>
                        </tr>
                    </table>
                    <br />
                    <asp:LinkButton ID="btnCustomName" runat="server" CssClass="cmdBtn cmdSave" OnClientClick="return CustomPopup('CustomName');" OnClick="btnCustomType_Click" Text="Submit" Style="margin-left: 30px" />
                    <a href="javascript:void(0)" class="cmdBtn cmdClose" onclick="return CustomPopup('c');">Cancel</a>
                </div>
                <div id="divCustomAddress" class="div-form">
                    <table class="table-form">
                        <tr>
                            <td class="td-label">
                                <asp:Label ID="lblPrefix" runat="server" Text="Prefix"></asp:Label>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtPrefix" runat="server" onblur="return ChangeText(this);"></asp:TextBox>
                            </td>
                        </tr>
                    </table>
                    <table class="table-form">
                        <tr>
                            <td></td>
                            <td class="td-label">
                                <asp:Label ID="Label3" runat="server" Text="Display Name"></asp:Label>
                            </td>
                            <td class="td-label">
                                <asp:Label ID="Label2" runat="server" Text="Field Name"></asp:Label>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-value">
                                <input id="chkflat" type="checkbox" runat="server" checked="checked" />
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtflatD" runat="server" Text="Flat" CssClass="speacialchars" mode="d"></asp:TextBox>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtflat" runat="server" Text="flat" CssClass="speacialchars" mode="f"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-value">
                                <input id="chkbuilding" type="checkbox" runat="server" checked="checked" />
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtbuildingD" runat="server" Text="Building" CssClass="speacialchars" mode="d"></asp:TextBox>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtbuilding" runat="server" Text="building" CssClass="speacialchars" mode="f"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-value">
                                <input id="chkroad" type="checkbox" runat="server" checked="checked" />
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtroadD" runat="server" Text="Road" CssClass="speacialchars" mode="d"></asp:TextBox>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtroad" runat="server" Text="road" CssClass="speacialchars" mode="f"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-value">
                                <input id="chkcity" type="checkbox" runat="server" checked="checked" />
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtcityD" runat="server" Text="City" CssClass="speacialchars" mode="d"></asp:TextBox>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtcity" runat="server" Text="city" CssClass="speacialchars" mode="f"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-value">
                                <input id="chkpincode" type="checkbox" runat="server" checked="checked" />
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtpincodeD" runat="server" Text="Pincode" CssClass="speacialchars" mode="d"></asp:TextBox>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtpincode" runat="server" Text="pincode" CssClass="speacialchars" mode="f"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-value">
                                <input id="chkstate" type="checkbox" runat="server" checked="checked" />
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtstateD" runat="server" Text="State" CssClass="speacialchars" mode="d"></asp:TextBox>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtstate" runat="server" Text="state" CssClass="speacialchars" mode="f"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-value">
                                <input id="chkcountry" type="checkbox" runat="server" checked="checked" />
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtcountryD" runat="server" Text="Country" CssClass="speacialchars" mode="d"></asp:TextBox>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtcountry" runat="server" Text="country" CssClass="speacialchars" mode="f"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-label" colspan="3">
                                <asp:Label ID="lblAddNote" runat="server" CssClass="lblNote" Text="<b>Note : </b>Checked fields are created with given Field Name and Display Name."></asp:Label>
                            </td>
                        </tr>
                    </table>
                    <br />
                    <asp:LinkButton ID="btnCustomAdd" runat="server" CssClass="cmdBtn cmdSave" OnClientClick="return CustomPopup('CustomAddress');" OnClick="btnCustomType_Click" Text="Submit" Style="margin-left: 22px" />
                    <a href="javascript:void(0)" class="cmdBtn cmdClose" onclick="return CustomPopup('c');">Cancel</a>
                </div>
                <div id="divTimeStamp" class="div-form">
                    <table class="table-form">
                        <tr>
                            <td></td>
                            <td class="td-label">
                                <asp:Label ID="Label5" runat="server" Text="Field Name"></asp:Label>
                            </td>
                            <td class="td-label">
                                <asp:Label ID="Label6" runat="server" Text="Display Name"></asp:Label>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-value">
                                <input id="chkTs" type="checkbox" runat="server" checked="checked" />
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtTs" runat="server" Text="recorddatetime"></asp:TextBox>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtTsD" runat="server" Text="Record TimeStamp"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-label" colspan="3">
                                <asp:Label ID="Label7" runat="server" CssClass="lblNote" Text="<b>Note:</b>Checked fields are created with given Field Name and Display Name, If not given then fields are created with default Field Name and Display Name."></asp:Label>
                            </td>
                        </tr>
                    </table>
                    <br />
                    <asp:LinkButton ID="btnTs" runat="server" CssClass="cmdBtn cmdSave" OnClientClick="return CustomPopup('TimeStamp');" OnClick="btnCustomType_Click" Text="Submit" Style="margin-left: 22px" />
                    <a href="javascript:void(0)" class="cmdBtn cmdClose" onclick="return CustomPopup('c');">Cancel</a>
                </div>
                <div id="divStatus" class="div-form">
                    <table class="table-form">
                        <tr>
                            <td class="td-label">
                                <asp:Label ID="lblSt" runat="server" Text="Field Name : "></asp:Label>
                            </td>
                            <td class="td-label">
                                <asp:Label ID="Label8" runat="server" Text="Status"></asp:Label>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-label" style="vertical-align: top">Status List :</td>
                            <td class="td-label">
                                <asp:CheckBox ID="chkDraft" runat="server" Text="Draft" />
                                <asp:CheckBox ID="chkFinal" runat="server" Text="Final" Style="margin-left: 27px" />
                                <hr />
                                <asp:CheckBox ID="chkOpen" runat="server" Text="Open" />
                                <asp:CheckBox ID="chkClose" runat="server" Text="Close" Style="margin-left: 27px" />
                                <hr />
                                <asp:CheckBox ID="chkSubmit" runat="server" Text="Submit" />
                                <asp:CheckBox ID="chkAccept" runat="server" Text="Accept" Style="margin-left: 20px" />
                                <asp:CheckBox ID="chkReject" runat="server" Text="Reject" Style="margin-left: 20px" />
                                <hr />
                                <a href="javascript:void(0)" id="aStatus" class="default-link" onclick="return OpenFieldWindow('Status');">Click here if you have other List</a>
                            </td>
                        </tr>
                    </table>
                    <br />
                    <asp:LinkButton ID="btnStatus" runat="server" CssClass="cmdBtn cmdSave" OnClientClick="return CustomPopup('Status');" OnClick="btnCustomType_Click" Text="Submit" Style="margin-left: 22px" />
                    <a href="javascript:void(0)" class="cmdBtn cmdClose" onclick="return CustomPopup('c');">Cancel</a>
                </div>
                <div id="divPriority" class="div-form">
                    <table class="table-form">
                        <tr>
                            <td class="td-label">
                                <asp:Label ID="Label9" runat="server" Text="Field Name : "></asp:Label>
                            </td>
                            <td class="td-label">
                                <asp:Label ID="Label10" runat="server" Text="Priority"></asp:Label>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-label" style="vertical-align: top">Priority List :</td>
                            <td class="td-label">
                                <asp:CheckBox ID="chkHigh" runat="server" Text="High" Checked="true" /><br />
                                <asp:CheckBox ID="chkMedium" runat="server" Text="Medium" Checked="true" /><br />
                                <asp:CheckBox ID="chkLow" runat="server" Text="Low" Checked="true" />
                                <hr />
                                <a href="javascript:void(0)" id="aPri" onclick="return OpenFieldWindow('Priority');">Click here if you have other List</a>
                            </td>
                        </tr>
                    </table>
                    <br />
                    <asp:LinkButton ID="btnPri" runat="server" CssClass="cmdBtn cmdSave" OnClientClick="return CustomPopup('Priority');" OnClick="btnCustomType_Click" Text="Submit" Style="margin-left: 22px" />
                    <a href="javascript:void(0)" class="cmdBtn cmdClose" onclick="return CustomPopup('c');">Cancel</a>
                </div>
                <div id="divSortOrder" class="div-form">
                    <table class="table-form">
                        <tr>
                            <td class="td-label">
                                <asp:Label ID="Label12" runat="server" Text="Display Name"></asp:Label>
                            </td>
                            <td class="td-label">
                                <asp:Label ID="Label11" runat="server" Text="Field Name"></asp:Label>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-value">
                                <asp:TextBox ID="txtSort_Popup_DisplayName" runat="server" Text="Sort Order" CssClass="speacialchars" mode="d"></asp:TextBox>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtSort_Popup_FieldName" runat="server" Text="sortorder" CssClass="speacialchars" mode="f"></asp:TextBox>
                            </td>
                        </tr>
                    </table>
                    <br />
                    <asp:LinkButton ID="btnSaveOrder" runat="server" CssClass="cmdBtn cmdSave" OnClientClick="return CustomPopup('SortOrder');" OnClick="btnCustomType_Click" Text="Submit" Style="margin-left: 22px" />
                    <a href="javascript:void(0)" class="cmdBtn cmdClose" onclick="return CustomPopup('c');">Cancel</a>
                </div>
                <div id="divBatchFields" class="div-form" style="display: none">
                    <table class="table-form">
                        <tr>
                            <td></td>
                            <td class="td-label">
                                <asp:Label ID="Label13" runat="server" Text="Field Types"></asp:Label>
                            </td>
                            <td class="td-value">
                                <telerik:RadComboBox ID="rcbBatchFieldTypes" runat="server" OnClientSelectedIndexChanged="ShowBatchFieldLengthBox">
                                    <Items>
                                        <telerik:RadComboBoxItem Text="Text" Value="Text" />
                                        <telerik:RadComboBoxItem Text="Password" Value="Password" />
                                        <telerik:RadComboBoxItem Text="Phone" Value="Phone" />
                                        <telerik:RadComboBoxItem Text="Email" Value="Email" />
                                        <telerik:RadComboBoxItem Text="Url" Value="Url" />
                                        <telerik:RadComboBoxItem Text="Multiline" Value="Multiline" />
                                        <telerik:RadComboBoxItem Text="RichText" Value="RichText" />
                                        <telerik:RadComboBoxItem Text="Number" Value="Number" />
                                        <telerik:RadComboBoxItem Text="Decimal" Value="Decimal" />
                                        <telerik:RadComboBoxItem Text="Currency" Value="Currency" />
                                        <telerik:RadComboBoxItem Text="Percent" Value="Percent" />
                                        <telerik:RadComboBoxItem Text="Date" Value="Date" />
                                        <telerik:RadComboBoxItem Text="Time" Value="Time" />
                                        <telerik:RadComboBoxItem Text="Datetime" Value="Datetime" />
                                        <telerik:RadComboBoxItem Text="Checkbox" Value="Checkbox" />
                                    </Items>
                                </telerik:RadComboBox>
                                <span id="spnLength" class="td-label" style="margin-left: 9px">Field Length</span>
                                <telerik:RadNumericTextBox ID="ntxtBatchFieldLength" runat="server" ShowSpinButtons="false" Width="30px" EmptyMessage="50" MaxValue="8000" MinValue="0"></telerik:RadNumericTextBox>
                            </td>
                        </tr>
                    </table>
                    <br />
                    <table class="table-form">
                        <tr>
                            <td></td>
                            <td class="td-label">
                                <asp:Label ID="Label14" runat="server" Text="Display Name"></asp:Label>
                            </td>
                            <td class="td-label">
                                <asp:Label ID="Label15" runat="server" Text="Field Name"></asp:Label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span id="Span1" class="td-label">1.</span>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="TextBox2" runat="server" CssClass="speacialchars" mode="d"></asp:TextBox>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="TextBox3" runat="server" CssClass="speacialchars" mode="f"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span id="Span2" class="td-label">2.</span>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="TextBox4" runat="server" CssClass="speacialchars" mode="d"></asp:TextBox>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="TextBox5" runat="server" CssClass="speacialchars" mode="f"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span id="Span3" class="td-label">3.</span>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="TextBox6" runat="server" CssClass="speacialchars" mode="d"></asp:TextBox>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="TextBox7" runat="server" CssClass="speacialchars" mode="f"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span id="Span4" class="td-label">4.</span>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="TextBox8" runat="server" CssClass="speacialchars" mode="d"></asp:TextBox>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="TextBox9" runat="server" CssClass="speacialchars" mode="f"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span id="Span10" class="td-label">5.</span>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="TextBox10" runat="server" CssClass="speacialchars" mode="d"></asp:TextBox>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="TextBox11" runat="server" CssClass="speacialchars" mode="f"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span id="Span5" class="td-label">6.</span>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="TextBox12" runat="server" CssClass="speacialchars" mode="d"></asp:TextBox>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="TextBox13" runat="server" CssClass="speacialchars" mode="f"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span id="Span6" class="td-label">7.</span>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="TextBox14" runat="server" CssClass="speacialchars" mode="d"></asp:TextBox>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="TextBox15" runat="server" CssClass="speacialchars" mode="f"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span id="Span7" class="td-label">8.</span>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="TextBox1" runat="server" CssClass="speacialchars" mode="d"></asp:TextBox>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="TextBox16" runat="server" CssClass="speacialchars" mode="f"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span id="Span8" class="td-label">9.</span>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="TextBox17" runat="server" CssClass="speacialchars" mode="d"></asp:TextBox>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="TextBox18" runat="server" CssClass="speacialchars" mode="f"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span id="Span9" class="td-label">10.</span>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="TextBox19" runat="server" CssClass="speacialchars" mode="d"></asp:TextBox>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="TextBox20" runat="server" CssClass="speacialchars" mode="f"></asp:TextBox>
                            </td>
                        </tr>
                    </table>
                    <br />
                    <asp:LinkButton ID="btnBatchFields" runat="server" CssClass="cmdBtn cmdSave" OnClientClick="return CustomPopup('batchfield');" OnClick="btnBatchFields_Click" Text="Create Batch Fields" Style="margin-left: 52px" />
                    <a href="javascript:void(0)" class="cmdBtn cmdClose" onclick="return CustomPopup('c');">Cancel</a>
                </div>
                <asp:HiddenField ID="hdnCustomType" runat="server" />
                <asp:HiddenField ID="hdnBatchData" runat="server" />
            </div>
            <span style="visibility: hidden;" id="spnLocate">&nbsp;</span>
            <div id="ifrAddPage">
                <iframe style="height: 100%; width: 100%;" id="ifrDetailPage" frameborder="0"></iframe>
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
        function pageLoad() {
            $("#tileGrid").find(".fieldLink").tooltip({
                show: {
                    effect: "slideDown",
                    delay: 250
                }
            });

            $("#tileGrid").on("click", ".tile,.fieldLink", function (e) {
                GetFieldType($(this).hasClass("fieldLink") ? $(this) : $(this).find(".fieldLink:first"));
                $(".speacialchars").each(function (e) {
                    $(this).attr('invalid', '0');
                });
                e.stopPropagation();
            })

            ShowBatchFieldLengthBox();

            $(".speacialchars").on("blur", function (e) {

                if ($(this).attr('mode') == "d") {
                    $(this).val($(this).val().RemoveSpecialChars());
                    $(this).closest("td").next("td").find(".speacialchars").val($(this).val().RemoveSpecialChars(true).toLowerCase());
                }
                else if ($(this).attr('mode') == "f") {
                    $(this).val($(this).val().RemoveSpecialChars(true).toLowerCase());
                }

                if ($(this).val().length > 0) {
                    var firstcharDisp = $(this).val().charCodeAt(0);
                    if (!((firstcharDisp >= 65 && firstcharDisp <= 90) || (firstcharDisp >= 97 && firstcharDisp <= 122))) {
                        $(this).attr('invalid', '1');
                        alert('Name must start with alphabet.');
                    }
                }
                else
                    $(this).attr('invalid', '0');
                e.stopPropagation();
            })

        }

        String.prototype.RemoveSpecialChars = function (space) {
            var outstring = "";
            for (var a = 0; a < this.length; a++) {

                var _currentCharCode = this[a].charCodeAt();

                if ((_currentCharCode >= 48 && _currentCharCode <= 57) ||
                    (_currentCharCode >= 65 && _currentCharCode <= 90) ||
                    (_currentCharCode >= 97 && _currentCharCode <= 122) || _currentCharCode == 95 || _currentCharCode == 32) {

                    if (_currentCharCode == 32 && space)
                        continue;
                    outstring = outstring + this[a];
                }
            }
            return outstring;
        }

        function onToolBarClientButtonClicking(sender, args) {
            var mode = args.get_item().get_commandName();
            if (mode == "C") {
                args.set_cancel(true);
            }
            else
                return args.set_cancel(!OpenWindow(mode));
        }

        function HideFieldPopup() {
            $("#divFieldMenuCtr").HideModal();
        }

        function SlideGroupType(cls) {
            $("." + cls).slideToggle();
        }

        var show = "";
        var url = "";

        function GetFieldType(div) {
            var ftype = div.attr("fieldtype")
            var fldid = div.attr('fieldid');
            $("#<%= hdnCustomType.ClientID %>").val(fldid);
            $("#divFieldMenuCtr").HideModal();

            if (fldid == "CustomName")
                $("#divCustomName").ShowModal();
            else if (fldid == "CustomAddress") {
                $("#divCustomAddress").ShowModal();
            }
            else if (fldid == "SortOrder") {
                $("#divSortOrder").ShowModal();
            }
            else if (fldid == "TimeStamp")
                $("#divTimeStamp").ShowModal();
            else if (fldid == "Status") {
                if (HasStatus == 0)
                    $("#divStatus").ShowModal();
                else
                    alert('This field in already in table');
            }
            else if (fldid == "BatchFields") {

                $("#divBatchFields").ShowModal();
            }
            else if (fldid == "Priority") {
                if (HasPriority == 0)
                    $("#divPriority").ShowModal();
                else
                    alert('This field in already in table');
            }
            else {
                url = "FieldInfo_Add.aspx?PageType=A&FieldType=" + ftype + "&ModuleID=" + $.QS("ModuleID") + "&EntityID=" + $.QS("EntityID") + "&IsSystemEntity=" + $.QS("IsSystemEntity");
                show = true;
                toggleDetailsForm(show);
            }
        }

        function OpenFieldWindow(type) {
            $("#divStatus").HideModal();
            $("#divPriority").HideModal();

            var data = "";

            if (type == "Status") {
                if ($("#<%= chkDraft.ClientID %>").checked())
                    data += "Draft|";
                if ($("#<%= chkFinal.ClientID %>").checked())
                    data += "Final|";

                if ($("#<%= chkOpen.ClientID %>").checked())
                    data += "Open|";
                if ($("#<%= chkClose.ClientID %>").checked())
                    data += "Close|";

                if ($("#<%= chkSubmit.ClientID %>").checked())
                    data += "Submit|";
                if ($("#<%= chkAccept.ClientID %>").checked())
                    data += "Accept|";
                if ($("#<%= chkReject.ClientID %>").checked())
                    data += "Reject|";
            }
            else if (type == "Priority") {
                if ($("#<%= chkHigh.ClientID %>").checked())
                    data += "High|";
                if ($("#<%= chkMedium.ClientID %>").checked())
                    data += "Medium|";
                if ($("#<%= chkLow.ClientID %>").checked())
                    data += "Low|";
            }

        url = "FieldInfo_Add.aspx?PageType=A&FieldType=" + type + "&ModuleID=" + $.QS("ModuleID") + "&EntityID=" + $.QS("EntityID") + "&IsSystemEntity=" + $.QS("IsSystemEntity") + "&Data=" + data;
        show = true;
        toggleDetailsForm(show);
        return false;
    }

    function CustomPopup(mode) {

        if (mode == "c") {
            $("#divCustomName").HideModal();
            $("#divCustomAddress").HideModal();
            $("#divTimeStamp").HideModal();
            $("#divStatus").HideModal();
            $("#divPriority").HideModal();
            $("#divSortOrder").HideModal();
            $("#divBatchFields").HideModal();
            return false;
        }

        if (mode == "Priority") {
            $("#divPriority").HideModal();
        }
        else if (mode == "Status") {
            $("#divStatus").HideModal();
        }
        else if (mode == "CustomName") {

            var chkTit = $("#<%= chkTitle.ClientID %>").checked();
            var chkFn = $("#<%= chkFName.ClientID %>").checked();
            var chkMn = $("#<%= chkMName.ClientID %>").checked();
            var chkLn = $("#<%= chkLName.ClientID %>").checked();


            if (chkTit && $("#<%= txtTitle.ClientID %>").val() == "") {
                alert('Please enter title');
                return false;
            }


            if (chkFn && $("#<%= txtFName.ClientID %>").val() == "") {
                alert('Please enter First Name.');
                return false;
            }


            if (chkMn && $("#<%= txtMName.ClientID %>").val() == "") {
                alert('Please enter Middle Name.');
                return false;
            }

            if (chkLn && $("#<%= txtLName.ClientID %>").val() == "") {
                alert('Please enter Last Name.');
                return false;
            }

            if (chkTit && $("#<%= txtTitleD.ClientID %>").attr('invalid') == 1) {
                alert('Title Display Name must start with alphabet.');
                return false;
            }

            if (chkTit && $("#<%= txtTitle.ClientID %>").attr('invalid') == 1) {
                alert('Title Display Name must start with alphabet.');
                return false;
            }

            if (chkFn && $("#<%= txtFNameD.ClientID %>").attr('invalid') == 1) {
                alert('First Name must start with alphabet.');
                return false;
            }

            if (chkFn && $("#<%= txtFName.ClientID %>").attr('invalid') == 1) {
                alert('First Name must start with alphabet.');
                return false;
            }

            if (chkMn && $("#<%= txtMNameD.ClientID %>").attr('invalid') == 1) {
                alert('Middle Name must start with alphabet.');
                return false;
            }

            if (chkMn && $("#<%= txtMName.ClientID %>").attr('invalid') == 1) {
                alert('Middle Name must start with alphabet.');
                return false;
            }

            if (chkLn && $("#<%= txtLNameD.ClientID %>").attr('invalid') == 1) {
                alert('Last Name must start with alphabet.');
                return false;
            }

            if (chkLn && $("#<%= txtLName.ClientID %>").attr('invalid') == 1) {
                alert('Last Name must start with alphabet.');
                return false;
            }


            var chkfull = $("#<%= chkfull.ClientID %>").checked();

            if (chkfull && $("#<%= txtFullNameD.ClientID %>").attr('invalid') == 1) {
                alert('Dynamic display Name must start with alphabet.');
                return false;
            }

            if (chkfull && $("#<%= txtFullName.ClientID %>").attr('invalid') == 1) {
                alert('Dynamic field Name must start with alphabet.');
                return false;
            }

            if (!chkTit && !chkFn && !chkMn && !chkLn)
                return false;

            $("#divCustomName").HideModal();

        }
        else if (mode == "SortOrder") {
            if ($("#<%= txtSort_Popup_FieldName.ClientID %>").val() == "") {
                alert('Please enter Field name for sort order.');
                return false;
            }

            if ($("#<%= txtSort_Popup_DisplayName.ClientID %>").attr('invalid') == 1) {
                alert('Sort Order display Name must start with alphabet.');
                return false;
            }

            if ($("#<%= txtSort_Popup_FieldName.ClientID %>").attr('invalid') == 1) {
                alert('Sort Order field Name must start with alphabet.');
                return false;
            }

            $("#divSortOrder").HideModal();
        }
        else if (mode == "CustomAddress") {


            var pfx = $("#<%= txtPrefix.ClientID %>").val();

            if (pfx.length > 0) {
                var intpfx = pfx.charCodeAt(0);
                if (!((intpfx >= 65 && intpfx <= 90) || (intpfx >= 97 && intpfx <= 122))) {

                    $("#divCustomAddress").find(".speacialchars").each(function (e) {
                        $(this).attr('invalid', '1');
                    });

                    alert('Prefix must start with alphabet.');
                    return false;
                }

                var pfxinvalid = $("#<%= txtPrefix.ClientID %>").attr('invalid');
                if (pfxinvalid == 1) {
                    alert('Prefix is invalid.');
                    return false;
                }
            }

            $("#divCustomAddress").find(".speacialchars").each(function (e) {
                if ($(this).val().length > 0) {
                    var valx = $(this).val().charCodeAt(0);
                    if (!((valx >= 65 && valx <= 90) || (valx >= 97 && valx <= 122))) {
                        $(this).attr('invalid', '1');
                    }
                    else
                        $(this).attr('invalid', '0');
                }
                else
                    $(this).attr('invalid', '0');
            });

            var k = 0;
            $("#divCustomAddress").find(".speacialchars[invalid=1]").each(function (e) {
                k += 1;
            });

            if (k > 0) {
                alert('Field name or Display name must start with alphabet.');
                return false;
            }

            var chkflat = $("#<%= chkflat.ClientID %>").checked();
            var chkbuilding = $("#<%= chkbuilding.ClientID %>").checked();
            var chkroad = $("#<%= chkroad.ClientID %>").checked();
            var chkcity = $("#<%= chkcity.ClientID %>").checked();
            var chkpincode = $("#<%= chkpincode.ClientID %>").checked();
            var chkstate = $("#<%= chkstate.ClientID %>").checked();
            var chkcountry = $("#<%= chkcountry.ClientID %>").checked();

            if (chkflat) {
                if ($("#<%= txtflat.ClientID %>").val() == "") {
                    alert('Please enter Flat Number.');
                    return false;
                }
            }

            if (chkbuilding) {
                if ($("#<%= txtbuilding.ClientID %>").val() == "") {
                    alert('Please enter Building.');
                    return false;
                }
            }

            if (chkroad) {
                if ($("#<%= txtroad.ClientID %>").val() == "") {
                    alert('Please enter Road.');
                    return false;
                }
            }

            if (chkcity) {
                if ($("#<%= txtcity.ClientID %>").val() == "") {
                    alert('Please enter City');
                    return false;
                }
            }

            if (chkpincode) {
                if ($("#<%= txtpincode.ClientID %>").val() == "") {
                    alert('Please enter Pincode.');
                    return false;
                }
            }

            if (chkstate) {
                if ($("#<%= txtstate.ClientID %>").val() == "") {
                    alert('Please enter State.');
                    return false;
                }
            }

            if (chkcountry) {
                if ($("#<%= txtcountry.ClientID %>").val() == "") {
                    alert('Please enter Country.');
                    return false;
                }
            }

            if (!chkflat && !chkbuilding && !chkroad && !chkcity && !chkpincode && !chkstate && !chkcountry)
                return false;

            var validData = 0;

            $("#divCustomAddress").find(".speacialchars").each(function (e) {
                if ($(this).attr('invalid') == 1) {
                    validData = 1;
                }
            });

            if (validData == 1) {
                alert('Invalid field or display names.');
                return false;
            }

            $("#divCustomAddress").HideModal();

        }
        else if (mode == "batchfield") {
            var batchdata = "";
            var validData = 0;

            $("#divBatchFields").find(".speacialchars").each(function (e) {
                if ($(this).attr('invalid') == 1) {
                    validData = 1;
                }
            });

            if (validData == 1) {
                alert('Field name or Display name must start with alphabet..');
                return false;
            }


            $("#divBatchFields").find(".speacialchars[mode='d']").each(function (e) {
                var fldname = $(this).closest("td").next("td").find(".speacialchars[mode='f']").val();
                if (fldname != "") {
                    batchdata = batchdata + $(this).val() + '|' + fldname + ',';
                }
            });

            if (batchdata == "")
                return false;

            $("#<%= hdnBatchData.ClientID %>").val(batchdata);

            $("#divBatchFields").HideModal();
        }
}

function ChangeText(ctlTxt) {
    var txt = $(ctlTxt).val().RemoveSpecialChars();
    $(ctlTxt).attr('invalid', 0);
    if (txt.length > 0) {
        var firstcharDisp = txt.charCodeAt(0);
        if (!((firstcharDisp >= 65 && firstcharDisp <= 90) || (firstcharDisp >= 97 && firstcharDisp <= 122))) {
            $(ctlTxt).attr('invalid', 1);
            $(".speacialchars").each(function (e) {
                $(this).attr('invalid', '1');
            });
            alert('Prefix must start with alphabet.');
            return false;
        }
    }
    $(ctlTxt).val(txt);

    if (txt != "") {

        $("#divCustomAddress").find(".speacialchars").each(function (e) {
            $(this).val('')
        });

        $("#<%= txtflat.ClientID %>").val(txt.RemoveSpecialChars(true).toLowerCase() + "_flat");
        $("#<%= txtflatD.ClientID %>").val(txt + " Flat");

        $("#<%= txtbuilding.ClientID %>").val(txt.RemoveSpecialChars(true).toLowerCase() + "_building");
        $("#<%= txtbuildingD.ClientID %>").val(txt + " Building");

        $("#<%= txtroad.ClientID %>").val(txt.RemoveSpecialChars(true).toLowerCase() + "_road");
        $("#<%= txtroadD.ClientID %>").val(txt + " Road");

        $("#<%= txtcity.ClientID %>").val(txt.RemoveSpecialChars(true).toLowerCase() + "_city");
        $("#<%= txtcityD.ClientID %>").val(txt + " City");

        $("#<%= txtpincode.ClientID %>").val(txt.RemoveSpecialChars(true).toLowerCase() + "_pincode");
        $("#<%= txtpincodeD.ClientID %>").val(txt + " Pincode");

        $("#<%= txtstate.ClientID %>").val(txt.RemoveSpecialChars(true).toLowerCase() + "_state");
        $("#<%= txtstateD.ClientID %>").val(txt + " State");

        $("#<%= txtcountry.ClientID %>").val(txt.RemoveSpecialChars(true).toLowerCase() + "_country");
        $("#<%= txtcountryD.ClientID %>").val(txt + " Country");
    }
    else {
        $("#<%= txtflat.ClientID %>").val("flat");
        $("#<%= txtflatD.ClientID %>").val("Flat");

        $("#<%= txtbuilding.ClientID %>").val("building");
        $("#<%= txtbuildingD.ClientID %>").val("Building");

        $("#<%= txtroad.ClientID %>").val("road");
        $("#<%= txtroadD.ClientID %>").val("Road");

        $("#<%= txtcity.ClientID %>").val("city");
        $("#<%= txtcityD.ClientID %>").val("City");

        $("#<%= txtpincode.ClientID %>").val("pincode");
        $("#<%= txtpincodeD.ClientID %>").val("Pincode");

        $("#<%= txtstate.ClientID %>").val("state");
        $("#<%= txtstateD.ClientID %>").val("State");

        $("#<%= txtcountry.ClientID %>").val("country");
        $("#<%= txtcountryD.ClientID %>").val("Country");
    }
    return;
}


function OpenWindow(mode) {
    var text = "";
    if (mode == "A")
        text = "Add Field Info"
    else if (mode == "E")
        text = "Edit Field Info";
    else if (mode == "D")
        text = "Delete";
    else if (mode == "CP")
        text = "Add Field Info";
    else if (mode == "R")
        text = "Entity Relation";
    else {
        mode = "V";
        text = "View Field Info";
    }
    var newurl = "";

    if (mode == "A") {
        if ($.QS("EntityID") == "") {
            alert('Please select table to add field');
            return false;
        }
        $("#divFieldMenuCtr").ShowModal({ autoClose: true });
        $("#tileGrid").Tile({ Anim: true });
    }
    else if (mode == "E" || mode == "V" || mode == "D" || mode == "CP") {
        var id = RadGrid_GetDataKey("<%= dgData.ClientID %>");
        if (id == null)
            return false;

        var issys = RadGrid_GetSelectedCellText("<%= dgData.ClientID %>", 11);

        if (mode != "V" && issys == "True") {
            alert('Can not edit delete or copy of this field.');
            return false;
        }
        if (mode == "D")
            return confirm('Do you wish to delete this record?');

        var ftype = RadGrid_GetSelectedCellText("<%= dgData.ClientID %>", 3);
        show = true;
        url = "FieldInfo_Add.aspx?PageType=" + mode + "&FieldType=" + ftype + "&ID=" + id + "&ModuleID=" + $.QS("ModuleID") + "&EntityID=" + $.QS("EntityID") + "&IsSystemEntity=" + $.QS("IsSystemEntity");
        toggleDetailsForm(show);
    }
    return false;
}



function toggleDetailsForm(show) {
    var ifr = $("#ifrAddPage");
    if (show) {
        ifr.node(0).attr("src", url);
        $("#divGrid").css("opacity", 0.3);
        if (ifr.node(0)[0].contentWindow && ifr.node(0)[0].contentWindow.document)
            $(ifr.node(0)[0].contentWindow.document.body).setVisible(false);
        ifr.stop(true, true).css("top", $("#spnLocate").offset().top).show().animate({ top: 0 }, 250, "easeInSine", function () { $("#divGrid").hide(); })
    }
    else {
        $("#divGrid").show();
        $("#divGrid").css("opacity", "");

        ifr.stop(true, true).animate({ top: ifr.outerHeight() }, 250, "easeInSine", function () { ifr.hide(); })
    }
}


function ShowBatchFieldLengthBox(sender, args) {
    var a = $find("<%= rcbBatchFieldTypes.ClientID %>").get_selectedItem().get_value();
    if (a == "Text" || a == "Multiline") {
        $("#<%= ntxtBatchFieldLength.ClientID %>").show();
            $("#spnLength").show();
        }
        else {
            $("#<%= ntxtBatchFieldLength.ClientID %>").hide();
            $("#spnLength").hide();
        }
    }

    </script>
</asp:Content>


