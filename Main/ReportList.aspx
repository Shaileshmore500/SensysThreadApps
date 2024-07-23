<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ReportList.aspx.cs" Inherits="SensysErp.Main.ReportList" %>

<!DOCTYPE html>

<html runat="server" id="htmlDoc" class="docHTML" xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/modernizr.js")%>

    <%# HelperLib.Web.WebResources.GetResource("~/css/normalize.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/fonts/font.css")%>
    <%# QS("_rspv")=="1"?"":"<link id='lnkTheme' href='../Css/Grey/jquery-ui-1.10.3.custom.css' rel='stylesheet' type='text/css' />"%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/CustomControl/CustomControl.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/json2.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/System.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery-ui-1.10.3.custom.min.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jqHelper.js")%>
     <%# QS("_rspv")!="1"?"":HelperLib.Web.WebResources.GetResource("~/css/materialize.min.css")%>
    <style>
        html, body, form
        {
            height:100%;
        }

        .rpt-cat {
            background: #FFFFFF;
            max-width: 32%;
            display: block;
            margin-bottom: 20px;
            margin-right: 15px;
            vertical-align: top;
            border: solid 1px #f1f1f1;
            box-shadow: 2px 2px 10px #c5c5c5;
            flex-grow: 1;
            flex: 1 1 30%;
        }




        #divRptList {
            padding: 10px;
            margin: 10px;
            display: flex;
            margin-top: 24px;
            justify-content: left;
            flex-wrap: wrap;
        }
@media (max-width: 1020px) {  
  .rpt-cat {
        max-width: 48%;
    flex: 1 1 45%;
  }
}
@media (max-width: 700px) {
   #divRptList {
    display: block;
  }
  .rpt-cat {
        margin: 0 0 10px 0;
    max-width: initial;
  }
}

        .rpt-title
        {
            display: block;
            width: auto;
            padding: 8px 5px;
            font-size: 16px;
            border-bottom: 1px solid #d0d0d0;
            color: #fff;
            font-family: nunitobold;
            background-color: #464646;
            text-indent: 6px;
        }

        .rpt-item-ctr
        {
            padding-top: 10px;
            font-size: 15px;
            flex-wrap: wrap;
            width: 100%;
        }

            .rpt-item-ctr .rpt-item
            {
                vertical-align: top;
                color: #505050;
                text-decoration: none;
                border-right: solid 12px transparent;
                border-left: solid 12px transparent;
                padding: 10px 0 10px 0;
                box-sizing: border-box;
                border-bottom: 1px solid #e2e2e2;
                margin: 0px;
                display: block;
                font-family: nunitoregular;
                outline: none !important;
                text-transform: capitalize;
            }

                .rpt-item-ctr .rpt-item:active,
                .rpt-item-ctr .rpt-item:hover
                {
                    color: #0185fa;
                    font-family: nunitobold;
                    transition: color 0.7s;
                }

        .rpt-item:before
        {
            font-family: FontAwesome;
            display: inline-block;
            margin-right: 3px;
            content: "\f061";
            font-size: 14px;
            line-height: 20px;
        }

        .rpt-ico
        {
            font-family: FontAwesome;
            margin-right: 5px;
        }

         .DarkTheme .rpt-title {
             border-bottom-color:#0c0c0c;
            background-color: #646b71;
        }
        .DarkTheme .rpt-cat {
            background: #1e1e1e;
            border-color: #080808;
            box-shadow: 2px 2px 10px #000000;
        }
        .DarkTheme .rpt-item-ctr .rpt-item {
                color: #a6a6a6;
            border-bottom-color:#333333;
        }
        .DarkTheme .rpt-item-ctr .rpt-item:active, .DarkTheme .rpt-item-ctr .rpt-item:hover {
            color: #ffca01;
        }
         .BlueGlossTheme .rpt-title {
            background-color: #00a1ff;
        }
        .BlueGlossTheme .rpt-item-ctr .rpt-item:active, .BlueGlossTheme .rpt-item-ctr .rpt-item:hover {
            color: #f38421;
        }
        .GreenTheme .rpt-title {
            background-color: #018b45;
        }
        .GreenTheme .rpt-item-ctr .rpt-item:active, .GreenTheme .rpt-item-ctr .rpt-item:hover {
            color: #30a600;
        }
        .OrangeTheme .rpt-title {
            background-color: #ff6a00;
        }
        .OrangeTheme .rpt-item-ctr .rpt-item:active, .OrangeTheme .rpt-item-ctr .rpt-item:hover {
            color: #f38421;
        }
        .RedTheme .rpt-title {
            background-color: #900000;
        }
        .RedTheme .rpt-item-ctr .rpt-item:active, .RedTheme .rpt-item-ctr .rpt-item:hover {
            color: #ff0000;
        }

       .responsive .rpt-title {
            color: var(--primary-text-color);
            font-family: roboto;
            background-color: var(--primary-color);
            border-bottom: 1px solid var(--border-color-light);
        }
        .responsive .rpt-cat {
            background: var(--bg-color-light);
            border: solid 1px var(--border-color);
            box-shadow: var(--shadow1);
        }
        .responsive .rpt-item-ctr .rpt-item {
            color: var(--secondary-color);
            border-bottom: 1px solid var(--border-color-light);
            font-family: roboto;
        }
            .responsive .rpt-item-ctr .rpt-item:active, .responsive .rpt-item-ctr .rpt-item:hover {
                color: var(--secondary-color-light);
                font-family: roboto;
            }
    </style>
    <script>

        function changeTheme(theme) {
            $("#lnkTheme").attr("href", "../Css/" + theme + "/jquery-ui-1.10.3.custom.css?ts=" + (new Date() / 1))
            $(document.documentElement).removeClass("GreyTheme DarkTheme BlueGlossTheme GreenTheme OrangeTheme RedTheme").addClass(theme + "Theme")
        }
    </script>
</head>
<body class="pg-reportlist">
    <form id="form1" runat="server">
        <%= HelperLib.Web.WebResources.GetResource("~/css/base.css")%>
        <%= HelperLib.Web.WebResources.GetResource( QS("_rspv")!="1"?"~/css/form.css":"~/css/main.css")%>
        <style><%= ErpModel.Globals.Users.CustomTheme%></style>
         <%= Erp.Base.Utils.Utils.GetResourcePath(ErpModel.Globals.AppManager.CurrentAppScriptResource,true)%>
        <%= Erp.Base.Utils.Utils.GetResourcePath(ErpModel.Globals.AppManager.CurrentAppCssResource,true)%>
        <div id="divCtr">
       
        <div id="divRptList">
            <asp:Literal runat="server" ID="ltrLIst" Mode="PassThrough"></asp:Literal>
        </div>
            </div>
         <div class="erp-Field erp-Checkbox _opennew"  style="position1: absolute;    margin-left: 20px;    top: 10px;">
           <div class="entity-check" style="display:inline-block">
             <label>
                <input type="checkbox" onchange="checkChange(this)" id="chkNewWin"> <%= QS("_rspv")=="1"?"<span></span>":""%>
               <label class="chk" for="chkNewWin"></label>
            </div>
            <label  class="_t" for="chkNewWin">Open In New Window</label>  </label>
        </div>
    </form>
    <style>
        .responsive .entity-check .chk {
            display:none;
        }
        .touch ._opennew {
            display:none;
        }
    </style>
    <script>
        var Erp={};
        Erp.ResetTheme = function () {
            $(document.documentElement).removeClass("custom-DarkTheme custom-LightTheme _darkBG compact-form");
            var arr = $(document.documentElement).attr("class").split(' ');
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].indexOf("Theme") > 0)
                    $(document.documentElement).removeClass(arr[i]);
            }
        }
        Erp.ApplyTheme = function (theme,style) {
            if (theme.indexOf("compact-form") > -1) {
                $(document.documentElement).removeClass("compact-form nocompact-form").addClass(theme);
            }
            else{
                Erp.ResetTheme();
                Erp.PageTheme = theme;
                $(document.documentElement).addClass(theme + (theme.toLowerCase().indexOf("dark") > -1 ? " _darkBG" : ""));
                if(!$.isEmpty(style))
                    $(style).appendTo("body");
            }
            if (Erp.DashBoardPage) {
                $("#dashBoardCtr").children().children(".wdg").each(function () {
                    changeWidgetTheme(theme, $(this), true, style);
                })
            }
            else {
                var ifr = $("#ifrDetailsWindow")[0];
                if (ifr && ifr.contentWindow && ifr.contentWindow.Erp && typeof ifr.contentWindow.Erp.ApplyTheme == "function")
                    ifr.contentWindow.Erp.ApplyTheme(theme, style);
            }
        }
        var isResp=<%=HelperLib.Conversion.C.Bool(QS("_rspv")).ToString().ToLower()%>
        if(isResp){
            $(document.documentElement).addClass("responsive");
        }
        function checkChange() {            
            $.DB("rptchkNewWindow", $("#chkNewWin").checked());
        }
        $(function () {
            if(! $(document.documentElement).hasClass("touch"))
            $("#chkNewWin").checked($.DB("rptchkNewWindow"));
        })
        $("#divRptList").on("click", ".rpt-item", function (e) {
            isResp=1//forcing resp
            var url = "Report_viewer.aspx?_ID=" + $(e.target).attr("rptid") + "&Title=" + encodeURIComponent($(e.target).text()) + "&_ns=1&_lu=1"+(isResp?"&_rspv=1":"");
            var newurl = "ui2.aspx?"+(isResp?"_rspv=1&":"")+"u=" + encodeURIComponent(decodeURIComponent(url))
            if ($("#chkNewWin").checked())
                window.open(url)
            else
                parent.toggleDetailsForm(true, newurl);
        })

        
    </script>
</body>
</html>
