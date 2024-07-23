<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="UrlHelper.aspx.cs" Inherits="SensysErp.Meta.UrlHelper" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/modernizr.js")%>

    <%# HelperLib.Web.WebResources.GetResource("~/css/normalize.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/fonts/font.css")%>   
    <%# HelperLib.Web.WebResources.GetResource("~/css/CustomControl/CustomControl.css")%>
   
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/System.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery-ui-1.10.3.custom.min.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jqHelper.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/UiHelper.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CustomControls.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/moment.min.js")%>

    <style>
        #tvCtrEnt,#divUrlTree {
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
        #divUrlTree
        {
            margin-left: 335px;
            width: 290px;
            height: 265px;
        }
        ._noBorder.formSettings
        {
            background-color: #FFF;
            border: none;
            border-radius: 0;
            box-shadow: none;
            padding: 0px;
            font-family: nunitoregular;
            font-size: 12px;
        }
        #divRpt
        {
            background-color: #FFF;
            border: solid 2px #9D9D9D;
            box-shadow: 2px 2px 7px #7B7B7B;
            position:absolute;
            height: 300px;
            width: 270px;
            display:none;
            z-index:3505;
        }
        #lblOutput
        {
           display: inline-block;
  background-color: #E8E8E8;
  color: #008000;
  max-width: 700px;
  padding: 10px;
  border: solid 1px #808080;
  border-radius: 5px;
  margin: 15px;
  font-size: 15px;
  font-family: monospace;
  white-space: normal;
  word-break: break-word;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <asp:ScriptManager ID="ScriptManager1" runat="server" EnablePageMethods="true"></asp:ScriptManager>
        <%= HelperLib.Web.WebResources.GetResource("~/css/base.css")%>
        <%= HelperLib.Web.WebResources.GetResource("~/css/form.css")%>
        <div id="divSettings" class="formSettings _noBorder" style="position:static">
            <span id="divAction">
                <span  id="trAction" class="row"><span style="width: 90px" class="lbl">Action
            : </span>
                    <select id="cboAction" style="width:180px" onchange="toggleAction()">
                        <option selected value="NONE">None</option>
                        <option value="VIEWFORM">Open View Form</option>
                         <option value="READVIEWFORM">Open Read-Only View</option>
                        <option value="ADDFORM">Open Add Form</option>
                        <option value="EDITFORM">Open Edit Form</option>
                        <option value="READFORM">Open Read-Only Form</option>
                        <option value="URL">Open Url</option>
                        <option value="RPTFOLDER">Open Report Folder</option>
                        <option value="RPTLIST">Open Report List</option>
                        <option value="REPORT">Open Report</option>
                        <option value="SESSION">Session Entity</option>
                        <option value="SETTINGS">Settings</option>
                        <option style2="display:none" value="WF">Workflow</option>
                        <option value="WFAPPROVAL">Workflow Approval</option>
                        <option value="MERGE">Merge Letter</option>
                        <option value="CHART">View Chart</option> 
                        <option value="DASH">Dashboard</option>                       
                    </select>
                    <span style="margin-left: 25px;" id="spnResponsive" ><label class="lbl"  for="chkResponsive">Responsive layout</label><input data-chk-on="yes" data-chk-off="no" id="chkResponsive" type="checkbox" /></span>
                </span><span id="trEntity" style="display: none" class="row"><span style="width: 90px"
                    class="lbl">Select Entity : </span>
                    <asp:TextBox ReadOnly="true" ID="txtEntity" CssClass="txt" runat="server"></asp:TextBox>
                    <div id="tvCtrEnt">
                        <telerik:RadTreeView ID="tvEntity" OnClientNodeClicked="selectEntity" runat="server">
                        </telerik:RadTreeView>
                    </div>
                </span>
                <span id="trForm" style="display: none" class="row"><span style="width: 90px"
                    class="lbl">Form Code : </span>
                    <telerik:RadComboBox ID="rcbFCode" runat="server" OnClientItemsRequesting="OnClientItemsRequesting" Width="205px" EnableLoadOnDemand="true" EnableAutomaticLoadOnDemand="true">
                        <WebServiceSettings Method="GetTargetFields_FormCode" Path="UrlHelper.aspx" />
                    </telerik:RadComboBox>
                </span>
                 <span id="trFolder" style="display: none" class="row"><span style="width: 90px"
                    class="lbl">Report Folder: </span>
                    <a id="lnkFolder" href="javascript:void(0)" class="_r" onclick="ShowRptList('ifrFolder',this)">Please Select</a>
                    <div>
                        <label class="lbl" style="width: 105px; margin-left: 100px; vertical-align: middle;" for="chkSubFolder">Show Child Folders </label>
                        <input style="vertical-align: middle;" data-chk-on="yes" data-chk-off="no" type="checkbox" id="chkSubFolder" />
                    </div>
                </span> 
                <span id="trReports" style="display: none" class="row"><span style="width: 90px"
                    class="lbl">Reports: </span>
                    <a id="lnkReport" href="javascript:void(0)" class="_r" onclick="ShowRptList('ifrReports',this)">Please Select</a>
                </span>

                 
               
                <span id="trSetting" style="display: none" class="row"><span style="width: 90px"
                    class="lbl">Category : </span>
                    <asp:DropDownList ID="ddlSettingCat" onchange="toggleAppList(this)" runat="server" Width="205px">
                    <asp:ListItem Text="Company" Value="Company"></asp:ListItem>                        
                        <asp:ListItem Text="Application" Value="Application"></asp:ListItem>
                    </asp:DropDownList>
                </span>
                <span id="trApp" style="display: none" class="row"><span style="width: 90px"
                    class="lbl">Application : </span>
                    <asp:DropDownList ID="rcbApps" runat="server" Width="225px">
                    
                    </asp:DropDownList>
                </span>
                
                <span id="trSession" style="display: none" class="row"><span style="width: 90px"
                    class="lbl">Session Keys : </span>
                    <asp:ListBox Width="400px" SelectionMode="Multiple" ID="lboSession" runat="server">
                    
                    </asp:ListBox>
                </span>
                <span id="trGroup" style="display: none" class="row"><span style="width: 100px"
                    class="lbl" title="Hide application titles">Hide Group Titles: </span>
                     <input style="vertical-align: middle;" type="checkbox" data-chk-on="yes" data-chk-off="no" id="chkGrp" />
                </span>
                <span id="trWf" style="display: none" class="row">
                       <span style="width: 90px" class="lbl">Workflow: </span>
                        
                            <asp:DropDownList ID="ddlWf" Style="margin-bottom: 15px;" runat="server">
                            </asp:DropDownList>
                           
               </span>

                   <span id="trChart" style="display: none" class="row">
                       <span style="width: 90px" class="lbl">Chart: </span>
                        
                            <asp:DropDownList ID="ddlChart" Style="margin-bottom: 15px;" runat="server">
                            </asp:DropDownList>
                           
               </span>
                <span id="trDash" style="display: none" class="row">
                       <span style="width: 90px" class="lbl">Dashboard: </span>
                        
                            <asp:DropDownList ID="ddlDash" Style="margin-bottom: 15px;" runat="server">
                            </asp:DropDownList>
                           
               </span>
                <span id="trLetter" style="display: none" class="row">
                          <span style="width: 90px" class="lbl">Select Letter: </span>
                           
                            <a id="lnkLetter" href="javascript:void(0)" class="default-link" runat="server" onclick="ShowRptList('ifrLetter',this)">Please Select</a>
                            
                       
                    </span>
                <span id="trRecordId" style="display: none" class="row"><span style="width: 90px"
                    class="lbl">Record ID : </span>
                    <input type="text" id="txtRecordID" class="txt" style="width:500px"  />
                </span>
               <span id="trTitle" style="display: none" class="row"><span style="width: 90px"
                    class="lbl">Title : </span>
                    <asp:TextBox ID="txtTitle" CssClass="txt" style="width:500px"  runat="server"></asp:TextBox>
                </span>
                <span id="trUrl" style="display: none" class="row"><span style="width: 90px"
                    class="lbl">Url : </span>
                    <asp:TextBox ID="txtUrl" style="width:500px" CssClass="txt" runat="server"></asp:TextBox><input type="button" id="btnUrl" value="..." />
                    <div id="divUrlTree">
                        <telerik:RadTreeView ID="tvUrl" OnClientNodeClicked="selectUrl" runat="server">
                        </telerik:RadTreeView>
                    </div>
                </span>
                <span id="trParams" style="display: none" class="row"><span style="width: 90px" title="Enter Additional Query string Parameters"
                    class="lbl">Parameters : </span>
                    <asp:TextBox ID="txtParam" style="width:500px" CssClass="txt" runat="server"></asp:TextBox>
                </span>
                <span id="trOpt"  class="row">
                            <span style="margin-left: 105px;" >Refresh grid on executing</span>&nbsp;&nbsp;
                            <asp:CheckBox ID="chkRefresh" data-chk-on="yes" data-chk-off="no" runat="server" />
                            <br />
                            <span style="margin-left: 105px;">Global Button (Record selection not required)</span>&nbsp;&nbsp;<asp:CheckBox ID="chkGlobal" data-chk-on="yes" data-chk-off="no" runat="server" />
                       </span>
                <span id="trLocation" style="display: none"  class="row"><span style="width: 90px" class="lbl">Location
            : </span>
           
                    <select id="cboLocation" style="width:180px" onchange="$('#divPop').setDisplay($(this).val()=='Popup')">
                        <option></option>
                        <option selected value="Self">Current Window</option>
                        <option value="Popup">Popup</option>
                        <option value="New">New Window</option>
                    </select>

                    <div id="divPop" style="margin-top: 15px; margin-left: 100px; display: none">
                        <span>Popup Width : </span>
                        <asp:TextBox Width="30px" Text="700" ID="txtPopWidth" runat="server"></asp:TextBox><select style="width:40px" id="ddlWidthPerc" onchange="$('._wd').setDisplay($(this).val()=='%')"><option>px</option><option>%</option></select>
                        <span style="margin-left: 18px">Popup Height : </span>
                        <asp:TextBox Width="30px" ID="txtPopHeight" Text="400" runat="server"></asp:TextBox><select style="width:40px"  id="ddlHeightPerc" onchange="$('._ht').setDisplay($(this).val()=='%')"><option>px</option><option>%</option></select><br /><br />

                        <span class="_wd">Min Width : </span><input class="_wd" style="width:30px"  type="text" id="txtPopMinWidth" /><span class="_wd">px</span>
                        <span  class="_wd"style="margin-left: 18px">Max Width : </span><input  class="_wd" style="width:30px"  type="text" id="txtPopMaxWidth" /><span class="_wd">px</span>
                        <span  class="_ht" style="margin-left: 18px">Min Height : </span><input class="_ht" style="width:30px"  type="text" id="txtPopMinHeight" /><span class="_ht" >px</span>                        
                        <span class="_ht" style="margin-left: 18px">Max Height : </span><input class="_ht" style="width:30px"  type="text" id="txtPopMaxHeight" /><span class="_ht" >px</span>
                    </div>
                </span>

            </div>
        </div>
        <div id="divRpt">
            <iframe frameborder="0" style="height: 100%; width: 100%" id="ifrFolder"></iframe>
            <iframe frameborder="0" style="height: 100%; width: 100%" id="ifrReports"></iframe>
            <iframe frameborder="0" style="height:100%;width:100%" id="ifrLetter"></iframe>
        </div>
        <div id="divOutput" style="display:none">
        <a onclick="generateUrl()" id="lbnGen" class="default-link" href="javascript:void(0)">Generate Url</a><br />
        <span id="lblOutput" style="display:none"></span></div>
    </form>
    <style>
        ._wd, ._ht {
            display:none;
        }

    </style>
    <script type="text/javascript">
        $(function () {
            if ((parent && parent.IsCustomButton) || $.QS("ts") == "1")
                $("#cboAction").find("option:[value=WF]").show();

            $("#tvCtrEnt,#divUrlTree").on("click", function (e) { e.stopPropagation(); });

            $("#<%=chkGlobal.ClientID %>,#<%=chkRefresh.ClientID %>,#chkSubFolder,#chkGrp,#chkResponsive").CheckBoxX();
            $("#<%=lboSession.ClientID %>").chosen({ disable_search: true, width: "400px" });
            $("#divSettings").find("select:not(#ddlWidthPerc,#ddlHeightPerc)").chosen({ disable_search: true, width: "220px" });
            //$("#cboLocation").chosen({ disable_search: true, width: "180px" });
            $("#<%=txtEntity.ClientID %>").on("click", function (e) { toggleTree(e.target); e.stopPropagation(); })
            $("#btnUrl").on("click", function (e) { toggleUrlTree(e.target); e.stopPropagation(); })
            $(document).on("click", function (e) { $("#tvCtrEnt,#divUrlTree").hide(); });
            
            if ($.QS("ts") == "1") {
                $("#cboAction").val("WF");
                toggleAction();
                $("#cboAction").closest(".row").hide();
                $("#trParams,#trOpt").hide();
                $("#lbnGen").html("Get Task ID");               
                $("#lblOutput").css("min-width", "400px");
                $("#divOutput").setDisplay(true);
                $(document.body).css("padding", "20px")
            }
            else {
                toggleAction();
                if ($.QS("_op") == "1") {
                    $("#divOutput").setDisplay(true);
                    $(document.body).css("padding", "20px")
                }
                if ($.QS("data") == "notification" || parent.$.QS("PageType") == "WF")
                    $("#divSettings").find(".txt").on("focus", function () { parent.currentEditor = $(window.frameElement).attr("id") + "###" + $(this).attr("id"); })
            }
            $("#trOpt").setDisplay($.QS("cb") == "1");
        });
        function pageLoad() {
            if ($.QS("lod") == "1")
                loadData(parent.ActionData);
            else if(!$.isEmpty($.QS("data")))
                loadData(parent[$.QS("data")]);
        }

        function loadActionData(data) {
            loadData(data);
        }
        function toggleTree(txt) {
            $(txt).next().show();
        }

        function toggleUrlTree(btn) {
            $(btn).next().show();
        }
        function toggleAction() {
            $("#trTitle").setDisplay(false);
            $("#trApp").setDisplay(false);
            $("#trForm").setDisplay(false);
            $("#trRecordId").setDisplay(false);
            $("#trParams").setDisplay(false);
            $("#trUrl").setDisplay(false);
            $("#trReports").setDisplay(false);
            $("#trFolder").setDisplay(false);
            $("#trEntity").setDisplay(false);
            $("#spnResponsive").setDisplay(false);
            $("#trLocation").setDisplay(false);
            $("#trSession").setDisplay(false);
            $("#trGroup").setDisplay(false);
            $("#trSetting").setDisplay(false);
            $("#trWf").setDisplay(false);
            $("#trLetter").setDisplay(false);
            $("#trChart").setDisplay(false);
            $("#trDash").setDisplay(false);
            var action = $("#cboAction").val().toUpperCase();
            if (action == "URL") {
                $("#trTitle").setDisplay(true);
                $("#trUrl").setDisplay(true);
                $("#trLocation").show();
            }
            else if (action == "NONE" || action == "") {

            }
            else if (action == "RPTFOLDER" || action == "RPTLIST") {
                $("#trTitle").setDisplay(true);
                $("#trFolder").setDisplay(true);
                $("#trParams").setDisplay(true);
                $("#trLocation").show();
            }
            else if (action == "REPORT") {
                $("#trTitle").setDisplay(true);
                $("#trReports").setDisplay(true);
                $("#trParams").setDisplay(true);
                $("#trLocation").show();
            }
            else if (action == "SESSION") {
                $("#trTitle").setDisplay(true);
                $("#trParams").setDisplay(true);
                $("#trSession").setDisplay(true);
                $("#trGroup").setDisplay(true);
                $("#trApp").setDisplay(true);
                $("#trLocation").show();
            }
            else if (action == "SETTINGS") {
                $("#trTitle").setDisplay(true);
                $("#trParams").setDisplay(true);
                $("#trSetting").setDisplay(true);             
                $("#trLocation").show();
            }
            else if (action == "WF") {

                $("#trWf").setDisplay(true);
                $("#trLocation").setDisplay(false);
                $("#trParams").setDisplay(true);
            }
            else if (action == "MERGE") {
                $("#trParams").setDisplay(true);
                $("#trLetter").setDisplay(true);
                $("#trLocation").setDisplay(true);
            }
            else if (action == "ADDFORM" || action == "VIEWFORM"  || action == "READVIEWFORM"|| action == "EDITFORM" || action == "READFORM" || action == "WFAPPROVAL") {
                $("#spnResponsive").setDisplay(true);
                $("#trEntity").setDisplay(true);
                $("#trParams").setDisplay(true);
                $("#trForm").setDisplay(true);
                $("#trLocation").show();
                $("#trTitle").setDisplay(true);
                $("#trRecordId").setDisplay(action == "EDITFORM" || action == "READFORM" || action == "WFAPPROVAL");
            }
            else if (action == "CHART")
            {
                $("#trChart").setDisplay(true);
                $("#trLocation").setDisplay(true);
            }
            else if (action == "DASH") {
                $("#trDash").setDisplay(true);
                $("#trLocation").setDisplay(true);
            }
        }
        function toggleAppList(ddl) {
            $("#trApp").setDisplay($(ddl).val()=="Application");
        }
        function ShowRptList(id, a) {
            window.currentRptLink = $(a);
            var ifr = $("#" + id);
            $("#divRpt").children().hide();
            ifr.show();
            if ($.isEmpty(ifr.attr("src"))) {
                if (id == "ifrLetter")
                    ifr.attr("src", "MessageTemplate_View.aspx?_ns=1&s=1");
                else
                    ifr.attr("src", "reports_view.aspx?_ns=1&m=" + (id == "ifrFolder" ? "f" : "r"));
            }
          
            window.setTimeout(function () {
                $(document).one("click", function (e) { $("#divRpt").hide(); });
                $("#divRpt").show().position({ of: $(a), my: "left top", at: "left bottom" }).css("width", (id == "ifrFolder" ? "270px" : "570px"));
            }, 10);

        }
        function setRptLinkValue(id, txt) {
            currentRptLink.html(txt).attr("recid", id);
            $("#divRpt").hide();
        }
        function setLtrLinkValue(id, txt) {
            currentRptLink.html(txt).attr("recid", id);           
            $("#divRpt").hide();
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
                t.attr("entityid", n.get_value());
            }
            $("#tvCtrEnt").hide();
        }

        function selectUrl(sender, args) {
            var n = args.get_node();
            if (n.get_attributes().getAttribute("IsFile")) {
                $("#<%=txtUrl.ClientID%>").val(n.get_value());
                $("#divUrlTree").hide();
            }
        }
        function OnClientItemsRequesting(sender, eventArgs) {
            var context = eventArgs.get_context();
            context["@EntityID"] = $("#<%=txtEntity.ClientID %>").attr("entityid");
            context["Type"] = "LoadFormCodeList";
        }

        function loadData(data) {
            //var data = {};
            $("#cboAction").val("NONE");
            resetData();
            if (!data)
                return;
            var action = $.defaultVal(data.Action,"").toUpperCase();
            
            $("#cboAction").val(action == "WFDLG" ? "WF" : action).trigger("chosen:updated");
            

            if (action == "VIEWFORM" || action == "READVIEWFORM" || action == "ADDFORM" || action == "EDITFORM" || action == "READFORM" || action == "WFAPPROVAL") {
                $("#chkResponsive").checked(data.Responsive==1);
                if (!$.isEmpty(data.Entity)) {
                    var n = $find("<%=tvEntity.ClientID%>").findNodeByValue(data.Entity);
                    if (n)
                        $("#<%=txtEntity.ClientID %>").val(n.get_text());
                    $("#<%=txtEntity.ClientID %>").attr("entityid", $.defaultVal(data.Entity, ""));
                }
                $find("<%=rcbFCode.ClientID %>").set_value($.defaultVal(data.Form, ""));
                $find("<%=rcbFCode.ClientID %>").set_text($.defaultVal(data.Form, ""));
                if (action == "EDITFORM" || action == "READFORM" || action == "WFAPPROVAL")
                    $("#txtRecordID").val($.defaultVal(data.RecordID, ""));
            }
            else if (action == "URL") {
                $("#<%=txtUrl.ClientID %>").val($.defaultVal(data.Url, ""));
            }
            else if (action == "REPORT") {
                $("#lnkReport").html(getRecordTitle(action, data.Rpt)).attr("recid", $.defaultVal(data.Rpt, ""));
            }
            else if (action == "RPTFOLDER" || action == "RPTLIST") {
                $("#lnkFolder").html(getRecordTitle(action, data.RptFolder)).attr("recid", $.defaultVal(data.RptFolder, ""));
                $("#chkSubFolder").checked(data.SubFolder == true);
            }
            else if (action == "WF" || action == "WFDLG") {
                $("#<%=ddlWf.ClientID %>").val(data.WF).trigger("chosen:updated");                
            }
            else if (action == "MERGE") {                
                $("#lnkLetter").html(getRecordTitle(action, data.Ltr)).attr("recid", $.defaultVal(data.Ltr, ""));
            }
            else if (action == "SESSION") {
                $("#<%=lboSession.ClientID %>").setSelectionOrder($.defaultVal(data.SessionId.split(','), []),true);
                $("#chkGrp").checked(data.HideGroup == true);
                $("#<%=rcbApps.ClientID %>").val($.defaultVal(data.App, "")).trigger("chosen:updated");
            }
            else if (action == "SETTINGS") {
                $("#<%=ddlSettingCat.ClientID %>").val($.defaultVal(data.Category, "")).trigger("change").trigger("chosen:updated");
                $("#<%=rcbApps.ClientID %>").val($.defaultVal(data.CatId, "")).trigger("chosen:updated");
            }
            else if (action == "CHART") {
               
                $("#<%=ddlChart.ClientID %>").val(data.Chart).trigger("chosen:updated");
               
            }
            else if (action == "DASH") {

                $("#<%=ddlDash.ClientID %>").val(data.Dash).trigger("chosen:updated");

            }
            if (action != "NONE" && action != "") {
                if (action != "WF" && action != "MERGE")
                    $("#<%=txtTitle.ClientID %>").val($.defaultVal(data.Title, ""));
                $("#<%=txtParam.ClientID %>").val($.defaultVal(data.Params, ""));
                $("#cboLocation").val($.defaultVal(data.Location, "")).trigger("chosen:updated");
                if ($("#cboLocation").val() == "Popup") {
                    $("#divPop").show();
                    $("#<%=txtPopHeight.ClientID %>").val($.defaultVal(data.PopHt, "400").toString().replace("%",""));
                    $("#<%=txtPopWidth.ClientID %>").val($.defaultVal(data.PopWd, "700").toString().replace("%", ""));
                    if ($.defaultVal(data.PopHt, "").toString().indexOf("%") > 0) {
                        $("._ht").show();$("#ddlHeightPerc").val("%");
                        $("#txtPopMinHeight").val($.defaultVal(data.minHeight, "")); $("#txtPopMaxHeight").val($.defaultVal(data.maxHeight, ""));
                    }
                    if ($.defaultVal(data.PopWd, "").toString().indexOf("%") > 0) {
                        $("._wd").show(); $("#ddlWidthPerc").val("%");
                        $("#txtPopMinWidth").val($.defaultVal(data.minWidth, "")); $("#txtPopMaxWidth").val($.defaultVal(data.maxWidth, ""));
                    }
                }
            }
            $("#<%=chkRefresh.ClientID %>").checked(data.Refresh);
            $("#<%=chkGlobal.ClientID %>").checked(data.Global);
            toggleAction();

        }
        function resetData() {
            $("#cboAction").val("None").trigger("chosen:updated");
            toggleAction();
            $("#chkResponsive").checked(false);
            $("#<%=txtEntity.ClientID %>").val("");
            $("#<%=txtEntity.ClientID %>").attr("entityid", "");
            $find("<%=rcbFCode.ClientID %>").set_value("");
            $("#<%=txtUrl.ClientID %>").val("");

            $("#lnkReport").html("Please Select").attr("recid", "");

            $("#lnkFolder").html("Please Select").attr("recid","");
            $("#chkSubFolder").checked(false);

            $("#<%=lboSession.ClientID %>").val([]).trigger("chosen:updated");
            $("#chkGrp").checked(false);
            $("#<%=rcbApps.ClientID %>").val("").trigger("chosen:updated");

            $("#<%=ddlSettingCat.ClientID %>").val("").trigger("change").trigger("chosen:updated");
            $("#txtRecordID").val("");
            $("#<%=txtTitle.ClientID %>").val("");
            $("#<%=txtParam.ClientID %>").val("");
            $("#cboLocation").val("").trigger("chosen:updated");
            $("#divPop").hide();
            $("#<%=txtPopHeight.ClientID %>").val("400");
            $("#<%=txtPopWidth.ClientID %>").val("700");
            $("#txtPopMinWidth,#txtPopMaxWidth,#txtPopMinHeight,#txtPopMaxHeight").val("");
            $("._wd,._ht").hide();
            $("#<%=ddlWf.ClientID %>").val("").trigger("chosen:updated");
            $("#<%=ddlChart.ClientID %>").val("").trigger("chosen:updated");
            $("#<%=ddlDash.ClientID %>").val("").trigger("chosen:updated");
            $("#<%=chkRefresh.ClientID %>").checked(false);
            $("#<%=chkGlobal.ClientID %>").checked(false);
            $("#lnkLetter").html("Please Select").attr("recid", "");
        }
        function saveUrl() {
            var action = $("#cboAction").val();
            var data = {};
            data.Action = action;
            action = data.Action.toUpperCase();

            if (action == "VIEWFORM" || action == "READVIEWFORM" || action == "ADDFORM" || action == "EDITFORM" || action == "READFORM" || action == "WFAPPROVAL") {
                data.Responsive = ($("#chkResponsive").checked()?1:0);
                data.Entity = $("#<%=txtEntity.ClientID %>").attr("entityid");
                data.Form = $find("<%=rcbFCode.ClientID %>").get_text();
                if (action == "EDITFORM" || action == "READFORM" || action == "WFAPPROVAL")
                    data.RecordID = $("#txtRecordID").val();                
            }
            else if (action == "URL") {
                data.Url=$("#<%=txtUrl.ClientID %>").val();
            }
            else if (action == "REPORT") {
                data.Rpt= $("#lnkReport").attr("recid");
            }
            else if (action == "RPTFOLDER" || action == "RPTLIST") {
                data.RptFolder=$("#lnkFolder").attr("recid");
                data.SubFolder=$("#chkSubFolder").checked();
            }
            else if (action == "WF" || action == "WFDLG") {
                var item = $("#<%=ddlWf.ClientID %>").selectedItem();
                data.WF = (item ? item.val() : "");
                if (item.attr("dlg") == "1")
                    data.Action = "WFDLG";                
            }
            else if (action == "MERGE") {
                data.Ltr = $("#lnkLetter").attr("recid");
            }
            else if (action == "SESSION") {
                data.SessionId = $.defaultVal($("#<%=lboSession.ClientID %>").getSelectionOrder(), []).join();
                data.HideGroup=$("#chkGrp").checked();
                data.App=$("#<%=rcbApps.ClientID %>").val();
            }
            else if (action == "SETTINGS") {
                data.Category = $("#<%=ddlSettingCat.ClientID %>").val();
                data.CatId = $("#<%=rcbApps.ClientID %>").val();
            }
            else if (action == "CHART") {
                    data.Chart = $("#<%=ddlChart.ClientID %>").val();
            }
            else if (action == "DASH") {
                data.Dash = $("#<%=ddlDash.ClientID %>").val();
            }
            data.Refresh = $("#<%=chkRefresh.ClientID %>").checked();
            data.Global = $("#<%=chkGlobal.ClientID %>").checked();
            
            if (action != "NONE" && action != "") {
                if (action != "WF" && action != "MERGE")
                    data.Title = $("#<%=txtTitle.ClientID %>").val();
                data.Params = $("#<%=txtParam.ClientID %>").val();
                if (action != "WF") {
                    data.Location = $("#cboLocation").val();
                    if ($("#cboLocation").val() == "Popup") {
                        data.PopHt = $("#<%=txtPopHeight.ClientID %>").val() + ($("#ddlHeightPerc").val() == "%" ? "%" : "");
                        data.PopWd = $("#<%=txtPopWidth.ClientID %>").val() + ($("#ddlWidthPerc").val() == "%" ? "%" : "");
                        if ($("#ddlWidthPerc").val() == "%") {
                            if ($("#txtPopMinWidth").val() / 1 > 0)
                                data.minWidth = $("#txtPopMinWidth").val();
                            if ($("#txtPopMaxWidth").val() / 1 > 0)
                                data.maxWidth = $("#txtPopMaxWidth").val();
                        }
                        if ($("#ddlHeightPerc").val() == "%") {
                            if ($("#txtPopMinHeight").val() / 1 > 0)
                                data.minHeight = $("#txtPopMinHeight").val();
                            if ($("#txtPopMaxHeight").val() / 1 > 0)
                                data.maxHeight = $("#txtPopMaxHeight").val();
                        }
                    }
                }
            }
            return data;
        }

        function getRecordTitle(type, recid) {
            if ($.isEmpty(recid))
                return "Please Select";
            if (type == "RPTFOLDER" || type == "RPTLIST") {
                var res = $(arrFolderList).filter(function () { return this.reportfolder_pid == recid; });
                return res.length > 0 ? res[0].foldername : "Please Select";
            }
            else if (type == "REPORT") {
                var res = $(arrReports).filter(function () { return this.report_pid == recid; });
                return res.length > 0 ? res[0].reportname : "Please Select";
            }
            else if (type == "MERGE") {
                var res = $(arrLetters).filter(function () { return this.lettertemplates_pid == recid; })
                return res.length > 0 ? res[0].lettername : "Please Select";
            }
        }

        function GetUrlXml(data) {
            var action = (data && data.Action ? data.Action.toUpperCase() : "");
            var xml = "<Action><Type>" + data.Action + "</Type>";
            if (action == "VIEWFORM" || action == "READVIEWFORM" || action == "ADDFORM" || action == "EDITFORM" || action == "READFORM" || action == "WFAPPROVAL") {
                xml += "<Responsive>" + $.encodeXml(data.Responsive) + "</Responsive>";
                xml += "<Entity>" + $.encodeXml(data.Entity) + "</Entity>";
                xml += "<Form>" + $.encodeXml(data.Form) + "</Form>";
                if (action == "EDITFORM" || action == "READFORM" || action == "WFAPPROVAL") {
                    xml += "<RecordID>" + $.encodeXml(data.RecordID) + "</RecordID>";
                }
            }
            else if (action == "URL") {
                xml += "<Url>" + $.encodeXml(data.Url) + "</Url>";
            }
            else if (action == "REPORT") {
                xml += "<Report>" + $.encodeXml(data.Rpt) + "</Report>";
            }
            else if (action == "RPTFOLDER") {
                xml += "<RptFolder>" + $.encodeXml(data.RptFolder) + "</RptFolder>";
                xml += "<ShowSubFolder>" + (data.SubFolder == true ? 1 : 0) + "</ShowSubFolder>";
            }
            else if (action == "RPTLIST") {
                xml += "<RptList>" + $.encodeXml(data.RptFolder) + "</RptList>";
            }
            else if (action == "WF" || action=="WFDLG") {
                xml += "<WfCode>" + $.encodeXml(data.WF) + "</WfCode>";               
            }
            else if (action == "MERGE") {
                xml += "<Letter>" + $.encodeXml(data.Ltr) + "</Letter>";
            }
            else if (action == "SESSION") {
                xml += "<SessionId>" + $.encodeXml(data.SessionId) + "</SessionId>";
                xml += "<HideGroup>" + (data.HideGroup == true ? 1 : 0) + "</HideGroup>";
                xml += "<App>" + $.encodeXml(data.App) + "</App>";
            }
            else if (action == "SETTINGS") {
                xml += "<Category>" + $.encodeXml(data.Category) + "</Category>";
                xml += "<CatId>" + $.encodeXml(data.CatId) + "</CatId>";
            }
            else if (action == "CHART") {
                xml += "<Chart>" + $.encodeXml(data.Chart) + "</Chart>";
            }
            else if (action == "DASH") {
                xml += "<Dash>" + $.encodeXml(data.Dash) + "</Dash>";
            }
            xml += "<RefreshGrid>" + (data.Refresh == true ? 1 : 0) + "</RefreshGrid>";
            xml += "<GlobalButton>" + (data.Global == true ? 1 : 0) + "</GlobalButton>";
            if (action != "NONE" && action != "") {
                if (action != "WF" && action != "MERGE")
                    xml += "<Title>" + $.encodeXml(data.Title) + "</Title>";
                xml += "<Parameter>" + $.encodeXml(data.Params) + "</Parameter>";
                if (action != "WF") {
                    xml += "<Location>" + data.Location + "</Location>";
                    if ($.defaultVal(data.Location, "").toLowerCase() == "popup") {
                        xml += "<PopupHeight>" + $.encodeXml(data.PopHt) + "</PopupHeight>";
                        xml += "<PopupWidth>" + $.encodeXml(data.PopWd) + "</PopupWidth>";

                        if (data.minWidth / 1 > 0)
                            xml += "<MinWidth>" + data.minWidth + "</MinWidth>";
                        if (data.maxWidth / 1 > 0)
                            xml += "<MaxWidth>" + data.maxWidth + "</MaxWidth>";
                        if (data.minHeight / 1 > 0)
                            xml += "<MinHeight>" + data.minHeight + "</MinHeight>";
                        if (data.maxHeight / 1 > 0)
                            xml += "<MaxHeight>" + data.maxHeight + "</MaxHeight>";
                      
                    }
                }
            }
            xml +="</Action>";
            return xml;
            alert(xml);
        }

        function generateUrl() {
            if ($.QS("ts") == "1") {
                $("#lblOutput").show().html("TaskID:'" + $("#<%=ddlWf.ClientID%>").val() + "'");
                return;
            }
            var data = saveUrl();
            $("#lblOutput").show().html(JSON.stringify(data));
        }
        
     
    </script>
</body>
</html>
