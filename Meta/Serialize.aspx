<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="Serialize.aspx.cs" Inherits="SensysErp.Meta.Serialize" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">

        //window.title="title"


    </script>

    <style type="text/css">
        .tree
        {
            height: 350px;
            width: 300px;
            border: solid 2px black;
            overflow: auto;
        }
    </style>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />

            <table>
                <tr>
                    <td>
                        <asp:Label ID="lblClientPass" runat="server" Text="Client Zip Password"></asp:Label>
                    </td>
                    <td>
                        <asp:TextBox ID="txtClientPassword" runat="server"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <asp:Button ID="btnClientDatabase" runat="server" OnClick="btnClientDatabase_Click" Text="Client Database Zip" />
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <hr style="width:2px;width:100%" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <asp:Label ID="lblPassword" runat="server" Text="Zip Password"></asp:Label>
                    </td>
                    <td>
                        <asp:TextBox ID="txtZipPassword" runat="server"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td style="margin-top: 30px">
                        <asp:Label ID="lblUpload" runat="server" Text="File Path"></asp:Label>
                    </td>
                    <td>
                        <telerik:RadAsyncUpload runat="server" Visible="true" ID="AsyncUploadSerialize" MaxFileInputsCount="1" MultipleFileSelection="Disabled">
                        </telerik:RadAsyncUpload>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <asp:Button ID="btnUpdate" runat="server" Text="Serialize Database" OnClick="btnUpdate_Click" />
                    </td>
                </tr>
            </table>
        </ContentTemplate>
    </asp:UpdatePanel>

</asp:Content>
