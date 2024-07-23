<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Spread.aspx.cs" Inherits="SensysErp.Main.Spread" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>Document Editor</title>
    <style>
        html, body, form
        {
            height: 100%;
            overflow: hidden;
            padding:0;
            margin:0;
        }

        .dxtc-wrapper.dxtc-stripContainer
        {
            background-color: #DADADA !important;
        }

        .dxr-tabWrapper
        {
            background-color: #F5F5F5 !important;
        }

     
        .dxpnlLoadingDivWithContent
        {
            opacity:0.75;
        }
    </style>
     <%# HelperLib.Web.WebResources.GetResource("~/fonts/font.css")%>     
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
    <script>
        var __initDoc = false;
        function InitDoc() {
            Editor.raiseBeginSynchronization = function () { }
            Editor.setFullScreenModeInternal = function (fullscreen) {
                Editor.setFullScreenModeFlag(!Editor.isInFullScreenMode);
                if (Editor.isInFullScreen()) {
                    parent.Erp.Spread.ToggleFullScreen(window.frameElement.id, true);
                    Editor.displayControlInFullScreenMode();
                }
                else {
                    parent.Erp.Spread.ToggleFullScreen(window.frameElement.id, false);
                    Editor.displayControlInPageMode();
                }
                
            }
            
            var r = Editor.GetRibbon();
            r.SetMinimized(true);

            if (__initDoc)
                return;
            else
                __initDoc = true;
            if (typeof window.frameElement.OnDocumentInit == "function")
                window.frameElement.OnDocumentInit({ Id: window.frameElement.id });

            if (window.frameElement.loadDoc) {
                EditorCallback();
                window.frameElement.loadDoc = false;
            }
        }
        function EditorCallback() {
            var args = window.frameElement.DocumentArgs;
            args = JSON.stringify(args)
            PnlCallBack.PerformCallback(args);
        }
        function EditorCallbackComplete() {
            if (!window.frameElement.DocumentArgs)
                window.frameElement.DocumentArgs = {};
            window.frameElement.DocumentArgs.DocName = (PnlCallBack.cpFileName ? PnlCallBack.cpFileName : "");
            window.frameElement.DocumentArgs.Format = (PnlCallBack.cpFormat ? PnlCallBack.cpFormat : "");

            if (window.frameElement.DocumentArgs.Action == "Load") {
                if (typeof window.frameElement.OnDocumentLoaded == "function")
                    window.frameElement.OnDocumentLoaded($.extend({ Id: window.frameElement.id }, window.frameElement.DocumentArgs));
                if (typeof window.frameElement.cbFn == "function") {
                    window.frameElement.cbFn($.extend({ Id: window.frameElement.id }, window.frameElement.DocumentArgs));
                    window.frameElement.cbFn = null;
                }
            }
            else if ((window.frameElement.DocumentArgs.Action == "Update" || window.frameElement.DocumentArgs.Action == "Upsert")) {
                Editor.modified = false;
                if (typeof window.frameElement.OnDocumentSaved == "function")
                    window.frameElement.OnDocumentSaved($.extend({ Id: window.frameElement.id, Message: (PnlCallBack.cpSaveError ? PnlCallBack.cpSaveError : "") }, window.frameElement.DocumentArgs));
                if (typeof window.frameElement.cbFn == "function") {
                    window.frameElement.cbFn($.extend({ Id: window.frameElement.id, Message: (PnlCallBack.cpSaveError ? PnlCallBack.cpSaveError : "") }, window.frameElement.DocumentArgs));
                    window.frameElement.cbFn = null;
                }
            }
        }
       
        
    </script>
</head>
<body>
    <form id="form1" runat="server">
        <div style="height: 100%">
            <dx:ASPxCallbackPanel ID="PnlCallBack" Height="100%" runat="server" OnCallback="Editor_Callback">
                <SettingsLoadingPanel Text="" />
                 <LoadingPanelImage  Url="~/images/prog.gif">
        </LoadingPanelImage>
                <ClientSideEvents EndCallback="EditorCallbackComplete" />
                <PanelCollection>
                    <dx:PanelContent>
                    <dx:ASPxSpreadsheet  Height="100%" ClientSideEvents-Init="InitDoc"    Theme="Moderno" Width="100%" ClientInstanceName="Editor" ID="Editor" runat="server">
                    </dx:ASPxSpreadsheet>
                    </dx:PanelContent>
                </PanelCollection>
            </dx:ASPxCallbackPanel>
        </div>
    </form>
    <script>
       
    </script>

</body>
</html>