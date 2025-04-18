"use strict";(self.webpackChunk_canva_web=self.webpackChunk_canva_web||[]).push([[95433],{802011:(t,e,n)=>{n.d(e,{Dedupe:()=>i});var r=n(689735);class i{constructor(){i.prototype.__init.call(this)}static __initStatic(){this.id="Dedupe"}__init(){this.name=i.id}setupOnce(t,e){const n=t=>{const n=e().getIntegration(i);if(n){try{if(function(t,e){if(!e)return!1;if(function(t,e){const n=t.message,r=e.message;if(!n&&!r)return!1;if(n&&!r||!n&&r)return!1;if(n!==r)return!1;if(!c(t,e))return!1;if(!o(t,e))return!1;return!0}(t,e))return!0;if(function(t,e){const n=s(e),r=s(t);if(!n||!r)return!1;if(n.type!==r.type||n.value!==r.value)return!1;if(!c(t,e))return!1;if(!o(t,e))return!1;return!0}(t,e))return!0;return!1}(t,n._previousEvent))return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.logger.warn("Event dropped due to being a duplicate of previously captured event."),null}catch(a){return n._previousEvent=t}return n._previousEvent=t}return t};n.id=this.name,t(n)}}function o(t,e){let n=a(t),r=a(e);if(!n&&!r)return!0;if(n&&!r||!n&&r)return!1;if(r.length!==n.length)return!1;for(let i=0;i<r.length;i++){const t=r[i],e=n[i];if(t.filename!==e.filename||t.lineno!==e.lineno||t.colno!==e.colno||t.function!==e.function)return!1}return!0}function c(t,e){let n=t.fingerprint,r=e.fingerprint;if(!n&&!r)return!0;if(n&&!r||!n&&r)return!1;try{return!(n.join("")!==r.join(""))}catch(i){return!1}}function s(t){return t.exception&&t.exception.values&&t.exception.values[0]}function a(t){const e=t.exception;if(e)try{return e.values[0].stacktrace.frames}catch(n){return}}i.__initStatic()},681196:(t,e,n)=>{n.d(e,{ExtraErrorData:()=>s});var r=n(844119),i=n(961918),o=n(2612),c=n(689735);class s{static __initStatic(){this.id="ExtraErrorData"}__init(){this.name=s.id}constructor(t){s.prototype.__init.call(this),this._options={depth:3,...t}}setupOnce(t,e){t(((t,n)=>{const r=e().getIntegration(s);return r?r.enhanceEventWithErrorData(t,n):t}))}enhanceEventWithErrorData(t,e={}){if(!e.originalException||!(0,r.isError)(e.originalException))return t;const n=e.originalException.name||e.originalException.constructor.name,c=this._extractErrorData(e.originalException);if(c){const e={...t.contexts},s=(0,i.normalize)(c,this._options.depth);return(0,r.isPlainObject)(s)&&((0,o.addNonEnumerableProperty)(s,"__sentry_skip_normalization__",!0),e[n]=s),{...t,contexts:e}}return t}_extractErrorData(t){try{const e=["name","message","stack","line","column","fileName","lineNumber","columnNumber","toJSON"],n={};for(const i of Object.keys(t)){if(-1!==e.indexOf(i))continue;const o=t[i];n[i]=(0,r.isError)(o)?o.toString():o}if("function"==typeof t.toJSON){const e=t.toJSON();for(const t of Object.keys(e)){const i=e[t];n[t]=(0,r.isError)(i)?i.toString():i}}return n}catch(e){("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&c.logger.error("Unable to extract extra data from the Error object:",e)}return null}}s.__initStatic()},336105:(t,e,n)=>{n.d(e,{RewriteFrames:()=>i});var r=n(216256);class i{static __initStatic(){this.id="RewriteFrames"}__init(){this.name=i.id}__init2(){this._prefix="app:///"}constructor(t={}){i.prototype.__init.call(this),i.prototype.__init2.call(this),i.prototype.__init3.call(this),t.root&&(this._root=t.root),t.prefix&&(this._prefix=t.prefix),t.iteratee&&(this._iteratee=t.iteratee)}setupOnce(t,e){t((t=>{const n=e().getIntegration(i);return n?n.process(t):t}))}process(t){let e=t;return t.exception&&Array.isArray(t.exception.values)&&(e=this._processExceptionsEvent(e)),e}__init3(){this._iteratee=t=>{if(!t.filename)return t;const e=/^[A-Z]:\\/.test(t.filename),n=/^\//.test(t.filename);if(e||n){const n=e?t.filename.replace(/^[A-Z]:/,"").replace(/\\/g,"/"):t.filename,i=this._root?(0,r.relative)(this._root,n):(0,r.basename)(n);t.filename=`${this._prefix}${i}`}return t}}_processExceptionsEvent(t){try{return{...t,exception:{...t.exception,values:t.exception.values.map((t=>({...t,...t.stacktrace&&{stacktrace:this._processStacktrace(t.stacktrace)}})))}}}catch(e){return t}}_processStacktrace(t){return{...t,frames:t&&t.frames&&t.frames.map((t=>this._iteratee(t)))}}}i.__initStatic()},197062:(t,e,n)=>{n.d(e,{WINDOW:()=>i,getLocationHref:()=>s,htmlTreeAsString:()=>o});var r=n(844119);const i=n(355384).GLOBAL_OBJ;function o(t,e){try{let n=t;const r=5,i=80,o=[];let s=0,a=0;const u=" > ",f=u.length;let l;for(;n&&s++<r&&(l=c(n,e),!("html"===l||s>1&&a+o.length*f+l.length>=i));)o.push(l),a+=l.length,n=n.parentNode;return o.reverse().join(u)}catch(n){return"<unknown>"}}function c(t,e){const n=t,i=[];let o,c,s,a,u;if(!n||!n.tagName)return"";i.push(n.tagName.toLowerCase());const f=e&&e.length?e.filter((t=>n.getAttribute(t))).map((t=>[t,n.getAttribute(t)])):null;if(f&&f.length)f.forEach((t=>{i.push(`[${t[0]}="${t[1]}"]`)}));else if(n.id&&i.push(`#${n.id}`),o=n.className,o&&(0,r.isString)(o))for(c=o.split(/\s+/),u=0;u<c.length;u++)i.push(`.${c[u]}`);const l=["type","name","title","alt"];for(u=0;u<l.length;u++)s=l[u],a=n.getAttribute(s),a&&i.push(`[${s}="${a}"]`);return i.join("")}function s(){try{return i.document.location.href}catch(t){return""}}},801364:(t,e,n)=>{function r(t){let e,n=t[0],r=1;for(;r<t.length;){const i=t[r],o=t[r+1];if(r+=2,("optionalAccess"===i||"optionalCall"===i)&&null==n)return;"access"===i||"optionalAccess"===i?(e=n,n=o(n)):"call"!==i&&"optionalCall"!==i||(n=o(((...t)=>n.call(e,...t))),e=void 0)}return n}n.d(e,{_optionalChain:()=>r})},844119:(t,e,n)=>{n.d(e,{isDOMError:()=>s,isDOMException:()=>a,isElement:()=>_,isError:()=>i,isErrorEvent:()=>c,isEvent:()=>p,isInstanceOf:()=>m,isNaN:()=>d,isPlainObject:()=>l,isPrimitive:()=>f,isRegExp:()=>h,isString:()=>u,isSyntheticEvent:()=>y,isThenable:()=>g});const r=Object.prototype.toString;function i(t){switch(r.call(t)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return m(t,Error)}}function o(t,e){return r.call(t)===`[object ${e}]`}function c(t){return o(t,"ErrorEvent")}function s(t){return o(t,"DOMError")}function a(t){return o(t,"DOMException")}function u(t){return o(t,"String")}function f(t){return null===t||"object"!=typeof t&&"function"!=typeof t}function l(t){return o(t,"Object")}function p(t){return"undefined"!=typeof Event&&m(t,Event)}function _(t){return"undefined"!=typeof Element&&m(t,Element)}function h(t){return o(t,"RegExp")}function g(t){return Boolean(t&&t.then&&"function"==typeof t.then)}function y(t){return l(t)&&"nativeEvent"in t&&"preventDefault"in t&&"stopPropagation"in t}function d(t){return"number"==typeof t&&t!=t}function m(t,e){try{return t instanceof e}catch(n){return!1}}},689735:(t,e,n)=>{n.d(e,{CONSOLE_LEVELS:()=>i,consoleSandbox:()=>o,logger:()=>s});var r=n(355384);const i=["debug","info","warn","error","log","assert","trace"];function o(t){if(!("console"in r.GLOBAL_OBJ))return t();const e=r.GLOBAL_OBJ.console,n={};i.forEach((t=>{const r=e[t]&&e[t].__sentry_original__;t in e&&r&&(n[t]=e[t],e[t]=r)}));try{return t()}finally{Object.keys(n).forEach((t=>{e[t]=n[t]}))}}function c(){let t=!1;const e={enable:()=>{t=!0},disable:()=>{t=!1}};return"undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__?i.forEach((n=>{e[n]=(...e)=>{t&&o((()=>{r.GLOBAL_OBJ.console[n](`Sentry Logger [${n}]:`,...e)}))}})):i.forEach((t=>{e[t]=()=>{}})),e}let s;s="undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__?(0,r.getGlobalSingleton)("logger",c):c()},255058:(t,e,n)=>{function r(){const t="function"==typeof WeakSet,e=t?new WeakSet:[];return[function(n){if(t)return!!e.has(n)||(e.add(n),!1);for(let t=0;t<e.length;t++){if(e[t]===n)return!0}return e.push(n),!1},function(n){if(t)e.delete(n);else for(let t=0;t<e.length;t++)if(e[t]===n){e.splice(t,1);break}}]}n.d(e,{memoBuilder:()=>r})},961918:(t,e,n)=>{n.d(e,{normalize:()=>s,normalizeToSize:()=>a});var r=n(844119),i=n(255058),o=n(2612),c=n(346516);function s(t,e=1/0,n=1/0){try{return u("",t,e,n)}catch(r){return{ERROR:`**non-serializable** (${r})`}}}function a(t,e=3,n=102400){const r=s(t,e);return i=r,function(t){return~-encodeURI(t).split(/%..|./).length}(JSON.stringify(i))>n?a(t,e-1,n):r;var i}function u(t,e,s=1/0,a=1/0,f=(0,i.memoBuilder)()){const[l,p]=f;if(null===e||["number","boolean","string"].includes(typeof e)&&!(0,r.isNaN)(e))return e;const _=function(t,e){try{return"domain"===t&&e&&"object"==typeof e&&e._events?"[Domain]":"domainEmitter"===t?"[DomainEmitter]":void 0!==n.g&&e===n.g?"[Global]":"undefined"!=typeof window&&e===window?"[Window]":"undefined"!=typeof document&&e===document?"[Document]":(0,r.isSyntheticEvent)(e)?"[SyntheticEvent]":"number"==typeof e&&e!=e?"[NaN]":void 0===e?"[undefined]":"function"==typeof e?`[Function: ${(0,c.getFunctionName)(e)}]`:"symbol"==typeof e?`[${String(e)}]`:"bigint"==typeof e?`[BigInt: ${String(e)}]`:`[object ${Object.getPrototypeOf(e).constructor.name}]`}catch(i){return`**non-serializable** (${i})`}}(t,e);if(!_.startsWith("[object "))return _;if(e.__sentry_skip_normalization__)return e;if(0===s)return _.replace("object ","");if(l(e))return"[Circular ~]";const h=e;if(h&&"function"==typeof h.toJSON)try{return u("",h.toJSON(),s-1,a,f)}catch(m){}const g=Array.isArray(e)?[]:{};let y=0;const d=(0,o.convertToPlainObject)(e);for(const n in d){if(!Object.prototype.hasOwnProperty.call(d,n))continue;if(y>=a){g[n]="[MaxProperties ~]";break}const t=d[n];g[n]=u(n,t,s-1,a,f),y+=1}return p(e),g}},2612:(t,e,n)=>{n.d(e,{addNonEnumerableProperty:()=>s,convertToPlainObject:()=>l,dropUndefinedKeys:()=>g,extractExceptionKeysForMessage:()=>h,fill:()=>c,getOriginalFunction:()=>u,markFunctionWrapped:()=>a,urlEncode:()=>f});var r=n(197062),i=n(844119),o=n(294363);function c(t,e,n){if(!(e in t))return;const r=t[e],i=n(r);if("function"==typeof i)try{a(i,r)}catch(o){}t[e]=i}function s(t,e,n){Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0})}function a(t,e){const n=e.prototype||{};t.prototype=e.prototype=n,s(t,"__sentry_original__",e)}function u(t){return t.__sentry_original__}function f(t){return Object.keys(t).map((e=>`${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`)).join("&")}function l(t){if((0,i.isError)(t))return{message:t.message,name:t.name,stack:t.stack,..._(t)};if((0,i.isEvent)(t)){const e={type:t.type,target:p(t.target),currentTarget:p(t.currentTarget),..._(t)};return"undefined"!=typeof CustomEvent&&(0,i.isInstanceOf)(t,CustomEvent)&&(e.detail=t.detail),e}return t}function p(t){try{return(0,i.isElement)(t)?(0,r.htmlTreeAsString)(t):Object.prototype.toString.call(t)}catch(e){return"<unknown>"}}function _(t){if("object"==typeof t&&null!==t){const e={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}return{}}function h(t,e=40){const n=Object.keys(l(t));if(n.sort(),!n.length)return"[object has no keys]";if(n[0].length>=e)return(0,o.truncate)(n[0],e);for(let r=n.length;r>0;r--){const t=n.slice(0,r).join(", ");if(!(t.length>e))return r===n.length?t:(0,o.truncate)(t,e)}return""}function g(t){return y(t,new Map)}function y(t,e){if((0,i.isPlainObject)(t)){const n=e.get(t);if(void 0!==n)return n;const r={};e.set(t,r);for(const i of Object.keys(t))void 0!==t[i]&&(r[i]=y(t[i],e));return r}if(Array.isArray(t)){const n=e.get(t);if(void 0!==n)return n;const r=[];return e.set(t,r),t.forEach((t=>{r.push(y(t,e))})),r}return t}},216256:(t,e,n)=>{function r(t,e){let n=0;for(let r=t.length-1;r>=0;r--){const e=t[r];"."===e?t.splice(r,1):".."===e?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}n.d(e,{basename:()=>u,relative:()=>a});const i=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/;function o(t){const e=i.exec(t);return e?e.slice(1):[]}function c(...t){let e="",n=!1;for(let r=t.length-1;r>=-1&&!n;r--){const i=r>=0?t[r]:"/";i&&(e=`${i}/${e}`,n="/"===i.charAt(0))}return e=r(e.split("/").filter((t=>!!t)),!n).join("/"),(n?"/":"")+e||"."}function s(t){let e=0;for(;e<t.length&&""===t[e];e++);let n=t.length-1;for(;n>=0&&""===t[n];n--);return e>n?[]:t.slice(e,n-e+1)}function a(t,e){t=c(t).substr(1),e=c(e).substr(1);const n=s(t.split("/")),r=s(e.split("/")),i=Math.min(n.length,r.length);let o=i;for(let c=0;c<i;c++)if(n[c]!==r[c]){o=c;break}let a=[];for(let c=o;c<n.length;c++)a.push("..");return a=a.concat(r.slice(o)),a.join("/")}function u(t,e){let n=o(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n}},346516:(t,e,n)=>{n.d(e,{createStackParser:()=>i,getFunctionName:()=>s,stackParserFromStackParserOptions:()=>o});n(801364);const r=50;function i(...t){const e=t.sort(((t,e)=>t[0]-e[0])).map((t=>t[1]));return(t,n=0)=>{const i=[];for(const r of t.split("\n").slice(n)){const t=r.replace(/\(error: (.*)\)/,"$1");for(const n of e){const e=n(t);if(e){i.push(e);break}}}return function(t){if(!t.length)return[];let e=t;const n=e[0].function||"",i=e[e.length-1].function||"";-1===n.indexOf("captureMessage")&&-1===n.indexOf("captureException")||(e=e.slice(1));-1!==i.indexOf("sentryWrapped")&&(e=e.slice(0,-1));return e.slice(0,r).map((t=>({...t,filename:t.filename||e[0].filename,function:t.function||"?"}))).reverse()}(i)}}function o(t){return Array.isArray(t)?i(...t):t}const c="<anonymous>";function s(t){try{return t&&"function"==typeof t&&t.name||c}catch(e){return c}}},294363:(t,e,n)=>{n.d(e,{isMatchingPattern:()=>s,safeJoin:()=>c,snipLine:()=>o,truncate:()=>i});var r=n(844119);function i(t,e=0){return"string"!=typeof t||0===e||t.length<=e?t:`${t.substr(0,e)}...`}function o(t,e){let n=t;const r=n.length;if(r<=150)return n;e>r&&(e=r);let i=Math.max(e-60,0);i<5&&(i=0);let o=Math.min(i+140,r);return o>r-5&&(o=r),o===r&&(i=Math.max(o-140,0)),n=n.slice(i,o),i>0&&(n=`'{snip} ${n}`),o<r&&(n+=" {snip}"),n}function c(t,e){if(!Array.isArray(t))return"";const n=[];for(let i=0;i<t.length;i++){const e=t[i];try{n.push(String(e))}catch(r){n.push("[value cannot be serialized]")}}return n.join(e)}function s(t,e){return!!(0,r.isString)(t)&&((0,r.isRegExp)(e)?e.test(t):"string"==typeof e&&-1!==t.indexOf(e))}},355384:(t,e,n)=>{function r(t){return t&&t.Math==Math?t:void 0}n.d(e,{GLOBAL_OBJ:()=>i,getGlobalSingleton:()=>o});const i="object"==typeof globalThis&&r(globalThis)||"object"==typeof window&&r(window)||"object"==typeof self&&r(self)||"object"==typeof n.g&&r(n.g)||function(){return this}()||{};function o(t,e,n){const r=n||i,o=r.__SENTRY__=r.__SENTRY__||{};return o[t]||(o[t]=e())}}}]);
//# sourceMappingURL=sourcemaps/411de7fe679f1413.5a9ync.vendor.js.map