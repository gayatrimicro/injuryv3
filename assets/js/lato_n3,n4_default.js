window.Typekit||(window.Typekit={}),window.Typekit.config={f:"//webfonts.creativecloud.com/c/cb22be/1w;lato,2,c0p:W:n3,c0r:W:n4/{format}{/extras*}",fi:[15709,15708],fn:["lato",["n3","n4"]],ht:"tk",js:"1.14.9",p:"//p.typekit.net/p.gif?s=4&h={host}&f=15709.15708&app={app}&_={_}",ps:4},function(t,n,e){if(n.querySelector){var i=Date.now||function(){return+new Date};ht.prototype.toString=function(){return encodeURIComponent(qt(this.b))},at.prototype.toString=function(){for(var t=[],n=0;n<this.b.length;n++)for(var e=(i=this.b[n]).G(),i=i.G(this.g),o=0;o<e.length;o++){var r;t:{for(r=0;r<i.length;r++)if(e[o]===i[r]){r=!0;break t}r=!1}t.push(r?1:0)}for(n=[],e=(t=(t=t.join("")).replace(/^0+/,"")).length;0<e;e-=4)n.unshift(parseInt(t.slice(0>e-4?0:e-4,e),2).toString(16));return n.join("")},ut.prototype.G=function(){return this.g},ct.prototype.start=function(){this.g=(new Date).getTime(),this.b=-1};var o={V:"a",$:"d",U:"i",W:"j",T:"k",Z:"l",NONE:"x"},r={};r.a=r.d=r.l=r.j=function(){return[]},r.i=function(t,n,e){return[new ht(t),new at(n,e)]},r.k=function(t){return[new ht(t)]};var s={};s.i=new ft(function(t,n,e){for(var i=0;i<n.length;i+=1){var o,r=n[i];o=r,o=t.replace(/(-1|-2)$/,"").slice(0,28)+"-"+o,e.push(new ut(o,[r]))}for(t={},r=0;r<n.length;r++)(t[i=(e=n[r]).charAt(1)]||(t[i]=[])).push(e);for(e=[[4,3,2,1,5,6,7,8,9],[7,8,9,6,5,4,3,2,1]],i=[],r=0;r<e.length;r++){o=e[r];for(var s=0;s<o.length;s++){var h=o[s];if(t[h]){i=i.concat(t[h]);break}}}for(e=i,i={},t=[],r=0;r<e.length;r++)i[o=e[r]]||(i[o]=!0,t.push(o));for(e=[],i=0;i<n.length;i++)for(r=n[i],o=0;o<t.length;o++)(s=t[o])==r&&e.push(s);return e}),gt.prototype.s=function(t,n){var e=t||{},i=this.b.replace(/\{\/?([^*}]*)(\*?)\}/g,function(t,n,i){return i&&e[n]?"/"+e[n].join("/"):e[n]||""});return i.match(/^\/\//)&&(i=(n?"http:":"https:")+i),i.replace(/\/*\?*($|\?)/,"$1")},dt.prototype.getName=function(){return this.b};var h=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;pt.prototype.toString=function(){return[this.b,this.g||"",this.h||"",this.s||""].join("")};var a={a:function(t,n){return"Safari"===t.getName()&&"AppleWebKit"===t.F&&vt(t.D,new pt(525,13))&&wt(t.D,new pt(534,50))&&(Tt(t)||Bt(t))||At(t)&&(Kt(t,n)||Wt(t,n)&&vt(t.o,new pt(4,1)))||n.I&&"Silk"===t.getName()&&wt(t.B,new pt(2))&&(Kt(t,n)||Bt)||n.I&&"Silk"===t.getName()&&vt(t.B,new pt(2))&&Wt(t,n)&&vt(t.o,new pt(4,1))||St(t)&&(Et(t,n)||Pt(t,n))||xt(t)&&(Et(t,n)||Pt(t,n))||Ct(t)&&(Et(t,n)||Pt(t,n))||"AdobeAIR"===t.getName()&&vt(t.B,new pt(2,5))&&(Ot(t)&&null===t.o.b||Ft(t)||Bt(t))},d:function(t,n){return xt(t)&&(Tt(t)||Ft(t)||Bt(t)||Wt(t,n)||"CrOS"===t.v||"CrKey"===t.v||Mt(t,n)||It(t,n))||Ct(t)&&(Mt(t,n)||It(t,n))||"Gecko"===t.F&&1===bt(t.D,new pt(1,9,1))&&mt(t.D,new pt(38))&&(Tt(t)||Ft(t)||Bt(t)||Wt(t,n))||"Safari"===t.getName()&&"AppleWebKit"===t.F&&vt(t.D,new pt(534,50))&&(Tt(t)||Bt(t))||St(t)&&(Mt(t,n)||It(t,n))||"Opera"===t.getName()&&vt(t.B,new pt(11,10))&&mt(t.B,new pt(22))&&(Tt(t)||Ft(t)||Bt(t)||Wt(t,n))||"MSIE"===t.getName()&&9<=t.M&&(Nt(t)||Ot(t)&&yt(t.o,new pt(6,0)))||"Edge"===t.getName()&&Nt(t)||"MSIE"===t.getName()&&n.R&&"Windows Phone"===t.v&&vt(t.o,new pt(8))||At(t)&&(n.P&&"BlackBerry"===t.v&&vt(t.o,new pt(10))||Ft(t))},j:function(t,n){return At(t)&&jt(t,n)||n.I&&"Silk"===t.getName()&&vt(t.B,new pt(2))&&(jt(t,n)||Ft(t))},i:function(t){return"MSIE"===t.getName()&&vt(t.B,new pt(6,0))&&(void 0===t.M||9>t.M)&&Tt(t)},l:function(t,n){return Ct(t)&&(Tt(t)||Ft(t)||Bt(t)||Wt(t,n)||"CrOS"===t.v||"CrKey"===t.v)||"Gecko"===t.F&&vt(t.D,new pt(39))&&(Tt(t)||Ft(t)||Bt(t)||Wt(t,n))||"Opera"===t.getName()&&vt(t.B,new pt(23))&&(Tt(t)||Ft(t)||Bt(t)||Wt(t,n))},x:function(){return!1}},u=new dt("Unknown",new pt,"Unknown",new pt,"Unknown",new pt,void 0);Gt.prototype.s=function(t){for(var n=[],e=0;e<arguments.length;e++)n.push(arguments[e].replace(/[\W_]+/g,"").toLowerCase());return n.join(this.b)};var f=!!t.FontFace;tn.prototype.getName=function(){return this.h},rn.prototype.G=function(t){return t?(this.h[t]||this.m).slice(0):this.m.slice(0)};var l={Y:"serif",X:"sans-serif"},c=null;ln.prototype.start=function(){this.h.serif=this.w.g.offsetWidth,this.h["sans-serif"]=this.A.g.offsetWidth,this.K=i(),dn(this)},bn.prototype.start=function(){var t=this.b.g.document,n=this,e=i(),o=new Promise(function(o,r){!function s(){i()-e>=n.h?r():t.fonts.load(function(t){return on(t)+" "+t.g+"00 300px "+nn(t.h)}(n.g),n.u).then(function(t){1<=t.length?o():setTimeout(s,25)},function(){r()})}()}),r=new Promise(function(t,e){setTimeout(e,n.h)});Promise.race([r,o]).then(function(){n.m(n.g)},function(){n.w(n.g)})};var g=null;wn.prototype.m=function(t){var n=this.g;n.m&&Vt(n.h,[n.g.s("wf",t.getName(),en(t).toString(),"active")],[n.g.s("wf",t.getName(),en(t).toString(),"loading"),n.g.s("wf",t.getName(),en(t).toString(),"inactive")]),Qt(n,"fontactive",t),this.A=!0,vn(this)},wn.prototype.u=function(t){var n=this.g;if(n.m){var e=zt(n.h,n.g.s("wf",t.getName(),en(t).toString(),"active")),i=[],o=[n.g.s("wf",t.getName(),en(t).toString(),"loading")];e||i.push(n.g.s("wf",t.getName(),en(t).toString(),"inactive")),Vt(n.h,i,o)}Qt(n,"fontinactive",t),vn(this)},mn.prototype.h=function(t){this.g.push(t)},mn.prototype.load=function(t,n){var e=t,i=n||{};if("string"==typeof e?e=[e]:e&&e.length||(i=e||{},e=[]),e.length)for(var o=this,r=e.length,s=0;s<e.length;s++)yn(this,e[s],function(){0==--r&&kn(o,i)});else kn(this,i)};var d=[2449897292,4218179547,2675077685,1031960064,1478620578,1386343184,3194259988,2656050674,3012733295,2193273665];Nn.prototype.supportsConfiguredBrowser=function(){return"x"!==this.g},Nn.prototype.init=function(){if(0<this.m.length){for(var t=[],e=0;e<this.m.length;e++)t.push(st(this.m[e]));e=this.b,t=t.join("");var i=Jt(this.b,"style");i.setAttribute("type","text/css"),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(n.createTextNode(t)),$t(e,"head",i)}},Nn.prototype.load=function(n,e,i){function o(){}var h=this,a=(w=i||{}).contextPath||".",u=w.hostname||this.H;n=w.timeout,i=!!w.async;var f,l=!1!==w.events,c=new ct,p=new ct,b=new Sn;if(w.active&&(o=w.active),w.active=function(){if(p.b=(new Date).getTime(),h.K){var n=h.K,e=-1!==c.g&&-1!==c.b?c.b-c.g:-1,i=-1!==p.g&&-1!==p.b?p.b-p.g:-1,r=h.A,s=new gt("//p.typekit.net/p.gif?s={service}&k={token}&app={app}&ht={hosting}&h={host}&f={variations}&a={account}&sl={stylesheetLoadTime}&fl={fontLoadTime}&dc={domainCheck}&js={version}&_={_}"),a=encodeURIComponent((t.__adobewebfontsappname__||n.app||"").toString().substr(0,20)),u=encodeURIComponent(qt(h.b)),f=[],l=[];t.Typekit.fonts||(t.Typekit.fonts=[]);l=t.Typekit.fonts;for(var g=0;g<n.b.length;g++){for(var d=!1,b=0;b<l.length;b++)if(n.b[g]===l[b]){d=!0;break}d||(f.push(n.b[g]),l.push(n.b[g]))}f.length&&function(t){var n=new Image(1,1),e=!1;n.src=t,n.onload=function(){e=!0,n.onload=null},setTimeout(function(){e||(n.src="about:blank",n.onload=null)},3e3)}(s.s({service:n.m,token:n.u,app:a,hosting:n.h,host:u,variations:f.join("."),account:n.g,stylesheetLoadTime:e,fontLoadTime:i,domainCheck:r,version:n.version,_:(+new Date).toString()}))}o()},f=new Yt(this.b,w),null!==this.w?function(t){for(var n=location.hostname.split(".");0!==n.length;){var e;t:{e=t.b;var i=n.join(".");if("string"!=typeof i&&"number"!=typeof i)throw Error("Value should be a string or number.");for(var o="number"==typeof i,r=0;r<e.h;r++){var s=0;if(o){s=d[r]||0;var h=An(h=4294967295&i,3432918353);h=An(h=h<<15|h>>>17,461845907),s=4^(s=An(s=(s^=h)<<13|s>>>19,5)+3864292196)}else{s=d[r]||0;var a=h=0,u=i.length%4,f=i.length-u;for(a=0;a<f;a+=4)h=An(h=(4294967295&i.charCodeAt(a+0))<<0|(4294967295&i.charCodeAt(a+1))<<8|(4294967295&i.charCodeAt(a+2))<<16|(4294967295&i.charCodeAt(a+3))<<24,3432918353),h=An(h=h<<15|h>>>17,461845907),s=An(s=(s^=h)<<13|s>>>19,5)+3864292196;switch(h=0,u){case 3:h^=(4294967295&i.charCodeAt(a+2))<<16;case 2:h^=(4294967295&i.charCodeAt(a+1))<<8;case 1:h=An(h^=(4294967295&i.charCodeAt(a+0))<<0,3432918353),s^=h=An(h=h<<15|h>>>17,461845907)}s^=i.length}if(s=An(s^=s>>>16,2246822507),s=An(s^=s>>>13,3266489909),s=((s^=s>>>16)>>>0)%e.b,h=e.g,Math.floor(s/32+1)>h.b.length)throw Error("Index is out of bounds.");if(a=Math.floor(s/32),!(h.b[a]&1<<s-32*a)){e=!1;break t}}e=!0}if(e)return!0;n.shift()}return!1}(this.w)&&(this.A=!0):this.A=!0,this.g){for(var w=s[this.g]||new ft(lt),v=0;v<this.h.length;v++)sn(this.h[v],this.g,w);if(this.u&&(w=function(t,n,e){return r[n](t,n,e)}(this.b,this.g,this.h),(w=function(t,n){for(var e=[],i=0;i<n.length;i++)e.push(n[i].toString());return{format:t,extras:e}}(this.g,w)).contextPath=a,u&&(w.hostname=u),a=this.u.s(w,!!this.J&&"https:"!==function(t){if("string"==typeof t.m)return t.m;var n=t.g.location.protocol;return"about:"==n&&(n=t.h.location.protocol),"https:"==n?"https:":"http:"}(this.b)),c.start(),Xt(this.b,a,function(t){return t.g++,function(){t.g--,xn(t)}}(b),i)),l){var m=[],y={},k=new wn(this.b,f,n);for(v=0;v<this.h.length;v++)m=m.concat(hn(this.h[v],this.g));for(v=0;v<m.length;v++)y[m[v].getName()]="BESbswy";!function(t,n){t.b=n,xn(t)}(b,function(){c.b=(new Date).getTime(),p.start(),function(t,n){t.b.body?n():t.b.addEventListener?t.b.addEventListener("DOMContentLoaded",n):t.b.attachEvent("onreadystatechange",function(){"interactive"!=t.b.readyState&&"complete"!=t.b.readyState||n()})}(h.b,function(){var n=m,i={},o=y||{};if(0===n.length&&e)Zt(k.g);else{k.h+=n.length,e&&(k.w=e);var r,s=[];for(r=0;r<n.length;r++){var h=n[r],a=o[h.getName()],u=k.g,f=h;u.m&&Vt(u.h,[u.g.s("wf",f.getName(),en(f).toString(),"loading")]),Qt(u,"fontloading",f),u=null,null===g&&(g=!!t.FontFace&&(!(f=/Gecko.*Firefox\/(\d+)/.exec(t.navigator.userAgent))||42<parseInt(f[1],10))),u=g?new bn(it(k.m,k),it(k.u,k),k.b,h,k.C,a):new ln(it(k.m,k),it(k.u,k),k.b,h,k.C,i,a),s.push(u)}for(r=0;r<s.length;r++)s[r].start()}})})}}};var p,b,w=new function(){var t=n;this.b=navigator.userAgent,this.g=t};if(-1!=w.b.indexOf("MSIE")||-1!=w.b.indexOf("Trident/")){var v=w,m=Ut(v),y=kt(Lt(v)),k=null,S=null,x=Dt(v.b,/Trident\/([\d\w\.]+)/,1),C=Rt(v.g),A=-1!=v.b.indexOf("MSIE")?kt(Dt(v.b,/MSIE ([\d\w\.]+)/,1)):kt(Dt(v.b,/rv:([\d\w\.]+)/,1));""!==x?(k="Trident",S=kt(x)):(k="Unknown",S=new pt),b=new dt("MSIE",A,k,S,m,y,C)}else{var O;if(-1!=w.b.indexOf("Edge/")){var N=w,T=Ut(N),B=kt(Lt(N)),P=kt(Dt(N.b,/Edge\/([\d\w\.]+)/,1));O=new dt("Edge",P,"Edge",P,T,B,Rt(N.g))}else{var I;if(-1!=w.b.indexOf("Opera"))I=function(){var t=w,n="Unknown",e=kt(Dt(t.b,/Presto\/([\d\w\.]+)/,1)),i=kt(Lt(t)),o=Rt(t.g);if(null!==e.b?n="Presto":(-1!=t.b.indexOf("Gecko")&&(n="Gecko"),e=kt(Dt(t.b,/rv:([^\)]+)/,1))),-1!=t.b.indexOf("Opera Mini/")){var r=kt(Dt(t.b,/Opera Mini\/([\d\.]+)/,1));return new dt("OperaMini",r,n,e,Ut(t),i,o)}return-1!=t.b.indexOf("Version/")&&null!==(r=kt(Dt(t.b,/Version\/([\d\.]+)/,1))).b?new dt("Opera",r,n,e,Ut(t),i,o):null!==(r=kt(Dt(t.b,/Opera[\/ ]([\d\.]+)/,1))).b?new dt("Opera",r,n,e,Ut(t),i,o):new dt("Opera",new pt,n,e,Ut(t),i,o)}();else{var E;if(/OPR\/[\d.]+/.test(w.b))E=_t();else{var M;if(/AppleWeb(K|k)it/.test(w.b))M=_t();else{var W;if(-1!=w.b.indexOf("Gecko")){var K=w,j="Unknown",F=new pt,U=kt(Lt(K));-1!=K.b.indexOf("Firefox")?(j="Firefox",F=kt(Dt(K.b,/Firefox\/([\d\w\.]+)/,1))):-1!=K.b.indexOf("Mozilla")&&(j="Mozilla"),W=new dt(j,F,"Gecko",kt(Dt(K.b,/rv:([^\)]+)/,1)),Ut(K),U,Rt(K.g))}else W=u;M=W}E=M}I=E}O=I}b=O}p=b;var L=new function(){var n=t;this.g=this.h=n,this.b=this.g.document};if(t.Typekit||(t.Typekit={}),!t.Typekit.load){var _=t.Typekit.config||{},D=null;_.k&&(D=new gt(_.k));var R=new mn(D,L);t.Typekit.load=function(){R.load.apply(R,arguments)},t.Typekit.addKit=function(){R.h.apply(R,arguments)}}var G,J,$,H,V,z=t.Typekit.config||{};if(($=new Nn(L)).K=new function(){var t=z.ht,n=z.fi,e=z.a,i=z.kt,o=z.js,r=z.l;this.m=z.ps,this.h=t,this.b=n||[],this.g=e||null,this.u=i||null,this.version=o||null,this.app=r||null},(J=new ot).O=!z.si,J.N=!z.st,J.I=!z.sa,J.R=!z.sw,J.P=!z.sb,$.C=J,z.dl){var q=z.dl;try{$.w=new function(){var n;if(n=q,t.atob)n=t.atob(n);else{if(1==(n=n.replace(/=+$/,"")).length%4)throw Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var e,i,o=0,r=0,s="";i=n.charAt(r++);~i&&(e=o%4?64*e+i:i,o++%4)?s+=String.fromCharCode(255&e>>(-2*o&6)):0)i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(i);n=s}for(e=[],o=0;o<n.length;o+=4)e.push(n.charCodeAt(o)<<24|n.charCodeAt(o+1)<<16|n.charCodeAt(o+2)<<8|n.charCodeAt(o+3)<<0);n=e.shift(),o=e.shift(),this.b=new On(n,o,e)}}catch(t){}}if(z.ds&&($.J=z.ds),z.f&&(G=new gt(z.f),$.u=G),z.hn&&($.H=z.hn),z.fn)for(H=0;H<z.fn.length;H+=2)$.h.push(new rn(z.fn[H],z.fn[H+1]));if(z.c)for(H=0;H<z.c.length;H+=2)$.m.push(new rt);$.L=p;t:{var X,Y=$.L,Z=new ot,Q=$.C||Z;for(X in o){var tt=o[X];if(a[tt]&&a[tt](Y,Q)){V=tt;break t}}for(X in o)if(a[tt=o[X]]&&a[tt](Y,Z)){V="x";break t}V="k"}if($.g=V,t.Typekit.addKit($),t.WebFont)try{t.Typekit.load()}catch(t){}}else n.documentElement.className+=" wf-inactive";function nt(t,n,e){return t.call.apply(t.bind,arguments)}function et(t,n,e){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(e,i),t.apply(n,e)}}return function(){return t.apply(n,arguments)}}function it(t,n,e){return(it=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?nt:et).apply(null,arguments)}function ot(){this.P=this.R=this.I=this.N=this.O=!0}function rt(){var t=[{name:"font-family",value:z.c[H+1]}];this.g=[z.c[H]],this.b=t}function st(t){for(var n=t.g.join(","),e=[],i=0;i<t.b.length;i++){var o=t.b[i];e.push(o.name+":"+o.value+";")}return n+"{"+e.join("")+"}"}function ht(t){this.b=t}function at(t,n){this.g=t,this.b=n}function ut(t,n){this.b=t,this.g=n}function ft(t){this.b=t}function lt(t,n){return n}function ct(){this.b=this.g=-1}function gt(t){this.b=t}function dt(t,n,e,i,o,r,s){this.b=t,this.B=n,this.F=e,this.D=i,this.v=o,this.o=r,this.M=s}function pt(t,n,e,i){this.b=null!=t?t:null,this.g=null!=n?n:null,this.h=null!=e?e:null,this.s=null!=i?i:null}function bt(t,n){return t.b>n.b||t.b===n.b&&t.g>n.g||t.b===n.b&&t.g===n.g&&t.h>n.h?1:t.b<n.b||t.b===n.b&&t.g<n.g||t.b===n.b&&t.g===n.g&&t.h<n.h?-1:0}function wt(t,n){return-1===bt(t,n)}function vt(t,n){return 0===bt(t,n)||1===bt(t,n)}function mt(t,n){return 0===bt(t,n)||-1===bt(t,n)}function yt(t,n){return 0===bt(t,n)}function kt(t){var n=null,e=null,i=null,o=null;return(t=h.exec(t))&&(null!==t[1]&&t[1]&&(n=parseInt(t[1],10)),null!==t[2]&&t[2]&&(e=parseInt(t[2],10)),null!==t[3]&&t[3]&&(i=parseInt(t[3],10)),null!==t[4]&&t[4]&&(o=/^[0-9]+$/.test(t[4])?parseInt(t[4],10):t[4])),new pt(n,e,i,o)}function St(t){return"Safari"===t.getName()&&"AppleWebKit"===t.F||"Unknown"===t.getName()&&"AppleWebKit"===t.F&&("iPhone"===t.v||"iPad"===t.v||"iPod"===t.v)}function xt(t){return"Chrome"===t.getName()&&vt(t.B,new pt(6))&&mt(t.B,new pt(35))}function Ct(t){return"Chrome"===t.getName()&&vt(t.B,new pt(36))}function At(t){return"BuiltinBrowser"===t.getName()}function Ot(t){return"Windows"===t.v}function Nt(t){return Ot(t)&&vt(t.o,new pt(6,1))}function Tt(t){return Ot(t)&&yt(t.o,new pt(5,1))||Ot(t)&&yt(t.o,new pt(5,2))||Ot(t)&&yt(t.o,new pt(6,0))||Nt(t)}function Bt(t){return"Macintosh"===t.v&&(vt(t.o,new pt(10,4))||null===t.o.b)}function Pt(t,n){return n.O&&("iPhone"===t.v||"iPod"===t.v)&&vt(t.o,new pt(4,2))&&wt(t.o,new pt(5))}function It(t,n){return n.O&&("iPhone"===t.v||"iPod"===t.v)&&vt(t.o,new pt(5))}function Et(t,n){return n.N&&"iPad"===t.v&&vt(t.o,new pt(4,2))&&wt(t.o,new pt(5))}function Mt(t,n){return n.N&&"iPad"===t.v&&vt(t.o,new pt(5))}function Wt(t,n){return n.I&&"Android"===t.v}function Kt(t,n){return Wt(t,n)&&vt(t.o,new pt(2,2))&&wt(t.o,new pt(3,1))}function jt(t,n){return Wt(t,n)&&vt(t.o,new pt(3,1))&&wt(t.o,new pt(4,1))}function Ft(t){return"Linux"===t.v||"Ubuntu"===t.v}function Ut(t){var n=Dt(t.b,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);return""!==n?(/BB\d{2}/.test(n)&&(n="BlackBerry"),n):""!==(t=Dt(t.b,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/,1))?("Mac_PowerPC"==t?t="Macintosh":"PlayStation"==t&&(t="Linux"),t):"Unknown"}function Lt(t){if((n=Dt(t.b,/(OS X|Windows NT|Android) ([^;)]+)/,2))||(n=Dt(t.b,/Windows Phone( OS)? ([^;)]+)/,2))||(n=Dt(t.b,/(iPhone )?OS ([\d_]+)/,2)))return n;if(n=Dt(t.b,/(?:Linux|CrOS|CrKey) ([^;)]+)/,1))for(var n=n.split(/\s/),e=0;e<n.length;e+=1)if(/^[\d\._]+$/.test(n[e]))return n[e];return(t=Dt(t.b,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?t:"Unknown"}function _t(){var t=w,n=Ut(t),e=kt(Lt(t)),i=kt(Dt(t.b,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1)),o="Unknown",r=new pt;r="Unknown";return/OPR\/[\d.]+/.test(t.b)?o="Opera":-1!=t.b.indexOf("Chrome")||-1!=t.b.indexOf("CrMo")||-1!=t.b.indexOf("CriOS")?o="Chrome":/Silk\/\d/.test(t.b)?o="Silk":"BlackBerry"==n||"Android"==n?o="BuiltinBrowser":-1!=t.b.indexOf("PhantomJS")?o="PhantomJS":-1!=t.b.indexOf("Safari")?o="Safari":-1!=t.b.indexOf("AdobeAIR")?o="AdobeAIR":-1!=t.b.indexOf("PlayStation")&&(o="BuiltinBrowser"),"BuiltinBrowser"==o?r="Unknown":"Silk"==o?r=Dt(t.b,/Silk\/([\d\._]+)/,1):"Chrome"==o?r=Dt(t.b,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=t.b.indexOf("Version/")?r=Dt(t.b,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==o?r=Dt(t.b,/AdobeAIR\/([\d\.]+)/,1):"Opera"==o?r=Dt(t.b,/OPR\/([\d.]+)/,1):"PhantomJS"==o&&(r=Dt(t.b,/PhantomJS\/([\d.]+)/,1)),new dt(o,r=kt(r),"AppleWebKit",i,n,e,Rt(t.g))}function Dt(t,n,e){return(t=t.match(n))&&t[e]?t[e]:""}function Rt(t){if(t.documentMode)return t.documentMode}function Gt(t){this.b=t||"-"}function Jt(t,n,e,i){if(n=t.b.createElement(n),e)for(var o in e)e.hasOwnProperty(o)&&("style"==o?n.style.cssText=e[o]:n.setAttribute(o,e[o]));return i&&n.appendChild(t.b.createTextNode(i)),n}function $t(t,e,i){(t=t.b.getElementsByTagName(e)[0])||(t=n.documentElement),t.insertBefore(i,t.lastChild)}function Ht(t){t.parentNode&&t.parentNode.removeChild(t)}function Vt(t,n,e){n=n||[],e=e||[];for(var i=t.className.split(/\s+/),o=0;o<n.length;o+=1){for(var r=!1,s=0;s<i.length;s+=1)if(n[o]===i[s]){r=!0;break}r||i.push(n[o])}for(n=[],o=0;o<i.length;o+=1){for(r=!1,s=0;s<e.length;s+=1)if(i[o]===e[s]){r=!0;break}r||n.push(i[o])}t.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function zt(t,n){for(var e=t.className.split(/\s+/),i=0,o=e.length;i<o;i++)if(e[i]==n)return!0;return!1}function qt(t){return t.g.location.hostname||t.h.location.hostname}function Xt(t,n,e,i){function o(){l&&h&&a&&(l(u),l=null)}var r=Jt(t,"link",{rel:"stylesheet",href:n,media:i?"only x":"all"}),s=t.b.styleSheets,h=!1,a=!i,u=null,l=e||null;f?(r.onload=function(){h=!0,o()},r.onerror=function(){h=!0,u=Error("Stylesheet failed to load"),o()}):setTimeout(function(){h=!0,o()},0),$t(t,"head",r),i&&function t(e){for(var i=0;i<s.length;i++)if(s[i].href&&-1!==s[i].href.indexOf(n))return void e();setTimeout(function(){t(e)},0)}(function(){r.media="all",function t(e){for(var i=0;i<s.length;i++)if(s[i].href&&-1!==s[i].href.indexOf(n)&&s[i].media){var o=s[i].media;if("all"===o||o.mediaText&&"all"===o.mediaText)return void e()}setTimeout(function(){t(e)},0)}(function(){a=!0,o()})})}function Yt(t,n){this.b=t,this.h=t.g.document.documentElement,this.u=n,this.g=new Gt("-"),this.w=!1!==n.events,this.m=!1!==n.classes}function Zt(t){if(t.m){var n=zt(t.h,t.g.s("wf","active")),e=[],i=[t.g.s("wf","loading")];n||e.push(t.g.s("wf","inactive")),Vt(t.h,e,i)}Qt(t,"inactive")}function Qt(t,n,e){t.w&&t.u[n]&&(e?t.u[n](e.getName(),en(e)):t.u[n]())}function tn(t,n){this.h=t,this.g=4,this.b="n";var e=(n||"n4").match(/^([nio])([1-9])$/i);e&&(this.b=e[1],this.g=parseInt(e[2],10))}function nn(t){var n=[];t=t.split(/,\s*/);for(var e=0;e<t.length;e++){var i=t[e].replace(/['"]/g,"");-1!=i.indexOf(" ")||/^\d/.test(i)?n.push("'"+i+"'"):n.push(i)}return n.join(",")}function en(t){return t.b+t.g}function on(t){var n="normal";return"o"===t.b?n="oblique":"i"===t.b&&(n="italic"),n}function rn(t,n){this.b=t,this.m=n,this.h={},this.g={}}function sn(t,n,e){for(var i,o=[],r=t.b.split(",")[0].replace(/"|'/g,""),s=t.G(),h=[],a={},u=0;u<s.length;u++)0<(i=s[u]).length&&!a[i]&&(a[i]=!0,h.push(i));e=e.b?e.b(r,h,o):h,t.h[n]=e,t.g[n]=o}function hn(t,n){for(var e=t.G(n),i=t.g[n]||[],o=[],r=0;r<e.length;r++)o.push(new tn(t.b,e[r]));for(r=0;r<i.length;r++)if((e=i[r].b)!==t.b)for(var s=i[r].G(),h=0;h<s.length;h++)o.push(new tn(e,s[h]));return o}function an(t,n){this.b=t,this.h=n,this.g=Jt(this.b,"span",{"aria-hidden":"true"},this.h)}function un(t){$t(t.b,"body",t.g)}function fn(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+nn(t.h)+";font-style:"+on(t)+";font-weight:"+t.g+"00;"}function ln(t,n,e,i,o,r,s){this.H=t,this.L=n,this.b=e,this.g=i,this.C=s||"BESbswy",this.h={},this.S=o||3e3,this.J=r||null,this.A=this.w=this.u=this.m=null,this.m=new an(this.b,this.C),this.u=new an(this.b,this.C),this.w=new an(this.b,this.C),this.A=new an(this.b,this.C),t=fn(t=new tn(this.g.getName()+",serif",en(this.g))),this.m.g.style.cssText=t,t=fn(t=new tn(this.g.getName()+",sans-serif",en(this.g))),this.u.g.style.cssText=t,t=fn(t=new tn("serif",en(this.g))),this.w.g.style.cssText=t,t=fn(t=new tn("sans-serif",en(this.g))),this.A.g.style.cssText=t,un(this.m),un(this.u),un(this.w),un(this.A)}function cn(){if(null===c){var n=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(t.navigator.userAgent);c=!!n&&(536>parseInt(n[1],10)||536===parseInt(n[1],10)&&11>=parseInt(n[2],10))}return c}function gn(t,n,e){for(var i in l)if(l.hasOwnProperty(i)&&n===t.h[l[i]]&&e===t.h[l[i]])return!0;return!1}function dn(t){var n,e=t.m.g.offsetWidth,o=t.u.g.offsetWidth;(n=e===t.h.serif&&o===t.h["sans-serif"])||(n=cn()&&gn(t,e,o)),n?i()-t.K>=t.S?cn()&&gn(t,e,o)&&(null===t.J||t.J.hasOwnProperty(t.g.getName()))?pn(t,t.H):pn(t,t.L):function(t){setTimeout(it(function(){dn(this)},t),50)}(t):pn(t,t.H)}function pn(t,n){setTimeout(it(function(){Ht(this.m.g),Ht(this.u.g),Ht(this.w.g),Ht(this.A.g),n(this.g)},t),0)}function bn(t,n,e,i,o,r){this.m=t,this.w=n,this.g=i,this.b=e,this.h=o||3e3,this.u=r||void 0}function wn(t,n,e){this.b=t,this.g=n,this.h=0,this.A=this.w=!1,this.C=e}function vn(t){0==--t.h&&t.w&&(t.A?((t=t.g).m&&Vt(t.h,[t.g.s("wf","active")],[t.g.s("wf","loading"),t.g.s("wf","inactive")]),Qt(t,"active")):Zt(t.g))}function mn(t,n){this.m=t,this.b=n,this.g=[]}function yn(t,n,e){n=t.m.s({id:encodeURIComponent(n)}),function(t,n,e){var i=t.b.getElementsByTagName("head")[0];if(i){var o=Jt(t,"script",{src:n}),r=!1;o.onload=o.onreadystatechange=function(){r||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(r=!0,e&&e(null),o.onload=o.onreadystatechange=null,"HEAD"==o.parentNode.tagName&&i.removeChild(o))},i.appendChild(o),setTimeout(function(){r||(r=!0,e&&e(Error("Script load timeout")))},5e3)}}(t.b,n,e)}function kn(t,n){if(0!==t.g.length){for(var e=new Yt(t.b,n),i=!1,o=0;o<t.g.length;o++)t.g[o].init(),i=i||t.g[o].supportsConfiguredBrowser();if(i)for(e.m&&Vt(e.h,[e.g.s("wf","loading")]),Qt(e,"loading"),e=0;e<t.g.length;e++)(i=t.g[e]).supportsConfiguredBrowser()&&i.load(null,e==t.g.length-1,n);else Zt(e);t.g=[]}}function Sn(){this.g=0,this.b=null}function xn(t){0==t.g&&t.b&&(t.b(),t.b=null)}function Cn(t,n){if(this.b=n||Array(Math.ceil(t/32)),!n)for(var e=0;e<this.b.length;e++)this.b[e]=0}function An(t,n){return(65535&t)*n+(((t>>>16)*n&65535)<<16)}function On(t,n,e){this.b=t,this.h=n,this.g=new Cn(t,e)}function Nn(t){this.b=t,this.g="x",this.C=this.L=null,this.h=[],this.m=[],this.H=this.u=null,this.J=!1,this.w=null,this.A=!1}}(this,document);try{Typekit.load()}catch(t){}