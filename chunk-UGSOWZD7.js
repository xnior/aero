import{a as T,b as z}from"./chunk-7GCE2YEO.js";import{a as R,b as E,c as H,d as A,e as $,f as F,g as I,h as j,i as k,j as N,l as O}from"./chunk-2VC4BCAO.js";import{Ab as m,Ac as g,Bb as r,Cb as c,Db as S,Eb as y,Rb as o,Tb as h,Wa as n,X as _,_b as b,f as i,g as C,ga as v,h as D,ka as w,mb as p,n as M,rb as f,wb as x}from"./chunk-GGNKDNZB.js";function L(e,t){e&1&&o(0," Aer\xF3dromos consultados ")}function U(e,t){e&1&&o(0,"Aer\xF3dromo consultado")}function q(e,t){e&1&&(m(0,"th",7),o(1," No. "),r())}function B(e,t){if(e&1&&(m(0,"td",8),o(1),r()),e&2){let a=t.$implicit;n(),h(" ",a.id_localidade," ")}}function G(e,t){e&1&&(m(0,"th",7),o(1," Name "),r())}function J(e,t){if(e&1&&(m(0,"td",8),o(1),r()),e&2){let a=t.$implicit;n(),h(" ",a.mens," ")}}function K(e,t){e&1&&c(0,"tr",9)}function P(e,t){e&1&&c(0,"tr",10)}var ie=(()=>{var t,a;let s=class s{constructor(){C(this,t);C(this,a);D(this,t,v(T)),D(this,a,new M),this.aerodromesCount=0,this.getData="",this.getMetar=i(this,t).getListTask,this.displayedColumns=["localidade","mens"],this.dataSource=[],this.listAerodromes=[]}ngOnInit(){i(this,t).getData$().pipe(_(i(this,a))).subscribe(l=>{this.getData=l}),i(this,t).getDataMetar$().pipe(_(i(this,a))).subscribe(l=>{this.dataSource=l.data.data,this.aerodromesCount=this.dataSource.length}),i(this,t).httpApiMetar$().subscribe(l=>{this.dataSource=l.data.data,this.aerodromesCount=this.dataSource.length})}ngOnDestroy(){i(this,a).next(),i(this,a).complete()}};t=new WeakMap,a=new WeakMap,s.\u0275fac=function(u){return new(u||s)},s.\u0275cmp=w({type:s,selectors:[["app-metar"]],standalone:!0,features:[b],decls:15,vars:5,consts:[["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","localidade"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","mens"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(u,d){u&1&&(c(0,"app-consume-services"),m(1,"p"),o(2),p(3,L,1,0)(4,U,1,0),r(),c(5,"hr"),m(6,"table",0),S(7,1),p(8,q,2,0,"th",2)(9,B,2,1,"td",3),y(),S(10,4),p(11,G,2,0,"th",2)(12,J,2,1,"td",3),y(),p(13,K,1,0,"tr",5)(14,P,1,0,"tr",6),r()),u&2&&(n(2),h("",d.aerodromesCount," "),n(),x(d.dataSource.length>1?3:4),n(3),f("dataSource",d.dataSource),n(7),f("matHeaderRowDef",d.displayedColumns),n(),f("matRowDefColumns",d.displayedColumns))},dependencies:[g,O,R,H,I,A,E,j,$,F,k,N,z]});let e=s;return e})();export{ie as a};
