/**
* @vue/shared v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function yc(n,e){const t=new Set(n.split(","));return i=>t.has(i)}const yt={},zr=[],_n=()=>{},Pm=()=>!1,qs=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Sc=n=>n.startsWith("onUpdate:"),Ct=Object.assign,Mc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Lm=Object.prototype.hasOwnProperty,tt=(n,e)=>Lm.call(n,e),Fe=Array.isArray,kr=n=>js(n)==="[object Map]",Jh=n=>js(n)==="[object Set]",Dm=n=>js(n)==="[object RegExp]",Ge=n=>typeof n=="function",At=n=>typeof n=="string",mr=n=>typeof n=="symbol",St=n=>n!==null&&typeof n=="object",Qh=n=>(St(n)||Ge(n))&&Ge(n.then)&&Ge(n.catch),ed=Object.prototype.toString,js=n=>ed.call(n),Im=n=>js(n).slice(8,-1),td=n=>js(n)==="[object Object]",Ec=n=>At(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Vr=yc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wa=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Um=/-(\w)/g,yn=wa(n=>n.replace(Um,(e,t)=>t?t.toUpperCase():"")),Nm=/\B([A-Z])/g,gr=wa(n=>n.replace(Nm,"-$1").toLowerCase()),Ys=wa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ya=wa(n=>n?`on${Ys(n)}`:""),Li=(n,e)=>!Object.is(n,e),Ts=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},nd=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Om=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Fm=n=>{const e=At(n)?Number(n):NaN;return isNaN(e)?n:e};let cu;const id=()=>cu||(cu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ks(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=At(i)?km(i):Ks(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(At(n)||St(n))return n}const Bm=/;(?![^(]*\))/g,Hm=/:([^]+)/,zm=/\/\*[^]*?\*\//g;function km(n){const e={};return n.replace(zm,"").split(Bm).forEach(t=>{if(t){const i=t.split(Hm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function sn(n){let e="";if(At(n))e=n;else if(Fe(n))for(let t=0;t<n.length;t++){const i=sn(n[t]);i&&(e+=i+" ")}else if(St(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Vm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gm=yc(Vm);function rd(n){return!!n||n===""}const gt=n=>At(n)?n:n==null?"":Fe(n)||St(n)&&(n.toString===ed||!Ge(n.toString))?JSON.stringify(n,sd,2):String(n),sd=(n,e)=>e&&e.__v_isRef?sd(n,e.value):kr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Ka(i,s)+" =>"]=r,t),{})}:Jh(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ka(t))}:mr(e)?Ka(e):St(e)&&!Fe(e)&&!td(e)?String(e):e,Ka=(n,e="")=>{var t;return mr(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fn;class Wm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=fn,!e&&fn&&(this.index=(fn.scopes||(fn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=fn;try{return fn=this,e()}finally{fn=t}}}on(){fn=this}off(){fn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function $m(n,e=fn){e&&e.active&&e.effects.push(n)}function od(){return fn}function Xm(n){fn&&fn.cleanups.push(n)}let lr;class bc{constructor(e,t,i,r){this.fn=e,this.trigger=t,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,$m(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Oi();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(qm(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Fi()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=wi,t=lr;try{return wi=!0,lr=this,this._runnings++,uu(this),this.fn()}finally{fu(this),this._runnings--,lr=t,wi=e}}stop(){var e;this.active&&(uu(this),fu(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function qm(n){return n.value}function uu(n){n._trackId++,n._depsLength=0}function fu(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)ad(n.deps[e],n);n.deps.length=n._depsLength}}function ad(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let wi=!0,Yl=0;const ld=[];function Oi(){ld.push(wi),wi=!1}function Fi(){const n=ld.pop();wi=n===void 0?!0:n}function Tc(){Yl++}function Ac(){for(Yl--;!Yl&&Kl.length;)Kl.shift()()}function cd(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const i=n.deps[n._depsLength];i!==e?(i&&ad(i,n),n.deps[n._depsLength++]=e):n._depsLength++}}const Kl=[];function ud(n,e,t){Tc();for(const i of n.keys()){let r;i._dirtyLevel<e&&(r??(r=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(r??(r=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&Kl.push(i.scheduler)))}Ac()}const fd=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},aa=new WeakMap,cr=Symbol(""),Zl=Symbol("");function an(n,e,t){if(wi&&lr){let i=aa.get(n);i||aa.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=fd(()=>i.delete(t))),cd(lr,r)}}function ni(n,e,t,i,r,s){const o=aa.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Fe(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!mr(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Fe(n)?Ec(t)&&a.push(o.get("length")):(a.push(o.get(cr)),kr(n)&&a.push(o.get(Zl)));break;case"delete":Fe(n)||(a.push(o.get(cr)),kr(n)&&a.push(o.get(Zl)));break;case"set":kr(n)&&a.push(o.get(cr));break}Tc();for(const l of a)l&&ud(l,4);Ac()}function jm(n,e){var t;return(t=aa.get(n))==null?void 0:t.get(e)}const Ym=yc("__proto__,__v_isRef,__isVue"),hd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(mr)),hu=Km();function Km(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=st(this);for(let s=0,o=this.length;s<o;s++)an(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(st)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Oi(),Tc();const i=st(this)[e].apply(this,t);return Ac(),Fi(),i}}),n}function Zm(n){mr(n)||(n=String(n));const e=st(this);return an(e,"has",n),e.hasOwnProperty(n)}class dd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?ug:_d:s?gd:md).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Fe(e);if(!r){if(o&&tt(hu,t))return Reflect.get(hu,t,i);if(t==="hasOwnProperty")return Zm}const a=Reflect.get(e,t,i);return(mr(t)?hd.has(t):Ym(t))||(r||an(e,"get",t),s)?a:jt(a)?o&&Ec(t)?a:a.value:St(a)?r?ns(a):Zs(a):a}}class pd extends dd{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Us(s);if(!la(i)&&!Us(i)&&(s=st(s),i=st(i)),!Fe(e)&&jt(s)&&!jt(i))return l?!1:(s.value=i,!0)}const o=Fe(e)&&Ec(t)?Number(t)<e.length:tt(e,t),a=Reflect.set(e,t,i,r);return e===st(r)&&(o?Li(i,s)&&ni(e,"set",t,i):ni(e,"add",t,i)),a}deleteProperty(e,t){const i=tt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&ni(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!mr(t)||!hd.has(t))&&an(e,"has",t),i}ownKeys(e){return an(e,"iterate",Fe(e)?"length":cr),Reflect.ownKeys(e)}}class Jm extends dd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Qm=new pd,eg=new Jm,tg=new pd(!0);const wc=n=>n,Ra=n=>Reflect.getPrototypeOf(n);function go(n,e,t=!1,i=!1){n=n.__v_raw;const r=st(n),s=st(e);t||(Li(e,s)&&an(r,"get",e),an(r,"get",s));const{has:o}=Ra(r),a=i?wc:t?Pc:Ns;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function _o(n,e=!1){const t=this.__v_raw,i=st(t),r=st(n);return e||(Li(n,r)&&an(i,"has",n),an(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function vo(n,e=!1){return n=n.__v_raw,!e&&an(st(n),"iterate",cr),Reflect.get(n,"size",n)}function du(n){n=st(n);const e=st(this);return Ra(e).has.call(e,n)||(e.add(n),ni(e,"add",n,n)),this}function pu(n,e){e=st(e);const t=st(this),{has:i,get:r}=Ra(t);let s=i.call(t,n);s||(n=st(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?Li(e,o)&&ni(t,"set",n,e):ni(t,"add",n,e),this}function mu(n){const e=st(this),{has:t,get:i}=Ra(e);let r=t.call(e,n);r||(n=st(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&ni(e,"delete",n,void 0),s}function gu(){const n=st(this),e=n.size!==0,t=n.clear();return e&&ni(n,"clear",void 0,void 0),t}function xo(n,e){return function(i,r){const s=this,o=s.__v_raw,a=st(o),l=e?wc:n?Pc:Ns;return!n&&an(a,"iterate",cr),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function yo(n,e,t){return function(...i){const r=this.__v_raw,s=st(r),o=kr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?wc:e?Pc:Ns;return!e&&an(s,"iterate",l?Zl:cr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function li(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function ng(){const n={get(s){return go(this,s)},get size(){return vo(this)},has:_o,add:du,set:pu,delete:mu,clear:gu,forEach:xo(!1,!1)},e={get(s){return go(this,s,!1,!0)},get size(){return vo(this)},has:_o,add:du,set:pu,delete:mu,clear:gu,forEach:xo(!1,!0)},t={get(s){return go(this,s,!0)},get size(){return vo(this,!0)},has(s){return _o.call(this,s,!0)},add:li("add"),set:li("set"),delete:li("delete"),clear:li("clear"),forEach:xo(!0,!1)},i={get(s){return go(this,s,!0,!0)},get size(){return vo(this,!0)},has(s){return _o.call(this,s,!0)},add:li("add"),set:li("set"),delete:li("delete"),clear:li("clear"),forEach:xo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=yo(s,!1,!1),t[s]=yo(s,!0,!1),e[s]=yo(s,!1,!0),i[s]=yo(s,!0,!0)}),[n,t,e,i]}const[ig,rg,sg,og]=ng();function Rc(n,e){const t=e?n?og:sg:n?rg:ig;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(tt(t,r)&&r in i?t:i,r,s)}const ag={get:Rc(!1,!1)},lg={get:Rc(!1,!0)},cg={get:Rc(!0,!1)};const md=new WeakMap,gd=new WeakMap,_d=new WeakMap,ug=new WeakMap;function fg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hg(n){return n.__v_skip||!Object.isExtensible(n)?0:fg(Im(n))}function Zs(n){return Us(n)?n:Cc(n,!1,Qm,ag,md)}function vd(n){return Cc(n,!1,tg,lg,gd)}function ns(n){return Cc(n,!0,eg,cg,_d)}function Cc(n,e,t,i,r){if(!St(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=hg(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function As(n){return Us(n)?As(n.__v_raw):!!(n&&n.__v_isReactive)}function Us(n){return!!(n&&n.__v_isReadonly)}function la(n){return!!(n&&n.__v_isShallow)}function xd(n){return n?!!n.__v_raw:!1}function st(n){const e=n&&n.__v_raw;return e?st(e):n}function dg(n){return Object.isExtensible(n)&&nd(n,"__v_skip",!0),n}const Ns=n=>St(n)?Zs(n):n,Pc=n=>St(n)?ns(n):n;class yd{constructor(e,t,i,r){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new bc(()=>e(this._value),()=>ws(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=st(this);return(!e._cacheable||e.effect.dirty)&&Li(e._value,e._value=e.effect.run())&&ws(e,4),Lc(e),e.effect._dirtyLevel>=2&&ws(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function pg(n,e,t=!1){let i,r;const s=Ge(n);return s?(i=n,r=_n):(i=n.get,r=n.set),new yd(i,r,s||!r,t)}function Lc(n){var e;wi&&lr&&(n=st(n),cd(lr,(e=n.dep)!=null?e:n.dep=fd(()=>n.dep=void 0,n instanceof yd?n:void 0)))}function ws(n,e=4,t){n=st(n);const i=n.dep;i&&ud(i,e)}function jt(n){return!!(n&&n.__v_isRef===!0)}function rt(n){return Sd(n,!1)}function Bi(n){return Sd(n,!0)}function Sd(n,e){return jt(n)?n:new mg(n,e)}class mg{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:st(e),this._value=t?e:Ns(e)}get value(){return Lc(this),this._value}set value(e){const t=this.__v_isShallow||la(e)||Us(e);e=t?e:st(e),Li(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ns(e),ws(this,4))}}function Ue(n){return jt(n)?n.value:n}const gg={get:(n,e,t)=>Ue(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return jt(r)&&!jt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Md(n){return As(n)?n:new Proxy(n,gg)}class _g{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:i}=e(()=>Lc(this),()=>ws(this));this._get=t,this._set=i}get value(){return this._get()}set value(e){this._set(e)}}function vg(n){return new _g(n)}function Dc(n){const e=Fe(n)?new Array(n.length):{};for(const t in n)e[t]=yg(n,t);return e}class xg{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return jm(st(this._object),this._key)}}function yg(n,e,t){const i=n[e];return jt(i)?i:new xg(n,e,t)}/**
* @vue/runtime-core v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ri(n,e,t,i){try{return i?n(...i):n()}catch(r){Js(r,e,t)}}function xn(n,e,t,i){if(Ge(n)){const r=Ri(n,e,t,i);return r&&Qh(r)&&r.catch(s=>{Js(s,e,t)}),r}if(Fe(n)){const r=[];for(let s=0;s<n.length;s++)r.push(xn(n[s],e,t,i));return r}}function Js(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Oi(),Ri(l,null,10,[n,o,a]),Fi();return}}Sg(n,t,r,i)}function Sg(n,e,t,i=!0){console.error(n)}let Os=!1,Jl=!1;const qt=[];let In=0;const Gr=[];let vi=null,tr=0;const Ed=Promise.resolve();let Ic=null;function is(n){const e=Ic||Ed;return n?e.then(this?n.bind(this):n):e}function Mg(n){let e=In+1,t=qt.length;for(;e<t;){const i=e+t>>>1,r=qt[i],s=Fs(r);s<n||s===n&&r.pre?e=i+1:t=i}return e}function Ca(n){(!qt.length||!qt.includes(n,Os&&n.allowRecurse?In+1:In))&&(n.id==null?qt.push(n):qt.splice(Mg(n.id),0,n),bd())}function bd(){!Os&&!Jl&&(Jl=!0,Ic=Ed.then(Td))}function Eg(n){const e=qt.indexOf(n);e>In&&qt.splice(e,1)}function bg(n){Fe(n)?Gr.push(...n):(!vi||!vi.includes(n,n.allowRecurse?tr+1:tr))&&Gr.push(n),bd()}function _u(n,e,t=Os?In+1:0){for(;t<qt.length;t++){const i=qt[t];if(i&&i.pre){if(n&&i.id!==n.uid)continue;qt.splice(t,1),t--,i()}}}function ca(n){if(Gr.length){const e=[...new Set(Gr)].sort((t,i)=>Fs(t)-Fs(i));if(Gr.length=0,vi){vi.push(...e);return}for(vi=e,tr=0;tr<vi.length;tr++)vi[tr]();vi=null,tr=0}}const Fs=n=>n.id==null?1/0:n.id,Tg=(n,e)=>{const t=Fs(n)-Fs(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Td(n){Jl=!1,Os=!0,qt.sort(Tg);try{for(In=0;In<qt.length;In++){const e=qt[In];e&&e.active!==!1&&Ri(e,null,14)}}finally{In=0,qt.length=0,ca(),Os=!1,Ic=null,(qt.length||Gr.length)&&Td()}}function Ag(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||yt;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||yt;h&&(r=t.map(d=>At(d)?d.trim():d)),f&&(r=t.map(Om))}let a,l=i[a=Ya(e)]||i[a=Ya(yn(e))];!l&&s&&(l=i[a=Ya(gr(e))]),l&&xn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,xn(c,n,6,r)}}function Ad(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ge(n)){const l=c=>{const u=Ad(c,e,!0);u&&(a=!0,Ct(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(St(n)&&i.set(n,null),null):(Fe(s)?s.forEach(l=>o[l]=null):Ct(o,s),St(n)&&i.set(n,o),o)}function Pa(n,e){return!n||!qs(e)?!1:(e=e.slice(2).replace(/Once$/,""),tt(n,e[0].toLowerCase()+e.slice(1))||tt(n,gr(e))||tt(n,e))}let Lt=null,La=null;function ua(n){const e=Lt;return Lt=n,La=n&&n.type.__scopeId||null,e}function wd(n){La=n}function Rd(){La=null}function xt(n,e=Lt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Cu(-1);const s=ua(e);let o;try{o=n(...r)}finally{ua(s),i._d&&Cu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Za(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=n,m=ua(n);let p,S;try{if(t.shapeFlag&4){const y=r||i,U=y;p=Tn(c.call(U,y,u,f,d,h,g)),S=a}else{const y=e;p=Tn(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),S=e.props?a:wg(a)}}catch(y){Ls.length=0,Js(y,n,1),p=We(dn)}let v=p;if(S&&_!==!1){const y=Object.keys(S),{shapeFlag:U}=v;y.length&&U&7&&(s&&y.some(Sc)&&(S=Rg(S,s)),v=ri(v,S))}return t.dirs&&(v=ri(v),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&(v.transition=t.transition),p=v,ua(m),p}const wg=n=>{let e;for(const t in n)(t==="class"||t==="style"||qs(t))&&((e||(e={}))[t]=n[t]);return e},Rg=(n,e)=>{const t={};for(const i in n)(!Sc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Cg(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?vu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Pa(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?vu(i,o,c):!0:!!o;return!1}function vu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Pa(t,s))return!0}return!1}function Pg({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Cd="components";function hr(n,e){return Dg(Cd,n,!0,e)||n}const Lg=Symbol.for("v-ndc");function Dg(n,e,t=!0,i=!1){const r=Lt||Ot;if(r){const s=r.type;if(n===Cd){const a=oc(s,!1);if(a&&(a===e||a===yn(e)||a===Ys(yn(e))))return s}const o=xu(r[n]||s[n],e)||xu(r.appContext[n],e);return!o&&i?s:o}}function xu(n,e){return n&&(n[e]||n[yn(e)]||n[Ys(yn(e))])}const Pd=n=>n.__isSuspense;function Ld(n,e){e&&e.pendingBranch?Fe(n)?e.effects.push(...n):e.effects.push(n):bg(n)}const Ig=Symbol.for("v-scx"),Ug=()=>en(Ig);function Ng(n,e){return Uc(n,null,e)}const So={};function Ht(n,e,t){return Uc(n,e,t)}function Uc(n,e,{immediate:t,deep:i,flush:r,once:s,onTrack:o,onTrigger:a}=yt){if(e&&s){const b=e;e=(...A)=>{b(...A),U()}}const l=Ot,c=b=>i===!0?b:rr(b,i===!1?1:void 0);let u,f=!1,h=!1;if(jt(n)?(u=()=>n.value,f=la(n)):As(n)?(u=()=>c(n),f=!0):Fe(n)?(h=!0,f=n.some(b=>As(b)||la(b)),u=()=>n.map(b=>{if(jt(b))return b.value;if(As(b))return c(b);if(Ge(b))return Ri(b,l,2)})):Ge(n)?e?u=()=>Ri(n,l,2):u=()=>(d&&d(),xn(n,l,3,[g])):u=_n,e&&i){const b=u;u=()=>rr(b())}let d,g=b=>{d=v.onStop=()=>{Ri(b,l,4),d=v.onStop=void 0}},_;if(io)if(g=_n,e?t&&xn(e,l,3,[u(),h?[]:void 0,g]):u(),r==="sync"){const b=Ug();_=b.__watcherHandles||(b.__watcherHandles=[])}else return _n;let m=h?new Array(n.length).fill(So):So;const p=()=>{if(!(!v.active||!v.dirty))if(e){const b=v.run();(i||f||(h?b.some((A,T)=>Li(A,m[T])):Li(b,m)))&&(d&&d(),xn(e,l,3,[b,m===So?void 0:h&&m[0]===So?[]:m,g]),m=b)}else v.run()};p.allowRecurse=!!e;let S;r==="sync"?S=p:r==="post"?S=()=>zt(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),S=()=>Ca(p));const v=new bc(u,_n,S),y=od(),U=()=>{v.stop(),y&&Mc(y.effects,v)};return e?t?p():m=v.run():r==="post"?zt(v.run.bind(v),l&&l.suspense):v.run(),_&&_.push(U),U}function Og(n,e,t){const i=this.proxy,r=At(n)?n.includes(".")?Dd(i,n):()=>i[n]:n.bind(i,i);let s;Ge(e)?s=e:(s=e.handler,t=e);const o=no(this),a=Uc(r,s.bind(i),t);return o(),a}function Dd(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function rr(n,e,t=0,i){if(!St(n)||n.__v_skip)return n;if(e&&e>0){if(t>=e)return n;t++}if(i=i||new Set,i.has(n))return n;if(i.add(n),jt(n))rr(n.value,e,t,i);else if(Fe(n))for(let r=0;r<n.length;r++)rr(n[r],e,t,i);else if(Jh(n)||kr(n))n.forEach(r=>{rr(r,e,t,i)});else if(td(n))for(const r in n)rr(n[r],e,t,i);return n}function fa(n,e){if(Lt===null)return n;const t=Ua(Lt)||Lt.proxy,i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=yt]=e[r];s&&(Ge(s)&&(s={mounted:s,updated:s}),s.deep&&rr(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ln(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Oi(),xn(l,t,8,[n.el,a,n,e]),Fi())}}const xi=Symbol("_leaveCb"),Mo=Symbol("_enterCb");function Fg(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Yt(()=>{n.isMounted=!0}),Ia(()=>{n.isUnmounting=!0}),n}const mn=[Function,Array],Id={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:mn,onEnter:mn,onAfterEnter:mn,onEnterCancelled:mn,onBeforeLeave:mn,onLeave:mn,onAfterLeave:mn,onLeaveCancelled:mn,onBeforeAppear:mn,onAppear:mn,onAfterAppear:mn,onAppearCancelled:mn},Bg={name:"BaseTransition",props:Id,setup(n,{slots:e}){const t=to(),i=Fg();return()=>{const r=e.default&&Nd(e.default(),!0);if(!r||!r.length)return;let s=r[0];if(r.length>1){for(const h of r)if(h.type!==dn){s=h;break}}const o=st(n),{mode:a}=o;if(i.isLeaving)return Ja(s);const l=yu(s);if(!l)return Ja(s);const c=Ql(l,o,i,t);ha(l,c);const u=t.subTree,f=u&&yu(u);if(f&&f.type!==dn&&!bi(l,f)){const h=Ql(f,o,i,t);if(ha(f,h),a==="out-in")return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&(t.effect.dirty=!0,t.update())},Ja(s);a==="in-out"&&l.type!==dn&&(h.delayLeave=(d,g,_)=>{const m=Ud(i,f);m[String(f.key)]=f,d[xi]=()=>{g(),d[xi]=void 0,delete c.delayedLeave},c.delayedLeave=_})}return s}}},Hg=Bg;function Ud(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Ql(n,e,t,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:d,onLeaveCancelled:g,onBeforeAppear:_,onAppear:m,onAfterAppear:p,onAppearCancelled:S}=e,v=String(n.key),y=Ud(t,n),U=(T,E)=>{T&&xn(T,i,9,E)},b=(T,E)=>{const x=E[1];U(T,E),Fe(T)?T.every(N=>N.length<=1)&&x():T.length<=1&&x()},A={mode:s,persisted:o,beforeEnter(T){let E=a;if(!t.isMounted)if(r)E=_||a;else return;T[xi]&&T[xi](!0);const x=y[v];x&&bi(n,x)&&x.el[xi]&&x.el[xi](),U(E,[T])},enter(T){let E=l,x=c,N=u;if(!t.isMounted)if(r)E=m||l,x=p||c,N=S||u;else return;let O=!1;const D=T[Mo]=z=>{O||(O=!0,z?U(N,[T]):U(x,[T]),A.delayedLeave&&A.delayedLeave(),T[Mo]=void 0)};E?b(E,[T,D]):D()},leave(T,E){const x=String(n.key);if(T[Mo]&&T[Mo](!0),t.isUnmounting)return E();U(f,[T]);let N=!1;const O=T[xi]=D=>{N||(N=!0,E(),D?U(g,[T]):U(d,[T]),T[xi]=void 0,y[x]===n&&delete y[x])};y[x]=n,h?b(h,[T,O]):O()},clone(T){return Ql(T,e,t,i)}};return A}function Ja(n){if(Qs(n))return n=ri(n),n.children=null,n}function yu(n){if(!Qs(n))return n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ge(t.default))return t.default()}}function ha(n,e){n.shapeFlag&6&&n.component?ha(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Nd(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===ut?(o.patchFlag&128&&r++,i=i.concat(Nd(o.children,e,a))):(e||o.type!==dn)&&i.push(a!=null?ri(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function at(n,e){return Ge(n)?Ct({name:n.name},e,{setup:n}):n}const ur=n=>!!n.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function zg(n){Ge(n)&&(n={loader:n});const{loader:e,loadingComponent:t,errorComponent:i,delay:r=200,timeout:s,suspensible:o=!0,onError:a}=n;let l=null,c,u=0;const f=()=>(u++,l=null,h()),h=()=>{let d;return l||(d=l=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),a)return new Promise((_,m)=>{a(g,()=>_(f()),()=>m(g),u+1)});throw g}).then(g=>d!==l&&l?l:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),c=g,g)))};return at({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return c},setup(){const d=Ot;if(c)return()=>Qa(c,d);const g=S=>{l=null,Js(S,d,13,!i)};if(o&&d.suspense||io)return h().then(S=>()=>Qa(S,d)).catch(S=>(g(S),()=>i?We(i,{error:S}):null));const _=rt(!1),m=rt(),p=rt(!!r);return r&&setTimeout(()=>{p.value=!1},r),s!=null&&setTimeout(()=>{if(!_.value&&!m.value){const S=new Error(`Async component timed out after ${s}ms.`);g(S),m.value=S}},s),h().then(()=>{_.value=!0,d.parent&&Qs(d.parent.vnode)&&(d.parent.effect.dirty=!0,Ca(d.parent.update))}).catch(S=>{g(S),m.value=S}),()=>{if(_.value&&c)return Qa(c,d);if(m.value&&i)return We(i,{error:m.value});if(t&&!p.value)return We(t)}}})}function Qa(n,e){const{ref:t,props:i,children:r,ce:s}=e.vnode,o=We(n,i,r);return o.ref=t,o.ce=s,delete e.vnode.ce,o}const Qs=n=>n.type.__isKeepAlive,kg={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:e}){const t=to(),i=t.ctx;if(!i.renderer)return()=>{const S=e.default&&e.default();return S&&S.length===1?S[0]:S};const r=new Map,s=new Set;let o=null;const a=t.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:f}}}=i,h=f("div");i.activate=(S,v,y,U,b)=>{const A=S.component;c(S,v,y,0,a),l(A.vnode,S,v,y,A,a,U,S.slotScopeIds,b),zt(()=>{A.isDeactivated=!1,A.a&&Ts(A.a);const T=S.props&&S.props.onVnodeMounted;T&&rn(T,A.parent,S)},a)},i.deactivate=S=>{const v=S.component;c(S,h,null,1,a),zt(()=>{v.da&&Ts(v.da);const y=S.props&&S.props.onVnodeUnmounted;y&&rn(y,v.parent,S),v.isDeactivated=!0},a)};function d(S){el(S),u(S,t,a,!0)}function g(S){r.forEach((v,y)=>{const U=oc(v.type);U&&(!S||!S(U))&&_(y)})}function _(S){const v=r.get(S);!o||!bi(v,o)?d(v):o&&el(o),r.delete(S),s.delete(S)}Ht(()=>[n.include,n.exclude],([S,v])=>{S&&g(y=>ys(S,y)),v&&g(y=>!ys(v,y))},{flush:"post",deep:!0});let m=null;const p=()=>{m!=null&&r.set(m,tl(t.subTree))};return Yt(p),Fd(p),Ia(()=>{r.forEach(S=>{const{subTree:v,suspense:y}=t,U=tl(v);if(S.type===U.type&&S.key===U.key){el(U);const b=U.component.da;b&&zt(b,y);return}d(S)})}),()=>{if(m=null,!e.default)return o=null;const S=e.default(),v=S[0];if(S.length>1)return o=null,S;if(!Hs(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return o=null,v;let y=tl(v);const U=y.type,b=oc(ur(y)?y.type.__asyncResolved||{}:U),{include:A,exclude:T,max:E}=n;if(A&&(!b||!ys(A,b))||T&&b&&ys(T,b))return o=y,v;const x=y.key==null?U:y.key,N=r.get(x);return y.el&&(y=ri(y),v.shapeFlag&128&&(v.ssContent=y)),m=x,N?(y.el=N.el,y.component=N.component,y.transition&&ha(y,y.transition),y.shapeFlag|=512,s.delete(x),s.add(x)):(s.add(x),E&&s.size>parseInt(E,10)&&_(s.values().next().value)),y.shapeFlag|=256,o=y,Pd(v.type)?v:y}}},Vg=kg;function ys(n,e){return Fe(n)?n.some(t=>ys(t,e)):At(n)?n.split(",").includes(e):Dm(n)?n.test(e):!1}function Gg(n,e){Od(n,"a",e)}function Wg(n,e){Od(n,"da",e)}function Od(n,e,t=Ot){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Da(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Qs(r.parent.vnode)&&$g(i,e,t,r),r=r.parent}}function $g(n,e,t,i){const r=Da(e,n,i,!0);eo(()=>{Mc(i[e],r)},t)}function el(n){n.shapeFlag&=-257,n.shapeFlag&=-513}function tl(n){return n.shapeFlag&128?n.ssContent:n}function Da(n,e,t=Ot,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Oi();const a=no(t),l=xn(e,t,n,o);return a(),Fi(),l});return i?r.unshift(s):r.push(s),s}}const si=n=>(e,t=Ot)=>(!io||n==="sp")&&Da(n,(...i)=>e(...i),t),Xg=si("bm"),Yt=si("m"),qg=si("bu"),Fd=si("u"),Ia=si("bum"),eo=si("um"),jg=si("sp"),Yg=si("rtg"),Kg=si("rtc");function Zg(n,e=Ot){Da("ec",n,e)}function Bn(n,e,t,i){let r;const s=t;if(Fe(n)||At(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=e(n[o],o,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(St(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>e(o,a,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(n[c],c,a,s)}}else r=[];return r}function ct(n,e,t={},i,r){if(Lt.isCE||Lt.parent&&ur(Lt.parent)&&Lt.parent.isCE)return e!=="default"&&(t.name=e),We("slot",t,i&&i());let s=n[e];s&&s._c&&(s._d=!1),ye();const o=s&&Bd(s(t)),a=pt(ut,{key:t.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&n._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Bd(n){return n.some(e=>Hs(e)?!(e.type===dn||e.type===ut&&!Bd(e.children)):!0)?n:null}const ec=n=>n?ep(n)?Ua(n)||n.proxy:ec(n.parent):null,Rs=Ct(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ec(n.parent),$root:n=>ec(n.root),$emit:n=>n.emit,$options:n=>Nc(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,Ca(n.update)}),$nextTick:n=>n.n||(n.n=is.bind(n.proxy)),$watch:n=>Og.bind(n)}),nl=(n,e)=>n!==yt&&!n.__isScriptSetup&&tt(n,e),Jg={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(nl(i,e))return o[e]=1,i[e];if(r!==yt&&tt(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&tt(c,e))return o[e]=3,s[e];if(t!==yt&&tt(t,e))return o[e]=4,t[e];tc&&(o[e]=0)}}const u=Rs[e];let f,h;if(u)return e==="$attrs"&&an(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==yt&&tt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,tt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return nl(r,e)?(r[e]=t,!0):i!==yt&&tt(i,e)?(i[e]=t,!0):tt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==yt&&tt(n,o)||nl(e,o)||(a=s[0])&&tt(a,o)||tt(i,o)||tt(Rs,o)||tt(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:tt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Su(n){return Fe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let tc=!0;function Qg(n){const e=Nc(n),t=n.proxy,i=n.ctx;tc=!1,e.beforeCreate&&Mu(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:S,destroyed:v,unmounted:y,render:U,renderTracked:b,renderTriggered:A,errorCaptured:T,serverPrefetch:E,expose:x,inheritAttrs:N,components:O,directives:D,filters:z}=e;if(c&&e_(c,i,null),o)for(const $ in o){const L=o[$];Ge(L)&&(i[$]=L.bind(t))}if(r){const $=r.call(t,t);St($)&&(n.data=Zs($))}if(tc=!0,s)for(const $ in s){const L=s[$],ee=Ge(L)?L.bind(t,t):Ge(L.get)?L.get.bind(t,t):_n,te=!Ge(L)&&Ge(L.set)?L.set.bind(t):_n,ge=xe({get:ee,set:te});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>ge.value,set:Me=>ge.value=Me})}if(a)for(const $ in a)Hd(a[$],i,t,$);if(l){const $=Ge(l)?l.call(t):l;Reflect.ownKeys($).forEach(L=>{fr(L,$[L])})}u&&Mu(u,n,"c");function I($,L){Fe(L)?L.forEach(ee=>$(ee.bind(t))):L&&$(L.bind(t))}if(I(Xg,f),I(Yt,h),I(qg,d),I(Fd,g),I(Gg,_),I(Wg,m),I(Zg,T),I(Kg,b),I(Yg,A),I(Ia,S),I(eo,y),I(jg,E),Fe(x))if(x.length){const $=n.exposed||(n.exposed={});x.forEach(L=>{Object.defineProperty($,L,{get:()=>t[L],set:ee=>t[L]=ee})})}else n.exposed||(n.exposed={});U&&n.render===_n&&(n.render=U),N!=null&&(n.inheritAttrs=N),O&&(n.components=O),D&&(n.directives=D)}function e_(n,e,t=_n){Fe(n)&&(n=nc(n));for(const i in n){const r=n[i];let s;St(r)?"default"in r?s=en(r.from||i,r.default,!0):s=en(r.from||i):s=en(r),jt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Mu(n,e,t){xn(Fe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Hd(n,e,t,i){const r=i.includes(".")?Dd(t,i):()=>t[i];if(At(n)){const s=e[n];Ge(s)&&Ht(r,s)}else if(Ge(n))Ht(r,n.bind(t));else if(St(n))if(Fe(n))n.forEach(s=>Hd(s,e,t,i));else{const s=Ge(n.handler)?n.handler.bind(t):e[n.handler];Ge(s)&&Ht(r,s,n)}}function Nc(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>da(l,c,o,!0)),da(l,e,o)),St(e)&&s.set(e,l),l}function da(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&da(n,s,t,!0),r&&r.forEach(o=>da(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=t_[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const t_={data:Eu,props:bu,emits:bu,methods:Ss,computed:Ss,beforeCreate:Kt,created:Kt,beforeMount:Kt,mounted:Kt,beforeUpdate:Kt,updated:Kt,beforeDestroy:Kt,beforeUnmount:Kt,destroyed:Kt,unmounted:Kt,activated:Kt,deactivated:Kt,errorCaptured:Kt,serverPrefetch:Kt,components:Ss,directives:Ss,watch:i_,provide:Eu,inject:n_};function Eu(n,e){return e?n?function(){return Ct(Ge(n)?n.call(this,this):n,Ge(e)?e.call(this,this):e)}:e:n}function n_(n,e){return Ss(nc(n),nc(e))}function nc(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Kt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ss(n,e){return n?Ct(Object.create(null),n,e):e}function bu(n,e){return n?Fe(n)&&Fe(e)?[...new Set([...n,...e])]:Ct(Object.create(null),Su(n),Su(e??{})):e}function i_(n,e){if(!n)return e;if(!e)return n;const t=Ct(Object.create(null),n);for(const i in e)t[i]=Kt(n[i],e[i]);return t}function zd(){return{app:null,config:{isNativeTag:Pm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let r_=0;function s_(n,e){return function(i,r=null){Ge(i)||(i=Ct({},i)),r!=null&&!St(r)&&(r=null);const s=zd(),o=new WeakSet;let a=!1;const l=s.app={_uid:r_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:P_,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ge(c.install)?(o.add(c),c.install(l,...u)):Ge(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=We(i,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(h,c):n(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Ua(h.component)||h.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=Cs;Cs=l;try{return c()}finally{Cs=u}}};return l}}let Cs=null;function fr(n,e){if(Ot){let t=Ot.provides;const i=Ot.parent&&Ot.parent.provides;i===t&&(t=Ot.provides=Object.create(i)),t[n]=e}}function en(n,e,t=!1){const i=Ot||Lt;if(i||Cs){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Cs._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ge(e)?e.call(i&&i.proxy):e}}const kd={},Vd=()=>Object.create(kd),Gd=n=>Object.getPrototypeOf(n)===kd;function o_(n,e,t,i=!1){const r={},s=Vd();n.propsDefaults=Object.create(null),Wd(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:vd(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function a_(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=st(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Pa(n.emitsOptions,h))continue;const d=e[h];if(l)if(tt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=yn(h);r[g]=ic(l,a,g,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Wd(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!tt(e,f)&&((u=gr(f))===f||!tt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=ic(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!tt(e,f))&&(delete s[f],c=!0)}c&&ni(n.attrs,"set","")}function Wd(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Vr(l))continue;const c=e[l];let u;r&&tt(r,u=yn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Pa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=st(t),c=a||yt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=ic(r,l,f,c[f],n,!tt(c,f))}}return o}function ic(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=tt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ge(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=no(r);i=c[t]=l.call(null,e),u()}}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===gr(t))&&(i=!0))}return i}function $d(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ge(n)){const u=f=>{l=!0;const[h,d]=$d(f,e,!0);Ct(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return St(n)&&i.set(n,zr),zr;if(Fe(s))for(let u=0;u<s.length;u++){const f=yn(s[u]);Tu(f)&&(o[f]=yt)}else if(s)for(const u in s){const f=yn(u);if(Tu(f)){const h=s[u],d=o[f]=Fe(h)||Ge(h)?{type:h}:Ct({},h);if(d){const g=Ru(Boolean,d.type),_=Ru(String,d.type);d[0]=g>-1,d[1]=_<0||g<_,(g>-1||tt(d,"default"))&&a.push(f)}}}const c=[o,a];return St(n)&&i.set(n,c),c}function Tu(n){return n[0]!=="$"&&!Vr(n)}function Au(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function wu(n,e){return Au(n)===Au(e)}function Ru(n,e){return Fe(e)?e.findIndex(t=>wu(t,n)):Ge(e)&&wu(e,n)?0:-1}const Xd=n=>n[0]==="_"||n==="$stable",Oc=n=>Fe(n)?n.map(Tn):[Tn(n)],l_=(n,e,t)=>{if(e._n)return e;const i=xt((...r)=>Oc(e(...r)),t);return i._c=!1,i},qd=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Xd(r))continue;const s=n[r];if(Ge(s))e[r]=l_(r,s,i);else if(s!=null){const o=Oc(s);e[r]=()=>o}}},jd=(n,e)=>{const t=Oc(e);n.slots.default=()=>t},c_=(n,e)=>{const t=n.slots=Vd();if(n.vnode.shapeFlag&32){const i=e._;i?(Ct(t,e),nd(t,"_",i)):qd(e,t)}else e&&jd(n,e)},u_=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=yt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Ct(r,e),!t&&a===1&&delete r._):(s=!e.$stable,qd(e,r)),o=e}else e&&(jd(n,e),o={default:1});if(s)for(const a in r)!Xd(a)&&o[a]==null&&delete r[a]};function pa(n,e,t,i,r=!1){if(Fe(n)){n.forEach((h,d)=>pa(h,e&&(Fe(e)?e[d]:e),t,i,r));return}if(ur(i)&&!r)return;const s=i.shapeFlag&4?Ua(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===yt?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(At(c)?(u[c]=null,tt(f,c)&&(f[c]=null)):jt(c)&&(c.value=null)),Ge(l))Ri(l,a,12,[o,u]);else{const h=At(l),d=jt(l);if(h||d){const g=()=>{if(n.f){const _=h?tt(f,l)?f[l]:u[l]:l.value;r?Fe(_)&&Mc(_,s):Fe(_)?_.includes(s)||_.push(s):h?(u[l]=[s],tt(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=o,tt(f,l)&&(f[l]=o)):d&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,zt(g,t)):g()}}}let ci=!1;const f_=n=>n.namespaceURI.includes("svg")&&n.tagName!=="foreignObject",h_=n=>n.namespaceURI.includes("MathML"),Eo=n=>{if(f_(n))return"svg";if(h_(n))return"mathml"},bo=n=>n.nodeType===8;function d_(n){const{mt:e,p:t,o:{patchProp:i,createText:r,nextSibling:s,parentNode:o,remove:a,insert:l,createComment:c}}=n,u=(v,y)=>{if(!y.hasChildNodes()){t(null,v,y),ca(),y._vnode=v;return}ci=!1,f(y.firstChild,v,null,null,null),ca(),y._vnode=v,ci&&console.error("Hydration completed but contains mismatches.")},f=(v,y,U,b,A,T=!1)=>{T=T||!!y.dynamicChildren;const E=bo(v)&&v.data==="[",x=()=>_(v,y,U,b,A,E),{type:N,ref:O,shapeFlag:D,patchFlag:z}=y;let H=v.nodeType;y.el=v,z===-2&&(T=!1,y.dynamicChildren=null);let I=null;switch(N){case jr:H!==3?y.children===""?(l(y.el=r(""),o(v),v),I=v):I=x():(v.data!==y.children&&(ci=!0,v.data=y.children),I=s(v));break;case dn:S(v)?(I=s(v),p(y.el=v.content.firstChild,v,U)):H!==8||E?I=x():I=s(v);break;case Ps:if(E&&(v=s(v),H=v.nodeType),H===1||H===3){I=v;const $=!y.children.length;for(let L=0;L<y.staticCount;L++)$&&(y.children+=I.nodeType===1?I.outerHTML:I.data),L===y.staticCount-1&&(y.anchor=I),I=s(I);return E?s(I):I}else x();break;case ut:E?I=g(v,y,U,b,A,T):I=x();break;default:if(D&1)(H!==1||y.type.toLowerCase()!==v.tagName.toLowerCase())&&!S(v)?I=x():I=h(v,y,U,b,A,T);else if(D&6){y.slotScopeIds=A;const $=o(v);if(E?I=m(v):bo(v)&&v.data==="teleport start"?I=m(v,v.data,"teleport end"):I=s(v),e(y,$,null,U,b,Eo($),T),ur(y)){let L;E?(L=We(ut),L.anchor=I?I.previousSibling:$.lastChild):L=v.nodeType===3?Hn(""):We("div"),L.el=v,y.component.subTree=L}}else D&64?H!==8?I=x():I=y.type.hydrate(v,y,U,b,A,T,n,d):D&128&&(I=y.type.hydrate(v,y,U,b,Eo(o(v)),A,T,n,f))}return O!=null&&pa(O,null,b,y),I},h=(v,y,U,b,A,T)=>{T=T||!!y.dynamicChildren;const{type:E,props:x,patchFlag:N,shapeFlag:O,dirs:D,transition:z}=y,H=E==="input"||E==="option";if(H||N!==-1){D&&Ln(y,null,U,"created");let I=!1;if(S(v)){I=Yd(b,z)&&U&&U.vnode.props&&U.vnode.props.appear;const L=v.content.firstChild;I&&z.beforeEnter(L),p(L,v,U),y.el=v=L}if(O&16&&!(x&&(x.innerHTML||x.textContent))){let L=d(v.firstChild,y,v,U,b,A,T);for(;L;){ci=!0;const ee=L;L=L.nextSibling,a(ee)}}else O&8&&v.textContent!==y.children&&(ci=!0,v.textContent=y.children);if(x)if(H||!T||N&48)for(const L in x)(H&&(L.endsWith("value")||L==="indeterminate")||qs(L)&&!Vr(L)||L[0]===".")&&i(v,L,null,x[L],void 0,void 0,U);else x.onClick&&i(v,"onClick",null,x.onClick,void 0,void 0,U);let $;($=x&&x.onVnodeBeforeMount)&&rn($,U,y),D&&Ln(y,null,U,"beforeMount"),(($=x&&x.onVnodeMounted)||D||I)&&Ld(()=>{$&&rn($,U,y),I&&z.enter(v),D&&Ln(y,null,U,"mounted")},b)}return v.nextSibling},d=(v,y,U,b,A,T,E)=>{E=E||!!y.dynamicChildren;const x=y.children,N=x.length;for(let O=0;O<N;O++){const D=E?x[O]:x[O]=Tn(x[O]);if(v)v=f(v,D,b,A,T,E);else{if(D.type===jr&&!D.children)continue;ci=!0,t(null,D,U,null,b,A,Eo(U),T)}}return v},g=(v,y,U,b,A,T)=>{const{slotScopeIds:E}=y;E&&(A=A?A.concat(E):E);const x=o(v),N=d(s(v),y,x,U,b,A,T);return N&&bo(N)&&N.data==="]"?s(y.anchor=N):(ci=!0,l(y.anchor=c("]"),x,N),N)},_=(v,y,U,b,A,T)=>{if(ci=!0,y.el=null,T){const N=m(v);for(;;){const O=s(v);if(O&&O!==N)a(O);else break}}const E=s(v),x=o(v);return a(v),t(null,y,x,E,U,b,Eo(x),A),E},m=(v,y="[",U="]")=>{let b=0;for(;v;)if(v=s(v),v&&bo(v)&&(v.data===y&&b++,v.data===U)){if(b===0)return s(v);b--}return v},p=(v,y,U)=>{const b=y.parentNode;b&&b.replaceChild(v,y);let A=U;for(;A;)A.vnode.el===y&&(A.vnode.el=A.subTree.el=v),A=A.parent},S=v=>v.nodeType===1&&v.tagName.toLowerCase()==="template";return[u,f]}const zt=Ld;function p_(n){return m_(n,d_)}function m_(n,e){const t=id();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=_n,insertStaticContent:g}=n,_=(C,P,X,Z=null,K=null,fe=null,w=void 0,M=null,k=!!P.dynamicChildren)=>{if(C===P)return;C&&!bi(C,P)&&(Z=W(C),Me(C,K,fe,!0),C=null),P.patchFlag===-2&&(k=!1,P.dynamicChildren=null);const{type:V,ref:j,shapeFlag:Q}=P;switch(V){case jr:m(C,P,X,Z);break;case dn:p(C,P,X,Z);break;case Ps:C==null&&S(P,X,Z,w);break;case ut:O(C,P,X,Z,K,fe,w,M,k);break;default:Q&1?U(C,P,X,Z,K,fe,w,M,k):Q&6?D(C,P,X,Z,K,fe,w,M,k):(Q&64||Q&128)&&V.process(C,P,X,Z,K,fe,w,M,k,F)}j!=null&&K&&pa(j,C&&C.ref,fe,P||C,!P)},m=(C,P,X,Z)=>{if(C==null)i(P.el=a(P.children),X,Z);else{const K=P.el=C.el;P.children!==C.children&&c(K,P.children)}},p=(C,P,X,Z)=>{C==null?i(P.el=l(P.children||""),X,Z):P.el=C.el},S=(C,P,X,Z)=>{[C.el,C.anchor]=g(C.children,P,X,Z,C.el,C.anchor)},v=({el:C,anchor:P},X,Z)=>{let K;for(;C&&C!==P;)K=h(C),i(C,X,Z),C=K;i(P,X,Z)},y=({el:C,anchor:P})=>{let X;for(;C&&C!==P;)X=h(C),r(C),C=X;r(P)},U=(C,P,X,Z,K,fe,w,M,k)=>{P.type==="svg"?w="svg":P.type==="math"&&(w="mathml"),C==null?b(P,X,Z,K,fe,w,M,k):E(C,P,K,fe,w,M,k)},b=(C,P,X,Z,K,fe,w,M)=>{let k,V;const{props:j,shapeFlag:Q,transition:pe,dirs:ce}=C;if(k=C.el=o(C.type,fe,j&&j.is,j),Q&8?u(k,C.children):Q&16&&T(C.children,k,null,Z,K,il(C,fe),w,M),ce&&Ln(C,null,Z,"created"),A(k,C,C.scopeId,w,Z),j){for(const we in j)we!=="value"&&!Vr(we)&&s(k,we,null,j[we],fe,C.children,Z,K,_e);"value"in j&&s(k,"value",null,j.value,fe),(V=j.onVnodeBeforeMount)&&rn(V,Z,C)}ce&&Ln(C,null,Z,"beforeMount");const he=Yd(K,pe);he&&pe.beforeEnter(k),i(k,P,X),((V=j&&j.onVnodeMounted)||he||ce)&&zt(()=>{V&&rn(V,Z,C),he&&pe.enter(k),ce&&Ln(C,null,Z,"mounted")},K)},A=(C,P,X,Z,K)=>{if(X&&d(C,X),Z)for(let fe=0;fe<Z.length;fe++)d(C,Z[fe]);if(K){let fe=K.subTree;if(P===fe){const w=K.vnode;A(C,w,w.scopeId,w.slotScopeIds,K.parent)}}},T=(C,P,X,Z,K,fe,w,M,k=0)=>{for(let V=k;V<C.length;V++){const j=C[V]=M?yi(C[V]):Tn(C[V]);_(null,j,P,X,Z,K,fe,w,M)}},E=(C,P,X,Z,K,fe,w)=>{const M=P.el=C.el;let{patchFlag:k,dynamicChildren:V,dirs:j}=P;k|=C.patchFlag&16;const Q=C.props||yt,pe=P.props||yt;let ce;if(X&&Gi(X,!1),(ce=pe.onVnodeBeforeUpdate)&&rn(ce,X,P,C),j&&Ln(P,C,X,"beforeUpdate"),X&&Gi(X,!0),V?x(C.dynamicChildren,V,M,X,Z,il(P,K),fe):w||L(C,P,M,null,X,Z,il(P,K),fe,!1),k>0){if(k&16)N(M,P,Q,pe,X,Z,K);else if(k&2&&Q.class!==pe.class&&s(M,"class",null,pe.class,K),k&4&&s(M,"style",Q.style,pe.style,K),k&8){const he=P.dynamicProps;for(let we=0;we<he.length;we++){const me=he[we],Te=Q[me],Be=pe[me];(Be!==Te||me==="value")&&s(M,me,Te,Be,K,C.children,X,Z,_e)}}k&1&&C.children!==P.children&&u(M,P.children)}else!w&&V==null&&N(M,P,Q,pe,X,Z,K);((ce=pe.onVnodeUpdated)||j)&&zt(()=>{ce&&rn(ce,X,P,C),j&&Ln(P,C,X,"updated")},Z)},x=(C,P,X,Z,K,fe,w)=>{for(let M=0;M<P.length;M++){const k=C[M],V=P[M],j=k.el&&(k.type===ut||!bi(k,V)||k.shapeFlag&70)?f(k.el):X;_(k,V,j,null,Z,K,fe,w,!0)}},N=(C,P,X,Z,K,fe,w)=>{if(X!==Z){if(X!==yt)for(const M in X)!Vr(M)&&!(M in Z)&&s(C,M,X[M],null,w,P.children,K,fe,_e);for(const M in Z){if(Vr(M))continue;const k=Z[M],V=X[M];k!==V&&M!=="value"&&s(C,M,V,k,w,P.children,K,fe,_e)}"value"in Z&&s(C,"value",X.value,Z.value,w)}},O=(C,P,X,Z,K,fe,w,M,k)=>{const V=P.el=C?C.el:a(""),j=P.anchor=C?C.anchor:a("");let{patchFlag:Q,dynamicChildren:pe,slotScopeIds:ce}=P;ce&&(M=M?M.concat(ce):ce),C==null?(i(V,X,Z),i(j,X,Z),T(P.children||[],X,j,K,fe,w,M,k)):Q>0&&Q&64&&pe&&C.dynamicChildren?(x(C.dynamicChildren,pe,X,K,fe,w,M),(P.key!=null||K&&P===K.subTree)&&Kd(C,P,!0)):L(C,P,X,j,K,fe,w,M,k)},D=(C,P,X,Z,K,fe,w,M,k)=>{P.slotScopeIds=M,C==null?P.shapeFlag&512?K.ctx.activate(P,X,Z,w,k):z(P,X,Z,K,fe,w,k):H(C,P,k)},z=(C,P,X,Z,K,fe,w)=>{const M=C.component=b_(C,Z,K);if(Qs(C)&&(M.ctx.renderer=F),T_(M),M.asyncDep){if(K&&K.registerDep(M,I),!C.el){const k=M.subTree=We(dn);p(null,k,P,X)}}else I(M,C,P,X,K,fe,w)},H=(C,P,X)=>{const Z=P.component=C.component;if(Cg(C,P,X))if(Z.asyncDep&&!Z.asyncResolved){$(Z,P,X);return}else Z.next=P,Eg(Z.update),Z.effect.dirty=!0,Z.update();else P.el=C.el,Z.vnode=P},I=(C,P,X,Z,K,fe,w)=>{const M=()=>{if(C.isMounted){let{next:j,bu:Q,u:pe,parent:ce,vnode:he}=C;{const Ie=Zd(C);if(Ie){j&&(j.el=he.el,$(C,j,w)),Ie.asyncDep.then(()=>{C.isUnmounted||M()});return}}let we=j,me;Gi(C,!1),j?(j.el=he.el,$(C,j,w)):j=he,Q&&Ts(Q),(me=j.props&&j.props.onVnodeBeforeUpdate)&&rn(me,ce,j,he),Gi(C,!0);const Te=Za(C),Be=C.subTree;C.subTree=Te,_(Be,Te,f(Be.el),W(Be),C,K,fe),j.el=Te.el,we===null&&Pg(C,Te.el),pe&&zt(pe,K),(me=j.props&&j.props.onVnodeUpdated)&&zt(()=>rn(me,ce,j,he),K)}else{let j;const{el:Q,props:pe}=P,{bm:ce,m:he,parent:we}=C,me=ur(P);if(Gi(C,!1),ce&&Ts(ce),!me&&(j=pe&&pe.onVnodeBeforeMount)&&rn(j,we,P),Gi(C,!0),Q&&ve){const Te=()=>{C.subTree=Za(C),ve(Q,C.subTree,C,K,null)};me?P.type.__asyncLoader().then(()=>!C.isUnmounted&&Te()):Te()}else{const Te=C.subTree=Za(C);_(null,Te,X,Z,C,K,fe),P.el=Te.el}if(he&&zt(he,K),!me&&(j=pe&&pe.onVnodeMounted)){const Te=P;zt(()=>rn(j,we,Te),K)}(P.shapeFlag&256||we&&ur(we.vnode)&&we.vnode.shapeFlag&256)&&C.a&&zt(C.a,K),C.isMounted=!0,P=X=Z=null}},k=C.effect=new bc(M,_n,()=>Ca(V),C.scope),V=C.update=()=>{k.dirty&&k.run()};V.id=C.uid,Gi(C,!0),V()},$=(C,P,X)=>{P.component=C;const Z=C.vnode.props;C.vnode=P,C.next=null,a_(C,P.props,Z,X),u_(C,P.children,X),Oi(),_u(C),Fi()},L=(C,P,X,Z,K,fe,w,M,k=!1)=>{const V=C&&C.children,j=C?C.shapeFlag:0,Q=P.children,{patchFlag:pe,shapeFlag:ce}=P;if(pe>0){if(pe&128){te(V,Q,X,Z,K,fe,w,M,k);return}else if(pe&256){ee(V,Q,X,Z,K,fe,w,M,k);return}}ce&8?(j&16&&_e(V,K,fe),Q!==V&&u(X,Q)):j&16?ce&16?te(V,Q,X,Z,K,fe,w,M,k):_e(V,K,fe,!0):(j&8&&u(X,""),ce&16&&T(Q,X,Z,K,fe,w,M,k))},ee=(C,P,X,Z,K,fe,w,M,k)=>{C=C||zr,P=P||zr;const V=C.length,j=P.length,Q=Math.min(V,j);let pe;for(pe=0;pe<Q;pe++){const ce=P[pe]=k?yi(P[pe]):Tn(P[pe]);_(C[pe],ce,X,null,K,fe,w,M,k)}V>j?_e(C,K,fe,!0,!1,Q):T(P,X,Z,K,fe,w,M,k,Q)},te=(C,P,X,Z,K,fe,w,M,k)=>{let V=0;const j=P.length;let Q=C.length-1,pe=j-1;for(;V<=Q&&V<=pe;){const ce=C[V],he=P[V]=k?yi(P[V]):Tn(P[V]);if(bi(ce,he))_(ce,he,X,null,K,fe,w,M,k);else break;V++}for(;V<=Q&&V<=pe;){const ce=C[Q],he=P[pe]=k?yi(P[pe]):Tn(P[pe]);if(bi(ce,he))_(ce,he,X,null,K,fe,w,M,k);else break;Q--,pe--}if(V>Q){if(V<=pe){const ce=pe+1,he=ce<j?P[ce].el:Z;for(;V<=pe;)_(null,P[V]=k?yi(P[V]):Tn(P[V]),X,he,K,fe,w,M,k),V++}}else if(V>pe)for(;V<=Q;)Me(C[V],K,fe,!0),V++;else{const ce=V,he=V,we=new Map;for(V=he;V<=pe;V++){const G=P[V]=k?yi(P[V]):Tn(P[V]);G.key!=null&&we.set(G.key,V)}let me,Te=0;const Be=pe-he+1;let Ie=!1,Ce=0;const He=new Array(Be);for(V=0;V<Be;V++)He[V]=0;for(V=ce;V<=Q;V++){const G=C[V];if(Te>=Be){Me(G,K,fe,!0);continue}let ae;if(G.key!=null)ae=we.get(G.key);else for(me=he;me<=pe;me++)if(He[me-he]===0&&bi(G,P[me])){ae=me;break}ae===void 0?Me(G,K,fe,!0):(He[ae-he]=V+1,ae>=Ce?Ce=ae:Ie=!0,_(G,P[ae],X,null,K,fe,w,M,k),Te++)}const $e=Ie?g_(He):zr;for(me=$e.length-1,V=Be-1;V>=0;V--){const G=he+V,ae=P[G],B=G+1<j?P[G+1].el:Z;He[V]===0?_(null,ae,X,B,K,fe,w,M,k):Ie&&(me<0||V!==$e[me]?ge(ae,X,B,2):me--)}}},ge=(C,P,X,Z,K=null)=>{const{el:fe,type:w,transition:M,children:k,shapeFlag:V}=C;if(V&6){ge(C.component.subTree,P,X,Z);return}if(V&128){C.suspense.move(P,X,Z);return}if(V&64){w.move(C,P,X,F);return}if(w===ut){i(fe,P,X);for(let Q=0;Q<k.length;Q++)ge(k[Q],P,X,Z);i(C.anchor,P,X);return}if(w===Ps){v(C,P,X);return}if(Z!==2&&V&1&&M)if(Z===0)M.beforeEnter(fe),i(fe,P,X),zt(()=>M.enter(fe),K);else{const{leave:Q,delayLeave:pe,afterLeave:ce}=M,he=()=>i(fe,P,X),we=()=>{Q(fe,()=>{he(),ce&&ce()})};pe?pe(fe,he,we):we()}else i(fe,P,X)},Me=(C,P,X,Z=!1,K=!1)=>{const{type:fe,props:w,ref:M,children:k,dynamicChildren:V,shapeFlag:j,patchFlag:Q,dirs:pe}=C;if(M!=null&&pa(M,null,X,C,!0),j&256){P.ctx.deactivate(C);return}const ce=j&1&&pe,he=!ur(C);let we;if(he&&(we=w&&w.onVnodeBeforeUnmount)&&rn(we,P,C),j&6)de(C.component,X,Z);else{if(j&128){C.suspense.unmount(X,Z);return}ce&&Ln(C,null,P,"beforeUnmount"),j&64?C.type.remove(C,P,X,K,F,Z):V&&(fe!==ut||Q>0&&Q&64)?_e(V,P,X,!1,!0):(fe===ut&&Q&384||!K&&j&16)&&_e(k,P,X),Z&&De(C)}(he&&(we=w&&w.onVnodeUnmounted)||ce)&&zt(()=>{we&&rn(we,P,C),ce&&Ln(C,null,P,"unmounted")},X)},De=C=>{const{type:P,el:X,anchor:Z,transition:K}=C;if(P===ut){J(X,Z);return}if(P===Ps){y(C);return}const fe=()=>{r(X),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(C.shapeFlag&1&&K&&!K.persisted){const{leave:w,delayLeave:M}=K,k=()=>w(X,fe);M?M(C.el,fe,k):k()}else fe()},J=(C,P)=>{let X;for(;C!==P;)X=h(C),r(C),C=X;r(P)},de=(C,P,X)=>{const{bum:Z,scope:K,update:fe,subTree:w,um:M}=C;Z&&Ts(Z),K.stop(),fe&&(fe.active=!1,Me(w,C,P,X)),M&&zt(M,P),zt(()=>{C.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},_e=(C,P,X,Z=!1,K=!1,fe=0)=>{for(let w=fe;w<C.length;w++)Me(C[w],P,X,Z,K)},W=C=>C.shapeFlag&6?W(C.component.subTree):C.shapeFlag&128?C.suspense.next():h(C.anchor||C.el);let ue=!1;const le=(C,P,X)=>{C==null?P._vnode&&Me(P._vnode,null,null,!0):_(P._vnode||null,C,P,null,null,null,X),ue||(ue=!0,_u(),ca(),ue=!1),P._vnode=C},F={p:_,um:Me,m:ge,r:De,mt:z,mc:T,pc:L,pbc:x,n:W,o:n};let Ae,ve;return e&&([Ae,ve]=e(F)),{render:le,hydrate:Ae,createApp:s_(le,Ae)}}function il({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Gi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Yd(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Kd(n,e,t=!1){const i=n.children,r=e.children;if(Fe(i)&&Fe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=yi(r[s]),a.el=o.el),t||Kd(o,a)),a.type===jr&&(a.el=o.el)}}function g_(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Zd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Zd(e)}const __=n=>n.__isTeleport,ut=Symbol.for("v-fgt"),jr=Symbol.for("v-txt"),dn=Symbol.for("v-cmt"),Ps=Symbol.for("v-stc"),Ls=[];let An=null;function ye(n=!1){Ls.push(An=n?null:[])}function v_(){Ls.pop(),An=Ls[Ls.length-1]||null}let Bs=1;function Cu(n){Bs+=n}function Jd(n){return n.dynamicChildren=Bs>0?An||zr:null,v_(),Bs>0&&An&&An.push(n),n}function Oe(n,e,t,i,r,s){return Jd(Pe(n,e,t,i,r,s,!0))}function pt(n,e,t,i,r){return Jd(We(n,e,t,i,r,!0))}function Hs(n){return n?n.__v_isVNode===!0:!1}function bi(n,e){return n.type===e.type&&n.key===e.key}const Qd=({key:n})=>n??null,ia=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?At(n)||jt(n)||Ge(n)?{i:Lt,r:n,k:e,f:!!t}:n:null);function Pe(n,e=null,t=null,i=0,r=null,s=n===ut?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Qd(e),ref:e&&ia(e),scopeId:La,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Lt};return a?(Fc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=At(t)?8:16),Bs>0&&!o&&An&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&An.push(l),l}const We=x_;function x_(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Lg)&&(n=dn),Hs(n)){const a=ri(n,e,!0);return t&&Fc(a,t),Bs>0&&!s&&An&&(a.shapeFlag&6?An[An.indexOf(n)]=a:An.push(a)),a.patchFlag|=-2,a}if(C_(n)&&(n=n.__vccOpts),e){e=y_(e);let{class:a,style:l}=e;a&&!At(a)&&(e.class=sn(a)),St(l)&&(xd(l)&&!Fe(l)&&(l=Ct({},l)),e.style=Ks(l))}const o=At(n)?1:Pd(n)?128:__(n)?64:St(n)?4:Ge(n)?2:0;return Pe(n,e,t,i,r,o,s,!0)}function y_(n){return n?xd(n)||Gd(n)?Ct({},n):n:null}function ri(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?rc(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&Qd(a),ref:e&&e.ref?t&&r?Fe(r)?r.concat(ia(e)):[r,ia(e)]:ia(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ut?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ri(n.ssContent),ssFallback:n.ssFallback&&ri(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Hn(n=" ",e=0){return We(jr,null,n,e)}function S_(n,e){const t=We(Ps,null,n);return t.staticCount=e,t}function Tt(n="",e=!1){return e?(ye(),pt(dn,null,n)):We(dn,null,n)}function Tn(n){return n==null||typeof n=="boolean"?We(dn):Fe(n)?We(ut,null,n.slice()):typeof n=="object"?yi(n):We(jr,null,String(n))}function yi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ri(n)}function Fc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Fc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Gd(e)?e._ctx=Lt:r===3&&Lt&&(Lt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ge(e)?(e={default:e,_ctx:Lt},t=32):(e=String(e),i&64?(t=16,e=[Hn(e)]):t=8);n.children=e,n.shapeFlag|=t}function rc(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=sn([e.class,i.class]));else if(r==="style")e.style=Ks([e.style,i.style]);else if(qs(r)){const s=e[r],o=i[r];o&&s!==o&&!(Fe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function rn(n,e,t,i=null){xn(n,e,7,[t,i])}const M_=zd();let E_=0;function b_(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||M_,s={uid:E_++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Wm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$d(i,r),emitsOptions:Ad(i,r),emit:null,emitted:null,propsDefaults:yt,inheritAttrs:i.inheritAttrs,ctx:yt,data:yt,props:yt,attrs:yt,slots:yt,refs:yt,setupState:yt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Ag.bind(null,s),n.ce&&n.ce(s),s}let Ot=null;const to=()=>Ot||Lt;let ma,sc;{const n=id(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ma=e("__VUE_INSTANCE_SETTERS__",t=>Ot=t),sc=e("__VUE_SSR_SETTERS__",t=>io=t)}const no=n=>{const e=Ot;return ma(n),n.scope.on(),()=>{n.scope.off(),ma(e)}},Pu=()=>{Ot&&Ot.scope.off(),ma(null)};function ep(n){return n.vnode.shapeFlag&4}let io=!1;function T_(n,e=!1){e&&sc(e);const{props:t,children:i}=n.vnode,r=ep(n);o_(n,t,r,e),c_(n,i);const s=r?A_(n,e):void 0;return e&&sc(!1),s}function A_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Jg);const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?R_(n):null,s=no(n);Oi();const o=Ri(i,n,0,[n.props,r]);if(Fi(),s(),Qh(o)){if(o.then(Pu,Pu),e)return o.then(a=>{Lu(n,a,e)}).catch(a=>{Js(a,n,0)});n.asyncDep=o}else Lu(n,o,e)}else tp(n,e)}function Lu(n,e,t){Ge(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:St(e)&&(n.setupState=Md(e)),tp(n,t)}let Du;function tp(n,e,t){const i=n.type;if(!n.render){if(!e&&Du&&!i.render){const r=i.template||Nc(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Ct(Ct({isCustomElement:s,delimiters:a},o),l);i.render=Du(r,c)}}n.render=i.render||_n}{const r=no(n);Oi();try{Qg(n)}finally{Fi(),r()}}}const w_={get(n,e){return an(n,"get",""),n[e]}};function R_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,w_),slots:n.slots,emit:n.emit,expose:e}}function Ua(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Md(dg(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Rs)return Rs[t](n)},has(e,t){return t in e||t in Rs}}))}function oc(n,e=!0){return Ge(n)?n.displayName||n.name:n.name||e&&n.__name}function C_(n){return Ge(n)&&"__vccOpts"in n}const xe=(n,e)=>pg(n,e,io);function dt(n,e,t){const i=arguments.length;return i===2?St(e)&&!Fe(e)?Hs(e)?We(n,null,[e]):We(n,e):We(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Hs(t)&&(t=[t]),We(n,e,t))}const P_="3.4.25";/**
* @vue/runtime-dom v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const L_="http://www.w3.org/2000/svg",D_="http://www.w3.org/1998/Math/MathML",Si=typeof document<"u"?document:null,Iu=Si&&Si.createElement("template"),I_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Si.createElementNS(L_,n):e==="mathml"?Si.createElementNS(D_,n):Si.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Si.createTextNode(n),createComment:n=>Si.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Si.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Iu.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const a=Iu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ui="transition",us="animation",zs=Symbol("_vtc"),ro=(n,{slots:e})=>dt(Hg,U_(n),e);ro.displayName="Transition";const np={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ro.props=Ct({},Id,np);const Wi=(n,e=[])=>{Fe(n)?n.forEach(t=>t(...e)):n&&n(...e)},Uu=n=>n?Fe(n)?n.some(e=>e.length>1):n.length>1:!1;function U_(n){const e={};for(const O in n)O in np||(e[O]=n[O]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=n,g=N_(r),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:S,onEnterCancelled:v,onLeave:y,onLeaveCancelled:U,onBeforeAppear:b=p,onAppear:A=S,onAppearCancelled:T=v}=e,E=(O,D,z)=>{$i(O,D?u:a),$i(O,D?c:o),z&&z()},x=(O,D)=>{O._isLeaving=!1,$i(O,f),$i(O,d),$i(O,h),D&&D()},N=O=>(D,z)=>{const H=O?A:S,I=()=>E(D,O,z);Wi(H,[D,I]),Nu(()=>{$i(D,O?l:s),fi(D,O?u:a),Uu(H)||Ou(D,i,_,I)})};return Ct(e,{onBeforeEnter(O){Wi(p,[O]),fi(O,s),fi(O,o)},onBeforeAppear(O){Wi(b,[O]),fi(O,l),fi(O,c)},onEnter:N(!1),onAppear:N(!0),onLeave(O,D){O._isLeaving=!0;const z=()=>x(O,D);fi(O,f),fi(O,h),B_(),Nu(()=>{O._isLeaving&&($i(O,f),fi(O,d),Uu(y)||Ou(O,i,m,z))}),Wi(y,[O,z])},onEnterCancelled(O){E(O,!1),Wi(v,[O])},onAppearCancelled(O){E(O,!0),Wi(T,[O])},onLeaveCancelled(O){x(O),Wi(U,[O])}})}function N_(n){if(n==null)return null;if(St(n))return[rl(n.enter),rl(n.leave)];{const e=rl(n);return[e,e]}}function rl(n){return Fm(n)}function fi(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[zs]||(n[zs]=new Set)).add(e)}function $i(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[zs];t&&(t.delete(e),t.size||(n[zs]=void 0))}function Nu(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let O_=0;function Ou(n,e,t,i){const r=n._endId=++O_,s=()=>{r===n._endId&&i()};if(t)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=F_(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=d=>{d.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function F_(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(`${ui}Delay`),s=i(`${ui}Duration`),o=Fu(r,s),a=i(`${us}Delay`),l=i(`${us}Duration`),c=Fu(a,l);let u=null,f=0,h=0;e===ui?o>0&&(u=ui,f=o,h=s.length):e===us?c>0&&(u=us,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?ui:us:null,h=u?u===ui?s.length:l.length:0);const d=u===ui&&/\b(transform|all)(,|$)/.test(i(`${ui}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function Fu(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Bu(t)+Bu(n[i])))}function Bu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function B_(){return document.body.offsetHeight}function H_(n,e,t){const i=n[zs];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ga=Symbol("_vod"),ip=Symbol("_vsh"),_a={beforeMount(n,{value:e},{transition:t}){n[ga]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):fs(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),fs(n,!0),i.enter(n)):i.leave(n,()=>{fs(n,!1)}):fs(n,e))},beforeUnmount(n,{value:e}){fs(n,e)}};function fs(n,e){n.style.display=e?n[ga]:"none",n[ip]=!e}const z_=Symbol(""),k_=/(^|;)\s*display\s*:/;function V_(n,e,t){const i=n.style,r=At(t);let s=!1;if(t&&!r){if(e)if(At(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ra(i,a,"")}else for(const o in e)t[o]==null&&ra(i,o,"");for(const o in t)o==="display"&&(s=!0),ra(i,o,t[o])}else if(r){if(e!==t){const o=i[z_];o&&(t+=";"+o),i.cssText=t,s=k_.test(t)}}else e&&n.removeAttribute("style");ga in n&&(n[ga]=s?i.display:"",n[ip]&&(i.display="none"))}const Hu=/\s*!important$/;function ra(n,e,t){if(Fe(t))t.forEach(i=>ra(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=G_(n,e);Hu.test(t)?n.setProperty(gr(i),t.replace(Hu,""),"important"):n[i]=t}}const zu=["Webkit","Moz","ms"],sl={};function G_(n,e){const t=sl[e];if(t)return t;let i=yn(e);if(i!=="filter"&&i in n)return sl[e]=i;i=Ys(i);for(let r=0;r<zu.length;r++){const s=zu[r]+i;if(s in n)return sl[e]=s}return e}const ku="http://www.w3.org/1999/xlink";function W_(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(ku,e.slice(6,e.length)):n.setAttributeNS(ku,e,t);else{const s=Gm(e);t==null||s&&!rd(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function $_(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?n.getAttribute("value")||"":n.value,u=t??"";(c!==u||!("_value"in n))&&(n.value=u),t==null&&n.removeAttribute(e),n._value=t;return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=rd(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function X_(n,e,t,i){n.addEventListener(e,t,i)}function q_(n,e,t,i){n.removeEventListener(e,t,i)}const Vu=Symbol("_vei");function j_(n,e,t,i,r=null){const s=n[Vu]||(n[Vu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Y_(e);if(i){const c=s[e]=J_(i,r);X_(n,a,c,l)}else o&&(q_(n,a,o,l),s[e]=void 0)}}const Gu=/(?:Once|Passive|Capture)$/;function Y_(n){let e;if(Gu.test(n)){e={};let i;for(;i=n.match(Gu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):gr(n.slice(2)),e]}let ol=0;const K_=Promise.resolve(),Z_=()=>ol||(K_.then(()=>ol=0),ol=Date.now());function J_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;xn(Q_(i,t.value),e,5,[i])};return t.value=n,t.attached=Z_(),t}function Q_(n,e){if(Fe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Wu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,ev=(n,e,t,i,r,s,o,a,l)=>{const c=r==="svg";e==="class"?H_(n,i,c):e==="style"?V_(n,t,i):qs(e)?Sc(e)||j_(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):tv(n,e,i,c))?$_(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),W_(n,e,i,c))};function tv(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Wu(e)&&Ge(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Wu(e)&&At(t)?!1:e in n}const nv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},iv=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=r=>{if(!("key"in r))return;const s=gr(r.key);if(e.some(o=>o===s||nv[o]===s))return n(r)})},rv=Ct({patchProp:ev},I_);let al,$u=!1;function sv(){return al=$u?al:p_(rv),$u=!0,al}const ov=(...n)=>{const e=sv().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=lv(i);if(r)return t(r,!0,av(r))},e};function av(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function lv(n){return At(n)?document.querySelector(n):n}var cv=["link","meta","script","style","noscript","template"],uv=["title","base"],fv=([n,e,t])=>uv.includes(n)?n:cv.includes(n)?n==="meta"&&e.name?`${n}.${e.name}`:n==="template"&&e.id?`${n}.${e.id}`:JSON.stringify([n,Object.entries(e).map(([i,r])=>typeof r=="boolean"?r?[i,""]:null:[i,r]).filter(i=>i!=null).sort(([i],[r])=>i.localeCompare(r)),t]):null,hv=n=>{const e=new Set,t=[];return n.forEach(i=>{const r=fv(i);r&&!e.has(r)&&(e.add(r),t.push(i))}),t},so=n=>/^(https?:)?\/\//.test(n),rp=n=>/^[a-z][a-z0-9+.-]*:/.test(n),Bc=n=>Object.prototype.toString.call(n)==="[object Object]",dv=n=>{const[e,...t]=n.split(/(\?|#)/);if(!e||e.endsWith("/"))return n;let i=e.replace(/(^|\/)README.md$/i,"$1index.html");return i.endsWith(".md")?i=i.substring(0,i.length-3)+".html":i.endsWith(".html")||(i=i+".html"),i.endsWith("/index.html")&&(i=i.substring(0,i.length-10)),i+t.join("")},sp=n=>n[n.length-1]==="/"?n.slice(0,-1):n,op=n=>n[0]==="/"?n.slice(1):n,ap=(n,e)=>{const t=Object.keys(n).sort((i,r)=>{const s=r.split("/").length-i.split("/").length;return s!==0?s:r.length-i.length});for(const i of t)if(e.startsWith(i))return i;return"/"},On=n=>typeof n=="string";const pv="modulepreload",mv=function(n){return"/"+n},Xu={},Pt=function(e,t,i){let r=Promise.resolve();return t&&t.length>0&&(document.getElementsByTagName("link"),r=Promise.all(t.map(s=>{if(s=mv(s),s in Xu)return;Xu[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":pv,o||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),o)return new Promise((c,u)=>{l.addEventListener("load",c),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${s}`)))})}))),r.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},gv=JSON.parse("{}"),_v=Object.fromEntries([["/",{loader:()=>Pt(()=>import("./index.html-C9EkkjrL.js"),__vite__mapDeps([])),meta:{title:"Home"}}],["/blogs/blog1.html",{loader:()=>Pt(()=>import("./blog1.html-BZqF42Hw.js"),__vite__mapDeps([])),meta:{_blog:{title:"blog1",date:"2022-01-02T00:00:00.000Z",excerpt:`
<h2>Heading 2</h2>
<p>Here is the content.</p>
<h3>Heading 3</h3>
<p>Here is the content.</p>
`},title:"blog1"}}],["/blogs/blog2.html",{loader:()=>Pt(()=>import("./blog2.html-D7p4hl49.js"),__vite__mapDeps([])),meta:{_blog:{title:"blog2",date:"2022-01-02T00:00:00.000Z",excerpt:`
<h2>Heading 2</h2>
<p>Here is the content.</p>
<h3>Heading 3</h3>
<p>Here is the content.</p>
`},title:"blog2"}}],["/blogs/blog3.html",{loader:()=>Pt(()=>import("./blog3.html-Cl5EKaOQ.js"),__vite__mapDeps([])),meta:{_blog:{title:"blog3",date:"2022-05-02T00:00:00.000Z",excerpt:`
<h2>Heading 2</h2>
<p>Here is the content.</p>
<h3>Heading 3</h3>
<p>Here is the content.</p>
`},title:"blog3"}}],["/blogs/blog4.html",{loader:()=>Pt(()=>import("./blog4.html-BoA-IjG7.js"),__vite__mapDeps([])),meta:{_blog:{title:"blog4",date:"2022-12-02T00:00:00.000Z",excerpt:`
<h2>Heading 2</h2>
<p>Here is the content.</p>
<h3>Heading 3</h3>
<p>Here is the content.</p>
`},title:"blog4"}}],["/blogs/blog5.html",{loader:()=>Pt(()=>import("./blog5.html-KoQ1Jhad.js"),__vite__mapDeps([])),meta:{_blog:{title:"blog5",date:"2023-01-02T00:00:00.000Z",excerpt:`
<h2>Heading 2</h2>
<p>Here is the content.</p>
<h3>Heading 3</h3>
<p>Here is the content.</p>
`},title:"blog5"}}],["/blogs/blog6.html",{loader:()=>Pt(()=>import("./blog6.html-Bw2cpbE1.js"),__vite__mapDeps([])),meta:{_blog:{title:"blog6",date:"2023-04-02T00:00:00.000Z",excerpt:`
<h2>Heading 2</h2>
<p>Here is the content.</p>
<h3>Heading 3</h3>
<p>Here is the content.</p>
`},title:"blog6"}}],["/blogs/read1.html",{loader:()=>Pt(()=>import("./read1.html-B-vDiCuP.js"),__vite__mapDeps([])),meta:{_blog:{title:"read1",date:"2022-01-02T00:00:00.000Z",excerpt:`
<h2>Heading 2</h2>
<p>Here is the content.</p>
<h3>Heading 3</h3>
<p>Here is the content.</p>
`},title:"read1"}}],["/blogs/read2.html",{loader:()=>Pt(()=>import("./read2.html-CfnEcJoX.js"),__vite__mapDeps([])),meta:{_blog:{title:"read2",date:"2023-08-02T00:00:00.000Z",excerpt:`
<h2>Heading 2</h2>
<p>Here is the content.</p>
<h3>Heading 3</h3>
<p>Here is the content.</p>
`},title:"read2"}}],["/blogs/read3.html",{loader:()=>Pt(()=>import("./read3.html-Br1i1iQU.js"),__vite__mapDeps([])),meta:{_blog:{title:"read3",date:"2023-12-02T00:00:00.000Z",excerpt:`
<h2>Heading 2</h2>
<p>Here is the content.</p>
<h3>Heading 3</h3>
<p>Here is the content.</p>
`},title:"read3"}}],["/blogs/read4.html",{loader:()=>Pt(()=>import("./read4.html-DfY8LBAz.js"),__vite__mapDeps([])),meta:{_blog:{title:"read4",date:"2024-01-02T00:00:00.000Z",excerpt:`
<h2>Heading 2</h2>
<p>Here is the content.</p>
<h3>Heading 3</h3>
<p>Here is the content.</p>
`},title:"read4"}}],["/blogs/read5.html",{loader:()=>Pt(()=>import("./read5.html-7ALMqL3E.js"),__vite__mapDeps([])),meta:{_blog:{title:"read5",date:"2024-05-02T00:00:00.000Z",excerpt:`
<h2>Heading 2</h2>
<p>Here is the content.</p>
<h3>Heading 3</h3>
<p>Here is the content.</p>
`},title:"read5"}}],["/blogs/%E5%A6%82%E4%BD%95%E4%BB%8E0%E5%88%B01%E6%90%AD%E5%BB%BA%E9%83%A8%E7%BD%B2%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99.html",{loader:()=>Pt(()=>import("./如何从0到1搭建部署个人网站.html-Dr1VypZi.js"),__vite__mapDeps([])),meta:{_blog:{title:"如何从0到1搭建部署个人网站",date:"2024-06-02T00:00:00.000Z",excerpt:`
<h2>一、前言</h2>
<h3><a class="header-anchor" href="#_1-1-成品展示"><span>1.1 </span></a><a href="https://www.leslie.xin" target="_blank" rel="noopener noreferrer">成品展示</a></h3>
<h3>1.2 技术栈</h3>
<ul>
<li>前端: Vue3 + Typescript + Vite</li>
<li>后端: Koa2 + Typescript + MySQL</li>
</ul>
<h2>二、本地环境准备</h2>
<ul>
<li>node</li>
<li>mysql</li>
</ul>`},title:"如何从0到1搭建部署个人网站"}}],["/reads/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BAwebpack.html",{loader:()=>Pt(()=>import("./深入浅出webpack.html-D7L9EFgW.js"),__vite__mapDeps([])),meta:{_blog:{title:"深入浅出webpack",date:"2022-01-02T00:00:00.000Z",cover:"/reads/深入浅出webpack.jpg",excerpt:`
<h1>入门</h1>
<h2>模块化</h2>
<h3>CommonJS</h3>
<h5>写法：</h5>
<div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// export</span>
modules<span class="token punctuation">.</span>export <span class="token operator">=</span> moduleA

<span class="token comment">// import</span>
<span class="token keyword">const</span> moduleA <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./moduleA'</span><span class="token punctuation">)</span>
</code></pre></div>`},title:"深入浅出webpack"}}],["/404.html",{loader:()=>Pt(()=>import("./404.html-S6CwLq8V.js"),__vite__mapDeps([])),meta:{title:""}}],["/home/",{loader:()=>Pt(()=>import("./index.html-DotgP98t.js"),__vite__mapDeps([])),meta:{title:"Home"}}],["/blog/",{loader:()=>Pt(()=>import("./index.html-BJmGLZMY.js"),__vite__mapDeps([])),meta:{title:"Blog"}}],["/project/",{loader:()=>Pt(()=>import("./index.html-DiHSiIqI.js"),__vite__mapDeps([])),meta:{title:"Project"}}],["/read/",{loader:()=>Pt(()=>import("./index.html-aoyAvw7q.js"),__vite__mapDeps([])),meta:{title:"Read"}}]]);/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Br=typeof document<"u";function vv(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const lt=Object.assign;function ll(n,e){const t={};for(const i in e){const r=e[i];t[i]=Cn(r)?r.map(n):n(r)}return t}const Ds=()=>{},Cn=Array.isArray,lp=/#/g,xv=/&/g,yv=/\//g,Sv=/=/g,Mv=/\?/g,cp=/\+/g,Ev=/%5B/g,bv=/%5D/g,up=/%5E/g,Tv=/%60/g,fp=/%7B/g,Av=/%7C/g,hp=/%7D/g,wv=/%20/g;function Hc(n){return encodeURI(""+n).replace(Av,"|").replace(Ev,"[").replace(bv,"]")}function Rv(n){return Hc(n).replace(fp,"{").replace(hp,"}").replace(up,"^")}function ac(n){return Hc(n).replace(cp,"%2B").replace(wv,"+").replace(lp,"%23").replace(xv,"%26").replace(Tv,"`").replace(fp,"{").replace(hp,"}").replace(up,"^")}function Cv(n){return ac(n).replace(Sv,"%3D")}function Pv(n){return Hc(n).replace(lp,"%23").replace(Mv,"%3F")}function Lv(n){return n==null?"":Pv(n).replace(yv,"%2F")}function ks(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Dv=/\/$/,Iv=n=>n.replace(Dv,"");function cl(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Fv(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:ks(o)}}function Uv(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function qu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Nv(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Yr(e.matched[i],t.matched[r])&&dp(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Yr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function dp(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Ov(n[t],e[t]))return!1;return!0}function Ov(n,e){return Cn(n)?ju(n,e):Cn(e)?ju(e,n):n===e}function ju(n,e){return Cn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Fv(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}var Vs;(function(n){n.pop="pop",n.push="push"})(Vs||(Vs={}));var Is;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Is||(Is={}));function Bv(n){if(!n)if(Br){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Iv(n)}const Hv=/^[^#]+#/;function zv(n,e){return n.replace(Hv,"#")+e}function kv(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Na=()=>({left:window.scrollX,top:window.scrollY});function Vv(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=kv(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Yu(n,e){return(history.state?history.state.position-e:-1)+n}const lc=new Map;function Gv(n,e){lc.set(n,e)}function Wv(n){const e=lc.get(n);return lc.delete(n),e}let $v=()=>location.protocol+"//"+location.host;function pp(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),qu(l,"")}return qu(t,n)+i+r}function Xv(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const d=pp(n,location),g=t.value,_=e.value;let m=0;if(h){if(t.value=d,e.value=h,o&&o===g){o=null;return}m=_?h.position-_.position:0}else i(d);r.forEach(p=>{p(t.value,g,{delta:m,type:Vs.pop,direction:m?m>0?Is.forward:Is.back:Is.unknown})})};function l(){o=t.value}function c(h){r.push(h);const d=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(lt({},h.state,{scroll:Na()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Ku(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Na():null}}function qv(n){const{history:e,location:t}=window,i={value:pp(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:$v()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function o(l,c){const u=lt({},e.state,Ku(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=lt({},r.value,e.state,{forward:l,scroll:Na()});s(u.current,u,!0);const f=lt({},Ku(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function jv(n){n=Bv(n);const e=qv(n),t=Xv(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=lt({location:"",base:n,go:i,createHref:zv.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Yv(n){return typeof n=="string"||n&&typeof n=="object"}function mp(n){return typeof n=="string"||typeof n=="symbol"}const Jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},gp=Symbol("");var Zu;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Zu||(Zu={}));function Kr(n,e){return lt(new Error,{type:n,[gp]:!0},e)}function $n(n,e){return n instanceof Error&&gp in n&&(e==null||!!(n.type&e))}const Ju="[^/]+?",Kv={sensitive:!1,strict:!1,start:!0,end:!0},Zv=/[.+*?^${}()[\]/\\]/g;function Jv(n,e){const t=lt({},Kv,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(Zv,"\\$&"),d+=40;else if(h.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=h;s.push({name:g,repeatable:_,optional:m});const S=p||Ju;if(S!==Ju){d+=10;try{new RegExp(`(${S})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${S}): `+y.message)}}let v=_?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;f||(v=m&&c.length<2?`(?:/${v})`:"/"+v),m&&(v+="?"),r+=v,d+=20,m&&(d+=-8),_&&(d+=-20),S===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",g=s[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:_,optional:m}=d,p=g in c?c[g]:"";if(Cn(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const S=Cn(p)?p.join("/"):p;if(!S)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=S}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function Qv(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function e0(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=Qv(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Qu(i))return 1;if(Qu(r))return-1}return r.length-i.length}function Qu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const t0={type:0,value:""},n0=/[a-zA-Z0-9_]/;function i0(n){if(!n)return[[]];if(n==="/")return[[t0]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:n0.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function r0(n,e,t){const i=Jv(i0(n.path),t),r=lt(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function s0(n,e){const t=[],i=new Map;e=nf({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,h){const d=!h,g=o0(u);g.aliasOf=h&&h.record;const _=nf(e,u),m=[g];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const y of v)m.push(lt({},g,{components:h?h.record.components:g.components,path:y,aliasOf:h?h.record:g}))}let p,S;for(const v of m){const{path:y}=v;if(f&&y[0]!=="/"){const U=f.record.path,b=U[U.length-1]==="/"?"":"/";v.path=f.record.path+(y&&b+y)}if(p=r0(v,f,_),h?h.alias.push(p):(S=S||p,S!==p&&S.alias.push(p),d&&u.name&&!tf(p)&&o(u.name)),g.children){const U=g.children;for(let b=0;b<U.length;b++)s(U[b],p,h&&h.children[b])}h=h||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&l(p)}return S?()=>{o(S)}:Ds}function o(u){if(mp(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let f=0;for(;f<t.length&&e0(u,t[f])>=0&&(u.record.path!==t[f].record.path||!_p(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!tf(u)&&i.set(u.record.name,u)}function c(u,f){let h,d={},g,_;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw Kr(1,{location:u});_=h.record.name,d=lt(ef(f.params,h.keys.filter(S=>!S.optional).concat(h.parent?h.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),u.params&&ef(u.params,h.keys.map(S=>S.name))),g=h.stringify(d)}else if(u.path!=null)g=u.path,h=t.find(S=>S.re.test(g)),h&&(d=h.parse(g),_=h.record.name);else{if(h=f.name?i.get(f.name):t.find(S=>S.re.test(f.path)),!h)throw Kr(1,{location:u,currentLocation:f});_=h.record.name,d=lt({},f.params,u.params),g=h.stringify(d)}const m=[];let p=h;for(;p;)m.unshift(p.record),p=p.parent;return{name:_,path:g,params:d,matched:m,meta:l0(m)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function ef(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function o0(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:a0(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function a0(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function tf(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function l0(n){return n.reduce((e,t)=>lt(e,t.meta),{})}function nf(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function _p(n,e){return e.children.some(t=>t===n||_p(n,t))}function c0(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(cp," "),o=s.indexOf("="),a=ks(o<0?s:s.slice(0,o)),l=o<0?null:ks(s.slice(o+1));if(a in e){let c=e[a];Cn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function rf(n){let e="";for(let t in n){const i=n[t];if(t=Cv(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Cn(i)?i.map(s=>s&&ac(s)):[i&&ac(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function u0(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Cn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const f0=Symbol(""),sf=Symbol(""),Oa=Symbol(""),zc=Symbol(""),cc=Symbol("");function hs(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Mi(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(Kr(4,{from:t,to:e})):h instanceof Error?l(h):Yv(h)?l(Kr(2,{from:e,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function ul(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(h0(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Mi(u,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=vv(u)?u.default:u;o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&Mi(d,t,i,o,a,r)()}))}}return s}function h0(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function of(n){const e=en(Oa),t=en(zc),i=xe(()=>{const l=Ue(n.to);return e.resolve(l)}),r=xe(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(Yr.bind(null,u));if(h>-1)return h;const d=af(l[c-2]);return c>1&&af(u)===d&&f[f.length-1].path!==d?f.findIndex(Yr.bind(null,l[c-2])):h}),s=xe(()=>r.value>-1&&g0(t.params,i.value.params)),o=xe(()=>r.value>-1&&r.value===t.matched.length-1&&dp(t.params,i.value.params));function a(l={}){return m0(l)?e[Ue(n.replace)?"replace":"push"](Ue(n.to)).catch(Ds):Promise.resolve()}return{route:i,href:xe(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const d0=at({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:of,setup(n,{slots:e}){const t=Zs(of(n)),{options:i}=en(Oa),r=xe(()=>({[lf(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[lf(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:dt("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),p0=d0;function m0(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function g0(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Cn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function af(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const lf=(n,e,t)=>n??e??t,_0=at({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=en(cc),r=xe(()=>n.route||i.value),s=en(sf,0),o=xe(()=>{let c=Ue(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=xe(()=>r.value.matched[o.value]);fr(sf,xe(()=>o.value+1)),fr(f0,a),fr(cc,r);const l=rt();return Ht(()=>[l.value,a.value,n.name],([c,u,f],[h,d,g])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Yr(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return cf(t.default,{Component:h,route:c});const d=f.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=dt(h,lt({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return cf(t.default,{Component:m,route:c})||m}}});function cf(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const v0=_0;function x0(n){const e=s0(n.routes,n),t=n.parseQuery||c0,i=n.stringifyQuery||rf,r=n.history,s=hs(),o=hs(),a=hs(),l=Bi(Jn);let c=Jn;Br&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ll.bind(null,W=>""+W),f=ll.bind(null,Lv),h=ll.bind(null,ks);function d(W,ue){let le,F;return mp(W)?(le=e.getRecordMatcher(W),F=ue):F=W,e.addRoute(F,le)}function g(W){const ue=e.getRecordMatcher(W);ue&&e.removeRoute(ue)}function _(){return e.getRoutes().map(W=>W.record)}function m(W){return!!e.getRecordMatcher(W)}function p(W,ue){if(ue=lt({},ue||l.value),typeof W=="string"){const P=cl(t,W,ue.path),X=e.resolve({path:P.path},ue),Z=r.createHref(P.fullPath);return lt(P,X,{params:h(X.params),hash:ks(P.hash),redirectedFrom:void 0,href:Z})}let le;if(W.path!=null)le=lt({},W,{path:cl(t,W.path,ue.path).path});else{const P=lt({},W.params);for(const X in P)P[X]==null&&delete P[X];le=lt({},W,{params:f(P)}),ue.params=f(ue.params)}const F=e.resolve(le,ue),Ae=W.hash||"";F.params=u(h(F.params));const ve=Uv(i,lt({},W,{hash:Rv(Ae),path:F.path})),C=r.createHref(ve);return lt({fullPath:ve,hash:Ae,query:i===rf?u0(W.query):W.query||{}},F,{redirectedFrom:void 0,href:C})}function S(W){return typeof W=="string"?cl(t,W,l.value.path):lt({},W)}function v(W,ue){if(c!==W)return Kr(8,{from:ue,to:W})}function y(W){return A(W)}function U(W){return y(lt(S(W),{replace:!0}))}function b(W){const ue=W.matched[W.matched.length-1];if(ue&&ue.redirect){const{redirect:le}=ue;let F=typeof le=="function"?le(W):le;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=S(F):{path:F},F.params={}),lt({query:W.query,hash:W.hash,params:F.path!=null?{}:W.params},F)}}function A(W,ue){const le=c=p(W),F=l.value,Ae=W.state,ve=W.force,C=W.replace===!0,P=b(le);if(P)return A(lt(S(P),{state:typeof P=="object"?lt({},Ae,P.state):Ae,force:ve,replace:C}),ue||le);const X=le;X.redirectedFrom=ue;let Z;return!ve&&Nv(i,F,le)&&(Z=Kr(16,{to:X,from:F}),ge(F,F,!0,!1)),(Z?Promise.resolve(Z):x(X,F)).catch(K=>$n(K)?$n(K,2)?K:te(K):L(K,X,F)).then(K=>{if(K){if($n(K,2))return A(lt({replace:C},S(K.to),{state:typeof K.to=="object"?lt({},Ae,K.to.state):Ae,force:ve}),ue||X)}else K=O(X,F,!0,C,Ae);return N(X,F,K),K})}function T(W,ue){const le=v(W,ue);return le?Promise.reject(le):Promise.resolve()}function E(W){const ue=J.values().next().value;return ue&&typeof ue.runWithContext=="function"?ue.runWithContext(W):W()}function x(W,ue){let le;const[F,Ae,ve]=y0(W,ue);le=ul(F.reverse(),"beforeRouteLeave",W,ue);for(const P of F)P.leaveGuards.forEach(X=>{le.push(Mi(X,W,ue))});const C=T.bind(null,W,ue);return le.push(C),_e(le).then(()=>{le=[];for(const P of s.list())le.push(Mi(P,W,ue));return le.push(C),_e(le)}).then(()=>{le=ul(Ae,"beforeRouteUpdate",W,ue);for(const P of Ae)P.updateGuards.forEach(X=>{le.push(Mi(X,W,ue))});return le.push(C),_e(le)}).then(()=>{le=[];for(const P of ve)if(P.beforeEnter)if(Cn(P.beforeEnter))for(const X of P.beforeEnter)le.push(Mi(X,W,ue));else le.push(Mi(P.beforeEnter,W,ue));return le.push(C),_e(le)}).then(()=>(W.matched.forEach(P=>P.enterCallbacks={}),le=ul(ve,"beforeRouteEnter",W,ue,E),le.push(C),_e(le))).then(()=>{le=[];for(const P of o.list())le.push(Mi(P,W,ue));return le.push(C),_e(le)}).catch(P=>$n(P,8)?P:Promise.reject(P))}function N(W,ue,le){a.list().forEach(F=>E(()=>F(W,ue,le)))}function O(W,ue,le,F,Ae){const ve=v(W,ue);if(ve)return ve;const C=ue===Jn,P=Br?history.state:{};le&&(F||C?r.replace(W.fullPath,lt({scroll:C&&P&&P.scroll},Ae)):r.push(W.fullPath,Ae)),l.value=W,ge(W,ue,le,C),te()}let D;function z(){D||(D=r.listen((W,ue,le)=>{if(!de.listening)return;const F=p(W),Ae=b(F);if(Ae){A(lt(Ae,{replace:!0}),F).catch(Ds);return}c=F;const ve=l.value;Br&&Gv(Yu(ve.fullPath,le.delta),Na()),x(F,ve).catch(C=>$n(C,12)?C:$n(C,2)?(A(C.to,F).then(P=>{$n(P,20)&&!le.delta&&le.type===Vs.pop&&r.go(-1,!1)}).catch(Ds),Promise.reject()):(le.delta&&r.go(-le.delta,!1),L(C,F,ve))).then(C=>{C=C||O(F,ve,!1),C&&(le.delta&&!$n(C,8)?r.go(-le.delta,!1):le.type===Vs.pop&&$n(C,20)&&r.go(-1,!1)),N(F,ve,C)}).catch(Ds)}))}let H=hs(),I=hs(),$;function L(W,ue,le){te(W);const F=I.list();return F.length?F.forEach(Ae=>Ae(W,ue,le)):console.error(W),Promise.reject(W)}function ee(){return $&&l.value!==Jn?Promise.resolve():new Promise((W,ue)=>{H.add([W,ue])})}function te(W){return $||($=!W,z(),H.list().forEach(([ue,le])=>W?le(W):ue()),H.reset()),W}function ge(W,ue,le,F){const{scrollBehavior:Ae}=n;if(!Br||!Ae)return Promise.resolve();const ve=!le&&Wv(Yu(W.fullPath,0))||(F||!le)&&history.state&&history.state.scroll||null;return is().then(()=>Ae(W,ue,ve)).then(C=>C&&Vv(C)).catch(C=>L(C,W,ue))}const Me=W=>r.go(W);let De;const J=new Set,de={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,hasRoute:m,getRoutes:_,resolve:p,options:n,push:y,replace:U,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:I.add,isReady:ee,install(W){const ue=this;W.component("RouterLink",p0),W.component("RouterView",v0),W.config.globalProperties.$router=ue,Object.defineProperty(W.config.globalProperties,"$route",{enumerable:!0,get:()=>Ue(l)}),Br&&!De&&l.value===Jn&&(De=!0,y(r.location).catch(Ae=>{}));const le={};for(const Ae in Jn)Object.defineProperty(le,Ae,{get:()=>l.value[Ae],enumerable:!0});W.provide(Oa,ue),W.provide(zc,vd(le)),W.provide(cc,l);const F=W.unmount;J.add(W),W.unmount=function(){J.delete(W),J.size<1&&(c=Jn,D&&D(),D=null,l.value=Jn,De=!1,$=!1),F()}}};function _e(W){return W.reduce((ue,le)=>ue.then(()=>E(le)),Promise.resolve())}return de}function y0(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>Yr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Yr(c,l))||r.push(l))}return[t,i,r]}function rs(){return en(Oa)}function Hi(){return en(zc)}var kc=Symbol(""),Vn=()=>{const n=en(kc);if(!n)throw new Error("useClientData() is called without provider.");return n},S0=()=>Vn().pageComponent,Wr=()=>Vn().pageData,Rn=()=>Vn().pageFrontmatter,M0=()=>Vn().pageHead,E0=()=>Vn().pageLang,b0=()=>Vn().pageLayout,ss=()=>Vn().routeLocale,T0=()=>Vn().routes,vp=()=>Vn().siteData,Vc=()=>Vn().siteLocaleData,A0=Symbol(""),uc=Bi(gv),Gs=Bi(_v),xp=n=>{const e=dv(n);if(Gs.value[e])return e;const t=encodeURI(e);return Gs.value[t]?t:uc.value[e]||uc.value[t]||e},Zr=n=>{const e=xp(n),t=Gs.value[e]??{...Gs.value["/404.html"],notFound:!0};return{path:e,notFound:!1,...t}},Gc=at({name:"ClientOnly",setup(n,e){const t=rt(!1);return Yt(()=>{t.value=!0}),()=>{var i,r;return t.value?(r=(i=e.slots).default)==null?void 0:r.call(i):null}}}),w0=at({name:"Content",props:{path:{type:String,required:!1,default:""}},setup(n){const e=S0(),t=xe(()=>{if(!n.path)return e.value;const i=Zr(n.path);return zg(()=>i.loader().then(({comp:r})=>r))});return()=>dt(t.value)}}),oi=(n={})=>n,Fa=n=>so(n)?n:`/${op(n)}`,R0=n=>{if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget){const e=n.currentTarget.getAttribute("target");if(e!=null&&e.match(/\b_blank\b/i))return}return n.preventDefault(),!0}},oo=({active:n=!1,activeClass:e="route-link-active",to:t,...i},{slots:r})=>{var l;const s=rs(),o=xp(t),a=o.startsWith("#")||o.startsWith("?")?o:Fa(o);return dt("a",{...i,class:["route-link",{[e]:n}],href:a,onClick:(c={})=>{R0(c)?s.push(t).catch():Promise.resolve()}},(l=r.default)==null?void 0:l.call(r))};oo.displayName="RouteLink";oo.props={active:Boolean,activeClass:String,to:String};var C0="Layout",P0="en-US",Xi=Zs({resolveLayouts:n=>n.reduce((e,t)=>({...e,...t.layouts}),{}),resolvePageHead:(n,e,t)=>{const i=On(e.description)?e.description:t.description,r=[...Array.isArray(e.head)?e.head:[],...t.head,["title",{},n],["meta",{name:"description",content:i}]];return hv(r)},resolvePageHeadTitle:(n,e)=>[n.title,e.title].filter(t=>!!t).join(" | "),resolvePageLang:(n,e)=>n.lang||e.lang||P0,resolvePageLayout:(n,e)=>{const t=On(n.frontmatter.layout)?n.frontmatter.layout:C0;if(!e[t])throw new Error(`[vuepress] Cannot resolve layout: ${t}`);return e[t]},resolveRouteLocale:(n,e)=>ap(n,e),resolveSiteLocaleData:(n,e)=>{var t;return{...n,...n.locales[e],head:[...((t=n.locales[e])==null?void 0:t.head)??[],...n.head??[]]}}});function Ba(n){return od()?(Xm(n),!0):!1}function zn(n){return typeof n=="function"?n():Ue(n)}const Wc=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const L0=Object.prototype.toString,D0=n=>L0.call(n)==="[object Object]",fc=()=>{};function yp(n,e){function t(...i){return new Promise((r,s)=>{Promise.resolve(n(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(r).catch(s)})}return t}const Sp=n=>n();function I0(n,e={}){let t,i,r=fc;const s=a=>{clearTimeout(a),r(),r=fc};return a=>{const l=zn(n),c=zn(e.maxWait);return t&&s(t),l<=0||c!==void 0&&c<=0?(i&&(s(i),i=null),Promise.resolve(a())):new Promise((u,f)=>{r=e.rejectOnCancel?f:u,c&&!i&&(i=setTimeout(()=>{t&&s(t),i=null,u(a())},c)),t=setTimeout(()=>{i&&s(i),i=null,u(a())},l)})}}function U0(n=Sp){const e=rt(!0);function t(){e.value=!1}function i(){e.value=!0}const r=(...s)=>{e.value&&n(...s)};return{isActive:ns(e),pause:t,resume:i,eventFilter:r}}function N0(n){let e;function t(){return e||(e=n()),e}return t.reset=async()=>{const i=e;e=void 0,i&&await i},t}function O0(n){return to()}function F0(n,e=200,t={}){return yp(I0(e,t),n)}function B0(n,e,t={}){const{eventFilter:i=Sp,...r}=t;return Ht(n,yp(i,e),r)}function H0(n,e,t={}){const{eventFilter:i,...r}=t,{eventFilter:s,pause:o,resume:a,isActive:l}=U0(i);return{stop:B0(n,e,{...r,eventFilter:s}),pause:o,resume:a,isActive:l}}function $c(n,e=!0,t){O0()?Yt(n,t):e?n():is(n)}function z0(n,e,t={}){const{immediate:i=!0}=t,r=rt(!1);let s=null;function o(){s&&(clearTimeout(s),s=null)}function a(){r.value=!1,o()}function l(...c){o(),r.value=!0,s=setTimeout(()=>{r.value=!1,s=null,n(...c)},zn(e))}return i&&(r.value=!0,Wc&&l()),Ba(a),{isPending:ns(r),start:l,stop:a}}function k0(n=!1,e={}){const{truthyValue:t=!0,falsyValue:i=!1}=e,r=jt(n),s=rt(n);function o(a){if(arguments.length)return s.value=a,s.value;{const l=zn(t);return s.value=s.value===l?zn(i):l,s.value}}return r?o:[s,o]}function sr(n){var e;const t=zn(n);return(e=t==null?void 0:t.$el)!=null?e:t}const Di=Wc?window:void 0,Mp=Wc?window.navigator:void 0;function Pn(...n){let e,t,i,r;if(typeof n[0]=="string"||Array.isArray(n[0])?([t,i,r]=n,e=Di):[e,t,i,r]=n,!e)return fc;Array.isArray(t)||(t=[t]),Array.isArray(i)||(i=[i]);const s=[],o=()=>{s.forEach(u=>u()),s.length=0},a=(u,f,h,d)=>(u.addEventListener(f,h,d),()=>u.removeEventListener(f,h,d)),l=Ht(()=>[sr(e),zn(r)],([u,f])=>{if(o(),!u)return;const h=D0(f)?{...f}:f;s.push(...t.flatMap(d=>i.map(g=>a(u,d,g,h))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return Ba(c),c}function V0(){const n=rt(!1),e=to();return e&&Yt(()=>{n.value=!0},e),n}function Ha(n){const e=V0();return xe(()=>(e.value,!!n()))}function Ep(n,e={}){const{window:t=Di}=e,i=Ha(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let r;const s=rt(!1),o=c=>{s.value=c.matches},a=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",o):r.removeListener(o))},l=Ng(()=>{i.value&&(a(),r=t.matchMedia(zn(n)),"addEventListener"in r?r.addEventListener("change",o):r.addListener(o),s.value=r.matches)});return Ba(()=>{l(),a(),r=void 0}),s}function uf(n,e={}){const{controls:t=!1,navigator:i=Mp}=e,r=Ha(()=>i&&"permissions"in i);let s;const o=typeof n=="string"?{name:n}:n,a=rt(),l=()=>{s&&(a.value=s.state)},c=N0(async()=>{if(r.value){if(!s)try{s=await i.permissions.query(o),Pn(s,"change",l),l()}catch{a.value="prompt"}return s}});return c(),t?{state:a,isSupported:r,query:c}:a}function G0(n={}){const{navigator:e=Mp,read:t=!1,source:i,copiedDuring:r=1500,legacy:s=!1}=n,o=Ha(()=>e&&"clipboard"in e),a=uf("clipboard-read"),l=uf("clipboard-write"),c=xe(()=>o.value||s),u=rt(""),f=rt(!1),h=z0(()=>f.value=!1,r);function d(){o.value&&p(a.value)?e.clipboard.readText().then(S=>{u.value=S}):u.value=m()}c.value&&t&&Pn(["copy","cut"],d);async function g(S=zn(i)){c.value&&S!=null&&(o.value&&p(l.value)?await e.clipboard.writeText(S):_(S),u.value=S,f.value=!0,h.start())}function _(S){const v=document.createElement("textarea");v.value=S??"",v.style.position="absolute",v.style.opacity="0",document.body.appendChild(v),v.select(),document.execCommand("copy"),v.remove()}function m(){var S,v,y;return(y=(v=(S=document==null?void 0:document.getSelection)==null?void 0:S.call(document))==null?void 0:v.toString())!=null?y:""}function p(S){return S==="granted"||S==="prompt"}return{isSupported:c,text:u,copied:f,copy:g}}const To=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ao="__vueuse_ssr_handlers__",W0=$0();function $0(){return Ao in To||(To[Ao]=To[Ao]||{}),To[Ao]}function X0(n,e){return W0[n]||e}function q0(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}const j0={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},ff="vueuse-storage";function bp(n,e,t,i={}){var r;const{flush:s="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:f=Di,eventFilter:h,onError:d=x=>{console.error(x)},initOnMounted:g}=i,_=(u?Bi:rt)(typeof e=="function"?e():e);if(!t)try{t=X0("getDefaultStorage",()=>{var x;return(x=Di)==null?void 0:x.localStorage})()}catch(x){d(x)}if(!t)return _;const m=zn(e),p=q0(m),S=(r=i.serializer)!=null?r:j0[p],{pause:v,resume:y}=H0(_,()=>b(_.value),{flush:s,deep:o,eventFilter:h});f&&a&&$c(()=>{Pn(f,"storage",T),Pn(f,ff,E),g&&T()}),g||T();function U(x,N){f&&f.dispatchEvent(new CustomEvent(ff,{detail:{key:n,oldValue:x,newValue:N,storageArea:t}}))}function b(x){try{const N=t.getItem(n);if(x==null)U(N,null),t.removeItem(n);else{const O=S.write(x);N!==O&&(t.setItem(n,O),U(N,O))}}catch(N){d(N)}}function A(x){const N=x?x.newValue:t.getItem(n);if(N==null)return l&&m!=null&&t.setItem(n,S.write(m)),m;if(!x&&c){const O=S.read(N);return typeof c=="function"?c(O,m):p==="object"&&!Array.isArray(O)?{...m,...O}:O}else return typeof N!="string"?N:S.read(N)}function T(x){if(!(x&&x.storageArea!==t)){if(x&&x.key==null){_.value=m;return}if(!(x&&x.key!==n)){v();try{(x==null?void 0:x.newValue)!==S.write(_.value)&&(_.value=A(x))}catch(N){d(N)}finally{x?is(y):y()}}}}function E(x){T(x.detail)}return _}function Y0(n){return Ep("(prefers-color-scheme: dark)",n)}function K0(n,e,t={}){const{window:i=Di,...r}=t;let s;const o=Ha(()=>i&&"ResizeObserver"in i),a=()=>{s&&(s.disconnect(),s=void 0)},l=xe(()=>Array.isArray(n)?n.map(f=>sr(f)):[sr(n)]),c=Ht(l,f=>{if(a(),o.value&&i){s=new ResizeObserver(e);for(const h of f)h&&s.observe(h,r)}},{immediate:!0,flush:"post"}),u=()=>{a(),c()};return Ba(u),{isSupported:o,stop:u}}function Z0(n,e={width:0,height:0},t={}){const{window:i=Di,box:r="content-box"}=t,s=xe(()=>{var f,h;return(h=(f=sr(n))==null?void 0:f.namespaceURI)==null?void 0:h.includes("svg")}),o=rt(e.width),a=rt(e.height),{stop:l}=K0(n,([f])=>{const h=r==="border-box"?f.borderBoxSize:r==="content-box"?f.contentBoxSize:f.devicePixelContentBoxSize;if(i&&s.value){const d=sr(n);if(d){const g=i.getComputedStyle(d);o.value=Number.parseFloat(g.width),a.value=Number.parseFloat(g.height)}}else if(h){const d=Array.isArray(h)?h:[h];o.value=d.reduce((g,{inlineSize:_})=>g+_,0),a.value=d.reduce((g,{blockSize:_})=>g+_,0)}else o.value=f.contentRect.width,a.value=f.contentRect.height},t);$c(()=>{const f=sr(n);f&&(o.value="offsetWidth"in f?f.offsetWidth:e.width,a.value="offsetHeight"in f?f.offsetHeight:e.height)});const c=Ht(()=>sr(n),f=>{o.value=f?e.width:0,a.value=f?e.height:0});function u(){l(),c()}return{width:o,height:a,stop:u}}function J0(n={}){const{window:e=Di,behavior:t="auto"}=n;if(!e)return{x:rt(0),y:rt(0)};const i=rt(e.scrollX),r=rt(e.scrollY),s=xe({get(){return i.value},set(a){scrollTo({left:a,behavior:t})}}),o=xe({get(){return r.value},set(a){scrollTo({top:a,behavior:t})}});return Pn(e,"scroll",()=>{i.value=e.scrollX,r.value=e.scrollY},{capture:!1,passive:!0}),{x:s,y:o}}function Q0(n={}){const{window:e=Di,initialWidth:t=Number.POSITIVE_INFINITY,initialHeight:i=Number.POSITIVE_INFINITY,listenOrientation:r=!0,includeScrollbar:s=!0}=n,o=rt(t),a=rt(i),l=()=>{e&&(s?(o.value=e.innerWidth,a.value=e.innerHeight):(o.value=e.document.documentElement.clientWidth,a.value=e.document.documentElement.clientHeight))};if(l(),$c(l),Pn("resize",l,{passive:!0}),r){const c=Ep("(orientation: portrait)");Ht(c,()=>l())}return{width:o,height:a}}const hf=async(n,e)=>{const{path:t,query:i}=n.currentRoute.value,{scrollBehavior:r}=n.options;n.options.scrollBehavior=void 0,await n.replace({path:t,query:i,hash:e}),n.options.scrollBehavior=r},ex=({headerLinkSelector:n,headerAnchorSelector:e,delay:t,offset:i=5})=>{const r=rs();Pn("scroll",F0(()=>{var g,_;const o=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(o-0)<i){hf(r,"");return}const l=window.innerHeight+o,c=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),u=Math.abs(c-l)<i,f=Array.from(document.querySelectorAll(n)),d=Array.from(document.querySelectorAll(e)).filter(m=>f.some(p=>p.hash===m.hash));for(let m=0;m<d.length;m++){const p=d[m],S=d[m+1],v=o>=(((g=p.parentElement)==null?void 0:g.offsetTop)??0)-i,y=!S||o<(((_=S.parentElement)==null?void 0:_.offsetTop)??0)-i;if(!(v&&y))continue;const b=decodeURIComponent(r.currentRoute.value.hash),A=decodeURIComponent(p.hash);if(b===A)return;if(u){for(let T=m+1;T<d.length;T++)if(b===decodeURIComponent(d[T].hash))return}hf(r,A);return}},t))},tx="a.sidebar-item",nx=".header-anchor",ix=300,rx=5,sx=oi({setup(){ex({headerLinkSelector:tx,headerAnchorSelector:nx,delay:ix,offset:rx})}}),Tp=n=>{const e=ss();return xe(()=>n[e.value]??{})},ox=()=>{const n=T0();return xe(()=>Object.keys(n.value))},fl=(n,e)=>{var i;const t=(i=to())==null?void 0:i.appContext.components;return t?n in t||yn(n)in t||Ys(yn(n))in t:!1},ax=(n,e)=>On(n)&&n.startsWith(e),Ap=n=>ax(n,"/"),lx="http://.",df=(n,e)=>{if(Ap(n)||typeof e!="string")return Zr(n);const t=e.slice(0,e.lastIndexOf("/"));return Zr(new URL(`${t}/${encodeURI(n)}`,lx).pathname)},wp=n=>new Promise(e=>setTimeout(e,n));var cx={"/":{backToTop:"Back to top"}};const ux=at({name:"BackToTop",setup(){const n=Rn(),e=Tp(cx),t=Bi(),{height:i}=Z0(t),{height:r}=Q0(),{y:s}=J0(),o=xe(()=>n.value.backToTop!==!1&&s.value>100),a=xe(()=>s.value/(i.value-r.value)*100);return Yt(()=>{t.value=document.body}),()=>dt(ro,{name:"back-to-top"},()=>o.value?dt("button",{type:"button",class:"vp-back-to-top-button","aria-label":e.value.backToTop,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[dt("span",{class:"vp-scroll-progress",role:"progressbar","aria-labelledby":"loadinglabel","aria-valuenow":a.value},dt("svg",dt("circle",{cx:"26",cy:"26",r:"24",fill:"none",stroke:"currentColor","stroke-width":"4","stroke-dasharray":`${Math.PI*a.value*.48} ${Math.PI*(100-a.value)*.48}`}))),dt("div",{class:"back-to-top-icon"})]):null)}}),fx=oi({rootComponents:[ux]}),hx=/\b(?:Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/i,dx=()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator&&hx.test(navigator.userAgent),px=({delay:n=500,duration:e=2e3,locales:t,selector:i,showInMobile:r})=>{const{copy:s,copied:o}=G0({legacy:!0,copiedDuring:e}),a=Tp(t),l=Wr(),c=h=>{if(!h.hasAttribute("copy-code-registered")){const d=document.createElement("button");d.type="button",d.classList.add("vp-copy-code-button"),d.innerHTML='<div class="vp-copy-icon" />',d.setAttribute("aria-label",a.value.copy),d.setAttribute("data-copied",a.value.copied),h.parentElement&&h.parentElement.insertBefore(d,h),h.setAttribute("copy-code-registered","")}},u=()=>{is().then(()=>wp(n)).then(()=>{i.forEach(h=>{document.querySelectorAll(h).forEach(c)})})},f=(h,d,g)=>{let{innerText:_=""}=d;/language-(shellscript|shell|bash|sh|zsh)/.test(h.classList.toString())&&(_=_.replace(/^ *(\$|>) /gm,"")),s(_).then(()=>{g.classList.add("copied"),Ht(o,()=>{g.classList.remove("copied"),g.blur()},{once:!0})})};Yt(()=>{const h=!dx()||r;h&&u(),Pn("click",d=>{const g=d.target;if(g.matches('div[class*="language-"] > button.copy')){const _=g.parentElement,m=g.nextElementSibling;m&&f(_,m,g)}else if(g.matches('div[class*="language-"] div.vp-copy-icon')){const _=g.parentElement,m=_.parentElement,p=_.nextElementSibling;p&&f(m,p,_)}}),Ht(()=>l.value.path,()=>{h&&u()})})};var mx={"/":{copy:"Copy code",copied:"Copied"}},gx=['.theme-default-content div[class*="language-"] pre'];const _x=500,vx=2e3,xx=mx,yx=gx,Sx=!1,Mx=oi({setup:()=>{px({selector:yx,locales:xx,duration:vx,delay:_x,showInMobile:Sx})}}),Ex=dt("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[dt("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),dt("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),bx=at({name:"ExternalLinkIcon",props:{locales:{type:Object,default:()=>({})}},setup(n){const e=ss(),t=xe(()=>n.locales[e.value]??{openInNewWindow:"open in new window"});return()=>dt("span",[Ex,dt("span",{class:"external-link-icon-sr-only"},t.value.openInNewWindow)])}});var Tx={"/":{openInNewWindow:"open in new window"}};const Ax=Tx,wx=oi({enhance({app:n}){n.component("ExternalLinkIcon",dt(bx,{locales:Ax}))}});/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */var Qi=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},wo=function(e){return e.tagName==="IMG"},Rx=function(e){return NodeList.prototype.isPrototypeOf(e)},sa=function(e){return e&&e.nodeType===1},pf=function(e){var t=e.currentSrc||e.src;return t.substr(-4).toLowerCase()===".svg"},mf=function(e){try{return Array.isArray(e)?e.filter(wo):Rx(e)?[].slice.call(e).filter(wo):sa(e)?[e].filter(wo):typeof e=="string"?[].slice.call(document.querySelectorAll(e)).filter(wo):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},Cx=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.background=e,t},Px=function(e){var t=e.getBoundingClientRect(),i=t.top,r=t.left,s=t.width,o=t.height,a=e.cloneNode(),l=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,c=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return a.removeAttribute("id"),a.style.position="absolute",a.style.top=i+l+"px",a.style.left=r+c+"px",a.style.width=s+"px",a.style.height=o+"px",a.style.transform="",a},vr=function(e,t){var i=Qi({bubbles:!1,cancelable:!1,detail:void 0},t);if(typeof window.CustomEvent=="function")return new CustomEvent(e,i);var r=document.createEvent("CustomEvent");return r.initCustomEvent(e,i.bubbles,i.cancelable,i.detail),r},Lx=function n(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=window.Promise||function(O){function D(){}O(D,D)},r=function(O){var D=O.target;if(D===E){g();return}v.indexOf(D)!==-1&&_({target:D})},s=function(){if(!(U||!T.original)){var O=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(b-O)>A.scrollOffset&&setTimeout(g,150)}},o=function(O){var D=O.key||O.keyCode;(D==="Escape"||D==="Esc"||D===27)&&g()},a=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},D=O;if(O.background&&(E.style.background=O.background),O.container&&O.container instanceof Object&&(D.container=Qi({},A.container,O.container)),O.template){var z=sa(O.template)?O.template:document.querySelector(O.template);D.template=z}return A=Qi({},A,D),v.forEach(function(H){H.dispatchEvent(vr("medium-zoom:update",{detail:{zoom:x}}))}),x},l=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return n(Qi({},A,O))},c=function(){for(var O=arguments.length,D=Array(O),z=0;z<O;z++)D[z]=arguments[z];var H=D.reduce(function(I,$){return[].concat(I,mf($))},[]);return H.filter(function(I){return v.indexOf(I)===-1}).forEach(function(I){v.push(I),I.classList.add("medium-zoom-image")}),y.forEach(function(I){var $=I.type,L=I.listener,ee=I.options;H.forEach(function(te){te.addEventListener($,L,ee)})}),x},u=function(){for(var O=arguments.length,D=Array(O),z=0;z<O;z++)D[z]=arguments[z];T.zoomed&&g();var H=D.length>0?D.reduce(function(I,$){return[].concat(I,mf($))},[]):v;return H.forEach(function(I){I.classList.remove("medium-zoom-image"),I.dispatchEvent(vr("medium-zoom:detach",{detail:{zoom:x}}))}),v=v.filter(function(I){return H.indexOf(I)===-1}),x},f=function(O,D){var z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return v.forEach(function(H){H.addEventListener("medium-zoom:"+O,D,z)}),y.push({type:"medium-zoom:"+O,listener:D,options:z}),x},h=function(O,D){var z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return v.forEach(function(H){H.removeEventListener("medium-zoom:"+O,D,z)}),y=y.filter(function(H){return!(H.type==="medium-zoom:"+O&&H.listener.toString()===D.toString())}),x},d=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},D=O.target,z=function(){var I={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},$=void 0,L=void 0;if(A.container)if(A.container instanceof Object)I=Qi({},I,A.container),$=I.width-I.left-I.right-A.margin*2,L=I.height-I.top-I.bottom-A.margin*2;else{var ee=sa(A.container)?A.container:document.querySelector(A.container),te=ee.getBoundingClientRect(),ge=te.width,Me=te.height,De=te.left,J=te.top;I=Qi({},I,{width:ge,height:Me,left:De,top:J})}$=$||I.width-A.margin*2,L=L||I.height-A.margin*2;var de=T.zoomedHd||T.original,_e=pf(de)?$:de.naturalWidth||$,W=pf(de)?L:de.naturalHeight||L,ue=de.getBoundingClientRect(),le=ue.top,F=ue.left,Ae=ue.width,ve=ue.height,C=Math.min(Math.max(Ae,_e),$)/Ae,P=Math.min(Math.max(ve,W),L)/ve,X=Math.min(C,P),Z=(-F+($-Ae)/2+A.margin+I.left)/X,K=(-le+(L-ve)/2+A.margin+I.top)/X,fe="scale("+X+") translate3d("+Z+"px, "+K+"px, 0)";T.zoomed.style.transform=fe,T.zoomedHd&&(T.zoomedHd.style.transform=fe)};return new i(function(H){if(D&&v.indexOf(D)===-1){H(x);return}var I=function ge(){U=!1,T.zoomed.removeEventListener("transitionend",ge),T.original.dispatchEvent(vr("medium-zoom:opened",{detail:{zoom:x}})),H(x)};if(T.zoomed){H(x);return}if(D)T.original=D;else if(v.length>0){var $=v;T.original=$[0]}else{H(x);return}if(T.original.dispatchEvent(vr("medium-zoom:open",{detail:{zoom:x}})),b=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,U=!0,T.zoomed=Px(T.original),document.body.appendChild(E),A.template){var L=sa(A.template)?A.template:document.querySelector(A.template);T.template=document.createElement("div"),T.template.appendChild(L.content.cloneNode(!0)),document.body.appendChild(T.template)}if(T.original.parentElement&&T.original.parentElement.tagName==="PICTURE"&&T.original.currentSrc&&(T.zoomed.src=T.original.currentSrc),document.body.appendChild(T.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),T.original.classList.add("medium-zoom-image--hidden"),T.zoomed.classList.add("medium-zoom-image--opened"),T.zoomed.addEventListener("click",g),T.zoomed.addEventListener("transitionend",I),T.original.getAttribute("data-zoom-src")){T.zoomedHd=T.zoomed.cloneNode(),T.zoomedHd.removeAttribute("srcset"),T.zoomedHd.removeAttribute("sizes"),T.zoomedHd.removeAttribute("loading"),T.zoomedHd.src=T.zoomed.getAttribute("data-zoom-src"),T.zoomedHd.onerror=function(){clearInterval(ee),console.warn("Unable to reach the zoom image target "+T.zoomedHd.src),T.zoomedHd=null,z()};var ee=setInterval(function(){T.zoomedHd.complete&&(clearInterval(ee),T.zoomedHd.classList.add("medium-zoom-image--opened"),T.zoomedHd.addEventListener("click",g),document.body.appendChild(T.zoomedHd),z())},10)}else if(T.original.hasAttribute("srcset")){T.zoomedHd=T.zoomed.cloneNode(),T.zoomedHd.removeAttribute("sizes"),T.zoomedHd.removeAttribute("loading");var te=T.zoomedHd.addEventListener("load",function(){T.zoomedHd.removeEventListener("load",te),T.zoomedHd.classList.add("medium-zoom-image--opened"),T.zoomedHd.addEventListener("click",g),document.body.appendChild(T.zoomedHd),z()})}else z()})},g=function(){return new i(function(O){if(U||!T.original){O(x);return}var D=function z(){T.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(T.zoomed),T.zoomedHd&&document.body.removeChild(T.zoomedHd),document.body.removeChild(E),T.zoomed.classList.remove("medium-zoom-image--opened"),T.template&&document.body.removeChild(T.template),U=!1,T.zoomed.removeEventListener("transitionend",z),T.original.dispatchEvent(vr("medium-zoom:closed",{detail:{zoom:x}})),T.original=null,T.zoomed=null,T.zoomedHd=null,T.template=null,O(x)};U=!0,document.body.classList.remove("medium-zoom--opened"),T.zoomed.style.transform="",T.zoomedHd&&(T.zoomedHd.style.transform=""),T.template&&(T.template.style.transition="opacity 150ms",T.template.style.opacity=0),T.original.dispatchEvent(vr("medium-zoom:close",{detail:{zoom:x}})),T.zoomed.addEventListener("transitionend",D)})},_=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},D=O.target;return T.original?g():d({target:D})},m=function(){return A},p=function(){return v},S=function(){return T.original},v=[],y=[],U=!1,b=0,A=t,T={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(e)==="[object Object]"?A=e:(e||typeof e=="string")&&c(e),A=Qi({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},A);var E=Cx(A.background);document.addEventListener("click",r),document.addEventListener("keyup",o),document.addEventListener("scroll",s),window.addEventListener("resize",g);var x={open:d,close:g,toggle:_,update:a,clone:l,attach:c,detach:u,on:f,off:h,getOptions:m,getImages:p,getZoomedImage:S};return x};function Dx(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}var Ix=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";Dx(Ix);const Ux=Symbol("mediumZoom");var Nx={};const Ox=".theme-default-content > img, .theme-default-content :not(a) > img",Fx=Nx,Bx=300,Hx=oi({enhance({app:n,router:e}){const t=Lx(Fx);t.refresh=(i=Ox)=>{t.detach(),t.attach(i)},n.provide(Ux,t),e.afterEach(()=>{wp(Bx).then(()=>t.refresh())})}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const et={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:n=>{const e=et.isStarted();n=hl(n,et.settings.minimum,1),et.status=n===1?null:n;const t=et.render(!e),i=t.querySelector(et.settings.barSelector),r=et.settings.speed,s=et.settings.easing;return t.offsetWidth,zx(o=>{Ro(i,{transform:"translate3d("+gf(n)+"%,0,0)",transition:"all "+r+"ms "+s}),n===1?(Ro(t,{transition:"none",opacity:"1"}),t.offsetWidth,setTimeout(function(){Ro(t,{transition:"all "+r+"ms linear",opacity:"0"}),setTimeout(function(){et.remove(),o()},r)},r)):setTimeout(()=>o(),r)}),et},isStarted:()=>typeof et.status=="number",start:()=>{et.status||et.set(0);const n=()=>{setTimeout(()=>{et.status&&(et.trickle(),n())},et.settings.trickleSpeed)};return et.settings.trickle&&n(),et},done:n=>!n&&!et.status?et:et.inc(.3+.5*Math.random()).set(1),inc:n=>{let e=et.status;return e?(typeof n!="number"&&(n=(1-e)*hl(Math.random()*e,.1,.95)),e=hl(e+n,0,.994),et.set(e)):et.start()},trickle:()=>et.inc(Math.random()*et.settings.trickleRate),render:n=>{if(et.isRendered())return document.getElementById("nprogress");_f(document.documentElement,"nprogress-busy");const e=document.createElement("div");e.id="nprogress",e.innerHTML=et.settings.template;const t=e.querySelector(et.settings.barSelector),i=n?"-100":gf(et.status||0),r=document.querySelector(et.settings.parent);return Ro(t,{transition:"all 0 linear",transform:"translate3d("+i+"%,0,0)"}),r!==document.body&&_f(r,"nprogress-custom-parent"),r==null||r.appendChild(e),e},remove:()=>{vf(document.documentElement,"nprogress-busy"),vf(document.querySelector(et.settings.parent),"nprogress-custom-parent");const n=document.getElementById("nprogress");n&&kx(n)},isRendered:()=>!!document.getElementById("nprogress")},hl=(n,e,t)=>n<e?e:n>t?t:n,gf=n=>(-1+n)*100,zx=function(){const n=[];function e(){const t=n.shift();t&&t(e)}return function(t){n.push(t),n.length===1&&e()}}(),Ro=function(){const n=["Webkit","O","Moz","ms"],e={};function t(o){return o.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(a,l){return l.toUpperCase()})}function i(o){const a=document.body.style;if(o in a)return o;let l=n.length;const c=o.charAt(0).toUpperCase()+o.slice(1);let u;for(;l--;)if(u=n[l]+c,u in a)return u;return o}function r(o){return o=t(o),e[o]??(e[o]=i(o))}function s(o,a,l){a=r(a),o.style[a]=l}return function(o,a){for(const l in a){const c=a[l];c!==void 0&&Object.prototype.hasOwnProperty.call(a,l)&&s(o,l,c)}}}(),Rp=(n,e)=>(typeof n=="string"?n:Xc(n)).indexOf(" "+e+" ")>=0,_f=(n,e)=>{const t=Xc(n),i=t+e;Rp(t,e)||(n.className=i.substring(1))},vf=(n,e)=>{const t=Xc(n);if(!Rp(n,e))return;const i=t.replace(" "+e+" "," ");n.className=i.substring(1,i.length-1)},Xc=n=>(" "+(n.className||"")+" ").replace(/\s+/gi," "),kx=n=>{n&&n.parentNode&&n.parentNode.removeChild(n)},Vx=()=>{Yt(()=>{const n=rs(),e=new Set;e.add(n.currentRoute.value.path),n.beforeEach(t=>{e.has(t.path)||et.start()}),n.afterEach(t=>{e.add(t.path),et.done()})})},Gx=oi({setup(){Vx()}}),Wx=JSON.parse(`{"logo":"/static/chicken.png","navbar":[{"text":"Home","link":"/home/","activeMatch":"home"},{"text":"Blog","link":"/blog/","activeMatch":"blog"},{"text":"Project","link":"/project/","activeMatch":"project"},{"text":"Read","link":"/read/","activeMatch":"read"}],"locales":{"/":{"selectLanguageName":"English"}},"colorMode":"auto","colorModeSwitch":true,"repo":null,"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","sidebar":"auto","sidebarDepth":2,"editLink":true,"editLinkText":"Edit this page","lastUpdated":true,"lastUpdatedText":"Last Updated","contributors":true,"contributorsText":"Contributors","notFound":["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],"backToHome":"Take me home","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}`),$x=rt(Wx),Cp=()=>$x,Pp=Symbol(""),Xx=()=>{const n=en(Pp);if(!n)throw new Error("useThemeLocaleData() is called without provider.");return n},qx=(n,e)=>{const{locales:t,...i}=n;return{...i,...t==null?void 0:t[e]}},jx=oi({enhance({app:n}){const e=Cp(),t=n._context.provides[kc],i=xe(()=>qx(e.value,t.routeLocale.value));n.provide(Pp,i),Object.defineProperties(n.config.globalProperties,{$theme:{get(){return e.value}},$themeLocale:{get(){return i.value}}})}}),Yx=at({__name:"Badge",props:{type:{type:String,required:!1,default:"tip"},text:{type:String,required:!1,default:""},vertical:{type:String,required:!1,default:void 0}},setup(n){return(e,t)=>(ye(),Oe("span",{class:sn(["badge",n.type]),style:Ks({verticalAlign:n.vertical})},[ct(e.$slots,"default",{},()=>[Hn(gt(n.text),1)])],6))}}),mt=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Kx=mt(Yx,[["__file","Badge.vue"]]),Zx=at({name:"CodeGroup",slots:Object,setup(n,{slots:e}){const t=rt([]),i=rt(-1),r=bp("vuepress-code-group",{}),s=xe(()=>t.value.map(c=>c.innerText).join(","));Yt(()=>{Ht(()=>r.value[s.value],(c=-1)=>{i.value!==c&&(i.value=c)},{immediate:!0}),Ht(i,c=>{r.value[s.value]!==c&&(r.value[s.value]=c)})});const o=(c=i.value)=>{c<t.value.length-1?i.value=c+1:i.value=0,t.value[i.value].focus()},a=(c=i.value)=>{c>0?i.value=c-1:i.value=t.value.length-1,t.value[i.value].focus()},l=(c,u)=>{c.key===" "||c.key==="Enter"?(c.preventDefault(),i.value=u):c.key==="ArrowRight"?(c.preventDefault(),o(u)):c.key==="ArrowLeft"&&(c.preventDefault(),a(u))};return()=>{var u;const c=(((u=e.default)==null?void 0:u.call(e))||[]).filter(f=>f.type.name==="CodeGroupItem").map(f=>(f.props===null&&(f.props={}),f));return c.length===0?null:(i.value<0||i.value>c.length-1?(i.value=c.findIndex(f=>f.props.active===""||f.props.active===!0),i.value===-1&&(i.value=0)):c.forEach((f,h)=>{f.props.active=h===i.value}),dt("div",{class:"code-group"},[dt("div",{class:"code-group__nav",role:"tablist"},c.map((f,h)=>{const d=h===i.value;return dt("button",{ref:g=>{g&&(t.value[h]=g)},class:{"code-group__nav-tab":!0,"code-group__nav-tab-active":d},role:"tab",ariaSelected:d,onClick:()=>i.value=h,onKeydown:g=>l(g,h)},f.props.title)})),c]))}}}),Jx=at({name:"CodeGroupItem",__name:"CodeGroupItem",props:{title:{type:String,required:!0},active:{type:Boolean,required:!1,default:!1}},setup(n){return(e,t)=>(ye(),Oe("div",{class:sn(["code-group-item",{"code-group-item__active":n.active}]),role:"tabpanel"},[ct(e.$slots,"default")],2))}}),Qx=mt(Jx,[["__file","CodeGroupItem.vue"]]),ey=()=>Cp(),Ft=()=>Xx(),Lp=Symbol(""),qc=()=>{const n=en(Lp);if(!n)throw new Error("useDarkMode() is called without provider.");return n},ty=()=>{const n=Ft(),e=Y0(),t=bp("vuepress-color-scheme",n.value.colorMode),i=xe({get(){return n.value.colorModeSwitch?t.value==="auto"?e.value:t.value==="dark":n.value.colorMode==="dark"},set(r){r===e.value?t.value="auto":t.value=r?"dark":"light"}});fr(Lp,i),ny(i)},ny=n=>{const e=(t=n.value)=>{const i=window==null?void 0:window.document.querySelector("html");i==null||i.classList.toggle("dark",t)};Yt(()=>{Ht(n,e,{immediate:!0})}),eo(()=>e())},iy="http://.",ry=()=>{const n=rs(),e=Hi();return t=>{if(t)if(Ap(t))e.path!==t&&n.push(t);else if(rp(t))window&&window.open(t);else{const i=e.path.slice(0,e.path.lastIndexOf("/"));n.push(new URL(`${i}/${encodeURI(t)}`,iy).pathname)}}};let dl=null,ds=null;const sy={wait:()=>dl,pending:()=>{dl=new Promise(n=>ds=n)},resolve:()=>{ds==null||ds(),dl=null,ds=null}},Dp=()=>sy,Ip=n=>{const{notFound:e,meta:t,path:i}=Zr(n);return e?{text:i,link:i}:{text:t.title||i,link:i}},xf=n=>decodeURI(n).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),oy=(n,e)=>{if(e.hash===n)return!0;const t=xf(e.path),i=xf(n);return t===i},Up=(n,e)=>n.link&&oy(n.link,e)?!0:n.children?n.children.some(t=>Up(t,e)):!1,Np=n=>!so(n)||/github\.com/.test(n)?"GitHub":/bitbucket\.org/.test(n)?"Bitbucket":/gitlab\.com/.test(n)?"GitLab":/gitee\.com/.test(n)?"Gitee":null,ay={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},ly=({docsRepo:n,editLinkPattern:e})=>{if(e)return e;const t=Np(n);return t!==null?ay[t]:null},cy=({docsRepo:n,docsBranch:e,docsDir:t,filePathRelative:i,editLinkPattern:r})=>{if(!i)return null;const s=ly({docsRepo:n,editLinkPattern:r});return s?s.replace(/:repo/,so(n)?n:`https://github.com/${n}`).replace(/:branch/,e).replace(/:path/,op(`${sp(t)}/${i}`)):null},Op=Symbol("sidebarItems"),jc=()=>{const n=en(Op);if(!n)throw new Error("useSidebarItems() is called without provider.");return n},uy=()=>{const n=Ft(),e=Rn(),t=Wr(),i=Hi(),r=xe(()=>fy(e.value,n.value,t.value,i.path));fr(Op,r)},fy=(n,e,t,i)=>{const r=n.sidebar??e.sidebar??"auto",s=n.sidebarDepth??e.sidebarDepth??2;return n.home||r===!1?[]:r==="auto"?Fp(t,s):Array.isArray(r)?Bp(t,i,r,s):Bc(r)?dy(t,i,r,s):[]},hy=(n,e)=>({text:n.title,link:n.link,children:Yc(n.children,e)}),Yc=(n,e)=>e>0?n.map(t=>hy(t,e-1)):[],Fp=(n,e)=>[{text:n.title,children:Yc(n.headers,e)}],Bp=(n,e,t,i)=>{const r=s=>{var a;let o;if(On(s)?o=Ip(s):o=s,o.children)return{...o,children:o.children.map(l=>r(l))};if(o.link===e){const l=((a=n.headers[0])==null?void 0:a.level)===1?n.headers[0].children:n.headers;return{...o,children:Yc(l,i)}}return o};return t.map(s=>r(s))},dy=(n,e,t,i)=>{const r=ap(t,e),s=t[r]??[];return s==="heading"?Fp(n,i):Bp(n,e,s,i)},py="719px",my={mobile:py};var Ws;(function(n){n.MOBILE="mobile"})(Ws||(Ws={}));var Zh;const gy={[Ws.MOBILE]:Number.parseInt((Zh=my.mobile)==null?void 0:Zh.replace("px",""),10)},Hp=(n,e)=>{const t=gy[n];Number.isInteger(t)&&(Pn("orientationchange",()=>e(t),!1),Pn("resize",()=>e(t),!1),Yt(()=>{e(t)}))},_y={},vy={class:"theme-default-content"};function xy(n,e){const t=hr("Content");return ye(),Oe("div",vy,[We(t)])}const yy=mt(_y,[["render",xy],["__file","HomeContent.vue"]]),Sy={key:0,class:"features"},My=at({__name:"HomeFeatures",setup(n){const e=Rn(),t=xe(()=>Array.isArray(e.value.features)?e.value.features:[]);return(i,r)=>t.value.length?(ye(),Oe("div",Sy,[(ye(!0),Oe(ut,null,Bn(t.value,s=>(ye(),Oe("div",{key:s.title,class:"feature"},[Pe("h2",null,gt(s.title),1),Pe("p",null,gt(s.details),1)]))),128))])):Tt("",!0)}}),Ey=mt(My,[["__file","HomeFeatures.vue"]]),by=["innerHTML"],Ty=["textContent"],Ay=at({__name:"HomeFooter",setup(n){const e=Rn(),t=xe(()=>e.value.footer),i=xe(()=>e.value.footerHtml);return(r,s)=>t.value?(ye(),Oe(ut,{key:0},[i.value?(ye(),Oe("div",{key:0,class:"footer",innerHTML:t.value},null,8,by)):(ye(),Oe("div",{key:1,class:"footer",textContent:gt(t.value)},null,8,Ty))],64)):Tt("",!0)}}),wy=mt(Ay,[["__file","HomeFooter.vue"]]),Ry=["href","rel","target","aria-label"],Cy=at({inheritAttrs:!1,__name:"AutoLink",props:{item:{type:Object,required:!0}},setup(n){const e=n,t=Hi(),i=vp(),{item:r}=Dc(e),s=xe(()=>so(r.value.link)),o=xe(()=>!s.value&&rp(r.value.link)),a=xe(()=>{if(!o.value){if(r.value.target)return r.value.target;if(s.value)return"_blank"}}),l=xe(()=>a.value==="_blank"),c=xe(()=>!s.value&&!o.value&&!l.value),u=xe(()=>{if(!o.value){if(r.value.rel)return r.value.rel;if(l.value)return"noopener noreferrer"}}),f=xe(()=>r.value.ariaLabel||r.value.text),h=xe(()=>{const g=Object.keys(i.value.locales);return g.length?!g.some(_=>_===r.value.link):r.value.link!=="/"}),d=xe(()=>c.value?r.value.activeMatch?new RegExp(r.value.activeMatch).test(t.path):h.value?t.path.startsWith(r.value.link):!1:!1);return(g,_)=>{const m=hr("RouteLink"),p=hr("AutoLinkExternalIcon");return c.value?(ye(),pt(m,rc({key:0,active:d.value,to:Ue(r).link,"aria-label":f.value},g.$attrs),{default:xt(()=>[ct(g.$slots,"default",{},()=>[ct(g.$slots,"before"),Hn(" "+gt(Ue(r).text)+" ",1),ct(g.$slots,"after")])]),_:3},16,["active","to","aria-label"])):(ye(),Oe("a",rc({key:1,class:"external-link",href:Ue(r).link,rel:u.value,target:a.value,"aria-label":f.value},g.$attrs),[ct(g.$slots,"default",{},()=>[ct(g.$slots,"before"),Hn(" "+gt(Ue(r).text)+" ",1),l.value?(ye(),pt(p,{key:0})):Tt("",!0),ct(g.$slots,"after")])],16,Ry))}}}),ii=mt(Cy,[["__file","AutoLink.vue"]]),Py={class:"hero"},Ly={key:0,id:"main-title"},Dy={key:1,class:"description"},Iy={key:2,class:"actions"},Uy=at({__name:"HomeHero",setup(n){const e=Rn(),t=Vc(),i=qc(),r=xe(()=>i.value&&e.value.heroImageDark!==void 0?e.value.heroImageDark:e.value.heroImage),s=xe(()=>e.value.heroAlt||a.value||"hero"),o=xe(()=>e.value.heroHeight||280),a=xe(()=>e.value.heroText===null?null:e.value.heroText||t.value.title||"Hello"),l=xe(()=>e.value.tagline===null?null:e.value.tagline||t.value.description||"Welcome to your VuePress site"),c=xe(()=>Array.isArray(e.value.actions)?e.value.actions.map(({text:f,link:h,type:d="primary"})=>({text:f,link:h,type:d})):[]),u=()=>{if(!r.value)return null;const f=dt("img",{src:Fa(r.value),alt:s.value,height:o.value});return e.value.heroImageDark===void 0?f:dt(Gc,()=>f)};return(f,h)=>(ye(),Oe("header",Py,[We(u),a.value?(ye(),Oe("h1",Ly,gt(a.value),1)):Tt("",!0),l.value?(ye(),Oe("p",Dy,gt(l.value),1)):Tt("",!0),c.value.length?(ye(),Oe("p",Iy,[(ye(!0),Oe(ut,null,Bn(c.value,d=>(ye(),pt(ii,{key:d.text,class:sn(["action-button",[d.type]]),item:d},null,8,["class","item"]))),128))])):Tt("",!0)]))}}),Ny=mt(Uy,[["__file","HomeHero.vue"]]),Oy={class:"home"},Fy=at({__name:"Home",setup(n){return(e,t)=>(ye(),Oe("main",Oy,[We(Ny),We(Ey),We(yy),We(wy)]))}}),By=mt(Fy,[["__file","Home.vue"]]),Hy=["aria-hidden"],zy=at({__name:"NavbarBrand",setup(n){const e=ss(),t=Vc(),i=Ft(),r=qc(),s=xe(()=>i.value.home||e.value),o=xe(()=>t.value.title),a=xe(()=>r.value&&i.value.logoDark!==void 0?i.value.logoDark:i.value.logo),l=xe(()=>i.value.logoAlt??o.value),c=xe(()=>o.value.toLocaleUpperCase().trim()===l.value.toLocaleUpperCase().trim()),u=()=>{if(!a.value)return null;const f=dt("img",{class:"logo",src:Fa(a.value),alt:l.value});return i.value.logoDark===void 0?f:dt(Gc,()=>f)};return(f,h)=>(ye(),pt(Ue(oo),{to:s.value},{default:xt(()=>[We(u),o.value?(ye(),Oe("span",{key:0,class:sn(["site-name",{"can-hide":a.value}]),"aria-hidden":c.value},gt(o.value),11,Hy)):Tt("",!0)]),_:1},8,["to"]))}}),ky=mt(zy,[["__file","NavbarBrand.vue"]]),Vy=at({__name:"DropdownTransition",setup(n){const e=i=>{i.style.height=i.scrollHeight+"px"},t=i=>{i.style.height=""};return(i,r)=>(ye(),pt(ro,{name:"dropdown",onEnter:e,onAfterEnter:t,onBeforeLeave:e},{default:xt(()=>[ct(i.$slots,"default")]),_:3}))}}),zp=mt(Vy,[["__file","DropdownTransition.vue"]]),Gy=["aria-label"],Wy={class:"title"},$y=Pe("span",{class:"arrow down"},null,-1),Xy=["aria-label"],qy={class:"title"},jy={class:"navbar-dropdown"},Yy={class:"navbar-dropdown-subtitle"},Ky={key:1},Zy={class:"navbar-dropdown-subitem-wrapper"},Jy=at({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(n){const e=n,{item:t}=Dc(e),i=xe(()=>t.value.ariaLabel||t.value.text),r=rt(!1),s=Hi();Ht(()=>s.path,()=>{r.value=!1});const o=l=>{l.detail===0?r.value=!r.value:r.value=!1},a=(l,c)=>c[c.length-1]===l;return(l,c)=>(ye(),Oe("div",{class:sn(["navbar-dropdown-wrapper",{open:r.value}])},[Pe("button",{class:"navbar-dropdown-title",type:"button","aria-label":i.value,onClick:o},[Pe("span",Wy,gt(Ue(t).text),1),$y],8,Gy),Pe("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":i.value,onClick:c[0]||(c[0]=u=>r.value=!r.value)},[Pe("span",qy,gt(Ue(t).text),1),Pe("span",{class:sn(["arrow",r.value?"down":"right"])},null,2)],8,Xy),We(zp,null,{default:xt(()=>[fa(Pe("ul",jy,[(ye(!0),Oe(ut,null,Bn(Ue(t).children,u=>(ye(),Oe("li",{key:u.text,class:"navbar-dropdown-item"},[u.children?(ye(),Oe(ut,{key:0},[Pe("h4",Yy,[u.link?(ye(),pt(ii,{key:0,item:u,onFocusout:f=>a(u,Ue(t).children)&&u.children.length===0&&(r.value=!1)},null,8,["item","onFocusout"])):(ye(),Oe("span",Ky,gt(u.text),1))]),Pe("ul",Zy,[(ye(!0),Oe(ut,null,Bn(u.children,f=>(ye(),Oe("li",{key:f.link,class:"navbar-dropdown-subitem"},[We(ii,{item:f,onFocusout:h=>a(f,u.children)&&a(u,Ue(t).children)&&(r.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(ye(),pt(ii,{key:1,item:u,onFocusout:f=>a(u,Ue(t).children)&&(r.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[_a,r.value]])]),_:1})],2))}}),Qy=mt(Jy,[["__file","NavbarDropdown.vue"]]),eS=["aria-label"],tS=at({__name:"NavbarItems",setup(n){const e=()=>{const f=Hi(),h=ox(),d=ss(),g=vp(),_=Vc(),m=ey(),p=Ft();return xe(()=>{const S=Object.keys(g.value.locales);if(S.length<2)return[];const v=f.path,y=f.fullPath;return[{text:`${p.value.selectLanguageText}`,ariaLabel:`${p.value.selectLanguageAriaLabel??p.value.selectLanguageText}`,children:S.map(b=>{var O,D;const A=((O=g.value.locales)==null?void 0:O[b])??{},T=((D=m.value.locales)==null?void 0:D[b])??{},E=`${A.lang}`,x=T.selectLanguageName??E;if(E===_.value.lang)return{text:x,activeMatch:/./,link:f.hash??"#"};const N=v.replace(d.value,b);return{text:x,link:h.value.some(z=>z===N)?y.replace(v,N):T.home??b}})}]})},t=()=>{const f=Ft(),h=xe(()=>f.value.repo),d=xe(()=>h.value?Np(h.value):null),g=xe(()=>h.value&&!so(h.value)?`https://github.com/${h.value}`:h.value),_=xe(()=>g.value?f.value.repoLabel?f.value.repoLabel:d.value===null?"Source":d.value:null);return xe(()=>!g.value||!_.value?[]:[{text:_.value,link:g.value}])},i=f=>On(f)?Ip(f):f.children?{...f,children:f.children.map(h=>i(h))}:f,r=()=>{const f=Ft();return xe(()=>(f.value.navbar||[]).map(h=>i(h)))},s=rt(!1),o=r(),a=e(),l=t(),c=xe(()=>[...o.value,...a.value,...l.value]);Hp(Ws.MOBILE,f=>{window.innerWidth<f?s.value=!0:s.value=!1});const u=xe(()=>Ft().value.navbarLabel??"site navigation");return(f,h)=>c.value.length?(ye(),Oe("nav",{key:0,class:"navbar-items","aria-label":u.value},[(ye(!0),Oe(ut,null,Bn(c.value,d=>(ye(),Oe("div",{key:d.text,class:"navbar-item"},["children"in d?(ye(),pt(Qy,{key:0,item:d,class:sn(s.value?"mobile":"")},null,8,["item","class"])):(ye(),pt(ii,{key:1,item:d},null,8,["item"]))]))),128))],8,eS)):Tt("",!0)}}),kp=mt(tS,[["__file","NavbarItems.vue"]]),nS=["title"],iS={class:"icon",focusable:"false",viewBox:"0 0 32 32"},rS=S_('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),sS=[rS],oS={class:"icon",focusable:"false",viewBox:"0 0 32 32"},aS=Pe("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),lS=[aS],cS=at({__name:"ToggleColorModeButton",setup(n){const e=Ft(),t=qc(),i=()=>{t.value=!t.value};return(r,s)=>(ye(),Oe("button",{class:"toggle-color-mode-button",title:Ue(e).toggleColorMode,onClick:i},[fa((ye(),Oe("svg",iS,sS,512)),[[_a,!Ue(t)]]),fa((ye(),Oe("svg",oS,lS,512)),[[_a,Ue(t)]])],8,nS))}}),uS=mt(cS,[["__file","ToggleColorModeButton.vue"]]),fS=["title"],hS=Pe("div",{class:"icon","aria-hidden":"true"},[Pe("span"),Pe("span"),Pe("span")],-1),dS=[hS],pS=at({__name:"ToggleSidebarButton",emits:["toggle"],setup(n){const e=Ft();return(t,i)=>(ye(),Oe("div",{class:"toggle-sidebar-button",title:Ue(e).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:i[0]||(i[0]=r=>t.$emit("toggle"))},dS,8,fS))}}),mS=mt(pS,[["__file","ToggleSidebarButton.vue"]]),gS=at({__name:"Navbar",emits:["toggle-sidebar"],setup(n){const e=Ft(),t=rt(null),i=rt(null),r=rt(0),s=xe(()=>r.value?{maxWidth:r.value+"px"}:{}),o=(a,l)=>{var f,h,d;const c=(d=(h=(f=a==null?void 0:a.ownerDocument)==null?void 0:f.defaultView)==null?void 0:h.getComputedStyle(a,null))==null?void 0:d[l],u=Number.parseInt(c,10);return Number.isNaN(u)?0:u};return Hp(Ws.MOBILE,a=>{var c;const l=o(t.value,"paddingLeft")+o(t.value,"paddingRight");window.innerWidth<a?r.value=0:r.value=t.value.offsetWidth-l-(((c=i.value)==null?void 0:c.offsetWidth)||0)}),(a,l)=>{const c=hr("NavbarSearch");return ye(),Oe("header",{ref_key:"navbar",ref:t,class:"navbar"},[We(mS,{onToggle:l[0]||(l[0]=u=>a.$emit("toggle-sidebar"))}),Pe("span",{ref_key:"navbarBrand",ref:i},[We(ky)],512),Pe("div",{class:"navbar-items-wrapper",style:Ks(s.value)},[ct(a.$slots,"before"),We(kp,{class:"can-hide"}),ct(a.$slots,"after"),Ue(e).colorModeSwitch?(ye(),pt(uS,{key:0})):Tt("",!0),We(c)],4)],512)}}}),_S=mt(gS,[["__file","Navbar.vue"]]),vS={class:"vp-page-meta"},xS={key:0,class:"vp-meta-item edit-link"},yS=Pe("svg",{class:"icon",viewBox:"0 0 1024 1024"},[Pe("g",{fill:"currentColor"},[Pe("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),Pe("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})])],-1),SS={class:"vp-meta-item git-info"},MS={key:0,class:"vp-meta-item last-updated"},ES={class:"meta-item-label"},bS={class:"meta-item-info"},TS={key:1,class:"vp-meta-item contributors"},AS={class:"meta-item-label"},wS={class:"meta-item-info"},RS=["title"],CS=at({__name:"PageMeta",setup(n){const e=()=>{const l=Ft(),c=Wr(),u=Rn();return xe(()=>{if(!(u.value.editLink??l.value.editLink??!0))return null;const{repo:h,docsRepo:d=h,docsBranch:g="main",docsDir:_="",editLinkText:m}=l.value;if(!d)return null;const p=cy({docsRepo:d,docsBranch:g,docsDir:_,filePathRelative:c.value.filePathRelative,editLinkPattern:u.value.editLinkPattern??l.value.editLinkPattern});return p?{text:m??"Edit this page",link:p}:null})},t=()=>{const l=Ft(),c=Wr(),u=Rn();return xe(()=>{var d,g;return!(u.value.lastUpdated??l.value.lastUpdated??!0)||!((d=c.value.git)!=null&&d.updatedTime)?null:new Date((g=c.value.git)==null?void 0:g.updatedTime).toLocaleString()})},i=()=>{const l=Ft(),c=Wr(),u=Rn();return xe(()=>{var h;return u.value.contributors??l.value.contributors??!0?((h=c.value.git)==null?void 0:h.contributors)??null:null})},r=Ft(),s=e(),o=t(),a=i();return(l,c)=>{const u=hr("ClientOnly");return ye(),Oe("footer",vS,[Ue(s)?(ye(),Oe("div",xS,[We(ii,{class:"label",item:Ue(s)},{before:xt(()=>[yS]),_:1},8,["item"])])):Tt("",!0),Pe("div",SS,[Ue(o)?(ye(),Oe("div",MS,[Pe("span",ES,gt(Ue(r).lastUpdatedText)+": ",1),We(u,null,{default:xt(()=>[Pe("span",bS,gt(Ue(o)),1)]),_:1})])):Tt("",!0),Ue(a)&&Ue(a).length?(ye(),Oe("div",TS,[Pe("span",AS,gt(Ue(r).contributorsText)+": ",1),Pe("span",wS,[(ye(!0),Oe(ut,null,Bn(Ue(a),(f,h)=>(ye(),Oe(ut,{key:h},[Pe("span",{class:"contributor",title:`email: ${f.email}`},gt(f.name),9,RS),h!==Ue(a).length-1?(ye(),Oe(ut,{key:0},[Hn(", ")],64)):Tt("",!0)],64))),128))])])):Tt("",!0)])])}}}),PS=mt(CS,[["__file","PageMeta.vue"]]),LS=["aria-label"],DS={class:"hint"},IS=Pe("span",{class:"arrow left"},null,-1),US={class:"link"},NS={class:"hint"},OS=Pe("span",{class:"arrow right"},null,-1),FS={class:"link"},BS=at({__name:"PageNav",setup(n){const e=(f,h)=>{if(f===!1)return null;if(On(f)){const{notFound:d,meta:g,path:_}=df(f,h);return d?{text:_,link:_}:{text:g.title||_,link:_}}return Bc(f)?{...f,link:df(f.link,h).path}:!1},t=(f,h,d)=>{const g=f.findIndex(_=>_.link===h);if(g!==-1){const _=f[g+d];return _!=null&&_.link?_:null}for(const _ of f)if(_.children){const m=t(_.children,h,d);if(m)return m}return null},i=Rn(),r=jc(),s=Ft(),o=Hi(),a=ry(),l=xe(()=>{const f=e(i.value.prev,o.path);return f!==!1?f:t(r.value,o.path,-1)}),c=xe(()=>{const f=e(i.value.next,o.path);return f!==!1?f:t(r.value,o.path,1)}),u=xe(()=>Ft().value.pageNavbarLabel??"page navigation");return Pn("keydown",f=>{f.altKey&&(f.key==="ArrowRight"?c.value&&(a(c.value.link),f.preventDefault()):f.key==="ArrowLeft"&&l.value&&(a(l.value.link),f.preventDefault()))}),(f,h)=>l.value||c.value?(ye(),Oe("nav",{key:0,class:"vp-page-nav","aria-label":u.value},[l.value?(ye(),pt(ii,{key:0,class:"prev",item:l.value},{default:xt(()=>[Pe("div",DS,[IS,Hn(" "+gt(Ue(s).prev??"Prev"),1)]),Pe("div",US,[Pe("span",null,gt(l.value.text),1)])]),_:1},8,["item"])):Tt("",!0),c.value?(ye(),pt(ii,{key:1,class:"next",item:c.value},{default:xt(()=>[Pe("div",NS,[Hn(gt(Ue(s).next??"Next")+" ",1),OS]),Pe("div",FS,[Pe("span",null,gt(c.value.text),1)])]),_:1},8,["item"])):Tt("",!0)],8,LS)):Tt("",!0)}}),HS=mt(BS,[["__file","PageNav.vue"]]),zS={class:"page"},kS={class:"theme-default-content"},VS=at({__name:"Page",setup(n){return(e,t)=>{const i=hr("Content");return ye(),Oe("main",zS,[ct(e.$slots,"top"),Pe("div",kS,[ct(e.$slots,"content-top"),We(i),ct(e.$slots,"content-bottom")]),We(PS),We(HS),ct(e.$slots,"bottom")])}}}),GS=mt(VS,[["__file","Page.vue"]]),WS={class:"sidebar-item-children"},$S=at({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(n){const e=n,{item:t,depth:i}=Dc(e),r=Hi(),s=rs(),o=xe(()=>Up(t.value,r)),a=xe(()=>({"sidebar-item":!0,"sidebar-heading":i.value===0,active:o.value,collapsible:t.value.collapsible})),l=xe(()=>t.value.collapsible?o.value:!0),[c,u]=k0(l.value),f=d=>{t.value.collapsible&&(d.preventDefault(),u())},h=s.afterEach(d=>{is(()=>{c.value=l.value})});return Ia(()=>{h()}),(d,g)=>{var m;const _=hr("SidebarItem",!0);return ye(),Oe("li",null,[Ue(t).link?(ye(),pt(ii,{key:0,class:sn(a.value),item:Ue(t)},null,8,["class","item"])):(ye(),Oe("p",{key:1,tabindex:"0",class:sn(a.value),onClick:f,onKeydown:iv(f,["enter"])},[Hn(gt(Ue(t).text)+" ",1),Ue(t).collapsible?(ye(),Oe("span",{key:0,class:sn(["arrow",Ue(c)?"down":"right"])},null,2)):Tt("",!0)],34)),(m=Ue(t).children)!=null&&m.length?(ye(),pt(zp,{key:2},{default:xt(()=>[fa(Pe("ul",WS,[(ye(!0),Oe(ut,null,Bn(Ue(t).children,p=>(ye(),pt(_,{key:`${Ue(i)}${p.text}${p.link}`,item:p,depth:Ue(i)+1},null,8,["item","depth"]))),128))],512),[[_a,Ue(c)]])]),_:1})):Tt("",!0)])}}}),XS=mt($S,[["__file","SidebarItem.vue"]]),qS={key:0,class:"sidebar-items"},jS=at({__name:"SidebarItems",setup(n){const e=Hi(),t=jc();return Yt(()=>{Ht(()=>e.hash,i=>{const r=document.querySelector(".sidebar");if(!r)return;const s=document.querySelector(`.sidebar a.sidebar-item[href="${e.path}${i}"]`);if(!s)return;const{top:o,height:a}=r.getBoundingClientRect(),{top:l,height:c}=s.getBoundingClientRect();l<o?s.scrollIntoView(!0):l+c>o+a&&s.scrollIntoView(!1)})}),(i,r)=>Ue(t).length?(ye(),Oe("ul",qS,[(ye(!0),Oe(ut,null,Bn(Ue(t),s=>(ye(),pt(XS,{key:`${s.text}${s.link}`,item:s},null,8,["item"]))),128))])):Tt("",!0)}}),YS=mt(jS,[["__file","SidebarItems.vue"]]),KS={class:"sidebar"},ZS=at({__name:"Sidebar",setup(n){return(e,t)=>(ye(),Oe("aside",KS,[We(kp),ct(e.$slots,"top"),We(YS),ct(e.$slots,"bottom")]))}}),JS=mt(ZS,[["__file","Sidebar.vue"]]),QS=at({__name:"Layout",setup(n){const e=Wr(),t=Rn(),i=Ft(),r=xe(()=>t.value.navbar!==!1&&i.value.navbar!==!1),s=jc(),o=rt(!1),a=m=>{o.value=typeof m=="boolean"?m:!o.value},l={x:0,y:0},c=m=>{l.x=m.changedTouches[0].clientX,l.y=m.changedTouches[0].clientY},u=m=>{const p=m.changedTouches[0].clientX-l.x,S=m.changedTouches[0].clientY-l.y;Math.abs(p)>Math.abs(S)&&Math.abs(p)>40&&(p>0&&l.x<=80?a(!0):a(!1))},f=xe(()=>[{"no-navbar":!r.value,"no-sidebar":!s.value.length,"sidebar-open":o.value},t.value.pageClass]);let h;Yt(()=>{h=rs().afterEach(()=>{a(!1)})}),eo(()=>{h()});const d=Dp(),g=d.resolve,_=d.pending;return(m,p)=>(ye(),Oe("div",{class:sn(["theme-container",f.value]),onTouchstart:c,onTouchend:u},[ct(m.$slots,"navbar",{},()=>[r.value?(ye(),pt(_S,{key:0,onToggleSidebar:a},{before:xt(()=>[ct(m.$slots,"navbar-before")]),after:xt(()=>[ct(m.$slots,"navbar-after")]),_:3})):Tt("",!0)]),Pe("div",{class:"sidebar-mask",onClick:p[0]||(p[0]=S=>a(!1))}),ct(m.$slots,"sidebar",{},()=>[We(JS,null,{top:xt(()=>[ct(m.$slots,"sidebar-top")]),bottom:xt(()=>[ct(m.$slots,"sidebar-bottom")]),_:3})]),ct(m.$slots,"page",{},()=>[Ue(t).home?(ye(),pt(By,{key:0})):(ye(),pt(ro,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:Ue(g),onBeforeLeave:Ue(_)},{default:xt(()=>[(ye(),pt(GS,{key:Ue(e).path},{top:xt(()=>[ct(m.$slots,"page-top")]),"content-top":xt(()=>[ct(m.$slots,"page-content-top")]),"content-bottom":xt(()=>[ct(m.$slots,"page-content-bottom")]),bottom:xt(()=>[ct(m.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}}),Vp=mt(QS,[["__file","Layout.vue"]]),eM={class:"theme-container"},tM={class:"page"},nM={class:"theme-default-content"},iM=Pe("h1",null,"404",-1),rM=at({__name:"NotFound",setup(n){const e=ss(),t=Ft(),i=t.value.notFound??["Not Found"],r=()=>i[Math.floor(Math.random()*i.length)],s=t.value.home??e.value,o=t.value.backToHome??"Back to home";return(a,l)=>(ye(),Oe("div",eM,[Pe("main",tM,[Pe("div",nM,[iM,Pe("blockquote",null,gt(r()),1),We(Ue(oo),{to:Ue(s)},{default:xt(()=>[Hn(gt(Ue(o)),1)]),_:1},8,["to"])])])]))}}),sM=mt(rM,[["__file","NotFound.vue"]]),oM=oi({enhance({app:n,router:e}){fl("Badge")||n.component("Badge",Kx),fl("CodeGroup")||n.component("CodeGroup",Zx),fl("CodeGroupItem")||n.component("CodeGroupItem",Qx),n.component("AutoLinkExternalIcon",()=>{const i=n.component("ExternalLinkIcon");return i?dt(i):null}),n.component("NavbarSearch",()=>{const i=n.component("Docsearch")||n.component("SearchBox");return i?dt(i):null});const t=e.options.scrollBehavior;e.options.scrollBehavior=async(...i)=>(await Dp().wait(),t(...i))},setup(){ty(),uy()},layouts:{Layout:Vp,NotFound:sM}}),aM={class:"page"},lM={__name:"Layout",setup(n){return(e,t)=>(ye(),pt(Vp,null,{page:xt(()=>[Pe("main",aM,[ct(e.$slots,"default",{},void 0,!0)])]),_:3}))}},za=mt(lM,[["__scopeId","data-v-33e2bea0"],["__file","Layout.vue"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kc="164",xr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},yr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cM=0,yf=1,uM=2,Gp=1,Wp=2,Qn=3,Ii=0,on=1,ei=2,Ci=0,$r=1,Sf=2,Mf=3,Ef=4,fM=5,nr=100,hM=101,dM=102,pM=103,mM=104,gM=200,_M=201,vM=202,xM=203,hc=204,dc=205,yM=206,SM=207,MM=208,EM=209,bM=210,TM=211,AM=212,wM=213,RM=214,CM=0,PM=1,LM=2,va=3,DM=4,IM=5,UM=6,NM=7,Zc=0,OM=1,FM=2,Pi=0,BM=1,HM=2,zM=3,$p=4,kM=5,VM=6,GM=7,Xp=300,Jr=301,Qr=302,pc=303,mc=304,ka=306,gc=1e3,or=1001,_c=1002,vn=1003,WM=1004,Co=1005,hn=1006,pl=1007,ar=1008,Ui=1009,$M=1010,XM=1011,qp=1012,jp=1013,es=1014,Ai=1015,Va=1016,Yp=1017,Kp=1018,ao=1020,qM=35902,jM=1021,YM=1022,Nn=1023,KM=1024,ZM=1025,Xr=1026,$s=1027,JM=1028,Zp=1029,QM=1030,Jp=1031,Qp=1033,ml=33776,gl=33777,_l=33778,vl=33779,bf=35840,Tf=35841,Af=35842,wf=35843,Rf=36196,Cf=37492,Pf=37496,Lf=37808,Df=37809,If=37810,Uf=37811,Nf=37812,Of=37813,Ff=37814,Bf=37815,Hf=37816,zf=37817,kf=37818,Vf=37819,Gf=37820,Wf=37821,xl=36492,$f=36494,Xf=36495,eE=36283,qf=36284,jf=36285,Yf=36286,tE=3200,nE=3201,em=0,iE=1,Ti="",bn="srgb",zi="srgb-linear",Jc="display-p3",Ga="display-p3-linear",xa="linear",vt="srgb",ya="rec709",Sa="p3",Sr=7680,Kf=519,rE=512,sE=513,oE=514,tm=515,aE=516,lE=517,cE=518,uE=519,Zf=35044,Jf="300 es",ti=2e3,Ma=2001;class _r{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yl=Math.PI/180,Ea=180/Math.PI;function lo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function Jt(n,e,t){return Math.max(e,Math.min(t,n))}function fE(n,e){return(n%e+e)%e}function Sl(n,e,t){return(1-t)*n+t*e}function ps(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,i,r,s,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],S=r[1],v=r[4],y=r[7],U=r[2],b=r[5],A=r[8];return s[0]=o*_+a*S+l*U,s[3]=o*m+a*v+l*b,s[6]=o*p+a*y+l*A,s[1]=c*_+u*S+f*U,s[4]=c*m+u*v+f*b,s[7]=c*p+u*y+f*A,s[2]=h*_+d*S+g*U,s[5]=h*m+d*v+g*b,s[8]=h*p+d*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ml.makeScale(e,t)),this}rotate(e){return this.premultiply(Ml.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ml.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ml=new Ke;function nm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Xs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hE(){const n=Xs("canvas");return n.style.display="block",n}const Qf={};function dE(n){n in Qf||(Qf[n]=!0,console.warn(n))}const eh=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),th=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Po={[zi]:{transfer:xa,primaries:ya,toReference:n=>n,fromReference:n=>n},[bn]:{transfer:vt,primaries:ya,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ga]:{transfer:xa,primaries:Sa,toReference:n=>n.applyMatrix3(th),fromReference:n=>n.applyMatrix3(eh)},[Jc]:{transfer:vt,primaries:Sa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(th),fromReference:n=>n.applyMatrix3(eh).convertLinearToSRGB()}},pE=new Set([zi,Ga]),ht={enabled:!0,_workingColorSpace:zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!pE.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Po[e].toReference,r=Po[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Po[n].primaries},getTransfer:function(n){return n===Ti?xa:Po[n].transfer}};function qr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function El(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Mr;class mE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mr===void 0&&(Mr=Xs("canvas")),Mr.width=e.width,Mr.height=e.height;const i=Mr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Mr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=qr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qr(t[i]/255)*255):t[i]=qr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gE=0;class im{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=lo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(bl(r[o].image)):s.push(bl(r[o]))}else s=bl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function bl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?mE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _E=0;class tn extends _r{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,i=or,r=or,s=hn,o=ar,a=Nn,l=Ui,c=tn.DEFAULT_ANISOTROPY,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=lo(),this.name="",this.source=new im(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gc:e.x=e.x-Math.floor(e.x);break;case or:e.x=e.x<0?0:1;break;case _c:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gc:e.y=e.y-Math.floor(e.y);break;case or:e.y=e.y<0?0:1;break;case _c:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Xp;tn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,i=0,r=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(d+1)/2,U=(p+1)/2,b=(u+h)/4,A=(f+_)/4,T=(g+m)/4;return v>y&&v>U?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=b/i,s=A/i):y>U?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=b/r,s=T/r):U<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),i=A/s,r=T/s),this.set(i,r,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-_)/S,this.z=(h-u)/S,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vE extends _r{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new tn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new im(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dr extends vE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class rm extends tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xE extends tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const U=Math.sqrt(v),b=Math.atan2(U,p*S);m=Math.sin(m*b)/U,a=Math.sin(a*b)/U}const y=a*S;if(l=l*m+h*y,c=c*m+d*y,u=u*m+g*y,f=f*m+_*y,m===1-a){const U=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=U,c*=U,u*=U,f*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tl.copy(this).projectOnVector(e),this.sub(Tl)}reflect(e){return this.sub(Tl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tl=new Y,nh=new pr;class co{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Sn):Sn.fromBufferAttribute(s,o),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Lo.copy(i.boundingBox)),Lo.applyMatrix4(e.matrixWorld),this.union(Lo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ms),Do.subVectors(this.max,ms),Er.subVectors(e.a,ms),br.subVectors(e.b,ms),Tr.subVectors(e.c,ms),hi.subVectors(br,Er),di.subVectors(Tr,br),qi.subVectors(Er,Tr);let t=[0,-hi.z,hi.y,0,-di.z,di.y,0,-qi.z,qi.y,hi.z,0,-hi.x,di.z,0,-di.x,qi.z,0,-qi.x,-hi.y,hi.x,0,-di.y,di.x,0,-qi.y,qi.x,0];return!Al(t,Er,br,Tr,Do)||(t=[1,0,0,0,1,0,0,0,1],!Al(t,Er,br,Tr,Do))?!1:(Io.crossVectors(hi,di),t=[Io.x,Io.y,Io.z],Al(t,Er,br,Tr,Do))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Sn=new Y,Lo=new co,Er=new Y,br=new Y,Tr=new Y,hi=new Y,di=new Y,qi=new Y,ms=new Y,Do=new Y,Io=new Y,ji=new Y;function Al(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ji.fromArray(n,s);const a=r.x*Math.abs(ji.x)+r.y*Math.abs(ji.y)+r.z*Math.abs(ji.z),l=e.dot(ji),c=t.dot(ji),u=i.dot(ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const yE=new co,gs=new Y,wl=new Y;class Wa{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):yE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gs.subVectors(e,this.center);const t=gs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(gs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gs.copy(e.center).add(wl)),this.expandByPoint(gs.copy(e.center).sub(wl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new Y,Rl=new Y,Uo=new Y,pi=new Y,Cl=new Y,No=new Y,Pl=new Y;class Qc{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Rl.copy(e).add(t).multiplyScalar(.5),Uo.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(Rl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Uo),a=pi.dot(this.direction),l=-pi.dot(Uo),c=pi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Rl).addScaledVector(Uo,h),d}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const i=qn.dot(this.direction),r=qn.dot(qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,i,r,s){Cl.subVectors(t,e),No.subVectors(i,e),Pl.crossVectors(Cl,No);let o=this.direction.dot(Pl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,e);const l=a*this.direction.dot(No.crossVectors(pi,No));if(l<0)return null;const c=a*this.direction.dot(Cl.cross(pi));if(c<0||l+c>o)return null;const u=-a*pi.dot(Pl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ar.setFromMatrixColumn(e,0).length(),s=1/Ar.setFromMatrixColumn(e,1).length(),o=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(SE,e,ME)}lookAt(e,t,i){const r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),mi.crossVectors(i,cn),mi.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),mi.crossVectors(i,cn)),mi.normalize(),Oo.crossVectors(cn,mi),r[0]=mi.x,r[4]=Oo.x,r[8]=cn.x,r[1]=mi.y,r[5]=Oo.y,r[9]=cn.y,r[2]=mi.z,r[6]=Oo.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],S=i[3],v=i[7],y=i[11],U=i[15],b=r[0],A=r[4],T=r[8],E=r[12],x=r[1],N=r[5],O=r[9],D=r[13],z=r[2],H=r[6],I=r[10],$=r[14],L=r[3],ee=r[7],te=r[11],ge=r[15];return s[0]=o*b+a*x+l*z+c*L,s[4]=o*A+a*N+l*H+c*ee,s[8]=o*T+a*O+l*I+c*te,s[12]=o*E+a*D+l*$+c*ge,s[1]=u*b+f*x+h*z+d*L,s[5]=u*A+f*N+h*H+d*ee,s[9]=u*T+f*O+h*I+d*te,s[13]=u*E+f*D+h*$+d*ge,s[2]=g*b+_*x+m*z+p*L,s[6]=g*A+_*N+m*H+p*ee,s[10]=g*T+_*O+m*I+p*te,s[14]=g*E+_*D+m*$+p*ge,s[3]=S*b+v*x+y*z+U*L,s[7]=S*A+v*N+y*H+U*ee,s[11]=S*T+v*O+y*I+U*te,s[15]=S*E+v*D+y*$+U*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+_*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,v=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,y=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,U=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,b=t*S+i*v+r*y+s*U;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=S*A,e[1]=(_*h*s-f*m*s-_*r*d+i*m*d+f*r*p-i*h*p)*A,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*p+i*l*p)*A,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*A,e[4]=v*A,e[5]=(u*m*s-g*h*s+g*r*d-t*m*d-u*r*p+t*h*p)*A,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*A,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*A,e[8]=y*A,e[9]=(g*f*s-u*_*s-g*i*d+t*_*d+u*i*p-t*f*p)*A,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*p+t*a*p)*A,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*d-t*a*d)*A,e[12]=U*A,e[13]=(u*_*r-g*f*r+g*i*h-t*_*h-u*i*m+t*f*m)*A,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*A,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,m=o*f,p=a*f,S=l*c,v=l*u,y=l*f,U=i.x,b=i.y,A=i.z;return r[0]=(1-(_+p))*U,r[1]=(d+y)*U,r[2]=(g-v)*U,r[3]=0,r[4]=(d-y)*b,r[5]=(1-(h+p))*b,r[6]=(m+S)*b,r[7]=0,r[8]=(g+v)*A,r[9]=(m-S)*A,r[10]=(1-(h+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ar.set(r[0],r[1],r[2]).length();const o=Ar.set(r[4],r[5],r[6]).length(),a=Ar.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);const c=1/s,u=1/o,f=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=f,Mn.elements[9]*=f,Mn.elements[10]*=f,t.setFromRotationMatrix(Mn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ti){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,g;if(a===ti)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ma)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ti){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,d=(i+r)*u;let g,_;if(a===ti)g=(o+s)*f,_=-2*f;else if(a===Ma)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ar=new Y,Mn=new Et,SE=new Y(0,0,0),ME=new Y(1,1,1),mi=new Y,Oo=new Y,cn=new Y,ih=new Et,rh=new pr;class kn{constructor(e=0,t=0,i=0,r=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ih.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ih,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rh.setFromEuler(this),this.setFromQuaternion(rh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class sm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let EE=0;const sh=new Y,wr=new pr,jn=new Et,Fo=new Y,_s=new Y,bE=new Y,TE=new pr,oh=new Y(1,0,0),ah=new Y(0,1,0),lh=new Y(0,0,1),ch={type:"added"},AE={type:"removed"},Rr={type:"childadded",child:null},Ll={type:"childremoved",child:null};class Dt extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new Y,t=new kn,i=new pr,r=new Y(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ke}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(oh,e)}rotateY(e){return this.rotateOnAxis(ah,e)}rotateZ(e){return this.rotateOnAxis(lh,e)}translateOnAxis(e,t){return sh.copy(e).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(oh,e)}translateY(e){return this.translateOnAxis(ah,e)}translateZ(e){return this.translateOnAxis(lh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fo.copy(e):Fo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(_s,Fo,this.up):jn.lookAt(Fo,_s,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),wr.setFromRotationMatrix(jn),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ch),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(AE),Ll.child=e,this.dispatchEvent(Ll),Ll.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ch),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,e,bE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,TE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new Y(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new Y,Yn=new Y,Dl=new Y,Kn=new Y,Cr=new Y,Pr=new Y,uh=new Y,Il=new Y,Ul=new Y,Nl=new Y;class Un{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),En.subVectors(e,t),r.cross(En);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){En.subVectors(r,t),Yn.subVectors(i,t),Dl.subVectors(e,t);const o=En.dot(En),a=En.dot(Yn),l=En.dot(Dl),c=Yn.dot(Yn),u=Yn.dot(Dl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static isFrontFacing(e,t,i,r){return En.subVectors(i,t),Yn.subVectors(e,t),En.cross(Yn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),En.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Un.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Cr.subVectors(r,i),Pr.subVectors(s,i),Il.subVectors(e,i);const l=Cr.dot(Il),c=Pr.dot(Il);if(l<=0&&c<=0)return t.copy(i);Ul.subVectors(e,r);const u=Cr.dot(Ul),f=Pr.dot(Ul);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Cr,o);Nl.subVectors(e,s);const d=Cr.dot(Nl),g=Pr.dot(Nl);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Pr,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return uh.subVectors(s,r),a=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(uh,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(i).addScaledVector(Cr,o).addScaledVector(Pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const om={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Bo={h:0,s:0,l:0};function Ol(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ht.workingColorSpace){if(e=fE(e,1),t=Jt(t,0,1),i=Jt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ol(o,s,e+1/3),this.g=Ol(o,s,e),this.b=Ol(o,s,e-1/3)}return ht.toWorkingColorSpace(this,r),this}setStyle(e,t=bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const i=om[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}copyLinearToSRGB(e){return this.r=El(e.r),this.g=El(e.g),this.b=El(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return ht.fromWorkingColorSpace(Xt.copy(this),e),Math.round(Jt(Xt.r*255,0,255))*65536+Math.round(Jt(Xt.g*255,0,255))*256+Math.round(Jt(Xt.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(Xt.copy(this),t);const i=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=bn){ht.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,i=Xt.g,r=Xt.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(Bo);const i=Sl(gi.h,Bo.h,t),r=Sl(gi.s,Bo.s,t),s=Sl(gi.l,Bo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new nt;nt.NAMES=om;let wE=0;class os extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=lo(),this.name="",this.type="Material",this.blending=$r,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hc,this.blendDst=dc,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(i.blending=this.blending),this.side!==Ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hc&&(i.blendSrc=this.blendSrc),this.blendDst!==dc&&(i.blendDst=this.blendDst),this.blendEquation!==nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==va&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class am extends os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new Y,Ho=new Ve;class Fn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return dE("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ho.fromBufferAttribute(this,t),Ho.applyMatrix3(e),this.setXY(t,Ho.x,Ho.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ps(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ps(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ps(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ps(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ps(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zf&&(e.usage=this.usage),e}}class lm extends Fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class cm extends Fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Qt extends Fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let RE=0;const gn=new Et,Fl=new Dt,Lr=new Y,un=new co,vs=new co,Nt=new Y;class Gn extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=lo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nm(e)?cm:lm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,i){return gn.makeTranslation(e,t,i),this.applyMatrix4(gn),this}scale(e,t,i){return gn.makeScale(e,t,i),this.applyMatrix4(gn),this}lookAt(e){return Fl.lookAt(e),Fl.updateMatrix(),this.applyMatrix4(Fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new co);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(un.min,vs.min),un.expandByPoint(Nt),Nt.addVectors(un.max,vs.max),un.expandByPoint(Nt)):(un.expandByPoint(vs.min),un.expandByPoint(vs.max))}un.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Nt.fromBufferAttribute(a,c),l&&(Lr.fromBufferAttribute(e,c),Nt.add(Lr)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<i.count;T++)a[T]=new Y,l[T]=new Y;const c=new Y,u=new Y,f=new Y,h=new Ve,d=new Ve,g=new Ve,_=new Y,m=new Y;function p(T,E,x){c.fromBufferAttribute(i,T),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,x),h.fromBufferAttribute(s,T),d.fromBufferAttribute(s,E),g.fromBufferAttribute(s,x),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const N=1/(d.x*g.y-g.x*d.y);isFinite(N)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(N),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(N),a[T].add(_),a[E].add(_),a[x].add(_),l[T].add(m),l[E].add(m),l[x].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let T=0,E=S.length;T<E;++T){const x=S[T],N=x.start,O=x.count;for(let D=N,z=N+O;D<z;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const v=new Y,y=new Y,U=new Y,b=new Y;function A(T){U.fromBufferAttribute(r,T),b.copy(U);const E=a[T];v.copy(E),v.sub(U.multiplyScalar(U.dot(E))).normalize(),y.crossVectors(b,E);const N=y.dot(l[T])<0?-1:1;o.setXYZW(T,v.x,v.y,v.z,N)}for(let T=0,E=S.length;T<E;++T){const x=S[T],N=x.start,O=x.count;for(let D=N,z=N+O;D<z;D+=3)A(e.getX(D+0)),A(e.getX(D+1)),A(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Fn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fh=new Et,Yi=new Qc,zo=new Wa,hh=new Y,Dr=new Y,Ir=new Y,Ur=new Y,Bl=new Y,ko=new Y,Vo=new Ve,Go=new Ve,Wo=new Ve,dh=new Y,ph=new Y,mh=new Y,$o=new Y,Xo=new Y;class wn extends Dt{constructor(e=new Gn,t=new am){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ko.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Bl.fromBufferAttribute(f,e),o?ko.addScaledVector(Bl,u):ko.addScaledVector(Bl.sub(t),u))}t.add(ko)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(s),Yi.copy(e.ray).recast(e.near),!(zo.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(zo,hh)===null||Yi.origin.distanceToSquared(hh)>(e.far-e.near)**2))&&(fh.copy(s).invert(),Yi.copy(e.ray).applyMatrix4(fh),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,U=v;y<U;y+=3){const b=a.getX(y),A=a.getX(y+1),T=a.getX(y+2);r=qo(this,p,e,i,c,u,f,b,A,T),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=qo(this,o,e,i,c,u,f,S,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,U=v;y<U;y+=3){const b=y,A=y+1,T=y+2;r=qo(this,p,e,i,c,u,f,b,A,T),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=m,v=m+1,y=m+2;r=qo(this,o,e,i,c,u,f,S,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function CE(n,e,t,i,r,s,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ii,a),l===null)return null;Xo.copy(a),Xo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Xo);return c<t.near||c>t.far?null:{distance:c,point:Xo.clone(),object:n}}function qo(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Dr),n.getVertexPosition(l,Ir),n.getVertexPosition(c,Ur);const u=CE(n,e,t,i,Dr,Ir,Ur,$o);if(u){r&&(Vo.fromBufferAttribute(r,a),Go.fromBufferAttribute(r,l),Wo.fromBufferAttribute(r,c),u.uv=Un.getInterpolation($o,Dr,Ir,Ur,Vo,Go,Wo,new Ve)),s&&(Vo.fromBufferAttribute(s,a),Go.fromBufferAttribute(s,l),Wo.fromBufferAttribute(s,c),u.uv1=Un.getInterpolation($o,Dr,Ir,Ur,Vo,Go,Wo,new Ve)),o&&(dh.fromBufferAttribute(o,a),ph.fromBufferAttribute(o,l),mh.fromBufferAttribute(o,c),u.normal=Un.getInterpolation($o,Dr,Ir,Ur,dh,ph,mh,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new Y,materialIndex:0};Un.getNormal(Dr,Ir,Ur,f.normal),u.face=f}return u}class uo extends Gn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(f,2));function g(_,m,p,S,v,y,U,b,A,T,E){const x=y/A,N=U/T,O=y/2,D=U/2,z=b/2,H=A+1,I=T+1;let $=0,L=0;const ee=new Y;for(let te=0;te<I;te++){const ge=te*N-D;for(let Me=0;Me<H;Me++){const De=Me*x-O;ee[_]=De*S,ee[m]=ge*v,ee[p]=z,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[p]=b>0?1:-1,u.push(ee.x,ee.y,ee.z),f.push(Me/A),f.push(1-te/T),$+=1}}for(let te=0;te<T;te++)for(let ge=0;ge<A;ge++){const Me=h+ge+H*te,De=h+ge+H*(te+1),J=h+(ge+1)+H*(te+1),de=h+(ge+1)+H*te;l.push(Me,De,de),l.push(De,J,de),L+=6}a.addGroup(d,L,E),d+=L,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Zt(n){const e={};for(let t=0;t<n.length;t++){const i=ts(n[t]);for(const r in i)e[r]=i[r]}return e}function PE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function um(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const LE={clone:ts,merge:Zt};var DE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DE,this.fragmentShader=IE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=PE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class fm extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new Y,gh=new Ve,_h=new Ve;class kt extends fm{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ea*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ea*2*Math.atan(Math.tan(yl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_i.x,_i.y).multiplyScalar(-e/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_i.x,_i.y).multiplyScalar(-e/_i.z)}getViewSize(e,t){return this.getViewBounds(e,gh,_h),t.subVectors(_h,gh)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Nr=-90,Or=1;class UE extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kt(Nr,Or,e,t);r.layers=this.layers,this.add(r);const s=new kt(Nr,Or,e,t);s.layers=this.layers,this.add(s);const o=new kt(Nr,Or,e,t);o.layers=this.layers,this.add(o);const a=new kt(Nr,Or,e,t);a.layers=this.layers,this.add(a);const l=new kt(Nr,Or,e,t);l.layers=this.layers,this.add(l);const c=new kt(Nr,Or,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class hm extends tn{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Jr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class NE extends dr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new hm(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new uo(5,5,5),s=new Ni({name:"CubemapFromEquirect",uniforms:ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Ci});s.uniforms.tEquirect.value=t;const o=new wn(r,s),a=t.minFilter;return t.minFilter===ar&&(t.minFilter=hn),new UE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Hl=new Y,OE=new Y,FE=new Ke;class Ei{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Hl.subVectors(i,t).cross(OE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Hl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||FE.getNormalMatrix(e),r=this.coplanarPoint(Hl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ki=new Wa,jo=new Y;class eu{constructor(e=new Ei,t=new Ei,i=new Ei,r=new Ei,s=new Ei,o=new Ei){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ti){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],S=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,m-d,y-p).normalize(),i[1].setComponents(l+s,h+c,m+d,y+p).normalize(),i[2].setComponents(l+o,h+u,m+g,y+S).normalize(),i[3].setComponents(l-o,h-u,m-g,y-S).normalize(),i[4].setComponents(l-a,h-f,m-_,y-v).normalize(),t===ti)i[5].setComponents(l+a,h+f,m+_,y+v).normalize();else if(t===Ma)i[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(jo.x=r.normal.x>0?e.max.x:e.min.x,jo.y=r.normal.y>0?e.max.y:e.min.y,jo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(jo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dm(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function BE(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(n.bindBuffer(c,a),f.count===-1&&h.length===0&&n.bufferSubData(c,0,u),h.length!==0){for(let d=0,g=h.length;d<g;d++){const _=h[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class fo extends Gn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*h-o;for(let v=0;v<c;v++){const y=v*f-s;g.push(y,-S,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const v=S+c*p,y=S+c*(p+1),U=S+1+c*(p+1),b=S+1+c*p;d.push(v,y,b),d.push(y,U,b)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.width,e.height,e.widthSegments,e.heightSegments)}}var HE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$E=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,XE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,YE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,JE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,QE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ib=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ob=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ab=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ub=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,db=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mb="gl_FragColor = linearToOutputTexel( gl_FragColor );",gb=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,_b=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ab=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Lb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Db=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ib=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ub=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ob=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$b=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,eT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,tT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,nT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_T=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,ST=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,MT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ET=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,AT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,RT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,DT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,IT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,UT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,FT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$T=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,XT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,QT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_A=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:HE,alphahash_pars_fragment:zE,alphamap_fragment:kE,alphamap_pars_fragment:VE,alphatest_fragment:GE,alphatest_pars_fragment:WE,aomap_fragment:$E,aomap_pars_fragment:XE,batching_pars_vertex:qE,batching_vertex:jE,begin_vertex:YE,beginnormal_vertex:KE,bsdfs:ZE,iridescence_fragment:JE,bumpmap_pars_fragment:QE,clipping_planes_fragment:eb,clipping_planes_pars_fragment:tb,clipping_planes_pars_vertex:nb,clipping_planes_vertex:ib,color_fragment:rb,color_pars_fragment:sb,color_pars_vertex:ob,color_vertex:ab,common:lb,cube_uv_reflection_fragment:cb,defaultnormal_vertex:ub,displacementmap_pars_vertex:fb,displacementmap_vertex:hb,emissivemap_fragment:db,emissivemap_pars_fragment:pb,colorspace_fragment:mb,colorspace_pars_fragment:gb,envmap_fragment:_b,envmap_common_pars_fragment:vb,envmap_pars_fragment:xb,envmap_pars_vertex:yb,envmap_physical_pars_fragment:Lb,envmap_vertex:Sb,fog_vertex:Mb,fog_pars_vertex:Eb,fog_fragment:bb,fog_pars_fragment:Tb,gradientmap_pars_fragment:Ab,lightmap_pars_fragment:wb,lights_lambert_fragment:Rb,lights_lambert_pars_fragment:Cb,lights_pars_begin:Pb,lights_toon_fragment:Db,lights_toon_pars_fragment:Ib,lights_phong_fragment:Ub,lights_phong_pars_fragment:Nb,lights_physical_fragment:Ob,lights_physical_pars_fragment:Fb,lights_fragment_begin:Bb,lights_fragment_maps:Hb,lights_fragment_end:zb,logdepthbuf_fragment:kb,logdepthbuf_pars_fragment:Vb,logdepthbuf_pars_vertex:Gb,logdepthbuf_vertex:Wb,map_fragment:$b,map_pars_fragment:Xb,map_particle_fragment:qb,map_particle_pars_fragment:jb,metalnessmap_fragment:Yb,metalnessmap_pars_fragment:Kb,morphinstance_vertex:Zb,morphcolor_vertex:Jb,morphnormal_vertex:Qb,morphtarget_pars_vertex:eT,morphtarget_vertex:tT,normal_fragment_begin:nT,normal_fragment_maps:iT,normal_pars_fragment:rT,normal_pars_vertex:sT,normal_vertex:oT,normalmap_pars_fragment:aT,clearcoat_normal_fragment_begin:lT,clearcoat_normal_fragment_maps:cT,clearcoat_pars_fragment:uT,iridescence_pars_fragment:fT,opaque_fragment:hT,packing:dT,premultiplied_alpha_fragment:pT,project_vertex:mT,dithering_fragment:gT,dithering_pars_fragment:_T,roughnessmap_fragment:vT,roughnessmap_pars_fragment:xT,shadowmap_pars_fragment:yT,shadowmap_pars_vertex:ST,shadowmap_vertex:MT,shadowmask_pars_fragment:ET,skinbase_vertex:bT,skinning_pars_vertex:TT,skinning_vertex:AT,skinnormal_vertex:wT,specularmap_fragment:RT,specularmap_pars_fragment:CT,tonemapping_fragment:PT,tonemapping_pars_fragment:LT,transmission_fragment:DT,transmission_pars_fragment:IT,uv_pars_fragment:UT,uv_pars_vertex:NT,uv_vertex:OT,worldpos_vertex:FT,background_vert:BT,background_frag:HT,backgroundCube_vert:zT,backgroundCube_frag:kT,cube_vert:VT,cube_frag:GT,depth_vert:WT,depth_frag:$T,distanceRGBA_vert:XT,distanceRGBA_frag:qT,equirect_vert:jT,equirect_frag:YT,linedashed_vert:KT,linedashed_frag:ZT,meshbasic_vert:JT,meshbasic_frag:QT,meshlambert_vert:eA,meshlambert_frag:tA,meshmatcap_vert:nA,meshmatcap_frag:iA,meshnormal_vert:rA,meshnormal_frag:sA,meshphong_vert:oA,meshphong_frag:aA,meshphysical_vert:lA,meshphysical_frag:cA,meshtoon_vert:uA,meshtoon_frag:fA,points_vert:hA,points_frag:dA,shadow_vert:pA,shadow_frag:mA,sprite_vert:gA,sprite_frag:_A},be={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Dn={basic:{uniforms:Zt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Zt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Zt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Zt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Zt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Zt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Zt([be.points,be.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Zt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Zt([be.common,be.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Zt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Zt([be.sprite,be.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Zt([be.common,be.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Zt([be.lights,be.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Dn.physical={uniforms:Zt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Yo={r:0,b:0,g:0},Zi=new kn,vA=new Et;function xA(n,e,t,i,r,s,o){const a=new nt(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function _(S){let v=!1;const y=g(S);y===null?p(a,l):y&&y.isColor&&(p(y,1),v=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil)}function m(S,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===ka)?(u===void 0&&(u=new wn(new uo(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:ts(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Zi.copy(v.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vA.makeRotationFromEuler(Zi)),u.material.toneMapped=ht.getTransfer(y.colorSpace)!==vt,(f!==y||h!==y.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,d=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new wn(new fo(2,2),new Ni({name:"BackgroundMaterial",uniforms:ts(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ht.getTransfer(y.colorSpace)!==vt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,d=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,v){S.getRGB(Yo,um(n)),i.buffers.color.setClear(Yo.r,Yo.g,Yo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:_,addToRenderList:m}}function yA(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(x,N,O,D,z){let H=!1;const I=f(D,O,N);s!==I&&(s=I,c(s.object)),H=d(x,D,O,z),H&&g(x,D,O,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(x,N,O,D),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function f(x,N,O){const D=O.wireframe===!0;let z=i[x.id];z===void 0&&(z={},i[x.id]=z);let H=z[N.id];H===void 0&&(H={},z[N.id]=H);let I=H[D];return I===void 0&&(I=h(l()),H[D]=I),I}function h(x){const N=[],O=[],D=[];for(let z=0;z<t;z++)N[z]=0,O[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:D,object:x,attributes:{},index:null}}function d(x,N,O,D){const z=s.attributes,H=N.attributes;let I=0;const $=O.getAttributes();for(const L in $)if($[L].location>=0){const te=z[L];let ge=H[L];if(ge===void 0&&(L==="instanceMatrix"&&x.instanceMatrix&&(ge=x.instanceMatrix),L==="instanceColor"&&x.instanceColor&&(ge=x.instanceColor)),te===void 0||te.attribute!==ge||ge&&te.data!==ge.data)return!0;I++}return s.attributesNum!==I||s.index!==D}function g(x,N,O,D){const z={},H=N.attributes;let I=0;const $=O.getAttributes();for(const L in $)if($[L].location>=0){let te=H[L];te===void 0&&(L==="instanceMatrix"&&x.instanceMatrix&&(te=x.instanceMatrix),L==="instanceColor"&&x.instanceColor&&(te=x.instanceColor));const ge={};ge.attribute=te,te&&te.data&&(ge.data=te.data),z[L]=ge,I++}s.attributes=z,s.attributesNum=I,s.index=D}function _(){const x=s.newAttributes;for(let N=0,O=x.length;N<O;N++)x[N]=0}function m(x){p(x,0)}function p(x,N){const O=s.newAttributes,D=s.enabledAttributes,z=s.attributeDivisors;O[x]=1,D[x]===0&&(n.enableVertexAttribArray(x),D[x]=1),z[x]!==N&&(n.vertexAttribDivisor(x,N),z[x]=N)}function S(){const x=s.newAttributes,N=s.enabledAttributes;for(let O=0,D=N.length;O<D;O++)N[O]!==x[O]&&(n.disableVertexAttribArray(O),N[O]=0)}function v(x,N,O,D,z,H,I){I===!0?n.vertexAttribIPointer(x,N,O,z,H):n.vertexAttribPointer(x,N,O,D,z,H)}function y(x,N,O,D){_();const z=D.attributes,H=O.getAttributes(),I=N.defaultAttributeValues;for(const $ in H){const L=H[$];if(L.location>=0){let ee=z[$];if(ee===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(ee=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(ee=x.instanceColor)),ee!==void 0){const te=ee.normalized,ge=ee.itemSize,Me=e.get(ee);if(Me===void 0)continue;const De=Me.buffer,J=Me.type,de=Me.bytesPerElement,_e=J===n.INT||J===n.UNSIGNED_INT||ee.gpuType===jp;if(ee.isInterleavedBufferAttribute){const W=ee.data,ue=W.stride,le=ee.offset;if(W.isInstancedInterleavedBuffer){for(let F=0;F<L.locationSize;F++)p(L.location+F,W.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let F=0;F<L.locationSize;F++)m(L.location+F);n.bindBuffer(n.ARRAY_BUFFER,De);for(let F=0;F<L.locationSize;F++)v(L.location+F,ge/L.locationSize,J,te,ue*de,(le+ge/L.locationSize*F)*de,_e)}else{if(ee.isInstancedBufferAttribute){for(let W=0;W<L.locationSize;W++)p(L.location+W,ee.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let W=0;W<L.locationSize;W++)m(L.location+W);n.bindBuffer(n.ARRAY_BUFFER,De);for(let W=0;W<L.locationSize;W++)v(L.location+W,ge/L.locationSize,J,te,ge*de,ge/L.locationSize*W*de,_e)}}else if(I!==void 0){const te=I[$];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(L.location,te);break;case 3:n.vertexAttrib3fv(L.location,te);break;case 4:n.vertexAttrib4fv(L.location,te);break;default:n.vertexAttrib1fv(L.location,te)}}}}S()}function U(){T();for(const x in i){const N=i[x];for(const O in N){const D=N[O];for(const z in D)u(D[z].object),delete D[z];delete N[O]}delete i[x]}}function b(x){if(i[x.id]===void 0)return;const N=i[x.id];for(const O in N){const D=N[O];for(const z in D)u(D[z].object),delete D[z];delete N[O]}delete i[x.id]}function A(x){for(const N in i){const O=i[N];if(O[x.id]===void 0)continue;const D=O[x.id];for(const z in D)u(D[z].object),delete D[z];delete O[x.id]}}function T(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:E,dispose:U,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function SA(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let d=0;d<f;d++)this.render(c[d],u[d]);else{h.multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,i,1)}}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];for(let _=0;_<h.length;_++)t.update(g,i,h[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function MA(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==Nn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const A=b===Va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Ui&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Ai&&!A)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,U=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:y,maxSamples:U}}function EA(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ei,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const S=s?0:i,v=S*4;let y=p.clippingState||null;l.value=y,y=u(g,h,v,d);for(let U=0;U!==v;++U)y[U]=t[U];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=d;v!==_;++v,y+=4)o.copy(f[v]).applyMatrix4(S,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function bA(n){let e=new WeakMap;function t(o,a){return a===pc?o.mapping=Jr:a===mc&&(o.mapping=Qr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===pc||a===mc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new NE(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ms extends fm{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hr=4,vh=[.125,.215,.35,.446,.526,.582],ir=20,zl=new Ms,xh=new nt;let kl=null,Vl=0,Gl=0,Wl=!1;const er=(1+Math.sqrt(5))/2,Fr=1/er,yh=[new Y(-er,Fr,0),new Y(er,Fr,0),new Y(-Fr,0,er),new Y(Fr,0,er),new Y(0,er,-Fr),new Y(0,er,Fr),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class Sh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){kl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kl,Vl,Gl),this._renderer.xr.enabled=Wl,e.scissorTest=!1,Ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jr||e.mapping===Qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Va,format:Nn,colorSpace:zi,depthBuffer:!1},r=Mh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mh(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TA(s)),this._blurMaterial=AA(s,e,t)}return r}_compileMaterial(e){const t=new wn(this._lodPlanes[0],e);this._renderer.compile(t,zl)}_sceneToCubeUV(e,t,i,r){const a=new kt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(xh),u.toneMapping=Pi,u.autoClear=!1;const d=new am({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new wn(new uo,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(xh),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Ko(r,S*v,p>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Jr||e.mapping===Qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new wn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ko(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,zl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=yh[(r-s-1)%yh.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new wn(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ir-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):ir;m>ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ir}`);const p=[];let S=0;for(let A=0;A<ir;++A){const T=A/_,E=Math.exp(-T*T/2);p.push(E),A===0?S+=E:A<m&&(S+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const y=this._sizeLods[r],U=3*y*(r>v-Hr?r-v+Hr:0),b=4*(this._cubeSize-y);Ko(t,U,b,3*y,2*y),l.setRenderTarget(t),l.render(f,zl)}}function TA(n){const e=[],t=[],i=[];let r=n;const s=n-Hr+1+vh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Hr?l=vh[o-n+Hr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),v=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let b=0;b<d;b++){const A=b%3*2/3-1,T=b>2?0:-1,E=[A,T,0,A+2/3,T,0,A+2/3,T+1,0,A,T,0,A+2/3,T+1,0,A,T+1,0];S.set(E,_*g*b),v.set(h,m*g*b);const x=[b,b,b,b,b,b];y.set(x,p*g*b)}const U=new Gn;U.setAttribute("position",new Fn(S,_)),U.setAttribute("uv",new Fn(v,m)),U.setAttribute("faceIndex",new Fn(y,p)),e.push(U),r>Hr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Mh(n,e,t){const i=new dr(n,e,t);return i.texture.mapping=ka,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ko(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function AA(n,e,t){const i=new Float32Array(ir),r=new Y(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Eh(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function bh(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function tu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wA(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===pc||l===mc,u=l===Jr||l===Qr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Sh(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Sh(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function RA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function CA(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let v=0,y=S.length;v<y;v+=3){const U=S[v+0],b=S[v+1],A=S[v+2];h.push(U,b,b,A,A,U)}}else if(g!==void 0){const S=g.array;_=g.version;for(let v=0,y=S.length/3-1;v<y;v+=3){const U=v+0,b=v+1,A=v+2;h.push(U,b,b,A,A,U)}}else return;const m=new(nm(h)?cm:lm)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function PA(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),t.update(d,i,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,h*o,g),t.update(d,i,g))}function u(h,d,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(h[m]/o,d[m]);else{_.multiDrawElementsWEBGL(i,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S];for(let S=0;S<_.length;S++)t.update(p,i,_[S])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function LA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function DA(n,e,t){const i=new WeakMap,r=new Bt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let E=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;d===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let y=a.attributes.position.count*v,U=1;y>e.maxTextureSize&&(U=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const b=new Float32Array(y*U*4*f),A=new rm(b,y,U,f);A.type=Ai,A.needsUpdate=!0;const T=v*4;for(let x=0;x<f;x++){const N=m[x],O=p[x],D=S[x],z=y*U*4*x;for(let H=0;H<N.count;H++){const I=H*T;d===!0&&(r.fromBufferAttribute(N,H),b[z+I+0]=r.x,b[z+I+1]=r.y,b[z+I+2]=r.z,b[z+I+3]=0),g===!0&&(r.fromBufferAttribute(O,H),b[z+I+4]=r.x,b[z+I+5]=r.y,b[z+I+6]=r.z,b[z+I+7]=0),_===!0&&(r.fromBufferAttribute(D,H),b[z+I+8]=r.x,b[z+I+9]=r.y,b[z+I+10]=r.z,b[z+I+11]=D.itemSize===4?r.w:1)}}h={count:f,texture:A,size:new Ve(y,U)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function IA(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class pm extends tn{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Xr,u!==Xr&&u!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Xr&&(i=es),i===void 0&&u===$s&&(i=ao),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const mm=new tn,gm=new pm(1,1);gm.compareFunction=tm;const _m=new rm,vm=new xE,xm=new hm,Th=[],Ah=[],wh=new Float32Array(16),Rh=new Float32Array(9),Ch=new Float32Array(4);function as(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Th[r];if(s===void 0&&(s=new Float32Array(r),Th[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function It(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $a(n,e){let t=Ah[e];t===void 0&&(t=new Int32Array(e),Ah[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function UA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function NA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function OA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function FA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function BA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,i))return;Ch.set(i),n.uniformMatrix2fv(this.addr,!1,Ch),Ut(t,i)}}function HA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,i))return;Rh.set(i),n.uniformMatrix3fv(this.addr,!1,Rh),Ut(t,i)}}function zA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,i))return;wh.set(i),n.uniformMatrix4fv(this.addr,!1,wh),Ut(t,i)}}function kA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function VA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function GA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function WA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function $A(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function XA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function qA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function jA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function YA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?gm:mm;t.setTexture2D(e||s,r)}function KA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||vm,r)}function ZA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||xm,r)}function JA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||_m,r)}function QA(n){switch(n){case 5126:return UA;case 35664:return NA;case 35665:return OA;case 35666:return FA;case 35674:return BA;case 35675:return HA;case 35676:return zA;case 5124:case 35670:return kA;case 35667:case 35671:return VA;case 35668:case 35672:return GA;case 35669:case 35673:return WA;case 5125:return $A;case 36294:return XA;case 36295:return qA;case 36296:return jA;case 35678:case 36198:case 36298:case 36306:case 35682:return YA;case 35679:case 36299:case 36307:return KA;case 35680:case 36300:case 36308:case 36293:return ZA;case 36289:case 36303:case 36311:case 36292:return JA}}function ew(n,e){n.uniform1fv(this.addr,e)}function tw(n,e){const t=as(e,this.size,2);n.uniform2fv(this.addr,t)}function nw(n,e){const t=as(e,this.size,3);n.uniform3fv(this.addr,t)}function iw(n,e){const t=as(e,this.size,4);n.uniform4fv(this.addr,t)}function rw(n,e){const t=as(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function sw(n,e){const t=as(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ow(n,e){const t=as(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function aw(n,e){n.uniform1iv(this.addr,e)}function lw(n,e){n.uniform2iv(this.addr,e)}function cw(n,e){n.uniform3iv(this.addr,e)}function uw(n,e){n.uniform4iv(this.addr,e)}function fw(n,e){n.uniform1uiv(this.addr,e)}function hw(n,e){n.uniform2uiv(this.addr,e)}function dw(n,e){n.uniform3uiv(this.addr,e)}function pw(n,e){n.uniform4uiv(this.addr,e)}function mw(n,e,t){const i=this.cache,r=e.length,s=$a(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||mm,s[o])}function gw(n,e,t){const i=this.cache,r=e.length,s=$a(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||vm,s[o])}function _w(n,e,t){const i=this.cache,r=e.length,s=$a(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||xm,s[o])}function vw(n,e,t){const i=this.cache,r=e.length,s=$a(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||_m,s[o])}function xw(n){switch(n){case 5126:return ew;case 35664:return tw;case 35665:return nw;case 35666:return iw;case 35674:return rw;case 35675:return sw;case 35676:return ow;case 5124:case 35670:return aw;case 35667:case 35671:return lw;case 35668:case 35672:return cw;case 35669:case 35673:return uw;case 5125:return fw;case 36294:return hw;case 36295:return dw;case 36296:return pw;case 35678:case 36198:case 36298:case 36306:case 35682:return mw;case 35679:case 36299:case 36307:return gw;case 35680:case 36300:case 36308:case 36293:return _w;case 36289:case 36303:case 36311:case 36292:return vw}}class yw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=QA(t.type)}}class Sw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xw(t.type)}}class Mw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const $l=/(\w+)(\])?(\[|\.)?/g;function Ph(n,e){n.seq.push(e),n.map[e.id]=e}function Ew(n,e,t){const i=n.name,r=i.length;for($l.lastIndex=0;;){const s=$l.exec(i),o=$l.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ph(t,c===void 0?new yw(a,n,e):new Sw(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Mw(a),Ph(t,f)),t=f}}}class oa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Ew(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Lh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const bw=37297;let Tw=0;function Aw(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function ww(n){const e=ht.getPrimaries(ht.workingColorSpace),t=ht.getPrimaries(n);let i;switch(e===t?i="":e===Sa&&t===ya?i="LinearDisplayP3ToLinearSRGB":e===ya&&t===Sa&&(i="LinearSRGBToLinearDisplayP3"),n){case zi:case Ga:return[i,"LinearTransferOETF"];case bn:case Jc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Dh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Aw(n.getShaderSource(e),o)}else return r}function Rw(n,e){const t=ww(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Cw(n,e){let t;switch(e){case BM:t="Linear";break;case HM:t="Reinhard";break;case zM:t="OptimizedCineon";break;case $p:t="ACESFilmic";break;case VM:t="AgX";break;case GM:t="Neutral";break;case kM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Pw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function Lw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Dw(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Es(n){return n!==""}function Ih(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Iw=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(n){return n.replace(Iw,Nw)}const Uw=new Map;function Nw(n,e){let t=Ye[e];if(t===void 0){const i=Uw.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vc(t)}const Ow=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nh(n){return n.replace(Ow,Fw)}function Fw(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Oh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Bw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Gp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Wp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function Hw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Jr:case Qr:e="ENVMAP_TYPE_CUBE";break;case ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Qr:e="ENVMAP_MODE_REFRACTION";break}return e}function kw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zc:e="ENVMAP_BLENDING_MULTIPLY";break;case OM:e="ENVMAP_BLENDING_MIX";break;case FM:e="ENVMAP_BLENDING_ADD";break}return e}function Vw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Gw(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Bw(t),c=Hw(t),u=zw(t),f=kw(t),h=Vw(t),d=Pw(t),g=Lw(s),_=r.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Es).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Es).join(`
`),p.length>0&&(p+=`
`)):(m=[Oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),p=[Oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Pi?Cw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Rw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Es).join(`
`)),o=vc(o),o=Ih(o,t),o=Uh(o,t),a=vc(a),a=Ih(a,t),a=Uh(a,t),o=Nh(o),a=Nh(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Jf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=S+m+o,y=S+p+a,U=Lh(r,r.VERTEX_SHADER,v),b=Lh(r,r.FRAGMENT_SHADER,y);r.attachShader(_,U),r.attachShader(_,b),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(N){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(_).trim(),D=r.getShaderInfoLog(U).trim(),z=r.getShaderInfoLog(b).trim();let H=!0,I=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,U,b);else{const $=Dh(r,U,"vertex"),L=Dh(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+O+`
`+$+`
`+L)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(D===""||z==="")&&(I=!1);I&&(N.diagnostics={runnable:H,programLog:O,vertexShader:{log:D,prefix:m},fragmentShader:{log:z,prefix:p}})}r.deleteShader(U),r.deleteShader(b),T=new oa(r,_),E=Dw(r,_)}let T;this.getUniforms=function(){return T===void 0&&A(this),T};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(_,bw)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Tw++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=b,this}let Ww=0;class $w{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Xw(e),t.set(e,i)),i}}class Xw{constructor(e){this.id=Ww++,this.code=e,this.usedTimes=0}}function qw(n,e,t,i,r,s,o){const a=new sm,l=new $w,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,x,N,O,D){const z=O.fog,H=D.geometry,I=E.isMeshStandardMaterial?O.environment:null,$=(E.isMeshStandardMaterial?t:e).get(E.envMap||I),L=$&&$.mapping===ka?$.image.height:null,ee=g[E.type];E.precision!==null&&(d=r.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const te=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ge=te!==void 0?te.length:0;let Me=0;H.morphAttributes.position!==void 0&&(Me=1),H.morphAttributes.normal!==void 0&&(Me=2),H.morphAttributes.color!==void 0&&(Me=3);let De,J,de,_e;if(ee){const Je=Dn[ee];De=Je.vertexShader,J=Je.fragmentShader}else De=E.vertexShader,J=E.fragmentShader,l.update(E),de=l.getVertexShaderID(E),_e=l.getFragmentShaderID(E);const W=n.getRenderTarget(),ue=D.isInstancedMesh===!0,le=D.isBatchedMesh===!0,F=!!E.map,Ae=!!E.matcap,ve=!!$,C=!!E.aoMap,P=!!E.lightMap,X=!!E.bumpMap,Z=!!E.normalMap,K=!!E.displacementMap,fe=!!E.emissiveMap,w=!!E.metalnessMap,M=!!E.roughnessMap,k=E.anisotropy>0,V=E.clearcoat>0,j=E.dispersion>0,Q=E.iridescence>0,pe=E.sheen>0,ce=E.transmission>0,he=k&&!!E.anisotropyMap,we=V&&!!E.clearcoatMap,me=V&&!!E.clearcoatNormalMap,Te=V&&!!E.clearcoatRoughnessMap,Be=Q&&!!E.iridescenceMap,Ie=Q&&!!E.iridescenceThicknessMap,Ce=pe&&!!E.sheenColorMap,He=pe&&!!E.sheenRoughnessMap,$e=!!E.specularMap,G=!!E.specularColorMap,ae=!!E.specularIntensityMap,B=ce&&!!E.transmissionMap,se=ce&&!!E.thicknessMap,oe=!!E.gradientMap,Se=!!E.alphaMap,Ee=E.alphaTest>0,Qe=!!E.alphaHash,ft=!!E.extensions;let it=Pi;E.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(it=n.toneMapping);const _t={shaderID:ee,shaderType:E.type,shaderName:E.name,vertexShader:De,fragmentShader:J,defines:E.defines,customVertexShaderID:de,customFragmentShaderID:_e,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:le,instancing:ue,instancingColor:ue&&D.instanceColor!==null,instancingMorph:ue&&D.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:W===null?n.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:zi,alphaToCoverage:!!E.alphaToCoverage,map:F,matcap:Ae,envMap:ve,envMapMode:ve&&$.mapping,envMapCubeUVHeight:L,aoMap:C,lightMap:P,bumpMap:X,normalMap:Z,displacementMap:h&&K,emissiveMap:fe,normalMapObjectSpace:Z&&E.normalMapType===iE,normalMapTangentSpace:Z&&E.normalMapType===em,metalnessMap:w,roughnessMap:M,anisotropy:k,anisotropyMap:he,clearcoat:V,clearcoatMap:we,clearcoatNormalMap:me,clearcoatRoughnessMap:Te,dispersion:j,iridescence:Q,iridescenceMap:Be,iridescenceThicknessMap:Ie,sheen:pe,sheenColorMap:Ce,sheenRoughnessMap:He,specularMap:$e,specularColorMap:G,specularIntensityMap:ae,transmission:ce,transmissionMap:B,thicknessMap:se,gradientMap:oe,opaque:E.transparent===!1&&E.blending===$r&&E.alphaToCoverage===!1,alphaMap:Se,alphaTest:Ee,alphaHash:Qe,combine:E.combine,mapUv:F&&_(E.map.channel),aoMapUv:C&&_(E.aoMap.channel),lightMapUv:P&&_(E.lightMap.channel),bumpMapUv:X&&_(E.bumpMap.channel),normalMapUv:Z&&_(E.normalMap.channel),displacementMapUv:K&&_(E.displacementMap.channel),emissiveMapUv:fe&&_(E.emissiveMap.channel),metalnessMapUv:w&&_(E.metalnessMap.channel),roughnessMapUv:M&&_(E.roughnessMap.channel),anisotropyMapUv:he&&_(E.anisotropyMap.channel),clearcoatMapUv:we&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:me&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:He&&_(E.sheenRoughnessMap.channel),specularMapUv:$e&&_(E.specularMap.channel),specularColorMapUv:G&&_(E.specularColorMap.channel),specularIntensityMapUv:ae&&_(E.specularIntensityMap.channel),transmissionMapUv:B&&_(E.transmissionMap.channel),thicknessMapUv:se&&_(E.thicknessMap.channel),alphaMapUv:Se&&_(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Z||k),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!H.attributes.uv&&(F||Se),fog:!!z,useFog:E.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:D.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Me,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:it,useLegacyLights:n._useLegacyLights,decodeVideoTexture:F&&E.map.isVideoTexture===!0&&ht.getTransfer(E.map.colorSpace)===vt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ei,flipSided:E.side===on,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ft&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ft&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function p(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const N in E.defines)x.push(N),x.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(S(x,E),v(x,E),x.push(n.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function S(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function v(E,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),E.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.useLegacyLights&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.alphaToCoverage&&a.enable(20),E.push(a.mask)}function y(E){const x=g[E.type];let N;if(x){const O=Dn[x];N=LE.clone(O.uniforms)}else N=E.uniforms;return N}function U(E,x){let N;for(let O=0,D=u.length;O<D;O++){const z=u[O];if(z.cacheKey===x){N=z,++N.usedTimes;break}}return N===void 0&&(N=new Gw(n,x,E,s),u.push(N)),N}function b(E){if(--E.usedTimes===0){const x=u.indexOf(E);u[x]=u[u.length-1],u.pop(),E.destroy()}}function A(E){l.remove(E)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:U,releaseProgram:b,releaseShaderCache:A,programs:u,dispose:T}}function jw(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Yw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Fh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Bh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,d,g,_,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||Yw),i.length>1&&i.sort(h||Fh),r.length>1&&r.sort(h||Fh)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Kw(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Bh,n.set(i,[o])):r>=s.length?(o=new Bh,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Zw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new nt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function Jw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Qw=0;function e1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function t1(n){const e=new Zw,t=Jw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const r=new Y,s=new Et,o=new Et;function a(c,u){let f=0,h=0,d=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let g=0,_=0,m=0,p=0,S=0,v=0,y=0,U=0,b=0,A=0,T=0;c.sort(e1);const E=u===!0?Math.PI:1;for(let N=0,O=c.length;N<O;N++){const D=c[N],z=D.color,H=D.intensity,I=D.distance,$=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=z.r*H*E,h+=z.g*H*E,d+=z.b*H*E;else if(D.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(D.sh.coefficients[L],H);T++}else if(D.isDirectionalLight){const L=e.get(D);if(L.color.copy(D.color).multiplyScalar(D.intensity*E),D.castShadow){const ee=D.shadow,te=t.get(D);te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,i.directionalShadow[g]=te,i.directionalShadowMap[g]=$,i.directionalShadowMatrix[g]=D.shadow.matrix,v++}i.directional[g]=L,g++}else if(D.isSpotLight){const L=e.get(D);L.position.setFromMatrixPosition(D.matrixWorld),L.color.copy(z).multiplyScalar(H*E),L.distance=I,L.coneCos=Math.cos(D.angle),L.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),L.decay=D.decay,i.spot[m]=L;const ee=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,ee.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[m]=ee.matrix,D.castShadow){const te=t.get(D);te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,i.spotShadow[m]=te,i.spotShadowMap[m]=$,U++}m++}else if(D.isRectAreaLight){const L=e.get(D);L.color.copy(z).multiplyScalar(H),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=L,p++}else if(D.isPointLight){const L=e.get(D);if(L.color.copy(D.color).multiplyScalar(D.intensity*E),L.distance=D.distance,L.decay=D.decay,D.castShadow){const ee=D.shadow,te=t.get(D);te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,te.shadowCameraNear=ee.camera.near,te.shadowCameraFar=ee.camera.far,i.pointShadow[_]=te,i.pointShadowMap[_]=$,i.pointShadowMatrix[_]=D.shadow.matrix,y++}i.point[_]=L,_++}else if(D.isHemisphereLight){const L=e.get(D);L.skyColor.copy(D.color).multiplyScalar(H*E),L.groundColor.copy(D.groundColor).multiplyScalar(H*E),i.hemi[S]=L,S++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const x=i.hash;(x.directionalLength!==g||x.pointLength!==_||x.spotLength!==m||x.rectAreaLength!==p||x.hemiLength!==S||x.numDirectionalShadows!==v||x.numPointShadows!==y||x.numSpotShadows!==U||x.numSpotMaps!==b||x.numLightProbes!==T)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=p,i.point.length=_,i.hemi.length=S,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=U,i.spotShadowMap.length=U,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=U+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,x.directionalLength=g,x.pointLength=_,x.spotLength=m,x.rectAreaLength=p,x.hemiLength=S,x.numDirectionalShadows=v,x.numPointShadows=y,x.numSpotShadows=U,x.numSpotMaps=b,x.numLightProbes=T,i.version=Qw++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const v=c[p];if(v.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(v.isSpotLight){const y=i.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Hh(n){const e=new t1(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(u){e.setup(t,u)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function n1(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Hh(n),e.set(r,[a])):s>=o.length?(a=new Hh(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class i1 extends os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class r1 extends os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const s1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function a1(n,e,t){let i=new eu;const r=new Ve,s=new Ve,o=new Bt,a=new i1({depthPacking:nE}),l=new r1,c={},u=t.maxTextureSize,f={[Ii]:on,[on]:Ii,[ei]:ei},h=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:s1,fragmentShader:o1}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Gn;g.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new wn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gp;let p=this.type;this.render=function(b,A,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const E=n.getRenderTarget(),x=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Ci),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const D=p!==Qn&&this.type===Qn,z=p===Qn&&this.type!==Qn;for(let H=0,I=b.length;H<I;H++){const $=b[H],L=$.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const ee=L.getFrameExtents();if(r.multiply(ee),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,L.mapSize.y=s.y)),L.map===null||D===!0||z===!0){const ge=this.type!==Qn?{minFilter:vn,magFilter:vn}:{};L.map!==null&&L.map.dispose(),L.map=new dr(r.x,r.y,ge),L.map.texture.name=$.name+".shadowMap",L.camera.updateProjectionMatrix()}n.setRenderTarget(L.map),n.clear();const te=L.getViewportCount();for(let ge=0;ge<te;ge++){const Me=L.getViewport(ge);o.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),O.viewport(o),L.updateMatrices($,ge),i=L.getFrustum(),y(A,T,L.camera,$,this.type)}L.isPointLightShadow!==!0&&this.type===Qn&&S(L,T),L.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,x,N)};function S(b,A){const T=e.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new dr(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(A,null,T,h,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(A,null,T,d,_,null)}function v(b,A,T,E){let x=null;const N=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)x=N;else if(x=T.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const O=x.uuid,D=A.uuid;let z=c[O];z===void 0&&(z={},c[O]=z);let H=z[D];H===void 0&&(H=x.clone(),z[D]=H,A.addEventListener("dispose",U)),x=H}if(x.visible=A.visible,x.wireframe=A.wireframe,E===Qn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:f[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,T.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const O=n.properties.get(x);O.light=T}return x}function y(b,A,T,E,x){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Qn)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);const D=e.update(b),z=b.material;if(Array.isArray(z)){const H=D.groups;for(let I=0,$=H.length;I<$;I++){const L=H[I],ee=z[L.materialIndex];if(ee&&ee.visible){const te=v(b,ee,E,x);b.onBeforeShadow(n,b,A,T,D,te,L),n.renderBufferDirect(T,null,D,te,b,L),b.onAfterShadow(n,b,A,T,D,te,L)}}}else if(z.visible){const H=v(b,z,E,x);b.onBeforeShadow(n,b,A,T,D,H,null),n.renderBufferDirect(T,null,D,H,b,null),b.onAfterShadow(n,b,A,T,D,H,null)}}const O=b.children;for(let D=0,z=O.length;D<z;D++)y(O[D],A,T,E,x)}function U(b){b.target.removeEventListener("dispose",U);for(const T in c){const E=c[T],x=b.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}function l1(n){function e(){let B=!1;const se=new Bt;let oe=null;const Se=new Bt(0,0,0,0);return{setMask:function(Ee){oe!==Ee&&!B&&(n.colorMask(Ee,Ee,Ee,Ee),oe=Ee)},setLocked:function(Ee){B=Ee},setClear:function(Ee,Qe,ft,it,_t){_t===!0&&(Ee*=it,Qe*=it,ft*=it),se.set(Ee,Qe,ft,it),Se.equals(se)===!1&&(n.clearColor(Ee,Qe,ft,it),Se.copy(se))},reset:function(){B=!1,oe=null,Se.set(-1,0,0,0)}}}function t(){let B=!1,se=null,oe=null,Se=null;return{setTest:function(Ee){Ee?_e(n.DEPTH_TEST):W(n.DEPTH_TEST)},setMask:function(Ee){se!==Ee&&!B&&(n.depthMask(Ee),se=Ee)},setFunc:function(Ee){if(oe!==Ee){switch(Ee){case CM:n.depthFunc(n.NEVER);break;case PM:n.depthFunc(n.ALWAYS);break;case LM:n.depthFunc(n.LESS);break;case va:n.depthFunc(n.LEQUAL);break;case DM:n.depthFunc(n.EQUAL);break;case IM:n.depthFunc(n.GEQUAL);break;case UM:n.depthFunc(n.GREATER);break;case NM:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=Ee}},setLocked:function(Ee){B=Ee},setClear:function(Ee){Se!==Ee&&(n.clearDepth(Ee),Se=Ee)},reset:function(){B=!1,se=null,oe=null,Se=null}}}function i(){let B=!1,se=null,oe=null,Se=null,Ee=null,Qe=null,ft=null,it=null,_t=null;return{setTest:function(Je){B||(Je?_e(n.STENCIL_TEST):W(n.STENCIL_TEST))},setMask:function(Je){se!==Je&&!B&&(n.stencilMask(Je),se=Je)},setFunc:function(Je,Vt,bt){(oe!==Je||Se!==Vt||Ee!==bt)&&(n.stencilFunc(Je,Vt,bt),oe=Je,Se=Vt,Ee=bt)},setOp:function(Je,Vt,bt){(Qe!==Je||ft!==Vt||it!==bt)&&(n.stencilOp(Je,Vt,bt),Qe=Je,ft=Vt,it=bt)},setLocked:function(Je){B=Je},setClear:function(Je){_t!==Je&&(n.clearStencil(Je),_t=Je)},reset:function(){B=!1,se=null,oe=null,Se=null,Ee=null,Qe=null,ft=null,it=null,_t=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],d=null,g=!1,_=null,m=null,p=null,S=null,v=null,y=null,U=null,b=new nt(0,0,0),A=0,T=!1,E=null,x=null,N=null,O=null,D=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,I=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec($)[1]),H=I>=1):$.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),H=I>=2);let L=null,ee={};const te=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),Me=new Bt().fromArray(te),De=new Bt().fromArray(ge);function J(B,se,oe,Se){const Ee=new Uint8Array(4),Qe=n.createTexture();n.bindTexture(B,Qe),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ft=0;ft<oe;ft++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(se+ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return Qe}const de={};de[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),_e(n.DEPTH_TEST),s.setFunc(va),X(!1),Z(yf),_e(n.CULL_FACE),C(Ci);function _e(B){c[B]!==!0&&(n.enable(B),c[B]=!0)}function W(B){c[B]!==!1&&(n.disable(B),c[B]=!1)}function ue(B,se){return u[B]!==se?(n.bindFramebuffer(B,se),u[B]=se,B===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=se),B===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=se),!0):!1}function le(B,se){let oe=h,Se=!1;if(B){oe=f.get(se),oe===void 0&&(oe=[],f.set(se,oe));const Ee=B.textures;if(oe.length!==Ee.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let Qe=0,ft=Ee.length;Qe<ft;Qe++)oe[Qe]=n.COLOR_ATTACHMENT0+Qe;oe.length=Ee.length,Se=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,Se=!0);Se&&n.drawBuffers(oe)}function F(B){return d!==B?(n.useProgram(B),d=B,!0):!1}const Ae={[nr]:n.FUNC_ADD,[hM]:n.FUNC_SUBTRACT,[dM]:n.FUNC_REVERSE_SUBTRACT};Ae[pM]=n.MIN,Ae[mM]=n.MAX;const ve={[gM]:n.ZERO,[_M]:n.ONE,[vM]:n.SRC_COLOR,[hc]:n.SRC_ALPHA,[bM]:n.SRC_ALPHA_SATURATE,[MM]:n.DST_COLOR,[yM]:n.DST_ALPHA,[xM]:n.ONE_MINUS_SRC_COLOR,[dc]:n.ONE_MINUS_SRC_ALPHA,[EM]:n.ONE_MINUS_DST_COLOR,[SM]:n.ONE_MINUS_DST_ALPHA,[TM]:n.CONSTANT_COLOR,[AM]:n.ONE_MINUS_CONSTANT_COLOR,[wM]:n.CONSTANT_ALPHA,[RM]:n.ONE_MINUS_CONSTANT_ALPHA};function C(B,se,oe,Se,Ee,Qe,ft,it,_t,Je){if(B===Ci){g===!0&&(W(n.BLEND),g=!1);return}if(g===!1&&(_e(n.BLEND),g=!0),B!==fM){if(B!==_||Je!==T){if((m!==nr||v!==nr)&&(n.blendEquation(n.FUNC_ADD),m=nr,v=nr),Je)switch(B){case $r:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sf:n.blendFunc(n.ONE,n.ONE);break;case Mf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ef:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case $r:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Mf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ef:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}p=null,S=null,y=null,U=null,b.set(0,0,0),A=0,_=B,T=Je}return}Ee=Ee||se,Qe=Qe||oe,ft=ft||Se,(se!==m||Ee!==v)&&(n.blendEquationSeparate(Ae[se],Ae[Ee]),m=se,v=Ee),(oe!==p||Se!==S||Qe!==y||ft!==U)&&(n.blendFuncSeparate(ve[oe],ve[Se],ve[Qe],ve[ft]),p=oe,S=Se,y=Qe,U=ft),(it.equals(b)===!1||_t!==A)&&(n.blendColor(it.r,it.g,it.b,_t),b.copy(it),A=_t),_=B,T=!1}function P(B,se){B.side===ei?W(n.CULL_FACE):_e(n.CULL_FACE);let oe=B.side===on;se&&(oe=!oe),X(oe),B.blending===$r&&B.transparent===!1?C(Ci):C(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),s.setFunc(B.depthFunc),s.setTest(B.depthTest),s.setMask(B.depthWrite),r.setMask(B.colorWrite);const Se=B.stencilWrite;o.setTest(Se),Se&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),fe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):W(n.SAMPLE_ALPHA_TO_COVERAGE)}function X(B){E!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),E=B)}function Z(B){B!==cM?(_e(n.CULL_FACE),B!==x&&(B===yf?n.cullFace(n.BACK):B===uM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):W(n.CULL_FACE),x=B}function K(B){B!==N&&(H&&n.lineWidth(B),N=B)}function fe(B,se,oe){B?(_e(n.POLYGON_OFFSET_FILL),(O!==se||D!==oe)&&(n.polygonOffset(se,oe),O=se,D=oe)):W(n.POLYGON_OFFSET_FILL)}function w(B){B?_e(n.SCISSOR_TEST):W(n.SCISSOR_TEST)}function M(B){B===void 0&&(B=n.TEXTURE0+z-1),L!==B&&(n.activeTexture(B),L=B)}function k(B,se,oe){oe===void 0&&(L===null?oe=n.TEXTURE0+z-1:oe=L);let Se=ee[oe];Se===void 0&&(Se={type:void 0,texture:void 0},ee[oe]=Se),(Se.type!==B||Se.texture!==se)&&(L!==oe&&(n.activeTexture(oe),L=oe),n.bindTexture(B,se||de[B]),Se.type=B,Se.texture=se)}function V(){const B=ee[L];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Be(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(B){Me.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Me.copy(B))}function He(B){De.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),De.copy(B))}function $e(B,se){let oe=l.get(se);oe===void 0&&(oe=new WeakMap,l.set(se,oe));let Se=oe.get(B);Se===void 0&&(Se=n.getUniformBlockIndex(se,B.name),oe.set(B,Se))}function G(B,se){const Se=l.get(se).get(B);a.get(se)!==Se&&(n.uniformBlockBinding(se,Se,B.__bindingPointIndex),a.set(se,Se))}function ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},L=null,ee={},u={},f=new WeakMap,h=[],d=null,g=!1,_=null,m=null,p=null,S=null,v=null,y=null,U=null,b=new nt(0,0,0),A=0,T=!1,E=null,x=null,N=null,O=null,D=null,Me.set(0,0,n.canvas.width,n.canvas.height),De.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:_e,disable:W,bindFramebuffer:ue,drawBuffers:le,useProgram:F,setBlending:C,setMaterial:P,setFlipSided:X,setCullFace:Z,setLineWidth:K,setPolygonOffset:fe,setScissorTest:w,activeTexture:M,bindTexture:k,unbindTexture:V,compressedTexImage2D:j,compressedTexImage3D:Q,texImage2D:Be,texImage3D:Ie,updateUBOMapping:$e,uniformBlockBinding:G,texStorage2D:me,texStorage3D:Te,texSubImage2D:pe,texSubImage3D:ce,compressedTexSubImage2D:he,compressedTexSubImage3D:we,scissor:Ce,viewport:He,reset:ae}}function c1(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return d?new OffscreenCanvas(w,M):Xs("canvas")}function _(w,M,k){let V=1;const j=fe(w);if((j.width>k||j.height>k)&&(V=k/Math.max(j.width,j.height)),V<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Q=Math.floor(V*j.width),pe=Math.floor(V*j.height);f===void 0&&(f=g(Q,pe));const ce=M?g(Q,pe):f;return ce.width=Q,ce.height=pe,ce.getContext("2d").drawImage(w,0,0,Q,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Q+"x"+pe+")."),ce}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function m(w){return w.generateMipmaps&&w.minFilter!==vn&&w.minFilter!==hn}function p(w){n.generateMipmap(w)}function S(w,M,k,V,j=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Q=M;if(M===n.RED&&(k===n.FLOAT&&(Q=n.R32F),k===n.HALF_FLOAT&&(Q=n.R16F),k===n.UNSIGNED_BYTE&&(Q=n.R8)),M===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(Q=n.R8UI),k===n.UNSIGNED_SHORT&&(Q=n.R16UI),k===n.UNSIGNED_INT&&(Q=n.R32UI),k===n.BYTE&&(Q=n.R8I),k===n.SHORT&&(Q=n.R16I),k===n.INT&&(Q=n.R32I)),M===n.RG&&(k===n.FLOAT&&(Q=n.RG32F),k===n.HALF_FLOAT&&(Q=n.RG16F),k===n.UNSIGNED_BYTE&&(Q=n.RG8)),M===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(Q=n.RG8UI),k===n.UNSIGNED_SHORT&&(Q=n.RG16UI),k===n.UNSIGNED_INT&&(Q=n.RG32UI),k===n.BYTE&&(Q=n.RG8I),k===n.SHORT&&(Q=n.RG16I),k===n.INT&&(Q=n.RG32I)),M===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),M===n.RGBA){const pe=j?xa:ht.getTransfer(V);k===n.FLOAT&&(Q=n.RGBA32F),k===n.HALF_FLOAT&&(Q=n.RGBA16F),k===n.UNSIGNED_BYTE&&(Q=pe===vt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(w,M){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==vn&&w.minFilter!==hn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function y(w){const M=w.target;M.removeEventListener("dispose",y),b(M),M.isVideoTexture&&u.delete(M)}function U(w){const M=w.target;M.removeEventListener("dispose",U),T(M)}function b(w){const M=i.get(w);if(M.__webglInit===void 0)return;const k=w.source,V=h.get(k);if(V){const j=V[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&A(w),Object.keys(V).length===0&&h.delete(k)}i.remove(w)}function A(w){const M=i.get(w);n.deleteTexture(M.__webglTexture);const k=w.source,V=h.get(k);delete V[M.__cacheKey],o.memory.textures--}function T(w){const M=i.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(M.__webglFramebuffer[V]))for(let j=0;j<M.__webglFramebuffer[V].length;j++)n.deleteFramebuffer(M.__webglFramebuffer[V][j]);else n.deleteFramebuffer(M.__webglFramebuffer[V]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[V])}else{if(Array.isArray(M.__webglFramebuffer))for(let V=0;V<M.__webglFramebuffer.length;V++)n.deleteFramebuffer(M.__webglFramebuffer[V]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let V=0;V<M.__webglColorRenderbuffer.length;V++)M.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[V]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=w.textures;for(let V=0,j=k.length;V<j;V++){const Q=i.get(k[V]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(k[V])}i.remove(w)}let E=0;function x(){E=0}function N(){const w=E;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),E+=1,w}function O(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function D(w,M){const k=i.get(w);if(w.isVideoTexture&&Z(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const V=w.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(k,w,M);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+M)}function z(w,M){const k=i.get(w);if(w.version>0&&k.__version!==w.version){Me(k,w,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+M)}function H(w,M){const k=i.get(w);if(w.version>0&&k.__version!==w.version){Me(k,w,M);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+M)}function I(w,M){const k=i.get(w);if(w.version>0&&k.__version!==w.version){De(k,w,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+M)}const $={[gc]:n.REPEAT,[or]:n.CLAMP_TO_EDGE,[_c]:n.MIRRORED_REPEAT},L={[vn]:n.NEAREST,[WM]:n.NEAREST_MIPMAP_NEAREST,[Co]:n.NEAREST_MIPMAP_LINEAR,[hn]:n.LINEAR,[pl]:n.LINEAR_MIPMAP_NEAREST,[ar]:n.LINEAR_MIPMAP_LINEAR},ee={[rE]:n.NEVER,[uE]:n.ALWAYS,[sE]:n.LESS,[tm]:n.LEQUAL,[oE]:n.EQUAL,[cE]:n.GEQUAL,[aE]:n.GREATER,[lE]:n.NOTEQUAL};function te(w,M){if(M.type===Ai&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===hn||M.magFilter===pl||M.magFilter===Co||M.magFilter===ar||M.minFilter===hn||M.minFilter===pl||M.minFilter===Co||M.minFilter===ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,$[M.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,$[M.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,$[M.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,L[M.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,L[M.minFilter]),M.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,ee[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===vn||M.minFilter!==Co&&M.minFilter!==ar||M.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ge(w,M){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",y));const V=M.source;let j=h.get(V);j===void 0&&(j={},h.set(V,j));const Q=O(M);if(Q!==w.__cacheKey){j[Q]===void 0&&(j[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),j[Q].usedTimes++;const pe=j[w.__cacheKey];pe!==void 0&&(j[w.__cacheKey].usedTimes--,pe.usedTimes===0&&A(M)),w.__cacheKey=Q,w.__webglTexture=j[Q].texture}return k}function Me(w,M,k){let V=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(V=n.TEXTURE_3D);const j=ge(w,M),Q=M.source;t.bindTexture(V,w.__webglTexture,n.TEXTURE0+k);const pe=i.get(Q);if(Q.version!==pe.__version||j===!0){t.activeTexture(n.TEXTURE0+k);const ce=ht.getPrimaries(ht.workingColorSpace),he=M.colorSpace===Ti?null:ht.getPrimaries(M.colorSpace),we=M.colorSpace===Ti||ce===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let me=_(M.image,!1,r.maxTextureSize);me=K(M,me);const Te=s.convert(M.format,M.colorSpace),Be=s.convert(M.type);let Ie=S(M.internalFormat,Te,Be,M.colorSpace,M.isVideoTexture);te(V,M);let Ce;const He=M.mipmaps,$e=M.isVideoTexture!==!0,G=pe.__version===void 0||j===!0,ae=Q.dataReady,B=v(M,me);if(M.isDepthTexture)Ie=n.DEPTH_COMPONENT16,M.type===Ai?Ie=n.DEPTH_COMPONENT32F:M.type===es?Ie=n.DEPTH_COMPONENT24:M.type===ao&&(Ie=n.DEPTH24_STENCIL8),G&&($e?t.texStorage2D(n.TEXTURE_2D,1,Ie,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,Ie,me.width,me.height,0,Te,Be,null));else if(M.isDataTexture)if(He.length>0){$e&&G&&t.texStorage2D(n.TEXTURE_2D,B,Ie,He[0].width,He[0].height);for(let se=0,oe=He.length;se<oe;se++)Ce=He[se],$e?ae&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Ce.width,Ce.height,Te,Be,Ce.data):t.texImage2D(n.TEXTURE_2D,se,Ie,Ce.width,Ce.height,0,Te,Be,Ce.data);M.generateMipmaps=!1}else $e?(G&&t.texStorage2D(n.TEXTURE_2D,B,Ie,me.width,me.height),ae&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me.width,me.height,Te,Be,me.data)):t.texImage2D(n.TEXTURE_2D,0,Ie,me.width,me.height,0,Te,Be,me.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){$e&&G&&t.texStorage3D(n.TEXTURE_2D_ARRAY,B,Ie,He[0].width,He[0].height,me.depth);for(let se=0,oe=He.length;se<oe;se++)Ce=He[se],M.format!==Nn?Te!==null?$e?ae&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Ce.width,Ce.height,me.depth,Te,Ce.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Ie,Ce.width,Ce.height,me.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?ae&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Ce.width,Ce.height,me.depth,Te,Be,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Ie,Ce.width,Ce.height,me.depth,0,Te,Be,Ce.data)}else{$e&&G&&t.texStorage2D(n.TEXTURE_2D,B,Ie,He[0].width,He[0].height);for(let se=0,oe=He.length;se<oe;se++)Ce=He[se],M.format!==Nn?Te!==null?$e?ae&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,Ce.width,Ce.height,Te,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Ie,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?ae&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Ce.width,Ce.height,Te,Be,Ce.data):t.texImage2D(n.TEXTURE_2D,se,Ie,Ce.width,Ce.height,0,Te,Be,Ce.data)}else if(M.isDataArrayTexture)$e?(G&&t.texStorage3D(n.TEXTURE_2D_ARRAY,B,Ie,me.width,me.height,me.depth),ae&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Te,Be,me.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,me.width,me.height,me.depth,0,Te,Be,me.data);else if(M.isData3DTexture)$e?(G&&t.texStorage3D(n.TEXTURE_3D,B,Ie,me.width,me.height,me.depth),ae&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Te,Be,me.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,me.width,me.height,me.depth,0,Te,Be,me.data);else if(M.isFramebufferTexture){if(G)if($e)t.texStorage2D(n.TEXTURE_2D,B,Ie,me.width,me.height);else{let se=me.width,oe=me.height;for(let Se=0;Se<B;Se++)t.texImage2D(n.TEXTURE_2D,Se,Ie,se,oe,0,Te,Be,null),se>>=1,oe>>=1}}else if(He.length>0){if($e&&G){const se=fe(He[0]);t.texStorage2D(n.TEXTURE_2D,B,Ie,se.width,se.height)}for(let se=0,oe=He.length;se<oe;se++)Ce=He[se],$e?ae&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Te,Be,Ce):t.texImage2D(n.TEXTURE_2D,se,Ie,Te,Be,Ce);M.generateMipmaps=!1}else if($e){if(G){const se=fe(me);t.texStorage2D(n.TEXTURE_2D,B,Ie,se.width,se.height)}ae&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Be,me)}else t.texImage2D(n.TEXTURE_2D,0,Ie,Te,Be,me);m(M)&&p(V),pe.__version=Q.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function De(w,M,k){if(M.image.length!==6)return;const V=ge(w,M),j=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+k);const Q=i.get(j);if(j.version!==Q.__version||V===!0){t.activeTexture(n.TEXTURE0+k);const pe=ht.getPrimaries(ht.workingColorSpace),ce=M.colorSpace===Ti?null:ht.getPrimaries(M.colorSpace),he=M.colorSpace===Ti||pe===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const we=M.isCompressedTexture||M.image[0].isCompressedTexture,me=M.image[0]&&M.image[0].isDataTexture,Te=[];for(let oe=0;oe<6;oe++)!we&&!me?Te[oe]=_(M.image[oe],!0,r.maxCubemapSize):Te[oe]=me?M.image[oe].image:M.image[oe],Te[oe]=K(M,Te[oe]);const Be=Te[0],Ie=s.convert(M.format,M.colorSpace),Ce=s.convert(M.type),He=S(M.internalFormat,Ie,Ce,M.colorSpace),$e=M.isVideoTexture!==!0,G=Q.__version===void 0||V===!0,ae=j.dataReady;let B=v(M,Be);te(n.TEXTURE_CUBE_MAP,M);let se;if(we){$e&&G&&t.texStorage2D(n.TEXTURE_CUBE_MAP,B,He,Be.width,Be.height);for(let oe=0;oe<6;oe++){se=Te[oe].mipmaps;for(let Se=0;Se<se.length;Se++){const Ee=se[Se];M.format!==Nn?Ie!==null?$e?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,0,0,Ee.width,Ee.height,Ie,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,He,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,0,0,Ee.width,Ee.height,Ie,Ce,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,He,Ee.width,Ee.height,0,Ie,Ce,Ee.data)}}}else{if(se=M.mipmaps,$e&&G){se.length>0&&B++;const oe=fe(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,B,He,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(me){$e?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Te[oe].width,Te[oe].height,Ie,Ce,Te[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,He,Te[oe].width,Te[oe].height,0,Ie,Ce,Te[oe].data);for(let Se=0;Se<se.length;Se++){const Qe=se[Se].image[oe].image;$e?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,0,0,Qe.width,Qe.height,Ie,Ce,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,He,Qe.width,Qe.height,0,Ie,Ce,Qe.data)}}else{$e?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ie,Ce,Te[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,He,Ie,Ce,Te[oe]);for(let Se=0;Se<se.length;Se++){const Ee=se[Se];$e?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,0,0,Ie,Ce,Ee.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,He,Ie,Ce,Ee.image[oe])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),Q.__version=j.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function J(w,M,k,V,j,Q){const pe=s.convert(k.format,k.colorSpace),ce=s.convert(k.type),he=S(k.internalFormat,pe,ce,k.colorSpace);if(!i.get(M).__hasExternalTextures){const me=Math.max(1,M.width>>Q),Te=Math.max(1,M.height>>Q);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,Q,he,me,Te,M.depth,0,pe,ce,null):t.texImage2D(j,Q,he,me,Te,0,pe,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),X(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,j,i.get(k).__webglTexture,0,P(M)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,j,i.get(k).__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(w,M,k){if(n.bindRenderbuffer(n.RENDERBUFFER,w),M.depthBuffer&&!M.stencilBuffer){let V=n.DEPTH_COMPONENT24;if(k||X(M)){const j=M.depthTexture;j&&j.isDepthTexture&&(j.type===Ai?V=n.DEPTH_COMPONENT32F:j.type===es&&(V=n.DEPTH_COMPONENT24));const Q=P(M);X(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,V,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,V,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,V,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,w)}else if(M.depthBuffer&&M.stencilBuffer){const V=P(M);k&&X(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,V,n.DEPTH24_STENCIL8,M.width,M.height):X(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,V,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,w)}else{const V=M.textures;for(let j=0;j<V.length;j++){const Q=V[j],pe=s.convert(Q.format,Q.colorSpace),ce=s.convert(Q.type),he=S(Q.internalFormat,pe,ce,Q.colorSpace),we=P(M);k&&X(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,he,M.width,M.height):X(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,he,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,he,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _e(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),D(M.depthTexture,0);const V=i.get(M.depthTexture).__webglTexture,j=P(M);if(M.depthTexture.format===Xr)X(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else if(M.depthTexture.format===$s)X(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function W(w){const M=i.get(w),k=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");_e(M.__webglFramebuffer,w)}else if(k){M.__webglDepthbuffer=[];for(let V=0;V<6;V++)t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[V]),M.__webglDepthbuffer[V]=n.createRenderbuffer(),de(M.__webglDepthbuffer[V],w,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),de(M.__webglDepthbuffer,w,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(w,M,k){const V=i.get(w);M!==void 0&&J(V.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&W(w)}function le(w){const M=w.texture,k=i.get(w),V=i.get(M);w.addEventListener("dispose",U);const j=w.textures,Q=w.isWebGLCubeRenderTarget===!0,pe=j.length>1;if(pe||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=M.version,o.memory.textures++),Q){k.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[ce]=[];for(let he=0;he<M.mipmaps.length;he++)k.__webglFramebuffer[ce][he]=n.createFramebuffer()}else k.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)k.__webglFramebuffer[ce]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(pe)for(let ce=0,he=j.length;ce<he;ce++){const we=i.get(j[ce]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&X(w)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ce=0;ce<j.length;ce++){const he=j[ce];k.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ce]);const we=s.convert(he.format,he.colorSpace),me=s.convert(he.type),Te=S(he.internalFormat,we,me,he.colorSpace,w.isXRRenderTarget===!0),Be=P(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,Te,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,k.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),de(k.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),te(n.TEXTURE_CUBE_MAP,M);for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let he=0;he<M.mipmaps.length;he++)J(k.__webglFramebuffer[ce][he],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,he);else J(k.__webglFramebuffer[ce],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let ce=0,he=j.length;ce<he;ce++){const we=j[ce],me=i.get(we);t.bindTexture(n.TEXTURE_2D,me.__webglTexture),te(n.TEXTURE_2D,we),J(k.__webglFramebuffer,w,we,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),m(we)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ce=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,V.__webglTexture),te(ce,M),M.mipmaps&&M.mipmaps.length>0)for(let he=0;he<M.mipmaps.length;he++)J(k.__webglFramebuffer[he],w,M,n.COLOR_ATTACHMENT0,ce,he);else J(k.__webglFramebuffer,w,M,n.COLOR_ATTACHMENT0,ce,0);m(M)&&p(ce),t.unbindTexture()}w.depthBuffer&&W(w)}function F(w){const M=w.textures;for(let k=0,V=M.length;k<V;k++){const j=M[k];if(m(j)){const Q=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,pe=i.get(j).__webglTexture;t.bindTexture(Q,pe),p(Q),t.unbindTexture()}}}const Ae=[],ve=[];function C(w){if(w.samples>0){if(X(w)===!1){const M=w.textures,k=w.width,V=w.height;let j=n.COLOR_BUFFER_BIT;const Q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(w),ce=M.length>1;if(ce)for(let he=0;he<M.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let he=0;he<M.length;he++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[he]);const we=i.get(M[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,we,0)}n.blitFramebuffer(0,0,k,V,0,0,k,V,j,n.NEAREST),l===!0&&(Ae.length=0,ve.length=0,Ae.push(n.COLOR_ATTACHMENT0+he),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ae.push(Q),ve.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ve)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let he=0;he<M.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,pe.__webglColorRenderbuffer[he]);const we=i.get(M[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,we,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const M=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function P(w){return Math.min(r.maxSamples,w.samples)}function X(w){const M=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Z(w){const M=o.render.frame;u.get(w)!==M&&(u.set(w,M),w.update())}function K(w,M){const k=w.colorSpace,V=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==zi&&k!==Ti&&(ht.getTransfer(k)===vt?(V!==Nn||j!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function fe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=x,this.setTexture2D=D,this.setTexture2DArray=z,this.setTexture3D=H,this.setTextureCube=I,this.rebindTextures=ue,this.setupRenderTarget=le,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=C,this.setupDepthRenderbuffer=W,this.setupFrameBufferTexture=J,this.useMultisampledRTT=X}function u1(n,e){function t(i,r=Ti){let s;const o=ht.getTransfer(r);if(i===Ui)return n.UNSIGNED_BYTE;if(i===Yp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Kp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qM)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$M)return n.BYTE;if(i===XM)return n.SHORT;if(i===qp)return n.UNSIGNED_SHORT;if(i===jp)return n.INT;if(i===es)return n.UNSIGNED_INT;if(i===Ai)return n.FLOAT;if(i===Va)return n.HALF_FLOAT;if(i===jM)return n.ALPHA;if(i===YM)return n.RGB;if(i===Nn)return n.RGBA;if(i===KM)return n.LUMINANCE;if(i===ZM)return n.LUMINANCE_ALPHA;if(i===Xr)return n.DEPTH_COMPONENT;if(i===$s)return n.DEPTH_STENCIL;if(i===JM)return n.RED;if(i===Zp)return n.RED_INTEGER;if(i===QM)return n.RG;if(i===Jp)return n.RG_INTEGER;if(i===Qp)return n.RGBA_INTEGER;if(i===ml||i===gl||i===_l||i===vl)if(o===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ml)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ml)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_l)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bf||i===Tf||i===Af||i===wf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===bf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Af)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rf||i===Cf||i===Pf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Rf||i===Cf)return o===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Pf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Lf||i===Df||i===If||i===Uf||i===Nf||i===Of||i===Ff||i===Bf||i===Hf||i===zf||i===kf||i===Vf||i===Gf||i===Wf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Lf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Df)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===If)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Uf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Of)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ff)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xl||i===$f||i===Xf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===xl)return o===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$f)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===eE||i===qf||i===jf||i===Yf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===xl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===qf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ao?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class f1 extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zo extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const h1={type:"move"};class Xl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(h1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Zo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const d1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class m1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new tn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Ni({vertexShader:d1,fragmentShader:p1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new wn(new fo(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class g1 extends _r{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new m1,m=t.getContextAttributes();let p=null,S=null;const v=[],y=[],U=new Ve;let b=null;const A=new kt;A.layers.enable(1),A.viewport=new Bt;const T=new kt;T.layers.enable(2),T.viewport=new Bt;const E=[A,T],x=new f1;x.layers.enable(1),x.layers.enable(2);let N=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let de=v[J];return de===void 0&&(de=new Xl,v[J]=de),de.getTargetRaySpace()},this.getControllerGrip=function(J){let de=v[J];return de===void 0&&(de=new Xl,v[J]=de),de.getGripSpace()},this.getHand=function(J){let de=v[J];return de===void 0&&(de=new Xl,v[J]=de),de.getHandSpace()};function D(J){const de=y.indexOf(J.inputSource);if(de===-1)return;const _e=v[de];_e!==void 0&&(_e.update(J.inputSource,J.frame,c||o),_e.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",H);for(let J=0;J<v.length;J++){const de=y[J];de!==null&&(y[J]=null,v[J].disconnect(de))}N=null,O=null,_.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,S=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",z),r.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(U),r.renderState.layers===void 0){const de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new dr(d.framebufferWidth,d.framebufferHeight,{format:Nn,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let de=null,_e=null,W=null;m.depth&&(W=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?$s:Xr,_e=m.stencil?ao:es);const ue={colorFormat:t.RGBA8,depthFormat:W,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(ue),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new dr(h.textureWidth,h.textureHeight,{format:Nn,type:Ui,depthTexture:new pm(h.textureWidth,h.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function H(J){for(let de=0;de<J.removed.length;de++){const _e=J.removed[de],W=y.indexOf(_e);W>=0&&(y[W]=null,v[W].disconnect(_e))}for(let de=0;de<J.added.length;de++){const _e=J.added[de];let W=y.indexOf(_e);if(W===-1){for(let le=0;le<v.length;le++)if(le>=y.length){y.push(_e),W=le;break}else if(y[le]===null){y[le]=_e,W=le;break}if(W===-1)break}const ue=v[W];ue&&ue.connect(_e)}}const I=new Y,$=new Y;function L(J,de,_e){I.setFromMatrixPosition(de.matrixWorld),$.setFromMatrixPosition(_e.matrixWorld);const W=I.distanceTo($),ue=de.projectionMatrix.elements,le=_e.projectionMatrix.elements,F=ue[14]/(ue[10]-1),Ae=ue[14]/(ue[10]+1),ve=(ue[9]+1)/ue[5],C=(ue[9]-1)/ue[5],P=(ue[8]-1)/ue[0],X=(le[8]+1)/le[0],Z=F*P,K=F*X,fe=W/(-P+X),w=fe*-P;de.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(w),J.translateZ(fe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const M=F+fe,k=Ae+fe,V=Z-w,j=K+(W-w),Q=ve*Ae/k*M,pe=C*Ae/k*M;J.projectionMatrix.makePerspective(V,j,Q,pe,M,k),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function ee(J,de){de===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(de.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;_.texture!==null&&(J.near=_.depthNear,J.far=_.depthFar),x.near=T.near=A.near=J.near,x.far=T.far=A.far=J.far,(N!==x.near||O!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),N=x.near,O=x.far,A.near=N,A.far=O,T.near=N,T.far=O,A.updateProjectionMatrix(),T.updateProjectionMatrix(),J.updateProjectionMatrix());const de=J.parent,_e=x.cameras;ee(x,de);for(let W=0;W<_e.length;W++)ee(_e[W],de);_e.length===2?L(x,A,T):x.projectionMatrix.copy(A.projectionMatrix),te(J,x,de)};function te(J,de,_e){_e===null?J.matrix.copy(de.matrixWorld):(J.matrix.copy(_e.matrixWorld),J.matrix.invert(),J.matrix.multiply(de.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ea*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null};let ge=null;function Me(J,de){if(u=de.getViewerPose(c||o),g=de,u!==null){const _e=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let W=!1;_e.length!==x.cameras.length&&(x.cameras.length=0,W=!0);for(let le=0;le<_e.length;le++){const F=_e[le];let Ae=null;if(d!==null)Ae=d.getViewport(F);else{const C=f.getViewSubImage(h,F);Ae=C.viewport,le===0&&(e.setRenderTargetTextures(S,C.colorTexture,h.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(S))}let ve=E[le];ve===void 0&&(ve=new kt,ve.layers.enable(le),ve.viewport=new Bt,E[le]=ve),ve.matrix.fromArray(F.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(F.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),le===0&&(x.matrix.copy(ve.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),W===!0&&x.cameras.push(ve)}const ue=r.enabledFeatures;if(ue&&ue.includes("depth-sensing")){const le=f.getDepthInformation(_e[0]);le&&le.isValid&&le.texture&&_.init(e,le,r.renderState)}}for(let _e=0;_e<v.length;_e++){const W=y[_e],ue=v[_e];W!==null&&ue!==void 0&&ue.update(W,de,c||o)}_.render(e,x),ge&&ge(J,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),g=null}const De=new dm;De.setAnimationLoop(Me),this.setAnimationLoop=function(J){ge=J},this.dispose=function(){}}}const Ji=new kn,_1=new Et;function v1(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,um(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===on&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===on&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),v=S.envMap,y=S.envMapRotation;if(v&&(m.envMap.value=v,Ji.copy(y),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),m.envMapRotation.value.setFromMatrix4(_1.makeRotationFromEuler(Ji)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const U=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*U,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function x1(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,v){const y=v.program;i.uniformBlockBinding(S,y)}function c(S,v){let y=r[S.id];y===void 0&&(g(S),y=u(S),r[S.id]=y,S.addEventListener("dispose",m));const U=v.program;i.updateUBOMapping(S,U);const b=e.render.frame;s[S.id]!==b&&(h(S),s[S.id]=b)}function u(S){const v=f();S.__bindingPointIndex=v;const y=n.createBuffer(),U=S.__size,b=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,U,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const v=r[S.id],y=S.uniforms,U=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let b=0,A=y.length;b<A;b++){const T=Array.isArray(y[b])?y[b]:[y[b]];for(let E=0,x=T.length;E<x;E++){const N=T[E];if(d(N,b,E,U)===!0){const O=N.__offset,D=Array.isArray(N.value)?N.value:[N.value];let z=0;for(let H=0;H<D.length;H++){const I=D[H],$=_(I);typeof I=="number"||typeof I=="boolean"?(N.__data[0]=I,n.bufferSubData(n.UNIFORM_BUFFER,O+z,N.__data)):I.isMatrix3?(N.__data[0]=I.elements[0],N.__data[1]=I.elements[1],N.__data[2]=I.elements[2],N.__data[3]=0,N.__data[4]=I.elements[3],N.__data[5]=I.elements[4],N.__data[6]=I.elements[5],N.__data[7]=0,N.__data[8]=I.elements[6],N.__data[9]=I.elements[7],N.__data[10]=I.elements[8],N.__data[11]=0):(I.toArray(N.__data,z),z+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,v,y,U){const b=S.value,A=v+"_"+y;if(U[A]===void 0)return typeof b=="number"||typeof b=="boolean"?U[A]=b:U[A]=b.clone(),!0;{const T=U[A];if(typeof b=="number"||typeof b=="boolean"){if(T!==b)return U[A]=b,!0}else if(T.equals(b)===!1)return T.copy(b),!0}return!1}function g(S){const v=S.uniforms;let y=0;const U=16;for(let A=0,T=v.length;A<T;A++){const E=Array.isArray(v[A])?v[A]:[v[A]];for(let x=0,N=E.length;x<N;x++){const O=E[x],D=Array.isArray(O.value)?O.value:[O.value];for(let z=0,H=D.length;z<H;z++){const I=D[z],$=_(I),L=y%U;L!==0&&U-L<$.boundary&&(y+=U-L),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=$.storage}}}const b=y%U;return b>0&&(y+=U-b),S.__size=y,S.__cache={},this}function _(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function m(S){const v=S.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class y1{constructor(e={}){const{canvas:t=hE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this._useLegacyLights=!1,this.toneMapping=Pi,this.toneMappingExposure=1;const v=this;let y=!1,U=0,b=0,A=null,T=-1,E=null;const x=new Bt,N=new Bt;let O=null;const D=new nt(0);let z=0,H=t.width,I=t.height,$=1,L=null,ee=null;const te=new Bt(0,0,H,I),ge=new Bt(0,0,H,I);let Me=!1;const De=new eu;let J=!1,de=!1;const _e=new Et,W=new Y,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return A===null?$:1}let F=i;function Ae(R,q){return t.getContext(R,q)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kc}`),t.addEventListener("webglcontextlost",B,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",oe,!1),F===null){const q="webgl2";if(F=Ae(q,R),F===null)throw Ae(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ve,C,P,X,Z,K,fe,w,M,k,V,j,Q,pe,ce,he,we,me,Te,Be,Ie,Ce,He,$e;function G(){ve=new RA(F),ve.init(),Ce=new u1(F,ve),C=new MA(F,ve,e,Ce),P=new l1(F),X=new LA(F),Z=new jw,K=new c1(F,ve,P,Z,C,Ce,X),fe=new bA(v),w=new wA(v),M=new BE(F),He=new yA(F,M),k=new CA(F,M,X,He),V=new IA(F,k,M,X),Te=new DA(F,C,K),he=new EA(Z),j=new qw(v,fe,w,ve,C,He,he),Q=new v1(v,Z),pe=new Kw,ce=new n1(ve),me=new xA(v,fe,w,P,V,h,l),we=new a1(v,V,C),$e=new x1(F,X,C,P),Be=new SA(F,ve,X),Ie=new PA(F,ve,X),X.programs=j.programs,v.capabilities=C,v.extensions=ve,v.properties=Z,v.renderLists=pe,v.shadowMap=we,v.state=P,v.info=X}G();const ae=new g1(v,F);this.xr=ae,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=ve.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ve.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(R){R!==void 0&&($=R,this.setSize(H,I,!1))},this.getSize=function(R){return R.set(H,I)},this.setSize=function(R,q,re=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=R,I=q,t.width=Math.floor(R*$),t.height=Math.floor(q*$),re===!0&&(t.style.width=R+"px",t.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(H*$,I*$).floor()},this.setDrawingBufferSize=function(R,q,re){H=R,I=q,$=re,t.width=Math.floor(R*re),t.height=Math.floor(q*re),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(x)},this.getViewport=function(R){return R.copy(te)},this.setViewport=function(R,q,re,ne){R.isVector4?te.set(R.x,R.y,R.z,R.w):te.set(R,q,re,ne),P.viewport(x.copy(te).multiplyScalar($).round())},this.getScissor=function(R){return R.copy(ge)},this.setScissor=function(R,q,re,ne){R.isVector4?ge.set(R.x,R.y,R.z,R.w):ge.set(R,q,re,ne),P.scissor(N.copy(ge).multiplyScalar($).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(R){P.setScissorTest(Me=R)},this.setOpaqueSort=function(R){L=R},this.setTransparentSort=function(R){ee=R},this.getClearColor=function(R){return R.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(R=!0,q=!0,re=!0){let ne=0;if(R){let ie=!1;if(A!==null){const Re=A.texture.format;ie=Re===Qp||Re===Jp||Re===Zp}if(ie){const Re=A.texture.type,Le=Re===Ui||Re===es||Re===qp||Re===ao||Re===Yp||Re===Kp,Ne=me.getClearColor(),ze=me.getClearAlpha(),Xe=Ne.r,je=Ne.g,Ze=Ne.b;Le?(d[0]=Xe,d[1]=je,d[2]=Ze,d[3]=ze,F.clearBufferuiv(F.COLOR,0,d)):(g[0]=Xe,g[1]=je,g[2]=Ze,g[3]=ze,F.clearBufferiv(F.COLOR,0,g))}else ne|=F.COLOR_BUFFER_BIT}q&&(ne|=F.DEPTH_BUFFER_BIT),re&&(ne|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",B,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),pe.dispose(),ce.dispose(),Z.dispose(),fe.dispose(),w.dispose(),V.dispose(),He.dispose(),$e.dispose(),j.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Je),ae.removeEventListener("sessionend",Vt),bt.stop()};function B(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=X.autoReset,q=we.enabled,re=we.autoUpdate,ne=we.needsUpdate,ie=we.type;G(),X.autoReset=R,we.enabled=q,we.autoUpdate=re,we.needsUpdate=ne,we.type=ie}function oe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Se(R){const q=R.target;q.removeEventListener("dispose",Se),Ee(q)}function Ee(R){Qe(R),Z.remove(R)}function Qe(R){const q=Z.get(R).programs;q!==void 0&&(q.forEach(function(re){j.releaseProgram(re)}),R.isShaderMaterial&&j.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,re,ne,ie,Re){q===null&&(q=ue);const Le=ie.isMesh&&ie.matrixWorld.determinant()<0,Ne=Am(R,q,re,ne,ie);P.setMaterial(ne,Le);let ze=re.index,Xe=1;if(ne.wireframe===!0){if(ze=k.getWireframeAttribute(re),ze===void 0)return;Xe=2}const je=re.drawRange,Ze=re.attributes.position;let wt=je.start*Xe,Gt=(je.start+je.count)*Xe;Re!==null&&(wt=Math.max(wt,Re.start*Xe),Gt=Math.min(Gt,(Re.start+Re.count)*Xe)),ze!==null?(wt=Math.max(wt,0),Gt=Math.min(Gt,ze.count)):Ze!=null&&(wt=Math.max(wt,0),Gt=Math.min(Gt,Ze.count));const ln=Gt-wt;if(ln<0||ln===1/0)return;He.setup(ie,ne,Ne,re,ze);let Wn,ot=Be;if(ze!==null&&(Wn=M.get(ze),ot=Ie,ot.setIndex(Wn)),ie.isMesh)ne.wireframe===!0?(P.setLineWidth(ne.wireframeLinewidth*le()),ot.setMode(F.LINES)):ot.setMode(F.TRIANGLES);else if(ie.isLine){let qe=ne.linewidth;qe===void 0&&(qe=1),P.setLineWidth(qe*le()),ie.isLineSegments?ot.setMode(F.LINES):ie.isLineLoop?ot.setMode(F.LINE_LOOP):ot.setMode(F.LINE_STRIP)}else ie.isPoints?ot.setMode(F.POINTS):ie.isSprite&&ot.setMode(F.TRIANGLES);if(ie.isBatchedMesh)ie._multiDrawInstances!==null?ot.renderMultiDrawInstances(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount,ie._multiDrawInstances):ot.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else if(ie.isInstancedMesh)ot.renderInstances(wt,ln,ie.count);else if(re.isInstancedBufferGeometry){const qe=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,ls=Math.min(re.instanceCount,qe);ot.renderInstances(wt,ln,ls)}else ot.render(wt,ln)};function ft(R,q,re){R.transparent===!0&&R.side===ei&&R.forceSinglePass===!1?(R.side=on,R.needsUpdate=!0,mo(R,q,re),R.side=Ii,R.needsUpdate=!0,mo(R,q,re),R.side=ei):mo(R,q,re)}this.compile=function(R,q,re=null){re===null&&(re=R),m=ce.get(re),m.init(q),S.push(m),re.traverseVisible(function(ie){ie.isLight&&ie.layers.test(q.layers)&&(m.pushLight(ie),ie.castShadow&&m.pushShadow(ie))}),R!==re&&R.traverseVisible(function(ie){ie.isLight&&ie.layers.test(q.layers)&&(m.pushLight(ie),ie.castShadow&&m.pushShadow(ie))}),m.setupLights(v._useLegacyLights);const ne=new Set;return R.traverse(function(ie){const Re=ie.material;if(Re)if(Array.isArray(Re))for(let Le=0;Le<Re.length;Le++){const Ne=Re[Le];ft(Ne,re,ie),ne.add(Ne)}else ft(Re,re,ie),ne.add(Re)}),S.pop(),m=null,ne},this.compileAsync=function(R,q,re=null){const ne=this.compile(R,q,re);return new Promise(ie=>{function Re(){if(ne.forEach(function(Le){Z.get(Le).currentProgram.isReady()&&ne.delete(Le)}),ne.size===0){ie(R);return}setTimeout(Re,10)}ve.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let it=null;function _t(R){it&&it(R)}function Je(){bt.stop()}function Vt(){bt.start()}const bt=new dm;bt.setAnimationLoop(_t),typeof self<"u"&&bt.setContext(self),this.setAnimationLoop=function(R){it=R,ae.setAnimationLoop(R),R===null?bt.stop():bt.start()},ae.addEventListener("sessionstart",Je),ae.addEventListener("sessionend",Vt),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(q),q=ae.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,q,A),m=ce.get(R,S.length),m.init(q),S.push(m),_e.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),De.setFromProjectionMatrix(_e),de=this.localClippingEnabled,J=he.init(this.clippingPlanes,de),_=pe.get(R,p.length),_.init(),p.push(_),ki(R,q,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(L,ee);const re=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1;re&&me.addToRenderList(_,R),this.info.render.frame++,J===!0&&he.beginShadows();const ne=m.state.shadowsArray;we.render(ne,R,q),J===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=_.opaque,Re=_.transmissive;if(m.setupLights(v._useLegacyLights),q.isArrayCamera){const Le=q.cameras;if(Re.length>0)for(let Ne=0,ze=Le.length;Ne<ze;Ne++){const Xe=Le[Ne];iu(ie,Re,R,Xe)}re&&me.render(R);for(let Ne=0,ze=Le.length;Ne<ze;Ne++){const Xe=Le[Ne];nu(_,R,Xe,Xe.viewport)}}else Re.length>0&&iu(ie,Re,R,q),re&&me.render(R),nu(_,R,q);A!==null&&(K.updateMultisampleRenderTarget(A),K.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(v,R,q),He.resetDefaultState(),T=-1,E=null,S.pop(),S.length>0?(m=S[S.length-1],J===!0&&he.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function ki(R,q,re,ne){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||De.intersectsSprite(R)){ne&&W.setFromMatrixPosition(R.matrixWorld).applyMatrix4(_e);const Le=V.update(R),Ne=R.material;Ne.visible&&_.push(R,Le,Ne,re,W.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||De.intersectsObject(R))){const Le=V.update(R),Ne=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),W.copy(R.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),W.copy(Le.boundingSphere.center)),W.applyMatrix4(R.matrixWorld).applyMatrix4(_e)),Array.isArray(Ne)){const ze=Le.groups;for(let Xe=0,je=ze.length;Xe<je;Xe++){const Ze=ze[Xe],wt=Ne[Ze.materialIndex];wt&&wt.visible&&_.push(R,Le,wt,re,W.z,Ze)}}else Ne.visible&&_.push(R,Le,Ne,re,W.z,null)}}const Re=R.children;for(let Le=0,Ne=Re.length;Le<Ne;Le++)ki(Re[Le],q,re,ne)}function nu(R,q,re,ne){const ie=R.opaque,Re=R.transmissive,Le=R.transparent;m.setupLightsView(re),J===!0&&he.setGlobalState(v.clippingPlanes,re),ne&&P.viewport(x.copy(ne)),ie.length>0&&po(ie,q,re),Re.length>0&&po(Re,q,re),Le.length>0&&po(Le,q,re),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function iu(R,q,re,ne){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ne.id]===void 0&&(m.state.transmissionRenderTarget[ne.id]=new dr(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float")?Va:Ui,minFilter:ar,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const Re=m.state.transmissionRenderTarget[ne.id],Le=ne.viewport||x;Re.setSize(Le.z,Le.w);const Ne=v.getRenderTarget();v.setRenderTarget(Re),v.getClearColor(D),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear();const ze=v.toneMapping;v.toneMapping=Pi;const Xe=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),m.setupLightsView(ne),J===!0&&he.setGlobalState(v.clippingPlanes,ne),po(R,re,ne),K.updateMultisampleRenderTarget(Re),K.updateRenderTargetMipmap(Re),ve.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Ze=0,wt=q.length;Ze<wt;Ze++){const Gt=q[Ze],ln=Gt.object,Wn=Gt.geometry,ot=Gt.material,qe=Gt.group;if(ot.side===ei&&ln.layers.test(ne.layers)){const ls=ot.side;ot.side=on,ot.needsUpdate=!0,ru(ln,re,ne,Wn,ot,qe),ot.side=ls,ot.needsUpdate=!0,je=!0}}je===!0&&(K.updateMultisampleRenderTarget(Re),K.updateRenderTargetMipmap(Re))}v.setRenderTarget(Ne),v.setClearColor(D,z),Xe!==void 0&&(ne.viewport=Xe),v.toneMapping=ze}function po(R,q,re){const ne=q.isScene===!0?q.overrideMaterial:null;for(let ie=0,Re=R.length;ie<Re;ie++){const Le=R[ie],Ne=Le.object,ze=Le.geometry,Xe=ne===null?Le.material:ne,je=Le.group;Ne.layers.test(re.layers)&&ru(Ne,q,re,ze,Xe,je)}}function ru(R,q,re,ne,ie,Re){R.onBeforeRender(v,q,re,ne,ie,Re),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ie.onBeforeRender(v,q,re,ne,R,Re),ie.transparent===!0&&ie.side===ei&&ie.forceSinglePass===!1?(ie.side=on,ie.needsUpdate=!0,v.renderBufferDirect(re,q,ne,ie,R,Re),ie.side=Ii,ie.needsUpdate=!0,v.renderBufferDirect(re,q,ne,ie,R,Re),ie.side=ei):v.renderBufferDirect(re,q,ne,ie,R,Re),R.onAfterRender(v,q,re,ne,ie,Re)}function mo(R,q,re){q.isScene!==!0&&(q=ue);const ne=Z.get(R),ie=m.state.lights,Re=m.state.shadowsArray,Le=ie.state.version,Ne=j.getParameters(R,ie.state,Re,q,re),ze=j.getProgramCacheKey(Ne);let Xe=ne.programs;ne.environment=R.isMeshStandardMaterial?q.environment:null,ne.fog=q.fog,ne.envMap=(R.isMeshStandardMaterial?w:fe).get(R.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Xe===void 0&&(R.addEventListener("dispose",Se),Xe=new Map,ne.programs=Xe);let je=Xe.get(ze);if(je!==void 0){if(ne.currentProgram===je&&ne.lightsStateVersion===Le)return ou(R,Ne),je}else Ne.uniforms=j.getUniforms(R),R.onBuild(re,Ne,v),R.onBeforeCompile(Ne,v),je=j.acquireProgram(Ne,ze),Xe.set(ze,je),ne.uniforms=Ne.uniforms;const Ze=ne.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ze.clippingPlanes=he.uniform),ou(R,Ne),ne.needsLights=Rm(R),ne.lightsStateVersion=Le,ne.needsLights&&(Ze.ambientLightColor.value=ie.state.ambient,Ze.lightProbe.value=ie.state.probe,Ze.directionalLights.value=ie.state.directional,Ze.directionalLightShadows.value=ie.state.directionalShadow,Ze.spotLights.value=ie.state.spot,Ze.spotLightShadows.value=ie.state.spotShadow,Ze.rectAreaLights.value=ie.state.rectArea,Ze.ltc_1.value=ie.state.rectAreaLTC1,Ze.ltc_2.value=ie.state.rectAreaLTC2,Ze.pointLights.value=ie.state.point,Ze.pointLightShadows.value=ie.state.pointShadow,Ze.hemisphereLights.value=ie.state.hemi,Ze.directionalShadowMap.value=ie.state.directionalShadowMap,Ze.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ze.spotShadowMap.value=ie.state.spotShadowMap,Ze.spotLightMatrix.value=ie.state.spotLightMatrix,Ze.spotLightMap.value=ie.state.spotLightMap,Ze.pointShadowMap.value=ie.state.pointShadowMap,Ze.pointShadowMatrix.value=ie.state.pointShadowMatrix),ne.currentProgram=je,ne.uniformsList=null,je}function su(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=oa.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function ou(R,q){const re=Z.get(R);re.outputColorSpace=q.outputColorSpace,re.batching=q.batching,re.instancing=q.instancing,re.instancingColor=q.instancingColor,re.instancingMorph=q.instancingMorph,re.skinning=q.skinning,re.morphTargets=q.morphTargets,re.morphNormals=q.morphNormals,re.morphColors=q.morphColors,re.morphTargetsCount=q.morphTargetsCount,re.numClippingPlanes=q.numClippingPlanes,re.numIntersection=q.numClipIntersection,re.vertexAlphas=q.vertexAlphas,re.vertexTangents=q.vertexTangents,re.toneMapping=q.toneMapping}function Am(R,q,re,ne,ie){q.isScene!==!0&&(q=ue),K.resetTextureUnits();const Re=q.fog,Le=ne.isMeshStandardMaterial?q.environment:null,Ne=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:zi,ze=(ne.isMeshStandardMaterial?w:fe).get(ne.envMap||Le),Xe=ne.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,je=!!re.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ze=!!re.morphAttributes.position,wt=!!re.morphAttributes.normal,Gt=!!re.morphAttributes.color;let ln=Pi;ne.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ln=v.toneMapping);const Wn=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,ot=Wn!==void 0?Wn.length:0,qe=Z.get(ne),ls=m.state.lights;if(J===!0&&(de===!0||R!==E)){const pn=R===E&&ne.id===T;he.setState(ne,R,pn)}let Mt=!1;ne.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==ls.state.version||qe.outputColorSpace!==Ne||ie.isBatchedMesh&&qe.batching===!1||!ie.isBatchedMesh&&qe.batching===!0||ie.isInstancedMesh&&qe.instancing===!1||!ie.isInstancedMesh&&qe.instancing===!0||ie.isSkinnedMesh&&qe.skinning===!1||!ie.isSkinnedMesh&&qe.skinning===!0||ie.isInstancedMesh&&qe.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&qe.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&qe.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&qe.instancingMorph===!1&&ie.morphTexture!==null||qe.envMap!==ze||ne.fog===!0&&qe.fog!==Re||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==he.numPlanes||qe.numIntersection!==he.numIntersection)||qe.vertexAlphas!==Xe||qe.vertexTangents!==je||qe.morphTargets!==Ze||qe.morphNormals!==wt||qe.morphColors!==Gt||qe.toneMapping!==ln||qe.morphTargetsCount!==ot)&&(Mt=!0):(Mt=!0,qe.__version=ne.version);let Vi=qe.currentProgram;Mt===!0&&(Vi=mo(ne,q,ie));let au=!1,cs=!1,Xa=!1;const Wt=Vi.getUniforms(),ai=qe.uniforms;if(P.useProgram(Vi.program)&&(au=!0,cs=!0,Xa=!0),ne.id!==T&&(T=ne.id,cs=!0),au||E!==R){Wt.setValue(F,"projectionMatrix",R.projectionMatrix),Wt.setValue(F,"viewMatrix",R.matrixWorldInverse);const pn=Wt.map.cameraPosition;pn!==void 0&&pn.setValue(F,W.setFromMatrixPosition(R.matrixWorld)),C.logarithmicDepthBuffer&&Wt.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Wt.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),E!==R&&(E=R,cs=!0,Xa=!0)}if(ie.isSkinnedMesh){Wt.setOptional(F,ie,"bindMatrix"),Wt.setOptional(F,ie,"bindMatrixInverse");const pn=ie.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Wt.setValue(F,"boneTexture",pn.boneTexture,K))}ie.isBatchedMesh&&(Wt.setOptional(F,ie,"batchingTexture"),Wt.setValue(F,"batchingTexture",ie._matricesTexture,K));const qa=re.morphAttributes;if((qa.position!==void 0||qa.normal!==void 0||qa.color!==void 0)&&Te.update(ie,re,Vi),(cs||qe.receiveShadow!==ie.receiveShadow)&&(qe.receiveShadow=ie.receiveShadow,Wt.setValue(F,"receiveShadow",ie.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(ai.envMap.value=ze,ai.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&q.environment!==null&&(ai.envMapIntensity.value=q.environmentIntensity),cs&&(Wt.setValue(F,"toneMappingExposure",v.toneMappingExposure),qe.needsLights&&wm(ai,Xa),Re&&ne.fog===!0&&Q.refreshFogUniforms(ai,Re),Q.refreshMaterialUniforms(ai,ne,$,I,m.state.transmissionRenderTarget[R.id]),oa.upload(F,su(qe),ai,K)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(oa.upload(F,su(qe),ai,K),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Wt.setValue(F,"center",ie.center),Wt.setValue(F,"modelViewMatrix",ie.modelViewMatrix),Wt.setValue(F,"normalMatrix",ie.normalMatrix),Wt.setValue(F,"modelMatrix",ie.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const pn=ne.uniformsGroups;for(let ja=0,Cm=pn.length;ja<Cm;ja++){const lu=pn[ja];$e.update(lu,Vi),$e.bind(lu,Vi)}}return Vi}function wm(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Rm(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,q,re){Z.get(R.texture).__webglTexture=q,Z.get(R.depthTexture).__webglTexture=re;const ne=Z.get(R);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=re===void 0,ne.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,q){const re=Z.get(R);re.__webglFramebuffer=q,re.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,re=0){A=R,U=q,b=re;let ne=!0,ie=null,Re=!1,Le=!1;if(R){const ze=Z.get(R);ze.__useDefaultFramebuffer!==void 0?(P.bindFramebuffer(F.FRAMEBUFFER,null),ne=!1):ze.__webglFramebuffer===void 0?K.setupRenderTarget(R):ze.__hasExternalTextures&&K.rebindTextures(R,Z.get(R.texture).__webglTexture,Z.get(R.depthTexture).__webglTexture);const Xe=R.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Le=!0);const je=Z.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(je[q])?ie=je[q][re]:ie=je[q],Re=!0):R.samples>0&&K.useMultisampledRTT(R)===!1?ie=Z.get(R).__webglMultisampledFramebuffer:Array.isArray(je)?ie=je[re]:ie=je,x.copy(R.viewport),N.copy(R.scissor),O=R.scissorTest}else x.copy(te).multiplyScalar($).floor(),N.copy(ge).multiplyScalar($).floor(),O=Me;if(P.bindFramebuffer(F.FRAMEBUFFER,ie)&&ne&&P.drawBuffers(R,ie),P.viewport(x),P.scissor(N),P.setScissorTest(O),Re){const ze=Z.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+q,ze.__webglTexture,re)}else if(Le){const ze=Z.get(R.texture),Xe=q||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,ze.__webglTexture,re||0,Xe)}T=-1},this.readRenderTargetPixels=function(R,q,re,ne,ie,Re,Le){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Z.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){P.bindFramebuffer(F.FRAMEBUFFER,Ne);try{const ze=R.texture,Xe=ze.format,je=ze.type;if(!C.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-ne&&re>=0&&re<=R.height-ie&&F.readPixels(q,re,ne,ie,Ce.convert(Xe),Ce.convert(je),Re)}finally{const ze=A!==null?Z.get(A).__webglFramebuffer:null;P.bindFramebuffer(F.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(R,q,re=0){const ne=Math.pow(2,-re),ie=Math.floor(q.image.width*ne),Re=Math.floor(q.image.height*ne);K.setTexture2D(q,0),F.copyTexSubImage2D(F.TEXTURE_2D,re,0,0,R.x,R.y,ie,Re),P.unbindTexture()},this.copyTextureToTexture=function(R,q,re,ne=0){const ie=q.image.width,Re=q.image.height,Le=Ce.convert(re.format),Ne=Ce.convert(re.type);K.setTexture2D(re,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,re.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,re.unpackAlignment),q.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ne,R.x,R.y,ie,Re,Le,Ne,q.image.data):q.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ne,R.x,R.y,q.mipmaps[0].width,q.mipmaps[0].height,Le,q.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,ne,R.x,R.y,Le,Ne,q.image),ne===0&&re.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),P.unbindTexture()},this.copyTextureToTexture3D=function(R,q,re,ne,ie=0){const Re=R.max.x-R.min.x,Le=R.max.y-R.min.y,Ne=R.max.z-R.min.z,ze=Ce.convert(ne.format),Xe=Ce.convert(ne.type);let je;if(ne.isData3DTexture)K.setTexture3D(ne,0),je=F.TEXTURE_3D;else if(ne.isDataArrayTexture||ne.isCompressedArrayTexture)K.setTexture2DArray(ne,0),je=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,ne.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,ne.unpackAlignment);const Ze=F.getParameter(F.UNPACK_ROW_LENGTH),wt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Gt=F.getParameter(F.UNPACK_SKIP_PIXELS),ln=F.getParameter(F.UNPACK_SKIP_ROWS),Wn=F.getParameter(F.UNPACK_SKIP_IMAGES),ot=re.isCompressedTexture?re.mipmaps[ie]:re.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ot.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ot.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,R.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,R.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,R.min.z),re.isDataTexture||re.isData3DTexture?F.texSubImage3D(je,ie,q.x,q.y,q.z,Re,Le,Ne,ze,Xe,ot.data):ne.isCompressedArrayTexture?F.compressedTexSubImage3D(je,ie,q.x,q.y,q.z,Re,Le,Ne,ze,ot.data):F.texSubImage3D(je,ie,q.x,q.y,q.z,Re,Le,Ne,ze,Xe,ot),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ze),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,wt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Gt),F.pixelStorei(F.UNPACK_SKIP_ROWS,ln),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Wn),ie===0&&ne.generateMipmaps&&F.generateMipmap(je),P.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?K.setTextureCube(R,0):R.isData3DTexture?K.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?K.setTexture2DArray(R,0):K.setTexture2D(R,0),P.unbindTexture()},this.resetState=function(){U=0,b=0,A=null,P.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Jc?"display-p3":"srgb",t.unpackColorSpace=ht.workingColorSpace===Ga?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class S1 extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ym extends os{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ba=new Y,Ta=new Y,zh=new Et,xs=new Qc,Jo=new Wa,ql=new Y,kh=new Y;class M1 extends Dt{constructor(e=new Gn,t=new ym){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ba.fromBufferAttribute(t,r-1),Ta.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ba.distanceTo(Ta);e.setAttribute("lineDistance",new Qt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jo.copy(i.boundingSphere),Jo.applyMatrix4(r),Jo.radius+=s,e.ray.intersectsSphere(Jo)===!1)return;zh.copy(r).invert(),xs.copy(e.ray).applyMatrix4(zh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),S=u.getX(_+1),v=Qo(this,e,xs,l,p,S);v&&t.push(v)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Qo(this,e,xs,l,_,m);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=Qo(this,e,xs,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Qo(this,e,xs,l,g-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Qo(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(ba.fromBufferAttribute(o,r),Ta.fromBufferAttribute(o,s),t.distanceSqToSegment(ba,Ta,ql,kh)>i)return;ql.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ql);if(!(l<e.near||l>e.far))return{distance:l,point:kh.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const Vh=new Y,Gh=new Y;class E1 extends M1{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Vh.fromBufferAttribute(t,r),Gh.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Vh.distanceTo(Gh);e.setAttribute("lineDistance",new Qt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wh extends os{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=em,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Aa={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class b1{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const T1=new b1;class ho{constructor(e){this.manager=e!==void 0?e:T1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ho.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zn={};class A1 extends Error{constructor(e,t){super(e),this.response=t}}class w1 extends ho{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Aa.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Zn[e]!==void 0){Zn[e].push({onLoad:t,onProgress:i,onError:r});return}Zn[e]=[],Zn[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Zn[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){S();function S(){f.read().then(({done:v,value:y})=>{if(v)p.close();else{_+=y.byteLength;const U=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let b=0,A=u.length;b<A;b++){const T=u[b];T.onProgress&&T.onProgress(U)}p.enqueue(y),S()}})}}});return new Response(m)}else throw new A1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Aa.add(e,c);const u=Zn[e];delete Zn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Zn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Zn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class R1 extends ho{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Aa.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Xs("img");function l(){u(),Aa.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class C1 extends ho{constructor(e){super(e)}load(e,t,i,r){const s=new tn,o=new R1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Sm extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class P1 extends Sm{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new nt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const jl=new Et,$h=new Y,Xh=new Y;class L1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eu,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;$h.setFromMatrixPosition(e.matrixWorld),t.position.copy($h),Xh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xh),t.updateMatrixWorld(),jl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class D1 extends L1{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Ea*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class I1 extends Sm{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new D1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class U1{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class qh{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Jt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const jh=new Y;class N1 extends Dt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const i=new Gn,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){const c=o/l*Math.PI*2,u=a/l*Math.PI*2;r.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}i.setAttribute("position",new Qt(r,3));const s=new ym({fog:!1,toneMapped:!1});this.cone=new E1(i,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),jh.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(jh),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kc);var O1=Object.defineProperty,F1=(n,e,t)=>e in n?O1(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ke=(n,e,t)=>(F1(n,typeof e!="symbol"?e+"":e,t),t);const ea=new Qc,Yh=new Ei,B1=Math.cos(70*(Math.PI/180)),Kh=(n,e)=>(n%e+e)%e;class H1 extends _r{constructor(e,t){super(),ke(this,"object"),ke(this,"domElement"),ke(this,"enabled",!0),ke(this,"target",new Y),ke(this,"minDistance",0),ke(this,"maxDistance",1/0),ke(this,"minZoom",0),ke(this,"maxZoom",1/0),ke(this,"minPolarAngle",0),ke(this,"maxPolarAngle",Math.PI),ke(this,"minAzimuthAngle",-1/0),ke(this,"maxAzimuthAngle",1/0),ke(this,"enableDamping",!1),ke(this,"dampingFactor",.05),ke(this,"enableZoom",!0),ke(this,"zoomSpeed",1),ke(this,"enableRotate",!0),ke(this,"rotateSpeed",1),ke(this,"enablePan",!0),ke(this,"panSpeed",1),ke(this,"screenSpacePanning",!0),ke(this,"keyPanSpeed",7),ke(this,"zoomToCursor",!1),ke(this,"autoRotate",!1),ke(this,"autoRotateSpeed",2),ke(this,"reverseOrbit",!1),ke(this,"reverseHorizontalOrbit",!1),ke(this,"reverseVerticalOrbit",!1),ke(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),ke(this,"mouseButtons",{LEFT:xr.ROTATE,MIDDLE:xr.DOLLY,RIGHT:xr.PAN}),ke(this,"touches",{ONE:yr.ROTATE,TWO:yr.DOLLY_PAN}),ke(this,"target0"),ke(this,"position0"),ke(this,"zoom0"),ke(this,"_domElementKeyEvents",null),ke(this,"getPolarAngle"),ke(this,"getAzimuthalAngle"),ke(this,"setPolarAngle"),ke(this,"setAzimuthalAngle"),ke(this,"getDistance"),ke(this,"listenToKeyEvents"),ke(this,"stopListenToKeyEvents"),ke(this,"saveState"),ke(this,"reset"),ke(this,"update"),ke(this,"connect"),ke(this,"dispose"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>u.phi,this.getAzimuthalAngle=()=>u.theta,this.setPolarAngle=G=>{let ae=Kh(G,2*Math.PI),B=u.phi;B<0&&(B+=2*Math.PI),ae<0&&(ae+=2*Math.PI);let se=Math.abs(ae-B);2*Math.PI-se<se&&(ae<B?ae+=2*Math.PI:B+=2*Math.PI),f.phi=ae-B,i.update()},this.setAzimuthalAngle=G=>{let ae=Kh(G,2*Math.PI),B=u.theta;B<0&&(B+=2*Math.PI),ae<0&&(ae+=2*Math.PI);let se=Math.abs(ae-B);2*Math.PI-se<se&&(ae<B?ae+=2*Math.PI:B+=2*Math.PI),f.theta=ae-B,i.update()},this.getDistance=()=>i.object.position.distanceTo(i.target),this.listenToKeyEvents=G=>{G.addEventListener("keydown",we),this._domElementKeyEvents=G},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",we),this._domElementKeyEvents=null},this.saveState=()=>{i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=()=>{i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(r),i.update(),l=a.NONE},this.update=(()=>{const G=new Y,ae=new Y(0,1,0),B=new pr().setFromUnitVectors(e.up,ae),se=B.clone().invert(),oe=new Y,Se=new pr,Ee=2*Math.PI;return function(){const ft=i.object.position;B.setFromUnitVectors(e.up,ae),se.copy(B).invert(),G.copy(ft).sub(i.target),G.applyQuaternion(B),u.setFromVector3(G),i.autoRotate&&l===a.NONE&&z(O()),i.enableDamping?(u.theta+=f.theta*i.dampingFactor,u.phi+=f.phi*i.dampingFactor):(u.theta+=f.theta,u.phi+=f.phi);let it=i.minAzimuthAngle,_t=i.maxAzimuthAngle;isFinite(it)&&isFinite(_t)&&(it<-Math.PI?it+=Ee:it>Math.PI&&(it-=Ee),_t<-Math.PI?_t+=Ee:_t>Math.PI&&(_t-=Ee),it<=_t?u.theta=Math.max(it,Math.min(_t,u.theta)):u.theta=u.theta>(it+_t)/2?Math.max(it,u.theta):Math.min(_t,u.theta)),u.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,u.phi)),u.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),i.zoomToCursor&&E||i.object.isOrthographicCamera?u.radius=Me(u.radius):u.radius=Me(u.radius*h),G.setFromSpherical(u),G.applyQuaternion(se),ft.copy(i.target).add(G),i.object.matrixAutoUpdate||i.object.updateMatrix(),i.object.lookAt(i.target),i.enableDamping===!0?(f.theta*=1-i.dampingFactor,f.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(f.set(0,0,0),d.set(0,0,0));let Je=!1;if(i.zoomToCursor&&E){let Vt=null;if(i.object instanceof kt&&i.object.isPerspectiveCamera){const bt=G.length();Vt=Me(bt*h);const ki=bt-Vt;i.object.position.addScaledVector(A,ki),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const bt=new Y(T.x,T.y,0);bt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/h)),i.object.updateProjectionMatrix(),Je=!0;const ki=new Y(T.x,T.y,0);ki.unproject(i.object),i.object.position.sub(ki).add(bt),i.object.updateMatrixWorld(),Vt=G.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Vt!==null&&(i.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Vt).add(i.object.position):(ea.origin.copy(i.object.position),ea.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ea.direction))<B1?e.lookAt(i.target):(Yh.setFromNormalAndCoplanarPoint(i.object.up,i.target),ea.intersectPlane(Yh,i.target))))}else i.object instanceof Ms&&i.object.isOrthographicCamera&&(Je=h!==1,Je&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/h)),i.object.updateProjectionMatrix()));return h=1,E=!1,Je||oe.distanceToSquared(i.object.position)>c||8*(1-Se.dot(i.object.quaternion))>c?(i.dispatchEvent(r),oe.copy(i.object.position),Se.copy(i.object.quaternion),Je=!1,!0):!1}})(),this.connect=G=>{G===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),i.domElement=G,i.domElement.style.touchAction="none",i.domElement.addEventListener("contextmenu",Be),i.domElement.addEventListener("pointerdown",k),i.domElement.addEventListener("pointercancel",Q),i.domElement.addEventListener("wheel",he)},this.dispose=()=>{var G,ae,B,se,oe,Se;i.domElement&&(i.domElement.style.touchAction="auto"),(G=i.domElement)==null||G.removeEventListener("contextmenu",Be),(ae=i.domElement)==null||ae.removeEventListener("pointerdown",k),(B=i.domElement)==null||B.removeEventListener("pointercancel",Q),(se=i.domElement)==null||se.removeEventListener("wheel",he),(oe=i.domElement)==null||oe.ownerDocument.removeEventListener("pointermove",V),(Se=i.domElement)==null||Se.ownerDocument.removeEventListener("pointerup",j),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",we)};const i=this,r={type:"change"},s={type:"start"},o={type:"end"},a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=a.NONE;const c=1e-6,u=new qh,f=new qh;let h=1;const d=new Y,g=new Ve,_=new Ve,m=new Ve,p=new Ve,S=new Ve,v=new Ve,y=new Ve,U=new Ve,b=new Ve,A=new Y,T=new Ve;let E=!1;const x=[],N={};function O(){return 2*Math.PI/60/60*i.autoRotateSpeed}function D(){return Math.pow(.95,i.zoomSpeed)}function z(G){i.reverseOrbit||i.reverseHorizontalOrbit?f.theta+=G:f.theta-=G}function H(G){i.reverseOrbit||i.reverseVerticalOrbit?f.phi+=G:f.phi-=G}const I=(()=>{const G=new Y;return function(B,se){G.setFromMatrixColumn(se,0),G.multiplyScalar(-B),d.add(G)}})(),$=(()=>{const G=new Y;return function(B,se){i.screenSpacePanning===!0?G.setFromMatrixColumn(se,1):(G.setFromMatrixColumn(se,0),G.crossVectors(i.object.up,G)),G.multiplyScalar(B),d.add(G)}})(),L=(()=>{const G=new Y;return function(B,se){const oe=i.domElement;if(oe&&i.object instanceof kt&&i.object.isPerspectiveCamera){const Se=i.object.position;G.copy(Se).sub(i.target);let Ee=G.length();Ee*=Math.tan(i.object.fov/2*Math.PI/180),I(2*B*Ee/oe.clientHeight,i.object.matrix),$(2*se*Ee/oe.clientHeight,i.object.matrix)}else oe&&i.object instanceof Ms&&i.object.isOrthographicCamera?(I(B*(i.object.right-i.object.left)/i.object.zoom/oe.clientWidth,i.object.matrix),$(se*(i.object.top-i.object.bottom)/i.object.zoom/oe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function ee(G){i.object instanceof kt&&i.object.isPerspectiveCamera||i.object instanceof Ms&&i.object.isOrthographicCamera?h/=G:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function te(G){i.object instanceof kt&&i.object.isPerspectiveCamera||i.object instanceof Ms&&i.object.isOrthographicCamera?h*=G:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ge(G){if(!i.zoomToCursor||!i.domElement)return;E=!0;const ae=i.domElement.getBoundingClientRect(),B=G.clientX-ae.left,se=G.clientY-ae.top,oe=ae.width,Se=ae.height;T.x=B/oe*2-1,T.y=-(se/Se)*2+1,A.set(T.x,T.y,1).unproject(i.object).sub(i.object.position).normalize()}function Me(G){return Math.max(i.minDistance,Math.min(i.maxDistance,G))}function De(G){g.set(G.clientX,G.clientY)}function J(G){ge(G),y.set(G.clientX,G.clientY)}function de(G){p.set(G.clientX,G.clientY)}function _e(G){_.set(G.clientX,G.clientY),m.subVectors(_,g).multiplyScalar(i.rotateSpeed);const ae=i.domElement;ae&&(z(2*Math.PI*m.x/ae.clientHeight),H(2*Math.PI*m.y/ae.clientHeight)),g.copy(_),i.update()}function W(G){U.set(G.clientX,G.clientY),b.subVectors(U,y),b.y>0?ee(D()):b.y<0&&te(D()),y.copy(U),i.update()}function ue(G){S.set(G.clientX,G.clientY),v.subVectors(S,p).multiplyScalar(i.panSpeed),L(v.x,v.y),p.copy(S),i.update()}function le(G){ge(G),G.deltaY<0?te(D()):G.deltaY>0&&ee(D()),i.update()}function F(G){let ae=!1;switch(G.code){case i.keys.UP:L(0,i.keyPanSpeed),ae=!0;break;case i.keys.BOTTOM:L(0,-i.keyPanSpeed),ae=!0;break;case i.keys.LEFT:L(i.keyPanSpeed,0),ae=!0;break;case i.keys.RIGHT:L(-i.keyPanSpeed,0),ae=!0;break}ae&&(G.preventDefault(),i.update())}function Ae(){if(x.length==1)g.set(x[0].pageX,x[0].pageY);else{const G=.5*(x[0].pageX+x[1].pageX),ae=.5*(x[0].pageY+x[1].pageY);g.set(G,ae)}}function ve(){if(x.length==1)p.set(x[0].pageX,x[0].pageY);else{const G=.5*(x[0].pageX+x[1].pageX),ae=.5*(x[0].pageY+x[1].pageY);p.set(G,ae)}}function C(){const G=x[0].pageX-x[1].pageX,ae=x[0].pageY-x[1].pageY,B=Math.sqrt(G*G+ae*ae);y.set(0,B)}function P(){i.enableZoom&&C(),i.enablePan&&ve()}function X(){i.enableZoom&&C(),i.enableRotate&&Ae()}function Z(G){if(x.length==1)_.set(G.pageX,G.pageY);else{const B=$e(G),se=.5*(G.pageX+B.x),oe=.5*(G.pageY+B.y);_.set(se,oe)}m.subVectors(_,g).multiplyScalar(i.rotateSpeed);const ae=i.domElement;ae&&(z(2*Math.PI*m.x/ae.clientHeight),H(2*Math.PI*m.y/ae.clientHeight)),g.copy(_)}function K(G){if(x.length==1)S.set(G.pageX,G.pageY);else{const ae=$e(G),B=.5*(G.pageX+ae.x),se=.5*(G.pageY+ae.y);S.set(B,se)}v.subVectors(S,p).multiplyScalar(i.panSpeed),L(v.x,v.y),p.copy(S)}function fe(G){const ae=$e(G),B=G.pageX-ae.x,se=G.pageY-ae.y,oe=Math.sqrt(B*B+se*se);U.set(0,oe),b.set(0,Math.pow(U.y/y.y,i.zoomSpeed)),ee(b.y),y.copy(U)}function w(G){i.enableZoom&&fe(G),i.enablePan&&K(G)}function M(G){i.enableZoom&&fe(G),i.enableRotate&&Z(G)}function k(G){var ae,B;i.enabled!==!1&&(x.length===0&&((ae=i.domElement)==null||ae.ownerDocument.addEventListener("pointermove",V),(B=i.domElement)==null||B.ownerDocument.addEventListener("pointerup",j)),Ie(G),G.pointerType==="touch"?me(G):pe(G))}function V(G){i.enabled!==!1&&(G.pointerType==="touch"?Te(G):ce(G))}function j(G){var ae,B,se;Ce(G),x.length===0&&((ae=i.domElement)==null||ae.releasePointerCapture(G.pointerId),(B=i.domElement)==null||B.ownerDocument.removeEventListener("pointermove",V),(se=i.domElement)==null||se.ownerDocument.removeEventListener("pointerup",j)),i.dispatchEvent(o),l=a.NONE}function Q(G){Ce(G)}function pe(G){let ae;switch(G.button){case 0:ae=i.mouseButtons.LEFT;break;case 1:ae=i.mouseButtons.MIDDLE;break;case 2:ae=i.mouseButtons.RIGHT;break;default:ae=-1}switch(ae){case xr.DOLLY:if(i.enableZoom===!1)return;J(G),l=a.DOLLY;break;case xr.ROTATE:if(G.ctrlKey||G.metaKey||G.shiftKey){if(i.enablePan===!1)return;de(G),l=a.PAN}else{if(i.enableRotate===!1)return;De(G),l=a.ROTATE}break;case xr.PAN:if(G.ctrlKey||G.metaKey||G.shiftKey){if(i.enableRotate===!1)return;De(G),l=a.ROTATE}else{if(i.enablePan===!1)return;de(G),l=a.PAN}break;default:l=a.NONE}l!==a.NONE&&i.dispatchEvent(s)}function ce(G){if(i.enabled!==!1)switch(l){case a.ROTATE:if(i.enableRotate===!1)return;_e(G);break;case a.DOLLY:if(i.enableZoom===!1)return;W(G);break;case a.PAN:if(i.enablePan===!1)return;ue(G);break}}function he(G){i.enabled===!1||i.enableZoom===!1||l!==a.NONE&&l!==a.ROTATE||(G.preventDefault(),i.dispatchEvent(s),le(G),i.dispatchEvent(o))}function we(G){i.enabled===!1||i.enablePan===!1||F(G)}function me(G){switch(He(G),x.length){case 1:switch(i.touches.ONE){case yr.ROTATE:if(i.enableRotate===!1)return;Ae(),l=a.TOUCH_ROTATE;break;case yr.PAN:if(i.enablePan===!1)return;ve(),l=a.TOUCH_PAN;break;default:l=a.NONE}break;case 2:switch(i.touches.TWO){case yr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;P(),l=a.TOUCH_DOLLY_PAN;break;case yr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;X(),l=a.TOUCH_DOLLY_ROTATE;break;default:l=a.NONE}break;default:l=a.NONE}l!==a.NONE&&i.dispatchEvent(s)}function Te(G){switch(He(G),l){case a.TOUCH_ROTATE:if(i.enableRotate===!1)return;Z(G),i.update();break;case a.TOUCH_PAN:if(i.enablePan===!1)return;K(G),i.update();break;case a.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;w(G),i.update();break;case a.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;M(G),i.update();break;default:l=a.NONE}}function Be(G){i.enabled!==!1&&G.preventDefault()}function Ie(G){x.push(G)}function Ce(G){delete N[G.pointerId];for(let ae=0;ae<x.length;ae++)if(x[ae].pointerId==G.pointerId){x.splice(ae,1);return}}function He(G){let ae=N[G.pointerId];ae===void 0&&(ae=new Ve,N[G.pointerId]=ae),ae.set(G.pageX,G.pageY)}function $e(G){const ae=G.pointerId===x[0].pointerId?x[1]:x[0];return N[ae.pointerId]}t!==void 0&&this.connect(t),this.update()}}class z1 extends ho{constructor(e){super(e),this.propertyNameMapping={}}load(e,t,i,r){const s=this,o=new w1(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}setPropertyNameMapping(e){this.propertyNameMapping=e}parse(e){function t(d){const g=/ply([\s\S]*)end_header\r?\n/;let _="",m=0;const p=g.exec(d);p!==null&&(_=p[1],m=new Blob([p[0]]).size);const S={comments:[],elements:[],headerLength:m,objInfo:""},v=_.split(`
`);let y;function U(b,A){const T={type:b[0]};return T.type==="list"?(T.name=b[3],T.countType=b[1],T.itemType=b[2]):T.name=b[1],T.name in A&&(T.name=A[T.name]),T}for(let b=0;b<v.length;b++){let A=v[b];if(A=A.trim(),A==="")continue;const T=A.split(/\s+/),E=T.shift();switch(A=T.join(" "),E){case"format":S.format=T[0],S.version=T[1];break;case"comment":S.comments.push(A);break;case"element":y!==void 0&&S.elements.push(y),y={},y.name=T[0],y.count=parseInt(T[1]),y.properties=[];break;case"property":y.properties.push(U(T,h.propertyNameMapping));break;case"obj_info":S.objInfo=A;break;default:console.log("unhandled",E,T)}}return y!==void 0&&S.elements.push(y),S}function i(d,g){switch(g){case"char":case"uchar":case"short":case"ushort":case"int":case"uint":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":return parseInt(d);case"float":case"double":case"float32":case"float64":return parseFloat(d)}}function r(d,g){const _=g.split(/\s+/),m={};for(let p=0;p<d.length;p++)if(d[p].type==="list"){const S=[],v=i(_.shift(),d[p].countType);for(let y=0;y<v;y++)S.push(i(_.shift(),d[p].itemType));m[d[p].name]=S}else m[d[p].name]=i(_.shift(),d[p].type);return m}function s(d,g){const _={indices:[],vertices:[],normals:[],uvs:[],faceVertexUvs:[],colors:[]};let m;const p=/end_header\s([\s\S]*)$/;let S="";(m=p.exec(d))!==null&&(S=m[1]);const v=S.split(`
`);let y=0,U=0;for(let b=0;b<v.length;b++){let A=v[b];if(A=A.trim(),A==="")continue;U>=g.elements[y].count&&(y++,U=0);const T=r(g.elements[y].properties,A);a(_,g.elements[y].name,T),U++}return o(_)}function o(d){let g=new Gn;return d.indices.length>0&&g.setIndex(d.indices),g.setAttribute("position",new Qt(d.vertices,3)),d.normals.length>0&&g.setAttribute("normal",new Qt(d.normals,3)),d.uvs.length>0&&g.setAttribute("uv",new Qt(d.uvs,2)),d.colors.length>0&&g.setAttribute("color",new Qt(d.colors,3)),d.faceVertexUvs.length>0&&(g=g.toNonIndexed(),g.setAttribute("uv",new Qt(d.faceVertexUvs,2))),g.computeBoundingSphere(),g}function a(d,g,_){if(g==="vertex")d.vertices.push(_.x,_.y,_.z),"nx"in _&&"ny"in _&&"nz"in _&&d.normals.push(_.nx,_.ny,_.nz),"s"in _&&"t"in _&&d.uvs.push(_.s,_.t),"red"in _&&"green"in _&&"blue"in _&&d.colors.push(_.red/255,_.green/255,_.blue/255);else if(g==="face"){const m=_.vertex_indices||_.vertex_index,p=_.texcoord;m.length===3?(d.indices.push(m[0],m[1],m[2]),p&&p.length===6&&(d.faceVertexUvs.push(p[0],p[1]),d.faceVertexUvs.push(p[2],p[3]),d.faceVertexUvs.push(p[4],p[5]))):m.length===4&&(d.indices.push(m[0],m[1],m[3]),d.indices.push(m[1],m[2],m[3]))}}function l(d,g,_,m){switch(_){case"int8":case"char":return[d.getInt8(g),1];case"uint8":case"uchar":return[d.getUint8(g),1];case"int16":case"short":return[d.getInt16(g,m),2];case"uint16":case"ushort":return[d.getUint16(g,m),2];case"int32":case"int":return[d.getInt32(g,m),4];case"uint32":case"uint":return[d.getUint32(g,m),4];case"float32":case"float":return[d.getFloat32(g,m),4];case"float64":case"double":return[d.getFloat64(g,m),8]}}function c(d,g,_,m){const p={};let S,v=0;for(let y=0;y<_.length;y++)if(_[y].type==="list"){const U=[];S=l(d,g+v,_[y].countType,m);const b=S[0];v+=S[1];for(let A=0;A<b;A++)S=l(d,g+v,_[y].itemType,m),U.push(S[0]),v+=S[1];p[_[y].name]=U}else S=l(d,g+v,_[y].type,m),p[_[y].name]=S[0],v+=S[1];return[p,v]}function u(d,g){const _={indices:[],vertices:[],normals:[],uvs:[],faceVertexUvs:[],colors:[]},m=g.format==="binary_little_endian",p=new DataView(d,g.headerLength);let S,v=0;for(let y=0;y<g.elements.length;y++)for(let U=0;U<g.elements[y].count;U++){S=c(p,v,g.elements[y].properties,m),v+=S[1];const b=S[0];a(_,g.elements[y].name,b)}return o(_)}let f;const h=this;if(e instanceof ArrayBuffer){const d=U1.decodeText(new Uint8Array(e)),g=t(d);f=g.format==="ascii"?s(d,g):u(e,g)}else f=s(e,t(e));return f}}const k1=()=>{const n=rt(),e=new y1({antialias:!0}),t=new S1,i=new kt(40,window.innerWidth/window.innerHeight,.1,100),r=new I1(16777215,100),s=new N1(r),o=()=>{var m,p,S;e.setPixelRatio(window.devicePixelRatio);const c=(m=n.value)==null?void 0:m.offsetWidth,u=((p=n.value)==null?void 0:p.offsetHeight)||0;e.setSize(c,u),(S=n.value)==null||S.appendChild(e.domElement),e.shadowMap.enabled=!0,e.shadowMap.type=Wp,e.toneMapping=$p,e.toneMappingExposure=1,e.setAnimationLoop(l),i.aspect=c/u,i.position.set(7,4,1),i.updateProjectionMatrix();const f=new H1(i,e.domElement);f.minDistance=2,f.maxDistance=10,f.maxPolarAngle=Math.PI/2,f.target.set(0,1,0),f.update();const h=new P1(16777215,9276813,.15);t.add(h),new C1().setPath("/").loadAsync("disturb.jpg").then(v=>{v.minFilter=hn,v.magFilter=hn,v.colorSpace=bn,r.map=v}),r.position.set(2.5,5,2.5),r.angle=Math.PI/6,r.penumbra=1,r.decay=2,r.distance=0,r.castShadow=!0,r.shadow.mapSize.width=1024,r.shadow.mapSize.height=1024,r.shadow.camera.near=1,r.shadow.camera.far=10,r.shadow.focus=1,t.add(r),t.add(s);const d=new fo(200,200),g=new Wh({color:12369084}),_=new wn(d,g);_.position.set(0,-1,0),_.rotation.x=-Math.PI/2,_.receiveShadow=!0,t.add(_),new z1().load("/LeslieXin.ply",v=>{v.scale(.0024,.0024,.0024),v.computeVertexNormals();const y=new Wh,U=new wn(v,y);U.rotation.y=-Math.PI/2,U.position.y=.8,U.castShadow=!0,U.receiveShadow=!0,t.add(U)}),window.addEventListener("resize",a)},a=()=>{const c=window.innerWidth,u=window.innerHeight;i.aspect=c/u,i.updateProjectionMatrix(),e.setSize(c,u)},l=()=>{const c=performance.now()/3e3;r.position.x=Math.cos(c)*2.5,r.position.z=Math.sin(c)*2.5,s.update(),e.render(t,i)};return Yt(()=>{n.value&&o()}),eo(()=>{window.removeEventListener("resize",a)}),{threeRef:n}},V1={__name:"Home",setup(n){const{threeRef:e}=k1();return(t,i)=>(ye(),pt(za,null,{default:xt(()=>[(ye(),pt(Vg,null,[Pe("div",{class:"container",ref_key:"threeRef",ref:e},null,512)],1024))]),_:1}))}},G1=mt(V1,[["__scopeId","data-v-d9905d11"],["__file","Home.vue"]]);var W1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Mm={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(W1,function(){var t=1e3,i=6e4,r=36e5,s="millisecond",o="second",a="minute",l="hour",c="day",u="week",f="month",h="quarter",d="year",g="date",_="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,S={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(z){var H=["th","st","nd","rd"],I=z%100;return"["+z+(H[(I-20)%10]||H[I]||H[0])+"]"}},v=function(z,H,I){var $=String(z);return!$||$.length>=H?z:""+Array(H+1-$.length).join(I)+z},y={s:v,z:function(z){var H=-z.utcOffset(),I=Math.abs(H),$=Math.floor(I/60),L=I%60;return(H<=0?"+":"-")+v($,2,"0")+":"+v(L,2,"0")},m:function z(H,I){if(H.date()<I.date())return-z(I,H);var $=12*(I.year()-H.year())+(I.month()-H.month()),L=H.clone().add($,f),ee=I-L<0,te=H.clone().add($+(ee?-1:1),f);return+(-($+(I-L)/(ee?L-te:te-L))||0)},a:function(z){return z<0?Math.ceil(z)||0:Math.floor(z)},p:function(z){return{M:f,y:d,w:u,d:c,D:g,h:l,m:a,s:o,ms:s,Q:h}[z]||String(z||"").toLowerCase().replace(/s$/,"")},u:function(z){return z===void 0}},U="en",b={};b[U]=S;var A="$isDayjsObject",T=function(z){return z instanceof O||!(!z||!z[A])},E=function z(H,I,$){var L;if(!H)return U;if(typeof H=="string"){var ee=H.toLowerCase();b[ee]&&(L=ee),I&&(b[ee]=I,L=ee);var te=H.split("-");if(!L&&te.length>1)return z(te[0])}else{var ge=H.name;b[ge]=H,L=ge}return!$&&L&&(U=L),L||!$&&U},x=function(z,H){if(T(z))return z.clone();var I=typeof H=="object"?H:{};return I.date=z,I.args=arguments,new O(I)},N=y;N.l=E,N.i=T,N.w=function(z,H){return x(z,{locale:H.$L,utc:H.$u,x:H.$x,$offset:H.$offset})};var O=function(){function z(I){this.$L=E(I.locale,null,!0),this.parse(I),this.$x=this.$x||I.x||{},this[A]=!0}var H=z.prototype;return H.parse=function(I){this.$d=function($){var L=$.date,ee=$.utc;if(L===null)return new Date(NaN);if(N.u(L))return new Date;if(L instanceof Date)return new Date(L);if(typeof L=="string"&&!/Z$/i.test(L)){var te=L.match(m);if(te){var ge=te[2]-1||0,Me=(te[7]||"0").substring(0,3);return ee?new Date(Date.UTC(te[1],ge,te[3]||1,te[4]||0,te[5]||0,te[6]||0,Me)):new Date(te[1],ge,te[3]||1,te[4]||0,te[5]||0,te[6]||0,Me)}}return new Date(L)}(I),this.init()},H.init=function(){var I=this.$d;this.$y=I.getFullYear(),this.$M=I.getMonth(),this.$D=I.getDate(),this.$W=I.getDay(),this.$H=I.getHours(),this.$m=I.getMinutes(),this.$s=I.getSeconds(),this.$ms=I.getMilliseconds()},H.$utils=function(){return N},H.isValid=function(){return this.$d.toString()!==_},H.isSame=function(I,$){var L=x(I);return this.startOf($)<=L&&L<=this.endOf($)},H.isAfter=function(I,$){return x(I)<this.startOf($)},H.isBefore=function(I,$){return this.endOf($)<x(I)},H.$g=function(I,$,L){return N.u(I)?this[$]:this.set(L,I)},H.unix=function(){return Math.floor(this.valueOf()/1e3)},H.valueOf=function(){return this.$d.getTime()},H.startOf=function(I,$){var L=this,ee=!!N.u($)||$,te=N.p(I),ge=function(le,F){var Ae=N.w(L.$u?Date.UTC(L.$y,F,le):new Date(L.$y,F,le),L);return ee?Ae:Ae.endOf(c)},Me=function(le,F){return N.w(L.toDate()[le].apply(L.toDate("s"),(ee?[0,0,0,0]:[23,59,59,999]).slice(F)),L)},De=this.$W,J=this.$M,de=this.$D,_e="set"+(this.$u?"UTC":"");switch(te){case d:return ee?ge(1,0):ge(31,11);case f:return ee?ge(1,J):ge(0,J+1);case u:var W=this.$locale().weekStart||0,ue=(De<W?De+7:De)-W;return ge(ee?de-ue:de+(6-ue),J);case c:case g:return Me(_e+"Hours",0);case l:return Me(_e+"Minutes",1);case a:return Me(_e+"Seconds",2);case o:return Me(_e+"Milliseconds",3);default:return this.clone()}},H.endOf=function(I){return this.startOf(I,!1)},H.$set=function(I,$){var L,ee=N.p(I),te="set"+(this.$u?"UTC":""),ge=(L={},L[c]=te+"Date",L[g]=te+"Date",L[f]=te+"Month",L[d]=te+"FullYear",L[l]=te+"Hours",L[a]=te+"Minutes",L[o]=te+"Seconds",L[s]=te+"Milliseconds",L)[ee],Me=ee===c?this.$D+($-this.$W):$;if(ee===f||ee===d){var De=this.clone().set(g,1);De.$d[ge](Me),De.init(),this.$d=De.set(g,Math.min(this.$D,De.daysInMonth())).$d}else ge&&this.$d[ge](Me);return this.init(),this},H.set=function(I,$){return this.clone().$set(I,$)},H.get=function(I){return this[N.p(I)]()},H.add=function(I,$){var L,ee=this;I=Number(I);var te=N.p($),ge=function(J){var de=x(ee);return N.w(de.date(de.date()+Math.round(J*I)),ee)};if(te===f)return this.set(f,this.$M+I);if(te===d)return this.set(d,this.$y+I);if(te===c)return ge(1);if(te===u)return ge(7);var Me=(L={},L[a]=i,L[l]=r,L[o]=t,L)[te]||1,De=this.$d.getTime()+I*Me;return N.w(De,this)},H.subtract=function(I,$){return this.add(-1*I,$)},H.format=function(I){var $=this,L=this.$locale();if(!this.isValid())return L.invalidDate||_;var ee=I||"YYYY-MM-DDTHH:mm:ssZ",te=N.z(this),ge=this.$H,Me=this.$m,De=this.$M,J=L.weekdays,de=L.months,_e=L.meridiem,W=function(F,Ae,ve,C){return F&&(F[Ae]||F($,ee))||ve[Ae].slice(0,C)},ue=function(F){return N.s(ge%12||12,F,"0")},le=_e||function(F,Ae,ve){var C=F<12?"AM":"PM";return ve?C.toLowerCase():C};return ee.replace(p,function(F,Ae){return Ae||function(ve){switch(ve){case"YY":return String($.$y).slice(-2);case"YYYY":return N.s($.$y,4,"0");case"M":return De+1;case"MM":return N.s(De+1,2,"0");case"MMM":return W(L.monthsShort,De,de,3);case"MMMM":return W(de,De);case"D":return $.$D;case"DD":return N.s($.$D,2,"0");case"d":return String($.$W);case"dd":return W(L.weekdaysMin,$.$W,J,2);case"ddd":return W(L.weekdaysShort,$.$W,J,3);case"dddd":return J[$.$W];case"H":return String(ge);case"HH":return N.s(ge,2,"0");case"h":return ue(1);case"hh":return ue(2);case"a":return le(ge,Me,!0);case"A":return le(ge,Me,!1);case"m":return String(Me);case"mm":return N.s(Me,2,"0");case"s":return String($.$s);case"ss":return N.s($.$s,2,"0");case"SSS":return N.s($.$ms,3,"0");case"Z":return te}return null}(F)||te.replace(":","")})},H.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},H.diff=function(I,$,L){var ee,te=this,ge=N.p($),Me=x(I),De=(Me.utcOffset()-this.utcOffset())*i,J=this-Me,de=function(){return N.m(te,Me)};switch(ge){case d:ee=de()/12;break;case f:ee=de();break;case h:ee=de()/3;break;case u:ee=(J-De)/6048e5;break;case c:ee=(J-De)/864e5;break;case l:ee=J/r;break;case a:ee=J/i;break;case o:ee=J/t;break;default:ee=J}return L?ee:N.a(ee)},H.daysInMonth=function(){return this.endOf(f).$D},H.$locale=function(){return b[this.$L]},H.locale=function(I,$){if(!I)return this.$L;var L=this.clone(),ee=E(I,$,!0);return ee&&(L.$L=ee),L},H.clone=function(){return N.w(this.$d,this)},H.toDate=function(){return new Date(this.valueOf())},H.toJSON=function(){return this.isValid()?this.toISOString():null},H.toISOString=function(){return this.$d.toISOString()},H.toString=function(){return this.$d.toUTCString()},z}(),D=O.prototype;return x.prototype=D,[["$ms",s],["$s",o],["$m",a],["$H",l],["$W",c],["$M",f],["$y",d],["$D",g]].forEach(function(z){D[z[1]]=function(H){return this.$g(H,z[0],z[1])}}),x.extend=function(z,H){return z.$i||(z(H,O,x),z.$i=!0),x},x.locale=E,x.isDayjs=T,x.unix=function(z){return x(1e3*z)},x.en=b[U],x.Ls=b,x.p={},x})})(Mm);var X1=Mm.exports;const ta=$1(X1),Em={};import.meta.webpackHot&&(import.meta.webpackHot.accept(),__VUE_HMR_RUNTIME__.updateBlogCategory&&__VUE_HMR_RUNTIME__.updateBlogCategory(Em));const q1=["/blogs/%E5%A6%82%E4%BD%95%E4%BB%8E0%E5%88%B01%E6%90%AD%E5%BB%BA%E9%83%A8%E7%BD%B2%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99.html","/blogs/read5.html","/blogs/read4.html","/blogs/read3.html","/blogs/read2.html","/blogs/read1.html","/blogs/blog6.html","/blogs/blog5.html","/blogs/blog4.html","/blogs/blog3.html","/blogs/blog2.html","/blogs/blog1.html","/reads/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BAwebpack.html"],j1=Bi(Em);ns(j1);const bm={home:{"/":{path:"/home/",indexes:[]}},blog:{"/":{path:"/blog/",indexes:[0,1,2,3,4,5,6,7,8,9,10,11]}},project:{"/":{path:"/project/",indexes:[]}},read:{"/":{path:"/read/",indexes:[12]}}};import.meta.webpackHot&&(import.meta.webpackHot.accept(),__VUE_HMR_RUNTIME__.updateBlogType&&__VUE_HMR_RUNTIME__.updateBlogType(bm));const xc=Bi(bm);ns(xc);const Tm=n=>{const e=Rn(),t=ss();return xe(()=>{var o;const i=n??((o=e.value.blog)==null?void 0:o.key)??"";if(!i)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!xc.value[i])throw new Error(`useBlogType: key ${n} is invalid`);const r=xc.value[i][t.value],s={path:r.path,items:[]};for(const a of r.indexes){const{path:l,meta:c}=Zr(q1[a]);s.items.push({path:l,info:c._blog})}return s})},Y1=n=>(wd("data-v-8fa0b269"),n=n(),Rd(),n),K1={class:"blogs"},Z1={key:0,class:"year"},J1={class:"blog"},Q1=["onClick"],eR=Y1(()=>Pe("div",{class:"dot"},null,-1)),tR={class:"time"},nR={__name:"Blog",setup(n){const e=xe(()=>Tm("blog").value.items.map((i,r,s)=>{var o;return{...i.info,path:i.path,showYear:!r||ta((o=s[r-1])==null?void 0:o.info.date).year()!==ta(i==null?void 0:i.info.date).year()}}));return(t,i)=>(ye(),pt(za,null,{default:xt(()=>[Pe("div",K1,[(ye(!0),Oe(ut,null,Bn(e.value,r=>(ye(),Oe(ut,{key:r.id},[r.showYear?(ye(),Oe("div",Z1,gt(Ue(ta)(r.date).year()),1)):Tt("",!0),Pe("div",J1,[Pe("div",{class:"blogTitle",onClick:s=>t.$router.push(r.path)},gt(r.title),9,Q1),eR,Pe("div",tR,gt(Ue(ta)(r.date).format("YYYY-MM-DD")),1)])],64))),128))])]),_:1}))}},iR=mt(nR,[["__scopeId","data-v-8fa0b269"],["__file","Blog.vue"]]),rR={class:"reads"},sR=["onClick"],oR=["src"],aR={class:"title"},lR={__name:"Read",setup(n){const e=Tm("read");return(t,i)=>(ye(),pt(za,null,{default:xt(()=>[Pe("div",rR,[(ye(!0),Oe(ut,null,Bn(Ue(e).items,({info:r,path:s})=>(ye(),Oe("div",{key:s,class:"read"},[Pe("div",{class:"cover",onClick:o=>t.$router.push(s)},[Pe("img",{src:r.cover,alt:""},null,8,oR)],8,sR),Pe("div",aR,gt(r.title),1)]))),128))])]),_:1}))}},cR=mt(lR,[["__scopeId","data-v-70c5f97f"],["__file","Read.vue"]]),uR="/assets/no_project-Dn2-vLDd.gif",fR=n=>(wd("data-v-8b90cf01"),n=n(),Rd(),n),hR=fR(()=>Pe("div",{class:"project"},[Pe("div",{class:"icon"},[Pe("img",{src:uR,alt:""})]),Pe("div",{class:"info"},[Pe("div",{class:"name"},"No projects yet ~~")])],-1)),dR={__name:"Project",setup(n){return(e,t)=>(ye(),pt(za,null,{default:xt(()=>[hR]),_:1}))}},pR=mt(dR,[["__scopeId","data-v-8b90cf01"],["__file","Project.vue"]]),mR=oi({layouts:{Home:G1,Blog:iR,Read:cR,Project:pR}}),na=[sx,fx,Mx,wx,Hx,Gx,jx,oM,mR],gR=JSON.parse('{"base":"/","lang":"en-US","title":"Leslie","description":"穷且益坚，不坠青云之志","head":[],"locales":{}}');var bs=Bi(gR),_R=jv,vR=()=>{const n=x0({history:_R(sp("/")),routes:[{name:"vuepress-route",path:"/:catchAll(.*)",components:{}}],scrollBehavior:(e,t,i)=>i||(e.hash?{el:e.hash}:{top:0})});return n.beforeResolve(async(e,t)=>{if(e.path!==t.path||t===Jn){const i=Zr(e.path);if(i.path!==e.path)return i.path;const r=await i.loader();e.meta={...i.meta,_pageChunk:r}}else e.path===t.path&&(e.meta=t.meta)}),n},xR=n=>{n.component("ClientOnly",Gc),n.component("Content",w0),n.component("RouteLink",oo)},yR=(n,e,t)=>{const i=xe(()=>e.currentRoute.value.path),r=vg((m,p)=>({get(){return m(),e.currentRoute.value.meta._pageChunk},set(S){e.currentRoute.value.meta._pageChunk=S,p()}})),s=xe(()=>Xi.resolveLayouts(t)),o=xe(()=>Xi.resolveRouteLocale(bs.value.locales,i.value)),a=xe(()=>Xi.resolveSiteLocaleData(bs.value,o.value)),l=xe(()=>r.value.comp),c=xe(()=>r.value.data),u=xe(()=>c.value.frontmatter),f=xe(()=>Xi.resolvePageHeadTitle(c.value,a.value)),h=xe(()=>Xi.resolvePageHead(f.value,u.value,a.value)),d=xe(()=>Xi.resolvePageLang(c.value,a.value)),g=xe(()=>Xi.resolvePageLayout(c.value,s.value)),_={layouts:s,pageData:c,pageComponent:l,pageFrontmatter:u,pageHead:h,pageHeadTitle:f,pageLang:d,pageLayout:g,redirects:uc,routeLocale:o,routePath:i,routes:Gs,siteData:bs,siteLocaleData:a};return n.provide(kc,_),Object.defineProperties(n.config.globalProperties,{$frontmatter:{get:()=>u.value},$head:{get:()=>h.value},$headTitle:{get:()=>f.value},$lang:{get:()=>d.value},$page:{get:()=>c.value},$routeLocale:{get:()=>o.value},$site:{get:()=>bs.value},$siteLocale:{get:()=>a.value},$withBase:{get:()=>Fa}}),_},SR=()=>{const n=M0(),e=E0();let t=[];const i=()=>{n.value.forEach(o=>{const a=MR(o);a&&t.push(a)})},r=()=>{const o=[];return n.value.forEach(a=>{const l=ER(a);l&&o.push(l)}),o},s=()=>{document.documentElement.lang=e.value;const o=r();t.forEach((a,l)=>{const c=o.findIndex(u=>a.isEqualNode(u));c===-1?(a.remove(),delete t[l]):o.splice(c,1)}),o.forEach(a=>document.head.appendChild(a)),t=[...t.filter(a=>!!a),...o]};fr(A0,s),Yt(()=>{i(),Ht(n,s,{immediate:!1})})},MR=([n,e,t=""])=>{const i=Object.entries(e).map(([a,l])=>On(l)?`[${a}=${JSON.stringify(l)}]`:l===!0?`[${a}]`:"").join(""),r=`head > ${n}${i}`;return Array.from(document.querySelectorAll(r)).find(a=>a.innerText===t)||null},ER=([n,e,t])=>{if(!On(n))return null;const i=document.createElement(n);return Bc(e)&&Object.entries(e).forEach(([r,s])=>{On(s)?i.setAttribute(r,s):s===!0&&i.setAttribute(r,"")}),On(t)&&i.appendChild(document.createTextNode(t)),i},bR=ov,TR=async()=>{var t;const n=bR({name:"Vuepress",setup(){var s;SR();for(const o of na)(s=o.setup)==null||s.call(o);const i=na.flatMap(({rootComponents:o=[]})=>o.map(a=>dt(a))),r=b0();return()=>[dt(r.value),i]}}),e=vR();xR(n),yR(n,e,na);for(const i of na)await((t=i.enhance)==null?void 0:t.call(i,{app:n,router:e,siteData:bs}));return n.use(e),{app:n,router:e}};TR().then(({app:n,router:e})=>{e.isReady().then(()=>{n.mount("#app")})});export{mt as _,S_ as a,Pe as b,Oe as c,TR as createVueApp,Hn as d,We as e,ye as o,hr as r};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
