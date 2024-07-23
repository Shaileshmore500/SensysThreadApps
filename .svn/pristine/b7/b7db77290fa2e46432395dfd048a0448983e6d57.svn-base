<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="GrantPermission.aspx.cs" Inherits="SensysErp.Meta.GrantPermission" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <title>Configuration</title>
    <script type="text/javascript">

        //window.title="title"
        document.documentElement.style.overflowX = "hidden"
        //document.documentElement.style.overflowY = "hidden"
    </script>

    <style type="text/css">
       .lblSection
        {
           display: block;
font-family: nunitolight;
font-size: 18px;
margin-top: 10px;
color: #002A74;
vertical-align: middle;
line-height: 18px;
border-top: solid 1px #E7E7E7;
padding-top: 10px;
        }

       
        .lblSection:first-child
        {
            margin-top: 6px !important;
            border-top: none !important;
            padding-top: 0 !important;
        }
        
        .lblTitle
        {
           display: block;
font-family: nunitoregular;
font-size: 16px;
margin-left: 25px;
color: #808080;
vertical-align: middle;
text-decoration: underline;
text-transform: capitalize;
        }

        .pnl-item
        {
           margin-left: 40px;
font-family: nunitoregular;
font-size: 12px;
margin-top: 5px;
position:relative;
        }

        .lbl-srno
        {
                      vertical-align: middle;
min-width: 17px;
display: inline-block;
        }

        .lbl-item
        {
            font-family: nunitobold;
            vertical-align:middle;
            text-transform: capitalize;
        }

        #divNew fieldset
        {
            border:solid 1px gray;
            padding:10px;
            min-height:60px;
            width:70%;
            margin-top: 15px;
        }

        #divNewCtr .pnl-item
        {
           margin-left: 0px;
padding-left: 18px;
        }
        #divNewCtr .lbl-item
        {
            margin-right:10px;
        }
        .removePer
        {
            position: absolute;
left: 0;
top: 4px;
color: #F00;
text-decoration: none;
background-color: #FFF;
width: 18px;
font-family: arial;
font-weight: bold;
font-size: 11px;
        }

        .chkRole
        {
            font-family: nunitoregular;
font-size: 14px;
text-transform: capitalize;
margin-left:15px;
        }
           
            .chkRole label, .chkRole input
            {
                vertical-align:middle;
            }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />

            <asp:Panel ID="pnlPermission" style="display:none" runat="server"> 
                <span class="mainHeading">Assign Required Permissions To This Resource</span><br />
                <asp:ListBox SelectionMode="Multiple" data-placeholder="Type to search permissions..." ID="ddlPermissions" runat="server"></asp:ListBox>
                <a href="javascript:void(0)" onclick="addPermission()" class="ActionButton GreenButton">Add</a>
               
                <div id="divContents" style="margin-top:12px"> 
                   
                    <div id="divNew" style="display:none"><fieldset><legend style="font-size: 14px;font-family: nunitoregular;">Newly Added</legend><div id="divNewCtr"></div></fieldset></div>
                    <asp:Repeater ID="dgUserPermissions" runat="server">
                        <ItemTemplate>
                            <asp:Label ID="Label2" CssClass='<%#"lblSection "+"lbl-"+HelperLib.Conversion.C.Str(Eval("sectionname")).ToLower() %>' runat="server" Visible='<%#ShowSection(Eval("sectionname")) %>' Text='<%# HelperLib.Conversion.C.Str(Eval("sectionname"))+" Permissions"%>'></asp:Label>
                            <asp:Label ID="lblName" CssClass="lblTitle" runat="server" Visible='<%#ShowGroup(Eval("listname")) %>' Text='<%# HelperLib.Conversion.C.Str(Eval("listname"))  %>'></asp:Label>


                            <asp:Panel ID="Panel1" runat="server" ptype='<%#Eval("sectionname").ToString().ToLower() %>' CssClass="pnl-item">
                                <asp:Label ID="Label3" CssClass="lbl-srno" runat="server" Text='<%#GetSerialNo(Eval("CategoryID")) + "." %>' ></asp:Label>
                                <asp:Label ID="Label4" CssClass="lbl-item" runat="server" Text='<%# HelperLib.Conversion.C.Str(Eval("description")) %>'></asp:Label>
                                <asp:CheckBox ID="DropDownList1" CssClass="chk" perid='<%# HelperLib.Conversion.C.Str(Eval("Permission_Pid")) %>' Checked='<%# HelperLib.Conversion.C.Bool(Eval("PermissionResult")) %>' runat="server"></asp:CheckBox>
                            </asp:Panel>
                        </ItemTemplate>

                    </asp:Repeater>
                </div>
            </asp:Panel>
            <asp:Panel ID="pnlRoles" runat="server" style="display:none">
                <span class="mainHeading">Select The Roles For Which This Resource Is Applicable</span><br />
                <asp:CheckBoxList ID="chklRoles" CssClass="chkRole" runat="server"></asp:CheckBoxList>
            </asp:Panel>
        </ContentTemplate>
    </asp:UpdatePanel>




    <script type="text/javascript">

        if ($.QS("PageCall") == "Permission")
            showDiv('Permission');
        else {
            showDiv('Permission');
            showDiv('Role');
        }


        var groups = {};
        $("#<%= ddlPermissions.ClientID %> option[data-category]").each(function () {
            groups[$.trim($(this).attr("data-category"))] = true;
        });
        $.each(groups, function (c) {
            $("#<%= ddlPermissions.ClientID %> option[data-category='" + c + "']").wrapAll('<optgroup label="' + c + '">');
        });
        $("#<%= ddlPermissions.ClientID %>").chosen({ width: "400px" });

        $("#<%= chklRoles.ClientID %>").on("click", "input", function () { handleRoles(this); })
        var lbl = $("#<%= chklRoles.ClientID %>").find("LABEL");
        //lbl.eq(0).css("color", "red").closest("TR").addClass("spl");
        lbl.eq(0).css("color", "green").closest("TR").addClass("spl");
        function showDiv(mode) {
            if (mode == "Role") {
                $("#<%= pnlPermission.ClientID %>").hide();
                $("#<%= pnlRoles.ClientID %>").show();
            }
            else if (mode == "Permission") {
                $("#<%= pnlPermission.ClientID %>").show();
                $("#<%= pnlRoles.ClientID %>").hide();
            }
        }

        $("#<%=chklRoles.ClientID%>_0").on("change", function () { toggleRoles($(this));})
      
        function toggleRoles(chk) {
            var all = $("#<%=chklRoles.ClientID%>_0");
           
            if (all.checked()) {
                $("#<%=chklRoles.ClientID%>").find("TR").not(".spl").setEnable(false, true).find("input").checked(true);
            }
            else {
                all.checked(false).closest("TR").setEnable(true, true);
                $("#<%=chklRoles.ClientID%>").find("TR").not(".spl").setEnable(true, true);
            }
        }

        toggleRoles();
    var dgPer = $("#divContents");
    dgPer.on("mouseover", ".pnl-item", function () { if ($(this).children(".removePer").show().exists()) return; $(this).append("<a class='removePer' href='javascript:void(0)' onclick='removePermission(this)' >X</a>"); })
    dgPer.on("mouseout", ".pnl-item", function () { $(this).children(".removePer").hide(); })
    dgPer.find(".chk").node(0).CheckBoxX();

    function addPermission() {
        $("#divNew").show();
        var div = $("#divNewCtr");
        $("#<%=ddlPermissions.ClientID%>").find("option:selected").each(function () {
            var item = $("<div class='pnl-item'></div>");
            div.append(item);
            item.append("<span class='lbl-item'>" + $(this).text() + "</span>");
            var chk = $("<span perid='" + $(this).val() + "' class='chk'><input type='checkbox' checked/></span>");
            item.append(chk);
            chk.node(0).CheckBoxX();            
            $(this).attr("disabled", "disabled");
        });
        $("#<%=ddlPermissions.ClientID%>").prop("selectedIndex", -1).trigger("chosen:updated")
    }

        function removePermission(a) {
            a = $(a);
            pnl = a.parent();
            var id = pnl.find(".chk").attr("perid");
            $("#<%=ddlPermissions.ClientID%>").find("option[value=" + id + "]").removeAttr("disabled");
            $("#<%=ddlPermissions.ClientID%>").prop("selectedIndex", -1).trigger("chosen:updated");
            pnl.remove();
        }

    function GetRoles() {
        var arrRoles = [];
        var chkList = $("#<%= chklRoles.ClientID %>");
            chkList.find('input').each(function () {
                if ($(this).checked()) {

                    var roleID = $(this).val();
                    arrRoles.push(roleID);
                    if (roleID == "-1") {
                        return false;
                    }
                }
            });

            return arrRoles;
        }

        function GetPermission() {
            var arr = [];
            var datgrid = $("#divContents");
            datgrid.find('.chk').each(function () {                
                var Permission = {};               
                Permission.PermissionID = $(this).attr("perid");
                Permission.Result = $(this).find("input").checked();
                arr.push(Permission);                
            });
            return arr;
        }

        function handleRoles(chk) {
            if ($(chk).attr("value") != "-1")
                $("#<%= chklRoles.ClientID %>").find("input[value=-1]").checked(false);
        }

       
    </script>

</asp:Content>


