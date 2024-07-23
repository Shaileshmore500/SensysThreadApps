<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ReportDesigner.aspx.cs" Inherits="SensysErp.Meta.ReportDesigner" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>New Report</title>
    <%# HelperLib.Web.WebResources.GetResource("~/css/normalize.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/fonts/font.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/System.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
    <style>
     

    </style>
    <script type="text/javascript">
        var DetailTableList = [];
        var LauncherParamList = [];
        var SubreportList = [];
        var customDragDrop = null;
        var ReportId = "";
        function detailTableItem(data) {
            this.Table = ko.observable(data.Table).extend({ notify: 'always' });
            this.TableName = ko.observable(data.TableName);
            this.Name = data.Name;
            this.SubreportId = ko.observable(data.SubreportId);
            this.SubreportTitle = ko.observable(data.SubreportTitle);
            this.Parent = ko.observable(data.Parent);
            this.ParentName = ko.observable(data.ParentName);
            this.AutoMap = ko.observable(data.AutoMap == undefined ? true : data.AutoMap);
            this.Params = ko.observableArray(data.Params && data.Params.length > 0 ? data.Params : [new detailTableItemParams({})]);
            this.Filter = ko.observable(data.Filter);

        }
        function detailTableItemParams(data) {
            this.Fk = ko.observable(data.Fk);
            this.Pk = ko.observable(data.Pk);
        }
        function launcherParamItem(data) {
            this.Type = ko.observable(data.Type);
            this.Name = ko.observable(data.Name);
            this.ID = ko.observable(data.ID);
            this.Title = ko.observable(data.Title);
            this.Table = ko.observable(data.Table);
            this.TableName = ko.observable(data.TableName);
            this.Form = ko.observable(data.Form);
            this.OnChange = ko.observable(data.OnChange);
        }
        var _currentFocussedExprText;
        
        function InitDesigner(rpt) {
            DevExpress.Designer.Report.PromptBoolean = { False: "False", True: "False", Prompt: "False" }
            var rightPanel = $(rpt.mainElement).children(".dx-designer").children().children(".dxrd-designer-wrapper").children(".dx-shadow").children(".dxrd-right-panel");
            var treeParent = rightPanel.children(".dxrd-fieldslist-wrapper").first().find(".dx-scrollview-content").first();
            if (treeParent.length == 0) {
                window.setTimeout(function () { InitDesigner(rpt); }, 1000);
                return;
            }
            
            //Fixing borderwidth prop missing in crossband
            var borderwidth = $(DevExpress.Designer.Report.controlsFactory.controlsMap.XRCrossBandBox.info).filter(function () { return this.modelName == "@BorderWidth"; });
            if (borderwidth.length > 0) {
                borderwidth[0].editor = DevExpress.JS.Widgets.editorTemplates.numeric;
                borderwidth[0].displayName = "Border Width"
            }

            //fixing default line width for crossline
            var xrline = $(reportDesigner.designerModel.toolboxItems).filter(function () { return this.type == "XRCrossBandLine"; });
            if (xrline.length > 0) {
                xrline[0].info["@WidthF"] = "1";
                xrline[0].info.size = "1, 50";
            }

            //Label dbl click
            reportDesigner.designerModel.inlineTextEdit.show = function (a) {

                var c = reportDesigner.designerModel.inlineTextEdit;
                var b = reportDesigner.designerModel.selection;
                var d = b.focused() && b.focused().getControlModel().text;
                _currentFocussedExprText = d;
                LoadExpressionEditor(d());
                return;
                if (!c._showInline()) {
                    var e = b.selectedItems ? 1 === b.selectedItems.length : !!b.focused();
                    if (e && d && !b.focused().locked) {
                        if (c.text(d()),
                        c._showInline(!0),
                        a) {
                            var f = $(a).find("textarea")[0];
                            f && f.select()
                        }
                    } else
                        c._showInline(!1)
                }
            }
            reportDesigner.designerModel.navigateByReports.goToSubreport = function (control) {
                showSubreport(control);
            }
            //displaying databindings property since it was hidden by devx since last update 
            DevExpress.Designer.Report.ReportElementViewModel.prototype.isPropertyVisible = function () {
                //return this.dataBindingMode !== c.DataBindingMode.Bindings ? "dataBindings" !== a && "formattingRuleLinks" !== a && "formattingRuleSheet" !== a && 0 !== a.indexOf("popularDataBinding") : 0 !== a.indexOf("popularExpression")
                return true;
            }
            //Subreport dbl click
            $(".dxrd-toolbox-item").each(function () { var t = $(this).attr("title"); if (t && t.indexOf("XR") > -1) $(this).attr("title", t.substring(2)); })

            //map subreport to observable
            $(SubreportList).each(function () {
                if ($.isEmpty(this.Name))
                    return true;
                var that = this;
                var sr = $(rpt.designerModel.controls()).filter(function () { return this.value && this.value.controlType == "XRSubreport" && this.value.name() == that.Name; });
                if (sr && sr.length > 0)
                    that.Name = sr[0].value.name;
            });

            treeParent.prepend($("#divErpField").show().css("position", "static"));
            $("#tree").hide();
            var CustomDragDropHandler = (function (_super) {
                __extends(CustomDragDropHandler, _super);
                function CustomDragDropHandler(surface, selection, undoEngine, snapHelper, dragHelperContent, controlsFactory) {
                    var _this = this;
                    _super.call(this, surface, selection, undoEngine, snapHelper, dragHelperContent, controlsFactory);
                    this["helper"] = function (draggable) {
                        var size = DevExpress.Designer.Size.fromString("100,23");
                        _this.recalculateSize(size);
                        dragHelperContent.setContent(new DevExpress.Designer.Rectangle(0, 0, _this._size.width(), _this._size.height()));
                    }
                }
                CustomDragDropHandler.prototype.drag = function (a, b) {
                    var c = !0 !== a.altKey;
                    if (this.selection.dropTarget) {
                        var d = this.selection.dropTarget.getControlModel().getMetaData().isContainer ? this.selection.dropTarget : this.selection.dropTarget.parent || this.selection.dropTarget
                          , e = d.locked
                          , f = ko.dataFor($("#divErpField").parent()[0]).getControlModel && ko.dataFor($("#divErpField").parent()[0]).getControlModel()
                          , g = f && f.getMetaData() || ko.dataFor($("#divErpField").parent()[0]).info;
                        g && g.canDrop && (e = e || !g.canDrop(d, f)),
                        e ? (this.snapHelper && this.snapHelper.deactivateSnapLines(),
                        c = !1,
                        this.dragHelperContent && this.dragHelperContent.isLocked(!0)) : this.dragHelperContent && this.dragHelperContent.isLocked(!1)
                    }
                    if (c) {
                        var h = this._getAbsoluteSurfacePosition(b)
                          , i = this.snapHelper && this.snapHelper.activateSnapLines({
                              left: h.left,
                              top: h.top,
                              right: h.left + this._size.width(),
                              bottom: h.top + this._size.height()
                          });
                        b.position.left -= i.left,
                        b.position.top -= i.top
                    }
                }


                CustomDragDropHandler.prototype.doStopDrag = function (ui, draggable) {
                    this.dragHelperContent.reset();
                    var elem = $(currentDragEvent.target);
                    var c = DevExpress.Designer.Report;
                    var h = this._getAbsoluteSurfacePosition(ui);
                    var drp = this.selection.dropTarget;
                    if (!drp)
                        return false;
                    drp.underCursor().x = h.left - (drp.absolutePosition && drp.absolutePosition.x() || 0);
                    drp.underCursor().y = h.top - (drp.absolutePosition && drp.absolutePosition.y() || 0);
                    var fieldType = elem.data("fieldType");
                    var path = elem.data("nodePath");
                    var fld = null;
                    if (fieldType == "Image" || elem.data("isImage") == "1") {
                        fld = drp.getControlModel().createChild($.extend({
                            "@ControlType": "XRPictureBox"
                        }, c.controlsFactory.controlsMap.XRPictureBox.defaultVal));
                        if (fieldType == "Image")
                            fld.sizing("Squeeze");

                        if (elem.data("isImage") == "1") {
                            //fld.dataBindings().findBinding("ImageUrl").dataMember(elem.data("imgPath"))
                            fld.imageUrl(AppRootPath + "/" + elem.data("imgPath"));
                        }
                        if (fieldType == "Image" || elem.data("isResource") == "1") {
                            var g = fld.dataBindings().findBinding("Image");
                            g.dataMember(elem.data("nodePath"));
                        }
                        this._size.height(100);
                    }
                    else if (fieldType.toLowerCase() == "checkbox") {
                        fld = drp.getControlModel().createChild($.extend({
                            "@ControlType": "XRCheckBox"
                        }, c.controlsFactory.controlsMap.XRCheckBox.defaultVal));
                        fld.text("CheckBox");
                        var g = fld.dataBindings().findBinding("CheckState");
                        g.dataMember(elem.data("nodePath"));
                    }
                    else {
                        fld = drp.getControlModel().createChild($.extend({
                            "@ControlType": "XRLabel"
                        }, c.controlsFactory.controlsMap.XRLabel.defaultVal));
                        fld.text("");
                        var g = fld.dataBindings().findBinding("Text");
                        g.dataMember(elem.data("nodePath"));
                    }
                    //fld.name(path.replace(new RegExp("[.]", "g"), "_"));
                    this.addControl(fld, drp, this._size)
                }
                return CustomDragDropHandler;
            })(DevExpress.Designer.ToolboxDragDropHandler);

            customDragDrop = new CustomDragDropHandler(
                       reportDesigner.GetDesignerModel().surface,
                       reportDesigner.GetDesignerModel().selection,
                       reportDesigner.GetDesignerModel().undoEngine,
                       reportDesigner.GetDesignerModel().snapHelper,
                       reportDesigner.GetDesignerModel().dragHelperContent,
                       DevExpress.Designer.Report.controlsFactory
                       );
        }
    </script>

    <%# HelperLib.Web.WebResources.GetResource("~/css/CustomControl/CustomControl.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/layout_grid.css")%>
    <style>
        html, body, form
        {
            height: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
        }

        .toolbar .toolBtn
        {
            color: #444444;
            border-right: solid 2px #DCDCDC;
        }

        .disabled.toolbar .toolBtn
        {
            color: #D8D8D8;
        }

        .toolbar .toolBtn:hover
        {
            background-color: #A1A3AB;
        }

        .disabled.toolbar .toolBtn:hover
        {
            background-color: transparent;
        }

        .toolbar .toolBtn:hover SPAN:before
        {
            border-right: solid 1px #FFFFFF;
            text-shadow: 2px 2px 3px #7B7B7B;
            color: #FFF;
        }

        .disabled.toolbar .toolBtn:hover SPAN:before
        {
            text-shadow: none;
            color: #D8D8D8;
        }

        .dtlfilter
        {
            text-decoration: none;
            color: #777;
            margin: 4px;
        }

            .dtlfilter:before
            {
                content: "\f0b0";
                font-family: fontawesome;
                font-weight: normal;
                font-size: 15px;
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
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div style="height: 100%; width: 100%">
            <asp:ScriptManager ID="ScriptManager1" runat="server" EnablePageMethods="true">
            </asp:ScriptManager>
            <%= HelperLib.Web.WebResources.GetResource("~/css/base.css")%>
            <%= HelperLib.Web.WebResources.GetResource("~/css/form.css")%>
            <div id="chromefontbug" style="position: absolute; top: -1000px; left: -1000px; visibility: hidden">
                <span class="dtlfilter"></span>
                <span class="formSettings "><span class="txt"></span><span class="ddl"></span></span>
            </div>
            <div style="visibility:hidden;position:absolute;top:-100px;">
            <input type="text" id="PreventChromeAutocomplete" name="PreventChromeAutocomplete" autocomplete="fake-text" />
            <input type="submit" onclick="return false" value="cancel enter" style="display:none" />
            <input style="display1:none" type="text" name="fakeusernameremembered"/>
            <input style="display1:none" type="password" name="fakepasswordremembered"/>
            </div>
            <div id="divErpField" style="position: absolute; left: -500px; margin-left: 6px;">
                <asp:HiddenField ID="hdnxml" runat="server" />
                <a href="javascript:void(0)" onclick="manageChildTables()" class="dx-icon dx-icon-dxrd-image-add-datasource" style="font-size: 12px; color: #12B100; text-indent: 16px; white-space: nowrap; display: block; margin: 3px; font-family: sans-serif; font-weight: bold;">Manage Tables</a>
                <telerik:RadTreeView Skin="Metro" OnClientNodeClicked="OnFieldNodeClicked" OnClientNodeExpanded="OnFieldNodeExpanded" OnClientMouseOver="OnClientMouseOver" ID="rtvFieldItems" runat="server">
                    <%-- <NodeTemplate>
                                <span class="dx-image-fieldlist-listsource" style="display: inline-block; width: 12px; height: 13px; margin-right: 10px;"></span><span>Account</span>
                            </NodeTemplate>--%>
                    <WebServiceSettings Path="ReportDesigner.aspx" Method="GetNodes"></WebServiceSettings>
                    <Nodes>
                    </Nodes>
                </telerik:RadTreeView>
            </div>
            <div id="generalSettings" class="toolbar">
                <div id="lbnSave" runat="server" onclick="showReportDiv('Save')" class="toolBtn save">
                    <span>Save</span>
                </div>
                <div id="lbnSaveAs" runat="server" onclick="showReportDiv('SaveAs')"
                    class="toolBtn saveas">
                    <span>Save As</span>
                </div>
                <div onclick="showReportDiv('RptProp')"
                    class="toolBtn property">
                    <span>Report Properties</span>
                </div>

                <div onclick="showFilter()"
                    class="toolBtn filter">
                    <span>Filter</span>   
                    <asp:HiddenField ID="hdnFilter" runat="server" />
                    <asp:HiddenField ID="hdnCompulsoryFilter" runat="server" />                 
                </div>

                <div
                    class="toolBtn CloseWin" onclick="return confirm('Do you wish to exit Report Designer?') && window.close()">
                    <span>Close</span>
                </div>
            </div>
            <div style="position: absolute; top: 36px; left: 0; right: 0; bottom: 0">
                <dx:ASPxReportDesigner  ID="reportDesigner" Height="100%" runat="server"  ClientInstanceName="reportDesigner">
                    <ClientSideEvents Init="InitDesigner" />
                </dx:ASPxReportDesigner>
            </div>

            <div class="formSettings" style="display: none; width: 750px;" id="divSave">
                <telerik:RadTabStrip ID="tabRightsInfo" runat="server" MultiPageID="RadMultiPageRights"
                    OnClientTabSelected="OnClientTabSelected" Width="100%" Height="98%"
                    SelectedIndex="0">
                    <Tabs>
                        <telerik:RadTab Text="General" PageViewID="pvGeneral" Value="General">
                        </telerik:RadTab>
                         <telerik:RadTab Text="Report Launcher" PageViewID="pvRptParams" Value="General">
                        </telerik:RadTab>
                        <telerik:RadTab Text="Role" PageViewID="pvRole" Value="Roles">
                        </telerik:RadTab>
                        <telerik:RadTab Text="Permission" PageViewID="pvRole" Value="Permission">
                        </telerik:RadTab>
                        <telerik:RadTab Text="Style" Visible="false" PageViewID="pvStyle" Value="Style">
                        </telerik:RadTab>
                    </Tabs>
                </telerik:RadTabStrip>
                <telerik:RadMultiPage ID="RadMultiPageRights" runat="server" SelectedIndex="0"
                    Style="border: solid 1px #898C95 !important; margin-left: -1px !important; width: 100% !important;">
                    <telerik:RadPageView ID="pvGeneral" runat="server" Height="435px" Style="overflow-y: auto">
                        <div>
                            <table class="table-form">
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="Label3" runat="server" Text="Report Name : "></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox style="width:400px" ID="txtReportName" runat="server"></asp:TextBox>
                                        <asp:HiddenField ID="hdnReportName" runat="server" />
                                      
                                    </td>

                                </tr>
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="lblDesc" runat="server" Text="Report Desc : "></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox style="width:400px" ID="txtDesc" TextMode="MultiLine" Rows="2" runat="server"></asp:TextBox>
                                        <asp:HiddenField ID="hdnDesc" runat="server" />
                                    </td>

                                </tr>
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="lbl12" runat="server" Text="Display Amount in "></asp:Label></td>
                                    <td class="td-value">
                                        <asp:DropDownList Style="POSITION: static" ID="ddlAmountIn" runat="server" Width="163px">
                                            <asp:ListItem Value="1">Actual</asp:ListItem>
                                            <asp:ListItem Value="1000">Thousand</asp:ListItem>
                                            <asp:ListItem Value="100000">Lakhs</asp:ListItem>
                                            <asp:ListItem Value="1000000">Million</asp:ListItem>
                                            <asp:ListItem Value="10000000">Crore</asp:ListItem>
                                            <asp:ListItem Value="1000000000">Billion</asp:ListItem>
                                        </asp:DropDownList></td>

                                </tr>
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="lbl121" runat="server" Text="Default Number Format"></asp:Label></td>
                                    <td class="td-value">
                                        <asp:DropDownList Style="POSITION: static" ID="ddlNumFormat" onchange="$(this).next().setDisplay($(this).val()=='CST')" runat="server" Width="163px">
                                            <asp:ListItem Value="0">Not-Set</asp:ListItem>                                           
                                            <asp:ListItem Value="{0:#}">-1123</asp:ListItem>
                                            <asp:ListItem Value="{0:#,###,###}">-1,123</asp:ListItem>
                                            <asp:ListItem Value="{0:#0.00}">-1123.00</asp:ListItem>
                                            <asp:ListItem Value="{0:#,###,##0.00}">-1,123.00</asp:ListItem>
                                            <asp:ListItem Value="{0:#;(#);0}">(1123)</asp:ListItem>
                                            <asp:ListItem Value="{0:#,###,###;(#,###,###);0}">(1,123)</asp:ListItem>
                                            <asp:ListItem Value="{0:#0.00;(#0.00);0.00}">(1123.00)</asp:ListItem>
                                            <asp:ListItem Value="{0:#,###,##0.00;(#,###,##0.00);0.00}">(1,123.00)</asp:ListItem>
                                            <asp:ListItem Value="CST">Custom</asp:ListItem>
                                        </asp:DropDownList> <asp:TextBox ID="txtNumFormat" style="display:none" runat="server"></asp:TextBox></td>
                                   
                                </tr>                                
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="lbl1211" runat="server" Text="Default Date Format"></asp:Label></td>
                                    <td class="td-value">
                                        <asp:DropDownList Style="POSITION: static" ID="ddlDateFormat" onchange="$(this).next().setDisplay($(this).val()=='CST')" runat="server" Width="163px">
                                            <asp:ListItem Value="0">Not-Set</asp:ListItem>
                                            <asp:ListItem Value="{0:dd/MM/yyyy}">15/12/2010</asp:ListItem>
                                            <asp:ListItem Value="{0:dd/MM/yy}">15/12/10</asp:ListItem>
                                            <asp:ListItem Value="{0:dd-MMM-yyyy}">15-Dec-2010</asp:ListItem>
                                            <asp:ListItem Value="{0:MMMM dd,yyyy}">December 15,2010</asp:ListItem>  
                                             <asp:ListItem Value="CST">Custom</asp:ListItem>                                         
                                        </asp:DropDownList>
                                        <asp:TextBox ID="txtDateFormat" style="display:none" runat="server"></asp:TextBox>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="Label4" runat="server" Text="Default Date-Time Format"></asp:Label></td>
                                    <td class="td-value">
                                        <asp:DropDownList Style="POSITION: static" ID="ddlDateTimeFormat" onchange="$(this).next().setDisplay($(this).val()=='CST')" runat="server" Width="163px">
                                            <asp:ListItem Value="0">Not-Set</asp:ListItem>
                                            <asp:ListItem Value="{0:dd/MM/yyyy}">15/12/2010</asp:ListItem>
                                            <asp:ListItem Value="{0:dd/MM/yy}">15/12/10</asp:ListItem>
                                            <asp:ListItem Value="{0:dd-MMM-yyyy}">15-Dec-2010</asp:ListItem>
                                            <asp:ListItem Value="{0:MMMM dd,yyyy}">December 15,2010</asp:ListItem>
                                            <asp:ListItem Value="{0:dd/MM/yyyy HH:mm}">15/12/2010 13:23</asp:ListItem>
                                            <asp:ListItem Value="{0:dd/MM/yyyy hh:mm tt}">15/12/2010 1:23 pm</asp:ListItem>
                                            <asp:ListItem Value="{0:dd-MMM-yyyy HH:mm}">15-Dec-2010 13:23</asp:ListItem>
                                            <asp:ListItem Value="{0:dd-MMM-yyyy hh:mm tt}">15-Dec-2010 1:23 pm</asp:ListItem>
                                            <asp:ListItem Value="{0:MMMM dd,yyyy HH:mm}">December 15,2010 13:23</asp:ListItem>
                                            <asp:ListItem Value="{0:MMMM dd,yyyy hh:mm tt}">December 15,2010 1:23 pm</asp:ListItem>
                                            <asp:ListItem Value="CST">Custom</asp:ListItem>
                                        </asp:DropDownList>
                                        <asp:TextBox ID="txtDateTimeFormat" style="display:none" runat="server"></asp:TextBox>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="Label5" runat="server" Text="Attach Script"></asp:Label></td>
                                    <td class="td-value">
                                        <asp:DropDownList ID="ddlScriptResource" onchange="toggleScriptPath()"  runat="server">
                                        </asp:DropDownList></td>


                                </tr>
                                <tr id="trUrl1" style="display: none">
                                        <td>

                                            <span style="width: 90px"
                                                class="lbl">Dll Path: </span></td>
                                        <td>
                                            <asp:TextBox ID="txtExternalScript" Style="width: 500px" CssClass="txt" runat="server"></asp:TextBox><input type="button" id="btnUrl" value="..." />

                                            <div id="divUrlTree">
                                                <telerik:RadTreeView ID="tvUrl" OnClientNodeClicked="selectUrl" runat="server">
                                                </telerik:RadTreeView>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr id="trUrl2" style="display: none">
                                        <td>
                                            <span style="width: 90px"
                                                class="lbl">Class Name: </span></td>
                                        <td>
                                            <asp:TextBox ID="txtExternalScriptClass" Style="width: 500px" CssClass="txt" runat="server"></asp:TextBox></span>
                                        </td>
                                    </tr>
                                <tr style="display:none">
                                    <td class="td-label">
                                        <asp:Label ID="lblPageSize" runat="server" Text="Page Size"></asp:Label></td>
                                    <td class="td-value">
                                        <asp:DropDownList ID="ddlPageSize" onchange="ddlPageSizeChanged()" runat="server">
                                        </asp:DropDownList></td>


                                </tr>
                                <tr class="trCustom" style="display:none">
                                    <td class="td-label">
                                        <asp:Label ID="Label8" runat="server" Text="Width "></asp:Label></td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtWidth" runat="server" Text="44" SkinID="txtRight">
                                        </asp:TextBox><span style="font-family: nunitoregular; color: #7C7C7C;">Inches</span></td>
                                </tr>
                                <tr class="trCustom" style="display:none">
                                    <td class="td-label">
                                        <asp:Label ID="Label9" runat="server" Text="Height "></asp:Label></td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtHeight" runat="server" Text="34" SkinID="txtRight">
                                        </asp:TextBox><span style="font-family: nunitoregular; color: #7C7C7C;">Inches</span></td>
                                </tr>
                                <tr style="display:none">
                                    <td class="td-label">
                                        <asp:Label ID="lblPageOrnt" runat="server" Text="Paper Orientation"></asp:Label></td>
                                    <td class="td-value">
                                        <asp:RadioButton runat="server" Checked="true" ID="rdoPortrait" GroupName="rdo" Text="Portrait"></asp:RadioButton>
                                        <asp:RadioButton runat="server" ID="rdoLandscape" GroupName="rdo" Text="Landscape"></asp:RadioButton>
                                    </td>
                                </tr>
                                <tr id="trResVersion" runat="server">
                                    <td class="td-label">
                                        <asp:Label ID="Label14" runat="server" Text="Resource Version"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <telerik:RadNumericTextBox ID="txtResVersion" runat="server"></telerik:RadNumericTextBox>
                                    </td>
                                </tr>
                                <tr style="display:none">
                                    <td class="td-label">
                                        <asp:Label ID="lblReportSort" runat="server" Text="Sort"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <div id="divReportSort" class="reportSort" style="width: 250px; background-color: yellow"></div>
                                    </td>
                                </tr>
                            </table>
                            <table style="display:none" class="table-form">
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="lblTopMargin" runat="server" Text="Top Margin"></asp:Label>
                                    </td>
                                    <td class="td-value" colspan="3">
                                        <asp:TextBox ID="txtTopMargin" runat="server" Text="0" SkinID="txtRight" Width="50">
                                        </asp:TextBox>
                                        <span style="font-family: nunitoregular; color: #7C7C7C;">Inches</span>
                                    </td>
                                    <td class="td-label">
                                        <asp:Label ID="lblLeftMargin" CssClass="td-label" runat="server" Text="Left Margin"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtLeftMargin" runat="server" Text="0" SkinID="txtRight" Width="50">
                                        </asp:TextBox>
                                        <span style="font-family: nunitoregular; color: #7C7C7C;">Inches</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="lblBottompMargin" runat="server" Text="Bottom Margin"></asp:Label>
                                    </td>
                                    <td class="td-value" colspan="3">
                                        <asp:TextBox ID="txtBottomMargin" runat="server" Text="0" SkinID="txtRight" Width="50">
                                        </asp:TextBox>
                                        <span style="font-family: nunitoregular; color: #7C7C7C;">Inches</span>
                                    </td>
                                    <td class="td-label">
                                        <asp:Label ID="lblRightMargin" CssClass="td-label" runat="server" Text="Right Margin"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtRightMargin" runat="server" Text="0" SkinID="txtRight" Width="50">
                                        </asp:TextBox>
                                        <span style="font-family: nunitoregular; color: #7C7C7C;">Inches</span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </telerik:RadPageView>
                     <telerik:RadPageView ID="RadPageView1" runat="server" Height="435px" Style="overflow-y: auto">
                        <div>
                             <table class="table-form">
                                  <tr>
                                     <td colspan="2">
                                         <asp:CheckBox id="chkDisableAutoLaunch" runat="server" Text="Disable Report Binding On Load" />
                                     </td>
                                 </tr>
                                 <tr>
                                     <td colspan="2">
                                         <asp:RadioButton onchange="toggleLauncherSetting()" id="rdoAuto" GroupName="launcher" runat="server" Text="Parameter Based" />
                                         <asp:RadioButton id="rdoManual" Checked="true" onchange="toggleLauncherSetting()" GroupName="launcher" runat="server" Text="Launch Manually" />
                                     </td>
                                 </tr>
                                
                                <tr >
                                    <td class="td-label">
                                        <asp:Label ID="Label6" runat="server" Text="Action Settings : "></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox style="width:615px" Rows="5" TextMode="MultiLine" ID="txtAction" runat="server"></asp:TextBox>
                                    </td>

                                </tr>
                                 <tr>
                                     <td></td>

                                 </tr>
                                 </table>
                             <div id="divLauncherParam">
                            <table id="tblLauncherParam" style="margin-left: 15px; margin-top: 10px">
                                <thead>
                                    <tr>
                                        <th style="font-weight: normal">Type</th>
                                        <th style="font-weight: normal">Name</th>
                                        <th style="font-weight: normal">Title</th>
                                        <th style="font-weight: normal">ID</th>                                      
                                        <th style="font-weight: normal">Entity</th>
                                        <th style="font-weight: normal">Form</th>                                        
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- ko foreach: detailTables -->
                                    <tr class="trTable">
                                        <td><span style="position: relative">
                                            <select class="ddl _p" onchange="onLauncherTypeChange(this)"
                                                multiple="1" style="display: none; z-index: 100; position: absolute; top: 20px; left: 0px; background-color: #fff; border: solid 1px #ababab; box-shadow: 2px 2px 5px #b3b3b3;">
                                                <option value="Text">Text</option>
                                                <option value="Number">Number</option>
                                                <option value="Decimal">Decimal</option>
                                                <option value="CheckBox">CheckBox</option>
                                                <option value="Date">Date</option>
                                                <option value="DateTime">DateTime</option>
                                                <option value="SingleSelect">SingleSelect</option>
                                                <option value="MultiSelect">MultiSelect</option>
                                            </select>
                                            <input class="txt _p" data-bind="value: Type" onclick="$(this).prev().show()" style="width: 55px;" type="text" />
                                        </span></td>
                                        <td>
                                            <input class="txt" data-bind="value: Name" style="width: 125px" type="text" /></td>
                                        <td>
                                            <input class="txt" data-bind="value: Title" style="width: 125px" type="text" /></td>
                                        <td>
                                            <input class="txt" data-bind="value: ID" style="width: 125px" type="text" /></td>                                      
                                        <td>
                                            <input class="txt _lst" data-bind="value: Table,disable: Type()!='SingleSelect' && Type()!='MultiSelect'" style="width: 125px" type="text" onclick="showEntityList(this)" /></td>
                                        <td>
                                            <input class="txt _lst" data-bind="value: Form,disable: Type()!='SingleSelect' && Type()!='MultiSelect'" style="width: 120px" type="text" /></td>
                                       
                                        <td><a data-bind="click: $root.deleteItem" class="close" href="javascript:void(0)">x</a></td>
                                    </tr>
                                    <!-- /ko -->
                                </tbody>
                            </table>
                            <span style="margin: 15px 0 5px 15px;display:block">Launcher Script</span>
                            <asp:TextBox TextMode="MultiLine" Rows="15" Width="710px" Text='
function OnReportPrinting(){
    //return false;
    //return "a=1&b=2";
}
' Style="margin-left:15px" runat="server" ID="txtLauncherScript" /></div>
                        </div>
                         </telerik:RadPageView>
                    <telerik:RadPageView ID="pvRole" runat="server" Height="410px">
                        <iframe id="ifrmRole" style="height: 99%; width: 99%" runat="server"></iframe>
                    </telerik:RadPageView>
                    <telerik:RadPageView ID="pvStyle" runat="server" Height="410px">
                        <div id="tabs">
                            <ul>
                                <li><a id="linkPageHeader" style="width: 100%" onclick="LoadStyleData(this)" tabid="pageHeader" href="#tabContent">Page Header</a></li>
                                <li><a id="linkReportHeader" style="width: 100%" onclick="LoadStyleData(this)" tabid="reportHeader" href="#tabContent">Report Header</a></li>
                                <li><a id="linkItem" style="width: 100%" onclick="LoadStyleData(this)" tabid="reportDetail" href="#tabContent">Item</a></li>
                                <li><a id="linkGroupHeader" style="width: 100%" onclick="LoadStyleData(this)" tabid="GroupHeader" href="#tabContent">Group Header</a></li>
                                <li><a id="linkGroupFooter" style="width: 100%" onclick="LoadStyleData(this)" tabid="GroupFooter" href="#tabContent">Group Footer</a></li>

                                <li><a id="linkSubreportHeader" style="width: 100%" onclick="LoadStyleData(this)" tabid="SubreportHeader" href="#tabContent">Subreport Header</a></li>
                                <li><a id="linkSubreportItem" style="width: 100%" onclick="LoadStyleData(this)" tabid="SubreportDetail" href="#tabContent">Subreport Item</a></li>
                                <li><a id="linkSubreportFooter" style="width: 100%" onclick="LoadStyleData(this)" tabid="SubreportFooter" href="#tabContent">Subreport Footer</a></li>

                                <li><a id="linkReportFooter" style="width: 100%" onclick="LoadStyleData(this)" tabid="reportFooter" href="#tabContent">Report Footer</a></li>
                                <li><a id="linkPageFooter" style="width: 100%" onclick="LoadStyleData(this)" tabid="pageFooter" href="#tabContent">Page Footer</a></li>

                            </ul>
                            <div id="tabContent">
                                <table class="tblStyle" id="s">
                                    <tr>
                                        <td style="width: 90px" class="text-headings">Horizontal-Align</td>
                                        <td colspan="2">
                                            <select id="ddlStyleHALign" onchange="setData('1')">
                                                <option selected="selected" value="Left">Left</option>
                                                <option value="Center">Center</option>
                                                <option value="Right">Right</option>
                                            </select>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td style="width: 90px" class="text-headings">Background-Color</td>
                                        <td style="width: 100px">
                                            <input style="width: 40px" id="txtStyleBGColor" onblur="setData('1')" value=""
                                                type="text" /></td>
                                        <td style="width: 100px"></td>
                                    </tr>
                                    <tr>
                                        <td colspan="3" style="background-color: #EDEDED"></td>
                                    </tr>
                                    <tr>
                                        <td style="width: 90px" class="text-headings">Font-Style</td>
                                        <td colspan="2">
                                            <select id="ddlStyleFont" onchange="setData('1')" style="width: 140px">
                                                <option selected="selected" value="Verdana">Verdana</option>
                                                <option value="Courier">Courier</option>
                                                <option value="Courier-Bold">Courier-Bold</option>
                                                <option value="Courier-BoldOblique">Courier-BoldOblique</option>
                                                <option value="Courier-Oblique">Courier-Oblique</option>
                                                <option value="Helvetica">Helvetica</option>
                                                <option value="Helvetica-Bold">Helvetica-Bold</option>
                                                <option value="Helvetica-BoldOblique">Helvetica-BoldOblique</option>
                                                <option value="Helvetica-Oblique">Helvetica-Oblique</option>
                                                <option value="Symbol">Symbol</option>
                                                <option value="Times">Times</option>
                                                <option value="Times-Bold">Times-Bold</option>
                                                <option value="Times-BoldItalic">Times-BoldItalic</option>
                                                <option value="Times-Italic">Times-Italic</option>
                                                <option value="Times-Roman">Times-Roman</option>
                                                <option value="Arial">Arial</option>
                                            </select>
                                            &nbsp; <span class="text-headings">Size</span>&nbsp;&nbsp;
		<input id="txtStyleFontSize" style="width: 32px" class="txtNum" onchange="setData('1')" type="text" value="12" />
                                            <span class="text-headings">px</span></td>
                                    </tr>
                                    <tr>
                                        <td style="width: 90px" class="text-headings">Font Color:</td>
                                        <td colspan="2">
                                            <input id="txtStyleFontColor" onblur="setData('1')" style="width: 40px;" type="text"
                                                value="#000000" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="width: 90px"></td>
                                        <td colspan="2">
                                            <input type="checkbox" id="chkStyleBold" onchange="setData('1')"><label title="Bold" style="font-weight: bold" for="chkStyleBold"><b>B</b></label>
                                            <input type="checkbox" id="chkStyleItalic" onchange="setData('1')"><label title="Italic" style="font-style: italic" for="chkStyleItalic"><b>I</b></label>
                                            <input type="checkbox" id="chkStyleUnderline" onchange="setData('1')"><label title="Underline" style="text-decoration: underline" for="chkStyleUnderline"><b>U</b></label>
                                            <input type="checkbox" id="chkStyleStrike" onchange="setData('1')"><label title="Strike through" style="text-decoration: line-through;" for="chkStyleStrike"><b>S</b></label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3" style="background-color: #EDEDED"></td>
                                    </tr>
                                    <tr>
                                        <td style="width: 90px;" class="text-headings">Border-Top</td>
                                        <td colspan="2">
                                            <select id="ddlStyleBT" onchange="setData('1')">
                                                <option selected="selected" value="none">None</option>
                                                <option value="solid">Single</option>
                                                <option value="double">Double</option>
                                                <option value="dashed">Dash</option>
                                                <option value="dotted">Dot</option>
                                            </select>
                                            &nbsp; <span class="text-headings">Color</span>
                                            <input id="txtStyleBTColor" onblur="setData('1')" style="width: 40px;" type="text"
                                                value="#000000" />
                                            &nbsp; <span class="text-headings">Width</span> &nbsp;<input id="txtStyleBTWidth" onchange="setData('1')" style="width: 60px" class="txtNum"
                                                type="text" value="1" />
                                            <span class="text-headings">px</span></td>
                                    </tr>
                                    <tr>
                                        <td style="width: 90px;" class="text-headings">Border-Right</td>
                                        <td colspan="2">
                                            <select id="ddlStyleBR" onchange="setData('1')">

                                                <option selected="selected" value="none">None</option>
                                                <option value="solid">Single</option>
                                                <option value="double">Double</option>
                                                <option value="dashed">Dash</option>
                                                <option value="dotted">Dot</option>
                                            </select>
                                            &nbsp; <span class="text-headings">Color</span>
                                            <input id="txtStyleBRColor" onblur="setData('1')" style="width: 40px;" type="text"
                                                value="#000000" />
                                            &nbsp;<span class="text-headings"> Width</span> &nbsp;<input id="txtStyleBRWidth" onchange="setData('1')" style="width: 60px" class="txtNum"
                                                type="text" value="1" />
                                            <span class="text-headings">px</span></td>
                                    </tr>
                                    <tr>
                                        <td style="width: 90px" class="text-headings">Border-Bottom</td>
                                        <td colspan="2">
                                            <select id="ddlStyleBB" onchange="setData('1')">

                                                <option selected="selected" value="none">None</option>
                                                <option value="solid">Single</option>
                                                <option value="double">Double</option>
                                                <option value="dashed">Dash</option>
                                                <option value="dotted">Dot</option>
                                            </select>
                                            &nbsp; <span class="text-headings">Color</span>
                                            <input id="txtStyleBBColor" onblur="setData('1')" style="width: 40px;" type="text"
                                                value="#000000" />
                                            &nbsp; <span class="text-headings">Width</span> &nbsp;<input id="txtStyleBBWidth" onchange="setData('1')" style="width: 60px" class="txtNum"
                                                type="text" value="1" />
                                            <span class="text-headings">px</span></td>
                                    </tr>
                                    <tr>
                                        <td style="width: 90px;" class="text-headings">Border-Left</td>
                                        <td colspan="2">
                                            <select id="ddlStyleBL" onchange="setData('1')">
                                                <option selected="selected" value="none">None</option>
                                                <option value="solid">Single</option>
                                                <option value="double">Double</option>
                                                <option value="dashed">Dash</option>
                                                <option value="dotted">Dot</option>
                                            </select>
                                            &nbsp; <span class="text-headings">Color</span>
                                            <input id="txtStyleBLColor" onblur="setData('1')" style="width: 40px;" type="text"
                                                value="#000000" />
                                            &nbsp; <span class="text-headings">Width</span> &nbsp;<input id="txtStyleBLWidth" onchange="setData('1')" style="width: 60px" class="txtNum"
                                                type="text" value="1" />
                                            <span class="text-headings">px</span></td>
                                    </tr>
                                    <tr>
                                        <td colspan="3" style="background-color: #EDEDED;"></td>
                                    </tr>
                                    <tr>
                                        <td colspan="3" style="text-align: center; height: 45px; overflow: auto;">
                                            <span style="font-size: 9px; display: inline-block; text-align: center; width: 100px;"
                                                id="spnPreview">AaBbCcDdEeFf</span>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </telerik:RadPageView>
                </telerik:RadMultiPage>

                <div class="row" style="text-align: right">
                    <input type="button" id="btnSaveProp" onclick="saveReport();" runat="server" class="ActionButton GlassButton" value="Save" />
                    <input type="button" onclick="$('#divSave').HideModal();" class="ActionButton GlassButton RedColor" value="Cancel" />
                </div>
            </div>
            <div style="display: none; width: 850px" class="formSettings" id="FilterProps">
                <a class="pClose" href="javascript:void(0)" style="" onclick="$('#FilterProps').HideModal();return false;"></a>
                <telerik:RadTabStrip ID="RadTabStrip1" OnClientTabSelected="OnFilterTabSelected" runat="server" MultiPageID="RadMultiPage1"
                    Width="100%" Height="98%"
                    SelectedIndex="0">
                    <Tabs>
                        <telerik:RadTab Text="Filter" PageViewID="pvFilter" Value="Filter">
                        </telerik:RadTab>
                        <telerik:RadTab Text="Compulsory Filter" PageViewID="pvCompulsoryFilter" Value="CompulsoryFilter">
                        </telerik:RadTab>
                    </Tabs>
                </telerik:RadTabStrip>
                <telerik:RadMultiPage ID="RadMultiPage1" runat="server" SelectedIndex="0"
                    Style="border: solid 1px #898C95 !important; margin-left: -1px !important; width: 100% !important;">
                    <telerik:RadPageView ID="pvFilter" runat="server" Height="440px">
                        <iframe id="ifrmReportFilter" tabid="Filter" style="height: 99%; width: 99%" runat="server"></iframe>
                    </telerik:RadPageView>
                    <telerik:RadPageView ID="pvCompulsoryFilter" runat="server" Height="440px">
                        <iframe id="ifrmCompulsoryFilter" tabid="CompulsoryFilter" style="height: 99%; width: 99%" runat="server"></iframe>
                    </telerik:RadPageView>
                </telerik:RadMultiPage>
                <asp:Button ID="btnFilterSubmit" runat="server" CssClass="ActionButton GreenButton" Text="Submit" OnClientClick="return ValidateXml();" />
                <asp:Button ID="btnFilterCancel" CssClass="ActionButton RedButton" runat="server" Text="Cancel" OnClientClick="return CloseFilterScreen();" />
            </div>
            <div class="formSettings" id="divSubFilter" style="display: none; width: 775px; height: 440px">
                <a class="pClose" href="javascript:void(0)" style="" onclick="$('#divSubFilter').HideModal();return false;"></a>
                <iframe id="iframe_SubFilter" frameborder="0" style="height: 97%; width: 98%" runat="server"></iframe>
                <input type="button" value="Submit" class="ActionButton GreenButton" onclick="SaveSubCriteria()" />
                <input type="button" value="Cancel" class="ActionButton GlassButton RedColor" onclick="$('#divSubFilter').HideModal(); return false;" />
            </div>
            <div class="formSettings" id="divSubreport" style="display: none; width: 525px;">
                <span class="mainHeading">Subreport Details</span>
                <div id="subInfoCntr">
                    <div class="row">
                        <asp:Label ID="Label1" CssClass="lbl" runat="server" Text="Choose Entity"></asp:Label>
                        <input class="txt" data-bind="value: TableName, attr: { 'table': Table }" style="width: 250px" type="text" onclick="showEntityList(this)" />
                        <input data-bind="value: Name" type="hidden" />
                        <input data-bind="value: SubreportId" type="hidden" />
                    </div>
                    <div class="row">
                        <asp:Label ID="Label2" CssClass="lbl" runat="server" Text="Select Subreport"></asp:Label>
                        <telerik:RadComboBox ID="cboExistingSR" Width="250px" runat="server" OnClientSelectedIndexChanged="cboExistingSR_SelectedIndexChanged" OnClientItemsRequesting="cboExistingSR_ItemsRequesting" EnableLoadOnDemand="true">
                            <WebServiceSettings Method="GetRelatedSR" Path="ReportDesigner.aspx" />
                        </telerik:RadComboBox>
                        <a style="font-size: 12px;color: #12B100;text-indent: 8px;white-space: nowrap;display: inline-block;margin: 0px;font-family: sans-serif;font-weight: bold;" 
                            target="_blank" data-bind="text: ($.isEmpty(SubreportId()) ? 'Design New' : 'Modify Report'), attr: { href: 'reportDesigner.aspx?PageType=' + ($.isEmpty(SubreportId()) ? 'A' : 'E') + '&ID=' + SubreportId() + '&EID=' + Table()+'&Sr=1' }">Design</a>
                    </div>
                    <div class="row">
                        <span class="lbl" style="width: 160px;">Map Relation Automatically</span>
                        <input id="chk2" data-bind="checked: AutoMap" type="checkbox" style="vertical-align: middle" />
                        <input data-bind="value: TableName" type="hidden" /><a onclick="showEntityFilter(this)" style="margin-left: 50px;vertical-align: middle;" class="dtlfilter" title="Filter Records" href="javascript:void(0)"><span style="    margin-left: 5px;text-decoration: underline;">Filter Records</span></a>
                    </div>
                    <div class="row" style="position:relative" data-bind="visible: !AutoMap()">
                        <span class="lbl" >Choose Parent</span>
                            <select multiple="1" style="display:none;position: absolute;top: 29px;left:113px;background-color: #fff;border: solid 1px #ababab;box-shadow: 2px 2px 5px #b3b3b3;" class="ddl" data-bind="options: viewModel.getItems(Table()), optionsText: 'name', optionsValue: 'id', optionsCaption: 'Please Select'"></select>
                            <input class="txt" id="txtSrParentList"  data-bind="value: Parent" style="width: 205px;" type="text" />
                    </div>
                    <div class="row">
                        <table>
                            <thead data-bind="visible: !AutoMap()">
                                <tr>
                                    <th colspan="2" style="padding-left: 15px; color: #00980D; padding-top: 5px; padding-bottom: 5px; font-size: 12px;">Map Relations</th>
                                </tr>
                                <tr>
                                    <th style="font-weight: normal">Child Column</th>
                                    <th style="font-weight: normal">Parent Column</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- ko foreach: Params -->
                                <tr class="trParam" data-bind="visible: !$parent.AutoMap()">

                                    <td colspan="2" style="white-space: nowrap">
                                        <input class="txt lhs"  data-bind="value: Fk" style="width: 205px; margin-left: 45px" type="text" onclick="showEntityFieldList(this)" />
                                        <input class="txt rhs" data-bind="value: Pk" style="width: 205px" type="text" onclick="showEntityFieldList(this)" />
                                        <a data-bind="click: function (data, event) { viewModel.deleteParamItem($data, $parent); }" class="close" href="javascript:void(0)">x</a></td>
                                </tr>
                                <!-- /ko -->
                            </tbody>
                        </table>
                    </div>
                    <div class="row " style="text-align: right">
                        <input type="button" id="btnSubNext" onclick="$('#divSubreport').HideModal();" class="ActionButton GreenButton" value="Ok" />
                        <input type="button" style="display: none" onclick="$('#divSubreport').HideModal();" class="ActionButton GlassButton RedColor" value="Cancel" />
                    </div>

                </div>
            </div>
            <div class="formSettings" id="divManageTables" style="display: none; width: 555px; overflow: visible; min-height: 250px; padding-bottom: 40px;">
                <span class="mainHeading">Add Child Tables</span>
                <table style="margin-left: 15px; margin-top: 10px">
                    <thead>
                        <tr>
                            <th style="font-weight: normal">Child Table</th>
                            <th style="font-weight: normal">Parent Table</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- ko foreach: detailTables -->
                        <tr class="trTable">
                            <td>
                                <input class="txt" data-bind="value: Table, attr: { 'table': Table }" style="width: 250px" type="text" onclick="showEntityList(this)" /></td>
                            <td><span style="position:relative">
                                <select class="ddl _p" onchange="$(this).next().val($(this).val());ko.contextFor($(this).next()[0]).$data.Parent($(this).val()[0]);$(this).hide();$(this).val([])" multiple="1" style="display:none;z-index:100;position: absolute;top: 20px;left:0px;background-color: #fff;border: solid 1px #ababab;box-shadow: 2px 2px 5px #b3b3b3;" data-bind="options: $root.getItems(Table()),  optionsText: 'name', optionsValue: 'id', optionsCaption: 'Please Select'"></select>
                            <input class="txt _p" data-bind="value: Parent" onclick="$(this).prev().show()" style="width: 205px;" type="text" />
                            </span></td><td>
                                <input title="Map Relation Automatically" type="checkbox" data-bind="checked: AutoMap" /></td>
                            <td>
                                <input data-bind="value: TableName" type="hidden" /><a onclick="showEntityFilter(this)" class="dtlfilter" title="Filter Records" href="javascript:void(0)"></a></td>
                            <td><a data-bind="click: $root.deleteItem" class="close" href="javascript:void(0)">x</a></td>
                        </tr>
                        <tr data-bind="visible: !AutoMap()">
                            <td colspan="5" style="padding-left: 15px; color: #00980D; padding-top: 5px; padding-bottom: 5px; font-size: 12px;">Map Relations</td>
                        </tr>
                        <!-- ko foreach: Params -->
                        <tr class="trParam" data-bind="visible: !$parent.AutoMap()">

                            <td colspan="5" style="white-space: nowrap">
                                <input class="txt lhs" data-bind="value: Fk" style="width: 205px; margin-left: 45px" type="text" onclick="showEntityFieldList(this)" />
                                <input class="txt rhs" data-bind="value: Pk" style="width: 205px" type="text" onclick="showEntityFieldList(this)" />
                                <a data-bind="click: function (data, event) { $root.deleteParamItem($data, $parent); }" class="close" href="javascript:void(0)">x</a></td>
                        </tr>
                        <!-- /ko -->
                        <tr data-bind="visible: !AutoMap()">
                            <td colspan="5">&nbsp;</td>
                        </tr>
                        <!-- /ko -->
                    </tbody>
                </table>

                <div class="row " style="text-align: right; position: absolute; left: 0; bottom: 0; right: 8px">
                    <input type="button" id="Button3" onclick="addChildTablesToReport();" class="ActionButton GreenButton" value="OK" />
                    <input type="button" style="display: none" onclick="$('#divManageTables').HideModal();" class="ActionButton GlassButton RedColor" value="Cancel" />
                </div>

                <div class="divDropDown" style="width: 300px; height: 290px; overflow: hidden" id="divEntityList">
                    <iframe style="height: 100%; width: 100%" scrolling="no" frameborder="0"></iframe>
                </div>
                <div class="divDropDown" style="width: 300px; height: 290px; overflow: hidden" id="divEntityFieldList"></div>
            </div>

         
            
            <div class="formSettings" id="divExprEditor" style="display: none; width: 747px; height: 440px">
                <a class="pClose" href="javascript:void(0)" style="" onclick="$('#divExprEditor').HideModal();return false;"></a>
                <iframe id="ifrExpr" runat="server" frameborder="0" style="height: 97%; width: 98%"></iframe>
                <input type="button" value="Submit" class="ActionButton GreenButton" onclick="SaveExpression()" />
                <input type="button" value="Cancel" class="ActionButton GlassButton RedColor" onclick="$('#divExprEditor').HideModal(); return false;" />
            </div>

             <div class="formSettings" id="divEditSq" style="display: none; width: 370px; height: 230px">
                <a class="pClose" href="javascript:void(0)" style="" onclick="$('#divEditSq').HideModal();return false;"></a>
                 <div class="row">
                        <span class="lbl">Name</span>
                        <input class="txt" id="txtSqName" style="width: 250px" type="text" />                        
                    </div>
                 <div class="row">
                        <span class="lbl">Datatype</span>
                     <select id="ddlSqType" class="ddl">                        
                         <option value="text">Text</option>
                         <option value="number">Number</option>
                         <option value="decimal">Decimal</option>
                         <option value="date">Date</option>
                         <option value="datetime">DateTime</option>
                         <option value="time">Time</option>
                         <option value="checkbox">Checkbox</option>
                         <option value="singleselect">SingleSelect</option>
                     </select>
                 </div>
                 <div class="row">
                        <span class="lbl">Type</span>
                     <select id="ddlSq" onchange="$('#txtSqExpr').closest('.row').hide();$('#divEditSq').find('.dtlfilter').hide();$('#txtSqExpr').closest('.row').setDisplay($(this).val()=='Expression');$('#divEditSq').find('.dtlfilter').setDisplay($(this).val()=='Subquery')" class="ddl">                        
                         <option value="Subquery">Subquery</option>
                         <option value="Expression">Expression</option>                         
                     </select>
                 </div>
                 <div class="row" style="display:none">
                      <textarea id="txtSqExpr" class="txt" style="width:100%" rows="3" placeholder="Enter Expression eg: Field.amount+Field.tax"></textarea>
                 </div>
                 <input  id="hdnSq_query" type="hidden" />  
                 <a onclick="showSQFilter(this)" style="vertical-align: middle;" class="dtlfilter" href="javascript:void(0)"><span style="margin-left: 5px;text-decoration: underline;">Subquery Mapping</span></a>  
                 <br /><br />
                <input type="button" value="Submit" class="ActionButton GreenButton" onclick="updateSqItem()" />
                <input type="button" value="Cancel" class="ActionButton GlassButton RedColor" onclick="$('#divEditSq').HideModal();" />
            </div>
        </div>

    </form>
    <style>
        .rtLI
        {
            border-bottom: solid 1px #F5F5F5;
        }

        #btn-add-dataSouce
        {
            display: none;
        }
        .dxrd-treelist-search-panel-container.dxd-border-primary {
            display:none !important;
        }
        .dxrd-designer-wrapper .dxrd-right-panel .dxrd-fieldslist-wrapper .dxrd-right-panel-body {
            top: 38px;
        }
        .dxrd-surface-wrapper {
            bottom: 0 !important;
        }
        .dxrd-navigation-panel-wrapper {
            display: none;
        }
        .dxrd-designer-wrapper .dxrd-menu-button .dxrd-menu-button-image
        {
            display: none;
        }

        .dxrd-designer-wrapper .dxrd-toolbox-wrapper
        {
            top: 0px;
        }

        .dxrd-control-content
        {
            white-space: nowrap;
        }

        .dxrd-cross-band
        {
            z-index: 0 !important;
        }

            .dxrd-cross-band.ui-resizable
            {
                z-index: 10 !important;
            }

        .divDropDown
        {
            position: absolute;
            display: none;
            width: 224px;
            height: 290px;
            background-color: #FFF;
            border: solid 1px #BABABA;
            z-index: 10;
            box-shadow: 2px 2px 5px #555;
        }

       

        .txt
        {
            padding: 3px;
            border-radius: 0px;
        }

        .close
        {
            margin-left: 0px;
        }

        .ico-app > .rtIn:before,
        .ico-company > .rtIn:before,
        .ico-res > .rtIn:before,
        .ico-txt > .rtIn:before,
        .ico-img > .rtIn:before,
        .ico-folder > .rtIn:before
        {
            font-family: fontawesome;
            font-size: 10px;
            font-weight: normal;
            margin-right: 5px;
        }

        .ico-res > .rtIn:before
        {
            content: "\f1c0";
        }

        .ico-app > .rtIn:before
        {
            content: "\f1b3";
        }

        .ico-company > .rtIn:before
        {
            content: "\f0f2";
        }

        .ico-txt > .rtIn:before
        {
            content: "\f0f6";
        }

        .ico-img > .rtIn:before
        {
            content: "\f1c5";
        }

        .ico-folder > .rtIn:before
        {
            content: "\f07b";
        }
        .clickCopy
        {
            position: absolute;
            display: block;
            cursor: pointer;
            left: -19px;
            top: 1px;
            font-family: fontawesome;
            border: solid 2px #FBC07B;
            padding: 4px;
            border-radius: 12px;
            background-color: #FFFCDA;
        }
            .clickCopy:before
            {
                content:"\f0ea";
                 font-family: fontawesome;
            }
        .newSubquery
        {
            background-color:transparent !important;
            border:none !important;
            cursor: pointer !important;
            color: blue !important;
            font-weight: bold !important;
            text-decoration: underline !important;
        }
       
        .newSubqueryItem  a
        {
            color: #d07300  !important;
            text-decoration: underline;
            outline :none !important;
        }
        .newSubqueryItem .edit,.newSubqueryItem .del
        {
            text-decoration: none;
        }
        .newSubqueryItem .edit:before
        {
            content: "\f040";
            font-family: fontawesome;
            color: green !important;
            margin-left:12px;
        }
        .newSubqueryItem .del:before
        {
            content: "\f00d";
            font-family: fontawesome;
            color: red !important;
            margin-left:7px;
        }
    </style>
    <script type="text/javascript">
        function modifyDatasource() {
            var el = $("#tree").children().eq(0).children().eq(0).children().eq(0)[0];
            if (!el) {
                window.setTimeout(modifyDatasource,1000)
                return;
            }
           
            //ko.dataFor(el).toggleCollapsed();
            var ds = ko.dataFor(el).items();
            if (ds.length == 0)
                return;
            if (ds && ds.length > 0) {
                ds[0].data.name = EntityID.toLowerCase();
                ds[0].data.displayName = EntityID.toLowerCase();
                var pos = 1;
                for (var i = 0; i < DetailTableList.length; i++) {
                    if (!DetailTableList[i].Table())
                        continue;

                    ds[pos].data.name = DetailTableList[i].Table().toLowerCase();
                    ds[pos].data.displayName = DetailTableList[i].Table().toLowerCase();
                    ds[pos].data.specifics = "List";
                    ds[pos].data.isList = true;
                    pos++;
                }
                for (var i = pos; i < ds.length; i++) {
                    ds[i].data.specifics = "";
                    ds[i].data.isList = false;
                }
            }
        }
        $(function () {
            $.getScript("../Scripts/jqhelper.js<%= HelperLib.Web.WebResources.GetVersion("jqhelper.js")%>");
            $.getScript("../Scripts/customcontrols.js<%= HelperLib.Web.WebResources.GetVersion("customcontrols.js")%>", function () {
                
            });

            toggleScriptPath();
            toggleLauncherSetting();
            //customising text displayed in db field and adding tooltip
            ko.bindingHandlers.controlDisplayName.update = function (a, b, c, d, e) {
                var f = b()
                  , g = ko.unwrap(f)
                  , h = g.displayNameParameters()
                  , i = function (b) {
                      return $(a).text(b ? b : "").closest(".dxrd-control").attr("title", $(a).text());
                  }
                ;
                h.dataMember ? (i(h.dataMember),
                e.$root.displayNameProvider().getDisplayName(h.dataSource, h.dataMember, h.dataMemberOffset, !1).done(function (a) {
                    return i(a)
                }).fail(function () {
                    return i(h.dataMember)
                })) : $(a).text(h.text || "").closest(".dxrd-control").attr("title", $(a).text())
            }

            //fixing control alignment issue when controls across multiple bands
            /*removed below code.as its fixed by devx
            DevExpress.Designer.Report.AlignmentHandler.prototype._visitAllSelectedItemsInSameContainerWithFocused = function (a) {
                var b = this._selectionProvider.focused().parent
                  , c = this._selectionProvider.focused();
                this._selectionProvider.selectedItems.filter(function (a) {
                    return !a.locked
                }).filter(function (a) {
                    return a !== c
                }).forEach(function (b) {
                    a(b)
                })
            }*/

            //removeing prompt for converting binding to expression
            DevExpress.Designer.Report.ReportConverter.prototype.convert = function () { }

            //modifying datasources
            DevExpress.Designer.Report.CalculatedFieldsSource.prototype.afterItemsFilled = function (a, b) {

                a.fullPath && (this._ordinaryFieldsInfo[a.fullPath] = b,
                    b.sort(function (a, b) {
                        var c = DevExpress.Designer.Report;
                        var d = c.FieldListController.isList(a) ? 1 : 0
                          , e = c.FieldListController.isList(b) ? 1 : 0;
                        return d !== e ? e - d : a.displayName && b.displayName ? a.displayName.localeCompare(b.displayName) : a.name.localeCompare(b.name)
                    }))

                modifyDatasource();

            }

            //allowing [a.b] in datamemebr property
            DevExpress.JS.Widgets.PathRequest1 = function a(a) {
                if (this.path = "",
                this.fullPath = a,
                a)
                    if (a.indexOf("[") > -1)
                        this.path = this.id = this.ref = a
                    else if (-1 !== a.indexOf(".")) {
                        var b = a.split(".");
                        this.id = this.ref = b[0],
                        b.splice(0, 1),
                        this.path = b.join(".")
                    } else
                        this.id = this.ref = a

            }
            //DevExpress.Designer.Report.ReportDataSourceService.fieldListCallback = function () { return $().promise().done(function () { return []; }); }

            $("#btnUrl").on("click", function (e) { $(e.target).next().show(); e.stopPropagation(); })
            $("#divUrlTree").on("click", function (e) { e.stopPropagation(); });
            $("#txtSrParentList").prev().on("change", function (e) {
                $("#txtSrParentList").val($(this).val());
                //var ctx = ko.contextFor($("#txtSrParentList")[0]);
                //ctx.$data.Parent(p);
                $(this).hide();
                $(this).val([]);
            })
            $("#txtSrParentList").on("click", function (e) {
                e.stopPropagation();
                var list = $("#txtSrParentList").prev();
                list.show();
            });
            $("#divSubreport").on("click", function () { $("#txtSrParentList").prev().hide(); })
            $("#divManageTables").on("click", function (e) {
                if ($(e.target).hasClass("_p"))
                    return;
                $("select").hide()
            })
        });

        
        //$(document).on("mouseover", ".dxd-track-cursor", function (e) {
        //    console.log(this)
        //    var t=$(this);
        //    if (!$.isEmpty(t.attr("title")))
        //        return;
        //    var d = ko.dataFor(t[0])._control.dataBindings();
        //    var tt = d.length > 0 ? d[0].displayExpr() : ko.dataFor(t[0])._control.displayName();
        //    t.attr("title",$.defaultVal(tt," "));
        //});
        $(document).on("click", ".dx-tab", function (e) {
            var t = $(e.target).hasClass("dx-tab") ? $(e.target) : $(e.target).closest(".dx-tab");
            if (t.parent().parent().parent().hasClass("dxrd-navigation-panel-wrapper"))
                console.log(t);
        });
        $(document).click(function (e) {
            $("#divUrlTree").hide();
           if ($(e.target).hasClass("dxrd-image-scripts")) {
                $("#generalSettings").addClass("disabled")
            }
            else if ($(e.target).hasClass("dxrd-image-design")) {
                $("#generalSettings").removeClass("disabled")
            }
            else if ($(e.target).hasClass("dx-texteditor-input") && $(e.target).parent().parent().hasClass("dx-filterstringeditor")) {
                $(e.target).removeAttr("disabled").parent().parent().removeClass("dx-state-disabled")
            }
            if ($("#divEntityList").isVisible() && $(e.target).prop("tagName") != "INPUT")
                $("#divEntityList").hide();
            if ($("#divEntityFieldList").isVisible() && $(e.target).prop("tagName") != "INPUT")
                $("#divEntityFieldList").hide()
        });


        function toggleScriptPath() {
            $("#trUrl1,#trUrl2").hide();
            if($("#<%=ddlScriptResource.ClientID%>").val() == "Ext")
                $("#trUrl1,#trUrl2").show();
        }
        function selectUrl(sender, args) {
            var n = args.get_node();
            if (n.get_attributes().getAttribute("IsFile")) {
                $("#<%=txtExternalScript.ClientID%>").val(n.get_value());
                 $("#divUrlTree").hide();
             }
        }

        function OnClientMouseOver(sender, args) {
            var node = args.get_node();
            var attr = node.get_attributes();
            if (attr.getAttribute("IsField") == "1")
                showCopy(sender, args);
           
            if ($(node.get_element()).hasClass("ui-draggable"))
                return;
           
            if (attr.getAttribute("IsField") == "1" || attr.getAttribute("IsImage") == "1") {
                _makeDraggableItem($(node.get_element()), node);
                $(node.get_element()).data("nodePath", attr.getAttribute("IsResource") == "1" ? "[Resource." + attr.getAttribute("ResId") + "]" : getNodePath(node))
                    .data("value", node.get_value())
                    .data("fieldType", attr.getAttribute("FieldType"));
                if (attr.getAttribute("IsImage") == "1")
                    $(node.get_element()).data("isImage", 1)
                        .data("isResource", attr.getAttribute("IsResource"))
                        .data("imgPath", attr.getAttribute("IsResource") == "1" ? node.get_value() : getFolderPath(node));

            }

        }
        function showCopy(s, a) {
            if (a.get_node().get_level() == 0)
                return;
            if (!window.copyPathBtn) {
                window.copyPathBtn = $("<span  title='Click to copy path' class='clickCopy'></span>");
                window.copyPathBtn.on("click", function (e) { e.stopPropagation(); prompt('Field Path', getNodePath(window.currentCopyNode)); })
            }
            window.currentCopyNode = a.get_node();
            var el = $(a.get_node().get_element());
            el.css("position", "relative")
            el.append(window.copyPathBtn);
        }
        function getFolderPath(node) {
            var n = node;
            var path = "";
            while (true) {
                var t = n.get_text();
                if (n.get_attributes().getAttribute("IsCompany") == "1")
                    t = n.get_attributes().getAttribute("FolderPath");
                path = "/" + t + path;
                n = n.get_parent();
                if (n.get_level() == 0)
                    break;
            }
            return encodeURI(path.ltrim("/"));
        }
        function getNodePath(node) {
            var path = "";
            while (node.get_level() > 0) {
                path = node.get_value() + (path.length > 0 ? "." : "") + path;
                node = node.get_parent();

            }
            var ft = $.defaultVal(node.get_attributes().getAttribute("FieldType"), "Table");
            return "[" + (ft != "Table" ? (ft == "Related" ? node.get_value() : ft) + "." : "Field.") + path.toLowerCase() + "]";
        }
        var datafor = null;
        function _makeDraggableItem(b) {
            if (!datafor)
                datafor = ko.dataFor($(".dxrd-image-label")[0]);
            var g = $(".dx-designer")
              , h = customDragDrop
              , i = {
                  left: 0,
                  top: 0
              }
              , j = function (a) {
                  var b = h.containment || ".dxrd-ghost-container"
                    , c = g.find(b)
                    , d = g.find(".dxrd-ghost-container");
                  a.delta = {
                      left: d.offset().left - c.offset().left,
                      top: d.offset().top - c.offset().top
                  };
                  var d = g.find(".dxrd-viewport");
                  a.scroll = {
                      left: d.scrollLeft() - i.left,
                      top: d.scrollTop() - i.top
                  }
              }
              , k = $.extend({
                  snap: ".dxrd-drag-snap-line",
                  snapTolerance: DevExpress.Designer.SnapLinesHelper.snapTolerance
              }, ko.unwrap(h), {
                  start: function (a) {
                      var c = ($(b).data("ui-draggable"),
                      g.find(".dxrd-viewport"));
                      i.left = c.scrollLeft(),
                      i.top = c.scrollTop()
                      , h.startDrag && h.startDrag(datafor)
                  },
                  stop: function (a, b) {
                      window.currentDragEvent = a;
                      j(b),
                      h.stopDrag(b, datafor);
                  },
                  drag: function (a, c) {
                      a.altKey === !0 || h.alwaysAlt ? $(b).draggable("option", "snap", !1) : $(b).draggable("option", "snap", ".dxrd-drag-snap-line"),
                      j(c),
                      h.drag && h.drag(a, c)
                  },
                  helper: function (a) {
                      $(b).draggable("option", "snap", ".dxrd-drag-snap-line"),
                      h.helper && h.helper(datafor);
                      var c = g.find(".dxrd-drag-helper-source").clone().css({
                          display: "block"
                      });
                      return c.appendTo(g.find(k.containment)),

                      c
                  }
              });
            k.containment = g.find(k.containment),
            $(b).draggable(k)
        }
    </script>
    <script>

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
        function OnFilterTabSelected(sender, args) {
            if (!sender) {
                if ($.isEmpty($('#<%= ifrmReportFilter.ClientID %>').attr('src'))) {
                    var url = "../Meta/Filters_Add.aspx?PageMode=Setting&SID=" + filterID + "&Hidebutton=1&ShowFilterBtn=1&ReturnXml=1";
                    $('#<%= ifrmReportFilter.ClientID %>').attr('src', url);
                }
                return;
            }
            var tab = args.get_tab();
            var value = tab.get_value();
            if (value.toLowerCase() == "compulsoryfilter") {
                if ($.isEmpty($('#<%= ifrmCompulsoryFilter.ClientID %>').attr('src'))) {
                    url = "../Meta/Filters_Add.aspx?PageMode=Settings&SID=" + compFilterID + "&Hidebutton=1&ShowFilterBtn=1&ReturnXml=1";
                    $('#<%= ifrmCompulsoryFilter.ClientID %>').attr('src', url);
                }
            }
        }





    </script>

    <script>
        function showReportDiv(mode) {
            if ($("#generalSettings").hasClass("disabled"))
                return;
            var hdnReportName = $("#<%= hdnReportName.ClientID %>");
            var hdnDesc = $("#<%= hdnDesc.ClientID %>");
            var ReportName = $("#<%= txtReportName.ClientID %>");
            var Desc = $("#<%= txtDesc.ClientID %>");
            var tab = $find("<%= tabRightsInfo.ClientID %>");

            tab.findTabByValue('General').select();
            ReportName.val(hdnReportName.val());
            Desc.val(hdnDesc.val());
            manageLauncherParams();
            if (mode == "Save") {
                $('#divSave').data('Mode', '');
                if ($.defaultVal(ReportId, "") == "") {
                    if ($.QS("Mode") == "Existing") {
                        ReportName.val('Copy-' + hdnReportName.val());
                        Desc.val(hdnDesc.val());
                    }
                    $('#divSave').ShowModal();
                } else {
                    saveReport();
                }
            }
            else if (mode == "SaveAs") {
                $('#divSave').data('Mode', 'SaveAs');
                ReportName.val('Copy-' + hdnReportName.val());
                Desc.val(hdnDesc.val());
                $('#divSave').ShowModal();

            }
            else if (mode == "RptProp") {
                $('#divSave').data('Mode', '');
                $("#tabContent").append($(".tblStyle"));
                var arrS = [];
                $('#divSave').ShowModal();
            }
            $("#btnSaveField").show();
            if ($('#contextMenu').isVisible())
                $('#contextMenu').hide();
            return false;
        }


        function showFilter() {
            OnFilterTabSelected(null);
            $("#FilterProps").ShowModal();
        }

        function showFilterForSubreport(subDetailCntr) {
            var h = $(subDetailCntr).closest(".reportsection").data("cntr");
            var data = new Object();
            data["PageType"] = $.QS("PageType");
            data["EID"] = $(subDetailCntr).closest(".reportsection").data("RelatedId");
            data["SID"] = subreportfilter;
            if ($("#txt-" + h).exists())
                data["xml"] = $("#txt-" + h).val();
            else
                data["xml"] = "";

            callingFilter = "ConditionalFormatting";
            PageMethods.SetSubreportFilterSession(data, function () {
                var url = "Filters_Add.aspx?PageMode=report&SID=" + subreportfilter;
                $('#IfrmFilter.ClientID %>').attr('src', url);
                callingFilter = "SubreportFilter-" + h;
                $("#divCFFormat").hide();
                $("#divFilter").ShowModal();
            });
            
            return false;
        }


        function showConditionalFilter() {
            var data = new Object();
            data["PageType"] = $.QS("PageType");
            data["EID"] = $.QS("EID");
            data["SID"] = cfid;
            data["xml"] = "";
            callingFilter = "ConditionalFormatting";
            PageMethods.SetCFFilterSession(data, function () {
                var url = "Filters_Add.aspx?PageMode=report&SID=" + cfid + "&IsCond=1";
                $('#IfrmFilter.ClientID %>').attr('src', url);
                resetCFSettings();
                $("#divCFFormat").show();
                $("#divFilter").ShowModal();
            });
            return false;
        }
        function CloseFilterScreen() {
            $("#FilterProps").HideModal();
            return false;
        }

        function ValidateXml() {
            var iframe = $("#<%= ifrmReportFilter.ClientID %>")[0];           
        
            if (iframe && iframe.contentWindow && typeof iframe.contentWindow.createXml == "function")
                $("#<%= hdnFilter.ClientID %>").val(iframe.contentWindow.createXml(null, ""));

            iframe = $("#<%= ifrmCompulsoryFilter.ClientID %>")[0];
            if (iframe.contentWindow && typeof iframe.contentWindow.createXml == "function")
                $("#<%= hdnCompulsoryFilter.ClientID %>").val(iframe.contentWindow.createXml(null, ""));

            $("#FilterProps").HideModal();
            return false;
        }

        function SaveExpression() {
            $('#divExprEditor').HideModal();
            _currentFocussedExprText($("#<%=ifrExpr.ClientID%>")[0].contentWindow.scriptEditor.getValue());
        }

        function LoadExpressionEditor(val) {
            $("#<%=ifrExpr.ClientID%>")[0].contentWindow.SetEditorValue(val);
            $("#<%=ifrExpr.ClientID%>")[0].contentWindow.AddReportDetailItems(viewModel.detailTables());
            $('#divExprEditor').ShowModal();
            $("#<%=ifrExpr.ClientID%>")[0].contentWindow.autoFormatEditor();
        }

    </script>

    <script>


        var viewModel = {
            detailTables: ko.observableArray(DetailTableList),
            addItem: function () { if (viewModel.detailTables().length == 0 || !$.isEmpty(viewModel.detailTables()[viewModel.detailTables().length - 1].Table())) viewModel.detailTables.push(new detailTableItem({})); },
            deleteItem: function (item) { viewModel.detailTables.remove(item); if (viewModel.detailTables().length == 0) viewModel.addItem(); },
            deleteParamItem: function (item, parent) {
                parent.Params.remove(item);
                if (parent.Params().length == 0)
                    parent.Params.push(new detailTableItemParams({}));
            },
            getItems: function (tbl) {
                var arr = [];
                if ($.isEmpty(tbl))
                    return arr;
                arr.push({ name: "None", id: "None" });
                if ($.QS("EID").toLowerCase() != tbl.toLowerCase())
                    arr.push({ name: EntityTitle, id: $.QS("EID") });
                for (var i = 0; i < DetailTableList.length; i++)
                    if (!$.isEmpty(DetailTableList[i].Table()) && DetailTableList[i].Table().toLowerCase() != tbl.toLowerCase())
                        arr.push({ name: DetailTableList[i].TableName(), id: DetailTableList[i].Table() });
                return arr;
            },
            getSrItems: function () {
                var arr = [];
                for (var i = 0; i < DetailTableList.length; i++)
                    if (!$.isEmpty(DetailTableList[i].Table()) && DetailTableList[i].Table().toLowerCase() != $.QS("EID").toLowerCase())
                        arr.push({ name: DetailTableList[i].TableName(), id: DetailTableList[i].Table() });
                return arr;
            }

        };

        function manageChildTables() {
            if (!$('#divManageTables').data("appliedbinding")) {
                $('#divManageTables').data("appliedbinding", true)
                ko.applyBindings(viewModel, $("#divManageTables").find("tbody")[0]);
            }
            $('#divManageTables').ShowModal().append($("#divEntityList").hide(), $("#divEntityFieldList").hide());

            viewModel.addItem();
        }
        var currentEntityInput = null;
        function showEntityList(a) {
            currentEntityInput = $(a);
            var pos=currentEntityInput.position();
            $("#divEntityList").show().css({ left: pos.left, top: pos.top + $(a).outerHeight() });
            if ($.isEmpty($("#divEntityList").find("iframe").attr("src")))
                $("#divEntityList").find("iframe").attr("src", "fieldbrowser.aspx?mode=ChooseEntity&fn=selectRelEntity");
        }

        function selectRelEntity(txt, val) {
            $("#divEntityList").hide();
            var item = ko.dataFor(currentEntityInput[0]);
            item.TableName(val == "None" ? "" : txt).Table(val == "None" ? "" : val);
            if ($("#divEntityList").parent().attr("id") == "divManageTables") {
                var arr = viewModel.detailTables();
                ko.utils.arrayForEach(arr, function (a) { a.Table(a.Table()); })
                if (!$.isEmpty(arr[arr.length - 1].Table()))
                    viewModel.addItem();
            }
            else if ($("#divEntityList").parent().attr("id") == "divSubreport") {
                $find("<%=cboExistingSR.ClientID%>").set_text('');
                $find("<%=cboExistingSR.ClientID%>").set_value('');
                $find("<%=cboExistingSR.ClientID%>").get_items().clear();
                cboExistingSR_SelectedIndexChanged($find("<%=cboExistingSR.ClientID%>"));
            }
            else if ($("#divEntityList").parent().attr("id") == "divLauncherParam") {
               
            }

             
    }

    var currentParamInput = null;
    function showEntityFieldList(a) {
        a = $(a);
        currentParamInput = a;
        var ctx = ko.contextFor(a.closest("TR")[0]);
        if ($("#divEntityList").parent().attr("id") == "divSubreport" && $.isEmpty(ctx.$parent.Parent()))
            ctx.$parent.Parent($.QS("EID").toLowerCase());

        if ($.isEmpty(ctx.$parent.Table()) || $.isEmpty(ctx.$parent.Parent())) {
            return;
        }
        var eid = (a.hasClass("lhs") ? ctx.$parent.Table() : ctx.$parent.Parent());
        var pos = a.position();
        $("#divEntityFieldList").show().css({ left: pos.left+parseInt(a.css("marginLeft")), top: pos.top + a.outerHeight() });
        
        var src = "EntityTree.aspx?EID=" + eid + "&fn=selectParam"
        var ifr = $("#divEntityFieldList").children().hide().filter("[src='" + src + "']");
        if (ifr.length > 0)
            ifr.show();
        else
            $("#divEntityFieldList").append('<iframe style="height:100%;width:100%" scrolling="no" src="' + src + '" frameborder="0"></iframe>');

    }

    function selectParam(txt, val, ep, p) {
        $("#divEntityFieldList").hide();
        var ctx = ko.contextFor(currentParamInput[0]);
        var eid = (currentParamInput.hasClass("lhs") ? ctx.$parent.Table() : ctx.$parent.Parent());
        var pref = "";
        if ($("#divEntityList").parent().attr("id") == "divSubreport" && currentParamInput.hasClass("lhs"))
            pref = "SR." + eid + ".";
        else
            pref = ($.QS("EID").toLowerCase() == eid.toLowerCase() ? "Field." : eid + ".");
        p = "[" + pref + p + "]";
        if (currentParamInput.hasClass("lhs"))
            ctx.$data.Fk(p);
        else
            ctx.$data.Pk(p);
        var arr = ctx.$parent.Params();
        if (!$.isEmpty(arr[arr.length - 1].Fk()))
            ctx.$parent.Params.push(new detailTableItemParams({}))
    }
    function OnFieldNodeExpanded(sender, args) {
        var radtree = sender;
        var node = args.get_node();
        var ft = node.get_attributes().getAttribute("FieldType");
        if (ft != "Related" && ft != "Table" && ft != "Company")
            return;
        var newnode = node.get_nodes().getNode(0);
        if (newnode && newnode.get_value() == "SUBQUERY")
            return;
        radtree.trackChanges();
        newnode = new Telerik.Web.UI.RadTreeNode();
        newnode.set_text("Add Expression Field");
        newnode.set_value("SUBQUERY");
        newnode.set_cssClass("newSubquery");
        node.get_nodes().insert(0 , newnode);
        radtree.commitChanges();
    }
    function OnFieldNodeClicked(sender, args) {
        var node = args.get_node();
       
        if (node.get_value() != "SUBQUERY")
            return;
       
        var radtree = sender;
        radtree.trackChanges();
        newnode = new Telerik.Web.UI.RadTreeNode();
        newnode.set_text("<span class='sqctr' tbl='" + node.get_parent().get_value() + "'><a href='javascript:void(0)' class='sq'>Subquery</a><a href='javascript:void(0)' onclick='editSubqueryItem(this)' class='edit'></a><a href='javascript:void(0)' onclick='delSubqueryItem(this)' class='del'></a></span>");
        newnode.set_value("");
        newnode.get_attributes().setAttribute("FieldType", "text");
        newnode.get_attributes().setAttribute("IsField", "1");
        newnode.get_attributes().setAttribute("IsSubquery", "1");
        newnode.set_cssClass("newSubqueryItem");
        node.get_parent().get_nodes().insert(1, newnode);
        radtree.commitChanges();
    }
    function editSubqueryItem(a) {
        var item = $(a).closest(".rtLI");
        var radtree = $find("<%= rtvFieldItems.ClientID %>");
        var node = radtree.findNodeByValue(item.find(".sqctr").attr("tbl")).get_nodes().getNode(item.index());
        window.currentSqNode = node;
        $('#divEditSq').ShowModal();
        $("#txtSqName").val($.defaultVal(node.get_value(), ""));
        $("#ddlSqType").show().val($.defaultVal(node.get_attributes().getAttribute("FieldType"), "text"));
        $("#ddlSq").show().val(node.get_attributes().getAttribute("IsExpr")=="1"?"Expression":"Subquery").trigger("change");
        $("#hdnSq_query").val(""); $("#txtSqExpr").val("");
        if (node.get_attributes().getAttribute("IsExpr") == "1")
            $("#txtSqExpr").val($.defaultVal(node.get_attributes().getAttribute("Query"), ""));
        else
            $("#hdnSq_query").val($.defaultVal(node.get_attributes().getAttribute("Query"), ""));
    }
    function delSubqueryItem(a) {
        if (confirm("Do you wish to delete this item?")) {
            var item = $(a).closest(".rtLI");
            var radtree=$find("<%= rtvFieldItems.ClientID %>");            
            var node = radtree.findNodeByValue(item.find(".sqctr").attr("tbl")).get_nodes().getNode(item.index());
            radtree.trackChanges();
            node.get_parent().get_nodes().remove(node);
            radtree.commitChanges();
        }
    }
    function updateSqItem() {
        
        if ($("#txtSqName").val().Trim()=="") {
            alert("Please enter field name.");
            return;
        }
        var node = window.currentSqNode;
        var siblings = node.get_parent().get_nodes();
        var found = false;
        siblings.forEach(function (n) { if (n.get_index() != node.get_index() && n.get_value().toLowerCase() == $("#txtSqName").val().toLowerCase()) { found = true; return false; } });
        if (found) {
            alert("Field with same name already exists.");
            return;
        }
        $('#divEditSq').HideModal();
        node.set_value($("#txtSqName").val());
        node.get_attributes().setAttribute("FieldType", $("#ddlSqType").val());
        node.get_attributes().setAttribute("Query", $("#ddlSq").val() == "Expression" ? $("#txtSqExpr").val() : $("#hdnSq_query").val());
        node.get_attributes().setAttribute("IsExpr", $("#ddlSq").val() == "Expression" ? "1" : "0");
        var item = $(node.get_element());
        item.find(".sq").html($("#txtSqName").val());       
        item.data("nodePath", getNodePath(node))
                   .data("value", node.get_value())
                   .data("fieldType", $("#ddlSqType").val());
       
    }
        function showSQFilter() {
          
            var data = new Object();
            data["PageMode"] = "subquery";
            data["SubMode"] = "E";
            data["SubQuery"] = $("#hdnSq_query").val();

            if (data["SubQuery"] == "") {
                data["PageType"] = "A";
                data["SubMode"] = "Add";
            }
            else {
                data["PageType"] = "E";
                data["SubMode"] = "E";
            }

            var subQ = data["SubQuery"];
            if (subQ.indexOf(" Target=\"") > 0) {
                subQ = subQ.substring(0, subQ.indexOf(" Target=\""));
                subQ = subQ.substring(subQ.indexOf("\"")).Trim('"');
            }
            else
                subQ = "";
            data["sid"] = "sid_subqueryfield";
            data["EID"] = subQ;
            data["ParamCheck"] = "";
            data["srno"] = "";


            PageMethods.LoadSubXml(data, function () {
                $("#divSubFilter").ShowModal();
                var url = "Filters_Add.aspx?PageMode=subquery&PrID=" + window.currentSqNode.get_parent().get_value() + "&SID=" + data["sid"] + "&Hidebutton=1&ShowFilterBtn=1&ReturnXml=1"
                $('#iframe_SubFilter').attr('src', url);
            });
        }
    function addChildTablesToReport() {
        $('#divManageTables').HideModal();
        var radtree = $find("<%=  rtvFieldItems.ClientID %>");
            var arr = viewModel.detailTables();
            for (var i = 0; i < arr.length; i++) {
                if ($.isEmpty(arr[i].Table()) || radtree.findNodeByValue(arr[i].Table().toLowerCase()) != null)
                    continue;
                radtree.trackChanges();
                var newnode = new Telerik.Web.UI.RadTreeNode();
                newnode.set_text(arr[i].TableName());
                newnode.set_value(arr[i].Table().toLowerCase());
                newnode.get_attributes().setAttribute("ParentTable", arr[i].Table());
                newnode.get_attributes().setAttribute("IsParent", "1");
                newnode.get_attributes().setAttribute("FieldType", "Related");
                newnode.set_expandMode(3);
                radtree.get_nodes().insert(radtree.get_nodes().get_count() - 1, newnode);
                radtree.commitChanges();
            }
            modifyDatasource();


        }
        var currentFilterBtn = null;
        function showEntityFilter(a) {
            a = $(a);
            currentFilterBtn = a;
            var $d = ko.dataFor(a[0]);
            var data = new Object();
            data["PageType"] = $.QS("PageType");
            data["EID"] = $d.Table();
            data["SID"] = "sid_" + $d.Table();
            data["xml"] = $.defaultVal($d.Filter(), "");
            PageMethods.SetFilterSession(data, function () {
                $("#divSubFilter").ShowModal();
                var url = "Filters_Add.aspx?PageMode=report&SID=" + data["SID"];
                url = "Filters_Add.aspx?PageMode=Setting&SID=" + data["SID"] + "&Hidebutton=1&ShowFilterBtn=1&ReturnXml=1"
                $('#<%= iframe_SubFilter.ClientID %>').attr('src', url);
            });
        }
        function SaveSubCriteria() {
            var iframe = $('#<%= iframe_SubFilter.ClientID %>');
            var filter = "";
            var error = false;
            if (iframe && iframe[0].contentWindow && typeof iframe[0].contentWindow.createXml == "function")
                filter = iframe[0].contentWindow.createXml(null, "");

            if (filter === false) {
                return;
            }
            if ($('#divEditSq').isVisible()) {
                $("#hdnSq_query").val(filter);
            }
            else {
                var $d = ko.dataFor(currentFilterBtn[0]);
                $d.Filter(filter)
            }
            $("#divSubFilter").HideModal();

            return false;
        }
    </script>
    <script>
        
        

        var launcherParamModel = {
            detailTables: ko.observableArray(LauncherParamList),
            addItem: function () { if (launcherParamModel.detailTables().length == 0 || !$.isEmpty(launcherParamModel.detailTables()[launcherParamModel.detailTables().length - 1].Type())) launcherParamModel.detailTables.push(new launcherParamItem({})); },
            deleteItem: function (item) { launcherParamModel.detailTables.remove(item); if (launcherParamModel.detailTables().length == 0) launcherParamModel.addItem(); },
           
        };

        function manageLauncherParams() {
            if (!$('#tblLauncherParam').data("appliedbinding")) {
                $('#tblLauncherParam').data("appliedbinding", true)
                ko.applyBindings(launcherParamModel, $("#tblLauncherParam").find("tbody")[0]);
            }
            launcherParamModel.addItem();
            $('#divLauncherParam').append($("#divEntityList").hide());
        }
       
        function onLauncherTypeChange(ddl) {
            $(ddl).closest('TR').find('._lst').setEnable( $(ddl).val() == 'SingleSelect' || $(ddl).val() == 'MultiSelect', true);
            ko.contextFor($(ddl).next()[0]).$data.Type($(ddl).val()[0]);
            $(ddl).hide(); $(ddl).val([]);
            var arr = launcherParamModel.detailTables();
            if (!$.isEmpty(arr[arr.length - 1].Type()))
                launcherParamModel.addItem();
        }
        function toggleLauncherSetting() {
            $("#<%=txtAction.ClientID%>").closest("TR").css("display",$("#<%=rdoManual.ClientID%>").prop("checked")?"":"none");
            $("#divLauncherParam").css("display", $("#<%=rdoAuto.ClientID%>").prop("checked") ? "" : "none");
        }
    </script>
    <script>
        function cboExistingSR_ItemsRequesting(sender, eventArgs) {
            var data = ko.dataFor($("#subInfoCntr")[0]);
            var context = eventArgs.get_context();
            context["@EntityId"] = $.defaultVal(data.Table(), "");
            context["Type"] = "LoadRelatedSR";
        }

        function cboExistingSR_SelectedIndexChanged(sender, eventArgs) {
            var data = ko.dataFor($("#subInfoCntr")[0]);
            data.SubreportId(sender.get_value() == "NEW" ? "" : sender.get_value());
            data.SubreportTitle(sender.get_text());
           
        }
        var subreportVm = ko.observable();
        function showSubreport(control) {
            $("#divSubreport").ShowModal().append($("#divEntityList").hide(), $("#divEntityFieldList").hide());
            var dtl = $(SubreportList).filter(function () { return typeof this.Name=="function" && this.Name() == control._control.name(); });
            dtl = dtl.length > 0 ? dtl[0] : null;
            if (!dtl) {
                dtl = new detailTableItem({ Name: control._control.name, Parent: $.QS("EID").toLowerCase() });
                SubreportList.push(dtl);
            }
            if (dtl.Params().length == 0 || !$.isEmpty(dtl.Params()[dtl.Params().length - 1].Fk()))
                dtl.Params.push(new detailTableItemParams({}));

            $find("<%=cboExistingSR.ClientID%>").set_text($.defaultVal(dtl.SubreportTitle(), ""));
            $find("<%=cboExistingSR.ClientID%>").set_value($.defaultVal(dtl.SubreportId(), ""));
            //ko.cleanNode($("#subInfoCntr")[0]);
            subreportVm(dtl);
            if (!$("#subInfoCntr").data("kobound")) {
                ko.applyBindings(subreportVm, $("#subInfoCntr")[0]);
                $("#subInfoCntr").data("kobound", true);
            }
        }

        function SelectSubReportItem(ReportName, ReportId) {
            var cbo = $find("<%=cboExistingSR.ClientID%>");
            cbo.set_text(ReportName);
            cbo.set_value(ReportId);
        }
    </script>
    <Script>
        function saveReport() {
            var arrRoles = [];
            arrRoles = [];//
            var arr = $("#<%= ifrmRole.ClientID%>")[0].contentWindow.GetRoles()
            for (var i = 0; i < arr.length; i++) arrRoles.push(arr[i]);
            // var arrPermission = [];
            var Permission = [];
            var arrPermission = $("#<%= ifrmRole.ClientID%>")[0].contentWindow.GetPermission();
            for (var i = 0; i < arrPermission.length; i++) Permission.push(arrPermission[i]);
            var data = new Object();

            data["Type"] = "SaveReport";
            data["@Xml"] = getReportXml();
            //reportDesigner.GetJsonReportModel() - alt way
            data["DesignerData"] = encodeURIComponent(JSON.stringify({
                XtraReportsLayoutSerializer: reportDesigner.GetDesignerModel().navigateByReports.currentTab().report().serialize()
            }));
            data["@ModuleID"] = $.QS("Module");
            data["@EntityID"] = $.QS("EID");
            data["@ReportName"] = $("#<%= txtReportName.ClientID %>").val();
            document.title = data["@ReportName"];
            if ($("#<%= txtReportName.ClientID %>").val() == "") {
                alert("Please enter report name");
                return false;
            }

            data["@Description"] = $("#<%= txtDesc.ClientID %>").val();
            data["@ResourceVersion"] = $.defaultVal($("#<%= txtResVersion.ClientID %>").val(), 0);
            data["@SystemDefined"] = 1;
            data["@IsDeactivated"] = 0;
            data["arrPermission"] = Permission;
            data["arrRoles"] = arrRoles;
            data["@FID"] = $.QS("FID");
            data["@Tag"] = $.QS("tag");
            data["@ReportID"] = ($('#divSave').data('Mode') == "SaveAs" ? "" : $.defaultVal(ReportId, ""));
            data["au"] = $.QS("_au");
            $.Notify("Saving...");
            PageMethods.Execute(data, arrRoles, Permission, function (result) { $.Notify(false); PageMethodSuccess(result); }, function (d) { $.Notify({ Message: "Error Occured.", NotifyOnly: true }) });
        }
        function PageMethodSuccess(data) {
            if (data["Type"] == "SaveReport") {

                var hdnReportName = $("#<%= hdnReportName.ClientID %>");
                var hdnDesc = $("#<%= hdnDesc.ClientID %>");
                var ReportName = $("#<%= txtReportName.ClientID %>").val();
                var Desc = $("#<%= txtDesc.ClientID %>");
                hdnDesc.val(Desc.val());
                hdnReportName.val(ReportName);
                document.title = data["@ReportName"];
                ReportId = data["@ReportID"];

                $('#divSave').HideModal();
                RefreshParent();
                if ($.QS("Sr") == "1")
                    window.opener.SelectSubReportItem(ReportName, ReportId);
            }
        }
        function RefreshParent(close, id) {
            if (window.opener && typeof window.opener.RefreshGrid == "function") {
                window.opener.RefreshGrid(id);
                if (close)
                    closeForm();
            }
            else if (window.frameElement && typeof parent.RefreshGrid == "function") {
                if (close)
                    closeForm();

                if (parent && typeof parent.toggleDetailsForm == "function")
                    window.setTimeout(function () { parent.RefreshGrid(id); }, 800);
                else
                    parent.RefreshGrid(id);
            }
        }
        function getReportXml() {


            var xml = "<Layout><Grid ReportFormat=\"XtraReport\" Id=\"" + $.QS("EID")
                + "\" AmountIn=\"" + $.defaultVal($("#<%= ddlAmountIn.ClientID %>").val(), "1")
                + "\" NumberFormat=\"" + $.defaultVal($("#<%= ddlNumFormat.ClientID %>").val() == "CST" ? $("#<%= txtNumFormat.ClientID %>").val() : $("#<%= ddlNumFormat.ClientID %>").val(), "0")
                + "\" DateFormat=\"" + $.defaultVal($("#<%= ddlDateFormat.ClientID %>").val() == "CST" ? $("#<%= txtDateFormat.ClientID %>").val() : $("#<%= ddlDateFormat.ClientID %>").val(), "0")
                + "\" DateTimeFormat=\"" + $.defaultVal($("#<%= ddlDateTimeFormat.ClientID %>").val() == "CST" ? $("#<%= txtDateTimeFormat.ClientID %>").val() : $("#<%= ddlDateTimeFormat.ClientID %>").val(), "0")
                + "\" ScriptId=\"" + $.defaultVal($("#<%= ddlScriptResource.ClientID %>").val() == "Ext" ? $("#<%= txtExternalScript.ClientID %>").val().Trim() + "," + $("#<%= txtExternalScriptClass.ClientID %>").val() : $("#<%= ddlScriptResource.ClientID %>").val(), "")
                + "\" HtmlId=\"dgData\" EnablePaging=\"true\" RecordCount =\"0\" >";
            xml += getPageSettingXml();
            var iframe = $("#<%= ifrmReportFilter.ClientID %>")[0];
            var filter = "", compulFilter = "";
            if (iframe && iframe.contentWindow && typeof iframe.contentWindow.createXml == "function")
                filter = iframe.contentWindow.createXml(null, "");
            else
                filter = $("#<%= hdnFilter.ClientID %>").val();

            iframe = $("#<%= ifrmCompulsoryFilter.ClientID %>")[0];
            if (iframe.contentWindow && typeof iframe.contentWindow.createXml == "function")
                compulFilter = iframe.contentWindow.createXml(null, "");
            else
                compulFilter = $("#<%= hdnCompulsoryFilter.ClientID %>").val();
            xml += filter;
            xml += "<CompulsoryFilter>" + compulFilter + "</CompulsoryFilter>";

            xml += "<LauncherSettings DisableOnLoad=\""+($("#<%=chkDisableAutoLaunch.ClientID%>").checked()?"1":"0")+"\" Mode=\""+($("#<%=rdoManual.ClientID%>").checked()?"Manual":"Auto")+"\">";
            var arr = launcherParamModel.detailTables();
            xml += "<Fields>"
            for (var i = 0; i < arr.length; i++) {
                var dtl = arr[i];
                if ($.isEmpty(dtl.Type()))
                    continue;
                xml += "<Field Type=\"" + $.encodeXml(dtl.Type(), true) + "\" Name=\"" + $.encodeXml(dtl.Name(), true) + "\"  ID=\"" + $.encodeXml(dtl.ID(), true) + "\"  Title=\"" + $.encodeXml(dtl.Title(), true) + "\"  Table=\"" + $.encodeXml(dtl.Table(), true) + "\"  Form=\"" + $.encodeXml(dtl.Form(), true) + "\" OnChange=\"" + $.encodeXml(dtl.OnChange(), true) + "\" ></Field>";
                
            }
            xml += "</Fields>"
            xml += "<Action>"+$.encodeXml($("#<%=txtAction.ClientID%>").val())+"</Action>"
            xml += "<Script"+">"+$.encodeXml($("#<%=txtLauncherScript.ClientID%>").val())+"</"+"Script>"
            xml += "</LauncherSettings>";

            xml += "<DetailReport>";
            var arr = viewModel.detailTables();
            for (var i = 0; i < arr.length; i++) {
                var dtl = arr[i];
                if ($.isEmpty(dtl.Table()))
                    continue;
                xml += "<Table Id=\"" + $.encodeXml(dtl.Table(), true) + "\" Parent=\"" + $.encodeXml(dtl.Parent(), true) + "\" AutoMap=\"" + (dtl.AutoMap() ? 1 : 0) + "\" Fk=\"\" Pk=\"\"><Params>";
                var prm = dtl.Params();
                for (var x = 0; x < prm.length; x++) {
                    if ($.isEmpty(prm[x].Fk()))
                        continue;
                    xml += "<Col Fk=\"" + $.encodeXml(prm[x].Fk(), true) + "\"  Pk=\"" + $.encodeXml(prm[x].Pk(), true) + "\" />";
                }
                xml += "</Params><DetailFilter>" + $.defaultVal(dtl.Filter(), "") + "</DetailFilter></Table>";
            }
            xml += "</DetailReport>";
            xml += "<Subreports>";
            var allcontrols = reportDesigner.designerModel.controls();
            for (var i = 0; i < SubreportList.length; i++) {
                var dtl = SubreportList[i];
                if ($.isEmpty(dtl.Table()))
                    continue;
                var sr = $(allcontrols).filter(function () { return this.value && this.value.controlType == "XRSubreport" && this.value.name() == dtl.Name(); });
                if (!sr || sr.length <= 0)
                    continue;
                xml += "<Subreport Id=\"" + $.encodeXml(dtl.Table(), true) + "\" Name=\"" + $.encodeXml(dtl.Name(), true) + "\" SubreportId=\"" + $.encodeXml(dtl.SubreportId(), true) + "\" Parent=\"" + $.encodeXml(dtl.Parent(), true) + "\" AutoMap=\"" + (dtl.AutoMap() ? 1 : 0) + "\" Fk=\"\" Pk=\"\"><Params>";
                var prm = dtl.Params();
                for (var x = 0; x < prm.length; x++) {
                    if ($.isEmpty(prm[x].Fk()))
                        continue;
                    xml += "<Col Fk=\"" + $.encodeXml(prm[x].Fk(), true) + "\"  Pk=\"" + $.encodeXml(prm[x].Pk(), true) + "\" />";
                }
                xml += "</Params><SubreportFilter>" + $.defaultVal(dtl.Filter(), "") + "</SubreportFilter></Subreport>";
            }
            xml += "</Subreports>";
            xml += "<Subquery>";
            var radtree = $find("<%=  rtvFieldItems.ClientID %>");
            var nodes = radtree.get_allNodes();
            for (var i = 0; i < nodes.length ; i++) {
                var n = nodes[i];
                if (!n.get_attributes().getAttribute("IsSubquery"))
                    continue;
                xml += "<Cols Parent=\"" + $.encodeXml(n.get_parent().get_value(), true) + "\" Type=\"" + (n.get_attributes().getAttribute("IsExpr")=="1"?"FieldExpression":"Subquery") + "\" Title=\"" + $.encodeXml(n.get_value(), true) + "\" ID=\"" + $.encodeXml(n.get_value(), true) + "\" ColDataType=\"" + $.encodeXml($.defaultVal(n.get_attributes().getAttribute("FieldType"), "text"), true) + "\">";
                if (n.get_attributes().getAttribute("IsExpr") == "1")
                    xml += $.encodeXml($.defaultVal(n.get_attributes().getAttribute("Query"), ""));
                else
                    xml += $.defaultVal(n.get_attributes().getAttribute("Query"), "");
                xml += "</Cols>";
            }
            xml += "</Subquery>";
            //<SubReport >
            //xml += getCfXml();
            xml += "<ReportDesigner>##REPORTDESIGNER##</ReportDesigner>";
            return xml + "</Grid></Layout>";

        }


        function getSubReportParameterXml(ct) {
            var parameter = "";
            var arrParameter = [];
            arrParameter = $.defaultVal(ArrParameterData["Subreport" + ct], "");
            parameter += "<SubreportFilter RelatedRecord=\"" + $.defaultVal($("#Subreport" + ct).data("RelatedRecord"), 0) + "\">";
            if (arrParameter != "") {
                for (var t = 0; t < arrParameter.length; t++) {
                    if ($.defaultVal(arrParameter[t]["mainID"], "") != "") {
                        parameter += "<Condition Name='" + $.defaultVal(arrParameter[t]["mainID"], "") + "' EntityPath='" + $.defaultVal(arrParameter[t]["EP"], "") + "' Operator=\"EqualTo\" Value='" + $.defaultVal(arrParameter[t]["subID"], "") + "' ValueSrc=\"Table\" ValueEntityPath='" + $.defaultVal(arrParameter[t]["subEP"], "") + "'></Condition>";
                    }
                }
            }
            parameter += "</SubreportFilter>";
            return parameter;
        }


        function getPageSettingXml() {
            var pageSize = $.defaultVal($("#<%= ddlPageSize.ClientID %>").val(), "Letter");
            var ps = "";
            if (pageSize == "Custom")
                ps = "<PageSetting PageSize=\"" + pageSize + "\" PageWidth=\"" + $("#<%= txtWidth.ClientID %>").val() + "\" PageHeight=\"" + $("#<%= txtHeight.ClientID %>").val() + "\" ";
            else
                ps = "<PageSetting PageSize=\"" + pageSize + "\" ";
            if ($("#<%= rdoPortrait.ClientID %>").checked())
                ps += " PageOrientation=\"Portrait\"";
            else
                ps += " PageOrientation=\"Landscape\"";

            ps += " Top=\"" + $("#<%= txtTopMargin.ClientID %>").val() + "\" Left=\"" + $("#<%= txtLeftMargin.ClientID %>").val() + "\" Bottom=\"" + $("#<%= txtBottomMargin.ClientID %>").val() + "\" Right=\"" + $("#<%= txtRightMargin.ClientID %>").val() + "\" />";
            return ps;
        }
    </script>

    <script>
        //debug purpose
        //function OnClientMouseOver() { }
        //function OnFieldNodeClicked() { }
        //function OnFieldNodeExpanded() { }
        //function OnClientTabSelected() { }
        //function selectUrl() { }

        //function OnFilterTabSelected() { }
        //function cboExistingSR_ItemsRequesting() { }
        //function cboExistingSR_SelectedIndexChanged() { }
        //function toggleLauncherSetting() { }
</script>
</body>
</html>
