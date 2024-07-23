<%@ Page Language="C#" AutoEventWireup="true" Title="View Designer" MasterPageFile="~/Meta/Default.Master" CodeBehind="Layout_Grid.aspx.cs" Inherits="SensysErp.Meta.Layout_Grid" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">

        //window.title="title"
        var VariablesList=[];
        var SSVariablesList=[];
        var dbCols = [];
        var dbBtn_Reorder=[];
        var dbParameters = [];
        var strData = [];
        var arrSortData = [];
        var arrGroupData =[];
        var arrMergeData=[];
        var ColumnSettings={};
        var cntr1 = 0;
        var i18No = "";
        var Logic = "";
        var dispname = "";
        var entitypath = "";
        var fieldCheck = "";
        var srnoCheck = "";
        var paramCheck = "";
        var RefID;
        var IsDependent=false;
        //$(function () {
        //    $(document).tooltip({
        //        content: function () {
        //            return $(this).prop('title');
        //        },
        //        position: {
        //            my: "left bottom",
        //            at: "left top",
        //            using: function (position, feedback) {
        //                $(this).css(position);
        //            }
        //        }
        //    });
        //});

        

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
            color: red;
        }

        .spnHdr
        {
            font-family: nunitobold;
            color: #140080;
            text-decoration: underline;
            padding: 12px;
        }

        .setting
        {
            font-family: nunitobold;
            color: #007B16;
            text-decoration: underline;
            margin-left: 9px;
        }


            .setting:hover
            {
                color: red;
            }

        #divArrangeButtons
        {
            border: 1px solid #808080;
            width: 70%;
            height: 88px;
            padding: 5px;
            overflow: auto;
            background: rgb(255,255,255); /* Old browsers */
            background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(243,243,243,1) 50%, rgba(237,237,237,1) 51%, rgba(255,255,255,1) 100%); /* FF3.6+ */
            background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,1)), color-stop(50%,rgba(243,243,243,1)), color-stop(51%,rgba(237,237,237,1)), color-stop(100%,rgba(255,255,255,1))); /* Chrome,Safari4+ */
            background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(243,243,243,1) 50%,rgba(237,237,237,1) 51%,rgba(255,255,255,1) 100%); /* Chrome10+,Safari5.1+ */
            background: -o-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(243,243,243,1) 50%,rgba(237,237,237,1) 51%,rgba(255,255,255,1) 100%); /* Opera 11.10+ */
            background: -ms-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(243,243,243,1) 50%,rgba(237,237,237,1) 51%,rgba(255,255,255,1) 100%); /* IE10+ */
            background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(243,243,243,1) 50%,rgba(237,237,237,1) 51%,rgba(255,255,255,1) 100%); /* W3C */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */
            border-radius: 5px;
        }

        .ui-state-default
        {
            border: 1px solid #3E3B3B;
            background: #707070;
            font-weight: normal;
            color: #FFF;
            border-radius: 5px;
            padding: 4px;
        }

        .ui-state-highlight
        {
            border: 1px dotted red !important;
            height: 1.5em;
            line-height: 1.2em;
        }

        #btn_sortable
        {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }

            #btn_sortable li
            {
                margin: 3px 3px 3px 0;
                float: left;
                min-width: 100px;
                height: 16px;
                overflow-x: hidden;
                overflow-y: hidden;
            }
    </style>
    <script>
        $(function() {
            $( "#btn_sortable" ).sortable({
                placeholder: "ui-state-highlight"
            });
            $( "#btn_sortable" ).disableSelection();
        });
    </script>
    <script>
        Editors = {};
        var sid;
        $(function() {
            $( "#divAccord" ).tabs({  heightStyle: "content"});
        });
        layoutLockData={locked:-1,lockOwner:0};
    </script>
    <style>
        #tblHdr, #tblItem
        {
            /*margin-left:13%;*/
        }

        #divAccord > div > table > tr > td,
        #divAccord > div > table > tbody > tr > td
        {
            padding: 5px 2px;
        }
    </style>
    <%# HelperLib.Web.WebResources.GetResource("~/Css/bluegloss/jquery-ui-1.10.3.custom.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/layout_grid.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/knockout-2.2.1.js")%>


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
        .page1
        {
            font-size: 12px;
        }

        .firsttree
        {
            position: relative;
        }

        .lnkQuery
        {
            color: #2900C0;
            font-size: 14px;
            font-family: nunitobold;
            bottom: 2px;
            position: absolute;
            left: 8px;
        }

        .query
        {
            color: #030076;
            font-size: 14px;
            font-family: nunitobold;
            display: inline-block;
            width: 216px;
            border: solid 1px #EBE7E7;
            height: 22px;
            text-indent: 5px;
            background-color: #FFF;
        }

            .query:hover, .lnkQuery:hover
            {
                color: red;
            }

        .parentTitle
        {
            display: inline-block;
            position: absolute;
            top: 2px;
            margin-top: 1px;
            float: right;
            right: 18px;
            font-size: 18px;
            text-shadow: 2px 2px 2px #E56320;
            color: #F9F9F9;
            line-height: 24px;
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
            height: 100%;
        }

        #divGroupTemplate .CodeMirror
        {
            height: 250px;
        }

        #divGroupTemplate #divDataKeys
        {
            left: 480px !important;
            top: 6px !important;
            box-shadow: none !important;
            border: solid 1px #c4c4c4 !important;
            height: 325px !important;
        }

        #divDataKeys .RadTreeView
        {
            height: 100% !important;
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

        .cm-s-default .cm-tag
        {
            color: #aa2736;
        }

        .cm-s-default .cm-attribute
        {
            color: #f00;
        }

        .cm-s-default .cm-string
        {
            color: #003dff;
        }

        .DisableRow
        {
            background-color: #ECECEC !important;
            color: #808080;
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



        body
        {
            font-family: nunitoregular;
        }

        .BtnText
        {
            border: solid 1px #EBE7E7;
            font-weight: normal;
            background-color: #FFF;
            resize: none;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            width: 175px;
            font-family: nunitoregular;
            outline: 0;
            font-size: 13px;
            padding: 2px 5px;
        }

            .BtnText.setting
            {
                width: 225px;
            }

        .spnpopup .BtnText
        {
            height: 22px;
        }

        .spnpopup .close
        {
            margin-top: -6px;
        }

        #common, #divDataKeys
        {
            position: absolute;
            display: none;
            width: 224px;
            height: 295px;
            background-color: #FFF;
            border: solid 2px #4D4C4C;
            border-radius: 5px;
            z-index: 10;
            box-shadow: 2px 2px 5px #555;
            overflow-y: auto;
        }


        .divrow
        {
            min-width: 295px;
            display: block;
            padding: 5px 0;
            border-bottom: solid 1px #E7E7E7;
        }

        .lbl
        {
            color: #656060;
            display: inline-block;
            font-size: 13px;
            vertical-align: middle;
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
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <asp:Panel ID="pnlFieldsCtr" Visible="false" runat="server" Style="padding-top: 15px; padding-left: 15px; padding-right: 15px; padding-bottom: 30px; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; -ms-box-sizing: border-box; box-sizing: border-box;">
        <div style="position: absolute; bottom: 6px; right: 15px; left: 0; text-align: right"><a class="ActionButton GreenButton" onclick="saveColinfoXml()" href="javascript:void(0)">Submit</a>&nbsp;<a onclick="parent.hidePopUp()" class="ActionButton RedButton" href="javascript:void(0)">Cancel</a></div>
    </asp:Panel>
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">

        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
            <div class="titleBar">
                <asp:Label runat="server" ToolTip="Click to rename" ID="lblTitle" onclick="$(this).hide().next().show().css({'min-width':$(this).outerWidth()+75,width:'250px'}).focus().val($(this).html())" class="title"></asp:Label>
                <input type="text" style="display: none" onblur="$(this).hide().prev().show().html($(this).val());$('#ContentPlaceHolder1_hdnReportName').val($(this).val())" class="title" />
                <div class="parentPage">
                    <asp:Label runat="server" ToolTip="Dependent OF" ID="lblParent" class="parentTitle"></asp:Label>
                </div>
                <a id="btnLock" href="javascript:void(0)" title="Toggle Lock" onclick="toggleLock(this)"></a>
            </div>

            <div id="divColumnSetting" class="formSettings" style="display: none; width: 450px; height: 370px; font-size: 12px; font-family: verdana;">
                <div id="divAccord">
                    <ul>
                        <li><a href="#divHeaderstyle">Header Style</a></li>
                        <li><a href="#divItemstyle">Item Style</a></li>
                        <li><a href="#divFormatting">Templates</a></li>
                        <li><a href="#divOther">Other</a></li>
                    </ul>
                    <div style="height: 275px" id="divHeaderstyle">
                        <table id="tblHdr">
                            <tr>
                                <td style="width: 130px;">
                                    <span class="">Horizontal Alignment</span>
                                </td>
                                <td>
                                    <telerik:RadComboBox ID="rcbHdrHrAlign" CssClass="rcbHHA" runat="server">
                                        <Items>
                                            <telerik:RadComboBoxItem Text="Default" Value="default" />
                                            <telerik:RadComboBoxItem Text="Left" Value="left" />
                                            <telerik:RadComboBoxItem Text="Right" Value="right" />
                                            <telerik:RadComboBoxItem Text="Center" Value="center" />
                                        </Items>
                                    </telerik:RadComboBox>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span class="">Vertical Alignment</span>
                                </td>
                                <td>
                                    <telerik:RadComboBox ID="rcbHdrVrAlign" CssClass="rcbHVA" runat="server">
                                        <Items>
                                            <telerik:RadComboBoxItem Text="NotSet" Value="notset" />
                                            <telerik:RadComboBoxItem Text="Top" Value="top" />
                                            <telerik:RadComboBoxItem Text="Middle" Value="middle" />
                                            <telerik:RadComboBoxItem Text="Bottom" Value="bottom" />
                                        </Items>
                                    </telerik:RadComboBox>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span class="">Css Class</span>
                                </td>
                                <td>
                                    <telerik:RadTextBox ID="txtHdrColCss" CssClass="HCSS" runat="server"></telerik:RadTextBox>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span class="">Height(in pixels)</span>
                                </td>
                                <td>
                                    <telerik:RadTextBox ID="txtHdrColHeight" CssClass="HH" runat="server"></telerik:RadTextBox>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div style="height: 275px" id="divItemstyle">
                        <table id="tblItem">
                            <tr>
                                <td style="width: 130px;">
                                    <span class="">Horizontal Alignment</span>
                                </td>
                                <td>
                                    <telerik:RadComboBox ID="rcbItmHrAlign" CssClass="IHA" runat="server">
                                        <Items>
                                            <telerik:RadComboBoxItem Text="Default" Value="default" />
                                            <telerik:RadComboBoxItem Text="Left" Value="left" />
                                            <telerik:RadComboBoxItem Text="Right" Value="right" />
                                            <telerik:RadComboBoxItem Text="Center" Value="center" />
                                        </Items>
                                    </telerik:RadComboBox>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span class="">Vertical Alignment</span>
                                </td>
                                <td>
                                    <telerik:RadComboBox ID="rcbItmVrAlign" CssClass="IVA" runat="server">
                                        <Items>
                                            <telerik:RadComboBoxItem Text="NotSet" Value="notset" />
                                            <telerik:RadComboBoxItem Text="Top" Value="top" />
                                            <telerik:RadComboBoxItem Text="Middle" Value="middle" />
                                            <telerik:RadComboBoxItem Text="Bottom" Value="bottom" />
                                        </Items>
                                    </telerik:RadComboBox>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span class="">Css Class</span>
                                </td>
                                <td>
                                    <telerik:RadTextBox ID="txtItmColCss" CssClass="ICSS" runat="server"></telerik:RadTextBox>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span class="">Height(in pixels)</span>
                                </td>
                                <td>
                                    <telerik:RadTextBox ID="txtItmColHeight" CssClass="IH" runat="server"></telerik:RadTextBox>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div style="height: 275px" id="divFormatting">
                        <span>Formatting</span>
                        <telerik:RadTextBox ID="txtColFormatting" Width="100%" Rows="4" runat="server" TextMode="MultiLine">
                        </telerik:RadTextBox>
                        <span style="margin-top: 6px; display: block;">Item Template</span>
                        <telerik:RadTextBox ID="txtItemTemplate" Width="100%" Rows="4" runat="server" TextMode="MultiLine">
                        </telerik:RadTextBox>
                        <span style="margin-top: 6px; display: block;">Edit Item Template</span>
                        <telerik:RadTextBox ID="txtEditTemplate" Width="100%" Rows="4" runat="server" TextMode="MultiLine">
                        </telerik:RadTextBox>
                        <span style="margin-top: 6px; display: block;">Footer Template</span>
                        <telerik:RadTextBox ID="txtFooterTemplate" Width="100%" Rows="4" runat="server" TextMode="MultiLine">
                        </telerik:RadTextBox>
                    </div>

                    <div style="height: 275px" id="divOther">
                        <table>
                            <tr>
                                <td style="width: 105px;">
                                    <span class="">Column Name</span>
                                </td>
                                <td>
                                    <asp:TextBox Style="width: 220px" ID="txtUnqPrefx" runat="server"></asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 105px;">
                                    <span class="">Group Name</span>
                                </td>
                                <td>
                                    <asp:TextBox Style="width: 220px" ID="txtGrpName" runat="server"></asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 105px;">
                                    <span class="">Show In Advanced Fllter</span>
                                </td>
                                <td>
                                    <asp:DropDownList Style="width: 220px" ID="ddlFilterOption" runat="server">
                                        <asp:ListItem Text="Default"></asp:ListItem>
                                        <asp:ListItem Text="Always"></asp:ListItem>
                                        <asp:ListItem Text="Never"></asp:ListItem>
                                    </asp:DropDownList>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span class="">Enable Editing</span>
                                </td>
                                <td>
                                    <input id="chkEnableEditing" type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span class="">Hidden</span></td>
                                <td>
                                    <asp:CheckBox ID="chkHiddenCol" runat="server" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span class="" style="white-space: nowrap">Display as link</span></td>
                                <td>
                                    <asp:CheckBox ID="chkIsLink" onclick="ShowFunctionTxt()" runat="server" />
                                </td>
                            </tr>
                            <tr class="lnkFunc" style="display: none">
                                <td>
                                    <span class="">On Click</span>
                                </td>
                                <td>
                                    <asp:TextBox ID="txtLinkFunction" runat="server"></asp:TextBox>
                                </td>
                            </tr>
                            </table>
                        
                    </div>
                </div>
                <div style="text-align: right; padding: 5px">
                    <input type="button" value="Submit" onclick="return SaveColumnSettings();" />
                    <input type="button" value="Cancel" onclick="return CloseColumnSettings();" />
                </div>
            </div>

            <div id="generalSettings" style="width: 100%" class="toolbar">
                <div onclick="ShowGridProps('Save')" id="lbnSave" runat="server" class="toolBtn save">
                    <span>Save</span>
                </div>
                <div onclick="ShowGridProps('SaveAs')" id="lbnSaveAs" runat="server"
                    class="toolBtn saveas">
                    <span>Save As</span>
                </div>
                <div onclick="ShowGridProps('Prop')"
                    class="toolBtn property">
                    <span>Properties</span>
                </div>
                <div
                    class="toolBtn CloseWin">
                    <span>Close</span>
                </div>

            </div>
            <div>
                <asp:DropDownList ID="ddlSort" CssClass="sortddl" onchange="DDlChanged(this)" runat="server" Style="display: none; font-style: italic; width: 60px; border: 1px solid #EBE7E7; height: 24px; font-size: 13px;">
                    <asp:ListItem Text="NONE" Value="NONE"></asp:ListItem>
                    <asp:ListItem Text="ASC" Value="ASC"></asp:ListItem>
                    <asp:ListItem Text="DESC" Value="DESC"></asp:ListItem>
                </asp:DropDownList>
                <div class="formSettings" style="display: none; width: 750px; height: 615px" id="divViewDetails">
                    <telerik:RadTabStrip ID="tabRightsInfo" runat="server" MultiPageID="RadMultiPageRights"
                        OnClientTabSelected="OnClientTabSelected1" Width="100%"
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
                        Style="margin-left: -1px !important; width: 100% !important; height: 423px">
                        <telerik:RadPageView ID="pvGeneral" runat="server" Style="padding: 10px 0 0 10px; height: 100%">
                            <div class="div-form">
                                <table class="table-form">
                                    <tr>
                                        <td class="td-label">
                                            <asp:Label ID="lblViewName" Style="vertical-align: top" CssClass="labeltext" runat="server" Text="View Name"></asp:Label>
                                        </td>
                                        <td class="td-value">
                                            <asp:TextBox ID="txtViewName" Style="vertical-align: top" CssClass="BtnText" runat="server"></asp:TextBox>
                                            <asp:HiddenField ID="hdnReportName" runat="server" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="td-label">
                                            <asp:Label ID="Label3" Style="vertical-align: top" CssClass="labeltext" runat="server" Text="Code"></asp:Label>
                                        </td>
                                        <td class="td-value">
                                            <asp:TextBox ID="txtTag" Style="vertical-align: top" CssClass="BtnText" runat="server"></asp:TextBox>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="td-label">
                                            <asp:Label ID="lblDesc" Style="vertical-align: top" CssClass="labeltext" runat="server" Text="Description"></asp:Label>
                                        </td>
                                        <td class="td-value">
                                            <asp:TextBox ID="txtDesc" TextMode="MultiLine" runat="server"></asp:TextBox>
                                            <asp:HiddenField ID="hdnDesc" runat="server" />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="td-label"><span style="width: 90px" class="lbl">Attach Script</span>  </td>
                                        <td>
                                            <asp:DropDownList ID="ddlScriptResource" onchange="toggleScriptPath()" CssClass="ddl" runat="server"></asp:DropDownList>
                                        </td>
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

                                    <tr>
                                        <td></td>
                                        <td class="td-value">
                                            <asp:LinkButton ID="lnkDocument" CssClass="document" runat="server" OnClientClick="return ShowDocument();" Text="Documentation"></asp:LinkButton>
                                        </td>
                                    </tr>
                                    <tr id="trResVersion" runat="server">
                                        <td class="td-label">
                                            <asp:Label ID="Label5" runat="server" Text="Resource Version"></asp:Label>
                                        </td>
                                        <td class="td-value">
                                            <telerik:RadNumericTextBox ID="txtResVersion" runat="server"></telerik:RadNumericTextBox>
                                        </td>
                                    </tr>
                                </table>
                                <span class="sep"></span>
                                <table class="table-form" style="width: 100%">


                                    <tr>
                                        <td>
                                            <span class="td-label">
                                                <asp:Label ID="Label1" CssClass="labeltext" runat="server" Text="Select Default Filter For This View:"></asp:Label>
                                            </span>
                                            <br />
                                            <span style="margin-left: 35px;" class="td-value">
                                                <asp:DropDownList ID="ddlFilter" Width="250px" runat="server"></asp:DropDownList>
                                            </span>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span class="td-label">
                                                <asp:Label ID="Label2" CssClass="labeltext" runat="server" Text="Choose a filter that will be enforced on this view. User cannot remove this filter:"></asp:Label>
                                            </span>
                                            <br />
                                            <span style="margin-left: 35px;" class="td-value">
                                                <asp:DropDownList ID="ddlEnforceFilter" Width="250px" runat="server"></asp:DropDownList>
                                            </span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span class="td-label">
                                                <asp:Label ID="Label4" CssClass="labeltext dependent" runat="server" Text="Choose a workflow for this View"></asp:Label>
                                            </span>
                                            <br />
                                            <span style="margin-left: 35px;" class="td-value">
                                                <asp:DropDownList Width="250px" ID="ddlApplicableWF" runat="server"></asp:DropDownList>

                                            </span>

                                        </td>

                                    </tr>
                                    <tr>
                                        <td>
                                            <span>Applicable Filters:</span>
                                            <div id="divFilterList" class="dgCmd" style="width: 75%; border: solid 1px #D2D2D2; overflow: auto; margin-left: 37px; height: 110px;">

                                                <asp:CheckBoxList ID="chklFilters" runat="server"></asp:CheckBoxList>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr style="display: none">

                                        <td class="td-value">
                                            <span>Disable All Workflows For This View</span>
                                            <asp:CheckBox ID="chkIsWorkflow" data-chk-on="yes" data-chk-off="no" runat="server" />
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </telerik:RadPageView>
                        <telerik:RadPageView ID="pvRole" runat="server" Style="height: 100%; padding: 10px 0 0 10px">
                            <iframe id="ifrmRole" frameborder="0" style="height: 99%; width: 99%" runat="server"></iframe>
                        </telerik:RadPageView>

                    </telerik:RadMultiPage>
                    <div class="row" style="text-align: right; position: absolute; left: 12px; right: 12px; bottom: 10px; border-top: solid 1px #E7E7E7;">
                        <input type="button" onclick="createXml(this, 'main')" class="ActionButton GlassButton" id="btnSave" runat="server" value="Save" />
                        <input type="button" onclick="$('#divViewDetails').HideModal();" class="ActionButton GlassButton RedColor" value="Cancel" />
                    </div>
                </div>

                <div id="divTab" style="">
                    <telerik:RadTabStrip ID="TabGridFilter" runat="server" MultiPageID="RadMultiPageGridFilter"
                        OnClientTabSelected="OnClientTabSelected"
                        SelectedIndex="0">
                        <Tabs>
                            <telerik:RadTab Text="Columns" PageViewID="pvFields" Value="Fields">
                            </telerik:RadTab>

                            <telerik:RadTab Text="Settings" PageViewID="pvAction" Value="Actions">
                            </telerik:RadTab>

                            <telerik:RadTab Text="Layout" PageViewID="pvLayout" Value="Layout">
                            </telerik:RadTab>

                            <telerik:RadTab Text="Script" PageViewID="pvScript" Value="Script">
                            </telerik:RadTab>
                            <telerik:RadTab Text="Server Script" PageViewID="pvServerScript" Value="ServerScript">
                            </telerik:RadTab>
                            <telerik:RadTab Text="Css" PageViewID="pvCss" Value="Css">
                            </telerik:RadTab>
                            <telerik:RadTab Text="Default Filter" PageViewID="pvFilter" Value="Filter">
                            </telerik:RadTab>
                        </Tabs>
                    </telerik:RadTabStrip>
                    <telerik:RadMultiPage ID="RadMultiPageGridFilter" runat="server" SelectedIndex="0"
                        Style="position: absolute; left: 0; right: 0; bottom: 10px; top: 93px;">
                        <telerik:RadPageView ID="pvFields" runat="server" Style="padding-left: 20px; padding-top: 20px;" Height="410px">
                            <span class="mainHeading">Grid Column Editor :</span>
                            <span class="headingDetails" style="margin-bottom: 25px">Choose applicable columns for this view.Edit their titles and sort order.</span>
                            <div style="width: 100%; max-width: 1000px; height: 100%">
                                <telerik:RadSplitter ID="rsplFilter" runat="server" Width="100%" Height="100%">
                                    <telerik:RadPane ID="pnl1" CssClass="firsttree" Style="background-color: #F8F8F8; position: relative" runat="server" Width="25%">
                                        <telerik:RadTreeView ID="tvRelated" CssClass="tree" OnClientDoubleClick="showRecord" OnClientNodeClicked="TreeChanged" Style="height: 92%; width: 100% !important;" runat="server">
                                            <WebServiceSettings Path="Layout_Grid.aspx" Method="GetNodes"></WebServiceSettings>
                                            <Nodes>
                                            </Nodes>
                                        </telerik:RadTreeView>
                                        <a href="javascript:void(0)" id="lnkQuery" class="lnkQuery" onclick="return addSubQuery()" runat="server">SubQuery Field</a>
                                        <a href="javascript:void(0)" id="A1" class="lnkQuery" style="left: 120px; white-space: nowrap;" onclick="return addBlankField()">Expression Field</a>
                                    </telerik:RadPane>
                                    <telerik:RadSplitBar ID="pnl2" runat="server" CollapseMode="Forward">
                                    </telerik:RadSplitBar>
                                    <telerik:RadPane ID="pnl3" runat="server" Style="width: 75%">

                                        <table cellspacing="0" cellpadding="0">
                                            <thead style="color: gray; font-size: 14px; font-family: nunitolight;">
                                                <tr>
                                                    <th style="font-weight: normal"></th>
                                                    <th style="font-weight: normal">Field Name</th>
                                                    <th style="font-weight: normal">Display Name</th>
                                                    <th style="font-weight: normal">Sort</th>
                                                    <th style="font-weight: normal">Width</th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody id="tbl" data-bind="foreach: tasks, visible: tasks().length > 0">
                                                <tr data-bind="attr: { 'data-sxml': Settings,'data-coltype':Type }">
                                                    <td>
                                                        <div style="background: url('../Images/drag.png'); height: 16px; width: 16px; cursor: pointer" title="drag"></div>
                                                    </td>
                                                    <td>
                                                        <asp:TextBox ID="txtDisplayName" CssClass="DisplayName value" runat="server" data-bind="value: DispName,visible:(Type == ''),attr: { title: Title,FieldID:Name,EntityPath:EntityPath }" Enabled="false"></asp:TextBox>
                                                        <a href='javascript:void(0)' id='btnQuery' class='query' subquerymode="" style='display: none' data-bind="visible: (Type == 'subquery'), attr: { title: Title ,_s:SubXml}" onclick='return showQuery(this)'>SubQuery Field</a>
                                                        <input id="hdnSubqueryXml" type="hidden" class="hdnsubxml" data-bind="value: SubXml" />
                                                        <input type="text" disabled class="DisplayName value" value="Expression Field" style='display: none; font-style: italic' data-bind="visible: (Type == 'expr')" />
                                                    </td>
                                                    <td>
                                                        <asp:TextBox ID="txtUserDisplayName" CssClass="UserDisplayName" data-bind="value: UserDispName,attr: { title: UserDispName}" runat="server"></asp:TextBox>
                                                    </td>
                                                    <td>
                                                        <asp:TextBox ID="txtSortOrder" ToolTip="Sort Order" CssClass="sort" onfocus="ShowDdl(this)" runat="server" data-bind="value: sort,attr: { title: sort}"></asp:TextBox>
                                                    </td>
                                                    <td>
                                                        <asp:TextBox ID="txtWidth" CssClass="Width" ToolTip="Width" runat="server" data-bind="value: width,attr: { title: width}"></asp:TextBox>
                                                    </td>
                                                    <td>
                                                        <a href='javascript:void(0)' id='lnkColSetting' class='setting'  onclick='return showSetting(this)'>Setting</a>
                                                    </td>
                                                    <td>
                                                        <div class="close" title="Delete" onclick="deleteR(this)" data-bind="click: $parent.removeTask">X</div>
                                                        <input type="checkbox" class="DisableRow chkDisable" data-bind="checked: Status" style="display: none" onchange="return DisableRow(this)" />
                                                    </td>
                                                    <td style="display: none">
                                                        <asp:TextBox ID="txtI18No" CssClass="i18No" runat="server" data-bind="value: ID" Style="display: none"></asp:TextBox>
                                                    </td>
                                                    <td style="display: none">
                                                        <asp:TextBox fID="txtWorkflow" CssClass="WFCode" runat="server" data-bind="value: WFCode" Style="display: none"></asp:TextBox>
                                                    </td>

                                                </tr>
                                            </tbody>
                                        </table>

                                    </telerik:RadPane>
                                </telerik:RadSplitter>
                            </div>
                        </telerik:RadPageView>

                        <telerik:RadPageView ID="pvAction" runat="server" Style="padding-left: 20px; padding-top: 20px;" Height="410px">
                            <span class="mainHeading">Enable Grouping</span>
                            <asp:CheckBox Style="margin-left: 35px;" onclick="$('#divGroupSettings').setDisplay($(this).checked())" data-chk-on="yes" data-chk-off="no" ID="chkEnableGroup" runat="server" />
                            <div style="margin: 10px 0 20px 75px;" id="divGroupSettings">
                                <span class="lbl" style="width: 165px;">Do not show detail records</span><asp:CheckBox Style="margin-left: 35px;" data-chk-on="" data-chk-off="" ID="chkHideGroupDetails" runat="server" /><br />
                                <br />
                                <span class="default-label">No.of levels to be displayed : &nbsp;</span><telerik:RadNumericTextBox runat="server" Width="35px" ID="rntGroupLevel"></telerik:RadNumericTextBox><br />
                                <br />
                                <span style="text-indent: 0" class="headingDetails">Choose Grouping Parameters : </span>
                                <br />
                                <a onclick="addGroupItem()" class="mdl-button GreenColor small addIcon underline">Add New</a>
                                <table id="tblGroupSettings" cellpadding="0" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th style="font-weight: normal; width: 250px">Field</th>
                                            <th style="font-weight: normal; width: 60px">Sort</th>
                                            <th style="font-weight: normal; width: 35px">Header</th>
                                            <th style="font-weight: normal; width: 35px">Footer</th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                            </div>
                            <div id="divGroupTemplate" style="display: none; width: 450px; height: 300px; padding-right: 245px;" class="formSettings">
                                <span style="margin: -10px 0 10px -5px; display: inline-block" class="mainHeading">Header Template</span><a style="cursor: pointer; margin-left: 15px; font-family: arial" class="setting" onclick="createDefaultTmplHtml(this)">Click to create</a>
                                <textarea style="width: 100%; height: 250px"></textarea>
                                <div style="text-align: right; margin-top: 10px;">
                                    <a class="ActionButton GreenButton" onclick="saveGroupData()">Ok</a>
                                    <a class="ActionButton RedButton " onclick="$('#divGroupTemplate').HideModal()">Cancel</a>
                                </div>
                            </div>


                            <span class="mainHeading">Enable Column Merging</span>
                            <asp:CheckBox Style="margin-left: 35px;" onclick="$('#divMergeSettings').setDisplay($(this).checked())" data-chk-on="yes" data-chk-off="no" ID="chkColumnMerging" runat="server" />
                            <div style="margin: 10px 0 20px 75px;" id="divMergeSettings">
                                <span style="text-indent: 0" class="headingDetails">Choose Merging Parameters : </span>
                                <br />
                                <a onclick="addMergeItem()" class="mdl-button GreenColor small addIcon underline">Add New</a>
                                <table id="tblMergeSettings" cellpadding="0" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th style="font-weight: normal; width: 200px">Column Group Name</th>
                                            <th style="font-weight: normal; width: 200px">Column Group Value</th>
                                            <th style="font-weight: normal; width: 200px">Parent Group Column</th>
                                            <th style="font-weight: normal; width: 35px">Style</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                            </div>
                            <div id="divMergeTemplate" style="display: none; width: 350px; height: 130px;" class="formSettings">
                                <span style="margin: -10px 0 10px -5px; display: inline-block" class="mainHeading">Style</span>
                                <table id="Table1">
                                    <tr>
                                        <td>
                                            <span class="">Horizontal Alignment</span>
                                        </td>
                                        <td>
                                            <telerik:RadComboBox ID="rcbColumnHrStyle" CssClass="IHA" runat="server">
                                                <Items>
                                                    <telerik:RadComboBoxItem Text="Default" Value="default" />
                                                    <telerik:RadComboBoxItem Text="Left" Value="left" />
                                                    <telerik:RadComboBoxItem Text="Right" Value="right" />
                                                    <telerik:RadComboBoxItem Text="Center" Value="center" />
                                                </Items>
                                            </telerik:RadComboBox>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span class="">Vertical Alignment</span>
                                        </td>
                                        <td>
                                            <telerik:RadComboBox ID="rcbColumnVerStyle" CssClass="IVA" runat="server">
                                                <Items>
                                                    <telerik:RadComboBoxItem Text="NotSet" Value="notset" />
                                                    <telerik:RadComboBoxItem Text="Top" Value="top" />
                                                    <telerik:RadComboBoxItem Text="Middle" Value="middle" />
                                                    <telerik:RadComboBoxItem Text="Bottom" Value="bottom" />
                                                </Items>
                                            </telerik:RadComboBox>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span class="">Css Class</span>
                                        </td>
                                        <td>
                                            <telerik:RadTextBox ID="txtColumnCss" CssClass="ICSS" runat="server"></telerik:RadTextBox>
                                        </td>
                                    </tr>
                                </table>
                                <div style="text-align: right; margin-top: 10px;">
                                    <a class="ActionButton GreenButton" onclick="saveMergeData()">Ok</a>
                                    <a class="ActionButton RedButton " onclick="$('#divMergeTemplate').HideModal()">Cancel</a>
                                </div>
                            </div>




                            <span class="mainHeading">Show as Treeview</span>
                            <asp:CheckBox onclick="$('#spnTreeLevel').setDisplay($(this).checked())" Style="margin-left: 35px;" data-chk-on="yes" data-chk-off="no" ID="chkTreeview" runat="server" />
                            <span id="spnTreeLevel" style="margin-left: 10px; vertical-align: middle; display: inline-block;"><span class="default-label">No.of levels to be displayed : &nbsp;</span><telerik:RadNumericTextBox runat="server" Value="0" Width="35px" ID="txtTreeLevel"></telerik:RadNumericTextBox></span>

                            <div id="divPageCnt" runat="server">
                                <br />
                                <br />
                                <span class="mainHeading">Enable Paging</span>
                                <asp:CheckBox Style="margin-left: 35px;" onclick="$('#spnRecCount').setDisplay($(this).checked())" data-chk-on="yes" data-chk-off="no" ID="chkEnablePaging" Checked="true" runat="server" />
                                <span id="spnRecCount" style="margin-left: 10px; vertical-align: middle; display: inline-block;"><span class="default-label">No. of records per page : &nbsp;</span><telerik:RadNumericTextBox runat="server" Width="35px" ID="txtnRecordCount"></telerik:RadNumericTextBox></span>
                                <br />
                                <br />
                                <span class="mainHeading">Freeze Columns</span>
                                <span class="default-label" style="margin-left: 75px;">No. of columns to be frozen : &nbsp;</span><telerik:RadNumericTextBox runat="server" Width="35px" ID="txtFrozen"></telerik:RadNumericTextBox>

                                <br />
                                <br />
                                <span class="mainHeading">Grid Selection</span>
                                <div style="margin-left: 75px; margin-top: 20px;">
                                    <span class="lbl" style="width: 210px;">Disable Multi-Selection Of Records</span>
                                    <asp:CheckBox Style="margin-left: 5px;" data-chk-on="" data-chk-off="" ID="chkHideSelection" runat="server" />
                                    <br />
                                    <br />
                                    <span class="lbl" style="width: 210px;">Hide Select Column</span>
                                    <asp:CheckBox Style="margin-left: 5px;" data-chk-on="" data-chk-off="" ID="chkHideColCheck" runat="server" />
                                </div>
                                <br />
                                <span class="mainHeading">Enable Grid Editing</span>
                                <asp:CheckBox Style="margin-left: 35px;" onchange="toggleSaveRow()" data-chk-on="yes" data-chk-off="no" ID="chkGridEdit" runat="server" />
                                <div id="divAddGridInfo" style="display: none; margin-left: 75px; margin-top: 20px;">
                                    <span class="lbl" style="width: 182px;">Enable Cell-Wise Edit Mode</span><asp:CheckBox data-chk-on="" data-chk-off="" ID="chkCellEditMode" runat="server" />
                                    <br />
                                    <br />
                                    <span class="lbl" style="width: 182px;">Enable Adding of New Records</span>
                                    <asp:CheckBox data-chk-on="" data-chk-off="" ID="chkEnableNewRec" runat="server" />
                                    <br />
                                    <br />
                                    <span class="lbl" style="width: 182px;">Default no. of blank records :</span><telerik:RadNumericTextBox runat="server" Width="35px" ID="txtDefaultNewRec"></telerik:RadNumericTextBox>
                                    <br />
                                    <br />
                                    <span class="lbl" style="width: 182px;">Max no. of records : </span>
                                    <telerik:RadNumericTextBox runat="server" Width="35px" ID="txtDefaultMaxRec"></telerik:RadNumericTextBox>
                                </div>
                                <br />
                                <br />
                                <span class="mainHeading">Grid Structure</span>
                                <div style="margin-left: 75px; margin-top: 20px;">
                                    <span class="lbl" style="width: 150px;">Show Grid Footer</span>
                                    <asp:CheckBox Style="margin-left: 5px;" data-chk-on="" data-chk-off="" ID="chkShowFooter" runat="server" />
                                    <br />
                                    <br />
                                    <span class="lbl" style="width: 150px;">Show Grid Header</span>
                                    <asp:CheckBox Style="margin-left: 5px;" Checked="true" data-chk-on="" data-chk-off="" ID="chkShowHeader" runat="server" />
                                    <br />
                                    <br />
                                    <span class="lbl" style="width: 150px;">Show Grid Filter</span>
                                    <asp:CheckBox Style="margin-left: 5px;" Checked="true" data-chk-on="" data-chk-off="" ID="chkShowFilter" runat="server" />
                                    <br />
                                    <br />
                                    <span class="lbl" style="width: 150px;">Render Grid Filter As List</span>
                                    <asp:CheckBox Style="margin-left: 5px;" data-chk-on="" data-chk-off="" ID="chkRenderFilterList" runat="server" />
                                    <br />
                                    <br />
                                    <span class="lbl" style="width: 150px;">Render Advanced Filter In Expanded Mode</span>
                                    <asp:CheckBox Style="margin-left: 5px;" data-chk-on="" data-chk-off="" ID="chkExpandFilter" runat="server" />
                                    <br />
                                    <br />
                                    <span class="lbl" style="width: 150px;">Show Grid Settings</span>
                                    <asp:CheckBox Style="margin-left: 5px;" Checked="true" data-chk-on="" data-chk-off="" ID="chkShowSettings" runat="server" />
                                    <br />
                                    <br />
                                    <span class="lbl" style="width: 150px;">Wrap Cell Contents</span>
                                    <asp:CheckBox Style="margin-left: 5px;" Checked="true" data-chk-on="" data-chk-off="" ID="chkWrapCell" runat="server" />
                                    <br />
                                    <br />
                                    <span class="lbl" style="width: 150px;">Allow Scrolling</span>
                                    <asp:CheckBox Style="margin-left: 5px;" Checked="true" data-chk-on="" data-chk-off="" ID="chkScroll" runat="server" />
                                    <br />
                                    <br />
                                    <span class="lbl" style="width: 150px;">Percent Width Based Grid</span>
                                    <asp:CheckBox Style="margin-left: 5px;" data-chk-on="" data-chk-off="" ID="chkPercent" runat="server" />
                                </div>
                                <br />
                                <br />
                                <span class="mainHeading">Disable Databind On Load</span>
                                <asp:CheckBox Style="margin-left: 35px;" data-chk-on="yes" data-chk-off="no" ID="chkDisableBind" runat="server" />
                            </div>
                            <span class="sep"></span>
                            <asp:Panel ID="pnlDatakeys" runat="server">
                                <span class="mainHeading">Parameter Fields</span>
                                <span class="headingDetails">These are hidden fields in the grid that can be used as paramters in url</span>
                                <span>
                                    <div id="multiSort" style="width: 450px; margin-left: 35px;"></div>
                                </span>
                            </asp:Panel>
                            <span class="sep"></span>
                            <asp:Panel ID="pnlButton" runat="server">
                                <span class="mainHeading">Buttons</span>
                                <span class="headingDetails">Hide/Show System defined buttons and set their display text</span>
                                <table id="tblButton" cellspacing="0" cellpadding="0" style="border-collapse: collapse; margin-left: 35px; position: relative">
                                    <thead style="color: gray; font-size: 14px; font-family: nunitolight;">
                                        <tr>
                                            <th style="font-weight: normal;">Buttons</th>
                                            <th style="font-weight: normal">Show</th>
                                            <th style="font-weight: normal; text-align: left; text-indent: 70px; width: 175px">Text</th>
                                            <th style="font-weight: normal; text-align: left; text-indent: 70px; width: 175px">Form</th>
                                            <th style="font-weight: normal; text-align: left; text-indent: 70px; width: 175px">Parameter</th>
                                            <th style="font-weight: normal; text-align: left; text-indent: 70px; width: 175px">Location</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr id="tradd" runat="server">
                                            <td class="btn-name" btn="Add">Add</td>
                                            <td style="padding: 0 10px">
                                                <asp:CheckBox ID="chkAdd" CssClass="chkAdd" onclick="toggleParameter('Add')" runat="server" />
                                            </td>
                                            <td>
                                                <asp:TextBox ID="txtAddName" CssClass="BtnText " runat="server" Text="Add"></asp:TextBox></td>
                                            <td>
                                                <asp:TextBox ID="txtAddForm" CssClass="BtnText  formname" runat="server" Text=""></asp:TextBox>
                                            </td>
                                            <td>
                                                <asp:TextBox ID="txtAddParameter" CssClass="BtnText  addPrm prmtext" runat="server" Text=""></asp:TextBox>
                                            </td>
                                            <td>
                                                <asp:TextBox ID="txtAddSetting" CssClass="BtnText  setting" runat="server" Text=""></asp:TextBox></td>
                                        </tr>
                                        <tr id="tredit" runat="server">
                                            <td class="btn-name" btn="Edit">Edit</td>
                                            <td style="padding: 0 10px">
                                                <asp:CheckBox ID="chkEdit" CssClass="chkEdit" onclick="toggleParameter('Edit')" runat="server" />
                                            </td>
                                            <td>
                                                <asp:TextBox ID="txtEditName" CssClass="BtnText " runat="server" Text="Edit"></asp:TextBox></td>
                                            <td>
                                                <asp:TextBox ID="txtEditForm" CssClass="BtnText  formname" runat="server" Text=""></asp:TextBox>
                                            </td>
                                            <td>
                                                <asp:TextBox ID="txtEditParameter" CssClass="BtnText  editPrm prmtext" runat="server" Text=""></asp:TextBox>
                                            </td>
                                            <td>
                                                <asp:TextBox ID="txtEditSetting" CssClass="BtnText  setting" runat="server" Text=""></asp:TextBox></td>
                                        </tr>
                                        <tr id="trview" runat="server">
                                            <td class="btn-name" btn="View">View</td>
                                            <td style="padding: 0 10px">
                                                <asp:CheckBox ID="chkView" CssClass="chkView" runat="server" onclick="toggleParameter('View')" />
                                            </td>
                                            <td>
                                                <asp:TextBox ID="txtPreViewName" CssClass="BtnText " runat="server" Text="View"></asp:TextBox></td>
                                            <td>
                                                <asp:TextBox ID="txtViewForm" CssClass="BtnText  formname" runat="server" Text=""></asp:TextBox>
                                            </td>
                                            <td>
                                                <asp:TextBox ID="txtViewParameter" CssClass="BtnText  viewPrm prmtext" runat="server" Text=""></asp:TextBox>
                                            </td>
                                            <td>
                                                <asp:TextBox ID="txtViewSetting" CssClass="BtnText  setting" runat="server" Text=""></asp:TextBox></td>
                                        </tr>
                                        <tr id="trdelete" runat="server">
                                            <td class="btn-name" btn="Delete">Delete</td>
                                            <td style="padding: 0 10px">
                                                <asp:CheckBox ID="chkDelete" onclick="Reorder_Buttons()" runat="server" />
                                            </td>
                                            <td>
                                                <asp:TextBox ID="txtDeleteName" CssClass="BtnText " runat="server" Text="Delete"></asp:TextBox></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr id="trSaveBtn" runat="server">
                                            <td class="btn-name" btn="GridSave">Save</td>
                                            <td style="padding: 0 10px">
                                                <asp:CheckBox ID="chkSaveBtn" onclick="Reorder_Buttons()" runat="server" />
                                            </td>
                                            <td>
                                                <asp:TextBox ID="txtSaveName" CssClass="BtnText " runat="server" Text="Save"></asp:TextBox></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr id="trondemand" runat="server">
                                            <td class="btn-name" btn="On Demand Workflows">On Demand Workflows</td>
                                            <td style="padding: 0 10px">
                                                <asp:CheckBox ID="chkOnDemand" onclick="Reorder_Buttons()" runat="server" />
                                            </td>
                                            <td>
                                                <asp:TextBox ID="txtOnDemandName" CssClass="BtnText " runat="server" Text="On Demand Workflows"></asp:TextBox></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr id="trwfapproval" runat="server">
                                            <td class="btn-name" btn="Approval Workflow">Approval Workflow</td>
                                            <td style="padding: 0 10px">
                                                <asp:CheckBox ID="chkApproval" onclick="toggleParameter('Appr')" runat="server" />
                                            </td>
                                            <td>
                                                <asp:TextBox ID="txtApprovalWorkflow" CssClass="BtnText " runat="server" Text="Take Action"></asp:TextBox>
                                            </td>
                                            <td>
                                                <asp:TextBox ID="txtApprovalForm" CssClass="BtnText  formname" runat="server"></asp:TextBox>

                                            </td>
                                            <td>
                                                <asp:TextBox ID="txtApprovalParameter" CssClass="BtnText  appPrm prmtext" runat="server" Text=""></asp:TextBox>
                                            </td>
                                            <td>
                                                <asp:TextBox ID="txtApprovalSetting" CssClass="BtnText  setting" runat="server" Text=""></asp:TextBox></td>
                                        </tr>
                                        <tr id="trClose" runat="server">
                                            <td class="btn-name" btn="Close">Close</td>
                                            <td style="padding: 0 10px">
                                                <asp:CheckBox ID="chkClose" onclick="Reorder_Buttons()" runat="server" />
                                            </td>
                                            <td>
                                                <asp:TextBox ID="txtClose" CssClass="BtnText " runat="server" Text="Close"></asp:TextBox></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <span class="sep"></span>
                                <div id="divCUBtns" runat="server">
                                    <span class="mainHeading">Custom Buttons</span>
                                    <span class="headingDetails">Hide/Show Custom buttons created for this entity</span>

                                    <div id="divActionButtons" class="dgCmd" style="margin-left: 35px; margin-bottom: 50px">
                                        <asp:Literal ID="ltrButtons" runat="server">
                                            <span class="no-data" style="margin-top: 15px;display: inline-block;margin-left: 10px;">No Custom buttons defined yet.</span>
                                        </asp:Literal>
                                    </div>

                                </div>
                                <div id="divButtonSort" runat="server">
                                    <span class="mainHeading">Reorder Buttons</span>
                                    <span class="headingDetails">Re-arrange buttons </span>
                                    <div id="divArrangeButtons" class="dgCmd" style="margin-left: 35px; margin-bottom: 50px">
                                        <ul id="btn_sortable"></ul>
                                    </div>
                                </div>
                            </asp:Panel>

                        </telerik:RadPageView>

                        <telerik:RadPageView ID="pvLayout" runat="server" Height="100%">
                            <div id="divLayout" class="page1" style="padding: 20px; height: 100%; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; -ms-box-sizing: border-box; box-sizing: border-box;">
                                <span style="font-family: nunitoregular; font-size: 16px; text-decoration: underline; color: #00178A;">Css files to be included with this layout</span><br />
                                <span style="display: inline-block; margin: 5px 0 10px 60px">
                                    <asp:ListBox data-placeholder="Choose Css files" SelectionMode="Multiple" ID="lboCss" runat="server"></asp:ListBox></span><br />


                                <span style="font-family: nunitoregular; font-size: 16px; text-decoration: underline; color: #00178A;">Javascript files to be included with this layout</span><br />
                                <span style="display: inline-block; margin: 5px 0 10px 60px">
                                    <asp:ListBox data-placeholder="Choose Script files" SelectionMode="Multiple" ID="lboScripts" runat="server"></asp:ListBox></span><br />


                                <span style="font-family: nunitoregular; font-size: 16px; text-decoration: underline; color: #00178A;">Choose a html template or directly modify the html source here</span><br />
                                <span style="display: inline-block; margin: 5px 0 10px 100px">
                                    <asp:DropDownList data-placeholder="No Html Template Selected" onchange="ToggleEditors($(this).prop('selectedIndex')==0)" ID="ddlTemplates" runat="server"></asp:DropDownList>
                                </span>
                                <div id="edtCenter" style="height: 71%">
                                    <span class="lblTitle">Html Source</span>
                                    <asp:TextBox ID="txtLayout" Text="<PAGE>     <span title='@Title' class='PageTitle'>@Title</span> <!--GRIDCONTENT-->  </PAGE>" runat="server" Width="635" Height="250" TextMode="Multiline" Rows="3"> </asp:TextBox>
                                </div>
                            </div>
                        </telerik:RadPageView>
                        <telerik:RadPageView ID="pvScript" runat="server" Height="100%">
                            <div id="divScript" class="page1" style="height: 100%; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; -ms-box-sizing: border-box; box-sizing: border-box;">
                                <div style="height: 100%;">
                                    <iframe id="ifrExprEditor" runat="server" frameborder="0" style="height: 100%; width: 100%"></iframe>
                                </div>
                                <div style="height: 100%; display: none">
                                    <asp:TextBox ID="txtScript" CssClass="txtScript" runat="server" Width="635" Height="250" Text="" TextMode="Multiline" Rows="3"> </asp:TextBox>

                                </div>
                            </div>
                        </telerik:RadPageView>
                        <telerik:RadPageView ID="pvServerScript" runat="server" Height="100%">
                            <div id="divServerScript" class="page1" style="height: 100%; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; -ms-box-sizing: border-box; box-sizing: border-box;">
                                <div style="height: 100%;">
                                    <iframe id="ifrServerExprEditor" runat="server" frameborder="0" style="height: 100%; width: 100%"></iframe>
                                </div>
                                <div style="display: none">
                                    <asp:TextBox ID="txtServerScript" CssClass="txtServerScript" runat="server" Width="635" Height="250" Text="" TextMode="Multiline" Rows="3"> </asp:TextBox>
                                </div>
                            </div>
                        </telerik:RadPageView>
                        <telerik:RadPageView ID="pvCss" runat="server" Height="100%">
                            <div id="divCss" class="page1" style="height: 100%; padding: 20px; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; -ms-box-sizing: border-box; box-sizing: border-box;">
                                <div style="height: 100%">
                                    <asp:TextBox ID="txtCss" runat="server" Width="635" Height="250" Text=".docHTML{}  .docBody{}" TextMode="Multiline" Rows="3"> </asp:TextBox>
                                </div>
                            </div>
                        </telerik:RadPageView>
                        <telerik:RadPageView ID="pvFilter" runat="server" Height="100%">
                            <iframe id="ifrmCriteria" frameborder="0" style="height: 99%; width: 99%" runat="server"></iframe>
                        </telerik:RadPageView>
                    </telerik:RadMultiPage>
                </div>
                <div id="divDataKeys" style="left: 55px"></div>


            </div>

            

            <div id="divShowQuery" style="height: 300px; width: 300px; display: none; border: 1px solid; background-color: #EAEBD6;">
                <asp:TextBox ID="txtShowQuery" Style="height: 78%; width: 98%" CssClass="showQuery" Enabled="false" runat="server" TextMode="MultiLine"></asp:TextBox>
                <asp:Button ID="btnEdit" runat="server" CssClass="ActionButton GreenButton" Text="Edit" OnClientClick="return btnEdit_onClientClick(this);" />
                <asp:Button ID="Button2" runat="server" Text="Cancel" CssClass="ActionButton RedButton" OnClientClick="return hideQueryPopUp();" />
            </div>
            <asp:DropDownList Style="width: 175px; padding: 2px; border-color: #65A5E0; display: none" ID="ddlFormKey" runat="server"></asp:DropDownList>
            <asp:DropDownList Style="width: 225px; padding: 2px; border-color: #65A5E0; display: none" ID="ddlPopup" runat="server">
                <asp:ListItem Value=""></asp:ListItem>
                <asp:ListItem Value="Self">Current Window</asp:ListItem>
                <asp:ListItem Value="Popup">Popup</asp:ListItem>
                <asp:ListItem Value="New">New</asp:ListItem>
            </asp:DropDownList>
            <div id="spnPopup" class="spnpopup" style="display: none; white-space: nowrap; padding-left: 9px; border: solid 1px #EBE7E7; height: 22px;">
                <b>Width :</b>
                <input type="text" class="BtnText wd" value="400" style="width: 35px" />
                Px&nbsp;
                <b>Height :</b>
                <input type="text" class="BtnText ht" value="400" style="width: 35px" />
                Px
                <a class="close" onclick="$(this).closest('TD').find('.setting').show().val('');$(this).closest('TD').find('select').val('');$(this).parent().remove();">X</a>
            </div>
        </ContentTemplate>
    </asp:UpdatePanel>
    <div id="divFieldOptions" class="formSettings jqModalPopup" style="display:none;width: 450px; height: 195px; font-size: 12px; font-family: verdana; position: fixed; z-index: 3500; top: 248px; left: 392px;">
                <table id="tblFieldOptions">
                            <tr>
                                <td>
                                    <span class="">Join</span>
                                </td>
                                <td>
                                    <telerik:RadComboBox ID="rcbJoin" CssClass="rcbJoin" runat="server">
                                        <Items>
                                            <telerik:RadComboBoxItem Text="Default" Value="default" />
                                            <telerik:RadComboBoxItem Text="Inner" Value="inner" />
                                            <telerik:RadComboBoxItem Text="Cross" Value="cross" />
                                            <telerik:RadComboBoxItem Text="Right" Value="right" />
                                        </Items>
                                    </telerik:RadComboBox>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span class="">Join Logic</span>
                                </td>
                                <td>
                                    <input style="width: 220px" id="txtJoinLogic" />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <span class="">Field Logic</span>
                                </td>
                                <td>
                                    <textarea rows="2" style="width: 220px" id="txtFieldLogic"></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span class="">Datatype</span>
                                </td>
                                <td>
                                    <telerik:RadComboBox ID="ddlDatatype" runat="server">
                                        <Items>
                                            <telerik:RadComboBoxItem Text="Default" Value="default" />
                                            <telerik:RadComboBoxItem Text="Text" Value="text" />
                                            <telerik:RadComboBoxItem Text="Number" Value="number" />
                                            <telerik:RadComboBoxItem Text="Decimal" Value="decimal" />
                                            <telerik:RadComboBoxItem Text="Date" Value="date" />
                                            <telerik:RadComboBoxItem Text="DateTime" Value="datetime" />
                                            <telerik:RadComboBoxItem Text="Time" Value="time" />
                                            <telerik:RadComboBoxItem Text="Checkbox" Value="checkbox" />
                                            <telerik:RadComboBoxItem Text="SingleSelect" Value="singleselect" />
                                        </Items>
                                    </telerik:RadComboBox>
                                </td>
                            </tr>
                            
                             <tr>
                                <td>
                                    <span class="">Required App/Module</span>
                                </td>
                                <td>
                                    <input id="txtRequiredApp" style="width: 220px" type="text" />
                                </td>
                            </tr>
                        </table>
        <div style="text-align: right; padding: 5px">
                    <input type="button" value="Submit" onclick="return SaveColumnSettings();">
                    <input type="button" value="Cancel" onclick="return CloseColumnSettings();">
                </div>
            </div>
    <div class="subquery" id="divSubquery">
        <div style="background-color: #FFF8DB; height: 100%; width: 100%">
            <iframe id="Iframe1" style="height: 100%; width: 100%" runat="server" frameborder="0"></iframe>
        </div>
    </div>
    <script type="text/javascript">
        if($.QS("_h")!="1")
            $("#divOther").append($("#tblFieldOptions"))
        $("#btnLock").addClass(layoutLockData.locked==1?"lock":"").addClass(layoutLockData.locked==1 && layoutLockData.lockOwner!=1?"otherlock":"").on("contextmenu",function(e){if( $("#btnLock").hasClass("lock") && confirm('Break Lock?')){toggleLock($("#btnLock"),true);};e.noBubble()});
        setLockState();
        $("#multiSort").multiSelect({ onDropDownShowing: showMultiTree });
        $("#<%=chkHiddenCol.ClientID%>,#<%=chkHideGroupDetails.ClientID%>").CheckBoxX();
        $("#<%=chkIsLink.ClientID%>,#chkEnableEditing").CheckBoxX();
        $('#spnRecCount').setDisplay($("#<%=chkEnablePaging.ClientID%>").CheckBoxX().checked());
        $('#spnTreeLevel').setDisplay($("#<%=chkTreeview.ClientID%>").CheckBoxX().checked())
        $('#divGroupSettings').setDisplay($("#<%=chkEnableGroup.ClientID%>").CheckBoxX().checked())
        $("#<%=chkHideSelection.ClientID%>,#<%=chkHideColCheck.ClientID%>,#<%=chkShowFooter.ClientID%>,#<%=chkShowHeader.ClientID%>,#<%=chkShowFilter.ClientID%>,#<%=chkRenderFilterList.ClientID%>,#<%=chkExpandFilter.ClientID%>,#<%=chkShowSettings.ClientID%>,#<%=chkWrapCell.ClientID%>,#<%=chkScroll.ClientID%>,#<%=chkPercent.ClientID%>,#<%=chkDisableBind.ClientID%>,#<%=chkGridEdit.ClientID%>,#<%=chkEnableNewRec.ClientID%>,#<%=chkCellEditMode.ClientID%>,#<%=chkIsWorkflow.ClientID%>").CheckBoxX();     
        $("#tblButton,#divActionButtons").find("input[type=checkbox]").CheckBoxX();
        $("#<%=chkApproval.ClientID%>").closest('td').next().next().children('span').setDisplay($("#<%=chkApproval.ClientID%>").checked());    
        
        $("#btnUrl").on("click", function (e) {  $(e.target).next().show();e.stopPropagation(); })
        $("#divUrlTree").on("click", function (e) { e.stopPropagation(); });
        $(document).on("click", function (e) { 
            if($(".jqModalBG").isVisible())
                return;
            $("#divUrlTree").hide();           
        });
        $('#divMergeSettings').setDisplay($("#<%=chkColumnMerging.ClientID%>").CheckBoxX().checked())


        var allAppl=$("#<%= chklFilters.ClientID %>").find("input").first();
        if(allAppl.checked())
            $("#<%= chklFilters.ClientID %>").find("input").checked(true).setEnable(false);
        allAppl.setEnable(true);
        $("#<%= chklFilters.ClientID %>").on("click", "input", function () { 
            var chk=$(this);
            if(chk.val()=="ALLFILTERS"){
                $("#<%= chklFilters.ClientID %>").find("input").checked(chk.checked()).setEnable(!chk.checked());
                chk.setEnable(true);
            }
            else if(!chk.checked() && chk.val()!="ALLFILTERS")
                $("#<%= chklFilters.ClientID %>").find("input").first().checked(false);
        });

    $("#<%=ddlFormKey.ClientID%>").on("change", function () {
            if ($(this).prev().hasClass("BtnText"))
                $(this).prev().val($(this).val());
        })
        $("#<%=ddlPopup.ClientID%>").on("change", function () {
            if ($(this).prev().hasClass("BtnText"))
                $(this).prev().val($(this).val());
            if($(this).val()=="Popup"){
                $(this).hide()
                var p=$(this).closest("TD").find(".spnPopup");
                if(p.exists())
                    p.show()
                else
                    $(this).closest("TD").append($("#spnPopup").clone().show().attr("id","spn1"));
            }
        })
        $("#<%=txtAddForm.ClientID%>,#<%=txtEditForm.ClientID%>,#<%=txtViewForm.ClientID%>,#<%=txtApprovalForm.ClientID%>").on("focus", function () {
            var ddl = $("#<%=ddlFormKey.ClientID%>");
            if (ddl.prev().hasClass("BtnText"))
                ddl.prev().show().val(ddl.val());
            ddl.prop("selectedIndex", 0);
            $(this).hide().after(ddl.show().val($(this).val()));
        });

        $("#<%=txtAddSetting.ClientID%>,#<%=txtEditSetting.ClientID%>,#<%=txtViewSetting.ClientID%>,#<%=txtApprovalSetting.ClientID%>").on("focus", function () {
            var ddl = $("#<%=ddlPopup.ClientID%>");
            if (ddl.prev().hasClass("BtnText")){
                ddl.prev().show().val(ddl.val());
                if(ddl.parent().find('.spnpopup').exists())
                    ddl.prev().hide();
            }
            ddl.prop("selectedIndex", 0);
            $(this).hide().after(ddl.show().val($(this).val()));
        });

        function addSortItem(item, obj) {
            if (obj) {
                item.data("fid", obj.FID);
                item.data("entityPath", obj.EntityPath);
                if (obj.Name)
                    item.find('span').html(obj.Name);
            }
            //item.append("<span data-fid='" + $.defaultVal(obj.FID, "") + "' data-entity-path='" + $.defaultVal(obj.EntityPath, "") + "'>" + $.defaultVal(obj.Name, "") + "</span>")
        }
        $(function () {           
            $("#<%= ddlTemplates.ClientID %>").chosen({ disable_search: true, width: "250px", allow_single_deselect: true });
            toggleScriptPath();
            $(".DisplayName").tooltip({
                position: {
                    my: "left bottom",
                    at: "left top",
                    using: function (position, feedback) {
                        $(this).css(position);
                    }
                }
            });
            $("#tbl").sortable();

            var tblGroup=$("#tblGroupSettings");
            if(arrGroupData && arrGroupData.length>0){
                for(var i=0;i<arrGroupData.length;i++){
                    addGroupItem(arrGroupData[i]);
                }
            }
            else
                addGroupItem();

            var tblMerge=$("#tblMergeSettings");
            if(arrMergeData && arrMergeData.length>0){
                for(var i=0;i<arrMergeData.length;i++){
                    addMergeItem(arrMergeData[i]);
                }
            }
            else
                addMergeItem();

            tblGroup.find("tbody").sortable({
                handle: ".reorder",                update: function () {
                    $("#tblGroupSettings").find(".group-item").each(function(i){
                        $(this).children().eq(0).css("padding-left",(i*20)+"px");
                    })
                }
            });
            tblGroup.on("click", ".close,.group-field,.setting", function (e) {
                e.stopPropagation();
                e.preventDefault();
                if($(this).hasClass("close")){
                    $(this).closest("TR").remove();
                    $("#tblGroupSettings").find(".group-item").each(function(i){
                        $(this).children().eq(0).css("padding-left",(i*20)+"px");
                    })
                }
                else  if($(this).hasClass("group-field"))
                    showFieldList($(this))
                else  if($(this).hasClass("setting")){
                    currentGroupItem=$(this);
                    $("#divGroupTemplate").ShowModal({autoClose:true}).find(".mainHeading").html($(this).attr("tmpl"));
                    Editors["txtGroup"].setValue(adjustTemplateCells($.defaultVal($(this).data("template"),""),$(this).hasClass("_hdr")));
                    autoFormatEditor("txtGroup");
                    $("#divGroupTemplate").append($("#divDataKeys").show().css({top:0,left:300}).append($(".tree").show()));
                }
            });
            
        });
            var callingDiv = "";
            function showMultiTree() {
                callingDiv = $("#multiSort");
                var tree = $(".tree");
                // var divFieldTree = $("#divFieldsTree");
                callingDiv.after($("#divDataKeys").data("fromMulti",true).append(tree.show()).show());
            }

            currentGroupItem=null;
            function showFieldList(txt){
                currentGroupItem=$(txt);
                var tree = $(".tree");
                $("#divDataKeys").data("fromMulti",false).append(tree.show()).show().position({my:"left top",at:"left bottom",of:txt});
            }
            function addGroupItem(data){
                var tr="";
                tr+='<tr class="group-item">';
                tr+='<td>';
                tr+='<input type="text"  class="group-field DisplayName value" /></td>';
                tr+='<td>';
                tr+='<select type="text" class="group-sort sort">';
                tr+='<option>Asc</option>';
                tr+='<option>Desc</option>';
                tr+='</select></td>';
                tr+='<td><a class="setting _hdr" style="font-family:arial" tmpl="Header Template" href="#">Header</a></td>';
                tr+='<td><a class="setting _ftr" style="font-family:arial" tmpl="Footer Template" href="#">Footer</a></td>';
                tr+='<td><a class="close">X</a></td>';
                tr+='<td><a class="reorder"></a></td>';
                tr+='</tr>';
                tr=$(tr);
                $("#tblGroupSettings").find("tbody").append(tr);
                $("#tblGroupSettings").find(".group-item").each(function(i){
                    $(this).children().eq(0).css("padding-left",(i*20)+"px");
                });
                if(data){
                    tr.find(".group-field").val(data.Field);
                    tr.find(".group-sort").val(data.Sort);
                    tr.find("._hdr").data("template",data.Header);
                    tr.find("._ftr").data("template",data.Footer);
                }
            }

            function addMergeItem(data){
                var tr="";
                tr+='<tr class="merge-item">';
                tr+='<td>';
                tr+='<input type="text"  class="merge-name ColumnName value" /></td>';
                tr+='<td>';
                tr+='<input type="text"  class="merge-value ColumnValue value" /></td>';
                tr+='</td>';
                tr+='<td>';
                tr+='<input type="text"  class="merge-parent ParentColumn value" /></td>';
                tr+='</td>';
                tr+='<td><a class="setting _hdr" onclick="showMergeTemplate(this)" style="font-family:arial" tmpl="Style" href="#">Style</a></td>';
                tr+='<td><a class="close" onclick="deleteMergeItem(this)">X</a></td>';
                tr+='</tr>';
                tr=$(tr);

                $("#tblMergeSettings").find("tbody").append(tr);
               
                if(data){
                    tr.find(".merge-name").val(data.ColumnName);
                    tr.find(".merge-value").val(data.ColumnValue);
                    tr.find(".merge-parent").val(data.ParentColumn);
                    tr.find("._hdr").data("template",data.Header);
                }
            }
            var currentMergerLink;
            function showMergeTemplate(btnTemplate,mode)
            {
                currentMergerLink=btnTemplate;
                var template=$(btnTemplate).data('template');
                if($.defaultVal(template,'') == '')
                {
                    template={"Horizontal":"","Vertical":"","Css":""};
                }
                if($.defaultVal(template["Horizontal"],'') != '')
                    $find("<%= rcbColumnHrStyle.ClientID %>").findItemByValue(template["Horizontal"].toLowerCase()).select();
                else
                    $find("<%= rcbColumnHrStyle.ClientID %>").findItemByValue("default").select();

                if($.defaultVal(template["Vertical"],'') != '')
                    $find("<%= rcbColumnVerStyle.ClientID %>").findItemByValue(template["Vertical"].toLowerCase()).select();
                else
                    $find("<%= rcbColumnVerStyle.ClientID %>").findItemByValue("notset").select();
         

                $find("<%= txtColumnCss.ClientID %>").set_value(template["Css"]);
                $("#divMergeTemplate").ShowModal();
            }

        function saveMergeData()
        {
            var template={"Horizontal":$find("<%= rcbColumnHrStyle.ClientID %>").get_value(),"Vertical": $find("<%= rcbColumnVerStyle.ClientID %>").get_value(),"Css":$find("<%= txtColumnCss.ClientID %>").get_value()};
            $(currentMergerLink).data('template',template);
            $("#divMergeTemplate").HideModal();
            return false;
        }
        function deleteMergeItem(tdClose)
        {
            $(tdClose).closest('tr').remove();
        }
        function saveGroupData(){
            $("#divGroupTemplate").HideModal()
            currentGroupItem.data("template",Editors["txtGroup"].getValue());
        }
        function createDefaultTmplHtml(a){
            var val=Editors["txtGroup"].getValue();
            var hdr=($(a).prev().html().indexOf("Header")>-1);
            Editors["txtGroup"].setValue("");
            window.setTimeout(function(){
                Editors["txtGroup"].setValue(adjustTemplateCells(val,hdr,true));
                autoFormatEditor("txtGroup");
            },100);
                
        }
        function adjustTemplateCells(str,hdr,create){
            var c=$("#tbl").children().length;
            if($.isEmpty(str)&& create===true){                  
                if(hdr===true)
                    return "<td colspan='"+c+"'></td>";
                else{
                    str="";
                    for(var i=0;i<c;i++)
                        str+="<td></td>";
                    return str;
                }
            }
            var tr=$("<tr></tr>");
            tr.append($(str));
            var chCount=0;
            tr.children().each(function(){
                chCount+=($(this).attr("colspan")/1>0?$(this).attr("colspan")/1:1);
            });
            if(tr.children().length>1 && chCount<c)
            {
                for(var i=chCount;i<c;i++)
                    tr.append("<td></td>")
            }
            else if(tr.children().length==1)
                tr.children().attr("colspan",c);
            return tr.html();
        }
        var tbltree = "";


        function showParameterList(cntr) {                
            $(cntr).after($(".Parameters").show());
            return false;
        }
        function toggleSaveRow(){
            var b=$("#<%=chkGridEdit.ClientID%>").checked();
                $('#<%=trSaveBtn.ClientID%>').setDisplay(b)
                if(!b){
                    $("#<%=chkSaveBtn.ClientID%>").checked(false);
                    Reorder_Buttons();
                }
                $("#divAddGridInfo").setDisplay(b);
            }

            function toggleScriptPath(){
                $("#trUrl1,#trUrl2").setDisplay($("#<%=ddlScriptResource.ClientID%>").val()=="Ext")
            }
            function selectUrl(sender, args) {
                var n = args.get_node();
                if (n.get_attributes().getAttribute("IsFile")) {
                    $("#<%=txtExternalScript.ClientID%>").val(n.get_value());
                    $("#divUrlTree").hide();
                }
            }
            function pageLoad() {
           
                InitEditor();
                loadButtonsOrder();
                toggleSaveRow();
                $("#multiSort").multiSelect().refresh(arrSortData);
                if (<%= IsDependent.ToString().ToLower() %>) {
                $("div[title='drag']").hide();
                $("div[title='Delete']").hide();
                $(".DisableRow").show();
                $(".firsttree").hide();
                $(".DisplayName").setEnable(false);
                $(".UserDisplayName").setEnable(false);
                $(".sort").setEnable(false);
                $(".Width").setEnable(false);
                $(".dependent").setEnable(false);
                $("#multiSort").multiSelect().setEnable(false);
                var chk=(<%= IsDependent.ToString().ToLower() %>);
            $('#ContentPlaceHolder1_lboCss').prop('disabled', true).trigger("chosen:updated");
            $('#ContentPlaceHolder1_lboScripts').prop('disabled', true).trigger("chosen:updated");
            $(".tree").hide();
            toggleClass();
            chk=!chk;
                //$(Editors["txtScript"].getWrapperElement()).removeClass("codeDisable").addClass((chk ? "" : "codeDisable"));
                //Editors["txtScript"].setOption("readOnly", (chk ? "" : "nocursor"));

            $(Editors["txtCss"].getWrapperElement()).removeClass("codeDisable").addClass((chk ? "" : "codeDisable"));
            Editors["txtCss"].setOption("readOnly", (chk ? "" : "nocursor"));
            var tcnt=0;
            $('.chkDisable').each(function(){
                tcnt=tcnt/1+1;
                $(this).attr('id','chk-'+tcnt);
                $(this).CheckBoxX();
            });
        }
        else{
            $("div[title='Delete']").show();
        $(".DisableRow").hide();
        }
        toggleParameter('Add');
        toggleParameter('Edit');
        toggleParameter('View');
        toggleParameter('Appr');
        setPopupSize();
        var t=(<%= IsDependent.ToString().ToLower() %>);
        
        var ddlTemplate=$("#<%= ddlTemplates.ClientID %>");
        if(t)
            ToggleEditors(!t);
        else
            ToggleEditors(ddlTemplate.prop('selectedIndex')==0);
        }

        $(document).click(function (e) {

            if ($("#divDataKeys").isVisible() && !$("#divGroupTemplate").isVisible() && !$(e.srcElement).closest("#divDataKeys").exists() && !$("#multiSort").data("dropdownShowing")) {
                $(document.body).append($("#divDataKeys").hide());
                $(".firsttree").append($(".tree").show());
            }

        });
        function Task(type,dispname,userdispname, entitypath, name, title, ID, WFCode,SubXml) {
            return {Type:type, DispName: dispname, UserDispName: $.defaultVal(userdispname,dispname), sort: '', width: '75', EntityPath: entitypath, Name: name, Title: title, ID: '#GUID#', WFCode: WFCode, Status: "", SubXml:SubXml, Settings:{}};
        }

        function TaskListViewModel() {

            var self = this;
            if (dbCols.length <= 0)
                self.tasks = ko.observableArray([]);
            else
                self.tasks = ko.observableArray(dbCols);


            // Operations
            self.addTask = function (type,dispname,userdispname, entitypath, value, title, i18, WFCode,subxml) {
                self.tasks.push(new Task(type,dispname,userdispname, entitypath, value, title, i18, WFCode,subxml));
            };

            self.removeTask = function (task) {
                self.tasks.remove(task);
            };
        }
        var myModel = new TaskListViewModel();
        ko.applyBindings(myModel, document.getElementById('tbl'));



        function DDlChanged(ddl) {
            ddl = $(ddl); var txt = $(ddl).parent().find('.sort');
            if (txt.hasClass("sort"))
                txt.val(ddl.val());
        }

        function ShowDdl(txt) {
            txt = $(txt);
            var ddl = "";
            ddl = $(".sortddl");
            var txtOld = ddl.parent().find('.sort');
            if (txtOld.hasClass("sort"))
                txtOld.show();
            txt.hide().parent().append(ddl.show());
            if (txt.val() != "")
                ddl.val(txt.val())
            else
                ddl.val(0);
        }

        function showRecord(sender, eventArgs) {
           
            if ($.isEmpty(eventArgs.get_node().get_attributes().getAttribute("FieldID")))
                return;
            dispname = eventArgs.get_node().get_text();
           
            var value = eventArgs.get_node().get_attributes().getAttribute("FieldID");
            var node = eventArgs.get_node();
            var s = "";
            var title = "";
            var mainParent = "";
            var currentObject = node.get_parent();
            var IsWorkflow = eventArgs.get_node().get_attributes().getAttribute("IsWorkflow");
            var wfCode = "";
            mainParent = $find("<%= tvRelated.ClientID %>").get_nodes().getItem(0).get_text();
            var fieldpath= eventArgs.get_node().get_attributes().getAttribute("FieldName");;
            if(eventArgs.get_node().get_attributes().getAttribute("IsMultiCSV")=="1")
                currentObject = currentObject.get_parent();
            while (currentObject.get_level() > 0) {
                if (s != "") {
                    s = currentObject.get_attributes().getAttribute("FieldName") + ":" + currentObject.get_attributes().getAttribute('ParentTable') + ">" + s;
                    title = currentObject.get_text() + "\\" + title;
                }
                else {
                    s = currentObject.get_attributes().getAttribute("FieldName") + ":" + currentObject.get_attributes().getAttribute('ParentTable');
                    title = currentObject.get_text();
                }
                fieldpath=currentObject.get_attributes().getAttribute("FieldName") + "." +fieldpath;
                currentObject = currentObject.get_parent();
            }

            if($("#divGroupTemplate").isVisible()){
                Editors["txtGroup"].replaceRange("#=Field."+fieldpath+"#", Editors["txtGroup"].getCursor());
                Editors["txtGroup"].focus();
                return;
            }
            entitypath = s;

            if (title != "")
                title = currentObject.get_text() + "\\" + title + "\\" + dispname;
            else
                title = currentObject.get_text() + "\\" + dispname;
            if (IsWorkflow == "1")
                wfCode = eventArgs.get_node().get_attributes().getAttribute("ParentTable");

            i18No = "#GUID#";
            var userDispname=dispname;
            if($.QS("_h")=="1")
                userDispname=eventArgs.get_node().get_attributes().getAttribute("FieldName").toLowerCase();
            myModel.addTask("",dispname,userDispname, entitypath, value, title, i18No, wfCode,"");
            i18No = "";
            $(".DisableRow").hide();
        }


        var ReportId;
        var SaveAsReportId = "";
        function OnClientTabSelected(sender, args) {
            var tab = args.get_tab();
            var value = tab.get_value();
            if (value.toLowerCase() == "fields") {
                $(".tree").prev().show();
                $(".firsttree").append($(".tree").show());
                $(document.body).append($("#common").hide());
            }
            else if (value.toLowerCase() == "script" || value.toLowerCase() == "serverscript" || value.toLowerCase() == "css" || value.toLowerCase() == "layout") {
                autoFormatEditor("txt"+value);
                var t=(<%= IsDependent.ToString().ToLower() %>);
                if(t)
                    ToggleEditors(!t);
                if(value.toLowerCase() == "script" || value.toLowerCase() == "serverscript" ){
                    var ifr = $("#" + (value.toLowerCase() == "script" ? "<%=ifrExprEditor.ClientID%>" : "<%=ifrServerExprEditor.ClientID%>"));
                    if (ifr[0] && ifr[0].contentWindow && typeof ifr[0].contentWindow.repaintSplitter == "function")
                        ifr[0].contentWindow.repaintSplitter();
                }

            }
    }



    function saveColinfoXml(){
        var fieldInofXml = "<Layout><Grid Id=\"" + $.QS("EID") + "\"><ColInfo>";
        $("#tbl").find('TR').each(function () { 
            if($.isEmpty($(this).find('#hdnSubqueryXml').val()))
                fieldInofXml += createColInfoXml($(this));
            else
                fieldInofXml +=createSubFilterXml($(this))
                        
        });
        fieldInofXml += "</ColInfo></Grid></Layout>";

        parent.saveColXml(fieldInofXml);
    }
    function GetGroupXml(){
        var lvl="";
        if( $find('<%= rntGroupLevel.ClientID %>'))
            lvl=$find('<%= rntGroupLevel.ClientID %>').get_value();
        var xml="<GridGroup Level=\""+lvl+"\" HideGroupDetails=\"" + ($('#<%= chkHideGroupDetails.ClientID %>').checked()?1:0) + "\">";
        $("#tblGroupSettings").find(".group-item").each(function(){
            var row=$(this);
            var f=$.encodeXml(row.find(".group-field").val(),true);
            if($.isEmpty(f))
                return false;
            xml+='<Group Field="'+f+'" Sort="'+row.find(".group-sort").val()+'">'
            xml+='<GroupHeader>'+$.encodeXml(adjustTemplateCells(row.find("._hdr").data("template"),true))+'</GroupHeader>'
            xml+='<GroupFooter>'+$.encodeXml(adjustTemplateCells(row.find("._ftr").data("template")))+'</GroupFooter>'
            xml+='</Group>'
        });
        xml +="</GridGroup>";
        return xml;
    }
    function GetColumnMergeXml(){
        var lvl="";
        var xml="<GridColumnGroup  HideMergeDetails=\"" + ($('#<%= chkColumnMerging.ClientID %>').checked()?1:0) + "\">";
        $("#tblMergeSettings").find(".merge-item").each(function(){
            var row=$(this);
            var template=row.find("._hdr").data("template");
            if($.defaultVal(template,'') == '')
                template={"Horizontal":"","Vertical":"","Css":""};
            var f=$.encodeXml(row.find(".merge-name").val(),true);
            if($.isEmpty(f))
                return false;
            xml+='<ColumnGroup ColumnName="'+f+'" ColumnValue="'+row.find(".merge-value").val()+'"  ParentColumn="'+row.find(".merge-parent").val()+'" Horizontal="'+$.encodeXml(template.Horizontal,true)+'" Vertical="'+$.encodeXml(template.Vertical,true)+'" Css="'+$.encodeXml(template.Css,true)+'" />'
        });
        xml +="</GridColumnGroup>";
        return xml;
    }
    function createXml(btn, mode) {

        arrColInfo = [];
        var error = "";

        if (mode.toLowerCase() == "main") {
            var fieldInofXml = "<ColInfo>";

            var ParamsInfoXml = "";

            if (<%= IsDependent.ToString().ToLower() %>)
                    fieldInofXml += CreateNoColXml();
            else
                $("#tbl").find('TR').each(function () { 
                    if($(this).data('coltype')=="subquery")
                        fieldInofXml += createSubFilterXml($(this));
                    else
                        fieldInofXml +=createColInfoXml($(this))
                        
                });

            fieldInofXml += "</ColInfo>";
            var dataKeyXml = GetDataKeys();
            var groupInfoXml=GetGroupXml();
            var buttons = GetButtonsXml();
            var  mergeXml=GetColumnMergeXml();
            var recordCnt=0,defnewrec=0,defmaxrec=0,treeLevel=0,frozenCount=0;
            
            if( $find('<%= txtnRecordCount.ClientID %>'))
                recordCnt=$find('<%= txtnRecordCount.ClientID %>').get_value();
            if( $find('<%= txtFrozen.ClientID %>'))
                frozenCount=$find('<%= txtFrozen.ClientID %>').get_value();
                if( $find('<%= txtTreeLevel.ClientID %>'))
                treeLevel=$find('<%= txtTreeLevel.ClientID %>').get_value();
            
            if( $find('<%= txtDefaultNewRec.ClientID %>'))
                defnewrec=$find('<%= txtDefaultNewRec.ClientID %>').get_value();
            if( $find('<%= txtDefaultMaxRec.ClientID %>'))
                defmaxrec=$find('<%= txtDefaultMaxRec.ClientID %>').get_value();
            var finalXml = "<Layout ScriptId=\"" + $.defaultVal($("#<%= ddlScriptResource.ClientID %>").val() == "Ext" ? $("#<%= txtExternalScript.ClientID %>").val() + "," +  $("#<%= txtExternalScriptClass.ClientID %>").val() : $("#<%= ddlScriptResource.ClientID %>").val(), "") + "\"  ><Grid FilterID=\"" + $('#<%= ddlFilter.ClientID %>').val() + "\" EnforceFilter=\"" + $('#<%= ddlEnforceFilter.ClientID %>').val() + "\" DisableWF=\"" + ($('#<%= chkIsWorkflow.ClientID %>').checked() ? 1 : 0) + "\" SpecificWF=\"" + $('#<%= ddlApplicableWF.ClientID %>').val() + "\" Id=\"" + $.QS("EID") + "\" HtmlId=\"dgData\" EnablePaging=\"" + $('#<%= chkEnablePaging.ClientID %>').checked() + "\" EnableGrouping=\"" + $('#<%= chkEnableGroup.ClientID %>').checked() + "\"  EnableTreeview=\"" + $('#<%= chkTreeview.ClientID %>').checked() + "\" TreeLevel=\""+treeLevel+"\"  HideMultiSelect=\"" + $('#<%= chkHideSelection.ClientID %>').checked() + "\"  HideSelectColumn=\"" + $('#<%= chkHideColCheck.ClientID %>').checked() + "\" ShowFooter=\"" + $('#<%= chkShowFooter.ClientID %>').checked() + "\" ShowHeader=\"" + $('#<%= chkShowHeader.ClientID %>').checked() + "\" ShowFilter=\"" + $('#<%= chkShowFilter.ClientID %>').checked() + "\" RenderFilterList=\"" + $('#<%= chkRenderFilterList.ClientID %>').checked() + "\" ExpandAdvancedFilter=\"" + $('#<%= chkExpandFilter.ClientID %>').checked() + "\" ShowSetting=\"" + $('#<%= chkShowSettings.ClientID %>').checked() + "\" AllowScroll=\"" + $('#<%= chkScroll.ClientID %>').checked() + "\" PercentGrid=\"" + $('#<%= chkPercent.ClientID %>').checked() + "\" WrapCell=\"" + $('#<%= chkWrapCell.ClientID %>').checked() + "\" DisableBind=\"" + $('#<%= chkDisableBind.ClientID %>').checked() + "\"  EnableGridEdit=\"" + $('#<%= chkGridEdit.ClientID %>').checked() + "\" EnableGridEdit_NewRec=\"" + $('#<%= chkEnableNewRec.ClientID %>').checked() + "\" EnableGridEdit_CellMode=\"" + $('#<%= chkCellEditMode.ClientID %>').checked() + "\" GridEdit_DefaultRec=\"" +defnewrec + "\" GridEdit_MaxRec=\"" + defmaxrec + "\" RecordCount =\"" + recordCnt + "\" FrozenCount =\"" + frozenCount + "\" >" + dataKeyXml + buttons + fieldInofXml + groupInfoXml +mergeXml +"</Grid>";
            if (<%= (!IsDependent).ToString().ToLower() %>){
                finalXml += "<LayoutHtml TemplateID=\"" + $("#<%= ddlTemplates.ClientID %>").val() + "\" >" + $.encodeXml(Editors["txtLayout"].getValue()) + "</LayoutHtml>";
            var items = ""; $($("#<%= lboScripts.ClientID %>").getSelectionOrder()).each(function () { items += "<Item>" + this + "</Item>" });
            finalXml += "<LayoutScript><Variables>" + getVarXml("<%=ifrExprEditor.ClientID%>") + "</Variables><External>" + items + "</External><Internal>" + $.encodeXml($("#<%=ifrExprEditor.ClientID%>")[0].contentWindow.scriptEditor.getValue()) + "</Internal></LayoutScript>";
            items = ""; $($("#<%= lboCss.ClientID %>").getSelectionOrder()).each(function () { items += "<Item>" + this + "</Item>" });
            finalXml += "<LayoutCss><External>" + items + "</External><Internal>" +$.encodeXml(Editors["txtCss"].getValue()) + "</Internal></LayoutCss>";
            finalXml += "<ServerScript><Variables>" + getVarXml("<%=ifrServerExprEditor.ClientID%>") + "</Variables><Internal>" + $.encodeXml($("#<%=ifrServerExprEditor.ClientID%>")[0].contentWindow.scriptEditor.getValue()) + "</Internal></ServerScript>";
        }
        var iframe = document.getElementById("<%=ifrmCriteria.ClientID%>");
        var criteria = "";
        if (iframe && iframe.contentWindow && typeof iframe.contentWindow.createXml == "function")
            finalXml += "<DefaultFilter>"+iframe.contentWindow.createXml(null, "")+"</DefaultFilter>";

        var applFilters="";
        var chkList = $("#<%= chklFilters.ClientID %>");
        chkList.find('input').each(function () {
            if ($(this).checked()) {
                if($(this).val()=="ALLFILTERS"){
                    applFilters="all";
                    return false;
                }
                applFilters+="<AF>"+$(this).val()+"</AF>"
            }
        });
        finalXml += "<ApplicableFilters"+(applFilters=="all"?" All=\"1\"":"")+">";
        if(applFilters!="all")
            finalXml+=applFilters;
        finalXml += "</ApplicableFilters>";

        finalXml += "</Layout>";

        var data = new Object();
        data["Type"] = "SaveGridView";
        data["@LayoutData"] = finalXml;
        data["@EntityId"] = $.QS("EID");
        data["@LayoutId"] = ($('#divViewDetails').data('Mode') == "SaveAs" ? "" : ReportId);
        data["@ModuleId"] = $.QS("Module");
        data["@LayoutName"] = $('#<%= txtViewName.ClientID %>').val();
            data["@Tag"] = $('#<%= txtTag.ClientID %>').val();
        if($.QS('Islookup') == "1")
            data["@LayoutType"] = "SearchList";
        else 
            data["@LayoutType"] = "Grid";
        data["@IsActive"] = 1;
        data["@SystemDefined"] = 1;
        data["@Description"] = $('#<%= txtDesc.ClientID %>').val();
        data["@FormLayout"] = $.QS("FromLayout");
        data["@TableName"] = $.QS("TableName");
        data["@ResourceVersion"] = $.defaultVal($('#<%= txtResVersion.ClientID %>').val(),0);
                    
            data["@RefID"] = $.QS("RefID");
            data["@IsDependent"] = <%= IsDependent.ToString().ToLower() %>;
        data["PageType"]=$.QS("PageType");

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
        PageMethods.Execute(data, arrRoles, Permission, function (result) { $.Notify(false); OnExecuteSuccess(result); }, function (d) { $.Notify({ Message: "Error Occured.", NotifyOnly: true }); });
        layoutId = data["@LayoutId"];

    }

    return false;
    }

    function getVarXml(id) {
        VariablesList = $("#"+id)[0].contentWindow.VariablesList;
        return  $("#"+id)[0].contentWindow.GetVarXml(VariablesList);
    }

    function GetButtonsXml() {
        var buttons = "";
        var btnsave = ($("#<%= chkSaveBtn.ClientID %>").checked() ? 1 : 0);
        var btnAdd = ($("#<%= chkAdd.ClientID %>").checked() ? 1 : 0);
        var btnEdit = ($("#<%= chkEdit.ClientID %>").checked() ? 1 : 0);
        var btnView = ($("#<%= chkView.ClientID %>").checked() ? 1 : 0);
        var btnDelete = ($("#<%= chkDelete.ClientID %>").checked() ? 1 : 0);
        var btnOnDemand = ($("#<%= chkOnDemand.ClientID %>").checked() ? 1 : 0);
        var btnApproval = ($("#<%= chkApproval.ClientID %>").checked() ? 1 : 0);
        var btnClose = ($("#<%= chkClose.ClientID %>").checked() ? 1 : 0);


        var btnAddtext = $.encodeXml($("#<%= txtAddName.ClientID %>").val(), true);
        var btnEdittext = $.encodeXml($("#<%= txtEditName.ClientID %>").val(), true);
        var btnViewtext = $.encodeXml($("#<%= txtPreViewName.ClientID %>").val(), true);
        var btnDeletetext = $.encodeXml($("#<%= txtDeleteName.ClientID %>").val(), true);
        var btnSavetext = $.encodeXml($("#<%= txtSaveName.ClientID %>").val(), true);
        var btnClosetext = $.encodeXml($("#<%= txtClose.ClientID %>").val(), true);

        var btnAddForm = $.encodeXml($("#<%= txtAddForm.ClientID %>").val(), true);
        var btnEditForm = $.encodeXml($("#<%= txtEditForm.ClientID %>").val(), true);
        var btnViewForm = $.encodeXml($("#<%= txtViewForm.ClientID %>").val(), true);
        var btnApprovalForm = $.encodeXml($("#<%= txtApprovalForm.ClientID %>").val(), true);

        var btnOnDemandtext = $.encodeXml($("#<%= txtOnDemandName.ClientID %>").val(), true);
        var btnApprovaltext = $.encodeXml($("#<%= txtApprovalWorkflow.ClientID %>").val(), true);

        var btnAddParameter = $("#<%= chkAdd.ClientID %>").checked() ?$.encodeXml($("#<%= txtAddParameter.ClientID %>").val(), true):"";
        var btnEditParameter =$("#<%= chkEdit.ClientID %>").checked() ? $.encodeXml($("#<%= txtEditParameter.ClientID %>").val(), true):"";
        var btnViewParameter =$("#<%= chkView.ClientID %>").checked() ? $.encodeXml($("#<%= txtViewParameter.ClientID %>").val(), true):"";
        var btnApprParameter =$("#<%= chkApproval.ClientID %>").checked() ? $.encodeXml($("#<%= txtApprovalParameter.ClientID %>").val(), true):"";
        
        var btnAddLoc = $("#<%= chkAdd.ClientID %>").checked() ?$.encodeXml($("#<%= txtAddSetting.ClientID %>").val(), true):"";
        var btnEditLoc =$("#<%= chkEdit.ClientID %>").checked() ? $.encodeXml($("#<%= txtEditSetting.ClientID %>").val(), true):"";
        var btnViewLoc =$("#<%= chkView.ClientID %>").checked() ? $.encodeXml($("#<%= txtViewSetting.ClientID %>").val(), true):"";
        var btnApprLoc =$("#<%= chkApproval.ClientID %>").checked() ? $.encodeXml($("#<%= txtApprovalSetting.ClientID %>").val(), true):"";

        btnAddLoc=(btnAddLoc=="Popup"?$("#<%= txtAddSetting.ClientID %>").closest("TD").find(".wd").val()+"|"+$("#<%= txtAddSetting.ClientID %>").closest("TD").find(".ht").val():btnAddLoc);
        btnEditLoc=(btnEditLoc=="Popup"?$("#<%= txtEditSetting.ClientID %>").closest("TD").find(".wd").val()+"|"+$("#<%= txtEditSetting.ClientID %>").closest("TD").find(".ht").val():btnEditLoc);
        btnViewLoc=(btnViewLoc=="Popup"?$("#<%= txtViewSetting.ClientID %>").closest("TD").find(".wd").val()+"|"+$("#<%= txtViewSetting.ClientID %>").closest("TD").find(".ht").val():btnViewLoc);
        btnApprLoc=(btnApprLoc=="Popup"?$("#<%= txtApprovalSetting.ClientID %>").closest("TD").find(".wd").val()+"|"+$("#<%= txtApprovalSetting.ClientID %>").closest("TD").find(".ht").val():btnApprLoc);


        buttons += "<Buttons ShowSave=\"" + btnsave + "\" ShowSaveText=\"" + btnSavetext + "\"  ShowAdd=\"" + btnAdd + "\" ShowAddText=\"" + btnAddtext + "\"  ShowAddForm=\"" + btnAddForm + "\" ShowEdit=\"" + btnEdit + "\" ShowEditForm=\"" + btnEditForm + "\" ShowEditText=\"" + btnEdittext + "\" ShowView=\"" + btnView + "\" ShowViewForm=\"" + btnViewForm + "\" ShowViewText=\"" + btnViewtext + "\" ShowDelete=\"" + btnDelete + "\" ShowDeleteText=\"" + btnDeletetext + "\" ShowOnDemand=\"" + btnOnDemand + "\" ShowOnDemandText=\"" + btnOnDemandtext + "\" ShowApproval=\"" + btnApproval + "\" ShowApprovalText=\"" + btnApprovaltext + "\" ShowApprovalForm=\"" + btnApprovalForm + "\" AddParameter=\"" + btnAddParameter + "\" EditParameter=\"" + btnEditParameter + "\" ViewParameter=\"" + btnViewParameter + "\" ApprovalParameter=\""+btnApprParameter+"\"   AddLocation=\"" + btnAddLoc + "\" EditLocation=\"" + btnEditLoc + "\" ViewLocation=\"" + btnViewLoc + "\" ApprovalLocation=\""+btnApprLoc+"\" ShowClose=\"" + btnClose + "\" ShowCloseText=\"" + btnClosetext + "\"  >";
       
        $("#divActionButtons").find('input').each(function () {
            if ($(this).checked())
                buttons += " <Button ID=\"" + $(this).attr('ID') + "\" />";
        });
        buttons += "</Buttons>";

        buttons+="<ButtonOrder>";
        $("#btn_sortable").find("li").each(function(){
            var iscutom=$.defaultVal($(this).attr("custombutton"),"0");
            var guid=$.defaultVal($(this).attr("guid"),"0");
            if(iscutom == "0")
                buttons+="<Item Value=\""+$(this).html()+"\" CustomButton=\"0\" />";
            else
                buttons+="<Item Value=\""+guid+"\" CustomButton=\"1\" />";
                
        });
        buttons+="</ButtonOrder>";
        return buttons;
    }

    function GetDataKeys() {
        var datakeys = "<Datakeys>";
        var sortData = $("#multiSort").multiSelect().getItems();
        for (var l = 0; l < sortData.length; l++) {
            var sortItem = $(sortData[l]);
            var fid = $.defaultVal(sortItem.data("FID"), "");
            var entitypath = $.defaultVal(sortItem.data("EntityPath"), "");
            var isworkflow = $.defaultVal(sortItem.data("IsWFItem"), "");
            var wfCode = $.defaultVal(sortItem.data("WFCode"), "");
            datakeys += " <Cols Name=\"" + fid + "\" EntityPath=\"" + entitypath + "\" IsWFItem=\"" + isworkflow + "\" WFCode=\"" + wfCode + "\"  />";
        }

        return datakeys + "</Datakeys>";
    }

    function OnExecuteSuccess(result) {
        //{ ViewID: "10", Type: "TBL_EMPLOYEEQUALIFICATION", ViewName: "Qualification new", Cols: [{ Title: "Qualification new", EntityPath: "", Name: "7", Width: 250 }, { Title: "Description new", EntityPath: "", Name: "8", Width: 200 }, { Title: "Period", EntityPath: "", Name: "9", Width: 150 }] };
        if (result.Success == "Success") {
            if (result.Type == "SaveGridView") {                

                var hdnReportName = $("#<%= hdnReportName.ClientID %>");
                var hdnDesc = $("#<%= hdnDesc.ClientID %>");
                var ReportName = $("#<%= txtViewName.ClientID %>");
                var Desc = $("#<%= txtDesc.ClientID %>");
                hdnDesc.val(Desc.val());
                hdnReportName.val(ReportName.val());
                $("#<%= lblTitle.ClientID %>").html(result["@LayoutName"]);
                ReportId = result["@LayoutId"];

                if ($.QS("FromLayout") == "1") {
                    window.opener.addToViewList({ ViewID: result["@LayoutId"], Type: $.QS("EID").toUpperCase(), ViewName: result["@LayoutName"], Cols: arrColInfo });
                    window.close();

                }
                else {
                    $('#divViewDetails').HideModal();

                }
                RefreshParent();
            }
        }
        else{
            if (result["Locked"]) {
                alert("View is locked by another user")
                return;
            }
            alert(result.ErrorMessage);
        }
    }



    var arrColInfo = [];
    function createSettingXml(row)
    {
        var sxml=[];
        sxml= row.data("sxml");
        var settingxml="<Setting  Hidden=\""+$.encodeXml(sxml["Hidden"],true)+"\" IsLink=\""+$.encodeXml(sxml["IsLink"],true)+"\" LinkFunction=\""+$.encodeXml(sxml["LinkFunction"],true)+"\"  Prefix=\""+$.encodeXml(sxml["Prefix"],true)+"\" GroupName=\""+$.encodeXml(sxml["GroupName"],true)+"\" FilterOption=\""+$.encodeXml(sxml["FilterOption"],true)+"\" >  <HeaderStyle CssClass=\""+$.encodeXml(sxml["HeaderCss"],true)+"\" HorizontalAlign=\""+$.encodeXml(sxml["HeaderHorizontal"],true)+"\" VerticalAlign=\""+$.encodeXml(sxml["HeaderVertical"],true)+"\" Height=\""+$.encodeXml(sxml["HeaderHeight"],true)+"\"    />";
        settingxml+="<ItemStyle CssClass=\""+$.encodeXml(sxml["ItemCss"],true)+"\" HorizontalAlign=\""+$.encodeXml(sxml["ItemHorizontal"],true)+"\" VerticalAlign=\""+$.encodeXml(sxml["ItemVertical"],true)+"\" Height=\""+$.encodeXml(sxml["ItemHeight"],true)+"\" />";

        settingxml+="<Formatting>"+$.encodeXml(sxml["Formatting"])+"</Formatting>";
        settingxml+="<ItemTemplate>"+$.encodeXml(sxml["ItemTemplate"])+"</ItemTemplate>";
        settingxml+="<EditTemplate>"+$.encodeXml(sxml["EditTemplate"])+"</EditTemplate>";
        settingxml+="<FooterTemplate>"+$.encodeXml(sxml["FooterTemplate"])+"</FooterTemplate>";
        settingxml+="</Setting>";
        return settingxml;
    }


    function createColInfoXml(row) {
        var rowxml = '<Cols Type="'+$.defaultVal(row.data("coltype"),"")+'" ';
        var title=row.find(".UserDisplayName").val();
        if($.QS("_h")=="1")
            title=title.Replace(" ","").toLowerCase();

           
        rowxml += " Name=\"" + row.find(".DisplayName").attr('FieldID') + "\" EntityPath=\"" + row.find(".DisplayName").attr('EntityPath') + "\"" + " Title=\"" + $.encodeXml(title, true) + "\"" + " Sort=\"" + row.find(".sort").val() + "\"" + " Width=\"" + row.find(".Width").val() + "\" ID=\"" + row.find(".i18No").val() + "\" WFCode=\"" + row.find(".WFCode").val() + "\" Status=\"" + 1 + "\"" ; 
      
            var settingxml=createSettingXml(row);
            var sxml=[];
            sxml= row.data("sxml");
            rowxml+=" Join=\""+$.encodeXml(sxml["Join"],true)+"\" JoinLogic=\""+$.encodeXml(sxml["JoinLogic"],true)+"\" FieldLogic=\""+$.encodeXml(sxml["FieldLogic"],true)+"\"  RequiredApp=\""+$.encodeXml(sxml["RequiredApp"],true)+"\"  ColDataType=\""+$.encodeXml(sxml["ColDataType"],true)+"\"  EnableColEditing=\""+$.encodeXml(sxml["EnableColEditing"],true)+"\"  >";
            rowxml+=settingxml;
        
        rowxml+="</Cols>";
        arrColInfo.push({ Title: row.find(".UserDisplayName").val(), EntityPath: row.find(".DisplayName").attr('EntityPath'), Name: row.find(".DisplayName").attr('FieldID'), Width: row.find(".Width").val() ,SubXml:''});
        return rowxml;
    }
    function createSubFilterXml(row) {
        var rowxml = '<Cols Type="subquery" ';
        var title=row.find(".UserDisplayName").val();
        if($.QS("_h")=="1")
            title=title.Replace(" ","").toLowerCase();
        rowxml += " Title=\"" + $.encodeXml(title, true) + "\"" + " Sort=\"" + row.find(".sort").val() + "\" Width=\"" + row.find(".Width").val() + "\" ID=\"" + row.find(".i18No").val() + "\"  Status=\"" + 1 + "\"" + ' ';
        if($.QS("_h")!="1"){               
            var sxml=[];
            sxml= row.data("sxml");
            rowxml+=" Join=\""+$.encodeXml(sxml["Join"],true)+"\" JoinLogic=\""+$.encodeXml(sxml["JoinLogic"],true)+"\" FieldLogic=\""+$.encodeXml(sxml["FieldLogic"],true)+"\"  RequiredApp=\""+$.encodeXml(sxml["RequiredApp"],true)+"\" ColDataType=\""+$.encodeXml(sxml["ColDataType"],true)+"\"  EnableColEditing=\""+$.encodeXml(sxml["EnableColEditing"],true)+"\"  ";
        }
        rowxml+=" >";
        var subxml=$.defaultVal(row.find("#hdnSubqueryXml").val(), '');
        rowxml+=subxml;
        if($.QS("_h")!="1"){
            var settingxml=createSettingXml(row);
            rowxml+=settingxml;
        }
        rowxml+="</Cols>";
        arrColInfo.push({ Title: row.find(".UserDisplayName").val(), EntityPath: row.find(".DisplayName").attr('EntityPath'), Name: row.find(".DisplayName").attr('FieldID'), Width: row.find(".Width").val(),SubXml:subxml });
        return rowxml;
    }



    function ShowGridProps(mode) {
        var hdnReportName = $("#<%= hdnReportName.ClientID %>");
        var hdnDesc = $("#<%= hdnDesc.ClientID %>");
        var ReportName = $("#<%= txtViewName.ClientID %>");
        var Desc = $("#<%= txtDesc.ClientID %>");
        ReportName.val(hdnReportName.val());
        Desc.val(hdnDesc.val());
        if (mode == "Save") {
            if (ReportId == "") {

                $('#divViewDetails').data('Mode', 'Save');
                $('#divViewDetails').ShowModal();
            } else {

                $('#divViewDetails').data('Mode', 'Save');
                createXml(null, 'main');
            }
        }
        else if (mode == "SaveAs") {
            ReportName.val('Copy-' + hdnReportName.val());
            Desc.val(hdnDesc.val());
            $('#divViewDetails').data('Mode', 'SaveAs');
            $('#divViewDetails').ShowModal();
        }
        else if (mode == "Prop") {
            $('#divViewDetails').data('Mode', 'Prop');
            $('#divViewDetails').ShowModal();
        }
        return false;
    }
    function OnClientTabSelected1(sender, args) {
        var tab = args.get_tab();
        var value = tab.get_value();
        if (value.toLowerCase() == "roles") {
            $("#<%= ifrmRole.ClientID%>")[0].contentWindow.showDiv('Role');
        }
        else if (value.toLowerCase() == "permission") {
            $("#<%= ifrmRole.ClientID%>")[0].contentWindow.showDiv('Permission');
            }
    }

    function TreeChanged(sender, eventArgs) {
        if($.QS("_h")=="1"||$("#divGroupTemplate").isVisible())
            return;
        if ($find("<%= TabGridFilter.ClientID %>").get_selectedTab().get_value() != "Actions")
            return;
        if ($.isEmpty(eventArgs.get_node().get_attributes().getAttribute("FieldID")))
            return;
        var valueId = eventArgs.get_node().get_attributes().getAttribute("FieldID");

        //var valueId = eventArgs.get_node().get_value();
        var dispname = eventArgs.get_node().get_text();
        var currentObject = eventArgs.get_node().get_parent();
        if(eventArgs.get_node().get_attributes().getAttribute("IsMultiCSV")=="1")
            currentObject = currentObject.get_parent();
        var fieldpath= eventArgs.get_node().get_attributes().getAttribute("FieldName");;
        var entitypath = "";
        while (currentObject.get_level() > 0) {
            if (entitypath != "") {
                entitypath = currentObject.get_attributes().getAttribute("FieldName") + ":" + currentObject.get_attributes().getAttribute('ParentTable') + ">" + entitypath;
                title = currentObject.get_text() + "\\" + title;
            }
            else {
                entitypath = currentObject.get_attributes().getAttribute("FieldName") + ":" + currentObject.get_attributes().getAttribute('ParentTable');
                title = currentObject.get_text();
            }
            fieldpath=currentObject.get_attributes().getAttribute("FieldName") + "." +fieldpath;
            currentObject = currentObject.get_parent();

        }

        var IsWorkflow = eventArgs.get_node().get_attributes().getAttribute("IsWorkflow");
        var wfCode = "";
        if (IsWorkflow == "1")
            wfCode = eventArgs.get_node().get_attributes().getAttribute("ParentTable");
        if($("#divDataKeys").data("fromMulti"))
            $("#multiSort").multiSelect().addItem({ Text: dispname, FID: valueId, EntityPath: entitypath, IsWFItem: IsWorkflow, WFCode: wfCode });//"<span data-fid='" + valueId + "' data-entity-path='" + entitypath + "'>" + dispname + "</span>");
        else
            currentGroupItem.val("Field."+fieldpath);
        $(document.body).append($(".tree").hide());
        $(document.body).append($("#divDataKeys").hide());
        $(".firsttree").append($(".tree").show());

    }

    function InitEditor() {
        if($.QS("_h")=="1")
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

        Editors["txtGroup"] =  CodeMirror.fromTextArea($("#divGroupTemplate").find("textarea")[0], {
            mode: "text/html",
            addModeClass: true,
            autoCloseTags: true
        });
   
    }


    function DisableRow(chk) {
        var chkRec = $(chk).checked();
        var tr = $(chk).closest('TR');
        var arrTd = $(tr).find('TD');
        for (var i = 0; i < 5; i++) {
            if (chkRec) {
                if ($(arrTd[i]).node(0).hasClass("DisableRow"))
                    $(arrTd[i]).node(0).removeClass("DisableRow");
            }
            else
                $(arrTd[i]).node(0).addClass("DisableRow");
        }

    }

    function toggleClass() {
        var arrTr = $("#tbl").find('TR');
        for (var i = 0; i < arrTr.length; i++) {
            var chkRec = $(arrTr[i]).find(".DisableRow").checked();
            var arrTd = $(arrTr[i]).find('TD');
            for (var j = 0; j < 5; j++) {
                if (chkRec) {
                    if ($(arrTd[j]).node(0).hasClass("DisableRow"))
                        $(arrTd[j]).node(0).removeClass("DisableRow");
                }
                else
                    $(arrTd[j]).node(0).addClass("DisableRow");
            }
        }
    }

    function CreateNoColXml() {
        var rowxml = "";
        var arrTr = $("#tbl").find('TR');
        for (var i = 0; i < arrTr.length; i++) {
            var chkRec = $(arrTr[i]).find(".DisableRow").checked();
            var row = $(arrTr[i]);
            if (!chkRec) {
                rowxml += '<NoCols ';
                rowxml += " Name=\"" + $.defaultVal(row.find(".DisplayName").attr('FieldID'),row.data("sxml").Prefix) + "\"" + ' />';
            }
        }
        return rowxml;
    }

    function ToggleEditors( chk) {
        if($.QS("_h")=="1")
            return;
        $(Editors["txtLayout"].getWrapperElement()).removeClass("codeDisable").addClass((chk ? "" : "codeDisable"));
        Editors["txtLayout"].setOption("readOnly", (chk ? "" : "nocursor"));
    }

    function autoFormatEditor(ed) {
        if (IsDependent)
            return;
        ed = Editors[ed];
        if (!ed)
            return;
        ed.refresh();
        CodeMirror.commands["selectAll"](ed);
        var range = { from: ed.getCursor(true), to: ed.getCursor(false) }
        ed.autoFormatRange(range.from, range.to);
        ed.setCursor(0);
    }

    function deleteR(row){
        window.setTimeout(function(){ var tr=$(row).closest('tr');
            var arrTr=$("#tbl").find('tr');
            $(tr).remove();
        },10);
    }

    function toggleParameter(action){
        var chk;
        if(action == "Add")
            chk=$("#<%= chkAdd.ClientID %>");
        else if(action == "Edit")
            chk=$("#<%= chkEdit.ClientID %>");
        else if(action == "View")
            chk=$("#<%= chkView.ClientID %>");
        else if(action == "Appr")
            chk=$("#<%= chkApproval.ClientID %>");
    var tr= chk.closest("TR");
    tr.find(".prmtext,.formname,.setting,.spnpopup").setDisplay(chk.checked());
    var st=tr.find(".setting");
    if(st.closest('td').find('.spnpopup').exists())
        st.hide();
    Reorder_Buttons(true);
    
}

function setPopupSize(){
    var addLoc = $("#<%= chkAdd.ClientID %>").checked() ?$("#<%= txtAddSetting.ClientID %>").val().split('|'):"";
    var editLoc =$("#<%= chkEdit.ClientID %>").checked() ? $("#<%= txtEditSetting.ClientID %>").val().split('|'):"";
    var viewLoc =$("#<%= chkView.ClientID %>").checked() ? $("#<%= txtViewSetting.ClientID %>").val().split('|'):"";
    var apprLoc =$("#<%= chkApproval.ClientID %>").checked() ? $("#<%= txtApprovalSetting.ClientID %>").val().split('|'):"";
    if(addLoc.length==2){
        $("#<%= txtAddSetting.ClientID %>").hide().val("Popup").after($("#spnPopup").clone().show().attr("id","spn1"));
        $("#<%= txtAddSetting.ClientID %>").closest("TD").find(".wd").val(addLoc[0]);
        $("#<%= txtAddSetting.ClientID %>").closest("TD").find(".ht").val(addLoc[1])
    }
    if(editLoc.length==2){
        $("#<%= txtEditSetting.ClientID %>").hide().val("Popup").after($("#spnPopup").clone().show().attr("id","spn1"));
        $("#<%= txtEditSetting.ClientID %>").closest("TD").find(".wd").val(editLoc[0]);
        $("#<%= txtEditSetting.ClientID %>").closest("TD").find(".ht").val(editLoc[1])
    }
    if(viewLoc.length==2){
        $("#<%= txtViewSetting.ClientID %>").hide().val("Popup").after($("#spnPopup").clone().show().attr("id","spn1"));
        $("#<%= txtViewSetting.ClientID %>").closest("TD").find(".wd").val(viewLoc[0]);
        $("#<%= txtViewSetting.ClientID %>").closest("TD").find(".ht").val(viewLoc[1])
    }
    if(apprLoc.length==2){
        $("#<%= txtApprovalSetting.ClientID %>").hide().val("Popup").after($("#spnPopup").clone().show().attr("id","spn1"));
        $("#<%= txtApprovalSetting.ClientID %>").closest("TD").find(".wd").val(apprLoc[0]);
        $("#<%= txtApprovalSetting.ClientID %>").closest("TD").find(".ht").val(apprLoc[1])
    }
}


var currentTr;
//subquery in view
function showQuery(btnLink) {
            
    var link = $(btnLink);
    var tr = link.closest('TR');
    currentTr=tr;
    var txtValue = tr.find('.value');
    var subquery = txtValue.val();
    var hiddenfield = txtValue.parent().find('.hdnsubxml');

    var data = new Object();
    data["LID"] = $.QS("ID");
    
    data["PageMode"] = "subquery";
    data["SubMode"] ="E";
    data["SubQuery"] =hiddenfield.val();
    
    if(data["SubQuery"] == ""){
        data["PageType"] = "A";
        data["SubMode"] = "Add";
    }
    else{
        data["PageType"] = "E";
        data["SubMode"] = "E";
    }
            
    var subQ = hiddenfield.val();
    if (subQ.indexOf(" Target=\"") > 0) {
        subQ = subQ.substring(0, subQ.indexOf(" Target=\""));
        subQ = subQ.substring(subQ.indexOf("\"")).Trim('"');
    }
    else
        subQ = "";
    data["sid"]=sid;
    data["EID"] = subQ;
    data["ParamCheck"] = paramCheck;
    data["srno"] = "";
    PageMethods.LoadSubXml(data, OnSucLoadFrame);
    return false;
}
var crntRow;
function showSetting(lnkSetting){
   
    crntRow=$(lnkSetting).closest("tr");
    var a="";
    a=$.defaultVal($(crntRow).data("sxml"),"");
    if(a =={})
        a={"HeaderHorizontal":"Default","HeaderVertical":"NotSet","HeaderCss":"","HeaderHeight":"","ItemHorizontal":"Default","ItemVertical":"NotSet","ItemCss":"","ItemHeight":"","Formatting":"","EditTemplate":"","FooterTemplate":"","ItemTemplate":"","Hidden":"0","Prefix":"","IsLink":"0","LinkFunction":"","Join":"Default","GroupName":"","FilterOption":""};

    if(a != ""){
        OnSucShowPopup(a);
    }
    return false;
}
function OnSucShowPopup(arr) {
    if($.QS("_h")!="1"){

    
        if($.defaultVal(arr["HeaderHorizontal"],'') != '' && $find("<%= rcbHdrHrAlign.ClientID %>"))
            $find("<%= rcbHdrHrAlign.ClientID %>").findItemByValue(arr["HeaderHorizontal"].toLowerCase()).select();

        if($.defaultVal(arr["HeaderVertical"],'') != '' && $find("<%= rcbHdrVrAlign.ClientID %>"))
            $find("<%= rcbHdrVrAlign.ClientID %>").findItemByValue(arr["HeaderVertical"].toLowerCase()).select();
         

        $find("<%= txtHdrColCss.ClientID %>").set_value(arr["HeaderCss"]);
        $find("<%= txtHdrColHeight.ClientID %>").set_value(arr["HeaderHeight"]);

        //item
        if($.defaultVal(arr["ItemHorizontal"],'') != '' && $find("<%= rcbItmHrAlign.ClientID %>"))
            $find("<%= rcbItmHrAlign.ClientID %>").findItemByValue(arr["ItemHorizontal"].toLowerCase()).select();
            
        if($.defaultVal(arr["ItemVertical"],'') != '' && $find("<%= rcbItmVrAlign.ClientID %>"))
            $find("<%= rcbItmVrAlign.ClientID %>").findItemByValue(arr["ItemVertical"].toLowerCase()).select();


        $find("<%= txtItmColCss.ClientID %>").set_value(arr["ItemCss"]);
        $find("<%= txtItmColHeight.ClientID %>").set_value(arr["ItemHeight"]);
           
        //formatting
        $find("<%= txtColFormatting.ClientID %>").set_value(arr["Formatting"]);
        $find("<%= txtEditTemplate.ClientID %>").set_value(arr["EditTemplate"]);
        $find("<%= txtItemTemplate.ClientID %>").set_value(arr["ItemTemplate"]);
        $find("<%= txtFooterTemplate.ClientID %>").set_value(arr["FooterTemplate"]);

        $("#<%= chkHiddenCol.ClientID %>").checked(arr["Hidden"] == "1" ? true:false);
        $("#<%= txtUnqPrefx.ClientID %>").val(arr["Prefix"]);

        $("#<%= chkIsLink.ClientID %>").checked(arr["IsLink"] == "1" ? true:false);
        $("#<%= txtLinkFunction.ClientID %>").val(arr["LinkFunction"]);

        $("#<%= txtGrpName.ClientID %>").val(arr["GroupName"]);
        $("#<%= ddlFilterOption.ClientID %>").val(arr["FilterOption"]);
    }

    if($.defaultVal(arr["Join"],'') != '')
        $find("<%= rcbJoin.ClientID %>").findItemByValue(arr["Join"].toLowerCase()).select();
    $("#txtJoinLogic").val($.defaultVal(arr["JoinLogic"],""));
    var itm=$find("<%= ddlDatatype.ClientID %>").findItemByValue($.defaultVal(arr["ColDataType"],"default"));
    if(itm)
        itm.select();
    $("#chkEnableEditing").checked(arr["EnableColEditing"]=="1");
    $("#txtRequiredApp").val($.defaultVal(arr["RequiredApp"],""));
    $("#txtFieldLogic").val($.defaultVal(arr["FieldLogic"],""));
    ShowFunctionTxt();
    $("#divAccord").tabs("option", "active", 0);
    $("#divAccord").tabs("option","heightStyle", "content");
    $("#divAccord").tabs( "refresh");
    if($.QS("_h")=="1")   
        $("#divFieldOptions").ShowModal();
    else
        $("#divColumnSetting").ShowModal();
    return false;
}
function OnSucLoadFrame(result) {
    var prID = "";
    prID = $.QS("EID");
    var url = "Filters_Add.aspx?PageMode=subquery&WF=" + $.QS("WF") + "&WFEID=" + $.QS("WFEID") + "&PrID=" + prID+"&SID="+sid;
    $('#<%= Iframe1.ClientID %>').attr('src', url);
    $("#divSubquery").show();
}

function saveSubXml(subqueryXml, srno, subquery) {
    hidePopUp();
    dispname = "SubQuery";
    var value = "SubQuery";
    var title = subquery;
    var tr= $(currentTr);
    var txtValue = tr.find('.value');
    var link=tr.find('.query');
    var hiddenfield = txtValue.parent().find('.hdnsubxml');
    link.attr('title',subquery);
    hiddenfield.val(subqueryXml);
    $(".DisableRow").hide();
    return false;
}
function hidePopUp() {
    $("#divSubquery").hide();
    return false;
}
function addSubQuery(){
    
    myModel.addTask("subquery","", "", "", "", "#GUID#", "","","");
    return false;
   
}
function addBlankField(){
    myModel.addTask("expr","", "", "", "", "#GUID#", "","","");
}

function SaveColumnSettings()
{

    //header
    var HdrHrAlign=$.QS("_h")=="1"?"": $find("<%= rcbHdrHrAlign.ClientID %>").get_selectedItem().get_value();
    var HdrVrAlign=$.QS("_h")=="1"?"": $find("<%= rcbHdrVrAlign.ClientID %>").get_selectedItem().get_value();
    var HdrColCss=$.QS("_h")=="1"?"": $find("<%= txtHdrColCss.ClientID %>").get_value();
    var HdrColHeight=$.QS("_h")=="1"?"": $find("<%= txtHdrColHeight.ClientID %>").get_value();
    //item
    var ItmHrAlign=$.QS("_h")=="1"?"": $find("<%= rcbItmHrAlign.ClientID %>").get_selectedItem().get_value();
    var ItmVrAlign=$.QS("_h")=="1"?"": $find("<%= rcbItmVrAlign.ClientID %>").get_selectedItem().get_value();
    var ItmColCss=$.QS("_h")=="1"?"": $find("<%= txtItmColCss.ClientID %>").get_value();
    var ItmColHeight=$.QS("_h")=="1"?"": $find("<%= txtItmColHeight.ClientID %>").get_value();
    //formatting
    var ColFormatting=$.QS("_h")=="1"?"": $find("<%= txtColFormatting.ClientID %>").get_value();
                        

    var chkHidden=$("#<%= chkHiddenCol.ClientID %>").checked() == true?"1":"0";
    var txtPrefx=$("#<%= txtUnqPrefx.ClientID %>").val();

    var txtGrpName=$("#<%= txtGrpName.ClientID %>").val();

    var chkIsLink=$("#<%= chkIsLink.ClientID %>").checked() == true?"1":"0";
    var txtLinkFunstion=$("#<%= txtLinkFunction.ClientID %>").val();

    var join =$find("<%= rcbJoin.ClientID %>").get_selectedItem().get_value();
    var jlogic=$("#txtJoinLogic").val();
    var _sxml={"HeaderHorizontal":HdrHrAlign,"HeaderVertical":HdrVrAlign,"HeaderCss":HdrColCss,"HeaderHeight":HdrColHeight,"ItemHorizontal":ItmHrAlign,
        "ItemVertical":ItmVrAlign,"ItemCss":ItmColCss,"ItemHeight":ItmColHeight,"Formatting":ColFormatting,"EditTemplate":($.QS("_h")=="1"?"": $find("<%= txtEditTemplate.ClientID %>").get_value()),
        "FooterTemplate":($.QS("_h")=="1"?"": $find("<%= txtFooterTemplate.ClientID %>").get_value()),"ItemTemplate":($.QS("_h")=="1"?"": $find("<%= txtItemTemplate.ClientID %>").get_value()),
        "Hidden":chkHidden,"Prefix":txtPrefx,"IsLink":chkIsLink,"LinkFunction":txtLinkFunstion,"Join":join,"JoinLogic":jlogic,
        "ColDataType":($.QS("_h")=="1"?"": $find("<%= ddlDatatype.ClientID %>").get_value()),"EnableColEditing":$("#chkEnableEditing").checked()?1:0,FieldLogic:$("#txtFieldLogic").val(),
        "RequiredApp":$("#txtRequiredApp").val(),"GroupName":txtGrpName,"FilterOption":$("#<%=ddlFilterOption.ClientID %>").val() };

    $(crntRow).data("sxml",_sxml);
    $("#divColumnSetting,#divFieldOptions").HideModal();
    return false;
}
function CloseColumnSettings()
{
    $("#divColumnSetting,#divFieldOptions").HideModal();
    return false;
} 

function loadButtonsOrder(){
    var data="";
    for(var i=0;i<dbBtn_Reorder.length;i++)
    {
        data+="<li  btnname='"+dbBtn_Reorder[i]["BtnName"]+"' custombutton='"+dbBtn_Reorder[i]["CustomButton"]+"' guid='"+dbBtn_Reorder[i]["Guid"]+"' class='ui-state-default'>"+dbBtn_Reorder[i]["BtnName"]+"</li>";
    }
    if(data == "")
        Reorder_Buttons();
    else
        $("#btn_sortable").append($(data));
}

function Reorder_Buttons(force){
    var data="";
    $("#tblButton").find("input[type='checkbox']").each(
        function(){
            var btn_name=$(this).closest("td").prev().attr("btn");
            if($(this).checked())
            {
                        
                data="<li btnname='"+btn_name+"' custombutton='0' class='ui-state-default'>"+btn_name+"</li>";
                if(!$("#btn_sortable").find("li[btnname='"+btn_name+"']").exists() )
                    $("#btn_sortable").append($(data));
                      
            }
            else
            {
                if($("#btn_sortable").find("li[btnname='"+btn_name+"']").exists()   )
                    $("#btn_sortable").find("li[btnname='"+btn_name+"']").remove();
                        

            }
        }
        );

    $("#divActionButtons").find("input[type='checkbox']").each(
        function(){
            var btn_name=$(this).closest("td").prev().node(0).text();
            var guid=$(this).closest("td").prev().node(0).attr('guid');
            if($(this).checked())
            {
                       
                data="<li  btnname='"+btn_name+"' custombutton='1' guid='"+guid+"' class='ui-state-default'>"+btn_name+"</li>";
                if(!$("#btn_sortable").find("li[btnname='"+btn_name+"']").exists() )
                    $("#btn_sortable").append($(data));
                       

            }
            else
            {
                if($("#btn_sortable").find("li[btnname='"+btn_name+"']").exists() )
                    $("#btn_sortable").find("li[btnname='"+btn_name+"']").remove();
            }
        }
        );
           
            
}

function setLockState(){
    if(layoutLockData.locked==-1){
        $("#btnLock").hide();
        return;
    }          
    if(layoutLockData.locked==1)
        $("#<%=lbnSave.ClientID%>").setDisplay(layoutLockData.locked==1 && layoutLockData.lockOwner==1);
    else
        $("#<%=lbnSave.ClientID%>").setDisplay(true)
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
function ShowFunctionTxt()
{
    var _chk= $("#<%= chkIsLink.ClientID %>");
            var _c=  _chk.checked();
            if(_c)
                _chk.closest('tr').next().show();
            else {
                $("#<%= txtLinkFunction.ClientID %>").val('');
                _chk.closest('tr').next().hide();
            }
        }
        function ShowDocument() {

            window.open("Documentation_Add.aspx?PageType=E&ID=" + $.QS("ID") + "&ModeType=View&Hdr="+$("#<%= txtViewName.ClientID %>").val());
            return false;
        }
    </script>
</asp:Content>


