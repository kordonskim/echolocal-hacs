var Er=Object.defineProperty;var Rr=Object.getOwnPropertyDescriptor;var c=(s,i,e,t)=>{for(var r=t>1?void 0:t?Rr(i,e):i,a=s.length-1,n;a>=0;a--)(n=s[a])&&(r=(t?n(i,e,r):n(r))||r);return t&&r&&Er(i,e,r),r};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Re=globalThis,ze=Re.ShadowRoot&&(Re.ShadyCSS===void 0||Re.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Nt=Symbol(),Ot=new WeakMap,Pe=class{constructor(i,e,t){if(this._$cssResult$=!0,t!==Nt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=e}get styleSheet(){let i=this.o,e=this.t;if(ze&&i===void 0){let t=e!==void 0&&e.length===1;t&&(i=Ot.get(e)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),t&&Ot.set(e,i))}return i}toString(){return this.cssText}},y=s=>new Pe(typeof s=="string"?s:s+"",void 0,Nt);var It=(s,i)=>{if(ze)s.adoptedStyleSheets=i.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of i){let t=document.createElement("style"),r=Re.litNonce;r!==void 0&&t.setAttribute("nonce",r),t.textContent=e.cssText,s.appendChild(t)}},nt=ze?s=>s:s=>s instanceof CSSStyleSheet?(i=>{let e="";for(let t of i.cssRules)e+=t.cssText;return y(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var{is:Pr,defineProperty:zr,getOwnPropertyDescriptor:Or,getOwnPropertyNames:Nr,getOwnPropertySymbols:Ir,getPrototypeOf:Ur}=Object,Oe=globalThis,Ut=Oe.trustedTypes,Dr=Ut?Ut.emptyScript:"",Fr=Oe.reactiveElementPolyfillSupport,we=(s,i)=>s,$e={toAttribute(s,i){switch(i){case Boolean:s=s?Dr:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,i){let e=s;switch(i){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},Ne=(s,i)=>!Pr(s,i),Dt={attribute:!0,type:String,converter:$e,reflect:!1,useDefault:!1,hasChanged:Ne};Symbol.metadata??=Symbol("metadata"),Oe.litPropertyMetadata??=new WeakMap;var V=class extends HTMLElement{static addInitializer(i){this._$Ei(),(this.l??=[]).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,e=Dt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(i,e),!e.noAccessor){let t=Symbol(),r=this.getPropertyDescriptor(i,t,e);r!==void 0&&zr(this.prototype,i,r)}}static getPropertyDescriptor(i,e,t){let{get:r,set:a}=Or(this.prototype,i)??{get(){return this[e]},set(n){this[e]=n}};return{get:r,set(n){let l=r?.call(this);a?.call(this,n),this.requestUpdate(i,l,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)??Dt}static _$Ei(){if(this.hasOwnProperty(we("elementProperties")))return;let i=Ur(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(we("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(we("properties"))){let e=this.properties,t=[...Nr(e),...Ir(e)];for(let r of t)this.createProperty(r,e[r])}let i=this[Symbol.metadata];if(i!==null){let e=litPropertyMetadata.get(i);if(e!==void 0)for(let[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let r=this._$Eu(e,t);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){let e=[];if(Array.isArray(i)){let t=new Set(i.flat(1/0).reverse());for(let r of t)e.unshift(nt(r))}else i!==void 0&&e.push(nt(i));return e}static _$Eu(i,e){let t=e.attribute;return t===!1?void 0:typeof t=="string"?t:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(i=>i(this))}addController(i){(this._$EO??=new Set).add(i),this.renderRoot!==void 0&&this.isConnected&&i.hostConnected?.()}removeController(i){this._$EO?.delete(i)}_$E_(){let i=new Map,e=this.constructor.elementProperties;for(let t of e.keys())this.hasOwnProperty(t)&&(i.set(t,this[t]),delete this[t]);i.size>0&&(this._$Ep=i)}createRenderRoot(){let i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return It(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(i=>i.hostConnected?.())}enableUpdating(i){}disconnectedCallback(){this._$EO?.forEach(i=>i.hostDisconnected?.())}attributeChangedCallback(i,e,t){this._$AK(i,t)}_$ET(i,e){let t=this.constructor.elementProperties.get(i),r=this.constructor._$Eu(i,t);if(r!==void 0&&t.reflect===!0){let a=(t.converter?.toAttribute!==void 0?t.converter:$e).toAttribute(e,t.type);this._$Em=i,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(i,e){let t=this.constructor,r=t._$Eh.get(i);if(r!==void 0&&this._$Em!==r){let a=t.getPropertyOptions(r),n=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:$e;this._$Em=r;let l=n.fromAttribute(e,a.type);this[r]=l??this._$Ej?.get(r)??l,this._$Em=null}}requestUpdate(i,e,t,r=!1,a){if(i!==void 0){let n=this.constructor;if(r===!1&&(a=this[i]),t??=n.getPropertyOptions(i),!((t.hasChanged??Ne)(a,e)||t.useDefault&&t.reflect&&a===this._$Ej?.get(i)&&!this.hasAttribute(n._$Eu(i,t))))return;this.C(i,e,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,e,{useDefault:t,reflect:r,wrapped:a},n){t&&!(this._$Ej??=new Map).has(i)&&(this._$Ej.set(i,n??e??this[i]),a!==!0||n!==void 0)||(this._$AL.has(i)||(this.hasUpdated||t||(e=void 0),this._$AL.set(i,e)),r===!0&&this._$Em!==i&&(this._$Eq??=new Set).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,a]of this._$Ep)this[r]=a;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[r,a]of t){let{wrapped:n}=a,l=this[r];n!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,a,l)}}let i=!1,e=this._$AL;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(t){throw i=!1,this._$EM(),t}i&&this._$AE(e)}willUpdate(i){}_$AE(i){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(i){}firstUpdated(i){}};V.elementStyles=[],V.shadowRootOptions={mode:"open"},V[we("elementProperties")]=new Map,V[we("finalized")]=new Map,Fr?.({ReactiveElement:V}),(Oe.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ut=globalThis,Ft=s=>s,Ie=ut.trustedTypes,jt=Ie?Ie.createPolicy("lit-html",{createHTML:s=>s}):void 0,Gt="$lit$",Y=`lit$${Math.random().toFixed(9).slice(2)}$`,Lt="?"+Y,jr=`<${Lt}>`,ne=document,_e=()=>ne.createComment(""),Se=s=>s===null||typeof s!="object"&&typeof s!="function",mt=Array.isArray,Br=s=>mt(s)||typeof s?.[Symbol.iterator]=="function",ot=`[ 	
\f\r]`,ke=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bt=/-->/g,Wt=/>/g,se=RegExp(`>|${ot}(?:([^\\s"'>=/]+)(${ot}*=${ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qt=/'/g,Kt=/"/g,Yt=/^(?:script|style|textarea|title)$/i,ft=s=>(i,...e)=>({_$litType$:s,strings:i,values:e}),o=ft(1),v=ft(2),$a=ft(3),G=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Vt=new WeakMap,ae=ne.createTreeWalker(ne,129);function Xt(s,i){if(!mt(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return jt!==void 0?jt.createHTML(i):i}var Wr=(s,i)=>{let e=s.length-1,t=[],r,a=i===2?"<svg>":i===3?"<math>":"",n=ke;for(let l=0;l<e;l++){let d=s[l],h,f,g=-1,w=0;for(;w<d.length&&(n.lastIndex=w,f=n.exec(d),f!==null);)w=n.lastIndex,n===ke?f[1]==="!--"?n=Bt:f[1]!==void 0?n=Wt:f[2]!==void 0?(Yt.test(f[2])&&(r=RegExp("</"+f[2],"g")),n=se):f[3]!==void 0&&(n=se):n===se?f[0]===">"?(n=r??ke,g=-1):f[1]===void 0?g=-2:(g=n.lastIndex-f[2].length,h=f[1],n=f[3]===void 0?se:f[3]==='"'?Kt:qt):n===Kt||n===qt?n=se:n===Bt||n===Wt?n=ke:(n=se,r=void 0);let $=n===se&&s[l+1].startsWith("/>")?" ":"";a+=n===ke?d+jr:g>=0?(t.push(h),d.slice(0,g)+Gt+d.slice(g)+Y+$):d+Y+(g===-2?l:$)}return[Xt(s,a+(s[e]||"<?>")+(i===2?"</svg>":i===3?"</math>":"")),t]},Ae=class s{constructor({strings:i,_$litType$:e},t){let r;this.parts=[];let a=0,n=0,l=i.length-1,d=this.parts,[h,f]=Wr(i,e);if(this.el=s.createElement(h,t),ae.currentNode=this.el.content,e===2||e===3){let g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(r=ae.nextNode())!==null&&d.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(let g of r.getAttributeNames())if(g.endsWith(Gt)){let w=f[n++],$=r.getAttribute(g).split(Y),_=/([.?@])?(.*)/.exec(w);d.push({type:1,index:a,name:_[2],strings:$,ctor:_[1]==="."?ct:_[1]==="?"?dt:_[1]==="@"?pt:pe}),r.removeAttribute(g)}else g.startsWith(Y)&&(d.push({type:6,index:a}),r.removeAttribute(g));if(Yt.test(r.tagName)){let g=r.textContent.split(Y),w=g.length-1;if(w>0){r.textContent=Ie?Ie.emptyScript:"";for(let $=0;$<w;$++)r.append(g[$],_e()),ae.nextNode(),d.push({type:2,index:++a});r.append(g[w],_e())}}}else if(r.nodeType===8)if(r.data===Lt)d.push({type:2,index:a});else{let g=-1;for(;(g=r.data.indexOf(Y,g+1))!==-1;)d.push({type:7,index:a}),g+=Y.length-1}a++}}static createElement(i,e){let t=ne.createElement("template");return t.innerHTML=i,t}};function de(s,i,e=s,t){if(i===G)return i;let r=t!==void 0?e._$Co?.[t]:e._$Cl,a=Se(i)?void 0:i._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),a===void 0?r=void 0:(r=new a(s),r._$AT(s,e,t)),t!==void 0?(e._$Co??=[])[t]=r:e._$Cl=r),r!==void 0&&(i=de(s,r._$AS(s,i.values),r,t)),i}var lt=class{constructor(i,e){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){let{el:{content:e},parts:t}=this._$AD,r=(i?.creationScope??ne).importNode(e,!0);ae.currentNode=r;let a=ae.nextNode(),n=0,l=0,d=t[0];for(;d!==void 0;){if(n===d.index){let h;d.type===2?h=new Te(a,a.nextSibling,this,i):d.type===1?h=new d.ctor(a,d.name,d.strings,this,i):d.type===6&&(h=new ht(a,this,i)),this._$AV.push(h),d=t[++l]}n!==d?.index&&(a=ae.nextNode(),n++)}return ae.currentNode=ne,r}p(i){let e=0;for(let t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(i,t,e),e+=t.strings.length-2):t._$AI(i[e])),e++}},Te=class s{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(i,e,t,r){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=i,this._$AB=e,this._$AM=t,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let i=this._$AA.parentNode,e=this._$AM;return e!==void 0&&i?.nodeType===11&&(i=e.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,e=this){i=de(this,i,e),Se(i)?i===p||i==null||i===""?(this._$AH!==p&&this._$AR(),this._$AH=p):i!==this._$AH&&i!==G&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):Br(i)?this.k(i):this._(i)}O(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}_(i){this._$AH!==p&&Se(this._$AH)?this._$AA.nextSibling.data=i:this.T(ne.createTextNode(i)),this._$AH=i}$(i){let{values:e,_$litType$:t}=i,r=typeof t=="number"?this._$AC(i):(t.el===void 0&&(t.el=Ae.createElement(Xt(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===r)this._$AH.p(e);else{let a=new lt(r,this),n=a.u(this.options);a.p(e),this.T(n),this._$AH=a}}_$AC(i){let e=Vt.get(i.strings);return e===void 0&&Vt.set(i.strings,e=new Ae(i)),e}k(i){mt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,t,r=0;for(let a of i)r===e.length?e.push(t=new s(this.O(_e()),this.O(_e()),this,this.options)):t=e[r],t._$AI(a),r++;r<e.length&&(this._$AR(t&&t._$AB.nextSibling,r),e.length=r)}_$AR(i=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);i!==this._$AB;){let t=Ft(i).nextSibling;Ft(i).remove(),i=t}}setConnected(i){this._$AM===void 0&&(this._$Cv=i,this._$AP?.(i))}},pe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,e,t,r,a){this.type=1,this._$AH=p,this._$AN=void 0,this.element=i,this.name=e,this._$AM=r,this.options=a,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=p}_$AI(i,e=this,t,r){let a=this.strings,n=!1;if(a===void 0)i=de(this,i,e,0),n=!Se(i)||i!==this._$AH&&i!==G,n&&(this._$AH=i);else{let l=i,d,h;for(i=a[0],d=0;d<a.length-1;d++)h=de(this,l[t+d],e,d),h===G&&(h=this._$AH[d]),n||=!Se(h)||h!==this._$AH[d],h===p?i=p:i!==p&&(i+=(h??"")+a[d+1]),this._$AH[d]=h}n&&!r&&this.j(i)}j(i){i===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}},ct=class extends pe{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===p?void 0:i}},dt=class extends pe{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==p)}},pt=class extends pe{constructor(i,e,t,r,a){super(i,e,t,r,a),this.type=5}_$AI(i,e=this){if((i=de(this,i,e,0)??p)===G)return;let t=this._$AH,r=i===p&&t!==p||i.capture!==t.capture||i.once!==t.once||i.passive!==t.passive,a=i!==p&&(t===p||r);r&&this.element.removeEventListener(this.name,this,t),a&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,i):this._$AH.handleEvent(i)}},ht=class{constructor(i,e,t){this.element=i,this.type=6,this._$AN=void 0,this._$AM=e,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(i){de(this,i)}};var qr=ut.litHtmlPolyfillSupport;qr?.(Ae,Te),(ut.litHtmlVersions??=[]).push("3.3.3");var Zt=(s,i,e)=>{let t=e?.renderBefore??i,r=t._$litPart$;if(r===void 0){let a=e?.renderBefore??null;t._$litPart$=r=new Te(i.insertBefore(_e(),a),a,void 0,e??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gt=globalThis,b=class extends V{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let i=super.createRenderRoot();return this.renderOptions.renderBefore??=i.firstChild,i}update(i){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=Zt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return G}};b._$litElement$=!0,b.finalized=!0,gt.litElementHydrateSupport?.({LitElement:b});var Kr=gt.litElementPolyfillSupport;Kr?.({LitElement:b});(gt.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var x=s=>(i,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,i)}):customElements.define(s,i)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Vr={attribute:!0,type:String,converter:$e,reflect:!1,hasChanged:Ne},Gr=(s=Vr,i,e)=>{let{kind:t,metadata:r}=e,a=globalThis.litPropertyMetadata.get(r);if(a===void 0&&globalThis.litPropertyMetadata.set(r,a=new Map),t==="setter"&&((s=Object.create(s)).wrapped=!0),a.set(e.name,s),t==="accessor"){let{name:n}=e;return{set(l){let d=i.get.call(this);i.set.call(this,l),this.requestUpdate(n,d,s,!0,l)},init(l){return l!==void 0&&this.C(n,void 0,s,l),l}}}if(t==="setter"){let{name:n}=e;return function(l){let d=this[n];i.call(this,l),this.requestUpdate(n,d,s,!0,l)}}throw Error("Unsupported decorator location: "+t)};function u(s){return(i,e)=>typeof e=="object"?Gr(s,i,e):((t,r,a)=>{let n=r.hasOwnProperty(a);return r.constructor.createProperty(a,t),n?Object.getOwnPropertyDescriptor(r,a):void 0})(s,i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function m(s){return u({...s,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Jt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Fe=s=>(...i)=>({_$litDirective$:s,values:i}),De=class{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,e,t){this._$Ct=i,this._$AM=e,this._$Ci=t}_$AS(i,e){return this.update(i,e)}update(i,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var oe=class extends De{constructor(i){if(super(i),this.it=p,i.type!==Jt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(i){if(i===p||i==null)return this._t=void 0,this.it=i;if(i===G)return i;if(typeof i!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(i===this.it)return this._t;this.it=i;let e=[i];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};oe.directiveName="unsafeHTML",oe.resultType=1;var hn=Fe(oe);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ce=class extends oe{};Ce.directiveName="unsafeSVG",Ce.resultType=2;var je=Fe(Ce);var Me=12,Qt=2.2,U=100,D=100,ei=500;function ti(s,i){let e=Array.from({length:Me},(t,r)=>{let a=-90+360/Me*r+Qt/2,n=-90+360/Me*(r+1)-Qt/2;return Xr(93,82,a,n)});return v`
    <svg viewBox="0 0 200 200" role="img" aria-label="Echo Dot">
      <defs>
        <radialGradient id="top" cx="38%" cy="30%" r="78%">
          <stop offset="0%" stop-color="var(--el-top-high)"></stop>
          <stop offset="100%" stop-color="var(--el-top)"></stop>
        </radialGradient>
        <filter id="blur" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4"></feGaussianBlur>
        </filter>
      </defs>

      <circle cx=${U} cy=${D} r="97" fill="var(--el-shell)"></circle>
      <circle cx=${U} cy=${D} r="97" fill="none" stroke="var(--el-edge)" stroke-width="1"></circle>

      <g class="halo" filter="url(#blur)" style="opacity:${s.glow}">
        ${e.map((t,r)=>v`<path d=${t} style="fill:${s.segments[r].opacity?s.segments[r].fill:"transparent"}"></path>`)}
      </g>

      ${e.map((t,r)=>v`<path
          class="segment"
          data-picked=${String(s.picked===r)}
          data-divisible=${String(s.divisible)}
          d=${t}
          style="fill:${s.segments[r].fill};opacity:${s.segments[r].opacity}"
          @click=${s.divisible?()=>i.segment(r):i.ring}
        ></path>`)}

      <circle cx=${U} cy=${D} r="79" fill="url(#top)"></circle>
      <circle cx=${U} cy=${D} r="79" fill="none" stroke="var(--el-edge)" stroke-width="1"></circle>

      ${s.lux?v`<text
            class="lux"
            x=${U}
            y=${D+5}
            text-anchor="middle"
            style="--lit:${s.lux.lit}"
          >${Math.round(s.lux.value)}<tspan class="unit" dx="3.5">lx</tspan></text>`:""}


      ${bt(U,D-46,v`<path d="M-4.5 0h9M0 -4.5v9"></path>`,"Volume up",()=>i.volume(1))}
      <g
        class="btn"
        data-lit=${String(s.holding)}
        transform="translate(${U+46} ${D})"
        role="button"
        tabindex="0"
        aria-label=${s.holding?"Wake the second assistant":"Wake"}
        @pointerdown=${()=>i.action("down")}
        @pointerup=${()=>i.action("up")}
        @pointerleave=${()=>i.action("cancel")}
        @pointercancel=${()=>i.action("cancel")}
      >
        <circle class="face" cx="0" cy="0" r="13"></circle>
        <g class="glyph"><circle cx="0" cy="0" r="4.5"></circle></g>
      </g>
      ${bt(U,D+46,v`<path d="M-4.5 0h9"></path>`,"Volume down",()=>i.volume(-1))}
      ${bt(U-46,D,Lr(s.muted),s.muted?"Microphone muted":"Microphone live",i.mute,s.muted)}
    </svg>
  `}function bt(s,i,e,t,r,a=!1){return v`<g class="btn" data-lit=${String(a)} transform="translate(${s} ${i})"
    role="button" tabindex="0" aria-label=${t} @click=${r}>
    <circle class="face" cx="0" cy="0" r="13"></circle>
    <g class="glyph">${e}</g>
  </g>`}function Lr(s){return v`
    <path d="M-2.6 -5.2a2.6 2.6 0 0 1 5.2 0v4a2.6 2.6 0 0 1-5.2 0z"></path>
    <path d="M-4.6 -0.6a4.6 4.6 0 0 0 9.2 0"></path>
    <path d="M0 3.8v2.6"></path>
    ${s?v`<path d="M-6.4 6.4L6.4 -6.4"></path>`:Yr()}
  `}function Yr(){return v``}function Xr(s,i,e,t){let r=($,_)=>{let K=_*Math.PI/180;return[(U+$*Math.cos(K)).toFixed(2),(D+$*Math.sin(K)).toFixed(2)]},[a,n]=r(s,e),[l,d]=r(s,t),[h,f]=r(i,t),[g,w]=r(i,e);return`M${a} ${n}A${s} ${s} 0 0 1 ${l} ${d}L${h} ${f}A${i} ${i} 0 0 0 ${g} ${w}Z`}var ii=`:host{display:block}ha-card{padding:16px}.frame{position:relative;display:grid;grid-template-columns:minmax(0,1fr) auto;grid-template-rows:auto auto;gap:12px;align-items:center}text.lux{fill:color-mix(in srgb,var(--el-warm) calc(var(--lit) * 100%),var(--el-read));filter:drop-shadow(0 0 calc(var(--lit) * 5px) color-mix(in srgb,var(--el-warm) calc(var(--lit) * 65%),transparent));font-family:var(--ha-font-family-body, inherit);font-size:15px;font-weight:500;letter-spacing:-.3px;pointer-events:none}text.lux .unit{font-size:9px;font-weight:400;fill:var(--el-glyph)}.art{grid-area:1 / 1;min-width:0;width:100%;max-width:240px;height:240px;margin:0 auto;--el-shell: #4a4d52;--el-top: #3c3f44;--el-top-high: #5a5e64;--el-edge: rgba(255, 255, 255, .13);--el-ring-off: rgba(255, 255, 255, .1);--el-glyph: rgba(255, 255, 255, .62);--el-btn: rgba(255, 255, 255, .07);--el-read: rgba(255, 255, 255, .78);--el-warm: #ffc061}.art[data-shell=black]{--el-shell: #24262a;--el-top: #191b1e;--el-top-high: #2e3237;--el-edge: rgba(255, 255, 255, .09);--el-ring-off: rgba(255, 255, 255, .07);--el-glyph: rgba(255, 255, 255, .55);--el-btn: rgba(255, 255, 255, .05);--el-read: rgba(255, 255, 255, .72);--el-warm: #ffc061}.art[data-shell=white]{--el-shell: #e7e4dd;--el-top: #f2f0ea;--el-top-high: #ffffff;--el-edge: rgba(0, 0, 0, .1);--el-ring-off: rgba(0, 0, 0, .09);--el-glyph: rgba(0, 0, 0, .45);--el-btn: rgba(0, 0, 0, .04);--el-read: rgba(0, 0, 0, .72);--el-warm: #e07b00}.art[data-shell=charcoal]{--el-shell: #2b2d31;--el-glass: #08090b;--el-edge: rgba(255, 255, 255, .1);--el-glyph: rgba(255, 255, 255, .58);--el-btn: #3a3d42;--el-lens: #1b222c;--el-shutter: #5b5e63}.frame[data-shape=panel] .art svg{display:block;width:100%;height:auto}.frame[data-shape=show] .side,.frame[data-shape=panel] .side{display:grid;grid-template-columns:repeat(2,40px);align-content:center}.screen{cursor:pointer}.screen text{font-family:var(--ha-font-family-body, inherit);pointer-events:none}.screen .clock{font-weight:500;font-variant-numeric:tabular-nums;letter-spacing:-.5px}.screen .line{font-size:6.5px}.bar{fill:#38a0ff;opacity:0;transition:opacity .3s ease}.art[data-activity=listening] .bar,.art[data-activity=processing] .bar,.art[data-activity=responding] .bar{opacity:1}.art[data-activity=processing] .bar{animation:breathe 1.2s ease-in-out infinite}.bar[data-muted=true]{fill:var(--error-color, #db4437);opacity:1;animation:none}.lens{cursor:pointer}.lens circle:not(.hit),.lens rect{fill:var(--el-lens);stroke:#ffffff1f;stroke-width:.5}.lens[data-covered=true] circle:not(.hit),.lens[data-covered=true] rect{fill:var(--el-shutter)}.key .glyph path{stroke-width:1.1}svg{width:100%;height:100%;display:block}.segment{transition:fill .4s ease,opacity .4s ease}.segment[data-divisible=true]{cursor:pointer}.segment[data-picked=true]{stroke:var(--primary-text-color);stroke-width:2}.plain{padding:7px 12px;border:1px solid color-mix(in srgb,var(--primary-color) 45%,transparent);border-radius:10px;background:color-mix(in srgb,var(--primary-color) 12%,transparent);color:var(--primary-color);font:inherit;font-size:.82rem;cursor:pointer;white-space:nowrap}.plain:hover{background:color-mix(in srgb,var(--primary-color) 20%,transparent)}.plain.quiet{border-color:var(--divider-color);background:none;color:var(--secondary-text-color)}.plain.quiet:hover{background:var(--secondary-background-color)}.palette{flex-direction:column;align-items:stretch;gap:10px}.palette .top{display:flex;align-items:center;justify-content:space-between;gap:12px}.palette .name{white-space:nowrap}.palette .swatches{display:grid;grid-template-columns:repeat(auto-fit,minmax(24px,1fr));gap:6px}.palette .swatch{aspect-ratio:1;min-width:0;padding:0;border:2px solid transparent;border-radius:8px;cursor:pointer}.palette .swatch:hover{border-color:var(--primary-text-color)}.palette .sq{width:30px;height:30px;border-radius:8px}.palette .sq ha-icon{--mdc-icon-size: 18px}.halo{transition:opacity .4s ease}.art[data-activity=listening] .halo{animation:breathe 2s ease-in-out infinite}@keyframes breathe{0%,to{opacity:.35}50%{opacity:.8}}.hit{cursor:pointer;pointer-events:stroke}.btn{cursor:pointer}.face{fill:var(--el-btn)}.btn .glyph path{stroke:var(--el-glyph);stroke-width:1.6;fill:none;stroke-linecap:round}.btn .glyph circle{fill:var(--el-glyph)}.btn:hover .face{fill:var(--el-edge)}.btn[data-lit=true] .glyph path{stroke:var(--error-color, #db4437)}.btn[data-lit=true] .face{fill:color-mix(in srgb,var(--error-color, #db4437) 22%,transparent)}.side{grid-area:1 / 2;display:flex;flex-direction:column;gap:8px}.foot{grid-area:2 / 1 / 3 / 3;display:flex;align-items:stretch;justify-content:space-between;gap:12px;border-top:1px solid var(--divider-color);padding-top:12px}.label{display:flex;flex-direction:column;justify-content:center;min-width:0}.name{font-size:1.05rem;font-weight:500;color:var(--primary-text-color)}.status{font-size:.8rem;color:var(--secondary-text-color)}.tail{display:flex;gap:8px;padding-left:12px;border-left:1px solid var(--divider-color)}.sq{position:relative;width:40px;height:40px;flex:0 0 auto;display:grid;place-items:center;padding:0;border:1px solid var(--divider-color);border-radius:10px;background:none;cursor:pointer;color:inherit}.sq:hover{background:var(--secondary-background-color)}.sq ha-icon{--mdc-icon-size: 22px;color:var(--secondary-text-color);display:flex}.badge{position:absolute;right:3px;bottom:1px;font-size:.62rem;line-height:1;color:var(--secondary-text-color)}.missing{color:var(--secondary-text-color)}
`;var ri=`:host{display:flex;gap:18px;align-items:center;padding:14px;border-radius:14px;background:color-mix(in srgb,var(--primary-text-color) 5%,transparent)}.dial{width:190px;flex:0 0 auto;touch-action:none}svg{width:100%;height:auto;display:block}.arc-bed{fill:none;stroke:color-mix(in srgb,var(--primary-text-color) 10%,transparent);stroke-width:9;stroke-linecap:round}.arc-live{fill:none;stroke:var(--primary-color);stroke-width:9;stroke-linecap:round;transition:stroke-dasharray .5s ease,stroke .3s ease}.arc-live[data-over=true]{stroke:var(--success-color, #43a047)}.notch{stroke:var(--primary-text-color);stroke-width:3;stroke-linecap:round;cursor:grab}.capsule{fill:color-mix(in srgb,var(--primary-text-color) 14%,transparent);transition:fill .3s ease}.capsule[data-on=true]{fill:var(--primary-color)}.beam{fill:color-mix(in srgb,var(--primary-color) 16%,transparent);stroke:color-mix(in srgb,var(--primary-color) 40%,transparent)}.spoke{stroke:color-mix(in srgb,var(--primary-color) 35%,transparent);stroke-width:1.2}.slash{stroke:var(--error-color, #db4437);stroke-width:3;stroke-linecap:round}.side{flex:1 1 auto;min-width:0;display:flex;flex-direction:column;gap:10px}.reading{display:flex;align-items:baseline;gap:6px}.now{font-size:1.9rem;font-weight:500;font-variant-numeric:tabular-nums;color:var(--primary-text-color);line-height:1}.unit{font-size:.8rem;color:var(--secondary-text-color)}.now.cut{color:var(--error-color, #db4437)}.caption{margin-left:auto;padding:4px 10px;border-radius:10px;font-size:.75rem;background:color-mix(in srgb,var(--primary-text-color) 7%,transparent);color:var(--secondary-text-color)}.caption[data-over=true]{background:color-mix(in srgb,var(--success-color, #43a047) 18%,transparent);color:var(--success-color, #43a047)}.modes{display:flex;flex-direction:column;gap:6px}.mode{display:flex;align-items:center;gap:10px;padding:8px 10px;border:1px solid transparent;border-radius:12px;background:color-mix(in srgb,var(--primary-text-color) 6%,transparent);color:var(--secondary-text-color);font:inherit;font-size:.85rem;cursor:pointer;text-align:left}.mode:hover{background:color-mix(in srgb,var(--primary-text-color) 11%,transparent)}.mode[data-on=true]{border-color:color-mix(in srgb,var(--primary-color) 45%,transparent);background:color-mix(in srgb,var(--primary-color) 15%,transparent);color:var(--primary-color)}.mode svg{width:26px;flex:0 0 auto}.gate{font-size:.78rem;color:var(--secondary-text-color)}.gate b{color:var(--primary-text-color);font-weight:500;font-variant-numeric:tabular-nums}
`;var si=26,Be=135,We=270,S=100,A=100,X=84,qe=38,R=class extends b{constructor(){super(...arguments);this.level="";this.floor="";this.gate="";this.mode="";this.muted=!1;this.held=null;this.grab=e=>{let t=e.currentTarget;t.setPointerCapture(e.pointerId);let r=this.hass.states[this.gate]?.attributes??{},a=r.min??0,n=r.max??20,l=r.step??1,d=this.number(this.floor)??0,h=this.number(this.level)??0,f=Math.max(d+si,h+3),g=_=>{let K=t.getBoundingClientRect(),Cr=_.clientX-K.left-K.width/2,Mr=_.clientY-K.top-K.height/2,at=Math.atan2(Mr,Cr)*180/Math.PI-Be;for(;at<0;)at+=360;let Hr=yt(Math.min(at,We)/We);return Math.max(a,Math.min(n,Math.round(Hr*(f-d)/l)*l))},w=_=>{this.held=g(_)},$=_=>{t.removeEventListener("pointermove",w),t.removeEventListener("pointerup",$),t.removeEventListener("pointercancel",$);let K=g(_);this.held=null,this.hass.callService("number","set_value",{entity_id:this.gate,value:K})};t.addEventListener("pointermove",w),t.addEventListener("pointerup",$),t.addEventListener("pointercancel",$),this.held=g(e)}}render(){let e=this.number(this.level),t=this.number(this.floor),r=this.held??this.number(this.gate);if(e===null||t===null||r===null)return p;let a=this.hass.states[this.mode],n=ai(a?.state),l=Math.max(t+si,e+3),d=yt((e-t)/(l-t)),h=yt(r/(l-t)),f=e>=t+r&&!this.muted;return o`
      <div class="dial" @pointerdown=${this.grab}>
        <svg viewBox="0 0 200 200" role="img" aria-label="Microphone array">
          <path class="arc-bed" d=${ni()} pathLength="100"></path>
          ${this.muted?p:v`<path
                class="arc-live"
                data-over=${String(f)}
                d=${ni()}
                pathLength="100"
                stroke-dasharray=${`${d*100} 100`}
              ></path>`}
          ${this.muted?p:rs(h)} ${n==="beam"?is():p}
          ${n==="sum"?ts():p} ${Qr(n,this.muted)}
          ${this.muted?v`<path class="slash" d="M${S-30} ${A+30}L${S+30} ${A-30}"></path>`:p}
        </svg>
      </div>

      <div class="side">
        <div class="reading">
          ${this.muted?o`<span class="now cut">Cut</span>`:o`<span class="now">${e.toFixed(1)}</span><span class="unit">dB</span>
                <span class="caption" data-over=${String(f)}>
                  ${f?"Over the gate":"Quiet"}
                </span>`}
        </div>

        <div class="modes">
          ${(a?.attributes.options??[]).map(g=>o`<button
              class="mode"
              data-on=${String(g===a?.state)}
              @click=${()=>this.hass.callService("select","select_option",{entity_id:this.mode,option:g})}
            >
              <svg viewBox="0 0 40 40">${es(ai(g))}</svg>
              <span>${g}</span>
            </button>`)}
        </div>

        <div class="gate">Gate <b>${r} dB</b> over a floor of <b>${t.toFixed(0)} dB</b></div>
      </div>
    `}number(e){let t=Number(this.hass?.states?.[e]?.state);return Number.isFinite(t)?t:null}};R.styles=y(ri),c([u({attribute:!1})],R.prototype,"hass",2),c([u()],R.prototype,"level",2),c([u()],R.prototype,"floor",2),c([u()],R.prototype,"gate",2),c([u()],R.prototype,"mode",2),c([u({type:Boolean})],R.prototype,"muted",2),c([m()],R.prototype,"held",2),R=c([x("echolocal-array")],R);function ai(s){let i=(s??"").toLowerCase();return i.includes("center")||i.includes("centre")?"one":i.includes("beam")?"beam":"sum"}function Qr(s,i){return[[S,A],...Array.from({length:6},(t,r)=>{let a=(-90+r*60)*Math.PI/180;return[S+qe*Math.cos(a),A+qe*Math.sin(a)]})].map(([t,r],a)=>v`<circle class="capsule" data-on=${String(!i&&(s!=="one"||a===0))}
      cx=${t.toFixed(1)} cy=${r.toFixed(1)} r=${a===0?7:5.5}></circle>`)}function es(s){let i=[[20,20],...Array.from({length:6},(e,t)=>{let r=(-90+t*60)*Math.PI/180;return[20+12*Math.cos(r),20+12*Math.sin(r)]})];return v`
    ${s==="beam"?v`<path class="beam" d="M20 20C9 11 13 1 20 1C27 1 31 11 20 20Z"></path>`:p}
    ${i.map(([e,t],r)=>v`<circle class="capsule" data-on=${String(s!=="one"||r===0)}
          cx=${e.toFixed(1)} cy=${t.toFixed(1)} r=${r===0?3.4:2.6}></circle>`)}`}function ts(){return Array.from({length:6},(s,i)=>{let e=(-90+i*60)*Math.PI/180;return v`<line class="spoke" x1=${S} y1=${A}
      x2=${(S+qe*Math.cos(e)).toFixed(1)} y2=${(A+qe*Math.sin(e)).toFixed(1)}></line>`})}function is(){return v`<path class="beam" d="M${S} ${A}C${S-34} ${A-30} ${S-24} ${A-66} ${S} ${A-66}C${S+24} ${A-66} ${S+34} ${A-30} ${S} ${A}Z"></path>`}function ni(){let s=Be*Math.PI/180,i=(Be+We)*Math.PI/180;return`M${(S+X*Math.cos(s)).toFixed(2)} ${(A+X*Math.sin(s)).toFixed(2)}
    A${X} ${X} 0 1 1 ${(S+X*Math.cos(i)).toFixed(2)} ${(A+X*Math.sin(i)).toFixed(2)}`}function rs(s){let i=(Be+s*We)*Math.PI/180,e=X-8,t=X+8;return v`<line class="notch"
    x1=${(S+e*Math.cos(i)).toFixed(1)} y1=${(A+e*Math.sin(i)).toFixed(1)}
    x2=${(S+t*Math.cos(i)).toFixed(1)} y2=${(A+t*Math.sin(i)).toFixed(1)}></line>`}function yt(s){return Math.max(0,Math.min(1,s))}var oi=`:host{display:inline-flex;flex:0 0 auto;vertical-align:middle}button{width:15px;height:15px;display:grid;place-items:center;padding:0;border:1px solid color-mix(in srgb,var(--primary-text-color) 26%,transparent);border-radius:50%;background:none;color:var(--secondary-text-color);font:inherit;font-size:9px;font-weight:700;line-height:1;cursor:help;opacity:.65}button:hover{opacity:1;color:var(--primary-color);border-color:var(--primary-color)}ha-tooltip{--max-width: min(300px, 70vw);--ha-tooltip-font-size: .79rem;--ha-tooltip-font-weight: 400;--ha-tooltip-line-height: 1.45;--ha-tooltip-padding: 11px 13px;--ha-tooltip-border-radius: 11px}
`;var as=0,he=class extends b{constructor(){super(...arguments);this.text="";this.anchor=`ask-${++as}`}render(){return this.text?o`
      <button id=${this.anchor} aria-label="What this does" @click=${this.swallow}>?</button>
      <ha-tooltip for=${this.anchor} trigger="click" placement="top">${this.text}</ha-tooltip>
    `:p}swallow(e){e.stopPropagation(),e.preventDefault()}};he.styles=y(oi),c([u()],he.prototype,"text",2),he=c([x("echolocal-bubble")],he);var li=`.sheet{transition:width .2s ease}.head{display:flex;align-items:center;gap:14px;margin-bottom:16px}.crest{width:44px;height:44px;flex:0 0 auto;display:grid;place-items:center;border-radius:14px;background:color-mix(in srgb,var(--primary-color) 16%,transparent)}.crest ha-icon{--mdc-icon-size: 24px;color:var(--primary-color);display:flex}.titles{flex:1 1 auto;min-width:0}.crown{display:flex;align-items:center;gap:12px;flex:0 0 auto}.crown ha-control-switch{width:52px;--control-switch-thickness: 30px;--control-switch-border-radius: 15px}.crown ha-control-switch.warn{--control-switch-on-color: var(--error-color, #db4437)}.crown .lamp{max-width:168px;--control-select-thickness: 30px;--control-select-border-radius: 15px}.crown ha-icon-button{color:var(--primary-color)}.crown.picture{margin-left:auto;padding:0;border:none;background:none;cursor:pointer}.crown.picture img{display:block;width:160px;aspect-ratio:16 / 9;object-fit:cover;border-radius:8px;background:var(--secondary-background-color)}.title{display:flex;align-items:center;gap:8px;font-size:1.25rem;font-weight:500;color:var(--primary-text-color);line-height:1.2}.explained{position:relative}.explained>:not(echolocal-bubble){padding-right:21px}.explained>echolocal-bubble.corner{position:absolute;top:1px;right:0;z-index:3}.subtitle{font-size:.8rem;color:var(--secondary-text-color)}.hero{margin-bottom:16px}.groups{columns:2 300px;column-gap:24px}.group{break-inside:avoid;overflow:hidden;margin-bottom:14px}.section{display:flex;align-items:center;gap:8px;margin:0 0 8px 2px;font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.09em;color:var(--secondary-text-color)}.section:before{content:"";width:3px;height:12px;border-radius:2px;background:var(--primary-color);opacity:.6}.tile{display:flex;flex-direction:column;gap:9px;padding:10px 14px;margin-bottom:5px;border-radius:14px;background:color-mix(in srgb,var(--primary-text-color) 5%,transparent)}.top{display:flex;align-items:center;gap:12px}.icon{width:32px;height:32px;flex:0 0 auto;display:grid;place-items:center;border-radius:10px;background:color-mix(in srgb,var(--primary-text-color) 7%,transparent);transition:background .2s ease}.icon ha-icon{--mdc-icon-size: 19px;color:var(--secondary-text-color);display:flex;transition:color .2s ease}.tile[data-active=true] .icon{background:color-mix(in srgb,var(--primary-color) 20%,transparent)}.tile[data-active=true] .icon ha-icon{color:var(--primary-color)}.tile[data-alert=true] .icon{background:color-mix(in srgb,var(--error-color, #db4437) 20%,transparent)}.tile[data-alert=true] .icon ha-icon{color:var(--error-color, #db4437)}.named{flex:1 1 auto;min-width:0;display:flex;align-items:center;gap:7px}.name{flex:0 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--primary-text-color)}.trail{flex:0 0 auto;display:flex;align-items:center;gap:6px}.trail ha-control-switch{width:44px;--control-switch-thickness: 26px;--control-switch-border-radius: 13px}ha-control-select{--control-select-thickness: 34px;white-space:nowrap}.trail ha-control-select-menu{min-width:0;max-width:210px;--control-select-menu-height: 34px}ha-control-slider{--control-slider-thickness: 34px}.reading{background:none;border:none;padding:0;font:inherit;font-size:1.15rem;font-weight:500;font-variant-numeric:tabular-nums;color:var(--primary-text-color);cursor:pointer}.reading:hover{color:var(--primary-color)}.unit{font-size:.78rem;color:var(--secondary-text-color)}.reading.version{max-width:18ch;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.85rem;font-weight:400}.offer{display:flex;align-items:center;gap:10px}.note{flex:1 1 auto;min-width:0;font-size:.78rem;color:var(--secondary-text-color);word-break:break-all}.lines{padding:0;border:none;background:none;font:inherit;font-size:.82rem;font-variant-numeric:tabular-nums;color:var(--primary-text-color);text-align:left;cursor:pointer;line-height:1.5;overflow-wrap:anywhere}.lines:hover{color:var(--primary-color)}.empty{color:var(--secondary-text-color)}
`;var Ke=`.pills{display:flex;flex-wrap:wrap;gap:5px}.pill{padding:6px 11px;border:1px solid transparent;border-radius:10px;background:color-mix(in srgb,var(--primary-text-color) 6%,transparent);color:var(--secondary-text-color);font:inherit;font-size:.8rem;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pill:hover{background:color-mix(in srgb,var(--primary-text-color) 12%,transparent)}.pill[data-on=true]{border-color:color-mix(in srgb,var(--primary-color) 45%,transparent);background:color-mix(in srgb,var(--primary-color) 15%,transparent);color:var(--primary-color)}.pill:disabled{opacity:.4;cursor:default}
`;var ci=`:host{display:block;padding:14px;border-radius:14px;background:color-mix(in srgb,var(--primary-text-color) 5%,transparent)}.dim{display:flex;align-items:center;gap:12px;padding-bottom:12px;margin-bottom:12px;border-bottom:1px solid color-mix(in srgb,var(--primary-text-color) 10%,transparent);font-size:.85rem;color:var(--secondary-text-color)}.dim b{font-variant-numeric:tabular-nums;color:var(--primary-text-color);font-weight:500}.dim ha-control-slider{flex:1 1 auto;min-width:0;--control-slider-thickness: 28px}.hue{display:flex;align-items:center;gap:12px;padding-bottom:12px;margin-bottom:12px;border-bottom:1px solid color-mix(in srgb,var(--primary-text-color) 10%,transparent);font-size:.85rem;color:var(--secondary-text-color)}.swatches{display:flex;flex-wrap:wrap;gap:6px}.swatch{width:24px;height:24px;padding:0;border:2px solid transparent;border-radius:50%;cursor:pointer}.swatch[data-on=true]{border-color:var(--primary-text-color)}.when{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:6px;margin-bottom:12px}.situation{display:flex;align-items:center;gap:9px;padding:9px 11px;border:1px solid transparent;border-radius:12px;background:color-mix(in srgb,var(--primary-text-color) 6%,transparent);color:var(--secondary-text-color);font:inherit;cursor:pointer;text-align:left;min-width:0}.situation:hover{background:color-mix(in srgb,var(--primary-text-color) 12%,transparent)}.situation[data-on=true]{border-color:color-mix(in srgb,var(--primary-color) 45%,transparent);background:color-mix(in srgb,var(--primary-color) 14%,transparent)}.situation ha-icon{--mdc-icon-size: 19px;flex:0 0 auto;display:flex}.situation .text{min-width:0}.situation .label{font-size:.72rem;text-transform:uppercase;letter-spacing:.06em}.situation .shows{font-size:.88rem;color:var(--primary-text-color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.situation[data-on=true] .shows{color:var(--primary-color)}.caption{margin-bottom:8px;font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.09em;color:var(--secondary-text-color)}.pills{display:grid;grid-template-columns:repeat(auto-fill,minmax(104px,1fr))}
`;var Ve=[["White",[255,255,255]],["Warm",[255,190,120]],["Red",[255,40,40]],["Orange",[255,130,20]],["Yellow",[250,230,60]],["Green",[60,220,90]],["Teal",[40,220,200]],["Blue",[60,140,255]],["Violet",[150,90,255]],["Pink",[255,90,200]]];function cs(s,i){return Array.isArray(s)&&i.every((e,t)=>s[t]===e)}var O=class extends b{constructor(){super(...arguments);this.light="";this.muted="";this.failure="";this.room="";this.target="rest"}render(){let e=this.hass.states[this.light];if(!e)return p;let t=this.situations(),r=t.find(n=>n.key===this.target)??t[0],a=e.attributes.brightness??255;return o`
      <div class="dim">
        <span>Brightness</span>
        <ha-control-slider
          min="1"
          max="255"
          .value=${a}
          .disabled=${e.state!=="on"}
          @value-changed=${n=>this.hass.callService("light","turn_on",{entity_id:this.light,brightness:n.detail.value})}
        ></ha-control-slider>
        <b>${Math.round(a/255*100)}%</b>
      </div>

      <div class="hue">
        <span>Color</span>
        <div class="swatches">
          ${Ve.map(([n,l])=>o`<button
              class="swatch"
              title=${n}
              aria-label=${n}
              data-on=${String(cs(e.attributes.rgb_color,l))}
              style=${`background:rgb(${l.join(",")})`}
              @click=${()=>this.hass.callService("light","turn_on",{entity_id:this.light,rgb_color:l})}
            ></button>`)}
        </div>
      </div>

      <div class="when">
        ${t.map(n=>o`<button
            class="situation"
            data-on=${String(n.key===r.key)}
            @click=${()=>this.target=n.key}
          >
            <ha-icon .icon=${n.icon}></ha-icon>
            <div class="text">
              <div class="label">${n.label}</div>
              <div class="shows">${this.showing(n)||"\u2014"}</div>
            </div>
          </button>`)}
      </div>

      <div class="caption">${r.label} shows</div>
      <div class="pills">
        ${this.options(r).map(n=>o`<button
            class="pill"
            data-on=${String(n===this.showing(r))}
            @click=${()=>this.choose(r,n)}
          >
            ${n}
          </button>`)}
      </div>
    `}situations(){return[{key:"rest",label:"At rest",icon:"mdi:record-circle-outline"},{key:"muted",label:"Muted",icon:"mdi:microphone-off",entity:this.muted},{key:"failure",label:"On failure",icon:"mdi:alert-circle-outline",entity:this.failure},{key:"room",label:"Follows the room",icon:"mdi:motion-sensor",entity:this.room}].filter(t=>t.key==="rest"||t.entity&&this.hass.states[t.entity])}showing(e){if(e.entity)return this.hass.states[e.entity]?.state??"";let t=this.hass.states[this.light];return t?.state!=="on"?"":t.attributes.effect??""}options(e){return(e.entity?this.hass.states[e.entity]?.attributes.options:this.hass.states[this.light]?.attributes.effect_list)??[]}choose(e,t){if(!e.entity){this.hass.callService("light","turn_on",{entity_id:this.light,effect:t});return}this.hass.callService("select","select_option",{entity_id:e.entity,option:t})}};O.styles=[y(Ke),y(ci)],c([u({attribute:!1})],O.prototype,"hass",2),c([u()],O.prototype,"light",2),c([u()],O.prototype,"muted",2),c([u()],O.prototype,"failure",2),c([u()],O.prototype,"room",2),c([m()],O.prototype,"target",2),O=c([x("echolocal-appearance")],O);var ds={mic_mute:"Cuts the microphones in hardware. The device cannot hear anything at all while this is on, including its wake word \u2014 it is a switch on the power to the capsules, not a software mute.",microphone_gain:"How much the capsules are amplified before anything else happens. Raise it in a large or quiet room; lower it if speech close to the device clips and comes out distorted.",microphone_mixing:"How the seven capsules are combined into the one channel the speech engine hears. Beamforming favours whichever direction someone is talking from and rejects the rest of the room; averaging treats every direction equally and is steadier when several people talk.",microphone_leveling:"Evens out loud and quiet talkers so a whisper across the room and a shout beside it arrive at similar volume. Helps transcription, and costs a little dynamic range.",microphone_cancel_echo:"Subtracts what the speaker is playing from what the microphones hear, so the device can be interrupted while it is talking and does not answer its own reply.",microphone_noise_reduction:"Takes the steady part of the room \u2014 a fan, traffic, air conditioning \u2014 out of what the microphones heard. Try turning it on in a room with background noise.",microphone_sensitivity:"How much louder than the room's background noise a sound has to be before the light ring and the on-screen listening animation react to it. Raise it if they react to the room itself; lower it if they miss quiet sounds.",room_level:"The loudest the room got since the last report, in decibels below full scale.",room_floor:"The room's background noise, which the device learns as it listens. It follows the room, so a fridge switching on raises it.",mute_led_brightness:"How bright the red ring is while the microphones are cut. Dim is enough to see in a dark room without lighting it up.",mute_sound:"What the device plays when the microphones are cut or restored. Mute tones fall for muting and rise for unmuting, so the two are told apart without looking; None mutes silently.",stop_word_sensitivity:"How sure the device has to be before it takes an interruption as the word stop. Lower it if saying stop over a reply does not land.",ring:"The whole ring, as one light. Turning it off leaves the device working normally and silent about it.",segment:"One of the twelve segments, addressable on its own. They ship switched off in Home Assistant because twelve extra lights in every list is rarely what anyone wants \u2014 enable one and it can be coloured individually from the card.",ring_muted:"What the ring does while the microphones are cut. Something visible is worth choosing: a muted device that looks identical to a listening one is how people end up talking to a device that cannot hear them.",failure_effect:"What the ring does when a turn fails \u2014 no network, no pipeline, nothing understood. Distinct from the normal colours on purpose.",room_reaction:"Lets the ring track how loud the room is while the device is listening, so somebody can see that it is hearing them before it answers.",headphones:"Sends audio out of the jack instead of the speaker. The speaker goes quiet while this is on.",noise_layer:"Plays a generated sound the device makes itself \u2014 rain, a fan, a brook. Nothing is streamed and nothing is stored: it is synthesised as it plays, so it never loops or runs out. Two layers can overlap, so rain over a fan is one choice in each.",media_on_turn:"What happens to music when someone says the wake word. Ducking drops the volume and keeps playing, which resumes on the same note; stopping does not.",media_duck_level:"How far the volume drops while the device is listening or talking. Far enough that the microphones are not fighting the music, not so far that the room goes silent.",cast_receiver:"Lets phones and browsers cast to the device.",youtube_live_delay:"How far behind live a YouTube live stream plays, in seconds.",youtube_sponsorblock:"SponsorBlock categories to skip in YouTube videos, separated by commas.",backlight:"How bright the screen is.",screen_mode:"Sets the brightness from the room's light.",drawer_edge:"Which edge of the screen the dock sits on.",idle_after:"How long the screen waits with nobody using it before the idle screen comes up.",poster_every:"How often the next photo comes up.",rtsp:"Serves the camera as an RTSP stream on the network.",camera_keyframe:"Seconds between full frames.",camera_banding:"Set to your mains frequency if lights flicker in the picture.",bluetooth_speaker:"Lets phones pair with the device and play through it.",voice_resampling:"How the reply's audio is resampled to what the speaker wants. Better quality costs a little more work on a device that has four small cores.",wake_word:"What this assistant listens for. The list is what the device has on disk plus whatever Home Assistant is offering from its custom_wake_words directory.",wake_threshold:"How sure the device has to be before it decides it heard its wake word. Lower it if it misses you; raise it if the television sets it off.",follow_up:"Keeps listening for a moment after a reply, so a second question needs no second wake word.",max_listen:"How long the device will wait for someone to finish talking before giving up on the turn.",max_think:"How long to wait for Home Assistant's pipeline to answer. Generous is usually right \u2014 a slow answer beats a turn that dies just before it arrives.",wake_effect:"What the ring does at this point in a turn. Cosmetic, but it is how somebody knows the device heard them.",thinking_effect:"What the ring does while Home Assistant works on the answer. Default leaves it as the ring effect, played backwards.",replying_effect:"What the ring does while the answer plays. Default leaves it as the ring effect, played backwards.",wake_tone:"A short sound at this point in a turn. Some people want the confirmation; some find it grating.",reply_buffer:"How much of a reply to collect before starting to play it. More is steadier on a poor network, at the cost of answering a beat later.",reply_delivery:"Whether a reply starts playing as it arrives or once all of it has. Streaming is faster to start and stutters on a bad connection.",update_channel:"Which releases this device is offered. Stable only, or the ones that are still being tried out.",check_for_updates:"Looks now rather than waiting for the next scheduled check. Nothing is installed by pressing it.",bluetooth_proxy:"Forwards nearby Bluetooth advertisements to Home Assistant, so this device extends Bluetooth coverage into its room. It costs some radio time it would otherwise spend on wifi.",metrics_interval:"How often the device reports its own temperature, memory and load. Often enough to be useful; every report is work the device does instead of listening.",purge_cache:"Deletes what Android's runtime has cached. It comes back on its own, so this buys disk space for a while rather than permanently.",test_playback:"Plays a short sound, which is the quickest way to find out whether the speaker, the volume and the output route are all what you think they are.",remote_adb:"Opens Android's debugging port over the network. Off by default, and worth leaving off: it is an unauthenticated way onto the device for anything on the same network.",insecure_tls:"Lets the device accept a certificate it cannot verify, which is what talking to a Home Assistant with a self-signed one needs. It also means anything on the network can pose as that server, so it is worth turning off again once a certificate the device trusts is in place.",vad_sensitivity:"How readily the device decides somebody has stopped talking. Tighter ends a turn sooner and can cut you off mid-sentence.",wifi_signal:"How strong the connection to the access point is. Above about -70 dBm is comfortable; below -80 dBm is where audio starts arriving late.",cpu_temperature:"The chip's own temperature. These run warm by design \u2014 it is a sustained climb rather than a number that matters.",load_average:"How much work is queued across the cores. Listening for a wake word is continuous work, so this is never zero.",memory_available:"How much memory is free. Wake models and the audio path are what use it.",free_space:"Disk left. Wake models and saved recordings are what fill it.",update_status:"What the last self-update did. Worth reading when a device is on an older version than the rest."},ps={array:"The seven capsules and what the room sounds like to them. The arc is how loud the room is right now; the notch is how far above the room's own noise floor something has to be before the device treats it as speech. Drag the notch, then talk from where you normally would and watch whether the arc crosses it.",appearance:"Ring controls, current brighness and color, active and conditional effects.",noise:"Sounds the device generates itself, mixed live rather than played from a file, so nothing loops. Two layers overlap \u2014 pick rain in one and a fan in the other.",volume:"The speaker's volume, in the same thirty steps the buttons on the device move it through, so this dial and the device agree.",history:"What the device has been hearing. Rows rebuilt from Home Assistant's recorder show what was said; rows the device itself reported also show where the time went and can be played back."},hs={microphone:"The seven microphones and how the room sounds to them. Everything here changes what the device hears before a word of it reaches Home Assistant, so it is the first place to look when it mishears or does not wake at all.",ring:"The twelve-segment light. None of it changes what the device does \u2014 it changes what somebody in the room can tell about it, which is why the muted and failed colours are worth setting.",playback:"The speaker: what comes out of it, how loud, and what happens to music when somebody talks to the device.",screen:"How the screen looks: brightness, theme, the clock, and what it shows when nobody is using it. Tap the screen on the card to open this.",poster:"Photos from an Immich server. Fill in the server and API key, then pick albums or tags.",camera:"The camera's picture and stream. Tap the picture for the live view.",assistant:"One wake word and the turn that follows it. A device can run more than one, each with its own word, sensitivity and timings, which is how one device answers to two names.",device:"The device itself rather than anything it hears or says: which releases it takes, what else it does for the network, and the housekeeping.",diagnostics:"What the device reports about itself. Nothing here is a setting \u2014 it is the evidence, and it is what to read before changing anything else.",activity:"The last few turns: what woke the device, what it heard, and what it said back. Rows the device itself reported also show where the time went, and can be played back or saved."};function di(s){return ds[s]}function pi(s){return ps[s]}function hi(s){return hs[s]??""}var mi="turn_audio",fi="recordings",gi="logs",bi="tone_write",us=[{key:"listen_ms",label:"Listen"},{key:"think_ms",label:"Think"},{key:"speak_ms",label:"Reply"}];function ue(s){return us.map(({key:i,label:e})=>({key:i,label:e,ms:Number(s[i]??0)})).filter(i=>i.ms>0)}function me(s){return ue(s).reduce((i,e)=>i+e.ms,0)}function yi(s){let i=s;if(!i||i.version!=="1"||!i.wake_word)return null;let e={version:1,device:i.device_id??"",id:i.id??"",slot:ui(i.slot)??1,wake_word:i.wake_word,outcome:i.outcome??"completed"};i.heard&&(e.heard=i.heard),i.reply&&(e.reply=i.reply);for(let t of["listen_ms","think_ms","speak_ms","audio_seconds"]){let r=ui(i[t]);r!==void 0&&(e[t]=r)}return e}function ui(s){if(s===void 0||s==="")return;let i=Number(s);return Number.isFinite(i)?i:void 0}function Ge(s,i,e,t){if(!s.connection)return Promise.resolve(()=>{});let r={type:"logbook/event_stream",start_time:i.toISOString()};return e.length&&(r.device_ids=e),s.connection.subscribeMessage(a=>{let n=[];for(let l of a.events??[]){let d=yi(l);d&&n.push({at:l.when*1e3,turn:d})}t(n)},r)}var xi=`:host{display:block}.caption{display:flex;align-items:baseline;gap:8px;margin-bottom:8px;font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.09em;color:var(--secondary-text-color)}.caption span{margin-left:auto;text-transform:none;letter-spacing:0;font-weight:400;font-size:.75rem}.turns{display:flex;flex-direction:column;gap:4px;max-height:300px;overflow:auto;mask-image:linear-gradient(to bottom,black calc(100% - 16px),transparent)}.turn{display:grid;grid-template-columns:auto 1fr auto;gap:4px 10px;padding:9px 12px;border-radius:12px;background:color-mix(in srgb,var(--primary-text-color) 5%,transparent)}.when{font-size:.78rem;font-variant-numeric:tabular-nums;color:var(--secondary-text-color);white-space:nowrap}.wake{font-size:.78rem;color:var(--primary-color)}.right{grid-column:3;grid-row:1;display:flex;align-items:center;gap:8px}.outcome{font-size:.72rem;color:var(--secondary-text-color);white-space:nowrap}.outcome[data-bad=true]{color:var(--error-color, #db4437)}.said,.said-back,.bar{grid-column:2 / span 2}.said{font-size:.85rem;color:var(--primary-text-color)}.said-back{font-size:.85rem;color:var(--secondary-text-color)}.said-back:before{content:"\\21b3  ";opacity:.6}.bar{display:flex;height:20px;margin-top:6px;border-radius:5px;overflow:hidden;background:color-mix(in srgb,var(--primary-text-color) 8%,transparent)}.slice{min-width:2px;display:flex;align-items:center;justify-content:center;overflow:hidden;font-size:.68rem;font-variant-numeric:tabular-nums;color:var(--text-primary-color, #fff);white-space:nowrap}.slice[data-phase=listen_ms]{background:color-mix(in srgb,var(--primary-color) 55%,transparent)}.slice[data-phase=think_ms]{background:color-mix(in srgb,var(--primary-text-color) 30%,transparent)}.slice[data-phase=speak_ms]{background:var(--success-color, #43a047)}.legend{display:flex;flex-wrap:wrap;gap:14px;margin-bottom:10px;font-size:.7rem;color:var(--secondary-text-color)}.key{display:flex;align-items:center;gap:5px}.dot{width:9px;height:9px;border-radius:2px}.none{padding:10px 0;font-size:.82rem;color:var(--secondary-text-color)}.loading{display:flex;justify-content:center;padding:32px 0}
`;var vt=new Map;function wi(s){return vt.get(s)}var fs=6e4,gs=6e3,vi=new Map,xt=new Map;function $i(s,i){let e=vi.get(i);if(e&&Date.now()-e.at<fs)return Promise.resolve(e.ids);let t=xt.get(i);if(t)return t;let r=ys(bs(s,i),gs).catch(()=>new Set).then(a=>(vi.set(i,{at:Date.now(),ids:a}),a)).finally(()=>xt.delete(i));return xt.set(i,r),r}async function bs(s,i){let t=(await s.callService("esphome",i,{},void 0,!0,!0))?.response;return t?.version===1&&Array.isArray(t.ids)?new Set(t.ids):new Set}function ys(s,i){return new Promise((e,t)=>{let r=setTimeout(()=>t(new Error("timeout")),i);s.then(a=>{clearTimeout(r),e(a)},a=>{clearTimeout(r),t(a)})})}function le(s,i,e){let r=`${i.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}_${e}`;return s?.services?.esphome?.[r]?r:void 0}async function ki(s,i,e){let t=vt.get(e);if(t)return t;let r=[],a="audio/wav",n=1;for(let d=0;d<Math.min(n,64);d++){let h=await xs(s,i,e,d);if(!h)return null;n=h.pages||1,a=h.mime||a,r.push(vs(h.data))}let l=URL.createObjectURL(new Blob(r,{type:a}));return vt.set(e,l),l}async function xs(s,i,e,t){try{let a=(await s.callService("esphome",i,{id:e,page:t},void 0,!0,!0))?.response;return a?.version===1&&typeof a.data=="string"?a:null}catch{return null}}function vs(s){let i=atob(s),e=new Uint8Array(i.length);for(let t=0;t<i.length;t++)e[t]=i.charCodeAt(t);return e}var _i=`:host{display:flex;gap:6px;flex:0 0 auto}button{flex:0 0 auto;width:28px;height:28px;display:grid;place-items:center;padding:0;border:1px solid color-mix(in srgb,var(--primary-color) 40%,transparent);border-radius:50%;background:color-mix(in srgb,var(--primary-color) 12%,transparent);cursor:pointer}button.keep{border-color:color-mix(in srgb,var(--primary-text-color) 18%,transparent);background:color-mix(in srgb,var(--primary-text-color) 5%,transparent)}button ha-icon{--mdc-icon-size: 16px;color:var(--primary-color);display:flex}button.keep ha-icon{color:var(--secondary-text-color)}.gone{display:flex;opacity:.4}.gone ha-icon{--mdc-icon-size: 16px;color:var(--secondary-text-color);display:flex}
`;var fe=null,$s=5*6e4,H=class extends b{constructor(){super(...arguments);this.device="";this.turn="";this.filename="recording.wav";this.at=0;this.busy=!1;this.playing=!1;this.gone=!1;this.play=async()=>{if(this.playing){fe?.audio.pause();return}let e=await this.fetch();if(!e)return;fe?.stop();let t=new Audio(e),r=()=>{this.playing=!1,fe?.audio===t&&(fe=null)};t.addEventListener("ended",r),t.addEventListener("pause",r),fe={audio:t,stop:()=>t.pause()},this.playing=!0,t.play().catch(r)};this.save=async()=>{let e=await this.fetch();if(!e)return;let t=document.createElement("a");t.href=e,t.download=this.filename,t.click()}}disconnectedCallback(){super.disconnectedCallback(),this.playing&&fe?.audio.pause()}updated(){if(!this.hass||!this.turn||this.checkedTurn===this.turn)return;if(this.checkedTurn=this.turn,this.present=void 0,this.gone=!1,this.at&&Date.now()-this.at<$s){this.present=!0;return}let e=this.device?le(this.hass,this.device,fi):void 0;e&&$i(this.hass,e).then(t=>{this.checkedTurn===this.turn&&(this.present=t.has(this.turn))})}render(){return!this.turn||!this.action()||this.present!==!0?p:this.gone?o`<span class="gone" title="The device no longer has this recording">
        <ha-icon icon="mdi:playlist-remove"></ha-icon>
      </span>`:o`
      <button
        aria-label=${this.playing?"Stop the recording":"Play the recording"}
        @click=${this.play}
      >
        <ha-icon
          .icon=${this.busy?"mdi:timer-outline":this.playing?"mdi:pause":"mdi:play"}
        ></ha-icon>
      </button>
      <button class="keep" aria-label="Save the recording" @click=${this.save}>
        <ha-icon icon="mdi:tray-arrow-down"></ha-icon>
      </button>
    `}action(){return this.device?le(this.hass,this.device,mi):void 0}async fetch(){let e=wi(this.turn);if(e)return e;let t=this.action();if(!t)return null;this.busy=!0;try{let r=await ki(this.hass,t,this.turn);return this.gone=!r,r||this.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:"That recording is no longer on the device."},bubbles:!0,composed:!0})),r}finally{this.busy=!1}}};H.styles=y(_i),c([u({attribute:!1})],H.prototype,"hass",2),c([u()],H.prototype,"device",2),c([u()],H.prototype,"turn",2),c([u()],H.prototype,"filename",2),c([u({type:Number})],H.prototype,"at",2),c([m()],H.prototype,"busy",2),c([m()],H.prototype,"playing",2),c([m()],H.prototype,"present",2),c([m()],H.prototype,"gone",2),H=c([x("echolocal-recording")],H);var ks=14,N=class extends b{constructor(){super(...arguments);this.device="";this.deviceId="";this.live=[];this.asked=!1;this.loading=!0}updated(){this.asked||!this.hass||!this.deviceId||(this.asked=!0,this.listen())}disconnectedCallback(){super.disconnectedCallback(),this.stop?.()}render(){let e=this.merged(),t=e.some(r=>r.turn&&ue(r.turn).length>0);return o`
      <div class="caption">
        Recent turns
        ${e.length?o`<span>${e.length===1?"1 turn":`${e.length} turns`}</span>`:p}
      </div>
      ${t?o`<div class="legend">
            ${[["listen_ms","Listen"],["think_ms","Think"],["speak_ms","Reply"]].map(([r,a])=>o`<span class="key"
                ><span class="dot slice" data-phase=${r}></span>${a}</span
              >`)}
          </div>`:p}
      ${e.length?o`<div class="turns">${e.map(r=>this.row(r,this.scale(e)))}</div>`:this.loading?o`<div class="loading"><ha-spinner size="medium"></ha-spinner></div>`:o`<div class="none">No recent activity found.</div>`}
    `}scale(e){return Math.max(1,...e.map(t=>t.turn?me(t.turn):0))}row(e,t){let r=e.turn,a=r?ue(r):[],n=r?me(r):0;return o`<div class="turn">
      <div class="when">${_s(e.at)}</div>
      <div class="wake">${e.wake}</div>
      <div class="right">
        ${r?o`<div class="outcome" data-bad=${String(r.outcome!=="completed")}>
              ${r.outcome==="completed"?`${(n/1e3).toFixed(1)}s`:r.outcome}
            </div>`:p}
        ${r?.audio_seconds?o`<echolocal-recording
              .hass=${this.hass}
              .device=${this.device}
              .turn=${r.id}
              .at=${e.at}
              .filename=${Ss(e)}
            ></echolocal-recording>`:p}
      </div>
      ${e.heard?o`<div class="said">${e.heard}</div>`:p}
      ${e.reply?o`<div class="said-back">${e.reply}</div>`:p}
      ${a.length?o`<div class="bar">
            ${a.map(l=>o`<div
                class="slice"
                data-phase=${l.key}
                title=${`${l.label} ${l.ms} ms`}
                style=${`flex:0 0 ${l.ms/t*100}%`}
              >
                ${(l.ms/1e3).toFixed(1)}s
              </div>`)}
          </div>`:p}
    </div>`}merged(){return[...this.live].sort((e,t)=>t.at-e.at)}async listen(){let e=new Date(Date.now()-ks*864e5),t=this.deviceId?[this.deviceId]:[];try{this.stop=await Ge(this.hass,e,t,r=>{this.loading=!1,r.length&&(this.live=[...r.map(({at:a,turn:n})=>({at:a,wake:n.wake_word,heard:n.heard,reply:n.reply,turn:n})),...this.live])})}catch{this.loading=!1}}};N.styles=y(xi),c([u({attribute:!1})],N.prototype,"hass",2),c([u()],N.prototype,"device",2),c([u()],N.prototype,"deviceId",2),c([m()],N.prototype,"live",2),c([m()],N.prototype,"asked",2),c([m()],N.prototype,"loading",2),N=c([x("echolocal-history")],N);function _s(s){return new Date(s).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})}function Ss(s){let i=new Date(s.at).toISOString().replace(/[:.]/g,"-").slice(0,19),e=s.wake.toLowerCase().replace(/[^a-z0-9]+/g,"-");return`${i}-${e}.wav`}var Si=`:host{display:flex;flex:0 0 auto;align-self:center}button{flex:0 0 auto;display:flex;align-items:center;gap:8px;height:34px;padding:0 14px;border:1px solid color-mix(in srgb,var(--primary-text-color) 18%,transparent);border-radius:999px;background:color-mix(in srgb,var(--primary-text-color) 5%,transparent);color:var(--primary-text-color);font:inherit;font-size:.9em;white-space:nowrap;cursor:pointer}button[disabled]{cursor:default;opacity:.6}button ha-icon{--mdc-icon-size: 18px;color:var(--secondary-text-color);display:flex}button.failed{border-color:color-mix(in srgb,var(--error-color, #db4437) 50%,transparent)}button.failed ha-icon{color:var(--error-color, #db4437)}
`;var Ts=64,L=class extends b{constructor(){super(...arguments);this.device="";this.busy=!1;this.failed=!1;this.save=async()=>{let e=this.action();if(e){this.busy=!0,this.failed=!1;try{let t=await this.read(e);if(!t){this.failed=!0;return}Ms(`${this.device}_logs_${Cs()}.txt`,t.join(`
`)+`
`)}finally{this.busy=!1}}}}render(){return this.action()?o`
      <button
        ?disabled=${this.busy}
        class=${this.failed?"failed":""}
        title=${this.failed?"Could not read the logs":"Diagnostic logs"}
        aria-label=${this.failed?"Could not read the logs":"Download diagnostic logs"}
        @click=${this.save}
      >
        <ha-icon
          .icon=${this.busy?"mdi:timer-outline":"mdi:tray-arrow-down"}
        ></ha-icon>
        <span>${this.failed?"Could not read the logs":"Diagnostic logs"}</span>
      </button>
    `:p}action(){return this.device?le(this.hass,this.device,gi):void 0}async read(e){let t=[],r=1;for(let a=0;a<Math.min(r,Ts);a++){let n=await this.call(e,a);if(!n)return null;r=n.pages||1,t.push(...n.lines??[])}return t}async call(e,t){try{let a=(await this.hass.callService("esphome",e,{page:t},void 0,!0,!0))?.response;return a?.version===1&&Array.isArray(a.lines)?a:null}catch{return null}}};L.styles=y(Si),c([u({attribute:!1})],L.prototype,"hass",2),c([u()],L.prototype,"device",2),c([m()],L.prototype,"busy",2),c([m()],L.prototype,"failed",2),L=c([x("echolocal-logs")],L);function Cs(){return new Date().toISOString().replace(/\.\d+Z$/,"").replace(/:/g,"-")}function Ms(s,i){let e=URL.createObjectURL(new Blob([i],{type:"text/plain"})),t=document.createElement("a");t.href=e,t.download=s,t.click(),URL.revokeObjectURL(e)}var Ai=`:host{display:block;padding:14px;border-radius:14px;background:color-mix(in srgb,var(--primary-text-color) 5%,transparent)}.caption{display:flex;align-items:baseline;gap:8px;margin-bottom:10px;font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.09em;color:var(--secondary-text-color)}.caption span{margin-left:auto;text-transform:none;letter-spacing:0;font-weight:400;font-size:.75rem}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(78px,1fr));gap:6px}.sound{position:relative;display:flex;flex-direction:column;align-items:center;gap:6px;padding:10px 6px;border:1px solid transparent;border-radius:12px;background:color-mix(in srgb,var(--primary-text-color) 6%,transparent);color:var(--secondary-text-color);font:inherit;font-size:.75rem;cursor:pointer}.sound:hover{background:color-mix(in srgb,var(--primary-text-color) 12%,transparent)}.sound[data-on=true]{border-color:color-mix(in srgb,var(--primary-color) 45%,transparent);background:color-mix(in srgb,var(--primary-color) 15%,transparent);color:var(--primary-color)}.sound ha-icon{--mdc-icon-size: 22px;display:flex}.layer{position:absolute;top:4px;right:6px;font-size:.62rem;line-height:1}
`;var Ti=`:host{display:flex;gap:18px;align-items:center;padding:14px;border-radius:14px;background:color-mix(in srgb,var(--primary-text-color) 5%,transparent)}.dial{width:150px;flex:0 0 auto;touch-action:none}svg{width:100%;height:auto;display:block}.bed{fill:none;stroke:color-mix(in srgb,var(--primary-text-color) 10%,transparent);stroke-width:10;stroke-linecap:round}.live{fill:none;stroke:var(--primary-color);stroke-width:10;stroke-linecap:round;transition:stroke-dasharray .25s ease}.live[data-muted=true]{stroke:color-mix(in srgb,var(--primary-text-color) 20%,transparent)}.step{fill:var(--primary-text-color);font-size:26px;font-weight:500;text-anchor:middle}.of{fill:var(--secondary-text-color);font-size:10px;text-anchor:middle;text-transform:uppercase;letter-spacing:.1em}.side{flex:1 1 auto;min-width:0;display:flex;align-items:center;justify-content:space-between;gap:12px}.state{font-size:1.05rem;color:var(--primary-text-color)}.badges{display:flex;flex-wrap:wrap;gap:6px}.badge{display:flex;align-items:center;gap:6px;padding:5px 10px;border-radius:10px;background:color-mix(in srgb,var(--primary-text-color) 7%,transparent);font-size:.78rem;color:var(--secondary-text-color)}.badge ha-icon{--mdc-icon-size: 16px;display:flex}.badge[data-on=true]{background:color-mix(in srgb,var(--primary-color) 16%,transparent);color:var(--primary-color)}
`;var wt=135,$t=270,Le=100,Ye=100,ge=78,Rs={White:"mdi:grain",Pink:"mdi:blur",Brown:"mdi:waveform",Rain:"mdi:weather-pouring",Ocean:"mdi:waves",Brook:"mdi:water",Wind:"mdi:weather-windy",Fire:"mdi:fireplace",Crickets:"mdi:bug-outline",Fan:"mdi:fan",Cabin:"mdi:airplane"},be="None",Z=class extends b{constructor(){super(...arguments);this.player="";this.jack="";this.grab=e=>{let t=e.currentTarget;t.setPointerCapture(e.pointerId);let r=d=>{let h=t.getBoundingClientRect(),f=d.clientX-h.left-h.width/2,g=d.clientY-h.top-h.height/2,w=Math.atan2(g,f)*180/Math.PI-wt;for(;w<0;)w+=360;let $=Math.max(0,Math.min(1,Math.min(w,$t)/$t));return Math.round($*30)/30},a=d=>this.hass.callService("media_player","volume_set",{entity_id:this.player,volume_level:r(d)}),n=d=>a(d),l=d=>{t.removeEventListener("pointermove",n),t.removeEventListener("pointerup",l),t.removeEventListener("pointercancel",l),a(d)};t.addEventListener("pointermove",n),t.addEventListener("pointerup",l),t.addEventListener("pointercancel",l),a(e)}}render(){let e=this.hass.states[this.player];if(!e)return p;let t=Number(e.attributes.volume_level??0),r=e.attributes.is_volume_muted===!0,a=this.jack?this.hass.states[this.jack]?.state==="on":!1;return o`
      <div class="dial" @pointerdown=${this.grab}>
        <svg viewBox="0 0 200 200" role="img" aria-label="Volume">
          <path class="bed" d=${Ci()} pathLength="100"></path>
          ${t>0?v`<path class="live" data-muted=${String(r)} d=${Ci()} pathLength="100"
                stroke-dasharray=${`${t*100} 100`}></path>`:p}
          <text class="step" x=${Le} y=${Ye+4}>${Math.round(t*30)}</text>
          <text class="of" x=${Le} y=${Ye+20}>of 30</text>
        </svg>
      </div>

      <div class="side">
        <div class="state">${Ps(e.state)}</div>
        <div class="badges">
          <div class="badge" data-on=${String(r)}>
            <ha-icon .icon=${r?"mdi:volume-off":"mdi:volume-high"}></ha-icon>
            ${r?"Muted":`${Math.round(t*100)}%`}
          </div>
          ${this.jack?o`<div class="badge" data-on=${String(a)}>
                <ha-icon icon="mdi:headphones"></ha-icon>
                ${a?"Headphones":"Speaker"}
              </div>`:p}
        </div>
      </div>
    `}};Z.styles=y(Ti),c([u({attribute:!1})],Z.prototype,"hass",2),c([u()],Z.prototype,"player",2),c([u()],Z.prototype,"jack",2),Z=c([x("echolocal-volume")],Z);var J=class extends b{constructor(){super(...arguments);this.layers=[];this.busy=!1}render(){let e=this.layers.map(n=>this.hass.states[n]?.state??be),t=(this.hass.states[this.layers[0]]?.attributes.options??[]).filter(n=>n!==be),r=e.every(n=>n!==be),a=n=>e.indexOf(n);return o`
      <div class="caption">
        Generated sound
        <span>${r?"Both layers in use":`${e.filter(n=>n!==be).length} of 2`}</span>
      </div>
      <div class="grid">
        ${t.map(n=>{let l=a(n);return o`<button
            class="sound"
            data-on=${String(l>=0)}
            ?disabled=${this.busy}
            @click=${()=>this.pick(n,l,e)}
          >
            <ha-icon .icon=${Rs[n]??"mdi:music-note"}></ha-icon>
            ${n}
            ${l>=0&&this.layers.length>1?o`<span class="layer">${l+1}</span>`:p}
          </button>`})}
      </div>
    `}async pick(e,t,r){let a=r.findIndex(l=>l===be),n=t>=0?t:a>=0?a:this.layers.length-1;if(!(n<0)){this.busy=!0;try{await this.hass.callService("select","select_option",{entity_id:this.layers[n],option:t>=0?be:e})}finally{this.busy=!1}}}};J.styles=y(Ai),c([u({attribute:!1})],J.prototype,"hass",2),c([u({attribute:!1})],J.prototype,"layers",2),c([m()],J.prototype,"busy",2),J=c([x("echolocal-noise")],J);function Ps(s){return s==="playing"?"Playing":s==="paused"?"Paused":s==="unavailable"?"Unavailable":"Idle"}function Ci(){let s=wt*Math.PI/180,i=(wt+$t)*Math.PI/180;return`M${(Le+ge*Math.cos(s)).toFixed(2)} ${(Ye+ge*Math.sin(s)).toFixed(2)}
    A${ge} ${ge} 0 1 1 ${(Le+ge*Math.cos(i)).toFixed(2)} ${(Ye+ge*Math.sin(i)).toFixed(2)}`}var C=class extends b{constructor(){super(...arguments);this.heading="";this.subtitle="";this.icon="";this.sections=[];this.widgets=[];this.device="";this.deviceId="";this.help=!0;this.about="";this.held={}}render(){let e=this.sections.map(n=>({...n,rows:n.rows.filter(l=>this.hass.states?.[l.entityId])})).filter(n=>n.rows.length),a=`--ha-dialog-width-md:${e.reduce((n,l)=>n+l.rows.length,0)>3||this.widgets.some(n=>n.place!=="header")?820:460}px`;return o`
      <ha-dialog open hideActions style=${a} @closed=${this.dismiss}>
        <div class="sheet">
          <div class="head">
            <div class="crest"><ha-icon .icon=${this.icon}></ha-icon></div>
            <div class="titles">
              <div class="title">
                ${this.heading}
                ${this.help&&this.about?o`<echolocal-bubble .text=${this.about}></echolocal-bubble>`:p}
              </div>
              ${this.subtitle?o`<div class="subtitle">${this.subtitle}</div>`:p}
            </div>
            ${this.widgets.filter(n=>n.place==="header").map(n=>this.widget(n))}
          </div>
          ${this.widgets.filter(n=>n.place!=="header").map(n=>this.explained(n))}
          <div class="groups">
            ${e.length?e.map(n=>this.group(n)):this.widgets.length?p:o`<div class="empty">Nothing to show here.</div>`}
          </div>
        </div>
      </ha-dialog>
    `}widget({widget:e,roles:t,lists:r}){let a=n=>n?.[0]??"";switch(e){case"appearance":return o`<echolocal-appearance
          class="hero"
          .hass=${this.hass}
          .light=${t.light}
          .muted=${a(r.muted)}
          .failure=${a(r.failure)}
          .room=${a(r.room)}
        ></echolocal-appearance>`;case"array":return o`<echolocal-array
          class="hero"
          .hass=${this.hass}
          .level=${t.level}
          .floor=${t.floor}
          .gate=${t.gate}
          .mode=${t.mode}
          .muted=${this.muted}
        ></echolocal-array>`;case"logs":return o`<echolocal-logs
          .hass=${this.hass}
          .device=${this.device}
        ></echolocal-logs>`;case"history":return o`<echolocal-history
          class="hero"
          .hass=${this.hass}
          .device=${this.device}
          .deviceId=${this.deviceId}
        ></echolocal-history>`;case"volume":return o`<echolocal-volume
          class="hero"
          .hass=${this.hass}
          .player=${t.player}
          .jack=${a(r.jack)}
        ></echolocal-volume>`;case"noise":return o`<echolocal-noise
          class="hero"
          .hass=${this.hass}
          .layers=${r.layers??[]}
        ></echolocal-noise>`;case"player":return this.crownPlayer(t.player);case"power":return this.crownPower(t.light);case"mute":return this.crownMute(t.mute,t.lamp);case"camera":return this.crownCamera(t.camera)}}crownCamera(e){let t=this.hass.states[e]?.attributes.entity_picture;if(typeof t!="string")return o``;let r=`${t}${t.includes("?")?"&":"?"}t=${Math.floor(Date.now()/1e4)}`;return o`<button class="crown picture" @click=${()=>this.moreInfo(e)}>
      <img src=${r} alt="Camera" />
    </button>`}crownPlayer(e){let t=this.hass.states[e],r=t?.state==="playing",a=t?.attributes.is_volume_muted!==!0;return o`<div class="crown">
      <ha-icon-button
        .label=${r?"Pause":"Play"}
        @click=${()=>this.hass.callService("media_player",r?"media_pause":"media_play",{entity_id:e})}
      >
        <ha-icon .icon=${r?"mdi:pause":"mdi:play"}></ha-icon>
      </ha-icon-button>
      ${this.crownSwitch(a,"Sound",n=>this.hass.callService("media_player","volume_mute",{entity_id:e,is_volume_muted:!n}))}
    </div>`}crownPower(e){return o`<div class="crown">
      ${this.crownSwitch(this.hass.states[e]?.state==="on","Ring",t=>this.hass.callService("light",t?"turn_on":"turn_off",{entity_id:e}))}
    </div>`}crownMute(e,t){let r=this.hass.states[t];return o`<div class="crown">
      ${r?o`<ha-control-select
            class="lamp"
            .options=${(r.attributes.options??[]).map(a=>({value:a,label:a}))}
            .value=${r.state}
            label="Mute indicator"
            @value-changed=${a=>this.hass.callService("select","select_option",{entity_id:t,option:a.detail.value})}
          ></ha-control-select>`:p}
      ${this.crownSwitch(this.hass.states[e]?.state==="on","Microphone mute",a=>this.hass.callService("switch",a?"turn_on":"turn_off",{entity_id:e}),"warn")}
    </div>`}crownSwitch(e,t,r,a=""){return o`<ha-control-switch
      class=${a}
      .checked=${e}
      .label=${t}
      @change=${n=>r(n.target.checked)}
    ></ha-control-switch>`}get muted(){let e=this.widgets.find(t=>t.roles.mute)?.roles.mute;return!!e&&this.hass.states[e]?.state==="on"}explained(e){let t=this.help?pi(e.widget):void 0;return t?o`<div class="explained">
      ${this.widget(e)}
      <echolocal-bubble class="corner" .text=${t}></echolocal-bubble>
    </div>`:this.widget(e)}group(e){return o`<section class="group">
      ${e.title?o`<div class="section">${e.title}</div>`:p}
      ${e.rows.map(t=>this.row(t))}
    </section>`}row(e){if(!this.hass.states?.[e.entityId])return p;switch(e.entityId.split(".")[0]){case"switch":return this.toggle(e,"switch");case"light":return this.toggle(e,"light");case"number":return this.slider(e);case"select":return this.options(e);case"button":return this.press(e);case"update":return this.version(e);default:return this.reading(e)}}version(e){let t=this.hass.states[e.entityId],r=t.attributes.installed_version,a=t.attributes.latest_version,n=t.state==="on"&&a&&a!==r;return t.attributes.in_progress?this.tile(e,!0,{trail:o`<ha-spinner size="tiny"></ha-spinner>`,under:o`<div class="note">Installing ${String(a)}</div>`}):this.tile(e,!1,{trail:o`<button class="reading version" @click=${()=>this.moreInfo(e.entityId)}>
        ${r?String(r):t.state}
      </button>`,under:n?o`<div class="offer">
            <div class="note">New: ${String(a)}</div>
            <ha-button
              size="small"
              @click=${()=>this.hass.callService("update","install",{entity_id:e.entityId})}
            >
              Update
            </ha-button>
          </div>`:void 0})}toggle(e,t){let{entityId:r,label:a}=e,n=this.hass.states[r].state;return this.tile(e,n==="on",{trail:o`<ha-control-switch
        .checked=${n==="on"}
        .disabled=${n==="unavailable"}
        .label=${a}
        @change=${l=>this.hass.callService(t,l.target.checked?"turn_on":"turn_off",{entity_id:r})}
      ></ha-control-switch>`})}slider(e){let{entityId:t}=e,r=this.hass.states[t],a=r.attributes,n=a.min??0,l=a.max??100,d=this.held[t]??Number(r.state);return this.tile(e,!1,{trail:o`<span class="reading">${Number.isNaN(d)?"\u2014":d}</span>
        ${a.unit_of_measurement?o`<span class="unit">${a.unit_of_measurement}</span>`:p}`,under:o`<ha-control-slider
        .value=${d}
        .min=${n}
        .max=${l}
        .step=${a.step??1}
        .unit=${a.unit_of_measurement??""}
        .disabled=${r.state==="unavailable"}
        @slider-moved=${h=>{this.held={...this.held,[t]:h.detail.value}}}
        @value-changed=${h=>{let{[t]:f,...g}=this.held;this.held=g,this.hass.callService("number","set_value",{entity_id:t,value:h.detail.value})}}
      ></ha-control-slider>`})}options(e){let{entityId:t}=e,r=this.hass.states[t],a=r.attributes.options??[],n=a.map(h=>({value:h,label:h})),l=h=>{h&&h!==r.state&&this.hass.callService("select","select_option",{entity_id:t,option:h})},d=r.state==="unavailable";return this.tile(e,!1,{trail:a.length===2?o`<div class="pills">
              ${a.map(h=>o`<button
                  class="pill"
                  data-on=${String(h===r.state)}
                  ?disabled=${d}
                  @click=${()=>l(h)}
                >
                  ${h}
                </button>`)}
            </div>`:o`<ha-control-select-menu
              .options=${n}
              .value=${r.state}
              .disabled=${d}
              .label=${e.label}
              hide-label
              show-arrow
              @wa-select=${h=>l(h.detail.item?.value)}
            ></ha-control-select-menu>`})}press(e){let t=e.reading?this.hass.states[e.reading]:void 0,r=o`<ha-button
      size="small"
      @click=${()=>this.hass.callService("button","press",{entity_id:e.entityId})}
    >
      Run
    </ha-button>`;return t?this.tile(e,!1,{trail:o`<span class="reading">${t.state}</span>
        ${t.attributes.unit_of_measurement?o`<span class="unit">${t.attributes.unit_of_measurement}</span>`:p}`,under:r}):this.tile(e,!1,{trail:r})}reading(e){let t=this.hass.states[e.entityId],r=t.attributes.unit_of_measurement,a=t.state.split(", ").filter(l=>l.length);if(a.length>1)return this.tile(e,!1,{under:o`<button class="lines" @click=${()=>this.moreInfo(e.entityId)}>
          ${a.map(l=>o`<div>${l}</div>`)}
        </button>`});let n=t.attributes.mode==="password"&&t.state?"\u2022\u2022\u2022\u2022\u2022\u2022":t.state;return this.tile(e,!1,{trail:o`<button
          class=${n.length>12?"reading version":"reading"}
          title=${n}
          @click=${()=>this.moreInfo(e.entityId)}
        >
          ${n}
        </button>
        ${r?o`<span class="unit">${r}</span>`:p}`})}tile({entityId:e,label:t,name:r},a,n){let l=this.hass.states[e].attributes.icon,d=a&&l?.includes("mic")&&l.includes("off"),h=this.help?di(r):void 0;return o`<div class="tile" data-active=${String(a&&!d)} data-alert=${String(!!d)}>
      <div class="top">
        <div class="icon"><ha-icon .icon=${l??"mdi:tune"}></ha-icon></div>
        <div class="named">
          <div class="name">${t}</div>
          ${h?o`<echolocal-bubble .text=${h}></echolocal-bubble>`:p}
        </div>
        ${n.trail?o`<div class="trail">${n.trail}</div>`:p}
      </div>
      ${n.under??p}
    </div>`}moreInfo(e){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}dismiss(){this.dispatchEvent(new CustomEvent("closed",{bubbles:!0,composed:!0}))}};C.styles=[y(Ke),y(li)],c([u({attribute:!1})],C.prototype,"hass",2),c([u()],C.prototype,"heading",2),c([u()],C.prototype,"subtitle",2),c([u()],C.prototype,"icon",2),c([u({attribute:!1})],C.prototype,"sections",2),c([u({attribute:!1})],C.prototype,"widgets",2),c([u()],C.prototype,"device",2),c([u()],C.prototype,"deviceId",2),c([u({type:Boolean})],C.prototype,"help",2),c([u()],C.prototype,"about",2),c([m()],C.prototype,"held",2),C=c([x("echolocal-dialog")],C);function Hi(s,i){let e=kt(s);return i.map(t=>{let r=e?.get(t.entity_id);return{...t,name:r?.name??"",slot:r?.slot??0}})}function Xe(s){let i=new Map;for(let e of s){let t=i.get(e.name);t?t.push(e):i.set(e.name,[e])}for(let e of i.values())e.sort((t,r)=>t.slot-r.slot);return i}var F="echolocal-keys",Mi=!1,Ei=null;function kt(s){return Mi||(Mi=!0,zs(s)),Ei}function zs(s){s.connection?.subscribeMessage(i=>{let e=new Map;for(let t of i.entities)t.device_id&&e.set(t.entity_id,{entityId:t.entity_id,deviceId:t.device_id,...Os(t.object_id),disabled:t.disabled});Ei=e,window.dispatchEvent(new Event(F))},{type:"echolocal/entities"}).catch(()=>{})}function Os(s){let i=s.lastIndexOf("_"),e=i<0?"":s.slice(i+1);return/^\d+$/.test(e)?{name:s.slice(0,i),slot:Number(e)}:{name:s,slot:0}}var Je={ring:[{title:null,rows:[["ring","Ring"]]},{title:"Segments",rows:[["segment","Segment"]]}],microphone:[{title:null,rows:[["mic_mute","Mute"]]},{title:"Capture",rows:[["microphone_gain","Gain"],["microphone_mixing","Mixing"],["microphone_leveling","Leveling"],["microphone_cancel_echo","Echo cancellation"],["microphone_noise_reduction","Noise reduction"]]},{title:"The room",rows:[["microphone_sensitivity","Sensitivity"],["room_level","Room level"],["room_floor","Room floor"],["stop_word_sensitivity","Stop word"],["vad_sensitivity","End of speech"]]},{title:"Indicator",rows:[["mute_led_brightness","Mute light"],["mute_sound","Mute sound"]]}],playback:[{title:null,rows:[["headphones","Headphones"]]},{title:"Volume",rows:[["volume_media","Music"],["volume_voice","Voice"],["volume_alerts","Alerts"],["volume_feedback","Beeps"]]},{title:"Generated sound",rows:[["noise_layer","Layer"]]},{title:"During a turn",rows:[["media_on_turn","Music"],["media_duck_level","Ducking"]]},{title:"Voice",rows:[["voice_resampling","Resampling"]]},{title:"Cast",rows:[["cast_receiver","Cast receiver"],["youtube_lounge_on_demand","YouTube on demand"],["youtube_live_delay","YouTube live delay"],["youtube_sponsorblock","SponsorBlock categories"],["cast_credentials","Credentials"],["cast_credentials_expire","Credentials expire"],["cast_oracle","Credential server"]]}],screen:[{title:null,rows:[["backlight","Brightness"],["screen_mode","Automatic brightness"],["screen_brightness","Brightness now"],["ambient_light","Room light"]]},{title:"Look",rows:[["theme","Theme"],["screen_style","Style"],["screen_size","Size"],["drawer_edge","Dock side"],["dashboard_logo","Logo"],["privacy_marks","Privacy marks"]]},{title:"Clock",rows:[["clock_face","Face"],["clock_format","Format"],["clock_size","Size"],["clock_position","Position"],["clock_color","Color"],["clock_date","Date"]]},{title:"Visual",rows:[["visual","Visual"],["visual_label","Label"]]},{title:"When idle",rows:[["idle_after","Idle after"],["idle_face","Clock face"],["idle_size","Clock size"],["idle_position","Vertical position"],["idle_align","Horizontal position"],["idle_visual","Visual"],["idle_visual_1_source","Visual 1 listens to"],["idle_visual_2_source","Visual 2 listens to"]]}],poster:[{title:null,rows:[["poster","Posters"],["poster_showing","Showing"],["poster_every","Changes"],["poster_next","Next poster"]]},{title:"Immich",rows:[["poster_server","Server"],["poster_key","API key"],["poster_albums","Albums"],["poster_tags","Tags"]]}],camera:[{title:null,rows:[["camera_covered","Shutter closed"],["rtsp","RTSP server"],["camera_main_on","Main stream"]]},{title:"Stream",rows:[["camera_main_size","Resolution"],["camera_quality","Quality"],["camera_framerate","Frame rate"],["camera_framerate_auto","Automatic frame rate"],["camera_keyframe","Keyframe interval"]]},{title:"Picture",rows:[["camera_brightness","Brightness"],["camera_contrast","Contrast"],["camera_saturation","Saturation"],["camera_sharpness","Sharpness"],["camera_hue","Hue"],["camera_ev","Exposure"],["camera_iso","ISO"],["camera_whitebalance","White balance"],["camera_scene","Scene"],["camera_effect","Effect"],["camera_banding","Anti-banding"],["camera_reset","Reset"]]}],assistant:[{title:null,rows:[["wake_word","Wake word"],["pipeline","Pipeline"],["wake_threshold","Wake sensitivity"]]},{title:"Timing",rows:[["max_listen","Max listen"],["max_think","Max think"],["follow_up","Follow up"]]},{title:"Feedback",rows:[["wake_effect","Listening effect"],["thinking_effect","Thinking effect"],["replying_effect","Replying effect"],["wake_tone","Chime"]]},{title:"Reply",rows:[["reply_buffer","Buffer"],["reply_delivery","Delivery"]]},{title:"Recordings",rows:[["keep_recordings","Recordings kept"]]}],device:[{title:null,rows:[["firmware","Firmware"],["update_channel","Update channel"],["check_for_updates","Check for updates"]]},{title:"Bluetooth",rows:[["bluetooth_proxy","Proxy enabled"],["bluetooth_speaker","Speaker"]]},{title:"Maintenance",rows:[["metrics_interval","Metrics interval"],["purge_cache","Purge cache","cached_data"],["test_playback","Test playback"],["remote_adb","Remote adb"],["insecure_tls","Insecure TLS"]]}],diagnostics:[{title:"Network",rows:[["ip_address","IP address"],["wifi_signal","Signal"],["wifi_sent","Sent"],["wifi_received","Received"],["ble_advertisements","Bluetooth advertisements"]]},{title:"Hardware",rows:[["cpu_temperature","CPU"],["radio_temperature","Radio"],["cpu_cores","Cores"],["cpu_cores_online","Cores online"],["load_average","Load"],["memory_available","Memory"],["free_space","Disk"]]},{title:"Updates",rows:[["update_status","Update status"],["update_outcome","Last update"]]}]},Ns={ring:[{widget:"power",place:"header",roles:{light:"ring"}},{widget:"appearance",roles:{light:"ring"},lists:{segments:"segment",muted:"ring_muted",failure:"failure_effect",room:"room_reaction"}}],playback:[{widget:"player",place:"header",roles:{player:"speaker"}},{widget:"volume",roles:{player:"speaker"},lists:{jack:"headphones"}},{widget:"noise",roles:{first:"noise_layer"},lists:{layers:"noise_layer"}}],activity:[{widget:"history",roles:{}}],camera:[{widget:"camera",place:"header",roles:{camera:"camera"}}],microphone:[{widget:"mute",place:"header",roles:{mute:"mic_mute",lamp:"mute_led_brightness"}},{widget:"array",roles:{level:"room_level",floor:"room_floor",gate:"microphone_sensitivity",mode:"microphone_mixing"}}]},Is=[["ring","ring"],["microphone","mic_mute"],["playback","speaker"],["screen","theme"],["poster","poster"],["camera","camera"]];function Ri(s){let i=Is.filter(([,e])=>s.by.has(e)).map(([e])=>({kind:e,slot:0}));for(let e of s.by.get("wake_threshold")??[])i.push({kind:"assistant",slot:e.slot});return i}function Pi(s,i,e=0){let t=[],r=new Set;for(let a of Ns[s]??[]){let n={};for(let[d,h]of Object.entries(a.roles)){let f=Ze(i.by,h,e)[0];f&&(n[d]=f.entity_id)}if(Object.keys(n).length!==Object.keys(a.roles).length)continue;let l={};for(let[d,h]of Object.entries(a.lists??{}))l[d]=Ze(i.by,h,e).map(f=>f.entity_id);t.push({widget:a.widget,place:a.place??"body",roles:n,lists:l}),[...Object.values(n),...Object.values(l).flat()].forEach(d=>r.add(d))}return{widgets:t,sections:Ni(Je[s]??[],i.by,e,r)}}var Us=new Set(["switch","select","number","button","text","time","update"]);function zi(s){return Ii(Je.device??[],s.entities.filter(i=>i.device_id===s.device.id&&Us.has(i.entity_id.split(".")[0])),new Set,i=>i.entity_category!=="diagnostic")}function Oi(s){let i=s.entities.filter(e=>e.entity_category==="diagnostic");return{widgets:[{widget:"logs",place:"header",roles:{},lists:{}}],sections:Ii(Je.diagnostics??[],i,new Set)}}function Ze(s,i,e){let t=s.get(i)??[];return e?t.filter(r=>(r.slot||1)===e):t}function Ni(s,i,e,t){let r=[];for(let a of s){let n=[];for(let[l,d,h]of a.rows){let f=Ze(i,l,e);for(let g of f)t.has(g.entity_id)||n.push({entityId:g.entity_id,name:l,label:f.length>1?`${d} ${g.slot}`:d,reading:h?Ze(i,h,e)[0]?.entity_id:void 0})}n.length&&r.push({title:a.title,rows:n})}return r}var Ds=new Set(Object.values(Je).flatMap(s=>(s??[]).flatMap(i=>i.rows.flatMap(([e,,t])=>t?[e,t]:[e]))));function Ii(s,i,e,t=()=>!0){let r=Ni(s,Xe(i),0,e),a=new Set(r.flatMap(l=>l.rows.flatMap(d=>[d.entityId,d.reading??""]))),n=i.filter(l=>!a.has(l.entity_id)&&!e.has(l.entity_id)&&!Ds.has(l.name)&&t(l));return n.length?[...r,{title:r.length?"More":null,rows:n.map(l=>({entityId:l.entity_id,name:l.name,label:l.name||l.entity_id})).sort((l,d)=>l.label.localeCompare(d.label))}]:r}var Ui=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 190">
<rect x="28" y="44" width="264" height="142" rx="12" fill="#9a9da2"/>
<rect x="33" y="49" width="58" height="132" rx="9" fill="#7d8086"/>
<rect x="96" y="49" width="191" height="132" rx="7" fill="#111214"/>
<rect x="104" y="61" width="175" height="108" rx="2" fill="#24303d"/>
<circle cx="191" cy="55" r="2.4" fill="#3a3f47"/>
</svg>
`;var Di=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 190">
<rect x="4" y="4" width="312" height="182" rx="14" fill="#f2f2f0" stroke="#c4c5c3" stroke-width="2"/>
<rect x="10" y="10" width="72" height="170" rx="10" fill="#c8c9c7"/>
<circle cx="46" cy="164" r="3" fill="#a7a8a6"/>
<rect x="88" y="10" width="222" height="170" rx="8" fill="#111214"/>
<rect x="98" y="24" width="202" height="142" rx="2" fill="#24303d"/>
<circle cx="199" cy="17" r="2.6" fill="#3a3f47"/>
</svg>
`;var Fi=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 190">
<rect x="64" y="8" width="192" height="178" rx="14" fill="#f2f2f0" stroke="#c4c5c3" stroke-width="2"/>
<rect x="72" y="16" width="176" height="108" rx="9" fill="#111214"/>
<rect x="80" y="24" width="160" height="92" rx="2" fill="#24303d"/>
<circle cx="160" cy="20" r="2.2" fill="#3a3f47"/>
<rect x="72" y="130" width="176" height="50" rx="7" fill="#c6c7c8"/>
<circle cx="76" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="80" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="84" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="88" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="92" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="96" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="100" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="104" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="108" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="112" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="116" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="120" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="124" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="128" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="132" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="136" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="140" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="144" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="148" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="152" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="156" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="160" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="164" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="168" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="172" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="176" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="180" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="184" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="188" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="192" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="196" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="200" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="204" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="208" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="212" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="216" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="220" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="224" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="228" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="232" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="236" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="240" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="244" cy="136" r="0.9" fill="#d9dadb"/>
<circle cx="78" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="82" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="86" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="90" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="94" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="98" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="102" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="106" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="110" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="114" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="118" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="122" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="126" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="130" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="134" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="138" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="142" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="146" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="150" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="154" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="158" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="162" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="166" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="170" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="174" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="178" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="182" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="186" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="190" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="194" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="198" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="202" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="206" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="210" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="214" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="218" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="222" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="226" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="230" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="234" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="238" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="242" cy="140" r="0.9" fill="#d9dadb"/>
<circle cx="76" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="80" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="84" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="88" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="92" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="96" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="100" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="104" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="108" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="112" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="116" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="120" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="124" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="128" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="132" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="136" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="140" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="144" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="148" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="152" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="156" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="160" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="164" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="168" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="172" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="176" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="180" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="184" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="188" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="192" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="196" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="200" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="204" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="208" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="212" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="216" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="220" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="224" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="228" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="232" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="236" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="240" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="244" cy="144" r="0.9" fill="#d9dadb"/>
<circle cx="78" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="82" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="86" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="90" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="94" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="98" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="102" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="106" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="110" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="114" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="118" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="122" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="126" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="130" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="134" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="138" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="142" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="146" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="150" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="154" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="158" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="162" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="166" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="170" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="174" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="178" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="182" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="186" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="190" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="194" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="198" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="202" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="206" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="210" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="214" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="218" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="222" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="226" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="230" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="234" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="238" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="242" cy="148" r="0.9" fill="#d9dadb"/>
<circle cx="76" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="80" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="84" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="88" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="92" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="96" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="100" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="104" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="108" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="112" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="116" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="120" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="124" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="128" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="132" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="136" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="140" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="144" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="148" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="152" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="156" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="160" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="164" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="168" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="172" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="176" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="180" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="184" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="188" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="192" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="196" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="200" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="204" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="208" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="212" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="216" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="220" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="224" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="228" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="232" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="236" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="240" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="244" cy="152" r="0.9" fill="#d9dadb"/>
<circle cx="78" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="82" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="86" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="90" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="94" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="98" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="102" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="106" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="110" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="114" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="118" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="122" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="126" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="130" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="134" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="138" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="142" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="146" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="150" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="154" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="158" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="162" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="166" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="170" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="174" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="178" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="182" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="186" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="190" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="194" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="198" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="202" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="206" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="210" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="214" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="218" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="222" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="226" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="230" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="234" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="238" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="242" cy="156" r="0.9" fill="#d9dadb"/>
<circle cx="76" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="80" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="84" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="88" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="92" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="96" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="100" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="104" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="108" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="112" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="116" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="120" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="124" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="128" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="132" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="136" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="140" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="144" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="148" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="152" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="156" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="160" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="164" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="168" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="172" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="176" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="180" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="184" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="188" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="192" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="196" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="200" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="204" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="208" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="212" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="216" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="220" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="224" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="228" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="232" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="236" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="240" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="244" cy="160" r="0.9" fill="#d9dadb"/>
<circle cx="78" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="82" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="86" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="90" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="94" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="98" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="102" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="106" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="110" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="114" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="118" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="122" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="126" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="130" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="134" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="138" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="142" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="146" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="150" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="154" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="158" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="162" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="166" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="170" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="174" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="178" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="182" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="186" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="190" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="194" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="198" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="202" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="206" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="210" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="214" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="218" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="222" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="226" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="230" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="234" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="238" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="242" cy="164" r="0.9" fill="#d9dadb"/>
<circle cx="76" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="80" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="84" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="88" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="92" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="96" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="100" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="104" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="108" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="112" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="116" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="120" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="124" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="128" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="132" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="136" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="140" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="144" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="148" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="152" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="156" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="160" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="164" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="168" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="172" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="176" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="180" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="184" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="188" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="192" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="196" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="200" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="204" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="208" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="212" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="216" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="220" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="224" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="228" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="232" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="236" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="240" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="244" cy="168" r="0.9" fill="#d9dadb"/>
<circle cx="78" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="82" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="86" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="90" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="94" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="98" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="102" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="106" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="110" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="114" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="118" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="122" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="126" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="130" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="134" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="138" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="142" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="146" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="150" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="154" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="158" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="162" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="166" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="170" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="174" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="178" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="182" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="186" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="190" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="194" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="198" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="202" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="206" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="210" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="214" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="218" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="222" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="226" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="230" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="234" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="238" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="242" cy="172" r="0.9" fill="#d9dadb"/>
<circle cx="76" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="80" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="84" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="88" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="92" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="96" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="100" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="104" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="108" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="112" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="116" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="120" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="124" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="128" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="132" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="136" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="140" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="144" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="148" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="152" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="156" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="160" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="164" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="168" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="172" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="176" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="180" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="184" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="188" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="192" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="196" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="200" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="204" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="208" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="212" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="216" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="220" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="224" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="228" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="232" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="236" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="240" cy="176" r="0.9" fill="#d9dadb"/>
<circle cx="244" cy="176" r="0.9" fill="#d9dadb"/>
<rect x="241" y="140" width="2" height="22" rx="1" fill="#a9aaab"/>
</svg>
`;var ji=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 190">
<defs>
<clipPath id="l"><rect x="0" y="0" width="84" height="190"/></clipPath>
<clipPath id="r"><rect x="236" y="0" width="84" height="190"/></clipPath>
</defs>
<ellipse cx="160" cy="110" rx="154" ry="72" fill="#26272b"/>
<ellipse cx="160" cy="110" rx="146" ry="64" fill="#3a3b40" clip-path="url(#l)"/>
<ellipse cx="160" cy="110" rx="146" ry="64" fill="#3a3b40" clip-path="url(#r)"/>
<rect x="88" y="50" width="144" height="120" rx="8" fill="#0c0d0f"/>
<rect x="96" y="62" width="128" height="80" rx="2" fill="#24303d"/>
<circle cx="160" cy="56" r="2.4" fill="#3a3f47"/>
<rect x="152" y="152" width="16" height="5" rx="1" fill="#b9bcc2"/>
</svg>
`;var Bi=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 190">
<rect x="28" y="44" width="264" height="142" rx="12" fill="#2b2d31"/>
<rect x="33" y="49" width="58" height="132" rx="9" fill="#1f2125"/>
<rect x="96" y="49" width="191" height="132" rx="7" fill="#0b0c0e"/>
<rect x="104" y="61" width="175" height="108" rx="2" fill="#24303d"/>
<circle cx="191" cy="55" r="2.4" fill="#3a3f47"/>
</svg>
`;var _t={athena:{shape:"show",lens:"wide",width:360},biscuit:{shape:"dot"},checkers:{shape:"show",lens:"round",width:300},cronos:{shape:"show",lens:"square",width:300},crown:{shape:"show",lens:"round",width:360},amber:{shape:"panel",picture:Ui,width:340},blueberry:{shape:"panel",picture:Di,width:380},ivy:{shape:"panel",picture:Fi,width:320},opal:{shape:"panel",picture:ji,width:340},penghu:{shape:"panel",picture:Bi,width:380}};function ye(s){return _t[s]??_t.biscuit}function Wi(s){return!!s&&s in _t}var Ks=["EchoLocal","LANovo"],Vs="esphome",He=12;function Gs(s){return!!s?.identifiers?.some(([i])=>i===Vs)}function qi(s,i){return Object.values(s.devices??{}).filter(e=>e.via_device_id===i&&!e.disabled_by).sort((e,t)=>k(e).localeCompare(k(t)))}function T(s){return s?Object.values(s.devices??{}).filter(i=>Ls(s,i.id)&&!i.via_device_id&&!i.disabled_by).sort((i,e)=>k(i).localeCompare(k(e))):[]}function k(s){return s?.name_by_user||s?.name||""}function Ls(s,i){return!s||!Ks.includes(s.devices?.[i]?.manufacturer??"")?!1:qi(s,i).some(Gs)}function I(s,i){if(!s||!i)return null;let e=s.devices?.[i];if(!e)return null;let t=new Set([i,...qi(s,i).map(h=>h.id)]),r=Hi(s,Object.values(s.entities??{}).filter(h=>h.device_id&&t.has(h.device_id)&&!h.hidden)),a=Xe(r),n=h=>a.get(h)?.[0]?.entity_id,l=new Array(He).fill(void 0);for(let h of a.get("segment")??[]){let f=h.slot-1;f>=0&&f<He&&(l[f]=h.entity_id)}let d=n("hardware_board");return{device:e,entities:r,by:a,board:Wi(e.model)?e.model:d&&s.states?.[d]?.state||"",satellite:n("assist_satellite"),player:n("speaker"),update:n("firmware"),ring:n("ring"),segments:l,mute:n("mic_mute")}}function Ki(s){return(s.by.get("wake_assistant")??[]).map(i=>i.entity_id)}function Ee(s,i){let e=i?s?.states?.[i]:void 0;return!e||e.state!=="on"?null:{rgb:e.attributes.rgb_color??[255,255,255],level:(e.attributes.brightness??255)/255}}function Qe(s,i){return!!i&&s?.states?.[i]?.state==="on"}function Vi(s,i){return(i?s?.states?.[i]?.state:void 0)??"unavailable"}function Gi(s,i){let e=new Array(He).fill(void 0),t=kt(s);if(!t)return e;let r=new Set(i.entities.map(a=>a.device_id));for(let a of t.values())!a.disabled||a.name!=="segment"||r.has(a.deviceId)&&a.slot>=1&&a.slot<=He&&(e[a.slot-1]=a.entityId);return e}async function Li(s,i){await s.callWS({type:"config/entity_registry/update",entity_id:i,disabled_by:null})}var At={Midnight:{background:"#0b0e14",text:"#e6edf3",muted:"#8b97a8",accent:"#4c9aff"},Nocturne:{background:"#11131a",text:"#e8e6e3",muted:"#9a97a3",accent:"#c8a2ff"},Slate:{background:"#14171c",text:"#dfe4ea",muted:"#8a929e",accent:"#5ec8c8"},Ember:{background:"#14100e",text:"#f3e7dd",muted:"#a8948a",accent:"#ff8c42"},Forest:{background:"#0e1512",text:"#dfeae2",muted:"#85998c",accent:"#5fbf8f"},Ocean:{background:"#081620",text:"#dceaf2",muted:"#7d9aa8",accent:"#36b6d6"},Plum:{background:"#150f1a",text:"#ece4f5",muted:"#9b8fae",accent:"#d86fd8"},Carbon:{background:"#000000",text:"#f2f2f2",muted:"#8c8c8c",accent:"#ffffff"},Paper:{background:"#f7f5f1",text:"#22252a",muted:"#6d7480",accent:"#2f6fdb"},Linen:{background:"#f3ece2",text:"#2b2622",muted:"#7b6f63",accent:"#b5652f"},Mist:{background:"#eef2f5",text:"#1f2933",muted:"#66737f",accent:"#2b93b6"},Bloom:{background:"#faf0f3",text:"#2e2329",muted:"#7d6a73",accent:"#d1547d"}},Xi="Paper",Zi={Amber:"#f2a63b",Red:"#e5544b",Green:"#4caf78",Cyan:"#35b8c4",Blue:"#4f8ef7",Violet:"#9a7bf0",Pink:"#e86aa6"},Yi={Nano:9,Micro:12,Mini:15,Small:19,Medium:25,Large:33},et=27,Q=33,tt=186,xe=93;function Ji(s,i){let{screen:e}=s;return v`
    <svg viewBox="0 0 240 150" role="img" aria-label="Echo Show">
      ${St(140,v`<path d="M-3 0h6"></path>`,"Volume down",()=>i.volume(-1))}
      ${St(166,v`<path d="M-3 0h6M0 -3v6"></path>`,"Volume up",()=>i.volume(1))}
      ${St(192,v`<path d="M-1.6 -2.6a1.6 1.6 0 0 1 3.2 0v1.8a1.6 1.6 0 0 1-3.2 0z"></path>
          <path d="M-2.8 -0.6a2.8 2.8 0 0 0 5.6 0"></path>`,s.muted?"Microphone muted":"Microphone live",i.mute,s.muted)}

      <rect x="4" y="14" width="232" height="130" rx="16" fill="var(--el-shell)"></rect>
      <rect x="4" y="14" width="232" height="130" rx="16" fill="none" stroke="var(--el-edge)"></rect>
      <rect x="11" y="21" width="218" height="116" rx="10" fill="var(--el-glass)"></rect>

      <g class="screen" role="button" tabindex="0" aria-label="Screen" @click=${i.screen}>
        <rect x=${et} y=${Q} width=${tt} height=${xe} rx="2" fill=${e.palette.background}></rect>
        ${Ys(e)}
        <rect
          x=${et}
          y=${Q}
          width=${tt}
          height=${xe}
          rx="2"
          fill="#000"
          style="opacity:${(1-e.lit)*.7}"
        ></rect>
        <rect
          class="bar"
          data-muted=${String(s.muted)}
          x=${et}
          y=${Q+xe-3}
          width=${tt}
          height="3"
        ></rect>
      </g>

      ${Xs(s.lens,s.covered,i.camera)}
    </svg>
  `}function Ys(s){let i=Yi[s.size]??Yi.Medium,e=s.date?i*.42:0,t=i*.8+e,r=et+tt/2,a;s.place==="Top"?a=Q+8:s.place==="Bottom"?a=Q+xe-12-t:a=Q+(xe-t)/2;let n=s.place==="Bottom"?Q+12:Q+xe-9;return v`
    <text
      class="clock"
      x=${r}
      y=${a+i*.8}
      text-anchor="middle"
      style="font-size:${i}px;fill:${s.ink}"
    >${s.time}</text>
    ${s.date?v`<text
          class="date"
          x=${r}
          y=${a+t}
          text-anchor="middle"
          style="font-size:${i*.3}px;fill:${s.palette.muted}"
        >${s.date}</text>`:""}
    ${s.line?v`<text
          class="line"
          x=${r}
          y=${n}
          text-anchor="middle"
          style="fill:${s.palette.muted}"
        >${Zs(s.line,44)}</text>`:""}
  `}function Xs(s,i,e){let t={round:v`<circle cx="0" cy="0" r="3.4"></circle>`,square:v`<rect x="-3.2" y="-3.2" width="6.4" height="6.4" rx="0.8"></rect>`,wide:v`<rect x="-6" y="-2.8" width="12" height="5.6" rx="1.2"></rect>`}[s];return v`<g
    class="lens"
    data-covered=${String(i)}
    transform="translate(203 27)"
    role="button"
    tabindex="0"
    aria-label=${i?"Camera covered":"Camera"}
    @click=${e}
  >
    <circle class="hit" cx="0" cy="0" r="8" fill="transparent"></circle>
    ${t}
  </g>`}function St(s,i,e,t,r=!1){return v`<g class="btn key" data-lit=${String(r)} transform="translate(${s} 12)"
    role="button" tabindex="0" aria-label=${e} @click=${t}>
    <rect class="hit" x="-13" y="-12" width="26" height="18" fill="transparent"></rect>
    <rect class="face" x="-11" y="-5" width="22" height="9" rx="4.5"></rect>
    <g class="glyph" transform="translate(0 -0.5)">${i}</g>
  </g>`}function Zs(s,i){return s.length>i?`${s.slice(0,i-1)}\u2026`:s}var Js={device_id:"Device",shell:"Shell",help:"Explain each setting"},ce={ring:"mdi:record-circle-outline",microphone:"mdi:microphone",playback:"mdi:speaker",screen:"mdi:monitor",poster:"mdi:image-multiple",camera:"mdi:camera",assistant:"mdi:account-voice",device:"mdi:cog-outline",diagnostics:"mdi:stethoscope",activity:"mdi:timeline-text-outline",follow:"mdi:backup-restore",close:"mdi:check"},Qi={idle:"Idle",listening:"Listening",processing:"Thinking",responding:"Speaking",playing:"Playing",unavailable:"Unavailable",unknown:"Unknown"},Qs=2500;function ea(s){let i=Math.log10(Math.max(s,1))/Math.log10(Qs);return Math.min(1,Math.max(0,i))}var P=class extends b{constructor(){super(...arguments);this.opened=null;this.picked=null;this.holding=!1;this.timer=0;this.offering=null;this.now=new Date;this.clock=0;this.again=()=>this.requestUpdate()}static getConfigElement(){return document.createElement("echolocal-satellite-card-editor")}static getStubConfig(e){return{device_id:T(e)[0]?.id??""}}setConfig(e){if(!e?.device_id)throw new Error("Choose an EchoLocal device");this.config={...e}}getCardSize(){return 6}connectedCallback(){super.connectedCallback(),window.addEventListener(F,this.again),this.clock=window.setInterval(()=>this.now=new Date,15e3)}disconnectedCallback(){window.removeEventListener(F,this.again),clearInterval(this.clock),super.disconnectedCallback()}doing(e){let t=Vi(this.hass,e.satellite);return t!=="idle"?t:(e.player?this.hass?.states?.[e.player]?.state:void 0)==="playing"?"playing":t}shellFor(e){if(ye(e.board).shape!=="dot")return"charcoal";let t=this.config?.shell;if(t&&t!=="auto")return t;let r=e.by.get("hardware_color")?.[0]?.entity_id,a=r?this.hass.states[r]?.state:void 0;return a==="black"||a==="white"?a:"grey"}lux(e){let t=e.by.get("lux")?.[0]?.entity_id,r=t?Number(this.hass.states[t]?.state):NaN;return Number.isNaN(r)?null:{value:r,lit:ea(r)}}render(){if(!this.hass||!this.config)return p;let e=I(this.hass,this.config.device_id);if(!e)return o`<ha-card><div class="missing">Device not found</div></ha-card>`;let t=this.doing(e),r=ye(e.board);return o`
      <ha-card>
        <div class="frame" data-shape=${r.shape}>
          <div
            class="art"
            data-shell=${this.shellFor(e)}
            data-activity=${t}
            style=${r.shape==="dot"?"":`max-width:${r.width}px`}
          >
            ${r.shape==="panel"?je(r.picture):r.shape==="show"?this.show(e,t,r.lens):ti({segments:this.segments(e),glow:this.glow(e),muted:Qe(this.hass,e.mute),holding:this.holding,picked:this.picked,divisible:[...e.segments,...this.switchedOff(e)].some(Boolean),lux:this.lux(e)},{ring:()=>this.open({kind:"ring",slot:0}),segment:a=>this.tapped(e,a),action:a=>this.pressed(e,a),mute:()=>this.toggle("switch",e.mute),volume:a=>this.volume(e,a)})}
          </div>

          <div class="side">${this.side(e)}</div>

          ${this.offering!==null?this.offer(e,this.offering):this.picked===null?this.foot(e,t):this.palette(e)}
        </div>
      </ha-card>

      ${this.popup(e)}
    `}show(e,t,r){let a=e.by.has("camera");return Ji({lens:r,screen:this.screen(e,t),muted:Qe(this.hass,e.mute),covered:Qe(this.hass,this.entity(e,"camera_covered"))},{screen:()=>this.open({kind:"screen",slot:0}),camera:()=>a?this.open({kind:"camera",slot:0}):void 0,mute:()=>this.toggle("switch",e.mute),volume:n=>this.volume(e,n)})}entity(e,t){return e.by.get(t)?.[0]?.entity_id}value(e,t){let r=this.entity(e,t);return r?this.hass.states[r]?.state:void 0}screen(e,t){let r=At[this.value(e,"theme")??""]??At[Xi],a=Number(this.value(e,"screen_brightness")??this.value(e,"backlight")),n=this.hass.config?.time_zone,d=new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"2-digit",hour12:this.value(e,"clock_format")==="12 hour",timeZone:n}).formatToParts(this.now).filter(f=>f.type==="hour"||f.type==="minute"||f.type==="literal").map(f=>f.value).join("").trim(),h=this.value(e,"clock_date")==="on"?new Intl.DateTimeFormat(void 0,{weekday:"short",month:"short",day:"numeric",timeZone:n}).format(this.now):null;return{palette:r,ink:Zi[this.value(e,"clock_color")??""]??r.text,lit:Number.isNaN(a)?1:.15+.85*Math.min(1,Math.max(0,a/100)),time:d,date:h,size:this.value(e,"clock_size")??"",place:this.value(e,"clock_position")??"",line:this.playing(e,t)}}playing(e,t){if(t!=="idle"&&t!=="playing")return Qi[t]??t;let r=e.player?this.hass.states[e.player]:void 0,a=r?.attributes.media_title??this.value(e,"sendspin_title"),n=r?.attributes.media_artist??this.value(e,"sendspin_artist");return t!=="playing"||!a?"":n?`${a} \xB7 ${n}`:String(a)}foot(e,t){return o`<div class="foot">
      <div class="label">
        <div class="name">${k(e.device)}</div>
        <div class="status">${Qi[t]??t}</div>
      </div>
      <div class="tail">
        ${this.square(ce.activity,"Activity",()=>this.open({kind:"activity",slot:0}))}
        ${this.square(ce.device,"Settings",()=>this.open({kind:"device",slot:0}))}
        ${this.square(ce.diagnostics,"Diagnostics",()=>this.open({kind:"diagnostics",slot:0}))}
      </div>
    </div>`}tapped(e,t){if(e.segments[t]){this.picked=this.picked===t?null:t;return}if(this.switchedOff(e)[t]){this.offering=t;return}this.open({kind:"ring",slot:0})}switchedOff(e){return Gi(this.hass,e)}offer(e,t){let r=this.switchedOff(e),a=async n=>{for(let l of n)l&&await Li(this.hass,l);this.offering=null,this.picked=t};return o`<div class="foot">
      <div class="label">
        <div class="name">Segment ${t+1} disabled</div>
      </div>
      <div class="tail">
        <button class="plain" @click=${()=>a([r[t]])}>Enable</button>
        <button class="plain" @click=${()=>a(r)}>Enable all</button>
        <button class="plain quiet" @click=${()=>this.offering=null}>Cancel</button>
      </div>
    </div>`}palette(e){let t=e.segments[this.picked];return o`<div class="foot palette">
      <div class="top">
        <div class="name">Segment ${this.picked+1}</div>
        <div class="tail">
          ${this.square(ce.follow,"Follow the ring",()=>{this.hass.callService("light","turn_off",{entity_id:t}),this.picked=null})}
          ${this.square(ce.close,"Done",()=>this.picked=null)}
        </div>
      </div>
      <div class="swatches">
        ${Ve.map(([r,a])=>o`<button
            class="swatch"
            title=${r}
            aria-label=${r}
            style=${`background:rgb(${a.join(",")})`}
            @click=${()=>this.hass.callService("light","turn_on",{entity_id:t,rgb_color:a})}
          ></button>`)}
      </div>
    </div>`}segments(e){let t=Ee(this.hass,e.ring);return Array.from({length:Me},(r,a)=>{let n=Ee(this.hass,e.segments[a])??t;return{fill:n?`rgb(${n.rgb.join(",")})`:"var(--el-ring-off)",opacity:n?.25+.75*n.level:1}})}glow(e){return Ee(this.hass,e.ring)||e.segments.some(r=>Ee(this.hass,r))?.55:0}side(e){let t=Ri(e),r=t.filter(a=>a.kind==="assistant").length>1;return t.map(({kind:a,slot:n})=>this.square(ce[a],this.titled(a,n),()=>this.open({kind:a,slot:n}),r&&a==="assistant"?n:null))}titled(e,t){let r={ring:"Ring",microphone:"Microphone",playback:"Playback",screen:"Screen",poster:"Posters",camera:"Camera",assistant:"Assistant",device:"Settings",diagnostics:"Diagnostics",activity:"Activity"}[e];return t?`${r} ${t}`:r}square(e,t,r,a=null){return o`<button class="sq" title=${t} aria-label=${t} @click=${r}>
      <ha-icon .icon=${e}></ha-icon>
      ${a?o`<span class="badge">${a}</span>`:p}
    </button>`}popup(e){if(!this.opened)return p;let{kind:t,slot:r}=this.opened,a,n=[];return t==="device"?a=zi(e):t==="diagnostics"?{widgets:n,sections:a}=Oi(e):{widgets:n,sections:a}=Pi(t,e,r),o`<echolocal-dialog
      .hass=${this.hass}
      .heading=${this.titled(t,r)}
      .subtitle=${k(e.device)}
      .icon=${ce[t]}
      .sections=${a}
      .widgets=${n}
      .device=${e.device.name??""}
      .deviceId=${e.device.id}
      .help=${this.config.help!==!1}
      .about=${hi(t)}
      @closed=${()=>this.opened=null}
    ></echolocal-dialog>`}open(e){this.opened=e}pressed(e,t){if(t==="down"){this.holding=!1,this.timer=window.setTimeout(()=>this.holding=!0,ei);return}clearTimeout(this.timer);let r=this.holding;if(this.holding=!1,t==="cancel")return;let a=Ki(e),n=a[r&&a.length>1?1:0];n?this.hass.callService("button","press",{entity_id:n}):this.moreInfo(e.satellite)}toggle(e,t){t&&this.hass.callService(e,"toggle",{entity_id:t})}volume(e,t){e.player&&this.hass.callService("media_player",t>0?"volume_up":"volume_down",{entity_id:e.player})}moreInfo(e){e&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}};P.styles=y(ii),c([u({attribute:!1})],P.prototype,"hass",2),c([m()],P.prototype,"config",2),c([m()],P.prototype,"opened",2),c([m()],P.prototype,"picked",2),c([m()],P.prototype,"holding",2),c([m()],P.prototype,"offering",2),c([m()],P.prototype,"now",2),P=c([x("echolocal-satellite-card")],P);var ve=class extends b{setConfig(i){this.config={...i}}render(){if(!this.hass||!this.config)return p;let i=I(this.hass,this.config.device_id),e=[{name:"device_id",required:!0,selector:{select:{mode:"dropdown",options:T(this.hass).map(t=>({value:t.id,label:k(t)}))}}},{name:"shell",selector:{select:{mode:"dropdown",options:[{value:"auto",label:"Auto (from device)"},{value:"black",label:"Black"},{value:"white",label:"White"},{value:"grey",label:"Grey"}]}}},{name:"help",selector:{boolean:{}}}].filter(t=>t.name!=="shell"||!i||ye(i.board).shape==="dot");return o`<ha-form
      .hass=${this.hass}
      .data=${{help:!0,shell:"auto",...this.config}}
      .schema=${e}
      .computeLabel=${t=>Js[t.name]??t.name}
      @value-changed=${t=>this.emit(t.detail.value)}
    ></ha-form>`}emit(i){this.config={...this.config,...i},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}};c([u({attribute:!1})],ve.prototype,"hass",2),c([m()],ve.prototype,"config",2),ve=c([x("echolocal-satellite-card-editor")],ve);var Tt=[];function E(s){Tt.push(s),Tt.sort((i,e)=>i.order-e.order||i.title.localeCompare(e.title))}function Mt(s){return Tt.filter(i=>s||!i.admin)}function er(s,i){let e=Ct(s),t=Mt(i);return t.find(r=>r.path===e)??t[0]}function tr(s,i){let e=i?`${s}/${i}`:s;location.pathname!==e&&history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))}function Ht(s,i){if(i!==void 0)return Ct(i);let e=location.pathname;return Ct(e.startsWith(s)?e.slice(s.length):"")}function Ct(s){return s.replace(/^\/+|\/+$/g,"")}var ir=`:host{display:block;height:100%;overflow:auto;background:var(--primary-background-color);color:var(--primary-text-color)}header{position:sticky;top:0;z-index:2;display:flex;align-items:center;background:var(--primary-background-color);border-bottom:1px solid color-mix(in srgb,var(--primary-text-color) 10%,transparent)}ha-menu-button{flex:0 0 auto;margin-left:4px}.bar{flex:1 1 auto;min-width:0;max-width:1280px;margin:0 auto;padding:0 16px;display:flex;gap:4px;overflow-x:auto;scrollbar-width:none}.bar::-webkit-scrollbar{display:none}button{display:flex;align-items:center;gap:7px;flex:0 0 auto;padding:14px 14px 12px;border:none;border-bottom:2px solid transparent;background:none;color:var(--secondary-text-color);font:inherit;font-size:.88rem;cursor:pointer}button:hover{color:var(--primary-text-color)}button[data-here=true]{color:var(--primary-color);border-bottom-color:var(--primary-color)}button ha-icon{--mdc-icon-size: 19px;display:flex}.page{max-width:1280px;margin:0 auto;padding:20px 16px 48px;box-sizing:border-box}@media(max-width:600px){button span{display:none}button{padding:14px 16px 12px}}
`;var Et="";async function it(s){try{return await s.callWS({type:"config/label_registry/list"})??[]}catch{return[]}}function rt(s,i){let e=new Map,t=[];for(let a of s){let n=a.labels??[];if(!n.length){t.push(a);continue}for(let l of n){let d=i.find(f=>f.label_id===l),h=e.get(l);h?h.devices.push(a):e.set(l,{id:l,name:d?.name??l,icon:d?.icon,devices:[a]})}}let r=[...e.values()].sort((a,n)=>a.name.localeCompare(n.name));return t.length&&r.push({id:Et,name:"Ungrouped",devices:t}),r}async function rr(s,i){try{return await s.callWS({type:"config/label_registry/create",name:i})}catch{return null}}async function sr(s,i,e){await s.callWS({type:"config/label_registry/update",label_id:i,name:e})}async function ar(s,i){await s.callWS({type:"config/label_registry/delete",label_id:i})}async function nr(s,i,e){await s.callWS({type:"config/device_registry/update",device_id:i,labels:[...new Set(e)]})}async function or(s,i,e,t){let r=0,a=0,n=0;return await Promise.all(i.map(async l=>{let d=lr(s,l,e);if(!d){n+=1;return}try{await t(d),r+=1}catch{a+=1}})),{done:r,failed:a,missing:n}}function st(s,i,e){let t=i.map(a=>lr(s,a,e)).filter(a=>!!a),r=[...new Set(t.map(a=>s.states[a]?.state).filter(Boolean))];return{value:r.length===1?r[0]:null,mixed:r.length>1,entities:t}}function lr(s,i,e){return I(s,i.id)?.by.get(e)?.[0]?.entity_id}var cr=`:host{display:block;margin-bottom:10px}.bar{display:flex;align-items:center;gap:12px;padding:8px 4px 8px 2px;border-bottom:1px solid color-mix(in srgb,var(--primary-text-color) 10%,transparent)}.name{font-size:1.05rem;color:var(--primary-text-color)}.count{font-size:.78rem;color:var(--secondary-text-color)}.spacer{flex:1}button{display:flex;align-items:center;gap:6px;padding:5px 11px;border:1px solid color-mix(in srgb,var(--primary-text-color) 16%,transparent);border-radius:999px;background:none;color:var(--secondary-text-color);font:inherit;font-size:.8rem;cursor:pointer}button:hover{color:var(--primary-text-color);border-color:color-mix(in srgb,var(--primary-text-color) 34%,transparent)}button[data-on=true]{color:var(--primary-color);border-color:color-mix(in srgb,var(--primary-color) 50%,transparent);background:color-mix(in srgb,var(--primary-color) 12%,transparent)}button ha-icon{--mdc-icon-size: 16px;display:flex}.mixed{font-size:.7rem;opacity:.75}
`;var dr="mic_mute",pr="ring",hr="speaker",ee=class extends b{constructor(){super(...arguments);this.said=""}render(){if(!this.hass||!this.group)return p;let e=this.group.devices,t=st(this.hass,e,dr),r=st(this.hass,e,pr);return o`<div class="bar">
      ${this.group.icon?o`<ha-icon .icon=${this.group.icon}></ha-icon>`:p}
      <div class="name">${this.group.name}</div>
      <div class="count">${e.length} ${e.length===1?"device":"devices"}</div>
      <div class="spacer"></div>
      ${this.said?o`<div class="short">${this.said}</div>`:p}

      ${t.entities.length?this.toggle("mdi:microphone-off","Mute all",t,()=>this.write(dr,"switch",t.value==="on"?"turn_off":"turn_on")):p}
      ${r.entities.length?this.toggle("mdi:lightbulb-outline","Ring",r,()=>this.write(pr,"light",r.value==="on"?"turn_off":"turn_on")):p}
      ${this.has(hr)?o`<button title="Stop whatever is playing" @click=${()=>this.write(hr,"media_player","media_stop")}>
            <ha-icon icon="mdi:stop"></ha-icon>Stop
          </button>`:p}
    </div>`}toggle(e,t,r,a){return o`<button data-on=${String(r.value==="on")} @click=${a}>
      <ha-icon .icon=${e}></ha-icon>${t}
      ${r.mixed?o`<span class="mixed">mixed</span>`:p}
    </button>`}has(e){return st(this.hass,this.group.devices,e).entities.length>0}async write(e,t,r){let{done:a,failed:n,missing:l}=await or(this.hass,this.group.devices,e,h=>this.hass.callService(t,r,{entity_id:h})),d=n+l;this.said=d?`${a} of ${a+d}`:"",this.said&&setTimeout(()=>this.said="",4e3)}};ee.styles=y(cr),c([u({attribute:!1})],ee.prototype,"hass",2),c([u({attribute:!1})],ee.prototype,"group",2),c([m()],ee.prototype,"said",2),ee=c([x("echolocal-groupbar")],ee);var ur=`:host{display:block}.group{margin-bottom:26px}.view{display:flex;justify-content:flex-end;margin-bottom:14px}.pair{display:flex;border:1px solid color-mix(in srgb,var(--primary-text-color) 16%,transparent);border-radius:999px;overflow:hidden}.pair button{display:flex;align-items:center;gap:6px;padding:5px 13px;border:none;background:none;color:var(--secondary-text-color);font:inherit;font-size:.8rem;cursor:pointer}.pair button:hover{color:var(--primary-text-color)}.pair button[data-on=true]{color:var(--primary-color);background:color-mix(in srgb,var(--primary-color) 14%,transparent)}.pair button ha-icon{--mdc-icon-size: 16px;display:flex}.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:16px;align-items:start}.empty{color:var(--secondary-text-color);max-width:46ch;line-height:1.5}
`;E({path:"",title:"Home",icon:"mdi:view-grid-outline",element:"echolocal-home",order:0});var mr="echolocal:home:grouped",j=class extends b{constructor(){super(...arguments);this.narrow=!1;this.known=[];this.asked=!1;this.grouped=localStorage.getItem(mr)!=="no";this.cards=new Map}updated(){this.asked||!this.hass||(this.asked=!0,this.load())}render(){if(!this.hass)return p;let e=T(this.hass);if(!e.length)return o`<div class="empty">
        No EchoLocal devices yet. One appears here once Home Assistant has adopted it over the ESPHome
        integration.
      </div>`;let t=rt(e,this.known),r=t.some(n=>n.id!==Et),a=this.grouped&&r?t:[{id:"all",name:"All devices",devices:e}];return o`
      ${r?o`<div class="view">
            <div class="pair">
              ${this.button(!0,"mdi:group","Grouped")}${this.button(!1,"mdi:view-grid-outline","All")}
            </div>
          </div>`:p}
      ${a.map(n=>this.group(n))}
    `}button(e,t,r){return o`<button
      data-on=${String(this.grouped===e)}
      @click=${()=>{this.grouped=e,localStorage.setItem(mr,e?"yes":"no")}}
    >
      <ha-icon .icon=${t}></ha-icon>${r}
    </button>`}group(e){return o`<div class="group">
      <echolocal-groupbar .hass=${this.hass} .group=${e}></echolocal-groupbar>
      <div class="grid">${e.devices.map(t=>this.card(e.id,t.id))}</div>
    </div>`}card(e,t){let r=`${e}/${t}`,a=this.cards.get(r);return a||(a=document.createElement("echolocal-satellite-card"),a.setConfig({device_id:t}),this.cards.set(r,a)),a.hass=this.hass,a}async load(){this.known=await it(this.hass)}};j.styles=y(ur),c([u({attribute:!1})],j.prototype,"hass",2),c([u({type:Boolean})],j.prototype,"narrow",2),c([m()],j.prototype,"known",2),c([m()],j.prototype,"asked",2),c([m()],j.prototype,"grouped",2),j=c([x("echolocal-home")],j);var fr=`:host{display:block}.make{display:flex;gap:8px;margin-bottom:20px}ha-input.new{flex:1;max-width:280px}table{width:100%;border-collapse:collapse;font-size:.9rem}th{padding:8px 10px;text-align:center;font-weight:600;font-size:.72rem;text-transform:uppercase;letter-spacing:.07em;color:var(--secondary-text-color);white-space:nowrap}th.who{text-align:left}th .label{display:flex;align-items:center;justify-content:center;gap:4px}th ha-input{--ha-input-text-align: center}th ha-icon-button{--mdc-icon-size: 15px;color:var(--secondary-text-color)}th ha-icon-button:hover{color:var(--error-color, #db4437)}td{padding:10px;border-top:1px solid color-mix(in srgb,var(--primary-text-color) 10%,transparent);text-align:center}td.who{text-align:left;color:var(--primary-text-color)}.none{color:var(--secondary-text-color);max-width:52ch;line-height:1.5}
`;E({path:"groups",title:"Groups",icon:"mdi:group",element:"echolocal-groups",order:30,admin:!0});var B=class extends b{constructor(){super(...arguments);this.known=[];this.asked=!1;this.naming="";this.busy=!1}connectedCallback(){super.connectedCallback(),this.hass?.connection?.subscribeEvents(()=>this.load(),"label_registry_updated").then(e=>this.stop=e).catch(()=>{})}disconnectedCallback(){super.disconnectedCallback(),this.stop?.()}updated(){this.asked||!this.hass||(this.asked=!0,this.load())}render(){if(!this.hass)return p;let e=T(this.hass),t=this.known;return o`
      <div class="make">
        <ha-input
          class="new"
          placeholder="New group"
          .value=${this.naming}
          @input=${r=>this.naming=r.target.value}
          @keydown=${r=>r.key==="Enter"&&this.make()}
        ></ha-input>
        <ha-button
          .disabled=${!this.naming.trim()||this.busy}
          .loading=${this.busy}
          @click=${this.make}
        >
          Add
        </ha-button>
      </div>

      ${e.length?o`<table>
            <thead>
              <tr>
                <th class="who">Device</th>
                ${t.map(r=>this.head(r))}
              </tr>
            </thead>
            <tbody>
              ${e.map(r=>this.row(r,t))}
            </tbody>
          </table>`:o`<div class="none">
            No EchoLocal devices yet, so there is nothing to group.
          </div>`}
    `}head(e){let t=rt(T(this.hass),this.known).find(r=>r.id===e.label_id)?.devices.length;return o`<th>
      <div class="label">
        <ha-input
          .value=${e.name}
          style=${`width:${Math.max(8,e.name.length+2)}ch`}
          @change=${r=>this.rename(e,r.target.value)}
        ></ha-input>
        <ha-icon-button
          .label=${t?`Delete ${e.name}, ${t} still in it`:`Delete ${e.name}`}
          @click=${()=>this.discard(e)}
        >
          <ha-icon icon="mdi:close"></ha-icon>
        </ha-icon-button>
      </div>
    </th>`}row(e,t){let r=e.labels??[];return o`<tr>
      <td class="who">${k(e)}</td>
      ${t.map(a=>o`<td>
          <ha-checkbox
            aria-label="${k(e)} in ${a.name}"
            .checked=${r.includes(a.label_id)}
            @change=${n=>this.set(e,a.label_id,n.target.checked)}
          ></ha-checkbox>
        </td>`)}
    </tr>`}async make(){let e=this.naming.trim();if(!e||this.busy)return;this.busy=!0,this.naming="";let t=await rr(this.hass,e);t&&(this.known=[...this.known,t].sort((r,a)=>r.name.localeCompare(a.name))),this.busy=!1,t||await this.load()}async rename(e,t){!t.trim()||t===e.name||(this.known=this.known.map(r=>r.label_id===e.label_id?{...r,name:t.trim()}:r),await sr(this.hass,e.label_id,t.trim()))}async discard(e){this.known=this.known.filter(t=>t.label_id!==e.label_id),await ar(this.hass,e.label_id)}async set(e,t,r){let a=new Set(e.labels??[]);r?a.add(t):a.delete(t),await nr(this.hass,e.id,[...a])}async load(){this.known=await it(this.hass)}};B.styles=y(fr),c([u({attribute:!1})],B.prototype,"hass",2),c([m()],B.prototype,"known",2),c([m()],B.prototype,"asked",2),c([m()],B.prototype,"naming",2),c([m()],B.prototype,"busy",2),B=c([x("echolocal-groups")],B);var gr=`:host{display:block}.filters{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px}.filters button{padding:5px 12px;border:1px solid color-mix(in srgb,var(--primary-text-color) 16%,transparent);border-radius:999px;background:none;color:var(--secondary-text-color);font:inherit;font-size:.8rem;cursor:pointer}.filters button[data-on=true]{color:var(--primary-color);border-color:color-mix(in srgb,var(--primary-color) 50%,transparent);background:color-mix(in srgb,var(--primary-color) 12%,transparent)}.turns{display:grid;gap:8px}.turn{display:grid;grid-template-columns:auto 9ch 1fr auto;gap:3px 12px;align-items:center;padding:11px 14px;border-radius:12px;background:color-mix(in srgb,var(--primary-text-color) 5%,transparent)}.right{display:flex;align-items:center;gap:10px;justify-content:flex-end}.when{font-size:.78rem;color:var(--secondary-text-color);font-variant-numeric:tabular-nums}.who{font-size:.88rem;color:var(--primary-text-color);overflow:hidden;text-overflow:ellipsis}.content{display:flex;flex-direction:column;gap:2px;min-width:0}.wake{font-size:.8rem;color:var(--primary-color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.said,.said-back{font-size:.88rem;color:var(--secondary-text-color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.said-back:before{content:"\\21b3  ";opacity:.6}.took{font-size:.8rem;color:var(--secondary-text-color);font-variant-numeric:tabular-nums}.took[data-bad=true]{color:var(--error-color, #db4437)}.bar{grid-column:2 / -1;display:flex;height:20px;margin-top:5px;border-radius:5px;overflow:hidden;background:color-mix(in srgb,var(--primary-text-color) 8%,transparent)}.slice{display:flex;align-items:center;justify-content:center;overflow:hidden;font-size:.68rem;font-variant-numeric:tabular-nums;color:var(--text-primary-color, #fff);white-space:nowrap}.slice[data-phase=listen_ms]{background:color-mix(in srgb,var(--info-color, #039be5) 55%,var(--primary-text-color))}.slice[data-phase=think_ms]{background:var(--secondary-text-color)}.slice[data-phase=speak_ms]{background:var(--success-color, #43a047)}.none{color:var(--secondary-text-color);max-width:56ch;line-height:1.5}.loading{display:flex;justify-content:center;padding:48px 0}.legend{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:14px;font-size:.72rem;color:var(--secondary-text-color)}.key{display:flex;align-items:center;gap:5px}.dot{width:9px;height:9px;border-radius:2px}
`;E({path:"activity",title:"Activity",icon:"mdi:timeline-text-outline",element:"echolocal-activity",order:20});var na=14,W=class extends b{constructor(){super(...arguments);this.seen=[];this.only="";this.asked=!1;this.loading=!0}updated(){this.asked||!this.hass||(this.asked=!0,this.listen())}disconnectedCallback(){super.disconnectedCallback(),this.stop?.()}render(){if(!this.hass)return p;let e=this.names(),t=this.only?this.seen.filter(a=>a.turn.device===this.only):this.seen,r=Math.max(1,...t.map(a=>me(a.turn)));return o`
      ${this.seen.length>0&&Object.keys(e).length>1?o`<div class="filters">
            <button data-on=${String(!this.only)} @click=${()=>this.only=""}>Everything</button>
            ${[...new Set(this.seen.map(a=>a.turn.device))].map(a=>o`<button
                data-on=${String(this.only===a)}
                @click=${()=>this.only=a}
              >
                ${e[a]?.label??a}
              </button>`)}
          </div>`:p}

      ${t.length?o`<div class="legend">
              ${[["listen_ms","Listen"],["think_ms","Think"],["speak_ms","Reply"]].map(([a,n])=>o`<span class="key"
                  ><span class="dot slice" data-phase=${a}></span>${n}</span
                >`)}
            </div>
            <div class="turns">${t.map(a=>this.row(a,e,r))}</div>`:this.loading?o`<div class="loading"><ha-spinner size="large"></ha-spinner></div>`:o`<div class="none">No recent activity found.</div>`}
    `}row(e,t,r){let a=ue(e.turn),n=me(e.turn),l=e.turn.outcome!=="completed",d=t[e.turn.device],h=d?.label??"elsewhere";return o`<div class="turn">
      <div class="when">${la(e.at)}</div>
      <div class="who">${h}</div>
      <div class="content">
        <div class="wake">${e.turn.wake_word}</div>
        ${e.turn.heard?o`<div class="said">${e.turn.heard}</div>`:p}
        ${e.turn.reply?o`<div class="said-back">${e.turn.reply}</div>`:p}
      </div>
      <div class="right">
        <div class="took" data-bad=${String(l)}>
          ${l?e.turn.outcome:`${(n/1e3).toFixed(1)}s`}
        </div>
        ${e.turn.audio_seconds?o`<echolocal-recording
              .hass=${this.hass}
              .device=${d?.node??""}
              .turn=${e.turn.id}
              .at=${e.at}
              .filename=${oa(e,h)}
            ></echolocal-recording>`:p}
      </div>
      ${a.length?o`<div class="bar">
            ${a.map(f=>o`<div
                class="slice"
                data-phase=${f.key}
                title=${`${f.label} ${f.ms} ms`}
                style=${`flex:0 0 ${f.ms/r*100}%`}
              >
                ${(f.ms/1e3).toFixed(1)}s
              </div>`)}
          </div>`:p}
    </div>`}names(){let e={};for(let t of T(this.hass))e[t.id]={label:k(t),node:t.name??""};return e}async listen(){let e=new Date(Date.now()-na*864e5),t=T(this.hass).map(r=>r.id);if(!t.length){this.asked=!1;return}try{this.stop=await Ge(this.hass,e,t,r=>{this.loading=!1,r.length&&(this.seen=[...r,...this.seen].sort((a,n)=>n.at-a.at))})}catch{this.loading=!1}}};W.styles=y(gr),c([u({attribute:!1})],W.prototype,"hass",2),c([m()],W.prototype,"seen",2),c([m()],W.prototype,"only",2),c([m()],W.prototype,"asked",2),c([m()],W.prototype,"loading",2),W=c([x("echolocal-activity")],W);function oa(s,i){let e=new Date(s.at).toISOString().replace(/[:.]/g,"-").slice(0,19),t=r=>r.toLowerCase().replace(/[^a-z0-9]+/g,"-");return`${e}-${t(i)}-${t(s.turn.wake_word)}.wav`}function la(s){return new Date(s).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})}var br=`:host{display:block}.scroll{overflow-x:auto}table{width:100%;border-collapse:collapse;font-size:.88rem}th{padding:8px 12px;text-align:right;white-space:nowrap;font-weight:600;font-size:.71rem;text-transform:uppercase;letter-spacing:.07em;color:var(--secondary-text-color);cursor:pointer;user-select:none}th:first-child{text-align:left}th:hover{color:var(--primary-text-color)}th[data-by=true]{color:var(--primary-color)}td{padding:11px 12px;text-align:right;white-space:nowrap;border-top:1px solid color-mix(in srgb,var(--primary-text-color) 10%,transparent);font-variant-numeric:tabular-nums;color:var(--secondary-text-color)}td.who{text-align:left;color:var(--primary-text-color)}td.who button{padding:0;border:none;background:none;color:inherit;font:inherit;cursor:pointer;text-align:left}td.who button:hover{color:var(--primary-color)}td[data-wrong=warn]{color:var(--warning-color, #ffa600)}td[data-wrong=bad]{color:var(--error-color, #db4437);font-weight:600}tr[data-off=true] td{opacity:.5}.none{color:var(--secondary-text-color)}
`;E({path:"health",title:"Health",icon:"mdi:heart-pulse",element:"echolocal-health",order:40});function Rt(s){let i=Number(s.state);return s.attributes.unit_of_measurement==="\xB0F"?(i-32)*5/9:i}var Pt=[{title:"Version",name:"firmware",show:s=>String(s.attributes.installed_version??"\u2014"),sort:s=>String(s.attributes.installed_version??"")},{title:"Update",name:"firmware",show:s=>s.state==="on"?"waiting":s.state==="off"?"current":s.state,wrong:s=>s.state==="on"?"warn":void 0,sort:s=>s.state},{title:"Wifi",name:"wifi_signal",show:s=>`${Math.round(Number(s.state))} ${s.attributes.unit_of_measurement||"dBm"}`,wrong:s=>Number(s.state)<-80?"bad":Number(s.state)<-70?"warn":void 0},{title:"CPU",name:"cpu_temperature",show:s=>`${Math.round(Number(s.state))}${s.attributes.unit_of_measurement||"\xB0C"}`,wrong:s=>Rt(s)>85?"bad":Rt(s)>70?"warn":void 0,sort:Rt},{title:"Load",name:"load_average",show:s=>Number(s.state).toFixed(2)},{title:"Memory",name:"memory_available",show:s=>`${Math.round(Number(s.state))} ${s.attributes.unit_of_measurement||"MB"}`,wrong:s=>Number(s.state)<40?"bad":Number(s.state)<80?"warn":void 0},{title:"Disk",name:"free_space",show:s=>`${Math.round(Number(s.state))} ${s.attributes.unit_of_measurement||"MB"}`,wrong:s=>Number(s.state)<50?"bad":Number(s.state)<150?"warn":void 0},{title:"Address",name:"ip_address",show:s=>s.state.split(", ")[0]??s.state}],te=class extends b{constructor(){super(...arguments);this.by="";this.down=!1}render(){if(!this.hass)return p;let e=T(this.hass);if(!e.length)return o`<div class="none">No EchoLocal devices yet.</div>`;let t=e.map(a=>this.read(a)),r=this.sort(t);return o`<div class="scroll">
      <table>
        <thead>
          <tr>
            ${this.head("Device")}${Pt.map(a=>this.head(a.title))}
          </tr>
        </thead>
        <tbody>
          ${r.map(a=>o`<tr data-off=${String(!a.up)}>
              <td class="who">
                <button @click=${()=>this.open(a.device)}>${a.name}</button>
              </td>
              ${Pt.map(n=>{let l=a.cells[n.title];return o`<td data-wrong=${l?.wrong??""}>${l?.text??"\u2014"}</td>`})}
            </tr>`)}
        </tbody>
      </table>
    </div>`}head(e){return o`<th
      data-by=${String(this.by===e)}
      @click=${()=>{this.down=this.by===e?!this.down:!1,this.by=e}}
    >
      ${e}
    </th>`}read(e){let t=I(this.hass,e.id),r={},a=!1;for(let n of Pt){let l=t?.by.get(n.name)?.[0]?.entity_id,d=l?this.hass.states[l]:void 0;if(!d||d.state==="unavailable"||d.state==="unknown")continue;a=!0;let h=Number(d.state),f=d.attributes.unit_of_measurement??"";r[n.title]={text:n.show?n.show(d):f?`${d.state} ${f}`:d.state,sort:n.sort?n.sort(d):Number.isFinite(h)&&d.state!==""?h:d.state,wrong:n.wrong?.(d)}}return{device:e,name:k(e),cells:r,up:a}}sort(e){if(!this.by)return e;let t=r=>this.by==="Device"?r.name:r.cells[this.by]?.sort??"";return[...e].sort((r,a)=>{let n=t(r),l=t(a),d=typeof n=="number"&&typeof l=="number"?n-l:String(n).localeCompare(String(l));return this.down?-d:d})}open(e){history.pushState(null,"",`/config/devices/device/${e.id}`),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))}};te.styles=y(br),c([u({attribute:!1})],te.prototype,"hass",2),c([m()],te.prototype,"by",2),c([m()],te.prototype,"down",2),te=c([x("echolocal-health")],te);var yr=`:host{display:block}.zone{display:flex;align-items:center;gap:12px;padding:16px;margin-bottom:16px;border:1px dashed color-mix(in srgb,var(--primary-text-color) 22%,transparent);border-radius:14px;background:color-mix(in srgb,var(--primary-text-color) 4%,transparent);cursor:pointer;transition:border-color .15s ease,background .15s ease}.zone[data-over=true]{border-color:var(--primary-color);background:color-mix(in srgb,var(--primary-color) 12%,transparent)}.zone ha-icon{--mdc-icon-size: 24px;color:var(--secondary-text-color);display:flex;flex:0 0 auto}.zone[data-over=true] ha-icon{color:var(--primary-color)}.lead{font-size:.95rem;color:var(--primary-text-color)}.sub{font-size:.78rem;color:var(--secondary-text-color)}.scroll{overflow-x:auto}table{width:100%;border-collapse:collapse;font-size:.85rem}th{padding:0 10px 6px;text-align:left;font-size:.68rem;font-weight:600;text-transform:uppercase;letter-spacing:.07em;color:var(--secondary-text-color);white-space:nowrap}td{padding:4px 10px;border-top:1px solid color-mix(in srgb,var(--primary-text-color) 8%,transparent);vertical-align:middle}tbody tr[data-used=true] td:first-child{box-shadow:inset 3px 0 0 var(--success-color, #43a047)}tbody tr[data-used=false] td:first-child{box-shadow:inset 3px 0 0 var(--info-color, #039be5)}tbody tr[data-bad=true] td:first-child{box-shadow:inset 3px 0 0 var(--error-color, #db4437)}tbody tr:hover td{background:color-mix(in srgb,var(--primary-text-color) 4%,transparent)}.say{width:22ch}.say ha-input{--ha-input-padding-top: 0;--ha-input-padding-bottom: 0}.say ha-input::part(wa-base){border-color:transparent;background:none;min-height:34px}.say ha-input:hover::part(wa-base){border-color:color-mix(in srgb,var(--primary-text-color) 22%,transparent)}.say ha-input:focus-within::part(wa-base){border-color:var(--primary-color)}.say ha-input::part(wa-input){font-size:.9rem;padding-inline:8px}.id{font-family:var(--ha-font-family-code, monospace);font-size:.78rem;color:var(--secondary-text-color);word-break:break-all}.facts{color:var(--secondary-text-color);font-size:.78rem;font-variant-numeric:tabular-nums;white-space:nowrap}.end{text-align:right}.acts{display:flex;gap:2px;justify-content:flex-end}.act{width:30px;height:30px;display:grid;place-items:center;padding:0;border:none;border-radius:50%;background:none;color:var(--secondary-text-color);cursor:pointer}.act:hover{background:color-mix(in srgb,var(--primary-color) 16%,transparent);color:var(--primary-color)}.act.bin:hover{background:color-mix(in srgb,var(--error-color, #db4437) 16%,transparent);color:var(--error-color, #db4437)}.act ha-icon{--mdc-icon-size: 18px;display:flex}tr.wrong td{border-top:none;padding-top:0;font-size:.76rem;color:var(--error-color, #db4437)}.none{padding:4px 0;font-size:.85rem;color:var(--secondary-text-color)}input[type=file]{display:none}
`;async function zt(s){try{return(await s.callWS({type:"echolocal/wake_words/list"}))?.wake_words??[]}catch{return[]}}var z=class extends b{constructor(){super(...arguments);this.inUse=new Set;this.words=[];this.over=!1;this.busy=!1;this.said="";this.asked=!1;this.dropped=e=>{e.preventDefault(),this.over=!1,this.add(e.dataTransfer?.files??null)}}updated(){this.asked||!this.hass||(this.asked=!0,this.refresh())}render(){return o`
      <div
        class="zone"
        data-over=${String(this.over)}
        @click=${()=>this.shadowRoot?.querySelector("input[type=file]")?.click()}
        @dragover=${e=>{e.preventDefault(),this.over=!0}}
        @dragleave=${()=>this.over=!1}
        @drop=${this.dropped}
      >
        ${this.busy?o`<ha-spinner></ha-spinner>`:o`<ha-icon icon="mdi:tray-arrow-up"></ha-icon>`}
        <div>
          <div class="lead">${this.busy?"Adding\u2026":"Drop a .tflite wake model here"}</div>
          <div class="sub">
            ${this.said||"Every satellite is offered the whole set and downloads what it is told to listen for"}
          </div>
        </div>
        <input
          type="file"
          accept=".tflite"
          multiple
          @change=${e=>this.add(e.target.files)}
        />
      </div>

      ${this.words.length?o`<div class="scroll">
            <table>
              <thead>
                <tr>
                  <th class="say">Wake word</th>
                  <th>File</th>
                  <th>Model</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                ${this.words.map(e=>this.row(e))}
              </tbody>
            </table>
          </div>`:o`<div class="none">
            Nothing in custom_wake_words yet. Whatever the firmware ships with is unaffected.
          </div>`}
    `}row(e){let t=[e.type||"no type",e.size?`${Math.round(e.size/1024)} KB`:"no model",...e.trained_languages.length?[e.trained_languages.join(", ")]:[]],r=this.inUse.has(e.wake_word);return o`<tr data-bad=${String(e.problems.length>0)} data-used=${String(r)}>
      <td class="say">
        <ha-input
          appearance="outlined"
          .value=${e.wake_word}
          placeholder="what wakes it"
          @change=${a=>this.rename(e,a.target.value)}
        ></ha-input>
      </td>
      <td class="id">${e.id}</td>
      <td class="facts">${t.join(" \xB7 ")}</td>
      <td class="end">
        <div class="acts">
          ${e.model_url?o`<a class="act" href=${e.model_url} download title=${`${e.id}.tflite`}>
                <ha-icon icon="mdi:waveform"></ha-icon>
              </a>`:p}
          ${e.config_url?o`<a class="act" href=${e.config_url} download title=${`${e.id}.json`}>
                <ha-icon icon="mdi:code-json"></ha-icon>
              </a>`:p}
          <button class="act bin" title=${`Remove ${e.id}`} @click=${()=>this.discard(e)}>
            <ha-icon icon="mdi:trash-can-outline"></ha-icon>
          </button>
        </div>
      </td>
    </tr>
    ${e.problems.length?o`<tr class="wrong" data-bad="true">
          <td colspan="4">${e.problems.join(". ")}.</td>
        </tr>`:p}`}async add(e){let t=[...e??[]].filter(r=>r.name.endsWith(".tflite"));if(!t.length){this.said="A wake model is a .tflite file.";return}this.busy=!0,this.said="";for(let r of t){let a=new FormData;a.append("file",r);try{let n=await fetch("/api/echolocal/wake_words",{method:"POST",body:a,headers:this.credentials()});if(!n.ok){let l=await n.json().catch(()=>({}));this.said=l.error??`Home Assistant refused ${r.name}.`;break}}catch(n){this.said=`That did not reach Home Assistant: ${n}`;break}}this.busy=!1,await this.refresh()}async rename(e,t){t!==e.wake_word&&(await this.hass.callWS({type:"echolocal/wake_words/update",wake_word_id:e.id,wake_word:t}),await this.refresh())}async discard(e){await this.hass.callWS({type:"echolocal/wake_words/delete",wake_word_id:e.id}),await this.refresh()}async refresh(){this.words=await zt(this.hass)}credentials(){let e=this.hass.auth?.data?.access_token;return e?{authorization:`Bearer ${e}`}:{}}};z.styles=y(yr),c([u({attribute:!1})],z.prototype,"hass",2),c([u({attribute:!1})],z.prototype,"inUse",2),c([m()],z.prototype,"words",2),c([m()],z.prototype,"over",2),c([m()],z.prototype,"busy",2),c([m()],z.prototype,"said",2),c([m()],z.prototype,"asked",2),z=c([x("echolocal-wake-words")],z);var xr=`:host{display:block}h2.first{margin-top:0}h2{margin:26px 0 10px;font-size:.72rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--secondary-text-color)}.listening{display:grid;gap:8px}.who{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;padding:10px 14px;border-radius:12px;background:color-mix(in srgb,var(--primary-text-color) 5%,transparent);font-size:.9rem}.who .name{color:var(--primary-text-color);min-width:8ch}.word{padding:2px 9px;border-radius:999px;font-size:.78rem;background:color-mix(in srgb,var(--primary-color) 16%,transparent);color:var(--primary-color)}.word[data-gone=true]{background:color-mix(in srgb,var(--error-color, #db4437) 16%,transparent);color:var(--error-color, #db4437)}.spare{font-size:.85rem;color:var(--secondary-text-color);line-height:1.5}.heading{display:flex;align-items:baseline;gap:14px;flex-wrap:wrap}.legend{display:flex;gap:14px;flex-wrap:wrap;margin-left:auto;font-size:.72rem;color:var(--secondary-text-color)}.key{display:flex;align-items:center;gap:5px}.dot{width:9px;height:9px;border-radius:2px;background:var(--info-color, #039be5)}.dot[data-used=true]{background:var(--success-color, #43a047)}
`;E({path:"wake-words",title:"Wake words",icon:"mdi:waveform",element:"echolocal-words",order:10,admin:!0});var ie=class extends b{constructor(){super(...arguments);this.words=[];this.asked=!1;this.again=()=>this.requestUpdate()}connectedCallback(){super.connectedCallback(),window.addEventListener(F,this.again)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(F,this.again)}updated(){this.asked||!this.hass||(this.asked=!0,this.load())}render(){if(!this.hass)return p;let e=this.chosen(),t=new Set(this.words.filter(a=>a.problems.length&&a.wake_word).map(a=>a.wake_word)),r=new Set(e.flatMap(a=>a.words));return o`
      <h2 class="first">Listening for</h2>
      ${e.length?o`<div class="listening">
            ${e.map(a=>o`<div class="who">
                <span class="name">${a.name}</span>
                ${a.words.map(n=>o`<span
                      class="word"
                      data-gone=${String(t.has(n))}
                      title=${t.has(n)?"Its library entry is broken, so it is not offered":""}
                      >${n}</span
                    >`)}
              </div>`)}
          </div>`:o`<div class="spare">No devices have picked a wake word yet.</div>`}

      <div class="heading">
        <h2>The library</h2>
        <div class="legend">
          <span class="key"><span class="dot" data-used="true"></span>Used</span>
          <span class="key"><span class="dot" data-used="false"></span>Unused</span>
        </div>
      </div>
      <echolocal-wake-words .hass=${this.hass} .inUse=${r}></echolocal-wake-words>
    `}chosen(){return T(this.hass).map(e=>{let r=(I(this.hass,e.id)?.by.get("wake_word")??[]).map(a=>this.hass.states[a.entity_id]?.state).filter(a=>a!=="no_wake_word").filter(a=>!!a&&a!=="unknown"&&a!=="None");return{name:k(e),words:r}}).filter(e=>e.words.length)}async load(){this.words=await zt(this.hass)}};ie.styles=y(xr),c([u({attribute:!1})],ie.prototype,"hass",2),c([m()],ie.prototype,"words",2),c([m()],ie.prototype,"asked",2),ie=c([x("echolocal-words")],ie);async function vr(s){return(await s.callWS({type:"echolocal/tones/list"})).tones}function wr(s){let i=s.auth?.data?.access_token;return i?{authorization:`Bearer ${i}`}:{}}async function $r(s,i,e,t,r=""){let a=new FormData;a.append("name",i),r&&a.append("key",r),a.append("start",String(t.start)),a.append("end",String(t.end)),a.append("original",e,e.name),a.append("tone",t.wav,"tone.wav");let n=await fetch("/api/echolocal/tones",{method:"POST",body:a,headers:wr(s)}),l=await n.json().catch(()=>({}));if(!n.ok)throw new Error(l.error??"Home Assistant refused the tone.");return l}async function kr(s,i){let e=await fetch(`/api/echolocal/tones/${encodeURIComponent(i)}/tone`,{headers:wr(s)});if(!e.ok)throw new Error("Home Assistant did not send the tone.");return URL.createObjectURL(await e.blob())}async function _r(s,i){let e=new AudioContext,t;try{t=await e.decodeAudioData(await s.arrayBuffer())}catch{throw new Error("This browser cannot read that file as audio.")}finally{e.close()}let r=Math.ceil(t.duration*48e3),a=new OfflineAudioContext(1,Math.max(r,1),48e3),n=a.createBufferSource();n.buffer=t,n.connect(a.destination),n.start();let l=(await a.startRendering()).getChannelData(0),d=0,h=l.length;if(i.trim){for(;d<h&&Math.abs(l[d])<.003;)d++;for(;h>d&&Math.abs(l[h-1])<.003;)h--}let f=30*48e3,g=h-d>f;if(g&&(h=d+f),l=l.slice(d,h),!l.length)throw new Error("That file is silent.");if(i.even){let w=0;for(let $ of l)w=Math.max(w,Math.abs($));if(w>0){let $=.9/w;for(let _=0;_<l.length;_++)l[_]*=$}}return{wav:ha(l),seconds:l.length/48e3,cut:g,start:d/48e3,end:h/48e3}}function ha(s){let i=s.length*2,e=new DataView(new ArrayBuffer(44+i)),t=(r,a)=>{for(let n=0;n<a.length;n++)e.setUint8(r+n,a.charCodeAt(n))};t(0,"RIFF"),e.setUint32(4,36+i,!0),t(8,"WAVE"),t(12,"fmt "),e.setUint32(16,16,!0),e.setUint16(20,1,!0),e.setUint16(22,1,!0),e.setUint32(24,48e3,!0),e.setUint32(28,48e3*2,!0),e.setUint16(32,2,!0),e.setUint16(34,16,!0),t(36,"data"),e.setUint32(40,i,!0);for(let r=0;r<s.length;r++){let a=Math.max(-1,Math.min(1,s[r]));e.setInt16(44+r*2,Math.round(a*32767),!0)}return new Blob([e.buffer],{type:"audio/wav"})}function Sr(s){let e=s.replace(/\.[^.]+$/,"").replace(/[_-]+/g," ").replace(/\s+/g," ").trim();return e?e[0].toUpperCase()+e.slice(1):"Tone"}var Ar=`:host{display:block;--tint: color-mix(in srgb, var(--primary-text-color) 5%, transparent);--edge: color-mix(in srgb, var(--primary-text-color) 12%, transparent)}.heading{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px}h2{margin:0;font-size:.72rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--secondary-text-color)}.add{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border-radius:999px;background:color-mix(in srgb,var(--primary-color) 14%,transparent);color:var(--primary-color);font-size:.85rem;cursor:pointer;--mdc-icon-size: 18px}.add input{display:none}.list{display:grid;gap:8px}.tone,.draft{display:grid;gap:8px;padding:10px 14px;border-radius:12px;background:var(--tint)}.draft{margin-bottom:12px;border:1px dashed color-mix(in srgb,var(--primary-color) 50%,transparent)}.row{display:flex;align-items:center;gap:8px;min-width:0}.title{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--primary-text-color);cursor:text}input.name,input.search{flex:1;min-width:0;padding:6px 10px;border:1px solid var(--edge);border-radius:8px;background:var(--card-background-color, transparent);color:var(--primary-text-color);font:inherit}.length,.source,.state{color:var(--secondary-text-color);font-size:.8rem;font-variant-numeric:tabular-nums}.source{margin-left:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}button{font:inherit;cursor:pointer}button.icon{display:inline-flex;padding:4px;border:none;border-radius:8px;background:none;color:var(--secondary-text-color);--mdc-icon-size: 20px}button.icon:hover{color:var(--primary-text-color);background:var(--tint)}button.icon.danger{color:var(--error-color, #db4437)}button.icon:disabled{opacity:.4;cursor:default}.options label{display:inline-flex;align-items:center;gap:4px;font-size:.85rem}.actions{justify-content:flex-end}button.text,button.primary{padding:6px 14px;border-radius:999px;border:none}button.text{background:none;color:var(--secondary-text-color)}button.primary{background:var(--primary-color);color:var(--text-primary-color, #fff)}button.primary:disabled{opacity:.5;cursor:default}.devices{display:flex;align-items:center;gap:6px;padding:4px 0;border:none;background:none;color:var(--secondary-text-color);font-size:.85rem;text-align:left;--mdc-icon-size: 16px}.devices span{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.picker{display:grid;gap:4px;max-height:260px;overflow-y:auto;padding-top:4px;border-top:1px solid var(--edge)}.device{display:flex;align-items:center;gap:8px;padding:4px 2px;font-size:.9rem}.device[data-offline=true]{opacity:.55}.note{font-size:.8rem;color:var(--secondary-text-color)}.said{margin-bottom:12px;padding:8px 12px;border-radius:8px;background:color-mix(in srgb,var(--error-color, #db4437) 12%,transparent);color:var(--primary-text-color);font-size:.85rem}.spare{padding:16px;border-radius:12px;background:var(--tint);color:var(--secondary-text-color);font-size:.9rem}
`;E({path:"tones",title:"Tones",icon:"mdi:music-note",element:"echolocal-tones",order:11,admin:!0});var M=class extends b{constructor(){super(...arguments);this.tones=[];this.asked=!1;this.said="";this.busy=!1;this.open="";this.search="";this.sending=new Set;this.renaming="";this.doomed="";this.playing="";this.again=()=>this.requestUpdate()}connectedCallback(){super.connectedCallback(),window.addEventListener(F,this.again)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(F,this.again),this.stop()}updated(){this.asked||!this.hass||(this.asked=!0,this.refresh())}render(){if(!this.hass)return p;let e=this.holders();return o`
      <div class="heading">
        <h2 class="first">Tones</h2>
        <label class="add">
          <ha-icon icon="mdi:plus"></ha-icon><span>Add tone</span>
          <input
            type="file"
            accept="audio/*"
            @change=${t=>this.pick(t.target.files)}
          />
        </label>
      </div>
      ${this.draft?this.renderDraft(this.draft):p}
      ${this.said?o`<div class="said">${this.said}</div>`:p}
      ${this.tones.length?o`<div class="list">${this.tones.map(t=>this.renderTone(t,e))}</div>`:o`<div class="spare">No tones yet. Add one to use it for alerts, timers and wake chimes.</div>`}
    `}renderDraft(e){let t=e.processed;return o`
      <div class="draft">
        <div class="row">
          <input
            class="name"
            .value=${e.name}
            placeholder="Name"
            @input=${r=>this.edit({name:r.target.value})}
          />
          <button class="icon" ?disabled=${!t} @click=${()=>t&&this.preview("draft",URL.createObjectURL(t.wav))}>
            <ha-icon icon=${this.playing==="draft"?"mdi:stop":"mdi:play"}></ha-icon>
          </button>
          <span class="length">${t?`${t.seconds.toFixed(1)} s`:"\u2026"}</span>
        </div>
        <div class="row options">
          <label><input type="checkbox" .checked=${e.trim} @change=${r=>this.edit({trim:r.target.checked},!0)} />Trim silence</label>
          <label><input type="checkbox" .checked=${e.even} @change=${r=>this.edit({even:r.target.checked},!0)} />Even out loudness</label>
          <span class="source">${e.file.name}</span>
        </div>
        ${t?.cut?o`<div class="note">Using the first 30 seconds.</div>`:p}
        ${e.replace?o`<div class="note">Replaces "${e.replace.name}" on the devices that have it.</div>`:p}
        <div class="row actions">
          <button class="text" @click=${()=>this.draft=void 0}>Cancel</button>
          <button class="primary" ?disabled=${!t||!e.name.trim()||this.busy} @click=${()=>this.save(e)}>
            ${this.busy?"Uploading\u2026":e.replace?"Replace":"Upload"}
          </button>
        </div>
      </div>
    `}renderTone(e,t){let r=t.filter(n=>n.tones.has(e.name)),a=this.search?t.filter(n=>n.name.toLowerCase().includes(this.search.toLowerCase())):t;return o`
      <div class="tone">
        <div class="row">
          ${this.renaming===e.key?o`<input
                class="name"
                .value=${e.name}
                @keydown=${n=>{n.key==="Enter"&&this.rename(e,n.target.value),n.key==="Escape"&&(this.renaming="")}}
                @blur=${n=>void this.rename(e,n.target.value)}
              />`:o`<span class="title" @click=${()=>this.renaming=e.key}>${e.name}</span>`}
          <span class="length">${e.length.toFixed(1)} s</span>
          <button class="icon" title="Play" @click=${()=>void this.play(e)}>
            <ha-icon icon=${this.playing===e.key?"mdi:stop":"mdi:play"}></ha-icon>
          </button>
          <button class="icon" title="Rename" @click=${()=>this.renaming=e.key}>
            <ha-icon icon="mdi:pencil"></ha-icon>
          </button>
          <button
            class="icon ${this.doomed===e.key?"danger":""}"
            title=${this.doomed===e.key?"Tap again to delete":"Delete"}
            @click=${()=>void this.discard(e)}
          >
            <ha-icon icon=${this.doomed===e.key?"mdi:delete-alert":"mdi:delete"}></ha-icon>
          </button>
        </div>
        <button class="devices" @click=${()=>this.open=this.open===e.key?"":e.key}>
          <ha-icon icon="mdi:speaker-multiple"></ha-icon>
          <span>${r.length?r.map(n=>n.name).join(", "):"On no devices"}</span>
          <ha-icon icon=${this.open===e.key?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
        </button>
        ${this.open===e.key?o`<div class="picker">
              ${t.length>6?o`<input
                    class="search"
                    placeholder="Search devices"
                    .value=${this.search}
                    @input=${n=>this.search=n.target.value}
                  />`:p}
              ${a.map(n=>{let l=`${e.key}:${n.id}`,d=n.online&&n.supported;return o`<label class="device" data-offline=${String(!d)}>
                  <input
                    type="checkbox"
                    .checked=${n.tones.has(e.name)}
                    ?disabled=${!d||this.sending.has(l)}
                    @change=${h=>void this.toggle(e,n,h.target.checked)}
                  />
                  <span>${n.name}</span>
                  ${n.online?n.supported?p:o`<span class="state">needs an update</span>`:o`<span class="state">offline</span>`}
                  ${this.sending.has(l)?o`<span class="state">sending…</span>`:p}
                </label>`})}
            </div>`:p}
      </div>
    `}holders(){return T(this.hass).map(e=>{let t=I(this.hass,e.id),r=t?.by.get("alerts_timer")?.[0],n=(r?this.hass.states[r.entity_id]:void 0)?.attributes?.options??[],l=[...t?.by.values()??[]].flat().map(d=>this.hass.states[d.entity_id]);return{id:e.id,name:k(e),online:l.some(d=>d&&d.state!=="unavailable"),supported:!!le(this.hass,e.name??"",bi),tones:new Set(n)}}).sort((e,t)=>e.name.localeCompare(t.name))}pick(e){let t=e?.[0];if(!t)return;let r=Sr(t.name),a=this.tones.find(n=>n.name.toLowerCase()===r.toLowerCase());this.said="",this.draft={file:t,name:r,trim:!0,even:!0,replace:a},this.process()}edit(e,t=!1){if(this.draft){if(this.draft={...this.draft,...e},"name"in e){let r=(e.name??"").trim().toLowerCase();this.draft.replace=this.tones.find(a=>a.name.toLowerCase()===r)}t&&this.process()}}async process(){let e=this.draft;if(e)try{let t=await _r(e.file,{trim:e.trim,even:e.even});this.draft?.file===e.file&&(this.draft={...this.draft,processed:t})}catch(t){this.said=String(t.message??t),this.draft=void 0}}async save(e){if(e.processed){this.busy=!0,this.said="";try{let t=await $r(this.hass,e.name.trim(),e.file,e.processed,e.replace?.key);if(this.draft=void 0,e.replace){let r=this.holders().filter(a=>a.online&&a.tones.has(e.replace.name));r.length&&await this.assign(t,r.map(a=>a.id))}}catch(t){this.said=String(t.message??t)}this.busy=!1,await this.refresh()}}async toggle(e,t,r){let a=`${e.key}:${t.id}`;this.sending=new Set([...this.sending,a]),this.said="";try{r?await this.assign(e,[t.id]):await this.hass.callService("echolocal","unassign_tone",{tone:e.key,device_id:[t.id]})}catch(l){this.said=`${t.name}: ${l.message??l}`}let n=new Set(this.sending);n.delete(a),this.sending=n}async assign(e,t){await this.hass.callService("echolocal","assign_tone",{tone:e.key,device_id:t})}async rename(e,t){if(this.renaming="",t=t.trim(),!(!t||t===e.name)){try{await this.hass.callWS({type:"echolocal/tones/rename",key:e.key,name:t})}catch(r){this.said=String(r.message??r)}await this.refresh()}}async discard(e){if(this.doomed!==e.key){this.doomed=e.key;return}this.doomed="";try{await this.hass.callWS({type:"echolocal/tones/delete",key:e.key})}catch(t){this.said=String(t.message??t)}await this.refresh()}async play(e){if(this.playing===e.key){this.stop();return}try{this.preview(e.key,await kr(this.hass,e.key))}catch(t){this.said=String(t.message??t)}}preview(e,t){let r=this.playing;this.stop(),r!==e&&(this.player=new Audio(t),this.playing=e,this.player.onended=()=>this.stop(),this.player.play(),this.requestUpdate())}stop(){this.player&&(this.player.pause(),URL.revokeObjectURL(this.player.src)),this.player=void 0,this.playing="",this.requestUpdate()}async refresh(){try{this.tones=await vr(this.hass)}catch(e){this.said=String(e.message??e)}}};M.styles=y(Ar),c([u({attribute:!1})],M.prototype,"hass",2),c([m()],M.prototype,"tones",2),c([m()],M.prototype,"asked",2),c([m()],M.prototype,"draft",2),c([m()],M.prototype,"said",2),c([m()],M.prototype,"busy",2),c([m()],M.prototype,"open",2),c([m()],M.prototype,"search",2),c([m()],M.prototype,"sending",2),c([m()],M.prototype,"renaming",2),c([m()],M.prototype,"doomed",2),M=c([x("echolocal-tones")],M);var Tr=`:host{display:block;--tint: color-mix(in srgb, var(--primary-text-color) 5%, transparent)}h2{margin:20px 0 12px;font-size:.72rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--secondary-text-color)}h2.first{margin-top:0}.list{display:grid;gap:8px}.action,.match{padding:10px 14px;border-radius:12px;background:var(--tint)}.action{display:grid;gap:6px}.title{font-weight:500}.quiet{color:var(--secondary-text-color);font-size:.85rem}.devices{display:flex;align-items:center;gap:6px;padding:4px 0;border:none;background:none;color:var(--secondary-text-color);font-size:.85rem;text-align:left;cursor:pointer;--mdc-icon-size: 16px}.devices span{flex:1}.picker{display:grid;gap:4px;max-height:260px;overflow-y:auto;padding-top:4px;border-top:1px solid var(--divider-color)}.device{display:flex;align-items:center;gap:8px;padding:4px 2px;font-size:.9rem;--mdc-icon-size: 18px}.device[data-offline=true]{opacity:.55}.picture svg{display:block;width:22px;height:auto}.state{margin-left:auto;color:var(--secondary-text-color);font-size:.8rem}.row{display:flex;flex-wrap:wrap;align-items:baseline;gap:8px}code{font-size:.8rem;color:var(--secondary-text-color)}ul{margin:0;padding-left:18px}.fixed{margin-left:6px;font-size:.8rem;color:var(--secondary-text-color)}.match{display:flex;flex-wrap:wrap;align-items:baseline;gap:10px}.when,.reply{color:var(--secondary-text-color);font-size:.85rem}.spare{color:var(--secondary-text-color);font-size:.9rem}
`;E({path:"actions",title:"Voice actions",icon:"mdi:gesture-tap-button",element:"echolocal-actions",order:12});function fa(s){return`${s.sentence}|${JSON.stringify(s.args??{})}`}var re=class extends b{constructor(){super(...arguments);this.open=""}disconnectedCallback(){super.disconnectedCallback(),this.stop?.then(e=>e()),this.stop=void 0}updated(){this.stop||!this.hass?.connection||(this.stop=this.hass.connection.subscribeMessage(e=>this.snapshot=e,{type:"echolocal/actions"}))}render(){if(!this.hass)return p;let e=this.byAction();return o`
      <h2 class="first">Voice actions</h2>
      ${e.length?o`<div class="list">${e.map(t=>this.renderAction(t))}</div>`:o`<div class="spare">No device has declared any actions yet.</div>`}
      <h2>Heard</h2>
      ${this.snapshot?.history.length?o`<div class="list">${this.snapshot.history.map(t=>this.renderMatch(t))}</div>`:o`<div class="spare">Nothing heard yet.</div>`}
    `}byAction(){let e=new Map;for(let[t,r]of Object.entries(this.snapshot?.devices??{}))for(let a of r.actions){let n=e.get(a.name)??{action:a,sentences:new Map,holders:[]};for(let l of a.triggers??[])n.sentences.set(fa(l),l);n.holders.push({id:t,voiced:(a.triggers?.length??0)>0,declared:!!a.switch,entity:a.entity??void 0}),e.set(a.name,n)}for(let t of e.values())t.holders.sort((r,a)=>this.name(r.id).localeCompare(this.name(a.id)));return[...e.values()].sort((t,r)=>(t.action.title||t.action.name).localeCompare(r.action.title||r.action.name))}renderAction(e){let{action:t}=e,r=t.args.map(l=>`${l.name}: ${l.type}`).join(", "),a=[...e.sentences.values()],n=e.holders.filter(l=>this.voiced(l));return o`
      <div class="action">
        <div class="row">
          <span class="title">${t.title||t.name}</span>
          <code>${t.name}(${r})</code>
        </div>
        ${a.length?o`<ul>
              ${a.map(l=>o`<li>
                    “${l.sentence}”${l.args?o`<span class="fixed">
                          ${Object.entries(l.args).map(([d,h])=>`${d}=${h}`).join(" ")}</span
                        >`:p}
                  </li>`)}
            </ul>`:o`<div class="quiet">No voice triggers</div>`}
        <button class="devices" @click=${()=>this.open=this.open===t.name?"":t.name}>
          <ha-icon icon="mdi:speaker-multiple"></ha-icon>
          <span>
            ${n.length} of ${e.holders.length}
            ${e.holders.length===1?"device":"devices"} listening
          </span>
          <ha-icon icon=${this.open===t.name?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
        </button>
        ${this.open===t.name?o`<div class="picker">${e.holders.map(l=>this.renderHolder(l))}</div>`:p}
      </div>
    `}renderHolder(e){let t=ye(this.hass.devices?.[e.id]?.model??""),r=e.entity;return o`
      <label class="device" data-offline=${String(!r)}>
        <input
          type="checkbox"
          .checked=${this.voiced(e)}
          ?disabled=${!r||!this.hass.user?.is_admin}
          @change=${a=>void this.setVoiced(r,a.target.checked)}
        />
        ${t.shape==="panel"?o`<span class="picture">${je(t.picture)}</span>`:o`<ha-icon icon=${t.shape==="dot"?"mdi:speaker":"mdi:tablet"}></ha-icon>`}
        <span>${this.name(e.id)}</span>
        ${r?p:o`<span class="state">${e.declared?"switch not found":"needs an update"}</span>`}
      </label>
    `}voiced(e){let t=e.entity?this.hass.states[e.entity]?.state:void 0;return t===void 0||t==="unavailable"?e.voiced:t==="on"}async setVoiced(e,t){await this.hass.callService("switch",t?"turn_on":"turn_off",{entity_id:e})}renderMatch(e){return o`
      <div class="match">
        <span class="when">${new Date(e.at*1e3).toLocaleTimeString()}</span>
        <span class="name">${e.device_id?this.name(e.device_id):"Unknown device"}</span>
        <span class="said">“${e.sentence}”</span>
        <code>${e.action}</code>
        <span class="reply">${e.reply||"silent"}</span>
      </div>
    `}name(e){return k(this.hass.devices?.[e])||e}};re.styles=y(Tr),c([u({attribute:!1})],re.prototype,"hass",2),c([m()],re.prototype,"snapshot",2),c([m()],re.prototype,"open",2),re=c([x("echolocal-actions")],re);var q=class extends b{constructor(){super(...arguments);this.narrow=!1;this.at="";this.made=new Map;this.moved=()=>{this.at=Ht(this.base(),void 0),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),window.addEventListener("location-changed",this.moved),window.addEventListener("popstate",this.moved)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("location-changed",this.moved),window.removeEventListener("popstate",this.moved)}render(){if(!this.hass)return p;let e=!!this.hass.user?.is_admin,t=Mt(e),r=er(this.where(),e);return o`
      <header>
        <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
        <div class="bar">${t.map(a=>this.button(a,a===r))}</div>
      </header>
      <div class="page">${r?this.body(r):p}</div>
    `}button(e,t){return o`<button
      data-here=${String(t)}
      @click=${()=>{this.at=e.path,tr(this.base(),e.path)}}
    >
      <ha-icon .icon=${e.icon}></ha-icon><span>${e.title}</span>
    </button>`}body(e){let t=this.made.get(e.path);return t||(t=document.createElement(e.element),this.made.set(e.path,t)),t.hass=this.hass,t.narrow=this.narrow,t}where(){return this.route?Ht(this.base(),this.route.path):this.at}base(){return this.route?.prefix??"/echolocal"}};q.styles=y(ir),c([u({attribute:!1})],q.prototype,"hass",2),c([u({type:Boolean})],q.prototype,"narrow",2),c([u({attribute:!1})],q.prototype,"route",2),c([u({attribute:!1})],q.prototype,"panel",2),c([m()],q.prototype,"at",2),q=c([x("echolocal-panel")],q);window.customCards=window.customCards??[];window.customCards.some(s=>s.type==="echolocal-satellite-card")||window.customCards.push({type:"echolocal-satellite-card",name:"EchoLocal Satellite",description:"An EchoLocal satellite, drawn as itself, with its controls live.",preview:!0,documentationURL:"https://github.com/ygelfand/echolocal-hacs"});
