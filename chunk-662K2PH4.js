import{Bc as He,C as se,Ca as M,Cd as G,Da as v,Ea as fe,Fa as pe,G as ie,Ga as z,Gc as ke,Ha as me,Hc as Z,Ia as R,Ic as xe,K as ae,Ka as W,Kc as je,La as w,Lb as Ae,Ma as _,Mb as be,Na as ge,O as ce,Oa as ve,Pa as ye,Qa as Se,Ra as Ee,Sa as Ie,T as le,Ta as we,Ua as m,Wa as A,Ya as C,Z as L,_ as E,a as B,aa as p,ab as _e,b as ne,ba as V,bc as De,da as I,fa as l,ga as P,i as re,ib as Ce,ja as T,ka as ue,la as $,pa as de,pc as Ne,qc as Oe,rb as Te,rc as Fe,s as y,t as oe,ub as Me,vb as Re,vc as Y,w as S,wc as Le,xc as Pe,ya as he,yc as f}from"./chunk-DXTRZIE6.js";var J=class extends Pe{constructor(){super(...arguments),this.supportsDOMEvents=!0}},X=class o extends J{static makeCurrent(){Le(new o)}onAndCancel(n,i,e){return n.addEventListener(i,e),()=>{n.removeEventListener(i,e)}}dispatchEvent(n,i){n.dispatchEvent(i)}remove(n){n.remove()}createElement(n,i){return i=i||this.getDefaultDocument(),i.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,i){return i==="window"?window:i==="document"?n:i==="body"?n.body:null}getBaseHref(n){let i=tt();return i==null?null:nt(i)}resetBaseElement(){b=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return He(document.cookie,n)}},b=null;function tt(){return b=b||document.querySelector("base"),b?b.getAttribute("href"):null}function nt(o){return new URL(o,document.baseURI).pathname}var rt=(()=>{let n=class n{build(){return new XMLHttpRequest}};n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=p({token:n,factory:n.\u0275fac});let o=n;return o})(),H=new I(""),$e=(()=>{let n=class n{constructor(e,t){this._zone=t,this._eventNameToPlugin=new Map,e.forEach(r=>{r.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,t,r){return this._findPluginFor(t).addEventListener(e,t,r)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(s=>s.supports(e)),!t)throw new E(5101,!1);return this._eventNameToPlugin.set(e,t),t}};n.\u0275fac=function(t){return new(t||n)(l(H),l(M))},n.\u0275prov=p({token:n,factory:n.\u0275fac});let o=n;return o})(),D=class{constructor(n){this._doc=n}},K="ng-app-id",ze=(()=>{let n=class n{constructor(e,t,r,s={}){this.doc=e,this.appId=t,this.nonce=r,this.platformId=s,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=Z(s),this.resetHostNodes()}addStyles(e){for(let t of e)this.changeUsageCount(t,1)===1&&this.onStyleAdded(t)}removeStyles(e){for(let t of e)this.changeUsageCount(t,-1)<=0&&this.onStyleRemoved(t)}ngOnDestroy(){let e=this.styleNodesInDOM;e&&(e.forEach(t=>t.remove()),e.clear());for(let t of this.getAllStyles())this.onStyleRemoved(t);this.resetHostNodes()}addHost(e){this.hostNodes.add(e);for(let t of this.getAllStyles())this.addStyleToHost(e,t)}removeHost(e){this.hostNodes.delete(e)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(e){for(let t of this.hostNodes)this.addStyleToHost(t,e)}onStyleRemoved(e){let t=this.styleRef;t.get(e)?.elements?.forEach(r=>r.remove()),t.delete(e)}collectServerRenderedStyles(){let e=this.doc.head?.querySelectorAll(`style[${K}="${this.appId}"]`);if(e?.length){let t=new Map;return e.forEach(r=>{r.textContent!=null&&t.set(r.textContent,r)}),t}return null}changeUsageCount(e,t){let r=this.styleRef;if(r.has(e)){let s=r.get(e);return s.usage+=t,s.usage}return r.set(e,{usage:t,elements:[]}),t}getStyleElement(e,t){let r=this.styleNodesInDOM,s=r?.get(t);if(s?.parentNode===e)return r.delete(t),s.removeAttribute(K),s;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=t,this.platformIsServer&&a.setAttribute(K,this.appId),e.appendChild(a),a}}addStyleToHost(e,t){let r=this.getStyleElement(e,t),s=this.styleRef,a=s.get(t)?.elements;a?a.push(r):s.set(t,{elements:[r],usage:1})}resetHostNodes(){let e=this.hostNodes;e.clear(),e.add(this.doc.head)}};n.\u0275fac=function(t){return new(t||n)(l(f),l(z),l(W,8),l(R))},n.\u0275prov=p({token:n,factory:n.\u0275fac});let o=n;return o})(),q={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},ee=/%COMP%/g,We="%COMP%",ot=`_nghost-${We}`,st=`_ngcontent-${We}`,it=!0,at=new I("",{providedIn:"root",factory:()=>it});function ct(o){return st.replace(ee,o)}function lt(o){return ot.replace(ee,o)}function Ye(o,n){return n.map(i=>i.replace(ee,o))}var Ue=(()=>{let n=class n{constructor(e,t,r,s,a,c,u,d=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=a,this.platformId=c,this.ngZone=u,this.nonce=d,this.rendererByCompId=new Map,this.platformIsServer=Z(c),this.defaultRenderer=new N(e,a,u,this.platformIsServer)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;this.platformIsServer&&t.encapsulation===T.ShadowDom&&(t=ne(B({},t),{encapsulation:T.Emulated}));let r=this.getOrCreateRenderer(e,t);return r instanceof k?r.applyToHost(e):r instanceof O&&r.applyStyles(),r}getOrCreateRenderer(e,t){let r=this.rendererByCompId,s=r.get(t.id);if(!s){let a=this.doc,c=this.ngZone,u=this.eventManager,d=this.sharedStylesHost,h=this.removeStylesOnCompDestroy,U=this.platformIsServer;switch(t.encapsulation){case T.Emulated:s=new k(u,d,t,this.appId,h,a,c,U);break;case T.ShadowDom:return new Q(u,d,e,t,a,c,this.nonce,U);default:s=new O(u,d,t,h,a,c,U);break}r.set(t.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}};n.\u0275fac=function(t){return new(t||n)(l($e),l(ze),l(z),l(at),l(f),l(R),l(M),l(W))},n.\u0275prov=p({token:n,factory:n.\u0275fac});let o=n;return o})(),N=class{constructor(n,i,e,t){this.eventManager=n,this.doc=i,this.ngZone=e,this.platformIsServer=t,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(n,i){return i?this.doc.createElementNS(q[i]||i,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,i){(Be(n)?n.content:n).appendChild(i)}insertBefore(n,i,e){n&&(Be(n)?n.content:n).insertBefore(i,e)}removeChild(n,i){i.remove()}selectRootElement(n,i){let e=typeof n=="string"?this.doc.querySelector(n):n;if(!e)throw new E(-5104,!1);return i||(e.textContent=""),e}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,i,e,t){if(t){i=t+":"+i;let r=q[t];r?n.setAttributeNS(r,i,e):n.setAttribute(i,e)}else n.setAttribute(i,e)}removeAttribute(n,i,e){if(e){let t=q[e];t?n.removeAttributeNS(t,i):n.removeAttribute(`${e}:${i}`)}else n.removeAttribute(i)}addClass(n,i){n.classList.add(i)}removeClass(n,i){n.classList.remove(i)}setStyle(n,i,e,t){t&(A.DashCase|A.Important)?n.style.setProperty(i,e,t&A.Important?"important":""):n.style[i]=e}removeStyle(n,i,e){e&A.DashCase?n.style.removeProperty(i):n.style[i]=""}setProperty(n,i,e){n!=null&&(n[i]=e)}setValue(n,i){n.nodeValue=i}listen(n,i,e){if(typeof n=="string"&&(n=Y().getGlobalEventTarget(this.doc,n),!n))throw new Error(`Unsupported event target ${n} for event ${i}`);return this.eventManager.addEventListener(n,i,this.decoratePreventDefault(e))}decoratePreventDefault(n){return i=>{if(i==="__ngUnwrap__")return n;(this.platformIsServer?this.ngZone.runGuarded(()=>n(i)):n(i))===!1&&i.preventDefault()}}};function Be(o){return o.tagName==="TEMPLATE"&&o.content!==void 0}var Q=class extends N{constructor(n,i,e,t,r,s,a,c){super(n,r,s,c),this.sharedStylesHost=i,this.hostEl=e,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=Ye(t.id,t.styles);for(let d of u){let h=document.createElement("style");a&&h.setAttribute("nonce",a),h.textContent=d,this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,i){return super.appendChild(this.nodeOrShadowRoot(n),i)}insertBefore(n,i,e){return super.insertBefore(this.nodeOrShadowRoot(n),i,e)}removeChild(n,i){return super.removeChild(null,i)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},O=class extends N{constructor(n,i,e,t,r,s,a,c){super(n,r,s,a),this.sharedStylesHost=i,this.removeStylesOnCompDestroy=t,this.styles=c?Ye(c,e.styles):e.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},k=class extends O{constructor(n,i,e,t,r,s,a,c){let u=t+"-"+e.id;super(n,i,e,r,s,a,c,u),this.contentAttr=ct(u),this.hostAttr=lt(u)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,i){let e=super.createElement(n,i);return super.setAttribute(e,this.contentAttr,""),e}},ut=(()=>{let n=class n extends D{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r){return e.addEventListener(t,r,!1),()=>this.removeEventListener(e,t,r)}removeEventListener(e,t,r){return e.removeEventListener(t,r)}};n.\u0275fac=function(t){return new(t||n)(l(f))},n.\u0275prov=p({token:n,factory:n.\u0275fac});let o=n;return o})(),dt=(()=>{let n=class n extends D{constructor(e){super(e),this.delegate=P(Oe,{optional:!0})}supports(e){return this.delegate?this.delegate.supports(e):!1}addEventListener(e,t,r){return this.delegate.addEventListener(e,t,r)}removeEventListener(e,t,r){return this.delegate.removeEventListener(e,t,r)}};n.\u0275fac=function(t){return new(t||n)(l(f))},n.\u0275prov=p({token:n,factory:n.\u0275fac});let o=n;return o})(),Ve=["alt","control","meta","shift"],ht={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},ft={alt:o=>o.altKey,control:o=>o.ctrlKey,meta:o=>o.metaKey,shift:o=>o.shiftKey},pt=(()=>{let n=class n extends D{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,r){let s=n.parseEventName(t),a=n.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Y().onAndCancel(e,s.domEventName,a))}static parseEventName(e){let t=e.toLowerCase().split("."),r=t.shift();if(t.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(t.pop()),a="",c=t.indexOf("code");if(c>-1&&(t.splice(c,1),a="code."),Ve.forEach(d=>{let h=t.indexOf(d);h>-1&&(t.splice(h,1),a+=d+".")}),a+=s,t.length!=0||s.length===0)return null;let u={};return u.domEventName=r,u.fullKey=a,u}static matchEventFullKeyCode(e,t){let r=ht[e.key]||e.key,s="";return t.indexOf("code.")>-1&&(r=e.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Ve.forEach(a=>{if(a!==r){let c=ft[a];c(e)&&(s+=a+".")}}),s+=r,s===t)}static eventCallback(e,t,r){return s=>{n.matchEventFullKeyCode(s,e)&&r.runGuarded(()=>t(s))}}static _normalizeKey(e){return e==="esc"?"escape":e}};n.\u0275fac=function(t){return new(t||n)(l(f))},n.\u0275prov=p({token:n,factory:n.\u0275fac});let o=n;return o})();function on(o,n){return Ne(B({rootComponent:o},mt(n)))}function mt(o){return{appProviders:[...Et,...o?.providers??[]],platformProviders:St}}function gt(){X.makeCurrent()}function vt(){return new v}function yt(){return pe(document),document}var St=[{provide:R,useValue:ke},{provide:me,useValue:gt,multi:!0},{provide:f,useFactory:yt,deps:[]}];var Et=[{provide:de,useValue:"root"},{provide:v,useFactory:vt,deps:[]},{provide:H,useClass:ut,multi:!0,deps:[f,M,R]},{provide:H,useClass:pt,multi:!0,deps:[f]},{provide:H,useClass:dt,multi:!0},Ue,ze,$e,{provide:_e,useExisting:Ue},{provide:xe,useClass:rt,deps:[]},[]];var sn=(()=>{let n=class n{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}};n.\u0275fac=function(t){return new(t||n)(l(f))},n.\u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"});let o=n;return o})();var te=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=p({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=l(It),r},providedIn:"root"});let o=n;return o})(),It=(()=>{let n=class n extends te{constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case m.NONE:return t;case m.HTML:return _(t,"HTML")?w(t):we(this._doc,String(t)).toString();case m.STYLE:return _(t,"Style")?w(t):t;case m.SCRIPT:if(_(t,"Script"))return w(t);throw new E(5200,!1);case m.URL:return _(t,"URL")?w(t):Ie(String(t));case m.RESOURCE_URL:if(_(t,"ResourceURL"))return w(t);throw new E(5201,!1);default:throw new E(5202,!1)}}bypassSecurityTrustHtml(e){return ge(e)}bypassSecurityTrustStyle(e){return ve(e)}bypassSecurityTrustScript(e){return ye(e)}bypassSecurityTrustUrl(e){return Se(e)}bypassSecurityTrustResourceUrl(e){return Ee(e)}};n.\u0275fac=function(t){return new(t||n)(l(f))},n.\u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"});let o=n;return o})();var _t=["*"],x;function Ct(){if(x===void 0&&(x=null,typeof window<"u")){let o=window;o.trustedTypes!==void 0&&(x=o.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return x}function F(o){return Ct()?.createHTML(o)||o}function Ze(o){return Error(`Unable to find icon with the name "${o}"`)}function Tt(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Ge(o){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${o}".`)}function Ke(o){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${o}".`)}var g=class{constructor(n,i,e){this.url=n,this.svgText=i,this.options=e}},Mt=(()=>{let n=class n{constructor(e,t,r,s){this._httpClient=e,this._sanitizer=t,this._errorHandler=s,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=r}addSvgIcon(e,t,r){return this.addSvgIconInNamespace("",e,t,r)}addSvgIconLiteral(e,t,r){return this.addSvgIconLiteralInNamespace("",e,t,r)}addSvgIconInNamespace(e,t,r,s){return this._addSvgIconConfig(e,t,new g(r,null,s))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,r,s){let a=this._sanitizer.sanitize(m.HTML,r);if(!a)throw Ke(r);let c=F(a);return this._addSvgIconConfig(e,t,new g("",c,s))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,r){return this._addSvgIconSetConfig(e,new g(t,null,r))}addSvgIconSetLiteralInNamespace(e,t,r){let s=this._sanitizer.sanitize(m.HTML,t);if(!s)throw Ke(t);let a=F(s);return this._addSvgIconSetConfig(e,new g("",a,r))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(m.RESOURCE_URL,e);if(!t)throw Ge(e);let r=this._cachedIconsByUrl.get(t);return r?y(j(r)):this._loadSvgIconFromConfig(new g(e,null)).pipe(L(s=>this._cachedIconsByUrl.set(t,s)),S(s=>j(s)))}getNamedSvgIcon(e,t=""){let r=qe(t,e),s=this._svgIconConfigs.get(r);if(s)return this._getSvgFromConfig(s);if(s=this._getIconConfigFromResolvers(t,e),s)return this._svgIconConfigs.set(r,s),this._getSvgFromConfig(s);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):oe(Ze(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?y(j(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(S(t=>j(t)))}_getSvgFromIconSetConfigs(e,t){let r=this._extractIconWithNameFromAnySet(e,t);if(r)return y(r);let s=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(ie(c=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(m.RESOURCE_URL,a.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(d)),y(null)})));return se(s).pipe(S(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw Ze(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let r=t.length-1;r>=0;r--){let s=t[r];if(s.svgText&&s.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(s),c=this._extractSvgIconFromSet(a,e,s.options);if(c)return c}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(L(t=>e.svgText=t),S(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?y(null):this._fetchIcon(e).pipe(L(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,r){let s=e.querySelector(`[id="${t}"]`);if(!s)return null;let a=s.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let c=this._svgElementFromString(F("<svg></svg>"));return c.appendChild(a),this._setSvgAttributes(c,r)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let r=t.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let t=this._svgElementFromString(F("<svg></svg>")),r=e.attributes;for(let s=0;s<r.length;s++){let{name:a,value:c}=r[s];a!=="id"&&t.setAttribute(a,c)}for(let s=0;s<e.childNodes.length;s++)e.childNodes[s].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[s].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:r}=e,s=r?.withCredentials??!1;if(!this._httpClient)throw Tt();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(m.RESOURCE_URL,t);if(!a)throw Ge(t);let c=this._inProgressUrlFetches.get(a);if(c)return c;let u=this._httpClient.get(a,{responseType:"text",withCredentials:s}).pipe(S(d=>F(d)),ce(()=>this._inProgressUrlFetches.delete(a)),le());return this._inProgressUrlFetches.set(a,u),u}_addSvgIconConfig(e,t,r){return this._svgIconConfigs.set(qe(e,t),r),this}_addSvgIconSetConfig(e,t){let r=this._iconSetConfigs.get(e);return r?r.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let r=0;r<this._resolvers.length;r++){let s=this._resolvers[r](t,e);if(s)return Rt(s)?new g(s.url,null,s.options):new g(s,null)}}};n.\u0275fac=function(t){return new(t||n)(l(je,8),l(te),l(f,8),l(v))},n.\u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"});let o=n;return o})();function j(o){return o.cloneNode(!0)}function qe(o,n){return o+":"+n}function Rt(o){return!!(o.url&&o.options)}var At=new I("MAT_ICON_DEFAULT_OPTIONS"),bt=new I("mat-icon-location",{providedIn:"root",factory:Dt});function Dt(){let o=P(f),n=o?o.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}var Je=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Nt=Je.map(o=>`[${o}]`).join(", "),Ot=/^url\(['"]?#(.*?)['"]?\)$/,_n=(()=>{let n=class n{get color(){return this._color||this._defaultColor}set color(e){this._color=e}get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}constructor(e,t,r,s,a,c){this._elementRef=e,this._iconRegistry=t,this._location=s,this._errorHandler=a,this.inline=!1,this._previousFontSetClass=[],this._currentIconFetch=re.EMPTY,c&&(c.color&&(this.color=this._defaultColor=c.color),c.fontSet&&(this.fontSet=c.fontSet)),r||e.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let r=e.childNodes[t];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),t.forEach(r=>e.classList.add(r)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((r,s)=>{r.forEach(a=>{s.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Nt),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let s=0;s<t.length;s++)Je.forEach(a=>{let c=t[s],u=c.getAttribute(a),d=u?u.match(Ot):null;if(d){let h=r.get(c);h||(h=[],r.set(c,h)),h.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,r]=this._splitIconName(e);t&&(this._svgNamespace=t),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,t).pipe(ae(1)).subscribe(s=>this._setSvgElement(s),s=>{let a=`Error retrieving icon ${t}:${r}! ${s.message}`;this._errorHandler.handleError(new Error(a))})}}};n.\u0275fac=function(t){return new(t||n)(C(fe),C(Mt),he("aria-hidden"),C(bt),C(v),C(At,8))},n.\u0275cmp=ue({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,r){t&2&&(Te("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Re(r.color?"mat-"+r.color:""),Me("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Fe],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],standalone:!0,features:[Ce,De],ngContentSelectors:_t,decls:1,vars:0,template:function(t,r){t&1&&(Ae(),be(0))},styles:["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0});let o=n;return o})(),Cn=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=$({type:n}),n.\u0275inj=V({imports:[G,G]});let o=n;return o})();export{Ue as a,on as b,sn as c,_n as d,Cn as e};
