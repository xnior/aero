import{$b as V,Bb as h,Cb as f,Fc as G,Hb as k,Jb as v,Jc as I,Kc as D,Pd as N,Sd as J,Tb as L,U as m,Ub as O,Vd as E,Xa as _,Z as M,Zb as A,_b as R,aa as x,ae as z,bc as F,ce as H,eb as g,f as t,g as S,ga as u,h as B,ka as y,p as l,sb as T,ta as P,ua as b}from"./chunk-DXTRZIE6.js";var C="TW2Ko62QmALLSLSg5il6hBBCiYQgwag1sPwZcqFd";var w={env:"metar",apiTask:"https://api-redemet.decea.mil.br/mensagens/metar/",apiToken:"?api_key="+C},U={env:"status",apiTask:"https://api-redemet.decea.mil.br/aerodromos/status/localidades/",apiToken:"?api_key="+C},j={env:"aerodromes",apiTask:"https://api-redemet.decea.mil.br/aerodromos/info?api_key="+C+"&"};var $=(()=>{var i,e,c,s,a,r;let n=class n{constructor(){S(this,i);S(this,e);S(this,c);S(this,s);S(this,a);S(this,r);this.listLoc=g("SBAE,SBAF,SBAN,SBAR,SBAX,SBBE,SBBG,SBBH,SBBI,SBBP,SBBQ,SBBR,SBBU,SBBV,SBCA,SBCB,SBCF,SBCG,SBCH,SBCJ,SBCO,SBCP,SBCT,SBCY,SBDN,SBEG,SBEN,SBES,SBFI,SBFL,SBFN,SBFS,SBFZ,SBGL,SBGO,SBGP,SBGR,SBGV,SBGW,SBHT,SBIH,SBIL,SBIP,SBIZ,SBJA,SBJH,SBJI,SBJP,SBJR,SBJU,SBJV,SBKG,SBKP,SBLB,SBLO,SBLS,SBMA,SBME,SBMG,SBMI,SBMK,SBMM,SBMN,SBMO,SBMQ,SBMT,SBNF,SBNT,SBNV,SBOI,SBPA,SBPB,SBPJ,SBPK,SBPL,SBPO,SBPS,SBPV,SBRB,SBRF,SBRJ,SBRP,SBSC,SBSG,SBSJ,SBSL,SBSM,SBSN,SBSP,SBSR,SBST,SBSV,SBTA,SBTB,SBTD,SBTE,SBTV,SBUF,SBUG,SBUL,SBUR,SBUY,SBVC,SBVG,SBVT,SBYS,SBZM"),B(this,i,new l(1)),B(this,e,new l(1)),B(this,c,new l(1)),B(this,s,u(D)),B(this,a,g(w.apiToken)),B(this,r,g(null)),this.getListTask=t(this,r).asReadonly(),this.headers=new I({"Content-Type":"application/json","Access-Control-Allow-Origin":"*"})}setData(o){t(this,i).next(o),this.getData$().subscribe(d=>{this.listLoc.set(d)}),this.httpApiMetar$().subscribe(d=>{t(this,e).next(d)}),this.httpApiStatus$().subscribe(d=>{t(this,c).next(d)})}getData$(){return t(this,i).asObservable()}getDataMetar$(){return t(this,e).asObservable()}getDataStatus$(){return t(this,c).asObservable()}httpApiMetar$(){return t(this,s).get(w.apiTask+this.listLoc()+t(this,a).call(this)).pipe(m(),M(o=>{t(this,r).set(o)}))}httpApiStatus$(){return t(this,s).get(U.apiTask+this.listLoc()+t(this,a).call(this)).pipe(m(),M(o=>{t(this,c).next(o)}))}httpApiAerodromes$(o){return t(this,s).get(j.apiTask+"localidade="+o).pipe(m())}};i=new WeakMap,e=new WeakMap,c=new WeakMap,s=new WeakMap,a=new WeakMap,r=new WeakMap,n.\u0275fac=function(d){return new(d||n)},n.\u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"});let p=n;return p})();var ct=(()=>{var i;let e=class e{constructor(){S(this,i);B(this,i,u($)),this.input_localide="SBRP,SBSP,SBUR,SBBR"}requestData(){this.input_localide.length>0&&t(this,i).setData(this.input_localide)}};i=new WeakMap,e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=y({type:e,selectors:[["app-consume-services"]],standalone:!0,features:[F],decls:7,vars:2,consts:[["dataInputLocalidade",""],[1,"section"],["type","text","oninput","this.value = this.value.toUpperCase(),this.value = this.value.trim()","placeholder","SBSP, SBGL","required","",3,"ngModelChange","ngModel"],[3,"click","disabled"]],template:function(a,r){if(a&1){let n=k();h(0,"section",1)(1,"h3"),O(2,"Consulta de Aer\xF3dromo(s)"),f(),h(3,"input",2,0),V("ngModelChange",function(o){return P(n),R(r.input_localide,o)||(r.input_localide=o),b(o)}),f(),h(5,"button",3),v("click",function(){return P(n),b(r.requestData())}),O(6,"Requisitar"),f()()}if(a&2){let n=L(4);_(3),A("ngModel",r.input_localide),_(2),T("disabled",!n.value)}},dependencies:[G,H,N,J,z,E],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:auto}html[_ngcontent-%COMP%]{background:#f5f5f5;font-family:Roboto,sans-serif;font-size:16px;color:#333;display:flex;justify-content:center}body[_ngcontent-%COMP%]{width:580px;font-family:Roboto,Helvetica Neue,sans-serif}h1[_ngcontent-%COMP%]{font-size:2rem;font-weight:400;margin:0;padding:0}h2[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:400;margin:0;padding:0}h3[_ngcontent-%COMP%]{font-size:1.17rem;font-weight:400;margin:0;padding:0}h4[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;margin:0;padding:0}h5[_ngcontent-%COMP%]{font-size:.83rem;font-weight:400;margin:0;padding:0}h6[_ngcontent-%COMP%]{font-size:.67rem;font-weight:400;margin:0;padding:0}p[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;margin:0;padding:0}a[_ngcontent-%COMP%]{text-decoration:none;color:#333}button[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:5px;padding:5px;margin:5px;cursor:pointer}input[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:5px;padding:5px;margin:5px}table[_ngcontent-%COMP%]{width:580px}@media screen and (max-width: 580px){table[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{width:100%}section[_ngcontent-%COMP%]{display:grid;width:100%;margin:0}form[_ngcontent-%COMP%]{display:grid;width:100%;margin:0}}[_nghost-%COMP%]   .section[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-top:25px}"]});let p=e;return p})();export{$ as a,ct as b};