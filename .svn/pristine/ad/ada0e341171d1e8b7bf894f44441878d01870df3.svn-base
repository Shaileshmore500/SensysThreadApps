<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="CustomButtons_Add.aspx.cs" Inherits="SensysErp.Meta.CustomButtons_Add"
    ValidateRequest="false" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
  
    <script type="text/javascript">

        //window.title="title"
       
        var ActionData = {};
    </script>
    <style>
        #divActionButtons
        {
            margin-left: 150px;
            background: linear-gradient(to bottom, #F6F8F9 0%,#E5EBEE 50%,#D7DEE3 51%,#F5F7F9 100%);
            width: 240px;
            height: 130px;
            padding-top: 6px;
            padding-left: 20px;
            border: 1px solid;
            border-radius: 11px;
            overflow: auto;
        }

        

        .SpnIcon
        {
            font-family: fontawesome !important;
            display: block !important;
            line-height: 38px !important;
            font-size: 28px !important;
            font-weight: normal !important;
            height: 35px !important;
            width: 35px !important;
            color: #000;
            text-align: center !important;
            text-decoration: none !important;
            border: solid 1px #989898  !important;
        }

            .SpnIcon:hover
            {
                border: solid 1px red !important;
            }

        .gridBtn
        {
            display: inline-block;
            text-decoration: none;
            padding: 4px 8px;
            white-space: nowrap;
            font-family: Arial;
            font-size: 14px;
            min-width: 62px;
            margin-right: 3px;
            border: solid 1px #BEBEBE;
            border-radius: 5px;
            color: #000;
            background: #ffffff; /* Old browsers */
            background: -moz-linear-gradient(top, #ffffff 0%, #f1f1f1 50%, #e1e1e1 51%, #f6f6f6 100%); /* FF3.6+ */
            background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(50%,#f1f1f1), color-stop(51%,#e1e1e1), color-stop(100%,#f6f6f6)); /* Chrome,Safari4+ */
            background: -webkit-linear-gradient(top, #ffffff 0%,#f1f1f1 50%,#e1e1e1 51%,#f6f6f6 100%); /* Chrome10+,Safari5.1+ */
            background: -o-linear-gradient(top, #ffffff 0%,#f1f1f1 50%,#e1e1e1 51%,#f6f6f6 100%); /* Opera 11.10+ */
            background: -ms-linear-gradient(top, #ffffff 0%,#f1f1f1 50%,#e1e1e1 51%,#f6f6f6 100%); /* IE10+ */
            background: linear-gradient(to bottom, #ffffff 0%,#f1f1f1 50%,#e1e1e1 51%,#f6f6f6 100%); /* W3C */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#f6f6f6',GradientType=0 ); /* IE6-9 */
        }

        .divIcons
        {
            width: 550px;
            height: 510px;
            top: 150px;
            overflow: hidden;
        }

        .gridBtn .btnIcon
        {
            font-family: fontawesome;
            font-weight: normal;
            margin-right: 5px;
            font-size: 20px;
            line-height: 20px;
        }

        #tvCtrEnt
        {
            position: absolute;
            display: none;
            width: 224px;
            height: 295px;
            border: solid 2px #4D4C4C;
            border-radius: 5px;
            z-index: 10;
            box-shadow: 2px 2px 5px #555;
            overflow-y: auto;
        }

        .DarkTheme #tvCtrEnt
        {
            background-color: #4D4D4D;
            border: solid 2px #D6D6D6;
        }

        .DarkTheme .SpnIcon
        {
            color: #fff;
        }
        #divRpt
        {
            background-color: #FFF;
            border: solid 2px #9D9D9D;
            box-shadow: 2px 2px 7px #7B7B7B;
            position:absolute;
            height: 300px;
            width: 570px;
            display:none;
            z-index:3505;
        }
    </style>



</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
            <asp:Panel ID="divIcons" runat="server" CssClass="formSettings divIcons" Style="display: none;">
                <iframe frameborder="0" src="Icons.html" style="height: 100%; width: 100%"></iframe>
            </asp:Panel>
            <div class="div-form">
                <table class="table-form">
                    <tr>
                        <td class="td-label">

                            <span style="width: 90px" class="lbl">Title : </span></td>
                        <td class="td-value">
                            <telerik:RadTextBox ID="txtTitle" runat="server"></telerik:RadTextBox>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td class="td-label">

                            <span style="width: 90px" class="lbl">Tooltip : </span></td>
                        <td class="td-value">
                            <asp:TextBox ID="txtTooltip" CssClass="txt" TextMode="MultiLine" Rows="4" runat="server"></asp:TextBox>

                        </td>
                    </tr>
                    <tr>
                        <td class="td-label">

                            <span style="width: 90px" class="lbl">Hide button when screen is readonly : </span></td>
                        <td class="td-value">
                            <asp:CheckBox ID="chkReadonly" runat="server"></asp:CheckBox>
                        </td>
                    </tr>
                    <tr>
                        <td class="td-label">

                            <span style="width: 90px" class="lbl">Apply rights based on : </span></td>
                        <td class="td-value">
                           <asp:DropDownList ID="ddlRights" runat="server" >
                               <asp:ListItem Value="" Text="None"></asp:ListItem>
                               <asp:ListItem Value="Add" Text="Add"></asp:ListItem>
                               <asp:ListItem Value="Edit" Text="Edit"></asp:ListItem>
                               <asp:ListItem Value="Delete" Text="Delete"></asp:ListItem>
                               <asp:ListItem Value="ADD,EDIT" Text="Add or Edit"></asp:ListItem>
                                <asp:ListItem Value="ADD,EDIT,DELETE" Text="Add or Edit or Delete"></asp:ListItem>
                              <asp:ListItem Value="View" Text="View"></asp:ListItem>
                           </asp:DropDownList>
                        </td>
                    </tr>
                     <tr id="div2" style="margin-top: 5px;">
                        <td valign="middle" class="td-label">

                            <a href="javascript:void(0)"  onclick="showIconList()" class="default-link" style="margin-top: 11px;  display: inline-block;" >Choose Icon : </a></td>
                        <td class="td-value"><input maxlength="1" type="text" class="SpnIcon"
                            style="vertical-align: middle; display: inline-block"
                            id="spnIcon" runat="server" value="&#xf040;"/>
                        </td>
                    </tr>
                    <tr id="trResVersion" runat="server">
                        <td class="td-label">
                            <asp:Label ID="Label1" runat="server" Text="Resource Version"></asp:Label>
                        </td>
                        <td class="td-value">
                            <telerik:RadNumericTextBox ID="txtResVersion" runat="server"></telerik:RadNumericTextBox>
                        </td>
                    </tr>
                    <tr>
                        <td class="td-label" colspan="2">
                   <div id="divifrProps"><iframe id="ifrProps" src="UrlHelper.aspx?lod=1&cb=1" scrolling="no" frameborder="0" style="width:700px;height:375px"></iframe></div>
                    </td>
                    </tr>
                   
                     
                   


                </table>
                <div class="cmdPanel">
                    <asp:LinkButton ID="btnSubmit" CssClass="cmdBtn cmdSave" runat="server" Text="Save" OnClientClick="saveXmlData()" OnClick="btnSubmit_onClick"></asp:LinkButton>
                    <a href="javascript:void(0)" class="cmdBtn cmdClose" onclick="closeForm()">Cancel</a>
                </div>
                <asp:HiddenField ID="hdnEntityId" runat="server" />
                <asp:HiddenField ID="hdnAction" runat="server" />
            </div>
        </ContentTemplate>
    </asp:UpdatePanel>

    <style type="text/css">
        
    </style>

    <script type="text/javascript">
        var setOnload = 1;
        var IsCustomButton=true
        function pageLoad() {
           
        }
        
function showIconList() {
    $("#<%=divIcons.ClientID %>").ShowModal(4000).css("top", "100px");
    }

    
        $(document).on("click", function () { $("#tvCtrEnt").hide(); })

        function selectIcon(ico) {
            $("#<%=divIcons.ClientID %>").HideModal();
            $("#<%=spnIcon.ClientID%>").val(ico);          
            $("#<%=spnIcon.ClientID%>").focus();
        }
        

        function toggleTree(txt) {
            $(txt).next().show();
        }

        function saveXmlData() {
            var data = $("#ifrProps")[0].contentWindow.saveUrl();
            $("#<%=hdnEntityId.ClientID%>").val($.defaultVal(data.Entity, ""));
            $("#<%=hdnAction.ClientID%>").val($("#ifrProps")[0].contentWindow.GetUrlXml(data));
        }
        
    </script>
</asp:Content>
