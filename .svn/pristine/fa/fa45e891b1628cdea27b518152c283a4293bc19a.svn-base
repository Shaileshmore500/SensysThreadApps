<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Rtf.aspx.cs" Inherits="SensysErp.Main.Rtf" %>

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

        .dxreControl_Moderno .dxre-view
        {
            background: #C1C1C1 !important;
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
            Editor.core.commandManager.getCommand(__aspxRichEdit.RichEditClientCommand.ShowAllFieldCodes).execute();
            Editor.raiseBeginSynchronization = function () { }
            Editor.toggleFullScreenMode= function() {
                Editor.isInFullScreenMode = !Editor.isInFullScreenMode;
                if (Editor.isInFullScreenMode) {
                    parent.Erp.Spread.ToggleFullScreen(window.frameElement.id, true);
                    Editor.setFullScreenMode();
                }
                else {
                    parent.Erp.Document.ToggleFullScreen(window.frameElement.id, false);
                    Editor.setNormalMode();
                }
            }
           
            var r = Editor.GetRibbon();
            r.SetMinimized(true);

            if (__initDoc)
                return;
            else
                __initDoc = true;

            if (!window.frameElement.DocumentArgs)
                window.frameElement.DocumentArgs = {};
            window.frameElement.DocumentArgs.DocName = (PnlCallBack.cpFileName ? PnlCallBack.cpFileName : "");
            window.frameElement.DocumentArgs.Format = (PnlCallBack.cpFormat ? PnlCallBack.cpFormat : "");

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
                Editor.core.serverDispatcher.wasModifiedOnServer = false;
                //Editor.core.history.currentIndex = -1;
                Editor.core.serverDispatcher.lastSavedHistoryItemId = -1;
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
                        <dx:ASPxRichEdit WorkDirectory="~/temp" Theme="Moderno" ClientSideEvents-EndCallback="EditorCallbackComplete" 
                            ClientSideEvents-Init="InitDoc" 
                            ID="Editor" ClientInstanceName="Editor" runat="server" Width="100%" Height="100%" 
                            ActiveTabIndex="0" ShowConfirmOnLosingChanges="false">
                        </dx:ASPxRichEdit>
                    </dx:PanelContent>
                </PanelCollection>
            </dx:ASPxCallbackPanel>
        </div>
    </form>

</body>
</html>
