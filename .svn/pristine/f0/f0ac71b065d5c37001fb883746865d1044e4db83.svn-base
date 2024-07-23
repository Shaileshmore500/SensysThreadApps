<%@ Page Language="C#" AutoEventWireup="true" Title="File Manager" MasterPageFile="~/Meta/MetaMain.Master" ValidateRequest="false" CodeBehind="HtmlResources_View.aspx.cs" Inherits="SensysErp.Meta.HtmlResources_View" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">


    <script type="text/javascript">

        //window.title="title"
        //document.documentElement.style.overflowX = "hidden"
        //document.documentElement.style.overflowY = "hidden"

    </script>

    <style>
        html, body, form
        {
            height:100%;
            padding:0;
            background-color:#fff;
        }
        .ico-app > .rtIn:before,
        .ico-company > .rtIn:before,
        .ico-res > .rtIn:before,
        .ico-txt > .rtIn:before,
        .ico-img > .rtIn:before,
        .ico-folder > .rtIn:before
        {
            font-family: fontawesome;
            font-size: 15px;
            font-weight: normal;
            margin-right: 5px;
        }

        .ico-res > .rtIn:before
        {
            content: "\f1c0";
        }

        .ico-app > .rtIn:before
        {
            content: "\f1b3";
        }
        .ico-company > .rtIn:before
        {
            content:"\f0f2";
        }
        .ico-txt > .rtIn:before
        {
            content: "\f0f6";
        }

        .ico-img > .rtIn:before
        {
            content: "\f1c5";
        }

        .ico-folder > .rtIn:before
        {
            content: "\f07b";
        }

        .lnk-file:before
        {
            font-family: fontawesome;
            margin-right: 5px;
            content: "\f0f6";
            display: inline-block;
        }

        .lnk-folder:before
        {
            display: inline-block;
            font-family: fontawesome;
            margin-right: 5px;
            content: "\f07b";
        }

        .lnk-img:before
        {
            display: inline-block;
            font-family: fontawesome;
            margin-right: 5px;
            content: "\f1c5";
        }

        #divPreview
        {
            position: absolute;
            top: 20px;
            left: 295px;
            right: 5px;
            bottom: 59px;
            border: solid 1px #808080;
            background-color: #fff;
        }
        #divFileListScr
        {
            overflow-x: hidden;
            overflow-y: auto;
            position: absolute;
            right: 0;
            left: 0;
            bottom: 0;
            top: 27px;
        }
        #divCmd
        {
            position: absolute;
            right: 5px;
            bottom: 30px;
            left: 295px;
            border: solid 1px #808080;
            padding: 3px;
            border-top: none;
            height: 22px;
            background-color: #fff;
        }

        #ifrPreview
        {
            width: 100%;
            height: 100%;
        }

        #imgPreview
        {
            height: auto;
            width: auto;
            margin: auto;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            max-height: 300px;
            max-width: 300px;
        }

        #txtUrl
        {
            border: solid 1px #808080;
            width: 82%;
            padding: 4px;
            border-radius: 5px;
            cursor: text;
            background-color: #FFFFF2;
        }

        #txtFileName
        {
            width: 100%;
            border: solid 1px #8CC6FF;
        }

        .new-folder
        {
            background-color: #FFF29F;
        }

        #lnkFolder
        {
            font-family: nunitobold;
            font-size: 14px;
            color: #00457E;
        }

            #lnkFolder:before
            {
                display: inline-block;
                font-family: fontawesome;
                margin-right: 2px;
                content: "\f07b";
                border: solid 2px #00457E;
                border-radius: 50%;
                padding: 3px;
            }

            #lnkFolder:hover
            {
                color: #0051FF;
            }

                #lnkFolder:hover:before
                {
                    border-color: #0051FF;
                }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <hlp:ActionMessage ID="ActionMessage1" runat="server" />
    <asp:Label ID="lblMainhd" Visible="false" CssClass="mainHeading" runat="server">Browse Files</asp:Label>


    <telerik:RadTreeView ID="tvFiles" OnClientNodeClicked="showPreview" runat="server">
    </telerik:RadTreeView>

    <div id="divPreview">
        <div id="divFileList" style="display: none">
            <table id="tblFileListHdr" style="width: 100%" class="simple-grid">
                <thead>
                    <tr>
                        <th style="">File Name</th>
                        <th style="width: 25px"></th>
                    </tr>
                    <tr class="_tmplRow" style="display: none">
                        <td style=""><a class="text-link" href="javascript:void(0)"></a></td>
                        <td style="width: 25px"><a class="close" onclick="deleteRecord(this)" href="javascript:void(0)">X</a></td>
                    </tr>
                </thead>
            </table>
            <div id="divFileListScr">
                <table id="tblFileList" style="width: 100%" class="simple-grid">
                    <tbody></tbody>
                </table>
            </div>
        </div>
        <img style="display:none" id="imgPreview"></img>
        <iframe frameborder="0" style="display:none" id="ifrPreview"></iframe>
        <span id="spnUrl"></span>
    </div>
    <div id="divCmd">
        <div id="divFile" style="display: none">
            <asp:Panel ID="pnlFile" runat="server">
            <input type="text" style="display: none" id="txtFileName" />
            <a href="javascript:void(0)" id="lnkFolder">Add Folder</a>
            <telerik:RadAsyncUpload ID="fileUpload" runat="server" DisablePlugins="true" TemporaryFolder="~/temp" OnClientFileUploading="OnClientFileUploading" OnClientFileUploaded="onClientFileUploaded" HttpHandlerUrl="~/Main/AsyncUploader.ashx" MultipleFileSelection="Automatic"></telerik:RadAsyncUpload>
                </asp:Panel>
        </div>
        <div id="divUrl" style="display: none">
            <input type="text" readonly id="txtUrl" />
            <a id="lnkApply" onclick="insertData()" class="ActionButton GreenButton" style="float: right; display: none" href="javascript:void(0)" runat="server">Apply</a>
        </div>

    </div>



    <style>
        #<%=tvFiles.ClientID%>
        {
            overflow: auto;
  width: 270px;
  border: solid 1px #808080;
  position: absolute;
  top: 20px;
  left: 20px;
  bottom: 30px;
        }
        #divFile .ruRemove, #divFile .ruCancel
        {
            display: none !important;
        }

        #divFile .RadUpload
        {
            width: 280px;
            text-align: left;
            position: absolute;
            right: 0px;
            bottom: 0px;
            background-color: #F2FBFF;
            max-height: 325px;
            height: 24px;
            padding-top: 2px;
            overflow-y: hidden;
            overflow-x: hidden;
            border: solid 1px #BDD2FF;
        }

            #divFile .RadUpload:hover
            {
                height: auto;
                min-height: 24px;
                overflow-y: auto;
            }

        #divFile .ruFileWrap .ruFakeInput
        {
            margin-left: 18px;
            width: 160px;
        }

        .csstransforms  #divFile .RadUpload .ruInputs LI
        {
            display: none;
        }

            #divFile .RadUpload .ruInputs LI:last-child
            {
                display: list-item;
                margin-bottom: 0px;
            }

        #divFile .RadUpload:hover .ruInputs LI
        {
            display: list-item;
        }

        .new-folder .close
        {
            display: none;
        }
    </style>
    <script type="text/javascript">
        var folderSaving = false;
        $(function () {
            if (!$("#<%=lnkApply.ClientID%>").exists())
                $("#txtUrl").css("width", "98%");
            $("#imgPreview,#ifrPreview").load(function () { $("#<%=lnkApply.ClientID%>").show(); })
            $("#imgPreview,#ifrPreview").error(function () { $("#<%=lnkApply.ClientID%>").hide(); })
            $("#tblFileList").on("dblclick", ".text-link", function () {
                if (folderSaving)
                    return;
                var txt = $("#txtFileName");
                if (txt.isVisible() && !saveFolder()) {
                    return;
                }
                $(this).hide().before(txt.show().focus().val($(this).html()));
            });
            $(document).on("click", function (e) {
                if ($(e.target).prop("tagName") == "A")
                    return;
                if ($("#txtFileName").isVisible())
                    saveFolder();
            })
            $("#lnkFolder").on("click", function (e) {
                e.stopPropagation();
                addFolder();
            });
            $("#txtFileName").on("click", function (e) {
                e.stopPropagation();
            });
        })
        function GetHtmlResource(div) {

            parent.SetTemplateData(id);
        }

        function GetImgResource(span) {
            var url = $(span).next();
            parent.PasteImageInEditor($(url).html());
        }

        function showPreview(sender, args) {
            $(document.body).append($("#txtFileName").hide());
            var node = args.get_node();
            window.currentFolder = node;
            $("#txtUrl").val("")
            $("#divPreview,#divCmd").children().hide();
            $("#<%=lnkApply.ClientID%>").hide();
            if (node.get_attributes().getAttribute("IsFolder")) {
                ShowFileList(node);
                return;
            }
            if (!node.get_attributes().getAttribute("IsFile"))
                return;
            var isImg = node.get_attributes().getAttribute("IsImage") == "1";
            var path = "", relPath = "";
            if (node.get_attributes().getAttribute("IsResource") == "1") {
                path = currentFolder.get_value();
                relPath = path;
            }
            else {
                path = AppRootPath + "/" + getFolderPath(currentFolder.get_parent()) + "/" + currentFolder.get_text();
                relPath = ($.QS("file") == "1" ? "%INSTALL%\\" : "%APPROOT%/") + encodeURI(getFolderPath(currentFolder.get_parent()) + "/" + currentFolder.get_text());
                if ($.QS("file") == "1")
                    relPath = relPath.Replace("/", "\\");
            }
            if (isImg) {
                $("#imgPreview").show().attr("src", encodeURI(path));
            }
            else {
                var ex = path.split('.');
                //if (",xls,xlsx,csv,xlsm,xlt,xltm,xltx,doc,docx,rtf,ePub,mht,odt,".indexOf(ex[ex.length-1]) < 0)
                if (",aspx,asp,htm,html,xml,tmpl,txt,jsp,pdf,".indexOf(ex[ex.length - 1]) > -1 || path.indexOf("ashx") > -1)
                    $("#ifrPreview").show().attr("src", path);
                else
                    $("#imgPreview").show().attr("src", "../images/noimg.png");
            }
            $("#txtUrl").val(relPath);
            $("#divUrl").show();
        }
        function ShowFileList(node) {
            $("#divFile").show();
            $("#divFileList").show();
            $("#tblFileList>TBODY").empty();
            var arr = node.get_nodes();
            for (var i = 0; i < arr.get_count() ; i++) {
                var n = arr.getNode(i);
                var type = "file";
                if (n.get_attributes().getAttribute("IsImage") == "1")
                    type = "img";
                else if (n.get_attributes().getAttribute("IsFolder") == "1")
                    type = "folder";
                _addRow(type, n.get_text());
            }
        }
        function _addRow(type, fileName, newFolder) {
            var row = $("#tblFileListHdr>THEAD").find("._tmplRow").clone();
            $("#tblFileList>TBODY").append(row.removeClass("_tmplRow").show());
            row.node(0).node(0).addClass("lnk-" + type).html(fileName);
        }
        function insertData() {
            if ($.QS("fn"))
                return parent[$.QS("fn")]($("#txtUrl").val());
            if ($.QS("PageType").toLowerCase() == "image")
                parent.PasteHtmlInEditor("<img src='" + $("#imgPreview").attr("src") + "'/>",frameElement.refEditor);
            else if ($.QS("PageType").toLowerCase() == "htmltemplate") {
                var win = $("#ifrPreview")[0].contentWindow;
                if (win && win.document)
                    parent.PasteHtmlInEditor($(win.document.documentElement).html(), frameElement.refEditor);
            }
            parent.$("#" + $(window.frameElement).closest(".Popup").attr("id")).RemovePopup();
        }

        function onClientFileUploaded(sender, args) {
            if ($("#<%=fileUpload.ClientID%>ListContainer").children().length == 2)
                $("#<%=fileUpload.ClientID%>ListContainer").find(".ruFileWrap").removeClass("ruUploadProgress")
            $(args.get_row()).remove();

            var currFolder = getFolderPath(currentFolder);
            var fileName = args.get_fileInfo().FileName;
            var folder = getNodeFromPath(args.get_fileInfo().Target, $find("<%=tvFiles.ClientID%>"));
            var ext = fileName.substring(fileName.lastIndexOf(".") + 1);
            var isImg = ",gif,jpg,jpe*,png,bmp,dib,tif,wmf,ras,eps,pcx,pcd,tga,".contains("," + ext + ",") || ext.contains("jpe");

            if (folder) {
                var newNode = getChildNodeByText(folder, fileName);
                if (newNode)
                    return;
                newNode = new Telerik.Web.UI.RadTreeNode();
                newNode.set_text(fileName);
                newNode.set_contentCssClass((isImg ? "ico-img" : "ico-txt"));
                newNode.get_attributes().setAttribute("IsFile", 1);
                newNode.get_attributes().setAttribute("IsImage", isImg ? 1 : 0);
                folder.get_nodes().add(newNode);

                if (currFolder.toLowerCase() == args.get_fileInfo().Target.toLowerCase() || (currFolder.indexOf("documents/")>-1 && args.get_fileInfo().Target.toLowerCase().indexOf("company documents") > -1)) {
                    var elem = $(sender.get_element());
                    _addRow(isImg ? "img" : "file", fileName);
                }
            }

        }

        function OnClientFileUploading(sender, args) {
            $("#<%=fileUpload.ClientID%>ListContainer").find(".ruFileWrap").addClass("ruUploadProgress")
            var obj = { Target: getFolderPath(currentFolder) };
            args.set_queryStringParams(obj);
        }

        function addFolder() {
            var row = $("#tblFileListHdr>THEAD").find("._tmplRow").clone();
            $("#tblFileList>TBODY").prepend(row.addClass("new-folder").removeClass("_tmplRow").show());
            var lnk = row.node(0).node(0).addClass("lnk-folder").hide();
            lnk.before($("#txtFileName").show().focus());
            $("#divFileListScr").scrollTop(0)
        }
        function saveFolder() {

            var txt = $("#txtFileName");
            if (txt.closest("TR").hasClass("new-folder") && txt.val().trim() == "") {
                $(document.body).append(txt);
                $("#tblFileList>TBODY").children(".new-folder").remove();
                return true;
            }
            if (txt.val().trim() == txt.next().html().trim()) {
                txt.hide().next().show();
                return true;
            }
            var newName = txt.val().toLowerCase().trim();
            if (newName=="" || newName.contains("\\") || newName.contains("/") || newName.contains(":")
                || newName.contains("*") || newName.contains("?") || newName.contains("\"") || newName.contains("<")
                || newName.contains(">") || newName.contains("|.")) {
                actMessage("Name should not contain invalid characters<br/> : * ? \" < > | / \ ", "alert");
                return false;
            }
            var obj = {};
            if (txt.closest("TR").hasClass("new-folder"))
                obj = { Type: "CreateFolder", Path: getFolderPath(currentFolder), Folder: txt.val(), au: $.QS("_au") };
            else if (txt.next().hasClass("lnk-folder"))
                obj = { Type: "RenameFolder", Path: getFolderPath(currentFolder), Name: txt.next().html(), NewName: txt.val(), au: $.QS("_au") };
            else
                obj = { Type: "RenameFile", Path: getFolderPath(currentFolder), Name: txt.next().html(), NewName: txt.val(), au: $.QS("_au") };
            folderSaving = true;
            PageMethods.FileManager(obj, function (result) {
                if (result["Success"] == true) {
                    if (txt.closest("TR").hasClass("new-folder")) {
                        txt.closest("TR").removeClass("new-folder");
                        var newNode = new Telerik.Web.UI.RadTreeNode();
                        newNode.set_text(txt.val());
                        newNode.set_contentCssClass("ico-folder");
                        newNode.get_attributes().setAttribute("IsFolder", 1);
                        currentFolder.get_nodes().add(newNode);
                    }
                    else {
                        var nodes = currentFolder.get_nodes();
                        var n = getChildNodeByText(currentFolder, txt.next().html());
                        if (n)
                            n.set_text(txt.val());
                    }
                    txt.hide().next().html(txt.val()).show();
                }
                else
                    actMessage(result["Error"], "alert");
                folderSaving = false;
            });
            return false;
        }
        function deleteRecord(a) {
            var tr = $(a).closest("tr");
            var lnk = tr.find(".text-link");
            if (!confirm("Do you wish to delete " + (lnk.hasClass("lnk-folder") ? "Folder" : "File") + " " + lnk.html() + "?"))
                return;
            var obj = { Type: "Delete" + (lnk.hasClass("lnk-folder") ? "Folder" : "File"), Path: getFolderPath(currentFolder), Name: lnk.html(), au: $.QS("_au") };

            PageMethods.FileManager(obj, function (result) {
                if (result["Success"] == true) {
                    tr.remove();
                    var n = getChildNodeByText(currentFolder, lnk.html());
                    if (n)
                        currentFolder.get_nodes().remove(n);
                }
                else
                    actMessage(result["Error"], "alert");
            });
        }
        function getChildNodeByText(node, text) {
            var nodes = node.get_nodes();
            for (var i = 0; i < nodes.get_count() ; i++) {
                var n = nodes.getNode(i);
                if (n.get_text() == text) {
                    return n;
                }
            }
            return null;
        }
        function getNodeFromPath(path, pNode) {
            var p = path.contains("/") ? path.substring(0, path.indexOf("/")) : path;
            var nodes = pNode.get_nodes();
            for (var i = 0; i < nodes.get_count() ; i++) {
                var n = nodes.getNode(i);
                if (n.get_text() == p) {
                    if (path.contains("/"))
                        return getNodeFromPath(path.substring(path.indexOf("/") + 1), n);
                    else
                        return n;
                }
            }
        }
        function getFolderPath(node) {
            var n = node;
            var path = "";
            while (true) {
                var t = n.get_text();
                if (n.get_attributes().getAttribute("IsCompany") == "1")
                    t = n.get_attributes().getAttribute("FolderPath");
                path = "/" + t + path;
                n = n.get_parent();
                if (n.get_level == undefined)
                    break;
            }
            return path.ltrim("/");
        }
    </script>


</asp:Content>
