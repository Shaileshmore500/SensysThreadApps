<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="DashboardMaster_Add.aspx.cs" Inherits="SensysErp.Meta.DashboardMaster_Add" ValidateRequest="false" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">


        window.ht = 500;
        window.wd = 600;


    </script>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
            <div class="div-form">
                <table id="tdvalue" class="table-form" style="width: 510px;">

                    <tr>
                        <td class="td-label">
                            <asp:Label ID="lblTitle" runat="server" Text="Title"></asp:Label>
                        </td>
                        <td class="td-value">
                            <asp:TextBox ID="txtTitle" runat="server" Width="150px" MaxLength="70">
                            </asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td class="td-label">
                            <asp:Label ID="Label2" runat="server" Text="Code"></asp:Label>
                        </td>
                        <td class="td-value">
                            <asp:TextBox ID="txtCode" runat="server" Width="150px" MaxLength="70">
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
                                <input type="radio" id="rdoFont" runat="server" checked name="icon" /><label style="width: auto; margin-right: 5px;" class="lbl" for="rdoFont">Font Icon</label>
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
                    <tr id="trResVersion" runat="server">
                        <td class="td-label">
                            <asp:Label ID="Label3" runat="server" Text="Resource Version"></asp:Label>
                        </td>
                        <td class="td-value">
                            <telerik:RadNumericTextBox ID="txtResVersion" runat="server"></telerik:RadNumericTextBox>
                        </td>
                    </tr>

                </table>
                <div style="margin:25px 0">
                <a id="btnSubmit1" class="cmdBtn cmdSave" href="javascript:void(0)"  onclick="return saveData();">Save</a>
                <a id="btnClose1" class="cmdBtn cmdClose"   href="javascript:void(0)" onclick="closeForm();">Cancel</a>
            </div>
                        <div id="divifrWidget">
                            <iframe id="ifrWidget" runat="server" frameborder="0" style="width:85vw;min-width: 1200px; height: 10500px; border: 1px solid gray;"></iframe>
                        </div>
                <%-- <div id="divFrameWidget">  <iframe id="iframeWidget"  </div>--%>
                <div style="margin-bottom: 150px">
                    <asp:LinkButton ID="btnSubmit" CssClass="cmdBtn cmdSave" runat="server" Text="Submit" OnClientClick="return saveData()"></asp:LinkButton>
                    <asp:LinkButton ID="btnClose" class="cmdBtn cmdClose" runat="server" Text="Cancel" OnClientClick="closeForm();"></asp:LinkButton>
                </div>
                <asp:HiddenField ID="hdnWidget" runat="server" />
                 <div id="divIcons" class="formSettings divIcons" style="display: none;">
                <iframe frameborder="0" src="Icons.html" style="height: 100%; width: 100%"></iframe></div>
            </div>
            </div>

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
        function refreshDashBoard() {

        }

        function RefreshParent() {
            window.parent.RefreshParentGrid();
            return false;
        }

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

      

        function switchResp() {
            var src = $("#<%=ifrWidget.ClientID%>").attr("src");
           if ($("#<%=ddlVisible.ClientID%>").val() == "0")
               src = src.replace("&_rspv=0", "").replace("&_rspv=1", "") + "&_rspv=0";
           else
               src = src.replace("&_rspv=0", "").replace("&_rspv=1", "") + "&_rspv=1";

           if (src != $("#<%=ifrWidget.ClientID%>").attr("src"))
               $("#<%=ifrWidget.ClientID%>").attr("src", src)
        }

        function getwidgetData() {
            $("#<%=hdnWidget.ClientID%>").val($("#<%=ifrWidget.ClientID%>")[0].contentWindow.serialiseWidgets("dashboard1"));

         }

        function showIconList() {
            $("#divIcons").ShowModal({ zindex: 4000, autoClose: true }).css("top", "100px");
          }
          function selectIcon(ico) {
              $("#divIcons").HideModal();
              $("#<%=spnIcon.ClientID %>").html(ico);

          }
         function saveData() {
             var data = new Object();

             data["@DashboardTitle"] = $("#<%=txtTitle.ClientID%>").val();
             data["@DashboardCode"] = $("#<%=txtCode.ClientID%>").val();
             data["@Visiblity"] = $("#<%=ddlVisible.ClientID%>").val() / 1;

             data["@RelatedApp"] = $("#<%=ddlApp.ClientID%>").val();
             var newfont = $("#<%=spnIcon.ClientID%>").find("f1,f2,m1,m2").length > 0;
             var ic = ($("#<%=rdoFont.ClientID%>").checked() ? ("&#x" + $("#<%=spnIcon.ClientID%>").text().charCodeAt(0).toString(16) + ";") : $.encodeXml($("#<%=txtIcon.ClientID%>").val()));
             if (newfont)
                 ic = $.encodeXml($("#<%=spnIcon.ClientID%>").html());
             data["@DashStyle"] = "<Style><Icon Type=\"" + ($("#<%=rdoFont.ClientID%>").checked() ? "font" : "svg") + "\">" + ic + "</Icon></Style>";
             data["@DashIndex"] = isNaN($("#<%=txtSort.ClientID%>").val() / 1) ? 0 : $("#<%=txtSort.ClientID%>").val() / 1;

             data["@ResourceVersion"] = $.defaultVal($("#<%= txtResVersion.ClientID%>").val(), 0);
             data["@IsDeactivated"] = $("#<%=chkIsDeactivated.ClientID%>").checked();
             data["@DefaultWidgetData"] = $("#<%=ifrWidget.ClientID%>")[0].contentWindow.serialiseWidgets("dashboard1");
             data["@DashboardMaster_Pid"] = DashboardMasterID;
             data["Type"] = "SaveMasterDashboard";
             data["au"] = $.QS("_au");
             $.Notify("Saving");
             PageMethods.Execute(data, PageMethodSuccess, PageMethodError);
             return false;
         }

         function PageMethodSuccess(data) {
             DashboardMasterID = data["@DashboardMaster_Pid"];
             $.Notify(false);

         }
         function PageMethodError(error) {
             $.Notify({ Message: "Error Occured.", NotifyOnly: true });
         }


    </script>




</asp:Content>


