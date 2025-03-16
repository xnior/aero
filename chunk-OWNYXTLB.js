import{a as Rt,b as Lt}from"./chunk-L2BMFRV5.js";import{a as Ct,b as xt,c as Mt,d as Dt,e as Pt}from"./chunk-V5CF6I27.js";import{a as dt,b as ct,c as mt,d as pt,e as ut,f as gt,g as ft,h as ht,i as _t,j as vt,k as bt,l as yt,m as St}from"./chunk-2L6FXFKZ.js";import{a as It,b as Et,d as H,e as Ot,f as zt,g as At,h as Tt,i as kt,j as Bt,k as Nt}from"./chunk-KDVFQD7R.js";import{d as Ft,e as j}from"./chunk-S3W4FAUQ.js";import{m as V,n as wt,o as D}from"./chunk-JQ2OWYAX.js";import"./chunk-OYB6JYPQ.js";import{$a as R,Ab as J,Ad as st,Bb as X,Cb as o,Cc as ot,Db as a,Eb as h,Fb as F,Gb as B,Ib as C,Id as lt,Kb as u,Lb as g,Pb as tt,Qb as et,Rb as it,Ub as N,Vb as r,Wa as s,Wb as at,X as x,Xb as l,Y as A,_ as $,ba as _,ca as T,cc as nt,da as k,fb as y,gb as L,ja as v,jc as q,k as z,ka as b,la as M,lb as m,m as U,ma as K,mc as w,nc as I,ta as Q,tb as S,ub as p,yb as f,zb as W,zd as rt}from"./chunk-TJSG7SL3.js";var Z=(()=>{class e{changes=new z;static \u0275fac=function(n){return new(n||e)};static \u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Gt(e){return e||new Z}var Ut={provide:Z,deps:[[new T,new k,Z]],useFactory:Gt};var Vt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=L({type:e});static \u0275inj=A({providers:[Ut],imports:[st]})}return e})();function $t(e,d){if(e&1&&(o(0,"mat-option",17),r(1),a()),e&2){let t=d.$implicit;p("value",t),s(),l(" ",t," ")}}function Qt(e,d){if(e&1){let t=C();o(0,"mat-form-field",14)(1,"mat-select",16,0),u("selectionChange",function(i){v(t);let c=g(2);return b(c._changePageSize(i.value))}),J(3,$t,2,2,"mat-option",17,W),a(),o(5,"div",18),u("click",function(){v(t);let i=N(2);return b(i.open())}),a()()}if(e&2){let t=g(2);p("appearance",t._formFieldAppearance)("color",t.color),s(),p("value",t.pageSize)("disabled",t.disabled)("aria-labelledby",t._pageSizeLabelId)("panelClass",t.selectConfig.panelClass||"")("disableOptionCentering",t.selectConfig.disableOptionCentering),s(2),X(t._displayedPageSizeOptions)}}function qt(e,d){if(e&1&&(o(0,"div",15),r(1),a()),e&2){let t=g(2);s(),at(t.pageSize)}}function Zt(e,d){if(e&1&&(o(0,"div",3)(1,"div",13),r(2),a(),m(3,Qt,6,7,"mat-form-field",14)(4,qt,2,1,"div",15),a()),e&2){let t=g();s(),S("id",t._pageSizeLabelId),s(),l(" ",t._intl.itemsPerPageLabel," "),s(),f(t._displayedPageSizeOptions.length>1?3:-1),s(),f(t._displayedPageSizeOptions.length<=1?4:-1)}}function Kt(e,d){if(e&1){let t=C();o(0,"button",19),u("click",function(){v(t);let i=g();return b(i._buttonClicked(0,i._previousButtonsDisabled()))}),M(),o(1,"svg",8),h(2,"path",20),a()()}if(e&2){let t=g();p("matTooltip",t._intl.firstPageLabel)("matTooltipDisabled",t._previousButtonsDisabled())("disabled",t._previousButtonsDisabled()),S("aria-label",t._intl.firstPageLabel)}}function Wt(e,d){if(e&1){let t=C();o(0,"button",21),u("click",function(){v(t);let i=g();return b(i._buttonClicked(i.getNumberOfPages()-1,i._nextButtonsDisabled()))}),M(),o(1,"svg",8),h(2,"path",22),a()()}if(e&2){let t=g();p("matTooltip",t._intl.lastPageLabel)("matTooltipDisabled",t._nextButtonsDisabled())("disabled",t._nextButtonsDisabled()),S("aria-label",t._intl.lastPageLabel)}}var G=(()=>{class e{changes=new z;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(t,n,i)=>{if(i==0||n==0)return`0 of ${i}`;i=Math.max(i,0);let c=t*n,P=c<i?Math.min(c+n,i):c+n;return`${c+1} \u2013 ${P} of ${i}`};static \u0275fac=function(n){return new(n||e)};static \u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Jt(e){return e||new G}var Xt={provide:G,deps:[[new T,new k,G]],useFactory:Jt},te=50;var ee=new $("MAT_PAGINATOR_DEFAULT_OPTIONS"),E=(()=>{class e{_intl=_(G);_changeDetectorRef=_(q);_formFieldAppearance;_pageSizeLabelId=_(rt).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=!1;_initializedStream=new U(1);color;get pageIndex(){return this._pageIndex}set pageIndex(t){this._pageIndex=Math.max(t||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(t){this._length=t||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(t){this._pageSize=Math.max(t||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(t){this._pageSizeOptions=(t||[]).map(n=>I(n,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new Q;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let t=this._intl,n=_(ee,{optional:!0});if(this._intlChanges=t.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),n){let{pageSize:i,pageSizeOptions:c,hidePageSize:P,showFirstLastButtons:O}=n;i!=null&&(this._pageSize=i),c!=null&&(this._pageSizeOptions=c),P!=null&&(this.hidePageSize=P),O!=null&&(this.showFirstLastButtons=O)}this._formFieldAppearance=n?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let t=this.getNumberOfPages()-1;return this.pageIndex<t&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(t){let n=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(n/t)||0,this.pageSize=t,this._emitPageEvent(i)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:te),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((t,n)=>t-n),this._changeDetectorRef.markForCheck())}_emitPageEvent(t){this.page.emit({previousPageIndex:t,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(t){let n=this.pageIndex;t!==n&&(this.pageIndex=t,this._emitPageEvent(n))}_buttonClicked(t,n){n||this._navigate(t)}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=y({type:e,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",I],length:[2,"length","length",I],pageSize:[2,"pageSize","pageSize",I],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",w],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",w],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",w]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:12,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-live","polite",1,"mat-mdc-paginator-range-label"],["mat-icon-button","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled"],["mat-icon-button","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["mat-icon-button","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["mat-icon-button","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled"],[1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["mat-icon-button","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["mat-icon-button","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(n,i){n&1&&(o(0,"div",1)(1,"div",2),m(2,Zt,5,4,"div",3),o(3,"div",4)(4,"div",5),r(5),a(),m(6,Kt,3,4,"button",6),o(7,"button",7),u("click",function(){return i._buttonClicked(i.pageIndex-1,i._previousButtonsDisabled())}),M(),o(8,"svg",8),h(9,"path",9),a()(),K(),o(10,"button",10),u("click",function(){return i._buttonClicked(i.pageIndex+1,i._nextButtonsDisabled())}),M(),o(11,"svg",8),h(12,"path",11),a()(),m(13,Wt,3,4,"button",12),a()()()),n&2&&(s(2),f(i.hidePageSize?-1:2),s(3),l(" ",i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length)," "),s(),f(i.showFirstLastButtons?6:-1),s(),p("matTooltip",i._intl.previousPageLabel)("matTooltipDisabled",i._previousButtonsDisabled())("disabled",i._previousButtonsDisabled()),S("aria-label",i._intl.previousPageLabel),s(3),p("matTooltip",i._intl.nextPageLabel)("matTooltipDisabled",i._nextButtonsDisabled())("disabled",i._nextButtonsDisabled()),S("aria-label",i._intl.nextPageLabel),s(3),f(i.showFirstLastButtons?13:-1))},dependencies:[H,Tt,lt,wt,Rt],styles:[".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));background-color:var(--mat-paginator-container-background-color, var(--mat-sys-surface));font-family:var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));line-height:var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));font-size:var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));letter-spacing:var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));--mat-form-field-container-height:var(--mat-paginator-form-field-container-height, 40px);--mat-form-field-container-vertical-padding:var(--mat-paginator-form-field-container-vertical-padding, 8px)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size))}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size, 56px)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}@media(forced-colors: active){.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,.mat-mdc-paginator-icon{fill:currentColor}.mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}.mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled]{color:GrayText}}.mat-mdc-paginator-touch-target{display:var(--mat-paginator-touch-target-display, block);position:absolute;top:50%;left:50%;width:84px;height:48px;background-color:rgba(0,0,0,0);transform:translate(-50%, -50%);cursor:pointer}"],encapsulation:2,changeDetection:0})}return e})(),Ht=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=L({type:e});static \u0275inj=A({providers:[Xt],imports:[D,kt,Lt,E]})}return e})();var jt=(()=>{class e{constructor(t,n){this._data=t,this.elementRef=n,this.data=this._data}close(){this.elementRef.close()}static{this.\u0275fac=function(n){return new(n||e)(R(xt),R(Ct))}}static{this.\u0275cmp=y({type:e,selectors:[["app-priv-anac-dialog"]],decls:57,vars:14,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-raised-button","","color","primary",3,"click"]],template:function(n,i){n&1&&(o(0,"h2",0),r(1),a(),o(2,"div",1)(3,"p")(4,"strong"),r(5,"Nome:"),a(),r(6),a(),o(7,"p")(8,"strong"),r(9,"Munic\xEDpio:"),a(),r(10),a(),o(11,"p")(12,"strong"),r(13,"UF:"),a(),r(14),a(),o(15,"p")(16,"strong"),r(17,"Latitude:"),a(),r(18),a(),o(19,"p")(20,"strong"),r(21,"Longitude:"),a(),r(22),a(),o(23,"p")(24,"strong"),r(25,"Altitude:"),a(),r(26),a(),o(27,"p")(28,"strong"),r(29,"Opera\xE7\xE3o Diurna:"),a(),r(30),a(),o(31,"p")(32,"strong"),r(33,"Opera\xE7\xE3o Noturna:"),a(),r(34),a(),o(35,"p")(36,"strong"),r(37,"Designa\xE7\xE3o:"),a(),r(38),a(),o(39,"p")(40,"strong"),r(41,"Comprimento:"),a(),r(42),a(),o(43,"p")(44,"strong"),r(45,"Largura:"),a(),r(46),a(),o(47,"p")(48,"strong"),r(49,"Resist\xEAncia:"),a(),r(50),a(),o(51,"p")(52,"strong"),r(53,"Superf\xEDcie:"),a(),r(54),a()(),o(55,"button",2),u("click",function(){return i.close()}),r(56,"Fechar"),a()),n&2&&(s(),l("",i.data.CodigoOACI," "),s(5),l(" ",i.data.Nome,""),s(4),l(" ",i.data.Municipio,""),s(4),l(" ",i.data.UF,""),s(4),l(" ",i.data.Latitude,""),s(4),l(" ",i.data.Longitude,""),s(4),l(" ",i.data.Altitude*3.28," (ft)p\xE9s"),s(4),l(" ",i.data.OperacaoDiurna,""),s(4),l(" ",i.data.OperacaoNoturna,""),s(4),l(" ",i.data.Designacao1,""),s(4),l(" ",i.data.Comprimento1," metros"),s(4),l(" ",i.data.Largura1," metros"),s(4),l(" ",i.data.Resistencia1,""),s(4),l(" ",i.data.Superficie1,""))},dependencies:[ot,Dt,Pt,D,V,j],encapsulation:2})}}return e})();var Yt=(()=>{class e{constructor(){}getAerodromesData(){return new Promise(t=>{let n=Nt;setTimeout(()=>{t(n)},1e3)})}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var ne=()=>[15,25,50,100];function oe(e,d){e&1&&(o(0,"h2"),r(1,"Consulta de Aer\xF3dromos Data Base ANAC"),a())}function re(e,d){e&1&&(o(0,"th",17),r(1," Cod "),a())}function se(e,d){if(e&1){let t=C();o(0,"td",18)(1,"button",19),u("click",function(){let i=v(t).$implicit,c=g(2);return b(c.openDialog(i))}),r(2),a()()}if(e&2){let t=d.$implicit;s(2),l(" ",t.CodigoOACI," ")}}function le(e,d){e&1&&(o(0,"th",17),r(1," Nome "),a())}function de(e,d){if(e&1&&(o(0,"td",18),r(1),a()),e&2){let t=d.$implicit;s(),l(" ",t.Nome," ")}}function ce(e,d){e&1&&(o(0,"th",17),r(1," Munic\xEDpio "),a())}function me(e,d){if(e&1&&(o(0,"td",18),r(1),a()),e&2){let t=d.$implicit;s(),l(" ",t.Municipio," ")}}function pe(e,d){e&1&&h(0,"tr",20)}function ue(e,d){e&1&&h(0,"tr",21)}function ge(e,d){if(e&1&&(o(0,"tr",22)(1,"td",23),r(2),a()()),e&2){g(2);let t=N(6);s(2),l('Nenhum dado encontrado para: "',t.value,'"')}}function fe(e,d){if(e&1&&(o(0,"table",7),F(1,9),m(2,re,2,0,"th",10)(3,se,3,1,"td",11),B(),F(4,12),m(5,le,2,0,"th",10)(6,de,2,1,"td",11),B(),F(7,13),m(8,ce,2,0,"th",10)(9,me,2,1,"td",11),B(),m(10,pe,1,0,"tr",14)(11,ue,1,0,"tr",15)(12,ge,3,1,"tr",16),a()),e&2){let t=g();p("dataSource",t.dataSource),s(10),p("matHeaderRowDef",t.displayedColumns),s(),p("matRowDefColumns",t.displayedColumns)}}function he(e,d){e&1&&(o(0,"h2"),r(1,"Carregando dados..."),a())}var wi=(()=>{class e{constructor(){this.#t=_(Mt),this.displayedColumns=["cod","name","mun"],this.#e=_(Yt),this.lastUpdated=Bt.updated}#t;#e;ngOnInit(){this.loadData()}loadData(){this.#e.getAerodromesData().then(t=>{this.dataSource=new St(t),this.dataSource.paginator=this.paginator})}ngAfterViewInit(){this.dataSource.paginator=this.paginator}openDialog(t){this.#t.open(jt,{data:t,height:"auto",width:"500px"})}applyFilter(t){let n=t.target.value;this.dataSource.filter=n.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=y({type:e,selectors:[["app-priv-anac"]],viewQuery:function(n,i){if(n&1&&tt(E,5),n&2){let c;et(c=it())&&(i.paginator=c.first)}},decls:16,vars:6,consts:[["input",""],["id","top"],["value","primary","appearance","outline"],["matInput","","oninput","this.value = this.value.toUpperCase()","placeholder","Ex. Bras\xEDlia",3,"keyup"],["matSuffix",""],["id","update"],[1,"mat-elevation-z8","table-container"],["mat-table","",3,"dataSource"],["aria-label","Select page of users",3,"pageSizeOptions","showFirstLastButtons"],["matColumnDef","cod"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","mun"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["mat-header-cell",""],["mat-cell",""],["mat-button","",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(n,i){if(n&1){let c=C();o(0,"section",1),m(1,oe,2,0,"h2"),o(2,"mat-form-field",2)(3,"mat-label"),r(4,"Search"),a(),o(5,"input",3,0),u("keyup",function(O){return v(c),b(i.applyFilter(O))}),a(),o(7,"mat-icon",4),r(8,"search"),a()(),o(9,"section",5)(10,"strong"),r(11),a()(),o(12,"div",6),m(13,fe,13,3,"table",7)(14,he,2,0,"h2"),h(15,"mat-paginator",8),a()()}n&2&&(s(),f(i.dataSource?1:-1),s(10),l("Atualiza\xE7\xE3o: ",i.lastUpdated,""),s(2),f(i.dataSource?13:14),s(2),p("pageSizeOptions",nt(5,ne))("showFirstLastButtons",!0))},dependencies:[Ot,H,It,Et,At,zt,yt,dt,mt,ft,pt,ct,ht,ut,gt,_t,vt,bt,Vt,Ht,E,j,Ft,D,V],styles:["[_nghost-%COMP%]   section[_ngcontent-%COMP%]{margin-top:25px}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{display:flex;justify-content:center}[_nghost-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:auto}[_nghost-%COMP%]   td[_ngcontent-%COMP%], [_nghost-%COMP%]   th[_ngcontent-%COMP%]{width:25%}[_nghost-%COMP%]   button[_ngcontent-%COMP%]{border:1px solid #ccc}[_nghost-%COMP%]   .mat-column-select[_ngcontent-%COMP%]{overflow:initial}[_nghost-%COMP%]   .table-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:300px}[_nghost-%COMP%]   #update[_ngcontent-%COMP%]{display:flex;justify-content:right;margin-top:0}"]})}}return e})();export{wi as PrivAnacComponent};
