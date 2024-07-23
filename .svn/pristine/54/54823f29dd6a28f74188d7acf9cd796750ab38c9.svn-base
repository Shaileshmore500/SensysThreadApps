<%@ Page Language="C#" AutoEventWireup="true"
    CodeBehind="Config.aspx.cs" Inherits="SensysErp.Meta.Config" Title="Configuration" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">

      <%# HelperLib.Web.WebResources.GetResource("~/fonts/font.css")%>
        <%# HelperLib.Web.WebResources.GetResource("~/css/CustomControl/CustomControl.css")%>
        <%# HelperLib.Web.WebResources.GetResource("~/Css/Grey/jquery-ui-1.10.3.custom.css")%>
    
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/System.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery-ui-1.10.3.custom.min.js")%>

    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jqHelper.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/UiHelper.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/ui.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/PageLoader.js")%>
     <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CustomControls.js")%>
 
    <script type="text/javascript">

        var Usr = null, Pwd = null, DbPwd = null, DbUsr = null, DB = null, DatabaseName = null, Server = null;
        var DataChanged = false;
        document.documentElement.style.overflowX = "hidden"
        document.documentElement.style.overflowY = "hidden"

        var ServerData = [];
        var ArrServerData = [];
    </script>
    <style type="text/css">

      

        TD
        {
            padding: 0px;
            margin: 0px;
        }

        #PopUpAddDB
        {
              background-color:#e6ecff;
             display:none;	
             position: fixed; 	
             left: 805px; 	
             z-index: 3500; 	
             top: 606px; 	
             border: solid 3px #809fff; 
             border-radius: 8px; 	
             box-shadow: 2px 2px 5px #525252; 	
             padding: 20px; 	
             font-family:Verdana;
            font-size:13px;
        }

        .cmpspan
        {
            color:red;
            
        }
        #pnlConfig
        {
            font-family:Verdana;
            font-size:13px;
           
        }

        #Admin,#DatabaseConn,#ManageDB,#Setting
        {
            height: 330px;
            border: 1px solid #809fff;
            border-radius: 0px 0px 5px 5px;
            position: relative;
            color:#001a66;
            padding: 10px;
    
        }

        

             .ui-autocomplete
        {
            z-index: 9999 !important;
            font-size: 12px;
        }
            .ui-autocomplete.ui-menu .ui-menu-item div
            {
                color: #1a1ad0;
            }

            .RadGrid .rgRow {
    cursor: default;
    background-color:#e6e6e6;
}

        
    </style>

</head>
<body>
     <%= HelperLib.Web.WebResources.GetResource("~/Css/base.css")%>
    <%= HelperLib.Web.WebResources.GetResource("~/Css/form.css")%>
    <form id="form1" runat="server">

      
        <asp:ScriptManager ID="ScriptManager1" EnablePageMethods="true" runat="server">
        </asp:ScriptManager>

        <asp:UpdatePanel ID="UpdatePanel1" runat="server">

            <ContentTemplate>
                <hlp:ActionMessage ID="ActionMessage1" runat="server" />
                <div style="padding: 10px; margin-left: 10px">
                    <asp:Panel ID="pnlConfig" runat="server">
                        

                        <div style="height: 360px; width: 100%; overflow-y: auto">
                           <telerik:RadTabStrip ID="tabConfig" runat="server" MultiPageID="MultiAccessPage" >
                    <Tabs>
                        <telerik:RadTab runat="server" PageViewID="Admin" Text="Administration" Selected="true" ></telerik:RadTab>
                        <telerik:RadTab runat="server" PageViewID="DatabaseConn" Text="Database Connection"></telerik:RadTab>
                        <telerik:RadTab runat="server" PageViewID="ManageDB" Text="Manage Database" Enabled="false" ></telerik:RadTab>
                        <telerik:RadTab runat="server" PageViewID="Setting" Text="Setting" Enabled="false" ></telerik:RadTab>

                    </Tabs>
                </telerik:RadTabStrip>
                              <telerik:RadMultiPage ID="MultiAccessPage" runat="server" SelectedIndex="0">
                                     <telerik:RadPageView ID="Admin" runat="server">
                                      <%--   <asp:Panel ID="pnlAdmin" Width="100%" GroupingText="Administration" runat="server" Height="100%" >--%>
                            <table cellpadding="1" cellspacing="1" class="table-form">
                                <tr>
                                    <td style="height: 24px; width: 100px" class="td-label">
                                        <asp:Label ID="lblProxyAddress" runat="server" Style="position: static" Text="Proxy Address"></asp:Label>
                                    </td>
                                    <td style="height: 24px" class="td-label">
                                        <nobr>
                                    <asp:TextBox ID="txtProxy" runat="server" Style="position: static" Width="81px"></asp:TextBox>
                                    &nbsp;
                                    <asp:Label ID="lblPort" runat="server" Style="position: static" Text="Port"></asp:Label>
                                    &nbsp;
                                    <asp:TextBox ID="txtPort" runat="server" Style="position: static" Width="43px"></asp:TextBox>
                               </nobr>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="lblLoginSetting" runat="server" Text="Change login authentication settings"></asp:Label>
                                    </td>
                                    <td class="td-value">
                                        <asp:CheckBox ID="chkLoginSettings"  CssClass="chkX td-label" runat="server" />
                                    </td>
                                </tr>
                                <tr id="trLoginUName" runat="server">
                                    <td class="td-label">
                                        <asp:Label ID="lblLoginUsername" runat="server" Style="position: static" Text="Login Username"></asp:Label>
                                        <span class="cmpspan">*</span>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtLoginUsername" runat="server" Style="position: static" Width="170px"></asp:TextBox>
                                    </td>
                                </tr>
                                <tr id="trLoginPWD" runat="server">
                                    <td class="td-label">
                                        <asp:Label ID="lblLoginPassword" runat="server" Style="position: static" Text="Login Password"></asp:Label>
                                        <span class="cmpspan">*</span>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtLoginPassword" runat="server" Style="position: static" TextMode="Password"
                                            Width="170px"></asp:TextBox>
                                    </td>
                                </tr>
                                <tr id="trLoginConfirmPWD" runat="server">
                                    <td class="td-label">
                                        <nobr> <asp:Label ID="Label1" runat="server" Style="position: static" Text="Confirm Login Password"></asp:Label>
                                            <span class="cmpspan">*</span>
                                        </nobr>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtConfirmLoginPassword" runat="server" Style="position: static"
                                            TextMode="Password" Width="170px"></asp:TextBox>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" style="display: none" class="td-label">
                                        <asp:LinkButton ID="LinkButton1" runat="server" SkinID="dgLinkButton" OnClick="LinkButton1_Click">Register Dll</asp:LinkButton>
                                    </td>
                                </tr>
                            </table>
                        <%--</asp:Panel>--%>

                                     </telerik:RadPageView>
                                    <telerik:RadPageView ID="DatabaseConn" runat="server">
                                   <%--     <asp:Panel ID="pnlDB" Width="100%" GroupingText="Database Settings" runat="server" >--%>
                            <table cellpadding="1" cellspacing="1" class="table-form">
                            
                                <tr>
                                    <td class="td-label">
                                        <asp:Label ID="lblServerName" runat="server" Style="position: static" Text="Database Server"></asp:Label>
                                        <span class="cmpspan">*</span>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtServer"  runat="server" Style="position: static"  Width="250px" ></asp:TextBox>
                                    </td>
                                </tr>
                               <%-- <tr>
                                    <td>
                                        <asp:Label ID="lblDBName" runat="server" Style="position: static" Text="Database Name*"></asp:Label>
                                    </td>
                                    <td>
                                        <asp:TextBox ID="txtDatabaseName" runat="server"></asp:TextBox>
                                    </td>
                                </tr>--%>
                                <tr>

                                    <td colspan="2" class="td-label" >
                                        <asp:CheckBox ID="chkIntegrated"  CssClass="chkX td-label" Text="Integrated" Style="display: block" runat="server" onclick="return CheckIntegrated(this);" />
                                    </td>
                                </tr>
                                <tr id="trChangeDatabase" >
                                    <td colspan="2" class="td-label">
                                        <asp:CheckBox ID="chkDatabaseSetting" CssClass="chkX td-label" runat="server" Text="Change Database authentication settings"
                                            TextAlign="Right" />
                                    </td>
                                </tr>
                                <tr id="trDatabaseUName">
                                    <td class="td-label">
                                        <asp:Label ID="lblDBUsername" runat="server" Style="position: static" Text="Database Username"></asp:Label>
                                        <span class="cmpspan">*</span>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtUser" runat="server" Style="position: static" Width="170px"></asp:TextBox>
                                    </td>
                                </tr>
                                <tr id="trDatabasePWD">
                                    <td class="td-label">
                                        <asp:Label ID="lblDBPwd" runat="server" Style="position: static" Text="Database Password"></asp:Label>
                                        <span class="cmpspan">*</span>
                                    </td>
                                    <td class="td-value">
                                        <asp:TextBox ID="txtPwd" runat="server" Style="position: static" TextMode="Password"
                                            Width="170px"></asp:TextBox>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" class="td-label">
                                        <asp:CheckBox ID="chkRememberConnection" CssClass="chkX td-label" runat="server" Text="Remember Connection" />

                                    </td>
                                </tr>
                            </table>
                           <%-- <asp:CheckBox ID="chkCreate" Text="Create Database if it doesnt exist" Style="display: block" runat="server" />--%>
                           
                            <asp:LinkButton ID="btnTest" Style="position: absolute;bottom: 10px;right: 10px;" CssClass="mdl-button small BlueButton"  runat="server" OnClick="btnTest_Click" Text="Test Connection" ></asp:LinkButton>
                       <%-- </asp:Panel>--%>

                                    </telerik:RadPageView>
                                    <telerik:RadPageView ID="ManageDB" runat="server">
                                        <table>
                                            <tr>
                                                <td>
                                                    <div style="height:30px;margin-top:5px">
                                                    <asp:Label ID="lblKey" runat="server" Text="SoftwareKey"></asp:Label>
                                                    <telerik:RadComboBox ID="rcbSoftwareKey" runat="server" AutoPostBack="true" OnSelectedIndexChanged="rcbSoftwareKey_SelectedIndexChanged" Width="200px"></telerik:RadComboBox>
                                                    <asp:LinkButton ID="btnAddKey" CssClass="mdl-button BlueColor" runat="server" Text="Add" OnClientClick="return AddDataBase('AddKey');" ></asp:LinkButton>
                                                    <asp:LinkButton ID="btnEditKey" CssClass="mdl-button BlueColor" runat="server" Text="Edit" OnClientClick="return AddDataBase('EditKey');" ></asp:LinkButton>
                                                     </div>
                                                </td>
                                              </tr>
                                            <tr>
                                                <td>
                                                    <div style="height:30px;margin-top:5px">
                                                    <asp:LinkButton ID="btnAddDB" runat="server" CssClass="mdl-button small BlueButton"  Text="Register New Database" OnClientClick="return AddDataBase('New');" ></asp:LinkButton>
                                                    <asp:LinkButton ID="btnAddExistDB" runat="server" CssClass="mdl-button small BlueButton"  Text="Register Existing Database" OnClientClick="return AddDataBase('Exist');" ></asp:LinkButton>
                                                   </div>
                                                </td>
                                            </tr>
                                        </table>
                                        <div id="PopUpAddDB" style="display:none">
                                            <table class="table-form" >
                                                <tr id="trDbName">
                                                    <td class="td-label" > <asp:Label ID="lblDbName" runat="server" Text="DB Name"></asp:Label>
                                                        <span class="cmpspan">*</span>
                                                    </td>
                                                    <td class="td-value"> <asp:TextBox ID="txtDbName" runat="server"></asp:TextBox></td>
                                                </tr>
                                                <tr id="trDisplayName">
                                                    <td class="td-label" > <asp:Label ID="lblDisplayName" runat="server" Text="Display Name"></asp:Label>
                                                         <span class="cmpspan">*</span>
                                                    </td>
                                                    <td class="td-value"> <asp:TextBox ID="txtDisplayName" runat="server"></asp:TextBox></td>
                                                </tr>
                                                <tr style="display:none">
                                                   <td colspan="2" class="td-label" >
                                                       <asp:CheckBox ID="chkCreateCompany" Checked="true" runat="server" Text="Create Default Company"  onclick="return CheckCreateCompany(this)"/>
                                                   </td>
                                                </tr>
                                                <tr id="trCompanyCode" style="display:none">
                                                    <td class="td-label" > <asp:Label ID="lblCompanyCode" runat="server" Text="Company Code"></asp:Label>
                                                         <span class="cmpspan">*</span>
                                                    </td>
                                                    <td class="td-value"> <asp:TextBox ID="txtCompanyCode" runat="server"></asp:TextBox></td>
                                                </tr>
                                                <tr id="trCompanyName" style="display:none">
                                                    <td class="td-label" > <asp:Label ID="lblCompanyName" runat="server" Text="Company Name"></asp:Label>
                                                         <span class="cmpspan">*</span>
                                                    </td>
                                                    <td class="td-value"> <asp:TextBox ID="txtCompanyName" runat="server"></asp:TextBox></td>
                                                </tr>
                                                <tr id="tdCreateDemo" style="display:none">
                                                    <td></td>
                                                    <td class="td-label" > <asp:CheckBox ID="chkCreateDemoData" runat="server" Text="Create Demo Data"/></td>
                                                </tr>
                                                <tr id="trKey" style="display:none">
                                                    <td class="td-label" > <asp:Label ID="lblSoftwarekey" runat="server" Text="Software Key"></asp:Label>
                                                         <span class="cmpspan">*</span>
                                                    </td>
                                                    <td class="td-value"> <asp:TextBox ID="txtSoftwareKey" runat="server"></asp:TextBox></td>
                                                </tr>
                                                <tr id="trkeyAct" style="display:none">
                                                      <td></td>
                                                    <td class="td-label" > <asp:CheckBox ID="chkKeyActivated" runat="server" Text="Activated"/></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>
                                                        <asp:Button ID="btnAdd" runat="server" Text="Add" CssClass="mdl-button small GreenButton" OnClick="btnAdd_Click" OnClientClick="return validateForm();" />
                                                        <asp:Button ID="btnAddCancel" runat="server" CssClass="mdl-button small RedButton" Text="Cancel" OnClientClick="return CloseModel();" />
                                                     </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div id="divgrid" style="width:100%;">
                                            <telerik:RadGrid ID="dgData" runat="server" AllowPaging="false" SkinID="Default"
                                                 AutoGenerateColumns="False" GridLines="None" AllowFilteringByColumn="false"
                                                Height="200px"  OnNeedDataSource="dgData_NeedDataSource"  Skin="Vista" >
                                                <PagerStyle Mode="NextPrevAndNumeric" PageButtonCount="5" PagerTextFormat="Change page: {4} &amp;nbsp;({0}/{1})&amp;nbsp;&amp;nbsp;Total records : {5}" />
                                                <MasterTableView  CommandItemDisplay="None"
                                                    TableLayout="Fixed" >
                                                    <RowIndicatorColumn Visible="false">
                                                        <HeaderStyle Width="20px" />
                                                    </RowIndicatorColumn>
                                                    <ExpandCollapseColumn>
                                                        <HeaderStyle Width="20px" />
                                                    </ExpandCollapseColumn>
                                                    <Columns>
                                                        <telerik:GridBoundColumn DataField="DisplayName" HeaderText="Display Name"
                                                            UniqueName="DisplayName">
                                                        </telerik:GridBoundColumn>
                                                        <telerik:GridBoundColumn DataField="DbName" HeaderText="DataBase Name"
                                                            UniqueName="DbName">
                                                        </telerik:GridBoundColumn>
                                                        
                                                        <telerik:GridTemplateColumn HeaderText="Action">
                                                          <ItemTemplate>
                                                              <asp:LinkButton ID="lnkbtnDelete" runat="server" Text="delete" OnClick="lnkbtnDelete_Click" OnClientClick="return confirm('confirm deletion?');"  CommandArgument='<%# Eval("DbName") %>'  />
                                                           </ItemTemplate>
                                                        </telerik:GridTemplateColumn>
                                                            <telerik:GridTemplateColumn Visible="false" HeaderText="Action">
                                                          <ItemTemplate>
                                                              <asp:LinkButton ID="lnkbtnBackup" runat="server" Text="backup" CommandArgument='<%# Eval("DbName") %>' />
                                                           </ItemTemplate>
                                                        </telerik:GridTemplateColumn>
                                                            <telerik:GridTemplateColumn Visible="false" HeaderText="Action">
                                                          <ItemTemplate>
                                                              <asp:LinkButton ID="lnkbtnClone" runat="server" Text="Clone" CommandArgument='<%# Eval("DbName") %>' OnClientClick="return AddClone();" />
                                                           </ItemTemplate>
                                                        </telerik:GridTemplateColumn>
                                                            <telerik:GridTemplateColumn HeaderText="Action">
                                                          <ItemTemplate>
                                                              <asp:LinkButton ID="lnkbtnVerify" runat="server" ToolTip='<%# Eval("DbName") %>' Text="Verify" CommandArgument='<%# Eval("DbName") %>' OnClientClick="return VerifyDatabase(this);" />
                                                           </ItemTemplate>
                                                        </telerik:GridTemplateColumn>
                                                    </Columns>
                                                </MasterTableView>
                                                <ClientSettings AllowDragToGroup="True" AllowGroupExpandCollapse="False" AllowKeyboardNavigation="True">
                                                    <Selecting AllowRowSelect="True" />
                                                    <ClientEvents />
                                                    <Scrolling AllowScroll="True" ScrollHeight="180px" UseStaticHeaders="True" />
                                                    <Resizing AllowColumnResize="True" />
                                                </ClientSettings>
                                            </telerik:RadGrid>

                                        </div>

                                    </telerik:RadPageView>
                                    <telerik:RadPageView ID="Setting" runat="server">
                                        <table class="table-form">
                                            <tr>
                                                <td class="td-label">
                                                    <asp:Label ID="lblApplicationUrl" Width="230px" runat="server" Text="Application URL"></asp:Label>
                                                </td>
                                                <td class="td-value">
                                                    <asp:TextBox ID="txtApplicationUrl" runat="server" Width="200px"></asp:TextBox>
                                                </td>
                                            </tr>
                                             <tr>
                                                <td class="td-label">
                                                    <asp:Label ID="lblEnableFileStream" Width="230px" runat="server" Text="Enable File Stream"></asp:Label>
                                                </td>
                                                <td class="td-value">
                                                    <asp:CheckBox ID="chkEnableFileStream" runat="server" CssClass="chkX td-label" onChange="return CheckFileStream(this);" />
                                                    <span class="infoIcon" style="font-size:14px;vertical-align: middle;" title="Show Details" onclick="$(this).next().stop().slideToggle('slow')"></span>
                                                    <ol style="display:none;border: solid 1px #c7c7c7;font-size: 12px;font-family: nunitoregular;" >
                                                    <li>Open SQL Server Configuration Manager</li>
                                                        <li>Right click on the SQL Server Service (instance name) and click Properties.</li>
                                                        <li>In the SQL Server Properties dialog box, click the FILESTREAM tab and enable FILESTREAM</li>
                                                        <li>Enter the following command in tsql<br /><div style="font-size: 12px;color: #1212ff;margin-left: 20px;">EXEC sp_configure filestream_access_level, 2<br />RECONFIGURE</div> </li>
                                                    </ol>
                                                </td>
                                            </tr>
                                             <tr id="trFileGroupName"  style="display:none">
                                                <td class="td-label">
                                                    <asp:Label ID="lblFileGroupName" Width="230px" runat="server" Text="File Stream Group Name"></asp:Label>
                                                </td>
                                                <td class="td-value">
                                                    <asp:TextBox ID="txtFileGroupName" Text="ThreadErpFileStream" runat="server" Width="200px"></asp:TextBox>
                                                </td>
                                            </tr>
                                             <tr>
                                                <td class="td-label">
                                                    <asp:Label ID="lblEnableWindowService" Width="230px" runat="server" Text="Enable Window Service"></asp:Label>
                                                </td>
                                                <td class="td-value">
                                                    <asp:CheckBox ID="chkEnableWindowService" CssClass="chkX td-label" runat="server" />
                                                </td>
                                            </tr>
                                             <tr>
                                                <td class="td-label">
                                                    <asp:Label ID="lblEnableUTCforWindowservice" Width="230px" runat="server" Text="Enable UTC for Window Service"></asp:Label>
                                                </td>
                                                <td class="td-value">
                                                    <asp:CheckBox ID="chkEnableUTCforWindowservice"  CssClass="chkX td-label" runat="server" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td-label">
                                                    <asp:Label ID="lblEnableUTCforApplication" Width="230px" runat="server" Text="Enable UTC for Application"></asp:Label>
                                                </td>
                                                <td class="td-value">
                                                    <asp:CheckBox ID="chkEnableUTCforApplcation" CssClass="chkX td-label" runat="server" />
                                                </td>
                                            </tr>
                                            

                                        </table>
                                    </telerik:RadPageView>
                              </telerik:RadMultiPage>

                            </div>

                        <div id="btnPanel" style="text-align:right">
                               <a class="mdl-button RedButton undoIcon" style="float:left" onclick="restartApp(this)" href="javascript:void(0)">Restart Application</a>
                               <asp:LinkButton ID="btnSubmit" runat="server" CssClass="mdl-button GreenButton saveIcon" OnClick="btnSubmit_Click" Text="Save Settings" ></asp:LinkButton>
                               <asp:LinkButton ID="btnCancel" runat="server"  CssClass="mdl-button RedButton closeIcon" Text="Close" Style="margin-left:2px" ></asp:LinkButton>

                         
                            <input id="hdnClose" runat="server" style="width: 31px" type="hidden" />
                            <input id="hdnAddType" runat="server" style="width: 31px" type="hidden" />
                            <input id="hdnPassword" runat="server" type="hidden" />
                        </div>

                    </asp:Panel>
                    <asp:Panel ID="pnlError" runat="server">
                         <h2>Enter Username and Password</h2>
                        <table  class="table-form">
                          
                            <tr>
                                <td class="td-label">
                                    <asp:Label ID="Label8" runat="server" Style="font-size: 15px;" Text="Username"></asp:Label>
                                </td>
                                <td  class="table-value">
                                    <asp:TextBox ID="txtSysUser" runat="server"  Width="81px"></asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td class="td-label">
                                    <asp:Label ID="Label9" runat="server" Style="font-size: 15px;" Text="Password"></asp:Label>
                                </td>
                                <td class="table-value">
                                    <asp:TextBox ID="txtSysPwd" runat="server"  TextMode="Password"
                                        Width="81px"></asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td >
                                    <asp:LinkButton ID="btnLog" runat="server" OnClick="btnLog_Click" Text="Submit" CssClass="mdl-button GreenButton enterIcon" ></asp:LinkButton>
                                </td>
                            </tr>
                        </table>
                    </asp:Panel>
                </div>
            </ContentTemplate>
        </asp:UpdatePanel>
    </form>
    <script type="text/javascript">

        window.ht = "200";
        window.wd = "600";

        var txtUsr = document.getElementById("<%=txtLoginUsername.ClientID%>");
	    var txtPwd = document.getElementById("<%=txtLoginPassword.ClientID%>");
        var txtConf = document.getElementById("<%=txtConfirmLoginPassword.ClientID%>");
        var chkLog = document.getElementById("<%=chkLoginSettings.ClientID%>");
        var chkDb = document.getElementById("<%=chkDatabaseSetting.ClientID%>");
        var txtDbPwd = document.getElementById("<%=txtPwd.ClientID%>");
        var txtDbUsr = document.getElementById("<%=txtUser.ClientID%>");
        
        var txtServer = document.getElementById("<%=txtServer.ClientID%>");

        function LoadData(ui) {
            var count = ServerData.length;
            var txtservername = ui.item.value;
            for (i = 0; i < count; i++) {
                if (ServerData[i].Name == txtservername) {
                    $("#<%=txtUser.ClientID%>").val(ServerData[i].Username);
                    $("#<%=txtPwd.ClientID%>").val(ServerData[i].Password); 
                    break;
                }  
            }
        }



       
        function pageLoad() {
            

            //var count = ServerData.length;
           // var strserver="";
          //  for (i = 0; i < count; i++) {

              //  strserver += " \"" + ServerData[i].Name + " \"";
              //  if (i != count - 1)
               //     strserver += ",";
                   
                
            //}
            //strserver = "[" + strserver + "]";
           
            
            //var ArrServerData = strserver;
            // alert(ArrServerData);

          

           
                //attach with the id od deductions
           
            
            $('#<%=chkEnableFileStream.ClientID%>, #<%=chkEnableWindowService.ClientID%>, #<%=chkEnableUTCforApplcation.ClientID%>,#<%=chkEnableUTCforWindowservice.ClientID%>,#<%=chkLoginSettings.ClientID%>,#<%=chkIntegrated.ClientID%>,#<%=chkDatabaseSetting.ClientID%>,#<%=chkRememberConnection.ClientID%>').CheckBoxX()
            

         

            $("#<%=txtServer.ClientID%>").autocomplete({
                source: ArrServerData,
                minLength: 0
            }).on("click", function () { $("#<%=txtServer.ClientID%>").autocomplete("search", ""); });


            $("#<%=txtServer.ClientID%>").autocomplete({
                select: function (event, ui) {
                    $("#<%=chkDatabaseSetting.ClientID%>").checked(true);
                    LoadData(ui);
                    EnableControls();
                }
            });


            //source: ["GET", "POST", "PUT", "HEAD", "TRACE", "DELETE", "SEARCH", "CONNECT", "PROPFIND", "PROPPATCH", "PATCH", "MKCOL", "COPY", "MOVE", "LOCK", "UNLOCK", "OPTIONS"],
       


            txtUsr = document.getElementById("<%=txtLoginUsername.ClientID%>");
	    txtPwd = document.getElementById("<%=txtLoginPassword.ClientID%>");
	    txtConf = document.getElementById("<%=txtConfirmLoginPassword.ClientID%>");
	    chkLog = document.getElementById("<%=chkLoginSettings.ClientID%>");
	    chkDb = document.getElementById("<%=chkDatabaseSetting.ClientID%>");
	    txtDbPwd = document.getElementById("<%=txtPwd.ClientID%>");
            txtDbUsr = document.getElementById("<%=txtUser.ClientID%>");

          
	   
	    txtServer = document.getElementById("<%=txtServer.ClientID%>");

            EnableControls();

            CheckIntegrated("#<%= chkIntegrated.ClientID %>");
            //CheckCreateCompany("#<%= chkCreateCompany.ClientID %>");
            // alert(document.documentElement.offsetHeight);
            CheckFileStream($("#<%= chkEnableFileStream.ClientID %>"));
	}
	function EnableControls() {

	    if (chkDb && chkLog) {
	        if (chkDb.checked) {
	            txtDbUsr.disabled = false;
	            txtDbPwd.disabled = false;

	        }
	        else {
	            txtDbUsr.disabled = true;
	            txtDbPwd.disabled = true;
	        }
	        if (chkLog.checked) {
	            txtUsr.disabled = false;
	            txtPwd.disabled = false;
	            txtConf.disabled = false;
	        }
	        else {
	            txtUsr.disabled = true;
	            txtPwd.disabled = true;
	            txtConf.disabled = true;
	        }
	    }

	}



	function CheckDataChanged() {
	    //	alert(txtDbUsr.value + " " + DbUsr + " " + ddlDB.value + " " + DB + " " + txtDatabaseName.value + " " + DatabaseName + " " +       txtServer.value + " " + Server + " " +
	    //	        chkDb.checked + " " + txtDbPwd.value + " " + DbPwd)
	    if (txtDbUsr.value != DbUsr ||
	        //ddlDB.value != DB ||
	        //txtDatabaseName.value != DatabaseName ||
	        txtServer.value != Server
	   	    )
	        DataChanged = true;
	    else
	        DataChanged = false;
	}


	function CheckValidation() {

	    if (txtServer.value == "") {
	        alert("Please enter server name.")
	        txtServer.focus();
	        return false;
	    }
	    //if (txtDatabaseName.value == "") {
	    //    alert("Please enter database name.")
	    //    txtDatabaseName.focus();
	    //    return false;
	    //}
	    //if (ddlDB.selectedIndex == 0) {
	    //    alert("Please enter database.")
	    //    ddlDB.focus();
	    //    return false;
	    //}
	    if (chkDb.checked) {
	        if (txtDbUsr.value == "") {
	            alert("Please enter database user name.")
	            txtDbUsr.focus();
	            return false;
	        }
	        if (txtDbPwd.value == "") {
	            alert("Please enter database password.")
	            txtDbPwd.focus();
	            return false;
	        }


	    }
	    if (chkLog.checked) {
	        if (txtUsr.value == "") {
	            alert("Please enter Login User Name.")
	            txtUsr.focus();
	            return false;
	        }
	        if (txtPwd.value == "") {
	            alert("Please enter login password.")
	            txtPwd.focus();
	            return false;
	        }
	        if (txtPwd.value != txtConf.value) {
	            alert("Passwords typed do not match, please re-enter your passwords.")
	            txtPwd.focus();
	            return false;
	        }

	    }
	    CheckDataChanged();
	    if (DataChanged) {
	        alert('Settings have changed. Please Test Connection before proceeding.')
	        return false;
	    }

	    return true;
	}

	var wleft = (screen.width - 390) / 2;
	var wtop = (screen.height - 170) / 2;

	function OpenVerifyDb() {
	    if (!CheckValidation())
	        return false;

       
	    if (confirm('Do you wish to verify MsSql database dbSensysErp located on ' + txtServer.value)) {
	        var url = "meta/DataBase_Verify.aspx?FromConfig=1&User=" + Usr + "&Pass=" + Pwd + "&HasConn=1&DB=MsSql&Server=" + txtServer.value + "&Database=dbSensysErp&Uid=" + $get('<%=txtUser.ClientID %>').value + "&Pwd=" + DbPwd;
                window.open(url, "", "menubar=0,resizable=0,status=0,scrollbars=1,width=390,height=270,top=" + wtop + ",left=" + wleft + "");
	    }
        return false;
	}



        function VerifyDatabase(cntrl) {

            var dbName = $(cntrl).attr('title');
            if (confirm('Do you wish to verify MsSql database' + dbName + ' located on ' + txtServer.value)) {
                var url = "../Meta/DataBase_Verify.aspx?FromConfig=1&User=" + Usr + "&Pass=" + Pwd + "&HasConn=1&DB=MsSql&Server=" + txtServer.value + "&Database=" + dbName + "&IS=" + (IS==true?1:0) + "&Uid=" + $get('<%=txtUser.ClientID %>').value + "&Pwd=" + DbPwd;
                window.open(url, "", "menubar=0,resizable=0,status=0,scrollbars=1,width=390,height=270,top=" + wtop + ",left=" + wleft + "");
            }
            return false;
        }


        function AddDataBase(Type) {
            $("#trCompanyCode").css("display", "none");
            $("#trCompanyName").css("display", "none");
            $("#trDbName").css("display", "none");
            $("#trDisplayName").css("display", "none");
            $("#trKey").css("display", "none");
            $("#trkeyAct").css("display", "none");
            $("#<%=btnAdd.ClientID%>").val("Add");

            if (Type == "New") {
                $("#<%=hdnAddType.ClientID%>").val("New");
                $("#trDbName").css("display", "table-row");
                $("#trDisplayName").css("display", "table-row");
                $("#trCompanyCode").css("display", "table-row");
                $("#trCompanyName").css("display", "table-row");
            }
            else if (Type == "Exist") {
                $("#<%=hdnAddType.ClientID%>").val("Exist");
                $("#trDbName").css("display", "table-row");
                $("#trDisplayName").css("display", "table-row");
            }
            else if (Type == "AddKey") {

                $("#<%=txtSoftwareKey.ClientID%>").val("");
                $("#<%=chkKeyActivated.ClientID%>").checked(false);

                $("#<%=hdnAddType.ClientID%>").val("AddKey");
                $("#trKey").css("display", "table-row");
                $("#trkeyAct").css("display", "table-row");

            }
            else if (Type == "EditKey") {
                var softwarekey = $find("<%=rcbSoftwareKey.ClientID%>").get_selectedItem().get_text();
                var isactivated = $find("<%=rcbSoftwareKey.ClientID%>").get_selectedItem().get_attributes().getAttribute("activated")

                $("#<%=txtSoftwareKey.ClientID%>").val(softwarekey);
                $("#<%=chkKeyActivated.ClientID%>").checked(isactivated=="True"?true:false);

                $("#<%=hdnAddType.ClientID%>").val("EditKey");
                $("#trKey").css("display", "table-row");
                $("#trkeyAct").css("display", "table-row");

                $("#<%=btnAdd.ClientID%>").val("Update");
            }

            $("#PopUpAddDB").ShowModal();
            return false;
        }

        function AddDataBaseExist() {
            $("#<%=hdnAddType.ClientID%>").val("Exist");
            $("#trCompanyCode").css("display", "none");
            $("#trCompanyName").css("display", "none");
            $("#PopUpAddDB").ShowModal();
            

            return false;
        }

        function CloseModel() {
            $("#PopUpAddDB").HideModal();
            return false;
        }

        function CheckIntegrated(cntrl) {
         
            if ($(cntrl).checked()) {
                $("#trChangeDatabase").css("display", "none")
                $("#trDatabaseUName").css("display", "none")
                $("#trDatabasePWD").css("display", "none")
            }
            else {
                $("#trChangeDatabase").css("display", "table-row")
                $("#trDatabaseUName").css("display", "table-row")
                $("#trDatabasePWD").css("display", "table-row")
            }

        }

        function CheckCreateCompany(cntrl) {
            
            if ($(cntrl).checked()) {
                $("#trCompanyName").css("display", "table-row")
                $("#trCompanyCode").css("display", "table-row")
                $("#tdCreateDemo").css("display", "table-row")
            }
            else {
                $("#trCompanyName").css("display", "none")
                $("#trCompanyCode").css("display", "none")
                $("#tdCreateDemo").css("display", "none")
            }
        }

        function AddClone() {

            $("#tdCreateDemo").css("display", "none")
            $("#PopUpAddDB").ShowModal();
            return false;
        }


        function validateForm() {
            if ($("#<%=hdnAddType.ClientID%>").val() == "New" || $("#<%=hdnAddType.ClientID%>").val() == "Exist" ) {
                if ($("#<%=txtDbName.ClientID%>").val().Trim().length == 0) {
                    alert("Please Enter Database Name");
                    return false;
                }
                if ($("#<%=txtDisplayName.ClientID%>").val().Trim().length == 0) {
                    alert("Please Enter Database Display Name");
                    return false;
                }
            }
            if ($("#<%=hdnAddType.ClientID%>").val()  == "New") {
                if ($("#<%=txtCompanyCode.ClientID%>").val().Trim().length == 0) {
                    alert("Please Enter Company Code");
                    return false;
                }
                if ($("#<%=txtCompanyName.ClientID%>").val().Trim().length == 0) {
                    alert("Please Enter Company Name");
                    return false;
                }
            }
            if ($("#<%=hdnAddType.ClientID%>").val() == "AddKey" || $("#<%=hdnAddType.ClientID%>").val() == "EditKey") {
                if ($("#<%=txtSoftwareKey.ClientID%>").val().Trim().length == 0) {
                    alert("Please Enter Software key.");
                    return false;
                }
            }
            CloseModel();
            return true;
        }

        function DatabaseAlreadyExist() {
            alert("Database already exist...");
        }


        function CheckFileStream(cntrl) {
            var chkcntrl = false;
            if ($(cntrl).find('input').exists())
                chkcntrl=$(cntrl).find('input').checked();
            else
                chkcntrl=$(cntrl).checked();

            if(chkcntrl)
                $("#trFileGroupName").css("display", "table-row");
            else
                $("#trFileGroupName").css("display", "none");

            return false;
        }

    </script>


</body>
</html>

