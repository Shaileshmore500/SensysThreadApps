<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="Reports_View.aspx.cs" Inherits="SensysErp.Meta.Reports_View" ValidateRequest="false" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

    <script type="text/javascript">

        //window.title="title"
        document.documentElement.style.overflowX = "hidden"
        document.documentElement.style.overflowY = "auto"

    </script>
    <style>
        html, body, form
        {
            height: 100%;
        }

        #spnIcon
        {
            font-family: fontawesome;
            display: block;
            line-height: 20px;
            font-size: 20px;
            font-weight: normal;
        }

        .divIcons
        {
            width: 550px;
            height: 510px;
            top: 150px;
            overflow: hidden;
            background-color: #FFF;
            border: solid 3px #666;
            border-radius: 8px;
            box-shadow: 2px 2px 5px #525252;
            padding: 20px;
            font-family: nunitoregular;
            font-size: 12px;
        }

        #spnIcon
        {
            height: 25px;
            width: 30px;
            color: #000;
            text-align: center;
            text-decoration: none;
            border: solid 1px transparent;
        }

            #spnIcon:hover
            {
                border: solid 1px red;
            }



        .spnIcon1
        {
            font-family: fontawesome;
            font-size: 14px;
            color: #F19C06;
            padding-right: 2px;
        }

        .rtSelected .rtIn .spnIcon1
        {
            color: #F1063E;
        }

        .DarkTheme .div-form
        {
            color: black;
        }

        #tvCtrEnt, #divModules
        {
            position: absolute;
            display: none;
            width: 224px;
            height: 295px;
            border: solid 2px #4D4C4C;
            border-radius: 5px;
            z-index: 10;
            box-shadow: 2px 2px 5px #555;
            overflow-y: auto;
            left: 20%;
            background-color: #fff;
        }

        .DarkTheme #tvCtrEnt, .DarkTheme #divEntities, .DarkTheme #divModules
        {
            background-color: #4D4D4D;
            border: solid 2px #D6D6D6;
            border-radius: 5px;
        }

        .selectrpt
        {
            font-size: 12px;
            font-family: nunitoregular;
            padding: 3px 0px;
            display: inline-block;
            color: #7E0505 !important;
        }

            .selectrpt:hover
            {
                color: red !important;
            }
    </style>

    <style>
        #divPopup
        {
            display: none;
            position: fixed;
            left: 805px;
            z-index: 3500;
            border: solid 3px #666;
            border-radius: 8px;
            box-shadow: 2px 2px 5px #525252;
            padding: 20px;
            font-family: nunitoregular;
            font-size: 12px;
            width: 320px;
        }


            #divPopup #tdData
            {
                width: 100%;
                border: 1px solid gray;
            }

                #divPopup #tdData tr
                {
                    border: 1px solid gray;
                }

        #divdata
        {
            width: 100%;
            height: 70px;
            overflow-y: auto;
            margin-top: 10px;
        }

        #divButton
        {
            float: right;
            width: 70px;
        }

        .MySearchbtn
        {
            width: 100px;
            margin-left: 10px;
            height: 35px;
            display: inline-block;
            text-align: center;
            border-radius: 5px;
            border: 1px solid gray;
            font-size: 20px;
            vertical-align: middle;
            color: white;
            /* -webkit-transition: font-size .3s ease;
	        -moz-transition: font-size .3s ease;
	        -ms-transition: font-size .3s ease;
	        -o-transition: font-size .3s ease;
	        transition: font-size .3s ease;*/
            background: #b4e391; /* Old browsers */
            background: -moz-linear-gradient(top, #b4e391 6%, #2fa315 89%, #2fa315 99%, #2fa315 99%, #b4e391 100%); /* FF3.6-15 */
            background: -webkit-linear-gradient(top, #b4e391 6%,#2fa315 89%,#2fa315 99%,#2fa315 99%,#b4e391 100%); /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(to bottom, #b4e391 6%,#2fa315 89%,#2fa315 99%,#2fa315 99%,#b4e391 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b4e391', endColorstr='#b4e391',GradientType=0 ); /* IE6-9 */
        }

            .MySearchbtn:hover
            {
                background: #2fa315; /* Old browsers */
                background: -moz-linear-gradient(top, #2fa315 19%, #b4e391 100%); /* FF3.6-15 */
                background: -webkit-linear-gradient(top, #2fa315 19%,#b4e391 100%); /* Chrome10-25,Safari5.1-6 */
                background: linear-gradient(to bottom, #2fa315 19%,#b4e391 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2fa315', endColorstr='#b4e391',GradientType=0 ); /* IE6-9 */
                cursor: pointer;
                /*font-size:22px ;*/
            }

            .MySearchbtn:before
            {
                content: "\f002";
                font-family: FontAwesome;
                padding-right: 10px;
                color: #4e8c0b;
            }

            .txtReportName
            {
                border-radius: 5px;
                margin-left: 10px !important;
                font-size: 16px !important;
            }

            /*.txtReportName:hover
            {
                box-shadow: 2px 2px 10px gray;
            }*/

            .ReportheadingDetails
            {
                font-size: 13px;
                text-indent: 15px;
                color: #51585f;
                margin-left: 10px;
                margin-bottom: 5px;
                text-transform: capitalize;
                display: block;
                width: 89%;
                border: 1px solid;
                border-radius: 8px;
                padding: 7px;
                background-color: #edf2f5;
            }
        ._hdn
        {
            display:none;
        }
    </style>


</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" UpdateMode="Conditional" Style="height: 100%" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />

            <asp:Panel ID="divIcons" runat="server" CssClass="formSettings divIcons" Style="display: none;">
                <iframe frameborder="0" src="Icons.html" style="height: 100%; width: 100%"></iframe>
            </asp:Panel>

            <div id="divEntities" class="div-form" style="display: none; width: 450px; padding: 5px; position: absolute; z-index: 3500; top: 100px; left: 409px; border-radius: 10px; border: 2px solid;">
                <table class="table-form">
                    <tr>
                        <td class="td-value" colspan="2">
                            <span>Select Entity:</span>
                            <asp:TextBox ID="txtEntity" ReadOnly="true" CssClass="txt" runat="server"></asp:TextBox>
                            <div id="tvCtrEnt">
                                <telerik:RadTreeView ID="tvEntity" OnClientNodeClicked="selectEntity" runat="server">
                                </telerik:RadTreeView>
                            </div>
                            <asp:HiddenField ID="hdnEntityId" runat="server" />
                        </td>

                    </tr>
                    <tr>
                        <td class="td-value" colspan="2">
                            <asp:RadioButton ID="rbnNew" GroupName="report" onchange="return ToggleTemplates();" Checked="true" Text="New Report" runat="server" />
                            <div id="divTemplate" style="display: inline-block">
                                <span style="padding-left: 23px">Select Template:</span>
                                <div style="display: inline-block">
                                    <asp:DropDownList ID="ddlTemplates" runat="server"></asp:DropDownList>
                                </div>
                            </div>
                        </td>

                    </tr>
                    <tr>
                        <td class="td-value" colspan="2">
                            <asp:RadioButton ID="rbnExisting" Text="Existing Report" onchange="return ToggleTemplates();" runat="server" GroupName="report" />

                            <telerik:RadComboBox ID="cboRelatedReports" runat="server" OnClientItemsRequesting="OnClientItemsRequesting" EnableLoadOnDemand="true" Width="200px">
                                <WebServiceSettings Method="GetRelatedReport" Path="Reports_View.aspx" />
                            </telerik:RadComboBox>
                        </td>
                    </tr>
                    <tr>
                        <td class="td-value" colspan="2" style="float: right">
                            <asp:LinkButton ID="btnEOk" Style="margin-left: 200px" runat="server" CssClass="cmdBtn cmdSave" Text="OK" OnClientClick="return OpenAddWindow();"></asp:LinkButton>
                            <asp:LinkButton ID="btnECancel" CssClass="cmdBtn cmdClose" runat="server" Text="Cancel" OnClientClick="$('#divEntities').HideModal(); return false;"></asp:LinkButton>
                        </td>
                    </tr>
                </table>
            </div>

            <div class="div-form" id="pnlFolder" style="display: none; width: 360px; padding: 5px;">
                <fieldset>
                    <legend>Choose Action</legend>
                    <table class="table-form">
                        <tr>
                            <td class="td-label">
                                <span class="lbl">Enter Name</span>
                            </td>
                            <td class="td-value">
                                <telerik:RadTextBox EmptyMessage="Enter Name" runat="server"
                                    ID="txtFolderName">
                                </telerik:RadTextBox>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-label">
                                <span class="lbl">Enter Description</span>
                            </td>
                            <td class="td-value">
                                <telerik:RadTextBox EmptyMessage="Enter Description" TextMode="MultiLine" Width="200px" Height="75px"
                                    SkinID="Multiline" runat="server" ID="txtFolderDesc">
                                </telerik:RadTextBox>
                            </td>
                        </tr>
                        <tr>

                            <td class="td-label" colspan="2">
                                <span style="width: 109px;">Choose Icon : </span><a href="javascript:void(0)"
                                    onclick="showIconList()" style="vertical-align: middle; display: inline-block"
                                    id="spnIcon">&#xf040;</a>
                                <asp:HiddenField runat="server" ID="hdnCode" Value="&#xf040;" />
                            </td>
                        </tr>
                        <tr class="devlop">
                            <td class="td-label">
                                <span>Select Application</span>
                            </td>
                            <td>
                                <asp:DropDownList ID="ddlApps" runat="server">
                                </asp:DropDownList>
                            </td>
                        </tr>
                        <tr class="devlop">
                            <td class="td-label">
                                <span>Select Module</span>
                            </td>
                            <td>
                                <asp:TextBox ID="txtModule" onclick="showModules(this)" runat="server" ReadOnly="true"></asp:TextBox>
                                <div id="divModules">
                                    <telerik:RadTreeView ID="tvModule" OnClientNodeClicked="selectModule" runat="server">
                                    </telerik:RadTreeView>
                                </div>
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
                    </table>
                    <div>
                        <asp:LinkButton Style="width: 55px" CssClass="cmdBtn cmdSave" ID="btnFolder" runat="server" OnClientClick="return SaveFolder()" Text="Save"></asp:LinkButton>
                        <asp:LinkButton Style="width: 55px" CssClass="cmdBtn cmdClose" ID="btnCancelFolder" runat="server" OnClientClick="$('#pnlFolder').HideModal();return false;"
                            Text="Cancel"></asp:LinkButton>
                    </div>
                </fieldset>
            </div>

            <telerik:RadSplitter ID="rSptrConfig" runat="server" Height="97%" Width="98%" BorderWidth="0">
                <telerik:RadPane ID="configNvgPanel" Width="240px" runat="server">

                    <telerik:RadTreeView ID="rtvFolders" runat="server" DataValueField="ReportFolder_Pid" OnClientContextMenuShowing="MenuShowing" OnClientNodeClicking="rtv_NodeClicking" OnClientNodeClicked="rtv_NodeClick" OnClientContextMenuItemClicking="clientMenuClicking"
                        OnClientMouseOut="onTreeViewMouseOut" OnClientMouseOver="onTreeViewMouseOver">
                        <ContextMenus>
                            <telerik:RadTreeViewContextMenu ID="ctxMenu" runat="server">
                                <Items>
                                    <telerik:RadMenuItem Value="add" Text="Add Sub Folder">
                                    </telerik:RadMenuItem>
                                    <telerik:RadMenuItem Value="edit" Text="Edit Folder">
                                    </telerik:RadMenuItem>
                                    <telerik:RadMenuItem Value="delete" Text="Delete Folder">
                                    </telerik:RadMenuItem>
                                     <telerik:RadMenuItem IsSeparator="true">
                                    </telerik:RadMenuItem>                                   
                                </Items>
                            </telerik:RadTreeViewContextMenu>
                        </ContextMenus>
                    </telerik:RadTreeView>
                </telerik:RadPane>
                <telerik:RadSplitBar ID="spliterBar" runat="server" CollapseMode="Forward">
                </telerik:RadSplitBar>
                <telerik:RadPane ID="ConfigViewPanel" runat="server" Width="100%">
                    <br />
                    <asp:UpdatePanel ID="pnlGrid" UpdateMode="Conditional" runat="server">
                        <ContentTemplate>
                            <asp:Button ID="btnRefresh" runat="server" Style="display: none" Text="Search" OnClick="btnRefresh_Click" />
                            <asp:Label ID="lblTitle" CssClass="mainHeading" Style="font-size: 26px; margin-left: 15px; text-transform: capitalize" runat="server"></asp:Label>
                            <asp:Label ID="lblDesc" CssClass="ReportheadingDetails" Visible="false" runat="server"></asp:Label>
                            <div id="divReportFilter" runat="server">
                                <%-- <asp:Label ID="lblReportName" runat="server" Text="Report Name" style="font-size: 13px;font-weight: bold;margin-left: 20px;" ></asp:Label>--%>
                                <%--<asp:TextBox ID="txtReportName" runat="server" Width="250px" ></asp:TextBox>--%>
                                <telerik:RadTextBox ID="txtReportName" CssClass="txtReportName" runat="server" EmptyMessage="Search Report..." Width="80%" Height="40px"></telerik:RadTextBox>

                                <a id="btnSearch" class="MySearchbtn" onclick="SearchReport();">Search</a>
                                <asp:Button ID="btnReportSearch" runat="server" Style="display: none" Text="Search" OnClick="btnReportSearch_Click" />
                            </div>

                            <telerik:RadGrid ID="dgData" Style="margin-left: 15px; margin-top: 10px;" Visible="false" SkinID="NoScroll" runat="server" AllowPaging="False" AllowSorting="True"
                                AutoGenerateColumns="False" GridLines="None" GroupingEnabled="False"
                                Skin="Vista" Width="95%" OnNeedDataSource="dgData_NeedDataSource"
                                AllowFilteringByColumn="false" AllowMultiRowSelection="true" OnRowDrop="dgData_RowDrop">
                                <PagerStyle Mode="NextPrevAndNumeric" PageButtonCount="5" PagerTextFormat="Change page: {4} &amp;nbsp;({0}/{1})&amp;nbsp;&amp;nbsp;Total records : {5}" />
                                <MasterTableView ClientDataKeyNames="Report_Pid,Entity_fid" CommandItemDisplay="Bottom"
                                    TableLayout="Fixed">
                                    <RowIndicatorColumn Visible="false">
                                        <HeaderStyle Width="20px" />
                                    </RowIndicatorColumn>
                                    <ExpandCollapseColumn>
                                        <HeaderStyle Width="20px" />
                                    </ExpandCollapseColumn>
                                    <Columns>

                                        <telerik:GridClientSelectColumn UniqueName="SelectColumn">
                                            <HeaderStyle Width="20px" />
                                        </telerik:GridClientSelectColumn>

                                        <telerik:GridDragDropColumn HeaderStyle-Width="20px">
                                        </telerik:GridDragDropColumn>

                                        <telerik:GridTemplateColumn UniqueName="unSelect" Visible="false">
                                        <ItemTemplate><a href="javascript:void(0)" class='selectrpt' pid='<%#Eval("Report_Pid") %>' onclick="selectReport(this)"><%#Eval("ReportName") %></a></ItemTemplate>
                                        </telerik:GridTemplateColumn>

                                        <telerik:GridTemplateColumn DataField="ReportName" HeaderText="Report Name" UniqueName="unReportName">
                                            <HeaderStyle Width="30%" />
                                            <ItemTemplate><span class='<%# ErpModel.Globals.AppManager.IsCurrentOwnerItem(Container.DataItem)?"DevMode":"" %>'><%#Eval("ReportName") %></span></ItemTemplate>
                                        </telerik:GridTemplateColumn>

                                        <telerik:GridBoundColumn DataField="ReportDescription" HeaderText="Report Description" UniqueName="unReportDescription">
                                        </telerik:GridBoundColumn>
                                        <telerik:GridTemplateColumn HeaderText="Folder Path" Display="false" UniqueName="folderpath">
                                           
                                            <ItemTemplate><asp:Label ID="lblFolderPath" runat="server" Text='<%# GetFolderName(HelperLib.Conversion.C.Str(Eval("ReportFolder_fid"))) %>'></asp:Label></ItemTemplate>
                                        </telerik:GridTemplateColumn>
                                        <telerik:GridBoundColumn DataField="Report_Pid" HeaderText="Report_Pid" UniqueName="Report_Pid" Display="false">
                                        </telerik:GridBoundColumn>
                                        <telerik:GridBoundColumn DataField="Reference_ID" HeaderText="Reference_ID" UniqueName="Reference_ID" Display="false">
                                        </telerik:GridBoundColumn>
                                        <%--<telerik:GridBoundColumn DataField="fieldtype" HeaderText="Field Type" UniqueName="unFType">
                                    </telerik:GridBoundColumn>
                                    <telerik:GridBoundColumn DataField="DisplayName" HeaderText="Display Name" UniqueName="unDisplayName">
                                    </telerik:GridBoundColumn>--%>
                                    </Columns>
                                    <CommandItemTemplate>
                                        <telerik:RadToolBar ID="RadToolBar1" runat="server" Skin="Vista" Width="100%" OnButtonClick="RadToolBar1_ButtonClick"
                                            OnClientButtonClicking="onToolBarClientButtonClicking">
                                            <CollapseAnimation Duration="200" Type="OutQuint" />
                                            <Items>
                                                <telerik:RadToolBarButton CommandName="A" Visible='<%# AllowDataEntry("ADD") %>' ImageUrl="~/images/AddRecord.gif"
                                                    Text="Add">
                                                </telerik:RadToolBarButton>
                                                <telerik:RadToolBarButton CommandName="E" Visible='<%# AllowDataEntry("EDIT") %>'
                                                    ImageUrl="~/images/Edit.gif" Text="Edit">
                                                </telerik:RadToolBarButton>
                                                <telerik:RadToolBarButton CommandName="V" Visible='<%#  Erp.Base.Security.ACL.IsAuthorised(Erp.Base.Security.Permission.View_SystemConfiguration) %>'
                                                    ImageUrl="~/images/Icon.gif" Text="View">
                                                </telerik:RadToolBarButton>
                                                <telerik:RadToolBarButton CommandName="R"
                                                    ImageUrl="~/images/report.png" Text="Generate Report">
                                                </telerik:RadToolBarButton>
                                                <telerik:RadToolBarButton CommandName="D" Visible='<%# AllowDataEntry("DELETE") %>'
                                                    ImageUrl="~/images/delete.gif" Text="Delete">
                                                </telerik:RadToolBarButton>

                                            </Items>
                                        </telerik:RadToolBar>
                                    </CommandItemTemplate>
                                </MasterTableView>
                                <ClientSettings AllowGroupExpandCollapse="False" AllowKeyboardNavigation="True" AllowRowsDragDrop="True">
                                    <Selecting AllowRowSelect="True" EnableDragToSelectRows="false" />
                                    <Scrolling AllowScroll="false" />
                                    <Resizing AllowColumnResize="True" />
                                    <ClientEvents OnRowDragging="rowDragging" OnRowDropping="ClientRowDropping" />
                                </ClientSettings>
                            </telerik:RadGrid>

                        </ContentTemplate>
                    </asp:UpdatePanel>
                </telerik:RadPane>
            </telerik:RadSplitter>
            </table>
            <asp:HiddenField ID="hdnTreeSourceNodeValue" runat="server" />
            <asp:HiddenField ID="hdnTreeDestinationNodeValue" runat="server" />
            <asp:HiddenField ID="hdnIsPersonal" runat="server" />
            <div id="divPopup">
                <span style="font-size: 13px; font-weight: bold;">Following Report exists do you want to overwrite?</span>
                <div id="divdata">
                    <asp:Literal ID="litAlert" runat="server"></asp:Literal>
                </div>
                <div id="divButton">
                    <asp:Button ID="btnYes" runat="server" Text="Yes" OnClientClick="HidePopup();" OnClick="btnYes_Click" />
                    <asp:Button ID="btnNo" runat="server" Text="No" OnClientClick="HidePopup();" OnClick="btnNo_Click" />
                </div>
            </div>
        </ContentTemplate>
    </asp:UpdatePanel>
    <style>
        .RadSplitter_Default,
        .RadSplitter_Default .rspPane
        {
            border-color: transparent !important;
        }
    </style>
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

        $(document).on("click", function () {  });
        $("#divModules").on("click", function (e) { e.stopPropagation(); });
        if($.QS("m")!="f")
            $("#<%=rtvFolders.ClientID%>").find(".rtUL").each(function(){
                if($(this).parent().hasClass("RadTreeView"))
                    return true;
                $(this).sortable({               
                update:function(e,ui){
                    var li=ui.item.closest("ul").children("li");
                    var ids="";
                    li.each(function(){
                        ids+=$(this).children(":first").children(".rtIn").children("._hdn").text()+",";
                    });
                    var hsh={Type:"ReorderFolder",Ids:ids};
                    PageMethods.ExecuteCommand("ReorderFolder", hsh, function(){}, function(){});
                }
            });});

        function OnClientReOrder(id,pids){
            if($find("<%=rtvFolders.ClientID%>").findNodeByValue("search").get_selected())
                return;
            var hsh={Type:"ReorderReport",Ids:pids};
            PageMethods.ExecuteCommand("ReorderReport", hsh, function(){}, function(){});
            return false;
        }


        function pageLoad() {
            $("#<%=txtEntity.ClientID %>").on("focus", function (e) { toggleTree(e.target); e.stopPropagation(); })
            
        }

        $(document).click(function (e) {
            window.asd = e;
            if ($("#tvCtrEnt").isVisible() && !$(e.srcElement).closest("#tvCtrEnt").exists() && (!$(e.srcElement).hasClass("txt"))) {
                $("#tvCtrEnt").hide();
            }
        });
        

        function onToolBarClientButtonClicking(sender, args) {
            var mode = args.get_item().get_commandName();
            if (mode == "C") {
                args.set_cancel(true);
            }
            else
                return args.set_cancel(!OpenWindow(mode));
        }
        function toggleTree(txt) {
            $(txt).after($(txt).next().show());
        }
        function selectEntity(sender, args) {
            var t = $("#<%=txtEntity.ClientID %>");
            var n = args.get_node();
            if (n.get_level() < 2 && n.get_value() != "None")
                return;
            if (n.get_value() == "None") {
                t.val("");
                t.removeAttr("entityid");
            }
            else {
                t.val(n.get_text());
                t.attr("entityid", n.get_value());
                $("#<%= hdnEntityId.ClientID %>").val(n.get_value());
            }
            $("#tvCtrEnt").hide();
        }
        function OpenWindow(mode) {
            var text = "";
            if (mode == "A")
                text = "Add Report"
            else if (mode == "E")
                text = "Edit Report";
            else if (mode == "D")
                text = "Delete";
            else if (mode == "R")
                text = "View Report";
            else {
                mode = "V";
                text = "View Report";
            }
            var newurl = "";

            var nodeValue ="";

            var tv=$find("<%= rtvFolders.ClientID %>");
            if(tv !=null)
                nodeValue=tv.get_selectedNode().get_value();
            else 
                nodeValue=$.QS("fid");
            if (mode == "A") {
                
                if(nodeValue == "template")
                    OpenAddWindow();
                else{
                    var t = $("#<%=txtEntity.ClientID %>");
                    t.val('');
                    t.attr("entityid", '');
                    $("#<%= hdnEntityId.ClientID %>").val('');
                    $("#<%= ddlTemplates.ClientID %>").val('');
                    $("#divEntities").ShowModal();
                }
            }
            else if (mode == "E" || mode == "V" || mode == "D") {
               
                var id = RadGrid_GetDataKey("<%= dgData.ClientID %>");
                var eid = RadGrid_MultipleDataKey("<%= dgData.ClientID %>", "Entity_fid");
                if (id == null)
                    return false;
                if (mode == "D")
                    return confirm('Do you wish to delete this record?');
                window.open("ReportDesigner.aspx?PageType=" + mode + "&ID=" + id + "&EID=" + eid + "&FID=" + $.defaultVal( $.QS("folder"), nodeValue)+ "&tag="+($.defaultVal( $.QS("tag"),  $.QS("ftag"))));
            }
            else if (mode == "R") {
                var id = RadGrid_GetDataKey("<%= dgData.ClientID %>");
                    if (id == null)
                        return false;
                    window.open("../Main/Report_viewer.aspx?_ID=" + id + "&_ns=1&_lu=1");
                }

        return false;
    }

    function OpenAddWindow() {
        var tv=$find("<%= rtvFolders.ClientID %>");
        var nodeValue = ( tv==null?$.QS("fid"):tv.get_selectedNode().get_value());

        if(nodeValue == "template")
        {
            window.open("ReportDesigner.aspx?PageType=A&EID=tbl_CORE_Company&tag="+($.defaultVal( $.QS("tag"),  $.QS("ftag")))+"&FID=" +  $.defaultVal( $.QS("folder"), nodeValue));
        }
        else{
            var newRpt = $('#<%= rbnNew.ClientID %>').checked();
            var ExistRpt = $('#<%= rbnExisting.ClientID %>').checked();
            var templateID = $('#<%= ddlTemplates.ClientID %>').val();
            var rid = "";
            if (ExistRpt) {
                rid = $.defaultVal($find('<%= cboRelatedReports.ClientID %>').get_value(), "");
                if (rid == "") {
                    alert("No report to display,please select new report ");
                    return false;
                }
            }
            var eid = $('#<%= hdnEntityId.ClientID %>').val();
            $("#divEntities").HideModal();
            if (newRpt)
                window.open("ReportDesigner.aspx?PageType=A&EID=" + eid + "&tag="+($.defaultVal( $.QS("tag"),  $.QS("ftag")))+"&FID=" +  $.defaultVal( $.QS("folder"), nodeValue)+"&TID="+templateID);
            else
                window.open("ReportDesigner.aspx?PageType=A&Mode=Existing&RID=" + rid + "&EID=" + eid + "&tag="+($.defaultVal( $.QS("tag"),  $.QS("ftag")))+"&FID=" +  $.defaultVal( $.QS("folder"), nodeValue));
        }
        return false;
    }

        

    //radtreeview

    function MenuShowing(sender, args) {
        var cntr = args.get_node().get_value();       
        var contextMenu = $find("<%= ctxMenu.ClientID %>");
        //if (cntr == "unfiled" || cntr == "template") {
        //    contextMenu.findItemByValue("add").set_visible(true);
        //    contextMenu.findItemByValue("edit").set_visible(false);
        //    contextMenu.findItemByValue("delete").set_visible(false);
        //}
        //else 
        if (cntr == "public" || cntr == "private" || cntr == "global" || cntr == "unfiled") {
            contextMenu.findItemByValue("add").set_visible(true);
            contextMenu.findItemByValue("edit").set_visible(false);
            contextMenu.findItemByValue("delete").set_visible(false);
           
        }
        else if (cntr == "search")
        {
            contextMenu.findItemByValue("add").set_visible(false);
            contextMenu.findItemByValue("edit").set_visible(false);
            contextMenu.findItemByValue("delete").set_visible(false);
        }
        else {
            contextMenu.findItemByValue("add").set_visible(true);
            contextMenu.findItemByValue("edit").set_visible(true);
            contextMenu.findItemByValue("delete").set_visible(true);
        }

    }


    var currFolderMode = "";
    var currFolderID = 0;
    var currFolderParentID = 0;
    var currFolderNode = "";

    function clientMenuClicking(sender, args) {

        var menuItem = args.get_menuItem();
        var treeNode = args.get_node();
        $("#pnlFolder").find(".devlop").hide();
        menuItem.get_menu().hide();
        var treeView = args;
        var radtree = $find("<%= rtvFolders.ClientID %>");
        var txtName = $find("<%= txtFolderName.ClientID %>");
        var txtDesc = $find("<%= txtFolderDesc.ClientID %>");
        switch (menuItem.get_value()) {
            case "add":
                SelectedNode = args.get_node();
                var personal = SelectedNode.get_attributes().getAttribute("personal");
                var appid = SelectedNode.get_attributes().getAttribute("Application_fid");
                var moduleid = SelectedNode.get_attributes().getAttribute("Module_Fid");
                var ispublic = SelectedNode.get_attributes().getAttribute("ispublic");
                var global = SelectedNode.get_attributes().getAttribute("isglobal");
                var isunfiled = SelectedNode.get_attributes().getAttribute("unfiled");
               
                $("#pnlFolder").attr('public', ispublic);
                $("#pnlFolder").attr('global', global);
                $("#pnlFolder").attr('unfiled', isunfiled);


                var id = SelectedNode.get_value();
                $("#pnlFolder").attr('Personal', personal);
                $("#pnlFolder").attr('ParentID', id);
                $("#pnlFolder").attr('Mode', "Add");
                $("#pnlFolder").attr('FolderID', "#GUID#");
                $("#pnlFolder").find("#spnIcon").html("&#xf07b;");
                $("#pnlFolder").attr('appid', appid);
                $("#pnlFolder").attr('moduleid', moduleid);
                $("#<%=txtModule.ClientID %>").attr("moduleid",'');
            $("#<%=ddlApps.ClientID %>").val(0);
            $("#<%=txtModule.ClientID %>").val('');
            $("#<%=txtResVersion.ClientID %>").val(0);
            var isGolbal=  SelectedNode.get_attributes().getAttribute("isglobal");
            if(isGolbal == "1" && <%= ErpModel.Globals.AppManager.InDevelopmentMode.ToString().ToLower() %>){
                 $("#pnlFolder").find(".devlop").show();
    }
           
    txtName.set_value('');
    txtDesc.set_value('');
    currFolderMode = "add";
    currFolderNode = SelectedNode;
    $("#pnlFolder").ShowModal().find("legend").html("Add Folder");;
    break;
        case "edit":
            SelectedNode = args.get_node();
            var id = SelectedNode.get_value();
            txtName.set_value(SelectedNode.get_attributes().getAttribute("name"));
            txtDesc.set_value(SelectedNode.get_attributes().getAttribute("descr"));



            $("#pnlFolder").attr('Personal', '');
            $("#pnlFolder").attr('FolderID', id);
            $("#pnlFolder").attr('ParentID', '');
            $("#pnlFolder").attr('appid', '');
            $("#pnlFolder").attr('moduleid', '');
            $("#pnlFolder").attr('Mode', "Edit");
            $("#pnlFolder").attr('public', '');
            $("#pnlFolder").attr('global', '');
            $("#pnlFolder").attr('unfiled', '');
            $("#<%=txtResVersion.ClientID %>").val($.defaultVal(SelectedNode.get_attributes().getAttribute("ResourceVersion"),0));
            var isGolbal=  SelectedNode.get_attributes().getAttribute("isglobal");
            if(isGolbal == "1"){
                if(isGolbal == "1" && <%= ErpModel.Globals.AppManager.InDevelopmentMode.ToString().ToLower() %>){
                 $("#pnlFolder").find(".devlop").show();
        }
                var edNode=  $find("<%= tvModule.ClientID %>").findNodeByValue(SelectedNode.get_attributes().getAttribute("Module_Fid"));
                if(edNode != null)
        {
                    $("#<%=txtModule.ClientID %>").attr("moduleid",edNode.get_value());
                    $("#<%=txtModule.ClientID %>").text(edNode.get_text());
                    $("#<%=txtModule.ClientID %>").val(edNode.get_text());
        }
                $("#<%=ddlApps.ClientID %>").val(SelectedNode.get_attributes().getAttribute("Application_fid")).select();
        }
        else{
                $("#<%=txtModule.ClientID %>").attr("moduleid",'');
                $("#<%=ddlApps.ClientID %>").val(0);
                $("#<%=txtModule.ClientID %>").val('');
                
        }
            currFolderMode = "edit";
            currFolderNode = SelectedNode;
            crntIcon = SelectedNode.get_attributes().getAttribute("icon");
            $("#pnlFolder").find("#spnIcon").html(SelectedNode.get_attributes().getAttribute("icon"));
            $("#pnlFolder").ShowModal().find("legend").html("Edit Folder");;
            break;
        case "delete":
            currFolderMode = "Delete";
            SelectedNode = args.get_node();
            currFolderNode = SelectedNode;
            var personal = SelectedNode.get_attributes().getAttribute("personal");
            var id = SelectedNode.get_value();
            Delete(id);
            break;

        }
    return false;
        }

        function OpenPopUp(id, guid, mode) {
        }

        function Delete(id) {
            var radtree = $find("<%= rtvFolders.ClientID %>");
            var node = currFolderNode;
            var target = node.get_value();
            if(node.get_nodes().get_count()>0)
            {
                alert("Delete child folders first ");
                return false;
            }
            else if (confirm("Are you sure, you want to delete this folder")) {
                PageMethods.ProcessDeleteAction(target, OnDeleteSuceess);
            }
            return false;
        }

        function OnDeleteSuceess(response, userContext, methodName) {
            if(response=="Success")
                DeleteFolderNode();
            else
                alert("Folder cannot be deleted, folder contain report");
        }

        function SaveFolder() {
            var folderName = $find("<%=txtFolderName.ClientID %>").get_value();
    if ((currFolderMode == "add" || currFolderMode == "edit") && folderName.Trim() == "") {
        alert("Please specify folder name.");
        return false;
    }
    var hsh = new Object();
    hsh["Mode"] = $("#pnlFolder").attr('Mode');
    hsh["@FolderID"] = $("#pnlFolder").attr('FolderID');
    hsh["@ParentID"] = $("#pnlFolder").attr('ParentID');
    hsh["@Description"] = $find("<%=txtFolderDesc.ClientID %>").get_value();
    hsh["@FolderName"] = folderName;
    hsh["@Personal"] = $("#pnlFolder").attr('Personal');
    hsh["@Public"]= $("#pnlFolder").attr('public');
    hsh["@Global"]= $("#pnlFolder").attr('global');
    hsh["@Unfiled"]= $("#pnlFolder").attr('unfiled');

    //hsh["@Templates"]= $("#pnlFolder").attr('global');
    //hsh["@Unfiled"]= $("#pnlFolder").attr('global');

    hsh["@AID"] = $.QS("AID");
    hsh["@FolderIcon"] = crntIcon;
    hsh["@moduleid"] = $.defaultVal($("#<%=txtModule.ClientID %>").attr("moduleid"),"");
    hsh["@appid"] = $("#<%=ddlApps.ClientID %>").selectedItem().val();
    
    hsh["@ResourceVersion"] =$.defaultVal($("#<%=txtResVersion.ClientID %>").val(),0);
    $("#pnlFolder").HideModal();
    currFolderMode = "";
    PageMethods.ExecuteCommand("SaveFolder", hsh, ExecuteCommandCallback, FolderCommandFailed);
    crntIcon = "&#xf07b;";
    return false;
}

function AddFolderNode(nodeText, result, desc) {
    var treeView = $find("<%= rtvFolders.ClientID %>");
    treeView.trackChanges();
    var node = new Telerik.Web.UI.RadTreeNode();
    node.set_text("<span class='_hdn'>"+result["@FolderID"]+"</span><span  class='spnIcon1'>" + result["@FolderIcon"] + "</span>" + nodeText);
    node.set_value(result["@FolderID"]);
    node.get_attributes().setAttribute("descr", desc);
    node.get_attributes().setAttribute("name", nodeText);
    node.get_attributes().setAttribute("icon", result["@FolderIcon"]);

    node.get_attributes().setAttribute("personal", result["@Personal"]);
    node.get_attributes().setAttribute("Application_fid", result["@appid"]);
    node.get_attributes().setAttribute("Module_Fid", result["@moduleid"]);
    node.get_attributes().setAttribute("ispublic", result["@Public"]);
    node.get_attributes().setAttribute("isglobal", result["@Global"]);
    node.get_attributes().setAttribute("ResourceVersion", result["@ResourceVersion"]);
    currFolderNode.get_nodes().add(node);
    currFolderNode.expand();
    treeView.commitChanges();

}

function ExecuteCommandCallback(result) {
    if (result["Mode"] == "Add") {
        var fName = $find("<%=txtFolderName.ClientID %>").get_value();
        var fDesc = $find("<%=txtFolderDesc.ClientID %>").get_value();
        AddFolderNode(fName, result, fDesc);
        return false;
    }
    else if (result["Mode"] == "Edit") {
        var fName = $find("<%=txtFolderName.ClientID %>").get_value();
        var fDesc = $find("<%=txtFolderDesc.ClientID %>").get_value();
        var treeView = $find("<%= rtvFolders.ClientID %>");
        treeView.trackChanges();
        currFolderNode.set_text("<span  class='spnIcon1'>" + result["@FolderIcon"] + "</span>" + fName);
        currFolderNode.get_attributes().setAttribute("descr", fDesc);
        currFolderNode.get_attributes().setAttribute("name", fName);
        currFolderNode.get_attributes().setAttribute("icon", result["@FolderIcon"]);

        currFolderNode.get_attributes().setAttribute("Application_fid", result["@appid"]);
        currFolderNode.get_attributes().setAttribute("Module_Fid", result["@moduleid"]);
        currFolderNode.get_attributes().setAttribute("ResourceVersion", result["@ResourceVersion"]);
        treeView.commitChanges();
        return false;
    }
    else if (result["Mode"] == "Delete") {

        DeleteFolderNode();
    }
}

function DeleteFolderNode() {
    var treeView = $find("<%= rtvFolders.ClientID %>");
    var selectedNode = currFolderNode;
    treeView.trackChanges();
    var parent = selectedNode.get_parent();
    parent.get_nodes().remove(selectedNode);
    treeView.commitChanges();
    return false;
}
function FolderCommandFailed() {
}

function showIconList() {
    $("#<%=divIcons.ClientID %>").ShowModal(4000).css("top", "1px");
}

var crntIcon = "&#xf07b;";
function selectIcon(ico) {
    $("#<%=divIcons.ClientID %>").HideModal();
    $("#spnIcon").html(ico);
    var ic = "&#x" + ico.charCodeAt(0).toString(16) + ";";
    crntIcon = ic;
}

function rtv_NodeClicking(sender, e) {
    var lvl = e.get_node().get_level()
    var val = e.get_node().get_value();
    if($.QS("m")=="f"){       
        parent.setRptLinkValue(e.get_node().get_value(),$.isEmpty(e.get_node().get_value())?"None":e.get_node().get_attributes().getAttribute("name"));
    }
   
}
        function rtv_NodeClick(sender, e) {
         
            if($.QS("m")!="f")
                $("#<%=btnRefresh.ClientID%>").click();
        }
    
//clear related entities items
function removeRelatedEntities(sender) {
    $find("<%= cboRelatedReports.ClientID %>").get_items().clear();
    return;
}

//for rending related entities
function OnClientItemsRequesting(sender, eventArgs) {
    var context = eventArgs.get_context();
    context["@EntityId"] = $('#<%= hdnEntityId.ClientID %>').val();
}

function selectModule(sender, args) {
    var t = $("#<%= txtModule.ClientID %>");
    var n = args.get_node();
    if (n.get_level() < 1 && n.get_value() != "None")
        return;
    if (n.get_value() == "None") {
        t.val("");
        t.removeAttr("moduleid");
    }
    else {
        t.val(n.get_text());
        t.attr("moduleid", n.get_value());
    }
    $("#divModules").hide();
}
//$("#<%=txtModule.ClientID %>").on("click", function (e) { showModules(e.target); e.stopPropagation(); })
        function showModules(txt) {
            $(txt).next().show();
            $(txt).next().css({ left: $(txt).position().left });
        }

        function ToggleTemplates()
        {
            var rdoNew=$("#<%= rbnNew.ClientID %>");
            if($(rdoNew).checked())
                $("#divTemplate").show();
            else
                $("#divTemplate").hide();
            return false;
        }

        function selectReport(a){
            a=$(a);
            parent.setRptLinkValue(a.attr("pid"),a.html());

        }


    </script>

    <script type="text/javascript">

       
        $("#<%=hdnTreeDestinationNodeValue.ClientID%>").val("");
        var _moveToFolder=false;
        function onTreeViewMouseOut (sender, args) {
            _moveToFolder=false;
            $("#<%=hdnTreeDestinationNodeValue.ClientID%>").val("");
        }

        function onTreeViewMouseOver  (sender, args) {
            $("#<%=hdnTreeDestinationNodeValue.ClientID%>").val(args.get_node().get_value());
            $("#<%=hdnIsPersonal.ClientID%>").val(args.get_node().get_attributes().getAttribute("personal"));  
            _moveToFolder=true;
        }

    
        function rowDragging(sender, args) {
            var tree = $find("<%=rtvFolders.ClientID%>");
            $("#<%=hdnTreeSourceNodeValue.ClientID%>").val(tree.get_selectedNodes()[0].get_value());
        }

        function ClientRowDropping(sender, args) {
            var drgRow = $(args.get_draggedItems()[0].get_element());
            var tgtRow = $(args.get_destinationHtmlElement());
            if(!_moveToFolder){
                _moveToFolder=false;
                RowDropping(sender,args);
            }
            else{
                _moveToFolder=false;
                if($("#<%=hdnTreeDestinationNodeValue.ClientID%>").val()=="")
                {
                    args.set_cancel(true);
                }
            }
        }

        function CallOverwiterAlert()
        {
            $("#divPopup").ShowModal();
        }

        function HidePopup()
        {
            $("#divPopup").HideModal();
        }

        function SearchReport()
        {
            $($find("<%=rtvFolders.ClientID%>").findNodeByValue("search").get_element()).find(".rtIn").show();
            $find("<%=rtvFolders.ClientID%>").findNodeByValue("search").set_selected(true)
            $("#<%= btnReportSearch.ClientID %>").click();
        }

    </script>
</asp:Content>


