<%@ Page Language="C#" AutoEventWireup="true" ValidateRequest="false" CodeBehind="InterfaceDesigner.aspx.cs" Inherits="SensysErp.Meta.InterfaceDesigner" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">

   


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

     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/InterfaceDesigner.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/css/InterfaceDesigner.css")%>

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




    <style>
        body, html, form
        {
            height: 99%;
        }

        .CodeMirror
        {
            border: 1px solid #888;
            width: 100%;
            height: 95%;
          
        }

        #divContents
        {
            height: 95%;
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
    </style>

</head>
<body>
    <form id="form1" runat="server">
        <div style="margin:20px 0 0 20px;height:90%;width:97%">
        <%= HelperLib.Web.WebResources.GetResource("~/css/base.css")%>
        <%= HelperLib.Web.WebResources.GetResource("~/css/form.css")%>
        <asp:ScriptManager ID="ScriptManager1" runat="server" EnablePageMethods="true">
        </asp:ScriptManager>
        <asp:Panel CssClass="div-form" runat="server" ID="pnlData">
            <table  class="table-form">
                <tr>
                    <td class="td-label">Control Name </td>
                    <td class="td-value"><asp:TextBox ID="txtName" runat="server">        </asp:TextBox></td>
                </tr>
                <tr>
                      <td class="td-label">Control Description </td>
 <td class="td-value"><asp:TextBox ID="txtDescription" TextMode="MultiLine" runat="server">        </asp:TextBox></td>
                    </tr>

                <tr id="trVersion" runat="server"><td>
                            <asp:Label ID="Label1" runat="server" Text="Resource Version"></asp:Label></td>
                    <td>
                            <telerik:RadNumericTextBox ID="txtResVersion" runat="server"></telerik:RadNumericTextBox></td>
                    </tr>
            </table>
       
        
            </asp:Panel>
        <div id="divTabs" class="tabBar">
            <a class="tabs selected" onclick="showTab(0,this)" href="javascript:void(0)">Designer</a>
            <a class="tabs" onclick="showTab(1,this)" href="javascript:void(0)">Html</a>
            <a class="tabs" onclick="showTab(2,this)" href="javascript:void(0)">Css</a>
            <a class="tabs" onclick="showTab(3,this)" href="javascript:void(0)">Script</a>
        </div>
        <div id="divContents">
            <div style="height: 100%; overflow-y: auto">
                <div id="divDesigner" class="docBody docHTML">
                    <asp:Literal ID="designerData" Mode="PassThrough" runat="server"></asp:Literal>
                </div>

                <div runat="server" id="divEditorList">
                    <div class="editor" id="mainEditor" style="display: none">
                        <div class="row"><span class="lbl">Title</span><input style="width: 370px" id="txtName" class="txt" type="text" /></div>
                        <div class="row"><span class="lbl">Description</span><textarea style="width: 370px" rows="2" id="txtDesc" class="txt"></textarea></div>
                        <div class="row"><span class="lbl">Variable Name</span><select id="ddlVars"></select></div>
                        <div id="subEditor"></div>
                        <div class="cmd">
                            <input type="button" onclick="SaveEditor(this);" class="ActionButton GreenButton" value="Save" />
                            <input type="button" onclick="CancelEditor(this);" class="ActionButton  GlassButton  RedColor" value="Cancel" />
                        </div>
                    </div>
                    <div id="scaleEditor" class="subEditors" style="display: none">
                        <div class="row">
                            <span class="lbl">Min Rating</span><input id="txtScaleMin" class="txt" style="width: 35px" type="text" />
                            <span class="lbl">Min Rating Title</span><input id="txtScaleMinTitle" class="txt" style="width: 95px" type="text" />
                        </div>
                        <div class="row">
                            <span class="lbl">Max Rating</span><input id="txtScaleMax" class="txt" style="width: 35px" type="text" />
                            <span class="lbl">Max Rating Title</span><input id="txtScaleMaxTitle" class="txt" style="width: 95px" type="text" />
                        </div>
                    </div>
                     <div id="dateEditor" class="subEditors" style="display: none">
                        <div class="row">
                            <span style="width:70px;" class="lbl">Show Date</span><input type="checkbox" id="chkShowDate" />
                             <span style="width:70px;margin-left:30px" class="lbl">Show Time</span><input type="checkbox" id="chkShowTime"  />       
                        </div>
                        
                    </div>

                </div>
                <div id="divCmd" style="height: 25px;font-size: 10px; width: 515px; background-color: #E6E6E6; padding: 5px; margin-left: 16px; border: solid 1px #D6D6D6; margin-bottom: 75px; margin-top: 25px;">
                    <button id="btnAdd" onclick="return false" class="add"><span style="font-family:FontAwesome;margin-right:5px">&#xf067;</span>Add Item</button>
                    <button title="Select an action"></button>
                    <span style="float:right"><a class="" onclick="SaveLayout()" href="javascript:void(0)" ><span style="font-size: 14px;font-family:FontAwesome;margin-right:5px">&#xf0c7;</span>Save</a>&nbsp;&nbsp;
                        <a class="" href="javascript:void(0)" onclick="showPreview()" ><span style="font-size: 14px;font-family:FontAwesome;margin-right:5px">&#xf002;</span>Preview</a>&nbsp;&nbsp;
                        <a class="" href="javascript:void(0)" onclick="window.close()"><span style="font-size: 14px;font-family:FontAwesome;margin-right:5px">&#xf00d;</span>Cancel</a></span>
                </div>
            </div>
            <div style="height: 100%; display: none">
                <asp:TextBox ID="txtHtml" runat="server" Width="635" Height="250" TextMode="Multiline" Rows="3"> </asp:TextBox>
            </div>
            <div style="height: 100%; display: none">
                <asp:TextBox ID="txtCss" runat="server" Width="635" Height="250" Text=".docHTML{}  .docBody{}" TextMode="Multiline" Rows="3"> </asp:TextBox>
            </div>
            <div id="divScript" style="height: 100%; display: none">
                <div style="height: 100%;"><iframe  id="ifrExprEditor" runat="server" frameborder="0" style="height:100%;width:100%"></iframe></div>
                <asp:TextBox ID="txtScript" runat="server"  CssClass="txtScript" Style="display:none" Width="635" Height="250" Text="" TextMode="Multiline" Rows="3"> </asp:TextBox>
            </div>
           
        </div>
        <div id="divItemTypes" runat="server" style="display: none">
            <a href="javascript:void(0)" class="Text">Text</a>
            <a href="javascript:void(0)" class="Descriptive">Descriptive Text</a>
            <a href="javascript:void(0)" class="Number">Number</a>
            <a href="javascript:void(0)" class="Date">Date</a>
            <a href="javascript:void(0)" class="Multiple">Multiple selection</a>
            <a href="javascript:void(0)" class="Single">Single selection</a>
            <a href="javascript:void(0)" class="List">List of values</a>
            <a href="javascript:void(0)" class="Scale">Scale</a>
            <a href="javascript:void(0)" style="display: none" class="Grid">Grid</a>
            <a href="javascript:void(0)" class="Header">Heading</a>
            <a href="javascript:void(0)" class="Label">Label</a>
        </div>
</div>
    </form>
    <style>

        .ui-controlgroup-item.ui-button-icon-only {
            height: 22px;
            margin-left: -5px;
            background: #f6f6f6;
            border: solid 1px #c5c5c5;
            vertical-align: middle;
            line-height: 9px;
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }

        .ui-button {
            padding: .4em 1em;
            display: inline-block;
            position: relative;
            line-height: normal;
            margin-right: .1em;
            cursor: pointer;
            vertical-align: middle;
            text-align: center;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            overflow: visible;
            border: 1px solid #c5c5c5;
            background: #f6f6f6;
            font-weight: normal;
            color: #454545;
        }

    </style>
    <script type="text/javascript">

        var Editors = [];



        InitEditor();
        function InitEditor() {


            var e = CodeMirror.fromTextArea($("#<%=txtHtml.ClientID%>")[0], {
                mode: "text/html",
                addModeClass: true,
                autoCloseTags: true
            });
            Editors.push(e)
            // CodeMirror.commands["selectAll"](editor);

            e = CodeMirror.fromTextArea($("#<%=txtCss.ClientID%>")[0], {
                mode: 'text/css',
                addModeClass: true,
                extraKeys: { "Ctrl-Space": "autocomplete" },
                autoCloseBrackets: true
            });
            Editors.push(e)

                

        }



    </script>

    <script>
        $(function () {
            if ($.QS("m") == "Control") {
                $("#divTabs").append($("#divTabs").node(0).html("Preview"));
                showTab(1, $("#divTabs").node(0));
                $("#divCmd").children("button").remove();
                $("#pnlData").append($("#divCmd").buttonset().css("margin-bottom","25px"));

            }
            else {
                $("#btnAdd")
                  .button()
                  .click(function () {
                      showEditor("Text", null);

                  })
                  .next()
                    .button({
                        text: false,
                        icons: {
                            primary: "ui-icon-triangle-1-s"
                        }
                    })
                    .click(function () {
                        var menu = $("#divItemTypes").show().position({
                            my: "left top",
                            at: "left bottom",
                            of: this
                        });
                        $(document).one("click", function () {
                            menu.hide();
                        });
                        return false;
                    })
                    .parent()
                      .buttonset();

                $("#divItemTypes").children("A").on("click", InsertItem);

                
            }
            $("#divDesigner").sortable({
                items: ".draggableItem", placeholder: "entry-dropper"
            });
            LoadDesigner();
        });

    </script>

    <script>
        function showPreview() {
            resetEditors();
            var data = {}
            data["Xml"] = CreateXML().Xml;
            data["Buttons"] = $.defaultVal(ButtonList, "");
            PageMethods.SetSession(data, function (result) {
                window.open("../main/interface.aspx?pw=1&sid=" + result["sid"]);
            });
        }


        function SaveLayout() {
            var data = CreateXML();
            if (!data) {
                alert('Layout could not be saved!');
                return false;
            }
            if ($.QS("m") == "Control") {
                var res = {};
                res["Type"] = "SaveRender";
                res["@Xml"] = CreateXML().Xml;
                res["@LayoutName"] = $("#<%=txtName.ClientID%>").val();
                res["@Description"] = $("#<%=txtDescription.ClientID%>").val();
                res["@ResourceVersion"] = $.defaultVal($("#<%= txtResVersion.ClientID%>").val(), 0);
                res["@LayoutID"] = $.QS("id");
                $.Notify("Saving...");
                PageMethods.SaveData(res, function (result) {
                    $.Notify(false);
                    opener.RefreshGrid();
                }, function (d) { $.Notify({ Message: "Error Occured.", NotifyOnly: true }); });
                return false;
            }
            var arr = data.Variables;
            var str = "";
            var msg="";
            $(arr).each(function () {
                var v = this.Name.toLowerCase();
                if (str.indexOf("|" + v + "|") > -1) msg += this.Name+"\n";
                else
                    str += "|" + v + "|";
            });
            if (msg.length > 0) {
                alert("The following variables are mapped multiple times\n" + msg);
                return false;
            }
            if (data && typeof window.opener.InvokePropFunc == "function") {
                window.opener.InvokePropFunc($.QS("ref"), $.QS("fn"), data);
                window.close();
            }
            return data;
        }
    </script>





</body>
    </html>
