import pathlib, re
src = pathlib.Path('.')
data = "\n".join((src/f).read_text() for f in ['data0.js','data1.js','data2.js','data3.js','data4.js','data5_tfs.js','data6_zto.js','data7_tii.js','data8_tib.js','dataA_pcs.js','dataA_tpl.js','dataA_csup.js','dataA_tmit.js','dataA_tos.js','dataA_s7p.js','dataA_fsh.js','dataA_fbr.js','dataA_tbs.js','dataA_pom.js','dataD_ewb.js','dataD_sa.js','dataD_mos.js','dataD_twbw.js','dataD_ouww.js','dataD_ycbsmg.js','dataD_lbbw.js','dataD_fr.js','dataD_tic.js','dataD_lbv.js','dataD_mck.js','dataD_afv.js','dataD_cr.js','dataD_lbcsi.js','dataD_cap.js','dataF_vd.js','dataF_sshr.js','dataF_bvc.js','dataF_mvcg.js','dataF_ctc.js','dataF_csp.js','dataF_tls.js','dataF_htht.js','dataF_cd.js','dataF_tid.js','dataF_gsbs.js','dataF_otps.js','dataF_pr.js','dataF_goal.js','dataF_halo.js','dataF_cinc.js','dataH_atg.js','dataH_inf.js','dataH_sw.js','dataH_rwh.js','dataH_caf.js','dataH_wnf.js','dataH_won.js','dataH_gt.js','dataH_rts.js','dataJ_sap.js','dataJ_loh.js','dataJ_ggs.js','dataJ_rftr.js','dataJ_tsr.js','dataJ_pog.js','dataJ_hpw.js','dataJ_dfre.js','dataJ_pw2.js','dataJ_tcw.js','dataJ_cae.js','dataJ_aom.js','dataJ_gk.js','dataJ_nap.js','dataJ_han.js','dataL_sd.js','dataL_mia.js','dataL_tes.js','dataL_sj.js','dataL_tit.js','dataL_open.js','dataL_igt.js','dataL_rel.js','dataL_sb.js','dataL_chm.js','data9_links.js','dataB_links.js','dataC_links.js','dataE_links.js','dataG_links.js','dataI_links.js','dataK_links.js','dataM_links.js'])
app  = (src/'app.js').read_text()
shell= (src/'shell.html').read_text()
out = shell.replace('/*__DATA__*/', data).replace('/*__APP__*/', app)
p = pathlib.Path('/home/claude/pk/latticework.html')
p.write_text(out)
print('bytes', len(out), '->', p)
