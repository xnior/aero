import{a as $t,b as Gt}from"./chunk-WEKVLA7D.js";import{a as Et,b as Ot,c as zt,d as Ft,e as kt}from"./chunk-HKECOAW7.js";import{a as vt,b as St,c as bt,d as xt,e as Ct,f as wt,g as Dt,h as It,i as Pt,j as Mt,k as Tt,l as yt,m as At}from"./chunk-3SJANC4T.js";import{a as Lt,b as Ht,d as j,e as Nt,f as Vt,g as Bt,h as jt,i as Yt,j as qt}from"./chunk-6FCA7HVK.js";import{d as Ut,e as Y}from"./chunk-LBRB56GC.js";import{A as B,B as Rt,C as y}from"./chunk-IDKOQUQ6.js";import{Ab as a,Bb as v,Cb as N,Da as X,Db as V,Fb as w,Hb as u,Ib as h,Mb as st,Nb as lt,Ob as dt,Pb as ct,Qb as s,Rb as mt,Sb as c,Wa as d,Xa as C,Zb as M,_b as pt,aa as T,ba as k,da as Z,f as q,g as Q,ga as J,gb as tt,h as K,ha as R,ia as L,jc as et,ka as S,kb as g,la as I,ma as H,mc as E,n as F,nc as O,p as W,pb as P,qb as p,qd as gt,rd as ut,sd as _t,ua as b,va as x,vb as f,wa as A,wb as nt,xa as at,xb as ot,yb as rt,yc as ht,zb as r,zd as ft}from"./chunk-C4XGH33C.js";var Ue=ut.ENTERING+" "+gt.STANDARD_CURVE;var it=(()=>{let e=class e{constructor(){this.changes=new F}};e.\u0275fac=function(l){return new(l||e)},e.\u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Xt(t){return t||new it}var te={provide:it,deps:[[new R,new L,it]],useFactory:Xt};var Qt=(()=>{let e=class e{};e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=H({type:e}),e.\u0275inj=k({providers:[te],imports:[_t]});let t=e;return t})();function ee(t,e){if(t&1&&(r(0,"mat-option",16),s(1),a()),t&2){let n=e.$implicit;p("value",n),d(),c(" ",n," ")}}function ie(t,e){if(t&1){let n=w();r(0,"mat-form-field",13)(1,"mat-select",15),u("selectionChange",function(l){b(n);let i=h(2);return x(i._changePageSize(l.value))}),ot(2,ee,2,2,"mat-option",16,nt),a()()}if(t&2){let n=h(2);p("appearance",n._formFieldAppearance)("color",n.color),d(),p("value",n.pageSize)("disabled",n.disabled)("aria-labelledby",n._pageSizeLabelId)("panelClass",n.selectConfig.panelClass||"")("disableOptionCentering",n.selectConfig.disableOptionCentering),d(),rt(n._displayedPageSizeOptions)}}function ae(t,e){if(t&1&&(r(0,"div",14),s(1),a()),t&2){let n=h(2);d(),mt(n.pageSize)}}function ne(t,e){if(t&1&&(r(0,"div",2)(1,"div",12),s(2),a(),g(3,ie,4,7,"mat-form-field",13)(4,ae,2,1,"div",14),a()),t&2){let n=h();d(),P("id",n._pageSizeLabelId),d(),c(" ",n._intl.itemsPerPageLabel," "),d(),f(3,n._displayedPageSizeOptions.length>1?3:-1),d(),f(4,n._displayedPageSizeOptions.length<=1?4:-1)}}function oe(t,e){if(t&1){let n=w();r(0,"button",17),u("click",function(){b(n);let l=h();return x(l.firstPage())}),A(),r(1,"svg",7),v(2,"path",18),a()()}if(t&2){let n=h();p("matTooltip",n._intl.firstPageLabel)("matTooltipDisabled",n._previousButtonsDisabled())("matTooltipPosition","above")("disabled",n._previousButtonsDisabled()),P("aria-label",n._intl.firstPageLabel)}}function re(t,e){if(t&1){let n=w();r(0,"button",19),u("click",function(){b(n);let l=h();return x(l.lastPage())}),A(),r(1,"svg",7),v(2,"path",20),a()()}if(t&2){let n=h();p("matTooltip",n._intl.lastPageLabel)("matTooltipDisabled",n._nextButtonsDisabled())("matTooltipPosition","above")("disabled",n._nextButtonsDisabled()),P("aria-label",n._intl.lastPageLabel)}}var G=(()=>{let e=class e{constructor(){this.changes=new F,this.itemsPerPageLabel="Items per page:",this.nextPageLabel="Next page",this.previousPageLabel="Previous page",this.firstPageLabel="First page",this.lastPageLabel="Last page",this.getRangeLabel=(o,l,i)=>{if(i==0||l==0)return`0 of ${i}`;i=Math.max(i,0);let m=o*l,_=m<i?Math.min(m+l,i):m+l;return`${m+1} \u2013 ${_} of ${i}`}}};e.\u0275fac=function(l){return new(l||e)},e.\u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function se(t){return t||new G}var le={provide:G,deps:[[new R,new L,G]],useFactory:se},de=50;var ce=new Z("MAT_PAGINATOR_DEFAULT_OPTIONS"),me=0,z=(()=>{let e=class e{get pageIndex(){return this._pageIndex}set pageIndex(o){this._pageIndex=Math.max(o||0,0),this._changeDetectorRef.markForCheck()}get length(){return this._length}set length(o){this._length=o||0,this._changeDetectorRef.markForCheck()}get pageSize(){return this._pageSize}set pageSize(o){this._pageSize=Math.max(o||0,0),this._updateDisplayedPageSizeOptions()}get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(o){this._pageSizeOptions=(o||[]).map(l=>O(l,0)),this._updateDisplayedPageSizeOptions()}constructor(o,l,i){if(this._intl=o,this._changeDetectorRef=l,this._pageSizeLabelId=`mat-paginator-page-size-label-${me++}`,this._isInitialized=!1,this._initializedStream=new W(1),this._pageIndex=0,this._length=0,this._pageSizeOptions=[],this.hidePageSize=!1,this.showFirstLastButtons=!1,this.selectConfig={},this.disabled=!1,this.page=new X,this.initialized=this._initializedStream,this._intlChanges=o.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),i){let{pageSize:m,pageSizeOptions:_,hidePageSize:D,showFirstLastButtons:U}=i;m!=null&&(this._pageSize=m),_!=null&&(this._pageSizeOptions=_),D!=null&&(this.hidePageSize=D),U!=null&&(this.showFirstLastButtons=U)}this._formFieldAppearance=i?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){if(!this.hasNextPage())return;let o=this.pageIndex;this.pageIndex=this.pageIndex+1,this._emitPageEvent(o)}previousPage(){if(!this.hasPreviousPage())return;let o=this.pageIndex;this.pageIndex=this.pageIndex-1,this._emitPageEvent(o)}firstPage(){if(!this.hasPreviousPage())return;let o=this.pageIndex;this.pageIndex=0,this._emitPageEvent(o)}lastPage(){if(!this.hasNextPage())return;let o=this.pageIndex;this.pageIndex=this.getNumberOfPages()-1,this._emitPageEvent(o)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let o=this.getNumberOfPages()-1;return this.pageIndex<o&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(o){let l=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(l/o)||0,this.pageSize=o,this._emitPageEvent(i)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:de),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((o,l)=>o-l),this._changeDetectorRef.markForCheck())}_emitPageEvent(o){this.page.emit({previousPageIndex:o,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}};e.\u0275fac=function(l){return new(l||e)(C(G),C(et),C(ce,8))},e.\u0275cmp=I({type:e,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[S.HasDecoratorInputTransform,"pageIndex","pageIndex",O],length:[S.HasDecoratorInputTransform,"length","length",O],pageSize:[S.HasDecoratorInputTransform,"pageSize","pageSize",O],pageSizeOptions:"pageSizeOptions",hidePageSize:[S.HasDecoratorInputTransform,"hidePageSize","hidePageSize",E],showFirstLastButtons:[S.HasDecoratorInputTransform,"showFirstLastButtons","showFirstLastButtons",E],selectConfig:"selectConfig",disabled:[S.HasDecoratorInputTransform,"disabled","disabled",E]},outputs:{page:"page"},exportAs:["matPaginator"],standalone:!0,features:[tt,M],decls:14,vars:14,consts:[[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-live","polite",1,"mat-mdc-paginator-range-label"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],[1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(l,i){l&1&&(r(0,"div",0)(1,"div",1),g(2,ne,5,4,"div",2),r(3,"div",3)(4,"div",4),s(5),a(),g(6,oe,3,5,"button",5),r(7,"button",6),u("click",function(){return i.previousPage()}),A(),r(8,"svg",7),v(9,"path",8),a()(),at(),r(10,"button",9),u("click",function(){return i.nextPage()}),A(),r(11,"svg",7),v(12,"path",10),a()(),g(13,re,3,5,"button",11),a()()()),l&2&&(d(2),f(2,i.hidePageSize?-1:2),d(3),c(" ",i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length)," "),d(),f(6,i.showFirstLastButtons?6:-1),d(),p("matTooltip",i._intl.previousPageLabel)("matTooltipDisabled",i._previousButtonsDisabled())("matTooltipPosition","above")("disabled",i._previousButtonsDisabled()),P("aria-label",i._intl.previousPageLabel),d(3),p("matTooltip",i._intl.nextPageLabel)("matTooltipDisabled",i._nextButtonsDisabled())("matTooltipPosition","above")("disabled",i._nextButtonsDisabled()),P("aria-label",i._intl.nextPageLabel),d(3),f(13,i.showFirstLastButtons?13:-1))},dependencies:[j,jt,ft,Rt,$t],styles:[".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color);background-color:var(--mat-paginator-container-background-color);font-family:var(--mat-paginator-container-text-font);line-height:var(--mat-paginator-container-text-line-height);font-size:var(--mat-paginator-container-text-size);font-weight:var(--mat-paginator-container-text-weight);letter-spacing:var(--mat-paginator-container-text-tracking);--mat-form-field-container-height:var(--mat-paginator-form-field-container-height);--mat-form-field-container-vertical-padding:var(--mat-paginator-form-field-container-vertical-padding)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size)}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color)}.mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color)}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon,.cdk-high-contrast-active .mat-mdc-paginator-icon{fill:currentColor;fill:CanvasText}.cdk-high-contrast-active .mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}"],encapsulation:2,changeDetection:0});let t=e;return t})(),Kt=(()=>{let e=class e{};e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=H({type:e}),e.\u0275inj=k({providers:[le],imports:[y,Yt,Gt,z]});let t=e;return t})();var Wt=(()=>{let e=class e{constructor(o,l){this._data=o,this.elementRef=l,this.data=this._data}close(){this.elementRef.close()}};e.\u0275fac=function(l){return new(l||e)(C(Ot),C(Et))},e.\u0275cmp=I({type:e,selectors:[["app-priv-anac-dialog"]],standalone:!0,features:[M],decls:57,vars:14,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-raised-button","","color","primary",3,"click"]],template:function(l,i){l&1&&(r(0,"h2",0),s(1),a(),r(2,"div",1)(3,"p")(4,"strong"),s(5,"Nome:"),a(),s(6),a(),r(7,"p")(8,"strong"),s(9,"Munic\xEDpio:"),a(),s(10),a(),r(11,"p")(12,"strong"),s(13,"UF:"),a(),s(14),a(),r(15,"p")(16,"strong"),s(17,"Latitude:"),a(),s(18),a(),r(19,"p")(20,"strong"),s(21,"Longitude:"),a(),s(22),a(),r(23,"p")(24,"strong"),s(25,"Altitude:"),a(),s(26),a(),r(27,"p")(28,"strong"),s(29,"Opera\xE7\xE3o Diurna:"),a(),s(30),a(),r(31,"p")(32,"strong"),s(33,"Opera\xE7\xE3o Noturna:"),a(),s(34),a(),r(35,"p")(36,"strong"),s(37,"Designa\xE7\xE3o:"),a(),s(38),a(),r(39,"p")(40,"strong"),s(41,"Comprimento:"),a(),s(42),a(),r(43,"p")(44,"strong"),s(45,"Largura:"),a(),s(46),a(),r(47,"p")(48,"strong"),s(49,"Resist\xEAncia:"),a(),s(50),a(),r(51,"p")(52,"strong"),s(53,"Superf\xEDcie:"),a(),s(54),a()(),r(55,"button",2),u("click",function(){return i.close()}),s(56,"Fechar"),a()),l&2&&(d(),c("",i.data.CodigoOACI," "),d(5),c(" ",i.data.Nome,""),d(4),c(" ",i.data.Municipio,""),d(4),c(" ",i.data.UF,""),d(4),c(" ",i.data.Latitude,""),d(4),c(" ",i.data.Longitude,""),d(4),c(" ",i.data.Altitude*3.28," (ft)p\xE9s"),d(4),c(" ",i.data.OperacaoDiurna,""),d(4),c(" ",i.data.OperacaoNoturna,""),d(4),c(" ",i.data.Designacao1,""),d(4),c(" ",i.data.Comprimento1," metros"),d(4),c(" ",i.data.Largura1," metros"),d(4),c(" ",i.data.Resistencia1,""),d(4),c(" ",i.data.Superficie1,""))},dependencies:[ht,Ft,kt,y,B,Y]});let t=e;return t})();var Zt=(()=>{let e=class e{constructor(){}getAerodromesData(){return new Promise(o=>{let l=qt;setTimeout(()=>{o(l)},1e3)})}};e.\u0275fac=function(l){return new(l||e)},e.\u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var ge=()=>[15,25,50,100];function ue(t,e){t&1&&(r(0,"h2"),s(1,"Consulta de Aer\xF3dromos Data Base ANAC"),a())}function _e(t,e){t&1&&(r(0,"th",16),s(1," Cod "),a())}function fe(t,e){if(t&1){let n=w();r(0,"td",17)(1,"button",18),u("click",function(){let l=b(n).$implicit,i=h(2);return x(i.openDialog(l))}),s(2),a()()}if(t&2){let n=e.$implicit;d(2),c(" ",n.CodigoOACI," ")}}function ve(t,e){t&1&&(r(0,"th",16),s(1," Nome "),a())}function Se(t,e){if(t&1&&(r(0,"td",17),s(1),a()),t&2){let n=e.$implicit;d(),c(" ",n.Nome," ")}}function be(t,e){t&1&&(r(0,"th",16),s(1," Munic\xEDpio "),a())}function xe(t,e){if(t&1&&(r(0,"td",17),s(1),a()),t&2){let n=e.$implicit;d(),c(" ",n.Municipio," ")}}function Ce(t,e){t&1&&v(0,"tr",19)}function we(t,e){t&1&&v(0,"tr",20)}function De(t,e){if(t&1&&(r(0,"tr",21)(1,"td",22),s(2),a()()),t&2){h(2);let n=ct(6);d(2),c('Nenhum dado encontrado para: "',n.value,'"')}}function Ie(t,e){if(t&1&&(r(0,"table",6),N(1,8),g(2,_e,2,0,"th",9)(3,fe,3,1,"td",10),V(),N(4,11),g(5,ve,2,0,"th",9)(6,Se,2,1,"td",10),V(),N(7,12),g(8,be,2,0,"th",9)(9,xe,2,1,"td",10),V(),g(10,Ce,1,0,"tr",13)(11,we,1,0,"tr",14)(12,De,3,1,"tr",15),a()),t&2){let n=h();p("dataSource",n.dataSource),d(10),p("matHeaderRowDef",n.displayedColumns),d(),p("matRowDefColumns",n.displayedColumns)}}function Pe(t,e){t&1&&(r(0,"h2"),s(1,"Carregando dados..."),a())}var Fi=(()=>{var e,n;let o=class o{constructor(){Q(this,e,void 0);Q(this,n,void 0);K(this,e,J(zt)),this.displayedColumns=["cod","name","mun"],K(this,n,J(Zt))}ngOnInit(){this.loadData()}loadData(){q(this,n).getAerodromesData().then(i=>{this.dataSource=new At(i),this.dataSource.paginator=this.paginator})}ngAfterViewInit(){this.dataSource.paginator=this.paginator}openDialog(i){q(this,e).open(Wt,{data:i,height:"auto",width:"500px"})}applyFilter(i){let m=i.target.value;this.dataSource.filter=m.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}};e=new WeakMap,n=new WeakMap,o.\u0275fac=function(m){return new(m||o)},o.\u0275cmp=I({type:o,selectors:[["app-priv-anac"]],viewQuery:function(m,_){if(m&1&&st(z,5),m&2){let D;lt(D=dt())&&(_.paginator=D.first)}},standalone:!0,features:[M],decls:13,vars:5,consts:[["input",""],["id","top"],["value","primary","appearance","outline"],["matInput","","oninput","this.value = this.value.toUpperCase()","placeholder","Ex. Bras\xEDlia",3,"keyup"],["matSuffix",""],[1,"mat-elevation-z8","table-container"],["mat-table","",3,"dataSource"],["aria-label","Select page of users",3,"pageSizeOptions","showFirstLastButtons"],["matColumnDef","cod"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","mun"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["mat-header-cell",""],["mat-cell",""],["mat-button","",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(m,_){if(m&1){let D=w();r(0,"section",1),g(1,ue,2,0,"h2"),r(2,"mat-form-field",2)(3,"mat-label"),s(4,"Search"),a(),r(5,"input",3,0),u("keyup",function(Jt){return b(D),x(_.applyFilter(Jt))}),a(),r(7,"mat-icon",4),s(8,"search"),a()(),r(9,"div",5),g(10,Ie,13,3,"table",6)(11,Pe,2,0),v(12,"mat-paginator",7),a()()}m&2&&(d(),f(1,_.dataSource?1:-1),d(9),f(10,_.dataSource?10:11),d(2),p("pageSizeOptions",pt(4,ge))("showFirstLastButtons",!0))},dependencies:[Nt,j,Lt,Ht,Bt,Vt,yt,vt,bt,Dt,xt,St,It,Ct,wt,Pt,Mt,Tt,Qt,Kt,z,Y,Ut,y,B],styles:["[_nghost-%COMP%]   section[_ngcontent-%COMP%]{margin-top:25px}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{display:flex;justify-content:center}[_nghost-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:auto}[_nghost-%COMP%]   td[_ngcontent-%COMP%], [_nghost-%COMP%]   th[_ngcontent-%COMP%]{width:25%}[_nghost-%COMP%]   button[_ngcontent-%COMP%]{border:1px solid #ccc}[_nghost-%COMP%]   .mat-column-select[_ngcontent-%COMP%]{overflow:initial}[_nghost-%COMP%]   .table-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:300px}"]});let t=o;return t})();export{Fi as PrivAnacComponent};