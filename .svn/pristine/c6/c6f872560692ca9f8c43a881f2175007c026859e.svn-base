<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="DashboardWidget_List.aspx.cs" Inherits="SensysErp.Meta.DashboardWidget_List" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/modernizr.js")%>

    <%# HelperLib.Web.WebResources.GetResource("~/css/normalize.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/fonts/font.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/CustomControl/CustomControl.css")%>

    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/System.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery-ui-1.10.3.custom.min.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jqHelper.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CustomControls.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/mixit.js")%>
    <script>
        var WidgetList = [];
        var guidList=[]
    </script>
    <style>
     html
        {
            background-color: transparent !important;
        }

        #divCategory
        {
            position: absolute;
            top: 30px;
            bottom: 140px;
            left: 0;
            width: 215px;
            overflow-y: auto;
        }

        #divWidgets
        {
            position: absolute;
            top: 30px;
            bottom: 10px;
            left: 215px;
            right: 10px;
            background-color: #2B2A28;
            padding: 20px;
            overflow-y: auto;
            box-shadow: inset 0px 0px 10px #000;
        }

        .wdg-cat
        {
            display: block;
            padding: 10px 0 10px 15px;
            font-size: 15px;
            color: #DDD;
            font-family: nunitoregular;
            text-transform: uppercase;
            cursor: pointer;
        }

            .wdg-cat.sel
            {
                background-color: #2B2A28;
            }
                
        .wdg
        {
            display: none;
            position: relative;
            vertical-align: middle;
            height: 110px;
            width: 150px;
            border: solid 1px #444;
            cursor: pointer;
            margin: 5px;
        }
        .wdg.sel,
            .wdg:hover
            {
                    background: #3F2C27;
    background: -moz-linear-gradient(-45deg, rgba(63,44,39,1) 0%, rgba(56,43,38,1) 50%, rgba(48,38,34,1) 51%, rgba(77,39,23,1) 100%);
    background: -webkit-gradient(linear, left top, right bottom, color-stop(0%,#3F2C27), color-stop(50%,#382B26), color-stop(51%,#302622), color-stop(100%,#4D2717));
    background: -webkit-linear-gradient(-45deg, #3F2C27 0%,#382B26 50%,#302622 51%,#4D2717 100%);
    background: -o-linear-gradient(-45deg, rgba(63,44,39,1) 0%,rgba(56,43,38,1) 50%,rgba(48,38,34,1) 51%,rgba(77,39,23,1) 100%);
    background: -ms-linear-gradient(-45deg, rgba(63,44,39,1) 0%,rgba(56,43,38,1) 50%,rgba(48,38,34,1) 51%,rgba(77,39,23,1) 100%);
    background: linear-gradient(135deg, #3F2C27 0%,#382B26 50%,#302622 51%,#4D2717 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3f2c27', endColorstr='#4d2717',GradientType=1 );
    border-color: #F9B97F;
    box-shadow: 0 0 10px #F9B97F;
    transition: border-color 1s,box-shadow 1s;
            }

            .wdg.sel:before
            {
                content: "";
                position: absolute;
                right: 0px;
                top: 0px;
                border: solid 15px #F00;
                border-left-color: transparent;
                border-bottom-color: transparent;
                z-index: 1;
            }

            .wdg.sel:after
            {
                content: "\f00c";
                font-family: fontawesome;
                z-index: 2;
                font-weight: normal;
                color: #FFF;
                position: absolute;
                right: 2px;
                top: 2px;
                font-size: 14px;
            }

        .wdg-ico
        {
            font-family: fontawesome;
            font-size: 50px;
            color: #FFF;
            text-align: center;
            padding-top: 10px;
            overflow: hidden;
            height: 70px;
            box-sizing: border-box;
            -moz-box-sizing: border-box;
        }
        .wdg:hover .wdg-ico
        {
            font-size: 118px;
            line-height: 78px;
            transition: all 1s;
        }
        .wdg-title
        {
            display: block;
            text-align: center;
            font-family: nunitoregular;
            font-size: 14px;
            color: #FFF;
            overflow: hidden;
            height: 40px;
            text-transform: capitalize;
        }

        #btnAdd
        {
            position: absolute;
            bottom: 25px;
            left: 25px;
            text-decoration: none;
            font-weight: normal;
            outline: none !important;
            border-radius: 50%;
            border: solid 1px #F16B00;
            padding: 25px;
            color: #F16B00;
            opacity: 0.1;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)";
            transition: all 1s;
        }

            #btnAdd.enabled
            {
                opacity: 1;
                -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
            }

            #btnAdd:before
            {
                content: "\f00c";
                font-family: fontawesome;
                font-size: 45px;
            }

            #btnAdd.enabled:hover
            {
                box-shadow: 0 0 20px #F16B00;
                text-shadow: 0 0 20px #F16B00;
            }
        #spnError {
            position: absolute;
            bottom: 48px;
            left: 19px;
            color: #ffc800;
            font-size: 14px;
            display: block;
            width: 115px;
            text-align: center;
        }
            #spnError:before {
                content: "\f071";
                font-family: fontawesome;
                margin-right: 10px;
                font-size: 18px;
            }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <%= HelperLib.Web.WebResources.GetResource("~/css/base.css")%>
        <%= HelperLib.Web.WebResources.GetResource("~/css/form.css")%>
        <div id="">
            <div id="divCategory">
                <a filter="all" class="wdg-cat sel">All</a>
                <a filter=".cat_chart" class="wdg-cat cat_chart">Charts</a>
                <a filter=".cat_data" class="wdg-cat cat_data">Data</a>
                <a filter=".cat_productivity" class="wdg-cat cat_productivity">Productivity</a>
                <a filter=".cat_others" class="wdg-cat cat_others">Others</a>
            </div>
            <div id="divWidgets">
                
            </div>
            <span id="spnError">Widgets cannot be added to this Dashboard</span>
            <a id="btnAdd" title="Add Selected Widgets" onclick="addWidget(this)" href="javascript:void(0)"></a>
        </div>
    </form>
    <script>
        $(function () {
            checkReadonlyDash();
            $("#divWidgets").on("click", ".wdg", function () {
                var w = $(this);
                w.toggleClass("sel");
                if ($("#divWidgets").children(".sel").length > 0)
                    $("#btnAdd").addClass("enabled");
                else
                    $("#btnAdd").removeClass("enabled");
            });
            $("#divCategory").on("click", ".wdg-cat", function () {
                var btn = $(this);
                if (btn.hasClass("sel"))
                    return;
                btn.parent().children().removeClass("sel");
                btn.addClass("sel");
                $("#divWidgets").mixItUp("filter", $(this).attr("filter"));
            });
            var arr = [];
            for (var i = 0; i < WidgetList.length; i++) {
                var w = WidgetList[i];
                var cat = "cat_" + $.defaultVal(w.Category, "").replace(/[!\"#$%&'\(\)\*\+,\.\/:;<=> \?\@\[\\\]\^`\{\|\}~]/g, '').toLowerCase();
                if (cat != "cat_" && $("#divCategory").children("." + cat).length <= 0)
                    $("#divCategory").append('<a filter=".' + cat + '" class="wdg-cat '+cat+'">' + w.Category + '</a>');
                arr.push('<div widgetid="'+w.Id+'" title="' + w.Title + '" class="wdg ' + cat + '">' +
                            '<div class="wdg-ico">'+w.Icon+'</div>'+
                            '<span class="wdg-title"><span>' + w.Title + '</span></span>' +
                        '</div>');
            }
            $("#divWidgets").html(arr.join(''));
            $("#divWidgets").mixItUp({
                selectors: {
                    target: '.wdg'
                }
            });
            
        });
        function checkReadonlyDash() {
            var d = parent.$("#dashBoardCtr").children(".showDash").eq(0);
            $("#spnError").setDisplay(d.data("readonly"))
            $("#btnAdd").setDisplay(!d.data("readonly"))
        }
        function ResetData() {
            $("#divWidgets").children().removeClass("sel");
            $("#btnAdd").removeClass("enabled");
        }
        function addWidget(a) {
            if (!$(a).hasClass("enabled"))
                return;
            var d = parent.$("#dashBoardCtr").children(".showDash").eq(0);
            if (d.data("readonly")) {
                alert("Dashboard is readonly. Widget Cannot be added here")
                return;
            }
            var arr = [];
            $("#divWidgets").children(".sel").each(function () {
                var id = $(this).attr("widgetid");
                var w = $(WidgetList).filter(function () { return this.Id == id; });
                w = w.length > 0 ? w[0] : null;
                if (w) {
                    var newid = guidList.pop();                    
                    w.WidgetUi = $.defaultVal(w.WidgetUi, "").Replace(w.Uid,newid);
                    w.Uid = newid;
                    arr.push(w);
                }
                //arr.push({ Action: { "Action": "VIEWFORM", "Entity": "tbl_CORE_Contacts", "Form": "", "Title": "", "Params": "", "Location": "Self" } });
            });
            parent.addWidget(arr);
        }
    </script>
</body>
</html>
