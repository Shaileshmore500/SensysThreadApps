<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/Default.Master" CodeBehind="ReportDesigner_old.aspx.cs" Inherits="SensysErp.Meta.ReportDesigner_old" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>


<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">


    <%# HelperLib.Web.WebResources.GetResource("~/Css/black/jquery-ui-1.10.3.custom.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/layout_grid.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/report.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/knockout-2.2.1.js")%>
    <script>
        var sid;
        var cfid;
        var complFilterId;
        var SubFilter;
        var subreportfilter;
        var ArrSortData = {};
        var ArrReportSortData = {};
        var ArrParameterData = {};
        var grpCntr = 0;
        var fieldCntr = 0;
        var subi = 0;
        var treeMode = "";
        var mode = "";
        var arrSectionIndex = {};
        var arrCondFormat = {};
        var arrCfTempData = [];
        $(function () {
            $("#tabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
            /* $("#tabs li").removeClass("ui-corner-top").addClass("ui-corner-left");*/
        });
    </script>
    <script>
        $(function () {
            $(".reportObject").tooltip({
                position: {
                    my: "left bottom",
                    at: "left top",
                    using: function (position, feedback) {
                        $(this).css(position);
                    }
                }
            });
        });
    </script>
    <style>
        .lnkexpr
        {
            text-decoration: none;
            font-weight: bold;
            font-size: 12px;
            color: green;
            font-weight: bold;
            margin-left: 7px;
        }

            .lnkexpr:hover
            {
                color: red;
                text-shadow: 1px 1px 3px green;
            }

        .lblexp
        {
            width: 335px !important;
            border: 2px solid #BCBCBC !important;
            padding: 5px !important;
            border-radius: 9px;
            box-shadow: 1px 1px 1px #808080;
        }

            .lblexp:hover
            {
                border-color: green;
            }

        #divLblExpr
        {
            position: absolute !important;
        }

        html, body, form
        {
            height: 100%;
        }

        #divLabelFormat
        {
            display: inline-block;
        }

        .mainfields
        {
            border: solid 1px #BDE2CA;
        }

        .subfields
        {
            border: solid 1px #FFCBCB;
        }

        hr
        {
            border: 1px solid #ECECEC;
        }

        .red
        {
            background-color: red;
            -webkit-transition: all 0.15s linear;
            -moz-transition: all 0.15s linear;
            transition: all 0.15s linear;
            color: #FFF;
        }

        #divSummary
        {
            width: 380px;
        }

        #contextMenu li
        {
            border-bottom: 1px solid #000;
            padding: 3px;
        }

            #contextMenu li:hover
            {
                background-color: #8E8E91;
                color: #FFF;
                cursor: pointer;
            }

        #contextMenu
        {
            border: solid 3px #666;
            border-radius: 8px;
            box-shadow: 2px 2px 5px #525252;
            font-family: nunitoregular;
            font-size: 12px;
            color: #0C06F9;
        }

        .ui-widget-content
        {
            background: white !important;
        }

        .toolbar .fontfamily:hover, .toolbar .font:hover
        {
            -webkit-transition: none;
            -moz-transition: none;
            transition: none;
            color: #2D64B6;
        }

        .toolbar .fontfamily, .toolbar .font
        {
            padding: 3px;
        }

        .ui-tabs-vertical
        {
            width: 55em;
        }

            .ui-tabs-vertical .ui-tabs-nav
            {
                padding: .2em .1em .2em .2em;
                float: left;
                width: 12em;
            }

                .ui-tabs-vertical .ui-tabs-nav li
                {
                    clear: left;
                    width: 100%;
                    border-bottom-width: 1px !important;
                    border-right-width: 0 !important;
                    margin: 0 -1px .2em 0;
                }

                    .ui-tabs-vertical .ui-tabs-nav li.ui-tabs-active
                    {
                        padding-bottom: 0;
                        padding-right: .1em;
                        border-right-width: 1px;
                        border-right-width: 1px;
                    }

            .ui-tabs-vertical .ui-tabs-panel
            {
                padding: 1em;
                float: right;
                width: 40em;
            }
    </style>
    <style>
        .RadSplitter_Default
        {
            font-size: 12px !important;
            font-family: Verdana !important;
        }

        #tabs
        {
            border: none !important;
            background: none !important;
            color: none !important;
        }

        .multiHighlight
        {
            outline-width: 3px;
            outline-color: #00FF52;
            outline-style: dotted;
        }

        .highlight
        {
            outline-width: 3px;
            outline-color: #737373;
            outline-style: dotted;
        }

        .DropHighlight
        {
            border: dashed 2px #E41B00;
            background-color: transparent;
        }

        #footerList
        {
            height: 146px;
            overflow-y: auto;
            width: 345px !important;
            border: solid 3px #666;
            border-radius: 8px;
            box-shadow: 2px 2px 5px #525252;
            padding: 3px;
            font-family: nunitoregular;
            font-size: 12px;
            margin-top: 2px;
            display: none;
        }

        .lblvisible
        {
            font-size: 13px;
            text-indent: 5px;
            font-weight: bold;
            text-align: center;
        }

        #divItems
        {
            position: absolute;
            top: 66px;
            bottom: 0;
            width: 205px;
        }

        html
        {
            /*overflow: hidden;*/
        }

        #divReportSections
        {
            background-image: url(../images/graph.png);
            box-shadow: inset 8px 7px 12px #EDEDED;
            overflow: auto;
            position: relative;
            border-left: solid 1px #C7C7C7;
            border-right: solid 1px #C7C7C7;
            height: 100%;
            padding-top: 36px;
            box-sizing: border-box;
        }

        #spanSectionHdr
        {
            font-size: 11px;
            color: #008000;
            font-weight: bold;
            font-style: italic;
        }

        #aShowCF:hover
        {
            color: red;
            text-decoration: underline !important;
            font-size: 16px !important;
        }

        a
        {
            font-size: 11px;
        }

        #divTabBG
        {
            border: 1px solid #F00;
            width: 91px;
        }

        #divFieldsTree, #divAddPrm
        {
            position: absolute;
            display: none;
            background-color: #FFF;
            border: solid 2px #4D4C4C;
            border-radius: 5px;
            z-index: 10;
            box-shadow: 2px 2px 5px #555;
            overflow-y: auto;
        }

        #divAddSubPrm
        {
            position: absolute;
            display: none;
            width: 224px;
            height: 240px;
            background-color: #FFF;
            border: solid 2px #4D4C4C;
            border-radius: 5px;
            z-index: 10;
            box-shadow: 2px 2px 5px #555;
            overflow: auto;
        }

        #divSettings
        {
            display: none;
            position: relative;
            left: -500px;
            top: 100px;
            width: 526px;
        }

        #btnDelLnk
        {
            text-align: center;
            vertical-align: top;
        }


        #tabContent
        {
            border: 1px solid;
            display: block;
            border-color: #2779AA;
            width: 78%;
            margin-left: 2px;
            border-radius: 3px;
            height: 337px;
        }

        .ui-tabs-vertical .ui-tabs-nav
        {
            width: 9em !important;
        }
    </style>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" style="height: 100%" runat="server">
        <ContentTemplate>
            <ul id='contextMenu' style="display: none; z-index: 200; position: absolute">
                <li class="hide" onclick="Suppress('hide')">Hide</li>
                <li class="show" onclick="Suppress('show')">Show</li>
                <li onclick="Delete()">Delete</li>
                <li onclick="showConditionalFormatting()" class="cf">Conditional Formating</li>
                <li class="summary" onclick="showSummary()">Summary</li>
                <li onclick="showReportDiv('ItmProp')">Properties</li>
            </ul>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
            <div id='divFieldsTree'></div>
            <asp:HiddenField ID="hdnData" runat="server" />
            <asp:HiddenField ID="hdnCntr" runat="server" />

            <div id='divAddPrm'></div>
            <div id='divAddSubPrm'></div>


            <div style="display: none; width: 850px" class="formSettings" id="FilterProps">
                <a class="pClose" href="javascript:void(0)" style="" onclick="$('#FilterProps').HideModal();return false;"></a>
                <telerik:RadTabStrip ID="RadTabStrip1" runat="server" MultiPageID="RadMultiPage1"
                    OnClientTabSelected="OnFilterTabSelected" Width="100%" Height="98%"
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




            <div class="formSettings" id="divFormating" style="display: none;">
                <div id="divCFBtns">
                    <asp:Button ID="btnAddRule" CssClass="ActionButton GlassButton GreenButton" runat="server" Text="Add New Rule" OnClientClick="return showFilter();" />
                    <asp:Button ID="btnCloseRule" CssClass="ActionButton GlassButton RedColor" runat="server" Text="OK" OnClientClick="return CloseRule();" />
                </div>

                <div id="divCFCntr">
                    <table>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>

            <div id="divCommonBorders" class="formSettings" style="display: none;">
                <asp:Panel runat="server" Style="padding: 1px 1px 1px 1px" GroupingText="Borders" ID="Panel2">
                    <table id="Table1">
                        <tr>
                            <td>Border-Top</td>
                            <td colspan="2">
                                <select id="ddlTop">
                                    <option selected="selected" value="outset">Not-Set</option>
                                    <option value="none">None</option>
                                    <option value="solid">Single</option>
                                    <option value="double">Double</option>
                                    <option value="dashed">Dash</option>
                                    <option value="dotted">Dot</option>
                                </select>
                                &nbsp; Color
		<input id="txtTopC" style="width: 40px;" type="text"
            value="#000000" />
                                &nbsp; Width &nbsp;<input id="txtTopS" style="width: 40px;" class="txtNum"
                                    type="text" value="1" />
                                px</td>
                        </tr>
                        <tr>
                            <td>Border-Right</td>
                            <td colspan="2">
                                <select id="ddlRight">
                                    <option selected="selected" value="outset">Not-Set</option>
                                    <option value="none">None</option>
                                    <option value="solid">Single</option>
                                    <option value="double">Double</option>
                                    <option value="dashed">Dash</option>
                                    <option value="dotted">Dot</option>
                                </select>
                                &nbsp; Color
		<input id="txtRightC" style="width: 40px;" type="text"
            value="#000000" />
                                &nbsp; Width &nbsp;<input id="txtRightS" style="width: 40px" class="txtNum"
                                    type="text" value="1" />
                                px</td>
                        </tr>
                        <tr>
                            <td>Border-Bottom</td>
                            <td colspan="2">
                                <select id="ddlBottom">
                                    <option selected="selected" value="outset">Not-Set</option>
                                    <option value="none">None</option>
                                    <option value="solid">Single</option>
                                    <option value="double">Double</option>
                                    <option value="dashed">Dash</option>
                                    <option value="dotted">Dot</option>
                                </select>
                                &nbsp; Color
		<input id="txtBottomC" style="width: 40px;" type="text"
            value="#000000" />
                                &nbsp; Width &nbsp;<input id="txtBottomS" style="width: 40px" class="txtNum"
                                    type="text" value="1" />
                                px</td>
                        </tr>
                        <tr>
                            <td>Border-Left</td>
                            <td colspan="2">
                                <select id="ddlLeft">
                                    <option selected="selected" value="outset">Not-Set</option>
                                    <option value="none">None</option>
                                    <option value="solid">Single</option>
                                    <option value="double">Double</option>
                                    <option value="dashed">Dash</option>
                                    <option value="dotted">Dot</option>
                                </select>
                                &nbsp; Color
		<input id="txtLeftC" style="width: 40px;" type="text"
            value="#000000" />
                                &nbsp; Width &nbsp;<input id="txtLeftS" style="width: 40px" class="txtNum"
                                    type="text" value="1" />
                                px</td>
                        </tr>
                    </table>
                    <input type="button" id="Button3" onclick="addBorder();" class="ActionButton GreenButton" value="Save" />
                    <input type="button" onclick="$('#divCommonBorders').HideModal(); return false;" class="ActionButton GlassButton RedColor" value="Cancel" />
                </asp:Panel>
            </div>
            <div id="divCommonPadding" class="formSettings" style="display: none;">
                <asp:Panel runat="server" Style="padding: 1px 1px 1px 1px" GroupingText="Padding" ID="Panel3">
                    <table id="tblPadding" class="table-form">
                        <tr>
                            <td class="td-label">Top</td>

                            <td class="td-value">
                                <input id="txtTopP" style="width: 40px;" class="txtNum"
                                    type="text" value="0" />
                                px</td>

                            <td class="td-label">Bottom</td>

                            <td class="td-value">
                                <input id="txtBottomP" style="width: 40px;" class="txtNum"
                                    type="text" value="0" />
                                px</td>
                        </tr>
                        <tr>
                            <td class="td-label">Left</td>

                            <td class="td-value">
                                <input id="txtLeftP" style="width: 40px;" class="txtNum"
                                    type="text" value="0" />
                                px</td>

                            <td class="td-label">Right</td>

                            <td class="td-value">
                                <input id="txtRightP" style="width: 40px;" class="txtNum"
                                    type="text" value="0" />
                                px</td>
                        </tr>
                    </table>
                    <input type="button" id="Button4" onclick="addPadding();" class="ActionButton GreenButton" value="Save" />
                    <input type="button" onclick="$('#divCommonPadding').HideModal(); return false;" class="ActionButton GlassButton RedColor" value="Cancel" />
                </asp:Panel>
            </div>
            <div class="filter formSettings" id="divFilter" style="padding: 5px 5px 5px 5px; display: none; background: #E8E8F1; width: 76%; height: 76%; top: 70px; left: 61px">
                <a class="pClose" href="javascript:void(0)" style="" onclick="hidePopUp()"></a>
                <div id="divCFFormat" class="row">
                    <div class="biu">
                        <input type="checkbox" id="chkCFBold"><label title="Bold" for="chkCFBold"><b>B</b></label>
                        <input type="checkbox" id="chkCFItalic"><label title="Italic" style="font-style: italic" for="chkCFItalic">I</label>
                        <input type="checkbox" id="chkCFUnderline"><label title="Underline" style="text-decoration: underline" for="chkCFUnderline">U</label>
                    </div>
                    <input type="text" title="Background Color. Leave blank for theme based color." style="border-color: black !important; border: 1px solid; vertical-align: middle" id="txtCFBgColor" />
                    <input type="text" title="Font Color. Leave blank for theme based color." style="border-color: black !important; border: 1px solid; vertical-align: middle" id="txtCFForeColor" />
                    <select title="Font Size" id="cboCFFontSize">
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
                    </select>
                    <asp:CheckBox data-chk-on="yes" data-chk-off="no" ID="chkIsVisible" Checked="true" runat="server" />
                    <span class="lblvisible">Visible</span>
                    <span class="lbl123">Paddings:</span> &nbsp;
                        <span id="txtSubPadding" class="lbl" style="background-color: transparent; width: 64px !important; border: 1px solid #000 !important;">ABCDEFG</span>
                    <span class="lbl">Borders:</span>
                    <span id="txtCommonBorder" class="lbl" title="double click to set borders" style="position: absolute; background-color: #D5D5D5; width: 64px !important; height: 26px !important;"></span>&nbsp;
                  

                </div>
                <div style="height: 91%; padding: 2px 2px 2px 2px; background-color: #F1F1F1">
                    <iframe id="IfrmFilter" style="height: 98%; width: 98%" runat="server"></iframe>
                </div>

            </div>

            <div class="formSettings" id="divLblExpr" style="display: none; width: 350px; height: 440px; z-index: 5000">
                <a class="pClose" href="javascript:void(0)" style="" onclick="$('#divLblExpr').HideModal();return false;"></a>
                <iframe id="ifrmLblExpr" style="height: 98%; width: 98%" frameborder="0" runat="server"></iframe>
                <%--<input type="button" value="Cancel" onclick="$('#divLblExpr').HideModal(); return false;" />--%>
            </div>


            <div class="formSettings" id="divSubFilter" style="display: none; width: 747px; height: 440px">
                <a class="pClose" href="javascript:void(0)" style="" onclick="$('#divSubFilter').HideModal();return false;"></a>
                <iframe id="iframe_SubFilter" style="height: 98%; width: 98%" runat="server"></iframe>
                <input type="button" value="Submit" onclick="SaveSubCriteria()" />
                <input type="button" value="Cancel" onclick="$('#divSubFilter').HideModal(); return false;" />
            </div>
            <div class="formSettings" id="divSubreport" style="display: none;">
                <div id="subInfoCntr">
                    <div class="row">
                        <asp:RadioButton ID="rdoBlank" onchange="toggleSubreport('blank');" Checked="true" Text="New Subreport" GroupName="sub" runat="server" />
                        <asp:RadioButton ID="rdoESR" onchange="toggleSubreport('existing');" Text="Existing Subreport" GroupName="sub" runat="server" />
                    </div>
                    <div class="row blank">
                        <asp:Label ID="Label1" runat="server" Text="Related Entity"></asp:Label>
                        <telerik:RadComboBox ID="cboRelatedEntities" runat="server" OnClientItemsRequesting="OnClientItemsRequesting" EnableLoadOnDemand="true">
                            <WebServiceSettings Method="GetRelatedEntities" Path="ReportDesigner.aspx" />
                        </telerik:RadComboBox>
                    </div>
                    <div class="row existing" style="display: none">
                        <asp:Label ID="Label2" runat="server" Text="Select Subreport"></asp:Label>
                        <telerik:RadComboBox ID="cboExistingSR" runat="server" OnClientItemsRequesting="cboExistingSR_ItemsRequesting" EnableLoadOnDemand="true">
                            <WebServiceSettings Method="GetRelatedSR" Path="ReportDesigner.aspx" />
                        </telerik:RadComboBox>
                    </div>
                </div>
                <div class="row " style="text-align: right">
                    <input type="button" id="btnSubNext" onclick="renderParameter();" class="ActionButton GreenButton" value="Next" />
                    <input type="button" style="display: none" id="btnOK" onclick="addPrmToSR();" class="ActionButton GreenButton" value="OK" />
                    <input type="button" onclick="$('#divSubreport').HideModal();" class="ActionButton GlassButton RedColor" value="Cancel" />
                </div>

            </div>

            <div class="formSettings parameter" id="divParameter" style="display: none; width: 500px; overflow: visible">
                <asp:CheckBox ID="chkMapRelatedFields" runat="server" Text="Map Related Fields" />
                <div class="row tblcntr">
                </div>
                <div class="row " style="text-align: right">
                    <input type="button" id="btnParameter" onclick="addPrmToSR();" class="ActionButton GreenButton" value="OK" />
                    <input type="button" onclick="closeParameter();" class="ActionButton GlassButton RedColor" value="Cancel" />
                </div>
            </div>

            <div class="titleBar" style="background-color: #949494">
                <asp:Label runat="server" ToolTip="Click to rename" ID="lblTitle" onclick="$(this).hide().next().show().css({'min-width':$(this).outerWidth()+75,width:'250px'}).focus().val($(this).html())" class="title"></asp:Label>
                <input type="text" style="display: none" onblur="$(this).hide().prev().show().html($(this).val());$('#ContentPlaceHolder1_hdnReportName').val($(this).val())" class="title" />
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
                <div onclick="showReportDiv('ItmProp')"
                    class="toolBtn property">
                    <span>Item Properties</span>
                </div>

                <div onclick="addFilter()"
                    class="toolBtn filter">
                    <span>Filter</span>
                    <asp:HiddenField ID="hdnFilter" runat="server" />
                    <asp:HiddenField ID="hdnCompulsoryFilter" runat="server" />
                </div>
                <div onclick="manageSections('0')"
                    class="toolBtn sections">
                    <span>Section Expert</span>
                </div>
                <div
                    class="toolBtn CloseWin">
                    <span>Close</span>
                </div>
            </div>
            <div id="divGeneralProps" style="height: 29px; left: 207px; padding-top: 3px; position: absolute; top: 67px; z-index: 200;" class="toolbar">
                <div id="divSnap" title="Snap to grid" style="margin-left: 3px;" onclick="setSnap()" class="textBtn snap red">
                    <span></span>
                </div>
                <div id="divDni" title="show indication line" onclick="setNoIndication()" class="textBtn dni red">
                    <span></span>
                </div>
                <div onclick="SetTextAlignment('L')" title="Text Align Lefts"
                    class="textBtn aLeft">
                    <span></span>
                </div>
                <div onclick="SetTextAlignment('R')" title="Text Align Rights"
                    class="textBtn aRight">
                    <span></span>
                </div>
                <div onclick="SetTextAlignment('M')" title="Text Align Centers"
                    class="textBtn aMiddle">
                    <span></span>
                </div>
                <div onclick="SetLeftAlignment()" title="Align Lefts"
                    class="textBtn pleft">
                    <span></span>
                </div>
                <div onclick="SetRightAlignment()" title="Align Rights"
                    class="textBtn pright">
                    <span></span>
                </div>
                <div onclick="SetTopAlignment()" title="Align Tops"
                    class="textBtn aTop">
                    <span></span>
                </div>
                <div onclick="SetBottomAlignment()" title="Align Bottoms"
                    class="textBtn aBottom">
                    <span></span>
                </div>
                <div onclick="SetDimensions('W')" title="Same Width"
                    class="textBtn sameWidth">
                    <span></span>
                </div>
                <div style="display: none" onclick="SetDimensions('H')" title="Same Height"
                    class="textBtn sameHeight">
                    <span></span>
                </div>

                <div style="display: none" onclick="SetDimensions('B')" title="Same Size"
                    class="textBtn sameSize">
                    <span></span>
                </div>

                <div onclick="SetFontWeight('B')" title="Bold"
                    class="textBtn bold">
                    <span></span>
                </div>
                <div onclick="SetFontWeight('I')" title="Italic"
                    class="textBtn italic">
                    <span></span>
                </div>
                <div onclick="SetFontWeight('U')" title="Underline"
                    class="textBtn underline">
                    <span></span>
                </div>
                <div class="toolBtn font" title="Font Size">
                    <select title="Font Size" onchange="setFonts()" id="ddlGenFont" style="height: 19px;">
                        <option></option>
                        <option selected="selected">7px</option>
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
                    </select>
                </div>
                <div class="toolBtn fontfamily" title="Font Family">
                    <select title="Font Family" id="ddlGenFontFamily" onchange="setFontFamilies()" style="height: 19px;">
                        <option></option>
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
                </div>
                <div class="toolBtn bgcolor" title="Set Background Color">
                    <input style="width: 40px" id="txtGenBGColor" onblur="setBGColors()" value=""
                        type="text" />
                </div>
                <div class="toolBtn forecolor" title="Set Text Color">
                    <input style="width: 40px" id="txtGenForeColor" onblur="setForeColors()" value=""
                        type="text" />
                </div>
            </div>
            <div id="divDragTemplate" style="display: none;" class="formSettings">
                <table class="table-form">
                    <tr>
                        <td class="td-label">
                            <span>Enter Name</span>
                        </td>
                        <td class="td-value">
                            <input type="text" onclick="return ShowLblExpression(this);" id="txtLabelName" class="lblexp" />
                            <a href="javascript:void(0)" id="lnklblExpr1" class="lnkexpr"
                                onclick="return OpenExprEditor(this);">ExpressionEditor
                            </a>
                        </td>

                    </tr>
                </table>
                <asp:Button ID="btnSaveDragProp" CssClass="ActionButton GreenButton" runat="server" Text="Save" OnClientClick="return AddPropToItem();" />
                <asp:Button ID="btnCancelDrag" CssClass="ActionButton RedButton" runat="server" Text="Cancel" OnClientClick="return CloseDrag();" />
            </div>
            <div id="divImage" style="display: none;" class="formSettings">
                <table class="table-form">
                    <tr>
                        <td class="td-label">
                            <span>Select Image</span>
                        </td>
                        <td class="td-value">
                            <asp:DropDownList ID="ddlImageResources" runat="server"></asp:DropDownList>
                        </td>
                    </tr>
                </table>
                <asp:Button ID="Button1" CssClass="ActionButton GreenButton" runat="server" Text="Save" OnClientClick="return AddImageText();" />
                <asp:Button ID="Button2" CssClass="ActionButton RedButton" runat="server" Text="Cancel" OnClientClick="return removeImageHelper();" />
            </div>
            <div id="divDate" style="display: none;" class="formSettings">
                <table class="table-form">
                    <tr>
                        <td class="td-label">
                            <span>Select Date Format</span>
                        </td>
                        <td class="td-value">

                            <telerik:RadComboBox AllowCustomText="true" Style="POSITION: static" ID="ddlDragDate1" runat="server" Width="163px">
                                <Items>
                                    <telerik:RadComboBoxItem Value="0" Text="Not-Set" />
                                    <telerik:RadComboBoxItem Value="dd/MM/yyyy" Text="15/12/2010" />
                                    <telerik:RadComboBoxItem Value="dd/MM/yy" Text="15/12/10" />
                                    <telerik:RadComboBoxItem Value="dd-MMM-yyyy" Text="15-Dec-2010" />
                                    <telerik:RadComboBoxItem Value="MMMM dd,yyyy" Text="December 15,2010" />
                                    <telerik:RadComboBoxItem Value="dd/MM/yyyy HH:mm" Text="15/12/2010 13:23" />
                                    <telerik:RadComboBoxItem Value="dd/MM/yyyy hh:mm tt" Text="15/12/2010 1:23 pm" />
                                    <telerik:RadComboBoxItem Value="dd-MMM-yyyy HH:mm" Text="15-Dec-2010 13:23" />
                                    <telerik:RadComboBoxItem Value="dd-MMM-yyyy hh:mm tt" Text="15-Dec-2010 1:23 pm" />
                                    <telerik:RadComboBoxItem Value="MMMM dd,yyyy HH:mm" Text="December 15,2010 13:23" />
                                    <telerik:RadComboBoxItem Value="MMMM dd,yyyy hh:mm tt" Text="December 15,2010 1:23 pm" />

                                </Items>

                            </telerik:RadComboBox>
                        </td>
                    </tr>
                </table>
                <asp:Button ID="Button5" runat="server" Text="Save" OnClientClick="return AddDate();" />
                <asp:Button ID="Button6" runat="server" Text="Cancel" OnClientClick="$('#divDate').HideModal();return false;" />
            </div>

            <telerik:RadSplitter ID="rSptrConfig" runat="server" Width="100%" Height="88%" Style="overflow: hidden" BorderWidth="0">

                <telerik:RadPane ID="configNvgPanel" Width="200px" runat="server">
                    <telerik:RadPanelBar Skin="Windows7" SkinID="PbrNoSkin" ExpandMode="FullExpandedItem" Height="100%" Width="100%" ID="pnl" runat="server">
                        <Items>
                            <telerik:RadPanelItem Expanded="true" Text="Items">
                                <ContentTemplate>
                                    <telerik:RadTreeView ID="rtvFieldItems" OnClientMouseOver="OnClientMouseOver" OnClientNodeClicking="OnClientNodeClicking" Style="height: 100%; width: 100%; overflow: auto" runat="server">
                                        <WebServiceSettings Path="ReportDesigner.aspx" Method="GetNodes"></WebServiceSettings>
                                        <Nodes>
                                        </Nodes>
                                    </telerik:RadTreeView>
                                </ContentTemplate>
                            </telerik:RadPanelItem>
                            <telerik:RadPanelItem Text="Tool Box">
                                <ContentTemplate>
                                    <div id="divToolBox">
                                        <div id="divVariableList" onmouseover="SetDragClass(this)"><span dragparam="lbl" res="" class="Label dragNode">Labels</span></div>
                                        <div id="divImageList" onmouseover="SetDragClass(this)"><span dragparam="lbl" res="" class="Image dragNode dragImage">Image</span></div>
                                        <div id="divDate1" onmouseover="SetDragClass(this)"><span dragparam="global" global="date" res="date" class="Date global dragNode dragGlobal">Date</span></div>
                                        <div id="div1" onmouseover="SetDragClass(this)"><span dragparam="hline" global="hline" res="hline" class="hlineCntr dragNode  dragGlobal">Horizontal line</span></div>
                                        <div id="div2" onmouseover="SetDragClass(this)"><span dragparam="vline" global="vline" res="vline" class="vlineCntr dragNode dragGlobal">Vertical line</span></div>
                                        <div id="divPageNumber" onmouseover="SetDragClass(this)"><span dragparam="global" footerparams="pageFooter" global="pagenumber" res="pagenumber" class="PN global dragNode dragGlobal">Page Number</span></div>
                                        <div id="divPageCount" onmouseover="SetDragClass(this)"><span dragparam="global" footerparams="pageFooter" global="pagecount" res="pagecount" class="PC global dragNode dragGlobal">Page Count</span></div>
                                        <div id="divTable" onmouseover="SetDragClass(this)"><span dragparam="table" global="table" res="table" class="tableCntr dragNode dragGlobal">Box</span></div>
                                        <div id="div4" onmouseover="SetDragClass(this)"><span dragparam="report" global="report" res="report" class="rName dragNode">Report Name</span></div>
                                        <div id="div5" onmouseover="SetDragClass(this)"><span dragparam="report" global="report" res="report" class="rDesc dragNode">Report Desc</span></div>
                                    </div>
                                </ContentTemplate>
                            </telerik:RadPanelItem>
                        </Items>

                    </telerik:RadPanelBar>
                </telerik:RadPane>

                <telerik:RadSplitBar ID="spliterBar" runat="server" CollapseMode="Forward">
                </telerik:RadSplitBar>

                <telerik:RadPane ID="ConfigViewPanel" Style="overflow-y: hidden" Height="100%" runat="server">

                    <asp:Literal EnableViewState="false" ID="reportContent" runat="server" Mode="PassThrough"></asp:Literal>
                </telerik:RadPane>


            </telerik:RadSplitter>
            <div class="formSettings" style="display: none; width: 72%;" id="divSave">
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
                        <telerik:RadTab Text="Style" Visible="false" PageViewID="pvStyle" Value="Style">
                        </telerik:RadTab>
                    </Tabs>
                </telerik:RadTabStrip>
                <telerik:RadMultiPage ID="RadMultiPageRights" runat="server" SelectedIndex="0"
                    Style="border: solid 1px #898C95 !important; margin-left: -1px !important; width: 100% !important;">
                    <telerik:RadPageView ID="pvGeneral" runat="server" Height="435px" Style="overflow-y: auto">
                        <div class="div-form">
                            <table class="table-form">
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="Label3" runat="server" Text="Report Name : "></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtReportName" runat="server"></asp:TextBox>
                                        <asp:HiddenField ID="hdnReportName" runat="server" />
                                    </td>

                                </tr>
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="lblDesc" runat="server" Text="Report Desc : "></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtDesc" runat="server"></asp:TextBox>
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
                                        <asp:DropDownList Style="POSITION: static" ID="ddlNumFormat" runat="server" Width="163px">
                                            <asp:ListItem Value="0">Not-Set</asp:ListItem>
                                            <asp:ListItem Value="{0:#}">-1123</asp:ListItem>
                                            <asp:ListItem Value="{0:#,###,###}">-1,123</asp:ListItem>
                                            <asp:ListItem Value="{0:#.##}">-1123.00</asp:ListItem>
                                            <asp:ListItem Value="{0:#,###,###.##}">-1,123.00</asp:ListItem>
                                            <asp:ListItem Value="{0:#;(#);0}">(1123)</asp:ListItem>
                                            <asp:ListItem Value="{0:#,###,###;(#,###,###);0}">(1,123)</asp:ListItem>
                                            <asp:ListItem Value="{0:#.##;(#.##);0}">(1123.00)</asp:ListItem>
                                            <asp:ListItem Value="{0:#,###,###.##;(#,###,###.##);0}">(1,123.00)</asp:ListItem>
                                        </asp:DropDownList></td>

                                </tr>
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="lbl1211" runat="server" Text="Default Date Format"></asp:Label></td>
                                    <td class="td-value">
                                        <asp:DropDownList Style="POSITION: static" ID="ddlDateFormat" runat="server" Width="163px">
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
                                        </asp:DropDownList>
                                    </td>

                                </tr>
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="lblPageSize" runat="server" Text="Page Size"></asp:Label></td>
                                    <td class="td-value">
                                        <asp:DropDownList ID="ddlPageSize" onchange="ddlPageSizeChanged()" runat="server">
                                        </asp:DropDownList></td>


                                </tr>
                                <tr class="trCustom">
                                    <td class="td-label">
                                        <asp:Label ID="Label8" runat="server" Text="Width "></asp:Label></td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtWidth" runat="server" Text="44" SkinID="txtRight">
                                        </asp:TextBox><span style="font-family: nunitoregular; color: #7C7C7C;">Inches</span></td>
                                </tr>
                                <tr class="trCustom">
                                    <td class="td-label">
                                        <asp:Label ID="Label9" runat="server" Text="Height "></asp:Label></td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtHeight" runat="server" Text="34" SkinID="txtRight">
                                        </asp:TextBox><span style="font-family: nunitoregular; color: #7C7C7C;">Inches</span></td>
                                </tr>
                                <tr>
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
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="lblReportSort" runat="server" Text="Sort"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <div id="divReportSort" class="reportSort" style="width: 250px; background-color: yellow"></div>
                                    </td>
                                </tr>
                            </table>
                            <table class="table-form">
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
            <div id="divSummary" class="formSettings" style="display: none">
                <table>
                    <tr>
                        <td>
                            <span>Summary</span>

                            <asp:DropDownList ID="ddlTypes" runat="server" onchange="return toggleFooterList()">
                            </asp:DropDownList>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div id="footerList" class="row">
                            </div>
                        </td>
                    </tr>
                </table>
                <input type="button" id="Button7" onclick="saveSummary();" class="ActionButton GreenButton" value="Save" />
                <input type="button" id="Button8" onclick="$('#divSummary').HideModal(); return false;" class="ActionButton GreenButton" value="Cancel" />
                <a class="pClose" href="javascript:void(0)" style="" onclick="$('#divSummary').HideModal();return false;"></a>
            </div>
            <div class="formSettings" id="divLineSetting" style="display: none">
                <div id="divLocation">
                    <table class="table-form">
                        <tr>
                            <td class="td-label locTop">
                                <asp:Label ID="Label4" runat="server" Text="Top"></asp:Label>
                            </td>
                            <td class=" locTop">
                                <input id="txtLocTop" onblur="SetLineTop()" style="width: 50px" />
                                <span style="font-family: nunitoregular; color: #7C7C7C;">Px</span>
                            </td>
                            <td class="td-label locBottom">
                                <asp:Label ID="Label6" runat="server" Text="Bottom"></asp:Label>
                            </td>
                            <td class="locBottom">
                                <input id="txtLocBottom" onblur="SetLineBottom()" style="width: 50px" />
                                <span style="font-family: nunitoregular; color: #7C7C7C;">Px</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-label locLeft">
                                <asp:Label ID="Label5" CssClass="td-label" runat="server" Text="Left"></asp:Label>
                            </td>
                            <td class="locLeft">
                                <input id="txtLocLeft" onblur="SetLineLeft()" style="width: 50px" />
                                <span style="font-family: nunitoregular; color: #7C7C7C;">Px</span>
                            </td>
                            <td class="td-label locRight">
                                <asp:Label ID="Label7" CssClass="td-label" runat="server" Text="Right"></asp:Label>
                            </td>
                            <td class="locRight">
                                <input id="txtLocRight" onblur="SetLineRight()" style="width: 50px" />
                                <span style="font-family: nunitoregular; color: #7C7C7C;">Px</span>
                            </td>
                        </tr>
                    </table>
                </div>
                <hr />
                <table id="Table2">
                    <tr>
                        <td>Style</td>
                        <td colspan="2">
                            <select id="ddlLineStyle">
                                <option selected="selected" value="outset">Not-Set</option>
                                <option value="none">None</option>
                                <option value="solid">Single</option>
                                <option value="double">Double</option>
                                <option value="dashed">Dash</option>
                                <option value="dotted">Dot</option>
                            </select>
                            &nbsp; Color
		<input id="txtLineColor" style="width: 40px;" type="text"
            value="#000000" />
                            &nbsp; Width &nbsp;<input id="txtLineWidth" style="width: 40px;" class="txtNum"
                                type="text" value="1" />
                            px</td>
                    </tr>
                </table>
                <hr />
                <div style="text-align: right">
                    <input type="button" id="btn1" onclick="saveFieldProperties();" class="ActionButton GreenButton" value="Save" />
                    <a class="pClose" href="javascript:void(0)" style="" onclick="$('#divLineSetting').HideModal();return false;"></a>
                </div>

            </div>

            <div class="formSettings" id="divSettings">

                <div id="divTree" class="sections">
                    <div>
                        <telerik:RadTreeView ID="tvRelated" Style="height: 235px; width: 300px; overflow: auto" CssClass="tree" OnClientDoubleClick="OnClientDoubleClick" OnClientNodeClicked="OnClientNodeClick" runat="server">
                            <WebServiceSettings Path="ReportDesigner.aspx" Method="GetNodes"></WebServiceSettings>
                            <Nodes>
                            </Nodes>
                        </telerik:RadTreeView>
                    </div>
                </div>
                <div id="divDefault">
                    <input type="checkbox" id="chkDefault" onchange="HideStyles()" />
                    <span>Default Font Style</span>
                    <a href="javascript:void(0)" id="lnkReset" style="float: right; display: none;" onclick="resetFieldSettings();">Reset</a>
                    <div id="divLabelFormat" class="row" style="margin-top: 2px;">
                        <div id="divLblBIU" style="display: inline-block">
                            <input type="checkbox" id="chkBold"><label title="Bold" for="chkBold"><b>B</b></label>
                            <input type="checkbox" id="chkItalic"><label title="Italic" style="font-style: italic" for="chkItalic">I</label>
                            <input type="checkbox" id="chkUnderline"><label title="Underline" style="text-decoration: underline" for="chkUnderline">U</label>
                        </div>
                        <input type="text" title="Background Color. Leave blank for theme based color." style="vertical-align: middle" id="txtBgColor" value="inherit" />
                        <input type="text" title="Font Color. Leave blank for theme based color." style="vertical-align: middle" id="txtForeColor" value="inherit" />

                    </div>
                </div>

                <div id="divMimeType" style="margin-top: 5px; padding: 1px 1px 1px 1px">
                    <span class="lbl">Select MIME Type</span>
                    <select title="Font Family" id="ddlMimeType">
                        <option></option>
                        <option selected value="image/jpeg">image/jpeg</option>
                        <option value="image/bmp">image/bmp</option>
                        <option value="image/gif">image/gif</option>
                        <option value="image/tiff">image/tiff</option>
                    </select>
                </div>

                <div id="divSizing" style="margin-top: 5px; padding: 1px 1px 1px 1px">
                    <span class="lbl">Select Sizing</span>
                    <select title="Font Family" id="ddlSizing">
                        <option></option>
                        <%--    <option  value="Autosize">Autosize</option>
                        <option value="Center">Center</option>--%>
                        <option selected value="Normal">Normal</option>
                        <option value="Stretch">Stretch</option>
                        <option value="Scaleproportional">Scaleproportional</option>
                    </select>
                    <hr />
                </div>



                <div id="divFont" style="margin-top: 5px; padding: 1px 1px 1px 1px">
                    <span style="width: 30px" class="lbl">Font</span>
                    <select title="Font Family" id="cboFontFamily">
                        <option selected="selected" value="inherit">Inherit</option>
                        <option value="Verdana">Verdana</option>
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
                    <select title="Font Size" id="cboFontSize">
                        <option>inherit</option>
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
                    </select>
                    <span>Horizontal-Align</span>
                    <select id="ddlH" onchange="setData('1')">
                        <option selected="selected" value="inherit">Inherit</option>
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                    </select>
                    <hr />
                </div>

                <div id="div3">
                    <table class="table-form">
                        <tr>
                            <td class="td-label">
                                <asp:Label ID="Label12" CssClass="td-label" runat="server" Text="Left"></asp:Label>
                            </td>
                            <td>
                                <input id="txtFLeft" onblur="SetFLeftCoordinates()" style="width: 50px" />
                                <span style="font-family: nunitoregular; color: #7C7C7C;">Px</span>
                            </td>
                            <td class="td-label">
                                <asp:Label ID="Label11" CssClass="td-label" runat="server" Text="Right"></asp:Label>
                            </td>
                            <td>
                                <input id="txtFRight" onblur="SetFRightCoordinates()" style="width: 50px" />
                                <span style="font-family: nunitoregular; color: #7C7C7C;">Px</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-label">
                                <asp:Label ID="Label10" runat="server" Text="Top"></asp:Label>
                            </td>
                            <td>
                                <input id="txtFTop" onblur="SetFTopCoordinates()" style="width: 50px" />
                                <span style="font-family: nunitoregular; color: #7C7C7C;">Px</span>
                            </td>
                            <td class="td-label">
                                <asp:Label ID="Label13" runat="server" Text="Bottom"></asp:Label>
                            </td>
                            <td>
                                <input id="txtFBottom" onblur="SetFBottomCoordinates()" style="width: 50px" />
                                <span style="font-family: nunitoregular; color: #7C7C7C;">Px</span>
                            </td>
                        </tr>
                    </table>
                    <hr />
                </div>

                <div id="divSectionHeight">
                    <table>
                        <tr>
                            <td>
                                <span>Height</span>
                            </td>
                            <td>
                                <asp:TextBox ID="txtSectionHeight" runat="server"></asp:TextBox></td>
                            <td>
                                <span>Width</span>
                            </td>
                            <td>
                                <asp:TextBox ID="txtObjWidth" runat="server"></asp:TextBox>

                            </td>
                        </tr>
                    </table>
                    <hr />
                </div>
                <div id="divSctCommon">
                    <table>
                        <tr>
                            <td>
                                <span>Background Color</span>
                            </td>
                            <td>
                                <input type="text" title="Background Color."
                                    style="vertical-align: middle" id="txtBGSct" value="inherit" />
                            </td>
                        </tr>
                    </table>
                    <hr />
                </div>


                <div id="divBorders">
                    <asp:Panel runat="server" Style="padding: 1px 1px 1px 1px" GroupingText="Borders" ID="pnlBorder">
                        <table id="tblBorder">
                            <tr>
                                <td>Border-Top</td>
                                <td colspan="2">
                                    <select id="ddlBTS">
                                        <option selected="selected" value="inherit">Inherit</option>
                                        <option value="none">None</option>
                                        <option value="solid">Single</option>
                                        <option value="double">Double</option>
                                        <option value="dashed">Dash</option>
                                        <option value="dotted">Dot</option>
                                    </select>
                                    &nbsp; Color
		<input id="txtBTC" style="width: 40px;" type="text"
            value="inherit" />
                                    &nbsp; Width &nbsp;<input id="txtBTW" style="width: 40px;" class="txtNum"
                                        type="text" value="inherit" />
                                    px</td>
                            </tr>
                            <tr>
                                <td>Border-Right</td>
                                <td colspan="2">
                                    <select id="ddlBRS">
                                        <option selected="selected" value="inherit">Inherit</option>
                                        <option value="none">None</option>
                                        <option value="solid">Single</option>
                                        <option value="double">Double</option>
                                        <option value="dashed">Dash</option>
                                        <option value="dotted">Dot</option>
                                    </select>
                                    &nbsp; Color
		<input id="txtBRC" style="width: 40px;" type="text"
            value="inherit" />
                                    &nbsp; Width &nbsp;<input id="txtBRW" style="width: 40px" class="txtNum"
                                        type="text" value="inherit" />
                                    px</td>
                            </tr>
                            <tr>
                                <td>Border-Bottom</td>
                                <td colspan="2">
                                    <select id="ddlBBS">
                                        <option selected="selected" value="inherit">Inherit</option>
                                        <option value="none">None</option>
                                        <option value="solid">Single</option>
                                        <option value="double">Double</option>
                                        <option value="dashed">Dash</option>
                                        <option value="dotted">Dot</option>
                                    </select>
                                    &nbsp; Color
		<input id="txtBBC" style="width: 40px;" type="text"
            value="inherit" />
                                    &nbsp; Width &nbsp;<input id="txtBBW" style="width: 40px" class="txtNum"
                                        type="text" value="inherit" />
                                    px</td>
                            </tr>
                            <tr>
                                <td>Border-Left</td>
                                <td colspan="2">
                                    <select id="ddlBLS">
                                        <option selected="selected" value="inherit">Inherit</option>
                                        <option value="none">None</option>
                                        <option value="solid">Single</option>
                                        <option value="double">Double</option>
                                        <option value="dashed">Dash</option>
                                        <option value="dotted">Dot</option>
                                    </select>
                                    &nbsp; Color
		<input id="txtBLC" style="width: 40px;" type="text"
            value="inherit" />
                                    &nbsp; Width &nbsp;<input id="txtBLW" style="width: 40px" class="txtNum"
                                        type="text" value="inherit" />
                                    px</td>
                            </tr>
                        </table>
                    </asp:Panel>
                    <hr />
                </div>

                <div id="divName" style="padding: 1px 1px 1px 1px">
                    <table>
                        <tr>
                            <td>
                                <asp:Label ID="lblDataName" runat="server" Text="Enter Name"></asp:Label>
                            </td>
                            <td>
                                <asp:TextBox ID="txtDataName" onclick="return ShowLblExpression(this);" runat="server" class="lblexp"></asp:TextBox>
                                <a href="javascript:void(0)" id="aLblExpression" class="lnkexpr"
                                    onclick="return OpenExprEditor(this);">ExpressionEditor
                                </a>
                            </td>
                        </tr>
                    </table>
                    <hr />
                </div>

                <div id="divCf">
                    <table>
                        <tr>
                            <td colspan="2">
                                <a href="javascript:void(0)" id="aShowCF" style="text-decoration: none; font-weight: bold; font-size: 12px;"
                                    onclick="return showConditionalFormatting();">Conditional Formatting
                                </a>
                            </td>
                        </tr>
                    </table>
                    <hr />
                </div>

                <div id="groupProps">
                    <span class="row">
                        <asp:TextBox ID="txtGroupName" CssClass="groupName" ReadOnly="true" runat="server"></asp:TextBox>
                        <asp:Button ID="btnChngGrp" CssClass="GreenButton change" runat="server" Text="Change Group" OnClientClick="return changeGroup(this)" />
                    </span>
                    <span class="row">
                        <div id="multiSort" style="width: 250px; background-color: yellow"></div>
                    </span>
                    <hr />
                </div>

                <div id="divSuppress" style="display: none">
                    <span class="row ">
                        <span style="width: 100px" class="lbl">Suppress Section</span><span class="entity-check small"><input id="chkSuppress" type="checkbox" /><label class="chk" for="chkSuppress"></label></span>
                    </span>
                    <hr />
                </div>

                <div style="text-align: right">
                    <input type="button" id="btnSaveField" onclick="saveFieldProperties();" class="ActionButton GreenButton" value="Save" />
                    <a class="pClose" href="javascript:void(0)" style="" onclick="CloseStyleDiv()"></a>

                </div>

            </div>

            <span id="widthInd">100</span>

            <asp:Button ID="btnTree" runat="server" OnClick="btnTreeLoad_Click" Style="display: none" />
            <asp:HiddenField ID="hdnGroupHeader" runat="server" />
            <asp:HiddenField ID="hdnItem" runat="server" />
            <asp:HiddenField ID="hdnGroupFooter" runat="server" />
            <asp:HiddenField ID="hdnReportHeader" runat="server" />
            <asp:HiddenField ID="hdnReportFooter" runat="server" />

            <asp:HiddenField ID="hdnPageHeader" runat="server" />
            <asp:HiddenField ID="hdnPageFooter" runat="server" />

            <asp:HiddenField ID="hdnSubReportHeader" runat="server" />
            <asp:HiddenField ID="hdnSubreportDetail" runat="server" />
            <asp:HiddenField ID="hdnSubreportFooter" runat="server" />

            <div id="locator" indoff="0" style="width: 3px; position: absolute; bottom: 0px; background-color: #EB1010; top: 0px; display: none"></div>

            <div id="divSectionExpert" class="formSettings" style="display: none; left: 80px !important; width: 80%;">
                <a class="pClose" href="javascript:void(0)" style="" onclick="$('#divSectionExpert').HideModal();return false;"></a>
                <asp:Panel ID="Panel1" runat="server" GroupingText="Section Expert">
                    <table>
                        <tr>
                            <td>
                                <div style="width: 283px" class="borders">
                                    <span>Sections</span>
                                    <asp:Button ID="btnInsert" OnClientClick="return InsertSection();" Style="font-size: 11px;" runat="server" Text="Insert" />
                                    <asp:Button ID="btnDelete" OnClientClick="return DeleteSection();" runat="server" Style="font-size: 11px;" Text="Delete" />
                                    <asp:Button ID="btnUp" OnClientClick="return MoveUpSection();" runat="server" Style="font-size: 11px;" Text="Up" />
                                    <asp:Button ID="btnDown" OnClientClick="return MoveDownSection();" runat="server" Style="font-size: 11px;" Text="Down" />

                                </div>
                                <div style="overflow: auto; height: 330px" class="borders">
                                    <telerik:RadTreeView runat="server" OnClientNodeClicked="rtvSections_OnClientNodeClicking" ID="rtvSections"></telerik:RadTreeView>
                                </div>
                            </td>
                            <td>
                                <div style="padding: 1px 1px 1px 1px; position: absolute; top: 31px">
                                    <asp:Button ID="btnAddGroup" CssClass="ActionButton GlassButton" OnClientClick="return addGroup();" runat="server" Text="Add Group" />
                                    <asp:Button ID="btnSubReport" CssClass="ActionButton GlassButton" OnClientClick="return addSubReport();" runat="server" Text="Add Sub Report" />
                                </div>
                                <div id="divSectionCss" style="padding: 10px; width: 100%" class="borders">
                                    <span id="spanSectionHdr"></span>
                                </div>
                            </td>
                        </tr>
                    </table>
                </asp:Panel>

            </div>


        </ContentTemplate>
    </asp:UpdatePanel>
    <script>
        var contextObject;
        var currentSelectedNode;




        $(function () {
            $("#contextMenu").menu();
        });


        function doubleClick(reportObject) {

            $(reportObject).dblclick(function (e) {
                dbClickItem = reportObject;
                removeHighlightClass();
                dbClickItem.addClass("highlight");
                if ($(reportObject).hasClass('line') || $(reportObject).hasClass('table'))
                    showLineProprties($(reportObject));
                else
                    showReportDiv('ItmProp');
                e.stopPropagation();
            });
        }



        function _makeSelectable(sectionStyle) {

            $(sectionStyle).selectable({

                start: function (event, ui) {
                    removeHighlightClass();
                },
                cancel: ".ui-resizable-handle,.line",

                selecting: function (event, ui) {
                    var selectableObj = $(this);
                    if (!$(ui.selecting).hasClass("multiHighlight")) {
                        $(ui.selecting).addClass("multiHighlight");

                    }
                    $(ui.selecting).node(0).removeClass("highlight");
                    $(ui.selecting).node(0).removeClass("multiHighlight");
                    $(".sectionStyle").node(1).removeClass("multiHighlight");
                },
                selected: function (event, ui) {
                    var selectableObj = $(this);
                    if ($.defaultVal(firstObject, "") == "")
                        firstObject = $(ui.selected);
                    if ($(ui.selected).hasClass("multiHighlight")) {
                        $(ui.selected).removeClass("multiHighlight");
                        $(".sectionStyle").node(1).removeClass("multiHighlight");
                        $(ui.selected).addClass("highlight");

                    }
                    $(ui.selected).node(0).removeClass("highlight");
                    $(ui.selected).node(0).removeClass("multiHighlight");
                    $(".sectionStyle").node(1).removeClass("multiHighlight");
                },
                stop: function (event, ui) {

                    if ($('.ui-selected').length == 0) {
                        $(this).closest(".reportsection").attr('fromSelect', '1');
                        Highlight($(this).closest(".reportsection"), event);
                    }

                }
            });
        }






        function InitEvents() {

            $("#divReportSections").on("scroll", function () {
                if ($('#contextMenu').isVisible())
                    $('#contextMenu').hide();
            });

            $(document).on("contextmenu", ".reportObject,.line-h,.line-v,.table,.sectionStyle,.reportsection", function (event) {
                var srcElement = $(event.toElement);

                //to determine object 
                if (srcElement.hasClass('reportObject') || srcElement.hasClass('line-h') || srcElement.hasClass('line-v') || srcElement.hasClass('table'))
                    srcElement = $(event.toElement);
                else
                    srcElement = $(event.toElement).closest(".reportsection");
                if (srcElement.attr('id') == "divReportSections")
                    return;

                if (srcElement.hasClass("line-h") || srcElement.hasClass("line-v") || srcElement.hasClass("table"))
                    $("#contextMenu").find('.cf').hide();
                else
                    $("#contextMenu").find('.cf').show();

                //hide show summary on field type
                if ($.defaultVal(srcElement.data("@Type"), "").toLowerCase() == "field" && $.defaultVal(srcElement.data("Summary"), "").toLowerCase() == "")
                    $("#contextMenu").find('.summary').show();
                else
                    $("#contextMenu").find('.summary').hide();

                //hide show summary on field type
                if ($.defaultVal(srcElement.data("Suppress"), "") == "1") {
                    $("#contextMenu").find('.show').show();
                    $("#contextMenu").find('.hide').hide();
                }
                else {
                    $("#contextMenu").find('.show').hide();
                    $("#contextMenu").find('.hide').show();
                }

                if (srcElement.hasClass('table'))
                    $("#contextMenu").find('.hide').hide();

                //place context menu depending on position of element 
                if (($("#divReportSections").height() / 1 - srcElement.getOffset().top / 1) < $("#contextMenu").height() / 1)
                    $("#contextMenu").css({ "top": (event.pageY / 1 - $("#contextMenu").height() / 1) + "px", "left": event.pageX + "px" }).show();
                else
                    $("#contextMenu").css({ "top": event.pageY + "px", "left": event.pageX + "px" }).show();




                contextObject = srcElement;
                currentField = srcElement;
                currentEditingField = srcElement;
                dbClickItem = srcElement;
                removeHighlightClass();
                srcElement.toggleClass("highlight");
                event.preventDefault();
            });



            $(".sectionStyle").each(function () {
                _makeSelectable($(this));
            });


            _makeResizableReportSection($('.reportsection'));



            MakeDroppabelSectionStyle();
            makeSectionsDisable();
            _makeResizableOtherObject($('.sectionStyle'));
            $(".reportObject,.line-v,.table,.line-h").each(function (e) {

                doubleClick($(this));
                var HtmlId = $(this).data("@Type");
                if (!$.isEmpty(HtmlId)) {

                    if (HtmlId.toLowerCase() == "field" || HtmlId.toLowerCase() == "image" || HtmlId.toLowerCase() == "label")
                        _makeResizableDraggableCols($(this));
                    else if (HtmlId == "line")
                        _makeResizableHLineObject($(this));
                    else if (HtmlId == "vline")
                        _makeResizableVLineObject($(this));
                    else if (HtmlId == "table")
                        _makeResizableTable($(this));
                }
            });
        }
        $(function () {
            InitEvents();
        }
        );

    </script>
    <style>
        .ui-menu
        {
            width: 150px;
        }
    </style>
    <script type="text/javascript">
        $("#txtCommonBorder").dblclick(function () {
            var data = $.defaultVal($('#txtCommonBorder').data('border'), "");
            SetCommonBorder(data);
            $("#divCommonBorders").ShowModal();
        });
        $("#txtSubPadding").dblclick(function () {
            var data = $.defaultVal($('#txtSubPadding').data('padding'), "");
            SetPadding(data);
            $("#divCommonPadding").ShowModal();
        });

        function addBorder() {
            var border = GetCommonBorders();
            var style = $('#txtCommonBorder').attr('style');
            var data = $.defaultVal($('#txtCommonBorder').data('border'), "");
            style = style.replace(data, '');
            style = style + border;
            $('#txtCommonBorder').attr('style', style);
            $('#txtCommonBorder').data('border', border);
            $("#divCommonBorders").HideModal();

            return false;
        }
        function addPadding() {
            var padding = GetPadding();
            var style = $('#txtSubPadding').attr('style');
            var data = $.defaultVal($('#txtSubPadding').data('padding'), "");
            style = style.replace(data, '');
            style = style + padding;
            $('#txtSubPadding').attr('style', style);
            $('#txtSubPadding').data('padding', padding);
            $("#divCommonPadding").HideModal();
            return false;
        }
        function GetPadding() {
            var padding = "";
            padding += "padding-top:" + $("#txtTopP").val() + "px;";
            padding += "padding-bottom:" + $("#txtBottomP").val() + "px;";
            padding += "padding-left:" + $("#txtLeftP").val() + "px;"
            padding += "padding-right:" + $("#txtRightP").val() + "px;"


            return padding;
        }
        function GetCommonBorders() {
            var css = "";
            css += "border-top-style:" + $("#ddlTop").val() + ";";
            css += "border-top-width:" + $("#txtTopS").val() + "px;";
            css += "border-top-color:" + $("#txtTopC").val() + ";";

            css += "border-right-style:" + $("#ddlRight").val() + ";";
            css += "border-right-width:" + $("#txtRightS").val() + "px;"
            css += "border-right-color:" + $("#txtRightC").val() + ";";

            css += "border-bottom-style:" + $("#ddlBottom").val() + ";";
            css += "border-bottom-width:" + $("#txtBottomS").val() + "px;";
            css += "border-bottom-color:" + $("#txtBottomC").val() + ";";

            css += "border-left-style:" + $("#ddlLeft").val() + ";"
            css += "border-left-width:" + $("#txtLeftS").val() + "px;"
            css += "border-left-color:" + $("#txtLeftC").val() + ";";
            return css;
        }
        function ResetCommonBorder() {
            $("#txtTopC").val("#000000").blur();
            $("#txtBottomC").val("#000000").blur();
            $("#txtLeftC").val("#000000").blur();
            $("#txtRightC").val("#000000").blur();


            $("#ddlTop").val("inherit").trigger("chosen:updated");
            $("#ddlBottom").val("inherit").trigger("chosen:updated");
            $("#ddlLeft").val("inherit").trigger("chosen:updated");
            $("#ddlRight").val("inherit").trigger("chosen:updated");

            $("#txtTopS").val("1");
            $("#txtBottomS").val("1");
            $("#txtLeftS").val("1");
            $("#txtRightS").val("1");

            $('#txtCommonBorder').data('border', '');

            var t = "position: absolute; background-color: #D5D5D5; width: 64px !important; height: 26px !important;";
            $('#txtCommonBorder').attr('style', t)



        }
        function SetCommonBorder(style) {

            var lbl = $("<span style='" + style + "'></span>");

            $("#txtBottomC").val(lbl.getStyle("border-bottom-color")).blur();
            $("#ddlBottom").val(lbl.getStyle("border-bottom-style")).trigger("chosen:updated");
            $("#txtBottomS").val(lbl.getStyle("border-bottom-width").replace("px", ""));

            $("#txtTopC").val(lbl.getStyle("border-top-color")).blur();
            $("#ddlTop").val(lbl.getStyle("border-top-style")).trigger("chosen:updated");
            $("#txtTopS").val(lbl.getStyle("border-top-width").replace("px", ""));

            $("#txtLeftC").val(lbl.getStyle("border-left-color")).blur();
            $("#ddlLeft").val(lbl.getStyle("border-left-style")).trigger("chosen:updated");
            $("#txtLeftS").val(lbl.getStyle("border-left-width").replace("px", ""));

            $("#txtRightC").val(lbl.getStyle("border-right-color")).blur();
            $("#ddlRight").val(lbl.getStyle("border-right-style")).trigger("chosen:updated");
            $("#txtRightS").val(lbl.getStyle("border-right-width").replace("px", ""));


        }
        function ResetPadding() {
            $("#txtTopP").val("0");
            $("#txtBottomP").val("0");
            $("#txtLeftP").val("0");
            $("#txtRightP").val("0");
            $('#txtSubPadding').data('padding', '');
            var t1 = "background-color: transparent; width: 64px !important; border: 1px solid #000 !important;";
            $('#txtSubPadding').attr('style', t1);

        }
        function SetPadding(style) {

            var lbl = $("<span style='" + style + "'></span>");
            $("#txtTopP").val(lbl.getStyle("padding-bottom").replace("px", ""));
            $("#txtBottomP").val(lbl.getStyle("padding-top").replace("px", ""));
            $("#txtLeftP").val(lbl.getStyle("padding-left").replace("px", ""));
            $("#txtRightP").val(lbl.getStyle("padding-right").replace("px", ""));


        }




    </script>
    <script type="text/javascript">

        var callingDiv = "";
        var currentEditingField = null;
        var isRendered = false;
        var ReportId;
        var SaveAsReportId = "";
        var currentField = "";
        var callingFilter = "";
        var editRow = "";
        var currentab = "";
        var other = "";
        var first = true;
        var currentTAB = "";
        var OtherTAB = "";
        var DoubleClick;
        var initialPos = null;
        var BeforeResizing_Ht = null;
        var BeforeResizing_Top = null;
        var arrDrg = [];
        var validDropZoneCtr;
        var dbClickItem;

        $("#txtFTop,#txtFLeft,#txtFBottom,#txtFRight,#txtLocTop,,#txtLocBottom,,#txtLocRight,#txtLocLeft").spinner({ min: 0 });
        // $("#<%= txtSectionHeight.ClientID%>").spinner({ min: 0 });
        $("#<%= txtSectionHeight.ClientID%>").width(50);
        $('#divCFFormat').setDisplay($("#<%=chkIsVisible.ClientID%>").CheckBoxX().checked());
        //$("#<%=chkMapRelatedFields.ClientID%>").CheckBoxX();

        $("#multiSort").multiSelect({ onItemAdd: addSortItem, onDropDownShowing: showMultiTree });

        $("#divReportSort").multiSelect({ onItemAdd: addReportSortItem, onDropDownShowing: showTreeForReportSort });

        $("#divSettings").find("select").not("#cboFontSize").chosen({ disable_search: true, width: "140px" });
        $("#cboFontSize").chosen({ disable_search: true, width: "70px" });
        $("#chkBold,#chkItalic,#chkUnderline,#chkStyleStrike,#chkStyleUnderline,#chkStyleItalic,#chkStyleBold").button();
        $("#txtTopC,#txtBottomC,#txtRightC,#txtLeftC,#txtBBC,#txtBTC,#txtBLC,#txtBRC,#txtBgColor,#txtBGSct,#txtForeColor,#txtStyleBGColor,#txtStyleBTColor,#txtStyleBRColor,#txtStyleBBColor,#txtStyleBLColor,#txtStyleFontColor,#txtGenForeColor,#txtGenBGColor").simpleColorPicker();
        $("#divCFFormat").find("select").not("#cboCFFontSize").chosen({ disable_search: true, width: "140px" });
        $("#cboCFFontSize").chosen({ disable_search: true, width: "70px" });
        $("#ddlTop").chosen({ disable_search: true, width: "140px" });
        $("#ddlBottom").chosen({ disable_search: true, width: "140px" });
        $("#ddlLineStyle").chosen({ disable_search: true, width: "140px" });
        $("#ddlRight").chosen({ disable_search: true, width: "140px" });
        $("#ddlLeft").chosen({ disable_search: true, width: "140px" });

        $("#ddlStyleHALign").chosen({ disable_search: true, width: "80px" });
        $("#ddlH,#ddlGenFont").chosen({ disable_search: true, width: "80px" });
        $("#ddlStyleFont,#ddlGenFontFamily").chosen({ disable_search: true, width: "100px" });
        $("#ddlStyleBT").chosen({ disable_search: true, width: "80px" });
        $("#ddlStyleBR").chosen({ disable_search: true, width: "80px" });
        $("#ddlStyleBB").chosen({ disable_search: true, width: "80px" });
        $("#ddlStyleBL").chosen({ disable_search: true, width: "80px" });


        $("#chkCFBold,#chkCFItalic,#chkCFUnderline").button();
        $("#txtCFBgColor,#txtCFForeColor,#txtLineColor").simpleColorPicker();
        $("#<%= ddlTypes.ClientID %>").chosen({ disable_search: true, width: "70px" });

        //$(".sectionheadings").on("click", function (event) { toggleSection(this); event.stopPropagation(); });


        $('#divToolBox').find('.dragNode').each(function () { SetDragClass($(this)) });

        $(document).click(function (e) {
            window.asd = e;
            if ($("#divAddPrm").isVisible() && !$(e.srcElement).closest("#divAddPrm").exists() && !$(e.srcElement).hasClass("mainfields")) {
                $("#divAddPrm").hide();
            }
            else if ($("#divAddSubPrm").isVisible() && !$(e.srcElement).closest("#divAddSubPrm").exists() && !$(e.srcElement).hasClass("subfields")) {
                $("#divAddSubPrm").hide();
            }
            else if ($("#divFieldsTree").isVisible() && !$(e.srcElement).closest("#divFieldsTree").exists() && !$(e.srcElement).hasClass("change") && !$(e.srcElement).hasClass("multiSelectCtr")) {
                $("#divFieldsTree").hide();
            }

        });

        function MakeDroppabelSectionStyle() {
            $(".reportsection").each(function () { _makeDroppable($(this).find(".sectionStyle")); });
        }
        function _makeDroppable(section) {
            $(section).droppable({
                accept: function () {
                    var section = $(this);
                    if (($.defaultVal(dragParameter, "") == "lbl" || $.defaultVal(dragParameter, "").toLowerCase() == "image"
                        || $.defaultVal(dragParameter, "") == "global" || $.defaultVal(dragParameter, "") == "company"
                        || $.defaultVal(dragParameter, "") == "hline" || $.defaultVal(dragParameter, "") == "report")
                    && ($.defaultVal(footerParams, "") != "pageFooter")) {
                        section.attr('valid', '1');
                        return true;
                    }
                    else if ($.defaultVal(dragParameter, "") == "vline") {
                        section.attr('valid', '1');
                        return false;
                    }
                    else if ($.defaultVal(footerParams, "") == "pageFooter") {
                        if (section.closest(".reportsection").hasClass("pageFooter")) {
                            section.attr('valid', '1');
                            return true;
                        }
                        else {
                            section.attr('valid', '0');
                            return false;
                        }
                        footerParams = "";
                    }
                    else if ($.defaultVal(dragParameter, "") == "") {
                        section.attr('valid', '1');
                        return true;
                    }
                    else if ($.defaultVal(dragParameter, "") == "fld") {
                        if (section.closest(".reportsection").hasClass("pageFooter") ||
                            section.closest(".reportsection").hasClass("reportFooter") ||
                           section.closest(".reportsection").hasClass("reportHeader") ||
                            section.closest(".reportsection").hasClass("pageHeader")) {
                            section.attr('valid', '1');
                            return true;
                        }
                        else if (section.attr('dragparam') == $.defaultVal(dragParameter, "") || section.parent().hasClass('Group') || section.parent().hasClass('GroupHeader') || section.parent().hasClass('GroupFooter')) {
                            section.attr('valid', '1');
                            return true
                        }
                        else {
                            section.attr('valid', '0');
                            return false;
                        }
                    }
                    else if ($.defaultVal(dragParameter, "").indexOf("bfld") > 0 || $.defaultVal(dragParameter, "").indexOf("bfield") > 0) {
                        if ($.defaultVal(section.attr('dragParam'), "").indexOf('-') > 0) {
                            if ($.defaultVal(section.attr('dragParam'), "").split('-')[0] == dragParameter) {
                                section.attr('valid', '1');
                                return true;
                            }
                            else if ($.defaultVal(dragParameter, "").indexOf('-') > 0) {
                                var tblId = section.closest(".reportsection").data('RelatedId');
                                if (tblId == $.defaultVal(dragParameter, "").split('-')[1]) {
                                    section.attr('valid', '1');
                                    return true;
                                }
                                else {
                                    section.attr('valid', '0');
                                    return false;
                                }
                            }
                            else {
                                section.attr('valid', '0');
                                return false;
                            }
                        }
                        else if ($.defaultVal(section.attr('dragParam'), "") == dragParameter) {
                            section.attr('valid', '1');
                            return true;
                        }
                        else {
                            section.attr('valid', '0');
                            return false;
                        }
                    }
                    else {
                        section.attr('valid', '0');
                        return false;
                    }

                },
                activeClass: "DropHighlight",
                over: function (event, ui) {
                    console.log("in");
                    validDropZoneCtr = $(event.target);
                },
                drop: function (event, ui) {
                    validDropZoneCtr = $(event.target);
                    var h = [];
                    h = $(".DropHighlight");
                    for (var l = 0; l < h.length; l++) {
                        h.eq(l).removeClass("DropHighlight");
                    }
                },
                out: function (event, ui) {
                    console.log("out");
                    validDropZoneCtr = null;
                }
            });
        }


        function onClickHighLight(obj) {
            obj.on("click", function (event) { Highlight(this, event); event.stopPropagation(); });
        }

        var dragParameter;
        var footerParams;
        function _makeDraggableItem(fld, node) {

            var revert = false;
            $(fld).draggable({
                appendTo: fld.hasClass("dragNode") ? $(document.body) : null,
                snap: true,
                grid: [1, 2],
                cursorAt: { left: 0, top: 0 },
                start: function (event, ui) {

                    footerParams = $.defaultVal($(fld).attr('footerParams'), "");

                    dragParameter = $(fld).attr('dragparam');
                    $("#locator").hide();
                    arrDrg = [];
                    var el = $(ui.helper);
                    el.closest(".reportsection").css("overflow-y", "visible");
                    var a = [];
                    a = $(".reportObject");
                    for (var k = 0; k < a.length; k++) {

                        if (a.eq(k).attr('id') != $(el).attr('id')) {
                            arrDrg.push({ "ID": a.eq(k).attr('id'), "Left": a.eq(k).position().left, "OffLeft": a.eq(k).offset().left });
                        }
                    }

                },
                helper: fld.hasClass("dragNode") ? function (e) {
                    var cls = "";
                    var type = "";
                    var global = "";
                    var company = "";
                    var isLine = false;
                    var lineClass = "";
                    if (fld.hasClass("dragField") || fld.hasClass("dragSubField")) {
                        cls = "dragField";
                        type = "Field";

                    }
                    else if (fld.hasClass("dragImage")) {
                        cls = "dragImage";
                        type = "Image";
                    }
                    else if (fld.hasClass("global")) {
                        var res = fld.attr('res');
                        cls = "dragGlobal";
                        type = "Label";
                        global = res;
                    }
                    else if (fld.hasClass("rName")) {
                        var res = "rName";
                        cls = "dragGlobal";
                        type = "Label";
                        global = res;
                    }
                    else if (fld.hasClass("rDesc")) {
                        var res = fld.attr('res');
                        cls = "dragGlobal";
                        type = "Label";
                        global = "rDesc";
                    }
                    else if (fld.hasClass("hlineCntr")) {
                        var res = fld.attr('res');
                        cls = "draghline";
                        type = "line";
                        global = res;
                        isLine = true;
                        lineClass = "hlineHelper";
                    }
                    else if (fld.hasClass("vlineCntr")) {
                        var res = fld.attr('res');
                        cls = "dragLine";
                        type = "line";
                        global = res;
                        isLine = true;
                        lineClass = "vlineHelper";
                    }
                    else if (dragParameter == "company") {
                        cls = "dragCompany";
                        type = "Field";
                        company = "1";
                    }
                    else {
                        cls = "dragLabel";
                        type = "Label";
                    }
                    var h = "";

                    if (!isLine) {
                        h = $("<div class='dragNode dragHelper " + cls + "'>" + fld.html() + "</div>");
                        h.data("@Type", type);
                        h.data("global", global);
                        h.data("company", company);
                        h.data("fieldtype", type.toLowerCase());
                        if (node) {
                            var isParent = node.get_attributes().getAttribute("IsParent");
                            var fieldtype = node.get_attributes().getAttribute("fieldtype");
                            text = node.get_text();
                            value = node.get_value();
                            entitypath = GetEP(node, true, false, false);
                            h.data("@Text", text);
                            h.data("@ep", entitypath);
                            h.data("@val", value);
                            h.data("fieldtype", fieldtype);
                            h.data("tooltip", GetEP(node, false, true, false));
                            h.data("mainnode", GetEP(node, false, false, true));

                        }
                    }
                    else {
                        h = $("<div class='dragNode line " + lineClass + "'></div>");
                        h.data("@Type", type);
                        h.data("global", global);
                        h.data("company", company);
                        h.data("fieldtype", type.toLowerCase());
                    }
                    return h;
                } : null,
                drag: function (event, ui) {
                    if ($("#locator").attr('indoff') == "0") {
                        for (var k = 0; k < arrDrg.length; k++) {
                            if (Math.abs(arrDrg[k]["OffLeft"] - ui.helper.getOffset().left) <= 10) {

                                $("#locator").css("left", arrDrg[k]["OffLeft"]).show();
                                break;
                            }
                            else
                                $("#locator").hide();
                        }
                    }
                },
                revert: function (event, ui) {
                    if (validDropZoneCtr == null) {
                        //if ($(fld).position().left <= $(fld).closest(".reportsection").outerWidth(true)) {
                        //    validDropZoneCtr = $(fld).closest(".reportsection").find(".sectionStyle");

                        //    if (validDropZoneCtr.attr('valid') == "1") {
                        //        revert = false;
                        //        return false;
                        //    }
                        //    else {
                        //        $("#locator").hide();
                        //        revert = true;
                        //        validDropZoneCtr = null;
                        //        return true;
                        //    }
                        //}
                        //else {
                        $("#locator").hide();
                        revert = true;
                        validDropZoneCtr = null;
                        return true;
                        //}
                    }
                    else if (validDropZoneCtr.attr('valid') == "1") {
                        revert = false;
                        return false;
                    }
                    else {
                        if (!validDropZoneCtr.hasClass('DropHighlight')) {
                            $("#locator").hide();
                            revert = true;
                            validDropZoneCtr = null;
                            return true;
                        }
                        else {
                            revert = false;
                            return false;
                        }
                    }
                },
                stop: function (event, ui) {

                    if (!revert) {
                        var el = $(ui.helper).hasClass("dragNode") ? DragFieldToReport($(ui.helper)) : $(ui.helper);
                        var px = $(ui.helper).position().left;

                        var pos = el.getOffset();
                        var top = pos.top;
                        var left = pos.left;
                        var sections = [];
                        sections = $(".reportsection");
                        var found = false;


                        if ($(ui.helper).hasClass("vlineHelper")) {
                            $('#divReportSections').append(el);
                        }
                        else {

                            $(validDropZoneCtr).find(".fieldBorder").append(el);
                            setSnapForObject(el);
                            if ($(ui.helper).hasClass("dragNode")) {
                                el.css({ top: $(ui.helper).position().top - $(validDropZoneCtr).getOffset().top - 2, left: $(ui.helper).position().left - $(validDropZoneCtr).getOffset().left - 2 });
                            }
                            else {
                                el.css({ top: top - $(validDropZoneCtr).getOffset().top - 2, left: left - $(validDropZoneCtr).getOffset().left - 2 });
                            }
                            var locatorLeft = $("#locator").position().left;
                            var secleft = $(el).closest(".reportsection").offset().left;
                            if ($("#locator").isVisible()) {
                                $(el).css("left", locatorLeft - secleft - 3);
                            }
                            $(el).data("linecntr", GetClassForSection($(el).closest('.reportsection').attr('class')));
                        }

                        // el.closest(".reportsection").css("overflow-y", "hidden");
                        if ($(ui.helper).hasClass("dragField") && $(validDropZoneCtr).closest('.reportsection').hasClass('reportDetail')) {
                            createLabel($(ui.helper));
                        }


                        fieldCntr = fieldCntr + 1;
                        dragParameter = "";
                        footerParams = "";
                    }
                    else {
                        if ($(ui.helper).hasClass('dragNode'))
                            $(ui.helper).remove();
                    }
                    $("#locator").hide();
                    validDropZoneCtr = null;
                }
            });
        }
        function _makeDraggableHLine(fld, node) {

            $(fld).draggable({
                appendTo: fld.hasClass("dragNode") ? $(document.body) : null,
                snap: false,
                grid: [1, 2],
                start: function (event, ui) {
                    footerParams = "";
                    dragParameter = $(fld).attr('dragparam');
                },
                revert: function (event, ui) {
                    if (validDropZoneCtr == null) {
                        $("#locator").hide();
                        revert = true;
                        return true;
                    }
                    else if (validDropZoneCtr.attr('valid') == "1") {
                        revert = false;
                        return false;
                    }
                    else {
                        if (!validDropZoneCtr.hasClass('DropHighlight')) {
                            $("#locator").hide();
                            revert = true;
                            return true;
                        }
                        else {
                            revert = false;
                            return false;
                        }
                    }
                },
                helper: fld.hasClass("dragNode") ? function (e) {
                    var cls = "";
                    var type = "";
                    var global = "";
                    var company = "";
                    var isLine = false;
                    var lineClass = "";
                    var res = fld.attr('res');
                    cls = "draghline";
                    type = "line";
                    global = res;
                    isLine = true;
                    lineClass = "hlineHelper";
                    var h = "";

                    h = $("<div class='dragNode line " + lineClass + "'></div>");
                    h.data("@Type", type);
                    h.data("global", global);
                    h.data("company", company);
                    h.data("fieldtype", type.toLowerCase());
                    return h;
                } : null,
                drag: function (event, ui) {
                },

                stop: function (event, ui) {

                    if (!revert) {
                        var el = $(ui.helper).hasClass("dragNode") ? DragFieldToReport($(ui.helper)) : $(ui.helper);
                        var px = $(ui.helper).position().left;
                        var pos = el.getOffset();
                        var top = pos.top;
                        var left = pos.left;
                        $(validDropZoneCtr).find(".fieldBorder").append(el);
                        setSnapForObject(el);

                        if ($(ui.helper).hasClass("dragNode")) {
                            el.css({ top: $(ui.helper).position().top - $(validDropZoneCtr).getOffset().top - 2, left: $(ui.helper).position().left - $(validDropZoneCtr).getOffset().left - 2 });
                        }
                        else {
                            el.css({ top: top - $(validDropZoneCtr).getOffset().top - 2, left: left - $(validDropZoneCtr).getOffset().left - 2 });
                        }

                        var elPos = $(ui.helper).position();
                        var left = $(validDropZoneCtr).position().left;
                        var right = $(validDropZoneCtr).width();
                        if (elPos.left < left)
                            el.css("left", left);
                        if ((elPos.left / 1 + el.width() / 1) > right) {
                            el.attr('style', el.attr('style') + ';width:' + (right / 1 - elPos.left / 1 - 1) + 'px;');
                        }
                        fieldCntr = fieldCntr + 1;
                        dragParameter = "";
                        footerParams = "";
                        SetAllCoOrdinates(el);
                    }
                    else {
                        if ($(ui.helper).hasClass('dragNode'))
                            $(ui.helper).remove();
                    }
                }

            });
        }

        function getExtremeRight() {
            var maxRight = 0;
            $('.reportObject,.line-h,.table').each(function () {
                var right = $(this).getPosition().scrollLeft / 1 + $(this).outerWidth(true) / 1 + 5;
                maxRight = Math.max(maxRight, right);
            });
            $('.line-v').each(function () {
                var right = $(this).getPosition().scrollLeft / 1 + 5;
                maxRight = Math.max(maxRight, right);
            });
            return maxRight;
        }

        function _makeDraggableVLine(fld, node) {

            var revert = false;
            $(fld).draggable({
                appendTo: fld.hasClass("dragNode") ? $('#divReportSections') : null,
                snap: false,
                grid: [1, 1],
                start: function (event, ui) {
                    footerParams = "";
                    dragParameter = $(fld).attr('dragparam');
                },
                helper: fld.hasClass("dragNode") ? function (e) {
                    var cls = "";
                    var type = "";
                    var global = "";
                    var company = "";
                    var isLine = false;
                    var lineClass = "";

                    var res = fld.attr('res');
                    cls = "dragLine";
                    type = "line";
                    global = res;
                    isLine = true;
                    lineClass = "vlineHelper";

                    var h = "";
                    h = $("<div class='dragNode line " + lineClass + "'></div>");
                    h.data("@Type", type);
                    h.data("global", global);
                    h.data("company", company);
                    h.data("fieldtype", type.toLowerCase());

                    return h;
                } : null,
                stop: function (event, ui) {
                    var el = $(ui.helper).hasClass("dragNode") ? DragFieldToReport($(ui.helper)) : $(ui.helper);
                    $('#divReportSections').append(el);
                    setSnapForObject(el);
                    el.css({ top: $(ui.helper).position().top + $('#divReportSections').scrollTop(), left: $(ui.helper).position().left + $('#divReportSections').scrollLeft() });

                    var elPos = el.getOffset();
                    var startsections = "";
                    SetAllCoOrdinates(el);

                    fieldCntr = fieldCntr / 1 + 1;
                    dragParameter = "";
                    footerParams = "";
                }

            });
        }
        function _makeDraggableTable(fld, node) {

            var revert = false;
            $(fld).draggable({
                appendTo: fld.hasClass("dragNode") ? $('#divReportSections') : null,
                snap: false,
                grid: [1, 1],
                start: function (event, ui) {
                    footerParams = "";
                    dragParameter = $(fld).attr('dragparam');
                },
                helper: fld.hasClass("dragNode") ? function (e) {
                    var cls = "";
                    var type = "";
                    var global = "";
                    var company = "";
                    var isLine = false;
                    var lineClass = "";

                    var res = fld.attr('res');
                    cls = "dragLine";
                    type = "table";
                    global = res;
                    isLine = true;
                    lineClass = "tableHelper";

                    var h = "";
                    h = $("<div class='dragNode table " + lineClass + "'></div>");
                    h.data("@Type", type);
                    h.data("global", global);
                    h.data("company", company);
                    h.data("fieldtype", type.toLowerCase());

                    return h;
                } : null,
                stop: function (event, ui) {
                    var el = $(ui.helper).hasClass("dragNode") ? DragFieldToReport($(ui.helper)) : $(ui.helper);
                    $('#divReportSections').append(el);
                    setSnapForObject(el);
                    el.css({ top: $(ui.helper).position().top + $('#divReportSections').scrollTop(), left: $(ui.helper).position().left + $('#divReportSections').scrollLeft() });

                    var elPos = el.getOffset();
                    var startsections = "";
                    SetAllCoOrdinates(el);

                    fieldCntr = fieldCntr / 1 + 1;
                    dragParameter = "";
                    footerParams = "";
                }

            });
        }

        function _makeResizableVLineObject(fld) {
            doubleClick(fld);
            _makeDraggableVLine(fld);
            onClickHighLight(fld);
            $(fld).on("mousedown", function () { initialPos = $(this).position(); })
            $(fld).resizable({
                handles: "n,s",
                minwidth: 10,
                start: function (event, ui) {

                },
                resize: function (event, ui) {

                },
                stop: function (e, ui) {
                    var el = $(ui.element);
                    var elPos = el.getOffset();
                    var startsections = "";
                    var starttop = "";
                    var endsections = "";
                    SetAllCoOrdinates(el);
                }
            });
        }
        function _makeResizableTable(fld) {
            doubleClick(fld);
            _makeDraggableTable(fld);
            onClickHighLight(fld);
            $(fld).on("mousedown", function () { initialPos = $(this).position(); })
            $(fld).resizable({
                handles: "n,s,e,w",
                start: function (event, ui) {

                },
                resize: function (event, ui) {

                },
                stop: function (e, ui) {
                    var el = $(ui.element);
                    var elPos = el.getOffset();
                    var startsections = "";
                    var starttop = "";
                    var endsections = "";
                    SetAllCoOrdinates(el);
                }
            });
        }
        function _makeResizableHLineObject(fld) {
            doubleClick(fld);
            _makeDraggableHLine(fld);
            onClickHighLight(fld);
            $(fld).on("mousedown", function () { initialPos = $(this).position(); })
            $(fld).resizable({
                handles: "e,w",
                minwidth: 10,
                start: function (event, ui) {

                },
                resize: function (event, ui) {

                },
                stop: function (e, ui) {
                    var el = $(ui.element);
                    var elPos = $(ui.element).position();
                    var left = $($('.reportsection')[0]).position().left;
                    var right = $($('.reportsection')[0]).width();

                    if (elPos.left < left)
                        el.css("left", left);
                    if ((elPos.left / 1 + el.width() / 1) > right) {
                        el.attr('style', el.attr('style') + ';width:' + (right / 1 - elPos.left / 1 - 1) + 'px;');
                    }
                    SetAllCoOrdinates(el);
                }
            });
        }
        function _makeResizableReportSection(fld) {
            $(fld).on("mousedown", function () { initialPos = $(this).position(); })
            $(fld).resizable({
                handles: "e",

                start: function (event, ui) {

                },
                resize: function (event, ui) {
                    SetSameWidthForAllSections($(ui.element).width());
                },
                stop: function (e, ui) {
                    var maxRight = getExtremeRight();
                    if (($(ui.element).position().left / 1 + $(ui.element).width() / 1) < maxRight) {
                        $('.reportsection').each(function () { $(this).width(maxRight); });
                    }
                    SetAllCoOrdinates();
                    SetSameWidthForAllSections($(ui.element).width());

                }
            });
        }

        function MoveRespectiveItems_onResize(resizingObject, skip) {
            if (skip == "1")
                return;
            var arrLines = [];
            var ht_before = BeforeResizing_Ht;
            var diffInHt = $(resizingObject).outerHeight(true) - ht_before;
            arrLines = $(".line-v,.table");
            for (var v = 0; v < arrLines.length; v++) {
                if (arrLines.eq(v).getPosition().scrollTop >= BeforeResizing_Top) {
                    arrLines.eq(v).css("top", arrLines.eq(v).getPosition().scrollTop + diffInHt);
                }
                else if (arrLines.eq(v).getPosition().scrollTop + arrLines.eq(v).outerHeight(true) >= BeforeResizing_Top
                   && arrLines.eq(v).getPosition().scrollTop <= BeforeResizing_Top) {
                    arrLines.eq(v).height(arrLines.eq(v).height() + diffInHt);
                }

            }


            SetAllCoOrdinates();
        }
        function MoveRespectiveItems_onDelete(deletedSection) {
            var arrLines = [];
            var top_before = $(deletedSection).getPosition().scrollTop;
            var ht = $(deletedSection).height();
            arrLines = $(".line-v,.table");
            for (var v = 0; v < arrLines.length; v++) {
                if (arrLines.eq(v).getPosition().scrollTop >= top_before) {
                    arrLines.eq(v).css("top", arrLines.eq(v).getPosition().scrollTop - ht);
                }
            }
        }
        function MoveRespectiveItems_onAdd(addedSection) {
            var arrLines = [];
            var top_before = $(addedSection).getPosition().scrollTop;
            var ht = $(addedSection).height();
            arrLines = $(".line-v,.table");
            for (var v = 0; v < arrLines.length; v++) {
                if (arrLines.eq(v).getPosition().scrollTop >= top_before) {
                    arrLines.eq(v).css("top", arrLines.eq(v).getPosition().scrollTop + ht);
                }
            }
        }

        function resize_Section_FieldAdd() {

        }
        function _makeResizableOtherObject(fld) {
            $(fld).on("mousedown", function () { initialPos = $(this).position(); })
            $(fld).resizable({
                handles: "s",
                minheight: 0,
                start: function (event, ui) {
                    BeforeResizing_Ht = $(ui.element).closest(".reportsection").outerHeight(true);
                    BeforeResizing_Top = $(ui.element).closest(".reportsection").getPosition().scrollTop + BeforeResizing_Ht;
                    var th = $(ui.element);
                    var thPos = $(ui.element).position();
                    var height = $(ui.element).height();

                    maxBottom = 0;
                    var a = [];
                    a = th.closest(".reportsection").find(".reportObject");
                    for (var k = 0; k < a.length; k++) {
                        var elementHt = a.eq(k).height();
                        var headingHt = $(fld).find('.sectionheadings').outerHeight(true);
                        var elementTop = a.eq(k).position().top;
                        var bottom = elementHt + headingHt + elementTop;
                        if (maxBottom < bottom)
                            maxBottom = bottom;
                    }
                    a = th.closest(".reportsection").find(".line-h");
                    for (var k = 0; k < a.length; k++) {
                        var elementHt = a.eq(k).height();
                        var headingHt = $(fld).find('.sectionheadings').outerHeight(true);
                        var elementTop = a.eq(k).position().top;
                        var bottom = elementHt + headingHt + elementTop;
                        if (maxBottom < bottom)
                            maxBottom = bottom;
                    }


                },
                resize: function (event, ui) {

                },
                stop: function (e, ui) {
                    var th = $(ui.element);
                    if (th.height() < maxBottom) {
                        th.height(maxBottom);
                    }
                    SetAllCoOrdinates();
                    MoveRespectiveItems_onResize($(ui.element).closest(".reportsection"));
                }
            });
        }

        function _makeResizableDraggableCols(fld) {
            $(fld).on("mousedown", function () { initialPos = $(this).position(); })
            _makeDraggableItem(fld);
            onClickHighLight(fld);
            doubleClick(fld);
            _makeSelectable(fld);


            $(fld).resizable({
                handles: "e,s",
                start: function (event, ui) {

                    var th = $(ui.element);
                    var thPos = $(ui.element).getOffset();

                    $("#widthInd").css("left", thPos.left + 2).css("top", thPos.top).show();
                    th.data("startWidth", th.outerWidth(true));
                    arrEl = [];
                    var el = $(ui.element); var py = $(ui.element).position().top; var px = $(ui.element).position().left;
                    var a = [];
                    a = th.closest(".reportsection").find(".reportObject");
                    for (var k = 0; k < a.length; k++) {

                        if (py == a.eq(k).position().top && a.eq(k).attr('id') != $(el).attr('id') && a.eq(k).position().left >= px) {
                            arrEl.push({ "ID": a.eq(k).attr('id'), "Left": a.eq(k).position().left });
                        }
                    }

                },
                resize: function (event, ui) {

                    var th = $(ui.element); $("#widthInd").html(th.outerWidth());
                    var ow = ui.originalSize.width;
                    var cw = ui.size.width;
                    var wd = cw - ow;
                    for (var k = 0; k < arrEl.length; k++) {
                        $("#" + arrEl[k]["ID"]).css("left", arrEl[k]["Left"] / 1 + wd / 1);
                    }

                },
                stop: function (e, ui) {

                    $("#widthInd").hide();

                }
            });
        }

        function DragFieldToReport(helper) {
            var text = "", value = "", entitypath = "", fieldtype = "";
            var id = ""; var title = ""; var mainparent = "";
            if (helper.data("@Type").toLowerCase() == "field") {
                text = helper.data("@Text");
                value = helper.data("@val");
                entitypath = helper.data("@ep");
                fieldtype = helper.data("fieldtype");
                title = helper.data("tooltip");
                mainparent = helper.data("mainnode");
            }
            else if (helper.data("global").toLowerCase() == "pagenumber") {
                text = "Page Number";
                value = "= PageNumber";
                title = "Page Number";
            }
            else if (helper.data("global").toLowerCase() == "pagecount") {
                text = "Page Count";
                value = "= PageCount";
                title = "Page Count";
            }
            else if (helper.data("global").toLowerCase() == "rname") {
                text = "Report Name";
                value = "";
                title = "Report Name";
            }
            else if (helper.data("global").toLowerCase() == "rdesc") {
                text = "Report Desc";
                value = "";
                title = "Report Description";
            }
            else if (helper.data("global").toLowerCase() == "date") {
                text = "Date";
                value = "= Today()";
                title = "Date";
            }
            else if (helper.hasClass("line")) {
                text = "";
                value = "";
            }
            fieldCntr = fieldCntr / 1 + 1;
            if (helper.hasClass("line") || helper.hasClass("table")) {
                var lineclass = ""; var dtype = "line";
                if (helper.data("global") == "hline")
                    lineclass = "line-h line";
                else if (helper.data("global") == "table") {
                    lineclass = "table";
                    dtype = "table";
                }
                else
                    lineclass = "line-v line";
                id = dtype;
                var spncntr = "<span class='" + lineclass + "' style='overflow:visible' global='" + helper.data("global") + "' id='line-" + fieldCntr / 1 + "'>" + "</span>";
                var th = $(spncntr);
                th.data("@Type", dtype);
                th.data("Name", text);
                th.data("Value", value);
                th.data("EntityPath", entitypath);
                th.data("Type", "");
                th.data("Suppress", "0");
                th.data("title", text);
                th.data("fieldtype", fieldtype);
                th.data("global", helper.data("global"));
                th.data("company", helper.data("company"));

                if (lineclass == "table")
                    _makeResizableTable(th);
                else if (lineclass == "line-v line")
                    _makeResizableVLineObject(th);
                else
                    _makeResizableHLineObject(th);

            }
            else {
                var spanName = true;


                id = helper.data("@Type");
                var spncntr = "<span class='reportObject " + helper.data("@Type") + "' title='" + title + "' global='" + helper.data("global") + "' id='" + helper.data("@Type") + "-" + fieldCntr / 1 + "'>";
                if (spanName)
                    spncntr = spncntr + "<span class='spnName' >" + text + "</span></span>";
                else
                    spncntr = spncntr + text + "</span>";

                var th = $(spncntr);
                th.data("@Type", helper.data("@Type") == "Field" ? "Field" : helper.data("@Type"));
                th.data("Name", text);
                th.data("Value", value);
                th.data("EntityPath", entitypath);
                th.data("Type", "");
                th.data("Suppress", "0");
                th.data("title", text);
                th.data("fieldtype", fieldtype);
                th.data("global", helper.data("global"));
                th.data("company", helper.data("company"));
                th.data("mainnode", mainparent);
                _makeResizableDraggableCols(th);

                if (helper.data("@Type") == "Label" && helper.data("global") == "") {

                    th.data("fieldtype", "label");
                    currentlyDragging = th;
                    ShowDragTemplate('lbl');
                }
                else if (helper.data("@Type") == "Label" && helper.data("global") == "date") {

                    th.data("fieldtype", "label");
                    currentlyDragging = th;
                    ShowDragTemplate('date');
                }
                else if (helper.data("@Type") == "Label" && (helper.data("global") == "pagecount" || helper.data("global") == "pagenumber")) {

                    th.attr('footerParams', "pageFooter");
                    th.data("fieldtype", "label");
                    currentlyDragging = th;
                }
                else if (helper.data("@Type").toLowerCase() == "image") {

                    th.data("fieldtype", "image");
                    currentlyDragging = th;
                    ShowDragTemplate('img');
                }
            }
            th.attr('dragparam', dragParameter);

            return th;
        }






        //to show tree on add field button click
        function showTree(ctl, mode1) {
            mode = mode1;
            $("#btnSaveField").show();
            if (mode1 == 'AddGroup') {
                treeMode = "Double";
                callingDiv = "";
                $("#btnSaveField").hide();
            }
            else if (mode1 == 'AddSort') {
                treeMode = "Single";
                callingDiv = "";
            }
            else
                mode = "ReplaceGroup";

            if (mode == "ReplaceGroup") {
                treeMode = "Single";
                var divTree = $("#divTree");
                var divFieldTree = $("#divFieldsTree");
                $(callingDiv).after(divFieldTree.show().append(divTree.show()));
            }
            else if (mode != "ReplaceGroup") {

                if (!$('#divSettings').isVisible())
                    $('#divSettings').ShowModal();
                toggleStyleOptions();
            }

            return false;
        }

        //common method to add field to respective sections
        function AddFieldToReport(value, dispname, entitypath, fieldtype) {
            var tbl = callingDiv;
            fieldCntr = (fieldCntr / 1 + 1);

            var th = $("<span class='reportObject Field' id='Field-" + fieldCntr + "'>" + dispname + "</span>");
            var thlbl = $("<span class='reportObject Label' data--Type='' data--Suppress='0' data--Entity-Path='" + entitypath + "' data-@-Type='Label' data--Name='" + dispname + "' data--Value='" + value + "' data-title='" + dispname + "' sync='1'  id='Field-" + fieldCntr + "_Label' >" + dispname + "</span>");
            $(tbl).find(".fieldBorder").append(th.css("top", "0px").css("left", "0px"));


            $(th).data("@Type", "Field");
            $(th).data("Name", dispname);
            $(th).data("Value", value);
            $(th).data("EntityPath", entitypath);
            $(th).data("Type", "");
            $(th).data("Suppress", "0");
            $(th).data("title", dispname);
            $(th).data("fieldtype", fieldtype);

            $(thlbl).data("@Type", "Label");
            $(thlbl).data("Name", dispname);
            $(thlbl).data("Value", value);
            $(thlbl).data("EntityPath", entitypath);
            $(thlbl).data("Type", "");
            $(thlbl).data("Suppress", "0");
            $(thlbl).data("title", dispname);
            $(thlbl).data("fieldtype", fieldtype);

            _makeResizableDraggableCols(th);
            _makeResizableDraggableCols(thlbl);

            if ($(tbl).closest(".reportsection").hasClass("reportDetail")) {
                var pageHdr = $("#PageHeader");
                pageHdr.find(".fieldBorder").append(thlbl);
                _makeResizableDraggableCols(thlbl.css("top", "0px").css("left", "0px"));
            }
            if ($(tbl).closest(".reportsection").hasClass("SubreportDetail")) {
                var pageHdr = $(tbl).closest(".subreport").find(".SubreportHeader");
                $(pageHdr[0]).find(".fieldBorder").append(thlbl);
                _makeResizableDraggableCols(thlbl.css("top", "0px").css("left", "0px"));
            }


        }





        function addElementToReport(grpId, grpName, ep, fieldtype) {
            if (mode == "AddGroup") {
                AddGroupToReport(grpId, grpName, ep);
                manageSections('1');
                mode == "";
            }
            else if (mode == "AddField") {
                AddFieldToReport(grpId, grpName, ep, fieldtype);
            }
            if ($('#divSettings').isVisible())
                $('#divSettings').HideModal();
            mode = "";
        }

        function AddGroupToReport(grpId, grpName, ep) {
            var grpID = grpId;
            var grpPath = ep;
            var grpName = grpName;

            grpCntr = (grpCntr / 1 + 1);
            var i = grpCntr;
            var detailSection = $("#reportdetailcntr");
            var footerSection = $("#reportfootercntr");
            var groupheader = "<div class='Group' data-cntr='"
				+ i + "'  ><div class='reportsection GroupHeader GroupHeader" + i + "' id='GroupHeader" + i
				+ "' ><div onclick='Highlight(this,event)' class='sectionheadings'><span>Group Header"
				 + "{" + grpName + "}" + grpCntr + "</span>&nbsp;&nbsp;&nbsp;<a href='javascript:void(0)' style='color:gray' onclick='DeleteGroup(\"" + i + "\");jQuery.Event(event).stopPropagation();'   >Delete</a></div><div class='sectionStyle' dragparam='fld' ><div class='fieldBorder'></div></div> </div></div>";
            var groupfooter = "<div class='Group' data-cntr='" + i + "'  ><div  class='reportsection GroupFooter GroupFooter" + i + "' id='GroupFooter" + i + "' ><div onclick='Highlight(this,event)' class='sectionheadings'><span>Group Footer" + "{" + grpName + "}" + grpCntr + "</span></div><div class='sectionStyle' dragparam='label' ><div class='fieldBorder'></div></div></div>";
            detailSection.prev().after(groupheader);

            BeforeResizing_Ht = 0;
            BeforeResizing_Top = $("#GroupHeader" + i).closest(".Group").getPosition().scrollTop;
            MoveRespectiveItems_onResize($("#GroupHeader" + i).closest(".Group"));


            $("#GroupHeader" + i).data("@Type", "rSection");
            $("#GroupHeader" + i).data("cntr", i);
            $("#GroupHeader" + i).data("grpID", grpID);
            $("#GroupHeader" + i).data("grpName", grpName);
            $("#GroupHeader" + i).data("grpPath", grpPath);
            $("#GroupHeader" + i).data("fieldtype", "-999");

            detailSection.after(groupfooter);


            BeforeResizing_Ht = 0;
            BeforeResizing_Top = $("#GroupFooter" + i).closest(".Group").getPosition().scrollTop;
            MoveRespectiveItems_onResize($("#GroupFooter" + i).closest(".Group"));


            $("#GroupFooter" + i).data("@Type", "rSection");
            $("#GroupFooter" + i).data("cntr", i);
            $("#GroupFooter" + i).data("fieldtype", "-999");

            onClickHighLight($("#GroupHeader" + i));
            onClickHighLight($("#GroupFooter" + i));
            //  $("#GroupHeader" + i).find(".sectionheadings").on("click", function (event) { toggleSection(this); event.stopPropagation(); });
            // $("#GroupFooter" + i).find(".sectionheadings").on("click", function (event) { toggleSection(this); event.stopPropagation(); });

            //_makeDroppable($("#GroupHeader" + i).find(".sectionStyle"));
            //_makeDroppable($("#GroupFooter" + i).find(".sectionStyle"));++



            MakeDroppabelSectionStyle();
            SetSameWidthForAllSections();
        }
        function addSubReport() {
            $("#btnSubNext").show();
            $("#btnOK").hide();
            $("#subInfoCntr").show();
            $("#divSubreport").ShowModal();

            return false;

        }
        function GetSubReportCount() {
            var subreports = [];
            subreports = $(".subreport");
            return subreports.length + 1;
        }
        function addSortItem(item, obj) {
            if (typeof obj == "object")
                item.find('span').html("<span data-fid='" + $.defaultVal(obj.FID, "") + "' data-entity-path='" + $.defaultVal(obj.EntityPath, "") + "'>" + $.defaultVal(obj.Name, "") + "</span><a href='javascript:void(0)' onclick='toggle(event,this)'>" + $.defaultVal(obj.Sort, "") + "</a>")
        }

        function addReportSortItem(item, obj) {
            if (typeof obj == "object")
                item.find('span').html("<span data-fid='" + $.defaultVal(obj.FID, "") + "' data-entity-path='" + $.defaultVal(obj.EntityPath, "") + "'>" + $.defaultVal(obj.Name, "") + "</span><a href='javascript:void(0)' onclick='toggle(event,this)'>" + $.defaultVal(obj.Sort, "") + "</a>")
        }

        function addGroup() {
            showTree("", 'AddGroup');

            return false;
        }
        function changeGroup(cntrl) {
            // $('#divSettings').HideModal();
            callingDiv = $(cntrl);
            showTree(callingDiv, "ReplaceGroup");
            return false;
        }
        function showMultiTree() {
            treeMode = "Single";
            callingDiv = $("#multiSort");
            var divTree = $("#divTree");
            var divFieldTree = $("#divFieldsTree");
            callingDiv.after(divFieldTree.show().append(divTree.show()));
        }

        function showTreeForReportSort() {
            treeMode = "Single";
            callingDiv = $("#divReportSort");
            var divTree = $("#divTree");
            var divFieldTree = $("#divFieldsTree");
            callingDiv.after(divFieldTree.show().append(divTree.show()));
        }

        function AddFieldsToSR(btn, mode) {
            var button = $(btn);
            var subcnt = button.attr("frmid");
            callingDiv = button;

            // var src = $("#iframe-" + subcnt).attr('src') + "&Mode=Detail";
            //$("#iframe-" + subcnt).attr('src', src);
            $("#iframectr-" + subcnt).attr("subcnt", subcnt);
            $("#iframectr-" + subcnt).append($("#iframe-" + subcnt).show()).ShowModal();
            DoubleClick = true;
            return false;
        }
        function AddToParameter(dispname, value, entitypath) {
            var txt = $(callingDiv);
            if (txt.hasClass("mainfields")) {

                txt.attr("fid", value);
                txt.attr("ep", entitypath);

            }
            else {
                txt.attr("subfid", value);
                txt.attr("subep", entitypath);
            }
            txt.val(dispname);
            AddEmptyRow();
            $("#divAddSubPrm").hide();
            $("#divAddPrm").hide();
        }

        // not in use
        function AddSubreportField(dispname, value, entitypath) {
            var btn = $(callingDiv);
            callingDiv = $(callingDiv).closest(".reportsection");
            AddFieldToReport(value, dispname, entitypath);

            var cnt = $(btn).attr("frmid");
            $("#iframectr-" + cnt).HideModal();
        }

        function AddEmptyRow() {
            var tbl = $('#divParameter').find(".tblcntr").find(".tblPrm");
            var rows = tbl.find(".trPrm");
            var row = "";
            if (rows.length <= 0 || rows.eq(rows.length - 1).find(".mainfields").val() != "") {
                rows += "<tr class='trPrm'><td>";
                rows += "<input type='text' value='' readonly='readonly' ep='' fid='' onfocus='toggleTree(this,\"mainReport\")' onblur='HideTree(this,\"mainReport\")' class='mainfields DisplayName' />"
                rows += "</td><td>";
                rows += "<input type='text' value='' readonly='readonly' subep='' subfid='' onfocus='toggleTree(this,\"subReport\")' onblur='HideTree(this,\"subReport\")' class='subfields DisplayName' />"
                rows += "</td><td><a href='javascript:void(0)'  class='close' id='btnDelLnk' onclick='return deleteParameter(this);'>X</a></td></tr>";
                tbl.find('tbody').append($(rows))
            }
        }
        function showConditionalFormatting() {

            var arrCFData = [];
            arrCFData = $.defaultVal(arrCondFormat[$(currentField).attr('id')], "");
            editRow = "";
            var tbl = $('#divCFCntr').find("table").find("tbody");
            var rows = tbl.find(".trCF");
            rows.remove();

            if (arrCFData != "") {
                for (var i = 0; i < arrCFData.length; i++) {
                    addEmptyCfRow(arrCFData[i]["DispCond"], arrCFData[i]["Style"], arrCFData[i]["filterXml"], arrCFData[i]["Visible"], arrCFData[i]["Border"], arrCFData[i]["Padding"]);
                }
            }

            if ($("#divSettings").isVisible())
                $("#divSettings").HideModal();

            $("#divFormating").css("z-index", "120").ShowModal();
        }
        function addEmptyCfRow(value, style, filterXml, visible, border, padding) {
            var tbl = $('#divCFCntr').find("table").find("tbody");
            var rows = tbl.find(".trCF");

            var row = "";
            rows += "<tr class='trCF'><td>";
            rows += "<div style='width: 215px;border: 1px solid;padding: 2px 2px 2px 2px;background: #9E9A9A' class='txtQuery'>" + value + "</div>"
            rows += "</td><td>";
            rows += "<input type='text' style='display:none' value='" + filterXml + "' class='txtXml' />"
            rows += "</td><td>";
            rows += "<div style='height:20px;width:70px;" + style + "'><span style='" + style + "' class='spnStyle'>AaBbCcDd</span></div>"
            rows += "</td><td><input class='spnvisible' disabled='disabled' id='spnvisible" + (rows.length / 1 + 1) + "' " + (visible == "1" ? "checked" : "") + "  type='checkbox' data-chk-on='yes' readonly='readonly' data-chk-off='no' /><span class='lblvisible'>Visible</span>";
            rows += "</td><td><input class='border' style='display:none;' value='" + border + "' text='" + border + "' />";
            rows += "</td><td><input class='padding' style='display:none;' value='" + padding + "' text='" + padding + "' />";
            rows += "</td><td><input type='button' id='btnEdit' style='background:url(../Images/Edit.gif);width: 20px;height: 20px;' onclick='return editCFRow(this);'/></td><td><input type='button' id='btnDelLnk' style='background:url(../Images/delete.gif);width: 20px;height: 20px;' onclick='return deleteCFRow(this);' /></td></tr>";
            if (editRow != "") {
                $(editRow).replace($(rows));
                editRow = "";
            }
            else
                tbl.append($(rows));


            $("#spnvisible" + (rows / 1 + 1)).setDisplay($("#spnvisible" + (rows / 1 + 1)).CheckBoxX().checked());
            return false;
        }
        function addSubReportSection() {
            var detailSection = $(".reportDetail").eq($(".reportDetail").length - 1);
            var RelatedId = $find("<%= cboRelatedEntities.ClientID %>").get_value();
            var reportId = "";
            var name = $find("<%= cboRelatedEntities.ClientID %>").get_text();
            var rdoBlank = $("#<%= rdoBlank.ClientID %>").checked();
            var rdoExisting = $("#<%= rdoESR.ClientID %>").checked();
            var repType = "";
            subi = GetSubReportCount();
            var subreport = "";

            if (rdoBlank) {
                subreport = "<div class='subreport' id='Subreport" + subi + "'  >";
                repType = "blank";
                subreport += "<div id='subreportheadercntr'><div class='reportsection SubreportHeader' id='SubreportHeader" + subi + "' >";
                subreport += "<div onclick='Highlight(this,event)' class='sectionheadings'><span>Subreport Header"
                    + subi + "{" + name
                    + "}</span>  </div>";
                subreport += "<div class='sectionStyle' dragparam='subfield-" + RelatedId + "'><div class='fieldBorder'></div></div></div></div>";


                subreport += "<div id='subreportdetailcntr'><div class='reportsection SubreportDetail' id='SubreportDetail" + subi + "' >";
                subreport += "<div onclick='Highlight(this,event)' class='sectionheadings'><span>Subreport "
                    + subi + "{" + name
                    + "}</span>&nbsp;&nbsp;&nbsp;<a href='javascript:void(0)' style='color:gray' onclick='AddParameter(this,\"AddParameter\")'  frmid='" + subi + "' >Add Parameter</a>&nbsp;&nbsp;&nbsp;<a href='javascript:void(0)' style='color:gray' onclick='AddSubreportFilter(this)'  frmid='" + subi + "' fid='" + RelatedId + "' >Add Filter</a><input type='hidden' id='hdnSubFilter" + subi + "' /></div>";
                subreport += "<div class='sectionStyle'   dragparam='subfield-" + RelatedId + "'><div class='fieldBorder'></div></div></div></div>";


                subreport += "<div id='subreportfootercntr'><div class='reportsection SubreportFooter' id='SubreportFooter" + subi + "' >";
                subreport += "<div onclick='Highlight(this,event)' class='sectionheadings'><span>Subreport Footer"
                    + subi + "{" + name
                    + "}</span>  </div>";
                subreport += "<div class='sectionStyle' dragparam='subfield-" + RelatedId + "'><div class='fieldBorder'></div></div></div></div>";
                subreport + "</div>";
            }
            else {
                repType = "existing";
                subreport = "<div class='reportsection subreport' id='Subreport" + subi + "' >";
                reportId = $.defaultVal($find("<%= cboExistingSR.ClientID %>").get_value(), "");
                RelatedId = $.defaultVal($find("<%= cboExistingSR.ClientID %>").get_selectedItem().get_attributes().getAttribute("entityId"), "");
                name = $.defaultVal($find("<%= cboExistingSR.ClientID %>").get_text(), "");
                subreport += "<div class='sectionheadings' onclick='Highlight(this,event)'><span>Subreport " + subi + "{" + name + "}</span>&nbsp;&nbsp;&nbsp;<a href='javascript:void(0)' style='color:gray' onclick='AddParameter(this,\"AddParameter\")'  frmid='" + subi + "' >Add Parameter</a>&nbsp;&nbsp;&nbsp;<a href='javascript:void(0)' style='color:gray' onclick='AddSubreportFilter(this)'  frmid='" + subi + "'  fid='" + RelatedId + "' >Add Filter</a><input type='hidden' id='hdnSubFilter" + subi + "' /></div></div>";
            }

            if (!$("#DivSubSections").exists())
                detailSection.after("<div id='DivSubSections' >" + subreport + "</div>");
            else {
                var len = $("#divReportSections").find(".subreport").length - 1;
                $("#divReportSections").find(".subreport").eq(len).after(subreport);
                _makeSelectable($("#Subreport" + subi));
            }


            var iframe = "";
            var txtFilter = "";
            if (!$("#iframe-" + subi).exists()) {
                iframe = $("<div style='display:none;height:100%;width:100%' id='iframectr-" + subi + "' class='iframectr formSettings'><iframe style='height:98%;width:100%' frameborder='0' id='iframe-" + subi + "' EID='" + RelatedId + "' src='EntityTree.aspx?EID=" + RelatedId + "' ></iframe> <input type='button' onclick='$(\"#iframectr-" + subi + "\").HideModal();' style='float:right' class='RedButton' value='X' /></div>");

                $(document.body).append(iframe);
                var radtree = $find("<%=  rtvFieldItems.ClientID %>");

                if (radtree.findNodeByAttribute("dragparam", "subfield-" + RelatedId) == null) {
                    radtree.trackChanges();
                    var newnode = new Telerik.Web.UI.RadTreeNode();
                    newnode.set_text(name);
                    newnode.set_value(RelatedId);
                    newnode.get_attributes().setAttribute("dragparam", "subfield-" + RelatedId);
                    newnode.get_attributes().setAttribute("dragparam_id", RelatedId);
                    newnode.get_attributes().setAttribute("IsParent", "1");
                    newnode.get_attributes().setAttribute("IsSubReport", "1");
                    newnode.set_expandMode(3);
                    radtree.get_nodes().add(newnode);
                    radtree.commitChanges();
                }
            }

            if (rdoBlank) {
                $("#SubreportHeader" + subi).data("@Type", "subHdr");
                $("#SubreportDetail" + subi).data("@Type", "subDtl");
                $("#SubreportFooter" + subi).data("@Type", "subFtr");

                $("#SubreportHeader" + subi).data("fieldtype", "-999");
                $("#SubreportDetail" + subi).data("fieldtype", "-999");
                $("#SubreportFooter" + subi).data("fieldtype", "-999");
            }


            $("#Subreport" + subi).data("@Type", "rsubReport");
            $("#Subreport" + subi).data("cntr", subi);
            $("#Subreport" + subi).data("repType", repType);
            $("#Subreport" + subi).data("RelatedId", RelatedId);
            $("#Subreport" + subi).data("grpName", name);
            $("#Subreport" + subi).data("reportId", reportId);
            $("#Subreport" + subi).data("fieldtype", "-999");
            $("#SubreportDetail" + subi).data("RelatedId", RelatedId);
            $("#divSubreport").HideModal();


            onClickHighLight($("#SubreportHeader" + subi));
            onClickHighLight($("#SubreportDetail" + subi));
            onClickHighLight($("#SubreportFooter" + subi));
            //$("#SubreportFooter" + subi).find(".sectionheadings").on("click", function (event) { toggleSection(this); event.stopPropagation(); });
            // $("#SubreportDetail" + subi).find(".sectionheadings").on("click", function (event) { toggleSection(this); event.stopPropagation(); });
            // $("#SubreportHeader" + subi).find(".sectionheadings").on("click", function (event) { toggleSection(this); event.stopPropagation(); });

            _makeSelectable($("#SubreportDetail" + subi).find(".sectionStyle"));
            _makeSelectable($("#SubreportHeader" + subi).find(".sectionStyle"));
            _makeSelectable($("#SubreportFooter" + subi).find(".sectionStyle"));

            MakeDroppabelSectionStyle();
            SetSameWidthForAllSections();
            manageSections();

            BeforeResizing_Ht = 0;
            BeforeResizing_Top = $("#SubreportHeader" + subi).closest(".subreport").getPosition().scrollTop;
            MoveRespectiveItems_onResize($("#SubreportHeader" + subi).closest(".subreport"));
        }


        function AddParameter(btn, mode) {
            $("#divSettings").hide().append($("#divTree"));
            $(document.body).append($("#divAddPrm").hide());
            $(document.body).append($("#divAddSubPrm").hide());

            var counter = 0;
            if (mode == "FromLoad")
                counter = subi;
            else
                counter = $(btn).attr('frmid');

            var RelatedRecord = $.defaultVal($("#Subreport" + counter).data("RelatedRecord"), "0");
            if (RelatedRecord == "1")
                $("#<%= chkMapRelatedFields.ClientID %>").checked(true);
            else
                $("#<%= chkMapRelatedFields.ClientID %>").checked(false);


            $('#divParameter').attr('frmid', counter);
            var divP = $('#divParameter').find(".tblcntr");
            divP.find(".tblPrm").remove();
            var arrCols = [];
            arrCols = $.defaultVal(ArrParameterData["Subreport" + counter], "");
            var table = "<table class='tblPrm'><tbody><tr><td><span style='color: #049800;font-size: 14px;font-family: nunitobold;'>Main Report Fields</span></td><td><span style='color: #F00;font-size: 14px;font-family: nunitobold;'>SubReport Fields</span></td></tr>";
            var rows = "";
            if (arrCols != "") {
                for (var i = 0; i < arrCols.length; i++) {
                    rows += "<tr class='trPrm'><td>";
                    rows += "<input type='text' readonly='readonly' value='" + $.defaultVal(arrCols[i]["mainText"], "") + "' fid='" + $.defaultVal(arrCols[i]["mainID"], "") + "' ep='" + $.defaultVal(arrCols[i]["EP"], "") + "' onfocus='toggleTree(this,\"mainReport\")' onblur='HideTree(this,\"mainReport\")' class='mainfields DisplayName' />"
                    rows += "</td><td>";
                    rows += "<input type='text' readonly='readonly' value='" + $.defaultVal(arrCols[i]["subText"], "") + "' subfid='" + $.defaultVal(arrCols[i]["subID"], "") + "' subep='" + $.defaultVal(arrCols[i]["subEP"], "") + "' onfocus='toggleTree(this,\"subReport\")' onblur='HideTree(this,\"subReport\")' class='subfields DisplayName' />"
                    rows += "</td><td><a href='javascript:void(0)' class='close' id='btnDelLnk' onclick='return deleteParameter(this);'>X</a></td></tr>";
                }


            }
            table += rows + "</tbody></table>";
            divP.append($(table));
            AddEmptyRow();
            $('#divParameter').ShowModal();

            return false;
        }

        function addPrmToSR() {
            var divPrm = $("#divParameter");
            var er = divPrm.attr("frmid");
            var divSubreport = $("#DivSubSections");
            var currentSection = divSubreport.find("#Subreport" + er);
            var arrPrmData = [];
            //chkMapRelatedFields

            var mapFields = $("#<%= chkMapRelatedFields.ClientID %>").checked();
            if (mapFields)
                divSubreport.find("#Subreport" + er).data("RelatedRecord", "1");
            else
                divSubreport.find("#Subreport" + er).data("RelatedRecord", "0");

            divPrm.find(".tblPrm").find(".trPrm").each(function () {
                var mainID = $.defaultVal($(this).find(".mainfields").attr("fid"), "");
                var EP = $.defaultVal($(this).find(".mainfields").attr("ep"), "");
                var mainText = $.defaultVal($(this).find(".mainfields").val(), "");
                var subID = $.defaultVal($(this).find(".subfields").attr("subfid"), "");
                var subEP = $.defaultVal($(this).find(".subfields").attr("subep"), "");
                var subText = $.defaultVal($(this).find(".subfields").val(), "");
                arrPrmData.push({ mainID: mainID, EP: EP, mainText: mainText, subID: subID, subEP: subEP, subText: subText });
            });
            ArrParameterData["Subreport" + er] = arrPrmData;
            closeParameter();

        }
        function OpenRecordFilter() {
            if ($.isEmpty($('#<%= ifrmReportFilter.ClientID %>').attr('src'))) {
                var url = "../Meta/Filters_Add.aspx?PageMode=Setting&SID=" + sid + "&Hidebutton=1&ShowFilterBtn=1&ReturnXml=1";
                var data = new Object();
                data["PageType"] = $.QS("PageType");
                data["EID"] = $.QS("EID");
                data["SID"] = sid;
                data["xml"] = $("#<%= hdnFilter.ClientID %>").val();
                callingFilter = "MainFilter";
                PageMethods.SetFilterSession(data);
                $('#<%= ifrmReportFilter.ClientID %>').attr('src', url);


                url = "../Meta/Filters_Add.aspx?PageMode=Settings&SID=" + complFilterId + "&Hidebutton=1&ShowFilterBtn=1&ReturnXml=1";
                var data = new Object();
                data["PageType"] = $.QS("PageType");
                data["EID"] = $.QS("EID");
                data["SID"] = complFilterId;
                data["xml"] = $("#<%= hdnCompulsoryFilter.ClientID %>").val();
                PageMethods.SetFilterSession(data);
                callingFilter = "CompulsoryFilter";
                $('#<%= ifrmCompulsoryFilter.ClientID %>').attr('src', url);
            }
            return false;
        }
        function addFilter() {
            $("#divCFFormat").hide();
            $("#FilterProps").ShowModal();
        }

        function OnFilterTabSelected(sender, args) {
            var tab = args.get_tab();
            var value = tab.get_value();
        }

        function editCFRow(btnEdit) {
            var xml = $(btnEdit).closest(".trCF").find(".txtXml").val();
            editRow = $(btnEdit).closest(".trCF");
            resetCFSettings();
            var f = $(btnEdit).closest(".trCF").find(".spnStyle");
            var v = $(btnEdit).closest(".trCF").find(".spnvisible").checked();
            var padding = $(btnEdit).closest(".trCF").find(".padding").val();
            var border = $(btnEdit).closest(".trCF").find(".border").val();
            applyCFStyleProps(f, v, border, padding);
            var data = new Object();
            data["PageType"] = $.QS("PageType");
            data["EID"] = $.QS("EID");
            data["SID"] = cfid;
            data["xml"] = xml;

            PageMethods.SetCFFilterSession(data);
            callingFilter = "ConditionalFormatting";
            var url = "Filters_Add.aspx?PageMode=report&SID=" + cfid + "&IsCond=1";
            $('#<%= IfrmFilter.ClientID %>').attr('src', url);
            $("#divCFFormat").show();
            $("#divFilter").ShowModal();
            return false;
        }


        function ShowFilterForSubreport(subDetailCntr) {
            var h = $(subDetailCntr).closest(".reportsection").data("cntr");
            var data = new Object();
            data["PageType"] = $.QS("PageType");
            data["EID"] = $(subDetailCntr).closest(".reportsection").data("RelatedId");
            data["SID"] = subreportfilter;
            if ($("#txt-" + h).exists())
                data["xml"] = $("#txt-" + h).val();
            else
                data["xml"] = "";
            PageMethods.SetSubreportFilterSession(data);
            callingFilter = "ConditionalFormatting";
            var url = "Filters_Add.aspx?PageMode=report&SID=" + subreportfilter;
            $('#<%= IfrmFilter.ClientID %>').attr('src', url);
            callingFilter = "SubreportFilter-" + h;
            $("#divCFFormat").hide();
            $("#divFilter").ShowModal();
            return false;
        }


        function showFilter() {
            var data = new Object();
            data["PageType"] = $.QS("PageType");
            data["EID"] = $.QS("EID");
            data["SID"] = cfid;
            data["xml"] = "";
            PageMethods.SetCFFilterSession(data);
            callingFilter = "ConditionalFormatting";
            var url = "Filters_Add.aspx?PageMode=report&SID=" + cfid + "&IsCond=1";
            $('#<%= IfrmFilter.ClientID %>').attr('src', url);
            resetCFSettings();
            $("#divCFFormat").show();
            $("#divFilter").ShowModal();
            return false;
        }

        function showReportDiv(mode) {
            var hdnReportName = $("#<%= hdnReportName.ClientID %>");
            var hdnDesc = $("#<%= hdnDesc.ClientID %>");
            var ReportName = $("#<%= txtReportName.ClientID %>");
            var Desc = $("#<%= txtDesc.ClientID %>");
            var tab = $find("<%= tabRightsInfo.ClientID %>");

            tab.findTabByValue('General').select();
            ReportName.val(hdnReportName.val());
            Desc.val(hdnDesc.val());
            if (mode == "Save") {
                $('#divSave').data('Mode', '');
                if ($.defaultVal(ReportId, "") == "") {
                    if ($.QS("Mode") == "Existing") {
                        ReportName.val('Copy-' + hdnReportName.val());
                        Desc.val(hdnDesc.val());
                        //$("#btnGroupHeader").click();
                    }

                    var arrS = [];
                    arrS = ArrReportSortData["Report"];
                    if (arrS != undefined)
                        $("#divReportSort").multiSelect().refresh(ArrReportSortData["Report"]);
                    $('#divSave').ShowModal();
                } else {
                    saveReport();
                }
            }
            else if (mode == "SaveAs") {
                $('#divSave').data('Mode', 'SaveAs');
                ReportName.val('Copy-' + hdnReportName.val());
                Desc.val(hdnDesc.val());
                //  $("#btnGroupHeader").click();
                var arrS = [];
                arrS = ArrReportSortData["Report"];
                if (arrS != undefined)
                    $("#divReportSort").multiSelect().refresh(ArrReportSortData["Report"]);
                $('#divSave').ShowModal();
                //   $("#btnGroupHeader").click();
            }
            else if (mode == "RptProp") {
                $('#divSave').data('Mode', '');
                $("#tabContent").append($(".tblStyle"));
                loadStyleOfTab();
                var arrS = [];
                arrS = ArrReportSortData["Report"];
                if (arrS != undefined)
                    $("#divReportSort").multiSelect().refresh(ArrReportSortData["Report"]);
                $('#divSave').ShowModal();
                //   $("#btnGroupHeader").click();
            }
            else if (mode == "ItmProp") {
                mode = "ItmProp";
                if ($(contextObject).hasClass('line') || $(contextObject).hasClass('table'))
                    showLineProprties($(contextObject));
                else
                    toggleStyleOptions();
            }
            $("#btnSaveField").show();
            if ($('#contextMenu').isVisible())
                $('#contextMenu').hide();
            return false;
        }

        function getstarttop(el) {
            var a = [];
            a = $(".reportsection");
            var starttp = 0;
            var start = "";
            var isSet = false;
            for (var k = 0; k < a.length; k++) {
                if ((Math.abs(a.eq(k).getPosition().scrollTop) <= el.getPosition().scrollTop) && (el.getPosition().scrollTop < (Math.abs(a.eq(k).getPosition().scrollTop) + a.eq(k).outerHeight(true)))) {
                    starttp = el.getPosition().scrollTop - a.eq(k).getPosition().scrollTop - Math.abs(a.eq(k).find('.sectionheadings').outerHeight(true));
                    start = a.eq(k).attr('id');
                    isSet = true;
                }
            }
            if (starttp < 0) {
                var Section = $('#' + start);
                el.css("top", Section.getPosition().scrollTop + Section.find(".sectionheadings").outerHeight(true) + 3);
                start = Section.attr('id');
                starttp = 3;
            }
            else if (!isSet) {
                var firstSection = $('.reportsection').eq(0);
                el.css("top", firstSection.getPosition().scrollTop + firstSection.find(".sectionheadings").outerHeight(true) + 3);
                start = firstSection.attr('id');
                starttp = 3;
            }
            el.data('start', start);
            el.data('starttop', starttp - 3);
            return starttp - 3;
        }
        function getendbottom(el) {
            var a = [];
            a = $(".reportsection");
            var ht = 0;
            var endbt = 0;
            var bottom = "";
            var isSet = false;
            for (var k = 0; k < a.length; k++) {
                if ((Math.abs(a.eq(k).getPosition().scrollTop) < (el.getPosition().scrollTop + el.outerHeight()))
                    && ((el.getPosition().scrollTop + el.outerHeight(true)) <= Math.abs(a.eq(k).getPosition().scrollTop + a.eq(k).outerHeight(true)))) {
                    endbt = (el.getPosition().scrollTop + el.outerHeight(true)) - (Math.abs(a.eq(k).getPosition().scrollTop + Math.abs(a.eq(k).find('.sectionheadings').outerHeight(true)) + 3));
                    bottom = a.eq(k).attr('id');
                    isSet = true;
                    break;
                }
            }
            var lastSection = $('.reportsection').eq($('.reportsection').length - 1);
            var lastBottom = lastSection.getPosition().scrollTop + lastSection.outerHeight(true);

            if (endbt / 1 < 0) {
                var nextSection = $("#" + bottom);
                if ($(nextSection).exists() && $(nextSection).hasClass("reportsection")) {
                    ht = $(nextSection).getPosition().scrollTop + $(nextSection).find('.sectionheadings').outerHeight(true) + 3 - el.getPosition().scrollTop / 1 - parseInt(el.css("border-width"));
                    // endbt = 0 + parseInt(el.css("border-width"));
                    bottom = $(nextSection).attr('id');
                    el.attr('style', el.attr('style') + ';height:' + ht + 'px;');
                    endbt = parseInt(el.css("border-width"));
                }
            }
            else if (endbt / 1 > lastBottom || !isSet) {
                ht = (lastBottom / 1 - el.getPosition().scrollTop / 1 - 2);
                bottom = lastSection.attr('id');
                endbt = lastBottom;
                el.attr('style', el.attr('style') + ';height:' + ht + 'px;');
            }

            el.data('endbottom', endbt);
            el.data('end', bottom);
            return endbt;
        }

        function setLeft(el) {
            if ($(el).position().left / 1 < 0)
                $(el).css("left", 2);
        }

        function setRight(el) {
            var maxRight = getExtremeRight();
            var elRight = $(el).position().left + $(el).outerWidth(true);
            if (elRight > maxRight) {
                if ($(el).hasClass("line-v"))
                    $(el).css("left", (maxRight - parseInt($(el).css("border-width"))));//mainsection border-left-1,border-right=1
                else
                    $(el).width(maxRight - $(el).position().left);
            }
        }

        function showLineProprties(line) {

            var linePos = line.position();

            if (line.hasClass('line-h')) {
                $("#txtLocLeft").val(line.position().left);
                $("#txtLocRight").val(line.position().left + line.width());
                $("#txtLocTop").val(line.position().top);
                $("#txtLocBottom").val(line.position().top + parseInt(line.css("border-width")));
            }
            else if (line.hasClass('line-v')) {
                $("#txtLocLeft").val(line.position().left - 2);
                $("#txtLocRight").val(line.position().left + line.width());
                $("#txtLocTop").val(getstarttop(line));
                $("#txtLocBottom").val(getendbottom(line));
            }
            else if (line.hasClass('table')) {
                $("#txtLocLeft").val(line.position().left - 2);
                $("#txtLocRight").val(line.position().left - 2 + line.outerWidth(true));
                $("#txtLocTop").val(getstarttop(line));
                $("#txtLocBottom").val(getendbottom(line));
            }

            currentEditingField = line;
            currentField = line;
            var f = line;

            $("#ddlLineStyle").val("inherit").trigger("chosen:updated");
            $("#txtLineWidth").val("1");
            $("#txtLineColor").val("#000000").blur();

            var borders = $.defaultVal(f.data("dBorder"), "");

            if ($.defaultVal(borders, "") != "") {
                var lbl = $("<span style='" + borders + "' ></span>");
                if (line.hasClass('line-h')) {
                    $("#txtLineColor").val(lbl.getStyle("border-top-color")).blur();
                    $("#ddlLineStyle").val(lbl.getStyle("border-top-style")).trigger("chosen:updated");
                    $("#txtLineWidth").val(lbl.getStyle("border-top-width").replace("px", ""));
                }
                else if (line.hasClass('line-v')) {
                    $("#txtLineColor").val(lbl.getStyle("border-color")).blur();
                    $("#ddlLineStyle").val(lbl.getStyle("border-left-style")).trigger("chosen:updated");
                    $("#txtLineWidth").val(lbl.getStyle("border-left-width").replace("px", ""));
                }
                else if (line.hasClass('table')) {

                    $("#txtLineColor").val(lbl.getStyle("border-color")).blur();
                    $("#ddlLineStyle").val(lbl.getStyle("border-style")).trigger("chosen:updated");
                    $("#txtLineWidth").val(lbl.getStyle("border-width").replace("px", ""));
                }
            }

            $('#divDefault').hide();
            //$('#divLabelFormat').hide();
            $('#divFont').hide();
            $('#divSctCommon').hide();
            if (!$('#divLineSetting').isVisible())
                $('#divLineSetting').ShowModal();
        }

        ///toggle
        function toggleTree(txt, mode) {
            if (mode == "mainReport") {
                callingDiv = $(txt);
                treeMode = "Single";
                mode == "AddParameter";
                var divTree = $("#divTree");
                var div = $("#divAddPrm");//
                $(txt).after(div.append(divTree.show()));
                div.show();
            }
            else if (mode == "subReport") {
                mode == "AddParameter";
                var button = $(txt);
                var subcnt = $('#divParameter').attr('frmid');
                callingDiv = button;
                var div = $("#divAddSubPrm");
                div.find('iframe').hide();
                DoubleClick = false;
                $("#iframe-" + subcnt).parent().attr("subcnt", subcnt);
                //var src = $("#iframe-" + subcnt).attr('src') + "&Mode=Parameter";
                //$("#iframe-" + subcnt).attr('src', src);
                $(txt).after(div.append($("#iframe-" + subcnt).show()));
                div.show();
            }
            return;
        }
        function toggleSubreport(type) {
            var divReportType = $("#divSubreport");
            divReportType.find(".blank").hide();
            divReportType.find(".existing").hide();
            divReportType.find("." + type).show();
        }
        function toggle(event, link) {
            if (event.stopPropagation) { event.stopPropagation(); } event.cancelBubble = true;
            if ($.defaultVal($(link).html(), "") == "Asc")
                $(link).html("Desc");
            else
                $(link).html("Asc");
        }
        function _makeResizableDraggable(section) {
            $(section).find(".reportObject").each(function () {

                _makeResizableDraggableCols($(this));

            });
        }



        function toggleSection(section) {
            return;
            var sec = $(section);
            sec.parent().find('.sectionStyle').toggle();

        }

        function removeHighlightClass() {

            var h = [];
            h = $(".highlight");
            for (var l = 0; l < h.length; l++) {
                h.eq(l).removeClass("highlight");
            }
            h = $(".multiHighlight");
            for (var l = 0; l < h.length; l++) {
                h.eq(l).removeClass("multiHighlight");
            }


        }
        var firstObject = null;

        function Highlight(ctl, event) {

            if ($(ctl).hasClass("sectionheadings"))
                return;
            var fromSelect = $.defaultVal($(ctl).attr('fromSelect'), '0');
            if (event.shiftKey) {

            }
            else if (event.ctrlKey && fromSelect == '0') {
                $(ctl).toggleClass("highlight");
                if ($.defaultVal(firstObject, "") == "")
                    firstObject = $(ctl);

            }
            else {
                if (!event.ctrlKey) {
                    removeHighlightClass();
                    firstObject = $(ctl);
                    $("#txtGenBGColor").val("").blur();
                    $("#txtGenForeColor").val("").blur();
                    $("#ddlGenFontFamily").val("-1").trigger("chosen:updated");
                    $("#ddlGenFont").val("-1").trigger("chosen:updated");
                }

                $(ctl).addClass("highlight");
            }
            if ($('#contextMenu').isVisible())
                $('#contextMenu').hide();
        }


        $(document).keydown(function (e) {
            if (e.keyCode == 46 && !($(e.srcElement).attr('type') == "text")) {

                if (confirm("Do you want to delete  ? ")) {
                    $(".highlight").each(function () {

                        var crnHgltObj = ($(this).hasClass("sectionheadings") ? $(this).parent() : $(this));

                        var id = $(crnHgltObj).attr('id');
                        var sclass = GetClassForSection($(crnHgltObj).attr('class'));
                        //if (sclass == "reportDetail") {
                        //    alert("You can not delete detail section.");
                        //}
                        //else if (sclass.toLowerCase() == "subreportdetail") {
                        //    alert("You can not delete subreport detail section.");
                        //}
                        //else

                        BeforeResizing_Ht = $(crnHgltObj).prev().outerHeight(true) + $(crnHgltObj).outerHeight(true);
                        BeforeResizing_Top = $(crnHgltObj).prev().getPosition().scrollTop;
                        var prevNode = $(crnHgltObj).prev();

                        MoveRespectiveItems_onResize(prevNode, '1');
                        $(crnHgltObj).remove();

                    })
                }
            }
        });






        //style
        function loadSectionSettings(f, fromExpert) {
            if ($.defaultVal(f.data("Suppress"), "0") == "1")
                $("#chkSuppress").checked(true);
            else
                $("#chkSuppress").checked(false);

            var style = "";
            var border = "";

            if (fromExpert) {
                style = $.defaultVal(f.data("dStyle"), "");
                border = $.defaultVal(f.data("dBorder"), "");
            }
            else {
                style = $.defaultVal(f.attr("SctCss"), "");
                border = $.defaultVal(f.attr("SctCss"), "");
            }
            var defaultFont = $.defaultVal(f.attr("defaultFont"), "");
            if (defaultFont == "1") {
                $("#chkDefault").checked(true);
                HideStyles();
            }
            SetBorderCss(border);
            applySyleSettings(style, defaultFont);
        }
        function loadFooterList() {
            var div = $("#divSummary");
            var footerList = "";
            var i = 1;
            var f = currentEditingField;
            div.find("#footerList").find(".row").remove();
            var drgprm = $.defaultVal(currentEditingField.attr('dragparam'), "");
            $("#divReportSections").find(".reportsection").each(function () {
                if ($(this).attr('id').toLowerCase().indexOf('footer') > 0) {
                    var name = ""; var id = "";
                    if (drgprm.indexOf('-') > 0) {
                        if ($(this).hasClass('.pageFooter') || $(this).hasClass('.reportFooter') || $(this).hasClass('.GroupFooter'))
                            return true;
                        var subreportCntr = $(this).data('cntr');
                        var targetCntr = f.closest(".reportsection").data('cntr');
                        if (subreportCntr == targetCntr) {
                            name = $($(this).find(".sectionheadings").children()[0]).html();
                            id = "chk-" + $(this).attr('id');
                        }
                    }
                    else {
                        if ($(this).hasClass('SubreportFooter'))
                            return true;
                        name = $($(this).find(".sectionheadings").children()[0]).html();
                        id = "chk-" + $(this).attr('id');

                    }
                    if (name != "" && id != "") {
                        a = "<span class='row'><input id='" + id + "' type='checkbox' class='chkFtr' /><label>" + name + "</label></span>";
                        div.find("#footerList").append(a);
                        i = i + 1;
                    }
                }
            });
            //if ($("#footerList").find('row').length == 0)
            //    $("#footerList").hide();
            //else
            $("#footerList").show();
        }
        function HideStyles() {
            if ($("#chkDefault").checked()) {
                $("#divLblBIU").hide();
                //$("#divFont").hide();
                //$("#divBorders").hide();
            }
            else {
                $("#divLblBIU").show();
                //$("#divFont").show();
                //$("#divBorders").show();
            }

        }

        function GetLabelStyle() {
            var style = "";

            if ($("#chkBold").isVisible())
                style += ($("#chkBold").checked() ? "font-weight:bold;" : "");
            if ($("#chkItalic").isVisible())
                style += ($("#chkItalic").checked() ? "font-style:italic;" : "");
            if ($("#chkUnderline").isVisible())
                style += ($("#chkUnderline").checked() ? "text-decoration:underline;" : "");


            if ($("#txtBgColor").isVisible())
                style += ($("#txtBgColor").val() == "" ? "" : "background-color:" + $("#txtBgColor").val() + ";");
            if ($("#txtForeColor").isVisible())
                style += ($("#txtForeColor").val() == "" ? "" : "color:" + $("#txtForeColor").val() + ";");
            if ($("#cboFontSize").parent().isVisible())
                style += "font-size:" + $("#cboFontSize").val() + ";"
            if ($("#cboFontFamily").parent().isVisible())
                style += "font-family:" + $("#cboFontFamily").val() + ";"
            if ($("#ddlH").parent().isVisible())
                style += "text-align:" + $("#ddlH").val() + ";"
            if ($("#txtBGSct").isVisible())
                style += ($("#txtBGSct").val() == "" ? "" : "background-color:" + $("#txtBGSct").val() + ";");
            return style;
        }

        function hideAllStyleDivs() {
            $("#divTree").hide();
            $("#divName").hide();
            $("#divCf").hide();
            $("#groupProps").hide();
            $('#divMimeType').hide();
            $('#divSizing').hide();
            $('#divSctCommon').hide();
            if (mode == "AddGroup") {
                $("#divSectionHeight").hide();
                $("#divDefault").hide();
                $('#divFont').hide();
                $('#divBorders').hide();
            }
            else {
                $("#divSectionHeight").show();
                $("#divDefault").show();
                $('#divFont').show();

                $('#divBorders').show();
            }
            $(".fleft").hide();
            $(".ftop").hide();
        }

        function isApplicableToStyle() {

            var itmCount = [];
            var isReportSection = false;
            itmCount = $(".highlight");
            var single = true;
            if (itmCount.length == 0) {
                alert("Please select item to apply style");
                $("#divSettings").HideModal();
                return false;
            }
            //$(".highlight").each(function () {
            //    if (!$(this).hasClass('reportObject'))
            //        isReportSection = true;
            //});
            return !isReportSection;
        }

        function toggleStyleOptions() {
            hideAllStyleDivs();
            if (mode == "AddGroup") {
                $('#divSettings').append($("#divTree").show());
                $("#div3").hide();
                $("#divSuppress").hide();
            }
            else {

                if ($(dbClickItem).hasClass("table"))
                    $(dbClickItem).addClass("highlight");
                var itmCount = [];
                itmCount = $(".highlight");

                if (isApplicableToStyle()) {
                    resetFieldSettings(itmCount);
                    if (itmCount.length == 1) {
                        $("#divSectionHeight").show();
                        var crnHgltObj = (itmCount.eq(0).hasClass("sectionheadings") ? itmCount.eq(0).parent() : itmCount.eq(0));
                        $("#<%= txtSectionHeight.ClientID%>").val($(crnHgltObj).innerHeight());
                        $("#<%= txtObjWidth.ClientID%>").val($(crnHgltObj).width());
                        if (crnHgltObj.hasClass("reportsection") || crnHgltObj.hasClass("sectionheadings")) {
                            var sctObj = crnHgltObj;
                            if (crnHgltObj.hasClass("reportsection"))
                                sctObj = crnHgltObj.find(".sectionStyle");
                            $("#<%= txtSectionHeight.ClientID%>").val($(sctObj).innerHeight());
                            // $("#divSectionHeight").show();
                        }
                        else {
                            // $("#divSectionHeight").hide();
                        }

                        currentEditingField = $("#" + $(crnHgltObj).ID());
                        currentField = $("#" + $(crnHgltObj).ID());
                        var f = itmCount.eq(0);

                        // for one item
                        var fieldtype = $.defaultVal(itmCount.eq(0).data('fieldtype'), "").toString().toLowerCase();
                        var fldType = $.defaultVal(itmCount.eq(0).data('dragparam'), "").toString().toLowerCase();
                        if (fieldtype == "image" || fldType == "image") {
                            $('#divMimeType').show();
                            $('#divSizing').show();

                        }
                        if (itmCount.eq(0).hasClass("Label") || itmCount.eq(0).hasClass("Field") || fieldtype == "image" || fldType == "image") {
                            if ((itmCount.eq(0).hasClass("Label") || itmCount.eq(0).hasClass("Field")) && $.defaultVal(itmCount.eq(0).data("global"), "") == "")
                                $("#divCf").hide();
                            //-456
                            if (itmCount.eq(0).hasClass("Label") && $.defaultVal(itmCount.eq(0).data("global"), "") == "")
                                $("#divName").show();
                            else if (itmCount.eq(0).hasClass("Field") && $.defaultVal(itmCount.eq(0).data("global"), "") == "") {
                                // $("#divSummary").show();

                            }

                            $("#txtFLeft").val(f.position().left);
                            $("#txtFRight").val(f.position().left + f.width());
                            $("#txtFTop").val(f.position().top);
                            $("#txtFBottom").val(f.position().top + f.height());

                            toggleFooterList();


                            var mimetype = $.defaultVal(f.data("mimetype"), "");
                            if (mimetype != "") {
                                $('#ddlMimeType').val(mimetype).trigger("chosen:updated");
                            }
                            var sizing = $.defaultVal(f.data("sizing"), "");
                            if (sizing != "") {
                                $('#ddlSizing').val(sizing).trigger("chosen:updated");
                            }
                            var lbl = f.closest(".reportObject");
                            var style = $.defaultVal(f.data("dStyle"), "");
                            var defaultFont = $.defaultVal(f.attr("defaultFont"), "");
                            applySyleSettings(style, defaultFont);

                            var borders = $.defaultVal(f.data("dBorder"), "");
                            SetBorderCss(borders);
                            $('#<%= txtDataName.ClientID %>').val($.defaultVal(f.data("title"), ""));
                            if (itmCount.eq(0).closest(".reportsection").attr('class').toLowerCase().indexOf('footer') > 0) {
                                //$('#divSummary').hide();
                                $('#divCf').hide();
                            }
                        }
                        else {
                            //for sections
                            loadSectionStyle();

                        }
                        if (crnHgltObj.hasClass("reportsection") || crnHgltObj.hasClass("sectionheadings")) {
                            $("#divDefault").hide();
                            $("#divFont").hide();
                            $('#divSctCommon').show();
                        }
                    }
                    else {
                        $('#divSctCommon').hide();
                        $("#divSectionHeight").hide();
                        $('#txtFTop').val('');
                        $('#txtFBottom').val('');
                        $('#txtFLeft').val('');
                        $('#txtFRight').val('');
                        $("#div3").hide();
                    }

                    if (!$('#divSettings').isVisible())
                        $('#divSettings').ShowModal();
                }
            }

            hideDimensions();

        }

        function hideDimensions() {
            var crnHgltObj = ($(".highlight").hasClass("sectionheadings") ? $(".highlight").parent() : $(".highlight"));
            if (crnHgltObj.length > 1)
                $("#div3").hide();
            else if (crnHgltObj.length == 0) {

            }
        }


        function applyStyleToField(f) {
            var Pos = f.position();
            var style1 = "";
            if ($("#chkDefault").checked()) {
                f.attr("defaultFont", "1");
                // f.attr("style", "font-size: 12px; font-family: Verdana;width:" + f.width() + "px;top:" + Pos.top + "px;left:" + Pos.left + "px");
            }
            else
                f.attr("defaultFont", "0");
            var ht = $("#<%= txtSectionHeight.ClientID%>").val() / 1;
            var wd = $("#<%= txtObjWidth.ClientID%>").val() / 1;
            var style = GetLabelStyle() + style1;
            var border = GetBordersCss();
            f.data("dStyle", style);
            f.attr("style", style + border + "width:" + wd + "px;height:" + ht + "px;top:" + Pos.top + "px;left:" + Pos.left + "px");
            f.data("dBorder", border);

        }
        function SetFieldProperties(f) {
            var global = $.defaultVal(f.data("global"), "");
            if ($.defaultVal(f.data("Isname"), 0) == 1 && global == "") {
                var name = GetName(f);
                f.data("@FieldName", name);
                f.data("title", name);
                f.data("Name", name);
                f.find('.spnName').html(name);
            }

            applyStyleToField(f);
        }
        function setSuppressProp(f) {
            var chkSuppress = $("#chkSuppress").checked();
            if (chkSuppress) {
                f.addClass("ui-disabled");
                f.data("Suppress", "1");
            }
            else {
                f.removeClass("ui-disabled");
                f.data("Suppress", "0");
            }
        }

        function GetSectionHeight_WithoutBorder(sectionStyle) {
            return $(sectionStyle).height();
            var _bw = $(sectionStyle).css('border-bottom-width').replace('px', '') / 1;
            var _tw = $(sectionStyle).css('border-top-width').replace('px', '') / 1;

            var _bs = $(sectionStyle).css('border-bottom-style');
            var _ts = $(sectionStyle).css('border-top-style');

            if (_bs == "none")
                _bw = 0;
            if (_ts == "none")
                _tw = 0;

            return $(sectionStyle).height() - (_bw + _tw);
        }

        function setSectionStyle(f) {
            var chkDefault = $("#chkDefault").checked();
            var style = "";
            var border = "";

            if (chkDefault) {
                f.attr("defaultFont", "1");
                //style = "background-color: inherit;color: inherit;";
            }

            border = GetBordersCss();
            style = GetLabelStyle();
            var ht_subtract = 0;//GetSctHtDiff_OnApplyingBorder();
            //f.find(".sectionStyle").attr("style", "height:" + f.find(".sectionStyle").height() + "px;" + style+border);
            //  f.find(".fieldBorder").attr("style", border);
            //f.data("dStyle", style);
            //f.data("dBorder", border);

            f.attr("SctCss", style + border);

            BeforeResizing_Ht = f.find(".sectionStyle").outerHeight(true);
            BeforeResizing_Top = f.find(".sectionStyle").getPosition().scrollTop + BeforeResizing_Ht;

            f.find(".sectionStyle").attr("style", style + border);
            f.find(".sectionStyle").height($("#<%= txtSectionHeight.ClientID%>").val() / 1 - ht_subtract / 1);
            f.find(".sectionStyle").width($("#<%= txtObjWidth.ClientID%>").val() / 1);
            MoveRespectiveItems_onResize(f.find(".sectionStyle"));
        }
        function setSortDataArray(f) {
            var sortData = $("#multiSort").multiSelect().getItems();
            var arrSortData = [];
            for (var l = 0; l < sortData.length; l++) {
                var sortItem = $(sortData[l]);
                var name = $.defaultVal(sortItem.find('.item').node(0).html(), "");
                var sort = $.defaultVal(sortItem.find('.item').node(1).html(), "");
                var fid = $.defaultVal(sortItem.find('.item').node(0).data("fid"), "");
                var entitypath = $.defaultVal(sortItem.find('.item').node(0).data("entityPath"), "");
                arrSortData.push({ Name: name, Sort: sort, FID: fid, EntityPath: entitypath });
            }
            ArrSortData[f.attr("id")] = arrSortData;
        }
        function setMapFieldsData(f) {
            var chkMapRelatedFields = $("#chkMapRelatedFields").checked();//$("#chkMapRelatedFields").checked(false);
            if (chkMapRelatedFields)
                f.data("RelatedRecord", "1");
            else
                f.data("RelatedRecord", "0");
        }
        function setLabelPropData(f) {
            var sections = ",rheader,rpheader,rgrpftr,rdetail,rfooter,rsubreport,subreport,subdtl,subftr,subhdr,";
            var type = $.defaultVal(f.data("@Type"), "").toLowerCase();

            if (f.hasClass("reportsection"))
                f.closest(".sectionStyle").height($("#<%= txtSectionHeight.ClientID%>").val() / 1);
            else
                f.height($("#<%= txtSectionHeight.ClientID%>").val() / 1);
            f.width($("#<%= txtObjWidth.ClientID%>").val() / 1);
            if (type == "field" || type == "label") {
                SetFieldProperties(f);

            }
            else {
                type = $.defaultVal(f.data("@Type"), "").toLowerCase();
                if (type == "rsection" || type.toLowerCase() == "rpfooter") {
                    SetSectionProperties(f);
                    setSortDataArray(f);
                    setSectionStyle(f);

                }
                else if (sections.contains(',' + type.toLowerCase() + ',')) {
                    setSectionStyle(f);
                    setMapFieldsData(f);
                }

            }
            setSuppressProp(f);
        }
        function SetBorderCss(style) {
            if (style != "") {
                var lbl = $("<span style='" + style + "'></span>");
                if (style != "") {
                    //border bottom
                    $("#txtBBC").val(lbl.getStyle("border-bottom-color")).blur();
                    $("#ddlBBS").val(lbl.getStyle("border-bottom-style")).trigger("chosen:updated");
                    $("#txtBBW").val(lbl.getStyle("border-bottom-width").replace("px", ""));

                    //border top
                    $("#txtBTC").val(lbl.getStyle("border-top-color")).blur();
                    $("#ddlBTS").val(lbl.getStyle("border-top-style")).trigger("chosen:updated");
                    $("#txtBTW").val(lbl.getStyle("border-top-width").replace("px", ""));


                    //border left
                    $("#txtBLC").val(lbl.getStyle("border-left-color")).blur();
                    $("#ddlBLS").val(lbl.getStyle("border-left-style")).trigger("chosen:updated");
                    $("#txtBLW").val(lbl.getStyle("border-left-width").replace("px", ""));

                    //border right
                    $("#txtBRC").val(lbl.getStyle("border-right-color")).blur();
                    $("#ddlBRS").val(lbl.getStyle("border-right-style")).trigger("chosen:updated");
                    $("#txtBRW").val(lbl.getStyle("border-right-width").replace("px", ""));
                }
            }
        }
        function makeSectionsDisable() {
            $("#divReportSections").find(".reportsection,.line-h,.line-v,.table").each(function () { applyDisableClass($(this)) });
            $(".reportObject").each(function () { applyDisableClass($(this)) });
        }
        function applyDisableClass(cnt) {
            var section = cnt;
            if ($.defaultVal(section.data("Suppress"), "0") == "1")
                section.addClass("ui-disabled");
            else
                section.removeClass("ui-disabled");
        }

        function resetCFSettings() {
            $("#txtCFBgColor").val("").blur();
            $("#txtCFForeColor").val("").blur();
            $("#chkCFBold").checked(false).button("refresh");
            $("#chkCFItalic").checked(false).button("refresh");
            $("#chkCFUnderline").checked(false).button("refresh");
            $("#cboCFFontSize").val("12px").trigger("chosen:updated");
            $("#<%= chkIsVisible.ClientID %>").checked(true);
            ResetCommonBorder();
            ResetPadding();
        }
        function applyCFStyleProps(f, v, border, padding) {
            var lbl = $(f);
            $("#txtCFBgColor").val(lbl.getStyle("background-color")).blur();
            $("#txtCFForeColor").val(lbl.getStyle("color")).blur();
            $("#chkCFBold").checked(lbl.css("font-weight") == "bold").button("refresh");
            $("#chkCFItalic").checked(lbl.css("font-style") == "italic").button("refresh");
            $("#chkCFUnderline").checked(lbl.css("text-decoration") == "underline").button("refresh");
            $("#cboCFFontSize").val($.defaultVal(lbl.css("font-size"), "12px")).trigger("chosen:updated");
            if (v == "1")
                $("#<%= chkIsVisible.ClientID %>").checked(true);
            else
                $("#<%= chkIsVisible.ClientID %>").checked(false);

            $('#txtCommonBorder').data('border', border);
            $('#txtSubPadding').data('padding', padding);
            var t = "position: absolute; background-color: #D5D5D5; width: 64px !important; height: 26px !important;" + border;
            $('#txtCommonBorder').attr('style', t)
            var t1 = "background-color: transparent; width: 64px !important; border: 1px solid #000 !important;" + padding;
            $('#txtSubPadding').attr('style', t1);
        }
        function ShowItemsStyle(lbnBtn) {
            var border = "";
            if (OtherTAB != "") {
                var css = GetLabelStyle();
                border = GetBordersCss();
                OtherTAB.removeClass('tabClick');
                OtherTAB.data('css', css);
                OtherTAB.data("style", border);
            }
            currentTAB = $(lbnBtn);
            currentTAB.addClass('tabClick');
            var style = $.defaultVal(currentTAB.data("css"), "");
            var bcss = $.defaultVal(currentTAB.data('style'), "");
            resetStyleSettings();
            ResetBorderCss();
            applySyleSettings(style);
            SetBorderCss(bcss);
            OtherTAB = currentTAB;
            return false;
        }
        function resetStyleSettings() {
            $("#txtBgColor").val("inherit").blur();
            $("#txtForeColor").val("inherit").blur();
            $("#chkBold").checked(false).button("refresh");
            $("#chkItalic").checked(false).button("refresh");
            $("#chkUnderline").checked(false).button("refresh");
            $("#cboFontSize").val("inherit").trigger("chosen:updated");
            $("#cboFontFamily").val("inherit").trigger("chosen:updated");
            $("#ddlH").val("inherit").trigger("chosen:updated");
            $("#chkDefault").checked(true); //
            HideStyles();
        }
        function applySyleSettings(style, defaultFont) {
            if (defaultFont == "1") {
                $("#chkDefault").checked(true);
                HideStyles();
            }
            var lbl = $("<span style='" + style + "'></span>");
            if (defaultFont != "1") {

                $("#chkBold").checked(lbl.css("font-weight") == "bold").button("refresh");
                $("#chkItalic").checked(lbl.css("font-style") == "italic").button("refresh");
                $("#chkUnderline").checked(lbl.css("text-decoration") == "underline").button("refresh");
            }
            $("#txtBgColor").val($.defaultVal(lbl.getStyle("background-color"), "inherit")).blur();
            $("#txtForeColor").val($.defaultVal(lbl.getStyle("color"), "inherit")).blur();
            $("#cboFontSize").val($.defaultVal(lbl.css("font-size"), "inherit")).trigger("chosen:updated");
            $("#cboFontFamily").val($.defaultVal(lbl.css("font-family"), "inherit")).trigger("chosen:updated");
            $("#ddlH").val($.defaultVal(lbl.css("text-align"), "inherit")).trigger("chosen:updated");
            $("#txtBGSct").val($.defaultVal(lbl.getStyle("background-color"), "transparent")).blur();
        }
        function LoadStyleData(tab) {
            currentab = $(tab);
            var sec = $("." + currentab.attr('tabid'));
            var style = $.defaultVal($(currentab).data("style"), "");;//$.defaultVal($(sec).data("dStyle") + $(sec).data("dBorder"), "");
            resetPageStyle();
            applyPageSyle(style);
            setData('1');
            first = false;
        }
        function resetPageStyle() {
            //colors
            $("#txtStyleBGColor").val("transparent").blur();
            $("#txtStyleBTColor").val("#000000").blur();
            $("#txtStyleBRColor").val("#000000").blur();
            $("#txtStyleBBColor").val("#000000").blur();
            $("#txtStyleBLColor").val("#000000").blur();
            $("#txtStyleFontColor").val("#000000").blur();

            //horizontal align
            $("#ddlStyleHALign").val("Left").trigger("chosen:updated");


            //font
            $("#ddlStyleFont").val("Verdana").trigger("chosen:updated");
            $("#txtStyleFontSize").val("12");
            $("#ddlStyleCase").val("inherit");


            //border
            $("#ddlStyleBT").val("none").trigger("chosen:updated");
            $("#ddlStyleBR").val("none").trigger("chosen:updated");
            $("#ddlStyleBB").val("none").trigger("chosen:updated");
            $("#ddlStyleBL").val("none").trigger("chosen:updated");

            $("#txtStyleBTWidth").val("1");
            $("#txtStyleBRWidth").val("1");
            $("#txtStyleBBWidth").val("1");
            $("#txtStyleBLWidth").val("1");

            //chks
            $("#chkStyleBold").checked(false).button("refresh");
            $("#chkStyleItalic").checked(false).button("refresh");
            $("#chkStyleUnderline").checked(false).button("refresh");
            $("#chkStyleStrike").checked(false).button("refresh");

            //span preview
            $("#spnPreview").attr("style", "");
        }
        function setData(onchange) {
            if (currentab.data("loading") == "1")
                return;
            var css = "";
            var border = "";
            var bc = "";

            css += "text-align:" + $("#ddlStyleHALign").val() + ";";

            bc += "background-color:" + $("#txtStyleBGColor").val() + ";";
            css += "text-transform:" + $("#ddlStyleCase").val() + ";";
            css += "font-family:" + $("#ddlStyleFont").val() + ";";
            css += "font-size:" + $("#txtStyleFontSize").val() + "px;";
            css += "color:" + $("#txtStyleFontColor").val() + ";";
            css += "font-weight:" + ($("#chkStyleBold").checked() ? "bold" : "normal") + ";";
            css += "font-style:" + ($("#chkStyleItalic").checked() ? "italic" : "normal") + ";";
            css += "text-decoration:" + ($("#chkStyleUnderline").checked() ? "underline " : " ") + ($("#chkStyleStrike").checked() ? "line-through" : "") + ";";

            border += "border-top-style:" + $("#ddlStyleBT").val() + ";";
            border += "border-top-width:" + $("#txtStyleBTWidth").val() + "px;";
            border += "border-top-color:" + $("#txtStyleBTColor").val() + ";";

            border += "border-right-style:" + $("#ddlStyleBR").val() + ";";
            border += "border-right-width:" + $("#txtStyleBRWidth").val() + "px;"
            border += "border-right-color:" + $("#txtStyleBRColor").val() + ";";

            border += "border-bottom-style:" + $("#ddlStyleBB").val() + ";";
            border += "border-bottom-width:" + $("#txtStyleBBWidth").val() + "px;";
            border += "border-bottom-color:" + $("#txtStyleBBColor").val() + ";";

            border += "border-left-style:" + $("#ddlStyleBL").val() + ";"
            border += "border-left-width:" + $("#txtStyleBLWidth").val() + "px;"
            border += "border-left-color:" + $("#txtStyleBLColor").val() + ";";
            var section = "";
            var ht = "height:" + GetSectionHeight_WithoutBorder($(currentab).find(".sectionStyle")) + "px;";
            $(currentab).find(".fieldBorder").attr('style', border + css + bc);

            $(currentab).data("dStyle", css + border + bc);

            $("#spnPreview").attr("style", css + border + bc);


        }
        function applyPageSyle(style) {
            if (style != "") {
                var lbl = $("<span style='" + style + "'></span>");

                var css = $.defaultVal(lbl.getStyle("background-color"), "");
                if (!$.isEmpty(css))
                    $("#txtStyleBGColor").val(css).blur();

                css = $.defaultVal(lbl.getStyle("color"), "");
                if (!$.isEmpty(css))
                    $("#txtStyleFontColor").val(css).blur();

                css = $.defaultVal(lbl.getStyle("border-bottom-color"), "");
                if (!$.isEmpty(css))
                    $("#txtStyleBBColor").val(css).blur();

                css = $.defaultVal(lbl.getStyle("border-bottom-style"), "");
                if (!$.isEmpty(css))
                    $("#ddlStyleBB").val(css).trigger("chosen:updated");

                css = $.defaultVal(lbl.getStyle("border-bottom-width"), "");
                if (!$.isEmpty(css))
                    $("#txtStyleBBWidth").val(css.replace("px", ""));



                //border top
                css = $.defaultVal(lbl.getStyle("border-top-color"), "");
                if (!$.isEmpty(css))
                    $("#txtStyleBTColor").val(css).blur();

                css = $.defaultVal(lbl.getStyle("border-top-style"), "");
                if (!$.isEmpty(css))
                    $("#ddlStyleBT").val(css).trigger("chosen:updated");

                css = $.defaultVal(lbl.getStyle("border-top-width"), "");
                if (!$.isEmpty(css))
                    $("#txtStyleBTWidth").val(css.replace("px", ""));



                css = $.defaultVal(lbl.getStyle("border-left-color"), "");
                if (!$.isEmpty(css))
                    $("#txtStyleBLColor").val(css).blur();

                css = $.defaultVal(lbl.getStyle("border-left-style"), "");
                if (!$.isEmpty(css))
                    $("#ddlStyleBL").val(css).trigger("chosen:updated");

                css = $.defaultVal(lbl.getStyle("border-left-width"), "");
                if (!$.isEmpty(css))
                    $("#txtStyleBLWidth").val(css.replace("px", ""));


                css = $.defaultVal(lbl.getStyle("border-right-color"), "");
                if (!$.isEmpty(css))
                    $("#txtStyleBRColor").val(css).blur();

                css = $.defaultVal(lbl.getStyle("border-right-style"), "");
                if (!$.isEmpty(css))
                    $("#ddlStyleBR").val(css).trigger("chosen:updated");

                css = $.defaultVal(lbl.getStyle("border-right-width"), "");
                if (!$.isEmpty(css))
                    $("#txtStyleBRWidth").val(css.replace("px", ""));

                css = $.defaultVal(lbl.getStyle("text-align"), "");
                if (!$.isEmpty(css))
                    $("#ddlStyleHALign").val(css).trigger("chosen:updated");

                css = $.defaultVal(lbl.getStyle("font-family"), "");
                if (!$.isEmpty(css))
                    $("#ddlStyleFont").val(css).trigger("chosen:updated");

                css = $.defaultVal(lbl.getStyle("font-size"), "");
                if (!$.isEmpty(css))
                    $("#txtStyleFontSize").val(css.replace("px", ""));

                css = $.defaultVal(lbl.getStyle("font-weight"), "");
                if (!$.isEmpty(css))
                    $("#chkStyleBold").checked(css == "bold").button("refresh");

                css = $.defaultVal(lbl.getStyle("font-style"), "");
                if (!$.isEmpty(css))
                    $("#chkStyleItalic").checked(css == "italic").button("refresh");

                css = $.defaultVal(lbl.getStyle("text-decoration"), "");
                if (!$.isEmpty(css)) {
                    if (css.contains(" ")) {
                        $("#chkStyleUnderline").checked(css.split(" ")[0] == "underline").button("refresh");
                        $("#chkStyleStrike").checked(css.split(" ")[1] == "line-through").button("refresh");
                    }
                    else {
                        $("#chkStyleUnderline").checked(css == "underline").button("refresh");
                        $("#chkStyleStrike").checked(css == "line-through").button("refresh");
                    }
                }

                $("#spnPreview").attr("style", style);

            }

        }
        function getTabStyles(btn) {
            return $.defaultVal(btn.data("style"), "");
        }



        function loadSectionStyle() {

            var div = $("#divSettings");

            var f = ($(".highlight").length > 1 ? ($(".highlight").hasClass("sectionheadings") ? $(".highlight").parent() : $(".highlight")) : $("#" + $(".highlight").ID()));
            var sectionType = $.defaultVal(f.data("@Type"), "").toLowerCase();
            loadSectionSettings(f);
            if (sectionType == "rsection") {
                var groupName = $.defaultVal(f.data("grpName"), "");
                $("#<%= txtGroupName.ClientID %>").val(groupName);
                if (ArrSortData[f.attr('id')] != undefined)
                    $("#multiSort").multiSelect().refresh(ArrSortData[f.attr('id')]);
                $("#groupProps").show();
                //$("#divSuppress").show();
            }
            if (sectionType == "rsection" || sectionType == "rPHeader"
                || sectionType == "rHeader" || sectionType == "rDetail"
                || sectionType == "rFooter" || sectionType == "rPFooter"
                || sectionType == "rSection" || sectionType == "rGrpFtr"
                || sectionType == "rsubReport") {
                $(div).find("#div3").hide();
            }
            else
                $(div).find("#div3").hide();
            if ($.defaultVal(f.data("RelatedRecord"), "0") == "1")
                $("#chkMapRelatedFields").checked(true);
            else
                $("#chkMapRelatedFields").checked(false);
        }

        function resetFieldSettings(arrItem) {
            $('#<%= txtDataName.ClientID %>').val('');
            $("#chkSuppress").checked(false);
            $("#cboLabelStyle").prop("selectedIndex", 0).trigger("chosen:updated").closest(".row").hide();
            $("#txtBgColor").val("transparent").blur();
            $("#txtForeColor").val("transparent").blur();
            $("#txtBgColor").val("inherit").blur();
            $("#txtForeColor").val("inherit").blur();
            $("#chkBold").checked(false).button("refresh");
            $("#chkItalic").checked(false).button("refresh");
            $("#chkUnderline").checked(false).button("refresh");
            $("#cboFontSize").val("inherit").trigger("chosen:updated");
            $("#cboFontFamily").val("inherit").trigger("chosen:updated");
            $("#ddlH").val("inherit").trigger("chosen:updated");
            $("#chkMapRelatedFields").checked(false);
            $("#<%= ddlTypes.ClientID %>").val("None").trigger("chosen:updated");
            $("#chkDefault").checked(true);
            HideStyles();
            $("#<%= txtSectionHeight.ClientID%>").val();
            $("#<%= txtObjWidth.ClientID%>").val();
            $("#ddlMimeType").prop("selectedIndex", 0).trigger("chosen:updated");
            $("#ddlSizing").prop("selectedIndex", 0).trigger("chosen:updated");
            $("#txtBGSct").val("transparent").blur();

            HideStyles();
            ResetBorderCss(arrItem);

        }

        function GetName(f) {
            if ($('#<%= txtDataName.ClientID %>').val() == "")
                return $.defaultVal(f.data("Name"), "");
            else
                return $('#<%= txtDataName.ClientID %>').val();

        }

        function UpdateFooter(f) {

            var aggregate = $("#<%= ddlTypes.ClientID %>").val();
            var footerList = $("#footerList");

            footerList.find(".row").each(function () {
                var FooterChk = $(this);
                var chck = FooterChk.find(".chkFtr").checked();
                var chkId = FooterChk.find(".chkFtr").attr("id");
                var footerId = chkId.split("-")[1];

                if (chck) {
                    fieldCntr = (fieldCntr / 1 + 1);
                    var th = $(f).clone(true);
                    var tbl = $("#" + footerId).find('.sectionStyle').find('.fieldBorder');
                    tbl.append(th);
                    th.attr('id', 'Field-' + fieldCntr);
                    th.css({ top: $(f).position().top });
                    th.html(aggregate + '(' + f.data("Name") + ')');
                    th.data("Summary", aggregate);
                    $('#Field-' + fieldCntr).attr('dragparam', 'lbl');
                    $('#Field-' + fieldCntr).removeData('uiResizable')
                    $('#Field-' + fieldCntr).removeData('uiDraggable')
                    $('#Field-' + fieldCntr).removeClass('ui-draggable')
                    $('#Field-' + fieldCntr).removeClass('ui-resizable')
                    $('#Field-' + fieldCntr).unbind()
                    _makeResizableDraggableCols(th);

                }

            });


        }
        function toggleFooterList() {

            var aggr = $("#<%= ddlTypes.ClientID %>").val();
            if (aggr == "None")
                $("#footerList").hide();
            else {
                if ($("#footerList").find('row').length == 0)
                    loadFooterList();
            }
            return false;
        }


        function SetSectionProperties(f) {
            var hdnData = $("#<%= hdnData.ClientID %>").val();
            if (hdnData != "") {

                var grpID = hdnData.split('|')[0];
                var grpPath = hdnData.split('|')[1];
                var grpName = hdnData.split('|')[2];
                var k = hdnData.split('|')[3];

                var group = $("#divReportSections").find(".Group[data-cntr=" + k + "]");
                var grpHdr = group.find(".GroupHeader" + k);
                var grpFtr = group.find(".GroupFooter" + k);
                grpHdr.data("grpID", grpID);
                grpHdr.data("grpPath", grpPath);
                grpHdr.data("grpName", grpName);
                grpHdr.data("fieldtype", "-999");
                $(grpHdr.find(".sectionheadings").children()[0]).html("Group Header" + "{" + grpName + "}");
                $(grpFtr.find(".sectionheadings").children()[0]).html("Group Footer" + "{" + grpName + "}");

                $("#GroupHeader" + k).data("@Type", "rSection");
                $("#GroupHeader" + k).data("fieldtype", "-999");

                $("#GroupFooter" + k).data("@Type", "rSection");
                $("#GroupFooter" + k).data("fieldtype", "-999");


                $("#<%= hdnData.ClientID %>").val('');
            }
        }




        //for rending related entities
        function OnClientItemsRequesting(sender, eventArgs) {
            var context = eventArgs.get_context();
            context["@EntityId"] = $.QS("EID");
            context["Type"] = "LoadRelatedEntities";
        }
        function cboExistingSR_ItemsRequesting(sender, eventArgs) {
            var context = eventArgs.get_context();
            context["@EntityId"] = $.QS("EID");
            context["Type"] = "LoadRelatedSR";
        }


        //hide delete
        function CloseStyleDiv() {
            if ($('#divSettings').isVisible())
                $('#divSettings').HideModal();

            if ($('#divFieldsTree').isVisible())
                $('#divFieldsTree').HideModal();

            if ($('#divLblExpr').isVisible())
                $('#divLblExpr').hide();

            if (OtherTAB != "" && OtherTAB.hasClass("tabClick")) {
                OtherTAB.removeClass('tabClick');
                OtherTAB = "";
            }
            if (OtherTAB != "" && currentTAB.hasClass("tabClick")) {
                currentTAB.removeClass('tabClick');
            }
            mode = "";
            editRow = "";
        }
        function removeField(cnt) {
            var f = $(cnt.parent().parent())
            var footerId = f.closest(".GroupFooter").attr("id");
            var fc = f.attr("id").split('-')[1];
            var rep = "chk-" + footerId + "|" + fc + ",";
            $("#ReportDetail").find(".gridTable").find(".gridCell").each(function () {
                if ($.defaultVal($(this).data("Value"), "") == $.defaultVal(f.data("Value"), "")) {
                    var chk = $.defaultVal($(this).data("Chk"), "");
                    var a = chk.replace(rep, "");
                    $(this).data("Chk", a);
                }
            });

            $(cnt).closest(".gridCell").remove();
        }
        function DeleteGroup(cntr) {
            if (confirm("Do you want to delete group ?")) {

                $("#GroupHeader" + cntr).remove();
                $("#GroupFooter" + cntr).remove();
                grpCntr = grpCntr - 1;
            }
        }
        function DeleteSubreport(cntr) {
            if (confirm("Do you want to delete Subreport ?")) {
                $("#Subreport" + cntr).remove();
                subi = subi - 1;
            }
        }
        function closeMultiDiv() {
            $("#divFieldsTree").hide();
            return false;
        }
        function closeParameter() {
            $('#divParameter').HideModal();
            return false;
        }
        function HideTree(btn, mode) {
            // $(btn).next().hide();
        }
        function deleteParameter(btn) {
            if (confirm("Do you want to delete parameter ?")) {
                var tr = $(btn).closest('TR').remove();
                AddEmptyRow();
                return false;
            }
        }
        function deleteCFRow(btn) {
            if (confirm("Do you want to delete rule ?")) {
                var tr = $(btn).closest(".trCF");
                tr.remove();
                return false;
            }
        }
        function CloseRule() {
            var cfData = $("#divCFCntr").find('TR');
            var arrCFData = [];
            arrCondFormat[$(currentField).attr('id')] = [];
            cfData.each(function () {
                var query = $(this).find(".txtQuery").html();
                var txtXml = $(this).find(".txtXml").val();
                var spnStyle = $(this).find(".spnStyle").attr('style');
                var visible = $(this).find(".spnvisible").checked();
                var padding = $(this).find(".padding").val();
                var border = $(this).find(".border").val();
                arrCFData.push({ DispCond: query, Style: spnStyle, filterXml: txtXml, Key: $(currentField).attr('id'), EntityPath: $(currentField).data("EntityPath"), Value: $(currentField).data("Value"), Name: $(currentField).data("Name"), Visible: visible, Border: border, Padding: padding });
            });

            arrCondFormat[$(currentField).attr('id')] = arrCFData;


            $("#divFormating").HideModal();
            if ($('#contextMenu').isVisible())
                $("#contextMenu").hide();
            else
                $("#divSettings").ShowModal();
            return false;
        }
        //clear related entities items
        function removeRelatedEntities(sender) {
            $find("<%= cboRelatedEntities.ClientID %>").get_items().clear();
            return;
        }

        function hidePopUp() {
            $("#divFilter").HideModal();
            return false;
        }


        function saveFieldProperties() {
            if ($('#divLblExpr').isVisible())
                $('#divLblExpr').hide();
            if ($.defaultVal(currentEditingField, "") != "" && (currentEditingField.hasClass('line') || currentEditingField.hasClass('table'))) {
                var top = $("#txtLocTop").val();
                var bottom = $("#txtLocBottom").val();
                var left = $("#txtLocLeft").val();
                var right = $("#txtLocRight").val();
                var lineCss = "";
                var style = "";
                if (currentEditingField.hasClass('line-h')) {
                    lineCss += "border-top-style:" + $("#ddlLineStyle").val() + ";";
                    lineCss += "border-top-width:" + $("#txtLineWidth").val() + "px;"
                    lineCss += "border-top-color:" + $("#txtLineColor").val() + ";";
                }
                else if (currentEditingField.hasClass('line-v')) {
                    lineCss += "border-left-style:" + $("#ddlLineStyle").val() + ";";
                    lineCss += "border-left-width:" + $("#txtLineWidth").val() + "px;"
                    lineCss += "border-color:" + $("#txtLineColor").val() + ";";
                }
                else if (currentEditingField.hasClass('table')) {
                    lineCss += "border-style:" + $("#ddlLineStyle").val() + ";";
                    lineCss += "border-width:" + $("#txtLineWidth").val() + "px;"
                    lineCss += "border-color:" + $("#txtLineColor").val() + ";";
                }
                currentEditingField.data('dBorder', lineCss);
                currentEditingField.attr('style', currentEditingField.attr('style') + lineCss);
                $("#divLineSetting").HideModal();
                editRow = "";
            }
            else {
                var selectedFields = [];
                selectedFields = $(".highlight");
                if (selectedFields.length > 0) {
                    for (var g = 0; g < selectedFields.length; g++) {
                        var f = (selectedFields.eq(g).hasClass("sectionheadings") ? selectedFields.eq(g).parent() : selectedFields.eq(g));
                        if (selectedFields.length == 1)
                            f.data("Isname", 1);
                        else
                            f.data("Isname", 0);

                        if ($("#divMimeType").isVisible())
                            f.data("mimetype", $.defaultVal($('#ddlMimeType').val(), ""));
                        else
                            f.data("mimetype", "");

                        if ($("#divSizing").isVisible())
                            f.data("sizing", $.defaultVal($('#ddlSizing').val(), ""));
                        else
                            f.data("sizing", "");

                        setLabelPropData(f);
                        _makeResizableDraggableCols($("#" + f.ID()));
                        doubleClick($("#" + f.ID()));

                    }
                }
                else {
                    var crnHgltObj = ($(".highlight").hasClass("sectionheadings") ? $(".highlight").parent() : $(".highlight"));
                    setLabelPropData($("#" + $(crnHgltObj).ID()));




                    if ($("#divMimeType").isVisible())
                        $(crnHgltObj).data("mimetype", $.defaultVal($('#ddlMimeType').val(), ""));
                    else
                        $(crnHgltObj).data("mimetype", "");

                    if ($("#divSizing").isVisible())
                        $(crnHgltObj).data("sizing", $.defaultVal($('#ddlSizing').val(), ""));
                    else
                        $(crnHgltObj).data("sizing", "");

                    _makeResizableDraggableCols($("#" + $(crnHgltObj).ID()));
                    doubleClick($("#" + $(crnHgltObj).ID()));
                }
                $("#divSettings").HideModal();
                editRow = "";
            }

        }


        //xml
        function getDefaultStylesXml() {
            return;
            var ds = "<DefaultStyle>";
            var btnGroupHeader = $("#linkGroupHeader");
            var btnItem = $("#linkItem");
            var btnGroupFooter = $("#linkGroupFooter");
            var btnReportHeader = $("#linkReportHeader");
            var btnReportFooter = $("#linkReportFooter");
            var btnPageHeader = $("#linkPageHeader");
            var btnPageFooter = $("#linkPageFooter");

            var btnSubreportHeader = $("#linkSubreportHeader");
            var btnSubreportItem = $("#linkSubreportItem");
            var btnSubreportFooter = $("#linkSubreportFooter");

            ds += "<GroupHeader LabelStyle=\"" + getTabStyles(btnGroupHeader) + "\" />";
            ds += "<Item LabelStyle=\"" + getTabStyles(btnItem) + "\" />";
            ds += "<GroupFooter LabelStyle=\"" + getTabStyles(btnGroupFooter) + "\" />";
            ds += "<ReportHeader LabelStyle=\"" + getTabStyles(btnReportHeader) + "\" />";
            ds += "<ReportFooter LabelStyle=\"" + getTabStyles(btnReportFooter) + "\" />";
            ds += "<PageHeader LabelStyle=\"" + getTabStyles(btnPageHeader) + "\" />";
            ds += "<PageFooter LabelStyle=\"" + getTabStyles(btnPageFooter) + "\" />";

            ds += "<SubreportHeader LabelStyle=\"" + getTabStyles(btnSubreportHeader) + "\" />";
            ds += "<SubreportItem LabelStyle=\"" + getTabStyles(btnSubreportItem) + "\" />";
            ds += "<SubreportFooter LabelStyle=\"" + getTabStyles(btnSubreportFooter) + "\" />";
            ds += "</DefaultStyle>";
            return ds;
        }
        function saveFilterXmlWithQuery(filterXml, query) {
            hidePopUp();
            var style = "";
            var visible = "";
            style += ($("#chkCFBold").checked() ? "font-weight:bold;" : "");
            style += ($("#chkCFItalic").checked() ? "font-style:italic;" : "");
            style += ($("#chkCFUnderline").checked() ? "text-decoration:underline;" : "");
            style += ($("#txtCFBgColor").val() == "" ? "" : "background-color:" + $("#txtCFBgColor").val() + ";");
            style += ($("#txtCFForeColor").val() == "" ? "" : "color:" + $("#txtCFForeColor").val() + ";");
            style += "font-size:" + $.defaultVal($("#cboCFFontSize").val(), "12") + ";"

            visible = ($("#<%= chkIsVisible.ClientID %>").checked() ? "1" : "0");
            var padding = $('#txtSubPadding').data('padding');
            var border = $('#txtCommonBorder').data('border');
            addEmptyCfRow(query, style, filterXml, visible, border, padding);
        }
        function getCfXml() {
            var style = "<Styles>";
            var arrCfData = [];
            var rCf = $('.reportObject,.reportsection');

            rCf.each(function () {
                arrCfData = $.defaultVal(arrCondFormat[$(this).attr('id')], "");
                if ($.defaultVal(arrCfData, "") != "") {
                    style += "<StyleRoot key=\"" + $.defaultVal($(this).attr("id"), "") + "\">";
                    for (var r = 0; r < arrCfData.length; r++) {
                        style += "<Style key=\"" + $.defaultVal($(this).attr("id"), "") + "\" Name=\"" + $.defaultVal($(this).data("Value"), "") + "\"  EntityPath=\"" + $.defaultVal($(this).data("EntityPath"), "") + "\" query=\"" + $.defaultVal(arrCfData[r]["DispCond"], "") + "\">" + $.defaultVal(arrCfData[r]["filterXml"], "") + "<Css Visible=\"" + $.defaultVal(arrCfData[r]["Visible"], "") + "\" LabelStyle=\"" + $.defaultVal(arrCfData[r]["Style"], "") + "\" Border=\"" + $.defaultVal(arrCfData[r]["Border"], "") + "\" Padding=\"" + $.defaultVal(arrCfData[r]["Padding"], "") + "\" /></Style>"
                    }
                    style += "</StyleRoot>";
                }
            });
            style += "</Styles>";
            return style;
        }

        function IsValidXmlObject(reportObject) {
            var left = $(reportObject).getPosition().scrollLeft;
            var right = $(reportObject).getPosition().scrollLeft + $(reportObject).outerWidth(true);
            var top = $(reportObject).getPosition().scrollTop;
            var bottom = $(reportObject).getPosition().scrollTop + $(reportObject).outerHeight(true);
            var maxRight = reportObject.closest(".reportsection").outerWidth(true);
            //var lastsection=$("#divReportSections").find("reportsection").eq($("#divReportSections").find("reportsection").length-1);
            //var maxbottom = $(lastsection).position().top + $(lastsection).outerHeight(true);
            if (bottom / 1 < 0 || right / 1 < 0)//|| bottom > maxbottom
                return false;
            else
                return true;
        }

        function getSectionDatails(tbl, fromsubreport) {
            var cellinfo = "<ColInfo " + (fromsubreport ? "SubReport=\"1\"" : "") + " >";
            tbl.find(".reportObject").each(function () {

                cellinfo += getCellXml($(this));
            })

            tbl.find(".line-h").each(function () {
                cellinfo += getHLineXml($(this));
            })


            cellinfo += "</ColInfo>";
            return cellinfo;
        }
        function getGroupSection() {


            var cellinfo = "";
            var tbl1 = "";
            var GroupFooter = "";
            var grpXml = "";
            var j = 1;
            while (j <= grpCntr) {

                var group = $("#divReportSections").find(".Group[data-cntr=" + j + "]");
                var grpHdr = group.find("#GroupHeader" + j);
                grpXml += "<Group Name=\"" + $.defaultVal(grpHdr.data('grpID'), "") + "\" EntityPath=\"" + $.defaultVal(grpHdr.data('grpPath'), "") + "\" fieldtype=\"" + $.defaultVal(grpHdr.data('fieldtype'), "-999") + "\" >";

                var sortData = [];
                sortData = ArrSortData["GroupHeader" + j];
                grpXml += "<Sort><ColInfo>";
                if (sortData != undefined) {
                    for (var t = 0; t < sortData.length; t++) {
                        grpXml += "<Cols Name=\"" + $.defaultVal(sortData[t]["FID"], "") + "\" EntityPath=\"" + $.defaultVal(sortData[t]["EntityPath"], "") + "\" Sort=\"" + $.defaultVal(sortData[t]["Sort"], "") + "\" fieldtype=\"" + "-999" + "\" />";
                    }
                }
                grpXml += "</ColInfo></Sort>";

                var grpHdrCollection = group.find(".GroupHeader");
                for (var g = 0; g < grpHdrCollection.length; g++) {
                    grpXml += "<GroupHeader ID=\"" + $.defaultVal($(grpHdrCollection[g]).attr("id"), "") + "\" SctCss=\"" + $.defaultVal($(grpHdrCollection[g]).attr("SctCss"), "") + "\" index=\"" + $.defaultVal(arrSectionIndex[$(grpHdrCollection[g]).attr('id')], "") + "\" Height=\"" + $.defaultVal(GetSectionHeight_WithoutBorder($(grpHdrCollection[g]).find('.sectionStyle')), "") + "\" Width=\"" + $.defaultVal($(grpHdrCollection[g]).find('.sectionStyle').width(), "") + "\" Ref=\"" + $.defaultVal($(grpHdrCollection[g]).data("ref"), "0") + "\" Suppress=\"" + $.defaultVal($(grpHdrCollection[g]).data("Suppress"), "0") + "\" LabelStyle=\"" + $.defaultVal($(grpHdrCollection[g]).data("dStyle"), "") + "\" defaultFont=\"" + $.defaultVal($(grpHdrCollection[g]).attr("defaultFont"), "") + "\" LabelBorder=\"" + $.defaultVal($(grpHdrCollection[g]).data("dBorder"), "") + "\" fieldtype=\"" + $.defaultVal($(grpHdrCollection[g]).data("fieldtype"), "-999") + "\" >";
                    grpXml += getSectionDatails($(grpHdrCollection[g]))
                    grpXml += "</GroupHeader>";
                }
                var grpFtr = group.find(".GroupFooter");
                for (var g = 0; g < grpFtr.length; g++) {

                    grpXml += "<GroupFooter ID=\"" + $.defaultVal($(grpFtr[g]).attr("id"), "") + "\" SctCss=\"" + $.defaultVal($(grpFtr[g]).attr("SctCss"), "") + "\" index=\"" + $.defaultVal(arrSectionIndex[$(grpFtr[g]).attr('id')], "") + "\"  Height=\"" + $.defaultVal(GetSectionHeight_WithoutBorder($(grpFtr[g]).find('.sectionStyle')), "") + "\" Width=\"" + $.defaultVal($(grpFtr[g]).find('.sectionStyle').width(), "") + "\" Ref=\"" + $.defaultVal($(grpFtr[g]).data("ref"), "0") + "\" Suppress=\"" + $.defaultVal($(grpFtr[g]).data("Suppress"), "0") + "\" LabelStyle=\"" + $.defaultVal($(grpFtr[g]).data("dStyle"), "") + "\" defaultFont=\"" + $.defaultVal($(grpFtr[g]).attr("defaultFont"), "") + "\" LabelBorder=\"" + $.defaultVal($(grpFtr[g]).data("dBorder"), "") + "\" fieldtype=\"" + $.defaultVal($(grpFtr[g]).data("fieldtype"), "-999") + "\" >";
                    grpXml += getSectionDatails($(grpFtr[g]));
                    grpXml += "</GroupFooter>";
                }
                grpXml += "</Group>";
                j++;
            }


            return grpXml;
        }
        function getCommonAttr(span) {
            return "Width = \"" + $.defaultVal(span.innerWidth(), "100") + "\" Top=\"" + $.defaultVal(span.getPosition().scrollTop, "0") + "\" Left=\"" + $.defaultVal(span.getPosition().scrollLeft, "0") + "\" LabelStyle=\"" + $.defaultVal(span.data('dStyle'), "") + "\" defaultFont=\"" + $.defaultVal(span.attr("defaultFont"), "") + "\" LabelBorder=\"" + $.defaultVal(span.data('dBorder'), "") + "\"   id=\"" + span.attr('id') + "\"  Suppress=\"" + $.defaultVal(span.data("Suppress"), "0") + "\" fieldtype=\"" + $.defaultVal(span.data("fieldtype"), "-999") + "\" mimetype=\"" + $.defaultVal(span.data("mimetype"), "") + "\" sizing=\"" + $.defaultVal(span.data("sizing"), "") + "\" mainnode=\"" + $.defaultVal(span.data("mainnode"), "") + "\" Height = \"" + $.defaultVal(span.height(), "25") + "\"";
        }
        function getFieldXml(span) {
            var cellinfo = "";
            if (IsValidXmlObject(span)) {
                var iscompany = $.defaultVal($(span).data('company'), "0");
                if (iscompany == "1") {
                    cellinfo = "<GlobalCols ";
                    cellinfo += " Name=\"" + $.defaultVal(span.data('Value'), "") + "\"   EntityPath=\"" + $.defaultVal(span.data('EntityPath'), "") + "\"   Summary=\"" + $.defaultVal(span.data("Summary"), "") + "\" " + getCommonAttr(span) + " />";
                }
                else {
                    cellinfo = "<Cols ";
                    cellinfo += " Name=\"" + $.defaultVal(span.data('Value'), "") + "\"   EntityPath=\"" + $.defaultVal(span.data('EntityPath'), "") + "\"   Summary=\"" + $.defaultVal(span.data("Summary"), "") + "\" " + getCommonAttr(span) + " />";
                }
            }
            return cellinfo;
        }
        function getLabelXml(span) {
            var cellinfo = "";
            if (IsValidXmlObject(span)) {
                cellinfo = "<Label ";
                cellinfo += "  Title=\"" + $.encodeXml($.defaultVal(span.find('.spnName').text(), ""), true) + "\" Name=\"" + $.encodeXml($.defaultVal(span.data('Value'), ""), true) + "\" global=\"" + $.defaultVal(span.data('global'), "") + "\" " + getCommonAttr(span) + "  />";
            }
            return cellinfo;
        }
        function getImageXml(span) {
            var cellinfo = "<Image ";
            cellinfo += " Name=\"" + $.defaultVal(span.data('Value'), "") + "\" Summary=\"" + $.defaultVal(span.data("Summary"), "") + "\" " + getCommonAttr(span) + " />";
            return cellinfo;
        }

        function getHLineXml(span) {
            var cellinfo = "";
            if (IsValidXmlObject(span)) {
                cellinfo = "<HLine ";
                cellinfo += getCommonAttr(span) + " linecntr=\"" + $.defaultVal(span.data("linecntr"), "") + "\" />";
            }
            return cellinfo;
        }
        function getVLineXml(span) {
            var cellinfo = "";
            if (IsValidXmlObject(span)) {
                cellinfo = "<VLine ";
                cellinfo += getCommonAttr(span) + "   starttop=\"" + $.defaultVal(span.data('starttop'), "") + "\"  endbottom=\"" + $.defaultVal(span.data('endbottom'), "") + "\"  start=\"" + $.defaultVal(span.data("start"), "") + "\" end=\"" + $.defaultVal(span.data("end"), "") + "\" />";
            }
            return cellinfo;
        }
        function getTableXml(span) {
            var cellinfo = "";
            if (IsValidXmlObject(span)) {
                cellinfo = "<Table ";
                cellinfo += getCommonAttr(span) + "   starttop=\"" + $.defaultVal(span.data('starttop'), "") + "\"  endbottom=\"" + $.defaultVal(span.data('endbottom'), "") + "\"  start=\"" + $.defaultVal(span.data("start"), "") + "\" end=\"" + $.defaultVal(span.data("end"), "") + "\" />";
            }
            return cellinfo;
        }
        function getCellXml(span) {
            var cellInfo = "";
            if (IsValidXmlObject(span)) {
                if (span.hasClass("Field")) {
                    cellInfo = getFieldXml(span);
                }
                else if (span.hasClass("Label")) {
                    cellInfo = getLabelXml(span);
                }
                else if (span.hasClass("Image")) {
                    cellInfo = getImageXml(span);
                }
            }
            return cellInfo;
        }
        function getParameterXml(ct) {
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

        function getSubreportXml() {

            var subreport = "";
            subreport += "";

            $("#DivSubSections").find(".subreport").each(function () {

                var sr = $(this);
                var hasChildNodes = ($(sr).find("#subreportdetailcntr").children(".SubreportDetail").exists());
                if (hasChildNodes) {
                    var counter = $.defaultVal(sr.data('cntr'), "0");
                    var mainsubreport = sr;
                    if ($.defaultVal(sr.data('repType'), "") == "blank") {
                        subreport += "<SubReport Id=\"" + $.defaultVal(sr.data('RelatedId'), "") + "\" Suppress=\"" + $.defaultVal(mainsubreport.data("Suppress"), "0") + "\" LabelStyle=\"" + $.defaultVal(mainsubreport.data("style"), "") + "\" Cntr=\"" + $.defaultVal(sr.data('cntr'), "0") + "\" Type=\"" + $.defaultVal(sr.data('repType'), "") + "\" ReportID=\" \" fieldtype=\"" + $.defaultVal(sr.data('fieldtype'), "") + "\"  >";

                        var parameter = "";

                        parameter = getParameterXml(counter);

                        subreport += parameter;

                        var mainNode = $(this);
                        var subHdr = [];
                        subHdr = $(this).find("#subreportheadercntr").find(".SubreportHeader");
                        for (var s = 0; s < subHdr.length; s++) {
                            subreport += "<ReportHeader SctCss=\"" + $.defaultVal($(subHdr[s]).attr("SctCss"), "") + "\"  ID=\"" + $.defaultVal($(subHdr[s]).attr("id"), "") + "\" index=\"" + $.defaultVal(arrSectionIndex[$(subHdr[s]).attr('id')], "") + "\" Height=\"" + $.defaultVal($(subHdr[s]).find('.sectionStyle').height(), "") + "\" Width=\"" + $.defaultVal($(subHdr[s]).find('.sectionStyle').width(), "") + "\" Ref=\"" + $.defaultVal($(subHdr[s]).data("ref"), "") + "\" fieldtype=\"" + $.defaultVal($(subHdr[s]).data("fieldtype"), "") + "\">";
                            subreport += getSectionDatails($(subHdr[s]), true);
                            subreport += "</ReportHeader>";
                        }
                        var subDtl = [];
                        subDtl = $(this).find("#subreportdetailcntr").find(".SubreportDetail");
                        for (var s = 0; s < subDtl.length; s++) {
                            subreport += "<ReportDetail SctCss=\"" + $.defaultVal($(subDtl[s]).attr("SctCss"), "") + "\" ID=\"" + $.defaultVal($(subDtl[s]).attr("id"), "") + "\" index=\"" + $.defaultVal(arrSectionIndex[$(subDtl[s]).attr('id')], "") + "\" Height=\"" + $.defaultVal($(subDtl[s]).find('.sectionStyle').height(), "") + "\" Width=\"" + $.defaultVal($(subDtl[s]).find('.sectionStyle').width(), "") + "\" Ref=\"" + $.defaultVal($(subDtl[s]).data("ref"), "") + "\" fieldtype=\"" + $.defaultVal($(subDtl[s]).data("fieldtype"), "") + "\">";
                            subreport += getSectionDatails($(subDtl[s]), true);
                            subreport += "</ReportDetail>";
                        }

                        var subftr = [];
                        subftr = $(this).find("#subreportfootercntr").find(".SubreportFooter");
                        for (var s = 0; s < subftr.length; s++) {
                            subreport += "<ReportFooter SctCss=\"" + $.defaultVal($(subftr[s]).attr("SctCss"), "") + "\" ID=\"" + $.defaultVal($(subftr[s]).attr("id"), "") + "\" index=\"" + $.defaultVal(arrSectionIndex[$(subftr[s]).attr('id')], "") + "\" Height=\"" + $.defaultVal($(subftr[s]).find('.sectionStyle').height(), "") + "\" Width=\"" + $.defaultVal($(subftr[s]).find('.sectionStyle').width(), "") + "\" Ref=\"" + $.defaultVal($(subftr[s]).data("ref"), "") + "\" fieldtype=\"" + $.defaultVal($(subftr[s]).data("fieldtype"), "") + "\">";
                            subreport += getSectionDatails($(subftr[s]), true);
                            subreport += "</ReportFooter>";
                        }
                        subreport += $('#hdnSubFilter' + counter).val();
                        subreport += "</SubReport>";
                    }
                    else {
                        subreport += "<SubReport ID=\"" + $.defaultVal($(sr).attr('id'), "") + "\" index=\"" + $.defaultVal(arrSectionIndex[$(sr).attr('id')], "") + "\" Height=\"" + $.defaultVal($(sr).find('.sectionStyle').height(), "") + "\" Width=\"" + $.defaultVal($(sr).find('.sectionStyle').width(), "") + "\" Id=\"" + $.defaultVal(sr.data('RelatedId'), "") + "\" Suppress=\"" + $.defaultVal(mainsubreport.data("Suppress"), "0") + "\" LabelStyle=\"" + $.defaultVal(mainsubreport.data("style"), "") + "\" Cntr=\"" + $.defaultVal(sr.data('cntr'), "0") + "\" Type=\"" + $.defaultVal(sr.data('repType'), "") + "\" ReportID=\"" + $.defaultVal(sr.data('reportId'), "") + "\" fieldtype=\"" + $.defaultVal(sr.data('fieldtype'), "") + "\" >";
                        subreport += getParameterXml($.defaultVal(sr.data('cntr'), "0"));
                        subreport += $('#hdnSubFilter' + counter).val();
                        subreport += "</SubReport>";
                    }
                }
            });


            return subreport;
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
        function getReportXml() {

            $(".reportsection").each(function (i) { arrSectionIndex[$(this).attr("id")] = i; })

            var xml = "<Layout><Grid Id=\"" + $.QS("EID") + "\" AmountIn=\"" + $.defaultVal($("#<%= ddlAmountIn.ClientID %>").val(), "1") + "\" NumberFormat=\"" + $.defaultVal($("#<%= ddlNumFormat.ClientID %>").val(), "0") + "\" DateFormat=\"" + $.defaultVal($("#<%= ddlDateFormat.ClientID %>").val(), "0") + "\" HtmlId=\"dgData\" EnablePaging=\"true\" RecordCount =\"0\" >";
            xml += getPageSettingXml();
            xml += getDefaultStylesXml();

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

            $(".reportsection").each(function () {
                var tagname = "";
                if ($(this).hasClass("GroupHeader"))
                    return true;
                else if ($(this).hasClass("GroupFooter"))
                    return true;
                else if ($(this).hasClass("SubreportHeader"))
                    return true;
                else if ($(this).hasClass("SubreportDetail"))
                    return true;
                else if ($(this).hasClass("SubreportFooter"))
                    return true;
                xml += "<" + ($.defaultVal($(this).data("ref"), "") == "" ? $(this).attr('id') : $.defaultVal($(this).data("ref"), "")) + " Ref=\"" + $.defaultVal($(this).data("ref"), "") + "\" ID=\"" + $.defaultVal($(this).attr("id"), "") + "\" Width=\"" + $.defaultVal($(this).find('.sectionStyle').width(), "") + "\" Height=\"" + $.defaultVal($(this).find('.sectionStyle').height(), "") + "\" Suppress=\"" + $.defaultVal($(this).data("Suppress"), "0") + "\" LabelStyle=\"" + $.defaultVal($(this).data("dStyle"), "") + "\" defaultFont=\"" + $.defaultVal($(this).attr("defaultFont"), "") + "\"  LabelBorder=\"" + $.defaultVal($(this).data("dBorder"), "") + "\" SctCss=\"" + $.defaultVal($(this).attr("SctCss"), "") + "\" fieldtype=\"" + $.defaultVal($(this).data("fieldtype"), "") + "\" index=\"" + $.defaultVal(arrSectionIndex[$(this).attr('id')], "") + "\" >";
                xml += getSectionDatails($(this));
                xml += "</" + ($.defaultVal($(this).data("ref"), "") == "" ? $(this).attr('id') : $.defaultVal($(this).data("ref"), "")) + ">";
            });

            xml += "<VLines>";
            $(".line-v").each(function () {
                xml += getVLineXml($(this));
            })


            xml += "</VLines>";

            xml += "<Tables>";
            $(".table").each(function () {
                xml += getTableXml($(this));
            })
            xml += "</Tables>";

            xml += "<GroupInfo>";
            xml += getGroupSection();
            xml += "</GroupInfo>";
            xml += getSubreportXml();
            xml += getCfXml();

            var sortData = [];

            xml += "<Sort><ColInfo>";

            var sortData = $("#divReportSort").multiSelect().getItems();
            var arrSortData = [];
            for (var l = 0; l < sortData.length; l++) {
                var sortItem = $(sortData[l]);
                var name = $.defaultVal(sortItem.find('.item').node(0).html(), "");
                var sort = $.defaultVal(sortItem.find('.item').node(1).html(), "");
                var fid = $.defaultVal(sortItem.find('.item').node(0).data("fid"), "");
                var entitypath = $.defaultVal(sortItem.find('.item').node(0).data("entitypath"), "");
                arrSortData.push({ Name: name, Sort: sort, FID: fid, EntityPath: entitypath });
            }
            ArrReportSortData["Report"] = arrSortData;
            sortData = ArrReportSortData["Report"];
            if (sortData != undefined) {
                for (var t = 0; t < sortData.length; t++) {
                    xml += "<Cols Name=\"" + $.defaultVal(sortData[t]["FID"], "") + "\" EntityPath=\"" + $.defaultVal(sortData[t]["EntityPath"], "") + "\" Sort=\"" + $.defaultVal(sortData[t]["Sort"], "") + "\" fieldtype=\"" + "-999" + "\" />";
                }
            }
            xml += "</ColInfo></Sort>";

            return xml + "</Grid></Layout>";

        }

        function saveFilterXml(filterXml) {

            if ($.defaultVal(callingFilter, "").indexOf('-') > 0) {
                var j = callingFilter.split('-')[1];
                if ($("#txt-" + j).exists()) {
                    $("#txt-" + j).val(filterXml);
                    $("#txt-" + j).text(filterXml);
                }
                else {
                    $(document.body).append($("<input id='txt-" + j + "' style='display:none' value='" + filterXml + "' text='" + filterXml + "' />"));
                }
            }
            else {
                if ($.defaultVal(callingFilter, "").toLowerCase() == "mainfilter")
                    $("#<%= hdnFilter.ClientID %>").val(filterXml);
                else if ($.defaultVal(callingFilter, "").toLowerCase() == "compulsoryfilter")
                    $("#<%= hdnCompulsoryFilter.ClientID %>").val(filterXml);
        }
        hidePopUp();
    }
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

        data["@ModuleID"] = $.QS("Module");
        data["@EntityID"] = $.QS("EID");
        data["@ReportName"] = $("#<%= txtReportName.ClientID %>").val();

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
        data["@ReportID"] = ($('#divSave').data('Mode') == "SaveAs" ? "" : $.defaultVal(ReportId, ""));
        data["au"] = $.QS("_au");
        $.Notify("Saving...");
        PageMethods.Execute(data, arrRoles, Permission, function (result) { $.Notify(false); PageMethodSuccess(result); }, function (d) { $.Notify({ Message: "Error Occured.", NotifyOnly: true }) });
    }

    function PageMethodSuccess(data) {
        if (data["Type"] == "SaveReport") {

            var hdnReportName = $("#<%= hdnReportName.ClientID %>");
            var hdnDesc = $("#<%= hdnDesc.ClientID %>");
            var ReportName = $("#<%= txtReportName.ClientID %>");
            var Desc = $("#<%= txtDesc.ClientID %>");
            hdnDesc.val(Desc.val());
            hdnReportName.val(ReportName.val());
            $("#<%= lblTitle.ClientID %>").html(data["@ReportName"]);
            ReportId = data["@ReportID"];

            $('#divSave').HideModal();
            RefreshParent();
        }
    }

    function PageMethodError() {
        alert("Error");
    }
    function renderParameter() {
        var rdoBlank = $("#<%= rdoBlank.ClientID %>").checked();
        var rdoExisting = $("#<%= rdoESR.ClientID %>").checked();
        var cboRelated = $find("<%= cboRelatedEntities.ClientID %>").get_value();
        var cboExSr = $find("<%= cboExistingSR.ClientID %>").get_value();

        if (rdoBlank && cboRelated == "") {
            alert("Please select related entity");
            return;
        }
        else if (rdoExisting && cboExSr == "") {
            alert("Please select existing subreport");
            return;
        }
        addSubReportSection();
        $("#btnSubNext").hide();
        $("#btnOK").show();
        $("#subInfoCntr").hide();
        AddParameter(this, 'FromLoad');
        return false;
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
function loadStyleOfTab() {
    return;
    $("#linkItem").data("style", $("#<%= hdnItem.ClientID %>").val());
    $("#linkGroupHeader").data("style", $("#<%= hdnGroupHeader.ClientID %>").val());
    $("#linkGroupFooter").data("style", $("#<%= hdnGroupFooter.ClientID %>").val());


    $("#linkReportHeader").data("style", $("#<%= hdnReportHeader.ClientID %>").val());
    $("#linkReportFooter").data("style", $("#<%= hdnReportFooter.ClientID %>").val());
    $("#linkPageHeader").data("style", $("#<%= hdnPageHeader.ClientID %>").val());
    $("#linkPageFooter").data("style", $("#<%= hdnPageFooter.ClientID %>").val());
    $("#linkSubreportHeader").data("style", $("#<%= hdnSubReportHeader.ClientID %>").val());
    $("#linkSubreportItem").data("style", $("#<%= hdnSubreportDetail.ClientID %>").val());
    $("#linkSubreportFooter").data("style", $("#<%= hdnSubreportFooter.ClientID %>").val());

    currentab = $("#linkPageHeader");
    LoadStyleData(currentab);
}
function pageLoad() {
    OpenRecordFilter();

    ddlPageSizeChanged();
    SetSameWidthForAllSections();

    hideToolbarInViewMode()
}

function ddlPageSizeChanged() {
    var ddl = $("#<%= ddlPageSize.ClientID %>").val();
    if (ddl == "Custom") {
        $(".trCustom").show();
    }
    else
        $(".trCustom").hide();
}
function OnClientDoubleClick(sender, eventArgs) {
    if (eventArgs.get_node().get_nodes().get_count() != "0")
        return;

    if (eventArgs.get_node().get_attributes().getAttribute("IsParent") == "1")
        return;

    if (treeMode == "Double") {
        var dispname = $.defaultVal(eventArgs.get_node().get_text(), "");
        var value = $.defaultVal(eventArgs.get_node().get_value(), "");
        var node = eventArgs.get_node();
        var mainParent = "";
        var currentObject = node.get_parent();
        var s = "";
        var entitypath = "";
        var title = "";

        mainParent = $find("<%= tvRelated.ClientID %>").get_nodes().getItem(0).get_text();
        while (currentObject.get_level() > 0) {
            if (s != "") {
                s = currentObject.get_attributes().getAttribute("FieldName") + ":" + currentObject.get_attributes().getAttribute('ParentTable') + ">" + s;
                title = currentObject.get_text() + "\\" + title;
            }
            else {
                s = currentObject.get_attributes().getAttribute("FieldName") + ":" + currentObject.get_attributes().getAttribute('ParentTable');
                title = currentObject.get_text();
            }
            currentObject = currentObject.get_parent();
        }
        entitypath = s;
        if (title != "")
            title = mainParent + "\\" + title + "\\" + dispname;
        else
            title = mainParent + "\\" + dispname;

        var fieldtype = eventArgs.get_node().get_attributes().getAttribute("fieldtype");
        addElementToReport(value, dispname, entitypath, fieldtype);

    }
    else return;
}








function OnClientNodeClick(sender, eventArgs) {
    if (eventArgs.get_node().get_nodes().get_count() != "0")
        return;
    if (eventArgs.get_node().get_attributes().getAttribute("IsParent") == "1")
        return;

    if (treeMode == "Single") {
        var dispname = eventArgs.get_node().get_text();
        var value = eventArgs.get_node().get_value();
        var node = eventArgs.get_node();
        var mainParent = "";
        var currentObject = node.get_parent();
        var s = "";
        var entitypath = "";
        var title = "";

        mainParent = $.defaultVal($find("<%= tvRelated.ClientID %>").get_nodes().getItem(0).get_text(), "");
        while (currentObject.get_level() > 0) {
            if (s != "") {
                s = currentObject.get_attributes().getAttribute("FieldName") + ":" + currentObject.get_attributes().getAttribute('ParentTable') + ">" + s;
                title = currentObject.get_text() + "\\" + title;
            }
            else {
                s = currentObject.get_attributes().getAttribute("FieldName") + ":" + currentObject.get_attributes().getAttribute('ParentTable');
                title = currentObject.get_text();
            }
            currentObject = currentObject.get_parent();
        }
        entitypath = s;
        if (callingDiv.hasClass("change")) {

            var grpID = value;
            var grpPath = entitypath;
            var grpName = dispname;
            var k = $.defaultVal(currentEditingField.data("cntr"), "");

            $("#<%= hdnData.ClientID %>").val(grpID + '|' + grpPath + '|' + grpName + '|' + k);
            $("#<%= txtGroupName.ClientID %>").val(grpName);
            treeMode = "Single";
            $("#divFieldsTree").hide();
        }
        else if (callingDiv.hasClass("mainfields")) {
            AddToParameter(dispname, value, entitypath);
        }
        else if (callingDiv.hasClass("reportSort")) {
            $("#divReportSort").multiSelect().addItem("<span data-fid='" + value + "' data-entity-path='" + entitypath + "'>" + dispname + "</span><a href='javascript:void(0)' onclick='toggle(event,this)'>Asc</a>")
            $("#divFieldsTree").hide();
        }
        else {
            $("#multiSort").multiSelect().addItem("<span data-fid='" + value + "' data-entity-path='" + entitypath + "'>" + dispname + "</span><a href='javascript:void(0)' onclick='toggle(event,this)'>Asc</a>")
            $("#divFieldsTree").hide();

        }
    }
    else
        return;
}

function addNode1(arrPropsValues) {
    var text = arrPropsValues["text"];
    var value = arrPropsValues["value"];
    var radtree = arrPropsValues["radtree"];
    var parent = arrPropsValues["parent"];
    var Parentnode = arrPropsValues["Parentnode"];
    var Type = arrPropsValues["Type"];
    var SctClass = arrPropsValues["SctClass"];
    var id_todelete = arrPropsValues["id_todelete"];
    var class_todelete = arrPropsValues["class_todelete"];
    var isAll = arrPropsValues["isAll"];
    var isInsert = arrPropsValues["isInsert"];
    var isDelete = arrPropsValues["isDelete"];
    var isUp = arrPropsValues["isUp"];
    var isDown = arrPropsValues["isDown"];
    var showStyle = arrPropsValues["showStyle"];

    radtree.trackChanges();
    var newnode = new Telerik.Web.UI.RadTreeNode();
    newnode.set_text(text);
    newnode.set_value(value);
    newnode.get_attributes().setAttribute("parent", parent);
    newnode.get_attributes().setAttribute("Type", Type);
    newnode.get_attributes().setAttribute("SctClass", SctClass);
    newnode.get_attributes().setAttribute("id_todelete", id_todelete);
    newnode.get_attributes().setAttribute("class_todelete", class_todelete);

    newnode.get_attributes().setAttribute("isAll", isAll);
    newnode.get_attributes().setAttribute("isInsert", isInsert);
    newnode.get_attributes().setAttribute("isDelete", isDelete);
    newnode.get_attributes().setAttribute("isUp", isUp);
    newnode.get_attributes().setAttribute("isDown", isDown);
    newnode.get_attributes().setAttribute("showStyle", showStyle);
    Parentnode.get_nodes().add(newnode);
    radtree.commitChanges();
    return newnode;
}


function addNode(text, value, radtree, parent, Parentnode, Type, ref) {
    radtree.trackChanges();
    var newnode = new Telerik.Web.UI.RadTreeNode();
    newnode.set_text(text);
    newnode.set_value(value);
    newnode.get_attributes().setAttribute("parent", parent);
    newnode.get_attributes().setAttribute("Type", Type);

    if (ref != "") {
        Parentnode = radtree.findNodeByValue(ref);
        newnode.get_attributes().setAttribute("parent", "0");
    }

    Parentnode.get_nodes().add(newnode);
    radtree.commitChanges();
}

function manageSections(hide, newSectionID) {
    $("#spanSectionHdr").text('');
    $("#<%= btnInsert.ClientID %> ").setEnable(false);
    $("#<%= btnDelete.ClientID %> ").setEnable(false);
    $("#<%= btnUp.ClientID %> ").setEnable(false);
    $("#<%= btnDown.ClientID %> ").setEnable(false);
    if (hide == "0") {
        if (!$("#divSectionExpert").isVisible())
            $("#divSectionExpert").ShowModal();
    }
    var arrSections = [];
    var radtree = $find("<%= rtvSections.ClientID %>");
    radtree.get_nodes().clear();
    var newnode;
    var arrPropsValues = {};
    arrPropsValues = { text: "PageHeader", value: "PageHeader", radtree: radtree, parent: "1", Parentnode: radtree, Type: "PageHeader", SctClass: "pageHeader", id_todelete: "", class_todelete: "pageHeader", isAll: "0", isInsert: "1", isDelete: "1", isUp: "0", isDown: "0", showStyle: "0" };
    newnode = addNode1(arrPropsValues);


    arrSections = $(".pageHeader");
    for (var i = 0; i < arrSections.length; i++) {
        var section = $(arrSections[i]);
        var id = section.attr('id');
        arrPropsValues = { text: section.find('span').html(), value: id, radtree: radtree, parent: "0", Parentnode: newnode, Type: "PageHeader", SctClass: "pageHeader", id_todelete: id, class_todelete: "", isAll: "1", isInsert: "0", isDelete: "0", isUp: "0", isDown: "0", showStyle: "1" };
        addNode1(arrPropsValues);
    }

    arrPropsValues = { text: "ReportHeader", value: "ReportHeader", radtree: radtree, parent: "1", Parentnode: radtree, Type: "ReportHeader", SctClass: "reportHeader", id_todelete: "", class_todelete: "reportHeader", isAll: "0", isInsert: "1", isDelete: "1", isUp: "0", isDown: "0", showStyle: "0" };
    newnode = addNode1(arrPropsValues);
    arrSections = $(".reportHeader");
    for (var i = 0; i < arrSections.length; i++) {
        var section = $(arrSections[i]);
        var id = section.attr('id');
        arrPropsValues = { text: section.find('span').html(), value: id, radtree: radtree, parent: "0", Parentnode: newnode, Type: "ReportHeader", SctClass: "reportHeader", id_todelete: id, class_todelete: "", isAll: "1", isInsert: "0", isDelete: "0", isUp: "0", isDown: "0", showStyle: "1" };
        addNode1(arrPropsValues);
    }


    arrPropsValues = { text: "Group Header", value: "GroupHeader", radtree: radtree, parent: "1", Parentnode: radtree, Type: "GroupHeader", SctClass: "GroupHeader", id_todelete: "", class_todelete: "GroupHeader", isAll: "0", isInsert: "0", isDelete: "0", isUp: "0", isDown: "0", showStyle: "0" };
    var grpNode1 = addNode1(arrPropsValues);
    for (var t = 0; t < grpCntr; t++) {
        if ($(".Group[data-cntr=" + (t + 1) + "]").exists()) {
            var grpNode
            arrSections = $(".Group[data-cntr=" + (t + 1) + "]").find(".GroupHeader");

            if (arrSections.length > 0) {
                arrPropsValues = { text: $(arrSections[0]).find(".sectionheadings").children('span').html(), value: $(arrSections[0]).attr('id'), radtree: radtree, parent: "0", Parentnode: grpNode1, Type: "GroupHeader", SctClass: "GroupHeader", id_todelete: (t + 1), class_todelete: "GroupHeader", isAll: "0", isInsert: "1", isDelete: "1", isUp: "0", isDown: "0", showStyle: "1" };
                grpNode = addNode1(arrPropsValues);
            }

            for (var b = 1; b < arrSections.length; b++) {
                var section = $(arrSections[b]);
                var id = section.attr('id');
                var deleteS = "0";
                if (b > 0)
                    deleteS = "1"
                arrPropsValues = { text: section.find(".sectionheadings").children('span').html(), value: id, radtree: radtree, parent: "0", Parentnode: grpNode, Type: "GroupHeader", SctClass: "GroupHeader", id_todelete: id, class_todelete: "", isAll: "0", isInsert: "1", isDelete: deleteS, isUp: "0", isDown: "0", showStyle: "1" };
                addNode1(arrPropsValues);
            }
        }

    }


    arrPropsValues = { text: "ReportDetail", value: "ReportDetail", radtree: radtree, parent: "1", Parentnode: radtree, Type: "ReportDetail", SctClass: "reportDetail", id_todelete: "", class_todelete: "reportDetail", isAll: "0", isInsert: "1", isDelete: "1", isUp: "0", isDown: "0", showStyle: "0" };
    newnode = addNode1(arrPropsValues);
    arrSections = $(".reportDetail");
    for (var i = 0; i < arrSections.length; i++) {
        var section = $(arrSections[i]);
        var id = section.attr('id');
        arrPropsValues = { text: section.find('span').html(), value: id, radtree: radtree, parent: "0", Parentnode: newnode, Type: "ReportDetail", SctClass: "reportDetail", id_todelete: id, class_todelete: "", isAll: "1", isInsert: "0", isDelete: "0", isUp: "0", isDown: "0", showStyle: "1" };
        addNode1(arrPropsValues);
    }

    arrPropsValues = { text: "Group Footer", value: "GroupFooter", radtree: radtree, parent: "1", Parentnode: radtree, Type: "GroupFooter", SctClass: "GroupFooter", id_todelete: "", class_todelete: "GroupFooter", isAll: "0", isInsert: "0", isDelete: "0", isUp: "0", isDown: "0", showStyle: "0" };
    var grpNode1 = addNode1(arrPropsValues);
    for (var t = 0; t < grpCntr; t++) {
        if ($(".Group[data-cntr=" + (t + 1) + "]").exists()) {
            var grpNode;
            arrSections = $(".Group[data-cntr=" + (t + 1) + "]").find(".GroupFooter");


            if (arrSections.length > 0) {
                arrPropsValues = { text: $(arrSections[0]).find(".sectionheadings").children('span').html(), value: $(arrSections[0]).attr('id'), radtree: radtree, parent: "0", Parentnode: grpNode1, Type: "GroupFooter", SctClass: "GroupFooter", id_todelete: (t + 1), class_todelete: "GroupFooter", isAll: "0", isInsert: "0", isDelete: "0", isUp: "0", isDown: "0", showStyle: "1" };
                grpNode = addNode1(arrPropsValues);
            }

            for (var b = 1; b < arrSections.length; b++) {
                var section = $(arrSections[b]);
                var id = section.attr('id');
                arrPropsValues = { text: section.find(".sectionheadings").children('span').html(), value: id, radtree: radtree, parent: "0", Parentnode: grpNode, Type: "GroupFooter", SctClass: "GroupFooter", id_todelete: id, class_todelete: "", isAll: "1", isInsert: "0", isDelete: "0", isUp: "0", isDown: "0", showStyle: "1" };
                addNode1(arrPropsValues);
            }
        }

    }



    var arrSubreport = [];
    arrSubreport = $(".subreport");

    for (var k = 0; k < arrSubreport.length; k++) {
        var section1 = $(arrSubreport[k]);
        var id1 = section1.attr('id');
        var ref = $.defaultVal(section1.data("cntr"), "");


        arrPropsValues = { text: "Subreport " + (k + 1), value: "Subreport" + (k + 1), radtree: radtree, parent: "1", Parentnode: radtree, Type: "subreport", SctClass: "subreport", id_todelete: id1, class_todelete: "", isAll: "0", isInsert: "0", isDelete: "1", isUp: "0", isDown: "0", showStyle: "0" };
        var subrpt1 = addNode1(arrPropsValues);

        arrPropsValues = { text: "Subreport Header", value: "SubreportHeader", radtree: radtree, parent: "1", Parentnode: subrpt1, Type: "SubreportHeader", SctClass: "SubreportHeader", id_todelete: id1, class_todelete: "SubreportHeader", isAll: "0", isInsert: "1", isDelete: "1", isUp: "0", isDown: "0", showStyle: "0" };
        newnode = addNode1(arrPropsValues);

        arrSections = section1.find(".SubreportHeader");
        for (var i = 0; i < arrSections.length; i++) {
            var section = $(arrSections[i]);
            var id = section.attr('id');
            arrPropsValues = { text: section.find(".sectionheadings").children('span').html(), value: id, radtree: radtree, parent: "0", Parentnode: newnode, Type: "SubreportHeader", SctClass: "SubreportHeader", id_todelete: id, class_todelete: "", isAll: "1", isInsert: "0", isDelete: "0", isUp: "0", isDown: "0", showStyle: "1" };
            addNode1(arrPropsValues);
            // addNode1(section.find(".sectionheadings").children('span').html(), id, radtree, "0", newnode, "SubreportHeader", "SubreportHeader", id, "");
        }


        arrPropsValues = { text: "Subreport Detail", value: "SubreportDetail", radtree: radtree, parent: "1", Parentnode: subrpt1, Type: "SubreportDetail", SctClass: "SubreportDetail", id_todelete: id1, class_todelete: "SubreportDetail", isAll: "0", isInsert: "1", isDelete: "1", isUp: "0", isDown: "0", showStyle: "0" };
        newnode = addNode1(arrPropsValues);
        arrSections = section1.find(".SubreportDetail");
        for (var i = 0; i < arrSections.length; i++) {
            var section = $(arrSections[i]);
            var id = section.attr('id');
            arrPropsValues = { text: section.find(".sectionheadings").children('span').html(), value: id, radtree: radtree, parent: "0", Parentnode: newnode, Type: "SubreportDetail", SctClass: "SubreportDetail", id_todelete: id, class_todelete: "", isAll: "1", isInsert: "0", isDelete: "0", isUp: "0", isDown: "0", showStyle: "1" };
            addNode1(arrPropsValues);
            //addNode1(section.find(".sectionheadings").children('span').html(), id, radtree, "0", newnode, "SubreportDetail", "SubreportDetail", id, "");
        }


        arrPropsValues = { text: "Subreport Footer", value: "SubreportFooter", radtree: radtree, parent: "1", Parentnode: subrpt1, Type: "SubreportFooter", SctClass: "SubreportFooter", id_todelete: id1, class_todelete: "SubreportFooter", isAll: "0", isInsert: "1", isDelete: "1", isUp: "0", isDown: "0", showStyle: "0" };
        newnode = addNode1(arrPropsValues);

        arrSections = section1.find(".SubreportFooter");
        for (var i = 0; i < arrSections.length; i++) {
            var section = $(arrSections[i]);
            var id = section.attr('id');
            arrPropsValues = { text: section.find(".sectionheadings").children('span').html(), value: id, radtree: radtree, parent: "0", Parentnode: newnode, Type: "SubreportFooter", SctClass: "SubreportFooter", id_todelete: id, class_todelete: "", isAll: "1", isInsert: "0", isDelete: "0", isUp: "0", isDown: "0", showStyle: "1" };
            addNode1(arrPropsValues);
            //addNode1(section.find(".sectionheadings").children('span').html(), id, radtree, "0", newnode, "SubreportFooter", "SubreportFooter", id, "");
        }


    }




    arrPropsValues = { text: "ReportFooter", value: "ReportFooter", radtree: radtree, parent: "1", Parentnode: radtree, Type: "ReportFooter", SctClass: "reportFooter", id_todelete: "", class_todelete: "reportFooter", isAll: "0", isInsert: "1", isDelete: "1", isUp: "0", isDown: "0", showStyle: "0" };
    newnode = addNode1(arrPropsValues);
    arrSections = $(".reportFooter");
    for (var i = 0; i < arrSections.length; i++) {
        var section = $(arrSections[i]);
        var id = section.attr('id');
        arrPropsValues = { text: section.find('span').html(), value: id, radtree: radtree, parent: "0", Parentnode: newnode, Type: "ReportFooter", SctClass: "reportFooter", id_todelete: id, class_todelete: "", isAll: "1", isInsert: "0", isDelete: "0", isUp: "0", isDown: "0", showStyle: "1" };
        addNode1(arrPropsValues);
        //addNode1(section.find('span').html(), id, radtree, "0", newnode, "ReportFooter", "reportFooter", id, "");

    }

    arrPropsValues = { text: "PageFooter", value: "PageFooter", radtree: radtree, parent: "1", Parentnode: radtree, Type: "PageFooter", SctClass: "PageFooter", id_todelete: "", class_todelete: "PageFooter", isAll: "0", isInsert: "1", isDelete: "1", isUp: "0", isDown: "0", showStyle: "0" };
    newnode = addNode1(arrPropsValues);
    arrSections = $(".pageFooter");
    for (var i = 0; i < arrSections.length; i++) {
        var section = $(arrSections[i]);
        var id = section.attr('id');
        arrPropsValues = { text: section.find('span').html(), value: id, radtree: radtree, parent: "0", Parentnode: newnode, Type: "PageFooter", SctClass: "pageFooter", id_todelete: id, class_todelete: "", isAll: "1", isInsert: "0", isDelete: "0", isUp: "0", isDown: "0", showStyle: "1" };
        addNode1(arrPropsValues);
        //addNode1(section.find('span').html(), id, radtree, "0", newnode, "PageFooter", "pageFooter", id, "");
    }

    //var nCnt = radtree.get_allNodes().length;
    //for (var r = 0; r < nCnt; r++) {
    //    radtree.get_allNodes()[r].expand();
    //}
    radtree.get_nodes().getNode(0).select();

    if (newSectionID != undefined) {
        var paNode = radtree.findNodeByValue(newSectionID).get_parent();
        while (!$(paNode.get_parent().get_element()).hasClass("RadTreeView")) {
            paNode.expand();
            paNode = paNode.get_parent();
        }
        paNode.expand();
        radtree.findNodeByValue(newSectionID).expand();
        radtree.findNodeByValue(newSectionID).select();
    }
    rtvSections_OnClientNodeClicking(radtree)
    $("#divSectionCss").append($(".tblStyle"));
}



function rtvSections_OnClientNodeClicking(sender, e) {


    var node = sender.get_selectedNode();
    if (node == null)
        return;


    var isAll = (node.get_attributes().getAttribute("isAll") == "1" ? true : false);
    var isInsert = (node.get_attributes().getAttribute("isInsert") == "1" ? true : false);
    var isDelete = (node.get_attributes().getAttribute("isDelete") == "1" ? true : false);
    var isUp = (node.get_attributes().getAttribute("isUp") == "1" ? true : false);
    var isDown = (node.get_attributes().getAttribute("isDown") == "1" ? true : false);
    var showStyle = (node.get_attributes().getAttribute("showStyle") == "1" ? true : false);

    if (showStyle)
        $("#divSectionCss").show();
    else
        $("#divSectionCss").hide();


    $("#<%= btnDelete.ClientID %> ").setEnable(isDelete);
    $("#<%= btnInsert.ClientID %> ").setEnable(isInsert);
    $("#<%= btnUp.ClientID %> ").setEnable(isUp);
    $("#<%= btnDown.ClientID %> ").setEnable(isDown);

    if (isAll) {
        var crntIndex = (node.get_index()) / 1;
        var total = (node.get_parent().get_nodes().get_count()) / 1 - 1;
        $("#<%= btnDelete.ClientID %> ").setEnable(true);
        $("#<%= btnInsert.ClientID %> ").setEnable(true);
        if (crntIndex == 0 && total > 0) {
            $("#<%= btnUp.ClientID %> ").setEnable(false);
            $("#<%= btnDown.ClientID %> ").setEnable(true);
        }
        else if (total == crntIndex && total >= 1) {
            $("#<%= btnUp.ClientID %> ").setEnable(true);
            $("#<%= btnDown.ClientID %> ").setEnable(false);
        }
        else if (total >= 2) {
            $("#<%= btnUp.ClientID %> ").setEnable(true);
            $("#<%= btnDown.ClientID %> ").setEnable(true);
        }
    if (node.get_attributes().getAttribute("Type") == "GroupHeader") {
        $("#<%= btnDown.ClientID %> ").setEnable(false);
        $("#<%= btnUp.ClientID %> ").setEnable(false);
    }
}
    currentab = $("#" + node.get_value());

    $("#spanSectionHdr").text("For  :" + node.get_text())
    LoadStyleForSectionExpert(node.get_value());
}

function InsertSection() {
    var node = $find("<%= rtvSections.ClientID %>").get_selectedNode();
    var Type = node.get_attributes().getAttribute("Type");
    var SectionType = Type.toLowerCase();
    var id = node.get_value();
    var sct = $("#" + id);
    var cssClass = $.defaultVal(sct.attr('class'), "") == "" ? node.get_attributes().getAttribute("SctClass") : $.defaultVal(sct.attr('class'), "");
    var dragtype = $.defaultVal(sct.find(".sectionStyle").attr('dragparam'), "");
    var Suppress = $.defaultVal(sct.data('Suppress'), "");
    var dStyle = $.defaultVal(sct.data('dStyle'), "");
    var dBorder = $.defaultVal(sct.data('dBorder'), "");
    var style = $.defaultVal(sct.attr('style'), "");
    var ref; var pNode;
    if (node.get_attributes().getAttribute("parent") == "1") {
        pNode = node;
        ref = node.get_value();
    }
    else {
        pNode = node.get_parent();
        ref = node.get_parent().get_value();
    }

    var name = "";
    if (sct.hasClass("GroupHeader") || sct.hasClass("GroupFooter"))
        name = sct.closest(".Group").node(0).children(".sectionheadings").children("span").html() + "- ";
    else if (sct.hasClass("SubreportHeader") || sct.hasClass("SubreportDetail") || sct.hasClass("SubreportFooter")
        || cssClass.contains("SubreportHeader") || cssClass.contains("SubreportDetail") || cssClass.contains("SubreportFooter"))
        name = ((pNode.get_nodes().get_count() > 0) ? pNode.get_nodes().getNode(0).get_text() : pNode.get_text()) + "- ";
    else
        name = GetSectionName(cssClass);

    if (sct.hasClass("GroupHeader") || sct.hasClass("GroupFooter"))
        id = node.get_value();
    else if (sct.hasClass("SubreportHeader") || sct.hasClass("SubreportDetail") || sct.hasClass("SubreportFooter")
        || cssClass.contains("SubreportHeader") || cssClass.contains("SubreportDetail") || cssClass.contains("SubreportFooter"))
        id = ((pNode.get_nodes().get_count() > 0) ? pNode.get_nodes().getNode(0).get_value() : pNode.get_parent().get_attributes().getAttribute("id_todelete"));
    else
        id = GetXmlTag_Section(cssClass);

    Type = GetSectionType(cssClass);

    var cntr = "";
    if (sct.hasClass("GroupHeader") || sct.hasClass("GroupFooter"))
        cntr = sct.closest(".Group").node().length;
    else
        cntr = (pNode.get_nodes().get_count() / 1) + 1;

    var arrProps = {};
    arrProps = { id: id, cssClass: cssClass, Suppress: Suppress, dStyle: dStyle, dBorder: dBorder, name: name, cntr: cntr, Type: Type, ref: ref, dragtype: dragtype, style: style, pNode: pNode };
    addCommonSectionsThroughExpert(arrProps);
    SetSameWidthForAllSections();
    return false;
}

function GetSectionName(cssClass) {

    var secClass = "";

    if (cssClass == "undefined")
        return secClass;
    if (cssClass.indexOf("subreport") > -1) {
        if (cssClass.indexOf("SubreportHeader") > -1)
            secClass = "Subreport Header ";
        else if (cssClass.indexOf("SubreportDetail") > -1)
            secClass = "Subreport Detail ";
        else if (cssClass.indexOf("SubreportFooter") > -1)
            secClass = "Subreport Footer ";
    }
    else if (cssClass.indexOf("GroupHeader") > -1)
        secClass = "Group Header ";
    else if (cssClass.indexOf("GroupFooter") > -1)
        secClass = "Group Footer ";
    else if (cssClass.indexOf("reportHeader") > -1)
        secClass = "Report Header ";
    else if (cssClass.indexOf("pageHeader") > -1)
        secClass = "Page Header ";
    else if (cssClass.indexOf("reportDetail") > -1)
        secClass = "Report Detail ";
    else if (cssClass.indexOf("pageFooter") > -1)
        secClass = "Page Footer ";
    else if (cssClass.indexOf("reportFooter") > -1)
        secClass = "Report Footer ";
    return secClass;
}
function GetSectionType(cssClass) {

    var secClass = "";

    if (cssClass == "undefined")
        return secClass;
    if (cssClass.indexOf("subreport") > -1) {
        if (cssClass.indexOf("SubreportHeader") > -1)
            secClass = "rsubReport";
        else if (cssClass.indexOf("SubreportDetail") > -1)
            secClass = "rsubReport";
        else if (cssClass.indexOf("SubreportFooter") > -1)
            secClass = "rsubReport";
    }
    else if (cssClass.indexOf("reportHeader") > -1)
        secClass = "rHeader";
    else if (cssClass.indexOf("pageHeader") > -1)
        secClass = "rPHeader";
    else if (cssClass.indexOf("reportDetail") > -1)
        secClass = "rsubReport";
    else if (cssClass.indexOf("pageFooter") > -1)
        secClass = "rPFooter";
    else if (cssClass.indexOf("reportFooter") > -1)
        secClass = "rFooter";
    else if (cssClass.indexOf("GroupHeader") > -1)
        secClass = "rSection";
    else if (cssClass.indexOf("GroupFooter") > -1)
        secClass = "rSection";
    return secClass;
}
function GetXmlTag_Section(cssClass) {
    var secClass = "";
    if (cssClass == "undefined")
        return secClass;
    if (cssClass.indexOf("reportHeader") > -1)
        secClass = "ReportHeader";
    else if (cssClass.indexOf("pageHeader") > -1)
        secClass = "PageHeader";
    else if (cssClass.indexOf("reportDetail") > -1)
        secClass = "ReportDetail";
    else if (cssClass.indexOf("pageFooter") > -1)
        secClass = "PageFooter";
    else if (cssClass.indexOf("reportFooter") > -1)
        secClass = "ReportFooter";
    return secClass;
}




function addCommonSectionsThroughExpert(arrProps) {
    var id = arrProps["id"];
    var cssClass = arrProps["cssClass"];
    var Suppress = arrProps["Suppress"];
    var dStyle = arrProps["dStyle"];
    var dBorder = arrProps["dBorder"];
    var name = arrProps["name"];
    var cntr = arrProps["cntr"];
    var Type = arrProps["Type"];
    var ref = arrProps["ref"];
    var dragtype = arrProps["dragtype"];
    var style = arrProps["style"];
    var pNode = arrProps["pNode"];

    if (cssClass == "subreport")
        cssClass = "reportsection subreport";
    var section = "<div id='" + id + cntr + "' style='" + style + "' class=' reportsection " + GetClassForSection(cssClass) + "' data-ref='" + id + "'  data--suppress='" + Suppress + "' data-d-style='" + dStyle + "' data-d-border='" + dBorder + "' data-fieldtype='-999'>";
    section += "<div class='sectionheadings'>";
    section += "<span>" + name + cntr + "</span>";
    section += "</div>";
    section += "<div class='sectionStyle'  dragparam='" + dragtype + "' >";
    section += "<div class='fieldBorder' style='" + (dStyle) + "'>";
    section += "</div></div></div>";
    var secCss = "";
    var type = arrProps["type"];


    if (cssClass.contains("GroupHeader") || cssClass.contains("GroupFooter")) {
        var t = $("#" + id).closest(".Group").node().length - 1;
        $("#" + id).closest(".Group").node(t).after($(section));
    }
    else if (cssClass.contains("SubreportHeader") || cssClass.contains("SubreportDetail") || cssClass.contains("SubreportFooter")) {
        var f = GetClassForSection(cssClass);
        var sct_parent = $("#" + id).closest(".subreport").find("#" + f.toLowerCase() + "cntr");
        $(sct_parent).append($(section));
    }
    else {
        var f = GetClassForSection(cssClass);
        var fs = $("#" + f.toLowerCase() + "cntr");
        $(fs).append($(section));
    }

    $("#" + id + cntr).data("@Type", type);
    MakeDroppabelSectionStyle();
    var Parentnode = new Telerik.Web.UI.RadTreeNode();
    Parentnode = pNode;
    //addNode1(name + cntr, (id + cntr), $find("<%= rtvSections.ClientID %>"), "0", Parentnode, Type);
    manageSections('0', id);
    onClickHighLight($(".reportsection"));
    //SetAllCoOrdinates();
    $("#" + id + cntr).find(".sectionheadings").on("click", function (event) { toggleSection(this); event.stopPropagation(); });
    BeforeResizing_Ht = 0;
    BeforeResizing_Top = $("#" + id + cntr).prev().getPosition().scrollTop;
    MoveRespectiveItems_onResize($("#" + id + cntr).prev());
}

function DeleteSection() {
    var radtree = $find("<%= rtvSections.ClientID %>");
    var selectedNode = radtree.get_selectedNode();
    if (confirm("Do you want to delete this section")) {
        BeforeResizing_Ht = $("#" + selectedNode.get_value()).prev().outerHeight(true) + $("#" + selectedNode.get_value()).outerHeight(true);
        BeforeResizing_Top = $("#" + selectedNode.get_value()).prev().getPosition().scrollTop;
        var prevNode = $("#" + selectedNode.get_value()).prev();

        //to delete respective sections
        var id_todelete = selectedNode.get_attributes().getAttribute("id_todelete");
        var class_todelete = selectedNode.get_attributes().getAttribute("class_todelete");
        if (id_todelete != "" && class_todelete != "") {
            if (class_todelete == "GroupHeader") {
                $(".Group[data-cntr=" + id_todelete + "]").remove();
            }
            else
                $("#" + id_todelete).find("." + class_todelete).remove();
        }
        else if (id_todelete != "" && class_todelete == "")
            $("#" + id_todelete).remove();
        else if (id_todelete == "" && class_todelete != "") {

            $("." + class_todelete).remove();
        }

        // $("#" + selectedNode.get_value()).remove();
        manageSections('0');
        MoveRespectiveItems_onResize(prevNode);
        radtree.trackChanges();
        //selectedNode.get_parent().get_nodes().remove(selectedNode);
        radtree.commitChanges();
    }
    return false;
}


function MoveUpSection() {
    var radtree = $find("<%= rtvSections.ClientID %>");
    var selectedNode = radtree.get_selectedNode();

    var PrevNodeText = $($($("#" + selectedNode.get_value()).prev()).find('span')[0]).html();
    var currentNodeText = selectedNode.get_text();

    $($("#" + selectedNode.get_value()).find('span')[0]).html(PrevNodeText);
    $($("#" + selectedNode.get_value()).prev().find('span')[0]).html(currentNodeText);

    $("#" + selectedNode.get_value()).prev().before($("#" + selectedNode.get_value()))


    radtree.trackChanges();
    var prevText = selectedNode.get_previousNode().get_text();
    var curntText = selectedNode.get_text();
    selectedNode.set_text(prevText);
    selectedNode.get_previousNode().set_text(curntText);
    selectedNode.get_parent().get_nodes().insert((selectedNode.get_index() - 1) / 1, selectedNode);
    selectedNode.select();
    radtree.commitChanges();

    return false;
}

function MoveDownSection() {
    var radtree = $find("<%= rtvSections.ClientID %>");
    var selectedNode = radtree.get_selectedNode();
    var NextNodeText = $($($("#" + selectedNode.get_value()).next()).find('span')[0]).html();
    var currentNodeText = selectedNode.get_text();

    $($("#" + selectedNode.get_value()).find('span')[0]).html(NextNodeText);
    $($("#" + selectedNode.get_value()).next().find('span')[0]).html(currentNodeText);
    $("#" + selectedNode.get_value()).next().after($("#" + selectedNode.get_value()))


    radtree.trackChanges();
    var nextText = selectedNode.get_nextNode().get_text();
    var curntText = selectedNode.get_text();
    selectedNode.set_text(nextText);
    selectedNode.get_nextNode().set_text(curntText);
    selectedNode.get_parent().get_nodes().insert((selectedNode.get_index() + 1) / 1, selectedNode)
    selectedNode.select();
    radtree.commitChanges();

    return false;
}


function GetClassForSection(cssClass) {
    var secClass = "";
    if (cssClass == undefined)
        return secClass;
    if (cssClass.contains("subreport")) {
        if (cssClass.contains("SubreportHeader"))
            secClass = "SubreportHeader";
        else if (cssClass.contains("SubreportDetail"))
            secClass = "SubreportDetail";
        else if (cssClass.contains("SubreportFooter"))
            secClass = "SubreportFooter";
    }
    else if (cssClass.contains("GroupHeader"))
        secClass = "GroupHeader";
    else if (cssClass.contains("GroupFooter"))
        secClass = "GroupFooter";
    else if (cssClass.contains("reportHeader"))
        secClass = "reportHeader";
    else if (cssClass.contains("pageHeader"))
        secClass = "pageHeader";
    else if (cssClass.contains("reportDetail"))
        secClass = "reportDetail";
    else if (cssClass.contains("pageFooter"))
        secClass = "pageFooter";
    else if (cssClass.contains("reportFooter"))
        secClass = "reportFooter";
    return secClass;

}
function LoadStyleForSectionExpert(id) {
    //var tab = $("#" + id);
    //var style = $.defaultVal($(tab).data("dStyle") + $(tab).data("dBorder"), "");


    var cssClass = currentab.attr('class'); var secClass = "";

    secClass = GetClassForSection(cssClass);
    currentab.attr("tabid", secClass);
    var sec = $("." + currentab.attr('tabid'))[0];
    $("#" + id).data();//dont delete this line
    var style = $.defaultVal($("#" + id).data("dStyle"), "");
    currentab.data("loading", "1");
    resetPageStyle();
    applyPageSyle(style);
    currentab.removeData("loading");
    first = false;
}



function OnClientNodeClicking(sender, args) {
    currentSelectedNode = args.get_node();
    return;
}


function OnClientMouseOver(sender, args) {
    var node = args.get_node();

    if (node.get_attributes().getAttribute("IsParent") != "1") {
        var type = node.get_attributes().getAttribute("dragparam");
        dragParameter = type;
        $(node.get_element()).attr('dragparam', type);
        if ($(node.get_element()).hasClass("ui-draggable"))
            return;

        if (type == "fld")
            $(node.get_element()).addClass("dragNode dragField");
        else if ($.defaultVal(type, "").indexOf("bfield") > 0) {
            $(node.get_element()).addClass("dragNode dragSubField");
            $(node.get_element()).attr('dragparam_id', node.get_attributes().getAttribute("dragparam_id"));
        }
        else
            $(node.get_element()).addClass("dragNode");


        _makeDraggableItem($(node.get_element()), node);
    }
    return;
}


function IsValidDrop(target) {
    var cssClass = $(target).parent().attr('class');
    var isValid = false;
    if (cssClass.contains("subreport")) {
        if (cssClass.contains("SubreportHeader"))
            isValid = false;
        else if (cssClass.contains("SubreportDetail"))
            isValid = false;
        else if (cssClass.contains("SubreportFooter"))
            isValid = false;
    }
    else if (cssClass.contains("GroupHeader"))
        isValid = false;
    else if (cssClass.contains("GroupFooter"))
        isValid = false;
    else if (cssClass.contains("reportHeader"))
        isValid = false;
    else if (cssClass.contains("pageHeader"))
        isValid = false;
    else if (cssClass.contains("reportDetail"))
        isValid = true;
    else if (cssClass.contains("pageFooter"))
        isValid = false;
    else if (cssClass.contains("reportFooter"))
        isValid = false;
    return isValid;
}

function GetItemType(target) {
    var cssClass = $(target).parent().attr('class');
    var itemType = "";
    if (cssClass.contains("subreport")) {
        if (cssClass.contains("SubreportHeader"))
            itemType = "Label";
        else if (cssClass.contains("SubreportDetail"))
            itemType = "Field";
        else if (cssClass.contains("SubreportFooter"))
            itemType = "Label";
    }
    else if (cssClass.contains("GroupHeader"))
        itemType = "Label";
    else if (cssClass.contains("GroupFooter"))
        itemType = "Label";
    else if (cssClass.contains("reportHeader"))
        itemType = "Label";
    else if (cssClass.contains("pageHeader"))
        itemType = "Label";
    else if (cssClass.contains("reportDetail"))
        itemType = "Field";
    else if (cssClass.contains("pageFooter"))
        itemType = "Label";
    else if (cssClass.contains("reportFooter"))
        itemType = "Label";
    return itemType;
}


function GetEP(node, isEp, isTitle, isParent) {
    var dispname = node.get_text();
    var value = node.get_value();

    var mainParent = "";
    var currentObject = node.get_parent();

    var s = "";
    var entitypath = "";
    var title = "";


    while (currentObject.get_level() > 0) {
        if (s != "") {
            s = currentObject.get_attributes().getAttribute("FieldName") + ":" + currentObject.get_attributes().getAttribute('ParentTable') + ">" + s;
            title = currentObject.get_text() + "\\" + title;
        }
        else {
            s = currentObject.get_attributes().getAttribute("FieldName") + ":" + currentObject.get_attributes().getAttribute('ParentTable');
            title = currentObject.get_text();
        }
        currentObject = currentObject.get_parent();

    }
    entitypath = s;
    title = currentObject.get_text() + "\\" + (title == "" ? "" : title + "\\") + node.get_text();
    if (isEp)
        return entitypath;
    else if (isTitle)
        return title;
    else if (isParent)
        return currentObject.get_value();

}

function createLabel(helper) {
    var entitypath = helper.data("@ep");
    var dispname = helper.data("@Text");
    var value = helper.data("@val");
    var top = $("#Field-" + fieldCntr).position().top;
    var left = $("#Field-" + fieldCntr).position().left;
    var thlbl = $("<span class='reportObject Label' data--Type='' data--Suppress='0' data--Entity-Path='" + entitypath + "' data-@-Type='Label' data--Name='" + dispname + "' data--Value='" + value + "' data-title='" + dispname + "' sync='1'  id='Field-" + fieldCntr + "_Label' ><span class='spnName' >" + dispname + "</span></span>");
    $($(".reportHeader")[0]).find(".fieldBorder").append(thlbl.css("top", top + "px").css("left", left + "px"));
    $("#Field-" + fieldCntr + "_Label").data("@Type", "Label");
    $("#Field-" + fieldCntr + "_Label").data("Name", dispname);
    $("#Field-" + fieldCntr + "_Label").data("Value", value);
    $("#Field-" + fieldCntr + "_Label").data("EntityPath", entitypath);

    $("#Field-" + fieldCntr + "_Label").data("Type", "");
    $("#Field-" + fieldCntr + "_Label").data("Suppress", "0");
    $("#Field-" + fieldCntr + "_Label").data("title", dispname);
    $("#Field-" + fieldCntr + "_Label").data("dragparam", "lbl");
    $("#Field-" + fieldCntr + "_Label").attr("dragparam", "lbl");
    _makeResizableDraggableCols(thlbl);

}


var currentlyDragging;


function ShowDragTemplate(mode) {
    if (mode == 'lbl') {
        $("#txtLabelName").val('Label');
        $("#divDragTemplate").ShowModal();
    }
    else if (mode == 'img')
        $("#divImage").ShowModal();
    else if (mode == 'date')
        $("#divDate").ShowModal();
}
function AddPropToItem() {

    if ($('#divLblExpr').isVisible())
        $('#divLblExpr').hide();
    var dispname = $("#txtLabelName").val();

    $(currentlyDragging).data("@Type", "Label");
    $(currentlyDragging).data("Name", dispname);
    $(currentlyDragging).data("Value", dispname);
    $(currentlyDragging).data("EntityPath", "");
    $(currentlyDragging).data("Type", "");
    $(currentlyDragging).data("Suppress", "0");
    $(currentlyDragging).data("title", dispname);
    $(currentlyDragging).data("dragparam", "lbl");
    $(currentlyDragging).attr("title", dispname);

    $(currentlyDragging).find('.spnName').html(dispname);

    $("#divDragTemplate").HideModal();
    return false;
}
function CloseDrag() {
    if ($('#divLblExpr').isVisible())
        $('#divLblExpr').hide();
    $(currentlyDragging).remove();
    $('#divDragTemplate').HideModal(); return false;
}
function SetDragClass(span) {
    if ($(span).hasClass('vlineCntr'))
        _makeDraggableVLine($(span));
    else if ($(span).hasClass('tableCntr'))
        _makeDraggableTable($(span));
    else if ($(span).hasClass('hlineCntr'))
        _makeDraggableHLine($(span));
    else
        _makeDraggableItem($(span));
}

function removeImageHelper() {
    $(currentlyDragging).remove();
    $('#divImage').HideModal(); return false;
}
function AddImageText() {
    var text = $("#<%= ddlImageResources.ClientID %>").selectedItem().text();
    var value = $("#<%= ddlImageResources.ClientID %>").selectedItem().val();
    $(currentlyDragging).data("Name", text);
    $(currentlyDragging).data("Value", value);
    $(currentlyDragging).find('.spnName').html(text);
    $(currentlyDragging).attr("title", text);
    var imgStyle = $(currentlyDragging).attr('style') + "background-repeat: no-repeat;background-image:url('../getresource.ashx?fld=ResourceData&id=" + value + "&eid=tbl_core_resources');";
    $(currentlyDragging).attr('style', imgStyle);
    $("#divImage").HideModal();
    return false;
}
function AddDate() {
    var text = ""; var value = "";
    if ($find("<%= ddlDragDate1.ClientID %>").get_selectedItem() == null) {
        text = $("#<%= ddlDragDate1.ClientID %>").find('input').val().trim();
        value = text;
    }
    else {
        text = $find("<%= ddlDragDate1.ClientID %>").get_selectedItem().get_text();
        value = $find("<%= ddlDragDate1.ClientID %>").get_selectedItem().get_value();
    }

    $(currentlyDragging).data("Name", text);
    $(currentlyDragging).data("Value", value);

    $(currentlyDragging).find(".spnName").data("Name", text);
    $(currentlyDragging).find(".spnName").data("Value", value);

    $("#divDate").HideModal();
    return false;
}

function GetBordersCss() {
    var css = "";
    var ht = 0;
    if ($("#ddlBTS").next().isVisible()) {
        css += "border-top-style:" + $("#ddlBTS").val() + ";";

    }

    if ($("#txtBTW").isVisible()) {
        css += "border-top-width:" + ($("#txtBTW").val().toLowerCase() == "inherit" ? "inherit;" : ($("#txtBTW").val() + "px;"));
        if ($("#ddlBTS").val().toLowerCase() != "none")
            ht = ht + ($("#txtBTW").val().toLowerCase() == "inherit" ? 0 : ($("#txtBTW").val() / 1));
    }

    if ($("#txtBTC").isVisible())
        css += "border-top-color:" + $("#txtBTC").val() + ";";

    if ($("#ddlBRS").next().isVisible())
        css += "border-right-style:" + $("#ddlBRS").val() + ";";

    if ($("#txtBRW").isVisible())
        css += "border-right-width:" + ($("#txtBRW").val().toLowerCase() == "inherit" ? "inherit;" : ($("#txtBRW").val() + "px;"));

    if ($("#txtBRC").isVisible())
        css += "border-right-color:" + $("#txtBRC").val() + ";";

    if ($("#ddlBBS").next().isVisible())
        css += "border-bottom-style:" + $("#ddlBBS").val() + ";";

    if ($("#txtBBW").isVisible()) {
        css += "border-bottom-width:" + ($("#txtBBW").val().toLowerCase() == "inherit" ? "inherit;" : ($("#txtBBW").val() + "px;"));
        if ($("#ddlBBS").val().toLowerCase() != "none")
            ht = ht + ($("#txtBBW").val().toLowerCase() == "inherit" ? 0 : ($("#txtBBW").val() / 1));
    }

    if ($("#txtBBC").isVisible())
        css += "border-bottom-color:" + $("#txtBBC").val() + ";";

    if ($("#ddlBLS").next().isVisible())
        css += "border-left-style:" + $("#ddlBLS").val() + ";"

    if ($("#txtBLW").isVisible())
        css += "border-left-width:" + ($("#txtBLW").val().toLowerCase() == "inherit" ? "inherit;" : ($("#txtBLW").val() + "px;"));

    if ($("#txtBLC").isVisible())
        css += "border-left-color:" + $("#txtBLC").val() + ";";

    return css;
}
function GetSctHtDiff_OnApplyingBorder() {
    var ht = 0;
    if ($("#txtBTW").isVisible()) {
        if ($("#ddlBTS").val().toLowerCase() != "none")
            ht = ht + ($("#txtBTW").val().toLowerCase() == "inherit" ? 0 : ($("#txtBTW").val() / 1));
    }

    if ($("#txtBBW").isVisible()) {
        if ($("#ddlBBS").val().toLowerCase() != "none")
            ht = ht + ($("#txtBBW").val().toLowerCase() == "inherit" ? 0 : ($("#txtBBW").val() / 1));
    }

    return ht;
}
function ResetBorderCss(arrItem) {
    var value = "";
    var color = "inherit";
    var width = "1";
    if (arrItem.length == 1) {
        var crnHgltObj = (arrItem.eq(0).hasClass("sectionheadings") ? arrItem.eq(0).parent() : arrItem.eq(0));
        if ($(crnHgltObj).hasClass("reportsection")) {
            value = "none";
            $("#ddlBTS").find("option[value=inherit]").hide();
            $("#ddlBRS").find("option[value=inherit]").hide();
            $("#ddlBBS").find("option[value=inherit]").hide();
            $("#ddlBLS").find("option[value=inherit]").hide();
            color = "transparent";
        }
        else {
            $("#ddlBTS").find("option[value=inherit]").show();
            $("#ddlBRS").find("option[value=inherit]").show();
            $("#ddlBBS").find("option[value=inherit]").show();
            $("#ddlBLS").find("option[value=inherit]").show();
            value = "inherit";
        }
    }

    $("#txtBTC").val(value).blur();
    $("#txtBRC").val(value).blur();
    $("#txtBBC").val(value).blur();
    $("#txtBLC").val(value).blur();

    $("#txtBTC").val("transparent").blur();
    $("#txtBRC").val("transparent").blur();
    $("#txtBBC").val("transparent").blur();
    $("#txtBLC").val("transparent").blur();


    $("#txtBTC").val(color).blur();
    $("#txtBRC").val(color).blur();
    $("#txtBBC").val(color).blur();
    $("#txtBLC").val(color).blur();


    $("#ddlBTS").val(value).trigger("chosen:updated");
    $("#ddlBRS").val(value).trigger("chosen:updated");
    $("#ddlBBS").val(value).trigger("chosen:updated");
    $("#ddlBLS").val(value).trigger("chosen:updated");

    $("#txtBTW").val(width);
    $("#txtBRW").val(width);
    $("#txtBBW").val(width);
    $("#txtBLW").val(width);

}


function SetFTopCoordinates() {
    var arrEl = []; var reflectChanges = false;
    arrEl = $(".highlight");
    setValueToZero($('#txtFTop'));
    reflectChanges = (arrEl.length == 1 ? true : false);
    for (var h = 0; h < arrEl.length; h++) {
        var el = (arrEl.eq(h).hasClass("sectionheadings") ? arrEl.eq(h).parent() : arrEl.eq(h));
        var txtFTop = $("#txtFTop");
        el.css({ top: txtFTop.val() / 1 });

        if (reflectChanges)
            $("#txtFBottom").val(el.position().top + el.height());

    }
}


function SetFBottomCoordinates() {
    var arrEl = []; var reflectChanges = false;
    arrEl = $(".highlight");
    setValueToZero($('#txtFBottom'));
    reflectChanges = (arrEl.length == 1 ? true : false);
    for (var h = 0; h < arrEl.length; h++) {
        var f = (arrEl.eq(h).hasClass("sectionheadings") ? arrEl.eq(h).parent() : arrEl.eq(h));
        var bottom = $('#txtFBottom').val();
        var calcTop = f.position().top + (bottom - (f.position().top / 1 + f.height() / 1)) / 1;
        if (reflectChanges) {
            $('#txtFTop').val(calcTop);
            f.css("top", calcTop);
        }
    }
}


function SetFLeftCoordinates() {
    var arrEl = []; var reflectChanges = false;
    arrEl = $(".highlight");
    setValueToZero($('#txtFLeft'));
    reflectChanges = (arrEl.length == 1 ? true : false);
    for (var h = 0; h < arrEl.length; h++) {
        var el = (arrEl.eq(h).hasClass("sectionheadings") ? arrEl.eq(h).parent() : arrEl.eq(h));
        var txtFLeft = $("#txtFLeft");
        el.css({ left: txtFLeft.val() / 1 });

        if (reflectChanges)
            $("#txtFRight").val(el.position().left + el.width());

    }
}


function SetFRightCoordinates() {
    var arrEl = []; var reflectChanges = false;
    arrEl = $(".highlight");
    setValueToZero($('#txtFRight'));
    reflectChanges = (arrEl.length == 1 ? true : false);
    for (var h = 0; h < arrEl.length; h++) {
        var f = (arrEl.eq(h).hasClass("sectionheadings") ? arrEl.eq(h).parent() : arrEl.eq(h));
        var txtFRight = $("#txtFRight");
        var style = "";
        var right = txtFRight.val();
        var calcRight = f.position().left + (right - (f.position().left / 1 + f.width() / 1)) / 1;
        f.css({ left: calcRight / 1 });
        if (reflectChanges)
            $('#txtFLeft').val(f.position().left);
    }
}


function SetLineTop() {
    var el = $(dbClickItem);
    setValueToZero($('#txtLocTop'));
    var top = $("#txtLocTop").val();
    if (el.hasClass('line-h')) {
        el.css({ top: top / 1 });

        var linePos = el.position();
        $('#txtLocBottom').val(top / 1 + $("#txtLineWidth").val() / 1);

    }
    else if (el.hasClass('line-v') || el.hasClass('table')) {
        var start = el.data('start');
        el.css({ top: (top / 1 + $('#' + start).getPosition().scrollTop / 1 + 3 + $('#' + start).find('.sectionheadings').outerHeight(true)) });
        el.data('starttop', getstarttop(el));
        $('#txtLocBottom').val(getendbottom(el));
    }

}

function SetLineBottom() {
    var el = $(dbClickItem);
    setValueToZero($('#txtLocBottom'));
    var bottom = $('#txtLocBottom').val();
    if (el.hasClass('line-h')) {
        var t = bottom / 1 - $("#txtLineWidth").val() / 1;
        el.css({ top: t });
        $('#txtLocTop').val(t / 1);
    }
    else if (el.hasClass('line-v') || el.hasClass('table')) {
        var end = el.data('end');
        var ht = bottom / 1 - getendbottom(el);
        el.attr('style', el.attr('style') + ";height:" + ($(el).height() / 1 + ht / 1) + "px;");
        el.data('endbottom', getendbottom(el));
        $('#txtLocTop').val(getstarttop(el));
    }

}

function SetLineLeft() {
    var el = $(dbClickItem);
    setValueToZero($('#txtLocLeft'));
    if (el.hasClass('line-h')) {
        el.css({ left: $('#txtLocLeft').val() / 1 });
        var linePos = el.position();
        $('#txtLocRight').val(linePos.left + el.width());
    }
    else if (el.hasClass('line-v') || el.hasClass('table')) {
        el.css({ left: $('#txtLocLeft').val() / 1 + 2 });
        var linePos = el.position();
        $('#txtLocRight').val(linePos.left + el.outerWidth(true) - 3);
    }
}

function SetLineRight() {
    var el = $(dbClickItem);
    setValueToZero($('#txtLocRight'));
    if (el.hasClass('line-h')) {
        var right = $('#txtLocRight').val();
        right = right - (el.position().left + el.width());
        el.attr('style', el.attr('style') + "width:" + (el.outerWidth(true) / 1 + right / 1) + "px;");
        $('#txtLocLeft').val(el.position().left);
    }
    else if (el.hasClass('line-v')) {
        var right = $('#txtLocRight').val();
        right = right - (el.position().left + el.width());
        el.css({ left: (el.position().left / 1 + right / 1) });
        $('#txtLocLeft').val(el.position().left + 2);
    }
    else if (el.hasClass('table')) {
        var right = $('#txtLocRight').val();
        var borderWidth = parseInt(el.css("border-width")) * 2;
        right = right - (el.position().left + borderWidth);
        el.width(right + 2);
        //$('#txtLocLeft').val(el.position().left + 2);
    }

}

function setValueToZero(ctl) {
    if ($(ctl).val() / 1 < 0) {
        $(ctl).val(0);
    }
}

function setSnapForObject(th) {
    var off = false;
    if ($.defaultVal($("#divSnap").attr("snapoff"), "") == "1") {
        $(th).draggable("option", "snap", off);
    }
}
function setSnap() {
    var off = true;
    if ($.defaultVal($("#divSnap").attr("snapoff"), "") == "1") {
        $("#divSnap").attr("snapoff", "0");
        $("#divSnap").addClass("red");
        off = true;
    }
    else {
        $("#divSnap").attr("snapoff", "1");
        off = false;
        $("#divSnap").removeClass("red");
    }
    $(".reportObject").draggable("option", "snap", off);
}
function setNoIndication() {
    var off = "";
    if ($.defaultVal($("#divDni").attr("indoff"), "") == "1") {
        $("#divDni").attr("indoff", "0");
        $("#divDni").addClass("red");
        off = "0";
    }
    else {
        $("#divDni").attr("indoff", "1");
        off = "1";
        $("#divDni").removeClass("red");
    }

    $("#locator").attr('indoff', off);
}
function SetTextAlignment(mode) {
    var style = "";
    if (mode == "L")
        style += "text-align:left;"
    else if (mode == "M")
        style += "text-align:center;"
    else if (mode == "R")
        style += "text-align:right;"
    $('.highlight').each(function () {
        if (!$(this).hasClass("reportsection") && !$(this).hasClass("sectionStyle") && !$(this).hasClass("table") && !$(this).hasClass("line-v") && !$(this).hasClass("line-h")) {
            $(this).attr('style', $(this).attr('style') + style);
            $(this).data('dStyle', $(this).data('dStyle') + style);
        }
    });
};
function SetTopAlignment() {
    var top = $(firstObject).position().top;
    $('.highlight').each(function () {
        if (!$(this).hasClass("reportsection") && !$(this).hasClass("sectionStyle") && !$(this).hasClass("table") && !$(this).hasClass("line-v") && !$(this).hasClass("line-h"))
            $(this).css("top", top);
    });
};

function SetBottomAlignment() {
    var bottom = $(firstObject).position().top / 1 + $(firstObject).outerHeight(true) / 1;
    $('.highlight').each(function () {
        if (!$(this).hasClass("reportsection") && !$(this).hasClass("sectionStyle") && !$(this).hasClass("table") && !$(this).hasClass("line-v") && !$(this).hasClass("line-h"))
            $(this).css("top", (bottom / 1 - $(this).outerHeight(true) / 1));
    });
};
function SetLeftAlignment() {
    var left = $(firstObject).position().left;
    $('.highlight').each(function () {
        if (!$(this).hasClass("reportsection") && !$(this).hasClass("sectionStyle") && !$(this).hasClass("table") && !$(this).hasClass("line-v") && !$(this).hasClass("line-h"))
            $(this).css("left", left);
    });
}
function SetRightAlignment() {
    var right = $(firstObject).position().left + $(firstObject).outerWidth(true);
    $('.highlight').each(function () {
        if (!$(this).hasClass("reportsection") && !$(this).hasClass("sectionStyle") && !$(this).hasClass("table") && !$(this).hasClass("line-v") && !$(this).hasClass("line-h")) {
            var rightDiff = right - ($(this).position().left + $(this).outerWidth(true));
            $(this).css("left", $(this).position().left + rightDiff / 1);
        }
    });
}
function SetFontWeight(mode) {
    var style = "";
    if (mode == "B")
        style += "font-weight:bold;"
    else if (mode == "I")
        style += "font-style:italic;"
    else if (mode == "U")
        style += "text-decoration:underline;"
    $('.highlight').each(function () {
        if (!$(this).hasClass("reportsection") && !$(this).hasClass("sectionStyle") && !$(this).hasClass("table") && !$(this).hasClass("line-v") && !$(this).hasClass("line-h")) {
            $(this).attr('style', $(this).attr('style') + style);
            $(this).data('dStyle', $(this).data('dStyle') + style);
        }
    });

};


function SetDimensions(mode) {
    var width = $(firstObject).width();
    var height = $(firstObject).height();
    $('.highlight').each(function () {
        if (!$(this).hasClass("reportsection") && !$(this).hasClass("sectionStyle") && !$(this).hasClass("table") && !$(this).hasClass("line-v") && !$(this).hasClass("line-h")) {
            if (mode == 'W' || mode == "B")
                $(this).width(width);
            if (mode == 'H' || mode == "B")
                $(this).height(height);
        }
    });
};

function setForeColors() {
    var style = "";
    style += "color:" + $("#txtGenForeColor").val() + ";";
    $('.highlight').each(function () {
        if (!$(this).hasClass("reportsection") && !$(this).hasClass("sectionStyle") && !$(this).hasClass("table") && !$(this).hasClass("line-v") && !$(this).hasClass("line-h")) {
            $(this).attr('style', $(this).attr('style') + style);
            $(this).data("dStyle", $(this).attr('style') + style);
        }
    });
}
function setBGColors() {
    var style = "";
    style += "background-color:" + $("#txtGenBGColor").val() + ";";
    $('.highlight').each(function () {
        if (!$(this).hasClass("reportsection") && !$(this).hasClass("sectionStyle") && !$(this).hasClass("table") && !$(this).hasClass("line-v") && !$(this).hasClass("line-h")) {
            $(this).attr('style', $(this).attr('style') + style);
            $(this).data("dStyle", $(this).attr('style') + style);
        }
    });
}
function setFonts() {
    var style = "";
    style += "font-size:" + $("#ddlGenFont").val() + ";";
    $('.highlight').each(function () {
        if (!$(this).hasClass("reportsection") && !$(this).hasClass("sectionStyle") && !$(this).hasClass("table") && !$(this).hasClass("line-v") && !$(this).hasClass("line-h")) {
            $(this).attr('style', $(this).attr('style') + style);
            $(this).data("dStyle", $(this).attr('style') + style);
        }
    });
}
function setFontFamilies() {
    var style = "";
    style += "font-family:" + $("#ddlGenFontFamily").val() + ";";
    $('.highlight').each(function () {
        if (!$(this).hasClass("reportsection") && !$(this).hasClass("sectionStyle") && !$(this).hasClass("table") && !$(this).hasClass("line-v") && !$(this).hasClass("line-h")) {
            $(this).attr('style', $(this).attr('style') + style);
            $(this).data("dStyle", $(this).attr('style') + style);
        }
    });
}
function Suppress(mode) {
    var f = $(contextObject);
    if (mode == "hide") {
        f.addClass("ui-disabled");
        f.data("Suppress", "1");
    }
    else if (mode == "show") {
        f.removeClass("ui-disabled");
        f.data("Suppress", "0");
    }
    if ($('#contextMenu').isVisible())
        $('#contextMenu').hide();
}
function Delete() {
    var f = $(contextObject);
    if (confirm('Do you want to delete?'))
        f.remove();
    if ($('#contextMenu').isVisible())
        $('#contextMenu').hide();
}
function showSummary() {
    toggleFooterList();
    $("#divSummary").ShowModal();
    if ($('#contextMenu').isVisible())
        $('#contextMenu').hide();
}
function saveSummary() {
    UpdateFooter(currentField);
    $("#divSummary").HideModal();
    if ($('#contextMenu').isVisible())
        $('#contextMenu').hide();
}

function SetAllCoOrdinates(obj) {
    if (obj) {
        setLeft(obj);
        setRight(obj);
        if (!$(obj).hasClass("line-h")) {
            getstarttop(obj);
            getendbottom(obj);
        }
    }
    else {
        $(".table,.line-v,.line-h").each(function () {
            var el = $(this);
            setLeft(el);
            setRight(el);
            if (!$(el).hasClass("line-h")) {
                getstarttop(el);
                getendbottom(el);
            }
        });
    }

}

function SetSameWidthForAllSections(width) {
    var rwidth = width ? width : $('.reportsection').eq(0).width();
    $('.reportsection').each(function () { $(this).width(rwidth); });
}
function hideToolbarInViewMode() {
    if ($.QS("PageType").toLowerCase() == "v") {
        $("#generalSettings").find(".save").hide();
        $("#generalSettings").find(".saveas").hide();
        $("#divSave").find("#<%=btnSaveProp.ClientID%>").hide();
        $("#<%= btnAddGroup.ClientID %>").hide();
        $("#<%= btnSubReport.ClientID %>").hide();
        $("#<%= btnInsert.ClientID %>").hide();
        $("#<%= btnDelete.ClientID %>").hide();
        $("#<%= btnUp.ClientID %>").hide();
        $("#<%= btnDown.ClientID %>").hide();
        $("#divGeneralProps").hide();
    }
}


function CloseFilterScreen() {
    $("#FilterProps").HideModal();
    return false;
}

function ValidateXml() {
    var iframe = $("#<%= ifrmReportFilter.ClientID %>")[0];
    var filter = "", compulFilter = "";

    if (iframe && iframe.contentWindow && typeof iframe.contentWindow.createXml == "function")
        filter = iframe.contentWindow.createXml(null, "");
    var error = false;
    if (filter === false) {
        error = true;
    }
    else {
        $("#<%= hdnFilter.ClientID %>").val(filter);
        error = false;
        iframe = $("#<%= ifrmCompulsoryFilter.ClientID %>")[0];
        if (iframe.contentWindow && typeof iframe.contentWindow.createXml == "function")
            compulFilter = iframe.contentWindow.createXml(null, "");

        if (compulFilter === false) {
            error = true;
        }
        else {
            $("#<%= hdnCompulsoryFilter.ClientID %>").val(compulFilter);
            error = false;
        }

    }
    if (!error)
        $("#FilterProps").HideModal();
    return false;
}

function HighlightErrorFrame(iframe) {
    $find("<%= RadTabStrip1.ClientID %>").findTabByValue($(iframe).attr("tabid")).select();
}


function AddSubreportFilter(btnFilter) {
    var url = "../Meta/Filters_Add.aspx?PageMode=Setting&SID=" + SubFilter + "&Hidebutton=1&ShowFilterBtn=1&ReturnXml=1";
    var data = new Object();
    data["PageType"] = $.QS("PageType");
    data["EID"] = $(btnFilter).attr('fid');
    data["SID"] = SubFilter;
    data["xml"] = $(btnFilter).next().val();


    PageMethods.SetSubreportFilterSession(data, function () {
        $('#<%= iframe_SubFilter.ClientID %>').attr('hdnID', $(btnFilter).next().ID());
        $('#<%= iframe_SubFilter.ClientID %>').attr('src', url);
        $("#divSubFilter").ShowModal();
    });
    return false;
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
    $("#" + iframe.attr("hdnID")).val(filter);
    $("#divSubFilter").HideModal();
    return false;
}

var lbl_expr;
function ShowLblExpression(aExpr) {
    if ($.defaultVal($('#<%= ifrmLblExpr.ClientID %>').attr('src'), '') == "") {
        var radtree = $find("<%=  rtvFieldItems.ClientID %>");

        var txt = radtree.findNodeByValue($.QS("EID")).get_text();

        var url = "../meta/fieldbrowser.aspx?EID=" + $.QS("EID") + "&ETxt=" + txt + "&mode=report";

        $('#<%= ifrmLblExpr.ClientID %>').attr('src', url);
    }
    lbl_expr = $(aExpr);
    $("#divLblExpr").show().position({
        of: lbl_expr,
        my: "left top",
        at: "left bottom",
        collision: "none none"
    });
}


function SetLabelFromNode(nodevalue) {
    var _t = lbl_expr.val() + nodevalue;
    if (_t.indexOf("=") < 0)
        _t = "=" + _t;
    lbl_expr.val(_t);
    $("#divLblExpr").hide();
}


function OpenExprEditor(aExpr) {
    var url = "../meta/ExprEditor.aspx?s=1&m=report&p=1&eid=" + $.QS("EID") + "&mode=report";
    window.open(url);
    return false;
}
    </script>


</asp:Content>

