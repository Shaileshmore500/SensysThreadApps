<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master"  CodeBehind="Workflowinstance_Detail.aspx.cs" Inherits="SensysErp.Main.Workflowinstance_Detail" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">


</asp:Content>
    
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
        <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
            <div style="margin-top:10px;margin-left:10px;">
            <asp:Panel ID="pnl1" runat="server" style="margin-bottom: 10px;">
                <table>
                    <tr>
                        <td>
                            <asp:Label ID="lbllevel" runat="server" Text="level"></asp:Label>
                            <telerik:RadComboBox ID="rcblevel" runat="server" OnSelectedIndexChanged="rcblevel_SelectedIndexChanged" AutoPostBack="true" ></telerik:RadComboBox>
                        </td>
                </tr>
                </table>

            </asp:Panel>
            <asp:Panel ID="pnl2" runat="server">
            <telerik:RadGrid ID="dgData" runat="server" AllowPaging="False" AllowSorting="True"
                AutoGenerateColumns="False" GridLines="None" GroupingEnabled="False"
                Skin="Vista" Height="350px" Width="80%" OnNeedDataSource="dgData_NeedDataSource"
                AllowFilteringByColumn="false" PageSize="25" >
                <PagerStyle Mode="NextPrevAndNumeric" PageButtonCount="5" PagerTextFormat="Change page: {4} &amp;nbsp;({0}/{1})&amp;nbsp;&amp;nbsp;Total records : {5}" />
                <MasterTableView ClientDataKeyNames="Receivers_PID" CommandItemDisplay="Top" AllowPaging="true"
                    TableLayout="Fixed">
                    <RowIndicatorColumn Visible="false">
                        <HeaderStyle Width="20px" />
                    </RowIndicatorColumn>
                    <ExpandCollapseColumn>
                        <HeaderStyle Width="20px" />
                    </ExpandCollapseColumn>
                    <Columns>
                         <telerik:GridBoundColumn DataField="username" HeaderText="User Name" UniqueName="username">
                             <HeaderStyle Width="180px" />
                        </telerik:GridBoundColumn>
                         <telerik:GridBoundColumn DataField="DecisionResult" HeaderText="Desision Result" UniqueName="DecisionResult">
                             <HeaderStyle Width="110px" />
                        </telerik:GridBoundColumn>
                         <telerik:GridBoundColumn DataField="DecisionDate" HeaderText="Decision Date"  DataFormatString="{0:dd/MM/yyyy hh:mm tt}" UniqueName="DecisionDate">
                             <HeaderStyle Width="95px" />
                        </telerik:GridBoundColumn>
                        <telerik:GridBoundColumn DataField="SentDate" HeaderText="Sent Date"  DataFormatString="{0:dd/MM/yyyy hh:mm tt}" UniqueName="SentDate">
                            <HeaderStyle Width="78px" />
                        </telerik:GridBoundColumn>
                         <telerik:GridCheckBoxColumn DataField="IsFailSafeUser" HeaderText="Fail Safer User" UniqueName="IsFailSafeUser">
                             <HeaderStyle Width="70px" />
                        </telerik:GridCheckBoxColumn>
                    </Columns>
                     <CommandItemTemplate>

                     </CommandItemTemplate>
                </MasterTableView>
                <ClientSettings AllowDragToGroup="True" AllowGroupExpandCollapse="False" AllowKeyboardNavigation="True">
                    <Selecting AllowRowSelect="True" />
                    <ClientEvents />
                    <Scrolling AllowScroll="True" ScrollHeight="180px" UseStaticHeaders="True" />
                    <Resizing AllowColumnResize="True" />
                </ClientSettings>
            </telerik:RadGrid>
                </asp:Panel>
                </div>
        </ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>