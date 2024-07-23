<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="DataBase_Serialise.aspx.cs"
    Inherits="SensysErp.Meta.DataBase_Serialise" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">

    <title>Untitled Page</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
      
        <asp:Label Text="MSSql Structure" ID="lbl1" runat="server"></asp:Label>
        <asp:TextBox ID="txtMS_Db" Width="550px" Text="server=localhost;database=dbThreadERP_CORE_Project;uid=sensysthreadsa;pwd="
            runat="server" />
        <br />
      
        <asp:Button ID="btnSerializer" runat="server" Text="serialize" OnClick="btnSerializer_Click" />
        <br />


         <asp:Label Text="Config Db" ID="Label1" runat="server"></asp:Label>
        <asp:TextBox ID="txtConfigDb" Width="550px" Text="server=localhost;database=dbThreadERP_Configuration;uid=sensysthreadsa;pwd="
            runat="server" />
        <br />
      
        <asp:Button ID="btnConfigDb" runat="server" Text="serialize" OnClick="btnConfigDb_Click" />
        <br />

        <asp:Label Text="MSSql Menu/Masters" ID="Label2" runat="server"></asp:Label><asp:TextBox
            ID="txtMS_Menu" Width="550px" Text="server=52.66.166.119,1433;database=dbThreadERP_CORE;uid=sensysthreadsa;pwd=" runat="server" />
        <br />
        <asp:Button ID="Button1" runat="server" Text="Menus" OnClick="btnMenu" /><br />
        <input type="hidden" id="hdnTables" value="tbl_META_PredefinedList,tbl_META_PredefinedListValues"
            runat="server" />
    </div>
    </form>
</body>
</html>
