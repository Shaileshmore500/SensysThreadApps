<%@ Page Language="C#" Title="Settings Designer" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" ValidateRequest="false" CodeBehind="MstCustomSetting_Add.aspx.cs" Inherits="SensysErp.Meta.MstCustomSetting_Add" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

    <%# HelperLib.Web.WebResources.GetResource("~/Css/Grey/jquery-ui-1.10.3.custom.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Css/codemirror.css")%>

     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery-ui-1.10.3.custom.min.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/codemirror.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/css.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/xml.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/htmlmixed.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/javascript.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/closetag.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/closebrackets.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/formatting.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/xml-fold.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CodeMirror/Script/clike.js")%>
    <script type="text/javascript">

        //window.title="title"
        //document.documentElement.style.overflowX = "hidden"
        //document.documentElement.style.overflowY = "hidden"
        var VariablesList = [];
        var ArrGroupData = [];
        var ArrSubGroupData=[]
    </script>

    <style>
        .CodeMirror
        {
            height: 100%;
        }
     

        body .pnlCtr
        {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0px;
            background-color: gray;
            z-index: 999;
        }

        body .pnlEval, body .pnlHtml, body .pnlScript, body .pnlStyle
        {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0px;
           
            z-index: 999;
        }


      
        #divTabCtr .pnlEval, #divTabCtr .pnlHtml, #divTabCtr .pnlScript, #divTabCtr .pnlStyle
        {
            position: static;
            height:100%;
        }

            #divTabCtr .pnlEval .CodeMirror, #divTabCtr .pnlHtml .CodeMirror, #divTabCtr .pnlScript .CodeMirror, #divTabCtr .pnlStyle .CodeMirror
            {
                height: 100%;
            }

        #divPopup
        {
            display: none;
            position: fixed;
            left: 805px;
            z-index: 3500;
            border: solid 3px #666;
            border-radius: 8px;
            box-shadow: 2px 2px 5px #525252;
            padding: 20px;
            font-family: nunitoregular;
            font-size: 12px;
            width: 290px;
        }

        .ui-menu
        {
            position: absolute;
            width: 100px;
        }

        #select
        {
            width: 20px;
            height: 25px;
        }

        #rerun
        {
            height: 25px;
            width: 118px;
            font: 12px important;
            font-family: arial;
        }

        .ui-corner-all
        {
            font-size: 12px;
            width:auto;
        }

            .ui-corner-all ui-state-focus
            {
                font-size: 12px;
            }

        .trHtmlShow
        {
            background-color: #fff;
            display: none;
            position: fixed !important;
            z-index: 3500;
            border: solid 3px #666;
            border-radius: 8px;
            box-shadow: 2px 2px 5px #525252;
            padding: 20px;
            font-family: nunitoregular;
            font-size: 12px;
            z-index: 3500;
            top: 9px !important;
            left: 2px !important;
            font-family: arial;
            font-size: 15px;
        }

        #ulparameter
        {
            z-index: 100;
        }

        #tvCtrMod
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
        }


        .tabBar
        {
            height: 30px;
            width: 100%;
        }
            .tabBar .tabs
            {
                display: inline-block;
                padding: 0px 10px 0px 10px;
                height: 28px;
                line-height: 28px;
                font-weight: bold;
                font-size: 13px;
                text-decoration: none;
                color: #CCC;
                vertical-align: middle;
           
                border: solid 2px #E4E4E4;
                border-bottom: none;
                -webkit-border-top-left-radius: 8px;
                -webkit-border-top-right-radius: 8px;
                -moz-border-radius-topleft: 8px;
                -moz-border-radius-topright: 8px;
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
                background: #6c717c; /* Old browsers */
                background: -moz-linear-gradient(top, #6c717c 0%, #4c515e 100%); /* FF3.6+ */
                background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#6c717c), color-stop(100%,#4c515e)); /* Chrome,Safari4+ */
                background: -webkit-linear-gradient(top, #6c717c 0%,#4c515e 100%); /* Chrome10+,Safari5.1+ */
                background: -o-linear-gradient(top, #6c717c 0%,#4c515e 100%); /* Opera 11.10+ */
                background: -ms-linear-gradient(top, #6c717c 0%,#4c515e 100%); /* IE10+ */
                background: linear-gradient(to bottom, #6c717c 0%,#4c515e 100%); /* W3C */
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6c717c', endColorstr='#4c515e',GradientType=0 ); /* IE6-9 */
            }

            .tabBar .selected
            {
                color: #00FFE0;
                text-shadow: 0px 1px 17px #FFF;
                background: #1f3551; /* Old browsers */
                background: -moz-linear-gradient(top, #1f3551 0%, #144570 50%, #103f68 51%, #1b639b 100%); /* FF3.6+ */
                background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#1f3551), color-stop(50%,#144570), color-stop(51%,#103f68), color-stop(100%,#1b639b)); /* Chrome,Safari4+ */
                background: -webkit-linear-gradient(top, #1f3551 0%,#144570 50%,#103f68 51%,#1b639b 100%); /* Chrome10+,Safari5.1+ */
                background: -o-linear-gradient(top, #1f3551 0%,#144570 50%,#103f68 51%,#1b639b 100%); /* Opera 11.10+ */
                background: -ms-linear-gradient(top, #1f3551 0%,#144570 50%,#103f68 51%,#1b639b 100%); /* IE10+ */
                background: linear-gradient(to bottom, #1f3551 0%,#144570 50%,#103f68 51%,#1b639b 100%); /* W3C */
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1f3551', endColorstr='#1b639b',GradientType=0 ); /* IE6-9 */
            }

               #tvCtrEnt
        {
            position: absolute;
            display: none;
            width: 224px;
            height: 295px;
            background-color: #fff;
            border: solid 2px #4D4C4C;
            z-index: 10;
            box-shadow: 2px 2px 5px #555;
            overflow-y: auto;
        }
               .DarkTheme #tvCtrEnt
        {
            background-color:#313131;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
            <div class="div-form" id="divMain">
                <div id="div1" runat="server">
                    <table class="table-form">
                        <tr>
                            <td class="td-label">
                                <asp:Label ID="lblPermission" runat="server" Style="width:150px;display:inline-block" Text="Permission Category"></asp:Label>
                            </td>
                            <td class="td-value">
                                <telerik:RadComboBox OnClientSelectedIndexChanged="cboCategoryChange" ID="rcbPermissionCategory" runat="server" Width="150px">
                                    <Items>
                                        <telerik:RadComboBoxItem Value="Company" Text="Company" />
                                        <telerik:RadComboBoxItem Value="UserRole" Text="Role" />
                                        <telerik:RadComboBoxItem Value="User" Text="User" />
                                        <telerik:RadComboBoxItem Value="Application" Text="Application" />
                                        
                                     <%--   <telerik:RadComboBoxItem Value="Module" Text="Module" />--%>
                                    </Items>
                                </telerik:RadComboBox>
                               </td>
                           
                        </tr> 
                        <tr><td colspan="2"> <span class="chkctr" style="display:none">
<asp:CheckBox ID="chkShared" data-chk-on="yes" Text="This setting is shared by all Applications" TextAlign="Left" data-chk-off="no" onclick="cboCategoryChange()" runat="server" ></asp:CheckBox>
                            </span></td></tr>

                           <tr id="trApp" style="display: none">
                            <td class="td-label">
                                <asp:Label ID="lblApp" runat="server" Text="Application"></asp:Label>
                            </td>
                            <td class="td-value">
                                <telerik:RadComboBox ID="rcbApp" runat="server" Width="150px"></telerik:RadComboBox>
                            </td>
                        </tr>

                        <tr>
                            <td class="td-label">
                                <asp:Label ID="lblCode" runat="server" Text="Code"></asp:Label>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtCode" runat="server" Width="150px" onblur="return ValidateCode(this);"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-label">
                                <asp:Label ID="lblDescription" runat="server" Text="Description"></asp:Label>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtDescription" runat="server" Width="250px" TextMode="Multiline" Rows="3"> </asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-label">
                                <asp:Label ID="Label2" runat="server" Text="Grouping Text"></asp:Label>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtGroup" runat="server" Width="150px"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-label">
                                <asp:Label ID="Label5" runat="server" Text="Sub Grouping Text"></asp:Label>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtSubGroup" runat="server" Width="150px"></asp:TextBox>
                            </td>
                        </tr>
                        <tr id="trResVersion" runat="server">
                        <td class="td-label">
                            <asp:Label ID="Label4" runat="server" Text="Resource Version"></asp:Label>
                        </td>
                        <td class="td-value">
                            <telerik:RadNumericTextBox ID="txtResVersion" runat="server"></telerik:RadNumericTextBox>
                        </td>
                        </tr>
                        <%--<tr>
                            <td colspan="2" class="td-label">
                                <span id="spnShared">This setting is shared by all Applications/Modules</span>&nbsp;&nbsp;
                                <asp:CheckBox ID="chkShared" data-chk-on="yes" data-chk-off="no" onclick="cboCategoryChange()" runat="server" ></asp:CheckBox>
                            </td>
                        </tr>--%>
                        <tr id="trMod" style="display: none">
                            <td class="td-label">
                                <asp:Label ID="Label3" runat="server" Text="Module"></asp:Label>

                            </td>
                            <td class="td-value">
                                <asp:HiddenField ID="hdnModule" runat="server" />
                                <asp:HiddenField ID="hdnDispName" runat="server" />
                                <asp:TextBox ReadOnly="true" ID="txtModule" CssClass="txt" runat="server"></asp:TextBox>
                                <div id="tvCtrMod">
                                    <telerik:RadTreeView ID="tvModule" OnClientNodeClicked="selectModule" runat="server">
                                    </telerik:RadTreeView>
                                </div>
                            </td>
                        </tr>
                     


                        <tr id="trComplex" runat="server">

                            <td colspan="2" class="td-label">
                               
                                <asp:CheckBox ID="chkIsComplex" TextAlign="Left" Text="Is Multi-Parameter Setting&nbsp;&nbsp;" data-chk-on="yes" data-chk-off="no" runat="server"></asp:CheckBox>
                            </td>
                        </tr>
                        <tr id="trUserSetting" runat="server">

                            <td colspan="2" class="td-label">
                               
                                <asp:CheckBox ID="chkUserSetting" TextAlign="Left" Text="Available to End User&nbsp;&nbsp;" data-chk-on="yes" data-chk-off="no" runat="server"></asp:CheckBox>
                            </td>
                        </tr>

                    </table>
                </div>

                

            </div>
            <div id="divComplex" runat="server" style="margin: 20px 50px 0 50px;display:none">
                <span class="mainHeading">Define the parameters for this setting</span><br />
                <telerik:RadListBox Style="margin-bottom:15px" ID="rlbParameter" runat="server" AllowDelete="true" Width="350px" Height="120px" AllowTransfer="false" AllowReorder="true">
                    <ButtonSettings Position="Right" ShowReorder="false" RenderButtonText="true" VerticalAlign="Top" AreaWidth="115px" />
                </telerik:RadListBox>
                <div id="divTabs" class="tabBar">
                    <a class="tabs selected" onclick="showTab(0,this)" href="javascript:void(0)">Html</a><a class="tabs" onclick="showTab(1,this)" href="javascript:void(0)">Css</a>
                    <a class="tabs" onclick="showTab(2,this)" href="javascript:void(0)">Script</a><a class="tabs" id="tabcscript" style="display:none" onclick="showTab(3,this)" href="javascript:void(0)">C# Script</a>
                </div>
                <div id="divTabCtr" style="border: solid 1px #808080;min-height:300px;position:relative">
                    <div class="pnlHtml" >


                        <div style="height: 30px;position:absolute;left:0;right:0;top:0;border-bottom:solid 1px #DBDBDB">
                            <div style="float: left; margin-left: 10px; margin-bottom: -3px; margin-top: 2px">
                                <button id="rerun">Insert Parameter</button>
                                <button id="select" title="Select an action"></button>
                            </div>
                            <ul id="ulparameter"></ul>
                            
                        </div>
                        <div style="height: 100%;padding-top:32px;box-sizing:border-box">
                            <asp:TextBox ID="txtHtml" runat="server" CssClass="html" Width="635" Height="250" TextMode="Multiline" Rows="3"> </asp:TextBox>
                        </div>
                    </div>
                    <div style="display: none" class="pnlStyle">

                       
                        <div style="height: 100%;">
                            <asp:TextBox ID="txtCss" CssClass="css" runat="server" Width="635" Height="250" TextMode="Multiline" Rows="3"> </asp:TextBox>
                        </div>
                    </div>
                    <div style="display: none" id="divScript" class="pnlScript">

                      
                        <div style="height: 700px;">
                            <iframe  id="ifrExprEditor" runat="server" src="ExprEditor.aspx?p=1&m=Setting" frameborder="0" style="height:100%;width:100%"></iframe>
                        </div>
                        <div style="display: none" ><asp:HiddenField ID="hdnVars" runat="server" /> <asp:TextBox style="display: none" ID="txtScript" CssClass="js txtScript" runat="server" Width="635" Height="250" TextMode="Multiline" Rows="3"> </asp:TextBox></div>
                    </div>
                    <div style="display: none" id="divCScript" class="pnlScript">
                      
                        <div style="height: 700px;">
                            <iframe  id="ifrExprEditorCS" runat="server" src="ExprEditor.aspx?p=1&resmode=cscript&ss=1" frameborder="0" style="height:100%;width:100%"></iframe>
                        </div>
                        <div style="display: none" ><asp:HiddenField ID="hdnCVars" runat="server" /> <asp:TextBox style="display: none" ID="txtCScript" CssClass="js txtScript" runat="server" Width="635" Height="250" TextMode="Multiline" Rows="3"> </asp:TextBox></div>
                    </div>
                    <div style="display: none" class="pnlEval">                        
                        <div style="height: 100%;">
                            <asp:TextBox ID="txtEval" CssClass="c-sharp" runat="server" Width="635" Height="250" TextMode="Multiline" Rows="3"> </asp:TextBox>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cmdPanel " style="margin-top:15px">
                <asp:LinkButton ID="btnSubmit" runat="server" CssClass="cmdBtn cmdSave" Text="Submit" OnClick="btnSubmit_Click" OnClientClick="return SetValue();"></asp:LinkButton>
                <a href="javascript:void(0)" class="cmdBtn cmdClose" onclick="closeForm()">Cancel</a>
            </div>
            <div id="divPopup" class="div-form">
                    <table class="table-form">
                        <tr>
                            <td class="td-label">
                                <asp:Label ID="lblName" runat="server" Text="Name"></asp:Label>
                            </td>
                            <td class="td-value">
                                <asp:TextBox ID="txtName" runat="server"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-label">
                                <asp:Label ID="lblType" runat="server" Text="Type"></asp:Label>
                            </td>
                            <td class="td-value">
                                <telerik:RadComboBox ID="rcbType" runat="server" OnClientSelectedIndexChanged="onTypeChange" >
                                    <Items>                                       
                                        <telerik:RadComboBoxItem Text="Text" Value="Text" />
                                         <telerik:RadComboBoxItem Text="Number" Value="Number" />
                                         <telerik:RadComboBoxItem Text="Bool" Value="Bool" />
                                        <telerik:RadComboBoxItem Text="Date" Value="Date" />
                                        <telerik:RadComboBoxItem Text="Filter" Value="Filter" />
                                        <telerik:RadComboBoxItem Text="List" Value="List" />
                                        <telerik:RadComboBoxItem Text="Multiselect" Value="Multiselect" />
                                         <telerik:RadComboBoxItem Text="Decimal" Value="Decimal" />
                                       
                                    </Items>
                                </telerik:RadComboBox>
                            </td>
                        </tr>
                        <tr class="trEntity" style="display:none">
                            <td class="td-label">
                                <asp:Label ID="lblEntity" runat="server" Text="Entity"></asp:Label>
                            </td>
                            <td class="td-value">
                                 <asp:TextBox ID="txtEntity" runat="server" ReadOnly="true"></asp:TextBox>
                            <div id="tvCtrEnt">
                                <telerik:RadTreeView ID="tvEntity" OnClientNodeClicked="selectEntity" runat="server">
                                </telerik:RadTreeView>
                            </div>
                            <asp:HiddenField ID="hdnEntityID" runat="server" />

                            </td>
                        </tr>
                        <tr class="trFormCode" style="display:none">

                                            <td class="td-label">
                                                <asp:Label ID="Label1" runat="server" Text="Select Form Code"></asp:Label>
                                            </td>
                                            <td class="td-value">
                                                <telerik:RadComboBox ID="rcbFCode" runat="server" OnClientItemsRequesting="OnClientItemsRequesting" Width="205px" EnableLoadOnDemand="true" EnableAutomaticLoadOnDemand="true">
                                                    <WebServiceSettings Method="GetTargetFields_FormCode" Path="MstCustomSetting_Add.aspx" />
                                                </telerik:RadComboBox>
                                            </td>

                       </tr>
                    </table>
                    <div >
                        <input id="btnAdd" type="button" class="cmdBtn cmdSave" value="Submit" onclick="addItem()" style="width: 60px; float: left;" />
                        <input type="button" value="Close" class="cmdBtn cmdClose" onclick="return optionWindowClose()" style="width: 45px; float: left; margin-left: 10px" />
                    </div>
                </div>
        </ContentTemplate>
    </asp:UpdatePanel>

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

        $(document).on("click", function () { $("#tvCtrMod").hide(); })
        $("#tvCtrMod").on("click", function (e) { e.stopPropagation(); });
        $("#<%=txtModule.ClientID %>").on("click", function (e) { toggleTree(e.target); e.stopPropagation(); });
       
        $("#<%=txtGroup.ClientID%>").autocomplete({
            source: ArrGroupData,
            minLength: 0
        }).on("click", function () { $("#<%=txtGroup.ClientID%>").autocomplete("search", ""); });

        $("#<%=txtSubGroup.ClientID%>").autocomplete({
            source: ArrSubGroupData,
            minLength: 0
        }).on("click", function () { $("#<%=txtSubGroup.ClientID%>").autocomplete("search", ""); });
       

        function toggleTree(txt) {
            $(txt).next().show();
        }

        function cboCategoryChange() {
            var val = "";
            if ($find("<%=rcbPermissionCategory.ClientID%>").get_selectedItem() != null)
             val = $find("<%=rcbPermissionCategory.ClientID%>").get_selectedItem().get_value();
            $("#<%=chkShared.ClientID%>").closest(".chkctr").setDisplay(val == "Application" || val == "Module");
            $("#trApp").setDisplay(val == "Application" && !$("#<%=chkShared.ClientID%>").checked());
            $("#trMod").setDisplay(val == "Module" && !$("#<%=chkShared.ClientID%>").checked());
            $("#<%=txtModule.ClientID%>").val($("#<%=hdnDispName.ClientID%>").val());
           
           
        }
        function InsertButtonLoad() {
            $(function () {
                $("#rerun")
                  .button()
                  .click(function () {
                      //alert( "Running the last action" );
                      return false;
                  })
                  .next()
                    .button({
                        text: false,
                        icons: {
                            primary: "ui-icon-triangle-1-s"
                        }
                    })
                    .click(function () {

                        getParameter();
                        var keycount = $("#select").parent().next().children().length;
                        if (keycount <= 0)
                            return false;

                        var menu = $(this).parent().next().show().position({
                            my: "left top",
                            at: "left bottom",
                            of: this
                        });
                        $(document).one("click", function () {
                            menu.hide();
                        });
                        $(menu).children().click(function () {
                            var menu1 = $("#select").parent().next().children();
                        });
                        return false;
                    })
                    .parent()
                      .buttonset()
                      .next()
                        .hide()
                        .menu();
            });
        }


        function insertkey(cntrl) {


            var itemNametype = $(cntrl).text();
            var strarr = itemNametype.split('{');
            var strarr1 = strarr[1].split('}');

            var name = strarr[0].toString().toLowerCase();
            var key = strarr1[0].toString().toLowerCase();

            var insertString = "";
            if (key == "bool") {
                insertString = "<input type=" + "\"" + "checkbox" + "\"" + " key=" + "\"" + name + "\"" + " />";
            }            
            else if (key == "filter" ) {
                insertString = "<a  key=" + "\"" + name + "\"" + "  class='default-link'>Set Filter</a>";
            }
            else {
                insertString = "<input type=" + "\"" + "text" + "\"" + " key=" + "\"" + name + "\"" + " />";
            }
            //InsertData(insertString);
            Editors[0].replaceRange("<span class='row'><span class='lbl'>" + name + "</span><span class='val'>" + insertString+"</span></span>", Editors[0].getCursor());
            //EditorUpdate();
            FormatText();
            UnselectText();
            $(cntrl).parent().parent().hide();
            //return true;

        }

        //function InsertData(text) {

        //    Editors[0].replaceRange(text, Editors[0].getCursor());

        //}

        function getParameter() {
            var menu = $("#select").parent().next();
            $(menu).children().remove();
            var ispresent = false;

            var listBox = $find("<%= rlbParameter.ClientID %>");
            for (i = 0; i < listBox.get_items()._array.length; i++) {
                ispresent = false;
                var itemtext = listBox.get_items()._array[i].get_text();



                var arritem = itemtext.split('{');
                var arrKey = "\"" + arritem[0] + "\"";

                var a = Editors[0].getValue();
                if (a.indexOf("key=" + arrKey)>0)
                    continue;
                

                if (!ispresent) {
                    $("#ulparameter").append("<li class=ui-menu-item  role=presentation><a href=# class=ui-corner-all onclick=" + "\"" + "insertkey(this);" + "\"" + ">" + itemtext + "</a></li>");
                }
            }

        }



        function Max1(cntrl, td1, pnl1) {

            var td = $("." + td1);
            var pnl = $("." + pnl1);
            if ($(cntrl).val() == "Maximize") {
                $(cntrl).val("Minimize");
                $($("#divMain")).append(pnl);
                $(document).toggleScroll(false);
            }
            else {
                $(document).toggleScroll(true);
                $(cntrl).val("Maximize");
                td.append(pnl);
            }
        }

    </script>


    <script type="text/javascript">
        var mode = "";
        function pageLoad() {
            $("#<%=chkShared.ClientID%>,#<%=chkIsComplex.ClientID%>,#<%=chkUserSetting.ClientID%>").CheckBoxX();
            cboCategoryChange();
            InsertButtonLoad();
            CheckComplex($("#<%= chkIsComplex.ClientID %>"));
            CreateDeleteButton();
            CreateEditButton();
            CreateAddButton();
            EnableEdit();
            //InitEditor();
            EditorUpdate();
            FormatText();
            UnselectText();
            $($(".rlbButton")[3]).css("display", "none")

            if ($.QS("PageCall") == "dashboardsetting") {
                $("#tabcscript").css("display", "inline-block");
                $("#divMain").hide();
                $("#<%=divComplex.ClientID%>").show();
                $(".cmdPanel").hide();
                //loadSettingData();
            }

          
            
        }

        function loadSettingData() {

            if (html != "") {
                Editors[0].setValue(html);
            }
            if (css != "") {
                Editors[1].setValue(css);
            }
            if (script != "") {
                $("#<%=txtScript.ClientID%>").val(script);
            }
            if (cscript != "") {
                $("#<%=txtCScript.ClientID%>").val(cscript);
            }
            if (Parameter != "") {
                var par = Parameter.split('|');
                for (i = 0; i < par.length; i++) {

                    var parval = par[i].split(',');

                    var listBox = $find("<%= rlbParameter.ClientID %>");
                    listBox.trackChanges();
                    //Instantiate a new client item
                    var item = new Telerik.Web.UI.RadListBoxItem();
                    var ItemNameType = parval[0] + "{" + parval[1] + "}";
                    item.set_text(ItemNameType);//itemName
                    item.set_value(parval[1]);
                    item.get_attributes().setAttribute("Entity", parval[2])
                    item.get_attributes().setAttribute("FormCode", parval[3])
                    item.set_selected(true);

                    listBox.get_items().add(item);
                    item.scrollIntoView();
                    listBox.commitChanges();
                }
                EnableEdit();
            }


        }

        function selectModule(sender, args) {
            var t = $("#<%=txtModule.ClientID %>");
            var n = args.get_node();
            if (n.get_level() < 1 && n.get_value() != "None")
                return;
            if (n.get_value() == "None") {
                lastModuleID = ""; lastModuleText = "";
                t.val("");
                $("#<%=hdnModule.ClientID%>").val("");
                $("#<%=hdnDispName.ClientID%>").val("");
            }
            else {
                t.val(n.get_text());
                $("#<%=hdnDispName.ClientID%>").val(n.get_text())
                $("#<%=hdnModule.ClientID%>").val(n.get_value());
                lastModuleID = n.get_value(); lastModuleText = n.get_text();
            }
            $("#tvCtrMod").hide();
        }

        function CreateAddButton() {
            var btns = $(".rlbButton");
            var btn = btns.eq(0).clone();
            btns.eq(0).before(btn);
            btn.setClass("rlbButton").find(".rlbButtonText").css("background-image", "none").html("Add").attr("title", "Add");
            btn.click(function () { ShowPopup('A') });

        }
        function CreateEditButton() {
            var btns = $(".rlbButton");
            var btn = btns.eq(0).clone();
            btns.eq(0).before(btn);//rlbDeleteDisabled rlbDisabled
            btn.setClass("rlbButton rlbDisabled").find(".rlbButtonText").css("background-image", "none").html("Edit").attr("title", "Edit");
            btn.click(function () { ShowPopup('E') });
        }

        function CreateDeleteButton() {
            var btns = $(".rlbButton");
            var btn = btns.eq(0).clone();
            btns.eq(0).before(btn);//rlbDeleteDisabled rlbDisabled
            btn.setClass("rlbButton rlbDisabled").find(".rlbButtonText").css("background-image", "none").html("Delete").attr("title", "Edit");
            btn.click(function () { DeleteValue()});
        }

        var selectedvalue=""
        function ShowPopup(mode) {

            //$("#divPopup").ShowModal();
            var listBox = $find("<%= rlbParameter.ClientID %>");
            var count = listBox.get_items().get_count();
            if (mode == 'E' && count > 0) {
                $("#divPopup").ShowModal();
                $("#btnAdd").val("Update");
                var listBox = $find("<%= rlbParameter.ClientID %>");
                var Name = listBox.get_selectedItem().get_text();

                var name = Name.split('{');
                var type = listBox.get_selectedItem().get_value();
                var Entity = listBox.get_selectedItem().get_attributes().getAttribute("Entity")
                var FormCode = listBox.get_selectedItem().get_attributes().getAttribute("FormCode")
                //var type = listBox.get_selectedItem().get_value().split(',');
                if (type == "Filter") {
                    $(".trEntity").setDisplay(true);
                }
                else if (type == "List" || type == "Multiselect") {
                    $(".trEntity").setDisplay(true);
                    $(".trFormCode").setDisplay(true);
                    $("#<%= hdnEntityID.ClientID %>").val(Entity);
                }
                $("#<%= txtName.ClientID %>").val(name[0]);//Name
                selectedvalue = name[0];
                var rcb = $find("<%= rcbType.ClientID %>");
                //var item = rcb.findItemByValue(type);
                var item = rcb.findItemByValue(type);
                item.select();

                var txtEntity = $("#<%=txtEntity.ClientID%>");
                var tree = $find("<%= tvEntity.ClientID %>");
                var treeitem = tree.findNodeByValue(Entity);
                if(treeitem!=null)
                    treeitem.select();
                if (tree.findNodeByValue(Entity)!=null)
                $(txtEntity).val(tree.findNodeByValue(Entity).get_text());


                var rcbFormcode = $find("<%=rcbFCode.ClientID %>");
                //var FCitem = rcbFormcode.findItemByValue(FormCode);
                rcbFormcode.set_text(FormCode);

            }
            else if (mode == 'A') {
                $("#divPopup").ShowModal();
                $("#btnAdd").val("Submit");
                $("#<%= txtName.ClientID %>").val("");
                $("#<%= hdnEntityID.ClientID %>").val("");
                $("#<%= txtEntity.ClientID %>").val("");
                var rcb = $find("<%= rcbType.ClientID %>");
                var item = rcb.findItemByValue("Text");
                item.select();
            }

        return false;
    }

    function optionWindowClose() {
        $("#divPopup").HideModal();
    }

    function addItem() {
        var Name = $("#btnAdd").val();


        //$("#divPopup").HideModal();
        var listBox = $find("<%= rlbParameter.ClientID %>");
        var itemName = $("#<%= txtName.ClientID %>").val().toLowerCase().Replace(" ", "");

        var itemType = $find("<%= rcbType.ClientID %>").get_selectedItem().get_value();

        var ItemNameType = itemName + "{" + itemType + "}";


        var Entityid = $("#<%=hdnEntityID.ClientID%>").val();
        var Fcode = $find("<%=rcbFCode.ClientID%>").get_text();

        //itemType = itemType + "," + Entityid + "," + Fcode;

        if (itemName == "") {
            alert("Please specify the Name.");
            return false;
        }
        else {
            
            var count = listBox.get_items().get_count();
            for (i = 0; i < count; i++) {

                var name = listBox.get_items()._array[i].get_text().split('{');
                if (Name == "Submit") {
                    if (itemName == name[0]) {
                        alert("Name already exist...")
                        return false;
                    }
                }
                else {

                    if (itemName == name[0] && itemName != selectedvalue) {
                        alert("Name already exist...")
                        return false;
                    }

                }
                
               
               
            }


        }
        if (itemType == "") {
            alert("Please select the Type.");
            return false;
        }


        if (itemType == "Filter" || itemType == "List" || itemType == "Multiselect") {
            if (Entityid == "") {
                alert("Please select the Entity.");
                return false;
            }
        }
        if (Name == "Submit") {
            listBox.trackChanges();
            //Instantiate a new client item
            var item = new Telerik.Web.UI.RadListBoxItem();
            item.set_text(ItemNameType);//itemName
            item.set_value(itemType);
            item.get_attributes().setAttribute("Entity", Entityid)
            item.get_attributes().setAttribute("FormCode", Fcode)
            item.set_selected(true);

            listBox.get_items().add(item);
            item.scrollIntoView();
            listBox.commitChanges();
            EnableEdit();
        }
        else {
            listBox.trackChanges();
            listBox.get_selectedItem().set_text(ItemNameType);//itemName
            listBox.get_selectedItem().set_value(itemType);
            listBox.get_selectedItem().get_attributes().setAttribute("Entity", Entityid)
            listBox.get_selectedItem().get_attributes().setAttribute("FormCode", Fcode)
            listBox.commitChanges();
        }
        $("#divPopup").HideModal();
        return false;
    }
    function EnableEdit() {

        var listBox = $find("<%= rlbParameter.ClientID %>");
        var count = listBox.get_items().get_count();
        var btnEdit = $(".rlbButton")[1];
        var btnDelete = $(".rlbButton")[2];
        if (count > 0) {
            $(btnEdit).removeClass("rlbButton rlbDisabled").addClass("rlbButton")
            $(btnDelete).removeClass("rlbButton rlbDisabled").addClass("rlbButton")
            //$(btnDelete).removeClass("rlbButton rlbDeleteDisabled rlbDisabled").addClass("rlbButton rlbDelete")
        }
        else {
            $(btnEdit).removeClass("rlbButton").addClass("rlbButton rlbDisabled")
            $(btnDelete).removeClass("rlbButton").addClass("rlbButton rlbDisabled")
            //$(btnDelete).removeClass("rlbButton rlbDelete").addClass("rlbButton rlbDeleteDisabled rlbDisabled")

        }
    }
    function CheckComplex(cntrl) {
        $("#<%=divComplex.ClientID%>").setDisplay($(cntrl).checked())
    }
    </script>


    <Script type="text/javascript">

        var editor = "";
        var editor1 = "";
        var editor2 = "";
        var editor3 = "";


        function showParameter() {
            
        }

       
        function SetValue() {

            if ($("#<%=txtCode.ClientID%>").val() == "") {
                alert("Please Enter the code")
                return false;
            }

            if (!$("#<%=divComplex.ClientID%>").exists())
                return;
            //$("#<%=txtEval.ClientID%>").val(Editors[3].getValue());
            $("#<%=txtHtml.ClientID%>").val(Editors[0].getValue());
           
            $("#<%=hdnVars.ClientID%>").val("<Variables>" + getVarXml() + "</Variables>");
            $("#<%=txtScript.ClientID%>").val($("#<%=ifrExprEditor.ClientID%>")[0].contentWindow.scriptEditor.getValue());
            $("#<%=txtCScript.ClientID%>").val($("#<%=ifrExprEditorCS.ClientID%>")[0].contentWindow.scriptEditor.getValue());
            $("#<%=txtCss.ClientID%>").val(Editors[1].getValue());
        }
        function getVarXml() {
            VariablesList = $("#<%=ifrExprEditor.ClientID%>")[0].contentWindow.VariablesList;
            return $("#<%=ifrExprEditor.ClientID%>")[0].contentWindow.GetVarXml(VariablesList);
        }
        var Editors = [];
        function EditorUpdate() {
            Editors = [];
            if (!$("#<%=divComplex.ClientID%>").exists())
                return;
            var edt = CodeMirror.fromTextArea($("#<%=txtHtml.ClientID%>")[0], {
                mode: "text/html",
                autoCloseTags: true
            });
            Editors.push(edt);
            // CodeMirror.commands["selectAll"](editor);

            edt = CodeMirror.fromTextArea($("#<%=txtCss.ClientID%>")[0], {
                mode: 'text/css',
                autoCloseBrackets: true
            });
            Editors.push(edt);

          
            //CodeMirror.commands["selectAll"](editor1);

            
            //CodeMirror.commands["selectAll"](editor2);

            //edt = CodeMirror.fromTextArea($("#<%=txtEval.ClientID%>")[0], {
            //    mode: 'text/x-csharp',
            //    autoCloseBrackets: true
            //});
            //Editors.push(edt);
            // CodeMirror.commands["selectAll"](editor3);


        }

        function InitEditor() {

            Editors["txtHtml"] = CodeMirror.fromTextArea($("#<%=txtHtml.ClientID%>")[0], {
                mode: "text/html",
                autoCloseTags: true
            });

            Editors["txtCss"] = CodeMirror.fromTextArea($("#<%=txtCss.ClientID%>")[0], {
                mode: 'text/css',
                autoCloseBrackets: true
            });

        }


        function FormatText() {
            for (var i = 0; i < 2; i++)
                autoFormatEditor(Editors[i]);

        }

        function UnselectText() {
            for (var i = 0; i <2; i++)
                CodeMirror.commands.goDocEnd(Editors[i]);
        }

        function showTab(n, a) {
            $("#divTabs").children("a").removeClass("selected"); $(a).addClass("selected");
            $("#divTabCtr").children().hide();
            $("#divTabCtr").node(n).show();
            if (n < 2) {
                autoFormatEditor(Editors[n]);
                Editors[n].focus();
            }
        }
        function autoFormatEditor(ed) {
            if (!ed)
                return;
            CodeMirror.commands["selectAll"](ed);
            var range = { from: ed.getCursor(true), to: ed.getCursor(false) }
            ed.autoFormatRange(range.from, range.to);
            ed.setCursor(0);
        }



    </script>

    <Script type="text/javascript">


        function onTypeChange(sender, eventArgs) {
            
            $(".trEntity").setDisplay(false);
            $(".trFormCode").setDisplay(false);
            var type = $find("<%=rcbType.ClientID%>").get_selectedItem().get_value();
            if (type == "Filter") {
                $(".trEntity").setDisplay(true);
            }
            else if (type == "List" || type == "Multiselect") {
                $(".trEntity").setDisplay(true);
                $(".trFormCode").setDisplay(true);

            }
        }

        if ($("#tvCtrEnt").exists()) {
            $("#<%=txtEntity.ClientID %>").on("click", function (e) {
                toggleEntityTree(e.target); e.stopPropagation();
            })
            $(document).on("click", function () { $("#tvCtrEnt").hide(); })
            $("#tvCtrEnt").on("click", function (e) { e.stopPropagation(); });
        }

        function toggleEntityTree(txt) {
            $(txt).next().show();
        }

        function selectEntity(sender, args) {

            $find("<%=rcbFCode.ClientID %>").set_text('');
            $find("<%=rcbFCode.ClientID %>").get_items().clear();

            var t = $("#<%=txtEntity.ClientID %>");
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
                $("#<%=hdnEntityID.ClientID %>").val(n.get_value());
            }
            $("#tvCtrEnt").hide();
        }

        function OnClientItemsRequesting(sender, eventArgs) {
            var context = eventArgs.get_context();
            context["@EntityID"] = $('#<%= hdnEntityID.ClientID %>').val();
            context["Type"] = "LoadFormCodeList";
        }

        function ValidateCode(cntrl) {
            $(cntrl).val($(cntrl).val().RemoveSpecialChars(true));
        }


        String.prototype.RemoveSpecialChars = function (space) {
            var outstring = "";
            for (var a = 0; a < this.length; a++) {
                if ((this[a].charCodeAt() >= 48 && this[a].charCodeAt() <= 57) ||
                    (this[a].charCodeAt() >= 65 && this[a].charCodeAt() <= 90) ||
                    (this[a].charCodeAt() >= 97 && this[a].charCodeAt() <= 122) || this[a].charCodeAt() == 95 || this[a].charCodeAt() == 32) {

                    if (this[a].charCodeAt() == 32 && space)
                        continue;
                    outstring = outstring + this[a];
                }
            }
            return outstring;
        }


        function DeleteValue() {

            var list = $find("<%= rlbParameter.ClientID %>");
            var items = list.get_items();
            var item = list.get_selectedItem();
            list.trackChanges();
            items.remove(item);
            list.commitChanges();
            var btnEdit = $(".rlbButton")[1];
            var btnDelete = $(".rlbButton")[2];

            var count = list.get_items().get_count();
            if (count > 0) {
                $(btnEdit).removeClass("rlbButton rlbDisabled").addClass("rlbButton")
                $(btnDelete).removeClass("rlbButton rlbDisabled").addClass("rlbButton")
            }
            else {
                $(btnEdit).removeClass("rlbButton").addClass("rlbButton rlbDisabled")
                $(btnDelete).removeClass("rlbButton").addClass("rlbButton rlbDisabled")

            }

        }


        function getSettingXmlValue() {

            var html = "";
            var script = "";
            var css = "";
            

            $("#<%=hdnVars.ClientID%>").val("<Variables>" + getVarXml() + "</Variables>");
            $("#<%=txtScript.ClientID%>").val($("#<%=ifrExprEditor.ClientID%>")[0].contentWindow.scriptEditor.getValue());
            $("#<%=txtCScript.ClientID%>").val($("#<%=ifrExprEditorCS.ClientID%>")[0].contentWindow.scriptEditor.getValue());
            html = "<" + "Html" + ">" + $.encodeXml(Editors[0].getValue()) + "<" + "/" + "Html" + ">";

            script = "<" + "Script" + ">" + $("#<%= hdnVars.ClientID %>").val() + "<" + "Script" + ">" + $.encodeXml($("#<%= txtScript.ClientID %>").val()) + "<" + "/" + "Script" + "><" + "/" + "Script" + ">";
            if ($.QS("PageCall") == "dashboardsetting")
                script += "<" + "CScript" + ">" + $("#<%= hdnCVars.ClientID %>").val() + "<" + "CScript" + ">" + $.encodeXml($("#<%= txtCScript.ClientID %>").val()) + "<" + "/" + "CScript" + "><" + "/" + "CScript" + ">";
            
            css = "<" + "Style" + ">" + $.encodeXml(Editors[1].getValue()) + "<"+"/"+"Style"  + ">";

            var ui = "<Ui>" + html + script + css + "</Ui>";

            var listBox = $find("<%= rlbParameter.ClientID %>");
            var count = listBox.get_items().get_count();
            var parameter = "<Parameters>";
            for (i = 0; i < count; i++) {

                var paramtertext = listBox.getItem(i).get_text().split('{');
                var paramterValue = listBox.getItem(i).get_value();
                var Entity = listBox.getItem(i).get_attributes().getAttribute("Entity");
                var Formcode = listBox.getItem(i).get_attributes().getAttribute("Formcode");
                parameter += "<Key Name=" + "\"" + paramtertext[0] + "\"" + " " + " Type =" + "\"" + paramterValue + "\"" + " Entity =" + "\"" + Entity + "\"" + " FormCode =" + "\"" + Formcode + "\"" + "/>";
            }
            parameter += "</Parameters>";

            var SettingxmlData = ui + parameter;

            return SettingxmlData;

        }

    </Script>

    


</asp:Content>
