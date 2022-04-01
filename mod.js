// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;var c,p=function(r,e,t){var n,c,p,v;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(f.call(r,e)||l.call(r,e)?(n=r.__proto__,r.__proto__=o,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),p="get"in t,v="set"in t,c&&(p||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(r,e,t.get),v&&a&&a.call(r,e,t.set),r},v=n,s=p,y=(c=t()?v:s,c);var b=function(r,e,t){y(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})},d=b,m=c;var h=function(r,e,t){m(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},g=h,w=/./;var j=function(r){return"boolean"==typeof r};var _=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var E=function(){return _&&"symbol"==typeof Symbol.toStringTag},S=Object.prototype.toString,N=S;var x=function(r){return N.call(r)},M=Object.prototype.hasOwnProperty;var P=function(r,e){return null!=r&&M.call(r,e)},O="function"==typeof Symbol?Symbol.toStringTag:"",A=P,T=O,k=S;var V=x,B=function(r){var e,t,n;if(null==r)return k.call(r);t=r[T],e=A(r,T);try{r[T]=void 0}catch(e){return k.call(r)}return n=k.call(r),e?r[T]=t:delete r[T],n},G=E()?B:V,C=Boolean.prototype.toString;var D=G,L=function(r){try{return C.call(r),!0}catch(r){return!1}},F=E();var R=function(r){return"object"==typeof r&&(r instanceof Boolean||(F?L(r):"[object Boolean]"===D(r)))},X=j,z=R;var I=g,U=function(r){return X(r)||z(r)},q=R;I(U,"isPrimitive",j),I(U,"isObject",q);var H="object"==typeof self?self:null,J="object"==typeof window?window:null,K=U.isPrimitive,Q=function(){return new Function("return this;")()},W=H,Y=J,Z=r(Object.freeze({__proto__:null}));var $=function(r){if(arguments.length){if(!K(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Q()}if(W)return W;if(Y)return Y;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},rr=$(),er=rr.document&&rr.document.childNodes,tr=Int8Array,nr=w,or=er,ur=tr;var ir=function(){return"function"==typeof nr||"object"==typeof ur||"function"==typeof or};var ar=function(){return/^\s*function\s*([^(]*)/i},fr=ar;g(fr,"REGEXP",ar());var lr=fr,cr=G;var pr=Array.isArray?Array.isArray:function(r){return"[object Array]"===cr(r)};var vr=function(r){return null!==r&&"object"==typeof r};g(vr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!pr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(vr));var sr=vr;var yr=G,br=lr.REGEXP,dr=function(r){return sr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var mr=function(r){var e,t,n;if(("Object"===(t=yr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=br.exec(n.toString()))return e[1]}return dr(r)?"Buffer":t},hr=mr;var gr=mr;var wr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?hr(r).toLowerCase():e},jr=function(r){return gr(r).toLowerCase()},_r=ir()?jr:wr;var Er=function(r){return"function"===_r(r)};var Sr=function(r){return"number"==typeof r},Nr=Number,xr=Nr.prototype.toString;var Mr=G,Pr=Nr,Or=function(r){try{return xr.call(r),!0}catch(r){return!1}},Ar=E();var Tr=function(r){return"object"==typeof r&&(r instanceof Pr||(Ar?Or(r):"[object Number]"===Mr(r)))},kr=Sr,Vr=Tr;var Br=g,Gr=function(r){return kr(r)||Vr(r)},Cr=Tr;Br(Gr,"isPrimitive",Sr),Br(Gr,"isObject",Cr);var Dr=Gr,Lr=Er;var Fr=function(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&Lr(r.next)},Rr=P;var Xr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Rr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,zr=g,Ir=Er,Ur=Dr.isPrimitive,qr=Fr,Hr=Xr;var Jr=function r(){var e,t,n,o,u,i;if((n=arguments.length)<2)throw new Error("insufficient input arguments. Must provide two or more iterators.");for(e=[],t=[],i=0;i<n;i++)if(e.push(arguments[i]),qr(arguments[i]))t.push(1);else{if(!Ur(arguments[i]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `"+i+"`. Value: `"+arguments[i]+"`.");t.push(0)}if(zr(o={},"next",a),zr(o,"return",f),Hr){for(i=0;i<n;i++)if(t[i]&&!Ir(e[i][Hr])){u=!0;break}u||zr(o,Hr,l)}return u=!1,i=0,o;function a(){var r,o,i;if(u)return{done:!0};for(r=0,i=0;i<n;i++)if(t[i]){if((o=e[i].next()).done)return u=!0,o;"number"==typeof o.value?r+=o.value:r=NaN}else r+=e[i];return{value:r,done:!1}}function f(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){var o,u;for(o=[],u=0;u<n;u++)t[u]?o.push(e[u][Hr]()):o.push(e[u]);return r.apply(null,o)}},Kr=Jr,Qr=g,Wr=Er,Yr=Dr.isPrimitive,Zr=Fr,$r=Xr;var re=function r(){var e,t,n,o,u,i;if((n=arguments.length)<2)throw new Error("insufficient input arguments. Must provide two or more iterators.");for(e=[],t=[],i=0;i<n;i++)if(e.push(arguments[i]),Zr(arguments[i]))t.push(1);else{if(!Yr(arguments[i]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `"+i+"`. Value: `"+arguments[i]+"`.");t.push(0)}if(Qr(o={},"next",a),Qr(o,"return",f),$r){for(i=0;i<n;i++)if(t[i]&&!Wr(e[i][$r])){u=!0;break}u||Qr(o,$r,l)}return u=!1,i=0,o;function a(){var r,o,i;if(u)return{done:!0};if(t[0]){if((o=e[0].next()).done)return u=!0,o;r="number"==typeof o.value?o.value:NaN}else r=e[0];for(i=1;i<n;i++)if(t[i]){if((o=e[i].next()).done)return u=!0,o;"number"==typeof o.value?r/=o.value:r=NaN}else r/=e[i];return{value:r,done:!1}}function f(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){var o,u;for(o=[],u=0;u<n;u++)t[u]?o.push(e[u][$r]()):o.push(e[u]);return r.apply(null,o)}},ee=re,te=g,ne=Er,oe=Dr.isPrimitive,ue=Fr,ie=Xr;var ae=function r(){var e,t,n,o,u,i;if((n=arguments.length)<2)throw new Error("insufficient input arguments. Must provide two or more iterators.");for(e=[],t=[],i=0;i<n;i++)if(e.push(arguments[i]),ue(arguments[i]))t.push(1);else{if(!oe(arguments[i]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `"+i+"`. Value: `"+arguments[i]+"`.");t.push(0)}if(te(o={},"next",a),te(o,"return",f),ie){for(i=0;i<n;i++)if(t[i]&&!ne(e[i][ie])){u=!0;break}u||te(o,ie,l)}return u=!1,i=0,o;function a(){var r,o,i;if(u)return{done:!0};if(t[0]){if((o=e[0].next()).done)return u=!0,o;r="number"==typeof o.value?o.value:NaN}else r=e[0];for(i=1;i<n;i++)if(t[i]){if((o=e[i].next()).done)return u=!0,o;"number"==typeof o.value?r%=o.value:r=NaN}else r%=e[i];return{value:r,done:!1}}function f(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){var o,u;for(o=[],u=0;u<n;u++)t[u]?o.push(e[u][ie]()):o.push(e[u]);return r.apply(null,o)}},fe=ae,le=g,ce=Er,pe=Dr.isPrimitive,ve=Fr,se=Xr;var ye=function r(){var e,t,n,o,u,i;if((n=arguments.length)<2)throw new Error("insufficient input arguments. Must provide two or more iterators.");for(e=[],t=[],i=0;i<n;i++)if(e.push(arguments[i]),ve(arguments[i]))t.push(1);else{if(!pe(arguments[i]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `"+i+"`. Value: `"+arguments[i]+"`.");t.push(0)}if(le(o={},"next",a),le(o,"return",f),se){for(i=0;i<n;i++)if(t[i]&&!ce(e[i][se])){u=!0;break}u||le(o,se,l)}return u=!1,i=0,o;function a(){var r,o,i;if(u)return{done:!0};for(r=1,i=0;i<n;i++)if(t[i]){if((o=e[i].next()).done)return u=!0,o;"number"==typeof o.value?r*=o.value:r=NaN}else r*=e[i];return{value:r,done:!1}}function f(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){var o,u;for(o=[],u=0;u<n;u++)t[u]?o.push(e[u][se]()):o.push(e[u]);return r.apply(null,o)}},be=ye,de=g,me=Er,he=Dr.isPrimitive,ge=Fr,we=Xr;var je=function r(){var e,t,n,o,u,i;if((n=arguments.length)<2)throw new Error("insufficient input arguments. Must provide two or more iterators.");for(e=[],t=[],i=0;i<n;i++)if(e.push(arguments[i]),ge(arguments[i]))t.push(1);else{if(!he(arguments[i]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `"+i+"`. Value: `"+arguments[i]+"`.");t.push(0)}if(de(o={},"next",a),de(o,"return",f),we){for(i=0;i<n;i++)if(t[i]&&!me(e[i][we])){u=!0;break}u||de(o,we,l)}return u=!1,i=0,o;function a(){var r,o,i;if(u)return{done:!0};if(t[0]){if((o=e[0].next()).done)return u=!0,o;r="number"==typeof o.value?o.value:NaN}else r=e[0];for(i=1;i<n;i++)if(t[i]){if((o=e[i].next()).done)return u=!0,o;"number"==typeof o.value?r-=o.value:r=NaN}else r-=e[i];return{value:r,done:!1}}function f(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){var o,u;for(o=[],u=0;u<n;u++)t[u]?o.push(e[u][we]()):o.push(e[u]);return r.apply(null,o)}},_e=je,Ee=d,Se={};Ee(Se,"iterAdd",Kr),Ee(Se,"iterDivide",ee),Ee(Se,"iterMod",fe),Ee(Se,"iterMultiply",be),Ee(Se,"iterSubtract",_e);var Ne=Se;export{Ne as default,Kr as iterAdd,ee as iterDivide,fe as iterMod,be as iterMultiply,_e as iterSubtract};
//# sourceMappingURL=mod.js.map
