<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MenuDesigner.aspx.cs" Inherits="SensysErp.Meta.MenuDesigner" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>
<!DOCTYPE html>
<html class="DarkTheme" xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/modernizr.js")%>

        <%# HelperLib.Web.WebResources.GetResource("~/css/normalize.css")%>
        <%# HelperLib.Web.WebResources.GetResource("~/fonts/font.css")%>   
        <%# HelperLib.Web.WebResources.GetResource("~/Css/bluegloss/jquery-ui-1.10.3.custom.css")%>
        <%# HelperLib.Web.WebResources.GetResource("~/css/CustomControl/CustomControl.css")%>
        <%# HelperLib.Web.WebResources.GetResource("~/css/menu.css")%>

        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/System.js")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery-ui-1.10.3.custom.min.js")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jqHelper.js")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/UiHelper.js")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CustomControls.js")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Scripts/moment.min.js")%>

    
    <style>
        html, body, form
        {
            width: 100%;
            height: 100%;
            /*background-color: #DADADA;*/
        }

        #FirstLevel
        {
            width: auto;
            padding-right: 30px;           
        }

        .menuDesign #FirstLevel
        {
            margin-left: 50px;
            margin-right: 10px;
        }
        .menuDesign #ThirdLevel .menuSet
        {
            padding-top:0;
        }
        .menuDesign #ThirdLevel .menuItemSet 
        {
            min-height:8px
        }
        .menuDesign #btnAdd3Ctr
        {
            margin-top: 42px;
            display: inline-block;
        }
        
        .userRights #FirstLevel
        {
            margin-right: 20px;
        }

        #SecondLevel
        {
            display: block;
            padding-left: 0;
        }

        .userRights #SecondLevel
        {
            padding-left: 20px;
            padding-right: 20px;
        }

        #ThirdLevel
        {
            top: 128px;
            width: 275px;
        }

        #lt1, #rt1
        {
            top: 7px;
            top: 7px;
        }

        .menuDesign #lt1
        {
            left: 38px;
        }

        #rt1
        {
            right: 10px;
        }

        .menuDesign #lt2
        {
            right: 0px;
        }

        .userRights #lt1
        {
            left: 0px;
        }


        .menuDesign #SecondLevel .menuItem:hover
        {
            transition: none;
            -webkit-transition: none;
            -moz-transition: none;
        }



        #spnIcon
        {
            font-family: fontawesome;
            display: block;
            line-height: 38px;
            font-size: 28px;
            font-weight: normal;
        }

        #spnIcon
        {
            height: 35px;
            width: 35px;
            color: #000;
            text-align: center;
            text-decoration: none;
            border: solid 1px #8f8f8f;
        }

            #spnIcon:hover
            {
                border: solid 1px red;
            }





        #tvCtrEnt, #tvCtrMod
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

        .reorder-arrow
        {
            height: 30px;
            width: 4px;
            display: inline-block;
            position: relative;
            vertical-align: middle;
        }

            .reorder-arrow:before
            {
                font-family: fontawesome;
                content: "\f176";
                color: #F00;
                position: absolute;
                bottom: -8px;
                left: 2px;
                font-size: 30px;
            }

        #FirstLevel .reorder-arrow
        {
            height: 20px;
            width: 12px;
        }

            #FirstLevel .reorder-arrow:before
            {
                bottom: -15px;
                left: 0px;
                font-size: 25px;
            }

        #SecondLevel .reorder-arrow
        {
            height: 75px;
        }

        .divIcons
        {
            width: 550px;
            height: 510px;
            top: 150px;
            overflow: hidden;
        }








        #FirstLevel .menuItem,
        #SecondLevel .menuItem,
        #ThirdLevel .menuItem,
        #ThirdLevel .menuItemGroup
        {
            position: relative;
        }

        .menuDesign #FirstLevel .menuItem,
        .menuDesign #SecondLevel .menuItem,
        .menuDesign #ThirdLevel .menuItem,
        .menuDesign #ThirdLevel .menuItemGroup
        {
            cursor: move;
        }

        .menuSet.deactivate .eye
        {
            display: none;
        }

        .eye
        {
            text-indent:0;
            font-family: fontawesome;
            font-weight: normal;
            position: absolute;
            font-size: 14px;
            color: #CE0000;
            text-decoration: none;
            background-color: #DDD;
            height: 15px;
            width: 16px;
            line-height: 15px;
            border-radius: 3px;
            text-shadow: none !important;
            border: solid 1px #949494;
            text-align: center;
        }

        .deactivate .eye
        {
            color: #4A0;
        }

        .eye:hover
        {
            color: #CE0000;
            background-color: #FFE4E4;
        }

        .deactivate .eye:hover
        {
            color: #4A0;
            background-color: #EAFFE4;
        }

        #FirstLevel .menuItem .eye
        {
            top: 0px;
            right: 1px;
        }
        .menuDesign #FirstLevel .menuItem .eye
        {
            right: 22px;
        }
        #SecondLevel .menuItem .eye
        {
            top: 3px;
            right: 3px;
        }
        .menuDesign #SecondLevel .menuItem .eye
        {
            right: 22px;
        }
        #ThirdLevel .menuItem .eye
        {
            top: 2px;
            right: 2px;
        }
        .menuDesign #ThirdLevel .menuItem .eye
        {
            right: 42px;
        }

        #ThirdLevel .menuItemGroup .eye
        {
            top: 6px;
            right: 2px;
        }
        .menuDesign #ThirdLevel .menuItemGroup .eye
        {
            right: 42px;
        }
        .close
        {
            text-indent:0;
            font-weight: normal;
            font-family: fontawesome;
            position: absolute;
            font-size: 14px;
            color: #C50000;
            text-decoration: none;
            background-color: #DDD;
            height: 15px;
            width: 16px;
            line-height: 15px;
            border-radius: 3px;
            text-shadow: 1px 1px 1px #FFF;
            border: solid 1px #949494;
            text-align: center;
        }

        .sysmenu .close
        {
            color: #707070;
            background-color: #979797;
        }
            .close:hover
            {
                color: #CE0000;
                background-color: #FFE4E4;
            }

        .sysmenu .close:hover
        {
            color: #707070;
            background-color: #979797;
        }

        #FirstLevel .menuItem .close
        {
            top: 0px;
            right: 1px;
        }

        #SecondLevel .menuItem .close
        {
            top: 3px;
            right: 3px;
        }

        #ThirdLevel .menuItem .close
        {
            top: 2px;
            right: 2px;
        }

        #ThirdLevel .menuItemGroup .close
        {
            top: 6px;
            right: 2px;
        }



        .deactivate .menuTxt, .deactivate .menuIcon
        {
            color: gray !important;
        }

        .menuItemAddFirst
        {
            font-family: fontawesome;
            height: 33px;
            display: inline-block;
            padding: 0px 7px 0px 5px;
            line-height: 29px;
            font-weight: normal;
            font-size: 25px;
            text-decoration: none;
            vertical-align: middle;
            margin-right: 2px;
            color: #E0FF00;
            margin: 2px;
            position: absolute;
            top: 30px;
            left: 1px;
            z-index: 1000;
        }

        #SecondLevel .menuItemAdd
        {
            float: left;
            margin: 0 20px 0px 7px;
            cursor: pointer;
            display: inline-block;
            font-size: 36px;
            font-weight: normal;
            color: #E0FF00;
            font-family: fontawesome;
            text-align: center;
            text-decoration: none;
            line-height: 55px;
        }

            .menuItemAddFirst:hover,
            #SecondLevel .menuItemAdd:hover
            {
                color: #10CA10;
            }


        #ThirdLevel .menuItemAdd
        {
            font-family: arial;
            text-align: center;
            padding: 3px 0;
            display: inline-block;
            font-size: 18px;
            text-decoration: none;
            height: 22px;
            line-height: 22px;
            font-weight: bold;
            width: 134px;
            border-radius: 5px;
        }

            #ThirdLevel .menuItemAdd:hover
            {
                color: #000 !important;
                background-color: #D6FF00;
            }

        .insert
        {
            text-indent:0;
            font-weight: normal;
            font-family: fontawesome;
            position: absolute;
            font-size: 14px;
            color: #27A200;
            text-decoration: none;
            background-color: #DDD;
            height: 15px;
            width: 16px;
            line-height: 16px;
            border-radius: 3px;
            text-shadow: 1px 1px 1px #FFF;
            border: solid 1px #949494;
            text-align: center;
        }

            .insert:hover
            {
                color: #278D27;
                background-color: #E4FFE5;
            }

        #FirstLevel .menuItem .insert
        {
            display: none;
        }

        #SecondLevel .menuItem .insert
        {
            top: 3px;
            left: 3px;
        }

        #ThirdLevel .menuItem .insert
        {
            top: 2px;
            right: 22px;
        }

        #ThirdLevel .menuItemGroup .insert
        {
            top: 6px;
            right: 22px;
        }

        .btnSave
        {
            position: absolute;
            top: 375px;
            left: 550px;
            height: 50px;
            width: 200px;
            text-align: center;
            line-height: 50px;
            text-decoration: none;
            border-radius: 5px;
            font-size: 20px;
            font-family: arial;
            color: #fff;
            padding: 0 30px;
            background: #168412; /* Old browsers */
        }

            .btnSave:hover
            {
                background: #8fc800; /* Old browsers */
                background: -moz-linear-gradient(top, #8fc800 0%, #8fc800 100%); /* FF3.6+ */
                background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#8fc800), color-stop(100%,#8fc800)); /* Chrome,Safari4+ */
                background: -webkit-linear-gradient(top, #8fc800 0%,#8fc800 100%); /* Chrome10+,Safari5.1+ */
                background: -o-linear-gradient(top, #8fc800 0%,#8fc800 100%); /* Opera 11.10+ */
                background: -ms-linear-gradient(top, #8fc800 0%,#8fc800 100%); /* IE10+ */
                background: linear-gradient(to bottom, #8fc800 0%,#8fc800 100%); /* W3C */
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8fc800', endColorstr='#8fc800',GradientType=0 ); /* IE6-9 */
            }

            .btnSave:before
            {
                font-family: fontawesome;
                content: "\f0c7";
                font-size: 28px;
                margin: 0 15px 0 -25px;
            }

        #spnAlert
        {
            color: #ADADAD;
            margin-left: 25px;
            display: block;
            white-space: normal;
        }
            #spnAlert:before
            {
                font-family: fontawesome;
                content: "\f071";
                color: #FFB77E;
                font-size: 14px;
                margin-right: 5px;
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

        .DevMode:after
        {
            content: "\f005";
            font-family: FontAwesome;
            font-size: 9px;
            margin-left: 4px;
            color: #ffeb00;
        }

        .userRights  .menuItem:after,
        .userRights  .menuItemGroup:after
        {
            content: "\f00c";
            font-family: FontAwesome;
            font-size: 12px;
            margin-left: 4px;
            color: #00ff8b;
        }
        .userRights  .recom.menuItem:after,
        .userRights  .recom.menuItemGroup:after
        {          
            color: #ffeb00;
        }
        .userRights  .deactivate.menuItem:after,
        .userRights  .deactivate.menuItemGroup:after,
        .userRights  .deactivate>.menuItem:after
        {
         content: "\f00d";
    font-family: FontAwesome;
    font-size: 12px;
    margin-left: 5px;
    color: #ff4700;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <asp:ScriptManager ID="ScriptManager1" runat="server" EnablePageMethods="true">
        </asp:ScriptManager>
         <%= HelperLib.Web.WebResources.GetResource("~/css/base.css")%>
        <div style="text-align:center" runat="server" id="topBar">
    
            <a href="javascript:void(0)" runat="server" id="lnkCompany"  class="lnkCompany">Testing 123</a>
            
        </div><div id="divCompList"><asp:Literal ID="pnlCompList" Mode="PassThrough" runat="server"></asp:Literal></div>

        <asp:Panel ID="divMain" runat="server" Style="height: 95%; width: 100%">
            <div style="position: absolute; top: 30px; left: 0; right: 0; height: 45px; background-color: #616060"></div>
            <a type="button" class="btnSave" href="javascript:void(0)" runat="server" id="btnSaveMenu" onclick="SaveMenuStructure()">Save Menu</a>
            <a type="button" class="btnSave" href="javascript:void(0)" runat="server" id="btnSaveRights" onclick="SaveRights()">Save Access Rights</a>
            <asp:Literal EnableViewState="false" ID="menuContent" runat="server" Mode="PassThrough"></asp:Literal>
       
        <a class="ScrollBtn" href="javascript:void(0)" id="lt1">&#xf190;</a>
        <a class="ScrollBtn" href="javascript:void(0)" id="lt2">&#xf190;</a>
        <a class="ScrollBtn" href="javascript:void(0)" id="rt1">&#xf18e;</a>
        <a class="ScrollBtn" href="javascript:void(0)" id="rt2">&#xf18e;</a> </asp:Panel>
        <asp:Panel ID="divIcons" runat="server" CssClass="formSettings divIcons" Style="display: none;">
            <iframe frameborder="0" src="Icons.html" style="height: 100%; width: 100%"></iframe>
        </asp:Panel>
        <asp:Panel Style="display: none;position:absolute;padding-top: 35px;min-width: 340px;" CssClass="formSettings" runat="server" ID="menuProperties">
            <span style="font-family: nunitolight;font-size: 22px;position: absolute;top: 2px;color: #881600;" id="spnTitle"></span>
            <span id="spnAlert" style="display:none">Please choose "Global View" if this menu item is applicable for all companies</span>
            <div id="divProps">
            <span id="trApp" class="row"><span style="width: 90px" class="lbl">Related To App: </span>
                <asp:DropDownList ID="ddlApps" onchange="setTitleText()" runat="server">
                </asp:DropDownList>
            </span><span id="trModule" style="display: none" class="row"><span style="width: 90px"
                class="lbl">Related To Module: </span>
                <asp:TextBox ReadOnly="true" ID="txtModule" CssClass="txt" runat="server"></asp:TextBox>
                <div id="tvCtrMod">
                    <telerik:RadTreeView ID="tvModule" OnClientNodeClicked="selectModule" runat="server">
                    </telerik:RadTreeView>
                </div>
            </span><span class="row"><span style="width: 90px" class="lbl">Title : </span>
                <asp:TextBox ID="txtTitle" CssClass="txt" runat="server"></asp:TextBox>
            </span><span class="row"><span style="width: 90px" class="lbl">Tooltip : </span>
                <asp:TextBox ID="txtTooltip" CssClass="txt" TextMode="MultiLine" Rows="4" runat="server"></asp:TextBox></>
            </span>
            <span id="trMenuStyle" class="row"><span style="width: 90px" class="lbl">Menu Style: </span>
                <select id="ddlMenuStyle">
                  <option value="">Default</option>
                  <option value="mc">Multi Column</option>
                  <option value="fp">Full Page</option>
                </select>
            </span>   
            <span id="trStyle" class="row"><span id="spnColor"><span style="width: 108px" class="lbl">Background color : </span>
                <input type="text" title="Background Color." style="vertical-align: middle" value="#006890"
                    id="txtBgColor" />
                <span style="width: 68px" class="lbl">Font Color : </span>
                <input type="text" title="Font Color." style="vertical-align: middle" value="#ffffff"
                    id="txtForeColor" /></span>
                <div id="div1" style="margin-top: 5px;">
                    <input type="radio" id="rdoFont" checked name="icon"/><label style="width: auto;margin-right: 5px;" class="lbl" for="rdoFont">Font Icon</label> <a href="javascript:void(0)"
                        onclick="showIconList()" style="vertical-align: middle; display: inline-block"
                        id="spnIcon">&#xf00a;</a><input style="margin-left: 23px;" type="radio" id="rdoSvg" name="icon"/><label style="width: auto;margin-right: 5px;" class="lbl" for="rdoSvg">SVG/IMG Icon</label><textarea style="width: 225px;" id="txtIcon" ></textarea>
                </div>
            </span>
                <span class="row"><span style="width: 90px" class="lbl">Css Class : </span>
                <asp:TextBox ID="txtCssClass" CssClass="txt" runat="server"></asp:TextBox>
            </span>
                <span id="spnVisibility" class="row"><span style="width: 90px" class="lbl">Visibility: </span>
                <asp:DropDownList ID="ddlVisibility"  runat="server">
                    <asp:ListItem Text="Inherit" Value="0"></asp:ListItem>
                    <asp:ListItem Text="Desktop Only" Value="1"></asp:ListItem>
                    <asp:ListItem Text="Mobile Only" Value="2"></asp:ListItem>
                    <asp:ListItem Text="Desktop & Mobile" Value="3"></asp:ListItem>
                </asp:DropDownList>
            </span>
                <span id="spnCollapse" class="row"><label for="chkCollapse"  class="lbl"> Collapse Group </label> <input id="chkCollapse" type="checkbox" data-chk-on="yes" data-chk-off="no" /> </span>
            <span id="spnBreak" class="row"><label for="chkBreak"  class="lbl"> New Column/Row</label> <input id="chkBreak" type="checkbox" data-chk-on="yes" data-chk-off="no" /> </span>
            </div>
             <span class="row"><span style="width: 90px;" class="lbl">Resource Version : </span>
                <asp:TextBox ID="txtResVersion" CssClass="txt" runat="server"></asp:TextBox>
            </span>
            
           <span id="spnOverride" class="row"><label for="chkOverride"> Override Action </label> <input onclick="toggleActionOverride(this)" id="chkOverride" type="checkbox" data-chk-on="yes" data-chk-off="no" /> </span>
            <div id="divifrProps"><iframe id="ifrProps" src="UrlHelper.aspx" scrolling="no" frameborder="0" style="width:700px;height:375px"></iframe></div>
            
            <span class="row" style="text-align: right">
                <input type="button" value="save" class="ActionButton GreenButton" onclick="createMenu()" />

                <input type="button" value="cancel" class="ActionButton GlassButton RedColor" onclick="$(this).closest('.formSettings').HideModal()" />
            </span>

           
        </asp:Panel> 
        <span id="ctrbtn" style="display: none">

            <a href="javascript:void(0)" onclick="toggleActivation(this)" id="btnEye" title="Deactivate Menu" runat="server" class="eye">&#xf06e;</a>
            <span id="secondLevelTitle" class="secondLevelTitle"></span>
            <asp:Panel runat="server" ID="pnlBtn">
                <a href="javascript:void(0)" onclick="removeMenuItem(this)" id="btnClose" title="Delete Menu" runat="server" class="close">&#xf00d;</a>
                <a href="javascript:void(0)" onclick="insertMenuItem(this)" id="btnInsert" title="Insert Menu" class="insert">&#xf067;</a>

                <a href="javascript:void(0)" id="btnAdd1" onclick="showProps('APP')" title="Add Top Level Menu" class="menuItemAddFirst">&#xf055;</a>
                <a href="javascript:void(0)" id="btnAdd2" onclick="showProps('GROUP')" title="Add Toolbar Menu" class="menuItemAdd">&#xf055;</a>
                <span id="btnAdd3Ctr">
                    <a href="javascript:void(0)" id="btnAdd3g" onclick="showProps('ITEMGROUP')" title="Add Group Menu" class="menuItemAdd">Add Group</a>


                </span>
            </asp:Panel>
        </span>

        
    </form>
    <style>
        .menuIcon svg {
    width: 0.875em;
    height: 1em;
    display: inline-block;
    font-size: 22px !important;
    overflow: visible;
    margin-top: 5px;
}
        #divCompList {
            display: block;
            left: 970px;
            position: absolute;
            background: rgb(255, 255, 255);
            z-index: 1000;
            width: 250px;
        }
        #divCompList a {
    display: block;
    padding: 10px;
    border-bottom: solid 1px gray;
    text-decoration: none;
}

        .menuItem i, .menuItemGroup i {
            font-style: normal;
            font-family: fontawesome;
            display: inline-block;
            vertical-align: middle;
            margin-right: 5px;
            margin-left: 12px;
        }
            .menuItem i svg, .menuItemGroup i svg {
                width: 0.875em;
                height: 1em;
                display: inline-block;
                font-size: 18px !important;
                overflow: visible;
            }
        .menuIcon img,.menuItem i img, .menuItemGroup i img {
            max-width: 0.875em;
            max-height: 1em;
        }
           .menuItem i  m2, .menuItemGroup i m2{
    font-family: materialsymbols;
    font-size: 18px;
    float: left;
    font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 48;
}
        #ThirdLevel .menuItem {
            vertical-align: middle;
        }
        .menuItemGroup {
            text-indent: 0;
            padding-left: 5px;
        }
    </style>
    <script>
        var currMode = "";
        if ($("#<%=menuProperties.ClientID %>").exists()) {
            $("#<%=ddlApps.ClientID %>").chosen({ disable_search: true, width: "220px" });
            $("#cboAction,#cboLocation,#ddlVisibility,#ddlMenuStyle").chosen({ disable_search: true, width: "180px" });
          
            $("#txtBgColor").simpleColorPicker({
                colors: [
    "#006890", "#d41243", "#00c920", "#F3B200", "#77B900", "#2572EB", "#AD103C", "#632F00", "#B01E00", "#C1004F",
    "#7200AC", "#4617B4", "#006AC1", "#008287", "#199900", "#00C13F", "#FF981D", "#FF2E12", "#FF1D77", "#AA40FF",
    "#1FAEFF", "#56C5FF", "#00D8CC", "#E1B700", "#FF76BC", "#00A3A3", "#FE7C22"]
            });
            $("#txtForeColor").simpleColorPicker();
          
            $("#<%=txtModule.ClientID %>").on("click", function (e) { toggleTree(e.target); e.stopPropagation(); })

            $(document).on("click", function () { $("#tvCtrEnt").hide(); $("#tvCtrMod").hide(); })
            $("#tvCtrEnt").on("click", function (e) { e.stopPropagation(); });
            $("#tvCtrMod").on("click", function (e) { e.stopPropagation(); });


            $(document.body).append($("#btnAdd1"));
            $("#SecondLevel").prepend($("#btnAdd2"));
            $("#ThirdLevel").prepend($("#btnAdd3Ctr"));

            $("#<%=txtResVersion.ClientID %>").closest(".row").setDisplay(<%=ErpModel.Globals.AppManager.InDevelopmentMode.ToString().ToLower()%>)
        }

        $("#FirstLevel").on("mouseenter", ".menuItem,.menuIcon,.menuTxt", function (e) { showbtn(e.target); })
        $("#SecondLevel").on("mouseenter", ".menuItem,.menuIcon,.menuTxt", function (e) { showbtn(e.target); })
        $("#ThirdLevel").on("mouseenter", ".menuItem,.menuItemGroup,.menuIcon,.menuTxt", function (e) { showbtn(e.target); })

        $(document).on("click", function (e) { if (!$(e.target).hasClass("lnkCompany")) $("#divCompList").hide(); if ($(e.target).attr("id") != "spnUser" && $(e.target).attr("id") != "imgUser") $("#usrMenu").hide(); })
        function toggleCompList(a) {
            $("#divCompList").css("left", $(a).offset().left - 10).slideToggle();
        }

        $("#chkOverride,#chkCollapse,#chkBreak").CheckBoxX();

        var btnEye = $("#<%=btnEye.ClientID %>");
        var btnClose = $("#<%=btnClose.ClientID %>");
        var btnInsert = $("#btnInsert");
        function showbtn(m) {
            m = $(m);
            if (!m.hasClass("menuItem") && !m.hasClass("menuItemGroup"))
                m=m.closest(".menuItem,.menuItemGroup");
            if (m.hasClass("menuItem") || m.hasClass("menuItemGroup")) {

                if (btnEye.exists()) {
                    if (m.hasClass("deactivate")) {
                        btnEye.html("&#xf06e;");
                        btnEye.attr("title", "Activate Menu");
                        btnEye.removeClass("deactivate")
                    }
                    else {
                        btnEye.html("&#xf070;");
                        btnEye.attr("title", "Deactivate Menu");
                        btnEye.addClass("deactivate")
                    }
                    m.append(btnEye);
                }
                if (btnClose.exists()) {
                    m.append(btnClose);
                    m.append(btnInsert);
                }
            }
        }

        function toggleActivation(e) {
            e = $(e);


            var m = e.parent();
            if (m.data("SysDeactivated")) {
                alert('Entity not assigned to this User-Role');
                return;
            }
            if (parentDeactivated(m)) {
                alert("Please activate parent menu first")
                return;
            }
            var deactivate = !m.hasClass("deactivate");
            var lvl = m.attr("level") / 1;

            if (deactivate)
                m.addClass("deactivate");
            else
                m.removeClass("deactivate");

            if (lvl == 0) {
                var id = m.attr("id").replace("level1_", "");
                var mset = $("#level1_set_" + id);
                if (deactivate) {
                    mset.addClass("deactivate");
                    mset.children(".menuItem").each(function () { var a = $(this); var id1 = a.attr("id").replace("level2_", ""); $("#level2_set_" + id1).addClass("deactivate"); })
                }
                else {
                    mset.removeClass("deactivate");
                    mset.children(".menuItem").each(function () { var a = $(this); var id1 = a.attr("id").replace("level2_", ""); $("#level2_set_" + id1).removeClass("deactivate"); })
                }
            }
            else if (lvl == 1) {
                var id = m.attr("id").replace("level2_", "");
                var mset = $("#level2_set_" + id);
                if (deactivate) {
                    mset.addClass("deactivate");
                }
                else {
                    mset.removeClass("deactivate");
                }
            }
            else if (lvl == 2) {
                var mset = m.next();
                if (deactivate) {
                    mset.addClass("deactivate");
                }
                else {
                    mset.removeClass("deactivate");
                    mset.children().removeClass("deactivate");
                }
            }
        }

        function parentDeactivated(m) {
            var lvl = m.attr("level") / 1;
            if (lvl <= 0)
                return false;
            else if (lvl < 3 && m.closest(".menuSet").hasClass("deactivate")) {
                return true;
            }
            else if (lvl == 3) {
                if (m.closest(".menuItemSet").hasClass("deactivate"))
                    return true;
            }
            return false;
        }




        var EditMode = false;
        var currBtn = null;
        var lastModuleText = "", lastModuleID = "";
        initMenu();
        function initMenu() {
            makeHorizontalSortable($(".menuDesign #FirstLevel"));
            makeHorizontalSortable($(".menuDesign #SecondLevel").find(".menuSet"));
            $(".menuDesign #ThirdLevel").find(".menuSet").sortable({ cancel: ".menuItemSet", stop: function (event, ui) { }, update: function (event, ui) { if (ui.item.prev().hasClass("menuItemGroup")) { $(this).sortable('cancel'); return }; ui.item.after($("#" + ui.item.attr("id").replace("_", "_set_"))); } });
            $(".menuDesign #ThirdLevel").find(".menuItemSet").sortable({ connectWith: ".menuItemSet" });
            $("#FirstLevel").children(".menuItem").eq(0).addClass("selected").click();
            $("#ThirdLevel").prepend($("#secondLevelTitle"));
            $("#FirstLevel").slide({ step: 40, movLeft: $("#lt1"), movRight: $("#rt1") });
            //$("#FirstLevel").append($("#lt1").hide());
            //$("#FirstLevel").append($("#rt1").hide())
            $("#SecondLevel").append($("#lt2").hide());
            $("#SecondLevel").append($("#rt2").hide());
        }

        function insertMenuItem(a) {
            a = $(a);
            var m = a.parent();
            if (!m.hasClass("menuItem") && !m.hasClass("menuItemGroup"))
                return;
            var lvl = m.attr("level") / 1;
            if (lvl == 0) {
                showProps('APP', m, true);
            }
            else if (lvl == 1) {
                showProps('GROUP', m, true);
            }
            else if (lvl == 2) {
                showProps('ITEM', m, true);
            }
            else if (lvl == 3) {
                showProps('ITEM', m, true);
            }
        }
        var btnCurrInsert = null;
        function showProps(mode, btn, insert) {
            btnCurrInsert = null;
            currMode = mode;
            resetProps();
            EditMode = false;
            $("#spnTitle").html("New Menu");
            $("#divifrProps").disableOverlay(false);
            if (insert && btn) {
                btnCurrInsert = btn;
            }
            else if (btn) {
                currBtn = $(btn);
                EditMode = true;
                loadProps(currBtn);                
            }
            $("#spnAlert").setDisplay((!btn || (insert && btn)) && <%=(!GlobalView).ToString().ToLower()%>);
            $('#<%=menuProperties.ClientID %>').ShowModal().css("top", "150px");
            $("#<%=txtTitle.ClientID %>").focus();
        }
        function resetProps() {
            $("#divProps").show();
            $("#spnAlert").hide();            
            $("#spnOverride").hide();
            $("#<%=ddlApps.ClientID %>").prop("selectedIndex", 1).trigger("chosen:updated");
           
            $("#chkOverride,#chkCollapse,#chkBreak").checked(false);
            $("#<%=ddlVisibility.ClientID %>").val("0");
            $("#ddlMenuStyle").val("");
            $("#<%=txtTitle.ClientID %>").val("");
            $("#<%=txtCssClass.ClientID %>").val("");
            $("#<%=txtTooltip.ClientID %>").val("");       
            $("#<%=txtModule.ClientID %>").removeAttr("moduleid").val("");
            
            
            $("#txtBgColor").val("").blur();
            $("#txtForeColor").val("").blur();
            $("#spnIcon").html("&#xf00a;");$("#txtIcon").val("");
            $("#spnCollapse,#spnBreak").setDisplay(false);
            $("#trModule").setDisplay(true);            
            $("#trStyle,#spnColor,#trMenuStyle").setDisplay(false);
            $("#divPop").hide();
            $("#rdoFont").checked(true);$("#rdoSvg").checked(false);
            $("#trApp").hide();
            $("#ifrProps")[0].contentWindow.resetData();
            $("#trStyle").setDisplay(true);
            $("#spnColor").setDisplay(true);
            if (currMode == "APP") {
                $("#trApp").show();          
                
                
            }
            else if (currMode == "GROUP") {               
                $("#trStyle,#trMenuStyle").setDisplay(true);
            }
            else if (currMode == "ITEM") {
                $("#spnIcon").html("");
                $("#spnBreak").setDisplay(true);
            }
            else if (currMode == "ITEMGROUP") {
                $("#spnIcon").html("");
            }
            if (currMode == "APP" && "<%=ErpModel.Globals.AppManager.DevelopmentType%>" == "APPLICATION") {
                $("#ddlApps").val("<%=ErpModel.Globals.AppManager.OwnerApplication%>").trigger("chosen:updated");
            }
            else if ("<%=ErpModel.Globals.AppManager.DevelopmentType%>" == "MODULES") {
                $("#<%=txtModule.ClientID %>").attr("moduleid", "<%=ErpModel.Globals.AppManager.OwnerModule%>").val("<%=ErpModel.Globals.AppManager.OwnerModuleName%>");
            }
            if (lastModuleID != "") {
                $("#<%=txtModule.ClientID %>").attr("moduleid", lastModuleID).val(lastModuleText);
            }
            if(currMode=="ITEMGROUP"){
                $("#chkCollapse").checked(false);
                $("#spnCollapse,#spnBreak").setDisplay(true);
            }
        }
        function loadProps(btn) {
            $("#spnTitle").html(btn.find(".menuTxt").text());
            $("#divifrProps").disableOverlay(false)
            if ($(btn).data("Readonly")) {
                $("#divProps").hide();
                $("#divifrProps").disableOverlay(btn.data("Override") != true);
                $("#spnOverride").show();                
            }
            else 
                $("#divifrProps").disableOverlay(false);
            $("#<%=ddlApps.ClientID %>").val($.defaultVal(btn.data("App"), "")).trigger("chosen:updated");
            $("#<%=ddlVisibility.ClientID %>").val($.defaultVal(btn.data("Visibility"), "0")).trigger("chosen:updated");
            $("#chkOverride").checked(btn.data("Override") == true);
            $("#<%=txtTitle.ClientID %>").val($.defaultVal(btn.find(".menuTxt").text(), ""));
            $("#<%=txtTooltip.ClientID %>").val($.defaultVal(btn.attr("title"), ""));        
            $("#<%=txtModule.ClientID %>").val($.defaultVal(btn.data("ModuleTitle"), ""));
            $("#<%=txtCssClass.ClientID %>").val($.defaultVal(btn.data("Css"), ""));
            $("#<%=txtModule.ClientID %>").attr("entityid", $.defaultVal(btn.data("Module"), ""));
            $("#<%=txtResVersion.ClientID %>").val($.defaultVal(btn.data("ResVersion"), ""));
            var ic=$("");
            if (currMode == "GROUP"||currMode == "APP") {
                if(currMode == "APP"){
                   
                }
  
                ic=btn.find(".menuIcon");
            }
            else if(currMode=="ITEMGROUP"){
                $("#chkCollapse").checked(btn.data("Collapse") == true);
            }
            if(currMode=="GROUP")
                $("#ddlMenuStyle").val($.defaultVal(btn.data("MenuStyle"), "")).trigger("chosen:updated");

            if(currMode=="ITEMGROUP"||currMode=="ITEM"){
                $("#chkCollapse").checked(btn.data("Collapse") == true);
                $("#chkBreak").checked(btn.data("Break") == true);
                ic=btn.find("i");
            }
            if(ic.find("svg,img").length>0){
                $("#rdoSvg").checked(true);
                $("#txtIcon").val(ic.html());
            }
            else{
                $("#rdoFont").checked(true);
                $("#spnIcon").html($.defaultVal(ic.html(), (currMode=="ITEMGROUP"||currMode=="ITEM"?"":"&#xf00a;")));
            }
            $("#txtBgColor").val($.defaultVal(btn.find(currMode=="ITEMGROUP"||currMode=="ITEM"?"i":".menuIcon").getStyle("background-color"), "")).blur();
            $("#txtForeColor").val($.defaultVal(btn.find(currMode=="ITEMGROUP"||currMode=="ITEM"?"i":".menuIcon").getStyle("color"), "")).blur();
          

            $("#ifrProps")[0].contentWindow.loadData(btn.data("Action"))
        }

        function toggleActionOverride(chk) {
            chk = $(chk);            
            $("#divifrProps").disableOverlay(!chk.checked());
        }
        function createMenu() {
            var btn;
            if (!EditMode) {
                if (currMode == "APP") {
                    btn = addFirstLevel();
                    $("#FirstLevel").slide("refresh");
                    btn.trigger("click")
                }
                else if (currMode == "GROUP") {
                    btn = addSecondLevel();
                    btn.closest(".menuSet").slide("refresh");
                    btn.trigger("click")
                }
                else if (currMode == "ITEM")
                    btn = addThirdLevel();
                else if (currMode == "ITEMGROUP")
                    btn = addThirdLevelGrp();
                if(<%=ErpModel.Globals.AppManager.InDevelopmentMode.ToString().ToLower()%>)
                    btn.addClass("DevMode");
            }
            else
                btn = currBtn;
            btn.uniqueId();
            saveProps(btn);
            $('#<%=menuProperties.ClientID %>').HideModal();
        }
        function saveProps(btn) {
            var ddlApp = $("#<%=ddlApps.ClientID %>");
            var ddlAction = $("#cboAction");
            var ddlLoc = $("#cboLocation");
            var txt = $("#<%=txtTitle.ClientID %>").val();
            var tip = $("#<%=txtTooltip.ClientID %>").val();

            btn.find(".menuTxt").html(txt);
            btn.attr("title", tip);
            btn.data("App", ddlApp.val());           
            btn.data("ModuleTitle", $("#<%=txtModule.ClientID %>").val());
            btn.data("Module", $.defaultVal($("#<%=txtModule.ClientID %>").attr("moduleid"),""));          
            btn.data("Override", $("#chkOverride").checked());
            btn.data("Action",$("#ifrProps")[0].contentWindow.saveUrl());
            btn.data("ResVersion",$("#<%=txtResVersion.ClientID %>").val());
            btn.data("Visibility",$("#<%=ddlVisibility.ClientID %>").val());
            btn.data("Css",$("#<%=txtCssClass.ClientID %>").val());
            btn.data("MenuStyle",$("#ddlMenuStyle").val());
            if (currMode == "APP"||currMode == "GROUP") {
                if (currMode == "APP"){
                    
                }
                if($("#rdoFont").checked()||$.isEmpty($("#txtIcon").val()))
                    btn.find(".menuIcon").html($.defaultVal($("#spnIcon").html(), "&#xf00a;"));
                else
                    btn.find(".menuIcon").html($("#txtIcon").val());
            }
            if(currMode=="ITEMGROUP"){
                btn.data("Collapse", $("#chkCollapse").checked());
            }
            if(currMode=="ITEMGROUP"||currMode=="ITEM"){
                btn.data("Break", $("#chkBreak").checked());
                btn.find("i").remove();
                if(!$.isEmpty($("#spnIcon").html()) || !$.isEmpty($("#txtIcon").val())){
                    var i=$("<i></i>");
                    btn.prepend(i);
                    i.html($("#rdoFont").checked()?$("#spnIcon").html():$("#txtIcon").val())
                }
            }
            var style = "";
            style += ($("#txtBgColor").val() == "" ? "" : ("background-color:" + $("#txtBgColor").val() + ";"));
            style += ($("#txtForeColor").val() == "" ? "" : ("color:" + $("#txtForeColor").val() + ";"));
            if (style != "background-color:#006890;color:#ffffff;" && style!="")
                btn.find(currMode=="ITEMGROUP"||currMode=="ITEM"?"i":".menuIcon").attr("style", style);
            else
                btn.find(currMode=="ITEMGROUP"||currMode=="ITEM"?"i":".menuIcon").removeAttr("style")
        }


        function showIconList() {
            $("#<%=divIcons.ClientID %>").ShowModal({zindex:4000,autoClose:true}).css("top", "100px");
        }
        function selectIcon(ico) {
            $("#<%=divIcons.ClientID %>").HideModal();
            $("#spnIcon").html(ico);

        }



        function makeHorizontalSortable(div) {
            div.sortable({

                cursor: { top: 5 },
                placeholder: "reorder-arrow",
                cursor: "move",
                axis: "x",
                sort: function (event, ui) {
                    var that = $(this);
                    ui.placeholder.insertBefore(ui.item);
                    that.children().each(function () {
                        if ($(this).hasClass('ui-sortable-helper') || $(this).hasClass('reorder-arrow'))
                            return true;
                        w = $(this).outerWidth();
                        var dist = ui.position.left - $(this).position().left,
                            before = dist < w / 2;
                        if (dist > 0 && ui.position.left < $(this).position().left + w) {
                            if (before)
                                ui.placeholder.insertBefore($(this));
                            else
                                ui.placeholder.insertAfter($(this));
                            return false;
                        }
                    });
                },

            });
        }

        function addFirstLevel() {
            var id = getUID(1);
            $("#FirstLevel").children(".menuItem").removeClass("selected");
            var btn = $("<a   href='javascript:void(0)' level='0' ondblclick='showProps(\"APP\",this)' onclick='showSecondLevel(this)'  id='level1_" + id + "' class='menuItem selected'><span class='menuIcon'>&#xf00a;</span><span class='menuTxt'></span></a>");
            $("#FirstLevel").append(btn);
            btn.parent().sortable("refresh");
            $("#SecondLevel").children(".menuSet").hide();
            $("#ThirdLevel").children(".menuSet").hide();
            var div = $("<div  id='level1_set_" + id + "' class='menuSet'></div>");
            $("#SecondLevel").append(div);
            div.slide();
            makeHorizontalSortable(div);
            return btn;
        }
        function addSecondLevel() {
            var id = getUID(2);
            $("#SecondLevel").find(".menuItem").removeClass("selected");
            var btn = $("<div level='1' ondblclick='showProps(\"GROUP\",this)' onclick='showThirdLevel(this)' id='level2_" + id + "' class='menuItem selected'><span class='menuIcon'>&#xf00a;</span><span class='menuTxt'></span></div>");
            if (btnCurrInsert)
                btnCurrInsert.before(btn);
            else
                $("#SecondLevel").children(".menuSet:visible").append(btn);
            btn.parent().sortable("refresh");

            $("#ThirdLevel").children(".menuSet").hide();
            var div = $("<div id='level2_set_" + id + "' class='menuSet'></div>");
            div.sortable({ cancel: ".menuItemSet", stop: function (event, ui) { }, update: function (event, ui) { if (ui.item.prev().hasClass("menuItemGroup")) { $(this).sortable('cancel'); return }; ui.item.after($("#" + ui.item.attr("id").replace("_", "_set_"))); } });
            $("#ThirdLevel").append(div);
            return btn;
        }

        function addThirdLevelGrp() {
            var id = getUID(3);
            var btn = $("<span level='2' id='level3_" + id + "' ondblclick='showProps(\"ITEMGROUP\",this)'   class='menuItemGroup'><span class='menuTxt'></span></span>");
            var div = $("<div id='level3_set_" + id + "' class='menuItemSet'></div>");
            $("#ThirdLevel").children(".menuSet:visible").append(btn);
            btn.after(div);
            btn.parent().sortable("refresh");
            div.sortable({ connectWith: ".menuItemSet" });
            return btn;
        }
        function addThirdLevel() {
            var btn = $("<a level='3' ondblclick='showProps(\"ITEM\",this)'  href='javascript:void(0)' class='menuItem'><span class='menuTxt'></span></a>");
            if (btnCurrInsert) {
                if (btnCurrInsert.hasClass("menuItemGroup"))
                    btnCurrInsert.next().append(btn);
                else
                    btnCurrInsert.before(btn);
            }

            btn.parent().sortable("refresh");
            return btn;
        }



        var currFirstLevel = 0;
        function showSecondLevel(btn) {
            if (!btn)
                return;
            btn = $(btn);
            btn.parent().children(".menuItem").removeClass("selected");
            btn.addClass("selected");
            var id = btn.attr("id").replace("level1_", "");
            $("#ThirdLevel").children(".menuSet").hide();
            var mset = $("#SecondLevel").children(".menuSet").hide().filter("#level1_set_" + id).show();
            $("#lt2").hide(); $("#rt2").hide();
            if (mset.children().length > 0) {
                showThirdLevel(mset.node(0)[0]);
                mset.slide({ step: 120, movLeft: $("#lt2"), movRight: $("#rt2") });
            }
            else
                setSecondLevelTitle(null);
        }
        function showThirdLevel(btn) {
            if (!btn) {
                setSecondLevelTitle(null);
                return;
            }
            btn = $(btn);
            btn.parent().children(".menuItem").removeClass("selected");
            btn.addClass("selected");
            setSecondLevelTitle(btn);
            var id = btn.attr("id").replace("level2_", "");
            $("#ThirdLevel").children(".menuSet").hide().filter("#level2_set_" + id).show();
        }

        var deletedMenus = []
        function removeMenuItem(c) {
            c = $(c);
            var m = c.parent();
            if (!m.hasClass("menuItem") && !m.hasClass("menuItemGroup"))
                return;
            if (m.data("System") == true) {
                return;
            }
            var lvl = m.attr("level") / 1;
            msg = "Do you wish to delete this menu item?";
            if (lvl <= 2)
                msg += "\nAll child items of this menu will be deleted.";
            if (!confirm(msg))
                return;
            $("#ctrbtn").append($("#<%=btnClose.ClientID%>"));
            $("#ctrbtn").append($("#btnInsert"));

            if (lvl == 0) {
                var id = m.attr("id").replace("level1_", "");
                var mset = $("#level1_set_" + id);
                mset.children(".menuItem").each(function () { var a = $(this); var id1 = a.attr("id").replace("level2_", ""); $("#level2_set_" + id1).remove(); })
                mset.remove();
                setSecondLevelTitle(null)
            }
            else if (lvl == 1) {
                var id = m.attr("id").replace("level2_", "");
                var mset = $("#level2_set_" + id);
                mset.remove();
                window.setTimeout(function () { setSecondLevelTitle(null); }, 50);
            }
            else if (lvl == 2) {
                var mset = m.next();
                mset.remove();
            }
            var mset = m.closest(".menuSet");
            m.remove();
            if (lvl == 0)
                $("#FirstLevel").slide("refresh");
            else if (lvl == 1)
                mset.slide("refresh");
        }

        function setSecondLevelTitle(btn) {
            var t = (btn ? btn.find(".menuTxt").text() : "");
            t = (t == "" ? "&nbsp;" : t);
            var s = (btn ? $.defaultVal(btn.attr("style"), "") : "");
            var sl = $("#secondLevelTitle");
            sl.html(t);
            sl.attr("title", t);
            sl.attr("style", s);
            var colr = (s == "" ? "#00A079" : $.defaultVal(sl.css("background-color"), "#00A079"));

            if (!btn)
                $("#btnAdd3Ctr").hide();
            else
                $("#btnAdd3Ctr").show().find("A").css("color", colr);

        }
        var uidCtr = 1;
        function getUID(lvl) {
            while ($("#level" + lvl + "_" + uidCtr).exists() || $("#level" + lvl + "_set_" + uidCtr).exists())
                uidCtr++;
            return uidCtr;
        }

        function toggleTree(txt) {
            $(txt).next().show();
        }

        function setTitleText() {
            var txt = $("#<%=txtTitle.ClientID %>");
            var ddl = $("#<%=ddlApps.ClientID %>");
            var app = ddl.selectedItem().text();
            var found = false;
            ddl.children().each(function () {
                if ($(this).text().toLowerCase() == txt.val().toLowerCase()) {
                    found = true; return false;
                }
            });
            if (txt.val() == "" || found)
                txt.val(app);
        }
        function selectEntity(sender, args) {
            var t = $("#txtEntity");
            var n = args.get_node();
            if (n.get_level() < 2 && n.get_value() != "None")
                return;
            if (n.get_value() == "None") {
                t.val("");
                t.removeAttr("entityid");
            }
            else {
                t.val(n.get_text());
                t.attr("entityid", n.get_value());
            }
            $("#tvCtrEnt").hide();
        }
        function selectModule(sender, args) {
            var t = $("#txtModule");
            var n = args.get_node();
            if (n.get_level() < 1 && n.get_value() != "None")
                return;
            if (n.get_value() == "None") {
                lastModuleID = ""; lastModuleText = "";
                t.val("");
                t.removeAttr("moduleid");
            }
            else {
                t.val(n.get_text());
                t.attr("moduleid", n.get_value());
                lastModuleID = n.get_value(); lastModuleText = n.get_text();
            }
            $("#tvCtrMod").hide();
        }

        
        var arrNewMenus = [];
        var savingData = false;
        function SaveMenuStructure() {
            if (savingData) {
                alert("Server busy. Please try again.");
                return;
            }
            var data = new Object();
            data["Type"] = "SaveMenus";
            data["GlobalView"] =<%=GlobalView.ToString().ToLower()%>;
            data["@CompanyID"] =<%=CompanyID%>;
            arrNewMenus = [];
            var menus = createMenuStructure($("#FirstLevel"));
            savingData = true;
            $.Notify("Saving...");
            PageMethods.SaveStructure(data, menus, PageMethodSuccess, PageMethodError);
        }

        function createMenuStructure(div) {
            var ctr = 0;
            var arr = [];
            div.children().each(
               function () {
                   var a = $(this);
                   var m = {};
                   if (!a.hasClass("menuItem") && !a.hasClass("menuItemGroup"))
                       return true;
                   arr.push(m);
                   m.MenuID = $.defaultVal(a.data("MenuID"), "");
                   if (m.MenuID == "")
                       arrNewMenus.push(a.attr("id"));
                   m.HtmlID = a.attr("id");
                   m.MenuTitle = a.find(".menuTxt").text();
                   m.Tooltip = a.attr("title");
                   m.MenuAction = $("#ifrProps")[0].contentWindow.GetUrlXml(a.data("Action"));
                   m.AppID = $.defaultVal(a.data("App"), "");
                   m.ModuleID = $.defaultVal(a.data("Module"), "");
                   m.EntityID = $.defaultVal(a.data("Action")?a.data("Action").Entity:"", "");
                   m.MenuOrder = ctr++;
                   m.MenuLevel = a.attr("level") / 1;
                   m.Style =a.find(m.MenuLevel > 1?"i":".menuIcon").attr("style")
                   m.Readonly = $.defaultVal(a.data("Readonly"), false);
                   m.Deactivated = a.hasClass("deactivate") || parentDeactivated(a);
                   m.Override = $.defaultVal(a.data("Override"), false);
                   m.ResVersion = $.defaultVal(a.data("ResVersion"), 0);
                   m.Collapsed = a.data("Collapse")===true||a.data("Collapse")/1==1;
                   m.Break = a.data("Break")===true||a.data("Break")/1==1;
                   m.Visibility = $.defaultVal(a.data("Visibility"), 0);               
                   m.MenuStyle = $.defaultVal(a.data("MenuStyle"), "");              
                   m.CssClass = $.defaultVal(a.data("Css"), "");              
                   var ic=a.find(m.MenuLevel == 1||m.MenuLevel == 0 ?".menuIcon":"i");
                   m.IconType = (ic.find("svg,img").length>0?"svg":"font");
                   var newfont=ic.find("f1,f2,m1,m2").length>0;
                   if(m.MenuLevel == 1||m.MenuLevel == 0 )
                       m.IconData = (m.IconType=="svg"||newfont?ic.html():("&#x" + a.find(".menuIcon").html().charCodeAt(0).toString(16) + ";"));
                   else
                       m.IconData = (m.IconType=="svg"||newfont?ic.html():(!$.isEmpty(a.find("i").html()) ? ( "&#x" + a.find("i").html().charCodeAt(0).toString(16) + ";"):""));
                   if (m.MenuLevel <= 2)
                       m.ChildItems = createMenuStructure($("#" + a.attr("id").replace("_", "_set_")));
               }
               );
            return arr;
        }

        function SaveRights() {
            if (savingData) {
                alert("Server busy. Please try again.");
                return;
            }
            var data = new Object();
            data["Type"] = "SaveRights";
            data["@RoleID"] = $.QS("r");
            data["Recommended"] = $.defaultVal($.QS("_r"), "0");
            var arrVisibleMenus = [];
            savingData = true;
            $(".menuItem,.menuItemGroup").each(function () { var m = $(this); if (m.hasClass("deactivate") || parentDeactivated(m)) return true; else arrVisibleMenus.push(m.data("MenuID")); })
            $.Notify("Saving...");
            PageMethods.SaveRights(data, arrVisibleMenus, PageMethodSuccess, PageMethodError);
        }

        function PageMethodSuccess(data) {
            $.Notify(false);
            if (data["Success"] == false) {
                savingData = false;
                alert(data["ErrorMessage"]);
                return;
            }
            if (data["Type"] == "SaveMenus") {
                var newMenus = data["NewMenus"];
                for (var i = 0; i < arrNewMenus.length; i++) {
                    var guid = $.defaultVal(newMenus[arrNewMenus[i]], "");
                    $("#" + arrNewMenus[i]).data("MenuID", guid)
                }
                savingData = false;
                alert("Menu structure saved.");
            }
            else if (data["Type"] == "SaveRights") {
                savingData = false;
                alert("Menu settings saved.");
            }
        }
        function PageMethodError() {
            $.Notify(false);
            savingData = false;
        }
    </script>

</body>
</html>
