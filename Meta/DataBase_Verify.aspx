<%@ Page Language="C#" MasterPageFile="~/Meta/MetaMain.Master" AutoEventWireup="true"
    CodeBehind="DataBase_Verify.aspx.cs" Inherits="SensysErp.Meta.DataBase_Verify"
    Title="DataBase Verification" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

   

    <script type="text/javascript">

        window.ht = "390"
        window.wd = "380"
        //window.title="title"
        document.documentElement.style.overflowX = "hidden"
        document.documentElement.style.overflowY = "hidden"

        function MDI_Load() {
            PageLoader.Deactivate=true;
            //Add user code here
            //alert(MDI.id)
           
        }
        function MDI_Close() {
            //Add user code here
            //alert(MDI.id)
            MDIMain.KillSession('DB_Script,DB_ScriptError,DB_Schema');
            return true;
        }  
        function ShowAdv()
        {
            $("#divOptions").setDisplay($("#<%=rdoAdv.ClientID%>").checked())        
        }
        
        var ShowLog=false;
        var LogType='';
    </script>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>        
  
        <hlp:ActionMessage ID="ActionMessage1" runat="server" OffsetTop="1"></hlp:ActionMessage>
            <asp:Panel ID="pnlBackupMain" runat="server" Width="350px">
                <asp:Label ID="lblMsg" runat="server"  Width="350px"></asp:Label><br />
                <asp:Panel ID="pnlAdv" Style="margin-top:10px" runat="server">
                    <asp:RadioButton ID="rdoDef"  style="display:none" onclick="ShowAdv()" Checked="true" GroupName="Rdo" Text="Default Options"
                        runat="server" />
                    <asp:RadioButton ID="rdoAdv"  style="display:none" onclick="ShowAdv()" GroupName="Rdo" Text="Advanced Options"
                        runat="server" />
                    <div id="divOptions" style="display:none">
                        <asp:CheckBox ID="chkDB" Text="Update Database Structure" runat="server" /><br />
                        <asp:CheckBox ID="chkInd" Text="Rebuild Indexes" runat="server" /><br />
                        <asp:CheckBox ID="chkMenu" Visible="false" Text="Update Menu Structure" runat="server" /><br />
                        <asp:CheckBox ID="chkMaster" Visible="false" Text="Update Master Records" runat="server" /><br />
                         <asp:CheckBox ID="chkReset"  Text="Reset Data" runat="server" /><br />
                        
                    </div>
                </asp:Panel>               
                <asp:Button ID="btnVerify" OnClientClick="$.Notify('Updating...')" Style="font-weight:bold;width:125px;height:30px;text-align:center;margin-top:10px;margin-bottom:10px" SkinID="" OnClick="btnVerify_Click" runat="server" Text="Verify Database">
                </asp:Button>
               <asp:Button ID="btnInValidate" OnClientClick="$.Notify('Please Wait...')" Style="font-weight:bold;width:125px;height:30px;text-align:center;margin-top:10px;margin-bottom:10px" SkinID="" OnClick="btnInValidate_Click" runat="server" Text="Clear Cache">
                </asp:Button>
                <asp:Label Visible="false" Style="font-size: 7.5pt" ID="Label3" runat="server" Width="352px">(It is advisable to make a backup of database before performing "Verify Database")</asp:Label>
                
                 <div style="width: 350px; text-align: right;margin-top:10px">
                <a id="lbnLog" href="javascript:void(0)" style="float: left;vertical-align:middle;display:none" onclick="OpenWin();">Show
                    Log</a>
                <asp:Button ID="btnClose" Visible="false" runat="server" Text="Close"></asp:Button>
            </div>
                
                </asp:Panel>
           
           
        </ContentTemplate>
    </asp:UpdatePanel>

    <script type="text/javascript">

    function pageLoad()
    {
        $.Notify(false);
        ShowAdv()
        if(ShowLog==true)
            $("#lbnLog").show();
    }
    function OpenWin()
    {
        window.open("DataBase_Verify_Result.aspx?mode="+LogType,"","menubar=0,resizable=1,status=0,scrollbars=1,width=600,height=625");
        return false;
    }
    
    </script>

</asp:Content>
