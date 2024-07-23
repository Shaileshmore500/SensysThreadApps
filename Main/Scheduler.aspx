<%@ Page Language="C#" AutoEventWireup="true" UnobtrusiveValidationMode="None"  CodeBehind="Scheduler.aspx.cs" Inherits="SensysErp.Scheduler" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>
<!DOCTYPE html>

<html runat="server" id="htmlDoc" xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/modernizr.js")%>

    <%# HelperLib.Web.WebResources.GetResource("~/css/normalize.css")%>
    <%# HelperLib.Web.WebResources.GetResource("~/fonts/font.css")%>
    <%#QS("_rspv")=="1"?"":("<link id='lnkTheme' href='../Css/"+ErpModel.Globals.Users.ThemeName+"/jquery-ui-1.10.3.custom.css' rel='stylesheet' type='text/css' />")%>
    <%# HelperLib.Web.WebResources.GetResource("~/css/CustomControl/CustomControl.css")%>


    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/json2.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/System.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jquery-ui-1.10.3.custom.min.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/jqHelper.js")%>

    
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/UiHelper.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/CustomControls.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/moment.min.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Erp.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Ui.js")%>
    <%# HelperLib.Web.WebResources.GetResource("~/Scripts/Fn.js")%>
    <script>
        function changeTheme(theme) {
            $("#lnkTheme").attr("href", "../Css/" + theme + "/jquery-ui-1.10.3.custom.css?ts=" + (new Date() / 1))
            $(document.documentElement).removeClass("GreyTheme DarkTheme BlueGlossTheme GreenTheme OrangeTheme RedTheme").addClass(theme + "Theme")
        }

    </script>
    <style>
      .progress {
    position: absolute;
    height: 4px;
    display: block;
    width: 100%;
    background-color: var(--secondary-color-lightest);
    border-radius: 2px;
    overflow: hidden;
    top: 48px;
    z-index:1000;
}
      .progress .indeterminate {
    background-color: var(--secondary-color);
}
      .progress .indeterminate:before {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    -webkit-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}
      .progress .indeterminate:after {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    -webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    -webkit-animation-delay: 1.15s;
    animation-delay: 1.15s;
}

 

@keyframes indeterminate {
  0% {
    left: -35%;
    right: 100%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: 100%;
    right: -90%;
  }
}

@-webkit-keyframes indeterminate-short {
  0% {
    left: -200%;
    right: 100%;
  }
  60% {
    left: 107%;
    right: -8%;
  }
  100% {
    left: 107%;
    right: -8%;
  }
}

@keyframes indeterminate-short {
  0% {
    left: -200%;
    right: 100%;
  }
  60% {
    left: 107%;
    right: -8%;
  }
  100% {
    left: 107%;
    right: -8%;
  }
}
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <asp:ScriptManager ID="ScriptManager1" runat="server" EnablePageMethods="true">
        </asp:ScriptManager>
        <%= HelperLib.Web.WebResources.GetResource("~/css/base.css")%>
       <%=QS("_rspv")=="1"?HelperLib.Web.WebResources.GetResource("~/css/main.css"): HelperLib.Web.WebResources.GetResource("~/css/form.css")%>
        <style><%= ErpModel.Globals.Users.CustomTheme%></style>
         <%= Erp.Base.Utils.Utils.GetResourcePath(ErpModel.Globals.AppManager.CurrentAppScriptResource,true)%>
        <%= Erp.Base.Utils.Utils.GetResourcePath(ErpModel.Globals.AppManager.CurrentAppCssResource,true)%>

        <hlp:ActionMessage ID="ActionMessage1" runat="server" />
        <div  id="divCtr" class="viewport">
            <div id="header-progressBar" class="progress" style="display: none;"><div class="indeterminate"></div></div>
            <asp:DropDownList id="ddlCalendar" style="max-width: 120px;vertical-align: middle;padding: 3px;float: left;margin-right: 6px;height: 24px;" runat="server"></asp:DropDownList>
           
            <telerik:RadScheduler runat="server" ID="RadScheduler1" SelectedView="MonthView"  OnClientNavigationComplete="OnClientNavigationComplete"
            
            OnClientAppointmentsPopulating="OnClientAppointmentsPopulating" OnClientAppointmentsPopulated="OnClientAppointmentsPopulated"  OnClientAppointmentWebServiceInserting="OnClientAppointmentWebServiceInserting" OnClientAppointmentContextMenu="OnClientAppointmentContextMenu"
            OnClientAppointmentCreated="OnClientAppointmentCreated"  OnClientAppointmentClick="OnClientAppointmentClick"    OnClientAppointmentInserting="OnClientAppointmentInserting"
            OnClientTimeSlotContextMenu="OnClientTimeSlotContextMenu" OnClientAppointmentMoveStart="OnClientAppointmentMoveStart"  OnClientTimeSlotContextMenuItemClicked="OnClientTimeSlotContextMenuItemClicked"     
            DataReminderField="Reminder" StartEditingInAdvancedForm="true" 
            EnableDescriptionField="true" OverflowBehavior="Expand" AppointmentStyleMode="Default" Skin="Bootstrap" ShowFullTime="true"
            ShowAllDayRow="False">
            <TimelineView UserSelectable="false" />
            <AgendaView UserSelectable="true"  NumberOfDays="14"/>
            <Reminders Enabled="true"></Reminders>
            <AdvancedForm Modal="true"></AdvancedForm>
            <TimelineView GroupBy="Calendar" GroupingDirection="Vertical"></TimelineView>
            <WebServiceSettings Path="SchedulerService.asmx" ResourcePopulationMode="ClientSide">
            </WebServiceSettings>
                <AppointmentContextMenus>
                    <telerik:RadSchedulerContextMenu runat="server"  ID="AppointmentContextMenu">
                    <Items>
                        <telerik:RadMenuItem Text="Edit" Value="CommandEdit">
                        </telerik:RadMenuItem>
                        <telerik:RadMenuItem Text="Delete" Value="CommandDelete">
                        </telerik:RadMenuItem>
                    </Items>
                </telerik:RadSchedulerContextMenu>
                </AppointmentContextMenus>
            <TimeSlotContextMenus>
                <telerik:RadSchedulerContextMenu runat="server" OnLoad="SchedulerTimeSlotContextMenu_Load" ID="SchedulerTimeSlotContextMenu">
                    <Items>
                        <telerik:RadMenuItem Text="New Appointment" Value="CommandAddAppointment">
                        </telerik:RadMenuItem>                        
                        <telerik:RadMenuItem IsSeparator="true">
                        </telerik:RadMenuItem>                        
                        <telerik:RadMenuItem Text="Go to today" Value="CommandGoToToday">
                        </telerik:RadMenuItem>
                    </Items>
                </telerik:RadSchedulerContextMenu>
            </TimeSlotContextMenus>
            <AppointmentContextMenuSettings EnableDefault="true" />
        </telerik:RadScheduler>
            <asp:Literal Mode="PassThrough" ID="ltrScript" runat="server"></asp:Literal>
        </div>
        <div id="ifrCtr">
            <iframe style="height: 100%; width: 100%;" id="ifrDetailsWindow" showtools="1"  frameborder="0"></iframe>
        </div>
    </form>
    <style>
         #ifrCtr
        {
            position: absolute;
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 5px;
            background-color: #fff;
            display: none;
           
        }
        .RadScheduler_Glow .rsSelectedSlot {
            background: #106f6b;
        }
        .RadScheduler_Bootstrap .rsSelectedSlot {
            background: #fff4dc;
        }
        .RadScheduler_Office2007 .rsAptContent.hasStyle {
            background:none;
            background-image:none !important;
        }
        .RadScheduler_Bootstrap .rsModalBgTopLeft, .RadScheduler_Bootstrap .rsModalBgTopRight, .RadScheduler_Bootstrap .rsModalBgBottomLeft, .RadScheduler_Bootstrap .rsModalBgBottomRight {
            display: initial;
        }
        .noDelete .rsAptDelete {
            display:none !important;
        }
        .noEdit .rsAptResize {
            display:none !important;
        }
        .hidden.RadMenu {
            display:none !important;
        }

        .touch #ddlCalendar {
            float: none !important;
            display: block !important;
            width: 100%  !important;
            max-width: initial  !important;
            padding: 10px  !important;
            height: initial  !important;
        }

        .rsApt {
            cursor:pointer;
        }
        .rsTopWrap.rsOverflowExpand {
            min-width:100%;
        }
    </style>
    <script>
        Telerik.Web.UI.RadScheduler.prototype._selectDate= function(k) {
            var j = $find(this.get_element().id + "_SelectedDateCalendar");
            this.set_selectedDate(k);
            if (j) {
                this._preventCalendarNavigate = true;
                j.selectDate([k.getFullYear(), k.getMonth() + 1, k.getDate()], true);
                this._preventCalendarNavigate = false;
            }
        }

        Telerik.Web.UI.RadScheduler.prototype._onRowSelectionMouseUp = function (j) {
            this._abortRowSelection();           
            window.setTimeout(function () {
                var sl = radScheduler.get_selectedSlots();
                if (sl.length <= 1)
                    return;
                var el = sl[sl.length - 1].get_domElement();
                radScheduler._onCellContextMenu({ target: el });
                $("#<%=RadScheduler1.ClientID%>_SchedulerTimeSlotContextMenu_detached").show().position({
                    my: "left top", at: "middle middle", of: el
                })
            }, 10);
        }
        function toggleDetailsForm(show, url) {
            var ifr = $("#ifrCtr");
            if (show) {
                $("#divCtr").data("scrollTop", $(document.body).scrollTop());
                $("#divCtr").css("opacity", 0.3);
                ifr.node(0).setVisible(false);
                if (ifr.node(0)[0].contentWindow && ifr.node(0)[0].contentWindow.document)
                    $(ifr.node(0)[0].contentWindow.document.body).setVisible(false);
                ifr.stop(true, true).css("top", $(window).height()).show().animate({ top: 0 }, 250, "easeInSine", function () { $(this).node(0).setVisible(true).attr("src", url); $("#divCtr").hide(); })
            }
            else {

                $("#divCtr").show();
                $("#divCtr").css("opacity", "");
                ifr.stop(true, true).animate({ top: ifr.outerHeight() }, 250, "easeInSine", function () { $("#ifrCtr").hide(); $(document.body).scrollTop($.defaultVal($("#divCtr").data("scrollTop"), 0)); })
                $find("<%=RadScheduler1.ClientID%>").repaint();
            }
        }
        var radScheduler = null
        if ($.isEmpty(window.__calType))
            window.__calType = $("#ddlCalendar").val();
        function pageLoad() {
            $("#RadScheduler1").children(".rsTopWrap.rsOverflowExpand").children(".rsHeader").find("ul").prepend($("#ddlCalendar"));
            $("#ddlCalendar").on("change", function () { window.__calType = $("#ddlCalendar").val(); $find("<%=RadScheduler1.ClientID%>").rebind(); })
           

            radScheduler = $find("<%=RadScheduler1.ClientID%>");
            
            radScheduler._showAdvancedInsertForm = function (app, b) {
                var obj = { "Action": "ADDFORM", "Entity": "tbl_CORE_Appointments", "Form": "Appointment" };
                ctxStartTime = app.get_start(), ctxEndTime = app.get_end();
                opentaskwindow("add", app, obj);
                radScheduler.hideInlineForm();
                return false;
            }
            radScheduler.showAdvancedEditForm = function (app) {              
                var resList = app.get_resources();
                var src = resList.getResourceByType("source").get_text();
                var obj = { "Action": "EDITFORM", "Entity": "tbl_CORE_Appointments", "Form": "Appointment" };
                if (src != "system") {
                    var action = resList.getResourceByType("editaction");
                    obj = (action && action.get_text() ? JSON.parse(action.get_text()) : "");
                }
                if (obj)
                    opentaskwindow("edit", app, obj);
                radScheduler.hideInlineForm();
                return false;
            }
        }

        
        function opentaskwindow(mode,app,obj) {
            var loc = !frameElement || $(frameElement).outerHeight() > 600 && $(frameElement).outerWidth() > 800 ? "Popup" : "Self";
            obj.Location = loc; obj.PopHt = 440; obj.PopWd = 700;
            if (mode == "edit")
                obj.RecordID = app.get_recurrenceState() == 2 ? app.get_recurrenceParentID() : app.get_id();
            else {
                obj.Params = Fn.IsEmpty(obj.Params) ? "" : obj.Params + "&";
                var ct = $("#ddlCalendar").val();
                obj.Params = obj.Params + (!Fn.IsEmpty(ct)?"calType="+ct+"&":"")+"fullDay=" + (ctxStartTime.getHours() == 0 && ctxStartTime.getMinutes() == 0 ? 1 : 0) + "&apStart=" + Fn.Format(ctxStartTime, "yyyy-MM-dd hh:mm tt") + "&apStop=" + Fn.Format(ctxEndTime, "yyyy-MM-dd hh:mm tt");
            }
            Erp.OpenWindow(obj);
        }
        function RefreshFields() {
            radScheduler.rebind();
        }

        function OnClientAppointmentClick(sender, eventArgs) {
            var app = eventArgs.get_appointment();
            var resList = app.get_resources();
            var src = resList.getResourceByType("source").get_text();
            var obj = { "Action": "EDITFORM", "Entity": "tbl_CORE_Appointments", "Form": "Appointment" };
            if (src != "system") {
                var action = resList.getResourceByType("editaction");
                obj = (action && action.get_text() ? JSON.parse(action.get_text()) : "");
            }
            if (obj)
                opentaskwindow("edit", app, obj);
        }
        function OnClientAppointmentContextMenu(sender, eventArgs) {
            $("#<%=RadScheduler1.ClientID%>_AppointmentContextMenu_detached").removeClass("hidden")
            var li = $("#<%=RadScheduler1.ClientID%>_AppointmentContextMenu_detached").find(".rmItem");
            li.show();
            var app = $(eventArgs.get_appointment().get_element());
            if (app.hasClass("noEdit"))
                li.eq(0).hide();
            if (app.hasClass("noDelete"))
                li.eq(1).hide();
            if (app.hasClass("noEdit") && app.hasClass("noDelete"))
                $("#<%=RadScheduler1.ClientID%>_AppointmentContextMenu_detached").addClass("hidden");

        }
        function OnClientAppointmentEditing(sender, eventArgs) {
         
        }
        function OnClientAppointmentInserting(sender, eventArgs) {
            var sel = $("#ddlCalendar").selectedItem();
            if (sel.attr("noAdd") == "1")
                eventArgs.set_cancel(true);
            if (!$.isEmpty(sel.attr("action"))) {
                eventArgs.set_cancel(true);
                obj = JSON.parse(sel.attr("action"));
                if (obj) {
                    ctxStartTime = eventArgs.get_targetSlot().get_startTime();
                    ctxEndTime = eventArgs.get_targetSlot().get_endTime();
                    opentaskwindow("add", null, obj);
                }
            }
        }
        function OnClientAppointmentWebServiceInserting(sender, eventArgs) {
            var v = $("#ddlCalendar").val();
            if (v == "All")
                v = "Default";
            if (v.indexOf(":") > -1)
                v = v.split(':')[1];
            eventArgs.get_appointment().get_attributes().setAttribute("CalendarType", v)
        }
        function OnClientAppointmentCreated(sender, eventArgs) {
            var app = eventArgs.get_appointment();
            var resList = app.get_resources();
            var src = resList.getResourceByType("source");
            src = (src ? src.get_text() : "system");
            var style = resList.getResourceByType("style");
            var inf = resList.getResourceByType("info");
            var cmd = resList.getResourceByType("cmd");
            inf = (inf ? JSON.parse(inf.get_text()) : "");
            if (style && !Fn.IsEmpty(style.get_text())) {
                if (style.get_text().indexOf("<div") > -1) {
                    var tmpl = $(style.get_text().Replace("#=subject#", app.get_subject()).Replace("#=description#", app.get_description()));                    
                    for (var i = 0; i < tmpl.length; i++) {
                        if (tmpl.eq(i).prop("tagName") == "STYLE" || tmpl.eq(i).prop("tagName") == "SCRIPT") {
                            var s = tmpl.eq(i);
                            if (!Fn.IsEmpty(s.attr("id"))) {
                                if ($("#" + s.attr("id")).length == 0)
                                    $(document.body).append(s);
                            }
                            ////else
                            ////    $(document.body).append(s);
                        }
                        
                    }
                    $(app.get_element()).find(".rsAptContent").empty().append(tmpl);
                }
                else
                    $(app.get_element()).find(".rsAptContent").addClass("hasStyle").attr("style", style.get_text());
            }
            if (cmd) {
                $(app.get_element()).addClass(cmd.get_text());              
            }
            if (src != "system") {                
                var arr = app.get_elements(); if (!arr) arr = [];
                arr.push(app.get_element());
                for (var i = 0; i < arr.length; i++) {
                    $(arr[i]).addClass(inf.edt == 1 ? "" : "noEdit");
                    $(arr[i]).addClass(inf.del == 1 ? "" : "noDelete");
                }
            }
        }

        function OnClientTimeSlotContextMenuItemClicked(sender, eventArgs) {
            var rm = eventArgs.get_item();
            if (rm.get_value() == "CommandAddAppointment" || rm.get_value() == "CommandGoToToday")
                return;
            var action = rm.get_attributes().getAttribute("action");
            if (Fn.IsEmpty(action))
                return;
            action = JSON.parse(action);
            opentaskwindow("add", null, action);
            //debugger;
        }
        var ctxStartTime = null, ctxEndTime = null, ctxAllDay = null;
        function OnClientTimeSlotContextMenu(sender, eventArgs) {
            ctxStartTime = eventArgs.get_startSlot().get_startTime();
            ctxEndTime = eventArgs.get_endSlot().get_endTime();
            ctxAllDay=eventArgs.get_isAllDay();
            //debugger;
        }
        function OnClientAppointmentDoubleClick(sender, eventArgs) {
            eventArgs.set_cancel(true)
        }
        function OnClientAppointmentsPopulating(sender, eventArgs) {
            if ($("#ddlCalendar").children().length <= 0 && $.isEmpty(window.__calType)) {
                eventArgs.set_cancel(true);
                return;
            }
            
            $("#header-progressBar").show()
            //debugger;            
            //eventArgs.get_schedulerInfo().CategoryNames = ["asd", "qwe", "pqr"];
            eventArgs.get_schedulerInfo().CalendarType = window.__calType;
            if (!$.isEmpty(window.__schQS))
                eventArgs.get_schedulerInfo().QS = window.__schQS;
            else
                eventArgs.get_schedulerInfo().QS = window.location.search;
            //categoryNames = new Array(); //clear the array

        }
        function OnClientAppointmentsPopulated() {
            $("#header-progressBar").hide()
        }

        function OnClientAppointmentMoveStart(sender, args) {
            var app = args.get_appointment();
            if ($(app.get_element()).hasClass("noEdit"))
                args.set_cancel(true);
        }
        function OnClientNavigationComplete(sender, args) {
            var cmd = args.get_command();
            if (cmd == 0 || cmd == 1 || cmd == 2 || cmd == 5) {
                Erp.SetUserPreference('SchedulerInfo', { "SelectedView": cmd }, function () { });
            }
        }

        function RebindScheduler(qs, calType) {
            if (typeof calType !="undefined") { $("#ddlCalendar").val(calType); window.__calType = calType; }
            window.__schQS = qs;
            $find("RadScheduler1").rebind();
        }
    </script>

</body>
</html>

