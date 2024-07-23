function InitUI() {$('#PageTitle').children('._i').html(Erp.PageIcon).next().html(Erp.PageTitle);PkIds=[];
GridList.push({ID:"sel_dep_grid",BindOnload:false,Title:"",AdvFilter:[],GroupInfo:[],IsLookup:1,OnBind:null});
initGridSettings("sel_dep_grid");
$("#sel_dep_grid_ctl00_TopPager").find('.rgCommandCell').append($('#sel_dep_grid_cmd'));
window.__erp_fn_0= function (el,onChange){
var ddl=el;ddl.parent().addClass('ui-list');ddl.data('InlineMode',true);ddl.data('FieldID','uid_0');ddl.data('LookupCode','');ddl.data('Eids','tbl_department');ddl.data('FieldType','SINGLESELECT_TABLE');ddl.data('Multi',false);enableKeyboardForList(ddl);ddl.parent().on('click',function(){showSearchList($(this));});
el.on('selectchange',function(){onFieldChange(Select1_Change,$(this), {RecordID:$(this).data('RecordID'),EntityID:$(this).data('EntityID'),Text:$(this).val(),Keys:$(this).data('Keys'),CurrentRow:$(this).data('CurrentRow')}, Erp.GetField($(this).attr('id'))   );});

}
__erp_fn_0($('#sel_dep'),Select1_Change);
Erp.FieldInfo.push({Name:"_sel_dep",ID:"sel_dep",Disabled:false,Type:"Ddl",DataType:"SINGLESELECT_TABLE",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null});
GridList.push({ID:"sel_des_grid",BindOnload:false,Title:"",AdvFilter:[],GroupInfo:[],IsLookup:1,OnBind:null});
initGridSettings("sel_des_grid");
$("#sel_des_grid_ctl00_TopPager").find('.rgCommandCell').append($('#sel_des_grid_cmd'));
window.__erp_fn_1= function (el,onChange){
var ddl=el;ddl.parent().addClass('ui-list');ddl.data('InlineMode',true);ddl.data('FieldID','uid_1');ddl.data('LookupCode','');ddl.data('Eids','tbl_designation');ddl.data('FieldType','SINGLESELECT_TABLE');ddl.data('Multi',false);enableKeyboardForList(ddl);ddl.parent().on('click',function(){showSearchList($(this));});
el.on('selectchange',function(){onFieldChange(Select2_Change,$(this), {RecordID:$(this).data('RecordID'),EntityID:$(this).data('EntityID'),Text:$(this).val(),Keys:$(this).data('Keys'),CurrentRow:$(this).data('CurrentRow')}, Erp.GetField($(this).attr('id'))   );});

}
__erp_fn_1($('#sel_des'),Select2_Change);
Erp.FieldInfo.push({Name:"_sel_des",ID:"sel_des",Disabled:false,Type:"Ddl",DataType:"SINGLESELECT_TABLE",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null});
Erp.Repeater._rptrs["rpt_tiles"]={id:"rpt_tiles",ds:"",eid:"",pk:"",fid:"",parent:"",allowAdd:0,allowSave:0,isHorizontal:0,allowDrop:0,allowDrag:0,allowPaging:1,pageSize:30};
Erp.Repeater._Cache['rpt_tiles-loop']=tmpl('rpt_tiles-loop');
Erp.Repeater._Cache['rpt_tiles']=tmpl('rpt_tiles');
Erp.Repeater.OnRepeaterCommand("rpt_tiles",Repeater1_RepeaterCommand);
Erp.Repeater.OnParameterRequesting("rpt_tiles",Repeater1_ParameterRequesting);
$('#Fab-Main').floatingActionButton();


DbReferences.push({Id:"tbl_positioncode",Type:"Table",OnDemand:0,EntityId:"tbl_TP_positioncode",Columns:"",Xml:"_Q9BfKlhrb8Hh--JgttYyl-M3AA3lqCcBJfKAOO_wLYpCMwRv_Bp4LkJzX0-GSIkUneSeUWKpdp8fPDBZfutuA3aSALXjfWe6mgag_kPdtBhqHUpVglszN6Vwxg7LNXPOLbfTCIbFsFD5nEjf2948gxV-hOvftEXd3KJvTG05pt_vIadEj_v9DnQ0il-MualwO2_LNEwta8uu99tp2puyiFqUPFo3GdAQ6KwRXlSYPWRScRZH9akVDnP3tjrLl3f5zK8ROq2ZC5FVg0utl-387UvEOnkpZYqPjRm78EepneWL-S5swKXrffOMq7AcinCF16UhaNFV0cXG6MvYhjKcgJo6LnFDxpe2EIvUxCM_9ywtI9lXp3ISBC-VJQyBXlbds5_2MI0fnOMMYcb0muU7EC58THkjrs5yQL3HBY-KOCChBs51a6XGxIJeALmCuKNbG1tGdFQH_m-sDOxLqh8pZ0uz48jV-tvjVsBYjdtpa8cpP5rlGt8AO3X7ydXRThSnIdOQCIcuVJBG1BDC4faXjvNO9YDQ4z700n3DFoY3ouNUl8GE2drb2Z4lGIgQah-3SqVfoReD4Wl1EA89RpfwqS-yBx7TeAlHs-k0J7x8opAITyfz3wS59OhU2C5bnazBqrgh63p6qAOc6p5k5oGpQKyMxR2R1Ozyq46_uoAxmJA_AcrA6v3XEubJ9X5ORkU8GxFMhXqKDOQnziDGlbKs--7DBjxAsOceO7A2apcKjGFumvGUhfuMeaQzyJ6ZJmCK27iBJ47p1OWaBnIC5JHGx1QBWpLQx3T4_N8HPkFHNk3vpM_4O3Oj4mzVztCcTdfWnFumKVvKkln2iekgJB4fhPaXWWfeBdT0aJlYWGoWkxn6Vw9GVJy1lATWRkB00BM_D1QGTtiSREH9thCEhqPZAE7EfNdzJFzsDCQ8jhdmGTRuQ6wW3FtqP_UEE50IlOProdz9Jb1nK6LpufrQj_AfmsIJyYfCvTvFr9pR2B3p_3X4iyUlig8obnOzOZp8LTRxTc08CmkRpvjGymckQ_m7L7NnQDk3N796ztAm2Zdwlfix0_16rxtRYrPbYeHDsdfLlI-zdgiEpfOaUQQPWEv1tQ94tK51z9zV7VXnMAJQ67Sr-knqEo5I94VoYe3nxv8m9zmmv4jhbhYG5KuyRc4VreX8bEbXA8fnmG82STQuejqnMQi2Tie3dxigYHR_MqRIDStVvjDkvdticyIdeyeHwKY-618K0y9OkL93C4BZJ-FvgJ6YD5chxLOPCrOuzu38BxovqBroeLuYqu5JMQsjn_Cd_cc_b1HymY_Tg1C16vhX9yex5Xjk78cEhNUfrbLa_QMOCOPNVKXQdZmuOxMJKlZ9lWhQA0-swX95L95_KLNBmvrr1A7eqF2koxygEgXRTFyHtaw7s_U8YvE_kDVZlHSJST77WkhdPTViBSz0SR7-0Jr-gdaWI17EH7V1PISPgDhxs-7WCi7DTZj-aBdz3fQWBsrPuBVx4sFdHexut8oG4ke6VuqmJNMIPOZ0PR8tLr4Lx4vn2TfkfWl_3JyRRP01oHzyiAvUBxgS11-ARLGxWEBxQhtN63YCwB-HM_Xc2FLNXKXvgtrZdPvIX6IQQ_thCB27OAryvRCjqOmQxzKqAUNkhsDr-CIWDV24daVqWCvK_wQroOHn1YLZ2RNyB3w4wNM50gpnK5EPf6Pm8Fh30lcF2HQOA0s5iWVsnW37MD19AgwX08Ng3xof5lQq2pvPIBSwQYW3oxMfCFX6MZW1Wu4ZTVquIj_7g9QRE0R9ZDsulfxPrsAeBVIFlIlY1n48y5W3D7dGlKoDE4OxWPlJr1zH7XqK2r_OrCtkdb788DZBVm38qqZBge9CsmTOqiCbcPqO8vdsHL3i-eHcPjQ7nLG6AWyQPHVfQ1JxvyVNuUs8yqv5zUph2U4NGVKZAQOdzgufP8vSf6DoKOFbLPHX07ZkHHby8nZVljBhoppbOfCYRXFV6aWw3jjKH-wnxpYQD9VDR9LERsIYZv3ZGQmFYYX2O4RvMi117nOETNHCbHCZ7KwKXAKKtWyzd6oo5bXWhEs7eDl1qGcLVfiQiixsjUN3pSIIE8INnp_Uei97Dw5-s_n8jn0LIOEej7CnyJMArN3j84rdhHNNsoBRQtsd8nAZdeodc3ozKvKyuGmnLkqQ8ZVCc7Prr9co4CEfNDG4zQ3dk0pyPABGLBnnLn4JxMe99Ch1Msr_Ey6CpHDvVZjoJQohRaA2dY0gHFnB-e-R-rprEkxhbAibBz79AhsnV03tzxgAlUDM7DceEiVBr59Piu4hiatfmbXeQ0_kzSYLCZcIPfJi8ONsSN9-Uhpm5YpbFjEpYhbwxJwfCHpzSe71FKNtVQkeVm5FsuDiQTlGOHO_zzk3NQ-EmLcRnnjjJ0LhCZp6xCgfXeh9i-zjVIgjmOzHhU48pIIa5SoViwc1hZGj-aHvh6Ne9yJfUJzSmwSOWtlipzzIme0wP2pqC3vEiIID4CrtZ7VhdZUrZnLwiFk2T6MIoew1BiY2yuC2K0nJeCelo-BaqfCPqpv9NkG04Z3UDXtaJqYBPuh6RC-_TydSYOsx7rerGGf-BXv-OkVEEB2kWyh6kjiHnc79JV97LsGw4PipOgUspiV4z2fVjWNKV2KqPlI8mYz8J698CvGE_laj7HNG4n0vNredl2FkJmTFBThIGLTxEmHb69MjUgsr5MU9RvzOLbsXWsO2-atBomxKeTK7CL4PYG5Ezy-8HaCzS7C9zOf-bikkfoPP5qh0unodqguB_MBRwMkTjKYEjUC2SqxqiZev1eBQhg9lzagrZNL1PvcRANobNO8yAszcAyw-F0frY3Yo0ZMC5MAD6A1Xx_4mp6rGN0amRgl_d1altNlub19Wl4vEQL-l2EsEE8Mb16aGgkphuMHCeaxFY1_ZTjL81YKCpTsuKu-Jqvz-KEgyQkJ_iyKEGo4nflr9UZt3UM6ghaW_P757yc_f6EqctoTEsbLx1kk9qMxxZ1Jv1w0ivFtcSIvvTyjLxuGAgrZrLZM9oIpFL6BmwRYPbWy8LPnfhjqbM8m5KKIIOIA4JmuLmM95l8oCXZYOqfamDvAP3P9Zg7QwVIpYsUi7x5V1ufNoNV5gzLRiBmhk0Z0DzxBr6lg4bfdRDjbuLgls2U9le-kE9BIgiaoz2AP62cxTPgn-4sZ4wz7ogYaChgsc3k1DMxiXdislI8Ui8cVKSucP32UGQPnEKfzM7eOIyUx3jnnJu_yzdmXK_fisM4H9ivz4o9nalwNg0xhRLi6D6Jy8_UlyOHl72Yc5AzFXVu5SetX0oC_F-0KzyvsSqi_a7U-BF2hQ1ZuN9aO_4PV6MApEDDWOeQWpYQZtCeZ1BQFQ_tDP5WtAY0ik9R1G7pX2j_xaviNTMZN_TqA41qJCZ7Izs7JdwKwupb5n6631wdX6GYJIJXf_1XmkSsgz97D3e-4pxCYB3NCttB7a19ZUAXWVrDbV0b9frkWHEedyf509M44kcg4bg7HMvqm5s-8IAtA1YjJSP6y4t3Y37O0N5ORLkMi7dcwGKVRiK0NJPGsRHcy0eQ1uwdwRE0OEFl_ttr6_EnBmB9Xm6iDOD-Ex5aao4fJv09-Vmyymy-w9viV13LPMUd_4-KF_HiL5rbxB-lky7RhmUld0sPOVjMn9lH8kyBIHTGYT0Q3gyiosnY3bXnYXRU-zpKX4B21cUKnKr79yVUd7eODd2MLLKrCG3A-U9vYtATi9qhP1YCEuV-oEliDGB0wWVNrpDPP-YPCRzDasSx7O6j4CWZmubBKJwwCPX9MoM0PQTqtm13DWvvSIs6tXQkyyDONfh1GXHndGIUUsbuA37q3ePbf8Il8zuXTAVGk1vEa3N9yXlw4qnYfd2waMQBMaH4gp3UcNOAzfJrQ1q5SWNQryzFexm3tDZGSyEdmzB3aElpgl50pzj1ztLe9rp9gPFyRGu6qUBSpEYY8_vFGMT_hp6rLj3pikSECBespngOS5Ur7Cf-ex9ftiqOyzKkkSZ2zN1bgQmEMVzGsTp91obmMUpzl9xg9SVgeHZnT4XG9myF9LgJ6B-Vu7QUPOGp8Jb0hE9JRhQMwXR4N5SnmzFTq546xNe5n7GwpAmW9YKq2k-eZ_xZORfvJktGxyccLPKtjretQCu_hbmPJrL2S04eQIJVTrLxvu-2bCE4hjwHR3_8e31PjcBR8oaZH5O9TNwc9M3zzEMgtu_CB2eecka2p2vk5FBTXOlvjdTlfCfTIt9TYtuE-jBqEgW93JeBs9eCG6oFqLlml1YSSNOqZ2lRVGJjVWoLybNyhdhV_wSdScMDEb2KDfxQ_VHF4DaRxQq7wrMXykhQ00Qt8mBRhT5_aT8nokKPjvew3hnhs82mq9NSCBf1_sQQP7tBlwwLs6pFhQmJCbZvyuvq_VF11GAmWcmg2oa06OHCIV9vKN_ns-30lv2rMgSokrmUcObJzHrBHiSNN2ZUhCcyjKlj11xuoAzdYAzc2uQ-SOb_nO7hBUj9tDsRVLkQwtrEMb9g7Jxy2GudQTcNz6x7VXul_Xi2Yd1tAy5rFe8DDFGRD5xJoICl_-tmDgKGucGMWp6lNRVhIldHcPRuauqCmCCoJsm_v7Eg28jn18PDV7-CRpOurc9DhbDKM7NTfcrbnGjEF2ewMk3MD__D9b_mX-YqR6G_21l05Z162r3DcbLw4Z54W_zell_emBOK3kGPFTua7E83s5oWllAbqacWqX7WSyohOcYETBBbeBrcYpDy2WmwrdhoguatW7I8R5gCx2sDJQU990YQhVAPmVjlucRO2glw-buFhzUKaogZUBLMWw_LtCR2s5PlLRHG9pq2fwzQ87IbQ9IVIR2b-B2AWK-MlTrHX0CQUUhYCkm_jar32bIBYEQr0k-E52fWHsOyvITyj5Q5RuLCtdzJmoLOhc41IG8LYEv_rw-eNzdAGHsF8MvCVN-i3kFmUw0iQ2zhai7G1fk2eMQcM2EKiKQ2kC9hSU-Nzirg9A7ZwATP2fOXkONPwYmbaWphSkRRGhRt8rx7q6cBEGGTRuCo6yQs-qjI4Btob8nJFP9YfHkoDmK-4WoEjSMUlDPapWUXYQLsJdDVtbSLCYoFwPRFCFxi07wM5jSBsfZPF1haTagr_aezPlWmg6wN6kX7JydnhfzDreo_qaiXxKmoFIwixmiolQb03lMReYHASPqOHGyZ-oEldIz94_3-e1EVzxO76yItmUzklTL1jLOeIJIxzV-BqR2xkim8NqHWnySlCFt5Aj2B5hpjqYO34Akl9XVD_qVjYRN7Yt6uv7A-dpa6qohsS0-TEW1f2vPVf4ffYxeLBsnz1JOxHOveiFecxri7DFLa7o2rfqhYrSsXI2e1b-CbuTkcBTmBX4Ti_GzmDN9ynCUF1_RExaXjrOw3FZqCxkXY0eWB9mBfBw5G49WagRJq5lscjRQ_VI9jnbKmxHZLO6Ic467gzsofq43nn6mJh0hJhxWsnuYE7AgjbqyEB2vfePXSqoL0ledOt2D3mum-C0hKeJdq0cz7Z6Npp9_XL7-1ZQ1dX-BLH4xA9pLmhCnrv6vxW_fn4aNYsI4jn-wog74XMW5ZhY93n5Nh6eki-mgQ8uDGlGpHZCGjvT4SEJC_MAVQptp7NFRhQ0lpjbm9bpdrWK8DZmcG2CN6sKW3O33VhCyxoGOfsPvV1V1gkY-D5YM-LsBNBdRjkc6up6T2rS5aIkH4CVcUA_N6LujbdJjVFp3jDjlIligEAlu8JEyuUB2XwzvWfqoOpvPOxIxDFkBQoGZOV3p9CHk69wLJNpgCcv4EyXq_cZdIhNhAVhGAQZNUcfCjAmNH2u2rztRpkZ8g0SH0VZA7UVl3cdjp1ZOjeBgGf2Ry6UHBbqnY3x9ebdQiPPAnescpjnqnmjoxT6rJIT3Nt9rS_ZKhG8OgVBHLUhcR4GUbNgUs-LQVozubuOpsu6yURLDWwJNNGdoPtq1stmnrz7StEUrt50lAshnY-lXQpIVUQSA60OvOqVMV94j7wceXE569kJ3Z-D7f1FFQgFweD93gzT-b0sQTkIjr-VRH8a4tguH0uX2gclq47FMaSaawuQoP2ENI3j0A34N5JHL38A94mcr1wAM-q-amv2mPMF0PJ_Op3vx5uQ6OlxmKuhIZp0JXmWguSQ65vowzMO1PP-NeYp8a74-GfEKXyPmEIiu79wRwvNYbCAsgFcs0yZcPij-ISHe3AJOwSMQ7S7gV9Oo5Jnm02gVrNG1BbFHOgcIn4rC9Zjc6aD8GDoF41G57ODOrpO_Y1fYT0uFngypjEM1fgbOkJF9jD5O5zwhc0k-H1SpSFiZNwVLTdFlDHdiTikPvnoGID7mA-jtwhbaVML24AU3lEy9LY0ghBGuse0r0tgwzNO6DAXZ4PLA8mgmzzCbxken0B4wH4wQwVXqIvX1gS6uC586vl3zBD1A72-6lmyditl9W1hYS5noeclzyjKQ-SLKNL6J9sloXmZvhiGuT2FIB0ILahfvmuDGUxLRL7iwCUAl1nEO_rDAkiu-zO4-i1eETWr5tfFhY8IEeQj0Q1cWLa1ebK7zIf__HrktJkEQET-pw_dyksj1ZJY-s830e5OpAs9_SEemEyJ7yd_di2RowTbxyjwSguOhWC9DzJpp8sO0FapRZRAceyHMsqG3PO8jxYKTWuCasfaRtrxBAV_K91HjmA3np6rM06fm_Ivawo-2TyE6LHZsj0COuT02JmYFJqU2DLGEVASlvqyBc2rPnlPKVmXEnGkILr-yxHwikxwtsVD7YK1g96NKtxm1pRHRmxkxlMsfjQ8todP1p0qj9lv9gI4P5s6CjB2OKIxTpmeadG2__6qc96ShyQsXqjIKEA6TkKk-WlS91--IwBPyh7tH1ciJKU2vlvotC9TTw9SVQwMzargfxwXVpD1hJ4wGFUO9cPJ2QL1wpls_kxJeXGh4_5We1fmUVBSTUZs25cJ28BI-uhURR6U3CFZbH4yIxa0whhi6WE-xesoO81YoEZmef7u80qHwQFeHRItIZBJz3d6QKZT94ViEV0CBP0r9dedhihfSSKtzlVmBEJHrYy_Qf5y3Ckxt_Bestm7u6P2EE-9W6UwTPY0b3itt0CxaY5XKMfCELn7R42szevJeUzrne3jNvGiTosrf1UMpEZ1Yemqq_j34Kb_QDEUycP-2Vci3okM8tF_yuYp9Ny1r1vFNqd6_vVEy1yYKxsaFn3Cdvw0AvtbYEMhUTTKNK692VrHQH3h5E0yLNCH5kxCJAC-WuTwOdDwBh7qtVRPwEOKw4QabjL18PP9mUEoT11sEQMeShGf9WjFRV7H2Jt3ATqNBSBfein7eDwt1SZfbfzD71DHUYkJ6MEcHOrrSDp4SyxKzIi5J_4S5lpFhBhdFthOE-qLjDSxg4DRrx_ago98uaEbjz3mihxwhDWeMAs_o7o2a0KqS5Zy9C5xhMSoHEBUIY65Q6K5ulLWxqlX1-uOocCEZ0fJhwQam3Nua5DSvH3u0tLF8_XUq7OrE4k5A_4v5S-o4Pi9xuG6tMzXFR_BZQkFsmmPUHLgLJMbjl9cGT-gdVBKotOjf0Sk2LrOLRVinHM80ot0QJ8IRdAiDUqhVZnL0Lbmk7lfxsrW8iswOyFfzezGfGwaiYSp-53OmBPTECz1wYx2VPIdvAMYr72XJhxoaCrHPZLoIhXXHwcPkisiKuZ1uBZFmeuMNV-Qzmk7XI1bD5ccwNu4Mh8j4ug_162Z30X3LRDiEesx1msFE8YlGNc8RycIexAoTk7mbxwJKt1AoVw5LbysJtqOusQL1ZT1dBKLfbWvyki-HMXptNCNDzDLJ6I1u6L91gny7UDJSGqk6QWnexBtNS_w3iyAbiDa367Ba-Jn9lad7hmc60HA9cU1bcnLbL1q3gIA1Eg1RM8aICHyCObWqXY171K2eB6NQR60o335w_259GqyWRQiwjn5zF7oIjF4fYASzNpQUlSuvQJIdDGt_pkBg_zqel_gMhawEB07j6JTZs8T9pNkOnfpYjPGjxOkEJNz8Sh5IElZ1dlOU2ukEO7IETtqTuFn-83tQp_H3JC_gKO_8admIv6MJqJ9-H7Ni63B3qHh_U29BZfY2PUew4byLLxbN7sTFNdOQ5IDDwzilTsc-U0K2VIgBYId7jQ-SO4jiAKjsw7huJTmKLBDHakV0qYhtDm3XENMbOfE0JIv33QTMJRGNrEB3r2fHzWnHdc0-IOTDgXrBTlCaeUQ2n1lVocP8KpvvxMnGnzwdPQuYJdJrpb5JH4Cg9d6f31QNb9Ts5ZuLHK3s_iKE3xBq9H8Q_6ljippN-BxRNfiU9LGpAttEPCcCrvbqhg9rdeCQo05Dcs3twahVmw1YXg-Enq_ea92Qb4qG1_LQigmPBlx0z7g6gUkn30b4xLV1cECSa7HuieXR7OQQ3893ZG_FLSFiAHiTRv2IviPAGzA00xRW-WnOTFGyDsVOWOBpWVGFQKIl3UhgFYoPWE2uZ0x50z0ENKCyIf6R6-YA2n7BNIJnpWh2R71hU6zl-Q3yeK-cQ9wOlHYEVwIFk44wgQwi6FCcw8prEat6SSs8kgDcU2e9eik2Klj9642Ylrqr_-F9CR35LuEc6eVdwgajjtD3CrRu2WIyB2TG-io_WJKcgMGUDyO6LkimkhA5H-M0IwXrpwLg8hKKeZoXGz-MKsK7C-RG6S1MEH4DdcYUnicW8svDW1tZhgy-WpO-2Dujr2R0f7boo_E4fFucSBiHJTbFwjDUhv-xFJ7YmgKW17ldX79qpPUWix5LEwOgQ0hpzGv5QHf3RgL3wUmQZbuSHB3rcByYjkIUI7FNfSORqND6MkIopdmgqkYaIa2Bi4hzjh6uG-Zr4M-93xd5xPBFLc9hDigeYwfbZAJnJZP4IPEHlH__aPOhkVuXFbxx2a7v4ZM53CiEu8oVssOPT1idkrgWB4PkRjK_c-Hufun-6Jnsd_TUyGcNvpqbqiGBabjdnU9-_eEmou5-pGpg89y1oTtaOgILCcWC5Y0Ms4BiuH78GR_9LPLrHYgpFrhDyrbZd7t8qFZU-xTJmm4OhOKmTDT33y_P6oO6J8dPg4k-zHBzq56qLE0ZUTYeM7_95APdE6TUIkPh8eiW9ZijfNsKlnYgHiRzaCT8Sps9rfHTZX0Fu83QmmrOtU7zIYHqiNfPBm3HELKDRM4XH7slwnm0KVkoSejACRl_D5OtDFTpNCYtZpb2pzAjlmpvIa2F_bNWNY-xMaez703uLfLaUdY4A4OiDU3dSTz-Amia3ysIyOMo99RfT9H-m5NyHRlFWrFuhRxg9hV8nVanY1k5E8NjyV8WLhbp9Hwrq938aHDWM2n0hz8coDTNWzRHwroWUni6wJAIfOh0_VazgJLDhQX1sTdwRrN1_dXNevli_LPl9gvvlU6VPwHnpWNTE8lDPL2vHYJCnScqr_QTQkQyHxnJABFsV3b7exIaea_xq484rVVp6HnGveLGKL-nqg8NrRFf_2luYQ-9Zcco3m7bN2m07SQSa2Y6il4tswcW27w6bmmvRO0J-_hK-pvotdJHF5PeluVMJ_UlxA-sMQxBtg3MJ9z2a5k8ftGNqjZTtIkTwGmLIBbGALDQ0N6pNkEhCAFBK9nuS00PKm9fy77RaF43giuox8IIUUCtdbwCNlGt_6V98gLQ7v6p0Uo-ymJup7c48ovlszpIbUU4DtawrFjaxc3ZraIbS6G28Iln9DoGV9tyfKUoGXsu5d5c4GnKu8_LUQ4jfx9bFdNXHhnCyHBUqXsIupTz3RFkdRBnKPuJXB6YnlcU08klRIKCqVP30Ggif1D9ytMKvxPjwranxWQ7TTyxkEPb2r_IXPPkGntKQfIudt_34GO0m2ttry5QFVI1ioUKPKIY-35lGfgr0S9UI5Wf1wiWWcsGUw4B5tTMbgW0ovn0EZPTlE3ytlyZSnJ3VnxrLfBk4EKEHp2Y2yHp7WWc28U4PyCGtfumEr-3eiQCcXV4M_wK3mZaW4DRZq42elNsM9A7Y9VCfGQsSCr1cp7NZTj0ko1kP3uhwulnJnKK7Gjv05BU3vlw8OHE1-Rk-H9rB_Oq_K4OnStHrcIYsAxozOERkWCGavbHLQtxSZwWLVAH19TsqdyoWO7-TiQsN5ysfkcqMy6G53Ty5B5c7PdH50iO5OTGRpsj-6Dzku_EXe6-zLfG2HJ_z9lohXOXBtb0TWUnhguwgjW-65XkKXNiPOH0CMOZoHbSSE0ozT4GdriI3XnBU0BkH_ixDSi9XRfK2FpU5Ok1TAudX6IOFBmsd4-aSCdkVriIUeCegtY77rseEaPYVv--pbadf7RyT3PpjU6YD5cGOuI1phGtTCVtYVypfpOx7rlhszZSMd5aXNq5t-n-ok37-3J2B3BxHgUi2ZB2qGBh8YBrKBsGYo0SVKp1Y4_oJQzlYcQ8IboRIq37e5-SlHj7QSqUGyS1ff4S4a3wdo16OShcfbWGmtiLfvc7IKhATMgFDuOkvA9VAy25fWqmHayzBbNQyC5SsK_R4FO-xWn0xEb1H8dWND6S_N9GfqKOrcc-gdqqo1-Nc6OJaaBxe7acgJ-2JY2bv7yAJuZ-0-YBYMXfP0ahxe4uw0k4KIPEExsP0O4dCXmoadA-HieFegaX5ZcFBorhtSD1E3wCluCOzbKd7qovzhJLXTIPBN72iPxwrrwEw5-hZXxHctoJbHn05s26pUKkrak5ueqk6C5i6zYWDPi6qHJVP_T3a54w1dYsOGgO2dlVw25SziTXIfOF83Q62zgYXZTGyrqkHiZ5qcCCSxhPooWYGM769XFedt74kIXu6h9TwBxIef4p5q5qPGIDyXUmKW3GNvfvsvb7NkpKiR6AVB2-nbw7JmXRfx-LemPUe5iqOLT9gqNmwcC6yJhx9N0Ry7tvpndKC7nV3B5Ble2NJC1DMw7cXMyO8dVu3t9jyejdd1Oc6zIs_wPmb2nKUclzNY2BP0HTr61xSA5WfsLCpxRFmpMJOiejnOFKJdKhF2JPv-IGIbK9HrYH8VRSmjquLfD6_dOaotjR8zZCn1V8zc9AyuxYllFq9mQ63T0eJGfhTj3WjUf7NXPUxOq3mZcLKpbE5p2cjsQvoQqPoUc7_5AhWXt5aMPWBvR2M5VZAScPSpnV-UPdQ2uWaMY_LkchksFOdnH0tTxLt1a7iSrhxhJtRUyqVHvzA2LO6JvCdS6KWQ05rVFsCmcv67cESKEWdyjnjlS-uPTOAptr0bs04Eg2yK1lk4FaWoBpi7X6wHJQBioitnMTIxKo5-nxHRhsfqsod4oveRcQG3FyFLlW_yevwtjXXaDHi6zsyUzWCniqhiwwcq2SDK7svE9PpS1Z1_ClAnNeCJUI6va9p4Gsdss-FeUSmhTvjP2HUXVSN3-EXPhx0eP6mKOGFNGRnCM6PU62ypufKfXHw29J9GmlSDMcdw2fY3xxwPkv5_7RU7wXzRD29Wp3k8zy9N-bJkXeiNJ5vThZ-c7Uhnr6Eh4dhNVz1iCFkZYx2DQnsjxJKqMsP8PY3ELg6P5Qwn5pqmHIF_WDFMGFPEJaidfduhcZRxpeVcUQlB5PehNIOshpNDl8qNujlb53VGJezgAMqIBZANSY0YNtd4nr9bN5xOonRDzMYGEIjV325fAGMdR4cK00ykRsEwgPuQNCBfV8vCsfBnsh0-R0igjprcBa0BktnCgQTzWav6J_HEu2tQr0N6itdV1GAVBJB05vBlpB0hyqaYKYbPEjIrzdSqWK8Ur45KvbqGydKGcMM0jDoOwrmRbF9noEp4fuG-5eX4RHhW8Tr97uZHpUGDdItEEW42clolEwFBYTdxgzAZ25BoDy68YEsnFxSpeDkI5ro38oKBYz2kKRrwWSAhnmqkV6HdOZajxaWrN3DA9B7V4Si2JtoX103Wf8bwwGdrtUmwmmyhAhpR6YythUMTG5zUd8rTONOYC2x8SsW17AnXm91sggEfwjl7GbXh036W379VZFPQJfvgFdHR-z_sdDmWOT0wWXviN9OGbyWmujp--N78SQDOmpNw6L_9mz7OEiY56KHnIc6EFu1cKJB7N5F2PPLEvBUxlotl00_btGJLC3Ulvsjlp666Wo_nDeexrIiutkvDVJIQnEYoac93DpwLTmeC6v7qsJ76o400v_VZfX1tirYeEGaCIeB-prGd5qyMTY56dZG0hxzJnlY8Vhk-1RExCq1RHSciBpgVWUyyQnWzpK31LyeSExn48z_Jrxw7LeTHmOw616xkckE9UZNg9iwmu88lkCouUlmKxxfl6Wzqpax8wNmF_35hVbJ9StEvXnlFYX-EPHj-XK99ajKrd8wNUauuKdEKzu3lyf_pqvC8oDh3yxTgidHSjLWzp2Pj1rl2wxkQHX8NztLKKgKbDaoCZSQfAgTEbu3XQnJSo2XgFF2G1zWReMaidgydp-fBnWE8pHIOh73m483Vv13VscfWP_eUj9z4WM79V7gRPiS2JFLWZZNMZrEHF3JVykvqda9KW4_L07O6q4sKYvWWc664U6lP2_O0pa3Qw0B-01UzITXIAhGKZmo_UECm6p7TNF-1crmWmOx8Dz1DXZjFXlatWfxqK1oddhHH0QDw74LqINpX50BcIt0UMdksr-Uj16-YH_W9Z6Mr8gucp1B3BB4ncqrp5z-syyB0KZvJW-oio6bdORdnWEuvjv44u6xRlcdkGGxEhFFhI8kyfb0llfkrAs7PFuQmPEFEOloALhQKUCvbwntIuNWCyp2hAV6M5p0gv4KTaLVdqe3DgmCX5LofreLrWRAXr_E0mLxjTFeEsImUOXBMa4iQzdf4ac31ppJhAu-DZOM-6_lgm_itowQ7TmuaMRlRoXqXuTVOmJiKIB-ir1k7HOAHQkVR9kxJvi7CEWXNWinVgpe9hTdR1xlneGxenK5pw_oXJ7bvTXPn1pw613w0sFy7FsnGk4NFugTTl6IeSIbCk0jvItgRyN09hwZ5c7CtTZyyJ1tR4F8VUqp_C2VbcXqOixUQTB_el1CkbsMBphRVWWRDni_D7xonIuRUgrYZbUtCF5k-OHKDw9pIhsGmRdOZQiAWDbfArYFzj7lDi3T1brVYV6PBhG9LA9IW8RR_K2m-BIpyNiC0f1pGr5OfqMqBwOAEWvNhgrJKNnMnKV8sPeuzUsbl7QyYN4nL72DgP996rUy9_hm6RLCJk6wuaxbuXlLLhpCi-cGk74EIQKTTPTI6lFp-_iTLpOtA-_xew55_ZoE0dmhKFPUeecxSMHmXfJV_M4egsSIJ5wY93cT6OkQ-tA1cKl77a5pdgSlOL908j1i8Ud0Zj58A0OLe5KtHnq1GJ3e6R1zsyJSWk6eJwI0pgd2v4EKZC1Tz99GfQRdKejqRrQx-wyn8jSiN6cyKN4U-5ndO9uN1RB2ahBwPC_l2oYcVWbXzsR826hbFIvFJMV43vAjwTsnttf-vSYNRwAz3Z1SLP4JlIMOIcLt9Qb6NVSm9GPHSIRdIqYI5o3EumXns7kypWV3-pPYPFnTDTKsXSEeTVlb9bkAyr7OEoMxbLJlN5guphpEPNiV76O7FhP1irPHoQTbq8AzJsubEr23ZGZBIMkgRc8d-z_SXSuF5w1KU6oRMhApoJ8NqT1gc3SfEfHSr0oURf-w0gslzXSksU9N0IqlTZzJ2GgS7AaZS_Nf5hJHZBv0FhEERCixqfAWtU0hvy0BasB4T3kmhtpghwR1NwEcF6lDDlJ0zLLvwI0d6ptB5MvROiO8ko90r2oRz1WQfbd1Jqf9nANWupBoinGO6EFCKmlBiC_ZXK0ZdonrSaZGAfQYUIqbSOJtj5BXj1_YmuM2b69fR7wSJmkUVQGC3VKOLPa0m3WxZPE5eTF8bMFTYd4c0iyCZuKNlS0ZEkAAtjYyNCN8ZdMbYM2Kfct4Fvs79AH-I_N4jcamMageDlo6KWyniuvs39gne7p8FFGjMUQaDpFx8gIrQd9UjzJKd4Is2kiJKfbICajHZ9EsB1DZS63PpIj7dZtYXKuvH5YDxwFDfbiCSZ5dVy6GciHBQTkDkgA6sdND0XqJfdeUr-r_P-Iek1QUYr8FTQHlEPY4WsMO3Co6LvuOQ3KfPJAbwyfe90aBGs6_n71zOhBQjhwxc5-cTBCqDkJlVm4wtKPIE7WdFLN21XLxLfuLBF-Sz50VAFS-0xrdKWOm6milJKbRKETckeX7-rP-W072asKGo8C5zWv2hXSbhPyMvUIln40fcotu1yG590ms0iohRnFY7FwIkSGlWg1WehJslC8kflTASj3ipD0LLjd_RRmYxZv6iax3evaSsi3rDmQpSwiIR16tE77r1pFPcnDzwBI8lkUUS4GwrfBGcY2HO8_AhT1FcA7e73TWvlLf-tvj1smR8kJfdkWwL2mX-zVJQi5EC1ctJ7dAWmo0UTXL7YcuYktdjoGQV4oDrjsxuhugeAHNLibQQENHC5VEumupd46EqDjeN8KC6d82XBOjZBh5qK_WQYcMLCbAk1OJHHqGiRf-bY0Pu2P1A_AN0mDmSN2p6ptPlYLyKEim3kR2RNF3TPKvM5byzA6suXvQN1eM82lVRuoQHoYzr6wCTk3VzsTgi6U3g4L7DuZrg3S1zfC8XtnJuMa-wJuBHROD10UOwny8V68V6CqRIF-o9urEuvWpF5iTHUuUxvrfZFNR1mv94r9AOh7elzGNQtZNTresLJApvqi_E0GsOVJvwQ4F4sxWn8x22cUkgCxAER2bwRh_HZFSI3WoCjtxwJlKJlXDM3FbfM2QBlCIF8OYmnCS79h6GHauQ4CJEEy8iLWXArQREa8b7IEmobzzjFbaEobxTUsR6DFuI-Z0AQ6dJ7cFRqcF1AuffAxmukisENOpi4bpWUX4k87_l70Zq3xBntRWhhwJ0FyXo-GlRxE5Vfl4mtdrtNSzSVPoGs5BcMsxNNPVoB3bW8zJaul7CqLoNna-3r13v6eBZ3Zclx4gTdhCe5fLFeNzMgMfoCY-QJEOOHX5rZ_uBKd6T5yRfkBBmSSx8zVGWEsa1sJYLrG_hgXg447DsHDmdEOMCF7-ib_drGyh4yDumiXGFKqqYb3De7lvuilpnWu4yH8I7rqkjievgiGyqbXZqfQU282hjmx-qo6y0eLmfJhnicUbBB2B6b3YcK96MX1oepvDp6_0sD2lTBRq_t9zHrB82D_8Rk82Oz_BJKzr9JtmHma0wQv7HMmzw9Mrb8qvc9JXQJTcZ1qqEI4lgojKHaav4CKnF5ZpI-Ia05gKQObbUnpzFXVjeJpEsb57UQmomzRWk1xXWBqqYQPJHKM_1AZgh5Z81-faEqWTL5y4VSegTIKW1ZKNiPIzRxmPHniaREMXgDCakLYwBMzX7ZH_hHhPVTP9VZejHgYN1osKG2_W0yZgso_791YziC8OgeOqV5zXzfdBhts7oJKxTwo_XIc03doUIUYbU1SiJUakgdtTnhaHynzhXye6cAGWHsi4jE27ZexNJzTmsKzW8PWpgsrVEJTbNdSXLS_KHhRbUlc55DtbzglAys6IdMUN-m_BTg0YvuowBPDzwhZVbm38f1kkGU8WNvII8zPMQRu1isd_AmgQUE15IO5jC7I5LKHFRtUFkEmQUHLcAC7SEatmWxZ2i6TbGuh2VT6qVeUwuQoGqsULZ4uyg-jEjktqoRVIp_4czujWIJ4lnaMe5vU8VLktK50A6YKziBO7UZBjx5_KUC1ELO41zpawyNlMa4MbDsUhnB43lE-pS9OSlQNUiROlMbodn8RA9rQxTS3tzlZjmYsGadeNAZPA1ganP5u18Ug2K8ruRrYtg6-Ua0z4MfE8V_h5Lw03oGYZw1Jt1R0O8_9HCQ0wjvvuB0le-JPqQljbAoUXThCA5_3OTzVlmiJTbhXdUJonFgYBzUuVoiK8Sj3awugLYZFZtah6biBy5yb6dQvzcOEB-2Dvvm2PXZa7HlHs6QrsKmekxy_b8GCTQ0SwPRs-CEOW8ztLD-jt7damtXJYckA0IgzPT7YSuWo1bFg4_YBbRliakQ_ULuH2UcPwo3OdKPSVFplx73qgVPIHh_VmTeceXaVzG4kLT4K8by5fazYL_2B9Wud7Q3Od-O0A1gbgEYrwSukzE5lwpDG3qoNZM_ue5SPgYdOkRHZSZxxmKqUMiNz-m1mrZjvBoQH7KTNEUTueYSSll3pSjx09SgmZGldN_NDsGLM3oNW7b6xr8RAasDKDZh6UxPzwFXuRvH1XO_MxgPrflAfcYB925D4Dwh3Ts2pQPnwqrVz5YDHUZaVXjftixitxJL2hI6GaCAaNYuWHX8ba1IuLEjcFusD882CBE-b84VqhRQ2zS2yXSK8gajTscJV9mudSlpZEjYdvji0qca8030ehiLYSVprdH50xSZODTsKhx61xvbAE3VHjXsNnh1Rj-IwTgTXawmVo-TDBU7u-B4tckU-23U5FGC8vFEQ9oG0_ZfAamOkVyoKri0ecOJGxlcNsVsJO19D7smLHkMduA3yNsblZI2tf9CbuaKnnM2G0BKJZuNkmmk8JVd05Z0ivFPxnEApF_DhTjo73NgeD3Tdc0D_z_PZyprEH7xIMpQdrpv7LT2gEdZIyKnJ_tPqHvnpTuYPDwgeaJbUZZahmQx9jLqKEHPxCS7RpTqLwvWmQCtswk8JRrw6F21ItZhgkWid8m3vwV--D0lg31uR4LcbNUpbt7MXPkyd7lcxg__uN6CpcvTi2TfsJmjzAPKvab_SbFhhKGuNDOeLSggkqyAS8tDdHy6ToP88R8-Q-n0_5cL5olRXMPDQ-5Mu8gj_BRZ4CZnFrN17H2Gs8V_FGr4EeWjCh3QmI8tj-j_yo_lZ54hNmxKO4PKsK_OOWeIM9eMxoofOEsuDDS5NdEtA1T_jp-1cP1ZkFnG84BWtSH_S-c87xBkt0NL4crBtuaYaIo1FoDVd3K72GGIpy6pnGGlm2oIlvvDO4ZX7M2MavQhty43QpM9UVldueg5dvDjkLxv9sqm-ZUe3uTqItop3g1PRtRlBsJh2YLF1CF0wY1aosdo7q2E2jq1yZ2uY4SgyrDS6ALmjAniHP7TonVClqHeCY7msxEovjUjk3pwEJqzVaFO6LGE7VCHDaP-8V47OeKG8TeXs2qKQYKPuncr6javFsyZeNgV3UQyieI-jQSijFk87Hk_QY0l-MKZKXESIgEqejaiyG_sW4xODm-6okHtL0Jx35QEwYVL7iI8rGIGPBgU2-xVs_F0Z_T_0emWarDYDQDDTj-dgT7341xeQ808vb5Ye2lKklO_Ttx_5KT8Aize_OZyf6WvPgw3QXH6xlZdiGboep4voJhia5FTur3qnTRwSas1UdcOy8qwX7ZFfKxZRR5Eq5Zch0AbkZJhc7RfwpJwrbzNPJXj0ykwbol8e6JKzq4IQA3sIDl1cCEgRQLQ3VgB7m3X-Kw0EK1Jrow5YTlMhnNozY9AwI2g5tin8HSRh1jm0hOj4xX_vNroKwQCdQgy35ukx_rt_SlIdqCzp6XWOetfQV1AiSoJ3BXGuTmuUDgKuV0nlDSdOWgrLrUZ_gn_5BZCy4QqdSTIl6e5KzlLPzveaTuIdL4TpK10-4BGE5HvubEpxLsYmT3crthO8cdzOdwS6mj7Zb90HgeweawcGTsvI1mPX7873AvlYll1Jc1mZh7_OqEaYgmyOYFqT13Yc7t_uz4nyyIgw2sUM1TLIPAnoLOnNvGvw0YDJrXtcHQaqt5o5V4pxepJLrGMsbxmhszbVw5ufQLgyMVhpcRMUWw9EUvjp7Eb76Ud897Hb_wy-SCLcT57TJ7uxGJyINQgeXYa9Yx_TNNQRDNz_l2mq-kIlbjZNXgQd0UWQxyJU5QooWDhvusZlychR17TXmECZS3ED4AGdXIij290osbiLDuOyPelFHWleslXyWNRWZwzEvbKivjpER8c584KJKQY8T2OwA2LNyPfIV3BsDmC9laLlUCUjhH1-g1qQt3HnLAMyyLYrrDl-byAKmd4dK2_XKHNfQn4Lp9H79fAjCVjkuiKXuLxhcQokX_IRQ84qbnBF6lMmWDwDumF-WHlhp5UODws3c7GKblUL6DjUkY4FKFuwtg3Lirs5aV_l-erMIKK4iKi9SCf07pFMsgnIJr35khqIZwiQDcS0Ol6t4MYAIvyXbQLqBzT-TjpEvXsI_k2QQsKl8h7NkjOGcfFrM9ZjoEFsiAxFkY6GyaPgUlLdDh4BInEGMtZ5fT5aCr8wlQOU0cwsvINR37RFdJsjDo4MAvPegQdzDXH-Yao6H6G_MY8kUqyVyGmM_aKaC0NnSLIFmWi7iMds_I99Z_T1vjC1PmnG6DRaVlj1-Lt1jhU8fGAPRJLzWNv2r7OaVSSOIWCOkQ4FVMPZxqDe6EOQu-yWmctOpRuod6btnvQ1RVQ8EkTjl2gvpbJG1smQvc297kPRFwCytRJ5jZWk0F9AlyOnPbn71yZofK6I8AJo88uQYYuFpx7ntLc3rKMy0HSrglkEZR1IuqKSHTuv9Acl3gE6YOYwgb5mtmvFSl6GjNQdXWcWUVElbs7Uw84sNnNtxysk8E3Ob49D8JJjS3G2wZM6nLJ5g582lNVI_Q2D_GsmqIuIdQQ-kpZulAv2rXwkOxHE9KusGl75Zatjo2aQIH5iuQnGfGaPetWqUznOGZtQeIEK0B60r2hg",AlwaysLoad:false });window.tbl_positioncode='';
 mxEntityList={};

if(typeof __initUi2=='function')__initUi2();




};
function openForm(id)
{

Erp.OpenWindow({"Action":"ADDFORM","Responsive":1,"Entity":"tbl_VA_employeeinformation","Form":"Layout_SearchForOnBoardin","Refresh":false,"Global":false,"Title":"","Params":"mode=fromtiles&&tilesid="+id,"Location":"Self"});

}
function Repeater1_ParameterRequesting(repeaterId,args){
  ///return {"@search":args.search};
}



function Repeater1_RepeaterCommand(repeaterId,args){

  
  
  
   var index=0;
  if(args.command=="page")
  	index=args.commandArgs;
  else
    Erp.Repeater.ApplyPageCommand("rpt_tiles", 0)//for search/sort resetting page number to 0
  
  if(args.command=="search")
    Erp.SetParam(window,"search",args.commandArgs);
  else if(args.command=="sort")
    Erp.SetParam(window,"rpt2sort",args.commandArgs);
  console.log(args);
  Erp.ServerCommand('cmd1', {index:index}, true, function(cmd,args){
     //Erp.Repeater.Databind('rpt_tiles',args.dt);
    debugger;
    
    if(Fn.IsEmpty(args.dt)|| args.dt.length<=0)  
  {
 // $("#rpt_tiles_tpgr").append($("#ColumnPanel1"))
    $("#ColumnPanel1").css({"left": "300px","top": "-77px"})
  Erp.Repeater.Databind('rpt_tiles',args.dt)
  }
    else
    {
      $("#ColumnPanel1").css({"left": "0px","top": "-18px"})
    Erp.Repeater.Databind('rpt_tiles',args.dt)
    }
     
   });
  
  
  
  
}

function Select1_Change(elem,data,field){
  Erp.SetParam(window,"dep",Erp.GetFieldValue("sel_dep"));
  
  /*Erp.LoadVariable('tbl_positioncode',function(){ 
    
    
  if(Fn.IsEmpty(tbl_positioncode)|| tbl_positioncode.length<=0)  
  {
 // $("#rpt_tiles_tpgr").append($("#ColumnPanel1"))
    $("#ColumnPanel1").css({"left": "300px","top": "-77px"})
  Erp.Repeater.Databind('rpt_tiles',tbl_positioncode)
  }
    else
    Erp.Repeater.Databind('rpt_tiles',tbl_positioncode)
  
  });
 */
  
  Repeater1_RepeaterCommand("rpt_tiles",{commandArgs:0});
}

function Select2_Change(elem,data,field){
 Erp.SetParam(window,"des",Erp.GetFieldValue("sel_des"));
  //Erp.SetParam(window,"validids",validids);
 /* Erp.LoadVariable('tbl_positioncode',function(){
    
    if(Fn.IsEmpty(tbl_positioncode)|| tbl_positioncode.length<=0)
    {
   // $("#rpt_tiles_tpgr").append($("#ColumnPanel1"))
      $("#ColumnPanel1").css({"left": "300px","top": "-77px"})
    Erp.Repeater.Databind('rpt_tiles',tbl_positioncode)
  }
    else
    Erp.Repeater.Databind('rpt_tiles',tbl_positioncode)});*/
  
  Repeater1_RepeaterCommand("rpt_tiles",{commandArgs:0});
  
  
}
var validids="";
Erp.OnLoad.Register(LoadFunction);
function LoadFunction(){
  //Erp.SetParam(window,"dep",'');
 // Erp.SetParam(window,"des",'');  
 $("#rpt_tiles_tpgr").append($("#ColumnPanel1"))
 
 
 
 
  Erp.SetParam(window,"rpt2search","");
  Erp.SetParam(window,"rpt2sort","");
  Repeater1_RepeaterCommand("rpt_tiles",{commandArgs:0});
 
 
 
 

}


