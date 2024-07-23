function InitUI() {$('#PageTitle').children('._i').html(Erp.PageIcon).next().html(Erp.PageTitle);PkIds=[];
GridList.push({ID:"sel_configuration_grid",BindOnload:false,Title:"",AdvFilter:[],GroupInfo:[],IsLookup:1,OnBind:null});
initGridSettings("sel_configuration_grid");
$("#sel_configuration_grid_ctl00_TopPager").find('.rgCommandCell').append($('#sel_configuration_grid_cmd'));
window.__erp_fn_0= function (el,onChange){
var ddl=el;ddl.parent().addClass('ui-list');ddl.data('InlineMode',true);ddl.data('FieldID','uid_0');ddl.data('LookupCode','');ddl.data('Eids','tbl_DIP_configuration');ddl.data('FieldType','SINGLESELECT_TABLE');ddl.data('Multi',false);enableKeyboardForList(ddl);ddl.parent().on('click',function(){showSearchList($(this));});
el.on('selectchange',function(){onFieldChange(sel_configuration_Change,$(this), {RecordID:$(this).data('RecordID'),EntityID:$(this).data('EntityID'),Text:$(this).val(),Keys:$(this).data('Keys'),CurrentRow:$(this).data('CurrentRow')}, Erp.GetField($(this).attr('id'))   );});

}
__erp_fn_0($('#sel_configuration'),sel_configuration_Change);
Erp.FieldInfo.push({Name:"_sel_configuration",ID:"sel_configuration",Disabled:false,Type:"Ddl",DataType:"SINGLESELECT_TABLE",CustomRender:false,Mandatory:true,IsDescriptive:false,ReqForCalc:false,Data:null});
window.__erp_fn_1= function (el,onChange){
el.on('change',
function(){
onFieldChange(Checkbox1_Change,$(this),$(this).checked(),Erp.GetField($(this).attr('id')));
});

}
__erp_fn_1($('#Checkbox1'),Checkbox1_Change);
Erp.FieldInfo.push({Name:"_checkbox1",ID:"Checkbox1",Disabled:false,Type:"Bool",DataType:"CHECKBOX",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null});
$('#Button2').on('click',function(){onFieldChange(Button2_Click,$(this));});
window.__erp_fn_2= function (el,onChange){
var ddl=el;ddl.formSelect({width:"100%",disable_search_threshold: 10,allow_single_deselect: true,placeholder_text_single:" "});
el.on('change',function(){onFieldChange(sel_sheets_Change,$(this),$(this).val(),Erp.GetField($(this).attr('id')));});

}
__erp_fn_2($('#sel_sheets'),sel_sheets_Change);
Erp.FieldInfo.push({Name:"_sel_sheets",ID:"sel_sheets",Disabled:false,Type:"Text",DataType:"SINGLESELECT",CustomRender:false,Mandatory:true,IsDescriptive:false,ReqForCalc:false,Data:null});
Erp.Repeater._rptrs["rtp_mapping"]={id:"rtp_mapping",ds:"",eid:"",pk:"",fid:"",parent:"",allowAdd:0,allowSave:0,isHorizontal:0,allowDrop:0,allowDrag:0,allowPaging:0,pageSize:30};
Erp.Repeater._Cache['rtp_mapping-loop']=tmpl('rtp_mapping-loop');
Erp.Repeater._Cache['rtp_mapping']=tmpl('rtp_mapping');
Erp.FieldInfo_Rptr.push({Name:"_sel_excelcolumnname",ID:"sel_ExcelColumnName",Disabled:true,Type:"Text",DataType:"TEXT",CustomRender:false,Mandatory:true,IsDescriptive:false,ReqForCalc:false,Data:null});
window.__erp_fn_3= function (el,onChange){
var ddl=el;ddl.formSelect({width:"100%",disable_search_threshold: 10,allow_single_deselect: true,placeholder_text_single:" "});
el.on('change',function(){onFieldChange(sel_EntityColumnName_Change,$(this),$(this).val(),Erp.GetField($(this).attr('id')));});
Erp.SetFieldValue(el.attr('id'),el.attr('item-val'))

}
Erp.FieldInfo_Rptr.push({Name:"_sel_entitycolumnname",ID:"sel_EntityColumnName",Disabled:false,Type:"Text",DataType:"SINGLESELECT",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null,OnValid:(typeof sel_EntityColumnName_Valid=='function'?sel_EntityColumnName_Valid:null)});
window.__erp_fn_4= function (el,onChange){
var ddl=el;ddl.formSelect({width:"100%",disable_search_threshold: 10,allow_single_deselect: true,placeholder_text_single:" "});
Erp.SetFieldValue(el.attr('id'),el.attr('item-val'))

}
Erp.FieldInfo_Rptr.push({Name:"_sel_parenttablecolumn",ID:"sel_parentTableColumn",Disabled:false,Type:"Text",DataType:"SINGLESELECT",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null});
Erp.FieldInfo_Rptr.push({Name:"_html_entity_col",ID:"html_entity_col",Disabled:false,Type:"Text",DataType:"TEXT",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null});
Erp.FieldInfo_Rptr.push({Name:"_html_pentity_col",ID:"html_pentity_col",Disabled:false,Type:"Text",DataType:"TEXT",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null});
Erp.Repeater.OnItemDataBound("rtp_mapping",rtp_mapping_ItemDataBound);
$('#btn_import').on('click',function(){onFieldChange(btn_import_click,$(this));});
Erp.Repeater._rptrs["rpt_error12"]={id:"rpt_error12",ds:"",eid:"",pk:"",fid:"",parent:"",allowAdd:0,allowSave:0,isHorizontal:0,allowDrop:0,allowDrag:0,allowPaging:0,pageSize:30};
Erp.Repeater._Cache['rpt_error12-loop']=tmpl('rpt_error12-loop');
Erp.Repeater._Cache['rpt_error12']=tmpl('rpt_error12');
Erp.Repeater._rptrs["rpt_error"]={id:"rpt_error",ds:"",eid:"",pk:"",fid:"",parent:"",allowAdd:0,allowSave:0,isHorizontal:0,allowDrop:0,allowDrag:0,allowPaging:0,pageSize:30};
Erp.Repeater._Cache['rpt_error-loop']=tmpl('rpt_error-loop');
Erp.Repeater._Cache['rpt_error']=tmpl('rpt_error');
$('#Fab-Main').floatingActionButton();


DbReferences.push({Id:"tbl_cfg",Type:"Table",OnDemand:1,EntityId:"tbl_DIP_configuration",Columns:"",Xml:"_Q9BfKlhrb8Hh--JgttYym1zFSLcHcX0UQQgIm6iifOHQb7eBNf7KBPStIrzUlJDGxbn38Ww5qFCIsMLA7uxMws1sNB0TMBbhyvLpkkz7IJrV-_p63gn4EcMnXkkNbzbbU9Kdg77M2JHlyZvcEJ0wh4rGvDroWcSVOw0i9oIUk0XWOvY6XaMIm4h3BIFV6w02EyIYu-yOjLnzh2vFqpijMmYmxlmp1HwTN5U8qOWovNEICIzVpf4E6_oeQ-7MfVHOjwCKGpX_qM2xMq5BJnLcKzXTejWaw7eXB5Lw8mCgatqJYsG8aHxRWva37uZLekpsxgz_-X-8dREZB8n1dAFMVshRXi4SFwGq3DVJSLj8cTtKJ46ACm-ypyEd2zu6uBdpT7YHLHWyDkmaW3RXqt7C4ZAKpS3mOe9PYbLng3G-lezoBYBQvnePu7e39DQ1lkZIdpeGdMrkpipP9NcpEUfdgDJUE8v-PBz_KAvpY2TzncrjmhBru_tOTLySBNnEcQ74CS6dvUjnYUhr4ND8VmQpVC_t7EG6_mlX5k0JWNLwWO_YadyWBz1xKeoEQstML62Y1ZiFcdwwYJs5Gwac6r1DRoe6jQmHEY3iY6rsG-zj4i4nQYjDt0w8W-jfpU2_mphg_LcAheAARNR1LHcAWJZ2HFlBVH6-1pnlAGz3JZIeCXfC7JlGLU8e3Mt0ILy8ZWMu1vjItFDo6H213C73s7DFx0uGYGc6ZWXarb60tYvxZt_x7q1IxDZkzPLc6D9afMil-WFBuclPOILPoSBBZP1ZPV4KbFEfHOUfPxJlyIw0B4GGn0oUFWP3IQfz-mNyldx06j9V2i0x9lTl4uTrQ6d3f5b5elEqxxsTnLql7roVqoaCd7ScXIPWgDO5nc0-5qO8rQM5rOUsu0hPNj0Qa-oGg3AfcVMWEkLx-2siBmf9geZdXsaR9pWZ4N8F-Oj0i0pTE3L8lYzyjR2cUPtZ3v8daFtmpidL4FbxgkOwiBv5tsL-jVMC9fp6LK99J9e5YYtccI1uoITWpll_d9Q4WOUzAacULJPcX-WO5DVTo6SsPTKzvxzBb6luN7cPreo0dnn0EFi30yhp5Nqx4Ql7lVEgULlSWSbVC5jqYVqgG84ynBjawUOc7E1HCB0SXgeyUWAp1S0oBsategzax3q7MgfS4rsMGrqWMhUnH-tjqHc1ZwDHEkP-pSNKWIVL-WS9w066S8_3fKn8M5aH-IunBAwlKnP46bZbkgBhr-4HE_01JPS5zYjm3UDHqWQDzScKlUlDx4eQbX_hIBprjlS-tyjaO39VvhxPX_WWbZsNneqyXYMy1nssB-vbt-wYmAVyYYSF5HjgP8dMylf5kJ6MGIf6-aEAQwrllBG97wn6z9dfZ14wEpvQhBYYKf2vStI7ozMLq1AXlpLkr1bt6_xZiKCZLpGZaNrXGz7GpItXHR468BxhLZAs3muyRDZNeg9QxJ_O_SWEjYJGfObeN-qNMMewuu-bJjTLNXjfJXKzkuQtD0PgAmsO1BeDixJHebtVbOfzGsfF0lWqRlvW8m0Q-ogZvO9N6dZGLEcLZrshzJF4CEiQa31rVbADOfWSHwZUQMET3p_oNmBol6SKm8JBB7555flpTXba-BkrowLTZu14PPny2SfK2IKUXKdp0kGhHQDavbxk0TGpWIBRuHTTaMRrYhwrtPbdU7qQ_xXerRQU-08qDKKmXD3o1HRiiybXbypjGPiDo3xst0HA_KI2Sfowlz6Ru1_TKGFSJPiF2K1lIBkbMdi1eo1qBLHaQYIcCSEjnoE9SPe6kO3ZPXLRsc3pkNQq3_D2CqwaJNkMAoiuiFXsikMzpM21esUU6vwd8PIUeGShpueOpmMsS6bX3JJDZa14PNR5sx2X61h3euxjgH8qgUObkoFRIbrKm-61vn1w4uiAnXqHd7PF6-lsRY4CRjbVUNb7RmlrQ3qj_wSmnlIyJRgMiTUkQIPV7Wwu5Wq941eUgumZZg4ZyXqcLmu5yaSwZkkXRb-wmNX-7VLdjFiLQE4R5V3ReJ1AHwrRCz8mLB8RkdgPkZSEFqjlUDT_B7h-3Bj2axHEHVwuOHEKYGzF30mb7irzWK0n5SCKQ2ECYnL67LCR-5Oig4I6tDo_uTCp0OsZfTiidFJSlINNfBVW0z7I0CgfmOYX8dFMtLQ93PQrcrA8x2ZmlIz59hrqcHZbT_3a_KRTAn6ngH1f3jKQa11ACjzvcjH1WrfJwyzK1zUmb0OnzakOmaIHAAXvXe-n1Dmu-6WG5-E76ijJ7oTAE5NEXIWefhW-4BEddaTVwktii25bKLWk-P2FOL96SdqP9Tgdk-qyPYdXuqYP29YvRLxWVH4WcZBXoCI9OvDV9ZlVPgst_jF3B3BdzjxH_uNEN3ur1fknwsYf8iUT26oGUN46iaVNuHxJAaxGBf1ceO_WIyPVSsq75spq0131tKbUORLldytWL1AZPloj-YLUFfWxt9iN9IxhgWU2eFsXqzVX1f2ECp9TeTffZz9I1SpWGZt3FDTEpOAbnKogh_lAuwURtqI2XT1BHviDHMsqGXbPe_6sciOuNU_df-1Xc-YF-o_PTXhwcwJQ6zRZ3wwYMFHps_yPFq9EacLAvICUv3NWGeqwTu8H0d8PLlyOmDbtbd7TpgBv6PQmakcavkN01kUhZmwIh6SIUx9Tx73q_A_-Pw-M7MOa-bL5KaesK4CvHN9XqYHwVK9SINn_VQ87zP2Mr3vvRRhVxlzDdnYEPQPSK3Plq7s02epNRWWPSlAHf3NE4EspxPpMKCeZLzwCaG4RkgngoWa72agju87wfAYv-O8-4KyNdvoTMeq3yjSMCTh9Ts-0thyBks1prRYjKNpFUHTaThVG_digwaKFCeBzMo1V3-bKwwVKhhlHjVHvlF8AzcJt3zKMZzWQgWSj8-A1ASdljrb9Ul66Ww8i4gKSroQYYJ7jHThWmSgt6KurScNa1iE-xSycHNAyh5MPrwwITX55ugzPApDjLfkGXd_mDyTn_c",AlwaysLoad:false });window.tbl_cfg='';
 mxEntityList={};

if(typeof __initUi2=='function')__initUi2();




};
var filename='';
var filepath='';
var entityColumn=[];
var error="";
var dt_fieldtype={
};
function Button2_Click(elem){
  if(!Erp.ValidateData(["sel_configuration"]))
    return;
  Erp.ShowFileUpload({
    onUploadComplete: function(data){
      filename=data["fileName"];
      filepath=data["tempName"];
      console.log(data)
      Erp.ServerCommand('mapping', {
        filename:filename,filepath:filepath}
                        ,  function(cmd,args){
                          console.log(args);
                          var arr_sheets=args.sheets;
                          Erp.SetDisplay("sel_sheets",true);
                          Erp.DataBind("sel_sheets",arr_sheets);
                          if(!Erp.GetFieldValue("Checkbox1"))
                          {
                            if(!Fn.IsEmpty(error))
                            {
                              Erp.SetDisplay('pnl_error',true)
                              Erp.Repeater.Databind("rpt_error",error);
                              Erp.ShowDialog({
                                title:'',message:'',iconText:''}
                                             ,'OK','pnl_error',function(cmd){
                                             }
                                            );
                              Erp.Repeater.Databind("rtp_mapping",{
                              }
                                                   );
                            }
                            else if(!Fn.IsEmpty(args["error"]))
                            {
                              Erp.SetLabel("lbl_error",args["error"]);
                              Erp.ShowDialog({
                                title:'',message:'',iconText:''}
                                             ,'OK','pnl_error2',function(cmd){
                                             }
                                            );
                              Erp.Repeater.Databind("rtp_mapping",{
                              }
                                                   );
                            }
                            else if(args.dt_ExcelColumn!=null && args.dt_ExcelColumn.length>0)
                            {
                              Erp.SetDisplay("pnl_mapping",true);
                              entityColumn=args.dt_EntityColumn
                              dt_fieldtype=args.dt_fieldtype;
                              Erp.Repeater.Databind("rtp_mapping",args.dt_ExcelColumn);
                            }
                            else{
                              Erp.Repeater.Databind("rtp_mapping",{
                              }
                                                   );
                            }
                          }
                        }
                       );
    }
  }
                    );
}
function sel_sheets_Change(){
  Erp.ServerCommand('loadSheetData', {
    sheetname:Erp.GetFieldValue("sel_sheets"),filename:filename,filepath:filepath}
                    ,  function(cmd,args){
                      if(!Fn.IsEmpty(error))
                      {
                        Erp.SetDisplay('pnl_error',true)
                        Erp.Repeater.Databind("rpt_error",error);
                        Erp.ShowDialog({
                          title:'',message:'',iconText:''}
                                       ,'OK','pnl_error',function(cmd){
                                       }
                                      );
                        Erp.Repeater.Databind("rtp_mapping",{
                        }
                                             );
                      }
                      else if(!Fn.IsEmpty(args["error"]))
                      {
                        Erp.SetLabel("lbl_error",args["error"]);
                        Erp.ShowDialog({
                          title:'',message:'',iconText:''}
                                       ,'OK','pnl_error2',function(cmd){
                                       }
                                      );
                        Erp.Repeater.Databind("rtp_mapping",{
                        }
                                             );
                      }
                      else if(args.dt_ExcelColumn!=null && args.dt_ExcelColumn.length>0)
                      {
                        Erp.Repeater.Databind("rtp_mapping",args.dt_ExcelColumn);
                        dt_fieldtype=args.dt_fieldtype;
                      }
                      else
                      {
                        Erp.Repeater.Databind("rtp_mapping",{
                        }
                                             );
                        Erp.ShowMessage("Column Not Found At First Position of Sheet "+Erp.GetFieldValue("sel_sheets"),"alert");
                      }
                    }
                   );
}
function rtp_mapping_ItemDataBound(repeaterId,args){
  debugger;
  Erp.DataBind("sel_EntityColumnName-"+args.token,entityColumn);
  var colname=Erp.GetFieldValue("sel_ExcelColumnName-"+args.token).replace(/\s/g,"").toLowerCase();
  if(Erp.GetFieldValue("Checkbox1"))
  {
    Erp.SetFieldValue("sel_EntityColumnName-"+args.token,Erp.GetFieldValue("html_entity_col-"+args.token))
    if(!Fn.IsEmpty(Erp.GetFieldValue("html_pentity_col-"+args.token)))
    {
      debugger;
      setChildEntity(args.token)
      //Erp.SetFieldValue("sel_parentTableColumn-"+args.token,Erp.GetFieldValue("html_pentity_col-"+args.token))
    }
  }
  else
  {
    for(var i=0;i<entityColumn.length;i++)
    {
      if(colname==entityColumn[i]["value"])
      {
        Erp.SetFieldValue("sel_EntityColumnName-"+args.token,entityColumn[i]["value"])
        break;
      }
      else if(Erp.GetFieldValue("sel_ExcelColumnName-"+args.token).split(" ")[0].replace(/\s/g,"").toLowerCase()==entityColumn[i]["value"].split("_")[0].toLowerCase())
      {
        Erp.SetFieldValue("sel_EntityColumnName-"+args.token,entityColumn[i]["value"])
        setChildEntity(args.token)
      }
    }
  }
}
function btn_import_click(elem){
  if(Erp.ValidateData("pnl_mapping")&&Erp.ValidateData("PnlOuterCtr"))
  {
    var obj_mapping={
    };
    var ismapped=false;
    var token=Erp.Repeater.GetTokens("rtp_mapping");
    for(var i=0;i<token.length;i++)
    {
      if(!Fn.IsEmpty(Erp.GetFieldValue('sel_EntityColumnName-'+token[i].token)) && !Fn.IsEmpty(Erp.GetFieldValue('sel_parentTableColumn-'+token[i].token)))
      {
        obj_mapping[Erp.GetFieldValue('sel_ExcelColumnName-'+token[i].token)]=Erp.GetFieldValue('sel_EntityColumnName-'+token[i].token)+"|"+Erp.GetFieldValue('sel_parentTableColumn-'+token[i].token);
      }
      else if(!Fn.IsEmpty(Erp.GetFieldValue('sel_EntityColumnName-'+token[i].token))){
        obj_mapping[Erp.GetFieldValue('sel_ExcelColumnName-'+token[i].token)]=Erp.GetFieldValue('sel_EntityColumnName-'+token[i].token);
      }
      if(!ismapped && !Fn.IsEmpty(Erp.GetFieldValue("sel_EntityColumnName-"+token[i].token)))
        ismapped=true;
    }
    if(!ismapped)
    {
      Erp.ShowMessage("Please Map Atleast One Column With Excel Column....","alert");
      Erp.RaiseError([{
        id:'sel_EntityColumnName-'+token[0].token,error:'Field Is Mandatory'}
                     ]);
      return;
    }
    Erp.ServerCommand('import',{
      sheetname:Erp.GetFieldValue("sel_sheets"),filename:filename,filepath:filepath,jsonData:obj_mapping}
                      , function(cmd,args){
                        debugger;
                        if(!Fn.IsEmpty(error))
                        {
                          Erp.SetDisplay('pnl_error',true)
                          Erp.Repeater.Databind("rpt_error",error);
                          //Erp.Repeater.Databind("rpt_error2",error);
                          Erp.ShowDialog({
                            title:'',message:'',iconText:''}
                                         ,'OK','pnl_error',function(cmd){
                                         }
                                        );
                        }
                        else if(!Fn.IsEmpty(args["error"]))
                        {
                          Erp.SetLabel("lbl_error",args["error"]);
                          Erp.ShowDialog({
                            title:'',message:'',iconText:''}
                                         ,'OK','pnl_error2',function(cmd){
                                         }
                                        );
                        }
                        else 
                        {
                          Erp.SetDisplay('pnl_error',false)
                          //Erp.ShowMessage("Data Imported Successfully....","success");
                          parent.Erp.ShowMessage("Data Imported Successfully....","success");
                          parent.Erp.Grid.Refresh("dgData");
                          Erp.CloseWindow();
                        }
                      }
                     );
  }
}
function sel_EntityColumnName_Valid(elem,data,field){
  debugger;
  var token = Erp.Repeater.GetTokens("rtp_mapping");
  var isempty=true;
  for(var i=0;i<token.length;i++)
  {
    if(token[i].token==elem.attr('rpt-tk')){
    }
    else if(!Fn.IsEmpty(data) &&  token[i].token!=elem.attr('rpt-tk') && data==Erp.GetFieldValue("sel_EntityColumnName-"+token[i].token))
      return 'Duplicate Entity Column Mapping Exists...'
      }
}
function sel_EntityColumnName_Change(elem,data,field){
  setChildEntity(elem.attr('rpt-tk'));
  /* if(dt_fieldtype.length>0)
  {
    for(var i=0;i<dt_fieldtype.length;i++)
    {
      if(!Fn.IsEmpty(data) && dt_fieldtype[i].value==data && Fn.ToLowerCase(dt_fieldtype[i].text) =="singleselect")
      {
        Erp.SetDisplay("sel_parentTableColumn-"+elem.attr('rpt-tk'),true);
        Erp.ServerCommand('getChildEntity', {
          fieldname:Erp.GetFieldValue("sel_EntityColumnName-"+elem.attr('rpt-tk'))}
                          ,  function(cmd,args){
                            var childEntCol=args.dt_childEntityColumn;
                            Erp.DataBind("sel_parentTableColumn-"+elem.attr('rpt-tk'),childEntCol);
                             var colname=Erp.GetFieldValue("sel_ExcelColumnName-"+elem.attr('rpt-tk')).replace(/\s/g,"").toLowerCase();
                              for(var i=0;i<childEntCol.length;i++)
      {
        if(colname==childEntCol[i]["value"])
        {
        Erp.SetFieldValue("sel_parentTableColumn-"+elem.attr('rpt-tk'),childEntCol[i]["value"])
        break;
        }
      }
                          }
                         )
      }
      else if(dt_fieldtype[i].value==data && Fn.ToLowerCase(dt_fieldtype[i].text) !="singleselect"){
        Erp.SetFieldValue("sel_parentTableColumn-"+elem.attr('rpt-tk'),'');
        Erp.SetDisplay("sel_parentTableColumn-"+elem.attr('rpt-tk'),false);
      }
    }
  }*/
}
function setChildEntity(token)
{
  if(dt_fieldtype.length>0)
  {
    for(var i=0;i<dt_fieldtype.length;i++)
    {
      if(!Fn.IsEmpty(Erp.GetFieldValue("sel_EntityColumnName-"+token)) && dt_fieldtype[i].value==Erp.GetFieldValue("sel_EntityColumnName-"+token) && Fn.ToLowerCase(dt_fieldtype[i].text) =="singleselect")
      {
        Erp.SetDisplay("sel_parentTableColumn-"+token,true);
        Erp.ServerCommand('getChildEntity', {
          fieldname:Erp.GetFieldValue("sel_EntityColumnName-"+token)}
                          ,  function(cmd,args){
                            debugger;
                            var childEntCol=args.dt_childEntityColumn;
                            Erp.DataBind("sel_parentTableColumn-"+token,childEntCol);
                            if(Erp.GetFieldValue("Checkbox1"))
                            {
                              Erp.SetFieldValue("sel_parentTableColumn-"+token,Erp.GetFieldValue("html_pentity_col-"+token))
                            }
                            else{
                              var colname=Erp.GetFieldValue("sel_ExcelColumnName-"+token).replace(/\s/g,"").toLowerCase();
                              for(var i=0;i<childEntCol.length;i++)
                              {
                                if(colname==childEntCol[i]["value"])
                                {
                                  Erp.SetFieldValue("sel_parentTableColumn-"+token,childEntCol[i]["value"])
                                  break;
                                }
                              }
                            }
                          }
                         )
      }
      else if(dt_fieldtype[i].value==Erp.GetFieldValue("sel_EntityColumnName-"+token) && Fn.ToLowerCase(dt_fieldtype[i].text) !="singleselect"){
        Erp.SetFieldValue("sel_parentTableColumn-"+token,'');
        Erp.SetDisplay("sel_parentTableColumn-"+token,false);
      }
    }
  }
}
function color(type)
{
  //debugger;
  if(type=='warning')
  {
    return "warning";
  }
  else if(type=='success')
  {
    return "succes";
  }
  else if(type=='error')
  {
    return "err";
  }
  else if(type=='info')
  {
    return "info";
  }
}
function image(type)
{
  //debugger;
  if(type=='warning'){
    return "http://localhost:3500/Apps/App_DIP/10029068931678642557-512.png"
  }
  else if(type=='success'){
    return "http://localhost:3500/Apps/App_DIP/Q9BGTuy.png";
  }
  else if(type=='error'){
    return "http://localhost:3500/Apps/App_DIP/GnyDvKN.png";
  }
  else if(type=='info')
  {
    return "http://localhost:3500/Apps/App_DIP/12151627261617256522-512.png"
  }
}
function Checkbox1_Change(elem,data,field){
  if(!data || !Erp.ValidateData(["sel_configuration"]))
  {
    Erp.SetFieldValue("Checkbox1",false)
    return;
  }
  else{
    debugger
    var entityName="";
    var excelattachment_preview='';
    
    Erp.LoadVariable('tbl_cfg',function(){
      
      entityName=tbl_cfg[0]['entity_fid'];
      excelattachment_preview=tbl_cfg[0]["excelattachment_preview"];
      if(Fn.IsEmpty(tbl_cfg[0]['mappingjson']))
      {
        Erp.SetDisplay("pnl_mapping",false);
        Erp.ShowMessage("Column Mapping Not Found...","error")
        Erp.SetFieldValue("Checkbox1",false)
      }
      else
      {
        var anchorElement = $("<a>").attr({
          "href": excelattachment_preview, target: "_blank"}
                                         );
        // Wrap the div element with the anchor element
        $('#btn_preview').wrap(anchorElement);
        Erp.SetDisplay('btn_preview',true)
        Erp.ServerCommand('entitydata', {
          entityName:entityName}
                          ,  function(cmd,args){
                            entityColumn=args.dt_EntityColumn
                            dt_fieldtype=args.dt_fieldtype;
                            Erp.SetDisplay("pnl_mapping",true);
                            Erp.Repeater.Databind("rtp_mapping",JSON.parse(tbl_cfg[0]['mappingjson']));
                          }
                         );
      }
      
    }
                    );
  }
}
function sel_configuration_Change(elem,data,field){
  
  Erp.SetParam(window,"pid",Erp.GetFieldValue("sel_configuration"))
  Erp.Repeater.Databind('rtp_mapping',{
  }
                       )
}


