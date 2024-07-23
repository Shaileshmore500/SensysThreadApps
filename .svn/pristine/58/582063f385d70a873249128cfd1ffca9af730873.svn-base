<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="UserProfileFields_View.aspx.cs" Inherits="SensysErp.Meta.UserProfileFields_View" %>

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
            <asp:Label ID="lblEntity" Visible="false" runat="server" CssClass="cmdPanel lblEntity"></asp:Label>
            <div>
                <span style="font-size: 9pt; margin-top: 4px; display: inline-block;" class="rtbText">Select field </span>
                <telerik:RadComboBox CheckBoxes="true" Width="250" ID="cboUserFields" runat="server">
                </telerik:RadComboBox>
                <asp:LinkButton ID="btnAdd" CssClass="cmdBtn cmdSave" runat="server" Text="Add" OnClick="btnAdd_Click"></asp:LinkButton>
            </div>
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
                            <telerik:GridTemplateColumn DataField="mandatory" HeaderText="Is Mandatory" UniqueName="mandatory"><ItemTemplate><asp:CheckBox ID="chkMandatory" runat="server" Checked='<%# HelperLib.Conversion.C.Bool(Eval("mandatory")) %>' /></ItemTemplate>
                            </telerik:GridTemplateColumn>
                            <telerik:GridBoundColumn DataField="sortorder" HeaderText="Sort Order" UniqueName="unSort">
                            </telerik:GridBoundColumn>
                        </Columns>
                        <CommandItemTemplate>
                            <telerik:RadToolBar ID="radtoolbar1" runat="server" Skin="Vista" Width="100%" OnButtonClick="RadToolBar1_ButtonClick"
                                OnClientButtonClicking="onToolBarClientButtonClicking">
                                <CollapseAnimation Duration="200" Type="OutQuint" />
                                <Items>
                                    <telerik:RadToolBarButton CommandName="CBO">
                                        <ItemTemplate>
                                        </ItemTemplate>
                                    </telerik:RadToolBarButton>
                                    <telerik:RadToolBarButton CommandName="A" ImageUrl="~/images/AddRecord.gif"
                                        Text="Save">
                                    </telerik:RadToolBarButton>
                                    <telerik:RadToolBarButton CommandName="D"
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
                <span style="display:none" class="note"><span style="font-style: italic">Note</span> : You can drag the rows to change the order of the database fields.</span><br />
            </div>
            <span style="visibility: hidden;" id="spnLocate">&nbsp;</span>

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

        }
        function onToolBarClientButtonClicking(sender, args) {
            var mode = args.get_item().get_commandName();
            if (mode == "C") {
                args.set_cancel(true);
            }
            else if (mode == "D") {
                if (!confirm("Delete record?")) {
                    args.set_cancel(true);
                    return;
                }
                var id = RadGrid_GetDataKey("<%= dgData.ClientID %>");
                if (id == null)
                    args.set_cancel(true);
                else
                    args.set_cancel(false);
            }
            else
                return args.set_cancel(false);
    }

    </script>
</asp:Content>


