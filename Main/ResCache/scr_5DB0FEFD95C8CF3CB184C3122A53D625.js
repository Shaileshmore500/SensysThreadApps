function InitUI() {$('#PageTitle').children('._i').html(Erp.PageIcon).next().html(Erp.PageTitle);PkIds=[];
$('#tab_Basicinfo').closest('.tabs-wrapper').swipeTab();
window.__erp_fn_0= function (el,onChange){
el.simpleDate({reuse:0,container:'body',yearRange:25,format: "DD/MM/YYYY"});

}
__erp_fn_0($('#html_date'));
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_applicationdate",ID:"html_date",Disabled:false,Type:"Date",DataType:"DATE",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null,OnLoad:(typeof html_date_Load=='function'?html_date_Load:null)});
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_api_reference_id",ID:"html_api_reference_id",Disabled:false,Type:"Text",DataType:"TEXT",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null});
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_apistatuscode",ID:"html_apistatuscode",Disabled:false,Type:"Text",DataType:"TEXT",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null});
window.__erp_fn_1= function (el,onChange){
var ddl=el;ddl.formSelect({width:"100%",disable_search_threshold: 10,allow_single_deselect: true,placeholder_text_single:" "});

}
__erp_fn_1($('#html_emptitle'));
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_employeetitle",ID:"html_emptitle",Disabled:false,Type:"Text",DataType:"SINGLESELECT",CustomRender:false,Mandatory:true,IsDescriptive:false,ReqForCalc:false,Data:null});
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_firstname",ID:"html_Fname",Disabled:false,Type:"Text",DataType:"TEXT",CustomRender:false,Mandatory:true,IsDescriptive:false,ReqForCalc:true,Data:null});
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_middlename",ID:"html_Mname",Disabled:false,Type:"Text",DataType:"TEXT",CustomRender:false,Mandatory:true,IsDescriptive:false,ReqForCalc:false,Data:null});
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_lastname",ID:"Text64",Disabled:false,Type:"Text",DataType:"TEXT",CustomRender:false,Mandatory:true,IsDescriptive:false,ReqForCalc:false,Data:null});
__erp_fn_1($('#html_gender'));
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_gender",ID:"html_gender",Disabled:false,Type:"Text",DataType:"SINGLESELECT",CustomRender:false,Mandatory:true,IsDescriptive:false,ReqForCalc:false,Data:null,OnValid:(typeof html_gender_Valid=='function'?html_gender_Valid:null)});
window.__erp_fn_2= function (el,onChange){
el.simpleDate({reuse:0,container:'body',yearRange:25,format: "DD/MM/YYYY"});
el.on('change',function(){onFieldChange(html_dob_Change,$(this),$(this).materialDatepicker('getDate'),Erp.GetField($(this).attr('id')));});

}
__erp_fn_2($('#html_dob'),html_dob_Change);
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_dateofbirth",ID:"html_dob",Disabled:false,Type:"Date",DataType:"DATE",CustomRender:false,Mandatory:true,IsDescriptive:false,ReqForCalc:false,Data:null,OnLoad:(typeof html_dob_Load=='function'?html_dob_Load:null),OnValid:(typeof html_dob_Valid=='function'?html_dob_Valid:null)});
window.__erp_fn_3= function (el,onChange){
el.autoNumeric('init',{vMin:'-2147483648',vMax:'2147483647', mDec :0,aSep :'',dGroup:0,aPad:false,pSign: 'p'});

}
__erp_fn_3($('#html_age'));
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_age",ID:"html_age",Disabled:true,Type:"Number",DataType:"NUMBER",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null});
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_aadhaarcardno",ID:"html_aadhar",Disabled:false,Type:"Text",DataType:"TEXT",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null,OnValid:(typeof html_aadhar_Valid=='function'?html_aadhar_Valid:null)});
window.__erp_fn_4= function (el,onChange){
el.on('change',function(){onFieldChange(onChange,$(this),$(this).val(),Erp.GetField($(this).attr('id')));});

}
__erp_fn_4($('#html_pan'),html_pan_Change);
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_pancardno",ID:"html_pan",Disabled:false,Type:"Text",DataType:"TEXT",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null,OnValid:(typeof html_pan_Valid=='function'?html_pan_Valid:null)});
window.__erp_fn_5= function (el,onChange){
var ddl=el;ddl.formSelect({width:"100%",disable_search_threshold: 10,allow_single_deselect: true,placeholder_text_single:" "});
el.on('change',function(){onFieldChange(sel_bloodgroup_Change,$(this),$(this).val(),Erp.GetField($(this).attr('id')));});

}
__erp_fn_5($('#sel_bloodgroup'),sel_bloodgroup_Change);
Erp.FieldInfo.push({Name:"_sel_bloodgroup",ID:"sel_bloodgroup",Disabled:false,Type:"Text",DataType:"SINGLESELECT",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null,OnValid:(typeof sel_bloodgroup_Valid=='function'?sel_bloodgroup_Valid:null)});
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_emailaddress",ID:"html_Email",Disabled:false,Type:"Text",DataType:"EMAIL",CustomRender:false,Mandatory:true,IsDescriptive:false,ReqForCalc:false,Data:null,OnValid:(typeof html_Email_Valid=='function'?html_Email_Valid:null)});
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_personalmobilenumber",ID:"html_phone",Disabled:false,Type:"Text",DataType:"TEXT",CustomRender:false,Mandatory:true,IsDescriptive:false,ReqForCalc:false,Data:null,OnValid:(typeof html_phone_Valid=='function'?html_phone_Valid:null)});
__erp_fn_1($('#html_maritalstatus'));
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_maritalstatus",ID:"html_maritalstatus",Disabled:false,Type:"Text",DataType:"SINGLESELECT",CustomRender:false,Mandatory:true,IsDescriptive:false,ReqForCalc:false,Data:null,OnValid:(typeof html_maritalstatus_Valid=='function'?html_maritalstatus_Valid:null)});
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_spousename",ID:"html_spousename",Disabled:false,Type:"Text",DataType:"TEXT",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null});
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_previous_epf_accountno",ID:"html_prevEPFno",Disabled:false,Type:"Text",DataType:"TEXT",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null});
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_bloodgroup",ID:"html_bloodgroup",Disabled:false,Type:"Text",DataType:"TEXT",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null,OnLoad:(typeof html_bloodgroup_Load=='function'?html_bloodgroup_Load:null)});
GridList.push({ID:"html_reportinghead_grid",BindOnload:false,Title:"",AdvFilter:[],GroupInfo:[],IsLookup:1,OnBind:null});
initGridSettings("html_reportinghead_grid");
$("#html_reportinghead_grid_ctl00_TopPager").find('.rgCommandCell').append($('#html_reportinghead_grid_cmd'));
window.__erp_fn_6= function (el,onChange){
var ddl=el;ddl.parent().addClass('ui-list');ddl.data('InlineMode',true);ddl.data('FieldID','620f278f-1d69-45fb-ac09-58a2ef12f005');ddl.data('LookupCode','lu_EMP');ddl.data('Eids','tbl_employee');ddl.data('FieldType','SINGLESELECT_TABLE');ddl.data('Multi',false);enableKeyboardForList(ddl);ddl.parent().on('click',function(){showSearchList($(this));});

}
__erp_fn_6($('#html_reportinghead'));
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_reportinghead",ID:"html_reportinghead",Disabled:false,Type:"Ddl",DataType:"SINGLESELECT_TABLE",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null});
window.__erp_fn_7= function (el,onChange){
el.autoNumeric('init',{vMin:'-79228162514264337593543950335',vMax:'79228162514264337593543950335', mDec :50,aSep :'',dGroup:0,aPad:false,pSign: 'p'});
el.on('change',function(){onFieldChange(onChange,$(this),$(this).autoNumeric('get'),Erp.GetField($(this).attr('id')));});

}
__erp_fn_7($('#html_monthlysal'),html_monthlysal_Change);
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_fixedsalary",ID:"html_monthlysal",Disabled:false,Type:"Number",DataType:"DECIMAL",CustomRender:false,Mandatory:true,IsDescriptive:false,ReqForCalc:false,Data:null});
__erp_fn_0($('#date_scheduledate'));
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_scheduledate",ID:"date_scheduledate",Disabled:false,Type:"Date",DataType:"DATE",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null});
GridList.push({ID:"html_loc_grid",BindOnload:false,Title:"",AdvFilter:[],GroupInfo:[],IsLookup:1,OnBind:null});
initGridSettings("html_loc_grid");
$("#html_loc_grid_ctl00_TopPager").find('.rgCommandCell').append($('#html_loc_grid_cmd'));
window.__erp_fn_8= function (el,onChange){
var ddl=el;ddl.parent().addClass('ui-list');ddl.data('InlineMode',true);ddl.data('FieldID','33c57901-fcc5-404a-9bb6-6164a8ec941e');ddl.data('LookupCode','');ddl.data('Eids','tbl_unit');ddl.data('FieldType','SINGLESELECT_TABLE');ddl.data('Multi',false);enableKeyboardForList(ddl);ddl.parent().on('click',function(){showSearchList($(this));});

}
__erp_fn_8($('#html_loc'));
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_unit_fid",ID:"html_loc",Disabled:false,Type:"Ddl",DataType:"SINGLESELECT_TABLE",CustomRender:false,Mandatory:true,IsDescriptive:false,ReqForCalc:false,Data:null});
__erp_fn_0($('#date_expecteddateofconfirmation'));
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_expecteddateofconfirmation",ID:"date_expecteddateofconfirmation",Disabled:false,Type:"Date",DataType:"DATE",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null});
GridList.push({ID:"html_branch_grid",BindOnload:false,Title:"",AdvFilter:[],GroupInfo:[],IsLookup:1,OnBind:null});
initGridSettings("html_branch_grid");
$("#html_branch_grid_ctl00_TopPager").find('.rgCommandCell').append($('#html_branch_grid_cmd'));
window.__erp_fn_9= function (el,onChange){
var ddl=el;ddl.parent().addClass('ui-list');ddl.data('InlineMode',true);ddl.data('FieldID','7f1b675d-5909-4636-8d73-9b1f7238ca16');ddl.data('LookupCode','');ddl.data('Eids','tbl_branch');ddl.data('FieldType','SINGLESELECT_TABLE');ddl.data('Multi',false);enableKeyboardForList(ddl);ddl.parent().on('click',function(){showSearchList($(this));});

}
__erp_fn_9($('#html_branch'));
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_branch_fid",ID:"html_branch",Disabled:false,Type:"Ddl",DataType:"SINGLESELECT_TABLE",CustomRender:false,Mandatory:true,IsDescriptive:false,ReqForCalc:false,Data:null});
GridList.push({ID:"html_dep_grid",BindOnload:false,Title:"",AdvFilter:[],GroupInfo:[],IsLookup:1,OnBind:null});
initGridSettings("html_dep_grid");
$("#html_dep_grid_ctl00_TopPager").find('.rgCommandCell').append($('#html_dep_grid_cmd'));
window.__erp_fn_10= function (el,onChange){
var ddl=el;ddl.parent().addClass('ui-list');ddl.data('InlineMode',true);ddl.data('FieldID','4650607d-d427-4d9f-9c88-b252e2d1a1f9');ddl.data('LookupCode','');ddl.data('Eids','tbl_department');ddl.data('FieldType','SINGLESELECT_TABLE');ddl.data('Multi',false);enableKeyboardForList(ddl);ddl.parent().on('click',function(){showSearchList($(this));});

}
__erp_fn_10($('#html_dep'));
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_department_fid",ID:"html_dep",Disabled:false,Type:"Ddl",DataType:"SINGLESELECT_TABLE",CustomRender:false,Mandatory:true,IsDescriptive:false,ReqForCalc:false,Data:null});
GridList.push({ID:"html_grade_grid",BindOnload:false,Title:"",AdvFilter:[],GroupInfo:[],IsLookup:1,OnBind:null});
initGridSettings("html_grade_grid");
$("#html_grade_grid_ctl00_TopPager").find('.rgCommandCell').append($('#html_grade_grid_cmd'));
window.__erp_fn_11= function (el,onChange){
var ddl=el;ddl.parent().addClass('ui-list');ddl.data('InlineMode',true);ddl.data('FieldID','c17f0d47-3f28-448c-af0d-d091a4a47144');ddl.data('LookupCode','');ddl.data('Eids','tbl_grade');ddl.data('FieldType','SINGLESELECT_TABLE');ddl.data('Multi',false);enableKeyboardForList(ddl);ddl.parent().on('click',function(){showSearchList($(this));});

}
__erp_fn_11($('#html_grade'));
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_grade",ID:"html_grade",Disabled:false,Type:"Ddl",DataType:"SINGLESELECT_TABLE",CustomRender:false,Mandatory:true,IsDescriptive:false,ReqForCalc:false,Data:null});
GridList.push({ID:"html_des_grid",BindOnload:false,Title:"",AdvFilter:[],GroupInfo:[],IsLookup:1,OnBind:null});
initGridSettings("html_des_grid");
$("#html_des_grid_ctl00_TopPager").find('.rgCommandCell').append($('#html_des_grid_cmd'));
window.__erp_fn_12= function (el,onChange){
var ddl=el;ddl.parent().addClass('ui-list');ddl.data('InlineMode',true);ddl.data('FieldID','3dcf444c-e284-4ad0-b06b-ca555c2931c6');ddl.data('LookupCode','');ddl.data('Eids','tbl_designation');ddl.data('FieldType','SINGLESELECT_TABLE');ddl.data('Multi',false);enableKeyboardForList(ddl);ddl.parent().on('click',function(){showSearchList($(this));});

}
__erp_fn_12($('#html_des'));
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_deisgnation_fid",ID:"html_des",Disabled:false,Type:"Ddl",DataType:"SINGLESELECT_TABLE",CustomRender:false,Mandatory:true,IsDescriptive:false,ReqForCalc:false,Data:null});
GridList.push({ID:"html_state_grid",BindOnload:false,Title:"",AdvFilter:[],GroupInfo:[],IsLookup:1,OnBind:null});
initGridSettings("html_state_grid");
$("#html_state_grid_ctl00_TopPager").find('.rgCommandCell').append($('#html_state_grid_cmd'));
window.__erp_fn_13= function (el,onChange){
var ddl=el;ddl.parent().addClass('ui-list');ddl.data('InlineMode',true);ddl.data('FieldID','9da1220a-1aad-43c4-848d-391ff563d5ed');ddl.data('LookupCode','');ddl.data('Eids','tbl_project');ddl.data('FieldType','SINGLESELECT_TABLE');ddl.data('Multi',false);enableKeyboardForList(ddl);ddl.parent().on('click',function(){showSearchList($(this));});

}
__erp_fn_13($('#html_state'));
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_project_fid",ID:"html_state",Disabled:false,Type:"Ddl",DataType:"SINGLESELECT_TABLE",CustomRender:false,Mandatory:true,IsDescriptive:false,ReqForCalc:false,Data:null});
GridList.push({ID:"html_Ric_grid",BindOnload:false,Title:"",AdvFilter:[],GroupInfo:[],IsLookup:1,OnBind:null});
initGridSettings("html_Ric_grid");
$("#html_Ric_grid_ctl00_TopPager").find('.rgCommandCell').append($('#html_Ric_grid_cmd'));
window.__erp_fn_14= function (el,onChange){
var ddl=el;ddl.parent().addClass('ui-list');ddl.data('InlineMode',true);ddl.data('FieldID','0ce4aa43-bf52-4823-8037-22204c1d4f1c');ddl.data('LookupCode','');ddl.data('Eids','tbl_division');ddl.data('FieldType','SINGLESELECT_TABLE');ddl.data('Multi',false);enableKeyboardForList(ddl);ddl.parent().on('click',function(){showSearchList($(this));});

}
__erp_fn_14($('#html_Ric'));
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_division_fid",ID:"html_Ric",Disabled:false,Type:"Ddl",DataType:"SINGLESELECT_TABLE",CustomRender:false,Mandatory:true,IsDescriptive:false,ReqForCalc:false,Data:null});
GridList.push({ID:"html_category_grid",BindOnload:false,Title:"",AdvFilter:[],GroupInfo:[],IsLookup:1,OnBind:null});
initGridSettings("html_category_grid");
$("#html_category_grid_ctl00_TopPager").find('.rgCommandCell').append($('#html_category_grid_cmd'));
window.__erp_fn_15= function (el,onChange){
var ddl=el;ddl.parent().addClass('ui-list');ddl.data('InlineMode',true);ddl.data('FieldID','f61e226e-8948-483a-a45f-4fe056a48ede');ddl.data('LookupCode','');ddl.data('Eids','tbl_employeecategory');ddl.data('FieldType','SINGLESELECT_TABLE');ddl.data('Multi',false);enableKeyboardForList(ddl);ddl.parent().on('click',function(){showSearchList($(this));});

}
__erp_fn_15($('#html_category'));
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_category_fid",ID:"html_category",Disabled:false,Type:"Ddl",DataType:"SINGLESELECT_TABLE",CustomRender:false,Mandatory:true,IsDescriptive:false,ReqForCalc:false,Data:null});
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_referencename",ID:"html_ref",Disabled:false,Type:"Text",DataType:"TEXT",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null});
GridList.push({ID:"Select23_grid",BindOnload:false,Title:"",AdvFilter:[],GroupInfo:[],IsLookup:1,OnBind:null});
initGridSettings("Select23_grid");
$("#Select23_grid_ctl00_TopPager").find('.rgCommandCell').append($('#Select23_grid_cmd'));
window.__erp_fn_16= function (el,onChange){
var ddl=el;ddl.parent().addClass('ui-list');ddl.data('InlineMode',true);ddl.data('FieldID','fa02ecf7-2c57-44f8-9fc1-42218fb48866');ddl.data('LookupCode','');ddl.data('Eids','tbl_SYS_Users');ddl.data('FieldType','SINGLESELECT_TABLE');ddl.data('Multi',false);enableKeyboardForList(ddl);ddl.parent().on('click',function(){showSearchList($(this));});

}
__erp_fn_16($('#Select23'));
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_hireby",ID:"Select23",Disabled:true,Type:"Ddl",DataType:"SINGLESELECT_TABLE",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null});
GridList.push({ID:"html_EmployeeType_grid",BindOnload:false,Title:"",AdvFilter:[],GroupInfo:[],IsLookup:1,OnBind:null});
initGridSettings("html_EmployeeType_grid");
$("#html_EmployeeType_grid_ctl00_TopPager").find('.rgCommandCell').append($('#html_EmployeeType_grid_cmd'));
window.__erp_fn_17= function (el,onChange){
var ddl=el;ddl.parent().addClass('ui-list');ddl.data('InlineMode',true);ddl.data('FieldID','0d246b41-0710-4e17-bcb5-ae4ddcaadc42');ddl.data('LookupCode','');ddl.data('Eids','tbl_employeeothermaster3');ddl.data('FieldType','SINGLESELECT_TABLE');ddl.data('Multi',false);enableKeyboardForList(ddl);ddl.parent().on('click',function(){showSearchList($(this));});

}
__erp_fn_17($('#html_EmployeeType'));
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_employeeothermaster3_fid",ID:"html_EmployeeType",Disabled:false,Type:"Ddl",DataType:"SINGLESELECT_TABLE",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null});
GridList.push({ID:"html_StaffOrientation_grid",BindOnload:false,Title:"",AdvFilter:[],GroupInfo:[],IsLookup:1,OnBind:null});
initGridSettings("html_StaffOrientation_grid");
$("#html_StaffOrientation_grid_ctl00_TopPager").find('.rgCommandCell').append($('#html_StaffOrientation_grid_cmd'));
window.__erp_fn_18= function (el,onChange){
var ddl=el;ddl.parent().addClass('ui-list');ddl.data('InlineMode',true);ddl.data('FieldID','74735927-fd2e-48f0-aacc-53e75537eede');ddl.data('LookupCode','');ddl.data('Eids','tbl_employeeothermaster5');ddl.data('FieldType','SINGLESELECT_TABLE');ddl.data('Multi',false);enableKeyboardForList(ddl);ddl.parent().on('click',function(){showSearchList($(this));});

}
__erp_fn_18($('#html_StaffOrientation'));
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_employeeothermaster5_fid",ID:"html_StaffOrientation",Disabled:false,Type:"Ddl",DataType:"SINGLESELECT_TABLE",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null});
GridList.push({ID:"html_Subject_grid",BindOnload:false,Title:"",AdvFilter:[],GroupInfo:[],IsLookup:1,OnBind:null});
initGridSettings("html_Subject_grid");
$("#html_Subject_grid_ctl00_TopPager").find('.rgCommandCell').append($('#html_Subject_grid_cmd'));
window.__erp_fn_19= function (el,onChange){
var ddl=el;ddl.parent().addClass('ui-list');ddl.data('InlineMode',true);ddl.data('FieldID','16b0aa3c-e2b5-4347-89fd-5070292cc424');ddl.data('LookupCode','');ddl.data('Eids','tbl_employeeothermaster6');ddl.data('FieldType','SINGLESELECT_TABLE');ddl.data('Multi',false);enableKeyboardForList(ddl);ddl.parent().on('click',function(){showSearchList($(this));});

}
__erp_fn_19($('#html_Subject'));
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_employeeothermaster6_fid",ID:"html_Subject",Disabled:false,Type:"Ddl",DataType:"SINGLESELECT_TABLE",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null});
GridList.push({ID:"html_Division_grid",BindOnload:false,Title:"",AdvFilter:[],GroupInfo:[],IsLookup:1,OnBind:null});
initGridSettings("html_Division_grid");
$("#html_Division_grid_ctl00_TopPager").find('.rgCommandCell').append($('#html_Division_grid_cmd'));
window.__erp_fn_20= function (el,onChange){
var ddl=el;ddl.parent().addClass('ui-list');ddl.data('InlineMode',true);ddl.data('FieldID','61010859-53a4-4f9e-bbb1-271c5732ccc7');ddl.data('LookupCode','');ddl.data('Eids','tbl_employeeothermaster11');ddl.data('FieldType','SINGLESELECT_TABLE');ddl.data('Multi',false);enableKeyboardForList(ddl);ddl.parent().on('click',function(){showSearchList($(this));});

}
__erp_fn_20($('#html_Division'));
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_employeeothermaster11_fid",ID:"html_Division",Disabled:false,Type:"Ddl",DataType:"SINGLESELECT_TABLE",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null});
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_lastdrawnssalary",ID:"html_fromctc",Disabled:false,Type:"Text",DataType:"TEXT",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null});
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_ctc",ID:"html_toctc",Disabled:false,Type:"Text",DataType:"TEXT",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null});
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_currentstatus",ID:"Text37",Disabled:false,Type:"Text",DataType:"TEXT",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:true,Data:null});
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_reportstatus",ID:"html_ReportStatus",Disabled:false,Type:"Text",DataType:"TEXT",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null});
Erp.FieldInfo.push({Name:"tbl_va_employeeinformation_position_fid",ID:"html_position_fid",Disabled:false,Type:"Text",DataType:"TEXT",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null});
$('#html_Save').on('click',function(){onFieldChange(html_Save_Click,$(this));});
$('#html_Cancel').on('click',function(){onFieldChange(html_Cancel_Click,$(this));});
$('#btnSave').on('click',function(){onFieldChange(btnSave_Click,$(this));});
$('#Fab-Main').floatingActionButton();
DbReferences.push({Type:"Simple",Id:"db_fld_0",Columns:"user.users_pid",AlwaysLoad:false});window.db_fld_0='';
DbReferences.push({Type:"Simple",Id:"db_fld_1",Columns:"user.userfullname",AlwaysLoad:false});window.db_fld_1='';
DbReferences.push({Type:"Simple",Id:"db_fld_2",Columns:"user.users_pid",AlwaysLoad:false});window.db_fld_2='';

FunctionList.push({Name:'',Refs:['db_fld_0','db_fld_1','db_fld_0']});

DbReferences.push({Id:"employeeinformationfamilyinformation",Type:"Table",OnDemand:0,EntityId:"tbl_VA_employeeinformationfamilyinformation",Columns:"",Xml:"_Q9BfKlhrb8Hh--JgttYyg5i8OkT-kAKTcsDQqLdsb705VaYXYxSRHqga1cuOBEb090MQzGpt8LAmldfKbg5ij6pxWKfu0IiCluKIKdaoD2G4UIAHPCCOaa1YyH6Xjgr-nxOS5Je4uD5hedcLWXcQ2KpW5i6j2uBKx8f2SPa_cnCP9xNVKu_D3eAeyjAX3-Hw6q9Z3H75DWtAHa3LS7pL00sZRkB0Cw-8QpDCgv76sX58qHZEWn6ZTJ_xTCMokkuu4NQfUbOqV2CWfp5ahmmH-MEdgomERrbbBCt6z-0ToSNiGRQN6QI-LCQ5N2pz2qunSIvt9IUpS8PP9a9L7RLVKOESajO0vs_uKjjMPAgAh2gtf7nKEHtt0Ryw5arjhI8-up9ypo572WzO8dPPf9i2U1KKTxL0On0xYF11ZiLeY8NNt1-ZdDHBlMxhpKLjHHaWD00inVsPpoGlT_dcclW2BJMgSeUqfI05HpHsi5k0oKrJCJyELqDXVNbmoM45FMAwyJgd7yttUoGEDul9Ft4YL0TINrn4kN6qM_zXxVcTqTHurFsUpAUiwwdmAaHsmOE_2zT9qvzMpPhSvBTnXijTMPSiI_IkgTNrfhTbOudnAXc-lB5CZgJ9WkFAs6O2QmBZ5cvkJVcQQ4dRa8bu_8unQbKRedXvH4ctR7OFe1U0FAyBvVs0_sevzeIOYu1tx_oydUrs8Us6B_3QBtD8PBRsr7LcH-2gAnx4O2koavWxraPKUUGRIsjoIIga-1ol_eooTq7NFDKnRilAtaaI4cyBlXD20Fcrv6tTD5xsnjw3fmUbva73Ew2kSumxEB59P8PxtrqKqoTDZUvNBWJX4Pc4UgcFAoRZoSx4VsdQspbcuRvRImMPdj-dVQS5YNYhKN-pdef4Wj68vAl9-DVLwMkcZW3znSvRwhYkuFLrxM6CSKi7H1YYQEZy8yn5ceNS5uvI-oU6npmortWpvwYCzFluE-SZQj4Mw04wpYkCLJMEiBwtJbctQ5pqNNAWD1Blu4vJ-LGord8qPdSslsjaO_Sdk4IeeDnK9wqK-2rs92IfwQD4kmIW44MSb-nNM0n7bmXElMF9n0lgrGviZYhMhod1F3yTbeo0ItVEe3Alfjb_czydZW2zmnLaSIzPODwN4fHDL8ESYgv3mFLcFBAoi273x1sONfarjq-Fq7Z8RYUm87ilsmmNo_-fWXUGRSd52aps2VaPMvMcC28CmlPTS75ILiHL4y800Xg--OMyvDqSaH8OOoNlG7UVfv4GY84o2JPaiOMZ4OgTIr8yQL8SlaDT0uzErpv6u9ic6QIMTrbIy-fzLBlp3mbtoXlYNTh5DM6BO6JeoxqAug8pch2NZZC0Qglp0ANenlrKuvWxrQ4MohsLgKhMercQR-CBYfmt63LYJVz2I0IxiX9obrrvjvVo8DrYgCAIRe3zU6C8l-YKP2MJprSikACNlgmUeBrPEa8kEJlWXPv8w_JMxjPlLr4GWnwcHg5SVZn0Bhc01MwLkFALlyiCsfrjlKLPuO1pL7IWO5wscoL32yFP362qXoQLDGoi39WhvtTLnxJ9mCLIWDye7x6hv6ShAhH5P3mTUoUeYxwyZHFxhL9FN0uh_H2E6V-N8cmA1t9KWbc9Mt6bvc-McBBOQqP1bdRS8c82vlLUyCE_iKsiGlYGaJNQ9B4zxGtz9s51uz58B2fwmxZVcV_gGmtZEmWRovXjnyu-D7WTEDtvezjc_s8Pkm8F9dBBJBPOg0uDMPcOZ2148AdKBn5htpxJZ0dMNuxnZlabbhJxOlMRvsgul2c3PqEzyXESGXGAqRkPBQyEFgfMzgsGjN9f-8_HtpnSes1GsWM8OZOtU2XOYO61OVT_k5c4Xu6jSYZMnnGV8-mvReQOt18d5SfllarQ6VacmlJbGpOhCZ9b4dHDccAT1gc39aGDcrroH1gnZ-TAdjY67aEtvPhLcMB_paAhshMQi_g8hR9I-HzpfFcqZs0BYlAjBY_P2QzxUZ__ZcvFtJwgT0gwAjU_VPQkdm942behw7aV3396C7B2zENCMOUf3apzgia8Tp_tbSrJ8jV9ufvh8eZOUA29m-tUCZjPGSPt5XajUwm2Pd3WHGd6phD4eIbyAkzPWwmBWG_p2yHqMJM6Y_iHrWUeeDWKyqp2cBAuHgv5Sx3MrG8luL-AOa3Kjfd1MqQqLUJQ3XLfg5Zmv8np-A5QfeUW5HzsZtPv-mRIsoxWkvZzk4u8O03odVXoIRgPiu0pBwnIi-7rH9n8my-I7Umr4_zuk1zGjJ5OOKJ4NoP0GfL0_JQrxsudbOAX9hqOlWLj4EpIyehYQY93DqfjgqOEOUCzRZksya0Tt6fpBPSdQlR9KtU7mjxTy3JIPDrelje62lrzyNCu8QyYBPLiOROOBMnEMHuzSPe2GPF02tjxF0tPf3wzw3fBONF3gkRchLR_JMuCkoccg48b5Dm4j_c54DAvxqNZOEwXW3rTItt_nh5PWO5rtV2mh5r-Kq1X5vL4KSzT2FWzmfNwdtNIo5myKhdFTKSj0SFq3cG_NOG9tgJKPbZElwXNJCpOCeKR3rUq7MzGxzgjmB6CAY-xJ8xGJrSdC8I4qF6K78xBkpsVDljnrvVsAczdQFgthVKMg_XqwtC5WGTSkEOxFOUDX_GMj0T93TRBGak0UqgVSIDolYKgDVo7TAQa7ud_zE1yA5_8hA3SdLBYA4EZ43qURL9Dk86_ttvWSRuv3GnGpyJezopbqBdfzGbcCoJNgxlRAdJWELCLnjS9STk30lcOxR22zWc3o6OMwndWwqogil_X4LsDImcrgqlENym_w9NlkvO6YqlgyZmmTDPm0vUIoW78v9HfLj-9lch0YUgS9doWFXeAcX5wUiREF7ZSz15plJqmmGOZMViZZ4T2idv4KMhOL_5pOn0fLIIVYzJbtm2VQEn8mQJwb9bL2xiSxoBhXAUr31AsUcHuH4Msn0LMyZTRs599QXbgDSx1yj5jZIEEZnV2zU_UcwGwCBnW9xvMZjHMjW86CyVES6r4xwarkCidK-oLNPM8gddry-AdEPz7lvEze1IREEKjnp9pQWj6tbRjoS5rGStHheS9YCjAO2C9teBL-1DKicwuDYbAFjDSiY5gwAZH7nqQJxNFFXzZPVzKeOSfekSIJUb3n8mn_dONoVEHJWJUuW8V3vespPu42lhQiv-v_7NktxZBl9AD87PcErndzgFseUwC5GuAjpWtw18_kCJVLX7MG58Oa6uTKPybmZ1pWyt2_4TzYH1p3O0EgtG_gqZq9kTKLcNq1OjHniJk1lVp0jLhVeXIAhyAPIIte69zBv24hlIRqbLdCFiHrATxwVfNlDvI3vXgszgqWTNg7vKf3geh6vQ_iBg-B1_2tA1RBh18P0lLrvBG_sUfagEisTN4PIJo560EgwKusot5xESPbgdLhRtCrb-G_1Rb2kB3ryKXaOpoY8tBE5lwh2JP3Y9p2neytpXKXciOX8L51VuXMraJl89y3zS6msH17Hqvx0ScGFpo1I6FAhMYDW2rm8rrGz8PI_OfbPlMx7eDoeIsego4jjp1gI1ftGD_s0QWsDJVhpQSr1YS8HiPh5ltjwoiISWzZ5xsLR05jK_RfX2UMHpn0K8P_5ZdwPT3_TuvF28NQ-ZK7yCZG0rSS2TDWr4x6WRuHsMgIg76XTQHna3zanjF1lwxZX95ef4nIrvIx7aSfIppuN-2oKuWdeXFE7kUJxrPuXDsys4eGcJvUCsjY24LWktvny-_pVughLOUM3cNbNwB_B2CdcC6GRBWvfCPMvS34tpv7v-ecPSQB7jU7NcjRfCkR9caluWvXUbJuYxz3TfayHdv_9iAqmXhClH6xB0S4siISSYyQy8mmwEU4C6EMsP01bYH5SNhxnDDWMxDWBBX2vFSB-jSPQPb1e5fvoRJY-mN3tXA0zlzcu-y8nOCkknuE7eWGfpQHZBPrTA9oOPZQtJVSfUOIOYIFFrGJOg4KpHuPW9_SEx3u3ZwY1TpxONAQ43pggfiFsqjJwfACkL5f64K2tpO8Hgg_KRWvo06xFhGlN3YkEB72dKazjY0IEwWQwysxCBHGM_qfuGhuCgMvyC6D0iFxgzZJT3RPeZRRlc_yP1z5PgZboUX3toWg0FKr0xRP-eai8Kqkkea_9iMA7Oa-CZj14iyWU8zgztVSV9TFR2fM5jyTBS1IL9HKYhXdNRC8FCGHNbUeulcZi-NNnSrgHHD8TvnbaII6E00XRqs0475FsdTV6b_eJFb3GfXsOx1X9iLiqzFAnLvDV51LxNGXDnSKkBew0OUNhwiOTfAlrePZcZPg7yfGz6lHF4TynkHzTJJr-_V9NGwCs4014xj8ZHefYRRtGxbAmoTo6oEuvvohET3g4q2zaKvaMUEaRcaiUmGR580U2AoLnxzu3DWF1LV7qVbAtt-_N2Qi9SzrYkdRasCysf7ntS6KiUPpQprqesfG1_NFqAlYtYUMLF4AT_zivrVE5IPZratdoCYPw4-G93AYCo9WcL8q0MMWhyujSNAGHJzqVoN_gFuB_lTtwN5KpsCiLlibCZm5mrlPZAe2fpUob1_qQHUanqDFJz9FC9YmSFRE-OBbEJthNEDkg4svq1wEZRvFYK7Jsxf-1oiGqF6N4F8wDKBJASrjaZyZwV0tTEbtu0sfV3ygd062Qf-rXHPthFwAywoL4opPhYGvU2_18tLSD_3xwxTqgKcmLfWB3PERfIDIzT0jBgDBLIqE39Qy8mn2KXfit6UW3LTi2C1oQz-ia7InNT0oixhPQ4G0zbk5bdW6wfn-SV4MgGfa6Y5dtTVSlJl2WY3OsLnDMX4D0ciyH25cfqYrjSvE-CjNSy89Oc2K1OToo6_0RtJXYMZAEPFB68keQ2GMT1PY7XhMeT6riRd5MQdPyt_lW2QMtYvwx5GLPQWUVAo2RBbQXgT9Z4y-wJeKLhVOFZKsTCkwBTQnkkpEJ61tbT9KxGe4FDEtfIbHcMmoi7S2tPn6GSUVUgn0mur3pFk9a5vgWnrQ6Qaea5m6c8MewBSQZFep-aOkHhmmcewjBEHVoECIBFPI7YRcMb5Vu_t1juozbnqdwRhVB4NFhejcVI4FlI_iSGbQCEbRsTB0L6lfvhF5tTgDoTG4b5FqvAXf2paTHh0ATNUbjVyVBEHebftaHHrCzjPPgPTMaP4FPVjaywhso4Sxn1_5bk5usaYUz1iiq-0L5sLhpaJ9qzv9dd2sVoVTwg0wOvHAdqHYns6ygE6U_j4MMB3h_-HN-tIzGTkYlILYMeqQEt6OAeDPUrD5G8XmzgnpdftU-mmqTt2XyHv73wpNPjdFBj35rWloEibLC06fyK0-cQQpyQOKEBEGvvHSS-I8i0Q4fltaFBawEuUNntrgGu9RliHljQ2sAEkKaK8y9UHlp0IaXyFDthEHey48jOt4MKXZyMn1nELoCVlZwtDRczRjyjiF6WLFxxSzashBBebi_Xrz1zOdfGVTY7seQImGFs1RRb1mKFCFzLmbifUZkBxuIoo3ZfhCKdu9kQBQN-wGQ9XYkJCcBZcWLFHb9Q8x6nKIRS7ib1iMH9Rs7-D7OuVDapU9Hxgv6-qEURaYIXZV2g5S9Qtmu3FnHg5svilr20uS7Aassa7XlyUoa14GkTgXALr_o9OIOsVDQ7cngrKD5Z--jrlG_KGj9GMOrQmmjzuoyxnHp79bwq5sThTxkfzQfCt7yt-8TjyW1yJ2x2R9t-wYm3sUF9PKct50vZi4K1z38BWUkjntvS9y0STuEmJmEHrtNsGXwocNq41Ar9ROR35M1OLOtBigzwCG7rqb_rPK_q7Z_JVe2_WajM85W8aT7BtzITLQRW_RUcFcv8_aoBAMEYTTuAT9A5oyEfb7UPWpBXUu0ZnV9Ia7j-e_vlPmzVH2lkXJUwm13HvDtdrirREDBWuvkfnUL7-BIaXsrcp4aGYUj6BLWAQMd5D_oyp4uSlhU3is0awAfDIW-gh111scXiA0grHCVPLr7Spq1GOEntxftRqaWGi1H5EjKELGtNuCO9MZ46lfuX58iaoMt62Jl2r_P4zfBdrsRy5_JpzHefVj7d8-rG9jwgsljUolQ56ME4HF2hoUaKlIGUq-1eVtBjIxNI6ZwUVQonpmYFXch-x_9huDI_sWCXTOrTcJ1LwujwSs96Oux1eYtqYjy-_SpqRVZBuzjHqxS0A93FXdFer6a8GgnCgr6W6dvDnoaThz1nTfBrVt1GoX4ORFpyLJ43vpYr7Zd_jJOWOiaJa7C11_dnzJZL21_hXguiSD_PHiTNrrXmGgBQI9ajhi11JeZ_vmomD9A-aCwpcTl5I_uoDIS7dTu0S5PFi_DMnStIP7QQEAObaiiMMzyfIG2PkIz7QYpKQrE10bXq0HoTySAwaaNP45GT9W7m2noRZhRaYtROkZWYD_EoFyRz6ZLTkVBH19sKTfKqqNDBU93nGPqv9wWYUi0Wscch7DCX_Pr8gkaZBNOPntyBjPbQmcJDGwzI9CoOHMkQSaiRhahjeVXB-5A5gqmKPvne9X4_ESHSR92o-HwlAKyVTRtRrhjIz6DGWLMtSwJU7hKqMmWAufF9bhuHn3gifj4-juivKOG_ZWBuHW27FmaFq-rxFyNNEdzqfIrpa8pEMgaHntOmhtcjh0vtVbcq2yG91d7XArkvG41DLJ2Ke-oG5qgd9HCA4WsC7Hfvchphla-KvStc88u0gAqRNuSooM5j6USrqUo-0LG4a089wfxsmXsvNZKfmysddfQdhQ7Qb7vyUC0AEIy4dMSiIRp5raUf9ZJI6imHRCJu0gKqouTapQMPlbSPjVZXSWvMbSlVDQ3KrTICAuessmU35cVuc7FwK6q5LPXr-qb6ZmBmnzgoxaW_x5orgqm458D8Ot7hWANFOPr_8aKn2XE9hX_61NDqPY55gErYjHOcmurrd2i420VvLXjk5ucijxFrlPPpa4P8cnp-3Fck16WXp-ZDm1gmbjjT62-IO9k2TrEHBpSBwG6G8bIFcIzOi01vxk2ltYJgLBUvMFrKLF12HeHjP6aXaFJZB96MdjL6RFMKv6TtOdy3hs44m-MuMl90eBvig_eZUZMcBPpZdPiRVYzpRIMkfTHp7bHkzL0yRL6isa62fjJJgoa8fiYuX3fosQ9JUdgl8wnkCo6L4YloiEbtL5lLJsZl6DgdrzW8kVwe5GLpWswkHEBe2ISiOne30pH3CIah4nkdEAi4zDiqSGlon9cyQMVZ4W7OiL_y9GRi5amnGS2nJDdeR0kzc9Wq9g6IDD6d07j0LBE9ZOmdti91GS4zLOURSh2ha2KieJukZ6lIYeUXkS2QZOG7KUsU2c5OBGNbls9l7dzwP7fGWdfDwMQiSdp7YYHHU6nUyusYwNd4bJ7LCCIVToRuf19Hxv07Hty6xvm0InqFMmN3cMGh_Z7s0SjrAlluDBTu5f4QHrpKLSLQPYsnnRZz8oBvsk5HOBB3aeDrYHfSW1IhPQ3xfiBY5myulu34M2gyff_yavMaf1-NpSjgx4QlKlCCLiRTVMFFopVDdnKVoSVd-8SHwj6LjfbP7H7b3o7eM75Cy18qWrUwMl78PGNmAiFtkpaOgZxVmkuU-o7quK8-HE4YuqzMizwkmX1DD_ihCWjX-Hm1crw2mY3xxl6-A11UmndF_rF4Etius_Mt3Igwbodz6RRMwIcLuz4XioesoV29eNJLus_IPmbp3a8acaLni59KM6Ey10813ca6dXv5AQ_ektjthKe1GIIfemnn5AAobdadyY3cOfV2QuFCUiExRWBC1At_NO4_TCjNe-REqxAyVIAJdFig7_BwCgoPzD8Xprp3PafAi8HgJp2eD9YhlLTjKNWbBhi-x09zXOAlj0LGlGlSR-5iPQ02QLPHjbBJQqNVXBDwpgjYSMKWLskHCB7689d8u49Z9MflqJRYZROm3rMlUKmUpxFeqYuxVisq5mX-FuCIbcDm3A5HDccSnrO2gQB9mAP9LHZ6s05nPhrOKM8TtNGLuYS1ySW_v52s_k-pd2FTMBuDanSgqHWZEjQdXWjVqgGZ6R5tMbFiyKAv3j2WCFZYNPoHUP0BNSmOWY8oOMTQ_OopLNUe-n3Qve48MxTvPCczjtKYus_M7BE3lFRy6aKOqXcu21NZSRjazNeNguknz1GjlOpiPzqFpXdidBno-t5djYgHsf_TEtd5h0msGHBLyr2GaHS6sKf88OMKsz0hcJTTCTy5KV3fvPttRNEFdb8nqFA__PwHwV_2lxfau-Rio26snEJG7r6-8fPDT8w49XT-b59UzKxVE6UNmsf97HWyQYpJWK5tobuBx8fM4yH25JwWXwfmWyCkVzexdk6e4ehOgxKgyN5TAdaDtqFJka5wYTLaAhZc-Q3W9g15ubnV4-WjaZpSMVvQzuOIvnyPaCKdrSvM4DL15y7P69pKQimquAEGOVRpVXWmQTX6yundTy22EVuIkE9lshLA9iSMiymCN1p-4mbKEUcIwsKaBimJ5QNiLQnNcT5C8UsD30eZaoD33Ec69XqqYfyI5hx87XW5PHFR0pJbLormSR3QUJpKAR_gSAx028yZevzK5kJbkTvDk-ZUgG8vRrhXn1Jh-HoT64c66rt6hjh58bpxHYILREFUrs6U_Vhjws_Gc8BQeu5XxdArso0cZip71QGTdhHq2V7STb_rzw2H1Y1uQvbOFlq1goMGxmHW0pEKFrfhrvV4DNy7IHKLJqGsWb8sP9j_K743Y1E6-HmRXNJKFGFWiHqNLUuF5FkNoZ61zLX3FBvFQCkYgzGUvMp0hu6cQ6XNhpDX_6KNmTneq3TJbLWU5hU0ZiAwqwIwLsid3Gh4jNdym543-yTlVeNbGI08jp0JvanZ4AHyy92XTwXopp2zJJI4GPlVNyrvonTGmkpRDyUmz7ElY1fOI35CNHMAFpvuefDFfDhQfBvP5VEOjcJ4zx8X4x8Var1h7_tUm4TtObrGVgPzQCj6v7ettWERDPQ5ex4aLDORTa0jC8mqMjAji4RMo02CsKNRZ0ff_jOR2F8oRk6U8B2IN2aoWpPwb6tbHNP0nQ62f60xAVXHTd7m3iS524Vdp6hTDObnNW0Mi5MMCxQaABZNXgScigJC6JSlsVYz7bbQe9Twnwu9YvZpnjo04o5Qy_sAIlUbQZ3qdobrOiCi-UzqZM952pBENznGsRXcZHbD3Bb4iCuu4MHB2oos-d0xewfOXwT-6FLYY74M9pQDaFZtIf5uNrL7j1E-BsNPkpbEjx_dtndMSINfrTQEzxYqW1Gb9g6JGefysVOvXR8i1uxfeJX0sccxrpu2uOe9p_ad-cB6vVcus3q2hTqa9AqDklFKmTfy1Pdiuz2hF3X0sBfLhZtmgO-W4Tr23zBhwms3MHbqijhH6Kn_CKTC0MEQsgzUOeyhGfZ3dABnkRg0YPub5-e9AC2NeIu3TdXbbTxc8uDLu4v7VohpYVT62ZQVcBk7LE3E7wB0Qb6oBlHOiPzPlFmwqYgdTNjznXmY3aoyC5e-KfN0lYvR2YnTSyRnOJqaZW9BLcOkP2MOBivbxiNPA8ppfZaFH-eWRRX43UJsp6sQAGSdHpDwA3vgo_CvQuMvsKtBxdfJq6qGz8eNW8V4ZSgejYoM9Kt6n7F18e6CZD0fgznnt7smkbkFhyLK1T9PGBQVu-3cq3DjL4Xu2XpAAqqJXro47fQjrbeTsVQf27qVOJ8DPzvV26AlzP4CasfWeZqcW-58tUbW_FTv3P7u7RKXJcOJ9Y8F7qdevh-cwkX6IU128MyeO4y_oaZZfli-Pke8NO0oyzlXVzVkS69OqP-LDgBA5Yz01TvgvH2peWbBkELVc_bwSS7n-x39MM2sylpOrLKHh14pTPARvovpkyy5JhuzQ1s_TDgMZOcgAFYIASWOogfj5RZVdJv0yV0KyWbYWJZfzrBWxOFtbUZmF9fAVX3v_UF1BjEToW4lh2U61StcfpbXWfLVAtOlT1UFzhoEiue19GiX9fehXJWhlxb3RnJvvWgMfdaMTVCJTLsG6Plo0T34kQDRzkPcVOR4YgXJBWu6EjMMEa1L853KZhwKo7y7ACRaNpHCW9JjR9U9c9Nl3cnQNRcMJJ-dKWUhPcbCJVBHn9Fe8eW7fJLHl3KHWCLT6I8A08XfwW9F3KK3k9rhkosN2Z-dDmxGAGdVUkQod37nCP3m1POPrN_J9aHAR_RDrPQozL-533js-R1znumPdpRnGariuXYXgkxw2yGkp7rRr_UrMVLhhJyrD-Y_QuSjmz1f3Yzu9B5kHWrRe2H871VC0yDKSctHkP6viR4tGu5GveIyuW4YA58O4w-XXy3J_xPq5At6NlGKxvxOL2ivLv9HUs-0QBmA2lWGdjQNbUkSAynee9vd_OSi5MVjtyh4-0z04bOsGuNbLtcXyDQoc3LludQMwSaybH8HKQvO87l69gmCpXUG2F_DTBl92BFtrymCWgdgIWsS2xZ_LbgEDJ2k7oP-NWj9X9_EVckgvjCnpmIOuMHIbxkMnDLflDcRpfvj4T1-5GszZAVP9S4sIx1lFWjKz3QGvn19maK1UK7XUoLk3GX7hJ8BVRYpgdccaj71ez7sq3CLX7Os8HU7aDXH8ys-5_-N3_2iiQOE-swR-iUI7EFluihA-CywLKBJMUnPN0XsXQHQA-eKS_4gTTIdG0vIPysfTEcvWCHXAleo06P5hC9RwzwVdmrg0ltYef-gE3G9QhRQrOGgnnGnFTmEsTXspoj-4UTZi7yl0q_mY7_KCxSKtTh9d14aM9h_KOEdAJv_J5SpsDsRty9uif4njfky5Cnupaq_peC0lVOW07wB_a2l7Ea50CqeHdufDSexKhxO-ay5Q9PHoOC5EKxjUyVEQUjGSmDzWk_LtDsy_k5auuFiE9nuv_YfhaJxhgCbWos2hRE8dSBvfaKDF0kS-uycm0J80EWouyru2h8sFGAGsNKficx0YksdfYsBQSQXXuNSn1s63qt7Uw8Cdc1CQ97i-b874EFToQla3YvXKNTCIxdBU_n7i57dfv0AkV868npMJElL8iqKspZ15dcO4y31tgsyjzknTCASslVGuMpglidCL_RjC9eJJ-l6oauw09Fyg2NZPLSGmWKHJZWMIXLzxonwjrbpqbcRyM2mRWYhkYlCDiERW3XfxNwpkoa3duFG3SFitz5H0xZCjtaxR0PKqtdKonfD_Q_gEICPcv8pgBYmsXU2vNDAG5gBldc_uMUn9Hbk0WRGwYFE8mIyhl9Fx8uKTfEtGdxUiESgXtTMTcEF1sjZKKkArXmcHWRhLsQ-datLTw9b_vxcEyWkVPIFE9v7ZZIoSSeUrQi_ybTGtImtW9Qui4CgTbYa9vjKNG3ewbeW9j5C60WnYGW1-T0_7wxqh-ZRkCQSdpG75YS7AUqwyGmtCakfAcZvns3q2bpbE2Ma9yqEdWOjC1GppPHqUkIAUtYtm2faK12en1FAZLzWCMwdzS5pfry615S0KHofUf4iDSmd7fMRKnGKA7DWFVI3q_cA3UBXlMNz7qBvHQw3JJBOu6770eDMN0FMeqGrxnLuaEOClw5jLoEucwtcB4-odhQRKJIJcVf2Zteb5BCkgb52A5sgnW-EYscF9E84TVx21Q4MFZZYX_V6BCi9KmIj0H1J_2zEv28NDLpkhaC_W602kPlSsRdlctNeJ5m35o9v3iqGQAUmg7642Tgg8qyG8Q0qvzGYfShnWU_bFOqzBtIxUABSOjP3vvVPhTt3yPfDYuuec6AyIHjiXjEbmkTqwJCPHiR5ltFjfAdf9hdXMNS3vAhD3jqm-Ir2Kgpk9c1IlZHlxdTL5c943E2oywg5V1ViCNeNv9PE8lq-I08Pq3_lSuq9eXOLcW8rkZizRuXUsO8vCiNxUVtGAMKhj99KOrlpsMhhp42YMwO0anAC_wcuzbCY_MN0QrRudFAC8tOojCFkQbNNsIC8pIRHty3EnWydhjSnjyVXDjlqbz-FIxbSdOvIvY-VaVKsNmJhN_6b1hpkbVWsrr5V3Wg2EdodO0yk2PWXui_BdsDlZvjGCwf8IttarjB0RmgTtBlHgp6TvCTEj8Frb51Umj1_SXWBCGRXsJZAlXCiMKxXfvtpBngTERXEkbpSXwoPStthSTw12y9eqBznd4Fq2W4fg1anLy8fpKWOlrPhHewvg4m8wL35b-R1wWmG4y7UTNDHEokgGvJNloD8apkePpijLCWktr0xXFXt1NxdfaFeFxqUk--djKRaCnsX0TzibQY6XkdYYd85Us7Qv1-B_hbhNRP7AUCCDlN_zYpDZtuRwSqLUKOSbUHVt_VdOwkv9eskQiWTPRf2iXXRTvuhyatD84LP3CJ4JIHRdHybyIYXA6e1SLiDo6qXJbPxxDL-RQepWytrvvDuefP1RLCeVjZaqOs-h01kkuQYWtIESXoj4IdEfaSQBCasSFnTp0oYNlUMif8b_MA8OZ9w85SKqPlbtv_Zf1gmhMXD-n9R5EiCtgo7nfly7k1qmtKk0U_b-pmtxYrjhUQA4FpHqYF4rj1ZvSWA3HjQuKwI8wA9sKxQjRuX6ZsL5wrZMQI8Ho3FVS0rtxmM8rXXv6RVhy9OEDeBBecoN-WtahSx3KYXeFk5ZcJNtfvGVhSJCrlKE4IzLzmaLfvrNcJD58z_tkXm5-9dC7dl1vCom3ZZhhRSVYQJPh5fx5RKn_Ji3fKIfej-jBSfTnBn7rzPx98WfNEAdYcp61KGR-ugk8W0Hhp4sa8SVPRykXjwGYlPH0_uxo31YluVbtX76zorCoUhNP1fKudDuMLzzHqz6eb6SEZhMqN_hL2gzoaIwZ8aXDlpYXiBE7jvSGTYWNw1uQGoYG3_Bwr892iMDvqBd4501ZahVUa15fwKGanuKTA64uWbnVOKqAWJoYx8TW8OZwAdZc52gkTfy71PiUMVAaWicvj17XrkULbrS5gYncw0KZtgmoVaAIs8VRFoTlWkC-vUgQWx5uJ_wIVDfXhbquSOPPu93B8r19TPPd1V0_99Lgenj58bTQqpV4S-AAyP72qJScmbvJ1Ob6WlxQZc6_Cgul4p21Af5xJXaFMWQXqRGkP1AGCaAaCoHHUCgj3RmhIH3xCLIoqUnFu912tGTZf96qsOHDKaEaLy69qr2wFqLRMAayD9V6jwmruSkmIg4BXET3xtZOQYdJN2uxxoyrlOCgkjoXgFIXnUqwMBeHjrx3_Vx4Pt6JkFf_6xEOfEMOa8vdpx5nsVkDbRLq2VWDf60D2DT-WMlo4IfbnuD_EWJVSh3lMBbqwkoEYjV-ppZf5HW3BFj6GVaabrX8xKNR1faPGMgx3ZZ59OxkK4ZmDaZ15YaeyIu0n4vFBK0oFxzxDvpQYIBQvZkrxgNnZdjsp6drRtxYbF8XF8-CaZtG75JmrGOzm0nJWKpnXYZL7w2euwBaBIsN9Eh8KOOXr6iFUKs11ztB-CmzJxwdY1EF2wj7ZtVucQyxkCLrRCIIlz3cGDHYMskgHpBAMfikqQoX0J66eN2JoeCLQpEkGnMaf6nmvv0tZticSE-SAQ189lMvk3iPT_absSvbRY-C9XF6qjAgOab3--UV8DLhtzOm4LP7SricD8oYZB_ttJtfdqLGfXRekOqaC0vvfWYGRCPVeT67VHo_8VwcZzgQYOnNOC__j_pmhAMNxalIler2h15w8KhfOynmeImCyPpx1kG-Ll65Xnzl1RujyvNqcPBauq7ZPyzg3p-r6z4n_FOWb5wXl3OOhobG45qgTSWqwq39DGhQ3jKlkDfZElseu4IUQd4H89ZmkxdRW8dzqI4nJ3D2_lbbldTnDx3GmgzKq9_Jb8wzgq4YPa9nlGFwnxKa0Q6jc5Oyw3DujKSDhchkiizxYi0SfCe5mvgtk1FYzpB8v5tTYjgQdG7MQCM6UkYTQecUgJ6LZ-ZtUdciaSVu-Sy2r6-79VaA8KB4hNKdI9pLb3z-cgA7z1QcLzXzRhBQ4MoUf-abMhy8KQePNtwIycPjLDdk0g_grQyZyfY5541vthWTiw3dz6POuN2uGMWnJtQYB1kU34H4pNEzf3ceVfO4pX6m-B0KXH4wgnyeYYvAhcpn_LUfIkUj45S_sS_c6N_FLDytqTRrNW599h5upL_YuY4_AcPxl0T2TlC2pNUyCRjDjlJRQY43m0Jp8-kN_YWz-wfRbp_groJm1S5jF2Zfsr3LxQKiW3weXvxWdC_9RwsgxR31CaHvCNKaFbXqyfAlVjRnVf66vwbJZtkV5DcZ03tVo03twRv3Qmfi03jxgy2zIYo-4LRdv6purYo1rYJc7lWt2G3DRCWipfIUPtYxdxhvXffFgGjT7Sdb7LEFug4aezfatflwQhgOIdpBpt7oWZjDeJXxg226GLsm9FN8gzxgq-UCHZ7DnjojFLppjrtNARbKWvvJj6J5PCQanYvVgDSUsAA8AjZQFIssrmSKQd-H8DZTPffY5ZxKQUUPSR-4FsVvx_iaEiLN9cMhOJgAzhuQpCRUwDYMoytPHPfaUQphAeMcdMz-TJ283rpAe7EmXFZ7BmI7IdrcXHIU4LM1gwHhZ7wEuSP85mOz6pGJmBG1qY-sHbVsdboz9rXn3XyqzSarGaojBAPZHjKiMxaBWkSQB69Telqehld1eXjnym4ujAzS6AIF-vVsvvkgXiulu5hMqZWbDCNN-L5R8hCyXghdwSwwD-esieL91dn7pHd5Brv5sJBBA8mGD21zaDBoOmE9vEjV8GRR23aN6QTAMWIZ7FDbMF0CoVu6GRUDq7bFRxI0e6G8Zf1i8PsZtZXgC1s2Tz3ghPzjg-uklIKG6yXl_COUDktUHumJusMRdnZmZ1D92W6vcZbcwVkXmXmwqImjc7hHNXvh2QVfL4bCXdwZwPRBIMCH23ucrodhjcTl0iIa_w2RTVEOW-I1cQDEACWS56hdZ31kpHi_Y2Asj-ocIHdoZ8RHr3vV_hfZvewv4K5sLdPtLlq6j3XZftXReXcWind4jszxWTkwIAALagqaOHJeho08mH9wkYy6xlerihMkaIcdjIRU8u-x8g7_IvMV5H7YaFBdNEf2g5GbLgw0ZlvTtF0PHlDzsVy4WOuh1Wuq-TwFjbhLpfRgUeVFzczz2qTDm0XDReg3lRbfGeArEOFGo13qfoXf0UQNTxgiBIyI6tFWlueQfnbgJbHRPoOLnxK4LvhQuP86bj3_mQZsT29apeGZVgFg2cL-WsA5Z5DiwUFsRt0AlRL_ccaEuKkb-Mg_a7mWpN7tsolGrTkRnOTp3Lh_AL8j0ChD21fQ80A52GEALsniutz4y_2O5aZQj4jyyP7g0YiPCJcVCPJ2tWjfC69rWiemRSsstzuhtzqXTsAi7DmcTGjlqIfBfKbgvIXmGPZ4Ey-Z5Ajdy5B7O9TZBImBBQxzTtyopjg8n1NnvpL_k40xnez5KJ6ZBdD0bNtS5hW2X_oMdfecQiu4C-0QmKEvof0djIRPbstNNJ_JdnIcUfPv0rODfcku5qFQGjXm8fPLXD66rkN8-lhfPqCXJjPBuRNczrwpZikOQTbEZ1RAVMRhsr5cCf7vvfrw9bNRB6Gbo7tfaih-5E705YIkDPL8Vr96aAEbTSMlMqnkWuTv_odT69N8jdSW48TN9gscAwE5-ZlCQhNvT6-3tKma_QaFyGP-Im1dtM3-xfX9u6cbO_9Lox_q9PM2FXUwxeVbFAymhGSst_-P7sKfBbZJXHk7FDmokyHaP6m3249Tp2yq-dBlT5RtWExk1zh6bJQ_L_YRzWsDV1kkKQQKdoVlLl_i4s_7Eu4xuo_i2eLFuycxGTfJiUc1QmxCckXP6TjqVsv2Unca0JQQYiRT1oRR_bgPbjKrDIvGyaJZEKEH9ONs5qAy_zpR6A2UI29i4tWTVTh-yiun1jDzS-8ovUXz1PwuOxUvShnLuI4LBU6TGmjOxV_9sWmXNxl9koKXWhjY1WrNFoCATEGZEt3VY4rp52lxg2Xtzd-vVhsiGSojEdv5jb8QPk422QbSxBhTa3L8jTUVXV2ghUOfE-Mk80E0UV-lDYuYFC0u6gT_JT6ZvaFHRkNLKn4BjMTNEQ6Y05GyxeXassnsnDSJjgnyxGfTTykmYRBMRYpZSgweraBKGZyZbAMEdsAnAuAm7fLmJRSyuCKRSvwkimGP3fIyF5Ks5OVGE9ROT81l_An-cfvJsSN-dGyDglOCyGc1wMUcNS_hj70KRzup0_CyWp3DBklt4w7SLDe4YUgVaxtmTtIREbNVhT2BVi4zqjnNqxXBCkmShyD3MWcA9HAaHGIIJjZWKRYvaZAzDdDo1jlQVZ-JU_ks4Ovn3cmxth9uU-9MQfMV_H7iQcLnqBgKrQnMz-M-9ELr7ntL8s5Hu1gDoyjyGm9Q86IOX5GJQdQENZPQV0D7nqgH7AS1-9EB_-W0MCgRYVcAoBaXD7uJH3SWsKGw6KIbrQIycIM0L7_5T57lZnnUgK7oa9lXFS3tFadw3WrP0wKTbzbLon0uuOB7rCD3jymr0c9vtRXUea4hSN8g1bQ2guFMNErbYUAVi1uMluzS1PzbvWqn8qUF3mTRKGypmaCiIhHkIzm3gqJUl_s42WV-00JTJR1vMDMAJxU8u1d18ho6LQuo-twkLaa8_htvw8_6fdnZxghRYBQlDRt6UdiwgEBxw2P8m4kRotSTcuKMjhQzd3VmMkGrlrGh0iGPrMQCwXLRnvBBtxq6GhgdRJO6bz7lA8lsd1VTVt0iPyAaQktMVKn5N3ttjP2Kxsryo-U9ngUOUsDrPb0Em0QtdknERLPxZy7s4jAH9kM64E8GRRVBO3GTyLKsizRPYPIJep6yJjFYkwIhON7s6xLCBzoPn58dNrzMR8Fca7ZaGW39lD3-NJDRRqscNEakZnNpS0mR9-zEzX0QUqHDwNWEFUXfb7HzqaIVb2t8uTKGAvbUFjfVJK2O2qxzYrWPBPbUnm_IuyBXY5ZukNTumJ7JwJDfdF4Oh7ejft6l1S85SZbP3TQpkv-TC4RymiIL_QuAAHiHfNcbV3yP2rhpoTdhXix2GZurq7_hNv1-UgXKgGDLHKU3cu1Bs7u0gKWXTABcilmswAEENXNM4EPTeqHWsElv9eb0MEBvFmEg6gkbpoIgviOZtGCv2ERBEAq4tUW0vObeJDTkVvnmJE4828KylL6pR78tY2PACsU_kwKhXRaYrwmkC1G2gAvJJJy-t4GS12QFKaZFNAynKGAOcGsu9UaQwljQc2uSUTH5crLAOdfZJpj-nsT_jl-1ijbMRPlSYCyN4dO-5qlLP43WBHELNQ2aDOU2WKtDq5ldBsXJS3ZDrDH9eMW5GFFxbRRdRAU3IGNHLaBzet_fF5GVMyKRb1V73Hr5eqzsmEyTwRBKiBNDe9HU5WPlyd9YFRLwYrFQtkTJLIs56HSmGVEgu-93gvdWS0pnm3avlIq7DJrGvWV10pChGyMrclBWGkUDz2QgbjLAjmnwP8ujKekeHz6Mveum5dcuOPYQFSBXLNsCKHaBtuMbvdEvpOc2-anX2fz-DgcoHGhRMN0XeY6wn9GD6lmHMEQuNiTwx86JKL5gx8ELP6EiEoO1DkKYrnVi2qIijZQsbqm7Ke1gK3dVZ-pQjItrCiDJ7rN_QTn_tFg5EYt4AtyIcLqKnroHPQ-4sTGJZX_3Mye2w5waXpJnpx62Qtl6InqzAlleul8gE_B-BwtOP4KFP34b151MVEft7s4dX8nnZp0iE8dFIaOk2bqy5Tkn6FOgmmqAwVnK3l9ABIHCWE01b8xftP_RAe4WtPZbmgolOG2eL5ODsLMx5qqYm9HZL3gR1mC6AF_TxbLKBAtIpWBWkCIvpPGqVIMsHk4-ZxXz0Wu4A1wi4v44NdsSbpcAf2DWApp9l8amlwsqpSlj3oOMAEQ87L4Hq-wXSfg6RaKi9ZX5mH-QDMWkLBzpM1JGmR5iEGhmeS1bWdg227VvSR36rP9pLdxJJUq1SwKfB9AJ_3G6nxnd-m1EXKNId0f33zIzPyQti211-7EjYR-6YftBZg5m60ukMIGIfNZymJFaILqG5ad3B8PEAtblnX9pu45IFEj-PRjFN7Tk8HsPs7vpl-piNjDkLb98AVcwiDguXx7B0ilo4TRn7L-OF-SbWPjcL4MciN28xeNcVrT5uKBBg4Ik3rvEKV5zPgqFggctKBVA6a6ScgZuma56ZGh066_UriwORd0J2FDrXWWOPqNn6J4m1W-P5YMYdO5NrT4TxD96n8c9FikZweYgGYa1LY3-GnsrNFaSP_rcZEGBZ49Svz-UJ1EVI1BTNMNfWxIYXUKQGXUXDYudztg1cKpzwxudiXqmsaU0n-TZx7MtJUemFeeCwNALgeVu3Gz8aH5aP9P02aNzjbgdh2CT-Z0taqEgLDnXqjs9BJ_yBcDRV4sKnXRwjwPt04z29qLwDANKqAwMt8unujbZ5zle8Rl4Ef7XZ0EXE2yKtZE5aWRlH5j_udBE5dVFC5m4nIa6sTToymBbXlg3T4joaHgYx-7uCpcJxAjOeLdi9wViQi1nRJrznDZOqMDwrHb4odNV5TISl7xw_1jyk3RR751Tg_pOVaxZYh1h5C_wHx1gHTB8jY4wvXd43hIrbFtleRdLjuU0oNSGLU6EDnPXvrzBmnKSKIrxuNXJrXsaid64sf6ztTlrRxs9beaR_T3D_z8CqmzpqU6vPRLQMHSCU19SxqCgzJlTH-wVHQVHdJ9eI0Ifkr-Z2n8HsAqutnYZDuf30P9804fGFdrUJ5BEe5uLpq0fSBqvGrUBJrL7Z_aL5ZarqF2gkh4RIIMP_BJ43U6CqawZfeiu7LtLsa6vYC7UCVKoOfd9ljhzJRtUTfjm2M1Q1_6A5n6eDUR4lt7wM4_K2BMMYpsvpCnGyJVg7RxivVhfx1oFSlmekxDfPOLaAPjcgsIXcsbwJtm5V94E8mWcAz54GKJ8XYdjoYT_DHE6HUulauhKUKU3ZEXVxRUPlKVON_XS86MO5bsLVYaxd9v1L1Tky_TTnSsLKXY23xtxhevA5SO0jgjuncKkKaxBS1uIsUpSYnK8J0uFsz9VEdXwcMPpkwyjCGWn1CwlHHlZfAlHV9s2smbMrEST5Y5nBPnDHr_9m2vZPvC7We8DeZDLROWg7zhda_jTkMN9YAxqM2Nvw-QFXemcu7JYTqh6VvcPMjLDpggBflCJEsedLQX4Q57X-E1YLS-2UXlFRFq4MWKHWBgKBIZGhvwnP0qvYTFzwsauanFBnz9QLJonecwrVQMcz_fl_LZ0fYqE1v8hH2XKfTWEND4nwlejKq9xi_aytdRN21AhKWYZD681GJwu0hut7BvRHIt6Wg02kSfyT-h3khr2VUf1QP9CXNH0BZSzbdlbyCkMcxLVbHTVD7l3RS9fiGtQG7ssM9JVzbnwE9PXcxAM1awryaipj-QleoARWIA_ZA6IduGhd34okWW_SE_-XSLoHG28wB83p__B511Gw9miYVbpX1CeHoyd-x6Zi7xFU6wGkX3NSH66evwzVr3q1geXB5fwuc7mRLHkGkb9Rvj3ri7Y0HsXkQYvQ5Ox9J1Qv2SPnhG-N0VkTLikw3KaH5gpGWwzyXureS7xwpOo19uIqA4Gnv7CMapE5r6dlwgbS_1S_Zq4Bk8QVOM2_PsjMSFI8qZfQvVMt8aRpmslL9-h90BWbSotggHAZBsYP2nzxp8hONrvVcIfgt4cnNB5UvnA1yORbRSTsAzbvDSdAbeTAlc-5lPcKCfGhvfgeO5cB0hFUI42QfiUNhlLtx6ixio_MXWwnpW1qF-KyfWHIo7CgaruXbIEhXgS2ndILIH72SRijX3tzTm3NNxx3FJCUENqKFr1rJV80V65tFZfIHUW3mr6IZdDUOyChOi_m69pVhj-FMB2stPimA24QlkfLfrWETZsl3tquE_RxZi_zU4gKCLD-l03nN8LEu_tYMm8BM20zvghvTyF7NdThdiPsTVOF6UqyJ8EsaWZKb4SQZIlQ1NRniqGH8O0Lw6ui_sujxo79rn45CJ15FbQrXK59Q25U7-NTyPytdiM5-IhOxycPf4MTBZiHvmidNCwOY06sH_5GBPOlT1PVdA8qCFSw_v1mumbH_saazGAlZnyj5Z6-1RCzlnnhzYLTELGzzGOM9SREk-kM2r1CQXO-KjOkILA6B656fYHHVxaYg5gPLiUFGioYUJkRF6NEb4Bm_RIdBl2uFWq_YdXXxpSBmMHwHiPMuFThcwMweeCTFAP3CnmEJWsyK23ytGRzEr1xDlkIdcE3ph-jpgtdlsfYiQlX7-pmwyPiHMHykF2X752mRH8nKcP7sgWEQhllc57TJ1ETX6v1cMfXmTMrlJgojtO66tiHmlvcpYwKNyaDSS4dKqm9nc3bDKBj8KIdJn75hTFtWUAPmJ67ot7R2-V61Uz4U4RzcJlixnl5IjSEh6Q2eo9k5kc-w9QnUQazL4ldbz_BhSwCbdKjZ4sAVSZp0fgr_YOwDakSealjtOrEF90OYAFrsDqAAGHMWWkAEoVm6yAzGeYEv63jFzGYIF2Zv07MgDPrCP6uTzUt97i1YtRg9DvAuC9C9uLGX3yb52reNmriiBCGPyhOoZAGk5-g8sJiwEn2LFfa-eCgvjNRIN-1KBG_6LTZ_kN-wU8GFUyM1g4W3AfIpGANsuR7D3WI5dBEDXGTooBpPBCNr6idbLuFPPXzOUPHlecZncQIk37rwP6z7fRBZBTxLjIxjSYivt_1V_TShJdwmVYddGtZ3laUDH0lQKXEH0WZUTjZiKlPehMgFRXYcQGHhHaDxdMcmA0DLbH4xD9upf4-67OHdhT36cAeiQgVTout1NmaBwmskOhQkbp2mMt4uH9_cPsBV4ZCpziKcsLUXjYXlvJ5Dt_zOswR4qrBI542bkZahhms_vimmOEp5UCyBZrB1IiSKRnrMgt34G-npqcX02nQ_J80I9_UA6gkntSfgJc5VCX9SR_9rZoLhncodR5kGkg1iq-nHQRTM_T9C9LtjwACj_k0hC5ZP7EbaRvVcG54gMW3H1kNL0lp3lJpUFGXzfhBG3m-dqQ_CjP6KaDdhFH0QWMZEH39OIYxGWfE1Nb-AyRLT13WDX-xVOdSyHiKAJrfjlWrnN0szhzMKBJa8cJN7rGi2ufYEroJfUmVQ2ye-19SmS4oDfcUyJsGoqczRSjXk8BmSqEFxvft4F5Jc8OEE505daPoZL7tnq9Lho6hpqWnZIoRkbJGBzQY4u7DHz43babsiFA2AykDzsQNmLEiib5xXDiU8RPipfXSCE2amAaCSeJLXlLzgTfBbn9FpnvS1-CGT8fKf5fQF2ZKFxhwssSjg3lnuF8_fQ4ogganWJd0Ck1DYwymzfGwrSjk7h43gPNGiH1QhOrjJySDCRdYfYI1uINlBPn6w0yIQzI22wDeIrYrvU5xfdGILR3-WEkAyKVd7wXS5-4wNRhqz6NUndL55eZeBIYWY-dkJ1iPAi1E62lwqej6I0jR_0JG3jOH4RudXtMLix4810fbsENy4-K1yEFCS8VgxXn-wPydMPHlHAWJSZuXiVudsxzpBOfl6aKgcbNyX8sqpIPw7Yj-DUuNOoJa29Dw5k8I5WpZqainPn0HCH4ecyNKmNRVVQDrli1NAY4tOVAU7JQFi4me_gfLKuzX00aJ2-MXzd9CKrHiLAKdEU49UUabfiMnIezJwgrBNN0hQqQuH8YIZbGWp0hUK-roDn8dFsbyuuaSBZ-bEeIRK5ArhC0G6YoYu8YK7I7Sy5tX-9AY9-nkMS7F85xR1yYMiiAYMhdYZzg3mZ3Rd5mOTyebFqgRsTbNmaDMHInc2nW2WdcyJclAV6u44KJOE_0kIUr-eRhPKLnPKdYvMCd847bohxBQtAGPBXU7sqSEbPUvUTS_bYCxpA7id2_Uk9UHRlNWTRcrzzNPvdLt6s71WRqBNw5c9UYc_VfCs_wepcRre7PtkBXUluhOKBeAQhQ1S86zOWLjZPAuM7RM-7cxqqbq-lMENtxV-U9qL1LCMT0jg5Hr94Y8BrLo9ROLYjD3G1A90Ynk8a2kjDC5eQmQa_Hvi0Ry7tmbPXcmb-NiBwHj-0fCBmg8EX3aBIcbA5OLjQSnoIldwH-RlEcvAIWo8j9dmzyJ7K4xCyzsaNpgRuJ-b-QN8p1h2XvAlbePLLTdr71rJSN62P08YGMPv6Zvg1h5dOymNk206WY6qTTYNdHsQhRitr57sBoZGdKG2OFA97WILfp0OhYDLCTF5_ztBZk1117m20SY0Y1Q7t8QPSlCuCX4LnzDAw7y2BIoYapDqrz7cJ9kOgIrEs4F2LqdqdCX3voh25bt9ZJEuP4sToak--1Hj1e1ZLyk7sznjRyXMLFm2K4wfXAL_Vr-hgTqq7Jyn7dH2lx2yJVNdHCb9RLOgKLja9DjbQMndyXjYaKobqw6OlvvrvHtuj6NWPXZhAv_fc6kIqHtlfufYjz4wPESfBweY4CKn1_d3QA9ptgFvD959qnv8naZfwJTfjUzb5qPZAlfE9CkxjgggTBiNlw-mHONKOab9PK8TwN5Nl2mh0XkEkmt_TyA_BL93mfIHrxWe-U-ZOJ5bKqnp6hRC6xNf-uavTk9EcSoJDX9ZzuZRT-8AKdt95HB1uLMLd3rE4ZSVgoNB0ipke5eMYgvufRNLh5CH2yzXzcxAw92dV9-Uqa189RgupwLvndqHd8pMqcYwN-oY1Y2jLzqjsEHGyNogBat1NskdZ6FnuiFPH4MGB7fq52NzcrW5Budq44XMFK96cwe93tuqSAj3bUQbLqtJyXFTaKvgjvOIGggCn43ZiGoRG1lKqbtDucJKVCWsdElMVvxMWKFsVc3YkaXzW81IsDwXcB9s0248hZdBhjMWb0qcZhoAb1X973YARtNZoBVEZHnzrH3UtR6cpM33UrqAAPm2CPg2UMr2_ExcUfVbylOe3-iGq86yrUStlrloH3-9drbD1f1Ej1iuNqfCnbWK94npb4Gpxn30M283uZN_nAEXEaLvVFXkg76sUMqGblMAtkQH-HNRVtdRra3VGhLt86R6lu0nvpXwwcvkanSyNoHwTQ8nIuKk9ral2ZUET3ovzsR9U8NW4pzL93Pv011vJgfemcvrGGaRzIbtcsw_TIwA9A7weWxayDodKnvKMXx8dHXYmP3RCybG7pHEg-AK4voXcZRQEmDXaOLwoDmfe6Pi5ABaVvt7KyvW76xUT0vyT_0OAj87alQCx99Dxobgi-jmuBL8s1zm_y_YHNqIgeKTYgejBl4YBG5X9tJVYGTKPqPTiMAbfwr71Semgh35JW52P6SpILW8qO-slQbYBHUojkih_t6cIuSZHdEZ-U3lMd8lqRFQJIwYnrRVasBhwDheHFCgTGU9erQsfnkPHAnQPNMZbTExStd_Ft8bDaUNaTrpELxDyAoJMvRj0ywdhZgtURRzvHsgPRSVxPQH-_VGFIoKAKei3kB6Y2cgug4ccmhSRzoAAdf1MsJx1lEn7P2GfmNOMofFE-A_MZorygLu0upb3oTiCfZveiz2x7TIXz4_0gBFoaO8e34wDvI5N36HtNw7ID-tUlPCEYyPfy5I4Vj_kmN11_uqlaHuIC0gLCMLFS1D5li0TIQ8J57m6UZUqFtUDp454yIcsoo1R1tNqUlQ1mJUBCG6kuNbeES8kX3mbt5hrdktx1rbgbf9Wa6yPpErkoMS0lGcc31-T66W1IHcx9_teySJFSlB5MYZa0qtRTxLmUt3MESWR62z9DMj-d4_KBxmRblb9892wFXzUXSRT-_myIv1mDcbMxIeHnQZC0iBaCnQZ07UPZovX5xnNNf-vPlovAKLzFE7l_0MoIGaQ8G9_TBvbPpP7KaKfIfwh2IoUh88epg_dYuFJkmz0VN5N0WA0-IHqckCaCTB6yddvKzkwfi3_QIYfbaUYrnyArlpFITqvmrPd4tdxxIPWSvYb5TUVpAFfVni1gLf_5Y6p_pvxjG9nHE7FboZAtf2R4GNaE60K1tDHkqkOlsbCWM644M3K6oPWzEF5_kH4rqUG8hoFI1fpoVQRotBK9VDgTLvWES-5iolsWcE6TjA_35MLBPBKuIDPVs_F_YNWlxKJPJPXJ-9PfdOEF_aMquKiDV5t8k6dL_kQdSzsVd5niFTV3JWPlSYRHwfCZI8ue2wOzSEZbLKDDX9MAnA_xrckrte7Yz09cnwNajOcbi8oXFrBbvlassJRK7d2tVlhVTiiF-xSZhT_r9tvWO8anLm9ht_HiPJAUmxNocSps6YXZyKHHCA3I0NEGP0dTxI98l2QrCOOnqTO9YlTILFiPo2r56QwWur_GRf-sc3EWVozM4K0H0yrAEA3EbdUD1dP9WxgCbZ9wbHhgg4WOROP-5nl66lU4xCMF0pFagEyp9-LXYsdNtFBet3YGTgYQI711Fa7BYdR4hv5GB5oOBw5twZcyd2oQC2FgkxKh_7ct6JMDSeImvqYGx5v9B6z4LRAPQb4StW50FkiCbiKNzPrZuuNagWwvTm9XJdjkS7mBg1B0JzHkddJvRZGoEUj_hPMjdXm7BGTOWzh9gjNvO70DShksxdq68wGvyi39eNQPCZ661_WD88Fuye8u5B2ahG-cpq9Evs7XUhIo5h6GU-31MyWBUXVRK4AJZTbWKNIBGKLGCe3Xjj6ffysl22AETuWetHFiXHAr8wWSypEXro71cVmJRImyKzXTTaEXnFlV5K7r43evCjqOrnRqW6hoenxJ6WOrweR_drw1LMNfTvNXVtQzqnFD6zX7syACTW6bRU2myel3lio9ALRd0WexWfMF8o99FOcn2vMPLJQAFs49ia4HCr9gNLV07XeOSjkAM_r9bVJ3Cnoc1DG-S5P1-ia_J9zBO-GqpA4gcWH0ZXgQKNDu-L4e4MtQo6uSRlaGzcjNvNibv3PsnH3Rpffh1rO1A6PteGgRdHe22Nu_eFUxdH-nl_cKFmtBqUT3nkOx3jaJKuArbGAAlEJ83zVDnBxOQgG-i7ndPDkP58lJJ215OlwcJk-m3F6giQnFKopS0hBUh63e3c0NYdpq3kE13uAT_rXaX3Pxf0rp6dFhEukCy9kw322o3IR6Tfmrz7Hy7K_sv-aNCqqMzzyeoWk07bTsHopvgC4Ac_kbWzypGT9-Ilw_bKJrT_HpbqARDuGeSSwaUOPqjYLXCH13m62Ik7Kg66MS881jxthfczNCjnNzRcsV7RmpHKRwf506SQN6v9rSs9NnKDTzm9-EHehISjnRluIXGrxpMyYLe171_VWiyDVSiRWT4ZZeWTQoiVSZKjmI-KmBFOnftgpaGtvibeGOLtniYYf5ByYU_x2qfGdjPcG2yXRdg6c9K76tA3X4fE_RUW6BUcF-aII-S1XIkcbPnjZNAesOqx7y8jj-86pqERZ1R35XSDN2F5d00ofNeirRtF_HV4PRYcvo6tWDtnviJ1jE3D3i-2rZJlXLBE02YfxRU1amt47oGPyIkKXG8uMKH2Dqt4dXHFlcNlJTU4k2xLBTzMuR_3Obp-2mAxUr6Yvog1IQeaJ0mpZQqrF0-Jn4ftTlipoIY9akF-HV6zKlJFr-BPM46Bvi4tZMpHtMLvcRBOjIX_CJdzAhI8T8QQAhVahY0ZkXopsLh3S-E6eFO758lF_56a6ipOCpV-Q77EnJFAle3qBOtrO5cwCtRroDbNYyn4jBXdi-YzkrrYAoWO1b1BhGaJ4WXf2Ik1QGCHHjDsfv9ScbtCP4bsnwP7zLT0WwdcJL2AeMz9_WHmYEQPUQ29uVuEGCfBLX02DtLPm1FVsfkFbnhhr1ipCbSq-nl5GW0CGCvM8PfD8JHaX14Osg3Sz8wvQmZMZVwleRe7ANaCxGwAzGor45Wl-4u-GgD8kAi5QWiIPNyDJLex9kQFqWzyLLVya6f-YULuvZoQR1ByV6MVw7sBsKyjy6POGnd8cQZ4chDcT33FlN50_xzSst-ZL9bQHDQn0uev5qHqDwLFSOeGxsJBGSPzlYmhlZYfYFgQv1vnz6iynLv__ZqIpgG1ZJi9VjeXim-yTYQm9-kFlRYqZluaXQ1vo7d2B7UJLlxiGk2V4rgbm98ssAH2qoZGffA4JrALeWiaxj6abHzuXvjRVvb9ApN_qg8-OrmwI6BfiAY6W02vpSfEOCegnKkXP1EaZTdpywVwh09CcxXMykPHmcjKzCnciNMArn83ElBBiShasocOlGBK_zQYRvCF3AXqoghoo41FbqGe8p7mRgAQDmGYJxf0xejUq1HkAAuTD4QMUDtrZ4-Wb_Krcv1BtAPcgBrOl-UeJtlmL2Sx5IxBYZ7jT_XsXwwq39kmC_TsSFfldvOBA9mLEpM52eoCHhHphR4Zly8H1u8U8TeuGeBlFPi23eiWDRo2zD2ny_XvdzB4hTL4pya-b1cP9X9MNgAN5uoGx3uqd0WBPHdpGUIpcpdr_0WTqNWVcV70Nm6MfnuJACIAkv4CPOukQrT_ThdtQyZtgM7HumFijn-kTWAMAgmJXzJMoQFSd2SMNb9s5Yd2GJKwU_UZxIWKlW1-VyN6M9A-LEVelaZGrLieZrzFlXq5rv3VFMueKeyMpLgg-Du6O2xh3dkX8ag",AlwaysLoad:false });window.employeeinformationfamilyinformation='';
DbReferences.push({Id:"previouscompanydetails",Type:"Table",OnDemand:0,EntityId:"tbl_VA_previouscompanydetails",Columns:"",Xml:"_Q9BfKlhrb8Hh--JgttYyg5i8OkT-kAKrnQD66s0jCO2at5i0bZ6R5ecHiuaen5quYH3kX9InDBkLMt7xcdZMDXnxWYQsQalTHdngOHAAaluByGxAF6JZiL9-Vj9AVgt_yS-g7ydB70W9b3Tv4N4S2FMSVVVCvsDM4OZSK0t12_GCpOU2TM0YOYm8nXk4j2OjMPIMBRfHp_Z3pckuP_ae57D_ApJ16JnbTcPd2JNuLwmf9yjMFPdW8HNPuG-AqlYJJ1H4vzSc_fS0unLCs7OVuIVixxvUMJwBls5mmJ1TDbRdOfxf0r9_WUEZOUH94rCMnuPRC4QCLkODwcGX38XuuoI7ZoxOK4X-D8qznVmkm2Dh2kd_BQI2p6V1rYMJdLdvfJ1CtfgsBkcekYbz-GPbF6AUxcBfJz_jW6xMMdquASerZl08pj-lANwjujdsoM1Vm6OmxNxJsy77H0PD0oNc4zSMCNwsT6zgEbkk-R1mPPuT5YuN5T_prD_7HO9NJDrEJSEAeu4H6h4Nhs5WpBfWznZurkA7qY2YVeUyQ4sd1rdU8rkDPNDZQCV7jdqBpasV8gQqL4ahEmmWHzY9DzsIN8RkWQAEUxq5CozG5bi5CX44N-1Dd6Fn6T-D_zsFGLWH2g8bz243zU8SHde3QbPtVyBIT3gB72-5AtfAYNd-896wTgr8P4bZfbfSoH825kLIMShiuZLHDzpJbGQWvw1Lp4xB2FpUkVM2EEnlCqSNa0llX0du8HMbpeDvTrcRciMo91mtwmLTpTZt0sxX86fz6M5q2a3HNZ3Okscew2XwT-GjlDluWOFAz_ULDpKDppQKCFAoeKK-UnQiAvozmHlRzhsX90rvLTQ6bm_YCwsxQyrTTfFxRwp8L9U3PSJnNxE9eWUbPwk5IJiCnQMGAuWC8af5GUdZjH-fT8aWcUyhEHzYefGEJ-1evdcbX7mhd4rU9v31EUv14_bAEiwKGoRJB0dIGCVo6msVVNdjg_Aan2HW864qvtM1cygdDhUAIlNhvYweBxzotUdkMcBB4YSlyBLdOiOzXuKdqiiSKo1mp8QWhkUMPZ9Jw8nDli0hQkJG5bQCA-fRFYP9aHTvKA8Rm852vtA-6rkqjFB5Z7mBislQ5JClJ_xFFffme251FD_PfEZkCT3A0uQcN_i8e9r5WaWOPaIrp-R11E9W-OsZZ1kmGJcoVmhfdmKh9ICqqj5NUR-8hWEzClBkLSwML3CvxsMXqQOCVi0zVU1UJK16YOcH1Stf_ZyxgDglhhDKwFohkm5FHYX-__KdpEy6N-AUfOli2EUPkeF_ITjcXRHmOBRilYWILiniDFEkbFY2_YHkYvZ28kVmEUBmE73TLrBmHj2qOHtCrxFizZRJ8FW3gfP9pWvkRJ90mTnj-MgRwCZHOvtXqCKENI-zSaT--lJ2EHKWpea2k3Y5e_rRt8w6BR_s-63H0W3HShC1cq-i341SLpa7LIJUhvw5wuvxQL317MVcu7QoitGtdZ5SEzk2-MdrXqq90GTZM-T9nSLdYdvh6bg-0Rr79WtAFlin-wnpmajVBEgRBM1rxVdUb9u65JMyUwvsU5mk3QOqW2OymNLNq7wRSqSL3LJDu_t205_XP7CNAy3UonBd5Zo3oSek0XdqL73ix4KvR5ZCQBEvkHlrs5qXKUfzyub_tfCERqUfnRza1PoIjSTQUyvCzt8bKQXY27KJyYf9xTXOcjBDnO6GL1ARV5t-y2Qo6sEONPR8852L_xXILZ-JIFqFNEi114G_1BaUMMgaiTRfi6m4w87RMyY7BsH9G5cK4oAcLS2nXdHeZ-9oAeKyNIwq06hhzsUi3OplituIKncw9VxbY7_36Asg8E-eHytymIUvyQn1kUPQl2xsewyu9Kp_2lt5JCy6B-g6mt1AOfPIdFNuqg6JlAZ3SbguMS9TPmZYHD30Aan4KZoWbXhvI2vLO77Mw3MXy5G_jIumfS_GNfYwcmWe_3DrCjawVmQ4m7gEdmHRV897046yOISA5krm1Q-4ZLM1R1T0AbiGIrpIc_b4o-nPpsfBbyZvU5Jrju_fd3b-3O_11zEayJwzHwJ8suzytOn2I4x2rs0Q5tSUKSqM6kGODPAs1pFdFvzqxb1jyrDtn0zmnIzOHmpmv4jaA-dgV4oSsp5AIgI9CO_J3LMz-PwbWhM835bUifFTirhvZa97M5aevQ7vBlRWzvflMtXzk9ppv6bCSJ_Q6N04vVvOHkQtYOuEWNxgRa7Mv6l7xT9soipMcV7_WDFLH7sbXyOT-Y_fx9mxvu9LQJEwnpK43wcr5w8Aob8GwxPP_5nWjXQ_NcyduuSBl4bIfJOgUyWrwmX5z3fivTiYI_IrF0XZNQge-RnxvdcPqpMn4BsDQCWZh-eZN0uRX8ULIVs7F9iq_xoue0oPbAP-qaswp8OEo8GlgBpyEEw28Xh81FTdQ98-pQlNbzMVafwXaIzcJKISsEc8jbuok9zop3nszX5INfK0_MdjQ4NNAGm2TeCB7BFcvpKZfrFtwSm1u1LhV_aSJm1G-2pOS3wS5JqhDPLvQyTgPorYRh9mWX_7qhNWOFs-nnhwP8_pgYiqVN68QdCXy2vvTbcEOEILVhmZ7A7fhU6vXZ54QZmMBTx2LxKT2fbRlhdv45v-bA7krOQ7RHtzoHmN7vMnWYScwOxlmUuWrrtfNbgYsisuqXDp5aM4AB1pfDxqX7Z-1zHagsHMIuLmNlRb9QisrRZiz10ax9cp8BSvWKvNXJvy--qVa3ckgEPqOsrD_EPfIxoUZCjRm-62JwPOr_5kKb0tbz8GhbQNR9jWG_Nif_OkdZNS2aOSmOM2YBwgz1hCorSlXLcviHraYFn00uBfdFBlPD9wbma_pdSFx77uWaowCAquoyxTxQ8yjyCgzArYRbx9xix2ZzVg1hqoUwDHPYxfbRry1PAFg-UgYNu0KeCuzt8nsqBEEATj19M_DOKxx2NKiPy_MKrYNi63n5BvmHBJs-2v09FiPnYAhRI3nNdQ_vJQ8QNRyQB8yAynwCqHPclskzSBc-cGJ6uVmj7nbwFapy4ttubtWAroQwZkm6FBYQttNmSW10p0iPBdQkJe3gBpJCt1CfJkM94JcMQNexwsvYybOaemXYLKcEwSCh3W1J8cbmAoUIVBllXhOOVQUm3n5hdYN1qb7Gkphl6STyeU3-7Im_dbGm4PVZqqS4AEPDZXPvKtV3brSgFGINq044yOiRuvv8w4ShU9A3SCzJnxVR1WpcFATBtW8LcYRNsIgxKXj8U8NHSavWrfV08BXytDyxW9NBWrMAbSqD1YuWanE-tDRwWWLfqrCwOJ7n9kJDnx7z9T-_yhQXS1FWNHQlwsrYdkI2Adr2F7qL3eeJu2MLQzLbuIngNp5g9US6eh8EE0VkH_QRYDocqfDgXRQ7YeLt5meGYgEi8MHexNLMsZf3XNOQ9RDR_XygpDQ_hIWpQjOCgCz5tsV5Bvr_852HwDKr6YQWbh5B93ghsHCS5BZAJI-ERNK6Qr4ARW-Dx9nKpWsTapq9iz1aRWECv_jCxqfX5RDSO7MhT5ALKiuNjrZy3CVVV04QMtPP_luiLeFiscn2ZrnT_7HCSWvLkrx7cx71xny5LGBpbJPefzG7VjUhhDyF259CpWom1lp36u9K-cXX0IH_A0YGR8non8rATWytUBwadxkUvy-h8gp8etq06N7q4JZaDmW3QOPuLyfaD8aiftlYrdQf-XvBi4CLR4oilcXnX7WDpQmx_qMPYvTK4QiNSzBy6zAqcaB4_oVyNsLSxAkqM8EFYriHfjTrA3uPMQohjzpW0vWTdZp99J-6M6OV-mPYMwN01SM6kUtcYtZh48gBJAf91PAw4n42OuZZXAT042X4Ca28Jh20cysX6VmUkZLy-veiRv6pqGRoaMlC--iNLhStSXJHhSfG-u6roKZHiJagMn3sTbaOtTfDx9IDfqBFE7UWeIRNj17oCTOBx68yphF5OCRRaGZlaUq5_c9Tj6SDdicZnZ136cNkUfivf5MyiU_uV8PpY0PfZRgPuAGfS9ZjyzKxSIyfqIeYOFMwhJ98zWbCUviYvY7m1U2iaqvpaxt78UDdZzIFGyUEd0G-f06QIC73KgocvnvxV9RBZmd66eQoZhNzRfvOspgR4LPeVIESenvCVDYp42MXoCeA8Tm1KmPPVkzrN2vmkjutI-7lRaUR6HoSyYjZSBlRj-fy_lU5MED0h-VieLjK3Nw5OVCUnIfkIajUpoEHwSNMds0PeI2LVGUa22XbxiIvEtFzm_67k_ZS51DxdUNyFGxnyFOrMg0bCeZ2j8-UMi9qEypCbrQH-cgabFdHz059FZfj43M1bKaz9XAt7--aj4TcZjhIBUM-bjg_ToafRA5ODHiio4FyHcin29RRk1l4RTUqT_S0AtYdBBAIg4xh6tn0qWFZ3DVRmcAQEHjFbfTV2khYZpHXLz_w7s8gVadZcnHssI3cZJIaUG19gZb26V8VCpsZUkXm7zH5zx2o2R5N914HHEYJfnLPL_4T12C9PwlhRuXwjSGN9zuTbxQK6lxFvTpHeWx4JFEE5AGYG2VpcyOOibwf-QppY1mdrx9Dql96NOrnFF-09wEO-vRjD-L8MBpT2X9aMKFK9uxB3ipLf-mJCdmHVR0Mkd-c-x7SbwrYfbQD-VpF8wXrxYTOvermDC_Y7qkRBoqxTwZ3k0boYRfxdp7xsOzZYX2XtNvN-mDNUcrC3kgRURKCbuOQFPEsycvDyHb680zOP8GF3RHbX9AVdvuaRIc01fOOqVswjVXO7Wex35ExbHivtjg7LumR0fXP9jfjHBAi_zF8BPb5sxuJd3TSlPZkU38R3v4eHTAI_YtiHsz3EcNFIjIbw9mmLGZ84f4-B-3j2fOJPkk5kBr3trqNKMV4y09-dUpWoRMj0Zjg67qHw835DNtSvaVMqbtiZBjz07VkxMqz2OVW775mh-3nDrZ2A75Y3lmkxwg1IiWIOFTH695eD7WDgGj6nXTuBMfgTspB13-RSUzV1HGiT0Tyku4Majj2HUJ472ZQjV94rq499srIRtIbyYfJGaeomJm6klcCqlBQG4bsUoyfApSZtBJvFNhnivR0F-ioSN8i3hD3JDnUNVdMKzDIlPbX9bAgFwhglQ8j77IcKyyemEgY7LXq6nvHn4M-6Wh5T5DP3tz8rVbIxgdzZ23SFG2kbbJpya766by-S8_T-TaAXwWp-1kbMt6NOOKQgSol6u0hZZp3m-hJWZOlr-fcStnDxKlFpa2RDXZNHZcU9YY7tfAp0VyqGVuCTe4CQ7h9YfcRhrMGken_rNfTF__VD1DAopiLVfJzEGI2QTRg5iwhiLoRcPvNovb_9GCYHSzbp98-fIQHugYFVdR-OpY5tyIQP1dbcMnaFxyzdDLkz3FIC_9pXyx0OlaYfHvigVVzWERnIC0G2TS7uBXRi7cn1bN5Wz-2LjfP4ihHzr4r2J4zIpUR68dNHvC_IV98avWiOvds3gm9dGKmTIdGYS_Ahy37hf3fmCCdM_R3v91UIpn03zDMpvstqSwiLIIAt3z_jwTbqYgbYM2PNipMsBSTY0yK0k_EhymXeooOi6RglvDGQQ7raZKIJSlrYt8yN_veaNKhqKCg-722y5HeRFlkT4_JU0Kg6zRDXRDbmlb-Pay7lgbBSnH9Bp-_rwfyonNTiZIeysQgBlSXiw4xbYjcURwAC5zDviYyG4d4gueJ0wQXq9XqRH3n8bzuQDjJA9NeFLkthL8bPWr7CN8RNBydOXy4QpGKZOAc9P0cwQBGnCx1Y_O5z9D1J3MiLBTpHe2bb7FixYvaMSU328cRho4jQV5dHx9-JHJr4zf4WM-DP9NMP1qHPNAgq3A5I_RAVsB4at3hCIre65o5CvEwh3or8Xa9kGD2n5dkCiw8CpaX9ffbO0UG34bT5-OgrNDYXDR44giXVE5Yq-RlaVQA8da_8YmPL88nFo6cZommtS0_rZb1zdHnAq6CzMLhleW2SGiDMfg5PslYGCWv4I-zCL9u00OO3NxAtNg66blgYNk3BV7duxgxBV_cMkemu0hWOuo_ZV3Y0d3SsLwjtAmVGDWyofi9HtVT0zjf_StyxitDMR5y1bdNH8j3pJZJWlkRQWwZR5ldw7hbBV7439atETYbagetELYDSVhjgmQ26M2WAH7BpAnXDT3U8d9Rrh2j8io8jVVkIJXgJzkb3NQeC6pQ0sUSnDBFb9Ct_6LvjtdBapzXoSH08elvm-_NDA2uLWOE2BsQhDLaMIUvlSawfv1PAGmMQHPugbQ05nkveSHS-HK3si8hkKtWTuRqoL57Wtgv3ALizOjDiJ-ERZpfNCZUc9kHynOyy8CZsVq17aCmjlKIT3ZAVm7wsiDaVyt-tGGIqTj3HBkqq9U1cmoyl1op0GBXqQpDqxthnpp11MUjBhCd3swLL9MUY0GoJ5jXhCVxQ_QsrVo1S-KveyKXSmaiHbZSPW66-Puyy_ofclR7pxsD-dg1Ji9-NhxeCQWIIBev-bnMHdRx_phyAj1V1o29coWBovL6NNHVCY1hwIMkFBOIrc-f-mQwz0QDmyRpr34CY5G0RGDqhMMSyhsJ2colRafhDZjVHE28CO3tZi631vmDKTIEC3hRCTjZo2brxv8zBm86yQzHyiCm2OaGBGImTWubcuYeLZootIJcitSisDllME6oyMZVWJdJP8sF0ojU-H1LbfkFzS0iJ0e7GVEK0KAJ9jt7IFBdYFBosgCAgC19xY4YjlGMfd79OCTD6RV1ZK8Zlq7o5RTqRQWYRzvCQLM5LcE5KcbUQ5RXisf-0RR4nWrENoZqW933WjiDX3K9-saDRiX0LXlnh_xz_3elxAESVaUd5qW9nh0K1IMjxUuqGnCRmlE02iadjb-XaYIXenqhwY7xgrr41j0tAy6Llg1L9co1DRbtVtIU4yLbLCejMgF0k3hjBzRYNO13ph-on_bwBzWvMgKAIBu_q0QCc_H9-KGhHu506b_KNOHZychq089Vtmv72Fq3GKrLdC6o5ezWQTeI5DPx2WSWvzM_YKWjIHOqNeCcFD52u2w5NsSJr-W1CWELxD7w9E2d_FqYUt0L74zw5kTSd3DhqxcjHCW9koXGcDlcUiTlYRalUloybSeNLZ6yb4Np67mOYdgDkemVjOPGQx7Mgz7Q1Q2TEgX2YTXYLk8zpXzmxxv4pKUcqkHM_X7DifDSDnncVVm8bD3C5a3DEM3vTTWASs96MIq29Ry-r4XmWrivOcwUa_Ss1iZCDOZullGPW4WPO9RAFSKaY8SPwDQX6alNlHbr6X06d1XPnSShrqE2Un1WvGHF0-SO7FcPvaaMwuypICYijgKOpUov29WbXAdFznSmfrxqYfgFd1t-89FfY8yEcQDX_y-2ZbKMnfJzlK-O3VyiXxcU91E8Z7bEnusgnd3f01rl0WJlENsF45GuUIwyO5T9-ZgjemLEbgJxkgJ-ALF6nOJvx2HNt-TYRAhN32z2uXWdbSvCx5gZgch2f8cNCC4F5ivwOaLRq-zenzutV4XnKTP1CzZR_ONrGWP-dkom73gjpRpqMFrAhWt9B_W3wcB8SqRm68XU_yw9FPlVBJKxIqD_q_smEoXGM-NRFEksehH7MSCvUtJgscQkaZ5yNRZwUm7-Ud1LcDzJW9gnbh8ji5sScE7Vo_n6dT5EyEKZWfno6RDhOxtbKJX5Fe3v69QK_OZVcZay10OWI9baWd4IXyYXZESh9oN6w9ciYxszv2THomlx9p6udjJA6iJ-zuMHkEhj_IcGhTpCSEZVcA7yyBQfz4Q4Hvp0cjHd4sJH9oe2A5yf_veRyqa4p1HV-w2wwn1LI6ah8mkSjRQbqZhPt3T-3YCZ0PVDlkKeL4-_renVPDbCRBUlKOskIWcANieCcjbewnBP5R0Op7ZQszeG05dw_REz6EQegDIgwD8SeFrtiCoQd8YHHkGTIvzn5LMONr9-CNsV9B9oFUctU69XvsGUYMjMGGd7uzO68JMcmXVM8CYTFq4hqty_3iPik6geNKC39IgCbt9J6A4MnDuT_dBdBsnDpwZotx26i-Eeol5qA6_Jl6DMWOp28iZCJzlfnZP9cFPu23z9L80jiknLqv29iwWpWijw980Dd780ayMeEpRJiwZiznAcexiDO0IPuPdY6l5G_p3L6yhSNsG2BTQvLm5fwzeVRVnnFqmZ4DBZjEgiYYb8oha3gd_zvnPccQvrX-WcJIxFhxtoAGpHasB0BCh8tbc19JUVpCbU0hFO7fQ-814lW22fafmPXLk3qzzSv2W3lwewDy5pVCUqoQP4kgk_zqF1dhIogTLsFW0pjwgD31ge_3m3tsd9AJHp917wJT8l5izz361wSrGoRQ6xGU21uwfltPJSLSJDDlD-JjnrGFCl9grFlTx9_uu4jUqoS-Q_fdkyOrFFHpZoRtTi9onrenO-Q9HLoA0ULGf_nF7HVsOrOHa8OjVX-wXrR6sTeDbMpLKBLgH9fUcJXTLtoePI3-O7iOgbcFY1o1BFA6xxQAxupI7wNRlOxPWZnE0OeSOVgTI3tWKYRrs98xPyyAp2pFR4lpYVmwrrddJG8F_453tGu69zSBJ6Ar3yv7PXkcR3jhaItmGqdz4mpk_yNJirpj3v9bUy3RNCJCn1fCWsSe7w0M9CIM3Am3L6rKXeVzTaEspL57ZO8u6TvGymlZBFBI5oAfxDWlrB5IFA7kkVl4OZjpAgfUDFx7Pt6667JCvpxqH6vH24abX9MVeRjXpdmHWcppcrfBQE1sruFM1eEH2qQaTf9gw4BWCFFqCvCaMTsY8xc4HFud1sMNa8Dv0shUxEPZ51dyfq96iQpNbdQBT-zRyPZonBr1TGYq0I-i8NbRURFlXjkp7HAyI-19bLpIu7z6WouPDbPX3tWThZ3LrS2PfwI6MwzjP33_gQkByV39LoG7Hiu9nX8xx49mgCaBxRSiZRzF6WM5pHghcxWvTewe3VIERDFKsTp39zgw2sriSrwDfqt0MP_m9CUPmcFxmbhZu6xMFO3ojo1_TI6Nb5paU8lv-kMeIIkLq6UUWS6RbTGhya3j0gM7YIa1yUNuHKL2YoPd32nxEC5l1EskvyXuB8dXlZdzMRXb77LrM_U9_oboCj30-AseHHqFUyLl2-aRp1qiRDQhD1KlR3W_gfAAnZr_WREUe9lGdfIOIW8KLmCpwO_u9r4nr-tKzwkHaFmgkUECcJ9Yv9S9JYPqwK8rSEXjfMt6_nqnJVnf4Qc6ISh1Gk2j2CQLqFFbLSSGEc5WRq4TkandAl8yM9xqBGx6I8dL1xoeeJCiLkD6mG9Ay1FqfMBB-0tXxJIiR9V-JuIfutDtSX8MOFyx9up5lR7c6ia-z2UEes5L89E4T7bKt4aF8Zag_dlmBZC4K66hPovRj7G56v77UHqaEws7375K2FCMajnbHpqqgFJv0y0jATLOha0mKQh7ULT8gKJZINx5aIv4NTfUSYOhmHrRIycJdvi8ubvmEWGtjV-OAVpEtt-Ga9Dp1NDUmkOnRQS1ADOxy7LQtxC3iq9o-2UncHUKPKrxb1msLto0PsdjZLW2EK1dqrd-rt4Nv3o9AxiBWQNx4U2d-V2z_amCyYfKG_M913jttLXWk7kIygOnAmHpmbZ2wp714NlbA6v-eGneEUIg53Xuq6MqD8RDldOrxTWsZLkVyFyKhXI-ikTTZeCde2aAnv6paon99ggTIVlpjs5F-uGKTeXKcsPV_SI_0RQj717PaWlDtAhLJmpkPCqzNlsCvvzXC-oFJQHdTaWtbRsuo0vMa242ayyMAOy0Un5BCPg1JkXsAR8Hmja7bM_SZjAillTMIaLmVSnKYliSeRH21CgQMry3rUYGWdokC0YXJ3FAuw9HBq9gZ5Di_WVgwoJHtkU9B8Rs4_6pfmKq12KyfjJyEdPLKxM6zwVo5E6L2E477ox5n5ARJ7P95bFUIGrTVqMETavWGDwUnTa713g0R4bt6Konf3-60a_gSER7myHAQrKIDQrOWEwDS8BCOKVmQm2fJzTGPhbLXYdeITqKl9d6iowbpuypjsYH01KQN6jDdEi8DohCYYArHvHKIGu86fQhWI_EvVNAKr9ySpW-i6r4L77oqxsWRgE87IWH3-8fggO7KL-hGURJP3iZoMhqQf6iNxfFEFhh80cYNpOWKZT9RHMAbWonR3lySU32wYPLWQM_TCN6ksI5Bj3qsxlPrROGtJeK53lmRsdHBJ6rMPscUhTJdVPkYUIY0dE29RFWpEU2AxYDkr0EfDxeKAlooFMM6f9E3nLvAlZ90phdIYuiUbkTUQmgnWFbVvgaU_1Yr2ddxom79QtQjKVLKGX2rMCV3ao-Owos-jea6-2SJjQSkbiJlHM3yQ9JjYusa1cd-Yq5uvW-qpHtsz3MKXYH9snJ_J1mFc0sMcWYpefrg_GWLHjhbuXYl5id8q5LlK8qgWW89kfCDD-zB-_6XsWfsc9do9TpqgkhAhXeyI1bXA9FNk9MQxLWCtrmb8XSoLdtl7O-tB6hhii9YTCLsfV6MP2LYAagKH0iSZyYx6AMDF8TmatENuKVt7jktv32UkClzITl6gQ-c2r7Oc1UZNymSZPcafInS11zeB5y0AEO8P4bHUygNfcN_deYkjRr7uougSdrjGwVQXEX8d8JxFq8Og7M41n4oAbNiHxMIEbsXe0v--r0MDZnZbcky86salxJFxTsWK4EhsoE9YV4P1m6HpGbWJS8Lf6C5io2aFUHToG2rDNbVc0829LiLi7685pTJEKVz2btvoQUOsLukbQBV4qgr_IhpTKbNz0zNupM8vSYRwEbTj8sOBKY3Y7OCbPAUcrSmtMGpdIG-qlUnaIoTpydn2WTmtJkQt4AGMlXA6g0_3GlN-peJN1yOFnWbgMBUf7l5kW2ITEsFgSXTOMrGbRYK1ukHq1zxFyBypTrmqb6XVXAajme08YEY5B0x7Cb7sCK-cVxZBNRlT8DN26xYwRowbs08bJyhO0DQTHuuVTvPfiMscSfKWk-dPLKo2QAbCL2AnE5dRBpsyn6etzzunvxBY8aBczGY52EaeIH1QQvHWnBIux3MzV0AnmTrqfjyMZLbSzKiUw3b-fH5ErI8RVicgr2-yZ-71zAeLjDqOYzo4-vs-YEpG33XvHLgbTXCOTljVdZ5u7S4r1frKy330W-28pgxM742FkIStmRyYzsPZ7rJxIhbWUlDKSFAI3yyFw2qQkgDLH7cLshJYjIIW0R3ZXivH-v0zf-0R5lYGWIlBoI3PAbySxNJnQaxx6QQXSbwa4dXB11qPELkCTw1VIko1_bfKqa0wRMxEOxJa8Sih-NNG8277LAQ6JcOdZx2tErXXuTIuBxNxWn0e0t8RJuQvWAmfJil_Nu_h_H3MgL1PgkCyeZ7qMv5DA8ohGZXZTJqSGxg5w3Gmp3QyK8l2sJppITcTbKK_O1L6wq5OP9ZKUdN7JXmmLvyQRtq83EBJezUbq4Aiq0dmPA9X8-dIJUY70xKfb4HO5J5Gy61CdYRAmMp9Y9SOTnYMazH9RXJfsj-LIUQiwDyCjBF5Oz9H_E-T8oyv7z1B_vLuCM6zwY9sj7GdtP-D49gil7ASANsAvkp9jHmEJOc03VS-X93fGkN-uFb6RvNptdtkvdFG2wBOiV6DMfrzmMPa5p8OBK6c1RSO2qtLp2wKaxAGjLCcLo-cmuVodaQ_DmxmX2Q8EIzKYuKBqhafV8Z214VPLTPCPf__NT-4IXfNmKnkBdKG-1IPDUlY8lsEvynzHkmcPrPo7cRwp3qcbmOAdLg2jwkj-LMJ5Na0EDM5R6rgw6ZnWWuvIU2LAl0PsaJmV08ZZE0Z_9Y6qm-RBLA0XoH2abdR1NpFsIYvPW-K4fwjvKn_E5vRNDgldvoI-BTQnY87nOje9jm09JqP4052A375W7YYEBn3ssLNKNpZd0l1FRS6D4XqOye5rmJXkiJFCsml5T6AQhuINAkwZahwiUMpzbhKGAYL-KJhQf7djiGWZU3ptmgXCKWOK9Ulos4loOH9QCZ5UinqEBb_djudmGgbBRNtz1rgp0PcZ7XCHQsFK6r9Uy_k_atebJdp7krAFpMNt0etXiywZjlFwzq_UlRyPWUA4AblbnWjNpCof5Mk3x2CnAp7xTAF2GRay9KabJDjGc8w1Yh2A0M3WnWoKGQvnw98VChWmZJ59hSM2hmaXH3GSwPlneryyEmYgmANSZ9zd6E1rbt6_CVaaiOPCnc6345oIN-W9h-3kUOF_LiTv0r-YzFuHn_QlF9gNFSabnwCzY2CnmAbu-NNgWJbzNnydhsvNG62mEX2DtKPF8usJZIqKgOKkDpzft03dfv0yctuIUuUrEBwKr11pIkFhGCFSgY2VzCQPE5VOYMQtSOoGiY5AJ__Y0kL_MqfpxxOaY3AjIGKTWoFfhR4jIn6toREKmMpgY4Xyen15gI1opAP1NTUvZi3FBdH3OnlyRVKRKR89AAqhejlIjKA4CccfYi4ajiUVwXytOldwt6SEKV0VstizzajXHv0bXDph8PghRGIzpLnw3wnFqwAhkR6zMGZ4okdGH5T6X0fyOfbehgxCYkrP2HtwXB7cZ0hI3Y9EAF1iKmF2Ff6LlJs6ugMWyyl5f83W1yM4i9v6rOaKN6fiC4yMl5T3zZlqtDxxfj_csIEyN2rSzoP8RaZszj9uI0eASLbaKPpEGTAzL477u7ARax_GGSbX8iA2mM48cAXNnWfs2TWVT9OlsmLZHWehAZ2irfgrEpYLcG9MeRsmwb_1ddvpXYHhwFVcw5jfGMefZ5oQsTgq_wBdjafN7cD4Y1_ndwEGM7lmqDCy_F7SyiqEXO1AE7G91bOTOf-Exge_EORSmgFCQ4YZvYTOwvffQu6VqUxGELvfVKj0n4D2R_i0oo3Zb5Yw6j3K8GY9KGi-W6O1nPy__nHKknxNQIkBVU3zs2J20M0xW8QZ4GWX8AZRtzOKhrFODecPOXGXZOZi07pA3DpsPZRol3AjPcNgx11_g1Iq0iymg87hB_HlNxN1AiOCFjNG1wx89fabsnCYo-4KuLHUY0omrABw0VilKON38HedC-ZxUETqYqcuxy2lamNLZn5o1-WSppQf-SOpmnKHF5yr_t300-Qk7USGsotJo9lvMpfdiZ-3BFMGcI0PONJo7Jr0PLkbJ7t86qJwd3U1IfkVNSjo5wo5JHjIPM75-hNDXGjltZT8fflXP3vWmgJ58r4O7A58DpP2Q5v2za29Cn3iNSUuN1Yq4bbMssLBOYTcEArUd-W4DLeGQ5r46rnnpipQ3j3V9XvQeZK3fadVje-rBoxlCz3w880rnCpQutY56P1V-2S5ixiTf1cfEOAauTZRpvZSi7cQGTqJM22ccaMtd-2FsNrUCW2_EPhilwRGFZAs2I3vOY1RQ3_aEXkKzruuHXwIXS7h8wwrlUrOhglWZBTmiH0-TAJLWd6bKDerB97blU-u_AB3fbGwvqvqVN7OyfgVTfHaPu7lYQMf-tEn9I_w_F-ccIsQPKHEbkj9OxiqMNbcLbyJsfDsYhIiw-jE0GBBkzgi0TyLNnjpmIuA8Z2pyldOV34iBogmlrDubZQjtubhsqMIbt0KJBfUflP7fZBktkiWNu1FfoI8ACYCzQMztSIWOgRLz-sq36gUeHAC4SANCl7P1bDITTZJdXUEyKddfTL9uo4jKacF4ZsB6WulnBeT-3gMTCnTK9MjvyRvXJOYUvD-i5POU49Ro4fIiAUZiVlGjWiZClU1vNhp2XBHHqpJBgQcCc6xJs9yq4FMQEYNehwi8oclthVZbFETKfYWt5ogInUIo7GBGN4PF--54PpJyQ5Xt34691JBv0gH4_l6tfSZhILfzaoOIKBePuXjGZkZrt_M9YfM7I9PiCY0Fe5RHVN6e1yxr1wQDWkVTMc6CumEfROeTOKXfLxFUitThRJsc6s_2O5UDFi-bbkfuaVjiR0Y9Gbr2KjwnqbnJn8rZs4O5W2jTnwGhy4vkmYOldGdYoGJuH4Ms1O04I5wN9ZDVfmcv7bcYbySIT2ii44BuFuI9_wvmUvT4z6p4yTNM2qrPvhK3zJNaPX2AQWV9A052t6TDg6LLaKtNQf615-w4uacRxb02CR6rz4eXs5b630FfrxRQIbu-F0N3QM5IhL9uN47WruaRo_C_C9FJxex-5cBv0qRv8qO58yf_Z8LhgbDPGhaYhWKYpZZBAVjh0wnvwaWKflYGMGaC1ij5_HrKg2uRCTFTBcgWrGKvpXUmkjXDRdcPR7pL6iTO_ysoUJHlgXRtIKnTBt9WmyH5wKnqHYvANl_IetaAZCAtGw_iB_diDfHLnzu4QxWWHkKkQPY8ZacDL1ygiwNAj1XVTazO5asH65RFAWp8Wjk2MqtUQYHB6xYaqoumN5PBvOWUgBFNj_g4muuZgX4ORrcxp-0s_5tJ49Yy6uS3-EUL2gEUFuGTpxHzLqK9j73ujFiHErq3Sw0eCCf5eS-PTO1KvW_zNboHmVzev1hCsUuBSNlJXC3Omk-D_QEZN_01pDdlpLORbSXHLhs_fWwM3qjF2iRdqoh8nhc7iBGdL5m5iPIaQOBB6Arelr1UN-K6mILwTm906jmdg4XhO0pqGBhCTyKL04GDbrb9ELxO5pRiu4Z1Mu7Msafvtv83UwQ-AiLNymCAp-TMrzf8oAUFKhENn-tt4hfvvys8zRR3_p8nDnzT9uq0-qZEGdDS5PUl-44LxnmrJckNaWHRyXBRpLaCZEHvwCLrHlLC2XMK5k8Yt2Xhjr2BDTMzXKPXA9AQ-G_AvN3xN4-G-wp8HzLvxX56H2C7pFmAYMECua0cXMW3sAEuwf6wnB4tpKNfkKBNEJ9E2-y8JYgeQh0YobRkOE6CGA82wZ7Vzmu-Hc4hfBy8wOzYXuNSKBTN_jBSLdD2a-Wdh_CZVPnNZWP3BgXn_oaCeQ01rYJo-Xvp6nJucGEEIN8t7cOvbPhpAzMCCa8UWpw4my6lP4Z03F6nmmhHJrlreubYezM4n2-hFhkaFEqkENZveHR5lxI_p1i_1bV7bWleHBEHPZ4IZFTcmrcat8QGGoxgxhmDfEIR1fyuEdzcuvSqgmpx9A2xCOXQlqkTMC72N4mMxjT8N_IKvHH6rzxcrueLNrK3ukAXIZO4fbKiNVAehQ6R7WN5hzQdrp-QbQXIPjugfX3GFgt-hfceHHCtrFxWsNseAh8E1tzVH4Z7DWyxPgvFCw10Y7LTCgLvtz5GAOBrvpWrECYTt1pH_DH58Lq8c7ng8HcYzxvw1-7CuSCxxFelqh--bzGy730pCW49nH1BX22FrV-J620Uz0NqtFcIwJ_CFjZfAf_OMBNfqw_rwQdKW0XcYpndiKJLTL5PX2MwF0dLhuG7vSW4wKEehxCNEL7lB-ku3Gj7i57LYg5GQNHTz9vIjWiQpwQzKlpWUk5IQFgRYiJVWOBLH_bTY5Y08D4rbFXNK1cOSLfwdTmlyK1IKBi5-HfaKx-GlS5vawmbdQNryIXC4FOgXuAUWoiJrqKAIb6OZAijofEkEWCYQhBvdf97PXQZdhw1uDHxF4MdNV06X-pEwptQ17PvJ7Vz66PmIjZec9JlLOwo6qUo5Wbmx61GVXjgDD2UZPG3XjUAoAwlwvXO7WPEKgwlpfaTEju1yXGtFKwFkVF1ewYEFs0A5HHYoTBMr9f14r_AqgqlsXEluAR4KSfooX0OYrS-25Mdf9LsJ_OYA3wxaB_cnHeFKBCUHEIOlULlZHUGI-Ttat7gzsHB5fqSg79BEhBc6sHDZh7CxjSaybkR68n65h-iiTWjR5DDPkR5QP4KFyMpxbdmT3SFMBxBqNoOgNJhA7aXmF4qh-noz3RPoSa8MXr-FrhyR5AKcbT4jylJ3_Ev7cwSfYfD74ixA8kxUxYrwNoA2ARe8ie-3DsTGhHrJAXvk_rdXJYlyFDZCRdOnSsmKiuhKl2dgfHuFomi7nn1NbauFWaFzfizcnEPpLHMIqT59tIPdPzA9nWBoy1sF9s917H3pDoqzNnPEodrB9oBVAyI8UuxnyMBp9eCSC7rHRrp07JhnWakJ1grN6_7iEBWCljdP-TmWR-04NefFeRvwPNy3jjtmUleZLm5zW083TpIj4L3XkBvMZWTUYFctG3AofnUpsM1oMsoaVTy89hzrzsrrsv2RCuyKWPKhRMGyA-i_1TKGdm0FF_Y4LIcay_sGEu1smb-udExVY3gJoaxWbsJiCOt_w7Ag53sIW29oQPdwru_fogUtj-WOsgOEf2NiFQ9tTEpDMq2FTZkUgQSYXsGnXwvXCJmYCQGGSiDEUHmLx8b4jlAZWnd_Ul_2mUIiWQZsRXoHeRAWOyUM35a2T4IIiPeKu_Tk-Vitcyf_qXs86yUp4vn-OWjpE_ta4F0w4nIsOsyeJklnH4874EgpgjdVxWzyR2ptHGIPnPAPo6mdspIgtVqVp9obvATuC22BOWuS1ErvEo5-cwy_U50dHMQU_Fq4B4Cy2OULICwtejsZJrImPWvFRB8nCnzGbRzONdGqjSQAgyAQ5Nlz-AtWkhi7jbE1ovfdlariJuCPhDowf0Rm0mDNYW7Vjtk8yGnJ7tWCZlKsvKbMw7i4OgZqEGQBmpC4HqfW8xnC1X51rdmbm0H6l_UYMuV49Nkr0IYkpnVRRdN8Bi9uLI8exz8L6yMbRMw6qbRGsteOtv32sTPlvF7X3fGkT8obFEdyIwSE7QiFxQYsWiFAMfMd1EiIu032PmB2Kfz0e6JdguRXBq5Hlf-kAsBDTqI8qveu5dBd98U2jJaULkxcGGtcH0sDRhGuKLIcQwmZyLgwfzi_PDSaw1jL_-lD7cw8FiTO0c8UPIrN20GG9FrbiVfQqYvvcahW4Hc9-efumypUJEN8jnUynuFUsbiV5FZtdQM0pIGU3Hp5aNTpUMfDeBkNblqIVDkj14EgeUG3TaUVXQy2YgmtkSUv8a5GmaP-nuDTn6vmrBDwdgvzzWuyBG9QJEo4dcZ0jzo9C1JromNwaDOcEQL2wa4y6i36POJ_dgJ7zG6fiuOCHsiEN5JusFCkutleI4NcLxUVsiHMIqWLZSQy5Dl84j_esIEnvz56CiSvN43dQCdzuzIQpasVSyBC3twFA7zz4MJhDC-xPy3DcFMJWJfhujKMcIcfLntmBEgtMp-wSKPucqxWapn2KgGWpjinElbLXamJJN9AWDYugJQjSvPF_WpQHRTQPtLxDWhOFdUD22Sys28lV8HE6e3EPzMAh233CN1_L2rLsCl4LAQKaKu4v0-bZLITrNL--27rZULuF3Kjc76JvK2d3yZIYz78hufq-dGJpGfM6zBZRziPjVWhjFyICJY4DyjYVnoDHBKxqfi6lf8bg3kYsF8f0WQqnhbMMqwNXlgKTnS2r-WG93VR0ns1YAHCCfRMd-mgtMvH2m_A2lRg-WBtWBd85TIh5HXO_xqF2mK7AOB2H1R0kGUM6tp0GLjCCbFJuvQuo4DuVxzkXgiGv92kVdSP9trkscui6mXTagKGwDg3VxoL_OMKrhR-_cjrOEuaF5HCCxNa4audWZWRwP2V4fS7g-WKb2Yj0ajDPf3iLDBI9tb2HaRA4l26-pD-dYaPBDoWy97N-B0qvUyEj_UZv2POGKA4N9URcn-gBOcGuQ7tk4A65Kxwbtb9cfa5xrRMuSqAG5JN0vavcGHr-0ALMVNOdZeoRnYWaSnllox4U8h9fHQdtyV2nkiJbcsDERYNfwafyZZqUNVfUw8G2l8ssHi3z94ewWNkYnqt-LiHkHmfXGDSKZELl3fvzxIB7gjh9HP9JIaTwqUxhOn0m_hLzG2DvpTgfu91LaKCan1acbA7A27UMRnr6ed-rJcbuqaj7DVKP1g_jpkFoldPPCrp9ziBS2Q-ICHtzxxrvNlU4YBTTIf2s6cDznNAsjvgCTkGTYEA3QnB83PYBF9oG12TcWmIYbswVsQWH0ZW9FQtg-XEXT7rmzMD2h1jXDYkwpm9A0BMgkQoGGln7tdJHiy91Ex6oez8HrcYfwQ1l_mEPsxwyxLbZc2APJzblkaKyt7eBoO6N9IathTzO-kw5RVkf_2e056994UsNA6bcW4_PyfoULKE2m1hzhVvTkHdG5ITfDNDJ3-8gTBmQstuIHDSvbLjcvElQ3Ivh8towMniiXBMa24w_pKwTvzf2CWfFf79KKbJtPgfWM9gpbC8IsitALnlvVER2o0BWsiOfLZ_DYJlxy0G6tAFTEJKh26E0a8EDYEyTcscQrMGM8fFbJ1EDzWJcK84jUvcNzwq8wtaG-I8A5YkkxAj3l0Kub3zly15yZHAr8Fy0zDyDoxXd0ZA68R71lJVRGtRmONHru5UWIVLvOVt-B9k5XkEmr3TA44wgMN6FKgfSx8glhimxqQgXLx9MeFxAIgXxbNO-VMc0FDUVP8a0AgdhINmV4cQh2TtC9X3uyEg_btbtvwqTFcc2ejzHE36qOjVfZMRPKwGy16xU7X9bYHtaDa7JA_vtae9uA6LxMsvCiRVRT30MmTGhMHQAFE75max_iArRbHUAKSbEGoptViGHLkMU_z_Gt1hTlpFelA20DXulbqZ9k8Z6k4gofAwTAvTTEixATMcubt64HfQnApkUAAt-YEudjr4gKodZ94rYqxLxfTdK97SDjC8hriXSqsqs9Kjg8W60bSrqUEfdfdN-5JUAd0aEti71T_9NiKGemRECOPSsqzD78Q-b5nXw1GHvIQk7MYuSFkW-OvYSBw7rWFlYKRtESIQxIE9MRN7w1iqxt8xZhY91UnfTSaAeadZ8PISe5BEXdH4cUulrQz3QBtJ2xKB4Os_8rT_By2sa-YBCFEFZp8VOV_LwK0rQeA4S-YqJyIzhXMgyUJA-J6Elg_NeMXV2-qY4rv_LkiM_u90-xExB7mBYlVxIAawmKDjHw6tJcHhsCdAw8m1pbRXiflSIKAnKj6BSZoN-bOwe_AKu-jEVw84JcOKK8_eBJA6CmBmdYnpTCr9s5UfTsAzovLI2ScdQnH_VrIspCDuZh5aZOuVgz9lyJvPs7WkFVz3Ds-YGMWtqSyKlSzyw6DYSAMWCnKrvbaLSdZKhBKRI9QKx2KhXTtOL4dl5zp5v9zHtSrm8yyVjJ7O1rm_FAUKd4Ngbklk2D5wekpFBxzNI2aODdPktuJkeizVbKEUD4ei_4Qx419baw3UUz4yqWFVfw-QdHCPdV7vq98ROuFFWwx3h3d8I6GiX_Wp3R4EdYwirXeFr9lDHHDWFDAMo0ehVvWMzmCpnHU4LooBvW_AVrcD-MG30yVG37rjhUpMdusYV-ghtU6zkPpyBbCMCkjz5eQnopg9UX1BOe3a0Zm_nHtoYvpV3qsixGx1zGOV_W6trdUJJsdrTrLYANwIcICL68Ei8NilUzwe-VL4PZT9_-U6yxwwkBP3omyCviHH4DuByWkJDo3baVX3ala0IqaJKmVWJkPDjLPt4Y19ZefhTJEDiCllprHn2H7c7YWx6KQ2Rp3TnGJPKJLzG5G1Wujrc9v75NESnpXJXU7XWg4gz_CICgpipiWW6qdqyWN5mVpCiT0_CgxMAxyIUeael5Wh0yk0tD0ILyrD206bZkmG2tSMG1h6SV2VOiFEKiB2MC_qWS87rPwD9wHZHErcusK8lURflwFM3g_ZQcfER8XVTgFQ2ebn4eG84_eDQmU4BCWvvmm47lNEhkNgaLxtSvQmI-WABXcWi3ShTI0IOvckHnkwsXTw_z1W8MQTX63JuWe0WMIPN89L90tmKPSu1ath18wFN157rhybcOYfDD7jL2_nR16XolYV9ZPP2H6cnh099P9I3hnIoc4SfBIgWRnkBKzH-WOzunq33rR9F3ffu3OQQo-MxuVMwYCPmMYpE7xVKSp-nQFoKdXZP_hpDsL_ka3m1l1C0reJzqOn_vJdSL1S-3XEqWPswZ5PoUXNT7m5OqecceEaGAu2XsJOSrGyllvd3qR8kljTlQhjszCFusRrUYHB4RxMkRZvvk3xpD6MEunPVE_a0pSPqBDhVBN8DPypO72uA3BsFYx2ldDmSdwdtjhlC-4INxpxHyGq74Jg5u6NUdxMd_t7RlYzg4tC8mxgjb-3gqIrqTbaDwm4jIC0pghsfxu7Qy6lXk1qrPQj_Pi8y2PvKfeDYnj93RHh51T7ZzxUtob-8saC4ZC3BFpC8tnUO-DmLSZMKAhNJNRRcA-Usguh60PRIOspMmGROdCnh-f3-zJRkkzp1LV0zV8HtTmfXg6fHQPD4IRlUdkr0FNieZnXjODS1R5LYb7zkgNuuPNrDOykp1ba3r4PxTBI-kUg9NdsN-BsvtMR8MQgztmDU492vvJRbA9a08afbPJNugSsCICylMO6Qz0DTbb7jwrh2giLmWjI46oK9kE93pKH7jIxxauw1R_c5t7MW_q7fOLL_f0_8bqGDDK3VG6uqYIrw3DDpTwOyeAIvtFQJt9_c5JTOpaYyNFFrRRCLrD-LTZ2Gf_yCj4ZuTihkuKO4-hI7TZ8DTi8LEdqvHSTG5OTLserbdUKfgD3QOglMyaGlq9pn2YUgXc36Qcw1rAGHEFRVjK_NyWwFIB6VOtJG4BMzSfwaYCAY1vlZQCDxMWo5lluYrtMlB4AqBSDrQMU9UzowbOxIft3H0IpSHJ_vI0v0Gepnv0iQ6LuIATQ6pP4wTC1XM5Zqj3Hc3die_yNOfXqnKFmBnjp1U8PYMCrTNdgfwFd6MfYLnlVD3hlqXdjyTbg3aM2CjLS-1tZ40IGKSN8GrK_jQvF8Jdxi0CrU7lUfBFAWFeuxFTQshIIzUHguT0i6aR9XcQ7iHUHmbckCf55jTlAmUQplwJ0m0kszVfyrHQx7XOhnhmcdfeMtnnvCbqH7PJgXSeY2AyxUX11sJQsk9voz0P2HOcrdT-oDIoFgrnVDMwn_4rLcBzysY3Vn-RIxYu88O_FeFDVl9oHoZzfkDf8MmTZUYLkDIvQhvuhMA2S1T-fAVBLtCtlhCMicfwwerZuD4b7ywVO4BPBJ1q6VlTdQ47F_IDyC-NDMOmK3KLZhFxwIkHJn13YN4mx7ziHGuk1SglZ_XHiAHyWJIOoNZHX3JocNTjsxVns-7LSH23mE6lfMVHsjLEFiI6pqUviF68EuSYbzwRsbKCyzB_igmHQMFYc2sTAmwbNfADkytJ1oO0YrgzdtkVenaNke-xW-Jo-t3cMv0ihNLfPR_vB078uwf-PrumYtP9whTHSbYVXTPH9TYe58fHtXbNAJS_6hxfbM6DgK-5q2d2eCF7ebIwTTTuVzWbdv3cuuIAa5FSR_SfmAKVijydyAgivRcG_scUINNHoEtdkQAisTOtubHFwr0DfpAOgLUKsBHzrk1RIrIwiXFVlsJgC8bwzIUUs0Ptfan4EW7-1T47Wvor1-U8KFLue7WWF6MjirIgemIkrHBZojClJ4jV7_9cyWefOonltPqwPbnYUANJ0NAiRGcpLjzw34dEfGDAi8oSRL8SZvoIX7ityCXeq4EOaunn-U0xi3mNphfsMPYWiVquxzBZ7DX1uWcjYz8lejDQxgRqWu0BfOZzhHjxStc53j1Eva4QzlkOqwPXLaLYBko6_6v-G8byrbCGOqTf4Yj9vpB3nVcVrYIeSd4aaO3MTZTgm-AxUz7s0CqyccTShTD8DSYnRZoiTfunpfIGm35znFKZpnTn52WxluSShyLSOD7B-eotC8UpmqajAB_b-DuLo32M_D7iTniXcuYqB9c2Ok8lLzKCpKFmvWfYaRlobrTvs7q9Yi63rcWjC_I9IfXG9skBdU04lwTzJ0a_l3MaEuoe5e8SPHBrCQtSZLiHaI0nlskDPaiJZTwPrSdlaEQsFRe6L1fAl4INcKxDgrDIDWg0pMelXRqcNShhQQXGbRSy0Je2uYkiIihJDwFPS9mW-dbPK-yadUOwtXPUbdo_BVHMnqfK56dSKlbiXr8sJEqjGVqizeJScmea3URWQoaPLDKblhsYoByeNi3Q6l8fZney6B2E_g2uw6PD8U4skY8SZVe1WUUkhMFo2sgtXh9xS_GKzUX_8ycCWLiNbARsu61xn_t_kXILYWg_k_gtw_HFVYettH_54LnJOCYZMkxZLiTpMjfjcWYFqKOWA",AlwaysLoad:false });window.previouscompanydetails='';
DbReferences.push({Id:"employeeinformationqualification",Type:"Table",OnDemand:0,EntityId:"tbl_VA_employeeinformationqualification",Columns:"",Xml:"_Q9BfKlhrb8Hh--JgttYyg5i8OkT-kAKTcsDQqLdsb705VaYXYxSREh89xEs_WWjdS4uWYWG2CJdR44FnFnz3r5bHx63hYfZF4ZpBbw2is9NkFBcH7dOc1Srv173KSXEpjF53J2r6OY1x2hs-5csvD6eOknQG5RmPteZ4zxWuE9Ba_rnsEhz9yh0rR71Dr8aThWdqjZES7GN-S7XaU09kQ1HtM-a40ZlJ9Ee3KDq5QZzX34rofNSJ-GGjtyPEQp7UV6fcskh02__Su175MF5O3NU_oqNV3zueIVX9oJihEjdzHaLX1PSKkJK4QLlHaBVUTzvDHxINIbmQ9rhTptckz03bkgwMLxCjfMPiTLLK8PD9Jn3Z8t8pnvBJjQkRz1jB-6GPgX2yi9yJL34nb3t0gL9FEe81_LDBHyDR5rCSgJ9xF4nhw4wMZQi8Moc4NFS1Ud4WyNg9MUXP28-TcCsPeyPPjwYlHkxgGPOiM-3SpVPwEk6KS7byZ21BkZataGUJSiJy9oKAhnUeueBgjkvE_gsXTYdbRCdnu4oUX1-PamagCLbapdU9yOznwGlNlSS2uNO6RHsRtjL7I5K074KjMtr3Zylxgjs6uzusjGW94jnJwKSZGG3lkk8ULNH7B8VPF6Wz77uXx7WtS3tyFC-BLjDLJhBR6AwNF_S1pMY45ZkU6lped6ezeijKjGcP_fIe2mt82x0aT1ghF6Thiv1VHTTgCP_2jLoGb-hNMzZa3Ip0S-jtKv2uKI50UPj6mchwFGcZzx9MaSEjzKxoWz-bZeBM-Cmy5nkmN9NP-AueXSwyQLYjmUsqSdri_c0lHUMysjGtkGNLd31kot5o7PiYWjSZO0oz0gCxDvNS2ValXDYIawc_p6k7G2WRzmsmPCErYAS7ziMXJnWuKkoShJYvWd3w3w7d5ham-0LAbUZ8XWd9brvK_s5PRESHs-ko1BZNa1_XvSQji_dOLszPRnH1UgkdPF-6gv5lOb8Ax3vxFMuWu3Q0Vbr7N8qbKbtHm6jDwey0twCkLYRZWNP4ERvuUASlpdg5aKzJ7zAnoEo-0dSOMmpk25v3oxkaVAj47Yb_2ETPRJRDhHKI2ugJe049yOtlj3XJf4L6TuxeExiEPbzDtbNRUSyuJQ30YSs0KvjZ0bEipa2CeKsbK0Gq2v64vDdJicBnqTzmsV0DaaYN0XF8NrcSTaQosJNyZAYTV6o37J9k-811q6GNTxJ8En0MM6AUG9Mu2nZl-GquPiCQk3CC1kANoZJaoLNqaDKd5ctqKwEFGubly0M_FfXDwUProD_HrB20qoOSFZms0st5nQ-Pbni3IKQIyWpT_ahn5BiDRVngp4QNstvHzpeaXRm3xjszdgLociv8BykE6pkdgDCmEf0ilpL_EFjgO24vmXEJ6e0ej0qgt9ZU2Qa--5MK4BKQABIKN9vS2GkFk2Qz7cIBXRKBeg6sDMh1Ngt8Ya6rTBJHKflOR0TGWnujwOnwaRYpuSaboHvTupMlLie_emeBwp5acAGFCpA0D3MJxupMU_gfDbJrZMZujakXGHgHP07IYlG0phNVc5wMSyYR7riEUQlrScGFJBXoNlupHZgaxEvpajNL_IQ6XCzgTPsRuWHRi8cGuBv0UaB6fP6EeTroThdx625TugHPDmPaFq4sIP6cMAh2B0LOtze-ccypzC1Arg__Qa9FkNSVGT58WJsX-9rM8Xx1jLt8FnNE0KlaY86q1k2e9S18sSFjh3H0kO1H-yBYGFC5qv-LnqiY-81PBDbep1zetGDF_xBietl8djk7bIXY88yXkHwyYBHcN8S9rTBfO9cZ4dvI2Boaq_1TP6Jr2V0DVwHk7dhm7XdLEozhX6xU8RxTUjc9zCLCYH9Mc0Kfv9wGiTtNVtSeq7Epjtl_UmOOST1n-bLjp0d1kynds0f5YIHjngI0hGrwbkly4m1gz1XrNbsV7oQdD12rI4M6rjhtQCxKyfKcnT6Bf4CTy_iGea0IOsBfLEr_gedfY4YWY7f-UtTC_9pQh5FH7sYtAFXgwnBEpH-JqJ4F47BAhKkdqenamkiuYrrQJ9bhlbNBy84-1erCzSJy5sVMDtu2pYcqOAGeyBMdAeCkPWDtWTrLuuR49cmwn_oHuWbDGbn6WROaKO2N1yj79QwQshcQ4tJ8UEO7WF-8uGsXu1A9ehG8aCzfUF2jVpAGDH1T95YcD6v1mJeaei9kgNrEiV3VXZxZ-jr6j8G6g5AcHFhkIxxi9GvHhGuws1xm17_-4WtGal9xdPKFOEsHS6eO4VYvBOp9KLotqeAEaI4326I2lRao3V099Rb5dbCzLQkEfp15oU0Z0-RhDoCHTQABF1svYZtB8ddGGbkUYwCdWCsB55oD2n16vZ4JawWf18zZJxVVySxYDd-rqLdIrTGYc8uc8V6jSE9167jpWk0DYvG_B0w8bG7WIOntZwo36ySpb-v1rSR7X5wx7ForhCH-X4UODjLPEZoKlhjgSwPjP4RvUSR1avN5lI_MPWh5TxH2QPA0HucpzD8wBsB6f7gRfkfcZBmhVY5F9p0NXMzkbAovUxtaHeA5u-iN-MKRRQwVTOGNZfETHN4P7knLANH7S9dbzoHc4cmmj0XKyGE9N8H0xrPXa3SKcuwY8v5ORLiSA5MZ9Nb4RvnEmgdJJQyNnWx_bVUvk7Di9LcLv9McBGXGcsbOqZyuOQsPFKwHblXYhWFKrgHp4mIvz9CLCU5j29BZhM0N-_H_hbgnx42w2_ySDuQrt9oGhCyE74AeyzgvqOzi1okcFLe0QWxo4ClaDj8d6hYBySj9KyMkkQp3LIu5_JsfyiLC-eGim9xvVJEWYzxB9dJVTEUkS7px9RRf-LWoMfvyhAlhrB7yy-pkXgD4zlCZfRzI2SBKM9TSrZao-Mt9jHoeo8Yl6rT2E41WdCsjEI0sCRbzPP7TarPAPsII_FfDA1KY1NeARkFAfpsH5kMYZX2urUXfUeaFpHnytdq1xWHHuMDg8pDB49CtD-FwjOXkgFdlARZpYhkb2ApooKo7Yrp-nl7-FzNspAP_-Ntqa_Rppw8krQaytHrmjcrDcqpUKyMPNvrY6vE9HjZ8Sad_5x_q7hxVUdvrJCnOIOOntcXYCIDWR1yTTU_vjX01kwKy8BiaOBeydqJ7yx87p7sXljFK7iNM90a-dkavqnIrJCMdOG34AHWeJEoWmWtYiBQZeAw-goWl_DhcpYvjGvn28GN_D4iDtIOJy2cNN_5Vb6ugXGPiJ45PdqXztFrCTK4JdiDtkrIbgl_-eBfcNM80tkFsVDcC2OuYzTlCTpudBCmtOaZxdcj65VKs2lL5COxW6mxJhGi3BP6KnOuOc-HElxLT1YaS5cOYqbjePd7EYMqgQ3rhO1k1LT3lJJUxOezMs6gEr31P7E_ilULytk22QC3TLWDVFomXTBnbzz0P6SqruF_pJQdH0HXkwPIS9aiuMKNfhx83D9OGHwYc2H95KReSElAs6jYsKASuU7wgFrfAKSlPE0thnR6lWa0UBgX4K4qqvt1HLoh158q_8nw7ZVkBhEei-x8GEzwDKWtcKHC8XCrxAqbOsTWyajKv2bp7GgytyaPgNRIv3dMb9APvcVfcDU4M2MLnuLw3v15SRB6nLfLLDbhVKI3aPdQFcgZ7fbTrYhaLWTRkEFkXnqogueLmKcs0rEaO4H7NJ-fSKJtp2G7rpKoLXL1WFkh6Ro26AD81Q_bTAroV_2B5FMm5OGMiRdB67PFubdJdOFVM8mo0wiq9tgwA2z-ogBw2OZ4-jFZauRciBBiGT1lJXkdvLRbtCzq-SgV3Cm4xiNkXofz0g6tzs5d9hoY_8sziSMwW6BBes5_uTvQSj0-PnpNPsHPQe0agVrJqZKB3dI9AmKT-60B_Ro4aHE8Or_b_SU-24536p2TtRMOrMQtrNrm-fF-7klyvPsWkfftNt-tActV37i_4DH_bAptRpZ4XNNpVd9cax86ZJYWMTKEL7akOLNrErEPDk0WRhjmDUqC-TK5CWz2oePiROIu7-bRFsLbqxq8CSVYkeo7cL0NyPsfdYW8dvIPGFFdEwOrTqKOE9uPxAh-5EkZsym4z1QCq2gTxS8UUnnmu9JljGycsVnw87918ecTN7Hk_Gk6dHEv4iMUNU8cBEuLk5r6uYtCsSMNsnuYQ7h24RiOO2TR62ksKhqFm1xbZ3-Xr243Dj4tXrfMNqUMlDjxJAUNuen9vwEon-3KGDBumYgwKOp86E6nUFVzVD5h7nG-l58UiWFkdzccBz_jfe-5HhBXm9HJfd8LMKTYlZjzUezXxCYzWceSYGHySjA1F2O56aV-tDDFizJZIDkfJrsMmH0FMfRuw6J2pEWREd1nQWaWLVeEbcT_CZaIZKcHYPNOiqUxXOL7axvvh4WXGLnKQF17n0YTBQDX5yWcQ_NhUNhZCT0m62RZkm53UoLVkaIX8r9O_7njuaPN_5M96Eav7ej2DAhHVfP96CTI4TKCyTacqQDhzRxC-p-JQQkJe88c07z8TaSGNkrpXEFZ7-iXYEmtdtY_Zd5qWHwvY9GfbTHtR3bRgXL5mYHZeQN-uRc_xPgvnvF_fnDnskX45aw41Uuq_Ov5qtkoDk49SgPWUQ4liO9eLWAzdewyH1eUiOi3m8fKcuXJFiWadzWXYlf8Qwe5By3nVZXY_u7NKG-DDLVQYTPU-24dZsTH3doEtb5Fpc51fR4-3nJqcKYI5yepgJvH1ZPH29qadbQMN6nK0zkacRhE0uyt4dxgXfMgeXIaelTkGD776FG6h7m3wjVU_5Y2DBWoLoNzitQhsr-SSo54s5PTCNI9pCyMfIs8fvK9MpcHB5aXM-jhjCFEKJOd1m_M8qrb06nTznI6-V_Ub52lOZZgleLkt9iXumQ6rt-rC0MQq8_6QTnhf5jJEJUM3oOy9vxxkS6URqy-Y01sGwqrs9S7JQd2VuUVWv5czIFWQ2eIOa-oiUy352gpH20i8uCMY--emjXBOUwGBSBGqhmOSa_W84Q5b7cLRfEHvFFXKKDVvhNRPHg7ha7Yui7xZVLgF8XJ3X7W-NYbzCvYTshoMCxreBG2KbGeDwT_Fjl7yQhSMhOPxPxCCDcoWeuyH2zHVl8zEz__oJwH8wLT0u-BPa47ROFjGwjSTGrXTZRKOT9qHUzrx4akok-1-LAqGijqRYO15XZ-K6DOhH6UZFDHE8KWp_n_GboXdsRsXDP2IDZjmD8TIqCVf9jBxG4Bg-NahkChwU9XRl8Ky4Vg7kGRe38Ca9ewSss90AfXEJNRzLuM_Q5R3P-Sa8S9JTRQ0nF48UQbqn3ALUVZdbGnMW35T6qYcecxSNGh-0F6kzawK6prTm90WsfqmxaRviw7fqceAfr7q-DcsY5_ejFtDrbcMlGbK2UQocAjfyMUeeUp9LetRMyoAX8rE3hO_Wsq2q_tS4RwtTEvdknqthcIaHkTvcyir_SAQD9dKCChoEPY3SNzWWViEyAG3_dqeN_FcQpeDYSD07edSJghCekOiO8vlFMW6hqmd_-8dSBIcZCJk7_VmVcRNK_de2LDVv5zwEQTCeWJ56FG83yWxuXp5rcBr1LjkTpXv-57Z_6mh4yNdYMrhOYqt8oRwzDz_NSbxJgRYBXdcOAN1K4TVanYglQVgjCysB3zvu72N2D0xlwIUzjL2jeNMtjZoIFNLN1ABWIj-V2TMsGc6_26qxNJHMGiV6-Uh6kkCllV1UhDyZO2J6qy6H7_GgxGVqcP0wdn9fBIE35N0s8vMZO_lI6C2hAKYc_ea6kwAURfNsM8CVUZZgsNolMEEtjHEihf-TzmDlLy9jbcGP4C0w1IjkZUucGoNn6EMl-g-xSw02qF6vzf-6vtyvtuA2XXmN_lpqKqEIbPvznok11hjUnjNvlxQnkAA6GR1kv6t4_FLZ3XDloSmP-cmuSbBNnwE52vQSJwc-QScshVKApmUTzqQTZbGsO00FalUSnwx7zBHQOuCenqMak4aJ9WjcdTXYp7weTnZZnRCCdqoBSCnuCHCAjty-gPSLXriygucjj_qNJIMOvbVqvbVG56xJebNKeqfpsos-bkiKAC2ODM8WCW0jgAjU2eUiXkU-R4AoAQfSzpJpkNRphB1c4ItGATTnh63xqASfDwptCQrvmSZi4MmBtRsDeitjmcDARZO3IGFUOwOIbTo3uYWDAI7Qbw6tv8g0P_7UmeOV1p4_LQcyIQie7mHoSkTR4f_4UfKBrD7RxjkU8IYEywEfMBNt5NKrppqMoHV5LOeMnRfcxG1vQd3Q5i9C_Hs33mxpvndp5ujjsbeCgs6KtFFxSIRfqgbMKCYFQUYHoKNA99op8b3ls7cmiSQIIQoBGrHfZgRLMsElC3ZNSHJORNcYDwVPcS1WsQjZXQT51kxr2zAuLwigHResM2BdYSSNYlrR6nOKpbxlw4rmYBmnKtyPF5dNxbicefXYLiP3RR3ZueGYmZR3jrThiR-RuqU74FNqdOttJ7pzH90AZzVSXuphFe-K3Z8g4c8K9vItLgQJqSJLGWmy16mGPVWY9Z_97ezcQb5IBiUdZsa4pf39oWbeNqfmUXraMX32Sgr7PlpeBcLmX9ueBazahhzhxZn_QyvJsf6fwOIf9rCMeSGbWOvZqOIZ9sXpl2agHvpMcmUebnleUCC1DjyyamRgOGBKNHzfYjNvUr4hpqW3p81TYItFh9Uc2APH3xZGvew2YqI0GU9irR80DNRpI4YVviLI5mp1T8Nsp1TfLGSE91w43sbLLv_zTp4cYxETrFkiDNeyiM0NRtk9Ed5a1WvbvtKg4Lwv4o2hN4Ejg-MkKMVr_9Wvik_ofviTIcv6dalXd4MmcyBLjCzwEgJENhi0vv9BqgVOqme8zGZiSnpfzAf2s6VRZHKJPSn0-2EOJg2p2vM4kYGcNQOtwWLkpu0umyuMuRZJ1MI37ZiGwRdwwzcF5W6DD3ZnNvH1Xc_RRBFxHuTiePSMJIuzSRuT1bHI5tK6YnBa7p5Fwrgd2LzEjIPCDSwlmSeQr-WKfvBuA9P8wSxSMgfak8EyLTrlu8nMVAghUfJDFoZ9Yknw4B5HhSCco8DXg3a8tOPeYGKDZvdc6y3Javre47HUY41Hy5Sa1TfAR3Rmmg_Wll1ioaEFHdcP4cut3eyExn-W7XBZfNZyp0yBaM88xZ9KmSZZ_Dg2W1Osxg3UpTlQcDzqvgWxDzuIxuhvRYPpk2znIuJ6Z6X-JHOOV98K4adwIAhN5cxKgdr1WBAq5kGCyqJjQaEqxTlEPy2FKUjeiCb_aOXzXmLQc68QFMMS8-Gf1wdtEZ_HGZJyPy25jYUH9BDWoTxUvb-_neCdDaKzb1Q4SuAx8Z_7erOlNaIj2yVtGmIgpwaeOcpe-S6zMyUeSBCJ000S5kxd9MyBTzo205plo3cA37Ay8T9m7vpPvPJeggGSZrfrEDbaSXLCTFItfs4akRXnzHQ7N5u_zTuhhvtDmpHZRYMiEn32ZnXzsLaBBpA5Vcbmuq98frQ7DgKUwvCWK4wfVOKmuTGV3OFTgH-NnJ56Cl7ZG4UBBPw4MXzGQ72ef630A7vQrjHWMKXOrQn8FUjoqZQzur4P5EZdv0wUAf6dt73TI3Z5ARnRQW_Vy-hbdfLXFHDwqWtVVeizUA1Gkb41Az3DKGjFdkqCZlSJi3UKLBXDm8Zbh21Ke1a0phkloEg-8NIdXsRH90Bx6moa3bZG9QFjRV-5CLqfDnHkXQ04U-E0YwYFdmA_nkGF-0q3JznUayoGvgytGVdFMP7u2Hhd8N8_q-9K3Hqp4M9azy021C-1ITsnp83PymTx8wASzk734xHEymzF3ZZASKU5CWFicBfj5CItAuqe1vQ3IH4hKKgB5y5gZVcsGfvsbvfX_-vL13GEvYxU1xcyW9Ol1r16xq9Stu0IGemJXAgPb-9zxc1er_7j8VALkA3XpL1FtjV09roBuwTuo62WRPttuvfpD0wAHQJ4IB2R3PEG1NNxeCZjaA1bCshVakPr-EcW7Ul9IpszozqDHGkxHhK8iO7ChDNAxCwveT2hd_4xqMIa2GJMQkPvUtZyVzDeJAL-FFBg5lF-BuwcAzdvj5D9kFuOo22QLQPSe5hcKDIyd0LA2MgDNlpYswS-HIPfvtoanPYoYy0OKCDs3eOgc9PV-8Ilc3cmPE_KgN57mIr3-DMN9PjR06sAz4AbQF3oJonBGJ2zc2HL03ni0rWNjFhX0oF2lIB0YK_XAL1_wXjAG_6jIApOrsPOPA63n5RDMCNrLS3kOKIpH8qEQkN_ipXfDjb78xJ4_P83SQ6z3q8pIU07O0pD7IhAyIgHkHH4tJNpXKsNxWjDY8ZhHHMynWPMZdHkZ2vo5v8T1Rh7siJLXzU64mrIuUf0c8Coyb3CzTbhmjdNQsMM7BcsoUNnwSf_QrAMIDEG1IbBB_2GkeHSveWqIg3M5vyu7XIAfa1JiOZIk5FfSyRyU_LuFSf3rSZscCt60docDK-XYzXziRg2ToFTOs3qFlcLpoS_qyEpdtKYK4HjRQt6wjbdqC8IGQTzfvdcOuFdVY1tlcCVvvwFjhvV356eN5-_G_N99bElLpxEbrz9yUlXseuiPjLVnrYdk1tIeKHqv-Yz7e7IluNwQlOaVRuUzBP-QE-HR_mx6YZsfm9j6Exb10dfLFlgFb5c3avVc36636Qt_LjVfqyHwb4_tQWOtjDFDVndmjzvWEYoPMZpCPioMQtX1Oam4pFZBDxK6aEUPNkN6ws_EawjJ0EnC9uQMubbqMxqQGy175Us7daGAVzdQgijfxECwnBE7A_qsHbcbF_w06YQvTk4znTRpGKC2VEi6D4F-fIwhpyQO6Lfw-9H1QIUk74SpAUMzZ9bm3f8miIQOtRJFV2Q6827G6e6r8rjdb3ZIAIeuvKM0HZgypuj7OzCcaMHkolxv7pk-pDQYlFPTCaHjou5LLEdXTomF2ZO-Q0_huRh2mK3MiRGXpQYyzKUgOxiQrSADAwDibRqzApbn0wAk6yetde5Bwt9eBPdVlP0LPYRv36Z1WcEjcJcnU9HV2Dsp7I8IZQW0A4pKJ5y0qcPNQXoXRGz8oyeWsF4dep8wfmLarBcSpQX5f_RGUdVLtLDGXuUqNYMWr6wL2Kc9GXm3OwJoXaifEIMgu7z6GGYE-DFrZrVQvcjCpukJSThrwul22QsgzBOEYbMcZmqNiu4NgQ2qxg1NztqoWc-Ho0gwphNIkJIjfYfWXuKKH7MVaO2HHlYi9wRF06p9n_JVOmJ5PrMrkMjcOvsj09qwdsDVnF6CLJHGk8x_TVBjl5BQSkzRPIqWa50iJAoQeAYg4WWqwDj4cfvYaV4kh9MsYU4AHccNefONTwnl11NWg_--r3h6Md6t4-3xmn8hT2ENouwesJXurMHVVymoPadvwmtrRNR1WCtOP4dmopMj_RDdoj1UkmRi1jYrdXeMml5MZlm4OiHz6poYLfh45oSIbGtAgO3Ak8lhvxtlF9SnnTuMoG8SuDD_brx2Impdc5TgSDsg4poXSLpvLJy_bFmvLchPd4xi2mhdmy0aQb9whtUve_gGMcNCqe6Nt1obLwo7sQGB_KYFQ0zz6d-5MXtGJlmQ8d5Pb13YdbDJERFhCu6rRq-17WwrqC1Z6FVBt3W46ki22_aN50U92X42ca6CmZVt5UbMBimDMcHbAvuMunpYRIDdF04kccHnvyv5ePUIbkuebWj7uVJzhlnpuo0ZfPifNPmiAV7v1_8v1215hyHsVrpQrrn9dqo0_o71M6XaASUh3gCOJ_oWbAJCYWLFhUmgeBpIfND0VYONa4z1nGH4HA6sSz0vKlIua84eFrf_VqfiL-2sVX-ixCiE1KZEp5KM2HjW1HbXNAAJZLAfmWsueY_awMFMKX9QcKjuNSfLkzmslzUbdya7UDGq4m93zjaIWRLQDw5PPOkqGnpRWTW2K-mp71ydTj2my8ElHTqJB0WmuMSGmCua9XffSN3KqZ-hY-oSDnSy0owXbuNDJ_UoNUS0UnHEPcHKvTyQqeEe4hn4ejBbXYxiNfddEdu6dZ26zPUru4j9Z7mGhVFmzfMH4EkSMQhnF7i4uYs1uKEbrXMG9SjUYyRhLixWKaQyagdg2tkYD6Pb5UQvrP5E8MZBQRt4gJKBU040D2JDOEu0FCuMIYOyLUmBltP_UU3ribKDA7jswaqFvYlnH2H1HzTMtRdcMmkREj0ocyb6Zv9zZt3xueG3lNblHgTXUVy1Ezg5Mg7hsGhqhT2GQfTGISpatS-ThlRpNeUME-vbrbvfVjpU0PNlKYwukWaN9305OrlK6DRjPWZw8Qwwc4Ei8qeilCb6C_WPqQSokCEEP_M9tDawm96HuNRlYSy8k1JdfsN2zUgvGbkB1qmG2U5uX-DTx6NxtUaeJ185sf_WD6MeBcyzjX9fap3xeQDyrd2n7zT3Ju8aeuS5uoaARYKd63S9UfTnGWTomoWs-C1rdyE8aVonf-2SfFGqqD0DAg37TKkxzgGp3iJN2S9kEw9hVAeZUKRBvGZRaKxmumrDS6FaIA4_hSlG3sUQ8KoM2u1fxF0veUvI34tmLWqWz8KONFyCbvNxrcrPEWfWEvnCfGQGl5rb-sr-slkSxuyJ2wfJUIeBOveCTP38quy-zmQg8qUig4n_aEmoa-ZBwsQIbROLUWdCJ3TZi-Erpst-zf251a-2qxFZW7Emu3NEqkDTfewWwKy6UuM7RTXvNysxANu3GX0XgWynCnuN5MU2wOeTWILDBrA-vvywImRfYygbLDuP5ku1lpvEnWjTCfmGAwkuzuutYdSyltQNl9b-so7Iuidjcxo6PFkIzPYROqJ65TpGhH4Pznh6OfPVt9_vXAEt2-Y04-U8_SHpb-iGKQhMpM-VveUSlc6Q-JydHd6vxRSEZEqVGrxO1-3Rk-jATeTFnMS3njQD9TwL0MTzZpJ1vqUisrM6vtLeGJh2xEmwsMyzkAJB1N0jx9VrQLus4FUOpfF8ZL_1ncQlBabjxSKb_JJsReGLIK_O_6JpFfhEoCXIIs-5yhLZE2XfuJHUzEVwShjTSiW6shCo5KThL4TOSXYRE-ASTdbjYiXfWWyhsouhe5cQiC-0E7SMs-lqq4AZ5CMTvGRU9sipaGzNbhOIhoxrvcWgg8Z-zG-8-DIDKfHVa7AWZQc_qgYKDPAZtv3iLux6pPDCvGoQW5sKJGvmjmXwiJrl3TS3LCQxoXvrwWWXzzgl-V4lOe9Vr4ZytCq4zz-phJi5uRRWlPpXVK_RSMsudO6wh8UYg8PsrzcRMBHDqb_fEK3zaGcoyQdoW0akBDucZI5KFC2Y1LX4m1bIyZpnNdfmgPJUvRhcyrA68-IpmF4H8IJDi-eotQqpraDcsCpqij4HwIPCtAnK703Usvzi9rLPkFlIDhkK1gGwBe5FRL3k4Kei0mKvp4RxEQRWmzMO9hvIQCgbN45c9_bzVQIASESB2q1Ny7VJFUiQqDfFxoc5IeEij_WLTzOqnK8bliotio46yGd9w2Es2F95bgoF58q4Qiz147DDm3b7wlweQ2ZHpWO-cPqKJmaJEPXQwn9snrQ",AlwaysLoad:false });window.employeeinformationqualification='';
DbReferences.push({Id:"docdata",Type:"Table",OnDemand:0,EntityId:"tbl_VA_documentmaster",Columns:"",Xml:"_Q9BfKlhrb8Hh--JgttYyg5i8OkT-kAKTnzquHVTTlsLxVR_2dRuCE6cOH82V5qMHThzJi-zSbK-GW0bZpz4z9i2buzZxmH0Xr7IrVXoiRfWUggPgMCdP8muTPeTKkYYfEN-ObQdPQ7H6u6v9blt0RCnoiGaVvEtoFHPyJdO7pRZlwdZ7oTLA992HG_fIUdE5smB9YoI5l71K4IgT3EX5uR1z6a143jnvuh5vaCQVABX57sj9Ad-8VSgoegs6ub2JwRZIewclsCb8QbdPqKCwl_evgsdwjtrMb72rpVviYaSNKPp5c73vWfRnVmKz-2zlZTTgTRY7YZIRGcy8m3YT28kBIlr8AkS7un8BFPz1_riRzvfHBI7kI7YwH7bDQD8zS0tB7TLuw3BTyOq0eWq0mE9K22QzCNDoS8WUbtDHmJmgRoBcH4UKP89eEeUy3X-rHwQ21YTfJeko440_jOIbgPNv6kHG61yP74n7_N_kFDQIAupK79-A1eyP5126T88g6pfNK8naROtmwWjkD46oB1Bc40hwdp_XFxSHpRb91WUqtJIOEJbez3fjoFwWFvQNNkWLZEpiHXdIYzC918ryew7UnP83fYCcTwy5uaNHc34-FImrYVkg-QpqFH9UroySla1hTkFeMax2YjLEaCT0uCcyWDGsZvUSk5ignvi6fYpOPzq2-15nHge2cg9y4MmsB_NF2EFehZy3xenAEu9_TxFFv0_P5HyDbycnCR_hMIBeSOKm9JP-CiU-bGhUi-34cAZZV0bPIVcsXS3gj4obsYg1JJ3EdTtWyXiaerrk55hnLt7UlEB6Gz9DfiSP41ddTrNwqoJeNFY1M9cmP36TJ_1H4wM6HursdzmkeANbDZodVjj8N2unXB2R1WE7ZW39DNT9aIuMwI2HPJEWPF6ScIuxCITOiRaOTGiDRN0P4d-rmcUd-es8de0hO7QxoENPjp5XMvGY9sAy1aDIzTVoSAJ1ZVibnMVWS5ZhfKp3WqwF0fDjwAwrnVLAKF6Zq5sewnpS42YqonqhCOuhaQAuGG81qo1G50mPqDrx0Dqy7Nof8NA36PqcpMA70XO52HANCVfB0Y3Fmf7l22l3r4wJ3LDipxg3TOc252ILt4OVm1xcKHT3ggd92pYFXYwupDFd3hQMyWkCZgfu6A09I_P7Sdo_kltzuA4N0HvQtSViFv315SQHkG1DpRxKl1b_I49vCAMyqgLfigITCjTiRUhU2IGTYDWSGCo5Tqxa0420zB1IBtr7d8asIfhhaDDgQaFu2eHkSS5FpOwy-4lC3tsI7DFP_JkTydV_7gT8m7_yAaCLExjG1jGaW54tPJTgcbt_9ToDohsasiyOWt9NKYcZ2Kx8TEjs2rQoAKADhFHClMrHzBuX389oN5cMPPODLfoxl9woK7_-vmOY9NmsULu6U6b2sEDu79DAI3jd60zgGkI_optJ_j4du-3AV_S7ziHReIlwtqFaV5TYXnfL7xfML1X_Yy8ocRNFkY12S-UBHiEAxcl-jE_-fK0i4BsQLxic_HQfrMRNSvsdeBNt_6Zlln5ZrccidJNdAU9j938FrGwbVBiZZLRYZKcLzZUaFAI-DtVccSUJffSgbsAxRnJNyQmNGJnMSYZMuzMIZ98f9BIhv5rjrZbhUq3TkxmdcXZPhpC36aqyb86PPdYraWnwgMj66t_z4i4dfbzUrdvzMjLtP-4RHyD89jfdhcaIlgzzM95yW1kgMzXyHZQB8k9685gcPtfA_5q733A9XtWgzTpzrk5cJT0s_MGGMTrjritBWNSX0UaymeZGVh32rfg9iqipvougoPUzNnW7bhyH9vCxxcehTb_glBBEuJGDxWYUOxGuu2owa0-MrwdHThRBD7uG3swNk41I5AgwLYhw0rNSWoIcDTXxpa-WGbUt6IhAChkBIc59z7eXrD7yV74rrNtUxyhQoNSE-yvIpbyGLB_J1FSjIpqC7og3gp2QwH9ZcVdeys_dayx46XK6JBZh1Th3ngM_AI7s8xvNDebWEZuE8XOtj3HTxovT0KbKIBhpKGI8ZhC5CJZjaI7_PiZxQvsZDNOnnbSYOGRkkP0HfWypoEGI-EuANBULnWB68HcmDgI_Qd7DsucKCSkdAaF0_grolRr-4aUW7XkP1p8SfIkTjdisFpVJ8UXduF-AQ9kXMHAuylozDrrtLMADxQBlWHCtyNx-ObeY8cluM_oC_US64RIqDXlGPDUkXIQmHoq8je-S9ZxFX61e80l67kbZDat5enTl59PBXIwvqpPjlpEhLrUSNxI885-TwNW_pUHPM7DgQb-nIIkmRlJ3d2OCJOFwVUgF8656lj9KtzBHgDXWrniP4Bt7ghpeT7Wt2wEFvIiyNMCEmoUEXBfMbADygVBTRiaKD2GriCdYxkM-hlQV3QMTGPUiOoy9CtaPmGZjxZpUfxaYaoDIqQDbsOi_w3yjDwd7lMmcgc5KuiuiaCay8a1nO16ZwZjBN8OYhnbPZ0Aj8VnO1sT9TnqIWtupKBKyDBIbu0KZ67jMEsROR39SS6G2oPBOkQvU2BgEXZ7nsIc_wa0PVRaWhxZSiMsweao6e4brIO9Awa5ZbNZUTPmBjbCpCIJudwJXX8VCCUKt4VS2G4dBtE86Ta3sMvXUHw4AGFuPHWSGOny6ifw1h9RVQxOC5mR2BHELXMjVFPK4JRqeHAP67PsWLmVKu9yoiPqF_jAajk3KPE_99wXubH7AKe5DRSi_Ig1GYruaoYC32tJbPzgV8Vq-DMyrqTtShMxBfzdfSbURdXsfrdbtKfMwbQDsJtCGc1OwKzpQKjVI4BQloN0P80Y5HuB8wIFrfcpdVuFuW7fVrT-TrS-VHvt0varoCfeVk58t4vEyzux1eShjQQ3UXyTuxKYIFvkjqhY7SGSU-MDRoWNXZVBjblpDZm1QDd3WHzAAx6j8mI-9cofgLv5wMtpX-Gnv8QocRa-DBTBk7AK1utbsyIquzATwCTJL0tfsnBRHgO7oHIQ308OlhihzUWkthAsLv9hbmxq8pGxvqwu6Ne27cPIQXP0OQRx7ubjtsAyJMZFCwI6GSZpqaFMOm-RkykkZAULIeP_fBQydIFi5pM1EJb8t1PBpf83vbs9verKuQLM3JJB0ikoueZ0U-1NPbHaURO1lJaiqy83tmMhmC_x7yILV1jJJ9r6vT0llyTQhh8UzDJKD4POjKwpHkxIAnFtjDTRFnwICqjm22uFXlNQx5FvaNpGn_7Os7MujiRZPnUIj_T0UjySS4FMrFx0hkDB5X1uJszvQxyi3PkrX1OlJQL1qtbCQbghBlbyK2RoNeBOWS9cNU2MAgBHD1Ydi190Kb6bZFcXv4z3-YcCJzQ1zqaVooGL566e2haLDIVGwmp5J2YfNsEaU9uvgKp0C6WFEkFn44xbzbXkiJxVhlRPqFOQDF_2fuVZ6uL1tp9uEyiHI8szZyTRJVbl6od5Eeu7zquWDJTHYBGAdLMMZQ3i04uW0rh_ua3Z-K3Xi-IcTojCmJUoU46tuUJv5YQISxsRrH46GZ_SqHBjD42ot9AwHIIoIciMve27zkB7IE0jyV9YGdYFUk9fFfwV-F7gYyVdhKvuNjIozHHo-Mdc82LmpBvnAr9CfcyQ3lTAWY-9QUj8QkMRk-EHRqHzjP3M2bfSdSdsuHHxwqyTgWWgyBttnXiEyQ-ZZqe7xQqjSHFQIK5GLB0YKtx8KR5T0gCw5dmTVv55UKHpvzRP7O0UliZsdryUYXICrCinGlgJlVw7ZFiQhl2g6TeqAhhL5PSlaQIuz9__68vgeXRftY03gtpxl5war2EUN2TTMJapH7YhFiGrX9jEAPPytwYKvuNhdiqc93XsYSXJXl_8ixymu097Yu2tS2KKXpd3pGDURPD6PT58S-cGYICybS6LthmArtnj2Abmgr2NtQsb8pLcCIj4u9tiurFNXnxsOIfqkssZCW1ooTmUx2MsZFpO-RJw03sMBu3a44D-4sfZDlZZLQTA6zpvlaBOItsipbbKm99W_yeSzGA2bJ08HKnhB0eun9wIEe-utfeBFO-R8qMWfcVme5npdX8AQB340x-MNYeMjA-ThkZt-2yL0eszCFe4y__EtIBH4WnCe4GqVE4pUdO1L8JOQDdSLf3Fqc_XYXLpr7ydoyPy4YieLJjDIbqgPiTk59T3mKhJxl844mKpa6mmvwNiGQoJnlqnFZSLQUL0yQoELk6yCxNk7xrXvN8TIshxJ1IfILbQYgZyPVhEvLTB-p2vpb9R6vJdYT_ClygGUG6NQVfvoMh6wrVLW4GQqZHtBD4XGcx-8Lr5KokO1gYf_ox7k6-1Yp-izqs_ZNt0dbfT66PPmhjS5jccxbiYj6ImQvidTBybnDQv8wXvsurGhhZAT78z5GiT3fTxdDGqDa1D7inMGV6ZExfrghfMFinz-hCCNQ",AlwaysLoad:false });window.docdata='';
DbReferences.push({Id:"attachment_data_doc",Type:"Table",OnDemand:0,EntityId:"tbl_VA_documentmaster",Columns:"",Xml:"_Q9BfKlhrb8Hh--JgttYyg5i8OkT-kAKTnzquHVTTlsLxVR_2dRuCE6cOH82V5qMHThzJi-zSbK-GW0bZpz4z1J2F24Qrd3elzLnbI7h3CDg4aJx_B6jWIYldtRA9Ah7M173-9tdimaxIF3NM98qntZGtTeK6DAqg6vWd61nxGcjRR0bhlgIPQkz36QcLbAPdkUD5Z57ZkFR9t8p4Plin3Nk3ROlhAZ_MP2H5Qpliu01G2MLSpdfKQ5HZ6omzkcNqFxOuasVS23EJHMtRzDTPxkCb8TkHNGdZTAVb9frssLuO56D2liGOX9DeoV1MwcNcv0UdQXs3LTLY-yC0DrGz-s6R6HUQk_NDDSPZJwdRjxKkI23_or-1M9GsIjybDcLEXlJcM627TCGBJXd-kD8brdOdinjYH_jIAYo0xJPPfCF4HMmPeRvEQMniufUVFSLwGo_8WUhLYN-ehWUejdVavkrsz0V2DvzjMjAo_EXI2B8BM8AKLuFNjeW2-WL76LKsSd5x2F5KSucp5RfZMxLHFGSDlGyM4l9uvLOWKaSOhmdbXEYhZ7ygz99Wv-DXBXgKBiHprWThL_ViG1Fg94N6c1WPfDsuF4dHiCVjT0k-Ilfze7LjlgjmKiJC9evFPZzJitJNqiLZHX3OWW8ydahwfQaMooW-sJOG0kcoRtT1exmkNV7Hf3sPtIyB5o7CttBe2anPt9zs72hXetDjzXGWOUK9vwyD23oBQvLBAt5RAo-FBENbdctfTwg73ry-TIVyMh6Q8oT3Ef9o2F_Dlt-7h9oULweT6mUZUmLr-6wGRs9cw9Y0c6HTimtpmB2-9wfqXX0wFHuyEwQkB8m1FucvJyq0F_VqK-kFezxDwDG_-ak9VPHQLCkMN1Ts_k8-4QtzxDfMHzhSx3vouCLmO6gTie6e4Wo8Zor8CVKXOw4ITF9tz-i7fsCqikF3ZJKa5XYuoGCbKsqPrE8B4rjnYotb5lFGhcTAYry49hcRoKYcr62P0-stOCOyLQjsy6472YUVUASDvg71mTZt4_EvyBGnbTabvmLhxRL7THIVdZOD1h2BImpNOp-z_WGp1WqPW8tMrhJzEAqS3tNZeeiFLAXDw2ZNZdkhm0sqYZUCePjMo4V4ZUwICrgEeNntFPbL8uiYJCoosaXN9sahMMcnK6R12w_wvZPotFXZsBfhfM8WH1Uannm6lrLxgteGKsUe24ts_PuNuvryNR4POMooBcVRPYw_VU0t5hdvC2qgWpboNahvkM7PylyVPmbBY97u-fIMHxKUpz4mmnBDh6NyB0LrBQDe0bQKhrjxKF7o2RKrGyjFp0Z2bo-9pD4qZef4NES0tqAkS2F9YcLAf9OkH5DvMvW6X1xALPKq043SGHpghUFmzB426BaalqJ3sBd3dqaygTQVUSd2DlSKMDOk-8o1kFa6F69vVSNCztAG9SAnoBz8SyH7V6Y-c6JiS-q2Lpjw-jakbboyxY0wFyREoi9fXd1Izjr6dfIxu1lVZz4m1dHfenoIor9LRAKUtBoBtc_g66ZPGMjE1xeWfC7t306xfPAW3sG_zgv6vAA9vwUDtnBJasOB-gl3fhZ2zW6P4wN0lVt-_YAIak2JB7w8GBQxqpdfhB6fRZZYUA9jaJYuho4IEbyLCU9aqv5FWsTcgiQFvykIzvivt8Lfdp3DMj7jl5RsX6pbDRmiY4ct7RdozZku3dWJcGHfQ1QGFxjFsfUS6V2MxzDZjGvmKKvbwitS_J2ghnyJzrUP2f9S5FSPr2j2py5eabXfcuQbeYCtjNqIvBK_d1abHfi402jwjVUV4uVzR0Luj6_PV_YkE-hnAzIH62PRuflaYpSFLZ4vQ3AKx5d1fAFf8Rozu_VFnVBgbJk0ybrYy6FLiAVLdz2CPbSkoqp1ooMLxLgMFuBiFoIEAHirP11UNmVz6LpplwyM_ns5jG3hofT7gr3Hgca2UqI81yKUuGlgKfv8A9M2XqyWL5eYMuaZwl3FVkfeygTwsXevz8wrzzszbU7nGP1e0oQn1ebV6uroYsGSbR0LMBxXvqB7dyOqvmyHNlNyYV8aBdmgUPG0lXfBiFA4XbXrWhY4_VXemqLbKU2FCYa_lDhaAsvvE1rPqwJ1cjsvUrfUGrxV8wjll_k3uAJqRY9G_q4pKih0-ViKnvjMMQJDxNSWZLWuhiqY8wthVo2xTYIAmZnj4Zn2G_5Kf1MTk22VF6QsCElwE1IbJZgN-yzk9c2q8OwVtommnQuCRs99z0YRkq-5Qs1p5XY1haigluEb5_Pe8QC5aP2CyK-VPcqxiiVy4yTpy6BPHCPxk1ofcNRkLqp7pAD1aLWJ8xbhaMpeJW765bQFE6w0H1LMAYeMQ7imrqKW64Whiq1lX_g4t7GF3W75LTX8okI7jdmEj4T6edYWEAvb8aoybYKuOEui8kYqSUBtM2H_J0BJH7DV2Tt9kdCNBFStFI_ELXbmsVkulegvKwVB4q5SSBQQTfQ2NZBB2DZ5EeZROU64vXYovSgavhDwGdQzYx9LK9N3tItApTQNOVCO2kFP27gNDpXR3999ZGeUVH9oe6m5HVBIubmkacqajUmoWGvZmdiaCtKTdCXLTmbyrWRV5iZ5C7ecE1i0x2oZ55dQvpOIMQOU6mFSgoH55e1hMxv46v4kXTpq_Zrjjmp7UljhP2QCzU4vN4lhV2vi864GCY7jMRApRGmskKrUt0VMIGAN1HoXllOCdR-IBC4SSIYwLC_Z1-k50j3f15p3XGpNUxj5fKW5BjYrPQasZHb0jNExGBJlCWwbHZh0N38aR_YdkyTWDcjvJrSRvhL7a4HrtjjLzlGLLUR8lKRmxmE_U57ozA7MDnY7RkTVkC0301Vd7w_7Kgl2-OFSeJHJCWafCjqzBaEMjG_mxm2LG1KtZgx96O_tmPxFwGHxZCwBTSyMwC7KbAbtEuveqJnwM6rG9xdRxkrdFYnN3617MYZ5DtwOVoXvuxrwsKOCFqgUG3JTgRpaZlqTU3Ji9OVkfdXGk74_PCqfK_pbZP4fflJTjj5SdM9VMV8InH3jRtq_I1jgvZh03c7iBzrC1fKsLmCP9IQ7OKJxhKEX19QJQ7xe5--hRddcv-EY1ONOt_qzy9HeKgzFk5CR_P6dArRi2O_E0ACBL4rrrZR6tEF9s14w5rBLur9_MFXy0f8P_vOWEumoZX3RTZ1oxWjXBFOt-T4YKWJPZqv6MvsSJrJuGRxWhTovmvvaZ8C8IiF0qkp1jj5z_jzfGG0nE3Ex3n3Bd2ge1m7VWn113XKbuNa9hXl6t4r7kFiVu-SLwRfO649EiekzgogDsLL5TKd1EpLIY48Cv_67qg6UoB0Uu2Fb8M4dxxfJQpbnzM2f3vuzxJJ7r4ZtdTFywVF2n448hkfCQw6UvOGMGHjVCWbyBRX4oBm1y5C8S20PkVp4SASnISBWm_CzqAyKxOHUAEAkugNsx8y6X6bCEVYUA7l0YFjvH5QLoPyqVCET_pdkBMRkSOy6P0ra79NakCzic4jfYCE49rko6gT_gHpI9cTfE1DcWCwIn1r3iayoHgBkaw5T9UUt5PgZuy8dTBZmSvZi1_5JdIDM2eGQFTRn8i9UdXOWc8bB2q0f1DLa2IFWd-Q5m0t1raBHBPr9iALdxojdEBToGFLVwRilqPYBriTSWjhj_euxG5tLHLoZr4xFAXokLWU7zouK87XdG1ktnR9iX0YjEJbjn-WBE7LzRdXQRVj96PK5junhaAQfni9rFbbwIlDBfZk9UKCfVAMhVM8Nl1kZJ3yYrKPVuDzStQxFmTP1-lsi9nhWDecFJ8eh2UiwRwqyltwY-eiZ35Q2ZcUXnVl_A8CO3l1RI4s4AWnHVAmhd1M-2Mqz0zVBxPMdNYoVJ3O0bQ6OmSMMMJpQtksyw-7b1j2_2X9TRRcYn4v85vbP9WrLBneOPNSelctAL2RHqdRTtKlfJrgnZ73BJIS5YQtAb9xg1VniL72Dsrh6-smQU7e8OL6W-lY_fkq5oZVxwfXESe6ie5lrCfjqzvZgC1xzmDz399JvicL-xZuMH67pCHhGj71E6FQp-zBeztdc7peO4z2hGZeEqSshWqD-ENPb7QVDSPIjwEjfz8OK1rqV4fdc-J_NntC-cbk39H5CgUVE0CVcGShelDXeaWDAqc2W6k_FB3KQ0M45X6Mvz9qnCnvEcRiBW2cZIUTfp6M8EgxmoQ9J4-XPiC7rnA4JGrizBjfcA9RrXewXo-34yVX-DcP5mqvfroa9WV6wdVxDinuOIKK_GpHjZuS5BjyxSZGqZrM8PYtw2Rczx2wPYpeAm60Lz2l9cGn5I5Mgm6P4ikZK2T4JjAtq1FzDPkoGfDaj-tSmoeo2oYZyZYzqPiE9-D0D2gdKtZW02s4EYKSiCAT8ivesNYQN0xPQ3mcA7snX8wID1TQ1eV8GqC71Zkih9ekd-1Ng3vl58kK1F4ExH159WecAz8qtVWpktDYOuN-NsW80Fsu25YJ-QK4qNTNLwTq_6JmaPnGGAWb08DNZyLmnq4nCfIB64eYtoPtja1LlDXnaYp6ZdRwH8RtkTZ183A6frffaktomevCqWvKP3JtsgL5NoQV1wA7n4-aoV8ZfaMkgzuo_da3vKmQQu1CZhfsrLsx-q9RgdCno6ZEcq4aZoqhD35DttMyvjlVRtrsgAtGh_uNzeJmAUEA2dTAh7Fip7Mls9-0oGAWf_N9qas2zfOahfK9d1jMYOvklB3FFPJglUTIkVsysfViPcoqTLXRnzhHGbiZhdbK2JMdXKUyial2NEZbiHdn34-REDheTr8BaozJPf3O87pCLJNWotXj-IzXzSipXlrSJhAmtGyzDlrmBDSjg7Fc80Co583vUnTYqxMo5rxYEm9Fp9fOJGDG_gOOF3MyCSaPwNmauArSlgqMoM8IN80YKZ2sSwhyvrfuhSIDyTormeSFX0agllmwfliFR4tjaGXqWibc6YLV97ApkU-ofhtkKtAE5XnZyMGi5XZq0p5ihMjgqy1jVpagqqe150Ms_SVeMXzRZhByo0Xm0x-qDdZhH-7v9cppjtMZzWEN-4xhkmL4JW-5c5ZPpJEYMVoxhcdPUx7efoGtL0yp7i6IJ3NNf4F4wxCEdI-nrNHZb2a6NqQj9dJNYv9xwWoMjDc5S5PYoTjsF0JedXa3e22x-iQnxI2i_gCoPzvUnSfwKa0liqsQq7zKHjvUhCCH-SHKrqBW8K5PEwgSWyKSdD8i1LgKFjeQ7ojvvERSOKw3GWJfNgbspMsZPWWrbaYq9teGkii-wgvNRg1kjBUYbeapyTtoaPC6g6khbSzQXhFpiBTgIjag_xv8TcC0WnrJ6McnAl9l0ac2TZKqZ0TvzQJgXkW3AZRFukr2xYbqC6Z4GIhS1dxX3eQZg9_U65NzMgY2Mv4sT78tHj5VySWTfoQR45fLRPyAPBIM82M-KEFO-ePMmytwhH1ypKxoePWEETeYSHIG1MXFGny6vmXtHtkAhkOnAa2tIU47GX6sh3pKoGtZ3U1-hEAlvOlRWfjshddRFjT1OFcaUt0VaOwBzNvZyTk1GL-yIUm0Y2sTBsjwBGFbmo-BWTO_HfD7vZel1zSEbyiaG1u6aOgmuM8YIcE7Hc57xM5vIJ5TLi5EugsXZIBzhUl4wtxBIYWu44grfSfXaZDdooZnIUbqkHJaKMS5Xjzt30eqAAxXX3wPts0kGvOOhl3pPuTpdMyd4CUFNPMoVyL6A9irfTW1Z49qU_0cjIZuYIA_kJEVmtGaIcz6YG2pvE4oW7RjrAxAt87Ve_hHd6upj_UJb0PTYdsZr6NGJM13fiaUSX9eBKwacQ5NkBqWw5PZYIoD4Xf2Yy-9HZNNpHYYUbCi_gUdrjbIC7CdSFq-QAu2zGZXT-Bk6ouELNw-Qgm5hgB-VpoRSWpspS4WTnpm30sdmkstMMIKD0RT1YYWrvY6uWZkJ9dUpwiuXYbeMdhpLZ0rRb6JZdlByTEvFuttgO-VhyK3-svJbARfiS8-P3BpqKJ-FGz4eRYt-4naHduRqprP6NCPOcBD9B7cfYgJgvA_OMv1tzta9qTxSkcGLIWJMWyP1htiu-AAqcegLw58gZ6TeOIU9l3-V1vDGFPJU4c7gN1B5Xx7U_Kfv4kB9NmaD0YekNH7Amfk4Cxesz3FyiXkbCNLEl1Y2Vd1KNVxXJL3JBObZOw39NdRwhSDRw7EFxmyg_V4f6Kd0o8ur1W1k8RuhT2XM6cymW_RJORPyEOrEYg3ZjVHi_Vy9twe16ASF1QXEys3qG81X6lpj10954JC-3OhQ0J86VZjMWYSENsKkQVSRFOFuv_jaFwo3zsQpL4z08yZPFc9LeawFZ1HvHDflMCsvll1wAsMIAK0Y_diZpd-Goi87H_iT3R2FTnpQNWgd-RpWNjOV-6NaisfFqy5S1ESlI6G2lIyAtlwHpu6SFPQOiqhbOrhQIuMRVLgHg_kXlUq9JUYbzv7aXJ68xRZ0cpB_y3P_bKPcOixKIz42P79sOj3p49JkrRFHBM46QntRzbeYE698OWCd9Ag5wb-H3LoY2n2o1lM5tIaF5m6Ui5gWXe_RR_KXA7DemNrTkDNEqNETl-Gliib-LSoepjF7ZbTVStoouffSJwuFK01DcD2pI0prl-1KRL-oIl9wGKdSXnSkYpyPrUtoLyTUKj-SeUMLIIAmsWTzOBP_4D--5GAlG6fI97i7QyBs2pYV18XDi_mOfUrZg9rMBHS7nOmFll6q_DF74bekS7UUSeqQhk9VZDdpPIk2JvFNw5naBuBrnsZ1wWSwcythVpnCxvhAuXVmz6ji7TITmu-Nq2bhTLbBFj3neB7HEh9H6QYaVkhYdIBWRhho60nQE52SrGvtrOl9fqDTTTyknNsdm0SftGKZwzeoPJ474_o5nT5LtifchS8QGcHDucIJRMw7e9vSfz9OtzF3MCIonuFHBcv2VIyPz2VwiLJxLo7ejMcd_ipwY5UdY1FukCxt1BPFNL_gtYskBaks4WUr_KHjnbxnEZ4pvIBghojzSX-VzPFsu1hca7-t38AmNIZRmvhY-PcwycaOLXuIxq_mKjJR3cU8-o3dFS_uXBcLInB2ne8EmmKOJlDphViLgRmGO7DfF_rqHvBygnlTfn2KIP_9I6_5l9SyyjVpAnPd9LR8_if38j7n9FnKlB4BlRD47FraHGxUmJjNDn5PSODJJ0ib-yZrfZw5KGwfbbGq9AM0cStaw5HbSKpcu-QPspS67s8n0l_FZ67MCv2TQElbDM6UZqCvjb6fvS2Nd88atsZ5mQaQ4aTcWBXHHI_Sz-8oyWWmTFH-PpoPjfTuBoIOieRUjlJM81xEWCHzPbpr2bYW0zhMBkACz1LB1yefzsFefmKAAK7KuTojW_42Ji3ave4fOqGlnEpWvPOXWEHmj4d0wLyk7YxiifRjD2EDkPHZkNfg3vYxJvas7cWvlU3QY2k9DR2AS3dkhoi2NlCUGbFfruzYhai7Zz2RZldbPT1c57jUoOl2_2z4RZ9yIwN_yANQoZypkU6ghK9XNFHdDEDJUbGAxWerL9azGA81FtJ8j9W_UZ6TU6SsRTidFvZhGI7O5OkvE_a7oqyYI3x7bgRMh-sjOwribnbs10fmn-C4RhWeKhHTiCcU8f2N5Lm63Wm6SAZKdAjQwRQDHc25cFU0KXUdtq0jMB37bPPM68Vbqb2MFq588f_yIWvfvrlUUZ5y-uHct4rgC6erUBS41YdHv2oIGoXOB4lIYZHb7mhUA0Ger9fnxBgQaGM68t-FlJ3yrWOuB17OT03f__H5TzkLRUyyPrYKf3_ZdTvsDwHu9W_4tG9jfuE3RdRKtQ2IKaiT69okt8KKBXxt4np1flBDdY5i8sPWV1zXO_i2dGmuIRZmJvrnULgdBCMN8m4Y3CMmQ9ao2OwjVAPUqbDKBhbfSmfJhRoXqqTu_c",AlwaysLoad:false });window.attachment_data_doc='';
DbReferences.push({Id:"tbl_emp",Type:"Table",OnDemand:1,EntityId:"tbl_employee",Columns:"",Xml:"_Q9BfKlhrb8Hh--JgttYys3AfW7iIW7IiFq0QnanlqCJ8X0vbSXFY3KgUhM13i13d8lnygLIhounc5MFYoeU6WTqde-YPI4ZAJzimCII5C_8cqldqlupXNeinH6uRESIy0N0D9FtFJpQU9TLXWoewuRY6wx44kRKWDLZC0jv4_sacKTsURYAeLTw3iJcnT_F9gvx6fUylkhPUl4mL0CcMO8ZioW7Oa7mrxSfnH0s9t4AT0UgzCZphZGJJWDGN3a73Zlws52JRYH_JFY1p0VogxilR6njSOH6thYSTs5ystldyAVpctXwuS0R07zie8dh0pDK-a4OEjxwrEDB6v7XPABqbB295qBkRqLKKogXM3DofFMpNGhHDieIs_Ry6gxm0gR0EgwGKj2C5GecriAIunbF4Xi0XxCg2k2Hv01QSV9ueF5YT772BytFnINTa9VJO59fvY1io3_1QTk6fvk4Se9goKi81tU90FO_gRVas1s0SCqYcEAGVPfTHG8mO3ieZ_comK7s1NJwSCNUJ4hRM0eyBjbj3M3PIaiWQkfn-ydmJkcpVRcrHkYeZlfzp97BlZRuGQg37uQXw-u0n_C7gYWUOpioMW54sLAQCnM0iYHu4OMvvKIfpjjvLmLcNUp2CeJ3htGZUyTrFxfX3T_pJa1ohBxwnsFqPgiYlGYOUwsbbsyMWnUvRjfRArUt7lmZBW0KzJayaO0YuUD_CjAnK1RQNFKozv6_7qkhcr0nhYj6JpGZM6l27IK75Z5iAyUBu3aj_ngfM16cNXL2XLGzsSvtsJ-pQNANdFOz-f2r1WMRSUDDZrSEdbrpnvgNOlkmateKv22bvSAGjyuXoOy-JFp7b6zoQsp7-A1G3w9vUTYD_p5ZmQSd_0WoWm0ySAa-5FxcOsF665q77Hk8EUTtasiEQDtx3cY0KINmztmzdfUARGBXE3xu1Qao893G-PBf5SmZaxkIBwLgy0fiVdBmW0N5DPx7oOoj3l5QO5Mu8McLJclVSozbzzpXqGedC9YVHSK-YrgmTdWTac4EB3RJ6JG785zj1GTZdPSCUtMKHo_UidazZg_SNrXpCAzfYyj73OBc7Vb_O7ahgI21rcTNdihWbDVcMANcEBMr6igmKKQ-d35h3yBjrvvHKeVYburtQBBtur6Sh-YSyXrK3jI95fzV4t6hGXYhfg_KT5Rz97nu4XuCXZx5YNIbfKz0Z6fgeOFl_ykNckUh1wHkNvl51zYvCnKFOyXMwN_1kmPC6O2kxf-AtDxKvLADxbLoYwfdF7Q0lJc8Hjk_wiCnzv1I_8WsukNRtMxNcI_ZPYZTihw24RQj9p9kcq7PGdTSfHfl6NQrGgLRWJ4jChdrn0J5oyQxKdbXfe81l3zoc_AyhEvVlOULG8rj4AWP1JBqfT7xqbSZSlyzjWTwhn1g8cXqTv1sZXq7wgN-wLbemIRpDPC9cY1U5M0MDRMfthWIHm0mhrN6Fv2LT_mpn1fwztyhz2YomyrpMhVwdKNiHczLsGTWsHOJCp3H0RcNX9mL1N44VGffYvfT8i0MCOaw0z_GD8ZnrOdTRpWpFDOKTUEKZu6bKjznFYBpzElatzL4AcxAjMu5r-7Pe6U5BnZs_9pws8V2uF8Cg5FPnjKHYc9mksDvDjCJwA1LtrU8gAl5JyKDJb_m6eoVlTsgZ7_JwadzayNKFSo4hBymcxmxqhGMGA4tLFCLeUDitKjN9LG6QOdu5U_YfwAWIUnuOFDsAhx9EiY3ylYxv0zLHErBSfgkVF0-pXBFk9sTq0NRV9Y2d0l0rRxJM5CHVKUOBf1jYGX4WVBLPTsMSjEIqb4K4d1c0Mu9s0V5iphTqbs0zJ4oS6k3xzRR4GbIrjRsLsOzepDSoTucSRKEcyumI_zh1AO7LCr9cmEQhPmX9dgVU6hrtA_lLT0XkXl9UWGi2uEmvfCEgg1p-mzUwLwc-RQyamZlIB65v72Ffqec-bVU3iPrUBqSBA9dUNLmnkR_iVBb3ut8RPkE8XDsguIEH9q-kSiF-FtkOnQljo-G5lFksJ63Wj3ovEnnqbsiCMLo7ZmZADfsyoeQd4n18W_muxqOc0lk6hhlBOQWnEkAmh4HIiRiEj6bj7LPzDud_cc6U2auPsbabKqSZJUEvjbO9r7_g0rOPM_YGGalPdPNYHX5W-Nx_zSpHCYxtyZu3g5CVkuev1PzCMluT9W9RKlSs38rEAhAJU3tAqPIFd6YKHgYcveLMRsnVeHZehOEdccZqO1IfMCTw9gemfjtlp34Wt2Grv2E4SVGJDxGn8bTYlQvH7jRwb9vr4FhJe3SzJgGiLMcZFzMgA7CXsTTxyXSDxvrmhMKdpnXYCaHAAp6Fnm8UmlnWAzLm55gjV7wdTsyLLu0o3NjA4rgt0m9Vln2wK_5o5xm6fnAFjnRrVD2Jyh0uI3DpXqIIUJudLvS9mcBlau63zGhDpnxrCwRnqRYBsSjdqCuNdpNvZHVYFBhb5mEORNp5_RXHQYpu_Oip0ApeVZl5qoutAGwc225jgpFfpiRjlNwUqF5Y4x7yGrIxzNOC1x1ioa4UPL7k54CGAqiskbvdqbkvSXiff3LlraNCdrXtDHBWQAqwwQdtvK7mfJlDUFhPpXj9yeJ9YObuH6pCHSwL63c23hliuNwbACEdTA4JXW3hdsjx132ooxZfTYcDuP8ssGNTXHqBGR9vsWBSNSHJIvR2SkHGcGym66osR6BbhaYmUU4UnUy1ydDAnjOx7Nbu1mEEQN3_gXlEFgbaoCQrvQFQFO8lu1O4yNqnUM8WMs_OculdNVxb8c8Wqz7zi7Cy_qT3BMkEjNykNhtphCjDlxGVeKU6uMleFTONg23n8BhJrnKH-fah6_C-3rOcNp8wKNR0Umd9Sb1vRWYGRpLk1BvCgF8rNrVaExfbMMtFMZvFmi8USSpy_k3kGl5-1GpogIhDrEeet6rd_kAqdvUAB7Elgj5PvsRMW2igWjNbxulj4B6pYf1BKqDAbzeIvT1yefxbvLykM-NTadBGEA48knhhROs6X3scNMav_m2zJu4YBzjxSXIwj4cFi7r0gfrNmjECxNLcjcCq8KyLOBxzKUuswoitBkQNiB9fklI0d3QMVCP2qlZxs2j2F9GFZ7sgge_WUxYEBIhnffhqVCeC4ndbjFIYpaMHseEg9xHFz45oJd74CnkiENXEntemKAxYgwXUFtFOpUxOOZDWD8oSm9468moXU-QJS-V1HXndzvLsxvIiTQrYTv2RPWrL1ygny_856lmx3rps3JyrlwC71W9q2wLhPYNYKwLYGmGscK7sYSWDzFrkuNaVt6fRvnRRUQjnVBml_6IhmYZ40D_qoRMYc4gG5lG5-2RI-W3CbvNLICqg6esRivbN8YM13JB5NDecA1PrmkPg7euO4XqnFSFuBny6I-jRRJ5dZ3orj4bN1NDLOdZUFgfwC-V7Fy5UHlN0sX5KQRdzbD7VjHz0sqcTzSNG-56TZYOQsCecB8WSqv1dhz8SD9f2NOKk2JoHCalDlhP9R6OhcpgSu3TiHTOwcxg6lqGLg3CghhneoUhPE5jGdNTvLIObUO8CcyCtwm85arrjqEdkieBT5eyqb3IfG7iVBN1e5B3DYZGhSTlUyxpwmMfZjvBVyKh---GgYKODRnLyfZRnxb_e9-xaEiwqeh4HNp566zZkrZI15mkr2oSLwaVndu2TpOdOg-uAlgD9x1a7TPGUxzxcddUzIJS9rWvsHQMHIX9-nDX9i1xAc4aF0c2ddwD_yDfgax6tnq9OBqsEBGKX9_9s4JNdq5k8zV683g3iGLoSSYM7cKzjKQewFoOSNJpC5rgmfSqeIv-taRdTYgrBv6u5ib4isQqJ-BiHjvNKJitgPv7s-RtIN9Aau27TqnBEuEcpXG-hSmJ2vWuPTtTUcKZ9t_s9q3KYywaVw8hXH8wzO55Bnu1xvZKxcv43kSAJ0E0UlWOJyl2cTnIx5UMuHIVBU2tM2XnSYXW58sP3YeaPp95_8oJ276YzBT4YBIewrRbMOnS1GrC9tRvRNoo92D1mHReGm4RD4aXBFTT69Q25kioFv2UFEQtYOMwPkYQCpAsPOlqhKoBIwy-RIY21S_sHo9mBSn7JSRCwxaCvdyGYzK2RopP9RRgHAyK9xXKJ-lZRZpO7P5fTx8_qB4XloeSmOtHG3xng5EBPzK9FJzg3hJqCHeoduEFbbOQ-3j9oGZJLTtWEYE7dZKfqBkhLnCTdJOsEArZjgOSb6QRiNxrVg5zzj-Q_4ZaSYOkiObIUK8KhikwsfcozuVn1QLaYrPRqWbEfyeLFNXZtc2B5_Q9n6_pM6ceTC3h8422TGTNr80jU2fAPXpiQAqgwQ-ZsbwY2rlCgI-4Pe7fFNjse2bgk5b_iU0Y0QYWhYKBXqOYCKt1D2S9qokk6R7pC0_rbnwZ_GUOpCP_sndV4K_WGuAs6RxLzTdtyC_fiv2lfn5uxja6IEegxtskAOPc0BnpJ9Zb065ABDXYHJyelz_trL7a99EpEJ6_JIwmiBj918FcHW9V5mi3DCOLVAZBcZAPfpwhwRkOWl3QS7YSkJ6RmsdXHC7AkZOmydjPTn3vrZkXv9RopwOK1TWNFZS4IFE8FSApH7ym9GrsNN313WQJZbN_ufnrnuD-Yl0TYYzdTlvqfrDT8vN_EWlx1l9nN2F0Sd4lAGP_D56V6JWHeVIRkhlD6b2tgABW2l060qGLMkW1NCjXe8PwZ3ehsED4xL0_onYD23Jq511lzQyguUgydEpseoC0FQux8mGeDJp8saNExLmgX56bHp8RYGRi3c5DVo-dY76WLf9MhF3DecMvDJCYErYhbQTnwpYQpsEC6HXa12k29pg715l6drvJwoqjHUkrrA5t2tJKDjvtLnQAVn9Fv_0x79h1JSlZbn53fQw3Njc3ESdXeBFLoi0Ys9hRs754Hih7Y4bzMPJ8tOfNzTy_Aqy9WCP6qkDSPseVuJ3oUaZEROEY0AC_LsqJMM7M8cd2TnFjAEz7WNUrYpsOlqTYnDD8K7aYl9b7UQSEPWTuC-RVVVF26B0xS8AMW4z0lf97eCllfXius3GJUld8rJKDc_hkj9dYPO3b4HIPwqci6K0jxLHp8wD1cmwknaj1G7Q3XKHtCg9XJv7jpwpIrqKsTZ9LKP9kZnYOF5ZaBEsJFNaR4G7nP5QxnTdOJ-L1kyr-KMPquSMuznkDKJwNfYFjehYfJmxN37teaeMY5Umy_7SCr3m8jOxTxNVRn3RP15BO0UNW4wn6BTUzOVuGE81bRDBw1NjqgI89yUNABnT_9pJ4LgGkMajXGAMeuteAeOavjkqwn8q3C275JMUCPabXIHaE-zeI_XfSXp8DVvMrtvgdsHWbEe7dgGS4fO24AUXvCfJokk3YjCw_lk7qiBxxXOgCgK61P5699HIZ_Q2dYHFVW50BjonMohAiStSCaQzE_kLcgTmyvluKtxWxL0el7gsNQGi8UcL_6kTEiSiNFT-q-nwakE9YHlZHFR8Nduloxea-HSmiAsb4y5NTSYnKk2AqlPWC2-g2-v_b5mwphM6QnHIDIyboqxIXnUmA9RCibOKDH0VnN8Jq__dg3MmU6CkCkEH65B-acO676-E0hOfnVMRNp4PqYf5XdcVH8ocFY2KTcg_Hr4oyxJYv1Y3NHnbUF_lO88uf8VE4PWVNwKKStDjNR6nLUpt0t4LkhvelWxZx44lIkurZ0lYrJ5VsoRowB43HOSa9ySjxHX69a5k-8AF8w76EWa6XQ8pwIIWUSK5Dsqcs4Aw8zh8cKRKQkWTs9Jh5zFkj9P2FEsie2xXY67u2SS5Pd7CQmYODZANXRgDqQyHZjYsK4cgTFWWt0-bKXAA9h11Dw2bnAjy4Qrka8wFhsjsN-gDyUaayeDmaF9GdzuDpsl1myLsXxXeIypC6lALEBEpxTXe2AJWR_zw90n71MNjVDzugat4MkKt0dwfcYH9N0c6g3OaXtch7l_81itMQXYKrJnjGNqM6Irp9nN2Kz-2CHHqqFTeDNtzjrjVe1uJEWXT9Cf-LN1qdpGC97951zlLlIW9Hav_sbAe_2d0JAb2T1v5L0N47xqOxMX0scZJ2rK-1RH9zO0O541zcDPjdLzUsCiqH_3h2Jz_if3aTS1SpkynAW-CLEn_3OcBTLDqPG3pGPB3Rcvgpp8313_mdcSDb8E17FKIVHQx1MHO9-8BE6veb5ee3J5ysYNLVkzTBbVLE9-02cZMOomRMJyi76DeOVpkqF2Fr9g4iWsVc8D60BkJoSkQjuqUNI96FE_ALOAaHsJqESt02qQII51vyvAjd6quZSz7dfD30RzGWJgWIMPRN-oJ2mwjis3d8pvFC7bE20DDpmOdkgzZdhWKTXibbM-rAuxBL-aNYBQzdF8RPy13Vy_h5txPXTtjmeTR7MSL8lMFbT-6LWidKoA4rKjcNakpgcTjZAgA6xVxdpx-rJdXwKA-M7wJMDYwFKtUGBTAlpmMGd5ad08sM_GxaqHyeyUDRmKszPp45I_7-hTdVR7hTsv-h5c6R-2zlIvS2v83UkbtqJpfJ5-Pds6-HKBKJYGsX5PU4RJGR5BJFPRIZjPuC8ZEz7O0F8fS435Kn2Hvgb1zEDXFi01Mi-HoBkGoj6J-GfhhVgomWz2jqH5IhF8HcDWP04qfjolvPMXw5qArVgAfe0OPUDZ2xb_ip5uaz1CDI8gcRAT0QqAu3adAVhMlgpwtI0i3gTNCJ6YVsgvAUKVEHyRvAIrIBZPtTKhQltjY6jqgzArJm913qDjURdzNAEMc5o0yMPT67V_lAkH03xip9CXDdrXloTx-g5UvUmu8rCqGMm5cKhvFHypnMQREZweB2jClcjZrMPQ5FQu59j-6gFhooc3UmsV10uXHymtR1THDXv3atY8lwg5huYYtRKFuAtIg6WoEanEd9dIbjXSLxQPzeRyWaENLNG2-xe1PrG3DjwVfe9n9paBuhjeuRbVEUtheW7l57iOSuAF-wyzH1OThmp9JVLTYWy83ONZmHbOsC78eC7ZCQL02uXVN3oTwhiva6ik0g-32Bb-SjTsHZr21KvUluZfxwZEAGhzcx_iHzJOY2NSv-McZNVbRxTdj1kFqDXMfboYigqbLl4awV0Ct9fmk0Yy4V-YcUQvd_WqQTnbGd9RVc9WnegAzf6sERKRZJcVOVxt5Mx0iaKJrBkZCaSmtIy1kbF3XHpVp83SkbrUavlUzzsDTsj_2vpC4f5vaYVkLXzY7rZ1XPjqFix14xs7fMlxmcwbNO0JFtaWlaf4xhpv_V3jYbr5N32kCGdXlb3D4ILpl2b3bGSY16BZ5srOxFajLr4faPZK1-50_xDQTcvetKrOMbKYTxrKfBUKpMmXf2QZne5n36K9OZH2jGaYI3cCw2kcNgQFS5fnuusJCy2J9LOrJecb2JsRttwSk9iYbj18vvoosrk6217yChQLpa2cjdha5bCFZoDx5shFZfl24VSmQG8kXZcy4VOIcWjZAe0u3wEF4AVkzYYrLa_8AnV7zn9oTh7WbKwzd4iy9rL-U4WKE6zs2G6o6UC7Zn9AeV8MNKJLsibcQ_N6wtAHeMMLFjkEYeHiFXqRsxoPInXt3Rlu8242uIBl_WqphCH_Yu4nwI3r2NtanmW0TZvJgyxy_an2pDd5mQynecqkJL5l9V75VXzVUxBnCmm8rrNCIV-nsvXgIgTCevBbgHrm7_u9B6TCACqqTT6OXy24D1vw-J09v8PsFGXHXRovaAaXs6OquXZ-XGx9bqRp0pvnryAIz3t1bliciP9CUmerADAAHLZLEOcshp8LWI5ROGai_tYQC13xSx7Brm9RArW1EJNDY7le7eHBd6kTHZfAHRL7o5ey91MjScYyAUmxvS2-nc2t72OudVaOp7bsEaQnml2MWux78oeeEBK8hEl6YPejpEnwi3D8qMv0q8MqumCM-kBsIubbHjdFAIh1mk4hckmcMnUbGgvcnJrhDf74_hQ58ZSGBZ9P0HuR5YMyaJfPdtaWc4w91Uh3qRfsfKsfFcmteIp2vjvOx7BJnE8gbRGGWK3p1eIovwCUM4yOAb6NGVU-Ev5sXma-fpLQ-q9ybKaH_pwALbhd3omyEY8AOU2jQ3ObuaeBzvDHeCyKsHPh8K883xXWF8pEGv_nG_0bGCEoWq_TV_TA-Mqcc23fM4vOB3qRX0bHyD9dgJMi6zqXfWH6hH9tLt--zD5CQZKCkMYqXgTNC0NZUcAwy13KJmNdn8PHB4xVlc2NsteJHupTPFEJl-QONDs9eQSQwrPvvH6LKp5gFFs86JGqheye8p7EuJ8SjvmYmgxnH-9fBwIGsgn2Jrwj422sF5_jIq9L6Ksh0KZWfaLy19olrjAC6BwxuQioDQQ6xNehmGAfgdIl489dfb25BzEbnngeFmuN9SYXDIDybZygPl3h69dYY_NwRpS0z-U0R_tHLi4FImgrVdcErYDF_adQIHBIGhXiXB78gQ-YgPU91RJuoEC6oSe0P5tkV4lb_QgsqFE6M6DA9VkcuWJSqZrLxqZGWTV2Ca14zCNJoCV5lshvAo3ljHJHoKtH3XUmRVPvCrFdrwjL5DWIfCQLcA591KXgUCCQm6Zv2ArZnDCpXL51PrSDIjTP2cz-FDfcN3EpbjXchprr63U1bYhfUwiQL2YUlye4Ay5Q-rKX2osVt9WJw_A7J5Sz40TrkCP46vRUCbfnV4ucOXIprRaJmOsYDl-QZ7XNvBagglhSiQhunvauImD53KkDUQ6w6Au-WRxBBMH6icVK1s4jUFBjz--FGIQUvICnOqvIOBcXAQem6rJQdVEngd13NHKEJcJOYR-SEJ-6JW1VJ421x4mGNgYm7xZaR3Mn6J5nxoDp6VRIo5I77DwtID4Ul4PUoQUoqyWBPqRFRGRookOZVz5E1BESrFVOziC10WSWLC1BaxMYGgonjYuJ6UTpExCDoAQ9-l_6wEzD6vwKQhsTCXyn70jcFFk-bWO6ivXMl8G7ZexEU27oSLI4bXwdZMqB-PXHspkPxrvSQhRaPmDrzmG7Rro5InYsvGdrTAfH09jj6TRxP12Z0_lnzx_kpVCSDi4eqZZPt6VIhgNLikPZhlu0VyRTABZFzFuP8OLx9gO7GSaqLp4G1tPMYG65DHOcuPcVgeZPqGyflTaa63XLZXRE7pQQJJKV0wIXYVUE6BG5WMixkwYXH2Qd0M2gjE0dcMdzOMGVpBZgw6eX41qfZbqlybu0PV_xjU7mWTLezQR0oWI_nNpKLfadUQLyiP3bbsgnTMvV8_RXqB0AXQcbrIAxiP6CcSSqU20HzaJWzmYhtS0gI8AbTDUWircTakLqYdWW7-52VxBzfjg6zX765wJ9nMMgKxXVFwBJtMyy1VWboI7LssJCJTXEtlksiqsXXjO30c8XYlRCoiLfrAw78P2g7uU98P54wrNhotHqbvPy_7ZnaQ50JTIfBR4fgx9fIu9TepzJivuHi1B847Q9RJ1gCVBXzpP2xLERnLqhJ1OQcYo5PNoV2sG3W8hiSEuG-QDlwmjGUJ2etlmUTVI9IGBUw0JiQR-gl9SgHtAZje7jKoV1UX1LJKahUVpS3gkQenWze8F5kvmn6hq6WvjmLR3AtZjNVjUNwaPRuiKmL4gV3hWEI8RQ3NrcUZkL1PERYQ33mQNyWFGokRIX9RPRMXaaFdjneZ6U4OVBU_ygSCBE-v4UVQzUWkl5XiCJj1c6b5YRCNPdDHgQrJDeT8nWj6ePExoEBNP7HXW7Z7-pfGYvXWv5nmUh6QQpizfP2sdAoydPgIUxqskA_kbdgmjrpFLNJyRScDi5FIUalIY8OYy2kAUwZrHYesfaER0QntaIWZ_RyzU6Fe3LhQe0jD-npDNkvox3KB8iMlvo9GR2zPy9GKUyydARygDjO5aEMk0I_WbNBVxGtRFYr4_APOA1OY8qBZRRMrhFte6uLPXAG_mOW9W6S3G87mASkNgPp1W6CI_LzpDtU2TIVggA4Pn2hFxyT-iGcqwO1s4QCB36cMMnCv1_Kq0yuCvcRcbVBZX7elYFcE6DNrgaSHWj6wdEiTsT24OU7lWC-HnHo_Cq156-gNTr3cA3ykfWXmfAqU3-KYPhs-OC4jYpXQL46YuAfUZ97TU2OOgFKbVtYVTDkBLy5ZaKjNZ6TNLsMo8-_VdJ31jP77lnEDhcL3UOor4lF4m4VqoykaKFrWuaJtgtT-ZF7yx4oc0iR2wDLrhJ6ZURZlsPZDNAYYbzgzcJZnvRRRlEiITzyRYGK9MuX0L1UH6J6DR4zX7NkcPb4K_4cvzoz6EYX9pRoy80VvQFeg1AajL9PmpoVnaGf4l2LRiffXXKjPETpTNa5FkkwQIMgxQBqd7HvUq4jv2poJPxZwDHT-ecFI0ESwU7ezNMH7l0lree46MVvJ1nRk-MvUFUm0kq8YQ-1lRdofdvcOrY2C-4a3NFf8iXtPprqzHYCGzT1UCuyMJ--yghZQXCbgbow_apO7XWjq6rSSb7ZvYJ8yZVUPyu8RLSwjMio5R4Y_hzlNyiaSMV-KGVNswrJB96nuj25wJVzTqAYiOIR4n3iBL8SbcQTkN8LeaUwAkgN3OGfwwxEYLL9DwtLf7GZDHNxx4H4MtPhRcFSlbCQNFY_lIjLf4rvwGbkk3m-BAFU7P2wRmXsmJ14lhODqhN_XkukbnJuSGoSBhYNqK6Bcwnx7IUSrcfEv_tuK3YH2JyeFj7MegfC5KB6jxtKnpI8bAh2w0mF2rTsVJknP3iRI_vQcuxctNHrNdEONElFvq_jE2oEs3qw0XGVeUA0LkhEpdKHpPApJVBoSUv_9aEDo_uldzz9ug2n2SPMyllpO0h3r7Zxru8P55NZoapP9BP14P9ZKVaHSb3SbeGZ3Z8Le6G18WAS23tg8mQ3JAMrb3XmWqfcWqNtrCF_B8GYHYQOeHIxGo5M8Ek5kZh9aaW_g5SMQ6PVqWRJ5H2xI6qr4yosCKVThy9MjdP8bnOflJzBMAyQcxLiYjkfYrdX1S-O7E8Q0eqOFjSGiB0hw7wMcf8CPsOW8jBjRmlwzNKbyqqjB4zuGEogOmXrEG_sIYNdbnP0hjVj58G0uSWBdjTfi-kcmrm8BEbwZ2UOL3xVzSBc6gNhL9l2E5a1mJxBxd5jM0OPhZy_qZcFHVN1q7jy28zJE_q_C_z3spqhPGVMrhB9C_fpfhO87oCjNYd02T6b0M2R0sN3WMasxllDw8oxpTJh5g1L7zxfRIL6wTPUxATHvBXpO22LqK-jCz55Bvn84J6ZdQGMltJpQxcMejkjuPwpdsaHCOpvJUawKi_G75H-OlneNJ-6uEp3irWDd1Go8sj7ek58JLFny5PHpRCgbuy3qTEWYaWk76_EJ3lHZ_jR_qYzyU84Kphi8OIjzB8-6kXktipbup5LMUuZHlnen-D97K6GBCNbFeKTB30HT13x_IUwZelwLJK1bP6NWCwutr08J_Kr-6YPb0Bz0tHkaMr7nyR1Waz2Zau4Q19FWlfIIGK2ckwhbtxLaNI_JgqYOUZPC2bIIgHM8OeVgKlmnVG-JJXgS1NArJChRdElZyKmzI9Qq4_ZdJ2o_M8yPwr1i2k2Qohbw4995IbP2SOhKrd8UXRPS_SSEKJ1iC5-2xOb4jfHgkaqZ5wAwH4GpeM8RojxzeB-N2rCC3ER91uWi_Lj8CRAhkUh4lZaBa9fFVdC3JpkQ_mQd7wgj0da-hDQ6g4j-vCIBzvzxbM_T2ahQm20AVaZhkGIAI7UXjwNnFLy16sXDl9KngctcTnHl6qmC64_IXCS17HhFYFcgD7QzxWw8YcTZNCFosUgP-J7J0Kl2Wmy2rH2v5_rpjx4IBzbjD_flp9ZPh4FoZlHyBCRHiMZsrX-vsqS5Dbp4UZgwQZJFSeM6hw_DVQa22vjWj2mnOv17U4kKa90hOXvuekv-OKb0krSe0J1OaVkv4_IR1gqDCAAHY_F6sAcRfgstfgK9kksWKXQwpbaMYLDaRaWl_b3sdwAgrRUJ5_VWv1W_nzt__yGJ1SOPjnxSegybE7yO-GrF73wCLE9jNyWIrDfZBCgGI49SprBDqpmnYUA82vrMnCktV18e5Q_V6-4wLxPNHJmtET-c_Yz1R-b0HLfXN2nrgESaoSvsuRmfVF1B3z_kPmj0RuRMYqUhicFanBeEoT2emBYnpPniVaGHPLQ_mrd0PhFKXWdPLG7tkXOCnOKn2k4NXa4xTNMDGsXkRoGHbbSYoKOiW6_W6dhelMjYJtQ4v7yoBxjwRgDarFdnoJ3-hMP9W_B4Flu2TxBOw7kekiLUISZ68QyoKy-NboPINaRT-mzU85f4ez8QyyIe1_ScS-nMa8UZU-8889XjkUMRzwOc7qy5TeDcjlFXHljVZppOcsutjhjL8fWD98IC5YIEfnMPneo5DUnrXEeMr565zhsKMpkKc4pt_GUi_UaKxgxTgUrw7RervJ-CfYy8tudhBFIlA2ZXSw-kIYu2u4KGNl_WVg-MukrOOoY2wWUeMAFsq-PV1YYXHnmiTqU0OlNqRPgK7Ndu7rklQEf5ObqxCBotMmxSt3n2jtH-SH6ZMhdDWKzSH_o8CzpMOlnuCBFV-l2X6610IWWikn5NDIysn93hnvdlepAh75_4-nfrZAetax3V_HC6gjs9F41c7114MypqaxOr0a-ZoU9iu82-1ouddmI-XX_qP0hB9dY-NJqhqS_1XAr5bkZUz1ptWKFIzf6RjCGBPUFIBLReYYEL4y3vFMJ-IqKjis2qK4nyqhDq_GBKESA7SPo2zVWMHUqawjS8vd4o_HkD99p1Hev2_TB2U3GQkiZkF4LLhZASR8iCoomTEX21yRIEJYA41g0bZYq2AsTQVI9AC5n2nO2jqj1Ja2Ith3jbi5ezHZLqQEcF6c5Pg1xxwqiLuXP08zQ4JN0JYrUMfHTW7kAuHI0QnqhghucZBg4_S-27WuZEMSCbUvE4JLNb9igKObb5Ge9PV4hE5PymNYdC8HgaWRO8lFgBGP6AlyRG0iuh4JqEoCcWI1u_VxxcuI12SnjiHDUZnfHgfW28e86eFelAvHCsIuDz0x3aNrzUSDxuIfFtcFBxCOK5QN2bkqO1-IQXhH8ihcJX7MTSnBmsBrrDYComjikiL7KgLI2OdBPTUzn-97OKdMdZjPBWU-4siCM1DtTUvtMmpSEsq6qeSZ0pG8inD4ogX8o16ejQqStmN-vZjrxzNilt0pI5ePlmPnwTZG8lVvVzMgP4zLtGsTmTeKHkz9tH2ARsKn9YeGpLtrcfay6EolWY9geZCrM7SbFgoNx9ComM6MV-6m0WsIk1W5gYwQ8Fs0sAJtN4XzNRwBJVMOIC_wq1ZWlyzEStpQ3CZqBmNi3MZpS6fkuaIPXuxbNM-_ht5BnTDVez91dOAIUFy4BxKwFE05IuFXRLr_cOgBJXWchVIBXbj3r7HH2W3bVfjkPCLTFWjqdYtHrbjAEIge4PHNBDnl4oe-dRM3c2kH1wRS5cY4fqVeyon4wScDbBs5n3pFDMizq9e3VjjyL2bgavrSvnYM_-xRTGuo-6EynTLJE7_xqgE2lKNwimc_9g0b8hFzaFg4DphFQvBoWY3j0hII93wKeQh4zLlFolODysG41GxtK-sW71PDgX8oF3fpInQlUQ3M1mlRSPjn3-I2G_p7UHdHI3YzYSpu7IRPQyyJfE26JjZWqqq0d_NjUuxj-dyZfemyOXbYkCsO76gii8H5fYf43i3so5sWJ8ZVz1UpZUzxICkpPsoB0zvSlzf3hMrDjm2_XH4xld3l8rEKchLRIlk2n7ThzY8fU2D525InqqA7fM1j-v3hT76tySYTHjWBLdizAB80oBCxJbN2qwsd6qhJKYkNb07v0Bn_WBCjw8ywXi463GDQ0A5LzfLQRHjJoOM30eZWoH2JBCX3Sz8zL0IxAJsdcbPqWUveIHBgcABdH4ReBloViHmLz8WyU7uK_jrdkuC8T_u7UrPjtDWtbQGpNZfs_4vnjZ8AMaDBHui47FpbE0BpEOWh1zYletvU2_844Kb6co5xaiQuGW1kdjlAirtHeApLFAul2Q7IpSqLh_EtN-x212BCD8mJnpkwG7IofLBu5xCW_o5jzyH3j-pbPaTsdpMSaBLMb5unqUPd5cOmRA9xreh5Z-NDIDiSk_EATYAjbSqsouEkqf0ihELQAw1B1jCa67copNfskAOP8Cf0e6O1WaE4jdf6xJQ1K0xEUUWPTLGv26_swa7ZKfA-i5EAeqAhuLO3vBIIPbiPPrq9yx9V0RNoLglqMnP3elS8P6JreqlTxc88cwHk4aVQJejES0EWAPmNwYFTWxhPCrMM7RAsM9KhBYAs4XrOplUf_W4yglnslGIcTDFQzIhVnz2w1DJFO1RdE4QYHh8qGXmVlQk-oeS64SUXTlTj-aBGR8vUPVyZiu2vVZsBXrW0sDg_FMt2k8DnT_ae0ts_j0w-okDE3ZeecgzX-rvaBSc-7Cup-fs33P9VFCezMrnr0",AlwaysLoad:false });window.tbl_emp='';
DbReferences.push({Id:"tbl_reporting",Type:"Table",OnDemand:1,EntityId:"tbl_employeereporting",Columns:"",Xml:"_Q9BfKlhrb8Hh--JgttYys3AfW7iIW7IraLaMPHc8EJ1igP9Ncg2rMA3onKkeY3Bd77-DSDTLtXQyJEBzbNakjLU0hVc4Qph1oP9UldkNVjZI-xeeofh6kWZlhef7C73bbDVi3zL-7K96IU3ZhOK6hckJ3HVg4Js-JuPLy_ICsaZq5q-KAdZn9BoiqTUEel1y_wR7j3uxIEFooh96mAP2s3JJsZQRgRKXgPdKaZUY45yDpQja3IZBHzQvb31Tv4fNUICib7RkRVE9IZxhIgxrnks0ReNiFM3VBRTjIvW4t_owLmxFBWhqwagNGyGxtFArv8xhfnR9hNlL_sgGYg0X31G6gs50_S20TKnDVLyU0JG2-IHBX1tQnKzIR3BoUYJbrf18HFOL4K33ygPZjP5ILzR1YRMw_q1k0ulV9oKX2tvTNjUbjKPd6PE02rGqxMjSjtbhTKjyxpYb_3qrKZjjGTGoEIdH5-9k63GoFaVnPvmlM5UjIgYTP5mjywumk-apM1WN5p71sTDofrqefksz-bJFc91o7RM5h9vMjkSzknKnoqr6dSsHPZR0f65NYy8HAdWMHIRKC9G_FaPb0NK_CDeeBqMH6njpoIARu-vg25JyRzHWRYGYYke2wVSXrFFEKZK8UhX1vRkyWmq2HlIbFQwWTZQFn0kOHON7fpuRtV_DNZ5wCqigDsEjLL-iurIbFPtSwcnJrf-nUf9rlRZdOCEQofV7mHs74ofh8yCHRGdVf0-z6LxOt65XbUSa9_UcxmlJWCyRlrJfXhH2wUONPVzO_3XB3tKSUnaGMmbPzDRt4JauzjuOpaoB0ZNDv34F65XRAlawLJGIsx7AEh4TfZ4OATttgnuzJUzzF2-ZCRqXE-4mvZCRofR1W8_YH4YYR58VwE5ZD87g2WBAgBVyxfl5b1FZCMrnyqw1TU_aBapbxkKxrG4OCyS6KRkASaZ_6Hp67N1wZF8wYzliRSqFiy-rWJhgJMsuU3bnmWj2Ujej_qrjmP1q465L9iCrkfdOvoUy9XwhBO6NOB0iTKsoEfWFQTGlWrXhKk3KTIG0iuSAXDz3l0bwxxBURYa1u2F6pcnRKZ5mccyLon-yfBS96LsWIIbFYjm4Cj7CNeS6ytoYuT3HCS8CLgRNdQB4d_OPcJW2-3OQnSrGq28WTw0JIrY3PrNY-a8_l3RKQ-pqKs-qYu6Ot6Cx8VmDK_KsiahT_E3YPOBtg6C8_X9R8ZgQWeCxJv9Q0jV06lgdcsDJXXIhpA56KJzYExXpwhdMov6bDzHsjrrWRRlF_KwQIg1WkYc2qgABm9v2eaORT1VDHV6JQnwzDSylqulmrd-vZcjYY1Mvv7Su8Mexq7Hm_YB7ipfkPLiDdmGucsOFAFNwEX6TbZJmdU4jEh9BFtCnfOM6wiuDSnsMgMp82TXsKh2mduCAS26RWXgObFeflKHISxTcjvfmEkWzLrmnwijYH7kSzqU6GxXcAaX2QIETBRUOns2C_n9pwsog0X9pvy2hCLw83UUo3BjSVYiZ37b2ndiCjhhC5_f_VSyWGgFPeW6TGsM6H1Sef6oxtG4NFSh7YjOgxlNlb2HRGrSVkS7JpUaLLE3Fu6bar0LXKG-ttSu5ESuAY7y39MFtQpnZBZLUWeCZ0NkH020zuzKjussGIvuoOZwIgji43fxsMx3DzfTKOyIShopipI0j3-zltZOZFHbYaW-eiexUVzczaqHBz-34ISYYVnJhh2BESEkwMddTlQzJDokFD9YMrc2ZHhA2C5fvxO1LkXT6yoTz3zYDbfDpDYDs-noVrN6E2JEypqoAK1_HlBIEzXN5BUb5JeTZpDEYnY32zabP6XEGix1pZwicRGeLiOhkzlbepo2C4P_6KUabVTG2KeTHKxvi_KVvtEkjudGtLGF0q9Gfhor78gio2-txd3cQ1CgiiJ6nTF6yHS12WpuJ90shj-vKhlLL39hSnxyaT_OxFTbM2Ap5v9lRG1HQD2Mj-TVsOl4CS9ZBNPs4T6Z_oIgqnpQiCwaE2A5ydbb9onj1IKJECa5vnCeK0djoN8RCZFBvv155JPyWlhTXni1ZoH7",AlwaysLoad:false });window.tbl_reporting='';
DbReferences.push({Id:"tbl_CreatedBy",Type:"Table",OnDemand:0,EntityId:"tbl_VA_employeeinformation",Columns:"",Xml:"_Q9BfKlhrb8Hh--JgttYyg5i8OkT-kAKTcsDQqLdsb705VaYXYxSRITvcgzQ4Yh7UKLfmsdQYFX1qkIxHUeFB3pXH6ODX7uGCooFUFGLCTc8bOGGHzJuh5taARii0gb_wx8MS6Yczd76bYsOLj-wz90NbWhy1qHN-K50x52DRRvfZIdtHZqPlt4cPk4Yfmmn8Csco2RmjB-6lYMkUmc5T6utEx0PqlK0iNgMdADVnKB2Fujmv1KdCog44eA5sDEtcPZM9_bRcuH4hZWCb6-fLZ4dd2ZHCXEEZmeOVDBdoY3GinAuMEwfZ7Opcv_e25vayv6v5gfUsCRJcCJLH-r1RxZFUlImjvT6w5cczmuba6_vmLkX7C17DZCBNnVtema8yorZKAcI0VI28zr1VRbq0NlqhC-vXTDHqJ_g3hs21XjxEorjCTz0iHeCMwZ-UEpV37F9eGoWaSLXoEPwQiHn3gjAx68Q9F1Hv8psv_RAnQpWrLTTFGaBvwMCIg0kbaHvOrd26lwlzxCQr24dBSHqCLmWPNT9FFWsEJwLmC_szy3HA4qRIFO20DTMuknC-B2bfXTr8I1yCYmxtArHWyN3xQoSQ6ahLsaRLq8sEbukswtoz-d3uXUVtCo8asVGLnKPPHkHkNLquurHKAvE0gJlpn9s10iIKvcDPZjsiLV8Zzu8oE8BOQhvog5mzm5C5lOMzqV4Sd41K9Vs8-bdw4Rudcv6ZLfV8uE1OJxCJauhrG-APrSSuEdHO9suHpHlO8HmC6dG9N2zZmhD2VADgI8Kmi6RNVfZIYijtRcsdapgNI10sy_8QW7Xqsee7KqGRJM77DjVVe1NVntfhITy446kMDoCip0s0aoZmiag362LTL0zhtW_6S7aaqku6opBZ3NdPn_7UgMo9GAUY3MFnhYpXUq62zalTHan8Fg26RcT_EByJcT5q6_JMYfSKyQ0Own4_o7ZFQg9jUbjtEwpmXE24NcJ8fwJOOsR",AlwaysLoad:false });window.tbl_CreatedBy='';
DbReferences.push({Id:"val_state",Type:"Value",OnDemand:1,EntityId:"",Columns:"",Xml:"JMqjMza_8x3tLhmaTxmcwAAaEBXeUvCnKhO2cWNIaQySPxOAchAKrC1txaTQ9RGEzZSDx8GgovLxHoVrEF5Px6Q44rJzAtTbBRYab41rhLm9iYRloogy2Tvxv8jtC6U1KhMDLaYjQY_jRtqeRxLOKxFSDv2gsDMcAuku7YkOrAhFtcoCwLBucKRu8ehcM_-erjtFmX-XdLlkGt5RN7IZ_y-4EsJcpZe3Kd1jhmIG5qvBThmboR3-TX7COIlpxxIY8DNZiq7HP6HTySvYlmn5xjMNXu7FMOR06DIOVaWkQndD-_F8y5KEC1-Zc9wcgfjtIh-dwsxHQfcLjpUt5wNkEFCwaJYg607uQAhlaW9sPl86X4_wtB9TPiFDd4ZLWY2ap26wNTj_9QA1t8JaYjhv-GCA8Dh08CKtv7QX36IhXL4lZOLKZKwuZ5FBU986iD9b0lTsv2l2NRo_aIfPyX-S5XZpJMoS7akJygYzqWToztBfko35erCe__Mm-RfUIsP8DE-BfiENr0WxacW3QxJ8DjzeyNU6mDcxb7XKC18jgZ1e3CPsZbo2NketYTDjXaMQbQ1MXRQPQpgSVwAuM9qNDw",AlwaysLoad:false });window.val_state='';
DbReferences.push({Id:"val_country",Type:"Value",OnDemand:1,EntityId:"",Columns:"",Xml:"JMqjMza_8x3tLhmaTxmcwAAaEBXeUvCnydlW0_tocXz5crQUB7TRstIOekcIkWOCv6Z-qgUExROXBEN1Nt5Y30is6J0-hcdFMj02K90VTicQzkNFTZxFGg1t1atbv68bz-jYH45lmh7XbjNUSLnjNFh3rLjxyZbcPpv_Xa7A7AxI8hWvlJzjsl-w07eiWMxQNpuhXap9GT5jwHCs_6MDJghBxx7lqEcUVs0sTv-ZTwPfZUAUPzs1CrG2wnGcEpa-UiWN2aDzMU5qKoU8DbLVTGzcxJRxwWV1VEJvGwofD3k9zE5OLmvL0JGFyFMZCMVeCw8WqRMWUV8-SQzMGUp9Og1Q0PGn1DqDlcA0RD5D8DifHKT2YI3C520NTGtQntTPbI6Of1h3XLgAu32Pf2nEZkqMhX45CwhhUGVRH9uXVNdPbDiHHCXq3U7udHaf4f8oSasxVoiJzlN-IWfB5_WqmKZ_qXtvNObiCgny3412f6GCyTsWFV-NYaKnayIL3iOsOW977DqdwmJoiwmHYU9ASWklcTFbjzvGsj6y3naL4TmwYaGW3ftzrPfoZ19tHhWyagJcXupevzSGJME83yS-Gg",AlwaysLoad:false });window.val_country='';
DbReferences.push({Id:"val_mobileno",Type:"Value",OnDemand:0,EntityId:"",Columns:"",Xml:"JMqjMza_8x3tLhmaTxmcwLfqMZYndwWETNsarzvMJ73vcedaWaoySosw94WSB_Wj2TLFRyidWPVHimg0lN0AxBWH4Zaaob_jiRPvIczqbiHEkRUUz1lwuIL-Fpm43Ua_YnJoDcd24E8MIUiUJnrx6PIE0lqzSHorPQbzM9qI7YVzD_y9yrnKWK7ltnhpkyEk5DmqIV_WvHdm0PcInas7FBBba9KQ3CPmeeqApvBTwjT5xCbISHtnpZBZJcnFtkUJsCx79HZq46Lj9L8LhxAs0GY7_OAlYQV4FIPp3UkcEgCr0kxeXVZ968Wfy4opkW7CoR9uqSrE-mZxE47sZu5beu-jsbKGhs7SpZWrDOqmNboO3-MOSRE0pZbvpNCvGHq1iDedVi_nuPiksCR_ZFPG-yzUS6enuYP6dEYNS-lgm-d8dj6wjvvsUKhsT_yrAsSyzOniRuR8t6rNqu1X30VSnu_SLhLQOYsZqeh2easylh0V5RfvwZmx8rnLLx9Tb70K",AlwaysLoad:false });window.val_mobileno='';
DbReferences.push({Id:"val_employee",Type:"Value",OnDemand:1,EntityId:"",Columns:"",Xml:"JMqjMza_8x3tLhmaTxmcwPJNJPZLKdE1b96hLGa5o-9Y9yXJlaF2ql_aCFJcrMLDmA_sPR2uK4gn8_zRa-lqv_w0hh-Bwk5Y2KKRzEXpv4wyJVxM0QqtS30t1OATy7WPz8mxOoOWX-Uc0F1o-16H5wTqI7S2vIle4ioHIF4qLSFtzauQYAqL5TGWbfjt0wkKTi2is9popT_iO5nFh7wFevh_hX1CwKaHGGJwIA0TuBFjsuQtgo6fvpBTITK7f33Al42z_5Ao9PMxJPBk7cYf4cfyXFR89drHnTWlI1G9DKprpz-XWq_ywFEw9xup5-9w9xXbz1c5Jhf3Az22xEMcbBcts8L-hnmff2Y_3qo_EuMx3WXx5IlGVHg4l4fEw6Ys1onbe-ksjGjOrCxlN5aDlhWwyJFSmzHAkD25FcE3pWv-nf3fo4L8-nLKq-qiOCxGbjaPJQp6PGw4irT8SNEQN5l_hMNietyihP6HT4BSnfYB2Inb1_nla9ixgoWqr5yzVM0DlcCQH14-OEH4q7ih2E9o7aYQd6V7fg5Ej31h_m2_YID5yXRvTXZhUeMmwyl6",AlwaysLoad:false });window.val_employee='';
DbReferences.push({Id:"val_bank_pid",Type:"Value",OnDemand:1,EntityId:"",Columns:"",Xml:"JMqjMza_8x3tLhmaTxmcwN5KgBdHUgNKi5N5y1DinU7t-qZjz-ngxsEZi0wRoDag6QJZMYanTWQWuyvfbBFfzXZ_lP-zXyyFRhxPmjC_y8lfuSkc9UA3D5iu3newZTYFN4YawCtB6sJsr2TReK5gFz8UxCLOP4RAkEYjB-wcKEadNTF8o-rx1vmIYqHEwHfUo-vQ_ohsqmf2Uv-gWt_6g2JNQKutW6oAR7gErWcopJNjoK95N38UB4_Cfy_Aa_ytsvqRYBGpqshN0JblAi87GGkD2_6dk98SwmkVzf0xC-k3Wv2wF58fL1Cms0wjrveUz-eOZYonOJseTefSzt-E45ofZgDoHomFWLuMBb5-Tj_L2m8ksMT-powXAyjbBTNyusDXFGEU0SZrF9ugMcbrz-emGaYz_HiNWHeNUP8cwCqXdvk5PudGI3uJgyB9vH65VwKf0JVOXV8DPY1eSB04GWfoACJbRCryS2q7YI7SLIFyKzlc7VPGZlxvlZ_jE7tHpUxqRrjvkFyC_oW9pFgOTyf1Pf-ER1jumvB57vDOu9gTazlgDh4XQiOBJXp2qbFL",AlwaysLoad:false });window.val_bank_pid='';
DbReferences.push({Id:"val_bank_branch_pid",Type:"Value",OnDemand:1,EntityId:"",Columns:"",Xml:"JMqjMza_8x3tLhmaTxmcwN5KgBdHUgNK3LhRkuKGtlJu3naEyjJg3-BK3h6f0B1JrqePFTpNOGzS_FA0HhiQ1YbnsY4QAXbFPXHlvH6_JefUN4m0haDspK-hg9rSa-CwxlKlAZEDDDUVVPK0S_U5lLKwreqnckdvzqOlsp6m3-8hmr46MJWuhbPCfazCTDRtBeaqtenD9YqKrpk5nzUUoL3WuVx15R2LPLhB-grXqNpUXWF50AcImlcd5pKrKVXocMJ5h9xaDmzBBFCdiElIb2EcOt0c8K9annruikCeV3o05oVpsmvHdRTNtL4yC_hWjh26xuxuDMCWhU38u4U7V-6fyTHqzTLEl-zOxSLLnw_InnQFPvtarjy-vCssPwDp0n0HotAFrl3ex2QrGl7Y8bRJS13vjATVLoo8Aindf22qyZkU1ujU0MdORQk8IMTM7_PHiZH2YIJR21XQfwbzeoNkXVeb9on55GmH2o5gSCzdQx1UWk--XkfUMFZvEGoSH8vog9lv6K8TTdLPUbYrMzwpQNhSjbTUvlQ5SkoLmfO-cNRydkmQDctJzQsZbkca8mxOnaJCBj_3M_Orisa3uLnFivpZwmXQKhxZgzV9xiCrzn7XKn983IY7_umk_nE9yt6gm3E-p9sOxTEwburSe7i1JB_CHNWqaIONBMk5xkjvbLjoT_LRZj1jkn70kr_w8_w8pFi1LzSRGiy05HqorJcc55PHXDh7R_qV4Twbne_FPpO_OEp0fdYSHxldoYdqYUItKJpFwgyLE6iF4MknDdDuKGGxOMQbbGSD-ohlmq1zWivijHKKd5q_mvb4JkjKwnEthuqRDIkK2mURATZrVTPSnQ_2EzZXmUEe2TiMKGKP7r49NLMZyg",AlwaysLoad:false });window.val_bank_branch_pid='';
DbReferences.push({Id:"tbl_pos",Type:"Table",OnDemand:1,EntityId:"tbl_TP_positioncode",Columns:"",Xml:"_Q9BfKlhrb8Hh--JgttYyl-M3AA3lqCcBJfKAOO_wLYpCMwRv_Bp4LkJzX0-GSIkUneSeUWKpdp8fPDBZfutuA3aSALXjfWe6mgag_kPdtBhqHUpVglszN6Vwxg7LNXPOLbfTCIbFsFD5nEjf2948gxV-hOvftEXd3KJvTG05pt_vIadEj_v9DnQ0il-MualwO2_LNEwta8uu99tp2puyiFqUPFo3GdAQ6KwRXlSYPWRScRZH9akVDnP3tjrLl3f5zK8ROq2ZC6YwTgvJr-jj2pbsn-QiPIXwHyvo5R_PfvjLamYC0WLbHIYG_WzfsvKQuIxVMjYR339LL8Xbjw8ItukLql_1RfB2mI0UnfW6LNDEEOT6MT_XLkg1AzPTq1ESsiKenvi9kOANkX-ni4ypl5UzT1Ow8w6OHb4AgdDHm2ma5nDaJrUhAIfb7vh418eARDYXWP1_Sh7wyDewo_ae4vFBm2eq00cMfZVaoA3MRtAirqOJrCzTj1uc5SRbjN6oUnvI0hup8Ne6zX50Dz3abNrw0l20dBXGazUr4yiWfQbeCgyQoScSiuAcAp3NRRTJBAwExNrzXw_Tjv2fkdCA68Xepg6tox9aQNJ7urjovKvM07S9NurfHSRtutyDq8bme_hvlgFcoFuTjGLWDbkfPv9kBzlwOXFDZUiJvkoTdb0KdChxYIPo8mfs31IfB8dgAnsL64NRF98evp-kRbwljXJ-vEsPjAzEnz4a7WSxbfxHWHx6qdTlIHlEcx1-l5ittOGr9yFxmuZtmcrVlwFBGWKY991NQISfvJXT2yuH_FbwEBCvYrfB9rxlyHkSFJWwGap4ObVM0pFmil_oo4QTnVP93_3zgWbYlal3TfWVhsy6mGKXv4adncUMcMTcMQWIQWUJru5QyO1mpnZhYCX-nYtWgtXuV2-GtmWx5ssrPykglVySpHPkIjYMwNgaCM2kfAD55H0LDahKlzUitUgrH2kdouGlLbBPQeARle530SZjzD31u2scZwLV9cZlpCM19sR3TSb4l2uXzii97V-c3S1qcFZ4izF0E0CZiTMJl2Iy4_JM4w8Uv4b2ZQIN92ryxwfwxuxES1sp04vygqs2y4kCClgiN7pbdGSDMP4V5VaDdVHEBPUXrsQGDgHsZ04Nl6wnvSL9MhVko2gEWSB3hNgCSNtkdx4TDUaguuRY0HpsPfg0Xq7ZCR0q5bsRb8qdZDzxtV0dvvUyVWXNI3KNc-PNFhFtO4H8WQLXMdcHZGSSIO0n5aAXoJ0md095zBeodGCBPHAB2ItJegUcPJ65Rgf_CwSTGeFDYyEsGsHnjjVolsJxSN2lo3rkVE4y_8E2AE0ANmChOXyOJIysPQBkc8szGiw1g7wGQ692GnGY-U3q4GEoA5GuuJVnPVwHk9NivJm0XyBGuKgTmTvScR4lRHiRKiG7xaiq8SFdbc2CysQMhtIF7tstblS7F7yfqTo4M3gsXjs96Fy_FzHzQIjJYlgnI-AhbSZ6hcDh4wS0r4ShjlF_tuF6WbkPcto_H0EuFNGADxO_4d2OjRBZTwmBZ_qSgluThulFkhRQyUcz7io9WLUAsjOaV6e0O1KktZKtQWnPWxNY2nE594pUjjQkm8Y8Uw4F35sV8Tt8UtAikoPVqybz97PQtwTMpzEwYrKfcDQgWgfyRFzlLOmU2Xd-f2Lb6KwlBW0yxlldeiHtmB9ap9XgcoRsOEd7iTZbEDkUbPA6lfCck7r2QLyYx9DdSUpEVhVyhQ4n2NuREimTGw6jhXjidUmZM4S9QJ236-FtzSZgamS0KShzXEzMrAlP0KK4im88pV3LKAL0qTqMYkC9Ihu8Pfu0prku2kwG5t5-GJxAhaomUnFeTlCOoce57h3Zq_nHcqQvmBNTuEV9EUNVcv5S03voUaxbibxkWdnN4KyiaQSqtiTOM9xZmvgKfD25CELspAD422MIdc2ZRH_QEiS2-BNyLkkfTC5x8BiI_C6QHz0TWVyuEK8mS5dA4X13fSwjoT3sIbyk01qt0YYZIzFpgJeWfVsnjk4D3nOPHdZ4ghoz3LVEsgR-Urj_5FbIluB5WDVYau4NF5UicQkYxSY7OZFTsrQ_6fMksBEOka-fYRx1nzEXAYiK_mYRs50lpyeFV7cStQuEYsMlSQv_BK5Unp2FOjG30XAcA_UWrb-VYCEz0xJzCKfZ8Rn7hgD4rnNQltPmgcLbEKzlFsQkAFZTt-UlxqE5lrC-WTExDMWmpgFN4eRZBp_fCr8k0YrmV47Rhs5FHxKHZrvZD1vjfWo0UlT9mPKLN7Qs1_5M1u6_rq1e9Um7PgG-7Cw14FS7q7OHd1UoqUm_mYa0VjEkuEDvT0OqnmPHHKKV2c6V1lu9pFVT1mRH4pn68gPJ8F0fFcNMAVJxvw1ysk-I2dYBlAf9VP9uPFXXL-LjiAZ90EudJExK6RWx1HOnAaZaFltf9o1E4vZOksEAVnAir-eX6vdQAqMksh1yi8eFgiu6lAE7wEIS05k3ePYELR94m2gB9LNpqTCmWO2AqzRI8tiqrAh5Lu3JFcheyT5Mfs0St-VhVfDcJh6Nkr73o3iCVwJpzTh7Oa_hcZWLwm5--pT55C688aYeaJkUK6xv0DHkqvcFv-8Rm4InWNkxGxKbSGoH2ozGnPY49cprEmBD7NzsZCzpGkc7BE4miSljDbVtv08B7xmPCLiCWJQOV7dYhwfr7Rp2VYVvPYxAjXsEKHAbyZMy57sLUO2TG8r2MIEbIfWfwXKbgShVGLF6FK3oFS-jyrkyr59ePVhVD5Cu_xJsL5uMFx_ysedQ_FRiECMhmMbrSTk7Tw47QuZTiU8-BX08z3C-hVw9mQoYuTtDRT2fSMLku_GWblxZu68cK5zYqbiYQE159H8xQwJ8-xdZC2JobgpYEebZFAaUTnp861FuPYufq8RoYdLV0EsZXCjNgHK8Rm67U2-4acoZF3oPUGwg5YMW3LheWgL3t_Dfoah6D9Oc98htpCjzsF6_T3IiqAxSbF2kEU1CV1bUreKoHPXEVnB-VKCH7vquKj9GyRvtIWT27TWQK6TKdBMQR88FZaKgT4Qeq5gUTGO5HQwNIqglscyJDBzrIIp5HcMj0QlMTRzOLuoFlx-nEQLYiBbWP5GJPHiT39LpKk4JWzOgqZaq0OE6OAT_9H51SowX-VF7ikB4FQuTI8rBqP2Q_y-ujYMF9jBNnGsf9OLD6wKKdZkU3k3_HkPi0ukN3khKRSr7BCnfwpPlIRCcdLTeWm_xDRIyK74xZy47GRxf9RTxB86jseevcDiENcHhgOeJGwj0hzvRcFombLL94PVepD3viKqOZ-MYu0UEvLaXI54qkU7MCwalC7neVrEPsXesuaZ7m3MdKvGbPFKvYSdMCRynq0d79XBas9OXisvHGRFBOhzw0FCtJ96fmhAINDrJ8L33hLZsfEag9BRn6ex4q3EJBhwWnQri0SAUCTSGnnhfOnqBwskPPpiU9Hif1Leq658qkJwNqAvGgOocjqOW6vgQ39yOw76fuyQmM1QDLAwc5upCHUCfdQM7Ko-jLpGR8P0kgkrf7vGxYMH_u2JGfhOrREAfdf2D-rfqvCZ5hcL_siNj5hw4LX_LqgZ6BFbJWgvnLzW1-hHI2B3Gt_CIeVzpt2fFomshihxGxzu87szJME6UrkiOzIbigR4n0jVLozqK4pGhe3uZ81ez9utZXxTd_BQ7Ac58dl_WW_IkF-Qv09yUi2UnqY8GOxxNi6_yf1zci-j9Bg7vz612aRLfj_BEnnE2CrwKc7w_FHq7zcXXsDaEYLVI-_vU8NQFQeEHimtba1YEfFPhmrPZd3r1pgpYp0nszQlZNGQsrVmUQLic_5OZDhxEB1OsMePrBKDY49VG791-UqoU34GgLEEeionVm50naGRWjZiiZB9e7ZnbBS8KRuc9a7w1MjAvqXgbBj2TnHsbqSsff07IH3LUpV61d8RdI8PN0hfZhq-DRqw6fyAky5JzY0Hy4RVekGSIc-KlWAQKVagki6K09H7ixB2I9i-QChnWi5R-kFkul-gPawrjDvafUTYuNM9_aY7e_KbQm9RdMK44sl22OLG0964eYTJpMNCC-2tL_P4G_MsM7lXxm71TO1nEw49UeQVs0voOro4j1WSxkDO8KiERGpPows4a2ruakCrTrV5SWbfgc7RvD19bvH8d-OVFizELSUKZPYJFDu19gjTCTEynRzJZnqsaWgyYuMStcoAl0ELDsZK3EtGVjpY6d1hi0hkR4r_HkEA6DAWC2AqBJogbf8rYIffPKvCfckPf4lbD4Ywc2fL5-3E5L3z5_8o9OZ7QMUfCQ2PfZnal-rQVu0Bw2U_bkqzLkkO3H6PWXHS4zMqhFwYHPxVBWYiwubBQ8R3Rl6_L60NJdBp4Xyd-lHFZtsHKL7p8U51S7SaddzlVYwf9PunMdnwicLHO6_0WsFmSxMbEfXbpQ68DuGB-iqTIiWO-YQ73TlSCeqJBkyrxOjB1648Q-WdWF58XCIUEDNVdFVSxlcvqsi0Xz_6bUA--fKQN5P-8dF24PHlklfOkEvhXlkEOu3qKdmnvH-rIvh7Xls-RIGDYrBDfKHPscTO2MMJsUgjw2mTSh2iifJTcdooHK5Ib8kZkCDr9vT13Y-mge9gxxGHrA-n_ZZ0ELl1bBy9Rq-TTSRkzmoWCD2Qe3N-usBPLgmwXqXcqBnHBXWA0tJmc15QNK-wxhRnxceA6Cn7hPxnHkjgSMdFT_nIrW4Fqz75DyW_SlIfxqVjZbkLNceTsKJFBxtJkKLas-bRsbTTkadrl3AYUTOLKjT_2QE0FQvcfJls46sZ4qsTpx8TgpDvFaK3hHpv87SPIM8zKw2LjY7pa3gdN1DEKVEgYvaX3BLAcfJn9JECXZ8yn3qn0bqh8rc5jwRAJ638t1rs6ImMvnAuKHdjsZw_HkqrVI1US0wvG-7dPumioCIXRZhhl1Wdte22eWMkmKFkSEUWZgbzD_tkzUxzoZJM2-6xcHBtwomc0XimBxKVcMAReB-N5v-tKZ_51FWXXQgEq7aLf9yQNRvv1qKspptRk8csVqMg04KaL-ntGENy0TRlfoVgudR15wcrXTYtrdtdOYBAVji3bC0Me4xH-dTuvgYudbuZvX4Cz7sJNMFRWO8aW6HRlkK-hD2cm__off_pRXx_WuqqYQSZmH_Jx9DEWhPVltzkr-2lkPGjBFMln0zmyMwrBstd4xatJuGgQdIiGQJiFlDDwh2c7Bi2Qp-DU--N-n8dGzl6AM7nY67Gf6H6s-hp7RdLAxgo4M62AaxTavzzUh5JhVibRvq0K0INI10yPWYop9sLQjFEW32mkGzUqZiupcSqN18bF_sS0tzdXqockvC93y0DX6P-izwjzxjokodxxKdRwJqu2UN65u2DNMF4eLNOKh9rJav-_ZMO-tZA1yWDyWBeZanHcwwAgduLh1TmZz5TCN38r5HD4IeA1_MIVyfA8Xy-6l7tRIe1-2S3uUXzr4pB7pokP1NgECfyfPox901366GzN2bm1wIndC_VRLVHl8BrpLoHzbZjg5OuCi_JOwxoK2T2tHD3A1SQpgG90YcOQYDRmV3EjqpyfOTzQ03Mb_gv8axlA3E26g2kpIRLzUZxJlMEE7KLhts3SxhPj17fmS2kFl0vj5k3iGlXVO9IaqMRWX5SAXqGnkjP6RzGqBkdU1jmUa-lMlCg6HaYgfAugfSCvdn4ILztcySAudgawz0ljqIPWtzkwAhvRPkbccAbEeslBVoT7VzMTOKSY-Le1bpEAhWVjp-FcQmpuApQ3c-TmFwP4rvsBrMs4FA6MBwZ3HffWHdk99QYriimg6ee41ZU8q5WM7IN00NF4odvJ6KpOvTAfIWVeW9IfMrBLb3qXEZuyRgdcsMRSzWzvJ3hJca47LqDXloTDNVSdfEARji0ndjcubMfFh_8itHuL-NUIL5pKItrYXInfTs93f3a71s8QkAv-M5DumnM83ZzXTdI5847ARLETGlF45sAHf5WukO6C2uSbYVU4jc92QSqYTRVYcj8Uk-1CIet7Q9LfXhNTvzz-uyVoFpQKGultPTjea-WTdCa41ysqV79G7wJ8pi_W7JfzHWe0lLs4rN7j5gSYk1W5jIt-OTt_5d8jTP5XccE3970k543oDjj3MpdqdfLm-RF0VcO3R4-txaiaduyHq5ajVlCWdx0ir0flZfnTFi4eJQRmogEXpBO-rN57aH4Bx1bEsj-mZXez7cGDNEpXIBgu4heQ3ySId013gpphgqGcgx8TQXp4byztBAuiBgcugWtxlUiO9DNMiUqhAuU7Ln2SHA2zmIWwMN-u5geEfRjRKfqc-H3EX3aozgfAuwA2GyVRFHV8EIosN5zPdYwGLPaqfT7wwuQHIafZUBx6TxyJ6Igcl7n4Rtza1GxkR9hnQC7W3BxW2jOdiOTg67_5ZKLuCHirbmqMFEM3reRqJ9rLb08OQCM7swSrZLMy_jlTE89WlbpIRoUZWT0_EY9WjrpSttcon4zO9Izy18YAyC8E_s_uRSRhHMZRoZINiyzv1E2MjilcyUFJ5UxZ1U1j8eJMKz4w4lr4ctqcgho5HmiNVNLMJ6QxNTr7sxRZOR7xEr8M2mOmitXAvfZddFpV15fS0nL4omQ9syfGn3tO7vVU4NYnA574FA3rg7WteUNTJS1GbASQs2BP6fY7OW8oy4dmjZem8kq9qAmHC3f6_biaslKOmVM7k7AJmGPESUv_0LQCMbImHSFkgBJq3q7ovrJRloW1k2vwFL-3_68snkrghm-3p6G_t4_RK-yPOmROoqGBKKNPj6_StQqWpP8eyAJfssTprG5ewuum4lYvSxd6CEJv_JC6pMo0_1PssaPhPTEiyuebG8GinV0GFoUnhnkvNRbmheFyj-9eCTm5atR_M3DodK78KZ9xwS7mRDT0AGAVk9s1-fYBQzg2eYxqq4SNsY28lMG3bmUCzsZu51kEKNdBBfDRzuPFHOG9SuGihaCOQ3UGpOMOeXJIe6AuJ1WoJRvxSbupjpE2MPnwRiP4fjVWZCi-oKre_GCXlBubUyeAr6MkR5yp8fStF_mXGxxN9lfoHOBnPkUHPvKqRBBuJd5bAIbVlDZgMJStFSsRmMHl4nIV362IqMfG7xNaurvSJW-s--vq4PcArc8HLk9xHAGE9Bt1ZFxbk9rezwZ75X42K2tDcRuZcnK906Ff2AjFbutL8OUtsSeM7VeV0mRlQdvwgWtJsy8seb2t5cMZZIF5HDMjoBCvmPkMvAGHci_QZ4TCvh02YJtVs4M4zMnJ_K6DQhTi-CpUp1oeJzY8c73Df6MMqIabA9IpIY1gWC_Tw1MMFUin3o_Ne9eY5VCgAXhbWZfQkp6f4tLAAFySuBXOkqTiWbhNE3ohkIMG-XKjGSuYyfU7uRbQJaxV8zj4Y3b7r8ROV5CkS7wnKZFeuVHQQQCn09STxf5GKJC4NspT1mVKJWo_uKZw5z7mgECkV42HILwtMwGPxIRqBM4MyMuCxI5_t79GyjWHiMEM3m3-kUX6j_foJj5iMRlk7lGXDvMlRK6vvXG-2kAyOBHIiq_gEoeopI_lKqnwe0DYpAlWedXnZkgF_NXK7_ht-Mb4VVJnumsCxkorwaWUNQNkjolDxZNBcTMVKAKhpqERkHgClBH4DONVSBSH1ZlSujXGaEC9oqWvFdAAbgu-LpzQr2lwbGjETkyMdpmDkidn9hm-NY_G14q-syOATaZQsqGBnB19Q0le5o0NUbZ51sdpNiwcPVZ4WZM6ow7N_eMOgxYQQ154u4y3j3HrePWUf5ZUQMXnDMXZMQmRTsx_lMt5Y1nAiZaYyQF6DK11p0i4xYgnvvKQBnvbXvUnCSa5tE5QQoUSTS43uXZDUN9Vm6rjCBPUtDF8sWZ-aU9WNGeWQR1bitQ7yvt7hrAWjE6lUPfn03Rbf-5n5sWsqnHY5OaWeA0CLHW7vIAd4MxAzmtPVZ3izzkmAmNKbsMt6p94IPeRWYxIWXCX6mCVbJbwB73BKKCYlx_71AZoCe5FUAWRojH6UgyXl_YTaeyIzq-B7Ea0KYbdCX51wTaxf3dzkDlJz_rLYi-O38kYhtkpyz_BFN7WWLl6zbi6xJE7BiBIrm6orYr2PbSCsYFMu-JttdD1fP2CIHKYpYf7Mn1vDCXMhp7LxN_fU4LVZZNgMAkYG4Fe1shFcsgrQQmaOdgCJ_Kdj0YXry44BoOK58DIMpeSBU0H1OwD9Optv3TcZ8jpNeWeoAPfrRKRDOKLt3QQbTn3jW73pxwaIBRks2usb8txzs2FlIT2PyIrrc7_wZQHpx9_0TNWeDfM6wUSU1RRmvWPliEuZXYEeqFvYZVwPt-0kerd0n-RFXbNaqflOGAhdNjZYmpbNxGJjLjiFmdyeMVif7iY-c-Zwe_PMNrN_6w0rfkBvxpLPrsTmBLV04LFN7QpEnmXKL789SNDR3PBcgVvka8CWajPZnXSuNGWS-b7qhzqtZ8i-ntpu40gYq2RGLHddTijGU18nucdZrznvpeX_zVq5IOhSZN-kUMceVEc-Dr2pRka6lSB5jANrwgIlcJV2A0u97dz6-DKfKaoUzqI0heZ_004-_FkVf6iDR07baRz3MLeXqkisv267tWwxJuNy9qNKLcwyLEvSDoH532QLbMVSLrgnqCG2cZkSTXZz5nOmtuOFVbUQjS8fHNmv_cklIUSuUM9K2f7wf8SgkCGTe4-mVq4FY_ahLj0wmUxvNOooLDpWTjjWQqFqMKfK71J1n1XBlLZHDr6QeoRSGAmKpuxY-7WVFflgIrH6CbeY2KmIKbTLdq6WIv7PRhzaw_4z-eVcsTstB3P9MdR5ne5bJ-YJnrSKSABxbBDvfWUg2AW9_3IEr0klmzIl-tPlCMrKjyyX1kG2qqT1t3cG6Sg49sgGmwgxfiaNqT_oYOXCQOmnkaKfqKfkxQDqSIcQsnHMJa6TESs5aFqDAajW1Zbc7i5Z3XprwDZ98NsInn9_fxyHXxjhenhtdi9YpIWl84R0_a4WKeko_-Vwnvl9e7M7gLEOeY8cpHGWaCcOnWU6511y0o7qMQp0Cg7m387jc9WH7mneO2cbOckq-9hiz9CqsMBD11HyzJ-fHp95n4UDjgnNeVIwESJ6jf1p4Y-s5MQZSJU7Vw6xfF4lDDypnZSncau0S2ixcVsD9xw1zeJv83jf_6k37zoXsXtzCAiyZHoq6dwRWbPZEwVD0nmOOppQm67bGWXu3pPEbW36mq0VE7Mp3_8IvnJ9VDXTCZX0xjRUQcCZlqYClf_2tcfGmkQDush8UUsivz1_ScKg3zvTM10cCpRLnRmP6luqMW3QzZsgpPP9iOCWcp4s6_K4PtLPgB7ltozaDh_XgJYUBuIeVv5EBYBWjqR8cVPdTEkv9UTv-PMBZknRKBDo3sVPqhotvB2h0J1CiAg6YWLKToiLfmYB7Q6bVQksS4H-br93581qmgXPvVNTYFb24Lr-N9c7pWzaOCBuNJaaTqhVL3Zhfk4ohqxFYGTqFI91xIaE4GHjvq3qEiYjOffrfLnJFRGWMrQVz6xw2x02qMCtLLqK_hscsVc3VhPyZjUX65SgZXnZhU4KlbDXJC_hN2Gycrsnh022uLyI70eyZhpR4MDa6wRG03hjIuqRP9zMYb9kdMGJwurLYsXtQb-i27HFH5ctFdnq_-wTQ_8DDlPK4zk4dBJL64Gd9zql-_7Bz8og_Jz7cvR4S05FuzeSIa00URSGAAHK4EACKQM7KUsP5NWu9HSPOYKDbi3MI4Q6dZzY2kXOLHXUcpTJpUgs2mIuoTEN7zYEnxl6rj3TlqJadFjyCSnELMtnsw2fLPWec-YjYuDUa82dWFIi_-08ftxLqqDIPqg_5dHkH65ssdeI3OUhf8hEjA-rGRkTESZzos2G-LQbu81JAEbueu3hVPb6nLlnpCnX6RUAHrlROHW1E4w60xWdVvVEbPSKb5GBoGiAid_jFNfc37IRhafq3LNF4PiTFFvrukgEpPY4calbT1Xb-SxI9tLCBX6EwP_7jz8Dwkt_jlkuwrY6OWbbAY14OJCk2GFXINlCY6AYWfCD3hF-GhH42tITNrugEzuHIdKGmrfEqbZ9D89NuFu3RTtPwRBk-Wr8M5fumCHrO-ucSV4-eYgAiOoBaY-KHjN_Byq9_5LLPPV3bYNrGZRNKtmUvXuBN26cRJ5U2fQAvOoo3d4zMH1tI3miM7xbzyxi2u8d5UJcnHfHFKwVqpN5RJChnMHOuDxbiHg4AJr0ljylBDRB7s5umzzzsD4TElOYNR1oC5Z59ez2LSZjIC6h4pKjCycN7L1DNrGzxQDMMXb-qZpavTO8X8wUu-DTb0OdNF1Ltu7ulV5LUkvPao01FNAB8yz530Yx_VES09sJ4iFghaJz1MRSlvPPDti7s_Ucr6MMY8Tl30lgPPe7acKulDzg9Yvc9Zz77aeOaV9j7KMhVxMg4FBWzXKuE9Fhr7C8IirVN8vcqhj3FH-lfofCMH8mosMDErDe0R3cDxby9aQoDM1B4o80S6BijigN5OXa0ju6NCM4LVsjaCTwurvnummNWJYs7p3g8YE5D4GPvMHx5Bk8babBursiD7--DZAl5kJZ7kH48XRzEmRopmZl9Hdom3Vy3bxjJZQfcIniEpo8XUDoxbWiotD-UO16baixWzDoJc4LF0EdftM1aWV8WibE2XfWgOVsqhIdAT8IHJkwcnc3Uc02eytUexIihn2IyudNFJS0ywQ6ysKCUe-TBv3f5tnrnc4JZX7Yw-QEVHFjQVGbBaB8JxDN9Sy7H8Yy5h9e2FlSBrGKBGwleWVD3KLul38Ewq01hYv0xapvbs9ddjlOpggSdUY-NuOOMOZDRSLJ6qoU7mVHFxP4mzziARDqKY9uPswsfhP5Ee-C6spqmExyyiytsQjEtwAjmvgAnxI9yojGk0iMmjgCK7ZVZkhvJ0rbmTFaCxdbp54YFLpWoaKrZ109gq-AgP9lOLlsFA-bhnDQ2CrrjoZFTxP0VHXtQLDCvAydJrIn38CujnsD5Ozo83sg_7po5fFepQqgCe6MBgG2PerN4xCHaxT3DGfa96lji9bItst_ZR4UBCnBFsVpCM2WQc9_8mcjMNHh0B-_tRng9lTof6PKVwsRrmRARJW5ZJD7TTwxEKMORXlk1gvlYqgVdKZvxzeKVWVTPRfVu6Io_BEpQoK7p3v3W2bpOvhVa034syggJ2tRKjaSNWMjNK4mGRNO0Z0c8ozFvDpFG7CqCgYX6LkBvD69c7NN0d5N3s_pfQFAuMYE8BevQORB1dSDBPyXLmIucAbVwZWvIM1UDJLf-Z4aRvI39UdZns8K_wpkC-3P_pPzq1_pIKQomeOlh_PLjV_dG36vaiZMnvRrOYVqdJ2fIYso1tPBOvhN939PbP4E9gPu6N-XJSeUC73JljGQdesS1Y29a9ev_MaomQjs6gpFQ10Ko3peCLvjGtOXr7OZioVcXRoSlx8W2vFoA1OSgdcLKizC-niaTVpM8Y0aZdMoNkdULF-cm_HkZ0VQ07RqOutX9dZ4m2E3Y8yK7c7HNXlmeOiRst-9dmUxsrK1cywKF3V6py0YPV8DzUgCyGAhN6mFbdDIH2VSLxxUw7slUsIQ30yE65Z6D9ipCNm5yDamQKbe0d_ASAZgP4eMlDAp0-zi9phNEEU_hkmAKjKQMaQB6j3ZsKshGV_7AotniGvWkr04bATbX-E-io2OuLWqOE10CzhY--3EZ998UltMQACxhjB7VwAOwD-gK-K0ngDfqjGOr3y-TXKbaGMvDW2DcNQ9xbwbF9NQS_70UjE5kyAoP8szHxmwcuyNawaut9V9NxPGgqsCW-b4Cjtxs28iL7WlNKDt69VZQjcmb2LRxgDTI07K2fcdvPOIqoeFhbCctrzTLeHKZua0TEm4VfobXQqUd20k3O5oioOw-UPxRQIimFEhy51V200JL-AnyIkN3x2bXDl8sw41YZvlsI71FXGCzCTqvz5lAymKrO6BAaX3TIsyHtyj5Yv6AVI9IpApBxdtn6UlMMmnrMRJXAR6Z96AUpunfZ0_AqwrEiHIVxkNLH078JW9HLknQJmtuN7sLRxilkzE9a39Cq1QQepsXHJ0X7hGNHDbPKcyR1h7eqoNx0pwHrUlqCZOofsRU0tIg-dzOfdxjRd2Mwf9RAm2Hh6YmHF3NHoA6lZ2nFkOlmowsBqo2mMAI-BxVvOmM1_xvq6ArnhuoAkrl7M_BjM4mk93wdIhVTEQMjM7N9HbyWYq-h7gmcBQcWYhGwXtYDWOuE5sL4SIdAk6wEJTGaMLq9DwELcKHxQuxcgHm5lc7Xmv1pfkgSHUJVOrr4wTmAGwYiUGKKZqZKqntw4f8gyzbMF6U8yjbABy2jebWo7Qw2W4QaEuQSjLwzC5ODvW9xxFILPL90eXlAthrYNo967jkOLYGAz1hoF1irV0C6UPfYLNLzFYKNQMh7LEPGbFO9NWkq_pMZzvGI5znTKC8BPqRfEI1dYtev_NQSWzVbA8zm4C50JI6KNrb3RQwQOJUuC-r91lPIhmuAS9pN15AmZIiq-4m8A-v0YEawFOa_ncDdal3IC3BuBlw8IISAFZbF3NcKswV6I0MnPWztAftvsGHkGfQ5UoSNJ4OLq6vDP_ZHBMNzZqmU4-Ecyp28UlMQFV39_vUnyxR4hu3Mh-vKWIu3nRjdd6W1Q7u-3lAo-2AAksDLlImljxH_6UJVxCKXEiErxGxgxa6WZZvhbExpcaqXcvjg__fW33gMFAoo7M9cyrCMTvY_QbZZXahUzzKDvJuGVFewrod4WjLDsoiIf411VGl6_CmrH0V4aeEvt9g9j2NYv0Bt3BLPQJts5WQfXOMWEbHgr02PjQORri3CG1NY46WtuCRFwu1kamS75h2KEn5L51qH4bWvBlmfqPytMdikpEQ98z1PemWh1y29T_6MYu1CHxDpWFMRbnTtAUpltDHSH2ubHkOTvAQTLNTmILkjic_sEccp27hHzJHw0OWhkYLuNS8kgrAwMj_lIIbOj6G254xKnfXMHBLM0EvfuEe5oV74ZYfdSa4TEbkq6XKGjnEbVvmc0agyOImPMz2gDq8DMtDgpZoaVXgS_O-kVBIzcZt5nLMRo3ELzHrQNZwsVI_WhlIAxsMhrrOlnI6OpfuRKng_iyzdkkpWdB8lJMKeqOavLudH6C9awImUUN6GsFyZC3Pp3LoqgQSeTXLMNZsuEl7kzzNBpqB9DSpqMyiFFVjTZQXZ4COifdh3lRxFQr4qBoPOFckp7HF51d52hlBDJEcviaSF2MJZcHeK_mMIcv2yo3djw4Jl-jh4kSa62R02dPeL3gCkrDDwZuyEvlFzTbKLR5jnavjVz0xXwGecmgKlawL1W8vLDybcHP_UhsDmK56yksy_t2cBZRyTljoQsHxEzTFaGC7s9W5zvWYyStUIyhYqW88faEs4xV5ezXtPbBRbiOrNRrUc3JHaX8M8Csa2P8nQDz-coXXUfZbRLG0Lx_VUtZlKvPUPENVTvqFeiLXaRJeDai-LsC5P5RqYVsuoSqtvTeBepYc8wSfVKxZv6ieydSYEv-PfBoRGJcwRjMN4tLRVkq8kRrDLx6T-xih43AAjd-tEYWGoW4o2RL-6ZCpWsrgkft2hKUaA8IELPaYOAP0XI9-PxcYHwUQzBu9oyDVmczBMpGgVzooqeKLAYOliKsfLvU2W8mYrRcLu38T7zpLgsddibwnNAnQLBSAU3rEMZI69D5foCJpt9Bp4Aq-vBoG1VQ26lGxM32mk_-EcAUj6FezjDInzDWNVUvYBc_PXgyIccgcXjaN13kE1X1XRVGysiyveoXU-oHBdGsN8Utz0OwP5Qaa2hiZINnyam3nrMRhL5yqIlOTlxd61fNzbcf3B9-ES2Zt61VQoqvF79FLg4M-hjvOZi0xexoJuuNeMWd2EwmOwY1i6ZqgZSqHB3_ZoegerMu4VDmvA8FZWTLGRrFg5sDFjgT2csFgJ1riDlBZTNP-WW36kUg-W1bmaevAkqDckQZj9EKRRajwWrVVx6VAnYxyoVup5nvzhChGurLCSOP8DG7GSJev8cB8GAn7-Mahg_jq1jdqdvvy5jech8sRGUc38-vtk3okpbfZ9vu7-Tjai7IW5uuRg3r0niEIACx36aU36fXzFq3h35DgdtdSQuBgOPhJl2Wtet_onc20xMtlL-YLxAsy2_ezKFRKMRz9VE5B_-CZXGk4Ze_pnLxxo5GLHjNMSQMAup9aE3dT8N9QcWDAbchEQNgLh7ztTARL0199_p41_fdaiNlQteT42IeQTgZQnhI0eYaNk0qEx5TEYW7h9ixvtpCOb83GD-CZyF2XHhrSnEdXjDENcL4mx8xPD2yR1hi7cI3CzsaoqYg0248tLv7wPBNYMgq1UvwlM6Wk4b4P-84md2b89bTHdkRfL75HR3TZcS-o1ordQGprOwmoTErjT2UgqjZMlyuakYDI1FvijfRrXQT7Nzhdfmbc7DAzqHsRrRl_8JXmpQKIFg1rmTMK5IHE88D9Tu7F3zG9-TRNkjVMqC2SuIP0lbEK_rpVGMAaY48C4UL55X_9fUJvX86nqs_wsZ-TiIqYzxZwLFClBpzqOvLvSPzXNCd_-vxudkZPN-aKDfAPF5IGEVRjMwIgSa1wZNHJs9MPNZAfNTWeYHCWL_d1S5YjaCG74FTX6VWjfGkEP7JKOaR07GOJo44nH_ElOm27xmauWpAzT4sXB7R1_aetyYsh48OS44uvHiDD9Uoqy9XFU-al7yVpO-OhhNjkSjuaL4ipPc7zxWEW054hk24_9uTAT9VzEZmUcDo9XEFMJ5d1RiXEKAtwoVe1pazSo5M0uj1wpo727YfOw977zVEIk3hS9oceVsrACm_bCN9vpmxRVah27F8jJCGWFuFoaSkzcFUZ9CUvGu-7gUxJdrNrHQxumG4Gb1S2ffT9eTig-R_gvF4OS7wkPyyzvMVE0k9FPz4pOla0BNqhp2DBAgxlYntmC-6zMvDZTc_Pww2yMQ7MYHPIQyW2mDGA_1cbRPFTVttSmJgk001f3Fz3fpTSkLY-ly5k6wX6nzL8aXn3HGNoowG6fKYm9BT6ebo0hU0jcdcbVde0ic9u-bqKPmG_BzU2g0frscDyxTA_7jjKajoTFY1pcfxeBERpSdoOj4MAXPDddLpLy7Q2vRv6akinPDL0P5uLQogKNvF8dKTO-iehLoIq9_m1MT6m4fFql9REZUNq8Wj81f3mQYU0NTgsx0et-4Qyx_SjAbl9k311MO-Qxakb3ubfiefcDd65mRL3tSuWqT1o1Nx3C3rsbJn7yjCzbFnSBHL37uMbMZtgMb78dQjNTxm0eTVe3Fq33lTko-BCMRphKaXEDgkR6k32MGGmP9q83NuLig3Cqh2x9ph-7Yc9Djae6GkBg8WF0lpUSNKbZ6k-IbGAol2GlL5fsdwrZXiBIdRKF0OezL0WE7bG26gKrLQz4EyxOyOvoD3nTd5gHdQTn6fcw3SfGEB8sDdO2R09m3GCsT8GceiCTNqaelUD5sfICr6Q6HGrAETCAeYj_3ziysu7VYzr7T29glda7hkIrGF7duIWQ-RFlQbrFJhRon4rjYv0uAbHvTP2NkI6nqenQNQ41PQVO4HukP7idDoZ5kCSMOCwijwEHpZuQvVVXXjuzAHE2dEFkz7O2zIgkaP6uU4BpdgFW9eatjSZQ7oVlyBXCOetcQUVQqK62CheanZRGSk9Or4P0pfCFTPZ8hMbgmhgNXkUjyoPh8iUlCNUsObLmmzh08fqlq2AlnAXzk_9MwmQsRv6kpcsnVfoIx3S-LEGvecVzqsLRFF00Rv6J1WDSDi0Gi53C_uOkFqVi3XazL7e47nKaAiRZZwCPIg7L4SOJmG75wAlTyDunZEa-CYOHMJDqnpTzSHSz8ZHKrHNLj3sCaX_fqtTuhdtqnrgdsfeDgiWJLIL61VqnExTyD4Idrjt4MW9T6boJRMZ42BAy_d9imqEfPQWdizjdumOx0KEGU6Bg7uOKPlcsV_FFa0KFySR6jo6bVCxZ-J58n73vvz7xrdlLjRrtimpgvASuCg4SEmjkRKRnx0xPhjMU1--bvLrm3yKAf4delUCiqEmvIDUqDFMKYK-dioRn7yv3IMa-n1boct4Ir-49HDrsPSeJfrvHPcUR1ndzygl3XBL1ZXqzziU7nyOK620N2_84lOn-mXW-t_RnLAkBZjXL8r29HQ3o0h0zmMoUd260nzUJDmBsLdXbmm0IpcFrR9a5PX-zp9OcunrjT1eWE4UXv9CDHJ0ydzpgs1_gjJXlOxInqqLzmtlmN0nLDjyPrselfZAVwFSaBcI6g_uKJ8ZvOUEa_C6bFtadrthYQGLfoR1o0SNR1OhMor9DRNam8a_V72OjrRmOCzxoqM6kwxP1PM-wzjnJdrfz6mSrLtdoj50YlGJlmQz5X_FwEKXL6aiYe7WqzRjgK3C00A86RiWvGizH_gHzwWXyXCHKrHtcYxVH5inHWDDIiOHhDbrKvtVcM76a8Lra1iFsodnrof2_Mk1XlJs11RhLLCL1ML8GHDrBbon5hySqKi8PhZAD1grA6ntuYcKHNBwqEFaS0hOsHq9hDUgjZxk-qCPBBovvHd7J8m74B-EYKYAcewMA8omXeK50lz35D7mB8HXvOpRXvH6kZjG5TDbPn3VSUQJnoX52EHONEc_bUbbw1SujBnA7a0nRrYV42TToD4wD6C2u3H84693Sq_6RIDQ14cTucy_yK5L3DKSHyUPY5WygQohVvGr-cdGgBhHxO-9Og1055a_JzpO-CA8XIUV6NOPxaT50Vy_qEr8ewHisVKAyy5it1NxnJ1LGqHWV2wO4d-jddj4ebetguEillmxwnyAHxEfKx1cQC5AWCbN9aAvt-BXEO4B9Q83UdiOJ4ccH4uD6PpuXtBucQ-IPSOEzb3tISpdN7qjJGfso0EiJD4vfvKA0TpdOMpLLtjh9Es96JL6NlEUXn7apIjQbCyG0GBdZFk3ssCYXZQKSqhqVxkRFVN8UGVP5yBlpTquFgmCreAFFWA8az0YpAA1ZvY6UMIs5u7FONXELaPO3gQ7Vleqinb5s5eqFqu3RGosos3eK3DrS5CExLaGWJ6oHUK7A8lptxmRHa7XiVBDExirVmf6q4VFVW0AwRK7oWuDf96-GyC8q46DIivkwqyDCD9iCa4QJn31OH1Qf7d8Gxb9ocxlU8muJWwTrf4B5tJCz7aB0l1V_UhxWBUhWKxgOoGGFeyh3zH2u6htDV0Tl3n9Oevg_j7yoPcPaop-i2e-Mr9UMAW3iNsI8NMBY3NEFYrBTf26HxO2TJO1qq4Dea-0bjeNAoZDHH7zU0oq_Q3nSIaucqGkKoDCcRLRlUczFZS04YrjLOkU5oE6LG3oQv1dzDS7JJjgWS12wikxSaSTPohfu4r2k1NQYJ-m7TkeXmQ7BvDvLDNb6jgdissNbsTP8aE7JJD5tL7DZ5fX5a3LeY6ykEOZVzBM0CFfjP8OsWaTepaQrbL2Eyur0Ks6qoAgXlci3vbMSasPN648Co2oUR2Fza_w-hfcCatoYt-DmpXSpfotxd_Ewve7IQrFxKJ7j1-zJXmWiD9wDGkCTZROe_LBhb5NzBYQ29V_D0QN_pxFGxKW5SeUbntu24aALt2fSJ4reyAC0i_kZ_qV72BRXEMnbgH-KvZarxHymPbFK_oF3nNPlMqpjt4mC837QrFBH4APi0gBlMMoH9Vvz2WRLXKoUMNvRI4q818aHKhWeq_93rP8MOMmvnYb2Hd5H3QUPIFRJPfnlrTxNQrRMnipDlFYSFUkmcTwxdpR5fvkyFL42rKZ3xbBE5AQ_8Wlknk6PHKD_kWieDy0_PctY0SAWyE-cD2JFhCm2GfUrc9uPBYdKf1e9d_pH2EVs6UGXuPkKuACVVkHAndEjdgHo88esHWM8ahAVLVUJ0E7ypMuZO7XNWcZ496eVSmXGb45oz3kKMPMf1vb_5ZqbKo4UPBejZitsMnBmzFMceFcbce63OqztIF92Vrmh60pBazqoruExRlU4t34Hy2gW6nDWMCtwDMxzF9yzBGZocwHoz3HaNZzilAG81D8xORPev8dsAgiI_CxxbKKKxOJI4eQ83Pk43o0US6aNP7qkc8Q2OoaDGHZaV-fqdqm2cZ72Omiks0VUEzrAGD8O8MAyWwxHOjp0eoKOemV-KPs9GvhvI7bhtFztZ3aYyGCQHS7c2l9rGj2OLsakhWNdhLE9LDmgop__1FgKPAvzmSy62Y-FiMq0kZxF97KLl5CPfwAF3Npbv4-AAHlDRgbibECWqMPflVKMFFoGTnO6APtM2OycqPqaLYi1Of7psJoovpIOj6TDaWPmeXS2FDvfw1VtULaBGR6ad5TMLBAle8QXAgihRq6CrWaBYycxy-BkQVPOC9SvcTtG015cw3Cmq2HNbSAZyc1PLAzgwBMxDDwBNCAFE2ShL0CIhFpjTSCxNBB94vZAuZjl8S9_ZA2eCmL0WYxKbk1lXCxeQUknzRfAhxysrEW3lcfH07e5O23o2KE19n75VkVCZw0tIanQ0K2vJKPx-FFrFwjJ6D1IX6Leyt0ARmqkytNjig5Tqzq-qoe463VLvomQnSlk1Ws09WeUcHaJpI9xlR-c77vplyJWT_Yxsg77aTtA9jE715335Nw7vLNt71CkvLnUVsxzc17sPs9pVWpgXMBZOBSV0BpEpdg3-0W73nZ3Tk-zlmt3ecRPKSP6E9HB99xoGgx_qATWfv9kOpDAWk53st2u_V_ZqNKhWMhp5gRPYBGXEiNgpZbey6cQKYOmNn2RgHzofYWB7CLFes1jQZE6k4KLSdFx_jqxd0QMjCjXEuTnK9HWSl20zluCFdcADGBGRggGoo_t_UuJIy9otBcQ10J2Hre6LHfbUt9wmgmIvOKKIC0isIWqJEUbc2qhbqbaCaCKpzTMP-7IQKGODy2DpHeNmJ27m-E5TPpGfUgmNKQ7BHB0BIe8hC7Jk7pKotyQe8qEKFyGt-23bnm1p21G_GEe7D1QXum0ZFTXT4EK2f4_tYITviMZ3BCJbPooywSggti_klmE51PLARQv1s6-twNrmbgziK9qB0JnQiVHoCTsA4n2F_OsLltwLg2SfPknoO3yagnYAwOS1LRv4fL6zryFB6DS3NF1fIbEA9wgm6hadOQObJhZWAyLUXADZ6ahI4uY781q0hDesuKJbQns2bPJPgnhXDBBL34tyeofFPGpeSVvCHWCNcs-wV8kSJAokCgVEidTyqJAeQ_xXYtJc-67xYaioqq8-2KjUWLuVf7wiqu_lnw1vcWKVVq5Jp3I_F-mY2UYD-cRzT1Bgpc3BwybcBvfgoPxF7rxE_bWoTJUONL2_U-LLMAzPvzBxYcP1MxNA0WpBFkbnzqIhbus7r_aPE3CL3vnj1vN3iPPL7ct7b-cV7tEi0WgkMWPMXAsJUpc954WM_LlwmjLGWSNZgumtYzX509kRPopnrpBzUnDLLKxLwe-VAkWjA2VE2P2CKVVe4LtcRCmVsYtUR6G0JGAZVGpCWGQH8LR5uy9rooi3h0D6vtoe3waXcY-kCAf-j3Vxmnclawn51HV9naxpI-yTKVYlxgzKYQiHz0RYwDgjfpchYhVMrnJxsWDlSf4PbKBXzu92_io02Mfq-0vmfhZNwVgvsigV06tWWRuH5jJFhlnOlpVGoVAeBjFPJUW4XSniI1XxAM5MMXAFWVhAEFXI_VeGTv7YsG002-sNaWE3aSnuopH4htGioNbCFiDmvfXkOmv-RtQt54X5weGQvm9eplhrgqNlruAcPbeuFd4-9Ryt8g7aNbanTvhfrQu9mlTI7ex9u1acILSs8_W8-PXiitERn1IsFOfIbbZsBjTOzDrXVqkoEDQ-Yzp0WQybKeZaRJYBveY1Kl_Ivb12JaExwy941-rBV2vxX7YAzWz4d0ZGT2Z0NiXxUOCAugLOMFeaLcSObjiwx22PnpS22L4mui_Fl3NS4iZtTjkBd_LJk4hF4GqrYo-Dgu_s7-7JxjBsxFr0t3v40PkeFO539CwqdXf__Qz4LeJ8ltYjKlsHMjFBcWNwwXAInOWRyf_0pSvXvvTVYz6CWycxzzOdbbX_-olYUaIQK72obSQVOsOp-0zf2g39tYdFZ_Pa2xng6TWgmbtdPwsA0M1qXdd-xZGMA78ngYFllt_MF0kb5UH20WTWFgsDha8By90qfhAFrOGm9xlSQWg6RhYUgthY_Orlp2dfAKeRZJz9DcI40mWlhRJL-z-1dFNyscBloj9GnBmR3zT9ecBtz0N0uKK37RN9IMdY3H1VWGATixJgz40vyl8M-vlVqpYXitXT3ldOCaS5DvsKEYUnnRljCZoMZ9zi96qd-kZMk0ozVkPBHt4rGiNRth0zXiWCZO4J7DX7YmmCwiWRgYYfaazD46IaC1lHEozsMqsPhYK_dIGOiP8hL88XnvksNZvprzUzYs_QV2wjiNHSSrt4MP1Gwa0uFbRV7j5yJyxLO4ZIvxniq6tX7E2hO0e1jeMrCafUmo56cWbETnDJGRTijpiYU1_GKtw9J2AzmPPfOHqzES2fFna9yI1TwGheF_8tCsVkRMuD64oVNTQK8p7hHmQOaj8aWDDCwDRCCWo4n6BwdBvMG5jiAf3WnwloxqNROTqElrTkgxUSFBhr86wgR8RtyuTlQ_Cqi1jq_PaJEAXNJSC7VfSfL8zCT_9ZaKXRhbhrXCo-vziGmHio-am26T7XiI-UXcbK9AATAuOcSWeccUpu-Uo8DgV-5wtMv1O41xKdy9hlIjGHd0_3QEF390k1lcBC2tdWIzAhXCdi7n3z78YFw9xJ4ZR50A8oS8t5gXSOYMck0cONYdzu7o-qs91echC2MZtedDbHAGrqgtWtSjNf397LIb0SGltyOIiA8lq5mR-deG3NOd6IqJOnLfB4UTAmzbgqQTvfJHPst8i4APWBm_TIds1d1kkWanaAAqad2W9Dcq03dTPuQSuLtt4YavG6EAsi0Dqjqp-EdZfeJf0YkNmRy58XGoJGOvPva4gqwkqoLMb7fQ1C_JUYcu7STNV78NBUg7wDRLYVUx3PjzomWgRFjqGp2x03Js7nEyJ5MItOsgIjIuG8z0DiK2g8dbwesL1Juth6E3YzuLC77YGi4rBfimqMbqojdkWwOhL7i9lw0-He7TtgdJLVQthaBURlz9dblZjjOQdYDQ-VQ6-Bvk-1Rxgxoiaz4FqzQ6bB9JVylR2K-pQgZGXjKCP-A_a-q4m9sZhBVfOrx2OsbutMdfmSFL0Pe_cmsE4piNfIIJCkWuywZj-IPDWoKFVeD1q2kr4tr-nnuANn55fUsCdbDaC6-03gC5yPwuEih0XvS2M9t3CmLvVVLx132QzHKONMKVV7RJiZOMmmpvplVqE6_ddmSWgMDiW8VBuvaNxrCKEKTTxc5Kb0ud1QNEkR46yCbiBl69NsUImz_WZ-sH3e4KmbpGG-ZXLWEtND1npz9DRyFncGq_yxub0Iht0we_9x3q0KSoBrkqW00cwIZYbDt957uXLYOj38a9rAd9rvNklsihcJmVpA6ygcrmQotY4h5Bln5re2D1TwosDRdSOUh6eWWT3xhobB_J0ldOKrfitj5v888JnXbgCKr3_GYy_ePhMioa_9NwaXBlZQ0EuAipGwEXAbOGKUTs2_-d204XRRMGhusIFV8zc6DbPDNaoQyfFPF1-f81F_jEgMPs7EhpwSeYr6VNBweAUGugetkEZRe3PTyEWZst1iircxkdj5LqekV4n0zq2Ls0zktVWeYATHAkZK5PuOpRiI19vDbYkcO1O0Yc6_LzUpOl77xc0_XACDctRWuXz2UBGEMXZBQ3iLY5aKMzGZ9qfiRtlftps8wcnbLfr9oYFYUF2HB7pQ-tt0My0pF3H4I6NGNfDABolDatNL4fE4wNzcGJs9FD9zkMWKQNDqoFRQa1eowVPUAwoUlSk-6bz1MreUKzPNfQDWsiVCw22u6OLp_I4YCdjdL7-2G5xK3sKEmi0jfN_vy7XL0ZTLY-oQlixETJtnCpbBJ7jsPXjvYKBoneouW5Eslgt_Ztcds89X4Q4-R-HAl8Y12Tdtoba9CTXCWi2n1DO05GwSBnRPm77HzOdHwLp8NtVZu-dKSYAgaTBZw4ZsPVefMaG8y0YhkMpiyzUJcbcVwipVkdo0Da5YzalxR_754O3NxdeMLbd_vOXHrr5ohJgthsdRYJ_wiRpc9ffpfuw4xvCJMzvJk9ooACt0JgLJoxR9n7zHmeO_8R7ht44g_kLJx49KG1fKyn9ZY1Xrb3N3nU5EAZXDCx0ajv3nec2O4kiPFmnPIkgu2rTo75uNFqs7P530fmr6zrEKK5ogbOItejcPdqGaet6YHR8un-tiwbPY6ciaSjabDkXYs5nhb4eHzO4-PzCfqqLTfOW2HV2cZ5TaEnJ94klDUPtHGBmXHco7q--MexamSxBhweYvOEg6yG9VfAeVmCtN-2U8qkGo6i5ZwA9mUgJWBzVJnX5Y0ocVik0wcAiBJAPaH2ynKQcfvAEpdn-BO446YYejadYo9gVDPsJE2U1X8OoIiwI6SJi5fjLjYXmLz9kdGcm04z_n0bRUH13OvdFCPvyIIZdtqyfu2-a2ANwBOzOZXnSMqpvQ1gdck4Qb5Hsaujwa99DNzE-vhT5cjo7n5QbQhmcgZtwwOWuhf7Qof13Pn_hTrwQGus5HDh2o9kbPja7GUMexANuMwxy1raWH7OfOoS-Cnqo2DuqnF1Jwf40kFjXg9p4uirMpoM1Rzy2bPu7FIMFoC6T-IMIeEp0LQP7VUyVF8PiuEoPeN2m86Go8W9WXNQOshgniC3mp8_bEKkkdtGQLT9a80FImmwU1rrLt4BSmzUA1Z3DiQlM_azSmNiCyCNkbIjlZDgzjCj3mCLYPZE4MiLuSRtP3aCmD6hOioLod9K4KnXxBs8TYcIuIW29KqX6XYsrlbQ9jQtiniMxNPWt9I5EGfQ4HPTbFydexDOWd2UXrANAFK1Z7jdQ4agTZq4oRqwGdAVIVNYi5Ub-0DmoeGqjuOgwiBJpZYbQXYf7E4RXvBdckHKsd2VD7Br1O0VR2XyOqJvfZCJg9XUGGatSHbs5ytS4V5EM0XdE5RSGueYmnGyCZM2hzV6clv_-_72PurrkBz7FEBP8s3bZHjVSnW9c_b9PhgTVpaBjNubJ5QEUdEqRlsT4YlvM4U506s3HRFBxN9sGO0MN0fNTTrZBfFDV44prkL9VhD9gS_af-J8WWsOmT8JVQmbMa6NAt9LlchuZDif6Xp1Y4y1UfroKC5-44HMtHnt7yre41ImFxmr9kFnNyEJYF28NngAFZiHv5agE1GL1LQRfQoX9GzMvtx47zl_lQ2UnWqA87iVHJPEGEgJo5-dgs8LCH3HZdk6iDOzz2DeMAXdQVwqsUNo3joLiX8mJ2W9nl4ZzJSDo8nE5zpYjfnH49g9dbNY52REW0XULLwO6lLEIQYrAVamlBtqk7nQx2ygIiuLD7gJ0njDtQ67IvoWCsWtAmwwjen1mt2hmclgdZsDy3KJhCSwLhCg_dagxUVsce7gB5xFixVe-5s8PKtEvM1nE2NFBcJIpKIziIB8oOumP3g61g42hjaKkmqwBxiaeRQIe5iOfXFXy0TCwbV0xmGaznes2G0ufKIGXLGDw1WwTxBN2jQot5YwNDk6TvRkCdQJ_iTqGqQctRUKg8t97LjHE1auBZGcU-MHRc7oXeR2Npkdw-kULARjZaZcUeR2AWN-QxOYhe4DLrpV09TuISCnkoaNu_xx2SSXwPY-LCFYVv7ZDHH3YtRFbBnUmSeEl3b1Frqfalxxy7HxS7lMfSB1zJ3n2gvFklTPYRHdTn_DQsLL3NQAmS8bgz47-cATPBy-7aBzLoKWrhRR1vxuyDs4ma-heeIJHoCEDrQmTyfYO0HL80qZ1W86b7_Djivay8eEIGZgFl9CT_G5bQL21RVL9kT6ItJgwzEsykaEoL5Oq6FSDON8Ely0mbSH_Hp8rpnV6_sGVYGlZLGL7bMSWz_Ml3XIdIVekD1SsufUpLDc_rsV4AY9qE3Qsv-SOyjaJIok3EO9eNINctF6Ov8Oc_xWASRcJcrtyNKzTcl8P1iHiui5q1Fp-8N2ZBcyH28XlERrnneDR3izJHVVsSR_0_WWnuZ18FaKBDFoC0tnznMBHwmTGO9z5FYX535OkOP5mcPMJuIgZg_WzrcbFaeEpe2AMbbPOAT2dQctoFgUMzJsxi7a5DKvVUAcCIZO643xyVml5dXkeh18XC4XOMOE-Jwew15jt4qfDnLOx3YJ2g7hsNoXKXCWqB8GBZy224a-PzECpfHs_AieIhKmiXbnwzDEKOyU6PLiMfs56WF7f_ofw3Pu1do4otAvSduz03JU0CCIYHFUx2iaL-uSkQzLdGMdof7qBQuICwCoSyQ3MBM2oiwWS4Z2JNdeG6zQX2Pfd-rfLac8nd46ZGGfRNRKknJEacd3uIlxgGp3t45dQSK0-k3twu7FBUFm_5J-QlMjBT19oloy_nK2XBynklFGLVEX5JK8zQVYPgm6wYoa8MHQ56TiE9Qeo5265J9dHCzRRA92pKFAxqD4G26iFXLwlwZQ1KjP4Io5XdARdw9XMBBp6Kdr8FcRY6jyXi_gNPZhebsKT5LTfurQLD_bdGlXoLag-8MZ49hvFpKQU3gzZHDlUT1Ft_l2xHYTdOJUU0dY0wKDEtEYyP7H7YjkXJF879Kh_i_sZvH3MDIorMuHE-3vp6VvgT3QSFpRHbh4DOeTtpArtb6dZN5fsDJ2ZC-vjoFujbIbGGp_yJgiFU1YiepcmK4mATA0S7NK3r11L0M8JjMmoKD8BOGNNvakuHGSPdYXT24LrOWxQv1skXMVnWN0ozRsVys9_JH1CRko9ewYjXOa_Zaz2S1RSMsm7zZmXidQGDSVpGpW5beVYkKd9s3x-Td2cO5gr9b0SwWsGpca6dG9M8BKj4OlZIfcPKE3kzoCcPIxEbB28l-_NZXA1Iv_bEUZO7lpX_vCHqn4p8byog9OrFDcCXAJD7oXKsbHi7p6AO5te2Ke4UiXsVZ_77ybSsrWqw-yLY81jGwmfyVE1UdhF_yDc1b6vS2XJJukQZrqMkLgtb0GOEwds6_KHWrfW3ARS9guU0rBe9PLfssUK5BUyMkeqPrXmIuUAQzlF_zf4hRCV3fQR9FoVkd1dhVxsVLJL0osv6N9I36Ec0WQL9Xgr_ZIbW6fG1ePStMCSjRth3eIsBwaP260ogPzmk3WrXVDT44djaNveBgcqLEaY85HYPtlp-Oe05bXQaKikBjmSDvaPksOWx2Ej5C9I_PZCN321EVx_ZbwSz2b8pvqoRb1avlal7lRbRA0qqrCwHEkxUbNg8GlhhmWfiP2PnwPZiOt02mT3cByvbW5jL6gQqpmQrkkCP6MPlznaXNgOIczZ3QMJYv5Rprj_OqOQA1c3Zf0mk0u3Nvupq1yL_0FBB2_irTudMRzjg21X1nR740aJn01Vzt2jAWFsu1CakgrtdKjIzme4zJVh6E0YH2Yv_7L0i4ZYNaABjsLzT7mJYps4Iw--V6fdbQ-KfHSztVwj-9vHYgGkITAHGU9HNwupXQIvUaFjakf-FZ7fjzUpreNhObmXvnqCDA4WfodjubXRg01b9kJLqlFRMLCMJ6R0kqywUgoVAMoJHkPrrPt9fxByCIrCfvAYTI5EUnNZdvcdNFULjZh09e8idwwVNE_Qru58uxq16WqiISPGauoSSr1tbrtyaDZMvpXdxheJyHGjRcgJQxnENplVcRHiXdqduPArxjLGRWRDHi9RrgYLs_eOcyZetD5qneF1Ti_6DADVbu-mt7L55nOjEP0-Qt3Iy5MF0no3LDnbTCyseH9UtFef2qGjMIITYcy_UlouGEJGd22rWxshRAsrLD2F1gxVbwIY2pyxcoZSxgrGmKOPWvAucJvgxXlOSZJwZTWpRTYin5kXh29jNPSetWvzpG_U8IYAreMIcrIDI80KiuLVwNslnpCEDjyZPl0z9ORtx8hYCr2riwhOUjyoBXBbrpc3vNc85e9Ml0RR9ytRy5GnLzvfh84gbts89w1AIWZb_fkzb40B2ZD7aYJ_m8-g_UfrMscC6as0JobuJfwNlk20ETDdJWo84XxiefXNqHZQmstYoxfaJOzv9uAl8sBwYtADVtaXpwcb90f-4-bocBsW7yITiOkooXRI1K0-wfwNuZNzMvSNJ18-GqOjb8cn6X1U4huS19h2bzMNjHOKjLPdHPRxmXbq2bc9aUr3BdVS-qUt3tJ9hJ_E1X9ItN1ETsYtzQ4qlJe24PgfyfIXedC30eGVTr897xcl5SVYD3zHCpmF47GYWvIQCFV098DmxX2XmHYqKe_i8vAjkQi-Ja1JlJDsf5p28WBGAmQpjg-XH9M2wSbnRu8CH3Sh4OwvlIMYodNFtAv-jggMtfjmi4RXva7a_1X-46CDDF8bdllPIPol2WXDBj62gHnMsHxn5W4ddn3BMFrmTdt107f6N2M9DxYlX__A0x_3aX9E_brqLZtx38HfCybS3cnv7Dt7k06Vzt24I7RYVywvQXv8iM2dqgutoifoS4bvahtIlFEEgCIrh4QDwm2ORnih5HkkCC-tuyDMI_uqrGyIVeX8rfHb-LCxSUVCCT-DEX1-UcKMisM1JXJwt34VGujEOM-wCilx0wpjaX7QTXa88-L-2z92pCOixDQTD4o-F_xdcQOaXskOp7wmgB0Q75jRAlwGGcIXczxoV2CRRwUh0jj0nDorS6wHHu6VYYwPv2ogDg6VWIBKehP5MUv3hZFElWXUQn53VfOuq0_AIKkg_GXtBZn4HbOih_mMDmtYZwVEg8LuZ7C3GWz1yfHzX5eVqUbG60A4Flj4VS4sDPcYkw_sjiNtVDrscL9FzYYhiOgGsYuz0YUU19EUorFr4kP2CE_FHuQFGN-y15vWF6nLSlR6tH8qgShVH4hIP1q0caAjYKOXpyuLmTcv8TjPpuVf2ZHob_-lnm7EKt8IYMYZ7sRkTWm5MbDPzRZD5JB4fBLF67XwkGR4NRYfBm2yO54sFqlZp1-aMC0bYHkJ7B311iAYX_-puB2J6x_WimtcVVCb8-N5Aac7Q9PPig9AVVRCKZI5Yytaxwdk-HOg1-_OFM0bT-nJBnSeDFzW3ulIFSKH7TPGOKj2_si9gFd2NkVLitI5PMIHQdpbggrdrkH8tnJAgqRsDvXu3CANTHIm2jOCY9Bavx27azC0ma8uJ0YgEafg3VpeefH7W2cAb7XMLbG65yTFZU3M8909totiVOpxRiGkTPTHGw1EsmxeyNSCOhya3tREwYXW4x7R1CIaj4ysZB5x-BzhZNG51u-hEI6faeAgRf3Z1lOIMq2NhfKycfPVZvdzGGIYd7wQKVZqq83uPMfQt2NSu50N0tM85QbouTNfzK5oWkU19Xtl6JpPLgrStf2iZRzsJO1Hsz8pRmlPN6yUVdyNgK84J-hPldaga5qxSbhI-XfL36aUnaOxrIjDfNaM3MOcy4pAAkgJ7_nqwVckb5KscKTsiPud1MWr0noWcO8IrNDnD-XPnnYyJDAQlmWJCR296S6nOSkpazzpP6mVkvIg05C0jZDK9bj2GEW18DOP9D3ngqm2M_bEJoeAK_wb4S80jcXPG4kKEWD4FyZmjPFCwQG8baJcUvkGT8G4yIJUYffE7Fmz1xZI-uqPIvTN0JI92cF9Nsjibhx3Ge-LLCbgPhUccKsKmED2EXfoQ8sYvKella44MGX7ZOt2TJvmsB8XfhTi0Ys4ZvJai2MLSZkPxTFmW-k_HUn1MUITcS0g1rQlcwKxtxi9FnYQ2dX0AvH-Z2eW4L9qzexnJAR4kPtwiXnoC6R4tSvsnTjM_kBx4dzlH-3z67SwIli__RamNUKqbaVmSGhutN5z6PW0rK6xUR4iWwyr-rptf0Ot5JTwZlwKfVeu3oMGKeycRA4ZWrqgB_o2i-FmQYcYWTjiMV6BWDMXOrjeyq47tIukR40SLOa54R7HjaUC8rpsX4Ed5mLfbKC4tiQwXXCdvVeZBBEJFFl7lfzXZvZKKHvsxh2p7gKi2ZD5O_5Sd0D5mHmBXV48OokU_sY8G-r83p4nZPXLWtz6kX-DuPsP1WMaExv7zP5mmeWwOXMmq71bD_trFIozMIBdqZJcrfBIATe5NsnOgOxxQ9CGF5pdHdP7b5vec-ZRUrqQL8tWS5_VyX9n2xm51ZjL3f0wY_OZRk7MtqavKGuvytRjF6-BmtO4a_vHy9lEe1lrLp0MpeL4fqXPzRZg0NkzZQTWciSeE5Jq_b_m3o4vH7I9pMQQG7rMH67uS47R6s8uhdv3lgVEwoSYMqTE1vPUK3jq5yJb6j4Kq9h1fLLzw7CzTPd4Jg3H2XZiBK9_4h06WR-EvL-DQP78qYphJnyzHRO27aw-rEJW1N7WkoYcnXcC0KtZ-cB4-zSrvYc0S2eOyxXxiDvMTp18JuVn0rZSX-59a2LkmgXxznzpJ7ORjOxVG_8W0bL08WH9lUwKZHspLf7BjRjQN3-j4jM1UGxczC9mJAWFBz-msYacVjVEP5xWcla7tAeKRDqsxa3tK33Ic6I27OFggvfece7h8INOGfv6eCko9-RJia1bDzcrVpz9x8WyJDAENMq1NjcJ9F_SDucl6L5LmV1ZR8ZXvLZAOpcmPluX1jhdAMybwLFf5N8iV2gqj0Iq_BEupBGfV3LOgxocNhyrC4jWskc3nRFX_kBWZ-tBjZVJfDNmMrdzY_9SWzkp-QFTI-siLpOb18NuG9Z8g90i7AFmPLBzwf7X5z6okL859FPfauMhqbeNU1YT-nDa0oYxk2G-HdLRmeKeZHsioQ_E6MWqxRfV9fMWuTANqtJkza8JZSwT5UWCrJoL2uN24R2FaLXizL7amcBkxqBC9Wh6-3iI64lNmSGdKMlHZwgPinGMb4G52NoaWQmDWIzxv4byQq-0evlfg3ATZwNIBv4LUDU_8wv60u5opigirjCuByJaf9VX6yYeTmyuj4yAlfezapuGbqnHBrf2aTd8i8XMe08ba-6QNEk3B7wWXYZMFRGC6yprtJNjSxcdfx0GYGzC3-sUnd9MnuHcT5HLN_P9zIEMHfQfL0nkNv1N2nQBAsGZMElkA9kmU3f-uBKuBy28GQ5A0eAjJd9YvmvfS2Nf4x-2YnEjs-SKxJjBIMELfefUTaAh2GDlOrqxaQxtyKSrMpPUrlWe4xOchapIU8Fv8NBESPA5I9XVLmxQtSB44pvtv3vqjrQf2NZmdVOnjv_PCupc0Bkp4XkdSHFsHxdqi8rqq086FEauVEumTAvncawedIpYDMIemzDwUxZSCm0h4QijrrAtBJNDmchnit_g0myn80tPhT4rC7Cd0IQDai-3Hwyb-FzjRSPNdrEFsvkQYuzOaaptZ6Y7UjX3AF066pYrRmX9P2pbVQ0QoH-4__91zxPBb-TIeIbqEvonYW81iBLbh8lsZtADlFrXpGwB78LTAPU-X6P02qkPBsyUBNEdZ_MCwPGOWF8jAFZjqARfB8u69M9pM9u4Uzf9PHaen6LTBLGtbbmg9EokH5VvSJGH-Sm4Vux82WOsFetJQs8KkeqQ5SMdrw-AwRLEH2_9vddnt3uAG2X_3rNvnUpw9mXl_DY41iruNXsMgGhyWeY2EfHc5LB_cjmEF6uY5GJt1YIfv7IDo3bxMwpZ6msou29o3hmCTYIzGvuDV4BxR8s84xCS4vg-YgM4Ox2vjqx6BerI10HPTKEFwr6nm1TeG0pLRydXYhD4C5uzNHueMMUsC7w-Tig5ItS1Avx2MzpZtn-nX97dQ8G2b-SDq4HzSGO1WSibtC82_UDWaR1d-v5NwCFcvBvEezn4anZsc6LAUa9nOshG_aiUDpaQumi5Bn4Vb7sU4As075e2Am-dYrXfxBXaKCbPXLohqBbTmddLTNnFZ2dtFkSLilUAttPj81yhl3D-mZupRkCmVlum09P6tnej5Kq6SZMSOCQFehU_jrXsEal4ETeFevlUcPTHOY8KIhtW-7VP9IeQVIK9D7lQN88PXcb7p_J8i1zXHfjdHucP_deuk4mBqVqZZAj-MNHE2KEyCAsdBrSsuGRnNDKZtdFsE3HNnw_-2a1oJiTYKIyEzkbEP7QPgsRkpG6Zw9lJGw7EFEqNr__cAUxYgAm7oWEBZCUHU4MegxZ7dQeu3Q8P8Q9lj1SBUNLxwVjvf5udkqPQ0hh15N2S6hl4NSbY6X4cqqY-gsqTpMnuleulTZFqLLQzbh6SGD7FNIYo2fnc6avyuqtdZTLV90_A0EacMcNGMat86GV7RCCNE580hCViQcOjFiszLtsOGRDDhUol6TV7clkzm-aSgiEu6jgrg1oYFBUpujv4JZWFupcMLbcLJUrEl4-rYIBHFkZUIKZuK-Qm1XguGls9kulheZrfureUp5t9Gqn_dqccgyQD2nUSQOOqHTIOIGlr-_0U0uYIPn8o7Z3i2MdXwuSdDCdF6K3VYsfpjjui1dUbobLRy7mQgiXhX6wi37_3HGIBPVMe58f9NDLweSGIXSqh41iNzxKIESwgOTBR9EFlCk_rC_8CBqkuchf1I5Ncocn9a3Nu_MtWKM6TOVOdzMrPrfbL7fWQxiPlJtDir2I1uIk6OZhuk5zRQTBDlQTn-1SJr57CLTJHZZ9mJvAJwukWUnCLSJJkd4nzSPQ_K9H-foqf8MN0KQLE6zabsYL1Jfq4ejhhYXZMGfLaucIoPddxiCJ9mhEub1Zwdln83HY3yarMS0sW8oGlDYw-c9uTzrwKQZwPHhD7GPTWjBGRuDvt68XZQI_D8gqjOlmwfQmQEj5djCSRw_q8jhRUREuL_SKJIKsEryyi0fV8TqTESQy71xsqAJS50w2FrjuaAAA93n0N-ZpKGyd8UzdKkia6qlXskcEfGyTQDmo7QaNtPAh4y160zN4pKE7fbMdssq93w3UCRI75d6NrGVjaOUG0gjKfpSTogq1aAm52Mg5aSPCrCiRtlB5WZc2Ru1gyvlVt_dNjlt-QEWNk9SuubuO8KVO64NAHfWPQ5GaS8g_F_5HjkIvXdMLD105wZaj5hxiS7pBux7zgYxcGXjt99t3fA8fRXr7ly3tjH3BdIf1vLgycGjQC1wTN9Gltr0VVbi0GpI6aI_1SmAOerecpRkfBhCVFfQ_Dbbqyp6JWBImsG1JXGtz7R10ItKk86dVviqwmT40uqrKktdLttPVm2JcrPN-ecvHUwTlYM71apQQroU2WTkBS2G1wix68y9TwS7OB_brcwI7_06tNRHOgP06TI97ACA9vAdH6OlQShvJdk6myDhg1-3CEJX16fThSlP_ntTD3Qadb7HyCDMJyN54-m5ciZclreDHCOvitSdgygSTK_lnsT1qWNHcc5uope4FN_HJmKZxkd61n8Iv-mRTopHt8XYtXDS79bbZ8FJkckX0KkGgg1KJjVI5UCv0nv31DFUV7MhnMuCoZIOJ90ZY-nva1VcWlxc-Hv83iun9IddHKGhap5NrVR06dErSkd6b8HNxCT-Q5Ra0Vsz079A1FumjcKr7XQQjKYoKfTGTrXmvL6gjzKH-e2Htf8p5yt0JRXBDIv1vbdoDy2o1DbUF9ZtDel2lMEMDl2AYN5QyzULCV8DwyYMODiOnDJ1RG54akqAIViX_9kAVJ1lMQ_XVZInaQTfmnd8a0aTR-eyCl9sH-lheJKDVOZatbAjNLo0GNlS02O2bn3aOZIqEQEcaIzLfgqIV7Cwx7WYWuVaJLYd1MlRLoi6v77TMmHlhKk7O9j90ZrqAnTqt72tqCfwZK-IWF6uB_muw6LBdymcA6JNU4xTArnpGjyHRiIf-a3tnarf3uCVAYfP3BDNN5Ut0-e4gGSVPKV42YBhF_BnOLT3-V9ZNdCDTH6bSMSH9UflvQUQeLvyLN-HPRGnRHtg2O3DG2f_Un_1zXZ6_Bk4Jee3ajbNIOVk7qTCXEz6aBFTJWapEVy2NUZevk38Po2YmDllioQrQKF5unBKAfwvK6AFCHovn0zcfiJOVw6f76vpGi1KTKGZjSF3uTSiimjizIgbsfzZGk6CMEOWTzkYV6OFXzGOLGd2Z5sIg874RZ_b28MUsmyzogZBmuY0TLhEz_tJFEuqwxAmLXeDRMN7ZFFDWdsvy4jZwpZ91M9_KLdq3YC5gnTUiVOkDBYEs9fXbp5a4O7fcWj1a-yLnuLjUpM6oifp07-iw3xQ2CG-BA1Psy9nWPfyB6hVj3Q_L9sKCjH8CDdNechFgHMkkznaaHM0UYL2E4e3dxR-cjh8gB-n_JvpZHGo98YNioNrWVQ_4lx_Ymk0_RL8GmfRG5KAAQ21CytSEG_BDeTXQgqonUECBP0pggOUvysRcg70WdD-fyW1oJcFt_hwmKv2mHiW3QbOHjYMU7JZW4vyRNBGXwE89gijbZkqjdHIVUJlrGvnU3hWj3Z5e5ouUFWbbXo3SSXkhgmOWVJscNIq4fbFvdEs9L1EP_V2r9vYK6gjONEYuqKFNHYFnugFOGymNwjghPCsSQ4uzDNrMha6DP1ZQ1MJXLcajmA7WGwmi9BvXtVkrv76AYHjArXSCDuk9-HThwPiIlRar1ZKF--5Qm3WKhAcIIa7ZgKNBubPGaePczBnhmthC5c8SE1Obcib_04zrI5PAED_b7YWWNr0VRGR6wDKEBrHTi83r0hZQmjYdidLMbzpaYe58PGf-Y0qedT9IlQ8t5otgcged3HLd1666c1tQSj0qPfmwz66ClnxGbUXdCgYCeQLXmeV8Mq-XTDysXRGw0xm2R7jJtmO9nxisTM22dBLpYkFu09UtQ0sKvB7hhwWKJiHlJcHigel8eg2dhfFxi6aBtBToEF6nCf0AywR2rraqa28M9aHMlemmYN6osvtSRvDfg_95ItrV-pdmkLLulq7ChfhyFwsVcO5qMn6VY5n7kZrkohozzRw9xCYe5zfzkT3zI9v0c1vc23VbPIt6aIQdwY9NgmTr-AkcKEkgYsfSDV57WOTqlzzjBpx-_Q9cXlYFfeUvWfm5SvIZKuwg1qLCUJOJ-mxlua1XyOl3xIPQEHtxknn0CyMmX4Y6RyXDrA23f_Y4B5yIzc6CYfybq7Qd1eQQY5hJYpskQ8y429PjzBD_eOG1zAl01SP57h0aTTT6GSr_4DqpJyNXNFW3MUsDGFBObSS-pzDatagxTZin2hH8D8La0OaC4HVDbyakkAkEbjsN4peQh9_Hv4jVFef50imws7hcdvDs65TXOuAmPfiYrFX7jqfLwxgYf3bTpmibtiA0LCe8mWGviTNt-GAszH83jWqjdpWKuOh-RFJ77rfdAUUPycpzHmWNLqDPmq8UnQQCWTGZ6_wKBnLNsO7IXyb1rMOLmjUFG_5Us8XkANvCSmbJySNfjVFBygPYtQHlDtXqj5UPIPov746iybqcSCe8_GlwLi4i01EOs8tlozdFkfI2NUA00GATJ4YU9zyXLrfvp9RRoFHbpIoxBdKNQ-hOOqALqvVOmx3XQLIDF4Gp5_E-0V78czfGUIcGf7_XKSPL-KHQ6MtJ6H7UUXiuDDy1wHJveU95jIrhyTaYGb6_zPstr8KGqpQCEwtrdbBKS9aLuZcs2TCkhbUbYx0vkh9cjd0qMXvS3KGjVtYh9R3NYAoaOiCliY-iBB4iyV5-23FAwWozPkdO1PEe55WAdbspXNsB3sSoGYnZJN4ie_QsDBPYepeXz7AHL4VaV7BUxOj_j5Xaryc9niMIpd6loF8aq-8ji5urh4bk0gEkfln4cicbbeEel-LC7yRaOCZsS6-lojhwDbUO5IKYAAv-qrPHgdJ8DqFG59kH_JLVbTqYjdU0x_81buqRb02x0Gc7pTF0B4abZa7_dZPf0dcPhshF4R0bhxwx1oOGu-KcKME4UmJBFyBNb5W_NG-RYGYadjQDAnaY9CzkkGlMG2tMEHds5fxk63F6pP1c2078lURk4HwnvteWOtRTXMXOu8s-o2ToS2hwywPmdQefjC_Q9b6w9-2UOJl_X0aElNgSmavxWEP29q3u-pYPE38TVezIaoQZTrVMLIzPJWS-svVpRF5K3oQjhQpeQOnf5dMF9y6Qw5FPP5Vui8eDqpH_V9XGIy7vp3ODZD_Ygj_ZEMwqG-TXMjcm1BegS4Gdb3FaiH8_pQWvpMEm1EbZVCKKzTW9B7kQG3P70gtX7x-NRhd4gQWBIQOrBzCcgnpxP0vwMvl_yqxPJLGNe8qqKbTmtoHvjFa5NL2g9cQi4UV7CQ7VMRWN5mMtLTSx7QgzPK-YLH8flBGPVvUHWXCPECdXwADK8kiycIyclnOM8-19oXyVTEw7PmLTHNJXyisX3Dmwcv3T3cqCK1cVzKY-uHe8n-Sr5d9rwx_lNLdkbkdtpQju6z4IjVdyaW0PzyhuhxaKxjXnbPbjm0iqzayvy68XldsTOPqGrc51ai3j1O5wybkhy4bbIx8JBHxWwmrLOHxkWp5VbayBZsbf6bXD0ml9PqGXDFPrBFGUoDn3v7oNk6kFn3RCZuKhpTjVfbooS2gPtMnfqnEl_U-GG6KF6vBwMlhCEVzFVr_cIxblrUcOIwqUn1koKo6pliPxuT14j0sn_0d_-lWhhq9GExOggGBEW--ZJgmGEw_dRS8FJYS8OnnyFHa2vhPo9k2_0Opx7kUhEEaeV0RDPQmnQMNBdIFw4tHQG42PKWfHhNJy3ZhKJ96BZ7X7K8NKINFLnBgxywvfzqirw6j4roIgwKh90uTW83OwMp-9txVOIc78vbz1pH4Bc6JNaNbf_W_5bK5CW1M2kApWiMclfFvD9R6Z4-hL__0KIsVBWTQHsdXL2gnZTn3xSgFQxXzPOUz-c826JVInlMuJOnpTv5vdDjdB-yUf7sV82jf3TUG_KNY0EZHeAHy-Y78cfXlpPsKQrK85iOLwLdRYlbc1x-bAml0XwUHVNOKYsRw2zgvryMs1oUcd2v2HcwuOQKYHiW3rVb59XOjUOZfcAdlLnKn29P0I8MQCdDVHaw4uAXXa8DqDZnT6pSVqN0_hmUvRWp_-k3cff1UDo8OB6pr7camp0ImsRQGjHNlfwDuaYD4tx9QJF4KxGiatZtUvAqVgz4uPuIPSzwKXMX-SqxQBjrKbGY9cqxEMgryUlRK72VhMLaMWMRM99W6JZAruQZH9XE1XMa_Y1aqebZrg2S5Sb5c4SPKxAKsUbNOSEdeich0FlfaM-WgiFCbDBV6RYeOkrj_jnJtMpNiGXpy8wPw9pM6C1MMgGbgqihHDc6cjAtUMhQ3synNGJHrwhqUheBobUHD6CCyn7N20gCHTqzr57iHx0UkBWxBr2Wz1dyfIweBldlNywUBIiayDVkmXFXje9wo0QLueKJD86QYEqUU1-g8fgj2rFSE-mWnH3fqlZoBbNxlfkVEhmD4OuETsMwWee7B8Rerxn8kOSQSCpia_RgYd2fetJ_7t0ZJIxJAIvEgIr5tR-HiJKBb-iyKpfj-THE76uuvx-W1cgMfXgPXhOUOSZbPAl4kCqSyYXmbPj1fDQM7Vu5h7QkCpxeIMGmhEA8CYvARc2dlP05kI3hv-C2fw-IhDIM16tvN5ejlA_oFQ2Sje5Cy0ZcP85a7oEAnnuA4nzOKEY4rNRDF90mOoBbcAoldOoi9f_2D269XWzQ6ekutQY6nSSIdvQCnhk6JV2a-fDKn95ChmLJiQSoZGZJDQIDl25PK9xdngN6bHaU2iZ1NZkZledkw1Er4Bc99844Loh7UuSRHXEWpr5Tk--_586vU3iBdvo5phH_kjNhKZkkzfGhZEipA-1rFvo7VFk5yq9VtKSSHFMFOTvdruHtss_AiEz7K6BKrxgkwp3maC7qYVrgGAF0rZWRAWF4bEUAuA94WdbdjAv6YJKKwv_n5O8q1Bl6MyTw00W2N7Rxoocgft7aQA9-kkSyQWJ8a6eTeeOFCG626pVF9wH_7Bxll6DmXX3am-YW379epbSQ90isY_oYJJa8qDQ-xdAVT9IZ0X8Xf3gKwyCMjYEUL9HCebEP15tmoU6loMWs0xVJsx0qKFwnOGD3yB67tCJk1Le7iSLryjtajv_5RHjO6XZ2bxDKVorLJ1q1YExE2rT8znAvY_znQFpck2flyz9ghnA9VxHe1FDFEDTOA7iboor3zEeXWENwN7s2n0MNQ_0bI3Td_MqZgNNZTDRt-yirtvzDXHcsQUSmRSjAussV2Xc_p6fL9GF7CnF2sw0onXSSFdnSVVkQ0jhIepsxNHMaSEoZgcdwUCDUGDbGgI6C9s_m-h2k5GuQoQ2DjspxfGa1eJ7cFjx-4xBWYgnvf6w7RPxkcmluwg1TXVO5loJmuEbA73XCmX-fXc2C7kPflizfSWGigqttwaHd5Ij0G9CbZIjWE2gTVmlxsHUMta8w_QrvTwM7YjuGxEUpCV73gjKydtWmpDCeFMYwmSrBj0rjcip0ShS7iFSyzhBQKNvAYGfXFxunuVkpHbuRl0A_dhQ1u3fEky3yg9fxNJQ4v2BqVz7hOZ15i5MSfTLK-Fgr14B-VVm7-6_q44bWC1WS86pInLU2hgaGhx5PQ5ds7tyQ1Y4k4pfRHBAPcuyat536ARu0meGkKBkiQ_w4hzxP-PDoqJgiDBQBdv-AGIeJ1Lqk_L06if9WBn93cc8eJeij5gDxZgv98WwTn6VARe6OcBjtqABFnLQ9j7099XFef2qeOgcc5l82BBP0Zdk2ckSnfpny67ten-NxeYpHd8PidgJflOjbTrbXSgzmgufxsjc7KZXN_KxBBiSUqIEHpv0F3D3tDFzkuY5eeIMX4lPPPmv9D9KEmQu2d0ZZpuNOtgXyOzBgSVZg5_GKUwS-6kcRlkZr0Eqaw7Zu0vGGO4IxSRqUPdYYNhi55C6NzHrK1WEHrWsZH8jDRkNHXCRB2-qAeeEuCMVsL1ksnMpcYWsVE2FpqXwM1gk4WEAILpjquaYkTEq30AlSZ8JoeOuSIt0Ib9UTB-8LdMsOciN-Pk8SU7EsfcgNshJhU20gU4mZwAYVHbIj-PfljCFPlQz7beFOpvgBIxdtI1qojwOMvv8IHnTY1oEW7EYnV3grX0KeEYIH5CONfwasyUjylxazg9njHidz9YmRD6xvmgYERQt-KlEC6tAJGXeKfomfaagPQXKsZj7QYMIUyEUtSrAlZbU3R4zBKTiUD8R2k73IqgldreUjHgcMxVClNV8bT4JtQDv9sQk7IEUZeCyanpBA-fEC4qbK2BhxC6No14kZtC_UUq-TkAjUgi_za0jNO_aneJjbtJ6SeMnrIDXpMR3CXswGZEAIkkAKtNYtXA7_AcWmd8gXie_YIO5t8HRiAL73r5XvGzP84G4GjRDOJyLc99IWhOnA-mctrieleDDkHqqjCbbeByZHD6PUShugCyD49lBK0B2I2hj-ugC9OJERT2WkFtVbN_8kmv6yY2ma3LAy8rahju7aSZcID7-XoWGQD1ktSEO1n9Splbo9qNkgjzY1FdonkA0SY-NNo-EEXzG10jtlQHwblFaQlngU_XpF8aYXM33XdSs-txF3ndIhFNHXBFt6T8qGogmNpyp6RdtHIBapZBMljfFFbRlQXWR_Mxh0BrF3JovtCEqq9O0Io1VKMTIGUcGEpdJ3RzynUS1NCe3qYMCSDz8xxzTzOcOrYEWcMN4ZBhxos10Azd35b_qu7gsSdFvwrebdFKz7sFMLIBZx_H5dm25XgjZLaN_C37hkvFEA3zI28NnaE-OOBU0f4qQ_EqjSkHYmc6zzjsfgbMuv9APQuNwozSIw8DsITuu3SZdL-oMpgliBTmPuEe2Hw7ZCBySghx5y5F0z5fkwpHqjm2sXtKeo-nHYLaTDnA9TkDNKUywIy1el41EghKWRbglebGo4I7OpN1i_aOnMxSMTk4mxr_mGDNLK-TaCVQ7vFjc-oa0xyuEfwWQDfscZUIdqSLkjFYJb-zM06eSjkaYAcwkCQUMp-tG8SupaGfgqt7vid4Uu3DCj-YVBzXtp3xKeZuKwQNzaRH2PHne6TXvRYqH-5JTbS2CH19tlxrB1z4eE3YRm5DE9HTs4Ujsp5rz_K19LbVpnEo9xaimTg0DVAm474ByldLsTXK12QMKczEccdNhR3FZ3cVBWNO0AvFDqER2bLXoljvnybuf12LvtoxlrhhEkvtu6WKp9HJd0hdfxdeAtChMfq0GfGZ2Zl6jEncdc2QJBVH9bowcS4iuaiBZTqAiISHgGFQbiTaKHnL1_1wxQpA_78oYHxVl-6QXWarRvnVy7slWQn-2ZLp6MflRs5sMtLWJVRb5DizCVz_HAC35N2o6H9o48VhlEohaOqs9DQ9xAMNqwfBWMwafQo2MBgVxGcqhlH-m8QOUTPYUmOot_nFs5ZNrPeYLCr0qFJXiZRwptWbuMhlQkTBskMcrOS72qQ6ETxiw7SuZmbPpH1TpDaajs5kdNL1cTvUIvcGd-LZu-lrFXpWHgjEKBUCEn8UaIWIt7cDleLnHSALr-2PBRGX3qBcM_2HxQ136ti8q0ySxGfGT96zsMHEESbPp6EykcGEtY_KWAQ3Pkt5pV5ALWTIJ9Luk1HM0ziSif0T-Qt_EDcqU7WSwGgOcJ2eKQ5rZKYyH_-6mo8yqHNZmzLDS6QvI_GIXauOQDa2N0wFPAtjDtzpDprmVdgdEla9W7EuDwRjvmNf1wmXCdS7egA3RWOSAQTRqPrJ-EWWPveX3QGg4obvcUQUKzr9iZzlnJDgKw_eHN_aCIM8RQJv-7uZqS6pfdFMO32QNbCcQDJWa5IKgfJNW39gPbm46lhYzKNZqGT_a0ZxNU67dkdV-ywtxNmqOj0iXS2kTfalvF0krCv97rmuYLZhC6AD3PiRXCYgxAkBcuYB7W7B-kFgNEUEXAMIa5VlHzSMeEQ1yTIgoVh-mYu6-LwFnxLkjf5oaolT5L8XyiMz5kkIH3pqoVwe_HwAYx1cpmzjBGmftdNJngYAedpMxDKEIoYugQWU7QsgkFefa-B85c09K8Zl9sRzJ7IJDaoUFHUwUuLSOblWip1_umHhjtUFenUACYy3Z46g5U8t6zv2ueOJ06x8CaMNYT0v2g0YCpxEHjdzcfEpRhAYXUuQ7o8YLpsZO477bqklx_qlCImetz5LFGbV1O0ntKY7_QibsXv_ncMq03Brlz3uiUg5UkxUQm-c-cq9L7_YO3QF3uKqgZCVANryHcUmaRfeOpcRi6vhI8XbQOigvYtCADCfOHNVZGi24FbquLf7YWyS6istwt2Wn3Vr6Ox_oreBSluaxHlOaFsQ0WaYcly4wVLKFkxYRcwLP-hMXsFtTnxudhtt7sip4MUTg381mG3jhw8nZ75TWzzcd9c4sRdJbIGXyuFApsAGWzy1y-1pX33hzubbWj01ui9hT0o91g4CyUB2HrA4JudTkUdtRiCY19YcGI2gJgaCHNIJ-UOzH2Eu26CoQ4mZicJxiRwfscF5FpeKjW5gmimC-gIYbrsD0bPqkQaBF8b6oJiiOrRyHIx3fUaN2gAKmzSl9tGtilodBykJdw7gymVwrBLlz9qiJjC50o63orZhBHyiLh4aMFWYSHCPZOKXVkdcXg6CXiCpXcazFfpg4RKJ6Gx03c8zCxWqW5l6M6jPiYz7-nysZDjKul5jpyyFg_WuIWHW-e4uGTNtNEnMY9vjwQdhNDkDxtOrmyAoe_6noFhoWpVvplGJXynK_XHN6-qZQdX-4SFmMq8HfLq7H_sXzUY4F4pAwHZLX2cLaqDdVQD_zojr5SU3IvPsJPIT67maEAyfM94Jf0XW9pAeqyfTeAUUWe5fXalriRPOT9ONq84NSeZI06iScDDiQEwfB6o3t5yJlNq2Fwo5CSmheYLMZJTcHvezCLB34-VfpLnkQKVsAE7wMusKcAKfxXV7NHNJESlBbhyMzc59Z4h33S3-edcsdbfd9Pg-8xAfIfR1dN8ikn5bgmgmC83LNBLfcg4ngM0EpuK5BhOOV0JDkt-hnys3dG_0C64xKAVMTx_sdYCPxCKM4hWnTkTP7qgZDC0am7DAMXwxYZI0vjdpxUEF2D4SKbYmzYYpIy01G6J8DM3rCojYnRXl-jDiHN1_DMYDS4JWKz9iLiwtjtUL1ajPFf8AN4iPK4biYkR73EWKVCrSc2OEYUzAlrVsTrB8f2mJDvJoRd8Aa513eDDrukw3z3wjaB6F_hrZ2zpoaVoNe6Zx29-cUePmjCIo-pNQYHBPejbg4B88Mn_xnAiKLA-aYGdUbheC7ZZxKOu65cvAYj_vpP83BVTr2z_UZhbc1dtpKtEz317chThsgqcG9fy7LRPs5FZSo-euacxTukqBifdJf0QtzW6BRvj8jbHWTKQAfixzp5kB9u8hMS8B3NYnSEhSO26D24ftx-uj1_6juQJRe3AztpYSX0tygKPtjoJVXd2k8bE_k5xj5H2VXaOtF5BjakgsTX_ywLdSr-Vm9CzAADd2TlZd-8dKawfapyZU05xxeWfI6POfZcmizgxxT1kaKlNrcYFv5a3U8iwsh7SoAyolYJpAF-6ZpNJazBiWjg0GNItKQenhtAvg0thZGRJ7-kKIma477FGHTd3ho5pXMNNZJka_lfMQhOhcZGbIaR1NFEEgYyNsef7Z3wPD2I8K-D43U3Gn47fvx0FLa0ZGI_w0x9nhlRXi7tkz8w6cKAT6IsCb2YrJHZjxTT0P9FoQM7-ArRmCzsGO-hhd_0hNDp_3GXkaRia4k0ipYdoSqgHsUQraFiXTzbna0PXmDXL1p3okdOG8yhhENr8ZtuYgSkT8xFbxKFqEe-yR2HTnxKy3fCq4Aayi6C0R4tyRP5qQE69pk1PZNiRTviA36DBrMuJ1G5rTNMXgK7Om4xhPED2QqN13r6S-zcP0TTkAyz_86HzOk7iY8x2hc8cKJKTILVP1H2QEIVhGWEVnnGOE93k0mqKf8O9q71m5NoVLM3UjvTrPPgTCZaJYNm6bACXMcJRu8GFol14znepTLE7lZhK1Pv3-W2nCEaLhP5_aenoJLh2fOuyHpR_PkA88tK4uqg8Sv_uyhuLe7FAJoD2IcgNan_iZcDLfMpmtV1w1-9GDA-FNJo7-wZYBgcQNkW0Raw_nwZFWkjm-SEBW51KswKYA1ZeXTEhcG92OcGDtQrfYl7qj_yPFzXfFPMYA282J1tidB8NX_IEPI0OeEGsusOE2MtJNA1ZtwYfSqOeOgWnwgNEdA8huWd_JAMtbc4lBHgnoRQTdnFCiuB1SNm_kQpBP31UfFZjTVBTHFRQFck_P5vzESFG5658lcHaPT_CmXgmbTCSVt90Kj3ofuSmX1R617FSMir1vslE9jHTIpuOM-NybYzAmFv_zQo4TYvVxkJmM5jikVaBIju6tcywPVFQ19sRunlCbWUy6uvk7T84nEy2g4ADeLwcGEeIuGIUHcQsKiPQvPZAkoA3AXLFnRTWi45epnFUqHs8v3e3br7mF5j4ztHNWnqxRW09gMD4p0Y7COjWRYnKJuwwuSxRGuVfM9tgTQEoDnvjd3Pxq3Hi9hJNVr0Vdx0zRAPRrvOEXmRlTcFf1UhBIOeEM-TCIE9cGU8oIrLDX-3Toxn-gAYmNi9kgzmAj5VzToXtqdQjtAR0GSE41pi4xqSSdZkKk6KecUESn5l3dcPsthnmv6qA6GAmjIQES4fHv_D6fYaLot3s3j67PvCL3VYLrqtlhDtwE5t4v873gS201kpj1V6b584BrJVfXWIqYLK8qkJ8iuN9_oja0vKCwyq-n4099QcXG8_s5w1J3Ql2sQtMroXR839yiehkqX24xUcfQFnFJ2A5fio76ufAlQZ7WNeYuRLHtaN0oqg8jCIVDvHwkq12AMfbRdM-PCIGjmdTCjJMa75WDP6ahb80xWW0OSFR8rVMiZ9uvqWa4M72kQNq7SzwzdvhU2FCFCff3WfWP7p9yduSBNVeg",AlwaysLoad:false });window.tbl_pos='';
 mxEntityList={};

if(typeof __initUi2=='function')__initUi2();




};
//-------------equal api js
function inittransaction()
{
  Erp.ServerCommand('init', {
  }
                    ,  function(cmd,args){
                      //token=args.token;
                      //idempotency_id=args.idempotency_id;
                      openGateway(args.idempotency_id,args.token);
                    }
                   );
}
function openGateway(idempotency_id,token) {
  debugger;
  console.log("Here");
  var callback = (response) => {
    console.log("callback",response);
  };
  var onGatewayClosure = (response) => {
    // Any logic on gateway closure. 
    console.log('Gateway closed', response);
  };
  
  var mobileNo="";
  Erp.LoadVariable('val_mobileno',function(){ 
  mobileNo=val_mobileno;
  });

  
  var onSubmitCallback = (response) => {
    Erp.ServerCommand('initfetch', {
      idempotency_id:idempotency_id
    }
                      ,  function(cmd,args){
                        debugger;
                        if(!Fn.IsEmpty(args.data))
                        {
                          debugger;
                          var jdata=JSON.parse(args.data);
                          var formAdharNo=args.adharNo.substr(-4);
                          var arr_empInformation=jdata.data.key_details.hasOwnProperty("AADHAAR") ?jdata.data.key_details.AADHAAR.key_data[0]:'';
                          var apiadharno=arr_empInformation.hasOwnProperty("key_id")? arr_empInformation.key_id.substr(-4) : ""
                          if(Fn.Eq(formAdharNo,apiadharno))
                          {
                            var ent=new Erp.Entity("tbl_VA_employeeinformation", Erp.RecordID);
                            ent.Data("api_reference_id",idempotency_id);
                            ent.Data("apistatuscode",1);
                            ent.Data('tokeninitializetime',Fn.Now())
                            saveEntity(ent).then(function (Result) {
                              Erp.ShowMessage("Verification Successfully! Please Fill Below Form...", "success");
                              Erp.RefreshWindow();
                            }
                                                ).catch(function (error) {
                              console.error("Error:", error);
                              Erp.ShowMessage("An error occurred while processing the data.", "error");
                            }
                                                       );                         
                          }
                          else{
                            Erp.ShowMessage("Adhar Card Not Matched! Please Verify Valid Adhar Number...","error");
                          }
                        }
                      }
                     );
    
  };
  var onErrorCallback = (response) => {
    alert("error")
    debugger;
    console.log("onErrorCallback",response);
    Erp.ShowMessage("Something Went Wrong! Please Try Again Verification Process...","error");
 
  };
  var equalClient = new EqualSDK({
    "client_id": "equal.business.6b858cc3-554d-43fb-9b2b-c23d7e6aaa3e#0f0723b8-7d13-4c00-b2b2-56265ae5b7d6",
    "idempotency_id": idempotency_id,
    "token": token ,// TODO: Need to update this token from init API 
    "mobile":mobileNo,
  }
                                );
  equalClient.openGateway(onSubmitCallback, onErrorCallback);
}
function saveEntity(entity) {
  return new Promise((resolve, reject) => {
    entity.Save(function (Result) {
      resolve(Result);
    }
               );
  }
                    );
}
//---------end equal api js 
Erp.OnLoad.Register(LoadFunction);
function LoadFunction(){
  

  
  
  

  $('#div_alreadysubmitted').show();
  if($('._modal'))
  {
    $('._modal ._sectionOne h6').html(`Dear ${Erp.GetFieldValue('@tbl_va_employeeinformation_firstname')}
,
Before we get started we need to have your identity verified, please proceed to begin with your verification process by clicking the button below.`)
  }
  if (Erp.LayoutMode == "A" && !Fn.IsEmpty(Fn.GetProp("tilesid")))
            {
              Erp.LoadVariable('tbl_pos',function(){ 

              
               if (tbl_pos != null && tbl_pos.length > 0)
                {
                    Erp.SetFieldValue("html_reportinghead", tbl_pos[0]["employeereporting_fid"]);
                    Erp.SetFieldValue("html_category", tbl_pos[0]["employeecategory_fid"]);
                    Erp.SetFieldValue("html_EmployeeType", tbl_pos[0]["employeeothermaster3_fid"]);
                    Erp.SetFieldValue("html_StaffOrientation", tbl_pos[0]["employeeothermaster5_fid"]);
                    Erp.SetFieldValue("html_Subject", tbl_pos[0]["employeeothermaster6_fid"]);
                    Erp.SetFieldValue("html_Division", tbl_pos[0]["employeeothermaster11_fid"]);
                    Erp.SetFieldValue("@lastdrawnssalary", tbl_pos[0]["ctcfromrange"]);
                    Erp.SetFieldValue("@ctc", tbl_pos[0]["ctctorange"]);
                    //Erp.SetFieldValue("@position_fid", Erp.GetProp("tilesid").C2Str());

                }
                });
            }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  Erp.SetFieldValue("htmk_yearlyctc",Erp.GetFieldValue("html_monthlysal")*12);
  var currentDate = moment();
  // Subtracting one year from the current date
  var  TwentyYearAgo = currentDate.subtract(20, 'years');
  M.Datepicker.getInstance($("#html_dob")[0]).gotoDate(TwentyYearAgo._d);
  $('#pnl_personaldetailform div.panel-header').append($("#Button38"))
  $('#pnl_esideclarationform div.panel-header').append($("#Button39"))
  $('#pnl_pfform div.panel-header').append($("#Button40"))
  $('#lbl_welcomemsg').html("Hello "+Erp.GetFieldValue('@tbl_va_employeeinformation_firstname')+" ! Welcome to the team! We're happy to have you on board as you go through the<br> verification process. If you have any questions or need assistance, feel free to reach out. Looking forward to working <br>together and achieving success!");
  if(Erp.GetFieldValue("html_apistatuscode") == "2" && Fn.GetProp("mode")=="_EmpID")
    Erp.SetDisplay("html_EmployeeSubmit",true)
    if(!Fn.IsEmpty(Erp.GetFieldValue("html_api_reference_id")) && Erp.GetFieldValue("html_apistatuscode") == "1" && Fn.GetProp("mode")=="_EmpID")
    {
      Erp.ServerCommand('fetch', {
      }
                        ,  function(cmd,args){
                          
                          
                          var tok1=Erp.Repeater.AddItem("rpt_Familyinfo",null,{})
                          var tok2=Erp.Repeater.AddItem("rpt_qualificationinfo",null,{})
                          Erp.SetDisplay("btn_closequalinfo-"+tok2,false);
                          Erp.SetDisplay("btn_closefamilyinfo-"+tok1,false);
                          Erp.SetParam("html_bankBranch","bankid",Erp.GetFieldValue('html_bank'));
                          if(!Fn.IsEmpty(args.data))
                          {
                            var jdata=JSON.parse(args.data);
                            console.log("data",jdata);
                            Erp.SetDisplay("pnl_verificationPanel",false);
                            var arr_empInformation=jdata.data.key_details.hasOwnProperty("AADHAAR") ?jdata.data.key_details.AADHAAR.key_data[0]:'';
                            var arr_bankinformation=jdata.data.key_details.hasOwnProperty("BANK_ACCOUNT") ?jdata.data.key_details.BANK_ACCOUNT.key_data[0]:'';
                            Erp.SetDisplay("pnl_informationPanel",true);
                            console.log(arr_empInformation)
                            //setting address fields
                            Erp.SetParam(window,"countryname",arr_empInformation.hasOwnProperty("address_country")? arr_empInformation.address_country : "")
                            Erp.SetParam(window,"statename",arr_empInformation.hasOwnProperty("address_state")? arr_empInformation.address_state : "")
                            Erp.LoadVariable(['val_state','val_country'],function(){
                              Erp.SetFieldValue("html_nativepincode",arr_empInformation.hasOwnProperty("address_pincode")? arr_empInformation.address_pincode : "");
                              Erp.SetFieldValue("html_nativecity",arr_empInformation.hasOwnProperty("address_district")? arr_empInformation.address_district : "");
                              Erp.SetFieldValue("html_nativestate",val_state);
                              Erp.SetFieldValue("html_nativecountry",val_country);
                              Erp.SetFieldValue("html_aadharname",arr_empInformation.hasOwnProperty("name")? arr_empInformation.name : "");
                              Erp.SetFieldValue("html_nativebuildingname",arr_empInformation.hasOwnProperty("address_house")? arr_empInformation.address_house : "")
                              Erp.SetFieldValue("html_nativestreetname",arr_empInformation.hasOwnProperty("address_street")? arr_empInformation.address_street : "")
                              Erp.SetFieldValue("html_nativelandmark",arr_empInformation.hasOwnProperty("address_landmark")? arr_empInformation.address_landmark : "")
                              /* Erp.SetEnable("html_nativepincode",Fn.IsEmpty(arr_empInformation.hasOwnProperty("address_pincode")? arr_empInformation.address_pincode : ""))
                              Erp.SetEnable("html_nativecity",Fn.IsEmpty(arr_empInformation.hasOwnProperty("address_district")? arr_empInformation.address_district : ""))
                              Erp.SetEnable("html_nativestate",Fn.IsEmpty(val_state))
                              Erp.SetEnable("html_nativecountry",Fn.IsEmpty(val_country))
                              Erp.SetEnable("html_aadharname",Fn.IsEmpty(arr_empInformation.hasOwnProperty("name")? arr_empInformation.name : ""))
                              Erp.SetEnable("html_nativebuildingname",Fn.IsEmpty(arr_empInformation.hasOwnProperty("address_house")? arr_empInformation.address_house : ""))
                              Erp.SetEnable("html_nativestreetname",Fn.IsEmpty(arr_empInformation.hasOwnProperty("address_street")? arr_empInformation.address_street : ""))
                              Erp.SetEnable("html_nativelandmark",Fn.IsEmpty(arr_empInformation.hasOwnProperty("address_landmark")? arr_empInformation.address_landmark : ""))
                             */
                            }
                                            );
                            if(!Fn.IsEmpty(arr_bankinformation))
                            {
                              // Erp.SetFieldValue('html_bank')
                              // Erp.SetFieldValue('html_bankBranch')
                              Erp.SetParam(window,'bankname',arr_bankinformation.bank_name);
                              Erp.LoadVariable('val_bank_pid',function(){
                                if(!Fn.IsEmpty(val_bank_pid))
                                {
                                  Erp.SetFieldValue('html_bank',val_bank_pid)
                                  Erp.SetParam(window,'bank_pid',val_bank_pid);
                                  Erp.SetParam(window,'ifsc',arr_bankinformation.ifsc);
                                  Erp.LoadVariable('val_bank_branch_pid',function(){
                                    Erp.SetFieldValue('html_bankBranch',val_bank_branch_pid);
                                  }
                                                  );
                                }
                                else{
                                  Erp.SetFieldValue('html_otherbankname',arr_bankinformation.bank_name)
                                }
                              }
                                              );
                              Erp.SetFieldValue('txt_BAN',arr_bankinformation.hasOwnProperty('account_number')?arr_bankinformation.account_number:'')
                              Erp.SetFieldValue('html_ifsccode', arr_bankinformation.hasOwnProperty('ifsc')?arr_bankinformation.ifsc:'')
                            }
                          }
                        }
                       );
    }
  
 //Dushyant(22/04/2024)
  //for mode == principle (HR's view) following fields must be non-mandatory: (aadhar, pan and blood-group)
  //for mode == _EmpID (candidate's view) following fields must be mandatory: (aadhar, pan and blood-group)
  if(Fn.GetProp("mode") == "_EmpID" ){
    Erp.SetMandatory('html_aadhar',true);
    Erp.SetMandatory('html_pan',true);
    Erp.SetMandatory('sel_bloodgroup',true);
     Erp.SetMandatory('html_aadharname',true);
  }
  //expected date and scheduled date fields 
  
//Dushyant(22/04/2024) end of code
  
 
}
/****************************************************************************************************************/
function btn_addfamilyinfo_Click(elem){
  Erp.Repeater.AddItem('rpt_Familyinfo',null,{
  }
                      );
}
/****************************************************************************************************************/
function btn_prevemployerdetail_Click(elem){
  Erp.Repeater.AddItem('rpt_prevemployerinfo',null,{
  }
                      );
}
/****************************************************************************************************************/
function Checkbox1_Change(elem,data,field){
  if($('#Checkbox1').is(':checked')){
    Erp.SetFieldValue('html_currentbuildingname',Erp.GetFieldValue('html_nativebuildingname'));
    Erp.SetFieldValue('html_currentstreetname',Erp.GetFieldValue('html_nativestreetname'));
    Erp.SetFieldValue('html_currentlandmark',Erp.GetFieldValue('html_nativelandmark'));
    Erp.SetFieldValue('html_currentcity',Erp.GetFieldValue('html_nativecity'));
    Erp.SetFieldValue('html_currentState',Erp.GetFieldValue('html_nativestate'));
    Erp.SetFieldValue('html_currentcountry',Erp.GetFieldValue('html_nativecountry'));
    Erp.SetFieldValue('html_cureentpincode',Erp.GetFieldValue('html_nativepincode'));
  }
  else
  {
    Erp.SetFieldValue('html_currentbuildingname','');
    Erp.SetFieldValue('html_currentstreetname', '');
    Erp.SetFieldValue('html_currentlandmark','');
    Erp.SetFieldValue('html_currentcity','');
    Erp.SetFieldValue('html_currentState','');
    Erp.SetFieldValue('html_currentcountry','');
    Erp.SetFieldValue('html_cureentpincode','');
  }
}
/****************************************************************************************************************/
function btn_Qualificationinfo_Click(elem){
  Erp.Repeater.AddItem('rpt_qualificationinfo',null,{
  }
                      );
}
/****************************************************************************************************************/
function SavingParentId(repeaterId,args){
  args.entity.Data('employeeinformartion_fid',Erp.RecordID);
}
/**********************************************Upload Attachment
******************************************************************/
function uploadattachment(repid)
{
  var repname = Erp.Repeater.GetItemCount(repid);
  if(repid=="rpt_selfimagge")
  {
   Erp.ShowFileUpload({
      fileExt: "jpg,jpeg,png", fileSize:25,parent:"", showLink: true,linkUrl:"../temp/test.gif", title: "Upload File", 
      onUploadComplete: function(r,o){
        debugger;
        var dtype = Fn.Replace(repid,'rpt_','') ;
        Erp.Repeater.AddItem(repid, null, {
          attachment:r.tempUrl,attachment_preview:r.fileName,ext:r.fileName,doctype:Fn.Trim(dtype)}
                            )
        $("#"+repid+"-ctr").find(".note-add").hide();
        Erp.ShowMessage('Your document uploaded successfully','success')
      }
      , onUploadCancel:  function(options){
      }
    }
                      );
  
  
  }
  //rpt_BankAccountdetails
  
  else if( repid=="rpt_uploadcertificate" || repid=="rpt_personaldetail" || repid=="rpt_hiringform" || repid=="rpt_bgverification" ||repid=="rpt_EsiDeclaration" ||repid=="rpt_pfform" ||repid=="rpt_resume" || repid=="rpt_others" || repid=="rpt_passport"||repid=="rpt_pan" ||repid=="rpt_voterid" ||repid=="rpt_drivinglicence" ||repid=="rpt_aadhar" ||repid=="rpt_payslip" || repid=="rpt_relievingletter" || repid == 'rpt_canclecheck' || repid=="rpt_BankAccountdetails"){
    Erp.ShowFileUpload({
      fileExt: "jpg,jpeg,png,bmp,pdf,xlsx,xls,docx,doc,rtf,pptx,zip,rar,bak,pib,mdf,ldf,sbr,db,xml,exe,msi", fileSize:25,parent:"", showLink: true,linkUrl:"../temp/test.gif", title: "Upload File", 
      onUploadComplete: function(r,o){
        debugger;
        var dtype = Fn.Replace(repid,'rpt_','') ;
        Erp.Repeater.AddItem(repid, null, {
          attachment:r.tempUrl,attachment_preview:r.fileName,ext:r.fileName,doctype:Fn.Trim(dtype)}
                            )
        $("#"+repid+"-ctr").find(".note-add").hide();
        Erp.ShowMessage('Your document uploaded successfully','success')
      }
      , onUploadCancel:  function(options){
      }
    }
                      );
  }
}
/****************************************************************************************************************/
function html_date_Load(elem,data,field){
  var date =Fn.Today() 
  if (Erp.LayoutMode=='A'){
    Erp.SetFieldValue('html_date',date)
  }
}
/****************************************************************************************************************/
function btn_closefamilyinfo_Click(elem){
  if(Erp.Repeater.GetItemCount("rpt_Familyinfo")>1)
    Erp.Repeater.DeleteItem(elem.attr('rpt-tk'));
}
/****************************************************************************************************************/
function btn_closeprevemployerinfo_Click(elem){
  if(Erp.Repeater.GetItemCount("rpt_prevemployerinfo")>1)
    Erp.Repeater.DeleteItem(elem.attr('rpt-tk'));
}
/****************************************************************************************************************/
function btn_closequalinfo_Click(elem){
  if(Erp.Repeater.GetItemCount("rpt_qualificationinfo")>1)
    Erp.Repeater.DeleteItem(elem.attr('rpt-tk'));
}
/****************************************************************************************************************/
function keyevent_uploaddoc() {
  event.preventDefault();
}
/****************************************************************************************************************/
function isImg(img){
  if(!Fn.IsEmpty(img))
  {
    var ext=Fn.ToLowerCase(img.split('.')[img.split('.').length-1])
    return ",gif,jpg,jpe*,png,bmp,dib,tif,wmf,ras,eps,pcx,pcd,tga,".indexOf("," + ext + ",")>-1 || ext.indexOf("jpe")>-1
  }
}
function getbody1(imgurl)
{
  Erp.OpenWindow(imgurl);
}
function getAttClass(im)
{
  return im;
}
/****************************************************************************************************************/
function getExtClass(img)
{
  if(!Fn.IsEmpty(img))
    return img.split('.')[img.split('.').length-1]
    }
/****************************************************************************************************************/
function deletedocs(a,b)
{
  Erp.ShowDialog({
    title:'Take Action',message:'Do you wish to delete?',iconText:'&#xf1f8;'}
                 ,'Yes,No',function(cmd){
                   if(cmd=="Yes")
                   {
                     deletefl = a;
                     $("[rpt-tk="+b+"]").parent().parent().find(".note-add").show()
                     Erp.Repeater.DeleteItem(b,true);
                   }
                 }
                );
}
Erp.OnSaveSuccess.Register(SaveSuccessFunction);
function SaveSuccessFunction(){
  if(isRPTSave)
  {
    // Erp.Repeater.SaveChanges(['rpt_Familyinfo','rpt_prevemployerinfo','rpt_qualificationinfo','rpt_uploadcertificate','rpt_personaldetail','rpt_hiringform','rpt_bgverification','rpt_EsiDeclaration','rpt_pfform','rpt_resume','rpt_selfimagge','rpt_others','rpt_passport','rpt_pan','rpt_voterid','rpt_drivinglicence','rpt_aadhar','rpt_relievingletter','rpt_canclecheck','rpt_payslip']);
    Erp.Repeater.SaveChanges(['rpt_Familyinfo','rpt_prevemployerinfo','rpt_qualificationinfo','rpt_BankAccountdetails','rpt_personaldetail','rpt_hiringform','rpt_bgverification','rpt_EsiDeclaration','rpt_pfform','rpt_resume','rpt_selfimagge','rpt_others','rpt_passport','rpt_pan','rpt_voterid','rpt_drivinglicence','rpt_aadhar','rpt_relievingletter','rpt_canclecheck','rpt_payslip']);
    isRPTSave=false;
  }
}
/***********************************************pan validation*****************************************************************/
function html_pan_Valid(elem,data,field){
  if(!Fn.IsEmpty(Erp.GetFieldValue('@tbl_va_employeeinformation_currentstatus')) ){
  var inputvalues = Erp.GetFieldValue('html_pan');
  var valpan = Fn.ToLowerCase(Fn.CharAt(inputvalues,3))
  var regex = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  if((Erp.LayoutMode=="A") || (Erp.LayoutMode=="E") )
  {
    if(!regex.test(inputvalues)){
      return 'invalid PAN no';
    }
  }
}
}
/************************************************Aadhar Validation****************************************************************/
function html_aadhar_Valid(elem,data,field){
  var regex=/^\d+$/;
  var isValid=regex.test(data);
  
  debugger;
  if(!Fn.IsEmpty(Erp.GetFieldValue('@tbl_va_employeeinformation_currentstatus')) )
  {
  if(Fn.IsEmpty(data) && Fn.GetProp("mode") == "_EmpID")
    return "Field Is Mandatory"
    else if(!isValid)
    {
      return 'Should contain only numbers not alphabets or other special characters'
    }
  else if(data.length!=12)
  {
    return "Should contain 12 Digits AadharCard Number"}
  }
}
/************************************************Personal phone validation****************************************************************/
function html_phone_Valid(elem,data,field){
  var regex=/^\d+$/;
  var isValid=regex.test(data);
  if(Fn.IsEmpty(data))
    return "Field Is Manadatory";
  
  if(!isValid){
    return 'Should contain only numbers not alphabets or other special characters'
  }
  if(Fn.CStr(data).length!=10){
    return "Should contain 10 Digits Mobile Number"
  }
}
/************************************************Company Name Validation****************************************************************/
function html_companyname_Valid(elem,data,field){
  var regex = /^[A-Za-z]*$/
  var isValid = regex.test(data);
  if(Fn.IsEmpty(data))
    return "Field Is Mandatory"
    else if (!isValid) {
      return 'Should contain only alphabets not numbers or other special characters'
    }
}
/*************************************************Year of passing Validation***************************************************************/
function html_yearofpassing_Valid(elem,data,field){
  var regex=/[0-9]/
  var isValid=regex.test(data);
  if(Fn.IsEmpty(data))
    return "Field Is Mandatory"
    else if(!Fn.IsEmpty(data) && !isValid){
      return 'Should contain only numbers not alphabets or other special characters'
    }
  if(Fn.IsEmpty(data)==false && data.length!=4)
  {
    return "Year should contain only 4 digit"
  }
}
/************************************************Emergency Contact No. Validation****************************************************************/
function html_emergencycontact_Valid(elem,data,field){
  var regex=/^\d+$/;
  var isValid=regex.test(data);
  var Pcontact = Erp.GetFieldValue('html_phone')
  var Econtact = Erp.GetFieldValue('html_emergencycontact')
  if(Fn.IsEmpty(data))
    return "Field Is Mandatory"
    else if(!isValid){
      return 'Should contain only numbers not alphabets or other special characters'
    }
  else if(Fn.CStr(data).length!=10){
    return "Should contain 10 Digits Mobile Number"
  }
  else if (Pcontact==Econtact)
  {
    return('Please enter different number in Emergancy contact number')
  }
}
/**********************************************IFSC Code Validation*******************************************************************/
function html_ifsccode_Valid(elem,data,field){
  var regex = /^[0-9a-zA-Z]+$/
  var isValid=regex.test(data);
  if(Fn.IsEmpty(data))
    return "Field Is Mandatory"
    else if (!isValid) {
      return 'Should contain only alphabets and numbers. No special characters.'
    }
}
/************************************************ESIC Validation****************************************************************/
function html_esic_Valid(elem,data,field){
  var regex=/^\d+$/;
  var isValid=regex.test(data);
  if( !Fn.IsEmpty(data) && !isValid){
    return 'Should contain only numbers not alphabets or other special characters'
  }
}
/************************************************PF UAN Validation****************************************************************/
function html_UAN_Valid(elem,data,field){
  var regex=/^\d+$/;
  var isValid=regex.test(data);
  if(Fn.IsEmpty(data)==false && !isValid)
  {
    return 'Should contain only numbers not alphabets or other special characters'
  }
  if(Fn.IsEmpty(data)==false && data.length!=12)
  {
    return "Should contain 12 Digits UAN Number"
  }
}
/************************************************Current Pincode Validation****************************************************************/
function html_cureentpincode_Valid(elem,data,field){
  var regex=/^\d+$/;
  var isValid=regex.test(data);
  data=Fn.CStr(data)
  if(!isValid){
    return 'Should contain only numbers not alphabets or other special characters'
  }
  if(Fn.CStr(data).length!=6){
    return "Should contain 6 Digits Pincode"
  }
}
/*************************************************Bank No. Validation***************************************************************/
function txt_BAN_Valid(elem,data,field){
  var regex=/^\d+$/;
  var isValid=regex.test(data);
  if(Fn.IsEmpty(data))
    return "Field Is Mandatory"
    else if (!isValid ) {
      return 'Should contain only numbers not alphabets or other special characters'
    }
}
/*************************************************Email Validation***************************************************************/
function html_Email_Valid(elem,data,field){
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(Fn.IsEmpty(data))
    return "Field Is Manadatory";
  
  if(!emailPattern.test(Erp.GetFieldValue('html_Email')))
  {
    return "You have entered an invalid email address!!!";
  }
  else if(Fn.IsEmpty(Erp.GetFieldValue('html_Email')))
  {
    return "Email should not be blank!";
  }
}
/*************************************************Aadhar Name Validation Validation***************************************************************/
function html_aadharname_Valid(elem,data,field){
  var regex = /^[A-Za-z ].*$/
  var num = /[0-9]/;
  var isValid = regex.test(data);
  var numValid = num.test(data);
  if (Fn.IsEmpty(data)==false && (!isValid || numValid)) {
    return 'Should contain only alphabets not numbers or other special characters'
  }
  
   if(Fn.IsEmpty(Erp.GetFieldValue('html_aadharname')) && Fn.GetProp("mode") == "_EmpID" )
  {
    return "Aadhar Name should not be blank!";
  }
}
/***************************************************To Date Validation*************************************************************/
function html_todate_Valid(elem,data,field){
  var from =  Erp.GetFieldValue('html_Fromdate-'+elem.attr('rpt-tk'));
  var to =  Erp.GetFieldValue('html_todate-'+elem.attr('rpt-tk'));
  if(Fn.IsEmpty(to))
    return "Field Is Mandatory ";
  else if (from >= to)
  {
    //Erp.ShowMessage('To Date must be greater than From Date','alert');
    return 'To Date must be greater than From Date';
  }
}
/***************************************************Save*************************************************************/
var isRPTSave=false;
function btn_Save_Click(elem){
  Erp.ShowDialog('Do you wish to Save?',[{
    label:'Yes',value:'btnYes',class:'btn-yes'}
                                         ,{
                                           label:'Cancel'}
                                        ],function(cmd){
                                          if(cmd == 'Yes')
                                          {
                                            //if (Erp.ValidateData('Pnl_Basicinfo') && Erp.ValidateData('pnl_presentaddr') && Erp.ValidateData('pnl_permanentaddr') && Erp.ValidateData('pnl_familyinfo') && Erp.ValidateData('pnl_PrevEmployerInfo') && Erp.ValidateData('pnl_qualificationinfo') && Erp.ValidateData('pnl_bankinfo') && Erp.ValidateData('pnl_salaryaccinfo')) 
                                            if(Erp.ValidateData())
                                            {
                                              Erp.SetFieldValue("html_api_reference_id","123");
                                              Erp.SetFieldValue("html_apistatuscode","2");
                                              Erp.SaveWindow();
                                              isRPTSave=true;
                                              Erp.SetDisplay('html_EmployeeSubmit',true);
                                            }
                                          }
                                        }
                );
}
function rpt_Familyinfo_SaveComplete(repeaterId,args){
  console.log(repeaterId);
}
function rpt_prevemployerinfo_SaveComplete(repeaterId,args){
  console.log(repeaterId);
}
function rpt_qualificationinfo_SaveComplete(repeaterId,args){
  console.log(repeaterId);
}
function rpt_uploadcertificate_SaveComplete(repeaterId,args){
}
function btnSave_Click(elem){
}
function rpt_prevemployerinfo_ItemDataBound(repeaterId,args){
  if(Erp.LayoutMode!='A' && !Fn.IsEmpty(Erp.GetFieldText('html_relievingletter-'+args.token)))
  {
    var anchorElement = $("<a>").attr({
      "href": Erp.GetFieldText('html_relievingletter-'+args.token), target: "_blank"}
                                     );
    // Wrap the div element with the anchor element
    $('#btn_relievingletter_preview-'+args.token).wrap(anchorElement);
    Erp.SetDisplay('btn_relievingletter_preview-'+args.token,true)
  }
  if(Erp.LayoutMode!='A' && !Fn.IsEmpty(Erp.GetFieldText('html_payslip-'+args.token)))
  {
    var anchorElement = $("<a>").attr({
      "href": Erp.GetFieldText('html_payslip-'+args.token), target: "_blank"}
                                     );
    // Wrap the div element with the anchor element
    $('#btn_payslip_preview-'+args.token).wrap(anchorElement);
    Erp.SetDisplay('btn_payslip_preview-'+args.token,true)
  }
  if(Erp.LayoutMode!='A' && !Fn.IsEmpty(Erp.GetFieldText('html_experiencecertificate-'+args.token)))
  {
    var anchorElement = $("<a>").attr({
      "href": Erp.GetFieldText('html_experiencecertificate-'+args.token), target: "_blank"}
                                     );
    // Wrap the div element with the anchor element
    $('#btn_experiencecertificate_preview-'+args.token).wrap(anchorElement);
    Erp.SetDisplay('btn_experiencecertificate_preview-'+args.token,true)
  }
}
function btn_cancel_Click(elem){
  Erp.CloseWindow();
}
function html_NativeemergencyContact_Valid(elem,data,field){
  var regex=/^\d+$/;
  var isValid=regex.test(data);
  if(!Fn.IsEmpty(data) && !isValid){
    return 'Should contain only numbers not alphabets or other special characters'
  }
  if(!Fn.IsEmpty(data) && Fn.CStr(data).length!=10){
    return "Should contain 10 Digits Mobile Number"
  }
}
const buttonToTabLinkMap = {
  "btn_Next": "#tab_addressinfo-tabLink",
  "btn_Next1": "#tab_addressinfo-tabLink",
  "Button16": "#TabPanel5-tabLink",
  "Button18": "#TabPanel6-tabLink",
  "Button20": "#TabPanel7-tabLink",
  "Button22": "#TabPanel9-tabLink",
  "Button24": "#TabPanel9-tabLink",
  "Button26": "#TabPanel10-tabLink",
  "Button28": "#TabPanel11-tabLink",
  "Button30": "#TabPanel12-tabLink",
  "btn_prev": "#tab_Basicinfo-tabLink",
  "Button15": "#tab_Basicinfo-tabLink",
  "Button17": "#tab_addressinfo-tabLink",
  "Button21": "#TabPanel6-tabLink",
  "Button19": "#TabPanel5-tabLink",
  "Button23": "#TabPanel7-tabLink",
  "Button25": "#TabPanel7-tabLink",
  "Button27": "#TabPanel9-tabLink",
  "Button29": "#TabPanel9-tabLink",
  "Button31": "#TabPanel11-tabLink",
  // Add more mappings as needed
};
function navigateToTab(tabLinkId) {
  $(tabLinkId).click();
}
function Button_Click(elem) {
  var buttonId = elem.context.id;
  var tabLinkId = buttonToTabLinkMap[buttonId];
  if(Erp.LayoutMode != "R")
  {
    if (tabLinkId == '#tab_categoryinfo-tabLink') {
      if(Erp.ValidateData('Pnl_Basicinfo'))
      {
        Erp.SaveWindow('Pnl_Basicinfo');
        navigateToTab(tabLinkId);
      }
      else {
        return;
      }
    }
    else if(tabLinkId == '#tab_addressinfo-tabLink')
    {
      if(buttonId=="Button17")
      {
        navigateToTab(tabLinkId);
      }
      else if(Erp.ValidateData('Pnl_Basicinfo'))      {
        Erp.SaveWindow('Pnl_Basicinfo');
        Erp.SetEnable('tab_addressinfo-tabLink',true);
        navigateToTab(tabLinkId);
      }
      else {
        return;
      }
      //==================//
    }
    else if(tabLinkId == '#tab_Basicinfo-tabLink')
    {
      navigateToTab(tabLinkId);
    }
    else if(tabLinkId == '#TabPanel5-tabLink')
    {
      if(buttonId=="Button19")
        navigateToTab(tabLinkId);
      else if(Erp.ValidateData('Pnl_Addressinfo'))      {
        Erp.SaveWindow('Pnl_Addressinfo');
        Erp.SetEnable('TabPanel5-tabLink',true)
        navigateToTab(tabLinkId);
      }
      else
      {
        return;
      }
    }
    else if(tabLinkId == '#TabPanel6-tabLink')
    {
      if(buttonId=="Button21")
        navigateToTab(tabLinkId);
      else if(Erp.ValidateData('pnl_familyinfo'))
      {
        //Erp.SaveWindow('pnl_familyinfo');
        Erp.Repeater.SaveChanges("rpt_Familyinfo");
        Erp.SetEnable('TabPanel6-tabLink',true)
        navigateToTab(tabLinkId);
      }
      else
      {
        return;
      }
    }
    else if(tabLinkId == '#TabPanel7-tabLink')
    {
      if(buttonId=="Button25")
        navigateToTab(tabLinkId);
      else if(Erp.ValidateData('pnl_PrevEmployerInfo'))
      {
        Erp.Repeater.SaveChanges("rpt_prevemployerinfo");
        Erp.Repeater.SaveChanges("rpt_payslip");
        Erp.Repeater.SaveChanges("rpt_relievingletter");
        Erp.SetEnable('TabPanel7-tabLink',true)
        navigateToTab(tabLinkId);
      }
      else
      {
        return;
      }
    }
    else if(tabLinkId == '#TabPanel8-tabLink')
    {
      if(Erp.ValidateData('pnl_qualificationinfo'))
      {
        Erp.SaveWindow('pnl_qualificationinfo');
        Erp.SetEnable('TabPanel8-tabLink',true)
        navigateToTab(tabLinkId);
      }
      else
      {
        return;
      }
    }
    else if(tabLinkId == '#TabPanel9-tabLink')
    {
      if(buttonId=="Button27" ||buttonId=="Button29")
        navigateToTab(tabLinkId);
      else if(Erp.ValidateData('pnl_qualificationinfo'))
      {
        Erp.Repeater.SaveChanges("rpt_qualificationinfo");
        Erp.Repeater.SaveChanges("rpt_uploadcertificate");
        Erp.SetEnable('TabPanel9-tabLink',true)
        navigateToTab(tabLinkId);
      }
      else
      {
        return;
      }
    }
    else if(tabLinkId == '#TabPanel10-tabLink')
    {
      if(Erp.ValidateData('pnl_bankinfo'))
      {
        Erp.SaveWindow('pnl_bankinfo');
        Erp.SetEnable('TabPanel10-tabLink',true)
        navigateToTab(tabLinkId);
      }
      else
      {
        return;
      }
    }
    else if(tabLinkId == '#TabPanel11-tabLink')
    {
      if(buttonId=='Button31')
        navigateToTab(tabLinkId);
      else if(Erp.ValidateData('pnl_bankinfo'))
      {
        if(Erp.Repeater.GetItemCount("rpt_BankAccountdetails")<=0)
        {
          $('#pnl_passbook').children("div.panel-header").children("span.hidelang").hide();
          $('#pnl_passbook').children("div.panel-header").append('<span style="color:red;"  class="hidelang" > Field is mandatory *</span>')
          Erp.ShowMessage('Please Upload Bank Passbook','alert');       
        
        }
        else
        {
          $('#pnl_passbook').children("div.panel-header").children("span.hidelang").hide();
          $('#pnl_passbook').children("div.panel-header").css('border','');
          
          
          
           Erp.SaveWindow('pnl_bankinfo');
        Erp.Repeater.SaveChanges('rpt_canclecheck');
        Erp.Repeater.SaveChanges('rpt_BankAccountdetails');
        Erp.SetEnable('TabPanel11-tabLink',true)
        navigateToTab(tabLinkId);
        
        }
        
        
       
      }
      else
      {
        return;
      }
    }
    else if(tabLinkId == '#TabPanel12-tabLink')
    {
      var isdeclared=Erp.GetFieldValue('chk_declaration_statement')
      var rep1=Erp.Repeater.GetItemCount('rpt_pan');
      var rep2=Erp.Repeater.GetItemCount('rpt_aadhar');
      var rep3=Erp.Repeater.GetItemCount('rpt_selfimagge');
      
      if(rep1 <=0 || rep2<=0 || !isdeclared || rep3<=0){
        if(!isdeclared)
        {
          Erp.RaiseError([{
            id:'chk_declaration_statement',error:'Field is mandatory'}
                         ])
        }
        else if(isdeclared)
        {
          Erp.ClearErrors();
        }
        if(rep1<1)
        {
          $('#pnl_pancard').children("div.panel-header").children("span.hidelang").hide();
          $('#pnl_pancard').children("div.panel-header").append('<span style="color:red;"  class="hidelang" > Field is mandatory *</span>')
          Erp.ShowMessage('Please Upload PAN','alert');
          //return false;
        }
        if(rep1>0)
        {
          $('#pnl_pancard').children("div.panel-header").children("span.hidelang").hide();
          $('#pnl_pancard').children("div.panel-header").css('border','');
        }
        if(rep2<1)
        {
          $('#pnl_AdharCard').children("div.panel-header").children("span.hidelang").hide();
          $('#pnl_AdharCard').children("div.panel-header").append('<span style="color:red;"  class="hidelang" > Field is mandatory *</span>')
          Erp.ShowMessage('Please Upload Aadhar','alert');
          //return false;
        }
        if(rep2>0)
        {
          $('#pnl_AdharCard').children("div.panel-header").children("span.hidelang").hide();
          $('#pnl_AdharCard').children("div.panel-header").css('border','');
        }
        
        
          if(rep3<1)
        {
          $('#pnl_selfimage').children("div.panel-header").children("span.hidelang").hide();
          $('#pnl_selfimage').children("div.panel-header").append('<span style="color:red;"  class="hidelang" > Field is mandatory *</span>')
          Erp.ShowMessage('Please Upload Passport Size Photograph','alert');
          //return false;
        }
        if(rep3>0)
        {
          $('#pnl_selfimage').children("div.panel-header").children("span.hidelang").hide();
          $('#pnl_selfimage').children("div.panel-header").css('border','');
        }
        
        
        
        
        return;
      }
      else{
        
        
        
           $('#pnl_pancard').children("div.panel-header").children("span.hidelang").hide();
          $('#pnl_pancard').children("div.panel-header").css('border','');        
        $('#pnl_selfimage').children("div.panel-header").children("span.hidelang").hide();
          $('#pnl_selfimage').children("div.panel-header").css('border','');
        $('#pnl_AdharCard').children("div.panel-header").children("span.hidelang").hide();
          $('#pnl_AdharCard').children("div.panel-header").css('border','');
        
        Erp.Repeater.SaveChanges(['rpt_aadhar','rpt_drivinglicence','rpt_voterid','rpt_pan','rpt_passport','rpt_others','rpt_selfimagge','rpt_EsiDeclaration','rpt_pfform','rpt_resume','rpt_personaldetail','rpt_hiringform','rpt_bgverification']);
        Erp.SetEnable('TabPanel12-tabLink',true);
        navigateToTab('#TabPanel12-tabLink');
        /*if(Fn.GetProp('mode')=='_appr'){
        Erp.SetEnable('tab_HR-tabLink',true);
        navigateToTab('#tab_HR-tabLink');
        //Erp.SetDisplay('ColumnPanel10',false);
      }
      else if(Fn.GetProp('mode')=='_EmpID')
      {
        Erp.SetEnable('TabPanel12-tabLink',true);
        navigateToTab('#TabPanel12-tabLink');
      }*/
      }
    }
  }
  else
  {
    navigateToTab(tabLinkId);
  }
}
function html_dob_Valid(elem,data,field){
  if(Fn.IsEmpty(Erp.GetFieldValue('html_dob')))
  {
    return "Field Is Manadatory";
  }
  else
  {
    var dob = Erp.GetFieldValue('html_dob');
    var currentDate = new Date().format('yyyy-MM-dd');
    var dob1 = new Date(dob);
    var currentdate1 =  new Date(currentDate);
    var diffInMs = currentdate1 - dob1;
    var ageDate = new Date(diffInMs);
    var age = ageDate.getUTCFullYear() - 1970;
    if(age<18)
    {
      return "Age should be greater then 18 years.";
    }
  }
}
function btn_saveHr_Click(elem){
  if(Fn.GetProp('mode')=='_appr' && Fn.IsEmpty(Erp.GetFieldValue('html_empcode'))&&Fn.GetProp('mode')=='CR')
  {
    Erp.SetDisplay('tab_HR',true)
    Erp.RaiseError([{
      id:'html_empcode',error:'Employee code is mandatory'}
                   ]);
    return;
  }
  else {
    Erp.SetDisplay('tab_HR',false)
    Erp.SaveWindow();
    Erp.ShowMessage('Changes Saved Successfully!','success');
  }
}
function btn_cancelHr_Click(elem){
  parent.Erp.Grid.Refresh("dgData");
  Erp.CloseWindow();
}
function btn_submitWorkFlow(elem){
  /*if(Fn.GetProp('mode')=='_appr' && Fn.IsEmpty(Erp.GetFieldValue('html_empcode'))&&Fn.GetProp('mode'=='CR'))
  {
    Erp.RaiseError([{
      id:'html_empcode',error:'Employee code is mandatory'}
                   ]);
    return;
  }
  else
  {*/
  //if(elem.attr("tag")!="reject" &&  Erp.ValidateData())
  {
    var action =elem.attr('id')=='html_EmployeeSubmit' ? ' submit ' :elem.attr('tag')
    var msg='Do you wish to '+action+'?';
    if(elem.attr('id')=='html_EmployeeSubmit' )
      msg="Prior to submission, please thoroughly review the information provided in the form,</br> as once submitted, editing or resubmitting will not be possible. Take a moment to <br> ensure that all details are accurate and complete before finalizing your submission.";
    Erp.ShowDialog({
      title:'Take Action',message:msg,iconText:''}
                   ,'Yes,No',function(cmd){
                     if(cmd=="Yes")
                     {
                       //if(Erp.ValidateData() || elem.attr("tag")=="reject")
                       if(Erp.ValidateData('Pnl_Basicinfo') && Erp.ValidateData('pnl_presentaddr') && Erp.ValidateData('pnl_permanentaddr') && Erp.ValidateData('pnl_familyinfo') && Erp.ValidateData('pnl_PrevEmployerInfo') && Erp.ValidateData('pnl_qualificationinfo') && Erp.ValidateData('pnl_bankinfo') && Erp.ValidateData('pnl_salaryaccinfo') && Erp.ValidateData('ColumnPanel20')) 
                       {
                         isRPTSave=true;
                         //Erp.SaveWindow();                         
                         Erp.ServerCommand('submit', {
                           status:elem.attr('tag'),recid:Erp.RecordID}
                                           ,  function(cmd,args){
                                             if(Fn.GetProp("mode")=="_EmpID")
                                             {
                                               Erp.SetFieldValue("html_apistatuscode","3");
                                               Erp.SaveWindow();
                                             }
                                             if(elem.attr('id')=="html_EmployeeSubmit")
                                             {
                                               $("#divsuccess").addClass("popup--visible");
                                               $(".popup__background:first").css("position","fixed")
                                               Erp.ShowDialog({
                                                 title:'',message:'',icon:'N/A'
                                                 ,closeOnEscape: true,    onOpened: function () {
                                                   Erp.SetDisplay('pnl_informationPanel',false);
                                                   $(".iziToast-buttons").css("width","100%");
                                                   $(".iziToast-buttons button").css("width","100%");
                                                   $("#form1").hide();
                                                 }
                                                 ,
                                                 closeOnClick: true,onClosed: function () {
                                                  Erp.CloseWindow()
                                                 }
                                                 ,onOpening: function () {
                                                 }
                                               }
                                                              ,'','div_success',function(cmd){
                                                              }
                                                             );
                                             }
                                             else
                                             {
                                               parent.Erp.Grid.Refresh("dgData");
                                               parent.Erp.ShowMessage('Workflow Initiated Successfully','success');
                                               Erp.CloseWindow();
                                             }
                                             parent.Erp.ShowMessage('Workflow Initiated Successfully','success');
                                             Erp.CloseWindow();
                                           }
                                          );
                       }
                     }
                   }
                  );
  }
  //}
}
function html_Cancel_Click(elem){
  Erp.CloseWindow();
}
function html_Save_Click(elem){
  Erp.ShowDialog({
    message:'Do you wish to Save?',iconText: ''}
                 ,[{
                   label:'Yes',value:'btnYes',class:'btn-yes'}
                   ,{
                     label:'Cancel'}
                  ],function(cmd){
                    if(cmd == 'Yes')
                    {
                      Erp.SetFieldValue("html_ReportStatus","Principle");
                      //if(Erp.ValidateData('Pnl_Basicinfo'))
                      if(Erp.ValidateData())
                      {
                        Erp.SaveContainer('Pnl_Basicinfo');
                        Erp.SetDisplay("html_Save",false);
                        Erp.CloseWindow();
                        if(Erp.LayoutMode=="A")
                          parent.Erp.CloseWindow();
                        parent.parent.Erp.Grid.Refresh("dgData");
                        //parent.parent.Erp.RefreshWindow();
                        parent.parent.Erp.ShowMessage('Changes Saved Successfully!','success');
                      }
                    }
                  }
                );
}
function rpt_selfimagge_SaveComplete(repeaterId,args){
}
function rpt_drivinglicence_SaveComplete(repeaterId,args){
}
function rpt_aadhar_SaveComplete(repeaterId,args){
}
function html_reasonofleaving_Change(elem,data,field){
  
}
function html_dob_Change(elem,data,field){
  const dob = Erp.GetFieldValue('html_dob');
  const currentDate = new Date().format('yyyy-MM-dd');
  var dob1 = new Date(dob);
  var currentdate1 =  new Date(currentDate);
  const diffInMs = currentdate1 - dob1;
  const ageDate = new Date(diffInMs);
  const age = ageDate.getUTCFullYear() - 1970;
  if(!Fn.IsEmpty(Erp.GetFieldValue('html_dob')))
  {
    Erp.SetFieldValue('html_age',age);
  }
  else
  {
    Erp.SetFieldValue('html_age',"");
  }
}
function html_gender_Change(elem,data,field){
}
Erp.OnLoadComplete.Register(LoadCompleteFunction);
function LoadCompleteFunction(){
  debugger;
  //if(Fn.GetProp("mode")=="_EmpID")
  if(attachment_data_doc.length>0)
 {
    var docdetails=attachment_data_doc;
    var Doc_photo=Fn.Filter(docdetails,function(r){
      return Fn.Eq(Fn.Trim(r.doctype),"uploadcertificate")}
                           );
    Erp.Repeater.Databind('rpt_uploadcertificate',Doc_photo);
    var Doc_pdetail=Fn.Filter(docdetails,function(r){
      return Fn.Eq(Fn.Trim(r.doctype),'personaldetail')}
                             );
    Erp.Repeater.Databind('rpt_personaldetail',Doc_pdetail);
    var Doc_hform=Fn.Filter(docdetails,function(r){
      return Fn.Eq(Fn.Trim(r.doctype),'hiringform')}
                           );
    Erp.Repeater.Databind('rpt_hiringform',Doc_hform);
    var Doc_bgverification=Fn.Filter(docdetails,function(r){
      return Fn.Eq(Fn.Trim(r.doctype),'bgverification')}
                                    );
    Erp.Repeater.Databind('rpt_bgverification',Doc_bgverification);
    var Doc_Esic=Fn.Filter(docdetails,function(r){
      return Fn.Eq(Fn.Trim(r.doctype),'EsiDeclaration')}
                          );
    Erp.Repeater.Databind('rpt_EsiDeclaration',Doc_Esic);
    var Doc_pf=Fn.Filter(docdetails,function(r){
      return Fn.Eq(Fn.Trim(r.doctype),'pfform')}
                        );
    Erp.Repeater.Databind('rpt_pfform',Doc_pf);
    var Doc_resume=Fn.Filter(docdetails,function(r){
      return Fn.Eq(Fn.Trim(r.doctype),'resume')}
                            );
    Erp.Repeater.Databind('rpt_resume',Doc_resume);
    var Doc_other=Fn.Filter(docdetails,function(r){
      return Fn.Eq(Fn.Trim(r.doctype),'others')}
                           );
    Erp.Repeater.Databind('rpt_others',Doc_other);
    var Doc_passport=Fn.Filter(docdetails,function(r){
      return Fn.Eq(Fn.Trim(r.doctype),'passport')}
                              );
    Erp.Repeater.Databind('rpt_passport',Doc_passport);
    var Doc_pan=Fn.Filter(docdetails,function(r){
      return Fn.Eq(Fn.Trim(r.doctype),'pan')}
                         );
    Erp.Repeater.Databind('rpt_pan',Doc_pan);
    var Doc_img=Fn.Filter(docdetails,function(r){
      return Fn.Eq(Fn.Trim(r.doctype),'selfimagge')}
                         );
    Erp.Repeater.Databind('rpt_selfimagge',Doc_img);
    var Doc_voter=Fn.Filter(docdetails,function(r){
      return Fn.Eq(Fn.Trim(r.doctype),'voterid')}
                           );
    Erp.Repeater.Databind('rpt_voterid',Doc_voter);
    var Doc_drivinglicence=Fn.Filter(docdetails,function(r){
      return Fn.Eq(Fn.Trim(r.doctype),'drivinglicence')}
                                    );
    Erp.Repeater.Databind('rpt_drivinglicence',Doc_drivinglicence);
    var Doc_aadhar=Fn.Filter(docdetails,function(r){
      return Fn.Eq(Fn.Trim(r.doctype),'aadhar')}
                            );
    Erp.Repeater.Databind('rpt_aadhar',Doc_aadhar);
    var Doc_payslip=Fn.Filter(docdetails,function(r){
      return Fn.Eq(Fn.Trim(r.doctype),'paySlip')}
                             );
    Erp.Repeater.Databind('rpt_payslip',Doc_payslip);
    var Doc_relievingletter=Fn.Filter(docdetails,function(r){
      return Fn.Eq(Fn.Trim(r.doctype),'relievingletter')}
                                     );
    Erp.Repeater.Databind('rpt_relievingletter',Doc_relievingletter);
    var Doc_canclecheck=Fn.Filter(docdetails,function(r){
      return Fn.Eq(Fn.Trim(r.doctype),'canclecheck')}
                                 );
    Erp.Repeater.Databind('rpt_canclecheck',Doc_canclecheck);
   
   
   
    var Doc_BankAccountdetails=Fn.Filter(docdetails,function(r){
      return Fn.Eq(Fn.Trim(r.doctype),'BankAccountdetails')}
                                 );
    Erp.Repeater.Databind('rpt_BankAccountdetails',Doc_BankAccountdetails);
   
  }
  
   if(Erp.LayoutMode=='A')
    Erp.SetFieldValue('Select23',db_fld_0);
  
   if(Fn.GetProp('mode') == 'principle')
  {
    var EmployeeID=Fn.GetProp("EmpID");
    if(Fn.IsEmpty(EmployeeID) && Erp.LayoutMode=="A" && Fn.GetProp('mode') == 'principle')
    {
      var Aadhar = Fn.GetProp('aadhar');
      var Pan = Fn.GetProp('pan');
      Erp.SetFieldValue('html_phone',Fn.GetProp('mobile'));
      Erp.SetFieldValue('html_aadhar',Aadhar);
      Erp.SetFieldValue('html_pan',Pan);
      if(Fn.IsEmpty(Aadhar))
        Erp.SetEnable("html_aadhar",true)
        if(Fn.IsEmpty(Pan))
          Erp.SetEnable("html_pan",true)
          //Erp.SetFieldValue('html_hiredby',db_fld_1);
          Erp.SetFieldValue('Select23',db_fld_0);
    }
    else if(!Fn.IsEmpty(EmployeeID) && Erp.LayoutMode=="A" && Fn.GetProp('mode') == 'principle')
    {
      Erp.LoadVariable('tbl_emp',function(){
        if(!Fn.IsEmpty(tbl_emp) &&tbl_emp.length>0 )
        {
          Erp.SetFieldValue('html_Fname',tbl_emp[0].fname == null ? 'N/A':tbl_emp[0].fname);
          Erp.SetFieldValue('html_Mname',tbl_emp[0].mname == null ? 'N/A':tbl_emp[0].mname);
          Erp.SetFieldValue('html_Lname',tbl_emp[0].lname  == null ? 'N/A':tbl_emp[0].lname);
          Erp.SetFieldValue('html_dob',tbl_emp[0].dateofbirth);
          const dob = Erp.GetFieldValue('html_dob');
          const currentDate = new Date().format('yyyy-MM-dd');
          var dob1 = new Date(dob);
          var currentdate1 =  new Date(currentDate);
          const diffInMs = currentdate1 - dob1;
          const ageDate = new Date(diffInMs);
          const age = ageDate.getUTCFullYear() - 1970;
          Erp.SetFieldValue('html_age',age);
          Erp.SetFieldValue('html_Email',tbl_emp[0].email);
          Erp.SetFieldValue('html_bloodgroup',tbl_emp[0].bloodgroup);
          Erp.SetFieldValue('html_category',tbl_emp[0].employeecategory_fid);
          Erp.SetFieldValue('html_phone',Fn.IsEmpty(tbl_emp[0].mobile)?Fn.GetProp('mobile'):tbl_emp[0].mobile);
          Erp.SetFieldValue('html_gender',tbl_emp[0].gender == 'M'? 'Male': 'Female');
          if (tbl_emp[0].gender == 'O' || tbl_emp[0].gender == 'Other' || tbl_emp[0].gender == 'other')
          {
            Erp.SetFieldValue('html_gender','Other');
          }
          Erp.SetFieldValue('html_maritalstatus',tbl_emp[0].maritalstatus == 'U' ? 'Unmarried' : 'Married');
          if(tbl_emp[0].maritalstatus == 'D' || tbl_emp[0].maritalstatus == 'Divorce' || tbl_emp[0].maritalstatus == 'divorce')
          {
            Erp.SetFieldValue('html_maritalstatus','Divorce');
          }
          else if(tbl_emp[0].maritalstatus == 'S' || tbl_emp[0].maritalstatus == 'Separation' || tbl_emp[0].maritalstatus == 'separation')
          {
            Erp.SetFieldValue('html_maritalstatus','Separation');
          }
          Erp.SetFieldValue('html_prevEPFno',tbl_emp[0].previous_uan);
          //Erp.SetFieldValue('html_aadharname',tbl_emp[0].aadhar_name);
          //Erp.SetFieldValue('html_aadhar',tbl_emp[0].aadhar_no);
          
          
          Erp.SetFieldValue('html_pan',tbl_emp[0].pan);
        }
      }
                      );
    }
   
  }
  
/*  if(Fn.GetProp("mode")=="_EmpID")
  {
    if(Erp.Repeater.GetItemCount("rpt_Familyinfo")<=0)
      Erp.Repeater.Databind("rpt_Familyinfo",[{},{}])
    
    if(Erp.Repeater.GetItemCount("rpt_qualificationinfo")<=0)
      Erp.Repeater.Databind("rpt_qualificationinfo",[{},{}])
  }*/
  
}
function hidepopup()
{
  Erp.CloseWindow();
}
function rpt_dataBound(repeaterId,args){
  if(Erp.Repeater.GetItemCount(repeaterId)>0)
  {
    $("#"+repeaterId+"-ctr").find(".note-add").hide();
  }
}
function rpt_info_RepeaterDataBound(repeaterId,args){
  /*if(Erp.Repeater.GetItemCount(repeaterId)<=0)
    Erp.Repeater.AddItem(repeaterId,null,{
    }
                        );*/
}
function html_nativepincode_Valid(elem,data,field){
  if(!Fn.IsEmpty(data) && data!=0)
  {
    var regex=/^\d+$/;
    var isValid=regex.test(data);
    data=Fn.CStr(data)
    if(!isValid){
      return 'Should contain only numbers not alphabets or other special characters'
    }
    if(Fn.CStr(data).length!=6){
      return "Should contain 6 Digits Pincode"
    }
  }
}
function html_familyaadharname_Valid(elem,data,field){
  var regex = /^[A-Za-z ].*$/
  var num = /[0-9]/;
  var isValid = regex.test(data);
  var numValid = num.test(data);
  if(Fn.IsEmpty(data))
    return "Field is Mandatory";
  if ( (!isValid || numValid)) {
    return 'Should contain only alphabets not numbers or other special characters'
  }
}
function html_empcode_Valid(elem,data,field){
  if(Fn.IsEmpty(data))
    return "Field Is Mandatory";
  else
  {
    Erp.SetParam(window,'empcode',data)
    Erp.LoadVariable('val_employee',true);
    if(!Fn.IsEmpty(val_employee))
    {
      return " This Employee Already Present";
    }
  }
}
function html_ifsccode_Change(elem,data,field){
}
function html_dob_Load(elem,data,field){
  // Erp.SetDateRange('@dateofbirth','MIN','2016-01-05');
  //Erp.SetDateRange('@dateofbirth','MAX','2016-02-15');
}
function rpt_payslip_SaveComplete(repeaterId,args){
  if(isRPTSave)
    Erp.ShowMessage('Data Saved Successfully!','success');
}
function btn_upload_Click(elem){
  Erp.ShowFileUpload({
    fileExt: "jpg,jpeg,png,bmp,pdf,xlsx,xls,docx,doc,rtf,pptx,zip,rar,bak,pib,mdf,ldf,sbr,db,xml,exe,msi", fileSize:25,parent:"", showLink: true,linkUrl:"../temp/test.gif", title: "Upload File", 
    onUploadComplete: function(r,o){
      //var dtype = Fn.Replace(repid,'repeater_','') ;
      // alert(dtype)
      Erp.SetFieldValue('html_docatt-'+elem.attr('rpt-tk'),r.tempUrl);
      Erp.SetFieldValue('html_docpreview-'+elem.attr('rpt-tk'),r.fileName);
      $('#btn_preview-'+elem.attr('rpt-tk')).attr('url',r.tempUrl);
      Erp.SetDisplay('btn_preview-'+elem.attr('rpt-tk'),true);
      var anchorElement = $("<a>").attr({
        "href": r.tempUrl, target: "_blank"}
                                       );
      // Wrap the div element with the anchor element
      $('#btn_preview-'+elem.attr('rpt-tk')).wrap(anchorElement);
      // Erp.SetLabel('lbl_imgname-'+elem.attr('rpt-tk'),r.fileName)
      /*Erp.Repeater.AddItem(repid, null, {
            attachment:r.tempUrl,attachment_preview:r.fileName,ext:r.fileName,doctype:Fn.Trim(dtype)}
                              )*/
      Erp.ShowMessage('Your document uploaded successfully','success')
    }
    , onUploadCancel:  function(options){
    }
  }
                    );
}
function rpt_qualificationinfo_ItemDataBound(repeaterId,args){
  if(Erp.LayoutMode!='A' && !Fn.IsEmpty(Erp.GetFieldText('html_docatt-'+args.token)))
  {
    var anchorElement = $("<a>").attr({
      "href": Erp.GetFieldText('html_docatt-'+args.token), target: "_blank"}
                                     );
    // Wrap the div element with the anchor element
    $('#btn_preview-'+args.token).wrap(anchorElement);
    Erp.SetDisplay('btn_preview-'+args.token,true)
  }
}
function btn_payslip(elem){
  Erp.ShowFileUpload({
    fileExt: "jpg,jpeg,png,bmp,pdf,xlsx,xls,docx,doc,rtf,pptx,zip,rar,bak,pib,mdf,ldf,sbr,db,xml,exe,msi", fileSize:25,parent:"", showLink: true,linkUrl:"../temp/test.gif", title: "Upload File", 
    onUploadComplete: function(r,o){
      //var dtype = Fn.Replace(repid,'repeater_','') ;
      // alert(dtype)
      Erp.SetFieldValue('html_payslip-'+elem.attr('rpt-tk'),r.tempUrl);
      Erp.SetFieldValue('html_payslip_preview-'+elem.attr('rpt-tk'),r.fileName);
      $('#btn_payslip_preview-'+elem.attr('rpt-tk')).attr('url',r.tempUrl);
      Erp.SetDisplay('btn_payslip_preview-'+elem.attr('rpt-tk'),true);
      var anchorElement = $("<a>").attr({
        "href": r.tempUrl, target: "_blank"}
                                       );
      // Wrap the div element with the anchor element
      $('#btn_payslip_preview-'+elem.attr('rpt-tk')).wrap(anchorElement);
      // Erp.SetLabel('lbl_imgname-'+elem.attr('rpt-tk'),r.fileName)
      /*Erp.Repeater.AddItem(repid, null, {
            attachment:r.tempUrl,attachment_preview:r.fileName,ext:r.fileName,doctype:Fn.Trim(dtype)}
                              )*/
      Erp.ShowMessage('Your document uploaded successfully','success')
    }
    , onUploadCancel:  function(options){
    }
  }
                    );
}
function btn_relievingletter(elem){
  Erp.ShowFileUpload({
    fileExt: "jpg,jpeg,png,bmp,pdf,xlsx,xls,docx,doc,rtf,pptx,zip,rar,bak,pib,mdf,ldf,sbr,db,xml,exe,msi", fileSize:25,parent:"", showLink: true,linkUrl:"../temp/test.gif", title: "Upload File", 
    onUploadComplete: function(r,o){
      //var dtype = Fn.Replace(repid,'repeater_','') ;
      // alert(dtype)
      Erp.SetFieldValue('html_relievingletter-'+elem.attr('rpt-tk'),r.tempUrl);
      Erp.SetFieldValue('html_relievingletter_preview-'+elem.attr('rpt-tk'),r.fileName);
      $('#btn_relievingletter_preview-'+elem.attr('rpt-tk')).attr('url',r.tempUrl);
      Erp.SetDisplay('btn_relievingletter_preview-'+elem.attr('rpt-tk'),true);
      var anchorElement = $("<a>").attr({
        "href": r.tempUrl, target: "_blank"}
                                       );
      // Wrap the div element with the anchor element
      $('#btn_relievingletter_preview-'+elem.attr('rpt-tk')).wrap(anchorElement);
      // Erp.SetLabel('lbl_imgname-'+elem.attr('rpt-tk'),r.fileName)
      /*Erp.Repeater.AddItem(repid, null, {
            attachment:r.tempUrl,attachment_preview:r.fileName,ext:r.fileName,doctype:Fn.Trim(dtype)}
                              )*/
      Erp.ShowMessage('Your document uploaded successfully','success')
    }
    , onUploadCancel:  function(options){
    }
  }
                    );
}
function html_degree_Change(elem,data,field){
}
function btn_experiencecertificate(elem){
  Erp.ShowFileUpload({
    fileExt: "jpg,jpeg,png,bmp,pdf,xlsx,xls,docx,doc,rtf,pptx,zip,rar,bak,pib,mdf,ldf,sbr,db,xml,exe,msi", fileSize:25,parent:"", showLink: true,linkUrl:"../temp/test.gif", title: "Upload File", 
    onUploadComplete: function(r,o){
      //var dtype = Fn.Replace(repid,'repeater_','') ;
      // alert(dtype)
      Erp.SetFieldValue('html_experiencecertificate-'+elem.attr('rpt-tk'),r.tempUrl);
      Erp.SetFieldValue('html_experiencecertificate_preview-'+elem.attr('rpt-tk'),r.fileName);
      $('#btn_experiencecertificate_preview-'+elem.attr('rpt-tk')).attr('url',r.tempUrl);
      Erp.SetDisplay('btn_experiencecertificate_preview-'+elem.attr('rpt-tk'),true);
      var anchorElement = $("<a>").attr({
        "href": r.tempUrl, target: "_blank"}
                                       );
      // Wrap the div element with the anchor element
      $('#btn_experiencecertificate_preview-'+elem.attr('rpt-tk')).wrap(anchorElement);
      // Erp.SetLabel('lbl_imgname-'+elem.attr('rpt-tk'),r.fileName)
      /*Erp.Repeater.AddItem(repid, null, {
            attachment:r.tempUrl,attachment_preview:r.fileName,ext:r.fileName,doctype:Fn.Trim(dtype)}
                              )*/
      Erp.ShowMessage('Your document uploaded successfully','success')
    }
    , onUploadCancel:  function(options){
    }
  }
                    );
}
function Text44_Valid(elem,data,field){
  var regex=/^\d+$/;
  var isValid=regex.test(data);
  if(!Fn.IsEmpty(data) && !isValid){
    return 'Should contain only numbers not alphabets or other special characters'
  }
  else if(!Fn.IsEmpty(data) &&Fn.CStr(data).length!=10){
    return "Should contain 10 Digits Mobile Number"
  }
}
function html_monthlysal_Change(elem,data,field){
  var fromctc=Erp.GetFieldValue("html_fromctc");
  var toctc=Erp.GetFieldValue("html_toctc");
  if(Fn.CFlt(fromctc)>0 &&  Fn.CFlt(toctc)>0)
  {
    if(!Fn.CFlt(fromctc)>Fn.CFlt(data) &&  !Fn.CFlt(toctc)<=Fn.CFlt(data))
    {
      Erp.ShowMessage("Monthly Salary should be between CTC range","alert");
      return false;
    }
  }
}
function html_otherbankname_Valid(elem,data,field){
  if(Fn.IsEmpty(Erp.GetFieldValue('html_bank')) && Fn.IsEmpty(Erp.GetFieldValue('html_otherbankname')))
  {
    return "Field Is Mandatory";
  }
}
function html_payslip_Valid(elem,data,field){
  if(Fn.IsEmpty(data))
  {
    Erp.ShowMessage("Please Upload Pay Slip...","error");
    return "mandatory"
  }
}
function html_payslip_Change(elem,data,field){
}
function div_success_Click(elem){
}
/*if(Erp.GetFieldValue('html_bloodgroup') == 'O +' || Erp.GetFieldValue('html_bloodgroup') == 'O+' || Erp.GetFieldValue('html_bloodgroup') == 'o+' || Erp.GetFieldValue('html_bloodgroup') == 'O Positive')
        {
          Erp.SetFieldValue('Html_tempbloodgrp','O Positive');
        }
        else if(Erp.GetFieldValue('html_bloodgroup') == 'A+' || Erp.GetFieldValue('html_bloodgroup') == 'A +' || Erp.GetFieldValue('html_bloodgroup') == 'a+' || Erp.GetFieldValue('html_bloodgroup') == 'A Positive')
        {
          Erp.SetFieldValue('Html_tempbloodgrp','A Positive');
        }
        else if(Erp.GetFieldValue('html_bloodgroup') == 'A-' || Erp.GetFieldValue('html_bloodgroup') == 'A -' || Erp.GetFieldValue('html_bloodgroup') == 'a-' || Erp.GetFieldValue('html_bloodgroup') == 'A Negative')
        {
          Erp.SetFieldValue('Html_tempbloodgrp','A Negative');
        }
        else if(Erp.GetFieldValue('html_bloodgroup') == 'b+' || Erp.GetFieldValue('html_bloodgroup') == 'B +' || Erp.GetFieldValue('html_bloodgroup') == 'B+' || Erp.GetFieldValue('html_bloodgroup') == 'B Positive')
        {
          Erp.SetFieldValue('Html_tempbloodgrp','B Positive');
        }
        else if(Erp.GetFieldValue('html_bloodgroup') == 'AB Positive' || Erp.GetFieldValue('html_bloodgroup') == 'AB +' || Erp.GetFieldValue('html_bloodgroup') == 'ab+' || Erp.GetFieldValue('html_bloodgroup') == 'AB+')
        {
          Erp.SetFieldValue('Html_tempbloodgrp','AB Positive');
        }
        else if(Erp.GetFieldValue('html_bloodgroup') == 'O Negative' || Erp.GetFieldValue('html_bloodgroup') == 'O -' || Erp.GetFieldValue('html_bloodgroup') == 'O-' || Erp.GetFieldValue('html_bloodgroup') == 'o-')
        {
          Erp.SetFieldValue('Html_tempbloodgrp','O Negative');
        }
        else if(Erp.GetFieldValue('html_bloodgroup') == 'B Negative' || Erp.GetFieldValue('html_bloodgroup') == 'B -' || Erp.GetFieldValue('html_bloodgroup') == 'B-' || Erp.GetFieldValue('html_bloodgroup') == 'b-')
        {
          Erp.SetFieldValue('Html_tempbloodgrp','B Negative');
        }
        else if(Erp.GetFieldValue('html_bloodgroup') == 'AB Negative' || Erp.GetFieldValue('html_bloodgroup') == 'AB -' || Erp.GetFieldValue('html_bloodgroup') == 'ab-' || Erp.GetFieldValue('html_bloodgroup') == 'AB-')
        {
          Erp.SetFieldValue('Html_tempbloodgrp','AB Negative');
        }*/
function Text44_Change(elem,data,field){
}
function html_Fromdate_Change(elem,data,field){
  var sdate=Erp.GetFieldValue("html_Fromdate-"+elem.attr("rpt-tk"))
  var edate=Erp.GetFieldValue("html_todate-"+elem.attr("rpt-tk"))
  if(!Fn.IsEmpty(sdate) && !Fn.IsEmpty(edate))
  {
    /*const dob = Erp.GetFieldValue('html_dob');
  const currentDate = new Date().format('yyyy-MM-dd');
  var dob1 = new Date(dob);
  var currentdate1 =  new Date(currentDate);
    */
    var d1=new Date(sdate);
    var d2=new Date(edate);
    const diffInMilliseconds = Math.abs(d2 - d1);
    const millisecondsInYear = 365 * 24 * 60 * 60 * 1000;
    // Assuming 365 days in a year
    const millisecondsInMonth = 30 * 24 * 60 * 60 * 1000;
    // Assuming 30 days in a month
    const years = Math.floor(diffInMilliseconds / millisecondsInYear);
    const remainingMilliseconds = diffInMilliseconds % millisecondsInYear;
    const months = Math.floor(remainingMilliseconds / millisecondsInMonth);
    Erp.SetFieldValue("html_WorkExperience-"+elem.attr("rpt-tk"),years+"."+months);
  }
}
function rpt_Familyinfo_ItemDataBound(repeaterId,args){
  var currentDate = moment();
  // Subtracting one year from the current date
  var  TwentyYearAgo = currentDate.subtract(20, 'years');
  M.Datepicker.getInstance($("#html_familyinfodob-"+args.token)[0]).gotoDate(TwentyYearAgo._d);
}
function chk_declaration_statement_Valid(elem,data,field){
  if(!data)
    return "Field Is Mandatory";
}
function sel_bloodgroup_Change(elem,data,field){
  Erp.SetFieldValue("html_bloodgroup",Erp.GetFieldValue("sel_bloodgroup"));
}
function html_bloodgroup_Load(elem,data,field){
  Erp.SetFieldValue("sel_bloodgroup",Erp.GetFieldValue("html_bloodgroup"));
}
function chk_experience_Change(elem,data,field){
  if(elem.attr("id")=='chk_experience')
    Erp.SetFieldValue("chk_fresher",!Erp.GetFieldValue("chk_experience"))
    if(elem.attr("id")=="chk_fresher")
      Erp.SetFieldValue("chk_experience",!Erp.GetFieldValue("chk_fresher"))
      Erp.SetDisplay("ColumnPanel54",Erp.GetFieldValue("chk_experience"));
  if(!Erp.GetFieldValue("chk_experience"))
    Erp.Repeater.Databind("rpt_prevemployerinfo",{
    }
                         )
    else
      Erp.Repeater.AddItem("rpt_prevemployerinfo",null,{
      }
                          )
      }
function chk_experience_Valid(elem,data,field){
  if(!Erp.GetFieldValue("chk_experience") && !Erp.GetFieldValue("chk_fresher"))
  {
    return "Field Is Mandatory";
  }
  if(Erp.GetFieldValue("chk_experience") && Erp.Repeater.GetItemCount("rpt_prevemployerinfo")<=0)
  {
    Erp.Repeater.AddItem("rpt_prevemployerinfo",null,{
    }
                        )
    Erp.ValidateData("ColumnPanel54")
    Erp.ShowMessage("Please add Previous Employer info","alert")
    return "Please Add Previous Employer info";
  }
}
function TabPanel6_Valid(elem,data,field){
}
function pnl_PrevEmployerInfo_Valid(elem,data,field){
}
function chk_experience_Load(elem,data,field){
  if(Erp.GetFieldValue("chk_experience"))
  {
    Erp.SetDisplay("ColumnPanel54",Erp.GetFieldValue("chk_experience"));
  }
}
function Date3_Change(elem,data,field){
  Erp.SetFieldValue("date_groupdateofjoining",data)
}


function html_bank_Change(elem,data,field){
  Erp.SetParam("html_bankBranch","bankid",Erp.GetFieldValue('html_bank'));
  
}

function html_gender_Valid(elem,data,field){
  if(!Fn.IsEmpty(Erp.GetFieldValue('@tbl_va_employeeinformation_currentstatus')) && Fn.IsEmpty(Erp.GetFieldValue("html_gender")))
    return "Field Is Mandatory";
}

function html_maritalstatus_Valid(elem,data,field){
  if(!Fn.IsEmpty(Erp.GetFieldValue('@tbl_va_employeeinformation_currentstatus')) && Fn.IsEmpty(Erp.GetFieldValue("html_maritalstatus")))
    return "Field Is Mandatory";
}

function sel_bloodgroup_Valid(elem,data,field){
//if(!Fn.IsEmpty(Erp.GetFieldValue('@tbl_va_employeeinformation_currentstatus')) && Fn.IsEmpty(Erp.GetFieldValue("sel_bloodgroup")))
    //return "Field Is Mandatory";
}



function html_pan_Change(elem,data,field){
}

function Pnl_Basicinfo_Click(elem){
}

function html_prevEPFno_Change(elem,data,field){
}

function ColumnPanel51_Click(elem){
}

function date_scheduledate_Change(elem,data,field){
}

function btn_hr_save_Click(elem){
  
  
  
    Erp.ShowDialog({
      title:'Take Action',message:"Do You Wish To Save?",iconText:''}
                   ,'Yes,No',function(cmd){
                     if(cmd=="Yes")
                     {
                       //if(Erp.ValidateData() || elem.attr("tag")=="reject")
                       if(Erp.ValidateData('Pnl_Basicinfo') && Erp.ValidateData('pnl_presentaddr') && Erp.ValidateData('pnl_permanentaddr') && Erp.ValidateData('pnl_familyinfo') && Erp.ValidateData('pnl_PrevEmployerInfo') && Erp.ValidateData('pnl_qualificationinfo') && Erp.ValidateData('pnl_bankinfo') && Erp.ValidateData('pnl_salaryaccinfo') && Erp.ValidateData('ColumnPanel20')) 
                       {
                         isRPTSave=true;
                         Erp.SaveWindow()
                       }
                     }
                   });
  
}


