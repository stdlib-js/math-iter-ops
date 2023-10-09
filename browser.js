// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var o=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(o=!0,e=e.substr(1)),e=t?e+n(i):n(i)+e,o&&(e="-"+e)),e}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=o(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=o(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):i.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(e){return"string"==typeof e}var l=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,d=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,v=/^(\d+)e/,b=/\.0$/,y=/\.0*e/,m=/(\..*[^0])0*e/;function w(e){var r,n,o=parseFloat(e.arg);if(!isFinite(o)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);o=e.arg}switch(e.specifier){case"e":case"E":n=o.toExponential(e.precision);break;case"f":case"F":n=o.toFixed(e.precision);break;case"g":case"G":l(o)<1e-4?((r=e.precision)>0&&(r-=1),n=o.toExponential(r)):n=o.toPrecision(e.precision),e.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,y,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,d,"e+0$1"),n=p.call(n,g,"e-0$1"),e.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,v,"$1.e")),o>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):c.call(n)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function x(e,r,t){var n=r-e.length;return n<0?e:e=t?e+j(n):j(n)+e}var E=String.fromCharCode,_=isNaN,S=Array.isArray;function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function A(e){var r,t,n,i,a,l,c,s,p;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",c=1,s=0;s<e.length;s++)if(f(n=e[s]))l+=n;else{if(r=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,_(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=x(n.arg,n.width,n.padRight)),l+=n.arg||"",c+=1}return l}var N=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,n,o;for(t=[],o=0,n=N.exec(e);n;)(r=e.slice(o,N.lastIndex-n[0].length)).length&&t.push(r),t.push(T(n)),o=N.lastIndex,n=N.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function M(e){return"string"==typeof e}function O(e){var r,t,n;if(!M(e))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=V(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return A.apply(null,t)}var F,$=Object.prototype,C=$.toString,I=$.__defineGetter__,P=$.__defineSetter__,B=$.__lookupGetter__,R=$.__lookupSetter__;F=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(B.call(e,r)||R.call(e,r)?(n=e.__proto__,e.__proto__=$,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&I&&I.call(e,r,t.get),a&&P&&P.call(e,r,t.set),e};var L=F;function G(e,r,t){L(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}function Z(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var W=/./;function U(e){return"boolean"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return X&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString,q=Object.prototype.hasOwnProperty;function H(e,r){return null!=e&&q.call(e,r)}var J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"",Q=z()?function(e){var r,t,n;if(null==e)return D.call(e);t=e[K],r=H(e,K);try{e[K]=void 0}catch(r){return D.call(e)}return n=D.call(e),r?e[K]=t:delete e[K],n}:function(e){return D.call(e)},Y=Boolean,ee=Boolean.prototype.toString,re=z();function te(e){return"object"==typeof e&&(e instanceof Y||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Q(e)))}function ne(e){return U(e)||te(e)}function oe(){return new Function("return this;")()}Z(ne,"isPrimitive",U),Z(ne,"isObject",te);var ie="object"==typeof self?self:null,ae="object"==typeof window?window:null,ue="object"==typeof globalThis?globalThis:null,fe=function(e){if(arguments.length){if(!U(e))throw new TypeError(O("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return oe()}if(ue)return ue;if(ie)return ie;if(ae)return ae;throw new Error("unexpected error. Unable to resolve global object.")}(),le=fe.document&&fe.document.childNodes,ce=Int8Array;function se(){return/^\s*function\s*([^(]*)/i}var pe=/^\s*function\s*([^(]*)/i;Z(se,"REGEXP",pe);var de=Array.isArray?Array.isArray:function(e){return"[object Array]"===Q(e)};function ge(e){return null!==e&&"object"==typeof e}function he(e){var r,t,n,o;if(("Object"===(t=Q(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=pe.exec(n.toString()))return r[1]}return ge(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}Z(ge,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(O("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!de(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ge));var ve="function"==typeof W||"object"==typeof ce||"function"==typeof le?function(e){return he(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?he(e).toLowerCase():r};function be(e){return"function"===ve(e)}function ye(e){return"number"==typeof e}var me=Number,we=me.prototype.toString,je=z();function xe(e){return"object"==typeof e&&(e instanceof me||(je?function(e){try{return we.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Q(e)))}function Ee(e){return ye(e)||xe(e)}function _e(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&be(e.next)}Z(Ee,"isPrimitive",ye),Z(Ee,"isObject",xe);var Se="function"==typeof J&&"symbol"==typeof J("foo")&&H(J,"iterator")&&"symbol"==typeof J.iterator?Symbol.iterator:null,ke={};return G(ke,"iterAdd",(function e(){var r,t,n,o,i,a;if((n=arguments.length)<2)throw new Error("insufficient arguments. Must provide two or more iterators.");for(r=[],t=[],a=0;a<n;a++)if(r.push(arguments[a]),_e(arguments[a]))t.push(1);else{if(!ye(arguments[a]))throw new TypeError(O("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `%u`. Value: `%s`.",a,arguments[a]));t.push(0)}if(Z(o={},"next",u),Z(o,"return",f),Se){for(a=0;a<n;a++)if(t[a]&&!be(r[a][Se])){i=!0;break}i||Z(o,Se,l)}return i=!1,a=0,o;function u(){var e,o,a;if(i)return{done:!0};for(e=0,a=0;a<n;a++)if(t[a]){if((o=r[a].next()).done)return i=!0,o;"number"==typeof o.value?e+=o.value:e=NaN}else e+=r[a];return{value:e,done:!1}}function f(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){var o,i;for(o=[],i=0;i<n;i++)t[i]?o.push(r[i][Se]()):o.push(r[i]);return e.apply(null,o)}})),G(ke,"iterDivide",(function e(){var r,t,n,o,i,a;if((n=arguments.length)<2)throw new Error("insufficient arguments. Must provide two or more iterators.");for(r=[],t=[],a=0;a<n;a++)if(r.push(arguments[a]),_e(arguments[a]))t.push(1);else{if(!ye(arguments[a]))throw new TypeError(O("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `%u`. Value: `%s`.",a,arguments[a]));t.push(0)}if(Z(o={},"next",u),Z(o,"return",f),Se){for(a=0;a<n;a++)if(t[a]&&!be(r[a][Se])){i=!0;break}i||Z(o,Se,l)}return i=!1,a=0,o;function u(){var e,o,a;if(i)return{done:!0};if(t[0]){if((o=r[0].next()).done)return i=!0,o;e="number"==typeof o.value?o.value:NaN}else e=r[0];for(a=1;a<n;a++)if(t[a]){if((o=r[a].next()).done)return i=!0,o;"number"==typeof o.value?e/=o.value:e=NaN}else e/=r[a];return{value:e,done:!1}}function f(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){var o,i;for(o=[],i=0;i<n;i++)t[i]?o.push(r[i][Se]()):o.push(r[i]);return e.apply(null,o)}})),G(ke,"iterMod",(function e(){var r,t,n,o,i,a;if((n=arguments.length)<2)throw new Error("insufficient arguments. Must provide two or more iterators.");for(r=[],t=[],a=0;a<n;a++)if(r.push(arguments[a]),_e(arguments[a]))t.push(1);else{if(!ye(arguments[a]))throw new TypeError(O("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `%u`. Value: `%s`.",a,arguments[a]));t.push(0)}if(Z(o={},"next",u),Z(o,"return",f),Se){for(a=0;a<n;a++)if(t[a]&&!be(r[a][Se])){i=!0;break}i||Z(o,Se,l)}return i=!1,a=0,o;function u(){var e,o,a;if(i)return{done:!0};if(t[0]){if((o=r[0].next()).done)return i=!0,o;e="number"==typeof o.value?o.value:NaN}else e=r[0];for(a=1;a<n;a++)if(t[a]){if((o=r[a].next()).done)return i=!0,o;"number"==typeof o.value?e%=o.value:e=NaN}else e%=r[a];return{value:e,done:!1}}function f(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){var o,i;for(o=[],i=0;i<n;i++)t[i]?o.push(r[i][Se]()):o.push(r[i]);return e.apply(null,o)}})),G(ke,"iterMultiply",(function e(){var r,t,n,o,i,a;if((n=arguments.length)<2)throw new Error("insufficient arguments. Must provide two or more iterators.");for(r=[],t=[],a=0;a<n;a++)if(r.push(arguments[a]),_e(arguments[a]))t.push(1);else{if(!ye(arguments[a]))throw new TypeError(O("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `%u`. Value: `%s`.",a,arguments[a]));t.push(0)}if(Z(o={},"next",u),Z(o,"return",f),Se){for(a=0;a<n;a++)if(t[a]&&!be(r[a][Se])){i=!0;break}i||Z(o,Se,l)}return i=!1,a=0,o;function u(){var e,o,a;if(i)return{done:!0};for(e=1,a=0;a<n;a++)if(t[a]){if((o=r[a].next()).done)return i=!0,o;"number"==typeof o.value?e*=o.value:e=NaN}else e*=r[a];return{value:e,done:!1}}function f(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){var o,i;for(o=[],i=0;i<n;i++)t[i]?o.push(r[i][Se]()):o.push(r[i]);return e.apply(null,o)}})),G(ke,"iterSubtract",(function e(){var r,t,n,o,i,a;if((n=arguments.length)<2)throw new Error("insufficient arguments. Must provide two or more iterators.");for(r=[],t=[],a=0;a<n;a++)if(r.push(arguments[a]),_e(arguments[a]))t.push(1);else{if(!ye(arguments[a]))throw new TypeError(O("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `%u`. Value: `%s`.",a,arguments[a]));t.push(0)}if(Z(o={},"next",u),Z(o,"return",f),Se){for(a=0;a<n;a++)if(t[a]&&!be(r[a][Se])){i=!0;break}i||Z(o,Se,l)}return i=!1,a=0,o;function u(){var e,o,a;if(i)return{done:!0};if(t[0]){if((o=r[0].next()).done)return i=!0,o;e="number"==typeof o.value?o.value:NaN}else e=r[0];for(a=1;a<n;a++)if(t[a]){if((o=r[a].next()).done)return i=!0,o;"number"==typeof o.value?e-=o.value:e=NaN}else e-=r[a];return{value:e,done:!1}}function f(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){var o,i;for(o=[],i=0;i<n;i++)t[i]?o.push(r[i][Se]()):o.push(r[i]);return e.apply(null,o)}})),ke},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ns=r();
//# sourceMappingURL=browser.js.map
