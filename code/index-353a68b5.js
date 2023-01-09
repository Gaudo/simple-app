(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const Ji="modulepreload",Gi=function(e){return"/simple-app/"+e},Ge={},Zi=function(t,r,i){if(!r||r.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(r.map(n=>{if(n=Gi(n),n in Ge)return;Ge[n]=!0;const s=n.endsWith(".css"),d=s?'[rel="stylesheet"]':"";if(!!i)for(let h=o.length-1;h>=0;h--){const c=o[h];if(c.href===n&&(!s||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${d}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":Ji,s||(l.as="script",l.crossOrigin=""),l.href=n,document.head.appendChild(l),s)return new Promise((h,c)=>{l.addEventListener("load",h),l.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=window,Me=Pt.ShadowRoot&&(Pt.ShadyCSS===void 0||Pt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Le=Symbol(),Ze=new WeakMap;let Yr=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==Le)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Me&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=Ze.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ze.set(r,t))}return t}toString(){return this.cssText}};const Yi=e=>new Yr(typeof e=="string"?e:e+"",void 0,Le),Wt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,o,n)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1],e[0]);return new Yr(r,e,Le)},Xi=(e,t)=>{Me?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const i=document.createElement("style"),o=Pt.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=r.cssText,e.appendChild(i)})},Ye=Me?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return Yi(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Qt;const Rt=window,Xe=Rt.trustedTypes,Qi=Xe?Xe.emptyScript:"",Qe=Rt.reactiveElementPolyfillSupport,be={toAttribute(e,t){switch(t){case Boolean:e=e?Qi:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Xr=(e,t)=>t!==e&&(t==t||e==e),te={attribute:!0,type:String,converter:be,reflect:!1,hasChanged:Xr};let K=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,i)=>{const o=this._$Ep(i,r);o!==void 0&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,r=te){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,i){return{get(){return this[r]},set(o){const n=this[t];this[r]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||te}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,i=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of i)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)r.unshift(Ye(o))}else t!==void 0&&r.push(Ye(t));return r}static _$Ep(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,i;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Xi(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostConnected)===null||i===void 0?void 0:i.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostDisconnected)===null||i===void 0?void 0:i.call(r)})}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$EO(t,r,i=te){var o;const n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){const s=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:be).toAttribute(r,i.type);this._$El=t,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(t,r){var i;const o=this.constructor,n=o._$Ev.get(t);if(n!==void 0&&this._$El!==n){const s=o.getPropertyOptions(n),d=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:be;this._$El=n,this[n]=d.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,i){let o=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Xr)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,n)=>this[n]=o),this._$Ei=void 0);let r=!1;const i=this._$AL;try{r=this.shouldUpdate(i),r?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(i)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(i)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,i)=>this._$EO(i,this[i],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};K.finalized=!0,K.elementProperties=new Map,K.elementStyles=[],K.shadowRootOptions={mode:"open"},Qe==null||Qe({ReactiveElement:K}),((Qt=Rt.reactiveElementVersions)!==null&&Qt!==void 0?Qt:Rt.reactiveElementVersions=[]).push("1.5.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ee;const Ut=window,Q=Ut.trustedTypes,tr=Q?Q.createPolicy("lit-html",{createHTML:e=>e}):void 0,B=`lit$${(Math.random()+"").slice(9)}$`,Qr="?"+B,to=`<${Qr}>`,tt=document,bt=(e="")=>tt.createComment(e),_t=e=>e===null||typeof e!="object"&&typeof e!="function",ti=Array.isArray,eo=e=>ti(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",dt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,er=/-->/g,rr=/>/g,j=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ir=/'/g,or=/"/g,ei=/^(?:script|style|textarea|title)$/i,ro=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),yt=ro(1),et=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),nr=new WeakMap,Y=tt.createTreeWalker(tt,129,null,!1),io=(e,t)=>{const r=e.length-1,i=[];let o,n=t===2?"<svg>":"",s=dt;for(let a=0;a<r;a++){const l=e[a];let h,c,u=-1,p=0;for(;p<l.length&&(s.lastIndex=p,c=s.exec(l),c!==null);)p=s.lastIndex,s===dt?c[1]==="!--"?s=er:c[1]!==void 0?s=rr:c[2]!==void 0?(ei.test(c[2])&&(o=RegExp("</"+c[2],"g")),s=j):c[3]!==void 0&&(s=j):s===j?c[0]===">"?(s=o??dt,u=-1):c[1]===void 0?u=-2:(u=s.lastIndex-c[2].length,h=c[1],s=c[3]===void 0?j:c[3]==='"'?or:ir):s===or||s===ir?s=j:s===er||s===rr?s=dt:(s=j,o=void 0);const v=s===j&&e[a+1].startsWith("/>")?" ":"";n+=s===dt?l+to:u>=0?(i.push(h),l.slice(0,u)+"$lit$"+l.slice(u)+B+v):l+B+(u===-2?(i.push(void 0),a):v)}const d=n+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[tr!==void 0?tr.createHTML(d):d,i]};let Mt=class{constructor({strings:t,_$litType$:r},i){let o;this.parts=[];let n=0,s=0;const d=t.length-1,a=this.parts,[l,h]=io(t,r);if(this.el=Mt.createElement(l,i),Y.currentNode=this.el.content,r===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(o=Y.nextNode())!==null&&a.length<d;){if(o.nodeType===1){if(o.hasAttributes()){const c=[];for(const u of o.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(B)){const p=h[s++];if(c.push(u),p!==void 0){const v=o.getAttribute(p.toLowerCase()+"$lit$").split(B),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:n,name:m[2],strings:v,ctor:m[1]==="."?no:m[1]==="?"?ao:m[1]==="@"?lo:Kt})}else a.push({type:6,index:n})}for(const u of c)o.removeAttribute(u)}if(ei.test(o.tagName)){const c=o.textContent.split(B),u=c.length-1;if(u>0){o.textContent=Q?Q.emptyScript:"";for(let p=0;p<u;p++)o.append(c[p],bt()),Y.nextNode(),a.push({type:2,index:++n});o.append(c[u],bt())}}}else if(o.nodeType===8)if(o.data===Qr)a.push({type:2,index:n});else{let c=-1;for(;(c=o.data.indexOf(B,c+1))!==-1;)a.push({type:7,index:n}),c+=B.length-1}n++}}static createElement(t,r){const i=tt.createElement("template");return i.innerHTML=t,i}};function rt(e,t,r=e,i){var o,n,s,d;if(t===et)return t;let a=i!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[i]:r._$Cl;const l=_t(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((n=a==null?void 0:a._$AO)===null||n===void 0||n.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,r,i)),i!==void 0?((s=(d=r)._$Co)!==null&&s!==void 0?s:d._$Co=[])[i]=a:r._$Cl=a),a!==void 0&&(t=rt(e,a._$AS(e,t.values),a,i)),t}let oo=class{constructor(t,r){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var r;const{el:{content:i},parts:o}=this._$AD,n=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:tt).importNode(i,!0);Y.currentNode=n;let s=Y.nextNode(),d=0,a=0,l=o[0];for(;l!==void 0;){if(d===l.index){let h;l.type===2?h=new qt(s,s.nextSibling,this,t):l.type===1?h=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(h=new co(s,this,t)),this.u.push(h),l=o[++a]}d!==(l==null?void 0:l.index)&&(s=Y.nextNode(),d++)}return n}p(t){let r=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}},qt=class{constructor(t,r,i,o){var n;this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=o,this._$Cm=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=rt(this,t,r),_t(t)?t===x||t==null||t===""?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==et&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):eo(t)?this.k(t):this.g(t)}O(t,r=this._$AB){return this._$AA.parentNode.insertBefore(t,r)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==x&&_t(this._$AH)?this._$AA.nextSibling.data=t:this.T(tt.createTextNode(t)),this._$AH=t}$(t){var r;const{values:i,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Mt.createElement(o.h,this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===n)this._$AH.p(i);else{const s=new oo(n,this),d=s.v(this.options);s.p(i),this.T(d),this._$AH=s}}_$AC(t){let r=nr.get(t.strings);return r===void 0&&nr.set(t.strings,r=new Mt(t)),r}k(t){ti(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,o=0;for(const n of t)o===r.length?r.push(i=new qt(this.O(bt()),this.O(bt()),this,this.options)):i=r[o],i._$AI(n),o++;o<r.length&&(this._$AR(i&&i._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cm=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}},Kt=class{constructor(t,r,i,o,n){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=x}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,i,o){const n=this.strings;let s=!1;if(n===void 0)t=rt(this,t,r,0),s=!_t(t)||t!==this._$AH&&t!==et,s&&(this._$AH=t);else{const d=t;let a,l;for(t=n[0],a=0;a<n.length-1;a++)l=rt(this,d[i+a],r,a),l===et&&(l=this._$AH[a]),s||(s=!_t(l)||l!==this._$AH[a]),l===x?t=x:t!==x&&(t+=(l??"")+n[a+1]),this._$AH[a]=l}s&&!o&&this.j(t)}j(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},no=class extends Kt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===x?void 0:t}};const so=Q?Q.emptyScript:"";let ao=class extends Kt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==x?this.element.setAttribute(this.name,so):this.element.removeAttribute(this.name)}},lo=class extends Kt{constructor(t,r,i,o,n){super(t,r,i,o,n),this.type=5}_$AI(t,r=this){var i;if((t=(i=rt(this,t,r,0))!==null&&i!==void 0?i:x)===et)return;const o=this._$AH,n=t===x&&o!==x||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==x&&(o===x||n);n&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,i;typeof this._$AH=="function"?this._$AH.call((i=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},co=class{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){rt(this,t)}};const sr=Ut.litHtmlPolyfillSupport;sr==null||sr(Mt,qt),((ee=Ut.litHtmlVersions)!==null&&ee!==void 0?ee:Ut.litHtmlVersions=[]).push("2.5.0");const ho=(e,t,r)=>{var i,o;const n=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:t;let s=n._$litPart$;if(s===void 0){const d=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;n._$litPart$=s=new qt(t.insertBefore(bt(),d),d,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var re,ie;let F=class extends K{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const i=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=i.firstChild),i}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ho(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return et}};F.finalized=!0,F._$litElement$=!0,(re=globalThis.litElementHydrateSupport)===null||re===void 0||re.call(globalThis,{LitElement:F});const ar=globalThis.litElementPolyfillSupport;ar==null||ar({LitElement:F});((ie=globalThis.litElementVersions)!==null&&ie!==void 0?ie:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be=e=>t=>typeof t=="function"?((r,i)=>(customElements.define(r,i),i))(e,t):((r,i)=>{const{kind:o,elements:n}=i;return{kind:o,elements:n,finisher(s){customElements.define(r,s)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const uo=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function Ie(e){return(t,r)=>r!==void 0?((i,o,n)=>{o.constructor.createProperty(n,i)})(e,t,r):uo(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var oe;((oe=window.HTMLSlotElement)===null||oe===void 0?void 0:oe.prototype.assignedElements)!=null;function Lt(e){return e=e||[],Array.isArray(e)?e:[e]}function N(e){return`[Vaadin.Router] ${e}`}function po(e){if(typeof e!="object")return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return t==="Object"||t==="Array"?`${t} ${JSON.stringify(e)}`:t}const Bt="module",It="nomodule",_e=[Bt,It];function lr(e){if(!e.match(/.+\.[m]?js$/))throw new Error(N(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function ri(e){if(!e||!T(e.path))throw new Error(N('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,r=["component","redirect","bundle"];if(!W(e.action)&&!Array.isArray(e.children)&&!W(e.children)&&!zt(t)&&!r.some(i=>T(e[i])))throw new Error(N(`Expected route config "${e.path}" to include either "${r.join('", "')}" or "action" function but none found.`));if(t)if(T(t))lr(t);else if(_e.some(i=>i in t))_e.forEach(i=>i in t&&lr(t[i]));else throw new Error(N('Expected route bundle to include either "'+It+'" or "'+Bt+'" keys, or both'));e.redirect&&["bundle","component"].forEach(i=>{i in e&&console.warn(N(`Route config "${e.path}" has both "redirect" and "${i}" properties, and "redirect" will always override the latter. Did you mean to only use "${i}"?`))})}function dr(e){Lt(e).forEach(t=>ri(t))}function cr(e,t){let r=document.head.querySelector('script[src="'+e+'"][async]');return r||(r=document.createElement("script"),r.setAttribute("src",e),t===Bt?r.setAttribute("type",Bt):t===It&&r.setAttribute(It,""),r.async=!0),new Promise((i,o)=>{r.onreadystatechange=r.onload=n=>{r.__dynamicImportLoaded=!0,i(n)},r.onerror=n=>{r.parentNode&&r.parentNode.removeChild(r),o(n)},r.parentNode===null?document.head.appendChild(r):r.__dynamicImportLoaded&&i()})}function fo(e){return T(e)?cr(e):Promise.race(_e.filter(t=>t in e).map(t=>cr(e[t],t)))}function pt(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:e==="go",detail:t}))}function zt(e){return typeof e=="object"&&!!e}function W(e){return typeof e=="function"}function T(e){return typeof e=="string"}function ii(e){const t=new Error(N(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const G=new class{};function vo(e){const t=e.port,r=e.protocol,n=r==="http:"&&t==="80"||r==="https:"&&t==="443"?e.hostname:e.host;return`${r}//${n}`}function hr(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const r=e.composedPath?e.composedPath():e.path||[];for(let d=0;d<r.length;d++){const a=r[d];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){t=a;break}}for(;t&&t.nodeName.toLowerCase()!=="a";)t=t.parentNode;if(!t||t.nodeName.toLowerCase()!=="a"||t.target&&t.target.toLowerCase()!=="_self"||t.hasAttribute("download")||t.hasAttribute("router-ignore")||t.pathname===window.location.pathname&&t.hash!==""||(t.origin||vo(t))!==window.location.origin)return;const{pathname:o,search:n,hash:s}=t;pt("go",{pathname:o,search:n,hash:s})&&(e.preventDefault(),e&&e.type==="click"&&window.scrollTo(0,0))}const mo={activate(){window.document.addEventListener("click",hr)},inactivate(){window.document.removeEventListener("click",hr)}},go=/Trident/.test(navigator.userAgent);go&&!W(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var r=document.createEvent("Event");return r.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),r.state=t.state||null,r},window.PopStateEvent.prototype=window.Event.prototype);function ur(e){if(e.state==="vaadin-router-ignore")return;const{pathname:t,search:r,hash:i}=window.location;pt("go",{pathname:t,search:r,hash:i})}const bo={activate(){window.addEventListener("popstate",ur)},inactivate(){window.removeEventListener("popstate",ur)}};var st=di,_o=ze,yo=Ao,wo=si,$o=li,oi="/",ni="./",xo=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function ze(e,t){for(var r=[],i=0,o=0,n="",s=t&&t.delimiter||oi,d=t&&t.delimiters||ni,a=!1,l;(l=xo.exec(e))!==null;){var h=l[0],c=l[1],u=l.index;if(n+=e.slice(o,u),o=u+h.length,c){n+=c[1],a=!0;continue}var p="",v=e[o],m=l[2],S=l[3],P=l[4],E=l[5];if(!a&&n.length){var A=n.length-1;d.indexOf(n[A])>-1&&(p=n[A],n=n.slice(0,A))}n&&(r.push(n),n="",a=!1);var Wi=p!==""&&v!==void 0&&v!==p,qi=E==="+"||E==="*",Ki=E==="?"||E==="*",Ke=p||s,Je=S||P;r.push({name:m||i++,prefix:p,delimiter:Ke,optional:Ki,repeat:qi,partial:Wi,pattern:Je?So(Je):"[^"+L(Ke)+"]+?"})}return(n||o<e.length)&&r.push(n+e.substr(o)),r}function Ao(e,t){return si(ze(e,t))}function si(e){for(var t=new Array(e.length),r=0;r<e.length;r++)typeof e[r]=="object"&&(t[r]=new RegExp("^(?:"+e[r].pattern+")$"));return function(i,o){for(var n="",s=o&&o.encode||encodeURIComponent,d=0;d<e.length;d++){var a=e[d];if(typeof a=="string"){n+=a;continue}var l=i?i[a.name]:void 0,h;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var c=0;c<l.length;c++){if(h=s(l[c],a),!t[d].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');n+=(c===0?a.prefix:a.delimiter)+h}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(h=s(String(l),a),!t[d].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+h+'"');n+=a.prefix+h;continue}if(a.optional){a.partial&&(n+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return n}}function L(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function So(e){return e.replace(/([=!:$/()])/g,"\\$1")}function ai(e){return e&&e.sensitive?"":"i"}function Eo(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var i=0;i<r.length;i++)t.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}function Co(e,t,r){for(var i=[],o=0;o<e.length;o++)i.push(di(e[o],t,r).source);return new RegExp("(?:"+i.join("|")+")",ai(r))}function Po(e,t,r){return li(ze(e,r),t,r)}function li(e,t,r){r=r||{};for(var i=r.strict,o=r.start!==!1,n=r.end!==!1,s=L(r.delimiter||oi),d=r.delimiters||ni,a=[].concat(r.endsWith||[]).map(L).concat("$").join("|"),l=o?"^":"",h=e.length===0,c=0;c<e.length;c++){var u=e[c];if(typeof u=="string")l+=L(u),h=c===e.length-1&&d.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+L(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;t&&t.push(u),u.optional?u.partial?l+=L(u.prefix)+"("+p+")?":l+="(?:"+L(u.prefix)+"("+p+"))?":l+=L(u.prefix)+"("+p+")"}}return n?(i||(l+="(?:"+s+")?"),l+=a==="$"?"$":"(?="+a+")"):(i||(l+="(?:"+s+"(?="+a+"))?"),h||(l+="(?="+s+"|"+a+")")),new RegExp(l,ai(r))}function di(e,t,r){return e instanceof RegExp?Eo(e,t):Array.isArray(e)?Co(e,t,r):Po(e,t,r)}st.parse=_o;st.compile=yo;st.tokensToFunction=wo;st.tokensToRegExp=$o;const{hasOwnProperty:ko}=Object.prototype,ye=new Map;ye.set("|false",{keys:[],pattern:/(?:)/});function pr(e){try{return decodeURIComponent(e)}catch{return e}}function To(e,t,r,i,o){r=!!r;const n=`${e}|${r}`;let s=ye.get(n);if(!s){const l=[];s={keys:l,pattern:st(e,l,{end:r,strict:e===""})},ye.set(n,s)}const d=s.pattern.exec(t);if(!d)return null;const a=Object.assign({},o);for(let l=1;l<d.length;l++){const h=s.keys[l-1],c=h.name,u=d[l];(u!==void 0||!ko.call(a,c))&&(h.repeat?a[c]=u?u.split(h.delimiter).map(pr):[]:a[c]=u&&pr(u))}return{path:d[0],keys:(i||[]).concat(s.keys),params:a}}function ci(e,t,r,i,o){let n,s,d=0,a=e.path||"";return a.charAt(0)==="/"&&(r&&(a=a.substr(1)),r=!0),{next(l){if(e===l)return{done:!0};const h=e.__children=e.__children||e.children;if(!n&&(n=To(a,t,!h,i,o),n))return{done:!1,value:{route:e,keys:n.keys,params:n.params,path:n.path}};if(n&&h)for(;d<h.length;){if(!s){const u=h[d];u.parent=e;let p=n.path.length;p>0&&t.charAt(p)==="/"&&(p+=1),s=ci(u,t.substr(p),r,n.keys,n.params)}const c=s.next(l);if(!c.done)return{done:!1,value:c.value};s=null,d++}return{done:!0}}}}function No(e){if(W(e.route.action))return e.route.action(e)}function Oo(e,t){let r=t;for(;r;)if(r=r.parent,r===e)return!0;return!1}function Ro(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const r=(e.route||{}).path;return r&&(t+=` Resolution had failed on route: '${r}'`),t}function Uo(e,t){const{route:r,path:i}=t;if(r&&!r.__synthetic){const o={path:i,route:r};if(!e.chain)e.chain=[];else if(r.parent){let n=e.chain.length;for(;n--&&e.chain[n].route&&e.chain[n].route!==r.parent;)e.chain.pop()}e.chain.push(o)}}class wt{constructor(t,r={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=r.baseUrl||"",this.errorHandler=r.errorHandler,this.resolveRoute=r.resolveRoute||No,this.context=Object.assign({resolver:this},r.context),this.root=Array.isArray(t)?{path:"",__children:t,parent:null,__synthetic:!0}:t,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(t){dr(t);const r=[...Lt(t)];this.root.__children=r}addRoutes(t){return dr(t),this.root.__children.push(...Lt(t)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(t){const r=Object.assign({},this.context,T(t)?{pathname:t}:t),i=ci(this.root,this.__normalizePathname(r.pathname),this.baseUrl),o=this.resolveRoute;let n=null,s=null,d=r;function a(l,h=n.value.route,c){const u=c===null&&n.value.route;return n=s||i.next(u),s=null,!l&&(n.done||!Oo(h,n.value.route))?(s=n,Promise.resolve(G)):n.done?Promise.reject(ii(r)):(d=Object.assign(d?{chain:d.chain?d.chain.slice(0):[]}:{},r,n.value),Uo(d,n.value),Promise.resolve(o(d)).then(p=>p!=null&&p!==G?(d.result=p.result||p,d):a(l,h,p)))}return r.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const h=Ro(d);if(l?console.warn(h):l=new Error(h),l.context=l.context||d,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return d.result=this.errorHandler(l),d;throw l})}static __createUrl(t,r){return new URL(t,r)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(t){if(!this.baseUrl)return t;const r=this.__effectiveBaseUrl,i=this.constructor.__createUrl(t,r).href;if(i.slice(0,r.length)===r)return i.slice(r.length)}}wt.pathToRegexp=st;const{pathToRegexp:fr}=wt,vr=new Map;function hi(e,t,r){const i=t.name||t.component;if(i&&(e.has(i)?e.get(i).push(t):e.set(i,[t])),Array.isArray(r))for(let o=0;o<r.length;o++){const n=r[o];n.parent=t,hi(e,n,n.__children||n.children)}}function mr(e,t){const r=e.get(t);if(r&&r.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return r&&r[0]}function gr(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,t!==void 0?t:""}function Mo(e,t={}){if(!(e instanceof wt))throw new TypeError("An instance of Resolver is expected");const r=new Map;return(i,o)=>{let n=mr(r,i);if(!n&&(r.clear(),hi(r,e.root,e.root.__children),n=mr(r,i),!n))throw new Error(`Route "${i}" not found`);let s=vr.get(n.fullPath);if(!s){let a=gr(n),l=n.parent;for(;l;){const p=gr(l);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const h=fr.parse(a),c=fr.tokensToFunction(h),u=Object.create(null);for(let p=0;p<h.length;p++)T(h[p])||(u[h[p].name]=!0);s={toPath:c,keys:u},vr.set(a,s),n.fullPath=a}let d=s.toPath(o,t)||"/";if(t.stringifyQueryParams&&o){const a={},l=Object.keys(o);for(let c=0;c<l.length;c++){const u=l[c];s.keys[u]||(a[u]=o[u])}const h=t.stringifyQueryParams(a);h&&(d+=h.charAt(0)==="?"?h:`?${h}`)}return d}}let br=[];function Lo(e){br.forEach(t=>t.inactivate()),e.forEach(t=>t.activate()),br=e}const Bo=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&t!=="none"},Io=(e,t)=>{const r=()=>{e.removeEventListener("animationend",r),t()};e.addEventListener("animationend",r)};function _r(e,t){return e.classList.add(t),new Promise(r=>{if(Bo(e)){const i=e.getBoundingClientRect(),o=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;e.setAttribute("style",`position: absolute; ${o}`),Io(e,()=>{e.classList.remove(t),e.removeAttribute("style"),r()})}else e.classList.remove(t),r()})}const zo=256;function ne(e){return e!=null}function Ho(e){const t=Object.assign({},e);return delete t.next,t}function k({pathname:e="",search:t="",hash:r="",chain:i=[],params:o={},redirectFrom:n,resolver:s},d){const a=i.map(l=>l.route);return{baseUrl:s&&s.baseUrl||"",pathname:e,search:t,hash:r,routes:a,route:d||a.length&&a[a.length-1]||null,params:o,redirectFrom:n,getUrl:(l={})=>Tt(H.pathToRegexp.compile(ui(a))(Object.assign({},o,l)),s)}}function yr(e,t){const r=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:r}}}function Vo(e,t){t.location=k(e);const r=e.chain.map(i=>i.route).indexOf(e.route);return e.chain[r].element=t,t}function kt(e,t,r){if(W(e))return e.apply(r,t)}function wr(e,t,r){return i=>{if(i&&(i.cancel||i.redirect))return i;if(r)return kt(r[e],t,r)}}function jo(e,t){if(!Array.isArray(e)&&!zt(e))throw new Error(N(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const r=Lt(e);for(let i=0;i<r.length;i++)ri(r[i]),t.__children.push(r[i])}function Ct(e){if(e&&e.length){const t=e[0].parentNode;for(let r=0;r<e.length;r++)t.removeChild(e[r])}}function Tt(e,t){const r=t.__effectiveBaseUrl;return r?t.constructor.__createUrl(e.replace(/^\//,""),r).pathname:e}function ui(e){return e.map(t=>t.path).reduce((t,r)=>r.length?t.replace(/\/$/,"")+"/"+r.replace(/^\//,""):t,"")}class H extends wt{constructor(t,r){const i=document.head.querySelector("base"),o=i&&i.getAttribute("href");super([],Object.assign({baseUrl:o&&wt.__createUrl(o,document.URL).pathname.replace(/[^\/]*$/,"")},r)),this.resolveRoute=s=>this.__resolveRoute(s);const n=H.NavigationTrigger;H.setTriggers.apply(H,Object.keys(n).map(s=>n[s])),this.baseUrl,this.ready,this.ready=Promise.resolve(t),this.location,this.location=k({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(t),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(t){const r=t.route;let i=Promise.resolve();W(r.children)&&(i=i.then(()=>r.children(Ho(t))).then(n=>{!ne(n)&&!W(r.children)&&(n=r.children),jo(n,r)}));const o={redirect:n=>yr(t,n),component:n=>{const s=document.createElement(n);return this.__createdByRouter.set(s,!0),s}};return i.then(()=>{if(this.__isLatestRender(t))return kt(r.action,[t,o],r)}).then(n=>{if(ne(n)&&(n instanceof HTMLElement||n.redirect||n===G))return n;if(T(r.redirect))return o.redirect(r.redirect);if(r.bundle)return fo(r.bundle).then(()=>{},()=>{throw new Error(N(`Bundle not found: ${r.bundle}. Check if the file name is correct`))})}).then(n=>{if(ne(n))return n;if(T(r.component))return o.component(r.component)})}setOutlet(t){t&&this.__ensureOutlet(t),this.__outlet=t}getOutlet(){return this.__outlet}setRoutes(t,r=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(t),r||this.__onNavigationEvent(),this.ready}render(t,r){const i=++this.__lastStartedRenderId,o=Object.assign({search:"",hash:""},T(t)?{pathname:t}:t,{__renderId:i});return this.ready=this.resolve(o).then(n=>this.__fullyResolveChain(n)).then(n=>{if(this.__isLatestRender(n)){const s=this.__previousContext;if(n===s)return this.__updateBrowserHistory(s,!0),this.location;if(this.location=k(n),r&&this.__updateBrowserHistory(n,i===1),pt("location-changed",{router:this,location:this.location}),n.__skipAttach)return this.__copyUnchangedElements(n,s),this.__previousContext=n,this.location;this.__addAppearingContent(n,s);const d=this.__animateIfNeeded(n);return this.__runOnAfterEnterCallbacks(n),this.__runOnAfterLeaveCallbacks(n,s),d.then(()=>{if(this.__isLatestRender(n))return this.__removeDisappearingContent(),this.__previousContext=n,this.location})}}).catch(n=>{if(i===this.__lastStartedRenderId)throw r&&this.__updateBrowserHistory(o),Ct(this.__outlet&&this.__outlet.children),this.location=k(Object.assign(o,{resolver:this})),pt("error",Object.assign({router:this,error:n},o)),n}),this.ready}__fullyResolveChain(t,r=t){return this.__findComponentContextAfterAllRedirects(r).then(i=>{const n=i!==r?i:t,d=Tt(ui(i.chain),i.resolver)===i.pathname,a=(l,h=l.route,c)=>l.next(void 0,h,c).then(u=>u===null||u===G?d?l:h.parent!==null?a(l,h.parent,u):u:u);return a(i).then(l=>{if(l===null||l===G)throw ii(n);return l&&l!==G&&l!==i?this.__fullyResolveChain(n,l):this.__amendWithOnBeforeCallbacks(i)})})}__findComponentContextAfterAllRedirects(t){const r=t.result;return r instanceof HTMLElement?(Vo(t,r),Promise.resolve(t)):r.redirect?this.__redirect(r.redirect,t.__redirectCount,t.__renderId).then(i=>this.__findComponentContextAfterAllRedirects(i)):r instanceof Error?Promise.reject(r):Promise.reject(new Error(N(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${po(r)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(t){return this.__runOnBeforeCallbacks(t).then(r=>r===this.__previousContext||r===t?r:this.__fullyResolveChain(r))}__runOnBeforeCallbacks(t){const r=this.__previousContext||{},i=r.chain||[],o=t.chain;let n=Promise.resolve();const s=()=>({cancel:!0}),d=a=>yr(t,a);if(t.__divergedChainIndex=0,t.__skipAttach=!1,i.length){for(let a=0;a<Math.min(i.length,o.length)&&!(i[a].route!==o[a].route||i[a].path!==o[a].path&&i[a].element!==o[a].element||!this.__isReusableElement(i[a].element,o[a].element));a=++t.__divergedChainIndex);if(t.__skipAttach=o.length===i.length&&t.__divergedChainIndex==o.length&&this.__isReusableElement(t.result,r.result),t.__skipAttach){for(let a=o.length-1;a>=0;a--)n=this.__runOnBeforeLeaveCallbacks(n,t,{prevent:s},i[a]);for(let a=0;a<o.length;a++)n=this.__runOnBeforeEnterCallbacks(n,t,{prevent:s,redirect:d},o[a]),i[a].element.location=k(t,i[a].route)}else for(let a=i.length-1;a>=t.__divergedChainIndex;a--)n=this.__runOnBeforeLeaveCallbacks(n,t,{prevent:s},i[a])}if(!t.__skipAttach)for(let a=0;a<o.length;a++)a<t.__divergedChainIndex?a<i.length&&i[a].element&&(i[a].element.location=k(t,i[a].route)):(n=this.__runOnBeforeEnterCallbacks(n,t,{prevent:s,redirect:d},o[a]),o[a].element&&(o[a].element.location=k(t,o[a].route)));return n.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,t.__redirectCount,t.__renderId)}return t})}__runOnBeforeLeaveCallbacks(t,r,i,o){const n=k(r);return t.then(s=>{if(this.__isLatestRender(r))return wr("onBeforeLeave",[n,i,this],o.element)(s)}).then(s=>{if(!(s||{}).redirect)return s})}__runOnBeforeEnterCallbacks(t,r,i,o){const n=k(r,o.route);return t.then(s=>{if(this.__isLatestRender(r))return wr("onBeforeEnter",[n,i,this],o.element)(s)})}__isReusableElement(t,r){return t&&r?this.__createdByRouter.get(t)&&this.__createdByRouter.get(r)?t.localName===r.localName:t===r:!1}__isLatestRender(t){return t.__renderId===this.__lastStartedRenderId}__redirect(t,r,i){if(r>zo)throw new Error(N(`Too many redirects when rendering ${t.from}`));return this.resolve({pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:(r||0)+1,__renderId:i})}__ensureOutlet(t=this.__outlet){if(!(t instanceof Node))throw new TypeError(N(`Expected router outlet to be a valid DOM Node (but got ${t})`))}__updateBrowserHistory({pathname:t,search:r="",hash:i=""},o){if(window.location.pathname!==t||window.location.search!==r||window.location.hash!==i){const n=o?"replaceState":"pushState";window.history[n](null,document.title,t+r+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(t,r){let i=this.__outlet;for(let o=0;o<t.__divergedChainIndex;o++){const n=r&&r.chain[o].element;if(n)if(n.parentNode===i)t.chain[o].element=n,i=n;else break}return i}__addAppearingContent(t,r){this.__ensureOutlet(),this.__removeAppearingContent();const i=this.__copyUnchangedElements(t,r);this.__appearingContent=[],this.__disappearingContent=Array.from(i.children).filter(n=>this.__addedByRouter.get(n)&&n!==t.result);let o=i;for(let n=t.__divergedChainIndex;n<t.chain.length;n++){const s=t.chain[n].element;s&&(o.appendChild(s),this.__addedByRouter.set(s,!0),o===i&&this.__appearingContent.push(s),o=s)}}__removeDisappearingContent(){this.__disappearingContent&&Ct(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Ct(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(t,r){if(r)for(let i=r.chain.length-1;i>=t.__divergedChainIndex&&this.__isLatestRender(t);i--){const o=r.chain[i].element;if(o)try{const n=k(t);kt(o.onAfterLeave,[n,{},r.resolver],o)}finally{this.__disappearingContent.indexOf(o)>-1&&Ct(o.children)}}}__runOnAfterEnterCallbacks(t){for(let r=t.__divergedChainIndex;r<t.chain.length&&this.__isLatestRender(t);r++){const i=t.chain[r].element||{},o=k(t,t.chain[r].route);kt(i.onAfterEnter,[o,{},t.resolver],i)}}__animateIfNeeded(t){const r=(this.__disappearingContent||[])[0],i=(this.__appearingContent||[])[0],o=[],n=t.chain;let s;for(let d=n.length;d>0;d--)if(n[d-1].route.animate){s=n[d-1].route.animate;break}if(r&&i&&s){const d=zt(s)&&s.leave||"leaving",a=zt(s)&&s.enter||"entering";o.push(_r(r,d)),o.push(_r(i,a))}return Promise.all(o).then(()=>t)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(t){const{pathname:r,search:i,hash:o}=t?t.detail:window.location;T(this.__normalizePathname(r))&&(t&&t.preventDefault&&t.preventDefault(),this.render({pathname:r,search:i,hash:o},!0))}static setTriggers(...t){Lo(t)}urlForName(t,r){return this.__urlForName||(this.__urlForName=Mo(this)),Tt(this.__urlForName(t,r),this)}urlForPath(t,r){return Tt(H.pathToRegexp.compile(t)(r),this)}static go(t){const{pathname:r,search:i,hash:o}=T(t)?this.__createUrl(t,"http://a"):t;return pt("go",{pathname:r,search:i,hash:o})}}const Do=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Nt=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Fo(){function e(){return!0}return pi(e)}function Wo(){try{return qo()?!0:Ko()?Nt?!Jo():!Fo():!1}catch{return!1}}function qo(){return localStorage.getItem("vaadin.developmentmode.force")}function Ko(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Jo(){return!!(Nt&&Object.keys(Nt).map(t=>Nt[t]).filter(t=>t.productionMode).length>0)}function pi(e,t){if(typeof e!="function")return;const r=Do.exec(e.toString());if(r)try{e=new Function(r[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return e(t)}window.Vaadin=window.Vaadin||{};const $r=function(e,t){if(window.Vaadin.developmentMode)return pi(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Wo());function Go(){}const Zo=function(){if(typeof $r=="function")return $r(Go)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Zo();H.NavigationTrigger={POPSTATE:bo,CLICK:mo};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const xr=typeof window<"u"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,we=(e,t,r=null)=>{for(;t!==r;){const i=t.nextSibling;e.removeChild(t),t=i}},M=`{{lit-${String(Math.random()).slice(2)}}}`,fi=`<!--${M}-->`,Ar=new RegExp(`${M}|${fi}`);let vi=class{constructor(t,r){this.parts=[],this.element=r;const i=[],o=[],n=document.createTreeWalker(r.content,133,null,!1);let s=0,d=-1,a=0;const{strings:l,values:{length:h}}=t;for(;a<h;){const c=n.nextNode();if(c!==null){if(d++,c.nodeType===1){if(c.hasAttributes()){const u=c.attributes,{length:p}=u;let v=0;for(let m=0;m<p;m++)Sr(u[m].name,"$lit$")&&v++;for(;v-- >0;){const m=l[a],S=$e.exec(m)[2],P=S.toLowerCase()+"$lit$",E=c.getAttribute(P);c.removeAttribute(P);const A=E.split(Ar);this.parts.push({type:"attribute",index:d,name:S,strings:A}),a+=A.length-1}}c.tagName==="TEMPLATE"&&(o.push(c),n.currentNode=c.content)}else if(c.nodeType===3){const u=c.data;if(u.indexOf(M)>=0){const p=c.parentNode,v=u.split(Ar),m=v.length-1;for(let S=0;S<m;S++){let P,E=v[S];if(E==="")P=I();else{const A=$e.exec(E);A!==null&&Sr(A[2],"$lit$")&&(E=E.slice(0,A.index)+A[1]+A[2].slice(0,-5)+A[3]),P=document.createTextNode(E)}p.insertBefore(P,c),this.parts.push({type:"node",index:++d})}v[m]===""?(p.insertBefore(I(),c),i.push(c)):c.data=v[m],a+=m}}else if(c.nodeType===8)if(c.data===M){const u=c.parentNode;c.previousSibling!==null&&d!==s||(d++,u.insertBefore(I(),c)),s=d,this.parts.push({type:"node",index:d}),c.nextSibling===null?c.data="":(i.push(c),d--),a++}else{let u=-1;for(;(u=c.data.indexOf(M,u+1))!==-1;)this.parts.push({type:"node",index:-1}),a++}}else n.currentNode=o.pop()}for(const c of i)c.parentNode.removeChild(c)}};const Sr=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},mi=e=>e.index!==-1,I=()=>document.createComment(""),$e=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Er(e,t){const{element:{content:r},parts:i}=e,o=document.createTreeWalker(r,133,null,!1);let n=ft(i),s=i[n],d=-1,a=0;const l=[];let h=null;for(;o.nextNode();){d++;const c=o.currentNode;for(c.previousSibling===h&&(h=null),t.has(c)&&(l.push(c),h===null&&(h=c)),h!==null&&a++;s!==void 0&&s.index===d;)s.index=h!==null?-1:s.index-a,n=ft(i,n),s=i[n]}l.forEach(c=>c.parentNode.removeChild(c))}const Yo=e=>{let t=e.nodeType===11?0:1;const r=document.createTreeWalker(e,133,null,!1);for(;r.nextNode();)t++;return t},ft=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const i=e[r];if(mi(i))return r}return-1};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Xo=new WeakMap,$t=e=>typeof e=="function"&&Xo.has(e),O={},Cr={};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */let xe=class{constructor(t,r,i){this.__parts=[],this.template=t,this.processor=r,this.options=i}update(t){let r=0;for(const i of this.__parts)i!==void 0&&i.setValue(t[r]),r++;for(const i of this.__parts)i!==void 0&&i.commit()}_clone(){const t=xr?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),r=[],i=this.template.parts,o=document.createTreeWalker(t,133,null,!1);let n,s=0,d=0,a=o.nextNode();for(;s<i.length;)if(n=i[s],mi(n)){for(;d<n.index;)d++,a.nodeName==="TEMPLATE"&&(r.push(a),o.currentNode=a.content),(a=o.nextNode())===null&&(o.currentNode=r.pop(),a=o.nextNode());if(n.type==="node"){const l=this.processor.handleTextExpression(this.options);l.insertAfterNode(a.previousSibling),this.__parts.push(l)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,n.name,n.strings,this.options));s++}else this.__parts.push(void 0),s++;return xr&&(document.adoptNode(t),customElements.upgrade(t)),t}};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Qo=` ${M} `;let gi=class{constructor(t,r,i,o){this.strings=t,this.values=r,this.type=i,this.processor=o}getHTML(){const t=this.strings.length-1;let r="",i=!1;for(let o=0;o<t;o++){const n=this.strings[o],s=n.lastIndexOf("<!--");i=(s>-1||i)&&n.indexOf("-->",s+1)===-1;const d=$e.exec(n);r+=d===null?n+(i?Qo:fi):n.substr(0,d.index)+d[1]+d[2]+"$lit$"+d[3]+M}return r+=this.strings[t],r}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const He=e=>e===null||!(typeof e=="object"||typeof e=="function"),bi=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);let _i=class{constructor(t,r,i){this.dirty=!0,this.element=t,this.name=r,this.strings=i,this.parts=[];for(let o=0;o<i.length-1;o++)this.parts[o]=this._createPart()}_createPart(){return new yi(this)}_getValue(){const t=this.strings,r=t.length-1;let i="";for(let o=0;o<r;o++){i+=t[o];const n=this.parts[o];if(n!==void 0){const s=n.value;if(He(s)||!bi(s))i+=typeof s=="string"?s:String(s);else for(const d of s)i+=typeof d=="string"?d:String(d)}}return i+=t[r],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}},yi=class{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===O||He(t)&&t===this.value||(this.value=t,$t(t)||(this.committer.dirty=!0))}commit(){for(;$t(this.value);){const t=this.value;this.value=O,t(this)}this.value!==O&&this.committer.commit()}},Ve=class{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(I()),this.endNode=t.appendChild(I())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=I()),t.__insert(this.endNode=I())}insertAfterPart(t){t.__insert(this.startNode=I()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(this.startNode.parentNode===null)return;for(;$t(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=O,r(this)}const t=this.__pendingValue;t!==O&&(He(t)?t!==this.value&&this.__commitText(t):t instanceof gi?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):bi(t)?this.__commitIterable(t):t===Cr?(this.value=Cr,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const r=this.startNode.nextSibling,i=typeof(t=t??"")=="string"?t:String(t);r===this.endNode.previousSibling&&r.nodeType===3?r.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const r=this.options.templateFactory(t);if(this.value instanceof xe&&this.value.template===r)this.value.update(t.values);else{const i=new xe(r,t.processor,this.options),o=i._clone();i.update(t.values),this.__commitNode(o),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const r=this.value;let i,o=0;for(const n of t)i=r[o],i===void 0&&(i=new Ve(this.options),r.push(i),o===0?i.appendIntoPart(this):i.insertAfterPart(r[o-1])),i.setValue(n),i.commit(),o++;o<r.length&&(r.length=o,this.clear(i&&i.endNode))}clear(t=this.startNode){we(this.startNode.parentNode,t.nextSibling,this.endNode)}},tn=class{constructor(t,r,i){if(this.value=void 0,this.__pendingValue=void 0,i.length!==2||i[0]!==""||i[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=r,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;$t(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=O,r(this)}if(this.__pendingValue===O)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=O}},en=class extends _i{constructor(t,r,i){super(t,r,i),this.single=i.length===2&&i[0]===""&&i[1]===""}_createPart(){return new rn(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}},rn=class extends yi{},wi=!1;(()=>{try{const e={get capture(){return wi=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{}})();let on=class{constructor(t,r,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=r,this.eventContext=i,this.__boundHandleEvent=o=>this.handleEvent(o)}setValue(t){this.__pendingValue=t}commit(){for(;$t(this.__pendingValue);){const n=this.__pendingValue;this.__pendingValue=O,n(this)}if(this.__pendingValue===O)return;const t=this.__pendingValue,r=this.value,i=t==null||r!=null&&(t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive),o=t!=null&&(r==null||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=nn(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=O}handleEvent(t){typeof this.value=="function"?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}};const nn=e=>e&&(wi?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function sn(e){let t=xt.get(e.type);t===void 0&&(t={stringsArray:new WeakMap,keyString:new Map},xt.set(e.type,t));let r=t.stringsArray.get(e.strings);if(r!==void 0)return r;const i=e.strings.join(M);return r=t.keyString.get(i),r===void 0&&(r=new vi(e,e.getTemplateElement()),t.keyString.set(i,r)),t.stringsArray.set(e.strings,r),r}const xt=new Map,q=new WeakMap;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const an=new class{handleAttributeExpressions(e,t,r,i){const o=t[0];return o==="."?new en(e,t.slice(1),r).parts:o==="@"?[new on(e,t.slice(1),i.eventContext)]:o==="?"?[new tn(e,t.slice(1),r)]:new _i(e,t,r).parts}handleTextExpression(e){return new Ve(e)}};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */typeof window<"u"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const C=(e,...t)=>new gi(e,t,"html",an),$i=(e,t)=>`${e}--${t}`;let Ht=!0;window.ShadyCSS===void 0?Ht=!1:window.ShadyCSS.prepareTemplateDom===void 0&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Ht=!1);const ln=e=>t=>{const r=$i(t.type,e);let i=xt.get(r);i===void 0&&(i={stringsArray:new WeakMap,keyString:new Map},xt.set(r,i));let o=i.stringsArray.get(t.strings);if(o!==void 0)return o;const n=t.strings.join(M);if(o=i.keyString.get(n),o===void 0){const s=t.getTemplateElement();Ht&&window.ShadyCSS.prepareTemplateDom(s,e),o=new vi(t,s),i.keyString.set(n,o)}return i.stringsArray.set(t.strings,o),o},dn=["html","svg"],xi=new Set,cn=(e,t,r)=>{xi.add(e);const i=r?r.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:n}=o;if(n===0)return void window.ShadyCSS.prepareTemplateStyles(i,e);const s=document.createElement("style");for(let l=0;l<n;l++){const h=o[l];h.parentNode.removeChild(h),s.textContent+=h.textContent}(l=>{dn.forEach(h=>{const c=xt.get($i(h,l));c!==void 0&&c.keyString.forEach(u=>{const{element:{content:p}}=u,v=new Set;Array.from(p.querySelectorAll("style")).forEach(m=>{v.add(m)}),Er(u,v)})})})(e);const d=i.content;r?function(l,h,c=null){const{element:{content:u},parts:p}=l;if(c==null)return void u.appendChild(h);const v=document.createTreeWalker(u,133,null,!1);let m=ft(p),S=0,P=-1;for(;v.nextNode();)for(P++,v.currentNode===c&&(S=Yo(h),c.parentNode.insertBefore(h,c));m!==-1&&p[m].index===P;){if(S>0){for(;m!==-1;)p[m].index+=S,m=ft(p,m);return}m=ft(p,m)}}(r,s,d.firstChild):d.insertBefore(s,d.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const a=d.querySelector("style");if(window.ShadyCSS.nativeShadow&&a!==null)t.insertBefore(a.cloneNode(!0),t.firstChild);else if(r){d.insertBefore(s,d.firstChild);const l=new Set;l.add(s),Er(r,l)}};window.JSCompiler_renameProperty=(e,t)=>e;const Ae={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return e!==null;case Number:return e===null?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Ai=(e,t)=>t!==e&&(t==t||e==e),se={attribute:!0,type:String,converter:Ae,reflect:!1,hasChanged:Ai};class Si extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((r,i)=>{const o=this._attributeNameForProperty(i,r);o!==void 0&&(this._attributeToPropertyMap.set(o,i),t.push(o))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;t!==void 0&&t.forEach((r,i)=>this._classProperties.set(i,r))}}static createProperty(t,r=se){if(this._ensureClassProperties(),this._classProperties.set(t,r),r.noAccessor||this.prototype.hasOwnProperty(t))return;const i=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}static getPropertyDescriptor(t,r,i){return{get(){return this[r]},set(o){const n=this[t];this[r]=o,this._requestUpdate(t,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||se}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const r=this.properties,i=[...Object.getOwnPropertyNames(r),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(r):[]];for(const o of i)this.createProperty(o,r[o])}}static _attributeNameForProperty(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}static _valueHasChanged(t,r,i=Ai){return i(t,r)}static _propertyValueFromAttribute(t,r){const i=r.type,o=r.converter||Ae,n=typeof o=="function"?o:o.fromAttribute;return n?n(t,i):t}static _propertyValueToAttribute(t,r){if(r.reflect===void 0)return;const i=r.type,o=r.converter;return(o&&o.toAttribute||Ae.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,r)=>{if(this.hasOwnProperty(r)){const i=this[r];delete this[r],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(r,i)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,r)=>this[r]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,r,i){r!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,r,i=se){const o=this.constructor,n=o._attributeNameForProperty(t,i);if(n!==void 0){const s=o._propertyValueToAttribute(r,i);if(s===void 0)return;this._updateState=8|this._updateState,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._updateState=-9&this._updateState}}_attributeToProperty(t,r){if(8&this._updateState)return;const i=this.constructor,o=i._attributeToPropertyMap.get(t);if(o!==void 0){const n=i.getPropertyOptions(o);this._updateState=16|this._updateState,this[o]=i._propertyValueFromAttribute(r,n),this._updateState=-17&this._updateState}}_requestUpdate(t,r){let i=!0;if(t!==void 0){const o=this.constructor,n=o.getPropertyOptions(t);o._valueHasChanged(this[t],r,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,r),n.reflect!==!0||16&this._updateState||(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,r){return this._requestUpdate(t,r),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch{}const t=this.performUpdate();return t!=null&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const r=this._changedProperties;try{t=this.shouldUpdate(r),t?this.update(r):this._markUpdated()}catch(i){throw t=!1,this._markUpdated(),i}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(r)),this.updated(r))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((r,i)=>this._propertyToAttribute(i,this[i],r)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Si.finalized=!0;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const hn=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function $(e){return(t,r)=>r!==void 0?((i,o,n)=>{o.constructor.createProperty(n,i)})(e,t,r):hn(e,t)}/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Ei="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ci=Symbol();let Pr=class{constructor(t,r){if(r!==Ci)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return this._styleSheet===void 0&&(Ei?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}};const un=(e,...t)=>{const r=t.reduce((i,o,n)=>i+(s=>{if(s instanceof Pr)return s.cssText;if(typeof s=="number")return s;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${s}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[n+1],e[0]);return new Pr(r,Ci)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const kr={};class Se extends Si{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(t===void 0)this._styles=[];else if(Array.isArray(t)){const r=(n,s)=>n.reduceRight((d,a)=>Array.isArray(a)?r(a,d):(d.add(a),d),s),i=r(t,new Set),o=[];i.forEach(n=>o.unshift(n)),this._styles=o}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;t.length!==0&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow?Ei?this.renderRoot.adoptedStyleSheets=t.map(r=>r.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(r=>r.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(t){const r=this.render();super.update(t),r!==kr&&this.constructor.render(r,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(i=>{const o=document.createElement("style");o.textContent=i.cssText,this.renderRoot.appendChild(o)}))}render(){return kr}}Se.finalized=!0,Se.render=(e,t,r)=>{if(!r||typeof r!="object"||!r.scopeName)throw new Error("The `scopeName` option is required.");const i=r.scopeName,o=q.has(t),n=Ht&&t.nodeType===11&&!!t.host,s=n&&!xi.has(i),d=s?document.createDocumentFragment():t;if(((a,l,h)=>{let c=q.get(l);c===void 0&&(we(l,l.firstChild),q.set(l,c=new Ve(Object.assign({templateFactory:sn},h))),c.appendInto(l)),c.setValue(a),c.commit()})(e,d,Object.assign({templateFactory:ln(i)},r)),s){const a=q.get(d);q.delete(d);const l=a.value instanceof xe?a.value.template:void 0;cn(i,d,l),we(t,t.firstChild),t.appendChild(d),q.set(t,a)}!o&&n&&window.ShadyCSS.styleElement(t.host)};var w=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var d=e.length-1;d>=0;d--)(o=e[d])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let y=class extends Se{constructor(){super(),this.manifestpath="manifest.json",this.openmodal=!1,this.hasprompt=!1,this.relatedApps=[],this.explainer="This app can be installed on your PC or mobile device.  This will allow this web app to look and behave like any other installed app.  You will find it in your app lists and be able to pin it to your home screen, start menus or task bars.  This installed web app will also be able to safely interact with other apps and your operating system. ",this.featuresheader="Key Features",this.descriptionheader="Description",this.installbuttontext="Install",this.cancelbuttontext="Cancel",this.iosinstallinfotext="Tap the share button and then 'Add to Homescreen'",this.isSupportingBrowser=window.hasOwnProperty("BeforeInstallPromptEvent"),this.isIOS=navigator.userAgent.includes("iPhone")||navigator.userAgent.includes("iPad")||navigator.userAgent.includes("Macintosh")&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,this.installed=!1,window.addEventListener("beforeinstallprompt",e=>this.handleInstallPromptEvent(e)),document.addEventListener("keyup",e=>{e.key==="Escape"&&this.cancel()})}static get styles(){return un`:host{--install-focus-color:#919c9c;--install-button-color:#0078d4;--modal-z-index:9999;--background-z-index:9998;--modal-background-color:white}button{outline:0}#installModalWrapper{height:100vh;width:100vw;overflow:auto;position:fixed;bottom:0;top:0;left:0;right:0;z-index:var(--modal-z-index);display:flex;justify-content:center;align-items:center}#descriptionWrapper{margin-bottom:3em}#installModal{position:absolute;background:var(--modal-background-color);font-family:sans-serif;box-shadow:0 25px 26px rgba(32,36,50,.25),0 5px 9px rgba(51,58,83,.53);border-radius:10px;display:flex;flex-direction:column;padding:0;animation-name:opened;animation-duration:150ms;z-index:var(--modal-z-index);max-width:56em}@keyframes opened{from{transform:scale(.8,.8);opacity:.4}to{transform:scale(1,1);opacity:1}}@keyframes mobile{from{opacity:.6}to{opacity:1}}@keyframes fadein{from{opacity:.2}to{opacity:1}}#background{position:fixed;top:0;bottom:0;left:0;right:0;background:#e3e3e3b0;backdrop-filter:blur(5px);z-index:var(--background-z-index);animation-name:fadein;animation-duration:250ms}#headerContainer{display:flex;justify-content:space-between;margin:40px;margin-bottom:32px}#headerContainer h1{font-size:34px;color:#3c3c3c;margin-top:20px;margin-bottom:7px}#headerContainer img{height:122px;width:122px;background:#d3d3d3;border-radius:10px;padding:12px;border-radius:24px;margin-right:24px}#buttonsContainer{display:flex;justify-content:flex-end;position:relative;height:100px;background:#dedede75;width:100%;right:0;border-radius:0 0 12px 12px}#installButton,#installCancelButton,#openButton{text-align:center;align-content:center;align-self:center;vertical-align:middle;justify-self:flex-end;line-height:200%;flex:0 0 auto;display:inline-block;background:#0078d4;color:#fff;cursor:pointer;border:solid 1px transparent;outline:0}#openButton{background:var(--install-button-color)}#openButton:focus{outline:auto;outline:-webkit-focus-ring-color auto 1px}#installButton,#installCancelButton{min-width:130px;margin-right:30px;background:var(--install-button-color);border-radius:20px;font-weight:600;font-size:14px;line-height:21px;padding-top:10px;padding-bottom:9px;padding-left:20px;padding-right:20px;outline:0;color:#fff}#closeButton{background:0 0;border:none;color:#000;padding-left:12px;padding-right:12px;padding-top:4px;padding-bottom:4px;border-radius:20px;font-weight:600;outline:0;cursor:pointer;align-self:self-end}#closeButton:focus,#installButton:focus,#installCancelButton:focus{box-shadow:0 0 0 3px var(--install-focus-color)}#contentContainer{margin-left:40px;margin-right:40px;flex:1}#contentContainer h3{font-size:22px;color:#3c3c3c;margin-bottom:12px}#contentContainer p{font-size:14px;color:#3c3c3c}#featuresScreenDiv{display:flex;justify-content:space-around;align-items:center;margin-right:20px}#featuresScreenDiv h3{font-style:normal;font-weight:600;font-size:22px;line-height:225%;margin-top:0}#keyFeatures{overflow:hidden;padding-right:2em}#keyFeatures ul{padding-inline-start:22px;margin-block-start:12px}#featuresScreenDiv #keyFeatures li{font-style:normal;font-weight:600;font-size:16px;line-height:29px;color:rgba(51,51,51,.72)}#screenshotsContainer{max-height:220px;display:flex;max-width:30em}#screenshotsContainer button{border:none;width:4em;transition:background-color .2s}#screenshotsContainer button:focus,#screenshotsContainer button:hover{background-color:#bbb}#screenshotsContainer button svg{width:28px;fill:#6b6969}#screenshots{display:flex;scroll-snap-type:x mandatory;flex-wrap:wrap;flex-direction:column;overflow-x:scroll;width:22em;max-height:220px;-webkit-overflow-scrolling:touch}#screenshots div{display:flex;align-items:center;justify-content:center;scroll-snap-align:start;height:14em;width:100%;background:#efefef}#screenshots img{height:100%;object-fit:contain}#screenshots::-webkit-scrollbar{display:none}#tagsDiv{margin-top:1em;margin-bottom:1em}#desc{width:100%;max-width:40em;font-size:14px;color:#7e7e7e;text-overflow:ellipsis;overflow:hidden}#logoContainer{display:flex}#tagsDiv span{background:grey;color:#fff;padding-left:12px;padding-right:12px;padding-bottom:4px;font-weight:700;border-radius:24px;margin-right:12px;padding-top:1px}#iosText{color:var(--install-button-color);text-align:center;font-weight:700;position:fixed;bottom:0;left:0;right:0;backdrop-filter:blur(10px);background:rgba(239,239,239,.17);margin:0;padding:2em}#manifest-description{white-space:pre-wrap}@media (max-height:780px){#buttonsContainer{height:70px;background:0 0}}@media (max-width:1220px){#installModal{margin:0;border-radius:0;min-height:100%;width:100%;animation-name:mobile;animation-duration:250ms}#screenshots{justify-content:center}}@media (max-width:962px){#headerContainer h1{margin-top:0;margin-bottom:0}#logoContainer{align-items:center}#desc{display:none}#headerContainer{margin-bottom:24px}#headerContainer img{height:42px;width:42px}}@media (max-width:800px){#background{display:none}#installModal{overflow:scroll;box-shadow:none;max-width:100%;height:100%}#screenshotsContainer{width:100%}#screenshots img{height:180px}#buttonsContainer{display:flex;justify-content:center;bottom:0;margin-bottom:0;border-radius:0;padding-top:1em;padding-bottom:1em}#buttonsContainer #installButton{margin-right:0}#featuresScreenDiv{flex-direction:column;align-items:flex-start;margin-right:0}#headerContainer{margin:20px}#desc{display:none}#contentContainer{margin-left:20px;margin-right:20px;margin-bottom:5em}#headerContainer img{height:60px;width:60px;margin-right:12px}#buttonsContainer{position:fixed;bottom:0;background:#efefef2b;backdrop-filter:blur(10px)}}@media (max-width:400px){#headerContainer h1{font-size:26px}#headerContainer img{height:40px;width:40px}#featuresScreenDiv h3{font-size:18px;margin-bottom:0}#keyFeatures ul{margin-top:0}}@media all and (display-mode:standalone){button{display:none}}@media (prefers-color-scheme:dark){:host{--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}@media (inverted-colors:inverted){:host{--install-focus-color:#6e6363;--install-button-color:#ff872b;--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}`}async firstUpdated(){if(this.manifestpath)try{await this.getManifestData()}catch{console.error("Error getting manifest, check that you have a valid web manifest")}"getInstalledRelatedApps"in navigator&&(this.relatedApps=await navigator.getInstalledRelatedApps())}handleInstallPromptEvent(e){this.deferredprompt=e,this.hasprompt=!0,e.preventDefault()}checkManifest(e){e.icons&&e.icons[0]?e.name?e.description||console.error("Your web manifest must have a description listed"):console.error("Your web manifest must have a name listed"):console.error("Your web manifest must have atleast one icon listed")}async getManifestData(){try{const e=await fetch(this.manifestpath),t=await e.json();if(this.manifestdata=t,this.manifestdata)return this.checkManifest(this.manifestdata),t}catch{return null}}scrollToLeft(){const e=this.shadowRoot.querySelector("#screenshots");e.scrollBy({left:-e.clientWidth,top:0,behavior:"smooth"})}scrollToRight(){const e=this.shadowRoot.querySelector("#screenshots");e.scrollBy({left:e.clientWidth,top:0,behavior:"smooth"})}openPrompt(){this.openmodal=!0;let e=new CustomEvent("show");this.dispatchEvent(e)}closePrompt(){this.openmodal=!1;let e=new CustomEvent("hide");this.dispatchEvent(e)}shouldShowInstall(){return this.isSupportingBrowser&&this.relatedApps.length<1&&(this.hasprompt||this.isIOS)}async install(){if(this.deferredprompt){this.deferredprompt.prompt();let e=new CustomEvent("show");if(this.dispatchEvent(e),(await this.deferredprompt.userChoice).outcome==="accepted"){await this.cancel(),this.installed=!0;let t=new CustomEvent("hide");return this.dispatchEvent(t),!0}{await this.cancel(),this.installed=!0;let t=new CustomEvent("hide");return this.dispatchEvent(t),!1}}}getInstalledStatus(){return navigator.standalone?navigator.standalone:!!matchMedia("(display-mode: standalone)").matches}cancel(){return new Promise((e,t)=>{this.openmodal=!1,this.hasAttribute("openmodal")&&this.removeAttribute("openmodal");let r=new CustomEvent("hide");this.dispatchEvent(r),e()})}render(){return C`${"standalone"in navigator&&navigator.standalone===!1||this.usecustom!==!0&&this.shouldShowInstall()&&this.installed===!1?C`<button part="openButton" id="openButton" @click="${()=>this.openPrompt()}"><slot>${this.installbuttontext}</slot></button>`:null} ${this.openmodal===!0?C`<div id="installModalWrapper">${this.openmodal?C`<div id="background" @click="${()=>this.cancel()}"></div>`:null}<div id="installModal" part="installModal"><div id="headerContainer"><div id="logoContainer"><img src="${this.iconpath?this.iconpath:this.manifestdata.icons[0].src}" alt="App Logo"><div id="installTitle"><h1>${this.manifestdata.short_name||this.manifestdata.name}</h1><p id="desc">${this.explainer}</p></div></div><button id="closeButton" @click="${()=>this.cancel()}" aria-label="Close"><svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.33" fill-rule="evenodd" clip-rule="evenodd" d="M1.11932 0.357981C1.59693 -0.119327 2.37129 -0.119327 2.8489 0.357981L11.7681 9.27152L20.6873 0.357981C21.165 -0.119327 21.9393 -0.119327 22.4169 0.357981C22.8945 0.835288 22.8945 1.60916 22.4169 2.08646L13.4977 11L22.4169 19.9135C22.8945 20.3908 22.8945 21.1647 22.4169 21.642C21.9393 22.1193 21.165 22.1193 20.6873 21.642L11.7681 12.7285L2.8489 21.642C2.37129 22.1193 1.59693 22.1193 1.11932 21.642C0.641705 21.1647 0.641705 20.3908 1.11932 19.9135L10.0385 11L1.11932 2.08646C0.641705 1.60916 0.641705 0.835288 1.11932 0.357981Z" fill="#60656D"/></svg></button></div><div id="contentContainer"><div id="featuresScreenDiv">${this.manifestdata.features?C`<div id="keyFeatures"><h3>${this.featuresheader}</h3><ul>${this.manifestdata.features?this.manifestdata.features.map(e=>C`<li>${e}</li>`):null}</ul></div>`:null} ${this.manifestdata.screenshots?C`<div id="screenshotsContainer"><button @click="${()=>this.scrollToLeft()}" aria-label="previous image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"/></svg></button><section id="screenshots">${this.manifestdata.screenshots.map(e=>C`<div><img alt="App Screenshot" src="${e.src}"></div>`)}</section><button @click="${()=>this.scrollToRight()}" aria-label="next image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M284.9 412.6l138.1-134c6-5.8 9-13.7 9-22.4v-.4c0-8.7-3-16.6-9-22.4l-138.1-134c-12-12.5-31.3-12.5-43.2 0-11.9 12.5-11.9 32.7 0 45.2l83 79.4h-214c-17 0-30.7 14.3-30.7 32 0 18 13.7 32 30.6 32h214l-83 79.4c-11.9 12.5-11.9 32.7 0 45.2 12 12.5 31.3 12.5 43.3 0z"/></svg></button></div>`:null}</div><div id="descriptionWrapper"><h3>${this.descriptionheader}</h3><p id="manifest-description">${this.manifestdata.description}</p></div></div>${this.isIOS?C`<p id="iosText">${this.iosinstallinfotext}</p>`:C`<div id="buttonsContainer">${this.deferredprompt?C`<button id="installButton" @click="${()=>this.install()}">${this.installbuttontext} ${this.manifestdata.short_name}</button>`:C`<button @click="${()=>this.cancel()}" id="installCancelButton">${this.cancelbuttontext}</button>`}</div>`}</div></div>`:null}`}};var ae;w([$({type:String})],y.prototype,"manifestpath",void 0),w([$({type:String})],y.prototype,"iconpath",void 0),w([$({type:Object})],y.prototype,"manifestdata",void 0),w([$({type:Boolean})],y.prototype,"openmodal",void 0),w([$({type:Boolean})],y.prototype,"showopen",void 0),w([$({type:Boolean})],y.prototype,"isSupportingBrowser",void 0),w([$({type:Boolean})],y.prototype,"isIOS",void 0),w([$({type:Boolean})],y.prototype,"installed",void 0),w([$({type:Boolean})],y.prototype,"hasprompt",void 0),w([$({type:Boolean})],y.prototype,"usecustom",void 0),w([$({type:Array})],y.prototype,"relatedApps",void 0),w([$({type:String})],y.prototype,"explainer",void 0),w([$({type:String})],y.prototype,"featuresheader",void 0),w([$({type:String})],y.prototype,"descriptionheader",void 0),w([$({type:String})],y.prototype,"installbuttontext",void 0),w([$({type:String})],y.prototype,"cancelbuttontext",void 0),w([$({type:String})],y.prototype,"iosinstallinfotext",void 0),w([$()],y.prototype,"deferredprompt",void 0),y=w([(ae="pwa-install",e=>typeof e=="function"?((t,r)=>(window.customElements.define(t,r),r))(ae,e):((t,r)=>{const{kind:i,elements:o}=r;return{kind:i,elements:o,finisher(n){window.customElements.define(t,n)}}})(ae,e))],y);var Ot=window,je=Ot.ShadowRoot&&(Ot.ShadyCSS===void 0||Ot.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,De=Symbol(),Tr=new WeakMap,Pi=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==De)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(je&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=Tr.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Tr.set(r,t))}return t}toString(){return this.cssText}},pn=e=>new Pi(typeof e=="string"?e:e+"",void 0,De),Et=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,o,n)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1],e[0]);return new Pi(r,e,De)},fn=(e,t)=>{je?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const i=document.createElement("style"),o=Ot.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=r.cssText,e.appendChild(i)})},Nr=je?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return pn(r)})(e):e,le,Vt=window,Or=Vt.trustedTypes,vn=Or?Or.emptyScript:"",Rr=Vt.reactiveElementPolyfillSupport,Ee={toAttribute(e,t){switch(t){case Boolean:e=e?vn:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ki=(e,t)=>t!==e&&(t==t||e==e),de={attribute:!0,type:String,converter:Ee,reflect:!1,hasChanged:ki},J=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const i=this._$Ep(r,t);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,t=de){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(i){const o=this[e];this[t]=i,this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||de}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of r)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)t.unshift(Nr(i))}else e!==void 0&&t.push(Nr(e));return t}static _$Ep(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return fn(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=de){var i;const o=this.constructor._$Ep(e,r);if(o!==void 0&&r.reflect===!0){const n=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:Ee).toAttribute(t,r.type);this._$El=e,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(e,t){var r;const i=this.constructor,o=i._$Ev.get(e);if(o!==void 0&&this._$El!==o){const n=i.getPropertyOptions(o),s=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?n.converter:Ee;this._$El=o,this[o]=s.fromAttribute(t,n.type),this._$El=null}}requestUpdate(e,t,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||ki)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,o)=>this[o]=i),this._$Ei=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(r)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};J.finalized=!0,J.elementProperties=new Map,J.elementStyles=[],J.shadowRootOptions={mode:"open"},Rr==null||Rr({ReactiveElement:J}),((le=Vt.reactiveElementVersions)!==null&&le!==void 0?le:Vt.reactiveElementVersions=[]).push("1.4.2");var ce,jt=window,it=jt.trustedTypes,Ur=it?it.createPolicy("lit-html",{createHTML:e=>e}):void 0,z=`lit$${(Math.random()+"").slice(9)}$`,Ti="?"+z,mn=`<${Ti}>`,ot=document,At=(e="")=>ot.createComment(e),St=e=>e===null||typeof e!="object"&&typeof e!="function",Ni=Array.isArray,gn=e=>Ni(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",ct=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Mr=/-->/g,Lr=/>/g,D=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Br=/'/g,Ir=/"/g,Oi=/^(?:script|style|textarea|title)$/i,bn=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Jt=bn(1),V=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),zr=new WeakMap,X=ot.createTreeWalker(ot,129,null,!1),_n=(e,t)=>{const r=e.length-1,i=[];let o,n=t===2?"<svg>":"",s=ct;for(let a=0;a<r;a++){const l=e[a];let h,c,u=-1,p=0;for(;p<l.length&&(s.lastIndex=p,c=s.exec(l),c!==null);)p=s.lastIndex,s===ct?c[1]==="!--"?s=Mr:c[1]!==void 0?s=Lr:c[2]!==void 0?(Oi.test(c[2])&&(o=RegExp("</"+c[2],"g")),s=D):c[3]!==void 0&&(s=D):s===D?c[0]===">"?(s=o??ct,u=-1):c[1]===void 0?u=-2:(u=s.lastIndex-c[2].length,h=c[1],s=c[3]===void 0?D:c[3]==='"'?Ir:Br):s===Ir||s===Br?s=D:s===Mr||s===Lr?s=ct:(s=D,o=void 0);const v=s===D&&e[a+1].startsWith("/>")?" ":"";n+=s===ct?l+mn:u>=0?(i.push(h),l.slice(0,u)+"$lit$"+l.slice(u)+z+v):l+z+(u===-2?(i.push(void 0),a):v)}const d=n+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ur!==void 0?Ur.createHTML(d):d,i]},Dt=class{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let o=0,n=0;const s=e.length-1,d=this.parts,[a,l]=_n(e,t);if(this.el=Dt.createElement(a,r),X.currentNode=this.el.content,t===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(i=X.nextNode())!==null&&d.length<s;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const c of i.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(z)){const u=l[n++];if(h.push(c),u!==void 0){const p=i.getAttribute(u.toLowerCase()+"$lit$").split(z),v=/([.?@])?(.*)/.exec(u);d.push({type:1,index:o,name:v[2],strings:p,ctor:v[1]==="."?wn:v[1]==="?"?xn:v[1]==="@"?An:Zt})}else d.push({type:6,index:o})}for(const c of h)i.removeAttribute(c)}if(Oi.test(i.tagName)){const h=i.textContent.split(z),c=h.length-1;if(c>0){i.textContent=it?it.emptyScript:"";for(let u=0;u<c;u++)i.append(h[u],At()),X.nextNode(),d.push({type:2,index:++o});i.append(h[c],At())}}}else if(i.nodeType===8)if(i.data===Ti)d.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(z,h+1))!==-1;)d.push({type:7,index:o}),h+=z.length-1}o++}}static createElement(e,t){const r=ot.createElement("template");return r.innerHTML=e,r}};function nt(e,t,r=e,i){var o,n,s,d;if(t===V)return t;let a=i!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[i]:r._$Cl;const l=St(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((n=a==null?void 0:a._$AO)===null||n===void 0||n.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,r,i)),i!==void 0?((s=(d=r)._$Co)!==null&&s!==void 0?s:d._$Co=[])[i]=a:r._$Cl=a),a!==void 0&&(t=nt(e,a._$AS(e,t.values),a,i)),t}var yn=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:r},parts:i}=this._$AD,o=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:ot).importNode(r,!0);X.currentNode=o;let n=X.nextNode(),s=0,d=0,a=i[0];for(;a!==void 0;){if(s===a.index){let l;a.type===2?l=new Gt(n,n.nextSibling,this,e):a.type===1?l=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(l=new Sn(n,this,e)),this.u.push(l),a=i[++d]}s!==(a==null?void 0:a.index)&&(n=X.nextNode(),s++)}return o}p(e){let t=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Gt=class{constructor(e,t,r,i){var o;this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cm=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=nt(this,e,t),St(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==V&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):gn(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==_&&St(this._$AH)?this._$AA.nextSibling.data=e:this.T(ot.createTextNode(e)),this._$AH=e}$(e){var t;const{values:r,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Dt.createElement(i.h,this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.p(r);else{const n=new yn(o,this),s=n.v(this.options);n.p(r),this.T(s),this._$AH=n}}_$AC(e){let t=zr.get(e.strings);return t===void 0&&zr.set(e.strings,t=new Dt(e)),t}k(e){Ni(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const o of e)i===t.length?t.push(r=new Gt(this.O(At()),this.O(At()),this,this.options)):r=t[i],r._$AI(o),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Zt=class{constructor(e,t,r,i,o){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=_}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,i){const o=this.strings;let n=!1;if(o===void 0)e=nt(this,e,t,0),n=!St(e)||e!==this._$AH&&e!==V,n&&(this._$AH=e);else{const s=e;let d,a;for(e=o[0],d=0;d<o.length-1;d++)a=nt(this,s[r+d],t,d),a===V&&(a=this._$AH[d]),n||(n=!St(a)||a!==this._$AH[d]),a===_?e=_:e!==_&&(e+=(a??"")+o[d+1]),this._$AH[d]=a}n&&!i&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},wn=class extends Zt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}},$n=it?it.emptyScript:"",xn=class extends Zt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==_?this.element.setAttribute(this.name,$n):this.element.removeAttribute(this.name)}},An=class extends Zt{constructor(e,t,r,i,o){super(e,t,r,i,o),this.type=5}_$AI(e,t=this){var r;if((e=(r=nt(this,e,t,0))!==null&&r!==void 0?r:_)===V)return;const i=this._$AH,o=e===_&&i!==_||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==_&&(i===_||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},Sn=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){nt(this,e)}},Hr=jt.litHtmlPolyfillSupport;Hr==null||Hr(Dt,Gt),((ce=jt.litHtmlVersions)!==null&&ce!==void 0?ce:jt.litHtmlVersions=[]).push("2.4.0");var En=(e,t,r)=>{var i,o;const n=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:t;let s=n._$litPart$;if(s===void 0){const d=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;n._$litPart$=s=new Gt(t.insertBefore(At(),d),d,void 0,r??{})}return s._$AI(e),s},he,ue,vt=class extends J{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=En(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return V}};vt.finalized=!0,vt._$litElement$=!0,(he=globalThis.litElementHydrateSupport)===null||he===void 0||he.call(globalThis,{LitElement:vt});var Vr=globalThis.litElementPolyfillSupport;Vr==null||Vr({LitElement:vt});((ue=globalThis.litElementVersions)!==null&&ue!==void 0?ue:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Yt=Et`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Cn=Et`
  ${Yt}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Ri=class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}},Ui={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Mi=e=>(...t)=>({_$litDirective$:e,values:t}),Li=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Bi=Mi(class extends Li{constructor(e){var t;if(super(e),e.type!==Ui.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,i;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!(!((r=this.st)===null||r===void 0)&&r.has(n))&&this.nt.add(n);return this.render(t)}const o=e.element.classList;this.nt.forEach(n=>{n in t||(o.remove(n),this.nt.delete(n))});for(const n in t){const s=!!t[n];s===this.nt.has(n)||!((i=this.st)===null||i===void 0)&&i.has(n)||(s?(o.add(n),this.nt.add(n)):(o.remove(n),this.nt.delete(n)))}return V}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ii=Object.defineProperty,Pn=Object.defineProperties,kn=Object.getOwnPropertyDescriptor,Tn=Object.getOwnPropertyDescriptors,jr=Object.getOwnPropertySymbols,Nn=Object.prototype.hasOwnProperty,On=Object.prototype.propertyIsEnumerable,Dr=(e,t,r)=>t in e?Ii(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,at=(e,t)=>{for(var r in t||(t={}))Nn.call(t,r)&&Dr(e,r,t[r]);if(jr)for(var r of jr(t))On.call(t,r)&&Dr(e,r,t[r]);return e},Fe=(e,t)=>Pn(e,Tn(t)),f=(e,t,r,i)=>{for(var o=i>1?void 0:i?kn(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(o=(i?s(t,r,o):s(o))||o);return i&&o&&Ii(t,r,o),o},Xt=e=>t=>typeof t=="function"?((r,i)=>(customElements.define(r,i),i))(e,t):((r,i)=>{const{kind:o,elements:n}=i;return{kind:o,elements:n,finisher(s){customElements.define(r,s)}}})(e,t),Rn=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Fe(at({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function b(e){return(t,r)=>r!==void 0?((i,o,n)=>{o.constructor.createProperty(n,i)})(e,t,r):Rn(e,t)}function We(e){return b(Fe(at({},e),{state:!0}))}var Un=({finisher:e,descriptor:t})=>(r,i)=>{var o;if(i===void 0){const n=(o=r.originalKey)!==null&&o!==void 0?o:r.key,s=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(r.key)}:Fe(at({},r),{key:n});return e!=null&&(s.finisher=function(d){e(d,n)}),s}{const n=r.constructor;t!==void 0&&Object.defineProperty(r,i,t(i)),e==null||e(n,i)}};function Mn(e,t){return Un({descriptor:r=>{const i={get(){var o,n;return(n=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(t){const o=typeof r=="symbol"?Symbol():"__"+r;i.get=function(){var n,s;return this[o]===void 0&&(this[o]=(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(e))!==null&&s!==void 0?s:null),this[o]}}return i}})}var pe;((pe=window.HTMLSlotElement)===null||pe===void 0?void 0:pe.prototype.assignedElements)!=null;var lt=class extends vt{emit(e,t){const r=new CustomEvent(e,at({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}};f([b()],lt.prototype,"dir",2);f([b()],lt.prototype,"lang",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ce=class extends lt{constructor(){super(...arguments),this.hasSlotController=new Ri(this,"footer","header","image")}render(){return Jt`
      <div
        part="base"
        class=${Bi({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Ce.styles=Cn;Ce=f([Xt("sl-card")],Ce);var ht=new WeakMap,Fr=new WeakMap,ut=new WeakMap,Ln=class{constructor(e,t){(this.host=e).addController(this),this.options=at({form:r=>r.closest("form"),name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var i;return(i=r.disabled)!=null?i:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,setValue:(r,i)=>r.value=i},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(ht.has(this.form)?ht.get(this.form).add(this.host):ht.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),ut.has(this.form)||(ut.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())),this.host.addEventListener("sl-input",this.handleUserInput)}hostDisconnected(){var e;this.form&&((e=ht.get(this.form))==null||e.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),ut.has(this.form)&&(this.form.reportValidity=ut.get(this.form),ut.delete(this.form)),this.form=void 0),this.host.removeEventListener("sl-input",this.handleUserInput)}hostUpdated(){var e;const t=this.host,r=Boolean(Fr.get(t)),i=Boolean(t.invalid),o=Boolean(t.required);(e=this.form)!=null&&e.noValidate?(t.removeAttribute("data-required"),t.removeAttribute("data-optional"),t.removeAttribute("data-invalid"),t.removeAttribute("data-valid"),t.removeAttribute("data-user-invalid"),t.removeAttribute("data-user-valid")):(t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",i),t.toggleAttribute("data-valid",!i),t.toggleAttribute("data-user-invalid",i&&r),t.toggleAttribute("data-user-valid",!i&&r))}handleFormData(e){const t=this.options.disabled(this.host),r=this.options.name(this.host),i=this.options.value(this.host),o=this.host.tagName.toLowerCase()==="sl-button";!t&&!o&&typeof r=="string"&&r.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(n=>{e.formData.append(r,n.toString())}):e.formData.append(r,i.toString()))}handleFormSubmit(e){var t;const r=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=ht.get(this.form))==null||t.forEach(o=>{this.setUserInteracted(o,!0)})),this.form&&!this.form.noValidate&&!r&&!i(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}setUserInteracted(e,t){Fr.set(e,t),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{t.hasAttribute(i)&&r.setAttribute(i,t.getAttribute(i))})),this.form.append(r),r.click(),r.remove()}}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}},Bn=Et`
  ${Yt}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--first, .sl-button-group__button--radio, [variant='default']):not(:hover))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,zi=Symbol.for(""),In=e=>{if((e==null?void 0:e.r)===zi)return e==null?void 0:e._$litStatic$},Wr=(e,...t)=>({_$litStatic$:t.reduce((r,i,o)=>r+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+e[o+1],e[0]),r:zi}),qr=new Map,zn=e=>(t,...r)=>{const i=r.length;let o,n;const s=[],d=[];let a,l=0,h=!1;for(;l<i;){for(a=t[l];l<i&&(n=r[l],(o=In(n))!==void 0);)a+=o+t[++l],h=!0;d.push(n),s.push(a),l++}if(l===i&&s.push(t[i]),h){const c=s.join("$$lit$$");(t=qr.get(c))===void 0&&(s.raw=s,qr.set(c,t=s)),r=d}return e(t,...r)},fe=zn(Jt);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Pe=new Set,Hn=new MutationObserver(ji),Z=new Map,Hi=document.documentElement.dir||"ltr",Vi=document.documentElement.lang||navigator.language,mt;Hn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Vn(...e){e.map(t=>{const r=t.$code.toLowerCase();Z.has(r)?Z.set(r,Object.assign(Object.assign({},Z.get(r)),t)):Z.set(r,t),mt||(mt=t)}),ji()}function ji(){Hi=document.documentElement.dir||"ltr",Vi=document.documentElement.lang||navigator.language,[...Pe.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var jn=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Pe.add(this.host)}hostDisconnected(){Pe.delete(this.host)}dir(){return`${this.host.dir||Hi}`.toLowerCase()}lang(){return`${this.host.lang||Vi}`.toLowerCase()}term(e,...t){var r,i;const o=new Intl.Locale(this.lang()),n=o==null?void 0:o.language.toLowerCase(),s=(i=(r=o==null?void 0:o.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&i!==void 0?i:"",d=Z.get(`${n}-${s}`),a=Z.get(n);let l;if(d&&d[e])l=d[e];else if(a&&a[e])l=a[e];else if(mt&&mt[e])l=mt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof l=="function"?l(...t):l}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}},Di=class extends jn{},Dn={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};Vn(Dn);var U=e=>e??_;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gt(e,t){const r=at({waitUntilFirstUpdate:!1},t);return(i,o)=>{const{update:n}=i;if(e in i){const s=e;i.update=function(d){if(d.has(s)){const a=d.get(s),l=this[s];a!==l&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[o](a,l)}n.call(this,d)}}}}var g=class extends lt{constructor(){super(...arguments),this.formSubmitController=new Ln(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),r=e.getAttribute("form");return t.getElementById(r)}return e.closest("form")}}),this.hasSlotController=new Ri(this,"[default]","prefix","suffix"),this.localize=new Di(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href=""}firstUpdated(){this.isButton()&&(this.invalid=!this.button.checkValidity())}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.type==="submit"&&this.formSubmitController.submit(this),this.type==="reset"&&this.formSubmitController.reset(this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&(this.button.disabled=this.disabled,this.invalid=!this.button.checkValidity())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.invalid=!this.button.checkValidity())}render(){const e=this.isLink(),t=e?Wr`a`:Wr`button`;return fe`
      <${t}
        part="base"
        class=${Bi({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${U(e?void 0:this.disabled)}
        type=${U(e?void 0:this.type)}
        title=${this.title}
        name=${U(e?void 0:this.name)}
        value=${U(e?void 0:this.value)}
        href=${U(e?this.href:void 0)}
        target=${U(e?this.target:void 0)}
        download=${U(e?this.download:void 0)}
        rel=${U(e&&this.target?"noreferrer noopener":void 0)}
        role=${U(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?fe` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?fe`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};g.styles=Bn;f([Mn(".button")],g.prototype,"button",2);f([We()],g.prototype,"hasFocus",2);f([We()],g.prototype,"invalid",2);f([b()],g.prototype,"title",2);f([b({reflect:!0})],g.prototype,"variant",2);f([b({reflect:!0})],g.prototype,"size",2);f([b({type:Boolean,reflect:!0})],g.prototype,"caret",2);f([b({type:Boolean,reflect:!0})],g.prototype,"disabled",2);f([b({type:Boolean,reflect:!0})],g.prototype,"loading",2);f([b({type:Boolean,reflect:!0})],g.prototype,"outline",2);f([b({type:Boolean,reflect:!0})],g.prototype,"pill",2);f([b({type:Boolean,reflect:!0})],g.prototype,"circle",2);f([b()],g.prototype,"type",2);f([b()],g.prototype,"name",2);f([b()],g.prototype,"value",2);f([b()],g.prototype,"href",2);f([b()],g.prototype,"target",2);f([b()],g.prototype,"download",2);f([b()],g.prototype,"form",2);f([b({attribute:"formaction"})],g.prototype,"formAction",2);f([b({attribute:"formenctype"})],g.prototype,"formEnctype",2);f([b({attribute:"formmethod"})],g.prototype,"formMethod",2);f([b({attribute:"formnovalidate",type:Boolean})],g.prototype,"formNoValidate",2);f([b({attribute:"formtarget"})],g.prototype,"formTarget",2);f([gt("disabled",{waitUntilFirstUpdate:!0})],g.prototype,"handleDisabledChange",1);g=f([Xt("sl-button")],g);var Fn=Et`
  ${Yt}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
    mix-blend-mode: multiply;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      rotate: 0deg;
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      rotate: 450deg;
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      rotate: 1080deg;
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,ke=class extends lt{constructor(){super(...arguments),this.localize=new Di(this)}render(){return Jt`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};ke.styles=Fn;ke=f([Xt("sl-spinner")],ke);var Te="";function Kr(e){Te=e}function Wn(){if(!Te){const e=[...document.getElementsByTagName("script")],t=e.find(r=>r.hasAttribute("data-shoelace"));if(t)Kr(t.getAttribute("data-shoelace"));else{const r=e.find(o=>/shoelace(\.min)?\.js($|\?)/.test(o.src));let i="";r&&(i=r.getAttribute("src")),Kr(i.split("/").slice(0,-1).join("/"))}}return Te.replace(/\/$/,"")}var qn={name:"default",resolver:e=>`${Wn()}/assets/icons/${e}.svg`},Kn=qn,Jr={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Jn={name:"system",resolver:e=>e in Jr?`data:image/svg+xml,${encodeURIComponent(Jr[e])}`:""},Gn=Jn,Zn=[Kn,Gn],Ne=[];function Yn(e){Ne.push(e)}function Xn(e){Ne=Ne.filter(t=>t!==e)}function Gr(e){return Zn.find(t=>t.name===e)}var ve=new Map;function Qn(e,t="cors"){if(ve.has(e))return ve.get(e);const r=fetch(e,{mode:t}).then(async i=>({ok:i.ok,status:i.status,html:await i.text()}));return ve.set(e,r),r}var me=new Map;async function ts(e){if(me.has(e))return me.get(e);const t=await Qn(e),r={ok:t.ok,status:t.status,svg:null};if(t.ok){const i=document.createElement("div");i.innerHTML=t.html;const o=i.firstElementChild;r.svg=(o==null?void 0:o.tagName.toLowerCase())==="svg"?o.outerHTML:""}return me.set(e,r),r}var es=Et`
  ${Yt}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,Oe=class extends Li{constructor(e){if(super(e),this.it=_,e.type!==Ui.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===_||e==null)return this._t=void 0,this.it=e;if(e===V)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Oe.directiveName="unsafeHTML",Oe.resultType=1;var Re=class extends Oe{};Re.directiveName="unsafeSVG",Re.resultType=2;var rs=Mi(Re),ge,R=class extends lt{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),Yn(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Xn(this)}getUrl(){const e=Gr(this.library);return this.name&&e?e.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const t=Gr(this.library),r=this.getUrl();if(ge||(ge=new DOMParser),r)try{const i=await ts(r);if(r!==this.getUrl())return;if(i.ok){const n=ge.parseFromString(i.svg,"text/html").body.querySelector("svg");n!==null?((e=t==null?void 0:t.mutator)==null||e.call(t,n),this.svg=n.outerHTML,this.emit("sl-load")):(this.svg="",this.emit("sl-error"))}else this.svg="",this.emit("sl-error")}catch{this.emit("sl-error")}else this.svg.length>0&&(this.svg="")}render(){return Jt` ${rs(this.svg)} `}};R.styles=es;f([We()],R.prototype,"svg",2);f([b({reflect:!0})],R.prototype,"name",2);f([b()],R.prototype,"src",2);f([b()],R.prototype,"label",2);f([b({reflect:!0})],R.prototype,"library",2);f([gt("label")],R.prototype,"handleLabelChange",1);f([gt("name"),gt("src"),gt("library")],R.prototype,"setIcon",1);R=f([Xt("sl-icon")],R);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const is=Wt`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  main {
    margin-top: 80px;
  }
`;var os=Object.defineProperty,ns=Object.getOwnPropertyDescriptor,Fi=(e,t,r,i)=>{for(var o=i>1?void 0:i?ns(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(o=(i?s(t,r,o):s(o))||o);return i&&o&&os(t,r,o),o};let Ue=class extends F{constructor(){super(),this.message="Welcome!"}static get styles(){return[is,Wt`
      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #welcomeCard,
      #infoCard {
        padding: 18px;
        padding-top: 0px;
      }

      pwa-install {
        position: absolute;
        bottom: 16px;
        right: 16px;
      }

      sl-card::part(footer) {
        display: flex;
        justify-content: flex-end;
      }

      @media(min-width: 750px) {
        sl-card {
          width: 70vw;
        }
      }


      @media (horizontal-viewport-segments: 2) {
        #welcomeBar {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }

        #welcomeCard {
          margin-right: 64px;
        }
      }
    `]}async firstUpdated(){console.log("This is your home page")}share(){navigator.share&&navigator.share({title:"PWABuilder pwa-starter",text:"Check out the PWABuilder pwa-starter!",url:"https://github.com/pwa-builder/pwa-starter"})}render(){return yt`
      <app-header></app-header>

      <main>
        <div id="welcomeBar">
          <sl-card id="welcomeCard">
            <div slot="header">
              <h2>${this.message}</h2>
            </div>

            <p>
              For more information on the PWABuilder pwa-starter, check out the
              <a href="https://github.com/pwa-builder/pwa-starter/wiki/Getting-Started">
                Documentation on Github</a>.
            </p>

            <p id="mainInfo">
              Welcome to the
              <a href="https://pwabuilder.com">PWABuilder</a>
              pwa-starter! Be sure to head back to
              <a href="https://pwabuilder.com">PWABuilder</a>
              when you are ready to ship this PWA to the Microsoft Store, Google Play
              and the Apple App Store!
            </p>

            ${"share"in navigator?yt`<sl-button slot="footer" variant="primary" @click="${this.share}">Share this Starter!</sl-button>`:null}
          </sl-card>

          <sl-card id="infoCard">
            <h2>Technology Used</h2>

            <ul>
              <li>
                <a href="https://www.typescriptlang.org/">TypeScript</a>
              </li>

              <li>
                <a href="https://lit.dev">lit</a>
              </li>

              <li>
                <a href="https://shoelace.style/">Shoelace</a>
              </li>

              <li>
                <a href="https://vaadin.github.io/vaadin-router/vaadin-router/demo/#vaadin-router-getting-started-demos"
                  >Vaadin Router</a>
              </li>
            </ul>
          </sl-card>

          <sl-button href="${"/simple-app"}about" variant="primary">Navigate to About</sl-button>
        </div>

        <pwa-install>Install PWA Starter</pwa-install>
      </main>
    `}};Fi([Ie()],Ue.prototype,"message",2);Ue=Fi([Be("app-home")],Ue);var ss=Object.defineProperty,as=Object.getOwnPropertyDescriptor,qe=(e,t,r,i)=>{for(var o=i>1?void 0:i?as(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(o=(i?s(t,r,o):s(o))||o);return i&&o&&ss(t,r,o),o};let Ft=class extends F{constructor(){super(),this.title="PWA Starter",this.enableBack=!1}static get styles(){return Wt`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--app-color-primary);
        color: white;
        height: 4em;
        padding-left: 16px;
        padding-top: 12px;

        position: fixed;
        left: env(titlebar-area-x, 0);
        top: env(titlebar-area-y, 0);
        height: env(titlebar-area-height, 50px);
        width: env(titlebar-area-width, 100%);
        -webkit-app-region: drag;
      }

      header h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 20px;
        font-weight: bold;
      }

      nav a {
        margin-left: 10px;
      }

      #back-button-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 12em;
      }

      @media(prefers-color-scheme: light) {
        header {
          color: black;
        }

        nav a {
          color: initial;
        }
      }
    `}render(){return yt`
      <header>

        <div id="back-button-block">
          ${this.enableBack?yt`<sl-button href="${"/simple-app"}">
            Back
          </sl-button>`:null}

          <h1>${this.title}</h1>
        </div>
      </header>
    `}};qe([Ie({type:String})],Ft.prototype,"title",2);qe([Ie({type:Boolean})],Ft.prototype,"enableBack",2);Ft=qe([Be("app-header")],Ft);var ls=Object.defineProperty,ds=Object.getOwnPropertyDescriptor,cs=(e,t,r,i)=>{for(var o=i>1?void 0:i?ds(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(o=(i?s(t,r,o):s(o))||o);return i&&o&&ls(t,r,o),o};let Zr=class extends F{static get styles(){return Wt`
      main {
        padding-left: 16px;
        padding-right: 16px;
        padding-bottom: 16px;
      }

      #routerOutlet > * {
        width: 100% !important;
      }

      #routerOutlet > .leaving {
        animation: 160ms fadeOut ease-in-out;
      }

      #routerOutlet > .entering {
        animation: 160ms fadeIn linear;
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0.2;
        }

        to {
          opacity: 1;
        }
      }
    `}constructor(){super()}firstUpdated(){var t;new H((t=this.shadowRoot)==null?void 0:t.querySelector("#routerOutlet")).setRoutes([{path:"/simple-app",animate:!0,children:[{path:"",component:"app-home"},{path:"about",component:"app-about",action:async()=>{await Zi(()=>import("./app-about-22f705a6.js"),[])}}]}])}render(){return yt`
      <div>
        <main>
          <div id="routerOutlet"></div>
        </main>
      </div>
    `}};Zr=cs([Be("app-index")],Zr);export{is as a,Be as e,Wt as i,F as s,yt as y};
//# sourceMappingURL=index-353a68b5.js.map
