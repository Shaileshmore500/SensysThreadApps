<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="AuditControl.ascx.cs" Inherits="SensysErp.Meta.AuditControl" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<script src="../Scripts/System.js" type="text/javascript"></script>
<script src="../Scripts/jquery.js" type="text/javascript"></script>
<script src="../Scripts/UiHelper.js" type="text/javascript"></script>
<script src="../Scripts/jqHelper.js" type="text/javascript"></script>

<html>
<head>
    <title></title>

    <style type="text/css">
        
    </style>
</head>
<body>
    <form id="form1">
        <asp:UpdatePanel ID="UpdatePanel1" runat="server">
            <ContentTemplate>
                <asp:Panel ID="pnlAudit" runat="server">
                    <telerik:RadGrid ID="dgAudit" runat="server" OnNeedDataSource="dgAudit_NeedDataSource"
                        AllowPaging="false" AllowSorting="false" GroupingEnabled="False" GridLines="None" Height="350px" Width="100%"
                        OnDetailTableDataBind="dgAudit_DetailTableDataBind">
                        <MasterTableView AutoGenerateColumns="False" DataKeyNames="audit_pid" CommandItemDisplay="none">
                            <RowIndicatorColumn Visible="false">
                                <HeaderStyle Width="20px" />
                            </RowIndicatorColumn>
                            <ExpandCollapseColumn>
                                <HeaderStyle Width="20px" />
                            </ExpandCollapseColumn>
                            <Columns>
                                <telerik:GridBoundColumn DataField="displayname" HeaderText="Entity Name"
                                    UniqueName="AllEntity">
                                </telerik:GridBoundColumn>
                                <telerik:GridBoundColumn DataField="recordTracker" HeaderText="Record ID"
                                    UniqueName="AllRecord">
                                </telerik:GridBoundColumn>
                                <telerik:GridBoundColumn DataField="username" HeaderText="User Name"
                                    UniqueName="column1">
                                </telerik:GridBoundColumn>
                                <telerik:GridBoundColumn DataField="action" HeaderText="Action"
                                    UniqueName="column2">
                                </telerik:GridBoundColumn>
                                <telerik:GridBoundColumn DataField="actiondate" HeaderText="Action Date" UniqueName="column4"
                                    DataFormatString="{0:dd-MM-yyyy hh:mm tt}">
                                </telerik:GridBoundColumn>
                                <telerik:GridBoundColumn DataField="recordid" Display="false"
                                    UniqueName="column3">
                                </telerik:GridBoundColumn>
                                <telerik:GridBoundColumn DataField="tablename" Display="false"
                                    UniqueName="column33">
                                </telerik:GridBoundColumn>
                            </Columns>
                            <DetailTables>
                                <telerik:GridTableView runat="server" DataKeyNames="audit_pid" AutoGenerateColumns="false" Name="AuditDetails">
                                    <Columns>
                                        <telerik:GridBoundColumn DataField="displayname" HeaderText="Field Name"
                                            UniqueName="column5">
                                        </telerik:GridBoundColumn>
                                        <telerik:GridTemplateColumn UniqueName="newdata" HeaderText="Field New Values">
                                            <ItemTemplate>
                                                <div id="divText" style='<%# HelperLib.Extensions.BaseExtensions.C2Str(Eval("fieldtype")) != "date" ? "display:": "display:none" %>'>
                                                    <span><%# Eval("textfield_new") %> </span>
                                                </div>
                                                <div id="divDateField" style='<%# HelperLib.Extensions.BaseExtensions.C2Str(Eval("fieldtype")) == "date" ? "display:": "display:none" %>'>
                                                    <span><%# HelperLib.Extensions.BaseExtensions.IsBlank(Eval("datefield_new")) ?  null : HelperLib.Extensions.BaseExtensions.C2Date(Eval("textfield_new")).ToString("dd-MM-yyyy") %> </span>
                                                </div>
                                            </ItemTemplate>
                                        </telerik:GridTemplateColumn>
                                        <telerik:GridTemplateColumn UniqueName="olddata" HeaderText="Field Old Values">
                                            <ItemTemplate>
                                                <div id="divText" style='<%# HelperLib.Extensions.BaseExtensions.C2Str(Eval("fieldtype")) != "date" ? "display:": "display:none" %>'>
                                                    <span><%# Eval("textfield_old") %> </span>
                                                </div>
                                                <div id="divDateField" style='<%# HelperLib.Extensions.BaseExtensions.C2Str(Eval("fieldtype")) == "date" ? "display:": "display:none" %>'>
                                                    <span><%# HelperLib.Extensions.BaseExtensions.IsBlank(Eval("datefield_old")) ?  null : HelperLib.Extensions.BaseExtensions.C2Date(Eval("textfield_new")).ToString("dd-MM-yyyy") %> </span>
                                                </div>
                                            </ItemTemplate>
                                        </telerik:GridTemplateColumn>
                                    </Columns>
                                </telerik:GridTableView>
                            </DetailTables>
                        </MasterTableView>
                    </telerik:RadGrid>
                </asp:Panel>
            </ContentTemplate>
        </asp:UpdatePanel>
    </form>
</body>
</html>
