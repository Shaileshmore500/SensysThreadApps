<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" ValidateRequest="false" CodeBehind="Application_Add.aspx.cs" Inherits="SensysErp.Meta.Application_Add" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">


        var appcodeList = [];

    </script>

    <style type="text/css">
        .dispBorder
        {
            border-color: red !important;
        }

        .document:before
        {
            content: "\f15c";
            font-family: fontawesome;
            margin-right: 3px;
        }

        .document:hover
        {
            color: red;
        }
         #divUrlTree
        {
            position: absolute;
            display: none;
            width: 224px;
            height: 295px;
            background-color: #FFF;
            border: solid 2px #4D4C4C;
            border-radius: 5px;
            z-index: 10;
            margin-left: 103px;
            box-shadow: 2px 2px 5px #555;
            overflow-y: auto;
            margin-left: 335px;
            width: 290px;
            height: 265px;
        }



         #divCustomise textarea {
    width: 500px;
    height: 120px;
    margin-left: 70px;
}
         #divCustomise .td-label {
    display: block;
    margin-top: 10px;
}
    </style>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
             <telerik:RadTabStrip ID="rts1" runat="server" MultiPageID="mp1">
                    <Tabs>
                        <telerik:RadTab runat="server" PageViewID="pnlGeneral" Selected="true" Text="General" Value="general"></telerik:RadTab>
                        <telerik:RadTab runat="server"  PageViewID="pnlCustomise" Text="Customisation"  Value="customisation"></telerik:RadTab>                      
                    </Tabs>
                </telerik:RadTabStrip>
            <telerik:RadMultiPage Height="95%" SelectedIndex="0" ID="mp1" runat="server">
                <telerik:RadPageView Selected="true" ID="pnlGeneral" runat="server">
                    <div class="div-form">
                        <table class="table-form">
                            <tr>
                                <td class="td-label">
                                    <asp:Label ID="lblAppCode" runat="server" Text="Application Code"></asp:Label>
                                </td>
                                <td class="td-value">
                                    <asp:TextBox ID="txtAppCode" runat="server" Width="130px" MaxLength="10" onblur="return ValidateCodeName()">
                                    </asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td class="td-label">
                                    <asp:Label ID="lblAppName" runat="server" Text="Application Name"></asp:Label>
                                </td>
                                <td class="td-value">
                                    <asp:TextBox ID="txtAppName" runat="server" Width="250px" onblur="return ValidateCodeName()">
                                    </asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td valign="top" class="td-label">
                                    <asp:Label ID="lblAppDescription" runat="server" Text="Application Description"></asp:Label>
                                </td>
                                <td class="td-value">
                                    <asp:TextBox ID="txtAppDescription" runat="server" Width="250px" TextMode="Multiline"
                                        Rows="3">
                                    </asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td class="td-value">
                                    <asp:LinkButton ID="lnkDocument" CssClass="document" runat="server" OnClientClick="return ShowDocument();" Text="Documentation"></asp:LinkButton>
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
                            <tr>
                                <td></td>
                                <td class="td-value">
                                    <asp:CheckBox ID="chkDeactivate" runat="server" Text="Deactivate"></asp:CheckBox>
                                </td>
                            </tr>
                            <tr style="display: none">
                                <td></td>
                                <td class="td-value">
                                    <asp:CheckBox ID="chkSystem" runat="server" Text="Is System Defined"></asp:CheckBox>
                                </td>
                            </tr>

                            <tr id="trDdl" runat="server">
                                <td class="td-label"><span style="width: 90px" class="lbl">Attach Script</span>  </td>
                                <td>
                                    <asp:DropDownList ID="ddlScriptResource" onchange="toggleScriptPath()" CssClass="ddl" runat="server"></asp:DropDownList>
                                </td>
                            </tr>
                            <tr id="trUrl1" runat="server" style="display: none">
                                <td>

                                    <span style="width: 90px"
                                        class="lbl">Dll Path: </span></td>
                                <td>
                                    <asp:TextBox ID="txtExternalScript" Style="width: 500px" CssClass="txt" runat="server"></asp:TextBox><input type="button" id="btnUrl" value="..." />

                                    <div id="divUrlTree">
                                        <telerik:RadTreeView ID="tvUrl" OnClientNodeClicked="selectUrl" runat="server">
                                        </telerik:RadTreeView>
                                    </div>
                                </td>
                            </tr>
                            <tr id="trUrl2" runat="server" style="display: none">
                                <td>
                                    <span style="width: 90px"
                                        class="lbl">Class Name: </span></td>
                                <td>
                                    <asp:TextBox ID="txtExternalScriptClass" Style="width: 500px" CssClass="txt" runat="server"></asp:TextBox></span>
                                </td>
                            </tr>
                        </table>

                    </div>
                </telerik:RadPageView>
                <telerik:RadPageView ID="pnlCustomise" runat="server">
                    <div id="divCustomise" class="table-form">
                      <label class="td-label">Override Company Customisation <input id="chkOverride" runat="server" type="checkbox" /></label><br />
                      <label class="td-label">Show Menus For this App Only <input id="chkShowAppMenu" runat="server" type="checkbox" /></label><br />
                      <span class="td-label">Application Title</span>
                      <asp:TextBox runat="server" ID="txtAppTitle" style="width:500px;margin-left:70px"></asp:TextBox><br />
                      <span class="td-label">Application Logo</span>
                      <asp:TextBox runat="server" ID="txtAppLogo" TextMode="MultiLine" Rows="3"  style="height: initial;width:500px;margin-left:70px"></asp:TextBox><br />
                      <span class="td-label">Application Home Url</span>
                      <asp:TextBox runat="server" ID="txtAppurl" style="width:500px;margin-left:70px"></asp:TextBox><br />
                      <span class="td-label">Default Dashboard Code</span>                      
                       <asp:DropDownList ID="ddlDashlist" CssClass="ddl" style="width:500px;margin-left:70px" runat="server"></asp:DropDownList><br />
                      <span class="td-label">Background Image</span>
                      <asp:TextBox runat="server" ID="txtAppBg" style="width:500px;margin-left:70px"></asp:TextBox><br />
                      <span class="td-label">Login Css</span>
                      <asp:TextBox runat="server" ID="txtLoginCss" TextMode="MultiLine"></asp:TextBox><br />
                       <span class="td-label">Login Script</span>
                      <asp:TextBox runat="server" ID="txtLoginScript" TextMode="MultiLine"></asp:TextBox><br />
                      <span class="td-label">Home Css</span>
                      <asp:TextBox runat="server" ID="txtHomeCss" TextMode="MultiLine"></asp:TextBox><br />
                       <span class="td-label">Home Script</span>
                      <asp:TextBox runat="server" ID="txtHomeScript" TextMode="MultiLine"></asp:TextBox><br /><br />
                      <span class="td-label">Default Script</span>
                      <asp:DropDownList style="margin-left: 70px;" ID="ddlDefaultScript" runat="server"></asp:DropDownList><br /><br />
                      <span class="td-label">Default Css</span>
                      <asp:DropDownList  style="margin-left: 70px;"  ID="ddlDefaultCss"  runat="server"></asp:DropDownList><br /><br />
                   </div>
                </telerik:RadPageView>
            </telerik:RadMultiPage>
           
            <br /><br /><br />
            
            <div class="cmdPanel">
                    <asp:LinkButton ID="btnSubmit" CssClass="cmdBtn cmdSave" runat="server" Text="Save" OnClientClick="return ValidateFirstChar()" OnClick="btnSubmit_Click"></asp:LinkButton>
                    <asp:LinkButton ID="btnDelete" CssClass="cmdBtn cmdDelete" runat="server" Text="Delete" OnClientClick="return ConfirmDeletion()" OnClick="btnDelete_Click"></asp:LinkButton>
                    <a href="javascript:void(0)" class="cmdBtn cmdClose" onclick="closeForm()" style="display: none">Cancel</a>
                </div>
        </ContentTemplate>
    </asp:UpdatePanel>
    <script type="text/javascript">


        String.prototype.RemoveSpecialChars = function (space) {
            var outstring = "";
            for (var a = 0; a < this.length; a++) {
                if ((this[a].charCodeAt() >= 48 && this[a].charCodeAt() <= 57) ||
                    (this[a].charCodeAt() >= 65 && this[a].charCodeAt() <= 90) ||
                    (this[a].charCodeAt() >= 97 && this[a].charCodeAt() <= 122) || this[a].charCodeAt() == 95 || this[a].charCodeAt() == 32) {

                    if (this[a].charCodeAt() == 32 && space)
                        continue;
                    outstring = outstring + this[a];
                }
            }
            return outstring;
        }

        $(function () {
             toggleScriptPath();

             $("#btnUrl").on("click", function (e) { $(e.target).next().show(); e.stopPropagation(); })
             $("#divUrlTree").on("click", function (e) { e.stopPropagation(); });
             $(document).on("click", function (e) {
                 if ($(".jqModalBG").isVisible())
                     return;
                 $("#divUrlTree").hide();
             });
        });
        function pageLoad() {
            toggleScriptPath();
        }
        function selectUrl(sender, args) {
            var n = args.get_node();
            if (n.get_attributes().getAttribute("IsFile")) {
                $("#<%=txtExternalScript.ClientID%>").val(n.get_value());
                 $("#divUrlTree").hide();
             }
         }
        function toggleScriptPath() {
            $("#<%= trUrl1.ClientID %>,#<%= trUrl2.ClientID %>").setDisplay($("#<%=ddlScriptResource.ClientID%>").val() == "Ext")
        }

        function ValidateCodeName() {

            var appcode = $("#<%= txtAppCode.ClientID %>");
            var appname = $("#<%= txtAppName.ClientID %>");

            if ($.QS("PageType") == "A")
                $("#<%= txtAppCode.ClientID %>").val(appcode.val().RemoveSpecialChars(true));

            $("#<%= txtAppName.ClientID %>").val(appname.val().RemoveSpecialChars());

            return true;
        }

        function AddApp(app, appname) {
            var tapp = app + "|" + appname;
            this.parent.UpdateTree('A', tapp, "", "");
        }

        function UpdateApp(app, appname) {
            var tapp = app + "|" + appname;
            this.parent.UpdateTree('AU', tapp, "", "");
        }

        function ReloadConfig(appid) {
            $(window.frameElement).removeAttr('src');
            this.parent.UpdateTree('DA', appid, '', '');
        }

        function ConfirmDeletion() {
            if (!confirm("Do you wish to delete this entity?"))
                return false;
        }

        function ValidateFirstChar() {
            var tblnm_disp = $("#<%= txtAppCode.ClientID %>").val();
            var firstcharDisp = tblnm_disp.charCodeAt(0);
            if (!((firstcharDisp >= 65 && firstcharDisp <= 90) || (firstcharDisp >= 97 && firstcharDisp <= 122))) {
                alert('Application Code must be starts with alphabet letter.');
                return false;
            }

            var tblnm = $("#<%= txtAppName.ClientID %>").val();
            var firstcharCode = tblnm.charCodeAt(0);
            if (!((firstcharCode >= 65 && firstcharCode <= 90) || (firstcharCode >= 97 && firstcharCode <= 122))) {
                alert('Application Name must be starts with alphabet letter.');
                return false;
            }
        }
        function ShowDocument() {

            window.open("Documentation_Add.aspx?PageType=E&ID=" + $.QS("ID") + "&ModeType=App&Hdr=Application: " + $("#<%= txtAppName.ClientID %>").val());
            return false;
        }
    </script>
</asp:Content>
