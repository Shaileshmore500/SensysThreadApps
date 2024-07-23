<%@ Page Language="C#" MasterPageFile="~/Meta/MetaMain.Master" AutoEventWireup="true"
    CodeBehind="Support_RegisterCompany.aspx.cs" Inherits=" SensysErp.Meta.Support_RegisterCompany"
    Title="Register Company" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

    <script type="text/javascript">
        var PageMode = "MDI";
        var IsCompanyRegistered = 0, CompanyGUID = "", CompanyMachineCode = "", CompanyUnlockCode = "";


        document.documentElement.style.overflowX = "hidden"
        document.documentElement.style.overflowY = "hidden"
        $(document.documentElement).keydown(function (event) { checkKeys(event) });
        var DataChanged = false;



        function checkKeys(event) {
            if (event.keyCode == 84 && event.altKey)
                TotalDeRegisterComp();
        }


        if (window.opener != null && typeof window.opener.registerCompanyFinish != "undefined") {
            $(window).unload(function () { window.opener.registerCompanyFinish(); });
        }


    </script>

    <style>
        .autoregBtn
        {
            text-decoration: none;
            height: 45px;
            background-color: #DDD;
            font-size: 16px;
            color: #000;
            min-width: 200px;
            display: inline-block;
            font-family: nunitoregular;
            text-shadow: 1px 1px 1px #FFF;
            outline: none !important;
        }

            .autoregBtn span
            {
                font-family: FontAwesome;
                margin-right: 8px;
                display: inline-block;
                background-color: #808080;
                height: 100%;
                width: 40px;
                font-size: 25px;
                vertical-align: middle;
                line-height: 45px;
                text-align: center;
                text-shadow: none;
            }

            .autoregBtn.prog,
            .autoregBtn:hover
            {
                transition: 0.75s !important;
                -webkit-transition: 0.75s !important;
                -moz-transition: 0.75s !important;
                background-color: #00B2FF;
                color: #FFF;
                text-shadow: 1px 1px 1px #000;
            }

                .autoregBtn.prog span,
                .autoregBtn:hover span
                {
                    transition: 0.35s !important;
                    -webkit-transition: 0.35s !important;
                    -moz-transition: 0.35s !important;
                    background-color: #335974;
                    color: #00E2FF;
                    text-shadow: 2px 2px 38px #0FF;
                }

                .autoregBtn.prog.dereg:hover span,
                .autoregBtn.prog span
                {
                    color: transparent !important;
                    background-repeat: no-repeat;
                    background-image: url(../images/loader_small.gif);
                    background-position: 12px 16px;
                }

            .autoregBtn.dereg span
            {
                color: #FF9100;
            }

            .autoregBtn.prog.dereg,
            .autoregBtn.dereg:hover
            {
                background-color: #FF3000 !important;
            }

                .autoregBtn.dereg:hover span
                {
                    color: #FF9100 !important;
                    text-shadow: 2px 2px 38px #FF9B00 !important;
                }

        .lblMsg
        {
            white-space: nowrap;
            font-family: nunitoregular;
            font-size: 14px;
            margin-left: 65px;
            margin-top: 10px;
            display: block;
            color: #4D4D4D;
        }

        .DarkTheme .lblMsg
        {
            color: #C8C8C8;
        }

        .DarkTheme #fldSet
        {
            color1: #fff;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <asp:HiddenField ID="hdnMasterID" runat="server" />
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
            <asp:Panel Visible="false" SkinID="PnlNoSkin" Height="97%" runat="server" ID="pnlMain">
                <div id="divRegComp">
                    <span style="font-family: opensans; font-size: 26px; color: #F44;"><span style="font-family: FontAwesome; margin-right: 8px">&#xf071;</span>This company is not registered.</span>
                    <asp:Label ID="lblReg" runat="server" CssClass="lblMsg" Text="Before activating any applications you need to<br/>obtain a <b>Registration Number</b> for this company,<br/>You can obtain this either through automatic or manual registration process."></asp:Label>
                    <br />
                    <span style="margin-top: 7px; margin-left: 65px; display: block;"><a href="javascript:void(0)" class="IconBtn" id="aAutoReg"
                        style="" onclick="AutoRegister(this)"><span>&#xf021;</span>Auto Registration</a> <a class="IconBtn"
                            style="margin-left: 10px" id="aManualReg" onclick="ShowReg(this)" href="javascript:void(0)"><span>&#xf0ad;</span>Manual Registration</a>
                        <br />
                        <span class="ManualReg" style="display: none; margin-top: 6px; width: 95%" id="lblManualReg">
                            <fieldset id="fldSet" style="width: 394px;">
                                <legend style="font-size: 14px; font-family: nunitoregular;">Manual Registration </legend>
                                <telerik:RadTextBox ShowButton="true" Style="margin-top: 5px; margin-bottom: 5px"
                                    Width="300px" ClientEvents-OnButtonClick="ClaimGUID" Skin="Outlook" ID="rtxtGuid"
                                    runat="server" EmptyMessage="Enter Company Identification Code Here:" InvalidStyleDuration="100">
                                </telerik:RadTextBox>
                                <br />
                                <span style="font-family: nunitoregular; margin-top: 5px; display: block">Company Machine Code:</span>
                                <asp:Label Style="font-family: nunitoregular; color: #00156E; margin-top: 5px; height: 16px; width: 273px; padding: 3px; display: block; background-color: #E2E2E2;"
                                    runat="server" ID="lblCompMacCode" Text="" SkinID="LblNoSkin"></asp:Label>
                                <telerik:RadTextBox ShowButton="true" Width="300px" Style="margin-top: 20px; margin-bottom: 5px"
                                    ClientEvents-OnButtonClick="ManualRegister" Skin="Outlook" ID="rtxtReg" runat="server"
                                    EmptyMessage="Enter Company Registration Number Here." InvalidStyleDuration="100">
                                </telerik:RadTextBox>
                            </fieldset>
                        </span></span>
                </div>
                <a href="javascript:void(0)" style="margin-top: 20px; display: inline-block" class="default-link" onclick="$(this).next().toggle()">Software Information</a>
                <asp:Panel ID="pnlSwinfoCtr" Style="display: none" runat="server"></asp:Panel>
            </asp:Panel>

            <asp:Panel ID="divRegDetails" Visible="false" runat="server">
                <span style="font-family: opensans; font-size: 26px; color: #00BA81;"><span style="font-family: FontAwesome; margin-right: 8px">&#xf05a;</span>Company Registration Information</span>
                <div style="margin-left: 75px;">
                    <asp:Panel ID="pnlSwInfo" runat="server">
                        <asp:Label Style="display: block; margin-top: 5px; font-size: 14px; font-family: nunitoregular;" runat="server" ID="lblSoft">Software Version : </asp:Label>
                        <asp:Label Style="display: block; margin-top: 5px; font-size: 14px; font-family: nunitoregular;" runat="server" ID="lblData">Data Version : </asp:Label>
                        <asp:Label Style="display: block; margin-top: 5px; font-size: 14px; font-family: nunitoregular;" runat="server" ID="lblCd">Cd-Key : </asp:Label>
                        <asp:Label Style="display: block; margin-top: 5px; font-size: 14px; font-family: nunitoregular;" runat="server" ID="lblHdsn">HDSN : </asp:Label>
                        <asp:Label Style="display: block; margin-top: 5px; font-size: 14px; font-family: nunitoregular;" runat="server" ID="lblUnlockCode">Unlock Code : </asp:Label>
                    </asp:Panel>
                    <br />
                    <asp:Label Style="display: block; margin-top: 5px; font-size: 14px; font-family: nunitoregular;" runat="server" ID="lblGuid">Company Identification Code : </asp:Label>
                    <asp:Label Style="display: block; margin-top: 5px; font-size: 14px; font-family: nunitoregular;" runat="server" ID="lblMacCode">Company Machine Code : </asp:Label>
                    <asp:Label Style="display: block; margin-top: 5px; margin-bottom: 20px; font-size: 14px; font-family: nunitoregular;" runat="server" ID="lblUnlock">Company Registration Number : </asp:Label>
                    <a href="javascript:void(0)" class="IconBtn RedButton" id="aDereg"
                        style="" onclick="DeRegisterComp()"><span>&#xf00d;</span>Auto De-Register</a> <a class="IconBtn RedButton"
                            style="margin-left: 10px" id="aDeregM" onclick="ManualDeRegisterComp(this)" href="javascript:void(0)"><span>&#xf00d;</span>Manual De-Register</a>
                </div>
            </asp:Panel>
        </ContentTemplate>
    </asp:UpdatePanel>
    <style>
    </style>

    </script>

    <!--User Functions -->

    <script type="text/javascript">

        var Inprocess = false;
        var aManualReg = $('#aManualReg');
        var aAutoReg = $('#aAutoReg');
        var aDereg = $('#aDereg');
        var aDeregM = $('#aDeregM');
        var lblCompMacCode = $('#<%=lblCompMacCode.ClientID %>');
var lblManualReg = $('#lblManualReg');

var rtxtGuid = null, rtxtReg = null;
function pageLoad() {

    rtxtGuid = $find('<%=rtxtGuid.ClientID%>');
    rtxtReg = $find('<%=rtxtReg.ClientID%>');
}


function AutoRegister(btn) {
    if (aAutoReg.hasClass("prog") || aManualReg.hasClass("prog"))
        return;
    btn = $(btn)
    btn.setEnable(false);
    aManualReg.setEnable(false);
    btn.addClass("prog");
    lblManualReg.hide();
    PageMethods.ExecuteCommand("AutoRegister", "", CompanyName, CompanyCode, CompanyGUID, CompanyMachineCode, CompanyUnlockCode, CompanyID, "", IPAdd, ExecuteCommandCallback, ExecuteCommandFailed);

}
function ClaimGUID(object, eventArgs) {
    if (!object.get_enabled())
        return;
    var str = object.get_value();
    // var regGuid = /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/

    if (str == "")//|| !regGuid.test(str)){
    {
        actMessage("Enter company identification number.", "alert", 20);
        return;
    }

    aManualReg.setEnable(false);
    aAutoReg.setEnable(false);
    aManualReg.addClass("prog");
    object.disable();
    PageMethods.ExecuteCommand("ClaimGUID", "", CompanyName, CompanyCode, str, CompanyMachineCode, CompanyUnlockCode, CompanyID, str, IPAdd, ExecuteCommandCallback, ExecuteCommandFailed);

}

function ManualRegister(object, eventArgs) {
    if (!object.get_enabled())
        return;
    var str = object.get_value();
    // var regGuid = /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/

    if (str == "")//|| !regGuid.test(str)){
    {
        actMessage("Enter company registration number.", "alert", 20);
        return;
    }

    aManualReg.setEnable(false);
    aAutoReg.setEnable(false);
    aManualReg.addClass("prog");
    object.set_enabled(false);
    PageMethods.ExecuteCommand("ManualRegister", "", CompanyName, CompanyCode, CompanyGUID, CompanyMachineCode, str, CompanyID, str, IPAdd, ExecuteCommandCallback, ExecuteCommandFailed);

}

function DeRegisterComp() {
    if (aDereg.hasClass("prog") || aDeregM.hasClass("prog"))
        return;
    if (confirm('De-registering the company will disable all registered resources. Do you wish to continue?')) {
        aDereg.addClass("prog");
        PageMethods.ExecuteCommand("DeRegisterComp", "", CompanyName, CompanyCode, CompanyGUID, CompanyMachineCode, CompanyUnlockCode, CompanyID, CompanyGUID, IPAdd, ExecuteCommandCallback, ExecuteCommandFailed);
    }
}
function ManualDeRegisterComp() {
    if (aDereg.hasClass("prog") || aDeregM.hasClass("prog"))
        return;
    if (confirm('De-registering the company will disable all installed apps. Do you wish to continue?')) {
        aDeregM.addClass("prog");
        PageMethods.ExecuteCommand("ManualDeRegisterComp", "", CompanyName, CompanyCode, CompanyGUID, CompanyMachineCode, CompanyUnlockCode, CompanyID, CompanyGUID, IPAdd, ExecuteCommandCallback, ExecuteCommandFailed);
    }
}
function TotalDeRegisterComp() {
    if (confirm('De-registering the company will disable all installed apps. Do you wish to continue?')) {
        PageMethods.ExecuteCommand("TotalDeRegisterComp", "", CompanyName, CompanyCode, CompanyGUID, CompanyMachineCode, CompanyUnlockCode, CompanyID, CompanyGUID, IPAdd, ExecuteCommandCallback, ExecuteCommandFailed);
    }
}
function ShowReg(btn) {
    if (aAutoReg.hasClass("prog") || aManualReg.hasClass("prog"))
        return;
    if (!lblManualReg.isVisible()) {
        lblManualReg.css("display", "inline-block");
        if (CompanyGUID == "") {
            rtxtReg.disable();
            rtxtGuid.enable();
        }
        else {
            rtxtGuid.set_value(CompanyGUID);
            rtxtReg.enable();
            rtxtGuid.disable();
        }

    }
    else {
        lblManualReg.hide();
    }
}

function RefreshParent() {

}

function ShowResources() {
    if ($.QS("app") == "1") {
        window.location = "../main/view.aspx?1&EID=tbl_SYS_Config&_fc=Apps&_pt=V";
    }
}

ExecuteCommandCallback = function (result) {
    Inprocess = false;
    if (result == null)
        return;
    //  alert(result[0])
    if (result[0] == "AutoRegister") {
        aAutoReg.setEnable(true);
        aManualReg.setEnable(true);
        aAutoReg.removeClass("prog");
        if (result[1] == "1") {
            IsCompanyRegistered = 1;
            CompanyGUID = result[3];
            CompanyMachineCode = result[4];
            CompanyUnlockCode = result[5];

            ShowResources();
        }
        else
            actMessage(result[2], "alert", 20);
    }
    else if (result[0] == "ClaimGUID") {
        aManualReg.setEnable(true);
        aAutoReg.setEnable(true);
        aManualReg.removeClass("prog");
        if (result[1] == "1") {
            IsCompanyRegistered = 1;
            CompanyMachineCode = result[3];
            CompanyGUID = result[4];
            rtxtGuid.disable();
            rtxtReg.enable();
            lblCompMacCode.html(CompanyMachineCode);
        }
        else {
            rtxtGuid.enable();
            actMessage(result[2], "alert", 20);
        }
    }
    else if (result[0] == "ManualRegister") {
        aAutoReg.setEnable(true);
        aManualReg.setEnable(true);
        aManualReg.removeClass("prog");
        if (result[1] == "1") {
            CompanyUnlockCode = result[3];
            ShowResources();
        }
        else {
            rtxtReg.enable();
            actMessage(result[2], "alert", 20);
        }
    }
    else if (result[0] == "DeRegisterComp") {
        if (result[1] == "1") {
            actMessage("Company Unregistered successfully", "success", 20);

            CompanyMachineCode = "";
            CompanyUnlockCode = "";
            window.location = window.location;
        }
        else {
            actMessage(result[2], "alert", 20);
            aDereg.removeClass("prog");
        }
    }
    else if (result[0] == "ManualDeRegisterComp") {
        if (result[1] == "1") {
            actMessage("Company Unregistered successfully.Please inform our support department so that changes can be registered online.", "success", 20);
            aDeregM.setEnable(true);
            $('#divRegComp').show();
            $('#divAppRes').hide();
            CompanyMachineCode = "";
            CompanyUnlockCode = "";
            window.location = window.location;
        }
        else {
            actMessage(result[2], "alert", 20);
            aDeregM.removeClass("prog");
        }
    }
    else if (result[0] == "TotalDeRegisterComp") {
        if (result[1] == "1") {
            actMessage("Company Unregistered successfully", "success", 20);
            CompanyGUID = "";
            CompanyMachineCode = "";
            CompanyUnlockCode = "";
            rtxtGuid.set_value("");
            rtxtGuid.enable();
            rtxtReg.disable();
            lblCompMacCode.html("");
            window.location = window.location;
        }
        else
            actMessage(result[2], "alert", 20);
    }
}
ExecuteCommandFailed = function (error, userContext, methodName) {
    Inprocess = false;
    if (error)
        actMessage(error._message, "error", 20);

}


    </script>

</asp:Content>
