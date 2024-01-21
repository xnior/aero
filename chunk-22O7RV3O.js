import{$ as T,Ad as D,Cd as I,Db as k,Ea as h,Ha as P,T as m,Va as b,Xb as w,Y as M,Yb as A,Zb as L,cb as g,db as f,e as t,f as s,fa as u,g as S,ha as y,lb as _,nd as R,o as d,qd as F,td as G,ub as v,vb as O}from"./chunk-GSKKPTE3.js";var C="TW2Ko62QmALLSLSg5il6hBBCiYQgwag1sPwZcqFd";var x={env:"metar",apiTask:"https://api-redemet.decea.mil.br/mensagens/metar/",apiToken:"?api_key="+C},N={env:"status",apiTask:"https://api-redemet.decea.mil.br/aerodromos/status/localidades/",apiToken:"?api_key="+C},V={env:"aerodromes",apiTask:"https://api-redemet.decea.mil.br/aerodromos/info?api_key="+C+"&"};var J=(()=>{var n,e,c,r,i,a;let o=class o{constructor(){s(this,n,void 0);s(this,e,void 0);s(this,c,void 0);s(this,r,void 0);s(this,i,void 0);s(this,a,void 0);this.listLoc=h("SBAE,SBAF,SBAN,SBAR,SBAX,SBBE,SBBG,SBBH,SBBI,SBBP,SBBQ,SBBR,SBBU,SBBV,SBCA,SBCB,SBCF,SBCG,SBCH,SBCJ,SBCO,SBCP,SBCT,SBCY,SBDN,SBEG,SBEN,SBES,SBFI,SBFL,SBFN,SBFS,SBFZ,SBGL,SBGO,SBGP,SBGR,SBGV,SBGW,SBHT,SBIH,SBIL,SBIP,SBIZ,SBJA,SBJH,SBJI,SBJP,SBJR,SBJU,SBJV,SBKG,SBKP,SBLB,SBLO,SBLS,SBMA,SBME,SBMG,SBMI,SBMK,SBMM,SBMN,SBMO,SBMQ,SBMT,SBNF,SBNT,SBNV,SBOI,SBPA,SBPB,SBPJ,SBPK,SBPL,SBPO,SBPS,SBPV,SBRB,SBRF,SBRJ,SBRP,SBSC,SBSG,SBSJ,SBSL,SBSM,SBSN,SBSP,SBSR,SBST,SBSV,SBTA,SBTB,SBTD,SBTE,SBTV,SBUF,SBUG,SBUL,SBUR,SBUY,SBVC,SBVG,SBVT,SBYS,SBZM"),S(this,n,new d(1)),S(this,e,new d(1)),S(this,c,new d(1)),S(this,r,u(L)),S(this,i,h(x.apiToken)),S(this,a,h(null)),this.getListTask=t(this,a).asReadonly(),this.headers=new A({"Content-Type":"application/json","Access-Control-Allow-Origin":"*"})}setData(B){t(this,n).next(B),this.getData$().subscribe(l=>{this.listLoc.set(l)}),this.httpApiMetar$().subscribe(l=>{t(this,e).next(l)}),this.httpApiStatus$().subscribe(l=>{t(this,c).next(l)})}getData$(){return t(this,n).asObservable()}getDataMetar$(){return t(this,e).asObservable()}getDataStatus$(){return t(this,c).asObservable()}httpApiMetar$(){return t(this,r).get(x.apiTask+this.listLoc()+t(this,i).call(this)).pipe(m(),M(B=>{t(this,a).set(B)}))}httpApiStatus$(){return t(this,r).get(N.apiTask+this.listLoc()+t(this,i).call(this)).pipe(m(),M(B=>{t(this,c).next(B)}))}httpApiAerodromes$(B){return t(this,r).get(V.apiTask+"localidade="+B).pipe(m())}};n=new WeakMap,e=new WeakMap,c=new WeakMap,r=new WeakMap,i=new WeakMap,a=new WeakMap,o.\u0275fac=function(l){return new(l||o)},o.\u0275prov=T({token:o,factory:o.\u0275fac,providedIn:"root"});let p=o;return p})();var at=(()=>{var n;let e=class e{constructor(){s(this,n,void 0);S(this,n,u(J)),this.input_localide="SBRP,SBSP,SBUR,SBBR"}requestData(){this.input_localide.length>0&&t(this,n).setData(this.input_localide)}};n=new WeakMap,e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=y({type:e,selectors:[["app-consume-services"]],standalone:!0,features:[k],decls:7,vars:2,consts:[[1,"section"],["type","text","oninput","this.value = this.value.toUpperCase(),this.value = this.value.trim()","placeholder","SBSP, SBGL","required","",3,"ngModel","ngModelChange"],["dataInputLocalidade",""],[3,"disabled","click"]],template:function(i,a){if(i&1&&(g(0,"section",0)(1,"h3"),O(2,"Consulta de Aer\xF3dromo(s)"),f(),g(3,"input",1,2),_("ngModelChange",function(E){return a.input_localide=E}),f(),g(5,"button",3),_("click",function(){return a.requestData()}),O(6,"Requisitar"),f()()),i&2){let o=v(4);P(3),b("ngModel",a.input_localide),P(2),b("disabled",!o.value)}},dependencies:[w,I,R,F,D,G],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:auto}html[_ngcontent-%COMP%]{background:#f5f5f5;font-family:Roboto,sans-serif;font-size:16px;color:#333;display:flex;justify-content:center}body[_ngcontent-%COMP%]{width:580px;font-family:Roboto,Helvetica Neue,sans-serif}h1[_ngcontent-%COMP%]{font-size:2rem;font-weight:400;margin:0;padding:0}h2[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:400;margin:0;padding:0}h3[_ngcontent-%COMP%]{font-size:1.17rem;font-weight:400;margin:0;padding:0}h4[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;margin:0;padding:0}h5[_ngcontent-%COMP%]{font-size:.83rem;font-weight:400;margin:0;padding:0}h6[_ngcontent-%COMP%]{font-size:.67rem;font-weight:400;margin:0;padding:0}p[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;margin:0;padding:0}a[_ngcontent-%COMP%]{text-decoration:none;color:#333}button[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:5px;padding:5px;margin:5px;cursor:pointer}input[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:5px;padding:5px;margin:5px}table[_ngcontent-%COMP%]{width:580px}@media screen and (max-width: 580px){table[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{width:100%}section[_ngcontent-%COMP%]{display:grid;width:100%;margin:0}form[_ngcontent-%COMP%]{display:grid;width:100%;margin:0}}[_nghost-%COMP%]   .section[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-top:25px}"]});let p=e;return p})();export{J as a,at as b};