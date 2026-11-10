import{R as ri,S as Zc,a as $c,c as Ct,i as zt,n as wt,r as At,t as Mt}from"./main-GLH32QCH.js";import{i as Re,n as Ft,o as z,r as Qt,t as Be}from"./chunk-B7QSi43Q.js";import{a as Qt$1,c as Xt,d as eo,f as qt,i as Kt$1,l as Yt$1,n as Gt$1,o as Wt$1,p as to,r as Jt$1,s as Xe,t as $t,u as Zt$1}from"./chunk-DPDupzGO.js";import{a as Uo,c as en,d as mr,h as or,i as Me,o as an,r as Lr,s as ea,t as $a,u as ir,v as ve}from"./chunk-Dw8mYDKG.js";import"./chunk-CPgCDXzX.js";import{$n as g,A as Eb,Ai as yy,Ar as nd,B as Go,Cr as ld,Fi as zs,Fn as cd,G as Ib,Hr as pd,I as F,Ir as oS,J as Jm,Jt as V,Kn as ey,Lt as Rp,Mn as ca,P as Et,Q as KS,T as Dp,Tt as PH,Ut as Tb,Vr as pb,Xn as fd,Y as Jr,Yn as fb,Zr as re$1,_ as C,an as Xm,ar as hb,d as Ae,j as Ee,jr as ne$1,ln as Yb,o as A$1,or as hd,ot as Lm,pi as ub,rr as gb,tn as Vu,tt as Kt$2,u as Ad,un as Yo,v as Cp,wn as ad,xt as Op}from"./chunk-f5mEzsRj.js";var Gt=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Ae({type:t});static ɵinj=Ee({imports:[Ad]})}return t})();var Wt=(()=>{class t{changes=new F;itemsPerPageLabel=`Items per page:`;nextPageLabel=`Next page`;previousPageLabel=`Previous page`;firstPageLabel=`First page`;lastPageLabel=`Last page`;getRangeLabel=(e,i,l)=>{if(l==0||i==0)return`0 of ${l}`;l=Math.max(l,0);let m=e*i,x=m<l?Math.min(m+i,l):m+i;return`${m+1} \u2013 ${x} of ${l}`};static ɵfac=function(i){return new(i||t)};static ɵprov=re$1({token:t,factory:t.ɵfac})}return t})();var Kt=50;var Jt=new C(`MAT_PAGINATOR_DEFAULT_OPTIONS`);var A=(()=>{class t{_intl=g(Wt);_changeDetectorRef=g(Et);_formFieldAppearance;_pageSizeLabelId=g(Ct).getId(`mat-paginator-page-size-label-`);_intlChanges;_isInitialized=!1;_initializedStream=new Jr(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(i=>PH(i,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new ne$1;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,i=g(Jt,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),i){let{pageSize:l,pageSizeOptions:m,hidePageSize:x,showFirstLastButtons:k}=i;l!=null&&(this._pageSize=l),m!=null&&(this._pageSizeOptions=m),x!=null&&(this.hidePageSize=x),k!=null&&(this.showFirstLastButtons=k)}this._formFieldAppearance=i?.formFieldAppearance||`outline`}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let i=this.pageIndex*this.pageSize,l=this.pageIndex;this.pageIndex=Math.floor(i/e)||0,this.pageSize=e,this._emitPageEvent(l)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:Kt),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,i)=>e-i),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let i=this.pageIndex;e!==i&&(this.pageIndex=e,this._emitPageEvent(i))}_buttonClicked(e,i){i||this._navigate(e)}static ɵfac=function(i){return new(i||t)};static ɵcmp=(function(){function e(c,v){if(c&1&&(zs(0,`mat-option`,17),Yb(1),ad()),c&2){let a=v.$implicit;Jm(`value`,a),Vu(),hd(` `,a,` `)}}function i(c,v){if(c&1){let a=Eb();zs(0,`mat-form-field`,14)(1,`mat-select`,16,0),Kt$2(`selectionChange`,function(f){Dp(a);let qt=Ib(2);return Cp(qt._changePageSize(f.value))}),hb(3,e,2,2,`mat-option`,17,pb),ad(),zs(5,`div`,18),Kt$2(`click`,function(){Dp(a);let f=Tb(2);return Cp(f.open())}),ad()()}if(c&2){let a=Ib(2);Jm(`appearance`,a._formFieldAppearance)(`color`,a.color),Vu(),Jm(`value`,a.pageSize)(`disabled`,a.disabled),Xm(`aria-labelledby`,a._pageSizeLabelId),Jm(`panelClass`,a.selectConfig.panelClass||``)(`disableOptionCentering`,a.selectConfig.disableOptionCentering),Vu(2),gb(a._displayedPageSizeOptions)}}function l(c,v){if(c&1&&(zs(0,`div`,15),Yb(1),ad()),c&2){let a=Ib(2);Vu(),yy(a.pageSize)}}function m(c,v){if(c&1&&(zs(0,`div`,3)(1,`div`,13),Yb(2),ad(),ub(3,i,6,7,`mat-form-field`,14),ub(4,l,2,1,`div`,15),ad()),c&2){let a=Ib();Vu(),Go(`id`,a._pageSizeLabelId),Vu(),hd(` `,a._intl.itemsPerPageLabel,` `),Vu(),fb(a._displayedPageSizeOptions.length>1?3:-1),Vu(),fb(a._displayedPageSizeOptions.length<=1?4:-1)}}function x(c,v){if(c&1){let a=Eb();zs(0,`button`,19),Kt$2(`click`,function(){Dp(a);let f=Ib();return Cp(f._buttonClicked(0,f._previousButtonsDisabled()))}),Rp(),zs(1,`svg`,8),ey(2,`path`,20),ad()()}if(c&2){let a=Ib();Jm(`matTooltip`,a._intl.firstPageLabel)(`matTooltipDisabled`,a._previousButtonsDisabled())(`disabled`,a._previousButtonsDisabled())(`tabindex`,a._previousButtonsDisabled()?-1:null),Go(`aria-label`,a._intl.firstPageLabel)}}function k(c,v){if(c&1){let a=Eb();zs(0,`button`,21),Kt$2(`click`,function(){Dp(a);let f=Ib();return Cp(f._buttonClicked(f.getNumberOfPages()-1,f._nextButtonsDisabled()))}),Rp(),zs(1,`svg`,8),ey(2,`path`,22),ad()()}if(c&2){let a=Ib();Jm(`matTooltip`,a._intl.lastPageLabel)(`matTooltipDisabled`,a._nextButtonsDisabled())(`disabled`,a._nextButtonsDisabled())(`tabindex`,a._nextButtonsDisabled()?-1:null),Go(`aria-label`,a._intl.lastPageLabel)}}return nd({type:t,selectors:[[`mat-paginator`]],hostAttrs:[`role`,`group`,1,`mat-mdc-paginator`],inputs:{color:`color`,pageIndex:[2,`pageIndex`,`pageIndex`,PH],length:[2,`length`,`length`,PH],pageSize:[2,`pageSize`,`pageSize`,PH],pageSizeOptions:`pageSizeOptions`,hidePageSize:[2,`hidePageSize`,`hidePageSize`,Yo],showFirstLastButtons:[2,`showFirstLastButtons`,`showFirstLastButtons`,Yo],selectConfig:`selectConfig`,disabled:[2,`disabled`,`disabled`,Yo]},outputs:{page:`page`},exportAs:[`matPaginator`],decls:14,vars:14,consts:[[`selectRef`,``],[1,`mat-mdc-paginator-outer-container`],[1,`mat-mdc-paginator-container`],[1,`mat-mdc-paginator-page-size`],[1,`mat-mdc-paginator-range-actions`],[`aria-atomic`,`true`,`aria-live`,`polite`,`role`,`status`,1,`mat-mdc-paginator-range-label`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-previous`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-paginator-icon`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-next`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`aria-hidden`,`true`,1,`mat-mdc-paginator-page-size-label`],[1,`mat-mdc-paginator-page-size-select`,3,`appearance`,`color`],[1,`mat-mdc-paginator-page-size-value`],[`hideSingleSelectionIndicator`,``,3,`selectionChange`,`value`,`disabled`,`aria-labelledby`,`panelClass`,`disableOptionCentering`],[3,`value`],[1,`mat-mdc-paginator-touch-target`,3,`click`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z`]],template:function(v,a){v&1&&(zs(0,`div`,1)(1,`div`,2),ub(2,m,5,4,`div`,3),zs(3,`div`,4)(4,`div`,5),Yb(5),ad(),ub(6,x,3,5,`button`,6),zs(7,`button`,7),Kt$2(`click`,function(){return a._buttonClicked(a.pageIndex-1,a._previousButtonsDisabled())}),Rp(),zs(8,`svg`,8),ey(9,`path`,9),ad()(),Op(),zs(10,`button`,10),Kt$2(`click`,function(){return a._buttonClicked(a.pageIndex+1,a._nextButtonsDisabled())}),Rp(),zs(11,`svg`,8),ey(12,`path`,11),ad()(),ub(13,k,3,5,`button`,12),ad()()()),v&2&&(Vu(2),fb(a.hidePageSize?-1:2),Vu(3),hd(` `,a._intl.getRangeLabel(a.pageIndex,a.pageSize,a.length),` `),Vu(),fb(a.showFirstLastButtons?6:-1),Vu(),Jm(`matTooltip`,a._intl.previousPageLabel)(`matTooltipDisabled`,a._previousButtonsDisabled())(`disabled`,a._previousButtonsDisabled())(`tabindex`,a._previousButtonsDisabled()?-1:null),Go(`aria-label`,a._intl.previousPageLabel),Vu(3),Jm(`matTooltip`,a._intl.nextPageLabel)(`matTooltipDisabled`,a._nextButtonsDisabled())(`disabled`,a._nextButtonsDisabled())(`tabindex`,a._nextButtonsDisabled()?-1:null),Go(`aria-label`,a._intl.nextPageLabel),Vu(3),fb(a.showFirstLastButtons?13:-1))},dependencies:[$a,or,ve,ri,At],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-paginator-container-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-paginator-container-background-color, var(--%NS%mat-sys-surface));
  font-family: var(--%NS%mat-paginator-container-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-paginator-container-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-paginator-container-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-paginator-container-text-weight, var(--%NS%mat-sys-body-small-weight));
  letter-spacing: var(--%NS%mat-paginator-container-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  --%NS%mat-form-field-container-height: var(--%NS%mat-paginator-form-field-container-height, 40px);
  --%NS%mat-form-field-container-vertical-padding: var(--%NS%mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--%NS%mat-paginator-select-trigger-text-size, var(--%NS%mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--%NS%mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--%NS%mat-paginator-enabled-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--%NS%mat-paginator-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--%NS%mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
  height: var(--%NS%mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2})})()}return t})();var Ut=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Ae({type:t});static ɵinj=Ee({imports:[$c,ir,zt,A]})}return t})();var Yt=(()=>{class t{constructor(e,i){this._data=e,this.elementRef=i,this.data=this._data}close(){this.elementRef.close()}static{this.ɵfac=function(i){return new(i||t)(A$1(Qt),A$1(z))}}static{this.ɵcmp=nd({type:t,selectors:[[`app-priv-anac-dialog`]],decls:57,vars:14,consts:[[`mat-dialog-title`,``],[`mat-dialog-content`,``],[`mat-raised-button`,``,`color`,`primary`,3,`click`]],template:function(i,l){i&1&&(zs(0,`h2`,0),Yb(1),ad(),zs(2,`div`,1)(3,`p`)(4,`strong`),Yb(5,`Nome:`),ad(),Yb(6),ad(),zs(7,`p`)(8,`strong`),Yb(9,`Município:`),ad(),Yb(10),ad(),zs(11,`p`)(12,`strong`),Yb(13,`UF:`),ad(),Yb(14),ad(),zs(15,`p`)(16,`strong`),Yb(17,`Latitude:`),ad(),Yb(18),ad(),zs(19,`p`)(20,`strong`),Yb(21,`Longitude:`),ad(),Yb(22),ad(),zs(23,`p`)(24,`strong`),Yb(25,`Altitude:`),ad(),Yb(26),ad(),zs(27,`p`)(28,`strong`),Yb(29,`Operação Diurna:`),ad(),Yb(30),ad(),zs(31,`p`)(32,`strong`),Yb(33,`Operação Noturna:`),ad(),Yb(34),ad(),zs(35,`p`)(36,`strong`),Yb(37,`Designação:`),ad(),Yb(38),ad(),zs(39,`p`)(40,`strong`),Yb(41,`Comprimento:`),ad(),Yb(42),ad(),zs(43,`p`)(44,`strong`),Yb(45,`Largura:`),ad(),Yb(46),ad(),zs(47,`p`)(48,`strong`),Yb(49,`Resistência:`),ad(),Yb(50),ad(),zs(51,`p`)(52,`strong`),Yb(53,`Superfície:`),ad(),Yb(54),ad()(),zs(55,`button`,2),Kt$2(`click`,function(){return l.close()}),Yb(56,`Fechar`),ad()),i&2&&(Vu(),hd(``,l.data.CodigoOACI,` `),Vu(5),hd(` `,l.data.Nome),Vu(4),hd(` `,l.data.Municipio),Vu(4),hd(` `,l.data.UF),Vu(4),hd(` `,l.data.Latitude),Vu(4),hd(` `,l.data.Longitude),Vu(4),hd(` `,(l.data.Altitude??0).toFixed(2),` (ft)pés`),Vu(4),hd(` `,l.data.OperacaoDiurna),Vu(4),hd(` `,l.data.OperacaoNoturna),Vu(4),hd(` `,l.data.Designacao1),Vu(4),hd(` `,l.data.Comprimento1,` metros`),Vu(4),hd(` `,l.data.Largura1,` metros`),Vu(4),hd(` `,l.data.Resistencia1),Vu(4),hd(` `,l.data.Superficie1))},dependencies:[KS,Re,Be,$c,Zc,Mt],encapsulation:2})}}return t})();var Zt=(()=>{class t{constructor(){}getAerodromesData(){return new Promise(e=>{let i=mr;setTimeout(()=>{e(i)},1e3)})}static{this.ɵfac=function(i){return new(i||t)}}static{this.ɵprov=V({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();var ee=()=>[15,25,50,100];function ae(t,p){t&1&&(zs(0,`h2`),Yb(1,`Consulta de Aeródromos Data Base ANAC`),ad())}function ne(t,p){t&1&&(zs(0,`th`,17),Yb(1,` Cod `),ad())}function ie(t,p){if(t&1){let e=Eb();zs(0,`td`,18)(1,`button`,19),Kt$2(`click`,function(){let l=Dp(e).$implicit,m=Ib(2);return Cp(m.openDialog(l))}),Yb(2),ad()()}if(t&2){let e=p.$implicit;Vu(2),hd(` `,e.CodigoOACI,` `)}}function oe(t,p){t&1&&(zs(0,`th`,17),Yb(1,` Nome `),ad())}function re(t,p){if(t&1&&(zs(0,`td`,18),Yb(1),ad()),t&2){let e=p.$implicit;Vu(),hd(` `,e.Nome,` `)}}function se(t,p){t&1&&(zs(0,`th`,17),Yb(1,` Município `),ad())}function le(t,p){if(t&1&&(zs(0,`td`,18),Yb(1),ad()),t&2){let e=p.$implicit;Vu(),hd(` `,e.Municipio,` `)}}function de(t,p){t&1&&ey(0,`tr`,20)}function ce(t,p){t&1&&ey(0,`tr`,21)}function me(t,p){if(t&1&&(zs(0,`tr`,22)(1,`td`,23),Yb(2),ad()()),t&2){Ib(2);let e=Tb(6);Vu(2),hd(`Nenhum dado encontrado para: "`,e.value,`"`)}}function pe(t,p){if(t&1&&(zs(0,`table`,7),cd(1,9),Lm(2,ne,2,0,`th`,10)(3,ie,3,1,`td`,11),ld(),cd(4,12),Lm(5,oe,2,0,`th`,10)(6,re,2,1,`td`,11),ld(),cd(7,13),Lm(8,se,2,0,`th`,10)(9,le,2,1,`td`,11),ld(),Lm(10,de,1,0,`tr`,14)(11,ce,1,0,`tr`,15)(12,me,3,1,`tr`,16),ad()),t&2){let e=Ib();Jm(`dataSource`,e.dataSource),Vu(10),Jm(`matHeaderRowDef`,e.displayedColumns),Vu(),Jm(`matRowDefColumns`,e.displayedColumns)}}function ge(t,p){t&1&&(zs(0,`h2`),Yb(1,`Carregando dados...`),ad())}var pa=(()=>{class t{constructor(){this.#t=g(Ft),this.displayedColumns=[`cod`,`name`,`mun`],this.#e=g(Zt),this.lastUpdated=Lr.updated}#t;#e;ngOnInit(){this.loadData()}loadData(){this.#e.getAerodromesData().then(e=>{this.dataSource=new Xe(e),this.dataSource.paginator=this.paginator})}ngAfterViewInit(){this.dataSource.paginator=this.paginator}openDialog(e){this.#t.open(Yt,{data:e,height:`auto`,width:`500px`})}applyFilter(e){let i=e.target.value;this.dataSource.filter=i.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}static{this.ɵfac=function(i){return new(i||t)}}static{this.ɵcmp=nd({type:t,selectors:[[`app-priv-anac`]],viewQuery:function(i,l){if(i&1&&ca(A,5),i&2){let m;fd(m=pd())&&(l.paginator=m.first)}},decls:16,vars:6,consts:[[`input`,``],[`id`,`top`],[`value`,`primary`,`appearance`,`outline`],[`matInput`,``,`oninput`,`this.value = this.value.toUpperCase()`,`placeholder`,`Ex. Brasília`,3,`keyup`],[`matSuffix`,``],[`id`,`update`],[1,`mat-elevation-z8`,`table-container`],[`mat-table`,``,3,`dataSource`],[`aria-label`,`Select page of users`,3,`pageSizeOptions`,`showFirstLastButtons`],[`matColumnDef`,`cod`],[`mat-header-cell`,``,4,`matHeaderCellDef`],[`mat-cell`,``,4,`matCellDef`],[`matColumnDef`,`name`],[`matColumnDef`,`mun`],[`mat-header-row`,``,4,`matHeaderRowDef`],[`mat-row`,``,4,`matRowDef`,`matRowDefColumns`],[`class`,`mat-row`,4,`matNoDataRow`],[`mat-header-cell`,``],[`mat-cell`,``],[`mat-button`,``,3,`click`],[`mat-header-row`,``],[`mat-row`,``],[1,`mat-row`],[`colspan`,`4`,1,`mat-cell`]],template:function(i,l){i&1&&(zs(0,`section`,1),ub(1,ae,2,0,`h2`),zs(2,`mat-form-field`,2)(3,`mat-label`),Yb(4,`Search`),ad(),zs(5,`input`,3,0),Kt$2(`keyup`,function(x){return l.applyFilter(x)}),ad(),zs(7,`mat-icon`,4),Yb(8,`search`),ad()(),zs(9,`section`,5)(10,`strong`),Yb(11),ad()(),zs(12,`div`,6),ub(13,pe,13,3,`table`,7)(14,ge,2,0,`h2`),ey(15,`mat-paginator`,8),ad()()),i&2&&(Vu(),fb(l.dataSource?1:-1),Vu(10),hd(`Atualização: `,l.lastUpdated),Vu(2),fb(l.dataSource?13:14),Vu(2),Jm(`pageSizeOptions`,oS(5,ee))(`showFirstLastButtons`,!0))},dependencies:[Me,$a,ea,Uo,an,en,to,Wt$1,$t,Gt$1,Kt$1,Qt$1,Yt$1,qt,Xt,Zt$1,Jt$1,eo,Gt,Ut,A,Mt,wt,$c,Zc],styles:[`[_nghost-%COMP%]   section[_ngcontent-%COMP%]{margin-top:25px}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{display:flex;justify-content:center}[_nghost-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:auto}[_nghost-%COMP%]   td[_ngcontent-%COMP%], [_nghost-%COMP%]   th[_ngcontent-%COMP%]{width:25%}[_nghost-%COMP%]   button[_ngcontent-%COMP%]{border:1px solid #ccc}[_nghost-%COMP%]   .mat-column-select[_ngcontent-%COMP%]{overflow:initial}[_nghost-%COMP%]   .table-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:300px}[_nghost-%COMP%]   #update[_ngcontent-%COMP%]{display:flex;justify-content:right;margin-top:0}`]})}}return t})();export{pa as PrivAnacComponent};