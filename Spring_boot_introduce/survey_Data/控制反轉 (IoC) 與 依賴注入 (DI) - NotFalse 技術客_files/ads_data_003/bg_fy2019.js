(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
'use strict';var g=this||self;function h(a){return a};var l;var m;var p=class{constructor(a,b){this.g=b===n?a:""}};p.prototype.toString=function(){return this.g+""};var n={};function q(a){if(void 0===m){var b=null;var c=g.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:h,createScript:h,createScriptURL:h})}catch(d){g.console&&g.console.error(d.message)}m=b}else m=b}a=(b=m)?b.createScriptURL(a):a;return new p(a,n)};(class{constructor(a,b){this.g=b===r?a:""}}).prototype.toString=function(){return this.g.toString()};var r={};var t=/^[\w+/_-]+[=]{0,2}$/;function u(a){u[" "](a);return a}u[" "]=function(){};function v(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)}function w(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)};function x(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}function y(a){this.g=a||g.document||document};function z(){var a=A;try{var b;if(b=!!a&&null!=a.location.href)a:{try{u(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}};function B(a,b=null){C(a,b)}function C(a,b){var c=window;c.google_image_requests||(c.google_image_requests=[]);const d=c.document.createElement("img");if(b){const f=e=>{b&&b(e);w(d,"load",f);w(d,"error",f)};v(d,"load",f);v(d,"error",f)}d.src=a;c.google_image_requests.push(d)};var D=document;var E=(a,b)=>{a.src=b instanceof p&&b.constructor===p?b.g:"type_error:TrustedResourceUrl";a:{b=(a.ownerDocument&&a.ownerDocument.defaultView||g).document;if(b.querySelector&&(b=b.querySelector("script[nonce]"))&&(b=b.nonce||b.getAttribute("nonce"))&&t.test(b))break a;b=""}b&&a.setAttribute("nonce",b)};var H=(a=document)=>{var b=F,c=G;const d=x((a?new y(9==a.nodeType?a:a.ownerDocument||a.document):l||(l=new y)).g,"SCRIPT");d.type="text/javascript";c&&(void 0!==d.onreadystatechange?d.onreadystatechange=()=>{if("complete"==d.readyState||"loaded"==d.readyState)try{c&&c()}catch(e){}}:d.onload=c);E(d,q(b));const f=a.getElementsByTagName("head")[0];if(f)try{g.setTimeout(()=>{f.appendChild(d)},0)}catch(e){}},I=!!window.google_async_iframe_id;let A=I&&window.parent||window;let J=null;var K=()=>{const a=g.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()},L=()=>{const a=g.performance;return a&&a.now?a.now():null};class aa{constructor(a,b){var c=L()||K();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0}};const M=g.performance,ba=!!(M&&M.mark&&M.measure&&M.clearMarks),N=function(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}}(()=>{var a;if(a=ba){var b;if(null===J){J="";try{a="";try{a=g.top.location.hash}catch(c){a=g.location.hash}a&&(J=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=J;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function ca(a){a&&M&&N()&&(M.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),M.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))} 
class da{constructor(){var a=O;this.g=[];this.i=a||g;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.g=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.h=N()||(null!=b?b:1>Math.random())}start(a,b){if(!this.h)return null;a=new aa(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;M&&N()&&M.mark(b);return a}end(a){if(this.h&&"number"===typeof a.value){a.duration=(L()||K())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;M&&N()&&M.mark(b);!this.h||2048<this.g.length|| 
this.g.push(a)}}};if(I&&!z()){let a="."+D.domain;try{for(;2<a.split(".").length&&!z();)D.domain=a=a.substr(a.indexOf(".")+1),A=window.parent}catch(b){}z()||(A=window)}const O=A,P=new da;var Q=()=>{O.google_measure_js_timing||(P.h=!1,P.g!=P.i.google_js_reporting_queue&&(N()&&Array.prototype.forEach.call(P.g,ca,void 0),P.g.length=0))};"number"!==typeof O.google_srt&&(O.google_srt=Math.random());"complete"==O.document.readyState?Q():P.h&&v(O,"load",()=>{Q()});var R=(a,b,c,d,f)=>{if(f)c=a+("&"+b+"="+c);else{var e="&"+b+"=";let k=a.indexOf(e);0>k?c=a+e+c:(k+=e.length,e=a.indexOf("&",k),c=0<=e?a.substring(0,k)+c+a.substring(e):a.substring(0,k)+c)}return 2E3<c.length?void 0!==d?R(a,b,d,void 0,f):a:c};let F,S,T,U,V; 
var W=()=>{w(window,"load",W);if(!V){var a=x(document,"IFRAME");a.frameBorder="0";a.style.height=0;a.style.width=0;a.style.position="absolute";V=a;document.body&&(document.body.appendChild(a),a=V)&&(a=a.contentWindow)&&(T="1",a.document.open(),a.document.write("<!doctype html><html><head></head><body></body></html>"),a.document.close(),H(a.document))}},G=()=>{var a=V;if(a&&(a=a.contentWindow))if(T="",a.botguard){var b=a.botguard.bg;if(b)try{X(()=>{U=new b(S)})}catch(c){T="5"}else T="3"}else T="2"}, 
Y=()=>{let a=null;try{a=window.rvdt,"number"===typeof a?a=36E5>a?""+a:"M":a=null}catch(b){}return a},X=a=>{window.wrpfc=a;window.wrpfc()},Z=()=>{var a=U;if(T)return T;if(!a)return"5";if(!a.invoke)return"4";let b;try{X(()=>{a.invoke(c=>{b=c})})}catch(c){return"6"}return b&&b.length?3>b.length?"7":1350<b.length?(v(window,"unload",()=>{var c=["bg",b],d=["id","bg"];if(d&&c&&d.length&&c.length&&d.length==c.length){var f=["https://","pagead2.googlesyndication.com","/pagead/gen_204"],e="?";for(let k=0;k< 
d.length;k++)f.push(e+d[k]+"="+c[k]),e="&";B(f.join(""),void 0)}}),"8"):b:"6"};window.bga=(a,b)=>{F=a;S=b;T="0";v(window,"load",W)};window.bgy=a=>{const b=Y();b&&(a=R(a,"rvdt",b));return R(a,"bg",Z(),"9")};window.bgz=a=>{const b=document.getElementById(a);if(b){var c=Y();c&&(window.css?window.css(a,"rvdt",c,void 0,void 0):b&&(b.href=R(b.href,"rvdt",c,void 0,void 0)));c=Z();window.css?window.css(a,"bg",c,!1,"9"):b&&(b.href=R(b.href,"bg",c,"9",!1))}};}).call(this);
