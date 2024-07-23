<%@ Page Language="C#" AutoEventWireup="true" Title="Dashboard Designer" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="DashboardDesigner_Add.aspx.cs" Inherits="SensysErp.Meta.DashboardDesigner_Add" ValidateRequest="false" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">
        var DashboardID = "";
        var AddMode = false;
    </script>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />



            <telerik:RadTabStrip ID="tabRightsInfo" runat="server" MultiPageID="RadMultiPageRights"
                OnClientTabSelected="OnClientTabSelected" Width="100%" Height="98%"
                SelectedIndex="0">
                <Tabs>
                    <telerik:RadTab Text="Designer" PageViewID="pvDesigner" Value="Designer">
                    </telerik:RadTab>
                    <telerik:RadTab Text="Role" PageViewID="pvRole" Value="Roles">
                    </telerik:RadTab>
                    <telerik:RadTab Text="Permission" PageViewID="pvRole" Value="Permission">
                    </telerik:RadTab>
                    <telerik:RadTab Text="Userfilter" PageViewID="pvUserFilter" Value="Userfilter">
                    </telerik:RadTab>
                </Tabs>
            </telerik:RadTabStrip>

            <telerik:RadMultiPage ID="RadMultiPageRights" runat="server" SelectedIndex="0"
                Style="border1: solid 1px #898C95 !important; margin-left: -1px !important; width: 100% !important;">
                <telerik:RadPageView ID="pvDesigner" runat="server">

                    <div class="div-form">
                        <table id="tdvalue" class="table-form" style="width: 510px;">

                            <tr>
                                <td class="td-label" style="width: 200px">
                                    <asp:Label ID="lblDisplayName" runat="server" Text="Display Name"></asp:Label>
                                </td>
                                <td class="td-value">
                                    <asp:TextBox ID="txtDisplayName" runat="server" Width="200px" MaxLength="70">
                                    </asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td class="td-label" style="width: 200px">
                                    <asp:Label ID="Label2" runat="server" Text="Code"></asp:Label>
                                </td>
                                <td class="td-value">
                                    <asp:TextBox ID="txtCode" runat="server" Width="200px" MaxLength="70">
                                    </asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td class="td-label">
                                    <asp:Label ID="lblDesc" runat="server" Text="Description"></asp:Label>
                                </td>
                                <td class="td-value">
                                    <asp:TextBox ID="txtDesc" runat="server" Width="200px">
                                    </asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td class="td-label">
                                    <asp:Label ID="Label1" runat="server" Text="Visibility"></asp:Label>
                                </td>
                                <td class="td-value">
                                    <asp:DropDownList ID="ddlVisible" onchange="switchResp()" runat="server">
                                        <asp:ListItem Text="Legacy Only" Value="0"></asp:ListItem>
                                        <asp:ListItem Selected="True" Text="All Devices" Value="1"></asp:ListItem>
                                        <asp:ListItem Text="Responsive & Mobile" Value="2"></asp:ListItem>
                                        <asp:ListItem Text="Responsive Only" Value="3"></asp:ListItem>
                                        <asp:ListItem Text="Mobile Only" Value="4"></asp:ListItem>
                                    </asp:DropDownList>
                                </td>
                            </tr>
                            <tr>
                                <td class="td-label">
                                    <asp:Label ID="Label4" runat="server" Text="Related App"></asp:Label>
                                </td>
                                <td class="td-value">
                                    <asp:DropDownList ID="ddlApp" runat="server" Width="200px">
                                    </asp:DropDownList>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" class="td-label">
                                    <div id="div1" style="margin-top: 5px;">
                                        <input type="radio" id="rdoFont" runat="server"  checked name="icon" /><label style="width: auto; margin-right: 5px;" class="lbl" for="rdoFont">Font Icon</label>
                                        <a href="javascript:void(0)"
                                            runat="server" onclick="showIconList()" style="vertical-align: middle; display: inline-block"
                                           class="SpnIcon" id="spnIcon">&#xf00a;</a><input style="margin-left: 23px;" runat="server" type="radio" id="rdoSvg" name="icon" /><label style="width: auto; margin-right: 5px;" class="lbl" for="rdoSvg">SVG Icon</label><textarea runat="server" style="width: 225px;" id="txtIcon"></textarea>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="td-label">
                                    <asp:Label ID="Label5" runat="server" Text="Sort Order"></asp:Label>
                                </td>
                                <td class="td-value">
                                    <asp:TextBox ID="txtSort" runat="server" Width="200px">
                                    </asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td class="td-label">Is Deactivated</td>
                                <td class="td-value">
                                    <asp:CheckBox ID="chkIsDeactivated" data-chk-on="yes" data-chk-off="no" runat="server"></asp:CheckBox>
                                </td>
                            </tr>
                            <tr runat="server">
                                <td colspan="2"></td>
                            </tr>
                            <tr id="trResVersion" runat="server">
                                <td class="td-label">
                                    <asp:Label ID="Label3" runat="server" Text="Resource Version"></asp:Label>
                                </td>
                                <td class="td-value">
                                    <telerik:RadNumericTextBox ID="txtResVersion" runat="server"></telerik:RadNumericTextBox>
                                </td>
                            </tr>

                        </table>
                        <table class="table-form" style="width: 850px;">
                            <tr>
                                <td style="width: 225px; vertical-align: middle;" class="td-label">Publish automatically (Will be automatically displayed on home screen)</td>
                                <td class="td-value">
                                    <asp:CheckBox ID="chkPublish" data-chk-on="yes" data-chk-off="no" runat="server"></asp:CheckBox>
                                </td>

                                <td style="width: 75px; vertical-align: middle; text-align: right;" class="td-label">Readonly</td>
                                <td class="td-value">
                                    <asp:CheckBox ID="chkReadonly" data-chk-on="yes" data-chk-off="no" runat="server"></asp:CheckBox>
                                </td>

                                <td style="width: 75px; vertical-align: middle; text-align: right; visibility: hidden" class="td-label">Sticky</td>
                                <td class="td-value" style="visibility: hidden">
                                    <asp:CheckBox ID="chkSticky" data-chk-on="yes" data-chk-off="no" runat="server"></asp:CheckBox>
                                </td>
                                <td style="width: 155px; vertical-align: middle; text-align: right; visibility: hidden" class="td-label">Enforce As Default</td>
                                <td class="td-value" style="visibility: hidden">
                                    <asp:CheckBox ID="chkEnforce" data-chk-on="yes" data-chk-off="no" runat="server"></asp:CheckBox>
                                </td>
                            </tr>
                        </table>
                        <div style="margin:25px 0">
                <a id="btnSubmit1" class="cmdBtn cmdSave" href="javascript:void(0)"  onclick="return saveData();">Save</a>
                <a id="btnClose1" class="cmdBtn cmdClose"   href="javascript:void(0)" onclick="closeForm();">Cancel</a>
            </div>
                        <div id="divifrWidget">
                            <iframe id="ifrWidget" runat="server" frameborder="0" style="width:85vw;min-width: 1200px;height: 10500px; border: 1px solid gray;"></iframe>
                        </div>


                    </div>

                </telerik:RadPageView>
                <telerik:RadPageView ID="pvRole" runat="server" Height="500px">
                    <iframe id="ifrmRole" style="height: 99%; width: 99%" runat="server"></iframe>
                </telerik:RadPageView>
                <telerik:RadPageView ID="pvUserFilter" runat="server" Height="500px">
                    <iframe id="ifrmUserFilter" style="height: 99%; width: 99%" runat="server"></iframe>
                </telerik:RadPageView>
            </telerik:RadMultiPage>

            <div>
                <asp:LinkButton ID="btnSubmit" CssClass="cmdBtn cmdSave" runat="server" Text="Submit" OnClientClick="return saveData();"></asp:LinkButton>
                <asp:LinkButton ID="btnClose" class="cmdBtn cmdClose" runat="server" Text="Cancel" OnClientClick="closeForm();"></asp:LinkButton>
            </div>
            <asp:HiddenField ID="hdnWidget" runat="server" />
            <asp:HiddenField ID="hdnUserFilter" runat="server" />
            <asp:Panel ID="divIcons" runat="server" CssClass="formSettings divIcons" Style="display: none;">
                <iframe frameborder="0" src="Icons.html" style="height: 100%; width: 100%"></iframe>
            </asp:Panel>

        </ContentTemplate>
    </asp:UpdatePanel>
    <style>
        .SpnIcon {
    height: 35px;
    width: 35px;
    color: #000;
    text-align: center;
    text-decoration: none;
    border: solid 1px transparent;

    font-family: fontawesome;
    display: block;
    line-height: 38px;
    font-size: 28px;
    font-weight: normal;
}
          .SpnIcon:hover
            {
                border: solid 1px red;
            }
         .divIcons
        {
            width: 550px;
            height: 510px;
            top: 150px;
            overflow: hidden;
        }
    </style>
    <script type="text/javascript">

        $(function () {
            $("#<%=ddlApp.ClientID%>").children().each(function () { $(this).html($(this).text().replace("MODULE", "&nbsp;&nbsp;&nbsp;&nbsp;MODULE")); })
        })



        function pageLoad() {

            $("#<%=chkIsDeactivated.ClientID%>").CheckBoxX();

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
            $("#<%=chkIsDeactivated.ClientID%>").CheckBoxX();
            $("#<%=chkPublish.ClientID%>,#<%=chkReadonly.ClientID%>,#<%=chkSticky.ClientID%>,#<%=chkEnforce.ClientID%>").CheckBoxX();
            OpenRecordFilter();
        }
        function switchResp() {
            var src = $("#<%=ifrWidget.ClientID%>").attr("src");
            if ($("#<%=ddlVisible.ClientID%>").val() == "0")
                src = src.replace("&_rspv=0", "").replace("&_rspv=1", "") + "&_rspv=0";
            else
                src = src.replace("&_rspv=0", "").replace("&_rspv=1", "") + "&_rspv=1";

            if (src != $("#<%=ifrWidget.ClientID%>").attr("src"))
                $("#<%=ifrWidget.ClientID%>").attr("src", src)
        }

        function OnClientTabSelected(sender, args) {
            var tab = args.get_tab();
            var value = tab.get_value();
            if (value.toLowerCase() == "roles") {
                $("#<%= ifrmRole.ClientID%>")[0].contentWindow.showDiv('Role');
            }
            else if (value.toLowerCase() == "permission") {
                $("#<%= ifrmRole.ClientID%>")[0].contentWindow.showDiv('Permission');
             }
     }

        function showIconList() {
            $("#<%=divIcons.ClientID %>").ShowModal({ zindex: 4000, autoClose: true }).css("top", "100px");
          }
          function selectIcon(ico) {
              $("#<%=divIcons.ClientID %>").HideModal();
              $("#<%=spnIcon.ClientID %>").html(ico);

          }

     function OpenRecordFilter() {
         if ($.isEmpty($('#<%= ifrmUserFilter.ClientID %>').attr('src'))) {
             url = "../Meta/Filters_Add.aspx?PageMode=Settings&SID=" + usid + "&Hidebutton=1&ShowFilterBtn=1&ReturnXml=1";
             $('#<%= ifrmUserFilter.ClientID %>').attr('src', url);
        }
        return false;
    }

    function saveUserFilterXml(filterXml) {

        $("#<%= hdnUserFilter.ClientID %>").val(filterXml);
         }

         function saveData() {

             var userfilter = "";
             var data = new Object();
             data["Type"] = "SaveWidget";



             var arrRoles = [];
             var Permission = [];
             var arr = $("#<%= ifrmRole.ClientID%>")[0].contentWindow.GetRoles()
            var arrPermission = $("#<%= ifrmRole.ClientID%>")[0].contentWindow.GetPermission();

            for (var i = 0; i < arr.length; i++) arrRoles.push(arr[i]);
            for (var i = 0; i < arrPermission.length; i++) Permission.push(arrPermission[i]);

            data["arrPermission"] = Permission;
            data["arrRoles"] = arrRoles;

            $("#<%=hdnWidget.ClientID%>").val($("#<%=ifrWidget.ClientID%>")[0].contentWindow.serialiseWidgets("dashboard1"));

             userfilter = $("#<%=ifrmUserFilter.ClientID%>")[0].contentWindow.createXml(null, "");
            data["AddMode"] = (AddMode == true);
            data["@Dashboard_Pid"] = DashboardID;
            data["@Publish"] = $("#<%=chkPublish.ClientID%>").checked();
             data["@IsReadonly"] = $("#<%=chkReadonly.ClientID%>").checked();
            data["@IsSticky"] = $("#<%=chkSticky.ClientID%>").checked();
            data["@EnforceAsDefault"] = $("#<%=chkEnforce.ClientID%>").checked();

            data["@DisplayName"] = $("#<%=txtDisplayName.ClientID%>").val();
             data["@DashboardCode"] = $("#<%=txtCode.ClientID%>").val();

             data["@RelatedApp"] = $("#<%=ddlApp.ClientID%>").val();
             var newfont = $("#<%=spnIcon.ClientID%>").find("f1,f2,m1,m2").length > 0;
             var ic = ($("#<%=rdoFont.ClientID%>").checked() ? ("&#x" + $("#<%=spnIcon.ClientID%>").text().charCodeAt(0).toString(16) + ";") : $.encodeXml($("#<%=txtIcon.ClientID%>").val()));
             if (newfont)
                 ic = $.encodeXml($("#<%=spnIcon.ClientID%>").html());
             data["@DashStyle"] = "<Style><Icon Type=\"" + ($("#<%=rdoFont.ClientID%>").checked() ? "font" : "svg") + "\">" + ic + "</Icon></Style>";
             data["@DashIndex"] = isNaN($("#<%=txtSort.ClientID%>").val() / 1) ? 0 : $("#<%=txtSort.ClientID%>").val() / 1;


            data["@Visiblity"] = $("#<%=ddlVisible.ClientID%>").val() / 1;
            data["@Description"] = $("#<%=txtDesc.ClientID%>").val();
            data["@IsDeactivated"] = $("#<%=chkIsDeactivated.ClientID%>").checked();
            data["@WidgetData"] = $("#<%=ifrWidget.ClientID%>")[0].contentWindow.serialiseWidgets("dashboard1");
            data["@UserFilter"] = userfilter;
            data["Type"] = "SaveDashboard";
            data["@DashboardMaster_Fid"] = $.QS("MasterFID");
            data["au"] = $.QS("_au");
            $.Notify("Saving");
            PageMethods.Execute(data, arrRoles, Permission, PageMethodSuccess, PageMethodError);
            return false;
        }

        function PageMethodSuccess() {
            $.Notify(false);
            AddMode = false;
            RefreshParent()
        }
        function PageMethodError(error) {
            $.Notify({ Message: "Error Occured.", NotifyOnly: true });
        }



    </script>




</asp:Content>


