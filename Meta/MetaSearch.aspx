<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="MetaSearch.aspx.cs" Inherits="SensysErp.Meta.MetaSearch" ValidateRequest="false" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>


<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />

            <table style="width: 100%">
                <tr>
                    <td>
                        <asp:Label ID="lblSearchType" runat="server" Text="Search type"></asp:Label>
                        <telerik:RadComboBox ID="rcbSearchType" runat="server" OnClientSelectedIndexChanged="CheckSearchType">
                            <Items>
                                <telerik:RadComboBoxItem Text="Normal" Value="normal" />
                                <telerik:RadComboBoxItem Text="Query" Value="query" />
                            </Items>
                        </telerik:RadComboBox>
                        <div id="divNormal" style="margin-top: 5px; display: inline;">
                            <asp:Label ID="lblSearchFilter" runat="server" Text="Filter"></asp:Label>
                            <telerik:RadComboBox ID="rcbSearchFilter" EnableCheckAllItemsCheckBox="true" CheckBoxes="true" runat="server"></telerik:RadComboBox>

                            <asp:Label ID="lblFilterType" runat="server" Text="Filter type"></asp:Label>
                            <telerik:RadComboBox ID="rcbFilterType" runat="server">
                                <Items>
                                    <telerik:RadComboBoxItem Text="Equal To" Value="equalto" />
                                    <telerik:RadComboBoxItem Text="Not Equal To" Value="notequalto" />
                                    <telerik:RadComboBoxItem Text="Contains" Value="contains" Selected="true" />
                                    <telerik:RadComboBoxItem Text="Start With" Value="startwith" />
                                    <telerik:RadComboBoxItem Text="Ends With" Value="endswith" />
                                    <telerik:RadComboBoxItem Text="Not Contains" Value="notcontains" />
                                </Items>
                            </telerik:RadComboBox>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div style="margin-top: 5px">
                           
                                    <asp:TextBox ID="txtMetaSearch"  CssClass="txtMetaSearch" runat="server" Width="80%" Height="30px"> 
                                    </asp:TextBox>
                                    <div id="tvCtrEnt">
                                        <telerik:RadTreeView ID="tvEntity" OnClientNodeClicked="selectEntity" runat="server">
                                        </telerik:RadTreeView>
                                    </div>
                                    <asp:HiddenField ID="hdnEntityID" runat="server" />
                                    <asp:HiddenField ID="hdnTablevalue" runat="server" />

                                    <asp:LinkButton ID="btnMetaSearch" runat="server" CssClass="mdl-button GreenButton searchIcon" Style="margin-left: 10px; line-height: 22px; font-size: 17px;" OnClientClick="return chkValidation(this);" OnClick="btnMetaSearch_Click"> Search</asp:LinkButton>
                              
                        </div>
                    </td>
                </tr>
            </table>



            <div style="width: 92%; margin-top: 10px">
                <telerik:RadTreeList AllowLoadOnDemand="false" ID="rtlPage" Width="100%" runat="server" SkinID="NoPosBackTreeList"
                    DataKeyNames="Id" AllowPaging="false" ParentDataKeyNames="Parentid" ClientSettings-Selecting-AllowItemSelection="false"
                    AutoGenerateColumns="false" AllowSorting="false" Skin="Vista" Style="overflow: auto" Visible="false">
                    <Columns>
                        <telerik:TreeListTemplateColumn DataField="displayname" UniqueName="DisplayName"
                            HeaderText="Meta">
                            <ItemTemplate>
                                <asp:LinkButton ID="lnkbtnMetaName" runat="server" CssClass='<%#  "css "+ HelperLib.Conversion.C.Str(Eval("Mode"))+" "+ HelperLib.Conversion.C.Str(Eval("Rowcss"))  %>' Text='<%# HelperLib.Conversion.C.Str(Eval("DisplayName")) %>'
                                    OnClientClick='<%# "return OpenPageLink(\""+HelperLib.Conversion.C.Str(Eval("Parentid")) +"\",\""+HelperLib.Conversion.C.Str(Eval("AppID"))+"\",\""+HelperLib.Conversion.C.Str(Eval("modID"))+"\",\""+HelperLib.Conversion.C.Str(Eval("EntID"))+"\",\""+HelperLib.Conversion.C.Str(Eval("Id"))+"\",\""+HelperLib.Conversion.C.Str(Eval("Fldtype"))+"\");"%>'></asp:LinkButton>
                            </ItemTemplate>
                            <HeaderStyle Width="40%" />
                        </telerik:TreeListTemplateColumn>
                        <telerik:TreeListTemplateColumn DataField="displayname" UniqueName="DisplayName"
                            HeaderText="Documentation">
                            <ItemTemplate>
                                <asp:LinkButton ID="lnkbtnDocument" runat="server" CssClass='<%# HelperLib.Conversion.C.Str(Eval("Parentid"))!="" && HelperLib.Conversion.C.Str(Eval("Parentid"))!="menu" && HelperLib.Conversion.C.Str(Eval("Parentid"))!="chart" && HelperLib.Conversion.C.Str(Eval("Parentid"))!="rpt" && HelperLib.Conversion.C.Str(Eval("Parentid"))!="wf" && HelperLib.Conversion.C.Str(Eval("Parentid"))!="wfs" && HelperLib.Conversion.C.Str(Eval("Parentid"))!="res" ?"document":"" %>' Text='<%# HelperLib.Conversion.C.Str(Eval("Parentid"))!="" && HelperLib.Conversion.C.Str(Eval("Parentid"))!="menu" && HelperLib.Conversion.C.Str(Eval("Parentid"))!="chart" && HelperLib.Conversion.C.Str(Eval("Parentid"))!="rpt" && HelperLib.Conversion.C.Str(Eval("Parentid"))!="wf" && HelperLib.Conversion.C.Str(Eval("Parentid"))!="wfs" && HelperLib.Conversion.C.Str(Eval("Parentid"))!="res" ?"Documentation":"" %>'
                                    OnClientClick='<%# "return OpenDocumentation(\""+HelperLib.Conversion.C.Str(Eval("Parentid")) +"\",\""+HelperLib.Conversion.C.Str(Eval("AppID"))+"\",\""+HelperLib.Conversion.C.Str(Eval("modID"))+"\",\""+HelperLib.Conversion.C.Str(Eval("EntID"))+"\",\""+HelperLib.Conversion.C.Str(Eval("Id"))+"\",\""+HelperLib.Conversion.C.Str(Eval("DisplayName"))+"\");"%>'></asp:LinkButton>
                            </ItemTemplate>
                            <HeaderStyle Width="40%" />
                        </telerik:TreeListTemplateColumn>
                        <telerik:TreeListTemplateColumn DataField="displayname" UniqueName="DisplayName"
                            HeaderText="Analysis">
                            <ItemTemplate>
                                <asp:LinkButton ID="lnkbtnAnalysis" runat="server" CssClass='<%# HelperLib.Conversion.C.Str(Eval("Parentid"))!="" && HelperLib.Conversion.C.Str(Eval("Parentid"))!="menu" && HelperLib.Conversion.C.Str(Eval("Parentid"))!="chart" && HelperLib.Conversion.C.Str(Eval("Parentid"))!="rpt" ?"analysis":"" %>' Text='<%# HelperLib.Conversion.C.Str(Eval("Parentid"))!="" && HelperLib.Conversion.C.Str(Eval("Parentid"))!="menu" && HelperLib.Conversion.C.Str(Eval("Parentid"))!="chart" && HelperLib.Conversion.C.Str(Eval("Parentid"))!="rpt" ?"Analysis":"" %>'></asp:LinkButton>
                            </ItemTemplate>
                            <HeaderStyle Width="40%" />
                        </telerik:TreeListTemplateColumn>
                        <telerik:TreeListBoundColumn DataField="AppName" HeaderText="Application" UniqueName="AppName">
                            <HeaderStyle Width="20%" />
                        </telerik:TreeListBoundColumn>
                        <telerik:TreeListBoundColumn DataField="ModName" HeaderText="Module" UniqueName="ModName">
                            <HeaderStyle Width="20%" />
                        </telerik:TreeListBoundColumn>
                        <telerik:TreeListBoundColumn DataField="EntName" HeaderText="Entity" UniqueName="EntName">
                            <HeaderStyle Width="20%" />
                        </telerik:TreeListBoundColumn>

                    </Columns>
                </telerik:RadTreeList>
            </div>

        </ContentTemplate>
    </asp:UpdatePanel>
    <style>
        .RadTreeList_Default .rtlHeader th
        {
            font-weight: bold;
            font-size: 13px;
        }

        rtlCF dgHeader
        {
        }

        .cssDevMode
        {
            color: #B80C0C !important;
            font-weight: bold;
            text-decoration: none;
        }

        .txtMetaSearch
        {
            border-radius: 5px;
            font-size: 16px !important;
        }

        .RadTreeList_Default a
        {
            text-decoration: none;
        }

        .RadTreeList_Default .cssHead
        {
            background-color: #EBEBEB !important;
        }

            .RadTreeList_Default .cssHead a
            {
                color: #000 !important;
                font-weight: bold;
            }

        .RadTreeList_Default .rtlA, .RadTreeList_Default .rtlR
        {
            background-color: #FFFFFF;
            color: #696969;
        }

        .analysis:hover
        {
            color: red !important;
        }


        .analysis:before
        {
            content: "\f0e8";
            font-family: fontawesome;
            margin-right: 3px;
        }



        .document:before
        {
            content: "\f15c";
            font-family: fontawesome;
            margin-right: 3px;
        }

        .document:hover
        {
            color: red !important;
        }

        #tvCtrEnt
        {
            position: absolute;
            display: none;
            width: 298px;
            height: 295px;
            border: solid 1px #DBD7D7;
            z-index: 10;
            box-shadow: 2px 2px 5px #555;
            overflow-y: auto;
            margin-top: -5px;
            background-color: #FFFFF5;
        }
    </style>


    <script type="text/javascript">



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

    <script type="text/javascript">


        function pageLoad() {
            $("#<%=rtlPage.ClientID%>").find(".Head").parent().parent().addClass("cssHead");
            $("#<%=rtlPage.ClientID%>").find(".DevMode").addClass("cssDevMode");
            //CheckSearchType($find("<%=rcbSearchType.ClientID%>").get_selectedItem());

            //ShowTree();

        }


        function ShowTree() {

            if ($("#tvCtrEnt").exists() && $find("<%=rcbSearchType.ClientID%>").get_selectedItem().get_value() == "query") {
                $("#<%=txtMetaSearch.ClientID %>").on("click", function (e) {
                    toggleEntityTree(e.target); e.stopPropagation();
                })
                $(document).on("click", function () { $("#tvCtrEnt").hide(); })
                $("#tvCtrEnt").on("click", function (e) { e.stopPropagation(); });
            }

        }

        function HideTree() {
            $("#tvCtrEnt").hide();
            $("#<%=txtMetaSearch.ClientID %>").on("click", function (e) {
                HideEntityTree(e.target);
            })
        }

        function HideEntityTree(txt) {
            $(txt).next().hide();
        }

        function toggleEntityTree(txt) {
            $(txt).next().show();
        }

        function selectEntity(sender, args) {

            var t = $("#<%=txtMetaSearch.ClientID %>");
            var n = args.get_node();

            if (n.get_level() < 1 && n.get_value() != "None")
                return;
            else {

                entityId = n.get_value();
                entityName = n.get_text();
                $("#<%=hdnEntityID.ClientID %>").val(n.get_value());


                var Fieldname = "";
                var Fieldvalue = "";
                if ($("#<%=hdnTablevalue.ClientID%>").val() != "") {
                    if ($("#<%=hdnTablevalue.ClientID%>").val() != n.get_value()) {
                        if (confirm("Field from multiple table not allowed,do you want to change data table field?")) {

                            var searchtext = n.get_text() + " = ";
                            $("#<%=txtMetaSearch.ClientID%>").val(searchtext);
                            $("#<%=hdnTablevalue.ClientID%>").val(n.get_value());
                            return;
                        }
                        else {
                            return;
                        }
                    }
                }
                else {
                    $("#<%=txtMetaSearch.ClientID%>").val("");
                }
                var searchtext = $("#<%=txtMetaSearch.ClientID%>").val() + n.get_text() + " = ";
                $("#<%=txtMetaSearch.ClientID%>").val(searchtext);
                $("#<%=hdnTablevalue.ClientID%>").val(n.get_value());

            }

        }


        function OpenPageLink(type, AppId, ModID, EntId, ID, fldtype) {

            var PageUrl = "";
            if (type == "app") {
                PageUrl = "Application_Add.aspx?PageType=E&ID=" + ID;
            }
            else if (type == "mod") {
                PageUrl = "Module_Add.aspx?PageType=E&ID=" + ID + "&App=" + AppId;
            }
            else if (type == "ent") {
                PageUrl = "FieldInfo_View.aspx?ModuleID=" + ModID + "&EntityID=" + EntId + "&TableName=" + EntId + "&IsSystemEntity=undefined";
            }
            else if (type == "fld") {
                PageUrl = "FieldInfo_Add.aspx?PageType=E&FieldType=" + fldtype + "&ID=" + ID + "&ModuleID=" + ModID + "&EntityID=" + EntId + "&IsSystemEntity=undefined";
            }
            else if (type == "vw") {
                PageUrl = (fldtype == "1" ? "uidesigner" : "Layout_Grid") + ".aspx?Module=" + ModID + "&EID=" + EntId + "&ID=" + ID + "&TableName=" + EntId + "&PageType=E";
            }
            else if (type == "lyt") {
                PageUrl = (fldtype == "1" ? "uidesigner" : "Layout") + ".aspx?Module=" + ModID + "&EID=" + EntId + "&ID=" + ID;
            }
            else if (type == "fltr") {
                PageUrl = "Filters_Add.aspx?Module=" + ModID + "&EID=" + EntId + "&ID=" + ID + "&TableName=" + EntId + "&PageType=E&PageCall=Filters";
            }
            else if (type == "Secfltr") {
                PageUrl = "Filters_Add.aspx?Module=" + ModID + "&EID=" + EntId + "&ID=" + ID + "&TableName=" + EntId + "&PageType=E&PageCall=Security";
            }
            else if (type == "chart") {
                PageUrl = "GraphDesigner_Add.aspx?ID=" + ID + "&PageType=E&PageCall=Chart";
            }
            else if (type == "rpt") {
                PageUrl = "ReportDesigner.aspx?PageType=E&ID=" + ID + "&EID=" + EntId + "&FID=global";
            }
            else if (type == "cstbtn") {
                PageUrl = "CustomButtons_Add.aspx?PageType=E&Module=" + ModID + "&EID=" + EntId + "&App=" + AppId + "&ID=" + ID;
            }
            else if (type == "menu") {
                alert();
                PageUrl = "../main/view.aspx?EID=tbl_SYS_Config&_fc=Menu&_pt=V&m=design&_notools=1";
            }
            else if (type == "wf") {
                PageUrl = "Workflow_Add.aspx?PageType=E&ID=" + ID;
            }
            else if (type == "wfs") {
                PageUrl = "WorkflowDesigner.aspx?PageType=E&WFID=" + fldtype + "&EID=" + EntId + "&ID=" + ID;
            }
            else if (type == "res") {
                PageUrl = " ../Main/ui.aspx?1&ID=" + ID + "&EID=tbl_CORE_Resources&_pt=E";
            }

            if (PageUrl != "")
                window.open(PageUrl);

            return false;
        }

        function OpenDocumentation(type, AppId, ModID, EntId, ID, fldname) {

            var PageUrl = "";
            if (type == "app") {
                PageUrl = "Documentation_Add.aspx?PageType=E&ID=" + ID + "&ModeType=App&Hdr=Application:" + fldname;
            }
            else if (type == "mod") {
                PageUrl = "Documentation_Add.aspx?PageType=E&ID=" + ID + "&ModeType=Module&Hdr=Module:" + fldname;
            }
            else if (type == "ent") {
                PageUrl = "Documentation_Add.aspx?PageType=E&ID=" + ID + "&ModeType=Entity&Hdr=Entity:" + fldname;
            }
            else if (type == "fld") {
                PageUrl = "Documentation_Add.aspx?PageType=E&ID=" + ID + "&ModeType=FIELDS&Hdr=Field:" + fldname;
            }
            else if (type == "vw") {
                PageUrl = "Documentation_Add.aspx?PageType=E&ID=" + ID + "&ModeType=View&Hdr=" + fldname;
            }
            else if (type == "lyt") {
                PageUrl = "Documentation_Add.aspx?PageType=E&ID=" + ID + "&ModeType=Layout&Hdr=" + fldname;
            }
            else if (type == "fltr") {
                PageUrl = "Documentation_Add.aspx?PageType=E&ID=" + ID + "&ModeType=Filters&Hdr=" + fldname;
            }
            else if (type == "Secfltr") {
                PageUrl = "Documentation_Add.aspx?PageType=E&ID=" + ID + "&ModeType=Filters&Hdr=" + fldname;
            }
            else if (type == "chart") {

            }
            else if (type == "rpt") {

            }
            else if (type == "cstbtn") {

            }

            if (PageUrl != "")
                window.open(PageUrl);

            return false;
        }




        function CheckSearchType(sender, eventArgs) {
            if (sender.get_value() == "normal") {
                $("#divNormal").show();
                HideTree();
            }
            else {
                $("#divNormal").hide();
                ShowTree();
            }
            $("#<%=txtMetaSearch.ClientID%>").val("");
            $("#<%=hdnTablevalue.ClientID%>").val("");
        }

        function chkValidation(cntrl) {
            $(cntrl).removeClass("mdl-button GreenButton searchIcon");
            $(cntrl).addClass("mdl-button GreenButton spinIcon");
            return true;
        }


    </script>




</asp:Content>


