<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="SessionEntity.aspx.cs" Inherits="SensysErp.Main.SessionEntity" %>

<!DOCTYPE html>

<html runat="server" id="htmlDoc" xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
   <%# HelperLib.Web.WebResources.GetResource("~/Scripts/modernizr.js")%>

    <%# HelperLib.Web.WebResources.GetResource("~/css/normalize.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/fonts/font.css")%>   
     <%#"<link id='lnkTheme' href='../Css/"+ErpModel.Globals.Users.ThemeName+"/jquery-ui-1.10.3.custom.css' rel='stylesheet' type='text/css' />"%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/CustomControl/CustomControl.css")%>
   

   

   <%# HelperLib.Web.WebResources.GetResource("~/Scripts/json2.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/System.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery-ui-1.10.3.custom.min.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jqHelper.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/UiHelper.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CustomControls.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/moment.min.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Erp.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Ui.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Fn.js")%>
    <script>

        $(function () {


            $("#pagePanel").on("focus", ".entityInput ", function (event) {

                var i = $(event.target);
                var p = i.closest(".entity-field")
                p.addClass("entity-highlight")
            });
            $("#pagePanel").on("blur", ".entityInput ", function (event) {
                var i = $(event.target);
                var p = i.closest(".entity-field")
                p.removeClass("entity-highlight")
            });
        });

        function changeTheme(theme) {
            $("#lnkTheme").attr("href", "../Css/" + theme + "/jquery-ui-1.10.3.custom.css?ts=" + (new Date() / 1))
            $(document.documentElement).removeClass("GreyTheme DarkTheme BlueGlossTheme GreenTheme OrangeTheme RedTheme").addClass(theme + "Theme")
        }
    </script>
</head>
<body>
    <form id="form1" runat="server">
         <asp:ScriptManager ID="ScriptManager1" runat="server" EnablePageMethods="true">
        </asp:ScriptManager>
        <%= HelperLib.Web.WebResources.GetResource("~/css/base.css")%>
        <%= HelperLib.Web.WebResources.GetResource("~/css/form.css")%>
    <div style1="margin:20px 0 0 20px">        
        <div id="pagePanel" style="min-width:250px" class="ui-form">
    <asp:Literal ID="htmlCtr" runat="server" Mode="PassThrough"></asp:Literal>
             <div id="CmdPanel" style="margin-top:25px;" class="cmdPanel">
            <a class="cmdBtn cmdSave" href="javascript:void(0)" onclick="SaveSession()">Save Selection</a>
            <a href="javascript:void(0)" class="cmdBtn cmdClose" onclick="closeForm()">Cancel</a>
                 </div>
            </div>
    </div>
    </form>
    <style>
        .entity
        {
            width: 100% !important;
   max-width:initial !important;
   border:none !important;
   box-shadow:none !important;
        }
        .entity .entityKey {
  font-size: 18px;
  width:100%;
  display: block;
  margin-left: 10px;
  margin-bottom: 5px;
}
            .entity .entityInput
            {
                  padding-left: 6px;
                  font-size: 15px;
            }
        .entity .entityValue {

  margin-left: 50px;
  width: 350px !important;
}

        .entity-line
        {
            -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=30);
            opacity:0.3;
            border:none;
            margin-left: 50px;
  margin-bottom: 5px;
        }
        .appTitle
        {
            font-size:25px !important;
        }
    </style>
    <script>

        InitUI();
        if (typeof getQS("Title") != "undefined")
            document.title= getQS("Title");
        function SaveSession() {
            var args = {};
            var error = false;
            $("#pagePanel").find(".entityInput").each(function () {
                var ctl = $(this);
                ctl.closest(".entity").removeClass("entity-error").children(".entityValue").attr("title", "");
                var val = "";
                if (ctl.hasClass("chosen-container-multi")) {
                    var items = ctl.multiSelect().getItems();
                    items.each(function () { val += $(this).data("RecordID") + ","; });
                }
                else {
                    val = $.defaultVal(ctl.data("RecordID"), "");
                }
                if ($.isEmpty(val) && ctl.closest(".entityValue").hasClass("mandatory")) {
                    error = true;
                    ctl.closest(".entity").addClass("entity-error").children(".entityValue").attr("title", "Please Enter Value");
                } else
                    args[ctl.attr("sid")] = val;
            });
            if (error)
                return;
            $.Notify("Saving...");
            PageMethods.SaveSession(args, function (r) { $.Notify({ Message: "Selection Saved Successfully", NotifyOnly: true }); closeForm(); }, function () { $.Notify(false); alert("Error Occured!"); });
        }
    </script>
</body>
</html>
