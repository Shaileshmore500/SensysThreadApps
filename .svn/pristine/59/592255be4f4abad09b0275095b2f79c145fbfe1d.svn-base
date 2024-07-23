<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="DataBase_Verify_Conflicts.aspx.cs" Inherits="SensysErp.Meta.DataBase_Verify_Conflicts" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Untitled Page</title>
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
   
    </style>
</head>
<body>
    <form id="form1" runat="server">
         <asp:ScriptManager ID="ScriptManager1" runat="server" EnablePageMethods="true">
        </asp:ScriptManager>
         <%= HelperLib.Web.WebResources.GetResource("~/css/base.css")%>
        <%= HelperLib.Web.WebResources.GetResource("~/css/form.css")%>
  <div runat="server" id="pnlConflicts" style="width:600px;padding:25px;">
      <div class="cmdPanel" style="position:relative;padding-bottom:10px;padding-top:10px;font-size: 20px;"><span style="font-family:fontawesome">&#xf071;</span> Please Resolve Conflicts !
          <br /><span style="font-size:12px">The following changes were found in the database compared to the new application version.<br />Please select the records which can be updated to latest version.<br />Any changes made to these selected records will be discarded.</span>
           <span title="Select All" class="entity-check" style="position:absolute;right:10px;bottom:3px">                       <input id='chkMain' onclick="$('#tblConflict').find('.chk-update').checked($(this).checked())"  type="checkbox" /><label class="chk" for='chkMain'></label>
                   </span>
      </div>
     <table class="simple-grid" id="tblConflict" cellpadding="0" cellspacing="0" style="width:100%;position:relative">
    <asp:Repeater ID="rptConflicts" runat="server">
        <ItemTemplate>
           <tr class="category" style='<%# (HelperLib.Conversion.C.Str(ViewState["Category"])==HelperLib.Conversion.C.Str(Eval("CategoryName"))?"display:none":"")  %>'>
               <td><%#Eval("CategoryName") %></td>
           </tr>
           <tr class="subcategory" style='<%# (HelperLib.Conversion.C.Str(ViewState["SubCategoryID"])==HelperLib.Conversion.C.Str(Eval("SubCategoryID")) || HelperLib.Conversion.C.IsBlank(Eval("SubCategoryID"))?"display:none":"")  %>'>

               <td><%#Eval("SubCategory") %><span class="resSysname"><%#!HelperLib.Conversion.C.IsBlank(Eval("SubCategoryID")) && !HelperLib.Conversion.C.Eq("tbl_CORE_WorkflowScenarios",Eval("CategoryID"))?"{ "+Eval("SubCategoryID") +" }":"" %></td>
           </tr>
            <tr class="resource" >
               <td>
                   <span style="max-width: 80%;display: inline-block;">
                   <%#Eval("ResourceName") %><span class="resSysname"><%#!HelperLib.Conversion.C.IsBlank(Eval("ResourceSysName"))?"{ "+Eval("ResourceSysName") +" }":"" %></span>
                   </span>
                   <span title="Last Modified" class="resDate"><%#Eval("LastModified") %></span>
                   <span class="entity-check" style="position:absolute;right:10px;margin-top:0px">                       <input id='chk<%#Eval("ConflictID") %>' class="chk-update"  type="checkbox" /><label class="chk" for='chk<%#Eval("ConflictID") %>'></label>
                   </span>
               </td>
           </tr>
           <%#(ViewState["Category"]=Eval("CategoryName"))==""?"":"" %>
           <%#(ViewState["SubCategoryID"]=Eval("SubCategoryID"))==""?"":"" %>
        </ItemTemplate>

    </asp:Repeater>
        </table>
      <div class="cmdPanel" style="margin-top:10px"><a class="cmdBtn cmdClose" onclick="takeAction('Cancel')" href="javascript:void(0)">Keep My Changes</a>
          <a class="cmdBtn cmdEdit" style="float: right;" href="javascript:void(0)"  onclick="takeAction('Update')">Update Selected Records</a></div>
      </div>
    </form>
    <style>
        .category
        {
            background-color: #F90000  !important;
        }
        .category TD
        {
            font-size: 16px;
            padding-left:10px;
            color: #FFF;
            font-family: nunitobold;
            text-shadow: 2px 1px 10px #A8A8C5;
        }
        .subcategory
        {
            background-color: #FFCDAF  !important;
            
        }
        .subcategory TD
        {
            font-size: 14px;
            padding-left:15px;
            text-shadow: 2px 1px 10px #FD6A00;
        }
        .resource
        {

        }
        .resource TD
        {
            padding-left:25px;
            padding-top:8px;
            padding-bottom:8px;
            text-shadow: 2px 1px 10px #A8A8C5;
        }
        .resSysname
        {
            font-size: 12px;
font-style: italic;
margin-left: 10px;
color: #808080;
white-space: nowrap;
        }
        .resDate
        {
position: absolute;
right: 40px;
font-size: 12px;
font-style: italic;
margin-left: 10px;
color: #808080;
margin-top: 2px;
        }
        .entity-check .chk
        {
            background: -webkit-linear-gradient(top, #FFF 0%, #C5C5C5 100%);
        }
       

        .actionTaken
        {
            font-size: 25px;
font-family: opensans;
color: #008000;
text-decoration: underline;
display:block;
text-align:center;
margin-top:150px;
        }
        .actionTaken:before {
            font-family:fontawesome;
content: "\f00c";
display:inline-block;
margin-right:3px;
}
    </style>
    <script type="text/javascript">
   
        function takeAction(type) {
            var data = {};
            data["Type"] = type;
            if (type == "Update") {
                var ids = "";
                if ($("#chkMain").checked())
                    ids = "all";
                else {
                    $('#tblConflict').find('.chk-update').each(function () {if($(this).checked()) ids += $(this).attr("id").substring(3) + ","; })
                }
                if (ids == "") {
                    alert("Please select one or more records to update.");
                    return;
                }
                if (!confirm('Existing changes done to the selected records will be discarded.\nDo you wish to update the records? ')) {
                    return;
                }
                data["ids"] = ids;
                $.Notify("Upgrading records...");
                PageMethods.Execute(data, function () {
                    $.Notify(false);
                    $("#pnlConflicts").html("<span class='actionTaken'>Conflicts resolved.<br/>Selected records were updated to the latest version</span>").css("width", "100%");
                }, function () { $.Notify(false); alert("Error Occured.Please try again") })
                
            }
            else if (type == "Cancel") {
                if (!confirm('No action will be taken.\nYou can repeat this process next time the application is reinstalled.\nDo you wish to keep your changes?')) {
                    return;                   
                }
                $.Notify("Processing...");
                PageMethods.Execute(data, function () { $.Notify(false); $("#pnlConflicts").html("<span class='actionTaken'>Conflicts resolved.<br/>No changes were done to the database.</span>").css("width", "100%");; }, function () { $.Notify(false); alert("Error Occured.Please try again") })
                
            }
        }
    </script>
</body>
</html>
