function InitUI() {$('#PageTitle').children('._i').html(Erp.PageIcon).next().html(Erp.PageTitle);PkIds=[];
Erp.FieldInfo.push({Name:"_html_aadharno",ID:"html_AadharNo",Disabled:false,Type:"Text",DataType:"TEXT",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null});
Erp.FieldInfo.push({Name:"_html_pan",ID:"html_Pan",Disabled:false,Type:"Text",DataType:"TEXT",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null});
Erp.FieldInfo.push({Name:"_html_phone",ID:"html_phone",Disabled:false,Type:"Text",DataType:"TEXT",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null});
Erp.FieldInfo.push({Name:"_chk_isadharchecked",ID:"chk_isadharchecked",Disabled:false,Type:"Bool",DataType:"CHECKBOX",CustomRender:false,Mandatory:false,IsDescriptive:false,ReqForCalc:false,Data:null});
$('#html_Search').on('click',function(){onFieldChange(html_Search_Click,$(this));});
$('#Fab-Main').floatingActionButton();
DbReferences.push({Type:"Simple",Id:"db_fld_0",Columns:"setting.company.employeeinfoformtag.layoutid",AlwaysLoad:false});window.db_fld_0='';

FunctionList.push({Name:'html_EmpID_Click',Refs:['db_fld_0']});

DbReferences.push({Id:"tbl_Employee",Type:"Table",OnDemand:1,EntityId:"tbl_employee",Columns:"",Xml:"_Q9BfKlhrb8Hh--JgttYys3AfW7iIW7IiFq0QnanlqCJ8X0vbSXFY3KgUhM13i13d8lnygLIhounc5MFYoeU6WTqde-YPI4ZAJzimCII5C_8cqldqlupXNeinH6uRESIy0N0D9FtFJpQU9TLXWoewuRY6wx44kRKWDLZC0jv4_sacKTsURYAeLTw3iJcnT_F9gvx6fUylkhPUl4mL0CcMO8ZioW7Oa7mrxSfnH0s9t4AT0UgzCZphZGJJWDGN3a73Zlws52JRYH_JFY1p0VogxilR6njSOH6thYSTs5ystldyAVpctXwuS0R07zie8dh0pDK-a4OEjxwrEDB6v7XPABqbB295qBkRqLKKogXM3DofFMpNGhHDieIs_Ry6gxm0gR0EgwGKj2C5GecriAIunbF4Xi0XxCg2k2Hv01QSV9ueF5YT772BytFnINTa9VJO59fvY1io3_1QTk6fvk4Se9goKi81tU90FO_gRVas1s0SCqYcEAGVPfTHG8mO3ieZ_comK7s1NJwSCNUJ4hRM0eyBjbj3M3PIaiWQkfn-ydmJkcpVRcrHkYeZlfzp97BlZRuGQg37uQXw-u0n_C7gYWUOpioMW54sLAQCnM0iYHu4OMvvKIfpjjvLmLcNUp2CeJ3htGZUyTrFxfX3T_pJa1ohBxwnsFqPgiYlGYOUwsbbsyMWnUvRjfRArUt7lmZBW0KzJayaO0YuUD_CjAnK1RQNFKozv6_7qkhcr0nhYj6JpGZM6l27IK75Z5iAyUBu3aj_ngfM16cNXL2XLGzsSvtsJ-pQNANdFOz-f2r1WMRSUDDZrSEdbrpnvgNOlkmateKv22bvSAGjyuXoOy-JFp7b6zoQsp7-A1G3w9vUTYD_p5ZmQSd_0WoWm0ySAa-5FxcOsF665q77Hk8EUTtasiEQDtx3cY0KINmztmzdfUARGBXE3xu1Qao893G-PBf5SmZaxkIBwLgy0fiVdBmW0N5DPx7oOoj3l5QO5Mu8McLJclVSozbzzpXqGedC9YVHSK-YrgmTdWTac4EB3RJ6JG785zj1GTZdPSCUtMKHo_UidazZg_SNrXpCAzfYyj73OBc7Vb_O7ahgI21rcTNdihWbDVcMANcEBMr6igmKKQ-d35h3yBjrvvHKeVYburtQBBtur6Sh-YSyXrK3jI95fzV4t6hGXYhfg_KT5Rz97nu4XuCXZx5YNIbfKz0Z6fgeOFl_ykNckUh1wHkNvl51zYvCnKFOyXMwN_1kmPC6O2kxf-AtDxKvLADxbLoYwfdF7Q0lJc8Hjk_wiCnzv1I_8WsukNRtMxNcI_ZPYZTihw24RQj9p9kcq7PGdTSfHfl6NQrGgLRWJ4jChdrn0J5oyQxKdbXfe81l3zoc_AyhEvVlOULG8rj4AWP1JBqfT7xqbSZSlyzjWTwhn1g8cXqTv1sZXq7wgN-wLbemIRpDPC9cY1U5M0MDRMfthWIHm0mhrN6Fv2LT_mpn1fwztyhz2YomyrpMhVwdKNiHczLsGTWsHOJCp3H0RcNX9mL1N44VGffYvfT8i0MCOaw0z_GD8ZnrOdTRpWpFDOKTUEKZu6bKjznFYBpzElatzL4AcxAjMu5r-7Pe6U5BnZs_9pws8V2uF8Cg5FPnjKHYc9mksDvDjCJwA1LtrU8gAl5JyKDJb_m6eoVlTsgZ7_JwadzayNKFSo4hBymcxmxqhGMGA4tLFCLeUDitKjN9LG6QOduzuM5sDi7jTAmzVfX3GtuaGedEgWAcUXt-kMH4dO9PWzeXKOqnTzYPyYlTh7nvVaUfLseY9CzYrH8vDM5VSILgmDol3zJRe7HWWPgJZgAUqsUiJ1WIgSOI0sqZb3j42qMsUnzgXBZNR2J4lcszIR8uHVKPnDQD752oc03J1JcH3oJJxJfpfmc3mZWvMH93pxRkLU-ZLSQF4R3z1tT604PQpCF1boPumw9NEHLYi-MC9GQjeF_fLxGF3bANrAlD1RB58EHMeSu0TtEpgpGT_l87owpfaJmLnX0cePwhlGyT3L6V4R6FmevnjKQIWtBlmVYBXnGCYohX9KUtnTSPIkrDGJarkAVJovqc3pw0YbM-l6_6mp_uBMToDmAktg_X7tmiflKjrGBRc3kXyq_RhdRamfhylZ6HoYTuDqUXopPKHmCA6vFm2HHbNqiUQ0BsBy5KyccIuRrZ41bBKseVElexeTkxl_T2tK2C0QRY892rXo1s1arALM8whXhzkIGBuoz6XDCQWT1EWTasR2-kPxlDYDNF99oBS2wnHepzsOJqvzI2uwxdbRcSvEghuKLDbsw-StrZHBFDZPrTMWENhDX4LqttTywwj4QoJRRw9Hc_Wgmm2DfpAw9QL5Gpdsyvy1MYs4taFxtlcFNx5pQA6CFTcuZ-vhHNFSaL072dNPZtU7F92UnnevIng1-fO8OYbuueMPSuaeyoYHTlucgAd238hWx2RX4-hwzik-Vko0zXoG00-9gTYtgROn59xBXAHNztH1g-3v0nE9ExWJAijA2YF0uSzwimdxdolwYwPYqYxEKtv50a36-Natxh370MweFok7hEzjEw9CrFekpT5GUZfLCzOslbzFvOVUj1i_ux53Sr1oudq7LzchS8mmAdYGynDzqXrwv5YdH2l_JT7hISNIQnA9EDoI6vDg4-zfHKH-Ajo0KXUL8pvUNHdEPiZ0cTQncK4eXTsWp4QHtINf7ojp7uPnCQP7Jnv3GAG2Zulz6OrW2DsZprSp-wJdobqu1fY4pIv9MfqiPDwE8EvwqIJ7bjCaUjltqzwGxhj2MZvgQZbAihc_CWArNd52WXeAYrc9tOg0Y6RIi3xQwfy225gGwEvok-3YNfdvNqbOc4Zw8zJckRKJB3AJmdsIAxq5dP9MZvMa24VGVRl8qzE6E6dyXeIE8K-V2q4Sq4HMBzsL2QaQMCx3NWc103EBIv92Y5m3NToezAiYj1EfQNFJVYqstKNuLtTN2sUJAwiGdtwd_fStC40osb9PSsBgXGNe4I2A0kHA-6GzYt77SPpCMs3_U1T1OfocQGaVaXIez6_enrlmfhpNGdHcrz4JQGwPHomejBrc2RDKaIwJTqdYXI167nQMBzWFmZcYu5DZcqG5xoAYYaWb5bZRJ8Vd0IziB71KX8M90nOR5Hnl11FWyYLQpQKhsr9Kiy3P_15gEPHUKxxIwqYN_csuDFq7VIomHVQyMA1Uc99K-K4NUf0ypO5a44FFW0YOaM_IM8gd1JrXwnoF2kDsWLRFzzMCQX4eT-PCapt74gpfJKyu-GZeATqjDhIuPcv7yO9D-xqMpZRav_XmouG-umHwgYGcMczbYItd3mAon527YcOyZ85ztFn6iBcedYJosRBjP5qipOFhHjarp_UeAYLoDxayhwI_lDu47cjUBtt-M1eydaC6FrQGKH7TbrhmQdjpGBRiqOEC8wJFvh7PKWwLWFE5--Wlk7V86E5OLoMaBiJflf59KbOONk0nyITOwHZhnxugYqCM2HQrvCYnpCw2OLDOI3a53wzINtKU1dc4L03AHv8jTg8SnxNyjH8h0tEDtfiNxP4uvaPApSz6yrtxDxqYJ1d8LibRVhqri-O1Ql55jTg6cASe2BI4A8X1GVrncyOnuKeWlSrZE6EZSiG_IzIKw3sw1BxHama3sofcB5HogxGVpfcdgcWk1b4zPS7xZinNuLPzftrHFfB5LudQMQreO3kD24qBEYBeMQ3dq6KDfroUsYyMy7-bxj9f5SG5Bcdl1X-lDRI1Bll10zMeeAwhjEQZsBzgHhMwZRrn2fqYQ39OjIVonlz3gUhdCzHTVsLDu31oJZNn53Ot7Obzdu5fDWc1HOea1DUfTtCIPD0H5-13QfJ8rfXbjlMMficnNOx55Tk7ANQW-thS_Qdh3wNZ-TdWo_wnDk0F5JO573fctHXcOIlXVO42iWpaZovFGQEZBZRRKRF2z9TX85B1CeNF3DNhpaDiUjiCFpuij-oD-h2gsxnz0kZtR4I_uqeuB51Z0xbgPi8pPB-LmMSD7O5rN6WMvuJqkPwYMUU_YHki0kvdiL3T27orwj-UxmzjMtarpEWGeKiW6YX00icrDA3zxC2yaO3cxSD8FSCBoj_e6iEUWD7lFNqPSPinpJTOf7MbYFMy9IZ3tmS7pKU2u8_MAdAJcTDpejA_g0VRLNilu0X0V9V1vVxgQmb2TN9DfeQ8k6yLHQ_bQ3ayKoOvI9pwYlWL6_TkxqNAb3T930Pz2wps_vXf6yqYny_Zb6JqtmL4uTf4TafNcCPo1U8OlYX1wSbyw0me1HiN_smaciZvA-V4XWiEbsxV6K9KLDb4Enq3s-CX4J4sgqiF2fH4mH3vOhhGxlXRBxIwOVMj_LVMVjzte57k4zkOQdypHDrDojfpABkgPOEP1lIC93z0vtidz-0o61BE9DBM3MctVzlkndFGUGGq5m8Tuqu5AD0yqzDWG4rEuU8i9tdMlqD7Vg4OZQyMb9FuqE3bBjYaNghKdAWfnWmJUm84vRgpj0_k-OQDFQDf7hOWnN8QZXqrRENPr365-OPlK0gceXjv1gtl5m35WTeWrF6nQuF3TJeGFb8bpRuIgncveQC1VnZDhOfS_c7kxlWZ_XfHfvfAiaseYQdvC92jY7oIGJ4dtCpumJan_0g_25fsR3iwOgH19EEw8D3vgge6oJqFN1xzGv1D6eEyez4S5o8FtsiLGMmlZTktD07wsycbChZw6p-K5EzanRiNMDfiodgyfyp8uNfsb23HbVrrZgmPWrywnD-wUzpNasa9rWDP066f7Sj0kpDxMyLW2SJzGnU1Oal0cZW_YiNXdHNmb49OvackKTW8TbQBVm33ChzqGEH1t4wuMROZWo86IFMxLiQExqV8UmaFx60WiGZifaQc7YwSqStBH_R0zzBwCZjXmM1e02qcfYuUuo-WxJMPm_lFHyKCz3GW380TEn8flOZLyf2BN7aXI98rc9VXgbc14Vuo0LYAqfjXfihm2Eizt-SboRqW7PX1ZM199aLhwiuXSS4a6nAqQr-OnOmEkypQEQ1876fBDXvi2MQoAdt78Gy_9SvTgkRJX5qKGhbwxkcAgxCRPubk1ndHTbcLmiFSLvuXhlJKmc5_I_3gf2LFB-FdaDks366NLuuRGr6hoI_5ipAUMduZ-WdTol0aaUxCRtpbz1AxtXwPnxjap1CxoLtoXj-3EJxYsOHP0afjPigAKcumthMhC-4si9LDJVPZu9GgnZtqFV0_slkJEwS4fCDC0DlxoHK4PYCf67CLe4BLq66TxCw3HMI8V4JwYyT-Sffec2fkrY_Fvls78G5wud9Jocr5mGgDY-fpefBXi5C0fjf5UEfj4tDaatqdhSX8vGbHaok-sRSQJz2HVEsJRpEh1FfMfo8qLTg63ObLd2qtAPZUeTPlDiLSFbHapuW34SxgLBTBhceyb2ZX5Wrj8h5q8rzoiw4XZgDNsf3kuupFKyFEboU_mgHFe1oqDI3GOe2TMjrVFqZI7wvcv7NHec5d9sdMjqcveOr2Srr6T06Ur8b5uROeSGfU_7utwB-n3msvyrEhmtYvOlSSBGmZBO_zcS4_FGa_vLvwG9GLRVdp3882SYOoEnFjkz4GdHB0yrfJmicAVlgj9sLYsAeaXw8kIkGl9L0sC5IXUnEE74k9FFn3S2t7lS3Xcml_pMombRj98pH8U043Xi2CamRQQTc0Q6G7MoDnSQHuk17WgGzuYqgESjX4QHFe9baZCcQnqML4ozUAiQ_tvDMZjEjO1ACrOEUsxxn9-Voi7gZ1vmMRxRoMM4nXplfYVT9iQxXH7ZrHCy3aaZN8852ACQBdRksuGsRyx10-T36jHFLpq5o8CTT8IT0nBvSiLbBnxKRjJkhAmH7JpopiR9Gn4YjMZA-8uDmAjMqEt_30AjK79xeo2sGiWok6lsMmi3LlNIlrxl5SJy-w6aHF56OKWp9MOJL22wE277Kh-RsP4mviuix-qXFQ3rnECgXVwlsrqaTSwiYmPMvsAzxd8p6zAMVNaRQI0mF5eUE-biVeQ_-Gzwf45TyRjgEIrGU1WQ33uGSnHdCb1gyBz3kxauxuYOgE-mCnvy9r-0XXAhRpkEFtkBrKq4i8jIuSC8mXWRDP_tVfYmQscQEplp_Yg2dvlFNTStzV8s1YjvSSahRoCbC5-fn8NfwSHBKFZ7XBCDoY6-uUq6fWET9G7csqi2k8bYPku4GHWkb5GcOf422wRSVWrYrM3QPxvV2iw8leBEfeHm4kHvJIKzpb9hdczDIrVOYJ5av2lhm9u6AluyneC5r8R98feG9sq66PGPkt-1Ys4o9_2Xsow8aKqBhUjqib-NJBYfiPlZeRL53AhY6HD9iKArHhNUs9_0XN7bsT4JsTje8J06hVx-RRo5yad6LOpVZKLESHwnSOk681V2tTsari0eW1tJqLKTmLv-HYBgPmsj4Z8xj98KaL-X-byqEidWP8qezrS4nmRdxjYUjUpRYf0jHQeyKxhJMtB_ZnQiHUN07A2NCWjYviRh0RCSSUMyWfFmgEwkAJ0R6wMgnZ5f2cpJ9h3mm6-hNC8_tZREB3KpNahjtEnteUmjFhuGBwFhS0XeFTd0emTgZCOI57UDINcLzTJRekZu_M3GSP-PLOQlVjjdcL-wuQZ_lrsYrMiXltLjgupedlLbTCh84b8IWjqWVvkM1KmoLIq4vu-Kk4c8wi1XDEy5YMWaJFT08qvhCztCSs6B5-CIIccyyiK8WYWy4L10whMq1UYPsx-wq8PoTm46GWfOImEyBJhk8iNxFCBVqDJRUwIPphSIzVKrrBv-a3wRifsktIKkcjaUlBqthrIxgJtofNuxeRlmNHMfJ0bUGdYsS1EwQo4WbgO6HoPzOK9J62ND6nOKiiFdBBn0aULaW7C90VWEHIsjK5IPIfjjvZaMtcpbczWlRh1YZ0SrqlcuEcUI6h_VzrmbgHDfkNG-mlAdsIVXDnVClRHZBr1VBPyTXHzQ9EAtfG2CRZO0ZPbt8rlUWeJC6TgBOGQp8VZ2rYAMlRO57NCmAv7a4aAB2vLZHnoNzgicEkau_KKBpcBvD-8QD2GbuRzxTOhsge1aQnm43IAcvvI3WkuhXWQaDcd9FHMERo8BmOjqIHA_ItxYnJvdXwRTBJELozRqz3Mr6sE_QeNM2AiGIEAdN_jLIMqK7psc6FAGUA5e5ZesQw2PogBMhHxQbuFqbBhZwCNCin911ZNYTbLwKQiDXItKm3Buqb98wN9fpnDunITTISsr_LfoBrGbXc_nyA3zqjhMb7cPoVhPpoBzJ23ME5JM-2s7JXvuYLRowqSOnTndKv5gKenfSOssbs41ohTwDPrecGmc0j48Iy8FrjadjGa8aSD0ZZTsoE-Ud38qQjqqp5cPdK4dWgazcjoLA-OP7E4T9z9bd8B1nfsyL1iyAqUftpM2ZRJ18M-6EyCdGYOX5U6wHpphKmtUQIRFN36qn04tIRdEBwS5lAMLM9rQjTAMU8mtZQU2iAE9QZ2lbBs3WXBhasHpG2kpwfwQmXDlXOJLLHFfCj-Op8AUe719vsbfTDRFJa6vjWY5H7NZu7ncYBxIOx2J3Bq8N4PTNQEYbR2S4RgWjGq6_2rc90SKo3LU_h_QoQ22BpfwPPYIei4bxVgdPa1a5jdCHtpjXwlYkxdmzNJrl2BIGKyQsuxtCt1sL86eLZHRgvIddVPkpdrxRBlaUd8jCiDRJd23vFZIQtQeEv-JU0kFYEU8-kY0aWmDk2UuhCMlAu2g3q0-DD8806z3TXpqX1D8N2M4fgPVTxUfgur6VhHCluEiMfvoXdbU5m9qom0TCEhTTs6-L0t5NRE_Bt6Mz537Gae5xUvBiAkrMGoM6ctB4ZME35eQ4SGsc7U0lMHjE28zX1GhDlrFMJTlnPKYBZMHg2E4PEFiJ8Va7wEol7fMzHxeCZFDMVS72Y6YDYdTPwtdzR4Twpblqa8md1885i3KK2_l_NalMmQqa44HR37p11_rCRcuWv6G2oI6JancI9UQGoQ2JrD50zzzzulc97vpP3dfKX1CQVcgtXKqQEuz5zitpwvu8sKqjC-htuajOnWmKK9wp8OaMmfXBzbpcQbT8ZRWQ2QlG7KXMpTNBdyrViAgwcSJf56_FEKF9SUHdy6k6VcDB5H6O3Kj6IL3VIZTWNpiDu12xw3_hNFf8EjRNte9QmpMthgNouiiReh3ejhPK_dlWjwCsImHD9VOwR807fLHhimqhc9PfpKRHnO7aJMSL9W492hDOJDArg8L-oWVUlhaLbNvRi7jeNYc-uH7GQG62R34Hh8p23trgQiVekkRAq8-Bo9BDnSvptjFB1Wi-Cg9vtxfqdnJA6aaHfnC12S4pnCapi4Lw44WvV1BonBoEnbhs1pmjUhT2_L3E3BVx2CPrq8GAfnqS1i4cR2LClnOiI-POVxPex5CW0T_f-KBpuDgucW4bEj5v3zgup53ISx6pKdwRXOrqEJYwL5SM1m86WWQaetEB7EQgwu_l1xuGSrcRIUnhvQVAnCuBmOoWC9q5lTKdKqBZS6azlAsvwGATDqJ6vS5uFn_KDlx0HPqmaEduUG1Huhcl7rA4D72xyp67drkRam-jdU44Mv51FoOADhZnTWc3OSPiy0SVESqpbRNY1Ynikf1qpB-9deie9l1ZeA3zEzUEFZQYOvSBz_eSvBmRk7iqxfsfGaewBgmmDGlX_3UbKG8-GEJEjMvPdmSLICCRA4wCANC1iHa6xy4IAa526LUA0nxeNgd1BL7CS7tzjuRQ6uR01wBe6yERW4anLmIbLQF9MNu6Eekc_OWC-A2FiMbFxfKIs2UWx4TSnfAruaqaLIjJdXyTxNsdYDVKuUZ2uGwfSwFjIB3AG21Bk3h5ZAwXzGLeVi9bRpwhykHnbgCVVQjX8clew8j7VzUmtEpdX50eWLUEVgIK1ipz3Grw4lB5mn4pZ0PofA8eDQBIGupwfyMbVcvMIwj-_X0KtDbjsdFk6rFXVyzMEHdKFqMzUla8M6QXMYeBjg8ENfTK4kw6DhH-c0p32XQmeEgDMIYlom6JVaVwKN43lF-uKEz1cbXJQ1Egk2AOa4lEVHcHuBXETc4ldZNumR_inPPohIvLBnL-tkOcFX2zqYulJrs5cGe-mHmns9uXVOf19L-Z7MDoBXJRv-sCQ8--bMQ6pThUheVKHDfHsmCKs2jScwVk71UXiqoVPH-2lS4gZcF8qxlvqFubfjqsDU71KHRvo9564IX_vJP7b39MlbD96dOb36p8cR7zKqujp6C4C464dqVyBdOCcliKG2a7lBxu7yoF0R5tZTTZL3VADjBQyK9FWMsDF3m7tzYAmW0rYidkkNzvCSq7dDFCOfqVDaf7XmdH1nvZgql-WRS1ag4-WdBn6WH9Wm9TPNcwz5SesIg4d9xn4FrAeKoyHSv7HvlcfyO-GqZrncb8xVYDoPyW_2pOSO5t_Is1lABP727r2oorM_Lnpppa5Thm2ba68MPn5khRshaz9W9SE9Kq8oUUZHRXgWyj8n9TMIt9o5oiAlbyr5PQozN2x0vk5aYv7kQQRub6ICw3L9QT5Bp3tcXzhLBGdp2OlZXuZ0sF5qozmltd3UeWQXAqaPVNNBH6nWMmdEzPOIggWIZNFQT2UVIAx2dm7pxNr70bLKIrvWsSX3J6qx8D9ERExOFWPiAZial9Eym09G2L_k5qsrx-12qmLTW4yBZSU0b_nFPX7LGqxCv2O12fs1CqrxLbQpeHSLh_KWJziQAQrYipvuo61c8xaGL519uaa_oJHaqT_jHyBW-bZ1i0uFfuMwFmOozdR5H8ATEYalHjc5L4gg6f1ckBxFMQUzofAcvmHBU2FH8oFmNdr2F1aTmP5SOfT8nUbEkCXZMu43T8oASUGrvyLCA9MlkitE5H1nc92FqBgDHyzGXcQ2O_BXTkQ68t4qq6U2Sllh80iCnX96t-oUHe1UOFYCw43ESIKbz91WFgryqSzX8ZtCbevJD29Olc1uJE785npKKXHH_XngWxK1ihPt4w9eereoJYI2yma-qd52SQ0BCszskkRsULD7EJHJ0QUHcqO_AITpDqklvx6VopTpNBlT4wE45iUaoSxh7EDwWNYsO8RluMi3hZTRQ0jI5ZUpXXXR-LU3IAcMn1fNaH4iuXPaLog-WhkzCHellBFcVShJOPsapHtn3gn7ppQYkKwiBGnEtaTdaaGrRZM8FQkYWMUIK43nKbSEFoV-VGamaM2sE4WTQmqbRxbx_aOY2lcDL5iuIIsLuKCKltZ3oHt6HzKUwSA10YDfvToLrlJxUC4vUDLM9bG_c-4iZBQf10ZhkUkIuQhTmfV8QQItSJH4KBHeadXUBi_E-qkEwOat0Yv_hiZHYlkLiUHCt_nQgYY9yToqSd_7y9PS2jAM37MmUmdmPr9hlI9ol9ju8bS1-z741QQkyIOj3GnXtKqzN7aZVgT3epEtRdWgf4hoAxa7sgXO79R3rC62XnhdR_KmCWBUgUzEdDAcE4XTXlIWS6jBon8rsOcFL-f3pvOKq6ji7jw2rM9GJAHIIyqOLYiAU0aWe00rehPy5WshMGb7KXAR1V6unSnJmxoaC0KPfknQo68pQLFE-FAyFbCT6cXTLKV6XkthY3xdk0MCtFcPbtC2udXWsjuudD2bfUxK2oMmbPINxaGG3_kHIBK41vqxYVcs1trpou7fwhoeyv12SQFS1RzLmurkUf4yvSEN6hlE-b2ZmTUU39rit40sZ7GI7NTSrFNyK4UPWx-nodjEVZoCcABZ6alo3-zGUGtVX-bJbZWIDnRkmrhK8hNINjImUung_v43W1b5j7MWH3uNu-QRgdTD0jXaxjI3QuZ2FDs0FgJldYaZFgAfpVngVbHePhCfhbMf8Q2HdPRpsbCc_3SolpYBdd6KVszqhWnoREI9tBmHE2Vsyd7froRb9AfcnDbyTlUZtA5zULGzBQkQveFpIg66WD7k0rPJZwnwJmw6qNvPlhkRTM0mBLJUGzeVB77r1b3Q4XR7CaDqUn5VyVd6bMGkv_pdlDg3CrOil_C23q2ay_PgAvyXu2VszY-iL-KyfNDAuN9xqLFezzlPy3hV_e6ijduVEDInv-b2XVXyBLXITv54ULwnfMC5XDtqtYseZc4dIWqF41yZGgj-8mE2qiVeN0EyKaMF1bOKm5dfZFsdHoR51pot9HeURkwXHJMaETFoRoFmV16_I4RVHY0ZGNO1mvziF3IDZA6uhJnCSq7NwIO4rhX2gBNZ4UVr0tUmSe78LfucN4VzlOJ0Cc5eOjA66Ei9P-RbwgNK2YZbiL-gIBmcyUmvIAO6UxLEGpuNkACqCsmAqAQRs50zjn3kNhaThm5cBVuPa1SreR-ARWcMTLeR-EQv-Hz3ubZ0fpumYlosLSGdfDElJWoSWl3gVc3NdqLtWus2CJRX9HzwcBZw_Pp7B_slvjVGv8yKIAdIkZzEcTUeiMclZfCqmO9IC9VI_ers7e9CitJoyUpw8psXrrQAcORHfHZ3yA6NyBLr20ZCJf9x5eYGX1F4fINf5mLM0gZNGbvHoxK7i8wRYWgWQpWHl5msPnILTW3aEX6g9sQQfH-be8ZTZ0lV11tpMoTuq1AsIyUPpzamsw1by-RMRK041mmN13oZA-qnJUmc_6nJKpnFCy3JMAWNspk8YQ6G4hPMqZPo2Pvf0hEKYgs-kVXYe6y8EB5fiWa750WOlVVdlsM4ra399PNkMEUkcH0SRgxBjMgjxO1rQdbwlt6FnLgf8npaHxg4jId2HL9_3Rh0s8Da1LtzxvfhlRG1hUk_4CNyoDBtARSRrjc_JEG48Erc60iiZB1FehGkreQHxmzCRgnimhf8Ch3MEe_kzXbLjIu-KbG7P6ExFanXafkDz5zExir_KpeTmb_KC1_VjuNEZaN0oLfkE5ZIzWWq-bQm3a4VpY8YsXaOLc8uqE5tLB5CgC6vY3TCj2O26Xw15krmN__i0UBNeL87qv0QCL9_OSucDY8Ni3VxponauiIIkFZAKyElLUHerOeg8ejNb0JBk4xuL0KB1GIzcRLPalCfm6SNi9gaDAiqqU3TyfPCZOa_El43pbzg8zK24t2jx7B8pfQEJ3tMg14d-HXN0tBwkis4e2jiHnu8wE-WRXcbAf6JmgswliEe5XEMdS0UU1DZkw0KkulVGsGRABqjOk8ebbNo2WaHATtp9oVuE9tg9MR6fg6FhKCOP509GjUYQo7WpBP2CCl2pIYKf-NCfsEqWz14ilAt7bE6s8ff--jv3NIAD3cc3vAj4Whx5MV7SZfvkTzgsu6wb0HMuet9IM-rWA_lQqGemQkDnOEjyRFO0KG9h_BuwjigmgQD3AGCqu4H2RwvuVSDaVpaquDyHngw5kaXWmpqDoFviJWMRiPEFEnEp2pVSAwSVBD30jbMgnSW3oeABOZoECK132u5adb4qkeg_HQETp-AEdo6vbrq7Lm9WCWtrJWZ97TsaXylPWQywUONLoI-6IL44yAP2MMVrnocs2KWfwrHmujxrlpUymHeolPTNpDU_FpNjYoMDke8snHw7jN9yprOtzq0z9kFcDYMMsohvBVUQwb9MZedVvcDxsztItUHSTtjCinIuxcQ07rhxIqLkK_dbJgsx4VXf1692-KX0NnBnKIIAlnn54cj-OhVfrxkS05AUJCd3Rf4vwN0yoexDwXYjoiQKW1zhCM71yLtW5xu1I_xAnIm0tmOV0TIKHg8HOHwVzJGu3xDki2T9kDw6gvLZ0878Ax4vgK3sYiTF9JWGzh1Boc4y5fzHKCO-xJQP5QKAnA33bX4YcXtcA-grHpdTdbMo_Akn7RiH8PXaoFEuvcPtC2Yj184lZo7XZbgyOPExazionv8E8b6-w5QbINZ0TUXh7GF-PLqQ__ZpqvhZEr_Y-TUmV0VrJiep_Z5k_h4weud5YgWWuFLli4OIH_3AiiON59eHFDUg9qEX5fMBZ-CZYB0GiQOhLpvj7EDq5ZwmiZimSN2DysGB50X8lO0PUaN2tSTHFlSZiypmysqxv1VuX8p45j2iXmhFF_87NGi3Iq3l2-mPeKet5mgE51m_0qoDq76W4oVhjWvsuaxDeqRI01O7bBiiwcUucgIirO4ip-q5pdVx16-YT_sdMXIJKzvzqrTSvLr6pxx8CZcbItCEsr2ScuihVM6Q6wVDGoReGT2a4NXcm0tHtdEkcvKokkPhLjek2Zzsf5H21-AzdI1uPpEwAbRCDSwH4FJou9tTo3hVP1FQj7VsFDeDuB_6RaMBLXe8PrOYE_GaCfpodySoHVdV-dB4L5NDGDgdZmrwxcr_acUEGu4ZyK9DmeoPcnYKh_A4H99NyvVgNLMTIQHNF6k8VR34TReojNDgjikOeQZhJ70GYrZ2DM3VqpuquckAtw5fDy4E6ymRaY_unod8_42PjLuVl_WL4iEzewuUmK_HXd6SAHuv4yrnmJYS2xUa9b5GK3LQcCz81nxjkRJZGGfhTaR_AdXCuzk_0tUQ570jOqWu2YYxxXzOAXI_SdTxw06ziPFtAucEe0kWQ-e8LK8tBextTimkFeNvWqSIIMciCArZu_W3Yo_Wq6d3c5H6TA1jaJAh3008oKJaeEknqwzI-Yefhwb_Fu9ndoIkEPRhn63WoHukdSJsDvTD1EYCOSq4ulu8EHErSEp90lnbhqrvx8l3300NS0K2DFKojVdT2ZF2sO5pQJe3J4aJ11BqtUWijxVJzALhyV-ZRjOwZiFhwl6cV8JUH5sabDhtBnkKkNMBChhVPgwOo0tnf_ho2r2wD_-ZDBi29Eyj-cL6CJbnAeIoiBcByR3R_pv0zx49Rf6Ui_ScEkTfhNH6OGgCJ04g64dyjUk5MWkVWHH1d9jc2JmtArHHVY-qj1Knb6VM-GYPwz_FOpcyO3eKyheYDWrv9DZu33w0E2o2l-nL8nidul3RRNP8Vml4YSLBXknbxUnAUv6IBjjOZbL595C2ckyYJC710nVZIgDVw42a6IECEiTEL5bf75HZSXYwRUavvErivswFp5f8JJ_cQRee-yhyxQaItSLLJ1y2XfqbyQjpw2Y7wasM8e8rHx4AWWjc72hlpETR-EsJktpH-7aZgoOAF4Vrzwctgua9Pngntw2MhXJBAhwLGbrGFnAmq_i_s8BrqrpH34OP91ag8N5Rd3gi-0Dk0qyIWz_6xbMyoG362c5XuVgSowRdpRZkNO21g8yWRbXJ_5lu5Tpu2c9iPQ_fmublStxU0RYGjRKQKs_vlG7CT-YjwHcyQr_d9WUjz7WfSDbOo0Kv8zhzyNoXhCNVJ0-72T1ajg-zgShhAdinCwy8TmVnsDpZKznOmdhrVlitzfC_VmQnh9o8bTNBZczy4rWOSUP0iRsoIB6_NYfl28Ncs9nGdJXfrKgYiKG00kXLPT6A_FiIO65XZoeSPtLxX6CJwjFr_hG7emvRGLUbiaBBjzabUSiVi_XXeM-BQCBDC8veN-GK56pQ2jVbUZblmPG1EG2MZu4z1ciAVg7IMtjXhjOz1yDEMJxjpg8BlL-XABd5RH7w44zJOqQuaxyVic2PvQnKVCjGTb8yrxxUhkhVp9f9ZpY5qaSsPPhHI6ZvB1KgyHjkCpaN6SOPM3dJNMGbzBdKU1CueL_OUQFFedFTQuJqX_jRlvxhVfEGbBLck59CbARQcsF2DBK08n0KPnB0jfpBpiJZYXtMuUmegrQMmf2lKhK2cs5HtujSbBvpl1lbit_N54Bl9kXmOT8_mjshnq7aqUy6YrKM0qvNrZY2_p_vkEsPLXOjUM8ksFvAE-5xTR9SsehcZ-k23SlbjueXpwo4twOk4lBqqX9wDCYO229Ij4fmsrzwnDSL5aEDcsGVduG7K8O3rZsCoeyEzWnPnuHHucR657-xn3yhSXXMFl4jwbBrRaUddl7sq0nkIeMvDXKNsXgacHHcGdJay6qz_Aq25PiAx3-5yd0GVAjn_Plyh3wA32ijYE66JHZZCBbiZ23RNG4thvr8sUbvEQYi7ZUcuHrxJdeIa2OmP3Cfol5i95PdFCNCFF7yItY1azBow6pDbHI66-XQ1x6jaXcw2rtdK_cHzVMpxNPH3O-FtRgIKeZpy59m5xCgaLbC0YvPZ-sSafm_LqTuu1hBKou4jV74lWdDofQ5OKOK6iegnn3Z4DGyJ9t5sJ8Z7uWguxx2XSzlFY-jRuqZPZfinBn0ATz5y_FqDA7YQBLr8UUwn_J5t-YXy2_v1JCbEOGhQj7kdMViUgX_nf2vsQk5gckUV0twn71j3rr_cEiRWxcAZgAZwCcM0N6BZ-tW73UDYOrIlbhKY_YasTQ8D3orDEUgDKm-vi1zCy5COp9LXHfGrnjQw2DHsNM956VPW481WCLBuH8yYB5lR70zHdJvs60uFp2-0UJFtIP5OkSMs0lIifV5cC8WJ-kLja_20CJ8_hsVmR_FurXkimlJyF83FmHnfrNPT6bUDUj_vR9EHCq8gmsx9mtHI4r0RTrGq9hOdKgbakgZ7rPTbUK5d0OtczDuVTmqRaS_HJJVp0_O-jM90OSFn_Nxi_um4PZdRvWFhlDbi4p_wzullCZiJNiueEnbjgVOfLaloYkncxxN7w1Z77ApJYFNEW3oW2HI8kqGzzMG6UnwKDMldPy2DfBiMquUlNOlxhU1WzPu7tSmiMvrMx6tyNxTB9nfwUEZ-Oee347wN_t056Z_KOmwp_RsxtlSY14Z6Eh9K2ANqcLKvHK23iSSl6zFMQsV1n9ocmVj-I6NZeBecQ7mgypknVjZBBnwthy4Or-K03zGA_vUbUv4BF0QvyHyZrgHEtuhutCbDwquXVBS9sJCSPUqh8pBbbY8mU3_vr6JHQnlxzsQLPh3ALXfyfhCRy3K5WkXVIWm6Jl0lO3Jdmh3kUUtR46UQDXCJDvL35lh-HQfugfoRgP36juF-K8OjnTYgzFIaaEBGqeyE_JLWZ5cwNgSGaZ3IKbR75dyhc9q497JzDHu7uq38Nuz4Hp7w_Qmd2WUrX0SmfZMnFLPtlNNnQxDWDCc31VnI6yajtMhB5zjbD_dS6HEiEPRve4E7L7S_PjWRopNbj09gZbn9Ka-B8vSNl2xAzjjCar6ECTmol0ax8z3tDmDTP6jXsEuUi21r1qHGbsu_2dSGipPZK77MOhJ1fOap5WG0kLkwubeMd9rMFF02GzJvJWZlew-TycyE5j8N2WXT54SKxsHddPowSPF60BELtjvUHtzZBoCY7dq8u5Nx8YHCUVKfC-BOLBh_7KKN5q_X2UtmmiPldkuI1KNEg48phv8yQgkRvBnSGEr278ursws74Ji3znNMijzAvh1h1MBRzEvO3G-9naN5lAjiomWSaRWIb5GwYG-AlJaBzgSyw7fjQdYU3UeKVjDvapOHRWEx4tINFej-m8sXhYsR6LLG9phlInShYfK5EFb1QvJxnEJWalsdj4WGw5tUzFg1on9dYUJbFEKNPPrnYG1pd6yMh0Ufk-ERNeK0s9JqIniguue0KE0Vhvy8B_rZZO7bYUX1pcirVSviazNj2tiNhQWKIZVuNP0y6RYEu56K8jDQrLkT4ujXNhRfGP8g-08tw0bofOBr_IHOpeALSQKFpViCCX2TPbtiiEJMu0nwz5IKmIFJGfDvojHAdQKu29fggFrKBPvu8hIVoTCBTsD1skbnW5x3x8LuYiq-q62fQbEBD8mv7fkHJ6iFVQj8ARr2rUn5Be9GfBMq-Syal8TzVYfU4n4SXit5h01E4kq2vUR7IR8s8u2879_7-u8zt5s82xfttdfbK6Go7zJzFLdicGDeJDQmdrZ3gEAGS-2msFs-sqEb9mW_dkPg0ggK7lvJKUzhFORPm0dxpIprlD0IcO4dLtfc5B_dwIzT_L3poa5iWV7isiGwPyMmmqZPgp97Euc-jrKJVP2yK0T4cExxkr067_xRjReoOIIq2E1xIl6RCzhJYPv7GuDPaFCIYKcFVeplrIX3Tu-KrriS05JleuPGD6y4nPUwFjVySDsxCAm8q2X4v8j65HATIozDxub80LBZB2jqtPMkatlLkdzFgtlGkhp3MTB_n1noFUGrUfXNURhk8She5NSsCPWqcuR-YaQ_dbxh7RAJHSZSOCGI2SbkmcC6pyYdOWDK11N2TcPwh7iI1jRHoIQGJhbsA-8bV5EHFhIgIZ4cEjz-Shz2cFHTnux-ZKNnYUhovbT3p3GHCBm2j2B-uu_YrW4wKPzU5Mqdzcmtruw-uT2NKtDnnnbPHGct2FeXHjAEeGvvIwRhIdQQ8-NYQnun0y71ggsRBLguHavvWxsJv98jI_vZOjfpKnAZlM_xNvU_uH8H2iLDnMYVjHElJc4ocrO2J1Oq-VUyvztT1dTAasTHr7e0w-Z396C_7PAY0A_gXEAwAGajLb6xdAFwZqEG1RtSF5FOhIRtXoZemhWUoDKZCzGRawbI4MW19beSzxqH9tFRU9H9CNQLzL68UjqxSKE_TdYLR6s5tDVz-t07cLY0kRxJPiJ1ToKnl0euK7VZtUFfcYRPMhlvia8_g2pEo0SVNBeH3fpLwcBKYLiJhbFnXoHUsUMKY5Fwpico87L3nT7j1MpkAW20rvT2Q1mrVJX8hs5M-Jbawejs9eR9kj-4mckCUegkyh8zXEXQ0ItagiOGwWmLHU4SOto3tROK95r8xQ1tBt8ASKI_dv-YaXlEbEr6jgDrEghmVL1nLFVA2ZM8VbzVCxHkqW8DH_kL8SBYcSHOe4kngTwr1yJN1i9mKCw2QzvTY5M-VC8wnNTr4uhfxWJzl1HUYqTo5BQUatcyYqwCYlt68DcElBE2riFww3jsjeLfPjdC9SLjGjOUaCAKzDcT8IKRVnoDYqIxMiWmM0pCHFx9_pTjyOkihjkdzH8M7-OSDyDWJik_ol_mnUD3TodkpPQKxzgzEuATbNdF9SzTMgfb5NMRFZlF_kxlq0j-ehjShDNT_aIZHum7NK6AjfdIYq4CoeQh8qCefUcIZtxa9RE_F7mngO-ThXeIojtmIzx-vaj8npLkB32dU6ZjVU0FuRJFtOvuZ8-WFZ04Dfyx2MsLSpW11wsEkToDqLsK7CxHdHsOpJ15VSlvEuWjJdVLVOfqRjBRd9UbPl5oKqus9H9dCKahvMW0u91bKM7KS_duA6obQcqwf2S7HOs1WYODjxxXo3Rvguc9cYW_Oy9LXufx5bub4pKtIOU0EMj7ZZK4ZN0aTlkhHfnSyenvNou1Zho7Ewe9etulMVrvxKim73lsM3unlLdY52sCIj95jLM-p6JrO5A3ZwGtTQedS9WX9X7h-O1I6_LqTap7wAAOnFNNkVtZACeKU_iosvOBhARTJr89czS-qaWNWnFyvqiXgvpG5J8XOZRUUJgrMZjL3mBLagW4nkcBqI-iOVwrQuwOs3FxcyCqhVX4aZqSE6wKWxerXDFzQd9TvdeFbpsaIQA2VCCgNV0GvYbRVFCXOEOvzuP2-o9rCcvgO7NsHevFu6f_GSBAQa8ZJm4koM1Gfr5U2lyU5R0K03L4SQDloOH_NajQDU7dG3gn-CQuP5AmyLOiKvuCJgmEpuGllxoMLT0uOrhy5hKLmxL5VBL9aVcoza_yZ9wN5VmuaBaQ6a_d1Ny8gNZ0WlqPeOOK-oQj6ASveg4unuv35AroBzu2U2sKcXJvK6VwXJxEAFh1nEKpwtwMQeyhgpOz4mSzchL5KpPKBQRIFPUQdX9A2SqYUbtqQ2jb-g_ydvK1La7KqH1XwUEh53CXJdrPX7FFZP2WC6fumwHevJyChELvZFcGDyk7EeoZMUr0m2IT0ilkLy141HwSGuDuK75ywRQ9BrZFqfkCco1xy1Wt7VVR6bepxz515sAq0AdMFd77vkZP6kSp4UnX4jJJ5nPgXr4KycipmEmW_pkBBd4p9Wc2DXcXAsKk3nWCWULWn2xdeWBR2Ni8lksLuuNfsaXigbrN0DOVm2MHdRLnoQe2-b9Cpa05_uHM3qAG93xPIkb4e_D7fLI1dbSAwr9kCxRlv8JElscR2ByQoqX-MFtvxOS1I8FVM23oCVSr1nqqvCrBBLw_DRKL7URlckwN8yHirWEreb8ljf1PURLuJamzVdhhETAPRYQB49v77OEMrzNu1BVlCOVfJ7rxuYgOMOy2aBoqKmqxt-9FHHhBuVX9Y69COxYHYBDnOkY5JR-xysh-9YGmc_3ZURXCNNqiqVAPbpLjIpY_u_TgBQYZledcDBvoqw50XmXgWj5L1softjm1czSRNe18pw1GSp8NUzhx3yersDc_2IDQqLwCZWvS_dINHFNpvAOoMNM4-yZbCaPb6JpFF1kgYhVgiMTcWBSobYEPbqSohR10iemKvYUDIw-L-3T8JAJeLI7DALnMEveJAyBEorL7Wzs2rJal_M3MmWIO9dgA6MNTFXrQo9nRI6_0wfQ8GllJGZfmzvkNBsHcZIMbcejjlJeAwb6a3ZcrTP8evxNqPk1o0AR_GJMYbkWOdfmzUYsgvCWaaD3nCUJoRs9gmpRH7lwt_2CtBr3Gq_VWyaYi7pNIp4Id3nkcaLhzQT_1nNfqBxpjxswdmhYML9V7o4JEiYfijMTJp8xT3AFOc8M8VbeNQnepFP0m5Up4b2NiEBRKWSEmNh4WwBLQ54RthChhgy-hEFmmehVIW4aR3ENxjeGDLK3TdSIaPam2mLjxQn5kNgpmdCe-n8PdOFxDaiixNFP691DVY5E7CLElMrjOZ3GMzK9DUfJEUncFVHD65nQXKL3L7NcMuFbKJzO_4wzBTHQx8Zxtx2WAX4NY_GZBzcFQws71TzjUDKVIRNlxfLM8w0vtu_0wzyaWikZiErNgrONxxsd44bkLLFSkdeekPmZ1heSaTjBmwvl2MrkOQHHEutLuvu1j8UwVxRBkRwxH4aSpARJWk9nUApLSzF3zAWsDYXVZNJNL8IcV7U8Z6YJnzCObwCr5m-GtuwRtZTb4MBhbKJjQg7Jv3LM4WyhN4lej0UigeKG-fQNXLDai7SienL_lpGvw8Hi5n8lqdZbuJOtmh4RSb8Y3Qpdi5LomqEZ8dFWukYnIiK5L1MC435CSWKdKRQ7GE_QI1So5jwJGJUKP3eRP4aP7TFb5Zg9n9x7vvF6Po9vMy3TcZmJDiNU90_8VHczwoQKf5wLxqx4xcKT3eATobA9gQEd8BuAkQ0vmcUpPhhP2iFyQbi4j2aDQPs3FRbOe_AO1RZ-J1SWKgmP3bhFPkGBIYItAdhKP7JQe3dKbDwxWvsNMf46cmPJPZKaMAf3zhrjnL8LUSRqc9lLiIV0VaKTzpM9Iw6y-ZxeHGVgxQmzvX-obPHOwzo_oP7uiZuuTsuff1nm3fmiPAKw58xQQPL0xGsmrvV9J18KWX857J94cWA1TdpPXee599bIqbR9csSx28Q1IvkLkkIWkYb4CcEOUDfKyYeb9bHgyNlGepZ8Kgi_MSkuq6HeLRlrHNOKfviv3iTjz1hzKmXdbzQV7e3MGwpBWIjW8FXyAEoCUYji4mLSeClvTuwIrGvYM7IbCVPzfs8IVFIMwx05pxIjifyeuw-QXJF7GxqjlzXMCM4vF_CyWFKvzzgpi8Zlwzm_gAkABx875kzoLjieVyn4al8w9ykdumPHH2e3bWuIWY8y5wkAxYcY06FyUP7-p34Twp1Jcq50ndlG2B_q6lj6j4PIFyq7rgw3GygWQbRdFDGKxFagMvju951gney-_0sTWZ5VQnm6HybByCP3q2IXXEYjm39k3mzTJ3eF359lnkB2sQuszlv1KDOw9Ctu_9m9tZWh0aEXPVVdBIWt6-5MBWX6b8uyzIJRcqSno--eCdZk_k8eNU8hZOHXdBVAtcGTDe-pT4Bf2TvdyQPK8_8Jgqr5caRKs-nNR4mt2UpkUOsP-djxnJtUgrlZq_5FVXPIPJP6cDaRY_o45Go-bVc9eB3ykYJrL8hEXoPqL_oByLXQM3cIMVOvpjhV9Z6LHf3dA4eozh3xncBTVdeTmYFUqIHN5KPPPuCm70wK-9FjOMwkGIJDrJiklCZiaU8kCj4RP-ESjzGtiGJA_dG3mNvSZNbz7NUTWnElp4-6epZ9MKoGl5P2fOSNtYlhGIKi4nlDbmiHzg5O6Yzlik1TOaG4B5JKg2_vg2AErmiYbbqpiC3FhVqJrhI9k1FGpUd2d0gi1e9n4wpnIt9Tr33VgXHRKkzby_6MH9QhYCBL_vw2CYBaLSpridyUiYysPIF9x-k_I0WPB-xB7We4P0uCrjvCaUUF7jQG02iLFvVaEA4aRd16ND5NKDwTvMcMqOoI7XVkyhwlD8BpL6wlGmQuUNgJhI24fIS-uETGXbT4jTRt_YIisKnj5PA2Kcv_11pbMZgrSx1EJ6ekZnbPlNYR8ox-YTbk_bDN-9fs0g6Imdy1nMgqaocOJcAebAhHQdNeY6dG5yq_7k5fQxSjOmJxIuJ1d7Dv33U9dDY1EP3MJAoRKO90vvjwpfs-4gM3MplPjLcFXQDoDG5JFEHqD0ISP-XKdSedUeCf1ICwdKQQ7Zzd5bMF5dXi0zmHJaVdD7bdkqNFK55niRxecusrxtS8Ws2MVGCH55x7fTRxg4MAd8dX9LTmdhNBdvutSVvSe98G3HuW0npvXmSXvU-VL0KQRgbvZQE3_y2ZS7Q5-IiqXX3nk7yJC9uClrY_3dGwhUJD_enXXbbrVFOUv11cddLCPMlIuzLiTyXhH0vX5sebU23RN-ncq7oYxnuhSEi3_xugnx2mvcU50wLTpXZywnlGeYh9hWEhXELnq9XWar22MGz2Clmw8pma7lyvWwwBiLocD7cAn-hClMAFCIUYrGHcgMO-ytHw2kEl8BrHDlQ4p9vmsfgUwk-f3MqbkiiMo1jG2c1w5zyiDtm4FKn24CXLSKguCiBQ5pE_m5oaaihEzhwYu8kPCChoTvl9PtstZ1yO_8A5bk6jZtMEg7y7I_QiwcF1JWJpokuSWaJh9iaUVZ_KRwJEHvotSvD4bGp7rrlwwF5wla_RMCyz3quA0nlA6GnYoxhF2eN-01IzIdpZLUz2gDMtIsJ2ERa1kE5YJqdPpojWYREulhXx15WXAl9p3ZYAoViHnigbNR7TFwPQbXmQ0uakI1mKKaM29o_lLsxzUEfmyf_AHZ8uobS1kIx4v1byyby6vr-cTTkyBiIXUiyVIo2v1H2IgQ-YRruF-k20tBZlrLkI5Ru4WX80pueMrSKw4iVl1JvRaJJ709P1ED7jwwYpKpOTuOBR3MNxOfbwK_m84vAe95Va2nFabFqg9NBPVGtx0wC3sNIP5jmF0nYAswtcSrx4sdobZN6K4guGCmZnBpfSt44vaR1xFb6FMf3c30njE-F6fmWTpKskUazQjKYFd77BItlZCwMiI53CIT7hOmQiH29JtJsxjnUW1xKRJg_KiQgQnRTKJ3NLHr4--iM1wToG6C_oGyWmE2ikeisUWAQsphVnTYqfjujgE939xOTJZQXpTRVzLlBrq81ZbdiyDDIekzLrPwBzw5GvjhGeS5qTOKWBYgH_8g81_FKiL43Yapkl8kE65BOR9wdQx5bVrRKNt0-4dD5mytgAcf3RrklpV2KsAo6TmAaw9hEnK-SLkvQvLtApmOuAUy0ffeB-W3AtBNShnugz0wXox-z8qlXVU_PiX4UmmOtSnEuFJERVZwvm3JCiuBIPKydGSvuhNCCN7Oq0QvLTCvZJl_yJqSAfmWAeVPUzd2ygoxHhQK-L66exZvVRicBe6xviCI0soG2cNnrxD-VeCrOsVUVwOX6gfmtqjM62zCFZjovFe5cdSKLFpvjZwa8-IayaAzXAhW8CsqoJb0FXLyLjajJJ33J7BgU4A4TgUUKXbP43L6L0DVMhmN--KR5U0A7reXNHLPe01Ub0qKNfLj3PaXlOfxvn2T6dOmYjJ8MjOjcAbjnlEsi8zpACAc7KV86S8mbV6Bezs7whCPxFHopmzQ26rkXRIlhscB8uQDpyV5coeN9D2lBulAf_X-9N0M6yIu4Z_EevF9Cox8HvrXSvESnOkTW5qVlkvkyGU5f4yLBr1R66O5pRDF5vWwPV4e-wkYnQkyMpQF2vmkkoqp5MJ5J6o6NLgQlQW_F4FQGFXO0-acUSYqPV_jCXkMvvkoAq440lCeZWnJsDz1ez5b42GVDrU1Eka0X7_apJ3Q-Lhs1LdMihV_YC5pAh4OOG9849XLAGPgij9OzDDu9CQXRFrthrFP32qFFGktGKReUoYJklsIGodl8nVnXlMe3unKKex84PcpGzoA37Uwm6fXAPDCjuGnXtCbSqDVFSSckYaeUfMSXa6cpbRA6W5aqliZEVfcwquTEjEhE0MaJIInEIlpL7p6b7bpVIfndB_FvgGKoA1acoBSD15hp0MoUrX9dE8-UPdS7ic9-EamR6NXKkW194e1TZhYPdF8hZrk-9LVtEFs58120HHNdooTx_PhJCwWE9wtl_7CrqkgQ9Eaw_V6LV7ghWZMkzFVYjFiMp1Lu8lFKE_FybVK5tURgDv2KfSkGu3VDhj-3wxTD0guLiBcFjILL695OO4ODIrcUeuw6baByiU0wagXL_P7KfFJGq--pRaaFY-AxNroSe4Emg3yY5JlbxqJDYNTz-pa9pgxBeBFP0WU9JkXkzGLMUdfI6KfMf3wVRc_Efo5mo5WohJpZo0r51hTLDyuZCrdEtAcJNF73ciVqdE0ETVdSk0zF_rIkgW5v-lgQFV0RW1OwBEibWCrxUmWwL5nE0x5t-4oC6CEAakcSjlGlAeh-ZCrU1NHFATgXB-irJuGbBSvyzYWvGYbBdmDeraUfRmrJl-YefvP1c6WTF_4T6vAqnXKDBebWHLPiRVAAhZGIyz4tE9Yf5wfGXmurF-WLuqY93hoz2xC-_NIgm12vcmPKUCMVg0Hdcv_h9XIVmuHA9HIakqToK29CV1gOKme4CnkWkrXJAeP3r7XWduuUuPfvGW2GUwokZ9TvDil27NQZ_eBmXbGGUSbzusYnagP_beCeEgk34kF57ZIUgzwA9xDj-r6NIq7uCf1o1Eu3Y91V2EnTgcDhRz6YZ3dJ1FcSIdAcspIr7lEYgZeTN1PANrTLFW9LfFKoTzAGiSxugPEN6B9OPHUr5zBRx_-vdmLBpQU6VBgsgMDIvsfW_PU4EAfsatojGe4hu4nAJBTQZnDIThIGa_acMDM24TabhXTqST8NSlNxtIEtb6g7E6WRbo0rbCAa1obl6xw82Fl44cyFghgt8tE0ZfgW-RMeBv0XzJSB_gxbhzP_tmyxJUpLNuEmSDKP0XeIcObew7--MaKr7R8G44OHNt5g_WIuZSmEGVWMaubHADr2zqUrm36k8SDB_DrUcauC0ngi3qeP6sTFgupuOnsMEohfVUBKvp-4xF-4JLv886s-AFkPLgGkb9nnh55QYr5wVY79yETi0u-FaztPprSi0c6vO4f2MuDZ2eIwrlWfblZjgwwO7TZbz1-7IvVVAoQWiA0pHU55uaGoGnegHhp6bmrkQkFsoQCtj5s4la2jSH5M3Rm8kAriX_pESqqcVD0eC9nRW9LUsEdGtJ21fMqPLaEpyUNVRmMdtTh2Z8FcbhHUbr0pM5fh4EvHWQ25o0zaTPLyhGna5ZE-SkJPPcf8y7B6N7NxWJnTUZGdrt_gTlo6IY_sUvBIwPQc5bVAbB7Wf4LlaBk0jt-xHinbw9qYeLCNYiSb7ixRPe1yv-RHoUgqK2nuS4fkoKsa2BFBY0571Ng6YB2Su8CjJikiBaH8jrQRojhdqUDN4uHC_0TkcH-M9NO4bLnnGd3Qlt0_5qE",AlwaysLoad:false });window.tbl_Employee='';
DbReferences.push({Id:"tbl_va_emp",Type:"Value",OnDemand:1,EntityId:"",Columns:"",Xml:"JMqjMza_8x3tLhmaTxmcwLfqMZYndwWETNsarzvMJ73vcedaWaoySosw94WSB_WjM5Mbx9e7JEtG5duweCwDGDsNl7CtAgrDih-of_TGwD5c-rUsDfcq6akaN0CZY6EDexKdmLY4hJvvvCflkzuKKGEqn2sVjTcI_MYlMxv1zcm4UcmTYFZQUx4NpTwbTET623u6WrqWna2NqJ-mMc3HHXA2HRvQ_JKtR5033VO3-FIXPbJsxPv2qXazEOEJZD8dW6Yg54ZbpPmIxQzys5Qb60uvnBU5wyPSuW1q262Fmkb0C4HZ-VABLLfCDCfjFx83Ri0aBF5cuC8LAVe1wmxh8uziGEcd6u8uo-cr3GIOTcqX1CiqE2FIzGNVcbXEOE2i1bHa0WAuZbUSe9s5wahJYKvyYN-oK_wUVOTi3RE143oD_UqkBBlr5dcwfSfeQ3sAFMoORf0gDkrDFOZG9kTPYCX5ig6rvsPdxLwWYYEYddrqsKF4_VJpBqLLwXyV_JTKR1mo0V1nBsCApCpaoOUEYT2mRzOZfhtG1e0il-3epINUAzcQlt3usw9U8m-djA8h23CaiseyIv1BoB0Hs_POXBDMnPlSSbJOVFd8bzo7iciNqJqHwmDXca4Mqfi6_u3em5pz8HF57oBYBgwOO7VW2sj9p5Tsvv6_-0oNcWzcVg126IwKNDwgYX2kYnxuuZ8WsPPDUDbvjxszcjfsWdnF4PEjtALxz6spAhCePtPM-TGlXELDHLxuXI8XDmF0JwhedS9tvTmLu2Hy75WL0IfUjBQ9E_o6LU6P9LwypkIleF9UY24JW2T07hvJCiCE9-M3MkK_PQ5ELlINgFb_NSPZWUQCVjeRb7U1X8HyfRsUuWbGlx0AJj8QdKDXUCSSjDAGQd43YAJKbl5h2S9P7fmizU0HGZDuizg504MjUL8A3dZTDiL6YWg7mv4oXB7SSic3xX1rFk35348ac1Rsftp40EwxiRdGubeppCistzx3DjRsFbbeymrDQVS9Vpqc5yP_NHBQwJtadjjq1EYywIUC89X1ZD6AqCVBaHT4_oi41LyhvWU79po7aXuqQKMjJIdUOCujQPplOvieuY11INnvbE5mFgFIjDm62j3zhYc2JePbsaKtHr8GanxQLCG174BbLvF0sjC3Y6Tu85dMtAUlWDXRHdTKDIkEToENIir0zPgflFXxTmwklRu_2D_Z39CK5HRg4HDiUCh2U18aKXF9pSXect83hdhftBKqB6vOgRhruUnoGjoNB7jpscUryy5D8GD4R4TJJc1girAEGudIXX_gb3VROQbkh3D5mq08AgNnwftJnu4TIljyY5Bu4btcNT6_J71hxyDXxtGJzciR3zbKI6sAN9ha-rD6HaFyM6Y",AlwaysLoad:false });window.tbl_va_emp='';
 mxEntityList={};

if(typeof __initUi2=='function')__initUi2();




};
var EmpID;
function html_Search_Click(elem){
  if(Fn.IsEmpty(Erp.GetFieldValue('html_AadharNo')) && Fn.IsEmpty(Erp.GetFieldValue('html_Pan')) && Fn.IsEmpty(Erp.GetFieldValue('html_phone')))
  {
    Erp.RaiseError([{
      id:'html_AadharNo',error:'Field Is Manadatory'}
                   ]);
    return false;
  }
  if(!Fn.IsEmpty(Erp.GetFieldValue('html_AadharNo')) || !Fn.IsEmpty(Erp.GetFieldValue('html_Pan')) || !Fn.IsEmpty(Erp.GetFieldValue('html_phone')))
  {
    if(!Fn.IsEmpty(Erp.GetFieldValue('html_AadharNo'))&&!Fn.Eq(Erp.GetFieldValue('html_AadharNo').length,12))
    {
      Erp.SetDisplay("pnl_previousemp",false);
      Erp.RaiseError([{
        id:'html_AadharNo',error:'Aadhar number must consist of 12 digits'}
                     ]);
      return false;
    }
    var regex=/^\d+$/;
    var isValid=regex.test(Erp.GetFieldValue('html_AadharNo'));
    if(!isValid && !Fn.IsEmpty(Erp.GetFieldValue('html_AadharNo')))
    {
      Erp.RaiseError([{
        id:'html_AadharNo',error:'Please input only numerical values, excluding alphabets or any other special '}
                     ]);
      return false;
    }
    if(!Fn.IsEmpty(Erp.GetFieldValue('html_Pan')))
    {
      var reg=/^[A-Z]{5}[0-9]{4}[A-Z]$/;
      if(!reg.test(Erp.GetFieldValue('html_Pan')))
      {
        Erp.SetDisplay("pnl_previousemp",false);
        Erp.RaiseError([{
          id:'html_Pan',error:'Invalid PAN'}
                       ]);
        return false;
      }
    }
    if(!Fn.IsEmpty(Erp.GetFieldValue('html_phone'))&&!Fn.Eq(Erp.GetFieldValue('html_phone').length,10))
    {
      Erp.SetDisplay("pnl_previousemp",false);
      Erp.RaiseError([{
        id:'html_phone',error:'Phone Number must be 10 digit'}
                     ]);
      return false;
    }
    Erp.ServerCommand('cmd1', {
      aadhar:Erp.GetFieldValue('html_AadharNo'),pan:Erp.GetFieldValue('html_Pan'),mobile:Erp.GetFieldValue('html_phone')}
                      ,function(cmd,args){
                        debugger;
                        console.log(args)
                        if(!Fn.IsEmpty(args.EmployeeID))
                        {
                          if(Fn.IsEmpty(args.EmployeeID[0].dateofexit))
                          {
                            $("#lbl_uniquecode").text((Fn.IsEmpty(args.EmployeeID[0].employeeuniquecode)?'':args.EmployeeID[0].employeeuniquecode));
                            $("#lbl_loc").text((Fn.IsEmpty(args.EmployeeID[0].LOC)?'':args.EmployeeID[0].LOC));
                            $("#lbl_empid").text((Fn.IsEmpty(args.EmployeeID[0].empID)?'':args.EmployeeID[0].empID));
                            $("#lbl_branch").text((Fn.IsEmpty(args.EmployeeID[0].presentbranch)?'':args.EmployeeID[0].presentbranch));
                            $("#lbl_designation").text((Fn.IsEmpty(args.EmployeeID[0].presentdesignation)?'':args.EmployeeID[0].presentdesignation));
                            Erp.SetDisplay('pnl_previousemp',false);
                            Erp.ShowDialog({
                              title:'Employee already Existing and live',iconText:'&#xf007;'}
                                           ,'Ok,Cancel','PanelSummary',function(cmd){
                                             if(cmd=="Ok")
                                             {
                                             }
                                           }
                                          );
                            return
                          }
                          EmpID = args.EmployeeID[0].employee_pid;
                          $("#html_heading").text("Employee Found - Please click to proceed");
                          $("#link").removeClass("error-msg");
                          $("#link").addClass("success-msg");
                          $("#hidepanel").show();
                          $("#val_groupcode").text((Fn.IsEmpty(args.EmployeeID[0].employeeuniquecode)?'':args.EmployeeID[0].employeeuniquecode));
                          $("#val_lastworking").text((Fn.IsEmpty(args.EmployeeID[0].dateofexit)?'':Fn.Format(args.EmployeeID[0].dateofexit,'{0:dd-MM-yyyy}')));
                          $("#val_prevbranch").text((Fn.IsEmpty(args.EmployeeID[0].presentbranch)?'':args.EmployeeID[0].presentbranch));
                          $("#val_prevdesingation").text((Fn.IsEmpty(args.EmployeeID[0].presentdesignation)?'':args.EmployeeID[0].presentdesignation));
                          Erp.SetDisplay('pnl_previousemp',true);
                        }
                        else
                        {
                          Erp.SetParam(window,"adhar",Erp.GetFieldValue('html_AadharNo'))                          
                          Erp.SetParam(window,"pan",Erp.GetFieldValue('html_Pan'))
                          Erp.SetParam(window,"mobile",Erp.GetFieldValue('html_phone'))
                          Erp.LoadVariable('tbl_va_emp',function(){
                            if(!Fn.IsEmpty(tbl_va_emp) && !Erp.GetFieldValue("chk_isadharchecked"))
                            {
                              Erp.ServerCommand('getData', {
                                "ID":tbl_va_emp}
                                                ,  function(cmd,args){
                                                  debugger;
                                                  if(args.data!=null && args.data!='')
                                                  {
                                                    var data=args.data[0];
                                                    let _status="";
                                                     $("#lbl_empname").text(data.firstname);
                                                      $("#lbl_pcode").text(data.positioncode);
                                                      $("#lbl_aadharNo").text(data.aadhaarcardno);
                                                      $("#lbl_pno").text(data.pancardno);
                                                      $("#lbl_mno").text(data.personalmobilenumber);
                                                    
                                                    if(data.isfinalaccept=='1')
                                                      _status="Approved";
                                                    else if (data.action=='reject')
                                                      _status="Level "+data.level+" Rejected";
                                                    else if (data.isactiontaken=='')
                                                      _status="Level "+data.level+" Pending";
                                                    else
                                                      _status="Level "+data.level+" Accepted"
                                                    
                                                    
                                                      $("#lbl_status").text(_status);
                                                      if(!Fn.IsEmpty(data.username))
                                                      $("#lbl_wfu").text(data.username);
                                                      else
                                                      $("#wfu").hide();
                                                    Erp.ShowDialog({
                                                      
                                                     
                                                      title:'This Employee Already In Process...',iconText:'&#xf007;'}
                                                                   ,'Ok,Cancel','HTMLContent3',function(cmd){
                                                                     if(cmd=="Ok")
                                                                     {
                                                                     }
                                                                   }
                                                                  );
                                                  }
                                                  else
                                                  {
                                                    Erp.ShowDialog({
                                                      title:'<b style="color:red">Error</b>',message:'Employee Already In Process...',icon:''}
                                                                   ,'Ok',function(cmd){
                                                                   }
                                                                  );
                                                  }
                                                  //Erp.ShowDialog({title:'Take Action',message:'Do you wish to delete?',iconText:'&#xf1f8;'},'Yes,No,Not_Sure','HTMLContent3',function(cmd){});
                                                  /*Erp.ShowDialog({
                                title:'<b style="color:red">Error</b>',message:'This Employee Already In Process...',icon:''}
                                             ,'Ok',function(cmd){
                                             }
                                            );*/
                                                }
                                               );
                            }
                            else
                            {
                              EmpID ='';
                              $("#link").removeClass("success-msg");
                              $("#link").addClass("error-msg");
                              $("#html_heading").text("Employee Not Found - Please click to Enroll");
                              $("#hidepanel").hide();
                              Erp.SetDisplay('pnl_previousemp',true);
                            }
                          }
                                          );
                        }
                      }
                     );
    Erp.ClearErrors();
  }
  else
  {
    Erp.ShowMessage("Please ensure that the Aadhar or PAN number is not left blank","alert");
    return;
  }
}
function html_EmpID_Click(elem){
  debugger;
  //var formlayout = db_fld_0;
  var formcode = Erp.GetParam(window,"LayoutID");
  Erp.OpenWindow({
    "Action":"ADDFORM","Responsive":1,"Entity":"tbl_VA_employeeinformation","Form":formcode,"Refresh":false,"Global":false,"Title":"","Params":"mode=principle&EmpID="+EmpID+"&aadhar="+Erp.GetFieldValue('html_AadharNo')+"&pan="+Erp.GetFieldValue('html_Pan')+"&mobile="+Erp.GetFieldValue('html_phone'),"Location":"Self"}
                );
}
$(window).resize(function() {
  $('#PnlOuterCtr').css("min-height", $(window).height()-105);
}
                );
$(window).trigger('resize');


