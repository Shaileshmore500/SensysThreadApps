<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Fieldbrowser.aspx.cs" Inherits="SensysErp.Meta.Fieldbrowser" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Field Browser</title>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/modernizr.js")%>

    <%# HelperLib.Web.WebResources.GetResource("~/css/normalize.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/fonts/font.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/CustomControl/CustomControl.css")%>


    <%# HelperLib.Web.WebResources.GetResource("~/Css/bluegloss/jquery-ui-1.10.3.custom.css")%>


    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/System.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery-ui-1.10.3.custom.min.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jqHelper.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/UiHelper.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CustomControls.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/moment.min.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Fn.js")%>

    <style>
        #tvCtrEnt
        {
            position: absolute;
            display: none;
            width: 296px;
            height: 295px;
            border: solid 1px #DBD7D7;
            z-index: 10;
            box-shadow: 2px 2px 5px #555;
            overflow-y: auto;
            margin-top: -5px;
            background-color: #FFFFF5;
        }

        #lblOutput
        {
            display: inline-block;
            background-color: #E8E8E8;
            color: #008000;
            width: 500px;
            padding: 10px;
            border: solid 1px #808080;
            border-radius: 5px;
            margin: 15px;
            font-size: 15px;
            font-family: nunitoregular;
            white-space: normal;
            word-break: break-word;
            position: absolute;
            top: 41px;
            left: 319px;
            min-height: 190px;
        }

        #txtEntity
        {
            width: 288px;
            padding: 5px;
            font-size: 14px;
            color: #983434;
            margin-bottom: 5px;
            cursor: pointer;
            border: solid 1px #808080;
        }

            #txtEntity:hover
            {
                background-color: #FFFFEC;
            }

        #rtvList
        {
            border: solid 1px #808080;
        }

        #spnFldDesc
        {
            margin-left: 20px;
            display: block;
            margin-top: 10px;
        }

            #spnFldDesc .Title
            {
                display: block;
                font-family: nunitobold;
                font-size: 18px;
                text-decoration: underline;
                text-transform: capitalize;
            }

            #spnFldDesc .Desc
            {
                margin-left: 25px;
                font-size: 14px;
                display: block;
            }

        #spnFldPath
        {
            font-family: monospace;
            font-size: 14px;
            margin-top: 10px;
            display: inline-block;
            margin-left: 20px;
        }

        #lblEnt
        {
            display: block;
            font-family: nunitobold;
            font-size: 18px;
            text-decoration: underline;
            text-transform: capitalize;
        }

        #lblEntId
        {
            display: block;
            margin-left: 20px;
            font-size: 18px;
        }

        .compact {
            overflow:hidden !important;
        }
            .compact body {
                padding:0 !important;
            }
            .compact #lblOutput {
                display:none !important;
            }
      .scroll {
            overflow-y:auto !important;
            overflow-x:hidden !important;
        }
        .scroll #rtvList {
            height:initial  !important;
            border: none;
        }
    </style>
</head>
<body style="padding: 20px;">
    <form id="form1" runat="server">
        <asp:ScriptManager ID="ScriptManager1" runat="server" EnablePageMethods="true">
        </asp:ScriptManager>
        <%= HelperLib.Web.WebResources.GetResource("~/css/base.css")%>
        <%= HelperLib.Web.WebResources.GetResource("~/css/form.css")%>

        <asp:TextBox ID="txtEntity" Text="Please Select A Table" ToolTip="Click To Select A Table" runat="server" ReadOnly="true"></asp:TextBox>
        <div id="tvCtrEnt">
            <telerik:RadTreeView ID="tvEntity" OnClientNodeClicked="selectEntity" runat="server">
            </telerik:RadTreeView>
        </div>

        <telerik:RadTreeView ID="rtvList" runat="server" Height="450px" Width="300px" OnClientMouseOver="showCopy" OnClientNodePopulating="tvItems_NodePopulate" OnClientDoubleClick="fieldDblClick" OnClientNodeClicked="fieldClick">
            <WebServiceSettings Path="ExprEditor.aspx" Method="GetEntityFields"></WebServiceSettings>

        </telerik:RadTreeView>

        <div id="lblOutput">

            <span id="lblEnt"></span>
            <span id="lblEntId"></span>

            <span id="spnFldDesc"></span>
            <span id="spnFldPath"></span>
        </div>
       
    <div>
    </div>
    </form>
    <script>

        function pageLoad() {
            if ($.defaultVal($.QS("EID"), '') != "") {
                LoadEntityTree();
            }
            LoadMultipleEntityTree();
        }

        $(function () {
            if ($.QS("compact") == "1")
                $(document.documentElement).addClass("compact");
            if ($.QS("scroll") == "1")
                $(document.documentElement).addClass("scroll");
            if ($.QS("mode") == "ChooseEntity") {
                $("#tvCtrEnt").show().css("box-shadow", "none");
                $("#txtEntity").hide();
                $("#lblOutput").hide();
                $("#<%= rtvList.ClientID %>").hide();
                $("body").css({ padding: 0 });
            }
            else if ($.QS("mode") == "ChooseField") {
                $("#tvCtrEnt").hide();
                $("#txtEntity").hide();
                $("#lblOutput").hide();
                $("body").css({ padding: 0 });
                $("#rtvList").css("height", "290px");
            }
            else if ($.defaultVal($.QS("EID"), '') != "") {
                $("#txtEntity").hide();
                $("#lblOutput").hide();                
                //LoadEntityTree();
            }
            else {
                $("#txtEntity").show();
                $("#lblOutput").show();
            }
            $("#<%=txtEntity.ClientID %>").on("click", function (e) {
                toggleEntityTree(e.target); e.stopPropagation();
            })
            $(document).on("click", function () { $("#tvCtrEnt").hide(); })
            $("#tvCtrEnt").on("click", function (e) { e.stopPropagation(); });
            if ($.QS("nobg"))
                $("#tvCtrEnt").css("background-color", "#fff");
        });

            function toggleEntityTree(txt) {
                $(txt).next().show();
            }
            var entityId = "", entityName = "";
            function selectEntity(sender, args) {
                var t = $("#<%=txtEntity.ClientID %>");
                var n = args.get_node();

                if (n.get_level() < 2 && n.get_value() != "None")
                    return;


                if ($.QS("mode") == "ChooseEntity" && !$.isEmpty($.QS("fn"))) {
                    parent[$.QS("fn")](n.get_text(), n.get_value());                   
                    return;
                }
                

                if (n.get_value() == "None") {
                    t.val("");
                    t.removeAttr("entityid");
                }
                else {
                    t.val("");
                    t.val(n.get_text());
                    entityId = n.get_value();
                    entityName = n.get_text();
                    $("#lblEntId").html(entityId);
                    $("#lblEnt").html(entityName);
                    $("#spnFld,#spnFldId,#spnFldDesc,#spnFldPath").html("");
                    LoadEntityTree();
                }
                $("#tvCtrEnt").hide();


            }


            function LoadEntityTree() {
                var tree = $find("<%= rtvList.ClientID %>");
                tree.get_nodes().clear();
                tree.trackChanges();
                var node = new Telerik.Web.UI.RadTreeNode();

                if ($.defaultVal($.QS("EID"), '') != "") {
                    node.get_attributes().setAttribute("ParentTable", $.QS("EID"));
                    node.set_text($.defaultVal( $.QS("ETxt"),"Fields"));
                    node.set_value($.QS("EID"));
                }
                else {
                    node.set_text(entityName);
                    node.set_value(entityId);
                    node.get_attributes().setAttribute("ParentTable", entityId);
                }


                node.set_expandMode(3);


                tree.get_nodes().add(node);
                tree.commitChanges();
                if ($.defaultVal($.QS("EID"), '') != "")
                    $(node.get_element()).find(".rtPlus").eq(0).click()
                if (typeof parent.getTreeNodes == "function") {
                    var arr = parent.getTreeNodes(tree);
                    if (arr) {
                        tree.trackChanges();
                        for (var i = 0; i < arr.length; i++) {
                            var o = arr[i];
                            var n = new Telerik.Web.UI.RadTreeNode();
                            n.set_text(o.text);
                            n.set_value(o.value);
                            tree.get_nodes().add(n);
                        }
                        tree.commitChanges();
                    }
                }
            }

        function LoadMultipleEntityTree() {
            if (typeof parent.getMultipleEntities != "function")
                return;
            var tree = $find("<%= rtvList.ClientID %>");            
             tree.trackChanges();
            

             var arr = parent.getMultipleEntities();
             for (var i = 0; i < arr.length; i++) {
                 var n = arr[i];
                 var node = new Telerik.Web.UI.RadTreeNode();
                 node.get_attributes().setAttribute("ParentTable", n.entity);
                 node.get_attributes().setAttribute("Alias", n.name);
                 node.set_text(n.name);
                 node.set_value(n.entity);
                 node.set_expandMode(3);
                 tree.get_nodes().add(node);
             }
          


             
             tree.commitChanges();
             //$(node.get_element()).find(".rtPlus").eq(0).click()
             
         }
            function tvItems_NodePopulate(sender, args) {
                var node = args.get_node();
                var context = args.get_context();

                context["EntityID"] = node.get_attributes().getAttribute("ParentTable");
            }

            function fieldClick(sender, args) {
                var node = args.get_node();
                var f = getFieldPath(node);
                var f1 = getFieldPathOld(node);
               if ($.QS("mode") == "ChooseField" && !$.isEmpty($.QS("fn"))) {
                   parent[$.QS("fn")](node.get_text(), node.get_value(), f, f1, node.get_attributes().getAttribute("fieldinfoid"));
                    return;
                }
                var inf = $.defaultVal(node.get_attributes().getAttribute("Info"), "").split('|');
                var h = "<span class='Title'>" + node.get_text() + "</span>";
                var eg = "";
                for (var i = 0; i < inf.length; i++) {
                    var c = inf[i].substring(0, inf[i].indexOf(':'));
                    h += "<span class='" + c + "'>"
                    h += inf[i].substring(inf[i].indexOf(':') + 1);
                    h += "</span>"
                }
                $("#spnFldDesc").html(h);

                if (node.get_level() == 0)
                    return;

           
                
                if ($.defaultVal($.QS("EID"), '') != "" && typeof parent.SetLabelFromNode=="function")
                    parent.SetLabelFromNode(f);
                else
                    $("#spnFldPath").html(f);

            }

            function getFieldPath(node) {

                var n = node;
                var f = "";
                while (n.get_level() > 0) {
                    f = $.defaultVal(n.get_value(), "") + "." + f;
                    if (n.get_level() == 0)
                        break;
                    else
                        n = n.get_parent();
                }
                f = f.Trim('.');
                if (f == "")
                    f = node.get_value();
                if (n.get_attributes().getAttribute("Alias"))
                    f = "[" + n.get_attributes().getAttribute("Alias") + "." + f + "]";
                else
                    f = "[Field." + f + "]";
                return f;

            }
            function getFieldPathOld(node) {

                var n = node;
                var tmp = n.get_parent();
                var path = "";
                if (typeof tmp.get_level!="function" || tmp.get_level() == 0)
                    return "";
                while (tmp != null && typeof tmp.get_value != "undefined" ) {
                    path = tmp.get_value() + ":" + tmp.get_attributes().getAttribute("ParentTable") + ">" + path;
                    tmp = tmp.get_parent();
                    if (tmp.get_level() == 0)
                        break;
                }
                path = path.Trim([">", " "]);
                return path;
            }
            function showCopy(s, a) {
                if ($.defaultVal($.QS("EID"), '') != "")
                    return;
                if ($.defaultVal($.QS("dblFn"), '') != "")
                    return;
                if (a.get_node().get_level() == 0)
                    return;
                if (!window.copyPathBtn) {
                    window.copyPathBtn = $("<span  title='Click to copy path' style='position:absolute;display:block;cursor:pointer;left: -19px;top: 1px;font-family:fontawesome;border: solid 2px #FBC07B;padding: 4px;border-radius: 12px;background-color: #FFFCDA;'>&#xf0ea;</span>");
                    window.copyPathBtn.on("click", function (e) {e.stopPropagation();prompt('Field Path', getFieldPath(window.currentCopyNode)); })
                }
                window.currentCopyNode = a.get_node();
                var el = $(a.get_node().get_element());
                el.css("position","relative")
                el.append(window.copyPathBtn);
            }

            function fieldDblClick(sender, args) {
                if ($.defaultVal($.QS("dblFn"), '') == "")
                    return;
                var node = args.get_node();
                var f = getFieldPath(node);
                var f1 = getFieldPathOld(node);
                parent[$.QS("dblFn")](node.get_text(), node.get_value(), f, f1, node.get_attributes().getAttribute("fieldinfoid"));
                return;
            }
    </script>
</body>
</html>
