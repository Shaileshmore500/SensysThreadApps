<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WorkflowDesigner.aspx.cs" Inherits="SensysErp.Meta.WorkflowDesigner" ValidateRequest="false" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
        <head id="Head1" runat="server">
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/modernizr.js")%>

        <%# HelperLib.Web.WebResources.GetResource("~/css/normalize.css")%>
        <%# HelperLib.Web.WebResources.GetResource("~/fonts/font.css")%>   
        <%# HelperLib.Web.WebResources.GetResource("~/css/CustomControl/CustomControl.css")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Css/bluegloss/jquery-ui-1.10.3.custom.css")%>
        <%# HelperLib.Web.WebResources.GetResource("~/css/WfDesigner.css")%>

        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/System.js")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery-ui-1.10.3.custom.min.js")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jqHelper.js")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/UiHelper.js")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CustomControls.js")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/moment.min.js")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/fn.js")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/knockout-2.2.1.js")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jsPlumb.min.js")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/WfDesigner.js")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/PropertyEditors.js")%>



        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Css/codemirror.css")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Css/show-hint.css")%>

        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/codemirror.js")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/show-hint.js")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/matchbrackets.js")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/clike.js")%>
    <style>
        .selectX-dropdown
        {
            z-index:1000;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">

        <asp:ScriptManager ID="ScriptManager1" runat="server" EnablePageMethods="true">
        </asp:ScriptManager>
          <%= HelperLib.Web.WebResources.GetResource("~/css/base.css")%>
        <%= HelperLib.Web.WebResources.GetResource("~/css/form.css")%>
        
        <div class="titleBar" id="divTitleBar" runat="server">
            <asp:Label runat="server" ToolTip="Click to rename" ID="lblTitle" onclick="$(this).hide().next().show().css({'min-width':$(this).outerWidth()+75,width:'250px'}).focus().val($(this).html())" class="title"></asp:Label>
            <input type="text" style="display: none" onblur="$(this).hide().prev().show().html($(this).val());$('#txtName').val($(this).val())" class="title" />
            <asp:Label Style="color: #FFF;font-size: 16px;" ID="lblVersion" runat="server"></asp:Label>
            <asp:DropDownList onchange="showScenarioData(this)" ID="ddlVersions" Style="position:absolute;top:0;right:0" runat="server"></asp:DropDownList>
            <asp:HiddenField ID="hdnInUse" runat="server" /><asp:HiddenField ID="hdnMd5" runat="server" />
        </div>
        <hlp:ActionMessage ID="ActionMessage1" runat="server" />
        <div id="generalSettings" class="toolbar" runat="server">
            <div onclick="saveForm()" id="btnSave" runat="server" class="toolBtn save">
                <span>Save</span>
            </div>
            <div onclick="saveAsForm()" id="btnSaveAs" runat="server"
                class="toolBtn saveas">
                <span>Save As</span>
            </div>
            <div onclick="showProps()"
                class="toolBtn property">
                <span>Properties</span>
            </div>
            <div
                class="toolBtn CloseWin">
                <span>Close</span>
            </div>

        </div>
        <div>
            <div id="divItems" runat="server">
                <telerik:RadPanelBar Skin="Windows7" SkinID="PbrNoSkin" ExpandMode="FullExpandedItem" Height="100%" Width="100%" ID="pnl" runat="server">
                    <Items>
                        <telerik:RadPanelItem Text="Variables">
                            <ContentTemplate>
                                <span id="btnNewVar" class="btnAdd" title="click to add new" onclick="ShowVariableEditor('A')">&#xf055;</span>
                                <div id="divVariableList"></div>
                            </ContentTemplate>
                        </telerik:RadPanelItem>
                        <telerik:RadPanelItem Expanded="true" Text="Basic Actions">
                            <ContentTemplate>
                                <div id="divAction_G"></div>
                            </ContentTemplate>
                        </telerik:RadPanelItem>
                        <telerik:RadPanelItem Text="Advanced Actions">
                            <ContentTemplate>
                                <div id="divAction_A"></div>
                            </ContentTemplate>
                        </telerik:RadPanelItem>
                        <telerik:RadPanelItem Text="Custom Actions">
                            <ContentTemplate>
                                <div id="divAction_C"></div>
                            </ContentTemplate>
                        </telerik:RadPanelItem>
                        <telerik:RadPanelItem Text="Functions">
                            <ContentTemplate>
                                <span id="btnNewFml" class="btnAdd" title="click to add new" onclick="ShowFormulaEditor('A')">&#xf055;</span>
                                <div id="divFormulaList"></div>
                            </ContentTemplate>
                        </telerik:RadPanelItem>
                        <telerik:RadPanelItem Text="Used Actions">
                            <ContentTemplate>

                                <div id="divUsedActions"></div>
                            </ContentTemplate>
                        </telerik:RadPanelItem>
                    </Items>

                </telerik:RadPanelBar>

            </div>
            <div id="divWorkArea">
                <input type="button" style="position: absolute; left: 100px; top: 100px; visibility: hidden" id="elemRight" />
                <input type="button" style="position: absolute; left: 100px; top: 100px; visibility: hidden" id="elemBottom" />
                <asp:Literal ID="workArea" runat="server" Mode="PassThrough"></asp:Literal>
            </div>

        </div>

        <div style="display: none; width: 850px" class="formSettings" id="formProperties">
            <telerik:RadTabStrip ID="tabRightsInfo" runat="server" MultiPageID="RadMultiPageRights"
                OnClientTabSelected="OnClientTabSelected" Width="100%" Height="98%"
                SelectedIndex="0">
                <Tabs>
                    <telerik:RadTab Text="General" PageViewID="pvGeneral" Value="General">
                    </telerik:RadTab>
                    <telerik:RadTab Text="Manage Letters" PageViewID="pvLetters" Value="Letters">
                    </telerik:RadTab>
                    <telerik:RadTab Text="Criteria" PageViewID="pvCritreria" Value="Criteria">
                    </telerik:RadTab>
                    <telerik:RadTab Text="User Criteria" PageViewID="pvUserCritreria" Value="UserCriteria">
                    </telerik:RadTab>
                     <telerik:RadTab Text="Role" PageViewID="pvRole" Value="Roles">
                    </telerik:RadTab>
                    <telerik:RadTab Text="Permission" PageViewID="pvRole" Value="Permission">
                    </telerik:RadTab>
                </Tabs>
            </telerik:RadTabStrip>
            <telerik:RadMultiPage ID="RadMultiPageRights" runat="server" SelectedIndex="0"
                Style="border: solid 1px #898C95 !important; margin-left: -1px !important; width: 100% !important;">
                <telerik:RadPageView ID="pvGeneral" runat="server" Height="440px">
                    <span class="row">
                        <span style="width: 90px" class="lbl">Name : </span>
                        <asp:TextBox ID="txtName" CssClass="txt" runat="server"></asp:TextBox>
                    </span>
                    <span class="row">
                        <span style="width: 90px" class="lbl">Description : </span>
                        <asp:TextBox ID="txtDesc" CssClass="txt" runat="server" TextMode="Multiline" Rows="3"></asp:TextBox>
                    </span>
                    <span runat="server" id="pnlResVersion" class="row">
                        <span style="width: 90px" class="lbl">Resource Version : </span>
                        <telerik:RadNumericTextBox ID="txtVersion" CssClass="txt" runat="server" NumberFormat-DecimalDigits="1" NumberFormat-DecimalSeparator="."></telerik:RadNumericTextBox>
                    </span>
                    <span class="row">
                        <asp:CheckBox ID="chkIsDeactivated" runat="server" Text="IsDeactivated" />

                    </span>
                </telerik:RadPageView>
                <telerik:RadPageView ID="pvLetters" runat="server" Height="440px">
                    <span class="mainHeading" style="margin: 15px 0 0 18px;">Choose a Letter Template Set For this Workflow</span>
                    <asp:LinkButton CssClass="default-link" Style="font-size: 18px;margin-left: 40px;text-transform: capitalize;" OnClientClick="showTemplateSetList('E');return false;" ID="lbnTmplName" runat="server"></asp:LinkButton>
                    <span style="display: none;margin-left: 75px;font-size: 18px;" id="spnBlankTmplSet"><a style="color: #F00;font-size: 16px;" href="javascript:void(0)" onclick="showTemplateSetList('A')">Create New Set</a> Or <a style="color: #F00;font-size: 16px;" href="javascript:void(0)" onclick="showTemplateSetList('E')" id="lbnSetName">Choose An Existing Template Set</a></span>
                       <asp:HiddenField ID="hdnTmplName" runat="server"></asp:HiddenField>
                    <asp:UpdatePanel style="overflow-y: auto;height: 325px;width: 585px;margin: 25px 0 0 45px;" ID="updLetterList" runat="server" UpdateMode="Conditional">
                        <ContentTemplate>
                         
                            <asp:Button ID="btnRefreshLetter" OnClick="btnRefreshLetter_Click" runat="server" Style="display: none" />
                            <table id="tblLetters" class="simple-grid">

                                <asp:Repeater Visible="false" ID="rptLetterList" runat="server">
                                    <HeaderTemplate>
                                        <thead>
                                            <tr>
                                                <th style="width:500px">Letter Name</th>
                                                <th>Delete</th>
                                            </tr>
                                            <tr class="_tmplRow" style="display: none">
                                                <td><a  class="text-link" onclick="addNewLetter(this,'V')" href="javascript:void(0)"></a></td>
                                                <td><a class="close" href="javascript:void(0)">X</a></td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                    </HeaderTemplate>
                                    <ItemTemplate>
                                        <tr recid='<%#Eval("LetterTemplateSet_Items_Pid") %>' ltrid='<%#Eval("LetterTemplates_Pid") %>'>
                                            <td>
                                                <a  class="text-link" onclick="addNewLetter(this,'V')" href="javascript:void(0)"><%#Eval("lettername") %></a></td>
                                            <td><a class="close" href="javascript:void(0)">X</a></td>
                                        </tr>

                                    </ItemTemplate>
                                    
                                    <FooterTemplate>
                                        </tbody>
                                <tfoot>
                                    <tr class="_row cmdPanel">
                                        <td colspan="2">
                                            <a class="cmdLink cmdAdd" href="javascript:void(0)" onclick="addNewLetter(this,'N')">Design New Letter</a>
                                            <a class="cmdLink cmdAdd" href="javascript:void(0)" onclick="addNewLetter(this,'E')">Add from existing</a>                                            
                                        </td>
                                       
                                    </tr

                                   
                                </tfoot>

                                    </FooterTemplate>
                                </asp:Repeater>

                            </table>
                            <div style="display:none" class="">
                                         
                                              <asp:DropDownList CssClass="ddl" ID="ddlTmplLetterList" runat="server"></asp:DropDownList>
                            <a  href="javascript:void(0)" class="default-link" onclick="addNewLetter(this,'I')" >Add</a>
                                             
                                       
                                    </div>

                        </ContentTemplate>
                    </asp:UpdatePanel>
                </telerik:RadPageView>
                <telerik:RadPageView ID="pvCritreria" runat="server" Height="440px">
                    <iframe id="ifrmCriteria" style="height: 99%; width: 99%" runat="server"></iframe>
                </telerik:RadPageView>
                <telerik:RadPageView ID="pvUserCritreria" runat="server" Height="440px">
                    <iframe id="ifrmUserCriteria" style="height: 99%; width: 99%" runat="server"></iframe>
                </telerik:RadPageView>
                  <telerik:RadPageView ID="pvRole" runat="server" Height="440px">
                    <iframe id="ifrmRole" style="height: 99%; width: 99%" runat="server"></iframe>
                </telerik:RadPageView>
            </telerik:RadMultiPage>
            <span class="row" style="text-align: right">
                <input type="button" value="save" id="btnSave2" runat="server"  class="ActionButton GreenButton" onclick="saveLayout()" />
                <input type="button" value="cancel" class="ActionButton GlassButton RedColor" onclick="$('#formProperties').HideModal()" />
            </span>

        </div>
        <asp:HiddenField ID="hdnRecordFilter" runat="server" />
        <asp:HiddenField ID="hdnUserFilter" runat="server" />
        <div class="formSettings" style="display: none; position: absolute; width: 450px" id="divTmplSetList">
            <div id="divNewSet" class="_row">
                <span class="lbl">Template Set Name :</span><span><textarea rows="2" class="txt"></textarea></span>
                <a href="javascript:void(0)" onclick="saveSetName(this,'N')">Create</a>
            </div>
            <div id="divSetCtr">
                <span class="mainHeading">Manage Template Sets</span><br />
                <table id="tblTmplSet" class="simple-grid">
                    <thead>
                        <tr>
                            <th style="width: 325px">Template Set Name</th>
                            <th style="width: 45px">Edit</th>
                            <th>Delete</th>
                        </tr>
                        <tr class="_tmplRow" style="display: none">
                            <td><a onclick="selectSet(this)" class="text-link" href="javascript:void(0)"></a></td>
                            <td><a class="edit" href="javascript:void(0)">Edit</a></td>
                            <td><a class="close" href="javascript:void(0)">X</a></td>
                        </tr>
                    </thead>
                    <tbody>
                        <asp:Repeater ID="rptTmplList" runat="server">
                            <HeaderTemplate>
                            </HeaderTemplate>
                            <ItemTemplate>
                                <tr recid='<%#Eval("LetterTemplateSet_Pid") %>'>
                                    <td>
                                        <a onclick="selectSet(this)" class="text-link" href="javascript:void(0)"><%#Eval("setname") %></a></td>
                                    <td><a class="edit" href="javascript:void(0)">Edit</a></td>
                                    <td><a class="close" href="javascript:void(0)">X</a></td>
                                </tr>
                            </ItemTemplate>
                        </asp:Repeater>
                    </tbody>
                    <tfoot>
                        <tr class="_row">
                            <td>
                                <textarea rows="2" class="txt"></textarea></td>
                            <td><a class="add" href="javascript:void(0)" onclick="saveSetName(this,'A')">Add</a></td>
                            </td>
                                    <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
        <div class="formSettings" style="display: none; position: absolute; width: 450px" id="divConditionEditor">
            <span class="row">
                <span style="width: 90px" class="lbl">Name : </span>
                <input type="text" id="txtConditionName" class="txt" />
            </span>
            <span class="row">
                <span style="width: 90px" class="lbl">Condition : </span>
                <textarea rows="1" id="txtCondition" class="txt"></textarea><a class="expr" href="javascript:void(0)" onclick="showEditor($(this))">...</a>
            </span>
            <span class="row" style="text-align: right;">
                <input type="button" value="save" class="ActionButton GreenButton" onclick="SaveCondition()" />

                <input type="button" value="cancel" class="ActionButton GlassButton RedColor" onclick="$(this).closest('.formSettings').HideModal()" />
            </span>
        </div>

        <div class="formSettings" style="display: none; position: absolute; width: 450px" id="divVariableEditor">
            <span class="row">
                <span style="width: 90px" class="lbl">Name : </span>
                <input type="text" id="txtVName" class="txt" />
            </span>
            <span class="row">
                <span style="width: 90px" class="lbl">Description : </span>
                <textarea rows="3" id="txtVDec" class="txt"></textarea>
            </span>
            <span class="row">
                <span style="width: 90px" class="lbl">Data Type : </span>
                <asp:DropDownList runat="server" ID="cboDataTypes" onchange="toggleSubDT(this)">
                    <asp:ListItem></asp:ListItem>
                </asp:DropDownList>
                <span style="display: none">Of
                    <asp:DropDownList runat="server" ID="cboSubDataType">
                        <asp:ListItem></asp:ListItem>
                    </asp:DropDownList></span>
            </span>
            <span class="row entityctr" style="display: none">
                <span style="width: 95px" class="lbl">Choose Entity : </span>
                <span id="spnVarEntityCtr"></span>
            </span>
            <span class="row">
                <span style="width: 90px" class="lbl">Default Value : </span>
                <textarea rows="1" id="txtVDefault" class="txt"></textarea><a class="expr" href="javascript:void(0)" onclick="showEditor($(this))">...</a>
            </span>
            <span class="row" style="text-align: right;">
                <input type="button" value="save" class="ActionButton GreenButton" onclick="SaveVariable()" />

                <input type="button" value="cancel" class="ActionButton GlassButton RedColor" onclick="$(this).closest('.formSettings').HideModal()" />
            </span>
        </div>
        <div class="formSettings" style="display1: none; position: absolute; width: 600px; height: 570px; left: -10000px" id="divFormulaEditor">
            <span class="row">
                <span style="width: 95px" class="lbl">Function Name : </span>
                <input type="text" id="txtFrName" onblur="$('#spnFName').html($(this).val())" class="txt" />
            </span>
            <span class="row">
                <span style="width: 95px" class="lbl">Description : </span>
                <textarea rows="3" id="txtFrDec" class="txt"></textarea>
            </span>
            <span class="row">
                <span style="width: 95px" class="lbl">Return Type : </span>
                <asp:DropDownList runat="server" ID="cboFrDataTypes" onchange="toggleSubDT(this)">
                    <asp:ListItem></asp:ListItem>
                </asp:DropDownList>
                <span style="display: none">Of
                    <asp:DropDownList runat="server" ID="cboFrSubDataType" onchange="setFunctionReturnType()">
                        <asp:ListItem></asp:ListItem>
                    </asp:DropDownList></span>
            </span>
            <span class="row" style="font-weight: bold; font-size: 14px;"><span style="color: #30F;">public</span> <span id="spnFType" style="color: #00C0B1;">String</span> <span id="spnFName" style="color: #C70000;">Formula123</span><br />
                {</span>

            <span class="row">

                <textarea rows="1" id="txtFormula" class="txt"></textarea>
            </span>
            <span class="row" style="font-weight: bold; font-size: 14px;">}</span>
            <span class="row" style="text-align: right;">
                <input type="button" value="save" class="ActionButton GreenButton" onclick="SaveFormula()" />

                <input type="button" value="cancel" class="ActionButton GlassButton RedColor" onclick="$(this).closest('.formSettings').HideModal()" />
            </span>
        </div>


        <div class="formSettings" style="display: none; position: absolute; min-width: 450px" id="divActivityEditor">
            <span class="row">
                <span style="width: 90px" class="lbl">Title : </span>
                <input type="text" id="txtActName" class="txt" />
            </span>
            <span class="row">
                <span style="width: 90px" class="lbl">Description : </span>
                <textarea rows="3" id="txtActDesc" class="txt"></textarea>
            </span>
            <div id="divEditorCtr"></div>

            <span class="row" style="text-align: right;">
                <input type="button" value="save" class="ActionButton GreenButton" onclick="SaveActivityData()" />

                <input type="button" value="cancel" class="ActionButton GlassButton RedColor" onclick="HidePropEditor(this)" />
            </span>
        </div>
        <div class="formSettings" style="display: none; position: absolute; min-width: 450px" id="divForEachEditor">
            <span class="row">
                <span style="width: 90px" class="lbl">Title : </span>
                <input type="text" id="txtActName_FE" class="txt" />
            </span>
            <span class="row">
                <span style="width: 90px" class="lbl">Description : </span>
                <textarea rows="3" id="txtActDesc_FE" class="txt"></textarea>
            </span>
            <span class="row">
                <span style="width: 90px" class="lbl">For Each : </span>
                <select style="min-width: 225px;" id="ddlForEach"></select>
            </span>
            <span class="row">
                <span style="width: 90px" class="lbl">Iterator Item : </span>
                <input type="text" class="txt" value='"item"' id="txtForEachVar" />
            </span>
            <div id="divForEachCtr"></div>

            <span class="row" style="text-align: right;">
                <a href="javascript:void(0)" style="float: left" onclick="AddForEachCondition({})">Add Condition</a>
                <input type="button" value="save" class="ActionButton GreenButton" onclick="SaveForEachData()" />

                <input type="button" value="cancel" class="ActionButton GlassButton RedColor" onclick="$(this).closest('.formSettings').HideModal()" />
            </span>
        </div>
        <div class="formSettings" style="display1: none; position: absolute; width: 350px; left: -1000px;" id="divEditor">
            <textarea id="codeEditor" style="height: 50px; width: 100px;"></textarea>

            <span class="row" style="text-align: right; border-top: solid 1px #E7E7E7; margin-top: 5px;">
                <input type="button" value="Ok" class="ActionButton GreenButton" onclick="applyEditorValue()" />

                <input type="button" value="Cancel" class="ActionButton GlassButton RedColor" onclick="$(this).closest('.formSettings').HideModal()" />
            </span>
        </div>



        <telerik:RadComboBox ID="cboEntityList" Width="225px" Style="display: none" OnClientSelectedIndexChanging="EntityItemChanging" OnClientSelectedIndexChanged="EntityItemChanged" runat="server"></telerik:RadComboBox>
        <telerik:RadTreeView ID="rtvList" OnClientNodeClicked="FieldNodeClicked" Style="display: none;" runat="server">
            <WebServiceSettings Path="WorkflowDesigner.aspx" Method="GetListNodes"></WebServiceSettings>
            <Nodes>
                <telerik:RadTreeNode ExpandMode="WebService" Text="Fields" Value="" Parent="checkbox"></telerik:RadTreeNode>
            </Nodes>
        </telerik:RadTreeView>
    </form>
   <style>
       .titleBar .selectX-input
       {
           color:#fff;
       }

   </style>
    <script type="text/javascript">



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
    <script>
        var EntityHelper;
        function EntityListHelper() {
            this.Cbo = $find("cboEntityList");
        }
        EntityListHelper.prototype.ShowEntityList = function (e) {
            var input = $(e.srcElement);
            var cbo = this.GetEntityList();
            if (cbo.next().hasClass("txt"))
                cbo.next().show();
            input.hide().before(cbo.show());
            EntityHelper.SelectItem(input.closest(".row").data("Value"));
            EntityHelper.RegisterItemChange(EntityPickList_ComboChanged);
        }
        EntityListHelper.prototype.RegisterItemChange = function (f, host) { if (host) f = Function.createDelegate(host, f); this.changefunc = f; }
        EntityListHelper.prototype.RegisterItemChanging = function (f, host) { if (host) f = Function.createDelegate(host, f); this.changingFunc = f; }
        EntityListHelper.prototype.GetEntityTitle = function (value) {
            if ($.isEmpty(value))
                return;
            value = value.Trim('"');
            var item = this.Cbo.findItemByValue(value);
            return (item ? item.get_text() : null);
        }
        EntityListHelper.prototype.GetValue = function () { var item = this.Cbo.get_selectedItem(); return (item ? item.get_value() : ""); }
        EntityListHelper.prototype.GetEntityList = function () { return $(this.Cbo.get_element()); }
        EntityListHelper.prototype.SelectItem = function (value) {
            var item = (value ? this.Cbo.findItemByValue(value) : null);
            if (item) item.select(); else { this.Cbo.set_selectedIndex(0); this.Cbo.set_text(""); }
        }
        EntityListHelper.prototype.Reset = function () { this.RegisterItemChange(null); $("body").append(this.GetEntityList().hide()); }
    </script>

    <script>


        var EntityFieldHelper;
        function EntityFieldlistHelper() {
            this.list = $find("rtvList");
            this.EntityID = "";
            this.ShowChildren = false;
        }


        EntityFieldlistHelper.prototype.RegisterFieldSelected = function (f, host) { if (host) f = Function.createDelegate(host, f); this.func = f; }

        EntityFieldlistHelper.prototype.LoadFields = function (id, showChildren) {
            if (this.EntityID == id && showChildren == this.ShowChildren && this.list.get_allNodes().length > 1)
                return;
            this.EntityID = id;
            this.ShowChildren = showChildren;
            var tree = this.list;
            var node = tree.get_nodes().getNode(0);
            tree.trackChanges();
            node.collapse();
            node.get_nodes().clear();
            node.set_expandMode(3);
            node.set_visible(true);
            node.get_attributes().setAttribute("EntityID", id);
            node.get_attributes().setAttribute("LoadChildren", showChildren);
            tree.commitChanges();
            node.set_expanded(true);
        }

        EntityFieldlistHelper.prototype.GetFieldList = function () { return $(this.list.get_element()); }

        EntityFieldlistHelper.prototype.Reset = function () { this.RegisterFieldSelected(null); $("body").append(this.GetFieldList().hide()); }
    </script>
    <script type="text/javascript">


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

        function EntityItemChanged(sender, args) {
            if (typeof EntityHelper.changefunc == "function")
                EntityHelper.changefunc($(sender.get_element()), args.get_item().get_text(), args.get_item().get_value());
        }
        function EntityItemChanging(sender, args) {
            if (typeof EntityHelper.changingFunc == "function") {
                args.set_cancel(EntityHelper.changingFunc($(sender.get_element()), args.get_item().get_text(), args.get_item().get_value()) == false);
            }
        }
        function FieldNodeClicked(sender, args) {
            if (typeof EntityFieldHelper.func == "function") {
                var n = args.get_node();
                var attr = n.get_attributes();
                EntityFieldHelper.func($(sender.get_element()), n.get_text(), n.get_value(), attr.getAttribute("FieldName"), attr.getAttribute("FieldType"));
            }
        }
        var cEditor = CodeMirror.fromTextArea(document.getElementById("codeEditor"), {
            lineNumbers: true,
            matchBrackets: true,
            extraKeys: { "Ctrl-Space": "autocomplete" },
            mode: "text/x-csharp"
        });
        cEditor.setSize(350, 120);

        var frEditor = CodeMirror.fromTextArea(document.getElementById("txtFormula"), {
            lineNumbers: true,
            matchBrackets: true,
            extraKeys: { "Ctrl-Space": "autocomplete" },
            mode: "text/x-csharp"
        });
        frEditor.setSize(600, 300);
        


        function toggleSubDT(ddl) {
            ddl = $(ddl);
            ddl.next().next().setDisplay(ddl.val() == "List")
            setFunctionReturnType();
            ToggleVarEntityList(ddl)
        }




        function OpenRecordFilter() {
            if ($.isEmpty($('#<%= ifrmCriteria.ClientID %>').attr('src'))) {
                var url = "../Meta/Filters_Add.aspx?PageMode=Setting&SID=" + sid + "&Hidebutton=1&ShowFilterBtn=1&ReturnXml=1";
                $('#<%= ifrmCriteria.ClientID %>').attr('src', url);
                url = "../Meta/Filters_Add.aspx?PageMode=Settings&SID=" + usid + "&Hidebutton=1&ShowFilterBtn=1&ReturnXml=1";
                $('#<%= ifrmUserCriteria.ClientID %>').attr('src', url);
            }
            return false;
        }

        function saveForm() {
            if ($.isEmpty(WFSenerioID)) {
                $("#formProperties").data("Mode", "Save").ShowModal().css("top", "100px");
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


        function saveLayout(newVersion) {
            newVersion = (newVersion === true);
            var iframe = document.getElementById("ifrmCriteria");
            var criteria = "", userCriteria = "";
            if (iframe && iframe.contentWindow && typeof iframe.contentWindow.createXml == "function")
                criteria = iframe.contentWindow.createXml(null, "");
            else
                criteria = $("#<%= hdnRecordFilter.ClientID %>").val();
            iframe = document.getElementById("ifrmUserCriteria");
            if (iframe.contentWindow && typeof iframe.contentWindow.createXml == "function")
                userCriteria = iframe.contentWindow.createXml(null, "");
            else
                userCriteria = $("#<%= hdnUserFilter.ClientID %>").val();

            $("#leftPanel,#centerPanel,#rightPanel").children(".ui-resizable-handle").each(function () { $(this).parent().append($(this)); })
            var data = new Object();
            data["Type"] = "SaveWFScenerio";

            data["@WFSenerioID"] = ($("#formProperties").data("Mode") == "SaveAs" || newVersion ? "" : WFSenerioID);
            data["@ParentID"] = WFSenerioID;
            data["@WFID"] = $.QS("WFID");
            data["@WFScenerioName"] = $("#<%=txtName.ClientID%>").val();
            data["@WFScenerioDescription"] = $("#<%=txtDesc.ClientID%>").val();
            data["@LetterTemplateID"] = $("#<%=hdnTmplName.ClientID%>").val();
            data["@ResourceVersion"] = $.defaultVal($("#<%=txtVersion.ClientID%>").val(),0);
            data["@IsDeactivated"] = $("#<%=chkIsDeactivated.ClientID%>").checked() ? 1 : 0;
            data["@Criteria"] = criteria;
            data["@UserCriteria"] = userCriteria;
            data["@WFXML"] = SaveXml();
            data["EntityID"] = $.QS("EID");
            data["WFType"] = WorkflowType;
            data["OnDemand"] = OnDemandWF;
            data["Md5"] = $("#<%=hdnMd5.ClientID%>").val();
            data["InUse"] = $("#<%=hdnInUse.ClientID%>").val();
            data["NewVersion"] = newVersion;
            data["VersionNumber"] = $("#<%=lblVersion.ClientID%>").html().Trim().Trim('v');
            data["au"] = $.QS("_au");
            var arrRoles = [];
            arrRoles = [];//
            var arr = $("#<%= ifrmRole.ClientID%>")[0].contentWindow.GetRoles()
            for (var i = 0; i < arr.length; i++) arrRoles.push(arr[i]);           
            var Permission = [];
            var arrPermission = $("#<%= ifrmRole.ClientID%>")[0].contentWindow.GetPermission();
            for (var i = 0; i < arrPermission.length; i++) Permission.push(arrPermission[i]);           
            $.Notify("Saving...");
            PageMethods.Execute(data,arrRoles, Permission, PageMethodSuccess, PageMethodError);
            $('#formProperties').HideModal();
        }


        function PageMethodSuccess(result) {
            $.Notify(false);
            $("#lblTitle").html($("#<%=txtName.ClientID%>").val());
            WFSenerioID = result["@WFSenerioID"];
            if (result["Conflict"]) {
                if (confirm('This workflow scenario is currently in use.\nChanges made to it can cause instability in the system.\nDo you wish to save this scenario with a new version number.'))
                    saveLayout(true);
            }             
            else {
                if (window.opener && typeof window.opener.RefreshGrid == "function")
                    window.opener.RefreshGrid();
                if (result["NewVersion"] == true) {
                    $("#<%=hdnMd5.ClientID%>").val("");
                    $("#<%=hdnInUse.ClientID%>").val("");
                }
                $("#<%=lblVersion.ClientID%>").html(result["VersionNumber"] > 0 ? "v"+result["VersionNumber"] : "");
                var arr = eval(result["GUIDArray"]);
                for (var i = 0; i < guidValues.length; i++) {
                    var w = $("#" + guidValues[i].Id);
                    var defn = w.data("WfDefinition");
                    if (defn && defn.Inputs) {
                        defn.Inputs[guidValues[i].Prop] = '"' + arr[i] + '"';
                        guidValues[i].Guid = arr[i];
                    }
                }
            }
            if (result["Exception"]) {
                alert(result["ExceptionMessage"]);
            }
        }
        function PageMethodError(result) {
            $.Notify({ Message: "Error Occured.", NotifyOnly: true });
        }


        function saveFilterXml(filterXml) {

            $("#<%= hdnRecordFilter.ClientID %>").val(filterXml);
        }
        function saveUserFilterXml(filterXml) {

            $("#<%= hdnUserFilter.ClientID %>").val(filterXml);
        }

    </script>

    <script type="text/javascript">
        var dataLoaded = false;
        $(function () {

            if ($.QS("PageType") == "Track") {
                trackingMode = true;
                $("#divWorkArea").css({ top: 25, left: 0 });
                $(document.body).append('<div id="divInstanceData"><span class="title">Workflow Information</span><span class="lbl">Start Date</span><span class="value">' + WorkflowTrackingData.StartDate +
                    '</span><span class="lbl">End Date</span><span class="value">' + WorkflowTrackingData.EndDate +
                    '</span><span class="lbl">Workflow Completed</span><span class="value">' + (WorkflowTrackingData.WorkflowCompleted==true?'Yes':'No') +
                    '</span><span class="lbl">Workflow Succeeded</span><span class="value">' + (WorkflowTrackingData.WorkflowCompleted == true?(WorkflowTrackingData.WorkflowSucceded == true ? 'Yes' : 'No'):"-") +
                    '</span><span class="lbl">Workflow Message</span><span class="value">' + $.defaultVal(WorkflowTrackingData.WorkflowMessage,"-") +
                    '</span><span style="' + (WorkflowTrackingData.HasException == true ? '' : 'display:none') + '" class="lbl">Exception Message</span><span class="value">' + WorkflowTrackingData.ExceptionMessage +
                    '</span></div>');
            }
        })
        function pageLoad() {
            
            $("#<%=ddlVersions.ClientID%>").SelectX();
            showEmptyGridMessage("tblLetters");
            showEmptyGridMessage("tblTmplSet");
            $("#spnBlankTmplSet").setDisplay($("#<%=lbnTmplName.ClientID%>").html() == "");
            $("#tblTmplSet").on("click", ".close,.edit", function () {
                if ($(this).hasClass("close"))
                    deleteSet($(this));
                else
                    showTmplEditForm($(this))
            })
            $("#tblLetters").on("click", ".close", function () {
                deleteLetter($(this));
            })
            if (dataLoaded)
                return;
            dataLoaded = true;
            EntityHelper = new EntityListHelper();
            EntityFieldHelper = new EntityFieldlistHelper();
            OpenRecordFilter();
            PopulateWFItems();
            $("#btnNewFml").closest(".rpItem").node(0).append($("#btnNewFml"));
            $("#btnNewVar").closest(".rpItem").node(0).append($("#btnNewVar"));
            $("#<%=cboDataTypes.ClientID %>").chosen({ disable_search: true, width: "150px" });
            $("#<%=cboSubDataType.ClientID %>").chosen({ disable_search: true, width: "150px" });
            $("#<%=cboFrDataTypes.ClientID %>").chosen({ disable_search: true, width: "150px" });
            $("#<%=cboFrSubDataType.ClientID %>").chosen({ disable_search: true, width: "150px" });
            //$("#divActivityEditor").draggable();
            $("#divForEachCtr").sortable();

            $(document).on("keyup", function (e) { if (e.keyCode == 46 && selectedItem) deleteSelectedItem(); });
            $("#divWorkArea").on("click", function (e) { if (e.srcElement == $("#divWorkArea")[0]) deselectAll(); });
            $('#divEditor').resizable({
                resize: function () {
                    cEditor.setSize($(this).innerWidth() - 46, $(this).innerHeight() - 86);
                },
                minHeight: 75,
                minWidth: 120
            });
            $('#divFormulaEditor').resizable({
                resize: function () {
                    frEditor.setSize($(this).innerWidth() - 46, $(this).innerHeight() - 316);
                },
                minHeight: 250,
                minWidth: 350
            });
            //LoadData();
        }

        function showScenarioData(ddl) {
            ddl = $(ddl);
            if (ddl.val() == "0")
                return;
            window.location = "WorkflowDesigner.aspx?ver=1&PageType=" + $.QS("PageType") + "&WFID=" + $.QS("WFID") + "&EID=" + $.QS("EID") + "&ID=" + ddl.val();
        }

    </script>
    <script type="text/javascript">
       

        function showEmptyGridMessage(id) {
            $("#"+id+">TBODY").find(".emptyRow").remove();
            if ($("#" + id + ">TBODY").find("TR").length <= 0) {
                $("#" + id + ">TBODY").append("<TR class='emptyRow'><TD colspan='" + $("#" + id + ">THEAD").find("._tmplRow").children().length + "'>No records created !</TD></TR>")
            }
        }
        function showTemplateSetList(mode) {
            $("#divNewSet").setDisplay(mode == "A");
            $("#divSetCtr").setDisplay(mode != "A");
            $("#divTmplSetList").ShowModal({ showClose: true, autoClose: true }).css("top", "200px");
        }
        function showTmplEditForm(a) {
            a.hide();
            var e = $("<a class='update' href='javascript:void(0)'>Update</a>");
            var c = $("<a class='cancel' href='javascript:void(0)'>Cancel</a>");
            a.after(e);            
            e.after(c);           
            var td = a.closest("TD").prev();
            var txt = $("<textarea class='txt'></textarea>");
            txt.val(td.find("A").html());
            td.find("A").hide().after(txt);
            c.on("click", function () {
                var td = $(this).closest("TD").prev();
                td.find("A").show();
                td.find(".txt").remove();
                $(this).closest("TD").find(".edit").show();
                $(this).closest("TD").find(".update").remove();
                $(this).remove();
            });
            e.on("click", function () { saveSetName(this, 'E'); });
        }
        function saveSetName(a, mode) {
            var txtBox = $(a).closest((mode=="E"?"TR":"._row")).find(".txt");
            var txt = txtBox.val();
            if (txt.Trim() == "") {
                alert("Please Enter Valid Name.")
                return;
            }
            var data = {};
            data["Type"] = (mode == "E" ? "UpdateSet" : "InsertSet");
            data["@SetName"] = txt;
            data["@ID"] = (mode == "E" ? $.defaultVal($(a).closest("TR").attr("recid"), "") : "");
            $.Notify("");
            PageMethods.LetterDao(data,
                function (result) {
                    $.Notify(false);
                    if (result["Success"]) {
                        var id = result["ID"];
                        txtBox.val("")

                        if (mode == "N") {
                            $("#divTmplSetList").HideModal();
                            $("#<%=lbnTmplName.ClientID%>").html(txt);
                            $("#<%=hdnTmplName.ClientID%>").val(id);
                            $("#spnBlankTmplSet").hide();
                            $("#<%=btnRefreshLetter.ClientID%>").click();
                        }
                        if (mode == "E") {
                            txtBox.prev().html(txt);
                            $(a).closest("TD").find(".cancel").trigger("click");
                        }
                        else {
                            var row = $("#tblTmplSet>THEAD").find("._tmplRow").clone();
                            $("#tblTmplSet>TBODY").append(row.removeClass("_tmplRow").show());
                            row.node(0).node(0).html(txt);
                            row.attr("recid", id);
                        }
                        showEmptyGridMessage("tblTmplSet");
                    }
                    else
                        alert(result["Error"]);
                },
                function () {
                    $.Notify(false);
                });

            }

            function deleteSet(a) {
                if (!confirm('Confirm Deletion'))
                    return;
                var data = {};
                data["Type"] = "DeleteSet"
                data["@ID"] = $.defaultVal(a.closest("TR").attr("recid"), "");

                $.Notify("");
                PageMethods.LetterDao(data,
                    function (result) {
                        $.Notify(false);
                        if (result["Success"]) {
                            a.closest("TR").remove();                            
                            showEmptyGridMessage("tblTmplSet");
                        }
                        else
                            alert(result["Error"]);
                    },
                    function () {
                        $.Notify(false);
                    });
            }
            function selectSet(a) {
                a = $(a);
                var id = $.defaultVal(a.closest("TR").attr("recid"), "");
                $("#divTmplSetList").HideModal();
                $("#<%=lbnTmplName.ClientID%>").html(a.html());
                $("#<%=hdnTmplName.ClientID%>").val(id);
                $("#spnBlankTmplSet").hide();
                $("#<%=btnRefreshLetter.ClientID%>").click();
            }
        function deleteLetter(a) {
            if (!confirm('Confirm Deletion'))
                return;
            var data = {};
            data["Type"] = "DeleteLetter"
            data["@ID"] = $.defaultVal(a.closest("TR").attr("recid"), "");

            $.Notify("");
            PageMethods.LetterDao(data,
                function (result) {
                    $.Notify(false);
                    if (result["Success"]) {
                        a.closest("TR").remove();
                        showEmptyGridMessage("tblLetters");
                    }
                    else
                        alert(result["Error"]);
                },
                function () {
                    $.Notify(false);
                });
        }
        function addNewLetter(a, mode) {
            if (mode == "N") {
                a = $(a);
                window.open("MessageTemplate.aspx?PageType=A&_ns=1&Tmpl=" + $("#<%=hdnTmplName.ClientID%>").val() + "&wf=1&EID=" + $.defaultVal($.QS("EID"), ""));
            }
            else if (mode == "V") {
                a = $(a);
                window.open("MessageTemplate.aspx?PageType=E&_ns=1&ID=" + a.closest("TR").attr("ltrid") + "&Tmpl=" + $("#<%=hdnTmplName.ClientID%>").val() + "&wf=1&EID=" + $.defaultVal($.QS("EID"), ""));
            }
            else if (mode == "E") {
                $("#<%=ddlTmplLetterList.ClientID%>").closest("DIV").show();
            }
            else if (mode == "I") {
                var data = {};
                data["Type"] = "AddExistingLetter"
                data["@TmplID"] = $("#<%=hdnTmplName.ClientID%>").val();
                data["@LtrID"] = $("#<%=ddlTmplLetterList.ClientID%>").val();
                var opt = $("#<%=ddlTmplLetterList.ClientID%>").selectedItem();
                $.Notify("");
                PageMethods.LetterDao(data,
                    function (result) {
                        $.Notify(false);
                        if (result["Success"]) {
                            var id = result["ID"];
                            if(id !="")
                            addNewLetterToGrid(opt.text(), id, data["@LtrID"]);
                            opt.remove();
                        }
                        $("#<%=ddlTmplLetterList.ClientID%>").closest("DIV").hide();
                    },
                    function () {
                        $.Notify(false);
                    });
            }
        }
        function addNewLetterToGrid(txt, id, ltrid) {
            var row = $("#tblLetters>TBODY").find("TR[ltrid=" + ltrid + "]");
            if (row.exists()) {
                row.node(0).node(0).html(txt);
                return;
            }
            row = $("#tblLetters>THEAD").find("._tmplRow").clone();
            $("#tblLetters>TBODY").append(row.removeClass("_tmplRow").show());
            row.node(0).node(0).html(txt);
            row.attr("recid", id); 
            row.attr("ltrid", ltrid);
            showEmptyGridMessage("tblLetters");
        }

        function GetWFVariables() {
            return { VariablesList: WFVariables   };
        }
    </script>

</body>
</html>

