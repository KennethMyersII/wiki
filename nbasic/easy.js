var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var ca=ba(this);
function da(a,b){if(b){var c=ca;a=a.split(".");for(var g=0;g<a.length-1;g++){var k=a[g];k in c||(c[k]={});c=c[k]}a=a[a.length-1];g=c[a];b=b(g);b!=g&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}da("Array.prototype.fill",function(a){return a?a:function(b,c,g){var k=this.length||0;0>c&&(c=Math.max(0,k+c));if(null==g||g>k)g=k;g=Number(g);0>g&&(g=Math.max(0,k+g));for(c=Number(c||0);c<g;c++)this[c]=b;return this}});window.kaRun=ea;window.kaFormat=fa;window.kaStop=d;window.easykey=ha;
window.easyrun=e;window.easygo=ia;window.easyinit=f;window.easyinp=ja;var h=[],l=0,m=null,n=null,p=null,q;function r(a){if(m=a)m.c=!1,600!=m.width&&(m.width=600,m.height=600)}function ia(a,b,c){b=void 0===b?null:b;c=void 0===c?null:c;r(b);b&&t();if(n=c)n.value="";q=!0;u.postMessage(["run",a,2,-1,null])}function e(a,b,c){h.push([a,void 0===b?null:b,void 0===c?null:c]);0==l&&f(h[0][1]);2>l||(m&&m.c?d():v())}
function v(){if(!q&&0!=h.length){var a=null,b=h.shift();1<b.length&&r(b[1]);2<b.length&&(a=b[2]);t();q=!0;u.postMessage(["runx",b[0],0,-1,a])}}function x(a,b){b=void 0===b?null:b;"ready"==a?(1==l&&y(null),l=2,q=!1,v()):"stopped"==a&&(q=!1,v());p&&p(a,b)}function t(){z();A=m.getContext("2d");B(8);A.lineWidth=6;C(3);A.a=0;A.b=0;D=null}var E=!1;function ea(a,b,c,g){b=void 0===b?null:b;c=void 0===c?0:c;g=void 0===g?-1:g;(m=F)&&t();E=!1;255<c&&(G=null,E=!0);q=!1;u.postMessage(["run",a,c,g,b])}
function fa(a,b){b=void 0===b?null:b;null==b?u.postMessage(["format",a]):u&&u.postMessage(["formatID",a,b])}function d(){H();m&&m.c?(u.postMessage(["stop_ping"]),z(),I=setTimeout(ka,500)):(u.terminate(),J())}var A=null,K=null,L=null;
function z(){m.c&&(m.c=!1,m.onmouseout=null,m.onmousedown=null,m.onmouseup=null,m.onmousemove=null,m.ontouchmove=null,m.ontouchstart=null,m.ontouchend=null,m.removeEventListener("keydown",M),m.removeAttribute("tabIndex"),K&&(cancelAnimationFrame(K),K=null),L&&(clearTimeout(L),L=null),m.style.cursor="default")}function N(a,b){var c=A.lineWidth/2;A.beginPath();A.arc(a,b,c,0,2*Math.PI);A.fill()}function B(a){A.font=""+Math.round(6*a)+"px monospace";A.h=5*a}
function C(a){1==a?D?A.putImageData(D,0,0):A.clearRect(0,0,600,600):2==a?D=A.getImageData(0,0,600,600):3==a?(a=window.getComputedStyle(m,null).color,A.fillStyle=a,A.strokeStyle=a):4==a?(a=window.getComputedStyle(m,null).backgroundColor,A.fillStyle=a,A.strokeStyle=a):10==a&&(a=m.toDataURL().substr(22),O(a+"\n"))}var G,D;
function P(a){switch(a[0]){case 1:A.a=6*a[1];A.b=6*a[2];break;case 2:var b=a[1];a=a[2];b*=6;a*=6;A.beginPath();A.moveTo(A.a,A.b);A.lineTo(b,a);A.stroke();N(A.a,A.b);N(b,a);A.a=b;A.b=a;break;case 3:A.beginPath();A.arc(A.a,A.b,6*a[1],0,2*Math.PI);A.fill();break;case 4:A.fillRect(A.a,A.b,6*a[1],6*a[2]);break;case 5:b=a[1];if(!(2>b.length)){A.beginPath();A.moveTo(6*b[0][0],6*b[0][1]);for(a=1;a<b.length;a++)A.lineTo(6*b[a][0],6*b[a][1]);A.fill()}break;case 6:A.fillText(a[1],A.a,A.b+A.h);break;case 7:C(a[1]);
break;case 8:A.lineWidth=6*a[1];break;case 9:b="rgb("+a[1]+","+a[2]+","+a[3]+")";A.fillStyle=b;A.strokeStyle=b;break;case 10:B(a[1]);break;case 11:m.c&&a[1]<Q.length&&(m.style.cursor=Q[a[1]]);break;case 12:if(b=a[1],!(2>b.length)){a=6*b[0][0];var c=6*b[0][1];N(a,c);A.beginPath();A.moveTo(a,c);if(2==b.length){var g=6*b[1][0],k=6*b[1][1];A.lineTo(a,c)}else{for(var w=1;;){a=6*b[w][0];c=6*b[w][1];g=6*b[w+1][0];k=6*b[w+1][1];if(w==b.length-2)break;A.quadraticCurveTo(a,c,(a+g)/2,(c+k)/2);w+=1}A.quadraticCurveTo(a,
c,g,k)}A.stroke();N(g,k)}}}var Q=["default","crosshair","pointer"];function la(a){if(1==a.length)a=a[0],E&&7>=a[0]&&G&&A.putImageData(G,A.a-6,A.b-6),P(a),E&&7>=a[0]&&(G=A.getImageData(A.a-6,A.b-6,12,12),a=A.fillStyle,A.fillStyle="red",A.beginPath(),A.arc(A.a,A.b,6,0,2*Math.PI),A.fill(),A.fillStyle=a);else for(var b=0;b<a.length;b++)P(a[b])}function ka(){u.terminate();J()}var I,R=null,S;function H(){R&&(R.close(),R.f&&clearTimeout(R.f),R=null)}
function T(){var a=S.shift(),b=1E3*a[1];R.g.frequency.setValueAtTime(a[0],R.currentTime);R.gain.gain.setTargetAtTime(1,R.currentTime,.01);R.f=setTimeout(ma,b)}function ma(){R.gain.gain.setTargetAtTime(0,R.currentTime,.05);0!=S.length&&(R.f=setTimeout(T,150))}function U(){R=new (window.AudioContext||window.webkitAudioContext);R.g=R.createOscillator();R.gain=R.createGain();R.gain.gain.setValueAtTime(0,R.currentTime);R.g.connect(R.gain);R.gain.connect(R.destination);R.g.start()}
function na(a){R||U();R.f&&(clearTimeout(R.f),R.gain.gain.setTargetAtTime(0,R.currentTime,.05));S=a;0!=S.length&&T()}var V=!1;function oa(a){var b=m.getBoundingClientRect();V=!0;var c=m.width/b.width/6;u.postMessage(["mouse",0,(a.clientX-b.left)*c,(a.clientY-b.top)*c]);m.focus();a.preventDefault()}function pa(a){W=a.touches[0];a.clientX=W.clientX;a.clientY=W.clientY;oa(a)}
function X(a){var b=m.getBoundingClientRect();V=!1;var c=m.width/b.width/6;u.postMessage(["mouse",1,(a.clientX-b.left)*c,(a.clientY-b.top)*c]);a.preventDefault()}function qa(a){var b=m.getBoundingClientRect(),c=m.width/b.width/6;u.postMessage(["mouse",2,(a.clientX-b.left)*c,(a.clientY-b.top)*c]);a.preventDefault()}function O(a){if(n){var b=n.value;6E4<b.length&&(b=b.substr(1E3));n.value=b+a;n.scrollTop=n.scrollHeight}else console.log(a)}
function Y(){R?(R.resume(),"running"==R.state&&(m.removeEventListener("mousedown",Y),m.removeEventListener("touchstart",Y),m.removeEventListener("touchend",Y))):U()}var W;
function ra(a){a=a.data;switch(a[0]){case "list":la(a[1]);break;case "print":O(a[1]);break;case "ide":a.shift();var b=a.shift();x(b,a);break;case "stderr":console.log(a[1]);break;case "started":console.log("started");window.sab=null;"function"==typeof SharedArrayBuffer&&(window.sab=new SharedArrayBuffer(112));u.postMessage(["init",window.sab,navigator.language.substring(0,2)]);x("ready");break;case "done":E&&G&&A.putImageData(G,A.a-6,A.b-6);x("stopped");m&&m.c&&t();break;case "stop_pong":t();clearTimeout(I);
x("stopped");break;case "sound":na(a[1]);break;case "timer":m.c&&sa(a[1]);break;case "init":if(0==(a[1]&32))break;if(!m){console.log("no canvas");u.terminate();x("info",[0]);J();break}x("canvon");m.c=!0;a[1]&15&&(m.focus(),a[1]&1&&(m.onmousedown=oa,m.ontouchstart=pa),a[1]&2&&(m.onmouseup=X,m.ontouchend=function(c){c.clientX=W.clientX;c.clientY=W.clientY;X(c)},m.onmouseout=function(c){V&&(c.clientX=0,c.clientY=0,X(c))},0==(a[1]&4)&&(m.ontouchmove=function(c){W=c.touches[0]})),a[1]&4&&(m.onmousemove=
qa,m.ontouchmove=function(c){W=c.touches[0];c.clientX=W.clientX;c.clientY=W.clientY;qa(c)}),a[1]&8&&(m.addEventListener("keydown",M,!1),m.tabIndex=0));a[1]&16&&(K||(K=requestAnimationFrame(ta)));a[1]&64&&(m.addEventListener("mousedown",Y),m.addEventListener("touchstart",Y),m.addEventListener("touchend",Y));break;case "exit":z();H();u.terminate();x("info",[0]);J();break;default:console.log("unknown command: "+a)}}function J(){u=new Worker("easyw.js");u.onmessage=ra}
function ua(){u.postMessage(["timer"])}function sa(a){L&&(clearTimeout(L),L=null);0<=a&&(L=setTimeout(ua,1E3*a))}function ta(){u.postMessage(["animate"]);K=requestAnimationFrame(ta)}function M(a){u.postMessage(["key",a.key]);a.preventDefault()}var u=null,F=null;function y(a){n?a?O(a+"\n"):n.value="":m&&(a?(t(),A.fillText(a,60,60)):A&&C(1))}
function f(a,b,c){n=void 0===b?null:b;p=void 0===c?null:c;F=a;r(a);"object"!=typeof WebAssembly?(y("no wasm support"),x("nowasm")):(J(),setTimeout(function(){1==l&&y("Loading ...")},1E3));l=1}function ha(a){u.postMessage(["key",a])}function ja(a){var b=new Uint16Array(window.sab);if(a){b[4]=a.length+1;for(var c=0;c<a.length;c++)b[c+5]=a.charCodeAt(c)}else b[4]=0;b=new Int32Array(window.sab);Atomics.store(b,1,1);Atomics.notify?Atomics.notify(b,1,1):Atomics.wake(b,1,1)}
if(window.easyscript){var Z=window.easycanv;Z||(Z=document.querySelector("canvas"));e(window.easyscript,Z)};