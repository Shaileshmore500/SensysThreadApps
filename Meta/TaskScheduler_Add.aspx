<%@ Page Language="C#" AutoEventWireup="true"  Title="Task Scheduler" MasterPageFile="~/Meta/MetaMain.Master" CodeBehind="TaskScheduler_Add.aspx.cs" Inherits="SensysErp.Meta.TaskScheduler_Add" ValidateRequest="false" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>


<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">


        window.ht = 500;
        window.wd = 600;

        var RecurrenceData = {};
        var ActionData = {};

    </script>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <hlp:ActionMessage ID="ActionMessage1" runat="server" />
            
            <div class="div-form">

                <telerik:RadTabStrip ID="rtabTaskScheduler" runat="server" MultiPageID="rmpTaskScheduler">
                    <Tabs>
                        <telerik:RadTab runat="server" PageViewID="tabGeneral" Text="General" Value="general" Selected="true"></telerik:RadTab>
                        <telerik:RadTab runat="server" PageViewID="tabTrigger" Text="Trigger" Value="Trigger"></telerik:RadTab>
                        <telerik:RadTab runat="server" PageViewID="tabAction" Text="Action" Value="Action"></telerik:RadTab>
                    </Tabs>
                </telerik:RadTabStrip>

                <telerik:RadMultiPage Height="350px" SelectedIndex="0" ID="rmpTaskScheduler" runat="server">
                    <telerik:RadPageView ID="tabGeneral" runat="server">
                        <table id="tdvalue" class="table-form" style="">

                            <tr>
                                <td class="td-label">
                                    <asp:Label ID="lblTaskName" runat="server" Text="Task Name"></asp:Label>
                                </td>
                                <td class="td-value">
                                    <asp:TextBox ID="txtTaskName" runat="server" Width="450px">
                                    </asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td class="td-label">
                                    <asp:Label ID="lblTaskDesc" runat="server" Text="Task Description"></asp:Label>
                                </td>
                                <td class="td-value">
                                    <asp:TextBox ID="txtTaskDesc" TextMode="MultiLine" Rows="3" runat="server" Width="450px">
                                    </asp:TextBox>
                                </td>
                            </tr>
                             <tr>
                                <td class="td-label">
                                    <asp:Label ID="Label1" runat="server" Text="Entity"></asp:Label>
                                </td>
                                <td class="td-value">
                                    <asp:TextBox ID="txtEntity" ReadOnly="true"  onclick="showEntityList(this)"  runat="server" Width="250px">
                                    </asp:TextBox>
                                    <a onclick="showEntityFilter(this)" style="display:none" class="dtlfilter" title="Filter Records" href="javascript:void(0)">&nbsp;Filter</a>
                                    <asp:HiddenField ID="hdnFilter"  runat="server">
                                    </asp:HiddenField>
                                </td>
                            </tr>
                            <tr style="display:none">
                                <td class="td-label">
                                    <asp:Label ID="lblPriority" runat="server" Text="Priority"></asp:Label>
                                </td>
                                <td class="td-value">
                                    <telerik:RadComboBox ID="rcbPriority" runat="server">
                                        <Items>
                                            <telerik:RadComboBoxItem Text="Default" Value="Default" />
                                            <telerik:RadComboBoxItem Text="High" Value="High" />
                                            <telerik:RadComboBoxItem Text="Medium" Value="Medium" />
                                            <telerik:RadComboBoxItem Text="Low" Value="Low" />
                                        </Items>
                                    </telerik:RadComboBox>
                                </td>
                            </tr>
                            <tr id="trResVersion" runat="server">
                                <td class="td-label">
                                    <asp:Label ID="Label3" runat="server" Text="Resource Version"></asp:Label>
                                </td>
                                <td class="td-value">
                                    <telerik:RadNumericTextBox ID="txtResVersion" runat="server"></telerik:RadNumericTextBox>
                                </td>
                            </tr>
                            <tr>
                                <td class="td-label">Active</td>
                                <td class="td-value">
                                    <asp:CheckBox ID="chkActive" onchange="toggleSchLabel()" data-chk-on="yes" data-chk-off="no" runat="server"></asp:CheckBox>
                                </td>
                            </tr>
                            <tr id="trGlobal" runat="server">
                                <td class="td-label">Global Task</td>
                                <td class="td-value">
                                    <asp:CheckBox ID="chkGlobal"  data-chk-on="yes" data-chk-off="no" runat="server"></asp:CheckBox>
                                </td>
                            </tr>
                        </table>

                      
                    </telerik:RadPageView>
                    <div id="divTriggerAction">
                    </div>
                    <telerik:RadPageView ID="tabTrigger" runat="server">

                        <div id="TS_RecurrencePanel" class="RecurrencePanel">
                            <div id="TS_recsec1" class="recsec1">
                                <div id="TS_rectype" class="rectype">
                                    <input type="radio" id="TS_rbtnOnetime" name="TSRecType" value="Onetime" checked="checked" onclick="return ShowPanel('Onetime', 'TS')">
                                    One Time
                                    <br>
                                    <input type="radio" id="TS_rbtnMinute" name="TSRecType" value="Minute" onclick="return ShowPanel('Minutely', 'TS')">
                                    Minutely
                                    <br>
                                    <input type="radio" id="TS_rbtnHourly" name="TSRecType" value="Hourly" onclick="return ShowPanel('Hourly', 'TS')">
                                    Hourly
                                    <br>
                                    <input type="radio" id="TS_rbtnDaily" name="TSRecType" value="Daily" onclick="return ShowPanel('Daily', 'TS')">
                                    Daily
                                     <br>
                                    <input type="radio" id="TS_rbtnWeekly" name="TSRecType" value="Weekly" onclick="return ShowPanel('Weekly', 'TS')">
                                    Weekly
                                    <br>
                                    <input type="radio" id="TS_rbtnMonthly" name="TSRecType" value="Monthly" onclick="return ShowPanel('Monthly', 'TS')">
                                    Monthly
                                    <br>
                                    <input type="radio" id="TS_rbtnYearly" name="TSRecType" value="Yearly" onclick="return ShowPanel('Yearly', 'TS')">
                                    Yearly
                                    <br>
                                    <input type="radio" id="TS_rbtnExpr" name="TSRecType" value="Monthly" onclick="return ShowPanel('Expr', 'TS')">
                                    Expression
                                    <br>
                                </div>
                                <div id="TS_typepanel">
                                    <div id="TS_Onetime" class="Onetime">
                                        <%-- <span>Start 
                                        </span>
                                        <span>
                                            <input type="text" id="TS_txtExactDate" style="width: 80px">
                                        </span>
                                        <span>
                                            <input type="text" id="TS_txtExactTime" style="width: 60px">
                                        </span>--%>
                                    </div>
                                    <div id="TS_Minutely" style="display: none" class="Minute">
                                        <span>Every 
                                        </span>
                                        <span>
                                            <input type="text" id="TS_txtEveryMinute" style="width: 40px">
                                        </span>
                                        <span>Minute(s)
                                        </span>
                                    </div>
                                    <div id="TS_Hourly" style="display: none" class="Hourly">
                                        <span>Every 
                                        </span>
                                        <span>
                                            <input type="text" id="TS_txtEveryHour" style="width: 40px">
                                        </span>
                                        <span>hour(s)
                                        </span>
                                    </div>
                                    <div id="TS_Daily" style="display: none" class="Daily">
                                        <input type="radio" id="TS_rbtnday" checked="checked" name="TSDaily">
                                        <span>Every 
                                        </span>
                                        <span>
                                            <input type="text" id="TS_txtEveryday" style="width: 40px">
                                        </span>
                                        <span>days(s)
                                        </span>
                                        <br>
                                        <input type="radio" id="TS_rbtnWeekday" name="TSDaily">
                                        Every weekday  
                                    </div>
                                    <div id="TS_Weekly" style="display: none" class="Weekly">
                                        <%-- <span>Recur every 
                                        </span>
                                        <span>
                                            <input type="text" id="TS_txtEveryWeek" style="width: 40px">
                                        </span>
                                        <span>week(s) on
                                        </span>
                                        <br>--%>
                                        <br>
                                        <input id="TS_chkSun" type="checkbox" name="TSchkSun">
                                        <label for="chkSun">
                                            Sunday
                                        </label>
                                        <input id="TS_chkMon" type="checkbox" name="TSchkMon">
                                        <label for="chkMon">
                                            Monday
                                        </label>
                                        <input id="TS_chkTue" type="checkbox" name="TSchkTue">
                                        <label for="chkTue">
                                            Tuesday
                                        </label>
                                        <input id="TS_chkWed" type="checkbox" name="TSchkWed">
                                        <label for="chkWed">
                                            Wednesday
                                        </label>
                                        <br>
                                        <br>
                                        <input id="TS_chkThur" type="checkbox" name="TSchkThur">
                                        <label for="chkThur">
                                            Thursday
                                        </label>
                                        <input id="TS_chkFri" type="checkbox" name="TSchkFri">
                                        <label for="chkFri">
                                            Friday
                                        </label>
                                        <input id="TS_chkSat" type="checkbox" name="TSchkSat">
                                        <label for="chkSat">
                                            Saturday
                                        </label>
                                    </div>
                                    <div id="TS_Monthly" style="display: none" class="Monthly">                                       
                                        <input checked="checked" type="radio" id="TS_radMonthtype1"  name="TSMonthly">
                                        <select id="TS_txtdayType" onchange="$(this).next().setDisplay($(this).val()=='F')" style="margin: 0 2px;">
                                            <option selected="selected" value="">Not-Set
                                            </option>
                                            <option value="L">Last Day
                                            </option>
                                            <option value="F">Fixed
                                            </option>               
                                        </select><span style="display:none"><span>Day 
                                        </span>
                                            <input type="text"  id="TS_txtdaycount" style="width: 40px">
                                        </span>
                                        <span>of every 
                                        </span>
                                        <span>
                                            <input type="text" id="TS_txtmonthcount" style="width: 40px">
                                        </span>
                                        <span>months(s)
                                        </span>
                                        <br>
                                        <br>
                                        <span >
                                            <input type="radio" id="TS_radMonthType2" name="TSMonthly">
                                            The
        <span>
            <select name="TSradDayCount" id="TS_radDayCount" style="width: 50px;">
                <option selected="selected" value="1">first
                </option>
                <option value="2">second
                </option>
                <option value="3">third
                </option>
                <option value="4">fourth
                </option>
                <option value="-1">fifth
                </option>
            </select>
        </span>
                                            <span>
                                                <select name="TSradDayType" id="TS_radDayType" style="width: 100px;">
                                                    <%--  <option selected="selected" value="MON,TUE,WED,THU,FRI,SAT,SUN">day
                                                </option>
                                                <option value="MON,TUE,WED,THU,FRI">weekday
                                                </option>
                                                <option value="SAT,SUN">weekend
                                                </option>--%>

                                                    <option selected="selected" value="MON">Monday
                                                    </option>
                                                    <option value="TUE">Tuesday
                                                    </option>
                                                    <option value="WED">Wednesday
                                                    </option>
                                                    <option value="THU">Thurday
                                                    </option>
                                                    <option value="FRI">Friday
                                                    </option>
                                                    <option value="SAT">Saturday
                                                    </option>
                                                    <option value="SUN">Sunday
                                                    </option>
                                                </select>
                                            </span>
                                            <span>of every
                                            </span>
                                            <span>
                                                <input type="text" id="TS_txtmonthcount2" style="width: 40px">
                                                months(s)
                                            </span>
                                        </span>
                                    </div>
                                     <div id="TS_Expr" style="display: none" class="Expr">
                                            Enter Expression : <input type="text" id="TS_txtExpr" style="width: 150px">
                                     </div>
                                    <div id="TS_Yearly" style="display: none" class="Yearly">
                                         <input type="radio" id="TS_radYearType0" checked="checked" checked="checked" name="TSYearly">
                                        <span>Every 
                                        </span>
                                        <span>
                                            <input type="text" id="TS_txtYearDay" style="width: 40px">
                                        </span>
                                        <span>Year(s)
                                        </span>
                                        <br><br>
                                        <span>
                                            <input type="radio" id="TS_radYearType1" name="TSYearly">
                                        </span>
                                        <span>Every 
                                        </span>
                                        <span>
                                            <select name="TSradmonth" id="TS_radmonth" style="width: 100px;">                                               
                                                <option value="1">January
                                                </option>
                                                <option value="2">February
                                                </option>
                                                <option value="3">March
                                                </option>
                                                <option value="4">April
                                                </option>
                                                <option value="5">May
                                                </option>
                                                <option value="6">June
                                                </option>
                                                <option value="7">July
                                                </option>
                                                <option value="8">August
                                                </option>
                                                <option value="9">September
                                                </option>
                                                <option value="10">October
                                                </option>
                                                <option value="11">November
                                                </option>
                                                <option value="12">December
                                                </option>
                                            </select>
                                        </span>
                                        <span>
                                            <input type="text" id="TS_txtYearDayCount" style="width: 40px">
                                        </span>
                                        <br>
                                        <br>
                                        <span>
                                            <input type="radio" id="TS_radYearType2" name="TSYearly">
                                        </span>
                                        <span>
                                            <select name="TSradYearDayCount" id="TS_radYearDayCount" style="width: 50px;">
                                                <option selected="selected" value="1">first
                                                </option>
                                                <option value="2">second
                                                </option>
                                                <option value="3">third
                                                </option>
                                                <option value="4">fourth
                                                </option>
                                                <option value="-1">fifth
                                                </option>
                                            </select>
                                        </span>
                                        <span>
                                            <select name="TSradYearDayType" id="TS_radYearDayType" style="width: 100px;">
                                                <%-- <option selected="selected" value="MON,TUE,WED,THU,FRI,SAT,SUN">day
                                                </option>
                                                <option value="MON,TUE,WED,THU,FRI">weekday
                                                </option>
                                                <option value="SAT,SUN">weekend
                                                </option>--%>
                                                <option selected="selected" value="MON">Monday
                                                </option>
                                                <option value="TUE">Tuesday
                                                </option>
                                                <option value="WED">Wednesday
                                                </option>
                                                <option value="THU">Thurday
                                                </option>
                                                <option value="FRI">Friday
                                                </option>
                                                <option value="SAT">Saturday
                                                </option>
                                                <option value="SUN">Sunday
                                                </option>
                                            </select>
                                        </span>
                                        <span>of 
                                        </span>
                                        <span>
                                            <select name="TSradYearmonth" id="TS_radYearmonth" style="width: 100px;">
                                                <option value="1">January
                                                </option>
                                                <option value="2">February
                                                </option>
                                                <option value="3">March
                                                </option>
                                                <option value="4">April
                                                </option>
                                                <option value="5">May
                                                </option>
                                                <option value="6">June
                                                </option>
                                                <option value="7">July
                                                </option>
                                                <option value="8">August
                                                </option>
                                                <option value="9">September
                                                </option>
                                                <option value="10">October
                                                </option>
                                                <option value="11">November
                                                </option>
                                                <option value="12">December
                                                </option>
                                            </select>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <span style="display: block; font-size: 14px; font-weight: bold;">Start Date</span>
                            <div id="Div1" class="recsec2">
                                <span>Start Date
                                </span>
                                <span>
                                    <input type="text" id="TS_txtExactDate" style="width: 80px">
                                </span>
                                <span style="margin-left: 10px">Start Time
                                </span>
                                <span>
                                    <input type="text" id="TS_txtExactTime" style="width: 60px">
                                </span>
                            </div>
                            <span id="TS_recsec2Lbl" style="display: block; font-size: 14px; font-weight: bold;">End Date</span>
                            <div id="TS_recsec2" class="recsec2">
                                <span>
                                    <input type="radio" id="TS_radNoEndDate" checked="checked" name="TSEndtype">
                                    No end date
                                </span>
                                <span style="display: none">
                                    <input type="radio" id="TS_radEndAfter" name="TSEndtype">
                                    End After
      <input type="text" id="TS_txtOccurrence" style="width: 40px">
                                    Occurences
                                </span>
                                <span>
                                    <input type="radio" id="TS_radEndBy" name="TSEndtype">
                                    End by
      <input type="text" id="TS_datepickerEndBy">
                                </span>
                            </div>
                        </div>
                        <input type="hidden" id="TS_hdnRecur" key="recurrenceoutput">
                    </telerik:RadPageView>

                    <telerik:RadPageView ID="tabAction" runat="server">

                        <div id="divSettings" class="formSettings _noBorder" style="position: static">
                            <span id="divAction">
                                <span id="trAction" class="row"><span style="width: 90px" class="lbl">Action : </span>
                                    <select id="cboAction" style="width: 180px" onchange="toggleAction()">
                                        <option selected value="NONE">None</option>
                                        <option value="WF">Workflow</option>
                                        <option value="URL">Web Service</option>
                                        <option value="REPORT">Generate Report</option>
                                        <option value="CSCRIPT">C# Script</option>
                                    </select>
                                </span>

                                <span id="trReports" style="display: none" class="row"><span style="width: 90px"
                                    class="lbl">Reports: </span>
                                    <a id="lnkReport" href="javascript:void(0)" class="_r" onclick="ShowRptList('ifrReports',this)">Please Select</a>
                                </span>
                                <span id="trReports6" class="row"><span style="width: 90px" class="lbl">Format : </span>
                                    <select id="cboRptFormat" style="width: 180px">
                                        <option selected value="PDF">PDF</option>                                        
                                        <option value='XLSX'>XLSX</option>
                                        <option value='XLS'>XLS</option>
                                        <option value='CSV'>CSV</option>
                                        <option value='RTF'>RTF</option>
                                        <option value='DOCX'>DOCX</option>
                                        <option value='DOC'>DOC</option>
                                        <option value='HTML'>HTML</option>
                                        <option value='MHT'>MHT</option>
                                        <option value='TXT'>TXT</option>
                                        <option value='IMG'>IMG</option>
                                    </select>
                                </span>
                                <span id="trReports1" style="display: none" class="row"><span style="width: 90px"
                                    class="lbl">Parameters : </span>
                                    <input type="text" id="txtRptParams" style="width: 500px" class="txt" />
                                </span>
                                <span id="trReports2" style="display: none" class="row"><span style="width: 90px"
                                    class="lbl">To : </span>
                                    <input type="text" id="txtRptTo" style="width: 500px" class="txt" />
                                </span>
                                <span id="trReports3" style="display: none" class="row"><span style="width: 90px"
                                    class="lbl">BCC : </span>
                                    <input type="text" id="txtRptBCC" style="width: 500px" class="txt" />
                                </span>
                                <span id="trReports4" style="display: none" class="row"><span style="width: 90px"
                                    class="lbl">Subject : </span>
                                    <input type="text" id="txtRptSubject" style="width: 500px" class="txt" />
                                </span>
                                <span id="trReports5" style="display: none" class="row"><span style="width: 90px"
                                    class="lbl">Body : </span>
                                    <textarea rows="3" type="text" id="txtRptBody" style="width: 500px" class="txt" ></textarea>
                                </span>
                                <span id="trWf" style="display: none" class="row">
                                    <span style="width: 90px" class="lbl">Workflow: </span>
                                    <asp:DropDownList ID="ddlWf" Style="margin-bottom: 15px;" runat="server">
                                    </asp:DropDownList>
                                </span>
                                <span id="trWf1" style="display: none" class="row"><span style="width: 90px"
                                    class="lbl">Arguments : </span>
                                    <textarea rows="3" type="text" placeholder="Enter in JSON Format" id="txtWfArgs" style="width: 500px" class="txt" ></textarea>
                                </span>


                                <span id="trUrl" style="display: none" class="row"><span style="width: 90px"
                                    class="lbl">Url : </span>
                                    <asp:TextBox ID="txtUrl" Style="width: 500px" CssClass="txt" runat="server"></asp:TextBox><input type="button" id="btnUrl" value="..." />
                                    <div id="divUrlTree">
                                        <telerik:RadTreeView ID="tvUrl" OnClientNodeClicked="selectUrl" runat="server">
                                        </telerik:RadTreeView>
                                    </div>
                                </span>
                                <span id="trUrl1" style="display: none" class="row"><span style="width: 90px"
                                    class="lbl">Method : </span>
                                    <input type="text" id="txtUrlMethod" style="width: 100px" class="txt" />
                                </span>
                                 <span id="trUrl2" style="display: none" class="row"><span style="width: 90px"
                                    class="lbl">ContentType : </span>
                                    <input type="text" id="txtUrlContentType" style="width: 250px" class="txt" />
                                </span>
                                <span id="trUrl3" style="display: none" class="row"><span style="width: 90px"
                                    class="lbl">Headers : </span>
                                    <textarea rows="3" type="text" id="txtUrlHeaders"  placeholder="Enter each header entry in new line" style="width: 500px" class="txt" ></textarea>
                                </span>
                                <span id="trUrl4" style="display: none" class="row"><span style="width: 90px"
                                    class="lbl">Data : </span>
                                    <textarea rows="3" type="text" id="txtUrlData" style="width: 500px" class="txt" ></textarea>
                                </span>
                               
                                <span id="trCScript" style="display: none" class="row">
                                    <span style="width: 90px" class="lbl">C# Script: </span>
                                    <asp:DropDownList ID="ddlCScript" onchange="toggleScriptPath()" Style="margin-bottom: 15px;" runat="server">
                                    </asp:DropDownList>
                                </span>                               
                                <span id="trCScript2" style="display: none" class="row">
                                    <span style="width: 90px"
                                        class="lbl">Dll Path: </span>

                                    <input type="text" id="txtExternalScript" style="width: 500px" class="txt" /><input type="button" id="btnUrl1" value="..." />
                                    <div id="divUrlTree1">
                                        <telerik:RadTreeView ID="tvUrl1" OnClientNodeClicked="selectUrl1" runat="server">
                                        </telerik:RadTreeView>
                                    </div>
                                </span>
                                <span id="trCScript3" style="display: none" class="row">
                                    <span style="width: 90px"
                                        class="lbl">Class Name: </span>
                                    <input type="text" id="txtExternalScriptClass" style="width: 500px" class="txt" />
                                </span>
                                 <span id="trCScript1" style="display: none" class="row"><span style="width: 90px"
                                    class="lbl">Parameters : </span>
                                     <textarea rows="2" type="text" id="txtScriptParameter" placeholder="Enter in JSON Format" style="width: 500px" class="txt" ></textarea>
                                </span>
                            </span>
                            </span>

                        </div>
                        <div id="divRpt">
                            <iframe frameborder="0" style="height: 100%; width: 100%" id="ifrReports"></iframe>
                        </div>

                    </telerik:RadPageView>
                </telerik:RadMultiPage>

                 <div id="divOutput" style="display:none">
        <a onclick="generateSettings()" id="lbnGen" class="default-link" href="javascript:void(0)">Generate Settings</a><br />
        <span id="lblOutput" style="display:none"></span></div>
                <div style="display:none">
                <asp:Label ID="lblCronDescription" CssClass="cronDescr" runat="server"></asp:Label>
                <div>
                    <asp:LinkButton ID="btnSubmit" CssClass="cmdBtn cmdSave" runat="server" Text="Submit" OnClientClick=" return saveData()"></asp:LinkButton>
                    <asp:LinkButton ID="btnClose" class="cmdBtn cmdClose" runat="server" Text="Cancel" OnClientClick="closeForm();"></asp:LinkButton>
                </div>
                    </div>
            </div>
             <div class="divDropDown" style="width: 300px; height: 290px; overflow: hidden" id="divEntityList">
                    <iframe style="height: 100%; width: 100%" scrolling="no" frameborder="0"></iframe>
                </div>

            <div class="formSettings" id="divFilter" style="display: none; width: 747px; height: 440px">
                <a class="pClose" href="javascript:void(0)" style="" onclick="$('#divFilter').HideModal();return false;"></a>
                <iframe id="iframe_Filter" frameborder="0" style="height: 97%; width: 98%" runat="server"></iframe>
                <input type="button" value="Submit" class="ActionButton GreenButton" onclick="SaveFilter()" />
                <input type="button" value="Cancel" class="ActionButton GlassButton RedColor" onclick="$('#divFilter').HideModal(); return false;" />
            </div>
        </ContentTemplate>
    </asp:UpdatePanel>

    <style>
          #lblOutput
        {
           display: inline-block;
  background-color: #E8E8E8;
  color: #008000;
  width: 650px;
  padding: 10px;
  border: solid 1px #808080;
  border-radius: 5px;
  margin: 15px;
  font-size: 15px;
  font-family: monospace;
  white-space: normal;
  word-break: break-word;
      overflow: auto;
    height: 150px;
        }
        .RecurrencePanel
        {
            width: 585px;
            height: auto;
            display: block;
            font-size: 13px;
           
        }

        .rectype
        {
            width: 120px;
            
            font-size: 13px;
            float: left;
            border-right: 1px solid gray;
            margin-top: 10px;
            margin-bottom: 10px;
        }

        .Hourly, .Daily, .Weekly, .Monthly, .Yearly, .Onetime, .Minute,.Expr
        {
            width: 415px;
            height: 120px;
            float: left;
            margin-top: 10px;
            margin-left: 10px;
        }

        .recsec1
        {
           
            width: 670px;
            height: 165px;
            
            margin-bottom: 10px;
        }

        .recsec2
        {
           
            width: 671px;
            height: 30px;
            border: 1px solid gray;
            padding-top: 5px;
            margin-bottom: 10px;
        }

        .RecurrencePanel .hasDatepicker
        {
            width: 80px;
        }

        .cronDescr
        {
            display: block;
            padding: 10px;
            border-radius: 10px;
            border: solid 1px #D4D4D4;
            background-color: #FFFCE2;
            margin-bottom: 20px;
            width: 654px;
            font-weight: bold;
        }

        .cronDescr.inactive
        {
            background-color: #F9F9F9;
            color:#CECECE;
        }
        .cronDescr.inactive:before
        {
            color:#CECECE;
        }
            .cronDescr:before
            {
                content: "Task is scheduled to run at : ";
                color: gray;
                font-weight: normal;
            }

            .divDropDown
        {
            position: absolute;
            display: none;
            width: 224px;
            height: 290px;
            background-color: #FFF;
            border: solid 1px #BABABA;
            z-index: 10;
            box-shadow: 2px 2px 5px #555;
        }
        .dtlfilter
        {
            text-decoration: none;
            color: #00317D;
            margin: 4px;
            border: solid 1px #B9B9B9;
            padding: 2px 5px;
            outline:none !important;
        }

            .dtlfilter:before
            {
                content: "\f0b0";
                font-family: fontawesome;
                font-weight: normal;
                font-size: 15px;
            }
    </style>

    <script type="text/javascript">

        var ajx = Sys.WebForms.PageRequestManager.getInstance();
        ajx.add_pageLoaded(function () {
            if (typeof MDI != "undefined") {
                //Add user code here
                //alert("load "+MDI.id );             
            }
        })

        ajx.add_endRequest(function () {
            if (typeof MDI != "undefined") {
                //Add user code here
                //alert("load "+MDI.id );   
                CloseWindow();
            }
        })
    </script>



    <script type="text/javascript">
        $(function () {
            $("#divSettings").find("select").chosen({ disable_search: true, width: "220px" });
            if ($.QS("js") == "1") {
                $("#divOutput").setDisplay(true);
                $("#<%=lblCronDescription.ClientID%>").parent().hide();
                $("#<%=chkActive.ClientID%>").checked(true)
            }
            else {
                $("#<%=lblCronDescription.ClientID%>").parent().show();
                //$("#<%=chkActive.ClientID%>").closest("TR").show();
                $("#<%=rcbPriority.ClientID%>_Input").closest("TR").show();
                $("#<%=txtEntity.ClientID%>").closest("TR").find(".dtlfilter").show();
            }
        });
        
        $("#txtUrlMethod").autocomplete({
            source: ["GET", "POST", "PUT", "HEAD", "TRACE", "DELETE", "SEARCH", "CONNECT", "PROPFIND", "PROPPATCH", "PATCH", "MKCOL", "COPY", "MOVE", "LOCK", "UNLOCK", "OPTIONS"],
            minLength:0
        }).on("click", function () { $("#txtUrlMethod").autocomplete("search", ""); });

        $("#txtUrlContentType").autocomplete({
            source: ["text/plain", "text/html", "application/x-www-form-urlencoded", "application/json", "application/xml", "multipart/form-data"],
            minLength: 0
        }).on("click", function () { $("#txtUrlContentType").autocomplete("search", ""); });
        


        $(document).click(function (e) {         
            if ($("#divEntityList").isVisible() && $(e.target).prop("tagName") != "INPUT")
                $("#divEntityList").hide();
        
        });

        function toggleSchLabel() {
            $("#<%=lblCronDescription.ClientID%>").setEnable($("#<%=chkActive.ClientID%>").checked(), "inactive");
        }
        function pageLoad() {

            $("#<%=chkActive.ClientID%>,#<%=chkGlobal.ClientID%>").CheckBoxX();
            toggleSchLabel();
            LoadRecurrenceData("TS")
            loadJsonRecurrenceData();
            LoadActionData();
            toggleAction();           
        }


        function saveData() {


            var data = new Object();
            data["Type"] = "SaveTaskScheduler";

            data["@TSName"] = $("#<%=txtTaskName.ClientID%>").val();
            data["@TSDesc"] = $("#<%=txtTaskDesc.ClientID%>").val();
            data["@TSEntity"] = $.defaultVal($("#<%=txtEntity.ClientID%>").attr("table"),"");
            data["@TSEntityFilter"] = $("#<%=hdnFilter.ClientID%>").val();
            data["@TSPriority"] = $find("<%=rcbPriority.ClientID%>").get_value();
            data["@Active"] = $("#<%=chkActive.ClientID%>").checked();
            data["@GlobalTask"] = $("#<%=chkGlobal.ClientID%>").checked();
            data["@TaskScheduler_pid"] = TaskSchedulerID;
            data["@ResourceVersion"] = $.defaultVal($("#<%= txtResVersion.ClientID%>").val(), 0);
            data["@Recurrence"] = GetRecurrence();
            data["@TaskAction"] = GetAction();
            data["au"] = $.QS("_au");
            $.Notify("Saving");
            PageMethods.Execute(data, PageMethodSuccess, PageMethodError);


            return false;
        }

        function PageMethodSuccess(data) {
            $.Notify(false);
            if (data["Error"] == true) {
                actMessage(data["ErrorMsg"], "alert", 20);
                return;
            }
            RefreshParent();
            $("#<%=lblCronDescription.ClientID%>").html(data["CronText"]);
            TaskSchedulerID = data["@TaskScheduler_pid"];
            

        }
        function PageMethodError(error) {
            $.Notify({ Message: "Error Occured.", NotifyOnly: true });
        }


    </script>




    <script type="text/javascript">

        function GetAction() {
            var xmlActionData = "<Action>";
            xmlActionData += GetActionData();
            xmlActionData += "</Action>";
            return xmlActionData;
        }

        function GetActionData() {
            var ActionData = "";
            var action = $("#cboAction").val().toUpperCase();
            if (action == "WF") {
                ActionData += "<Type>WF</Type> ";
                ActionData += "<WfCode>" + $.encodeXml($("#<%=ddlWf.ClientID %>").val()) + "</WfCode>";
                ActionData += "<Arguments>" + $.encodeXml($("#txtWfArgs").val()) + "</Arguments>";
            }
            else if (action == "URL") {

                ActionData += "<Type>URL</Type> ";
                ActionData += "<Url>" + $.encodeXml($("#<%=txtUrl.ClientID %>").val()) + "</Url>";
                ActionData += "<Method>" + $.encodeXml($("#txtUrlMethod").val()) + "</Method>";
                ActionData += "<ContentType>" + $.encodeXml($("#txtUrlContentType").val()) + "</ContentType>";
                ActionData += "<Headers>" + $.encodeXml($("#txtUrlHeaders").val()) + "</Headers>";
                ActionData += "<Data>" + $.encodeXml($("#txtUrlData").val()) + "</Data>";
            }
            else if (action == "REPORT") {
                ActionData += "<Type>REPORT</Type> ";
                ActionData += "<Format>" + $.encodeXml($("#cboRptFormat").val()) + "</Format>";
                ActionData += "<Report>" + $.encodeXml($("#lnkReport").attr("recid")) + "</Report>";
                ActionData += "<Parameters>" + $.encodeXml($("#txtRptParams").val()) + "</Parameters>";
                ActionData += "<To>" + $.encodeXml($("#txtRptTo").val()) + "</To>";
                ActionData += "<Bcc>" + $.encodeXml($("#txtRptBCC").val()) + "</Bcc>";
                ActionData += "<Subject>" + $.encodeXml($("#txtRptSubject").val()) + "</Subject>";
                ActionData += "<Body>" + $.encodeXml($("#txtRptBody").val()) + "</Body>";
            }
            else if (action == "CSCRIPT") {
                ActionData += "<Type>CSCRIPT</Type> ";
                ActionData += "<Cscript>" + $.encodeXml($.defaultVal($("#<%= ddlCScript.ClientID %>").val() == "Ext" ? $("#txtExternalScript").val().Trim() + "," + $("#txtExternalScriptClass").val() : $("#<%= ddlCScript.ClientID %>").val(), "")) + "</Cscript>";
                ActionData += "<Parameters>" + $.encodeXml($("#txtScriptParameter").val()) + "</Parameters>";
            }

            return ActionData;
        }

        function generateSettings() {
            var data = {};
            if ($("#<%=chkActive.ClientID%>").checked()) {
                if ($("#<%=txtTaskName.ClientID%>").val() != "")
                    data["Title"] = $.encodeXml($("#<%=txtTaskName.ClientID%>").val());
                if ($("#<%=txtTaskDesc.ClientID%>").val() != "")
                    data["Description"] = $.encodeXml($("#<%=txtTaskDesc.ClientID%>").val());
                if ($.defaultVal($("#<%=txtEntity.ClientID%>").attr("table"), "") != "")
                    data["Entity"] = $.defaultVal($("#<%=txtEntity.ClientID%>").attr("table"), "");

                data["RecordID"] = "";
                data["Action"] = $.encodeXml(GetAction());
                var d = $("#TS_txtExactDate").datepicker("getDate");
                d = (d ? moment(d).format("YYYY-MM-DD") + " " + $.defaultVal($("#TS_txtExactTime").val(), "12:00 AM") : "");
                if ($("#TS_rbtnOnetime").checked())
                    data["ScheduledDate"] = ($("#TS_rbtnOnetime").checked() ? d : "");
                if (!$("#TS_rbtnOnetime").checked())
                    data["EnableRecurrence"] = !$("#TS_rbtnOnetime").checked();
                if (!$("#TS_rbtnOnetime").checked())
                    data["Recurrence"] = (!$("#TS_rbtnOnetime").checked() ? $.encodeXml(GetRecurrence()) : "");
            }
            else {
                data["TaskID"] = "";
                data["Deactivate"] = true;
            }
            if ($.QS("ss") == "1") {
                var s = "new Dictionary&lt;string, object&gt;() {<br/>";
                for (p in data) {
                    s += '{"' + p + '",' + (data[p] === true || data[p] === false ? data[p] : ('"' + JSON.stringify($.defaultVal(data[p], ""))+ '"')) + '},<br/>';
                }
                s=s.substring(0,s.length-6);
                s += "<br/>}"
                $("#lblOutput").html(s).ShowModal({ autoClose: true });
            }
            else
                $("#lblOutput").html(JSON.stringify(data, null, "<br/>")).ShowModal({ autoClose: true });
        }

function GetRecurrence() {
    var xmlData = "<Recurrence>";
    xmlData += GetRecurrenceData('TS');
    xmlData += "</Recurrence>";
    return xmlData;
}


function GetRecurrenceData(id) {

    var RRule = "";
    if ($("#" + id + "_rbtnExpr").checked()) {
        RRule = "<Cron";
        RRule += " CronExpression=\"" + $.encodeXml($("#" + id + "_txtExpr").val(), true) + "\"";
        RRule += getStartby(id);
        RRule += getEndby(id);
        //RRule += " ExactDate=\"" + $.encodeXml($("#" + id + "_txtExactDate").val(),true) + "\"  ExactTime=\"" + $.encodeXml($("#" + id + "_txtExactTime").val(),true) + "\"";
        RRule += "></Cron>";
    }
    else if ($("#" + id + "_rbtnOnetime").checked()) {
        RRule = "<Onetime";
        RRule += getStartby(id);
        RRule += getEndby(id);
        //RRule += " ExactDate=\"" + $.encodeXml($("#" + id + "_txtExactDate").val(),true) + "\"  ExactTime=\"" + $.encodeXml($("#" + id + "_txtExactTime").val(),true) + "\"";
        RRule += "></Onetime>";
    }
    else if ($("#" + id + "_rbtnMinute").checked()) {
        RRule = "<Minutely";
        RRule += getStartby(id);
        RRule += getEndby(id);
        RRule += " Min=\"" + $.encodeXml($("#" + id + "_txtEveryMinute").val(), true) + "\"";
        RRule += "></Minutely>";
    }
    else if ($("#" + id + "_rbtnHourly").checked()) {
        RRule = "<Hourly";
        RRule += getStartby(id);
        RRule += getEndby(id);
        RRule += " Hours=\"" + $.encodeXml($("#" + id + "_txtEveryHour").val(), true) + "\"";
        RRule += "></Hourly>";
    }
    else if ($("#" + id + "_rbtnDaily").checked()) {
        RRule = "<Daily";
        RRule += getStartby(id);
        RRule += getEndby(id);
        if ($("#" + id + "_rbtnday").checked()) {
            RRule += " Interval=\"" + $.encodeXml($("#" + id + "_txtEveryday").val(), true) + "\" Everyday=\"1\"";
        }
        else {
            RRule += " Weekday=\"1\"";
        }
        RRule += "></Daily>";
    }
    else if ($("#" + id + "_rbtnWeekly").checked()) {
        RRule = "<Weekly";
        RRule += getStartby(id);
        RRule += getEndby(id);
        //RRule += " Interval= \"" + $.encodeXml($("#" + id + "_txtEveryWeek").val(),true) + "\"";

        var Checkday = "";
        if ($("#" + id + "_chkSun").checked())
            RRule += " Sunday= \"1\"";
        else
            RRule += " Sunday= \"0\"";

        if ($("#" + id + "_chkMon").checked())
            RRule += " Monday= \"1\"";
        else
            RRule += " Monday= \"0\"";

        if ($("#" + id + "_chkTue").checked())
            RRule += " Tuesday= \"1\"";
        else
            RRule += " Tuesday= \"0\"";

        if ($("#" + id + "_chkWed").checked())
            RRule += " Wednesday= \"1\"";
        else
            RRule += " Wednesday= \"0\"";

        if ($("#" + id + "_chkThur").checked())
            RRule += " Thursday= \"1\"";
        else
            RRule += " Thursday= \"0\"";

        if ($("#" + id + "_chkFri").checked())
            RRule += " Friday= \"1\"";
        else
            RRule += " Friday= \"0\"";

        if ($("#" + id + "_chkSat").checked())
            RRule += " Saturday= \"1\"";
        else
            RRule += " Saturday= \"0\"";

        RRule += "></Weekly>";
    }
    else if ($("#" + id + "_rbtnMonthly").checked()) {
        RRule = "<Monthly";
        RRule += getStartby(id);
        RRule += getEndby(id);
        if ($("#" + id + "_radMonthtype1").checked()) {
            RRule += " MonthlyType= \"1\" DayType=\"" + $.encodeXml($("#" + id + "_txtdayType").val(), true) + "\" Month =\"" + $.encodeXml($("#" + id + "_txtmonthcount").val(), true) + "\" Day =\"" + $.encodeXml($("#" + id + "_txtdaycount").val(), true) + "\"";
        }
        else {
            RRule += " MonthlyType= \"2\" Month=\"" + $.encodeXml($("#" + id + "_txtmonthcount2").val(), true) + "\" Week=\"" + $.encodeXml($("#" + id + "_radDayCount>option:selected").val(), true) + "\" Day=\"" + $.encodeXml($("#" + id + "_radDayType>option:selected").val(), true) + "\"";
        }
        RRule += "></Monthly>";
    }
    else if ($("#" + id + "_rbtnYearly").checked()) {
        RRule = "<Yearly";
        RRule += getStartby(id);
        RRule += getEndby(id);
        if ($("#" + id + "_radYearType0").checked()) {
            RRule += " YearlyType= \"0\"  Year=\"" + $.encodeXml($("#" + id + "_txtYearDay").val(), true) + "\" ";
        }
        else if ($("#" + id + "_radYearType1").checked()) {
            RRule += " YearlyType= \"1\"  Day=\"" + $.encodeXml($("#" + id + "_txtYearDayCount").val(), true) + "\" Month=\"" + $.encodeXml($("#" + id + "_radmonth>option:selected").val(), true) + "\"";
        }
        else {
            RRule += " YearlyType= \"2\" Week= \"" + $.encodeXml($("#" + id + "_radYearDayCount>option:selected").val(), true) + "\"  Day=\"" + $.encodeXml($("#" + id + "_radYearDayType>option:selected").val(), true) + "\" Month=\"" + $.encodeXml($("#" + id + "_radYearmonth>option:selected").val(), true) + "\"";
        }
        RRule += "></Yearly>";
    }
    return RRule;
}


function getStartby(id) {
    var StartRule = "";
    StartRule += " StartDate=\"" + $.encodeXml($("#" + id + "_txtExactDate").val(), true) + "\"  StartTime=\"" + $.encodeXml($("#" + id + "_txtExactTime").val(), true) + "\"";
    return StartRule;
}

function getEndby(id) {
    var EndRule = "";
    if ($("#" + id + "_radEndAfter").checked()) {
        EndRule = " EndAfter= \"1\"  Count=\"" + $.encodeXml($("#" + id + "_txtOccurrence").val(), true) + "\"";
    }
    else if ($("#" + id + "_radEndBy").checked()) {

        var date = $("#" + id + "_datepickerEndBy").val();
        EndRule = " EndBy= \"1\"  Until= \"" + $.encodeXml(date, true) + "\"";
    }
    else {

        EndRule = " NoEndDate= \"1\"";
    }
    return EndRule;
}


function ShowPanel(type, id) {
    $("#TS_recsec2,#TS_recsec2Lbl").setDisplay(type != "Onetime");
    $("#" + id + "_Onetime").css("display", "none");
    $("#" + id + "_Minutely").css("display", "none");
    $("#" + id + "_Hourly").css("display", "none");
    $("#" + id + "_Daily").css("display", "none");
    $("#" + id + "_Weekly").css("display", "none");
    $("#" + id + "_Monthly").css("display", "none");
    $("#" + id + "_Yearly").css("display", "none");
    $("#" + id + "_Expr").css("display", "none");
    $("#" + id + "_" + type).css("display", "block");

}


function LoadRecurrenceData(id) {


    $("#" + id + "_datepickerEndBy").datepicker({
        showOn: "both", buttonImage: "../images/date.png", buttonImageOnly: true, dateFormat: 'dd/mm/yy', scrollbar: true, dropdown: false
    });

    $("#" + id + "_txtExactDate").datepicker({
        showOn: "both", buttonImage: "../images/date.png", buttonImageOnly: true, dateFormat: 'dd/mm/yy', scrollbar: true, dropdown: false
    });

    $("#" + id + "_txtExactTime").timepicker();


    $("#" + id + "_txtEveryMinute").autoNumeric('init', {
        mDec: 0, aSep: ''
    });

    $("#" + id + "_txtEveryHour").autoNumeric('init', {
        mDec: 0, aSep: ''
    });

    $("#" + id + "_txtEveryday").autoNumeric('init', {
        mDec: 0, aSep: ''
    });

    //$("#" + id + "_txtEveryWeek").autoNumeric('init', {
    //    mDec: 0, aSep: ''
    //}
    //);

    $("#" + id + "_txtmonthcount").autoNumeric('init', {
        mDec: 0, aSep: ''
    });

    $("#" + id + "_txtmonthcount2").autoNumeric('init', {
        mDec: 0, aSep: ''
    });

    $("#" + id + "_txtYearDayCount").autoNumeric('init', {
        mDec: 0, aSep: ''
    });

    $("#" + id + "_txtdaycount").autoNumeric('init', {
        mDec: 0, aSep: ''
    });



    $("#" + id + "_Onetime").css("display", "none");
    $("#" + id + "_Minutely").css("display", "none");
    $("#" + id + "_Hourly").css("display", "none");
    $("#" + id + "_Daily").css("display", "none");
    $("#" + id + "_Weekly").css("display", "none");
    $("#" + id + "_Monthly").css("display", "none");
    $("#" + id + "_Yearly").css("display", "none");


}

function loadJsonRecurrenceData() {
    var id = "TS";
    ShowPanel("Onetime", "TS");
    var RecType = $.defaultVal(RecurrenceData.Recurrence, "");

    $("#" + id + "_txtExactDate").val(RecurrenceData.StartDate);
    $("#" + id + "_txtExactTime").val(RecurrenceData.StartTime);
    if (RecType == "Cron") {
        $("#" + id + "_rbtnExpr").attr("checked", "checked");
        $("#" + id + "_txtExpr").val($.defaultVal(RecurrenceData.CronExpression, ""));
        ShowPanel("Expr", "TS");
    }
    else if (RecType == "Onetime") {
        $("#" + id + "_rbtnOnetime").attr("checked", "checked");
        ShowPanel(RecType, "TS");
    }
    else if (RecType == "Minutely") {
        $("#" + id + "_rbtnMinute").attr("checked", "checked");
        $("#" + id + "_txtEveryMinute").val($.defaultVal(RecurrenceData.Min, ""));
        ShowPanel(RecType, "TS");
    }
    else if (RecType == "Hourly") {
        $("#" + id + "_rbtnHourly").attr("checked", "checked");
        $("#" + id + "_txtEveryHour").val($.defaultVal(RecurrenceData.Hours, ""));
        ShowPanel(RecType, "TS");
    }
    else if (RecType == "Daily") {
        $("#" + id + "_rbtnDaily").attr("checked", "checked");
        if (RecurrenceData.Everyday == "1") {
            $("#" + id + "_rbtnday").attr("checked", "checked");
            $("#" + id + "_txtEveryday").val($.defaultVal(RecurrenceData.Interval, ""));
        }
        else {
            $("#" + id + "_rbtnWeekday").attr("checked", "checked");
        }
        ShowPanel(RecType, "TS");
    }
    else if (RecType == "Weekly") {
        $("#" + id + "_rbtnWeekly").attr("checked", "checked");
        //$("#" + id + "_txtEveryWeek").val($.defaultVal(RecurrenceData.Interval, ""));
        if (RecurrenceData.Sunday == "1") {
            $("#" + id + "_chkSun").attr("checked", "checked");
        }
        if (RecurrenceData.Monday == "1") {
            $("#" + id + "_chkMon").attr("checked", "checked");
        }
        if (RecurrenceData.Tuesday == "1") {
            $("#" + id + "_chkTue").attr("checked", "checked");
        }
        if (RecurrenceData.Wednesday == "1") {
            $("#" + id + "_chkWed").attr("checked", "checked");
        }
        if (RecurrenceData.Thursday == "1") {
            $("#" + id + "_chkThur").attr("checked", "checked");
        }
        if (RecurrenceData.Friday == "1") {
            $("#" + id + "_chkFri").attr("checked", "checked");
        }
        if (RecurrenceData.Saturday == "1") {
            $("#" + id + "_chkSat").attr("checked", "checked");
        }
        ShowPanel(RecType, "TS");

    }
    else if (RecType == "Monthly") {
        $("#" + id + "_rbtnMonthly").attr("checked", "checked");
        $("#" + id + "_txtdayType").val(RecurrenceData.DayType).trigger("change");
        if (RecurrenceData.MonthlyType == "1") {
            $("#" + id + "_radMonthtype1").attr("checked", "checked");
            $("#" + id + "_txtdaycount").val(RecurrenceData.Day)
            $("#" + id + "_txtmonthcount").val(RecurrenceData.Month)
        }
        else {
            $("#" + id + "_radMonthType2").attr("checked", "checked");
            $("select#" + id + "_radDayCount").val(RecurrenceData.Week);
            $("select#" + id + "_radDayType").val(RecurrenceData.Day);
            $("#" + id + "_txtmonthcount2").val(RecurrenceData.Month);
        }
        ShowPanel(RecType, "TS");
    }
    else if (RecType == "Yearly") {
        $("#" + id + "_rbtnYearly").attr("checked", "checked");
        if (RecurrenceData.YearlyType == "0") {
            $("#" + id + "_radYearType0").attr("checked", "checked");
            $("#" + id + "_txtYearDay").val(RecurrenceData.Year)
        }
        else if (RecurrenceData.YearlyType == "1") {
            $("#" + id + "_radYearType1").attr("checked", "checked");
            $("select#" + id + "_radmonth").val(RecurrenceData.Month);
            $("#" + id + "_txtYearDayCount").val(RecurrenceData.Day)
        }
        else {
            $("#" + id + "_radYearType2").attr("checked", "checked");
            $("select#" + id + "_radYearDayCount").val(RecurrenceData.Week);
            $("select#" + id + "_radYearDayType").val(RecurrenceData.Day);
            $("select#" + id + "_radYearmonth").val(RecurrenceData.Month);
        }
        ShowPanel(RecType, "TS");
    }

    if (RecurrenceData.EndAfter == "1") {

        $("#" + id + "_radEndAfter").attr("checked", "checked");
        $("#" + id + "_txtOccurrence").val(RecurrenceData.Count)
    }
    else if (RecurrenceData.EndBy == "1") {

        $("#" + id + "_radEndBy").attr("checked", "checked");
        var dtEnddate = RecurrenceData.Until;
        //var newdate = dtEnddate.substring(6) + "/" + dtEnddate.substring(3, 5) + "/" + dtEnddate.substring(0, 2);
        $("#" + id + "_datepickerEndBy").val(dtEnddate);
    }
    else {
        $("#" + id + "_radNoEndDate").attr("checked", "checked");
    }
}

function LoadActionData() {
    $("#cboAction").val("NONE");
    resetData();
    if (!ActionData)
        return;
    var action = $.defaultVal(ActionData.Action, "").toUpperCase();
    $("#cboAction").val(action).trigger("chosen:updated");

    toggleAction();

    if (action == "WF") {
        $("#<%=ddlWf.ClientID %>").val(ActionData.WF).trigger("chosen:updated");
        $("#txtWfArgs").val(ActionData.WFArgs);
    }
    else if (action == "URL") {
        $("#<%=txtUrl.ClientID %>").val($.defaultVal(ActionData.Url, ""));
        $("#txtUrlMethod").val(ActionData.Method);
        $("#txtUrlContentType").val(ActionData.ContentType);
        $("#txtUrlHeaders").val(ActionData.Headers);
        $("#txtUrlData").val(ActionData.Data);
    }
    else if (action == "REPORT") {
        $("#lnkReport").html(getRecordTitle(action, ActionData.Rpt)).attr("recid", $.defaultVal(ActionData.Rpt, ""));
        $("#txtRptParams").val(ActionData.Params);
        $("#cboRptFormat").val(ActionData.Format).trigger("chosen:updated");
        $("#txtRptTo").val(ActionData.To);
        $("#txtRptBCC").val(ActionData.Bcc);
        $("#txtRptSubject").val(ActionData.Subject);
        $("#txtRptBody").val(ActionData.Body);
    }
    else if (action == "CSCRIPT") {
        if (ActionData.Cscript.indexOf("%") > -1) {
            $("#<%=ddlCScript.ClientID %>").val("Ext").trigger("chosen:updated");
            $("#txtExternalScript").val(ActionData.Cscript.split(',')[0])
            $("#txtExternalScriptClass").val(ActionData.Cscript.split(',')[1])
        }
        else
            $("#<%=ddlCScript.ClientID %>").val(ActionData.Cscript).trigger("chosen:updated");
        toggleScriptPath()
        $("#txtScriptParameter").val(ActionData.Params);
    }


}

function resetData() {
    $("#cboAction").val("None").trigger("chosen:updated");
    toggleAction();
    $("#<%=ddlWf.ClientID %>").val("").trigger("chosen:updated");
    }

    function getRecordTitle(type, recid) {
        if ($.isEmpty(recid))
            return "Please Select";
        if (type == "REPORT") {
            var res = $(arrReports).filter(function () { return this.report_pid == recid; });
            return res.length > 0 ? res[0].reportname : "Please Select";
        }
    }

    function showEntityList(a) {
        $("#divEntityList").show().position({ my: "left top", at: "left bottom", collision: "none none", of: $(a) });
        if ($.isEmpty($("#divEntityList").find("iframe").attr("src")))
            $("#divEntityList").find("iframe").attr("src", "fieldbrowser.aspx?mode=ChooseEntity&fn=selectRelEntity");
    }
    function selectRelEntity(txt, val) {
        $("#divEntityList").hide();
        $("#<%=txtEntity.ClientID %>").val(val == "None" ? "" : txt).attr("table",val == "None" ? "" : val);
    }
        function showEntityFilter() {                  
            var data = new Object();
            data["PageType"] = $.QS("PageType");
            data["EID"] = $("#<%=txtEntity.ClientID %>").attr("table");
            if ($.isEmpty(data["EID"])) {
                alert("Please choose entity.");
                return;
            }
            data["SID"] = "sid_" + data["EID"];
            data["xml"] = $("#<%=hdnFilter.ClientID %>").val();
            PageMethods.SetFilterSession(data, function () {
                $("#divFilter").ShowModal();
                var url = "Filters_Add.aspx?PageMode=report&SID=" + data["SID"];
                url = "Filters_Add.aspx?PageMode=Setting&SID=" + data["SID"] + "&Hidebutton=1&ShowFilterBtn=1&ReturnXml=1"
                $('#<%= iframe_Filter.ClientID %>').attr('src', url);
            });
        }
        function SaveFilter() {
            var iframe = $('#<%= iframe_Filter.ClientID %>');
            var filter = "";
            var error = false;
            if (iframe && iframe[0].contentWindow && typeof iframe[0].contentWindow.createXml == "function")
                filter = iframe[0].contentWindow.createXml(null, "");

            if (filter === false) {
                return;
            }
            $("#<%=hdnFilter.ClientID %>").val(filter)
            $("#divFilter").HideModal();
            return false;
        }
    </script>

    <script type="text/javascript">


        function toggleAction() {
            $("#trWf,#trWf1").setDisplay(false);
            $("#trReports,#trReports1,#trReports2,#trReports3,#trReports4,#trReports5,#trReports6").setDisplay(false);
            $("#trUrl,#trUrl1,#trUrl2,#trUrl3,#trUrl4").setDisplay(false);
            $("#trCScript,#trCScript1").setDisplay(false);

            var action = $("#cboAction").val().toUpperCase();
            if (action == "NONE" || action == "") {

            }
            else if (action == "URL") {

                $("#trUrl,#trUrl1,#trUrl1,#trUrl2,#trUrl3,#trUrl4").setDisplay(true);
                $("#trLocation").show();
            }

            else if (action == "REPORT") {
                $("#trTitle").setDisplay(true);
                $("#trReports,#trReports1,#trReports2,#trReports3,#trReports4,#trReports5,#trReports6").setDisplay(true);

            }
            else if (action == "WF") {

                $("#trWf,#trWf1").setDisplay(true);
            }
            else if (action == "CSCRIPT") {

                $("#trCScript,#trCScript1").setDisplay(true);
            }
        }

        function toggleScriptPath() {
            $("#trCScript2,#trCScript3").setDisplay($("#<%=ddlCScript.ClientID%>").val() == "Ext");
         
        }
        function selectUrl1(sender, args) {
            var n = args.get_node();
            if (n.get_attributes().getAttribute("IsFile")) {
                $("#txtExternalScript").val(n.get_value());
                $("#divUrlTree1").hide();
            }
        }
        function selectUrl(sender, args) {
            var n = args.get_node();
            if (n.get_attributes().getAttribute("IsFile")) {
                $("#<%=txtUrl.ClientID%>").val(n.get_value());
                $("#divUrlTree").hide();
            }
        }

        function ShowRptList(id, a) {
            window.currentRptLink = $(a);
            var ifr = $("#" + id);
            $("#divRpt").children().hide();
            ifr.show();
            if ($.isEmpty(ifr.attr("src"))) {
                ifr.attr("src", "reports_view.aspx?_ns=1&m=" + (id == "ifrFolder" ? "f" : "r"));
            }

            window.setTimeout(function () {
                $(document).one("click", function (e) { $("#divRpt").hide(); });
                $("#divRpt").show().position({ of: $(a), my: "left top", at: "left bottom" }).css("width", (id == "ifrFolder" ? "270px" : "570px"));
            }, 10);

        }

        $("#btnUrl,#btnUrl1").on("click", function (e) { toggleUrlTree(e.target); e.stopPropagation(); })
        $("#divUrlTree,#divUrlTree1").on("click", function (e) { e.stopPropagation(); });

        $(document).on("click", function (e) { $("#divUrlTree,#divUrlTree1").hide(); });


        function toggleUrlTree(btn) {
            $(btn).next().show();
        }

        function setRptLinkValue(id, txt) {
            currentRptLink.html(txt).attr("recid", id);
            $("#divRpt").hide();
        }

    </script>

    <style>
        .formSettings, .Popup
        {
            background-color: #fff;
            position: fixed;
            left: 805px;
            z-index: 3500;
            top: 606px;
            display: block;
            border: solid 0px #666 !important;
            border-radius: 0px !important;
            box-shadow: 0px 0px 0px #525252 !important;
            padding: 20px;
            font-family: nunitoregular;
            font-size: 12px;
        }

        #divUrlTree,#divUrlTree1
        {
            position: absolute;
            display: none;
            width: 224px;
            height: 295px;
            background-color: #FFF;
            border: solid 2px #4D4C4C;
            border-radius: 5px;
            z-index: 10;
            margin-left: 103px;
            box-shadow: 2px 2px 5px #555;
            overflow-y: auto;
            margin-left: 335px;
            width: 290px;
            height: 265px;
        }

        #divRpt
        {
            background-color: #FFF;
            border: solid 2px #9D9D9D;
            box-shadow: 2px 2px 7px #7B7B7B;
            position: absolute;
            height: 300px;
            width: 270px;
            display: none;
            z-index: 3505;
        }
    </style>
</asp:Content>


