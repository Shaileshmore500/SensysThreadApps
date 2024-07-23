<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="DataBase_Verify_Result.aspx.cs" Inherits="SensysErp.Meta.DataBase_Verify_Result" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Untitled Page</title>

   
    <style>
    .PnlCtr Fieldset
    {
    	height:89%;
    	width:97%;
    	
    }
    .PnlCtr SPAN
    {
    	overflow:auto;
    	height:94%;
    	width:96%;
    	margin:10px;
    	display:inline-block;
    	background-color:#F1F5F5;
    }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div style="margin:7px;">
    <asp:Button ID="btnError" Text="Show Errors" OnClientClick="return ShowError();" runat=server />
    <asp:Button ID="btnScript" Text="Show Script" OnClientClick="return ShowScript();"  runat=server />
    <asp:Button ID="btnSchema" Text="Show Schema" Visible="false"  OnClientClick="return ShowSchema();"  runat=server />
    <asp:Panel runat="server" ID="pnlError" SkinID="PnlNoSkin"  CssClass="PnlCtr"  GroupingText="Database verification errors">
    <asp:Label ID="lblError" SkinID="LblNoSkin"  runat="server"></asp:Label>
    </asp:Panel>
    <asp:Panel runat="server" ID="pnlScript" SkinID="PnlNoSkin" CssClass="PnlCtr" Style="display:none" GroupingText="Database verification script">
    <asp:Label ID="lblScript"  SkinID="LblNoSkin"  runat="server"></asp:Label>
    </asp:Panel>
    <asp:Panel runat="server" ID="pnlSchema" Visible="false" SkinID="PnlNoSkin" CssClass="PnlCtr" Style="display:none" GroupingText="Database schema">
    <asp:Label ID="lblSchema" Visible="false" SkinID="LblNoSkin" Style="overflow:hidden"  runat="server"></asp:Label>
    </asp:Panel>
    <asp:Button ID="btnSave" Text="Save Log"  OnClick="btnSave_Click"   runat=server />
    </div>
    </form>
    <script type="text/javascript">
    function ShowError()
    {
    document.getElementById("<%=pnlError.ClientID %>").style.display="block";
    document.getElementById("<%=pnlScript.ClientID %>").style.display="none";
    //document.getElementById("<%=pnlSchema.ClientID %>").style.display="none";
    return false;
    }
    function ShowScript()
    {
    document.getElementById("<%=pnlError.ClientID %>").style.display="none";
    document.getElementById("<%=pnlScript.ClientID %>").style.display="block";
    //document.getElementById("<%=pnlSchema.ClientID %>").style.display="none";
     return false;
    }
//    function ShowSchema()
//    {
//    
//    document.getElementById("<%=pnlSchema.ClientID %>").style.display="block";
//    document.getElementById("<%=pnlScript.ClientID %>").style.display="none";
//    document.getElementById("<%=pnlError.ClientID %>").style.display="none";
//    if(document.getElementById("<%=lblSchema.ClientID %>")==null)
//        return true;
//    else 
//        return false;
//    }
    </script>
</body>
</html>
