import{i as Za,j as Xa,k as Ha,l as Io,o as ca,p as pa,s as Y,t as Ga,u as q,v as fo,w as Uo}from"./chunk-JCCYXIRY.js";import{$b as X,Ab as L,B as ja,Ba as Aa,Bb as g,Bc as Oo,Bd as J,Ca as R,Cb as z,Cc as go,Cd as Ra,Dd as Na,E as w,Ea as T,Ec as Ca,F as aa,Fd as lo,Gb as ea,Gd as Fo,Hb as sa,Ib as V,Id as Do,Ja as io,Jb as C,Jd as Mo,K as qa,Kb as ia,Kd as Go,Lb as N,Lc as Pa,Ld as xa,Mb as W,N as $a,Nb as l,Ob as S,Pb as A,Pd as la,Qb as uo,Qd as Fa,Rb as co,Sb as ta,Sc as So,Tb as na,Tc as k,Td as Da,U as ao,Ub as ra,Uc as Ja,V as Va,Vc as Ao,W as Wa,Wd as Ma,X as M,Xa as O,Ya as c,_c as j,aa as ga,ac as ua,ba as b,da as F,dd as ba,fa as Ea,fb as to,fc as po,ga as E,hd as so,i as Qa,ib as Ka,k as wa,ka as oa,kd as mo,la as v,lb as s,ma as I,mb as no,mc as ma,md as va,n as P,nd as Co,q as ka,qc as H,qd as Po,rb as B,rc as Ba,rd as _a,sa as Sa,sb as f,sc as za,ta as h,tb as U,td as Ro,ua as K,va as oo,vb as ro,w as Ta,wb as m,wd as No,xc as Lo,ya as ha,za as eo}from"./chunk-3GHELKCJ.js";var Ya=class{constructor(i){this._box=i,this._destroyed=new P,this._resizeSubject=new P,this._elementObservables=new Map,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(r=>this._resizeSubject.next(r)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new wa(r=>{let a=this._resizeSubject.subscribe(r);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),a.unsubscribe(),this._elementObservables.delete(i)}}).pipe(aa(r=>r.some(a=>a.target===i)),ao({bufferSize:1,refCount:!0}),M(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},To=(()=>{let i=class i{constructor(){this._observers=new Map,this._ngZone=E(R),typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,a]of this._observers)a.destroy();this._observers.clear(),typeof ResizeObserver<"u"}observe(a,o){let e=o?.box||"content-box";return this._observers.has(e)||this._observers.set(e,new Ya(e)),this._observers.get(e).observe(a)}};i.\u0275fac=function(o){return new(o||i)},i.\u0275prov=ga({token:i,factory:i.\u0275fac,providedIn:"root"});let t=i;return t})();var $o=["notch"],ae=["matFormFieldNotchedOutline",""],oe=["*"],ee=["textField"],ie=["iconPrefixContainer"],te=["textPrefixContainer"],ne=["iconSuffixContainer"],re=["textSuffixContainer"],ue=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],ce=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function pe(t,i){t&1&&z(0,"span",21)}function de(t,i){if(t&1&&(L(0,"label",20),N(1,1),s(2,pe,1,0,"span",21),g()),t&2){let r=C(2);f("floating",r._shouldLabelFloat())("monitorResize",r._hasOutline())("id",r._labelId),B("for",r._control.disableAutomaticLabeling?null:r._control.id),O(2),m(!r.hideRequiredMarker&&r._control.required?2:-1)}}function Le(t,i){if(t&1&&s(0,de,3,5,"label",20),t&2){let r=C();m(r._hasFloatingLabel()?0:-1)}}function Oe(t,i){t&1&&z(0,"div",7)}function ge(t,i){}function Se(t,i){if(t&1&&s(0,ge,0,0,"ng-template",13),t&2){C(2);let r=ta(1);f("ngTemplateOutlet",r)}}function Ae(t,i){if(t&1&&(L(0,"div",9),s(1,Se,1,1,null,13),g()),t&2){let r=C();f("matFormFieldNotchedOutlineOpen",r._shouldLabelFloat()),O(),m(r._forceDisplayInfixLabel()?-1:1)}}function se(t,i){t&1&&(L(0,"div",10,2),N(2,2),g())}function me(t,i){t&1&&(L(0,"div",11,3),N(2,3),g())}function Ce(t,i){}function Pe(t,i){if(t&1&&s(0,Ce,0,0,"ng-template",13),t&2){C();let r=ta(1);f("ngTemplateOutlet",r)}}function Re(t,i){t&1&&(L(0,"div",14,4),N(2,4),g())}function Ne(t,i){t&1&&(L(0,"div",15,5),N(2,5),g())}function le(t,i){t&1&&z(0,"div",16)}function Fe(t,i){if(t&1&&(L(0,"div",18),N(1,6),g()),t&2){let r=C();f("@transitionMessages",r._subscriptAnimationState)}}function De(t,i){if(t&1&&(L(0,"mat-hint",22),na(1),g()),t&2){let r=C(2);f("id",r._hintLabelId),O(),ra(r.hintLabel)}}function Me(t,i){if(t&1&&(L(0,"div",19),s(1,De,2,2,"mat-hint",22),N(2,7),z(3,"div",23),N(4,8),g()),t&2){let r=C();f("@transitionMessages",r._subscriptAnimationState),O(),m(r.hintLabel?1:-1)}}var Vo=(()=>{let i=class i{};i.\u0275fac=function(o){return new(o||i)},i.\u0275dir=I({type:i,selectors:[["mat-label"]],standalone:!0});let t=i;return t})();var Ge=new F("MatError");var Ie=0,Wo=(()=>{let i=class i{constructor(){this.align="start",this.id=`mat-mdc-hint-${Ie++}`}};i.\u0275fac=function(o){return new(o||i)},i.\u0275dir=I({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(o,e){o&2&&(sa("id",e.id),B("align",null),U("mat-mdc-form-field-hint-end",e.align==="end"))},inputs:{align:"align",id:"id"},standalone:!0});let t=i;return t})(),fe=new F("MatPrefix");var _o=new F("MatSuffix"),Ui=(()=>{let i=class i{constructor(){this._isText=!1}set _isTextSelector(a){this._isText=!0}};i.\u0275fac=function(o){return new(o||i)},i.\u0275dir=I({type:i,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},standalone:!0,features:[X([{provide:_o,useExisting:i}])]});let t=i;return t})(),xo=new F("FloatingLabelParent"),Eo=(()=>{let i=class i{get floating(){return this._floating}set floating(a){this._floating=a,this.monitorResize&&this._handleResize()}get monitorResize(){return this._monitorResize}set monitorResize(a){this._monitorResize=a,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}constructor(a){this._elementRef=a,this._floating=!1,this._monitorResize=!1,this._resizeObserver=E(To),this._ngZone=E(R),this._parent=E(xo),this._resizeSubscription=new Qa}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Ue(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}};i.\u0275fac=function(o){return new(o||i)(c(T))},i.\u0275dir=I({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(o,e){o&2&&U("mdc-floating-label--float-above",e.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"},standalone:!0});let t=i;return t})();function Ue(t){let i=t;if(i.offsetParent!==null)return i.scrollWidth;let r=i.cloneNode(!0);r.style.setProperty("position","absolute"),r.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(r);let a=r.scrollWidth;return r.remove(),a}var ho="mdc-line-ripple--active",fa="mdc-line-ripple--deactivating",Ko=(()=>{let i=class i{constructor(a,o){this._elementRef=a,this._handleTransitionEnd=e=>{let n=this._elementRef.nativeElement.classList,u=n.contains(fa);e.propertyName==="opacity"&&u&&n.remove(ho,fa)},o.runOutsideAngular(()=>{a.nativeElement.addEventListener("transitionend",this._handleTransitionEnd)})}activate(){let a=this._elementRef.nativeElement.classList;a.remove(fa),a.add(ho)}deactivate(){this._elementRef.nativeElement.classList.add(fa)}ngOnDestroy(){this._elementRef.nativeElement.removeEventListener("transitionend",this._handleTransitionEnd)}};i.\u0275fac=function(o){return new(o||i)(c(T),c(R))},i.\u0275dir=I({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"],standalone:!0});let t=i;return t})(),Bo=(()=>{let i=class i{constructor(a,o){this._elementRef=a,this._ngZone=o,this.open=!1}ngAfterViewInit(){let a=this._elementRef.nativeElement.querySelector(".mdc-floating-label");a?(this._elementRef.nativeElement.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(a.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>a.style.transitionDuration="")}))):this._elementRef.nativeElement.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(a){!this.open||!a?this._notch.nativeElement.style.width="":this._notch.nativeElement.style.width=`calc(${a}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}};i.\u0275fac=function(o){return new(o||i)(c(T),c(R))},i.\u0275cmp=oa({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(o,e){if(o&1&&l($o,5),o&2){let n;S(n=A())&&(e._notch=n.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(o,e){o&2&&U("mdc-notched-outline--notched",e.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},standalone:!0,features:[ua],attrs:ae,ngContentSelectors:oe,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(o,e){o&1&&(ia(),z(0,"div",1),L(1,"div",2,0),N(3),g(),z(4,"div",3))},encapsulation:2,changeDetection:0});let t=i;return t})(),Te={transitionMessages:ca("transitionMessages",[Ga("enter",Y({opacity:1,transform:"translateY(0%)"})),q("void => enter",[Y({opacity:0,transform:"translateY(-5px)"}),pa("300ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])},da=(()=>{let i=class i{};i.\u0275fac=function(o){return new(o||i)},i.\u0275dir=I({type:i});let t=i;return t})();var La=new F("MatFormField"),Ve=new F("MAT_FORM_FIELD_DEFAULT_OPTIONS"),zo=0,Jo="fill",We="auto",bo="fixed",Ee="translateY(-50%)",Ti=(()=>{let i=class i{get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(a){this._hideRequiredMarker=j(a)}get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||We}set floatLabel(a){a!==this._floatLabel&&(this._floatLabel=a,this._changeDetectorRef.markForCheck())}get appearance(){return this._appearance}set appearance(a){let o=this._appearance,e=a||this._defaults?.appearance||Jo;this._appearance=e,this._appearance==="outline"&&this._appearance!==o&&(this._needsOutlineLabelOffsetUpdate=!0)}get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||bo}set subscriptSizing(a){this._subscriptSizing=a||this._defaults?.subscriptSizing||bo}get hintLabel(){return this._hintLabel}set hintLabel(a){this._hintLabel=a,this._processHints()}get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(a){this._explicitFormFieldControl=a}constructor(a,o,e,n,u,p,d,y){this._elementRef=a,this._changeDetectorRef=o,this._dir=n,this._platform=u,this._defaults=p,this._animationMode=d,this._labelChild=to(Vo),this._hideRequiredMarker=!1,this.color="primary",this._appearance=Jo,this._subscriptSizing=null,this._hintLabel="",this._hasIconPrefix=!1,this._hasTextPrefix=!1,this._hasIconSuffix=!1,this._hasTextSuffix=!1,this._labelId=`mat-mdc-form-field-label-${zo++}`,this._hintLabelId=`mat-mdc-hint-${zo++}`,this._subscriptAnimationState="",this._destroyed=new P,this._isFocused=null,this._needsOutlineLabelOffsetUpdate=!1,this._previousControl=null,this._injector=E(eo),this.getLabelId=za(()=>this._hasFloatingLabel()?this._labelId:null),this._hasFloatingLabel=za(()=>!!this._labelChild()),p&&(p.appearance&&(this.appearance=p.appearance),this._hideRequiredMarker=!!p?.hideRequiredMarker,p.color&&(this.color=p.color))}ngAfterViewInit(){this._updateFocusState(),this._subscriptAnimationState="enter",this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix(),this._initializeOutlineLabelOffsetSubscriptions()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._previousControl=this._control)}ngOnDestroy(){this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(a){let o=this._control,e="mat-mdc-form-field-type-";a&&this._elementRef.nativeElement.classList.remove(e+a.controlType),o.controlType&&this._elementRef.nativeElement.classList.add(e+o.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=o.stateChanges.subscribe(()=>{this._updateFocusState(),this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._valueChanges?.unsubscribe(),o.ngControl&&o.ngControl.valueChanges&&(this._valueChanges=o.ngControl.valueChanges.pipe(M(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(a=>!a._isText),this._hasTextPrefix=!!this._prefixChildren.find(a=>a._isText),this._hasIconSuffix=!!this._suffixChildren.find(a=>!a._isText),this._hasTextSuffix=!!this._suffixChildren.find(a=>a._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),w(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){this._control.focused&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!this._control.focused&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",this._control.focused)}_initializeOutlineLabelOffsetSubscriptions(){this._prefixChildren.changes.subscribe(()=>this._needsOutlineLabelOffsetUpdate=!0),no(()=>{this._needsOutlineLabelOffsetUpdate&&(this._needsOutlineLabelOffsetUpdate=!1,this._updateOutlineLabelOffset())},{injector:this._injector}),this._dir.change.pipe(M(this._destroyed)).subscribe(()=>this._needsOutlineLabelOffsetUpdate=!0)}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(a){let o=this._control?this._control.ngControl:null;return o&&o[a]}_getDisplayedMessages(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let a=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&a.push(...this._control.userAriaDescribedBy.split(" ")),this._getDisplayedMessages()==="hint"){let o=this._hintChildren?this._hintChildren.find(n=>n.align==="start"):null,e=this._hintChildren?this._hintChildren.find(n=>n.align==="end"):null;o?a.push(o.id):this._hintLabel&&a.push(this._hintLabelId),e&&a.push(e.id)}else this._errorChildren&&a.push(...this._errorChildren.map(o=>o.id));this._control.setDescribedByIds(a)}}_updateOutlineLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return;let a=this._floatingLabel.element;if(!(this._iconPrefixContainer||this._textPrefixContainer)){a.style.transform="";return}if(!this._isAttachedToDom()){this._needsOutlineLabelOffsetUpdate=!0;return}let o=this._iconPrefixContainer?.nativeElement,e=this._textPrefixContainer?.nativeElement,n=this._iconSuffixContainer?.nativeElement,u=this._textSuffixContainer?.nativeElement,p=o?.getBoundingClientRect().width??0,d=e?.getBoundingClientRect().width??0,y=n?.getBoundingClientRect().width??0,Q=u?.getBoundingClientRect().width??0,_=this._dir.value==="rtl"?"-1":"1",x=`${p+d}px`,Z=`calc(${_} * (${x} + var(--mat-mdc-form-field-label-offset-x, 0px)))`;a.style.transform=`var(
        --mat-mdc-form-field-label-transform,
        ${Ee} translateX(${Z})