<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ExprEditor.aspx.cs" Inherits="SensysErp.Meta.ExprEditor" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Expression Editor</title>
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
    <%# HelperLib.Web.WebResources.GetResource(ServerMode!=""?"": "~/Scripts/Erp.js")%>

    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Css/codemirror.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Css/show-hint.css")%>

    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/codemirror.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/css.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/sql.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/xml.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/htmlmixed.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/show-hint.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/javascript-hint.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/javascript.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/closetag.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/closebrackets.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/matchbrackets.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/formatting.js")%>

    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/search.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/searchcursor.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/jump-to-line.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/dialog.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/css/dialog.css")%>

    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/css-hint.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/sql-hint.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/runmode.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/clike.js")%>

    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Css/foldgutter.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/foldcode.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/foldgutter.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/brace-fold.js")%>
    <style>
        body, html, form
        {
            height: 100%;
        }



        .CodeMirror
        {
            border: 2px solid #3EA1EA;            
            height: 100%;
        }
        .ServerScript .CodeMirror
        {
            border: 2px solid #ea643e;
            background-color: #fff5e4;
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
        .cm-m-clike.cm-keyword
        {
            color: #014dff;
        }
        .cm-m-javascript.cm-comment
        {
            color: #00b327;
        }

        .cm-m-clike.cm-comment
        {
            color: #00b327;
        }

        .cm-s-default .cm-tag
        {
            color: #aa2736;
        }

        .cm-s-default .cm-attribute
        {
            color: #f00;
        }

        .CodeMirror-dialog input
        {
            border-bottom: solid 1px #000 !important;
            width: 20em !important;
        }
        .CodeMirror-search-hint
        {
            display: block !important;
        }
        .CodeMirror-dialog
        {
            background-color: #fffde6 !important;
            box-shadow: 0 2px 3px #949494 !important;
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
         .hasVar
        {
             color:#00C722;
        }
            .hasVar:before
            {
                font-family:FontAwesome;
                content:"\f111";
                margin-right:3px;
                display:inline-block;
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
            vertical-align: middle;
        }

        .cellSelect
        {
            width: 62px;
            padding: 2px;
            border-color: #EBE7E7;
        }

        .close
        {
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
            vertical-align: middle;
        }

        .cellBtn
        {
            margin: 3px 5px;
            font-size: 14px;
            color: #CF6813;
            vertical-align: middle;
        }

            .cellBtn:hover
            {
                color: red;
            }

        .divQuery
        {
            position: absolute;
            z-index: 3500;
            padding-top: 0px;
            top: 150px;
            left: 0;
            display: none;
            height: 450px;
            width: 905px;
        }

        #spnDescription
        {
            font-family: monospace;
            font-size: 12px;
            padding-left: 15px;
            display: block;
            overflow: auto;
            height: 100%;
            width: 100%;
            box-sizing: border-box;
        }

            #spnDescription .Title
            {
                display: inline-block;
                font-family: nunitobold;
                font-size: 18px;
                text-decoration: underline;
            }

            #spnDescription .Desc
            {
                margin-left: 25px;
                font-size: 13px;
                display: block;
            }

            #spnDescription .Eg:before
            {
                content: "Example :";
                margin-top: -28px;
                display: inline-block;
                position: absolute;
                font-size: 14px;
                text-decoration: underline;
                margin-left: -15px;
            }

            #spnDescription .Eg
            {
                display: inline-block;
                border: solid 1px #808080;
                padding: 6px;
                margin-left: 25px;
                background-color: #F0F0F0;
                border-left: solid 3px #008000;
                margin-right: 15px;
                margin-top: 22px;
                position: relative;
                min-width: 475px;
            }

            #spnDescription .Result:before
            {
                content: "Result :";
                margin-top: -28px;
                display: inline-block;
                position: absolute;
                font-size: 14px;
                text-decoration: underline;
                margin-left: -15px;
            }

            #spnDescription .Result
            {
                display: block;
                border: solid 1px #808080;
                padding: 6px;
                margin-left: 25px;
                background-color: #F0F0F0;
                border-left: solid 3px #CD0303;
                margin-right: 15px;
                margin-top: 22px;
                position: relative;
                min-width: 475px;
            }
                #spnDescription  .newLine:before
                {
                   content: "\f111";
  font-family: FontAwesome;
  font-size: 6px;
  margin-right: 4px;
  vertical-align: middle;
  color: #7700D5;
                }

        #lnkTools,#lnkTools .ctr
        {
            position: absolute;
            background-color: #FFF;
            top: 18px;
            left: 0px;
            z-index: 1000;
            border: solid 1px #bbb;
            box-shadow: 2px 2px 2px #717171;
        }
            #lnkTools a
            {
                display: block;
                padding: 5px 10px 5px 5px;
                color: #020E06;
                text-decoration: none;
                border-bottom: solid 2px #f9f9f9;
                font-family: Arial;
                font-size: 12px;
                text-shadow: 1px 1px 1px #CECECE;
                white-space: nowrap;
                min-width: 170px;
                outline:none !important;
                position:relative;
            }
                #lnkTools a:hover
                {
                    color: #fff;
                    background: #18bdff; /* Old browsers */
                }
                #lnkTools a SPAN
                {
                    font-family: fontawesome;
                    font-weight: normal;
                    font-size: 18px;
                    text-shadow: none;
                    margin-right: 10px;
                    line-height: 16px;
                }

                #lnkTools a._parent:after
                {
                    content:"\f0da";
                     font-family: fontawesome;
                    font-weight: normal;
                    float: right;
                }
            #lnkTools .ctr
            {
                display: none;
                 z-index: 1001;
            }
            #lnkTools a:before
            {
                content:" ";
                font-family: fontawesome;
                font-weight: normal;
                margin-right:2px;
                display:inline-block;
                width:15px;
            }
            #lnkTools ._format:before
            {
                content:"\f036";
            }
             #lnkTools  ._coll:before
            {
                content:"\f066";
            }
              #lnkTools ._exp:before
            {
                content:"\f065";
            }
               #lnkTools ._comm:before
            {
                content:"\f0e5";
            }
                #lnkTools ._uncomm:before
            {
                content:"\f0e5";
            }
            #lnkTools ._uncomm:after
            {
                content: "x";
                position: absolute;
                left: 9px;
                font-size: 10px;
                top: 5px;
            }
            #lnkTools ._sett:before
            {
                content:"\f08e";
            }
            #lnkTools ._code:before
            {
                content:"\f121";
            }
            #lnkTools ._impl:before
            {
                content:"\f033";
            }
    </style>
    <script>
        var VariablesList = [];
        var sid = 123;
        var ExprEditor = true;
    </script>
</head>
<body>
    <form id="form1" runat="server">
        <asp:ScriptManager ID="ScriptManager1" runat="server" EnablePageMethods="true">
        </asp:ScriptManager>
        <%= HelperLib.Web.WebResources.GetResource("~/css/base.css")%>
        <%= HelperLib.Web.WebResources.GetResource("~/css/form.css")%>
        
        <div style="height: 100%; width: 100%;font-size:14px;" id="divCtr">
             
            <telerik:RadSplitter  RenderMode="Lightweight" Skin="Metro" ID="RadSplitter1" runat="server" Width="100%" Height="100%">
                <telerik:RadPane ID="EndPane" runat="server" Width="22px" Scrolling="None">
                    <telerik:RadSlidingZone  ID="Radslidingzone1" runat="server" Width="22px" ClickToOpen="true" 
                        SlideDirection="Right">
                        <telerik:RadSlidingPane ID="rspField"  OnClientExpanded="rspOnDockEvent" ToolTip="Field" Title="<span class='rspFieldIco _ico'></span>Field" runat="server" Width="220px"
                            MinWidth="130">
                        </telerik:RadSlidingPane>
                        <telerik:RadSlidingPane ID="rspFunc" OnClientExpanded="rspOnDockEvent" ToolTip="Functions" Title="<span class='rspFnIco _ico'></span>Functions" runat="server" Width="220px"
                            MinWidth="130">
                        </telerik:RadSlidingPane>
                        <telerik:RadSlidingPane ID="rspApi" OnClientExpanded="rspOnDockEvent" ToolTip="Interface Api"  Title="<span class='rspApiIco _ico'></span>Interface Api" runat="server" Width="220px"
                            MinWidth="130">
                        </telerik:RadSlidingPane>
                        <telerik:RadSlidingPane ID="rspSetting" OnClientExpanded="rspOnDockEvent" ToolTip="Settings" Title="<span class='rspSettingIco _ico'></span>Settings" runat="server" Width="220px"
                            MinWidth="130">
                        </telerik:RadSlidingPane>
                        <telerik:RadSlidingPane ID="rspSession" OnClientExpanded="rspOnDockEvent" ToolTip="Session" Title="<span class='rspSessionIco _ico'></span>Session" runat="server" Width="220px"
                            MinWidth="130">
                        </telerik:RadSlidingPane>
                    </telerik:RadSlidingZone>
                </telerik:RadPane>
                <telerik:RadSplitBar ID="RadSplitBar2" runat="server">
                </telerik:RadSplitBar>
                <telerik:RadPane ID="MiddlePane1" runat="server" Scrolling="None">
                    <telerik:RadSplitter RenderMode="Lightweight" Skin="Metro"  ID="Radsplitter2" runat="server" Orientation="Horizontal" VisibleDuringInit="false">
                        <telerik:RadPane ID="Radpane2" runat="server" Height="22px" Scrolling="none">
                            <telerik:RadSlidingZone ID="Radslidingzone3" runat="server" Height="22px" ClickToOpen="true" SlideDirection="Bottom">
                                <telerik:RadSlidingPane OnClientExpanded="rspOnDockEvent"  ID="rspInfo" Title="Info" runat="server" Height="300px">
                                    <span id="spnDescription"></span>
                                </telerik:RadSlidingPane>                              
                            </telerik:RadSlidingZone>
                        </telerik:RadPane>
                        <telerik:RadSplitBar ID="Radsplitbar3" runat="server">
                        </telerik:RadSplitBar>
                        <telerik:RadPane ID="Radpane3" runat="server">
                            <div id="divScript" runat="server" class="page1" style="height: 60%; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; -ms-box-sizing: border-box; box-sizing: border-box;">

                                <asp:TextBox ID="txtScript" runat="server" Width="635" Height="250" Text="" TextMode="Multiline" Rows="3"> </asp:TextBox>

                            </div>
                        </telerik:RadPane>
                    </telerik:RadSplitter>
                </telerik:RadPane>
                <telerik:RadPane ID="RadPane1" runat="server" Width="22px" Scrolling="None">
                    <telerik:RadSlidingZone  ID="Radslidingzone2" runat="server" Width="22px" ClickToOpen="true"
                        SlideDirection="Left">
                        <telerik:RadSlidingPane  OnClientExpanded="rspOnDockEvent" ID="rspVar" Title=" Manage Variables" runat="server" Width="660px"
                            MinWidth="650">
                            <div id="divVarList" style="top:0;left:0;min-height: 300px; width: 650px; padding:10px 0 30px 0;background-color:transparent;position:relative;box-shadow:none;border:none" class="formSettings" >
                                <table style="margin-top: 15px" cellpadding="0" cellspacing="0">
                                    <thead style="color: #8E8E8E; font-family: nunitolight; font-size: 15px;">
                                        <tr>
                                            <td style="text-align: center;width:218px">Variable Name</td>
                                            <td style="text-align: center;width:62px">Type</td>
                                            <td style="text-align: center;">Edit</td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                                <a href="javascript:void(0)" class="mdl-button GreenColor" onclick="addNewVar()">Add New</a>
                                <div style="text-align: right; position: absolute; bottom: 4px; left: 0; right: 4px;">
                                    <a href="javascript:void(0)" class="mdl-button GreenButton" onclick="saveVarList();">Save</a>&nbsp;
                                    </div>
                                <telerik:RadComboBox ID="rcbEntity" Style="display: none" runat="server" OnClientSelectedIndexChanged="onClientSelectedIndexChanged" OnClientItemsRequesting="Entity_OnClientItemsRequesting" EnableLoadOnDemand="true">
                                    <WebServiceSettings Method="GetEntityList" Path="ExprEditor.aspx" />
                                </telerik:RadComboBox>

                            </div>
                        </telerik:RadSlidingPane>
                    </telerik:RadSlidingZone>
                </telerik:RadPane>
            </telerik:RadSplitter>
            <div style="display: none">
            <div id="divTreeCtr" style="display:none;height: 40%; width: 100%; padding: 20px 20px 20px 20px; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; -ms-box-sizing: border-box; box-sizing: border-box;">
                <table style="width: 100%; height: 100%; border-collapse: collapse; table-layout: fixed" cellpadding="0" cellspacing="0">
                   <tbody style="height:100%">
                     <tr>
                        <td style="border: solid 1px gray; width: 20%;height:100%" valign="top">
                            <telerik:RadTreeView ID="tvTypes" Style="height: 100%; overflow: auto" CssClass="tree" OnClientNodeClicked="tvTypes_NodeClick" runat="server">
                                <Nodes>
                                    <telerik:RadTreeNode Value="Field" Text="Field">
                                    </telerik:RadTreeNode>
                                    <telerik:RadTreeNode Value="Parent" Text="Parent">
                                    </telerik:RadTreeNode>
                                    <telerik:RadTreeNode Value="User" Text="Current User">
                                    </telerik:RadTreeNode>
                                    <telerik:RadTreeNode Value="Company" Text="Current Company">
                                    </telerik:RadTreeNode>
                                    <telerik:RadTreeNode Value="PermissionSettings" Text="Permission & Settings">
                                        <Nodes>
                                            <telerik:RadTreeNode Value="Permission" Text="Permission">
                                                <Nodes>
                                                    <telerik:RadTreeNode Value="USERPERMISSION" Text="User">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="USERROLEPERMISSION" Text="User Role">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="COMPANYPERMISSION" Text="Company">
                                                    </telerik:RadTreeNode>
                                                </Nodes>
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Settings" Text="Settings">
                                                <Nodes>
                                                    <telerik:RadTreeNode Value="USERSETTING" Text="User">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="USERROLESETTING" Text="User Role">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="COMPANYSETTING" Text="Company">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="APPLICATIONSETTING" Text="Application">
                                                    </telerik:RadTreeNode>
                                                </Nodes>
                                            </telerik:RadTreeNode>
                                        </Nodes>
                                    </telerik:RadTreeNode>
                                    <telerik:RadTreeNode Value="Functions" Text="Functions">
                                        <Nodes>
                                            <telerik:RadTreeNode Value="Agg" SS="0" Text="Aggregates">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Con" Text="Conversion">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Date" Text="Date & Time">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Logical" Text="Logical">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Math" Text="Math">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Text" Text="Text">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Misc" Text="Misc">
                                            </telerik:RadTreeNode>
                                        </Nodes>
                                    </telerik:RadTreeNode>
                                    <telerik:RadTreeNode Value="GlobalVariables" Text="Global Variables">
                                    </telerik:RadTreeNode>

                                    <telerik:RadTreeNode Value="InterfaceFunctions" Text="Interface Functions">
                                    </telerik:RadTreeNode>

                                    <telerik:RadTreeNode SS="0" Value="InterfaceEvents" Text="Interface Events">
                                    </telerik:RadTreeNode>


                                    <telerik:RadTreeNode SS="0" Value="FieldAPI" Text="Field API & Events">
                                    </telerik:RadTreeNode>
                                    <telerik:RadTreeNode SS="0" Value="EntityAPI" Text="Entity API">
                                    </telerik:RadTreeNode>

                                </Nodes>
                            </telerik:RadTreeView>
                        </td>
                        <td style="border: solid 1px gray; width: 20%;height:100%" valign="top">
                            <telerik:RadTreeView ID="tvItems" Style="height: 100%; overflow: auto" CssClass="tree" OnClientNodeClicked="tvItems_NodeClick" OnClientDoubleClick="tvItems_DoubleClick" OnClientNodePopulating="tvItems_NodePopulate" OnClientNodeExpanding="toggleHandler"
                                OnClientNodeCollapsing="toggleHandler" runat="server">
                                <WebServiceSettings Path="ExprEditor.aspx" Method="GetEntityFields"></WebServiceSettings>
                                <Nodes>
                                    <telerik:RadTreeNode SS="0" Value="Agg" Text="Aggregates" Prefix="Fn">
                                        <Nodes>
                                            <telerik:RadTreeNode Value="Sum" Text="Sum" Info="Desc:Returns a sum of the values of the specified expression.:|Eg:Fn.Sum(1,2,3);<br/>Fn.Sum( [1,2,3] );<br/>Fn.Sum( [ {a:1,b:2,c:3} , {a:4,b:5,c:6} ] , 'a')<br/>Fn.Sum( [ {a:1,b:2,c:3} , {a:4,b:5,c:6} , {a:7,b:8,c:9} ] , 'a', function(r){ return r.a>1; } )|Result:6<br/>6<br/>5<br/>11">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Min" Text="Min" Info="Desc:Return the number with the lowest value:|Eg:Fn.Min(1,2,3);<br/>Fn.Min( [1,2,3] );<br/>Fn.Min( [ {a:1,b:2,c:3} , {a:4,b:5,c:6} ] , 'b')<br/>Fn.Min( [ {a:1,b:2,c:3} , {a:4,b:5,c:6} , {a:7,b:8,c:9} ] , 'a', function(r){ return r.a>1; } )|Result:1<br/>1<br/>2<br/>4">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Max" Text="Max" Info="Desc:Return the number with the highest value:|Eg:Fn.Max(1,2,3);<br/>Fn.Max( [1,2,3] );<br/>Fn.Max( [ {a:1,b:2,c:3} , {a:4,b:5,c:6} ] , 'b')<br/>Fn.Max( [ {a:1,b:2,c:3} , {a:4,b:5,c:6} , {a:7,b:8,c:9} ] , 'a', function(r){ return r.a<6; } )|Result:3<br/>3<br/>5<br/>4">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Avg" Text="Avg" Info="Desc:Returns the average of all non-null values from the specified expression:|Eg:Fn.Avg(1,2,3);<br/>Fn.Avg( [1,2,3] );<br/>Fn.Avg( [ {a:1,b:2,c:3} , {a:4,b:5,c:6} ] , 'a')|Result:2<br/>2<br/>2.5">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Filter(TABLE,function(){})" Text="Filter" Info="Desc:Returns an array of items filtered by the given expression.Will return a blank array if no records are found:|Eg:Fn.Filter( [ {a:1,b:2,c:3} , {a:4,b:5,c:6} , {a:7,b:8,c:9} ] , function(r){ return r.a>1; } )<br/>Fn.Filter( [ {a:1,b:2,c:3} , {a:4,b:5,c:6} ] , function(r){ return r.a>10; } )|Result:[ {a:4,b:5,c:6} , {a:7,b:8,c:9} ]<br/>[]">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="First(TABLE,function(){})" Text="First" Info="Desc:Returns the first item filtered by the given expression.Will return null if no records are found:|Eg:Fn.First( [ {a:1,b:2,c:3} , {a:4,b:5,c:6} , {a:7,b:8,c:9} ] , function(r){ return r.a>1; } )<br/>Fn.First( [ {a:1,b:2,c:3} , {a:4,b:5,c:6} ] , function(r){ return r.a>10; } )|Result:{a:4,b:5,c:6}<br/>null">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Last(TABLE,function(){})" Text="Last" Info="Desc:Returns the first item filtered by the given expression.Will return null if no records are found:|Eg:Fn.Last( [ {a:1,b:2,c:3} , {a:4,b:5,c:6} , {a:7,b:8,c:9} ] , function(r){ return r.a>1; } )<br/>Fn.Last( [ {a:1,b:2,c:3} , {a:4,b:5,c:6} ] , function(r){ return r.a>10; } )|Result:{a:7,b:8,c:9}<br/>null">
                                            </telerik:RadTreeNode>

                                        </Nodes>
                                    </telerik:RadTreeNode>
                                    <telerik:RadTreeNode Value="Con" Text="Conversion" Prefix="Fn">
                                        <Nodes>
                                            <telerik:RadTreeNode Value="CStr" Text="CStr" Info="Desc:Converts the given object to string:|Eg:Fn.CStr(-7.25);<br/>Fn.CStr(null);<br/>Fn.CStr(true);|Result:'-7.25',<br/>''<br/>'true'">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="CInt" Text="CInt" Info="Desc:Converts the given object to int:|Eg:Fn.CInt(-7.25);<br/>Fn.CInt(null);<br/>Fn.CInt(true);<br/>Fn.CInt('1a');|Result:-7,<br/>0<br/>1<br/>0">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="CFlt" Text="CFlt" Info="Desc:Converts the given object to float:|Eg:Fn.CFlt('-7.25');<br/>Fn.CFlt(null);<br/>Fn.CFlt('1a');|Result:-7.25,<br/>0<br/>0">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="CDbl" Text="CDbl" SS="1" Info="Desc:Converts the given object to dounle:|Eg:Fn.CDbl('-7.25');<br/>Fn.CDbl(null);<br/>Fn.CDbl('1a');|Result:-7.25,<br/>0<br/>0">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="CBool" Text="CBool" Info="Desc:Converts the given object to boolean:|Eg:Fn.CBool('1');<br/>Fn.CBool(null);<br/>Fn.CBool('TrUe');|Result:true,<br/>false<br/>true">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="CDate" Text="CDate" Info="Desc:Converts the given string to datetime:|Eg:Fn.CDate('2010-01-02');<br/>Fn.CDate('2010-01-02','yyyy-dd-MM');|Result:datetime of Jan 2nd 2010 00:00 will be created<br/>datetime of Feb 1st 2010 00:00 will be created">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Format" Text="Format" Info="Desc:Converts the given value to string with the specified formatting:|Eg:Fn.Format(new Date(),'yyyy-MMM');<br/>Fn.Format(2.123,'N2');<br/>Fn.Format(new Date(),'{0:dd-MM-yyyy}');<br/>|Result:2016-Jan<br/>2.12<br/>01-01-2016">
                                            </telerik:RadTreeNode>
                                        </Nodes>
                                    </telerik:RadTreeNode>
                                    <telerik:RadTreeNode Value="Date" Text="Date & Time" Prefix="Fn">
                                        <Nodes>
                                            <telerik:RadTreeNode Value="Date" Text="Date" Info="Desc:Returns the date specified by the given year, month,day,hours,minutes and milliseconds:|Eg:Fn.Date('2000', '12', '31');Fn.Date('2000', '12', '31', '14', '30', '30');">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Now" Text="Now" Info="Desc:Returns the current date and time on this computer, expressed as the local time:|Eg:Fn.Now();">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Today" Text="Today" Info="Desc:Returns the current date on this computer, expressed as the local time:|Eg:Fn.Today();">
                                            </telerik:RadTreeNode>
                                        </Nodes>
                                    </telerik:RadTreeNode>
                                    <telerik:RadTreeNode Value="Logical" Text="Logical">
                                        <Nodes>
                                            <telerik:RadTreeNode Value="If" Text="If...Else...">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Iif(EXPR,trueValue,falseValue)" Text="Iif" Info="Desc:Returns one of two objects, depending on the evaluation of an expression:|Eg:Fn.Iif(1>2,1,2);|Result:2">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="IsNull(VALUE,defaultValue)" Text="IsNull" Info="Desc:Replaces the null or empty value with the specified replacement value:|Eg:Fn.IsNull(NullOrEmptyValue,1);|Result:1">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="While" Text="While...">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="For" Text="For...">
                                            </telerik:RadTreeNode>
                                        </Nodes>
                                    </telerik:RadTreeNode>
                                    <telerik:RadTreeNode Value="Math" Text="Math" Prefix="Fn">
                                        <Nodes>
                                            <telerik:RadTreeNode Value="Abs" Info="Desc:Return the absolute value of a number:|Eg:Fn.Abs(-7.25);|Result:7.25" Text="Abs">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Ceil" Info="Desc:Round a number upward to it's nearest integer:|Eg:Fn.Ceil(1.4);|Result:2" Text="Ceil">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Cos" Info="Desc:Return the cosine of a number:|Eg:Fn.Cos(3);|Result:-0.9899924966004454" Text="Cos">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Exp" Info="Desc:Return E(x), where x is 1:|Eg:Fn.Exp(1);|Result:2.718281828459045" Text="Exp">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Floor" Info="Desc:Round a number downward to its nearest integer:|Eg:Fn.Floor(1.6);|Result:1" Text="Floor">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Log" Info="Desc:Return the natural logarithm of the number|Eg:Fn.Log(2);|Result:0.6931471805599453" Text="Log">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Pow" Info="Desc:Return the value of the number 4 to be the power of 3 (4*4*4):|Eg:Fn.Pow(4, 3);|Result:64" Text="Pow">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Round" Info="Desc:Round a number to the nearest integer:|Eg:Fn.round(2.5);<br/>Fn.Round(2.54333,2);|Result:2<br/>2.54" Text="Round">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Sin" Info="Desc:Return the sine of a number:|Eg:Fn.Sin(3);|Result:0.1411200080598672" Text="Sin">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Sqrt" Info="Desc:Return the square root of a number:|Eg:Fn.Sqrt(9);|Result:3" Text="Sqrt">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Tan" Info="Desc:Return the tangent of a number (angle):|Eg:Fn.Tan(90);|Result:-1.995200412208242" Text="Tan">
                                            </telerik:RadTreeNode>

                                        </Nodes>
                                    </telerik:RadTreeNode>
                                    <telerik:RadTreeNode Value="Text" Text="Text" Prefix="Fn">
                                        <Nodes>

                                            <telerik:RadTreeNode Value="CharAt" Text="CharAt" Info="Desc:Return the character at specified position of a string:|Eg:Fn.CharAt('Hello World',0);|Result:'H'">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="CharCodeAt" Text="CharCodeAt" Info="Desc:Returns the Unicode of the character at the specified index in a string.:|Eg:Fn.CharCodeAt('Hello World',0);|Result:72">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Contains" Text="Contains" Info="Desc:Returns a value indicating whether the specified string occurs within this string:|Eg:Fn.Contains('Hello World', 'World');|Result:true">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="EndsWith" Text="EndsWith" Info="Desc:Determines whether the end of this string instance matches the specified string:|Eg:Fn.EndsWith('Hello World', 'd');|Result:true">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="IndexOf" Text="IndexOf" Info="Desc:Returns the position of the first found occurrence of a specified value in a string:|Eg:Fn.IndexOf('Hello World', 'o');|Result:4">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="LastIndexOf" Text="LastIndexOf" Info="Desc:Returns the position of the last found occurrence of a specified value in a string:|Eg:Fn.LastIndexOf('Hello World', 'o');|Result:7">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="LTrim" Text="LTrim" Info="Desc:Removes whitespace or specified character from begining of a string:|Eg:Fn.LTrim(' World');<br/>Fn.LTrim('Hello World', 'H');<br/>Fn.LTrim(' Hello World', ['H','E',' ']);|Result:'World'<br/>'ello World'<br/>'llo World'">
                                            </telerik:RadTreeNode>                                            
                                            <telerik:RadTreeNode Value="RTrim" Text="RTrim" Info="Desc:Removes whitespace or specified character from ending of a string:|Eg:Fn.RTrim('Hello ');<br/>Fn.RTrim('Hello World', 'd');<br/>Fn.RTrim('Hello World', ['l','d']);|Result:'Hello'<br/>'Hello Worl'<br/>'Hello Wor'">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Replace" Text="Replace" Info="Desc:The Replace() method searches a string for a specified value and returns a new string where the specified values are replaced:|Eg:Fn.Replace('AAAA', 'A', 'B');<br/>Fn.Replace('AAAA', 'A', 'B',true);|Result:'BAAA'<br/>'BBBB'">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="ToLowerCase" Text="ToLowerCase" Info="Desc:Converts a string to lowercase letters:|Eg:Fn.ToLowerCase('Hello World');|Result:'hello world'">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="ToUpperCase" Text="ToUpperCase" Info="Desc:Converts a string to uppercase letters:|Eg:Fn.ToUpperCase('Hello World');|Result:'HELLO WORLD'">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Trim" Text="Trim" Info="Desc:Removes whitespace or specified character from both ends of a string:|Eg:Fn.Trim(' Hello ');<br/>Fn.Trim('$Hello World$', '$');|Result:'Hello'<br/>'Hello World'">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="SubString" Text="SubString" Info="Desc:Extracts the characters from a string, between two specified indices:|Eg:Fn.SubString('Hello World',1,4);<br/>Fn.SubString('Hello World',2)|Result:'ell'<br/>'llo world'">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Split" Text="Split" Info="Desc:Splits the string into an array, based on the delimiters provided:|Eg:Fn.Split( 'Hello World' , ' ' );<br/>Fn.Split( 'He$llo World' , ' ' , '$' );|Result:['Hello','World']<br/>['He','llo','World']">
                                            </telerik:RadTreeNode>
                                        </Nodes>
                                    </telerik:RadTreeNode>
                                    <telerik:RadTreeNode Value="Misc" Text="Misc" Prefix="Fn">
                                        <Nodes>
                                             <telerik:RadTreeNode Value="IsEmpty" Text="IsEmpty" Info='Desc:Checks whether a value is null or blank or a string with spaces:|Eg:Fn.IsEmpty("  ");|Result:true'>
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="IsNan" Text="IsNan" Info='Desc:Checks whether a value is a number:|Eg:Fn.IsNan("a1");|Result:false'>
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="IfNull" Text="IfNull" Info='Desc:Checks whether a value is null or empty and returns the appropriate value:|Eg:Fn.IfNull(" ","abc");|Result:"abc"'>
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Eq" Text="Eq" Info='Desc:Checks whether two values are equal:|Eg:Fn.Eq("a","A");<br/>Fn.Eq(null,"");|Result:true<br/>true'>
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="DecodeURI" SS="0" Text="DecodeURI" Info="Desc:Decodes a URI:|Eg:Fn.DecodeURI('my%20test.aspx?name=zxc&val=1');|Result:'my test.aspx?name=zxc&val=1'">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="EncodeURI" SS="0" Text="EncodeURI" Info="Desc:Encodes a URI:|Eg:Fn.EncodeURI('http://www.example.com/a file with spaces.html');|Result:'http://www.example.com/a%20file%20with%20spaces.html'">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="GetFileName" SS="0"  Text="GetFileName" Info="Desc:Return the file name from the file path:|Eg:Fn.GetFileName('c:\asd\qwe\zxc.txt');|Result:'zxc.txt'">
                                            </telerik:RadTreeNode>                                            
                                            <telerik:RadTreeNode Value="Random" SS="0" Text="Random" Info="Desc:Return a random number between 0 and 1 ,or specified start and stop values:|Eg:Fn.Random();<br/>Fn.Random(20,30);<br/>Fn.Random(20,30,2);|Result:0.8769768343772739<br/>28<br/>23.25">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="GetProp" SS="0" Text="GetProp" Info="Desc:Retrieves the property value for a given name.Property names are those key-value items specified in the query string part of the url.|Eg:Fn.GetProp('ID')">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="ToWords" Text="ToWords" Info="Desc:Displays the given number in words.|Eg:Fn.ToWords(1234)|Result:One thousand two hundred thirty four">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="ToCurrency" SS="1" Text="ToCurrency" Info="Desc:Displays the given number with comma separators.|Eg:Fn.ToCurrency(1234)|Result:1,234">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="UnFormatNumber" SS="0" Text="UnFormatNumber" Info="Desc:Removes any formatting in the string and returns numeric value.|Eg:Fn.UnFormatNumber('Rs 1,2345.67')|Result:12345.67">
                                            </telerik:RadTreeNode>
                                        </Nodes>
                                    </telerik:RadTreeNode>
                                    <telerik:RadTreeNode Value="Field" Text="Fields">
                                        <Nodes></Nodes>
                                    </telerik:RadTreeNode>
                                    <telerik:RadTreeNode Value="Parent" Text="Parent">
                                        <Nodes></Nodes>
                                    </telerik:RadTreeNode>
                                    <telerik:RadTreeNode Value="User" Text="Current User">
                                    </telerik:RadTreeNode>
                                    <telerik:RadTreeNode Value="Company" Text="Current Company">
                                    </telerik:RadTreeNode>
                                    
                                    <telerik:RadTreeNode SS="0" Value="InterfaceFunctions" Text="Interface Functions">
                                        <Nodes>
                                            <telerik:RadTreeNode Value="" NoWF="1" Text="Grid" Info="Desc:Grid Related Functions">
                                                <Nodes>
                                                    <telerik:RadTreeNode Value="Erp.Grid.DisplayColumn(grid,col)" NoWF="1" Text="DisplayColumn" Info="Desc:Toggles the visibility of a column in a grid |Eg:Erp.Grid.DisplayColumn('Grid-1',0,false);<br/>Erp.Grid.DisplayColumn('Grid-1','col1',false);|Result:The first column in the grid will be hidden.<br/>The column with name 'col1' in the grid will be hidden.">
                                                    </telerik:RadTreeNode>
                                                     <telerik:RadTreeNode Value="Erp.Grid.SortColumn(grid,col,dir)" NoWF="1" Text="SortColumn" Info="Desc:Sorts the grid column in the specified direction.|Eg:Erp.Grid.SortColumn('Grid-1','col1','asc');<br/>Erp.Grid.SortColumn('Grid-1',0,'desc');<br/>Erp.Grid.SortColumn('Grid-1',0);<br/>|Result:The data in the column 'col1' will be sorted in ascending order.<br/>The data in the first column will be sorted in descending order.<br/>The data in the first column will be sorted in original order.">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="Erp.Grid.FilterColumn(grid,col,value,cond)" NoWF="1" Text="FilterColumn" Info="Desc:Filters the data in the column based on specified critera |Eg:Erp.Grid.FilterColumn('Grid-1',0,'hello','Contains');<br/>Erp.Grid.FilterColumn('Grid-1',0,'hello','Contains',false);<br/>Erp.Grid.FilterColumn('Grid-1',0,'NoFilter');<br/>Erp.Grid.FilterColumn('Grid-1',0,'NoFilter',false);|Result:The data in the first column in the grid will be filtered to show records containing hello.<br/>The same filter will be applied but grid wont be refreshed<br/>The previously applied filter will be removed<br/>The filter will be removed but grid wont be refreshed<br/>Following are the supported conditions:<br/>Contains, DoesNotContain, StartsWith, EndsWith, EqualTo, NotEqualTo, GreaterThan, LessThan, GreaterThanOrEqualTo, LessThanOrEqualTo, Between, NotBetween, IsEmpty, NotIsEmpty, IsNull, NotIsNull">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="Erp.Grid.Filter(grid,filterCode)" NoWF="1" Text="Filter" Info="Desc:Filters the data in the grid based on the filter code provided|Eg:Erp.Grid.Filter('Grid-1','Filter1');<br/>Erp.Grid.Filter('Grid-1','Filter1',false);|Result:The grid will be filtered with specified filter<br/>The Grid filter will be set but grid wont be refreshed">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="Erp.Grid.RemoveFilter(grid,filterCode)" NoWF="1" Text="RemoveFilter" Info="Desc:The specified filter will be removed|Eg:Erp.Grid.RemoveFilter('Grid-1','Filter1');<br/>Erp.Grid.RemoveFilter('Grid-1','Filter1',false);|Result:The specified filter will be removed<br/>The specified filter will be removed but grid wont be refreshed">
                                                    </telerik:RadTreeNode>
                                                     <telerik:RadTreeNode Value="Erp.Grid.ResetAllFilters(grid)" NoWF="1" Text="ResetAllFilters" Info="Desc:Removes all the column filters set programatically.|Eg:Erp.Grid.ResetAllFilters('Grid-1');<br/>Erp.Grid.ResetAllFilters('Grid-1',false);|Result:All filters including those set by user will be reset and grid will be refreshed.<br/>All filters will be reset but grid will not be refreshed">
                                                    </telerik:RadTreeNode>
                                                       <telerik:RadTreeNode Value="Erp.Grid.ApplyTopBarFilter(grid)" NoWF="1" Text="ApplyTopBarFilter" Info="Desc:Applies filter based on selection in top bar.|Eg:Erp.Grid.ApplyTopBarFilter('Grid-1');">
                                                    </telerik:RadTreeNode>
                                                     <telerik:RadTreeNode Value="Erp.Grid.CalculateColumn(grid,col,'SUM')" NoWF="1" Text="CalculateColumn" Info="Desc:Performs specified calculation on all rows in the grid.|Eg:Erp.Grid.CalculateColumn('Grid-1','col1','SUM');<br/>Erp.Grid.CalculateColumn('Grid-1',0,'AVG');<br/>Erp.Grid.CalculateColumn('Grid-1','col1','SUM',true);<br/>|Result:The total of all data in the column 'col1' will be calculated.<br/>The average of all data in the first column will be calculated.<br/>The sum is calculated and formatted according to the formatting of the specified column<br/>Following are the supported operators:<br/>SUM, AVG, MIN, MAX, FIRST, LAST">
                                                    </telerik:RadTreeNode>
                                                      <telerik:RadTreeNode Value="Erp.Grid.AddColumn(grid,colInfo)" NoWF="1" Text="AddColumn" Info="Desc:Adds a new column in the grid.|Eg:Erp.Grid.AddColumn('Grid-1','New Column');<br/>Erp.Grid.AddColumn('Grid-1',{ColumnName:'col1',HeaderText:'New Column',ColumnGroupName:'group1', Width:50, Editable: true, Mandatory: true, DataType: 'Number'});<br/>|Result:A new column with the title 'New Column' is added in the grid.<br/>A new column with the specified settings is added in the grid:<br/><br/>Following are the list of available properties<br/>ColumnName : The name of column<br/>ColumnGroupName:The merge column group of the column<br/>DataField: The field name in the datasource<br/>HeaderText: The title of column<br/>Width: Width of column in pixels<br/>Editable: Allow editing of column<br/>Mandatory:Whether data is mandatory<br/>ItemTemplate: Html to be displayed in the cell<br/>ItemCss: Css class of the cell<br/>EditTemplate: Html to be displayed in the cell in edit mode<br/>HeaderCss: Css class of the header cell<br/>FooterTemplate: Html to be displayed in the footer cell<br/>FooterCss: Css class of the footer cell<br/>Formatting: Formatting of data in cell<br/>DataType: Any type that is supported by Erp.CreateField<br/>EntityID: Entity of SIngleSelect<br/>FormCode: Formcode for SingleSelect<br/>Items: Items to be displayed for SingleSelect<br/>AllowFilterSort: Enable filtering and sorting">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="Erp.Grid.ColumnExists(grid,col)" NoWF="1" Text="ColumnExists" Info="Desc:Checks whether column exists in grid |Eg:Erp.Grid.ColumnExists('Grid-1',0);<br/>Erp.Grid.ColumnExists('Grid-1','col1');">
                                                    </telerik:RadTreeNode>
                                                     <telerik:RadTreeNode Value="Erp.Grid.GetRecordID(grid)" NoWF="1" Text="GetRecordID" Info="Desc:Gets the record id of the currently selected record/specified record in the grid.|Eg:Erp.Grid.GetRecordID('Grid-1');<br/>Erp.Grid.GetRecordID('Grid-1',0)<br/>Erp.Grid.GetRecordID('Grid-1',btn);|Result:Retrieves the the record id of the currently selected record in the grid.<br/>Retrieves the record id of the first row in the grid.<br/>Retrieves the record id of the row which contains the button">
                                                    </telerik:RadTreeNode>                                                    
                                                     <telerik:RadTreeNode Value="Erp.Grid.GetRecordValue(grid,col)" NoWF="1" Text="GetRecordValue" Info="Desc:Gets the value in the specified cell index for the currently selected record/specified record.|Eg:Erp.Grid.GetRecordValue('Grid-1',0);<br/>Erp.Grid.GetRecordValue('Grid-1',0,1)<br/>Erp.Grid.GetRecordValue('Grid-1',0,btn);|Result:Gets the text in the first cell of the currently selected record in the grid.<br/>Gets the text in the first cell of the second row in the grid.<br/>Gets the text in the first cell of the row which contains the button.">
                                                    </telerik:RadTreeNode>
                                                     <telerik:RadTreeNode Value="Erp.Grid.GetParamValue(grid,paramInd)" NoWF="1" Text="GetParamValue" Info="Desc:Gets the associated param value for the currently selected record/specified record.|Eg:Erp.Grid.GetParamValue('Grid-1',0);<br/>Erp.Grid.GetParamValue('Grid-1',0,1);<br/>Erp.Grid.GetParamValue('Grid-1',0,btn);|Result:Gets the value for the first param  for currently selected row.<br/>Gets the value for the first param  for the second row.<br/>Gets the value for the first param  for the row containing the button.">
                                                    </telerik:RadTreeNode>
                                                     <telerik:RadTreeNode Value="Erp.Grid.GetRecordID_Multiple(grid)" NoWF="1" Text="GetRecordID_Multiple" Info="Desc:Gets an array of record ids for all the selected records in the grid.|Eg:Erp.Grid.GetRecordID_Multiple('Grid-1');|Result:[1,2,5]">
                                                    </telerik:RadTreeNode>
                                                     <telerik:RadTreeNode Value="Erp.Grid.GetRecordValue_Multiple(grid,col)" NoWF="1" Text="GetRecordValue_Multiple" Info="Desc:Gets an array of values in the specified cell index for all selected records.|Eg:Erp.Grid.GetRecordValue_Multiple('Grid-1',0);|Result:['text1','text2','text5']">
                                                    </telerik:RadTreeNode>                                                     
                                                     <telerik:RadTreeNode Value="Erp.Grid.GetParamValue_Multiple(grid,paramInd)" NoWF="1" Text="GetParamValue_Multiple" Info="Desc:Gets an array of associated param values for all selected records.|Eg:Erp.Grid.GetParamValue_Multiple('Grid-1',0);|Result:['param1','param2','param5']">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="Erp.Grid.GetRecordID_Filtered(grid)" NoWF="1" Text="GetRecordID_Filtered" Info="Desc:Gets an array of record ids for all the filtered records in the grid.|Eg:Erp.Grid.GetRecordID_Filtered('Grid-1');">
                                                    </telerik:RadTreeNode>
                                                     <telerik:RadTreeNode Value="Erp.Grid.GetRecordValue_Filtered(grid,col)" NoWF="1" Text="GetRecordValue_Filtered" Info="Desc:Gets an array of values in the specified cell index for all filtered records.|Eg:Erp.Grid.GetRecordValue_Filtered('Grid-1',0);">
                                                    </telerik:RadTreeNode>                                                     
                                                     <telerik:RadTreeNode Value="Erp.Grid.GetParamValue_Filtered(grid,paramInd)" NoWF="1" Text="GetParamValue_Filtered" Info="Desc:Gets an array of associated param values for all filtered records.|Eg:Erp.Grid.GetParamValue_Filtered('Grid-1',0);">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="Erp.Grid.GetRowState(grid)" NoWF="1" Text="GetRowState" Info="Desc:Gets the row state (NONE,MODIFIED,NEW,DELETED,EMPTY) of the currently selected record/specified record in the grid.|Eg:Erp.Grid.GetRowState('Grid-1');<br/>Erp.Grid.GetRowState('Grid-1',0)<br/>Erp.Grid.GetRowState('Grid-1',btn);">
                                                    </telerik:RadTreeNode>   
                                                    <telerik:RadTreeNode Value="Erp.Grid.GetSelectedRow(grid)" NoWF="1" Text="GetSelectedRow" Info="Desc:Gets the currently selected row in the grid.|Eg:Erp.Grid.GetSelectedRow('Grid-1');">
                                                    </telerik:RadTreeNode>  
                                                     <telerik:RadTreeNode Value="Erp.Grid.GetParentRow(grid)" NoWF="1" Text="GetParentRow" Info="Desc:Gets the parent row of the currently selected/specified row in the grid when grid is bound with Tree data.|Eg:Erp.Grid.GetParentRow('Grid-1');<br/>Erp.Grid.GetParentRow('Grid-1',tr);|Result:Retrieves the parent of current selected row<br/>Retrieves the parent of specified row">
                                                    </telerik:RadTreeNode> 
                                                     <telerik:RadTreeNode Value="Erp.Grid.GetRootParentRow(grid)" NoWF="1" Text="GetRootParentRow" Info="Desc:Gets the root parent row of the currently selected/specified row in the grid when grid is bound with Tree data.|Eg:Erp.Grid.GetRootParentRow('Grid-1');<br/>Erp.Grid.GetRootParentRow('Grid-1',tr);|Result:Retrieves the root parent of current selected row<br/>Retrieves the root parent of specified row">
                                                    </telerik:RadTreeNode> 
                                                      <telerik:RadTreeNode Value="Erp.Grid.GetRecordCell(grid,col)" NoWF="1" Text="GetRecordCell" Info="Desc:Gets the html cell for the currently selected record/specified record.|Eg:Erp.Grid.GetRecordCell('Grid-1',0);<br/>Erp.Grid.GetRecordCell('Grid-1',0,1)<br/>Erp.Grid.GetRecordCell('Grid-1',0,btn);|Result:Gets the first cell of the currently selected record in the grid.<br/>Gets first cell of the second row in the grid.<br/>Gets the first cell of the row which contains the button.">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="Erp.Grid.GetFooterCell(grid,col,row)" NoWF="1" Text="GetFooterCell" Info="Desc:Gets the html cell for the specified footer row.|Eg:Erp.Grid.GetFooterCell('Grid-1','col1',0);<br/>Erp.Grid.GetFooterCell('Grid-1',1,tr)|Result:Gets the cell with column name col1 in the first footer row in the grid.<br/>Gets the second cell in the specified footer row.">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="Erp.Grid.GetFooterText(grid,col,row)" NoWF="1" Text="GetFooterText" Info="Desc:Gets the text in the cell in the specified footer row.|Eg:Erp.Grid.GetFooterText('Grid-1','col1',0);<br/>Erp.Grid.GetFooterText('Grid-1',1,tr)|Result:Gets the text in the cell with column name col1 in the first footer row in the grid.<br/>Gets the text in the second cell in the specified footer row.">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="Erp.Grid.SetFooterText(grid,col,row,val)" NoWF="1" Text="SetFooterText" Info="Desc:Sets the text in the cell in the specified footer row.|Eg:Erp.Grid.SetFooterText('Grid-1','col1',0,'Hello World');<br/>Erp.Grid.SetFooterText('Grid-1',1,tr,'Hello World')|Result:Sets the text in the cell with column name col1 in the first footer row in the grid.<br/>Sets the text in the second cell in the specified footer row.">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="Erp.Grid.GetHeaderText(grid,col)" NoWF="1" Text="GetHeaderText" Info="Desc:Gets the text in the header cell in the specified column.|Eg:Erp.Grid.GetHeaderText('Grid-1','col1');<br/>Erp.Grid.GetHeaderText('Grid-1',1)|Result:Gets the text in the header cell with column name col1.<br/>Gets the text in the second cell in the header row.">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="Erp.Grid.SetHeaderText(grid,col,val)" NoWF="1" Text="SetHeaderText" Info="Desc:Sets the text in the header cell in the specified column.|Eg:Erp.Grid.SetHeaderText('Grid-1','col1','Hello World');<br/>Erp.Grid.SetHeaderText('Grid-1',1,'Hello World')|Result:Sets the text in the header cell with column name col1.<br/>Sets the text in the second cell in the header row.">
                                                    </telerik:RadTreeNode>
                                                      <telerik:RadTreeNode Value="Erp.Grid.SelectRow(grid,row,true)" NoWF="1" Text="SelectRow" Info="Desc:Selects or deselects the currently selected record/specified record.|Eg:Erp.Grid.SelectRow('Grid-1',0,true);|Result:The specified row in the grid is selected.">
                                                    </telerik:RadTreeNode>
                                                      <telerik:RadTreeNode Value="Erp.Grid.IsRowSelected(grid,row)" NoWF="1" Text="IsRowSelected" Info="Desc:Returns true/false if the specified row is selected.|Eg:Erp.Grid.IsRowSelected('Grid-1',0);|Result:Returns true if the first row in the grid is selected.">
                                                    </telerik:RadTreeNode>
                                                     <telerik:RadTreeNode Value="Erp.Grid.IsRowSelected_Multiple(grid)" NoWF="1" Text="IsRowSelected_Multiple" Info="Desc:Returns true/false if multiple rows are selected.|Eg:Erp.Grid.IsRowSelected_Multiple('Grid-1');">
                                                    </telerik:RadTreeNode>
                                                       <telerik:RadTreeNode Value="Erp.Grid.GetRows(grid)" NoWF="1" Text="GetRows" Info="Desc:Gets all rows in the grid.|Eg:Erp.Grid.GetRows('Grid-1');">
                                                    </telerik:RadTreeNode>
                                                      <telerik:RadTreeNode Value="Erp.Grid.GetSelectedRows(grid)" NoWF="1" Text="GetSelectedRows" Info="Desc:Gets all selected rows in the grid.|Eg:Erp.Grid.GetSelectedRows('Grid-1');">
                                                    </telerik:RadTreeNode>
                                                     <telerik:RadTreeNode Value="Erp.Grid.GetRowCount(grid)" NoWF="1" Text="GetRowCount" Info="Desc:Gets the total number of records in the grid.|Eg:Erp.Grid.GetRowCount('Grid-1');">
                                                    </telerik:RadTreeNode>
                                                     <telerik:RadTreeNode Value="Erp.Grid.DisplayRow(grid,row,false)" NoWF="1" Text="DisplayRow" Info="Desc:Toggles the specified/selected record in the grid.|Eg:Erp.Grid.DisplayRow('Grid-1')<br/>Erp.Grid.DisplayRow('Grid-1',0)<br/>Erp.Grid.DisplayRow('Grid-1',row);<br/>Erp.Grid.DisplayRow('Grid-1',btn);">
                                                    </telerik:RadTreeNode>   
                                                     <telerik:RadTreeNode Value="Erp.Grid.DeleteRow(grid,row)" NoWF="1" Text="DeleteRow" Info="Desc:Delete the specified/selected record in the grid.|Eg:Erp.Grid.DeleteRow('Grid-1')<br/>Erp.Grid.DeleteRow('Grid-1',0)<br/>Erp.Grid.DeleteRow('Grid-1',row);<br/>Erp.Grid.DeleteRow('Grid-1',btn);<br/>Erp.Grid.DeleteRow('Grid-1',row,true);|Result:Deletes the currently selected row in the grid.<br/>Deletes the row with the specified row index.<br/>Deletes the specified html row<br/>Deletes the row which contains the button<br/>The row is marked for deletion and hidden.RowState is set as DELETED">
                                                    </telerik:RadTreeNode>   
                                                     <telerik:RadTreeNode Value="Erp.Grid.AddNewRow(grid)" NoWF="1" Text="AddNewRow" Info="Desc:Add a new row in the grid.The function returns the newly created row|Eg:Erp.Grid.AddNewRow('Grid-1');<br/>Erp.Grid.AddNewRow('Grid-1',true);|Result:New row is created.Any events set are also triggered.<br/>New row is created.No events are triggered.">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="Erp.Grid.AddFooterRow(grid)" NoWF="1" Text="AddFooterRow" Info="Desc:Add a new row in the footer of the grid.The function returns the newly created row|Eg:Erp.Grid.AddFooterRow('Grid-1');">
                                                    </telerik:RadTreeNode>
                                                     <telerik:RadTreeNode Value="Erp.Grid.SaveChanges(grid)" NoWF="1" Text="SaveChanges" Info="Desc:Saves all changes in the grid.If result of the function is false then it means save operation will not be perfomed.|Eg:Erp.Grid.SaveChanges('Grid-1');">
                                                    </telerik:RadTreeNode>
                                                     <telerik:RadTreeNode Value="Erp.Grid.ApplyChanges(grid)" NoWF="1" Text="ApplyChanges" Info="Desc:Applies all the changes in the grid.No data is saved in the database.|Eg:Erp.Grid.ApplyChanges('Grid-1');">
                                                    </telerik:RadTreeNode>                                                    
                                                       <telerik:RadTreeNode Value="Erp.Grid.Refresh(grid)" NoWF="1" Text="Refresh" Info="Desc:Refreshes the data in the grid.|Eg:Erp.Grid.Refresh('Grid-1');">
                                                    </telerik:RadTreeNode>
                                                      <telerik:RadTreeNode Value="Erp.Grid.Repaint(grid)" NoWF="1" Text="Repaint" Info="Desc:Repaints the grid.The Height and width are recalculated|Eg:Erp.Grid.Repaint('Grid-1');">
                                                    </telerik:RadTreeNode>
                                                      <telerik:RadTreeNode Value="Erp.Grid.SetVisible(grid,bit)" NoWF="1" Text="SetVisible" Info="Desc:Shows or hides the grid|Eg:Erp.Grid.SetVisible('Grid-1',false);">
                                                    </telerik:RadTreeNode>
                                                      <telerik:RadTreeNode Value="Erp.Grid.Export(grid)" NoWF="1" Text="Export" Info="Desc:Exports data in the grid in specified format.|Eg:Erp.Grid.Export('Grid-1','PDF');<br/>Erp.Grid.Export('Grid-1','PDF',true);<br/>Erp.Grid.Export('Grid-1','EXCEL');<br/>Erp.Grid.Export('Grid-1','WORD')|Result:Data is exported in pdf format for all the pages in the grid.<br/>Only currently displayed page is exported.<br/>Data is exported in Excel format<br/>Data is exported in MS-Word format">
                                                    </telerik:RadTreeNode>
                                                     <telerik:RadTreeNode Value="Erp.Grid.BindOnLoad(grid,true)" NoWF="1" Text="BindOnLoad" Info="Desc:Set the behaviour of grid to load data as soon as interface is loaded,if set to false then data will not be loaded in the grid.|Eg:Erp.Grid.BindOnLoad('Grid-1',false);|Result:Data will not be loaded, grid will remain empty.">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="Erp.Grid.DataBind(grid,data)" NoWF="1" Text="DataBind" Info="Desc:Binds an array of data to the grid.|Eg:Erp.Grid.DataBind('Grid-1',[{a:1,b:1},{a:2,b:2}]);<br/>Erp.Grid.DataBind('Grid-1',{data:[{col1:'a',parent:'',pk:'1'},{col1:'a1',parent:'1',pk:'2'}],enableTree:true,pkField:'pk',parentField:'parent',level:2});|Result:Grid is bound to the array.<br/>Grid is displayed in tree format based on specified pk column and parent column">
                                                    </telerik:RadTreeNode>
                                                      <telerik:RadTreeNode Value="Erp.Grid.EnableTree(grid)" NoWF="1" Text="EnableTree" Info="Desc:Displays data in the grid as tree if the parent column is specified.|Eg:Erp.Grid.EnableTree('Grid-1','parent_key',2);|Result:Data in the grid is displayed as tree based on parent_key column, By default 2 levels will be expanded">
                                                    </telerik:RadTreeNode>      
                                                     <telerik:RadTreeNode Value="Erp.Grid.GetEditorValue(grid,col)" NoWF="1" Text="GetEditorValue" Info="Desc:Gets the editor value of the cell for the currently selected record/specified record.|Eg:Erp.Grid.GetEditorValue('Grid-1',1);<br/>Erp.Grid.GetEditorValue('Grid-1','col1');<br/>Erp.Grid.GetEditorValue('Grid-1',cell);<br/>Erp.Grid.GetEditorValue('Grid-1','col1',tr);<br/>Erp.Grid.GetEditorValue('Grid-1','col1',1)|Result:Gets the editor value of first cell of the currently selected record in the grid.<br/>Gets editor value of column with name col1 in current selected row.<br/>Gets the editor value of the specified cell.<br/>Gets the editor value of the column with name col1 for specified row.<br/>Gets the editor value of the column with name col1 for 2nd row in the grid">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="Erp.Grid.SetEditorValue(grid,col,val)" NoWF="1" Text="SetEditorValue" Info="Desc:Sets the value in the cell for the currently selected record/specified record.|Eg:Erp.Grid.SetEditorValue('Grid-1',1,'abc');<br/>Erp.Grid.SetEditorValue('Grid-1','col1','abc');<br/>Erp.Grid.SetEditorValue('Grid-1',cell,'abc');<br/>Erp.Grid.SetEditorValue('Grid-1','col1',tr,'abc');<br/>Erp.Grid.GetEditorValue('Grid-1','col1',1,'abc')|Result:Sets the editor value to 'abc' for first cell of the currently edited record.<br/>Sets editor value to 'abc' for column with name col1 in current edited row.<br/>Sets the editor valueto 'abc' in the specified cell.<br/>Sets the editor value to 'abc' for the column with name col1 for specified row.<br/>Sets the editor value to 'abc' for the column with name col1 for 2nd row in the grid">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="Erp.Grid.GetEditor(grid,col)" NoWF="1" Text="GetEditor" Info="Desc:Gets the editor in the cell for the currently selected record/specified record.|Eg:Erp.Grid.GetEditor('Grid-1',1);<br/>Erp.Grid.GetEditor('Grid-1','col1');<br/>Erp.Grid.GetEditor('Grid-1',cell);<br/>Erp.Grid.GetEditor('Grid-1','col1',tr);<br/>Erp.Grid.GetEditor('Grid-1','col1',1)|Result:Gets the editor  of first cell of the currently selected record in the grid.<br/>Gets editor  of column with name col1 in current selected row.<br/>Gets the editor  of the specified cell.<br/>Gets the editor  of the column with name col1 for specified row.<br/>Gets the editor  of the column with name col1 for 2nd row in the grid">
                                                    </telerik:RadTreeNode>
                                                     <telerik:RadTreeNode Value="Erp.Grid.RaiseError(grid,col,msg)" NoWF="1" Text="RaiseError" Info="Desc:Displays a custom error message in the specified cell.|Eg:Erp.Grid.RaiseError('Grid-1',1,'This is an error message');<br/>Erp.Grid.GetEditor('Grid-1','col1','This is an error message');<br/>Erp.Grid.GetEditor('Grid-1',cell,'This is an error message');<br/>Erp.Grid.GetEditor('Grid-1','col1',tr,'This is an error message');<br/>Erp.Grid.GetEditor('Grid-1','col1',1,'This is an error message')|Result:Shows error message in first cell of the currently selected record in the grid.<br/>Shows error message in  column with name col1 in current selected row.<br/>Shows error message in the specified cell.<br/>Shows error message in the column with name col1 for specified row.<br/>Shows error message in the column with name col1 for 2nd row in the grid">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="Erp.Grid.ClearError(grid,col)" NoWF="1" Text="ClearError" Info="Desc:Clears any custom error message in the specified cell.|Eg:Erp.Grid.RaiseError('Grid-1',1);<br/>Erp.Grid.GetEditor('Grid-1','col1');<br/>Erp.Grid.GetEditor('Grid-1',cell);<br/>Erp.Grid.GetEditor('Grid-1','col1',tr);<br/>Erp.Grid.GetEditor('Grid-1','col1',1)|Result:Clears error message in first cell of the currently selected record in the grid.<br/>Clears error message in  column with name col1 in current selected row.<br/>Clears error message in the specified cell.<br/>Clears error message in the column with name col1 for specified row.<br/>Shows error message in the column with name col1 for 2nd row in the grid">
                                                    </telerik:RadTreeNode>
                                                     <telerik:RadTreeNode Value="Erp.Grid.EnableGridEditing(grid,false)" NoWF="1" Text="EnableGridEditing" Info="Desc:Disables or Enables grid editing.|Eg:Erp.Grid.EnableGridEditing('Grid-1',false);">
                                                    </telerik:RadTreeNode>
                                                      <telerik:RadTreeNode Value="Erp.Grid.EnableGridTracking(grid,false)" NoWF="1" Text="EnableGridTracking" Info="Desc:Disables or Enables grid change tracking.|Eg:Erp.Grid.EnableGridTracking('Grid-1',false);">
                                                    </telerik:RadTreeNode>
                                                      <telerik:RadTreeNode Value="Erp.Grid.ShowGridFilter(grid,false)" NoWF="1" Text="ShowGridFilter" Info="Desc:Shows or hides the grid filter in each column.|Eg:Erp.Grid.ShowGridFilter('Grid-1',false);">
                                                    </telerik:RadTreeNode> 
                                                     <telerik:RadTreeNode Value="Erp.Grid.Serialization(grid,'MODIFIED','')" NoWF="1" Text="Serialization" Info="Desc:Set the serialization behaviour of grid when interface is being saved and data is sent to server.|Eg:Erp.Grid.Serialization('Grid-1',false);<br/>Erp.Grid.Serialization('Grid-1',true);<br/>Erp.Grid.Serialization('Grid-1',true,'col1,col2');<br/>Erp.Grid.Serialization('Grid-1','MODIFIED','col1,col2');<br/>Erp.Grid.Serialization('Grid-1',true,true);|Result:Grid data is not sent to server.None of the Erp.Grid methods will work<br/>Only selected rows grid data will be sent to server<br/>Grid data for all rows for specified columns will be sent to server.<br/>Grid data for only modified rows for specified columns will be sent to server.<br/>Grid data for all rows including blank rows and for all columns will be sent to server.">
                                                    </telerik:RadTreeNode>                                           
                                                </Nodes>
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="" NoWF="1" Text="Grid Events" Info="Desc:Various events that are triggered on a grid.">
                                                <Nodes>
                                                              <telerik:RadTreeNode Value="Erp.Grid.OnRowClick(grid,GridRowClick);\nfunction GridRowClick(gridId,args){\n\n}\n" NoWF="1" Text="OnRowClick" Info="Desc:Triggers when a row is clicked.|Eg:Erp.Grid.OnRowClick('Grid-1',function(gridId,args){<br/>//args.entityId<br/>//args.cell -- clicked cell<br/>//args.row -- clicked row<br/>//args.colName -- name assigned to the column<br/>//args.dataField -- database field name of column<br/>});">
                                                            </telerik:RadTreeNode>
                                                               <telerik:RadTreeNode Value="Erp.Grid.OnRowDblClick(grid,GridRowDblClick);\nfunction GridRowDblClick(gridId,args){\n\n}\n" NoWF="1" Text="OnRowDblClick" Info="Desc:Triggers when a row is double clicked.|Eg:Erp.Grid.OnRowDblClick('Grid-1',function(gridId,args){<br/>//args.entityId<br/>//args.cell -- double clicked cell<br/>//args.row -- double clicked row<br/>//args.colName -- name assigned to the column<br/>//args.dataField -- database field name of column<br/>});">
                                                            </telerik:RadTreeNode>
                                                             <telerik:RadTreeNode Value="Erp.Grid.OnRowSelected(grid,GridRowSelected);\nfunction GridRowSelected(gridId,args){\n\n}\n" NoWF="1" Text="OnRowSelected" Info="Desc:Triggers when a row is selected.|Eg:Erp.Grid.OnRowSelected('Grid-1',function(gridId,args){<br/>//args.entityId<br/>//args.row -- selected row<br/>});">
                                                            </telerik:RadTreeNode>
                                                            <telerik:RadTreeNode Value="Erp.Grid.OnRowAdding(grid,GridRowAdding);\nfunction GridRowAdding(gridId,args){\n\n}\n" NoWF="1" Text="OnRowAdding" Info="Desc:Triggers when a new row is being added to a grid. If this function returns false then new row will not be added.|Eg:Erp.Grid.OnRowAdding('Grid-1',function(gridId,args){<br/>//args.entityId<br/>//args.row -- last row in the grid<br/>});">
                                                            </telerik:RadTreeNode>
                                                             <telerik:RadTreeNode Value="Erp.Grid.OnRowAdded(grid,GridRowAdded);\nfunction GridRowAdded(gridId,args){\n\n}\n" NoWF="1" Text="OnRowAdded" Info="Desc:Triggers after a new row is added to the grid.|Eg:Erp.Grid.OnRowAdded('Grid-1',function(gridId,args){<br/>//args.entityId<br/>//args.row -- new row added<br/>});">
                                                            </telerik:RadTreeNode>
                                                             <telerik:RadTreeNode Value="Erp.Grid.OnRowEditing(grid,GridRowEditing);\nfunction GridRowEditing(gridId,args){\n\n}\n" NoWF="1" Text="OnRowEditing" Info="Desc:Triggers when a row is being selected for editing. If this function returns false then row will be uneditable.|Eg:Erp.Grid.OnRowEditing('Grid-1',function(gridId,args){<br/>//args.entityId<br/>//args.row -- current row being edited<br/>});">
                                                            </telerik:RadTreeNode>
                                                              <telerik:RadTreeNode Value="Erp.Grid.OnRowDataBound(grid,GridRowDataBound);\nfunction GridRowDataBound(gridId,args){\n\n}\n" NoWF="1" Text="OnRowDataBound" Info="Desc:Triggers when data is bound to the row.|Eg:Erp.Grid.OnRowDataBound('Grid-1',function(gridId,args){<br/>//args.entityId<br/>//args.row -- current row being edited<br/>});">
                                                            </telerik:RadTreeNode>
                                                             <telerik:RadTreeNode Value="Erp.Grid.OnCellEditing(grid,GridCellEditing);\nfunction GridCellEditing(gridId,args){\n\n}\n" NoWF="1" Text="OnCellEditing" Info="Desc:Triggers when an editor is rendered in the cell. This function should return true if any custom value has to be set in the editor.If function returns false then cell editing is aborted|Eg:Erp.Grid.OnCellEditing('Grid-1',function(gridId,args){<br/>//args.entityId<br/>//args.colName -- name assigned to the column<br/>//args.dataField -- database field name of column<br/>//args.editor -- editor control in the cell<br/>//args.value -- value in the cell<br/>//args.text -- text in the cell<br/>//args.cell -- current cell<br/>//args.row -- current row<br/>});">
                                                            </telerik:RadTreeNode>
                                                               <telerik:RadTreeNode Value="Erp.Grid.OnCellChanged(grid,GridCellChanged);\nfunction GridCellChanged(gridId,args){\n\n}\n" NoWF="1" Text="OnCellChanged" Info="Desc:Triggers when value in the cell is changed.|Eg:Erp.Grid.OnCellChanged('Grid-1',function(gridId,args){<br/>//args.entityId<br/>//args.colName -- name assigned to the column<br/>//args.dataField -- database field name of column<br/>//args.editor -- editor control in the cell<br/>//args.value -- value in the editor<br/>//args.cell -- current cell<br/>//args.row -- current row<br/>});">
                                                            </telerik:RadTreeNode>
                                                              <telerik:RadTreeNode Value="Erp.Grid.OnCellValidating(grid,GridCellValidating);\nfunction GridCellValidating(gridId,args){\n\n}\n" NoWF="1" Text="OnCellValidating" Info="Desc:Triggers when the cell is validated. If function returns a non empty string then validation fails for the cell.|Eg:Erp.Grid.OnCellValidating('Grid-1',function(gridId,args){<br/>//args.entityId<br/>//args.colName -- name assigned to the column<br/>//args.dataField -- database field name of column<br/>//args.editor -- editor control in the cell<br/>//args.value -- value in the editor<br/>//args.cell -- current cell<br/>//args.row -- current row<br/>});">
                                                            </telerik:RadTreeNode>
                                                              <telerik:RadTreeNode Value="Erp.Grid.OnRowValidating(grid,GridRowValidating);\nfunction GridRowValidating(gridId,args){\n\n}\n" NoWF="1" Text="OnRowValidating" Info="Desc:Triggers when editing state of row is completed.If function returns a non empty string then validation fails for the row.|Eg:Erp.Grid.OnRowValidating('Grid-1',function(gridId,args){<br/>//args.entityId<br/>//args.row -- current row being validated<br/>});">
                                                            </telerik:RadTreeNode>
                                                              <telerik:RadTreeNode Value="Erp.Grid.OnRowDeleting(grid,GridRowDeleting);\nfunction GridRowDeleting(gridId,args){\n\n}\n" NoWF="1" Text="OnRowDeleting" Info="Desc:Triggers when a row is selected for deletion. If this function returns false then record will not be deleted.|Eg:Erp.Grid.OnRowDeleting('Grid-1',function(gridId,args){<br/>//args.entityId<br/>//args.row -- current row being deleted<br/>//args.recordId -- record id of row being deleted<br/>});">
                                                            </telerik:RadTreeNode>
                                                               <telerik:RadTreeNode Value="Erp.Grid.OnRowDeleted(grid,GridRowDeleted);\nfunction GridRowDeleted(gridId,args){\n\n}\n" NoWF="1" Text="OnRowDeleted" Info="Desc:Triggers after the record has been deleted from the grid.|Eg:Erp.Grid.OnRowDeleted('Grid-1',function(gridId,args){<br/>//args.entityId<br/>//args.recordId -- record id of row that was deleted<br/>});">
                                                            </telerik:RadTreeNode>
                                                               <telerik:RadTreeNode Value="Erp.Grid.OnCellSaving(grid,GridCellSaving);\nfunction GridCellSaving(gridId,args){\n\n}\n" NoWF="1" Text="OnCellSaving" Info="Desc:Triggers when value in the cell is being read for saving.If this function returns false then current cell is skipped.|Eg:Erp.Grid.OnCellSaving('Grid-1',function(gridId,args){<br/>//args.entityId<br/>//args.colName -- name assigned to the column<br/>//args.dataField -- database field name of column<br/>//args.cell -- current cell<br/>//args.row -- current row<br/>//args.entity -- the Erp.Entity object to be saved<br/>//args.entityList -- the list of Erp.Entity that is going to be saved.<br/>});">
                                                            </telerik:RadTreeNode>
                                                            <telerik:RadTreeNode Value="Erp.Grid.OnRecordSaving(grid,GridRecordSaving);\nfunction GridRecordSaving(gridId,args){\n\n}\n" NoWF="1" Text="OnRecordSaving" Info="Desc:Triggers when a row data is being read for saving. If this function returns false then the entire save operation will be cancelled.If this function returns null then the current record will not be saved.|Eg:Erp.Grid.OnRecordSaving('Grid-1',function(gridId,args){<br/>//args.entityId<br/>//args.entity -- the Erp.Entity object to be saved<br/>//args.entityList -- the list of Erp.Entity that is going to be saved.<br/>//args.row -- the current grid row which is being saved<br/>});">
                                                            </telerik:RadTreeNode>                                                             
                                                             <telerik:RadTreeNode Value="Erp.Grid.OnGridSaving(grid,GridGridSaving);\nfunction GridGridSaving(gridId,args){\n\n}\n" NoWF="1" Text="OnGridSaving" Info="Desc:Triggers after all the data in the grid is read and changes are going to be saved in the database. If this function returns false then the entire save operation will be cancelled.|Eg:Erp.Grid.OnGridSaving('Grid-1',function(gridId,args){<br/>//args.entityId<br/>//args.entityList -- the list of Erp.Entity that is going to be saved.<br/>});">
                                                            </telerik:RadTreeNode>
                                                             <telerik:RadTreeNode Value="Erp.Grid.OnSaveComplete(grid,GridSaveComplete);\nfunction GridSaveComplete(gridId,args){\n\n}\n" NoWF="1" Text="OnSaveComplete" Info="Desc:Triggers after all changes are saved in the database.|Eg:Erp.Grid.OnSaveComplete('Grid-1',function(gridId,args){<br/>//args.entityId<br/>//args.result -- the result of the save operation.<br/>});">
                                                            </telerik:RadTreeNode>
                                                               <telerik:RadTreeNode Value="Erp.Grid.OnGridBinding(grid,GridBinding);\nfunction GridBinding(gridId,args){\n\n}\n" NoWF="1" Text="OnGridBinding" Info="Desc:Triggers when a grid is being databound or filtered or sorted.|Eg:Erp.Grid.OnGridBinding('Grid-1',function(gridId,result){<br/>//args.entityId<br/>//args.action -- BindGrid/Filter/Sort<br/>//args.gridTextFilter<br/>//args.gridFilter<br/>//args.gridSort<br/>});">
                                                            </telerik:RadTreeNode>
                                                              <telerik:RadTreeNode Value="Erp.Grid.OnGridDataBound(grid,GridDataBound);\nfunction GridDataBound(gridId,args){\n\n}\n" NoWF="1" Text="OnGridDataBound" Info="Desc:Triggers after data is bound to the grid.|Eg:Erp.Grid.OnGridDataBound('Grid-1',function(gridId,result){<br/>});">
                                                            </telerik:RadTreeNode>
                                                             <telerik:RadTreeNode Value="Erp.Grid.OnGridExporting(grid,GridExporting);\nfunction GridExporting(gridId, format, colInfo, settings){\n\n}\n" NoWF="1" Text="OnGridExporting" Info="Desc:Triggers when data is being exported from grid. If function returns false then exporting is cancelled|Eg:Erp.Grid.OnGridExporting('Grid1',function(gridId, format, colInfo, settings){<br/>//colInfo.FieldName<br/>//colInfo.HeaderText<br/>//colInfo.FooterText<br/>//colInfo.Width<br/>//colInfo.Hidden<br/>//colInfo.HeaderStyle<br/>//colInfo.ItemStyle<br/>//colInfo.FooterStyle<br/>//colInfo.Formatting<br/><br/>});">
                                                            </telerik:RadTreeNode>
                                                            <telerik:RadTreeNode Value="Erp.Grid.OnGridAdvancedFilter(grid,GridDataBound);\nfunction GridAdvancedFilter(gridId,args){\n\n}\n" NoWF="1" Text="OnGridAdvancedFilter" Info="Desc:Triggers after grid is filtered with advanced filter.|Eg:Erp.Grid.OnGridAdvancedFilter('Grid-1',function(gridId,result){<br/>});">
                                                            </telerik:RadTreeNode>
                                                         </Nodes>                                                    
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="" NoWF="1" Text="Repeater" Info="Desc:Repeater Related Functions">
                                                <Nodes>
                                                    <telerik:RadTreeNode Value="Erp.Repeater.Databind(repeaterId, data)" NoWF="1" Text="Databind" Info="Desc:Binds data to the Repeater |Eg:Erp.Repeater.Databind('Repeater-1',[{col1:'a',col2:'b'},{col1:'c',col2:'d'}]);">
                                                    </telerik:RadTreeNode>
                                                     <telerik:RadTreeNode Value="Erp.Repeater.AddItem(repeaterId, token, data)" NoWF="1" Text="AddItem" Info="Desc:Adds new item to the repeater and returns the newly created items token id.|Eg:Erp.Repeater.AddItem('Repeater-1', null, {col1:'a',col2:'b'});<br/>Erp.Repeater.AddItem('Repeater-1', null, [{col1:'a',col2:'b'},{col1:'c',col2:'d'}]);<br/>Erp.Repeater.AddItem('NestedRepeater-1', 'tk-1', {col1:'a',col2:'b'})<br/>|Result:A new row is created in the repeater with specified data.Token is null if Repeater is parent.method returns a single token id<br/>Multiple rows are created in the repeater with specified array of data.Method returns an array of newly created tokens<br/>A new row is created in the child repeater with specified data at the specified token position.">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="Erp.Repeater.InsertItem(repeaterId, token, data)" NoWF="1" Text="InsertItem" Info="Desc:Inserts new item to the repeater below the specified token id.|Eg:Erp.Repeater.AddItem('Repeater-1', 'tk-1', {col1:'a',col2:'b'});<br/>Erp.Repeater.AddItem('Repeater-1', 'tk-1', [{col1:'a',col2:'b'},{col1:'c',col2:'d'}]);<br/>Erp.Repeater.AddItem('NestedRepeater-1', 'tk-1', {col1:'a',col2:'b'})<br/>|Result:A new row is created in the repeater below item with token tk-1,method returns a single token id<br/>Multiple rows are created in the repeater with specified array of data below item with token tk-1.Method returns an array of newly created tokens<br/>A new row is created in the child repeater with specified data  below item with token tk-1.">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="Erp.Repeater.DeleteItem(token,deleteImmediately)" NoWF="1" Text="DeleteItem" Info="Desc:Deletes item from the repeater for the specified token |Eg:Erp.Repeater.DeleteItem('tk-1');<br/>Erp.Repeater.DeleteItem(['tk-1','tk-2']);<br/>>Erp.Repeater.DeleteItem(['tk-1','tk-2'],true);|Result:The record will be deleted from the repeater.Database changes will be done when Erp.Repeater.SaveChanges is called<br/The array of records will be deleted from the repeater.Database changes will be done when Erp.Repeater.SaveChanges is called<br/>The array of records will be deleted from the repeater also data will be deleted from database immediately">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="Erp.Repeater.GetDataContext(token)" NoWF="1" Text="GetDataContext" Info="Desc:Gets the underlying data and context for the specified token|Eg:Erp.Repeater.GetDataContext('tk-1');|Result:Result is an object with following structure<br/>{ repeater:id of repeater, index:current index in the data array, serial:serial number, token:unique id of the row, parent:parent row context in case of nested repeater,data : underlying data used to bind the row }">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="Erp.Repeater.GetItem(token)" NoWF="1" Text="GetItem" Info="Desc:Returns the underlying html element for the specified token">
                                                    </telerik:RadTreeNode>
                                                     <telerik:RadTreeNode Value="Erp.Repeater.GetToken(token)" NoWF="1" Text="GetToken" Info="Desc:Retrieves the token information for selected token">
                                                    </telerik:RadTreeNode>
                                                      <telerik:RadTreeNode Value="Erp.Repeater.GetParentItem(token)" NoWF="1" Text="GetParentItem" Info="Desc:Returns the parent row html element for the specified token in case of nested repeaters">
                                                    </telerik:RadTreeNode>
                                                     <telerik:RadTreeNode Value="Erp.Repeater.GetParentToken(token)" NoWF="1" Text="GetParentToken" Info="Desc:Retrieves the parent token information for specified token  in case of nested repeaters">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="Erp.Repeater.IsFirstItem(token)" NoWF="1" Text="IsFirstItem" Info="Desc:Checks whether the item for specified is the first item in the repeater">
                                                    </telerik:RadTreeNode>
                                                     <telerik:RadTreeNode Value="Erp.Repeater.IsLastItem(token)" NoWF="1" Text="IsLastItem" Info="Desc:Checks whether the item for specified is the last item in the repeater">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="Erp.Repeater.GetItems(repeaterId, token)" NoWF="1" Text="GetItems" Info="Desc:Returns the array of child html elements for the specified parent token and nested repeater id">
                                                    </telerik:RadTreeNode>
                                                     <telerik:RadTreeNode Value="Erp.Repeater.GetTokens(repeaterId, token)" NoWF="1" Text="GetTokens" Info="Desc:Retrieves the array of tokens for specified parent token and nested repeater id">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="Erp.Repeater.GetItemCount(repeaterId, token)" NoWF="1" Text="GetItemCount" Info="Desc:Returns the count of child html elements for the specified parent token and nested repeater id">
                                                    </telerik:RadTreeNode>
                                                     <telerik:RadTreeNode Value="Erp.Repeater.SaveChanges(repeaterId)" NoWF="1" Text="SaveChanges" Info="Desc:Updates the database with any modified or created records">
                                                    </telerik:RadTreeNode>
                                                     <telerik:RadTreeNode Value="Erp.Repeater.MarkForInsert(token)" NoWF="1" Text="MarkForInsert" Info="Desc:The specified record is marked for update and changes will be inserted in the database during Erp.Repeater.SaveChanges">
                                                    </telerik:RadTreeNode> 
                                                    <telerik:RadTreeNode Value="Erp.Repeater.MarkForUpdate(token,fieldname)" NoWF="1" Text="MarkForUpdate" Info="Desc:The specified record is marked for update and changes will be updated in the database during Erp.Repeater.SaveChanges|Eg:Erp.Repeater.MarkForUpdate('tk-1','field1')<br/>Erp.Repeater.MarkForUpdate('tk-1',['field1','field2'])">
                                                    </telerik:RadTreeNode> 
                                                    <telerik:RadTreeNode Value="Erp.Repeater.MarkForDelete(token)" NoWF="1" Text="MarkForDelete" Info="Desc:The specified record is marked for update and changes will be deleted in the database during Erp.Repeater.SaveChanges">
                                                    </telerik:RadTreeNode>                                      
                                                </Nodes>
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="" NoWF="1" Text="Repeater Events" Info="Desc:Various events that are triggered on a Repeater.">
                                                <Nodes>
                                                    <telerik:RadTreeNode Value="Erp.Repeater.OnItemSaving(repeaterId,RepeaterItemSaving);\nfunction RepeaterItemSaving(repeaterId,args){\n\n}\n" NoWF="1" Text="OnItemSaving" Info="Desc:Triggers when a row data is being read for saving. If this function returns false then the entire save operation will be cancelled.If this function returns null then the current record will not be saved.|Eg:Erp.Repeater.OnItemSaving('Repeater-1',function(repeaterId,args){<br/>//args.entityId<br/>//args.entity -- the Erp.Entity object to be saved<br/>//args.entityList -- the list of Erp.Entity that is going to be saved.<br/>//args.info -- repeater information<br/>//args.token -- unique identifier for the row<br/>//args.item -- current html element<br/>});">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="Erp.Repeater.OnItemDeleted(repeaterId,RepeaterItemDeleted);\nfunction RepeaterItemDeleted(repeaterId,args){\n\n}\n" NoWF="1" Text="OnItemDeleted" Info="Desc:Triggers when a row is deleted and Erp.Repeater.DeleteItem is called with deleteImmediately set to true.|Eg:Erp.Repeater.OnItemDeleted('Repeater-1',function(repeaterId,args){<br/>//args.info -- repeater information<br/>//args.result -- result of delete operation<br/>//args.tokens -- token information for deleted records.<br/>});">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="Erp.Repeater.OnRepeaterSaving(repeaterId,RepeaterSaving);\nfunction RepeaterSaving(repeaterId,args){\n\n}\n" NoWF="1" Text="OnRepeaterSaving" Info="Desc:Triggers after all the data in the repeater is read and changes are going to be saved in the database. If this function returns false then the entire save operation will be cancelled.|Eg:Erp.Repeater.OnRepeaterSaving('Repeater-1',function(repeaterId,args){<br/>//args.info -- repeater information<br/>//args.entityList -- the list of Erp.Entity that is going to be saved.<br/>});">
                                                     </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="Erp.Repeater.OnSaveComplete(repeaterId,RepeaterSaveComplete);\nfunction RepeaterSaveComplete(repeaterId,args){\n\n}\n" NoWF="1" Text="OnSaveComplete" Info="Desc:Triggers after all changes are saved in the database.|Eg:Erp.Repeater.OnSaveComplete('Repeater-1',function(repeaterId,args){<br/>//args.info -- repeater information<br/>//args.result -- the result of the save operation.<br/>});">
                                                    </telerik:RadTreeNode>
                                                     <telerik:RadTreeNode Value="Erp.Repeater.OnRepeaterDataBound(repeaterId,RepeaterDataBound);\nfunction RepeaterDataBound(repeaterId,args){\n\n}\n" NoWF="1" Text="OnRepeaterDataBound" Info="Desc:Triggers after data is bound to the repeater.|Eg:Erp.Repeater.OnRepeaterDataBound('Repeater-1',function(repeaterId,result){<br/>//args.info -- repeater information<br/>//args.token -- token for the parent row if it is a nested item<br/>});">
                                                      </telerik:RadTreeNode>
                                                      <telerik:RadTreeNode Value="Erp.Repeater.OnItemDataBound(repeaterId,RepeaterItemDataBound);\nfunction RepeaterItemDataBound(repeaterId,args){\n\n}\n" NoWF="1" Text="OnItemDataBound" Info="Desc:Triggers when data is bound to the row.|Eg:Erp.Repeater.OnItemDataBound('Repeater-1',function(repeaterId,args){<br/>//args.info -- repeater information<br/>//args.token -- token for the current row<br/>});">
                                                      </telerik:RadTreeNode>
                                                </Nodes>                                                    
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="" NoWF="1" Text="Document & Spreadheet" Info="Desc:Document & Spreadsheet Related Functions">
                                                <Nodes>
                                                    <telerik:RadTreeNode Value="" NoWF="1" Text="Document" Info="Desc:Document Related Functions">
                                                        <Nodes>
                                                             <telerik:RadTreeNode Value="Erp.Document.Load('Document1',{})" Text="Load" Info="Desc:Document is loaded into the editor|Eg:Erp.Document.Load('Document1', {Entity:'tbl_CORE_Company', Field:'Docs', RecordID:'123'});<br/>Erp.Document.Load('Document1', {FilePath:'%APPROOT%/documents/Doc123.docx'});<br/>Erp.Document.Load('Document1', {ResourceID:'123'});<br/>Erp.Document.Load('Document1', {Entity:'tbl_CORE_Company', Field:'Docs', RecordID:'123', DocName:'test.rtf', Format:'Rtf'});<br/>Erp.Document.Load('Document1', {Entity:'tbl_CORE_Company', Field:'Docs', RecordID:'123'}, function(args){alert('Loaded')});|Result:Document stored in field Docs in Company table for Company Id 123 is loaded into the Editor<br/>A Document is loaded from specified file path<br/>A Document with resource ID 123 is loaded from Resources<br/>A Document is loaded into the editor with specified file name and format<br/>Document is loaded with specified settings and a callback function is executed on completion<br/>Available formats are Doc, Docx, Txt, Rtf, ePub, Html, Mht, Odt, Xml">
                                                            </telerik:RadTreeNode>
                                                             <telerik:RadTreeNode Value="Erp.Document.Save('Document1')" Text="Save" Info="Desc:Document is saved into the field, using settings specified during Load|Eg:Erp.Document.Save('Document1');<br/>Erp.Document.Save('Document1', {Entity:'tbl_test', Field:'doc1', RecordID:'123', DocName:'test1.docx', Format:'Docx', AllowInsert:true});<br/>Erp.Document.Save('Document1',null,function(arg){alert(arg.Message);});|Result:Previously loaded document is saved<br/>The document is saved as Docx file in the specified field.If data doesnt exist then new record will be created<br/>Document is saved with default settings and a callback function is executed on completion.">
                                                            </telerik:RadTreeNode>
                                                             <telerik:RadTreeNode Value="Erp.Document.GetEditor('Document1')" Text="GetEditor" Info="Desc:Retrieves the Document editor object|Eg:Erp.Document.GetEditor('Document1');">
                                                            </telerik:RadTreeNode>
                                                            <telerik:RadTreeNode Value="Erp.Document.ToggleFullScreen('Document1',true)" Text="ToggleFullScreen" Info="Desc:Editor can be toggled between Full screen/Normal mode|Eg:Erp.Document.ToggleFullScreen('Document1',true);">
                                                            </telerik:RadTreeNode>
                                                             <telerik:RadTreeNode Value="Erp.Document.GetText('Document1')" Text="GetText" Info="Desc:Gets the document text|Eg:Erp.Document.GetText('Document1');">
                                                            </telerik:RadTreeNode>
                                                             <telerik:RadTreeNode Value="Erp.Document.InsertText('Document1','')" Text="InsertText" Info="Desc:Insert text in the document at cursor position|Eg:Erp.Document.InsertText('Document1','Hello World');">
                                                            </telerik:RadTreeNode>
                                                             <telerik:RadTreeNode Value="Erp.Document.InsertHyperLink('Document1',{})" Text="InsertHyperLink" Info="Desc:Insert hyperlink in the document at cursor position|Eg:Erp.Document.InsertHyperLink('Document1',{url:'http://www.google.com',text:'google',tooltip:'search'});">
                                                            </telerik:RadTreeNode>
                                                            <telerik:RadTreeNode Value="Erp.Document.InsertMergeField('Document1','')" Text="InsertMergeField" Info="Desc:Inserts a merge field in the document at cursor position|Eg:Erp.Document.InsertMergeField('Document1','field1');">
                                                            </telerik:RadTreeNode>
                                                            <telerik:RadTreeNode Value="Erp.Document.InsertDocVariable('Document1','')" Text="InsertDocVariable" Info="Desc:Inserts a document variable field in the document at cursor position|Eg:Erp.Document.InsertDocVariable('Document1','DATE');<br/>Erp.Document.InsertDocVariable('Document1','Var1');|Result:Inserts current date in the document<br/>Inserts a custom variable in the document<br/>Following are predefined variables DATE, TIME, NUMPAGES, PAGE">
                                                            </telerik:RadTreeNode>
                                                            <telerik:RadTreeNode Value="Erp.Document.OnInit('Document1',DocumentInit)\nfunction DocumentInit(args){\n}\n" Text="OnInit" Info="Desc:Event will be fired after editor is initialized|Eg:Erp.Document.OnInit('Document1',DocumentInit)<br/>function DocumentInit(args){<br/>}<br/>">
                                                            </telerik:RadTreeNode>
                                                            <telerik:RadTreeNode Value="Erp.Document.OnDocumentLoaded('Document1',DocumentLoaded)\nfunction DocumentLoaded(args){\n}\n" Text="OnDocumentLoaded" Info="Desc:Event will be fired after document is loaded in the editor|Eg:Erp.Document.OnDocumentLoaded('Document1',DocumentLoaded)<br/>function DocumentLoaded(args){<br/>}<br/>">
                                                            </telerik:RadTreeNode>
                                                            <telerik:RadTreeNode Value="Erp.Document.OnDocumentSaved('Document1',DocumentSaved)\nfunction DocumentSaved(args){\n}\n" Text="OnDocumentSaved" Info="Desc:Event will be fired after document is saved.|Eg:Erp.Document.OnDocumentSaved('Document1',DocumentSaved)<br/>function DocumentSaved(args){<br/>}<br/>">
                                                            </telerik:RadTreeNode>
                                                        </Nodes>
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="" NoWF="1" Text="Spread" Info="Desc:Spread Related Functions">
                                                        <Nodes>
                                                             <telerik:RadTreeNode Value="Erp.Spread.Load('Spread1',{})" Text="Load" Info="Desc:Document is loaded into the editor|Eg:Erp.Spread.Load('Spread1', {Entity:'tbl_CORE_Company', Field:'Docs', RecordID:'123'});<br/>Erp.Spread.Load('Spread1', {FilePath:'%APPROOT%/documents/spread123.xlsx'});<br/>Erp.Spread.Load('Spread1', {ResourceID:'123'});<br/>Erp.Spread.Load('Spread1', {Entity:'tbl_CORE_Company', Field:'Docs', RecordID:'123', DocName:'test.xls', Format:'Xls'});<br/>Erp.Spread.Load('Spread1', {Entity:'tbl_CORE_Company', Field:'Docs', RecordID:'123'}, function(args){alert('Loaded')});|Result:Spreadsheet stored in field Docs in Company table for Company Id 123 is loaded into the Editor<br/>A Spreadsheet is loaded from specified file path<br/>A Spreadsheet with resource ID 123 is loaded from Resources<br/>A Spreadsheet is loaded into the editor with specified file name and format<br/>Spreadsheet is loaded with specified settings and a callback function is executed on completion<br/>Available formats are Xls, Xlsx, Csv, Xlsm, Xlt, Xltm, Xltx, Txt, Xml">
                                                            </telerik:RadTreeNode>
                                                             <telerik:RadTreeNode Value="Erp.Spread.Save('Spread1')" Text="Save" Info="Desc:Document is saved into the field, using settings specified during Load|Eg:Erp.Spread.Save('Spread1');<br/>Erp.Spread.Save('Spread1', {Entity:'tbl_test', Field:'doc1', RecordID:'123', DocName:'test1.docx', Format:'Docx', AllowInsert:true});<br/>Erp.Spread.Save('Spread1',null,function(arg){alert(arg.Message);});|Result:Previously loaded Spreadsheet is saved<br/>The Spreadsheet is saved as Docx file in the specified field.If data doesnt exist then new record will be created<br/>Spreadsheet is saved with default settings and a callback function is executed on completion.">
                                                            </telerik:RadTreeNode>
                                                             <telerik:RadTreeNode Value="Erp.Spread.GetEditor('Spread1')" Text="GetEditor" Info="Desc:Retrieves the Spreadsheet editor object|Eg:Erp.Spread.GetEditor('Spread1');">
                                                            </telerik:RadTreeNode>
                                                            <telerik:RadTreeNode Value="Erp.Spread.ToggleFullScreen('Spread1',true)" Text="ToggleFullScreen" Info="Desc:Editor can be toggled between Full screen/Normal mode|Eg:Erp.Spread.ToggleFullScreen('Spread1',true);">
                                                            </telerik:RadTreeNode>
                                                            <telerik:RadTreeNode Value="Erp.Spread.OnInit('Spread1',DocumentInit)\nfunction DocumentInit(args){\n}\n" Text="OnInit" Info="Desc:Event will be fired after editor is initialized|Eg:Erp.Spread.OnInit('Spread1',DocumentInit)<br/>function DocumentInit(args){<br/>}<br/>">
                                                            </telerik:RadTreeNode>
                                                            <telerik:RadTreeNode Value="Erp.Spread.OnDocumentLoaded('Spread1',DocumentLoaded)\nfunction DocumentLoaded(args){\n}\n" Text="OnDocumentLoaded" Info="Desc:Event will be fired after document is loaded in the editor|Eg:Erp.Spread.OnDocumentLoaded('Spread1',DocumentLoaded)<br/>function DocumentLoaded(args){<br/>}<br/>">
                                                            </telerik:RadTreeNode>
                                                            <telerik:RadTreeNode Value="Erp.Spread.OnDocumentSaved('Spread1',DocumentSaved)\nfunction DocumentSaved(args){\n}\n" Text="OnDocumentSaved" Info="Desc:Event will be fired after document is saved.|Eg:Erp.Spread.OnDocumentSaved('Spread1',DocumentSaved)<br/>function DocumentSaved(args){<br/>}<br/>">
                                                            </telerik:RadTreeNode>
                                                        </Nodes>
                                                    </telerik:RadTreeNode>
                                                </Nodes>
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.OpenWindow()" Text="OpenWindow" Info="Desc:Opens a new window/Existing window with the specified settings. <a href='javascript:void(0)' onclick='OpenUrlEditor()' style='font-size: 14px;font-family: nunitoregular;color: #07F;' >Show Settings</a>|Eg:Erp.OpenWindow({Action:'VIEWFORM',Entity:'tbl_CORE_Company',Title:'Company',Location:'Self'});<br/>Erp.OpenWindow(url);<br/>Erp.OpenWindow(url,'Self');<br/>Erp.OpenWindow(url,'Popup',400,200);<br/>Erp.OpenWindow(url,'window-1');<br/>Erp.OpenWindow({Action:'VIEWFORM',Entity:'tbl_CORE_Company',Title:'Company'},'window-1');|Result:A new window with the specified settings is opened.<br/>A new window with the specified url is opened.<br/>The specified url is opened in the current window.<br/>A popup window with the specified url and size of width 400px by height 200px is opened.<br/>The url is opened in the specified window.<br/>The specified window is opened with the specified settings.">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.RefreshWindow()" Text="RefreshWindow" Info="Desc:Refreshes the current window or the window with the specified id|Eg:Erp.RefreshWindow();<br/>Erp.RefreshWindow('window-1');|Result:The current window is reloaded.<br/>The specified window is reloaded.">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.RefreshParent()" Text="RefreshParent" Info="Desc:Refreshes the grid in the parent window|Eg:Erp.RefreshParent();<br/>Erp.RefreshParent(true);<br/>Erp.RefreshParent(false,'grid-1');|Result:The parent grid is reloaded.<br/>The parent grid is reloaded and current window is closed.<br/>The parent grid with specified id is reloaded">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.CloseWindow()" Text="CloseWindow" Info="Desc:Closes the current interface. If true is passed in the function then the parent screen if any is refreshed|Eg:Erp.CloseWindow();<br/>Erp.CloseWindow(true);">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.OpenPopup('Panel-1')" Text="OpenPopup" Info="Desc:Displays a specified container as popup with the specified settings.|Eg:Erp.OpenPopup('Panel-1');<br/>Erp.OpenPopup('Panel-1',{showClose:true,autoClose: true,onClose:function(){alert('Popup Closing');}});|Result:A popup is opened with default settings.<br/>A popup is opened with a close button.Clicking anywhere outside window will close it.On closing popup a function can be called, if it returns false then popup wont be closed.">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.HidePopup('Panel-1')" Text="HidePopup" Info="Desc:Hides the newly opened popup.|Eg:Erp.HidePopup('Panel-1');">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.SaveWindow()" Text="SaveWindow" Info="Desc:Saves the data in the current interface.|Eg:Erp.SaveWindow();<br/>Erp.SaveWindow('dbfield1,dbfield2')|Result:Interface will be saved.<br/>Only specified fields will be saved">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.SaveAndClose()" Text="SaveAndClose" Info="Desc:Saves the current interface and closes it on success.|Eg:Erp.SaveAndClose();<br/>Erp.SaveAndClose('dbfield1,dbfield2')|Result:Interface will be saved and closed.<br/>Only specified fields will be saved, and interface will be closed.">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.ValidateData()" NoWF="1" Text="ValidateData" Info="Desc:Checks the interface for validation errors.|Eg:Erp.ValidateData()<br/>Erp.ValidateData(['field1','field2'])<br/>Erp.ValidateData('divCtr123')|Result:All The fields in the form are validated.<br/>Only specified fields in the form are validated<br/>All fields within the container id specified are validated">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.RaiseError()" NoWF="1" Text="RaiseError" Info="Desc:Raise errors for specified fields.|Eg:Erp.RaiseError([{id:'Text1',error:'error msg 1'},{id:'Text2',error:'error msg 2'}])">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.ClearErrors()" NoWF="1" Text="ClearErrors" Info="Desc:Clears any previously raised errors.|Eg:Erp.ClearErrors()">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.GetFieldValue()" NoWF="1" Text="GetFieldValue" Info="Desc:Retrieves the value in the specified field.Field name can be either specified as Html ID or Database field name prefixed with @ character.|Eg:Erp.GetFieldValue('Field-1');<br/>Erp.GetFieldValue('@CompanyName');">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Erp.GetFieldText()" NoWF="1" Text="GetFieldText" Info="Desc:Retrieves the raw text in the specified field.|Eg:Erp.GetFieldText('Field-1');<br/>Erp.GetFieldText('@CompanyName');">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.SetFieldValue()" NoWF="1" Text="SetFieldValue" Info="Desc:Set the value for the specified field.Field name can be either specified as Html ID or Database field name prefixed with @ character.|Eg:Erp.SetFieldValue('Field-1','qwe');<br/>Erp.SetFieldValue('@CompanyName','qwe');">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.GetFieldValue()" NoWF="0" Visible="false" Text="GetFieldValue" Info="Desc:Retrieves the value in the specified field.|Eg:Erp.GetFieldValue('Entry_1')">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.SetFieldValue()" NoWF="0" Visible="false" Text="SetFieldValue" Info="Desc:Set the value for the specified field.|Eg:Erp.SetFieldValue('Entry_1','qwe');">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Erp.SetDateRange()" NoWF="1" Text="SetDateRange" Info="Desc:Set the Min/Max Dates for a Date Control.|Eg:Erp.SetDateRange('@datefield','MIN',new Date());<br/>Erp.SetDateRange('@datefield','MIN','2016-01-05');<br/>Erp.SetDateRange('@datefield','MAX','2016-01-15');|Result:Dates before current system date cannot be chosen in date field.<br/>Dates before 5th Jan 2016 cannot be chosen in date field.<br/>Dates beyond 15th Jan 2016 cannot be chosen in date field">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.SetTimeRange()" NoWF="1" Text="SetTimeRange" Info="Desc:Set the Min/Max Time for a Time Control.|Eg:Erp.SetTimeRange('@timefield','MIN','05:30 PM');<br/>Erp.SetTimeRange('@timefield','MAX','07:30 PM');|Result:Time before 5:30 PM cannot be chosen in time field.<br/>Time after 7:30 PM cannot be chosen in time field.">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.GetField()" NoWF="1" Text="GetField" Info="Desc:Gets the specified Erp.Field object.Field name can be either specified as Html ID or Database field name prefixed with @ character.<br/>For further information of the Erp.Field Object refer the 'Field API & Events' section |Eg:Erp.GetField('Field-1');<br/>Erp.GetField('@CompanyName');">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.CreateField('TEXT',{Label: 'New Field'})" NoWF="1" Text="CreateField" Info="Desc:Programatically create an Erp.Field object with the specified type and settings and returns the Erp.Field object.|Eg:Erp.CreateField('TEXT',{Label: 'New Field', Id:'Field999', Parent:'parentCtr', Width:200, ShowBorder:true, Mandatory:true, Tooltip:'New Field Tooltip'});<br/>Erp.CreateField('SINGLESELECT',{Label: 'New Field', Entity:'tbl_CORE_Company',FormCode:'form1'});|Result:A Mandatory Text field is created with id Field999 and width 200px inside an element with id parentCtr.<br/>A SingleSelect field is created and populated with items from Company Entity<br/>Following are the supported types<br/>TEXT, MULTILINE, PASSWORD, URL, EMAIL, PHONE, NUMBER, DECIMAL, CURRENCY, DATE, DATETIME, TIME, CHECKBOX, SINGLESELECT, MIXEDSELECT, MULTISELECT, MIXEDMULTISELECT, LABEL, BUTTON">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.CreateTable(tbl, cols, opt)" NoWF="1" Text="CreateTable" Info="Desc:Renders a html table for the specified table variable.|Eg:Erp.CreateTable(tbl1);<br/>Erp.CreateTable(tbl1,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [{name: 'col1', title: 'col 1', width: 100,onCellRender:function(dr,col){ return '<a>'+dr[col]+'</a>';} , colCss: '', colStyle: '' },<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name: 'col2', title: 'col 2', width: 100 }],<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{Id:'tbl123', container:'parentCtr', showSerial:false, tableCss:'', tableStyle:'', rowCss: '', altRowCss: '', rowStyle: '', altRowStyle: '' });|Result:An html table is created with default settings for the table variable tbl1<br/>An html table is created with id tbl123 with specified settings inside an element with id parentCtr.">
                                            </telerik:RadTreeNode>

                                             <telerik:RadTreeNode Value="Erp.SetPageTitle()" Text="SetPageTitle" Info="Desc:Sets the title of the current page.|Eg:Erp.SetPageTitle('Hello World');">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Erp.GetPageTitle()" Text="GetPageTitle" Info="Desc:Gets the value of the current page.|Eg:Erp.GetPageTitle();">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.SetLabel()" Text="SetLabel" Info="Desc:Sets the value of a label.|Eg:Erp.SetLabel('Label-1','Hello World');">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Erp.GetLabel()" Text="GetLabel" Info="Desc:Gets the value of a label.|Eg:Erp.GetLabel('Label-1');|Result:'Hello World'">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.SetButtonLabel()" Text="SetButtonLabel" Info="Desc:Sets the label of a button.|Eg:Erp.SetButtonLabel('Button-1','Hello World');">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.SetDisplay()" Text="SetDisplay" Info="Desc:Shows or hides any layout Object(Field,Button,Label,Grid etc...).<br/>The object does not occupy space in the layout.|Eg:Erp.SetDisplay('Button-1',false);">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Erp.SetMandatory()" Text="SetMandatory" Info="Desc:Toggles a field as mandatory.|Eg:Erp.SetDisplay('Field-1',true);">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Erp.ToggleDisplay()" Text="ToggleDisplay" Info="Desc:Alternately Shows or hides any layout Object(Field,Button,Label,Grid etc...) depending on its visual state.It accepts a bool value to enable animation<br/>.|Eg:Erp.ToggleDisplay('Button-1');Erp.ToggleDisplay('panel-1',true);|Result:The button is alternately hidden and made visible.<br/>The panel is animated and alternately hidden and made visible">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.SetVisible()" Text="SetVisible" Info="Desc:Shows or hides any layout Object(Field,Button,Label,Grid etc...).<br/>The object still occupies space in the layout.|Eg:Erp.SetVisible('Button-1',false);">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.SetEnable()" Text="SetEnable" Info="Desc:Enable or Disables any layout Object(Field,Button,Label,Grid etc...).|Eg:Erp.SetEnable('Button-1',false);">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.SetParam(id,key,value)" Text="SetParam" Info="Desc:Sets a key-value data to any layout Object(Field,Button,Label,Grid etc...).|Eg:Erp.SetParam('Button-1','hello','world');|Result:This will assign a key 'hello' with value 'world' to the button">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.GetParam(id,key)" Text="GetParam" Info="Desc:This retrieves the assigned data for a given key for the layout object.|Eg:Erp.GetParam('Button-1','hello');|Result:'world'">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.RegisterEvent()" Text="RegisterEvent" Info="Desc:Registers event for any layout Object(Field,Button,Label,Grid etc...).|Eg: Erp.RegisterEvent('btn-Grid-1-Delete','click',function(){});|Result: A click event is registered on delete button with specified function.">
                                            </telerik:RadTreeNode> 
                                            <telerik:RadTreeNode Value="Erp.TriggerEvent()" Text="TriggerEvent" Info="Desc:Triggers the specified event for any layout Object(Field,Button,Label,Grid etc...).|Eg:Erp.TriggerEvent('btn-Grid-1-Delete','click');<br/>Erp.TriggerEvent('@branchlist','change');|Result: The previously assigned click event is triggered.<br/>The previously assigned change event is triggered">
                                            </telerik:RadTreeNode>                                           
                                            <telerik:RadTreeNode Value="Erp.ShowBusyMessage(msg)" Text="ShowBusyMessage" Info="Desc:Displays a message at the top of the screen and prevents user from interacting with the screen|Eg:Erp.ShowBusyMessage('Hello World');<br/>Erp.ShowBusyMessage('Hello World',false);|Result:A message is displayed at the top and user is prevented from data entry.<br/>The message is displayed but user interaction is also possible.">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.HideBusyMessage()" Text="HideBusyMessage" Info="Desc:The busy message previously displayed is hidden.">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.ShowMessage(msg,type)" Text="ShowMessage" Info="Desc:A user defined message can be displayed at the top right of screen with specified type.|Eg:Erp.ShowMessage('This is a success message','success');<br/>Erp.ShowMessage('This is an error message','error');<br/>Erp.ShowMessage('This is an alert message','alert');<br/>Erp.ShowMessage({<br/>&nbsp;&nbsp;&nbsp;&nbsp;id:&nbsp;null,&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;class:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;title:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;titleColor:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;titleSize:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;titleLineHeight:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;message:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;messageColor:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;messageSize:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;messageLineHeight:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;backgroundColor:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;theme:&nbsp;'light',&nbsp;//&nbsp;dark,light<br/>&nbsp;&nbsp;&nbsp;&nbsp;color:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;icon:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;iconText:&nbsp;'&amp;#xf1f8;',<br/>&nbsp;&nbsp;&nbsp;&nbsp;iconColor:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;iconUrl:&nbsp;null,<br/>&nbsp;&nbsp;&nbsp;&nbsp;image:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;imageWidth:&nbsp;50,<br/>&nbsp;&nbsp;&nbsp;&nbsp;maxWidth:&nbsp;null,<br/>&nbsp;&nbsp;&nbsp;&nbsp;zindex:&nbsp;null,<br/>&nbsp;&nbsp;&nbsp;&nbsp;layout:&nbsp;1,//1&nbsp;:&nbsp;small,2&nbsp;:&nbsp;medium<br/>&nbsp;&nbsp;&nbsp;&nbsp;balloon:&nbsp;false,<br/>&nbsp;&nbsp;&nbsp;&nbsp;close:&nbsp;true,<br/>&nbsp;&nbsp;&nbsp;&nbsp;closeOnEscape:&nbsp;false,<br/>&nbsp;&nbsp;&nbsp;&nbsp;closeOnClick:&nbsp;false,<br/>&nbsp;&nbsp;&nbsp;&nbsp;displayMode:&nbsp;0,&nbsp;//&nbsp;0&nbsp;:&nbsp;default,1&nbsp;:&nbsp;once,2&nbsp;:&nbsp;replace<br/>&nbsp;&nbsp;&nbsp;&nbsp;position:&nbsp;'bottomRight',&nbsp;//&nbsp;bottomRight,&nbsp;bottomLeft,&nbsp;topRight,&nbsp;topLeft,&nbsp;topCenter,&nbsp;bottomCenter,&nbsp;center<br/>&nbsp;&nbsp;&nbsp;&nbsp;target:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;targetFirst:&nbsp;true,<br/>&nbsp;&nbsp;&nbsp;&nbsp;timeout:&nbsp;5000,//false&nbsp;to&nbsp;disable<br/>&nbsp;&nbsp;&nbsp;&nbsp;rtl:&nbsp;false,<br/>&nbsp;&nbsp;&nbsp;&nbsp;animateInside:&nbsp;true,<br/>&nbsp;&nbsp;&nbsp;&nbsp;drag:&nbsp;true,<br/>&nbsp;&nbsp;&nbsp;&nbsp;pauseOnHover:&nbsp;true,<br/>&nbsp;&nbsp;&nbsp;&nbsp;resetOnHover:&nbsp;false,<br/>&nbsp;&nbsp;&nbsp;&nbsp;progressBar:&nbsp;true,<br/>&nbsp;&nbsp;&nbsp;&nbsp;progressBarColor:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;progressBarEasing:&nbsp;'linear',<br/>&nbsp;&nbsp;&nbsp;&nbsp;overlay:&nbsp;false,<br/>&nbsp;&nbsp;&nbsp;&nbsp;overlayClose:&nbsp;false,<br/>&nbsp;&nbsp;&nbsp;&nbsp;overlayColor:&nbsp;'rgba(0,&nbsp;0,&nbsp;0,&nbsp;0.6)',<br/>&nbsp;&nbsp;&nbsp;&nbsp;transitionIn:&nbsp;'fadeInUp',//bounceInLeft,&nbsp;bounceInRight,&nbsp;bounceInUp,&nbsp;bounceInDown,&nbsp;fadeIn,&nbsp;fadeInDown,&nbsp;fadeInUp,&nbsp;fadeInLeft,&nbsp;fadeInRight,flipInX<br/>&nbsp;&nbsp;&nbsp;&nbsp;transitionOut:&nbsp;'fadeOut',//fadeOut,&nbsp;fadeOutUp,&nbsp;fadeOutDown,&nbsp;fadeOutLeft,&nbsp;fadeOutRight,&nbsp;flipOutX<br/>&nbsp;&nbsp;&nbsp;&nbsp;transitionInMobile:&nbsp;'fadeInUp',<br/>&nbsp;&nbsp;&nbsp;&nbsp;transitionOutMobile:&nbsp;'fadeOutDown',<br/>&nbsp;&nbsp;&nbsp;&nbsp;buttons:&nbsp;{},<br/>&nbsp;&nbsp;&nbsp;&nbsp;inputs:&nbsp;{},<br/>&nbsp;&nbsp;&nbsp;&nbsp;onOpening:&nbsp;function&nbsp;()&nbsp;{},<br/>&nbsp;&nbsp;&nbsp;&nbsp;onOpened:&nbsp;function&nbsp;()&nbsp;{},<br/>&nbsp;&nbsp;&nbsp;&nbsp;onClosing:&nbsp;function&nbsp;()&nbsp;{},<br/>&nbsp;&nbsp;&nbsp;&nbsp;onClosed:&nbsp;function&nbsp;()&nbsp;{}<br/>});">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.HideMessage(id)" Text="HideMessage" Info="Desc:Hides any messages displayed  on screen.|Eg:Erp.HideMessage('msg-1');">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.ShowDialog(msg)" Text="ShowDialog" Info="Desc:A dialog box is shown to user with specified buttons.Additionaly a form id can be specified which will be displayed inside the popup|Eg:Erp.ShowDialog('Do you wish to delete?',[{label:'Yes',value:'btnYes',class:'btn-yes'},{label:'Cancel'}],function(cmd){});<br/>Erp.ShowDialog({title:'Take Action',message:'Do you wish to delete?',iconText:'&amp;#xf1f8;'},'Yes,No,Not_Sure',function(cmd){});<br/>Erp.ShowDialog({title:'Take Action',message:'Do you wish to delete?',iconText:'&amp;#xf1f8;'},'Yes,No,Not_Sure','div123',function(cmd){});<br/>Erp.ShowDialog({<br/>&nbsp;&nbsp;&nbsp;&nbsp;id:&nbsp;null,&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;class:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;title:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;titleColor:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;titleSize:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;titleLineHeight:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;message:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;messageColor:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;messageSize:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;messageLineHeight:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;backgroundColor:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;theme:&nbsp;'light',&nbsp;//&nbsp;dark,light<br/>&nbsp;&nbsp;&nbsp;&nbsp;color:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;icon:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;iconText:&nbsp;'&amp;#xf1f8;',<br/>&nbsp;&nbsp;&nbsp;&nbsp;iconColor:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;iconUrl:&nbsp;null,<br/>&nbsp;&nbsp;&nbsp;&nbsp;image:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;imageWidth:&nbsp;50,<br/>&nbsp;&nbsp;&nbsp;&nbsp;maxWidth:&nbsp;null,<br/>&nbsp;&nbsp;&nbsp;&nbsp;zindex:&nbsp;null,<br/>&nbsp;&nbsp;&nbsp;&nbsp;layout:&nbsp;1,//1&nbsp;:&nbsp;small,2&nbsp;:&nbsp;medium<br/>&nbsp;&nbsp;&nbsp;&nbsp;balloon:&nbsp;false,<br/>&nbsp;&nbsp;&nbsp;&nbsp;close:&nbsp;true,<br/>&nbsp;&nbsp;&nbsp;&nbsp;closeOnEscape:&nbsp;false,<br/>&nbsp;&nbsp;&nbsp;&nbsp;closeOnClick:&nbsp;false,<br/>&nbsp;&nbsp;&nbsp;&nbsp;displayMode:&nbsp;0,&nbsp;//&nbsp;0&nbsp;:&nbsp;default,1&nbsp;:&nbsp;once,2&nbsp;:&nbsp;replace<br/>&nbsp;&nbsp;&nbsp;&nbsp;position:&nbsp;'bottomRight',&nbsp;//&nbsp;bottomRight,&nbsp;bottomLeft,&nbsp;topRight,&nbsp;topLeft,&nbsp;topCenter,&nbsp;bottomCenter,&nbsp;center<br/>&nbsp;&nbsp;&nbsp;&nbsp;target:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;targetFirst:&nbsp;true,<br/>&nbsp;&nbsp;&nbsp;&nbsp;timeout:&nbsp;5000,//false&nbsp;to&nbsp;disable<br/>&nbsp;&nbsp;&nbsp;&nbsp;rtl:&nbsp;false,<br/>&nbsp;&nbsp;&nbsp;&nbsp;animateInside:&nbsp;true,<br/>&nbsp;&nbsp;&nbsp;&nbsp;drag:&nbsp;true,<br/>&nbsp;&nbsp;&nbsp;&nbsp;pauseOnHover:&nbsp;true,<br/>&nbsp;&nbsp;&nbsp;&nbsp;resetOnHover:&nbsp;false,<br/>&nbsp;&nbsp;&nbsp;&nbsp;progressBar:&nbsp;true,<br/>&nbsp;&nbsp;&nbsp;&nbsp;progressBarColor:&nbsp;'',<br/>&nbsp;&nbsp;&nbsp;&nbsp;progressBarEasing:&nbsp;'linear',<br/>&nbsp;&nbsp;&nbsp;&nbsp;overlay:&nbsp;false,<br/>&nbsp;&nbsp;&nbsp;&nbsp;overlayClose:&nbsp;false,<br/>&nbsp;&nbsp;&nbsp;&nbsp;overlayColor:&nbsp;'rgba(0,&nbsp;0,&nbsp;0,&nbsp;0.6)',<br/>&nbsp;&nbsp;&nbsp;&nbsp;transitionIn:&nbsp;'fadeInUp',//bounceInLeft,&nbsp;bounceInRight,&nbsp;bounceInUp,&nbsp;bounceInDown,&nbsp;fadeIn,&nbsp;fadeInDown,&nbsp;fadeInUp,&nbsp;fadeInLeft,&nbsp;fadeInRight,flipInX<br/>&nbsp;&nbsp;&nbsp;&nbsp;transitionOut:&nbsp;'fadeOut',//fadeOut,&nbsp;fadeOutUp,&nbsp;fadeOutDown,&nbsp;fadeOutLeft,&nbsp;fadeOutRight,&nbsp;flipOutX<br/>&nbsp;&nbsp;&nbsp;&nbsp;transitionInMobile:&nbsp;'fadeInUp',<br/>&nbsp;&nbsp;&nbsp;&nbsp;transitionOutMobile:&nbsp;'fadeOutDown',<br/>&nbsp;&nbsp;&nbsp;&nbsp;buttons:&nbsp;{},<br/>&nbsp;&nbsp;&nbsp;&nbsp;inputs:&nbsp;{},<br/>&nbsp;&nbsp;&nbsp;&nbsp;onOpening:&nbsp;function&nbsp;()&nbsp;{},<br/>&nbsp;&nbsp;&nbsp;&nbsp;onOpened:&nbsp;function&nbsp;()&nbsp;{},<br/>&nbsp;&nbsp;&nbsp;&nbsp;onClosing:&nbsp;function&nbsp;()&nbsp;{},<br/>&nbsp;&nbsp;&nbsp;&nbsp;onClosed:&nbsp;function&nbsp;()&nbsp;{}<br/>});">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Erp.ShowFileUpload()" Text="ShowFileUpload" Info='Desc:A popup with a file upload control is launched|Eg:Erp.ShowFileUpload({ onUploadComplete: function(data){console.log(data);}});<br/>Erp.ShowFileUpload({ fileExt: "jpg,bmp", fileSize: 0.25,parent:"", showLink: true,linkUrl:"../temp/test.gif", title: "Upload File", onUploadComplete: function(result,options){}, onUploadCancel:  function(options){} });'>
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Erp.ShowPDF()" Text="ShowPDF" Info='Desc:A PDF viewers is launched with specified settings|Eg:Erp.ShowPDF("test.pdf");<br/>Erp.ShowPDF({ { recordId: "123", entityId: "tbl_Core_company", field: "pdffield", path: "", page: 0, window: "window-1" } });'>
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.OverrideSystemMessage()" Text="OverrideSystemMessage" Info="Desc:This method can be used to overried any system generated messages.|Eg:Erp.OverrideSystemMessage(myCustomMsg);<br/>function myCustomMsg(msg){<br/>if(Fn.Contains(msg,'error',true))return 'Hello World';<br/>}<br/>|Result:If the system generated message contains the word 'error' then the message is overriden to display message 'Hello World'.">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.ExecuteTask({TaskID:'123',\n EntityID:'',\n RecordID:'',\n Arg1:'a',Arg2:'b'\n},taskCallback);\nfunction taskCallback(result){\n}\n" Text="ExecuteTask" Info="Desc:Executes the specified Task with provided arguments. <a href='javascript:void(0)' onclick='OpenUrlEditor(1)'  style='font-size: 14px;font-family: nunitoregular;color: #07F;' >Get Task ID</a>|Eg:Erp.ExecuteTask({TaskID:'123',EntityID:'',RecordID:'',Arg1:'a',Arg2:'b'},<br/>function(result){alert(result['Success']);});|Result:The task with specified task id is executed and an optional callback function is executed on completion of task.<br/>Result is an object with following structure<br/>{ Success:true/false, Exception:true/false, WorkflowCompleted:true/false, ExceptionMessage:'', Message:'' }">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Erp.ExecuteTaskScript(scriptID,{},taskScriptCallback);\nfunction taskScriptCallback(result){\n}\n" Text="ExecuteTaskScript" Info="Desc:Executes the specified ITaskScript Task with provided arguments|Eg:Erp.ExecuteTaskScript('123123',{Arg1:'a',Arg2:'b'},<br/>function(result){});|Result:The task with specified task id is executed and an optional callback function is executed on completion of task.">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Erp.RegisterTask({})" Text="RegisterTask" Info="Desc:Registers a task to be scheduled by the system scheduler. <a href='javascript:void(0)' onclick='OpenUrlEditor(2)'  style='font-size: 14px;font-family: nunitoregular;color: #07F;' >Get Scheduler Settings</a>|Eg:Erp.RegisterTask({Entity:'',RecordID:'',Action:''},<br/>function(result){alert(result);});|Result:The task with specified settings is scheduled.">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Erp.RaiseNotification({...},function(){});" Text="RaiseNotification" Info="Desc:Raises a notification with provided arguments. <a href='javascript:void(0)' onclick='OpenUrlEditor(3)'  style='font-size: 14px;font-family: nunitoregular;color: #07F;' >Notification Settings</a>">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Erp.ExecuteSql('select 1','VALUE',{},'TOKEN',sqlCallback);\nfunction sqlCallback(result){\n}\n" Text="ExecuteSql" Info="Desc:The specified sql query(Select/Insert/update/Delete) will be fired and the result will be retrieved in specified format.A valid token is required for executing the sql.|Eg:Erp.ExecuteSql('select * from tbl_SYS_Users where Users_Pid=@UserID','TABLE',{'@UserID':[User.Users_pid]},'VALID TOKEN',<br/>function(result){alert(result['Success']);});<br/>Erp.ExecuteSql('select * from tbl_SYS_Users where Users_Pid in (@UserID) ','TABLE',{'@UserID':['1','2','3']},'VALID TOKEN',<br/>function(result){alert(result['Success']);});<br/>Erp.ExecuteSql('select username from tbl_SYS_Users where Users_Pid=@UserID','VALUE',{'@UserID':[User.Users_pid]},'VALID TOKEN',<br/>function(result){alert(result['Success']);});<br/>Erp.ExecuteSql(&quot;update tbl_SYS_Users set email='a@b.c' where Users_Pid=@UserID&quot;,'',{'@UserID':[User.Users_pid]},'VALID TOKEN',<br/>function(result){alert(result['Success']);});|Result:Tabular Data will be retrieved from Users entity for the currently logged in user.<br/>Username value will be retrieved from the User entity for current user.<br/>The Sql will be fired, and number of rows affected will be retrieved.<br/>Result is an object with following structure<br/>{ Success:true/false, ErrorMessage:'', Data:'Result is retrieved as TABLE/VALUE/ROWS AFFECTED' }">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Erp.ExecuteBatchSql('select 1',[],'TOKEN',sqlCallback);\nfunction sqlCallback(result){\n}\n" Text="ExecuteBatchSql" Info="Desc:The specified sql query(Insert/update/Delete) will be fired multiple time for all items in array.A valid token is required for executing the sql.|Eg:Erp.ExecuteBatchSql('update tbl_SYS_Users set field=@field1 where Users_Pid=@UserID',[{'@UserID':'1','@field1':'abc'},{'@UserID':'2','@field1':'qwe'}],'VALID TOKEN',<br/>function(result){alert(result['Success']);});|Result:Data will updated for all users where id is specified in array<br/>{ Success:true/false, ErrorMessage:'', Data:'Result is retrieved as ROWS AFFECTED' }">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.GetRecordTitle(recId,entityId,function(title){alert(title);});\n" Text="GetRecordTitle" Info="Desc:Retrieves the title of the specified record for an entity|Eg:Erp.GetRecordTitle([User.Users_pid],'tbl_SYS_Users',<br/>function(title){alert(title);});|Result:The title for the current logged in user is retrieved">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.GetRecordTitleMulti(records,function(title){alert(title);});\n" Text="GetRecordTitleMulti" Info="Desc:Retrieves a list of titles for all the records|Eg:Erp.GetRecordTitleMulti([{EntityID:'tbl_core_currencylist',RecordID:'INR'},{EntityID:'tbl_core_currencylist',RecordID:'USD'}],<br/>function(result){alert(result);});|Result:result adds a Text property in the args provided to the function">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Erp.GetActualRecords(Erp.Grid.GetRecordID_Multiple('Grid-1'),function(result){ });\n" Text="GetActualRecords" Info="Desc:Retrieves actual array of records for the selected grid|Eg:Erp.GetActualRecords(Erp.Grid.GetRecordID_Multiple('Grid-1'),<br/>function(result){alert(result);});">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Erp.SaveGridSelection(Erp.Grid.GetRecordID_Multiple('Grid-1'),'key123','CSV',function(){ });\n" Text="SaveGridSelection" Info="Desc:Saves the actual array of records for the selected grid in session with specified session  key|Eg:Erp.SaveGridSelection(Erp.Grid.GetRecordID_Multiple('Grid-1'),'key123','',<br/>function(){alert('saved');});<br/>Erp.SaveGridSelection(Erp.Grid.GetRecordID_Multiple('Grid-1'),'key123','CSV',<br/>function(){alert('saved');});|Result:The array of records are saved as an array object in the session with key name 'key123'<br/>The array of records are saved as a csv string in the session with key name 'key123'">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.LoadVariable('var',function(){ });\n" Text="LoadVariable" Info="Desc:Reloads a previously declared variable of table or value type|Eg:Erp.LoadVariable('tbl123',function(){alert(tbl123);});<br/>Erp.LoadVariable(['tbl123','val1','val2'],function(){alert(val1);});<br/>Erp.LoadVariable(['tbl123','val1','val2'],true);|Result:The variable with name tbl123 is loaded and the specified callback function is executed after loading<br/>All the variables specified in the array is loaded<br/>All the variables are loaded Synchronously.">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Erp.ExportDocument(content, 'PDF');\n" Text="ExportDocument" Info="Desc:The content is exported in the specified format|Eg:Erp.LoadVariable('tbl123',function(){alert(tbl123);});<br/>Erp.LoadVariable(['tbl123','val1','val2'],function(){alert(val1);});<br/>Erp.ExportDocument('Hello World','EXCEL');<br/>Erp.ExportDocument('Hello World','PDF',{PageSize:'A4',PageOrientation:'Landscape',MarginTop:'50',MarginRight:'',MarginBottom:'',MarginLeft:'50'});|Result:The text is exported into excel file.<br/>Pdf file is created with the specified settings.">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.ServerCommand('cmd1',{},function(cmd,args){alert(cmd);console.log(args);});\n" Text="ServerCommand" Info="Desc:Triggers a command which will execute a server script.Callback Function parameter args will contain the original args sent to server including any other properties set on server|Eg:Erp.ServerCommand('cmd1',{arg1:'1'},function(cmd,args){alert(cmd);console.log(args);});">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Erp.SetUserPreference('key',{a:1,b:2},function(){});\n" Text="SetUserPreference" Info="Desc:Saves custom dictionary data for the current logged in user|Eg:Erp.SetUserPreference('key1',{a:1,b:2},function(){});">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Erp.UpdateUserPreference('key',{a:1,b:2},function(){});\n" Text="UpdateUserPreference" Info='Desc:Updates only specified data in the dictionary if key already exists in database.If key doesnt exist then new key is added with specified value|Eg:Erp.UpdateUserPreference("key1",{a:1,b:2},function(){});'>
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Erp.GetUserPreference('key',function(result){console.log(result);});\n" Text="GetUserPreference" Info="Desc:Returns User's personal data associated with the specified key|Eg:Erp.GetUserPreference('key1',function(result){console.log(result);});|Result:{a:1,b:2}">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.BeginProgress();\n" Text="BeginProgress" Info="Desc:Initializes the Progressbar with specified settings|Eg:Erp.BeginProgress();<br/>Erp.BeginProgress(false);<br/>Erp.BeginProgress(true,function(r){alert(r);});<br/>Erp.BeginProgress(true,true);|Result:Progressbar is launched with default settings.<br/>Progressbar is displayed with only counter,No description area is displayed<br/>A progress callback is supplied which is triggered on each progress change<br/>Progressbar is launched  but polling mechanism is disabled">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value='Erp.SetProgress("Message",1,10);\n' Text="SetProgress" Info='Desc:Programatically set the value in the progressbar|Eg:Erp.SetProgress(50);<br/>Erp.SetProgress(0,false);<br/>Erp.SetProgress("Message 123");<br/>Erp.SetProgress("Message 123",30);<br/>Erp.SetProgress("Message 123",1,3);<br/>Erp.SetProgress(1,3);<br/>|Result:Value is set to 50%.<br/>Value is set to 0% without animation<br/>Only message is set in the progressbar, value is not updated<br/>Message is set in the progressbar and value is set to 30%<br/>Message is set in the progressbar and value is set to 33% based on index 1 and count 3<br/>Message is not set only value is set to 33% based on index 1 and count 3'>
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.EndProgress();\n" Text="EndProgress" Info="Desc:Progressbar is stopped and hidden|Eg:Erp.EndProgress();">
                                            </telerik:RadTreeNode>
                                        </Nodes>
                                    </telerik:RadTreeNode>
                                    <telerik:RadTreeNode SS="1" Value="InterfaceFunctions" Text="Interface Functions">
                                        <Nodes>
                                            <telerik:RadTreeNode Value="" SS="1" Text="Grid" Info="Desc:Grid Related Functions">
                                                <Nodes>
                                                     <telerik:RadTreeNode Value="string id= Erp.Grid.GetRecordID(grid)" NoWF="1" Text="GetRecordID" Info="Desc:Gets the record id of the currently selected record/specified record in the grid.|Eg:Erp.Grid.GetRecordID('Grid-1');|Result:Retrieves the the record id of the currently selected record in the grid.">
                                                    </telerik:RadTreeNode>
                                                     <telerik:RadTreeNode Value="string val=Erp.Grid.GetParamValue(grid,paramInd)" NoWF="1" Text="GetParamValue" Info="Desc:Gets the associated param value for the currently selected record/specified record.|Eg:Erp.Grid.GetParamValue('Grid-1',0);|Result:Gets the value for the first param  for currently selected row.">
                                                    </telerik:RadTreeNode>
                                                     <telerik:RadTreeNode Value="string[] ids = Erp.Grid.GetRecordID_Multiple(grid)" NoWF="1" Text="GetRecordID_Multiple" Info="Desc:Gets an array of record ids for all the selected records in the grid.|Eg:Erp.Grid.GetRecordID_Multiple('Grid-1');|Result:[1,2,5]">
                                                    </telerik:RadTreeNode>                                                                                                   
                                                     <telerik:RadTreeNode Value="string[] paramVals = Erp.Grid.GetParamValue_Multiple(grid,paramInd)" NoWF="1" Text="GetParamValue_Multiple" Info="Desc:Gets an array of associated param values for all selected records.|Eg:Erp.Grid.GetParamValue_Multiple('Grid-1',0);|Result:['param1','param2','param5']">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="string[] arrFilter = Erp.Grid.GetRecordID_Filtered(grid)" NoWF="1" Text="GetRecordID_Filtered" Info="Desc:Gets an array of record ids for all the filtered records in the grid.|Eg:Erp.Grid.GetRecordID_Filtered('Grid-1');">
                                                    </telerik:RadTreeNode>                                                                                                  
                                                    <telerik:RadTreeNode Value="string[] arrFilterParam = Erp.Grid.GetParamValue_Filtered(grid,paramInd)" NoWF="1" Text="GetParamValue_Filtered" Info="Desc:Gets an array of associated param values for all filtered records.|Eg:Erp.Grid.GetParamValue_Filtered('Grid-1',0);">
                                                    </telerik:RadTreeNode> 
                                                     <telerik:RadTreeNode Value='string[] ids = Erp.Grid.GetActualRecords((object[])args["selection"])' NoWF="1" Text="GetActualRecords" Info="Desc:Gets an array of record ids for all the selected records in the grid.|Eg:Erp.Grid.GetActualRecords((object[])args['selection']);|Result:[1,2,5]">
                                                    </telerik:RadTreeNode> 
                                                    <telerik:RadTreeNode Value='string sql = Erp.Grid.GetActualRecordsSql((object[])args["selection"])' NoWF="1" Text="GetActualRecordsSql" Info="Desc:Gets the sql for the filtered records in the grid.|Eg:Erp.Grid.GetActualRecordsSql((object[])args['selection']);|Result:[1,2,5]">
                                                    </telerik:RadTreeNode>        
                                                    <telerik:RadTreeNode Value="int count = Erp.Grid.GetRowCount(grid);\n" NoWF="1" Text="GetRowCount" Info="Desc:Gets total number of serialized rows.|Eg:int count = Erp.Grid.GetRowCount('Grid-1');">
                                                    </telerik:RadTreeNode> 
                                                    <telerik:RadTreeNode Value="string[] columns = Erp.Grid.GetColumns(grid);\n" NoWF="1" Text="GetColumns" Info="Desc:Gets list of serialized columns.|Eg:string[] columns=Erp.Grid.GetColumns('Grid-1');">
                                                    </telerik:RadTreeNode> 
                                                     <telerik:RadTreeNode Value="object val = Erp.Grid.GetRecordValue(grid,colName,rowIndex);\n" NoWF="1" Text="GetRecordValue" Info="Desc:Gets the value in specified row and column.|Eg:object val = Erp.Grid.GetRecordValue('Grid-1','col123',1);">
                                                    </telerik:RadTreeNode>  
                                                     <telerik:RadTreeNode Value="string pk = Erp.Grid.GetRecordPk(grid,rowIndex);\n" NoWF="1" Text="GetRecordPk" Info="Desc:Gets the primary key of the specified row.|Eg:string pk = Erp.Grid.GetRecordPk('Grid-1',1);">
                                                    </telerik:RadTreeNode>    
                                                     <telerik:RadTreeNode Value="string state = Erp.Grid.GetRecordState(grid,rowIndex);\n" NoWF="1" Text="GetRecordState" Info="Desc:Gets the row state (NEW,MODIFIED) of the specified row.|Eg:string state = Erp.Grid.GetRecordState('Grid-1',1);">
                                                    </telerik:RadTreeNode>   
                                                       <telerik:RadTreeNode Value="bool hasChanges = Erp.Grid.HasChanges(grid);\n" NoWF="1" Text="HasChanges" Info="Desc:Determines whether grid was modified on client.|Eg:bool hasChanges = Erp.Grid.HasChanges('Grid-1');">
                                                    </telerik:RadTreeNode>                  
                                                </Nodes>
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="" SS="1" Text="Repeater" Info="Desc:Repeater Related Functions">
                                                <Nodes>
                                                     <telerik:RadTreeNode Value="ErpRepeaterToken tokenData = Erp.Repeater.GetToken(token);\n" NoWF="1" Text="GetToken" Info="Desc:Retrieves the token information for selected token">
                                                    </telerik:RadTreeNode>                                                  
                                                     <telerik:RadTreeNode Value="ErpRepeaterToken tokenData = Erp.Repeater.GetParentToken(token);\n" NoWF="1" Text="GetParentToken" Info="Desc:Retrieves the parent token information for specified token  in case of nested repeaters">
                                                    </telerik:RadTreeNode>                                                                                                   
                                                     <telerik:RadTreeNode Value="List&lt;ErpRepeaterToken&gt; tokens = Erp.Repeater.GetTokens(repeaterId, token);\n" NoWF="1" Text="GetTokens" Info="Desc:Retrieves the array of tokens for specified parent token and nested repeater id">
                                                    </telerik:RadTreeNode>
                                                </Nodes>
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Erp.GetFieldValue();" NoWF="1" Text="GetFieldValue" Info='Desc:Retrieves the value in the specified field.Field name can be either specified as Html ID or Database field name prefixed with @ character.|Eg:Erp.GetFieldValue("Field-1");<br/>Erp.GetFieldValue("@CompanyName");'>
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value='Erp.SetFieldValue("@field","abc");' NoWF="1" Text="SetFieldValue" Info='Desc:Set the value for the specified field.Field name can be either specified as Html ID or Database field name prefixed with @ character.|Eg:Erp.SetFieldValue("Field-1","qwe");<br/>Erp.SetFieldValue("@CompanyName","qwe");'>
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value='var ent=Erp.GetRelField("@field","rel1","rel2");' NoWF="1" Text="GetRelField" Info='Desc:Retrieves the ErpEntity object related to the specified SINGLE SELECT field.Field name can be either specified as Html ID or Database field name prefixed with @ character.|Eg:Erp.GetRelField("Field-1");<br/>Erp.GetRelField("@CompanyName");<br/>Erp.GetRelField("@CompanyName","RelField1","RelField2")'>
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value='Erp.SetLabel("label-1","abc");' NoWF="1" Text="SetLabel" Info='Desc:Set the value for the specified label.|Eg:Erp.SetLabel("label-1","abc");'>
                                            </telerik:RadTreeNode>
                                              <telerik:RadTreeNode Value="Erp.SetParam(id,key,value);" Text="SetParam" Info='Desc:Sets a key-value data to any layout Object(Field,Button,Label,Grid etc...).|Eg:Erp.SetParam("Button-1","hello","world");|Result:This will assign a key "hello" with value "world" to the button'>
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.GetParam(id,key);" Text="GetParam" Info='Desc:This retrieves the assigned data for a given key for the layout object.|Eg:Erp.GetParam("Button-1","hello");|Result:"world"'>
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Erp.ShowMessage(msg,type);" Text="ShowMessage" Info='Desc:A user defined message can be displayed at the top right of screen with specified type.|Eg:Erp.ShowMessage("This is a success message","success");<br/>Erp.ShowMessage("This is an error message","error");<br/>Erp.ShowMessage("This is an alert message","alert");'>
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Erp.SetDisplay();" Text="SetDisplay" Info='Desc:Shows or hides any layout Object(Field,Button,Label,Grid etc...).<br/>The object does not occupy space in the layout.|Eg:Erp.SetDisplay("Button-1",false);'>
                                            </telerik:RadTreeNode>                                          
                                            <telerik:RadTreeNode Value="Erp.SetVisible();" Text="SetVisible" Info='Desc:Shows or hides any layout Object(Field,Button,Label,Grid etc...).<br/>The object still occupies space in the layout.|Eg:Erp.SetVisible("Button-1",false);'>
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.SetEnable();" Text="SetEnable" Info='Desc:Enable or Disables any layout Object(Field,Button,Label,Grid etc...).|Eg:Erp.SetEnable("Button-1",false);'>
                                            </telerik:RadTreeNode>
                                              <telerik:RadTreeNode Value="Erp.SetPageTitle();" Text="SetPageTitle" Info='Desc:Sets the title of the current page.|Eg:Erp.SetPageTitle("Hello World");'>
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Erp.GetPageTitle();" Text="GetPageTitle" Info='Desc:Gets the value of the current page.|Eg:Erp.GetPageTitle();'>
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.GetProp();" Text="GetProp" Info='Desc:Retrieves the property value for a given name.Property names are those key-value items specified in the query string part of the url.|Eg:Erp.GetProp("ID")'>
                                            </telerik:RadTreeNode>
                                              <telerik:RadTreeNode Value="Erp.SaveWindow();" Text="SaveWindow" Info="Desc:Saves the data in the current interface.|Eg:Erp.SaveWindow();<br/>Result is an object with following structure<br/>{ Success:true/false, ErrorMessage:'', ID:'Retrieves newly created ID' }">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Erp.CloseWindow();" Text="CloseWindow" Info="Desc:Closes the current interface. If true is passed in the function then the parent screen if any is refreshed|Eg:Erp.CloseWindow();<br/>Erp.CloseWindow(true);">
                                            </telerik:RadTreeNode>
                                              <telerik:RadTreeNode Value="Erp.Redirect(url);" Text="Redirect" Info='Desc:Page is redirected to specified url|Eg:Erp.Redirect("~/test.aspx");'>
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value='Erp.ExecuteTask(new Dictionary<string, object>() { \n  { "TaskID", "123" }, \n  { "RecordID", "456" }, \n  { "EntityID", "tbl_Core_Company" } , \n  { "Arg1", 789 }\n});\n' Text="ExecuteTask" Info="Desc:Executes the specified Task with provided arguments. <a href='javascript:void(0)' onclick='OpenUrlEditor(1)'  style='font-size: 14px;font-family: nunitoregular;color: #07F;' >Get Task ID</a><br/>Result is an object with following structure<br/>{ Success:true/false, Exception:true/false, ExceptionMessage:'', WorkflowCompleted:true/false, WorkflowSucceded:true/false, Message:'' }">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value='Erp.ExecuteTaskScript(scriptID,new Dictionary<string, object>() { \n  { { "Arg1", 789 }\n});\n' Text="ExecuteTaskScript" Info="Desc:Executes the specified ITaskScript Task with provided arguments.">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Erp.RegisterTask(new Dictionary<string, object>() {});\n" Text="RegisterTask" Info="Desc:Registers a task to be scheduled by the system scheduler. <a href='javascript:void(0)' onclick='OpenUrlEditor(2)'  style='font-size: 14px;font-family: nunitoregular;color: #07F;' >Get Task Settings</a>.Method returns Task ID as string">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value='string err="";\nvar dt=Erp.ExecuteSql<DataTable>("select * from tbl_Core_Company where company_pid=@ID",\n               new Dictionary<string, object>() { \n                 { "@ID", "123" }\n               },out err);\n' Text="ExecuteSql" Info='Desc:The specified sql query(Select/Insert/update/Delete) will be fired and the result will be retrieved in specified format.|Eg:var dt=Erp.ExecuteSql<DataTable>("select * from tbl_Core_Company where company_pid=@ID",<br/>                          new Dictionary<string, object>() { <br/>                            { "@ID", 1 }<br/>                          },out err);<br/>var ds=Erp.ExecuteSql<DataSet>("--[tbl1]\nselect * from tbl_Core_Company;\n--[tbl2]\nselect * from tbl_Core_Company",<br/>                          null,out err);<br/>var i=Erp.ExecuteSql<int>("update tbl_Core_Company set CompanyCode=@fld where company_pid=@ID",<br/>                          new Dictionary<string, object>() { <br/>                            { "@ID", 2 }, { "@Fld", "asd" }<br/>                          },out err);<br/>var str=Erp.ExecuteSql<string>("select CompanyCode from tbl_Core_Company where company_pid=@ID",<br/>                          new Dictionary<string, object>() { <br/>                            { "@ID", 1 }<br/>                          },out err);'>
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value='Erp.ExecuteBatchSql("update tbl_Core_Company set field1=@fld where company_pid=@ID",new List<Dictionary<string, object>>(){ \n	new Dictionary<string, object>() { { "@ID", "123" }, { "@Fld", "asd" } }, \n	new Dictionary<string, object>() { { "@ID", "456" }, { "@Fld", "zxc" } } \n});\n' Text="ExecuteBatchSql" Info="Desc:The specified sql query(Insert/update/Delete) will be fired multiple time for all items in array.A valid token is required for executing the sql.<br/>Result is an object with following structure<br/>{ Success:true/false, ErrorMessage:'', Data:'ROWS AFFECTED' }">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value='Erp.GetRecordTitle("123","tbl_Core_Company");\n' Text="GetRecordTitle" Info="Desc:Retrieves the title of the specified record for an entity">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.RaiseNotification({...});\n" Text="RaiseNotification" Info="Desc:Raises a notification with provided arguments. <a href='javascript:void(0)' onclick='OpenUrlEditor(3)'  style='font-size: 14px;font-family: nunitoregular;color: #07F;' >Notification Settings</a>">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.SendMail({...});\n" Text="SendMail" Info='Desc:Sends email with provided arguments.|Eg:Erp.SendMail(new Dictionary<string, object>() {<br/>      {"UserID","u1,u2,u3"},<br/>      {"RecordID","rec1,rec2"},<br/>      {"EmailConfigID","1"},<br/>      {"EmailConfigCode","1"},<br/>      {"EntityID","tbl_CORE_company"},<br/>      {"TemplateID","123"},<br/>      {"EmailSubject","[Field.field1] [ReceiverUser.field1]"},<br/>      {"EmailBody","<p>[Field.Field1]</p><p>[Field.field2]<br>"},<br/>      {"EmailFrom","a@b.c"},<br/>      {"EmailFromDisplayName","A B"},<br/>      {"EmailReplyTo","x@y.z"},<br/>      {"EmailTo","z@x.c,[ReceiverUser.email],[Field.email]"},<br/>      {"EmailCc",""},<br/>      {"EmailBcc",""},<br/>      {"ForceSend",false});'>
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value='Erp.SetSessionData("key","value");' NoWF="1" Text="SetSessionData" Info='Desc:Set the value for the specified key in Session.|Eg:Erp.SetSessionData("key",123);'>
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value='Erp.GetSessionData("key");' NoWF="1" Text="GetSessionData" Info='Desc:Retrieves value from Session for given key.|Eg:Erp.GetSessionData("key");'>
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.ExecuteScript();" Text="ExecuteScript" Info='Desc:Execute code on client.|Eg:Erp.ExecuteScript("Erp.ShowMessage(\"hello\",\"alert\")");'>
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value='Erp.SetUserPreference("key",new Dictionary<string, object>() { { "a", "123" }, { "b", "456" } });\n' Text="SetUserPreference" Info='Desc:Saves custom dictionary data for the current logged in user|Eg:Erp.SetUserPreference("key1",new Dictionary<string, object>() { { "a", "123" }, { "b", "456" } });'>
                                            </telerik:RadTreeNode>
                                               <telerik:RadTreeNode Value='Erp.UpdateUserPreference("key",new Dictionary<string, object>() { { "a", "123" }});\n' Text="UpdateUserPreference" Info='Desc:Updates only specified data in the dictionary if key already exists in database.If key doesnt exist then new key is added with specified value|Eg:Erp.UpdateUserPreference("key1",new Dictionary<string, object>() { { "a", "123" }});'>
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value='Dictionary<string, object> userData=Erp.GetUserPreference("key");\n' Text="GetUserPreference" Info='Desc:Returns User&quot;s personal data associated with the specified key|Eg:Dictionary<string, object> userData=Erp.GetUserPreference("key1");'>
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value='Erp.SetProgress("Message",1,10);\n' Text="SetProgress" Info='Desc:Programatically set the value in the progressbar|Eg:Erp.SetProgress(50);<br/>Erp.SetProgress("Message 123");<br/>Erp.SetProgress("Message 123",30);<br/>Erp.SetProgress("Message 123",1,3);<br/>Erp.SetProgress(1,3);<br/>|Result:Value is set to 50%.<br/>Only message is set in the progressbar, value is not updated<br/>Message is set in the progressbar and value is set to 30%<br/>Message is set in the progressbar and value is set to 33% based on index 1 and count 3<br/>Message is not set only value is set to 33% based on index 1 and count 3'>
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value='object val1=ScriptVariables.GetValue("val1");\n' Text="ScriptVariables.GetValue" Info='Desc:Gets specified variable value from server variable list|Eg:object val1=ScriptVariables.GetValue("val1");'>
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value='var lt=ScriptVariables.GetTable("tbl1");\n' Text="ScriptVariables.GetTable" Info='Desc:Gets specified table variable value from server variable list|Eg:var lt=ScriptVariables.GetTable("tbl1");'>
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value='ScriptVariables.ReLoadVariable("val1");\n' Text="ScriptVariables.ReLoadVariable" Info='Desc:Resets variable data|Eg:ScriptVariables.ReLoadVariable("val1");<br/>ScriptVariables.ReLoadVariable("val1","val2","val3".....);'>
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value='Exec.aspx' Text="Exec.aspx" Info='Desc:Exec.aspx performs wf task,executes scripts based on passed in url parameters.|Eg:~/main/exec.aspx?_WFID=123&_Output=1&_TaskScriptID=123&_EntityScriptID=123&_NoScript=1&_tmpauth=123<br/><br/>_WFID = The workflow task to be executed<br/>_EntityScriptID = server script to be executed<br/>_TaskScriptID = task script to be executed<br/>_NoScript = 0 or 1 whether js and css resources need to be served<br/>_Output = 0 or 1 whether Message property from task script or WF is to be printed out in response<br/>_tmpauth = temporary authentication rights<br/>'>
                                            </telerik:RadTreeNode>
                                         </Nodes>
                                        </telerik:RadTreeNode>
                                    <telerik:RadTreeNode SS="0"  Value="InterfaceEvents" Text="Interface Events">
                                        <Nodes>
                                            <telerik:RadTreeNode Value="\nErp.OnInit.Register(InitFunction);\nfunction InitFunction(){\n\n}\n" Text="OnInit" Info="Desc:Will be fired just before interface is rendered.">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="\nErp.OnBeforeLoad.Register(LoadFunction);\nfunction BeforeLoadFunction(){\n\n}\n" Text="OnBeforeLoad" Info="Desc:Will be fired  after init and before load">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="\nErp.OnLoad.Register(LoadFunction);\nfunction LoadFunction(){\n\n}\n" Text="OnLoad" Info="Desc:Will be fired after all data is loaded in the interface">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="\nErp.OnLoadComplete.Register(LoadCompleteFunction);\nfunction LoadCompleteFunction(){\n\n}\n" Text="OnLoadComplete" Info="Desc:Will be after interface is completely loaded, and ready for interaction.">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="\nErp.OnSave.Register(SaveFunction);\nfunction SaveFunction(){\nreturn true;\n}\n" Text="OnSave" Info="Desc:Will be fired when data is being saved. If function returns false then saving will be aborted.">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="\nErp.OnSaveSuccess.Register(SaveSuccessFunction);\nfunction SaveSuccessFunction(){\n\n}\n" Text="OnSaveSuccess" Info="Desc:Will be fired after the data is successfully saved.">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="\nErp.OnSaveError.Register(SaveErrorFunction);\nfunction SaveErrorFunction(){\n\n}\n" Text="OnSaveError" Info="Desc:Will be fired if there are any errors on saving data.">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="\nErp.OnWfComplete.Register(OnWfCompleteFunction);\nfunction OnWfCompleteFunction(){\n\n}\n" Text="OnWfComplete" Info="Desc:Event will be fired after a workflow is triggered.">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="\nErp.OnClose.Register(OnCloseFunction);\nfunction OnCloseFunction(){\n\n}\n" Text="OnClose" Info="Desc:Event will be fired when current window is about to be closed. If function returns false then window will not be closed.">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="\nErp.OnResize.Register(ResizeFunction);\nfunction ResizeFunction(){\n\n}\n" Text="OnResize" Info="Desc:Will be fired just before interface is resized.">
                                            </telerik:RadTreeNode>
                                        </Nodes>
                                    </telerik:RadTreeNode>
                                    <telerik:RadTreeNode Value="GlobalVariables" Text="Global Variables">
                                        <Nodes>
                                            <telerik:RadTreeNode Value="Erp.LayoutMode" Text="Layout Mode" Info="Desc:Retrieves the mode in which the current interface is loaded.<br/>A=Add<br/>E=Edit<br/>R=Readonly<br/>G=Grid<br/>L=Lookup<br/>D=Dialog Workflow">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Erp.FormCode" SS="1" Text="FormCode" Info="Desc:Retrieves the Form Code for the layout">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Erp.ReadOnly" SS="1" Text="ReadOnly" Info="Desc:Retrieves whether layout is opened in readonly mode">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.SaveMode" SS="0" Text="Save Mode" Info="Desc:Retrieves whether entity is beng created or modified.Following are the different modes.<br/>ADD<br/>EDIT<br/>">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.ExecutionContext" SS="0" Text="ExecutionContext" Info="Desc:Retrieves the Execution Context when an entity is being saved.Following are the different Context.<br/><br/>PAGE<br/>SCRIPT<br/>WORKFLOW<br/>IMPORTING<br/>">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.SkipEval" Text="SkipEval" SS="0" Info="Desc:Return this variable if expression calculation should be cancelled">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.RecordID" Text="Record ID" Info="Desc:Retrieves the Record ID of the current record if its in editing mode.Will return '' when in Add mode">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.EntityID" Text="Entity ID" Info="Desc:Retrieves the Entity name of the current record.">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.ParentID" Text="Parent ID" Info="Desc:Retrieves the parent Record ID for the current record if there is any child-parent relationship.">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.ParentEntityID" Text="Parent Entity ID" Info="Desc:Retrieves the parent Entity name for the current record if there is any child-parent relationship.">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.ApplicationPath" Text="ApplicationPath" Info="Desc:Retrieves the root url of the application.">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Erp.InstallDirectory" SS="1" Text="InstallDirectory" Info="Desc:Retrieves the install directory of the application.">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Erp.Action" SS="1" Text="Action" Info="Desc:Retrieves the current action being performed.Following are the different modes.<br/>LOAD<br/>SAVE<br/>DELETE<br/>COMMAND<br/>">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="Erp.CancelEvents" SS="1" Text="CancelEvents" Info='Desc:If this property set to true in the Init event then all further event processing will be cancelled;'>
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value=" #SECURITYFILTER:tbl_CORE_company#" Text="SecurityFilter" Info="Desc:Security filter to be appended in sql query;|Eg:select * from tbl_core_company where code='c001' #SECURITYFILTER:tbl_CORE_company#<br/>select * from tbl_core_company as tbl123 where code='c001' #SECURITYFILTER:tbl_CORE_company:tbl123#<br/>select * from tbl_abc where code='c001' #SECURITYFILTER:tbl_CORE_company:tbl_abc.company_fid#<br/>For Stored Procedure key should begin with FILTER_ eg: {'@FILTER_abc':'#SECURITYFILTER:tbl_CORE_Accounts:tbl_CORE_USER_Invoice.account#'}  ">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="@SYS_TODAY / @SYS_NOW " Text="@SYS_TODAY / @SYS_NOW " Info="Desc:@SYS_TODAY and @SYS_NOW are prefined parameters to get system date in Sql queries;|Eg:select * from tbl_abc where createddate<=@SYS_TODAY<br/>For Stored Procedure value should be left blank eg: {'@SYS_TODAY':''}  ">
                                            </telerik:RadTreeNode>
                                        </Nodes>
                                    </telerik:RadTreeNode>

                                    <telerik:RadTreeNode SS="0" Value="FieldAPI" NoWF="1" Text="Field API & Events">
                                        <Nodes>
                                            <telerik:RadTreeNode Text="API" Expanded="true" Value="API">
                                                <Nodes>
                                                    <telerik:RadTreeNode Value="var FieldObject=Erp.GetField('@FieldName')" Text="Erp.Field" Info="Desc:Creates a Erp.Field object based on the field name passed.|Eg:var fld=new Erp.Field('@FieldName');<br/>var fld=Erp.GetField('@FieldName')">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="FieldObject.Get()" Text="Get" Info="Desc:Retrieves the value in the current Erp.Field Object.|Eg:FieldObject.Get();">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="FieldObject.Set()" Text="Set" Info="Desc:Set the value for the current Erp.Field Object.|Eg:FieldObject.Set('qwe')">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="FieldObject.Validate()" Text="Validate" Info="Desc:Runs validation for the current Erp.Field Object.|Eg:FieldObject.Validate();">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="FieldObject.GetElement()" Text="GetElement" Info="Desc:Retrieves the underlying html element as a JQuery object for the current Erp.Field Object.|Eg:FieldObject.GetElement();">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="FieldObject.SetDisplay(false)" Text="SetDisplay" Info="Desc:Shows or hides the current Erp.Field Object.<br/>The field does not occupy space in the layout.|Eg:FieldObject.SetDisplay(true);">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="FieldObject.SetVisible(false)" Text="SetVisible" Info="Desc:Shows or hides the current Erp.Field Object.<br/>The field still occupies space in the layout.|Eg:FieldObject.SetVisible(true);">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="FieldObject.SetEnable(false)" Text="SetEnable" Info="Desc:Enables or Disables the current Erp.Field Object.|Eg:FieldObject.SetEnable(true);">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="FieldObject.GetLabel()" Text="GetLabel" Info="Desc:Retrieves the label for the current Erp.Field Object.|Eg:FieldObject.GetLabel();">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="FieldObject.SetLabel('New Label')" Text="SetLabel" Info="Desc:Shows or hides the current Erp.Field Object.The field still occupies space in the layout.|Eg:FieldObject.SetLabel('New Label');">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="FieldObject.SetLabelDisplay(false)" Text="SetLabelDisplay" Info="Desc:Shows or hides the label for current Erp.Field Object.|Eg:FieldObject.SetLabelDisplay(true);">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="FieldObject.SetParam(key,value)" Text="SetParam" Info="Desc:Parameters can be assigned to fields which can be used for loading Single-Select list with those parameters.|Eg:FieldObject.SetParam(k1,v1,k2,v2,k3,v3);">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="FieldObject.GetParam(key)" Text="GetParam" Info="Desc:Retrieves the parameter value for a given key stored in the field.|Eg:FieldObject.SetParam('A','1','B','2');<br/>FieldObject.GetParam('B');|Result:2">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="FieldObject.Animate()" Text="Animate" Info="Desc:Runs an animation for the current Erp.Field Object.|Eg:FieldObject.Animate();">
                                                    </telerik:RadTreeNode>
                                                     <telerik:RadTreeNode Value="FieldObject.RegisterEvent('change',function(){})" Text="RegisterEvent" Info="Desc:Registers event for the current Erp.Field Object.|Eg:FieldObject.RegisterEvent('change',function(elem){alert(data);});|Result:Change event is registered for Field.">
                                                    </telerik:RadTreeNode>
                                                </Nodes>
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Text="Events" Expanded="true" Value="Events">
                                                <Nodes>
                                                    <telerik:RadTreeNode Value="\nfunction Field_OnLoad(elem,data,field){\n\n}\n" Text="OnLoad" Info="Desc:This event will be fired when data is being loaded into the field.|Eg:Field_OnLoad(elem,data,field);<br/>//elem : The JQuery object for the underlying field element<br/>//data : The data in the current field<br/>//field : The current Erp.Field object">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="\nfunction Field_OnSave(elem,data,field){\n\n}\n" Text="OnSave" Info="Desc:This event will be fired when data is being retrieved from that field.<br/>It acts as an override to FieldObject.Get and Erp.GetFieldValue functions.<br/>If custom data needs to be saved in the database based on user input then implement this event.|Eg:Field_OnSave(elem,data,field);<br/>//elem : The JQuery object for the underlying field element<br/>//data : The data in the current field<br/>//field :The current Erp.Field object">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="\nfunction Field_OnValidating(elem,data,field){\nreturn '';\n}\n" Text="OnValidating" Info="Desc:This event will be fired when the interface is being saved.<br/>Note : if the function returns a non empty string then it means validation failed for that field and Saving will be aborted|Eg:Field_OnValidating(elem,data,field);<br/>//elem : The JQuery object for the underlying field element<br/>//data : The data in the current field<br/>//field : The current Erp.Field object">
                                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="\nfunction Field_OnChange(elem,data,field){\nreturn '';\n}\n" Text="OnChange" Info="Desc:This event will be fired when data is modified in the current field.|Eg:Field_OnChange(elem,data,field);<br/>//elem : The JQuery object for the underlying field element<br/>//data : The data in the current field<br/>//           For Lookup fields data will be  in following format<br/>//           {RecordID: 'asd', EntityID: 'zxc', Text: 'qwe'}<br/>//field : The current Erp.Field object">
                                                    </telerik:RadTreeNode>
                                                </Nodes>
                                            </telerik:RadTreeNode>
                                        </Nodes>
                                    </telerik:RadTreeNode>
                                    <telerik:RadTreeNode SS="0" Value="EntityAPI" Text="Entity API">
                                        <Nodes>
                                            <telerik:RadTreeNode Value="var ent=new Erp.Entity('tbl_core_company','123');" Text="Erp.Entity" Info="Desc:Creates a new Erp.Entity object based on the Entity Name and Record ID passed to it.<br/>If no Record ID is specified then a new record will be created upon saving this entity|Eg:var ent=new Erp.Entity('tbl_core_company','123');<br/>var ent=new Erp.Entity('tbl_core_company');">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="EntityObject.Data('CompanyName','Company 123');" Text="Data" Info="Desc:This function is used for storing data in the entity object.<br/>First parameter is the field name in the entity and second parameter is the data to be stored.|Eg:EntityObject.Data('CompanyName','Company 123');<br/>EntityObject.Data('Location',entLocation);<br/>EntityObject.Data('AutoGeneratedCode','#EVAL#');<br/>EntityObject.Data('Date','#DATE#');<br/>EntityObject.Data('Uid','#GUID#');|Result:The value 'Company 123' is assigned to the database field CompanyName.<br/>An entity with name entLocation is assigned to the location field in the company entity<br/>#EVAL#,#DATE#,#GUID# are special values which can be used to retrieve the value of a dynamically generated field eg: an autogenerated column.After the entity is saved the value can be retrieved from the result object, eg: result['AutoGeneratedCode'] will return the newly created code">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="\nEntityObject.Load('',entitySuccess);\nfunction entitySuccess(result){\n\n}\n" Text="Load" Info="Desc:This function loads data into the specified fields of the Entity object from the database.A callback function can be specified which will be called after the Entity is loaded.<br/>|Eg:EntityObject.Load('companyname,companycode',function(){alert ent['companycode'];});">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="EntityObject.Token();" Text="Token" Info="Desc:Retrieves or sets a unique token associated with this Entity object.<br/>|Eg:EntityObject.Token();<br/>EntityObject.Token('token123');|Result:Retrieves the token for the entity.<br/>Sets the token 'token123' in the Entity object">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="\nEntityObject.Save(entitySuccess);\nfunction entitySuccess(result){\nif(result.Success)\nalert('Entity Saved');\n}\n" Text="Save" Info="Desc:This function saves the Entity object to the database.A callback function can be specified which will be called after the Entity is saved to database.<br/><b>Note:</b>When an entity is saved all default values, expressions and autogenerated code will be automatically evaluated. These values can be retrieved from the result object. See the Data method for further information|Eg:EntityObject.Save(function(Result){alert('Entity Saved');});|Result:Result is an object with following structure<br>{ Success:true , Message:'' , RecordID:'' }<br>Success returns true if entity is saved successfully.<br>Message property contains any errors that may occur.<br>RecordID contains the id of the newly created Record.<br>Result will also return any dynamically evaluated fields if specified.">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="\nErp.LoadEntity('',[,,],entitySuccess);\nfunction entitySuccess(result){\n\n}\n" Text="Erp.LoadEntity" Info="Desc:This function loads an array of Entity objects from the database simultaneously.<br/>First parameter is the list of fields to be loaded, second parameter is the Entity Object Array.A callback function can be specified which will be called after the Entities are loaded from the database.|Eg:Erp.LoadEntity('col1,col2,col3',[Ent1,Ent2,Ent3],function(){});<br/>.">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="\nErp.SaveEntity([,,],entitySuccess);\nfunction entitySuccess(result){\nif(result[0].Success)\nalert('Entity 1 Saved');\n}\n" Text="Erp.SaveEntity" Info="Desc:This function saves an array of Entity objects to the database simultaneously.<br/>First parameter is the Entity Object Array.A callback function can be specified which will be called after the Entities are saved to the database.|Eg:Erp.SaveEntity([Ent1,Ent2,Ent3],function(ResultArray){alert('Entities Saved');});<br/>//ResultArray is an array of result objects<br/>//(See Erp.Save for structure of result object).">
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="\nErp.DeleteEntity([,,],entitySuccess);\nfunction entitySuccess(result){\nif(result[0].Success)\nalert('Entity 1 Deleted');\n}\n" Text="Erp.DeleteEntity" Info="Desc:This function deletes an array of Entity objects from the database simultaneously.<br/>First parameter is the Entity Object Array.A callback function can be specified which will be called after the Entities are deleted from the database.|Eg:Erp.DeleteEntity([Ent1,Ent2,Ent3],function(ResultArray){alert('Entities Deleted');});<br/>//ResultArray is an array of result objects<br/>//(See Erp.Save for structure of result object).">
                                            </telerik:RadTreeNode>
                                             <telerik:RadTreeNode Value="\nErp.BatchOperation('INSERT|UPDATE|DELETE',entity,array,targetField);" Text="Erp.BatchOperation" Info="Desc:This function takes a common entity object and replicates the specified action across an array, where the item in the array corresponds to the target field in the entity.|Eg:var ent=new Erp.Entity('tbl_invoice');<br/>Erp.BatchOperation('DELETE',ent,array,targetField);<br/>">
                                            </telerik:RadTreeNode>
                                        </Nodes>
                                    </telerik:RadTreeNode>

                                    <telerik:RadTreeNode Value="PermissionSettings" Text="Permission & Settings">
                                        <Nodes>
                                            <telerik:RadTreeNode Value="Permission" Exclude="1" Text="Permission">
                                                <Nodes>
                                                   <telerik:RadTreeNode Value="USERPERMISSION" IsPermission="1" Text="User">
                                    </telerik:RadTreeNode>
                                    <telerik:RadTreeNode Value="USERROLEPERMISSION" IsPermission="1" Text="User Role">
                                    </telerik:RadTreeNode>
                                    <telerik:RadTreeNode Value="COMPANYPERMISSION" IsPermission="1" Text="Company">
                                    </telerik:RadTreeNode>
                                                </Nodes>
                                            </telerik:RadTreeNode>
                                            <telerik:RadTreeNode Value="Settings" Exclude="1" Text="Settings">
                                                <Nodes>
                                                     <telerik:RadTreeNode Value="USERSETTING" IsSetting="1" Text="User">
                                    </telerik:RadTreeNode>
                                    <telerik:RadTreeNode Value="USERROLESETTING" IsSetting="1" Text="User Role">
                                    </telerik:RadTreeNode>
                                    <telerik:RadTreeNode Value="COMPANYSETTING" IsSetting="1" Text="Company">
                                    </telerik:RadTreeNode>
                                                    <telerik:RadTreeNode Value="APPLICATIONSETTING" Exclude="1"  IsSetting="1" Text="Application">
                                                    </telerik:RadTreeNode>
                                                </Nodes>
                                            </telerik:RadTreeNode>
                                        </Nodes>
                                    </telerik:RadTreeNode>
                                    
                                  

                                </Nodes>
                            </telerik:RadTreeView>
                            
                        </td>
                        <td style="border: solid 1px gray; width: 60%;height:100%" valign="top">
                            

                        </td>
                    </tr>
                    </tbody>

                </table>


            </div>
           
            </div>
            <div class="divQuery" id="divFilter">
                <div style="background-color: #FCFCF2; height: 100%; width: 100%">
                    <iframe id="ifrFilter" style="height: 100%; width: 100%" frameborder="0"></iframe>
                </div>
            </div>
            <div style="display: none" id="lnkTools">
                <a href="javascript:void(0)" class="_format" onclick="autoFormatEditor()" >Format Script</a>
                <a href="javascript:void(0)" class="_coll" onclick="toggleFolding(true)" >Collapse Code</a>
                <a href="javascript:void(0)" class="_exp" onclick="toggleFolding(false)" >Expand Code</a>
                <a href="javascript:void(0)" class="_comm" onclick="commentSelection(true)" >Comment Selected</a>
                <a href="javascript:void(0)" class="_uncomm" onclick="commentSelection(false)" >UnComment Selected</a>
                <a class="_parent _sett" href="javascript:void(0)">Settings</a>
                <div class="ctr">
                    <a href="javascript:void(0)" onclick="OpenUrlEditor(2)" class="_cs" >Scheduler Settings</a>
                    <a href="javascript:void(0)" onclick="OpenUrlEditor(0)" >Action Settings</a>
                    <a href="javascript:void(0)" onclick="OpenUrlEditor(1)" >Task Settings</a>
                    <a href="javascript:void(0)" onclick="OpenUrlEditor(3)" class="_cs" >Notification Settings</a>
                    <a href="HtmlResources_View.aspx" >Files & Resources</a>
                    <a href="fieldbrowser.aspx" >Field browser</a>
                </div>
                <a class="_parent _code" href="javascript:void(0)">Code Snippets</a>
                <div class="ctr">
                    <a href="javascript:void(0)" onclick="addSnippet(this)">
                        Try ... Catch ...
                        <span class="_js" style="display:none">
try {
    
}
catch(err) {
   
}

                        </span>
                         <span class="_cs"" style="display:none">
try
{

}
catch(Exception ex)
{

}
                        </span>
                    </a>
                    <a href="javascript:void(0)" onclick="addSnippet(this)">
                        For Loop
                        <span class="_js" style="display:none">
for(var i=0;i&lt;LENGTH;i++){


}

                        </span>
                         <span class="_cs"" style="display:none">
for(int i=0;i&lt;LENGTH;i++)
{


}
                        </span>
                    </a>
                    <a href="javascript:void(0)" onclick="addSnippet(this)">
                        Function
                        <span class="_js" style="display:none">
function FUNCTIONNAME(){

}

                        </span>
                         <span class="_cs"" style="display:none">
public void FUNCTIONNAME()
{

}
                        </span>
                    </a>
                    <a href="javascript:void(0)" onclick="addSnippet(this)">
                        Dictionary Object
                        <span class="_js" style="display:none">
var data={};

                        </span>
                         <span class="_cs"" style="display:none">
Dictionary&lt;string,object&gt; dic=new Dictionary&lt;string,object&gt;();
                        </span>
                    </a>
                    <a href="javascript:void(0)" onclick="addSnippet(this)">
                        Load Entity
                        <span class="_js" style="display:none">
var ent=new Erp.Entity(/*ENTITY NAME*/,/*RECORD ID*/);
ent.Load('field1,field2',function(){
                            alert ent['field1'];
                         });
                        </span>
                         <span class="_cs"" style="display:none">
var ent = new ErpEntity(/*ENTITY NAME*/,/*RECORD ID*/, _cfg);
ent.LoadEntity();
//ent.LoadEntity("field1,field2");
//ent.LazyLoadEntity();//Data will be loaded only when first field is accessed.
                        </span>
                    </a>
                    <a href="javascript:void(0)" onclick="addSnippet(this)">
                        Create Entity
                        <span class="_js" style="display:none">
var ent=new Erp.Entity(/*ENTITY NAME*/);
ent.Data("FIELD","FIELD VALUE");
bool success=ent.Save(function(Result){alert('Entity Created');});

                        </span>
                         <span class="_cs"" style="display:none">
var ent = new ErpEntity(/*ENTITY NAME*/,"", _cfg);
ent["FIELD"] = "FIELD VALUE";
ent.CreatedBy = _app.CurrentUserID;
ent.CompanyID = _app.CompanyID;
ent.MetaData=_app.MetaData;
//ent.DisableAutoCalculation=true;
bool success=ent.Save();
//ent.EvaluateCalculatedFields();

                        </span>
                    </a>
                     <a href="javascript:void(0)" onclick="addSnippet(this)">
                        Update Entity
                        <span class="_js" style="display:none">
var ent=new Erp.Entity(/*ENTITY NAME*/,/*RECORD ID*/);
ent.Data("FIELD","FIELD VALUE");
ent.Save(function(Result){alert('Entity Updated');});

                        </span>
                         <span class="_cs"" style="display:none">
var ent = new ErpEntity(/*ENTITY NAME*/,/*RECORD ID*/, _cfg);
ent["FIELD"] = "FIELD VALUE";
ent.ModifiedBy = _app.CurrentUserID;
ent.CompanyID = _app.CompanyID;
ent.MetaData=_app.MetaData;
//ent.DisableAutoCalculation=true;
bool success=ent.Save();
//ent.EvaluateCalculatedFields();

                        </span>
                    </a>
                <a href="javascript:void(0)" onclick="addSnippet(this)">
                        Delete Entity
                        <span class="_js" style="display:none">
var ent=new Erp.Entity(/*ENTITY NAME*/,/*RECORD ID*/);
Erp.DeleteEntity([ent],function(result){
                            if(result[0].TotalRecords==result[0].SuccessCount)
                                alert("Entities Deleted");
                            else
                                alert("Error occured.");
                            });
                        </span>
                         <span class="_cs"" style="display:none">
var ent = new ErpEntity(/*ENTITY NAME*/,/*RECORD ID*/, _cfg);
ent.ModifiedBy = _app.CurrentUserID;
ent.CompanyID = _app.CompanyID;
ent.MetaData=_app.MetaData;
bool success=ent.Delete();

                        </span>
                    </a>
<a href="javascript:void(0)" onclick="addSnippet(this)">
                        Batch Create Entity
                        <span class="_js" style="display:none">
var arr=[];
for(var i=0;i&lt;LENGTH;i++){
    var ent=new Erp.Entity(/*ENTITY NAME*/);
    ent.Data("FIELD","FIELD VALUE");
    arr.push(ent);
}
Erp.SaveEntity(arr,function(result){
                            if(result[0].TotalRecords==result[0].SuccessCount)
                                alert("Entities Saved");
                            else
                                alert("Error occured.");
                            });


                        </span> 
                        <span class="_cs" style="display:none">
for(int i=0;i&lt;LENGTH;i++){
    var ent = new ErpEntity(/*ENTITY NAME*/,"", _cfg);
    ent["FIELD"] = "FIELD VALUE";
    ent.CreatedBy = _app.CurrentUserID;
    ent.CompanyID = _app.CompanyID;
    ent.MetaData=_app.MetaData;
    //ent.DisableAutoCalculation=true;
    bool success=ent.Save();
    //ent.EvaluateCalculatedFields();
}
                        </span>                           
                    </a>

<a href="javascript:void(0)" onclick="addSnippet(this)">
                        Execute Sql
                        <span class="_js" style="display:none">
Erp.ExecuteSql('select * from tbl_SYS_Users where Users_Pid=@UserID','TABLE',{'@UserID':[User.Users_pid]},'VALID TOKEN',
function(result){alert(result['Success']);});

                        </span>
                         <span class="_cs"" style="display:none">
string err="";
var result=Erp.ExecuteSql&lt; /*DataTable|DataSet|int|string*/ &gt;("select CompanyCode from tbl_Core_Company where company_pid=@ID",
                          new Dictionary&lt;string, object&gt;() { 
                            { "@ID", 1 }
                          },out err);
                        </span>

                    </a>
<a href="javascript:void(0)" onclick="addSnippet(this)">
                        Import Namespace                     
                         <span class="_cs"" style="display:none">
&lt;import:%INSTALL%\apps\app_crm\bin\app_crm.dll&gt;
&lt;import:959319a7-cd3c-4f5e-ad13-93a5d23697ee&gt;
&lt;import:959319a7-cd3c-4f5e-ad13-93a5d23697ee&gt;, rename_namespace(oldspace, newspace);
                        </span>

                    </a>
                </div>
               
            </div>
        </div>
        <div id="divCmd" style="display: none; text-align: right; padding-right: 20px">
            <a onclick="getscriptxml()" class="ActionButton GreenButton" href="javascript:void(0)">Save</a>&nbsp;
            <a onclick="window.close()" class="ActionButton RedButton" href="javascript:void(0)">Cancel</a>
        </div>
    </form>
    <style>
        .rspRotatedTabText1
        {
            line-height: 22px !important;
            transform: rotate(0deg) !important;
            writing-mode: vertical-rl !important;
            transform-origin: initial !important;
        }
        .rspPaneTabContainer
        {
            height:auto !important;
        }
        #RAD_SLIDING_PANE_CONTENT_rspVar
        {
            background-color: #fdfde9;
        }
       .RadSplitter .rspPaneTabText {
      font-size: 13px;
    font-family: sans-serif;
    letter-spacing: 1px;
}
        .rspSlideTitle ._ico
        {
            margin-right:5px;
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
    </style>
    <script>
        var _firstResize = true;
        $(window).on("resize", function () { if (_firstResize) { _firstResize = false; window.setTimeout(function () { repaintSplitter(); }, 250); } })
        function repaintSplitter() {
            Telerik.Web.BrowserFeatures.writingMode = true;
            $find("<%=RadSplitter1.ClientID%>").repaint();
            var rsp = $find("<%=rspField.ClientID%>");
            if (rsp) {
                rsp._isTabRotated = false;
                rsp.repaint();
            }
            rsp = $find("<%=rspFunc.ClientID%>");
            if (rsp) {
                rsp._isTabRotated = false;
                rsp.repaint();
            }
            rsp = $find("<%=rspApi.ClientID%>");
            if (rsp) {
                rsp._isTabRotated = false;
                rsp.repaint();
            }
            rsp = $find("<%=rspSetting.ClientID%>");
            if (rsp) {
                rsp._isTabRotated = false;
                rsp.repaint();
            }
            rsp = $find("<%=rspSession.ClientID%>");
            if (rsp) {
                rsp._isTabRotated = false;
                rsp.repaint();
            }
            rsp = $find("<%=rspVar.ClientID%>");
            if (rsp) {
                rsp._isTabRotated = false;
                rsp.repaint();
            }
        }
        var _firstTime = true;
        function rspOnDockEvent(sender, args) {
            var id = sender.get_id();
            if (id == "<%=rspVar.ClientID%>") {
                LoadVariableList();
            }
            else  {
                var sl = $find("<%=Radslidingzone1.ClientID%>");
                if (sl.get_dockedPaneId()) {
                    sl.CollapsePane(sl.get_dockedPaneId());
                }
                    //sl.DockPane(id);   
                sender._dockElement_OnMouseDown({});

                if (id == "<%=rspInfo.ClientID%>")
                    return;

                var ctr = $(sender.GetContentContainer());
                ctr.append($find("tvItems").get_element());
                $find("tvItems").set_visible(true);
                var s = null;
                var inc = 0;
              
                $find("tvItems").get_nodes().forEach(function (n) {
                    var valid = false;//(n.get_value() == args.get_node().get_value());
                    var v = n.get_value();
                    var pref = n.get_attributes().getAttribute("Prefix");
                    if (id == "<%=rspField.ClientID%>") 
                        valid = (v == "Field" || v == "Parent" || v == "User" || v == "Company" || pref == "WF" || pref == "WFVar");
                    else if (id == "<%=rspFunc.ClientID%>")
                        valid = (v == "Agg" || v == "Con" || v == "Date" || v == "Logical" || v == "Math" || v == "Text" || v == "Misc");
                    else if (id == "<%=rspApi.ClientID%>")
                        valid = (v == "InterfaceFunctions" || v == "InterfaceEvents" || v == "FieldAPI" || v == "EntityAPI" || v == "GlobalVariables");
                    else if (id == "<%=rspSetting.ClientID%>")
                        valid = (v == "PermissionSettings");
                    else if (id == "<%=rspSession.ClientID%>")
                        valid = (v == "Session");
                  
                    n.set_visible(valid);
                    if (valid) {
                        if(inc++==0)
                            n.set_expanded(valid);
                        s = n;
                    }
                });
                if (s) {
                    var l = s.get_nodes().get_count();
                    window.setTimeout(function () { var n = l > 0 ? s.get_nodes().getNode(0) : s; n.set_selected(true); showItemInfo(n); }, 20);
                }
            }
        }
        var scriptEditor;        
        $(function () { InitEditor(); });
        var fromResources = window.opener && window.opener.Erp && window.opener.Erp.EntityID.toLowerCase() == "tbl_core_resources";
        function InitEditor() {
            if (!fromResources) {
                $("#btnVarList,#divTreeCtr").show();
            }
            if (fromResources && $.QS("resmode") == "script") {
                $("#divTreeCtr").show();
            }
            $("#lnkTools").on("mouseover", "a", function () {
                var a = $(this);
                if (!a.parent().hasClass("ctr"))
                    $("#lnkTools").children(".ctr").hide();
                if (a.hasClass("_parent"))
                    a.next().show().position({ my: "left top", at: "right-5 top+5", of: a });
                $("#lnkTools").css("overflow", "");
            });
            if ($.QS("ss") == "1" || $.QS("resmode") == "cscript")
                $("#lnkTools").children("._sett").next().children().hide().filter("._cs").show();

            $(document).on("click", function (e) { $("#lnkTools").hide(); })
            $("#lnkTools").on("click", "a", function (e) {
                if (!$(this).hasClass("_parent"))
                    $("#lnkTools").hide();
                e.stopPropagation();
            })
            $("#lnkTools").on("contextmenu", function (e) {
                e.preventDefault();
            });
            $("#divScript").on("contextmenu", function (e) {
                $("#lnkTools").children(".ctr").hide();
                e.preventDefault();
                var m = $("#lnkTools");
                if (m.isVisible()) {
                    m.stop().hide();
                    return;
                }
                m.show().css({ top: -1000, left: -1000 });
                m.hide();
                var w = m.outerWidth(); var h = m.outerHeight();
                m.stop().toggle(100).position({ my: "left top", at: "left top", of: e });
                if (h + m.position().top > window.innerHeight)
                    m.css("top", window.innerHeight - h - 20);
                if (w + m.position().left > window.innerWidth)
                    m.css("left", window.innerWidth - w - 20);
                //css({
                //    top: e.pageY + "px",
                //    left: e.pageX + "px"
                //});
            });
            $("#divCmd").setDisplay($.QS("cmd") == "1" || fromResources);
            $("#divCtr").css("height", $.QS("cmd") == "1" || fromResources ? "95%" : "100%");
            if ($.QS("resmode") == "htmltemplate") {
                $("#divScript").css("height", "96%");
                scriptEditor = CodeMirror.fromTextArea($("#<%=txtScript.ClientID%>")[0], {
                    mode: "text/html",
                    addModeClass: true,
                    autoCloseTags: true
                });
            }
            else if ($.QS("resmode") == "documentationtemplate") {
                $("#divScript").css("height", "96%");
                scriptEditor = CodeMirror.fromTextArea($("#<%=txtScript.ClientID%>")[0], {
                    mode: "application/xml",
                    addModeClass: true,
                    autoCloseTags: true
                });
            }            
            else if ($.QS("resmode") == "css") {
                $("#divScript").css("height", "96%");
                scriptEditor = CodeMirror.fromTextArea($("#<%=txtScript.ClientID%>")[0], {
                    mode: 'text/css',
                    addModeClass: true,
                    extraKeys: { "Ctrl-Space": "autocomplete" },
                    autoCloseBrackets: true
                });
            }
            else if ($.QS("resmode") == "sql" || $.QS("resmode") == "installscript" || $.QS("resmode") == "uninstallscript") {
                $("#divScript").css("height", "96%");
                scriptEditor = CodeMirror.fromTextArea($("#<%=txtScript.ClientID%>")[0], {
                    mode: 'text/x-sql',
                    addModeClass: true,
                    extraKeys: { "Ctrl-Space": "autocomplete" },
                    autoCloseBrackets: true
                });
            }
            else if ($.QS("resmode") == "cscript") {
                
                if ($.QS("ss") == "1") {
                    $("#lnkTools").append('<a href="javascript:void(0)" class="_impl" onclick="implScript(\'E\')" >Implement Entity Script</a>')
                    $("#btnVarList").hide();
                    $("#divScript").addClass("ServerScript")
                }
                else {
                    $("#lnkTools").append('<a href="javascript:void(0)" class="_impl" onclick="implScript(\'R\')" >Implement Report Script</a><a href="javascript:void(0)" class="_impl" onclick="implScript(\'E\')" >Implement Entity Script</a><a href="javascript:void(0)" class="_impl" onclick="implScript(\'T\')" >Implement Task Script</a><a href="javascript:void(0)" class="_impl" onclick="implScript(\'S\')" >Implement Startup Script</a>')
                    $("#divScript").css("height", "96%");
                }
                scriptEditor = CodeMirror.fromTextArea($("#<%=txtScript.ClientID%>")[0], {
                    mode: 'text/x-csharp',
                    addModeClass: true,
                    matchBrackets: true,
                    lineNumbers: true,
                    extraKeys: {
                        "Ctrl-Space": "autocomplete", "'.'": function (cm) {
                            setTimeout(function () { cm.execCommand("autocomplete"); }, 100);
                            throw CodeMirror.Pass; // tell CodeMirror we didn't handle the key 
                        }
                    },
                    lineWrapping: false,
                    foldGutter: true,
                    minFoldSize:1,
                    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                });
            }
            else {
                scriptEditor = CodeMirror.fromTextArea($("#<%=txtScript.ClientID%>")[0], {
                    addModeClass: true,
                    matchBrackets: true,
                    lineNumbers: true,
                    extraKeys: {
                        "Ctrl-Space": "autocomplete", "'.'": function (cm) {
                            setTimeout(function () { cm.execCommand("autocomplete"); }, 100);
                            throw CodeMirror.Pass; // tell CodeMirror we didn't handle the key 
                        },
                        "Ctrl-Q": function (cm) { cm.foldCode(cm.getCursor()); }
                    },
                    lineWrapping: false,
                    minFoldSize: 1,
                    foldGutter: true,                   
                    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                    mode: { name: "javascript", globalVars: false }
                });
            }
            if ($.QS("p") == "1") {
                VariablesList = parent.VariablesList;
                scriptEditor.setValue(parent.$("#divScript").find(".txtScript").val());
            }
            else if ($.QS("ss") == "1") {
                scriptEditor.setValue(parent.$("#divServerScript").find(".txtServerScript").val());
                VariablesList = parent.SSVariablesList;
            }
            else if (!$.isEmpty($.QS("t")) && typeof window.opener.InitEditor == "function") {
                var data = (window.opener ? window.opener.InitEditor($.QS("t")) : "");
                VariablesList = data.VariablesList;
                if (!$.isEmpty(data.Script))
                    scriptEditor.setValue(data.Script);
            }
            else if ($.QS("resmode") == "script" || $.QS("resmode") == "cscript" || $.QS("resmode") == "htmltemplate" || $.QS("resmode") == "css" || $.QS("resmode") == "sql" || $.QS("resmode") == "documentationtemplate" || $.QS("resmode") == "installscript" || $.QS("resmode") == "uninstallscript") {
                var data = (window.opener ? window.opener.GetEditorData() : "");
                if (data)
                    scriptEditor.setValue(data);
            }
            highlightVarBtn(true);
            $("#divScript").css("height", "99%");
        }
        function pageLoad() {
            if ($.QS("s") == "WFTemplate" || $.QS("w") == "1")
                AddWFVariablesToTree();

            if (!$.isEmpty($.QS("mode")) && $.QS("mode") == "report") {
                $("#btnVarList").hide();
                $("#lnkTools").hide();
                //$("#divScript").css("height", "100px");
                //$("#divTreeCtr").css("height", "320px");
            }

            $find("tvItems").get_nodes().forEach(function (n) { n.set_visible(false); });
        }
        var WFVarList = [];
        function AddWFVariablesToTree() {
            WFVarList = [];
            WFVarList = ($.QS("w") == "1" && typeof parent.opener.GetVariableList == "function" ? parent.opener.GetVariableList() : (window.opener?window.opener.VariablesList:[]));
            WFVarList = WFVarList ? WFVarList : [];
            var treeItems = $find("<%= tvItems.ClientID %>");
            var treeTypes = $find("<%= tvTypes.ClientID %>");
            var isAdded = false;
            for (var x = 0 ; x < WFVarList.length ; x++) {
                if (WFVarList[x]["DataType"] == "Hashtable" || WFVarList[x]["DataType"] == "Byte" || WFVarList[x]["DataType"].indexOf("ist:") > 0)
                    continue;
                if (WFVarList[x]["Hidden"])
                    continue;
                var index = treeTypes.findNodeByValue("Functions").get_index();
                if (WFVarList[x]["DataType"] == "ErpEntity") {
                    addChildNode(treeItems, WFVarList[x]["Name"], WFVarList[x]["EntityID"], "WF", true, "", index);
                    addChildNode(treeTypes, WFVarList[x]["Name"], WFVarList[x]["EntityID"], "WF", false, "", index);
                }
                else {
                    if (treeItems.findNodeByValue("WFVariables") == null) {
                        addChildNode(treeItems, "WFVariables", "WFVariables", "WFVar", false, "", (index / 1 + 1));
                        addChildNode(treeTypes, "WFVariables", "WFVariables", "WFVar", false, "", (index / 1 + 1));
                    }
                    addChildNode(treeItems, WFVarList[x]["Name"], WFVarList[x]["Name"], "WFVar", false, "WFVariables", index);
                }
            }
        }

        function addChildNode(tree, text, value, prefix, isExpand, parent, index) {
            tree.trackChanges();
            var node = new Telerik.Web.UI.RadTreeNode();
            node.set_text(text);
            node.get_attributes().setAttribute("Prefix", prefix);
            if (prefix == "WF")
                node.set_value(text);
            else
                node.set_value(value);
            if (isExpand) {

                node.get_attributes().setAttribute("ParentTable", value);
                node.set_expandMode(3);
                node.set_expanded(false);
            }
            if (!$.isEmpty(parent))
                tree.findNodeByValue(parent).get_nodes().add(node);
            else {
                tree.get_nodes().insert(index, node)
            }
            tree.commitChanges();
        }
        function SetEditorValue(val) {
            scriptEditor.setValue(val);
        }
      
        function AddReportDetailItems(arr) {
            $('#divManageTables').HideModal();
            var radtree = $find("<%=  tvTypes.ClientID %>");
            var radtree1 = $find("<%=  tvItems.ClientID %>");
            for (var i = 0; i < arr.length; i++) {
                if ($.isEmpty(arr[i].Table()) || radtree.findNodeByValue(arr[i].Table().toLowerCase()) != null || arr[i].Table().toLowerCase() == $.QS("eid").toLowerCase())
                    continue;
                radtree.trackChanges();
                var newnode = new Telerik.Web.UI.RadTreeNode();
                newnode.set_text(arr[i].TableName());
                newnode.set_value(arr[i].Table().toLowerCase());
                radtree.get_nodes().insert(radtree.get_nodes().get_count() - 1, newnode);
                radtree.commitChanges();

                radtree1.trackChanges();
                newnode = new Telerik.Web.UI.RadTreeNode();
                newnode.set_text(arr[i].TableName());
                newnode.set_value(arr[i].Table().toLowerCase());
                newnode.get_attributes().setAttribute("ParentTable", arr[i].Table());
                newnode.get_attributes().setAttribute("IsParent", "1");
                newnode.get_attributes().setAttribute("FieldType", "DetailTable");
                newnode.set_expandMode(3);
                newnode.set_visible(false);
                radtree1.get_nodes().insert(1, newnode);
                radtree1.commitChanges();
            }
            radtree.get_nodes().getNode(0).set_selected(true);
        }

        //copy to script editor then call scriptEditor.getValue("\\n")
        function implScript(t) {
            if (t == "R")
                scr = '\npublic class ReportScript : ImplReportScript, IReportScript\n{\n  public void PreInit(ApplicationInfo app, IDBConfiguration cfg, ErpReport rpt, M_Reports model, bool isSubReport, ref string xml)\n  {\n    //Debugger.Break();\n  }\n    \n  public void Init(ApplicationInfo app, IDBConfiguration cfg, ErpReport rpt, M_Reports model, bool isSubReport, XmlDocument doc)\n  {\n    //Debugger.Break();\n  }\n  public void PrepareQuery(bool isSubReport, Dictionary<string, object> hash)\n  {\n  }\n  public void FillTable(bool isSubReport, DataTable dt)\n  {\n  }\n  public void FillDataset(bool isSubReport, DataSet ds)\n  {\n  }\n  public void ReportLayoutLoaded(bool isSubReport, XtraReport xr)\n  {\n  }\n  public void BeforeDatabound(bool isSubReport, XtraReport xr)\n  {\n  }\n  public void AfterDatabound(bool isSubReport, XtraReport xr)\n  {\n  }\n  public void OnExport(MemoryStream stream)\n  {\n  }\n}\n';
            else if (t == "E")
                scr = '\npublic class EntityScript : ImplEntityScript, IEntityScript\n{\n  ApplicationInfo _app; IDBConfiguration _cfg;\n  public void Init(ApplicationInfo app, IDBConfiguration cfg)\n  {\n    _app=app;_cfg=cfg;\n    //Debugger.Break();\n  }\n  public bool IsReadOnly()\n  {\n    return false;\n  }\n  public void GetGridSql(ref string sql, string htmlId, XmlNode node, XmlNode relNode)\n  {\n  }\n  public void ReadFieldValue(ref object value, string htmlId, string fieldName)\n  {\n  }\n  public bool HideControl(string htmlId, string fieldName)\n  {\n    return false;\n  }\n  public bool DisableControl(string htmlId, string fieldName)\n  {\n    return false;\n  }\n  \n  public bool CannotViewControl(string htmlId, string fieldName)\n  {\n    return false;\n  }\n  public void ControlCreated(WebControl control)\n  {\n  }\n  public void LayoutCreated(IEntityRenderer renderer)\n  {\n  }\n  public bool OnEntitySaving()\n  {\n    return true;\n  }\n  public void OnEntitySaved(string error)\n  {\n  }\n  public void ExecuteCommand(string sender, Dictionary<string, object> args)\n  {\n  }\n}\n';
            else if (t == "T")
                scr = '\npublic class TaskScript : ImplTaskScript, ITaskScript\n{\n  public  void Init(ApplicationInfo app, IDBConfiguration cfg, Dictionary<string, object> taskInfo, string arg)\n  {\n    //Debugger.Break();\n  }\npublic  Dictionary<string, object> Execute()\n  {\n    return null;\n  }\n}\n';
            else if (t == "S")
                scr = '\npublic class StartupScript : ImplStartupScript, IStartupScript\n{\n  public  void Init(ApplicationInfo app, IDBConfiguration cfg)\n  {\n    //Debugger.Break();\n  }\n  public  Dictionary<string, object> LogIn()\n  {\n  }\n  public  Dictionary<string, object> LogOut()\n  {\n  }\n}\n';

            scriptEditor.replaceRange(scr, scriptEditor.getCursor());
            scriptEditor.focus();
        }
        function addSnippet(a) {
            var scr ="\n"+ $(a).children($.QS("ss") == "1" || $.QS("resmode") == "cscript" ? "._cs" : "._js").text().Trim()+"\n";
            scriptEditor.replaceRange(scr, scriptEditor.getCursor());
            scriptEditor.focus();
        }
    </script>
    <script>
        function Entity_OnClientItemsRequesting(sender, eventArgs) {
            var context = eventArgs.get_context();
            context["Type"] = "LoadEntityList";
            $find("rcbEntity").set_enableLoadOnDemand(false);
            $("#rcbEntity_Input").attr("readonly", "readonly");
            $find("rcbEntity").set_allowCustomText(false);

        }
        function tvTypes_NodeClick(sender, args) {
            if (args.get_node().get_nodes().get_count() > 0) {
                $find("tvItems").set_visible(false);
                return;
            }
            var s = null;
            $find("tvItems").set_visible(true);
            $find("tvItems").get_nodes().forEach(function (n) {
                n.set_visible(n.get_value() == args.get_node().get_value());
                n.set_expanded(n.get_value() == args.get_node().get_value());
                if (n.get_value() == args.get_node().get_value())
                    s = n;
            })
            var l = s.get_nodes().get_count();
            window.setTimeout(function () { var n = l > 0 ? s.get_nodes().getNode(0) : s; n.set_selected(true); showItemInfo(n); }, 20);
        }

        function tvItems_NodeClick(sender, args) {
            showItemInfo(args.get_node());

        }
        function showItemInfo(node) {
            var inf = $.defaultVal(node.get_attributes().getAttribute("Info"), "").split('|');
            var h = "<span class='Title'>" + node.get_text() + "</span>";
            var eg = "";
            for (var i = 0; i < inf.length; i++) {
                var c = inf[i].substring(0, inf[i].indexOf(':'));
                if (c == "Eg") {
                    eg = inf[i].substring(inf[i].indexOf(':') + 1).Replace("<br/>", "\n");
                    h += "<span class='Eg'></span>";
                    continue;
                }
                h += "<span class='" + c + "'>"
                h += inf[i].substring(inf[i].indexOf(':') + 1);
                h += "</span>"
            }
            $("#spnDescription").html(h);
           
            if (eg != "") {
                CodeMirror.runMode(eg, "text/javascript",
                        $("#spnDescription>.Eg").addClass("cm-s-default")[0]);
                var txt = node.get_text();
                txt = node.get_parent().get_text() == "Grid" ? "Grid" : txt;
                if($.QS("ss")!="1")
                $("#spnDescription>.Eg").find(".cm-variable").each(function () { if ($(this).next().html() == txt) $(this).before("<span class='newLine'><span>"); });
            }
            $("#spnDescription>.Result").find("br").after("<span class='newLine'><span>");
            $("#spnDescription>.Result").prepend("<span class='newLine'><span>");
        }
        function tvItems_DoubleClick(sender, args) {
            var node = args.get_node();
            if (node.get_level() == 0)
                return;
           
            var n = node;
            var f = "";
            while (n.get_level() > 0 && n.get_parent().get_attributes().getAttribute("Exclude") != "1") {
                f = $.defaultVal(n.get_value(),"") + "." + f;
                if (n.get_level() == 0 || n.get_parent().get_attributes().getAttribute("Exclude") == "1")
                    break;
                else
                    n = n.get_parent();
            }

            if ($.QS("ss") == "1" || $.QS("resmode") == "cscript") {
                if (n.get_attributes().getAttribute("SessionEntity") == "1" ||
                    n.get_attributes().getAttribute("IsPermission") == "1" ||
                    n.get_attributes().getAttribute("IsSetting") == "1" ||
                    n.get_attributes().getAttribute("IsAppSetting") == "1" ||
                    n.get_value() == "Field" ||
                    n.get_value() == "Parent" ||
                    n.get_value() == "User" ||
                    n.get_value() == "Company" ||
                    n.get_attributes().getAttribute("FieldType") == "DetailTable") {
                    getPath(node);
                    return;
                }
            }

            f = f.Trim('.');
            if (n.get_attributes().getAttribute("SessionEntity") == "1") {
                f = "[@" + n.get_value().toLowerCase() + "." + f.toLowerCase() + "]";
            }
            else if (n.get_attributes().getAttribute("IsPermission") == "1") {
                f = "[Permission." + n.get_value().replace("PERMISSION", "").toLowerCase() + "." + f.toLowerCase() + "]";
            }
            else if (n.get_attributes().getAttribute("IsSetting") == "1") {
                f = "[Setting." + n.get_value().replace("SETTING", "").toLowerCase() + "." + f.toLowerCase() + "]";
            }
            else if (n.get_attributes().getAttribute("IsAppSetting") == "1") {
                f = "[Setting." + n.get_value().split(':')[1].toLowerCase() + "." + f.toLowerCase() + "]";
            }
            else if (n.get_value() == "Field" || n.get_value() == "Parent" || n.get_value() == "User" || n.get_value() == "Company" || n.get_attributes().getAttribute("FieldType") == "DetailTable") {
                f = "[" + n.get_value() + "." + f + "]";
            }

            else if (n.get_value() == "FieldAPI") {
                f = node.get_value();
            }
            else if (n.get_value() == "Logical") {
                if (node.get_value() == "If")
                    f = "if(EXPR){\n\n}\nelse{\n\n}\n";
                else if (node.get_value() == "While")
                    f = "\nwhile(EXPR){\n\n\n}\n";
                else if (node.get_value() == "For")
                    f = "\nfor(var i=0;i<1;i++){\n\n\n}\n";
                else
                    f = "Fn." + f + (f.indexOf("(") < 0 ? "()" : "");
            }
            else if (n.get_attributes().getAttribute("Prefix") == "Fn") {
                f = "Fn." + f + (f.indexOf("(") < 0 ? "()" : "");
            }
            else if (n.get_attributes().getAttribute("Prefix") == "WF") {
                f = "[WF." + n.get_value() + "." + f + "]";
            }
            else if (n.get_attributes().getAttribute("Prefix") == "WFVar") {
                f = "[WF." + f + "]";
            }
           
            f = f.Replace("\\\\n", "\n");
            scriptEditor.replaceRange(f, scriptEditor.getCursor());
            scriptEditor.focus();
            __cancel = true;
        }
        function getPath(node) {
            var n = node;
            var f = "";
            while (n.get_level() > 0 && n.get_parent().get_attributes().getAttribute("Exclude") != "1") {
                f = $.defaultVal(n.get_value(), "") + "." + f;
                if (n.get_level() == 0 || n.get_parent().get_attributes().getAttribute("Exclude") == "1")
                    break;
                else
                    n = n.get_parent();
            }
            f = f.Trim('.');
            if (n.get_attributes().getAttribute("IsPermission") == "1") {
                f = "Settings.Permission[\"" + f.toLowerCase() + "\"]";
            }
            else if (n.get_attributes().getAttribute("IsSetting") == "1") {
                f = "Settings.Appsettings[\"" + f.toLowerCase() + "\"]";
            }
            else if (n.get_attributes().getAttribute("IsAppSetting") == "1") {
                f = "Settings.Appsettings[\"" + n.get_value().split(':')[1].toLowerCase() + "\",\"" + f.toLowerCase() + "\"]";
            }
            else if (n.get_attributes().getAttribute("SessionEntity") == "1" || n.get_value() == "Field" || n.get_value() == "Parent" || n.get_value() == "User" || n.get_value() == "Company" || n.get_attributes().getAttribute("FieldType") == "DetailTable") {
                var t = (n.get_attributes().getAttribute("SessionEntity") ? "Session[\"" + n.get_value() + "\"]" : n.get_value());
                
                if (f.indexOf(".") > -1) {
                    var a = f.split('.');
                    f =t;
                    for (var i = 0; i < a.length - 1; i++) {
                        f += ".Rel(\"" + a[i] + "\")";                        
                    }
                    f += "[\"" + a[a.length - 1] + "\"]";
                }
                else
                    f = t + "[\"" + f + "\"]";
            }

         
            scriptEditor.replaceRange(f, scriptEditor.getCursor());
            scriptEditor.focus();
            __cancel = true;
        }
        __cancel = false;
        function toggleHandler(sender, eventArgs) {
            eventArgs.set_cancel(__cancel);
            __cancel = false;
        }


        function onClientSelectedIndexChanged(sender, args) {
            $(sender.get_element()).prev().val(args.get_item().get_text()).data("EntityID", args.get_item().get_value());
        }

        function tvItems_NodePopulate(sender, args) {
            var node = args.get_node();
            var context = args.get_context();

            context["EntityID"] = node.get_attributes().getAttribute("ParentTable");
        }

    </script>
    <script>
        function createOrHighlight(searchtxt,createTxt) {
            var cu = scriptEditor.getSearchCursor(searchtxt);
            if (cu.find()) {
                scriptEditor.setSelection(cu.from(), cu.to());
                scriptEditor.scrollIntoView({ from: cu.from(), to: cu.to() }, 20);
            }
            else {
                scriptEditor.replaceRange(createTxt, CodeMirror.Pos(scriptEditor.lastLine()));
                createOrHighlight(searchtxt, createTxt);
            }
        }
        function autoFormatEditor() {
            var ed = scriptEditor;
            ed.refresh();
            CodeMirror.commands["selectAll"](ed);
            var range = { from: ed.getCursor(true), to: ed.getCursor(false) }
            ed.autoFormatRange(range.from, range.to);
            ed.setCursor(0);
            ed.focus();
        }
        function commentSelection(isComment) {
            var ed = scriptEditor;
            var range = { from: ed.getCursor(true), to: ed.getCursor(false) }
            ed.commentRange(isComment, range.from, range.to);
        }
        function toggleFolding(fold) {
            scriptEditor.operation(function () {
                for (var l = scriptEditor.firstLine() ; l <= scriptEditor.lastLine() ; ++l)
                    scriptEditor.foldCode({ line: l, ch: 0 }, null, (fold ? "fold" : "unfold"));
            });
        }
        function highlightVarBtn() {
            $("#RAD_SLIDING_PANE_TEXT_<%=rspVar.ClientID%>").removeClass("hasVar");
            if(VariablesList && VariablesList.length>0)
                $("#RAD_SLIDING_PANE_TEXT_<%=rspVar.ClientID%>").addClass("hasVar");
         
        }
       
        function LoadVariableList() {           
            var tbl = $("#divVarList>Table>Tbody"); tbl.empty();
            for (var i = 0; i < VariablesList.length; i++) {
                addNewVar(false, VariablesList[i]);
            }


            tbl.children().each(function () {
                var tr = $(this);
                tr.setEnable(tr.find(".hdnFlt").val() == "");
            });
            addNewVar(true);
        }

            function saveVarList() {
                var arr = [];
                var tbl = $("#divVarList>Table>Tbody");
                var err = "";
                tbl.children().each(function () {
                    var tr = $(this);
                    if (tr.find(".title").val() == "" && tr.find(".hdnFlt").val() == "" && tr.find(".title").val().Trim() == "")
                        return true;
                    if (tr.find(".title").val().Trim() == "") {
                        err += "Variable name not specified.\n";
                        return false;
                    }
                    if ($(arr).filter(function () { return this.Name.toLowerCase() == tr.find(".title").val().toLowerCase(); }).length > 0) {
                        err += "Variable name \"" + tr.find(".title").val() + "\" specified multiple times.\n";
                        return true;
                    }

                    arr.push({
                        Name: tr.find(".title").val().Replace(" ", ""),
                        Type: tr.find("select").val(),
                        EntityID: tr.find(".ent").data("EntityID"),
                        EntityName: tr.find(".ent").val(),
                        Cols: tr.find(".hdnCol").val(),
                        Filter: tr.find(".hdnFlt").val(),
                        OnDemand: tr.find(".chkload").checked()?1:0
                    });
                }
                );
                if (err != "") {
                    alert(err);
                    return;
                }
                VariablesList = arr;
                $find('<%=Radslidingzone2.ClientID%>').undockPane('<%=rspVar.ClientID%>')
                highlightVarBtn();
                console.log(VariablesList);
              
            }

     
            var currXmlField = null;
            function addNewVar(load, data) {
                var tbl = $("#divVarList>Table>Tbody");
                if (load && tbl.children(":last-child").children(":first-child").find(".cellInput").val() == "")
                    return;
                var tr = $("<tr></tr>");
                tr.append("<td><input class='cellInput title' type='text' /></td>");
                tr.append("<td><select class='cellSelect' ><option>Value</option><option>Table</option></select></td>");
                var td = $("<td valign='middle'></td>");
                tr.append(td);
                td.append("<input style='display:none' readonly class='cellInput ent'  type='text' />");
                td.append("<a style='display:none' class='cellBtn col'  href='javascript:void(0)'>Columns</a>");
                td.append("<a class='cellBtn flt'  href='javascript:void(0)'>Filter</a>");
                td.append("<input type='hidden' class='hdnCol'/>");
                td.append("<input type='hidden' class='hdnFlt'/>");
                td.append("<input type='checkbox' style='vertical-align:middle' class='chkload' title='Load On Demand'/>");
                tr.append("<td><a onclick='$(this).closest(\"TR\").remove();' href='javascript:void(0)' class='close'>X</a></td>");
                tbl.append(tr);
                tr.find("select").on("change", function (d) {
                    tr.find(".ent,.col").setDisplay($(this).val() == "Table");
                });//.setEnable(tr.find(".hdnFlt").val()=="");
                if (data) {
                    tr.find(".title").val(data.Name);
                    tr.find("select").val(data.Type).setEnable(false).trigger("change");
                    tr.find(".hdnFlt").val(data.Filter);
                    tr.find(".chkload").checked(data.OnDemand/1==1);
                    if (data.Type == "Table") {
                        tr.find(".hdnCol").val(data.Cols);
                        tr.find(".ent").val(data.EntityName).data("EntityID", data.EntityID);
                    }
                }
                tr.find(".flt").on("click", function () {
                    var type = tr.find("select").val();
                    var qry = tr.find(".hdnFlt").val();
                    var data = new Object();
                    data["PageType"] = $.isEmpty(qry) ? "A" : "E";
                    data["SubMode"] = $.isEmpty(qry) ? "Add" : "E";
                    data["EID"] = $.defaultVal(tr.find(".ent").data("EntityID"), "");
                    if (data["EID"] == "" && type == "Table") {
                        alert("Please Choose Entity");
                        return;
                    }
                    data["SID"] = sid;
                    data["srno"] = "";
                    data["ParamCheck"] = "";
                    if (type == "Value") {
                        data["SubQuery"] = qry;
                        data["PageMode"] = "subquery";
                    }
                    else {
                        data["xml"] = qry;
                        data["PageMode"] = "";
                    }
                    data["Type"] = type;
                    PageMethods.LoadXml(data, OnSucLoadFrame);
                    currXmlField = tr.find(".hdnFlt");
                });

                tr.find(".col").on("click", function () {
                    var data = new Object();
                    data["Type"] = "Cols";
                    data["xml"] = tr.find(".hdnCol").val();
                    data["EID"] = $.defaultVal(tr.find(".ent").data("EntityID"), "");
                    if (data["EID"] == "") {
                        alert("Please Choose Entity");
                        return;
                    }
                    data["SID"] = sid;
                    PageMethods.LoadXml(data, OnSucLoadFrame);
                    currXmlField = tr.find(".hdnCol");
                });

                tr.find(".ent").on("click", function () {
                    var cbo = $find("<%=rcbEntity.ClientID%>");
                    el = $(cbo.get_element());
                    if (el.prev().hasClass("ent")) {
                        el.prev().show().val((cbo.get_value() == "" ? "" : cbo.get_text())).data("EntityID", cbo.get_value());
                    }
                    $(this).hide().after(el.show().css({ width: "218px", display: "inline-block", "vertical-align": "middle" }));
                    cbo.set_value($.defaultVal($(this).data("EntityID"), "")); cbo.set_text($(this).val()); cbo.showDropDown();
                })
            }
            function hidePopUp() {
                $("#divFilter").HideModal();
            }
            function OnSucLoadFrame(data) {
                var url = "../Meta/Filters_Add.aspx?PageMode=Settings&SID=" + sid;
                if (data["Type"] == "Value")
                    url = "Filters_Add.aspx?PageMode=subquery&SID=" + sid;
                else if (data["Type"] == "Cols")
                    url = "Layout_Grid.aspx?EID=" + data["EID"] + "&_h=1&sid=" + sid;
                if ($.QS("s") == "WFTemplate" || $.QS("w") == "1")
                    url += "&WF=1";
                $('#ifrFilter').attr('src', url);
                $("#divFilter").ShowModal();
            }
            function saveSubXml(subqueryXml, srno, subquery) {
                hidePopUp();
                currXmlField.val(subqueryXml);
                currXmlField.closest("TD").find(".flt").attr("title", subquery);
                currXmlField.closest("TR").find("select").setEnable(false);
            }
            function saveFilterXml(xml) {
                hidePopUp();
                currXmlField.val(xml);
                //currXmlField.closest("TD").find(".flt").attr("title",subquery);
                currXmlField.closest("TR").find("select").setEnable(false);
            }
            function saveColXml(xml) {
                hidePopUp();
                currXmlField.val(xml);
                //currXmlField.closest("TD").find(".flt").attr("title",subquery);
                currXmlField.closest("TR").find("select").setEnable(false);
            }

            function GetVarXml(varList) {            
                var xml = "";
                for (var i = 0; i < varList.length; i++) {
                    var v = varList[i];
                    xml += '<Variable OnDemand="' + (v.OnDemand/1 ==1?"1":"0")+ '" Id="' + $.encodeXml(v.Name, true) + '" Type="' + v.Type + '" ';
                    if (v.Type == "Table")
                        xml += ' EntityId="' + $.encodeXml($.defaultVal(v.EntityID, ""), true) + '" ';
                    xml += '>';
                    if (v.Type == "Table")
                        xml += $.defaultVal(v.Cols, "");
                    xml += $.defaultVal(v.Filter, "");
                    xml += '</Variable>';
                }
                return xml;
            }

            function SaveData() {
                return
            }

            function getscriptxml() {
                if (window.opener && typeof window.opener.getscriptxml == "function") {
                    window.opener.getscriptxml($.QS("t"), VariablesList, scriptEditor.getValue());
                    window.close();
                }
            }

            function OpenUrlEditor(type) {
                var host = window.frameElement ? $(parent.document.body) : $(document.body);
                if (type == 1) {
                    var p = host.ShowPopup({ url: "urlhelper.aspx?_op=1&ts=1",enableDrag:true, maxTop: 100, height: 275, width: 490, reuse: true, title: "Task ID", refWin: window.frameElement ? parent : window });
                    p.find("iframe").attr("scrolling", "no");
                }
                else if (type == 2) {
                        var p = host.ShowPopup({ enableDrag: true,enableResize:true, url: "../main/view.aspx?EID=tbl_SYS_Config&_fc=TaskScheduler_Add&_ns=1&_pt=V&PageType=V&js=1" + ($.QS("ss") == "1" || $.QS("resmode") == "cscript" ? "&ss=1" : ""), maxTop: 100, height: 500, width: 720, reuse: true, title: "Scheduler Settings", refWin: window.frameElement ? parent : window });
                    p.find("iframe").attr("scrolling", "no");
                }
                else if (type == 3) {
                    var p = host.ShowPopup({ enableDrag: true, enableResize: true, url: "../meta/Notification_Add.aspx?PageType=WF&edtr=1&_ns=1" + ($.QS("ss") == "1" || $.QS("resmode") == "cscript" ? "&ss=1" : ""), maxTop: 100, height: 760, width: 1110, reuse: true, title: "Notification Settings", refWin: window.frameElement ? parent : window });
                    //p.find("iframe").attr("scrolling", "no");
                }
                else
                    host.ShowPopup({ enableDrag: true, url: "urlhelper.aspx?_op=1", maxTop: 100, height: 410, width: 800, reuse: true, title: "Url Settings", refWin: window.frameElement ? parent : window });
            }
    </script>
</body>
</html>
