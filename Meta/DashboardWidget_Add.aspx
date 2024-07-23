<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="DashboardWidget_Add.aspx.cs" Inherits="SensysErp.Meta.DashboardWidget_Add" ValidateRequest="false" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">


        window.ht = 500;
        window.wd = 600;


    </script>

    <style type="text/css">
        .app:before
        {
             font-family: fontawesome !important;
            content:"\f1b3";
        }

        .module:before
        {
            font-family: fontawesome !important;
            content: "\f1b2";
        }

        .ent:before
        {
            font-family: fontawesome !important;
            content: "\f1c0";
        }
        .ent
        {
                color: #004B80;
    font-weight: bold;
        }
         .module
        {
                   color: #008000;
    font-weight: bold;
        }
          .app
        {
                color: #800080;
    font-weight: bold;
        }
        .all
        {
            color: #614402;
    font-weight: bold;
        }
        .all:before
        {
            font-family: fontawesome !important;
            content: "\f0ae";
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


        .divIcons
        {
            width: 550px;
            height: 510px;
            top: 150px;
            overflow: hidden;
        }

        .DarkTheme .SpnIcon
        {
            color: #fff;
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
            border: solid 1px #989898 !important;
        }

            .SpnIcon:hover
            {
                border: solid 1px red !important;
            }

        #divAccord
        {
            width: 800px;
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

            <telerik:RadTabStrip ID="tabRightsInfo" runat="server" MultiPageID="RadMultiPageRights" Width="100%" Height="98%"
                SelectedIndex="0">
                <Tabs>
                    <telerik:RadTab Text="General" PageViewID="pvGeneral" Value="General">
                    </telerik:RadTab>
                    <telerik:RadTab Text="Setting" PageViewID="pvSetting" Value="Setting">
                    </telerik:RadTab>
                </Tabs>
            </telerik:RadTabStrip>

            <telerik:RadMultiPage ID="RadMultiPageRights" runat="server" SelectedIndex="0"
                Style="border: solid 1px #898C95 !important; margin-left: -1px !important; width: 100% !important;">
                <telerik:RadPageView ID="pvGeneral" runat="server" Height="800px">
                    <div class="div-form">
                        <div id="divAccord">
                            <h3>General</h3>
                            <div style="height: 200px;">
                                <table id="Table1" class="table-form" style="width: 510px;">

                                    <tr>
                                        <td class="td-label" style="width: 95px;">
                                            <asp:Label ID="lblTitle" runat="server" Text="Title"></asp:Label>
                                        </td>
                                        <td class="td-value">
                                            <asp:TextBox ID="txtTitle" runat="server" Width="150px" MaxLength="70">
                                            </asp:TextBox>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="td-label" style="width: 95px;">
                                            <asp:Label ID="lblDesc" runat="server" Text="Description"></asp:Label>
                                        </td>
                                        <td class="td-value">
                                            <asp:TextBox ID="txtDescription" runat="server" Width="200px" TextMode="MultiLine" Rows="3">
                                            </asp:TextBox>
                                        </td>
                                    </tr>

                                    <tr id="trResVersion" runat="server" style="width: 95px;">
                                        <td class="td-label">
                                            <asp:Label ID="Label3" runat="server" Text="Resource Version"></asp:Label>
                                        </td>
                                        <td class="td-value">
                                            <telerik:RadNumericTextBox ID="txtResVersion" runat="server"></telerik:RadNumericTextBox>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="td-label" style="width: 95px;">Is Deactivated</td>
                                        <td class="td-value">
                                            <asp:CheckBox ID="chkIsDeactivated" data-chk-on="yes" data-chk-off="no" runat="server"></asp:CheckBox>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="td-label" style="width: 95px;">
                                            <asp:Label ID="Label1" runat="server" Text="Application and Module"></asp:Label>
                                        </td>
                                        <td class="td-value">
                                            <telerik:RadDropDownTree Skin="Silk" ID="rddEntity" EnableFiltering="true" RenderMode="Lightweight" AutoPostBack="true" runat="server" Width="400px" OnClientDropDownClosing="OnClientDropDownClosing" OnClientEntryAdding="OnClientEntryAdding" DefaultValue="all" DefaultMessage="Select Entity" ExpandNodeOnSingleClick="true">
                                                <DropDownNodeTemplate>
                                                    <div class="<%# DataBinder.Eval(Container.DataItem, "cssStyle") %>">
                                                        <span>
                                                            <%# DataBinder.Eval(Container, "Text") %>
                                                        </span>
                                                    </div>
                                                </DropDownNodeTemplate>

                                                <FilterSettings Highlight="Matches" EmptyMessage="Type here to find" />
                                            </telerik:RadDropDownTree>
                                            <asp:HiddenField ID="hdnModuleID" runat="server" />
                                            <asp:HiddenField ID="hdnLevel" runat="server" />
                                        </td>
                                    </tr>

                                    <tr>

                                        <td class="td-label" style="width: 95px;">
                                            <asp:Label ID="lblcategory" runat="server" Text="Category"></asp:Label>
                                        </td>
                                        <td class="td-value">
                                            <telerik:RadComboBox ID="rcbCategory" runat="server" AllowCustomText="true">
                                                <Items>
                                                    <telerik:RadComboBoxItem Text="Data" Value="Data" />
                                                    <telerik:RadComboBoxItem Text="Chart" Value="Chart" />
                                                    <telerik:RadComboBoxItem Text="Productivity" Value="Productivity" />
                                                    <telerik:RadComboBoxItem Text="Other" Value="Other" />
                                                </Items>
                                            </telerik:RadComboBox>

                                        </td>
                                    </tr>
                                    <tr id="div2" style="margin-top: 5px;">
                                        <td valign="middle" class="td-label">

                                            <a href="javascript:void(0)" onclick="showIconList()" class="default-link" style="margin-top: 11px; display: inline-block;">Choose Icon : </a></td>
                                        <td class="td-value">
                                            <input maxlength="1" type="text" class="SpnIcon"
                                                style="vertical-align: middle; display: inline-block"
                                                id="spnIcon" runat="server" value="&#xf040;" />
                                        </td>
                                    </tr>

                                </table>
                            </div>
                            <h3>Setting</h3>
                            <div style="height: 200px;">
                                <table id="Table2" class="table-form" style="width: 510px;">


                                    <tr>
                                        <td class="td-label" style="width: 95px;">Not Resizable</td>
                                        <td class="td-value">
                                            <asp:CheckBox ID="chkResize" data-chk-on="yes" data-chk-off="no" runat="server"></asp:CheckBox>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="td-label" style="width: 95px;">Refresh On Resize</td>
                                        <td class="td-value">
                                            <asp:CheckBox ID="chkRefreshOnResize" data-chk-on="yes" data-chk-off="no" runat="server"></asp:CheckBox>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="td-label" style="width: 95px;">Maximize</td>
                                        <td class="td-value">
                                            <asp:CheckBox ID="chkMaximize" data-chk-on="yes" data-chk-off="no" runat="server" OnChange="IsMaximize();"></asp:CheckBox>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="td-label" style="width: 95px;">No Constraint</td>
                                        <td class="td-value">
                                            <asp:CheckBox ID="chkNoConstraint" data-chk-on="yes" data-chk-off="no" runat="server"></asp:CheckBox>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="td-label" style="width: 95px;">Refresh</td>
                                        <td class="td-value">
                                            <telerik:RadNumericTextBox ID="txtRefreshTime" runat="server"></telerik:RadNumericTextBox>
                                            <span>min </span>
                                        </td>
                                    </tr>

                                    <tr class="trHeight">
                                        <td class="td-label" style="width: 95px;">Height</td>
                                        <td class="td-value">
                                            <telerik:RadNumericTextBox ID="txtHeight" runat="server"></telerik:RadNumericTextBox>
                                            <span>px </span>
                                        </td>
                                    </tr>

                                    <tr class="trWidth">
                                        <td class="td-label" style="width: 95px;">Width</td>
                                        <td class="td-value">
                                            <telerik:RadNumericTextBox ID="txtWidth" runat="server"></telerik:RadNumericTextBox>
                                            <span>px </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="td-label" style="width: 95px;">Transparency</td>
                                        <td class="td-value">
                                            <telerik:RadComboBox ID="rcbTransparency" runat="server" Width="50px">
                                                <Items>
                                                    <telerik:RadComboBoxItem Text="0" Value="0" />
                                                    <telerik:RadComboBoxItem Text="1" Value="1" />
                                                    <telerik:RadComboBoxItem Text="2" Value="2" />
                                                </Items>
                                            </telerik:RadComboBox>

                                        </td>
                                    </tr>


                                </table>
                            </div>
                            <h3>Action</h3>
                            <div style="height: 200px;">

                                <div id="divifrProps">
                                    <iframe id="ifrProps" src="UrlHelper.aspx?lod=1" scrolling="no" frameborder="0" style="width: 700px; height: 375px"></iframe>
                                </div>
                            </div>

                        </div>

                    </div>
                </telerik:RadPageView>

                <telerik:RadPageView ID="pvRole" runat="server" Height="410px">
                    <iframe id="ifrmRole" style="height: 99%; width: 99%" runat="server"></iframe>
                </telerik:RadPageView>
                <telerik:RadPageView ID="pvSetting" runat="server" Height="700px">
                    <iframe id="ifrmSetting" style="height: 99%; width: 99%" runat="server"></iframe>
                </telerik:RadPageView>
            </telerik:RadMultiPage>

            <div>
                <asp:LinkButton ID="btnSubmit" CssClass="cmdBtn cmdSave" runat="server" Text="Submit" OnClientClick=" return saveData()"></asp:LinkButton>
                <asp:LinkButton ID="btnClose" class="cmdBtn cmdClose" runat="server" Text="Cancel" OnClientClick="closeForm();"></asp:LinkButton>
            </div>

            <asp:HiddenField ID="hdnAction" runat="server" />
        </ContentTemplate>
    </asp:UpdatePanel>
    <style>
        .ui-state-active, .ui-widget-content .ui-state-active, .ui-widget-header .ui-state-active {
            border: none;
            background: #dddddd;
        }

    </style>
    <script type="text/javascript">
        $(function () {
            var source = [];
            for (var x = 1; x <= 15; x++) {
                source.push({
                    value:
                        (x * 20 +
                        (x - 1) * (25)).toString(), label: x + " unit = " + (x * 20 +
                        (x - 1) * (25)).toString()
                });
            }
            $("#<%=txtHeight.ClientID%>").autocomplete({
                source: source,
                minLength: 0
            }).on("click", function () { $("#<%=txtHeight.ClientID%>").autocomplete("search", ""); });
            $("#<%=txtWidth.ClientID%>").autocomplete({
                source: source,
                minLength: 0
            }).on("click", function () { $("#<%=txtWidth.ClientID%>").autocomplete("search", ""); });
        });

        function pageLoad() {
            $("#<%=chkIsDeactivated.ClientID%>").CheckBoxX();
            $("#<%=chkResize.ClientID%>").CheckBoxX();
            $("#<%=chkRefreshOnResize.ClientID%>").CheckBoxX();
            $("#<%=chkMaximize.ClientID%>").CheckBoxX();
            $("#<%=chkNoConstraint.ClientID%>").CheckBoxX();

            IsMaximize();
        }

        function CloseWindow() {
            window.parent.ParentCloseWindow();
            return false;
        }


        function RefreshParent() {
            window.parent.RefreshParentGrid();
            return false;
        }




        function saveData() {


            var data = new Object();
            data["Type"] = "SaveWidget";



            var widget = "";
            var icon = "";
            var resizable = "";
            var refreshonresize = "";
            var refreshtime = "";
            var height = "";
            var width = "";
            var transparency = "";
            var maximize = "";
            var NoConstraint = "";

            icon = $("#<%=spnIcon.ClientID%>").val();
            resizable = $("#<%=chkResize.ClientID%>").checked() ? "1" : "0";
            refreshonresize = $("#<%=chkRefreshOnResize.ClientID%>").checked() ? "1" : "0";
            refreshtime = $find("<%=txtRefreshTime.ClientID%>").get_value();
            height = $find("<%=txtHeight.ClientID%>").get_value();
            width = $find("<%=txtWidth.ClientID%>").get_value();
            transparency = $find("<%=rcbTransparency.ClientID%>").get_value();
            maximize = $("#<%=chkMaximize.ClientID%>").checked() ? "1" : "0";
            NoConstraint = $("#<%=chkNoConstraint.ClientID%>").checked() ? "1" : "0";

            widget = "<Widget Icon=\"" + icon + "\" NotResizable=\"" + resizable + "\" RefreshTime=\"" + refreshtime + "\" RefreshOnResize=\"" + refreshonresize + "\" Height=\"" + height + "\" Width=\"" + width + "\" Transparency=\"" + transparency + "\" Maximize=\"" + maximize + "\" NoConstraint=\"" + NoConstraint + "\" >";
            //alert(widget)

            var dataxml = $("#ifrProps")[0].contentWindow.saveUrl();
            $("#<%=hdnAction.ClientID%>").val($("#ifrProps")[0].contentWindow.GetUrlXml(dataxml));
            var action = $("#ifrProps")[0].contentWindow.GetUrlXml(dataxml);


            var SettingData = $("#<%= ifrmSetting.ClientID%>")[0].contentWindow.getSettingXmlValue();




            data["@WidgetTitle"] = $("#<%=txtTitle.ClientID%>").val();
            data["@WidgetDescription"] = $("#<%=txtDescription.ClientID%>").val();
            data["@IsDeactivated"] = $("#<%=chkIsDeactivated.ClientID%>").checked();
            data["@WidgetAction"] = widget + action + SettingData + "</Widget>";
            data["@Widget_pid"] = WidgetID;
            data["@ResourceVersion"] = $.defaultVal($("#<%= txtResVersion.ClientID%>").val(), 0);
            data["@Category"] = $find("<%=rcbCategory.ClientID %>").get_text();
            //data["@Application_Fid"] = rcbApplication ;
            //data["@Module_Fid"] = $("#<%=hdnModuleID.ClientID%>").val();

            if ($("#<%=hdnLevel.ClientID%>").val() == "app") {
                data["@Application_Fid"] = $("#<%=hdnModuleID.ClientID%>").val();
                data["@Module_Fid"] = "";
            } else if ($("#<%=hdnLevel.ClientID%>").val() == "module") {
                data["@Module_Fid"] = $("#<%=hdnModuleID.ClientID%>").val();
                data["@Application_Fid"] = "";
            }
            else {
                data["@Module_Fid"] = "";
                data["@Application_Fid"] = "";
            }

        $.Notify("Saving");
        data["au"] = $.QS("_au");
        PageMethods.Execute(data, PageMethodSuccess, PageMethodError);


        return false;
    }

    function PageMethodSuccess(data) {
        WidgetID = data["@Widget_pid"];
        $.Notify(false);

    }
    function PageMethodError(error) {
        $.Notify({ Message: "Error Occured.", NotifyOnly: true });
    }



    </script>

    <script type="text/javascript">

        var ajx = Sys.WebForms.PageRequestManager.getInstance();
        ajx.add_pageLoaded(function () {
            if (typeof MDI != "undefined") {
                //Add user code here
                //alert("load "+MDI.id );             
            }
        })

        ajx.add_endRequest(function () {
            if (typeof MDI != "undefined") {
                //Add user code here
                //alert("load "+MDI.id );   
                CloseWindow();
            }
        })
    </script>

    <script type="text/javascript">

        $(document).on("click", function () { $("#tvCtrMod").hide(); })
        $("#tvCtrMod").on("click", function (e) { e.stopPropagation(); });


        function toggleTree(txt) {
            $(txt).next().show();
        }

        function showIconList() {
            $("#<%=divIcons.ClientID %>").ShowModal(4000).css("top", "100px");
         }

         function selectIcon(ico) {
             $("#<%=divIcons.ClientID %>").HideModal();
             $("#<%=spnIcon.ClientID%>").val(ico);
             $("#<%=spnIcon.ClientID%>").focus();
         }



         function IsMaximize() {
             var chkMax = $("#<%=chkMaximize.ClientID%>");
             $(".trWidth").setDisplay(!$(chkMax).checked());
             $(".trHeight").setDisplay(!$(chkMax).checked());
         }

         $(function () {
             $("#divAccord").accordion();
         });

         function OnClientEntryAdding(sender, eventArgs) {
             if (eventArgs.get_node().get_level() == 0) {
                 $("#<%=hdnModuleID.ClientID%>").val(eventArgs.get_entry().get_value());
                 $("#<%=hdnLevel.ClientID%>").val('app');
             }
             else if (eventArgs.get_node().get_level() == 1) {
                 $("#<%=hdnModuleID.ClientID%>").val(eventArgs.get_entry().get_value());
                $("#<%=hdnLevel.ClientID%>").val('module');
            }
             $find("<%=rddEntity.ClientID%>").closeDropDown();
         }
        function OnClientDropDownClosing(sender, args) {
                sender._autoPostback = false;
        }
    </script>

    <style type="text/css">
        
         
    </style>


</asp:Content>


