import{a as q}from"./chunk-AT7TGCEZ.js";import{a as S}from"./chunk-SYXL6P7Q.js";import{a as J,b as K,c as Q,d as X,e as Y,f as Z}from"./chunk-2ON4Y7P4.js";import{l as B}from"./chunk-2FMGFU6Q.js";import{A as tt,C as et}from"./chunk-ZJ53BJNV.js";import{e as N,h as U,l as W,m as $,n as G,q as H}from"./chunk-H6SZLHBS.js";import{$b as R,Ab as I,Bb as T,Cb as F,Db as n,Eb as i,Fb as s,Jb as b,Lb as x,Mb as f,U as v,Va as a,Wa as P,Wb as o,Xb as M,Yb as l,Zb as A,ab as p,ac as V,bc as j,da as g,ec as L,fb as h,gc as z,ib as y,k,la as _,ma as C,mb as d,rb as E,tb as w,zb as u}from"./chunk-WENU43YX.js";var it=(()=>{class e{transform(t,r){return r?t.filter(m=>m[4]===r):t}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275pipe=y({name:"tableFilter",type:e,pure:!0})}}return e})();var at=()=>[X,Y,tt];function rt(e,c){e&1&&(n(0,"button",1),o(1,"VFR"),i())}function lt(e,c){e&1&&(n(0,"button",2),o(1,"IFR"),i())}function ct(e,c){e&1&&(n(0,"button",3),o(1," LIFR"),i())}function mt(e,c){e&1&&(n(0,"button",4),o(1,"OUT"),i())}function st(e,c){if(e&1){let t=b();n(0,"h2",0),o(1),i(),n(2,"div"),d(3,rt,2,0,"button",1)(4,lt,2,0,"button",2)(5,ct,2,0,"button",3)(6,mt,2,0,"button",4),i(),n(7,"mat-dialog-content")(8,"section")(9,"p"),o(10),i(),n(11,"p"),o(12),i(),n(13,"p"),o(14),i(),n(15,"p"),o(16),i(),n(17,"p"),o(18),i(),n(19,"p"),o(20),i(),n(21,"p"),o(22),i(),n(23,"p"),o(24),i(),n(25,"p"),o(26),i(),n(27,"p"),o(28),i(),n(29,"p"),o(30),i(),n(31,"p"),o(32),i(),n(33,"p"),o(34),i(),n(35,"p"),o(36),i()()(),n(37,"button",5),x("click",function(){_(t);let m=f();return C(m.closeDialog())}),o(38,` Fechar
`),i()}if(e&2){let t=f();a(),A("",t.getData().localidade," - ",t.getData().nome,""),a(2),u(t.itemData()==="g"?3:t.itemData()==="y"?4:t.itemData()==="r"?5:t.itemData()==="cinza"?6:-1),a(7),l("ICAO: ",t.getData().localidade,""),a(2),l("Latitude: ",t.getData().lat,""),a(2),l("Longitude: ",t.getData().lon,""),a(2),l("Localiza\xE7\xE3o: ",t.getData().localizacao,""),a(2),l("Hor\xE1rio: ",t.getData().data,""),a(2),l("Metar: ",t.getData().metar,""),a(2),l("Temperatura: ",t.getData().temperatura,""),a(2),l("Teto: ",t.getData().teto,""),a(2),l("Umidade: ",t.getData().ur,""),a(2),l("Dire\xE7\xE3o do Vento: ",t.getData().vento,""),a(2),l("Cidade: ",t.getData().cidade,""),a(2),l("C\xE9u: ",t.getData().ceu,""),a(2),l("Condi\xE7\xF5es: ",t.getData().condicoes_tempo,""),a(2),l("Visibilidae: ",t.getData().visibilidade,"")}}function dt(e,c){e&1&&(n(0,"h2"),o(1,"Carregando ..."),i())}var ot=(()=>{class e{#t;constructor(t,r){this._data=t,this.dialogRef=r,this.#t=g(S),this.getData=p(null),this.itemData=p("")}closeDialog(){return this.dialogRef.close()}ngOnInit(){this.#t.httpApiAerodromes$(this._data[0]).subscribe(t=>{this.getData.set(t.data),this.itemData.set(this._data[4]),console.log(this.itemData())}),this.getData.set(this._data)}static{this.\u0275fac=function(r){return new(r||e)(P(K),P(J))}}static{this.\u0275cmp=h({type:e,selectors:[["app-dialog"]],decls:4,vars:0,consts:[["mat-dialog-title",""],[1,"g"],[1,"y"],[1,"r"],[1,"out"],["mat-raised-button","","color","primary",3,"click"]],template:function(r,m){r&1&&(d(0,st,39,17)(1,dt,2,0),E(2,0,at,null,1),w(500))},dependencies:[Z,et],styles:["[_nghost-%COMP%]   *[_ngcontent-%COMP%]{overflow:hidden}[_nghost-%COMP%]   .g[_ngcontent-%COMP%]{color:#fff;font-weight:700;background:green;text-align:center}[_nghost-%COMP%]   .y[_ngcontent-%COMP%]{color:#000;font-weight:700;background:#ff0;text-align:center;-webkit-animation:_ngcontent-%COMP%_y-animation 2s infinite;animation:_ngcontent-%COMP%_y-animation 2s infinite}[_nghost-%COMP%]   .r[_ngcontent-%COMP%]{color:#000;font-weight:700;background:#8a2be2;text-align:center;-webkit-animation:_ngcontent-%COMP%_r-animation .5s infinite;animation:_ngcontent-%COMP%_r-animation .5s infinite}[_nghost-%COMP%]   .out[_ngcontent-%COMP%]{color:#000;font-weight:700;background:#7a7a7a;text-align:center}@keyframes _ngcontent-%COMP%_y-animation{0%{background:#ff0}50%{background:#000;color:#fff}to{background:#ff0}}@-webkit-keyframes _ngcontent-%COMP%_y-animation{0%{background:#ff0}50%{background:#000;color:#fff}to{background:#ff0}}@keyframes _ngcontent-%COMP%_r-animation{0%{background:#8a2be2}50%{background:#000;color:#fff}to{background:#8a2be2}}@-webkit-keyframes _ngcontent-%COMP%_r-animation{0%{background:#8a2be2}50%{background:#000;color:#fff}to{background:#8a2be2}}[_nghost-%COMP%]   p[_ngcontent-%COMP%]{line-height:1}[_nghost-%COMP%]   section[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:left}[_nghost-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;top:5px;right:5px}[_nghost-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]{max-width:500px}[_nghost-%COMP%]   .mdc-dialog__title[_ngcontent-%COMP%]{padding:0 0 0 10px;margin:0}"]})}}return e})();function gt(e,c){e&1&&o(0,"Aer\xF3dromo consultado")}function pt(e,c){e&1&&o(0,"Aer\xF3dromos consultados")}function ut(e,c){e&1&&(n(0,"button",7),o(1,"VFR"),i())}function ft(e,c){e&1&&(n(0,"button",8),o(1,"IFR"),i())}function _t(e,c){e&1&&(n(0,"button",9),o(1," LIFR"),i())}function Ct(e,c){e&1&&(n(0,"button",10),o(1,"OUT"),i())}function ht(e,c){if(e&1){let t=b();n(0,"table",4)(1,"button",5),x("click",function(){let m=_(t).$implicit,D=f();return C(D.openDialog(m))}),n(2,"tr")(3,"th"),o(4),i(),n(5,"th",6),o(6),i(),s(7,"th"),n(8,"th"),d(9,ut,2,0,"button",7)(10,ft,2,0,"button",8)(11,_t,2,0,"button",9)(12,Ct,2,0,"button",10),i()(),n(13,"tr"),s(14,"td")(15,"td"),n(16,"td"),o(17),i(),s(18,"td"),i()()(),s(19,"hr")}if(e&2){let t=c.$implicit;a(4),M(t[0]),a(2),M(t[1]),a(3),u(t[4]==="g"?9:t[4]==="y"?10:t[4]==="r"?11:12),a(8),M(t[5])}}function bt(e,c){e&1&&(n(0,"h2"),o(1,"Nenhum Abaixo dos M\xEDnimos"),i())}var Nt=(()=>{class e{constructor(){this.#t=g(S),this.#n=g(Q),this.#e=new k,this.setStatusTask=p(null),this.searchStatus="",this.aerodromesCount=0}#t;#n;#e;openDialog(t){this.#n.open(ot,{data:t,height:"auto",width:"500px"})}ngOnInit(){this.#t.httpApiStatus$().subscribe(t=>{this.setStatusTask.set(t.data),console.log(t),console.log(t.data)}),this.#t.getDataStatus$().pipe(v(this.#e)).subscribe(t=>{this.setStatusTask.set(t.data),this.aerodromesCount=t.data.length})}ngOnDestroy(){this.#e.next(),this.#e.complete()}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=h({type:e,selectors:[["app-status"]],decls:22,vars:7,consts:[[3,"ngModelChange","ngModel"],["value","g"],["value","y"],["value","r"],[1,"mat-elevation-z8"],[3,"click"],["colspan","2"],[1,"g"],[1,"y"],[1,"r"],[1,"out"]],template:function(r,m){r&1&&(s(0,"app-consume-services"),n(1,"section")(2,"p"),o(3),d(4,gt,1,0)(5,pt,1,0),i(),n(6,"div")(7,"p"),o(8,"Filtrar:"),i(),n(9,"select",0),j("ngModelChange",function(O){return V(m.searchStatus,O)||(m.searchStatus=O),O}),s(10,"option"),n(11,"option",1),o(12,"VFR"),i(),n(13,"option",2),o(14,"IFR"),i(),n(15,"option",3),o(16,"LIFR"),i()()(),s(17,"hr"),T(18,ht,20,4,null,null,I,!1,bt,2,0,"h2"),L(21,"tableFilter"),i()),r&2&&(a(3),l(" ",m.aerodromesCount," "),a(),u(m.aerodromesCount==1?4:5),a(5),R("ngModel",m.searchStatus),a(9),F(z(21,4,m.setStatusTask(),m.searchStatus)))},dependencies:[H,$,G,W,N,U,it,B,q],styles:["[_nghost-%COMP%]   .g[_ngcontent-%COMP%]{color:#fff;font-weight:700;background:green;text-align:center}[_nghost-%COMP%]   .y[_ngcontent-%COMP%]{color:#000;font-weight:700;background:#ff0;text-align:center;-webkit-animation:_ngcontent-%COMP%_y-animation 2s infinite;animation:_ngcontent-%COMP%_y-animation 2s infinite}[_nghost-%COMP%]   .r[_ngcontent-%COMP%]{color:#000;font-weight:700;background:#8a2be2;text-align:center;-webkit-animation:_ngcontent-%COMP%_r-animation .5s infinite;animation:_ngcontent-%COMP%_r-animation .5s infinite}[_nghost-%COMP%]   .out[_ngcontent-%COMP%]{color:#fff;font-weight:700;background:gray;text-align:center}@keyframes _ngcontent-%COMP%_y-animation{0%{background:#ff0}50%{background:#000;color:#fff}to{background:#ff0}}@-webkit-keyframes _ngcontent-%COMP%_y-animation{0%{background:#ff0}50%{background:#000;color:#fff}to{background:#ff0}}@keyframes _ngcontent-%COMP%_r-animation{0%{background:#8a2be2}50%{background:#000;color:#fff}to{background:#8a2be2}}@-webkit-keyframes _ngcontent-%COMP%_r-animation{0%{background:#8a2be2}50%{background:#000;color:#fff}to{background:#8a2be2}}[_nghost-%COMP%]   select[_ngcontent-%COMP%]{height:100%;border:1px thin black;border-radius:7px;background:#fff;color:#000;font-weight:700;font-size:1.3em;text-align:center}[_nghost-%COMP%]   div[_ngcontent-%COMP%]{height:auto;display:flex;flex-direction:row;justify-content:right;align-items:baseline}[_nghost-%COMP%]   table[_ngcontent-%COMP%]{background:#fff}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}[_nghost-%COMP%]   button[_ngcontent-%COMP%]{background:transparent;width:100%;margin:0;border:0}[_nghost-%COMP%]   section[_ngcontent-%COMP%]{position:relative}[_nghost-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;top:0;right:0}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{display:flex;justify-content:center}"]})}}return e})();export{Nt as StatusComponent};
