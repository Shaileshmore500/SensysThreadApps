<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Layout1.aspx.cs" Inherits="SensysErp.Meta.UiDesigner" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/System.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery-ui-1.10.3.custom.min.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jqHelper.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Fn.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CustomControls.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/fonts/font.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Css/bluegloss/jquery-ui-1.10.3.custom.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Css/materialize.min.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/materialize.min.js")%>
    
    
    <%# HelperLib.Web.WebResources.GetResource("~/css/CustomControl/CustomControl.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Css/codemirror.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Css/show-hint.css")%>

    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/UiDesigner.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Css/UiDesigner.css")%>

    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/codemirror.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/css.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/xml.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/htmlmixed.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/javascript.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/closetag.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/closebrackets.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/formatting.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/show-hint.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/css-hint.js")%>
    <title>UI Designer</title>
</head>
<body>
    <form id="form1" runat="server">
        <asp:ScriptManager ID="ScriptManager1" runat="server" EnablePageMethods="true">
        </asp:ScriptManager>
        <%= HelperLib.Web.WebResources.GetResource("~/css/base.css")%>
        <div id="divCtr" style="height: 100%; width: 100%; padding-top: 35px; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;">
            <div id="toolbar"><a title="Save" onclick="Erp.Designer.Save()" class="save"></a><a title="Save As" onclick="Erp.Designer.SaveAs()"   class="saveas"><i></i></a><a 
               title="Undo"  class="undo"></a><a title="Redo" class="redo"></a><a title="Preview" onclick="Erp.Designer.Preview()" class="preview"></a><a 
                   title="Designer" onclick="Erp.Designer.toggleEditor(this)"  class="designer selected"></a><a 
                    onclick="Erp.Designer.toggleEditor(this)"  title="Css" class="css"><i></i></a><a  onclick="Erp.Designer.toggleEditor(this)"  title="Script" class="script"><i></i></a><a  
                        onclick="Erp.Designer.toggleEditor(this)"  title="Server Script"  class="server"><i></i></a></div>
            <telerik:RadSplitter RenderMode="Lightweight" CssClass="page1 designer" Skin="Metro" ID="RadSplitter1" runat="server" Width="100%" Height="100%">
                <telerik:RadPane ID="EndPane" runat="server" Width="22px" Scrolling="None">
                    <telerik:RadSlidingZone DockedPaneId="rspField" ID="Radslidingzone1" runat="server" Width="22px" ClickToOpen="true"
                        SlideDirection="Right">
                        <telerik:RadSlidingPane ID="rspField" OnClientExpanded="rspOnDockEvent" ToolTip="Field" Title="<span class='rspFieldIco _ico'></span>Field" runat="server" Width="165px"
                            MinWidth="100">
                            <div class="fieldList" id="fieldList"></div>
                        </telerik:RadSlidingPane>
                        <telerik:RadSlidingPane ID="rspControls" OnClientExpanded="rspOnDockEvent" ToolTip="Controls" Title="<span class='rspApiIco _ico'></span>Controls" runat="server" Width="165px"
                            MinWidth="130">
                            <div class="specialControls" id="specialControls">
                                <span onclick="$(this).next().slideToggle();$(this).toggleClass('coll')" class="ctl-form">Form</span>
                                <div id="formCtlList"></div>
                                <span onclick="$(this).next().slideToggle();$(this).toggleClass('coll')" class="ctl-spl">Containers</span>
                                <div id="specialCtlList"></div>
                                <span onclick="$(this).next().slideToggle();$(this).toggleClass('coll')" class="ctl-grid">Grid</span>
                                <div id="gridList"></div>
                                <span onclick="$(this).next().slideToggle();$(this).toggleClass('coll')" class="ctl-buttons">Buttons</span>
                                <div id="btnList"></div>
                            </div>
                        </telerik:RadSlidingPane>
                        <telerik:RadSlidingPane ID="rspLabel" OnClientExpanded="rspOnDockEvent" ToolTip="Labels" Title="<span class='rspFieldIco _ico'></span>Labels" runat="server" Width="165px"
                            MinWidth="130">
                            <telerik:RadTreeView OnClientNodeDragging="radNodeDrag" OnClientDoubleClick="radNodeStart" OnClientNodeDragStart="radNodeStart" OnClientNodeDropping="radNodeDrop" EnableDragAndDrop="true" ID="tvRelated"  Style="overflow-x: auto !important" runat="server">
                                <WebServiceSettings Path="UiDesigner.aspx" Method="GetNodes">
                                </WebServiceSettings>
                                <Nodes>
                                </Nodes>
                            </telerik:RadTreeView>
                            <div style="display:none"><span id="rtvRelatedHelper" control-type="Label" ></span></div>                            
                        </telerik:RadSlidingPane>

                    </telerik:RadSlidingZone>
                </telerik:RadPane>
                <telerik:RadSplitBar ID="RadSplitBar2" runat="server">
                </telerik:RadSplitBar>
                <telerik:RadPane ID="MiddlePane1" runat="server" Scrolling="None">
                    <telerik:RadSplitter RenderMode="Lightweight" Skin="Metro" ID="Radsplitter2" runat="server" Orientation="Horizontal" VisibleDuringInit="false">
                        <telerik:RadPane ID="Radpane2" runat="server" Height="22px" Scrolling="none">
                            <telerik:RadSlidingZone ID="Radslidingzone3" runat="server" Height="22px" ClickToOpen="true" SlideDirection="Bottom">
                                <telerik:RadSlidingPane OnClientExpanded="rspOnDockEvent" ID="rspInfo" Title="Info" runat="server" Height="300px">
                                </telerik:RadSlidingPane>
                            </telerik:RadSlidingZone>
                        </telerik:RadPane>
                        <telerik:RadSplitBar ID="Radsplitbar3" runat="server">
                        </telerik:RadSplitBar>
                        <telerik:RadPane ID="rpContainer" runat="server">
                            <div control-type="FormLayout" id="editor-container">
                                <div class="ruler row">
                                    <div class="col s1"><span style="right: inherit; left: -2px;">0</span><span>1</span></div>
                                    <div class="col s1"><span>2</span></div>
                                    <div class="col s1"><span>3</span></div>
                                    <div class="col s1"><span>4</span></div>
                                    <div class="col s1"><span>5</span></div>
                                    <div class="col s1"><span>6</span></div>
                                    <div class="col s1"><span>7</span></div>
                                    <div class="col s1"><span>8</span></div>
                                    <div class="col s1"><span>9</span></div>
                                    <div class="col s1 _d2"><span>10</span></div>
                                    <div class="col s1 _d2"><span>11</span></div>
                                    <div class="col s1 _d2"><span>12</span></div>
                                </div>
                                <div id="editor-content" tabindex="1">
                                        <asp:Literal ID="layoutContent" runat="server" Mode="PassThrough"></asp:Literal>
                                </div>
                            </div>
                        </telerik:RadPane>
                    </telerik:RadSplitter>
                </telerik:RadPane>
                <telerik:RadSplitBar ID="RadSplitBar1" runat="server">
                </telerik:RadSplitBar>
                <telerik:RadPane ID="RadPane1" runat="server" Width="22px" Scrolling="None">
                    <telerik:RadSlidingZone ID="Radslidingzone2" runat="server" Width="22px" ClickToOpen="true"
                        SlideDirection="Left">
                        <telerik:RadSlidingPane OnClientExpanded="rspOnDockEvent" ID="rspProps" Title="Properties" runat="server" Width="300px"
                            MinWidth="50">
                            <div id="PropertyList" class="browser-default PropertyList" spellcheck="false"><select style="width: 100%;display: inline-block;padding: 5px;height: initial;box-sizing: border-box;font-size: 14px;" class="browser-default"></select><div class="_inner"></div></div>
                        </telerik:RadSlidingPane>
                        <telerik:RadSlidingPane OnClientExpanded="rspOnDockEvent" ID="rspOutline" Visible="false" Title="Document Outline" runat="server" Width="300px"
                            MinWidth="50">
                            <div id="divOutline"  spellcheck="false"></div>
                        </telerik:RadSlidingPane>
                    </telerik:RadSlidingZone>
                </telerik:RadPane>
            </telerik:RadSplitter>
            
            <div id="divCss" runat="server" class="page1 css" style="top:40px;left: 10px; right: 10px; bottom: 10px;display: none; -moz-box-sizing: border-box;-webkit-box-sizing: border-box;-ms-box-sizing: border-box;box-sizing: border-box;">
                <div style="height: 100%">
                    <asp:TextBox ID="txtCss" runat="server" Width="635" Height="250" Text=".docHTML{}  .docBody{}" TextMode="Multiline" Rows="3"> </asp:TextBox>
                </div>
            </div>
            <div id="divScript" runat="server" class="page1 script" style="display: none; -moz-box-sizing: border-box;-webkit-box-sizing: border-box;-ms-box-sizing: border-box;box-sizing: border-box;">
               <div style="height: 100%;"><iframe  id="ifrExprEditor" scrolling="no" runat="server" frameborder="0" style="height:100%;width:100%"></iframe></div>
                <div style="display:none">              
                    <asp:TextBox ID="txtScript" CssClass="txtScript" runat="server" Width="635" Height="250" Text="" TextMode="Multiline" Rows="3"> </asp:TextBox>
                </div>
            </div>
            <div id="divServerScript" runat="server" class="page1 server" style="display: none; -moz-box-sizing: border-box;-webkit-box-sizing: border-box;-ms-box-sizing: border-box;box-sizing: border-box;">
            <div style="height: 100%;"><iframe  id="ifrServerExprEditor" scrolling="no" runat="server" frameborder="0" style="height:100%;width:100%"></iframe></div>
            <div style="display:none">              
                <asp:TextBox ID="txtServerScript" CssClass="txtServerScript" runat="server" Width="635" Height="250" Text="" TextMode="Multiline" Rows="3"> </asp:TextBox>
            </div>
        </div>
            <div id="divSaveAs" style="position:absolute;display:none" class="formSettings">
                <span class="row">
                    <span class="lbl">Name</span>
                    <input class="txt browser-default" type="text" id="txtSaveAs_Name" />
                </span>
                <span class="row">
                    <span class="lbl">Key</span>
                    <input class="txt browser-default" type="text" id="txtSaveAs_Key" />
                </span>
                <a href="javascript:void(0)" onclick="Erp.Designer.Save();$('#divSaveAs').HideModal();" class="mdl-button GreenButton">Save</a><a href="javascript:void(0)" onclick="$('#divSaveAs').HideModal();" class="mdl-button RedButton">Cancel</a>
            </div>
            <div id="ctlDragContainer" style="position: absolute; width: 150px" class="specialControls fieldList" style="">
            </div>
          
        </div>
    </form>
    <style>
        html {
            overflow:hidden;
        }
        .rspRotatedTabText1
        {
            line-height: 22px !important;
            transform: rotate(0deg) !important;
            writing-mode: vertical-rl !important;
            transform-origin: initial !important;
        }

        .rspPaneTabContainer
        {
            height: auto !important;
        }

        #RAD_SLIDING_PANE_CONTENT_rspVar
        {
            background-color: #fdfde9;
        }

        .RadSplitter .rspPaneTabText
        {
            font-size: 13px;
            font-family: sans-serif;
            letter-spacing: 1px;
        }

        .rspSlideTitle ._ico
        {
            margin-right: 5px;
        }

        ._ico
        {
            writing-mode: horizontal-tb;
        }

            ._ico:before
            {
                content: "\f0e8";
                font-family: FontAwesome;
                font-weight: normal;
            }

        .rspFieldIco:before
        {
            content: "\f0e8";
        }

        .rspFnIco:before
        {
            content: "f";
            font-style: italic;
            font-family: monospace;
            font-weight: bold;
        }

        .rspApiIco:before
        {
            content: "\f1b3";
        }

        .rspSettingIco:before
        {
            content: "\f132";
        }

        .rspSessionIco:before
        {
            content: "\f02e";
        }
        #rpContainer
        {
            position:relative;
        }
        #RAD_SLIDING_PANE_CONTENT_rspProps {
            overflow-x:hidden !important;
            overflow-y:auto !important;
        }
        .RadSplitter .rspPaneTabText.rspRotatedTabText {
            transform: rotate(0deg) !important;
        }
    </style>
    <script>
        Erp.Designer.LayoutType = "<%=LayoutType%>";
        if ("<%=LayoutType%>" == "Grid") {
            $("#rtvRelatedHelper").attr("control-type", "GridColumn")
        }
        function rspOnDockEvent(sender, args) {
            return;
            var id = sender.get_id();
            var sl = $find("<%=Radslidingzone1.ClientID%>");
            if (sl.get_dockedPaneId()) {
                sl.CollapsePane(sl.get_dockedPaneId());
            }
            //sl.DockPane(id);   
            sender._dockElement_OnMouseDown({});
        }

       
        function radNodeStart(sender, args) {
            var n = args.get_node();
            if (args.get_domEvent().type != "dblclick") {
                if (n.get_expandMode() / 1 > 0) {
                    //args.set_cancel(true); return;
                }
            }

            var f = "";
           
            while (n.get_level() >= 0) {
                f = $.defaultVal(n.get_attributes().getAttribute("FieldName"), "") + "." + f;
                if (n.get_level() == 0)
                    break;
                else
                    n = n.get_parent();
            }
            f = f.Trim('.');
            f = "Field." + f;
            console.log(f)
            n = args.get_node();
            var tmp = n.get_parent();
            var path = "";
            if (args.get_node().get_attributes().getAttribute("IsMultiCSV") == "1")
                tmp = tmp.get_parent();
            while (tmp != null && typeof tmp.get_value != "undefined") {
                path = tmp.get_attributes().getAttribute("FieldName") + ":" + tmp.get_attributes().getAttribute("SourceTable") + ">" + path;
                tmp = tmp.get_parent();
            }
            path = path.Trim([">", " "]);

            var IsWorkflow =n.get_attributes().getAttribute("IsWorkflow");
            if (IsWorkflow == "1" && n.get_attributes().getAttribute("IsParent") == "1")
                return;
            
            var nodeHelper = $("#rtvRelatedHelper");
            if (IsWorkflow == "1") {
                path = "";
                nodeHelper.data("@WFCode", n.get_attributes().getAttribute("ParentTable"));
            }
            nodeHelper.attr("fid", n.get_value());
            nodeHelper.html(n.get_text())
            nodeHelper.data("@Label", n.get_text());
            nodeHelper.data("@Value", n.get_value());
            nodeHelper.data("@FieldName", n.get_attributes().getAttribute("FieldName"));
            nodeHelper.data("@FieldID", n.get_value());
            nodeHelper.data("@EntityPath", path);
            nodeHelper.data("@FieldPath", f);
            if (args.get_domEvent().type == "dblclick")
                Erp.Designer.AppendControl(nodeHelper, $("#editor-content").children(".erp-Grid").children(".gridBody").children(".col-ctr").addClass("allEdge"), null);
        }
        function radNodeDrag(sender, args) {
            var e = args.get_domEvent();
            e.target = $("#rtvRelatedHelper")[0]; e.srcElement = $("#rtvRelatedHelper")[0];
            e.pageX = e.clientX + $(document).scrollLeft(); e.pageY = e.clientY + $(document).scrollTop();
            Erp.Designer.DragDrop.findValidDropZone(e, { helper: $("") });
            if (e.clientY < 20)
                window.scrollBy(0, -2);
            else if ($(window).height() - e.clientY <= 20)
                window.scrollBy(0, 2);
        }
        function radNodeDrop(sender, args) {
            var e = args.get_domEvent();
            e.target = $("#rtvRelatedHelper")[0]; e.srcElement = $("#rtvRelatedHelper")[0];
            e.pageX = e.clientX + $(document).scrollLeft(); e.pageY = e.clientY + $(document).scrollTop();
            Erp.Designer.DragDrop.dragStop(e, { helper: $("") });
        }
       
    </script>
    <script>
        $(function () {
            $('#lboScripts').chosen({ width: '500px', placeholder_text_multiple: 'Select Javascript files to be included' });
            $('#lboCss').chosen({ width: '500px', placeholder_text_multiple: 'Select Css files to be included' });
            $("#ddlTemplates").chosen({ disable_search: true, width: "250px", allow_single_deselect: true });
            Erp.Designer.InitEditor();

        });
        function pageLoad() {
            Erp.Designer.LayoutLoaded();
        }
    </script>
</body>
</html>
