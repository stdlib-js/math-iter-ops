// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){var e=r.default;if("function"==typeof e){var t=function(){return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;var c,p=function(r,e,t){var n,c,p,v;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(f.call(r,e)||l.call(r,e)?(n=r.__proto__,r.__proto__=o,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),p="get"in t,v="set"in t,c&&(p||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(r,e,t.get),v&&a&&a.call(r,e,t.set),r},v=n,s=p,y=(c=t()?v:s,c);var b=function(r,e,t){y(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})},d=b,m=c;var h=function(r,e,t){m(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},g=h,w=/./;var j=function(r){return"boolean"==typeof r};var _=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var E=function(){return _&&"symbol"==typeof Symbol.toStringTag},S=Object.prototype.toString,x=S;var N=function(r){return x.call(r)},P=Object.prototype.hasOwnProperty;var M=function(r,e){return null!=r&&P.call(r,e)},O="function"==typeof Symbol?Symbol.toStringTag:"",A=M,T=O,k=S;var V=N,B=function(r){var e,t,n;if(null==r)return k.call(r);t=r[T],e=A(r,T);try{r[T]=void 0}catch(e){return k.call(r)}return n=k.call(r),e?r[T]=t:delete r[T],n},G=E()?B:V,C=Boolean.prototype.toString;var D=G,L=function(r){try{return C.call(r),!0}catch(r){return!1}},F=E();var R=function(r){return"object"==typeof r&&(r instanceof Boolean||(F?L(r):"[object Boolean]"===D(r)))},X=j,z=R;var I=g,U=function(r){return X(r)||z(r)},q=R;I(U,"isPrimitive",j),I(U,"isObject",q);var H=U;var J=function(){return new Function("return this;")()},K="object"==typeof self?self:null,Q="object"==typeof window?window:null,W="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Y="object"==typeof W?W:null;module.exports=Y;var Z=H.isPrimitive,$=J,rr=K,er=Q,tr=r(Object.freeze({__proto__:null}));var nr=function(r){if(arguments.length){if(!Z(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return $()}if(rr)return rr;if(er)return er;if(tr)return tr;throw new Error("unexpected error. Unable to resolve global object.")},or=nr(),ur=or.document&&or.document.childNodes,ir=Int8Array,ar=w,fr=ur,lr=ir;var cr=function(){return"function"==typeof ar||"object"==typeof lr||"function"==typeof fr};var pr=function(){return/^\s*function\s*([^(]*)/i},vr=pr;g(vr,"REGEXP",pr());var sr=vr,yr=G;var br=Array.isArray?Array.isArray:function(r){return"[object Array]"===yr(r)};var dr=function(r){return null!==r&&"object"==typeof r};g(dr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!br(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(dr));var mr=dr;var hr=G,gr=sr.REGEXP,wr=function(r){return mr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var jr=function(r){var e,t,n;if(("Object"===(t=hr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=gr.exec(n.toString()))return e[1]}return wr(r)?"Buffer":t},_r=jr;var Er=jr;var Sr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?_r(r).toLowerCase():e},xr=function(r){return Er(r).toLowerCase()},Nr=cr()?xr:Sr;var Pr=function(r){return"function"===Nr(r)};var Mr=function(r){return"number"==typeof r},Or=Number,Ar=Or.prototype.toString;var Tr=G,kr=Or,Vr=function(r){try{return Ar.call(r),!0}catch(r){return!1}},Br=E();var Gr=function(r){return"object"==typeof r&&(r instanceof kr||(Br?Vr(r):"[object Number]"===Tr(r)))},Cr=Mr,Dr=Gr;var Lr=g,Fr=function(r){return Cr(r)||Dr(r)},Rr=Gr;Lr(Fr,"isPrimitive",Mr),Lr(Fr,"isObject",Rr);var Xr=Fr,zr=Pr;var Ir=function(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&zr(r.next)},Ur=M;var qr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Ur(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Hr=g,Jr=Pr,Kr=Xr.isPrimitive,Qr=Ir,Wr=qr;var Yr=function r(){var e,t,n,o,u,i;if((n=arguments.length)<2)throw new Error("insufficient input arguments. Must provide two or more iterators.");for(e=[],t=[],i=0;i<n;i++)if(e.push(arguments[i]),Qr(arguments[i]))t.push(1);else{if(!Kr(arguments[i]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `"+i+"`. Value: `"+arguments[i]+"`.");t.push(0)}if(Hr(o={},"next",a),Hr(o,"return",f),Wr){for(i=0;i<n;i++)if(t[i]&&!Jr(e[i][Wr])){u=!0;break}u||Hr(o,Wr,l)}return u=!1,i=0,o;function a(){var r,o,i;if(u)return{done:!0};for(r=0,i=0;i<n;i++)if(t[i]){if((o=e[i].next()).done)return u=!0,o;"number"==typeof o.value?r+=o.value:r=NaN}else r+=e[i];return{value:r,done:!1}}function f(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){var o,u;for(o=[],u=0;u<n;u++)t[u]?o.push(e[u][Wr]()):o.push(e[u]);return r.apply(null,o)}},Zr=Yr,$r=g,re=Pr,ee=Xr.isPrimitive,te=Ir,ne=qr;var oe=function r(){var e,t,n,o,u,i;if((n=arguments.length)<2)throw new Error("insufficient input arguments. Must provide two or more iterators.");for(e=[],t=[],i=0;i<n;i++)if(e.push(arguments[i]),te(arguments[i]))t.push(1);else{if(!ee(arguments[i]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `"+i+"`. Value: `"+arguments[i]+"`.");t.push(0)}if($r(o={},"next",a),$r(o,"return",f),ne){for(i=0;i<n;i++)if(t[i]&&!re(e[i][ne])){u=!0;break}u||$r(o,ne,l)}return u=!1,i=0,o;function a(){var r,o,i;if(u)return{done:!0};if(t[0]){if((o=e[0].next()).done)return u=!0,o;r="number"==typeof o.value?o.value:NaN}else r=e[0];for(i=1;i<n;i++)if(t[i]){if((o=e[i].next()).done)return u=!0,o;"number"==typeof o.value?r/=o.value:r=NaN}else r/=e[i];return{value:r,done:!1}}function f(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){var o,u;for(o=[],u=0;u<n;u++)t[u]?o.push(e[u][ne]()):o.push(e[u]);return r.apply(null,o)}},ue=oe,ie=g,ae=Pr,fe=Xr.isPrimitive,le=Ir,ce=qr;var pe=function r(){var e,t,n,o,u,i;if((n=arguments.length)<2)throw new Error("insufficient input arguments. Must provide two or more iterators.");for(e=[],t=[],i=0;i<n;i++)if(e.push(arguments[i]),le(arguments[i]))t.push(1);else{if(!fe(arguments[i]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `"+i+"`. Value: `"+arguments[i]+"`.");t.push(0)}if(ie(o={},"next",a),ie(o,"return",f),ce){for(i=0;i<n;i++)if(t[i]&&!ae(e[i][ce])){u=!0;break}u||ie(o,ce,l)}return u=!1,i=0,o;function a(){var r,o,i;if(u)return{done:!0};if(t[0]){if((o=e[0].next()).done)return u=!0,o;r="number"==typeof o.value?o.value:NaN}else r=e[0];for(i=1;i<n;i++)if(t[i]){if((o=e[i].next()).done)return u=!0,o;"number"==typeof o.value?r%=o.value:r=NaN}else r%=e[i];return{value:r,done:!1}}function f(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){var o,u;for(o=[],u=0;u<n;u++)t[u]?o.push(e[u][ce]()):o.push(e[u]);return r.apply(null,o)}},ve=pe,se=g,ye=Pr,be=Xr.isPrimitive,de=Ir,me=qr;var he=function r(){var e,t,n,o,u,i;if((n=arguments.length)<2)throw new Error("insufficient input arguments. Must provide two or more iterators.");for(e=[],t=[],i=0;i<n;i++)if(e.push(arguments[i]),de(arguments[i]))t.push(1);else{if(!be(arguments[i]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `"+i+"`. Value: `"+arguments[i]+"`.");t.push(0)}if(se(o={},"next",a),se(o,"return",f),me){for(i=0;i<n;i++)if(t[i]&&!ye(e[i][me])){u=!0;break}u||se(o,me,l)}return u=!1,i=0,o;function a(){var r,o,i;if(u)return{done:!0};for(r=1,i=0;i<n;i++)if(t[i]){if((o=e[i].next()).done)return u=!0,o;"number"==typeof o.value?r*=o.value:r=NaN}else r*=e[i];return{value:r,done:!1}}function f(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){var o,u;for(o=[],u=0;u<n;u++)t[u]?o.push(e[u][me]()):o.push(e[u]);return r.apply(null,o)}},ge=he,we=g,je=Pr,_e=Xr.isPrimitive,Ee=Ir,Se=qr;var xe=function r(){var e,t,n,o,u,i;if((n=arguments.length)<2)throw new Error("insufficient input arguments. Must provide two or more iterators.");for(e=[],t=[],i=0;i<n;i++)if(e.push(arguments[i]),Ee(arguments[i]))t.push(1);else{if(!_e(arguments[i]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `"+i+"`. Value: `"+arguments[i]+"`.");t.push(0)}if(we(o={},"next",a),we(o,"return",f),Se){for(i=0;i<n;i++)if(t[i]&&!je(e[i][Se])){u=!0;break}u||we(o,Se,l)}return u=!1,i=0,o;function a(){var r,o,i;if(u)return{done:!0};if(t[0]){if((o=e[0].next()).done)return u=!0,o;r="number"==typeof o.value?o.value:NaN}else r=e[0];for(i=1;i<n;i++)if(t[i]){if((o=e[i].next()).done)return u=!0,o;"number"==typeof o.value?r-=o.value:r=NaN}else r-=e[i];return{value:r,done:!1}}function f(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){var o,u;for(o=[],u=0;u<n;u++)t[u]?o.push(e[u][Se]()):o.push(e[u]);return r.apply(null,o)}},Ne=xe,Pe={};d(Pe,"iterAdd",Zr),d(Pe,"iterDivide",ue),d(Pe,"iterMod",ve),d(Pe,"iterMultiply",ge),d(Pe,"iterSubtract",Ne);export{Pe as default,Zr as iterAdd,ue as iterDivide,ve as iterMod,ge as iterMultiply,Ne as iterSubtract};
//# sourceMappingURL=mod.js.map
