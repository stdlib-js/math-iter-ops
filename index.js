// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ns=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,a=n.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,c,p,s;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(f.call(e,r)||a.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),p="get"in t,s="set"in t,c&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(e,r,t.get),s&&i&&i.call(e,r,t.set),e};var l=r;function c(e,r,t){l(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}function p(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var s=/./;function v(e){return"boolean"==typeof e}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;function h(e,r){return null!=e&&m.call(e,r)}var g="function"==typeof Symbol?Symbol.toStringTag:"";var w=b()?function(e){var r,t,n;if(null==e)return d.call(e);t=e[g],r=h(e,g);try{e[g]=void 0}catch(r){return d.call(e)}return n=d.call(e),r?e[g]=t:delete e[g],n}:function(e){return d.call(e)},j=Boolean.prototype.toString;var _=b();function S(e){return"object"==typeof e&&(e instanceof Boolean||(_?function(e){try{return j.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===w(e)))}function x(e){return v(e)||S(e)}function E(){return new Function("return this;")()}p(x,"isPrimitive",v),p(x,"isObject",S);var N="object"==typeof self?self:null,A="object"==typeof window?window:null,M="object"==typeof global?global:null;var T=function(e){if(arguments.length){if(!v(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return E()}if(N)return N;if(A)return A;if(M)return M;throw new Error("unexpected error. Unable to resolve global object.")}(),O=T.document&&T.document.childNodes,V=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var P=/^\s*function\s*([^(]*)/i;p(k,"REGEXP",P);var B=Array.isArray?Array.isArray:function(e){return"[object Array]"===w(e)};function C(e){return null!==e&&"object"==typeof e}function G(e){var r,t,n,o;if(("Object"===(t=w(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=P.exec(n.toString()))return r[1]}return C(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}p(C,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!B(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(C));var L="function"==typeof s||"object"==typeof V||"function"==typeof O?function(e){return G(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?G(e).toLowerCase():r};function F(e){return"function"===L(e)}function D(e){return"number"==typeof e}var I=Number,R=I.prototype.toString;var U=b();function X(e){return"object"==typeof e&&(e instanceof I||(U?function(e){try{return R.call(e),!0}catch(e){return!1}}(e):"[object Number]"===w(e)))}function q(e){return D(e)||X(e)}function z(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&F(e.next)}p(q,"isPrimitive",D),p(q,"isObject",X);var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&h(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var J={};return c(J,"iterAdd",(function e(){var r,t,n,o,u,i;if((n=arguments.length)<2)throw new Error("insufficient input arguments. Must provide two or more iterators.");for(r=[],t=[],i=0;i<n;i++)if(r.push(arguments[i]),z(arguments[i]))t.push(1);else{if(!D(arguments[i]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `"+i+"`. Value: `"+arguments[i]+"`.");t.push(0)}if(p(o={},"next",f),p(o,"return",a),H){for(i=0;i<n;i++)if(t[i]&&!F(r[i][H])){u=!0;break}u||p(o,H,l)}return u=!1,i=0,o;function f(){var e,o,i;if(u)return{done:!0};for(e=0,i=0;i<n;i++)if(t[i]){if((o=r[i].next()).done)return u=!0,o;"number"==typeof o.value?e+=o.value:e=NaN}else e+=r[i];return{value:e,done:!1}}function a(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){var o,u;for(o=[],u=0;u<n;u++)t[u]?o.push(r[u][H]()):o.push(r[u]);return e.apply(null,o)}})),c(J,"iterDivide",(function e(){var r,t,n,o,u,i;if((n=arguments.length)<2)throw new Error("insufficient input arguments. Must provide two or more iterators.");for(r=[],t=[],i=0;i<n;i++)if(r.push(arguments[i]),z(arguments[i]))t.push(1);else{if(!D(arguments[i]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `"+i+"`. Value: `"+arguments[i]+"`.");t.push(0)}if(p(o={},"next",f),p(o,"return",a),H){for(i=0;i<n;i++)if(t[i]&&!F(r[i][H])){u=!0;break}u||p(o,H,l)}return u=!1,i=0,o;function f(){var e,o,i;if(u)return{done:!0};if(t[0]){if((o=r[0].next()).done)return u=!0,o;e="number"==typeof o.value?o.value:NaN}else e=r[0];for(i=1;i<n;i++)if(t[i]){if((o=r[i].next()).done)return u=!0,o;"number"==typeof o.value?e/=o.value:e=NaN}else e/=r[i];return{value:e,done:!1}}function a(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){var o,u;for(o=[],u=0;u<n;u++)t[u]?o.push(r[u][H]()):o.push(r[u]);return e.apply(null,o)}})),c(J,"iterMod",(function e(){var r,t,n,o,u,i;if((n=arguments.length)<2)throw new Error("insufficient input arguments. Must provide two or more iterators.");for(r=[],t=[],i=0;i<n;i++)if(r.push(arguments[i]),z(arguments[i]))t.push(1);else{if(!D(arguments[i]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `"+i+"`. Value: `"+arguments[i]+"`.");t.push(0)}if(p(o={},"next",f),p(o,"return",a),H){for(i=0;i<n;i++)if(t[i]&&!F(r[i][H])){u=!0;break}u||p(o,H,l)}return u=!1,i=0,o;function f(){var e,o,i;if(u)return{done:!0};if(t[0]){if((o=r[0].next()).done)return u=!0,o;e="number"==typeof o.value?o.value:NaN}else e=r[0];for(i=1;i<n;i++)if(t[i]){if((o=r[i].next()).done)return u=!0,o;"number"==typeof o.value?e%=o.value:e=NaN}else e%=r[i];return{value:e,done:!1}}function a(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){var o,u;for(o=[],u=0;u<n;u++)t[u]?o.push(r[u][H]()):o.push(r[u]);return e.apply(null,o)}})),c(J,"iterMultiply",(function e(){var r,t,n,o,u,i;if((n=arguments.length)<2)throw new Error("insufficient input arguments. Must provide two or more iterators.");for(r=[],t=[],i=0;i<n;i++)if(r.push(arguments[i]),z(arguments[i]))t.push(1);else{if(!D(arguments[i]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `"+i+"`. Value: `"+arguments[i]+"`.");t.push(0)}if(p(o={},"next",f),p(o,"return",a),H){for(i=0;i<n;i++)if(t[i]&&!F(r[i][H])){u=!0;break}u||p(o,H,l)}return u=!1,i=0,o;function f(){var e,o,i;if(u)return{done:!0};for(e=1,i=0;i<n;i++)if(t[i]){if((o=r[i].next()).done)return u=!0,o;"number"==typeof o.value?e*=o.value:e=NaN}else e*=r[i];return{value:e,done:!1}}function a(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){var o,u;for(o=[],u=0;u<n;u++)t[u]?o.push(r[u][H]()):o.push(r[u]);return e.apply(null,o)}})),c(J,"iterSubtract",(function e(){var r,t,n,o,u,i;if((n=arguments.length)<2)throw new Error("insufficient input arguments. Must provide two or more iterators.");for(r=[],t=[],i=0;i<n;i++)if(r.push(arguments[i]),z(arguments[i]))t.push(1);else{if(!D(arguments[i]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `"+i+"`. Value: `"+arguments[i]+"`.");t.push(0)}if(p(o={},"next",f),p(o,"return",a),H){for(i=0;i<n;i++)if(t[i]&&!F(r[i][H])){u=!0;break}u||p(o,H,l)}return u=!1,i=0,o;function f(){var e,o,i;if(u)return{done:!0};if(t[0]){if((o=r[0].next()).done)return u=!0,o;e="number"==typeof o.value?o.value:NaN}else e=r[0];for(i=1;i<n;i++)if(t[i]){if((o=r[i].next()).done)return u=!0,o;"number"==typeof o.value?e-=o.value:e=NaN}else e-=r[i];return{value:e,done:!1}}function a(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){var o,u;for(o=[],u=0;u<n;u++)t[u]?o.push(r[u][H]()):o.push(r[u]);return e.apply(null,o)}})),J}));
//# sourceMappingURL=index.js.map
