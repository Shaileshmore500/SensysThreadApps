<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Layout.aspx.cs" Inherits="SensysErp.Layout" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Layout Designer</title>
    
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/modernizr.js")%>

    <%# HelperLib.Web.WebResources.GetResource("~/css/normalize.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/fonts/font.css")%>   
    <%# HelperLib.Web.WebResources.GetResource("~/Css/bluegloss/jquery-ui-1.10.3.custom.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/CustomControl/CustomControl.css")%>
   

   
   
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/System.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery-ui-1.10.3.custom.min.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jqHelper.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/UiHelper.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CustomControls.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/moment.min.js")%>

     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/layout.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/css/layout2.css")%>

    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Css/codemirror.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Css/show-hint.css")%>

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



    <script>


        var validDrop = false;

        Editors = {};
        var VariablesList=[];
        var SSVariablesList=[];
        function showPreview() {
            var data = new Object();
            data["Type"] = "PreviewLayout";
            data["@Xml"] = getLayoutXml();
            PageMethods.Execute(data, null, null, PageMethodSuccess, PageMethodError);
        }

        function manageViews() {
            //var v = { ViewID: "10", Type: "TBL_EMPLOYEEQUALIFICATION", ViewName: "Qualification new", Cols: [{ Title: "Qualification new", EntityPath: "", Name: "7", Width: 250 }, { Title: "Description new", EntityPath: "", Name: "8", Width: 200 }, { Title: "Period", EntityPath: "", Name: "9", Width: 150 }] };
            // addToViewList(v);
            // v = { ViewID: "11", Type: "TBL_TESTTABLE", ViewName: "Test Filter", Cols: [{ Title: "FK_@ForeignTable", Name: "7", Width: 250 }, { Title: "Testfld", Name: "8", Width: 200 }] };
            //  addToViewList(v);
            window.open("Layout_Grid.aspx?EID=" + $('#txtGridEnt').attr("entityid")+ "&Module=" + $.QS("Module") + "&FromLayout=1");
        }

        function addToViewList(v) {
            viewList.push(v);
            reloadViewList(v.Type);
            $("#cboViews").val(v.ViewID).trigger("chosen:updated");
            reloadColChks(v.ViewID);
        }



        function saveForm() {
            $("#formProperties").data("Mode", "Save");
            if ($.isEmpty(LayoutID)) {
                $("#formProperties").ShowModal().css("top", "100px");
            }
            else
                saveLayout();
        }
        function saveAsForm() {
            $("#formProperties").data("Mode", "SaveAs").ShowModal().css("top", "100px");
        }
        function showProps() {
            $("#formProperties").data("Mode", "Save").ShowModal().css("top", "100px");
        }
        var nodeHelper; var currentTreeNode;
        function radNodeStart(sender, args) {
            var n = args.get_node();
            if (n.get_expandMode() / 1 > 0) {
                args.set_cancel(true); return;
            }
            var tmp = n.get_parent();
            var path = "";
            while (tmp != null && typeof tmp.get_value != "undefined") {
                path = tmp.get_attributes().getAttribute("FieldName") + ":" + tmp.get_value() + ">" + path;
                tmp = tmp.get_parent();
            }
            path = path.Trim([">", " "]);
            currentTreeNode = n;
            nodeHelper = $(n.get_element());
            if (!nodeHelper.data("PropSet")) {
                _cloneAttr(nodeHelper, $("#RelatedField").data());
                nodeHelper.data("PropSet", true);
                nodeHelper.data("@FieldName", n.get_value());
                nodeHelper.data("@EntityPath", path);
            }
        }
        function radNodeDrag(sender, args) {
            var e = args.get_domEvent();
            e.target = nodeHelper[0];
            e.pageX = e.clientX + $(document).scrollLeft(); e.pageY = e.clientY + $(document).scrollTop();
            highlightItem(e, { helper: $("") });

            if (e.clientY < 20)
                window.scrollBy(0, -2);
            else if ($(window).height() - e.clientY <= 20)
                window.scrollBy(0, 2);
        }
        function radNodeDrop(sender, args) {
            var e = args.get_domEvent();
            e.target = nodeHelper[0];
            e.pageX = e.clientX + $(document).scrollLeft(); e.pageY = e.clientY + $(document).scrollTop();
            dragStop(e, { helper: $("") });
        }

        layoutLockData={locked:-1,lockOwner:0};
    </script>

    <style>
        .document:before
        {
            content: "\f15c";
            font-family: fontawesome;
            margin-right: 3px;
        } 
        .document:hover
        {
            color:red;
        }
        #divConsole
        {
            position: absolute;
            left: 0px;
            top: 0;
            width: 750px;
            height: 55px;
            background-color: #EFEFEF;
        }

        .reorder-arrow
        {
            height: 26px;
            width: 4px;
            display: inline-block;
            background-color: red !important;
            position: relative;
            vertical-align: middle;
        }

        .CodeMirror
        {
            border: 2px solid #3EA1EA;
            width: 100%;
            height: 100%;
        }

        #divSet3 .CodeMirror
        {
            height: 250px;
        }

        .CodeMirror.codeDisable
        {
            background-color: #EFEFEF;
        }

            .CodeMirror.codeDisable span
            {
                color: #B0B0B0 !important;
                text-shadow: 1px 1px 1px #FFF;
            }

        .cm-m-css.cm-builtin,
        .cm-m-css.cm-qualifier
        {
            color: #480303;
        }

        .cm-m-css.cm-property
        {
            color: #f00;
        }

        .cm-m-css.cm-number,
        .cm-m-css.cm-variable,
        .cm-m-css.cm-keyword
        {
            color: #001dff;
        }

        .cm-m-javascript.cm-comment
        {
            color: #0F940F;
        }

        .lblTitle
        {
            display: inline-block;
            background-color: #1C4D76;
            width: 100px;
            text-indent: 10px;
            color: #FFF;
            -webkit-border-top-right-radius: 50px;
            -moz-border-radius-topright: 50px;
            border-top-right-radius: 50px;
        }

        #btnVarList
        {
            position: absolute;
            right: 18px;
            color: #F00;
            margin-top: -21px;
            font-size: 14px;
            font-family: nunitoregular;
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
            margin-top: -2px;
            background-color: #FFFFF5;
            left: 145px;
        }
        .cellInput
        {
            border: solid 1px #EBE7E7;
            font-weight: normal;
            background-color: #FFF;
            resize: none;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            width: 218px;
            font-family: nunitoregular;
            outline: 0;
            font-size: 13px;
            padding: 2px 5px;
        }

        .cellSelect
        {
            width: 62px;
            padding: 2px;
            border-color: #EBE7E7;
        }

        .close
        {
            font-family: sans-serif;
            cursor: pointer;
            display: inline-block;
            height: 14px;
            width: 14px;
            border-radius: 8px;
            color: #9B9B9B;
            font-size: 11px;
            border: solid 1px #E4E1E1;
            text-decoration: none;
            text-align: center;
            vertical-align: middle;
            margin-left: 8px;
            line-height: 15px;
            text-indent: 0;
        }
            .close:hover
            {
                color:red;
            }
        .cellBtn
        {
            margin: 3px 5px;
            font-size: 14px;
            color: #CF6813;
        }

            .cellBtn:hover
            {
                color: red;
            }

        .divQuery
        {
            position: absolute;
            z-index: 3500;
            padding-left: 5px;
            padding-top: 0px;
            top: 150px;
            left: 0;
            display: none;
            height: 450px;
            width: 845px;
        }
        .mrgCell        
        {
            position: absolute;
font-size: 14px;
z-index: 2500;
color: #F00;
margin-left: 10px;
background-color: #FFF;
border: solid 1px #F00;
padding: 2px 5px;
        }

         .SpnIcon
        {
            font-family: fontawesome !important;
            display: inline-block !important;
            line-height: 38px !important;
            font-size: 28px !important;
            font-weight: normal !important;
            height: 35px !important;
            width: 35px !important;
            color: #000;
            text-align: center !important;
            text-decoration: none !important;
            border: solid 1px #989898  !important;
        }

            .SpnIcon:hover
            {
                border: solid 1px red !important;
            }
             .divIcons
        {
            width: 550px !important;
            height: 510px !important;
            top: 150px;
        }
        .ui-autocomplete
        {
            z-index: 9999 !important;
            font-size: 12px;
        }
            .ui-autocomplete.ui-menu .ui-menu-item a
            {
                color: #1a1ad0;
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

        #btnLock {
            font-family: fontawesome;
            font-size: 24px;
            position: absolute;
            right: 7px;
            top: 5px;
            color: #fff;
            text-decoration: none;
            opacity: 0.5;
            outline:none !important;
        }
        #btnLock:before {
            content:"\f13e";
        }
            #btnLock.lock {
                opacity: 1;
                color: #05fff5;
                text-shadow: 0 0 5px #02ffe8;
            }
        #btnLock.lock:before {
            content:"\f023";
        }
         #btnLock.lock.otherlock {
            opacity: 1;
            color: #ff0000;
            text-shadow: 2px 2px 30px #ffffff;
            font-size: 32px;
            top: 0px;
        }
    </style>

</head>
<body>
    <form id="form1" runat="server">
        <asp:ScriptManager runat="server" EnablePageMethods="true">
        </asp:ScriptManager>
           <%= HelperLib.Web.WebResources.GetResource("~/css/base.css")%>
        <div class="tabBar">
            <a class="tabs selected" onclick="toggleSettingPanel(this,'generalSettings')" href="javascript:void(0)">General</a><a
                class="tabs" id="tabInsert" runat="server" onclick="toggleSettingPanel(this,'specialControls')" href="javascript:void(0)">Insert</a><a
                    class="tabs" id="tabLayout" runat="server" onclick="toggleSettingPanel(this,'layoutSettings','Layout')" href="javascript:void(0)">Layout</a><a 
                        class="tabs" id="tabScript" runat="server" onclick="toggleSettingPanel(this,'','Script')" href="javascript:void(0)">Script</a><a 
                            class="tabs" id="tabServer" runat="server" onclick="toggleSettingPanel(this,'','ServerScript')" href="javascript:void(0)">Server Script</a><a
                                 class="tabs" id="tabCss" runat="server" onclick="toggleSettingPanel(this,'','Css')" href="javascript:void(0)">Css</a>
            
            <a href="javascript:void(0)" onclick="saveForm()"  id="lbnSave2"  style="visibility: hidden" title="Save" class="save"></a><a
                href="javascript:void(0)" onclick="showPreview()" style="visibility: hidden" title="Preview" class="preview"></a>
            <asp:Label runat="server" ID="lblTitle" class="title">New Layout</asp:Label>
            <a id="btnLock" href="javascript:void(0)" title="Toggle Lock" onclick="toggleLock(this)"></a>
        </div>
        <div id="generalSettings" class="specialControls">
            <div onclick="saveForm()" id="lbnSave" runat="server" title="Save" class="special save">
                <span></span>
            </div><div id="lbnSaveAs" runat="server" title="Save As" onclick="saveAsForm()"
                class="special saveas">
                <span></span>
            </div><div onclick="showProps()"
                class="special property" title="Properties">
                <span></span>
            </div><div onclick="showPreview()" title="Preview"
                class="special preview">
                <span></span>
            </div><div title="Close" onclick="window.close()" 
                class="special close1">
                <span></span>
            </div>

        </div>
        <div style="display: none" id="layoutSettings">
            <table cellpadding="5" style="">
                <tr>
                    <td style="padding-right: 20px">
                        <span class="entity-check">
                            <label for="chk1">
                                Show Header 
                            </label>
                            <input checked id="chk1" onclick="togglePane(this, 'header')" type="checkbox" /><label class="chk" for="chk1"></label></span>
                    </td>
                    <td style="padding-right: 20px">
                        <span class="entity-check">
                            <label for="chk2">
                                Show Footer 
                            </label>
                            <input checked id="chk2" onclick="togglePane(this, 'footer')" type="checkbox" /><label class="chk" for="chk2"></label></span>
                    </td>

                    <td style="padding-right: 20px">
                        <span class="entity-check">
                            <label for="chk3">
                                Show Right Pane
                            </label>
                            <input id="chk3"  onclick="togglePane(this, 'right')" type="checkbox" /><label class="chk" for="chk3"></label></span>
                    </td>
                    <td style="padding-right: 20px">
                        <span class="entity-check">
                            <label for="chk4">
                                Show Left Pane 
                            </label>
                            <input id="chk4"  onclick="togglePane(this, 'left')" type="checkbox" /><label class="chk" for="chk4"></label></span>
                    </td>
                    <td style="padding-right: 20px">
                        <span class="entity-check">
                            <label for="chk5">
                               Fixed Layout
                            </label>
                            <input id="chk5"  onclick="setLayout(this)" type="checkbox" /><label class="chk" for="chk5"></label></span>
                    </td>
                    <td style="padding-right: 20px">
                        <span class="entity-check">
                            <label for="chk6">
                               Resize Header
                            </label>
                            <input id="chk6"  onclick="setLayout(this)" type="checkbox" /><label class="chk" for="chk6"></label></span>
                    </td>
                    <td style="padding-right: 20px">
                        <span class="entity-check">
                            <label for="chk7">
                               Resize Footer
                            </label>
                            <input id="chk7"  onclick="setLayout(this)" type="checkbox" /><label class="chk" for="chk7"></label></span>
                    </td>
                    <td style="padding-right: 20px">
                        <span class="entity-check">
                            <label for="chk8">
                               Resize Left
                            </label>
                            <input id="chk8"  onclick="setLayout(this)" type="checkbox" /><label class="chk" for="chk8"></label></span>
                    </td>
                    <td style="padding-right: 20px">
                        <span class="entity-check">
                            <label for="chk9">
                               Resize Right
                            </label>
                            <input id="chk9"  onclick="setLayout(this)" type="checkbox" /><label class="chk" for="chk9"></label></span>
                    </td>
                </tr>
            </table>

            <span style="display: none">

                <input onclick="toggleFixPane(this, 'header')" type="checkbox" /><span>Fix Header</span>&nbsp;&nbsp;&nbsp;
        <input onclick="toggleFixPane(this, 'footer')" type="checkbox" /><span>Fix Footer</span>&nbsp;&nbsp;&nbsp;
        <input onclick="toggleFixPane(this, 'right')" type="checkbox" /><span>Fix Right</span>&nbsp;&nbsp;&nbsp;
        <input onclick="toggleFixPane(this, 'left')" type="checkbox" /><span>Fix Left</span>&nbsp;&nbsp;&nbsp;
            </span>
        </div>
        <div id="specialControls" style="display: none" class="specialControls">
        </div>
        <div class="optionsMenu" id="divOptionMenu" style="display: none">
            <a title="Settings" onclick="toggleFieldOptions(this)" href="javascript:void(0)"
                class="settings"></a><a onclick="deleteField(this)" title="Delete" href="javascript:void(0)"
                    class="close"></a>
        </div>

        <asp:Panel runat="server" ID="pagePanel" class="page ContentPane" Style=""><asp:Literal 
            EnableViewState="false" ID="layoutContent" runat="server" Mode="PassThrough"></asp:Literal>
        </asp:Panel>
        <div id="divLayout" runat="server" class="page1" style="top:75px;left: 10px; right: 10px; bottom: 10px;display: none; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; -ms-box-sizing: border-box; box-sizing: border-box;">
            <span style="font-family: nunitoregular; font-size: 16px; text-decoration: underline; color: #00178A;">Css files to be included with this layout</span><br />
            <span style="display: inline-block; margin: 5px 0 10px 60px">
                <asp:ListBox data-placeholder="Choose Css files" SelectionMode="Multiple" ID="lboCss" runat="server"></asp:ListBox></span><br />
            <span style="font-family: nunitoregular; font-size: 16px; text-decoration: underline; color: #00178A;">Javascript files to be included with this layout</span><br />
            <span style="display: inline-block; margin: 5px 0 10px 60px">
                <asp:ListBox data-placeholder="Choose Script files" SelectionMode="Multiple" ID="lboScripts" runat="server"></asp:ListBox></span><br />
            <span style="font-family: nunitoregular; font-size: 16px; text-decoration: underline; color: #00178A;">Choose a html template or directly modify the html source here</span><br />
            <span style="display: inline-block; margin:5px 0 10px 100px">
                <asp:DropDownList data-placeholder="No Html Template Selected" onchange="ToggleEditors('txtLayout',$(this).prop('selectedIndex')==0)" ID="ddlTemplates" runat="server"></asp:DropDownList>
            </span>
            <div id="edtCenter" style="height: 83%">
                <span class="lblTitle">Html Source</span>
                <asp:TextBox ID="txtLayout" Text="<PAGE>  <HEADER>    <!--HEADERCONTENT-->  </HEADER>  <MIDDLE>    <LEFT>      <!--LEFTCONTENT-->    </LEFT>    <CENTER>      <!--CENTERCONTENT-->    </CENTER>    <RIGHT>      <!--RIGHTCONTENT-->    </RIGHT>  </MIDDLE>  <FOOTER>    <!--FOOTERCONTENT-->  </FOOTER></PAGE>" runat="server" Width="635" Height="250" TextMode="Multiline" Rows="3"> </asp:TextBox>
            </div>
        </div>
        <div id="divCss" runat="server" class="page1" style="top:40px;left: 10px; right: 10px; bottom: 10px;display: none; -moz-box-sizing: border-box;-webkit-box-sizing: border-box;-ms-box-sizing: border-box;box-sizing: border-box;">
            <div style="height: 100%">
                <asp:TextBox ID="txtCss" runat="server" Width="635" Height="250" Text=".docHTML{}  .docBody{}" TextMode="Multiline" Rows="3"> </asp:TextBox>
            </div>
        </div>
        <div id="divScript" runat="server" class="page1" style="display: none; -moz-box-sizing: border-box;-webkit-box-sizing: border-box;-ms-box-sizing: border-box;box-sizing: border-box;">
           <div style="height: 100%;"><iframe  id="ifrExprEditor" runat="server" frameborder="0" style="height:100%;width:100%"></iframe></div>
            <div style="display:none">              
                <asp:TextBox ID="txtScript" CssClass="txtScript" runat="server" Width="635" Height="250" Text="" TextMode="Multiline" Rows="3"> </asp:TextBox>
            </div>
        </div>
        <div id="divServerScript" runat="server" class="page1" style="display: none; -moz-box-sizing: border-box;-webkit-box-sizing: border-box;-ms-box-sizing: border-box;box-sizing: border-box;">
            <div style="height: 100%;"><iframe  id="ifrServerExprEditor" runat="server" frameborder="0" style="height:100%;width:100%"></iframe></div>
            <div style="display:none">              
                <asp:TextBox ID="txtServerScript" CssClass="txtServerScript" runat="server" Width="635" Height="250" Text="" TextMode="Multiline" Rows="3"> </asp:TextBox>
            </div>
        </div>
      
        <div id="fieldList" class="fieldList" style="">
            <h3 class="hdr" >Insert Fields</h3>
            <div id="flds" >
            </div>
            <h3 class="hdr">Insert Grid</h3>
            <div id="grd" >
            </div>
            <h3 class="hdr" >Insert Buttons</h3>
             <div id="btns" >
            </div>
            <h3 class="hdr" >Related Fields</h3>
            <div id="reltd" >
               <telerik:RadTreeView OnClientNodeDragging="radNodeDrag" OnClientNodeDragStart="radNodeStart" OnClientNodeDropping="radNodeDrop" EnableDragAndDrop="true" ID="tvRelated" Width="150px" Style="overflow-x: auto !important" runat="server">
                    <WebServiceSettings Path="layout.aspx" Method="GetNodes">
                    </WebServiceSettings>
                    <Nodes>
                    </Nodes>
                </telerik:RadTreeView>
            </div>
        </div>
        <div id="fieldListHelper" style="position: absolute; width: 150px" class="specialControls fieldList" style="">
        </div>

        <div class="formSettings" style="position: absolute; left: -500px; width: 450px; min-height: 450px; padding-bottom: 45px; padding-top: 30px" id="divSettings">
            <span style="font-family: nunitolight; font-size: 22px;margin-top: -20px;display: inline-block; color: #881600;" id="spnTitle"></span>
            <div id="divSettingsTab" style="min-height: 415px; position: relative">
                <ul>
                    <li id="tabGeneral"><a href="#divSet1">General</a></li>
                    <li id="tabEvents"><a href="#divSet2">Events</a></li>
                    <li id="tabRender"><a href="#divSet3" onclick="window.setTimeout(function(){ autoFormatEditor('txtFieldRender');},100)">Rendering</a></li>
                </ul>
                <div id="divSet1">
                   <div class="row">
                            <span class="lbl" style="width:110px">Html ID : </span>
                            <input class="txt" id="txtFieldId" type="text" />
                        </div>
                    <div id="divFieldOtherProps">
                        
                         <div class="row">
                        <span class="lbl" style="width:110px">Label For : </span>
                        <a id="lnkForField" href="javascript:void(0)"  onclick="showFieldSelection(this)" style="color: #120CFF;" class="default-link" >Please Select</a>
                        <a title="Clear Title" onclick="$(this).prev().html('Please Select').removeData('FieldID');$('#txtFieldTitle').closest('.row').show();$('#txtFieldTooltip').closest('.row').show();" href="javascript:void(0)" class="close">x</a>
                    </div>
                        <div class="row">
                            <span class="lbl" style="width:110px">
                                <input type="checkbox" title="override default title" onclick='$(this).closest(".row").find(".txt").setEnable($(this).checked(),true)' id="chkFieldTitle" />
                                Title : </span>
                            <input class="txt" id="txtFieldTitle" type="text" /><a title="Clear Title" onclick="$(this).prev().setEnable(true).val('');$('#chkFieldTitle').checked(true)" href="javascript:void(0)" class="close">x</a>
                        </div>
                        <div class="row">
                            <span class="lbl" style="width:110px">
                                <input type="checkbox" title="override default tooltip" onclick='$(this).closest(".row").find(".txt").setEnable($(this).checked(),true)' id="chkFieldTooltip" />Tooltip : </span>
                            <textarea class="txt" id="txtFieldTooltip"></textarea>
                        </div>
                         <div class="row">
                            <span class="lbl" style="width: 115px">
                                <input type="checkbox" title="override default icon" onclick='$(this).closest(".row").find(".default-link,.SpnIcon").setEnable($(this).checked(),true)' id="chkIcon" />
                                <a href="javascript:void(0)"  onclick="showIconList(this)" style="color: #120CFF;" class="default-link" style="" >Choose Icon : </a></span>
                            <input maxlength="1" type="text" class="SpnIcon"
                            style="vertical-align: middle; display: inline-block"
                            id="spnIcon" runat="server" value=""/>
                        </div>
                        <div class="row">
                            <span class="lbl" style="width:110px">Url : </span>
                            <textarea class="txt" id="txtUrl"></textarea>
                        </div>
                        <div class="row">
                            <span class="lbl" style="width:110px">Choose Field : </span>
                            <asp:DropDownList runat="server"  id="ddlDocField"><asp:ListItem Text="Please Select" Value=""></asp:ListItem></asp:DropDownList>
                        </div>
                        <div class="row">
                            <span class="lbl" style="width:110px">Label Position</span>
                            <select id="cboLabelPosition">
                                <option value="">Label Before Input</option>
                                <option value="afterInput">Label After Input</option>
                                <option value="aboveInput">Label Above Input</option>
                                <option value="belowInput">Label Below Input</option>
                                <option value="floatingLabel">Floating Label</option>
                            </select><br />
                        </div>

                        <div class="row">
                            <span class="lbl" style="width:110px">Text Align</span>
                            <select id="cboTextAlign">
                                <option></option>
                                <option selected value="Left">Left</option>
                                <option value="Center">Center</option>
                                <option value="Right">Right</option>
                            </select><br />
                        </div>
                        <div class="row">
                            <span class="lbl" style="width:110px">Dock</span>
                            <select id="cboDock">
                                <option></option>
                                <option selected value="Left">Left</option>
                                <option value="Right">Right</option>
                            </select><br />
                        </div>
                        <div class="row">
                            <span class="lbl" style="width:110px">Width</span>
                            <select id="cboWidth">
                                <option></option>
                                <option selected value="1x">Default</option>
                                <option value="2x">Stretch</option>
                                <option value="0x">Auto</option>
                            </select><br />
                        </div>
                        <div class="row">
                            <span class="lbl" style="width:110px">Height</span>
                            <select onchange="$('#txtFixHeightCtr').setDisplay($(this).val()=='Fix')" id="cboHeight">
                                <option></option>
                                <option selected value="">Not-Set</option>
                                <option value="Fit">Fit Content</option>
                                <option value="Fix">Fixed Height</option>
                            </select><span id="txtFixHeightCtr" style="display: none"><input type="text" id="txtFixHeight" style="margin-left: 10px; width: 30px" />
                                px</span><br />
                        </div>
                        <span class="row">

                            <span style="width:110px" class="lbl">Show Borders</span><span class="entity-check small"><input id="chkBorders" type="checkbox" /><label class="chk" for="chkBorders"></label></span></span>

                        <div class="row">
                            <span class="lbl" style="width:110px">Tab Orientation</span>
                            <select id="cboTabPosition">
                                <option value="Horizontal">Horizontal</option>
                                <option value="Vertical">Vertical</option>
                            </select>
                        </div>
                        <div class="row">
                            <span class="lbl" style="width:110px">Label Style</span>
                            <select id="cboLabelStyle">
                                <option></option>
                                <option value="">Default</option>
                                <option fz="1" ico="f05a" value="label-info">Information</option>                                 
                                <option fz="1" ico="f071" value="label-warning">Warning</option>
                                <option fz="1" ico="f058" value="label-success">Success</option>
                                <option fz="1" ico="f00d" value="label-error">Error</option>
                                <option value="labelStyle1">Style 1</option>
                                <option value="labelStyle2">Style 2</option>
                                <option value="labelStyle3">Style 3</option>
                                <option value="labelStyle4">Style 4</option>
                                <option fz="1" value="labelStyle5">Style 5</option>
                                <option fz="1" value="labelStyle6">Style 6</option>
                               
                            </select>
                        </div>
                        <div class="row">
                            <span class="lbl" style="width:110px">Button Style</span>
                            <select id="cboButtonStyle">
                                <option></option>
                                <option value="Button">Button</option>
                                <option value="Link">Link</option>                                
                            </select>
                        </div>
                        <div id="divLabelFormat" class="row">
                            <input type="checkbox" id="chkBold"><label title="Bold" for="chkBold"><b>B</b></label>
                            <input type="checkbox" id="chkItalic"><label title="Italic" style="font-style: italic" for="chkItalic">I</label>
                            <input type="checkbox" id="chkUnderline"><label title="Underline" style="text-decoration: underline" for="chkUnderline">U</label>
                            <input type="text" title="Background Color. Leave blank for theme based color." style="vertical-align: middle" id="txtBgColor" />
                            <input type="text" title="Font Color. Leave blank for theme based color." style="vertical-align: middle" id="txtForeColor" />
                            <select title="Font Size" id="cboFontSize">
                                <option>7px</option>
                                <option>8px</option>
                                <option>9px</option>
                                <option>10px</option>
                                <option>11px</option>
                                <option>12px</option>
                                <option>13px</option>
                                <option>14px</option>
                                <option>15px</option>
                                <option>16px</option>
                                <option>18px</option>
                                <option>20px</option>
                                <option>22px</option>
                                <option>25px</option>
                                <option>28px</option>
                                <option>32px</option>
                                <option>38px</option>
                                <option>42px</option>
                            </select>
                            <div id="div1" style="margin-top: 5px;">
                                <span style="width: 30px" class="lbl">Font</span>
                                <select title="Font Family" id="cboFontFamily">
                                    <option></option>
                                    <option selected value="Verdana">Default</option>
                                    <option value="OpenSans">OpenSans</option>
                                </select>
                            </div>
                        </div>
                       
                        <div class="row">
                            <span class="lbl" style="width:110px">Entity</span>
                            <span><input id="txtGridEnt" style="width:275px" ReadOnly="true" /> 
                                <label for="chkAutoMap" class="lbl" style="  margin-left: 123px;  width: 151px;">Map Fields Automatically</label>
                                <span class="entity-check small"><input onclick="$('#btnMapField').setDisplay(!$(this).checked())" id="chkAutoMap" type="checkbox"><label class="chk" for="chkAutoMap"></label></span>
                                <a id="btnMapField" href="javascript:void(0)" class="ActionButton GreenButton" style="color:#fff;margin-left: 19px;" onclick="showEntityFilter()">Map Fields</a>
                            <div id="tvCtrEnt">
                                <telerik:RadTreeView ID="tvEntity" OnClientNodeClicked="selectEntity" runat="server">
                                </telerik:RadTreeView>
                              
                            </div></span>
                        </div>
                        <div class="row">
                            <span class="lbl" style="width:110px">Default View</span>
                            <select id="cboViews" onchange="reloadColChks($(this).val(),null)">
                            </select><input type="button" value="Add" id="btnView" class="ActionButton RedButton" onclick="manageViews()" /><br />
                            <div id="colList"></div>
                        </div>
                    </div>
                    <div id="divFieldCommonProps">
                        <span class="row">

                            <span style="width: 110px" class="lbl">Mandatory</span><span class="entity-check small"><input id="chkMandatoryField" onclick="toggleChkAdd(this)" type="checkbox" /><label class="chk" for="chkMandatoryField"></label></span></span>
                        <span class="row">
                            <span style="width: 110px" class="lbl">Hidden On Add</span><span class="entity-check small"><input id="chkHiddenFieldAdd" type="checkbox" /><label class="chk" for="chkHiddenFieldAdd"></label></span>
                            <span style="width: 110px; margin-left: 25px" class="lbl">Hidden On Edit</span><span class="entity-check small"><input id="chkHiddenFieldEdit" type="checkbox" /><label class="chk" for="chkHiddenFieldEdit"></label></span>

                        </span>


                        <span class="row">
                            <span style="width: 110px" class="lbl">Disabled on Add</span><span class="entity-check small"><input id="chkDisableFieldAdd" type="checkbox" /><label class="chk" for="chkDisableFieldAdd"></label></span>
                            <span style="width: 110px; margin-left: 25px" class="lbl">Disabled on Edit</span><span class="entity-check small"><input id="chkDisableFieldEdit" type="checkbox" /><label class="chk" for="chkDisableFieldEdit"></label></span>
                        </span>


                    </div>
                      <div class="row">
                            <span class="lbl" style="width:110px">Visibility</span>
                            <select id="cboVisibility">
                                <option value="">Visible</option>
                                <option value="Hidden">Hidden</option>
                                <option value="Collapsed">Collapsed</option>                              
                            </select>
                        </div>
                    <div class="row">
                            <span class="lbl" style="width:110px">Css Class : </span>
                            <input class="txt" id="txtCssClass" type="text" />
                        </div>
                     <div class="row">
                            <span class="lbl" style="width:110px">Line Width</span>
                            <select id="cboLine">
                                <option value="">Normal</option>
                                <option value="Thin">Thin</option>                               
                            </select>
                        </div>
                    <div class="row">
                        <span class="lbl" style="width:110px">Default Value : </span>
                        <textarea class="txt" id="txtDefaultValue"></textarea>
                    </div>
                     <div class="row">
                            <span class="lbl" style="width:110px">Lookup Code</span>
                            <select id="cboLookupCode">                            
                            </select>
                        </div>
                    <div class="row">
                        <span class="lbl" style="width: 110px; vertical-align: middle">Image Height : </span>
                        <input class="txt" id="txtImgHt" style="width: 45px; vertical-align: middle" type="text" />px
                        <span class="lbl" style="width: 95px; vertical-align: middle; margin-left: 45px">Image Width : </span>
                        <input class="txt" id="txtImgWd" style="width: 45px; vertical-align: middle" type="text" />px
                    </div>
                    <div class="row">
                            <span class="lbl" style="width:110px">Table Borders</span>
                            <select id="ddlTableBorder">
                                <option selected value="noBorder">No Borders</option>
                                <option value="allCells">All Cells</option>
                                <option value="allRows">All Rows</option>
                                <option value="allCols">All Columns</option>
                                <option value="tableOutline">Table Outline</option>
                            </select><br />
                        </div>

                     <div class="row">
                            <span class="lbl" style="width:110px">Menu Direction</span>
                            <select id="ddlMenuDirection">
                                <option value="Vertical">Vertical</option>
                                <option value="Horizontal">Horizontal</option>
                            </select>
                        </div>
                </div>


                <div id="divSet2">
                    <div class="row">
                        <span class="lbl" style="width: 100px">On Load : </span>
                        <input class="txt" id="txtFieldOnLoad" type="text" />
                    </div>
                    <div class="row" style="display: none">
                        <span class="lbl" style="width: 100px">On Render : </span>
                        <input class="txt" id="txtFieldOnRender" type="text" />
                    </div>
                    <div class="row">
                        <span class="lbl" style="width: 100px">On Save : </span>
                        <input class="txt" id="txtFieldOnSave" type="text" />
                    </div>
                    <div class="row">
                        <span class="lbl" style="width: 100px">On Validating : </span>
                        <input class="txt" id="txtFieldOnValid" type="text" />
                    </div>
                    <div class="row" style="display: none">
                        <span class="lbl" style="width: 100px">On Click : </span>
                        <input class="txt" id="txtFieldOnClick" type="text" />
                    </div>
                    <div class="row">
                        <span class="lbl" style="width: 100px">On Change : </span>
                        <input class="txt" id="txtFieldOnChange" type="text" />
                    </div>
                </div>
                <div id="divSet3">
                    <span id="spnChkRender"><span style="font-family: nunitobold">Enable Custom Rendering For this Field</span>&nbsp;<input type="checkbox" onclick="$('#ddlRenderList').parent().setDisplay($(this).checked()); autoFormatEditor('txtFieldRender')" data-chk-on="yes" data-chk-off="no" id="chkFieldRender" /></span>
                    <div style="display: none">
                        <span>Choose a custom rendering for this field or directly modify the field rendering here</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<asp:DropDownList data-placeholder="No Custom Rendering Selected" runat="server" Style="width: 250px; margin-left: 50px" ID="ddlRenderList" onchange="$('#txtFieldRender').parent().setDisplay($(this).prop('selectedIndex')<=0); autoFormatEditor('txtFieldRender')"></asp:DropDownList>
                        <a href="javascript:void(0)" style="color: #00F; vertical-align: bottom;" onclick="showRenderList()">Manage</a>
                        <div style="margin-top: 10px">
                            <textarea id="txtFieldRender"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" style="text-align: right; position: absolute; bottom: 10px; right: 15px; left: 15px;">
                <input type="button" onclick="saveFieldProperties();" class="ActionButton GreenButton" value="Save" />
                <input type="button" onclick="$('#divSettings').HideModal();" class="ActionButton GlassButton RedColor" value="Cancel" />
            </div>
        </div>

        <div style="display: none; width: 750px" class="formSettings" id="formProperties">
            <telerik:RadTabStrip ID="tabRightsInfo" runat="server" MultiPageID="RadMultiPageRights"
                OnClientTabSelected="OnClientTabSelected" Width="100%" Height="98%"
                SelectedIndex="0">
                <Tabs>
                    <telerik:RadTab Text="General" PageViewID="pvGeneral" Value="General">
                    </telerik:RadTab>
                    <telerik:RadTab Text="Role" PageViewID="pvRole" Value="Roles">
                    </telerik:RadTab>
                    <telerik:RadTab Text="Permission" PageViewID="pvRole" Value="Permission">
                    </telerik:RadTab>
                </Tabs>
            </telerik:RadTabStrip>
            <telerik:RadMultiPage ID="RadMultiPageRights" runat="server" SelectedIndex="0"
                Style="border: solid 1px #898C95 !important; margin-left: -1px !important; width: 100% !important;">
                <telerik:RadPageView ID="pvGeneral" runat="server" Height="410px">
                    <span class="row">
                        <span style="width: 90px" class="lbl">Layout Name : </span>
                        <asp:TextBox ID="txtLayoutTitle" CssClass="txt" runat="server"></asp:TextBox>
                    </span>
                    <span class="row">
                        <span style="width: 90px" class="lbl">Key : </span>
                        <asp:TextBox ID="txtTag" CssClass="txt" runat="server"></asp:TextBox>
                    </span>
                    <span class="row">
                        <span style="width: 90px" class="lbl">Description : </span>
                        <asp:TextBox ID="txtDesc" CssClass="txt" TextMode="MultiLine" Rows="4" runat="server"></asp:TextBox></>
                    </span>
                    <span class="row">
                        <span style="width: 90px" class="lbl">Attach Script</span>
                            <asp:DropDownList ID="ddlScriptResource" onchange="toggleScriptPath()" CssClass="ddl" runat="server"></asp:DropDownList>
                    </span>
                    <span id="trUrl" style="display: none" class="row"><span style="width: 90px"
                    class="lbl">Dll Path: </span>
                    <asp:TextBox ID="txtExternalScript" style="width:500px" CssClass="txt" runat="server"></asp:TextBox><input type="button" id="btnUrl" value="..." />
                    <div id="divUrlTree">
                        <telerik:RadTreeView ID="tvUrl" OnClientNodeClicked="selectUrl" runat="server">
                        </telerik:RadTreeView>
                    </div><br />
                        <span style="width: 90px"
                    class="lbl">Class Name: </span>  <asp:TextBox ID="txtExternalScriptClass" style="width:500px" CssClass="txt" runat="server"></asp:TextBox>
                    </span>
                    <span class="row">
                        <asp:LinkButton ID="lnkDocument" CssClass="document" runat="server" OnClientClick="return ShowDocument();" Text="Documentation"></asp:LinkButton>
                    </span>
                     <span class="row" id="spnVersion" runat="server">
                            <asp:Label ID="Label1" runat="server" Text="Resource Version"></asp:Label>
                            <telerik:RadNumericTextBox ID="txtResVersion" runat="server"></telerik:RadNumericTextBox>
                    </span>
                </telerik:RadPageView>

                <telerik:RadPageView ID="pvRole" runat="server" Height="410px">
                    <iframe id="ifrmRole" style="height: 99%; width: 99%" runat="server"></iframe>
                </telerik:RadPageView>
            </telerik:RadMultiPage>
            <span class="row" style="text-align: right">
                <input type="button" value="save" id="btnSave" runat="server" class="ActionButton GreenButton" onclick="saveLayout()" />
                <input type="button" value="cancel" class="ActionButton GlassButton RedColor" onclick="$('#formProperties').HideModal()" />
            </span>
        </div>
        <div style="display: none; width: 340px;padding-bottom: 50px;" class="formSettings" id="divTableIds">
            <div class="row">
                        <span class="lbl" style="width: 85px">Cell ID : </span>
                        <input class="txt"  id="txtCellId" type="text" />
                    </div>
             <div class="row">
                        <span class="lbl" style="width: 85px">Cell Css : </span>
                        <input class="txt"  id="txtCellCssClass" type="text" />
                    </div>
            <div class="row">
                        <span class="lbl" style="width: 85px">Row ID : </span>
                        <input class="txt"  id="txtRowId" type="text" />
                    </div>
            <div class="row">
                        <span class="lbl" style="width: 85px">Row Css : </span>
                        <input class="txt"  id="txtRowCssClass" type="text" />
                    </div>
            <div class="row" style="text-align: right; position: absolute; bottom: 10px; right: 15px; left: 15px;">
                <input type="button" onclick="saveTableIds();" class="ActionButton GreenButton" value="Save" />
                <input type="button" onclick="$('#divTableIds').HideModal();" class="ActionButton GlassButton RedColor" value="Cancel" />
            </div>
        </div>
        <div style="display: none; width: 340px;padding-bottom: 50px;" class="formSettings" id="divMenuSettings">
            <div class="row">
                        <span class="lbl" style="width: 85px">Title : </span>
                        <input class="txt"  id="txtMenuTitle" type="text" />
                    </div>
             <div class="row">
                        <span class="lbl" style="width: 85px">Value : </span>
                        <input class="txt"  id="txtMenuValue" type="text" />
                    </div>
            <div class="row">
                        <span class="lbl" style="width: 85px">ID : </span>
                        <input class="txt"  id="txtMenuId" type="text" />
                    </div>
            <div class="row">
                        <span class="lbl" style="width: 85px">Css : </span>
                        <input class="txt"  id="txtMenuCss" type="text" />
                    </div>
            <div class="row">
                        <a href="javascript:void(0)"  onclick="showIconList(this)" style="color: #120CFF;" class="default-link" style="" >Choose Icon : </a>
                        <input class="SpnIcon" class="txt" style="margin-left: 22px;"  id="txtMenuIcon" type="text" />
                    </div>
            <span class="row">
                <span style="width: 110px" class="lbl">Remder As Group</span><span class="entity-check small"><input id="chkMenuGroup" type="checkbox" /><label class="chk" for="chkMenuGroup"></label></span></span>
            <div class="row" style="text-align: right; position: absolute; bottom: 10px; right: 15px; left: 15px;">
                <input type="button" onclick="saveMenuSetting();" class="ActionButton GreenButton" value="Save" />
                <input type="button" onclick="$('#divMenuSettings').HideModal();" class="ActionButton GlassButton RedColor" value="Cancel" />
            </div>
        </div>
        <div ID="divIcons" class="formSettings divIcons" Style="display: none;">
            <a class="pClose" href="javascript:void(0)" style="" onclick="$('#divIcons').HideModal();"></a>
                <iframe frameborder="0" src="Icons.html" style="height: 100%; width: 100%"></iframe>
            </div>
        <div id="divFieldSelect" style="position:absolute;display:none"></div>
        <div class="formSettings" id="divFilter" style="display: none;width: 750px;height: 450px;padding-bottom:30px">
            <iframe id="ifrFilter" style="height:100%;width:100%" frameborder="0" ></iframe>

             <div class="row" style="text-align: right; position: absolute; bottom: 5px; right: 30px; left: 15px;">
                <input type="button" onclick="saveEntityFilter();" class="ActionButton GreenButton" value="Save" />
                <input type="button" onclick="$('#divFilter').HideModal();" class="ActionButton GlassButton RedColor" value="Cancel" />
            </div>
        </div>
    </form>

    <script>
        $("#btnLock").addClass(layoutLockData.locked==1?"lock":"").addClass(layoutLockData.locked==1 && layoutLockData.lockOwner!=1?"otherlock":"").on("contextmenu",function(e){if( $("#btnLock").hasClass("lock") && confirm('Break Lock?')){toggleLock($("#btnLock"),true);};e.noBubble()});
        setLockState();
        IsDependent =<%= IsDependent.ToString().ToLower() %>;
        $("#fieldList").accordion({ heightStyle: "content" });
        $("#divSettings").find("select").not("#cboFontSize,#ddlRenderList,#cboLookupCode,#cboViews,#cboLabelPosition,#ddlDocField").chosen({ disable_search: true, width: "140px" });
        $("#cboFontSize").chosen({ disable_search: true, width: "70px" });
        $("#cboLabelPosition").chosen({ disable_search: true, width: "180px" });
       
        $("#txtFieldOnClick").autocomplete({
            source: ["Erp.ServerCommand"],
            minLength:0
        }).on("click", function () { $("#txtFieldOnClick").autocomplete("search", ""); });
        $("#ddlTemplates").chosen({ disable_search: true, width: "250px", allow_single_deselect: true });
        $("#ddlRenderList,#ddlDocField").chosen({ disable_search: true, width: "250px"});
        $("#cboLookupCode,").chosen({ disable_search: true, width: "280px"});
        $("#cboViews").chosen( { disable_search: true, width: "280px"});
        $("#chkBold,#chkItalic,#chkUnderline").button();
        $("#txtBgColor,#txtForeColor").simpleColorPicker();
        $("#cboLabelStyle").on('change', function (evt, params) {
            var item=$("#cboLabelStyle").selectedItem();
            $("#divLabelFormat").setDisplay(!item || item.val()=="" || item.val()=="Default");
            if(item && item.attr("fz")=="1"){             
                $("#cboLabelStyle_chosen").after($("#cboFontSize_chosen"));
            }
            else
                $("#cboFontSize").after($("#cboFontSize_chosen"));
            $("#spnIcon").closest(".row").setDisplay(true);
            if(!$.isEmpty(item.attr("ico"))){
                var lbl=$("<span>&#x"+item.attr("ico")+";</span>")
                $("#spnIcon").val(lbl.html());              
            }
            
                
        });
        var ddlScriptResource=$("#<%=ddlScriptResource.ClientID%>");
        $("#txtFixHeight").autoNumeric('init', { mDec: 0, aSep: '' });

        $(function () {            
            InitEditor();
            toggleScriptPath();
            $("#divSettingsTab").tabs();
            $('#chkFieldRender').CheckBoxX();
            redrawPageLayout("load");
            
            $("#txtGridEnt").on("click", function (e) {
                toggleEntityTree(e.target); e.stopPropagation();
            });
            $("#btnUrl").on("click", function (e) {  $(e.target).next().show();e.stopPropagation(); })
            $("#divUrlTree").on("click", function (e) { e.stopPropagation(); });
            $(document).on("click", function (e) { 
                if($(".jqModalBG").isVisible())
                    return;
                $("#divUrlTree").hide(); 
                $("#tvCtrEnt").hide();
                if(!$(e.target).closest(".menu-item").exists())
                    $(".menu-ctr").hide();
            })
            $("#tvCtrEnt,#divMenuSettings").on("click", function (e) { e.stopPropagation(); });

            $("#<%=pagePanel.ClientID%>").on("mouseover",".layoutObject",function(e){
                e.stopPropagation();
                var tgt = $(e.target);               
                if (!tgt.hasClass("layoutObject")) {
                    tgt = tgt.closest(".layoutObject");                    
                }
                if($("#divOptionMenu").parent().hasClass("layoutObject"))
                    $("#divOptionMenu").parent().css("z-index", "");
                showOptions(tgt);
            });
            $("#<%=pagePanel.ClientID%>").on("click",".field",function(e){
                if(!$("#pagePanel").hasClass("FieldSelector"))
                    return;
                var tgt = $(e.target); 
                if (!tgt.hasClass("layoutObject")) {
                    tgt = tgt.closest(".layoutObject");                        
                }
                var inf=_getFieldInfo( tgt);
                $("#lnkForField").html(tgt.attr("id")+(inf?" <i>["+inf.DisplayName+"]</i>":""));
                $("#lnkForField").data("FieldID",tgt.attr("id"));
                $("#divFieldSelect").HideModal();
                $("#txtFieldTitle").closest(".row").setDisplay(false);
                $("#txtFieldTooltip").closest(".row").setDisplay(false);
                hideFieldSelection();
            });
            $("#<%=pagePanel.ClientID%>").on("dblclick",".layoutObject",function(e){
                e.stopPropagation();
                var tgt = $(e.target); 
                if (tgt.hasClass("delRow")||tgt.hasClass("addRow")||tgt.hasClass("delCol")||tgt.hasClass("addCol") || tgt.hasClass("addItem") || tgt.hasClass("addChild") || tgt.hasClass("remItem"))
                    return;
                if(tgt.hasClass("wrapper")&& tgt.parent().hasClass("table-cell"))
                    tgt=tgt.parent();
                if (tgt.hasClass("table-cell")){
                    cell = tgt;
                    $("#txtCellId").val(cell.attr("id"));
                    $("#txtRowId").val(cell.closest("tr").attr("id"));
                    $("#txtCellCssClass").val($.defaultVal( cell.attr("cssclass"),""));
                    $("#txtRowCssClass").val($.defaultVal( cell.closest("tr").attr("cssclass"),""));
                    $("#divTableIds").ShowModal();
                    window.currentCell = cell;
                }
                else {
                    if (!tgt.hasClass("layoutObject")) {
                        tgt = tgt.closest(".layoutObject");                        
                    }
                    showOptions(tgt);
                    toggleFieldOptions($("#divOptionMenu").node(0));
                }
            });
            loadFields();


            $("#chk1").checked($("#headerPanel").isVisible());
            $("#chk2").checked($("#footerPanel").isVisible());
            $("#chk3").checked($("#rightPanel").isVisible());
            $("#chk4").checked($("#leftPanel").isVisible());
            $("#chk5").checked(splitterFixlayout=="1");
            $("#chk6").checked(splitterResizeH=="1");
            $("#chk7").checked(splitterResizeF=="1");
            $("#chk8").checked(splitterResizeL=="1");
            $("#chk9").checked(splitterResizeR=="1");
            toggleResizable(true);
            makeDraggable($("#fieldList,#specialControls").find(".field,.special,.grid"), false);

          
        });

        
        $(window).load(function () { window.setTimeout(function () { redrawPageLayout("load"); }, 250); });
        $(window).on("resize", $.debounce(250, function () {
            redrawPageLayout("resize");
        }));

        function setLockState(){
            if(layoutLockData.locked==-1){
                $("#btnLock").hide();
                return;
            }          
            if(layoutLockData.locked==1)
                $("#lbnSave,#lbnSave2").setDisplay(layoutLockData.locked==1 && layoutLockData.lockOwner==1);
            else
                $("#lbnSave,#lbnSave2").setDisplay(true)
        }
        //properties
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
        function toggleEntityTree(txt) {
            $("#tvCtrEnt").show();
        }
        function toggleScriptPath(){
            $("#trUrl").setDisplay($("#<%=ddlScriptResource.ClientID%>").val()=="Ext")
        }
        function selectUrl(sender, args) {
            var n = args.get_node();
            if (n.get_attributes().getAttribute("IsFile")) {
                $("#<%=txtExternalScript.ClientID%>").val(n.get_value());
                $("#divUrlTree").hide();
            }
        }
        function selectEntity(sender, args) {
            var t = $("#txtGridEnt");
            var n = args.get_node();

            if (n.get_level() < 2 && n.get_value() != "None")
                return;
            if (n.get_value() == "None") {
                t.val("");
                t.removeAttr("entityid");
            }
            else {
                t.val("");
                t.val(n.get_text());
                var entityId = n.get_value();
                t.attr("entityid",entityId);
                var ddl = $("#cboViews");
                ddl.empty();
                var opt = $("<option>Loading...</option>");
                ddl.append(opt);
                ddl.trigger('chosen:updated');
                $("#colList").empty()
                PageMethods.LoadViewList(entityId,function(r){
                    viewList=JSON.parse(r);
                    reloadViewList(entityId.toUpperCase());
                })
            }
            $("#tvCtrEnt").hide();


        }
        function showEntityFilter(){
            var eid=$("#txtGridEnt").attr("entityid");
            if($.isEmpty(eid)){
                alert("Please choose an entity.");
                return;
            }
            var data = new Object();   
            data["Type"] = "ShowEntityFilter"; 
            data["EID"] =  eid;
            data["SID"] = eid+"123123"; 
            data["xml"] = $.defaultVal($("#txtGridEnt").data("FieldProp_Filter"),"");
            PageMethods.SetFilterSession(data,function(){
                $("#divFilter").ShowModal();
                $("#ifrFilter").attr("src","../Meta/Filters_Add.aspx?PageMode=Settings&EID="+eid+"&SID=" + data["SID"] + "&Hidebutton=1&ShowFilterBtn=1&ReturnXml=1");
            });
        }

        function saveEntityFilter(){
            var xml="";
            var ifr=$("#ifrFilter");
            if (ifr.exists() && ifr[0].contentWindow)
                xml = ifr[0].contentWindow.createXml();
            $("#txtGridEnt").data("FieldProp_Filter",xml);
            $("#divFilter").HideModal();
        }
        function showIconList(a) {
            if(!$("#txtMenuIcon").isVisible()){
                if(!$(a).prev().checked())
                    return;
            }
            $("#divIcons").ShowModal(4000).css("top", "100px");
        }
        function selectIcon(ico) {
            
            $("#divIcons").HideModal();
            if($("#txtMenuIcon").isVisible()){
                $("#txtMenuIcon").val(ico);          
                $("#txtMenuIcon").focus();
            }
            else{
                $("#spnIcon").val(ico);          
                $("#spnIcon").focus();
            }
        }

        function showFieldSelection(a){
            a=$(a);
            hideOptions();
            $("#divFieldSelect").append($("#pagePanel"));
            $("#pagePanel").addClass("FieldSelector");
            $("#pagePanel").css("margin-left","0")
            $("#divFieldSelect").ShowModal({ showClose:true,autoClose: true,onClose:hideFieldSelection});
            $("#divFieldSelect").position({my:"center",at:"center",of:$(document)}).css("top","100px");
            

        }        
        function hideFieldSelection(){ 
            $("#pagePanel").css("margin-left","").removeClass("FieldSelector");
            $("#form1").append( $("#pagePanel"));
        }
    function saveLayout() {
        //moving resizable helpers  to the end of parent
        $("#leftPanel,#centerPanel,#rightPanel").children(".ui-resizable-handle").each(function () { $(this).parent().append($(this)); })
        var data = new Object();
        data["Type"] = "SaveLayout";
        data["@LayoutType"] = "item";
        data["@Xml"] = getLayoutXml();
        data["@LayoutID"] = ($("#formProperties").data("Mode") == "SaveAs" ? "" : LayoutID);
        data["@ModuleID"] = $.QS("Module");
        data["@EntityID"] = $.QS("EID");
        data["@ResourceVersion"] = $.defaultVal($("#<%= txtResVersion.ClientID%>").val(),0);
        data["@LayoutName"] = $("#txtLayoutTitle").val();
        data["@Description"] = $("#txtDesc").val();
        data["@Tag"] = $("#txtTag").val();
        data["@RefID"]=(IsDependent?$.QS("RefID"):"");
        data["@IsDependent"]=IsDependent;
        var arrRoles = [];
        arrRoles = [];//
        var arr = $("#<%= ifrmRole.ClientID%>")[0].contentWindow.GetRoles()
        for (var i = 0; i < arr.length; i++) arrRoles.push(arr[i]);
        // var arrPermission = [];
        var Permission = [];
        var arrPermission = $("#<%= ifrmRole.ClientID%>")[0].contentWindow.GetPermission();
        for (var i = 0; i < arrPermission.length; i++) Permission.push(arrPermission[i]);
        data["arrPermission"] = Permission;
        data["arrRoles"] = arrRoles;
        data["au"] = $.QS("_au");
        $.Notify("Saving...");
        PageMethods.Execute(data, arrRoles, Permission, PageMethodSuccess, PageMethodError);

    }

    
    function InitEditor() {
           
        Editors["txtFieldRender"] = CodeMirror.fromTextArea($("#txtFieldRender")[0], {
            mode: "text/html",
            addModeClass: true,
            autoCloseTags: true
        });

        if (IsDependent)
            return;

        Editors["txtLayout"] = CodeMirror.fromTextArea($("#<%=txtLayout.ClientID%>")[0], {
                mode: "text/html",
                addModeClass: true,
                autoCloseTags: true
            });
            // CodeMirror.commands["selectAll"](editor);

            Editors["txtCss"] = CodeMirror.fromTextArea($("#<%=txtCss.ClientID%>")[0], {
                mode: 'text/css',
                addModeClass: true,
                extraKeys: { "Ctrl-Space": "autocomplete" },
                autoCloseBrackets: true
            });
        }

        function getCompletions(token, context) {

            var found = [], start = token.string;
            function maybeAdd(str) {
                if (str.indexOf(start) == 0) found.push(str);
            }
            function gatherCompletions(obj) {
                if (typeof obj == "string") forEach(stringProps, maybeAdd);
                else if (obj instanceof Array) forEach(arrayProps, maybeAdd);
                else if (obj instanceof Function) forEach(funcProps, maybeAdd)
                for (var name in obj) maybeAdd(name);
            }

            if (context) {
                // If this is a property, see if it belongs to some object we can
                // find in the current environment.
                var obj = context.pop(), base;
                if (obj.className == "js-variable")
                    base = window[obj.string];
                else if (obj.className == "js-string")
                    base = "";
                else if (obj.className == "js-atom")
                    base = 1;
                while (base != null && context.length)
                    base = base[context.pop().string];
                if (base != null) gatherCompletions(base);
            }
            else {
                // If not, just look in the window object and any local scope
                // (reading into JS mode internals to get at the local variables)
                for (var v = token.state.localVars; v; v = v.next) maybeAdd(v.name);
                gatherCompletions(window);
                forEach(keywords, maybeAdd);
            }
            return found;
        }

        function ShowDocument() {

            window.open("Documentation_Add.aspx?PageType=E&ID=" + $.QS("ID") + "&ModeType=Layout&Hdr="+$("#<%= txtLayoutTitle.ClientID %>").val());
            return false;
        }

        function toggleLock(a,breakLock){
            if(!breakLock && layoutLockData.locked==1 && layoutLockData.lockOwner==0){
                alert("Lock cannot be obtained");
                return;
            }
            a=$(a);
            
            PageMethods.ToggleLock(!a.hasClass("lock"),  $.QS("ID"),(breakLock==true),
                function(r){
                    if(r){
                        a.toggleClass("lock");        
                        if(!a.hasClass("lock"))
                            a.removeClass("otherlock");
                        layoutLockData={locked:a.hasClass("lock")?1:0,lockOwner:a.hasClass("lock")?1:0};
                        setLockState();
                    }
                    else
                        alert("Lock could not be obtained");
            }, function(){});           
        }
    </script>

</body>
</html>
